const ChatEvent = {
  System: 'system',
  Message: 'chatMessage',
};

class ChatNotifierClass {
  events = [];
  handlers = [];

  constructor() {
    const port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    this.initializeWebSocket();
  }

  initializeWebSocket() {
    this.socket.onopen = () => {
      this.receiveEvent({ from: 'System', type: ChatEvent.System, value: { msg: 'Connected to chat' } });
    };

    this.socket.onclose = () => {
      this.receiveEvent({ from: 'System', type: ChatEvent.System, value: { msg: 'Disconnected from chat. Attempting to reconnect...' } });
      this.reconnectWebSocket();
    };

    this.socket.onmessage = async (msg) => {
      try {
        let event;
        if (msg.data instanceof Blob) {
          // Attempt to read the Blob as text
          const text = await msg.data.text();
          event = JSON.parse(text); // Try parsing the text
        } else {
          event = JSON.parse(msg.data); // Otherwise, assume it's already a string
        }
        this.receiveEvent(event);
      } catch (error) {
        console.error('Failed to parse message', error);
        // Optionally handle the Blob or malformed JSON here
      }
    };
    
  }

  reconnectWebSocket() {
    setTimeout(() => {
      const port = window.location.port;
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
      this.initializeWebSocket(); // Re-initialize the WebSocket connection
    }, 4000); // Reconnect every 4 seconds
  }

  broadcastMessage(from, value) {
    if (this.socket) {
      if (this.socket.readyState === WebSocket.CLOSED || this.socket.readyState === WebSocket.CLOSING) {
        // WebSocket is closed or in the process of closing, open a new connection
        const port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.initializeWebSocket(); // Re-initialize the WebSocket connection
      } else if (this.socket.readyState === WebSocket.OPEN) {
        // WebSocket is open, send the message
        const message = { from, type: ChatEvent.Message, value };
        this.socket.send(JSON.stringify(message));
      } else {
        console.error('WebSocket is not open. Ready state:', this.socket.readyState);
      }
    }
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);

    this.handlers.forEach((handler) => {
      handler(event);
    });
  }
}

const ChatNotifier = new ChatNotifierClass();

export { ChatEvent, ChatNotifier };

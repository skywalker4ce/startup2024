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
      this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/scale/ws`);
  
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
  
      this.socket.onmessage = (msg) => {
        try {
          const event = JSON.parse(msg.data);
          this.receiveEvent(event);
        } catch {
          console.error('Failed to parse message');
        }
      };
    }
  
    reconnectWebSocket() {
      setTimeout(() => {
        const port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/scale/ws`);
        this.initializeWebSocket(); // Re-initialize the WebSocket connection
      }, 4000); // Reconnect every 3 seconds
    }
  
    broadcastMessage(from, value) {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        const message = { from, type: ChatEvent.Message, value };
        this.socket.send(JSON.stringify(message));
      } else {
        console.error('WebSocket is not open. Ready state:', this.socket ? this.socket.readyState : 'null');
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
  
  // Use a distinct variable name for the instance
  const ChatNotifier = new ChatNotifierClass();
  
  export { ChatEvent, ChatNotifier };
  
  
  
const ChatEvent = {
    System: 'system',
    Message: 'chatMessage',
  };
  
  class ChatMessage {
    constructor(from, type, value) {
      this.from = from;
      this.type = type;
      this.value = value;
    }
  }
  
  class ChatNotifier {
    events = [];
    handlers = [];
  
    constructor() {
      const port = window.location.port;
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
  
      this.socket.onopen = () => {
        this.receiveEvent(new ChatMessage('System', ChatEvent.System, { msg: 'Connected to chat' }));
      };
  
      this.socket.onclose = () => {
        this.receiveEvent(new ChatMessage('System', ChatEvent.System, { msg: 'Disconnected from chat' }));
      };
  
      this.socket.onmessage = async (msg) => {
        try {
          const event = JSON.parse(msg.data);
          this.receiveEvent(event);
        } catch {
          console.error('Failed to parse message');
        }
      };
    }
  
    broadcastMessage(from, value) {
      const message = new ChatMessage(from, ChatEvent.Message, value);
      this.socket.send(JSON.stringify(message));
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
  
  const ChatNotifier = new ChatNotifier();
  export { ChatEvent, ChatNotifier };
  
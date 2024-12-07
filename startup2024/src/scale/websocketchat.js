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
  
      this.socket.onopen = () => {
        this.receiveEvent({ from: 'System', type: ChatEvent.System, value: { msg: 'Connected to chat' } });
      };
  
      this.socket.onclose = () => {
        this.receiveEvent({ from: 'System', type: ChatEvent.System, value: { msg: 'Disconnected from chat' } });
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
  
    broadcastMessage(from, value) {
      const message = { from, type: ChatEvent.Message, value };
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
  
  // Use a distinct variable name for the instance
  const ChatNotifier = new ChatNotifierClass();
  
  export { ChatEvent, ChatNotifier };
  
  
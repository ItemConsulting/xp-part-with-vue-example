/**
 * Wrapper around a WebSocket for multiplexing messages
 */
class WebSocketMultiplexer {
  /**
   * Constructor for WebSocketMultiplexer
   * @param {WebSocket} webSocket
   * @param {object} scope
   */
  constructor ({ webSocket, scope }) {
    this.listeners = {};
    this.webSocket = webSocket;
    this.defaultScope = scope;

    this.webSocket.onmessage = (event) => this.dispatchEvent(event);
  }

  /**
   * Listen to event
   * @param {string} topic
   * @param {function(object, MessageEvent)} listener
   * @param {object} [scope]
   *
   * @return {WebSocketMultiplexer}
   */
  addEventListener (topic, listener, scope) {
    this.listeners[topic] = this.listeners[topic] || [];
    this.listeners[topic].push({ listener, scope });

    return this;
  }

  /**
   * Fire event. If any of the listeners returns false, return false
   * @param {MessageEvent} event
   */
  dispatchEvent(event) {
    const { topic, value } = JSON.parse(event.data);
    const triggers = this.listeners[topic] || [];

    triggers.forEach((trigger) => {
      trigger.listener.call(trigger.scope || this.defaultScope || this, value, event);
    });
  }
}

// Register "this.$webSocket" for each component
export default {
  beforeCreate() {
    const options = this.$options;

    if (options.webSocket) {
      this.$webSocket = new WebSocketMultiplexer({
        webSocket: options.webSocket,
        scope: this
      });
    } else if (options.parent && options.parent.$webSocket) {
      // TODO Instantiate a new WebSocketMultiplexer, so get scope correct for component
      this.$webSocket = options.parent.$webSocket;
    }
  }
}

<template>
  <div class="my-vue">
    <h2>Vue app - {{ title }}</h2>
    <p>{{ description }}</p>
    <p>{{ message }}</p>
    <p>{{ timeStamp }}</p>
  </div>
</template>

<script>
const TOPIC_STREAM_TEST = 'stream.test';
let count = 0;

/**
 * Post a message to a WebSocket
 * @param {WebSocket} webSocket
 * @param {string} topic
 * @param {number} count
 */
function postWebSocketMsg(webSocket, topic, count) {
  const msg = {
    topic,
    value: { count }
  };

  webSocket.send(JSON.stringify(msg));
}

/**
 * Create test data
 * @param {WebSocket} webSocket
 */
function initTestData(webSocket) {
  const interval = setInterval(() => {
    postWebSocketMsg(webSocket, TOPIC_STREAM_TEST, count++);
    postWebSocketMsg(webSocket, 'topic.without.listeners', -1);

    if(count > 5) {
      clearInterval(interval);
    }
  }, 1000);
}

export default {
  data: () => ({
    title: 'No title set',
    description: 'No description set',
    message: 'No message yet',
    timeStamp: undefined

  }),

  created() {
    this.$webSocket.addEventListener(TOPIC_STREAM_TEST, (value, event) => {
      this.message = value;
      this.timeStamp = event.timeStamp;
    });

    initTestData(this.$webSocket.webSocket);
  }
}
</script>

<style>
.my-vue {
   color: red;
}
</style>

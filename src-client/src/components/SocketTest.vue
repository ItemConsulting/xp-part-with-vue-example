<template>
  <div class="socketTest-wrap">
      <h2>Socket test</h2>
      <pre>{{result}}</pre>

      <input type="text" v-model="inputMsg" v-on:keyup.13="sendToSocket" />

  </div>
</template>



<script>
import Vue from 'vue';

export default {
  components: {

  },

  data: () => ({
    websocket: {},
    thing: 'something',
    result: ['pewpew'],
    inputMsg: "what",
    options: {
      url: 'wss://echo.websocket.org',
      origin: null
    }
  }),

  methods: {
    sendToSocket: function(e){
      console.log(e);
      console.log(this.inputMsg);

      if (e.keyCode === 13) {
        this.doSend(this.inputMsg)
      }
    },
    onOpen: function(evt){
      this.writeToScreen("CONNECTED");
      this.doSend("WebSocket rocks");
    },
    onMessage: function(evt){
      this.writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
      //this.websocket.close();
    },
    doSend: function(message){
      this.writeToScreen("SENT: " + message);
      this.websocket.send(message);
    },
    onClose: function(evt){
      this.writeToScreen("DISCONNECTED");
    },

    onError: function(evt){
      this.writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
    },
    writeToScreen: function(message){
      this.result.push(message) ;
    },
  },

  created: function(){
    this.websocket = new WebSocket('wss://echo.websocket.org');
    this.websocket.onopen = this.onOpen;
  },

  mounted: function(){
    this.websocket.onclose = this.onClose;
    this.websocket.onmessage = this.onMessage;
    this.websocket.onerror = this.onError;
  },
}


</script>



<!-- -->
<style>

</style>

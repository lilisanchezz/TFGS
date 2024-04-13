
<script setup>
 
import { ref, watch, reactive } from 'vue'
import { io } from 'socket.io-client'
 
const messages = ref([])
 
const addSender = (message, from) => `${from}: ${message}`;
const getFilename = fullpath => fullpath.split(/[\\|\/]/).pop();
const getData = token => JSON.parse(atob(token.split(/\./)[1]));
 
const socket = io('http://localhost:3000', { transports: ['websocket'] });
console.log('socket', socket)
const fileInput = ref(null)
 
const myEmail = getData(localStorage.getItem("token")).email;
console.log(myEmail);
socket.emit('login', myEmail);
 
 
socket.on('message', (msg) => {
    messages.value.push({...msg, mine: false});
});
 
socket.on('message_accepted', msg => {
    messages.value.push({ message: msg, mine: true, from: myEmail });
})
 
socket.on('file', (msg) => {
    messages.value.push({ from: msg.from, mine: false, message: `<a download="${msg.filename}" href="${msg.file}">${msg.filename}</a>`});
});
 
socket.on('file_accepted', (msg) => {
    messages.value.push({ from: myEmail, mine: true, message: `<a download="${msg.filename}" href="${msg.file}">${msg.filename}</a>`});
});
 
const message = ref('')
const sendMessage = () => {
    socket.emit('message', message.value);
}

 
const sendFile = () => {
  const file = fileInput.value.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      socket.emit('file', { filename: file.name, file: reader.result });
    };
    reader.readAsDataURL(file);
  }
}
 
</script>
 
<template>
  <div :class="$style.container">
    <h1>Chat</h1>
    <form @submit.prevent="sendMessage">
        <input type="text" v-model="message" />
        <button type="submit">Enviar</button>
    </form>
    <form @submit.prevent="sendFile">
      <input type="file" ref="fileInput" />
      <button type="submit">Enviar</button>
    </form>
    <ul>
        <li v-for="msg in messages" :class="{ mine: msg.mine }"><span>{{ msg.from }}</span>: <span v-html="msg.message"></span></li>
    </ul>
  </div>
</template>
 
 
<style module>
.container {
    width: 600px;
}
</style>
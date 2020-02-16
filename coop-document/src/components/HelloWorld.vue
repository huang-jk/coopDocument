<!--
 * @Autor: ylhuang
 * @Date: 2019-12-25 20:18:55
 * @LastEditTime : 2020-01-14 17:56:52
 -->
<template>
  <div class="hello">
      <div id="quillHello"></div>
      <div id="toolbar"></div>
  </div>
</template>

<script>

import QuillDocument from '../utils/quil-gulf';
import Quill from 'quill/quill.js';
import io from 'socket.io-client';
import ss from 'socket.io-stream';

export default {
  name: 'HelloWorld',
  mounted() {
    this.oneTest();
      
      
  },
  methods: {
    twoTest() {
      this.quill = new Quill('#quillHello', {
        modules: { toolbar: '#toolbar' },
        theme: 'snow'
      });
      console.log(this.quill);
      this.quillDocument = new QuillDocument({
          editorInstance: this.quill
      });
      var ws = new WebSocket("ws://localhost:3000");
      console.log(ws);
      // Connect to alice's server
      ws.connect(function(socket) {
        // create a link to the master
        var master = doc.masterLink()

        // connect to master document
        socket.pipe(master).pipe(socket)
      })
    },
    oneTest() {
      this.quill = new Quill('#quillHello', {
        modules: { toolbar: '#toolbar' },
        theme: 'snow'
      });
      console.log(this.quill);
      this.quillDocument = new QuillDocument({
          editorInstance: this.quill
      });
      console.log(this.quillDocument);
      var master = this.quillDocument.masterLink()

      this.quill.setContents('abs');
      console.log(master);
      
      // const socket = io.connect('http://localhost:3000');
      // var stream = ss.createStream();
      // ss(socket).emit('file', stream);
      // console.log(stream);
      // stream.pipe(master).pipe(stream); 
      //   // ss(client).on('file', function(stream, data) {
      //   //   stream.pipe(master).pipe(stream);
      //   // });
      //   console.log('链接成功');
    }
  }
}
</script>
<style lang="scss">
  // @import '../utils/quil.scss';
</style>



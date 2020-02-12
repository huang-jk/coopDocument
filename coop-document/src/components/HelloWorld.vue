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
import Quill from 'quill';
import io from 'socket.io-client';
import ss from 'socket.io-stream';
var stream = ss.createStream();

export default {
  name: 'HelloWorld',
  mounted() {

      this.quill = new Quill('#quillHello', {
        modules: { toolbar: '#toolbar' },
        theme: 'snow'
      });
      console.log(this.quill);
      this.quillDocument = new QuillDocument({
          editorInstance: this.quill
      });
      console.log(this.quillDocument);
      // var master = this.quillDocument.masterLink()

      // console.log(master);
      // console.log(stream.pipe(socket));
      
      const socket = io('http://localhost:3000');
      socket.on('connect', function(client){
        // stream.pipe(master).pipe(client)
        // console.log(client);
        socket.on('news', function (data) {
          console.log(data);
        });
        console.log('链接成功');
      });
      
  },
}
</script>
<style lang="scss">
  @import '../utils/quil.scss';
</style>



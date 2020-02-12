/*
 * @Autor: ylhuang
 * @Date: 2020-01-08 19:26:05
 * @LastEditTime : 2020-01-13 19:49:45
 */
const express = require('express');  
const app = express();               // 创建express实例，赋值给app。
const server = require('http').Server(app);  
const io = require('socket.io')(server);     //将socket的监听加到app设置的模块里。这两句理解不了的可以去socket.io官网去看
const path = require('path');        // 这是node的路径处理模块，可以格式化路径

const textOT = require('ot-text').type
const gulf = require('gulf')


// var doc = new gulf.Document({
//   storageAdapter: new gulf.MemoryAdapter,
//   ottype: textOT
// })
// doc.initializeFromStorage('abc') // Optionally supply default content

server.listen(3000,()=>{                
  console.log("server running at 127.0.0.1:3000");       // 代表监听3000端口，然后执行回调函数在控制台输出。  
});
/*socket*/  
io.on('connection',(socket)=>{              //监听客户端的连接事件  
    socket.emit('news', { hello: 'world' });
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
    // var slave = doc.slaveLink()
    // socket.pipe(slave).pipe(socket)
});
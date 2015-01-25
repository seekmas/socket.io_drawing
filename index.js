var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/' , function(req , res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection' , function(socket){

    socket.on('drawing' , function(data){
        io.emit('drawing_back' , data);
    });


    socket.on('hot point' , function(data){
        io.emit('draw hot point' , data);
    });

});

http.listen('888' , function(){
    console.log('server start at : 0.0.0.0:888');
});
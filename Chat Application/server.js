var mongo = require('mongodb').MongoClient,
    client = require('socket.io').listen(8001).sockets;

mongo.connect('mongodb://192.168.1.103/chat',function(err,db){
  if(err) throw err;

  client.on('connection',function(socket) {
      var col = db.collection('messages');

      sendStatus=function(s){
        socket.emit('status',s);
      };

      //Emit All messages
      col.find().limit(100).sort({_id:1}).toArray(function(err,res){
        if(err) throw err;
        socket.emit('output',res);

      });

      //wait for input
      socket.on('input',function(data){
        var name = data.name,
            message = data.message,
            whitespacepattern=/^\s*$/;

        if(whitespacepattern.test(name) || whitespacepattern.test(message)){
          sendStatus('Name and Message is required');
          //console.log('Invalid.');
        }    else{
                col.insert({name:name,message:message},function(){
                  //console.log('Inserted');

                  //Emit latest Message to All Clients
                  client.emit('output',[data]);

                  sendStatus({
                    message:"Message Sent",
                    clear: true
                  });
                });
        }

      });

  });
});

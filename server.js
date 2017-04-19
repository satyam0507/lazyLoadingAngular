var express = require('express');
var app = express();


app.use('/bower_components', express.static(__dirname + '/bower_components' ));
app.use('/scripts', express.static(__dirname + '/app/scripts' ));
app.use('/views', express.static(__dirname + '/app/views' ));


app.get('/', function(req,res)
{
    res.sendfile(__dirname + '/app/index.html');
});

app.get('/work',function(req,res){
    res.sendfile(__dirname + '/views/work.html');
});

app.listen(4000,function(){
    console.log('This App is at ::- 4000');
})
var http = require("http");

http.createServer(function(request,response){

	//发送htpp头部
	//状态值200
	//内容类型 text/plain
	
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('hello node js,this is the first nodejs app');
	}).listen(8888);
	
console.log("nodejs server is runnig at http://127.0.0.1:8888/");
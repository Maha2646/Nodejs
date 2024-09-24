const http=require('http')
const server=http.createServer((req,res)=>{
if(req.method==="GET"){
  res.writeHead(200,{Content-Type':'text/html'})
  res.write("<center>GET method is served</center>")
  res.end()
  const parsedURL =url.parse(req.url,true)
  const(username,email,password}=parsedURL.query

        res.write('<center>')
        res.write('<strong>Username:</strong><i>${username}</i><br>')
                res.write('<strong>Email:</strong><i>${Email}</i><br>')
                res.write('<strong>password:</strong><i>${password}</i><br>')
        
        res.write('</center>')
  res.end()
}
  else if(req.method==="POST"){
    res.writeHead(200,{Content-Type':'text/html'})
  res.write("<center>POST method is served</center>")
     res.write('<center>')
    res.write('<strong>Username:</strong><i>${username}</i><br>')
    res.write('<strong>Email:</strong><i>${Email}</i><br>')
    res.write('<strong>password:</strong><i>${password}</i><br>')
    res.write('</center>')
  res.end()
  const{
  res.end()
  }
  else {
  resres.writeHead(200,{Content-Type':'text/html'})
  res.write("<center>Invalid Method/center>")
  res.end()

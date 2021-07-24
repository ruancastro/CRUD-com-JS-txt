// incluindo uma biblioteca 'http'
const http = require('http');
const queryString = require('query-string');
const url = require('url');
var fs = require('fs');

//definição de endereço / URL
const hostname = '127.0.0.1'; //localhost
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {

var resposta = "Hello world";
const urlparse = url.parse(req.url,true);
const params = queryString.parse(urlparse.search); //busca só o que tem dps da interrogação

 // criar um usuario 
 if(urlparse.pathname == '/criar-usuario'){
   
  //console.log(params); 
  //http://127.0.0.1:3000/?nome=Ruan-castro&idade=23-anos&id=1
   fs.writeFile('users/'+params.id+'.txt',JSON.stringify(params), function (err) {
   if (err) throw err;
   console.log('Saved!');

   resposta = 'Usuario criado com sucesso'

   res.statusCode = 200; //fala para o navegador "encontrei e está tudo certo"
   res.setHeader('Content-Type', 'text/plain');
   res.end(resposta);
   
 });
 
}

else if(urlparse.pathname == '/selecionar-usuario') {

  fs.readFile('users/'+params.id +'.txt', function(err, data) {
  resposta = data;

  res.statusCode = 200; //fala para o navegador "encontrei e está tudo certo"
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});
}

else if(urlparse.pathname == '/remover-usuario') {
  fs.unlink('users/'+params.id +'.txt', function (err) {
    // if (err) throw err;
    console.log('File deleted!');

    resposta = err? "usuario não encontrado" : 'Usuario removido com sucesso';

    res.statusCode = 200; //fala para o navegador "encontrei e está tudo certo"
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);
});
  
}
 
});


// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

 
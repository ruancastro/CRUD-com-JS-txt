#Crud com Js, utilizando bd local (arquivos txt)

##criar/ atualizar um usuario
http://127.0.0.1:3000/criar-usuario?nome=Ruan-castro&idade=100-anos&id=2 cria o "2.txt" com os dados do usuario, que no caso seria
{"id":"2","idade":"100-anos","nome":"Ruan-castro"}  e o header fica "usuario criado com sucesso"

##selecionar usuario
 http://127.0.0.1:3000/selecionar-usuario?nome=Ruan-castro&idade=100-anos&id=2
seleciona o 2.txt e mostra na tela o JSON:  {"id":"2","idade":"100-anos","nome":"Ruan-castro"}

##remover usuario
http://127.0.0.1:3000/remover-usuario?nome=Ruan-castro&idade=100-anos&id=2
remove o arquivo 2.txt e o header fica "usuario removido com sucesso"
CRUD
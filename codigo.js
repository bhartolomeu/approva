 function ir_para_pagina(url_pagina){
	window.location.href=url_pagina
}
function novo_usuario(){
	    usuario = document.getElementById('usuario').value
	    senha = document.getElementById('senha').value
	    nome = document.getElementById('nome').value
    	email = document.getElementById('email').value
    	telefone = document.getElementById('telefone').value
    	//Agora precisa armazenar tudo isso
    	console.log(nome+' criou o usuário '+usuario+' com a senha '+senha+' com o e-mail '+email+' e com o telefone'+ telefone)
}
function login(){
	usuario = document.getElementById('usuario').value
	senha = document.getElementById('senha').value
	console.log('O usuario '+usuario+' com senha ' +senha+" está pronto para logar")
	ir_para_pagina('conteudo.html')
}
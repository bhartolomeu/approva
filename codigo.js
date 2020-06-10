 function ir_para_pagina(url_pagina){
	window.location.href=url_pagina
}

function login(){
	usuario = document.getElementById('usuario').value
	senha = document.getElementById('senha').value
	
	if(usuario=='alguem' && senha=='algo'){
		console.log('O usuario '+usuario+' com senha ' +senha+" está pronto para logar")
    	ir_para_pagina('conteudo.html')
    }else{
    	console.log('O usuario '+usuario+' com senha ' +senha+" não está cadastrado")
    	window.alert('USUÁRIO NÃO CADASTRADO')
    }

}

function Usuario(){ //Essa é a função construora de usuários
 	this.usuario = document.getElementById('usuario').value
    this.senha = document.getElementById('senha').value
    this.nome = document.getElementById('nome').value
   	this.email = document.getElementById('email').value
   	this.telefone = document.getElementById('telefone').value
   	//Agora precisa armazenar tudo isso
   	console.log(this.nome+' criou o usuário '+this.usuario+' com a senha '+this.senha+' com o e-mail '+this.email+' e com o telefone'+ this.telefone)
   	if(window.confirm("Você está cadastrado, quer fazer login?")){
   		ir_para_pagina('login.html')
   	}
}
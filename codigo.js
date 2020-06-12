 function ir_para_pagina(url_pagina){
	window.location.href=url_pagina
}

function login(){
	let email = document.getElementById('email').value
	let senha = document.getElementById('senha').value
	if(email=='alguem' && senha=='algo'){
		console.log('O usuario '+email+' com senha ' +senha+" está pronto para logar")
    	ir_para_pagina('conteudo.html')
    }else{
    	console.log('O usuario '+email+' com senha ' +senha+" não está cadastrado")
    	window.alert('USUÁRIO INVÁLIDO')
    }

}

//Função para abrir o arquivo de registro
function EscreverNoArquivo(arquivo,novo_usuario){//Realmente precisamos desta função?
	//Aqui escrevemos o texto no arquivo
	arquivo.WriteLine(novo_usuario.id_usuario+','+novo_usuario.nome+','+novo_usuario.senha+','+novo_usuario.email+','+novo_usuario.telefone+';')
	//Aqui fechamos o arquivo
	arquivo.Close();
}

function Usuario(senha,nome,email,telefone){ //Essa é a função construora de usuários
	this.id_usuario = Math.floor(Math.random() * 100000000) //O id deve ser gerado ramdomicamente
	this.senha = senha
	this.nome = nome
	this.email = email
	this.telefone = telefone
}

function novo_usuario(){
	let fs = Server.CreateObject("Scripting.FileSystemObject")
	let dados = new ActiveXObject(fs);
	//Modo de captura 1: armazenamos tudo numa variável primeiro e depois construimos o objeto
	/*Aqui capturamos os valores nos inputs da página de cadastro
 	let senha = document.getElementById('senha').value
    let nome = document.getElementById('nome').value
   	let email = document.getElementById('email').value
   	let telefone = document.getElementById('telefone').value
   	Agora precisa armazenar tudo isso...*/

    //Modo de captura 2: construimos o objeto direto com a leitura dos inputs sem passar por uma variável primeiro
    var novo_usuario = new Usuario(document.getElementById('senha').value,document.getElementById('nome').value,document.getElementById('email').value,document.getElementById('telefone').value);
    let arquivo = dados.OpenTextFile('registro_usuarios.txt', 1, true);//Aqui abrimos o arquivo
  	EscreverNoArquivo(arquivo,novo_usuario)
	console.log(novo_usuario.nome+' criou uma conta com a senha '+novo_usuario.senha+', com o e-mail '+novo_usuario.email+' e com o telefone'+novo_usuario.telefone)
   	console.log('O sistema gerou para ele o id:',novo_usuario.id_usuario)
   	if(window.confirm("Você está cadastrado, quer fazer login?")){
   		ir_para_pagina('login.html')
   	}
}



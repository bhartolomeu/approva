
class Usuario{
    constructor(senha,nome,email,telefone){ //Essa é a função construora de usuários
	    this.id_usuario = Math.floor(Math.random() * 100000000); //O id deve ser gerado ramdomicamente
	    this.senha = senha;
	    this.nome = nome;
	    this.email = email;
	    this.telefone = telefone;
    }

    get login(){
		let email = document.getElementById('email').value;
		let senha = document.getElementById('senha').value;
		if(email=='alguem' && senha=='algo'){
			console.log('O usuario '+email+' com senha ' +senha+" está pronto para logar");
    		ir_para_pagina('conteudo.html');
	    }else{
    		console.log('O usuario '+email+' com senha ' +senha+" não está cadastrado");
    		window.alert('USUÁRIO INVÁLIDO');
    	}
    }
}
function cadastro(){
    //let dados = new XMLHttpRequest();
    //pegaip01()
	//pegaip02()
	let dados = new XMLHttpRequest();
	let novo_usuario = new Usuario(document.getElementById('senha').value,
    	document.getElementById('nome').value,
   		document.getElementById('email').value,
   		document.getElementById('telefone').value);
   	let arquivo = dados.open('GET','registro_usuarios.txt', false);//Aqui abrimos o arquivo
   	//https://github.com/nickewing/line-reader Projeto do github que permite ler arquivos linha a linha
  	arquivo.WriteLine(novo_usuario.id_usuario+
		','+novo_usuario.nome+
		','+novo_usuario.senha+
		','+novo_usuario.email+
		','+novo_usuario.telefone+';');
	//Aqui fechamos o arquivo
	arquivo.Close();
	//if(window.confirm("Você está cadastrado, quer fazer login?")){
	//	ir_para_pagina('login.html');
	//}
}
/*
function pegaip01(){
    var script=document.createElement('script');
    script.src='http://ip-api.com/json/?callback=DADOS_IP&fields=33292287';
    document.body.appendChild(script);
}

function pegaip02(){

    var url = 'http://ip-api.com/json/?lang=pt-BR&fields=33292287';
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var dados  = JSON.parse(xmlhttp.response);
	        DADOS_IP(dados);
	    }
    }
    let texto = xmlhttp.open("GET", 'registro_usuarios.txt');
    console.log(texto)
    xmlhttp.send();
}*/

function ir_para_pagina(url_pagina){
	window.location.href=url_pagina;
}
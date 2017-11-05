/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var lista = ["adm@adm", "teste@teste.com"];
var senhas = ["123", "456"];
var logado = false;

function verificaEmail(email){
    for(let i = 0; i < lista.length; i++){
        if(lista[i] === email){
            return true;
        }else{
            return false;
        }
    }
}

function novoCadastro(){
    var email = document.getElementById("emailInput");
    var senha1 = document.getElementById("senhaInput");
    var senha2 = document.getElementById("senha2Input");
    
    if(verificaEmail(email.value)){
        alert("E-mail ja cadastrado!");
        return false;
    }else{
        if(senha1.value !== senha2.value){
            alert("senha não confere!");
            return false;
        }else{
            logado = true;
        }
    }
}
    
function validaUsuario(){
    var email = document.getElementById("uname");
    var passw = document.getElementById("psw");
    for(let i = 0; i< lista.length; i++){
        if(lista[i] === email.value && senhas[i] === passw.value){
            return true;
        }else{
            alert("usuário ou senha invalido!");
            return false;
        }
    }   
}

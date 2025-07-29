const numeroSenha = Document.querySelector('.parametro-senha_texto')
let tamanhosenha = 5;
numeroSenha.textContent =tamanhosenha;

const botoes = document.querySelectorAll('.parametro-senha_botao')

botoes[0].onclick = diminuitamanho;
botoes[1].onclick = aumentatamanho;

function diminuitamanho() {
    if (tamanhosenha > 1) {
        //tamanhosenha = tamanhosenha-1;
        tamanhosenha--;

    }
    
    numeroSenha.textContent = tamanhosenha;
    geralsenha()
}
function aumentatamanho(){
    if(tamanhosenha < 20){
        //tamanhosenha = tamanhosnha+1;
        tamanhosenha++;
    }
    numeroSenha.textContent = tamanhosenha;
    geralsenha();
}
const campo = document.querySelector('#campo-senha')
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
geralsenha();


function gerasenha(){
    let senha = ";
    for(let i = 0, i < tamanhosenha;i++){
        let numeroaleatorio = Math.random()*letrasMaiusculas.length;
        numeroaleatorio = Math.floor(numeroaleatorio);
        senha = senha + letrasMaiusculas(numeroaleatorio);
    }

campoSenha.value = senha;
}

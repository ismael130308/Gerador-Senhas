const numeroSenha = Document.querySelector('.parametro-senha_texto')
let tamanhosenha = 12;
numeroSenha.textContent =tamanhosenha;
const campoSenha = document.querySelector('#campo-senha')
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
const numeros = '0123456789';
const simbulo = '!#*?%@';
const botoes = document.querySelectorAll('.parametro-senha_botao')
const campoSenha = document.querySelector('#campo-senha')
const checkbox = document.querySelectorAll('.checkbox')
const forcasenha = document.querySelectorAll('.forca')

botoes[0].onclick = diminuitamanho;
botoes[1].onclick = aumentatamanho;

function diminuitamanho() {
    if (tamanhosenha > 1) {
        //tamanhosenha = tamanhosenha-1;
        tamanhosenha--;

    }
    
    numeroSenha.textContent = tamanhosenha;
    gerasenha()
}
function aumentatamanho(){
    if(tamanhosenha < 20){
        //tamanhosenha = tamanhosnha+1;
        tamanhosenha++;
    }
    numeroSenha.textContent = tamanhosenha;
    gerasenha();
}

for (i = 0; i < checkbox.length; i++){
checkbox[i].onclick = gerasenha;
}

gerasenha ();
function gerasenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[2].checked) {
         alfabeto = alfabeto + numeros;
     }
    if (checkbox[3].checked) {
         alfabeto = alfabeto + simbulo;
     }

     let senha = ";
     for (let i = 0; <tamanhosenha; i++)
     let numerosAleatorios = Math.random()
}
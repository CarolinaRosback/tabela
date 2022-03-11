

function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const kilos = parseFloat(document.getElementById('kg').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
	altura / 100;
	const resultadoImc = (kilos / (altura * altura));

    const imc = (resultadoImc * 10000);

    //arredonda o imc
    imcFormatado = Math.round(imc)

    const mensagem = calculaNivelImc(imcFormatado)
    
    template(nome, kilos, altura, imcFormatado, mensagem);
    
}

//calcula o nivel do imc
function calculaNivelImc(imc){
    if (imc < 18.5) {
        mensagem = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem = "Peso normal"
    } else if (imc >= 24.9 && imc <= 29.9) {
        mensagem = "Sobrepeso"
    } else if (imc >= 30 && imc <= 34.9) {
        mensagem = "Obesidade grau |"
    } else if (imc = 35 && imc <= 39.9) {
        mensagem = "Obesidade grau ||"
    } else{
        mensagem = "Obesidade grau |||"
    }
    return mensagem;

}


    //template da tabela a ser enviado
    function template(nome, kilos, altura,imcFormatado, mensagem) {
        elemento = document.getElementById('tabela')
    //retorna o html 
    return elemento.innerHTML += `            
                        <tr>
                        <td>   
                        ${nome}
                        </td>
                        <td>
                        ${kilos}
                        </td>
                        <td>
                        ${altura}
                        </td>
                        <td>
                        ${imcFormatado}
                        </td>
                        <td>   
                        ${mensagem}
                        </td>
                        </tr>

        `;

    }

    function limparCampos(){
    document.getElementById('nome').value = "";
    document.getElementById('kg').value="";
    document.getElementById('altura').value="";
    document.getElementById('imc').value = "";

    }


    



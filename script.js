function imc() {
    
    let altura = document.getElementById('input_altura').value
    let peso = document.getElementById('input_peso').value
    let numero = document.getElementById('p_res_num')
    let texto = document.getElementById('p_res_txt')

    let calculo = peso / (altura ** 2)

    if (altura == '' && peso == '') {

        alert('Nenhum dado foi informado!')

    } else if (altura == '') {

        alert('A altura não foi informada!')

    } else if (peso == '') {

        alert('O peso não foi informado!')

    } else if (calculo < 18.5) {

        numero.innerHTML = `${calculo.toFixed(2)}`
        texto.style.color = 'rgb(255, 0, 0)'
        texto.innerHTML = `Você está Desnutrido.`

    } else if (calculo <= 24.9) {

        numero.innerHTML = `${calculo.toFixed(2)}`
        texto.style.color = 'rgb(0, 255, 0)'
        texto.innerHTML = `Você está no Peso Adequado.`

    } else if (calculo <= 29.9) {

        numero.innerHTML = `${calculo.toFixed(2)}`
        texto.style.color = 'rgb(255, 255, 0)'
        texto.innerHTML = `Você está em Sobrepeso.`

    } else if (calculo <= 34.9) {

        numero.innerHTML = `${calculo.toFixed(2)}`
        texto.style.color = 'rgb(255, 111, 0)'
        texto.innerHTML = `Você está em Obesidade Grau 1.`

    } else if (calculo <= 39.9) {

        numero.innerHTML = `${calculo.toFixed(2)}`
        texto.style.color = 'rgb(255, 50, 0)'
        texto.innerHTML = `Você está em Obesidade Grau 2.`

    } else if (calculo >= 40) {

        numero.innerHTML = `${calculo.toFixed(2)}`
        texto.style.color = 'rgb(255, 0, 0)'
        texto.innerHTML = `Você está em Obesidade Grau 3.`

    }

}

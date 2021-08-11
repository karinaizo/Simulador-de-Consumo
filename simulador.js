function avancar1() {
    if ((document.getElementById('brushing').value == "") || 
        (document.getElementById('toilet').value == "") || 
        (document.getElementById('shower').value == "") ||
        (document.getElementById('washing-machine').value == "") ||
        (document.getElementById('dish-washing').value == "") ||
        (document.getElementById('sink').value == "")){
        alert('Por favor preencha todos os campos para avançar');

    } else {
        document.getElementById('one').style.backgroundColor = 'white';
        document.getElementById('two').style.backgroundColor = '#BA68C8';

        document.getElementsByTagName('h4')[0].innerHTML = 'Insira o tempo gasto a cada execução das ações';

        document.getElementsByClassName('display')[0].style.display = 'none';
        document.getElementsByClassName('display')[1].style.display = 'none';

        document.getElementsByClassName('vez')[0].style.display = 'none';
        document.getElementsByClassName('vez')[2].style.display = 'none';
        document.getElementsByClassName('vez')[4].style.display = 'none';
        document.getElementsByClassName('vez')[5].style.display = 'none';

        document.getElementsByClassName('min')[0].style.display = 'block';
        document.getElementsByClassName('min')[1].style.display = 'block';
        document.getElementsByClassName('min')[2].style.display = 'block';
        document.getElementsByClassName('min')[3].style.display = 'block';

        document.getElementById('button').style.display = 'none';
        document.getElementsByClassName('btn')[0].style.display = 'block';
    }
} 

function avancar2() {
    if ((document.getElementById('input0').value == "") || 
        (document.getElementById('input1').value == "") || 
        (document.getElementById('input2').value == "") ||
        (document.getElementById('input3').value == "")){
        alert('Por favor preencha todos os campos para avançar');

    } else {
        document.getElementById('two').style.backgroundColor = 'white';
        document.getElementById('three').style.backgroundColor = '#BA68C8';

        document.getElementsByTagName('h4')[0].innerHTML = 'Selecione a sua categoria';

        document.getElementById('formulario-img').style.display = 'none';
        document.getElementById('categorias').style.display = 'flex';

        document.getElementsByClassName('btn')[0].style.display = 'none';
        document.getElementsByClassName('btn')[1].style.display = 'block';
    }
} 

function calcular() {
    if ((document.getElementById('residencial-comum').checked == false) &&
        (document.getElementById('residencial-social').checked == false) &&
        (document.getElementById('residencial-vulneravel').checked == false)){
        alert('Por favor selecione uma categoria');

    } else {
        document.getElementById('three').style.backgroundColor = 'white';
        document.getElementById('four').style.backgroundColor = '#BA68C8';

        document.getElementsByTagName('h4')[0].innerHTML = 'Confira seus gastos mensais';

        document.getElementById('categorias').style.display = 'none';

        document.getElementsByClassName('vez')[1].style.display = 'none';
        document.getElementsByClassName('vez')[3].style.display = 'none';

        document.getElementsByClassName('min')[0].style.display = 'none';
        document.getElementsByClassName('min')[1].style.display = 'none';
        document.getElementsByClassName('min')[2].style.display = 'none';
        document.getElementsByClassName('min')[3].style.display = 'none';

        document.getElementsByClassName('display')[0].style.display = 'block';
        document.getElementsByClassName('display')[1].style.display = 'block';
        document.getElementById('formulario-img').style.display = 'flex';

        document.getElementsByClassName('number-input')[0].style.display = 'flex';
        document.getElementsByClassName('number-input')[1].style.display = 'flex';
        document.getElementsByClassName('number-input')[2].style.display = 'flex';
        document.getElementsByClassName('number-input')[3].style.display = 'flex';
        document.getElementsByClassName('number-input')[4].style.display = 'flex';
        document.getElementsByClassName('number-input')[5].style.display = 'flex';
        document.getElementsByClassName('number-input')[6].style.display = 'flex';

        document.getElementById('total').style.display = 'block';

        document.getElementsByClassName('btn')[1].style.display = 'none';
        document.getElementsByClassName('btn')[2].style.display = 'block';
    }
} 

function refazer() {
    location.reload();
}
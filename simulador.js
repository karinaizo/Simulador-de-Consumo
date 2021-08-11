function avancar1() {
    window.document.getElementById('principal').scrollIntoView({behavior:"smooth"});

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

        document.getElementById('formulario').style.animationName='slide2';
        document.getElementsByTagName('h4')[0].style.animationName='slide2';

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
    window.document.getElementById('principal').scrollIntoView({behavior:"smooth"});

    if ((document.getElementById('input0').value == "") || 
        (document.getElementById('input1').value == "") || 
        (document.getElementById('input2').value == "") ||
        (document.getElementById('input3').value == "")){
        alert('Por favor preencha todos os campos para avançar');

    } else {
        document.getElementById('two').style.backgroundColor = 'white';
        document.getElementById('three').style.backgroundColor = '#BA68C8';

        document.getElementsByTagName('h4')[0].innerHTML = 'Selecione a sua categoria';

        document.getElementById('formulario').style.animationName='slide3';
        document.getElementsByTagName('h4')[0].style.animationName='slide3';

        document.getElementById('formulario-img').style.display = 'none';
        document.getElementById('categorias').style.display = 'flex';

        document.getElementsByClassName('btn')[0].style.display = 'none';
        document.getElementsByClassName('btn')[1].style.display = 'block';
    }
} 

function calcular() {
    window.document.getElementById('principal').scrollIntoView({behavior:"smooth"});

    if ((document.getElementById('residencial-comum').checked == false) &&
        (document.getElementById('residencial-social').checked == false) &&
        (document.getElementById('residencial-vulneravel').checked == false)){
        alert('Por favor selecione uma categoria para finalizar o cálculo');

    } else {
        document.getElementById('three').style.backgroundColor = 'white';
        document.getElementById('four').style.backgroundColor = '#BA68C8';

        document.getElementsByTagName('h4')[0].innerHTML = 'Confira seus gastos mensais';

        document.getElementById('formulario').style.animationName='slide4';
        document.getElementsByTagName('h4')[0].style.animationName='slide4';

        document.getElementById('categorias').style.display = 'none';

        document.getElementsByClassName('vez')[1].style.display = 'none';
        document.getElementsByClassName('vez')[3].style.display = 'none';

        document.getElementsByClassName('min')[0].style.display = 'none';
        document.getElementsByClassName('min')[1].style.display = 'none';
        document.getElementsByClassName('min')[2].style.display = 'none';
        document.getElementsByClassName('min')[3].style.display = 'none';

        var vez0 = (document.getElementById('brushing').value)*4;
        var vez1 = (document.getElementById('toilet').value)*4;
        var vez2 = (document.getElementById('shower').value)*4;
        var vez3 = (document.getElementById('washing-machine').value)*4;
        var vez4 = (document.getElementById('dish-washing').value)*4;
        var vez5 = (document.getElementById('sink').value)*4;

        var min0 = (document.getElementById('input0').value)*vez0;
        var min1 = (document.getElementById('input1').value)*vez2;
        var min2 = (document.getElementById('input2').value)*vez4;
        var min3 = (document.getElementById('input3').value)*vez5;

        document.getElementById('res0').value = min0.toFixed(2).replace('.', ",") + ' min';
        document.getElementById('res1').value = (min0*2.4).toFixed(2).replace('.', ",") + ' L'; 
        document.getElementById('res3').value = '--- min';
        document.getElementById('res4').value = (vez1*12).toFixed(2).replace('.', ',') + ' L';
        document.getElementById('res6').value = min1.toFixed(2).replace('.', ",") + ' min';
        document.getElementById('res7').value = (min1*9).toFixed(2).replace('.', ",") + ' L';
        document.getElementById('res9').value = '--- min';
        document.getElementById('res10').value = (vez3*135).toFixed(2).replace('.', ',') + ' L';
        document.getElementById('res12').value = min2.toFixed(2).replace('.', ",") + ' min';
        document.getElementById('res13').value = (min2*7.8).toFixed(2).replace('.', ",") + ' L';
        document.getElementById('res15').value = min3.toFixed(2).replace('.', ",") + ' min';
        document.getElementById('res16').value = (min3*2.5).toFixed(2).replace('.', ",") + ' L';

        var litros0 = min0*2.4;
        var litros1 = vez1*12;
        var litros2 = min1*9;
        var litros3 = vez3*135;
        var litros4 = min2*7.8;
        var litros5 = min3*2.5;

        var totalmin=(min0+min1+min2+min3);
        var totalitros=(litros0+litros1+litros2+litros3+litros4+litros5);

        if (((totalitros/1000) >=0) && ((totalitros/1000) <=10)) {
            if (document.getElementById('residencial-comum').checked == true) {
                var reais0 = (litros0*29)/totallitros;
                var reais1 = (litros1*29)/totalitros;
                var reais2 = (litros2*29)/totalitros;
                var reais3 = (litros3*29)/totalitros;
                var reais4 = (litros4*29)/totalitros;
                var reais5 = (litros5*29)/totalitros;
                var totalvalor = 29;
            }else if (document.getElementById('residencial-social').checked == true) {
                var reais0 = (litros0*9.05)/totalitros;
                var reais1 = (litros1*9.05)/totalitros;
                var reais2 = (litros2*9.05)/totalitros;
                var reais3 = (litros3*9.05)/totalitros;
                var reais4 = (litros4*9.05)/totalitros;
                var reais5 = (litros5*9.05)/totalitros;
                var totalvalor = 9.05;
            }else {
                var reais0 = (litros0*6.90)/totalitros;
                var reais1 = (litros1*6.90)/totalitros;
                var reais2 = (litros2*6.90)/totalitros;
                var reais3 = (litros3*6.90)/totalitros;
                var reais4 = (litros4*6.90)/totalitros;
                var reais5 = (litros5*6.90)/totalitros;
                var totalvalor = 6.90;
            }
        
        }else if ((totalitros/1000) >=11 && (totalitros/1000) <=20) {
            if (document.getElementById('residencial-comum').checked == true) {
                var reais0 = (litros0/1000)*4.54;
                var reais1 = (litros1/1000)*4.54;
                var reais2 = (litros2/1000)*4.54;
                var reais3 = (litros3/1000)*4.54;
                var reais4 = (litros4/1000)*4.54;
                var reais5 = (litros5/1000)*4.54;
                var totalvalor = (reais0+reais1+reais2+reais3+reais4+reais5);
            }else if (document.getElementById('residencial-social').checked == true) {
                var reais0 = (litros0/1000)*1.55;
                var reais1 = (litros1/1000)*1.55;
                var reais2 = (litros2/1000)*1.55;
                var reais3 = (litros3/1000)*1.55;
                var reais4 = (litros4/1000)*1.55;
                var reais5 = (litros5/1000)*1.55;
                var totalvalor = (reais0+reais1+reais2+reais3+reais4+reais5);
            }else {
                var reais0 = (litros0/1000)*0.78;
                var reais1 = (litros1/1000)*0.78;
                var reais2 = (litros2/1000)*0.78;
                var reais3 = (litros3/1000)*0.78;
                var reais4 = (litros4/1000)*0.78;
                var reais5 = (litros5/1000)*0.78;
                var totalvalor = (reais0+reais1+reais2+reais3+reais4+reais5);
            }
        
        }else if ((totalitros/1000) >=21 && (totalitros/1000 <=30)){
            if (document.getElementById('residencial-comum').checked == true) {
                var reais0 = (litros0/1000)*11.33;
                var reais1 = (litros1/1000)*11.33;
                var reais2 = (litros2/1000)*11.33;
                var reais3 = (litros3/1000)*11.33;
                var reais4 = (litros4/1000)*11.33;
                var reais5 = (litros5/1000)*11.33;
                var totalvalor = (reais0+reais1+reais2+reais3+reais4+reais5);
            }else if (document.getElementById('residencial-social').checked == true) {
                var reais0 = (litros0/1000)*5.53;
                var reais1 = (litros1/1000)*5.53;
                var reais2 = (litros2/1000)*5.53;
                var reais3 = (litros3/1000)*5.53;
                var reais4 = (litros4/1000)*5.53;
                var reais5 = (litros5/1000)*5.53;
                var totalvalor = (reais0+reais1+reais2+reais3+reais4+reais5);
            }else {
                var reais0 = (litros0/1000)*2.61;
                var reais1 = (litros1/1000)*2.61;
                var reais2 = (litros2/1000)*2.61;
                var reais3 = (litros3/1000)*2.61;
                var reais4 = (litros4/1000)*2.61;
                var reais5 = (litros5/1000)*2.61;
                var totalvalor = (reais0+reais1+reais2+reais3+reais4+reais5);
            }
        
        }else if ((totalitros/1000) >=31 && (totalitros/1000 <=50)) {
            if (document.getElementById('residencial-comum').checked == true) {
                var reais0 = (litros0/1000)*11.33;
                var reais1 = (litros1/1000)*11.33;
                var reais2 = (litros2/1000)*11.33;
                var reais3 = (litros3/1000)*11.33;
                var reais4 = (litros4/1000)*11.33;
                var reais5 = (litros5/1000)*11.33;
                var totalvalor = (reais0+reais1+reais2+reais3+reais4+reais5);
            }else {
                var reais0 = (litros0/1000)*7.88;
                var reais1 = (litros1/1000)*7.88;
                var reais2 = (litros2/1000)*7.88;
                var reais3 = (litros3/1000)*7.88;
                var reais4 = (litros4/1000)*7.88;
                var reais5 = (litros5/1000)*7.88;
                var totalvalor = (reais0+reais1+reais2+reais3+reais4+reais5);
            }

        }else {
            if (document.getElementById('residencial-comum').checked == true) {
                var reais0 = (litros0/1000)*12.48;
                var reais1 = (litros1/1000)*12.48;
                var reais2 = (litros2/1000)*12.48;
                var reais3 = (litros3/1000)*12.48;
                var reais4 = (litros4/1000)*12.48;
                var reais5 = (litros5/1000)*12.48;
                var totalvalor = (reais0+reais1+reais2+reais3+reais4+reais5);
            }else {
                var reais0 = (litros0/1000)*8.71;
                var reais1 = (litros1/1000)*8.71;
                var reais2 = (litros2/1000)*8.71;
                var reais3 = (litros3/1000)*8.71;
                var reais4 = (litros4/1000)*8.71;
                var reais5 = (litros5/1000)*8.71;
                var totalvalor = (reais0+reais1+reais2+reais3+reais4+reais5);
            }
        }

        window.document.getElementById('res18').value = totalmin.toFixed(2).replace('.', ',') + ' min';
        window.document.getElementById('res19').value = totalitros.toFixed(2).replace('.', ',') + ' L';
        window.document.getElementById('res20').value = 'R$' + totalvalor.toFixed(2).replace('.', ',');

        window.document.getElementById('res2').value= 'R$' + reais0.toFixed(2).replace('.', ',');
        window.document.getElementById('res5').value= 'R$' + reais1.toFixed(2).replace('.', ',');
        window.document.getElementById('res8').value = 'R$' + reais2.toFixed(2).replace('.', ',');
        window.document.getElementById('res11').value = 'R$' + reais3.toFixed(2).replace('.', ',');
        window.document.getElementById('res14').value = 'R$' + reais4.toFixed(2).replace('.', ',');
        window.document.getElementById('res17').value = 'R$' + reais5.toFixed(2).replace('.', ',');

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
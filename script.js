document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault();

    const valorA = parseFloat(document.querySelector('#inputA').value);
    const valorB = parseFloat(document.querySelector('#inputB').value);
    const perfeito = document.getElementById('perfeito');
    const errado = document.getElementById('errado');
    const pane = document.getElementById('pane');

    if(valorB > valorA){
        perfeito.style.display = 'block';
        errado.style.display = 'none';
    } else if(valorA > valorB){
        errado.style.display = 'block';
        perfeito.style.display = 'none';
    }
    else if(valorA == valorB){
        pane.style.display = 'block';
        perfeito.style.display = 'none';
        errado.style.display = 'none';
    }
});

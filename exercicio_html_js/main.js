function validarFormulario(event) {
    event.preventDefault();
    
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);
    
    if (campoB > campoA) {
        alert('O formulário é válido! Número B é maior que Número A.');
    } else {
        alert('O formulário é inválido! Número B deve ser maior que Número A.');
    }
}
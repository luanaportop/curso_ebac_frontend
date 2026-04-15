$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, informe seu nome completo',
            email: 'Por favor, informe um e-mail válido',
            telefone: 'Por favor, informe seu telefone',
            cpf: 'Por favor, informe seu CPF',
            endereco: 'Por favor, informe seu endereço',
            cep: 'Por favor, informe seu CEP'
        },
        submitHandler: function (form) {
            alert('Sua requisição foi enviada para análise, parabéns pela aquisição!');
            form.reset();
        },
        invalidHandler: function () {
            alert('Por favor, preencha os campos corretamente para prosseguir com a compra.');
        }
    });
});
$(document).ready(function () {
  $('#form-tarefa').on('submit', function (e) {
    e.preventDefault();

    const nomeTarefa = $('#nome-tarefa').val().trim();

    if (nomeTarefa !== '') {
      $('#lista-tarefas').append(`<li>${nomeTarefa}</li>`);
      $('#nome-tarefa').val('');
    }
  });

  $('#lista-tarefas').on('click', 'li', function () {
    $(this).toggleClass('concluida');
  });
});
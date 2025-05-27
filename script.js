$(document).ready(function () {

  $('#add-task').click(function () {
    const taskText = $('#new-task').val().trim();
    if (taskText) {
      const newTask = $('<li class="list-group-item d-flex justify-content-between align-items-center"></li>')
        .hide()
        .append(`<span class="task-text">${taskText}</span>`)
        .append(`<button class="btn btn-danger btn-sm delete-btn">Poista</button>`);
      
      $('#task-list').append(newTask);
      newTask.fadeIn();
      $('#new-task').val('');
    }
  });

  $('#task-list').on('click', '.delete-btn', function () {
    $(this).closest('li').fadeOut(300, function () {
      $(this).remove();
    });
  });
  });

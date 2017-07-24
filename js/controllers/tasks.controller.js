$(document).ready(function(){
  addTask()
})

function addTask(){
  $('#add_task').on('submit', function(event){
  let list = List.find($('#select_list').val())
  let taskDes = $('#task_description').val()
  let taskPriority = $('#task_priority').val()
  let task = new Task(list[0], taskDes, taskPriority)
  $(`div#tasks_div_${list[0].id} ul`).append(`<li>Description: ${taskDes}<br>Priority: ${taskPriority}</li>`)
  $('#add_task')[0].reset()
  $('#task_description').focus()
  event.preventDefault()
  })
}

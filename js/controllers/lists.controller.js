$(document).ready(function(){
  toShowOrNotToShow()
  addList()

  deleteList()
})

function addList(){

  $('#add_list').on('submit', function(event){
    let newList = new List($('#list_title').val())
    $('#select_list').append(`<option value=${newList.id}>${newList.title}</option>`)
    $('#add_task').show()
    $('#lists').append(`<div id='tasks_div_${newList.id}' class="list"><h2><button class="destroy-list">x</button> ${newList.title}</h2><ul id="${newList.id}" data-id="${newList.id}"></ul></div>`)
    $('#add_list')[0].reset()
    $('#task_description').focus()
    event.preventDefault()
  })
}

function toShowOrNotToShow(){
  if(List.all.length === 0){
    $('#add_task').hide()
  }else{
    $('#add_task').show()
  }
}

function deleteList(){
  $('body').on('click', function(event){
    if (event.target.classList.value == "destroy-list") {
      console.log('clicked delete')
      let id = parseInt(event.target.parentElement.parentElement.id.substring(10))
      // to remove from select
      $(`#select_list option[value='${id}']`).remove();

      List.delete(id)
      //to remove node
      event.target.parentElement.parentElement.parentElement.removeChild(event.target.parentElement.parentElement)

      toShowOrNotToShow()
    }
  })
}

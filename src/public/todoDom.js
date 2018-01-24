const listAppend = $("#listAppend");
const myModal = $("#myModal");


const createTodo = $('#createTodo').submit(function(evt) {
  const textAreaInput = $("#textArea").select();
  const description = textAreaInput[0].value
  console.log()
  evt.preventDefault();
  listAppend.append(
    `<div class="row row-style">
      <div class='col-sm-8'>
        ${description}
      </div>
      <div class='col-sm-4'>
      <button class="btn btn-success" id='edit'>Edit</button>
      <button class="btn btn-danger" id='delete'>Delete</button>
      </div>
    </div>`
  );
  textAreaInput[0].value = "";
  console.log(myModal[0])
  myModal.modal('hide');
})

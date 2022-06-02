const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

//삭제 기능 함수
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

//todolist 그리는 함수
function paintToDo(newTodo) {
  const li = document.createElement("li"); //li생성
  const span = document.createElement("span"); //san 생성
  span.innerText = newTodo; // span태그 안에 handleTodo함수에서도 인풋값 넣어주기(todolist텍스트)
  const button = document.createElement("button"); //버튼 생성
  button.innerText = "❌"; //x이모지 텍스트 삽입
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //li안에 span 삽입
  li.appendChild(button);
  toDoList.appendChild(li);
  //ul태그 안에 li 삽입
  //appendChild는 맨마지막에 넣어주어야함
}

function handleToDoSubmit(event) {
  event.preventDefault();
  //인풋값을 새로 복사에서 변수에 넣어주는것뿐
  const newTodo = toDoInput.value;
  //인풋창비워주기
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
//키 변수화 하기
let toDos = [];
//빈 배열 생성
//기존 const를 let으로 변경하여 업데이트 할 수 있도록 바꿔주기

//로컬스토리지에 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //stringify이용하여 텍스트로 변환하여 저장해주기
}

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
  toDos.push(newTodo);
  //인풋값 빈배열 todos에 넣어주기
  paintToDo(newTodo);
  //인풋값 화면에 그려주기
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//가져오기

if (savedToDos !== null) {
  //로컬스토리지에 저장이 되어있다면 (null이 아니라면)
  const parsedToDos = JSON.parse(savedToDos);
  //다시 가져와서 자바스크립트로 배열로 변환하기
  toDos = parsedToDos;
  //toDos에 parsedToDos를 넣어서 전에 있던 toDo 복원해주기
  parsedToDos.forEach(paintToDo);
  //각각 아이템별로 forEach 돌리기
}

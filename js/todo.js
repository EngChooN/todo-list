const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

//할 일 리스트를 저장하기 위한 배열
let toDos = []; //js가 새로새작하면 비어지기 때문에 const가 아닌, 재선언이 가능한 let으로 선언
//배열에 할 일 리스트를 저장하는 함수
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //스트링 데이터 타입으로 변환
}

//리스트 추가 함수
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; //li id를 newTodoObj의 id를 추가
    const span = document.createElement("span");
    span.innerText = newTodo.text; //text를 newTodoObj의 text로 추가
    const button = document.createElement("button"); //리스트 삭제 버튼
    button.innerText = "🗑"; //버튼 이모티콘(텍스트)으로 표시
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //span을 생성하면 따로 생기기 때문에 li안에 span을 자식으로 추가하기 위해서 사용
    li.appendChild(button);
    toDoList.appendChild(li);
}
//리스트 삭제 함수
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

//인풋 작성 시 첫 함수시작
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //비우기 전 입력 값을 저장
    toDoInput.value = ""; //엔터 시 인풋값을 비워둠
    
    //아이디가 존재하는 오브젝트 생성
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj); //배열에 입력한 할 일 추가
    paintToDo(newTodoObj);
    saveToDos(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //스트링 데이터 타입을 오브젝트 타입으로 변환
    toDos = parsedToDos; //이전의 정보가 있다면. let toDos를 재선언 해준다. (이럼으로써 기존의 정보가 담긴 toDos가 새로고침 시, 기존의 정보를 담은 채 배열이 시작됨)
    parsedToDos.forEach(paintToDo); //배열에 들어있는 값을 순찰(?) 하는 함수
}

console.log(TODOS_KEY);
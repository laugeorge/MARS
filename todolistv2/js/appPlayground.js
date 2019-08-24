const list = document.getElementById("list");

function addToDo (toDo, toDo2, id, done, trash){
    if(trash){ return;}
  
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
  
    const item = 
    `<li class="item">
    <i class = "fa ${DONE} co" job="complete" id="${id}"></i>
    <p class = "text ${LINE}">${toDo}</p>
    <p class = "text">${toDo2}</p>
    <i class = "fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>
    `;


   const position = "beforeend";
  
   list.insertAdjacentHTML(position, item);
}
addToDo("Drink Coffee")
//addToDo2("George")
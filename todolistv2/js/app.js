// CODE EXPLAINED channel

// Select the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Update1 Getting the role
const input2 = document.getElementById("input2");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// get item from localstorage
let data = localStorage.getItem("TODO");


// check if data is not empty
if (data){
    LIST = JSON.parse(data);
    id = LIST.length; //set the id to the last one in the list
    loadList(LIST); // load the list to the user interface
    }
    else {
    // if data isn't empty
    LIST = [];
    id = 0;
    }


//load items to the user's interface
function loadList(array){
    array.forEach(function(item){
    addToDo(item.name, item.id, item.done, item.trash);
    });
}

// clear the local storage
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});


// Show todays date
const options = {weekday: "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add to do function
function addToDo (toDo, id, done, trash){
    if(trash){ return;}
  
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
  
    const item = 
    `<li class="item">
    <i class = "fa ${DONE} co" job="complete" id="${id}"></i>
    <p class = "text ${LINE}">${toDo}</p>
    <i class = "fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>
    `;


   const position = "beforeend";
  
   list.insertAdjacentHTML(position, item);
}

//UPDATE with ToDo2 = input2.value; 
//Update2 under LIST.push from under name: toDo, id: id,; 
// add an item to the list user the enter key
//document.addEventListener("keyup",function(event){
$(".submit").on("click",function(event){
    event.preventDefault();

    if(event){
        const toDo = input.value;

    // if the input isn't empty

    if(toDo){
        addToDo(toDo, id, false, false);
    
        LIST.push({
            name : toDo,
            id : id,
            done : false,
            trash : false
        });

        console.log(toDo);

        // add item to localstorage, need to be added where the LIST array is updated
        localStorage.setItem("TODO", JSON.stringify(LIST));

        //UPDATE HOW DO I GET THIS DATA TO POST TO THE TABLE, IS IT LIST OR toDo
        $.post("/api/tables", newTask,
        function(toDo) {

        });
        //END OF UPDATE FROM ABOVE

        id++;
    }
    // Update2 from input.value = "";
    input.value = "";
    
    }
});


// Complete to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;
}
  
// remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    LIST[element.id].trash = true;

}
  
//target the items created dynamically
list.addEventListener("click", function(event){
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete
    
    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
      
    // add item to localstorage, need to be added where the LIST array is updated
    localStorage.setItem("TODO", JSON.stringify(LIST));
//     }
});



//     // Question: What does this code do??
//     $.post("/api/characters", newCharacter)
//       .then(function(data) {
//         console.log("add.html", data);
//         alert("Adding character...");
//       });
//   });

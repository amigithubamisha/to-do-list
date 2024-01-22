const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!"); // if we dont input something it give message
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //for cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; // task is added then input field is empty
    saveData(); // whenever we changes anything or add new task savedata() will call and it save the updated content in browser
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); // when we checked and and unchecked the task
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); // when we click delete icon it remove the task
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // used for save the task
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // it give all the content store in the browser in the name of data
}
showTask();
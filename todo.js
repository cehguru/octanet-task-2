const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("Enter the list of things you want to do");//gives alert if nothing is typed in textbox
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        }
        inputBox.value="";
        SaveData();//when called saves the data if browser is refreshed
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("Checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();

    }

}, false);

function SaveData(){
    localStorage.setItem("data", listContainer.innerHTML);//function to save data in browser
}
function showList(){
    listContainer.innerHTML= localStorage.getItem("data");// shows data when refreshed
}
showList();

var a = document.getElementById('openModal');
var backBtn= document.querySelector('.backBtn');
var newTitlePage= document.querySelector('.newTitlePage');
var newPagePlus= document.querySelector('.newPagePlus');
a.style.display='none';
newPagePlus.addEventListener('click',addElement);


backBtn.addEventListener('click',(e)=>{
  a.style.display="none";
  document.querySelector('.container').classList.remove('hidden');
  var temp=document.getElementsByClassName('pravin');
  for(let i of temp){
    i.classList.remove('hidden');
  }
  document.querySelector('.hiddenPage').classList.remove('hiddenPage');
});


var hidden  = document.querySelector(".hidden");
var indexDiv = document.querySelector(".div");
var inputTitle = document.querySelector(".inputText");
var containerBox = document.getElementById("item2");
var object = [];
var count = 0;
var plusIcon = [];
var trashIcon = [];
var hiden1 = document.querySelector(".hidden1");
var inputItem = document.querySelector(".inputBox");
var itemBtn = document.querySelector(".addBtn1");
var tempId;


function ObjCreate(uniqueId, title) {

  this.uniqueId = uniqueId;
  this.title = title;
  taskObj = {};
}
function addElement() {
  hidden.classList.remove("hidden");
  indexDiv.classList.remove("hidden");
}

function addElement1() {
  hiden1.classList.remove("hidden1");
  indexDiv.classList.remove("hidden");
}

var taskPlus1 = document.querySelector('.rightPlus');
taskPlus1.addEventListener('click', addElement);


function closeBox() {
  hidden.classList.add("hidden");
  indexDiv.classList.add("hidden");
  inputTitle.value = "";
}
function closeBox1() {
  hiden1.classList.add("hidden1");
  indexDiv.classList.add("hidden");
  inputItem.value = "";
}

function plusIcon1(id) {
  tempId = id;
  addElement1();
  itemBtn.addEventListener('click', function () {
    if (inputItem.value == "") {
      closeBox1();
    }
    else {
      var tempTask = document.getElementsByClassName('taskBox');
      for (let k = 0; k < tempTask.length; k++) {
        if (tempTask[k].classList[1] == tempId) {
          var paraTag = document.createElement('p');
          paraTag.classList.add('tasks');
          paraTag.textContent = inputItem.value;
          tempTask[k].appendChild(paraTag);
          paraTag.addEventListener('click', function (ele){
            ele.target.style.textDecoration="line-through";
            ele.target.style.color = "red";
          });
        }
      }
     
      closeBox1();
    }
  });
}


function trashIcon1(id) {
  var temp_box = document.getElementsByClassName('pravin');
  for (let i of temp_box) {
    if (i.classList[1] == id) {
      containerBox.removeChild(i);
      count--;
    }
  }
  if(containerBox.children.length==0){
    document.querySelector('.item').classList.remove('hidden');
  }
}

function newFunction(para){
  document.querySelector('.container').classList.add('hidden');
  var temp=document.getElementsByClassName('pravin');
  for(let i of temp){
    if(i.classList[1]!=para.target.classList[1]){
      i.classList.add('hidden');
    }
    else{
      i.classList.add('hiddenPage');
      moduleBox.style.display='flex';
      newTitlePage.textContent= `${i.childNodes[0].textContent}`;
      console.log();
    }
  }
}


document.querySelector(".addBtn").addEventListener("click", () => {
  if (inputTitle.value == "") {
    closeBox();
  } else {

    var uniqueId = new Date().valueOf(); 
    var boxObj = inputTitle.value; 
    var tempTitle = boxObj;
    boxObj = new ObjCreate(uniqueId, tempTitle); 
    object.push(boxObj); 



    var boxDiv = document.createElement("div"); 
    boxDiv.classList.add("pravin", uniqueId); 

    var paraTag = document.createElement("p"); 
    paraTag.classList.add("title", uniqueId); 
    paraTag.textContent = inputTitle.value; 
    paraTag.addEventListener('click', function (newPage){
      newFunction(newPage);
    });
    boxDiv.append(paraTag); 
    boxDiv.append(document.createElement("hr")); 


    var taskBox = document.createElement("div");
    taskBox.classList.add("taskBox", uniqueId);
    boxDiv.append(taskBox); 


    var taskIcon1 = document.createElement("div"); 
    taskIcon1.classList.add("taskIcon");
   

    var taskTrash1 = document.createElement("i");
    taskTrash1.classList.add("fas", "fa-trash-alt", "taskTrash", uniqueId);
    taskIcon1.append(taskTrash1); 
    boxDiv.append(taskIcon1); 
    
        var taskPlus1 = document.createElement("i"); 
        taskPlus1.classList.add("fas", "fa-plus-circle", "taskPlus", uniqueId);
        taskIcon1.append(taskPlus1); 
    containerBox.append(boxDiv); 

    
    plusIcon = document.getElementsByClassName("taskPlus");
    plusIcon[count].addEventListener('click', function (count) {
      plusIcon1(count.target.classList[3]);
    });

    
        trashIcon = document.getElementsByClassName("taskTrash");
        trashIcon[count].addEventListener('click', function (count) {
          trashIcon1(count.target.classList[3]);
        });
        count++;
        if(containerBox.children.length>=0){
          document.querySelector('.Empty').classList.add('hidden');
        }
        closeBox(); 
      }
    });

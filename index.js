console.log("working...");

function addItem(){
    $(".add").show();
    const element = document.getElementsByClassName("class1");
    // console.log(element[0]);
    element[0].style.filter= "blur(8px)";


   const element1 = document.createElement("div");
    element1.setAttribute("class","class10");
    //  console.log(element1);
    const element2 = document.getElementById("add");
     element2.appendChild(element1);
     element1.appendChild(element3);
     element1.appendChild(inputt);
     element1.appendChild(element4);
     element4.appendChild(button1);
     element4.appendChild(button2);
};
    const element3 = document.createElement("div");
    element3.setAttribute("class","class11");
    element3.innerText = "Add new List";
    // element1.appendChild(element3);
    const inputt = document.createElement("input");
    inputt.setAttribute("type","text");
    inputt.setAttribute("name","name");
    inputt.setAttribute("class","class12");
    inputt.setAttribute("id","textt");
    inputt.setAttribute("value","");
    inputt.setAttribute("placeholder","Add new item");
    // element1.appendChild(inputt);
    const element4 = document.createElement("div");
    // element1.appendChild(element4);
    const button1 = document.createElement("button");
    button1.innerText = "Add";
    button1.setAttribute("onclick","addTask()");
    
     button1.setAttribute("class","class8");
    // element4.appendChild(button1);

    const button2 = document.createElement("button");
    button2.innerText = "Close";
    button2.setAttribute("class","class9");
    button2.setAttribute("name","redirect");
    button2.setAttribute("onclick","remove()");
    // console.log(button2);
    // element4.appendChild(button2);
    

    
const taskList = [];

 const addTask = () =>{

const taskk = document.getElementById("textt").value;
console.log(taskk);

const taskObj = {
    id:Date.now(),
    taskName:taskk
}
taskList.push(taskObj);
console.log(taskList);
addalltask();
  
 } 

 function addalltask(){
    $(".add").hide();
      
     const noitem = document.getElementsByClassName("class4");
     noitem[0].style.display = "none";
    const element = document.getElementsByClassName("class1");
    element[0].style.filter= "blur(0px)";
    const taskk = document.getElementById("textt").value;
     const element5 = document.createElement("div");
     element5.setAttribute("class","child");
     element5.setAttribute("id","child");

     element5.innerText = taskList[taskList.length-1].taskName;

     const element6 = document.getElementById("parent");
     element6.appendChild(element5);
    //  const element8 = document.getElementById("child");
const element7 = document.createElement("hr");
 element5.appendChild(element7);
 const element9 = document.createElement("span");
 element9.setAttribute("class","class14");
 element5.appendChild(element9);
 const plusbutton = document.createElement("i");
 plusbutton.setAttribute("class","fa-solid fa-circle-plus");
 plusbutton.setAttribute("onclick","additem()");
 plusbutton.style.margin = "10px"
  element9.appendChild(plusbutton);

  const deletebutton = document.createElement("i");
  deletebutton.setAttribute("class","fa-solid fa-trash-can");   
  deletebutton.setAttribute("onclick","deletecard()");
  deletebutton.style.margin = "10px";
  element9.appendChild(deletebutton);

 }

 function remove(){
    $(".add").hide();
    document.getElementById("class1").style.filter = "blur(0px)";
 }

 const additem = () => {
    $(".add1").show();
    const element = document.getElementsByClassName("class1");
    // console.log(element[0]);
    element[0].style.filter= "blur(8px)";
    const element1 = document.createElement("div");
    element1.setAttribute("class","class10");
    //  console.log(element1);
    const element2 = document.getElementById("add1");
    element3.innerText = "Add new item";
    button1.setAttribute("onclick","additeminside()");
    button2.setAttribute("onclick","removeinside()");
     element2.appendChild(element1);
     element1.appendChild(element3);
     element1.appendChild(inputt);
     element1.appendChild(element4);
     element4.appendChild(button1);
     element4.appendChild(button2);
 }

 const removeinside = () =>{
    $(".add1").hide();
    document.getElementById("class1").style.filter = "blur(0px)";
 }

 const taskinList = [];
 const additeminside = () =>{
   
    const taskk = document.getElementById("textt").value;
   console.log(taskk);
   
   const taskObj = {
       id:Date.now(),
       taskName:taskk
   }
   taskinList.push(taskObj);
   console.log(taskinList);
nowadd();
 }

 const nowadd = () =>{
    $(".add1").hide();
    const element = document.getElementsByClassName("class1");
    element[0].style.filter= "blur(0px)";
    const taskk = document.getElementById("textt").value;
    const element5 = document.createElement("div");
    element5.setAttribute("class","inchild");
    element5.setAttribute("id","inchild");

    element5.innerText = taskinList[taskinList.length-1].taskName;
    const element6 = document.getElementById("child");
    console.log(element6);
    element6.appendChild(element5);
 }
  
 function deletecard() {
   const trash= document.getElementById("child");
   trash.parentNode.removeChild(trash);
}
 
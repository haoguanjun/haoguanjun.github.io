
// document load event 

// definition array
var todoList = [];

/*
 * 前端开发中，主程序相当于已经由浏览器本身实现，并不需要我们实现。
 * 前端程序是配合浏览器执行，实际上，是被浏览器调用，是反过来的
 * 解决什么时候，浏览器来调用我们的程序
 * 
 * 所以，我们的程序一开始，就是注册各种调用的时机，这里称为事件 event
 * DOMContentLoaded 事件浏览器已经解析页面完成。
 */

// 命名函数
function saveToDoItem() {
    console.info("save button clicked.");

    var txtSubject = document.querySelector("#txtSubject");
    var txtDetail = document.querySelector("#txtDetail");

    var item = {
        subject: txtSubject.value,
        detail: txtDetail.value
    };

    todoList.push( item );
    console.info( todoList);

    txtSubject.value = "";
    txtDetail.value = "";

    // show to do list
    showItems();

    console.info( item );
}

function showItems()
{
       // display items
       var lstTodo = document.querySelector("#lstTodo");
       lstTodo.innerHTML = "";
   
       for(var index = 0; index < todoList.length; index++) {
           lstTodo.innerHTML += "Topic: " + todoList[index].subject 
               + " Detail: " + todoList[index].detail
               + "<button type='button' class='btn btn-sm' onclick='removeItem(" 
               + index
               + ")' >Remove</button>"
               + "<br/>";
       }
}

function removeItem( index )
{
    console.info("click remove button at: " + index );
    todoList.splice( index, 1);

    // re paint
    showItems();
}

// ---------------------------

function main() {
    // find save button
    // 当该按钮被点击之后 click，再执行我们的代码 listener
    var btnSave = document.querySelector("#btnSave");
    console.info(btnSave);

    btnSave.addEventListener(
        "click",
        saveToDoItem
    )
}

// 相当于主程序入口
document.addEventListener(
    'DOMContentLoaded', 
    main
);


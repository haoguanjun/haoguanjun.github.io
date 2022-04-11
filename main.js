
// document load event 

// definition array
var todoList = [];

document.addEventListener(
    'DOMContentLoaded', 
    () => {
        // find save button
        var btnSave = document.querySelector("#btnSave");
        console.info(btnSave);

        btnSave.addEventListener(
            "click",
            () => {
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

                // display items
                var lstTodo = document.querySelector("#lstTodo");
                lstTodo.innerHTML = "";

                for(var index = 0; index < todoList.length; index++) {
                    lstTodo.innerHTML += "Topic: " + todoList[index].subject 
                        + " Detail: " + todoList[index].detail
                        + "<br/>";
                }

                console.info( item );

            }
        )
    }
);


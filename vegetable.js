const todoTitle = document.querySelector('.todo-title');
const addTodoButton = document.querySelector('.add.todo');
const todoList = document.querySelector('.todo-list');

function removeTodo(event) {
    event.target.parentNode.remove();

}

function addTodo() {
//    let divHtml = '<div class="todo">';
//    divHtml += '<h3>' + todoTitle.value + '</h3>';
//    divHtml += '<button type="button" class="remove-todo">ลบ</button>';
//    divHtml += '</div>';
//    todoList.innerHTML += divHtml;

    //div
    const todo = document.createElement('div');
    todo.classList.add('todo');

    //h3
    const h3 = document.createElement('h3');
    h3.innerHTML = todoTitle.value;

    //button
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('remove-todo');
    button.innerHTML = 'ลบ';
    button.addEventListener('click', removeTodo);

    //h3, button => div
    todo.append(h3, button);

    //div => todo list
    todoList.append(todo);
}

/* addTodoButton.addEventListener('click', addTodo); */









const vegetableList=firebase.firestore();
const table=document.querySelector('#addVegetable');

db.collection('vegetable').get().then(vegetable => {
    vegetable.docs.forEach(doc => {
        renderVegetable(doc);
    
    });
});

function renderVegetable(doc) {
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    cell1.innerHTML=doc.data().รายการ;
    cell2.innerHTML=doc.data().ปริมาณ;
    cell3.innerHTML=doc.data().จำนวนแคล;
    let btn=document.createElement('button');
    btn.textContent='+';
    btn.setAttribute('class','btn btn-danger');
    btn.setAttribute('data-id',doc.id);
    cell4.appendChild(btn);

   /*  Array.from(document.getElementsByClassName('data-id',doc.id)).forEach((button) => {
        button.addEventListener('click', (e)=>{
              e.preventDefault();
              console.log(e.target.getAttribute('data-element'));
        })
   }); */


    btn.addEventListener('click',(e)=>{
        let id=e.target.getAttribute('data-id');
        db.collection('vegetable').doc(id).addEventListener();
    });
}

/* let menuList = document.querySelector('#menuList');
let form = document.querySelector('#addMenu'); */

/* function renderMenu(doc) {
    let li = document.createElement('li');
    let รายการ = document.createElement('span');
    let ปริมาณ = document.createElement('span');
    let จำนวนแคล = document.createElement('span');
    let del = document.createElement('div');
    del.className = 'del';

    li.setAttribute('data-id', doc.id);
    รายการ.textContent = doc.data().รายการ;
    ปริมาณ.textContent = doc.data().ปริมาณ;
    จำนวนแคล.textContent = doc.data().จำนวนแคล;

    del.textContent = 'x';

    li.appendChild(รายการ);
    li.appendChild(ปริมาณ);
    li.appendChild(จำนวนแคล);
    li.appendChild(del);

    menuList.appendChild(li);

    //delete data
    del.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('menu').doc(id).delete();
    });
} */

/* form.addEventListener('submit' , (e) => {
    e.preventDefault();
    db.collection('menu').add({
        รายการ: form.รายการ.value,
        ปริมาณ: form.ปริมาณ.value,
        จำนวนแคล: form.จำนวนแคล.value,
    })
    form.รายการ.value = '';
    form.ปริมาณ.value = '';
    form.จำนวนแคล.value = '';
}); 

// real-time database
db.collection('menu').orderBy('รายการ').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        //console.log(change);
        if (change.type == 'added') {
            renderMenu(change.doc);
        } else if (change.type == 'removed') {
            let li = menuList.querySelector(`[data-id=${change.doc.id}]`);
            menuList.removeChild(li);
        }
    })
});
 */
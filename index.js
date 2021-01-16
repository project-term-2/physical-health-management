let foodList = document.querySelector('#foodList');
let form = document.querySelector('#addFood');

function renderFood(doc) {
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

    foodList.appendChild(li);

    //delete data
    del.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('food').doc(id).delete();
    });
}

//db.collection('food').get().then(food => {
//    food.docs.forEach(doc => {
//        console.log(doc.data())
//        renderFood(doc);
//    })
//});

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    db.collection('food').add({
        รายการ: form.รายการ.value,
        ปริมาณ: form.ปริมาณ.value,
        จำนวนแคล: form.จำนวนแคล.value,
    })
    form.รายการ.value = '';
    form.ปริมาณ.value = '';
    form.จำนวนแคล.value = '';
}); 

// real-time database
db.collection('food').orderBy('รายการ').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        //console.log(change);
        if (change.type == 'added') {
            renderFood(change.doc);
        } else if (change.type == 'removed') {
            let li = foodList.querySelector(`[data-id=${change.doc.id}]`);
            foodList.removeChild(li);
        }
    })
});

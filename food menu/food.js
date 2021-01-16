const db=firebase.firebase();
const table=document.querySelector('#tbresult');
db.collection('food').get().then((snapshot)=>{
    snapshot.forEach(doc=>{
        console.log(doc.data());
    });

});
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(gran => getObj(gran))

const get = document.querySelector('gran')

function getObj(bj){

let obj = bj.map(({userID, id, title, body})=>{
gran.innerHTML += `<div class  = 'gran'> <p> User id: ${userID}</p> 
<p> id: ${id}</p>  
<p>${title}  ${body}</p> 
</div>`

})
};
const todos = document.querySelector(".todos");




async function getDate () {
    try{
        const result = await fetch("https://jsonplaceholder.typicode.com/posts")
        const todoList = await result.json()

        todoList.forEach((item) => {
            const todo = document.createElement("div")
            todo.innerHTML = `
            <div>
            <h4 class="falc">${item.id}</h4>
            <h5 class="black">${item.title}</h5> 
            <img src="img/kfc.png" alt="">
            </div>
            `
            todo.style = `
            width: 250px;
            height: 250px;
            display: flex;
            justify-content: center;
            align-item: center;
            border: 1px solid black;
            border-radius: 10%;
            margin-bottom: 20px ;
            `
         todos.append(todo)

        })
       
    }catch(e){
        console.log("404")
    }
}
getDate()
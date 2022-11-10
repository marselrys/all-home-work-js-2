// const btns = document.querySelectorAll("button")

// const arr = [1,2,4]
// btns[0].classList.add('red')

// btns.forEach((button,idx) => {
//     button.addEventListener("click",(event) => {
//         if(event.target.classList.contains('red')){
//             event.target.classList.remove('red')
//         }else {
//             event.target.classList.add('red')
//         }
//     })
// }) 
 


//Делигирования событий

const wrapper = document.querySelector('.second_block')

wrapper.addEventListener('click', (event) =>{
    console.dir(event.target);
    if(event.target.tagName == 'BUTTON'){
        if(event.target.classList.contains('red')){
           event.target.classList.remove('red')
        }else {
           event.target.classList.add('red')
        }  
    }
})

// const  btn = document.createElement('button');
// const btn2 = document.createElement('button');
// wrapper.append(btn);
// wrapper.prepend(btn2)
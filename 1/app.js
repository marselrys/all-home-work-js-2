// const phoneNum = document.querySelector(".phoneNum")
// const phoneName = document.querySelector(".phoneName")
// const phoneSubmit = document.querySelector(".phoneSumbit")
// const result = document.querySelector("#result")

// let regExp = /^\+996 \d{3} \d{2} \d{2} \d{2}$/

// phoneSubmit.addEventListener("click", () => {

//     if(regExp.test(phoneNum.value)){
//         result.innerText = "ЗдравсЫтвуйте"
//         result.style.color = "white"
//     }else{
//         result.innerText = "Ошибка"
//         result.style.color = "red"
//     }

// })

// let regexp = /marsel/

// phoneSubmit.addEventListener("click", () => {

// if(regexp.test(phoneName.value)){
//     result.innerText = "Здравствуйте"
//     result.style.color = "white"
// }else{
//     result.innerText = "Oшибка"
//     result.style.color = "red"
// }

// })

const phoneNum = document.querySelector(".phoneNum")
const phoneName = document.querySelector(".phoneName")
const phoneSubmit = document.querySelector(".phoneSumbit")
const result = document.querySelector("#result")

let regExp = /^\+996 \d{3} \d{2} \d{2}$/

phoneSubmit.addEventListener("click", () => {

    if(regExp.test(phoneNum.value)){
        result.innerText = "Одобрено"
        result.style.color = "green"
    }else{
        result.innerText = "Ошибка"
        result.style.color = "red"
    }

})

let regexp = /alessa/

phoneSubmit.addEventListener("click", () => {

if(regexp.test(phoneName.value)){
    result.innerText = "Одобрено"
    result.style.color = "green"
}else{
    result.innerText = "Oшибка"
    result.style.color = "red"
}

})





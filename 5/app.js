// const som = document.querySelector("#som")
// const usd = document.querySelector("#usd")


// som.addEventListener("input", () => {
//     const request = new XMLHttpRequest() // создане запроса
//     request.open("GET", "data.json")
//     request.setRequestHeader("Сontent-Type", "applicaation/json")
//     request.send{}
    

//     request.addEventListener("load", () => {
//         const data = JSON.parse(request.response)
//         usd.value = (som.value / data.usd).toFixed(2)
//     })
// })

const converter = (elem,target,isTrue) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest() 
        request.open('GET', 'data.json')
        request.send()
        request.addEventListener("load", () => {
            const data = JSON.parse(request.response)
            if (isTrue) {
                target.value = (elem.value / data.usd).toFixed(2)
            }else{
                target.value = (elem.value / data.usd).toFixed(2)
            }
        })
    } )
}

converter(som,usd,true)
converter(usd,som)
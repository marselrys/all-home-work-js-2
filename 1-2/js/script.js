const arr = [1,12,15,22,8,25,]
const arr2 = []

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        arr2[i] = arr[i]
    }
}

console.log(arr2)
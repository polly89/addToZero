// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

let answer = false;
    for(let i = 0; i < array.length; i++){
        for( let j = 0; j < array.length; j++){
            if((i !== j) && (array[i] + array[j] === 0)){
                answer = true;
        }
    }
}

console.log(answer)
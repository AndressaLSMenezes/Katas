const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let arr = []

    for(let i = 1; i <= 25; i++) {
        arr.push(i)
    }
    return arr
}



function kata2() {
    let arr = []

    for(let i = 25; i >= 1; i--) {
        arr.push(i)
    }
    return arr
}



function kata3() {
    let arr = []
    for(let i = -1; i >= -25; i--) {
        arr.push(i)
    }
    return arr
}



function kata4() {
    let arr = []

    for(let i = -25; i <= -1; i++) {
        arr.push(i)
    }
    return arr
}


function kata5() {
    let arr = [] 

    for(let i = 25; i >= -25; i--) {
        if(i % 2 !== 0){
            arr.push(i)
        }
    }
    return arr
}


function kata6() {
    let arr = [] 

    for(let i = 3; i <= 100; i++) {
        if(i % 3 === 0){
            arr.push(i)
        }
    }
    return arr
}


function kata7() {
    let arr = []
    for(let i = 7; i <= 100; i++){
        if(i % 7 == 0) {
            arr.push(i)
        }
    }
    return arr
}


function kata8() {
    let arr = []
    for(let i = 100; i >= 3; i--){
        if(i % 3 == 0 || i % 7 == 0){
            arr.push(i)
        }
    }
    return arr
}


function kata9() {
    let arr = []
    for(let i = 5; i < 100; i++){
        if(i % 5 == 0 && i % 2 !== 0) {
            arr.push(i)
        }
    }
    return arr
}


function kata10() {
    return sampleArray
}


function kata11() {
    let arr = []
    
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 == 0) {
            arr.push(sampleArray[i])
        }
    }
    return arr
}


function kata12() {
    let arr = []
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 !== 0) {
            arr.push(sampleArray[i])
        }
    }
    return arr
}


function kata13() {
    let arr = []
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 8 == 0) {
            arr.push(sampleArray[i])
        }
    }
    return arr
}


function kata14() {
    let arr = []
    for(let i = 0; i < sampleArray.length; i++) {
        arr.push(sampleArray[i] * sampleArray[i])
    }
    return arr
}

function kata15() {
    let arr = 0
    for(let i = 0; i <= 20; i++) {
        arr = arr + i
    }
    return arr
}

function kata16() {
    let arr = 0
    for(let i = 0; i < sampleArray.length; i++) {
        arr = arr + sampleArray[i]
    }
    return arr
}


function kata17() {
    let menor = 10000
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] < menor) {
            menor = sampleArray[i]
        }
    }
    return menor
}


function kata18() {
    let maior = 0
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] > maior) {
            maior = sampleArray[i]
        }
    }
    return maior
}

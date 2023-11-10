function spcalculate(){
    // Import form data
    let splvl = document.getElementById('splvlIn').value
    let sppoints = document.getElementById('sppointIn').value
    let sptier = document.getElementById('spboosterLevelRange').value

    splvl = parseInt(splvl)
    sppoints = parseInt(sppoints)
    sptier = parseInt(sptier)

    // Set borders
    if (splvl > 100){
        splvl = 100
    } else if(splvl < 0){
        splvl = 0
    }

    //set the splvlmax
    let splvlmax
    if(splvl> 1) {
        splvlmax = 125 + ((splvl-1)*25)
    } else {
        splvlmax = 125
    }

    // Set borders
    if (sppoints > splvlmax){
        sppoints = splvlmax
    } else if(splvl < 0){
        sppoints = 0
    }


    //set SP
    let sp    
    switch (sptier) {
        case 2:
            sp= 35
            break;

        case 3:
            sp= 85
            break;

        case 4:
            sp= 150
            break;

        case 1:
            sp= 15
            break;
    }

    let spboosteramount = 0

    // running the loop
    while (splvl <= 100) {
        if(sppoints >= splvlmax){
            sppoints = sppoints - splvlmax
            splvl++
            splvlmax += 25
        }
        sppoints = sppoints + sp
        spboosteramount++
    } 

    document.getElementById('spboosterout').innerText = spboosteramount
}


let sptierInfoTrue = false
document.getElementById('sptierinfo').onmouseover = function() {
    sptierInfoTrue = true
    sptierinfo()    
}
document.getElementById('sptierinfo').onmouseout = function() {
    sptierInfoTrue = false
    sptierinfo()
}
function sptierinfo() {
    if (sptierInfoTrue) {
        document.getElementById('info-sptier').style.display = 'flex'
    } else{
        document.getElementById('info-sptier').style.display = 'none'
    }
}


let splvlInfoTrue = false
document.getElementById('splvlinfo').onmouseover = function() {
    splvlInfoTrue = true
    splvlinfo()    
}
document.getElementById('splvlinfo').onmouseout = function() {
    splvlInfoTrue = false
    splvlinfo()
}
function splvlinfo() {
    if (splvlInfoTrue) {
        document.getElementById('info-splvl').style.display = 'flex'
    } else{
        document.getElementById('info-splvl').style.display = 'none'
    }
}


let sppointsInfoTrue = false
document.getElementById('sppointinfo').onmouseover = function() {
    sppointsInfoTrue = true
    sppointsinfo()    
}
document.getElementById('sppointinfo').onmouseout = function() {
    sppointsInfoTrue = false
    sppointsinfo()
}
function sppointsinfo() {
    if (sppointsInfoTrue) {
        document.getElementById('info-sppoints').style.display = 'flex'
    } else{
        document.getElementById('info-sppoints').style.display = 'none'
    }
}


let spboosterInfoTrue = false
document.getElementById('spboosteramountinfo').onmouseover = function() {
    spboosterInfoTrue = true
    spboosterinfo()    
}
document.getElementById('spboosteramountinfo').onmouseout = function() {
    spboosterInfoTrue = false
    spboosterinfo()
}
function spboosterinfo() {
    if (spboosterInfoTrue) {
        document.getElementById('info-spboosters').style.display = 'flex'
    } else{
        document.getElementById('info-spboosters').style.display = 'none'
    }
}



let isCalculatorOpen = false

document.getElementById('spcalculatorexit').onclick = function(){
    isCalculatorOpen = false
    calculatorOpen()
}
document.getElementById('calculatoropen').onclick = function(){
    isCalculatorOpen = true
    calculatorOpen()
}

function calculatorOpen(){
    if (isCalculatorOpen) {
        document.getElementById('spcalculatorexit').style.display = 'block'
        document.getElementById('calculatorContainer').style.display = 'block'
    } else{ 
    document.getElementById('spcalculatorexit').style.display = 'none'
    document.getElementById('calculatorContainer').style.display = 'none'
    }
}
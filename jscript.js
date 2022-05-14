let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let yellow = document.querySelector('.yellow');
let black = document.querySelector('.black');
let gamebox = document.querySelectorAll('.game-box');
let choicebox = document.querySelectorAll('.choice-box');

let redCount = document. querySelector('.red-count');
let blueCount = document. querySelector('.blue-count');
let greenCount = document. querySelector('.green-count');
let yellowCount = document. querySelector('.yellow-count');
let blackCount = document. querySelector('.black-count');

let redactive = false;
let blueactive = false;
let greenactive = false;
let yellowactive = false;
let blackactive = false;
let defaultCount = 0, blueCountNum = 0, greenCountNum = 0, yellowCountNum = 0, blackCountNum = 0;
choicebox.forEach(choice =>{
    choice.addEventListener('click', event =>{
        if( choice.style.backgroundColor === 'red'){
            redactive = true;
            blueactive = false;
            greenactive = false;
            yellowactive = false;
            blackactive = false;
        }else if(choice.style.backgroundColor === 'blue'){
            blueactive = true;
            redactive = false;
            greenactive = false;
            yellowactive = false;
            blackactive = false;
        }else if(choice.style.backgroundColor === 'green'){
            redactive = false;
            blueactive = false;
            greenactive = true;
            yellowactive = false;
            blackactive = false;
        }else if(choice.style.backgroundColor === 'yellow'){
            redactive = false;
            blueactive = false;
            greenactive = false;
            yellowactive = true;
            blackactive = false;
        }else if(choice.style.backgroundColor === 'black'){
            redactive = false;
            blueactive = false;
            greenactive = false;
            yellowactive = false;
            blackactive = true;
        }
    })
})


// handles game box action
gamebox.forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      item.classList.add('.active');
    // alert('clicked');
    if(blueactive === false && redactive === false && greenactive === false && yellowactive === false && blackactive === false){
        alert("Please select a color on the left column");
    }
    if (blueactive === true){
        item.style.backgroundColor = "blue";
        blueCountNum += 1;
        blueCount.textContent = blueCountNum ;
        item.style.pointerEvents = 'none';
    }
    else if( redactive == true){
        item.style.backgroundColor = "red";
        defaultCount += 1;
        redCount.textContent = defaultCount;
        item.style.pointerEvents = 'none';
    }
    else if( greenactive == true){
        item.style.backgroundColor = "green";
        greenCountNum += 1;
        greenCount.textContent = greenCountNum;
        item.style.pointerEvents = 'none';
    }
    else if( yellowactive == true){
        item.style.backgroundColor = "yellow";
        yellowCountNum += 1;
        yellowCount.textContent = yellowCountNum;
        item.style.pointerEvents = 'none';
    }
    else if( blackactive == true){
        item.style.backgroundColor = "black";
        blackCountNum += 1;
        blackCount.textContent = blackCountNum;
        item.style.pointerEvents = 'none';
    }
    });
});


// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional

const number1box = document.getElementById('number1')
const number2box = document.getElementById('number2')
const number3box = document.getElementById('number3')
const plus=document.getElementById('plus')
const minus=document.getElementById('minus')
const multiply=document.getElementById('mul')
const divide=document.getElementById('divide')
const modulus=document.getElementById('modulus')
var number1=Math.round(Math.random()*100)
var number2=Math.round(Math.random()*100)


var numb3;


function randomise(){
             number1=Math.round(Math.random()*100)
             number2=Math.round(Math.random()*100)
             
             if(number1<number2){
               var temp = number1;
               number1=number2
               number2=number1
             }

            let operator=Math.round(Math.random()*5)
            console.log(operator)

            switch (operator){
                case 1:
                    numb3=number1+number2
                    break;
                case 2:
                    numb3=number1-number2
                    break;
                case 3:
                    numb3=number1*number2
                    break;
                case 4:
                    numb3=Math.round(number1/number2)
                    break;
                case 5:
                    numb3=number1%number2
                    break;
                case 0:
                    randomise()                
            }

            number1box.innerText=number1
            number2box.innerText=number2
            number3box.innerText=numb3
            console.log(number1,number2,numb3)
            
}
randomise()

var score=0;

plus.addEventListener('click',()=>{
    if(numb3==number1+number2){
                score++
                randomise()
                resetTime(timerId)
            }
            else{
                location.href='gameover.html?score='+score
            }
})
minus.addEventListener('click',()=>{
    if(numb3==number1-number2){
        score++
        randomise()
        resetTime(timerId)
    }
    else{
        location.href='gameover.html?score='+score
    }

})
multiply.addEventListener('click',()=>{
    if(numb3==number1*number2){
        score++
        randomise()
        resetTime(timerId)
    }
    else{
        location.href='gameover.html?score='+score
    }
})
divide.addEventListener('click',()=>{
    if(numb3==Math.round(number1/number2)){
        score++
        randomise()
        resetTime(timerId)
    }
    else{
        location.href='gameover.html?score='+score
    }
})
modulus.addEventListener('click',()=>{
    if(numb3==number1%number2){
        score++
        randomise()
        resetTime(timerId)
    }
    else{
        location.href='gameover.html?score='+score
    }
})
var timer=document.getElementById('timer')
var timerId
var time =20

function showtimer(){
    var time=20
    timer.innerText=time
    timerId=setInterval(()=>{
        time--
        if(time==0){
            location.href='gameover.html?score='+score
        }
        timer.innerText=time
    },1000
    
    )

}

function resetTime(xyz){
    clearInterval(xyz)
    showtimer()
}

showtimer()







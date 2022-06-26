console.log("Welcome to random dice game!")
num=(min,max)=>{
   return Math.floor(Math.random()*(max-min)+min)
}
let dice1=num(1,6);
console.log("1:",dice1);
let dice2=num(1,6);
console.log("2:",dice2)
let im1=document.querySelector('.img1')
let im2=document.querySelector('#img2')
console.log(im1,im2)
im1.src=`images/dice${dice1}.png`
im2.src=`images/dice${dice2}.png`
let h1=document.querySelector("h1")
win=(dice1,dice2)=>{
if(dice1==dice2){
    h1.innerText="Draw!"
}
else if(dice2>dice1){
h1.innerText="Player 2 wins!🚩"
}
else{
    h1.innerText="🚩Player1 wins!"
}
}
win(dice1,dice2)
// Code your solutions in this file
let name1= "";
let name2= "";
let name3= "";
let newArray=[];

function countDown(){
    let num = 10;
    while(num>=0){
        console.log(num--);
    }
}
const array = ["","",""];
let suprise ="";


function writeCards(array,suprise){
   for(let i=0;i<=2;i++){
     newArray.splice(2,0,`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
        return newArray;
    
}
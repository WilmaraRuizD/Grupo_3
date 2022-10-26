

window.onload = function () {
  console.log("function called...");
    div1.innerHTML =`<img class="personajes" src=${characters[demoArray[0]].image}>
                    <p>${characters[demoArray[0]].species}</p>
                   <p>${characters[demoArray[0]].name}</p>`
    div2.innerHTML =`<img class="personajes" src=${characters[demoArray[1]].image}>
                   <p>${characters[demoArray[1]].species}</p>
                    <p>${characters[demoArray[1]].name}</p>`
    div3.innerHTML =`<img class="personajes" src=${characters[demoArray[2]].image}> 
                    <p>${characters[demoArray[2]].species}</p>
                    <p>${characters[demoArray[2]].name}</p>`
    div4.innerHTML =`<img class="personajes" src=${characters[demoArray[3]].image}>
                    <p>${characters[demoArray[3]].species}</p>
                    <p>${characters[demoArray[3]].name}</p>`
    div5.innerHTML =`<img class="personajes" src=${characters[demoArray[4]].image}>
                    <p>${characters[demoArray[4]].species}</p>
                    <p>${characters[demoArray[4]].name}</p>`
    div6.innerHTML =`<img class="personajes" src=${characters[demoArray[5]].image}>
                    <p>${characters[demoArray[5]].species}</p>
                    <p>${characters[demoArray[5]].name}</p>`
    
    div7.innerHTML =`<img class="personajes" src=${characters[demoArray1[0]].image}>
                    <p>${characters[demoArray1[0]].species}</p>
                    <p>${characters[demoArray1[0]].name}</p>`
    div8.innerHTML =`<img class="personajes" src=${characters[demoArray1[1]].image}>
                    <p>${characters[demoArray1[1]].species}</p>
                    <p>${characters[demoArray1[1]].name}</p>`
    div9.innerHTML =`<img class="personajes" src=${characters[demoArray1[2]].image} >
                    <p>${characters[demoArray1[2]].species}</p>
                    <p>${characters[demoArray1[2]].name}</p>`
    div10.innerHTML =`<img class="personajes" src=${characters[demoArray1[3]].image}>
                    <p>${characters[demoArray1[3]].species}</p>
                    <p>${characters[demoArray1[3]].name}</p>`
    div11.innerHTML =`<img class="personajes" src=${characters[demoArray1[4]].image}>
                    <p>${characters[demoArray1[4]].species}</p>
                    <p>${characters[demoArray1[4]].name}</p>`
    div12.innerHTML =`<img class="personajes" src=${characters[demoArray1[5]].image}>
                    <p>${characters[demoArray1[4]].species}</p>
                    <p>${characters[demoArray1[4]].name}</p>`

  }

import {characters}from "../data/data.js";
 console.log(characters)

 export default function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
 }

 var demoArray = [0,1,2,3,4,5];
 var demoArray1= [0,1,2,3,4,5];
 shuffleArray(demoArray);
 shuffleArray(demoArray1);

 let cart1 = document.getElementById("div1");
 let cart2 = document.getElementById("div2");
 let cart3 = document.getElementById("div3");
 let cart4 = document.getElementById("div4");
 let cart5 = document.getElementById("div5");
let cart6 = document.getElementById("div6");
let cart7 = document.getElementById("div7");
let cart8 = document.getElementById("div8");
let cart9 = document.getElementById("div9");
let cart10 = document.getElementById("div10");
let cart11 = document.getElementById("div11");
let cart12= document.getElementById("div12");
let d1 =0;
let d2 =0;

for (var i = 0; i < 3; i++){
   i++;

}
 
 cart1.addEventListener('mouseover', function(){
    console.log(characters[demoArray[0]].image)
    d1=demoArray[0]
   console.log(d1);
})

 cart2.addEventListener('mouseover', function(){
    console.log(characters[demoArray[1]].image)
    d2=demoArray[1];
    console.log(d2)
 })

cart3.addEventListener('mouseover', function(){
     console.log(characters[demoArray[2]].image)
    
   })
   cart4.addEventListener('mouseover', function(){
       console.log(characters[demoArray[3]].image)
   
     })

     cart5.addEventListener('mouseover', function(){
       console.log(characters[demoArray[4]].image)
      
     })

     cart6.addEventListener('mouseover', function(){
       console.log(characters[demoArray[5]].image)
       
     })
   cart7.addEventListener('click', function(){
      console.log(characters[demoArray1[0]].image)
      
   })
   cart8.addEventListener('click', function(){
      alert('Este es el evento click 8');
      console.log(characters[demoArray1[1]].image)
      
   })
     cart9.addEventListener('click', function(){
      console.log(characters[demoArray1[2]].image)
      
   })
   cart10.addEventListener('click', function(){
      console.log(characters[demoArray1[3]].image)
      
   })
   cart11.addEventListener('click', function(){
      console.log(characters[demoArray1[4]].image)
      
   })
   cart12.addEventListener('click', function(){
      console.log(characters[demoArray1[5]].image)
      
   })

//Conteo :

let boton = document.querySelector('#boton');
var seg=0;
var min=0;
boton.addEventListener('click', function(){
    alert('Este es el evento click');
    setInterval(() => {
        console.log(seg);
        if(seg<60){
        seg ++;
        console.log(seg);
        document.getElementById("temporizar").innerHTML=`${min} min: ${seg} seg`
        }else{
            seg=0;
            if(min<60){
            min ++;}
            else{min=0}
        }
        
    }, 1000);
})


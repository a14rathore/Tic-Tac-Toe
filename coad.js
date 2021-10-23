
let count=0;
let btn=document.querySelector(".btn");
btn.addEventListener('click',()=>{
    document.querySelector(".btnd").style.display = "none";
    document.querySelector(".gridpos").style.display="flex";
});

let allbox=document.querySelectorAll(".box");
// console.log(allbox.length);
for(let i=0;i<allbox.length;i++){
    allbox[i].addEventListener('click',()=>{
        if(allbox[i].innerText===""){count++;}
        if(count%2!=0){
            if(allbox[i].innerText!="O"){
               allbox[i].innerText="X";
            }
            
        }
        else{
            if(allbox[i].innerText!="X")
            allbox[i].innerText="O";
        }
 let box1=document.getElementById("box1").innerText;
 let box2=document.getElementById("box2").innerText;
 let box3=document.getElementById("box3").innerText;
 let box4=document.getElementById("box4").innerText;
 let box5=document.getElementById("box5").innerText;
 let box6=document.getElementById("box6").innerText;
 let box7=document.getElementById("box7").innerText;
 let box8=document.getElementById("box8").innerText;
 let box9=document.getElementById("box9").innerText;
        if(box1=='X' && box2=='X' && box3=='X' 
           ||box1=='X' && box4=='X' && box7=='X'
           ||box1=='X' && box5=='X' && box9=='X'
           ||box2=='X' && box5=='X' && box8=='X'
           ||box3=='X' && box6=='X' && box9=='X'
           ||box4=='X' && box5=='X' && box6=='X'
           ||box7=='X' && box8=='X' && box9=='X'
           ||box3=='X' && box5=='X' && box7=='X'){
                document.querySelector(".player1").style.display="flex";

        }
        else if(box1=='O' && box2=='O' && box3=='O' 
           ||box1=='O' && box4=='O' && box7=='O'
           ||box1=='O' && box5=='O' && box9=='O'
           ||box2=='O' && box5=='O' && box8=='O'
           ||box3=='O' && box6=='O' && box9=='O'
           ||box4=='O' && box5=='O' && box6=='O'
           ||box7=='O' && box8=='O' && box9=='O'
           ||box3=='O' && box5=='O' && box7=='O'){
                document.querySelector(".player2").style.display="flex";

            }


           
    })
}
let refresh =document.querySelectorAll(".refresh")
   
    for(let j=0;j<refresh.length;j++){
        refresh[j].addEventListener('click',()=>{
            document.querySelector(".btnd").style.display = "flex";
            document.querySelector(".gridpos").style.display="none";
            document.querySelector(".player1").style.display="none";
            document.querySelector(".player2").style.display="none";
            count=0;
            for(let i=0;i<allbox.length;i++){
                allbox[i].innerText= "";
            }
        })
    }

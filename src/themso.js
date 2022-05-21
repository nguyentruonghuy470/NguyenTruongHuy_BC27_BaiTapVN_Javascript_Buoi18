var content=[];
function addNumber(){
   
    var soNel= document.getElementById("soN").value;   
    var kq = document.getElementById("result-ex"); 
    content.push(soNel);
    console.log(content); 
    kq.innerHTML=content;
}
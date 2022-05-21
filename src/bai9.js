var content1=[];
function addNumber1(){
    var soNel1= document.getElementById("so1").value;   
    var kq1 = document.getElementById("result-ex1"); 
    content1.push(soNel1);
    console.log(content1); 
    kq1.innerHTML=content1;
}
function ktsoNguyen(content1){
    var kq = document.getElementById("result-ex-9");
    var countSochan=0;
    for(var i=0; i<content1.length;i++){
        if (Number.isInteger(Number(content1[i]))){
            countSochan++;
        }
    }
    kq.innerHTML="Đếm số dương là: "+countSochan;
}
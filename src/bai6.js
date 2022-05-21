var content=[];
function doiCho(content){
    var vitri1=+document.getElementById("soN1").value;
    var vitri2=+document.getElementById("soN2").value;
    var hoanvi;
    if (vitri1<=content.length && vitri2<=content.length){
        
        hoanvi=content[vitri1];
        content[vitri1]=content[vitri2]
        content[vitri2]=hoanvi;
    }
    var kq = document.getElementById("result-ex-6"); 
    kq.innerHTML= `<p> Mảng sau khi đổi : ${content} </p>`

}
var content=[];
function tinhTongSoDuongArray(content){
    var soNel= document.getElementById("soN").value;
    var sum1=0;
    console.log(content);
    for (let i=0; i< content.length;i++){
        if (content[i] > 0)
        {
            sum1+=parseInt(content[i]);
        }
    }
    var kq = document.getElementById("result-ex-1"); 
    kq.innerHTML= `<p> Tổng số dương: ${sum1} </p>`
}
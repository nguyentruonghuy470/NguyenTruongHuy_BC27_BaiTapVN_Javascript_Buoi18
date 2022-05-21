var content=[];
function sapXepTangDan(content){
    var sapXep = content.sort(compare)
    var kq = document.getElementById("result-ex-7"); 
    kq.innerHTML= `<p> Mảng sau khi đổi : ${sapXep} </p>`
}
function compare(a,b)
{
    // a - b > 0 ==> đối vị trí 2 số a,b
    return a-b;
}
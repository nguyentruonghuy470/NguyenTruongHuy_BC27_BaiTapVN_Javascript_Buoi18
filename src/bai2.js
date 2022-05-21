var content=[];
function demSoDuong(content){
    var count=0;
    console.log(content);
    for (let i=0; i< content.length;i++){
        if (content[i] > 0)
        {
            count++;
        }
    }
    var kq = document.getElementById("result-ex-2"); 
    kq.innerHTML= `<p> Số dương: ${count} </p>`
}
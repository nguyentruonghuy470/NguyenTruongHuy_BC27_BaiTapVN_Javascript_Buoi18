var content=[];
function timsoDuongNhoNhat(content){
    var min=content[0];
    console.log(content);
    for (let i=0; i< content.length;i++){
        if (min > content[i] && content[i] >= 0)
        {
            min=content[i];
        }
    }
    var kq = document.getElementById("result-ex-4"); 
    kq.innerHTML= `<p> Số nhỏ nhất : ${min} </p>`
}
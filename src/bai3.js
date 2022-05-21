var content=[];
function timsoNhoNhat(content){
    var min=content[0];
    console.log(content);
    for (let i=0; i< content.length;i++){
        if (min > content[i])
        {
            min=content[i];
        }

    }
    var kq = document.getElementById("result-ex-3"); 
    kq.innerHTML= `<p> Số nhỏ nhất: ${min} </p>`
}
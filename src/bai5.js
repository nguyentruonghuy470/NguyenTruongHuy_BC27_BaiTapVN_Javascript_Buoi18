var content=[];
function timsoDuongNhoNhatCuoiCung(content){
    var sochan;
    console.log(content);
    for (var i=(content.length)-1;i>=0;i--){
        
        if (content[i]%2==0)
        {
            sochan=parseInt(content[i])
            break;
        }
    }
    var kq = document.getElementById("result-ex-5"); 
    kq.innerHTML= `<p> Số chẵn cuối cùng : ${sochan} </p>`
}
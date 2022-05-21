var content=[];
function demSo(content){
    var countsoDuong=0;
    var countsoAm=0;
    for(var i=0; i<content.length;i++){
        if (Number(content[i])>0)
        {
            countsoDuong++;
        }
        else if (Number(content[i])<0)
        {
            countsoAm++;
        }
    }
    hienThiketqua(countsoAm,countsoDuong);
}
function hienThiketqua(countsoAm,countsoDuong){
    var kq1 = document.getElementById("result-ex-10");
    if (countsoDuong>countsoAm)
    kq1.innerHTML = "Số dương > số âm"
    else if (countsoDuong<countsoAm)
    {
    kq1.innerHTML = "Số âm > số dương"
    }
    else 
    kq1.innerHTML = "Số âm = số dương"
}
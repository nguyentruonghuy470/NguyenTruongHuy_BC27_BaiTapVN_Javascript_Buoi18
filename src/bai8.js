var content=[];
function ktSonguyentoArray(content){
    var kq=document.getElementById("result-ex-8");
    var songuyentodautien;
    for (var i=0; i<content.length;i++)
    {
        if(isPrime(content[i]))
        {
            songuyentodautien+=content[i];
            break;
        } 
    }
    kq.innerHTML+="Số nguyên tố đầu tiên trong mảng: "+content[i];
  }
  // console.log(arr); // use arr result on your own
function isPrime(n) {
    var content=[];
    if (n<2)
    {
        return false;
    }
    for (var i=2;i<Math.sqrt(n);i++)
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return true;
}
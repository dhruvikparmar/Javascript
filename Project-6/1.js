//image slider

let count=document.getElementById("count");
let num=0,timer,cnt=0;
let arr=["services2.png","services3.png","services4.png","services5.png","services6.png","services1.jpg"]
function start() {
    count.style.backgroundImage = `url(${arr[cnt]})`; 
    count.innerHTML = num; 
    cnt++;
    if (cnt >= arr.length) {
        cnt = 0;
    }
    timer = setTimeout(() => {
        start();
    }, 1000);
}
function stop()
{
    clearTimeout(timer)
}

//countdown

let mm=document.getElementById("mm");
let hh=document.getElementById("hh");
let ss=document.getElementById("ss");

let second=59,minite=59,hour=23;

function start2()
{
    hh.innerHTML=hour;
    mm.innerHTML=minite;
    ss.innerHTML=second;
    second--;   
    if(second==0)
    {
        second=59;
        minite--;
        if(minite==0)
        {
            minite=59;
            hour--;
        }
    }
    timer = setTimeout(() => { 
        start2();
    },1000);
}
function stop2()
{
    clearTimeout(timer)
}
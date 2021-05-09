var a=[];
var str='';

for( let i=0;i<=60;i++){
    str += '<option value="'+i+'" />';
}
var list=document.getElementById("min");
list.innerHTML=str;
var min,sec;

var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
  document.getElementById("txt").value = c;
  c = c + 1;
  t = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
}
function start(){
    if(!timer_is_on){
        timer_is_on=1;
        set();
    }
}
function stop(){
    if(!timer_is_on){
        timer_is_on=1;
        var m=document.getElementById("m").value;
        var s=document.getElementById("s").value;
        getTime(m,s);
    }
    else if(timer_is_on==1){
        clearTimeout(t);
        timer_is_on=0;
        document.getElementById("stop").innerHTML="Start";
    }else{
        reset();
    }
}
function set()
{
    min=document.getElementById("minu").value;
    sec=document.getElementById("sec").value;
    console.log(min,sec);
    getTime(min,sec);
}
function getTime(min,sec){
    document.getElementById('m').innerHTML=min;
    document.getElementById('s').innerHTML=sec;
    
    var m=min;
    var s=sec;
    console.log(min,sec);
    if(m==0 && s==0 ){
        document.getElementById('ou').innerHTML="Time Out!";
        document.getElementById("stop").innerHTML="Reset";
        timer_is_on=2;
    }else{ 
        if(s==0){
            m=m-1;
            document.getElementById('m').value=m;
            s=60
            document.getElementById('s').value=s;
            console.log(m,s);
        }else{
            document.getElementById('m').value=m;
            s=s-1;
            document.getElementById('s').value=s;
            document.getElementById("stop").innerHTML="Stop";
            
        }
    }
t=setTimeout(function(){ getTime(m,s)},500);
}

function reset(){
    location.reload();
}
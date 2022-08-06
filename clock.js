function time(){
    const date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(seconds<10) seconds = '0' + seconds;
    if(minutes<10) minutes = '0' + minutes;
    if(hours<10) hours = '0' + hours;
    document.getElementById("clock").innerHTML=hours + ":" + minutes + ":" + seconds;
    setTimeout(time,1000);
    let day = date.getDay();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    document.getElementById("date").innerHTML=day+"/"+month+"/"+year;
}
time();


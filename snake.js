var e = document.querySelector("#bf");
var w = 0;
var interval=setInterval(function(){
e.style.width=w+"%";
w=w+1;
if(w==100){document.getElementById("load").style.display="none";}
},50);

for(n=0;n<900;n++){
    var para = document.createElement("p");
    var DIV = document.getElementById("DIV");
    var PARA = document.getElementById("para1");
    DIV.insertBefore(para, PARA);}
for(m=0;m<900;m++){
    var dd = Math.floor(m/30);
    document.getElementsByTagName("p")[m].style.transform="translateY(-"+dd*10+"px)";
    document.getElementsByTagName("p")[m].style.mozTransform="translateY(-"+dd*10+"px)";
    document.getElementsByTagName("p")[m].style.webkitTransform="translateY(-"+dd*10+"px)";
    document.getElementsByTagName("p")[m].style.msTransform="translateY(-"+dd*10+"px)";}
var bd=[464,465];
var intv1;
var intv2;
var intv3;
var intv4;
var pnt=Math.floor(Math.random()*900);
var score=0;
function moved(){
    clearInterval(intv2);
    clearInterval(intv3);
    clearInterval(intv4);
    document.getElementById("u").disabled=true;
    document.getElementById("d").disabled=true;
    document.getElementById("r").disabled=false;
    document.getElementById("l").disabled=false;
    intv1=setInterval(function(){
        var ttt=bd[bd.length-1]+30;
        if(ttt>899){
            ttt=ttt-900;}
        if(bd.indexOf(ttt)>0){
        document.write("<h1 style='text-align:center; color:#fff; background:#1b4d4e; width:60%; margin:40px 20%; border-radius:30%; padding:16px 0px;'>"+"Game Over"+"</h1>"+"<h3 style='font-size:25px; color:#a1dcfd; text-align:center; background:#ff0b47; width:70%; margin:50px 15%; border-top-left-radius:30px; border-bottom-right-radius:30px; padding:20px 0px;'>"+"Your Score: "+score+"</h3>");
        clearInterval(intv1);}
        else{
        bd.push(ttt);
        if(ttt==pnt){
            score+=10;
            document.getElementById("hr").innerHTML=score;
            pnt=Math.floor(Math.random()*900);}
        else{document.getElementsByTagName("p")[bd.shift()].style.background="#000";}
        for(l=0;l<bd.length;l++){
            document.getElementsByTagName("p")[bd[l]].style.background="blue";}
        document.getElementsByTagName("p")[pnt].style.background="red";
        }},200)}
function mover(){
    clearInterval(intv1);
    clearInterval(intv3);
    clearInterval(intv4);
    document.getElementById("r").disabled=true;
    document.getElementById("l").disabled=true;
    document.getElementById("u").disabled=false;
    document.getElementById("d").disabled=false;
    intv2=setInterval(function(){
        var ttt=bd[bd.length-1]+1;
        if(ttt%30==0){
            ttt=ttt-30;}
        if(bd.indexOf(ttt)>0){
        document.write("<h1 style='text-align:center; color:#fff; background:#1b4d4e; width:60%; margin:40px 20%; border-radius:30%; padding:16px 0px;'>"+"Game Over"+"</h1>"+"<h3 style='font-size:25px; color:#a1dcfd; text-align:center; background:#ff0b47; width:70%; margin:50px 15%; border-top-left-radius:30px; border-bottom-right-radius:30px; padding:20px 0px;'>"+"Your Score: "+score+"</h3>");
        clearInterval(intv2);}
        else{
        bd.push(ttt);
        if(ttt==pnt){
            score+=10;
            document.getElementById("hr").innerHTML=score;
            pnt=Math.floor(Math.random()*900);}
        else{document.getElementsByTagName("p")[bd.shift()].style.background="#000";}
        for(l=0;l<bd.length;l++){
            document.getElementsByTagName("p")[bd[l]].style.background="blue";}
        document.getElementsByTagName("p")[pnt].style.background="red";}},200)}
function movel(){
    clearInterval(intv1);
    clearInterval(intv2);
    clearInterval(intv4);
    document.getElementById("r").disabled=true;
    document.getElementById("l").disabled=true;
    document.getElementById("u").disabled=false;
    document.getElementById("d").disabled=false;
    intv3=setInterval(function(){
        var ttt=bd[bd.length-1]-1;
        if(ttt%30==29 && ttt>0){
            ttt=ttt+30;}
       if(ttt<0){ttt=ttt+30
       } if(bd.indexOf(ttt)>0){
        document.write("<h1 style='text-align:center; color:#fff; background:#1b4d4e; width:60%; margin:40px 20%; border-radius:30%; padding:16px 0px;'>"+"Game Over"+"</h1>"+"<h3 style='font-size:25px; color:#a1dcfd; text-align:center; background:#ff0b47; width:70%; margin:50px 15%; border-top-left-radius:30px; border-bottom-right-radius:30px; padding:20px 0px;'>"+"Your Score: "+score+"</h3>");
        clearInterval(intv3);}
        else{
        bd.push(ttt);
        if(ttt==pnt){
            score+=10;
            document.getElementById("hr").innerHTML=score;
            pnt=Math.floor(Math.random()*900);}
        else{document.getElementsByTagName("p")[bd.shift()].style.background="#000";}
        for(l=0;l<bd.length;l++){
            document.getElementsByTagName("p")[bd[l]].style.background="blue";
        }
        document.getElementsByTagName("p")[pnt].style.background="red";
        }},200)}
function moveu(){
    clearInterval(intv1);
    clearInterval(intv2);
    clearInterval(intv3);
    document.getElementById("u").disabled=true;
    document.getElementById("d").disabled=true;
    document.getElementById("r").disabled=false;
    document.getElementById("l").disabled=false;
    intv4=setInterval(function(){
        var ttt=bd[bd.length-1]-30;
        if(ttt<0){
            ttt=ttt+900;}
        if(bd.indexOf(ttt)>0){
        document.write("<h1 style='text-align:center; color:#fff; background:#1b4d4e; width:60%; margin:40px 20%; border-radius:30%; padding:16px 0px;'>"+"Game Over"+"</h1>"+"<h3 style='font-size:25px; color:#a1dcfd; text-align:center; background:#ff0b47; width:70%; margin:50px 15%; border-top-left-radius:30px; border-bottom-right-radius:30px; padding:20px 0px;'>"+"Your Score: "+score+"</h3>");
        clearInterval(intv4);}
        else{
        bd.push(ttt);
        if(ttt==pnt){
            score+=10;
            document.getElementById("hr").innerHTML=score;
            pnt=Math.floor(Math.random()*900);}
        else{document.getElementsByTagName("p")[bd.shift()].style.background="#000";}
        for(l=0;l<bd.length;l++){
            document.getElementsByTagName("p")[bd[l]].style.background="blue";}
        document.getElementsByTagName("p")[pnt].style.background="red";}
},200)
}
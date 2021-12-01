var counter=0,obj,xpos,ypos;
obj=document.querySelector('#obj');

obj.onmouseover=function(){
    counter++;
    xpos=parseInt(Math.random()*1000);
    ypos=parseInt(Math.random()*800);
    obj.style.left=xpos+"px";
    obj.style.top=ypos+"px";
}

obj.onclick=function(){
    alert(counter+". seferde yakaladın");
    counter=0;
}
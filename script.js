const port='';

const module=require('./back')
module.$backs
$u=document.getElementById('gameTitle');
$dark=document.getElementById('darkener');
$b=document.getElementById('adContainer');
$a=document.getElementById('smallAdContainer');
$ç=document.getElementById('youtuberOf');
$k=document.getElementById('infoLinks');
$p=document.getElementById('instructionsText');
$h=document.getElementById('creatorLink');

function $txt(){
$u.innerText=' ';
$b.remove();
$a.remove();
$p.remove();
$k.remove();
$ç.remove();
}
function $bod(){
$img=document.createElement('img')
$img.src='https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg';
$img.style.backgroundRepeat ='no-repeat';
$img.style.backgroundPosition="relative";
$img.style.heigth='100vh';
$img.style.width='100vw';
$dark.appendChild($img)
}
function $back(){
    $h.innerHTML='<div id="power">ID=NaN<br>Power=NaN</br></div>'
    $h.style.backgroundColor='rgba(0, 0, 0, 0.4)';
}
$bod();
$txt();
$back();
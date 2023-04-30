

lodugame = ()=>{
const play1=Math.trunc(Math.random()*6)+1;
const play1dise=`lodu image/dise${play1}.png`;
document.getElementById("check1").setAttribute("src",play1dise);

const play2=Math.trunc(Math.random()*6)+1;
const play2dise=`lodu image/dise${play2}.png`;
document.getElementById("check2").setAttribute("src",play2dise);

if(play1==play2)
{
    document.querySelector("h1").innerHTML="Sorry DROW ?";
}
else if(play1>play2)
{
    document.querySelector("h1").innerHTML=" Hurry Player 1 won ";
}
else
{
    document.getElementById("ee").innerHTML="Hurry player 2 won ";
}
}

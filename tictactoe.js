const a1=document.getElementById("r00");
const a2=document.getElementById("r01");
const a3=document.getElementById("r02");
const b1=document.getElementById("r10");
const b2=document.getElementById("r11");
const b3=document.getElementById("r12");
const c1=document.getElementById("r20");
const c2=document.getElementById("r21");
const c3=document.getElementById("r22");
const s=document.querySelector(".start");
const result_div=document.querySelector(".result");
let arr=[[a1,a2,a3],[b1,b2,b3],[c1,c2,c3]];
let visited=[[true,true,true],[true,true,true],[true,true,true]];
let moves=0;
for(let i=0;i<3;i++)
  {for(let j=0;j<3;j++)
  {arr[i][j].innerHTML="";}}
let tool="X";
let l;
function convert(l)
{ if(l=="X")
{return "1";}
return "2";

}
function check(l)
{
  for(i=0;i<3;i++)
  {
    if(arr[0][i].innerHTML!=""&&arr[0][i].innerHTML==arr[1][i].innerHTML&&arr[1][i].innerHTML==arr[2][i].innerHTML)
    {s.innerHTML="USER"+convert(l)+" IS THE WINNER🥳🥳🥳";
  return true;}
  }
  for(i=0;i<3;i++)
  {
    if(arr[i][0].innerHTML!=""&&arr[i][0].innerHTML==arr[i][1].innerHTML&&arr[i][1].innerHTML==arr[i][2].innerHTML)
    {s.innerHTML="USER"+convert(l)+" IS THE WINNER🥳🥳🥳";
    return true;}
  }
  if(arr[0][2].innerHTML!=""&&arr[0][2].innerHTML==arr[1][1].innerHTML&&arr[1][1].innerHTML==arr[2][0].innerHTML)
  {s.innerHTML="USER"+convert(l)+" IS THE WINNER🥳🥳🥳";
  return true;}
  if(arr[0][0].innerHTML!=""&&arr[0][0].innerHTML==arr[1][1].innerHTML&&arr[1][1].innerHTML==arr[2][2].innerHTML)
  {s.innerHTML="USER"+convert(l)+" IS THE WINNER🥳🥳🥳";
  return true;}
  return false;
  
  
}
function game(k,l,a,b)
{ moves=moves+1;

  k.innerHTML=l;
  visited[a][b]=false;
  if(moves==9&&check(l)==false)
  {s.innerHTML="IT'S A DRAW😯😯😯";
  result_div.innerHTML="THANK YOU FOR PLAYING🌹.TO PLAY AGAIN REFRESH THE PAGE!";
  
return ;}
  if(check(l))
  { 
    for(let i=0;i<3;i++)
    {for(let j=0;j<3;j++)
    {visited[i][j]=false;}}
    
    result_div.innerHTML="THANK YOU FOR PLAYING🌹.TO PLAY AGAIN REFRESH THE PAGE!";
  return;}
  if(l=="X")
{tool= "O";}

 else
 {tool="X";}
}
function main2()
{ for(let i=0;i<3;i++)
  {
    for(let j=0;j<3;j++)
    {
    
    
        arr[i][j].addEventListener('click',function(){
          
           if(visited[i][j])
          {game(arr[i][j],tool,i,j);
          }
          
        })
      }
    }
  
  }
  








main2();

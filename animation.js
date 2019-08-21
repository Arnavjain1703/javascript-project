


var colors=
[
	"rgb(225, 0, 0)",
	"rgb(0, 225, 0)",
	"rgb(0, 0, 225)",
	"rgb(225, 225, 0)",
	"rgb(225, 12, 14)",
	"rgb(225, 0, 225)",

]


function changeColor(color)
{
  for(var i=0;i<square.length;i++)
  {
  	square[i].style.background=color;
  }
   h1.style.background=color;
}

function pickedColor()
{
	return Math.floor(Math.random()*5+0);
}




var val=0;
function rott()
{
	
	val=val+15;
	document.getElementById('rota').style.transform="rotate("+val+"deg)";

	if(val>359){
		val=1;
	}
}






var message=document.querySelectorAll("#message");

var square =document.querySelectorAll(".square");

var pickedColor=colors[pickedColor()];
 


var message=document.querySelector("#message")

var colorDisplay=document.querySelectorAll("#colordisplay"); 

var h1=document.querySelector(".h1");

message.textContent=pickedColor;


for(var i=0;i<square.length;i++)
{
	square[i].style.background =colors[i];
	square[i].addEventListener("click",function(){
	var clickedColor=this.style.background;
	
	if(pickedColor === clickedColor)
{

	changeColor(clickedColor);
}
else
{
	this.style.background="black";
    this.style.transition="2.0s";
}

	});
	

	
}


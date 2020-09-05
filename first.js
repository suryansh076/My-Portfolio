var h1=document.querySelector("h1");
var isBlue=false;

setInterval(function(){
	if(isBlue){
		h1.style.color="#a0522d";
	}
	else{
		h1.style.color="black";
	}
	isBlue= !isBlue;
},1000)

$("h2").on("mouseenter" ,function(){
	$(this).css("font-weight","bold");
	
})
$("h2").on("mouseleave" ,function(){
	$(this).css("font-weight", "normal");
	
})

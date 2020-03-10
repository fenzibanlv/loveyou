// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("小可爱真的不愿意嘛 o(´^｀)o");
	   }else if(Dianji==2){
		   		alert("你是我见过的最温柔最贤惠最可爱的女生");
		   		
	   }else if(Dianji==3){
		   		alert("我会永远爱你哒");
		   		
	   }else if(Dianji==4){
		   		alert("孩子教育我来搞");
		   		
	  }else if(Dianji==5){
		   		alert("不藏私房钱");
	  }else if(Dianji==6){
		   		alert("房子写你名");
	  }else if(Dianji==7){
		   		alert("工资全上交");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("就知道小可爱会同意哒，我们现在去领证吧⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄");
	}
	

}
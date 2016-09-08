
	var txt=document.getElementById("txt");
	txt.onfocus=function(){
		//什么时候清空呢
		if(txt.value=="请输入"){
			txt.value="";
		
			
		}
		txt.style.color="black";
	}
	txt.onblur=function(){
		if(txt.value==""){
			txt.value="请输入";
			txt.style.color="gainsboro"
		}
	}


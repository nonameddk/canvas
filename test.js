
		var canvasWidth=528;
		var canvasHeight=310;
		var canvas =document.getElementById("canvas");
		 canvas.width=canvasWidth;
		 canvas.height=canvasHeight;
		var context=canvas.getContext("2d");
		var img= new Image();
		var radius=40
         // var clippingRegion={x:0,y:0,r:radius};
		img.src="yyp.jpg";
		img.onload=function(e){
			initCanvas();
		};
		function initCanvas(){
			clippingRegion={x:Math.floor(Math.random()*(canvas.width-2*radius))+radius,
				y:Math.floor(Math.random()*(canvas.height-2*radius))+radius,r:radius};
			draw(img,clippingRegion);
		};
		function setClippingRegion(clippingRegion){
			context.beginPath();
			context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI*2,false);
			context.clip()
		}
		function draw(img,clippingRegion){
			// 清空画布
			context.clearRect(0,0,canvas.width,canvas.height);
			// 保持当前状态
			context.save();
			setClippingRegion(clippingRegion);
			context.drawImage(img,0,0);
			context.restore();

		}
          var timer=null;
		function show(){
			if (clippingRegion.r<1000) {
				clippingRegion.r+=20
				timer=setTimeout(show,30)
				draw(img,clippingRegion)
			}
		}
		function reset(){
			clearTimeout(timer)
			initCanvas();
		}
		
		

		

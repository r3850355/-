

		var dl_link;
		var img_ori;
		var imgs = document.getElementById('imgs').getElementsByTagName('img');
		var slide=function(i){
		
		  return function(e){
			//imgs[i].style.display='none';			
			//var imgurl = imgs[i].src;	
			
			//------------------------------------------����Ӥ���k
			//imgurl = imgurl.replace(/pre\//g,"");
			//imgurl = imgurl.replace(/jpg/g,"png");
			//
			var imgurl = "./img/"+i+".jpg";
			shuiyin('output',imgurl);  //�}�ҿ�ܪ��Ӥ�
			//---------------------------------------------------------
			
			
			
			img_ori = i; 					//�O��ۤ��s��
			document.getElementById('bott').style.display = "block"; //�}�ҲĤG��
			document.getElementById('topp').style.display = "none";  //���òĤ@��
			window.document.body.scrollTop = 0;
			window.document.documentElement.scrollTop = 0;
		  }
		};
		
		for(i=0;i<imgs.length;i++){
		  imgs[i].onclick=slide(i);
		}
	

		function shuiyin(canvasid,imgurl,addtext){
			var img = new Image();
			img.src = imgurl;	
			img.onload = function(){				
				var canvas = document.getElementById(canvasid);
				var ctx = canvas.getContext("2d");
				
				
					
				canvas.width = img.width;  //�վ�e���j�p
				canvas.height = img.height;
				
				var w = canvas.width;
				var h = canvas.height;
				

				ctx.drawImage(img,0,0,w,h);
				//ctx.font = "80px  Microsoft YaHei";
				ctx.fillStyle = "rgba(252,255,255,1)";


				document.getElementById("shuiyinText").onkeypress = function(e) {
					if(e.keyCode == 13) { //  'Enter' key
						shuiyinBtn.dispatchEvent(new Event('click'));
					}
				}


				var shuiyinBtn = document.getElementById("shuiyinBtn");
				shuiyinBtn.onclick = function(){

				var addtext = document.getElementById("shuiyinText").value;
				
				
				

				
				var text_w,text_h,text_l,text_fs
				text_l = addtext.length; //��J����
				text_fs = w/(text_l+2);  //�r��j�p�ץ�
				text_h = h*0.95;		//���Ϥ�����������
				//text_w = (w/2)- (text_l/2)*text_fs; //��r�m��
				//text_w = (w-text_l*text_fs)/2;//�󥿽T����k
				
				//addtext = Half2Full(addtext);//�b�������
				
				ctx.font = text_fs+"px  Microsoft YaHei";//�Y�ɭץ��r��j�p
				
				
				var lenn
				lenn = ctx.measureText(addtext); //���o�r���e��				
				text_w = (w-lenn.width)/2; //0908�e�׺�k
				
				if (document.getElementById("checkbox").checked == true)
				{
				ctx.strokeStyle="#000";
				ctx.lineWidth=10;
				ctx.strokeText(addtext,text_w,text_h); 			
				}
	
				ctx.fillText(addtext,text_w,text_h); //��ܦ�m && �W�r				
				dl_link = canvas.toDataURL();
				document.getElementById("DL").href=dl_link;
				
				}
			}
		}

		var errBtn = document.getElementById("errBtn");
		errBtn.onclick = function(){
		shuiyin('output',"./img/"+ img_ori +".jpg");
		}
		
	

	
		function Half2Full(zStr1) {
			var i = 0;
			var aTmp = new Array();
			var zStr2 = "";
			for(i = 0; i < zStr1.length; i++) {
				if(zStr1.charCodeAt(i) >=0 && zStr1.charCodeAt(i) <= 31) {
					aTmp[i] = 0;   //ascii �p�󵥩�32���r���A�����M�� null
				} else if(zStr1.charCodeAt(i) >=33 && zStr1.charCodeAt(i) <= 126)  {
					aTmp[i] = zStr1.charCodeAt(i) + 65248;   //ascii����33~126�������r���A�[�W65248�ǳ��ର����unicode
				} else {
					aTmp[i] = zStr1.charCodeAt(i);
				}
				zStr2 += String.fromCharCode(aTmp[i]);    //�ର����unicode
			}
			return zStr2;  //���ഫ���G�^����ӷ��r���m
		}
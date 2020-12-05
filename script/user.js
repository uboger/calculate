  	var userObj = {
  			getData:function(){
  				$.post("../AjaxStruts01/user",null,function(data){
  					if(data.userList==null){
  						return;
  					}
  					//当用数据的时候再创建表格
  					userObj.createTr(data.userList);
  				});
  			},
  			//获取数据时创建表格
  			createTr:function(users){
  				//alert("createTr");
  				var $topTR = $("<tr></tr>");
  				var $uidTH = $("<th></th>");
  				$uidTH.text("UID");
  				$uidTH.appendTo($topTR);
 				var $nameTH = $("<th></th>");
  				$nameTH.text("UNAME");
  				$nameTH.appendTo($topTR);
 				var $nickTH = $("<th></th>");
  				$nickTH.text("UNICK");
  				$nickTH.appendTo($topTR);
 				var $ADDTH = $("<th></th>");
  				$ADDTH.text("UAGE");
  				$ADDTH.appendTo($topTR);
 				var $genderTH = $("<th></th>");
  				$genderTH.text("UGENDER");
  				$genderTH.appendTo($topTR);
 				var $addTH = $("<th></th>");
  				$addTH.text("UADDRESS");
  				$addTH.appendTo($topTR);
  				var $delTH = $("<th></th>");
  				$delTH.text("DELETE");
  				$delTH.appendTo($topTR);
  				$("body").append($("<br/>"));
  				
  				var $TABLE = $("<table></table>");
  				$("body").append($TABLE);
  				$topTR.appendTo($TABLE);
  				for(var i=0;i<users.length;i++){
  					var $childTR = $("<tr></tr>");
  					var $uidTD = $("<TD></TD>");
  	  				$uidTD.text(users[i].id);
  	  				$uidTD.appendTo($childTR);
  	  				
  	 				var $nameTD = $("<TD></TD>");
  	 				var $nameINPUT = $("<INPUT/>");
  	 				$nameINPUT.attr("type","text");
  	 				$nameINPUT.attr("name","username");
  	 				$nameINPUT.attr("value",users[i].username);
  	 				$nameINPUT.appendTo($nameTD);
  	 				$nameINPUT.unbind("blur");
  	 				$nameINPUT.bind("blur",function(){
  	 					var model = userObj.getUserInfor(this);
  	 					//alert(model.sex);
  	 					//alert(model.address);
  	 					userObj.update(model);
  	 				});
  	  				$nameTD.appendTo($childTR);
  	  				
  	 				var $nickTD = $("<TD></TD>");
  	 				var $nickINPUT = $("<INPUT/>");
  	 				$nickINPUT.attr("type","text");
  	 				$nickINPUT.attr("name","realname");
  	 				$nickINPUT.attr("value",users[i].realname);
  	 				$nickINPUT.appendTo($nickTD);
  	 				$nickINPUT.unbind("blur");
  	 				$nickINPUT.bind("blur",function(){
  	 					var model = userObj.getUserInfor(this);
  	 					//alert(model.address);
  	 					userObj.update(model);
  	 				});
  	 				$nickTD.appendTo($childTR);
  	  				
  	 				var $ADDTD = $("<TD></TD>");
  	 				var $ADDINPUT = $("<INPUT/>");
  	 				$ADDINPUT.attr("type","text");
  	 				$ADDINPUT.attr("name","age");
  	 				$ADDINPUT.attr("value",users[i].age);
  	 				$ADDINPUT.appendTo($ADDTD);
  	 				$ADDINPUT.unbind("change");
  	 				$ADDINPUT.bind("change",function(){
  	 					userObj.resetAge(this);
  	 				});
  	 				$ADDINPUT.unbind("blur");
  	 				$ADDINPUT.bind("blur",function(){
  	 					var model = userObj.getUserInfor(this);
  	 					//alert(model.address);
  	 					userObj.update(model);
  	 				});
  	 				$ADDTD.appendTo($childTR);
  	  				
  	 				var $genderTD = $("<TD></TD>");
  	 				var $genderINPUT = $("<INPUT/>");
  	 				$genderINPUT.attr("type","radio");
  	 				$genderINPUT.attr("name","sex"+i);
  	 				$genderINPUT.attr("value",0);
  	 				$genderINPUT.attr("checked",users[i].sex==0);
  	 				var $span = $("<span></span>");
  	 				$span.text("女");
  	 				$genderINPUT.appendTo($genderTD);
  	 				$span.appendTo($genderTD);
  	 				
  	 				var $genderINPUT1 = $("<INPUT/>");
  	 				$genderINPUT1.attr("type","radio");
  	 				$genderINPUT1.attr("name","sex"+i);
  	 				$genderINPUT1.attr("value",1);
  	 				$genderINPUT1.attr("checked",users[i].sex==1);
  	 				var $span1 = $("<span></span>");
  	 				$span1.text("男");
  	 				$genderINPUT1.appendTo($genderTD);
  	 				$span1.appendTo($genderTD);
  	 				$genderINPUT.unbind("blur");
  	 				$genderINPUT.bind("blur",function(){
  	 					var model = userObj.getUserInfor(this);
  	 					//alert(model.sex);
  	 					userObj.update(model);
  	 				});
  	 				$genderINPUT1.unbind("blur");
  	 				$genderINPUT1.bind("blur",function(){
  	 					var model = userObj.getUserInfor(this);
  	 					//alert(model.sex);
  	 					userObj.update(model);
  	 				});
  	 				$genderTD.appendTo($childTR);
  	  				
  	 				var $addTD = $("<TD></TD>");
  	 				var $addINPUT = $("<INPUT/>");
  	 				$addINPUT.attr("type","text");
  	 				$addINPUT.attr("name","address");
  	 				$addINPUT.attr("value",users[i].address);
  	 				$addINPUT.appendTo($addTD);
  	 				$addINPUT.unbind("blur");
  	 				$addINPUT.bind("blur",function(){
  	 					var model = userObj.getUserInfor(this);
  	 					//alert(model.address);
  	 					userObj.update(model);
  	 				});
  	 				$addTD.appendTo($childTR);
  	 				
  	 				var $delTD = $("<td></td>");
  	 				var $delA = $("<a>删除</a>");
  	 				$delA.css({'cursor':'pointer'});
  	 				$delA.appendTo($delTD);
  	 				$delTD.appendTo($childTR);
  	 				$delA.unbind("click");
  	 				$delA.bind("click",function(){
  	 					
  	 					var id =  $(this).parent().siblings("td:first").text();
  	 					var model = {
  	 							id:id
  	 					};
  	 					if(window.confirm('你确定要删除吗？')){
  	 						$.post('../AjaxStruts01/user_delete',model,function(data){
  	 							$delA.parent().parent().remove();
  	 						});
  	 					}
  	 				});
  	 				
  	 				$childTR.appendTo($TABLE);
  				}
  			},
  			resetAge:function(thisObj){
  				//当年龄输入错误的时候重置的方法
  				var age = $(thisObj).val();
  				if(age>0){
  					
  				}else{
  					alert('年龄必须是数字');
  					$(thisObj).attr("value",0);
  				}
  			},
  			//更新操作
  			update:function(model){
  				$.post('../AjaxStruts01/user_update',model,function(data){
  					//alert("has update !");
  				});
  			},
  			//保存操作
  			save:function(model){
  				$.post('../AjaxStruts01/user_save',model,function(data){
  					//alert("has save !");
  				});
  			},
  			getUserInfor:function(thisObj){
  				//当光标离开文本框的时候要从这里获取user的属性
					var id = $(thisObj).parent().siblings("td:first").text();
	 					var name = $(thisObj).parent().siblings("td").children("input[name='username']").val();
	 					if(name==null){
	 						name = $(thisObj).val();
	 					}
	 					var realname = $(thisObj).parent().siblings("td").children("input[name='realname']").val();
	 					if(realname==null){
	 						realname= $(thisObj).val();
	 					}
	 					var age = $(thisObj).parent().siblings("td").children("input[name='age']").val();
	 					if(age==null){
	 						age = $(thisObj).val();
	 					}
	 					var sex = $(thisObj).parent().siblings("td").children("input[checked='true']").attr("value");
	 					if(sex==null){
	 						sex=$(thisObj).attr("value");
	 					}
	 					var address = $(thisObj).parent().siblings("td").children("input[name='address']").val();
	 					if(address==null){
	 						address  = $(thisObj).val();
	 					}
	 					var model = {
	 						id:id,
	 						username:name,
	 						realname:realname,
	 						age:age,
	 						sex:sex,
	 						address:address
	 					};
	 					return model;
  			},
  			createTable : function(){
  				//alert("jhhh");
  				//这里是创建添加数据的表格
  				var $addFORM = $("<form id='f1'></form>");
  				$addFORM.attr("action","../AjaxStruts01/user_save");
  				$addFORM.attr("method","get");
  				
  				var $addTABLE = $("<table></table>");
  				var $addTBODY = $("<tbody></tbody>");
  				
  				
  				var $titleTR  = $("<tr></tr>");
  				var $titleTD = $("<td>添加用户</td>");
  				$titleTD.attr("clospan","5");
  				$titleTD.appendTo($titleTR);
  				$titleTR.appendTo($addTBODY);
  				
  				var $addtopTR = $("<tr></tr>");
  				var $UINAMETH = $("<th>UNAME</th>");
  				$UINAMETH.appendTo($addtopTR);
  				var $UNICKTH = $("<th>UNICK</th>");
  				$UNICKTH.appendTo($addtopTR);
  				var $UADDTH = $("<th>UAGE</th>");
  				$UADDTH.appendTo($addtopTR);
  				var $USEXTH = $("<th>USEX</th>");
  				$USEXTH.appendTo($addtopTR);
  				var $UADDTH = $("<th>UADDRESS</th>");
  				$UADDTH.appendTo($addtopTR);
  				
  				var $addchilTR = $("<tr></tr>");
  				var $UINAMEtd = $("<td></td>");
  				var $addNameINPUT = $("<input></input>");
  				$addNameINPUT.attr("type","text");
  				$addNameINPUT.attr("name","username");
  				$addNameINPUT.appendTo($UINAMEtd);
  				$UINAMEtd.appendTo($addchilTR);
  				
  				var $UNICKtd = $("<td></td>");
  				var $addNickINPUT = $("<input></input>");
  				$addNickINPUT.attr("type","text");
  				$addNickINPUT.attr("name","realname");
  				$addNickINPUT.appendTo($UNICKtd);
  				$UNICKtd.appendTo($addchilTR);
  				//alert("jhhh");
  				var $Uagetd = $("<td></td>");
  				var $addageINPUT = $("<input></input>");
  				$addageINPUT.attr("type","text");
  				$addageINPUT.attr("name","age");
  				$addageINPUT.appendTo($Uagetd);
  				$Uagetd.appendTo($addchilTR);
  				$addageINPUT.unbind("change");
  				$addageINPUT.bind("change",function(){
	 					userObj.resetAge(this);
	 			});
  				
  				var $USEXtd = $("<td></td>");
  				var $genderINPUT = $("<INPUT/>");
 				$genderINPUT.attr("type","radio");
 				$genderINPUT.attr("name","sex");
 				$genderINPUT.attr("value",0);
 				$genderINPUT.attr("checked",true);
 				var $span = $("<span></span>");
 				$span.text("女");
 				$genderINPUT.appendTo($USEXtd);
 				$span.appendTo($USEXtd);
 				var $genderINPUT1 = $("<INPUT/>");
 				$genderINPUT1.attr("type","radio");
 				$genderINPUT1.attr("name","sex");
 				$genderINPUT1.attr("value",1);
 				var $span = $("<span></span>");
 				$span.text("男");
 				$genderINPUT1.appendTo($USEXtd);
 				$span.appendTo($USEXtd);	
  				$USEXtd.appendTo($addchilTR);
  				alert("jhhh");
  				var $UADDtd = $("<td></td>");
  				var $addADDINPUT = $("<input></input>");
  				$addADDINPUT.attr("type","text");
  				$addADDINPUT.attr("name","address");
  				$addADDINPUT.appendTo($UADDtd);
  				$UADDtd.appendTo($addchilTR);
  				
  				var $submitTR = $("<tr></tr>");
  				var $submitTD = $("<td colspan='5' style='color:#00FF00;text-align:right;'></td>");
  				var $buttonINPUT = $("<input type='button' value='保存'></input>");
  				$buttonINPUT.unbind("click");
  				$buttonINPUT.bind("click",function(){
  					if(window.confirm('确定要保存吗？')){
  						$("#f1").submit();
  					}
  				});
  				var $buttonINPUT1 = $("<input type='button' value='Ajax保存'></input>");
  				$buttonINPUT1.unbind("click");
  				$buttonINPUT1.bind("click",function(){
  					if(window.confirm('确定要保存吗？')){
  						//得到表单数据
  						var userModel = userObj.getSaveModel(this);
  						//保存到服务器
  						userObj.save(userModel);
  						$("#f1").remove();
  						$("table").remove();
  						//把表格删除后从新加载
  						userObj.getData();
  					}
  				});
  				$buttonINPUT.appendTo($submitTD);
  				$buttonINPUT1.appendTo($submitTD);
  				$submitTD.appendTo($submitTR);
  				$addtopTR.appendTo($addTBODY);
  				$addchilTR.appendTo($addTBODY);
  				$submitTR.appendTo($addTBODY);
  				$addTBODY.appendTo($addTABLE);
  				$addTABLE.appendTo($addFORM);
  				$addFORM.appendTo($("body"));
  				//alert("end");
  			},
  			getSaveModel:function(thisObj){
  				//获取新添加用户的数据
  				//thisObj为<input type = "button"/> 
					var username = $(thisObj).parent().parent().prev().find("input[name='username']").val();
					var realname = $(thisObj).parent().parent().prev().find("input[name='realname']").val();
					var age = $(thisObj).parent().parent().prev().find("input[name='age']").val();
					var sex = $(thisObj).parent().parent().prev().find("input[checked='true']").val();
					var address = $(thisObj).parent().parent().prev().find("input[name='address']").val();
					var userModel = {
							username:username,
							realname:realname,
							age:age,
							sex:sex,
							address:address
					};
					return userModel;
  			}
  	};
  	
  $().ready(function(){
	  //当加载完此页面时，从服务器获取数据
	  userObj.getData();
	  
	 $("#submit").unbind("click");
	 $("#submit").bind("click",function(){
		$.post("../AjaxStruts01/ajax_method",null,function(data){
			alert(data.name);
		});
	 });
	 $("#submit1").unbind("click");
	 $("#submit1").bind("click",function(){
		 //创建一个添加数据的表单
		 //ajax发送不需要表单，
		userObj.createTable();
	 });
  });
//自己封装的ajax请求

//	window.onload=function(){
//   		document.getElementById("submit").onclick=function(){
//   	  		ajaxObj.post({
//   	  			method:'get',
//   	  			url:'../AjaxStruts/ajax_method',
//   	  			data:null,
//   	  			callback:function(data){
//   	  				alert(typeof data);
//   	  			}
//   	  		});

//   	  	};
  //	};
 
  
  //xmlHttp对象封装 回调函数
  
  var ajaxObj ={
  		 xmlHttp : "",
  	     getXmlHttp : function(){
  	         var xmlHttp;
  	          try{
  	            // Firefox, Opera 8.0+, Safari
  	            xmlHttp = new XMLHttpRequest();
  	        } catch(e) {
  	            // Internet Explorer
  	            try {
  	                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
  	            } catch (e) {
  	                try {
  	                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  	                } catch (e) {
  	                    alert("您的浏览器不支持AJAX！");
  	                    return null;
  	                }
  	            }
  	        }
  	        return xmlHttp;
  	        },
  			post:function(jsonObj){
  				ajaxObj.xmlHttp=ajaxObj.getXmlHttp();
  				//在此监听
  				ajaxObj.xmlHttp.onreadystatechange = changestated;
  				//发送请求
  				ajaxObj.xmlHttp.open(jsonObj.method,jsonObj.url,true);
  				//传送数据
  	          	ajaxObj.xmlHttp.send(jsonObj.data);
  	          	function changestated(){
  	          	 if(ajaxObj.xmlHttp.readyState==4){
                     if(ajaxObj.xmlHttp.status==200){
                         var data = ajaxObj.xmlHttp.responseText;
                         //回调函数，在此调用，在使用时创建
                         //在此接收服务端返回的数据
                         jsonObj.callback(data);
                     };
                 };
  	          	}
  			}
  	};
/**
*
*@author uboger
*实现计算功能的代码
**/
var calculator = {
	createButton : function() {
		var sign = new Array("MC", "MR", "PI", "M+", "M-", "B", "CE", "C", "±",
				"√", "7", "8", "9", "/", "⅓", "4", "5", "6", "*", "½", "1",
				"2", "3", "-", "+", "0", ".", "=", "x²", "xⁿ");
		for (var i = 0; i < sign.length; i++) {
			var $BUTTON = $("<div class='button'><span class='btn'></span></div>");
			$BUTTON.children("span").text(sign[i]);
			$BUTTON.appendTo($("#btn"));
			$BUTTON.unbind("mouseover");
			$BUTTON.bind("mouseover", function() {
				$(this).attr("class", "release");
			});
			$BUTTON.unbind("mouseout");
			$BUTTON.bind("mouseout", function() {
				$(this).attr("class", "button");
			});
			$BUTTON.unbind("mousedown");
			$BUTTON.bind("mousedown", function() {
				$(this).attr("class", "press");
				if (calculator.getSign(this) == '+') {
					if (calculator.checkData('+')) {
						return;
						alert("啊我还是被运行了，呵呵可能吗？");
					} else {
						// 如果没有数据可以计算，就添加一个数据，
						// 并且清空显示
						calculator.rememberStart(calculator.getNumber(), '+');
						calculator.clearTextArea();
						return;
					}
				} else if (calculator.getSign(this) == '-') {
					if (calculator.checkData('-')) {
						return;
						alert("啊我还是被运行了，呵呵可能吗？");
					} else {
						// 如果没有数据可以计算，就添加一个数据，
						// 并且清空显示
						calculator.rememberStart(calculator.getNumber(), '-');
						calculator.clearTextArea();
						return;
					}
				} else if (calculator.getSign(this) == '*') {
					if (calculator.checkData('*')) {
						return;
						alert("啊我还是被运行了，呵呵可能吗？");
					} else {
						// 如果没有数据可以计算，就添加一个数据，
						// 并且清空显示
						calculator.rememberStart(calculator.getNumber(), '*');
						calculator.clearTextArea();
						return;
					}
				} else if (calculator.getSign(this) == '½') {
					// 当直接点击1/2时直接显示计算结果
					calculator.rememberStart(calculator.getNumber(), '/');
					// 先判断是否有可以计算的数据
					if (calculator.hadData()) {
						calculator.rememberEnd(2);
						var end = calculator.calculator(calculator.data);
						calculator.showNumber(end);
						calculator.clearData();
						return;
					} else {
						// 如果有就计算，没有什么的不做
						return;
					}
				} else if (calculator.getSign(this) == '⅓') {
					// 当直接点击⅓时直接显示计算结果
					calculator.rememberStart(calculator.getNumber(), '/');
					// 先判断是否有可以计算的数据
					if (calculator.hadData()) {
						calculator.rememberEnd(3);
						var end = calculator.calculator(calculator.data);
						calculator.showNumber(end);
						calculator.clearData();
						return;
					} else {
						// 如果有就计算，没有什么的不做
						return;
					}
				} else if (calculator.getSign(this) == 'x²') {
					// 当直接点击x²时直接显示计算结果
					calculator.rememberStart(calculator.getNumber(), '*');
					// 先判断是否有可以计算的数据
					if (calculator.hadData()) {
						calculator.rememberEnd(calculator.getStartNumber());
						var end = calculator.calculator(calculator.data);
						calculator.showNumber(end);
						calculator.clearData();
						return;
					} else {
						// 如果有就计算，没有什么的不做
						return;
					}
				} else if (calculator.getSign(this) == 'xⁿ') {
					if (calculator.checkData('xⁿ')) {
						return;
						alert("啊我还是被运行了，呵呵可能吗？");
					} else {
						// 如果没有数据可以计算，就添加一个数据，
						// 并且清空显示
						calculator.rememberStart(calculator.getNumber(), 'xⁿ');
						calculator.clearTextArea();
						return;
					}
				} else if (calculator.getSign(this) == '√') {
					// 当直接点击√时直接显示计算结果
					calculator.rememberStart(calculator.getNumber(), '√');
					// 先判断是否有可以计算的数据
					if (calculator.hadData()) {
						var end = calculator.calculator(calculator.data);
						calculator.showNumber(end);
						calculator.clearData();
						return;
					} else {
						// 如果有就计算，没有什么的不做
						return;
					}
				} else if (calculator.getSign(this) == '/') {
					if (calculator.checkData('/')) {
						return;
						alert("啊我还是被运行了，呵呵可能吗？");
					} else {
						// 如果没有数据可以计算，就添加一个数据，
						// 并且清空显示
						calculator.rememberStart(calculator.getNumber(), '/');
						calculator.clearTextArea();
						return;
					}
				} else if (calculator.getSign(this) == 'C') {
					calculator.clearTextArea();
					// calculator.clearData();
					return;
				} else if (calculator.getSign(this) == 'CE') {
					calculator.clearTextArea();
					calculator.clearData();
					return;
				} else if (calculator.getSign(this) == 'B') {
					calculator.back();
					return;
				} else if (calculator.getSign(this) == '=') {
					calculator.rememberEnd(calculator.getNumber());
					var end = calculator.calculator(calculator.data);
					calculator.showNumber(end);
					calculator.clearData();
					return;
				} else if (calculator.getSign(this) == 'PI') {
					// alert(Math.PI);
					calculator.putInTextView(Math.PI);
					return;
				}  else if (calculator.getSign(this) == '±') {
					calculator.changeCurrentNumberSign();
					return;
				}else if (calculator.isOtherButton(this)) {
					return;
				}
				calculator.setTextValue(this);
			});
		}
		// alert(sign.length);
	},
	changeCurrentNumberSign:function(){
		var value = calculator.getNumber();
		var first = value.substring(0,1);
		if(first!='-'){
			calculator.showNumber('-'+value);
		}else{
			var value = calculator.getNumber();
			var data = value.substring(1,value.length);
			calculator.showNumber(data);
		}
	},
	setTextValue : function(thisObj) {
		var textValue = $("#d1").children("span").text();
		var releaseValue = $(thisObj).children("span").text();
		if(calculator.checkNumberLength()){
			calculator.showNumber(textValue+releaseValue);
		}else{
			alert("非法输入！");
		}
		
		
		return textValue + releaseValue;
	},
	getSign : function(thisObj) {
		return releaseValue = $(thisObj).children("span").text();
	},
	getNumber : function() {
		return $("#d1").children("span").text();
	},
	rememberStart : function(data, sign) {
		calculator.data.start = data;
		calculator.data.sign = sign;

	},
	rememberEnd : function(data) {
		calculator.data.end = data;
	},
	data : {
		start : '',
		end : '',
		sign : ''
	},
	clearTextArea : function() {
		$("#d1").children("span").text("");
	},
	calculator : function(data) {
		if (data.start == null) {
			return null;
		}
		switch (data.sign) {
		case '+':
			return (data.start / 1) + (data.end / 1);
		case '-':
			return (data.start / 1) - (data.end / 1);
		case '*':
			return (data.start / 1) * (data.end / 1);
		case '/':
			return (data.start / 1) / (data.end / 1);
		case '√':
			return Math.sqrt((data.start / 1.0));
		case 'xⁿ':
			return Math.pow((data.start / 1), (data.end / 1));
		}
	},
	checkNumberLength:function(){
	var value	= $("#d1").children("span").text();
	return value==null ? true : (value.length<18 ? true :false);
	},
		
	showNumber : function(data) {
		var value = $("#d1").children("span").text();
		$("#d1").children("span").text(data);
		if(value.length>18){		
			$("#d1").attr("class","small");
		}
	},
	// 检查是否可以计算结果
	checkData : function(sign) {
		if (calculator.data.start != '') {
			// 如果有calculator.data.start就执行一次计算
			// 并且返回true
			// 如果calculator.data.start=‘’就返回false
			calculator.rememberEnd(calculator.getNumber());
			var end = calculator.calculator(calculator.data);
			calculator.showNumber(end);
			calculator.clearData();
			return true;
		} else {
			return false;
		}
	},
	clearData : function() {
		calculator.data.start = '';
		calculator.data.sign = '';
		calculator.data.end = '';
	},
	back : function() {
		var value = $("#d1").children("span").text();
		$("#d1").children("span").text(value.substring(0, value.length - 1));
	},
	hadData : function() {
		return calculator.data.start != '';
	},
	putInTextView : function(number) {
		$("#d1").children("span").text(number);
	},
	getStartNumber : function() {
		return calculator.data.start;
	},
	isOtherButton : function(thisObj) {
		var sign = calculator.getSign(thisObj);
		switch (sign) {
		case 'M-':
			return true;
		case 'M+':
			return true;
		case 'MR':
			return true;
		case 'MC':
			return true;

		default:
			return false;
		}
	}
};
$().ready(function() {
	calculator.createButton();
});
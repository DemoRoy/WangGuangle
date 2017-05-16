$(document).ready(function(){

	// 导航条按钮点击事件
	$(".btn").click(function(){
		$("#navbar").toggle();
	});

	// 手机端导航条按钮点击事件
	$(".mbtn").click(function(){
		location.href = "../index.html";
	});

	$(".text .left li").click(function(){
		$(".text .left li .info").toggle();
	});

	$(".exhibition .right figure").click(function(){
		$(".exhibition .right .info").toggle();
	});

});

// 背景自动轮播
var i = 1;
var autoChange = setInterval(function(){
	i++;
	if (i < 5) {
		var bg = 'url("img/pc-bg' + i + '.jpg';
		$(".bg").css("backgroundImage", bg);
	} else {
		i = 1;
	}
}, 5000);

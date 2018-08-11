// JavaScript Document
$(document).ready(function() {
	$(window).scroll(function(){
		//var height = $(window).scrollTop();
		//alert(height);
		if($(window).scrollTop() > 200){
			//$('.image001').animate({'opacity':'1'},1000);
			//$('.image002').delay(500).animate({'opacity':'1'},1000);
			$('.image002').delay(500).addClass("query001");
			$('.image001').addClass("query002");
			$('.social001').delay(1000).addClass("query002");
			//$('.social001').delay(1000).animate({'opacity':'1'},1000);
		}else{
			$('.image002').removeClass("query001");
			$('.social001').removeClass("query002");
			$('.image001').removeClass("query002");
			}
		if($(window).scrollTop() > 1400){
			//$('.column002').animate({'opacity':'1'},1000);
			$('.column002').addClass("query002");
		}else{
			$('.column002').removeClass("query002");
			}
		if($(window).scrollTop() > 800){
			//$('.column003').animate({'opacity':'1'},1000);
			$('.column003').addClass("query002");
		}else{
			$('.column003').removeClass("query002");
		}
		if($(window).scrollTop() > 2000){
			//$('.column004').animate({'opacity':'1'},1000);
			$('.column004').addClass("query002");
		}else{
			$('.column004').removeClass("query002");
		}
		if($(window).scrollTop() > 2800){
			//$('.column005').animate({'opacity':'1'},1000);
			$('.column005').addClass("query002");
		}else{
			$('.column005').removeClass("query002");
		}
		if($(window).scrollTop() > 2800){
			//$('.column005').animate({'opacity':'1'},1000);
			$('#chara001').addClass("query002");
			$('.image006').delay(1000).addClass("query005");
		}else{
			$('#chara001').removeClass("query002");
			$('.image006').removeClass("query005");
		}
		if($(window).scrollTop() > 3300){
			//$('.column005').animate({'opacity':'1'},1000);
			$('#chara002').addClass("query002");
			$('.text001').addClass("query006");
		}else{
			$('#chara002').removeClass("query002");
			$('.text001').removeClass("query006");
		}
		if($(window).scrollTop() > 3800){
			//$('.column005').animate({'opacity':'1'},1000);
			$('#chara003').addClass("query002");
			$('.image004').addClass("query004");
		}else{
			$('#chara003').removeClass("query002");
			$('.image004').removeClass("query004");
		}
		if($(window).scrollTop() > 4500){
			//$('#footerArea').animate({'opacity':'1'},1000);
			$('#footerArea').addClass("query002");
			$('.image005').delay(3000).addClass("query003");
		}else{
			$('#footerArea').removeClass("query002");
			$('.image005').removeClass("query003");
		}
		if($(window).scrollTop() > 100){
			$('.clone001').addClass("query002");
		}else{
			$('.clone001').removeClass("query002");
		}
	});
	$('#Slider').cycle({ 
		fx		:	'fade',
		next	:	'#next',
		prev	:	'#prev',
		pager	:	'#pager',
		sync	:	false, 
		delay	:	-2000,
		pause	:	1
	});
	$('.nav002').click(function(){
		$('html, body').animate({
			scrollTop: $("#target002").offset().top
		}, 1500);
	});
	$('.nav001').click(function(){
		$('html, body').animate({
			scrollTop: $("#target003").offset().top
		}, 1500);
	});
	$('.nav003').click(function(){
		$('html, body').animate({
			scrollTop: $("#target004").offset().top
		}, 1500);
	});
	$('.nav004').click(function(){
		$('html, body').animate({
			scrollTop: $("#target005").offset().top
		}, 1500);
	});
	$('.nav005').click(function(){
		$('html, body').animate({
			scrollTop: $("#footerArea").offset().top
		}, 1500);
	});
});
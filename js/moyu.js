function AddFavorite(title, url) {
	try {
		window.external.addFavorite( url,title);
	}
	catch (e) {
		try {
			window.sidebar.addPanel(title, url, "");
		}
		catch (e) {
			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}
$(function(){	
    $(".menu ul li > a").each(function() {		
		if ($(this).attr("href").toLowerCase().replace(/\/|[&#].*/g,"") == document.URL.toLowerCase().replace(/\/|[&#].*/g,"")){
			$(this).parent('li').attr("class","on"); 
		}
	});
	$('.bxslider').bxSlider({		
		minSlides: 3,
		maxSlides: 5,
		slideWidth: 228,
		slideMargin: 15,
		auto:true,
		controls:true,
		pager:false
	});
	$("#slides").responsiveSlides({
        auto: true,
        pager: true,
        nav: false,
        speed: 500,        
        namespace: "transparent-btns"
     });
	 $('#menu').prepend('<div class="navbtn"><span></span><span></span><span></span><span></span></div>');
	 $('#menu .menu ul li').hover(function(){
		$(this).children('a').addClass('on'); 
		$(this).children('ul').show();
	 },function(){
		 $(this).children('a').removeClass('on').end().find('ul').hide();
	 });
	 $('#menu').after('<nav id="nav" class="inner"></nav>');
	 $('#menu .menu').clone(false).appendTo('#nav');
	 $('#nav ul li > ul li:last').css('borderBottom','none');
	 $('.navbtn').bind('click',function(){
		$('#nav').slideToggle('fast');
	 });
	 $(window).resize(function(){
		var $_body = $('body').width();
		if($_body > 750){
			$('#nav').hide();
		}
	 });
	 $('.tools-phone').hover(function(){
		$(this).addClass('on');	
		$(this).find('a').show();
		if(!$(this).is(':animated')){
			$(this).animate({'width':'170px','marginLeft':'-170px'},500);
		}
	},function(){		
		$(this).animate({'width':'0','marginLeft':'0'},100,function(){
			$(this).removeClass('on')
		});
	});
	$('.backtop').click(function(){
		$('html,body').animate({scrollTop:0},500);
	});
	$('ul.news-list li:last').css('borderBottom','none');
	$('.post .entry blockquote').append('<span class="blockquote"></span>');
	$('.pro-title h3').bind('click',function(){
		$(this).addClass('on').siblings().removeClass('on');
		var $_index = $(this).index();
		$('.tabbox').eq($_index).fadeIn().siblings('.tabbox').hide();
	});
	if(document.URL.toLowerCase().indexOf("cmt")>1){
		$('.pro-title h3').eq(1).addClass('on').siblings().removeClass('on');
		$('.tabbox').eq(1).fadeIn().siblings('.tabbox').hide();
	}
	$('.related-products').bxSlider({		
		minSlides: 3,
		maxSlides: 4,
		slideWidth: 206,
		slideMargin: 15,
		auto:true,
		controls:true,
		pager:false
	});
	$('.tools').after('<div class="fix-bg"></div>');
	$('span.weixin a').bind('click',function(){
		$('.fix-bg,.weixin-qrcode').show();
	});
	$('.fix-bg').bind('click',function(){
		$(this).hide();
		$('.weixin-qrcode').hide();
	});
});
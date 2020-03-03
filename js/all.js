$(document).ready(function () {
    
    //menu- 手機版menu
    $('.js-openMenu-btn').click(function(e){
        e.preventDefault();
        $('.js-openMenu').fadeToggle();
    });
    
    //menu - 在網頁版時，open-menu 必須關閉
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if ( windowWidth >= 768){
            $('.js-openMenu').css('display','none');
        }
    });
    //menu - 點擊menu時，滑至該區
    $('.js-menu-item').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var sum = -56
        var targetPos = sum + Number($(target).offset().top);
        $('body,html').animate({scrollTop:targetPos}, 1000);
    });

    //滑動視窗
    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        //menu至對應區域時顯示item
        $('.js-menu-item').each(function(){
            var target = $(this).attr('href');
            var targetPosDef = $(target).offset().top;
            var targetPos = targetPosDef -56;
            var targetHeight = $(target).outerHeight();
            if ( targetPos <= scrollPos && targetPos + targetHeight >= scrollPos ){
                $('.js-menu-item').removeClass('menu-item-active');
                $(this).addClass('menu-item-active');
            } else{
                $(this).removeClass('menu-item-active');
            }
        });

        //fadeIn
        $('.animated').each(function(){
            var thisPos = $(this).offset().top;
            if ( thisPos <= scrollPos + windowHeight - 56 ){
                $(this).addClass('fadeIn');
            }
        });
    });

    //Cart.html 加入購物車 計算
    var count = 0;
    $('.myCart-count').text(count);
    $('.js-product-item-btn').click(function(e){
        e.preventDefault();
        $('.myCart-count').text(++count);
    });

    //Cart.html 點擊愛心收藏
    $('.js-item-like').click(function(){
        $(this).find('i').toggle().toggleClass('active');
    });

});
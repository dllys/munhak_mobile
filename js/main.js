$(function(e){
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
    mainInit()
})

function mainInit(){
    gnb_menu()
    top_btn()
}



function gnb_menu(){
    let $topmenu = $('#header .top-menu .bar');
    let $nav = $('#nav');
    let $close = $('#nav .close');
    let $menua = $('#nav .gnb li > a');
    let $plus = $('#nav .gnb .plus'); 
    let $minus = $('#nav .gnb .minus'); 
    let $lan = $('#header .top-menu .lan');
    let $ko = $('#header .top-menu .ko');
    let $eng = $('#header .top-menu .eng');
    $ko.show();
    $eng.hide();
    $plus.show();
    $minus.hide();


    $topmenu.on('click', function(){
        $nav.addClass('on');
        $('#nav .gnb li ul').stop().hide();
        $('.bottom-nav').animate({bottom:-80},300);
    })

    $close.on('click', function(){
        $nav.removeClass('on');
        $('.bottom-nav').animate({bottom:0},300);
    })

    $menua.on('click', function(){
        $('#nav .gnb li ul').stop().slideUp()
        $(this).next().stop().slideToggle();
        //$plus.toggle();
        $plus.show()
        $(this).find('.plus').hide();
        $(this).find('.minus').show();        
    })

    $lan.on('click', function(){
        $ko.toggle();
        $eng.toggle();
    })

}



function top_btn(){
    let top = 0;
    $('.top-btn').hide();
    $(window).on('scroll', function(){
        top = $(this).scrollTop();                
        if(top>350){
            $('.top-btn').slideDown();
        }else {
            $('.top-btn').slideUp();
        }
    })
    $('.top-btn').on('click',function(){
        $('html,body').animate({scrollTop:0}, 300)
    })
}
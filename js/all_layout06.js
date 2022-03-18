$(function(){
    ///////////////////////////////////////
    
    // topBanner : GIL 2022.03.17  수정 
    
    function topBannerHandler(){
        //  $('.topBanner').hide();  //display:none; 
        $('.topBanner').slideUp(); 
    }
    $('.topBanner .container i').on('click', topBannerHandler)


    // visualSlide 
    $('.visualSlide').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots:true,
        prevArrow:  ' <div class="msLeft"></div>',
        nextArrow: ' <div class="msRight"></div>'
    });


    // slick 에 원하는 클래스 줬다 뻇다 할 수 있다.. -> 내가 준 클래스로 css를 줄수 있다.
    // 슬라이드에 애니메이션 ...
    $('visualSlide figure').eq(1).addClass('oo') 
    $('.visualSlide').on('afterChange',function(event, slick, currentSlide){
        console.log(event, slick, currentSlide);
        $('.visualSlide figure').eq(currentSlide+1).addClass('oo').siblings().removeClass('oo');
        if (currentSlide===1) {
            $('.msLeft').addClass('oo')            
        } else {
            $('.msLeft').removeClass('oo')
        }
    
    });
    
    // $('.visualSlide').on('beforeChange',function(event, slick, currentSlide){
    //     console.log('슬라이드 시작 전');
    // })
    
    $('.eProductSlide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,
    })

    $('.eventProduct i:nth-of-type(1)').on('click', function(){
        $('.eProductSlide').slick('slickPause')
    })
    $('.eventProduct i:nth-of-type(2)').on('click', function(){
        $('.eProductSlide').slick('slickPlay')
    })


    $('.aproductSlide').slick({
        arrows: false,
        dots:true,
        slidesToShow:5,
        centerMode:true,        
    })   



    $('.allProduct i:first-child ').on('click',function(){
        $('.aproductSlide').slick('slickPrev')
    })
    $('.allProduct i:last-child ').on('click',function(){
        $('.aproductSlide').slick('slickNext')
    })



    ////////////////////////////////////////
    })
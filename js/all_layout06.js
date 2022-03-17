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
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots:true,
    });

    


    
    
    ////////////////////////////////////////
    })
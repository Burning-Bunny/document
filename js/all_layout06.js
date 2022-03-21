$(function () {
  ///////////////////////////////////////

  // topBanner : GIL 2022.03.17  수정

  function topBannerHandler() {
    //  $('.topBanner').hide();  //display:none;
    $(".topBanner").slideUp();
  }
  $(".topBanner .container i").on("click", topBannerHandler);

  // visualSlide
  $(".visualSlide").slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: ' <div class="msLeft"></div>',
    nextArrow: ' <div class="msRight"></div>',
  });

  // slick 에 원하는 클래스 줬다 뻇다 할 수 있다.. -> 내가 준 클래스로 css를 줄수 있다.
  // 슬라이드에 애니메이션 ...
  $("visualSlide figure").eq(1).addClass("oo");
  $(".visualSlide").on("afterChange", function (event, slick, currentSlide) {
    console.log(event, slick, currentSlide);
    $(".visualSlide figure")
      .eq(currentSlide + 1)
      .addClass("oo")
      .siblings()
      .removeClass("oo");
    if (currentSlide === 1) {
      $(".msLeft").addClass("oo");
    } else {
      $(".msLeft").removeClass("oo");
    }
  });

  // $('.visualSlide').on('beforeChange',function(event, slick, currentSlide){
  //     console.log('슬라이드 시작 전');
  // })

  $(".eProductSlide").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  });

  $(".eventProduct i:nth-of-type(1)").on("click", function () {
    $(".eProductSlide").slick("slickPause");
  });
  $(".eventProduct i:nth-of-type(2)").on("click", function () {
    $(".eProductSlide").slick("slickPlay");
  });

  $(".aproductSlide").slick({
    arrows: false,
    dots: true,
    slidesToShow: 5,
    centerMode: true,
  });

  $(".allProduct i:first-child ").on("click", function () {
    $(".aproductSlide").slick("slickPrev");
  });
  $(".allProduct i:last-child ").on("click", function () {
    $(".aproductSlide").slick("slickNext");
  });

  //2022.03.21
  // 유튜브 플레이어를  써볼까 영상깔기
  $("#bgndVideo").YTPlayer({
    videoURL: "https://www.youtube.com/watch?v=wQ2Gf25Xg3E",
    containment: ".movieBg",
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 0.8,
    showControls: false,
    // 화면이 내려갈 때만 동영상 재생 되게 하는 것.
    playOnlyIfVisible: true,
  });

  $(".movieBg i:first-child").on("click", function () {
    $("#bgndVideo").YTPPause();
  });
  $(".movieBg i:nth-child(2)").on("click", function () {
    $("#bgndVideo").YTPPlay();
  });
  //풀스크린
  $(".movieBg i:last-child").on("click", function () {
    $("#bgndVideo").YTPFullscreen();
  });

  //2022.03.21 탭 메뉴 만들기
  // $(this) 내가 선택한 이것... $(this).index()
  // 1. $(this).index() 를 활용해 요소별 값을 구한다.
  // 2. Container eq().addClass.
  // 3. Sibilings 나를 뺀 다른 형제들 .removeClass.
  // 자바스크립트 이벤트 click mouseon mouseleave 등등

  $(".tabMenu li").on("click", function () {
    //제이쿼리 체이닝 검색해서 공부하면 됨
    var idx = $(this).index();
    // $(".tabMenu li").removeClass("oo"); -->.siblings().removeClass('oo');
    $(this).addClass("oo").siblings().removeClass("oo");

    $(".tapContent>div")
      .eq($(this).index())
      .addClass("oo")
      .siblings()
      .removeClass("oo");
  });
  //2022.03.21 pm14:00탭 메뉴 만들기

  ////////////////////////////////////////
});

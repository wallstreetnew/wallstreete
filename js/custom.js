$(function() {


  const preLoader = function () {
    let preloaderWrapper = document.getElementById("preloader");
    window.onload = () => {
      let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( navigator.userAgent) ? true : false;
      if (!isMobile) {
        setTimeout(function () {
          preloaderWrapper.classList.add("preloaded");
        }, 300);
        setTimeout(function () {
          preloaderWrapper.remove();
        }, 1000);
      } else {
        preloaderWrapper.remove();
      }    
    };
  };
  preLoader();





// mobile nav
const openBtn = document.querySelector("#nav-opn-btn");
const closeBtn = document.querySelector("#nav-cls-btn");
const offcanvasContainer = document.querySelector("#offcanvas-nav");

function openNav() {
  document.body.style.overflowY = "hidden";
  offcanvasContainer.classList.add("open");
}

function closeNav() {
  document.body.style.overflowY = "";
  offcanvasContainer.classList.remove("open");
}

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);




  
   // back to top 

  
  $(window).scroll(function(){
      
    var scrolling = $(this).scrollTop()
  
    if(scrolling > 50 ){
      $(".menu-bg").addClass("nav-bg")
      $(".menu-bg-two").addClass("nav-bg")
      $(".menu-bg-three").addClass("nav-bg-three")
    }else{
      $(".menu-bg").removeClass("nav-bg")
      $(".menu-bg-two").removeClass("nav-bg")
      $(".menu-bg-three").removeClass("nav-bg-three")
    }

  
  })


   // back to top 
   $(" .back-to-top i").click(function(){
  
    $('html,body').animate({
      scrollTop:0,
  
    })
  })
  
  $(window).scroll(function(){
  
    var scrolling = $(this).scrollTop()
    if(scrolling > 20 ){
      $(".back-to-top i ").fadeIn(500)
    }else{
      $(".back-to-top i ").fadeOut(500)
    }
  
  
  })


   // back to top-2
   $(" .back-to-top-2 i").click(function(){
  
    $('html,body').animate({
      scrollTop:0,
  
    })
  })
  
  $(window).scroll(function(){
  
    var scrolling = $(this).scrollTop()
    if(scrolling > 20 ){
      $(".back-to-top-2 i ").fadeIn(500)
    }else{
      $(".back-to-top-2 i ").fadeOut(500)
    }
  
  
  })
   // back to top-3
   $(" .back-to-top-three i").click(function(){
  
    $('html,body').animate({
      scrollTop:0,
  
    })
  })
  
  $(window).scroll(function(){
  
    var scrolling = $(this).scrollTop()
    if(scrolling > 20 ){
      $(".back-to-top-three i ").fadeIn(500)
    }else{
      $(".back-to-top-three i ").fadeOut(500)
    }
  
  
  })



  
  $(window).on('load', function () {
    if ($(".shafull-container").length > 0) {
        var $grid = $('.shafull-container');
        $grid.shuffle({
            itemSelector: '.shaf-item',
            sizer: '.shaf-sizer'
        });
        /* reshuffle when user clicks a filter item */
        $('.shaf-filter li').on('click', function () {
            // set active class
            $('.shaf-filter li').removeClass('active');
            $(this).addClass('active');
            // get group name from clicked item
            var groupName = $(this).attr('data-group');
            // reshuffle grid
            $grid.shuffle('shuffle', groupName);
        });
    }
});








// vedio 
    new VenoBox({
        selector: '.my-video-links',
    });


// countrt uo js 
$('.counter').counterUp({
    delay: 100,
    time: 5000
});




   
  
// about-slick js 

$('.about-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1, 
    arrows:false,
    autoplay:true,
    autoplaySpeed:"2000",


  });





// clients-slick js 

$('.clients-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1, 
    arrows:false,
    autoplay:true,
    autoplaySpeed:"2000",
    dots: true,
    centerMode:true,
    centerPadding:"0",


  });



// clients-slick js 

$('.clients-slick-two').slick({
  slidesToShow: 3,
  slidesToScroll: 1, 
  arrows:false,
  autoplay:true,
  autoplaySpeed:"2000",
  dots: true,
  centerMode:true,
  centerPadding:"0",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      }
    },


 
  ]
    
 

  });



//  cheack-slick js 

$('.cheack-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1, 
    arrows:false,
    autoplay:true,
    autoplaySpeed:"2000",
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },

   
    ]


  });



$('.plan-item-main').slick({
    slidesToShow: 2,
    slidesToScroll: 1, 
      arrows:false,
      dots:true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
          }
        },
  
     
      ]
  


  });
  // customers-item slick
  $(".customers-inner").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    // autoplay: true,
    // autoplaySpeed: "2000",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  });



$('.customers-inner-slick ').slick({
    slidesToShow: 1,
    slidesToScroll: 1, 
    arrows:false,
    centerMode:true,
    centerPadding:"0",
    autoplay:true,
    autoplaySpeed:"2000",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1, 
        }
      }
    ]
  


  });












$('.about-us-slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1, 
  centerMode:true,
  centerPadding:"0",
  autoplay:true,
  autoplaySpeed:"2000",
  mobileFirst: true,
  dotes:true,
  arrows:false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },

  ]


});



// banner therr text 

$('.banner-top-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1, 
    nextArrow:".b-1",
    prevArrow:".00",

});


// work-slick

$('.work-slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1, 
  arrows:false,
  autoplay:true,
  autoplaySpeed:"2000",
  dots: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },

  ]


});



// best slick 

$('.summary-slick').slick({
  slidesToShow: 2,
  slidesToScroll: 1, 
  arrows:false,
  dots:true,
  autoplay:true,
  autoplaySpeed:"2000",


});

















})
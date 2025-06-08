$('.hero-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})



// this deals carousel code was redirected to script file 
$('.deals').owlCarousel({
    loop:true,
    margin:16,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:3
        },
        1600:{
            items:4
        }
    }
})


$('.mens').owlCarousel({
    loop:true,
    margin:16,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        },
        1200:{
            items:3
        },
        1600:{
            items:4
        }
    }
})


$('.play_brand').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

$(document).ready(function () {
    const $scrolltoTop = $('#scrolltoTop');
    $('#searchIcon').on('click', function () {
        console.log('clicked');
        $('.mainHeader .search  input').toggleClass('show')
        // $('.mainHeader .search  input').fadeToggle()

    })

    // slidr init 
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
    $(window).on('scroll', toggleScrollBtn)

    $scrolltoTop.on('click', onScrollTopHandler);
    function toggleScrollBtn() {
        let scrollValue = $(this).scrollTop();
        // if (scrollValue >= 400) {
        //     $scrolltoTop.addClass('show')
        // }else{
        //     $scrolltoTop.removeClass('show')
        // }
        (scrollValue >= 400) ? $scrolltoTop.addClass('show') : $scrolltoTop.removeClass('show')
    }
    function onScrollTopHandler() {
        // console.log("Click Working");
        $("html, body").animate({
            scrollTop: 0,
        }, 1000)
        // $("body").animate({
        //     scrollTop: 0,
        // }, 1000)

    }

    // $(".demo").on('click', function () {
    //     // $('.box').css({
    //     //     "left" : '500px',
    //     //     "background-color" :'blueviolet'
    //     // })
    //     $('.box').animate({
    //         left: '500px',
    //         backgroundColor: 'blueviolet'
    //     }, 1000)
    // })
})



// const searchIcon 
$(function () {
    var win = $(window);
    var nav = $('nav');
    var navPosi = $('nav').offset().top
    

        $('.dropdwn li').click(function () {
            $("ul:not(:animated)", this).slideDown()
        }, function () {
            $("ul.dropdwn_menu", this).slideUp()
        })

    win.on('scroll', function () {
        var scr = win.scrollTop()
        if (scr > navPosi) {
            nav.addClass('sticky')
            $('#page-top').fadeIn('slow')
        } else {
            nav.removeClass('sticky')
            $('#page-top').fadeOut('slow')
        }
    })
    $('#move-page-top').click(
        function () {
            // スムーズにスクロールする
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        }
    )
})

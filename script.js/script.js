$('section.sucos-img').waypoint(function(animacao) {

    if (animacao == "down") {
        $('div.banner_imgs').addClass('animate__animated animate__zoomIn');
    }

    else if (animacao == "up") {
        $('div.banner_imgs').removeClass('animate__animated animate__backInDown');
    }

}, {
    offset : "400px"
})


$('section.sucos').waypoint(function(animacao){
    
    if (animacao == "down") {
        $('div.img1').addClass('animate__animated animate__backInDown');
        $('div.img2').addClass('animate__animated animate__bounceInRight');
    }

    else if (animacao == "up") {
        $('div.img1').removeClass('animate__animated animate__backInUp');
        $('div.img2').removeClass('animate__animated animate__fadeInRightBig');
    }

}, {
    offset : "450px"
}) 
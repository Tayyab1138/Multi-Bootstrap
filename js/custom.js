jQuery(function ($) {
    $(document).ready(function () {


        // Hero slider
        $(".slider-hero").slick({
            arrows: true,
            dots: true,
            infinite: true,
            autoplay: true,
            infinite: true,
            fade: true,
            speed: 600,
            slidesToShow: 1,
            responsive: [{
                breakpoint: 560,
                settings: {
                    arrows: false,
                }
            }]
        });
        // Testimonial

        $(".box-main-slider").slick({
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 600,
            slidesToShow: 2,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }]
        })
        // Counter 
        $(".counter-box span").counterUp({
            delay: 15,
            time: 3000,
        });
        // Accordion
        $(".accordion-ques1").on('click', function (e) {
            e.preventDefault();
            $(".accodion-ans1").slideToggle();
            $(".accordion-ques1 svg.fa-angle-down").toggleClass("rotation");
            
        });
        $(".accordion-ques2").on('click', function (e) {
            e.preventDefault();
            $(".accodion-ans2").slideToggle();
            $(".accordion-ques2 svg.fa-angle-down").toggleClass("rotation");
        });
        $(".accordion-ques3").on('click', function (e) {
            e.preventDefault();
            $(".accodion-ans3").slideToggle();
            $(".accordion-ques3 svg.fa-angle-down").toggleClass("rotation");
        });
        
       
        /**
       * Initiate portfolio lightbox 
       */
        /**
       * Initiate portfolio lightbox 
       */
        const portfolioLightbox = GLightbox({
            selector: '.portfolio-lightbox'
        });


        // Portflio  list
        $(".portfolio-menu ul li:nth-child(1)").on('click', function () {
            $(this).addClass('portfolio-menu-active');
            $(this).siblings().removeClass('portfolio-menu-active');
            $(".app").fadeIn('slow');
            $(".card").fadeIn('slow');
            $(".web").fadeIn('slow');
        });
        $(".portfolio-menu ul li:nth-child(2)").on('click', function () {
            $(this).addClass('portfolio-menu-active');
            $(this).siblings().removeClass('portfolio-menu-active');
            $(".app").fadeIn('slow');
            $(".card").hide();
            $(".web").hide();
        });
        $(".portfolio-menu ul li:nth-child(3)").on('click', function () {
            $(this).addClass('portfolio-menu-active');
            $(this).siblings().removeClass('portfolio-menu-active');
            $(".card").fadeIn('slow');
            $(".app").hide();
            $(".web").hide();
        });
        $(".portfolio-menu ul li:nth-child(4)").on('click', function () {
            $(this).addClass('portfolio-menu-active');
            $(this).siblings().removeClass('portfolio-menu-active');
            $(".web").fadeIn();
            $(".app").hide();
            $(".card").hide();
        });
        $(".video-link a").click(function (e) {
            e.preventDefault();
            $(".video-main").fadeIn();
            $(".video-main svg.fa-xmark").click(function () {
                $(".video-main").fadeOut();
            });
        });
        // Top Buton

        $('#top-btn').click(function () {
            $('html,body').animate({ scrollTop: 0 }, 500);
        });
        $(window).scroll(function () {
            if (window.pageYOffset > 500) {
                $("#top-btn").fadeIn();
            } else {
                $("#top-btn").fadeOut();
            }
        });
        // detail img slider
        $(".detail").slick({
            dots: true,
            infinite: true,
            autoplay: true,
            infinite: true,
            fade: true,
            speed: 600,
            slidesToShow: 1,
        });
        // nav active
        $('nav svg.fa-bars').click(function(){
            $(".menu").slideToggle();
        });
        // SEnd Email
        function sendMail() {
            var Mail = $("#footermail").val();
            
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "sayyedtayyab1138@gmail.com",
                Password: "79F62DEDAE223A09174CF1DA962CFB26C670",
                To: 'wwasiq624@gmail.com',
                From: "sayyedtayyab1138@gmail.com",
                Subject: "This is the subject",
                Body: Mail
            }).then(
                message => alert(message)
            );
        }
    });
});
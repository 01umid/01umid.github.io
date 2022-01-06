$(document).ready(function () {
    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        if(scroll >= 300){
            $('#top').fadeIn();
        //    let top = document.querySelector('#top');
        //    top.style.display = "block";
        }else{
            $('#top').fadeOut();
            // let top = document.querySelector('#top');
            // top.style.display = "none";
        }
        // console.log(scroll);
    });


    $('#top').click(function(){
        $('html,body').animate({
            scrollTop: 0,
        },1000)
    })
});

// Menu Scroll Starting
$(document).ready(function () {
    var $links = $('.nav a');

    $links.click(function(event){
        event.preventDefault();

        $links.removeClass('active');
       var id = $(this).addClass('active').attr('href');
       var target = $(id).offset().top - 60;
       console.log(id);
       console.log(target);

        $('html,body').animate({
            scrollTop: target,
        },2000)

    })


    $(window).scroll(function(){
      
        var scroll = $(this).scrollTop();


        $links.each(function(){
            var target = $(this).attr('href');
            var selector = $(target).offset().top - 60;

            if(scroll >= selector){
                $links.removeClass('active');
                $(this).addClass('active');
            }
        })


    })
});
// Menu Scroll End
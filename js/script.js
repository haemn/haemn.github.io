$(document).ready(function(){
    
    $('.nav a').on('click',function(){
        var index = $(this).parent().index();
        
        var section =$('.section').eq(index);
        var pos =section.position().top;
        
        $('html,body').animate({
            scrollTop: pos
        });
    });
    
    //scroll event
    $(window).on('scroll',function(){
       var nowScroll = $(this).scrollTop(); 
    
        if(nowScroll >= 200){
            $('.nav').addClass('fix');
            
        }else{
            $('(.nav)').removeClass('fix');
        }
        
    //menu active
       if(nowScroll >= 200){
            $('.nav li').eq(0).siblings().children('a').removeClass('active');
            $('.nav li').eq(0).children('a').addClass('active');
        }
        if(nowScroll >= 1000){
            $('.nav li').eq(1).siblings().children('a').removeClass('active');
            $('.nav li').eq(1).children('a').addClass('active');
        }
        
        $('.section').each(function(index){
           var start = $(this).position().top;
           var end = start + $(this).height();
            
            if(nowScroll >= start){
                $('.nav li').eq(index).siblings().children('a').removeClass('active');
            $('.nav li').eq(index).children('a').addClass('active');
            }
        });
    });
});



//section3

$(document).ready(function(){
                
                var next=0; 
                $('#prev').click(
                    
                    function(){
                        next=next+60;
                 
                        $('.circle').css("transform","rotateY("+ next + "deg)");
                    }
                    
                );
                $('#next').click(
                    function(){
                        next=next-60;
                                      
                        $('.circle').css("transform","rotateY("+ next + "deg)");
                    }
                
                );
                
            });




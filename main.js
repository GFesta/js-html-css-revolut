$(document).ready(function() {
    $('.dropdown-parent').hover(function(){
        $('.dropdown').hide();
        $(this).children('ul').show();          //$(this).siblings().children('ul').hide(); 
                                                //.siblings consente di cercare tra i fratelli di questi elementi nell'albero DOM
                                                // e costruire un nuovo oggetto jQuery dagli elementi corrispondenti.
    });
    $('ul li').hover(function(){
        $('ul li a').removeClass('black');
        $(this).children('a').addClass('black');
    });
    $(document).click( function(event){
        $(".dropdown").hide();
    });
});
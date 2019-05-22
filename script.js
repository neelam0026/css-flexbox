$(document).ready(function(){
    $(".line_outer").on("click", function(){
        if($("ul.nav").hasClass("display-flex")){
            $("ul.nav").addClass("display-none");
            $("ul.nav").removeClass("display-flex");
        }
        else{
            $("ul.nav").addClass("display-flex");
            $("ul.nav").removeClass("display-none");
        }
        
    })
});
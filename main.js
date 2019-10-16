jQuery(document).ready(function() {
    jQuery(".menu-Trigger").click(function() {
        jQuery(".menu-mobile").slideToggle(100, function() {
            jQuery(this).toggleClass("nav-Expanded");
            if($(".menu-mobile").is(":hidden")) $(".menu-Trigger").text("☰ Menu"); else $(".menu-Trigger").text("X Close");
        });
    });
});

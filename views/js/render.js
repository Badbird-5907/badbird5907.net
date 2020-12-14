window.addEventListener('load', function () {
    $(function() {
        $(".loading").fadeOut(1000, function() {
            $(".main").fadeIn(500);
        });
    });
})
$(function(){
    $("#nav-placeholder").load("/nav.html");
    $("#footer-placeholder").load("/footer.html");
});

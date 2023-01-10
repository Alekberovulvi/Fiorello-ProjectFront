function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  (function($) {
    // $(function() {
    //   $('nav ul li > a:not(:only-child)').click(function(e) {
    //     $(this).siblings('.nav-dropdown').toggle();
    //     $('.nav-dropdown').not($(this).siblings()).hide();

    //     e.stopPropagation();
    //   });
    // });

    const ul = document.querySelector('nav ul');
    const mobileNav = document.querySelector('.mobile-nav');

     document.querySelector('#nav-toggle').addEventListener('click', function() {
       this.classList.toggle('active');
       if(document.querySelector('#nav-toggle').classList.contains('active')){
         ul.style.display = 'none'
         mobileNav.classList.remove('d-none')

       }else{
         if(window.innerWidth > 760){

           ul.style.display = 'flex'
         }
        mobileNav.classList.add('d-none')
       }
     });

    // $('#nav-toggle').click(function() {
    //   $('nav ul').toggle();
    //   $('.nav-dropdown').hide();

    // });

  })(jQuery);


$(".fa-search").click(function(){
  $(".icon").toggleClass("active");
 $("input[type='text']").toggleClass("active");
});
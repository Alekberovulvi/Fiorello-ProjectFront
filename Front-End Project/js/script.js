const grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  $(document).ready(function(){
    $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if(value=='All'){
        $('.itemBox').show('1000'); 
      }
      else{
        console.log($('.itemBox'));
        $('.itemBox').not('.' + value).hide('1000');
        $('.itemBox').filter('.' + value).show('1000');
      }
      $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
      })

    })
  })


  let responsive = ' ';
  const ul = document.querySelector('nav ul');
  const logo = document.querySelector('.brand img');

window.onresize = function(){

  if(window.innerWidth < 481){
    responsive = 'mobile';
    ul.style.display = 'none'
    logo.style.height = '18px'
    logo.style.width = '120px'
  }else if(window.innerWidth > 480 && window.innerWidth < 769){
    responsive = 'tablet'
    ul.style.display = 'none'
    logo.style.height = '18px'
    logo.style.width = '120px'
  }else if( window.innerWidth > 770){
    responsive = 'desktop'
    ul.style.display = 'flex'
    logo.style.height = '25px'
    logo.style.width = '205px'
  }else{
    responsive = 'large'
    ul.style.display = 'flex'
  }
}

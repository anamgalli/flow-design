window.addEventListener('load', () => {

    // MENU MOBILE

    let menu = document.querySelector('.menu-icon');
    let nav = document.querySelector('.main-nav');
  
      menu.addEventListener('click', () => {
        if (nav.style.display === 'none') {
          nav.style.display = 'block';
        } else {
          nav.style.display = 'none';
        }
      });

    // CLIENTS COMENT CARROUSEL

    new Glider(document.querySelector('.carrousel-cards'), {
      // Mobile-first defaults
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: {
        prev: '.carrousel-left',
        next: '.carrousel-right'
      },
      responsive: [
        {
          // screens greater than >= 768px
          breakpoint: 768,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },{
          // screens greater than >= 1100px
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            
          }
        }
      ]
    });
    
});

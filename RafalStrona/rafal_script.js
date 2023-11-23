// add class navbarDark on navbar scroll
const header = document.querySelector('.nav__links');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


// Galeria 
$(function (){
  
    // Cache vars
    var $gallery = $('.gallery'),
        $lightbox = $('.lightbox'),
        $figure = $('figure'),
        $close = $('.close');
    
    // // Dribbble API shizzz
    var token = 'b5501bcf1ef8eca0ef89aa3982ca742556d65b1832e077019397bbe0960df317';
    var url = 'https://api.dribbble.com/v1/shots?sort=recent&access_token=' + token;
    
    // Grab Dribbble popular
    $.getJSON(url, function(data) {
  
      $.each(data, function(index, shot) {
        
        var thumb = shot.images.teaser,
            full = shot.images.hidpi || shot.images.normal;
        
        var item = $('<li class="item" data-full="'+full+'"><img src="'+thumb+'" /></li>');
        
        $gallery.append(item);
  
      });
      
      // Handle item click
      $('.item').on('click', function() {
        
        var full = $(this).attr('data-full');
        
        toggleLightbox(full);
        
        console.log(full);
            
      });
      
      // Toggle lightbox
      function toggleLightbox(url) {
        
        if ($lightbox.is('.open')) {
          
          $lightbox
            .removeClass('open')
            .fadeOut(200);
          
        } else {
                  
          $figure.css('background-image', 'url(' + url + ')');
          $lightbox
            .addClass('open')
            .fadeIn(200);
          
        }
        
      }
      
      // Close 
      $lightbox.on('click', toggleLightbox);
  
  });
    
  });

//   Koniec Galerii
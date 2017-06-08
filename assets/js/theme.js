$(document).ready(function(){

 var $grid = $('.grid').isotope({
   itemSelector: '.grid-item',
layoutMode: 'packery'
      });
  
    // layout Isotope after all images have loaded
   // $grid.imagesLoaded(function() {
    //   $grid.isotope({
   //     //options
    //   });
    // });


$('#filters').on('click', 'button', function() {
   var filterVal = $(this).attr('data-filter');
   $grid.isotope({ filter: filterVal});
  });
}); 

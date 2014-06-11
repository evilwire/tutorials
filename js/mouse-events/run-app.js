(function(){
var $DOC =
$( document ).ready( function( event )
{
  // create a div
  createDIV();
} ),

divArray = [],

selected = [];

function createDIV( elt )
{
  var divObj = $('<div class="block"></div>');
  if( typeof elt == 'undefined' )
  {
    divObj.css({
      top : '50%',
      left : '50%',
      margin: '-40px -40px',
    });
  }


  divObj.on('mousedown', function( event )
  {
    var initPageX = event.pageX,
    initPageY = event.pageY,
    initDIVX = divObj.offset().left,
    initDIVY = divObj.offset().top,

    maxX = $( document ).width() - 40,
    maxY = $( document ).height() - 40;

    function documentMouseMove( event )
    {
      var deltaX = event.pageX - initPageX,
          deltaY = event.pageY - initPageY,
          transformStr = 'translate(' + String(deltaX) + 
            'px ,' + String(deltaY) + 'px)';

      divObj.css( {
        'transform' : transformStr,
        '-webkit-transform' : transformStr,
        '-moz-transform' : transformStr,
        '-ms-transform' : transformStr
      } );
    }

    function documentMouseUp( event )
    {
      var deltaX = event.pageX - initPageX,
          deltaY = event.pageY - initPageY,
          x = initDIVX + deltaX + 40,
          y = initDIVY + deltaY + 40,
          transformStr = 'translate(0px, 0px)';

      x = ( x > 40 )? x : 40;
      y = ( y > 40 )? y : 40;

      x = ( x < maxX )? x : maxX;
      y = ( y < maxY )? y : maxY;

      $( document ).off( 'mousemove', documentMouseMove );
      $( document ).off( 'mouseup', documentMouseUp );

      divObj.css({
        left : String( x ) + 'px',
        top : String( y ) + 'px',
        '-webkit-transform' : transformStr,
        '-moz-transform' : transformStr,
        'transform' : transformStr
      });
    }

    $( document ).on( 'mousemove', documentMouseMove );
    $( document ).on( 'mouseup', documentMouseUp );
  });

  $(document.body).append( divObj );
}

})();

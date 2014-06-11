(function(){
var $DOC =
$( document ).ready( function( event )
{
  // create a div
  createDIV();
} ),

divArray = [];

function createDIV( elt )
{
  if( typeof elt == 'undefined' )
  {
    var divObj = $('<div class="block"></div>');
    divObj.css({
      top : '50%',
      left : '50%',
      margin: '-40px -40px',
    });

    $(document.body).append( divObj );
  }
}

})();

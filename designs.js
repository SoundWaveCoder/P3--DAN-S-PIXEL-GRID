/*jshint esversion: 6 */
/* jshint browser:true */


var version= "---";
var s='<P STYLE="text-align:left;">' + version;

var grid = $('#pixelCanvas');

var high = $('#inputHeight');
var wide = $('#inputWidth');
var pick = $('#colorPicker');
var size = $('#sizePicker');

var color=0;
var h, w;

doc(); 

size.submit( event => {
    event.preventDefault();

    w = wide.val();
    h = high.val();

    makeGrid( h, w );
    addCellClickListener();
});

function makeGrid(height, width) {
    grid.html('');
    for(let i = 0; i < height; i++) {
        grid.append('<tr></tr>');
    }

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    }
}

function addCellClickListener() {
    $('td').click( event => {
        color = pick.val();
        //--    $(event.currentTarget).css("background-color", color);
        bg(  $(event.currentTarget), color );
    });
}
function bg( cell, color ) {
        cell.css("background-color", color);
}



//////// DIAGNOSTICS ////////
function doc() {
    var diag = document.getElementById( "diagnostics" );
    diag.innerHTML = s; 
}
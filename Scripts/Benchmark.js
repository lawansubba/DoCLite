//alert(123);
//$('#Home').on('click', function () {
//    // create the backdrop and wait for next modal to be triggered
//    //alert(123);
//    event.preventDefault();
//    alert(1);
    
//    alert(2);
//    //$("#pull").submit();
//});
//alert(456);

var opts = {
    lines: 13 // The number of lines to draw
, length: 28 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 1 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}


var modal_opts = {
    lines: 13 // The number of lines to draw
, length: 28 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 0.25 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
};

//jQuery extension
$.fn.spin = function (opts) {
    if (opts == null) opts = default_opts;
    if (opts == "modal") opts = modal_opts;

    this.each(function () {
        var $this = $(this),
        data = $this.data();

        if (data.spinner) {
            data.spinner.stop();
            delete data.spinner;
            if (opts == modal_opts) $("#spin_modal_overlay").remove();
            return this;
        }

        var spinElem = this;
        if (opts == modal_opts) {
            $('body').append('<div id="spin_modal_overlay" style="background-color: rgba(0, 0, 0, 0.6); width:100%; height:100%; position:fixed; top:0px; left:0px; z-index:' + (opts.zIndex - 1) + '"/>');
            spinElem = $("#spin_modal_overlay")[0];
        }
        data.spinner = new Spinner($.extend({ color: $this.css('color') }, opts)).spin(spinElem);
    });
    return this;
};

$("#Home").submit(function (event) {
    $('#Home').spin("modal")
});

$("#Launch").submit(function (event) {
    $('#Launch').spin("modal")
});

$("#Instances").submit(function (event) {
    $('#Instances').spin("modal")
});

$("#Settings").submit(function (event) {
    $('#Settings').spin("modal")
});


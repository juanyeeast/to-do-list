$(document).ready(function () {
    $(".button").hover(function () {
        $(this).addClass("activeButton");
    }, function () {
        $(this).removeClass("activeButton");
    });
    
    $(".button").click(function () {
        var toAdd = $('input[name=checkListItem]').val();
        $(".list").append('<li class ="item" draggable = true>' + toAdd + '</div>');
       	$('input[name=checkListItem]').val('');
    });
    
    $(document).on('dblclick', '.item', function () {
   	   $(this).fadeOut('fast');
    }); 
});

$(document).on('click', '.item', function () {
        $(this).toggleClass('strikethrough');
    }); 

$(document).keypress(function (e) {
    if (e.which == 13) {
        var toAdd = $('input[name=checkListItem]').val();
        $(".list").append('<li class ="item" draggable = true>' + toAdd + '</div>');
        $('input[name=checkListItem]').val('');
    }
});

$(document).ready(function() {
    $("ol").sortable();
    
});

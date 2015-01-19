// This is just causing my p and h2 to switch places

$(function() {

    var x = $('p');
    var y = x.clone();
    x.remove();
    y.insertAfter('h2');

    var $moveItem = $('#one').detach();
    $moveItem.appendTo('ul');

})

$(function() {

    var $newItemButton= $('#newItemButton');
    var $newItemForm= $('#newItemForm');
    var $textInput= $('input:text');

    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function() {
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        var newText=$('input:text').val();
        $('li:last').after('<li>'+ newText + '</li>');
        $newItemForm.hide();
        $newItemButton.show();
        $textInput.val('')
    });

    function autoResizeDiv() {
    document.getElementById('page').style.height = window.innerHeight +'px';
    }
    window.onresize = autoResizeDiv;
    autoResizeDiv();
   
})

$(function() {
    var $window = $(window);
    var $slideAd= $('#slideAd');
    var endZone= $window.height()-70;
    console.log($window.scrollTop());
    $slideAd.animate({
    top: endZone,
}, 1000)


    $window.on('scroll', function() {
        $slideAd.animate({
            top: endZone,

        })
    });

});

$(function() {
    $('h2').hide().slideDown()
    var $li = $('li')
    $li.hide().each(function(index) {
        $(this).delay(700 * index).fadeIn(700)
    })
    $li.on('click',function() {
        $(this).fadeOut(700);
    })
})


      










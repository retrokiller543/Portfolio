$(document).ready(function () {
    $('#ham-container').click(function (e) { 
        e.preventDefault();
        $('#link-container').fadeToggle();
        $('.header-title').toggleClass('text-change');
        $('nav').toggleClass('text-change');
    });
    $('.fa-react').hover(function () {
            // over
            $('.react-text').fadeToggle();
        }
    );
    $('.fa-node').hover(function () {
        // over
        $('.node-text').fadeToggle();
    }
    );
    $('.fa-python').hover(function () {
        // over
        $('.python-text').fadeToggle();
    }
    );
    $('.fa-js-square').hover(function () {
        // over
        $('.js-text').fadeToggle();
    }
    );
});
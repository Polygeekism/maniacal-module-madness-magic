//once dom loaded
console.log('client.js is loaded');
$(document).ready(function () {
    console.log('jquery is loaded');

    //make an AJAX request to url /modulemadness
    $.ajax({
        method: 'GET',
        url: '/moduleMadness',
        success: function (response) {
            console.log(response);
            $('#balance').html(response);
        }
    });
});



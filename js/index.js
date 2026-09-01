
// $(document).ready(function() {
//     $('.publication-mousecell').mouseover(function() {
//         $(this).find('video').css('display', 'inline-block');
//         $(this).find('img').css('display', 'none');
//     });
//     $('.publication-mousecell').mouseout(function() {
//         $(this).find('video').css('display', 'none');
//         $(this).find('img').css('display', 'inline-block');
//     });
// })

$(document).ready(function() {
    $('.publication-mousecell').mouseover(function() {
        $(this).find('video').css('display', 'inline-block');
        $(this).find('img').css('display', 'none');
    });

    $('.publication-mousecell').mouseout(function() {
        $(this).find('video').css('display', 'none');
        $(this).find('img').css('display', 'inline-block');
    });

    $('#news-toggle').click(function() {
        $('.news-hidden').toggle();

        if ($(this).text().trim() === 'Show earlier updates') {
            $(this).text('Hide earlier updates');
        } else {
            $(this).text('Show earlier updates');
        }
    });
});

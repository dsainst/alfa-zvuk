jQuery(document).ready(function($) {

    var category = $('.filter #category');
    var podcat = $('.filter #podcat');
    var brands = $('.filter #brands');
    var query = getQueryParams(document.location.search);
    if (query.brands) {
        $(".filter #brands option").each(function()
        {
            if ($(this).val() == query.brands) {
                $(this).attr('selected', 'selected');
            }
        });
    }


    category.change(function() {
        window.location.href = $(this).val();
    });
    podcat.change(function() {
        window.location.href = $(this).val();
    });
    brands.change(function() {
        $('.filters-cat').submit();
    });

});

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

//
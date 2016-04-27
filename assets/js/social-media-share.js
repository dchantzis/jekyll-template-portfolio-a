if($('.social-btns').length > 0) {
    $('.social-btn').on('mouseover', function(e){
        e.preventDefault();
        console.log($(this).attr('href'));
    });
/*
    $('.share-buttons').on('click', '.social-btn-linkedin', function() {
        social_url = $(this).data('url');
        if("http://" == social_url.substr(0,7)) {
            social_url = social_url.slice(7);
        }

        window.open('https://www.linkedin.com/cws/share?mini=true&url=http://'+encodeURIComponent(social_url),
       '',
       'status=1, width=550,height=420');

       return false;
    });

    $('.share-buttons').on('click', '.social-btn-facebook', function() {
        social_url = $(this).data('url');
        if("http://" == social_url.substr(0,7)){
            social_url = social_url.slice(7);
        }

        window.open(
        'https://www.facebook.com/sharer/sharer.php?u=http://'+encodeURIComponent(social_url),
        '',
        'status=1, width=550,height=420');

        return false;
    });

    $('.share-buttons').on('click', '.social-btn-twitter', function() {
        social_url = $(this).data('url');
        if("http://" == social_url.substr(0,7)){
            social_url = social_url.slice(7);
        }

        window.open(
        'https://twitter.com/share?text='+encodeURIComponent($(this).data('prefix'))+' '+$(this).data('description')+'&amp;url=http://'+encodeURIComponent(social_url),
        '',
        'status=1, width=550,height=420');

        return false;
    });

*/

}

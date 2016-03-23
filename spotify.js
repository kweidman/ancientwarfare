$(document).ready(function (){
    $('#toptracks').click(function(){
        var url="https://api.spotify.com/v1/artists/0nWYpttvgaDktJwG2RpgBS/top-tracks";
        var countrycode = $('option:selected').text();
        var data= {
          country:countrycode  
        };
        
        function callback(data){
           var photoHTML = '<ul>';
           $.each(data.tracks, function (i, track) {
           photoHTML += '<li>';
           photoHTML += '<p><strong>' + track.name + '</strong></p></li>';
           photoHTML += '<li>';
           photoHTML += '<p>Popularity rating (1-100): ' + track.popularity + ' </p><br>';
           });
           photoHTML += '</ul>';
           $('#photos').html(photoHTML);
        }

        $.getJSON(url, data, callback);
    });
});



$(document).ready(function(){
    
    var feed = new Instafeed({
       clientId: '6b93f17409b9484c9ad271c86d7f0cde',
       accessToken: '6204666115.6b93f17.37027c6744094b4cb630929d1afff6cd',
       get: 'user',
       userId: '6204666115',
       sortBy: 'most-recent',
       resolution: 'standard_resolution',
       target: 'instafeed',
       sortBy: 'most-recent',
       limit: 4,
       links: true,
       template: 
            '<div class = "col-xs-12 col-sm-6 instaimg">' +
                '<a href = "{{link}}" title = "{{caption}}" target = "_blank">' +
                '<img class="img-fluid img-size" src = "{{image}}" alt = "{{caption}}"/></a></div>'
            
    });
    feed.run();
});


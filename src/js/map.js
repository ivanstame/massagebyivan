var marker=new google.maps.Marker( {
    position: drift, map: map
}

);
function initMap() {
    var a= {
        lat: 33.7453622, lng: -118.1060768

    }
    ,
    e=new google.maps.Map(document.getElementById("map"), {
        zoom: 16, center: a
    }
    );
    new google.maps.Marker( {
        position: a, map: e
    }
    )
}

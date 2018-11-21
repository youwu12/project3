function initMap(){
  var school = {lat: 27.8450042128, lng: 113.1012303796};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 12, center: school
    }
  );
  var marker = new google.maps.Marker({
    position: school,
    map: map
  });
}
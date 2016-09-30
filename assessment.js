$(function () {
var ori = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var key = "&key=AIzaSyBqJmnM1gvH8ESPlcJGjz0AZhr6cw4xW1I";
var end = "017f3ac0086e46d4ee9d8ea494cd4670/";

$("#but").on("click", function() {
  var url = ori + $("#zipcode").val() + key;
  $.ajax(url, {method: "GET"}).done(function(data){
    var lati = data.results[0].geometry.location.lat;
    var long = data.results[0].geometry.location.lng;
    var both = lati, long;
    // $("#test").remove();
    var item = $("#list").append("<script id='test'/>").text(function initMap() {map = new google.maps.Map(document.getElementById('map'), {center: {lat: lati, lng: long},zoom: 10});}).appendTo(document.body);
    $("#list").append(item);
    var marker = $("#list").append("<script id = 'whatever'/>").text(function initMap() {var myLatLng = {lat: lati, lng: long};var map = new google.maps.Map(document.getElementById('map'), {zoom: 10,center: myLatLng});var marker = new google.maps.Marker({position: myLatLng,map: map,title: 'Hello World!'});}).appendTo(document.body);
    


});

$("#minus").on("click", function () {
  location.reload(); //sort of counts.
});





});



});
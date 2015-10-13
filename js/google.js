
        /**
         *Create map with 2310 Darwin road as the center
         *@return {array}
         */
        function initialize() {

          // Info window string
          var contentString = "<div><p>Publishing &amp; Distribution</p>" + 
            "<p>2310 Darwin</p><p>Madison, WI  53704</p></div>";
          var infowindow = new google.maps.InfoWindow({content: contentString});
          var mapCanvas = document.getElementById('map-canvas');
          var darwin = new google.maps.LatLng(43.1289054, -89.353124);
          var mapOptions = {
            center: darwin,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map = new google.maps.Map(mapCanvas, mapOptions);
//          end of map initialization
          return [map, darwin];
        }

        /**
         * Drop marker on map with animation
         * @param {array} mapReturn
         */
        function dropMarker(mapReturn) {
          var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: mapReturn[1],
            title: "2310 Darwin Road"
          });
          marker.setMap(mapReturn[0]);
          $('#map-canvas').unbind();
        }
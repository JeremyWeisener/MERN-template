      function initMap() {
          var uluru = {lat: 25.687435, lng: -80.311695};
          var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru,
        });

        var iconBase = '../pictures/mapicons/';
        var icons = {
          conveniencestore: {
            icon: iconBase + 'conveniencestore.png'
          },
          departmentstore: {
            icon: iconBase + 'departmentstore.png'
          },
          fastfood: {
            icon: iconBase + 'fastfood.png'
          },
          grocery: {
            icon: iconBase + 'grocery.png'
          },
          mall: {
            icon: iconBase + 'mall.png'
          },
          restaurant: {
            icon: iconBase + 'restaurant.png'
          },
          supermarket: {
            icon: iconBase + 'supermarket.png'
          },
          train: {
            icon: iconBase + 'train.png'
          },
          house: {
            icon: iconBase + 'house.png'
          }
        
          
        };

        function addMarker(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        }

        var features = [
            
            
          {
              // Kendall House Apartments
            position: new google.maps.LatLng(25.686131, -80.309822),
            type: 'house'
          }, {
              // Trader Joe's
            position: new google.maps.LatLng(25.684408, -80.312573),
            type: 'grocery'
          }, {
              // Publix
            position: new google.maps.LatLng(25.686264, -80.315551),
            type: 'grocery'
          }, {
              // Pollo Tropical
            position: new google.maps.LatLng(25.687192, -80.310031),
            type: 'restaurant'
          }, {
              // Moe's
            position: new google.maps.LatLng(25.686218, -80.310766),
            type: 'restaurant'
          }, {
              //
            position: new google.maps.LatLng(25.686022, -80.3132221),
            type: 'restaurant'
          }, {
              // Burger King
            position: new google.maps.LatLng(25.684824, -80.312203),
            type: 'fastfood'
          }, {
              // Dadeland Mall
            position: new google.maps.LatLng(25.690564, -80.312496),
            type: 'mall'
          }, {
              // Dadeland South
            position: new google.maps.LatLng(25.685042, -80.313681),
            type: 'train'
          }, {
              // Dadeland North
            position: new google.maps.LatLng(25.691939, -80.305133),
            type: 'train'
          }, {
              // Old Navy
            position: new google.maps.LatLng(25.687609, -80.311279),
            type: 'departmentstore'
          }
        ];

        for (var i = 0, feature; feature = features[i]; i++) {
          addMarker(feature);
        }
      }
	  
//google.maps.event.addDomListener(window, 'load', initmap);
    
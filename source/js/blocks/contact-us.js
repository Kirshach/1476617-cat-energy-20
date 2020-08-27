let map;
let mapMarker;

function initMap() {
  let initZoom = 14.3,
      initCenter = { lat: 59.938354, lng: 30.323010 },
      initMarkerPos = { lat: 59.938354, lng: 30.323010 },
      initMarkerSize = new google.maps.Size(57, 53);

  if (window.matchMedia("(min-width: 980px)").matches)  {
    initZoom = 16.4;
    initMarkerSize = new google.maps.Size(114, 106);
    initMarkerPos = { lat: 59.938657, lng: 30.322977 },
    initCenter = { lat: 59.939017, lng: 30.318811 };
  } else if (window.matchMedia("(min-width: 680px)").matches) {
    initZoom = 15.34;
    initMarkerSize = new google.maps.Size(114, 106);
    initMarkerPos = { lat: 59.937931, lng: 30.322934 };
    initCenter = { lat: 59.938950, lng: 30.323071 };
  };

  map = new google.maps.Map(document.querySelector('.contact-us__mini-map'), {
    zoom: initZoom,
    center: initCenter,
    disableDefaultUI: true,
  });

  mapMarker = new google.maps.Marker({
    position: initMarkerPos,
    map: map,
    icon: { url: "img/map-pin.png", size: initMarkerSize, scaledSize: initMarkerSize },
    draggarble: false,
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    if (window.matchMedia("(max-width: 679px)").matches) {
      map.setZoom(14.3);
      map.setCenter({ lat: 59.938354, lng: 30.323010 });
      mapMarker.setPosition({ lat: 59.938354, lng: 30.323010 });
      mapMarker.icon.size = new google.maps.Size(57, 53);
      mapMarker.icon.scaledSize = new google.maps.Size(57, 53);
    } else if (window.matchMedia("(min-width: 980px)").matches) {
      map.setZoom(16.4);
      map.setCenter({ lat: 59.939017, lng: 30.318811 });
      mapMarker.setPosition({ lat: 59.938657, lng: 30.322977 });
      mapMarker.icon.size = new google.maps.Size(114, 106);
      mapMarker.icon.scaledSize = new google.maps.Size(114, 106);
    } else if (window.matchMedia("(min-width: 680px)").matches) {
      map.setZoom(15.34);
      map.setCenter({ lat: 59.938950, lng: 30.323071 });
      mapMarker.setPosition({ lat: 59.937931, lng: 30.322934 });
      mapMarker.icon.size = new google.maps.Size(114, 106);
      mapMarker.icon.scaledSize = new google.maps.Size(114, 106);
    }
  });
}

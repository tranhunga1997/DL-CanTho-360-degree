const panorama = document.querySelector('.container>#panorama');

/**
 * *viewer using equirectangular
 */
var viewer = pannellum.viewer(panorama, {
    "default": {
        "firstScene": "circle",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "autoRotate": -2,
        "mouseZoom": false
    },

    "scenes": {
        "circle": {
            "type": "equirectangular",
            "panorama": "/static/imgs/IMG_20240226_083202_00_041.jpg"
        }
    }
});

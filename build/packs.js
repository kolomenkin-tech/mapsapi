var packages = {

    basic: {
        name: 'Basic package',
        desc: 'Provides basic functionality: map, markers, popups, geometries',
        modules: ['DGCustomization', 'DGTileLayer', 'DGFullScreen', 'DGAttribution', 'DGAjax']
    },

    full: {
        name: 'Full package',
        desc: 'Complete package. Includes all the features of 2GIS Maps API',
        modules: []
    }

};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = packages;
}

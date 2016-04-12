/*
* Video.js Logo-overlay
* https://github.com/marufactory2/videojs-logo-overlay.git
*
* Copyright (c) 2016 marufactory
* Licensed under the Apache-2.0 license.
*/

(function(vjs) {
    'use strict';

    //default options
    var default_option = {
        src: '',
        link: '#',
        margin: 0,
        position: 'TL',
        userActive: false
    };

    //plugin initialize
    var logoOverlay = function(options) {
        var mergeOptions = vjs.mergeOptions || vjs.util.mergeOptions,
        settings = mergeOptions(default_option, options),
        player = this;

        var container = document.createElement('a');
        container.id = 'logo_overlay_image_container';
        container.href = settings.link;
        container.target = '_blank';
        container.className = (settings.userActive) ? 'user-active' : 'not-active';
        container.className += ' ' + settings.position;

        var image = document.createElement('img');
        image.id = 'logo_overlay_image';
        image.src = settings.src;
        image.style.margin = settings.margin + 'px';
        if (typeof settings.height !== 'undefined') {
            image.style.height = settings.height + 'px';
        }
        if (typeof settings.width !== 'undefined') {
            image.style.width = settings.width + 'px';
        }

        container.appendChild(image);
        player.el().appendChild(container);
    };

    vjs.plugin('logoOverlay', logoOverlay);

}(window.videojs));

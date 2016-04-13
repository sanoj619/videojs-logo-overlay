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
        linkTarget: '_blank',
        margin: 0,
        position: 'TL',
        userActive: false
    };

    //plugin initialize
    var logoOverlay = function(options) {
        var mergeOptions = vjs.mergeOptions || vjs.util.mergeOptions,
        settings = mergeOptions(default_option, options),
        player = this;

        //set container element
        var container = document.createElement('a');
        container.id = 'logo_overlay_image_container';
        container.href = settings.link;
        container.target = settings.linkTarget;
        container.className = (settings.userActive) ? 'user-active' : 'not-active';
        container.className += ' ' + settings.position;

        //set margin
        if (typeof settings.margin == 'object') {
            if (settings.margin.length > 0) { //Array
                if (settings.margin.length == 2) { //[top/bottom, right/left]
                    container.style.marginTop = container.style.marginBottom = settings.margin[0] + 'px';
                    container.style.marginRight = container.style.marginLeft = settings.margin[1] + 'px';
                } else if (settings.margin.length == 4) { //[top, right, bottom, left]
                    container.style.marginTop = settings.margin[0] + 'px';
                    container.style.marginRight = settings.margin[1] + 'px';
                    container.style.marginBottom = settings.margin[2] + 'px';
                    container.style.marginLeft = settings.margin[3] + 'px';
                }
            } else { //Object
                var dic = {'top': 'marginTop', 'bottom': 'marginBottom', 'left': 'marginLeft', 'right': 'marginRight'};
                for (var key in settings.margin) {
                    if (key === 'top' || key === 'bottom' || key === 'left' || key === 'right') {
                        container.style[dic[key]] = settings.margin[key] + 'px';
                    }
                }
            }
        } else if (typeof settings.margin == 'number') { //Number
            container.style.margin = settings.margin + 'px';
        }

        //set image element
        var image = document.createElement('img');
        image.id = 'logo_overlay_image';
        image.src = settings.src;

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

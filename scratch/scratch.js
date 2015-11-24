/*
 * Copyright (c) 2013,2014 Bert Freudenberg
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

// KLUDGE until freudenbergs.de supports https:
if (location.protocol == 'https:')
    location.protocol = 'http:';

var fullscreen = navigator.standalone;

window.onload = function() {
    var url = "http://freudenbergs.de/bert/squeakjs/scratch/Scratch.image";
    SqueakJS.runSqueak(url, sqCanvas, {
        appName: "Scratch",
        fullscreen: fullscreen,
        header: sqHeader,
        footer: sqFooter,
        spinner: sqSpinner,
        fullscreenCheckbox: sqFullscreen,
        root: "/Scratch",
        templates: {
            "Projects": "http://freudenbergs.de/bert/squeakjs/scratch/Projects",
            "Media":    "http://freudenbergs.de/bert/squeakjs/scratch/Media",
            "Help":     "http://freudenbergs.de/bert/squeakjs/scratch/Help",
            "locale":   "http://freudenbergs.de/bert/squeakjs/scratch/locale",
        },
    });
};

if (addToHomescreen.isStandalone)
    fullscreen = true;
else addToHomescreen({
    appID: 'squeakjs.scratch.add2home',
});

$(document).ready(function(){
    
    var scroll = new SmoothScroll('a[href*="#"]', {

    // Selectors
    ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
    header: null, // Selector for fixed headers (must be a valid CSS selector)
    topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"

    // Speed & Easing
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
    offset: 65,
    easing: 'easeInOutCubic', // Easing pattern to use

    // History
    updateURL: true, // Update the URL on scroll
    popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)

    // Custom Events
    emitEvents: true // Emit custom events

  });
});


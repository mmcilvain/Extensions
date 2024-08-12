```javascript
// ==UserScript==
// @name         TypingMind Logo Remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the logo from TypingMind chat page
// @match        https://www.typingmind.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeLogo() {
        const logo = document.querySelector('[data-element-id="logo"]');
        if (logo) {
            logo.remove();
        }
    }

    // Run the function when the page loads
    window.addEventListener('load', removeLogo);

    // Also run it periodically in case the logo is added dynamically
    setInterval(removeLogo, 1000);

    // Add a style to hide the logo immediately (in case it loads before our script runs)
    const style = document.createElement('style');
    style.textContent = '[data-element-id="logo"] { display: none !important; }';
    document.head.appendChild(style);
})();

```

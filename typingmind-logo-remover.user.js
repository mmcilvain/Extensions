```javascript
// ==UserScript==
// @name         TypingMind Logo Remover
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Removes the TypingMind logo
// @match        https://www.typingmind.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeLogo() {
        const logoElements = document.querySelectorAll('div[class*="logo"], img[alt*="TypingMind"], a[href*="typingmind.com"]');
        logoElements.forEach(element => {
            element.style.display = 'none';
        });
    }

    // Run immediately and then every 500ms
    removeLogo();
    setInterval(removeLogo, 500);

    // Add a style to hide elements with 'logo' in the class name
    const style = document.createElement('style');
    style.textContent = '[class*="logo"] { display: none !important; }';
    document.head.appendChild(style);

    console.log('TypingMind Logo Remover script loaded');
})();

```

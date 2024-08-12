```javascript
(function() {
    'use strict';

    function removeLogo() {
        const logo = document.querySelector('[data-element-id="logo"], img[alt="TypingMind"], .logo-container');
        if (logo) {
            logo.remove();
            console.log('Logo removed');
        }
    }

    // Run immediately
    removeLogo();

    // Set up a MutationObserver to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.type === 'childList') {
                removeLogo();
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    console.log('Logo removal script loaded');
})();

```

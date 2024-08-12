```javascript
// TypingMind Chat UI Enhancement Extension
(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .chat-container {
            max-width: 800px;
            margin: 20px auto;
            font-family: Arial, sans-serif;
        }
        .message {
            padding: 10px 15px;
            margin: 10px 0;
            border-radius: 18px;
            max-width: 70%;
            clear: both;
        }
        .message.user {
            background-color: #DCF8C6;
            float: right;
        }
        .message.ai {
            background-color: #F2F2F2;
            float: left;
        }
        .message-content {
            margin: 0;
            line-height: 1.4;
        }
        .message-time {
            font-size: 0.8em;
            color: #888;
            text-align: right;
            margin-top: 5px;
        }
        .input-area {
            display: flex;
            margin-top: 20px;
        }
        #chat-input {
            flex-grow: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 20px;
            font-size: 14px;
        }
        #send-button {
            margin-left: 10px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 20px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // Function to apply styles to existing messages
    function applyStylesToMessages() {
        const messages = document.querySelectorAll('.message');
        messages.forEach(msg => {
            if (msg.classList.contains('user')) {
                msg.style.backgroundColor = '#DCF8C6';
                msg.style.float = 'right';
            } else {
                msg.style.backgroundColor = '#F2F2F2';
                msg.style.float = 'left';
            }
            msg.style.borderRadius = '18px';
            msg.style.padding = '10px 15px';
            msg.style.margin = '10px 0';
            msg.style.maxWidth = '70%';
        });
    }

    // Apply styles immediately and then every 2 seconds to catch new messages
    applyStylesToMessages();
    setInterval(applyStylesToMessages, 2000);

    console.log('TypingMind Chat UI Enhancement Extension loaded');
})();

```

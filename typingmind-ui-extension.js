```javascript
(function() {
    // Create a style element
    const style = document.createElement('style');
    style.textContent = `
        .chat-container {
            max-width: 800px;
            margin: 20px auto;
            font-family: Arial, sans-serif;
        }
        .message {
            padding: 12px 16px;
            margin: 10px 0;
            border-radius: 18px;
            max-width: 70%;
            clear: both;
            box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        .message.user {
            background-color: #E3F2FD;
            float: right;
        }
        .message.ai {
            background-color: #F5F5F5;
            float: left;
        }
        .message-content {
            margin: 0;
            line-height: 1.5;
        }
        .message-time {
            font-size: 0.75em;
            color: #757575;
            text-align: right;
            margin-top: 4px;
        }
        .input-area {
            display: flex;
            margin-top: 20px;
            align-items: center;
        }
        #chat-input {
            flex-grow: 1;
            padding: 12px;
            border: 1px solid #E0E0E0;
            border-radius: 24px;
            font-size: 14px;
            outline: none;
        }
        #send-button {
            margin-left: 10px;
            padding: 10px 20px;
            background-color: #2196F3;
            color: white;
            border: none;
            border-radius: 24px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        #send-button:hover {
            background-color: #1976D2;
        }
    `;
    document.head.appendChild(style);

    // Function to apply styles to messages
    function applyStylesToMessages() {
        const messages = document.querySelectorAll('.message');
        messages.forEach(msg => {
            if (msg.classList.contains('user')) {
                msg.style.backgroundColor = '#E3F2FD';
                msg.style.float = 'right';
            } else {
                msg.style.backgroundColor = '#F5F5F5';
                msg.style.float = 'left';
            }
            msg.style.borderRadius = '18px';
            msg.style.padding = '12px 16px';
            msg.style.margin = '10px 0';
            msg.style.maxWidth = '70%';
            msg.style.boxShadow = '0 1px 2px rgba(0,0,0,0.1)';
        });
    }

    // Apply styles immediately and then every 2 seconds
    applyStylesToMessages();
    setInterval(applyStylesToMessages, 2000);

    // Modify the input area
    const inputArea = document.querySelector('.input-area');
    if (inputArea) {
        const chatInput = inputArea.querySelector('#chat-input');
        const sendButton = inputArea.querySelector('#send-button');
        
        if (chatInput) {
            chatInput.style.borderRadius = '24px';
            chatInput.style.padding = '12px';
            chatInput.style.border = '1px solid #E0E0E0';
            chatInput.style.fontSize = '14px';
            chatInput.style.outline = 'none';
        }
        
        if (sendButton) {
            sendButton.style.borderRadius = '24px';
            sendButton.style.padding = '10px 20px';
            sendButton.style.backgroundColor = '#2196F3';
            sendButton.style.color = 'white';
            sendButton.style.border = 'none';
            sendButton.style.cursor = 'pointer';
            sendButton.style.transition = 'background-color 0.3s';
            
            sendButton.addEventListener('mouseover', () => {
                sendButton.style.backgroundColor = '#1976D2';
            });
            sendButton.addEventListener('mouseout', () => {
                sendButton.style.backgroundColor = '#2196F3';
            });
        }
    }

    console.log('TypingMind UI Enhancement Extension loaded');
})();

```

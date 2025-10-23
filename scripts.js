// When the page loads, load messages from localStorage
window.onload = function() {
    loadMessages();
};

// Save message to localStorage
function postMessage() {
    let message = document.getElementById('bulletinMessage').value;
    if (message) {
        let messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
        displayMessages(messages);
        document.getElementById('bulletinMessage').value = '';  // Clear message box
    }
}

// Display messages from localStorage
function loadMessages() {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    displayMessages(messages);
}

// Render messages on the page
function displayMessages(messages) {
    let messageBoard = document.getElementById('messages');
    messageBoard.innerHTML = '';
    messages.forEach(msg => {
        let div = document.createElement('div');
        div.textContent = msg;
        messageBoard.appendChild(div);
    });
}

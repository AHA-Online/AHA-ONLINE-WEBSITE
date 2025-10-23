document.getElementById('volunteerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('volunteerName').value;
    if (name) {
        alert(`${name}, you have successfully joined the Alliance!`);
        document.getElementById('volunteerForm').reset();  // Clear the form
    }
});

let messages = [];

function postMessage() {
    let message = document.getElementById('bulletinMessage').value;
    if (message) {
        messages.push(message);
        displayMessages();
        document.getElementById('bulletinMessage').value = '';  // Clear message box
    }
}

function displayMessages() {
    let messageBoard = document.getElementById('messages');
    messageBoard.innerHTML = '';
    messages.forEach(msg => {
        let div = document.createElement('div');
        div.textContent = msg;
        messageBoard.appendChild(div);
    });
}

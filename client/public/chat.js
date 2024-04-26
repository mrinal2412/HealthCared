const chatHistory = document.getElementById('chat-history');
const chatInput = document.getElementById('chat-input');

async function sendMessage() {
    const message = chatInput.value;
    if (!message) return;

    chatHistory.innerHTML += `<div>User: ${message}</div>`;

    try {
        const response = await fetch('http://localhost:4000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        console.log("Received data:", JSON.stringify(data, null, 2));  // Log to confirm structure

        // Assuming the response format has been confirmed through console logs
        if (data.messages && data.messages.content) {
            const aiMessage = data.messages.content;  // Accessing the 'content' directly from 'messages'
            chatHistory.innerHTML += `<div>AI: ${aiMessage}</div>`;
        } else {
            console.error('Unexpected response structure:', data);
            chatHistory.innerHTML += `<div>AI: Error parsing response.</div>`;
        }
    } catch (error) {
        console.error('Error sending message:', error);
        chatHistory.innerHTML += `<div>AI: Failed to fetch response.</div>`;
    }


    chatInput.value = ''; // Clear input after sending
}

document.addEventListener('DOMContentLoaded', function () {
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');

    function renderMessage(message) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'message';
      messageDiv.textContent = message;
      messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    window.sendMessage = function () {
      const message = messageInput.value.trim();
      if (message !== '') {
        renderMessage(message);
        messageInput.value = '';
      }
    };
  });
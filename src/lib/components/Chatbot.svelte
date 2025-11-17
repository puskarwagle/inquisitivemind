<script lang="ts">
	import { onMount } from 'svelte';

	let isOpen = false;
	let messages: Array<{text: string, sender: 'user' | 'bot'}> = [];
	let inputMessage = '';
	let chatContainer: HTMLDivElement;
	let isTyping = false;

	function toggleChat() {
		isOpen = !isOpen;
		if (isOpen && messages.length === 0) {
			// Welcome message
			setTimeout(() => {
				messages = [...messages, {
					text: "Hello! I'm your AI assistant. How can I help you today?",
					sender: 'bot'
				}];
			}, 300);
		}
	}

	async function sendMessage() {
		if (!inputMessage.trim()) return;

		// Add user message
		messages = [...messages, { text: inputMessage, sender: 'user' }];
		const userMsg = inputMessage;
		inputMessage = '';

		// Scroll to bottom
		setTimeout(() => {
			if (chatContainer) {
				chatContainer.scrollTop = chatContainer.scrollHeight;
			}
		}, 10);

		// Show typing indicator
		isTyping = true;

		try {
			// TODO: Replace with actual DeepSeek API call
			const response = await fetch('/api/chat', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ message: userMsg })
			});

			const data = await response.json();

			isTyping = false;
			messages = [...messages, {
				text: data.message || "I'm currently in demo mode. Connect me to DeepSeek API to chat!",
				sender: 'bot'
			}];
		} catch (error) {
			isTyping = false;
			messages = [...messages, {
				text: "I'm currently in demo mode. Connect me to DeepSeek API to chat!",
				sender: 'bot'
			}];
		}

		// Scroll to bottom after bot response
		setTimeout(() => {
			if (chatContainer) {
				chatContainer.scrollTop = chatContainer.scrollHeight;
			}
		}, 10);
	}

	function handleKeyPress(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	}
</script>

<!-- Floating Chat Button -->
<div class="chatbot-container">
	<button
		class="chat-button"
		class:active={isOpen}
		on:click={toggleChat}
		aria-label="Open chat"
	>
		{#if isOpen}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<line x1="18" y1="6" x2="6" y2="18"></line>
				<line x1="6" y1="6" x2="18" y2="18"></line>
			</svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<rect x="3" y="11" width="18" height="10" rx="2"></rect>
				<circle cx="12" cy="5" r="2"></circle>
				<path d="M12 7v4"></path>
				<line x1="8" y1="16" x2="8" y2="16"></line>
				<line x1="16" y1="16" x2="16" y2="16"></line>
				<path d="M9 18h.01"></path>
				<path d="M15 18h.01"></path>
			</svg>
		{/if}
	</button>

	<!-- Chat Window -->
	{#if isOpen}
		<div class="chat-window">
			<div class="chat-header">
				<div class="header-content">
					<div class="avatar">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
							<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
							<line x1="12" y1="19" x2="12" y2="22"></line>
						</svg>
					</div>
					<div>
						<h3>AI Assistant</h3>
						<p>Online</p>
					</div>
				</div>
			</div>

			<div class="chat-messages" bind:this={chatContainer}>
				{#each messages as message}
					<div class="message {message.sender}">
						<div class="message-bubble">
							{message.text}
						</div>
					</div>
				{/each}

				{#if isTyping}
					<div class="message bot">
						<div class="message-bubble typing">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				{/if}
			</div>

			<div class="chat-input">
				<input
					type="text"
					placeholder="Type your message..."
					bind:value={inputMessage}
					on:keypress={handleKeyPress}
				/>
				<button on:click={sendMessage} class="send-button" aria-label="Send message">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<line x1="22" y1="2" x2="11" y2="13"></line>
						<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
					</svg>
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.chatbot-container {
		position: fixed;
		right: 30px;
		bottom: 80px;
		z-index: 1000;
	}

	.chat-button {
		width: 70px;
		height: 70px;
		border-radius: 50%;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border: none;
		color: white;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
	}

	.chat-button svg {
		width: 28px;
		height: 28px;
	}

	.chat-button:hover {
		transform: scale(1.1);
		box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
	}

	.chat-button.active {
		background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
	}

	.chat-window {
		position: absolute;
		bottom: 80px;
		right: 0;
		width: 380px;
		height: 500px;
		background: white;
		border-radius: 12px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		animation: slideUp 0.3s ease;
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.chat-header {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: 16px;
	}

	.header-content {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.avatar {
		width: 40px;
		height: 40px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header-content h3 {
		margin: 0;
		font-size: 16px;
		font-weight: 600;
	}

	.header-content p {
		margin: 0;
		font-size: 12px;
		opacity: 0.9;
	}

	.chat-messages {
		flex: 1;
		padding: 20px;
		overflow-y: auto;
		background: #f5f5f5;
	}

	.message {
		margin-bottom: 16px;
		display: flex;
	}

	.message.user {
		justify-content: flex-end;
	}

	.message.bot {
		justify-content: flex-start;
	}

	.message-bubble {
		max-width: 75%;
		padding: 12px 16px;
		border-radius: 12px;
		font-size: 14px;
		line-height: 1.4;
	}

	.message.user .message-bubble {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border-bottom-right-radius: 4px;
	}

	.message.bot .message-bubble {
		background: white;
		color: #333;
		border-bottom-left-radius: 4px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.message-bubble.typing {
		display: flex;
		gap: 4px;
		padding: 16px;
	}

	.message-bubble.typing span {
		width: 8px;
		height: 8px;
		background: #999;
		border-radius: 50%;
		animation: typing 1.4s infinite;
	}

	.message-bubble.typing span:nth-child(2) {
		animation-delay: 0.2s;
	}

	.message-bubble.typing span:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes typing {
		0%, 60%, 100% {
			transform: translateY(0);
		}
		30% {
			transform: translateY(-10px);
		}
	}

	.chat-input {
		padding: 16px;
		background: white;
		border-top: 1px solid #e0e0e0;
		display: flex;
		gap: 8px;
	}

	.chat-input input {
		flex: 1;
		padding: 12px 16px;
		border: 1px solid #e0e0e0;
		border-radius: 24px;
		font-size: 14px;
		outline: none;
		transition: border-color 0.3s;
	}

	.chat-input input:focus {
		border-color: #667eea;
	}

	.send-button {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border: none;
		color: white;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s;
	}

	.send-button:hover {
		transform: scale(1.1);
	}

	.send-button:active {
		transform: scale(0.95);
	}

	@media (max-width: 768px) {
		.chatbot-container {
			right: 15px;
			bottom: 60px;
		}

		.chat-button {
			width: 50px;
			height: 50px;
		}

		.chat-window {
			width: calc(100vw - 20px);
			height: 70vh;
			bottom: 70px;
		}
	}
</style>

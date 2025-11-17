import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { message } = await request.json();

		if (!message) {
			return json({ error: 'Message is required' }, { status: 400 });
		}

		// Check if API key is configured
		if (!env.DEEPSEEK_API_KEY) {
			return json(
				{
					message: "Chat service is not configured. Please contact us at hello@inquisitivemind.tech for assistance."
				},
				{ status: 200 }
			);
		}

		// Call DeepSeek API
		const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${env.DEEPSEEK_API_KEY}`
			},
			body: JSON.stringify({
				model: 'deepseek-chat',
				messages: [
					{
						role: 'system',
						content: 'You are a helpful AI assistant for Inquisitive Mind Tech, a digital solutions and software development company. We offer: 1) AI & Automation Solutions, 2) Web & Mobile App Development, 3) Cloud & Server Management, and 4) Custom Software Development. Our products include JobQuest (job search automation), InqCRM (intelligent CRM), and AI Agents. Help visitors learn about our services, answer questions, and guide them to contact us. Be friendly, professional, and concise.'
					},
					{
						role: 'user',
						content: message
					}
				],
				temperature: 0.7,
				max_tokens: 500
			})
		});

		if (!response.ok) {
			const error = await response.text();
			console.error('DeepSeek API error:', error);
			return json(
				{
					message: "I'm having trouble connecting right now. Please try again or contact us directly at hello@inquisitivemind.tech"
				},
				{ status: 200 }
			);
		}

		const data = await response.json();
		const botMessage = data.choices?.[0]?.message?.content || "I'm here to help! How can I assist you today?";

		return json({ message: botMessage });

	} catch (error) {
		console.error('Chat API error:', error);
		return json(
			{
				message: "I'm having trouble right now. Please try again or reach out to us at hello@inquisitivemind.tech"
			},
			{ status: 200 }
		);
	}
};

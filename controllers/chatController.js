const axios = require('axios');
require('dotenv').config();
console.log("Using OpenAI API Key:", process.env.OPENAI_API_KEY);



exports.handleChat = async (req, res) => {
    const userInput = req.body.message;
    const openAIKey = process.env.OPENAI_API_KEY;

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userInput }]
        }, {
            headers: {
                'Authorization': `Bearer ${openAIKey}`,
                'Content-Type': 'application/json'
            }
        });

        const messages = response.data.choices[0].message;
        res.json({ messages });
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).send('Failed to fetch response from OpenAI');
    }
};

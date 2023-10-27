import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: "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"});

const openai = new OpenAIApi(configuration);

async function sendMessageToOpenAi(message) {
    const response = await openai.createCompletion({
        model: 'text-davinci-002',
        prompt: message,
        max_tokens: 32,
        n: 1,
        stop: '.',
        temperature: 0.5,
    });
    return response.data.choices[0].text
}

export { sendMessageToOpenAi };
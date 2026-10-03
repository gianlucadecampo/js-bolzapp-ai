// DOM interaction elements
const messageTab = document.querySelector('.messageSpace');
const messageText = document.querySelector('.messageText');
const submit = document.querySelector('.enterButton');

//message history
const messageHistory = [];

// UI message rendering at submit
submit.addEventListener('click', (e) => {
    e.preventDefault();
    messageRendering();
})


/////////////////////////////////////////////// Functions///////////////////////////////////////////

//Render the input message
function messageRendering() {
    const newMessage = {
        text: messageText.value,
        date: new Date(),
        user: 'Gianluca'
    }
    messageHistory.push(newMessage);

    //html DOM message code block
    messageTab.innerHTML += `
    <div class='bg-green-300'>
    <p> ${newMessage.text}
    </p>
    <span>${newMessage.date.getHours()}:${newMessage.date.getMinutes()}:${newMessage.date.getSeconds()}</span>
    </div>
    `;
    messageText.value = ''
}

//http call into Gemini API key
async function getGeminiResponse() {
    const url = `${apiGemini.endpoint}?key=${apiGemini.key}`;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: { 'Constent-Type': 'application/json' },
    });
    const data = await response.json(); x
    return data.candidates[0].content.parts[0].text;
}
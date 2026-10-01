// DOM interaction elements
const messageTab = document.querySelector('.messageSpace');
const messageText = document.querySelector('.messageText');
const submit = document.querySelector('.enterButton');

//AI placeholder welcome message
const messages = [{
    text: 'Ciao sono Bool AI',
    date: 'now',
    user: 'agent',
}]

// UI message rendering at submit
submit.addEventListener('click', (e) => {
    e.preventDefault();
    messageRendering();
})


/////////////////////////////////////////////// Functions///////////////////////////////////////////
function messageRendering() {
    const userText = messageText.value;
    const date = new Date();
    const user = 'Gianluca';

    //html DOM message code block
    messageTab.innerHTML += `
    <div>
    <p> ${userText}
    </p>
    <span>${date}</span>
    </div>
    `;
    console.log(messageTab);
}
// SPDX-License-Identifier: AGPL-3.0-or-later
// © 2025 Stephan Hegemann

let generateIsProcessing = false;
let selectLineIsProcessing = false;

function getRandomInt(min, max) {
    const range = max - min + 1;
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    const randomNumber = randomBuffer[0] / (0xFFFFFFFF + 1);
    return Math.floor(randomNumber * range) + min;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', () => {
    const savedMinValue = localStorage.getItem('minValue');
    const savedMaxValue = localStorage.getItem('maxValue');
    const savedTextInput = localStorage.getItem('textInput');

    if (savedMinValue) {
        document.getElementById('min').value = savedMinValue;
    }
    if (savedMaxValue) {
        document.getElementById('max').value = savedMaxValue;
    }
    if (savedTextInput) {
        document.getElementById('textInput').value = savedTextInput;
    }
});

document.getElementById('generate').addEventListener('click', async function() {
    if (generateIsProcessing) {
        return;
    }

    generateIsProcessing = true;

    this.style.backgroundColor = '#c71585';

    const min = parseInt(await document.getElementById('min').value);
    const max = parseInt(await document.getElementById('max').value);

    if (isNaN(min) || isNaN(max)) {
        alert('Please enter valid numbers for min and max.');
        this.style.backgroundColor = '#007BFF';
        generateIsProcessing = false;
        return;
    }
    
    if (min >= max) {
        alert('Min value must be less than max value.');
        this.style.backgroundColor = '#007BFF';
        generateIsProcessing = false;
        return;
    }
    
    const randomNumber = await getRandomInt(min, max);
    document.getElementById('result').textContent = `${randomNumber}`;

    localStorage.setItem('minValue', min);
    localStorage.setItem('maxValue', max);

    await sleep(1000);
    this.style.backgroundColor = '#007BFF';
    generateIsProcessing = false;
});

document.getElementById('selectLine').addEventListener('click', async function() {
    if (selectLineIsProcessing) {
        return;
    }

    selectLineIsProcessing = true;
    const textInput = await document.getElementById('textInput').value;
    const lines = await textInput.split('\n').filter(line => line.trim() !== '');

    this.style.backgroundColor = '#c71585';

    if (lines.length === 0) {
        alert('Please enter some text.');
        this.style.backgroundColor = '#007BFF';
        selectLineIsProcessing = false;
        return;
    }
    
    const minLine = 1;
    const maxLine = lines.length;
    const randomLineNumber = await getRandomInt(minLine, maxLine);
    const selectedLine = lines[randomLineNumber - 1];
    
    document.getElementById('lineResult').textContent = `${selectedLine}`;

    localStorage.setItem('textInput', textInput);

    await sleep(1000);
    this.style.backgroundColor = '#007BFF';
    selectLineIsProcessing = false;
});
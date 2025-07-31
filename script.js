function getRandomInt(min, max) {
    const range = max - min + 1;
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    const randomNumber = randomBuffer[0] / (0xFFFFFFFF + 1);
    return Math.floor(randomNumber * range) + min;
}

document.getElementById('generate').addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    
    if (isNaN(min) || isNaN(max)) {
        alert('Please enter valid numbers for min and max.');
        return;
    }
    
    if (min >= max) {
        alert('Min value must be less than max value.');
        return;
    }
    
    const randomNumber = getRandomInt(min, max);
    document.getElementById('result').textContent = `Random Number: ${randomNumber}`;
});

document.getElementById('selectLine').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    const lines = textInput.split('\n').filter(line => line.trim() !== '');
    
    if (lines.length === 0) {
        alert('Please enter some text.');
        return;
    }
    
    const minLine = 1;
    const maxLine = lines.length;
    const randomLineNumber = getRandomInt(minLine, maxLine);
    const selectedLine = lines[randomLineNumber - 1];
    
    document.getElementById('lineResult').textContent = `Line ${randomLineNumber}: ${selectedLine}`;
});
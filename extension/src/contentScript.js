// Function to send user input to the backend and receive a response
function fetchAndSuggestField(inputElement, inputText) {
    const userId = localStorage.getItem('userId');  // Ensure userId is set
    const url = `http://localhost:5005/prompt/get/v1?userId=${userId}&promptText=${encodeURIComponent(inputText)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.answer) {
                // Display a suggestion and let the user decide to use it or not
                displaySuggestion(inputElement, data.answer);
            }
        })
        .catch(error => console.error('Error fetching prompt:', error));
}

// Function to display suggestion near the input field
function displaySuggestion(inputElement, suggestion) {
    const suggestionBoxId = `suggestion-for-${inputElement.id}`;
    let suggestionBox = document.getElementById(suggestionBoxId);

    if (!suggestionBox) {
        suggestionBox = document.createElement('div');
        suggestionBox.id = suggestionBoxId;
        suggestionBox.style.border = "1px solid #ccc";
        suggestionBox.style.padding = "5px";
        suggestionBox.style.marginTop = "5px";
        suggestionBox.style.cursor = "pointer";
        suggestionBox.style.backgroundColor = "#f9f9f9";
        suggestionBox.textContent = `Use suggestion: ${suggestion}`;

        inputElement.parentNode.insertBefore(suggestionBox, inputElement.nextSibling);
    }

    suggestionBox.onclick = () => {
        inputElement.value = suggestion;
        suggestionBox.remove(); // Remove suggestion box after use
    };
}

// Event listener for input fields
document.querySelectorAll('input[type="text"], textarea').forEach(input => {
    input.addEventListener('input', (event) => {
        const inputValue = event.target.value;
        // Check local storage first
        const savedValue = localStorage.getItem(inputValue);
        if (savedValue) {
            input.value = savedValue;
        } else if (inputValue.length > 3) {
            fetchAndSuggestField(input, inputValue);
        }
    });
});

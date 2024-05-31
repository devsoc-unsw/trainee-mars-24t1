
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["src/content.js"]
            });
        });
    });
});

function useResponse() {
    document.getElementById("response").innerHTML = "button clicked!";
}
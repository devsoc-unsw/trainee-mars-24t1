
fillGoogleForm();

function fillGoogleForm() {
    const formElement = document.getElementsByTagName("form")[0];

    const selectorString = "input[type='text'], input[type='email'], input[type='number'], input[type='tel'], input[type='url']";
    const shortAns = formElement.querySelectorAll(selectorString);
    shortAns.forEach(function(item) {
        let questionTitle = item.closest("div[role='listitem']").querySelectorAll("div[role='heading']")[0].textContent;
        let answer = findMatchingPrompt(questionTitle);
        if (answer) {
            item.value = answer;
            item.setAttribute("data-initial-value", answer);
            item.setAttribute("badinput", "false");
            item.setAttribute("required", "false");
            item.nextElementSibling.style.display = "none";
        }
    });

    const longAns = formElement.querySelectorAll("textarea");
    longAns.forEach(function(item) {
        const questionTitle = item.closest("div[role='listitem']").querySelectorAll("div[role='heading']")[0].textContent;
        let answer = findMatchingPrompt(questionTitle);
        if (answer) {
            item.value = answer;
            item.setAttribute("data-initial-value", answer);
            item.setAttribute("badinput", "false");
            item.setAttribute("required", "false");
            item.parentElement.previousElementSibling.style.display = "none";
        }
    })
}

var prompts = ["Email", "Full Name", "Phone Number", "zID", "Degree", "Pronouns", "join our society"];
var answers = ["myEmail@gmail.com", "My Name", "0412 345 678", "z1234567", "Computer Science", "she/her", "please please please please please"];

function findMatchingPrompt(title) {
    for (let promptIndex in prompts) {
        if (prompts[promptIndex].includes(title) || title.includes(prompts[promptIndex])) {
            return answers[promptIndex];
        }
    }
    return null;
}

// window.onload = fillGoogleForm();
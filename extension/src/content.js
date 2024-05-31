
fillGoogleForm();

function fillGoogleForm() {
    const formElement = document.getElementsByTagName("form")[0];

    const selectorString = "input[type='text'], input[type='email'], input[type='number'], input[type='tel'], input[type='url']";
    const shortAns = formElement.querySelectorAll(selectorString);
    shortAns.forEach(function(item) {
        // const formTitle = item.closest("div[role='listitem']").querySelectorAll("div[role='heading']").firstChild.textContent;
        const answer = "insert short answer response";
        if (answer) {
            item.value = answer;
            item.setAttribute("data-initial-value", answer);
            item.setAttribute("badinput", "false");
            item.nextElementSibling.style.display = "none";
        }
    });

    const longAns = formElement.querySelectorAll("textarea");
    longAns.forEach(function(item) {
        // const formTitle = item.closest("div[role='listitem']").querySelectorAll("div[role='heading']").firstChild.textContent;
        const answer = "insert long answer response";
        if (answer) {
            item.value = answer;
            item.setAttribute("data-initial-value", answer);
            item.setAttribute("badinput", "false");
            item.parentElement.previousElementSibling.style.display = "none";
        }
    })
}

// window.onload = fillGoogleForm();
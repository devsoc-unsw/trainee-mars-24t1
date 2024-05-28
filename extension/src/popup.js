
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', useResponse);
});

function useResponse() {
    document.getElementById("response").innerHTML = "button clicked!";
}
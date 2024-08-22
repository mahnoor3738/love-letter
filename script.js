document.getElementById("yes-btn").addEventListener("click", function() {
    const response = document.getElementById("response");
    response.innerHTML = `
        I'm so happy to hear that, Mahnoor! ❤️<br><br>
        Next question: Will you go on a date with me soon?<br><br>
        <button onclick="secondYes()">Yes</button> <button onclick="secondNo()">No</button>
    `;
    response.style.display = "block";
});

document.getElementById("no-btn").addEventListener("click", function() {
    const response = document.getElementById("response");
    response.innerHTML = "That's okay, Mahnoor. I still cherish our love. 😊";
    response.style.display = "block";
});

function secondYes() {
    const response = document.getElementById("response");
    response.innerHTML = "I'm thrilled! Let's make it a day to remember. ❤️";
}

function secondNo() {
    const response = document.getElementById("response");
    response.innerHTML = "No worries, IA soon you ll be my wife! 😊";
}

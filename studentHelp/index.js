let global;

// Variables
let nextQuestion = document.querySelector('#nextQuestion');
var allInput = document.querySelectorAll('textarea');

// Click Handlers
// When the Continue button is clicked, input data is saved in session storage for final reporting.
let checkAndSaveData = function () {

    for (let i = 0; i < allInput.length; i++) {
        // Check if data is in storage, if so, skip it.
        if (sessionStorage.getItem(allInput[i].value)) continue;

        // Set storage for a completed field
        sessionStorage.setItem(allInput[i].id, allInput[i].value);

        // If we haven't answered a question go directly to that one.
        if (!sessionStorage.getItem(allInput[i].id)) {
            let nextQuestionToDisplay = allInput[i].id;
            return nextQuestionToDisplay;
        };
    }
}

// When the continue button is clicked, display the next node
let displayNextQuestion = function (event) {
    let introText = document.getElementById('intro');
    let nextQuestionToDisplay = checkAndSaveData();
    let nextQuestion = document.getElementById(nextQuestionToDisplay + 'Question');
    let end = document.getElementById('end');

    // Hide the intro text, if it isn't already hidden.
    if (introText.classList.value !== 'hidden') {
        introText.classList.add('hidden');
    }
    
    console.log(nextQuestion)
    if (nextQuestion) {
        // Show the next question
        nextQuestion.classList.remove("hidden");

        // Put your focus on the next input element
        document.getElementById(nextQuestionToDisplay).focus();
    } else {
        // Hide all the previous questions since we are going to display the help ticket
        for (let j = 0; j < allInput.length; j++) {
            let eachQuestion = document.getElementById(allInput[j].id + 'Question');
            eachQuestion.classList.add('hidden');
        }

        // Put the help ticket on screen
        document.getElementById('templateBox').innerHTML = generateHelpTicket();

        // Redirect the continue button to Github
        document.getElementById('nextQuestion').addEventListener('click', function () {
            location.href = 'https://github.com/nss-evening-cohort-13/student-help/issues/new?assignees=&labels=help+wanted&template=help-me-template.md&title='
        }, false)

        // Show the final page
        end.classList.remove("hidden");

        // Clear the sessionStorage
        sessionStorage.clear();
    }
}
nextQuestion.addEventListener('click', displayNextQuestion, false);

let generateHelpTicket = function () {
    let username = sessionStorage.getItem('username');
    let describe = sessionStorage.getItem('describe');
    let errors = sessionStorage.getItem('errors');
    let refs = sessionStorage.getItem('refs');
    let other = sessionStorage.getItem('other');
    let code = sessionStorage.getItem('code');

    let markup =
        `<div class="markdown">
        <div>#### Name: ${username} </div>
        <div>#### Describe your issue: </div> 
        <div>${describe}</div>

        <div>#### List any error messages that appear: </div>
        <div>${errors}</div>

        <div>#### What have you googled or used for references? </div>
        <div>${refs}</div>

        <div>#### What else have you tried? </div>
        <div>${other}</div>

        <div>#### Code Snippet (If applicable) </div>
        <div>\`${code}\`</div>
        </div>`;
    document.getElementById('templateBox').append(markup);

    return markup;
}
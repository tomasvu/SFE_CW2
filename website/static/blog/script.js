const questions = [
    ["What are the three main parts of an essay?", "Introduction, main body and conclusion"],
    ["What should be included in the introduction?", "Topic, background and plan"],
    ["How should the main body of the essay be written?", "Providing clear and focused sentences and using ideas from literature to support your main points."],
    ["What should the conclusion include?", "Include the most relevant and important issues concerning the topic."],
    ["Before starting the essay, you should make sure that?", "You have fully understood the question and have sufficient research for the essay"]]

function addFlashCardDiv(text) {
    const article = document.getElementById("flashcard-article");
    const row_div = document.getElementById("column-row");
    const column_div = document.createElement("div");
    const master_div = document.createElement("div");
    const body_div = document.createElement("div");
    const display_question = document.createElement("h5");
    const header = document.createElement("hr");
    const display_answer = document.createElement("p");

    master_div.className = "card";
    master_div.style.width = "18rem";
    master_div.style.height = "210px";
    master_div.onclick = function () {display_answer.hidden = display_answer.hidden === false;};
    body_div.className = "card-body";
    display_question.className = "card-title";
    display_question.className = "card-text";
    display_answer.hidden = true;
    column_div.className = "col-sm-6 center-block";
    column_div.style.paddingBottom = "12.5px";
    column_div.style.paddingTop = "12.5px";

    display_question.innerHTML = text.question;
    display_answer.innerHTML = text.answer;
    body_div.appendChild(display_question);
    body_div.appendChild(header);
    body_div.appendChild(display_answer);

    master_div.appendChild(body_div);

    column_div.appendChild(master_div);

    row_div.appendChild(column_div);

    article.appendChild(row_div);

    console.log("Question:");
    console.log(text.question);
    console.log("Answer:");
    console.log(text.answer);
}

function addFlashCards() {
    for(const q in questions) {
        let flashcard_contents = {
            'question': questions[q][0],
            'answer': questions[q][1]
        };
        addFlashCardDiv(flashcard_contents)
    }
}

addFlashCards()
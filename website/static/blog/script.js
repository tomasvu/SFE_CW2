const questions = [
    ["What are the three main parts of an essay?", "Introduction, main body and conclusion."],
    ["What should be included in the introduction?", "Topic, background and plan."],
    ["How should the main body of the essay be written?", "Providing clear and focused sentences and using ideas from literature to support your main points."],
    ["What should the conclusion include?", "Include the most relevant and important issues concerning the topic."],
    ["Before starting the essay, you should make sure that?", "You have fully understood the question and have sufficient research for the essay."]]

function addFlashCardDiv(text) {
    const article = document.getElementById("flashcard-article");
    const row_div = document.getElementById("column-row");
    const column_div = document.createElement("div");
    const master_div = document.createElement("div");
    const body_div = document.createElement("div");
    const content_div = document.createElement("div");
    const answer_div = document.createElement("div");
    const content_question = document.createElement("h5");
    const answer_question = document.createElement("h5");
    const header = document.createElement("hr");
    const display_answer = document.createElement("p");

    master_div.className = "flashcard";
    body_div.className = "flashcard-inner";
    content_question.className = "card-title";
    content_question.style.textAlign = "center";
    content_question.style.color = "white";
    content_question.style.paddingRight = "5px";
    content_question.style.paddingLeft = "5px";
    answer_question.className = "card-title";
    answer_question.style.textAlign = "center";
    answer_question.style.color = "white";
    answer_question.style.paddingLeft = "5px";
    answer_question.style.paddingRight = "2.5px";
    display_answer.style.paddingRight = "5px";
    display_answer.style.paddingLeft = "2.5px";
    display_answer.className = "card-text";
    display_answer.style.textAlign = "center";
    column_div.className = "col-sm-6 center-block";
    column_div.style.paddingBottom = "12.5px";
    column_div.style.paddingTop = "12.5px";
    content_div.className = "flashcard-front";
    answer_div.className = "flashcard-back";

    content_question.innerHTML = text.question;
    display_answer.innerHTML = text.answer;
    answer_question.innerHTML = text.question;

    content_div.appendChild(content_question);

    answer_div.appendChild(answer_question);
    answer_div.appendChild(header);
    answer_div.appendChild(display_answer);

    body_div.appendChild(content_div);
    body_div.appendChild(answer_div);

    master_div.appendChild(body_div);

    column_div.appendChild(master_div);

    row_div.appendChild(column_div);

    article.appendChild(row_div);
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
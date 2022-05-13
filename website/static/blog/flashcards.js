const questions = [
    ["What are the three main parts of an essay?", "Introduction, main body and conclusion."],
    ["What should be included in the introduction?", "Topic, background and plan."],
    ["How should the main body of the essay be written?", "Providing clear and focused sentences and using ideas from literature to support your main points."],
    ["What should the conclusion include?", "Include the most relevant and important issues concerning the topic."],
    ["Before starting the essay, you should make sure that?", "You have fully understood the question and have sufficient research for the essay."],
    ["If you are devising your own essay title it should not be?", "A broad title not focusing directly on the topic."],
    ["What three types of keywords have to be included in an essay title?", "Directive, topic and limiting words."],
    ["Before you begin researching what must you set first?", "Realistic goals for how much material and information you need."],
    ["If you have multiple lines of inquiry which ones, should you include?", "Only include the lines of inquiry you want to focus on in your essay."],
    ["When reading law essays and books what should you do?", "Create a vocabulary bank that you can use in future essays."],
    ["When should you start planning and writing your essay?", "You should aim to start the essay as soon as you receive the question."],
    ["Should you begin the essay if you do not fully understand the question?", "No, you should fully understand the question before you begin writing."],
    ["Where should the thesis be included?", "The thesis should be included in the introduction."],
    ["Should counter arguments be presented in their best light?", "Yes, as this will show a broad understanding of the topic."],
    ["Is presentation important?", "Presentation of an essay is very important and marks can be lost due to bad presentation."],
    ["Is legal jargon always the best vocabulary to use?", "Being sophisticated is great however you should stick to the point and not use 5 words where 2 would have sufficed."],
    ["Should irrelevant laws and arguments be included.", "No as a good essay only includes and focuses on relevant laws and arguments."],
    ["Should the wider context of the law be demonstrated?", "Yes, as this will show a depth in the knowledge surrounding the law."],
    ["Should casual language such as “I don’t think he is right” be used?", "No, as the argument sounds unconvincing and therefore is weakened by the language used."],
    ["What are three types of legal essay questions?", "Legal theory, Legal reform and Legal History."],
    ["What three essay structures can be used to write a good essay?", "The five-paragraph essay, The ‘French Method’ and the historical overview."],
    ["Should you show instead of telling?", "If you are able to use examples or use stories in your essay to support your point you should include them."],
    ["If you have not been given instructions on how to present your essay how should you present it?", "Font size 12 in a regular font with 1.5 line spacing and 25mm margins at the top and bottom."],
    ["Should you be creative in your essay?", "Yes, you need to think creatively and apply your legal knowledge to the question you are answering."],
    ["If you are using jargon, should you explain it?", "Yes, as the reader may not understand what some of the terms mean."],
    ["During research you should?", "Write lists of questions about what you are reading and answer them."],
    ["What will a good essay structure enable you to do?", "Communicate your ideas fluently and efficiently."],
    ["What is the most useful planning technique?", "Mind maps."],
    ["Should every claim be supported with an appropriate reference?", "Yes, every claim you make should be supported with appropriately referenced citations."],
    ["Is simple language sometimes the best to use?", "Most of the time simple and precise words can be used easily to express what you mean."]]

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
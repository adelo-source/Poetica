const poemForm = document.querySelector("#poem-form");
const authorInput = document.querySelector("#author");
const titleInput = document.querySelector("#poem-title");
const poemInput = document.querySelector("#poem-text");
const poemList = document.querySelector("#poem-list");
const formMessage = document.querySelector("#form-message");

function publishPoem(event) {
    event.preventDefault();

    const author = authorInput.value.trim();
    const title = titleInput.value.trim();
    const poem = poemInput.value.trim();

    if (!author || !title || !poem) {
        formMessage.textContent = "Fyll i alla fält först.";
        return;
    }

    const card = document.createElement("article");
    card.classList.add("poem-card");

    const label = document.createElement("p");
    label.classList.add("poem-label");
    label.textContent = "EN NY DIKT";

    const heading = document.createElement("h3");
    heading.textContent = title;

    const content = document.createElement("p");
    content.classList.add("poem-content");
    content.textContent = poem;

    const signature = document.createElement("p");
    signature.classList.add("poem-author");
    signature.textContent = "— " + author;

    card.append(label, heading, content, signature);
    poemList.prepend(card);

    formMessage.textContent = "Din dikt har publicerats!";
    poemForm.reset();
}

poemForm.addEventListener("submit", publishPoem);
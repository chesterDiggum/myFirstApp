//focus the form on page load
document.querySelector("textarea").focus()

const thread = document.querySelector("main")
const msgForm = document.querySelector("form")

function setMsgUI(evt) {
    evt.preventDefault()
    const newMsg = createMessage()
    const newMsgArticle = document.createElement("article")
    const dateAuthorBox = document.createElement("div")
    const newMsgContent = document.createElement("p")
    const newMsgAuthor = document.createElement("p")
    newMsgAuthor.classList.add("author")
    const newMsgDateCreated = document.createElement("p")
    newMsgDateCreated.classList.add("date-created")

    newMsgArticle.appendChild(newMsgContent)
    newMsgContent.innerText = newMsg.content

    newMsgArticle.appendChild(dateAuthorBox)


    thread.appendChild(newMsgArticle)

    dateAuthorBox.appendChild(newMsgAuthor)
    newMsgAuthor.innerText = newMsg.author

    dateAuthorBox.appendChild(newMsgDateCreated)
    newMsgDateCreated.innerText = newMsg.dateCreated.toDateString()
}


msgForm.addEventListener("submit", setMsgUI)

function clearForm(evt) {
    evt.preventDefault()
    document.querySelector("textarea").value = ""
    document.querySelector("input").value = ""
    document.querySelector("textarea").focus()
}

msgForm.addEventListener("submit", clearForm)



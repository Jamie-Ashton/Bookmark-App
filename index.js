const modal = document.getElementById('modal'); // Declaring a const variable with the value modal, referencing the element with the ID 'modal
const modalShow = document.getElementById('modal-show')
const modalClose = document.getElementById('modal-close');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmark-container');

let bookmarks = []

modalClose.addEventListener("click", () => {
    modal.classList.remove('modal-show')
})


function showModal() {
    modal.classList.add('modal-show')
    websiteNameEl.focus()
}

window.addEventListener('click', (e) => {
    e.target === modal ? modal.classList.remove("modal-show") : false
})

modalShow.addEventListener('click', modalShow)
modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-show')
})

function validate(nameValue, urlValue) {
    const expression =
    /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b
                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    const regex = new RegExp(expression)

    if(!nameValue || !urlValue) {
        alert("Please submit values for both fields.")
    }
}
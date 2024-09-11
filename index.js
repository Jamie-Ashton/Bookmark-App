const modal = document.getElementById('modal'); // Declaring a const variable with the value modal, referencing the element with the ID 'modal
const showModal = document.getElementById('show-modal')
const modalClose = document.getElementById('modal-close');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = []

modalClose.addEventListener("click", () => {
    modal.classList.remove('show-modal')
})

function showModal() {
    modal.classList.add('show-modal')
    websiteNameEl.focus()
}


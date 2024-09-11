const modal = document.getElementById('modal');
const modalShow = document.getElementById('modal-show');
const modalClose = document.getElementById('modal-close');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = [];


function showModal() { 
    modal.classList.add('modal-show');
    websiteNameEl.focus();
}

modalShow.addEventListener('click', modalShow)
modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-show');
})

window.addEventListener('click', (e) => {
    e.target === modal ? modal.classList.remove('modal-show') : false;
})

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-show');
})

function validate(nameValue, urlValue) {
    const expression = 
    /(https)?:\/\/(www\.)?[-a-zA-z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;

    const regex = new RegExp(expression);
}

if(!nameValue || !urlValue) {
    alert('Please submit values for both fields');
    return false;
}

if(!urlValue.match(regex)) {
    alert('Please provide a valid web address');
    return false;
}
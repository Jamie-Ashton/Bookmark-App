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

function buildBookMarkDOM() {
    bookmarksContainer.textContent= ""


bookmarks.forEach((bookmark) => {
    const {name, url} = bookmark

    const item = document.createElement("div")
    item.classList.add("item")

    const closeIcon = document.createElement("i")
    closeIcon.classList.add("fas", "fa-times")
    closeIcon.setAttribute("title", "Delete Bookmark")
    closeIcon.setAttribute("onclick", `deleteBookmark('${url}')`)

    const linkInfo = document.createElement("div")
    linkInfo.classList.add("name")

    const favicon = document.createElement("img")
    favicon.setAttribute(
        "src",url
    )
    favicon.setAttribute("alt", "Favicon")

    const link = document.createElement("a")
    link.setAttribute("href", `${url}`)
    link.setAttribute("target", "_blank")
    link.textContent()

    linkInfo.append(favicon, link)
    item.append(closeIcon, linkInfo)
    bookmarksContainer.appendChild(item)
})
}

// fetch bookmarks
function fetchBookmarks() {
    //json parse to take a string and convert it into a object
    // get a bookmark from local storage if available 
    if (localStorage.getItem("bookmarks")) {
        bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
} else {
    // create a bookmark array in local storage 
    bookmarks = [{
            name: "Google",
            url: "https://google.com"
        }]
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks)) 
    } 
    buildBookmarksDOM()
}

function deleteBookmark(url) {
    // Pass the url, loop through the bookmarks array and remove the match URl
    bookmarks.forEach((bookmark, i ) => {
        if(bookmark.url === url) {
            bookmarks.splice(i, 1) // delete the bokmark at index i (URL)
        }
    }) 
    // update the local storage, re-populate the DOM.close-icon
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    fetchBookmarks()
}

//handle data fro form input
function storeBookmark(e) {
    // prevents bookmarks being added to the local storage with URL
    e.preventDefault()


    const nameValue = websiteNameEl.value
    let urlValue = websiteUrlEl.value

    if (!urlValue.inculdes('http://', 'https://')) {
        urlValue = `https://${urlValue}`
    }

    console.log(nameValue, urlValue)

    if(!validate(nameValue, urlValue)) {
        return false;
    }

    const bookmark = {
        name: nameValue,
        url: urlValue
    }

    bookmarks.push(bookmark)

    //it is needed to stringefy to be added to back end server.
    localStorage.setItem("bookmark", JSON.stringify(bookmarks))

    fetchBookmarks()
    bookmarkForm.rest()
    websiteNameEl.focus()
}
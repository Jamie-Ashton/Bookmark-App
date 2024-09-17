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
    /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b/
                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    const regex = new RegExp(expression)

    if(!nameValue || !urlValue) {
        alert("Please submit values for both fields.")
        return false
    }
    if(!urlValue.match(regex)) {
        alert("Please provide a valid web address.")
        return false
    }
    //Valid
    return true
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
        link.textContent() = name

        linkInfo.append(favicon, link)
        item.append(closeIcon, linkInfo)
        bookmarksContainer.appendChild(item)
        
        })
}

//Fetch bookmarks
function fetchBookmarks() {
    // json parse to take string and convert to an object
    // Get a bookmark from a local storage if available
    if(localStorage.getItem("bookmarks")) {
        bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    }
    else {
        // create bookmarks array in a local storage (create a sample bookmark)
        bookmarks = [
            {name: "Google", url: "https://www.google.com"}
        ]
        localStorage.setItem("bookmark", JSON.stringify(bookmarks))
    }
    buildBookMarkDOM()
}
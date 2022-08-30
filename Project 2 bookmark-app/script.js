const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

let bookmarks = {};

// Show Modal, Focus on Input
function showModal() {
  modal?.classList.add("show-modal");
  websiteNameEl?.focus();
}

// Modal Event Listener
modalShow?.addEventListener("click", showModal);
modalClose?.addEventListener("click", () =>
  modal?.classList.remove("show-modal")
);
window.addEventListener("click", (e) =>
  e.target === modal ? modal?.classList.remove("show-modal") : false
);

//validate form
function validate(nameValue, urlValue) {
  const expression =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const regex = new RegExp(expression);
  if (!nameValue || !urlValue) {
    alert("Please submit values for both the fields");
    return false;
  }
  if (urlValue.match(regex)) {
    alert("match");
  }
  if (!urlValue.match(regex)) {
    alert("Please provide a valid web address");
    return false;
  }
  return true;
}

// To build our bookmarks DOM
function buildBookmarks() {
  //remove all boomarks
  bookmarksContainer.textContent = "";

  //build bookmarks
  Object.keys(bookmarks)?.forEach((url) => {
    const { name } = bookmarks[url];
    // Item
    const item = document.createElement("div");
    item.classList.add("item");
    // Close icon
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fas", "fa-times");
    closeIcon.setAttribute("title", "Delete Bookmark");
    closeIcon.setAttribute("onclick", `deleteBookmark('${url}')`);

    //favicon/link container
    const linkInfo = document.createElement("div");
    linkInfo.classList.add("name");

    //favicon
    const favicon = document.createElement("img");
    favicon.setAttribute(
      "src",
      `https://www.google.com/s2/favicons?domain=${url}`
    );
    favicon.setAttribute("alt", "Favicon");

    //link
    const link = document.createElement("a");
    link.setAttribute("href", `${url}`);
    link.setAttribute("target", "_blank");
    link.textContent = name;

    //Append to bookmark container
    linkInfo.append(favicon, link);
    item.append(closeIcon, linkInfo);
    bookmarksContainer?.appendChild(item);
  });
}

// Fetch bookamrks
function fetchBookmarks() {
  //get bookmarks if available
  if (localStorage.getItem("bookmarks")) {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  } else {
    bookmarks = {
      "https://nanhekhwab.in": {
        name: "Nanhe Khwab",
        url: "https://nanhekhwab.in",
      },
    };
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  buildBookmarks();
}

//Delete bookmarks
function deleteBookmark(url) {
  if (bookmarks[url]) {
    delete bookmarks[url];
  }
  //Update bookmarks array in localstorage and repopulate DOM
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  fetchBookmarks();
}

// Handle data from form
function storeBookmark(e) {
  e.preventDefault();
  const nameValue = websiteNameEl?.value;
  let urlValue = websiteUrlEl?.value;
  if (!urlValue.includes("https") && !urlValue.includes("http")) {
    urlValue = `https://${urlValue}`;
  }
  if (!validate(nameValue, urlValue)) return false;
  bookmarks[urlValue] = {
    name: nameValue,
    url: urlValue,
  };
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  fetchBookmarks();
  bookmarkForm?.reset();
  websiteNameEl?.focus();
}

// Event Listener
bookmarkForm?.addEventListener("submit", storeBookmark);
fetchBookmarks();

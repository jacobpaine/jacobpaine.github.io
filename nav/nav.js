// Nav is placed in its own directory to be widely available on different pages.
var navList = document.querySelector("#nav-list");

// Show the menu, add class, clip extra content
function showMenu(e) {
    navList.classList.add("show");
    document.body.style.overflow = "hidden";
}

// Hide menu - scroll if necessary
function hideMenu(e) {
    navList.classList.remove("show");
    document.body.style.overflow = "auto";
}

function navHandler(event) {
    var target = event.target.id;
    var dataHref = event.target.getAttribute('data-href');
    // Click the button to open the menu
    if (target === 'nav-toggle') {
        showMenu();
    }

    // To the learning page
    if (target === 'learning') {
        window.open('/learning.html', '_blank');
    }

    // To the blog page
    if (dataHref === 'blog') {
        window.open('/blog/blog.html', '_blank');
    }

    // To the main page
    if (dataHref === 'home') {
        window.open('/index.html', '_blank');
    }
    
    // Click anywhere to close the nav
    if (target !== 'nav-toggle') {
        hideMenu();
    }
}
// An event listener for clicks
document.addEventListener('click', navHandler, false);


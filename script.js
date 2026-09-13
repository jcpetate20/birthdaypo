/* ========================================
   PAGE NAVIGATION
======================================== */

function showPage(number) {

    // Get all pages
    const pages = document.querySelectorAll(".page");

    // Hide all pages
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Find selected page
    const selectedPage = document.getElementById("page" + number);

    // Show selected page
    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ========================================
   KEYBOARD NAVIGATION
======================================== */

document.addEventListener("keydown", function(event) {

    // Find active page
    const activePage = document.querySelector(".page.active");

    if (!activePage) {
        return;
    }

    // Get current page number
    const currentPage = Number(
        activePage.id.replace("page", "")
    );


    // RIGHT ARROW
    if (event.key === "ArrowRight") {

        let nextPage = currentPage + 1;

        if (nextPage > 4) {
            nextPage = 1;
        }

        showPage(nextPage);
    }


    // LEFT ARROW
    if (event.key === "ArrowLeft") {

        let previousPage = currentPage - 1;

        if (previousPage < 1) {
            previousPage = 4;
        }

        showPage(previousPage);
    }

});


/* ========================================
   THUMBNAIL CLICK EFFECT
======================================== */

const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(function(thumbnail) {

    thumbnail.addEventListener("click", function() {

        this.style.transform =
            "scale(1.2) rotate(5deg)";

        setTimeout(function() {

            thumbnail.style.transform = "";

        }, 400);

    });

});
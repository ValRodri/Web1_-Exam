document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    function showPage(pageIndex) {
        pages.forEach(function(page, index) {
            if (index === pageIndex) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    function nextPage() {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    }

    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    }

    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');

    prevButton.addEventListener('click', prevPage);
    nextButton.addEventListener('click', nextPage);

    showPage(currentPage);
});

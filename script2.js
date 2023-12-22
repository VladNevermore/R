let currentPage = 0;

function nextPage() {
    const content = document.querySelector('.content');
    currentPage++;
    content.style.transform = `translateX(-${currentPage * 100}vw)`;
}

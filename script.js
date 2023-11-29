document.addEventListener('DOMContentLoaded', (event) => {

    const galleryItems = document.querySelectorAll('.gallery-item');
    const infoContainer = document.getElementById('info-container');
    const title = document.getElementById('tv-show-title');
    const info = document.getElementById('tv-show-info');
    const platforms = document.getElementById('tv-show-platforms');

    let lastClickedItem = null;

    function toggleInfo(item) {
        if (lastClickedItem === item && infoContainer.style.display !== 'none') {
            infoContainer.style.display = 'none';
            item.classList.remove('active');
            lastClickedItem = null;
        } else {
            infoContainer.style.display = 'block';
            title.textContent = item.getAttribute('data-title');
            info.textContent = item.getAttribute('data-info');
            platforms.textContent = 'Available on: ' + item.getAttribute('data-platforms');
            galleryItems.forEach(otherItem => otherItem.classList.remove('active'));
            item.classList.add('active');
            lastClickedItem = item;
            infoContainer.scrollIntoView({ behavior: 'smooth' });
        }
    }

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            toggleInfo(item);
        });

        // enter as click
        item.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                toggleInfo(item);
            }
        });
    });
});


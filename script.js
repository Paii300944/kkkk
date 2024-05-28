document.addEventListener('DOMContentLoaded', function() {
    const openPopup = document.getElementById('openPopup');
    const closePopup = document.getElementById('closePopup');
    const popup = document.getElementById('popup');

    openPopup.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
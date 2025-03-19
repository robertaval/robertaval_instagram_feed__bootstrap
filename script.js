document.addEventListener('DOMContentLoaded', function() {
    const gridView = document.getElementById('gridView');
    const listView = document.getElementById('listView');
    const singlePost = document.querySelector('.single-post');
    const gridPosts = document.querySelector('.grid-posts');

    function toggleView() {
        if (listView.checked) {
            singlePost.style.display = 'block';
            gridPosts.style.display = 'none';
        } else {
            singlePost.style.display = 'none';
            gridPosts.style.display = 'grid';
        }
    }

    // Add event listeners to toggle
    gridView.addEventListener('change', toggleView);
    listView.addEventListener('change', toggleView);

    // Set initial state
    toggleView();
});

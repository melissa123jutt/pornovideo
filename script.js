document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('videoContainer');
    const searchInput = document.getElementById('searchInput');

    // Sample video data (replace with your actual data)
    const videos = [
        { title: 'Video 1', thumbnail: 'video1.jpg', videoUrl: 'video1.mp4' },
        { title: 'Video 2', thumbnail: 'video2.jpg', videoUrl: 'video2.mp4' },
        // Add more video objects as needed
    ];

    // Function to render video thumbnails
    function renderVideos() {
        videoContainer.innerHTML = '';
        videos.forEach(video => {
            const videoDiv = document.createElement('div');
            videoDiv.classList.add('video-thumbnail');
            videoDiv.innerHTML = `<img src="${video.thumbnail}" alt="${video.title}">`;
            videoDiv.addEventListener('click', () => playVideo(video.videoUrl));
            videoContainer.appendChild(videoDiv);
        });
    }

    // Function to play video
    function playVideo(videoUrl) {
        // You can implement your video player here
        // For simplicity, let's just log the video URL
        console.log('Playing video:', videoUrl);
    }

    // Initial render
    renderVideos();

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchText = this.value.toLowerCase();
        const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchText));
        renderVideos(filteredVideos);
    });
});

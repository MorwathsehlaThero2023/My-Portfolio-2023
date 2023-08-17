
    // JavaScript functionalities
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const url = event.target.getAttribute('href');
        window.open(url, '_blank');
      });
    });

    const showAllBtn = document.querySelector('.btn-show-all');
    showAllBtn.addEventListener('click', () => {
      alert('Showing all projects'); // You can replace this with your desired action
    });
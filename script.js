document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
  
    // Check user's previous preference from local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
  
    // Apply appropriate styles on initial load
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.add('light-mode');
    }
  
    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('darkMode', 'false');
      } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
      }
    });
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const featuredItems = document.querySelector('#featured-items .grid');
    const apiList = document.getElementById('api-list');
    const toolsList = document.getElementById('tools-list');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    // Items data
    const items = [
        { id: 1, title: 'REST API', description: 'A powerful REST API for data management', type: 'api' },
        { id: 2, title: 'GraphQL Tool', description: 'Simplify your GraphQL queries', type: 'tool' },
        { id: 3, title: 'Authentication API', description: 'Secure user authentication made easy', type: 'api' },
        { id: 4, title: 'Code Formatter', description: 'Keep your code clean and consistent', type: 'tool' },
    ];

    // Function to create a card element
    function createCard(item) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span class="badge">${item.type.toUpperCase()}</span>
            <a href="#" class="button">Learn More</a>
        `;
        return card;
    }

    // Populate featured items on home page
    if (featuredItems) {
        items.forEach(item => {
            featuredItems.appendChild(createCard(item));
        });
    }

    // Populate API list on API page
    if (apiList) {
        const apis = items.filter(item => item.type === 'api');
        apis.forEach(api => {
            apiList.appendChild(createCard(api));
        });
    }

    // Populate Tools list on Tools page
    if (toolsList) {
        const tools = items.filter(item => item.type === 'tool');
        tools.forEach(tool => {
            toolsList.appendChild(createCard(tool));
        });
    }

    // Search functionality
    function performSearch() {
        if (!searchInput) return;
        
        const query = searchInput.value.toLowerCase();
        const filteredItems = items.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.description.toLowerCase().includes(query)
        );

        if (featuredItems) {
            featuredItems.innerHTML = '';
            filteredItems.forEach(item => {
                featuredItems.appendChild(createCard(item));
            });
        }
    }

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});


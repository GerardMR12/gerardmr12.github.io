document.addEventListener('DOMContentLoaded', () => {
    handleRoute(window.location.hash || '#home');
    initTheme();
});

window.addEventListener('hashchange', () => {
    handleRoute(window.location.hash);
});

function handleRoute(hash) {
    if (!hash || hash === '#' || hash === '#home') {
        renderPage('home');
    } else if (hash === '#projects') {
        renderPage('projects');
    } else if (hash === '#essays') {
        renderPage('essays');
    } else if (hash.startsWith('#post/')) {
        // Format: #post/{backPage}/{file...}
        const rest = hash.slice('#post/'.length);
        const slashIdx = rest.indexOf('/');
        if (slashIdx !== -1) {
            const backPage = rest.slice(0, slashIdx);
            const file = 'posts/' + rest.slice(slashIdx + 1);
            renderPost(file, backPage);
        } else {
            renderPage('home');
        }
    } else {
        renderPage('home');
    }
}

// Navigation: update URL (triggers hashchange → handleRoute)
function loadPage(page) {
    window.location.hash = page;
}

function loadPost(file, backPage) {
    const slug = file.replace(/^posts\//, '');
    window.location.hash = `post/${backPage}/${slug}`;
}

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        }
    });
}

async function renderPage(page) {
    const content = document.getElementById('content');
    content.innerHTML = '<p>Loading...</p>';
    content.classList.remove('fade-in');
    void content.offsetWidth; // Trigger reflow
    content.classList.add('fade-in');

    try {
        const response = await fetch('posts.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const posts = await response.json();

        if (page === 'home') {
            const introPost = posts.find(p => p.id === 'intro');
            const mdResponse = await fetch(introPost.file);
            if (!mdResponse.ok) throw new Error(`HTTP error! status: ${mdResponse.status}`);
            const mdText = await mdResponse.text();
            content.innerHTML = marked.parse(mdText);

            content.innerHTML += '<h2>Recent Projects</h2>';
            const projects = posts.filter(p => p.type === 'project').slice(0, 2);
            content.innerHTML += projects.map(p => createSummaryCard(p, 'projects')).join('');
            content.innerHTML += `<p><a href="#projects">View all projects &rarr;</a></p>`;

        } else if (page === 'projects') {
            content.innerHTML = '<h1>Projects</h1>';
            const projectsHtml = posts.filter(p => p.type === 'project')
                                     .map(p => createProjectCard(p, 'projects'))
                                     .join('');
            content.innerHTML += projectsHtml;

        } else if (page === 'essays') {
            content.innerHTML = '<h1>Essays</h1>';
            const essaysHtml = posts.filter(p => p.type === 'essay')
                                 .map(p => createProjectCard(p, 'essays'))
                                 .join('');
            content.innerHTML += essaysHtml || '<p>Coming soon!</p>';
        }
    } catch (error) {
        console.error('Error loading content:', error);
        content.innerHTML = `<p>Error loading content. Please try again later.</p>`;
    }
}

function createSummaryCard(post, type) {
    return `
        <div class="project-card" onclick="loadPost('${post.file}', '${type}')">
            <h3>${post.title}</h3>
            <span class="date">${post.date}</span>
        </div>
    `;
}

function createProjectCard(post, type) {
    return `
        <div class="project-card" onclick="loadPost('${post.file}', '${type}')">
            <h3>${post.title}</h3>
            <span class="date">${post.date}</span>
        </div>
    `;
}

async function renderPost(file, backPage) {
    const content = document.getElementById('content');
    content.innerHTML = '<p>Loading...</p>';
    content.classList.remove('fade-in');
    void content.offsetWidth; // Trigger reflow
    content.classList.add('fade-in');

    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const mdText = await response.text();
        content.innerHTML = `<a href="#${backPage}" style="display:inline-block; margin-bottom: 1.5rem; text-decoration: none; color: var(--secondary);">&larr; Back to ${backPage.charAt(0).toUpperCase() + backPage.slice(1)}</a>`;
        content.innerHTML += marked.parse(mdText);
        window.scrollTo(0, 0);
    } catch (error) {
        console.error('Error loading post:', error);
        content.innerHTML = '<p>Error loading post.</p>';
    }
}

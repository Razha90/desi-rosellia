// State - Static list of images from the img folder
const images = [
    { id: 1, name: "architech.jpg", path: "img/architech.jpg", size: "118.6 KB", date: "27 Feb 2026" },
    { id: 2, name: "bussines.png", path: "img/bussines.png", size: "253.2 KB", date: "27 Feb 2026" },
    { id: 3, name: "doctor.png", path: "img/doctor.png", size: "144.2 KB", date: "27 Feb 2026" },
    { id: 4, name: "driver.png", path: "img/driver.png", size: "273.2 KB", date: "27 Feb 2026" },
    { id: 5, name: "enginer.png", path: "img/enginer.png", size: "149.3 KB", date: "27 Feb 2026" },
    { id: 6, name: "image.png", path: "img/image.png", size: "240.6 KB", date: "27 Feb 2026" },
    { id: 7, name: "nurse.png", path: "img/nurse.png", size: "215.7 KB", date: "27 Feb 2026" },
    { id: 8, name: "mahasiswa.png", path: "img/mahasiswa.png", size: "303.0 KB", date: "27 Feb 2026" },
    { id: 9, name: "reporter.png", path: "img/reporter.png", size: "232.2 KB", date: "27 Feb 2026" },
    { id: 10, name: "services.png", path: "img/services.png", size: "288.3 KB", date: "27 Feb 2026" },
    { id: 11, name: "studying.jpg", path: "img/studying.jpg", size: "65.0 KB", date: "27 Feb 2026" },
    { id: 12, name: "teacher.png", path: "img/teacher.png", size: "244.6 KB", date: "27 Feb 2026" }
];

// DOM Elements
const grid = document.getElementById('imageGrid');

// Icons
const shareIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`;
const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
const sizeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>`;
const viewIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;

// Render Gallery
function renderImages() {
    grid.innerHTML = '';

    if (images.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                <h3>Belum ada gambar</h3>
                <p>Galeri Anda masih kosong.</p>
            </div>
        `;
        return;
    }

    images.forEach((img, index) => {
        // Base URL 
        let baseUrl = window.location.origin + window.location.pathname;
        baseUrl = baseUrl.endsWith('index.html') ? baseUrl.replace('index.html', '') : baseUrl;
        if (!baseUrl.endsWith('/')) baseUrl += '/';

        const urlToShare = baseUrl + img.path;

        const card = document.createElement('div');
        card.className = 'card';
        card.style.animation = `modalIn 0.5s ease ${index * 0.1}s backwards`;
        card.innerHTML = `
            <div class="card-image">
                <img src="${img.path}" alt="${img.name}" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgcnk9IjIiPjwvcmVjdD48Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEuNSI+PC9jaXJjbGU+PHBvbHlsaW5lIHBvaW50cz0iMjEgMTUgMTYgMTAgNSAyMSI+PC9wb2x5bGluZT48L3N2Zz4='"; this.style.objectFit='none';">
                <div class="card-overlay">
                    <a href="${img.path}" target="_blank" class="btn-icon view-btn" style="text-decoration: none;" title="Buka Gambar">
                        ${viewIcon}
                    </a>
                    <button class="btn-icon share-btn" data-link="${urlToShare}" title="Bagikan Link">
                        ${shareIcon}
                    </button>
                    <button class="btn-icon copy-btn" data-link="${urlToShare}" title="Salin Link">
                        ${copyIcon}
                    </button>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title" title="${img.name}">${img.name}</h3>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
                    <p class="card-size">${sizeIcon} ${img.size}</p>
                    <p style="font-size: 0.8rem; color: #64748b;">${img.date}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Attach click events to buttons
    document.querySelectorAll('.copy-btn, .share-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const link = e.currentTarget.getAttribute('data-link');
            try {
                await navigator.clipboard.writeText(link);
                showToast("Link gambar berhasil disalin!");
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement("textarea");
                textArea.value = link;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    showToast("Link gambar berhasil disalin!");
                } catch (e) {
                    showToast("Gagal menyalin link.");
                }
                document.body.removeChild(textArea);
            }
        });
    });
}

// Toast System
let toastTimeout;
function showToast(message) {
    const toast = document.getElementById('toast');

    toast.classList.remove('show');
    clearTimeout(toastTimeout);

    setTimeout(() => {
        toast.textContent = message;
        toast.classList.add('show');

        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }, 50);
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderImages();
});

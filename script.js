// Perfume Data List - 25 High-End Items in Hungarian
const products = [
    { id: 1, name: "Éjféli Rózsa", type: "Virágos", category: "női", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800", description: "Mély és szenvedélyes illat, mely a sötétségbe burkolózó damaszkuszi rózsa rejtélyét hordozza magában." },
    { id: 2, name: "Fekete Cédrus", type: "Fás", category: "férfi", image: "https://images.unsplash.com/photo-1595425970377-c9703cc48a7c?auto=format&fit=crop&q=80&w=800", description: "Férfias, erőteljes cédrusfa illatjegyek fűszeres aláfestéssel, elegáns megjelenésekhez." },
    { id: 3, name: "Tengeri Szellő", type: "Friss", category: "unisex", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=800", description: "Tiszta energiával telt óceáni illat, amely felébreszti az érzékeket. Egy csipetnyi sós lehelet a bőrön." },
    { id: 4, name: "Aranyló Borostyán", type: "Keleti", category: "unisex", image: "https://images.unsplash.com/photo-1512496015851-a1e1bc2a95ac?auto=format&fit=crop&q=80&w=800", description: "Meleg, mély, fűszeres illatkompozíció, pazar ámbrával és vaníliával, hűvös estékre." },
    { id: 5, name: "Gyöngyvirág Báj", type: "Virágos", category: "női", image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=800", description: "Lágy és visszafogott tavaszi illat. Fõszerepben a finom, harmatos gyöngyvirág és a friss zöld jegyek." },
    { id: 6, name: "Nemesi Dohány", type: "Fás", category: "férfi", image: "https://images.unsplash.com/photo-1594035911432-841fdaf97669?auto=format&fit=crop&q=80&w=800", description: "Kifinomult úriemberek választása: dohány, vanília és fűszeres fás tónusok gazdag elegye." },
    { id: 7, name: "Selymes Bazsarózsa", type: "Virágos", category: "női", image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=800", description: "Nőies, édes, mégis könnyed illat. A bazsarózsa selymessége magával ragadja a viselőjét." },
    { id: 8, name: "Vadmálna Gyönyör", type: "Gyümölcsös", category: "női", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800", description: "Kirobbanóan friss, édes-savanykás málna illat egy pici pézsmával bolondítva." },
    { id: 9, name: "Titkos Kert", type: "Virágos", category: "női", image: "https://images.unsplash.com/photo-1587556930799-8dca6a152ca8?auto=format&fit=crop&q=80&w=800", description: "Olyan, mint belépni egy harmatos angolkertbe hajnalban. Fehér virágok és zöld tea harmonikus párosa." },
    { id: 10, name: "Szahara Éjszakája", type: "Keleti", category: "unisex", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800", description: "Érzéki, misztikus és forró illat. Fahéj, tömjén és szantálfa sivatagi tánca." },
    { id: 11, name: "Hűvös Menta", type: "Friss", category: "férfi", image: "https://images.unsplash.com/photo-1595425970377-c9703cc48a7c?auto=format&fit=crop&q=80&w=800", description: "Dinamikus férfiaknak. Mentolos szellő és fűszeres alaphangok tökéletes napi frissességet biztosítanak." },
    { id: 12, name: "Királyi Írisz", type: "Virágos", category: "női", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=800", description: "Púderes elegancia. Az írisz gyökér és az ibolya klasszikus, időtálló kompozíciója." },
    { id: 13, name: "Titán Fa", type: "Fás", category: "férfi", image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=800", description: "Agyar és guajakfa ereje, határozott karaktereknek tervezve." },
    { id: 14, name: "Narancsvirág Lé", type: "Friss", category: "unisex", image: "https://images.unsplash.com/photo-1512496015851-a1e1bc2a95ac?auto=format&fit=crop&q=80&w=800", description: "A nyár minden cseppje üvegbe zárva. Keserűnarancs és neroli felemelő kombinációja." },
    { id: 15, name: "Ébenfa Varázs", type: "Fás", category: "férfi", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800", description: "Sötét, füstös, elegáns illatjegyek, bőr és ébenfa luxus ötvözetével." },
    { id: 16, name: "Jázmin Könnye", type: "Virágos", category: "női", image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=800", description: "Lenyűgöző arab jázmin, éjszakai szüreteléssel, ami igazán bódítóvá teszi ezt a parfümöt." },
    { id: 17, name: "Vad Levendula", type: "Friss", category: "unisex", image: "https://images.unsplash.com/photo-1594035911432-841fdaf97669?auto=format&fit=crop&q=80&w=800", description: "Egy provence-i mező nyugalma. Aromás, tiszta és megnyugtató levendula esszencia." },
    { id: 18, name: "Bársonyos Pézsma", type: "Keleti", category: "unisex", image: "https://images.unsplash.com/photo-1587556930799-8dca6a152ca8?auto=format&fit=crop&q=80&w=800", description: "Második bőr illat. Tiszta, puha fehér pézsma finom és intim aurát teremt." },
    { id: 19, name: "Bergamott Kert", type: "Friss", category: "férfi", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800", description: "Keserű-édes olasz bergamott citrusos robbanása egy meleg nyári reggelen." },
    { id: 20, name: "Misztikus Pacsuli", type: "Fás", category: "unisex", image: "https://images.unsplash.com/photo-1595425970377-c9703cc48a7c?auto=format&fit=crop&q=80&w=800", description: "A pacsuli földes, fás gazdagsága egy modern, luxus csavarral elkészítve." },
    { id: 21, name: "Féktelen Rózsa", type: "Virágos", category: "női", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=800", description: "Egy modern, merész és pimasz rózsa illat, csípős rózsaborssal fűszerezve." },
    { id: 22, name: "Arktikus Jég", type: "Friss", category: "férfi", image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=800", description: "Borzongatóan hűvös aquás jegyek a maximális felfrissülés érdekében." },
    { id: 23, name: "Trópusi Vanília", type: "Keleti", category: "női", image: "https://images.unsplash.com/photo-1512496015851-a1e1bc2a95ac?auto=format&fit=crop&q=80&w=800", description: "Krémes madagaszkári vanília egy pici kókusszal és ylang-ylanggal, igazi egzotikum." },
    { id: 24, name: "Sziklás Part", type: "Fás", category: "unisex", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800", description: "Driftwood (uszadékfa) és sós víz keveréke bolondítja meg ezt a nyers, organikus illatot." },
    { id: 25, name: "Csábító Oud", type: "Keleti", category: "férfi", image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=800", description: "Az agarfa sötét, fenséges esszenciája, mely csak az elit számára készült mestermű." }
];

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Modal elements
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalType = document.getElementById('modalType');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');

    // Function to render products based on category filter
    function renderProducts(filterCategory) {
        productGrid.innerHTML = '';

        const filteredProducts = filterCategory === 'all'
            ? products
            : products.filter(product => product.category === filterCategory);

        filteredProducts.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.animationDelay = `${index * 0.05}s`; // Faster stagger for 25 items

            card.innerHTML = `
                <div class="image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-type">${product.type}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <button class="btn-details" data-id="${product.id}">Részletek</button>
                </div>
            `;

            productGrid.appendChild(card);
        });

        // Re-attach modal events to new buttons
        attachDetailsEvents();
    }

    function attachDetailsEvents() {
        const detailsBtns = document.querySelectorAll('.btn-details');
        detailsBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                openModal(product);
            });
        });
    }

    function openModal(product) {
        if (!product) return;

        modalTitle.textContent = product.name;
        modalImage.src = product.image;
        modalImage.alt = product.name;
        modalType.textContent = `Illatjegy: ${product.type}`;
        modalCategory.textContent = `Kategória: ${product.category}`;
        modalDescription.textContent = product.description;

        modal.style.display = 'block';
        // Timeout to allow display block to process before changing opacity for animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    function closeModal() {
        modal.classList.remove('show');
        // Wait for transition to finish
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    // Modal Close Listeners
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterCategory = btn.getAttribute('data-filter');
            renderProducts(filterCategory);
        });
    });

    // Initial render
    renderProducts('all');
});

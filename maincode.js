/* const catlinks = document.querySelectorAll('.cat-link');
const cards = document.querySelectorAll('.product-card');

catlinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        catlinks.forEach( l => l.classList.remove('active'));
        link.classList.add('active');
        const selected = link.dataset.cat;
        cards.forEach(card => {
            card.style.display = (selected === "all" || card.dataset.category === selected) ? 'block' : 'none'
        });

    });
}); */
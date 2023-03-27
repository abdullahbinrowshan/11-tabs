const buttons = document.querySelectorAll('.tab-btn')
const articles = document.querySelectorAll('.content')
const about = document.querySelector('.about')

about.addEventListener('click', e => {
    const id = e.target.dataset.id;
    const element = document.getElementById(id)
    if (id) {
        buttons.forEach(btn => {
            btn.classList.remove('active');
            e.target.classList.add('active')
        });
        articles.forEach(article => {
            article.classList.remove('active')
            element.classList.add('active')
        });
    }
})
document.addEventListener('DOMContentLoaded', () => {

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(other => {
                other.classList.remove('active');
                other.querySelector('.faq-answer').style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    const aosElements = document.querySelectorAll('[data-aos]');

    function checkAOS() {
        aosElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const delay = parseInt(el.getAttribute('data-delay')) || 0;

            if (rect.top < window.innerHeight - 80) {
                setTimeout(() => {
                    el.classList.add('visible');
                }, delay);
            }
        });
    }

    window.addEventListener('scroll', checkAOS);
    checkAOS();

    const navbar = document.getElementById('navbar');
    const topBar = document.querySelector('.top-bar');

    if (navbar && topBar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                topBar.classList.add('hidden');
                navbar.style.top = '0';
            } else {
                topBar.classList.remove('hidden');
                navbar.style.top = '37px';
            }
        });
    }
});

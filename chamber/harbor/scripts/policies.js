function toggleRules(id) {
    const rules = document.getElementById(id);
    const arrow = rules.previousElementSibling.querySelector('.arrow');
    if (rules.style.display === 'block') {
        rules.style.display = 'none';
        arrow.innerHTML = '&#9660;';
    } else {
        rules.style.display = 'block';
        arrow.innerHTML = '&#9650;';
    }
}
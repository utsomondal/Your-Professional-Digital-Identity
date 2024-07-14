document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        const progressBar = skill.querySelector('.progress');
        const skillValue = skill.getAttribute('data-skill');
        progressBar.style.width = skillValue;
    });
});
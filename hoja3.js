const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionContainer = document.getElementById('questionContainer');
const resultContainer = document.getElementById('resultContainer');

noBtn.addEventListener('mouseover', () => {
    const newX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const newY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    resultContainer2.classList.remove('hidden');
});

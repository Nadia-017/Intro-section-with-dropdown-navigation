const featuresMenu = document.querySelector('.features');
const companyMenu = document.querySelector('.company');
const featuresLink = document.querySelector('.link li:nth-child(1)');
const companyLink = document.querySelector('.link li:nth-child(2)');
const featuresIcon = featuresLink.querySelector('img');
const companyIcon = companyLink.querySelector('img');


featuresLink.addEventListener('click', () => {
  featuresMenu.style.display = (featuresMenu.style.display === 'flex') ? 'none' : 'flex';
  featuresIcon.classList.toggle('rotate-icon');
});

companyLink.addEventListener('click', () => {
  companyMenu.style.display = (companyMenu.style.display === 'flex') ? 'none' : 'flex';
  companyIcon.classList.toggle('rotate-icon');
});

document.addEventListener('click', (event) => {
  const targetElement = event.target;
  
  if (!targetElement.matches('.link li') && !targetElement.matches('.link li img')) {
    featuresMenu.style.display = 'none';
    companyMenu.style.display = 'none';
    featuresIcon.classList.remove('rotate-icon');
    companyIcon.classList.remove('rotate-icon');
  }
});

window.addEventListener('load', function() {
  const mainContainer = document.getElementsByClassName('main-container')[0];
  const sectionsWrap = document.querySelector('.sections-wrap');
  const sectionTitles = document.querySelectorAll('.section-title');
  const sections = document.querySelectorAll('.section');
  const sectionsArray = Array.prototype.slice.call(sections);
  const backToTopBtn = document.querySelector('.back-to-top');

  mainContainer.classList.add('show-container');

  const innerTransitions = setTimeout(() => {
    mainContainer.classList.add('show-content');
    mainContainer.addEventListener('transitionend', () => clearTimeout(innerTransitions));
  }, 3000);


  // Scroll to top btn
  backToTopBtn.addEventListener('click', () => {
    sectionsWrap.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Check if all sections are closed
  function checkSections() {
    const allSectionsAreClosed = !sectionsArray.find(section => section.classList.contains('show-section-content'));

    if (allSectionsAreClosed) {
      mainContainer.classList.remove('show-section-content');
    } else {
      mainContainer.classList.add('show-section-content');
    }
  }

  sectionTitles.forEach(sectionTitle => {
    sectionTitle.addEventListener('click', (event) => {
      const targetSection = event.target.closest('.section');

      if (targetSection.classList.contains('show-section-content')) {
        targetSection.classList.remove('show-section-content');
      } else if (!targetSection.classList.contains('back-to-top')) {
        targetSection.classList.add('show-section-content');
      }

      checkSections();
    });
  });
});
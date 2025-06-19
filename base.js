 // Scroll-based fade-in animation
    const elements = document.querySelectorAll('.fade-in');

    const onScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('load', onScroll);
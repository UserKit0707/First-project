        document.addEventListener('DOMContentLoaded', function() {
            // Dark Mode Toggle
            const darkModeToggle = document.getElementById('darkModeToggle');
            const darkModeIcon = document.getElementById('darkModeIcon');
            let darkMode = localStorage.getItem('darkMode') === 'true';
            
            // Apply saved preference
            if (darkMode) {
                document.body.classList.add('dark-mode');
                darkModeIcon.classList.replace('fa-moon', 'fa-sun');
            }
            
            // Toggle function
            darkModeToggle.addEventListener('click', () => {
                darkMode = !darkMode;
                document.body.classList.toggle('dark-mode', darkMode);
                
                if (darkMode) {
                    darkModeIcon.classList.replace('fa-moon', 'fa-sun');
                    localStorage.setItem('darkMode', 'true');
                } else {
                    darkModeIcon.classList.replace('fa-sun', 'fa-moon');
                    localStorage.setItem('darkMode', 'false');
                }
            });
            
            // Mobile Menu Toggle
            const mobileMenuButton = document.getElementById('mobileMenuButton');
            const mobileMenu = document.getElementById('mobileMenu');
            
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Smooth Scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // Close mobile menu if open
                        if (!mobileMenu.classList.contains('hidden')) {
                            mobileMenu.classList.add('hidden');
                        }
                        
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Update active navigation link on scroll
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            window.addEventListener('scroll', () => {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (pageYOffset >= sectionTop - 100) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
            
            // Animate skill bars when they come into view
            const skillBars = document.querySelectorAll('.skill-progress');
            
            const animateSkills = () => {
                skillBars.forEach(bar => {
                    const rect = bar.parentElement.getBoundingClientRect();
                    const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
                    
                    if (isVisible && !bar.style.width) {
                        const width = bar.parentElement.nextElementSibling.textContent;
                        bar.style.width = width;
                    }
                });
            };
            
            // Initial check and then on scroll
            animateSkills();
            window.addEventListener('scroll', animateSkills);
        });
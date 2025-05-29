 document.addEventListener('DOMContentLoaded', function() {
            
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            const mobileNav = document.querySelector('.mobile-nav');
            if (hamburgerMenu && mobileNav) {
                hamburgerMenu.addEventListener('click', function() {
                    const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
                    this.setAttribute('aria-expanded', !isExpanded);
                    mobileNav.classList.toggle('active');
                    if (mobileNav.classList.contains('active')) {
                        document.body.style.overflow = 'hidden'; 
                    } else {
                        document.body.style.overflow = '';
                    }
                });
            }

            
            const filterPills = document.querySelectorAll('.filter-pill');
            const toolCards = document.querySelectorAll('.tool-card');

            filterPills.forEach(pill => {
                pill.addEventListener('click', function() {
                    filterPills.forEach(p => p.classList.remove('active'));
                    this.classList.add('active');
                    
                    const filterValue = this.dataset.filter;

                    toolCards.forEach(card => {
                        const cardCategories = card.dataset.category ? card.dataset.category.split(' ') : [];
                        if (filterValue === 'all' || cardCategories.includes(filterValue)) {
                            card.classList.remove('hidden');
                            card.style.display = ''; 
                        } else {
                            card.classList.add('hidden');
                            card.style.display = 'none'; 
                        }
                    });
                });
            });

            
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const questionButton = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                if (questionButton && answer) {
                    questionButton.addEventListener('click', function() {
                        const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
                        this.setAttribute('aria-expanded', !isExpanded);
                        item.classList.toggle('active');
                        if (item.classList.contains('active')) {
                            answer.style.maxHeight = answer.scrollHeight + "px";
                        } else {
                            answer.style.maxHeight = '0';
                        }
                    });
                }
            });

            const themeToggleButton = document.querySelector('.theme-toggle');
            const lightIcon = themeToggleButton.querySelector('.light-icon');
            const darkIcon = themeToggleButton.querySelector('.dark-icon');
            const currentTheme = localStorage.getItem('theme');

            function setTheme(theme) {
                if (theme === 'dark') {
                    document.body.classList.add('dark-mode');
                    lightIcon.style.display = 'none';
                    darkIcon.style.display = 'block';
                    themeToggleButton.setAttribute('aria-label', 'Toggle light theme');
                    localStorage.setItem('theme', 'dark');
                } else {
                    document.body.classList.remove('dark-mode');
                    lightIcon.style.display = 'block';
                    darkIcon.style.display = 'none';
                    themeToggleButton.setAttribute('aria-label', 'Toggle dark theme');
                    localStorage.setItem('theme', 'light');
                }
            }

            if (currentTheme) {
                setTheme(currentTheme);
            } else {
                
                setTheme('light'); 
            }

            themeToggleButton.addEventListener('click', function() {
                if (document.body.classList.contains('dark-mode')) {
                    setTheme('light');
                } else {
                    setTheme('dark');
                }
            });


            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const hrefAttribute = this.getAttribute('href');
                    if (hrefAttribute && hrefAttribute.length > 1) { 
                        const targetElement = document.querySelector(hrefAttribute);
                        if (targetElement) {
                            e.preventDefault();
                            targetElement.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });

        });
            
            
            document.querySelectorAll('table.responsive-comparison-table').forEach(table => {
                const headers = [];
                table.querySelectorAll('thead th').forEach(headerCell => {
                    headers.push(headerCell.textContent.trim());
                });

                table.querySelectorAll('tbody tr').forEach(row => {
                    row.querySelectorAll('td').forEach((cell, index) => {
                        
                        if (!cell.hasAttribute('data-label') && headers[index]) {
                             cell.setAttribute('data-label', headers[index] + ':');
                        }
                    });
                });
            });
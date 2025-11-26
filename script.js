// Magical Love Letter Website - JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // Initialize all animations and effects
    initializePetals();
    initializeHearts();
    initializeEntryScreen();
    initializeScrollAnimations();
    initializeParallax();
    initializeMusicPlayer();

    // Falling Petals Animation
    function initializePetals() {
        const petalsContainer = document.getElementById('petalsContainer');

        function createPetal() {
            const petal = document.createElement('div');
            petal.className = 'petal';

            // Random positioning and timing
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (Math.random() * 3 + 4) + 's';
            petal.style.animationDelay = Math.random() * 2 + 's';

            // Random petal variations
            const size = Math.random() * 8 + 8;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';

            // Random colors from our palette
            const colors = ['#ff6a88', '#ffb7cf', '#d6b5f7', '#ffe3d8'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            petal.style.background = `radial-gradient(circle, ${color}, ${color}aa)`;

            petalsContainer.appendChild(petal);

            // Remove petal after animation
            setTimeout(() => {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 8000);
        }

        // Create petals continuously
        setInterval(createPetal, 300);

        // Create initial petals
        for (let i = 0; i < 15; i++) {
            setTimeout(createPetal, i * 200);
        }
    }

    // Floating Hearts Animation
    function initializeHearts() {
        const heartsContainer = document.getElementById('heartsContainer');
        const heartEmojis = ['💖', '💕', '💗', '💓', '💝', '💘', '💞', '💟'];

        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

            // Random positioning and timing
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
            heart.style.animationDelay = Math.random() * 3 + 's';

            // Random size
            const size = Math.random() * 15 + 15;
            heart.style.fontSize = size + 'px';

            heartsContainer.appendChild(heart);

            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 10000);
        }

        // Create hearts continuously
        setInterval(createHeart, 800);

        // Create initial hearts
        for (let i = 0; i < 8; i++) {
            setTimeout(createHeart, i * 400);
        }
    }

    // Entry Screen Logic
    function initializeEntryScreen() {
        const entryScreen = document.getElementById('entryScreen');
        const mainWebsite = document.getElementById('mainWebsite');
        const openHeartBtn = document.getElementById('openHeartBtn');

        openHeartBtn.addEventListener('click', function () {
            // Bloom transition effect
            entryScreen.style.transform = 'scale(1.5)';
            entryScreen.style.filter = 'blur(10px)';

            setTimeout(() => {
                entryScreen.classList.add('hidden');
                mainWebsite.classList.add('visible');

                // Show music player and start music
                showMusicPlayer();

                // Start chapter animations
                setTimeout(() => {
                    animateChapter1();
                }, 500);
            }, 800);
        });
    }

    // Scroll-triggered Animations
    function initializeScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Special animations for different elements
                    if (entry.target.classList.contains('chapter-1')) {
                        animateChapter1();
                    } else if (entry.target.classList.contains('chapter-2')) {
                        animateChapter2();
                    } else if (entry.target.classList.contains('chapter-3')) {
                        animateChapter3();
                    } else if (entry.target.classList.contains('chapter-4')) {
                        animateChapter4();
                    } else if (entry.target.classList.contains('chapter-5')) {
                        animateChapter5();
                    } else if (entry.target.classList.contains('chapter-6')) {
                        animateChapter6();
                    }
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        document.querySelectorAll('.chapter-title, .reveal-line, .dream-line, .promise-line, .timeline-item, .gallery-item, .chapter-subtitle').forEach(el => {
            observer.observe(el);
        });

        // Observe chapters
        document.querySelectorAll('.chapter').forEach(chapter => {
            observer.observe(chapter);
        });
    }

    // Chapter-specific Animations
    function animateChapter1() {
        const lines = document.querySelectorAll('.chapter-1 .reveal-line');
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('visible');
            }, index * 800);
        });

        // Add floating hearts to chapter 1
        createChapterHearts('.chapter-1');
    }

    function animateChapter2() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');

                // Bloom effect for timeline dots
                const dot = item.querySelector('.timeline-dot');
                if (dot) {
                    setTimeout(() => {
                        dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
                        setTimeout(() => {
                            dot.style.transform = 'translate(-50%, -50%) scale(1)';
                        }, 300);
                    }, 500);
                }
            }, index * 600);
        });
    }

    function animateChapter3() {
        const dreamLines = document.querySelectorAll('.chapter-3 .dream-line');
        dreamLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('visible');
            }, index * 400);
        });
    }

    function animateChapter4() {
        // Create golden hearts for chapter 4
        createGoldenHearts('.chapter-4');
    }

    function animateChapter5() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200);
        });
    }

    function animateChapter6() {
        const promiseLines = document.querySelectorAll('.chapter-6 .promise-line');
        promiseLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('visible');
            }, index * 600);
        });

        // Animate signature sparkles
        setTimeout(() => {
            const sparkles = document.querySelector('.signature-sparkles');
            if (sparkles) {
                sparkles.style.opacity = '1';
            }
        }, 3000);
    }

    // Create floating hearts for specific chapters
    function createChapterHearts(chapterSelector) {
        const chapter = document.querySelector(chapterSelector);
        if (!chapter) return;

        const heartsContainer = chapter.querySelector('.floating-hearts-chapter') || chapter;

        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '💕';
                heart.style.position = 'absolute';
                heart.style.fontSize = '24px';
                heart.style.left = Math.random() * 80 + 10 + '%';
                heart.style.top = Math.random() * 80 + 10 + '%';
                heart.style.animation = 'floatGently 4s ease-in-out infinite';
                heart.style.animationDelay = Math.random() * 2 + 's';
                heart.style.opacity = '0.7';
                heart.style.pointerEvents = 'none';

                heartsContainer.appendChild(heart);
            }, i * 500);
        }
    }

    // Create golden hearts for chapter 4
    function createGoldenHearts(chapterSelector) {
        const chapter = document.querySelector(chapterSelector);
        if (!chapter) return;

        const heartsContainer = chapter.querySelector('.golden-hearts') || chapter;

        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '💛';
                heart.style.position = 'absolute';
                heart.style.fontSize = '30px';
                heart.style.left = Math.random() * 90 + 5 + '%';
                heart.style.top = Math.random() * 90 + 5 + '%';
                heart.style.animation = 'goldenFloat 3s ease-in-out infinite';
                heart.style.animationDelay = Math.random() * 3 + 's';
                heart.style.opacity = '0.8';
                heart.style.pointerEvents = 'none';
                heart.style.filter = 'drop-shadow(0 0 10px gold)';

                heartsContainer.appendChild(heart);
            }, i * 300);
        }
    }

    // Parallax Effect (Simplified)
    function initializeParallax() {
        window.addEventListener('scroll', () => {
            // Only apply subtle parallax to petals, not chapters
            const petals = document.querySelectorAll('.petal');
            petals.forEach(petal => {
                const scrolled = window.scrollY;
                const rate = scrolled * -0.1;
                petal.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatGently {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes goldenFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-30px) scale(1.2); }
        }
        
        @keyframes handwriting {
            0% { width: 0; }
            100% { width: 100%; }
        }
        
        @keyframes bloom {
            0% { transform: scale(0) rotate(0deg); opacity: 0; }
            50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
            100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }
        
        @keyframes shimmer {
            0% { background-position: -200px 0; }
            100% { background-position: 200px 0; }
        }
        
        .handwriting-effect {
            overflow: hidden;
            white-space: nowrap;
            animation: handwriting 3s steps(40, end);
        }
        
        .bloom-effect {
            animation: bloom 1.5s ease-out;
        }
        
        .shimmer-effect {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            background-size: 200px 100%;
            animation: shimmer 2s infinite;
        }
    `;
    document.head.appendChild(style);

    // Add sparkle effects on hover for images
    document.querySelectorAll('.image-container').forEach(container => {
        container.addEventListener('mouseenter', function () {
            this.style.filter = 'brightness(1.1) saturate(1.2)';
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        container.addEventListener('mouseleave', function () {
            this.style.filter = 'brightness(1) saturate(1)';
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add glow effect to timeline dots on scroll
    const timelineDots = document.querySelectorAll('.timeline-dot');
    timelineDots.forEach(dot => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dot.style.boxShadow = '0 0 30px rgba(255, 106, 136, 0.8)';
                    setTimeout(() => {
                        dot.style.boxShadow = '0 0 20px rgba(255, 106, 136, 0.5)';
                    }, 1000);
                }
            });
        });
        observer.observe(dot);
    });

    // Add typing effect to signature
    function typeSignature() {
        const signature = document.querySelector('.signature');
        if (signature) {
            const text = signature.textContent;
            signature.textContent = '';
            signature.style.opacity = '1';

            let i = 0;
            const typeInterval = setInterval(() => {
                signature.textContent += text.charAt(i);
                i++;
                if (i >= text.length) {
                    clearInterval(typeInterval);
                    // Add sparkle effect after typing
                    setTimeout(() => {
                        const sparkles = document.querySelector('.signature-sparkles');
                        if (sparkles) {
                            sparkles.style.opacity = '1';
                        }
                    }, 500);
                }
            }, 100);
        }
    }

    // Trigger signature typing when chapter 6 is visible
    const chapter6Observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeSignature, 4000);
                chapter6Observer.unobserve(entry.target);
            }
        });
    });

    const chapter6 = document.querySelector('.chapter-6');
    if (chapter6) {
        chapter6Observer.observe(chapter6);
    }

    // Add gentle pulse to beating heart
    const beatingHeart = document.querySelector('.heart');
    if (beatingHeart) {
        setInterval(() => {
            beatingHeart.style.filter = 'drop-shadow(0 0 20px #ff6a88)';
            setTimeout(() => {
                beatingHeart.style.filter = 'drop-shadow(0 0 10px #ff6a88)';
            }, 300);
        }, 1500);
    }

    // Add random sparkles throughout the page
    function createRandomSparkles() {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = '12px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '10';
        sparkle.style.animation = 'sparkleRandom 3s ease-out forwards';

        document.body.appendChild(sparkle);

        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 3000);
    }

    // Add sparkle animation
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkleRandom {
            0% { opacity: 0; transform: scale(0) rotate(0deg); }
            50% { opacity: 1; transform: scale(1) rotate(180deg); }
            100% { opacity: 0; transform: scale(0) rotate(360deg); }
        }
    `;
    document.head.appendChild(sparkleStyle);

    // Create sparkles periodically
    setInterval(createRandomSparkles, 2000);

    // Music Player Functionality
    function initializeMusicPlayer() {
        const musicPlayer = document.getElementById('musicPlayer');
        const backgroundMusic = document.getElementById('backgroundMusic');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const playIcon = playPauseBtn.querySelector('.play-icon');
        const pauseIcon = playPauseBtn.querySelector('.pause-icon');
        const musicWave = document.querySelector('.music-wave');
        
        let isPlaying = false;

        // Play/Pause button functionality
        playPauseBtn.addEventListener('click', function() {
            if (isPlaying) {
                backgroundMusic.pause();
                playIcon.style.display = 'inline';
                pauseIcon.style.display = 'none';
                musicWave.classList.add('paused');
                isPlaying = false;
            } else {
                // Try to play music (may require user interaction)
                const playPromise = backgroundMusic.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        playIcon.style.display = 'none';
                        pauseIcon.style.display = 'inline';
                        musicWave.classList.remove('paused');
                        isPlaying = true;
                    }).catch(error => {
                        console.log('Music autoplay prevented:', error);
                        // Show a gentle notification that user needs to click to play
                        showMusicNotification();
                    });
                }
            }
        });

        // Handle music end (though it's set to loop)
        backgroundMusic.addEventListener('ended', function() {
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
            musicWave.classList.add('paused');
            isPlaying = false;
        });

        // Volume control (set to a gentle level)
        backgroundMusic.volume = 0.3;
    }

    function showMusicPlayer() {
        const musicPlayer = document.getElementById('musicPlayer');
        const backgroundMusic = document.getElementById('backgroundMusic');
        
        // Show the music player with animation
        setTimeout(() => {
            musicPlayer.classList.add('visible');
            
            // Try to auto-play music (modern browsers may block this)
            setTimeout(() => {
                const playPromise = backgroundMusic.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        // Music started successfully
                        const playIcon = document.querySelector('.play-icon');
                        const pauseIcon = document.querySelector('.pause-icon');
                        const musicWave = document.querySelector('.music-wave');
                        
                        playIcon.style.display = 'none';
                        pauseIcon.style.display = 'inline';
                        musicWave.classList.remove('paused');
                    }).catch(error => {
                        console.log('Music autoplay prevented by browser:', error);
                        // Music player will show play button, user can click to start
                    });
                }
            }, 1000);
        }, 1500);
    }

    function showMusicNotification() {
        // Create a gentle notification for music
        const notification = document.createElement('div');
        notification.innerHTML = '🎵 Click the music button to play our love song 💕';
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            padding: 15px 20px;
            border-radius: 15px;
            font-family: 'Parisienne', cursive;
            color: #ff6a88;
            font-size: 1.1rem;
            box-shadow: 0 8px 25px rgba(255, 106, 136, 0.3);
            z-index: 1000;
            animation: fadeInOut 4s ease-in-out forwards;
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after animation
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 4000);
    }

    // Add notification animation
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateX(50px); }
            20%, 80% { opacity: 1; transform: translateX(0); }
            100% { opacity: 0; transform: translateX(50px); }
        }
    `;
    document.head.appendChild(notificationStyle);

    console.log('💖 Magical love letter website initialized! 💖');
});
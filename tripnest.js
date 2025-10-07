const header = document.getElementById('header');
const UlHome = document.getElementById('UlHome');
const UlAbout = document.getElementById('UlAbout');
const UlContact = document.getElementById('UlContact');
const navLine = document.getElementById('navLine');
const homePage = document.getElementById('home');
const aboutPage = document.getElementById('about');
const contactPage = document.getElementById('contact');
const slidingImage = document.getElementById('slidingImage');
       
        let hideHeaderTimeout; 
        let isHovering = false; 

        header.addEventListener('mouseover', () => {
            isHovering = true; 

            header.style.backgroundColor = "#f0f0f0dc";
            header.style.top = '0px'; 
            clearTimeout(hideHeaderTimeout);
        });

        header.addEventListener('mouseout', () => {
            isHovering = false; 

            startAutoHideSequence();
        });

        function startAutoHideSequence() {
            hideHeaderTimeout = setTimeout(() => {
                header.style.backgroundColor = '#ffffff8e'; 
                
                setTimeout(() => {
                    if (isHovering) { 
                        return;
                    }
                    header.style.top = '-50px'; 
                    header.style.backgroundColor = '#ffffff00'; 
                }, 1000); 
                
            }, 2000); 
        }


        function headerAni() {
            if (scrollY <= 50) {
                header.style.position = 'sticky';
                return;
            }
            
            header.style.position = 'fixed';
            clearTimeout(hideHeaderTimeout); 

            header.style.backgroundColor = '#f0f0f0dc';
            header.style.top = '0px'; 
            header.style.transition = 'transform 0.5s ease-in-out, background-color 0.5s ease-in-out'; 

            if (!isHovering) {
                startAutoHideSequence();
            }
        }

        window.addEventListener('scroll', headerAni);


         function changePageBtnHome() {
            slidingImage.classList.add('slide-animation');
            UlHome.style.cursor = 'no-drop';
            UlAbout.style.cursor = 'no-drop';
            UlContact.style.cursor = 'no-drop';
            navLine.style.left = '0px'
            navLine.style.transition = "all 0.3s ease-in-out"
            setTimeout(() => {
                homePage.style.display = 'block';
                aboutPage.style.display = 'none';
                contactPage.style.display = 'none';
                window.scrollTo(0, 0); 
            }, 1250); 

            setTimeout(() => {
                slidingImage.classList.remove('slide-animation');
                slidingImage.style.transform = 'translateX(0vw)';
                UlHome.style.cursor = 'pointer';
                UlAbout.style.cursor = 'pointer';
                UlContact.style.cursor = 'pointer';
                headerAni();
            }, 2500); 
        };
        function changePageBtnAbout() {
            slidingImage.classList.add('slide-animation');
            UlAbout.style.cursor = 'no-drop';
            UlHome.style.cursor = 'no-drop';
            UlContact.style.cursor = 'no-drop';
            navLine.style.left = '70px'
            navLine.style.transition = "all 0.3s ease-in-out"
            setTimeout(() => {
                homePage.style.display = 'none';
                aboutPage.style.display = 'block';
                contactPage.style.display = 'none';
                window.scrollTo(0, 0);
            }, 1250); 

            setTimeout(() => {
                slidingImage.classList.remove('slide-animation');
                slidingImage.style.transform = 'translateX(0vw)';
                UlHome.style.cursor = 'pointer';
                UlAbout.style.cursor = 'pointer';
                UlContact.style.cursor = 'pointer';
                headerAni();
                
            }, 2500); 
        };
         function changePageBtnContact() {
            slidingImage.classList.add('slide-animation');
            UlHome.style.cursor = 'no-drop';
            UlAbout.style.cursor = 'no-drop';
            UlContact.style.cursor = 'no-drop';
            navLine.style.left = '140px'
            navLine.style.transition = "all 0.3s ease-in-out"
            setTimeout(() => {
                homePage.style.display = 'none';
                aboutPage.style.display = 'none';
                contactPage.style.display = 'block';
                window.scrollTo(0, 0);
            }, 1250); 

            setTimeout(() => {
                slidingImage.classList.remove('slide-animation');
                slidingImage.style.transform = 'translateX(0vw)';
                UlHome.style.cursor = 'pointer';
                UlAbout.style.cursor = 'pointer';
                UlContact.style.cursor = 'pointer';
                headerAni();
            }, 2500); 
        };

        function viewMore(){
            window.scrollTo(0,500)
        }
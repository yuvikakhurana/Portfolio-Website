// MENU SHOW

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show')
        })
    }
 
}

showMenu('nav-toggle', 'nav-menu')



// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* 🌙 DARK THEME TOGGLE */
const themeButton = document.querySelector('.change-theme')

// Check if button exists (avoid errors if not on page)
if (themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme')
    })
}



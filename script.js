// ===============================
// Current Year
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();


// ===============================
// Sticky Header
// ===============================
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
});


// ===============================
// Mobile Menu
// ===============================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});


// ===============================
// Hero Typewriter
// ===============================
const roles = [
    "I am Electrical Engineer",
];

const typed = document.getElementById("typed");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole(){

    const current = roles[roleIndex];

    typed.textContent = current.substring(0,charIndex);

    if(!deleting){

        charIndex++;

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeRole,1500);

            return;
        }

    }else{

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeRole,deleting ? 40 : 90);
}

typeRole();


// ===============================
// Section Heading Typewriter
// ===============================
const headings = document.querySelectorAll(".typed-heading");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        if(entry.target.dataset.done) return;

        entry.target.dataset.done = true;

        const text = entry.target.dataset.text;

        let i = 0;

        function write(){

            entry.target.textContent = text.substring(0,i);

            i++;

            if(i<=text.length){

                setTimeout(write,55);

            }

        }

        write();

    });

},{
    threshold:0.25
});

headings.forEach(item=>observer.observe(item));


// ===============================
// Stats Dropdown (Desktop + Mobile)
// ===============================
document.querySelectorAll(".stat-item").forEach(item=>{

    const dropdown = item.querySelector(".stat-dropdown");

    // Desktop Hover
    item.addEventListener("mouseenter",()=>{
        dropdown.classList.add("show");
    });

    item.addEventListener("mouseleave",()=>{
        dropdown.classList.remove("show");
    });

    // Mobile Click
    item.addEventListener("click",(e)=>{

        if(window.innerWidth <= 860){

            e.stopPropagation();

            document.querySelectorAll(".stat-dropdown").forEach(menu=>{

                if(menu!==dropdown){
                    menu.classList.remove("show");
                }

            });

            dropdown.classList.toggle("show");

        }

    });

});


// Close Mobile Dropdown
document.addEventListener("click",()=>{

    if(window.innerWidth <= 860){

        document.querySelectorAll(".stat-dropdown").forEach(menu=>{
            menu.classList.remove("show");
        });

    }

});

// ================================
// Stats Dropdown (Always On Top)
// ================================

const statItems = document.querySelectorAll(".stat-item");

statItems.forEach(item => {

    const dropdown = item.querySelector(".stat-dropdown");

    item.addEventListener("mouseenter", () => {

        const rect = item.getBoundingClientRect();

        dropdown.style.position = "fixed";
        dropdown.style.left = (rect.left + rect.width / 2) + "px";
        dropdown.style.top = (rect.bottom + 12) + "px";
        dropdown.style.transform = "translateX(-50%)";
        dropdown.style.zIndex = "99999999";

        dropdown.classList.add("show");

    });

    item.addEventListener("mouseleave", () => {

        dropdown.classList.remove("show");

    });

});

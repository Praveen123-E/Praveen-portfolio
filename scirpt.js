/* =====================================================
                    CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =====================================================
                    SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".summary-card, " +
    ".skill-card, " +
    ".timeline-item, " +
    ".experience-card, " +
    ".certificate-card, " +
    ".achievement-card, " +
    ".project-card, " +
    ".resume-card, " +
    ".contact-card"
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


function revealOnScroll() {

    const windowHeight = window.innerHeight;


    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < windowHeight - 80) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



/* =====================================================
                    ACTIVE NAVBAR
===================================================== */

const sections =
    document.querySelectorAll("section");


const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 100;

        const sectionHeight =
            section.clientHeight;


        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
                MOBILE NAVBAR CLOSE
===================================================== */

const mobileLinks =
    document.querySelectorAll(
        ".navbar-nav .nav-link"
    );


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const navbar =
            document.querySelector(
                ".navbar-collapse"
            );


        if (
            navbar.classList.contains("show")
        ) {

            const bsCollapse =
                new bootstrap.Collapse(navbar);

            bsCollapse.hide();

        }

    });

});



/* =====================================================
                    COUNTER
===================================================== */

const counters =
    document.querySelectorAll(".counter");


let counterStarted = false;


function startCounter() {

    if (counterStarted) {

        return;

    }


    const achievementSection =
        document.querySelector(
            ".achievement-section"
        );


    if (!achievementSection) {

        return;

    }


    const sectionTop =
        achievementSection.getBoundingClientRect().top;


    if (
        sectionTop <
        window.innerHeight - 100
    ) {

        counterStarted = true;


        counters.forEach((counter) => {

            const target =
                Number(
                    counter.getAttribute(
                        "data-target"
                    )
                );


            let current = 0;


            const increment =
                target / 50;


            function updateCounter() {

                current += increment;


                if (current < target) {

                    counter.textContent =
                        Math.ceil(current) + "+";


                    setTimeout(
                        updateCounter,
                        30
                    );

                } else {

                    counter.textContent =
                        target + "+";

                }

            }


            updateCounter();

        });

    }

}


window.addEventListener(
    "scroll",
    startCounter
);


startCounter();
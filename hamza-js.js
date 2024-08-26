let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjust this value if needed
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['Data Analyst'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
 	 
const serviceButtons = document.querySelectorAll('.service-button');
const mainServicesSection = document.getElementById("main-services");
const analysisServicesSection = document.getElementById("analysis-services");
const analystServicesSection = document.getElementById("analyst-services");
const allServicesSection = document.getElementById("all-services");
        // Show Data Analyst services by default
        analystServicesSection.classList.add('show');
        document.getElementById("data-analyst").classList.add('active');

        serviceButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault(); 
                const targetId = button.dataset.target;
                const targetServices = document.getElementById(targetId);
                const activeServices = document.querySelector('.hidden-services.show');

                // Remove active class from previously active button
                const activeButton = document.querySelector('.service-button.active');
                if (activeButton) {
                    activeButton.classList.remove('active');
                }

                // Add active class to the clicked button
                button.classList.add('active');

                if (activeServices) {
                    mainServicesSection.appendChild(activeServices);
                    activeServices.classList.remove('show');
                }

                // Get the hidden services section and add the necessary boxes
                if (targetId === "analysis-services") {
                    analysisServicesSection.innerHTML = `
                        <div class="service-box">
                            <i class="service-icon fas fa-database"></i>
                            <h3 class="service-title">Web Research</h3>
                            <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="service-box">
                            <i class="service-icon fas fa-chart-pie"></i>
                            <h3 class="service-title">CRM Data Entry,</h3>
                            <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="service-box">
                            <i class="service-icon fas fa-chart-line"></i>
                            <h3 class="service-title">Contact Details from Websites,</h3>
                            <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
 <div class="service-box">
                            <i class="service-icon fas fa-code"></i>
                            <h3 class="service-title">PDF to MS Excel/Word</h3>
                            <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="service-box">
                            <i class="service-icon fas fa-cogs"></i>
                            <h3 class="service-title">                       
						Image to MS Excel/Word</h3>
                            <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="service-box">
                            <i class="service-icon fas fa-globe"></i>
                            <h3 class="service-title">Typing in Excel/Word</h3>
                            <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    `;
                } else if (targetId === "analyst-services") {
                    analystServicesSection.innerHTML = `
                        <div class="service-box">
                            <i class="service-icon fas fa-user-tie"></i>
                            <h3 class="service-title">PowerPoint Presentation</h3>
                            <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="service-box">
                            <i class="service-icon fas fa-database"></i>
                            <h3 class="service-title">Excel Dashboard</h3>
                            <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="service-box">
                            <i class="service-icon fas fa-code"></i>
                            <h3 class="service-title">Excel Pivot tables, charts, and slicer</h3>
                            <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="service-box">
                            <i class="service-icon fas fa-chart-pie"></i>
                            <h3 class="service-title">Report Analysis</h3>
                            <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="service-box">
                            <i class="service-icon fas fa-cogs"></i>
                            <h3 class="service-title">Survey Analysis</h3>
                            <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="service-box">
                            <i class="service-icon fas fa-user-check"></i>
                            <h3 class="service-title">Google Spreadsheet</h3>
                            <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    `;
                } else if (targetId === "all-services") {
                    // Create and append each service box individually
                    allServicesSection.innerHTML = ''; // Clear previous content

                    const servicesData = [
                        { icon: "fas fa-database", title: "Web Research", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { icon: "fas fa-chart-pie", title: "CRM Data Entry,", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { icon: "fas fa-chart-line", title: "Typing in Excel/Word,", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { icon: "fas fa-code", title: "Contact Details from Websites,", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { icon: "fas fa-cogs", title: "PDF to MS Excel/Word,", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { icon: "fas fa-globe", title: "Image to MS Excel/Word", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { icon: "fas fa-user-tie", title: "Excel Dashboard", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { icon: "fas fa-database", title: "Excel Pivot tables, charts, and slicer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { icon: "fas fa-code", title: "Data Reporting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { icon: "fas fa-chart-pie", title: "Report Analysis", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { icon: "fas fa-cogs", title: "Survey Analysis", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { icon: "fas fa-user-check", title: "Google Spreadsheet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
                    ];

                    servicesData.forEach(service => {
                        const serviceBox = document.createElement('div');
                        serviceBox.classList.add('service-box');
                        serviceBox.innerHTML = `
                            <i class="service-icon ${service.icon}"></i>
                            <h3 class="service-title">${service.title}</h3>
                            <p class="service-description">${service.description}</p>
                        `;
                        allServicesSection.appendChild(serviceBox);
                    });
                }

                mainServicesSection.appendChild(targetServices); 
                targetServices.classList.add('show');
            });
        });
		

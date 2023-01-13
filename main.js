var slider = document.querySelector(".slider");
const front = document.getElementById("front");
const SLIDING = 1;
const FLEX = 0;
skillsState = SLIDING;
const upFades = document.querySelectorAll(".fade-up");
const projects = document.querySelectorAll(".project-wrapper");
const schools = document.querySelectorAll(".school");
const skills = document.querySelector('#skills');
const email = document.querySelector('#form');

console.log(upFades);

slider.addEventListener("click", function () {
    var sliderWrapper = document.getElementById("slider-wrapper");
    sliderWrapper.style.animation = "fade 2s linear forwards, fade 2s linear 2s reverse forwards";
    var sliderSpans = document.querySelectorAll(".skill");

    if (sliderSpans.length == 9) 
    {
        // Let the slider fade out
        setTimeout(function () {
        slider.style.transformStyle = "flat";
        slider.style.display = "flex";
        slider.style.flexWrap = "wrap";
        slider.style.justifyContent = "center";
        slider.style.width ="350px";
        slider.style.height = "auto";
        slider.style.gap="20px";
        slider.style.margin="auto";
        slider.style.animation = "none";
        document.getElementById("languages").style.display = "none";
        sliderSpans.forEach((skill) => {
            skill.classList.remove("skill");
            })
        }, 2000);

        setTimeout(function () {
            sliderWrapper.style.animation ="none";
        }, 4000);
    } 
    else 
    {
        // Let the list of skills fade out
        setTimeout(function () {
            slider.style.transformStyle = "preserve-3d";
            slider.style.width ="100px";
            slider.style.height = "100px";
            slider.style.margin ="160px 120px";
            slider.style.animation = "rotate 20s linear infinite";
            document.getElementById("languages").style.display = "unset";
            document.querySelectorAll(".slider span:not(:first-child)").forEach((skill) => {
                skill.classList.add("skill");
                })
        }, 2000);

        setTimeout(function () {
            sliderWrapper.style.animation = "none";
        }, 4000);
    }
});

const titleOptions = {
    threshold: 0,
    rootMargin:'0px 0px -70% 0px'
};

const itemOptions = {
    threshold: 0,
    rootMargin: '0px 0px -50% 0px'
};

const titleAppearOnScroll = new IntersectionObserver(function 
    (entries, appearOnScroll) {
        entries.forEach(entry => {
            // If not intersecting, return and do nothing
            if (!entry.isIntersecting) {
                return;
            }
             else {
                // Otherwise add the neccessary effect to appear
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
             }
        });
}, 
titleOptions);

const itemAppear = new IntersectionObserver(function
    (entries, projectAppear){
        entries.forEach(entry => {
            // If not intersecting, return and do nothing
            if (!entry.isIntersecting) {
                return;
            }
             else {
                // Otherwise add the neccessary effect to appear
                entry.target.classList.add("appear");
                itemAppear.unobserve(entry.target);
             }
        });
}, itemOptions);


upFades.forEach(fade => {
    titleAppearOnScroll.observe(fade);
});

projects.forEach(project => {
    itemAppear.observe(project);
});

schools.forEach(school => {
    itemAppear.observe(school);
}) ;

itemAppear.observe(skills);

itemAppear.observe(email);
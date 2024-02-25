document.addEventListener('DOMContentLoaded', function() {
    var Instagram = document.getElementById('instagram-id');
    var Linkedin = document.getElementById('linkedin-id');
    var Github = document.getElementById('github-id');
    var Whatsapp = document.getElementById('whatsapp-id');


    Instagram.addEventListener('click', function(){
        location.href = "https://www.instagram.com/_irvantfq_/";
    });
    Linkedin.addEventListener('click', function(){
        location.href = "https://www.linkedin.com/in/muhammad-irvan-taufiq-781721286/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
    });
    Github.addEventListener('click', function(){
        location.href = "https://github.com/ervanteee";
    });
    Whatsapp.addEventListener('click', function(){
        location.href = "https://api.whatsapp.com/send/?phone=%2B628176580755&text&type=phone_number&app_absent=0";
    });

});



document.addEventListener('DOMContentLoaded', function() {
    var about = document.getElementById('about-id');
    var home = document.getElementById('home-id');
    var project = document.getElementById('project-id');
    var contact = document.getElementById('contact-id');

    
    var bgSkills = document.getElementsByClassName('bg-skills')[0];
    var bgHome = document.getElementsByClassName('bg-home')[0]; 
    var bgProject = document.getElementsByClassName('bg-project')[0];
    var bgContact = document.getElementsByClassName('contact-text')[0];


    window.addEventListener('scroll', function() {
        var bgContactPosition = bgContact.getBoundingClientRect().top; 
        var bgSkillsOffset = bgSkills.offsetHeight;
        var bgHomeOffset = bgHome.offsetHeight;
        var bgProjectOffset = bgProject.offsetHeight;
        var bgContactOffset = bgContact.offsetHeight;

        console.log("home")
        console.log(bgHomeOffset)

        console.log("skills")

        console.log(bgSkillsOffset)

        console.log("project")

        console.log(bgProjectOffset)

        console.log("contact")

        console.log(bgContactPosition)
        console.log(bgContactOffset)

        console.log("scroll")

        console.log(window.scrollY)

        // var bgHomePosition = bgHome.getBoundingClientRect().top; 
        // var bgProjectPosition = bgProject.getBoundingClientRect().top; 
        // console.log(bgHomePosition)
        // console.log(bgSkillsPosition)
        // console.log(bgProjectPosition)


        // console.log(bgHomePosition < bgSkillsPosition && bgHomePosition < window.innerHeight/2)


        if (bgHomeOffset > window.scrollY && bgHomeOffset > bgSkillsOffset) {
            home.style.backgroundColor = "red";
            about.style.backgroundColor = "";
            project.style.backgroundColor = "";
            contact.style.backgroundColor = "";

        } else if (bgSkillsOffset < window.scrollY && bgProjectOffset > window.scrollY){
            about.style.backgroundColor = "red";
            home.style.backgroundColor = "";
            project.style.backgroundColor = "";
            contact.style.backgroundColor = "";

        } else if(bgProjectOffset < window.scrollY && bgProjectOffset < bgContactPosition){
            project.style.backgroundColor = "red";
            home.style.backgroundColor = "";
            about.style.backgroundColor = "";
            contact.style.backgroundColor = "";
            
        } else if(window.scrollY > 1880){
            contact.style.backgroundColor = "red";
            home.style.backgroundColor = "";
            project.style.backgroundColor = "";
            about.style.backgroundColor = "";
        } else {
            home.style.backgroundColor = "";
            project.style.backgroundColor = "";
            about.style.backgroundColor = "";
            contact.style.backgroundColor = "";

        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
const download = document.getElementById('fileRequest');

    download.addEventListener('click', function(){
        window.location.href = 'cv/Muhammad-Irvan-Taufiqurrahman-CV.pdf';
    })
});

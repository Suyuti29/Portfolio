// alert ('Selamat datang di portfolio Muhammad Suyuti')


function toggleDetail(e){
    const target = $(e.target)

    if($(target).hasClass("active")){
        $(target).html("More Info").removeClass("active")
    } else{
        $(target).html("less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()

}

// script.js
document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("backToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 3500) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });

    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});




// function onFormSubmit(e){
//     e.preventDefault()
//     const email = $("#inp_email")
//     const subject = $("#inp_subject")
//     const message = $("#inp_message")

//     if(!$(email).val()){
//         alert("Email is required")
//     } else if(!$(subject).val()){
//         alert("Subject is required")
//     } else if(!$(message).val()){
//         alert ("Message is required")
//     } else{
//         alert("Form Submitted")
//         $(email).val("")
//         $(subject).val("")
//         $(message).val("")
//     }
// }






// SECTION-1 PARALLAX EFFECT
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * .5 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})

$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
})


// SECTION-3 STORY TELLING
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#section-3-main",
        // markers: true,
        start: "38% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true
    }
});
tl
    .to(".section-3-text", {
        top: "-2%",
    }, 'a')

    .to("#section-3-card-one", {
        top: "5%",
    }, 'a')
    .to("#section-3-card-two", {
        top: "100%"
    }, 'a')

    .to("#section-3-card-two", {
        top: "7%"
    }, 'b')
    .to("#section-3-card-one", {
        width: "50%",
        height: "60vh"
    }, 'b')
    .to("#section-3-card-three", {
        top: "100%"
    }, 'b')

    .to("#section-3-card-three", {
        top: "10%"
    }, 'c')
    .to("#section-3-card-two", {
        width: "55%",
        height: "65vh"
    }, 'c')
    .to("#section-3-card-four", {
        top: "100%"
    }, 'c')

    .to("#section-3-card-four", {
        top: "15%"
    }, 'd')
    .to("#section-3-card-three", {
        width: "60%",
        height: "70vh"
    }, 'd')
    .to("#section-3-card-five", {
        top: "100%"
    }, 'd')

    .to("#section-3-card-five", {
        top: "20%"
    }, 'e')
    .to("#section-3-card-four", {
        width: "65%",
        height: "75vh"
    }, 'e')
    .to("#section-3-card-six", {
        top: "100%"
    }, 'e')
    



    .to("#section-3-card-six", {
        top: "30%"
    }, 'f')
    .to("#section-3-card-five", {
        width: "70%",
        height: "80vh"
    }, 'f')
    .to("#section-3-card-seven", {
        top: "100%"
    }, 'f')

    .to("#section-3-card-seven", {
        top: "45%"
    }, 'g')
    .to("#section-3-card-six", {
        width: "75%",
        height: "75vh"
    }, 'g')
    .to("#section-3-card-eight", {
        top: "110%"
    }, 'g')

    .to("#section-3-card-eight", {
        top: "50%"
    }, 'h')
    .to("#section-3-card-seven", {
        width: "80%",
        height: "90vh"
    }, 'h')
    .to("#section-3-card-nine", {
        top: "100%"
    }, 'h')


// SECTION-5 SEVAS OR DARSHAN

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("section-5-column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("section-5-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


// SECTION-7 (OWL CAROUSEL SCRIPT)
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    // autoplay: true,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 2
        }
    }
})
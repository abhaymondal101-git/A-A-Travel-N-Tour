
$( document ).ready(function() {
   
    // Package-Place-start=====================================
    $('#package-place').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: false,
        items: 1,
        responsive: {
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            768:{
                items:3
            },
            1000:{
                items: 5
            }
        }
    });

    // Client-start================================================
    $('.client-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // gallery section start==========================
    const filterLinks = Array.from(document.querySelectorAll(".link"));
    const allImages = Array.from(document.querySelectorAll(".gallery_image"));
    const activeBox = document.querySelector(".active_box");
    let windowWidth = 120;
    window.addEventListener("resize", () => {
    windowWidth = window.innerWidth > 768 ? 120 : 70;
    console.log(windowWidth);
    });

    filterLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        console.log(getComputedStyle(link).width);
        let activeBoxPosition =
        index * Number(getComputedStyle(link).width.slice(0, -2));
        activeBox.style.transform = `translateX(${activeBoxPosition}px)`;
        activeBox.style.width = getComputedStyle(link).width;

        filterImages(link.getAttribute("data-filter"));
    });
    });

    function filterImages(imageFilterType) {
    allImages.forEach((image) => {
        let imageType = image.getAttribute("data-image-type");
        if (!imageType.includes(imageFilterType) && imageFilterType !== "*") {
        image.classList.add("hide_image");
        } else {
        image.classList.remove("hide_image");
        }
    });
    }


    // Hotel photo carousel
    $('.hotel-photo').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1.5
            }
        }
    });
    

    

});




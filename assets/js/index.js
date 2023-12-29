
/*============================================================ */
const mainHeader = document.querySelector(".main-header");
const scrollLogo = document.querySelector(".scroll-logo");
document.addEventListener("scroll",(e)=>{
    let valScroll1 = document.documentElement.scrollTop;
    if(valScroll1>10){
        mainHeader.style.backgroundColor="#303030";
        mainHeader.style.top=0;
        scrollLogo.style.height=85+"px";
    }
    else{
        mainHeader.style.backgroundColor="transparent";
        mainHeader.style.top=34+"px";
        scrollLogo.style.height="100%";
    }
})

const hamImg = document.querySelector(".ham-img img");
const navUlitem = document.querySelector(".nav-mobile-lower")
hamImg.addEventListener("click",()=>{
  navUlitem.classList.toggle("translateCss");
});

/*============================ package js start ==================================*/
const hajjCard = document.querySelectorAll(".hajj-card");
hajjCard.forEach(item=>{
    item.addEventListener("mouseover",()=>{
        let val1 = item.children[1];
        val1.style.height="45px";
        val1.style.padding="11px";
    });
})
hajjCard.forEach(item=>{
    item.addEventListener("mouseout",()=>{
        let val1 = item.children[1];
        val1.style.height="0px";
        val1.style.padding="0px";
    });
})
/*======================== package js end =========================*/

// ======================== Navtab start ====================================

// function openCity(cityName) {
//   var i;
//   var x = document.getElementsByClassName("city");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   document.getElementById(cityName).style.display = "block";  
// }

// ======================== Navtab end ====================================

// ======================== Gallery script start ====================================

// const html = document.querySelector('html');
// html.setAttribute('data-bs-theme', 'dark');

// const galleryGrid = document.querySelector(".gallery-grid");
// const links = galleryGrid.querySelectorAll("a");
// const imgs = galleryGrid.querySelectorAll("img");
// const lightboxModal = document.getElementById("lightbox-modal");
// const bsModal = new bootstrap.Modal(lightboxModal);
// const modalBody = lightboxModal.querySelector(".lightbox-content");

// function createCaption (caption) {
//   return `<div class="carousel-caption d-none d-md-block">
//       <h4 class="m-0">${caption}</h4>
//     </div>`;
// }

// function createIndicators (img) {
//   let markup = "", i, len;

//   const countSlides = links.length;
//   const parentCol = img.closest('.col');
//   const curIndex = [...parentCol.parentElement.children].indexOf(parentCol);

//   for (i = 0, len = countSlides; i < len; i++) {
//     markup += `
//       <button type="button" data-bs-target="#lightboxCarousel"
//         data-bs-slide-to="${i}"
//         ${i === curIndex ? 'class="active" aria-current="true"' : ''}
//         aria-label="Slide ${i + 1}">
//       </button>`;
//   }

//   return markup;
// }

// function createSlides (img) {
//   let markup = "";
//   const currentImgSrc = img.closest('.gallery-item').getAttribute("href");

//   for (const img of imgs) {
//     const imgSrc = img.closest('.gallery-item').getAttribute("href");
//     const imgAlt = img.getAttribute("alt");

//     markup += `
//       <div class="carousel-item${currentImgSrc === imgSrc ? " active" : ""}">
//         <img class="d-block img-fluid w-100" src=${imgSrc} alt="${imgAlt}">
//         ${imgAlt ? createCaption(imgAlt) : ""}
//       </div>`;
//   }

//   return markup;
// }

// function createCarousel (img) {
//     const markup = `
//       <!-- Lightbox Carousel -->
//       <div id="lightboxCarousel" class="carousel slide carousel-fade" data-bs-ride="true">
//         <!-- Indicators/dots -->
//         <div class="carousel-indicators">
//           ${createIndicators(img)}
//         </div>
//         <!-- Wrapper for Slides -->
//         <div class="carousel-inner justify-content-center mx-auto">
//           ${createSlides(img)}
//         </div>
//         <!-- Controls/icons -->
//         <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Previous</span>
//         </button>
//         <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//       </div>
//       `;
  
//     modalBody.innerHTML = markup;
//   }

// for (const link of links) {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       const currentImg = link.querySelector("img");
//       const lightboxCarousel = document.getElementById("lightboxCarousel");
  
//       if (lightboxCarousel) {
//         const parentCol = link.closest('.col');
//         const index = [...parentCol.parentElement.children].indexOf(parentCol);
  
//         const bsCarousel = new bootstrap.Carousel(lightboxCarousel);
//         bsCarousel.to(index);
//       } else {
//         createCarousel(currentImg);
//       }
  
//       bsModal.show();
//     });
// }

$(document).ready(function() {
    var $gallery = $('#gallery');
    var $boxes = $('.revGallery-anchor');
    $boxes.hide(); 

    $gallery.imagesLoaded( {background: true}, function() {
    $boxes.fadeIn();

        $gallery.isotope({
            // options
            sortBy : 'original-order',
            layoutMode: 'fitRows',
            itemSelector: '.revGallery-anchor',
            stagger: 30,
        });
    });	

     $('button').on( 'click', function() {
         var filterValue = $(this).attr('data-filter');
          $('#gallery').isotope({ filter: filterValue });
          $gallery.data('lightGallery').destroy(true);
        $gallery.lightGallery({
              selector: filterValue.replace('*','')
        });
    });
});

$(document).ready(function() {
    $("#gallery").lightGallery({
    
}); 
});

//button active mode
$('.button').click(function(){
$('.button').removeClass('is-checked');
$(this).addClass('is-checked');
});


//CSS Gram Filters on Mouse enter
$("#gallery a .nak-gallery-poster").addClass("inkwell");

$("#gallery a").on({
mouseenter : function() {
$(this).find(".nak-gallery-poster").removeClass("inkwell").addClass("walden");
},
mouseleave : function() {
$(this).find(".nak-gallery-poster").removeClass("walden").addClass("inkwell");
}
}); 
// ======================== Gallery script end ====================================
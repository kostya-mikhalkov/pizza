export function slider() {
    const prevBtn = document.querySelector(".slider__prev"),
    nextBtn = document.querySelector(".slider__next"),
    slide = document.querySelectorAll(".offer__slide"),
    slideWrapper = document.querySelector(".slider__box");
    let countSlide = 0,
    indexSlide = 0;
    function updateSlide() {
        slide.forEach((item, ind) => {
            item.classList.remove("active_slide", "not-active_slide");
        });
        slide.forEach((item, ind) => {
            if (ind == indexSlide || ind - 1 == indexSlide) {
                item.classList.add("active_slide");
            } else {
                item.classList.add("not-active_slide")
            }
        })

    }
    updateSlide();
    prevBtn.addEventListener("click", function(e) {
        e.preventDefault();
        indexSlide--;
        if (indexSlide < 0) {
            indexSlide = slide.length - 1;
        }
        console.log(indexSlide)
        if (countSlide < 510) {
            countSlide = slide.length * 510;
        }
        countSlide -= 510;
        slideWrapper.style.left = -countSlide + 'px';
        updateSlide()
    });
    nextBtn.addEventListener("click", function(e) {
        e.preventDefault();
        indexSlide++;
        if (indexSlide > slide.length - 1) {
            indexSlide = 0;
        }
        console.log(indexSlide)
        if (countSlide > (slide.length - 2) * 510) {
            countSlide = -510;
        }
        countSlide += 510;
        slideWrapper.style.left = -countSlide + 'px';
        updateSlide();
    });
}
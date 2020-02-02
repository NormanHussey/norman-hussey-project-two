$(function() {

    // Scroll position variables
    const $window = $(window);
    let windowHeight = $window.height();
    let scrollPosition = $window.scrollTop();
    let currentScroll = $window.height() + scrollPosition;

    // Section Objects
    const aboutSection = {};
    aboutSection.$element = $('.about .contentContainer');
    aboutSection.hasAnimated = false;

    const midNavSection = {};
    midNavSection.$lis = $('.midNav li');
    for (let item in midNavSection.$lis) {
        item.hasAnimated = false;
    }

    const photoSection = {};
    photoSection.$firstImg = $('.photos .card:first-of-type .imgContainer');
    photoSection.$firstContent = $('.photos .card:first-of-type .contentContainer');
    photoSection.$firstImg.hasAnimated = false;
    photoSection.$secondImg = $('.photos .card:nth-of-type(even) .imgContainer');
    photoSection.$secondContent = $('.photos .card:nth-of-type(even) .contentContainer');
    photoSection.$secondImg.hasAnimated = false;

    const journeySection = {};
    journeySection.$img = $('.journey .imgContainer');
    journeySection.$content = $('.journey .contentContainer');
    journeySection.hasAnimated = false;

    const gallerySection = {};
    gallerySection.$lis = $('.gallery li');
    gallerySection.hasAnimated = false;

    // Function Declarations

    function calculatePositionValues() {
        windowHeight = $window.height();
        aboutSection.top = aboutSection.$element.offset().top;
        for (let item of midNavSection.$lis) {
            item.top = item.offsetTop;
        }
        photoSection.firstCardTop = photoSection.$firstImg.offset().top;
        photoSection.secondCardTop = photoSection.$secondImg.offset().top;
        journeySection.$img.top = journeySection.$img.offset().top;
        gallerySection.top = gallerySection.$lis[0].offsetTop;
    }

    function checkCurrentPosition() {
        if (currentScroll >= aboutSection.top) {
            aboutSection.hasAnimated = true;
        }
    
        if (currentScroll >= midNavSection.$lis[0].top) {
            midNavSection.$lis[0].hasAnimated = true;
            midNavSection.$lis[1].hasAnimated = true;
            midNavSection.$lis[2].hasAnimated = true;
            midNavSection.$lis[3].hasAnimated = true;
        }

        if (currentScroll >= photoSection.firstCardTop) {
            photoSection.$firstImg.hasAnimated = true;
            photoSection.$secondImg.hasAnimated = true;
        }

        if (currentScroll >= journeySection.$img.top) {
            journeySection.hasAnimated = true;
        }

        if (currentScroll >= gallerySection.top) {
            gallerySection.hasAnimated = true;
        }
    }

    // Call functions on page load

    calculatePositionValues();
    checkCurrentPosition();

    // Add resize and scroll event listeners to window

    $window.on('resize', calculatePositionValues);

    $window.on('scroll', function (e) {
        scrollPosition = $window.scrollTop();
        currentScroll = windowHeight + scrollPosition;

        if (currentScroll >= aboutSection.top && !aboutSection.hasAnimated) {
            aboutSection.$element.css('animation', 'slideInFromRightAnim 1s ease 0s 1');
            aboutSection.hasAnimated = true;
        }

        if (currentScroll >= midNavSection.$lis[0].top && !midNavSection.$lis[0].hasAnimated) {
            midNavSection.$lis[0].style.animation = 'slideInFromLeftAnim 1s ease 0s 1';
            midNavSection.$lis[1].style.animation = 'slideInFromRightAnim 1s ease 0s 1';
            midNavSection.$lis[0].hasAnimated = true;
        }

        if (currentScroll >= midNavSection.$lis[2].top && !midNavSection.$lis[2].hasAnimated) {
            midNavSection.$lis[2].style.animation = 'slideInFromLeftAnim 1s ease 0s 1';
            midNavSection.$lis[3].style.animation = 'slideInFromRightAnim 1s ease 0s 1';
            midNavSection.$lis[2].hasAnimated = true;
        }

        if (currentScroll >= photoSection.firstCardTop && !photoSection.$firstImg.hasAnimated) {
            photoSection.$firstImg.css('animation', 'fadeInAnim 1.5s ease 0s 1');
            photoSection.$firstContent.css('animation', 'slideInFromRightAnim 1s ease 0s 1');
            photoSection.$firstImg.hasAnimated = true;
        }

        if (currentScroll >= photoSection.secondCardTop && !photoSection.$secondImg.hasAnimated) {
            photoSection.$secondImg.css('animation', 'fadeInAnim 1.5s ease 0s 1');
            photoSection.$secondContent.css('animation', 'slideInFromLeftAnim 1s ease 0s 1');
            photoSection.$secondImg.hasAnimated = true;
        }

        if (currentScroll >= journeySection.$img.top && !journeySection.hasAnimated) {
            journeySection.$img.css('animation', 'slideInFromLeftAnim 1s ease 0s 1');
            journeySection.$content.css('animation', 'slideInFromRightAnim 1s ease 0s 1');
            journeySection.hasAnimated = true;
        }

        if (currentScroll >= gallerySection.top && !gallerySection.hasAnimated) {
            gallerySection.$lis[0].style.animation = 'fadeInAnim 1s ease 0s 1';
            gallerySection.$lis[1].style.animation = 'fadeInAnim 1.5s ease 0s 1';
            gallerySection.$lis[2].style.animation = 'fadeInAnim 2s ease 0s 1';
            gallerySection.hasAnimated = true;
        }

    });
});
$(function () {
    const $hamburger = $('.hamburger');
    const $menu = $('header ul');
    const $anchors = $('header ul a');

    const toggleNav = () => {
        $hamburger.toggleClass('openHamburger');
        $menu.toggleClass('open');
    };

    $hamburger.on('click', toggleNav);
    $anchors.on('click', toggleNav);
    
});
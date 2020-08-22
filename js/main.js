var MenuSwitcher1 = false;
var MenuSwitcher2 = false;
var MenuSwitcher3 = true;
var MenuSwitcher4 = false;
var MenuSwitcher5 = false;
var MenuSwitcher6 = false;

$('.menu-list1').on('click', function () {
    MenuSwitcher1 = !MenuSwitcher1;
    MenuSwitcher2 = MenuSwitcher3 = MenuSwitcher4 = MenuSwitcher5 = MenuSwitcher6 = false;

    if ($('.menu-list').hasClass('slider4-active')) {
        $('.menu-list').removeClass('slider4-active');
    }

    if (MenuSwitcher1) {
        $('.slider4-content').css('display', 'flex');
        $('.menu-list1').addClass('slider4-active');
        $('.slider4-list1, .slider4-name1, .slider4-like1, .slider4-price1, .slider4-comment1').css('display', 'block');
        $('.slider4-list2, .slider4-list3,.slider4-list4,.slider4-list5,.slider4-list6,' +
            '.slider4-name2, .slider4-name3,.slider4-name4,.slider4-name5,.slider4-name6,' +
            '.slider4-like2,.slider4-like3,.slider4-like4,.slider4-like5,.slider4-like6, ' +
            '.slider4-price2,.slider4-price3,.slider4-price4,.slider4-price5,.slider4-price6, ' +
            '.slider4-comment2,.slider4-comment3,.slider4-comment4,.slider4-comment5,.slider4-comment6').css('display', 'none');
    }
    else{
        $('.slider4-content').css('display', 'none');
    }
});

$('.menu-list2').on('click', function () {
    MenuSwitcher2 = !MenuSwitcher2;
    MenuSwitcher1 = MenuSwitcher3 = MenuSwitcher4 = MenuSwitcher5 = MenuSwitcher6 = false;

    if ($('.menu-list').hasClass('slider4-active')) {
        $('.menu-list').removeClass('slider4-active');
    }

    if (MenuSwitcher2) {
        $('.slider4-content').css('display', 'flex');
        $('.menu-list2').addClass('slider4-active');
        $('.slider4-list2, .slider4-name2, .slider4-like2, .slider4-price2, .slider4-comment2').css('display', 'block');
        $('.slider4-list1, .slider4-list3,.slider4-list4,.slider4-list5,.slider4-list6,' +
            '.slider4-name1, .slider4-name3,.slider4-name4,.slider4-name5,.slider4-name6,' +
            '.slider4-like1,.slider4-like3,.slider4-like4,.slider4-like5,.slider4-like6, ' +
            '.slider4-price1,.slider4-price3,.slider4-price4,.slider4-price5,.slider4-price6, ' +
            '.slider4-comment1,.slider4-comment3,.slider4-comment4,.slider4-comment5,.slider4-comment6').css('display', 'none');
    }
    else{
        $('.slider4-content').css('display', 'none');
    }
});

$('.menu-list3').on('click', function () {
    MenuSwitcher3 = !MenuSwitcher3;
    MenuSwitcher2 = MenuSwitcher1 = MenuSwitcher4 = MenuSwitcher5 = MenuSwitcher6 = false;

    if ($('.menu-list').hasClass('slider4-active')) {
        $('.menu-list').removeClass('slider4-active');
    }

    if (MenuSwitcher3) {
        $('.slider4-content').css('display', 'flex');
        $('.menu-list3').addClass('slider4-active');
        $('.slider4-list3, .slider4-name3, .slider4-like3, .slider4-price3, .slider4-comment3').css('display', 'block');
        $('.slider4-list2, .slider4-list1,.slider4-list4,.slider4-list5,.slider4-list6,' +
            '.slider4-name2, .slider4-name1,.slider4-name4,.slider4-name5,.slider4-name6,' +
            '.slider4-like2,.slider4-like1,.slider4-like4,.slider4-like5,.slider4-like6, ' +
            '.slider4-price2,.slider4-price1,.slider4-price4,.slider4-price5,.slider4-price6, ' +
            '.slider4-comment2,.slider4-comment1,.slider4-comment4,.slider4-comment5,.slider4-comment6').css('display', 'none');
    }
    else{
        $('.slider4-content').css('display', 'none');
    }
});

$('.menu-list4').on('click', function () {
    MenuSwitcher4 = !MenuSwitcher4;
    MenuSwitcher2 = MenuSwitcher3 = MenuSwitcher1 = MenuSwitcher5 = MenuSwitcher6 = false;

    if ($('.menu-list').hasClass('slider4-active')) {
        $('.menu-list').removeClass('slider4-active');
    }

    if (MenuSwitcher4) {
        $('.slider4-content').css('display', 'flex');
        $('.menu-list4').addClass('slider4-active');
        $('.slider4-list4, .slider4-name4, .slider4-like4, .slider4-price4, .slider4-comment4').css('display', 'block');
        $('.slider4-list2, .slider4-list3,.slider4-list1,.slider4-list5,.slider4-list6,' +
            '.slider4-name2, .slider4-name3,.slider4-name1,.slider4-name5,.slider4-name6,' +
            '.slider4-like2,.slider4-like3,.slider4-like1,.slider4-like5,.slider4-like6, ' +
            '.slider4-price2,.slider4-price3,.slider4-price1,.slider4-price5,.slider4-price6, ' +
            '.slider4-comment2,.slider4-comment3,.slider4-comment1,.slider4-comment5,.slider4-comment6').css('display', 'none');
    }
    else{
        $('.slider4-content').css('display', 'none');
    }
});

$('.menu-list5').on('click', function () {
    MenuSwitcher5 = !MenuSwitcher5;
    MenuSwitcher2 = MenuSwitcher3 = MenuSwitcher4 = MenuSwitcher1 = MenuSwitcher6 = false;

    if ($('.menu-list').hasClass('slider4-active')) {
        $('.menu-list').removeClass('slider4-active');
    }

    if (MenuSwitcher5) {
        $('.slider4-content').css('display', 'flex');
        $('.menu-list5').addClass('slider4-active');
        $('.slider4-list5, .slider4-name5, .slider4-like5, .slider4-price5, .slider4-comment5').css('display', 'block');
        $('.slider4-list2, .slider4-list3,.slider4-list4,.slider4-list1,.slider4-list6,' +
            '.slider4-name2, .slider4-name3,.slider4-name4,.slider4-name1,.slider4-name6,' +
            '.slider4-like2,.slider4-like3,.slider4-like4,.slider4-like1,.slider4-like6, ' +
            '.slider4-price2,.slider4-price3,.slider4-price4,.slider4-price1,.slider4-price6, ' +
            '.slider4-comment2,.slider4-comment3,.slider4-comment4,.slider4-comment1,.slider4-comment6').css('display', 'none');
    }
    else{
        $('.slider4-content').css('display', 'none');
    }
});

$('.menu-list6').on('click', function () {
    MenuSwitcher6 = !MenuSwitcher6;
    MenuSwitcher2 = MenuSwitcher3 = MenuSwitcher4 = MenuSwitcher5 = MenuSwitcher1 = false;

    if ($('.menu-list').hasClass('slider4-active')) {
        $('.menu-list').removeClass('slider4-active');
    }

    if (MenuSwitcher6) {
        $('.slider4-content').css('display', 'flex');
        $('.menu-list6').addClass('slider4-active');
        $('.slider4-list6, .slider4-name6, .slider4-like6, .slider4-price6, .slider4-comment6').css('display', 'block');
        $('.slider4-list2, .slider4-list3,.slider4-list4,.slider4-list5,.slider4-list1,' +
            '.slider4-name2, .slider4-name3,.slider4-name4,.slider4-name5,.slider4-name1,' +
            '.slider4-like2,.slider4-like3,.slider4-like4,.slider4-like5,.slider4-like1, ' +
            '.slider4-price2,.slider4-price3,.slider4-price4,.slider4-price5,.slider4-price1, ' +
            '.slider4-comment2,.slider4-comment3,.slider4-comment4,.slider4-comment5,.slider4-comment1').css('display', 'none');
    }
    else{
        $('.slider4-content').css('display', 'none');
    }
});
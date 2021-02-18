document.querySelector('.side__nav__items').addEventListener('click', e => {
  const item = e.target.closest('.item');
  if (item) {
    const index = [...e.currentTarget.children].indexOf(item);
    document.querySelectorAll('.block').forEach((n, i) => n.classList.toggle('active', i === index));
  }
});

$('.side__nav__items li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
});

$('.hire__btn').click(function() {
  $('.hire__us').addClass('active').siblings().removeClass('active');
  $('#item5').addClass('active').siblings().removeClass('active');
});

$('.button').click(function(){
  if($(this).find('.check').css("opacity") === '0') {
    $(this).find('.check').addClass('is-active__svg');
    $(this).css('border', '2px #0f33ff solid');
    $(this).css("background-color", '#0f33ff');
    $(this).find('.btn__text').css('margin-left', '5px');
  } else {
    $(this).find('.check').removeClass('is-active__svg');
    $(this).css('border', '2px #fff solid');
    $(this).css("background-color", 'transparent');
    $(this).find('.btn__text').css('margin-left', '0px');
  }
});

document.getElementById('about__img__left').onmouseenter = function() {
  document.getElementById('about__text__left').style.transform = 'translateY(50%)';
}

document.getElementById('about__img__left').onmouseleave = function() {
  document.getElementById('about__text__left').style.transform = 'translateY(0%)';
}

document.getElementById('about__img__mid').onmouseenter = function() {
  document.getElementById('about__text__mid').style.transform = 'translateY(50%)';
}

document.getElementById('about__img__mid').onmouseleave = function() {
  document.getElementById('about__text__mid').style.transform = 'translateY(0%)';
}

document.getElementById('about__img__right').onmouseenter = function() {
  document.getElementById('about__text__right').style.transform = 'translateY(50%)';
}

document.getElementById('about__img__right').onmouseleave = function() {
  document.getElementById('about__text__right').style.transform = 'translateY(0%)';
}

$('.name').focus(function(){
    $('.name__placeholder').addClass('has-value');
});

$('.email').focus(function(){
  $('.email__placeholder').addClass('has-value');
});

$('.name').blur(function(){
  $(".name__field").find('input[type="text"]').each(function () {
    if ($(this).val().length > 0) {
      $('.name__placeholder').addClass('has-value');
    } else {
      $('.name__placeholder').removeClass('has-value');
    }
});
});

$('.email').blur(function(){
  $(".email__field").find('input[type="text"]').each(function () {
    if ($(this).val().length > 0) {
      $('.email__placeholder').addClass('has-value');
    } else {
      $('.email__placeholder').removeClass('has-value');
    }
});
});



const blocks = document.querySelectorAll('.block');
const items = document.querySelectorAll('.item');

let step = 0;

function scrollTo(delta) {
  for (let i = 0; i < blocks.length; i++) {
    const elem = blocks[i];
    const item = items[i];
    setTimeout(function() {
      elem.classList.remove('active');
    item.classList.remove('active');
    }, 150);
    if (i == delta) {
      setTimeout(function() {
        elem.classList.add('active');
      item.classList.add('active');
      }, 175);
    }
  }
}

document.addEventListener('wheel', (e) => {
  if (e.deltaY < 0) {
    step -= 1;
    if (step < 0) { step = 0}
  }
  if (e.deltaY > 0) {
    step += 1;
    if (step > 5) { step = 4 }

  }

  setTimeout(scrollTo(step), 175);
});


 let swiper = new Swiper('.swiper-container', {
    speed: 600,
    loop: true,
    centeredSlides: true,
    effect: 'fade',
    allowTouchMove: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


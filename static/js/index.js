window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener('DOMContentLoaded', () => {
  // 获取所有 "navbar-burger" 元素
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // 为每个汉堡菜单添加点击事件
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // 获取目标菜单元素
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // 切换汉堡菜单和菜单的 active 状态
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

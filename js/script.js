

$(".btn").click(function () {
   $(".input").toggleClass("active").focus;
   $(this).toggleClass("animate");
   $(".input").val("");
});

$(document).ready(function () {
   $('.spoiler__title,.form__icon,.column__title').click(function (event) {
      if ($('.item__list,.item-form,.column__list').hasClass('one')) {
         $('.spoiler__title,.column__title').not($(this)).removeClass('active');
         $('.spanSpoiler,.column__list').not($(this).next()).slideUp(1000);
      }
      $('.item-avesome__text,.servis__image').toggleClass('open'),
         $(this).toggleClass('active').next().slideToggle(1000)
   });
   $('.form__icon_1').click(function (event) {
      $('#open').toggleClass('open')
   });
   $('.form__icon_2').click(function (event) {
      $('#click').toggleClass('click')
   });
   $('.form__icon_3').click(function (event) {
      $('#clickone').toggleClass('clickone')
   });
   $('.form__icon_4').click(function (event) {
      $('#clickto').toggleClass('clickto')
   });
});

$.widget('app.selectmenu', $.ui.selectmenu, {
   _drawButton: function () {
      this._super();
      var selected = this.element
         .find('[selected]')
         .lenght,
         placeholder = this.options.placeholder;

      if (!selected && placeholder) {
         this.buttonItem.text(placeholder);
      }
   }
})

$(document).ready(function () {
   $('.select').selectmenu({
      placeholder: 'Location'
   });

});

$(document).ready(function () {
   $('.form__input').click(function (event) {
      $('.ui-icon').toggleClass('click');

   });
});


$(document).ready(function(){
   $("#menu").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
});


function email_test(input) {
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
   Android: function Android() {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function Windows() {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function any() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
   }
};

function isIE() {
   ua = navigator.userAgent;
   var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
   return is_ie;
}

if (isIE()) {
   document.querySelector('body').classList.add('ie');
}

if (isMobile.any()) {
   document.querySelector('body').classList.add('touch');
}

function testWebP(callback) {
   var webP = new Image();

   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };

   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   }
});
// icon-user
var user_link = document.querySelector('.fa-angle-down_1');
var user_russ = document.querySelector('.top-header__link_1');
user_link.addEventListener("click", function (e) {
   user_russ.classList.toggle('_active'),
      user_link.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
   if (!e.target.closest('.top-header__lang')) {
      user_russ.classList.remove('_active');
   }
})
//=====================
var user_icon = document.querySelector('.fa-angle-down_2');
var user_menu = document.querySelector('.user-header__menu');
user_icon.addEventListener("click", function (e) {
   user_menu.classList.toggle('_open'),
      user_icon.classList.toggle('_open');
});
document.documentElement.addEventListener("click", function (e) {
   if (!e.target.closest('.user-header')) {
      user_menu.classList.remove('_open');
   }
})


//=========================

var iconMenu = document.querySelector(".icon-menu");

if (iconMenu != null) {
   var delay = 500;
   var body = document.querySelector("body");
   var menuBody = document.querySelector(".menu__body");
   iconMenu.addEventListener("click", function (e) {
      if (!body.classList.contains('_wait')) {
         //body_lock(delay);
         iconMenu.classList.toggle("_active");
         menuBody.classList.toggle("_active");
      }
   });
};

function menu_close() {
   var iconMenu = document.querySelector(".icon-menu");
   var menuBody = document.querySelector(".menu__body");
   iconMenu.classList.remove("_active");
   menuBody.classList.remove("_active");
} //=================


var move_array = [];
var move_objects = document.querySelectorAll("[data-move]");

if (move_objects.length > 0) {
   for (var _index10 = 0; _index10 < move_objects.length; _index10++) {
      var _el6 = move_objects[_index10];

      var data_move = _el6.getAttribute("data-move");

      if (data_move != "" || data_move != null) {
         _el6.setAttribute("data-move-index", _index10);

         move_array[_index10] = {
            parent: _el6.parentNode,
            index: index_in_parent(_el6)
         };
      }
   }
}

function dynamic_adapt() {
   var w = document.querySelector("body").offsetWidth;

   if (move_objects.length > 0) {
      for (var _index11 = 0; _index11 < move_objects.length; _index11++) {
         var _el7 = move_objects[_index11];

         var _data_move = _el7.getAttribute("data-move");

         if (_data_move != "" || _data_move != null) {
            var data_array = _data_move.split(",");

            var data_parent = document.querySelector("." + data_array[0]);
            var data_index = data_array[1];
            var data_bp = data_array[2];

            if (w < data_bp) {
               if (!_el7.classList.contains("js-move_done_" + data_bp)) {
                  if (data_index > 0) {
                     //insertAfter
                     var actual_index = index_of_elements(data_parent)[data_index];
                     data_parent.insertBefore(_el7, data_parent.childNodes[actual_index]);
                  } else {
                     data_parent.insertBefore(_el7, data_parent.firstChild);
                  }

                  _el7.classList.add("js-move_done_" + data_bp);
               }
            } else {
               if (_el7.classList.contains("js-move_done_" + data_bp)) {
                  dynamic_adaptive_back(_el7);

                  _el7.classList.remove("js-move_done_" + data_bp);
               }
            }
         }
      }
   }

   custom_adapt(w);
}

function dynamic_adaptive_back(el) {
   var index_original = el.getAttribute("data-move-index");
   var move_place = move_array[index_original];
   var parent_place = move_place["parent"];
   var index_place = move_place["index"];

   if (index_place > 0) {
      //insertAfter
      var actual_index = index_of_elements(parent_place)[index_place];
      parent_place.insertBefore(el, parent_place.childNodes[actual_index]);
   } else {
      parent_place.insertBefore(el, parent_place.firstChild);
   }
}

function index_in_parent(node) {
   var children = node.parentNode.childNodes;
   var num = 0;

   for (var _i2 = 0; _i2 < children.length; _i2++) {
      if (children[_i2] == node) return num;
      if (children[_i2].nodeType == 1) num++;
   }

   return -1;
}

function index_of_elements(parent) {
   var children = [];

   for (var _i3 = 0; _i3 < parent.childNodes.length; _i3++) {
      if (parent.childNodes[_i3].nodeType == 1 && parent.childNodes[_i3].getAttribute("data-move") == null) {
         children.push(_i3);
      }
   }

   return children;
}

window.addEventListener("resize", function (event) {
   dynamic_adapt();
});
dynamic_adapt();


//=======
//var scrollAnim;
//document.querySelectorAll('a[href^="#"]').forEach(function (el) {
//   el.addEventListener("click", function (event) {
//      var target = document.querySelector(this.getAttribute("href"));
//      if (target != null) {
//         event.preventDefault();
//         var scrollMaxHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
//         var scroll = target.offsetTop;
//         clearTimeout(scrollAnim);
//         var animTime = 1200;//ms
//         var step = (scroll - window.scrollY) / 60 / (animTime / 1000);
//         if (scrollMaxHeight - scroll <= window.innerHeight)
//            scroll = scrollMaxHeight - window.innerHeight;
//         (function () {
//            if (Math.abs(window.scrollY - scroll) <= Math.abs(step)) {
//               window.scrollTo(0, scroll);
//               return;
//            }
//            window.scrollTo(0, parseFloat(window.scrollY) + step);
//            scrollAnim = setTimeout(arguments.callee, 1000 / 60);
//         })();
//      }
//   });
//});
//=====
function ibg() {
   if (isIE()) {
      let ibg = document.querySelectorAll("._ibg");
      for (var i = 0; i < ibg.length; i++) {
         if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
         }
      }
   }
}
ibg();
//ibg//




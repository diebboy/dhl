//function ibg() {
//	if (isIE()) {
//		var _ibg = document.querySelectorAll("._ibg");

//		for (var i = 0; i < _ibg.length; i++) {
//			if (_ibg[i].querySelector('img') && _ibg[i].querySelector('img').getAttribute('src') != null) {
//				_ibg[i].style.backgroundImage = 'url(' + _ibg[i].querySelector('img').getAttribute('src') + ')';
//			}
//		}
//	}
//}

//ibg();
//ibg//


//Menu


//var iconMenu = document.querySelector(".icon-menu");

//if (iconMenu != null) {
//	var delay = 500;
//	var body = document.querySelector("body");
//	var menuBody = document.querySelector(".menu__body");
//	iconMenu.addEventListener("click", function (e) {
//		if (!body.classList.contains('_wait')) {
//			body_lock(delay);
//			iconMenu.classList.toggle("_active");
//			menuBody.classList.toggle("_active");
//		}
//	});
//}

//;

//function menu_close() {
//	var iconMenu = document.querySelector(".icon-menu");
//	var menuBody = document.querySelector(".menu__body");
//	iconMenu.classList.remove("_active");
//	menuBody.classList.remove("_active");
//} //=================

// Dynamic Adapt v.1
// HTML data-move="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-move="item,2,992"
// Andrikanych Yevhen 2020
//var move_array = [];
//var move_objects = document.querySelectorAll("[data-move]");

//if (move_objects.length > 0) {
//	for (var _index10 = 0; _index10 < move_objects.length; _index10++) {
//		var _el6 = move_objects[_index10];

//		var data_move = _el6.getAttribute("data-move");

//		if (data_move != "" || data_move != null) {
//			_el6.setAttribute("data-move-index", _index10);

//			move_array[_index10] = {
//				parent: _el6.parentNode,
//				index: index_in_parent(_el6)
//			};
//		}
//	}
//}

//function dynamic_adapt() {
//	var w = document.querySelector("body").offsetWidth;

//	if (move_objects.length > 0) {
//		for (var _index11 = 0; _index11 < move_objects.length; _index11++) {
//			var _el7 = move_objects[_index11];

//			var _data_move = _el7.getAttribute("data-move");

//			if (_data_move != "" || _data_move != null) {
//				var data_array = _data_move.split(",");

//				var data_parent = document.querySelector("." + data_array[0]);
//				var data_index = data_array[1];
//				var data_bp = data_array[2];

//				if (w < data_bp) {
//					if (!_el7.classList.contains("js-move_done_" + data_bp)) {
//						if (data_index > 0) {
//							//insertAfter
//							var actual_index = index_of_elements(data_parent)[data_index];
//							data_parent.insertBefore(_el7, data_parent.childNodes[actual_index]);
//						} else {
//							data_parent.insertBefore(_el7, data_parent.firstChild);
//						}

//						_el7.classList.add("js-move_done_" + data_bp);
//					}
//				} else {
//					if (_el7.classList.contains("js-move_done_" + data_bp)) {
//						dynamic_adaptive_back(_el7);

//						_el7.classList.remove("js-move_done_" + data_bp);
//					}
//				}
//			}
//		}
//	}

//	custom_adapt(w);
//}

//function dynamic_adaptive_back(el) {
//	var index_original = el.getAttribute("data-move-index");
//	var move_place = move_array[index_original];
//	var parent_place = move_place["parent"];
//	var index_place = move_place["index"];

//	if (index_place > 0) {
//		//insertAfter
//		var actual_index = index_of_elements(parent_place)[index_place];
//		parent_place.insertBefore(el, parent_place.childNodes[actual_index]);
//	} else {
//		parent_place.insertBefore(el, parent_place.firstChild);
//	}
//}

//function index_in_parent(node) {
//	var children = node.parentNode.childNodes;
//	var num = 0;

//	for (var _i2 = 0; _i2 < children.length; _i2++) {
//		if (children[_i2] == node) return num;
//		if (children[_i2].nodeType == 1) num++;
//	}

//	return -1;
//}

//function index_of_elements(parent) {
//	var children = [];

//	for (var _i3 = 0; _i3 < parent.childNodes.length; _i3++) {
//		if (parent.childNodes[_i3].nodeType == 1 && parent.childNodes[_i3].getAttribute("data-move") == null) {
//			children.push(_i3);
//		}
//	}

//	return children;
//}

//window.addEventListener("resize", function (event) {
//	dynamic_adapt();
//});
//dynamic_adapt();



// icon-user
//var user_icon = document.querySelector('.user-header__icon');
//var user_menu = document.querySelector('.user-header__menu');
//user_icon.addEventListener("click", function (e) {
//	user_menu.classList.toggle('_active');
//});
//document.documentElement.addEventListener("click", function (e) {
//	if (!e.target.closest('.user-header')) {
//		user_menu.classList.remove('_active');
//	}
//});


//=======
var link = document.querySelectorAll('._goto-block');

if (link) {
   var blocks = [];

   var _loop7 = function _loop7(_index28) {
      var el = link[_index28];
      var block_name = el.getAttribute('href').replace('#', '');

      if (block_name != '' && !~blocks.indexOf(block_name)) {
         blocks.push(block_name);
      }

      el.addEventListener('click', function (e) {
         if (document.querySelector('.menu__body._active')) {
            menu_close();
            body_lock_remove(500);
         }

         var target_block_class = el.getAttribute('href').replace('#', '');
         var target_block = document.querySelector('.' + target_block_class);

         _goto(target_block, 300);

         e.preventDefault();
      });
   };

   for (var _index28 = 0; _index28 < link.length; _index28++) {
      _loop7(_index28);
   }

   window.addEventListener('scroll', function (el) {
      var old_current_link = document.querySelectorAll('._goto-block._active');

      if (old_current_link) {
         for (var _index29 = 0; _index29 < old_current_link.length; _index29++) {
            var _el13 = old_current_link[_index29];

            _el13.classList.remove('_active');
         }
      }

      for (var _index30 = 0; _index30 < blocks.length; _index30++) {
         var block = blocks[_index30];
         var block_item = document.querySelector('.' + block);

         if (block_item) {
            var block_offset = offset(block_item).top;
            var block_height = block_item.offsetHeight;

            if (pageYOffset > block_offset - window.innerHeight / 3 && pageYOffset < block_offset + block_height - window.innerHeight / 3) {
               var current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');

               for (var _index31 = 0; _index31 < current_links.length; _index31++) {
                  var current_link = current_links[_index31];
                  current_link.classList.add('_active');
               }
            }
         }
      }
   });
}
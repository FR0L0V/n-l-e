$(document).ready((function(){function e(e,i){$("."+e).after('<div class="'+e+'_overlay"></div>');var o=$("."+e+"_close"),s=$("."+e+"_overlay"),t=$("."+i),n=$("."+e+", ."+e+"_overlay");t.on("click",(function(){return $(this).toggleClass("opened"),n.slideToggle(200),!1})),o.on("click",(function(){return t.removeClass("opened"),n.slideUp(200),!1})),s.on("click touchstart",(function(){t.removeClass("opened"),n.slideUp(200)}))}$("input.input, textarea.input").placeholder(),$("input.radio, input.checkbox, .selectbox, input.number").styler(),$(".select_count").styler({selectPlaceholder:""}),$("input.file").styler({fileBrowse:"Обзор"}),$("input#files_scan").styler({fileBrowse:"Обзор",filePlaceholder:"Загрузите сканы документов"}),e("alltowns","js_towns"),e("headmenu","showmenu"),e("filter","js_filter"),e("leftmenu","js_leftcat"),e("nologged","js_login"),$(".showmenu").append("<span><b></b><b></b><b></b></span>"),$(".alltowns ul li a").on("click",(function(){var e=$(this).text();return $(".choosetown .town").text(e),$(".alltowns, .alltowns_overlay").slideUp(200),!1})),$("#bnews_slider").slick({autoplay:!0,dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,touchMove:!0}),$("#action_slider").slick({autoplay:!1,dots:!0,arrows:!1,infinite:!1,slidesToShow:4,slidesToScroll:1,touchMove:!0,responsive:[{breakpoint:1010,settings:{slidesToShow:2,infinite:!0}},{breakpoint:500,settings:{focusOnSelect:!0,centerMode:!0,variableWidth:!0,slidesToShow:1}}]}),$("#spec_slider, #hit_slider").slick({autoplay:!1,dots:!0,arrows:!1,infinite:!1,slidesToShow:2,slidesToScroll:1,touchMove:!0,responsive:[{breakpoint:1010,settings:{slidesToShow:1,infinite:!0}},{breakpoint:750,settings:{slidesToShow:2}},{breakpoint:500,settings:{focusOnSelect:!0,centerMode:!0,variableWidth:!0,slidesToShow:1}}]}),$("#partner_slider").slick({autoplay:!1,dots:!0,arrows:!0,infinite:!0,slidesToShow:5,slidesToScroll:1,touchMove:!1,responsive:[{breakpoint:1010,settings:{touchMove:!0,slidesToShow:3}},{breakpoint:500,settings:{slidesToShow:1}}]}),$(".parent").children("a").append('<span class="openMenu"></span>'),$(".openMenu").on("click",(function(){return $(this).parent().parent().toggleClass("opened"),$(this).parent().parent().find("ul").slideToggle(200),!1}));var i,o,s,t=$("#uirange"),n=$(".range_from"),l=$(".range_to"),a=function(){n.prop("value",o),l.prop("value",s)};t.ionRangeSlider({type:"double",min:0,max:5e4,prettify_enabled:!1,onChange:function(e){o=e.from,s=e.to,a()}}),i=t.data("ionRangeSlider");var r=function(){i.update({from:o,to:s})};n.on("change",(function(){(o=+$(this).prop("value"))<0&&(o=0),o>s&&(o=s),a(),r()})),l.on("change",(function(){(s=+$(this).prop("value"))>5e4&&(s=5e4),s<o&&(s=o),a(),r()})),$(".view li a").on("click",(function(){return $(".view li").removeClass("active"),$(this).parent().addClass("active"),$(".catalogList").removeClass("catalogList-listed"),!1})),$(".view_list a").on("click",(function(){$(".catalogList").addClass("catalogList-listed")})),$(".gallery_big").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!1,asNavFor:".gallery_thumbs",prevArrow:'<span class="slick-prev" aria-label="Previous"></span>',nextArrow:'<span class="slick-next" aria-label="Next"></span>'}),$(".gallery_thumbs").slick({slidesToShow:4,slidesToScroll:1,asNavFor:".gallery_big",centerMode:!1,arrows:!1,focusOnSelect:!0,variableWidth:!1}),$("#tabs, #tabsbox").tabs({collapsible:!1,hide:{effect:"fade",duration:100},show:{effect:"fade",duration:100}}),$(".product_bottom .btn-orange").on("click",(function(){return $(".cartsuc").fadeIn(300),!1})),$(".cartsuc_close").on("click",(function(){return $(".cartsuc").fadeOut(300),!1})),$(".js_ankets, .js_action, .js_get_price").fancybox({margin:[44,0],touch:!1,closeBtn:!1}),$("#select_sorting").change((function(){"all"==$(this).val()?$(".pagination_pages").hide():$(".pagination_pages").show()})),$(".regform_face .radio").change((function(){"yur"==$(this).val()&&$("#yurfields").slideDown(200),"fiz"==$(this).val()&&$("#yurfields").slideUp(200)})),$(".phone_input").mask("(000) 000-00-00"),$(".input_kpp").mask("999999999"),$(".input_ogrnip").mask("99999-99999-99999"),$(".input_ogrn").mask("99999-99999-999"),$(".input_rs").mask("9999-9999-9999-9999-9999"),$("#basket_info_popup .cancel").click((function(){return $(this).closest(".info_popup-wrapper").fadeOut(200),!1})),$(".input_field").bind("focus",(function(){$(this).closest(".input-box").addClass("focused"),$(this).find("input, textarea").focus()})),$(".input_field").bind("blur",(function(){$(this).closest(".input-box").removeClass("focused"),$(this).find("input, textarea").blur()})),$(".input_field").on("input",(function(){$(this).val().length>0?$(this).closest(".input-box").addClass("dirty"):$(this).closest(".input-box").removeClass("dirty")}));function d(e){$(e).on("mouseover",(function(){$(".newbasket_table_complect_head"+e+", .newbasket_table_complect_row"+e).addClass("hover")})),$(e).on("mouseleave",(function(){$(".newbasket_table_complect_head"+e+", .newbasket_table_complect_row"+e).removeClass("hover")}))}$(".input-box.search-input .input_field").autocomplete({source:["Москва","Санкт-Петербург","Екатеринбург","Тверь","Новосибирск","Владивосток","Красноярск","Липецк","Саратов","Самара"],appendTo:".input-box.search-input"}),$("#show_delivery").on("change",(function(){$(this).prop("checked",!0)&&$("#show_delivery_div").slideDown(200)})),$("#close_delivery").on("change",(function(){$(this).prop("checked",!0)&&$("#show_delivery_div").slideUp(200)})),$(".beznal_ok").on("click",(function(){return $(this).parent().fadeOut(200),!1})),d(".complect1"),d(".complect2"),$(document).on("click touchstart",(function(e){let i=$(".spinner");i.is(e.target)&&(i.fadeOut(200),$("body").removeClass("spinner_on"))})),$(window).on("scroll",(function(){$(document).scrollTop()>$(".newbasket_right").offset().top-10?$(".newbasket_scroll").addClass("fixed"):$(".newbasket_scroll").removeClass("fixed")})),$(".get_price_row.spinner_row").append('<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>');let c=$(".file-input"),u=$(".file-drop-area"),p=$(".fake-btn"),f=$(".file-msg"),v=$(".close-btn");c.on("change",()=>{f.text(c[0].files[0].name),p.addClass("files-loaded"),v.removeClass("hide"),c.addClass("hide")}),v.on("click",()=>{c[0].files[0]={},f.text("Выбрать файл"),v.addClass("hide"),c.removeClass("hide"),p.removeClass("files-loaded")}),c.on("dragover",()=>{u.addClass("active-field")}),c.on("dragleave",()=>{u.removeClass("active-field")}),c.on("drop",()=>{u.removeClass("active-field")}),$field=$(".jq-number__field .number"),$checkInputValue=()=>{+$field[0].value<+$field[0].min&&($field[0].value=$field[0].min),+$field[0].value>+$field[0].max&&($field[0].value=$field[0].max)},$field.on("blur",$checkInputValue)}));
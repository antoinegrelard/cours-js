$(document).ready(function(){"use strict";function s(s){for(var i=0;s>i;i++)t.append($("<li class='cards_list-item'></li>"))}function i(s,i){var t=s.data("image"),e=i.data("image");t==e?_.delay(function(){a=[],s.attr("style","background: rgba(0,0,0,.2"),i.attr("style","background: rgba(0,0,0,.2"),s.removeClass("visible").addClass("inactive"),i.removeClass("visible").addClass("inactive"),s.unbind("click"),i.unbind("click")},500):_.delay(function(){a=[],s.removeClass("visible"),s.removeAttr("style"),i.removeClass("visible"),i.removeAttr("style")},500)}var t=$(".cards_list"),a=[],e=0,l="src/img/cards",c=".png",r=[];$.ajax({url:l,async:!1,success:function(s){$(s).find("a:contains("+c+")").each(function(){r.push(this.title),r.push(this.title)})}}),s(_.size(r));var n=_.shuffle(r),d=0;$(".cards_list-item").each(function(){$(this).attr("data-image","src/img/cards/"+n[d]),d++}),$(".cards_list-item").on("click",function(){e++,$(".click-number").text(e),$(this).hasClass("visible")?($(this).removeClass("visible"),$(this).removeAttr("style"),a=[]):($(this).addClass("visible"),a.push($(this)),$(this).attr("style","background: url( "+$(this).data("image")+" )")),2==_.size(a)&&i(a[0],a[1])})});
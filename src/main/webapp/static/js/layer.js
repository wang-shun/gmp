/*! layer-v2.1 弹层组件 License LGPL  http://layer.layui.com/ By 贤心 */
!function(j,i){var p,o,n={getPath:function(){var e=document.scripts,d=e[e.length-1],f=d.src;if(!d.getAttribute("merge")){return f.substring(0,f.lastIndexOf("/")+1)}}(),enter:function(b){13===b.keyCode&&b.preventDefault()},config:{},end:{},btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},m={v:"2.1",ie6:!!j.ActiveXObject&&!j.XMLHttpRequest,index:0,path:n.getPath,config:function(e,c){var h=0;return e=e||{},m.cache=n.config=p.extend(n.config,e),m.path=n.config.path||m.path,"string"==typeof e.extend&&(e.extend=[e.extend]),m.use("skin/layer.css",e.extend&&e.extend.length>0?function f(){var a=e.extend;m.use(a[a[h]?h:h-1],h<a.length?function(){return ++h,f}():c)}():c),this},use:function(f,c,v){var u=p("head")[0],f=f.replace(/\s/g,""),t=/\.css$/.test(f),s=document.createElement(t?"link":"script"),r="layui_layer_"+f.replace(/\.|\//g,"");return m.path?(t&&(s.rel="stylesheet"),s[t?"href":"src"]=/^http:\/\//.test(f)?f:m.path+f,s.id=r,p("#"+r)[0]||u.appendChild(s),function q(){(t?1989===parseInt(p("#"+r).css("width")):m[v||r])?function(){c&&c();try{t||u.removeChild(s)}catch(b){}}():setTimeout(q,100)}(),this):void 0},ready:function(e,c){var f="function"==typeof e;return f&&(c=e),m.config(p.extend(n.config,function(){return f?{}:{path:e}}()),c),this},alert:function(f,c,h){var g="function"==typeof c;return g&&(h=c),m.open(p.extend({content:f,yes:h},g?{}:c))},confirm:function(e,c,r,q){var f="function"==typeof c;return f&&(q=r,r=c),m.open(p.extend({content:e,btn:n.btn,yes:r,cancel:q},f?{}:c))},msg:function(c,r,q){var h="function"==typeof r,f=n.config.skin,e=(f?f+" "+f+"-msg":"")||"layui-layer-msg",b=k.anim.length-1;return h&&(q=r),m.open(p.extend({content:c,time:3000,shade:!1,skin:e,title:!1,closeBtn:!1,btn:!1,end:q},h&&!n.config.skin?{skin:e+" layui-layer-hui",shift:b}:function(){return r=r||{},(-1===r.icon||r.icon===i&&!n.config.skin)&&(r.skin=e+" "+(r.skin||"layui-layer-hui")),r}()))},load:function(d,c){return m.open(p.extend({type:3,icon:d||0,shade:0.01},c))},tips:function(e,c,f){return m.open(p.extend({type:4,content:[e,c],closeBtn:!1,time:3000,maxWidth:210},f))}},l=function(d){var c=this;c.index=++m.index,c.config=p.extend({},c.config,n.config,d),c.creat()};l.pt=l.prototype;var k=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];k.anim=["layui-anim","layui-anim-01","layui-anim-02","layui-anim-03","layui-anim-04","layui-anim-05","layui-anim-06"],l.pt.config={type:0,shade:0.3,fix:!0,move:k[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,shift:0,icon:-1,scrollbar:!0,tips:2},l.pt.vessel=function(w,v){var u=this,t=u.index,s=u.config,r=s.zIndex+t,q="object"==typeof s.title,h=s.maxmin&&(1===s.type||2===s.type),e=s.title?'<div class="layui-layer-title" style="'+(q?s.title[1]:"")+'">'+(q?s.title[0]:s.title)+"</div>":"";return s.zIndex=r,v([s.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+t+'" times="'+t+'" style="'+("z-index:"+(r-1)+"; background-color:"+(s.shade[1]||"#000")+"; opacity:"+(s.shade[0]||s.shade)+"; filter:alpha(opacity="+(100*s.shade[0]||100*s.shade)+");")+'"></div>':"",'<div class="'+k[0]+" "+(k.anim[s.shift]||"")+(" layui-layer-"+n.type[s.type])+(0!=s.type&&2!=s.type||s.shade?"":" layui-layer-border")+" "+(s.skin||"")+'" id="'+k[0]+t+'" type="'+n.type[s.type]+'" times="'+t+'" showtime="'+s.time+'" conType="'+(w?"object":"string")+'" style="z-index: '+r+"; width:"+s.area[0]+";height:"+s.area[1]+(s.fix?"":";position:absolute;")+'">'+(w&&2!=s.type?"":e)+'<div class="layui-layer-content'+(0==s.type&&-1!==s.icon?" layui-layer-padding":"")+(3==s.type?" layui-layer-loading"+s.icon:"")+'">'+(0==s.type&&-1!==s.icon?'<i class="layui-layer-ico layui-layer-ico'+s.icon+'"></i>':"")+(1==s.type&&w?"":s.content||"")+'</div><span class="layui-layer-setwin">'+function(){var b=h?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return s.closeBtn&&(b+='<a class="layui-layer-ico '+k[7]+" "+k[7]+(s.title?s.closeBtn:4==s.type?"1":"2")+'" href="javascript:;"></a>'),b}()+"</span>"+(s.btn?function(){var f="";"string"==typeof s.btn&&(s.btn=[s.btn]);for(var d=0,g=s.btn.length;g>d;d++){f+='<a class="'+k[6]+d+'">'+s.btn[d]+"</a>"}return'<div class="'+k[6]+'">'+f+"</div>"}():"")+"</div>"],e),u},l.pt.creat=function(){var d=this,c=d.config,h=d.index,f=c.content,e="object"==typeof f;switch("string"==typeof c.area&&(c.area="auto"===c.area?["",""]:[c.area,""]),c.type){case 0:c.btn="btn" in c?c.btn:n.btn[0],m.closeAll("dialog");break;case 2:var f=c.content=e?c.content:[c.content||"http://layer.layui.com","auto"];c.content='<iframe scrolling="'+(c.content[1]||"auto")+'" allowtransparency="true" id="'+k[4]+h+'" name="'+k[4]+h+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+c.content[0]+'"></iframe>';
break;case 3:c.title=!1,c.closeBtn=!1,-1===c.icon&&0===c.icon,m.closeAll("loading");break;case 4:e||(c.content=[c.content,"body"]),c.follow=c.content[1],c.content=c.content[0]+'<i class="layui-layer-TipsG"></i>',c.title=!1,c.shade=!1,c.fix=!1,c.tips="object"==typeof c.tips?c.tips:[c.tips,!0],c.tipsMore||m.closeAll("tips")}d.vessel(e,function(b,a){p("body").append(b[0]),e?function(){2==c.type||4==c.type?function(){p("body").append(b[1])}():function(){f.parents("."+k[0])[0]||(f.show().addClass("layui-layer-wrap").wrap(b[1]),p("#"+k[0]+h).find("."+k[5]).before(a))}()}():p("body").append(b[1]),d.layero=p("#"+k[0]+h),c.scrollbar||k.html.css("overflow","hidden").attr("layer-full",h)}).auto(h),2==c.type&&m.ie6&&d.layero.find("iframe").attr("src",f[0]),p(document).off("keydown",n.enter).on("keydown",n.enter),d.layero.on("keydown",function(b){p(document).off("keydown",n.enter)}),4==c.type?d.tips():d.offset(),c.fix&&o.on("resize",function(){d.offset(),(/^\d+%$/.test(c.area[0])||/^\d+%$/.test(c.area[1]))&&d.auto(h),4==c.type&&d.tips()}),c.time<=0||setTimeout(function(){m.close(d.index)},c.time),d.move().callback()},l.pt.auto=function(d){function c(b){b=s.find(b),b.height(r[1]-q-h-2*(0|parseFloat(b.css("padding"))))}var u=this,t=u.config,s=p("#"+k[0]+d);""===t.area[0]&&t.maxWidth>0&&(/MSIE 7/.test(navigator.userAgent)&&t.btn&&s.width(s.innerWidth()),s.outerWidth()>t.maxWidth&&s.width(t.maxWidth));var r=[s.innerWidth(),s.innerHeight()],q=s.find(k[1]).outerHeight()||0,h=s.find("."+k[6]).outerHeight()||0;switch(t.type){case 2:c("iframe");break;default:""===t.area[1]?t.fix&&r[1]>=o.height()&&(r[1]=o.height(),c("."+k[5])):c("."+k[5])}return u},l.pt.offset=function(){var q=o.height()>1000?o.height()*1.5:o.height();var g=this,d=g.config,s=g.layero,r=[s.outerWidth(),s.outerHeight()],h="object"==typeof d.offset;g.offsetTop=(q-r[1])/2,g.offsetLeft=(o.width()-r[0])/2,h?(g.offsetTop=d.offset[0],g.offsetLeft=d.offset[1]||g.offsetLeft):"auto"!==d.offset&&(g.offsetTop=d.offset,"rb"===d.offset&&(g.offsetTop=o.height()-r[1],g.offsetLeft=o.width()-r[0])),d.fix||(g.offsetTop=/%$/.test(g.offsetTop)?o.height()*parseFloat(g.offsetTop)/100:parseFloat(g.offsetTop),g.offsetLeft=/%$/.test(g.offsetLeft)?o.width()*parseFloat(g.offsetLeft)/100:parseFloat(g.offsetLeft),g.offsetTop+=o.scrollTop(),g.offsetLeft+=o.scrollLeft()),s.css({top:g.offsetTop,left:g.offsetLeft})},l.pt.tips=function(){var d=this,c=d.config,u=d.layero,t=[u.outerWidth(),u.outerHeight()],s=p(c.follow);s[0]||(s=p("body"));var r={width:s.outerWidth(),height:s.outerHeight(),top:s.offset().top,left:s.offset().left},q=u.find(".layui-layer-TipsG"),h=c.tips[0];c.tips[1]||q.remove(),r.autoLeft=function(){r.left+t[0]-o.width()>0?(r.tipLeft=r.left+r.width-t[0],q.css({right:12,left:"auto"})):r.tipLeft=r.left},r.where=[function(){r.autoLeft(),r.tipTop=r.top-t[1]-10,q.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",c.tips[1])},function(){r.tipLeft=r.left+r.width+10,r.tipTop=r.top,q.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",c.tips[1])},function(){r.autoLeft(),r.tipTop=r.top+r.height+10,q.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",c.tips[1])},function(){r.tipLeft=r.left-t[0]-10,r.tipTop=r.top,q.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",c.tips[1])}],r.where[h-1](),1===h?r.top-(o.scrollTop()+t[1]+16)<0&&r.where[2]():2===h?o.width()-(r.left+r.width+t[0]+16)>0||r.where[3]():3===h?r.top-o.scrollTop()+r.height+t[1]+16-o.height()>0&&r.where[0]():4===h&&t[0]+16-r.left>0&&r.where[1](),u.find("."+k[5]).css({"background-color":c.tips[1],"padding-right":c.closeBtn?"30px":""}),u.css({left:r.tipLeft,top:r.tipTop})},l.pt.move=function(){var d=this,c=d.config,h={setY:0,moveLayer:function(){var f=h.layero,e=parseInt(f.css("margin-left")),q=parseInt(h.move.css("left"));0===e||(q-=e),"fixed"!==f.css("position")&&(q-=f.parent().offset().left,h.setY=0),f.css({left:q,top:parseInt(h.move.css("top"))-h.setY})}},g=d.layero.find(c.move);return c.move&&g.attr("move","ok"),g.css({cursor:c.move?"move":"auto"}),p(c.move).on("mousedown",function(b){if(b.preventDefault(),"ok"===p(this).attr("move")){h.ismove=!0,h.layero=p(this).parents("."+k[0]);var s=h.layero.offset().left,r=h.layero.offset().top,q=h.layero.outerWidth()-6,e=h.layero.outerHeight()-6;p("#layui-layer-moves")[0]||p("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:'+s+"px; top:"+r+"px; width:"+q+"px; height:"+e+'px; z-index:2147483584"></div>'),h.move=p("#layui-layer-moves"),c.moveType&&h.move.css({visibility:"hidden"}),h.moveX=b.pageX-h.move.position().left,h.moveY=b.pageY-h.move.position().top,"fixed"!==h.layero.css("position")||(h.setY=o.scrollTop())}}),p(document).mousemove(function(b){if(h.ismove){var s=b.pageX-h.moveX,r=b.pageY-h.moveY;if(b.preventDefault(),!c.moveOut){h.setY=o.scrollTop();var q=o.width()-h.move.outerWidth(),e=h.setY;0>s&&(s=0),s>q&&(s=q),e>r&&(r=e),r>o.height()-h.move.outerHeight()+h.setY&&(r=o.height()-h.move.outerHeight()+h.setY)
}h.move.css({left:s,top:r}),c.moveType&&h.moveLayer(),s=r=q=e=null}}).mouseup(function(){try{h.ismove&&(h.moveLayer(),h.move.remove(),c.moveEnd&&c.moveEnd()),h.ismove=!1}catch(b){h.ismove=!1}}),d},l.pt.callback=function(){function e(){var b=f.cancel&&f.cancel(c.index);b===!1||m.close(c.index)}var c=this,h=c.layero,f=c.config;c.openLayer(),f.success&&(2==f.type?h.find("iframe").on("load",function(){f.success(h,c.index)}):f.success(h,c.index)),m.ie6&&c.IE6(h),h.find("."+k[6]).children("a").on("click",function(){var a=p(this).index();f["btn"+(a+1)]&&f["btn"+(a+1)](c.index,h),0===a?f.yes?f.yes(c.index,h):m.close(c.index):1===a?e():f["btn"+(a+1)]||m.close(c.index)}),h.find("."+k[7]).on("click",e),f.shadeClose&&p("#layui-layer-shade"+c.index).on("click",function(){m.close(c.index)}),h.find(".layui-layer-min").on("click",function(){m.min(c.index,f),f.min&&f.min(h)}),h.find(".layui-layer-max").on("click",function(){p(this).hasClass("layui-layer-maxmin")?(m.restore(c.index),f.restore&&f.restore(h)):(m.full(c.index,f),f.full&&f.full(h))}),f.end&&(n.end[c.index]=f.end)},n.reselect=function(){p.each(p("select"),function(e,c){var f=p(this);f.parents("."+k[0])[0]||1==f.attr("layer")&&p("."+k[0]).length<1&&f.removeAttr("layer").show(),f=null})},l.pt.IE6=function(d){function c(){d.css({top:g+(h.config.fix?o.scrollTop():0)})}var h=this,g=d.offset().top;c(),o.scroll(c),p("select").each(function(f,e){var q=p(this);q.parents("."+k[0])[0]||"none"===q.css("display")||q.attr({layer:"1"}).hide(),q=null})},l.pt.openLayer=function(){var b=this;m.zIndex=b.config.zIndex,m.setTop=function(d){var c=function(){m.zIndex++,d.css("z-index",m.zIndex+1)};return m.zIndex=parseInt(d[0].style.zIndex),d.on("mousedown",c),m.zIndex}},n.record=function(d){var c=[d.outerWidth(),d.outerHeight(),d.position().top,d.position().left+parseFloat(d.css("margin-left"))];d.find(".layui-layer-max").addClass("layui-layer-maxmin"),d.attr({area:c})},n.rescollbar=function(b){k.html.attr("layer-full")==b&&(k.html[0].style.removeProperty?k.html[0].style.removeProperty("overflow"):k.html[0].style.removeAttribute("overflow"),k.html.removeAttr("layer-full"))},j.layer=m,m.getChildFrame=function(d,c){return c=c||p("."+k[4]).attr("times"),p("#"+k[0]+c).find("iframe").contents().find(d)},m.getFrameIndex=function(b){return p("#"+b).parents("."+k[4]).attr("times")},m.iframeAuto=function(f){if(f){var c=m.getChildFrame("html",f).outerHeight(),r=p("#"+k[0]+f),q=r.find(k[1]).outerHeight()||0,h=r.find("."+k[6]).outerHeight()||0;r.css({height:c+q+h}),r.find("iframe").css({height:c})}},m.iframeSrc=function(d,c){p("#"+k[0]+d).find("iframe").attr("src",c)},m.style=function(e,c){var s=p("#"+k[0]+e),r=s.attr("type"),q=s.find(k[1]).outerHeight()||0,h=s.find("."+k[6]).outerHeight()||0;(r===n.type[1]||r===n.type[2])&&(s.css(c),r===n.type[2]&&s.find("iframe").css({height:parseFloat(c.height)-q-h}))},m.min=function(e,c){var h=p("#"+k[0]+e),f=h.find(k[1]).outerHeight()||0;n.record(h),m.style(e,{width:180,height:f,overflow:"hidden"}),h.find(".layui-layer-min").hide(),"page"===h.attr("type")&&h.find(k[4]).hide(),n.rescollbar(e)},m.restore=function(e){var c=p("#"+k[0]+e),f=c.attr("area").split(",");c.attr("type");m.style(e,{width:parseFloat(f[0]),height:parseFloat(f[1]),top:parseFloat(f[2]),left:parseFloat(f[3]),overflow:"visible"}),c.find(".layui-layer-max").removeClass("layui-layer-maxmin"),c.find(".layui-layer-min").show(),"page"===c.attr("type")&&c.find(k[4]).show(),n.rescollbar(e)},m.full=function(d){var c,e=p("#"+k[0]+d);n.record(e),k.html.attr("layer-full")||k.html.css("overflow","hidden").attr("layer-full",d),clearTimeout(c),c=setTimeout(function(){var a="fixed"===e.css("position");m.style(d,{top:a?0:o.scrollTop(),left:a?0:o.scrollLeft(),width:o.width(),height:o.height()}),e.find(".layui-layer-min").hide()},100)},m.title=function(e,c){var f=p("#"+k[0]+(c||m.index)).find(k[1]);f.html(e)},m.close=function(e){var c=p("#"+k[0]+e),r=c.attr("type");if(c[0]){if(r===n.type[1]&&"object"===c.attr("conType")){c.children(":not(."+k[5]+")").remove();for(var q=0;2>q;q++){c.find(".layui-layer-wrap").unwrap().hide()}}else{if(r===n.type[2]){try{var h=p("#"+k[4]+e)[0];h.contentWindow.document.write(""),h.contentWindow.close(),c.find("."+k[5])[0].removeChild(h)}catch(f){}}c[0].innerHTML="",c.remove()}p("#layui-layer-moves, #layui-layer-shade"+e).remove(),m.ie6&&n.reselect(),n.rescollbar(e),p(document).off("keydown",n.enter),"function"==typeof n.end[e]&&n.end[e](),delete n.end[e]}},m.closeAll=function(b){p.each(p("."+k[0]),function(){var a=p(this),c=b?a.attr("type")===b:1;c&&m.close(a.attr("times")),c=null})},n.run=function(){p=jQuery,o=p(j),k.html=p("html"),m.open=function(d){var c=new l(d);return c.index}},"function"==typeof define?define(function(){return n.run(),m}):function(){n.run(),m.use("skin/layer.css")}()}(window);
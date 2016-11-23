$(function(){
    //轮播图
    $(".rslides").responsiveSlides({
        auto: true,             // Boolean: 设置是否自动播放, true or false
        speed: 500,            // Integer: 动画持续时间，单位毫秒
        timeout: 4000,          // Integer: 图片之间切换的时间，单位毫秒
        pager: true,           // Boolean: 是否显示页码, true or false
        nav: false,             // Boolean: 是否显示左右导航箭头（即上翻下翻）, true or false
        random: false,          // Boolean: 随机幻灯片顺序, true or false
        pause: false,           // Boolean: 鼠标悬停到幻灯上则暂停, true or false
        pauseControls: true,    // Boolean: 悬停在控制板上则暂停, true or false
        prevText: "Previous",   // String: 往前翻按钮的显示文本
        nextText: "Next",       // String: 往后翻按钮的显示文本
        maxwidth: "",           // Integer: 幻灯的最大宽度
        navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "",     // Selector: 声明自定义分页导航
        namespace: "rslides",   // String: 修改默认的容器名称
        before: function(){},   // Function: 回调之前的参数
        after: function(){}     // Function: 回调之后的参数
    });

    //tipso信息提示
    $(".medal-1").tipTip({
        content:"<h3>十佳设计师</h3><p>十佳设计师由一年一度的十佳大赛选出</p><p>获得时间：2016.11.03</p>",
        keepAlive:true
    });
    $(".medal-2").tipTip({
        content:"<h3>十佳设计师</h3><p>十佳设计师由一年一度的十佳大赛选出</p><p>如何获取？<a href='#'>如何获取？</a></p>",
        keepAlive:true
    });
    $(".medal-3").tipTip({
        content:"<h3>十佳设计师</h3><p>十佳设计师由一年一度的十佳大赛选出</p><p>如何获取？<a href='#'>如何获取？</a></p>",
        keepAlive:true
    });
    $(".medal-4").tipTip({
        content:"<h3>十佳设计师</h3><p>十佳设计师由一年一度的十佳大赛选出</p><p>如何获取？<a href='#'>如何获取？</a></p>",
        keepAlive:true
    });

    //顶部区域-晋级阶段背景切换
    $("#promotionStage div").each(function(){
       $(this).click(function(){
         $(this).addClass("active").siblings().removeClass("active");
       });
    });

    //底部区域切换-tab
    var $aLi = $(".nav-tab li");
    $aLi.each(function(){
        $(this).click(function(){
            var index = $aLi.index(this);
            $(this).addClass("active").siblings().removeClass("active");
            $(".tab-cont li").eq(index).show().siblings().hide();
        });
    });

    //私信按钮背景切换
    $(".send-mail").mouseover(function(){
       $(this).css({"backgroundColor":"#1886e3","color":"#fff"}).children("div.mail").css("backgroundPosition","-30px -90px");
    });
    $(".send-mail").mouseout(function(){
        $(this).css({"backgroundColor":"#ededed","color":"#979a9d"}).children("div.mail").css("backgroundPosition","0 -90px");
    });
});
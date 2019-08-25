/**
 * Created by Administrator on 2017/2/16 0016.
 */
var basePath = "http://192.168.12.100:8080";
function AjaxSubmit(_type, _data, _url, _method) {//调用ajax
    $.ajax({
        type: _type,
        url: _url,
        data: _data,
        dataType: "json",
        success: function (msg) {
            _method(msg);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            layer.msg("登录失败");
        }
    });
}//AJAX
function AjaxSubmit2(_type, _url, _method) {//调用ajax
    $.ajax({
        type: _type,
        url: _url,
        contenType: "application/json",
        dataType: "json",
        success: function (msg) {
            _method(msg);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest);
            // alert(XMLHttpRequest.responseText);
        }
    });
}//AJAX
function AjaxSubmit3(_type, _url, _method) {//调用ajax
    $.ajax({
        type: _type,
        url: _url,
        contenType: "application/json",
        dataType: "json",
        success: function (msg) {
            _method(msg);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest);
            // alert(XMLHttpRequest.responseText);
        }
    });
}//AJAX

//Js 获取URL参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return r[2];
    return null;
}

function phoneMath(phone) {//验证手机号码
    if (phone.match(/^(((1[0-9][0-9]{1})|159|153)+\d{8})$/))//判断手机号的格式
    {
        return true;
    }
    else return false;
}//手机号判断
function name(name) {
    if (name.match(/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/)) {
        return true
    }
    else {
        return false;
    }
}//判断姓名
//function wrong(msg){
//    //登录按钮不可点
//    $("html,body").animate({scrollTop:0}, 500);
//    $("input").attr("disabled",true);
//    $("header").animate({opacity:0.5},500);
//    $("section").animate({opacity:0.5},500);
//    $("footer").animate({opacity:0.5},500);
//    var promptDiv=$('<div class="mA wd60 texC av-wrong" style="opacity:1 !important;"><div class="av-wrongT" style="opacity:1 !important;z-index:5000">温馨提示</div><div>'+msg+'</div><div class="av-close">关闭</div></div>');
//    $("body").append(promptDiv);
//    $(".av-close").click(function () {
//        $("header").animate({opacity:1},500);
//        $("section").animate({opacity:1},500);
//        $("footer").animate({opacity:1},500);
//        $(".av-wrong").remove();
//        $("input").removeAttr("disabled");
//    })
//}//提示框提醒
function i_close() {
    window.open("", "_self").close()
}//关闭当前页
function i_back() {
    if (history.length == 0) {
        openmodal("没有上一页");
    }
    else {
        history.go(-1);
        console.log(1)
    }
}//返回上一页
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return r[2];
    return null;
}//获取url参数
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}//判断是否用微信内置浏览器打开
function fixed() {
    $("input").on("click", function () {
        if ($(this).attr("type") == 'text' || $(this).attr("type") == "tel") {
            $('.av-other').addClass("hide");
            $(".m-footer").addClass("hide");
            $(".am-navbar").addClass("hide");
            $(".ac-footer").addClass("hide");
            $(".xiangxiatishi").addClass("hide");
            $(".ad-bm").addClass("hide");
            $(".container").removeAttr("style");
        }
    })
    $("input").on("blur", function () {
        $('.av-other').removeClass("hide");
        $(".m-footer").removeClass("hide");
        $(".am-navbar").removeClass("hide");
        $(".ac-footer").removeClass("hide");
        $(".xiangxiatishi").removeClass("hide");
        $(".ad-bm").removeClass("hide");
        $(".container").removeAttr("style");
    })
    //if($(input).attr("type")=='text'||$(input).attr("type")=="tel")
    //{
    //    $('.av-other').addClass("hide");
    //}
    //        //$('.av-other').css({'position':'static'})
    //if($(input).attr("type")=='text'||$(input).attr("type")=="tel")
    //{//$('.av-other').css({'position':'fixed'})
    //
    //}
}//手机端input的虚拟键盘和position：fixed冲突的解决方法
function fixedTextarea() {
    $("textarea").on("click", function () {
        $('.av-other').addClass("hide");
        $(".am-navbar").addClass("hide");
        $(".m-footer").addClass("hide");
        $(".ac-footer").addClass("hide");
        $(".xiangxiatishi").addClass("hide");
        $(".ad-bm").addClass("hide");
    })
    $("textarea").on("blur", function () {
        $('.av-other').removeClass("hide");
        $(".am-navbar").removeClass("hide");
        $(".m-footer").removeClass("hide");
        $(".ac-footer").removeClass("hide");
        $(".xiangxiatishi").removeClass("hide");
        $(".ad-bm").removeClass("hide");
    })
}
function noClick(res) {
    $(res).attr("disabled", true);
    setTimeout(function () {
        $(res).attr("disabled", false);
    }, 1500);
}
/*时间戳转换为年月日*/
function changeTime(timeStr) {
    var date = new Date(timeStr);
    var dateYear = date.getFullYear();
    var dateMonth = date.getMonth() + 1;
    var dateDay = date.getDate();
    var dateStr = dateYear + "-" + dateMonth + "-" + dateDay;
    return dateStr;
}
/*function changeTime(timeStr) {
 var date = new Date(timeStr*1000);
 var dateYear = date.getFullYear();
 var dateMonth = date.getMonth() + 1;
 dateMonth=dateMonth>9?dateMonth:"0"+dateMonth;
 var dateDay = date.getDate();
 dateDay=dateDay>9?dateDay:"0"+dateDay;
 var hour = date.getHours();
 hour=hour>9?hour:"0"+hour;
 var min = date.getMinutes();
 min=min>9?min:"0"+min;
 var dateStr = dateYear + "." + dateMonth + "." + dateDay+"&nbsp;&nbsp;"+hour+":"+min;
 return dateStr;
 }*///转换时间

function changeTime2(timeStr) {
    var date = new Date(timeStr);
    var dateYear = date.getFullYear();
    var dateMonth = date.getMonth() + 1;
    var dateDay = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var second = date.getSeconds();
    var dateStr = dateYear + "年" + dateMonth + "月" + dateDay + "日"+hour+"时"+min+"分"+second+"秒";
    return dateStr;
}//转换时间

function changeTime3(timeStr) {
    var date = new Date(timeStr);
    var dateYear = date.getFullYear();
    var dateMonth = date.getMonth() + 1;
    var dateDay = date.getDate();
    var hour = date.getHours();
    hour=hour>9?hour:"0"+hour;
    var min = date.getMinutes();
    min=min>9?min:"0"+min;
    var second = date.getSeconds();
    second=second>9?second:"0"+second;
    var dateStr = dateYear + "年" + dateMonth + "月" + dateDay+ "日"+" "+hour+":"+min+":"+second;
    return dateStr;
}//转换时间



$.fn.longPress = function (fn) {
    var timeout = undefined;
    var $this = this;
    for (var i = 0; i < $this.length; i++) {
        $this[i].addEventListener('touchstart', function (event) {
            timeout = setTimeout(fn, 300);  //长按时间超过800ms，则执行传入的方法
        }, false);
        $this[i].addEventListener('touchend', function (event) {
            clearTimeout(timeout);  //长按时间少于800ms，不会执行传入的方法
            var imgUrl = $(".bigImg")[0];
            img_clickOut(imgUrl);
        }, false);
    }
};


function wxBack() {
    var wxRturn = JSON.parse(sessionStorage.getItem("wxRturn"));
    if (wxRturn == "0") {
    }
    else {
        var redirect_url2 = "";
        redirect_url2 += window.location.href;
        sessionStorage.removeItem("wxReturn");
        sessionStorage.setItem("linkUrl2", JSON.stringify(redirect_url2));

    }
    setTimeout(function () {
        sessionStorage.removeItem("wxReturn");
        self.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appid + "&redirect_uri=http://qt.zgzbh.com/hzzx/html/wxUrl.html&response_type=code&scope=snsapi_login&state=1&connect_redirect=1#wechat_redirect";
    }, 1000);
    //self.location.href="wxUrl.html";
}

//禁止浏览器拖动
function stopDefault() {
    window.ontouchmove = function (e) {
        e.preventDefault && e.preventDefault();
        e.returnValue = false;
        e.stopPropagation && e.stopPropagation();
        return false;
    }
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
}
/*
 * 允许手机浏览器拖动
 */
function startDefault() {
    window.ontouchmove = function (e) {
        e.preventDefault && e.preventDefault();
        e.returnValue = true;
        e.stopPropagation && e.stopPropagation();
        return true;
    }
    document.body.style.height = 'auto';
    document.body.style.overflow = 'auto';
}
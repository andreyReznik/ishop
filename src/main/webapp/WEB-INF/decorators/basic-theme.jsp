<%@ taglib uri="http://www.opensymphony.com/sitemesh/decorator" prefix="decorator" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html class="wf-proximanova-i4-active wf-proximanova-i6-active wf-proximanova-i7-active wf-proximanova-n3-active wf-proximanova-n4-active wf-proximanova-n6-active wf-proximanova-n7-active wf-active"
      xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<!--[if IE 9]>
<meta http-equiv="X-UA-Compatible" content="IE=8">
<![endif]-->
<!--[if LTE IE 8]>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={xpid:"Uw4HWVFSGwAJV1VRAgY="};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o?o:e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({QJf3ax:[function(t,e){function n(t){function e(e,n,a){t&&t(e,n,a),a||(a={});for(var c=s(e),u=c.length,f=i(a,o,r),d=0;u>d;d++)c[d].apply(f,n);return f}function a(t,e){u[t]=s(t).concat(e)}function s(t){return u[t]||[]}function c(){return n(e)}var u={};return{on:a,emit:e,create:c,listeners:s,_events:u}}function r(){return{}}var o="nr@context",i=t("gos");e.exports=n()},{gos:"7eSDFh"}],ee:[function(t,e){e.exports=t("QJf3ax")},{}],3:[function(t){function e(t){try{i.console&&console.log(t)}catch(e){}}var n,r=t("ee"),o=t(1),i={};try{n=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(i.console=!0,-1!==n.indexOf("dev")&&(i.dev=!0),-1!==n.indexOf("nr_dev")&&(i.nrDev=!0))}catch(a){}i.nrDev&&r.on("internal-error",function(t){e(t.stack)}),i.dev&&r.on("fn-err",function(t,n,r){e(r.stack)}),i.dev&&(e("NR AGENT IN DEVELOPMENT MODE"),e("flags: "+o(i,function(t){return t}).join(", ")))},{1:20,ee:"QJf3ax"}],4:[function(t){function e(t,e,n,i,s){try{c?c-=1:r("err",[s||new UncaughtException(t,e,n)])}catch(u){try{r("ierr",[u,(new Date).getTime(),!0])}catch(f){}}return"function"==typeof a?a.apply(this,o(arguments)):!1}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function n(t){r("err",[t,(new Date).getTime()])}var r=t("handle"),o=t(6),i=t("ee"),a=window.onerror,s=!1,c=0;t("loader").features.err=!0,t(3),window.onerror=e;try{throw new Error}catch(u){"stack"in u&&(t(4),t(5),"addEventListener"in window&&t(1),window.XMLHttpRequest&&XMLHttpRequest.prototype&&XMLHttpRequest.prototype.addEventListener&&window.XMLHttpRequest&&XMLHttpRequest.prototype&&XMLHttpRequest.prototype.addEventListener&&!/CriOS/.test(navigator.userAgent)&&t(2),s=!0)}i.on("fn-start",function(){s&&(c+=1)}),i.on("fn-err",function(t,e,r){s&&(this.thrown=!0,n(r))}),i.on("fn-end",function(){s&&!this.thrown&&c>0&&(c-=1)}),i.on("internal-error",function(t){r("ierr",[t,(new Date).getTime(),!0])})},{1:5,2:8,3:3,4:7,5:6,6:21,ee:"QJf3ax",handle:"D5DuLP",loader:"G9z0Bl"}],5:[function(t,e){function n(t){i.inPlace(t,["addEventListener","removeEventListener"],"-",r)}function r(t){return t[1]}var o=(t(1),t("ee").create()),i=t(2)(o),a=t("gos");if(e.exports=o,n(window),"getPrototypeOf"in Object){for(var s=document;s&&!s.hasOwnProperty("addEventListener");)s=Object.getPrototypeOf(s);s&&n(s);for(var c=XMLHttpRequest.prototype;c&&!c.hasOwnProperty("addEventListener");)c=Object.getPrototypeOf(c);c&&n(c)}else XMLHttpRequest.prototype.hasOwnProperty("addEventListener")&&n(XMLHttpRequest.prototype);o.on("addEventListener-start",function(t){if(t[1]){var e=t[1];"function"==typeof e?this.wrapped=t[1]=a(e,"nr@wrapped",function(){return i(e,"fn-",null,e.name||"anonymous")}):"function"==typeof e.handleEvent&&i.inPlace(e,["handleEvent"],"fn-")}}),o.on("removeEventListener-start",function(t){var e=this.wrapped;e&&(t[1]=e)})},{1:21,2:22,ee:"QJf3ax",gos:"7eSDFh"}],6:[function(t,e){var n=(t(2),t("ee").create()),r=t(1)(n);e.exports=n,r.inPlace(window,["requestAnimationFrame","mozRequestAnimationFrame","webkitRequestAnimationFrame","msRequestAnimationFrame"],"raf-"),n.on("raf-start",function(t){t[0]=r(t[0],"fn-")})},{1:22,2:21,ee:"QJf3ax"}],7:[function(t,e){function n(t,e,n){t[0]=o(t[0],"fn-",null,n)}var r=(t(2),t("ee").create()),o=t(1)(r);e.exports=r,o.inPlace(window,["setTimeout","setInterval","setImmediate"],"setTimer-"),r.on("setTimer-start",n)},{1:22,2:21,ee:"QJf3ax"}],8:[function(t,e){function n(){u.inPlace(this,p,"fn-")}function r(t,e){u.inPlace(e,["onreadystatechange"],"fn-")}function o(t,e){return e}function i(t,e){for(var n in t)e[n]=t[n];return e}var a=t("ee").create(),s=t(1),c=t(2),u=c(a),f=c(s),d=window.XMLHttpRequest,p=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"];e.exports=a,window.XMLHttpRequest=function(t){var e=new d(t);try{a.emit("new-xhr",[],e),f.inPlace(e,["addEventListener","removeEventListener"],"-",o),e.addEventListener("readystatechange",n,!1)}catch(r){try{a.emit("internal-error",[r])}catch(i){}}return e},i(d,XMLHttpRequest),XMLHttpRequest.prototype=d.prototype,u.inPlace(XMLHttpRequest.prototype,["open","send"],"-xhr-",o),a.on("send-xhr-start",r),a.on("open-xhr-start",r)},{1:5,2:22,ee:"QJf3ax"}],9:[function(t){function e(t){var e=this.params,r=this.metrics;if(!this.ended){this.ended=!0;for(var i=0;c>i;i++)t.removeEventListener(s[i],this.listener,!1);if(!e.aborted){if(r.duration=(new Date).getTime()-this.startTime,4===t.readyState){e.status=t.status;var a=t.responseType,u="arraybuffer"===a||"blob"===a||"json"===a?t.response:t.responseText,f=n(u);if(f&&(r.rxSize=f),this.sameOrigin){var d=t.getResponseHeader("X-NewRelic-App-Data");d&&(e.cat=d.split(", ").pop())}}else e.status=0;r.cbTime=this.cbTime,o("xhr",[e,r,this.startTime])}}}function n(t){if("string"==typeof t&&t.length)return t.length;if("object"!=typeof t)return void 0;if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if("undefined"!=typeof FormData&&t instanceof FormData)return void 0;try{return JSON.stringify(t).length}catch(e){return void 0}}function r(t,e){var n=i(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.sameOrigin=n.sameOrigin}if(window.XMLHttpRequest&&XMLHttpRequest.prototype&&XMLHttpRequest.prototype.addEventListener&&!/CriOS/.test(navigator.userAgent)){t("loader").features.xhr=!0;var o=t("handle"),i=t(2),a=t("ee"),s=["load","error","abort","timeout"],c=s.length,u=t(1);t(4),t(3),a.on("new-xhr",function(){this.totalCbs=0,this.called=0,this.cbTime=0,this.end=e,this.ended=!1,this.xhrGuids={}}),a.on("open-xhr-start",function(t){this.params={method:t[0]},r(this,t[1]),this.metrics={}}),a.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),a.on("send-xhr-start",function(t,e){var r=this.metrics,o=t[0],i=this;if(r&&o){var u=n(o);u&&(r.txSize=u)}this.startTime=(new Date).getTime(),this.listener=function(t){try{"abort"===t.type&&(i.params.aborted=!0),("load"!==t.type||i.called===i.totalCbs&&(i.onloadCalled||"function"!=typeof e.onload))&&i.end(e)}catch(n){try{a.emit("internal-error",[n])}catch(r){}}};for(var f=0;c>f;f++)e.addEventListener(s[f],this.listener,!1)}),a.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),a.on("xhr-load-added",function(t,e){var n=""+u(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),a.on("xhr-load-removed",function(t,e){var n=""+u(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),a.on("addEventListener-end",function(t,e){e instanceof XMLHttpRequest&&"load"===t[0]&&a.emit("xhr-load-added",[t[1],t[2]],e)}),a.on("removeEventListener-end",function(t,e){e instanceof XMLHttpRequest&&"load"===t[0]&&a.emit("xhr-load-removed",[t[1],t[2]],e)}),a.on("fn-start",function(t,e,n){e instanceof XMLHttpRequest&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=(new Date).getTime()))}),a.on("fn-end",function(t,e){this.xhrCbStart&&a.emit("xhr-cb-time",[(new Date).getTime()-this.xhrCbStart,this.onload,e],e)})}},{1:"XL7HBI",2:10,3:8,4:5,ee:"QJf3ax",handle:"D5DuLP",loader:"G9z0Bl"}],10:[function(t,e){e.exports=function(t){var e=document.createElement("a"),n=window.location,r={};e.href=t,r.port=e.port;var o=e.href.split("://");return!r.port&&o[1]&&(r.port=o[1].split("/")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=e.hostname||n.hostname,r.pathname=e.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname),r.sameOrigin=!e.hostname||e.hostname===document.domain&&e.port===n.port&&e.protocol===n.protocol,r}},{}],11:[function(t,e){function n(t){return function(){r(t,[(new Date).getTime()].concat(i(arguments)))}}var r=t("handle"),o=t(1),i=t(2);"undefined"==typeof window.newrelic&&(newrelic=window.NREUM);var a=["setPageViewName","addPageAction","setCustomAttribute","finished","addToTrace","inlineHit","noticeError"];o(a,function(t,e){window.NREUM[e]=n("api-"+e)}),e.exports=window.NREUM},{1:20,2:21,handle:"D5DuLP"}],"7eSDFh":[function(t,e){function n(t,e,n){if(r.call(t,e))return t[e];var o=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:o,writable:!0,enumerable:!1}),o}catch(i){}return t[e]=o,o}var r=Object.prototype.hasOwnProperty;e.exports=n},{}],gos:[function(t,e){e.exports=t("7eSDFh")},{}],handle:[function(t,e){e.exports=t("D5DuLP")},{}],D5DuLP:[function(t,e){function n(t,e,n){return r.listeners(t).length?r.emit(t,e,n):(o[t]||(o[t]=[]),void o[t].push(e))}var r=t("ee").create(),o={};e.exports=n,n.ee=r,r.q=o},{ee:"QJf3ax"}],id:[function(t,e){e.exports=t("XL7HBI")},{}],XL7HBI:[function(t,e){function n(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:i(t,o,function(){return r++})}var r=1,o="nr@id",i=t("gos");e.exports=n},{gos:"7eSDFh"}],G9z0Bl:[function(t,e){function n(){var t=p.info=NREUM.info,e=u.getElementsByTagName("script")[0];if(t&&t.licenseKey&&t.applicationID&&e){s(d,function(e,n){e in t||(t[e]=n)});var n="https"===f.split(":")[0]||t.sslForHttp;p.proto=n?"https://":"http://",a("mark",["onload",i()]);var r=u.createElement("script");r.src=p.proto+t.agent,e.parentNode.insertBefore(r,e)}}function r(){"complete"===u.readyState&&o()}function o(){a("mark",["domContent",i()])}function i(){return(new Date).getTime()}var a=t("handle"),s=t(1),c=(t(2),window),u=c.document,f=(""+location).split("?")[0],d={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-632.min.js"},p=e.exports={offset:i(),origin:f,features:{}};u.addEventListener?(u.addEventListener("DOMContentLoaded",o,!1),c.addEventListener("load",n,!1)):(u.attachEvent("onreadystatechange",r),c.attachEvent("onload",n)),a("mark",["firstbyte",i()])},{1:20,2:11,handle:"D5DuLP"}],loader:[function(t,e){e.exports=t("G9z0Bl")},{}],20:[function(t,e){function n(t,e){var n=[],o="",i=0;for(o in t)r.call(t,o)&&(n[i]=e(o,t[o]),i+=1);return n}var r=Object.prototype.hasOwnProperty;e.exports=n},{}],21:[function(t,e){function n(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(0>o?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=n},{}],22:[function(t,e){function n(t){return!(t&&"function"==typeof t&&t.apply&&!t[i])}var r=t("ee"),o=t(1),i="nr@wrapper",a=Object.prototype.hasOwnProperty;e.exports=function(t){function e(t,e,r,a){function nrWrapper(){var n,i,s,u;try{i=this,n=o(arguments),s=r&&r(n,i)||{}}catch(d){f([d,"",[n,i,a],s])}c(e+"start",[n,i,a],s);try{return u=t.apply(i,n)}catch(p){throw c(e+"err",[n,i,p],s),p}finally{c(e+"end",[n,i,u],s)}}return n(t)?t:(e||(e=""),nrWrapper[i]=!0,u(t,nrWrapper),nrWrapper)}function s(t,r,o,i){o||(o="");var a,s,c,u="-"===o.charAt(0);for(c=0;c<r.length;c++)s=r[c],a=t[s],n(a)||(t[s]=e(a,u?s+o:o,i,s))}function c(e,n,r){try{t.emit(e,n,r)}catch(o){f([o,e,n,r])}}function u(t,e){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(t);return n.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(r){f([r])}for(var o in t)a.call(t,o)&&(e[o]=t[o]);return e}function f(e){try{t.emit("internal-error",e)}catch(n){}}return t||(t=r),e.inPlace=s,e.flag=i,e}},{1:21,ee:"QJf3ax"}]},{},["G9z0Bl",4,9]);</script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="${ctx}/js/action2.js"
        async="" type="text/javascript"></script>

<script src="${ctx}/other/521071e652"
        type="text/javascript"></script>
<script src="${ctx}/js/AltSealInfo.js"
        async="" type="text/javascript"></script>
<script src="${ctx}/js/linkid.js"
        async="" type="text/javascript"></script>
<script src="${ctx}/js/rollover.js"
        async="" type="text/javascript"></script>
<script src="${ctx}/js/script.js"
        async="" id="ftr__script" type="text/javascript"></script>


<title>Watches</title>
<script type="text/javascript"
        src="${ctx}/js/epr8jgv.js"></script>
<style type="text/css">.test, .tk-proxima-nova {
    font-family: "proxima-nova", sans-serif;
}</style>
<link media="all"
      href="${ctx}/css/d.css"
      rel="stylesheet">
<script type="text/javascript">try {
    Typekit.load();
} catch (e) {
}</script>
<!--[if lt IE 7]>
<script type="text/javascript">
    //<![CDATA[
//]]>
</script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="${ctx}/css/style1.css" media="all">
<link rel="stylesheet" type="text/css"  href="${ctx}/css/style2.css"  media="print">
<script type="text/javascript" src="${ctx}/js/script2.js"></script>
<script src="${ctx}/js/jquery.js"></script>
<!--[if lt IE 8]>
<![endif]-->
<!--[if lt IE 7]>
<script type="text/javascript" src="${ctx}/js/script3.js"></script>
<![endif]-->



<script type="text/javascript">
    //<![CDATA[
    optionalZipCountries = ["HK", "IE", "MO", "PA"];
    //]]>
</script>
<script type="text/javascript">(function () {
    window.ftr__startScriptLoad = new Date().getTime();
})()</script>
<!-- MyBuys Version 1.1.26 -->
<link href="${ctx}/css/styles.css"
      type="text/css" rel="stylesheet" id="mybuysstyles">
<script type="text/javascript"
        src="${ctx}/js/mybuys4.js"></script>

<script type="text/javascript"
        src="${ctx}/js/setup.js"></script>
<style type="text/css">.mbzone {
    border-style: solid;
    border-width: 1px;
    border-color: #0029B9;
}

.mblegend {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    text-align: center;
    color: #0029B9;
    font-size: 15px;
    font-weight: bold;
}

.mbitem {
    width: 150px;
}

.mbnamelink:link {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mbnamelink:visited {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mbnamelink:hover {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mbpricerowleft {
    cssFloat:;
    text-align:;
}

.mbpricerowright {
    cssFloat:;
    text-align:;
}

.mbpricelabellink:link {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mbpricelabellink:visited {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mbpricelabellink:hover {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mbpricelink:link {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mbpricelink:visited {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mbpricelink:hover {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mbpricerowspan {
    text-align: center;
}

.mblistrowleft {
    cssFloat:;
    text-align:;
}

.mblistrowright {
    cssFloat:;
    text-align:;
}

.mblistlabellink:link {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mblistlabellink:visited {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mblistlabellink:hover {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mblistlink:link {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mblistlink:visited {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mblistlink:hover {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    text-decoration: none;
}

.mblistrowspan {
    text-align: center;
}

.mbsalerowleft {
    cssFloat:;
    text-align:;
}

.mbsalerowright {
    cssFloat:;
    text-align:;
}

.mbsalelabellink:link {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #CC0000;
    font-size: 10px;
    font-weight: bold;
    text-decoration: none;
}

.mbsalelabellink:visited {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #CC0000;
    font-size: 10px;
    font-weight: bold;
    text-decoration: none;
}

.mbsalelabellink:hover {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #CC0000;
    font-size: 10px;
    font-weight: bold;
    text-decoration: none;
}

.mbsalelink:link {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #CC0000;
    font-size: 10px;
    font-weight: bold;
    text-decoration: none;
}

.mbsalelink:visited {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #CC0000;
    font-size: 10px;
    font-weight: bold;
    text-decoration: none;
}

.mbsalelink:hover {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #CC0000;
    font-size: 10px;
    font-weight: bold;
    text-decoration: none;
}

.mbsalerowspan {
    text-align: center;
} </style>

<script type="text/javascript">
    var slibaseurlsearch = '/product/notImpl';
    var slibaseurl = '/product/notImpl';
</script>
<script type="text/javascript">
    var ajaxsearch = true;
    var slibaseurlsearch = '/product/notImpl';
</script>


<style type="text/css">
    .saSchema {
        display: block;
        font-size: 9px;
        text-align: center;
        width: 100%;
        position: relative;
        z-index: 999;
        margin: -40px 0px 0px 0px;
    }

    body.cms-home .saSchema, body.cms-index-index .saSchema {
        display: none;
    }
</style>
<script type="text/javascript">//<![CDATA[
var Translator = new Translate([]);
//]]></script>
<script src="${ctx}/other/spx"
        type="text/javascript"></script>
<script type="text/javascript">
    (function () {
        "use strict";
        var e = null, b = "4.0.0",
                n = "9634",
                additional = "",
                t, r, i;
        try {
            t = top.document.referer !== "" ? encodeURIComponent(top.document.referrer.substring(0, 2048)) : ""
        } catch (o) {
            t = document.referrer !== null ? document.referrer.toString().substring(0, 2048) : ""
        }
        try {
            r = window && window.top && document.location && window.top.location === document.location ? document.location : window && window.top && window.top.location && "" !== window.top.location ? window.top.location : document.location
        } catch (u) {
            r = document.location
        }
        try {
            i = parent.location.href !== "" ? encodeURIComponent(parent.location.href.toString().substring(0, 2048)) : ""
        } catch (a) {
            try {
                i = r !== null ? encodeURIComponent(r.toString().substring(0, 2048)) : ""
            } catch (f) {
                i = ""
            }
        }
        var l, c = document.createElement("script"), h = null, p = document.getElementsByTagName("script"), d = Number(p.length) - 1, v = document.getElementsByTagName("script")[d];
        if (typeof l === "undefined") {
            l = Math.floor(Math.random() * 1e17)
        }
        h = "dx.steelhousemedia.com/spx?" + "dxver=" + b + "&shaid=" + n + "&tdr=" + t + "&plh=" + i + "&cb=" + l + additional;
        c.type = "text/javascript";
        c.src = ("https:" === document.location.protocol ? "https://" : "http://") + h;
        v.parentNode.insertBefore(c, v)
    })()
</script>

<!--[if LTE IE 8 ]>
<style>
    .simplemodal-container {
        display: none !important;
    }

    .loadingwait {
        display: none !important;
    }

    .quick-view {
        display: none !important;
    }
</style>
<![endif]-->

<style>


/**TOP MENU CHANGES**/
/** DESKTOP **/
/* PROMO HOMEPAGE */
/* PROMO HOMEPAGE MOBILE */

/* PROMO HOMEPAGE MOBILE */
@media only screen and (max-width: 767px) {
    .content-jewellry-left {
        left: 0px !important;
        top: 0px !important;
        width: 280px !important;
        text-align: left !important;
        height: 290px !important;
        padding-top: 25px !important;
        padding-left: 25px !important;
        background: rgba(0, 0, 0, 0.5) !important;
    }

    .promo-shop-jewelry-mobile, .promo-shop-sale-mobile {
        max-height: 200px !important;
        overflow: hidden;
    }

    .content-jewellry-left h2, .std .content-jewellry-left p {
        color: #fff !important;
    }

    .push-button a {
        margin-left: 0px;
    }

    /* SEARCH MOBILE */
    .header .form-search {
        width: 100%;
    }

    .header .form-search input.input-text {
        width: 100%;
    }
}

/* FOOTER */

/* CHECKOUT DESKTOP

div#promo-code {
display: none;
} */

#ac-page .gift-messages {
    padding-top: 0px;
    margin-top: 0px;
}

#ac-page .form .sidetip p {
    display: none !important;

}

.checkout-cart-index .cart .totals .btn-proceed-checkout {
    margin-bottom: 15px;
}

p.paypal-logo {
    float: right;
}

.checkout-types div {
    margin: 0px;
}

@media only screen and (max-width: 767px) {

    p.paypal-logo {
        float: right;
    }

    .checkout-cart-index .cart .totals .checkout-types li:last-child {
        width: auto;
        margin: 0 auto;
    }

    .checkout-types div {
        margin: 0px;
    }

    .checkout-cart-index .cart .totals .checkout-types p {
        margin-top: 0px;
        margin-left: 0px;
    }
}

/* HOMEPAGE SLIDER */

.slide-caption-container {
    left: 25%;
    display: block !important;

}

.small-text {
    padding-bottom: 35px;
}

.featured-brands {
    left: 6.4%;
}

.product-attributes .attribute-group:last-child {
    width: 100%;
}

@media only screen and (max-width: 610px) {
    #custom-banner-sales {
        margin-top: -30px !important;
    }

    .checkout-cart-index .cart .totals .checkout-types p {
        margin-top: 0px;

    }
}

/* PRODUCT INFORMATION BLOCK */

@media only screen and (max-width: 997px) and (min-width: 768px) {

    .product-attributes .attribute-group {
        margin-bottom: 0px;
    }

    .product-attributes .attribute-group .attribute-data {
        width: 50%;
        line-height: 12px;
    }

    .product-attributes .attribute-group ul li {
        margin-bottom: 0px;
    }

    .product-attributes .attribute-group:last-child {
        width: 48%;
    }
}

@media only screen and (max-width: 767px) {
    .product-attributes .attribute-group:nth-child(even) {
        float: none;
    }

}

/* prices */
.products-grid .product-info .savings-note {
    line-height: 28px;
}

.products-grid .product-info .price-box .old-price {
    display: none;
}

@media only screen and (max-width: 767px) {
    .cms-home .col1-layout .product-name {
        height: 30px;
        overflow: hidden;
    }

    .products-grid .product-info .savings-note {
        line-height: 12px;
    }
}

/* Category page 2 lines to 3 lines */
.products-grid .product-info .product-name a {
    height: 45px;
}

/* MyBuys */

.MB_STY3 {
    max-height: 30px !important;
    overflow: hidden;
}

@media only screen and (max-width: 767px) {

    .MB_PROD2 {
        width: auto !important;
        margin: 0 auto;
        padding-left: 0px !important;
    }

    div#mybuyspagezone2 {
        width: 100% !important;
        margin: 0 auto !important;
    }

    .MB_PROD2 .MB_STY0 {
        padding: 20px 0px 10px 0px;
        font-family: 'proxima-nova-n6', 'proxima-nova', sans-serif;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: #000000;
        text-transform: uppercase;
    }

}

@media only screen and (max-width: 420px) {

    .MB_PROD2 {
        width: 50% !important;
    }

}

/* PDP Price Info */

@media only screen and (max-width: 997px) and (min-width: 768px) {
    .price-shipping-info {
        margin-top: 15px;
        margin: 0 auto;
        width: 75%;
    }

    .product-view .product-shop .add-to-cart {
        padding: 0 0 20px 0;
        margin: 0 auto;
        width: 100%;
    }

}

@media only screen and (max-width: 767px) {
    .price-shipping-info ul li label {
        width: 85px;
        float: left;
        margin: 0 auto;
        display: inline-block;
        width: 95px;
        text-align: left;
        font-size: 16px;
    }

    .price-shipping-info ul li {
        padding-bottom: 2px;
        width: 65%;
        margin: 0 auto;
    }

    .price-shipping-info ul li span {
        font-size: 16px;
        text-align: right !important;
        display: block;
        margin: 0 auto;

    }

    li.pdp-shipping-availability {
        padding-top: 10px;
    }

    .product-view .product-shop .product-main-col2-set .col-1 {
        min-height: 165px;
    }
}

@media only screen and (max-width: 450px) {

    .products-grid .product-info .savings-note {
        display: none;
    }

    .products-grid .product-info .price-box {
        width: 100%;
        margin-right: 0px;
    }

    .products-grid .product-info .price-link {
        height: 25px;
    }

}

/* PLP BANNERS */
@media only screen and (max-width: 997px) and (min-width: 768px) {

    div#noimg.plp-header-content-block > h1.category-description.std {
        display: block;
        margin-top: 0px;
        padding: 15px 0px;
        top: 0;
    }

}

@media only screen and (max-width: 767px) {

    div#noimg.plp-header-content-block > h1.category-description.std {
        display: block;
    }

    span#products-count {
        display: none;
    }

    div#noimg.plp-header-content-block {
        background: none;
    }

}

/* top container */

@media only screen and (max-width: 767px) {
    .top-container {
        display: none;
    }
}

/* Top Cart */
@media only screen and (max-width: 767px) {
    .top-cart .block-title, .top-cart .block-title.expanded {
        width: 28px;
        height: 39px;
    }

}

/* CALL US */

.top-links-joma span a {
    text-decoration: none;
    color: #fff;
}

@media only screen and (max-width: 767px) {
    .wrapper {
        width: 95%;
        padding: 0px 5px;
    }
}

div#left

.404
{
    width: 50%
;
    float: left
;
}
div#right

.404
{
    width: 40%
;
    float: right
;
}

@media only screen and (max-width: 997px) {
    div#left

.404 {
    width: 100%;
    float: left;
    text-align: center;
}
    div#right

.404 {
    width: 100%;
    float: right;
    text-align: center;
}
}

.plpblurb {
    font-size: 14px;
    background: #fff;
    font-style: normal;
    font: normal 400 14px/14px "proxima-nova-n3", "proxima-nova", sans-serif;
    color: #333;
    text-align: left;
    line-height: 20px;
    padding: 10px 90px;
}

.product-image-wrapper .onsale-product-container-inside {
    background-size: 81px !important;
    width: 81px !important;
    height: 81px !important;
}

.block-layered-nav-wrapper .filter-body .layerednavigation {
    margin: 7px 6px 7px 7px;
    width: 306px !important;
}

.block-layered-nav-wrapper .filter-body .slimScrollDiv {
    height: 160px !important;
    margin: 0px;
}

/* SALES AND EVENTS FIX */
.sales-events-wrapper a.even {
    float: right;
}

.sales-events-wrapper a img {
    width: auto;
}

@media only screen and (max-width: 767px) {
    .sales-events-wrapper {
        margin-top: 10px;
    }
}

@media only screen and (max-width: 1183px) {
    .sales-events-wrapper a img {
        width: 100%;
    }
}

/*NAV SALE COLOR */
.nav-7 a {
    color: #D80D0D !important;
}

/* SALE HEADER */

@media only screen and (max-width: 767px) {
    h2.no-span {
        width: 90%;
        margin: 0 auto;
    }
}

h2.no-span {
    display: table;
    white-space: nowrap;
}

h2.no-span:before, h2.no-span:after {
    border-top: 1px solid #000;
    content: '';
    display: table-cell;
    position: relative;
    top: .7em;
    width: 45%;
}

h2.no-span:before {
    right: 1.5%;
}

h2.no-span:after {
    left: 1.5%;
}

/* MB */

.save-offer {
    display: none !important;
}

#opc-review p:nth-of-type(2) {
    display: none !important;
}

#ac-page .gift-messages {
    display: none !important;
}

.gift-messages-form {
    display: block !important;
}

#ac-page .gift-messages-form .inner-box {
    background: #fff !important;
}

#ac-page .gift-messages-form .inner-box .form-list {
    padding: 23px 0px 10px 37px;
    background: #efefef;
}

.form-list p {
    /* display: none!important; */
}

#ac-page #discount-coupon-form-wrapper {
    display: none;
}

.cms-home div#backtop, .checkout-onepage-index div#backtop, .checkout-cart-index div#backtop, .customer-account-login div#backtop, .my-account-pages div#backtop {
    display: none !important;
}

div#backtop {
    display: none;
    position: fixed;
    right: 40px;
    bottom: 40px;
}

@media only screen and (max-width: 1155px) {
    div#backtop {
        display: none !important;
    }
}

/* CART FIX */

#ac-page .my-cart {
    background-position: right;
}

#ac-page .my-cart::before {
    content: "Back to Cart";
    text-align: left;
    position: relative;
    right: 35px;
    top: 20px;
    font-family: 'Proxima Nova', sans-serif;
}

@media (max-width: 767px) {
    #ac-page .my-cart::before {
        display: none;
    }

    #ac-page .my-cart {
        top: 15%;
    }
}

#toPopup .product-view .product-img-box .more-views {
    padding: 0px !important;
    margin: 10px 0 0;
}

.validation-failed {
    border: #c3cbd5 solid 1px !important;
}

.validation-advice {
    background: #fff !important;
    color: #f00 !important;
    border: 0px !important;
    text-indent: 0px !Important;
}

.uniform-validation-failed {
    border: #c3cbd5 solid 1px !important;
}

/
* reviews *

/

a.write-review-button {
    margin-top: 20px;
}

/* gift card */

.product-gift-card dd#tab-container-details {
    padding-left: 45px;
    width: 90%;
}

@media only screen and (max-width: 997px) and (min-width: 768px) {
    .product-type-giftcard .product-view .product-shop .col-1 .add-to-cart {
        display: block !important;
    }

    .product-type-giftcard .product-type-data-info {
        border: 0px !important;
        padding: 0 15px 10px;
        width: 280px;
    }

    .product-type-giftcard .product-view .product-shop .add-to-cart {
        width: 100% !important;
    }
}

/
* reviews page *

/
.reviews {
    width: 100%;
    float: left;
    margin-bottom: 10px;
}

.reviews #left {
    float: left;
    width: 60%;
}

.reviews #right {
    float: right;
    width: 37%;
}

.reviewbox {
    position: relative;
    width: 310px;
    height: auto;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), 0 0 0px rgba(0, 0, 0, 0.1) inset;
    border-radius: 0%;
    border: 1px solid #ccc;
    padding: 20px 20px 0px 20px;
    margin-bottom: 30px;
}

.blurb div:nth-child(2) {
    width: 60%;
    float: left;
    display: inline-block;
}

.blurb div:nth-child(1) {
    float: left;
    width: 35%;
    display: inline-block;
    height: 100%;
    padding: 50px 0px;
}

.blurb {
    border-top: 1px solid #ccc;
    float: left;
    padding: 20px 0px;
    height: 360px;
    margin-top: 25px;
}

}

.reviewbox span {
    text-align: center;
    font-style: oblique;
}

.reviewbox li {
    border: 0px;
    width: 100%;
    float: left;
    display: block;
    padding: 35px 0px;
    border-top: 1px solid #ccc;
    quotes: '”' '„';
}

.reviewbox li:after {
    content: close-quote;
    color: #ccc;
    font-size: 4em;
    line-height: .001em;
    margin-left: .5em;
    float: right;
}

.reviewbox li:before {
    content: open-quote;
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
}

.reviewbox ul {
    list-style-type: none;
    float: left;
    height: 220px;
    overflow-x: hidden;
    padding-right: 15px;
}

.reviews a, .reviews a:visited {
    color: #335ea2;
    font-family: Arial, sans-serif;
    font-size: 12px;
}

#readmore {
    text-align: center;
    font-style: oblique;
}

.reviews ul, .reviews li {
    font-family: Arial, sans-serif;
    font-size: 12px;
    list-style-type: none;
    padding: 0px;
}

.reviewbox li {
    border: 0px;
    width: 100%;
    float: left;
    display: block;
    padding: 35px 0px;
    border-top: 1px solid #ccc;
    quotes: '”' '„';
}

/* modal errors */

#error-message .modal-ac-header {
    color: #315180;
}

/* gallery slider fix for chrome */
.owl-carousel .owl-item li {
    -webkit-backface-visibility: hidden;
}

/* removed product count */
span#products-count {
    display: none;
}

/* events homepage */
.sales-events-home {
    display: block;
    float: left;
    margin-bottom: 20px;
    width: 100%;
}

.sales-events-home a {
    float: left;
}

.sales-events-home a:last-child {
    padding-left: 22px;
}

.sales-events-home img {
    width: 100%;
    max-width: 567px;
}

@media only screen and (max-width: 1196px) and (min-width: 763px) {
    /* PRICE PROMO */
    .product-view .product-shop .product-main-col2-set .col-1 {
        width: 49% !important;
    }

    .product-view .product-shop .pdp-final-price p.final-price {
        max-width: 300px !important;
    }

    .sales-events-home {
        margin: 10px auto 0px auto !important;
    }
}

.sales-events-home a {
    width: 49%;
    float: left;
}

.sales-events-home a:last-child {
    padding-left: 0px;
    float: right;
}

}

@media only screen and (max-width: 768px) {

    .sales-events-home {
        max-width: 567px;
        margin: 10px auto 0px auto !important;
        float: none;
        display: block;
        width: 100%;
    }

    .sales-events-home img {
        width: 100%;
        margin: 0 auto;
        display: block;
    }

    .sales-events-home a:last-child {
        padding-left: 0px;
        margin-top: 10px;

    }
}

.slide-caption-container .caption-default {
    top: 25%;
    position: relative;
}

/* PRICE PROMO */

.product-view .product-shop .pdp-final-price span.doorbuster-price a {
    color: #D80D0D !important;
    font-size: 11px !important;
    font-weight: 300 !important;
    max-width: 165px !important;
}

a[data-sale-tooltip="Coupons aren't valid on this item, but have no fear, this item's price is probably the lowest ever! Enjoy the savings!"]:before, a[data-sale-tooltip="Coupons aren't valid on this item, but have no fear, this item's price is probably the lowest ever! Enjoy the savings!"]:after {
    display: none;
}

/* AJAX LOADER */

/* -------------- Clock -------------- */

#ajax-loader {
    border-radius: 60px;
    border: 6px solid #414C5C;
    height: 80px;
    width: 80px;
    position: fixed;
    top: 50%;
    left: 49.5%;
    background-image: none !important;
    background: #fff;
    -moz-box-shadow: 0 0 5px #fff;
    -webkit-box-shadow: 0 0 5px #FFF;
    box-shadow: 0px 0px 15px #FFF;
}

#ajax-loader:after {
    content: "";
    position: absolute;
    background-color: #414C5C;
    top: 2px;
    left: 48%;
    height: 38px;
    width: 6px;
    border-radius: 5px;
    -webkit-transform-origin: 50% 97%;
    transform-origin: 50% 97%;
    -webkit-animation: grdAiguille 2s linear infinite;
    animation: grdAiguille 2s linear infinite;
}

@-webkit-keyframes grdAiguille {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes grdAiguille {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

#ajax-loader:before {
    content: "";
    position: absolute;
    background-color: #414C5C;
    top: 6px;
    left: 48%;
    height: 35px;
    width: 6px;
    border-radius: 5px;
    -webkit-transform-origin: 50% 94%;
    transform-origin: 50% 94%;
    -webkit-animation: ptAiguille 12s linear infinite;
    animation: ptAiguille 12s linear infinite;
}

@-webkit-keyframes ptAiguille {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes ptAiguille {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* MCAFEE */
@media only screen and (max-width: 997px) {
    #mcafee-footer {
        display: none !important;
    }
}

.product-view .product-shop .pdp-final-price span.doorbuster-price a {
    font-weight: 600 !important;
}

/*THRIVE*/

div#tcapiScModal.jom-popup {
    top: 0;
    width: 770px;
    left: 50%;
    margin-left: -385px;
}

a.tcapiScButton {
    font-size: 14px !important;
    text-decoration: none;
    color: #414c5c;
    line-height: 55px;
    text-align: left;
    float: left;
}

.checkout-cart-index .cart .cart-collaterals .button {
    clear: none;
}

@media only screen and (max-width: 997px) and (min-width: 768px) {

    div#tcapiScModal.jom-popup {
        width: 550px;
        margin-left: -275px;
    }
}

@media only screen and (max-width: 767px) {

    div#tcapiScModal.jom-popup {
        width: 426px;
        margin-left: -213px;
    }
}

/*SA*/
#sa_header_img {
    display: none !important;
}
</style>

<!--MageWorx_SeoSuite Next/Prev section begin-->
<link rel="next" href="/product/notImpl">
<!--MageWorx_SeoSuite Next/Prev section end-->
<style type="text/css">.mbzone {
    border-style: solid;
    border-width: 1px;
    border-color: #FFFFFF;
} </style>
<script src="${ctx}/other/bc.pv"
        type="text/javascript" async="" id="bcvm_script_1438516489871"></script>
</head>

<body class=" catalog-category-view categorypath- category-">
<div style="position: absolute; visibility: hidden; transition: none 0s ease 0s ; left: -1000px; top: -1000px; right: auto; bottom: auto;"
     id="buysafeRollover"></div>
<span style="display: inline; padding: 0px; margin: 0px; border: 0px none; position: fixed; bottom: 0px; top: auto; right: auto; left: 0px; z-index: 10001; background-color: transparent; height: auto; width: auto;"
      id="_GUARANTEE_SealSpan"><a
        href="https://www.nortonshoppingguarantee.com/Web/Seal/VerifySeal.aspx?PublicToken=FMpOO1X6aT5EF4T4AaT7HnVBNIz4od4%2fPB3Hgmq5ag1j95i%2f08KfF7us%2bZ1ndfE3vzDtjHXSJneRlHXv%2bLoO0Q%3d%3d&amp;MSPHASH=undefined&amp;G=1"
        id="buysafeseal_1_a" style="font-size: 0px;" target="_blank"><img style="vertical-align: bottom;"
                                                                          data-pin-no-hover="true"
                                                                          src="${ctx}/img/MP572831056a_Seal_BLX.png"
                                                                          id="buysafeseal_1_img"
                                                                          name="buysafeseal_1_img" border="0"></a><iframe
        style="padding: 0px; margin: 0px; border: 0px none; position: absolute; height: 100%; width: 100%; left: 0px; top: 0px; z-index: -2;"
        scrolling="no" marginheight="0" marginwidth="0" id="_GUARANTEE_SealSpan_frame" frameborder="0" height="100%"
        width="100%"></iframe><div
        style="font-family: Verdana,Arial,Helvetica,sans-serif; text-decoration: none; text-indent: 0px; text-transform: none; word-spacing: normal; letter-spacing: normal; position: absolute; border: 0px none; margin: 0px; padding: 0px; width: 100%; text-align: left; color: rgb(255, 255, 255); height: 14px; line-height: 13px; font-size: 8px; bottom: 0px; left: -1px;"
        data-pin-no-hover="true" class="buysafe buysafe_seal buysafe_date">
    <div style=" font-family:Verdana,Arial,Helvetica,sans-serif;text-decoration:none;text-indent:0;text-transform:none;word-spacing:normal;letter-spacing:normal;font-size:10px;text-align:right;position:absolute;border:0;margin:0;padding:0;width:100%;text-align:left;color:#ffffff;height:14px;line-height:13px;font-size:8px;;text-align:center;">
        8/2/2015
    </div>
</div></span>

<div class="wrapper">
<noscript>
    <div class="global-site-notice noscript">
        <div class="notice-inner">
            <p>
                <strong>JavaScript seems to be disabled in your browser.</strong><br/>
                You must have JavaScript enabled in your browser to utilize the functionality of this website. </p>
        </div>
    </div>
</noscript>
<div class="page">
<!-- ESI START DUMMY COMMENT [] -->
<!-- ESI URL DUMMY COMMENT -->

<div class="header-container">

    <div class="header">
        <div class="push-button"><a id="jqCorraMenu" href="javascript:;">Menu</a></div>
        <div class="top-links-joma">
            <div class="top-left-links"><span class="live-chat-top-head">

    </span><span class="phone-number"><p id="callus"><a>developed by Andrey Reznik</a>
            </p></span></div>
            <div class="top-links-cont">
                <c:out value="${miniCart}" default="default value of c:out" escapeXml="false"/>
                <!--<span class="seperator">|</span>-->
                <div class="top-myaccount" id="top-myaccount">
                <span id="top-myaccount-handle" data-href="/product/notImpl">My Account</span>

                <div id="myAccountContent" class="top-my-account-block" style="display:none">
                <div class="inner-wrapper">
                <ul class="links">
                <li class="first"><a class="jqLogin" href="#login-modal" id="1" title="Log In">Log In</a>
                </li>
                <li class=" last"><a class="jqLogin" href="#register-modal" id="2"
                title="register">Register</a></li>
                </ul>
                </div>
                </div>
                </div>
                <script type="text/javascript">
                    Enterprise.TopMyAccountLinks.initialize('myAccountContent');
                    jQuery(document).ready(function () {
                        jQuery('body').mouseover(function (e) {
                            var elem = e.target;
                            if (jQuery(elem).parents('#top-myaccount').length > 0 || jQuery(elem).attr("id") === 'top-myaccount') {
                                jQuery("#myAccountContent").stop(true, true).show();
                                jQuery('.top-myaccount').addClass('expanded');
                            }
                            else {
                                jQuery("#myAccountContent").hide();
                                jQuery('.top-myaccount').removeClass('expanded');
                            }

                        });

                        if (!isTouch()) {
                            jQuery("#top-myaccount-handle").click(function () {
                                if (jQuery("#myAccountContent ul li").length > 2) {
                                    window.location.href = jQuery(this).attr('data-href');
                                }
                            });
                        }
                    });
                </script>
            </div>
        </div>
        <div class="free-shipping"><span style="color:#D80D0D;"><a style="color:#D80D0D;text-decoration:none;"
                                                                   alt=""></a></span></div>
        <div class="branding">
            <div class="mob-chk-logo" style="display:none"><a href="/product/all" title="Watches" class="logo"><img
                    src="${ctx}/img/mob-logo.png"
                    alt="Watches"></a></div>
            <h2 class="logo"><strong>Watches</strong><a href="/product/all" title="Watches"
                                                        class="logo"><span><img title="Watches"
                                                                                src="${ctx}/img/logo.png"
                                                                                alt="Watches"></span></a></h2>

        </div>
        <div class="quick-access">
            <div class="checkout-link"></div>
            <form name="searchform" action="/product/notImpl" method="get" id="SliSearchProductForm"
                  onsubmit="ajaxsearchsubmit(this);return false;">
                <%--<div class="form-search">--%>
                <%--<label for="search">Search:</label>--%>
                <%--<input name="p" value="Q" type="hidden">--%>
                <%--<input name="asug" type="hidden">--%>
                <%--<input name="w" id="sli_search_1" class="input-text" autocomplete="off" size="20"--%>
                <%--placeholder="Search by brand or model" type="text">--%>
                <%--<button type="submit" title="Search" class="button"><span></span></button>--%>
                <%--</div>--%>
                <script type="text/javascript">
                    //<![CDATA[
                    var searchForm = new Varien.searchForm('SliSearchProductForm', 'sli_search_1', '');
                    //]]>
                </script>
            </form>
            <script type="text/javascript">
                function ajaxsearchsubmit(form) {
                    var search = encodeURIComponent(form.w.value);
                    if (ajaxsearch) {
                        window.location = slibaseurlsearch + "#w=" + search
                    } else {
                        var asug = encodeURIComponent(form.asug.value);
                        window.location = slibaseurlsearch + "?w=" + search + "&asug=" + asug;

                    }
                    return false;
                }
            </script>


        </div>
    </div>
    <div class="nav-container">
    </div>
    <script type="text/javascript">
        var liLength = jQuery('#myAccountContent li').length;
        if (liLength > 2) {
            jQuery('#my-accunt-menu-user').show();
            jQuery('#my-accunt-menu-guest').hide();
        } else {
            jQuery('#my-accunt-menu-user').hide();
            jQuery('#my-accunt-menu-guest').show();
        }
    </script>

    <div class="top-container">
        <div class="widget widget-banner">
            <ul>
                <li>THIS IS ISHOP DEMO VERSION
                </li>
            </ul>
        </div>
    </div>
</div>

<div>
    <decorator:body/>
</div>
<div class="footer-container">
    <div class="footer">
        <div class="footer-top">
            <form action="email-preference-center" method="get">
                <%--<div class="form-subscribe">--%>
                <%--<div class="form-subscribe-header">--%>
                <%--<label for="newsletter">Enter your email address to get updates<span--%>
                <%--class="no-display-mob">:</span></label>--%>
                <%--</div>--%>
                <%--<div class="v-fix"><input name="email" id="newsletter"--%>
                <%--class="input-text required-entry validate-email"--%>
                <%--placeholder="Email Address" type="email">--%>
                <%--<button type="submit" class="button" title="Sign Up"><span><span></span></span></button>--%>
                <%--</div>--%>
                <%--<p class="jqMessage" style="display:none;"></p>--%>
                <%--</div>--%>
            </form>
            <%--<div class="social-media-icons"><a class="footer-face-book-ic" href="https://www.facebook.com/ishop"--%>
            <%--target="_blank"></a> <a class="footer-twitter-ic"--%>
            <%--href="https://twitter.com/ishop"--%>
            <%--target="_blank"></a><a--%>
            <%--class="footer-pinterest-ic" href="http://www.pinterest.com/ishop/" target="_blank"></a> <a--%>
            <%--class="footer-googleplus-ic" href="https://plus.google.com/+ishop" target="_blank"></a></div>--%>
        </div>
        <script type="text/javascript">
            //<![CDATA[
            var newsletterSubscriberFormDetail = new VarienForm('newsletter-validate-detail');
            (function ($) {
                $(document).ready(function () {
                    $("#newsletter-validate-detail").submit(function (event) {
                        event.preventDefault();
                        var values = $(this).serialize();
                        var subscriptionUrl = "/product/notImpl/";
                        if (window.location.protocol == "http:") {
                            subscriptionUrl = subscriptionUrl.replace("https://", "http://");
                        } else if (window.location.protocol == "https:") {
                            subscriptionUrl = subscriptionUrl.replace("http://", "https://");
                        }
                        if (newsletterSubscriberFormDetail.validator && newsletterSubscriberFormDetail.validator.validate()) {
                            $.ajax({
                                url: subscriptionUrl,
                                type: "post",
                                data: values,
                                dataType: "json",
                                success: function (data) {
                                    if (data.success) {
                                        $('.jqMessage').html(data.success).show();
                                        $(".jqMessage").delay(3000).fadeOut();
                                    } else if (data.error) {
                                        $('.jqMessage').html(data.error).show();
                                        $(".jqMessage").delay(3000).fadeOut();
                                    }
                                },
                                error: function () {
                                }
                            });
                        }
                    });
                });
            })(jQuery);
            //]]>
        </script>
        <div class="live-chat-mob-footer">
            <div><a href="tel://1-877-834-1434"><img class="live-chat-mobile"
                                                     src="${ctx}/img/live-chat-mobile.png"
                                                     alt="Tap here to call us!"></a></div>
        </div>


        <div style="display: none;" id="backtop">

            <a href="javascript:void(0)" onclick="jQuery(window).scrollTop(0);" alt="Back to Top">

                <img src="${ctx}/img/scroll_up.png"
                     alt="Back to Top">

            </a>

        </div>


    </div>
</div>

<div id="ajax-loader"></div>
<div id="page-overlay"></div>


<!-- BEGIN: _GUARANTEE Seal -->

<script type="text/javascript"
        src="${ctx}/js/rollover_002.js"></script>
<script type="text/javascript">
    if (window._GUARANTEE && _GUARANTEE.Loaded) {
        _GUARANTEE.Hash = 'FMpOO1X6aT5EF4T4AaT7HnVBNIz4od4%2FPB3Hgmq5ag1j95i%2F08KfF7us%2BZ1ndfE3vzDtjHXSJneRlHXv%2BLoO0Q%3D%3D';
        _GUARANTEE.Responsive = { Breakpoints: [ 480, 768 ],
            Seal: { id: '_GUARANTEE_SealSpan', Breakpoint: 1 },
            Kickers: { 'Kicker Custom 4_1': [ '4', '4', '4' ],
                'Kicker Custom 5_1': [ '4', '5', '5' ],
                'Kicker Custom 6_1': [ '4', '6', '6' ]
            }
        };
        _GUARANTEE.WriteSeal("_GUARANTEE_SealSpan", "GuaranteedSeal");
    }
</script>
<!-- END: _GUARANTEE Seal -->
<!-- ESI END DUMMY COMMENT [] -->
<div id="turpentine-esi-block-a3dd330b83e0236f800288185dfa6930b359ba2429d48dfd403486f901c84410" style=""></div>

<script type="text/javascript">
    arrEcjs = [];
    function _ecjs(ecid, email) {
        new Ajax.Request("/product/notImpl/", {parameters: {cid: ecid, email: email}});
    }
    function ecjsInit() {
        for (var ecjsi = 0; ecjsi < arrEcjs.length; ecjsi++) {
            if ($(arrEcjs[ecjsi].id)) {
                $(arrEcjs[ecjsi].id).stopObserving("change", arrEcjs[ecjsi].fn);
                $(arrEcjs[ecjsi].id).observe("change", arrEcjs[ecjsi].fn);
            }
        }
    }
    arrEcjs.push({id: "newsletter", fn: function () {
        _ecjs(3, $(this).value);
    }});
    arrEcjs.push({id: "ltkmodal-email", fn: function () {
        _ecjs(4, $(this).value);
    }});
    document.observe("dom:loaded", function () {
        ecjsInit();
        Ajax.Responders.register({onComplete: function () {
            ecjsInit();
        }});
    });
</script>
<script type="text/javascript">
    mybuys.initPage();
</script>
<p class="saSchema">
</p>

</div>
</div>
<span style="display: none;" id="mybuyscontainer"><iframe
        src="${ctx}/htm/wr.htm"
        style="display: none;" id="mbframe" height="0" width="0"></iframe></span>
<script>
    Event.observe(window, 'scroll', function () {
        if (document.viewport.getScrollOffsets()['top'] >= 400) {
            $('backtop').setStyle({'display': 'block'});
        } else {
            $('backtop').setStyle({'display': 'none'});
        }
    });


    jQuery(document).ready(function () {
        jQuery(".owl-carousel").owlCarousel({autoplayTimeout: 6000, autoplayHoverPause: true, autoplay: true});
    });
</script>



<img
        style="display: none;" height="1" border="0" width="1"><img
        src="${ctx}/img/a_002.gif"
        style="display: none;" height="1" border="0" width="1">
<script src="${ctx}/other/st"
        type="text/javascript"></script>
<script type="text/javascript">CxTv = {Ve: 'b', A: '4f', X: '77b', Op: 'r'};
CxTv.i = {ptnrid: 'decc4621-5c25-43fb-825f-4142a2b181cc'};
CxTp = ((document.location.protocol == 'https:') ? 'https:' : 'http:');
CxTr = ((CxTp == 'https:') ? '//t' : '//s');
CxTs = document.createElement('script');
CxTs.type = 'text/javascript';
CxTs.async = true;
CxTs.src = CxTp + CxTr + '.cxt.ms/action2.js';
CxTn = document.getElementsByTagName('script')[0];
CxTn.parentNode.insertBefore(CxTs, CxTn);</script>
<script src="${ctx}/other/serve"
        type="text/javascript"></script>
<ul style="z-index: 30000; display: none; top: 130px; width: 274px; left: 1062px;" class="rich"
    id="sli_autocomplete"></ul>
<iframe style="border: 0px none; display: none;" scrolling="no"
        src="${ctx}/htm/cse.htm"
        id="Cpxfr" frameborder="0" height="0" width="0"></iframe>
<div></div>
</body>
</html>


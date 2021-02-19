//端口根目录
var baseURL = "http://localhost:8888"

$.ajaxPrefilter(function (options) {
    options.url = baseURL + options.url;
});
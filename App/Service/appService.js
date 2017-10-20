app.factory("appService", ["ajaxServer",function (ajaxServer) {
    var appService={
        getha: function () {
            return ajaxServer.ajax("get","http://localhost:8080/?data");
        }

    };
    return appService;

}])
app.directive("fuwu", function () {
    return {
        templateUrl:"App/View/template/_fuwu.html",
        controller:"fuwucon",
        link: function (scope, ele, attr,controller) {
            new iScroll('wrappers',{
                scrollX: true,
                scrollY: false,
                mouseWheel: true
            });
            var h=$(".fullup").height();
            function up(){
                alert(1111);

            };
            var scroll=new iScroll('wrapper',{
                scrollbars: true,
                fadeScrollbars: true,
                topOffset:h,
                onScrollMove: function () {

                    if(this.y>this.maxScrollY&&!$(".fullup").hasClass("flip")){
                        $(".fullup").addClass("flip");
                        $(".fullup").children().text("正在加载");

                    }
                },
                onScrollEnd: function () {
                    if($(".fullup").hasClass("flip")){
                        $(".fullup").removeClass("flip");
                        $(".fullup").addClass("loading");
                        up();
                    }
                },
                onRefresh: function () {
                    if($(".fullup").hasClass("loading")){
                        $(".fullup").removeClass("loading");
                        $(".fullup").children().text("上拉加载");
                    }
                }

            });

           // console.log($("#wrappers"));
        }
    }
})
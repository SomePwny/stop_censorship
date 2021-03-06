beforeEach(function() {
    this.sopa = null;
    var self = this;

    var promise = CloudFlare.require(["stop_censorship"], function(sopa){
        self.sopa = sopa;
        window.$ = sopa.$
        window.user = sopa.user
    })

    waitsFor(function(){
        return this.sopa !== null;
    })
});

afterEach(function(){
    user.setCookie("__cfduid", "")
    user.setCookie("cf_sopa", "")
    $(".sopa_badge").remove()
    this.sopa.config.cookie = null
})

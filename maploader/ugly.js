(function() {
    "use strict";
    if (!t) var e = {};
    var t = !0;
    if (!t) var e = {};
    var t = !0;
    if (!t) var e = {};
    var t = !0;
    n || function() {}();
    var n = !0;
    r || function() {
        function t(t, n, r) {
            function i(t, n) {
                var r = [];
                for (var i in t) if (t.hasOwnProperty(i)) {
                    var s = e.datahelper.toPath(i.model), o = e.datahelper.toPath(i.texture);
                    r.push(s, o);
                }
                GLT.loadmanager.loadfiles({
                    files: r,
                    finished: function(e) {}
                });
            }
            function s(e) {
                for (var t = 0; t != e.leyers.length; t++) if (e.layer[t].name === "objects") return e.layer[t];
            }
            var o = t.width, u = t.height, a = s(t), t = [];
        }
        e.LEVELMANAGER.loadlevel = function(e, t, n) {
            var r = "data/" + e + ".json", i = "data/objects.json", s = null, o = null, u = {}, o = {};
            GLT.loadmanager.loadfiles({
                files: [ r, i ],
                update: t,
                finsished: function(e) {
                    u = e[r], o = e[i];
                },
                error: function(e, t) {
                    console.err(e, t);
                }
            });
        };
    }();
    var r = !0;
    if (!t) var e = {};
    var t = !0;
    n || function() {}();
    var n = !0;
    console.log("Hello world");
})();
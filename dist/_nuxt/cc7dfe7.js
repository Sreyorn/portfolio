(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    260: function (t, e, n) {
      "use strict";
      n.r(e);
      var c = { name: "IndexPage", layout: "home" },
        l = n(21),
        component = Object(l.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "flex flex-wrap justify-center" }, [
              n(
                "div",
                {
                  staticClass:
                    " pt-1 h-screen flex flex-col justify-center items-center",
                },
                [
                  t._m(0),
                  t._v(" "),
                  t._m(1),
                  t._v(" "),
                  n(
                    "span",
                    { staticClass: "text-2xl text-center text-gray-500" },
                    [t._v("MS in Science and Technology Policy")]
                  ),
                  t._v(" "),
                  n("div", { staticClass: "flex mt-5" }, [
                    n(
                      "div",
                      { staticClass: "hover:underline" },
                      [
                        n("NuxtLink", { attrs: { to: "/about" } }, [
                          t._v("ABOUT"),
                        ]),
                        t._v(" "),
                        n("span", { staticClass: "mx-5" }, [t._v("|")]),
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "div",
                      { staticClass: "hover:underline" },
                      [
                        n("NuxtLink", { attrs: { to: "/work" } }, [
                          t._v("WORK"),
                        ]),
                        t._v(" "),
                        n("span", { staticClass: "mx-5" }, [t._v("|")]),
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "div",
                      { staticClass: "hover:underline" },
                      [
                        n("NuxtLink", { attrs: { to: "/contact" } }, [
                          t._v(" CONTACT"),
                        ]),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
            ]);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("span", { staticClass: "text-6xl mb-2 text-center" }, [
                n("b", [t._v("iamorn LEN ")]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", { staticClass: "justify-center text-center" }, [
                n("span", { staticClass: "text-2xl text-gray-500" }, [
                  t._v("\n        BS in Computer Engineering  \n      "),
                ]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
  },
]);

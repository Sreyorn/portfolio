import { _ as v } from "./BxRSxPfj.js";
import {
  _ as f,
  o as s,
  c as l,
  a as t,
  b as i,
  w as r,
  F as h,
  m as p,
  t as x,
  q as _,
  s as b,
  u as w,
} from "./ddnCsWYY.js";
import { _ as y } from "./Sv9tOo-7.js";
const O = {
    data() {
      return {
        isOpen: !1,
        menuItems: [
          { name: "ABOUT", path: "/about" },
          { name: "WORK", path: "/work" },
          { name: "CONTACT", path: "/contact" },
        ],
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
      },
    },
  },
  B = { class: "bg-black p-6" },
  C = { class: "mx-auto px-4 sm:px-6 lg:px-8" },
  M = { class: "flex items-center h-16" },
  N = { class: "flex items-center" },
  j = { class: "flex-shrink-0" },
  I = { class: "hidden md:block" },
  L = { class: "ml-10 flex justify-center" },
  R = {
    class:
      "menuItem mr-10 text-xl hover:text-gray-600 focus:outline-none focus:bg-black focus:text-white",
  },
  T = { class: "mt-3 ml-8 flex md:hidden" },
  A = { class: "mt-5 px-2 pt-2 pb-3 sm:px-3 text-center" },
  E = {
    class:
      "block px-3 py-2 text-base text-white hover:text-black hover:bg-white focus:outline-none focus:bg-black focus:text-white",
  };
function F(k, e, u, m, n, c) {
  const a = v;
  return (
    s(),
    l("div", null, [
      t("nav", B, [
        t("div", C, [
          t("div", M, [
            t("div", N, [
              t("div", j, [
                i(
                  a,
                  { to: "/" },
                  {
                    default: r(
                      () =>
                        e[2] ||
                        (e[2] = [
                          t(
                            "p",
                            {
                              class: "text-5xl px-2 text-white hover:underline",
                            },
                            " iamorn ",
                            -1
                          ),
                        ])
                    ),
                    _: 1,
                  }
                ),
              ]),
              t("div", I, [
                t("div", L, [
                  (s(!0),
                  l(
                    h,
                    null,
                    p(
                      n.menuItems,
                      (o, d) => (
                        s(),
                        l("div", { key: d }, [
                          i(
                            a,
                            { to: o.path },
                            {
                              default: r(() => [
                                t("a", R, [t("b", null, x(o.name), 1)]),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["to"]
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]),
            t("div", T, [
              t(
                "button",
                {
                  onClick:
                    e[0] || (e[0] = (...o) => c.toggle && c.toggle(...o)),
                  class:
                    "inline-flex items-center justify-center p-2 hover:text-white hover:bg-white focus:outline-none focus:bg-black focus:text-white",
                },
                [
                  (s(),
                  l(
                    "svg",
                    {
                      class: _([n.isOpen ? "hidden" : "block", "h-6 w-6"]),
                      stroke: "white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                    },
                    e[3] ||
                      (e[3] = [
                        t(
                          "path",
                          {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M4 6h16M4 12h16M4 18h16",
                          },
                          null,
                          -1
                        ),
                      ]),
                    2
                  )),
                  (s(),
                  l(
                    "svg",
                    {
                      class: _([n.isOpen ? "block" : "hidden", "h-6 w-6"]),
                      stroke: "white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                    },
                    e[4] ||
                      (e[4] = [
                        t(
                          "path",
                          {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M6 18L18 6M6 6l12 12",
                          },
                          null,
                          -1
                        ),
                      ]),
                    2
                  )),
                ]
              ),
            ]),
          ]),
        ]),
        t(
          "div",
          { class: _([n.isOpen ? "" : "hidden", "md:hidden"]) },
          [
            t("div", A, [
              (s(!0),
              l(
                h,
                null,
                p(
                  n.menuItems,
                  (o, d) => (
                    s(),
                    l(
                      "div",
                      {
                        onClick:
                          e[1] || (e[1] = (...g) => c.toggle && c.toggle(...g)),
                        key: d,
                      },
                      [
                        i(
                          a,
                          { to: o.path },
                          { default: r(() => [t("a", E, x(o.name), 1)]), _: 2 },
                          1032,
                          ["to"]
                        ),
                      ]
                    )
                  )
                ),
                128
              )),
            ]),
          ],
          2
        ),
      ]),
    ])
  );
}
const S = f(O, [["render", F]]),
  V = {},
  q = { class: "dark:bg-gray-800 dark:text-gray-200" };
function z(k, e) {
  const u = S,
    m = b("nuxt"),
    n = y;
  return (
    s(),
    w(n, null, {
      default: r(() => [
        t("div", q, [
          i(u),
          i(m, { class: "mx-auto p-4 bg-black text-gray-200" }),
        ]),
      ]),
      _: 1,
    })
  );
}
const W = f(V, [["render", z]]);
export { W as default };

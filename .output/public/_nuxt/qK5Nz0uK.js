import { _ as l } from "./BxRSxPfj.js";
import {
  _ as i,
  c as a,
  a as e,
  b as o,
  w as r,
  d as s,
  o as d,
} from "./ddnCsWYY.js";
const x = { name: "IndexPage", layout: "home" },
  p = { class: "flex flex-wrap justify-center" },
  u = { class: "pt-1 h-screen flex flex-col justify-center items-center" },
  f = { class: "flex mt-5" },
  c = { class: "hover:underline" },
  m = { class: "hover:underline" },
  _ = { class: "hover:underline" };
function v(y, t, N, g, B, T) {
  const n = l;
  return (
    d(),
    a("div", p, [
      e("div", u, [
        t[6] ||
          (t[6] = e(
            "span",
            { class: "text-6xl mb-2 text-center" },
            [e("b", null, "iamorn LEN ")],
            -1
          )),
        t[7] ||
          (t[7] = e(
            "div",
            { class: "justify-center text-center" },
            [
              e(
                "span",
                { class: "text-2xl text-gray-500" },
                " BS in Computer Engineering "
              ),
            ],
            -1
          )),
        t[8] ||
          (t[8] = e(
            "span",
            { class: "text-2xl text-center text-gray-500" },
            "MS in Science and Technology Policy",
            -1
          )),
        e("div", f, [
          e("div", c, [
            o(
              n,
              { to: "/about" },
              { default: r(() => t[0] || (t[0] = [s("ABOUT")])), _: 1 }
            ),
            t[1] || (t[1] = e("span", { class: "mx-5" }, "|", -1)),
          ]),
          e("div", m, [
            o(
              n,
              { to: "/work" },
              { default: r(() => t[2] || (t[2] = [s("WORK")])), _: 1 }
            ),
            t[3] || (t[3] = s()),
            t[4] || (t[4] = e("span", { class: "mx-5" }, "|", -1)),
          ]),
          e("div", _, [
            o(
              n,
              { to: "/contact" },
              { default: r(() => t[5] || (t[5] = [s(" CONTACT")])), _: 1 }
            ),
          ]),
        ]),
      ]),
    ])
  );
}
const w = i(x, [["render", v]]);
export { w as default };

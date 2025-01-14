(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    162: function (n, e, t) {
      var content = t(224);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, t(69).default)("9f354e3c", content, !0, { sourceMap: !1 });
    },
    168: function (n, e, t) {
      "use strict";
      var r = t(21),
        component = Object(r.a)(
          {},
          function () {
            var n = this,
              e = n.$createElement,
              t = n._self._c || e;
            return t("client-only", [
              t(
                "div",
                { staticClass: "dark:bg-gray-800 dark:text-gray-200" },
                [
                  t("Menu"),
                  n._v(" "),
                  t("nuxt", {
                    staticClass: "mx-auto p-4 bg-black text-gray-200",
                  }),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = component.exports;
      installComponents(component, { Menu: t(225).default });
    },
    169: function (n, e, t) {
      "use strict";
      var r = t(21),
        component = Object(r.a)(
          {},
          function () {
            var n = this.$createElement,
              e = this._self._c || n;
            return e("client-only", [
              e(
                "div",
                { staticClass: "dark:bg-gray-800 dark:text-gray-200" },
                [
                  e("nuxt", {
                    staticClass: "mx-auto p-4 bg-black text-gray-200",
                  }),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = component.exports;
    },
    172: function (n, e, t) {
      t(173), (n.exports = t(174));
    },
    221: function (n, e, t) {
      var content = t(222);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, t(69).default)("052d2d50", content, !0, { sourceMap: !1 });
    },
    222: function (n, e, t) {
      var r = t(68)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user\'s configured `sans` font-family (with Tailwind\'s default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind\'s default "normal" line-height so the user isn\'t forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it\'s border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e2e8f0; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #a0aec0;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #a0aec0;\n}\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don\'t inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured \'mono\' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * \'mono\' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that\'s\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n.space-y-2 > :not(template) ~ :not(template){\n  --space-y-reverse:0;\n  margin-top:calc(0.5rem * calc(1 - var(--space-y-reverse)));\n  margin-bottom:calc(0.5rem * var(--space-y-reverse));\n}\n\n.space-x-2 > :not(template) ~ :not(template){\n  --space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--space-x-reverse)));\n}\n\n.space-y-3 > :not(template) ~ :not(template){\n  --space-y-reverse:0;\n  margin-top:calc(0.75rem * calc(1 - var(--space-y-reverse)));\n  margin-bottom:calc(0.75rem * var(--space-y-reverse));\n}\n\n.space-x-4 > :not(template) ~ :not(template){\n  --space-x-reverse:0;\n  margin-right:calc(1rem * var(--space-x-reverse));\n  margin-left:calc(1rem * calc(1 - var(--space-x-reverse)));\n}\n\n.space-x-6 > :not(template) ~ :not(template){\n  --space-x-reverse:0;\n  margin-right:calc(1.5rem * var(--space-x-reverse));\n  margin-left:calc(1.5rem * calc(1 - var(--space-x-reverse)));\n}\n\n.bg-transparent{\n  background-color:transparent;\n}\n\n.bg-black{\n  --bg-opacity:1;\n  background-color:#000;\n  background-color:rgba(0, 0, 0, var(--bg-opacity));\n}\n\n.bg-white{\n  --bg-opacity:1;\n  background-color:#fff;\n  background-color:rgba(255, 255, 255, var(--bg-opacity));\n}\n\n.hover\\:bg-black:hover{\n  --bg-opacity:1;\n  background-color:#000;\n  background-color:rgba(0, 0, 0, var(--bg-opacity));\n}\n\n.hover\\:bg-white:hover{\n  --bg-opacity:1;\n  background-color:#fff;\n  background-color:rgba(255, 255, 255, var(--bg-opacity));\n}\n\n.focus\\:bg-black:focus{\n  --bg-opacity:1;\n  background-color:#000;\n  background-color:rgba(0, 0, 0, var(--bg-opacity));\n}\n\n.bg-gradient-to-r{\n  background-image:linear-gradient(to right, var(--gradient-color-stops));\n}\n\n.bg-gradient-to-b{\n  background-image:linear-gradient(to bottom, var(--gradient-color-stops));\n}\n\n.from-blue-800{\n  --gradient-from-color:#2c5282;\n  --gradient-color-stops:var(--gradient-from-color), var(--gradient-to-color, rgba(44, 82, 130, 0));\n}\n\n.via-transparent{\n  --gradient-via-color:transparent;\n  --gradient-color-stops:var(--gradient-from-color), var(--gradient-via-color), var(--gradient-to-color, rgba(0, 0, 0, 0));\n}\n\n.to-black{\n  --gradient-to-color:#000;\n}\n\n.to-blue-800{\n  --gradient-to-color:#2c5282;\n}\n\n.hover\\:from-black:hover{\n  --gradient-from-color:#000;\n  --gradient-color-stops:var(--gradient-from-color), var(--gradient-to-color, rgba(0, 0, 0, 0));\n}\n\n.border-white{\n  --border-opacity:1;\n  border-color:#fff;\n  border-color:rgba(255, 255, 255, var(--border-opacity));\n}\n\n.border-gray-600{\n  --border-opacity:1;\n  border-color:#718096;\n  border-color:rgba(113, 128, 150, var(--border-opacity));\n}\n\n.border-teal-300{\n  --border-opacity:1;\n  border-color:#81e6d9;\n  border-color:rgba(129, 230, 217, var(--border-opacity));\n}\n\n.border-blue-800{\n  --border-opacity:1;\n  border-color:#2c5282;\n  border-color:rgba(44, 82, 130, var(--border-opacity));\n}\n\n.rounded-md{\n  border-radius:0.375rem;\n}\n\n.rounded-lg{\n  border-radius:0.5rem;\n}\n\n.rounded-2xl{\n  border-radius:1rem;\n}\n\n.rounded-3xl{\n  border-radius:1.5rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.border-2{\n  border-width:2px;\n}\n\n.border{\n  border-width:1px;\n}\n\n.block{\n  display:block;\n}\n\n.flex{\n  display:flex;\n}\n\n.inline-flex{\n  display:inline-flex;\n}\n\n.table{\n  display:table;\n}\n\n.grid{\n  display:grid;\n}\n\n.hidden{\n  display:none;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-wrap{\n  flex-wrap:wrap;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.flex-shrink-0{\n  flex-shrink:0;\n}\n\n.h-3{\n  height:0.75rem;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.h-8{\n  height:2rem;\n}\n\n.h-16{\n  height:4rem;\n}\n\n.h-screen{\n  height:100vh;\n}\n\n.text-base{\n  font-size:1rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n}\n\n.text-5xl{\n  font-size:3rem;\n}\n\n.text-6xl{\n  font-size:4rem;\n}\n\n.m-4{\n  margin:1rem;\n}\n\n.mx-4{\n  margin-left:1rem;\n  margin-right:1rem;\n}\n\n.mx-5{\n  margin-left:1.25rem;\n  margin-right:1.25rem;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.mt-1{\n  margin-top:0.25rem;\n}\n\n.mr-1{\n  margin-right:0.25rem;\n}\n\n.mb-1{\n  margin-bottom:0.25rem;\n}\n\n.mt-2{\n  margin-top:0.5rem;\n}\n\n.mb-2{\n  margin-bottom:0.5rem;\n}\n\n.ml-2{\n  margin-left:0.5rem;\n}\n\n.mt-3{\n  margin-top:0.75rem;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.ml-4{\n  margin-left:1rem;\n}\n\n.mt-5{\n  margin-top:1.25rem;\n}\n\n.mb-5{\n  margin-bottom:1.25rem;\n}\n\n.ml-8{\n  margin-left:2rem;\n}\n\n.mt-10{\n  margin-top:2.5rem;\n}\n\n.mr-10{\n  margin-right:2.5rem;\n}\n\n.ml-10{\n  margin-left:2.5rem;\n}\n\n.max-w-full{\n  max-width:100%;\n}\n\n.min-h-screen{\n  min-height:100vh;\n}\n\n.focus\\:outline-none:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n.p-2{\n  padding:0.5rem;\n}\n\n.p-4{\n  padding:1rem;\n}\n\n.p-6{\n  padding:1.5rem;\n}\n\n.py-1{\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.px-2{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n\n.px-3{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.px-5{\n  padding-left:1.25rem;\n  padding-right:1.25rem;\n}\n\n.pt-1{\n  padding-top:0.25rem;\n}\n\n.pt-2{\n  padding-top:0.5rem;\n}\n\n.pb-3{\n  padding-bottom:0.75rem;\n}\n\n.static{\n  position:static;\n}\n\n.shadow{\n  box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n\n.hover\\:shadow-md:hover{\n  box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-white{\n  --text-opacity:1;\n  color:#fff;\n  color:rgba(255, 255, 255, var(--text-opacity));\n}\n\n.text-gray-200{\n  --text-opacity:1;\n  color:#edf2f7;\n  color:rgba(237, 242, 247, var(--text-opacity));\n}\n\n.text-gray-500{\n  --text-opacity:1;\n  color:#a0aec0;\n  color:rgba(160, 174, 192, var(--text-opacity));\n}\n\n.text-gray-600{\n  --text-opacity:1;\n  color:#718096;\n  color:rgba(113, 128, 150, var(--text-opacity));\n}\n\n.hover\\:text-black:hover{\n  --text-opacity:1;\n  color:#000;\n  color:rgba(0, 0, 0, var(--text-opacity));\n}\n\n.hover\\:text-white:hover{\n  --text-opacity:1;\n  color:#fff;\n  color:rgba(255, 255, 255, var(--text-opacity));\n}\n\n.hover\\:text-gray-400:hover{\n  --text-opacity:1;\n  color:#cbd5e0;\n  color:rgba(203, 213, 224, var(--text-opacity));\n}\n\n.hover\\:text-gray-600:hover{\n  --text-opacity:1;\n  color:#718096;\n  color:rgba(113, 128, 150, var(--text-opacity));\n}\n\n.focus\\:text-white:focus{\n  --text-opacity:1;\n  color:#fff;\n  color:rgba(255, 255, 255, var(--text-opacity));\n}\n\n.underline{\n  text-decoration:underline;\n}\n\n.hover\\:underline:hover{\n  text-decoration:underline;\n}\n\n.w-3{\n  width:0.75rem;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.w-8{\n  width:2rem;\n}\n\n.gap-4{\n  grid-gap:1rem;\n  gap:1rem;\n}\n\n.gap-10{\n  grid-gap:2.5rem;\n  gap:2.5rem;\n}\n\n.col-span-2{\n  grid-column:span 2 / span 2;\n}\n\n.transform{\n  --transform-translate-x:0;\n  --transform-translate-y:0;\n  --transform-rotate:0;\n  --transform-skew-x:0;\n  --transform-skew-y:0;\n  --transform-scale-x:1;\n  --transform-scale-y:1;\n  transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));\n}\n\n.hover\\:scale-105:hover{\n  --transform-scale-x:1.05;\n  --transform-scale-y:1.05;\n}\n\n.hover\\:scale-110:hover{\n  --transform-scale-x:1.1;\n  --transform-scale-y:1.1;\n}\n\n.hover\\:scale-125:hover{\n  --transform-scale-x:1.25;\n  --transform-scale-y:1.25;\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n}\n\n.duration-100{\n  transition-duration:100ms;\n}\n\n.duration-300{\n  transition-duration:300ms;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.animate-pulse{\n  -webkit-animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n\n@media (min-width: 640px){\n  .sm\\:container{\n    width:100%;\n  }\n\n  @media (min-width: 640px){\n    .sm\\:container{\n      max-width:640px;\n    }\n  }\n\n  @media (min-width: 768px){\n    .sm\\:container{\n      max-width:768px;\n    }\n  }\n\n  @media (min-width: 1024px){\n    .sm\\:container{\n      max-width:1024px;\n    }\n  }\n\n  @media (min-width: 1280px){\n    .sm\\:container{\n      max-width:1280px;\n    }\n  }\n\n  .sm\\:grid{\n    display:grid;\n  }\n\n  .sm\\:h-auto{\n    height:auto;\n  }\n\n  .sm\\:px-3{\n    padding-left:0.75rem;\n    padding-right:0.75rem;\n  }\n\n  .sm\\:px-6{\n    padding-left:1.5rem;\n    padding-right:1.5rem;\n  }\n}\n\n@media (min-width: 768px){\n  .md\\:container{\n    width:100%;\n  }\n\n  @media (min-width: 640px){\n    .md\\:container{\n      max-width:640px;\n    }\n  }\n\n  @media (min-width: 768px){\n    .md\\:container{\n      max-width:768px;\n    }\n  }\n\n  @media (min-width: 1024px){\n    .md\\:container{\n      max-width:1024px;\n    }\n  }\n\n  @media (min-width: 1280px){\n    .md\\:container{\n      max-width:1280px;\n    }\n  }\n\n  .md\\:block{\n    display:block;\n  }\n\n  .md\\:hidden{\n    display:none;\n  }\n\n  .md\\:font-bold{\n    font-weight:700;\n  }\n\n  .md\\:h-24{\n    height:6rem;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:container{\n    width:100%;\n  }\n\n  @media (min-width: 640px){\n    .lg\\:container{\n      max-width:640px;\n    }\n  }\n\n  @media (min-width: 768px){\n    .lg\\:container{\n      max-width:768px;\n    }\n  }\n\n  @media (min-width: 1024px){\n    .lg\\:container{\n      max-width:1024px;\n    }\n  }\n\n  @media (min-width: 1280px){\n    .lg\\:container{\n      max-width:1280px;\n    }\n  }\n\n  .lg\\:h-20{\n    height:5rem;\n  }\n\n  .lg\\:mx-4{\n    margin-left:1rem;\n    margin-right:1rem;\n  }\n\n  .lg\\:mx-auto{\n    margin-left:auto;\n    margin-right:auto;\n  }\n\n  .lg\\:mr-24{\n    margin-right:6rem;\n  }\n\n  .lg\\:ml-24{\n    margin-left:6rem;\n  }\n\n  .lg\\:px-8{\n    padding-left:2rem;\n    padding-right:2rem;\n  }\n\n  .lg\\:w-screen{\n    width:100vw;\n  }\n\n  .lg\\:gap-8{\n    grid-gap:2rem;\n    gap:2rem;\n  }\n\n  .lg\\:grid-cols-3{\n    grid-template-columns:repeat(3, minmax(0, 1fr));\n  }\n\n  .lg\\:col-span-1{\n    grid-column:span 1 / span 1;\n  }\n\n  .lg\\:grid-rows-2{\n    grid-template-rows:repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 1280px){\n  .xl\\:container{\n    width:100%;\n  }\n\n  @media (min-width: 640px){\n    .xl\\:container{\n      max-width:640px;\n    }\n  }\n\n  @media (min-width: 768px){\n    .xl\\:container{\n      max-width:768px;\n    }\n  }\n\n  @media (min-width: 1024px){\n    .xl\\:container{\n      max-width:1024px;\n    }\n  }\n\n  @media (min-width: 1280px){\n    .xl\\:container{\n      max-width:1280px;\n    }\n  }\n\n  .xl\\:mx-20{\n    margin-left:5rem;\n    margin-right:5rem;\n  }\n\n  .xl\\:mx-32{\n    margin-left:8rem;\n    margin-right:8rem;\n  }\n\n  .xl\\:gap-20{\n    grid-gap:5rem;\n    gap:5rem;\n  }\n\n  .xl\\:grid-cols-3{\n    grid-template-columns:repeat(3, minmax(0, 1fr));\n  }\n\n  .xl\\:grid-rows-2{\n    grid-template-rows:repeat(2, minmax(0, 1fr));\n  }\n}',
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    223: function (n, e, t) {
      "use strict";
      t(162);
    },
    224: function (n, e, t) {
      var r = t(68)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        ".menuItem{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  --text-opacity:1;\n  color:#fff;\n  color:rgba(255, 255, 255, var(--text-opacity));\n  border-radius:1.5rem\n}",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    225: function (n, e, t) {
      "use strict";
      t.r(e);
      var r = {
          data: function () {
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
            toggle: function () {
              this.isOpen = !this.isOpen;
            },
          },
        },
        o = (t(223), t(21)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              e = n.$createElement,
              t = n._self._c || e;
            return t("div", [
              t("nav", { staticClass: "bg-black p-6" }, [
                t("div", { staticClass: "mx-auto px-4 sm:px-6 lg:px-8" }, [
                  t("div", { staticClass: "flex items-center h-16" }, [
                    t("div", { staticClass: "flex items-center" }, [
                      t(
                        "div",
                        { staticClass: "flex-shrink-0" },
                        [
                          t("NuxtLink", { attrs: { to: "/" } }, [
                            t(
                              "p",
                              {
                                staticClass:
                                  "text-5xl px-2 text-white hover:underline",
                              },
                              [
                                n._v(
                                  "\n                 iamorn\n              "
                                ),
                              ]
                            ),
                          ]),
                        ],
                        1
                      ),
                      n._v(" "),
                      t("div", { staticClass: "hidden md:block" }, [
                        t(
                          "div",
                          { staticClass: "ml-10 flex justify-center" },
                          n._l(n.menuItems, function (menu, i) {
                            return t(
                              "div",
                              { key: i },
                              [
                                t("NuxtLink", { attrs: { to: menu.path } }, [
                                  t(
                                    "a",
                                    {
                                      staticClass:
                                        "\n                      menuItem\n                      mr-10\n                      text-xl\n                      hover:text-gray-600\n                      focus:outline-none focus:bg-black focus:text-white\n                    ",
                                    },
                                    [t("b", [n._v(n._s(menu.name))])]
                                  ),
                                ]),
                              ],
                              1
                            );
                          }),
                          0
                        ),
                      ]),
                    ]),
                    n._v(" "),
                    t("div", { staticClass: "mt-3 ml-8 flex md:hidden" }, [
                      t(
                        "button",
                        {
                          staticClass:
                            "\n              inline-flex\n              items-center\n              justify-center\n              p-2\n              hover:text-white hover:bg-white\n              focus:outline-none focus:bg-black focus:text-white\n            ",
                          on: { click: n.toggle },
                        },
                        [
                          t(
                            "svg",
                            {
                              class: [n.isOpen ? "hidden" : "block", "h-6 w-6"],
                              attrs: {
                                stroke: "white",
                                fill: "none",
                                viewBox: "0 0 24 24",
                              },
                            },
                            [
                              t("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M4 6h16M4 12h16M4 18h16",
                                },
                              }),
                            ]
                          ),
                          n._v(" "),
                          t(
                            "svg",
                            {
                              class: [n.isOpen ? "block" : "hidden", "h-6 w-6"],
                              attrs: {
                                stroke: "white",
                                fill: "none",
                                viewBox: "0 0 24 24",
                              },
                            },
                            [
                              t("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                n._v(" "),
                t("div", { class: [n.isOpen ? "" : "hidden", "md:hidden"] }, [
                  t(
                    "div",
                    { staticClass: "mt-5 px-2 pt-2 pb-3 sm:px-3 text-center" },
                    n._l(n.menuItems, function (menu, i) {
                      return t(
                        "div",
                        { key: i, on: { click: n.toggle } },
                        [
                          t("NuxtLink", { attrs: { to: menu.path } }, [
                            t(
                              "a",
                              {
                                staticClass:
                                  "\n                block\n                px-3\n                py-2\n                text-base text-white\n                hover:text-black hover:bg-white\n                focus:outline-none focus:bg-black focus:text-white\n              ",
                              },
                              [n._v("\n              " + n._s(menu.name))]
                            ),
                          ]),
                        ],
                        1
                      );
                    }),
                    0
                  ),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
  },
  [[172, 12, 1, 13]],
]);

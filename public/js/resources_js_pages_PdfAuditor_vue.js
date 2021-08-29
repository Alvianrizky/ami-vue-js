"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_PdfAuditor_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PdfAuditor.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PdfAuditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: []
    };
  },
  created: function created() {
    this.getData();
    this.generatePdf();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/api/auditor/audit/hasil/' + atob(localStorage.getItem('user'))).then(function (response) {
        console.log(response);
        _this.form = response.data;
      })["catch"](function (error) {
        return _this.$router.push({
          name: 'Login'
        });
      });
    },
    generatePdf: function generatePdf() {
      setTimeout(function () {
        window.print();
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PdfAuditor.vue?vue&type=style&index=0&id=29fee416&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PdfAuditor.vue?vue&type=style&index=0&id=29fee416&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@media screen {\n#print[data-v-29fee416] {\r\n        display:none;\n}\n}\n@media print {\n@page {\r\n        size: A4 landscape;\r\n        margin: 80 10;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PdfAuditor.vue?vue&type=style&index=0&id=29fee416&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PdfAuditor.vue?vue&type=style&index=0&id=29fee416&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfAuditor_vue_vue_type_style_index_0_id_29fee416_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfAuditor.vue?vue&type=style&index=0&id=29fee416&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PdfAuditor.vue?vue&type=style&index=0&id=29fee416&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfAuditor_vue_vue_type_style_index_0_id_29fee416_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfAuditor_vue_vue_type_style_index_0_id_29fee416_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/pages/PdfAuditor.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/PdfAuditor.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PdfAuditor_vue_vue_type_template_id_29fee416_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PdfAuditor.vue?vue&type=template&id=29fee416&scoped=true& */ "./resources/js/pages/PdfAuditor.vue?vue&type=template&id=29fee416&scoped=true&");
/* harmony import */ var _PdfAuditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PdfAuditor.vue?vue&type=script&lang=js& */ "./resources/js/pages/PdfAuditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _PdfAuditor_vue_vue_type_style_index_0_id_29fee416_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PdfAuditor.vue?vue&type=style&index=0&id=29fee416&scoped=true&lang=css& */ "./resources/js/pages/PdfAuditor.vue?vue&type=style&index=0&id=29fee416&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _PdfAuditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PdfAuditor_vue_vue_type_template_id_29fee416_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PdfAuditor_vue_vue_type_template_id_29fee416_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "29fee416",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/PdfAuditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/PdfAuditor.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/PdfAuditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfAuditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfAuditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PdfAuditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfAuditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/PdfAuditor.vue?vue&type=style&index=0&id=29fee416&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/PdfAuditor.vue?vue&type=style&index=0&id=29fee416&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfAuditor_vue_vue_type_style_index_0_id_29fee416_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfAuditor.vue?vue&type=style&index=0&id=29fee416&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PdfAuditor.vue?vue&type=style&index=0&id=29fee416&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/pages/PdfAuditor.vue?vue&type=template&id=29fee416&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/PdfAuditor.vue?vue&type=template&id=29fee416&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfAuditor_vue_vue_type_template_id_29fee416_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfAuditor_vue_vue_type_template_id_29fee416_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfAuditor_vue_vue_type_template_id_29fee416_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfAuditor.vue?vue&type=template&id=29fee416&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PdfAuditor.vue?vue&type=template&id=29fee416&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PdfAuditor.vue?vue&type=template&id=29fee416&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PdfAuditor.vue?vue&type=template&id=29fee416&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bg-white", attrs: { id: "print" } }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", {}, [
        _vm._m(0),
        _vm._v(" "),
        _c("hr", { staticClass: "mx-6" }),
        _vm._v(" "),
        _c(
          "table",
          { staticClass: "table-bordered mt-5 mx-6" },
          [
            _vm._m(1),
            _vm._v(" "),
            _vm._l(_vm.form, function(data, index) {
              return _c("tbody", { key: index }, [
                _c("tr", [
                  _c("td", { staticClass: "pl-1" }, [
                    _vm._v(_vm._s(data.kode_sop))
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "pl-1" },
                    [
                      _c("nl2br", {
                        attrs: {
                          tag: "p",
                          className: "text-dark",
                          text: data.isi_butir
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", { staticClass: "pl-1" }, [
                    _vm._v(_vm._s(data.deskripsi))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "pl-1" }, [
                    _vm._v(_vm._s(data.indikator))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "pl-1" }, [
                    _vm._v(_vm._s(data.pengendali_dokumen))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "pl-1" }, [
                    _vm._v(_vm._s(data.hasil))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "pl-1" }, [
                    _vm._v(_vm._s(data.persentase))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "pl-1" }, [
                    _vm._v(_vm._s(data.temuan))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "pl-1" }, [
                    _vm._v(_vm._s(data.kategori_temuan))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "pl-1" }, [
                    _vm._v(_vm._s(data.tahun_pengukuran))
                  ])
                ])
              ])
            })
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table-borderless mt-2 mx-6" }, [
      _c("tr", [
        _c("td", { staticStyle: { width: "100px" }, attrs: { rowspan: "3" } }, [
          _c("img", {
            staticClass: "text-center mx-auto d-block",
            attrs: { src: "images/logo.png", width: "80", height: "80" }
          })
        ]),
        _vm._v(" "),
        _c(
          "td",
          {
            staticClass: "fw-bold text-center f-kop-2",
            staticStyle: { width: "1000px" }
          },
          [_vm._v("SISTEM INFORMASI PENJAMINAN MUTU")]
        )
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", { staticClass: "fw-bold text-center f-kop-1" }, [
          _vm._v("STMIK ELRAHMA YOGYAKARTA")
        ])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", { staticClass: "fw-bold text-center" }, [
          _vm._v(
            "Jalan Sisingamangaraja No.76, Brontokusuman, Yogyakarta City, Special Region of Yogyakarta, Indonesia\nKodepos 55153"
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "table-secondary fw-bold text-center" }, [
        _c("td", { staticStyle: { width: "30px" } }, [_vm._v("Standar")]),
        _vm._v(" "),
        _c("td", { staticStyle: { width: "200px" } }, [_vm._v("Elemen")]),
        _vm._v(" "),
        _c("td", [_vm._v("Deskriptor")]),
        _vm._v(" "),
        _c("td", [_vm._v("Indikator")]),
        _vm._v(" "),
        _c("td", [_vm._v("Pengendali")]),
        _vm._v(" "),
        _c("td", [_vm._v("Hasil")]),
        _vm._v(" "),
        _c("td", [_vm._v("Persentase")]),
        _vm._v(" "),
        _c("td", { staticStyle: { width: "100px" } }, [_vm._v("Temuan")]),
        _vm._v(" "),
        _c("td", [_vm._v("Ktgr Temuan")]),
        _vm._v(" "),
        _c("td", [_vm._v("Tahun")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);
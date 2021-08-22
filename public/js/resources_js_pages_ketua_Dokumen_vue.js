"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_ketua_Dokumen_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ketua/Dokumen.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ketua/Dokumen.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      rows: [],
      search: '',
      loading: true,
      options: {},
      headers: [{
        text: 'No',
        value: 'no'
      }, {
        text: 'Nomer Dokumen',
        value: 'nomer_dokumen'
      }, {
        text: 'Judul',
        value: 'judul'
      }, {
        text: 'Actions',
        value: 'actions',
        align: 'center',
        sortable: false
      }],
      form: {
        uuid: '',
        nomer_dokumen: '',
        judul: '',
        nama_file: '',
        file: ''
      },
      loggedIn: localStorage.getItem('loggedIn'),
      loginFailed: null
    };
  },
  created: function created() {
    this.$store.commit('setHeaderToken');
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/api/admin/dokumen').then(function (response) {
        console.log(response);
        _this.rows = response.data;
      })["catch"](function (error) {
        return _this.$router.push({
          name: 'Login'
        });
      });
    }
  },
  mounted: function mounted() {
    this.$store.commit('setLoggedIn');

    if (!this.$store.state.loggedIn) {
      return this.$router.push({
        name: 'Login'
      });
    }

    var string = this.$route.path.toString().split("/");
    this.$store.commit('setAkses', atob(localStorage.getItem('akses')));

    if (this.$store.state.akses !== string[1]) {
      this.$router.push({
        path: '/' + this.$store.state.akses + '/home'
      });
    }

    this.getData();
  }
});

/***/ }),

/***/ "./resources/js/pages/ketua/Dokumen.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/ketua/Dokumen.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dokumen_vue_vue_type_template_id_2563d5c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dokumen.vue?vue&type=template&id=2563d5c2& */ "./resources/js/pages/ketua/Dokumen.vue?vue&type=template&id=2563d5c2&");
/* harmony import */ var _Dokumen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dokumen.vue?vue&type=script&lang=js& */ "./resources/js/pages/ketua/Dokumen.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dokumen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dokumen_vue_vue_type_template_id_2563d5c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dokumen_vue_vue_type_template_id_2563d5c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ketua/Dokumen.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ketua/Dokumen.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/ketua/Dokumen.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dokumen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dokumen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ketua/Dokumen.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dokumen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/ketua/Dokumen.vue?vue&type=template&id=2563d5c2&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/ketua/Dokumen.vue?vue&type=template&id=2563d5c2& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dokumen_vue_vue_type_template_id_2563d5c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dokumen_vue_vue_type_template_id_2563d5c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dokumen_vue_vue_type_template_id_2563d5c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dokumen.vue?vue&type=template&id=2563d5c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ketua/Dokumen.vue?vue&type=template&id=2563d5c2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ketua/Dokumen.vue?vue&type=template&id=2563d5c2&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ketua/Dokumen.vue?vue&type=template&id=2563d5c2& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("nav-user"),
      _vm._v(" "),
      _c("div", { staticClass: "content-wrapper text-dark" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-8" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-4" },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "append-icon": "mdi-magnify",
                              label: "Search",
                              "single-line": "",
                              "hide-details": ""
                            },
                            model: {
                              value: _vm.search,
                              callback: function($$v) {
                                _vm.search = $$v
                              },
                              expression: "search"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-3" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c(
                          "div",
                          { attrs: { "data-app": "" } },
                          [
                            _c("v-data-table", {
                              attrs: {
                                headers: _vm.headers,
                                items: _vm.rows,
                                options: _vm.options,
                                search: _vm.search,
                                loading: _vm.loading
                              },
                              on: {
                                "update:options": function($event) {
                                  _vm.options = $event
                                }
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "item.actions",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "bg-success",
                                            dark: "",
                                            fab: "",
                                            small: "",
                                            href: "../dokumen/" + item.nama_file
                                          }
                                        },
                                        [
                                          _c("v-icon", [
                                            _vm._v(
                                              "\n                                                        mdi-download\n                                                        "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            })
                          ],
                          1
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", [_vm._v(" Data Dokumen")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Data Dokumen")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);
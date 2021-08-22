"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_superAdmin_coba_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/coba.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/coba.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        value: 'id'
      }, {
        text: 'Nama',
        value: 'nama'
      }, {
        text: 'Jabatan',
        value: 'jabatan'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      form: {
        file: ''
      }
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/api/coba').then(function (response) {
        console.log(response);
        _this.rows = response.data.data;
      });
    },
    selectFile: function selectFile(e) {
      var files = e.target.files[0];
      this.form.file = files;
      console.log(files.type);
    },
    uploadFile: function uploadFile() {
      var formData = new FormData();
      formData.append('file', this.form.file);
      axios.post('/api/upload', formData).then(function (response) {
        if (response.data.status) {
          console.log('success');
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/superAdmin/coba.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/superAdmin/coba.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coba_vue_vue_type_template_id_79aafe26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coba.vue?vue&type=template&id=79aafe26& */ "./resources/js/pages/superAdmin/coba.vue?vue&type=template&id=79aafe26&");
/* harmony import */ var _coba_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coba.vue?vue&type=script&lang=js& */ "./resources/js/pages/superAdmin/coba.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _coba_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _coba_vue_vue_type_template_id_79aafe26___WEBPACK_IMPORTED_MODULE_0__.render,
  _coba_vue_vue_type_template_id_79aafe26___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/superAdmin/coba.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/superAdmin/coba.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/superAdmin/coba.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coba_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./coba.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/coba.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coba_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/superAdmin/coba.vue?vue&type=template&id=79aafe26&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/superAdmin/coba.vue?vue&type=template&id=79aafe26& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coba_vue_vue_type_template_id_79aafe26___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coba_vue_vue_type_template_id_79aafe26___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coba_vue_vue_type_template_id_79aafe26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./coba.vue?vue&type=template&id=79aafe26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/coba.vue?vue&type=template&id=79aafe26&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/coba.vue?vue&type=template&id=79aafe26&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/coba.vue?vue&type=template&id=79aafe26& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "nav",
      {
        staticClass:
          "main-header navbar navbar-expand-md navbar-light navbar-white"
      },
      [
        _c(
          "div",
          { staticClass: "container" },
          [
            _c(
              "router-link",
              { staticClass: "navbar-brand", attrs: { to: { name: "Index" } } },
              [_vm._v("\n                SPMI\n            ")]
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1)
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "content-wrapper text-dark" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "mb-5" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.uploadFile.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _c("input", {
                          staticClass: "form-input",
                          attrs: { type: "file", id: "file", name: "file" },
                          on: { change: _vm.selectFile }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Simpan")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _vm._m(4),
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
                                      "v-icon",
                                      {
                                        staticClass: "mr-2",
                                        on: {
                                          click: function($event) {
                                            return _vm.editItem(item.id)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                    mdi-pencil\n                                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-icon",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteItem(item)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                    mdi-delete\n                                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-icon",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteItem(item)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                    mdi-eye\n                                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-icon",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteItem(item)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                    mdi-download\n                                                    "
                                        )
                                      ]
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler order-1",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarCollapse",
          "aria-controls": "navbarCollapse",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "order-1 order-md-3 navbar-nav navbar-no-expand ml-auto" },
      [
        _c("li", { staticClass: "nav-item" }, [
          _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
            _c("span", { staticClass: "fa fa-home" }),
            _vm._v(" Beranda")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
            _c("span", { staticClass: "fa fa-user" }),
            _vm._v(" Data User")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
            _c("span", { staticClass: "fa fa-user-tie" }),
            _vm._v(" Data Jabatan")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                href: "#",
                "data-toggle": "modal",
                "data-target": "#ModalLogout"
              }
            },
            [
              _c("span", { staticClass: "fa fa-sign-out-alt" }),
              _vm._v(" Logout")
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", { staticClass: "m-0" }, [_vm._v(" Data Dokumen")]),
            _vm._v(" "),
            _c("p", [_c("b", [_vm._v("User Log :")])])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-primary",
          attrs: {
            href: "#",
            title: "Tambah Dokumen Baru",
            "data-target": "#ModalAdd",
            "data-toggle": "modal"
          }
        },
        [_c("span", { staticClass: "fa fa-plus" })]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);
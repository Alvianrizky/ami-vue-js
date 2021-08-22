"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_NavAuditor_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavAuditor.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavAuditor.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isActive: false,
      isActiveHasil: false,
      classActiveJabatan: false,
      classActivePengguna: false,
      classActiveAkun: false,
      classActiveAkunAdmin: false,
      classActiveHasilRata: false,
      classActiveHasilLaporan: false,
      classNotActiveJabatan: true,
      classNotActivePengguna: true,
      classNotActiveAkun: true,
      classNotActiveAkunAdmin: true,
      classNotActiveHasilRata: true,
      classNotActiveHasilLaporan: true,
      form: {
        nama: '',
        hak_akses: ''
      }
    };
  },
  created: function created() {
    this.settingAkun();
    console.log(this.isActive);
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/api/user/' + atob(localStorage.getItem('user'))).then(function (response) {
        console.log(response);
        _this.form = response.data;
      })["catch"](function (error) {
        return _this.$router.push({
          name: 'Login'
        });
      });
    },
    settingAkun: function settingAkun() {
      if (this.$route.name == 'AdminJabatan') {
        this.isActive = true;
        this.classActiveJabatan = true;
        this.classNotActiveJabatan = false;
      } else if (this.$route.name == 'AdminPengguna') {
        this.isActive = true;
        this.classActivePengguna = true;
        this.classNotActivePengguna = false;
      } else if (this.$route.name == 'AdminAkun') {
        this.isActive = true;
        this.classActiveAkun = true;
        this.classNotActiveAkun = false;
      } else if (this.$route.name == 'AdminAkunAdmin') {
        this.isActive = true;
        this.classActiveAkunAdmin = true;
        this.classNotActiveAkunAdmin = false;
      } else if (this.$route.name == 'AdminHasilRata') {
        this.isActiveHasil = true;
        this.classActiveHasilRata = true;
        this.classNotActiveHasilRata = false;
      } else if (this.$route.name == 'AdminHasilLaporan') {
        this.isActiveHasil = true;
        this.classActiveHasilLaporan = true;
        this.classNotActiveHasilLaporan = false;
      }
    },
    logout: function logout() {
      var _this2 = this;

      this.$swal.fire({
        title: 'Anda yakin ingin logout?',
        text: "Anda akan keluar dari akses akun sistem ini!",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'Tidak',
        confirmButtonText: 'Ya',
        reverseButtons: true
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.get('/api/logout').then(function (response) {
            _this2.$swal.fire({
              icon: 'success',
              title: 'Anda sudah berhasil logout',
              showConfirmButton: false,
              timer: 1500
            }); //remove localStorage


            localStorage.removeItem("loggedIn");
            localStorage.removeItem("token");
            localStorage.removeItem("akses"); //redirect

            return _this2.$router.push({
              name: 'Login'
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/NavAuditor.vue":
/*!************************************************!*\
  !*** ./resources/js/components/NavAuditor.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavAuditor_vue_vue_type_template_id_3a5a1786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavAuditor.vue?vue&type=template&id=3a5a1786& */ "./resources/js/components/NavAuditor.vue?vue&type=template&id=3a5a1786&");
/* harmony import */ var _NavAuditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavAuditor.vue?vue&type=script&lang=js& */ "./resources/js/components/NavAuditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NavAuditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NavAuditor_vue_vue_type_template_id_3a5a1786___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavAuditor_vue_vue_type_template_id_3a5a1786___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NavAuditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/NavAuditor.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/NavAuditor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAuditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavAuditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavAuditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAuditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/NavAuditor.vue?vue&type=template&id=3a5a1786&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/NavAuditor.vue?vue&type=template&id=3a5a1786& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAuditor_vue_vue_type_template_id_3a5a1786___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAuditor_vue_vue_type_template_id_3a5a1786___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAuditor_vue_vue_type_template_id_3a5a1786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavAuditor.vue?vue&type=template&id=3a5a1786& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavAuditor.vue?vue&type=template&id=3a5a1786&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavAuditor.vue?vue&type=template&id=3a5a1786&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavAuditor.vue?vue&type=template&id=3a5a1786& ***!
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
        staticClass: "sidebar-dark-primary elevation-4",
        staticStyle: { height: "auto" },
        attrs: { id: "sidebar" }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "sidebar text-white" }, [
          _c("div", { staticClass: "user-panel mt-3 pb-3 mb-3 d-flex" }, [
            _c("div", { staticClass: "info" }, [
              _c("span", [_vm._v(_vm._s(this.form.nama))]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("a", { attrs: { href: "#" } }, [
                _c("i", { staticClass: "fa fa-circle text-success" }),
                _vm._v(" " + _vm._s(this.form.hak_akses) + " | Online")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("nav", { staticClass: "mt-2" }, [
            _c(
              "ul",
              {
                staticClass: "nav nav-pills nav-sidebar flex-column",
                attrs: {
                  "data-widget": "treeview",
                  role: "menu",
                  "data-accordion": "false"
                }
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link text-white",
                        attrs: { to: { name: "AuditorHome" } }
                      },
                      [
                        _c("span", { staticClass: "fa fa-home nav-icon" }),
                        _vm._v(
                          "\n                            Beranda\n                        "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link text-white",
                        attrs: { to: { name: "AuditorAudit" } }
                      },
                      [
                        _c("span", {
                          staticClass: "fa fa-graduation-cap nav-icon"
                        }),
                        _vm._v(
                          "\n                            Data Audit\n                        "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link text-white",
                        attrs: { to: { name: "AuditorHasil" } }
                      },
                      [
                        _c("span", { staticClass: "fa fa-book nav-icon" }),
                        _vm._v(
                          "\n                            Hasil Audit\n                        "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link text-white",
                        attrs: { to: { name: "AuditorDokumen" } }
                      },
                      [
                        _c("span", { staticClass: "fa fa-file-pdf nav-icon" }),
                        _vm._v(
                          "\n                            Dokumen Pendukung\n                        "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item mt-5" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link text-white",
                      attrs: { href: "" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.logout.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "fa fa-sign-out-alt nav-icon"
                      }),
                      _vm._v(" Logout\n                        ")
                    ]
                  )
                ])
              ]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "brand-link", attrs: { href: "index3.html" } },
      [
        _c("span", { staticClass: "brand-text font-weight-light" }, [
          _vm._v("SIJAMU")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);
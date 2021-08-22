"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_Jabatan_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/Jabatan.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/Jabatan.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        text: 'Nama Jabatan',
        value: 'nama_jabatan'
      }, {
        text: 'Actions',
        value: 'actions',
        align: 'center',
        width: '140px',
        sortable: false
      }],
      form: {
        uuid: '',
        nama_jabatan: '',
        keterangan: ''
      },
      loggedIn: localStorage.getItem('loggedIn'),
      loginFailed: null
    };
  },
  created: function created() {
    console.log(this.$route.name);
    this.$store.commit('setHeaderToken');
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/api/admin/jabatan').then(function (response) {
        console.log(response);
        _this.rows = response.data;
      })["catch"](function (error) {
        return _this.$router.push({
          name: 'Login'
        });
      });
    },
    handlesubmit: function handlesubmit() {
      var _this2 = this;

      axios.post('/api/admin/jabatan', this.form).then(function (response) {
        if (response.data.status) {
          _this2.$swal.fire({
            toast: true,
            icon: 'success',
            text: response.data.message,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          _this2.form = {
            uuid: '',
            nama_jabatan: '',
            keterangan: ''
          };
          $("#addJabatan").modal('hide');

          _this2.getData();
        }
      });
    },
    handleUpdate: function handleUpdate() {
      var _this3 = this;

      console.log(this.form);
      axios.put('/api/admin/jabatan/' + this.form.uuid, this.form).then(function (response) {
        if (response.data.status) {
          _this3.$swal.fire({
            toast: true,
            icon: 'success',
            text: response.data.message,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          _this3.form = {
            uuid: '',
            nama_jabatan: '',
            keterangan: ''
          };
          $("#updateJabatan").modal('hide');

          _this3.getData();
        }
      });
    },
    handledelete: function handledelete(id) {
      var _this4 = this;

      this.$swal.fire({
        title: 'Anda yakin akan menghapus data ini?',
        text: "Data akan dihapus secara permanen!",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'Tidak',
        confirmButtonText: 'Ya',
        reverseButtons: true
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]('/api/admin/jabatan/' + id).then(function (response) {
            if (response.data.status) {
              _this4.$swal.fire({
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 1500
              });

              _this4.getData();
            }
          });
        }
      });
    },
    modalAddJabatan: function modalAddJabatan() {
      $("#addJabatan").modal('show');
    },
    modalUpdateJabatan: function modalUpdateJabatan(data) {
      $("#updateJabatan").modal('show');
      this.form = data;
      console.log(data);
    },
    modalUpdateBatal: function modalUpdateBatal() {
      this.form = {
        uuid: '',
        nama_jabatan: '',
        keterangan: ''
      };
      $("#updateJabatan").modal('hide');
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

/***/ "./resources/js/pages/admin/Jabatan.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/admin/Jabatan.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Jabatan_vue_vue_type_template_id_2f2c5932___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Jabatan.vue?vue&type=template&id=2f2c5932& */ "./resources/js/pages/admin/Jabatan.vue?vue&type=template&id=2f2c5932&");
/* harmony import */ var _Jabatan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Jabatan.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/Jabatan.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Jabatan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Jabatan_vue_vue_type_template_id_2f2c5932___WEBPACK_IMPORTED_MODULE_0__.render,
  _Jabatan_vue_vue_type_template_id_2f2c5932___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/Jabatan.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/Jabatan.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/admin/Jabatan.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jabatan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Jabatan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/Jabatan.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jabatan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/admin/Jabatan.vue?vue&type=template&id=2f2c5932&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/admin/Jabatan.vue?vue&type=template&id=2f2c5932& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jabatan_vue_vue_type_template_id_2f2c5932___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jabatan_vue_vue_type_template_id_2f2c5932___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jabatan_vue_vue_type_template_id_2f2c5932___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Jabatan.vue?vue&type=template&id=2f2c5932& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/Jabatan.vue?vue&type=template&id=2f2c5932&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/Jabatan.vue?vue&type=template&id=2f2c5932&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/Jabatan.vue?vue&type=template&id=2f2c5932& ***!
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "content mx-1 mb-5" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-8" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary mt-2",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.modalAddJabatan()
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "fa fa-plus" }),
                        _vm._v(
                          " Tambah Data Jabatan\n                                    "
                        )
                      ]
                    )
                  ]),
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
                                      staticClass: "mx-2",
                                      attrs: {
                                        color: "bg-success",
                                        dark: "",
                                        fab: "",
                                        small: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.modalUpdateJabatan(item)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v(
                                          "\n                                                        mdi-pencil\n                                                    "
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "bg-danger",
                                        dark: "",
                                        fab: "",
                                        small: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.handledelete(item.uuid)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v(
                                          "\n                                                        mdi-delete\n                                                    "
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
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "addJabatan",
          tabindex: "-1",
          "aria-labelledby": "addJabatanLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog text-dark" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.handlesubmit.apply(null, arguments)
                  }
                }
              },
              [
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "mb-3" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "namaJabatan" }
                      },
                      [_vm._v("Nama Jabatan")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.nama_jabatan,
                          expression: "form.nama_jabatan"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "namaJabatan", required: "" },
                      domProps: { value: _vm.form.nama_jabatan },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "nama_jabatan",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _vm._m(3)
              ]
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "updateJabatan",
          tabindex: "-1",
          "aria-labelledby": "updateJabatanLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog text-dark" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h5",
                {
                  staticClass: "modal-title",
                  attrs: { id: "exampleModalLabel" }
                },
                [_vm._v("Tambah Jabatan")]
              ),
              _vm._v(" "),
              _c("button", {
                staticClass: "btn-close",
                attrs: { type: "button", "aria-label": "Close" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.modalUpdateBatal()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.handleUpdate.apply(null, arguments)
                  }
                }
              },
              [
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "mb-3" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "namaJabatan" }
                      },
                      [_vm._v("Nama Jabatan")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.nama_jabatan,
                          expression: "form.nama_jabatan"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "namaJabatan", required: "" },
                      domProps: { value: _vm.form.nama_jabatan },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "nama_jabatan",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.modalUpdateBatal()
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "fa fa-times" }),
                      _vm._v(" Batal")
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(4)
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
    return _c("div", { staticClass: "content-header mx-1" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", { staticClass: "m-0" }, [_vm._v("Data Jabatan")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Data Jabatan")
              ])
            ])
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
      _c("h5", { staticClass: "card-title" }, [_vm._v("Data Jabatan")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Tambah Jabatan")]
      ),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-danger",
          attrs: { type: "button", "data-bs-dismiss": "modal" }
        },
        [_c("span", { staticClass: "fa fa-times" }), _vm._v(" Batal")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [
          _c("span", { staticClass: "fa fa-save" }),
          _vm._v("\n                            Simpan")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-primary", attrs: { type: "submit" } },
      [
        _c("span", { staticClass: "fa fa-save" }),
        _vm._v("\n                            Simpan")
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);
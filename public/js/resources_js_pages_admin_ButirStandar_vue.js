"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_ButirStandar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/ButirStandar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/ButirStandar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _form;

    return {
      sop: [],
      rows: [],
      search: '',
      loading: true,
      options: {},
      headers: [{
        text: 'No',
        value: 'no'
      }, {
        text: 'Nama Standar',
        value: 'nama_sop'
      }, {
        text: 'Kode Butir',
        value: 'kode_butir'
      }, {
        text: 'Butir Standar',
        value: 'isi_butir'
      }, {
        text: 'Indikator',
        value: 'indikator'
      }, {
        text: 'Tanggal',
        value: 'tgl_butir'
      }, {
        text: 'Actions',
        value: 'actions',
        align: 'center',
        width: '140px',
        sortable: false
      }],
      form: (_form = {
        kode_butir: '',
        kode_sop: ''
      }, _defineProperty(_form, "kode_butir", ''), _defineProperty(_form, "isi_butir", ''), _defineProperty(_form, "indikator", ''), _defineProperty(_form, "tgl_butir", ''), _form),
      loggedIn: localStorage.getItem('loggedIn'),
      loginFailed: null
    };
  },
  created: function created() {
    console.log(this.$route.name);
    this.$store.commit('setHeaderToken');
  },
  methods: {
    getDataSop: function getDataSop() {
      var _this = this;

      axios.get('/api/admin/sop').then(function (response) {
        _this.sop = response.data;
        _this.form.kode_butir = 'S.0';
      })["catch"](function (error) {
        return _this.$router.push({
          name: 'Login'
        });
      });
    },
    getData: function getData() {
      var _this2 = this;

      axios.get('/api/admin/butir-standar').then(function (response) {
        console.log(response);
        _this2.rows = response.data;
      })["catch"](function (error) {
        return _this2.$router.push({
          name: 'Login'
        });
      });
    },
    handlesubmit: function handlesubmit() {
      var _this3 = this;

      axios.post('/api/admin/butir-standar', this.form).then(function (response) {
        if (response.data.status) {
          var _this3$form;

          _this3.$swal.fire({
            toast: true,
            icon: 'success',
            text: response.data.message,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          _this3.form = (_this3$form = {
            kode_butir: '',
            kode_sop: ''
          }, _defineProperty(_this3$form, "kode_butir", ''), _defineProperty(_this3$form, "isi_butir", ''), _defineProperty(_this3$form, "indikator", ''), _defineProperty(_this3$form, "tgl_butir", ''), _this3$form);
          $("#add").modal('hide');

          _this3.getData();
        }
      });
    },
    handleUpdate: function handleUpdate() {
      var _this4 = this;

      axios.put('/api/admin/butir-standar/' + this.form.kode_butir, this.form).then(function (response) {
        if (response.data.status) {
          var _this4$form;

          _this4.$swal.fire({
            toast: true,
            icon: 'success',
            text: response.data.message,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          _this4.form = (_this4$form = {
            kode_butir: '',
            kode_sop: ''
          }, _defineProperty(_this4$form, "kode_butir", ''), _defineProperty(_this4$form, "isi_butir", ''), _defineProperty(_this4$form, "indikator", ''), _defineProperty(_this4$form, "tgl_butir", ''), _this4$form);
          $("#update").modal('hide');

          _this4.getData();
        }
      });
    },
    handledelete: function handledelete(id) {
      var _this5 = this;

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
          axios["delete"]('/api/admin/butir-standar/' + id).then(function (response) {
            if (response.data.status) {
              _this5.$swal.fire({
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 1500
              });

              _this5.getData();
            }
          });
        }
      });
    },
    modalAdd: function modalAdd() {
      $("#add").modal('show');
    },
    modalUpdate: function modalUpdate(data) {
      $("#update").modal('show');
      this.form = data;
      console.log(data);
    },
    modalUpdateBatal: function modalUpdateBatal() {
      var _this$form;

      this.form = (_this$form = {
        kode_butir: '',
        kode_sop: ''
      }, _defineProperty(_this$form, "kode_butir", ''), _defineProperty(_this$form, "isi_butir", ''), _defineProperty(_this$form, "indikator", ''), _defineProperty(_this$form, "tgl_butir", ''), _this$form);
      $("#update").modal('hide');
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
    this.getDataSop();
  }
});

/***/ }),

/***/ "./resources/js/pages/admin/ButirStandar.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/admin/ButirStandar.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ButirStandar_vue_vue_type_template_id_3be77946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButirStandar.vue?vue&type=template&id=3be77946& */ "./resources/js/pages/admin/ButirStandar.vue?vue&type=template&id=3be77946&");
/* harmony import */ var _ButirStandar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButirStandar.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/ButirStandar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ButirStandar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ButirStandar_vue_vue_type_template_id_3be77946___WEBPACK_IMPORTED_MODULE_0__.render,
  _ButirStandar_vue_vue_type_template_id_3be77946___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/ButirStandar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/ButirStandar.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/admin/ButirStandar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButirStandar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ButirStandar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/ButirStandar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButirStandar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/admin/ButirStandar.vue?vue&type=template&id=3be77946&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/admin/ButirStandar.vue?vue&type=template&id=3be77946& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButirStandar_vue_vue_type_template_id_3be77946___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButirStandar_vue_vue_type_template_id_3be77946___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButirStandar_vue_vue_type_template_id_3be77946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ButirStandar.vue?vue&type=template&id=3be77946& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/ButirStandar.vue?vue&type=template&id=3be77946&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/ButirStandar.vue?vue&type=template&id=3be77946&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/ButirStandar.vue?vue&type=template&id=3be77946& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                            return _vm.modalAdd()
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "fa fa-plus" }),
                        _vm._v(
                          " Tambah Data Butir Standar\n                                    "
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
                                          return _vm.modalUpdate(item)
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
                                          return _vm.handledelete(
                                            item.kode_butir
                                          )
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
          id: "add",
          tabindex: "-1",
          "aria-labelledby": "addLabel",
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
                    _c("label", { staticClass: "form-label" }, [
                      _vm._v("Standar Operasional")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.kode_sop,
                            expression: "form.kode_sop"
                          }
                        ],
                        staticClass: "form-select",
                        attrs: {
                          "aria-label": "Default select example",
                          required: ""
                        },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "kode_sop",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { selected: "" } }, [
                          _vm._v("- Pilih Jabatan -")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.sop, function(data, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: data.kode_sop } },
                            [
                              _vm._v(
                                _vm._s(data.nama_sop) +
                                  " || " +
                                  _vm._s(data.kode_sop)
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c("label", { staticClass: "form-label" }, [
                      _vm._v("Kode Butir Standar Operasional")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.kode_butir,
                          expression: "form.kode_butir"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", required: "" },
                      domProps: { value: _vm.form.kode_butir },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "kode_butir", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-text" }, [
                      _vm._v(
                        "\n                            * Contoh Pengisian butir S.01.18.1\n                            "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c("label", { staticClass: "form-label" }, [
                      _vm._v("Isi Butir SOP")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.isi_butir,
                          expression: "form.isi_butir"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { rows: "5" },
                      domProps: { value: _vm.form.isi_butir },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "isi_butir", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c("label", { staticClass: "form-label" }, [
                      _vm._v("Indikator")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.indikator,
                          expression: "form.indikator"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { rows: "3" },
                      domProps: { value: _vm.form.indikator },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "indikator", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c("label", { staticClass: "form-label" }, [
                      _vm._v("Tanggal Butir Standar Operasional")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.tgl_butir,
                          expression: "form.tgl_butir"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "date", required: "" },
                      domProps: { value: _vm.form.tgl_butir },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "tgl_butir", $event.target.value)
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
          id: "update",
          tabindex: "-1",
          "aria-labelledby": "updateLabel",
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
                    _c("label", { staticClass: "form-label" }, [
                      _vm._v("Standar Operasional")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.kode_sop,
                            expression: "form.kode_sop"
                          }
                        ],
                        staticClass: "form-select",
                        attrs: {
                          "aria-label": "Default select example",
                          required: ""
                        },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "kode_sop",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { selected: "" } }, [
                          _vm._v("- Pilih Jabatan -")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.sop, function(data, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: data.kode_sop } },
                            [
                              _vm._v(
                                _vm._s(data.nama_sop) +
                                  " || " +
                                  _vm._s(data.kode_sop)
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c("label", { staticClass: "form-label" }, [
                      _vm._v("Kode Butir Standar Operasional")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.kode_butir,
                          expression: "form.kode_butir"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", required: "" },
                      domProps: { value: _vm.form.kode_butir },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "kode_butir", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-text" }, [
                      _vm._v(
                        "\n                            * Contoh Pengisian butir S.01.18.1\n                            "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c("label", { staticClass: "form-label" }, [
                      _vm._v("Isi Butir SOP")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.isi_butir,
                          expression: "form.isi_butir"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { rows: "5" },
                      domProps: { value: _vm.form.isi_butir },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "isi_butir", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c("label", { staticClass: "form-label" }, [
                      _vm._v("Indikator")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.indikator,
                          expression: "form.indikator"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { rows: "3" },
                      domProps: { value: _vm.form.indikator },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "indikator", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c("label", { staticClass: "form-label" }, [
                      _vm._v("Tanggal Butir Standar Operasional")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.tgl_butir,
                          expression: "form.tgl_butir"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "date", required: "" },
                      domProps: { value: _vm.form.tgl_butir },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "tgl_butir", $event.target.value)
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
            _c("h1", { staticClass: "m-0" }, [_vm._v("Data Butir Standar")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Data Butir Standar")
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
      _c("h5", { staticClass: "card-title" }, [_vm._v("Data Butir Standar")])
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
        [_vm._v("Tambah Butir Standar")]
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
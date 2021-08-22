"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_superAdmin_Dokumen_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/Dokumen.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/Dokumen.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      }
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/api/superadmin/dokumen').then(function (response) {
        console.log(response);
        _this.rows = response.data;
      });
    },
    selectFile: function selectFile(e) {
      var files = e.target.files[0];
      this.form.file = files;
      console.log(files);
    },
    handlesubmit: function handlesubmit() {
      var _this2 = this;

      var formData = new FormData();
      formData.append('file', this.form.file);
      formData.append('judul', this.form.judul);
      formData.append('nomer_dokumen', this.form.nomer_dokumen);
      axios.post('/api/superadmin/dokumen', formData).then(function (response) {
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
            nomer_dokumen: '',
            judul: '',
            nama_file: ''
          };
          $("#addDokumen").modal('hide');

          _this2.getData();
        }
      });
    },
    handleUpdate: function handleUpdate() {
      var _this3 = this;

      var formData = new FormData();
      formData.append('file', this.form.file);
      formData.append('judul', this.form.judul);
      formData.append('nomer_dokumen', this.form.nomer_dokumen);
      axios.post('/api/superadmin/dokumen/' + this.form.uuid, formData).then(function (response) {
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
            nomer_dokumen: '',
            judul: '',
            nama_file: ''
          };
          $("#updateDokumen").modal('hide');

          _this3.getData();
        }
      });
    },
    handledelete: function handledelete(uuid) {
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
          axios["delete"]('/api/superadmin/dokumen/' + uuid).then(function (response) {
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
    deleteUpdate: function deleteUpdate(uuid) {
      var _this5 = this;

      this.$swal.fire({
        title: 'Anda yakin akan menghapus dokumen ini?',
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
          axios["delete"]('/api/superadmin/dokumen/del-up/' + uuid).then(function (response) {
            if (response.data.status) {
              _this5.$swal.fire({
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 1500
              });

              _this5.form.nama_file = '';
            }
          });
        }
      });
    },
    modalAddDokumen: function modalAddDokumen() {
      $("#addDokumen").modal('show');
    },
    modalUpdateDokumen: function modalUpdateDokumen(data) {
      $("#updateDokumen").modal('show');
      this.form = data;
    },
    modalUpdateBatal: function modalUpdateBatal() {
      this.form = {
        uuid: '',
        nomer_dokumen: '',
        judul: '',
        nama_file: ''
      };
      $("#updateDokumen").modal('hide');
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/superAdmin/Dokumen.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/superAdmin/Dokumen.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dokumen_vue_vue_type_template_id_3aa953e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dokumen.vue?vue&type=template&id=3aa953e2& */ "./resources/js/pages/superAdmin/Dokumen.vue?vue&type=template&id=3aa953e2&");
/* harmony import */ var _Dokumen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dokumen.vue?vue&type=script&lang=js& */ "./resources/js/pages/superAdmin/Dokumen.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dokumen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dokumen_vue_vue_type_template_id_3aa953e2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dokumen_vue_vue_type_template_id_3aa953e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/superAdmin/Dokumen.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/superAdmin/Dokumen.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/superAdmin/Dokumen.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dokumen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dokumen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/Dokumen.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dokumen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/superAdmin/Dokumen.vue?vue&type=template&id=3aa953e2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/superAdmin/Dokumen.vue?vue&type=template&id=3aa953e2& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dokumen_vue_vue_type_template_id_3aa953e2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dokumen_vue_vue_type_template_id_3aa953e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dokumen_vue_vue_type_template_id_3aa953e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dokumen.vue?vue&type=template&id=3aa953e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/Dokumen.vue?vue&type=template&id=3aa953e2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/Dokumen.vue?vue&type=template&id=3aa953e2&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/Dokumen.vue?vue&type=template&id=3aa953e2& ***!
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
            _c("router-link", {
              staticClass: "navbar-brand",
              attrs: { to: { name: "Index" } }
            }),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass:
                  "order-1 order-md-3 navbar-nav navbar-no-expand ml-auto"
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: { to: { name: "SuperAdminJabatan" } }
                      },
                      [
                        _c("span", { staticClass: "fa fa-user-tie" }),
                        _vm._v(" Data Jabatan")
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(3)
              ]
            )
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "content-wrapper text-dark" }, [
      _vm._m(4),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(5),
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
                              return _vm.modalAddDokumen()
                            }
                          }
                        },
                        [_c("span", { staticClass: "fa fa-plus" })]
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
                                    ),
                                    _vm._v(" "),
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
                                            return _vm.modalUpdateDokumen(item)
                                          }
                                        }
                                      },
                                      [
                                        _c("v-icon", [
                                          _vm._v(
                                            "\n                                                        mdi-pencil\n                                                        "
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
                                            "\n                                                        mdi-delete\n                                                        "
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
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "addDokumen",
          tabindex: "-1",
          "aria-labelledby": "addDokumenLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog text-dark" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(6),
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
                        attrs: { for: "nomerDokumen" }
                      },
                      [_vm._v("Nomer Dokumen")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.nomer_dokumen,
                          expression: "form.nomer_dokumen"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "nomerDokumen", required: "" },
                      domProps: { value: _vm.form.nomer_dokumen },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "nomer_dokumen",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c(
                      "label",
                      { staticClass: "form-label", attrs: { for: "judul" } },
                      [_vm._v("Judul")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.judul,
                          expression: "form.judul"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "judul", required: "" },
                      domProps: { value: _vm.form.judul },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "judul", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c(
                      "label",
                      { staticClass: "form-label", attrs: { for: "formFile" } },
                      [_vm._v("Upload Dokumen")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "file",
                        id: "formFile",
                        accept: "application/pdf",
                        "aria-describedby": "helpInput"
                      },
                      on: { change: _vm.selectFile }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-text", attrs: { id: "helpInput" } },
                      [
                        _vm._v(
                          "* File wajib berformat PDF dengan ukuran maksimal 10 MB."
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(7)
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
          id: "updateDokumen",
          tabindex: "-1",
          "aria-labelledby": "updateDokumenLabel",
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
                [_vm._v("Tambah Dokumen")]
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
                        attrs: { for: "nomerDokumen" }
                      },
                      [_vm._v("Nomer Dokumen")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.nomer_dokumen,
                          expression: "form.nomer_dokumen"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "nomerDokumen", required: "" },
                      domProps: { value: _vm.form.nomer_dokumen },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "nomer_dokumen",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c(
                      "label",
                      { staticClass: "form-label", attrs: { for: "judul" } },
                      [_vm._v("Judul")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.judul,
                          expression: "form.judul"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "judul", required: "" },
                      domProps: { value: _vm.form.judul },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "judul", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c(
                      "label",
                      { staticClass: "form-label", attrs: { for: "formFile" } },
                      [_vm._v("Upload Dokumen")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "file",
                        id: "formFile",
                        accept: "application/pdf",
                        "aria-describedby": "helpInput",
                        required: ""
                      },
                      on: { change: _vm.selectFile }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-text", attrs: { id: "helpInput" } },
                      [
                        _vm._v(
                          "* File wajib berformat PDF dengan ukuran maksimal 10 MB."
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.form.nama_file
                      ? _c("div", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-secondary mt-3",
                              attrs: { "aria-describedby": "infoHelp" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.deleteUpdate(_vm.form.uuid)
                                }
                              }
                            },
                            [
                              _c("span", { staticClass: "fa fa-times mr-3" }),
                              _vm._v(" " + _vm._s(_vm.form.nama_file))
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "form-text",
                              attrs: { id: "infoHelp" }
                            },
                            [
                              _vm._v(
                                "Harap hapus dokumen terlebih dahulu jika ingin mengganti dokumen, klik pada button diatas."
                              )
                            ]
                          )
                        ])
                      : _vm._e()
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
                  _vm._m(8)
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
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
        _c("span", { staticClass: "fa fa-home" }),
        _vm._v(" Beranda")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
        _c("span", { staticClass: "fa fa-user" }),
        _vm._v(" Data User")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
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
        [_c("span", { staticClass: "fa fa-sign-out-alt" }), _vm._v(" Logout")]
      )
    ])
  },
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Tambah Dokumen")]
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
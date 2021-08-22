"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_superAdmin_User_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/User.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/User.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        text: 'Nama',
        value: 'nama_user'
      }, {
        text: 'Username',
        value: 'name'
      }, {
        text: 'Jabatan',
        value: 'jabatan'
      }, {
        text: 'Actions',
        value: 'actions',
        align: 'center',
        sortable: false
      }],
      form: {
        id: '',
        nama_user: '',
        name: '',
        uuid_jabatan: '',
        email: '',
        hak_akses: '',
        password: ''
      },
      jabatan: [],
      loggedIn: localStorage.getItem('loggedIn'),
      loginFailed: null
    };
  },
  created: function created() {
    this.$store.commit('setHeaderToken');
  },
  methods: {
    myFunction: function myFunction() {
      var x = document.getElementById("password");

      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    getDataJabatan: function getDataJabatan() {
      var _this = this;

      axios.get('/api/superadmin/jabatan').then(function (response) {
        // console.log(response)
        _this.jabatan = response.data;
      });
    },
    getData: function getData() {
      var _this2 = this;

      axios.get('/api/superadmin/user').then(function (response) {
        // console.log(response)
        _this2.rows = response.data;
      })["catch"](function (error) {
        return _this2.$router.push({
          name: 'Login'
        });
      });
    },
    handlesubmit: function handlesubmit() {
      var _this3 = this;

      // console.log(this.form)
      axios.post('/api/superadmin/user', this.form).then(function (response) {
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
            nama_User: '',
            keterangan: ''
          };
          $("#addUser").modal('hide');

          _this3.getData();
        }
      });
    },
    handleUpdate: function handleUpdate() {
      var _this4 = this;

      axios.put('/api/superadmin/user/' + this.form.id, this.form).then(function (response) {
        if (response.data.status) {
          _this4.$swal.fire({
            toast: true,
            icon: 'success',
            text: response.data.message,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          _this4.form = {
            uuid: '',
            nama_User: '',
            keterangan: ''
          };
          $("#updateUser").modal('hide');

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
          axios["delete"]('/api/superadmin/user/' + id).then(function (response) {
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
    modalAddUser: function modalAddUser() {
      $("#addUser").modal('show');
    },
    modalUpdateUser: function modalUpdateUser(data) {
      $("#updateUser").modal('show');
      this.form = data; // console.log(data)
    },
    modalUpdateBatal: function modalUpdateBatal() {
      this.form = {
        uuid: '',
        nama_User: '',
        keterangan: ''
      };
      $("#updateUser").modal('hide');
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
    this.getDataJabatan();
  }
});

/***/ }),

/***/ "./resources/js/pages/superAdmin/User.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/superAdmin/User.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _User_vue_vue_type_template_id_22fdd9a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=22fdd9a6& */ "./resources/js/pages/superAdmin/User.vue?vue&type=template&id=22fdd9a6&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/pages/superAdmin/User.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _User_vue_vue_type_template_id_22fdd9a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _User_vue_vue_type_template_id_22fdd9a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/superAdmin/User.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/superAdmin/User.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/superAdmin/User.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/User.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/superAdmin/User.vue?vue&type=template&id=22fdd9a6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/superAdmin/User.vue?vue&type=template&id=22fdd9a6& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_22fdd9a6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_22fdd9a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_22fdd9a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=template&id=22fdd9a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/User.vue?vue&type=template&id=22fdd9a6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/User.vue?vue&type=template&id=22fdd9a6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/superAdmin/User.vue?vue&type=template&id=22fdd9a6& ***!
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
  return _c(
    "div",
    [
      _c("nav-superadmin"),
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
                      _c("div", { staticClass: "col-8" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-primary mt-2",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.modalAddUser()
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
                                          staticClass: "mx-2",
                                          attrs: {
                                            color: "bg-success",
                                            dark: "",
                                            fab: "",
                                            small: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.modalUpdateUser(item)
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
                                              return _vm.handledelete(item.id)
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
            id: "addUser",
            tabindex: "-1",
            "aria-labelledby": "addUserLabel",
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
                        { staticClass: "form-label", attrs: { for: "nama" } },
                        [_vm._v("Nama")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.nama_user,
                            expression: "form.nama_user"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "nama", required: "" },
                        domProps: { value: _vm.form.nama_user },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "nama_user", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "jabatan" }
                        },
                        [_vm._v("Jabatan")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.uuid_jabatan,
                              expression: "form.uuid_jabatan"
                            }
                          ],
                          staticClass: "form-select",
                          attrs: {
                            "aria-label": "Default select example",
                            id: "jabatan",
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
                                "uuid_jabatan",
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
                          _vm._l(_vm.jabatan, function(data, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: data.uuid } },
                              [_vm._v(_vm._s(data.nama_jabatan))]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        { staticClass: "form-label", attrs: { for: "email" } },
                        [_vm._v("Email")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.email,
                            expression: "form.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "email", required: "" },
                        domProps: { value: _vm.form.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "email", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        { staticClass: "form-label", attrs: { for: "akses" } },
                        [_vm._v("Hak Akses")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.hak_akses,
                              expression: "form.hak_akses"
                            }
                          ],
                          staticClass: "form-select",
                          attrs: {
                            "aria-label": "Default select example",
                            id: "akses",
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
                                "hak_akses",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { selected: "" } }, [
                            _vm._v("- Pilih Hak Akses -")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "User" } }, [
                            _vm._v("User")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Auditor" } }, [
                            _vm._v("Auditor")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Admin" } }, [
                            _vm._v("Admin")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "SuperAdmin" } }, [
                            _vm._v("Super Admin")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "username" }
                        },
                        [_vm._v("Username")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "username", required: "" },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "password" }
                        },
                        [_vm._v("Password")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.password,
                            expression: "form.password"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "password",
                          id: "password",
                          required: ""
                        },
                        domProps: { value: _vm.form.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "password", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-check ml-1 mb-3" }, [
                      _c("input", {
                        staticClass: "form-check-input",
                        attrs: { type: "checkbox" },
                        on: {
                          click: function($event) {
                            return _vm.myFunction()
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "form-check-label",
                          attrs: { for: "show" }
                        },
                        [_vm._v("Show Password")]
                      )
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
            id: "updateUser",
            tabindex: "-1",
            "aria-labelledby": "updateUserLabel",
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
                  [_vm._v("Update User")]
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
                        { staticClass: "form-label", attrs: { for: "nama" } },
                        [_vm._v("Nama")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.nama_user,
                            expression: "form.nama_user"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "nama", required: "" },
                        domProps: { value: _vm.form.nama_user },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "nama_user", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "jabatan" }
                        },
                        [_vm._v("Jabatan")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.uuid_jabatan,
                              expression: "form.uuid_jabatan"
                            }
                          ],
                          staticClass: "form-select",
                          attrs: {
                            "aria-label": "Default select example",
                            id: "jabatan",
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
                                "uuid_jabatan",
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
                          _vm._l(_vm.jabatan, function(data, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: data.uuid } },
                              [_vm._v(_vm._s(data.nama_jabatan))]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        { staticClass: "form-label", attrs: { for: "email" } },
                        [_vm._v("Email")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.email,
                            expression: "form.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "email", required: "" },
                        domProps: { value: _vm.form.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "email", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        { staticClass: "form-label", attrs: { for: "akses" } },
                        [_vm._v("Hak Akses")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.hak_akses,
                              expression: "form.hak_akses"
                            }
                          ],
                          staticClass: "form-select",
                          attrs: {
                            "aria-label": "Default select example",
                            id: "akses",
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
                                "hak_akses",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { selected: "" } }, [
                            _vm._v("- Pilih Hak Akses -")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "User" } }, [
                            _vm._v("User")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Auditor" } }, [
                            _vm._v("Auditor")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Admin" } }, [
                            _vm._v("Admin")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "SuperAdmin" } }, [
                            _vm._v("Super Admin")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "username" }
                        },
                        [_vm._v("Username")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "username", required: "" },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "password" }
                        },
                        [_vm._v("Password")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.password,
                            expression: "form.password"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "password", id: "password" },
                        domProps: { value: _vm.form.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "password", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-check ml-1 mb-3" }, [
                      _c("input", {
                        staticClass: "form-check-input",
                        attrs: { type: "checkbox" },
                        on: {
                          click: function($event) {
                            return _vm.myFunction()
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "form-check-label",
                          attrs: { for: "show" }
                        },
                        [_vm._v("Show Password")]
                      )
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
            _c("h1", [_vm._v(" Data User")])
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
      _c("h5", { staticClass: "card-title" }, [_vm._v("Data User")])
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
        [_vm._v("Tambah User")]
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
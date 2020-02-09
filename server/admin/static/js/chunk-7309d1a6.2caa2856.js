(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7309d1a6"],{"2a92":function(e,t,r){"use strict";var s=r("fc28"),a=r.n(s);a.a},7368:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list"},[r("h1",[e._v("管理员列表")]),r("div",{staticClass:"filter-container"},[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"small"},on:{click:e.handleEdit}},[e._v("新建用户")])],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.item,border:""}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"130"}}),r("el-table-column",{attrs:{prop:"username",label:"用户名"}}),r("el-table-column",{attrs:{prop:"introduce",label:"简述",width:"400"}}),r("el-table-column",{attrs:{prop:"avatar",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.avatar,alt:""}})]}}])}),r("el-table-column",{attrs:{prop:"username",label:"权限类型"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[r("el-tag",{attrs:{type:e._f("typeFilter")(s.type)}},[e._v(e._s(e._f("typeMeanFilter")(s.type)))])]}}])}),r("el-table-column",{attrs:{fixed:"right",width:"250",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(r){return e.$router.push("/admin_users/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(r){return e.handleDel(t.row)}}},[e._v("删除")])]}}])})],1),r("UserDialog",{attrs:{show:e.dialogShow},on:{"update:show":function(t){e.dialogShow=t},"add-success":e.fetch}})],1)},a=[],n=(r("96cf"),r("1da1")),o=r("c24f"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-dialog",{attrs:{title:"提示","before-close":e.beforeClose,visible:e.visible,width:"50%"},on:{"update:visible":function(t){e.visible=t}}},[r("el-form",{ref:"userForm",staticClass:"demo-userForm",attrs:{model:e.userForm,"status-icon":"","label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.userForm.username,callback:function(t){e.$set(e.userForm,"username",t)},expression:"userForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password","show-password":"",autocomplete:"off"},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password",t)},expression:"userForm.password"}})],1),r("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[r("el-input",{model:{value:e.userForm.phone,callback:function(t){e.$set(e.userForm,"phone",e._n(t))},expression:"userForm.phone"}},[r("template",{slot:"prepend"},[e._v("+86")])],2)],1),r("el-form-item",{attrs:{label:"用户类型",prop:"type"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.userForm.type,callback:function(t){e.$set(e.userForm,"type",t)},expression:"userForm.type"}},[r("el-option",{attrs:{label:"管理员",value:1}}),r("el-option",{attrs:{label:"普通用户",value:0}})],1)],1),r("el-form-item",{attrs:{label:"简述",prop:"introduce"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.userForm.introduce,callback:function(t){e.$set(e.userForm,"introduce",t)},expression:"userForm.introduce"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)],1)},l=[],u=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3"));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={data:function(){return{userForm:{password:"",username:"",introduce:"",type:0,phone:""},visible:this.show}},props:{show:{type:Boolean,default:!1}},watch:{show:function(){this.visible=this.show}},methods:{beforeClose:function(){this.userForm={password:"",username:"",introduce:"",type:0,phone:""},this.$emit("update:show",!1)},handleClose:function(e){this.$emit("update:show",!1)},submit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=p({},this.userForm),t.username){e.next=4;break}return this.$message({type:"error",message:"必须填写用户名!"}),e.abrupt("return");case 4:if(t.password){e.next=7;break}return this.$message({type:"error",message:"必须填写密码!"}),e.abrupt("return");case 7:return t.phone&&(t.phone="86"+t.phone),e.next=10,o["a"].register(t);case 10:r=e.sent,s=r.data,this.$message({type:0===s.code?"success":"error",message:s.message}),0===s.code&&this.$emit("add-success"),this.$emit("update:show",!1);case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},d=m,f=r("2877"),h=Object(f["a"])(d,i,l,!1,null,null,null),b=h.exports,w={components:{UserDialog:b},data:function(){return{item:[],listLoading:!1,dialogShow:!1}},filters:{typeMeanFilter:function(e){var t=["普通用户","管理员"];return t[e]},typeFilter:function(e){var t=["info","success"];return t[e]}},methods:{handleEdit:function(){this.dialogShow=!0},fetch:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.listLoading=!0,e.next=3,o["a"].getUserList();case 3:t=e.sent,r=t.data,0===r.code?(this.item=r.data,this.$message({type:"success",message:r.message})):this.$message({type:"error",message:"获取列表失败!"}),this.listLoading=!1;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleDel:function(e){var t=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,o["a"].delUser({id:e._id});case 2:s=r.sent,a=s.data,t.$message({type:0===a.code?"success":"error",message:a.message}),t.fetch();case 6:case"end":return r.stop()}}),r)}))))}},mounted:function(){this.fetch()}},g=w,v=(r("2a92"),Object(f["a"])(g,s,a,!1,null,"29853706",null));t["default"]=v.exports},fc28:function(e,t,r){}}]);
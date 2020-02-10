(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8c3bc7c"],{2423:function(e,t,a){"use strict";var r=a("751a"),n=function(e){return r["a"].request({method:"get",url:"/admin/article/list",params:e})},o=function(e){return r["a"].request({method:"delete",url:"/admin/article/delOne/".concat(e)})},l=function(e){return r["a"].request({method:"post",url:"/admin/article/add",data:e})},i=function(e){return r["a"].request({method:"post",url:"/admin/article/edit",data:e})},s=function(e){return r["a"].request({method:"get",url:"/admin/article/findOne",params:e})},u=function(e){return r["a"].request({method:"post",url:"/admin/article/upload",data:e,headers:{"Content-Type":"multipart/form-data"}})};t["a"]={getArticle:n,delArticle:o,editArticle:i,findOneArticle:s,addArticle:l,uploadImg:u}},a462:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit-container"},[a("h1",{staticStyle:{"margin-bottom":"0"}},[e._v(e._s(e.id?"编辑文章":"新建文章"))]),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],ref:"postForm",attrs:{model:e.postForm,rules:e.rules}},[a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{prop:"title"}},[a("MDinput",{attrs:{maxlength:100,name:"name"},model:{value:e.postForm.title,callback:function(t){e.$set(e.postForm,"title",t)},expression:"postForm.title"}},[e._v("标题")])],1),a("div",{staticClass:"postInfo-container"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"120px",prop:"author",label:"作者:"}},[a("el-input",{attrs:{filterable:"","default-first-option":"",remote:"",placeholder:"请输入作者名"},model:{value:e.postForm.author,callback:function(t){e.$set(e.postForm,"author",t)},expression:"postForm.author"}},e._l(e.userListOptions,(function(e,t){return a("el-option",{key:e+t,attrs:{label:e,value:e}})})),1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"120px",label:"发布时间:"}},[a("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"Select date and time"},model:{value:e.displayTime,callback:function(t){e.displayTime=t},expression:"displayTime"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"120px",prop:"keyword",label:"关键字:"}},[a("el-input",{attrs:{placeholder:"请输入关键字"},model:{value:e.postForm.keyword,callback:function(t){e.$set(e.postForm,"keyword",t)},expression:"postForm.keyword"}})],1)],1)],1)],1),a("div",[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{"label-width":"120px",prop:"category",label:"文章分类"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择文章分类"},model:{value:e.postForm.category,callback:function(t){e.$set(e.postForm,"category",t)},expression:"postForm.category"}},[e._l(e.categoryList,(function(e,t){return[a("el-option",{key:t,attrs:{label:e.name,value:e._id}})]}))],2)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{"label-width":"120px",prop:"origin",label:"文章来源"}},[a("el-select",{attrs:{placeholder:"请选择文章来源"},model:{value:e.postForm.origin,callback:function(t){e.$set(e.postForm,"origin",t)},expression:"postForm.origin"}},[a("el-option",{attrs:{label:"原创",value:0}}),a("el-option",{attrs:{label:"转载",value:1}}),a("el-option",{attrs:{label:"混合",value:2}})],1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{"label-width":"120px",prop:"draft",label:"是否发布"}},[a("el-select",{attrs:{placeholder:"是否发布"},model:{value:e.postForm.draft,callback:function(t){e.$set(e.postForm,"draft",t)},expression:"postForm.draft"}},[a("el-option",{attrs:{label:"草稿",value:1}}),a("el-option",{attrs:{label:"正文",value:0}})],1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{"label-width":"120px",prop:"tags",label:"标签"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择标签分类"},model:{value:e.postForm.tags,callback:function(t){e.$set(e.postForm,"tags",t)},expression:"postForm.tags"}},[e._l(e.tagList,(function(e,t){return[a("el-option",{key:t,attrs:{label:e.name,value:e._id}})]}))],2)],1)],1),a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{"label-width":"120px",prop:"img_url",label:"文章封面"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/admin/article/upload","on-success":e.upload}},[e.postForm.img_url?a("img",{staticClass:"avatar",attrs:{src:e.postForm.img_url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1),a("el-form-item",{attrs:{"label-width":"120px",label:"简述",prop:"introduction"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.postForm.introduction,callback:function(t){e.$set(e.postForm,"introduction",t)},expression:"postForm.introduction"}})],1)],1)],1)],1),a("el-col",{attrs:{span:24}},[a("Markdown",{attrs:{currentContent:e.content},on:{"submit-article":e.submit}})],1)],1)],1)},n=[],o=(a("d81d"),a("96cf"),a("1da1")),l=a("ade3"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"material-input__component",class:e.computedClasses},[a("div",{class:{iconClass:e.icon}},[e.icon?a("i",{staticClass:"el-input__icon material-input__icon",class:["el-icon-"+e.icon]}):e._e(),"email"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,required:e.required,type:"email"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"url"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,required:e.required,type:"url"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"number"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,step:e.step,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,max:e.max,min:e.min,minlength:e.minlength,maxlength:e.maxlength,required:e.required,type:"number"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"password"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,max:e.max,min:e.min,required:e.required,type:"password"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"tel"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,required:e.required,type:"tel"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"text"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,minlength:e.minlength,maxlength:e.maxlength,required:e.required,type:"text"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),a("span",{staticClass:"material-input-bar"}),a("label",{staticClass:"material-label"},[e._t("default")],2)])])},s=[],u=(a("a9e3"),{name:"MdInput",props:{icon:String,name:String,type:{type:String,default:"text"},value:[String,Number],placeholder:String,readonly:Boolean,disabled:Boolean,min:String,max:String,step:String,minlength:Number,maxlength:Number,required:{type:Boolean,default:!0},autoComplete:{type:String,default:"off"},validateEvent:{type:Boolean,default:!0}},data:function(){return{currentValue:this.value,focus:!1,fillPlaceHolder:null}},computed:{computedClasses:function(){return{"material--active":this.focus,"material--disabled":this.disabled,"material--raised":Boolean(this.focus||this.currentValue)}}},watch:{value:function(e){this.currentValue=e}},methods:{handleModelInput:function(e){var t=e.target.value;this.$emit("input",t),"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.change",[t]),this.$emit("change",t)},handleMdFocus:function(e){this.focus=!0,this.$emit("focus",e),this.placeholder&&""!==this.placeholder&&(this.fillPlaceHolder=this.placeholder)},handleMdBlur:function(e){this.focus=!1,this.$emit("blur",e),this.fillPlaceHolder=null,"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.blur",[this.currentValue])}}}),c=u,d=(a("ad53"),a("2877")),m=Object(d["a"])(c,i,s,!1,null,"d9b004ee",null),p=m.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("mavon-editor",{ref:"md",staticStyle:{"min-height":"600px"},on:{change:e.change,imgAdd:e.upadateImg,navigationToggle:e.toggle},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),a("el-button",{attrs:{type:"success"},on:{click:e.submit}},[e._v("提交")])],1)},g=[],f=a("b2d8"),v=(a("64e1"),a("2423")),b={components:{mavonEditor:f["mavonEditor"]},props:["currentContent"],watch:{currentContent:function(e){this.content=e}},data:function(){return{content:"",html:""}},methods:{toggle:function(e,t){console.log(e,t)},change:function(e,t){console.log(e,t),this.html=t},upadateImg:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,a){var r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new FormData,r.append("file",a),e.next=4,v["a"].uploadImg(r);case 4:n=e.sent,o=n.data,0===o.code&&this.$refs.md.$img2Url(t,o.data.url);case 7:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}(),submit:function(){this.$emit("submit-article",{content:this.content,html:this.html})}},mounted:function(){}},y=b,x=Object(d["a"])(y,h,g,!1,null,null,null),w=x.exports,F=a("c405"),k=a("d28d"),C={components:{MDinput:p,Markdown:w},props:{id:{}},computed:{displayTime:{get:function(){return+new Date(this.postForm.addTime)},set:function(e){this.postForm.addTime=new Date(e)}}},data:function(){var e,t=this,a=function(e,a,r){a?r():(t.$message({message:e.field+"为必传项",type:"error",duration:2e3}),r(new Error(e.field+"为必传项")))};return{postForm:(e={addTime:new Date,keyword:"",author:"",title:"",category:[],origin:0},Object(l["a"])(e,"author",""),Object(l["a"])(e,"introduction",""),Object(l["a"])(e,"draft",0),Object(l["a"])(e,"tags",0),Object(l["a"])(e,"img_url",""),e),loading:!1,userListOptions:[],rules:{title:[{validator:a}],keyword:[{validator:a}],content:[{validator:a}]},content:"",categoryList:[],tagList:[]}},created:function(){this.getCategory(),this.getTag(),this.id&&this.fetch()},methods:{upload:function(e){this.$set(this.postForm,"img_url",e.data.url)},fetch:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,v["a"].findOneArticle({id:this.id});case 3:t=e.sent,a=t.data,0===a.code&&(this.$message({message:a.message,type:"success",duration:2e3}),a=a.data,r=a.category.map((function(e){return e._id})),this.postForm={title:a.title,category:r,origin:a.origin,author:a.author,introduction:a.introduction,draft:a.draft,keyword:a.keyword,addTime:a.addTime,tags:a.tags},this.content=a.articleContent.content),this.loading=!1;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getCategory:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F["a"].getCategory();case 2:t=e.sent,a=t.data,0===a.code&&(this.categoryList=a.data);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getTag:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k["a"].getTag();case 2:t=e.sent,a=t.data,0===a.code&&(this.tagList=a.data);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),submit:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs.postForm.validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var n,o,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=23;break}if(t.content){e.next=4;break}return a.$message({message:"文章内容不能为空",type:"error",duration:2e3}),e.abrupt("return",!1);case 4:if(n=Object.assign({},a.postForm),n.articleContent=t,a.id&&(n._id=a.id),a.loading=!0,!a.id){e.next=14;break}return e.next=11,v["a"].editArticle(n);case 11:e.t0=e.sent,e.next=17;break;case 14:return e.next=16,v["a"].addArticle(n);case 16:e.t0=e.sent;case 17:o=e.t0,l=o.data,0===l.code?(a.$message({message:l.message,type:"success",duration:2e3}),a.$router.push("/article/list")):a.$message({message:l.message,type:"error",duration:2e3}),a.loading=!1,e.next=24;break;case 23:return e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},_=C,$=(a("fe9b"),Object(d["a"])(_,r,n,!1,null,"72afdb54",null));t["default"]=$.exports},ad53:function(e,t,a){"use strict";var r=a("d73f"),n=a.n(r);n.a},c405:function(e,t,a){"use strict";var r=a("751a"),n=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].request({url:"/admin/category/add",method:"get",params:e})},o=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].request({url:"/admin/category/edit",method:"post",data:e})},l=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].request({url:"/admin/category/list",method:"get"})},i=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].request({url:"/admin/category/del",method:"get",params:e})};t["a"]={getCategory:l,addCategory:n,editCategory:o,delCategory:i}},d28d:function(e,t,a){"use strict";var r=a("751a"),n=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].request({url:"/admin/tag/add",method:"get",params:e})},o=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].request({url:"/admin/tag/edit",method:"post",data:e})},l=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].request({url:"/admin/tag/list",method:"get"})},i=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].request({url:"/admin/tag/del",method:"get",params:e})};t["a"]={getTag:l,addTag:n,editTag:o,delTag:i}},d4bb:function(e,t,a){},d73f:function(e,t,a){},fe9b:function(e,t,a){"use strict";var r=a("d4bb"),n=a.n(r);n.a}}]);
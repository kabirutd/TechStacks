webpackJsonp([6],{"/Zya":function(t,e,n){"use strict";var o=n("Dd8w"),s=n.n(o),i=n("NYxO"),r=n("vbt2"),a=n("0XSc"),c=n("C/un"),l=n("u1Qv"),u=n("5YJS");e.a={components:{CommentEdit:r.a,ReportDialog:a.a},name:"post-comment",props:["post","comment","pinned","hide"],computed:s()({},Object(i.mapGetters)(["getUsersKarma","userId","userPostCommentVotes"])),methods:{isHidden:function(t){return this.hide&&this.hide.indexOf(t)>=0},commentDone:function(t){this.replyId=this.editId=null,t&&this.$store.dispatch("loadPost",this.post.id)},childComments:function(){var t=this;return Object(c.x)(this.post.comments.filter(function(e){return e.replyId===t.comment.id}))},pinComment:function(t,e){return this.$store.dispatch("pinPostComment",{postId:this.post.id,commentId:t.id,pin:e})},handleCtrlClick:function(t){!this.editId&&t.ctrlKey&&this.canUpdateComment(this.post,this.comment)&&(this.editId=this.comment.id)},canReplyComment:c.g,canUpdateComment:c.j,canReportComment:c.h,canPinComment:c.e,canVoteComment:c.l,votedCommentClass:c.C,commentKarmaLabel:c.n,votePostComment:c.A,fromNow:u.f},data:function(){return{routes:l.a,replyId:null,reportCommentId:null,editId:null}}}},"0XSc":function(t,e,n){"use strict";var o=n("BJtK"),s=n("6Uta"),i=n("VU/8")(o.a,s.a,!1,null,null,null);i.options.__file="src\\components\\ReportDialog.vue",e.a=i.exports},"6Uta":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"700px"},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[n("v-card",[n("v-card-title",[t._v("\n        Please tell us what's wrong with this post?\n    ")]),n("v-card-text",[n("v-form",{ref:"form",staticStyle:{padding:"0 0 0 2em"},attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:t.errorResponse()}},[t._v(t._s(t.errorResponse()))]),n("v-radio-group",{attrs:{rules:[function(t){return!!t||"Required"}],"error-messages":t.errorResponse("type")},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.flagTypeSelectItems,function(t){return n("v-radio",{key:t.text,attrs:{label:t.text,value:t.value}})})),n("v-text-field",{attrs:{label:"Notes",counter:400,"multi-line":"",rows:3,"error-messages":t.errorResponse("notes")},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)],1),n("v-card-actions",[n("v-layout",[n("v-flex",{staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{flat:""},on:{click:function(e){e.stopPropagation(),t.close(e)}}},[t._v("Close")]),n("v-btn",{attrs:{flat:"",large:"",disabled:!t.valid,color:"primary"},on:{click:t.submit}},[t._v("\n                Submit\n            ")])],1)],1)],1)],1)],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},"82c5":function(t,e,n){"use strict";var o=n("JD+8"),s=n("xRMh"),i=n("VU/8")(o.a,s.a,!1,null,null,null);i.options.__file="src\\components\\PostAlerts.vue",e.a=i.exports},"9T66":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".editor-toolbar{margin-top:10px;border:1px solid rgba(0,0,0,.2)}.editor textarea,.monospace{font-size:15px;font-family:Consolas,Monaco,Inconsolata,Menlo,monospace,Lucida Console}",""])},BJtK:function(t,e,n){"use strict";var o=n("Xxa5"),s=n.n(o),i=n("exGp"),r=n.n(i),a=n("NYxO"),c=n("kRG6"),l=(n.n(c),n("J9uk"));e.a={props:{postId:{type:Number},commentId:{type:Number}},computed:Object(a.mapGetters)(["flagTypeSelectItems"]),methods:{submit:function(){var t=r()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$refs.form.validate()){t.next=21;break}if(t.prev=1,this.$store.commit("loading",!0),!this.commentId){t.next=8;break}return t.next=6,Object(l._2)(this.postId,this.commentId,this.type,this.notes);case 6:t.next=11;break;case 8:if(!this.postId){t.next=11;break}return t.next=11,Object(l._1)(this.postId,this.type,this.notes);case 11:this.type=this.notes=null,this.close(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),this.responseStatus=t.t0.responseStatus||t.t0;case 18:return t.prev=18,this.$store.commit("loading",!1),t.finish(18);case 21:case"end":return t.stop()}},t,this,[[1,15,18,21]])}));return function(){return t.apply(this,arguments)}}(),close:function(){this.$emit("close")},errorResponse:c.errorResponse},mounted:function(){},data:function(){return{open:!0,valid:!1,type:null,notes:null}}}},"JD+8":function(t,e,n){"use strict";var o=n("5YJS"),s=n("C/un");e.a={props:["organization","post"],methods:{isOrganizationModerator:s.t,isOrganizationMember:s.s,memberCannotComment:s.u,organizationMember:s.v,getUserId:s.y,fromNow:o.f}}},NAmB:function(t,e,n){"use strict";var o=n("Xxa5"),s=n.n(o),i=n("exGp"),r=n.n(i),a=n("Dd8w"),c=n.n(a),l=n("ecuk"),u=n("82c5"),m=n("NYxO"),d=n("u1Qv");e.a={components:{PostComment:l.a,PostAlerts:u.a},computed:c()({postId:function(){return this.$route.params.postid},commentId:function(){return this.$route.params.id},post:function(){return this.getPost(this.postId)},comment:function(){var t=this;return this.post&&this.post.comments.find(function(e){return e.id==t.commentId})}},Object(m.mapGetters)(["getPost","organization"])),methods:{loadPost:function(){var t=r()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch("loadPost",this.postId);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),this.notFound=!0;case 8:case"end":return t.stop()}},t,this,[[0,5]])}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=r()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$store.dispatch("loadUserPostActivity"),this.$store.dispatch("loadUserPostCommentVotes",this.postId),t.next=4,this.loadPost();case 4:this.$store.dispatch("loadTechnologyTiers"),this.post&&this.$store.dispatch("loadOrganizationByIdIfNotExists",this.post.organizationId);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{routes:d.a,notFound:!1}}}},S4Uo:function(t,e,n){"use strict";var o=n("Xxa5"),s=n.n(o),i=n("exGp"),r=n.n(i),a=n("Dd8w"),c=n.n(a),l=n("aek+"),u=n("kRG6"),m=(n.n(u),n("NYxO")),d=n("J9uk"),p=n("5YJS"),f={postId:null,content:null};e.a={components:{Editor:l.a},props:["post","comment","replyId","rows","autofocus"],computed:c()({},Object(m.mapGetters)(["getLangByOrganizationId"])),methods:{errorMessage:function(){return this.errorResponse()||this.errorResponse("postId")},reset:function(t){this.responseStatus=this.content=null,this.valid=!0,this.$emit("done",t)},submit:function(){var t=r()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$refs.form.validate()){t.next=23;break}if(t.prev=1,this.$store.commit("loading",!0),null==this.comment){t.next=9;break}return t.next=6,Object(d._9)(this.comment.id,this.post.id,this.content);case 6:t.t0=t.sent,t.next=12;break;case 9:return t.next=11,Object(d.k)(this.postId,this.content,this.replyId);case 11:t.t0=t.sent;case 12:t.t0,this.reset(!0),t.next=20;break;case 16:t.prev=16,t.t1=t.catch(1),this.valid=!1,this.responseStatus=t.t1.responseStatus||t.t1;case 20:return t.prev=20,this.$store.commit("loading",!1),t.finish(20);case 23:case"end":return t.stop()}},t,this,[[1,16,20,23]])}));return function(){return t.apply(this,arguments)}}(),errorResponse:u.errorResponse},mounted:function(){this.rows&&(this.commentRows=this.rows),this.post&&(this.postId=this.post.id),this.comment&&(this.content=this.comment.content)},data:function(){return c()({},f,{commentRows:6,valid:!0,allowDelete:!1,contentCounter:p.a,contentRulesOptional:p.c,responseStatus:null})}}},TwPB:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[n("div",{staticClass:"editor-toolbar"},[n("v-btn",{attrs:{small:"",icon:"",title:"Bold text (CTRL+B)"},on:{click:t.bold}},[n("v-icon",[t._v("format_bold")])],1),n("v-btn",{attrs:{small:"",icon:"",title:"Italics (CTRL+I)"},on:{click:t.italic}},[n("v-icon",[t._v("format_italic")])],1),n("v-btn",{attrs:{small:"",icon:"",title:"Insert Link (CTRL+L)"},on:{click:t.link}},[n("v-icon",[t._v("insert_link")])],1),n("v-btn",{attrs:{small:"",icon:"",title:"Blockquote (CTRL+Q)"},on:{click:t.quote}},[n("v-icon",[t._v("format_quote")])],1),n("v-btn",{attrs:{small:"",icon:"",title:"Insert Image (CTRL+SHIFT+L)"},on:{click:t.image}},[n("v-icon",[t._v("insert_photo")])],1),n("v-btn",{attrs:{small:"",icon:"",title:"Insert Code (CTRL+<)"},on:{click:t.code}},[n("v-icon",[t._v("code")])],1),n("v-btn",{attrs:{small:"",icon:"",title:"H2 Heading (CTRL+H)"},on:{click:t.heading}},[n("v-icon",[t._v("format_size")])],1),n("v-btn",{attrs:{small:"",icon:"",title:"Numbered List (ALT+1)"},on:{click:t.ol}},[n("v-icon",[t._v("format_list_numbered")])],1),n("v-btn",{attrs:{small:"",icon:"",title:"Bulleted List (ALT+-)"},on:{click:t.ul}},[n("v-icon",[t._v("format_list_bulleted")])],1),n("v-btn",{attrs:{small:"",icon:"",title:"Strike Through (ALT+S)"},on:{click:t.strikethrough}},[n("v-icon",[t._v("format_strikethrough")])],1),n("v-btn",{attrs:{small:"",icon:"",title:"undo (CTRL+Z)"},on:{click:t.undo}},[n("v-icon",[t._v("undo")])],1),n("v-btn",{attrs:{small:"",icon:"",title:"redo (CTRL+SHIFT+Z)"},on:{click:t.redo}},[n("v-icon",[t._v("redo")])],1),n("v-btn",{attrs:{small:"",icon:"",title:"Save (CTRL+S)"},on:{click:t.save}},[n("v-icon",[t._v("save")])],1),n("a",{staticClass:"btn btn--icon btn--small",staticStyle:{float:"right"},attrs:{title:"formatting help",target:"_blank",href:"https://guides.github.com/features/mastering-markdown/"}},[n("v-icon",[t._v("help_outline")])],1)],1),n("v-text-field",{ref:"txt",attrs:{label:t.label,value:t.value,spellcheck:!t.value||-1===t.value.indexOf("```"),counter:t.counter,"multi-line":"","auto-grow":"",rows:t.rows||6,rules:t.rules,"error-messages":t.errorMessages},on:{input:function(e){return t.$emit("input",e)},keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"tab",9,e.key))return null;t.tab(e)}}})],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},"aek+":function(t,e,n){"use strict";var o=n("eKwF"),s=n("TwPB"),i=!1;var r=function(t){i||n("nDyi")},a=n("VU/8")(o.a,s.a,!1,r,null,null);a.options.__file="src\\components\\Editor.vue",e.a=a.exports},eKwF:function(t,e,n){"use strict";var o=n("Dd8w"),s=n.n(o),i=[],r=[],a={input:function(){return this.$refs.txt.$refs.input},hasSelection:function(){return this.input().selectionStart!=this.input().selectionEnd},selection:function(){var t=this.input();return t.value.substring(t.selectionStart,t.selectionEnd)||""},selectionInfo:function(){var t=this.input(),e=t.value,n=t.selectionStart,o=e.substring(n,t.selectionEnd)||"",s=e.substring(0,n),i=s.lastIndexOf("\n");return{value:e,sel:o,selPos:n,beforeSel:s,afterSel:e.substring(n),prevCRPos:i,beforeCR:i>=0?s.substring(0,i+1):"",afterCR:i>=0?s.substring(i+1):""}},replace:function(t){var e=t.value,n=t.selectionStart,o=t.selectionEnd;null==o&&(o=n);var s=this.input();this.$emit("input",e),this.$nextTick(function(){s.focus(),s.setSelectionRange(n,o)})},insert:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=o.selectionAtEnd,a=o.offsetStart,c=o.offsetEnd,l=o.filterValue,u=o.filterSelection,m=this.input(),d=m.value,p=m.selectionEnd;i.push({value:d,selectionStart:m.selectionStart,selectionEnd:m.selectionEnd}),r=[];var f=m.selectionStart,v=m.selectionEnd,h=d.substring(0,f),g=d.substring(v),_=t&&h.endsWith(t)&&g.startsWith(e);if(f==v){if(_?(d=h.substring(0,h.length-t.length)+g.substring(e.length),p+=-e.length):(d=h+t+n+e+g,p+=t.length,a=0,c=n.length,s&&(p+=c,c=0)),l){var b={pos:p};d=l(d,b),p=b.pos}}else{var C=d.substring(f,v);u&&(C=u(C)),_?(d=h.substring(0,h.length-t.length)+C+g.substring(e.length),a=-C.length-t.length,c=C.length):(d=h+t+C+e+g,a?p+=(t+e).length:(p=f,a=t.length,c=C.length))}this.$emit("input",d),this.$nextTick(function(){m.focus(),c=(a=p+(a||0))+(c||0),m.setSelectionRange(a,c)})},bold:function(){this.insert("**","**","bold")},italic:function(){this.insert("_","_","italics")},strikethrough:function(){this.insert("~~","~~","strikethrough")},link:function(){this.insert("[","](http://)","",{offsetStart:-8,offsetEnd:7})},quote:function(){this.insert("\n> ","\n","Blockquote",{})},image:function(){this.insert("![","](http://)","alt text",{offsetStart:-8,offsetEnd:7})},code:function(t){var e=this.selection();if(e&&!t.shiftKey)this.insert("`","`","code");else{var n=this.lang||"js";-1===e.indexOf("\n")?this.insert("\n```"+n+"\n","\n```\n","// code"):this.insert("```"+n+"\n","```\n","")}},ol:function(){if(this.hasSelection()){var t=this.selectionInfo(),e=t.sel,n=(t.selPos,t.beforeSel),o=t.afterSel,s=t.prevCRPos,i=t.beforeCR,r=t.afterCR;if(-1===e.indexOf("\n"))this.insert("\n 1. ","\n");else if(!e.startsWith(" 1. ")){var a=1;this.insert("",""," - ",{selectionAtEnd:!0,filterSelection:function(t){return" 1. "+t.replace(/\n$/,"").replace(/\n/g,function(t){return"\n "+ ++a+". "})+"\n"}})}else this.insert("","","",{filterValue:function(t,e){if(s>=0){var a=r.replace(/^ - /,"");n=i+a,e.pos-=r.length-a.length}return n+o},filterSelection:function(t){return t.replace(/^ 1. /g,"").replace(/\n \d+. /g,"\n")}})}else this.insert("\n 1. ","\n","List Item",{offsetStart:-10,offsetEnd:9})},ul:function(){if(this.hasSelection()){var t=this.selectionInfo(),e=t.sel,n=(t.selPos,t.beforeSel),o=t.afterSel,s=t.prevCRPos,i=t.beforeCR,r=t.afterCR;if(-1===e.indexOf("\n"))this.insert("\n - ","\n");else!e.startsWith(" - ")?this.insert("",""," - ",{selectionAtEnd:!0,filterSelection:function(t){return" - "+t.replace(/\n$/,"").replace(/\n/g,"\n - ")+"\n"}}):this.insert("","","",{filterValue:function(t,e){if(s>=0){var a=r.replace(/^ - /,"");n=i+a,e.pos-=r.length-a.length}return n+o},filterSelection:function(t){return t.replace(/^ - /g,"").replace(/\n - /g,"\n")}})}else this.insert("\n - ","\n","List Item",{offsetStart:-10,offsetEnd:9})},heading:function(){var t=this.selection(),e=-1===t.indexOf("\n");t?e?this.insert("\n## ","\n",""):this.insert("## ","",""):this.insert("\n## ","\n","Heading",{offsetStart:-8,offsetEnd:7})},comment:function(){var t=this.selectionInfo(),e=t.sel,n=t.selPos,o=t.beforeSel,s=t.afterSel,i=t.prevCRPos,r=t.beforeCR,a=t.afterCR,c=!e.startsWith("//")&&!a.startsWith("//");c?e?this.insert("","","//",{selectionAtEnd:!0,filterSelection:function(t){return"//"+t.replace(/\n$/,"").replace(/\n/g,"\n//")+"\n"}}):this.replace({value:r+"//"+a+s,selectionStart:n+"//".length}):this.insert("","","",{filterValue:function(t,e){if(i>=0){var n=a.replace(/^\/\//,"");o=r+n,e.pos-=a.length-n.length}return o+s},filterSelection:function(t){return t.replace(/^\/\//g,"").replace(/\n\/\//g,"\n")}})},blockComment:function(){this.insert("/*\n","*/\n","")},undo:function(){if(0==i.length)return!1;var t=this.input(),e=i.pop();return r.push({value:t.value,selectionStart:t.selectionStart,selectionEnd:t.selectionEnd}),this.replace(e),!0},redo:function(){if(0==r.length)return!1;var t=this.input(),e=r.pop();return i.push({value:t.value,selectionStart:t.selectionStart,selectionEnd:t.selectionEnd}),this.replace(e),!0}};e.a={props:["label","value","counter","rows","rules","errorMessages","lang","autofocus"],methods:s()({save:function(){this.$emit("save")}},a),mounted:function(){var t=this;i=[],r=[],this.$refs.txt.$refs.input.onkeydown=function(e){if("Escape"!==e.key&&27!==e.keyCode){var n=String.fromCharCode(e.keyCode).toLowerCase();if("\t"===n)!e.shiftKey?t.insert("","","    ",{selectionAtEnd:!0,filterSelection:function(t){return"    "+t.replace(/\n$/,"").replace(/\n/g,"\n    ")+"\n"}}):t.insert("","","",{filterValue:function(e,n){var o=t.selectionInfo(),s=(o.selPos,o.beforeSel),i=o.afterSel,r=o.prevCRPos,a=o.beforeCR,c=o.afterCR;if(r>=0){var l=c.replace(/\t/g,"    ").replace(/^ ? ? ? ?/,"");s=a+l,n.pos-=c.length-l.length}return s+i},filterSelection:function(t){return t.replace(/\t/g,"    ").replace(/^ ? ? ? ?/g,"").replace(/\n    /g,"\n")}}),e.preventDefault();else e.ctrlKey?"z"===n?e.shiftKey?t.redo()&&e.preventDefault():t.undo()&&e.preventDefault():"b"!==n||e.shiftKey?"h"!==n||e.shiftKey?"i"!==n||e.shiftKey?"q"!==n||e.shiftKey?"l"===n?e.shiftKey?(t.image(),e.preventDefault()):(t.link(),e.preventDefault()):","===n||"<"===e.key||">"===e.key||188===e.keyCode?(t.code(e),e.preventDefault()):"s"!==n||e.shiftKey?"/"===n||"/"===e.key?(t.comment(),e.preventDefault()):"?"!==n&&"?"!==e.key||!e.shiftKey||(t.blockComment(),e.preventDefault()):(t.save(),e.preventDefault()):(t.quote(),e.preventDefault()):(t.italic(),e.preventDefault()):(t.heading(),e.preventDefault()):(t.bold(),e.preventDefault()):e.altKey&&("1"===e.key||"0"===e.key?(t.ol(),e.preventDefault()):"-"===e.key?(t.ul(),e.preventDefault()):"s"===e.key&&(t.strikethrough(),e.preventDefault()))}else t.$emit("close")}},data:function(){return{}}}},ecuk:function(t,e,n){"use strict";var o=n("/Zya"),s=n("r3Uj"),i=n("VU/8")(o.a,s.a,!1,null,null,null);i.options.__file="src\\components\\PostComment.vue",e.a=i.exports},"i+Rj":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.post&&t.comment?n("div",[n("PostAlerts",{attrs:{organization:t.organization,post:t.post}}),n("div",{staticClass:"comments-info"},[t.comment.replyId?n("nuxt-link",{attrs:{to:t.routes.comment(t.postId,t.comment.replyId)}},[t._v("parent")]):t._e(),t._v("\r\n      from "),n("nuxt-link",{attrs:{to:t.routes.post(t.postId,t.post.slug)}},[t._v(t._s(t.post.title))])],1),n("v-layout",{attrs:{column:""}},[n("v-flex",{staticClass:"post-comments"},[n("PostComment",{attrs:{post:t.post,comment:t.comment}})],1)],1)],1):t._e(),t.notFound?n("h2",[n("v-icon",{attrs:{color:"red"}},[t._v("error_outline")]),t._v(" Comment was not found")],1):t._e()])};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},nDyi:function(t,e,n){var o=n("9T66");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("408afc42",o,!1)},quHo:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card",{staticStyle:{"margin-top":".5em"},attrs:{flat:!!t.comment}},[n("v-card-text",{staticStyle:{"padding-top":"0"}},[n("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:t.errorMessage()}},[t._v(t._s(t.errorMessage()))]),n("Editor",{ref:"editor",staticStyle:{"padding-top":"10px"},attrs:{label:"Comment",rows:t.commentRows,counter:t.contentCounter,rules:t.contentRulesOptional,"error-messages":t.errorResponse("content"),lang:t.getLangByOrganizationId(t.post.organizationId),autofocus:t.autofocus},on:{save:t.submit,close:function(e){t.reset()}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("v-card-actions",[n("v-layout",[n("v-btn",{attrs:{flat:""},on:{click:t.submit}},[t._v("Submit")]),t.replyId||t.comment?n("v-btn",{attrs:{flat:""},on:{click:function(e){t.reset(!1)}}},[t._v("Close")]):t._e()],1)],1)],1)],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},r3Uj:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("v-card",{staticClass:"comment-parent"},[n("v-card-title",[n("v-layout",{on:{click:t.handleCtrlClick}},[n("v-flex",{staticClass:"comment-info"},[t.pinned?n("v-icon",{staticStyle:{"font-size":"50px",color:"#4caf50","margin-bottom":"10px"},attrs:{title:"Pinned Comment"}},[t._v("place")]):t._e(),n("nuxt-link",{attrs:{to:t.routes.user(t.comment.createdBy)}},[n("img",{staticClass:"comment-avatar",attrs:{src:t.routes.userAvatar(t.comment.createdBy),alt:t.comment.createdBy+" profile"}})]),n("div",{staticClass:"comment-karma"},[n("b",[t._v(t._s(t.getUsersKarma(t.comment.userId)))])])],1),n("v-flex",[t.editId?t._e():n("div",{staticClass:"comment-content",domProps:{innerHTML:t._s(t.comment.contentHtml)}}),t.editId?n("div",{staticClass:"comment-edit"},[n("CommentEdit",{attrs:{post:t.post,comment:t.comment,autofocus:!0},on:{done:t.commentDone}})],1):t._e(),t.replyId?n("div",{staticClass:"comment-reply"},[n("CommentEdit",{attrs:{post:t.post,replyId:t.replyId,autofocus:!0},on:{done:t.commentDone}})],1):t._e(),t.reportCommentId?n("div",[t.reportCommentId?n("ReportDialog",{attrs:{postId:t.post.id,commentId:t.reportCommentId},on:{close:function(e){t.reportCommentId=null}}}):t._e()],1):t._e(),t.editId||t.replyId?t._e():n("v-layout",{class:["comment-actions",t.votedCommentClass(t.comment.id)]},[t.canVoteComment(t.post,t.comment)?n("div",{staticClass:"comment-vote"},[n("a",{staticClass:"vote-comment up",attrs:{title:"vote up"},on:{click:function(e){t.votePostComment(t.post.id,t.comment,1)}}}),n("a",{staticClass:"vote-comment down",attrs:{title:"vote down"},on:{click:function(e){t.votePostComment(t.post.id,t.comment,-1)}}})]):t._e(),n("span",{staticClass:"points"},[t._v(t._s(t.commentKarmaLabel(t.comment)))]),n("nuxt-link",{staticClass:"submitted",attrs:{to:t.routes.comment(t.post.id,t.comment.id)}},[t._v(t._s(t.fromNow(t.comment.created)))]),!t.pinned&&t.canReplyComment(t.post,t.comment)?n("a",{on:{click:function(e){e.preventDefault(),t.replyId=t.comment.id}}},[t._v("reply")]):t._e(),t.canReportComment(t.post,t.comment)?n("a",{on:{click:function(e){e.preventDefault(),t.reportCommentId=t.comment.id}}},[t._v("report")]):t._e(),t.canUpdateComment(t.post,t.comment)?n("a",{on:{click:function(e){e.preventDefault(),t.editId=t.comment.id}}},[t._v("edit")]):t._e(),t.isHidden("pin")||t.post.pinCommentId||!t.canPinComment(t.post,t.comment)?t._e():n("a",{on:{click:function(e){e.preventDefault(),t.pinComment(t.comment,!0)}}},[t._v("pin")]),!t.isHidden("pin")&&t.post.pinCommentId==t.comment.id&&t.canPinComment(t.post,t.comment)?n("a",{on:{click:function(e){e.preventDefault(),t.pinComment(t.comment,!1)}}},[t._v("unpin")]):t._e()],1)],1)],1)],1)],1),t.pinned?t._e():n("div",{staticClass:"comment-children"},t._l(t.childComments(),function(e){return n("div",{key:e.id,staticClass:"comment-child"},[n("post-comment",{attrs:{post:t.post,comment:e,hide:t.hide},on:{votePostCommentDone:function(n){t.$emit("votePostCommentDone",e.id)}}})],1)}))],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},u1Qv:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n("fZjL"),s=n.n(o),i=n("kRG6"),r=(n.n(i),function(t,e){return function(t){return t&&s()(t).length>0}(e)?Object(i.appendQueryString)(t,e):t}),a={formattingHelp:"https://guides.github.com/features/mastering-markdown/",homeNews:"/",homeTop:"/top",homeFavorites:"/favorites",newStack:"/stacks/new",newTech:"/tech/new",homeTech:"/tech",homeStacks:"/stacks",newsTech:function(t){return"/?t="+t},techTier:function(t){return"/tech?tier="+t},organization:function(t){return"/organizations/"+t},organizationNews:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r("/"+t,e)},stack:function(t){return"/stacks/"+t},editStack:function(t){return"/stacks/"+t+"/edit"},tech:function(t){return"/tech/"+t},editTech:function(t){return"/tech/"+t+"/edit"},user:function(t){return"/users/"+t},userAvatar:function(t){return"/users/"+t+"/avatar"},post:function(t,e){return"/posts/"+t+"/"+e},comment:function(t,e){return"/comments/"+t+"/"+e},techTag:function(t,e){return e?"/?t="+t:"/tech/"+t}}},vbt2:function(t,e,n){"use strict";var o=n("S4Uo"),s=n("quHo"),i=n("VU/8")(o.a,s.a,!1,null,null,null);i.options.__file="src\\components\\CommentEdit.vue",e.a=i.exports},vx9s:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("NAmB"),s=n("i+Rj"),i=n("VU/8")(o.a,s.a,!1,null,null,null);i.options.__file="src\\pages\\comments\\_postid\\_id.vue",e.default=i.exports},xRMh:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.organization&&t.post?n("div",{staticClass:"post-alerts"},[t.post.archived?n("v-alert",{attrs:{outline:"",color:"grey",icon:"archive",value:!0}},[t._v("\n        This is an archived post. You won't be able to vote or comment. Posts are automatically archived after 6 months.\n    ")]):null!=t.post.locked?n("v-alert",{attrs:{outline:"",color:"info",icon:"lock",value:!0}},[t._v("\n        This post is locked and contributions is limited to "+t._s(t.organization.name)+" moderators. "+t._s(t.fromNow(t.post.locked))+"\n    ")]):null==t.organization.locked||t.isOrganizationMember()?t.memberCannotComment()?n("v-alert",{attrs:{outline:"",color:"error",icon:"lock",value:!0}},[t._v("\n        You are not permitted add comments\n    ")]):t._e():n("v-alert",{attrs:{outline:"",color:"info",icon:"lock",value:!0}},[t._v("\n        Contributions to "+t._s(t.organization.name)+" is limited to members only\n    ")]),null!=t.post.hidden?n("v-alert",{attrs:{outline:"",color:"info",icon:"remove_red_eye",value:!0}},[t._v("\n        This post is hidden and will not be displayed in search results or news feeds. "+t._s(t.fromNow(t.post.hidden))+"\n    ")]):t._e()],1):t._e()};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s}});
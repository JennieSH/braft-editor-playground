"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[963],{9963:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var i=n(5893),l=n(5589),a=n.n(l),o=n(2452),r=n(7294),c={base:{remove:"\u522a\u9664",cancel:"\u53d6\u6d88",confirm:"\u78ba\u5b9a",inert:"\u63d2\u5165",width:"\u5bec\u5ea6",height:"\u9ad8\u5ea6"},controls:{clear:"\u6e05\u9664\u5185\u5bb9",undo:"\u64a4\u92b7",redo:"\u91cd\u505a",fontSize:"\u5b57\u865f",color:"\u984f\u8272",textColor:"\u6587\u5b57\u984f\u8272",backgroundColor:"\u80cc\u666f\u984f\u8272",tempColors:"\u81e8\u6642\u984f\u8272",bold:"\u7c97\u9ad4",lineHeight:"\u884c\u9ad8",letterSpacing:"\u5b57\u9593\u8ddd",textIndent:"\u6bb5\u843d\u7e2e\u9032",increaseIndent:"\u589e\u52a0\u7e2e\u9032",decreaseIndent:"\u51cf\u5c11\u7e2e\u9032",border:"\u908a\u6846",italic:"\u659c\u9ad4",underline:"\u4e0b\u5283\u7dda",strikeThrough:"\u522a\u9664\u7dda",fontFamily:"\u5b57\u9ad4",textAlign:"\u6587\u672c\u5c0d\u9f4a",alignLeft:"\u5c45\u5de6",alignCenter:"\u5c45\u4e2d",alignRight:"\u5c45\u53f3",alignJustify:"\u5169\u7aef\u5c0d\u9f4a",floatLeft:"\u5de6\u6d6e\u52d5",floatRight:"\u53f3\u6d6e\u52d5",superScript:"\u4e0a\u6a19",subScript:"\u4e0b\u6a19",removeStyles:"\u6e05\u9664\u6a23\u5f0f",headings:"\u6a19\u984c",header:"\u6a19\u984c",normal:"\u5e38\u898f",orderedList:"\u6709\u5e8f\u5217\u8868",unorderedList:"\u7121\u5e8f\u5217\u8868",blockQuote:"\u5f15\u7528",code:"\u7a0b\u5f0f\u78bc",link:"\u5efa\u7acb\u9023\u7d50",unlink:"\u6e05\u9664\u8d85\u9023\u7d50",hr:"\u6c34\u5e73\u7dda",media:"\u5716\u7247",mediaLibirary:"\u5716\u7247\u5eab",emoji:"emoji",fullscreen:"\u5168\u87a2\u5e55",exitFullscreen:"\u9000\u51fa\u5168\u87a2\u5e55"},linkEditor:{textInputPlaceHolder:"\u8f38\u5165\u93c8\u63a5\u6587\u5b57",linkInputPlaceHolder:"\u8f38\u5165\u93c8\u63a5\u7db2\u5740",inputWithEnterPlaceHolder:"\u8f38\u5165\u93c8\u63a5\u5730\u5740\u4e26\u78ba\u5b9a",openInNewWindow:"\u5728\u65b0\u8996\u7a97\u6253\u958b",removeLink:"\u79fb\u9664\u93c8\u63a5"},audioPlayer:{title:"\u64ad\u653e\u97f3\u6e90"},videoPlayer:{title:"\u64ad\u653e\u5f71\u7247",embedTitle:"\u5d4c\u5165\u5f0f\u5a92\u9ad4"},media:{image:"\u5716\u7247",video:"\u5f71\u7247",audio:"\u97f3\u6e90",embed:"\u5d4c\u5165\u5f0f\u5a92\u9ad4"},remove:"\u522a\u9664",cancel:"\u53d6\u6d88",insert:"\u63d2\u5165\u6240\u9078\u9805\u76ee",width:"\u5bec\u5ea6",height:"\u9ad8\u5ea6",image:"\u5716\u7247",video:"\u5f71\u7247",audio:"\u97f3\u6e90",embed:"\u5d4c\u5165\u5f0f\u5a92\u9ad4",caption:"\u5a92\u9ad4\u5eab",dragTip:"\u9ede\u64ca\u6216\u62d6\u52d5\u5716\u7247\u81f3\u6b64",dropTip:"\u653e\u958b\u6ed1\u9f20\u5f8c\u4e0a\u50b3",selectAll:"\u9078\u64c7\u5168\u90e8",deselect:"\u53d6\u6d88\u9078\u64c7",removeSelected:"\u522a\u9664\u9078\u4e2d\u9805\u76ee",externalInputPlaceHolder:"\u8cc7\u6e90\u540d\u7a31|\u8cc7\u6e90\u5730\u5740",externalInputTip:"\u4f7f\u7528\u201c|\u201d\u5206\u9694\u8cc7\u6e90\u540d\u7a31\u548c\u8cc7\u6e90\u5730\u5740",addLocalFile:"\u65b0\u589e\u672c\u5730\u8cc7\u6e90",addExternalSource:"\u65b0\u589e\u7db2\u7d61\u8cc7\u6e90",unnamedItem:"\u672a\u547d\u540d\u9805\u76ee",confirmInsert:"\u63d2\u5165\u9078\u4e2d\u9805\u76ee"},d=function(e){var t=e.uploadCallback,n=(0,r.useRef)(null),l=(0,r.useCallback)((function(){n.current&&n.current.click()}),[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{ref:n,name:"myFile",type:"file",className:"hidden",onChange:function(e){if(e.target.files)try{console.log("Img Uploaded Success");var n=URL.createObjectURL(e.target.files[0]);console.log(n),t(n)}catch(i){console.log("Catch Error: ",i)}finally{e.target.value="",console.log("finally")}}}),(0,i.jsx)("span",{onClick:l,children:"\u5716\u7247"})]})},s=(0,r.memo)(d),u=function(e){var t=e.text,n=e.setText,l=(0,r.useState)(a().createEditorState(t)),d=l[0],u=l[1],m=(0,r.useCallback)((function(){u(o.ContentUtils.insertText(d,"\uf8ff"))}),[d]),g=(0,r.useCallback)((function(e){u(o.ContentUtils.insertMedias(d,[{type:"IMAGE",url:e}]))}),[d]);return(0,i.jsx)(a(),{value:d,onChange:function(e){u(e),n(e.toHTML())},controlBarClassName:"editor-bar",contentClassName:"editor",placeholder:"# braft editor",controls:["bold","italic","link","media","separator",{key:"underline",title:"\u52a0\u500b Line ~",text:(0,i.jsx)("div",{children:"\u5ba2\u88fd\u5316\u5e95\u7dda"})},{key:"insert-apple",type:"button",title:"\u52a0\u500b \uf8ff",text:"\uf8ff",onClick:m},{key:"upload-img",type:"button",title:"\u5716\u5462 \u0ca0\xb7\u0ca0?",text:(0,i.jsx)(s,{uploadCallback:g})}],language:function(){return c},stripPastedStyles:!0,media:{accepts:{image:"image/png,image/jpeg,image/webp",video:!1,audio:!1},externals:{image:!1,video:!1,audio:!1}},imageControls:["remove"]})},m=(0,r.memo)(u)}}]);
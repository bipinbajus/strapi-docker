(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[4299],{69666:function(e,t,a){var n;e.exports=(n=a(67294),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=100)}({0:function(e,t){e.exports=n},100:function(e,t,a){"use strict";a.r(t);var n=a(0);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",r({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M17 14h-4.34a6 6 0 110-4H23v4h-2v4h-4v-4zM7 14a2 2 0 100-4 2 2 0 000 4z",fill:"#8E8EA9"}))}}}))},87071:(e,t,a)=>{"use strict";var n=a(95318),r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(67294)),i=a(97132),l=a(68547),u=a(30741),s=n(a(67483)),d=n(a(45697)),c=a(74855),f=n(a(69666));function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var m=function(e){var t=e.apiToken,a=(0,i.useIntl)().formatMessage,n=(0,l.useNotification)(),r=(0,l.useTracking)().trackUsage,d=(0,o.useRef)(r);return o.default.createElement(l.ContentBox,{endAction:t&&o.default.createElement("span",{style:{alignSelf:"start"}},o.default.createElement(c.CopyToClipboard,{onCopy:function(){d("didCopyTokenKey"),n({type:"success",message:{id:"Settings.apiTokens.notification.copied"}})},text:t},o.default.createElement(u.IconButton,{label:a({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),noBorder:!0,icon:o.default.createElement(s.default,null),style:{padding:0,height:"1rem"}}))),title:t||a({id:"Settings.apiTokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:a(t?{id:"Settings.apiTokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.apiTokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:o.default.createElement(f.default,null),iconBackground:"neutral100"})};m.defaultProps={apiToken:null},m.propTypes={apiToken:d.default.string};var g=m;t.default=g},9461:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),o=a(68547),i=a(78862),l=a(62031),u=a(19408),s=n(a(84734)),d=a(97132),c=n(a(45697)),f=function(e){var t=e.apiTokenName,a=(0,d.useIntl)().formatMessage;return(0,o.useFocusWhenNavigate)(),r.default.createElement(l.Main,{"aria-busy":"true"},r.default.createElement(o.SettingsPageTitle,{name:"API Tokens"}),r.default.createElement(i.HeaderLayout,{primaryAction:r.default.createElement(u.Button,{disabled:!0,startIcon:r.default.createElement(s.default,null),type:"button",size:"L"},a({id:"form.button.save",defaultMessage:"Save"})),title:t||a({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),r.default.createElement(i.ContentLayout,null,r.default.createElement(o.LoadingIndicatorPage,null)))};f.defaultProps={apiTokenName:null},f.propTypes={apiTokenName:c.default.string};var p=f;t.default=p},91486:(e,t,a)=>{"use strict";var n=a(95318),r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(87757)),i=n(a(48926)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=I(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(67294)),u=a(97132),s=a(68547),d=a(78862),c=a(62031),f=a(19408),p=n(a(84734)),m=n(a(68717)),g=a(85104),y=a(80831),v=a(9008),k=a(5493),b=a(49425),E=a(34626),M=a(55967),T=a(59626),h=a(43808),O=n(a(27361)),P=a(39711),w=a(23724),j=a(26595),S=a(53777),x=n(a(93004)),_=n(a(9461)),C=n(a(87071));function I(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(I=function(e){return e?a:t})(e)}var A=function(){var e,t,a,n,r;(0,s.useFocusWhenNavigate)();var I=(0,u.useIntl)().formatMessage,A=(0,s.useOverlayBlocker)(),B=A.lockApp,W=A.unlockApp,L=(0,s.useNotification)(),N=(0,P.useHistory)(),D=(0,s.useTracking)().trackUsage,F=(0,l.useRef)(D),z=(0,P.useRouteMatch)("/settings/api-tokens/:id").params.id,R="create"===z;(0,l.useEffect)((function(){F.current(R?"didAddTokenFromList":"didEditTokenFromList")}),[R]),null!==(e=N.location.state)&&void 0!==e&&e.apiToken.accessKey&&(r=N.location.state.apiToken);var q=(0,w.useQuery)(["api-token",z],(0,i.default)(o.default.mark((function e(){var t,a;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.axiosInstance.get("/admin/api-tokens/".concat(z));case 2:return t=e.sent,a=t.data.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),{enabled:!R&&!r,onError:function(){L({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),G=q.status,H=q.data;H&&(r=H);var K,U=function(){var e=(0,i.default)(o.default.mark((function e(t,a){var n,i,l;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F.current(R?"willCreateToken":"willEditToken"),B(),e.prev=2,!R){e.next=9;break}return e.next=6,S.axiosInstance.post("/admin/api-tokens",t);case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,S.axiosInstance.put("/admin/api-tokens/".concat(z),t);case 11:e.t0=e.sent;case 12:n=e.t0,i=n.data.data,r=i,L({type:"success",message:I({id:"notification.success.saved",defaultMessage:"Saved"})}),F.current(R?"didCreateToken":"didEditToken",{type:r.type}),R&&N.replace("/settings/api-tokens/".concat(i.id),{apiToken:i}),e.next=25;break;case 20:e.prev=20,e.t1=e.catch(2),l=(0,j.formatAPIErrors)(e.t1.response.data),a.setErrors(l),L({type:"warning",message:(0,O.default)(e.t1,"response.data.message","notification.error")});case 25:W();case 26:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t,a){return e.apply(this,arguments)}}();return R||r||"success"===G?l.default.createElement(c.Main,null,l.default.createElement(s.SettingsPageTitle,{name:"API Tokens"}),l.default.createElement(y.Formik,{validationSchema:x.default,validateOnChange:!1,initialValues:{name:(null===(t=r)||void 0===t?void 0:t.name)||"",description:(null===(a=r)||void 0===a?void 0:a.description)||"",type:(null===(n=r)||void 0===n?void 0:n.type)||"read-only"},onSubmit:U},(function(e){var t,a,n,o,i,u=e.errors,c=e.handleChange,y=e.isSubmitting,O=e.values;return l.default.createElement(s.Form,null,l.default.createElement(d.HeaderLayout,{title:(null===(t=r)||void 0===t?void 0:t.name)||I({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"}),primaryAction:l.default.createElement(f.Button,{disabled:y,loading:y,startIcon:l.default.createElement(p.default,null),type:"submit",size:"L"},I({id:"app.components.Button.save",defaultMessage:"Save"})),navigationAction:l.default.createElement(g.Link,{startIcon:l.default.createElement(m.default,null),to:"/settings/api-tokens"},I({id:"app.components.go-back",defaultMessage:"Back"}))}),l.default.createElement(d.ContentLayout,null,l.default.createElement(v.Stack,{size:6},Boolean(null===(a=r)||void 0===a?void 0:a.name)&&l.default.createElement(C.default,{apiToken:r.accessKey}),l.default.createElement(k.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},l.default.createElement(v.Stack,{size:4},l.default.createElement(b.Typography,{variant:"delta",as:"h2"},I({id:"Settings.apiTokens.details",defaultMessage:"Details"})),l.default.createElement(E.Grid,{gap:5},l.default.createElement(E.GridItem,{key:"name",col:6,xs:12},l.default.createElement(M.TextInput,{name:"name",error:u.name?I(null!==(n=u.name)&&void 0!==n&&n.id?u.name:{id:u.name,defaultMessage:u.name}):null,label:I({id:"Settings.apiTokens.form.name",defaultMessage:"Name"}),onChange:c,value:O.name,required:!0})),l.default.createElement(E.GridItem,{key:"description",col:6,xs:12},l.default.createElement(T.Textarea,{label:I({id:"Settings.apiTokens.form.description",defaultMessage:"Description"}),name:"description",error:u.description?I(null!==(o=u.description)&&void 0!==o&&o.id?u.description:{id:u.description,defaultMessage:u.description}):null,onChange:c},O.description)),l.default.createElement(E.GridItem,{key:"type",col:6,xs:12},l.default.createElement(h.Select,{name:"type",label:I({id:"Settings.apiTokens.form.type",defaultMessage:"Token type"}),value:O.type,error:u.type?I(null!==(i=u.type)&&void 0!==i&&i.id?u.type:{id:u.type,defaultMessage:u.type}):null,onChange:function(e){c({target:{name:"type",value:e}})}},l.default.createElement(h.Option,{value:"read-only"},I({id:"Settings.apiTokens.types.read-only",defaultMessage:"Read-only"})),l.default.createElement(h.Option,{value:"full-access"},I({id:"Settings.apiTokens.types.full-access",defaultMessage:"Full access"}))))))))))}))):l.default.createElement(_.default,{apiTokenName:null===(K=r)||void 0===K?void 0:K.name})};t.default=A},93004:(e,t,a)=>{"use strict";var n=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(r,l,u):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(53209)),o=a(68547);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}var l=r.object().shape({name:r.string(o.translatedErrors.string).required(o.translatedErrors.required),type:r.string(o.translatedErrors.string).oneOf(["read-only","full-access"]).required(o.translatedErrors.required),description:r.string().nullable()});t.default=l},3441:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),o=a(68547),i=n(a(13240)),l=n(a(91486)),u=function(){return r.default.createElement(o.CheckPagePermissions,{permissions:i.default.settings["api-tokens"].create},r.default.createElement(l.default,null))};t.default=u}}]);
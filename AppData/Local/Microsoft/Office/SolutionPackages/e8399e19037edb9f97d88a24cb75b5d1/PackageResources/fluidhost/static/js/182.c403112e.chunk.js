(this.webpackJsonpfluidhost=this.webpackJsonpfluidhost||[]).push([[182],{1254:function(e,t,n){"use strict";n.r(t),n.d(t,"ErrorDialog",(function(){return f}));var r=n(7),i=n(0),a=n(649),o={main:{borderRadius:"2px",boxShadow:a.a.shadowLevel4}},s={borderRadius:"2px",boxShadow:a.a.shadowLevel4,border:"none"},l=n(748),c=n(419),u=n(1190),d=n(119),g=n(445),p=n(439),m=function(e){return{title:{color:e.themeDark}}},f=i.memo((function(e){var t=e.dialogStrings,n=e.actions,a=e.appColors,f=e.debugInfo,v=i.useState(!1),y=Object(r.a)(v,2),x=y[0],E=y[1],O=i.useState([]),k=Object(r.a)(O,2),j=k[0],S=k[1];return i.useEffect((function(){n&&S(null===n||void 0===n?void 0:n.map((function(e){var t=e.type,n=e.label,r=e.action,o=function(){r&&r(),E(!0)};return"Primary"===t?i.createElement(l.a,{key:"primaryAction-".concat(n),label:"primaryAction-".concat(n),onClick:o,style:s,className:a&&Object(p.a)(a)},n):i.createElement(c.a,{key:"secondaryAction-".concat(n),label:"secondaryAction-".concat(n),onClick:o,style:s},n)})))}),[n]),i.createElement(u.a,{hidden:x,maxWidth:"none",dialogContentProps:{type:d.a.normal,title:t.dialogTitle,styles:a?m(a):void 0},styles:o},i.createElement("pre",{style:{fontFamily:"Segoe UI"}},t.dialogMessage),!b&&f&&i.createElement(h,Object.assign({},f)),n&&i.createElement(g.a,null,j))})),b=!0,h=i.memo((function(e){return i.createElement(i.Fragment,null,i.createElement("br",null),(e.debugError||e.debugErrorCode||e.debugReactErrorBoundaryInfo)&&i.createElement("div",{style:{fontWeight:600}},"Debug Info:"),i.createElement("br",null),e.debugErrorCode&&i.createElement("div",null,"ErrorCode: ",e.debugErrorCode),i.createElement("pre",{style:{fontFamily:"Segoe UI"}},e.debugError&&e.debugError.stack||JSON.stringify(e.debugError)),e.debugReactErrorBoundaryInfo&&i.createElement("pre",{style:{fontFamily:"Segoe UI"}},"Component Stack:",e.debugReactErrorBoundaryInfo&&e.debugReactErrorBoundaryInfo.componentStack))}))},1275:function(e,t,n){"use strict";n.r(t),n.d(t,"ContainerErrorDialog",(function(){return O}));var r=n(1),i=n.n(r),a=n(2),o=n(7),s=n(0),l=n(99),c=n(33),u=n(76),d=n(5),g=n(30),p=n(8),m=n(9),f=n(59),b=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(d.a)(this,n),r=t.call(this,"Cancellation Error: "+e),Object.setPrototypeOf(Object(g.a)(r),n.prototype),r}return n}(Object(f.a)(Error)),h=n(91),v=n(1143),y=n(58),x=n(760),E=n(1254),O=function(e){var t=e.errorDialogActionHandlers,n=e.loadedInfoPromise,r=e.appColors,d=e.localization,g=s.useState(),p=Object(o.a)(g,2),m=p[0],f=p[1],O=s.useState(!1),k=Object(o.a)(O,2),j=k[0],S=k[1],w=Object(v.a)(y.a,d.locale),C=s.useCallback(function(){var e=Object(a.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof b)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Object(x.a)(t,d.locale);case 4:(null===(n=e.sent)||void 0===n?void 0:n.errorType)===c.a.throttlingError&&S(!0),f(Object.assign(Object.assign({},n),{error:t}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),D=s.useCallback(function(){var e=Object(a.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)(t,d.locale);case 2:n=e.sent,f(Object.assign(Object.assign({},n),{error:t}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),B=s.useCallback(function(){var e=Object(a.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);s.useEffect((function(){var e=function(e){e&&D(e).catch((function(){}))},t=function(e){B(e).catch((function(){}))};return n.then((function(n){n.container.then((function(n){n.on("closed",e),n.on("warning",t)})).catch((function(e){C(e).catch((function(){}))})),n.component.catch((function(e){C(e).catch((function(){}))}))})).catch((function(e){C(e).catch((function(){}))})),function(){n.then((function(n){n.container.then((function(n){n.removeListener("closed",e),n.removeListener("warning",t)})).catch((function(){}))})).catch((function(){})),f(void 0)}}),[n]);var N={type:"Primary",label:(null===w||void 0===w?void 0:w.giveFeedback)||"",action:function(){m&&t&&t("Feedback",m.errorType)}},L={type:"Default",label:(null===w||void 0===w?void 0:w.close)||"",action:function(){m&&t&&t("Close",m.errorType)}};if(m)switch(m.errorType){case c.a.fileNotFoundOrAccessDeniedError:return s.createElement(E.ErrorDialog,{dialogStrings:m.dialogStrings,appColors:r,actions:[L],debugInfo:{debugErrorCode:"FileNotFoundOrAccessDenied",debugError:m.error}});case c.a.authorizationError:return s.createElement(E.ErrorDialog,{dialogStrings:m.dialogStrings,appColors:r,actions:[N,L],debugInfo:{debugErrorCode:"AuthorizationError",debugError:m.error}});case c.a.throttlingError:case l.a.throttlingError:return s.createElement(E.ErrorDialog,{dialogStrings:m.dialogStrings,appColors:r,actions:[N,{type:"Default",label:(j?null===w||void 0===w?void 0:w.reloadButtonText:null===w||void 0===w?void 0:w.close)||"",action:function(){m&&t&&t("Close",m.errorType)}}],debugInfo:{debugErrorCode:"Service Busy",debugError:m.error}});case h.c.ContainerUpgradeRequired:return s.createElement(E.ErrorDialog,{dialogStrings:m.dialogStrings,appColors:r,actions:[L],debugInfo:{debugErrorCode:"ContainerUpgradeRequired",debugError:m.error}});case c.a.fileOverwrittenInStorage:case u.a.outOfStorageError:return null;default:return s.createElement(E.ErrorDialog,{dialogStrings:m.dialogStrings,appColors:r,actions:[N,L],debugInfo:{debugErrorCode:null===m||void 0===m?void 0:m.errorType,debugError:m.error}})}return null}},455:function(e,t,n){"use strict";n.r(t),n.d(t,"UnknownError",(function(){return i.a})),n.d(t,"MessageBanner",(function(){return _})),n.d(t,"getBannerMessagingForError",(function(){return T.b})),n.d(t,"fluidMessageBannerStackTestId",(function(){return ye})),n.d(t,"FluidMessageBanner",(function(){return xe})),n.d(t,"ContainerBannerProvider",(function(){return je.a})),n.d(t,"ErrorDialog",(function(){return Se.ErrorDialog})),n.d(t,"ContainerErrorDialog",(function(){return Se.ContainerErrorDialog})),n.d(t,"getDialogMessagingForError",(function(){return Se.getDialogMessagingForError})),n.d(t,"getContainerErrorDialog",(function(){return Se.getContainerErrorDialog})),n.d(t,"getErrorDialog",(function(){return Se.getErrorDialog})),n.d(t,"EmbedMessaging",(function(){return we.a})),n.d(t,"EmbedErrorMessaging",(function(){return Ce.a})),n.d(t,"ErrorBoundary",(function(){return _e}));var r,i=n(186),a=n(0),o=n(147),s=n(16),l=n(4),c=n(1144),u=n(1201),d=n(743),g=n(745),p=n(247),m=n(1150),f=n(1211),b=n(1202);!function(e){e[e.info=0]="info",e[e.error=1]="error",e[e.blocked=2]="blocked",e[e.severeWarning=3]="severeWarning",e[e.success=4]="success",e[e.warning=5]="warning"}(r||(r={}));var h,v,y,x=Object(c.a)(),E=function(e){function t(t){var n,i=e.call(this,t)||this;return i.ICON_MAP=((n={})[r.info]="Info",n[r.warning]="Info",n[r.error]="ErrorBadge",n[r.blocked]="Blocked2",n[r.severeWarning]="Warning",n[r.success]="Completed",n),i._getRegionProps=function(){var e=!!i._getActionsDiv()||!!i._getDismissDiv(),t={"aria-describedby":i.state.labelId,role:"region"};return e?t:{}},i._onClick=function(e){i.setState({expandSingleLine:!i.state.expandSingleLine})},Object(u.a)(i),i.state={labelId:Object(d.a)("MessageBar"),showContent:!1,expandSingleLine:!1},i}return Object(l.c)(t,e),t.prototype.render=function(){var e=this.props.isMultiline;return this._classNames=this._getClassNames(),e?this._renderMultiLine():this._renderSingleLine()},t.prototype._getActionsDiv=function(){return this.props.actions?a.createElement("div",{className:this._classNames.actions},this.props.actions):null},t.prototype._getDismissDiv=function(){var e=this.props,t=e.onDismiss,n=e.dismissIconProps;return t?a.createElement(f.a,{disabled:!1,className:this._classNames.dismissal,onClick:t,iconProps:n||{iconName:"Clear"},title:this.props.dismissButtonAriaLabel,ariaLabel:this.props.dismissButtonAriaLabel}):null},t.prototype._getDismissSingleLine=function(){return this.props.onDismiss?a.createElement("div",{className:this._classNames.dismissSingleLine},this._getDismissDiv()):null},t.prototype._getExpandSingleLine=function(){return!this.props.actions&&this.props.truncated?a.createElement("div",{className:this._classNames.expandSingleLine},a.createElement(f.a,{disabled:!1,className:this._classNames.expand,onClick:this._onClick,iconProps:{iconName:this.state.expandSingleLine?"DoubleChevronUp":"DoubleChevronDown"},ariaLabel:this.props.overflowButtonAriaLabel,"aria-expanded":this.state.expandSingleLine})):null},t.prototype._getIconSpan=function(){var e=this.props.messageBarIconProps;return a.createElement("div",{className:this._classNames.iconContainer,"aria-hidden":!0},e?a.createElement(b.a,Object(l.a)({},e,{className:Object(g.a)(this._classNames.icon,e.className)})):a.createElement(b.a,{iconName:this.ICON_MAP[this.props.messageBarType],className:this._classNames.icon}))},t.prototype._renderMultiLine=function(){return a.createElement("div",Object(l.a)({className:this._classNames.root},this._getRegionProps()),a.createElement("div",{className:this._classNames.content},this._getIconSpan(),this._renderInnerText(),this._getDismissDiv()),this._getActionsDiv())},t.prototype._renderSingleLine=function(){return a.createElement("div",Object(l.a)({className:this._classNames.root},this._getRegionProps()),a.createElement("div",{className:this._classNames.content},this._getIconSpan(),this._renderInnerText(),this._getExpandSingleLine(),this._getActionsDiv(),this._getDismissSingleLine()))},t.prototype._renderInnerText=function(){var e=Object(p.d)(this.props,p.e,["className"]);return a.createElement("div",{className:this._classNames.text,id:this.state.labelId,role:"status","aria-live":this._getAnnouncementPriority()},a.createElement("span",Object(l.a)({className:this._classNames.innerText},e),a.createElement(m.a,null,a.createElement("span",null,this.props.children))))},t.prototype._getClassNames=function(){var e=this.props,t=e.theme,n=e.className,i=e.messageBarType,a=e.onDismiss,o=e.actions,s=e.truncated,l=e.isMultiline,c=this.state.expandSingleLine;return x(this.props.styles,{theme:t,messageBarType:i||r.info,onDismiss:void 0!==a,actions:void 0!==o,truncated:s,isMultiline:l,expandSingleLine:c,className:n})},t.prototype._getAnnouncementPriority=function(){switch(this.props.messageBarType){case r.blocked:case r.error:case r.severeWarning:return"assertive"}return"polite"},t.defaultProps={messageBarType:r.info,onDismiss:void 0,isMultiline:!0},t}(a.Component),O={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},k=((h={})[r.error]="errorBackground",h[r.blocked]="errorBackground",h[r.success]="successBackground",h[r.warning]="warningBackground",h[r.severeWarning]="severeWarningBackground",h[r.info]="infoBackground",h),j=((v={})[r.error]="rgba(255, 0, 0, 0.3)",v[r.blocked]="rgba(255, 0, 0, 0.3)",v[r.success]="rgba(48, 241, 73, 0.3)",v[r.warning]="rgba(255, 254, 57, 0.3)",v[r.severeWarning]="rgba(255, 0, 0, 0.3)",v[r.info]="Window",v),S=((y={})[r.error]="errorIcon",y[r.blocked]="errorIcon",y[r.success]="successIcon",y[r.warning]="warningIcon",y[r.severeWarning]="severeWarningIcon",y[r.info]="infoIcon",y),w=Object(o.a)(E,(function(e){var t,n,i,a,o,c=e.theme,u=e.className,d=e.onDismiss,g=e.truncated,p=e.isMultiline,m=e.expandSingleLine,f=e.messageBarType,b=void 0===f?r.info:f,h=c.semanticColors,v=c.fonts,y=Object(s.u)(0,s.g),x=Object(s.p)(O,c),E={fontSize:s.e.xSmall,height:10,lineHeight:"10px",color:h.messageText,selectors:(t={},t[s.d]=Object(l.a)(Object(l.a)({},Object(s.q)()),{color:"WindowText"}),t)},w=[Object(s.o)(c,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":E,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[x.root,v.medium,b===r.error&&x.error,b===r.blocked&&x.blocked,b===r.severeWarning&&x.severeWarning,b===r.success&&x.success,b===r.warning&&x.warning,p?x.multiline:x.singleline,!p&&d&&x.dismissalSingleLine,!p&&g&&x.expandingSingleLine,{background:h[k[b]],color:h.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:(n={".ms-Link":{color:h.messageLink,selectors:{":hover":{color:h.messageLinkHovered}}}},n[s.d]=Object(l.a)(Object(l.a)({},Object(s.q)()),{background:j[b],border:"1px solid WindowText",color:"WindowText"}),n)},p&&{flexDirection:"column"},u],content:[x.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[x.iconContainer,{fontSize:s.e.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:h[S[b]],selectors:(i={},i[s.d]=Object(l.a)(Object(l.a)({},Object(s.q)()),{color:"WindowText"}),i)},text:[x.text,Object(l.a)(Object(l.a)({minWidth:0,display:"flex",flexGrow:1,margin:8},v.small),{selectors:(a={},a[s.d]=Object(l.a)({},Object(s.q)()),a)}),!d&&{marginRight:12}],innerText:[x.innerText,{lineHeight:16,selectors:{"& span a":{paddingLeft:4}}},g&&{overflow:"visible",whiteSpace:"pre-wrap"},!p&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!p&&!g&&{selectors:(o={},o[y]={overflow:"visible",whiteSpace:"pre-wrap"},o)},m&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:x.dismissSingleLine,expandSingleLine:x.expandSingleLine,dismissal:[x.dismissal,w],expand:[x.expand,w],actions:[p?x.actions:x.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},p&&{marginBottom:8},d&&!p&&{marginRight:0}]}}),void 0,{scope:"MessageBar"}),C=n(1197),D=Object(c.a)(),B=function(e){function t(t){var n=e.call(this,t)||this;return n._link=a.createRef(),n._renderContent=function(e){void 0===e&&(e={});var t=n.props,r=t.disabled,i=t.children,o=t.className,s=t.href,c=t.underline,u=t.theme,d=t.styles,g=D(d,{className:o,isButton:!s,isDisabled:r,isUnderlined:c,theme:u}),p=n._getRootType(n.props);return a.createElement(p,Object(l.a)({},e,n._adjustPropsForRootType(p,n.props),{className:g.root,onClick:n._onClick,ref:n._link,"aria-disabled":r}),i)},n._onClick=function(e){var t=n.props,r=t.onClick;t.disabled?e.preventDefault():r&&r(e)},Object(u.a)(n),n}return Object(l.c)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.disabled,r=t.keytipProps;return r?a.createElement(C.a,{keytipProps:r,ariaDescribedBy:this.props["aria-describedby"],disabled:n},(function(t){return e._renderContent(t)})):this._renderContent()},t.prototype.focus=function(){var e=this._link.current;e&&e.focus&&e.focus()},t.prototype._adjustPropsForRootType=function(e,t){t.children,t.as;var n=t.disabled,r=t.target,i=t.href,a=(t.theme,t.getStyles,t.styles,t.componentRef,t.keytipProps,t.underline,Object(l.d)(t,["children","as","disabled","target","href","theme","getStyles","styles","componentRef","keytipProps","underline"]));return"string"===typeof e?"a"===e?Object(l.a)({target:r,href:n?void 0:i},a):"button"===e?Object(l.a)({type:"button",disabled:n},a):Object(l.a)(Object(l.a)({},a),{disabled:n}):Object(l.a)({target:r,href:i,disabled:n},a)},t.prototype._getRootType=function(e){return e.as?e.as:e.href?"a":"button"},t}(a.Component),N={root:"ms-Link"},L=Object(o.a)(B,(function(e){var t,n,r,i,a,o,l=e.className,c=e.isButton,u=e.isDisabled,d=e.isUnderlined,g=e.theme,p=g.semanticColors,m=p.link,f=p.linkHovered,b=p.disabledText,h=p.focusBorder,v=Object(s.p)(N,g);return{root:[v.root,g.fonts.medium,{color:m,outline:"none",fontSize:"inherit",fontWeight:"inherit",textDecoration:d?"underline":"none",selectors:(t={".ms-Fabric--isFocusVisible &:focus":{boxShadow:"0 0 0 1px "+h+" inset",outline:"1px auto "+h,selectors:(n={},n[s.d]={outline:"1px solid WindowText"},n)}},t[s.d]={borderBottom:"none"},t)},c&&{background:"none",backgroundColor:"transparent",border:"none",cursor:"pointer",display:"inline",margin:0,overflow:"inherit",padding:0,textAlign:"left",textOverflow:"inherit",userSelect:"text",borderBottom:"1px solid transparent",selectors:(r={},r[s.d]={color:"LinkText",forcedColorAdjust:"none"},r)},!c&&{selectors:(i={},i[s.d]={MsHighContrastAdjust:"auto",forcedColorAdjust:"auto"},i)},u&&["is-disabled",{color:b,cursor:"default"},{selectors:{"&:link, &:visited":{pointerEvents:"none"}}}],!u&&{selectors:{"&:active, &:hover, &:active:hover":{color:f,textDecoration:"underline",selectors:(a={},a[s.d]={color:"LinkText"},a)},"&:focus":{color:m,selectors:(o={},o[s.d]={color:"LinkText"},o)}}},v.root,l]}}),void 0,{scope:"Link"}),_=a.memo(Object(o.a)((function(e){var t=e.bannerStrings,n=e.actions,r=e.icon,i=e.messageBarType,o=e.isMultiline,l=e.isAssertive,c=e.styles,u=e.onDismiss,d=e.dismissButtonAriaLabel,g=e.hyperlink,p=l?"alert":void 0,m=p?void 0:"polite",f=Object(s.l)(e,c),b=f.root,h=f.content,v=f.text,y=f.titleText,x=f.messageText,E=f.actionStyles,O=f.iconStyles;return a.createElement(w,{styles:{root:b,content:h,text:v,actions:E},messageBarType:i,isMultiline:o,tabIndex:0,ariaLabel:t.bannerMessage,role:p,"aria-live":m,messageBarIconProps:{iconName:r,styles:O},actions:n?a.createElement(a.Fragment,null,n):void 0,onDismiss:u,dismissButtonAriaLabel:d},t.bannerTitle&&a.createElement(I,{styles:y},t.bannerTitle),a.createElement(M,{styles:x},t.bannerMessage),void 0!==g&&a.createElement(L,{href:g.url,target:"_self",underline:!0},g.title))}),(function(e){return{root:{minHeight:36},content:{alignItems:"center"},text:{fontSize:14,flexGrow:1},titleText:{fontWeight:600,display:"inline-block"},messageText:{display:"inline-block"},actionStyles:{marginRight:"8px"},iconStyles:{root:{fontWeight:400}}}})));var I=a.memo((function(e){var t=e.children,n=e.styles;return a.createElement("div",{className:Object(s.z)(n)},t,a.createElement("span",null,"\xa0\xa0"))})),M=a.memo((function(e){var t=e.children,n=e.styles;return a.createElement("div",{className:Object(s.z)(n)},t)})),T=n(162),W=n(20),A=n(13),P=n(7);var R=function(){return(R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function F(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,i++)r[i]=a[o];return r}var G=n(739),z=n(108),H=n(426),U=R;function q(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=e;return i.isSlot?0===(n=a.Children.toArray(n)).length?i(t):i(R(R({},t),{children:n})):a.createElement.apply(a,F([e,t],n))}function J(e,t){void 0===t&&(t={});var n=t.defaultProp,r=void 0===n?"children":n;return function(t,n,i,o,s){if(a.isValidElement(n))return n;var l=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];for(var i={},a=[],o=0,s=n;o<s.length;o++){var l=s[o];a.push(l&&l.className),U(i,l)}return i.className=Object(G.a)([e,a],{rtl:Object(H.a)(t)}),i}(o,s,t,function(e,t){var n,r;"string"===typeof t||"number"===typeof t||"boolean"===typeof t?((n={})[e]=t,r=n):r=t;return r}(r,n));if(i){if(i.component){var c=i.component;return a.createElement(c,R({},l))}if(i.render)return i.render(l,e)}return a.createElement(e,R({},l))}}var V=Object(z.b)((function(e){return J(e)}));function K(e,t){var n={},r=e,i=function(e){if(t.hasOwnProperty(e)){var i=function(n){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];if(i.length>0)throw new Error("Any module using getSlots must use withSlots. Please see withSlots javadoc for more info.");return Q(t[e],n,r[e],r.slots&&r.slots[e],r._defaultStyles&&r._defaultStyles[e],r.theme)};i.isSlot=!0,n[e]=i}};for(var a in t)i(a);return n}function Q(e,t,n,r,i,a){return void 0!==e.create?e.create(t,n,r,i):V(e)(t,n,r,i,a)}var X=n(117),Y=n(79);function Z(e,t){void 0===t&&(t={});var n=t.factoryOptions,r=(void 0===n?{}:n).defaultProp,i=function(n){var r=function(e,t,n){var r=["theme","styles","tokens"];return Y.a.getSettings(n||r,e,t.customizations)}(t.displayName,a.useContext(X.a),t.fields),i=t.state;i&&(n=R(R({},n),i(n)));var o=n.theme||r.theme,l=$(n,o,t.tokens,r.tokens,n.tokens),c=function(e,t,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i];return s.k.apply(void 0,r.map((function(r){return"function"===typeof r?r(e,t,n):r})))}(n,o,l,t.styles,r.styles,n.styles),u=R(R({},n),{styles:c,tokens:l,_defaultStyles:c,theme:o});return e(u)};return i.displayName=t.displayName||e.name,r&&(i.create=J(i,{defaultProp:r})),U(i,t.statics),i}function $(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];for(var i={},a=0,o=n;a<o.length;a++){var s=o[a];s&&(s="function"===typeof s?s(e,t):s,Array.isArray(s)&&(s=$.apply(void 0,F([e,t],s))),U(i,s))}return i}var ee=n(428),te=function(e,t){return t.spacing.hasOwnProperty(e)?t.spacing[e]:e},ne=function(e){var t=parseFloat(e),n=isNaN(t)?0:t,r=isNaN(t)?"":t.toString();return{value:n,unit:e.substring(r.toString().length)||"px"}},re=function(e,t){if(void 0===e||"number"===typeof e||""===e)return e;var n=e.split(" ");return n.length<2?te(e,t):n.reduce((function(e,n){return te(e,t)+" "+te(n,t)}))},ie={start:"flex-start",end:"flex-end"},ae={root:"ms-Stack",inner:"ms-Stack-inner"},oe={root:"ms-StackItem"},se={start:"flex-start",end:"flex-end"},le=Z((function(e){var t=e.children,n=Object(p.d)(e,p.e);return a.Children.count(t)<1?null:q(K(e,{root:"div"}).root,Object(l.a)({},n),t)}),{displayName:"StackItem",styles:function(e,t,n){var r=e.grow,i=e.shrink,a=e.disableShrink,o=e.align,l=e.verticalFill,c=e.order,u=e.className,d=Object(s.p)(oe,t);return{root:[t.fonts.medium,d.root,{margin:n.margin,padding:n.padding,height:l?"100%":"auto",width:"auto"},r&&{flexGrow:!0===r?1:r},(a||!r&&!i)&&{flexShrink:0},i&&!a&&{flexShrink:1},o&&{alignSelf:se[o]||o},c&&{order:c},u]}}});var ce=Z((function(e){var t=e.as,n=void 0===t?"div":t,r=e.disableShrink,i=e.wrap,o=Object(l.d)(e,["as","disableShrink","wrap"]);Object(ee.a)("Stack",e,{gap:"tokens.childrenGap",maxHeight:"tokens.maxHeight",maxWidth:"tokens.maxWidth",padding:"tokens.padding"});var s=a.Children.map(e.children,(function(e,t){if(!e)return null;if((i=e)&&"object"===typeof i&&i.type&&i.type.displayName===le.displayName){var n={shrink:!r};return a.cloneElement(e,Object(l.a)(Object(l.a)({},n),e.props))}var i;return e})),c=Object(p.d)(o,p.e),u=K(e,{root:n,inner:"div"});return q(u.root,Object(l.a)({},c),i?q(u.inner,null,s):s)}),{displayName:"Stack",styles:function(e,t,n){var r,i,a,o,c,u,d,g=e.verticalFill,p=e.horizontal,m=e.reversed,f=e.grow,b=e.wrap,h=e.horizontalAlign,v=e.verticalAlign,y=e.disableShrink,x=e.className,E=Object(s.p)(ae,t),O=n&&n.childrenGap?n.childrenGap:e.gap,k=n&&n.maxHeight?n.maxHeight:e.maxHeight,j=n&&n.maxWidth?n.maxWidth:e.maxWidth,S=n&&n.padding?n.padding:e.padding,w=function(e,t){if(void 0===e||""===e)return{rowGap:{value:0,unit:"px"},columnGap:{value:0,unit:"px"}};if("number"===typeof e)return{rowGap:{value:e,unit:"px"},columnGap:{value:e,unit:"px"}};var n=e.split(" ");if(n.length>2)return{rowGap:{value:0,unit:"px"},columnGap:{value:0,unit:"px"}};if(2===n.length)return{rowGap:ne(te(n[0],t)),columnGap:ne(te(n[1],t))};var r=ne(te(e,t));return{rowGap:r,columnGap:r}}(O,t),C=w.rowGap,D=w.columnGap,B=""+-.5*D.value+D.unit,N=""+-.5*C.value+C.unit,L={textOverflow:"ellipsis"},_={"> *:not(.ms-StackItem)":{flexShrink:y?0:1}};return b?{root:[E.root,{flexWrap:"wrap",maxWidth:j,maxHeight:k,width:"auto",overflow:"visible",height:"100%"},h&&(r={},r[p?"justifyContent":"alignItems"]=ie[h]||h,r),v&&(i={},i[p?"alignItems":"justifyContent"]=ie[v]||v,i),x,{display:"flex"},p&&{height:g?"100%":"auto"}],inner:[E.inner,{display:"flex",flexWrap:"wrap",marginLeft:B,marginRight:B,marginTop:N,marginBottom:N,overflow:"visible",boxSizing:"border-box",padding:re(S,t),width:0===D.value?"100%":"calc(100% + "+D.value+D.unit+")",maxWidth:"100vw",selectors:Object(l.a)({"> *":Object(l.a)({margin:""+.5*C.value+C.unit+" "+.5*D.value+D.unit},L)},_)},h&&(a={},a[p?"justifyContent":"alignItems"]=ie[h]||h,a),v&&(o={},o[p?"alignItems":"justifyContent"]=ie[v]||v,o),p&&{flexDirection:m?"row-reverse":"row",height:0===C.value?"100%":"calc(100% + "+C.value+C.unit+")",selectors:{"> *":{maxWidth:0===D.value?"100%":"calc(100% - "+D.value+D.unit+")"}}},!p&&{flexDirection:m?"column-reverse":"column",height:"calc(100% + "+C.value+C.unit+")",selectors:{"> *":{maxHeight:0===C.value?"100%":"calc(100% - "+C.value+C.unit+")"}}}]}:{root:[E.root,{display:"flex",flexDirection:p?m?"row-reverse":"row":m?"column-reverse":"column",flexWrap:"nowrap",width:"auto",height:g?"100%":"auto",maxWidth:j,maxHeight:k,padding:re(S,t),boxSizing:"border-box",selectors:Object(l.a)((c={"> *":L},c[m?"> *:not(:last-child)":"> *:not(:first-child)"]=[p&&{marginLeft:""+D.value+D.unit},!p&&{marginTop:""+C.value+C.unit}],c),_)},f&&{flexGrow:!0===f?1:f},h&&(u={},u[p?"justifyContent":"alignItems"]=ie[h]||h,u),v&&(d={},d[p?"alignItems":"justifyContent"]=ie[v]||v,d),x]}},statics:{Item:le}}),ue=n(419),de=n(747),ge=n(746),pe=Object(z.b)((function(e,t){return Object(s.k)({root:[Object(s.o)(e,{inset:1,highContrastStyle:{outlineOffset:"-4px",outline:"1px solid Window"},borderColor:"transparent"}),{height:24}]},t)})),me=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(l.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,n=e.theme;return a.createElement(ue.a,Object(l.a)({},this.props,{styles:pe(n,t),onRenderDescription:de.a}))},t=Object(l.b)([Object(ge.a)("MessageBarButton",["theme","styles"],!0)],t)}(a.Component),fe=n(314),be=n(1143),he=n(58),ve={stackSize:3},ye="FluidMessageBannerStack",xe=a.memo((function(e){var t=e.bannerProviders,n=e.stackConfiguration,r=e.locale,i=a.useRef(new Map),o=a.useState([]),l=Object(P.a)(o,2),c=l[0],u=l[1],d=Object(be.a)(he.a,r),g=Object.assign(Object.assign({},ve),n),p=g.stackSize,m=g.stackLayout,f=g.stackStyles,b=g.bannerStyles,h=Object(s.l)(e,f);a.useEffect((function(){return void 0!==d&&t.map((function(e){e.on("CreateBanner",v),e.on("RemoveBanner",y),e.emit("BannerListenerAttached")})),function(){t.map((function(e){e.removeListener("CreateBanner",v),e.removeListener("RemoveBanner",y)}))}}),[t,d]);var v=a.useCallback((function(e){var t=e.bannerType,n=e.bannerId,r=i.current.get(t);r||(r=new Map,i.current.set(t,r)),r.set(n,e),u(x())}),[i.current,d]),y=a.useCallback((function(e){var t,n=Object(A.a)(i.current.values());try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.has(e))return r.delete(e),void u(x())}}catch(a){n.e(a)}finally{n.f()}}),[i.current,d]),x=a.useCallback((function(){var e=i.current,t=E(fe.a.error,e),n=E(fe.a.blocked,e),r=E(fe.a.severeWarning,e),a=E(fe.a.warning,e),o=E(fe.a.info,e),s=E(fe.a.success,e);switch(p){case 1:var l=t||n||r||a||o||s;return Object(W.a)(l?[l]:[]);case 6:return[].concat(Object(W.a)(t?[t]:[]),Object(W.a)(n?[n]:[]),Object(W.a)(r?[r]:[]),Object(W.a)(a?[a]:[]),Object(W.a)(o?[o]:[]),Object(W.a)(s?[s]:[]));case 3:default:var c=t||n,u=r||a,d=o||s;return[].concat(Object(W.a)(c?[c]:[]),Object(W.a)(u?[u]:[]),Object(W.a)(d?[d]:[]))}}),[i.current,d]),E=a.useCallback((function(e,t){var n=t.get(e);if(!n||(null===n||void 0===n?void 0:n.size)<1)return null;var r=ke(e);return O(Object.assign(Object.assign({},r),Object(W.a)(n.values()).reverse()[0]))}),[d]),O=a.useCallback((function(e){var t=e.bannerId,n=e.bannerType,r=e.bannerStrings,i=e.actions,o=e.icon,s=e.isMultiline,l=e.isAssertive,c=e.isDismissible,u=e.bannerLink,g=c?function(){y(t)}:void 0,p=null===d||void 0===d?void 0:d.close;return a.createElement(ce.Item,{key:t},a.createElement(_,{messageBarType:Oe(n),bannerStrings:r,actions:null===i||void 0===i?void 0:i.map((function(e){return Ee(e)})),icon:o,isMultiline:s,isAssertive:l,onDismiss:g,dismissButtonAriaLabel:p,styles:b,hyperlink:u}))}),[d]);return a.createElement(ce,Object.assign({},m,{styles:h,"data-testid":ye}),c)})),Ee=function(e){var t=e.actionCallback,n=e.label;return a.createElement(me,{onClick:t,styles:{root:{width:"auto"}},ariaLabel:n,key:n},n)},Oe=function(e){switch(e){case fe.a.info:return r.info;case fe.a.error:return r.error;case fe.a.blocked:return r.blocked;case fe.a.severeWarning:return r.severeWarning;case fe.a.success:return r.success;case fe.a.warning:return r.warning}},ke=function(e){var t=!1;switch(e){case fe.a.error:case fe.a.blocked:return{isAssertive:!0,isDismissible:!1,isMultiline:t};case fe.a.severeWarning:case fe.a.warning:return{isAssertive:!1,isDismissible:!0,isMultiline:t};case fe.a.info:case fe.a.success:return{isAssertive:!1,isDismissible:!0,isMultiline:t}}},je=n(456),Se=n(761),we=n(323),Ce=n(762),De=n(5),Be=n(6),Ne=n(8),Le=n(9),_e=function(e){Object(Ne.a)(r,e);var t=Object(Le.a)(r);function r(){var e;return Object(De.a)(this,r),(e=t.apply(this,arguments)).state={},e}return Object(Be.a)(r,[{key:"render",value:function(){return this.state.errorDialog?this.state.errorDialog:this.props.children}},{key:"componentDidCatch",value:function(e,t){var r=this;Promise.resolve().then(n.bind(null,761)).then((function(n){Object(he.a)(r.props.locale).then((function(i){return r.setState({errorDialog:a.createElement(n.ErrorDialog,{dialogStrings:{dialogTitle:i.errorDialogTitle,dialogMessage:i.genericErrorMessage},appColors:r.props.appColors,actions:[{type:"Default",label:i.close}],debugInfo:{debugErrorCode:i.errorBoundary,debugError:e,debugReactErrorBoundaryInfo:t}})})}))}))}}]),r}(a.PureComponent)},761:function(e,t,n){"use strict";n.r(t),n.d(t,"ErrorDialog",(function(){return r.ErrorDialog})),n.d(t,"ContainerErrorDialog",(function(){return i.ContainerErrorDialog})),n.d(t,"getDialogMessagingForError",(function(){return a.a})),n.d(t,"getContainerErrorDialog",(function(){return c})),n.d(t,"getErrorDialog",(function(){return d}));var r=n(1254),i=n(1275),a=n(760),o=n(0),s=n(174),l=o.lazy((function(){return Promise.resolve().then(n.bind(null,1275)).then((function(e){return{default:e.ContainerErrorDialog}}))}));function c(e){return o.createElement(o.Suspense,{fallback:o.createElement(s.a,null)},o.createElement(l,Object.assign({},e)))}var u=o.lazy((function(){return Promise.resolve().then(n.bind(null,1254)).then((function(e){return{default:e.ErrorDialog}}))}));function d(e){return o.createElement(o.Suspense,{fallback:o.createElement(s.a,null)},o.createElement(u,Object.assign({},e)))}}}]);
//# sourceMappingURL=182.c403112e.chunk.js.map
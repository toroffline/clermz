(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var B,p,Z,N,q,J,W,E={},Q=[],oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,F=Array.isArray;function P(t,e){for(var n in e)t[n]=e[n];return t}function X(t){var e=t.parentNode;e&&e.removeChild(t)}function re(t,e,n){var l,r,o,s={};for(o in e)o=="key"?l=e[o]:o=="ref"?r=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?B.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return M(t,s,l,r,null)}function M(t,e,n,l,r){var o={type:t,props:e,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++Z};return r==null&&p.vnode!=null&&p.vnode(o),o}function A(t){return t.children}function U(t,e){this.props=t,this.context=e}function T(t,e){if(e==null)return t.__?T(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__d||n.__e;return typeof t.type=="function"?T(t):null}function Y(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Y(t)}}function V(t){(!t.__d&&(t.__d=!0)&&N.push(t)&&!O.__r++||q!==p.debounceRendering)&&((q=p.debounceRendering)||J)(O)}function O(){var t,e,n,l,r,o,s,f,c;for(N.sort(W);t=N.shift();)t.__d&&(e=N.length,l=void 0,r=void 0,o=void 0,f=(s=(n=t).__v).__e,(c=n.__P)&&(l=[],r=[],(o=P({},s)).__v=s.__v+1,j(c,s,o,n.__n,c.ownerSVGElement!==void 0,s.__h!=null?[f]:null,l,f??T(s),s.__h,r),_e(l,s,r),s.__e!=f&&Y(s)),N.length>e&&N.sort(W));O.__r=0}function ee(t,e,n,l,r,o,s,f,c,b,h){var _,g,u,i,a,C,d,y,x,k=0,m=l&&l.__k||Q,L=m.length,S=L,D=e.length;for(n.__k=[],_=0;_<D;_++)(i=n.__k[_]=(i=e[_])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?M(null,i,null,null,i):F(i)?M(A,{children:i},null,null,null):i.__b>0?M(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=n,i.__b=n.__b+1,(y=le(i,m,d=_+k,S))===-1?u=E:(u=m[y]||E,m[y]=void 0,S--),j(t,i,u,r,o,s,f,c,b,h),a=i.__e,(g=i.ref)&&u.ref!=g&&(u.ref&&R(u.ref,null,i),h.push(g,i.__c||a,i)),a!=null&&(C==null&&(C=a),(x=u===E||u.__v===null)?y==-1&&k--:y!==d&&(y===d+1?k++:y>d?S>D-d?k+=y-d:k--:k=y<d&&y==d-1?y-d:0),d=_+k,typeof i.type!="function"||y===d&&u.__k!==i.__k?typeof i.type=="function"||y===d&&!x?i.__d!==void 0?(c=i.__d,i.__d=void 0):c=a.nextSibling:c=ne(t,a,c):c=te(i,c,t),typeof n.type=="function"&&(n.__d=c))):(u=m[_])&&u.key==null&&u.__e&&(u.__e==c&&(u.__=l,c=T(u)),$(u,u,!1),m[_]=null);for(n.__e=C,_=L;_--;)m[_]!=null&&(typeof n.type=="function"&&m[_].__e!=null&&m[_].__e==n.__d&&(n.__d=m[_].__e.nextSibling),$(m[_],m[_]))}function te(t,e,n){for(var l,r=t.__k,o=0;r&&o<r.length;o++)(l=r[o])&&(l.__=t,e=typeof l.type=="function"?te(l,e,n):ne(n,l.__e,e));return e}function ne(t,e,n){return n==null||n.parentNode!==t?t.insertBefore(e,null):e==n&&e.parentNode!=null||t.insertBefore(e,n),e.nextSibling}function le(t,e,n,l){var r=t.key,o=t.type,s=n-1,f=n+1,c=e[n];if(c===null||c&&r==c.key&&o===c.type)return n;if(l>(c!=null?1:0))for(;s>=0||f<e.length;){if(s>=0){if((c=e[s])&&r==c.key&&o===c.type)return s;s--}if(f<e.length){if((c=e[f])&&r==c.key&&o===c.type)return f;f++}}return-1}function ie(t,e,n,l,r){var o;for(o in n)o==="children"||o==="key"||o in e||H(t,o,null,n[o],l);for(o in e)r&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||H(t,o,e[o],n[o],l)}function z(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||oe.test(e)?n:n+"px"}function H(t,e,n,l,r){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof l=="string"&&(t.style.cssText=l=""),l)for(e in l)n&&e in n||z(t.style,e,"");if(n)for(e in n)l&&n[e]===l[e]||z(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?l?n.u=l.u:(n.u=Date.now(),t.addEventListener(e,o?K:G,o)):t.removeEventListener(e,o?K:G,o);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function G(t){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(p.event?p.event(t):t)}function K(t){return this.l[t.type+!0](p.event?p.event(t):t)}function j(t,e,n,l,r,o,s,f,c,b){var h,_,g,u,i,a,C,d,y,x,k,m,L,S,D,w=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,f=e.__e=n.__e,e.__h=null,o=[f]),(h=p.__b)&&h(e);e:if(typeof w=="function")try{if(d=e.props,y=(h=w.contextType)&&l[h.__c],x=h?y?y.props.value:h.__:l,n.__c?C=(_=e.__c=n.__c).__=_.__E:("prototype"in w&&w.prototype.render?e.__c=_=new w(d,x):(e.__c=_=new U(d,x),_.constructor=w,_.render=ce),y&&y.sub(_),_.props=d,_.state||(_.state={}),_.context=x,_.__n=l,g=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),w.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=P({},_.__s)),P(_.__s,w.getDerivedStateFromProps(d,_.__s))),u=_.props,i=_.state,_.__v=e,g)w.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(w.getDerivedStateFromProps==null&&d!==u&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(d,x),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(d,_.__s,x)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(_.props=d,_.state=_.__s,_.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(I){I&&(I.__=e)}),k=0;k<_._sb.length;k++)_.__h.push(_._sb[k]);_._sb=[],_.__h.length&&s.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(d,_.__s,x),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(u,i,a)})}if(_.context=x,_.props=d,_.__P=t,_.__e=!1,m=p.__r,L=0,"prototype"in w&&w.prototype.render){for(_.state=_.__s,_.__d=!1,m&&m(e),h=_.render(_.props,_.state,_.context),S=0;S<_._sb.length;S++)_.__h.push(_._sb[S]);_._sb=[]}else do _.__d=!1,m&&m(e),h=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++L<25);_.state=_.__s,_.getChildContext!=null&&(l=P(P({},l),_.getChildContext())),g||_.getSnapshotBeforeUpdate==null||(a=_.getSnapshotBeforeUpdate(u,i)),ee(t,F(D=h!=null&&h.type===A&&h.key==null?h.props.children:h)?D:[D],e,n,l,r,o,s,f,c,b),_.base=e.__e,e.__h=null,_.__h.length&&s.push(_),C&&(_.__E=_.__=null)}catch(I){e.__v=null,(c||o!=null)&&(e.__e=f,e.__h=!!c,o[o.indexOf(f)]=null),p.__e(I,e,n)}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=se(n.__e,e,n,l,r,o,s,c,b);(h=p.diffed)&&h(e)}function _e(t,e,n){for(var l=0;l<n.length;l++)R(n[l],n[++l],n[++l]);p.__c&&p.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(o){o.call(r)})}catch(o){p.__e(o,r.__v)}})}function se(t,e,n,l,r,o,s,f,c){var b,h,_,g=n.props,u=e.props,i=e.type,a=0;if(i==="svg"&&(r=!0),o!=null){for(;a<o.length;a++)if((b=o[a])&&"setAttribute"in b==!!i&&(i?b.localName===i:b.nodeType===3)){t=b,o[a]=null;break}}if(t==null){if(i===null)return document.createTextNode(u);t=r?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,u.is&&u),o=null,f=!1}if(i===null)g===u||f&&t.data===u||(t.data=u);else{if(o=o&&B.call(t.childNodes),h=(g=n.props||E).dangerouslySetInnerHTML,_=u.dangerouslySetInnerHTML,!f){if(o!=null)for(g={},a=0;a<t.attributes.length;a++)g[t.attributes[a].name]=t.attributes[a].value;(_||h)&&(_&&(h&&_.__html==h.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(ie(t,u,g,r,f),_)e.__k=[];else if(ee(t,F(a=e.props.children)?a:[a],e,n,l,r&&i!=="foreignObject",o,s,o?o[0]:n.__k&&T(n,0),f,c),o!=null)for(a=o.length;a--;)o[a]!=null&&X(o[a]);f||("value"in u&&(a=u.value)!==void 0&&(a!==t.value||i==="progress"&&!a||i==="option"&&a!==g.value)&&H(t,"value",a,g.value,!1),"checked"in u&&(a=u.checked)!==void 0&&a!==t.checked&&H(t,"checked",a,g.checked,!1))}return t}function R(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(l){p.__e(l,n)}}function $(t,e,n){var l,r;if(p.unmount&&p.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||R(l,null,e)),(l=t.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(o){p.__e(o,e)}l.base=l.__P=null,t.__c=void 0}if(l=t.__k)for(r=0;r<l.length;r++)l[r]&&$(l[r],e,n||typeof t.type!="function");n||t.__e==null||X(t.__e),t.__=t.__e=t.__d=void 0}function ce(t,e,n){return this.constructor(t,n)}function fe(t,e,n){var l,r,o,s;p.__&&p.__(t,e),r=(l=typeof n=="function")?null:n&&n.__k||e.__k,o=[],s=[],j(e,t=(!l&&n||e).__k=re(A,null,[t]),r||E,E,e.ownerSVGElement!==void 0,!l&&n?[n]:r?null:e.firstChild?B.call(e.childNodes):null,o,!l&&n?n:r?r.__e:e.firstChild,l,s),_e(o,t,s)}B=Q.slice,p={__e:function(t,e,n,l){for(var r,o,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(t)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,l||{}),s=r.__d),s)return r.__E=r}catch(f){t=f}throw t}},Z=0,U.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof t=="function"&&(t=t(P({},n),this.props)),t&&P(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),V(this))},U.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),V(this))},U.prototype.render=A,N=[],J=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W=function(t,e){return t.__v.__b-e.__v.__b},O.__r=0;var ue=0;function v(t,e,n,l,r,o){var s,f,c={};for(f in e)f=="ref"?s=e[f]:c[f]=e[f];var b={type:t,props:c,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ue,__source:r,__self:o};if(typeof t=="function"&&(s=t.defaultProps))for(f in s)c[f]===void 0&&(c[f]=s[f]);return p.vnode&&p.vnode(b),b}function ae(){return v(A,{children:[v("aside",{className:"main-sidebar",children:[v("marquee",{children:"🤸🏻‍ ClermZ 🫛"}),v("nav",{className:"main-nav",children:v("ul",{children:[v("li",{href:"",children:v("a",{href:"./",children:"About"})}),v("li",{href:"",children:v("a",{href:"",children:"Blog"})}),v("li",{href:"",children:v("a",{href:"",children:"Contact"})})]})})]}),v("div",{className:"main-content",children:[v("section",{className:"introduce",children:[v("div",{className:"lead-introduce",children:[v("h1",{children:"สวัสดีคับ, I'm Nui"}),v("span",{className:"full-name",children:"(Narkkarux Tripiyaratana)"})]}),v("h2",{className:"job-title",children:"Software Engineer"}),v("p",{children:"A bad boy who in love with Calisthenics, Vegie food, som cooking and some coding."})]}),v("section",{className:"blog-list",children:[v("h2",{children:"Blog"}),v("h3",{children:"incoming soon"}),v("p",{children:"I want to write about my 2024🚀"})]})]})]})}fe(v(ae,{}),document.getElementById("app"));
var BUN_RUNTIME=(()=>{var He=Object.create;var ee=Object.defineProperty;var Ye=Object.getOwnPropertyDescriptor;var Qe=Object.getOwnPropertyNames;var Ze=Object.getPrototypeOf,Xe=Object.prototype.hasOwnProperty;var be=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,o)=>(typeof require<"u"?require:r)[o]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var er=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),rr=(e,r)=>{for(var o in r)ee(e,o,{get:r[o],enumerable:!0})},ye=(e,r,o,d)=>{if(r&&typeof r=="object"||typeof r=="function")for(let c of Qe(r))!Xe.call(e,c)&&c!==o&&ee(e,c,{get:()=>r[c],enumerable:!(d=Ye(r,c))||d.enumerable});return e};var ge=(e,r,o)=>(o=e!=null?He(Ze(e)):{},ye(r||!e||!e.__esModule?ee(o,"default",{value:e,enumerable:!0}):o,e)),tr=e=>ye(ee({},"__esModule",{value:!0}),e);var Ge=er((qr,we)=>{var pe=function(e){"use strict";var r=Object.prototype,o=r.hasOwnProperty,d,c=typeof Symbol=="function"?Symbol:{},L=c.iterator||"@@iterator",g=c.asyncIterator||"@@asyncIterator",x=c.toStringTag||"@@toStringTag";function m(l,i,f){return Object.defineProperty(l,i,{value:f,enumerable:!0,configurable:!0,writable:!0}),l[i]}try{m({},"")}catch{m=function(i,f,w){return i[f]=w}}function N(l,i,f,w){var p=i&&i.prototype instanceof k?i:k,P=Object.create(p.prototype),O=new $(w||[]);return P._invoke=B(l,f,O),P}e.wrap=N;function W(l,i,f){try{return{type:"normal",arg:l.call(i,f)}}catch(w){return{type:"throw",arg:w}}}var A="suspendedStart",z="suspendedYield",y="executing",H="completed",C={};function k(){}function t(){}function a(){}var n={};m(n,L,function(){return this});var h=Object.getPrototypeOf,s=h&&h(h(j([])));s&&s!==r&&o.call(s,L)&&(n=s);var u=a.prototype=k.prototype=Object.create(n);t.prototype=a,m(u,"constructor",a),m(a,"constructor",t),t.displayName=m(a,x,"GeneratorFunction");function v(l){["next","throw","return"].forEach(function(i){m(l,i,function(f){return this._invoke(i,f)})})}e.isGeneratorFunction=function(l){var i=typeof l=="function"&&l.constructor;return i?i===t||(i.displayName||i.name)==="GeneratorFunction":!1},e.mark=function(l){return Object.setPrototypeOf?Object.setPrototypeOf(l,a):(l.__proto__=a,m(l,x,"GeneratorFunction")),l.prototype=Object.create(u),l},e.awrap=function(l){return{__await:l}};function _(l,i){function f(P,O,q,F){var T=W(l[P],l,O);if(T.type==="throw")F(T.arg);else{var ae=T.arg,Z=ae.value;return Z&&typeof Z=="object"&&o.call(Z,"__await")?i.resolve(Z.__await).then(function(G){f("next",G,q,F)},function(G){f("throw",G,q,F)}):i.resolve(Z).then(function(G){ae.value=G,q(ae)},function(G){return f("throw",G,q,F)})}}var w;function p(P,O){function q(){return new i(function(F,T){f(P,O,F,T)})}return w=w?w.then(q,q):q()}this._invoke=p}v(_.prototype),m(_.prototype,g,function(){return this}),e.AsyncIterator=_,e.async=function(l,i,f,w,p){p===void 0&&(p=Promise);var P=new _(N(l,i,f,w),p);return e.isGeneratorFunction(i)?P:P.next().then(function(O){return O.done?O.value:P.next()})};function B(l,i,f){var w=A;return function(P,O){if(w===y)throw new Error("Generator is already running");if(w===H){if(P==="throw")throw O;return Y()}for(f.method=P,f.arg=O;;){var q=f.delegate;if(q){var F=U(q,f);if(F){if(F===C)continue;return F}}if(f.method==="next")f.sent=f._sent=f.arg;else if(f.method==="throw"){if(w===A)throw w=H,f.arg;f.dispatchException(f.arg)}else f.method==="return"&&f.abrupt("return",f.arg);w=y;var T=W(l,i,f);if(T.type==="normal"){if(w=f.done?H:z,T.arg===C)continue;return{value:T.arg,done:f.done}}else T.type==="throw"&&(w=H,f.method="throw",f.arg=T.arg)}}}function U(l,i){var f=l.iterator[i.method];if(f===d){if(i.delegate=null,i.method==="throw"){if(l.iterator.return&&(i.method="return",i.arg=d,U(l,i),i.method==="throw"))return C;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return C}var w=W(f,l.iterator,i.arg);if(w.type==="throw")return i.method="throw",i.arg=w.arg,i.delegate=null,C;var p=w.arg;if(!p)return i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,C;if(p.done)i[l.resultName]=p.value,i.next=l.nextLoc,i.method!=="return"&&(i.method="next",i.arg=d);else return p;return i.delegate=null,C}v(u),m(u,x,"Generator"),m(u,L,function(){return this}),m(u,"toString",function(){return"[object Generator]"});function S(l){var i={tryLoc:l[0]};1 in l&&(i.catchLoc=l[1]),2 in l&&(i.finallyLoc=l[2],i.afterLoc=l[3]),this.tryEntries.push(i)}function R(l){var i=l.completion||{};i.type="normal",delete i.arg,l.completion=i}function $(l){this.tryEntries=[{tryLoc:"root"}],l.forEach(S,this),this.reset(!0)}e.keys=function(l){var i=[];for(var f in l)i.push(f);return i.reverse(),function w(){for(;i.length;){var p=i.pop();if(p in l)return w.value=p,w.done=!1,w}return w.done=!0,w}};function j(l){if(l){var i=l[L];if(i)return i.call(l);if(typeof l.next=="function")return l;if(!isNaN(l.length)){var f=-1,w=function p(){for(;++f<l.length;)if(o.call(l,f))return p.value=l[f],p.done=!1,p;return p.value=d,p.done=!0,p};return w.next=w}}return{next:Y}}e.values=j;function Y(){return{value:d,done:!0}}return $.prototype={constructor:$,reset:function(l){if(this.prev=0,this.next=0,this.sent=this._sent=d,this.done=!1,this.delegate=null,this.method="next",this.arg=d,this.tryEntries.forEach(R),!l)for(var i in this)i.charAt(0)==="t"&&o.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=d)},stop:function(){this.done=!0;var l=this.tryEntries[0],i=l.completion;if(i.type==="throw")throw i.arg;return this.rval},dispatchException:function(l){if(this.done)throw l;var i=this;function f(F,T){return P.type="throw",P.arg=l,i.next=F,T&&(i.method="next",i.arg=d),!!T}for(var w=this.tryEntries.length-1;w>=0;--w){var p=this.tryEntries[w],P=p.completion;if(p.tryLoc==="root")return f("end");if(p.tryLoc<=this.prev){var O=o.call(p,"catchLoc"),q=o.call(p,"finallyLoc");if(O&&q){if(this.prev<p.catchLoc)return f(p.catchLoc,!0);if(this.prev<p.finallyLoc)return f(p.finallyLoc)}else if(O){if(this.prev<p.catchLoc)return f(p.catchLoc,!0)}else if(q){if(this.prev<p.finallyLoc)return f(p.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(l,i){for(var f=this.tryEntries.length-1;f>=0;--f){var w=this.tryEntries[f];if(w.tryLoc<=this.prev&&o.call(w,"finallyLoc")&&this.prev<w.finallyLoc){var p=w;break}}p&&(l==="break"||l==="continue")&&p.tryLoc<=i&&i<=p.finallyLoc&&(p=null);var P=p?p.completion:{};return P.type=l,P.arg=i,p?(this.method="next",this.next=p.finallyLoc,C):this.complete(P)},complete:function(l,i){if(l.type==="throw")throw l.arg;return l.type==="break"||l.type==="continue"?this.next=l.arg:l.type==="return"?(this.rval=this.arg=l.arg,this.method="return",this.next="end"):l.type==="normal"&&i&&(this.next=i),C},finish:function(l){for(var i=this.tryEntries.length-1;i>=0;--i){var f=this.tryEntries[i];if(f.finallyLoc===l)return this.complete(f.completion,f.afterLoc),R(f),C}},catch:function(l){for(var i=this.tryEntries.length-1;i>=0;--i){var f=this.tryEntries[i];if(f.tryLoc===l){var w=f.completion;if(w.type==="throw"){var p=w.arg;R(f)}return p}}throw new Error("illegal catch attempt")},delegateYield:function(l,i,f){return this.delegate={iterator:j(l),resultName:i,nextLoc:f},this.method==="next"&&(this.arg=d),C}},e}(typeof we=="object"?we.exports:{});try{regeneratorRuntime=pe}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=pe:Function("r","regeneratorRuntime = r")(pe)}});var Er={};rr(Er,{$$lzy:()=>hr,$$m:()=>wr,BuildError:()=>Te,ImportKind:()=>Ne,ResolveError:()=>Ce,__FastRefreshModule:()=>Le,__HMRClient:()=>Oe,__HMRModule:()=>Pe,__cJS2eSM:()=>pr,__commonJS:()=>ve,__decorateClass:()=>Sr,__decorateParam:()=>Br,__export:()=>gr,__exportDefault:()=>_r,__exportValue:()=>mr,__injectFastRefresh:()=>qe,__internalIsCommonJSNamespace:()=>De,__markAsModule:()=>$e,__merge:()=>xr,__name:()=>yr,__reExport:()=>Ke,__require:()=>Je,__toModule:()=>vr,regeneratorRuntime:()=>ze.default});var ir=Object.defineProperty,nr=(e,r,o)=>r in e?ir(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,xe=(e,r,o)=>(nr(e,typeof r!="symbol"?r+"":r,o),o),V=new Int32Array(1),re=new Float32Array(V.buffer),me=new Int16Array(V.buffer),_e=new Uint16Array(V.buffer),le=new Uint32Array(V.buffer),E=new Uint8Array(V.buffer),ke=new Int8Array(V.buffer),X,oe,ar=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,te=class{data;index;length;constructor(e,r=!1){if(e&&!(e instanceof Uint8Array))throw new Error("Must initialize a ByteBuffer with a Uint8Array");this.data=e||new Uint8Array(256),this.index=0,this.length=e?e.length:0}toUint8Array(){return this.data.subarray(0,this.length)}readByte(){if(this.index+1>this.data.length)throw new Error("Index out of bounds");return this.data[this.index++]}readAlphanumeric(){X||(X=new TextDecoder("utf-8"));let e=this.index,r=256,o=this.length-1;for(;this.index<o&&r>0;)r=this.data[this.index++];return String.fromCharCode(...this.data.subarray(e,this.index-1))}writeAlphanumeric(e){if(this.length+1>this.data.length)throw new Error("Index out of bounds");let r=this.length;this._growBy(e.length);let o=this.data,d=0,c=0;for(;d<e.length;)if(c=o[r++]=e.charCodeAt(d++),c>127)throw new Error(`Non-ascii character at char ${d-1} :${e}`);this.writeByte(0)}readFloat32(){if(this.index+4>this.data.length)throw new Error("Index out of bounds");return E[0]=this.data[this.index++],E[1]=this.data[this.index++],E[2]=this.data[this.index++],E[3]=this.data[this.index++],re[0]}readByteArray(){let e=this.readVarUint(),r=this.index,o=r+e;if(o>this.data.length)throw new Error("Read array out of bounds");this.index=o;let d=new Uint8Array(new ar(e));return d.set(this.data.subarray(r,o)),d}readUint32ByteArray(){let e=this.readByteArray();return new Uint32Array(e.buffer,0,e.length/Uint32Array.BYTES_PER_ELEMENT)}readInt8ByteArray(){let e=this.readByteArray();return new Int8Array(e.buffer,0,e.length/Int8Array.BYTES_PER_ELEMENT)}readInt16ByteArray(){let e=this.readByteArray();return new Int16Array(e.buffer,0,e.length/Int16Array.BYTES_PER_ELEMENT)}readInt32ByteArray(){let e=this.readByteArray();return new Int32Array(e.buffer,0,e.length/Int32Array.BYTES_PER_ELEMENT)}readFloat32ByteArray(){let e=this.readByteArray();return new Float32Array(e.buffer,0,e.length/Float32Array.BYTES_PER_ELEMENT)}readVarFloat(){let e=this.index,r=this.data,o=r.length;if(e+1>o)throw new Error("Index out of bounds");let d=r[e];if(d===0)return this.index=e+1,0;if(e+4>o)throw new Error("Index out of bounds");let c=d|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24;return this.index=e+4,c=c<<23|c>>>9,V[0]=c,re[0]}readUint32(){if(this.index+4>this.data.length)throw new Error("Index out of bounds");return E[0]=this.data[this.index++],E[1]=this.data[this.index++],E[2]=this.data[this.index++],E[3]=this.data[this.index++],le[0]}readUint16(){if(this.index+2>this.data.length)throw new Error("Index out of bounds");return E[0]=this.data[this.index++],E[1]=this.data[this.index++],_e[0]}readVarUint(){return this.readUint32()}readInt32(){if(this.index+4>this.data.length)throw new Error("Index out of bounds");return E[0]=this.data[this.index++],E[1]=this.data[this.index++],E[2]=this.data[this.index++],E[3]=this.data[this.index++],V[0]}readInt16(){if(this.index+2>this.data.length)throw new Error("Index out of bounds");return E[0]=this.data[this.index++],E[1]=this.data[this.index++],me[0]}readInt8(){if(this.index+1>this.data.length)throw new Error("Index out of bounds");return E[0]=this.data[this.index++],ke[0]}readVarInt(){return this.readInt32()}readString(){let e=this.readVarUint(),r=this.index;return this.index+=e,X||(X=new TextDecoder("utf8")),X.decode(this.data.subarray(r,this.index))}_growBy(e){if(this.length+e>this.data.length){let r=new Uint8Array(Math.imul(this.length+e,te.WIGGLE_ROOM)<<1);r.set(this.data),this.data=r}this.length+=e}writeByte(e){let r=this.length;this._growBy(1),this.data[r]=e}writeByteArray(e){this.writeVarUint(e.length);let r=this.length;this._growBy(e.length),this.data.set(e,r)}writeUint16ByteArray(e){this.writeByteArray(new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}writeUint32ByteArray(e){this.writeByteArray(new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}writeInt8ByteArray(e){this.writeByteArray(new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}writeInt16ByteArray(e){this.writeByteArray(new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}writeInt32ByteArray(e){this.writeByteArray(new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}writeFloat32Array(e){this.writeByteArray(new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}writeVarFloat(e){let r=this.length;re[0]=e;let o=V[0];if(o=o>>>23|o<<9,!(o&255)){this.writeByte(0);return}this._growBy(4);let d=this.data;d[r]=o,d[r+1]=o>>8,d[r+2]=o>>16,d[r+3]=o>>24}writeFloat32(e){let r=this.length;this._growBy(4),re[0]=e,this.data.set(E,r)}writeVarUint(e){this.writeUint32(e)}writeUint16(e){let r=this.length;this._growBy(2),_e[0]=e,this.data[r++]=E[0],this.data[r++]=E[1]}writeUint32(e){let r=this.length;this._growBy(4),le[0]=e,this.data.set(E,r)}writeVarInt(e){this.writeInt32(e)}writeInt8(e){let r=this.length;this._growBy(1),ke[0]=e,this.data[r++]=E[0]}writeInt16(e){let r=this.length;this._growBy(2),me[0]=e,this.data[r++]=E[0],this.data[r++]=E[1]}writeInt32(e){let r=this.length;this._growBy(4),V[0]=e,this.data.set(E,r)}writeLowPrecisionFloat(e){this.writeVarInt(Math.round(te.LOW_PRECISION_VALUE*e))}readLowPrecisionFloat(){return this.readVarInt()/te.LOW_PRECISION_VALUE}writeString(e){var r=this.length;this.writeVarUint(e.length),oe||(oe=new TextEncoder);let o=this.length;this._growBy(e.length*2+5);let d=oe.encodeInto(e,this.data.subarray(o));this.length=o+d.written,d.written!==e.length&&(le[0]=d.written,this.data[r++]=E[0],this.data[r++]=E[1],this.data[r++]=E[2],this.data[r++]=E[3])}},b=te;xe(b,"WIGGLE_ROOM",1);xe(b,"LOW_PRECISION_VALUE",10**3);var M={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,jsx:1,js:2,ts:3,tsx:4,css:5,file:6,json:7,toml:8,wasm:9,napi:10};var ie={1:1,2:2,3:3,4:4,5:5,err:1,warn:2,note:3,info:4,debug:5};function lr(e){var r={};return r.file=e.readString(),r.namespace=e.readString(),r.line=e.readInt32(),r.column=e.readInt32(),r.line_text=e.readString(),r.suggestion=e.readString(),r.offset=e.readVarUint(),r}function Se(e){for(var r={};;)switch(e.readByte()){case 0:return r;case 1:r.text=e.readString();break;case 2:r.location=lr(e);break;default:throw new Error("Attempted to parse invalid message")}}function or(e){for(var r={};;)switch(e.readByte()){case 0:return r;case 1:r.resolve=e.readString();break;case 2:r.build=!!e.readByte();break;default:throw new Error("Attempted to parse invalid message")}}function sr(e){var r={};r.level=ie[e.readVarUint()],r.data=Se(e);for(var o=e.readVarUint(),d=r.notes=Array(o),c=0;c<o;c++)d[c]=Se(e);return r.on=or(e),r}function ur(e){var r={};r.warnings=e.readUint32(),r.errors=e.readUint32();for(var o=e.readVarUint(),d=r.msgs=Array(o),c=0;c<o;c++)d[c]=sr(e);return r}var D={1:1,2:2,3:3,disable:1,live:2,fast_refresh:3};var J={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,welcome:1,file_change_notification:2,build_success:3,build_fail:4,manifest_success:5,manifest_fail:6,resolve_file:7,file_change_notification_with_hint:8};var se={1:1,2:2,3:3,build:1,manifest:2,build_with_file_path:3};function Be(e){var r={};return r.timestamp=e.readUint32(),r.kind=J[e.readByte()],r}function Ee(e){var r={};return r.epoch=e.readUint32(),r.javascriptReloader=D[e.readByte()],r.cwd=e.readString(),r.assetPrefix=e.readString(),r}function Ae(e){var r={};return r.id=e.readUint32(),r.loader=M[e.readByte()],r}function Me(e){var r={};return r.id=e.readUint32(),r.from_timestamp=e.readUint32(),r.loader=M[e.readByte()],r.module_path=e.readString(),r.blob_length=e.readUint32(),r}function Ue(e){var r={};return r.id=e.readUint32(),r.from_timestamp=e.readUint32(),r.loader=M[e.readByte()],r.module_path=e.readString(),r.log=ur(e),r}function Ie(e){var r={};return r.id=e.readUint32(),r}var Pe,Le,Oe,qe;if(typeof window<"u"){let e=function(k){return Math.round(k*1e3)/1e3},H=function(k){c.hasInjectedFastRefresh||(k.injectIntoGlobalHook(globalThis),c.hasInjectedFastRefresh=!0)};ue=!1,Q=0;let r;(n=>(n[n.Pending=0]="Pending",n[n.Loading=1]="Loading",n[n.Loaded=2]="Loaded"))(r||={}),de=new Map;let o;(a=>(a[a.cssObjectModel=0]="cssObjectModel",a[a.blobURL=1]="blobURL"))(o||={});let d;(n=>(n[n.fullReload=0]="fullReload",n[n.hotReload=1]="hotReload",n[n.ignore=2]="ignore"))(d||={});let c={RefreshRuntime:null,isUpdateInProgress:!1,hasInjectedFastRefresh:!1,performFullRefresh(){m.client.performFullReload()},async hotReload(){if(!c.isUpdateInProgress)try{c.isUpdateInProgress=!0}finally{c.isUpdateInProgress=!1}}},L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAnFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////vjo798/Psdnb2wMD62dn3wMDrdnb3wcHjNzf4zc3mUFD////+8vL85ubugoLqaWnxm5vkRET1tLT75ubtgoLlQ0Pwj4/zp6foXV3vj4/zqKjsdXXnUFD62tqV2W1BAAAAFnRSTlMAYN8gEEDvv6B/gHAwz59Qr4+Qb7DQOIES+QAABFRJREFUeF7smNluwjAQRYEskJKwiPfxlg3o3v//t0owTlMV2+LBNw/lfMHRoHtIMvv3PHiQlFmWJbPpyYplrq5Um+2UJmnBIpZ8k0yuMmYanXKhbpKv8S4H5WSfgl0K5aFKp3PRRyGEdthAXUzb0AVZCzWwxLmUPyoNjZC9shSwTQ87eu/oN7VWTIb+kWr6gzS2xxiXRDFvRB4bTG5W7NLSTRobvxR4GEMOXtjmCSBTsUxDDs6aT5NEd5mzS09OatbdRJexs5bkRoDmffAehmkwHU74MEYSTX6a1ZAYL5JlFtBZh+a9BhympgBnHb18Gbt8UZDWUT7srJmzseXD9S5cvh38MPh5F45/61D5gL0Ln2YLnHW4fCmwd+F5Aw+DL9+WXQTR/afZA2YdxrBNAuodft5p4DDh8kF6hz/NMOuO7qVnmzlq1t3r6dQ4PKW25YP0rmuvOeklpHw732GkUZbaXz7ArNnF/ZL5bMsXv3e1GiG8umX0wwg1pos8b/sYo2/3Tqsxjb98sXvHFrm68OEtXxX7MebIGeHL+Mu3jtA7r0yEebsOE5aJWL6lLUhAhvkMfsyK+hgjHDIRPmY5eueXiTTvb2bNbidhIIjClkJBEUGDUH5k+2NLAQUj7/9uXnCx6elCppOdkXNPcjKzc2b3o7YwRDMEmCWJqSowI1aaV8g7nhmEWVKYCs3kJJglh6m+wYwQzHom8buSYgaTjz/WR7oZQ4RZUphqBmZIMEsKU+1JZnC8mZjqZ9PCzEIAZkHe0c1UZJglQ2NiMMOGWfy8w8pjT/njzS8MmiklYFaPjqmOYIYMsyQwVQJmfMMszDu6mU8GsfHJ7w50M5h8Apgqgwel39KEUSssX+HSpsMs//S5IAwTGWbx8w4vEWcGxveO5S9fFGWlf4wfwAImaVsUvyQbCLPIYy0ihFkSWF6EVXfFC4PJR8s7ndKMSFheWgiz+GONiHyx25kKdgFjvLl5h29K3B/85ENMtW7j5WzXwfzIKU3oYaxxGdDPGsIsb3mXpDWdWOPtqzBx3YzxlHxhh30MrXIPyQd5J24GYRZzrFF7fpsQZvHzDu/jzF9nztJ0I1ZhEKO13a+lc6ACwPJkHZapVdz615lroKbYc7qbCr4nZ5QGNlQEPW+jpFpm6W41g/htVZqeg2xuN9oyzXkaQ5f0NGsuqCHAHj3FzRP8JHTbJPOdzl2YSQhmtCszuoszUzRTL/jvaZo2c2aub+bDASQiWE1qsgls1Qf2IC28ldd20xDgg5Zy19buAoZWLkzgfsCdVBMvd1+Ce/Aq1NA2vwb3JupukjP84QP4V7NTRZ7CiYGBumiZKLTI3uSdj+03yxPMZyLqZL2ylN82CSfKKjOmkpGpfQDUCa/gxUmqK/SCnVLWe3iLA3dUvbzdBvbhQM9KH1iI006kZYWk8WAkfGwnw+5fO3BsAgAAwkAwgukC7r+tM1jY/ekgnvrhtK4AAMACYkDwBoJSQAkAAAAASUVORK5CYII=",g={module:null,prom:null,cancel:!1,lastError:null,previousFavicon:"",setErrorFavicon(){if(!(typeof document>"u"||g.previousFavicon))try{let k=document.querySelector("link[rel='icon']");if(g.previousFavicon=k&&k.getAttribute("href")||"/favicon.ico",!k){k=document.createElement("link"),k.setAttribute("rel","icon"),k.setAttribute("href",L),document.head.appendChild(k);return}k.setAttribute("href",L)}catch{}},clearErrorFavicon(){if(!(typeof document>"u")&&g.previousFavicon)try{let k=document.querySelector("link[rel='icon']");k&&k.setAttribute("href",g.previousFavicon),g.previousFavicon=""}catch{}},render(k,t){if(g.setErrorFavicon(),"__BunRenderBuildError"in globalThis){globalThis.__BunRenderBuildError(k,t);return}if(g.lastError=[k,t],g.cancel=!1,!g.module){if(g.prom)return;g.prom=import("/bun:error.js").then(h=>{g.module=h,!g.cancel&&g.render(g.lastError[0],g.lastError[1])});return}let{renderBuildFailure:a,renderRuntimeError:n}=g.module;typeof g.lastError[0]=="string"||g.lastError[0]instanceof Error?n(g.lastError[0],g.lastError[1]):a(g.lastError[0],g.lastError[1])},clear(){if(g.lastError=null,g.cancel=!0,g.clearErrorFavicon(),g.module){let{clearBuildFailure:k}=g.module;k()}else"__BunClearBuildFailure"in globalThis&&globalThis.__BunClearBuildFailure()}};class x{hmr;static cssLoadId={id:0,bundle_id:0,node:null,file:"",sheet:null};updateMethod;decoder;constructor(){"replaceSync"in CSSStyleSheet.prototype?this.updateMethod=0:this.updateMethod=1}findMatchingSupportsRule(t,a,n){switch(t.type){case 12:{if(!t.conditionText.startsWith("(hmr-wid:"))return null;let h=8+1,s=t.conditionText.indexOf(")",h);if(s===-1)return null;let u=parseInt(t.conditionText.substring(h,s),10);if(u!==a)return null;let v=t.conditionText.indexOf('(hmr-file:"',s);if(v===-1)return null;v+=11+1;let _=t.conditionText.indexOf('"',v);return _===-1||_-v<=0?null:(x.cssLoadId.id=u,x.cssLoadId.node=n.ownerNode,x.cssLoadId.sheet=n,x.cssLoadId.file=t.conditionText.substring(v-1,_),x.cssLoadId)}default:return null}}bundleId(){return x.cssLoadId.bundle_id}findCSSLinkTag(t){let a=0,n=null,h=document.adoptedStyleSheets;if(this.updateMethod===0&&h.length>0){a=h.length;for(let s=0;s<a&&n===null;s++){let u,v,_=0;try{v=h[s],u=v.rules,_=v.rules.length}catch{continue}if(v.disabled||v.rules.length===0)continue;let B=u[0];if(B.type!==12||!B.conditionText.startsWith("(hmr-bid:"))continue;let U=B.conditionText.indexOf(")",9+1);if(U!==-1){x.cssLoadId.bundle_id=parseInt(B.conditionText.substring(9,U),10);for(let S=1;S<_&&n===null;S++)n=this.findMatchingSupportsRule(u[S],t,v)}}}a=document.styleSheets.length;for(let s=0;s<a&&n===null;s++){let u,v,_=0;try{v=document.styleSheets.item(s),u=v.rules,_=v.rules.length}catch{continue}if(v.disabled||v.rules.length===0)continue;let B=u[0];if(B.type!==12||!B.conditionText.startsWith("(hmr-bid:"))continue;let U=B.conditionText.indexOf(")",9+1);if(U!==-1){x.cssLoadId.bundle_id=parseInt(B.conditionText.substring(9,U),10);for(let S=1;S<_&&n===null;S++)n=this.findMatchingSupportsRule(u[S],t,v)}}return n===null&&(x.cssLoadId.file="",x.cssLoadId.bundle_id=x.cssLoadId.id=0,x.cssLoadId.node=null,x.cssLoadId.sheet=null),n}handleBuildSuccess(t,a,n){let h=performance.now();var s=this.findCSSLinkTag(a.id);if(s===null){I.debug("Skipping unused CSS.");return}if(t.length===0){I.debug("Skipping empty file");return}let u=s.file;u.startsWith(this.hmr.cwd)&&(u=u.substring(this.hmr.cwd.length));let v=n,_=a.from_timestamp;function B(){let U=e(performance.now()-h),S=v-_;I.log("Reloaded in",`${U+S}ms`,"-",u),s=null,u=null}switch(this.updateMethod){case 1:{let U=new Blob([t],{type:"text/css"}),S=URL.createObjectURL(U);setTimeout(B.bind(s.node),0),s.node.setAttribute("href",S),U=null,URL.revokeObjectURL(S);break}case 0:{if(this.decoder||(this.decoder=new TextDecoder("UTF8")),!s.node||s.node.tagName==="HTML")s.sheet.replaceSync(this.decoder.decode(t));else if(s.node.tagName==="LINK"||s.node.tagName==="STYLE"){let U=new CSSStyleSheet,S=this.decoder.decode(t);U.replaceSync(S),s.node.remove(),document.adoptedStyleSheets=[...document.adoptedStyleSheets,U]}break}}t=null}filePath(t){if(t.loader!==M.css)return null;let a=this.findCSSLinkTag(t.id);return a?a.file:null}}class m{static client;socket;hasWelcomed=!1;reconnect=0;epoch=0;javascriptReloader=D.disable;loaders={css:new x};assetPrefixPath="";sessionId;get dependencies(){return y.dependencies}start(){if(ue){I.warn("Attempted to start HMR client multiple times. This may be a bug.");return}this.loaders.css.hmr=this,ue=!0,this.connect();var t=globalThis.onbeforeunload;globalThis.onbeforeunload=a=>{this.disableReconnect=!0,this.socket&&this.socket.readyState===this.socket.OPEN&&this.socket.close(4990,"unload"),t&&t.call(globalThis,[a])}}nextReconnectAttempt=0;reconnectDelay=16;debouncedReconnect=()=>{this.socket&&(this.socket.readyState==this.socket.OPEN||this.socket.readyState==this.socket.CONNECTING)||(this.nextReconnectAttempt=setTimeout(this.attemptReconnect,this.reconnectDelay))};attemptReconnect=()=>{globalThis.clearTimeout(this.nextReconnectAttempt),!(this.socket&&(this.socket.readyState==this.socket.OPEN||this.socket.readyState==this.socket.CONNECTING))&&(this.connect(),this.reconnectDelay+=Math.floor(Math.random()*128))};connect(){if(this.socket&&(this.socket.readyState==this.socket.OPEN||this.socket.readyState==this.socket.CONNECTING))return;Q=performance.now();let t=new URL(location.origin+"/bun:_api.hmr");t.protocol=location.protocol==="https:"?"wss":"ws",this.socket=new WebSocket(t.toString(),["bun-hmr"]),this.socket.binaryType="arraybuffer",this.socket.onclose=this.handleClose,this.socket.onerror=this.handleError,this.socket.onopen=this.handleOpen,this.socket.onmessage=this.handleMessage}builds=new Map;cwd;indexOfModuleId(t){return y.dependencies.graph.indexOf(t)}static cssQueue=[];static cssState=0;static cssAutoFOUC=!1;static processPendingCSSImports(){let t=m.cssQueue.slice();return m.cssQueue.length=0,Promise.all(t).then(()=>{if(m.cssQueue.length>0){let a=m.cssQueue.slice();return m.cssQueue.length=0,Promise.all(a).then(m.processPendingCSSImports)}else return!0})}static importCSS(t){switch(m.cssState){case 0:{this.cssState=1,document.documentElement.innerText===""&&!m.cssAutoFOUC&&(document.body&&(document.body.style.visibility="hidden"),m.cssAutoFOUC=!0),t.then(this.processPendingCSSImports).finally(()=>{m.cssAutoFOUC&&(document.body&&(window.getComputedStyle(document.body),document.body.style.visibility="visible"),m.cssAutoFOUC=!1),this.cssState=2});break}case 2:{t.then(()=>{},()=>{});break}case 1:{this.cssQueue.push(t);break}}}static allImportedStyles=new Set;static onCSSImport(t){if(m.allImportedStyles.add(t.detail),globalThis.Bun_disableCSSImports)return;let a=t.detail;if(typeof a!="string"||a.length===0){console.warn("[CSS Importer] Received invalid CSS import",a);return}let n=new URL(a,location.origin);for(let s=0;s<document.styleSheets.length;s++){let u=document.styleSheets[s];if(u.href){if(u.href===a)return;try{if(new URL(u.href,location.origin).pathname===n.pathname)return}catch{}}}let h=n.toString();m.importCSS(new Promise((s,u)=>{if(!globalThis.Bun_disableCSSImports){var v=document.createElement("link");v.rel="stylesheet",v.href=h,v.onload=()=>{s()},v.onerror=_=>{console.error(`[CSS Importer] Error loading CSS file: ${h}
`,_.toString()),u()},document.head.appendChild(v)}}).then(()=>Promise.resolve()))}static onError(t){"error"in t&&t.error&&g.render(t.error,m.client?m.client.cwd:"")}static activate(t=!1){this.client||!("location"in globalThis)||!("WebSocket"in globalThis)||(globalThis.addEventListener("error",m.onError),this.client=new m,this.client.verbose=t,this.client.start(),globalThis.__BUN_HMR=this.client)}handleBuildFailure(t,a){let n=Ue(t),h=n.id;this.reportBuildFailure(n)}maybeReportBuildFailure(t){g.render(t,this.cwd)}needsConsoleClear=!1;reportBuildFailure(t){g.render(t,this.cwd),console.group(`Build failed: ${t.module_path} (${t.log.errors} errors)`),this.needsConsoleClear=!0;for(let h of t.log.msgs){var a;switch(h.level){case ie.err:{a=console.error;break}case ie.warn:{a=console.warn;break}default:{a=console.info;break}}let{text:s,location:u}=h.data;var n="";u&&(u.line>-1&&u.column>-1?n+=`${u.file}:${u.line}:${u.column}`:u.line>-1?n+=`${u.file}:${u.line}`:u.file.length>0&&(n+=`${u.file}`)),u&&u.line_text&&(n=n.trimRight()+`
`+u.line_text.trim()),n=n.trimRight()+`
 `+s,a(n.trim())}console.groupEnd()}verbose=!1;handleError=t=>{I.error("Websocket error",t.error),this.reconnect===0&&this.debouncedReconnect()};handleBuildSuccess(t,a){let n=Me(t),h=this.builds.get(n.id)||-1/0;if(h>n.from_timestamp+4){this.verbose&&I.debug(`Ignoring outdated update for "${n.module_path}".
  Expected: >=`,h,`
   Received:`,n.from_timestamp);return}var s=t.data.byteOffset+t.index+n.blob_length<=t.data.buffer.byteLength?new Uint8Array(t.data.buffer,t.data.byteOffset+t.index,n.blob_length):Re||=new Uint8Array(0);if(n.loader===M.css)return g.clear(),this.needsConsoleClear&&(console.clear(),this.needsConsoleClear=!1),this.loaders.css.handleBuildSuccess(s,n,a);let u=n.id,v=this.indexOfModuleId(u);if(v===-1){this.verbose&&I.debug("Skipping reload for unknown module id:",u);return}if(this.verbose){var _=y.dependencies.modules[v].file_path;_.startsWith(this.cwd)&&(_=_.substring(this.cwd.length)),I.debug("Preparing to reload",_)}var B=t.index+n.blob_length,U=0;B>t.data.length&&B>4&&(B=t.data.length-4),B>4&&t.data.length>=B+4&&(new Uint8Array(this.hashBuffer.buffer).set(t.data.subarray(B,B+4)),U=this.hashBuffer[0]);var S=new A(n.id,v,n,s,1,U||0);s=null,S.timings.notify=a-n.from_timestamp,g.clear(),S.run().then(([R,$])=>{var j=R.file_path;j.startsWith(this.cwd)&&(j=j.substring(this.cwd.length)),this.needsConsoleClear&&(console.clear(),this.needsConsoleClear=!1),I.log(`[${e($.total)}ms] Reloaded`,j)},R=>{if(!(typeof R=="object"&&R&&R instanceof W)){I.error("Hot Module Reload failed!",R);debugger}})}performFullReload(){typeof location<"u"&&(this.socket.readyState===this.socket.OPEN&&(this.reconnect=1,this.socket.close()),location.reload())}handleFileChangeNotification(t,a,n){let h=Ae(t),s="";switch(h.loader){case M.css:{s=this.loaders.css.filePath(h);break}case M.js:case M.jsx:case M.tsx:case M.ts:case M.json:{let u=y.dependencies.graph.subarray(0,y.dependencies.graph_used).indexOf(h.id);u>-1&&(s=y.dependencies.modules[u].file_path);break}default:return}return this.handleFileChangeNotificationBase(a,h,s,n)}handleFileChangeNotificationBase(t,a,n,h){if(!(n&&n.length>0)){this.verbose&&I.debug("Unknown module changed, skipping");return}if((this.builds.get(a.id)||-1/0)>t){I.debug(`Received stale update for ${n}`);return}let u=2;switch(a.loader){case M.css:{this.builds.set(a.id,t),a.id=this.loaders.css.bundleId(),this.builds.set(a.id,t),u=1;break}case M.js:case M.jsx:case M.json:case M.ts:case M.tsx:{switch(this.javascriptReloader){case D.disable:break;case D.fast_refresh:{this.builds.set(a.id,t),u=1;break}case D.live:{u=0;break}}break}}switch(u){case 1:{h&&!this.buildCommandBufWithFilePath&&(this.buildCommandBufWithFilePath=new Uint8Array(4096+256));let v=h?this.buildCommandBufWithFilePath:this.buildCommandBuf;if(v[0]=h?se.build_with_file_path:se.build,this.buildCommandUArray[0]=t,v.set(this.buildCommandUArrayEight,1),this.buildCommandUArray[0]=a.id,v.set(this.buildCommandUArrayEight,5),h){ne||(ne=new TextEncoder),this.buildCommandUArray[0]=n.length,v.set(this.buildCommandUArrayEight,9);let _=ne.encodeInto(n,v.subarray(13));this.socket.send(this.buildCommandBufWithFilePath.subarray(0,13+_.written))}else this.socket.send(this.buildCommandBuf);this.verbose&&I.debug(`Requesting update for ${n}`);break}case 0:{this.performFullReload();break}}}buildCommandBuf=new Uint8Array(9);buildCommandUArray=new Uint32Array(1);buildCommandUArrayEight=new Uint8Array(this.buildCommandUArray.buffer);hashBuffer=new Uint32Array(1);buildCommandBufWithFilePath;handleOpen=t=>{globalThis.clearTimeout(this.nextReconnectAttempt),setTimeout(()=>{this.socket&&this.socket.readyState==this.socket.OPEN&&(globalThis.clearTimeout(this.nextReconnectAttempt),this.reconnectDelay=16)},16)};handleMessage=t=>{let a=new Uint8Array(t.data),n=new b(a),h=Be(n),s=new b(a.subarray(n.index));switch(h.kind){case J.build_fail:{this.handleBuildFailure(s,h.timestamp);break}case J.build_success:{this.handleBuildSuccess(s,h.timestamp);break}case J.resolve_file:{let{id:_}=Ie(s),B=this.builds.get(_)||0;if(B==0&&A.VERBOSE){I.debug(`Unknown module? ${_}`);return}let U=y.dependencies.graph.subarray(0,y.dependencies.graph_used).indexOf(_);var u="",v=M.js;if(U>-1)u=y.dependencies.modules[U].file_path;else{let S=this.loaders.css.findCSSLinkTag(_);S&&S.file.length&&(u=S.file)}if(!u||u.length===0){A.VERBOSE&&I.debug(`Unknown module? ${_}`);return}switch(u.substring(u.lastIndexOf("."))){case".css":{v=M.css;break}case".mjs":case".cjs":case".js":{v=M.js;break}case".json":{v=M.json;break}case".cts":case".mts":case".ts":{v=M.ts;break}case".tsx":{v=M.tsx;break}case".jsx":{v=M.jsx;break}default:{v=M.file;break}}this.handleFileChangeNotificationBase(B,{id:_,loader:v},u,!0);break}case J.file_change_notification:{this.handleFileChangeNotification(s,h.timestamp,!1);break}case J.file_change_notification_with_hint:{this.handleFileChangeNotification(s,h.timestamp,!0);break}case J.welcome:{let _=performance.now();this.hasWelcomed=!0;let B=Ee(s);switch(this.epoch=B.epoch,this.javascriptReloader=B.javascriptReloader,this.cwd=B.cwd,this.assetPrefixPath=B.assetPrefix,this.javascriptReloader){case D.fast_refresh:{I.log("HMR connected in",e(_-Q),"ms");break}case D.live:{I.log("Live reload connected in",e(_-Q),"ms");break}default:{I.log("Bun connected in",e(_-Q),"ms");break}}Q=_,this.epoch||I.warn("Internal HMR error");break}}};disableReconnect=!1;handleClose=t=>{this.reconnect!==0||this.disableReconnect||this.debouncedReconnect()}}let N=0;class W extends Error{constructor(t){super(t)}}class A{module_id=0;module_index=0;build;hash=0;timings={notify:0,decode:0,import:0,callbacks:0,total:0,start:0};static VERBOSE=!1;bytes;reloader;constructor(t,a,n,h,s,u){this.module_id=t,this.module_index=a,this.build=n,this.bytes=h,this.reloader=s,this.hash=u}async run(){N++;let t;try{t=await this._run()}finally{N--}return t}async _run(){let t=N,a=performance.now(),n=y.dependencies,h=y.dependencies.graph_used;var s=y.dependencies.modules.length>this.module_index&&y.dependencies.modules[this.module_index];y.dependencies=n.fork(this.module_index);var u="";let v=this.build.module_path.length>0&&this.build.module_path[0]==="/"?this.build.module_path.substring(1):this.build.module_path,_=this.hash>0&&this.build.module_path.length>0?`
//# sourceMappingURL=${globalThis.location.origin}/${v}.map?b=${this.hash.toString(16)}`:"";try{let R=new Blob(_.length>0?[this.bytes,_]:[this.bytes],{type:"text/javascript"});u=URL.createObjectURL(R),y.dependencies.blobToID.set(u,this.module_id),await import(u),this.bytes=null,URL.revokeObjectURL(u),this.timings.import=performance.now()-a}catch(R){throw y.dependencies=n,URL.revokeObjectURL(u),this.bytes=null,"__BunRenderHMRError"in globalThis&&globalThis.__BunRenderHMRError(R,s.file_path,s.id),s=null,R}y.dependencies.graph_used===this.module_index&&(y.dependencies.graph_used=h),u="",this.bytes=null,A.VERBOSE&&I.debug("Re-imported",y.dependencies.modules[this.module_index].file_path,"in",e(this.timings.import),". Running callbacks");let B=performance.now(),U=s?new Set(s.additional_updaters):new Set;try{switch(this.reloader){case 1:{let R=!1,$=s&&s.previousVersion&&s.previousVersion.id===s.id&&s.hasSameExports(s.previousVersion);var S=y.dependencies.modules[this.module_index];s&&s._update!==S._update&&($?(s.previousVersion&&(S.previousVersion=s.previousVersion),S.additional_updaters=U):(s.boundUpdate||=s.update.bind(s),S.additional_updaters?S.additional_updaters.add(s.boundUpdate):S.additional_updaters=new Set([s.boundUpdate]),S.previousVersion=s));let j=Math.min(this.module_index+1,y.dependencies.graph_used);for(let Y=0;Y<=j;Y++){let l=y.dependencies.modules[Y];if(!l)continue;let i=!1;l.exports.__hmrDisable||(typeof l.dispose=="function"&&(l.dispose(),i=!0),typeof l.accept=="function"&&(l.accept(),i=!0),l.isRefreshBoundary&&(R=!0),i||l.update())}if(N===t&&R)c.RefreshRuntime.performReactRefresh(),$&&(s.previousVersion=null);else if(N===t)c.performFullRefresh();else return Promise.reject(new W(`Expected pendingUpdateCount: ${t} but received: ${N}`));break}}}catch(R){throw y.dependencies=n,y.dependencies.modules[this.module_index].additional_updaters=U,R}return this.timings.callbacks=performance.now()-B,A.VERBOSE&&I.debug("Ran callbacks",y.dependencies.modules[this.module_index].file_path,"in",e(this.timings.callbacks),"ms"),n=null,this.timings.total=this.timings.import+this.timings.callbacks+this.timings.notify,Promise.resolve([y.dependencies.modules[this.module_index],this.timings])}}class z{modules;graph;graph_used=0;blobToID=new Map;getModuleByBlobURL(t){let a=this.blobToID.get(t);return Number.isFinite(a)&&this.getModuleByID(a)}getFilePathFromBlob(t){let a=this.getModuleByBlobURL(t);if(!a)return null;let n=a.file_path;return n.startsWith(m.client.cwd)&&(n=n.substring(m.client.cwd.length)),n}getModuleByID(t){let a=this.graph.indexOf(t);return a>-1?this.modules[a]:null}loadDefaults(){this.modules=new Array(32),this.graph=new Uint32Array(32),this.graph_used=0}static loadWithDefaults(){let t=new z;return t.loadDefaults(),t}fork(t){let a=new z;return a.modules=this.modules.slice(),a.graph_used=t,a.graph=this.graph.slice(),a}}class y{constructor(t,a){if(this.id=t,this.file_path=a,Object.defineProperty(this,"name",{get(){return this.file_path},configurable:!1,enumerable:!1}),y.dependencies||(y.dependencies=y._dependencies),this.graph_index=y.dependencies.graph_used++,y.dependencies.graph.length<=this.graph_index){let n=new Uint32Array(y.dependencies.graph.length*4);n.set(y.dependencies.graph),y.dependencies.graph=n,y.dependencies.modules.length=n.length}y.dependencies.modules[this.graph_index]=this,y.dependencies.graph[this.graph_index]=this.id}previousVersion=null;hasSameExports(t){let a=Object.keys(this.exports),n=Object.keys(t.exports);if(a.length!==n.length)return!1;for(let h=0;h<a.length;h++)if(a[h]!==n[h])return!1;return!0}#e;get _update(){return this.#e}set _update(t){this.#e=t;var a=de.get(this.file_path)}boundUpdate;update(){var t=de.get(this.id);if(t?.length)for(let a of t)a(this.exports);this._update(this.exports)}static _dependencies=z.loadWithDefaults();exportAll(t){for(let a in t)this._exports[a]=t[a],Object.defineProperty(this.exports,a,{get:this._exports[a],configurable:!0,enumerable:!0})}static dependencies;file_path;_load=function(){};id=0;graph_index=0;_exports={};exports={}}class C extends y{constructor(t,a,n){super(t,a),this.refreshRuntimeBaseID=(this.file_path.length>7?this.id.toString(36):this.file_path)+"/",c.RefreshRuntime=c.RefreshRuntime||n,c.hasInjectedFastRefresh||(n.injectIntoGlobalHook(globalThis),c.hasInjectedFastRefresh=!0)}refreshRuntimeBaseID;isRefreshBoundary=!1;$r_(t,a){c.RefreshRuntime.register(t,this.refreshRuntimeBaseID+a)}$r(t){c.RefreshRuntime.isLikelyComponentType(t)&&this.$r_(t,t.name||t.displayName)}exportAll(t){super.exportAll(t);var a=!1,n=!0;for(let h in t){if(h==="__esModule")continue;a=!0;let s=t[h]();if(s&&typeof s=="function"&&!("name"in s)&&Object.isExtensible(s)){let u={get(){return h},enumerable:!1,configurable:!0};try{Object.defineProperties(s,{name:u,displayName:u})}catch{}}if(!c.RefreshRuntime.isLikelyComponentType(s)){n=!1;continue}this.$r_(s,h)}this.isRefreshBoundary=a&&n}loaded(t){this._update=t}}I={debug(...k){console.debug(...k)},error(...k){console.error(...k)},log(...k){console.log(...k)},warn(...k){console.warn(...k)}},Pe=y,Le=C,Oe=m,qe=H,"document"in globalThis&&document.addEventListener("onimportcss",m.onCSSImport,{passive:!0}),globalThis.__BUN=m,globalThis.__BUN_ERROR=g}var ne,ue,Q,Re,de,I;var Te,Ce,Ne;{let e;(A=>(A[A.entry_point=0]="entry_point",A[A.stmt=1]="stmt",A[A.require=2]="require",A[A.dynamic=3]="dynamic",A[A.require_resolve=4]="require_resolve",A[A.at=5]="at",A[A.at_conditional=6]="at_conditional",A[A.url=7]="url"))(e||={});class r extends Error{constructor(c){super(c.message),this.name=c.name,this.data=c}data;get position(){return this.data.position}get[Symbol.toStringTag](){return`${this.name}: ${this.message}`}}class o extends r{constructor(c){super(c),this.name=c.name,this.data=c}data;get importKind(){return this.data.importKind}get specifier(){return this.data.specifier||""}}Ce=o,Te=r,Ne=e}var Lr=Symbol.for,he=Object.create,fr=Object.getOwnPropertyDescriptors,K=Object.defineProperty,fe=Object.getPrototypeOf,Ve=Object.prototype.hasOwnProperty,cr=Object.getOwnPropertyNames,We=Object.getOwnPropertyDescriptor,$e=e=>K(e,"__esModule",{value:!0,configurable:!0}),hr=(e,r,o)=>{for(let d in o)Ve.call(e,d)||K(e,d,{get:()=>r()[o[d]],enumerable:!0,configurable:!0});return e},vr=e=>Ke($e(K(e!=null?he(fe(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0,configurable:!0}:{value:e,enumerable:!0,configurable:!0})),e),Fe=Symbol.for("CommonJSTransformed"),ce=Symbol.for("CommonJS"),ve=(e,r)=>{var o,d,c=!1;let L=function(){if(c)return o.exports;c=!0,e((o={exports:{}},o),o.exports);var x=d=o.exports;let m=typeof x;if((m==="object"||m==="function")&&!x[Fe]){let N=Object.isExtensible(x);N||(m==="function"?(x=function(){return d.apply(this,arguments)},Object.setPrototypeOf(x,fe(d)),Object.defineProperties(x,Object.getOwnPropertyDescriptors(d))):x=he(fe(x),Object.getOwnPropertyDescriptors(x))),Object.defineProperty(x,Fe,{value:!0,enumerable:!1,configurable:!1}),"default"in x||Object.defineProperty(x,"default",{get(){return d},set(W){if(W!==o.exports)return d=W,!0},enumerable:!1,configurable:!0}),N||(Object.isFrozen(d)?Object.freeze(x):Object.preventExtensions(x))}return x};return L[ce]=1,L},pr=ve,De=e=>e!=null&&typeof e=="object"&&(e.default&&e.default[ce]||e[ce]),Je=e=>De(e)?e.default():e;Je.d=e=>e;var wr=ve,yr=(e,r)=>(Object.defineProperty(e,"name",{value:r,enumerable:!1,configurable:!0}),e),gr=(e,r)=>{for(var o in r)K(e,o,{get:r[o],enumerable:!0,configurable:!0,set:d=>r[o]=()=>d})},mr=(e,r)=>{for(var o in r)K(e,o,{get:()=>r[o],set:d=>r[o]=d,enumerable:!0,configurable:!0})},_r=(e,r)=>{K(e,"default",{get:()=>r,set:o=>r=o,enumerable:!0,configurable:!0})},Ke=(e,r,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let d of cr(r))!Ve.call(e,d)&&d!=="default"&&K(e,d,{get:()=>r[d],configurable:!0,enumerable:!(o=We(r,d))||o.enumerable});return e};function je(e){for(let r in e)return!0;return!1}function kr(e,r){var o=he(r,fr(e));for(let d in r)o[d]===void 0&&(o[d]=r[d]);return o}var xr=(e,r)=>je(r)?je(e)?kr(e,r):r:e,Sr=(e,r,o,d)=>{for(var c=d>1?void 0:d?We(r,o):r,L=e.length-1,g;L>=0;L--)(g=e[L])&&(c=(d?g(r,o,c):g(c))||c);return d&&c&&K(r,o,c),c},Br=(e,r)=>(o,d)=>r(o,d,e);var ze=ge(Ge());globalThis.process||={env:{},cwd(){return"/bun-fake-dir/"}};return tr(Er);})();
// ---
// Public exports from runtime
// Compatible with bun's Runtime Environment and web browsers.
export var $$m =
  "$primordials" in globalThis ? $primordials.require : BUN_RUNTIME.$$m;
export var __HMRModule = BUN_RUNTIME.__HMRModule;
export var __FastRefreshModule = BUN_RUNTIME.__FastRefreshModule;
export var __HMRClient = BUN_RUNTIME.__HMRClient;
export var __markAsModule = BUN_RUNTIME.__markAsModule;
export var $$lzy = BUN_RUNTIME.$$lzy;
export var __toModule = BUN_RUNTIME.__toModule;
export var __commonJS = BUN_RUNTIME.__commonJS;
export var __require = BUN_RUNTIME.__require;
export var __name = BUN_RUNTIME.__name;
export var __export = BUN_RUNTIME.__export;
export var __reExport = BUN_RUNTIME.__reExport;
export var __cJS2eSM = BUN_RUNTIME.__cJS2eSM;
export var regeneratorRuntime = BUN_RUNTIME.regeneratorRuntime;
export var __exportValue = BUN_RUNTIME.__exportValue;
export var __exportDefault = BUN_RUNTIME.__exportDefault;
export var __merge = BUN_RUNTIME.__merge;
export var __decorateClass = BUN_RUNTIME.__decorateClass;
export var __decorateParam = BUN_RUNTIME.__decorateParam;
export var $$bun_runtime_json_parse = JSON.parse;
export var __internalIsCommonJSNamespace =
  BUN_RUNTIME.__internalIsCommonJSNamespace;

globalThis.__internalIsCommonJSNamespace ||= __internalIsCommonJSNamespace;
globalThis.require ||= BUN_RUNTIME.__require;
globalThis.self ||= globalThis;


// svelte/transition/index.mjs
export var $ca8cb9be = $$m({
  "svelte/transition/index.mjs": (module, exports) => {
    var $$b483f46 = $b483f46();
    var $$7b66f1cf = $7b66f1cf();
    function __rest(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++)
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
      }
      return t;
    }
    function blur(node, { delay = 0, duration = 400, easing = $$b483f46.cubicInOut, amount = 5, opacity = 0 } = {}) {
      const style = getComputedStyle(node);
      const target_opacity = +style.opacity;
      const f = style.filter === "none" ? "" : style.filter;
      const od = target_opacity * (1 - opacity);
      return {
        delay,
        duration,
        easing,
        css: (_t, u) => `opacity: ${target_opacity - od * u}; filter: ${f} blur(${u * amount}px);`
      };
    }
    function fade(node, { delay = 0, duration = 400, easing = $$b483f46.linear } = {}) {
      const o = +getComputedStyle(node).opacity;
      return {
        delay,
        duration,
        easing,
        css: (t) => `opacity: ${t * o}`
      };
    }
    function fly(node, { delay = 0, duration = 400, easing = $$b483f46.cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
      const style = getComputedStyle(node);
      const target_opacity = +style.opacity;
      const transform = style.transform === "none" ? "" : style.transform;
      const od = target_opacity * (1 - opacity);
      return {
        delay,
        duration,
        easing,
        css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
      };
    }
    function slide(node, { delay = 0, duration = 400, easing = $$b483f46.cubicOut } = {}) {
      const style = getComputedStyle(node);
      const opacity = +style.opacity;
      const height = parseFloat(style.height);
      const padding_top = parseFloat(style.paddingTop);
      const padding_bottom = parseFloat(style.paddingBottom);
      const margin_top = parseFloat(style.marginTop);
      const margin_bottom = parseFloat(style.marginBottom);
      const border_top_width = parseFloat(style.borderTopWidth);
      const border_bottom_width = parseFloat(style.borderBottomWidth);
      return {
        delay,
        duration,
        easing,
        css: (t) => "overflow: hidden;" + `opacity: ${Math.min(t * 20, 1) * opacity};` + `height: ${t * height}px;` + `padding-top: ${t * padding_top}px;` + `padding-bottom: ${t * padding_bottom}px;` + `margin-top: ${t * margin_top}px;` + `margin-bottom: ${t * margin_bottom}px;` + `border-top-width: ${t * border_top_width}px;` + `border-bottom-width: ${t * border_bottom_width}px;`
      };
    }
    function scale(node, { delay = 0, duration = 400, easing = $$b483f46.cubicOut, start = 0, opacity = 0 } = {}) {
      const style = getComputedStyle(node);
      const target_opacity = +style.opacity;
      const transform = style.transform === "none" ? "" : style.transform;
      const sd = 1 - start;
      const od = target_opacity * (1 - opacity);
      return {
        delay,
        duration,
        easing,
        css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
      };
    }
    function draw(node, { delay = 0, speed, duration, easing = $$b483f46.cubicInOut } = {}) {
      let len = node.getTotalLength();
      const style = getComputedStyle(node);
      if (style.strokeLinecap !== "butt")
        len += parseInt(style.strokeWidth);
      if (duration === undefined)
        if (speed === undefined)
          duration = 800;
        else
          duration = len / speed;
      else if (typeof duration === "function")
        duration = duration(len);
      return {
        delay,
        duration,
        easing,
        css: (_, u) => `
			stroke-dasharray: ${len};
			stroke-dashoffset: ${u * len};
		`
      };
    }
    function crossfade(_a) {
      var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
      const to_receive = new Map;
      const to_send = new Map;
      function crossfade(from, node, params) {
        const { delay = 0, duration = (d) => Math.sqrt(d) * 30, easing = $$b483f46.cubicOut } = $$7b66f1cf.assign($$7b66f1cf.assign({}, defaults), params);
        const to = node.getBoundingClientRect();
        const dx = from.left - to.left;
        const dy = from.top - to.top;
        const dw = from.width / to.width;
        const dh = from.height / to.height;
        const d = Math.sqrt(dx * dx + dy * dy);
        const style = getComputedStyle(node);
        const transform = style.transform === "none" ? "" : style.transform;
        const opacity = +style.opacity;
        return {
          delay,
          duration: $$7b66f1cf.is_function(duration) ? duration(d) : duration,
          easing,
          css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
        };
      }
      function transition(items, counterparts, intro) {
        return (node, params) => {
          items.set(params.key, {
            rect: node.getBoundingClientRect()
          });
          return () => {
            if (counterparts.has(params.key)) {
              const { rect } = counterparts.get(params.key);
              counterparts.delete(params.key);
              return crossfade(rect, node, params);
            }
            items.delete(params.key);
            return fallback && fallback(node, params, intro);
          };
        };
      }
      return [
        transition(to_send, to_receive, false),
        transition(to_receive, to_send, true)
      ];
    }
    __export(module.exports, { blur: () => blur,crossfade: () => crossfade,draw: () => draw,fade: () => fade,fly: () => fly,scale: () => scale,slide: () => slide});
  }
}["svelte/transition/index.mjs"]);


// highlight.js/lib/common.js
export var $d7217306 = $$m({
  "highlight.js/lib/common.js": (module, exports) => {
    var hljs =     __require.d($a66bdff1());
    hljs.registerLanguage("xml",     __require.d($f1b72970()));
    hljs.registerLanguage("bash",     __require.d($dd7fa6f7()));
    hljs.registerLanguage("c",     __require.d($ebc50c6c()));
    hljs.registerLanguage("cpp",     __require.d($e328ecb2()));
    hljs.registerLanguage("csharp",     __require.d($618cc943()));
    hljs.registerLanguage("css",     __require.d($f9f345af()));
    hljs.registerLanguage("markdown",     __require.d($63d02f2f()));
    hljs.registerLanguage("diff",     __require.d($37caa248()));
    hljs.registerLanguage("ruby",     __require.d($1a46678()));
    hljs.registerLanguage("go",     __require.d($114e92fc()));
    hljs.registerLanguage("graphql",     __require.d($8e9c06c5()));
    hljs.registerLanguage("ini",     __require.d($83a60e27()));
    hljs.registerLanguage("java",     __require.d($17288a6a()));
    hljs.registerLanguage("javascript",     __require.d($1c0aab6b()));
    hljs.registerLanguage("json",     __require.d($b678919c()));
    hljs.registerLanguage("kotlin",     __require.d($3e107034()));
    hljs.registerLanguage("less",     __require.d($6c18b120()));
    hljs.registerLanguage("lua",     __require.d($3bf01380()));
    hljs.registerLanguage("makefile",     __require.d($bf976e53()));
    hljs.registerLanguage("perl",     __require.d($c4cdb9e()));
    hljs.registerLanguage("objectivec",     __require.d($a4701c1d()));
    hljs.registerLanguage("php",     __require.d($dd093722()));
    hljs.registerLanguage("php-template",     __require.d($7995610a()));
    hljs.registerLanguage("plaintext",     __require.d($c1c74a3f()));
    hljs.registerLanguage("python",     __require.d($77f45a8e()));
    hljs.registerLanguage("python-repl",     __require.d($3f82a139()));
    hljs.registerLanguage("r",     __require.d($e99190dc()));
    hljs.registerLanguage("rust",     __require.d($be1a865()));
    hljs.registerLanguage("scss",     __require.d($a2e2eb9()));
    hljs.registerLanguage("shell",     __require.d($ae3e8fac()));
    hljs.registerLanguage("sql",     __require.d($59762289()));
    hljs.registerLanguage("swift",     __require.d($8feb0e55()));
    hljs.registerLanguage("yaml",     __require.d($d9715d3c()));
    hljs.registerLanguage("typescript",     __require.d($86aa7ce9()));
    hljs.registerLanguage("vbnet",     __require.d($10be251f()));
    hljs.registerLanguage("wasm",     __require.d($29c947b5()));
    hljs.HighlightJS = hljs;
    hljs.default = hljs;
    module.exports = hljs;
  }
}["highlight.js/lib/common.js"]);


// svelte/easing/index.mjs
export var $b483f46 = $$m({
  "svelte/easing/index.mjs": (module, exports) => {
    $$lzy(module.exports,$7b66f1cf,{linear:"identity"});
    function backInOut(t) {
      const s = 1.70158 * 1.525;
      if ((t *= 2) < 1)
        return 0.5 * (t * t * ((s + 1) * t - s));
      return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
    }
    function backIn(t) {
      const s = 1.70158;
      return t * t * ((s + 1) * t - s);
    }
    function backOut(t) {
      const s = 1.70158;
      return --t * t * ((s + 1) * t + s) + 1;
    }
    function bounceOut(t) {
      const a = 4 / 11;
      const b = 8 / 11;
      const c = 9 / 10;
      const ca = 4356 / 361;
      const cb = 35442 / 1805;
      const cc = 16061 / 1805;
      const t2 = t * t;
      return t < a ? 7.5625 * t2 : t < b ? 9.075 * t2 - 9.9 * t + 3.4 : t < c ? ca * t2 - cb * t + cc : 10.8 * t * t - 20.52 * t + 10.72;
    }
    function bounceInOut(t) {
      return t < 0.5 ? 0.5 * (1 - bounceOut(1 - t * 2)) : 0.5 * bounceOut(t * 2 - 1) + 0.5;
    }
    function bounceIn(t) {
      return 1 - bounceOut(1 - t);
    }
    function circInOut(t) {
      if ((t *= 2) < 1)
        return -0.5 * (Math.sqrt(1 - t * t) - 1);
      return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    }
    function circIn(t) {
      return 1 - Math.sqrt(1 - t * t);
    }
    function circOut(t) {
      return Math.sqrt(1 - --t * t);
    }
    function cubicInOut(t) {
      return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
    }
    function cubicIn(t) {
      return t * t * t;
    }
    function cubicOut(t) {
      const f = t - 1;
      return f * f * f + 1;
    }
    function elasticInOut(t) {
      return t < 0.5 ? 0.5 * Math.sin(13 * Math.PI / 2 * 2 * t) * Math.pow(2, 10 * (2 * t - 1)) : 0.5 * Math.sin(-13 * Math.PI / 2 * (2 * t - 1 + 1)) * Math.pow(2, -10 * (2 * t - 1)) + 1;
    }
    function elasticIn(t) {
      return Math.sin(13 * t * Math.PI / 2) * Math.pow(2, 10 * (t - 1));
    }
    function elasticOut(t) {
      return Math.sin(-13 * (t + 1) * Math.PI / 2) * Math.pow(2, -10 * t) + 1;
    }
    function expoInOut(t) {
      return t === 0 || t === 1 ? t : t < 0.5 ? 0.5 * Math.pow(2, 20 * t - 10) : -0.5 * Math.pow(2, 10 - t * 20) + 1;
    }
    function expoIn(t) {
      return t === 0 ? t : Math.pow(2, 10 * (t - 1));
    }
    function expoOut(t) {
      return t === 1 ? t : 1 - Math.pow(2, -10 * t);
    }
    function quadInOut(t) {
      t /= 0.5;
      if (t < 1)
        return 0.5 * t * t;
      t--;
      return -0.5 * (t * (t - 2) - 1);
    }
    function quadIn(t) {
      return t * t;
    }
    function quadOut(t) {
      return -t * (t - 2);
    }
    function quartInOut(t) {
      return t < 0.5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1;
    }
    function quartIn(t) {
      return Math.pow(t, 4);
    }
    function quartOut(t) {
      return Math.pow(t - 1, 3) * (1 - t) + 1;
    }
    function quintInOut(t) {
      if ((t *= 2) < 1)
        return 0.5 * t * t * t * t * t;
      return 0.5 * ((t -= 2) * t * t * t * t + 2);
    }
    function quintIn(t) {
      return t * t * t * t * t;
    }
    function quintOut(t) {
      return --t * t * t * t * t + 1;
    }
    function sineInOut(t) {
      return -0.5 * (Math.cos(Math.PI * t) - 1);
    }
    function sineIn(t) {
      const v = Math.cos(t * Math.PI * 0.5);
      if (Math.abs(v) < 0.00000000000001)
        return 1;
      else
        return 1 - v;
    }
    function sineOut(t) {
      return Math.sin(t * Math.PI / 2);
    }
    __export(module.exports, { backIn: () => backIn,backInOut: () => backInOut,backOut: () => backOut,bounceIn: () => bounceIn,bounceInOut: () => bounceInOut,bounceOut: () => bounceOut,circIn: () => circIn,circInOut: () => circInOut,circOut: () => circOut,cubicIn: () => cubicIn,cubicInOut: () => cubicInOut,cubicOut: () => cubicOut,elasticIn: () => elasticIn,elasticInOut: () => elasticInOut,elasticOut: () => elasticOut,expoIn: () => expoIn,expoInOut: () => expoInOut,expoOut: () => expoOut,quadIn: () => quadIn,quadInOut: () => quadInOut,quadOut: () => quadOut,quartIn: () => quartIn,quartInOut: () => quartInOut,quartOut: () => quartOut,quintIn: () => quintIn,quintInOut: () => quintInOut,quintOut: () => quintOut,sineIn: () => sineIn,sineInOut: () => sineInOut,sineOut: () => sineOut});
  }
}["svelte/easing/index.mjs"]);


// highlight.js/lib/languages/wasm.js
export var $29c947b5 = $$m({
  "highlight.js/lib/languages/wasm.js": (module, exports) => {
    function wasm(hljs) {
      hljs.regex;
      const BLOCK_COMMENT = hljs.COMMENT(/\(;/, /;\)/);
      BLOCK_COMMENT.contains.push("self");
      const LINE_COMMENT = hljs.COMMENT(/;;/, /$/);
      const KWS = [
        "anyfunc",
        "block",
        "br",
        "br_if",
        "br_table",
        "call",
        "call_indirect",
        "data",
        "drop",
        "elem",
        "else",
        "end",
        "export",
        "func",
        "global.get",
        "global.set",
        "local.get",
        "local.set",
        "local.tee",
        "get_global",
        "get_local",
        "global",
        "if",
        "import",
        "local",
        "loop",
        "memory",
        "memory.grow",
        "memory.size",
        "module",
        "mut",
        "nop",
        "offset",
        "param",
        "result",
        "return",
        "select",
        "set_global",
        "set_local",
        "start",
        "table",
        "tee_local",
        "then",
        "type",
        "unreachable"
      ];
      const FUNCTION_REFERENCE = {
        begin: [
          /(?:func|call|call_indirect)/,
          /\s+/,
          /\$[^\s)]+/
        ],
        className: {
          1: "keyword",
          3: "title.function"
        }
      };
      const ARGUMENT = {
        className: "variable",
        begin: /\$[\w_]+/
      };
      const PARENS = {
        match: /(\((?!;)|\))+/,
        className: "punctuation",
        relevance: 0
      };
      const NUMBER = {
        className: "number",
        relevance: 0,
        match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
      };
      const TYPE = {
        match: /(i32|i64|f32|f64)(?!\.)/,
        className: "type"
      };
      const MATH_OPERATIONS = {
        className: "keyword",
        match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
      };
      const OFFSET_ALIGN = {
        match: [
          /(?:offset|align)/,
          /\s*/,
          /=/
        ],
        className: {
          1: "keyword",
          3: "operator"
        }
      };
      return {
        name: "WebAssembly",
        keywords: {
          $pattern: /[\w.]+/,
          keyword: KWS
        },
        contains: [
          LINE_COMMENT,
          BLOCK_COMMENT,
          OFFSET_ALIGN,
          ARGUMENT,
          PARENS,
          FUNCTION_REFERENCE,
          hljs.QUOTE_STRING_MODE,
          TYPE,
          MATH_OPERATIONS,
          NUMBER
        ]
      };
    }
    module.exports = wasm;
  }
}["highlight.js/lib/languages/wasm.js"]);


// svelte/internal/index.mjs
export var $7b66f1cf = $$m({
  "svelte/internal/index.mjs": (module, exports) => {
    function noop() {
    }
    const identity = (x) => x;
    function assign(tar, src) {
      for (const k in src)
        tar[k] = src[k];
      return tar;
    }
    function is_promise(value) {
      return !!value && (typeof value === "object" || typeof value === "function") && typeof value.then === "function";
    }
    function add_location(element, file, line, column, char) {
      element.__svelte_meta = {
        loc: { file, line, column, char }
      };
    }
    function run(fn) {
      return fn();
    }
    function blank_object() {
      return Object.create(null);
    }
    function run_all(fns) {
      fns.forEach(run);
    }
    function is_function(thing) {
      return typeof thing === "function";
    }
    function safe_not_equal(a, b) {
      return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
      if (!src_url_equal_anchor)
        src_url_equal_anchor = document.createElement("a");
      src_url_equal_anchor.href = url;
      return element_src === src_url_equal_anchor.href;
    }
    function not_equal(a, b) {
      return a != a ? b == b : a !== b;
    }
    function is_empty(obj) {
      return Object.keys(obj).length === 0;
    }
    function validate_store(store, name) {
      if (store != null && typeof store.subscribe !== "function")
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
    function subscribe(store, ...callbacks) {
      if (store == null)
        return noop;
      const unsub = store.subscribe(...callbacks);
      return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
    }
    function get_store_value(store) {
      let value;
      subscribe(store, (_) => value = _)();
      return value;
    }
    function component_subscribe(component, store, callback) {
      component.$$.on_destroy.push(subscribe(store, callback));
    }
    function create_slot(definition, ctx, $$scope, fn) {
      if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
      }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
      return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
      if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined)
          return lets;
        if (typeof lets === "object") {
          const merged = [];
          const len = Math.max($$scope.dirty.length, lets.length);
          for (let i = 0;i < len; i += 1)
            merged[i] = $$scope.dirty[i] | lets[i];
          return merged;
        }
        return $$scope.dirty | lets;
      }
      return $$scope.dirty;
    }
    function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
      if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
      }
    }
    function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
      const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
      update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
    }
    function get_all_dirty_from_scope($$scope) {
      if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for (let i = 0;i < length; i++)
          dirty[i] = -1;
        return dirty;
      }
      return -1;
    }
    function exclude_internal_props(props) {
      const result = {};
      for (const k in props)
        if (k[0] !== "$")
          result[k] = props[k];
      return result;
    }
    function compute_rest_props(props, keys) {
      const rest = {};
      keys = new Set(keys);
      for (const k in props)
        if (!keys.has(k) && k[0] !== "$")
          rest[k] = props[k];
      return rest;
    }
    function compute_slots(slots) {
      const result = {};
      for (const key in slots)
        result[key] = true;
      return result;
    }
    function once(fn) {
      let ran = false;
      return function(...args) {
        if (ran)
          return;
        ran = true;
        fn.call(this, ...args);
      };
    }
    function null_to_empty(value) {
      return value == null ? "" : value;
    }
    function set_store_value(store, ret, value) {
      store.set(value);
      return ret;
    }
    const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    function action_destroyer(action_result) {
      return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
    }
    const is_client = typeof window !== "undefined";
    let now = is_client ? () => window.performance.now() : () => Date.now();
    let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
    function set_now(fn) {
      now = fn;
    }
    function set_raf(fn) {
      raf = fn;
    }
    const tasks = new Set;
    function run_tasks(now) {
      tasks.forEach((task) => {
        if (!task.c(now)) {
          tasks.delete(task);
          task.f();
        }
      });
      if (tasks.size !== 0)
        raf(run_tasks);
    }
    function clear_loops() {
      tasks.clear();
    }
    function loop(callback) {
      let task;
      if (tasks.size === 0)
        raf(run_tasks);
      return {
        promise: new Promise((fulfill) => {
          tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
          tasks.delete(task);
        }
      };
    }
    let is_hydrating = false;
    function start_hydrating() {
      is_hydrating = true;
    }
    function end_hydrating() {
      is_hydrating = false;
    }
    function upper_bound(low, high, key, value) {
      while (low < high) {
        const mid = low + (high - low >> 1);
        if (key(mid) <= value)
          low = mid + 1;
        else
          high = mid;
      }
      return low;
    }
    function init_hydrate(target) {
      if (target.hydrate_init)
        return;
      target.hydrate_init = true;
      let children = target.childNodes;
      if (target.nodeName === "HEAD") {
        const myChildren = [];
        for (let i = 0;i < children.length; i++) {
          const node = children[i];
          if (node.claim_order !== undefined)
            myChildren.push(node);
        }
        children = myChildren;
      }
      const m = new Int32Array(children.length + 1);
      const p = new Int32Array(children.length);
      m[0] = -1;
      let longest = 0;
      for (let i = 0;i < children.length; i++) {
        const current = children[i].claim_order;
        const seqLen = (longest > 0 && children[m[longest]].claim_order <= current ? longest + 1 : upper_bound(1, longest, (idx) => children[m[idx]].claim_order, current)) - 1;
        p[i] = m[seqLen] + 1;
        const newLen = seqLen + 1;
        m[newLen] = i;
        longest = Math.max(newLen, longest);
      }
      const lis = [];
      const toMove = [];
      let last = children.length - 1;
      for (let cur = m[longest] + 1;cur != 0; cur = p[cur - 1]) {
        lis.push(children[cur - 1]);
        for (;last >= cur; last--)
          toMove.push(children[last]);
        last--;
      }
      for (;last >= 0; last--)
        toMove.push(children[last]);
      lis.reverse();
      toMove.sort((a, b) => a.claim_order - b.claim_order);
      for (let i = 0, j = 0;i < toMove.length; i++) {
        while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order)
          j++;
        const anchor = j < lis.length ? lis[j] : null;
        target.insertBefore(toMove[i], anchor);
      }
    }
    function append(target, node) {
      target.appendChild(node);
    }
    function append_styles(target, style_sheet_id, styles) {
      const append_styles_to = get_root_for_style(target);
      if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element("style");
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
      }
    }
    function get_root_for_style(node) {
      if (!node)
        return document;
      const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
      if (root && root.host)
        return root;
      return node.ownerDocument;
    }
    function append_empty_stylesheet(node) {
      const style_element = element("style");
      append_stylesheet(get_root_for_style(node), style_element);
      return style_element.sheet;
    }
    function append_stylesheet(node, style) {
      append(node.head || node, style);
      return style.sheet;
    }
    function append_hydration(target, node) {
      if (is_hydrating) {
        init_hydrate(target);
        if (target.actual_end_child === undefined || target.actual_end_child !== null && target.actual_end_child.parentNode !== target)
          target.actual_end_child = target.firstChild;
        while (target.actual_end_child !== null && target.actual_end_child.claim_order === undefined)
          target.actual_end_child = target.actual_end_child.nextSibling;
        if (node !== target.actual_end_child) {
          if (node.claim_order !== undefined || node.parentNode !== target)
            target.insertBefore(node, target.actual_end_child);
        } else
          target.actual_end_child = node.nextSibling;
      } else if (node.parentNode !== target || node.nextSibling !== null)
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
      target.insertBefore(node, anchor || null);
    }
    function insert_hydration(target, node, anchor) {
      if (is_hydrating && !anchor)
        append_hydration(target, node);
      else if (node.parentNode !== target || node.nextSibling != anchor)
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
      if (node.parentNode)
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
      for (let i = 0;i < iterations.length; i += 1)
        if (iterations[i])
          iterations[i].d(detaching);
    }
    function element(name) {
      return document.createElement(name);
    }
    function element_is(name, is) {
      return document.createElement(name, { is });
    }
    function object_without_properties(obj, exclude) {
      const target = {};
      for (const k in obj)
        if (has_prop(obj, k) && exclude.indexOf(k) === -1)
          target[k] = obj[k];
      return target;
    }
    function svg_element(name) {
      return document.createElementNS("http://www.w3.org/2000/svg", name);
    }
    function text(data) {
      return document.createTextNode(data);
    }
    function space() {
      return text(" ");
    }
    function empty() {
      return text("");
    }
    function listen(node, event, handler, options) {
      node.addEventListener(event, handler, options);
      return () => node.removeEventListener(event, handler, options);
    }
    function prevent_default(fn) {
      return function(event) {
        event.preventDefault();
        return fn.call(this, event);
      };
    }
    function stop_propagation(fn) {
      return function(event) {
        event.stopPropagation();
        return fn.call(this, event);
      };
    }
    function self(fn) {
      return function(event) {
        if (event.target === this)
          fn.call(this, event);
      };
    }
    function trusted(fn) {
      return function(event) {
        if (event.isTrusted)
          fn.call(this, event);
      };
    }
    function attr(node, attribute, value) {
      if (value == null)
        node.removeAttribute(attribute);
      else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
    }
    function set_attributes(node, attributes) {
      const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
      for (const key in attributes)
        if (attributes[key] == null)
          node.removeAttribute(key);
        else if (key === "style")
          node.style.cssText = attributes[key];
        else if (key === "__value")
          node.value = node[key] = attributes[key];
        else if (descriptors[key] && descriptors[key].set)
          node[key] = attributes[key];
        else
          attr(node, key, attributes[key]);
    }
    function set_svg_attributes(node, attributes) {
      for (const key in attributes)
        attr(node, key, attributes[key]);
    }
    function set_custom_element_data_map(node, data_map) {
      Object.keys(data_map).forEach((key) => {
        set_custom_element_data(node, key, data_map[key]);
      });
    }
    function set_custom_element_data(node, prop, value) {
      if (prop in node)
        node[prop] = typeof node[prop] === "boolean" && value === "" ? true : value;
      else
        attr(node, prop, value);
    }
    function xlink_attr(node, attribute, value) {
      node.setAttributeNS("http://www.w3.org/1999/xlink", attribute, value);
    }
    function get_binding_group_value(group, __value, checked) {
      const value = new Set;
      for (let i = 0;i < group.length; i += 1)
        if (group[i].checked)
          value.add(group[i].__value);
      if (!checked)
        value.delete(__value);
      return Array.from(value);
    }
    function to_number(value) {
      return value === "" ? null : +value;
    }
    function time_ranges_to_array(ranges) {
      const array = [];
      for (let i = 0;i < ranges.length; i += 1)
        array.push({ start: ranges.start(i), end: ranges.end(i) });
      return array;
    }
    function children(element) {
      return Array.from(element.childNodes);
    }
    function init_claim_info(nodes) {
      if (nodes.claim_info === undefined)
        nodes.claim_info = { last_index: 0, total_claimed: 0 };
    }
    function claim_node(nodes, predicate, processNode, createNode, dontUpdateLastIndex = false) {
      init_claim_info(nodes);
      const resultNode = (() => {
        for (let i = nodes.claim_info.last_index;i < nodes.length; i++) {
          const node = nodes[i];
          if (predicate(node)) {
            const replacement = processNode(node);
            if (replacement === undefined)
              nodes.splice(i, 1);
            else
              nodes[i] = replacement;
            if (!dontUpdateLastIndex)
              nodes.claim_info.last_index = i;
            return node;
          }
        }
        for (let i = nodes.claim_info.last_index - 1;i >= 0; i--) {
          const node = nodes[i];
          if (predicate(node)) {
            const replacement = processNode(node);
            if (replacement === undefined)
              nodes.splice(i, 1);
            else
              nodes[i] = replacement;
            if (!dontUpdateLastIndex)
              nodes.claim_info.last_index = i;
            else if (replacement === undefined)
              nodes.claim_info.last_index--;
            return node;
          }
        }
        return createNode();
      })();
      resultNode.claim_order = nodes.claim_info.total_claimed;
      nodes.claim_info.total_claimed += 1;
      return resultNode;
    }
    function claim_element_base(nodes, name, attributes, create_element) {
      return claim_node(nodes, (node) => node.nodeName === name, (node) => {
        const remove = [];
        for (let j = 0;j < node.attributes.length; j++) {
          const attribute = node.attributes[j];
          if (!attributes[attribute.name])
            remove.push(attribute.name);
        }
        remove.forEach((v) => node.removeAttribute(v));
        return;
      }, () => create_element(name));
    }
    function claim_element(nodes, name, attributes) {
      return claim_element_base(nodes, name, attributes, element);
    }
    function claim_svg_element(nodes, name, attributes) {
      return claim_element_base(nodes, name, attributes, svg_element);
    }
    function claim_text(nodes, data) {
      return claim_node(nodes, (node) => node.nodeType === 3, (node) => {
        const dataStr = "" + data;
        if (node.data.startsWith(dataStr)) {
          if (node.data.length !== dataStr.length)
            return node.splitText(dataStr.length);
        } else
          node.data = dataStr;
      }, () => text(data), true);
    }
    function claim_space(nodes) {
      return claim_text(nodes, " ");
    }
    function find_comment(nodes, text, start) {
      for (let i = start;i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 8 && node.textContent.trim() === text)
          return i;
      }
      return nodes.length;
    }
    function claim_html_tag(nodes, is_svg) {
      const start_index = find_comment(nodes, "HTML_TAG_START", 0);
      const end_index = find_comment(nodes, "HTML_TAG_END", start_index);
      if (start_index === end_index)
        return new HtmlTagHydration(undefined, is_svg);
      init_claim_info(nodes);
      const html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
      detach(html_tag_nodes[0]);
      detach(html_tag_nodes[html_tag_nodes.length - 1]);
      const claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);
      for (const n of claimed_nodes) {
        n.claim_order = nodes.claim_info.total_claimed;
        nodes.claim_info.total_claimed += 1;
      }
      return new HtmlTagHydration(claimed_nodes, is_svg);
    }
    function set_data(text, data) {
      data = "" + data;
      if (text.wholeText !== data)
        text.data = data;
    }
    function set_input_value(input, value) {
      input.value = value == null ? "" : value;
    }
    function set_input_type(input, type) {
      try {
        input.type = type;
      } catch (e) {
      }
    }
    function set_style(node, key, value, important) {
      if (value === null)
        node.style.removeProperty(key);
      else
        node.style.setProperty(key, value, important ? "important" : "");
    }
    function select_option(select, value) {
      for (let i = 0;i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
          option.selected = true;
          return;
        }
      }
      select.selectedIndex = -1;
    }
    function select_options(select, value) {
      for (let i = 0;i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
      }
    }
    function select_value(select) {
      const selected_option = select.querySelector(":checked") || select.options[0];
      return selected_option && selected_option.__value;
    }
    function select_multiple_value(select) {
      return [].map.call(select.querySelectorAll(":checked"), (option) => option.__value);
    }
    let crossorigin;
    function is_crossorigin() {
      if (crossorigin === undefined) {
        crossorigin = false;
        try {
          if (typeof window !== "undefined" && window.parent)
            window.parent.document;
        } catch (error) {
          crossorigin = true;
        }
      }
      return crossorigin;
    }
    function add_resize_listener(node, fn) {
      const computed_style = getComputedStyle(node);
      if (computed_style.position === "static")
        node.style.position = "relative";
      const iframe = element("iframe");
      iframe.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;");
      iframe.setAttribute("aria-hidden", "true");
      iframe.tabIndex = -1;
      const crossorigin = is_crossorigin();
      let unsubscribe;
      if (crossorigin) {
        iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
        unsubscribe = listen(window, "message", (event) => {
          if (event.source === iframe.contentWindow)
            fn();
        });
      } else {
        iframe.src = "about:blank";
        iframe.onload = () => {
          unsubscribe = listen(iframe.contentWindow, "resize", fn);
        };
      }
      append(node, iframe);
      return () => {
        if (crossorigin)
          unsubscribe();
        else if (unsubscribe && iframe.contentWindow)
          unsubscribe();
        detach(iframe);
      };
    }
    function toggle_class(element, name, toggle) {
      element.classList[toggle ? "add" : "remove"](name);
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
      const e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, cancelable, detail);
      return e;
    }
    function query_selector_all(selector, parent = document.body) {
      return Array.from(parent.querySelectorAll(selector));
    }
    function head_selector(nodeId, head) {
      const result = [];
      let started = 0;
      for (const node of head.childNodes)
        if (node.nodeType === 8) {
          const comment = node.textContent.trim();
          if (comment === `HEAD_${nodeId}_END`) {
            started -= 1;
            result.push(node);
          } else if (comment === `HEAD_${nodeId}_START`) {
            started += 1;
            result.push(node);
          }
        } else if (started > 0)
          result.push(node);
      return result;
    }

    class HtmlTag {
      constructor(is_svg = false) {
        this.is_svg = false;
        this.is_svg = is_svg;
        this.e = this.n = null;
      }
      c(html) {
        this.h(html);
      }
      m(html, target, anchor = null) {
        if (!this.e) {
          if (this.is_svg)
            this.e = svg_element(target.nodeName);
          else
            this.e = element(target.nodeName);
          this.t = target;
          this.c(html);
        }
        this.i(anchor);
      }
      h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
      }
      i(anchor) {
        for (let i = 0;i < this.n.length; i += 1)
          insert(this.t, this.n[i], anchor);
      }
      p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
      }
      d() {
        this.n.forEach(detach);
      }
    }

    class HtmlTagHydration extends HtmlTag {
      constructor(claimed_nodes, is_svg = false) {
        super(is_svg);
        this.e = this.n = null;
        this.l = claimed_nodes;
      }
      c(html) {
        if (this.l)
          this.n = this.l;
        else
          super.c(html);
      }
      i(anchor) {
        for (let i = 0;i < this.n.length; i += 1)
          insert_hydration(this.t, this.n[i], anchor);
      }
    }
    function attribute_to_object(attributes) {
      const result = {};
      for (const attribute of attributes)
        result[attribute.name] = attribute.value;
      return result;
    }
    function get_custom_elements_slots(element) {
      const result = {};
      element.childNodes.forEach((node) => {
        result[node.slot || "default"] = true;
      });
      return result;
    }
    function construct_svelte_component(component, props) {
      return new component(props);
    }
    const managed_styles = new Map;
    let active = 0;
    function hash(str) {
      let hash = 5381;
      let i = str.length;
      while (i--)
        hash = (hash << 5) - hash ^ str.charCodeAt(i);
      return hash >>> 0;
    }
    function create_style_information(doc, node) {
      const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
      managed_styles.set(doc, info);
      return info;
    }
    function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
      const step = 16.666 / duration;
      let keyframes = "{\n";
      for (let p = 0;p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
      }
      const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
      const name = `__svelte_${hash(rule)}_${uid}`;
      const doc = get_root_for_style(node);
      const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
      if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
      }
      const animation = node.style.animation || "";
      node.style.animation = `${animation ? `${animation}, ` : ""}${name} ${duration}ms linear ${delay}ms 1 both`;
      active += 1;
      return name;
    }
    function delete_rule(node, name) {
      const previous = (node.style.animation || "").split(", ");
      const next = previous.filter(name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("__svelte") === -1);
      const deleted = previous.length - next.length;
      if (deleted) {
        node.style.animation = next.join(", ");
        active -= deleted;
        if (!active)
          clear_rules();
      }
    }
    function clear_rules() {
      raf(() => {
        if (active)
          return;
        managed_styles.forEach((info) => {
          const { ownerNode } = info.stylesheet;
          if (ownerNode)
            detach(ownerNode);
        });
        managed_styles.clear();
      });
    }
    function create_animation(node, from, fn, params) {
      if (!from)
        return noop;
      const to = node.getBoundingClientRect();
      if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop;
      const {
        delay = 0,
        duration = 300,
        easing = identity,
        start: start_time = now() + delay,
        end = start_time + duration,
        tick = noop,
        css
      } = fn(node, { from, to }, params);
      let running = true;
      let started = false;
      let name;
      function start() {
        if (css)
          name = create_rule(node, 0, 1, duration, delay, easing, css);
        if (!delay)
          started = true;
      }
      function stop() {
        if (css)
          delete_rule(node, name);
        running = false;
      }
      loop((now) => {
        if (!started && now >= start_time)
          started = true;
        if (started && now >= end) {
          tick(1, 0);
          stop();
        }
        if (!running)
          return false;
        if (started) {
          const p = now - start_time;
          const t = 0 + 1 * easing(p / duration);
          tick(t, 1 - t);
        }
        return true;
      });
      start();
      tick(0, 1);
      return stop;
    }
    function fix_position(node) {
      const style = getComputedStyle(node);
      if (style.position !== "absolute" && style.position !== "fixed") {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = "absolute";
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
      }
    }
    function add_transform(node, a) {
      const b = node.getBoundingClientRect();
      if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === "none" ? "" : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
      }
    }
    let current_component;
    function set_current_component(component) {
      current_component = component;
    }
    function get_current_component() {
      if (!current_component)
        throw new Error("Function called outside component initialization");
      return current_component;
    }
    function beforeUpdate(fn) {
      get_current_component().$$.before_update.push(fn);
    }
    function onMount(fn) {
      get_current_component().$$.on_mount.push(fn);
    }
    function afterUpdate(fn) {
      get_current_component().$$.after_update.push(fn);
    }
    function onDestroy(fn) {
      get_current_component().$$.on_destroy.push(fn);
    }
    function createEventDispatcher() {
      const component = get_current_component();
      return (type, detail, { cancelable = false } = {}) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
          const event = custom_event(type, detail, { cancelable });
          callbacks.slice().forEach((fn) => {
            fn.call(component, event);
          });
          return !event.defaultPrevented;
        }
        return true;
      };
    }
    function setContext(key, context) {
      get_current_component().$$.context.set(key, context);
      return context;
    }
    function getContext(key) {
      return get_current_component().$$.context.get(key);
    }
    function getAllContexts() {
      return get_current_component().$$.context;
    }
    function hasContext(key) {
      return get_current_component().$$.context.has(key);
    }
    function bubble(component, event) {
      const callbacks = component.$$.callbacks[event.type];
      if (callbacks)
        callbacks.slice().forEach((fn) => fn.call(this, event));
    }
    const dirty_components = [];
    const intros = { enabled: false };
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
      if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
      }
    }
    function tick() {
      schedule_update();
      return resolved_promise;
    }
    function add_render_callback(fn) {
      render_callbacks.push(fn);
    }
    function add_flush_callback(fn) {
      flush_callbacks.push(fn);
    }
    const seen_callbacks = new Set;
    let flushidx = 0;
    function flush() {
      if (flushidx !== 0)
        return;
      const saved_component = current_component;
      do {
        try {
          while (flushidx < dirty_components.length) {
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
          }
        } catch (e) {
          dirty_components.length = 0;
          flushidx = 0;
          throw e;
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
          binding_callbacks.pop()();
        for (let i = 0;i < render_callbacks.length; i += 1) {
          const callback = render_callbacks[i];
          if (!seen_callbacks.has(callback)) {
            seen_callbacks.add(callback);
            callback();
          }
        }
        render_callbacks.length = 0;
      } while (dirty_components.length);
      while (flush_callbacks.length)
        flush_callbacks.pop()();
      update_scheduled = false;
      seen_callbacks.clear();
      set_current_component(saved_component);
    }
    function update($$) {
      if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
      }
    }
    let promise;
    function wait() {
      if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
          promise = null;
        });
      }
      return promise;
    }
    function dispatch(node, direction, kind) {
      node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
    }
    const outroing = new Set;
    let outros;
    function group_outros() {
      outros = {
        r: 0,
        c: [],
        p: outros
      };
    }
    function check_outros() {
      if (!outros.r)
        run_all(outros.c);
      outros = outros.p;
    }
    function transition_in(block, local) {
      if (block && block.i) {
        outroing.delete(block);
        block.i(local);
      }
    }
    function transition_out(block, local, detach, callback) {
      if (block && block.o) {
        if (outroing.has(block))
          return;
        outroing.add(block);
        outros.c.push(() => {
          outroing.delete(block);
          if (callback) {
            if (detach)
              block.d(1);
            callback();
          }
        });
        block.o(local);
      } else if (callback)
        callback();
    }
    const null_transition = { duration: 0 };
    function create_in_transition(node, fn, params) {
      const options = { direction: "in" };
      let config = fn(node, params, options);
      let running = false;
      let animation_name;
      let task;
      let uid = 0;
      function cleanup() {
        if (animation_name)
          delete_rule(node, animation_name);
      }
      function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
          animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task)
          task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, "start"));
        task = loop((now) => {
          if (running) {
            if (now >= end_time) {
              tick(1, 0);
              dispatch(node, true, "end");
              cleanup();
              return running = false;
            }
            if (now >= start_time) {
              const t = easing((now - start_time) / duration);
              tick(t, 1 - t);
            }
          }
          return running;
        });
      }
      let started = false;
      return {
        start() {
          if (started)
            return;
          started = true;
          delete_rule(node);
          if (is_function(config)) {
            config = config(options);
            wait().then(go);
          } else
            go();
        },
        invalidate() {
          started = false;
        },
        end() {
          if (running) {
            cleanup();
            running = false;
          }
        }
      };
    }
    function create_out_transition(node, fn, params) {
      const options = { direction: "out" };
      let config = fn(node, params, options);
      let running = true;
      let animation_name;
      const group = outros;
      group.r += 1;
      function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
          animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, "start"));
        loop((now) => {
          if (running) {
            if (now >= end_time) {
              tick(0, 1);
              dispatch(node, false, "end");
              if (!--group.r)
                run_all(group.c);
              return false;
            }
            if (now >= start_time) {
              const t = easing((now - start_time) / duration);
              tick(1 - t, t);
            }
          }
          return running;
        });
      }
      if (is_function(config))
        wait().then(() => {
          config = config(options);
          go();
        });
      else
        go();
      return {
        end(reset) {
          if (reset && config.tick)
            config.tick(1, 0);
          if (running) {
            if (animation_name)
              delete_rule(node, animation_name);
            running = false;
          }
        }
      };
    }
    function create_bidirectional_transition(node, fn, params, intro) {
      const options = { direction: "both" };
      let config = fn(node, params, options);
      let t = intro ? 0 : 1;
      let running_program = null;
      let pending_program = null;
      let animation_name = null;
      function clear_animation() {
        if (animation_name)
          delete_rule(node, animation_name);
      }
      function init(program, duration) {
        const d = program.b - t;
        duration *= Math.abs(d);
        return {
          a: t,
          b: program.b,
          d,
          duration,
          start: program.start,
          end: program.start + duration,
          group: program.group
        };
      }
      function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
          start: now() + delay,
          b
        };
        if (!b) {
          program.group = outros;
          outros.r += 1;
        }
        if (running_program || pending_program)
          pending_program = program;
        else {
          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, b, duration, delay, easing, css);
          }
          if (b)
            tick(0, 1);
          running_program = init(program, duration);
          add_render_callback(() => dispatch(node, b, "start"));
          loop((now) => {
            if (pending_program && now > pending_program.start) {
              running_program = init(pending_program, duration);
              pending_program = null;
              dispatch(node, running_program.b, "start");
              if (css) {
                clear_animation();
                animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
              }
            }
            if (running_program) {
              if (now >= running_program.end) {
                tick(t = running_program.b, 1 - t);
                dispatch(node, running_program.b, "end");
                if (!pending_program) {
                  if (running_program.b)
                    clear_animation();
                  else if (!--running_program.group.r)
                    run_all(running_program.group.c);
                }
                running_program = null;
              } else if (now >= running_program.start) {
                const p = now - running_program.start;
                t = running_program.a + running_program.d * easing(p / running_program.duration);
                tick(t, 1 - t);
              }
            }
            return !!(running_program || pending_program);
          });
        }
      }
      return {
        run(b) {
          if (is_function(config))
            wait().then(() => {
              config = config(options);
              go(b);
            });
          else
            go(b);
        },
        end() {
          clear_animation();
          running_program = pending_program = null;
        }
      };
    }
    function handle_promise(promise, info) {
      const token = info.token = {};
      function update(type, index, key, value) {
        if (info.token !== token)
          return;
        info.resolved = value;
        let child_ctx = info.ctx;
        if (key !== undefined) {
          child_ctx = child_ctx.slice();
          child_ctx[key] = value;
        }
        const block = type && (info.current = type)(child_ctx);
        let needs_flush = false;
        if (info.block) {
          if (info.blocks)
            info.blocks.forEach((block, i) => {
              if (i !== index && block) {
                group_outros();
                transition_out(block, 1, 1, () => {
                  if (info.blocks[i] === block)
                    info.blocks[i] = null;
                });
                check_outros();
              }
            });
          else
            info.block.d(1);
          block.c();
          transition_in(block, 1);
          block.m(info.mount(), info.anchor);
          needs_flush = true;
        }
        info.block = block;
        if (info.blocks)
          info.blocks[index] = block;
        if (needs_flush)
          flush();
      }
      if (is_promise(promise)) {
        const current_component = get_current_component();
        promise.then((value) => {
          set_current_component(current_component);
          update(info.then, 1, info.value, value);
          set_current_component(null);
        }, (error) => {
          set_current_component(current_component);
          update(info.catch, 2, info.error, error);
          set_current_component(null);
          if (!info.hasCatch)
            throw error;
        });
        if (info.current !== info.pending) {
          update(info.pending, 0);
          return true;
        }
      } else {
        if (info.current !== info.then) {
          update(info.then, 1, info.value, promise);
          return true;
        }
        info.resolved = promise;
      }
    }
    function update_await_block_branch(info, ctx, dirty) {
      const child_ctx = ctx.slice();
      const { resolved } = info;
      if (info.current === info.then)
        child_ctx[info.value] = resolved;
      if (info.current === info.catch)
        child_ctx[info.error] = resolved;
      info.block.p(child_ctx, dirty);
    }
    const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : globalThis;
    function destroy_block(block, lookup) {
      block.d(1);
      lookup.delete(block.key);
    }
    function outro_and_destroy_block(block, lookup) {
      transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
      });
    }
    function fix_and_destroy_block(block, lookup) {
      block.f();
      destroy_block(block, lookup);
    }
    function fix_and_outro_and_destroy_block(block, lookup) {
      block.f();
      outro_and_destroy_block(block, lookup);
    }
    function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
      let o = old_blocks.length;
      let n = list.length;
      let i = o;
      const old_indexes = {};
      while (i--)
        old_indexes[old_blocks[i].key] = i;
      const new_blocks = [];
      const new_lookup = new Map;
      const deltas = new Map;
      i = n;
      while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
          block = create_each_block(key, child_ctx);
          block.c();
        } else if (dynamic)
          block.p(child_ctx, dirty);
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
          deltas.set(key, Math.abs(i - old_indexes[key]));
      }
      const will_move = new Set;
      const did_move = new Set;
      function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
      }
      while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
          next = new_block.first;
          o--;
          n--;
        } else if (!new_lookup.has(old_key)) {
          destroy(old_block, lookup);
          o--;
        } else if (!lookup.has(new_key) || will_move.has(new_key))
          insert(new_block);
        else if (did_move.has(old_key))
          o--;
        else if (deltas.get(new_key) > deltas.get(old_key)) {
          did_move.add(new_key);
          insert(new_block);
        } else {
          will_move.add(old_key);
          o--;
        }
      }
      while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
          destroy(old_block, lookup);
      }
      while (n)
        insert(new_blocks[n - 1]);
      return new_blocks;
    }
    function validate_each_keys(ctx, list, get_context, get_key) {
      const keys = new Set;
      for (let i = 0;i < list.length; i++) {
        const key = get_key(get_context(ctx, list, i));
        if (keys.has(key))
          throw new Error("Cannot have duplicate keys in a keyed each");
        keys.add(key);
      }
    }
    function get_spread_update(levels, updates) {
      const update = {};
      const to_null_out = {};
      const accounted_for = { $$scope: 1 };
      let i = levels.length;
      while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
          for (const key in o)
            if (!(key in n))
              to_null_out[key] = 1;
          for (const key in n)
            if (!accounted_for[key]) {
              update[key] = n[key];
              accounted_for[key] = 1;
            }
          levels[i] = n;
        } else
          for (const key in o)
            accounted_for[key] = 1;
      }
      for (const key in to_null_out)
        if (!(key in update))
          update[key] = undefined;
      return update;
    }
    function get_spread_object(spread_props) {
      return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
    }
    const boolean_attributes = new Set([
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "itemscope",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ]);
    const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
    function is_void(name) {
      return void_element_names.test(name) || name.toLowerCase() === "!doctype";
    }
    const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
    function spread(args, attrs_to_add) {
      const attributes = Object.assign({}, ...args);
      if (attrs_to_add) {
        const classes_to_add = attrs_to_add.classes;
        const styles_to_add = attrs_to_add.styles;
        if (classes_to_add)
          if (attributes.class == null)
            attributes.class = classes_to_add;
          else
            attributes.class += " " + classes_to_add;
        if (styles_to_add)
          if (attributes.style == null)
            attributes.style = style_object_to_string(styles_to_add);
          else
            attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
      }
      let str = "";
      Object.keys(attributes).forEach((name) => {
        if (invalid_attribute_name_character.test(name))
          return;
        const value = attributes[name];
        if (value === true)
          str += " " + name;
        else if (boolean_attributes.has(name.toLowerCase())) {
          if (value)
            str += " " + name;
        } else if (value != null)
          str += ` ${name}="${value}"`;
      });
      return str;
    }
    function merge_ssr_styles(style_attribute, style_directive) {
      const style_object = {};
      for (const individual_style of style_attribute.split(";")) {
        const colon_index = individual_style.indexOf(":");
        const name = individual_style.slice(0, colon_index).trim();
        const value = individual_style.slice(colon_index + 1).trim();
        if (!name)
          continue;
        style_object[name] = value;
      }
      for (const name in style_directive) {
        const value = style_directive[name];
        if (value)
          style_object[name] = value;
        else
          delete style_object[name];
      }
      return style_object;
    }
    const ATTR_REGEX = /[&"]/g;
    const CONTENT_REGEX = /[&<]/g;
    function escape(value, is_attr = false) {
      const str = String(value);
      const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
      pattern.lastIndex = 0;
      let escaped = "";
      let last = 0;
      while (pattern.test(str)) {
        const i = pattern.lastIndex - 1;
        const ch = str[i];
        escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
        last = i + 1;
      }
      return escaped + str.substring(last);
    }
    function escape_attribute_value(value) {
      const should_escape = typeof value === "string" || value && typeof value === "object";
      return should_escape ? escape(value, true) : value;
    }
    function escape_object(obj) {
      const result = {};
      for (const key in obj)
        result[key] = escape_attribute_value(obj[key]);
      return result;
    }
    function each(items, fn) {
      let str = "";
      for (let i = 0;i < items.length; i += 1)
        str += fn(items[i], i);
      return str;
    }
    const missing_component = {
      $$render: () => ""
    };
    function validate_component(component, name) {
      if (!component || !component.$$render) {
        if (name === "svelte:component")
          name += " this={...}";
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
      }
      return component;
    }
    function debug(file, line, column, values) {
      console.log(`{@debug} ${file ? file + " " : ""}(${line}:${column})`);
      console.log(values);
      return "";
    }
    let on_destroy;
    function create_ssr_component(fn) {
      function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
          on_destroy,
          context: new Map(context || (parent_component ? parent_component.$$.context : [])),
          on_mount: [],
          before_update: [],
          after_update: [],
          callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
      }
      return {
        render: (props = {}, { $$slots = {}, context = new Map } = {}) => {
          on_destroy = [];
          const result = { title: "", head: "", css: new Set };
          const html = $$render(result, props, {}, $$slots, context);
          run_all(on_destroy);
          return {
            html,
            css: {
              code: Array.from(result.css).map((css) => css.code).join("\n"),
              map: null
            },
            head: result.title + result.head
          };
        },
        $$render
      };
    }
    function add_attribute(name, value, boolean) {
      if (value == null || boolean && !value)
        return "";
      const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
      return ` ${name}${assignment}`;
    }
    function add_classes(classes) {
      return classes ? ` class="${classes}"` : "";
    }
    function style_object_to_string(style_object) {
      return Object.keys(style_object).filter((key) => style_object[key]).map((key) => `${key}: ${escape_attribute_value(style_object[key])};`).join(" ");
    }
    function add_styles(style_object) {
      const styles = style_object_to_string(style_object);
      return styles ? ` style="${styles}"` : "";
    }
    function bind(component, name, callback) {
      const index = component.$$.props[name];
      if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
      }
    }
    function create_component(block) {
      block && block.c();
    }
    function claim_component(block, parent_nodes) {
      block && block.l(parent_nodes);
    }
    function mount_component(component, target, anchor, customElement) {
      const { fragment, after_update } = component.$$;
      fragment && fragment.m(target, anchor);
      if (!customElement)
        add_render_callback(() => {
          const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
          if (component.$$.on_destroy)
            component.$$.on_destroy.push(...new_on_destroy);
          else
            run_all(new_on_destroy);
          component.$$.on_mount = [];
        });
      after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
      const $$ = component.$$;
      if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
      }
    }
    function make_dirty(component, i) {
      if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
      }
      component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
      const parent_component = current_component;
      set_current_component(component);
      const $$ = component.$$ = {
        fragment: null,
        ctx: [],
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
      };
      append_styles && append_styles($$.root);
      let ready = false;
      $$.ctx = instance ? instance(component, options.props || {}, (i, ret, ...rest) => {
        const value = rest.length ? rest[0] : ret;
        if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
          if (!$$.skip_bound && $$.bound[i])
            $$.bound[i](value);
          if (ready)
            make_dirty(component, i);
        }
        return ret;
      }) : [];
      $$.update();
      ready = true;
      run_all($$.before_update);
      $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
      if (options.target) {
        if (options.hydrate) {
          start_hydrating();
          const nodes = children(options.target);
          $$.fragment && $$.fragment.l(nodes);
          nodes.forEach(detach);
        } else
          $$.fragment && $$.fragment.c();
        if (options.intro)
          transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        end_hydrating();
        flush();
      }
      set_current_component(parent_component);
    }
    let SvelteElement;
    if (typeof HTMLElement === "function")
      SvelteElement = class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
        }
        connectedCallback() {
          const { on_mount } = this.$$;
          this.$$.on_disconnect = on_mount.map(run).filter(is_function);
          for (const key in this.$$.slotted)
            this.appendChild(this.$$.slotted[key]);
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
          this[attr] = newValue;
        }
        disconnectedCallback() {
          run_all(this.$$.on_disconnect);
        }
        $destroy() {
          destroy_component(this, 1);
          this.$destroy = noop;
        }
        $on(type, callback) {
          if (!is_function(callback))
            return noop;
          const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
          callbacks.push(callback);
          return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
              callbacks.splice(index, 1);
          };
        }
        $set($$props) {
          if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
          }
        }
      };

    class SvelteComponent {
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
      $on(type, callback) {
        if (!is_function(callback))
          return noop;
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    }
    function dispatch_dev(type, detail) {
      document.dispatchEvent(custom_event(type, Object.assign({ version: "3.55.1" }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
      dispatch_dev("SvelteDOMInsert", { target, node });
      append(target, node);
    }
    function append_hydration_dev(target, node) {
      dispatch_dev("SvelteDOMInsert", { target, node });
      append_hydration(target, node);
    }
    function insert_dev(target, node, anchor) {
      dispatch_dev("SvelteDOMInsert", { target, node, anchor });
      insert(target, node, anchor);
    }
    function insert_hydration_dev(target, node, anchor) {
      dispatch_dev("SvelteDOMInsert", { target, node, anchor });
      insert_hydration(target, node, anchor);
    }
    function detach_dev(node) {
      dispatch_dev("SvelteDOMRemove", { node });
      detach(node);
    }
    function detach_between_dev(before, after) {
      while (before.nextSibling && before.nextSibling !== after)
        detach_dev(before.nextSibling);
    }
    function detach_before_dev(after) {
      while (after.previousSibling)
        detach_dev(after.previousSibling);
    }
    function detach_after_dev(before) {
      while (before.nextSibling)
        detach_dev(before.nextSibling);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
      const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
      if (has_prevent_default)
        modifiers.push("preventDefault");
      if (has_stop_propagation)
        modifiers.push("stopPropagation");
      dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
      const dispose = listen(node, event, handler, options);
      return () => {
        dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
        dispose();
      };
    }
    function attr_dev(node, attribute, value) {
      attr(node, attribute, value);
      if (value == null)
        dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
      else
        dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function prop_dev(node, property, value) {
      node[property] = value;
      dispatch_dev("SvelteDOMSetProperty", { node, property, value });
    }
    function dataset_dev(node, property, value) {
      node.dataset[property] = value;
      dispatch_dev("SvelteDOMSetDataset", { node, property, value });
    }
    function set_data_dev(text, data) {
      data = "" + data;
      if (text.wholeText === data)
        return;
      dispatch_dev("SvelteDOMSetData", { node: text, data });
      text.data = data;
    }
    function validate_each_argument(arg) {
      if (typeof arg !== "string" && !(arg && typeof arg === "object" && ("length" in arg))) {
        let msg = "{#each} only iterates over array-like objects.";
        if (typeof Symbol === "function" && arg && (Symbol.iterator in arg))
          msg += " You can use a spread to convert this iterable into an array.";
        throw new Error(msg);
      }
    }
    function validate_slots(name, slot, keys) {
      for (const slot_key of Object.keys(slot))
        if (!~keys.indexOf(slot_key))
          console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
    function validate_dynamic_element(tag) {
      const is_string = typeof tag === "string";
      if (tag && !is_string)
        throw new Error('<svelte:element> expects "this" attribute to be a string.');
    }
    function validate_void_dynamic_element(tag) {
      if (tag && is_void(tag))
        console.warn(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
    }
    function construct_svelte_component_dev(component, props) {
      const error_message = "this={...} of <svelte:component> should specify a Svelte component.";
      try {
        const instance = new component(props);
        if (!instance.$$ || !instance.$set || !instance.$on || !instance.$destroy)
          throw new Error(error_message);
        return instance;
      } catch (err) {
        const { message } = err;
        if (typeof message === "string" && message.indexOf("is not a constructor") !== -1)
          throw new Error(error_message);
        else
          throw err;
      }
    }

    class SvelteComponentDev extends SvelteComponent {
      constructor(options) {
        if (!options || !options.target && !options.$$inline)
          throw new Error("'target' is a required option");
        super();
      }
      $destroy() {
        super.$destroy();
        this.$destroy = () => {
          console.warn("Component was already destroyed");
        };
      }
      $capture_state() {
      }
      $inject_state() {
      }
    }

    class SvelteComponentTyped extends SvelteComponentDev {
      constructor(options) {
        super(options);
      }
    }
    function loop_guard(timeout) {
      const start = Date.now();
      return () => {
        if (Date.now() - start > timeout)
          throw new Error("Infinite loop detected");
      };
    }
    __export(module.exports, { HtmlTag: () => HtmlTag,HtmlTagHydration: () => HtmlTagHydration,SvelteComponent: () => SvelteComponent,SvelteComponentDev: () => SvelteComponentDev,SvelteComponentTyped: () => SvelteComponentTyped,SvelteElement: () => SvelteElement,action_destroyer: () => action_destroyer,add_attribute: () => add_attribute,add_classes: () => add_classes,add_flush_callback: () => add_flush_callback,add_location: () => add_location,add_render_callback: () => add_render_callback,add_resize_listener: () => add_resize_listener,add_styles: () => add_styles,add_transform: () => add_transform,afterUpdate: () => afterUpdate,append: () => append,append_dev: () => append_dev,append_empty_stylesheet: () => append_empty_stylesheet,append_hydration: () => append_hydration,append_hydration_dev: () => append_hydration_dev,append_styles: () => append_styles,assign: () => assign,attr: () => attr,attr_dev: () => attr_dev,attribute_to_object: () => attribute_to_object,beforeUpdate: () => beforeUpdate,bind: () => bind,binding_callbacks: () => binding_callbacks,blank_object: () => blank_object,bubble: () => bubble,check_outros: () => check_outros,children: () => children,claim_component: () => claim_component,claim_element: () => claim_element,claim_html_tag: () => claim_html_tag,claim_space: () => claim_space,claim_svg_element: () => claim_svg_element,claim_text: () => claim_text,clear_loops: () => clear_loops,component_subscribe: () => component_subscribe,compute_rest_props: () => compute_rest_props,compute_slots: () => compute_slots,construct_svelte_component: () => construct_svelte_component,construct_svelte_component_dev: () => construct_svelte_component_dev,createEventDispatcher: () => createEventDispatcher,create_animation: () => create_animation,create_bidirectional_transition: () => create_bidirectional_transition,create_component: () => create_component,create_in_transition: () => create_in_transition,create_out_transition: () => create_out_transition,create_slot: () => create_slot,create_ssr_component: () => create_ssr_component,current_component: () => current_component,custom_event: () => custom_event,dataset_dev: () => dataset_dev,debug: () => debug,destroy_block: () => destroy_block,destroy_component: () => destroy_component,destroy_each: () => destroy_each,detach: () => detach,detach_after_dev: () => detach_after_dev,detach_before_dev: () => detach_before_dev,detach_between_dev: () => detach_between_dev,detach_dev: () => detach_dev,dirty_components: () => dirty_components,dispatch_dev: () => dispatch_dev,each: () => each,element: () => element,element_is: () => element_is,empty: () => empty,end_hydrating: () => end_hydrating,escape: () => escape,escape_attribute_value: () => escape_attribute_value,escape_object: () => escape_object,exclude_internal_props: () => exclude_internal_props,fix_and_destroy_block: () => fix_and_destroy_block,fix_and_outro_and_destroy_block: () => fix_and_outro_and_destroy_block,fix_position: () => fix_position,flush: () => flush,getAllContexts: () => getAllContexts,getContext: () => getContext,get_all_dirty_from_scope: () => get_all_dirty_from_scope,get_binding_group_value: () => get_binding_group_value,get_current_component: () => get_current_component,get_custom_elements_slots: () => get_custom_elements_slots,get_root_for_style: () => get_root_for_style,get_slot_changes: () => get_slot_changes,get_spread_object: () => get_spread_object,get_spread_update: () => get_spread_update,get_store_value: () => get_store_value,globals: () => globals,group_outros: () => group_outros,handle_promise: () => handle_promise,hasContext: () => hasContext,has_prop: () => has_prop,head_selector: () => head_selector,identity: () => identity,init: () => init,insert: () => insert,insert_dev: () => insert_dev,insert_hydration: () => insert_hydration,insert_hydration_dev: () => insert_hydration_dev,intros: () => intros,invalid_attribute_name_character: () => invalid_attribute_name_character,is_client: () => is_client,is_crossorigin: () => is_crossorigin,is_empty: () => is_empty,is_function: () => is_function,is_promise: () => is_promise,is_void: () => is_void,listen: () => listen,listen_dev: () => listen_dev,loop: () => loop,loop_guard: () => loop_guard,merge_ssr_styles: () => merge_ssr_styles,missing_component: () => missing_component,mount_component: () => mount_component,noop: () => noop,not_equal: () => not_equal,now: () => now,null_to_empty: () => null_to_empty,object_without_properties: () => object_without_properties,onDestroy: () => onDestroy,onMount: () => onMount,once: () => once,outro_and_destroy_block: () => outro_and_destroy_block,prevent_default: () => prevent_default,prop_dev: () => prop_dev,query_selector_all: () => query_selector_all,raf: () => raf,run: () => run,run_all: () => run_all,safe_not_equal: () => safe_not_equal,schedule_update: () => schedule_update,select_multiple_value: () => select_multiple_value,select_option: () => select_option,select_options: () => select_options,select_value: () => select_value,self: () => self,setContext: () => setContext,set_attributes: () => set_attributes,set_current_component: () => set_current_component,set_custom_element_data: () => set_custom_element_data,set_custom_element_data_map: () => set_custom_element_data_map,set_data: () => set_data,set_data_dev: () => set_data_dev,set_input_type: () => set_input_type,set_input_value: () => set_input_value,set_now: () => set_now,set_raf: () => set_raf,set_store_value: () => set_store_value,set_style: () => set_style,set_svg_attributes: () => set_svg_attributes,space: () => space,spread: () => spread,src_url_equal: () => src_url_equal,start_hydrating: () => start_hydrating,stop_propagation: () => stop_propagation,subscribe: () => subscribe,svg_element: () => svg_element,text: () => text,tick: () => tick,time_ranges_to_array: () => time_ranges_to_array,to_number: () => to_number,toggle_class: () => toggle_class,transition_in: () => transition_in,transition_out: () => transition_out,trusted: () => trusted,update_await_block_branch: () => update_await_block_branch,update_keyed_each: () => update_keyed_each,update_slot: () => update_slot,update_slot_base: () => update_slot_base,validate_component: () => validate_component,validate_dynamic_element: () => validate_dynamic_element,validate_each_argument: () => validate_each_argument,validate_each_keys: () => validate_each_keys,validate_slots: () => validate_slots,validate_store: () => validate_store,validate_void_dynamic_element: () => validate_void_dynamic_element,xlink_attr: () => xlink_attr});
  }
}["svelte/internal/index.mjs"]);


// svelte/index.mjs
export var $f6e9706 = $$m({
  "svelte/index.mjs": (module, exports) => {
    $$lzy(module.exports,$7b66f1cf,{SvelteComponent:"SvelteComponentDev",SvelteComponentTyped:"SvelteComponentTyped",afterUpdate:"afterUpdate",beforeUpdate:"beforeUpdate",createEventDispatcher:"createEventDispatcher",getAllContexts:"getAllContexts",getContext:"getContext",hasContext:"hasContext",onDestroy:"onDestroy",onMount:"onMount",setContext:"setContext",tick:"tick"});
  }
}["svelte/index.mjs"]);


// highlight.js/lib/languages/lua.js
export var $3bf01380 = $$m({
  "highlight.js/lib/languages/lua.js": (module, exports) => {
    function lua(hljs) {
      const OPENING_LONG_BRACKET = "\\[=*\\[";
      const CLOSING_LONG_BRACKET = "\\]=*\\]";
      const LONG_BRACKETS = {
        begin: OPENING_LONG_BRACKET,
        end: CLOSING_LONG_BRACKET,
        contains: ["self"]
      };
      const COMMENTS = [
        hljs.COMMENT("--(?!" + OPENING_LONG_BRACKET + ")", "$"),
        hljs.COMMENT("--" + OPENING_LONG_BRACKET, CLOSING_LONG_BRACKET, {
          contains: [LONG_BRACKETS],
          relevance: 10
        })
      ];
      return {
        name: "Lua",
        keywords: {
          $pattern: hljs.UNDERSCORE_IDENT_RE,
          literal: "true false nil",
          keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
          built_in: "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
        },
        contains: COMMENTS.concat([
          {
            className: "function",
            beginKeywords: "function",
            end: "\\)",
            contains: [
              hljs.inherit(hljs.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }),
              {
                className: "params",
                begin: "\\(",
                endsWithParent: true,
                contains: COMMENTS
              }
            ].concat(COMMENTS)
          },
          hljs.C_NUMBER_MODE,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          {
            className: "string",
            begin: OPENING_LONG_BRACKET,
            end: CLOSING_LONG_BRACKET,
            contains: [LONG_BRACKETS],
            relevance: 5
          }
        ])
      };
    }
    module.exports = lua;
  }
}["highlight.js/lib/languages/lua.js"]);


// highlight.js/lib/languages/xml.js
export var $f1b72970 = $$m({
  "highlight.js/lib/languages/xml.js": (module, exports) => {
    function xml(hljs) {
      const regex = hljs.regex;
      const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
      const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
      const XML_ENTITIES = {
        className: "symbol",
        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
      };
      const XML_META_KEYWORDS = {
        begin: /\s/,
        contains: [
          {
            className: "keyword",
            begin: /#?[a-z_][a-z1-9_-]+/,
            illegal: /\n/
          }
        ]
      };
      const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
        begin: /\(/,
        end: /\)/
      });
      const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
      const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
      const TAG_INTERNALS = {
        endsWithParent: true,
        illegal: /</,
        relevance: 0,
        contains: [
          {
            className: "attr",
            begin: XML_IDENT_RE,
            relevance: 0
          },
          {
            begin: /=\s*/,
            relevance: 0,
            contains: [
              {
                className: "string",
                endsParent: true,
                variants: [
                  {
                    begin: /"/,
                    end: /"/,
                    contains: [XML_ENTITIES]
                  },
                  {
                    begin: /'/,
                    end: /'/,
                    contains: [XML_ENTITIES]
                  },
                  { begin: /[^\s"'=<>`]+/ }
                ]
              }
            ]
          }
        ]
      };
      return {
        name: "HTML, XML",
        aliases: [
          "html",
          "xhtml",
          "rss",
          "atom",
          "xjb",
          "xsd",
          "xsl",
          "plist",
          "wsf",
          "svg"
        ],
        case_insensitive: true,
        unicodeRegex: true,
        contains: [
          {
            className: "meta",
            begin: /<![a-z]/,
            end: />/,
            relevance: 10,
            contains: [
              XML_META_KEYWORDS,
              QUOTE_META_STRING_MODE,
              APOS_META_STRING_MODE,
              XML_META_PAR_KEYWORDS,
              {
                begin: /\[/,
                end: /\]/,
                contains: [
                  {
                    className: "meta",
                    begin: /<![a-z]/,
                    end: />/,
                    contains: [
                      XML_META_KEYWORDS,
                      XML_META_PAR_KEYWORDS,
                      QUOTE_META_STRING_MODE,
                      APOS_META_STRING_MODE
                    ]
                  }
                ]
              }
            ]
          },
          hljs.COMMENT(/<!--/, /-->/, { relevance: 10 }),
          {
            begin: /<!\[CDATA\[/,
            end: /\]\]>/,
            relevance: 10
          },
          XML_ENTITIES,
          {
            className: "meta",
            end: /\?>/,
            variants: [
              {
                begin: /<\?xml/,
                relevance: 10,
                contains: [
                  QUOTE_META_STRING_MODE
                ]
              },
              {
                begin: /<\?[a-z][a-z0-9]+/
              }
            ]
          },
          {
            className: "tag",
            begin: /<style(?=\s|>)/,
            end: />/,
            keywords: { name: "style" },
            contains: [TAG_INTERNALS],
            starts: {
              end: /<\/style>/,
              returnEnd: true,
              subLanguage: [
                "css",
                "xml"
              ]
            }
          },
          {
            className: "tag",
            begin: /<script(?=\s|>)/,
            end: />/,
            keywords: { name: "script" },
            contains: [TAG_INTERNALS],
            starts: {
              end: /<\/script>/,
              returnEnd: true,
              subLanguage: [
                "javascript",
                "handlebars",
                "xml"
              ]
            }
          },
          {
            className: "tag",
            begin: /<>|<\/>/
          },
          {
            className: "tag",
            begin: regex.concat(/</, regex.lookahead(regex.concat(TAG_NAME_RE, regex.either(/\/>/, />/, /\s/)))),
            end: /\/?>/,
            contains: [
              {
                className: "name",
                begin: TAG_NAME_RE,
                relevance: 0,
                starts: TAG_INTERNALS
              }
            ]
          },
          {
            className: "tag",
            begin: regex.concat(/<\//, regex.lookahead(regex.concat(TAG_NAME_RE, />/))),
            contains: [
              {
                className: "name",
                begin: TAG_NAME_RE,
                relevance: 0
              },
              {
                begin: />/,
                relevance: 0,
                endsParent: true
              }
            ]
          }
        ]
      };
    }
    module.exports = xml;
  }
}["highlight.js/lib/languages/xml.js"]);


// highlight.js/lib/languages/bash.js
export var $dd7fa6f7 = $$m({
  "highlight.js/lib/languages/bash.js": (module, exports) => {
    function bash(hljs) {
      const regex = hljs.regex;
      const VAR = {};
      const BRACED_VAR = {
        begin: /\$\{/,
        end: /\}/,
        contains: [
          "self",
          {
            begin: /:-/,
            contains: [VAR]
          }
        ]
      };
      Object.assign(VAR, {
        className: "variable",
        variants: [
          { begin: regex.concat(/\$[\w\d#@][\w\d_]*/, `(?![\\w\\d])(?![\$])`) },
          BRACED_VAR
        ]
      });
      const SUBST = {
        className: "subst",
        begin: /\$\(/,
        end: /\)/,
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      const HERE_DOC = {
        begin: /<<-?\s*(?=\w+)/,
        starts: { contains: [
          hljs.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            className: "string"
          })
        ] }
      };
      const QUOTE_STRING = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          VAR,
          SUBST
        ]
      };
      SUBST.contains.push(QUOTE_STRING);
      const ESCAPED_QUOTE = {
        className: "",
        begin: /\\"/
      };
      const APOS_STRING = {
        className: "string",
        begin: /'/,
        end: /'/
      };
      const ARITHMETIC = {
        begin: /\$?\(\(/,
        end: /\)\)/,
        contains: [
          {
            begin: /\d+#[0-9a-f]+/,
            className: "number"
          },
          hljs.NUMBER_MODE,
          VAR
        ]
      };
      const SH_LIKE_SHELLS = [
        "fish",
        "bash",
        "zsh",
        "sh",
        "csh",
        "ksh",
        "tcsh",
        "dash",
        "scsh"
      ];
      const KNOWN_SHEBANG = hljs.SHEBANG({
        binary: `(${SH_LIKE_SHELLS.join("|")})`,
        relevance: 10
      });
      const FUNCTION = {
        className: "function",
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: true,
        contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
        relevance: 0
      };
      const KEYWORDS = [
        "if",
        "then",
        "else",
        "elif",
        "fi",
        "for",
        "while",
        "in",
        "do",
        "done",
        "case",
        "esac",
        "function"
      ];
      const LITERALS = [
        "true",
        "false"
      ];
      const PATH_MODE = { match: /(\/[a-z._-]+)+/ };
      const SHELL_BUILT_INS = [
        "break",
        "cd",
        "continue",
        "eval",
        "exec",
        "exit",
        "export",
        "getopts",
        "hash",
        "pwd",
        "readonly",
        "return",
        "shift",
        "test",
        "times",
        "trap",
        "umask",
        "unset"
      ];
      const BASH_BUILT_INS = [
        "alias",
        "bind",
        "builtin",
        "caller",
        "command",
        "declare",
        "echo",
        "enable",
        "help",
        "let",
        "local",
        "logout",
        "mapfile",
        "printf",
        "read",
        "readarray",
        "source",
        "type",
        "typeset",
        "ulimit",
        "unalias"
      ];
      const ZSH_BUILT_INS = [
        "autoload",
        "bg",
        "bindkey",
        "bye",
        "cap",
        "chdir",
        "clone",
        "comparguments",
        "compcall",
        "compctl",
        "compdescribe",
        "compfiles",
        "compgroups",
        "compquote",
        "comptags",
        "comptry",
        "compvalues",
        "dirs",
        "disable",
        "disown",
        "echotc",
        "echoti",
        "emulate",
        "fc",
        "fg",
        "float",
        "functions",
        "getcap",
        "getln",
        "history",
        "integer",
        "jobs",
        "kill",
        "limit",
        "log",
        "noglob",
        "popd",
        "print",
        "pushd",
        "pushln",
        "rehash",
        "sched",
        "setcap",
        "setopt",
        "stat",
        "suspend",
        "ttyctl",
        "unfunction",
        "unhash",
        "unlimit",
        "unsetopt",
        "vared",
        "wait",
        "whence",
        "where",
        "which",
        "zcompile",
        "zformat",
        "zftp",
        "zle",
        "zmodload",
        "zparseopts",
        "zprof",
        "zpty",
        "zregexparse",
        "zsocket",
        "zstyle",
        "ztcp"
      ];
      const GNU_CORE_UTILS = [
        "chcon",
        "chgrp",
        "chown",
        "chmod",
        "cp",
        "dd",
        "df",
        "dir",
        "dircolors",
        "ln",
        "ls",
        "mkdir",
        "mkfifo",
        "mknod",
        "mktemp",
        "mv",
        "realpath",
        "rm",
        "rmdir",
        "shred",
        "sync",
        "touch",
        "truncate",
        "vdir",
        "b2sum",
        "base32",
        "base64",
        "cat",
        "cksum",
        "comm",
        "csplit",
        "cut",
        "expand",
        "fmt",
        "fold",
        "head",
        "join",
        "md5sum",
        "nl",
        "numfmt",
        "od",
        "paste",
        "ptx",
        "pr",
        "sha1sum",
        "sha224sum",
        "sha256sum",
        "sha384sum",
        "sha512sum",
        "shuf",
        "sort",
        "split",
        "sum",
        "tac",
        "tail",
        "tr",
        "tsort",
        "unexpand",
        "uniq",
        "wc",
        "arch",
        "basename",
        "chroot",
        "date",
        "dirname",
        "du",
        "echo",
        "env",
        "expr",
        "factor",
        "groups",
        "hostid",
        "id",
        "link",
        "logname",
        "nice",
        "nohup",
        "nproc",
        "pathchk",
        "pinky",
        "printenv",
        "printf",
        "pwd",
        "readlink",
        "runcon",
        "seq",
        "sleep",
        "stat",
        "stdbuf",
        "stty",
        "tee",
        "test",
        "timeout",
        "tty",
        "uname",
        "unlink",
        "uptime",
        "users",
        "who",
        "whoami",
        "yes"
      ];
      return {
        name: "Bash",
        aliases: ["sh"],
        keywords: {
          $pattern: /\b[a-z][a-z0-9._-]+\b/,
          keyword: KEYWORDS,
          literal: LITERALS,
          built_in: [
            ...SHELL_BUILT_INS,
            ...BASH_BUILT_INS,
            "set",
            "shopt",
            ...ZSH_BUILT_INS,
            ...GNU_CORE_UTILS
          ]
        },
        contains: [
          KNOWN_SHEBANG,
          hljs.SHEBANG(),
          FUNCTION,
          ARITHMETIC,
          hljs.HASH_COMMENT_MODE,
          HERE_DOC,
          PATH_MODE,
          QUOTE_STRING,
          ESCAPED_QUOTE,
          APOS_STRING,
          VAR
        ]
      };
    }
    module.exports = bash;
  }
}["highlight.js/lib/languages/bash.js"]);


// highlight.js/lib/languages/c.js
export var $ebc50c6c = $$m({
  "highlight.js/lib/languages/c.js": (module, exports) => {
    function c(hljs) {
      const regex = hljs.regex;
      const C_LINE_COMMENT_MODE = hljs.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] });
      const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
      const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
      const TEMPLATE_ARGUMENT_RE = "<[^<>]+>";
      const FUNCTION_TYPE_RE = "(" + DECLTYPE_AUTO_RE + "|" + regex.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex.optional(TEMPLATE_ARGUMENT_RE) + ")";
      const TYPES = {
        className: "type",
        variants: [
          { begin: "\\b[a-z\\d_]*_t\\b" },
          { match: /\batomic_[a-z]{3,6}\b/ }
        ]
      };
      const CHARACTER_ESCAPES = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)";
      const STRINGS = {
        className: "string",
        variants: [
          {
            begin: '(u8?|U|L)?"',
            end: '"',
            illegal: "\\n",
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            begin: "(u8?|U|L)?\'(" + CHARACTER_ESCAPES + "|.)",
            end: "\'",
            illegal: "."
          },
          hljs.END_SAME_AS_BEGIN({
            begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
            end: /\)([^()\\ ]{0,16})"/
          })
        ]
      };
      const NUMBERS = {
        className: "number",
        variants: [
          { begin: "\\b(0b[01\']+)" },
          { begin: "(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)" },
          { begin: "(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)" }
        ],
        relevance: 0
      };
      const PREPROCESSOR = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
        contains: [
          {
            begin: /\\\n/,
            relevance: 0
          },
          hljs.inherit(STRINGS, { className: "string" }),
          {
            className: "string",
            begin: /<.*?>/
          },
          C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      };
      const TITLE_MODE = {
        className: "title",
        begin: regex.optional(NAMESPACE_RE) + hljs.IDENT_RE,
        relevance: 0
      };
      const FUNCTION_TITLE = regex.optional(NAMESPACE_RE) + hljs.IDENT_RE + "\\s*\\(";
      const C_KEYWORDS = [
        "asm",
        "auto",
        "break",
        "case",
        "continue",
        "default",
        "do",
        "else",
        "enum",
        "extern",
        "for",
        "fortran",
        "goto",
        "if",
        "inline",
        "register",
        "restrict",
        "return",
        "sizeof",
        "struct",
        "switch",
        "typedef",
        "union",
        "volatile",
        "while",
        "_Alignas",
        "_Alignof",
        "_Atomic",
        "_Generic",
        "_Noreturn",
        "_Static_assert",
        "_Thread_local",
        "alignas",
        "alignof",
        "noreturn",
        "static_assert",
        "thread_local",
        "_Pragma"
      ];
      const C_TYPES = [
        "float",
        "double",
        "signed",
        "unsigned",
        "int",
        "short",
        "long",
        "char",
        "void",
        "_Bool",
        "_Complex",
        "_Imaginary",
        "_Decimal32",
        "_Decimal64",
        "_Decimal128",
        "const",
        "static",
        "complex",
        "bool",
        "imaginary"
      ];
      const KEYWORDS = {
        keyword: C_KEYWORDS,
        type: C_TYPES,
        literal: "true false NULL",
        built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
      };
      const EXPRESSION_CONTAINS = [
        PREPROCESSOR,
        TYPES,
        C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        NUMBERS,
        STRINGS
      ];
      const EXPRESSION_CONTEXT = {
        variants: [
          {
            begin: /=/,
            end: /;/
          },
          {
            begin: /\(/,
            end: /\)/
          },
          {
            beginKeywords: "new throw return else",
            end: /;/
          }
        ],
        keywords: KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat([
          {
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS,
            contains: EXPRESSION_CONTAINS.concat(["self"]),
            relevance: 0
          }
        ]),
        relevance: 0
      };
      const FUNCTION_DECLARATION = {
        begin: "(" + FUNCTION_TYPE_RE + "[\\*&\\s]+)+" + FUNCTION_TITLE,
        returnBegin: true,
        end: /[{;=]/,
        excludeEnd: true,
        keywords: KEYWORDS,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
          {
            begin: DECLTYPE_AUTO_RE,
            keywords: KEYWORDS,
            relevance: 0
          },
          {
            begin: FUNCTION_TITLE,
            returnBegin: true,
            contains: [hljs.inherit(TITLE_MODE, { className: "title.function" })],
            relevance: 0
          },
          {
            relevance: 0,
            match: /,/
          },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS,
            relevance: 0,
            contains: [
              C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRINGS,
              NUMBERS,
              TYPES,
              {
                begin: /\(/,
                end: /\)/,
                keywords: KEYWORDS,
                relevance: 0,
                contains: [
                  "self",
                  C_LINE_COMMENT_MODE,
                  hljs.C_BLOCK_COMMENT_MODE,
                  STRINGS,
                  NUMBERS,
                  TYPES
                ]
              }
            ]
          },
          TYPES,
          C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          PREPROCESSOR
        ]
      };
      return {
        name: "C",
        aliases: ["h"],
        keywords: KEYWORDS,
        disableAutodetect: true,
        illegal: "</",
        contains: [].concat(EXPRESSION_CONTEXT, FUNCTION_DECLARATION, EXPRESSION_CONTAINS, [
          PREPROCESSOR,
          {
            begin: hljs.IDENT_RE + "::",
            keywords: KEYWORDS
          },
          {
            className: "class",
            beginKeywords: "enum class struct union",
            end: /[{;:<>=]/,
            contains: [
              { beginKeywords: "final class struct" },
              hljs.TITLE_MODE
            ]
          }
        ]),
        exports: {
          preprocessor: PREPROCESSOR,
          strings: STRINGS,
          keywords: KEYWORDS
        }
      };
    }
    module.exports = c;
  }
}["highlight.js/lib/languages/c.js"]);


// highlight.js/lib/languages/cpp.js
export var $e328ecb2 = $$m({
  "highlight.js/lib/languages/cpp.js": (module, exports) => {
    function cpp(hljs) {
      const regex = hljs.regex;
      const C_LINE_COMMENT_MODE = hljs.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] });
      const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
      const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
      const TEMPLATE_ARGUMENT_RE = "<[^<>]+>";
      const FUNCTION_TYPE_RE = "(?!struct)(" + DECLTYPE_AUTO_RE + "|" + regex.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex.optional(TEMPLATE_ARGUMENT_RE) + ")";
      const CPP_PRIMITIVE_TYPES = {
        className: "type",
        begin: "\\b[a-z\\d_]*_t\\b"
      };
      const CHARACTER_ESCAPES = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)";
      const STRINGS = {
        className: "string",
        variants: [
          {
            begin: '(u8?|U|L)?"',
            end: '"',
            illegal: "\\n",
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            begin: "(u8?|U|L)?\'(" + CHARACTER_ESCAPES + "|.)",
            end: "\'",
            illegal: "."
          },
          hljs.END_SAME_AS_BEGIN({
            begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
            end: /\)([^()\\ ]{0,16})"/
          })
        ]
      };
      const NUMBERS = {
        className: "number",
        variants: [
          { begin: "\\b(0b[01\']+)" },
          { begin: "(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)" },
          { begin: "(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)" }
        ],
        relevance: 0
      };
      const PREPROCESSOR = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
        contains: [
          {
            begin: /\\\n/,
            relevance: 0
          },
          hljs.inherit(STRINGS, { className: "string" }),
          {
            className: "string",
            begin: /<.*?>/
          },
          C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      };
      const TITLE_MODE = {
        className: "title",
        begin: regex.optional(NAMESPACE_RE) + hljs.IDENT_RE,
        relevance: 0
      };
      const FUNCTION_TITLE = regex.optional(NAMESPACE_RE) + hljs.IDENT_RE + "\\s*\\(";
      const RESERVED_KEYWORDS = [
        "alignas",
        "alignof",
        "and",
        "and_eq",
        "asm",
        "atomic_cancel",
        "atomic_commit",
        "atomic_noexcept",
        "auto",
        "bitand",
        "bitor",
        "break",
        "case",
        "catch",
        "class",
        "co_await",
        "co_return",
        "co_yield",
        "compl",
        "concept",
        "const_cast|10",
        "consteval",
        "constexpr",
        "constinit",
        "continue",
        "decltype",
        "default",
        "delete",
        "do",
        "dynamic_cast|10",
        "else",
        "enum",
        "explicit",
        "export",
        "extern",
        "false",
        "final",
        "for",
        "friend",
        "goto",
        "if",
        "import",
        "inline",
        "module",
        "mutable",
        "namespace",
        "new",
        "noexcept",
        "not",
        "not_eq",
        "nullptr",
        "operator",
        "or",
        "or_eq",
        "override",
        "private",
        "protected",
        "public",
        "reflexpr",
        "register",
        "reinterpret_cast|10",
        "requires",
        "return",
        "sizeof",
        "static_assert",
        "static_cast|10",
        "struct",
        "switch",
        "synchronized",
        "template",
        "this",
        "thread_local",
        "throw",
        "transaction_safe",
        "transaction_safe_dynamic",
        "true",
        "try",
        "typedef",
        "typeid",
        "typename",
        "union",
        "using",
        "virtual",
        "volatile",
        "while",
        "xor",
        "xor_eq"
      ];
      const RESERVED_TYPES = [
        "bool",
        "char",
        "char16_t",
        "char32_t",
        "char8_t",
        "double",
        "float",
        "int",
        "long",
        "short",
        "void",
        "wchar_t",
        "unsigned",
        "signed",
        "const",
        "static"
      ];
      const TYPE_HINTS = [
        "any",
        "auto_ptr",
        "barrier",
        "binary_semaphore",
        "bitset",
        "complex",
        "condition_variable",
        "condition_variable_any",
        "counting_semaphore",
        "deque",
        "false_type",
        "future",
        "imaginary",
        "initializer_list",
        "istringstream",
        "jthread",
        "latch",
        "lock_guard",
        "multimap",
        "multiset",
        "mutex",
        "optional",
        "ostringstream",
        "packaged_task",
        "pair",
        "promise",
        "priority_queue",
        "queue",
        "recursive_mutex",
        "recursive_timed_mutex",
        "scoped_lock",
        "set",
        "shared_future",
        "shared_lock",
        "shared_mutex",
        "shared_timed_mutex",
        "shared_ptr",
        "stack",
        "string_view",
        "stringstream",
        "timed_mutex",
        "thread",
        "true_type",
        "tuple",
        "unique_lock",
        "unique_ptr",
        "unordered_map",
        "unordered_multimap",
        "unordered_multiset",
        "unordered_set",
        "variant",
        "vector",
        "weak_ptr",
        "wstring",
        "wstring_view"
      ];
      const FUNCTION_HINTS = [
        "abort",
        "abs",
        "acos",
        "apply",
        "as_const",
        "asin",
        "atan",
        "atan2",
        "calloc",
        "ceil",
        "cerr",
        "cin",
        "clog",
        "cos",
        "cosh",
        "cout",
        "declval",
        "endl",
        "exchange",
        "exit",
        "exp",
        "fabs",
        "floor",
        "fmod",
        "forward",
        "fprintf",
        "fputs",
        "free",
        "frexp",
        "fscanf",
        "future",
        "invoke",
        "isalnum",
        "isalpha",
        "iscntrl",
        "isdigit",
        "isgraph",
        "islower",
        "isprint",
        "ispunct",
        "isspace",
        "isupper",
        "isxdigit",
        "labs",
        "launder",
        "ldexp",
        "log",
        "log10",
        "make_pair",
        "make_shared",
        "make_shared_for_overwrite",
        "make_tuple",
        "make_unique",
        "malloc",
        "memchr",
        "memcmp",
        "memcpy",
        "memset",
        "modf",
        "move",
        "pow",
        "printf",
        "putchar",
        "puts",
        "realloc",
        "scanf",
        "sin",
        "sinh",
        "snprintf",
        "sprintf",
        "sqrt",
        "sscanf",
        "std",
        "stderr",
        "stdin",
        "stdout",
        "strcat",
        "strchr",
        "strcmp",
        "strcpy",
        "strcspn",
        "strlen",
        "strncat",
        "strncmp",
        "strncpy",
        "strpbrk",
        "strrchr",
        "strspn",
        "strstr",
        "swap",
        "tan",
        "tanh",
        "terminate",
        "to_underlying",
        "tolower",
        "toupper",
        "vfprintf",
        "visit",
        "vprintf",
        "vsprintf"
      ];
      const LITERALS = [
        "NULL",
        "false",
        "nullopt",
        "nullptr",
        "true"
      ];
      const BUILT_IN = ["_Pragma"];
      const CPP_KEYWORDS = {
        type: RESERVED_TYPES,
        keyword: RESERVED_KEYWORDS,
        literal: LITERALS,
        built_in: BUILT_IN,
        _type_hints: TYPE_HINTS
      };
      const FUNCTION_DISPATCH = {
        className: "function.dispatch",
        relevance: 0,
        keywords: {
          _hint: FUNCTION_HINTS
        },
        begin: regex.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, hljs.IDENT_RE, regex.lookahead(/(<[^<>]+>|)\s*\(/))
      };
      const EXPRESSION_CONTAINS = [
        FUNCTION_DISPATCH,
        PREPROCESSOR,
        CPP_PRIMITIVE_TYPES,
        C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        NUMBERS,
        STRINGS
      ];
      const EXPRESSION_CONTEXT = {
        variants: [
          {
            begin: /=/,
            end: /;/
          },
          {
            begin: /\(/,
            end: /\)/
          },
          {
            beginKeywords: "new throw return else",
            end: /;/
          }
        ],
        keywords: CPP_KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat([
          {
            begin: /\(/,
            end: /\)/,
            keywords: CPP_KEYWORDS,
            contains: EXPRESSION_CONTAINS.concat(["self"]),
            relevance: 0
          }
        ]),
        relevance: 0
      };
      const FUNCTION_DECLARATION = {
        className: "function",
        begin: "(" + FUNCTION_TYPE_RE + "[\\*&\\s]+)+" + FUNCTION_TITLE,
        returnBegin: true,
        end: /[{;=]/,
        excludeEnd: true,
        keywords: CPP_KEYWORDS,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
          {
            begin: DECLTYPE_AUTO_RE,
            keywords: CPP_KEYWORDS,
            relevance: 0
          },
          {
            begin: FUNCTION_TITLE,
            returnBegin: true,
            contains: [TITLE_MODE],
            relevance: 0
          },
          {
            begin: /::/,
            relevance: 0
          },
          {
            begin: /:/,
            endsWithParent: true,
            contains: [
              STRINGS,
              NUMBERS
            ]
          },
          {
            relevance: 0,
            match: /,/
          },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: CPP_KEYWORDS,
            relevance: 0,
            contains: [
              C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRINGS,
              NUMBERS,
              CPP_PRIMITIVE_TYPES,
              {
                begin: /\(/,
                end: /\)/,
                keywords: CPP_KEYWORDS,
                relevance: 0,
                contains: [
                  "self",
                  C_LINE_COMMENT_MODE,
                  hljs.C_BLOCK_COMMENT_MODE,
                  STRINGS,
                  NUMBERS,
                  CPP_PRIMITIVE_TYPES
                ]
              }
            ]
          },
          CPP_PRIMITIVE_TYPES,
          C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          PREPROCESSOR
        ]
      };
      return {
        name: "C++",
        aliases: [
          "cc",
          "c++",
          "h++",
          "hpp",
          "hh",
          "hxx",
          "cxx"
        ],
        keywords: CPP_KEYWORDS,
        illegal: "</",
        classNameAliases: { "function.dispatch": "built_in" },
        contains: [].concat(EXPRESSION_CONTEXT, FUNCTION_DECLARATION, FUNCTION_DISPATCH, EXPRESSION_CONTAINS, [
          PREPROCESSOR,
          {
            begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
            end: ">",
            keywords: CPP_KEYWORDS,
            contains: [
              "self",
              CPP_PRIMITIVE_TYPES
            ]
          },
          {
            begin: hljs.IDENT_RE + "::",
            keywords: CPP_KEYWORDS
          },
          {
            match: [
              /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
              /\s+/,
              /\w+/
            ],
            className: {
              1: "keyword",
              3: "title.class"
            }
          }
        ])
      };
    }
    module.exports = cpp;
  }
}["highlight.js/lib/languages/cpp.js"]);


// highlight.js/lib/languages/csharp.js
export var $618cc943 = $$m({
  "highlight.js/lib/languages/csharp.js": (module, exports) => {
    function csharp(hljs) {
      const BUILT_IN_KEYWORDS = [
        "bool",
        "byte",
        "char",
        "decimal",
        "delegate",
        "double",
        "dynamic",
        "enum",
        "float",
        "int",
        "long",
        "nint",
        "nuint",
        "object",
        "sbyte",
        "short",
        "string",
        "ulong",
        "uint",
        "ushort"
      ];
      const FUNCTION_MODIFIERS = [
        "public",
        "private",
        "protected",
        "static",
        "internal",
        "protected",
        "abstract",
        "async",
        "extern",
        "override",
        "unsafe",
        "virtual",
        "new",
        "sealed",
        "partial"
      ];
      const LITERAL_KEYWORDS = [
        "default",
        "false",
        "null",
        "true"
      ];
      const NORMAL_KEYWORDS = [
        "abstract",
        "as",
        "base",
        "break",
        "case",
        "catch",
        "class",
        "const",
        "continue",
        "do",
        "else",
        "event",
        "explicit",
        "extern",
        "finally",
        "fixed",
        "for",
        "foreach",
        "goto",
        "if",
        "implicit",
        "in",
        "interface",
        "internal",
        "is",
        "lock",
        "namespace",
        "new",
        "operator",
        "out",
        "override",
        "params",
        "private",
        "protected",
        "public",
        "readonly",
        "record",
        "ref",
        "return",
        "scoped",
        "sealed",
        "sizeof",
        "stackalloc",
        "static",
        "struct",
        "switch",
        "this",
        "throw",
        "try",
        "typeof",
        "unchecked",
        "unsafe",
        "using",
        "virtual",
        "void",
        "volatile",
        "while"
      ];
      const CONTEXTUAL_KEYWORDS = [
        "add",
        "alias",
        "and",
        "ascending",
        "async",
        "await",
        "by",
        "descending",
        "equals",
        "from",
        "get",
        "global",
        "group",
        "init",
        "into",
        "join",
        "let",
        "nameof",
        "not",
        "notnull",
        "on",
        "or",
        "orderby",
        "partial",
        "remove",
        "select",
        "set",
        "unmanaged",
        "value|0",
        "var",
        "when",
        "where",
        "with",
        "yield"
      ];
      const KEYWORDS = {
        keyword: NORMAL_KEYWORDS.concat(CONTEXTUAL_KEYWORDS),
        built_in: BUILT_IN_KEYWORDS,
        literal: LITERAL_KEYWORDS
      };
      const TITLE_MODE = hljs.inherit(hljs.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" });
      const NUMBERS = {
        className: "number",
        variants: [
          { begin: "\\b(0b[01\']+)" },
          { begin: "(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)(u|U|l|L|ul|UL|f|F|b|B)" },
          { begin: "(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)" }
        ],
        relevance: 0
      };
      const VERBATIM_STRING = {
        className: "string",
        begin: '@"',
        end: '"',
        contains: [{ begin: '""' }]
      };
      const VERBATIM_STRING_NO_LF = hljs.inherit(VERBATIM_STRING, { illegal: /\n/ });
      const SUBST = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS
      };
      const SUBST_NO_LF = hljs.inherit(SUBST, { illegal: /\n/ });
      const INTERPOLATED_STRING = {
        className: "string",
        begin: /\$"/,
        end: '"',
        illegal: /\n/,
        contains: [
          { begin: /\{\{/ },
          { begin: /\}\}/ },
          hljs.BACKSLASH_ESCAPE,
          SUBST_NO_LF
        ]
      };
      const INTERPOLATED_VERBATIM_STRING = {
        className: "string",
        begin: /\$@"/,
        end: '"',
        contains: [
          { begin: /\{\{/ },
          { begin: /\}\}/ },
          { begin: '""' },
          SUBST
        ]
      };
      const INTERPOLATED_VERBATIM_STRING_NO_LF = hljs.inherit(INTERPOLATED_VERBATIM_STRING, {
        illegal: /\n/,
        contains: [
          { begin: /\{\{/ },
          { begin: /\}\}/ },
          { begin: '""' },
          SUBST_NO_LF
        ]
      });
      SUBST.contains = [
        INTERPOLATED_VERBATIM_STRING,
        INTERPOLATED_STRING,
        VERBATIM_STRING,
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        NUMBERS,
        hljs.C_BLOCK_COMMENT_MODE
      ];
      SUBST_NO_LF.contains = [
        INTERPOLATED_VERBATIM_STRING_NO_LF,
        INTERPOLATED_STRING,
        VERBATIM_STRING_NO_LF,
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        NUMBERS,
        hljs.inherit(hljs.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
      ];
      const STRING = { variants: [
        INTERPOLATED_VERBATIM_STRING,
        INTERPOLATED_STRING,
        VERBATIM_STRING,
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE
      ] };
      const GENERIC_MODIFIER = {
        begin: "<",
        end: ">",
        contains: [
          { beginKeywords: "in out" },
          TITLE_MODE
        ]
      };
      const TYPE_IDENT_RE = hljs.IDENT_RE + "(<" + hljs.IDENT_RE + "(\\s*,\\s*" + hljs.IDENT_RE + ")*>)?(\\[\\])?";
      const AT_IDENTIFIER = {
        begin: "@" + hljs.IDENT_RE,
        relevance: 0
      };
      return {
        name: "C#",
        aliases: [
          "cs",
          "c#"
        ],
        keywords: KEYWORDS,
        illegal: /::/,
        contains: [
          hljs.COMMENT("///", "$", {
            returnBegin: true,
            contains: [
              {
                className: "doctag",
                variants: [
                  {
                    begin: "///",
                    relevance: 0
                  },
                  { begin: "<!--|-->" },
                  {
                    begin: "</?",
                    end: ">"
                  }
                ]
              }
            ]
          }),
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: "meta",
            begin: "#",
            end: "$",
            keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
          },
          STRING,
          NUMBERS,
          {
            beginKeywords: "class interface",
            relevance: 0,
            end: /[{;=]/,
            illegal: /[^\s:,]/,
            contains: [
              { beginKeywords: "where class" },
              TITLE_MODE,
              GENERIC_MODIFIER,
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          {
            beginKeywords: "namespace",
            relevance: 0,
            end: /[{;=]/,
            illegal: /[^\s:]/,
            contains: [
              TITLE_MODE,
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          {
            beginKeywords: "record",
            relevance: 0,
            end: /[{;=]/,
            illegal: /[^\s:]/,
            contains: [
              TITLE_MODE,
              GENERIC_MODIFIER,
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          {
            className: "meta",
            begin: "^\\s*\\[(?=[\\w])",
            excludeBegin: true,
            end: "\\]",
            excludeEnd: true,
            contains: [
              {
                className: "string",
                begin: /"/,
                end: /"/
              }
            ]
          },
          {
            beginKeywords: "new return throw await else",
            relevance: 0
          },
          {
            className: "function",
            begin: "(" + TYPE_IDENT_RE + "\\s+)+" + hljs.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
            returnBegin: true,
            end: /\s*[{;=]/,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: [
              {
                beginKeywords: FUNCTION_MODIFIERS.join(" "),
                relevance: 0
              },
              {
                begin: hljs.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
                returnBegin: true,
                contains: [
                  hljs.TITLE_MODE,
                  GENERIC_MODIFIER
                ],
                relevance: 0
              },
              { match: /\(\)/ },
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: true,
                excludeEnd: true,
                keywords: KEYWORDS,
                relevance: 0,
                contains: [
                  STRING,
                  NUMBERS,
                  hljs.C_BLOCK_COMMENT_MODE
                ]
              },
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          AT_IDENTIFIER
        ]
      };
    }
    module.exports = csharp;
  }
}["highlight.js/lib/languages/csharp.js"]);


// highlight.js/lib/languages/css.js
export var $f9f345af = $$m({
  "highlight.js/lib/languages/css.js": (module, exports) => {
    const MODES = (hljs) => {
      return {
        IMPORTANT: {
          scope: "meta",
          begin: "!important"
        },
        BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
        HEXCOLOR: {
          scope: "number",
          begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
        },
        FUNCTION_DISPATCH: {
          className: "built_in",
          begin: /[\w-]+(?=\()/
        },
        ATTRIBUTE_SELECTOR_MODE: {
          scope: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE
          ]
        },
        CSS_NUMBER_MODE: {
          scope: "number",
          begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
          relevance: 0
        },
        CSS_VARIABLE: {
          className: "attr",
          begin: /--[A-Za-z][A-Za-z0-9_-]*/
        }
      };
    };
    const TAGS = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "p",
      "q",
      "quote",
      "samp",
      "section",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video"
    ];
    const MEDIA_FEATURES = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      "min-width",
      "max-width",
      "min-height",
      "max-height"
    ];
    const PSEUDO_CLASSES = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir",
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has",
      "host",
      "host-context",
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is",
      "lang",
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not",
      "nth-child",
      "nth-col",
      "nth-last-child",
      "nth-last-col",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where"
    ];
    const PSEUDO_ELEMENTS = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error"
    ];
    const ATTRIBUTES = [
      "align-content",
      "align-items",
      "align-self",
      "all",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "block-size",
      "border",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "clip-path",
      "clip-rule",
      "color",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "empty-cells",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "flow",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "glyph-orientation-vertical",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "inline-size",
      "isolation",
      "justify-content",
      "left",
      "letter-spacing",
      "line-break",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "right",
      "row-gap",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "speak",
      "speak-as",
      "src",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-all",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-position",
      "top",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "unicode-bidi",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "z-index"
    ].reverse();
    function css(hljs) {
      const regex = hljs.regex;
      const modes = MODES(hljs);
      const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
      const AT_MODIFIERS = "and or not only";
      const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
      const IDENT_RE = "[a-zA-Z-][a-zA-Z0-9_-]*";
      const STRINGS = [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE
      ];
      return {
        name: "CSS",
        case_insensitive: true,
        illegal: /[=|'\$]/,
        keywords: { keyframePosition: "from to" },
        classNameAliases: {
          keyframePosition: "selector-tag"
        },
        contains: [
          modes.BLOCK_COMMENT,
          VENDOR_PREFIX,
          modes.CSS_NUMBER_MODE,
          {
            className: "selector-id",
            begin: /#[A-Za-z0-9_-]+/,
            relevance: 0
          },
          {
            className: "selector-class",
            begin: "\\." + IDENT_RE,
            relevance: 0
          },
          modes.ATTRIBUTE_SELECTOR_MODE,
          {
            className: "selector-pseudo",
            variants: [
              { begin: ":(" + PSEUDO_CLASSES.join("|") + ")" },
              { begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")" }
            ]
          },
          modes.CSS_VARIABLE,
          {
            className: "attribute",
            begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
          },
          {
            begin: /:/,
            end: /[;}{]/,
            contains: [
              modes.BLOCK_COMMENT,
              modes.HEXCOLOR,
              modes.IMPORTANT,
              modes.CSS_NUMBER_MODE,
              ...STRINGS,
              {
                begin: /(url|data-uri)\(/,
                end: /\)/,
                relevance: 0,
                keywords: { built_in: "url data-uri" },
                contains: [
                  ...STRINGS,
                  {
                    className: "string",
                    begin: /[^)]/,
                    endsWithParent: true,
                    excludeEnd: true
                  }
                ]
              },
              modes.FUNCTION_DISPATCH
            ]
          },
          {
            begin: regex.lookahead(/@/),
            end: "[{;]",
            relevance: 0,
            illegal: /:/,
            contains: [
              {
                className: "keyword",
                begin: AT_PROPERTY_RE
              },
              {
                begin: /\s/,
                endsWithParent: true,
                excludeEnd: true,
                relevance: 0,
                keywords: {
                  $pattern: /[a-z-]+/,
                  keyword: AT_MODIFIERS,
                  attribute: MEDIA_FEATURES.join(" ")
                },
                contains: [
                  {
                    begin: /[a-z-]+(?=:)/,
                    className: "attribute"
                  },
                  ...STRINGS,
                  modes.CSS_NUMBER_MODE
                ]
              }
            ]
          },
          {
            className: "selector-tag",
            begin: "\\b(" + TAGS.join("|") + ")\\b"
          }
        ]
      };
    }
    module.exports = css;
  }
}["highlight.js/lib/languages/css.js"]);


// highlight.js/lib/languages/markdown.js
export var $63d02f2f = $$m({
  "highlight.js/lib/languages/markdown.js": (module, exports) => {
    function markdown(hljs) {
      const regex = hljs.regex;
      const INLINE_HTML = {
        begin: /<\/?[A-Za-z_]/,
        end: ">",
        subLanguage: "xml",
        relevance: 0
      };
      const HORIZONTAL_RULE = {
        begin: "^[-\\*]{3,}",
        end: "$"
      };
      const CODE = {
        className: "code",
        variants: [
          { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
          { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
          {
            begin: "```",
            end: "```+[ ]*$"
          },
          {
            begin: "~~~",
            end: "~~~+[ ]*$"
          },
          { begin: "`.+?`" },
          {
            begin: "(?=^( {4}|\\t))",
            contains: [
              {
                begin: "^( {4}|\\t)",
                end: "(\\n)$"
              }
            ],
            relevance: 0
          }
        ]
      };
      const LIST = {
        className: "bullet",
        begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
        end: "\\s+",
        excludeEnd: true
      };
      const LINK_REFERENCE = {
        begin: /^\[[^\n]+\]:/,
        returnBegin: true,
        contains: [
          {
            className: "symbol",
            begin: /\[/,
            end: /\]/,
            excludeBegin: true,
            excludeEnd: true
          },
          {
            className: "link",
            begin: /:\s*/,
            end: /$/,
            excludeBegin: true
          }
        ]
      };
      const URL_SCHEME = /[A-Za-z][A-Za-z0-9+.-]*/;
      const LINK = {
        variants: [
          {
            begin: /\[.+?\]\[.*?\]/,
            relevance: 0
          },
          {
            begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
            relevance: 2
          },
          {
            begin: regex.concat(/\[.+?\]\(/, URL_SCHEME, /:\/\/.*?\)/),
            relevance: 2
          },
          {
            begin: /\[.+?\]\([./?&#].*?\)/,
            relevance: 1
          },
          {
            begin: /\[.*?\]\(.*?\)/,
            relevance: 0
          }
        ],
        returnBegin: true,
        contains: [
          {
            match: /\[(?=\])/
          },
          {
            className: "string",
            relevance: 0,
            begin: "\\[",
            end: "\\]",
            excludeBegin: true,
            returnEnd: true
          },
          {
            className: "link",
            relevance: 0,
            begin: "\\]\\(",
            end: "\\)",
            excludeBegin: true,
            excludeEnd: true
          },
          {
            className: "symbol",
            relevance: 0,
            begin: "\\]\\[",
            end: "\\]",
            excludeBegin: true,
            excludeEnd: true
          }
        ]
      };
      const BOLD = {
        className: "strong",
        contains: [],
        variants: [
          {
            begin: /_{2}(?!\s)/,
            end: /_{2}/
          },
          {
            begin: /\*{2}(?!\s)/,
            end: /\*{2}/
          }
        ]
      };
      const ITALIC = {
        className: "emphasis",
        contains: [],
        variants: [
          {
            begin: /\*(?![*\s])/,
            end: /\*/
          },
          {
            begin: /_(?![_\s])/,
            end: /_/,
            relevance: 0
          }
        ]
      };
      const BOLD_WITHOUT_ITALIC = hljs.inherit(BOLD, { contains: [] });
      const ITALIC_WITHOUT_BOLD = hljs.inherit(ITALIC, { contains: [] });
      BOLD.contains.push(ITALIC_WITHOUT_BOLD);
      ITALIC.contains.push(BOLD_WITHOUT_ITALIC);
      let CONTAINABLE = [
        INLINE_HTML,
        LINK
      ];
      [
        BOLD,
        ITALIC,
        BOLD_WITHOUT_ITALIC,
        ITALIC_WITHOUT_BOLD
      ].forEach((m) => {
        m.contains = m.contains.concat(CONTAINABLE);
      });
      CONTAINABLE = CONTAINABLE.concat(BOLD, ITALIC);
      const HEADER = {
        className: "section",
        variants: [
          {
            begin: "^#{1,6}",
            end: "$",
            contains: CONTAINABLE
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              { begin: "^[=-]*$" },
              {
                begin: "^",
                end: "\\n",
                contains: CONTAINABLE
              }
            ]
          }
        ]
      };
      const BLOCKQUOTE = {
        className: "quote",
        begin: "^>\\s+",
        contains: CONTAINABLE,
        end: "$"
      };
      return {
        name: "Markdown",
        aliases: [
          "md",
          "mkdown",
          "mkd"
        ],
        contains: [
          HEADER,
          INLINE_HTML,
          LIST,
          BOLD,
          ITALIC,
          BLOCKQUOTE,
          CODE,
          HORIZONTAL_RULE,
          LINK,
          LINK_REFERENCE
        ]
      };
    }
    module.exports = markdown;
  }
}["highlight.js/lib/languages/markdown.js"]);


// highlight.js/lib/languages/diff.js
export var $37caa248 = $$m({
  "highlight.js/lib/languages/diff.js": (module, exports) => {
    function diff(hljs) {
      const regex = hljs.regex;
      return {
        name: "Diff",
        aliases: ["patch"],
        contains: [
          {
            className: "meta",
            relevance: 10,
            match: regex.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/)
          },
          {
            className: "comment",
            variants: [
              {
                begin: regex.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/),
                end: /$/
              },
              { match: /^\*{15}$/ }
            ]
          },
          {
            className: "addition",
            begin: /^\+/,
            end: /$/
          },
          {
            className: "deletion",
            begin: /^-/,
            end: /$/
          },
          {
            className: "addition",
            begin: /^!/,
            end: /$/
          }
        ]
      };
    }
    module.exports = diff;
  }
}["highlight.js/lib/languages/diff.js"]);


// highlight.js/lib/languages/ruby.js
export var $1a46678 = $$m({
  "highlight.js/lib/languages/ruby.js": (module, exports) => {
    function ruby(hljs) {
      const regex = hljs.regex;
      const RUBY_METHOD_RE = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)";
      const CLASS_NAME_RE = regex.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/);
      const CLASS_NAME_WITH_NAMESPACE_RE = regex.concat(CLASS_NAME_RE, /(::\w+)*/);
      const PSEUDO_KWS = [
        "include",
        "extend",
        "prepend",
        "public",
        "private",
        "protected",
        "raise",
        "throw"
      ];
      const RUBY_KEYWORDS = {
        "variable.constant": [
          "__FILE__",
          "__LINE__",
          "__ENCODING__"
        ],
        "variable.language": [
          "self",
          "super"
        ],
        keyword: [
          "alias",
          "and",
          "begin",
          "BEGIN",
          "break",
          "case",
          "class",
          "defined",
          "do",
          "else",
          "elsif",
          "end",
          "END",
          "ensure",
          "for",
          "if",
          "in",
          "module",
          "next",
          "not",
          "or",
          "redo",
          "require",
          "rescue",
          "retry",
          "return",
          "then",
          "undef",
          "unless",
          "until",
          "when",
          "while",
          "yield",
          ...PSEUDO_KWS
        ],
        built_in: [
          "proc",
          "lambda",
          "attr_accessor",
          "attr_reader",
          "attr_writer",
          "define_method",
          "private_constant",
          "module_function"
        ],
        literal: [
          "true",
          "false",
          "nil"
        ]
      };
      const YARDOCTAG = {
        className: "doctag",
        begin: "@[A-Za-z]+"
      };
      const IRB_OBJECT = {
        begin: "#<",
        end: ">"
      };
      const COMMENT_MODES = [
        hljs.COMMENT("#", "$", { contains: [YARDOCTAG] }),
        hljs.COMMENT("^=begin", "^=end", {
          contains: [YARDOCTAG],
          relevance: 10
        }),
        hljs.COMMENT("^__END__", hljs.MATCH_NOTHING_RE)
      ];
      const SUBST = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: RUBY_KEYWORDS
      };
      const STRING = {
        className: "string",
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ],
        variants: [
          {
            begin: /'/,
            end: /'/
          },
          {
            begin: /"/,
            end: /"/
          },
          {
            begin: /`/,
            end: /`/
          },
          {
            begin: /%[qQwWx]?\(/,
            end: /\)/
          },
          {
            begin: /%[qQwWx]?\[/,
            end: /\]/
          },
          {
            begin: /%[qQwWx]?\{/,
            end: /\}/
          },
          {
            begin: /%[qQwWx]?</,
            end: />/
          },
          {
            begin: /%[qQwWx]?\//,
            end: /\//
          },
          {
            begin: /%[qQwWx]?%/,
            end: /%/
          },
          {
            begin: /%[qQwWx]?-/,
            end: /-/
          },
          {
            begin: /%[qQwWx]?\|/,
            end: /\|/
          },
          { begin: /\B\?(\\\d{1,3})/ },
          { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
          { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
          { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
          { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
          { begin: /\B\?\\?\S/ },
          {
            begin: regex.concat(/<<[-~]?'?/, regex.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
            contains: [
              hljs.END_SAME_AS_BEGIN({
                begin: /(\w+)/,
                end: /(\w+)/,
                contains: [
                  hljs.BACKSLASH_ESCAPE,
                  SUBST
                ]
              })
            ]
          }
        ]
      };
      const decimal = "[1-9](_?[0-9])*|0";
      const digits = "[0-9](_?[0-9])*";
      const NUMBER = {
        className: "number",
        relevance: 0,
        variants: [
          { begin: `\\b(${decimal})(\\.(${digits}))?([eE][+-]?(${digits})|r)?i?\\b` },
          { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
          { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
          { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
          { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
          { begin: "\\b0(_?[0-7])+r?i?\\b" }
        ]
      };
      const PARAMS = {
        variants: [
          {
            match: /\(\)/
          },
          {
            className: "params",
            begin: /\(/,
            end: /(?=\))/,
            excludeBegin: true,
            endsParent: true,
            keywords: RUBY_KEYWORDS
          }
        ]
      };
      const INCLUDE_EXTEND = {
        match: [
          /(include|extend)\s+/,
          CLASS_NAME_WITH_NAMESPACE_RE
        ],
        scope: {
          2: "title.class"
        },
        keywords: RUBY_KEYWORDS
      };
      const CLASS_DEFINITION = {
        variants: [
          {
            match: [
              /class\s+/,
              CLASS_NAME_WITH_NAMESPACE_RE,
              /\s+<\s+/,
              CLASS_NAME_WITH_NAMESPACE_RE
            ]
          },
          {
            match: [
              /\b(class|module)\s+/,
              CLASS_NAME_WITH_NAMESPACE_RE
            ]
          }
        ],
        scope: {
          2: "title.class",
          4: "title.class.inherited"
        },
        keywords: RUBY_KEYWORDS
      };
      const UPPER_CASE_CONSTANT = {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
      };
      const METHOD_DEFINITION = {
        match: [
          /def/,
          /\s+/,
          RUBY_METHOD_RE
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [
          PARAMS
        ]
      };
      const OBJECT_CREATION = {
        relevance: 0,
        match: [
          CLASS_NAME_WITH_NAMESPACE_RE,
          /\.new[. (]/
        ],
        scope: {
          1: "title.class"
        }
      };
      const CLASS_REFERENCE = {
        relevance: 0,
        match: CLASS_NAME_RE,
        scope: "title.class"
      };
      const RUBY_DEFAULT_CONTAINS = [
        STRING,
        CLASS_DEFINITION,
        INCLUDE_EXTEND,
        OBJECT_CREATION,
        UPPER_CASE_CONSTANT,
        CLASS_REFERENCE,
        METHOD_DEFINITION,
        {
          begin: hljs.IDENT_RE + "::"
        },
        {
          className: "symbol",
          begin: hljs.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
          relevance: 0
        },
        {
          className: "symbol",
          begin: ":(?!\\s)",
          contains: [
            STRING,
            { begin: RUBY_METHOD_RE }
          ],
          relevance: 0
        },
        NUMBER,
        {
          className: "variable",
          begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
        },
        {
          className: "params",
          begin: /\|/,
          end: /\|/,
          excludeBegin: true,
          excludeEnd: true,
          relevance: 0,
          keywords: RUBY_KEYWORDS
        },
        {
          begin: "(" + hljs.RE_STARTERS_RE + "|unless)\\s*",
          keywords: "unless",
          contains: [
            {
              className: "regexp",
              contains: [
                hljs.BACKSLASH_ESCAPE,
                SUBST
              ],
              illegal: /\n/,
              variants: [
                {
                  begin: "/",
                  end: "/[a-z]*"
                },
                {
                  begin: /%r\{/,
                  end: /\}[a-z]*/
                },
                {
                  begin: "%r\\(",
                  end: "\\)[a-z]*"
                },
                {
                  begin: "%r!",
                  end: "![a-z]*"
                },
                {
                  begin: "%r\\[",
                  end: "\\][a-z]*"
                }
              ]
            }
          ].concat(IRB_OBJECT, COMMENT_MODES),
          relevance: 0
        }
      ].concat(IRB_OBJECT, COMMENT_MODES);
      SUBST.contains = RUBY_DEFAULT_CONTAINS;
      PARAMS.contains = RUBY_DEFAULT_CONTAINS;
      const SIMPLE_PROMPT = "[>?]>";
      const DEFAULT_PROMPT = "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]";
      const RVM_PROMPT = "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>";
      const IRB_DEFAULT = [
        {
          begin: /^\s*=>/,
          starts: {
            end: "$",
            contains: RUBY_DEFAULT_CONTAINS
          }
        },
        {
          className: "meta.prompt",
          begin: "^(" + SIMPLE_PROMPT + "|" + DEFAULT_PROMPT + "|" + RVM_PROMPT + ")(?=[ ])",
          starts: {
            end: "$",
            keywords: RUBY_KEYWORDS,
            contains: RUBY_DEFAULT_CONTAINS
          }
        }
      ];
      COMMENT_MODES.unshift(IRB_OBJECT);
      return {
        name: "Ruby",
        aliases: [
          "rb",
          "gemspec",
          "podspec",
          "thor",
          "irb"
        ],
        keywords: RUBY_KEYWORDS,
        illegal: /\/\*/,
        contains: [hljs.SHEBANG({ binary: "ruby" })].concat(IRB_DEFAULT).concat(COMMENT_MODES).concat(RUBY_DEFAULT_CONTAINS)
      };
    }
    module.exports = ruby;
  }
}["highlight.js/lib/languages/ruby.js"]);


// highlight.js/lib/languages/go.js
export var $114e92fc = $$m({
  "highlight.js/lib/languages/go.js": (module, exports) => {
    function go(hljs) {
      const LITERALS = [
        "true",
        "false",
        "iota",
        "nil"
      ];
      const BUILT_INS = [
        "append",
        "cap",
        "close",
        "complex",
        "copy",
        "imag",
        "len",
        "make",
        "new",
        "panic",
        "print",
        "println",
        "real",
        "recover",
        "delete"
      ];
      const TYPES = [
        "bool",
        "byte",
        "complex64",
        "complex128",
        "error",
        "float32",
        "float64",
        "int8",
        "int16",
        "int32",
        "int64",
        "string",
        "uint8",
        "uint16",
        "uint32",
        "uint64",
        "int",
        "uint",
        "uintptr",
        "rune"
      ];
      const KWS = [
        "break",
        "case",
        "chan",
        "const",
        "continue",
        "default",
        "defer",
        "else",
        "fallthrough",
        "for",
        "func",
        "go",
        "goto",
        "if",
        "import",
        "interface",
        "map",
        "package",
        "range",
        "return",
        "select",
        "struct",
        "switch",
        "type",
        "var"
      ];
      const KEYWORDS = {
        keyword: KWS,
        type: TYPES,
        literal: LITERALS,
        built_in: BUILT_INS
      };
      return {
        name: "Go",
        aliases: ["golang"],
        keywords: KEYWORDS,
        illegal: "</",
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: "string",
            variants: [
              hljs.QUOTE_STRING_MODE,
              hljs.APOS_STRING_MODE,
              {
                begin: "`",
                end: "`"
              }
            ]
          },
          {
            className: "number",
            variants: [
              {
                begin: hljs.C_NUMBER_RE + "[i]",
                relevance: 1
              },
              hljs.C_NUMBER_MODE
            ]
          },
          {
            begin: /:=/
          },
          {
            className: "function",
            beginKeywords: "func",
            end: "\\s*(\\{|$)",
            excludeEnd: true,
            contains: [
              hljs.TITLE_MODE,
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                endsParent: true,
                keywords: KEYWORDS,
                illegal: /["']/
              }
            ]
          }
        ]
      };
    }
    module.exports = go;
  }
}["highlight.js/lib/languages/go.js"]);


// highlight.js/lib/languages/graphql.js
export var $8e9c06c5 = $$m({
  "highlight.js/lib/languages/graphql.js": (module, exports) => {
    function graphql(hljs) {
      const regex = hljs.regex;
      const GQL_NAME = /[_A-Za-z][_0-9A-Za-z]*/;
      return {
        name: "GraphQL",
        aliases: ["gql"],
        case_insensitive: true,
        disableAutodetect: false,
        keywords: {
          keyword: [
            "query",
            "mutation",
            "subscription",
            "type",
            "input",
            "schema",
            "directive",
            "interface",
            "union",
            "scalar",
            "fragment",
            "enum",
            "on"
          ],
          literal: [
            "true",
            "false",
            "null"
          ]
        },
        contains: [
          hljs.HASH_COMMENT_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.NUMBER_MODE,
          {
            scope: "punctuation",
            match: /[.]{3}/,
            relevance: 0
          },
          {
            scope: "punctuation",
            begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
            relevance: 0
          },
          {
            scope: "variable",
            begin: /\$/,
            end: /\W/,
            excludeEnd: true,
            relevance: 0
          },
          {
            scope: "meta",
            match: /@\w+/,
            excludeEnd: true
          },
          {
            scope: "symbol",
            begin: regex.concat(GQL_NAME, regex.lookahead(/\s*:/)),
            relevance: 0
          }
        ],
        illegal: [
          /[;<']/,
          /BEGIN/
        ]
      };
    }
    module.exports = graphql;
  }
}["highlight.js/lib/languages/graphql.js"]);


// highlight.js/lib/languages/ini.js
export var $83a60e27 = $$m({
  "highlight.js/lib/languages/ini.js": (module, exports) => {
    function ini(hljs) {
      const regex = hljs.regex;
      const NUMBERS = {
        className: "number",
        relevance: 0,
        variants: [
          { begin: /([+-]+)?[\d]+_[\d_]+/ },
          { begin: hljs.NUMBER_RE }
        ]
      };
      const COMMENTS = hljs.COMMENT();
      COMMENTS.variants = [
        {
          begin: /;/,
          end: /$/
        },
        {
          begin: /#/,
          end: /$/
        }
      ];
      const VARIABLES = {
        className: "variable",
        variants: [
          { begin: /\$[\w\d"][\w\d_]*/ },
          { begin: /\$\{(.*?)\}/ }
        ]
      };
      const LITERALS = {
        className: "literal",
        begin: /\bon|off|true|false|yes|no\b/
      };
      const STRINGS = {
        className: "string",
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          {
            begin: "'''",
            end: "'''",
            relevance: 10
          },
          {
            begin: '"""',
            end: '"""',
            relevance: 10
          },
          {
            begin: '"',
            end: '"'
          },
          {
            begin: "'",
            end: "'"
          }
        ]
      };
      const ARRAY = {
        begin: /\[/,
        end: /\]/,
        contains: [
          COMMENTS,
          LITERALS,
          VARIABLES,
          STRINGS,
          NUMBERS,
          "self"
        ],
        relevance: 0
      };
      const BARE_KEY = /[A-Za-z0-9_-]+/;
      const QUOTED_KEY_DOUBLE_QUOTE = /"(\\"|[^"])*"/;
      const QUOTED_KEY_SINGLE_QUOTE = /'[^']*'/;
      const ANY_KEY = regex.either(BARE_KEY, QUOTED_KEY_DOUBLE_QUOTE, QUOTED_KEY_SINGLE_QUOTE);
      const DOTTED_KEY = regex.concat(ANY_KEY, "(\\s*\\.\\s*", ANY_KEY, ")*", regex.lookahead(/\s*=\s*[^#\s]/));
      return {
        name: "TOML, also INI",
        aliases: ["toml"],
        case_insensitive: true,
        illegal: /\S/,
        contains: [
          COMMENTS,
          {
            className: "section",
            begin: /\[+/,
            end: /\]+/
          },
          {
            begin: DOTTED_KEY,
            className: "attr",
            starts: {
              end: /$/,
              contains: [
                COMMENTS,
                ARRAY,
                LITERALS,
                VARIABLES,
                STRINGS,
                NUMBERS
              ]
            }
          }
        ]
      };
    }
    module.exports = ini;
  }
}["highlight.js/lib/languages/ini.js"]);


// highlight.js/lib/languages/java.js
export var $17288a6a = $$m({
  "highlight.js/lib/languages/java.js": (module, exports) => {
    var decimalDigits = "[0-9](_*[0-9])*";
    var frac = `\\.(${decimalDigits})`;
    var hexDigits = "[0-9a-fA-F](_*[0-9a-fA-F])*";
    var NUMERIC = {
      className: "number",
      variants: [
        { begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))` + `[eE][+-]?(${decimalDigits})[fFdD]?\\b` },
        { begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
        { begin: `(${frac})[fFdD]?\\b` },
        { begin: `\\b(${decimalDigits})[fFdD]\\b` },
        { begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))` + `[pP][+-]?(${decimalDigits})[fFdD]?\\b` },
        { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
        { begin: `\\b0[xX](${hexDigits})[lL]?\\b` },
        { begin: "\\b0(_*[0-7])*[lL]?\\b" },
        { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
      ],
      relevance: 0
    };
    function recurRegex(re, substitution, depth) {
      if (depth === -1)
        return "";
      return re.replace(substitution, (_) => {
        return recurRegex(re, substitution, depth - 1);
      });
    }
    function java(hljs) {
      const regex = hljs.regex;
      const JAVA_IDENT_RE = "[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*";
      const GENERIC_IDENT_RE = JAVA_IDENT_RE + recurRegex("(?:<" + JAVA_IDENT_RE + "~~~(?:\\s*,\\s*" + JAVA_IDENT_RE + "~~~)*>)?", /~~~/g, 2);
      const MAIN_KEYWORDS = [
        "synchronized",
        "abstract",
        "private",
        "var",
        "static",
        "if",
        "const ",
        "for",
        "while",
        "strictfp",
        "finally",
        "protected",
        "import",
        "native",
        "final",
        "void",
        "enum",
        "else",
        "break",
        "transient",
        "catch",
        "instanceof",
        "volatile",
        "case",
        "assert",
        "package",
        "default",
        "public",
        "try",
        "switch",
        "continue",
        "throws",
        "protected",
        "public",
        "private",
        "module",
        "requires",
        "exports",
        "do",
        "sealed",
        "yield",
        "permits"
      ];
      const BUILT_INS = [
        "super",
        "this"
      ];
      const LITERALS = [
        "false",
        "true",
        "null"
      ];
      const TYPES = [
        "char",
        "boolean",
        "long",
        "float",
        "int",
        "byte",
        "short",
        "double"
      ];
      const KEYWORDS = {
        keyword: MAIN_KEYWORDS,
        literal: LITERALS,
        type: TYPES,
        built_in: BUILT_INS
      };
      const ANNOTATION = {
        className: "meta",
        begin: "@" + JAVA_IDENT_RE,
        contains: [
          {
            begin: /\(/,
            end: /\)/,
            contains: ["self"]
          }
        ]
      };
      const PARAMS = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        relevance: 0,
        contains: [hljs.C_BLOCK_COMMENT_MODE],
        endsParent: true
      };
      return {
        name: "Java",
        aliases: ["jsp"],
        keywords: KEYWORDS,
        illegal: /<\/|#/,
        contains: [
          hljs.COMMENT("/\\*\\*", "\\*/", {
            relevance: 0,
            contains: [
              {
                begin: /\w+@/,
                relevance: 0
              },
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }),
          {
            begin: /import java\.[a-z]+\./,
            keywords: "import",
            relevance: 2
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            begin: /"""/,
            end: /"""/,
            className: "string",
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          {
            match: [
              /\b(?:class|interface|enum|extends|implements|new)/,
              /\s+/,
              JAVA_IDENT_RE
            ],
            className: {
              1: "keyword",
              3: "title.class"
            }
          },
          {
            match: /non-sealed/,
            scope: "keyword"
          },
          {
            begin: [
              regex.concat(/(?!else)/, JAVA_IDENT_RE),
              /\s+/,
              JAVA_IDENT_RE,
              /\s+/,
              /=(?!=)/
            ],
            className: {
              1: "type",
              3: "variable",
              5: "operator"
            }
          },
          {
            begin: [
              /record/,
              /\s+/,
              JAVA_IDENT_RE
            ],
            className: {
              1: "keyword",
              3: "title.class"
            },
            contains: [
              PARAMS,
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          {
            beginKeywords: "new throw return else",
            relevance: 0
          },
          {
            begin: [
              "(?:" + GENERIC_IDENT_RE + "\\s+)",
              hljs.UNDERSCORE_IDENT_RE,
              /\s*(?=\()/
            ],
            className: { 2: "title.function" },
            keywords: KEYWORDS,
            contains: [
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: KEYWORDS,
                relevance: 0,
                contains: [
                  ANNOTATION,
                  hljs.APOS_STRING_MODE,
                  hljs.QUOTE_STRING_MODE,
                  NUMERIC,
                  hljs.C_BLOCK_COMMENT_MODE
                ]
              },
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          NUMERIC,
          ANNOTATION
        ]
      };
    }
    module.exports = java;
  }
}["highlight.js/lib/languages/java.js"]);


// highlight.js/lib/languages/javascript.js
export var $1c0aab6b = $$m({
  "highlight.js/lib/languages/javascript.js": (module, exports) => {
    const IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
    const KEYWORDS = [
      "as",
      "in",
      "of",
      "if",
      "for",
      "while",
      "finally",
      "var",
      "new",
      "function",
      "do",
      "return",
      "void",
      "else",
      "break",
      "catch",
      "instanceof",
      "with",
      "throw",
      "case",
      "default",
      "try",
      "switch",
      "continue",
      "typeof",
      "delete",
      "let",
      "yield",
      "const",
      "class",
      "debugger",
      "async",
      "await",
      "static",
      "import",
      "from",
      "export",
      "extends"
    ];
    const LITERALS = [
      "true",
      "false",
      "null",
      "undefined",
      "NaN",
      "Infinity"
    ];
    const TYPES = [
      "Object",
      "Function",
      "Boolean",
      "Symbol",
      "Math",
      "Date",
      "Number",
      "BigInt",
      "String",
      "RegExp",
      "Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Int32Array",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array",
      "Set",
      "Map",
      "WeakSet",
      "WeakMap",
      "ArrayBuffer",
      "SharedArrayBuffer",
      "Atomics",
      "DataView",
      "JSON",
      "Promise",
      "Generator",
      "GeneratorFunction",
      "AsyncFunction",
      "Reflect",
      "Proxy",
      "Intl",
      "WebAssembly"
    ];
    const ERROR_TYPES = [
      "Error",
      "EvalError",
      "InternalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError"
    ];
    const BUILT_IN_GLOBALS = [
      "setInterval",
      "setTimeout",
      "clearInterval",
      "clearTimeout",
      "require",
      "exports",
      "eval",
      "isFinite",
      "isNaN",
      "parseFloat",
      "parseInt",
      "decodeURI",
      "decodeURIComponent",
      "encodeURI",
      "encodeURIComponent",
      "escape",
      "unescape"
    ];
    const BUILT_IN_VARIABLES = [
      "arguments",
      "this",
      "super",
      "console",
      "window",
      "document",
      "localStorage",
      "module",
      "global"
    ];
    const BUILT_INS = [].concat(BUILT_IN_GLOBALS, TYPES, ERROR_TYPES);
    function javascript(hljs) {
      const regex = hljs.regex;
      const hasClosingTag = (match, { after }) => {
        const tag = "</" + match[0].slice(1);
        const pos = match.input.indexOf(tag, after);
        return pos !== -1;
      };
      const IDENT_RE$1 = IDENT_RE;
      const FRAGMENT = {
        begin: "<>",
        end: "</>"
      };
      const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
      const XML_TAG = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (match, response) => {
          const afterMatchIndex = match[0].length + match.index;
          const nextChar = match.input[afterMatchIndex];
          if (nextChar === "<" || nextChar === ",") {
            response.ignoreMatch();
            return;
          }
          if (nextChar === ">") {
            if (!hasClosingTag(match, { after: afterMatchIndex }))
              response.ignoreMatch();
          }
          let m;
          const afterMatch = match.input.substring(afterMatchIndex);
          if (m = afterMatch.match(/^\s*=/)) {
            response.ignoreMatch();
            return;
          }
          if (m = afterMatch.match(/^\s+extends\s+/)) {
            if (m.index === 0) {
              response.ignoreMatch();
              return;
            }
          }
        }
      };
      const KEYWORDS$1 = {
        $pattern: IDENT_RE,
        keyword: KEYWORDS,
        literal: LITERALS,
        built_in: BUILT_INS,
        "variable.language": BUILT_IN_VARIABLES
      };
      const decimalDigits = "[0-9](_?[0-9])*";
      const frac = `\\.(${decimalDigits})`;
      const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
      const NUMBER = {
        className: "number",
        variants: [
          { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))` + `[eE][+-]?(${decimalDigits})\\b` },
          { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
          { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
          { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
          { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
          { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
          { begin: "\\b0[0-7]+n?\\b" }
        ],
        relevance: 0
      };
      const SUBST = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: KEYWORDS$1,
        contains: []
      };
      const HTML_TEMPLATE = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ],
          subLanguage: "xml"
        }
      };
      const CSS_TEMPLATE = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ],
          subLanguage: "css"
        }
      };
      const TEMPLATE_STRING = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ]
      };
      const JSDOC_COMMENT = hljs.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
        relevance: 0,
        contains: [
          {
            begin: "(?=@[A-Za-z]+)",
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              },
              {
                className: "type",
                begin: "\\{",
                end: "\\}",
                excludeEnd: true,
                excludeBegin: true,
                relevance: 0
              },
              {
                className: "variable",
                begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
                endsParent: true,
                relevance: 0
              },
              {
                begin: /(?=[^\n])\s/,
                relevance: 0
              }
            ]
          }
        ]
      });
      const COMMENT = {
        className: "comment",
        variants: [
          JSDOC_COMMENT,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.C_LINE_COMMENT_MODE
        ]
      };
      const SUBST_INTERNALS = [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        HTML_TEMPLATE,
        CSS_TEMPLATE,
        TEMPLATE_STRING,
        { match: /\$\d+/ },
        NUMBER
      ];
      SUBST.contains = SUBST_INTERNALS.concat({
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS$1,
        contains: [
          "self"
        ].concat(SUBST_INTERNALS)
      });
      const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
      const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: KEYWORDS$1,
          contains: ["self"].concat(SUBST_AND_COMMENTS)
        }
      ]);
      const PARAMS = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS$1,
        contains: PARAMS_CONTAINS
      };
      const CLASS_OR_EXTENDS = {
        variants: [
          {
            match: [
              /class/,
              /\s+/,
              IDENT_RE$1,
              /\s+/,
              /extends/,
              /\s+/,
              regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
            ],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          },
          {
            match: [
              /class/,
              /\s+/,
              IDENT_RE$1
            ],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }
        ]
      };
      const CLASS_REFERENCE = {
        relevance: 0,
        match: regex.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
        className: "title.class",
        keywords: {
          _: [
            ...TYPES,
            ...ERROR_TYPES
          ]
        }
      };
      const USE_STRICT = {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      };
      const FUNCTION_DEFINITION = {
        variants: [
          {
            match: [
              /function/,
              /\s+/,
              IDENT_RE$1,
              /(?=\s*\()/
            ]
          },
          {
            match: [
              /function/,
              /\s*(?=\()/
            ]
          }
        ],
        className: {
          1: "keyword",
          3: "title.function"
        },
        label: "func.def",
        contains: [PARAMS],
        illegal: /%/
      };
      const UPPER_CASE_CONSTANT = {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
      };
      function noneOf(list) {
        return regex.concat("(?!", list.join("|"), ")");
      }
      const FUNCTION_CALL = {
        match: regex.concat(/\b/, noneOf([
          ...BUILT_IN_GLOBALS,
          "super",
          "import"
        ]), IDENT_RE$1, regex.lookahead(/\(/)),
        className: "title.function",
        relevance: 0
      };
      const PROPERTY_ACCESS = {
        begin: regex.concat(/\./, regex.lookahead(regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/))),
        end: IDENT_RE$1,
        excludeBegin: true,
        keywords: "prototype",
        className: "property",
        relevance: 0
      };
      const GETTER_OR_SETTER = {
        match: [
          /get|set/,
          /\s+/,
          IDENT_RE$1,
          /(?=\()/
        ],
        className: {
          1: "keyword",
          3: "title.function"
        },
        contains: [
          {
            begin: /\(\)/
          },
          PARAMS
        ]
      };
      const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
      const FUNCTION_VARIABLE = {
        match: [
          /const|var|let/,
          /\s+/,
          IDENT_RE$1,
          /\s*/,
          /=\s*/,
          /(async\s*)?/,
          regex.lookahead(FUNC_LEAD_IN_RE)
        ],
        keywords: "async",
        className: {
          1: "keyword",
          3: "title.function"
        },
        contains: [
          PARAMS
        ]
      };
      return {
        name: "Javascript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: KEYWORDS$1,
        exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
        illegal: /#(?![$_A-z])/,
        contains: [
          hljs.SHEBANG({
            label: "shebang",
            binary: "node",
            relevance: 5
          }),
          USE_STRICT,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          HTML_TEMPLATE,
          CSS_TEMPLATE,
          TEMPLATE_STRING,
          COMMENT,
          { match: /\$\d+/ },
          NUMBER,
          CLASS_REFERENCE,
          {
            className: "attr",
            begin: IDENT_RE$1 + regex.lookahead(":"),
            relevance: 0
          },
          FUNCTION_VARIABLE,
          {
            begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
            keywords: "return throw case",
            relevance: 0,
            contains: [
              COMMENT,
              hljs.REGEXP_MODE,
              {
                className: "function",
                begin: FUNC_LEAD_IN_RE,
                returnBegin: true,
                end: "\\s*=>",
                contains: [
                  {
                    className: "params",
                    variants: [
                      {
                        begin: hljs.UNDERSCORE_IDENT_RE,
                        relevance: 0
                      },
                      {
                        className: null,
                        begin: /\(\s*\)/,
                        skip: true
                      },
                      {
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: true,
                        excludeEnd: true,
                        keywords: KEYWORDS$1,
                        contains: PARAMS_CONTAINS
                      }
                    ]
                  }
                ]
              },
              {
                begin: /,/,
                relevance: 0
              },
              {
                match: /\s+/,
                relevance: 0
              },
              {
                variants: [
                  { begin: FRAGMENT.begin, end: FRAGMENT.end },
                  { match: XML_SELF_CLOSING },
                  {
                    begin: XML_TAG.begin,
                    "on:begin": XML_TAG.isTrulyOpeningTag,
                    end: XML_TAG.end
                  }
                ],
                subLanguage: "xml",
                contains: [
                  {
                    begin: XML_TAG.begin,
                    end: XML_TAG.end,
                    skip: true,
                    contains: ["self"]
                  }
                ]
              }
            ]
          },
          FUNCTION_DEFINITION,
          {
            beginKeywords: "while if switch catch for"
          },
          {
            begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
            returnBegin: true,
            label: "func.def",
            contains: [
              PARAMS,
              hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
            ]
          },
          {
            match: /\.\.\./,
            relevance: 0
          },
          PROPERTY_ACCESS,
          {
            match: "\\$" + IDENT_RE$1,
            relevance: 0
          },
          {
            match: [/\bconstructor(?=\s*\()/],
            className: { 1: "title.function" },
            contains: [PARAMS]
          },
          FUNCTION_CALL,
          UPPER_CASE_CONSTANT,
          CLASS_OR_EXTENDS,
          GETTER_OR_SETTER,
          {
            match: /\$[(.]/
          }
        ]
      };
    }
    module.exports = javascript;
  }
}["highlight.js/lib/languages/javascript.js"]);


// highlight.js/lib/languages/json.js
export var $b678919c = $$m({
  "highlight.js/lib/languages/json.js": (module, exports) => {
    function json(hljs) {
      const ATTRIBUTE = {
        className: "attr",
        begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
        relevance: 1.01
      };
      const PUNCTUATION = {
        match: /[{}[\],:]/,
        className: "punctuation",
        relevance: 0
      };
      const LITERALS = [
        "true",
        "false",
        "null"
      ];
      const LITERALS_MODE = {
        scope: "literal",
        beginKeywords: LITERALS.join(" ")
      };
      return {
        name: "JSON",
        keywords: {
          literal: LITERALS
        },
        contains: [
          ATTRIBUTE,
          PUNCTUATION,
          hljs.QUOTE_STRING_MODE,
          LITERALS_MODE,
          hljs.C_NUMBER_MODE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ],
        illegal: "\\S"
      };
    }
    module.exports = json;
  }
}["highlight.js/lib/languages/json.js"]);


// highlight.js/lib/languages/kotlin.js
export var $3e107034 = $$m({
  "highlight.js/lib/languages/kotlin.js": (module, exports) => {
    var decimalDigits = "[0-9](_*[0-9])*";
    var frac = `\\.(${decimalDigits})`;
    var hexDigits = "[0-9a-fA-F](_*[0-9a-fA-F])*";
    var NUMERIC = {
      className: "number",
      variants: [
        { begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))` + `[eE][+-]?(${decimalDigits})[fFdD]?\\b` },
        { begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
        { begin: `(${frac})[fFdD]?\\b` },
        { begin: `\\b(${decimalDigits})[fFdD]\\b` },
        { begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))` + `[pP][+-]?(${decimalDigits})[fFdD]?\\b` },
        { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
        { begin: `\\b0[xX](${hexDigits})[lL]?\\b` },
        { begin: "\\b0(_*[0-7])*[lL]?\\b" },
        { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
      ],
      relevance: 0
    };
    function kotlin(hljs) {
      const KEYWORDS = {
        keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
        built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
        literal: "true false null"
      };
      const KEYWORDS_WITH_LABEL = {
        className: "keyword",
        begin: /\b(break|continue|return|this)\b/,
        starts: { contains: [
          {
            className: "symbol",
            begin: /@\w+/
          }
        ] }
      };
      const LABEL = {
        className: "symbol",
        begin: hljs.UNDERSCORE_IDENT_RE + "@"
      };
      const SUBST = {
        className: "subst",
        begin: /\$\{/,
        end: /\}/,
        contains: [hljs.C_NUMBER_MODE]
      };
      const VARIABLE = {
        className: "variable",
        begin: "\\$" + hljs.UNDERSCORE_IDENT_RE
      };
      const STRING = {
        className: "string",
        variants: [
          {
            begin: '"""',
            end: '"""(?=[^"])',
            contains: [
              VARIABLE,
              SUBST
            ]
          },
          {
            begin: "\'",
            end: "\'",
            illegal: /\n/,
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            begin: '"',
            end: '"',
            illegal: /\n/,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              VARIABLE,
              SUBST
            ]
          }
        ]
      };
      SUBST.contains.push(STRING);
      const ANNOTATION_USE_SITE = {
        className: "meta",
        begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + hljs.UNDERSCORE_IDENT_RE + ")?"
      };
      const ANNOTATION = {
        className: "meta",
        begin: "@" + hljs.UNDERSCORE_IDENT_RE,
        contains: [
          {
            begin: /\(/,
            end: /\)/,
            contains: [
              hljs.inherit(STRING, { className: "string" }),
              "self"
            ]
          }
        ]
      };
      const KOTLIN_NUMBER_MODE = NUMERIC;
      const KOTLIN_NESTED_COMMENT = hljs.COMMENT("/\\*", "\\*/", { contains: [hljs.C_BLOCK_COMMENT_MODE] });
      const KOTLIN_PAREN_TYPE = { variants: [
        {
          className: "type",
          begin: hljs.UNDERSCORE_IDENT_RE
        },
        {
          begin: /\(/,
          end: /\)/,
          contains: []
        }
      ] };
      const KOTLIN_PAREN_TYPE2 = KOTLIN_PAREN_TYPE;
      KOTLIN_PAREN_TYPE2.variants[1].contains = [KOTLIN_PAREN_TYPE];
      KOTLIN_PAREN_TYPE.variants[1].contains = [KOTLIN_PAREN_TYPE2];
      return {
        name: "Kotlin",
        aliases: [
          "kt",
          "kts"
        ],
        keywords: KEYWORDS,
        contains: [
          hljs.COMMENT("/\\*\\*", "\\*/", {
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }),
          hljs.C_LINE_COMMENT_MODE,
          KOTLIN_NESTED_COMMENT,
          KEYWORDS_WITH_LABEL,
          LABEL,
          ANNOTATION_USE_SITE,
          ANNOTATION,
          {
            className: "function",
            beginKeywords: "fun",
            end: "[(]|$",
            returnBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            relevance: 5,
            contains: [
              {
                begin: hljs.UNDERSCORE_IDENT_RE + "\\s*\\(",
                returnBegin: true,
                relevance: 0,
                contains: [hljs.UNDERSCORE_TITLE_MODE]
              },
              {
                className: "type",
                begin: /</,
                end: />/,
                keywords: "reified",
                relevance: 0
              },
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                endsParent: true,
                keywords: KEYWORDS,
                relevance: 0,
                contains: [
                  {
                    begin: /:/,
                    end: /[=,\/]/,
                    endsWithParent: true,
                    contains: [
                      KOTLIN_PAREN_TYPE,
                      hljs.C_LINE_COMMENT_MODE,
                      KOTLIN_NESTED_COMMENT
                    ],
                    relevance: 0
                  },
                  hljs.C_LINE_COMMENT_MODE,
                  KOTLIN_NESTED_COMMENT,
                  ANNOTATION_USE_SITE,
                  ANNOTATION,
                  STRING,
                  hljs.C_NUMBER_MODE
                ]
              },
              KOTLIN_NESTED_COMMENT
            ]
          },
          {
            begin: [
              /class|interface|trait/,
              /\s+/,
              hljs.UNDERSCORE_IDENT_RE
            ],
            beginScope: {
              3: "title.class"
            },
            keywords: "class interface trait",
            end: /[:\{(]|$/,
            excludeEnd: true,
            illegal: "extends implements",
            contains: [
              { beginKeywords: "public protected internal private constructor" },
              hljs.UNDERSCORE_TITLE_MODE,
              {
                className: "type",
                begin: /</,
                end: />/,
                excludeBegin: true,
                excludeEnd: true,
                relevance: 0
              },
              {
                className: "type",
                begin: /[,:]\s*/,
                end: /[<\(,){\s]|$/,
                excludeBegin: true,
                returnEnd: true
              },
              ANNOTATION_USE_SITE,
              ANNOTATION
            ]
          },
          STRING,
          {
            className: "meta",
            begin: "^#!/usr/bin/env",
            end: "$",
            illegal: "\n"
          },
          KOTLIN_NUMBER_MODE
        ]
      };
    }
    module.exports = kotlin;
  }
}["highlight.js/lib/languages/kotlin.js"]);


// highlight.js/lib/languages/less.js
export var $6c18b120 = $$m({
  "highlight.js/lib/languages/less.js": (module, exports) => {
    const MODES = (hljs) => {
      return {
        IMPORTANT: {
          scope: "meta",
          begin: "!important"
        },
        BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
        HEXCOLOR: {
          scope: "number",
          begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
        },
        FUNCTION_DISPATCH: {
          className: "built_in",
          begin: /[\w-]+(?=\()/
        },
        ATTRIBUTE_SELECTOR_MODE: {
          scope: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE
          ]
        },
        CSS_NUMBER_MODE: {
          scope: "number",
          begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
          relevance: 0
        },
        CSS_VARIABLE: {
          className: "attr",
          begin: /--[A-Za-z][A-Za-z0-9_-]*/
        }
      };
    };
    const TAGS = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "p",
      "q",
      "quote",
      "samp",
      "section",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video"
    ];
    const MEDIA_FEATURES = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      "min-width",
      "max-width",
      "min-height",
      "max-height"
    ];
    const PSEUDO_CLASSES = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir",
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has",
      "host",
      "host-context",
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is",
      "lang",
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not",
      "nth-child",
      "nth-col",
      "nth-last-child",
      "nth-last-col",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where"
    ];
    const PSEUDO_ELEMENTS = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error"
    ];
    const ATTRIBUTES = [
      "align-content",
      "align-items",
      "align-self",
      "all",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "block-size",
      "border",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "clip-path",
      "clip-rule",
      "color",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "empty-cells",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "flow",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "glyph-orientation-vertical",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "inline-size",
      "isolation",
      "justify-content",
      "left",
      "letter-spacing",
      "line-break",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "right",
      "row-gap",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "speak",
      "speak-as",
      "src",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-all",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-position",
      "top",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "unicode-bidi",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "z-index"
    ].reverse();
    const PSEUDO_SELECTORS = PSEUDO_CLASSES.concat(PSEUDO_ELEMENTS);
    function less(hljs) {
      const modes = MODES(hljs);
      const PSEUDO_SELECTORS$1 = PSEUDO_SELECTORS;
      const AT_MODIFIERS = "and or not only";
      const IDENT_RE = "[\\w-]+";
      const INTERP_IDENT_RE = "(" + IDENT_RE + "|@\\{" + IDENT_RE + "\\})";
      const RULES = [];
      const VALUE_MODES = [];
      const STRING_MODE = function(c) {
        return {
          className: "string",
          begin: "~?" + c + ".*?" + c
        };
      };
      const IDENT_MODE = function(name, begin, relevance) {
        return {
          className: name,
          begin,
          relevance
        };
      };
      const AT_KEYWORDS = {
        $pattern: /[a-z-]+/,
        keyword: AT_MODIFIERS,
        attribute: MEDIA_FEATURES.join(" ")
      };
      const PARENS_MODE = {
        begin: "\\(",
        end: "\\)",
        contains: VALUE_MODES,
        keywords: AT_KEYWORDS,
        relevance: 0
      };
      VALUE_MODES.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRING_MODE("'"), STRING_MODE('"'), modes.CSS_NUMBER_MODE, {
        begin: "(url|data-uri)\\(",
        starts: {
          className: "string",
          end: "[\\)\\n]",
          excludeEnd: true
        }
      }, modes.HEXCOLOR, PARENS_MODE, IDENT_MODE("variable", "@@?" + IDENT_RE, 10), IDENT_MODE("variable", "@\\{" + IDENT_RE + "\\}"), IDENT_MODE("built_in", "~?`[^`]*?`"), {
        className: "attribute",
        begin: IDENT_RE + "\\s*:",
        end: ":",
        returnBegin: true,
        excludeEnd: true
      }, modes.IMPORTANT, { beginKeywords: "and not" }, modes.FUNCTION_DISPATCH);
      const VALUE_WITH_RULESETS = VALUE_MODES.concat({
        begin: /\{/,
        end: /\}/,
        contains: RULES
      });
      const MIXIN_GUARD_MODE = {
        beginKeywords: "when",
        endsWithParent: true,
        contains: [{ beginKeywords: "and not" }].concat(VALUE_MODES)
      };
      const RULE_MODE = {
        begin: INTERP_IDENT_RE + "\\s*:",
        returnBegin: true,
        end: /[;}]/,
        relevance: 0,
        contains: [
          { begin: /-(webkit|moz|ms|o)-/ },
          modes.CSS_VARIABLE,
          {
            className: "attribute",
            begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b",
            end: /(?=:)/,
            starts: {
              endsWithParent: true,
              illegal: "[<=$]",
              relevance: 0,
              contains: VALUE_MODES
            }
          }
        ]
      };
      const AT_RULE_MODE = {
        className: "keyword",
        begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
        starts: {
          end: "[;{}]",
          keywords: AT_KEYWORDS,
          returnEnd: true,
          contains: VALUE_MODES,
          relevance: 0
        }
      };
      const VAR_RULE_MODE = {
        className: "variable",
        variants: [
          {
            begin: "@" + IDENT_RE + "\\s*:",
            relevance: 15
          },
          { begin: "@" + IDENT_RE }
        ],
        starts: {
          end: "[;}]",
          returnEnd: true,
          contains: VALUE_WITH_RULESETS
        }
      };
      const SELECTOR_MODE = {
        variants: [
          {
            begin: "[\\.#:&\\[>]",
            end: "[;{}]"
          },
          {
            begin: INTERP_IDENT_RE,
            end: /\{/
          }
        ],
        returnBegin: true,
        returnEnd: true,
        illegal: '[<=\'$"]',
        relevance: 0,
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          MIXIN_GUARD_MODE,
          IDENT_MODE("keyword", "all\\b"),
          IDENT_MODE("variable", "@\\{" + IDENT_RE + "\\}"),
          {
            begin: "\\b(" + TAGS.join("|") + ")\\b",
            className: "selector-tag"
          },
          modes.CSS_NUMBER_MODE,
          IDENT_MODE("selector-tag", INTERP_IDENT_RE, 0),
          IDENT_MODE("selector-id", "#" + INTERP_IDENT_RE),
          IDENT_MODE("selector-class", "\\." + INTERP_IDENT_RE, 0),
          IDENT_MODE("selector-tag", "&", 0),
          modes.ATTRIBUTE_SELECTOR_MODE,
          {
            className: "selector-pseudo",
            begin: ":(" + PSEUDO_CLASSES.join("|") + ")"
          },
          {
            className: "selector-pseudo",
            begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")"
          },
          {
            begin: /\(/,
            end: /\)/,
            relevance: 0,
            contains: VALUE_WITH_RULESETS
          },
          { begin: "!important" },
          modes.FUNCTION_DISPATCH
        ]
      };
      const PSEUDO_SELECTOR_MODE = {
        begin: IDENT_RE + ":(:)?" + `(${PSEUDO_SELECTORS$1.join("|")})`,
        returnBegin: true,
        contains: [SELECTOR_MODE]
      };
      RULES.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, AT_RULE_MODE, VAR_RULE_MODE, PSEUDO_SELECTOR_MODE, RULE_MODE, SELECTOR_MODE, MIXIN_GUARD_MODE, modes.FUNCTION_DISPATCH);
      return {
        name: "Less",
        case_insensitive: true,
        illegal: '[=>\'/<($"]',
        contains: RULES
      };
    }
    module.exports = less;
  }
}["highlight.js/lib/languages/less.js"]);


// highlight.js/lib/languages/r.js
export var $e99190dc = $$m({
  "highlight.js/lib/languages/r.js": (module, exports) => {
    function r(hljs) {
      const regex = hljs.regex;
      const IDENT_RE = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/;
      const NUMBER_TYPES_RE = regex.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/, /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/, /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/);
      const OPERATORS_RE = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/;
      const PUNCTUATION_RE = regex.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
      return {
        name: "R",
        keywords: {
          $pattern: IDENT_RE,
          keyword: "function if in break next repeat else for while",
          literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
          built_in: "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
        },
        contains: [
          hljs.COMMENT(/#'/, /$/, { contains: [
            {
              scope: "doctag",
              match: /@examples/,
              starts: {
                end: regex.lookahead(regex.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)),
                endsParent: true
              }
            },
            {
              scope: "doctag",
              begin: "@param",
              end: /$/,
              contains: [
                {
                  scope: "variable",
                  variants: [
                    { match: IDENT_RE },
                    { match: /`(?:\\.|[^`\\])+`/ }
                  ],
                  endsParent: true
                }
              ]
            },
            {
              scope: "doctag",
              match: /@[a-zA-Z]+/
            },
            {
              scope: "keyword",
              match: /\\[a-zA-Z]+/
            }
          ] }),
          hljs.HASH_COMMENT_MODE,
          {
            scope: "string",
            contains: [hljs.BACKSLASH_ESCAPE],
            variants: [
              hljs.END_SAME_AS_BEGIN({
                begin: /[rR]"(-*)\(/,
                end: /\)(-*)"/
              }),
              hljs.END_SAME_AS_BEGIN({
                begin: /[rR]"(-*)\{/,
                end: /\}(-*)"/
              }),
              hljs.END_SAME_AS_BEGIN({
                begin: /[rR]"(-*)\[/,
                end: /\](-*)"/
              }),
              hljs.END_SAME_AS_BEGIN({
                begin: /[rR]'(-*)\(/,
                end: /\)(-*)'/
              }),
              hljs.END_SAME_AS_BEGIN({
                begin: /[rR]'(-*)\{/,
                end: /\}(-*)'/
              }),
              hljs.END_SAME_AS_BEGIN({
                begin: /[rR]'(-*)\[/,
                end: /\](-*)'/
              }),
              {
                begin: '"',
                end: '"',
                relevance: 0
              },
              {
                begin: "'",
                end: "'",
                relevance: 0
              }
            ]
          },
          {
            relevance: 0,
            variants: [
              {
                scope: {
                  1: "operator",
                  2: "number"
                },
                match: [
                  OPERATORS_RE,
                  NUMBER_TYPES_RE
                ]
              },
              {
                scope: {
                  1: "operator",
                  2: "number"
                },
                match: [
                  /%[^%]*%/,
                  NUMBER_TYPES_RE
                ]
              },
              {
                scope: {
                  1: "punctuation",
                  2: "number"
                },
                match: [
                  PUNCTUATION_RE,
                  NUMBER_TYPES_RE
                ]
              },
              {
                scope: { 2: "number" },
                match: [
                  /[^a-zA-Z0-9._]|^/,
                  NUMBER_TYPES_RE
                ]
              }
            ]
          },
          {
            scope: { 3: "operator" },
            match: [
              IDENT_RE,
              /\s+/,
              /<-/,
              /\s+/
            ]
          },
          {
            scope: "operator",
            relevance: 0,
            variants: [
              { match: OPERATORS_RE },
              { match: /%[^%]*%/ }
            ]
          },
          {
            scope: "punctuation",
            relevance: 0,
            match: PUNCTUATION_RE
          },
          {
            begin: "`",
            end: "`",
            contains: [{ begin: /\\./ }]
          }
        ]
      };
    }
    module.exports = r;
  }
}["highlight.js/lib/languages/r.js"]);


// highlight.js/lib/languages/makefile.js
export var $bf976e53 = $$m({
  "highlight.js/lib/languages/makefile.js": (module, exports) => {
    function makefile(hljs) {
      const VARIABLE = {
        className: "variable",
        variants: [
          {
            begin: "\\$\\(" + hljs.UNDERSCORE_IDENT_RE + "\\)",
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          { begin: /\$[@%<?\^\+\*]/ }
        ]
      };
      const QUOTE_STRING = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          VARIABLE
        ]
      };
      const FUNC = {
        className: "variable",
        begin: /\$\([\w-]+\s/,
        end: /\)/,
        keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
        contains: [VARIABLE]
      };
      const ASSIGNMENT = { begin: "^" + hljs.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" };
      const META = {
        className: "meta",
        begin: /^\.PHONY:/,
        end: /$/,
        keywords: {
          $pattern: /[\.\w]+/,
          keyword: ".PHONY"
        }
      };
      const TARGET = {
        className: "section",
        begin: /^[^\s]+:/,
        end: /$/,
        contains: [VARIABLE]
      };
      return {
        name: "Makefile",
        aliases: [
          "mk",
          "mak",
          "make"
        ],
        keywords: {
          $pattern: /[\w-]+/,
          keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
        },
        contains: [
          hljs.HASH_COMMENT_MODE,
          VARIABLE,
          QUOTE_STRING,
          FUNC,
          ASSIGNMENT,
          META,
          TARGET
        ]
      };
    }
    module.exports = makefile;
  }
}["highlight.js/lib/languages/makefile.js"]);


// highlight.js/lib/languages/perl.js
export var $c4cdb9e = $$m({
  "highlight.js/lib/languages/perl.js": (module, exports) => {
    function perl(hljs) {
      const regex = hljs.regex;
      const KEYWORDS = [
        "abs",
        "accept",
        "alarm",
        "and",
        "atan2",
        "bind",
        "binmode",
        "bless",
        "break",
        "caller",
        "chdir",
        "chmod",
        "chomp",
        "chop",
        "chown",
        "chr",
        "chroot",
        "close",
        "closedir",
        "connect",
        "continue",
        "cos",
        "crypt",
        "dbmclose",
        "dbmopen",
        "defined",
        "delete",
        "die",
        "do",
        "dump",
        "each",
        "else",
        "elsif",
        "endgrent",
        "endhostent",
        "endnetent",
        "endprotoent",
        "endpwent",
        "endservent",
        "eof",
        "eval",
        "exec",
        "exists",
        "exit",
        "exp",
        "fcntl",
        "fileno",
        "flock",
        "for",
        "foreach",
        "fork",
        "format",
        "formline",
        "getc",
        "getgrent",
        "getgrgid",
        "getgrnam",
        "gethostbyaddr",
        "gethostbyname",
        "gethostent",
        "getlogin",
        "getnetbyaddr",
        "getnetbyname",
        "getnetent",
        "getpeername",
        "getpgrp",
        "getpriority",
        "getprotobyname",
        "getprotobynumber",
        "getprotoent",
        "getpwent",
        "getpwnam",
        "getpwuid",
        "getservbyname",
        "getservbyport",
        "getservent",
        "getsockname",
        "getsockopt",
        "given",
        "glob",
        "gmtime",
        "goto",
        "grep",
        "gt",
        "hex",
        "if",
        "index",
        "int",
        "ioctl",
        "join",
        "keys",
        "kill",
        "last",
        "lc",
        "lcfirst",
        "length",
        "link",
        "listen",
        "local",
        "localtime",
        "log",
        "lstat",
        "lt",
        "ma",
        "map",
        "mkdir",
        "msgctl",
        "msgget",
        "msgrcv",
        "msgsnd",
        "my",
        "ne",
        "next",
        "no",
        "not",
        "oct",
        "open",
        "opendir",
        "or",
        "ord",
        "our",
        "pack",
        "package",
        "pipe",
        "pop",
        "pos",
        "print",
        "printf",
        "prototype",
        "push",
        "q|0",
        "qq",
        "quotemeta",
        "qw",
        "qx",
        "rand",
        "read",
        "readdir",
        "readline",
        "readlink",
        "readpipe",
        "recv",
        "redo",
        "ref",
        "rename",
        "require",
        "reset",
        "return",
        "reverse",
        "rewinddir",
        "rindex",
        "rmdir",
        "say",
        "scalar",
        "seek",
        "seekdir",
        "select",
        "semctl",
        "semget",
        "semop",
        "send",
        "setgrent",
        "sethostent",
        "setnetent",
        "setpgrp",
        "setpriority",
        "setprotoent",
        "setpwent",
        "setservent",
        "setsockopt",
        "shift",
        "shmctl",
        "shmget",
        "shmread",
        "shmwrite",
        "shutdown",
        "sin",
        "sleep",
        "socket",
        "socketpair",
        "sort",
        "splice",
        "split",
        "sprintf",
        "sqrt",
        "srand",
        "stat",
        "state",
        "study",
        "sub",
        "substr",
        "symlink",
        "syscall",
        "sysopen",
        "sysread",
        "sysseek",
        "system",
        "syswrite",
        "tell",
        "telldir",
        "tie",
        "tied",
        "time",
        "times",
        "tr",
        "truncate",
        "uc",
        "ucfirst",
        "umask",
        "undef",
        "unless",
        "unlink",
        "unpack",
        "unshift",
        "untie",
        "until",
        "use",
        "utime",
        "values",
        "vec",
        "wait",
        "waitpid",
        "wantarray",
        "warn",
        "when",
        "while",
        "write",
        "x|0",
        "xor",
        "y|0"
      ];
      const REGEX_MODIFIERS = /[dualxmsipngr]{0,12}/;
      const PERL_KEYWORDS = {
        $pattern: /[\w.]+/,
        keyword: KEYWORDS.join(" ")
      };
      const SUBST = {
        className: "subst",
        begin: "[$@]\\{",
        end: "\\}",
        keywords: PERL_KEYWORDS
      };
      const METHOD = {
        begin: /->\{/,
        end: /\}/
      };
      const VAR = { variants: [
        { begin: /\$\d/ },
        { begin: regex.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, `(?![A-Za-z])(?![@\$%])`) },
        {
          begin: /[$%@][^\s\w{]/,
          relevance: 0
        }
      ] };
      const STRING_CONTAINS = [
        hljs.BACKSLASH_ESCAPE,
        SUBST,
        VAR
      ];
      const REGEX_DELIMS = [
        /!/,
        /\//,
        /\|/,
        /\?/,
        /'/,
        /"/,
        /#/
      ];
      const PAIRED_DOUBLE_RE = (prefix, open, close = "\\1") => {
        const middle = close === "\\1" ? close : regex.concat(close, open);
        return regex.concat(regex.concat("(?:", prefix, ")"), open, /(?:\\.|[^\\\/])*?/, middle, /(?:\\.|[^\\\/])*?/, close, REGEX_MODIFIERS);
      };
      const PAIRED_RE = (prefix, open, close) => {
        return regex.concat(regex.concat("(?:", prefix, ")"), open, /(?:\\.|[^\\\/])*?/, close, REGEX_MODIFIERS);
      };
      const PERL_DEFAULT_CONTAINS = [
        VAR,
        hljs.HASH_COMMENT_MODE,
        hljs.COMMENT(/^=\w/, /=cut/, { endsWithParent: true }),
        METHOD,
        {
          className: "string",
          contains: STRING_CONTAINS,
          variants: [
            {
              begin: "q[qwxr]?\\s*\\(",
              end: "\\)",
              relevance: 5
            },
            {
              begin: "q[qwxr]?\\s*\\[",
              end: "\\]",
              relevance: 5
            },
            {
              begin: "q[qwxr]?\\s*\\{",
              end: "\\}",
              relevance: 5
            },
            {
              begin: "q[qwxr]?\\s*\\|",
              end: "\\|",
              relevance: 5
            },
            {
              begin: "q[qwxr]?\\s*<",
              end: ">",
              relevance: 5
            },
            {
              begin: "qw\\s+q",
              end: "q",
              relevance: 5
            },
            {
              begin: "\'",
              end: "\'",
              contains: [hljs.BACKSLASH_ESCAPE]
            },
            {
              begin: '"',
              end: '"'
            },
            {
              begin: "`",
              end: "`",
              contains: [hljs.BACKSLASH_ESCAPE]
            },
            {
              begin: /\{\w+\}/,
              relevance: 0
            },
            {
              begin: "-?\\w+\\s*=>",
              relevance: 0
            }
          ]
        },
        {
          className: "number",
          begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
          relevance: 0
        },
        {
          begin: "(\\/\\/|" + hljs.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
          keywords: "split return print reverse grep",
          relevance: 0,
          contains: [
            hljs.HASH_COMMENT_MODE,
            {
              className: "regexp",
              variants: [
                { begin: PAIRED_DOUBLE_RE("s|tr|y", regex.either(...REGEX_DELIMS, { capture: true })) },
                { begin: PAIRED_DOUBLE_RE("s|tr|y", "\\(", "\\)") },
                { begin: PAIRED_DOUBLE_RE("s|tr|y", "\\[", "\\]") },
                { begin: PAIRED_DOUBLE_RE("s|tr|y", "\\{", "\\}") }
              ],
              relevance: 2
            },
            {
              className: "regexp",
              variants: [
                {
                  begin: /(m|qr)\/\//,
                  relevance: 0
                },
                { begin: PAIRED_RE("(?:m|qr)?", /\//, /\//) },
                { begin: PAIRED_RE("m|qr", regex.either(...REGEX_DELIMS, { capture: true }), /\1/) },
                { begin: PAIRED_RE("m|qr", /\(/, /\)/) },
                { begin: PAIRED_RE("m|qr", /\[/, /\]/) },
                { begin: PAIRED_RE("m|qr", /\{/, /\}/) }
              ]
            }
          ]
        },
        {
          className: "function",
          beginKeywords: "sub",
          end: "(\\s*\\(.*?\\))?[;{]",
          excludeEnd: true,
          relevance: 5,
          contains: [hljs.TITLE_MODE]
        },
        {
          begin: "-\\w\\b",
          relevance: 0
        },
        {
          begin: "^__DATA__$",
          end: "^__END__$",
          subLanguage: "mojolicious",
          contains: [
            {
              begin: "^@@.*",
              end: "$",
              className: "comment"
            }
          ]
        }
      ];
      SUBST.contains = PERL_DEFAULT_CONTAINS;
      METHOD.contains = PERL_DEFAULT_CONTAINS;
      return {
        name: "Perl",
        aliases: [
          "pl",
          "pm"
        ],
        keywords: PERL_KEYWORDS,
        contains: PERL_DEFAULT_CONTAINS
      };
    }
    module.exports = perl;
  }
}["highlight.js/lib/languages/perl.js"]);


// highlight.js/lib/languages/objectivec.js
export var $a4701c1d = $$m({
  "highlight.js/lib/languages/objectivec.js": (module, exports) => {
    function objectivec(hljs) {
      const API_CLASS = {
        className: "built_in",
        begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
      };
      const IDENTIFIER_RE = /[a-zA-Z@][a-zA-Z0-9_]*/;
      const TYPES = [
        "int",
        "float",
        "char",
        "unsigned",
        "signed",
        "short",
        "long",
        "double",
        "wchar_t",
        "unichar",
        "void",
        "bool",
        "BOOL",
        "id|0",
        "_Bool"
      ];
      const KWS = [
        "while",
        "export",
        "sizeof",
        "typedef",
        "const",
        "struct",
        "for",
        "union",
        "volatile",
        "static",
        "mutable",
        "if",
        "do",
        "return",
        "goto",
        "enum",
        "else",
        "break",
        "extern",
        "asm",
        "case",
        "default",
        "register",
        "explicit",
        "typename",
        "switch",
        "continue",
        "inline",
        "readonly",
        "assign",
        "readwrite",
        "self",
        "@synchronized",
        "id",
        "typeof",
        "nonatomic",
        "IBOutlet",
        "IBAction",
        "strong",
        "weak",
        "copy",
        "in",
        "out",
        "inout",
        "bycopy",
        "byref",
        "oneway",
        "__strong",
        "__weak",
        "__block",
        "__autoreleasing",
        "@private",
        "@protected",
        "@public",
        "@try",
        "@property",
        "@end",
        "@throw",
        "@catch",
        "@finally",
        "@autoreleasepool",
        "@synthesize",
        "@dynamic",
        "@selector",
        "@optional",
        "@required",
        "@encode",
        "@package",
        "@import",
        "@defs",
        "@compatibility_alias",
        "__bridge",
        "__bridge_transfer",
        "__bridge_retained",
        "__bridge_retain",
        "__covariant",
        "__contravariant",
        "__kindof",
        "_Nonnull",
        "_Nullable",
        "_Null_unspecified",
        "__FUNCTION__",
        "__PRETTY_FUNCTION__",
        "__attribute__",
        "getter",
        "setter",
        "retain",
        "unsafe_unretained",
        "nonnull",
        "nullable",
        "null_unspecified",
        "null_resettable",
        "class",
        "instancetype",
        "NS_DESIGNATED_INITIALIZER",
        "NS_UNAVAILABLE",
        "NS_REQUIRES_SUPER",
        "NS_RETURNS_INNER_POINTER",
        "NS_INLINE",
        "NS_AVAILABLE",
        "NS_DEPRECATED",
        "NS_ENUM",
        "NS_OPTIONS",
        "NS_SWIFT_UNAVAILABLE",
        "NS_ASSUME_NONNULL_BEGIN",
        "NS_ASSUME_NONNULL_END",
        "NS_REFINED_FOR_SWIFT",
        "NS_SWIFT_NAME",
        "NS_SWIFT_NOTHROW",
        "NS_DURING",
        "NS_HANDLER",
        "NS_ENDHANDLER",
        "NS_VALUERETURN",
        "NS_VOIDRETURN"
      ];
      const LITERALS = [
        "false",
        "true",
        "FALSE",
        "TRUE",
        "nil",
        "YES",
        "NO",
        "NULL"
      ];
      const BUILT_INS = [
        "dispatch_once_t",
        "dispatch_queue_t",
        "dispatch_sync",
        "dispatch_async",
        "dispatch_once"
      ];
      const KEYWORDS = {
        "variable.language": [
          "this",
          "super"
        ],
        $pattern: IDENTIFIER_RE,
        keyword: KWS,
        literal: LITERALS,
        built_in: BUILT_INS,
        type: TYPES
      };
      const CLASS_KEYWORDS = {
        $pattern: IDENTIFIER_RE,
        keyword: [
          "@interface",
          "@class",
          "@protocol",
          "@implementation"
        ]
      };
      return {
        name: "Objective-C",
        aliases: [
          "mm",
          "objc",
          "obj-c",
          "obj-c++",
          "objective-c++"
        ],
        keywords: KEYWORDS,
        illegal: "</",
        contains: [
          API_CLASS,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.C_NUMBER_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          {
            className: "string",
            variants: [
              {
                begin: '@"',
                end: '"',
                illegal: "\\n",
                contains: [hljs.BACKSLASH_ESCAPE]
              }
            ]
          },
          {
            className: "meta",
            begin: /#\s*[a-z]+\b/,
            end: /$/,
            keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
            contains: [
              {
                begin: /\\\n/,
                relevance: 0
              },
              hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" }),
              {
                className: "string",
                begin: /<.*?>/,
                end: /$/,
                illegal: "\\n"
              },
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          {
            className: "class",
            begin: "(" + CLASS_KEYWORDS.keyword.join("|") + ")\\b",
            end: /(\{|$)/,
            excludeEnd: true,
            keywords: CLASS_KEYWORDS,
            contains: [hljs.UNDERSCORE_TITLE_MODE]
          },
          {
            begin: "\\." + hljs.UNDERSCORE_IDENT_RE,
            relevance: 0
          }
        ]
      };
    }
    module.exports = objectivec;
  }
}["highlight.js/lib/languages/objectivec.js"]);


// highlight.js/lib/languages/php.js
export var $dd093722 = $$m({
  "highlight.js/lib/languages/php.js": (module, exports) => {
    function php(hljs) {
      const regex = hljs.regex;
      const NOT_PERL_ETC = /(?![A-Za-z0-9])(?![$])/;
      const IDENT_RE = regex.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, NOT_PERL_ETC);
      const PASCAL_CASE_CLASS_NAME_RE = regex.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, NOT_PERL_ETC);
      const VARIABLE = {
        scope: "variable",
        match: "\\$+" + IDENT_RE
      };
      const PREPROCESSOR = {
        scope: "meta",
        variants: [
          { begin: /<\?php/, relevance: 10 },
          { begin: /<\?=/ },
          { begin: /<\?/, relevance: 0.1 },
          { begin: /\?>/ }
        ]
      };
      const SUBST = {
        scope: "subst",
        variants: [
          { begin: /\$\w+/ },
          {
            begin: /\{\$/,
            end: /\}/
          }
        ]
      };
      const SINGLE_QUOTED = hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null });
      const DOUBLE_QUOTED = hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null,
        contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST)
      });
      const HEREDOC = hljs.END_SAME_AS_BEGIN({
        begin: /<<<[ \t]*(\w+)\n/,
        end: /[ \t]*(\w+)\b/,
        contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST)
      });
      const WHITESPACE = "[ \t\n]";
      const STRING = {
        scope: "string",
        variants: [
          DOUBLE_QUOTED,
          SINGLE_QUOTED,
          HEREDOC
        ]
      };
      const NUMBER = {
        scope: "number",
        variants: [
          { begin: `\\b0[bB][01]+(?:_[01]+)*\\b` },
          { begin: `\\b0[oO][0-7]+(?:_[0-7]+)*\\b` },
          { begin: `\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b` },
          { begin: `(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?` }
        ],
        relevance: 0
      };
      const LITERALS = [
        "false",
        "null",
        "true"
      ];
      const KWS = [
        "__CLASS__",
        "__DIR__",
        "__FILE__",
        "__FUNCTION__",
        "__COMPILER_HALT_OFFSET__",
        "__LINE__",
        "__METHOD__",
        "__NAMESPACE__",
        "__TRAIT__",
        "die",
        "echo",
        "exit",
        "include",
        "include_once",
        "print",
        "require",
        "require_once",
        "array",
        "abstract",
        "and",
        "as",
        "binary",
        "bool",
        "boolean",
        "break",
        "callable",
        "case",
        "catch",
        "class",
        "clone",
        "const",
        "continue",
        "declare",
        "default",
        "do",
        "double",
        "else",
        "elseif",
        "empty",
        "enddeclare",
        "endfor",
        "endforeach",
        "endif",
        "endswitch",
        "endwhile",
        "enum",
        "eval",
        "extends",
        "final",
        "finally",
        "float",
        "for",
        "foreach",
        "from",
        "global",
        "goto",
        "if",
        "implements",
        "instanceof",
        "insteadof",
        "int",
        "integer",
        "interface",
        "isset",
        "iterable",
        "list",
        "match|0",
        "mixed",
        "new",
        "never",
        "object",
        "or",
        "private",
        "protected",
        "public",
        "readonly",
        "real",
        "return",
        "string",
        "switch",
        "throw",
        "trait",
        "try",
        "unset",
        "use",
        "var",
        "void",
        "while",
        "xor",
        "yield"
      ];
      const BUILT_INS = [
        "Error|0",
        "AppendIterator",
        "ArgumentCountError",
        "ArithmeticError",
        "ArrayIterator",
        "ArrayObject",
        "AssertionError",
        "BadFunctionCallException",
        "BadMethodCallException",
        "CachingIterator",
        "CallbackFilterIterator",
        "CompileError",
        "Countable",
        "DirectoryIterator",
        "DivisionByZeroError",
        "DomainException",
        "EmptyIterator",
        "ErrorException",
        "Exception",
        "FilesystemIterator",
        "FilterIterator",
        "GlobIterator",
        "InfiniteIterator",
        "InvalidArgumentException",
        "IteratorIterator",
        "LengthException",
        "LimitIterator",
        "LogicException",
        "MultipleIterator",
        "NoRewindIterator",
        "OutOfBoundsException",
        "OutOfRangeException",
        "OuterIterator",
        "OverflowException",
        "ParentIterator",
        "ParseError",
        "RangeException",
        "RecursiveArrayIterator",
        "RecursiveCachingIterator",
        "RecursiveCallbackFilterIterator",
        "RecursiveDirectoryIterator",
        "RecursiveFilterIterator",
        "RecursiveIterator",
        "RecursiveIteratorIterator",
        "RecursiveRegexIterator",
        "RecursiveTreeIterator",
        "RegexIterator",
        "RuntimeException",
        "SeekableIterator",
        "SplDoublyLinkedList",
        "SplFileInfo",
        "SplFileObject",
        "SplFixedArray",
        "SplHeap",
        "SplMaxHeap",
        "SplMinHeap",
        "SplObjectStorage",
        "SplObserver",
        "SplPriorityQueue",
        "SplQueue",
        "SplStack",
        "SplSubject",
        "SplTempFileObject",
        "TypeError",
        "UnderflowException",
        "UnexpectedValueException",
        "UnhandledMatchError",
        "ArrayAccess",
        "BackedEnum",
        "Closure",
        "Fiber",
        "Generator",
        "Iterator",
        "IteratorAggregate",
        "Serializable",
        "Stringable",
        "Throwable",
        "Traversable",
        "UnitEnum",
        "WeakReference",
        "WeakMap",
        "Directory",
        "__PHP_Incomplete_Class",
        "parent",
        "php_user_filter",
        "self",
        "static",
        "stdClass"
      ];
      const dualCase = (items) => {
        const result = [];
        items.forEach((item) => {
          result.push(item);
          if (item.toLowerCase() === item)
            result.push(item.toUpperCase());
          else
            result.push(item.toLowerCase());
        });
        return result;
      };
      const KEYWORDS = {
        keyword: KWS,
        literal: dualCase(LITERALS),
        built_in: BUILT_INS
      };
      const normalizeKeywords = (items) => {
        return items.map((item) => {
          return item.replace(/\|\d+$/, "");
        });
      };
      const CONSTRUCTOR_CALL = { variants: [
        {
          match: [
            /new/,
            regex.concat(WHITESPACE, "+"),
            regex.concat("(?!", normalizeKeywords(BUILT_INS).join("\\b|"), "\\b)"),
            PASCAL_CASE_CLASS_NAME_RE
          ],
          scope: {
            1: "keyword",
            4: "title.class"
          }
        }
      ] };
      const CONSTANT_REFERENCE = regex.concat(IDENT_RE, "\\b(?!\\()");
      const LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON = { variants: [
        {
          match: [
            regex.concat(/::/, regex.lookahead(/(?!class\b)/)),
            CONSTANT_REFERENCE
          ],
          scope: { 2: "variable.constant" }
        },
        {
          match: [
            /::/,
            /class/
          ],
          scope: { 2: "variable.language" }
        },
        {
          match: [
            PASCAL_CASE_CLASS_NAME_RE,
            regex.concat(/::/, regex.lookahead(/(?!class\b)/)),
            CONSTANT_REFERENCE
          ],
          scope: {
            1: "title.class",
            3: "variable.constant"
          }
        },
        {
          match: [
            PASCAL_CASE_CLASS_NAME_RE,
            regex.concat("::", regex.lookahead(/(?!class\b)/))
          ],
          scope: { 1: "title.class" }
        },
        {
          match: [
            PASCAL_CASE_CLASS_NAME_RE,
            /::/,
            /class/
          ],
          scope: {
            1: "title.class",
            3: "variable.language"
          }
        }
      ] };
      const NAMED_ARGUMENT = {
        scope: "attr",
        match: regex.concat(IDENT_RE, regex.lookahead(":"), regex.lookahead(/(?!::)/))
      };
      const PARAMS_MODE = {
        relevance: 0,
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        contains: [
          NAMED_ARGUMENT,
          VARIABLE,
          LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
          hljs.C_BLOCK_COMMENT_MODE,
          STRING,
          NUMBER,
          CONSTRUCTOR_CALL
        ]
      };
      const FUNCTION_INVOKE = {
        relevance: 0,
        match: [
          /\b/,
          regex.concat("(?!fn\\b|function\\b|", normalizeKeywords(KWS).join("\\b|"), "|", normalizeKeywords(BUILT_INS).join("\\b|"), "\\b)"),
          IDENT_RE,
          regex.concat(WHITESPACE, "*"),
          regex.lookahead(/(?=\()/)
        ],
        scope: { 3: "title.function.invoke" },
        contains: [PARAMS_MODE]
      };
      PARAMS_MODE.contains.push(FUNCTION_INVOKE);
      const ATTRIBUTE_CONTAINS = [
        NAMED_ARGUMENT,
        LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
        hljs.C_BLOCK_COMMENT_MODE,
        STRING,
        NUMBER,
        CONSTRUCTOR_CALL
      ];
      const ATTRIBUTES = {
        begin: regex.concat(/#\[\s*/, PASCAL_CASE_CLASS_NAME_RE),
        beginScope: "meta",
        end: /]/,
        endScope: "meta",
        keywords: {
          literal: LITERALS,
          keyword: [
            "new",
            "array"
          ]
        },
        contains: [
          {
            begin: /\[/,
            end: /]/,
            keywords: {
              literal: LITERALS,
              keyword: [
                "new",
                "array"
              ]
            },
            contains: [
              "self",
              ...ATTRIBUTE_CONTAINS
            ]
          },
          ...ATTRIBUTE_CONTAINS,
          {
            scope: "meta",
            match: PASCAL_CASE_CLASS_NAME_RE
          }
        ]
      };
      return {
        case_insensitive: false,
        keywords: KEYWORDS,
        contains: [
          ATTRIBUTES,
          hljs.HASH_COMMENT_MODE,
          hljs.COMMENT("//", "$"),
          hljs.COMMENT("/\\*", "\\*/", { contains: [
            {
              scope: "doctag",
              match: "@[A-Za-z]+"
            }
          ] }),
          {
            match: /__halt_compiler\(\);/,
            keywords: "__halt_compiler",
            starts: {
              scope: "comment",
              end: hljs.MATCH_NOTHING_RE,
              contains: [
                {
                  match: /\?>/,
                  scope: "meta",
                  endsParent: true
                }
              ]
            }
          },
          PREPROCESSOR,
          {
            scope: "variable.language",
            match: /\$this\b/
          },
          VARIABLE,
          FUNCTION_INVOKE,
          LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
          {
            match: [
              /const/,
              /\s/,
              IDENT_RE
            ],
            scope: {
              1: "keyword",
              3: "variable.constant"
            }
          },
          CONSTRUCTOR_CALL,
          {
            scope: "function",
            relevance: 0,
            beginKeywords: "fn function",
            end: /[;{]/,
            excludeEnd: true,
            illegal: "[$%\\[]",
            contains: [
              { beginKeywords: "use" },
              hljs.UNDERSCORE_TITLE_MODE,
              {
                begin: "=>",
                endsParent: true
              },
              {
                scope: "params",
                begin: "\\(",
                end: "\\)",
                excludeBegin: true,
                excludeEnd: true,
                keywords: KEYWORDS,
                contains: [
                  "self",
                  VARIABLE,
                  LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
                  hljs.C_BLOCK_COMMENT_MODE,
                  STRING,
                  NUMBER
                ]
              }
            ]
          },
          {
            scope: "class",
            variants: [
              {
                beginKeywords: "enum",
                illegal: /[($"]/
              },
              {
                beginKeywords: "class interface trait",
                illegal: /[:($"]/
              }
            ],
            relevance: 0,
            end: /\{/,
            excludeEnd: true,
            contains: [
              { beginKeywords: "extends implements" },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          },
          {
            beginKeywords: "namespace",
            relevance: 0,
            end: ";",
            illegal: /[.']/,
            contains: [hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
          },
          {
            beginKeywords: "use",
            relevance: 0,
            end: ";",
            contains: [
              {
                match: /\b(as|const|function)\b/,
                scope: "keyword"
              },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          },
          STRING,
          NUMBER
        ]
      };
    }
    module.exports = php;
  }
}["highlight.js/lib/languages/php.js"]);


// highlight.js/lib/languages/php-template.js
export var $7995610a = $$m({
  "highlight.js/lib/languages/php-template.js": (module, exports) => {
    function phpTemplate(hljs) {
      return {
        name: "PHP template",
        subLanguage: "xml",
        contains: [
          {
            begin: /<\?(php|=)?/,
            end: /\?>/,
            subLanguage: "php",
            contains: [
              {
                begin: "/\\*",
                end: "\\*/",
                skip: true
              },
              {
                begin: 'b"',
                end: '"',
                skip: true
              },
              {
                begin: "b\'",
                end: "\'",
                skip: true
              },
              hljs.inherit(hljs.APOS_STRING_MODE, {
                illegal: null,
                className: null,
                contains: null,
                skip: true
              }),
              hljs.inherit(hljs.QUOTE_STRING_MODE, {
                illegal: null,
                className: null,
                contains: null,
                skip: true
              })
            ]
          }
        ]
      };
    }
    module.exports = phpTemplate;
  }
}["highlight.js/lib/languages/php-template.js"]);


// highlight.js/lib/languages/plaintext.js
export var $c1c74a3f = $$m({
  "highlight.js/lib/languages/plaintext.js": (module, exports) => {
    function plaintext(hljs) {
      return {
        name: "Plain text",
        aliases: [
          "text",
          "txt"
        ],
        disableAutodetect: true
      };
    }
    module.exports = plaintext;
  }
}["highlight.js/lib/languages/plaintext.js"]);


// highlight.js/lib/languages/python.js
export var $77f45a8e = $$m({
  "highlight.js/lib/languages/python.js": (module, exports) => {
    function python(hljs) {
      const regex = hljs.regex;
      const IDENT_RE = /[\p{XID_Start}_]\p{XID_Continue}*/u;
      const RESERVED_WORDS = [
        "and",
        "as",
        "assert",
        "async",
        "await",
        "break",
        "case",
        "class",
        "continue",
        "def",
        "del",
        "elif",
        "else",
        "except",
        "finally",
        "for",
        "from",
        "global",
        "if",
        "import",
        "in",
        "is",
        "lambda",
        "match",
        "nonlocal|10",
        "not",
        "or",
        "pass",
        "raise",
        "return",
        "try",
        "while",
        "with",
        "yield"
      ];
      const BUILT_INS = [
        "__import__",
        "abs",
        "all",
        "any",
        "ascii",
        "bin",
        "bool",
        "breakpoint",
        "bytearray",
        "bytes",
        "callable",
        "chr",
        "classmethod",
        "compile",
        "complex",
        "delattr",
        "dict",
        "dir",
        "divmod",
        "enumerate",
        "eval",
        "exec",
        "filter",
        "float",
        "format",
        "frozenset",
        "getattr",
        "globals",
        "hasattr",
        "hash",
        "help",
        "hex",
        "id",
        "input",
        "int",
        "isinstance",
        "issubclass",
        "iter",
        "len",
        "list",
        "locals",
        "map",
        "max",
        "memoryview",
        "min",
        "next",
        "object",
        "oct",
        "open",
        "ord",
        "pow",
        "print",
        "property",
        "range",
        "repr",
        "reversed",
        "round",
        "set",
        "setattr",
        "slice",
        "sorted",
        "staticmethod",
        "str",
        "sum",
        "super",
        "tuple",
        "type",
        "vars",
        "zip"
      ];
      const LITERALS = [
        "__debug__",
        "Ellipsis",
        "False",
        "None",
        "NotImplemented",
        "True"
      ];
      const TYPES = [
        "Any",
        "Callable",
        "Coroutine",
        "Dict",
        "List",
        "Literal",
        "Generic",
        "Optional",
        "Sequence",
        "Set",
        "Tuple",
        "Type",
        "Union"
      ];
      const KEYWORDS = {
        $pattern: /[A-Za-z]\w+|__\w+__/,
        keyword: RESERVED_WORDS,
        built_in: BUILT_INS,
        literal: LITERALS,
        type: TYPES
      };
      const PROMPT = {
        className: "meta",
        begin: /^(>>>|\.\.\.) /
      };
      const SUBST = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS,
        illegal: /#/
      };
      const LITERAL_BRACKET = {
        begin: /\{\{/,
        relevance: 0
      };
      const STRING = {
        className: "string",
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
            end: /'''/,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              PROMPT
            ],
            relevance: 10
          },
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
            end: /"""/,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              PROMPT
            ],
            relevance: 10
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])'''/,
            end: /'''/,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              PROMPT,
              LITERAL_BRACKET,
              SUBST
            ]
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])"""/,
            end: /"""/,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              PROMPT,
              LITERAL_BRACKET,
              SUBST
            ]
          },
          {
            begin: /([uU]|[rR])'/,
            end: /'/,
            relevance: 10
          },
          {
            begin: /([uU]|[rR])"/,
            end: /"/,
            relevance: 10
          },
          {
            begin: /([bB]|[bB][rR]|[rR][bB])'/,
            end: /'/
          },
          {
            begin: /([bB]|[bB][rR]|[rR][bB])"/,
            end: /"/
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])'/,
            end: /'/,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              LITERAL_BRACKET,
              SUBST
            ]
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])"/,
            end: /"/,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              LITERAL_BRACKET,
              SUBST
            ]
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ]
      };
      const digitpart = "[0-9](_?[0-9])*";
      const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
      const lookahead = `\\b|${RESERVED_WORDS.join("|")}`;
      const NUMBER = {
        className: "number",
        relevance: 0,
        variants: [
          {
            begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})`
          },
          {
            begin: `(${pointfloat})[jJ]?`
          },
          {
            begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})`
          },
          {
            begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})`
          },
          {
            begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})`
          },
          {
            begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})`
          },
          {
            begin: `\\b(${digitpart})[jJ](?=${lookahead})`
          }
        ]
      };
      const COMMENT_TYPE = {
        className: "comment",
        begin: regex.lookahead(/# type:/),
        end: /$/,
        keywords: KEYWORDS,
        contains: [
          {
            begin: /# type:/
          },
          {
            begin: /#/,
            end: /\b\B/,
            endsWithParent: true
          }
        ]
      };
      const PARAMS = {
        className: "params",
        variants: [
          {
            className: "",
            begin: /\(\s*\)/,
            skip: true
          },
          {
            begin: /\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: [
              "self",
              PROMPT,
              NUMBER,
              STRING,
              hljs.HASH_COMMENT_MODE
            ]
          }
        ]
      };
      SUBST.contains = [
        STRING,
        NUMBER,
        PROMPT
      ];
      return {
        name: "Python",
        aliases: [
          "py",
          "gyp",
          "ipython"
        ],
        unicodeRegex: true,
        keywords: KEYWORDS,
        illegal: /(<\/|->|\?)|=>/,
        contains: [
          PROMPT,
          NUMBER,
          {
            begin: /\bself\b/
          },
          {
            beginKeywords: "if",
            relevance: 0
          },
          STRING,
          COMMENT_TYPE,
          hljs.HASH_COMMENT_MODE,
          {
            match: [
              /\bdef/,
              /\s+/,
              IDENT_RE
            ],
            scope: {
              1: "keyword",
              3: "title.function"
            },
            contains: [PARAMS]
          },
          {
            variants: [
              {
                match: [
                  /\bclass/,
                  /\s+/,
                  IDENT_RE,
                  /\s*/,
                  /\(\s*/,
                  IDENT_RE,
                  /\s*\)/
                ]
              },
              {
                match: [
                  /\bclass/,
                  /\s+/,
                  IDENT_RE
                ]
              }
            ],
            scope: {
              1: "keyword",
              3: "title.class",
              6: "title.class.inherited"
            }
          },
          {
            className: "meta",
            begin: /^[\t ]*@/,
            end: /(?=#)|$/,
            contains: [
              NUMBER,
              PARAMS,
              STRING
            ]
          }
        ]
      };
    }
    module.exports = python;
  }
}["highlight.js/lib/languages/python.js"]);


// highlight.js/lib/languages/python-repl.js
export var $3f82a139 = $$m({
  "highlight.js/lib/languages/python-repl.js": (module, exports) => {
    function pythonRepl(hljs) {
      return {
        aliases: ["pycon"],
        contains: [
          {
            className: "meta.prompt",
            starts: {
              end: / |$/,
              starts: {
                end: "$",
                subLanguage: "python"
              }
            },
            variants: [
              { begin: /^>>>(?=[ ]|$)/ },
              { begin: /^\.\.\.(?=[ ]|$)/ }
            ]
          }
        ]
      };
    }
    module.exports = pythonRepl;
  }
}["highlight.js/lib/languages/python-repl.js"]);


// highlight.js/lib/core.js
export var $a66bdff1 = $$m({
  "highlight.js/lib/core.js": (module, exports) => {
    var deepFreezeEs6 = { exports: {} };
    function deepFreeze(obj) {
      if (obj instanceof Map)
        obj.clear = obj.delete = obj.set = function() {
          throw new Error("map is read-only");
        };
      else if (obj instanceof Set)
        obj.add = obj.clear = obj.delete = function() {
          throw new Error("set is read-only");
        };
      Object.freeze(obj);
      Object.getOwnPropertyNames(obj).forEach(function(name) {
        var prop = obj[name];
        if (typeof prop == "object" && !Object.isFrozen(prop))
          deepFreeze(prop);
      });
      return obj;
    }
    deepFreezeEs6.exports = deepFreeze;
    deepFreezeEs6.exports.default = deepFreeze;

    class Response {
      constructor(mode) {
        if (mode.data === undefined)
          mode.data = {};
        this.data = mode.data;
        this.isMatchIgnored = false;
      }
      ignoreMatch() {
        this.isMatchIgnored = true;
      }
    }
    function escapeHTML(value) {
      return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    }
    function inherit$1(original, ...objects) {
      const result = Object.create(null);
      for (const key in original)
        result[key] = original[key];
      objects.forEach(function(obj) {
        for (const key in obj)
          result[key] = obj[key];
      });
      return result;
    }
    const SPAN_CLOSE = "</span>";
    const emitsWrappingTags = (node) => {
      return !!node.scope || node.sublanguage && node.language;
    };
    const scopeToCSSClass = (name, { prefix }) => {
      if (name.includes(".")) {
        const pieces = name.split(".");
        return [
          `${prefix}${pieces.shift()}`,
          ...pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`)
        ].join(" ");
      }
      return `${prefix}${name}`;
    };

    class HTMLRenderer {
      constructor(parseTree, options) {
        this.buffer = "";
        this.classPrefix = options.classPrefix;
        parseTree.walk(this);
      }
      addText(text) {
        this.buffer += escapeHTML(text);
      }
      openNode(node) {
        if (!emitsWrappingTags(node))
          return;
        let className = "";
        if (node.sublanguage)
          className = `language-${node.language}`;
        else
          className = scopeToCSSClass(node.scope, { prefix: this.classPrefix });
        this.span(className);
      }
      closeNode(node) {
        if (!emitsWrappingTags(node))
          return;
        this.buffer += SPAN_CLOSE;
      }
      value() {
        return this.buffer;
      }
      span(className) {
        this.buffer += `<span class="${className}">`;
      }
    }
    const newNode = (opts = {}) => {
      const result = { children: [] };
      Object.assign(result, opts);
      return result;
    };

    class TokenTree {
      constructor() {
        this.rootNode = newNode();
        this.stack = [this.rootNode];
      }
      get top() {
        return this.stack[this.stack.length - 1];
      }
      get root() {
        return this.rootNode;
      }
      add(node) {
        this.top.children.push(node);
      }
      openNode(scope) {
        const node = newNode({ scope });
        this.add(node);
        this.stack.push(node);
      }
      closeNode() {
        if (this.stack.length > 1)
          return this.stack.pop();
        return;
      }
      closeAllNodes() {
        while (this.closeNode())
          ;
      }
      toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
      }
      walk(builder) {
        return this.constructor._walk(builder, this.rootNode);
      }
      static _walk(builder, node) {
        if (typeof node === "string")
          builder.addText(node);
        else if (node.children) {
          builder.openNode(node);
          node.children.forEach((child) => this._walk(builder, child));
          builder.closeNode(node);
        }
        return builder;
      }
      static _collapse(node) {
        if (typeof node === "string")
          return;
        if (!node.children)
          return;
        if (node.children.every((el) => typeof el === "string"))
          node.children = [node.children.join("")];
        else
          node.children.forEach((child) => {
            TokenTree._collapse(child);
          });
      }
    }

    class TokenTreeEmitter extends TokenTree {
      constructor(options) {
        super();
        this.options = options;
      }
      addKeyword(text, scope) {
        if (text === "")
          return;
        this.openNode(scope);
        this.addText(text);
        this.closeNode();
      }
      addText(text) {
        if (text === "")
          return;
        this.add(text);
      }
      addSublanguage(emitter, name) {
        const node = emitter.root;
        node.sublanguage = true;
        node.language = name;
        this.add(node);
      }
      toHTML() {
        const renderer = new HTMLRenderer(this, this.options);
        return renderer.value();
      }
      finalize() {
        return true;
      }
    }
    function source(re) {
      if (!re)
        return null;
      if (typeof re === "string")
        return re;
      return re.source;
    }
    function lookahead(re) {
      return concat("(?=", re, ")");
    }
    function anyNumberOfTimes(re) {
      return concat("(?:", re, ")*");
    }
    function optional(re) {
      return concat("(?:", re, ")?");
    }
    function concat(...args) {
      const joined = args.map((x) => source(x)).join("");
      return joined;
    }
    function stripOptionsFromArgs(args) {
      const opts = args[args.length - 1];
      if (typeof opts === "object" && opts.constructor === Object) {
        args.splice(args.length - 1, 1);
        return opts;
      } else
        return {};
    }
    function either(...args) {
      const opts = stripOptionsFromArgs(args);
      const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
      return joined;
    }
    function countMatchGroups(re) {
      return new RegExp(re.toString() + "|").exec("").length - 1;
    }
    function startsWith(re, lexeme) {
      const match = re && re.exec(lexeme);
      return match && match.index === 0;
    }
    const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
    function _rewriteBackreferences(regexps, { joinWith }) {
      let numCaptures = 0;
      return regexps.map((regex) => {
        numCaptures += 1;
        const offset = numCaptures;
        let re = source(regex);
        let out = "";
        while (re.length > 0) {
          const match = BACKREF_RE.exec(re);
          if (!match) {
            out += re;
            break;
          }
          out += re.substring(0, match.index);
          re = re.substring(match.index + match[0].length);
          if (match[0][0] === "\\" && match[1])
            out += "\\" + String(Number(match[1]) + offset);
          else {
            out += match[0];
            if (match[0] === "(")
              numCaptures++;
          }
        }
        return out;
      }).map((re) => `(${re})`).join(joinWith);
    }
    const MATCH_NOTHING_RE = /\b\B/;
    const IDENT_RE = "[a-zA-Z]\\w*";
    const UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
    const NUMBER_RE = "\\b\\d+(\\.\\d+)?";
    const C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    const BINARY_NUMBER_RE = "\\b(0b[01]+)";
    const RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    const SHEBANG = (opts = {}) => {
      const beginShebang = /^#![ ]*\//;
      if (opts.binary)
        opts.begin = concat(beginShebang, /.*\b/, opts.binary, /\b.*/);
      return inherit$1({
        scope: "meta",
        begin: beginShebang,
        end: /$/,
        relevance: 0,
        "on:begin": (m, resp) => {
          if (m.index !== 0)
            resp.ignoreMatch();
        }
      }, opts);
    };
    const BACKSLASH_ESCAPE = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    };
    const APOS_STRING_MODE = {
      scope: "string",
      begin: "\'",
      end: "\'",
      illegal: "\\n",
      contains: [BACKSLASH_ESCAPE]
    };
    const QUOTE_STRING_MODE = {
      scope: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [BACKSLASH_ESCAPE]
    };
    const PHRASAL_WORDS_MODE = {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    };
    const COMMENT = function(begin, end, modeOptions = {}) {
      const mode = inherit$1({
        scope: "comment",
        begin,
        end,
        contains: []
      }, modeOptions);
      mode.contains.push({
        scope: "doctag",
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: true,
        relevance: 0
      });
      const ENGLISH_WORD = either("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
      mode.contains.push({
        begin: concat(/[ ]+/, "(", ENGLISH_WORD, /[.]?[:]?([.][ ]|[ ])/, "){3}")
      });
      return mode;
    };
    const C_LINE_COMMENT_MODE = COMMENT("//", "$");
    const C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
    const HASH_COMMENT_MODE = COMMENT("#", "$");
    const NUMBER_MODE = {
      scope: "number",
      begin: NUMBER_RE,
      relevance: 0
    };
    const C_NUMBER_MODE = {
      scope: "number",
      begin: C_NUMBER_RE,
      relevance: 0
    };
    const BINARY_NUMBER_MODE = {
      scope: "number",
      begin: BINARY_NUMBER_RE,
      relevance: 0
    };
    const REGEXP_MODE = {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [{
        scope: "regexp",
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [
          BACKSLASH_ESCAPE,
          {
            begin: /\[/,
            end: /\]/,
            relevance: 0,
            contains: [BACKSLASH_ESCAPE]
          }
        ]
      }]
    };
    const TITLE_MODE = {
      scope: "title",
      begin: IDENT_RE,
      relevance: 0
    };
    const UNDERSCORE_TITLE_MODE = {
      scope: "title",
      begin: UNDERSCORE_IDENT_RE,
      relevance: 0
    };
    const METHOD_GUARD = {
      begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
      relevance: 0
    };
    const END_SAME_AS_BEGIN = function(mode) {
      return Object.assign(mode, {
        "on:begin": (m, resp) => {
          resp.data._beginMatch = m[1];
        },
        "on:end": (m, resp) => {
          if (resp.data._beginMatch !== m[1])
            resp.ignoreMatch();
        }
      });
    };
    var MODES = Object.freeze({
      __proto__: null,
      MATCH_NOTHING_RE,
      IDENT_RE,
      UNDERSCORE_IDENT_RE,
      NUMBER_RE,
      C_NUMBER_RE,
      BINARY_NUMBER_RE,
      RE_STARTERS_RE,
      SHEBANG,
      BACKSLASH_ESCAPE,
      APOS_STRING_MODE,
      QUOTE_STRING_MODE,
      PHRASAL_WORDS_MODE,
      COMMENT,
      C_LINE_COMMENT_MODE,
      C_BLOCK_COMMENT_MODE,
      HASH_COMMENT_MODE,
      NUMBER_MODE,
      C_NUMBER_MODE,
      BINARY_NUMBER_MODE,
      REGEXP_MODE,
      TITLE_MODE,
      UNDERSCORE_TITLE_MODE,
      METHOD_GUARD,
      END_SAME_AS_BEGIN
    });
    function skipIfHasPrecedingDot(match, response) {
      const before = match.input[match.index - 1];
      if (before === ".")
        response.ignoreMatch();
    }
    function scopeClassName(mode, _parent) {
      if (mode.className !== undefined) {
        mode.scope = mode.className;
        delete mode.className;
      }
    }
    function beginKeywords(mode, parent) {
      if (!parent)
        return;
      if (!mode.beginKeywords)
        return;
      mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
      mode.__beforeBegin = skipIfHasPrecedingDot;
      mode.keywords = mode.keywords || mode.beginKeywords;
      delete mode.beginKeywords;
      if (mode.relevance === undefined)
        mode.relevance = 0;
    }
    function compileIllegal(mode, _parent) {
      if (!Array.isArray(mode.illegal))
        return;
      mode.illegal = either(...mode.illegal);
    }
    function compileMatch(mode, _parent) {
      if (!mode.match)
        return;
      if (mode.begin || mode.end)
        throw new Error("begin & end are not supported with match");
      mode.begin = mode.match;
      delete mode.match;
    }
    function compileRelevance(mode, _parent) {
      if (mode.relevance === undefined)
        mode.relevance = 1;
    }
    const beforeMatchExt = (mode, parent) => {
      if (!mode.beforeMatch)
        return;
      if (mode.starts)
        throw new Error("beforeMatch cannot be used with starts");
      const originalMode = Object.assign({}, mode);
      Object.keys(mode).forEach((key) => {
        delete mode[key];
      });
      mode.keywords = originalMode.keywords;
      mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
      mode.starts = {
        relevance: 0,
        contains: [
          Object.assign(originalMode, { endsParent: true })
        ]
      };
      mode.relevance = 0;
      delete originalMode.beforeMatch;
    };
    const COMMON_KEYWORDS = [
      "of",
      "and",
      "for",
      "in",
      "not",
      "or",
      "if",
      "then",
      "parent",
      "list",
      "value"
    ];
    const DEFAULT_KEYWORD_SCOPE = "keyword";
    function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
      const compiledKeywords = Object.create(null);
      if (typeof rawKeywords === "string")
        compileList(scopeName, rawKeywords.split(" "));
      else if (Array.isArray(rawKeywords))
        compileList(scopeName, rawKeywords);
      else
        Object.keys(rawKeywords).forEach(function(scopeName) {
          Object.assign(compiledKeywords, compileKeywords(rawKeywords[scopeName], caseInsensitive, scopeName));
        });
      return compiledKeywords;
      function compileList(scopeName, keywordList) {
        if (caseInsensitive)
          keywordList = keywordList.map((x) => x.toLowerCase());
        keywordList.forEach(function(keyword) {
          const pair = keyword.split("|");
          compiledKeywords[pair[0]] = [scopeName, scoreForKeyword(pair[0], pair[1])];
        });
      }
    }
    function scoreForKeyword(keyword, providedScore) {
      if (providedScore)
        return Number(providedScore);
      return commonKeyword(keyword) ? 0 : 1;
    }
    function commonKeyword(keyword) {
      return COMMON_KEYWORDS.includes(keyword.toLowerCase());
    }
    const seenDeprecations = {};
    const error = (message) => {
      console.error(message);
    };
    const warn = (message, ...args) => {
      console.log(`WARN: ${message}`, ...args);
    };
    const deprecated = (version, message) => {
      if (seenDeprecations[`${version}/${message}`])
        return;
      console.log(`Deprecated as of ${version}. ${message}`);
      seenDeprecations[`${version}/${message}`] = true;
    };
    const MultiClassError = new Error;
    function remapScopeNames(mode, regexes, { key }) {
      let offset = 0;
      const scopeNames = mode[key];
      const emit = {};
      const positions = {};
      for (let i = 1;i <= regexes.length; i++) {
        positions[i + offset] = scopeNames[i];
        emit[i + offset] = true;
        offset += countMatchGroups(regexes[i - 1]);
      }
      mode[key] = positions;
      mode[key]._emit = emit;
      mode[key]._multi = true;
    }
    function beginMultiClass(mode) {
      if (!Array.isArray(mode.begin))
        return;
      if (mode.skip || mode.excludeBegin || mode.returnBegin) {
        error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
        throw MultiClassError;
      }
      if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
        error("beginScope must be object");
        throw MultiClassError;
      }
      remapScopeNames(mode, mode.begin, { key: "beginScope" });
      mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
    }
    function endMultiClass(mode) {
      if (!Array.isArray(mode.end))
        return;
      if (mode.skip || mode.excludeEnd || mode.returnEnd) {
        error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
        throw MultiClassError;
      }
      if (typeof mode.endScope !== "object" || mode.endScope === null) {
        error("endScope must be object");
        throw MultiClassError;
      }
      remapScopeNames(mode, mode.end, { key: "endScope" });
      mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
    }
    function scopeSugar(mode) {
      if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
        mode.beginScope = mode.scope;
        delete mode.scope;
      }
    }
    function MultiClass(mode) {
      scopeSugar(mode);
      if (typeof mode.beginScope === "string")
        mode.beginScope = { _wrap: mode.beginScope };
      if (typeof mode.endScope === "string")
        mode.endScope = { _wrap: mode.endScope };
      beginMultiClass(mode);
      endMultiClass(mode);
    }
    function compileLanguage(language) {
      function langRe(value, global) {
        return new RegExp(source(value), "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : ""));
      }

      class MultiRegex {
        constructor() {
          this.matchIndexes = {};
          this.regexes = [];
          this.matchAt = 1;
          this.position = 0;
        }
        addRule(re, opts) {
          opts.position = this.position++;
          this.matchIndexes[this.matchAt] = opts;
          this.regexes.push([opts, re]);
          this.matchAt += countMatchGroups(re) + 1;
        }
        compile() {
          if (this.regexes.length === 0)
            this.exec = () => null;
          const terminators = this.regexes.map((el) => el[1]);
          this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
          this.lastIndex = 0;
        }
        exec(s) {
          this.matcherRe.lastIndex = this.lastIndex;
          const match = this.matcherRe.exec(s);
          if (!match)
            return null;
          const i = match.findIndex((el, i) => i > 0 && el !== undefined);
          const matchData = this.matchIndexes[i];
          match.splice(0, i);
          return Object.assign(match, matchData);
        }
      }

      class ResumableMultiRegex {
        constructor() {
          this.rules = [];
          this.multiRegexes = [];
          this.count = 0;
          this.lastIndex = 0;
          this.regexIndex = 0;
        }
        getMatcher(index) {
          if (this.multiRegexes[index])
            return this.multiRegexes[index];
          const matcher = new MultiRegex;
          this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
          matcher.compile();
          this.multiRegexes[index] = matcher;
          return matcher;
        }
        resumingScanAtSamePosition() {
          return this.regexIndex !== 0;
        }
        considerAll() {
          this.regexIndex = 0;
        }
        addRule(re, opts) {
          this.rules.push([re, opts]);
          if (opts.type === "begin")
            this.count++;
        }
        exec(s) {
          const m = this.getMatcher(this.regexIndex);
          m.lastIndex = this.lastIndex;
          let result = m.exec(s);
          if (this.resumingScanAtSamePosition())
            if (result && result.index === this.lastIndex)
              ;
            else {
              const m2 = this.getMatcher(0);
              m2.lastIndex = this.lastIndex + 1;
              result = m2.exec(s);
            }
          if (result) {
            this.regexIndex += result.position + 1;
            if (this.regexIndex === this.count)
              this.considerAll();
          }
          return result;
        }
      }
      function buildModeRegex(mode) {
        const mm = new ResumableMultiRegex;
        mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
        if (mode.terminatorEnd)
          mm.addRule(mode.terminatorEnd, { type: "end" });
        if (mode.illegal)
          mm.addRule(mode.illegal, { type: "illegal" });
        return mm;
      }
      function compileMode(mode, parent) {
        const cmode = mode;
        if (mode.isCompiled)
          return cmode;
        [
          scopeClassName,
          compileMatch,
          MultiClass,
          beforeMatchExt
        ].forEach((ext) => ext(mode, parent));
        language.compilerExtensions.forEach((ext) => ext(mode, parent));
        mode.__beforeBegin = null;
        [
          beginKeywords,
          compileIllegal,
          compileRelevance
        ].forEach((ext) => ext(mode, parent));
        mode.isCompiled = true;
        let keywordPattern = null;
        if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
          mode.keywords = Object.assign({}, mode.keywords);
          keywordPattern = mode.keywords.$pattern;
          delete mode.keywords.$pattern;
        }
        keywordPattern = keywordPattern || /\w+/;
        if (mode.keywords)
          mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
        cmode.keywordPatternRe = langRe(keywordPattern, true);
        if (parent) {
          if (!mode.begin)
            mode.begin = /\B|\b/;
          cmode.beginRe = langRe(cmode.begin);
          if (!mode.end && !mode.endsWithParent)
            mode.end = /\B|\b/;
          if (mode.end)
            cmode.endRe = langRe(cmode.end);
          cmode.terminatorEnd = source(cmode.end) || "";
          if (mode.endsWithParent && parent.terminatorEnd)
            cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
        }
        if (mode.illegal)
          cmode.illegalRe = langRe(mode.illegal);
        if (!mode.contains)
          mode.contains = [];
        mode.contains = [].concat(...mode.contains.map(function(c) {
          return expandOrCloneMode(c === "self" ? mode : c);
        }));
        mode.contains.forEach(function(c) {
          compileMode(c, cmode);
        });
        if (mode.starts)
          compileMode(mode.starts, parent);
        cmode.matcher = buildModeRegex(cmode);
        return cmode;
      }
      if (!language.compilerExtensions)
        language.compilerExtensions = [];
      if (language.contains && language.contains.includes("self"))
        throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      language.classNameAliases = inherit$1(language.classNameAliases || {});
      return compileMode(language);
    }
    function dependencyOnParent(mode) {
      if (!mode)
        return false;
      return mode.endsWithParent || dependencyOnParent(mode.starts);
    }
    function expandOrCloneMode(mode) {
      if (mode.variants && !mode.cachedVariants)
        mode.cachedVariants = mode.variants.map(function(variant) {
          return inherit$1(mode, { variants: null }, variant);
        });
      if (mode.cachedVariants)
        return mode.cachedVariants;
      if (dependencyOnParent(mode))
        return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
      if (Object.isFrozen(mode))
        return inherit$1(mode);
      return mode;
    }
    var version = "11.7.0";

    class HTMLInjectionError extends Error {
      constructor(reason, html) {
        super(reason);
        this.name = "HTMLInjectionError";
        this.html = html;
      }
    }
    const escape = escapeHTML;
    const inherit = inherit$1;
    const NO_MATCH = Symbol("nomatch");
    const MAX_KEYWORD_HITS = 7;
    const HLJS = function(hljs) {
      const languages = Object.create(null);
      const aliases = Object.create(null);
      const plugins = [];
      let SAFE_MODE = true;
      const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
      const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
      let options = {
        ignoreUnescapedHTML: false,
        throwUnescapedHTML: false,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: "hljs-",
        cssSelector: "pre code",
        languages: null,
        __emitter: TokenTreeEmitter
      };
      function shouldNotHighlight(languageName) {
        return options.noHighlightRe.test(languageName);
      }
      function blockLanguage(block) {
        let classes = block.className + " ";
        classes += block.parentNode ? block.parentNode.className : "";
        const match = options.languageDetectRe.exec(classes);
        if (match) {
          const language = getLanguage(match[1]);
          if (!language) {
            warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
            warn("Falling back to no-highlight mode for this block.", block);
          }
          return language ? match[1] : "no-highlight";
        }
        return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
      }
      function highlight(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
        let code = "";
        let languageName = "";
        if (typeof optionsOrCode === "object") {
          code = codeOrLanguageName;
          ignoreIllegals = optionsOrCode.ignoreIllegals;
          languageName = optionsOrCode.language;
        } else {
          deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
          deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
          languageName = codeOrLanguageName;
          code = optionsOrCode;
        }
        if (ignoreIllegals === undefined)
          ignoreIllegals = true;
        const context = {
          code,
          language: languageName
        };
        fire("before:highlight", context);
        const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
        result.code = context.code;
        fire("after:highlight", result);
        return result;
      }
      function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
        const keywordHits = Object.create(null);
        function keywordData(mode, matchText) {
          return mode.keywords[matchText];
        }
        function processKeywords() {
          if (!top.keywords) {
            emitter.addText(modeBuffer);
            return;
          }
          let lastIndex = 0;
          top.keywordPatternRe.lastIndex = 0;
          let match = top.keywordPatternRe.exec(modeBuffer);
          let buf = "";
          while (match) {
            buf += modeBuffer.substring(lastIndex, match.index);
            const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
            const data = keywordData(top, word);
            if (data) {
              const [kind, keywordRelevance] = data;
              emitter.addText(buf);
              buf = "";
              keywordHits[word] = (keywordHits[word] || 0) + 1;
              if (keywordHits[word] <= MAX_KEYWORD_HITS)
                relevance += keywordRelevance;
              if (kind.startsWith("_"))
                buf += match[0];
              else {
                const cssClass = language.classNameAliases[kind] || kind;
                emitter.addKeyword(match[0], cssClass);
              }
            } else
              buf += match[0];
            lastIndex = top.keywordPatternRe.lastIndex;
            match = top.keywordPatternRe.exec(modeBuffer);
          }
          buf += modeBuffer.substring(lastIndex);
          emitter.addText(buf);
        }
        function processSubLanguage() {
          if (modeBuffer === "")
            return;
          let result = null;
          if (typeof top.subLanguage === "string") {
            if (!languages[top.subLanguage]) {
              emitter.addText(modeBuffer);
              return;
            }
            result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
            continuations[top.subLanguage] = result._top;
          } else
            result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
          if (top.relevance > 0)
            relevance += result.relevance;
          emitter.addSublanguage(result._emitter, result.language);
        }
        function processBuffer() {
          if (top.subLanguage != null)
            processSubLanguage();
          else
            processKeywords();
          modeBuffer = "";
        }
        function emitMultiClass(scope, match) {
          let i = 1;
          const max = match.length - 1;
          while (i <= max) {
            if (!scope._emit[i]) {
              i++;
              continue;
            }
            const klass = language.classNameAliases[scope[i]] || scope[i];
            const text = match[i];
            if (klass)
              emitter.addKeyword(text, klass);
            else {
              modeBuffer = text;
              processKeywords();
              modeBuffer = "";
            }
            i++;
          }
        }
        function startNewMode(mode, match) {
          if (mode.scope && typeof mode.scope === "string")
            emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
          if (mode.beginScope) {
            if (mode.beginScope._wrap) {
              emitter.addKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
              modeBuffer = "";
            } else if (mode.beginScope._multi) {
              emitMultiClass(mode.beginScope, match);
              modeBuffer = "";
            }
          }
          top = Object.create(mode, { parent: { value: top } });
          return top;
        }
        function endOfMode(mode, match, matchPlusRemainder) {
          let matched = startsWith(mode.endRe, matchPlusRemainder);
          if (matched) {
            if (mode["on:end"]) {
              const resp = new Response(mode);
              mode["on:end"](match, resp);
              if (resp.isMatchIgnored)
                matched = false;
            }
            if (matched) {
              while (mode.endsParent && mode.parent)
                mode = mode.parent;
              return mode;
            }
          }
          if (mode.endsWithParent)
            return endOfMode(mode.parent, match, matchPlusRemainder);
        }
        function doIgnore(lexeme) {
          if (top.matcher.regexIndex === 0) {
            modeBuffer += lexeme[0];
            return 1;
          } else {
            resumeScanAtSamePosition = true;
            return 0;
          }
        }
        function doBeginMatch(match) {
          const lexeme = match[0];
          const newMode = match.rule;
          const resp = new Response(newMode);
          const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
          for (const cb of beforeCallbacks) {
            if (!cb)
              continue;
            cb(match, resp);
            if (resp.isMatchIgnored)
              return doIgnore(lexeme);
          }
          if (newMode.skip)
            modeBuffer += lexeme;
          else {
            if (newMode.excludeBegin)
              modeBuffer += lexeme;
            processBuffer();
            if (!newMode.returnBegin && !newMode.excludeBegin)
              modeBuffer = lexeme;
          }
          startNewMode(newMode, match);
          return newMode.returnBegin ? 0 : lexeme.length;
        }
        function doEndMatch(match) {
          const lexeme = match[0];
          const matchPlusRemainder = codeToHighlight.substring(match.index);
          const endMode = endOfMode(top, match, matchPlusRemainder);
          if (!endMode)
            return NO_MATCH;
          const origin = top;
          if (top.endScope && top.endScope._wrap) {
            processBuffer();
            emitter.addKeyword(lexeme, top.endScope._wrap);
          } else if (top.endScope && top.endScope._multi) {
            processBuffer();
            emitMultiClass(top.endScope, match);
          } else if (origin.skip)
            modeBuffer += lexeme;
          else {
            if (!(origin.returnEnd || origin.excludeEnd))
              modeBuffer += lexeme;
            processBuffer();
            if (origin.excludeEnd)
              modeBuffer = lexeme;
          }
          do {
            if (top.scope)
              emitter.closeNode();
            if (!top.skip && !top.subLanguage)
              relevance += top.relevance;
            top = top.parent;
          } while (top !== endMode.parent);
          if (endMode.starts)
            startNewMode(endMode.starts, match);
          return origin.returnEnd ? 0 : lexeme.length;
        }
        function processContinuations() {
          const list = [];
          for (let current = top;current !== language; current = current.parent)
            if (current.scope)
              list.unshift(current.scope);
          list.forEach((item) => emitter.openNode(item));
        }
        let lastMatch = {};
        function processLexeme(textBeforeMatch, match) {
          const lexeme = match && match[0];
          modeBuffer += textBeforeMatch;
          if (lexeme == null) {
            processBuffer();
            return 0;
          }
          if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
            modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
            if (!SAFE_MODE) {
              const err = new Error(`0 width match regex (${languageName})`);
              err.languageName = languageName;
              err.badRule = lastMatch.rule;
              throw err;
            }
            return 1;
          }
          lastMatch = match;
          if (match.type === "begin")
            return doBeginMatch(match);
          else if (match.type === "illegal" && !ignoreIllegals) {
            const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
            err.mode = top;
            throw err;
          } else if (match.type === "end") {
            const processed = doEndMatch(match);
            if (processed !== NO_MATCH)
              return processed;
          }
          if (match.type === "illegal" && lexeme === "")
            return 1;
          if (iterations > 1e5 && iterations > match.index * 3) {
            const err = new Error("potential infinite loop, way more iterations than matches");
            throw err;
          }
          modeBuffer += lexeme;
          return lexeme.length;
        }
        const language = getLanguage(languageName);
        if (!language) {
          error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
          throw new Error('Unknown language: "' + languageName + '"');
        }
        const md = compileLanguage(language);
        let result = "";
        let top = continuation || md;
        const continuations = {};
        const emitter = new options.__emitter(options);
        processContinuations();
        let modeBuffer = "";
        let relevance = 0;
        let index = 0;
        let iterations = 0;
        let resumeScanAtSamePosition = false;
        try {
          top.matcher.considerAll();
          for (;; ) {
            iterations++;
            if (resumeScanAtSamePosition)
              resumeScanAtSamePosition = false;
            else
              top.matcher.considerAll();
            top.matcher.lastIndex = index;
            const match = top.matcher.exec(codeToHighlight);
            if (!match)
              break;
            const beforeMatch = codeToHighlight.substring(index, match.index);
            const processedCount = processLexeme(beforeMatch, match);
            index = match.index + processedCount;
          }
          processLexeme(codeToHighlight.substring(index));
          emitter.closeAllNodes();
          emitter.finalize();
          result = emitter.toHTML();
          return {
            language: languageName,
            value: result,
            relevance,
            illegal: false,
            _emitter: emitter,
            _top: top
          };
        } catch (err) {
          if (err.message && err.message.includes("Illegal"))
            return {
              language: languageName,
              value: escape(codeToHighlight),
              illegal: true,
              relevance: 0,
              _illegalBy: {
                message: err.message,
                index,
                context: codeToHighlight.slice(index - 100, index + 100),
                mode: err.mode,
                resultSoFar: result
              },
              _emitter: emitter
            };
          else if (SAFE_MODE)
            return {
              language: languageName,
              value: escape(codeToHighlight),
              illegal: false,
              relevance: 0,
              errorRaised: err,
              _emitter: emitter,
              _top: top
            };
          else
            throw err;
        }
      }
      function justTextHighlightResult(code) {
        const result = {
          value: escape(code),
          illegal: false,
          relevance: 0,
          _top: PLAINTEXT_LANGUAGE,
          _emitter: new options.__emitter(options)
        };
        result._emitter.addText(code);
        return result;
      }
      function highlightAuto(code, languageSubset) {
        languageSubset = languageSubset || options.languages || Object.keys(languages);
        const plaintext = justTextHighlightResult(code);
        const results = languageSubset.filter(getLanguage).filter(autoDetection).map((name) => _highlight(name, code, false));
        results.unshift(plaintext);
        const sorted = results.sort((a, b) => {
          if (a.relevance !== b.relevance)
            return b.relevance - a.relevance;
          if (a.language && b.language) {
            if (getLanguage(a.language).supersetOf === b.language)
              return 1;
            else if (getLanguage(b.language).supersetOf === a.language)
              return -1;
          }
          return 0;
        });
        const [best, secondBest] = sorted;
        const result = best;
        result.secondBest = secondBest;
        return result;
      }
      function updateClassName(element, currentLang, resultLang) {
        const language = currentLang && aliases[currentLang] || resultLang;
        element.classList.add("hljs");
        element.classList.add(`language-${language}`);
      }
      function highlightElement(element) {
        let node = null;
        const language = blockLanguage(element);
        if (shouldNotHighlight(language))
          return;
        fire("before:highlightElement", { el: element, language });
        if (element.children.length > 0) {
          if (!options.ignoreUnescapedHTML) {
            console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
            console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
            console.warn("The element with unescaped HTML:");
            console.warn(element);
          }
          if (options.throwUnescapedHTML) {
            const err = new HTMLInjectionError("One of your code blocks includes unescaped HTML.", element.innerHTML);
            throw err;
          }
        }
        node = element;
        const text = node.textContent;
        const result = language ? highlight(text, { language, ignoreIllegals: true }) : highlightAuto(text);
        element.innerHTML = result.value;
        updateClassName(element, language, result.language);
        element.result = {
          language: result.language,
          re: result.relevance,
          relevance: result.relevance
        };
        if (result.secondBest)
          element.secondBest = {
            language: result.secondBest.language,
            relevance: result.secondBest.relevance
          };
        fire("after:highlightElement", { el: element, result, text });
      }
      function configure(userOptions) {
        options = inherit(options, userOptions);
      }
      const initHighlighting = () => {
        highlightAll();
        deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
      };
      function initHighlightingOnLoad() {
        highlightAll();
        deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
      }
      let wantsHighlight = false;
      function highlightAll() {
        if (document.readyState === "loading") {
          wantsHighlight = true;
          return;
        }
        const blocks = document.querySelectorAll(options.cssSelector);
        blocks.forEach(highlightElement);
      }
      function boot() {
        if (wantsHighlight)
          highlightAll();
      }
      if (typeof window !== "undefined" && window.addEventListener)
        window.addEventListener("DOMContentLoaded", boot, false);
      function registerLanguage(languageName, languageDefinition) {
        let lang = null;
        try {
          lang = languageDefinition(hljs);
        } catch (error$1) {
          error("Language definition for '{}' could not be registered.".replace("{}", languageName));
          if (!SAFE_MODE)
            throw error$1;
          else
            error(error$1);
          lang = PLAINTEXT_LANGUAGE;
        }
        if (!lang.name)
          lang.name = languageName;
        languages[languageName] = lang;
        lang.rawDefinition = languageDefinition.bind(null, hljs);
        if (lang.aliases)
          registerAliases(lang.aliases, { languageName });
      }
      function unregisterLanguage(languageName) {
        delete languages[languageName];
        for (const alias of Object.keys(aliases))
          if (aliases[alias] === languageName)
            delete aliases[alias];
      }
      function listLanguages() {
        return Object.keys(languages);
      }
      function getLanguage(name) {
        name = (name || "").toLowerCase();
        return languages[name] || languages[aliases[name]];
      }
      function registerAliases(aliasList, { languageName }) {
        if (typeof aliasList === "string")
          aliasList = [aliasList];
        aliasList.forEach((alias) => {
          aliases[alias.toLowerCase()] = languageName;
        });
      }
      function autoDetection(name) {
        const lang = getLanguage(name);
        return lang && !lang.disableAutodetect;
      }
      function upgradePluginAPI(plugin) {
        if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"])
          plugin["before:highlightElement"] = (data) => {
            plugin["before:highlightBlock"](Object.assign({ block: data.el }, data));
          };
        if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"])
          plugin["after:highlightElement"] = (data) => {
            plugin["after:highlightBlock"](Object.assign({ block: data.el }, data));
          };
      }
      function addPlugin(plugin) {
        upgradePluginAPI(plugin);
        plugins.push(plugin);
      }
      function fire(event, args) {
        const cb = event;
        plugins.forEach(function(plugin) {
          if (plugin[cb])
            plugin[cb](args);
        });
      }
      function deprecateHighlightBlock(el) {
        deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
        deprecated("10.7.0", "Please use highlightElement now.");
        return highlightElement(el);
      }
      Object.assign(hljs, {
        highlight,
        highlightAuto,
        highlightAll,
        highlightElement,
        highlightBlock: deprecateHighlightBlock,
        configure,
        initHighlighting,
        initHighlightingOnLoad,
        registerLanguage,
        unregisterLanguage,
        listLanguages,
        getLanguage,
        registerAliases,
        autoDetection,
        inherit,
        addPlugin
      });
      hljs.debugMode = function() {
        SAFE_MODE = false;
      };
      hljs.safeMode = function() {
        SAFE_MODE = true;
      };
      hljs.versionString = version;
      hljs.regex = {
        concat,
        lookahead,
        either,
        optional,
        anyNumberOfTimes
      };
      for (const key in MODES)
        if (typeof MODES[key] === "object")
          deepFreezeEs6.exports(MODES[key]);
      Object.assign(hljs, MODES);
      return hljs;
    };
    var highlight = HLJS({});
    module.exports = highlight;
    highlight.HighlightJS = highlight;
    highlight.default = highlight;
  }
}["highlight.js/lib/core.js"]);


// highlight.js/lib/languages/sql.js
export var $59762289 = $$m({
  "highlight.js/lib/languages/sql.js": (module, exports) => {
    function sql(hljs) {
      const regex = hljs.regex;
      const COMMENT_MODE = hljs.COMMENT("--", "$");
      const STRING = {
        className: "string",
        variants: [
          {
            begin: /'/,
            end: /'/,
            contains: [{ begin: /''/ }]
          }
        ]
      };
      const QUOTED_IDENTIFIER = {
        begin: /"/,
        end: /"/,
        contains: [{ begin: /""/ }]
      };
      const LITERALS = [
        "true",
        "false",
        "unknown"
      ];
      const MULTI_WORD_TYPES = [
        "double precision",
        "large object",
        "with timezone",
        "without timezone"
      ];
      const TYPES = [
        "bigint",
        "binary",
        "blob",
        "boolean",
        "char",
        "character",
        "clob",
        "date",
        "dec",
        "decfloat",
        "decimal",
        "float",
        "int",
        "integer",
        "interval",
        "nchar",
        "nclob",
        "national",
        "numeric",
        "real",
        "row",
        "smallint",
        "time",
        "timestamp",
        "varchar",
        "varying",
        "varbinary"
      ];
      const NON_RESERVED_WORDS = [
        "add",
        "asc",
        "collation",
        "desc",
        "final",
        "first",
        "last",
        "view"
      ];
      const RESERVED_WORDS = [
        "abs",
        "acos",
        "all",
        "allocate",
        "alter",
        "and",
        "any",
        "are",
        "array",
        "array_agg",
        "array_max_cardinality",
        "as",
        "asensitive",
        "asin",
        "asymmetric",
        "at",
        "atan",
        "atomic",
        "authorization",
        "avg",
        "begin",
        "begin_frame",
        "begin_partition",
        "between",
        "bigint",
        "binary",
        "blob",
        "boolean",
        "both",
        "by",
        "call",
        "called",
        "cardinality",
        "cascaded",
        "case",
        "cast",
        "ceil",
        "ceiling",
        "char",
        "char_length",
        "character",
        "character_length",
        "check",
        "classifier",
        "clob",
        "close",
        "coalesce",
        "collate",
        "collect",
        "column",
        "commit",
        "condition",
        "connect",
        "constraint",
        "contains",
        "convert",
        "copy",
        "corr",
        "corresponding",
        "cos",
        "cosh",
        "count",
        "covar_pop",
        "covar_samp",
        "create",
        "cross",
        "cube",
        "cume_dist",
        "current",
        "current_catalog",
        "current_date",
        "current_default_transform_group",
        "current_path",
        "current_role",
        "current_row",
        "current_schema",
        "current_time",
        "current_timestamp",
        "current_path",
        "current_role",
        "current_transform_group_for_type",
        "current_user",
        "cursor",
        "cycle",
        "date",
        "day",
        "deallocate",
        "dec",
        "decimal",
        "decfloat",
        "declare",
        "default",
        "define",
        "delete",
        "dense_rank",
        "deref",
        "describe",
        "deterministic",
        "disconnect",
        "distinct",
        "double",
        "drop",
        "dynamic",
        "each",
        "element",
        "else",
        "empty",
        "end",
        "end_frame",
        "end_partition",
        "end-exec",
        "equals",
        "escape",
        "every",
        "except",
        "exec",
        "execute",
        "exists",
        "exp",
        "external",
        "extract",
        "false",
        "fetch",
        "filter",
        "first_value",
        "float",
        "floor",
        "for",
        "foreign",
        "frame_row",
        "free",
        "from",
        "full",
        "function",
        "fusion",
        "get",
        "global",
        "grant",
        "group",
        "grouping",
        "groups",
        "having",
        "hold",
        "hour",
        "identity",
        "in",
        "indicator",
        "initial",
        "inner",
        "inout",
        "insensitive",
        "insert",
        "int",
        "integer",
        "intersect",
        "intersection",
        "interval",
        "into",
        "is",
        "join",
        "json_array",
        "json_arrayagg",
        "json_exists",
        "json_object",
        "json_objectagg",
        "json_query",
        "json_table",
        "json_table_primitive",
        "json_value",
        "lag",
        "language",
        "large",
        "last_value",
        "lateral",
        "lead",
        "leading",
        "left",
        "like",
        "like_regex",
        "listagg",
        "ln",
        "local",
        "localtime",
        "localtimestamp",
        "log",
        "log10",
        "lower",
        "match",
        "match_number",
        "match_recognize",
        "matches",
        "max",
        "member",
        "merge",
        "method",
        "min",
        "minute",
        "mod",
        "modifies",
        "module",
        "month",
        "multiset",
        "national",
        "natural",
        "nchar",
        "nclob",
        "new",
        "no",
        "none",
        "normalize",
        "not",
        "nth_value",
        "ntile",
        "null",
        "nullif",
        "numeric",
        "octet_length",
        "occurrences_regex",
        "of",
        "offset",
        "old",
        "omit",
        "on",
        "one",
        "only",
        "open",
        "or",
        "order",
        "out",
        "outer",
        "over",
        "overlaps",
        "overlay",
        "parameter",
        "partition",
        "pattern",
        "per",
        "percent",
        "percent_rank",
        "percentile_cont",
        "percentile_disc",
        "period",
        "portion",
        "position",
        "position_regex",
        "power",
        "precedes",
        "precision",
        "prepare",
        "primary",
        "procedure",
        "ptf",
        "range",
        "rank",
        "reads",
        "real",
        "recursive",
        "ref",
        "references",
        "referencing",
        "regr_avgx",
        "regr_avgy",
        "regr_count",
        "regr_intercept",
        "regr_r2",
        "regr_slope",
        "regr_sxx",
        "regr_sxy",
        "regr_syy",
        "release",
        "result",
        "return",
        "returns",
        "revoke",
        "right",
        "rollback",
        "rollup",
        "row",
        "row_number",
        "rows",
        "running",
        "savepoint",
        "scope",
        "scroll",
        "search",
        "second",
        "seek",
        "select",
        "sensitive",
        "session_user",
        "set",
        "show",
        "similar",
        "sin",
        "sinh",
        "skip",
        "smallint",
        "some",
        "specific",
        "specifictype",
        "sql",
        "sqlexception",
        "sqlstate",
        "sqlwarning",
        "sqrt",
        "start",
        "static",
        "stddev_pop",
        "stddev_samp",
        "submultiset",
        "subset",
        "substring",
        "substring_regex",
        "succeeds",
        "sum",
        "symmetric",
        "system",
        "system_time",
        "system_user",
        "table",
        "tablesample",
        "tan",
        "tanh",
        "then",
        "time",
        "timestamp",
        "timezone_hour",
        "timezone_minute",
        "to",
        "trailing",
        "translate",
        "translate_regex",
        "translation",
        "treat",
        "trigger",
        "trim",
        "trim_array",
        "true",
        "truncate",
        "uescape",
        "union",
        "unique",
        "unknown",
        "unnest",
        "update",
        "upper",
        "user",
        "using",
        "value",
        "values",
        "value_of",
        "var_pop",
        "var_samp",
        "varbinary",
        "varchar",
        "varying",
        "versioning",
        "when",
        "whenever",
        "where",
        "width_bucket",
        "window",
        "with",
        "within",
        "without",
        "year"
      ];
      const RESERVED_FUNCTIONS = [
        "abs",
        "acos",
        "array_agg",
        "asin",
        "atan",
        "avg",
        "cast",
        "ceil",
        "ceiling",
        "coalesce",
        "corr",
        "cos",
        "cosh",
        "count",
        "covar_pop",
        "covar_samp",
        "cume_dist",
        "dense_rank",
        "deref",
        "element",
        "exp",
        "extract",
        "first_value",
        "floor",
        "json_array",
        "json_arrayagg",
        "json_exists",
        "json_object",
        "json_objectagg",
        "json_query",
        "json_table",
        "json_table_primitive",
        "json_value",
        "lag",
        "last_value",
        "lead",
        "listagg",
        "ln",
        "log",
        "log10",
        "lower",
        "max",
        "min",
        "mod",
        "nth_value",
        "ntile",
        "nullif",
        "percent_rank",
        "percentile_cont",
        "percentile_disc",
        "position",
        "position_regex",
        "power",
        "rank",
        "regr_avgx",
        "regr_avgy",
        "regr_count",
        "regr_intercept",
        "regr_r2",
        "regr_slope",
        "regr_sxx",
        "regr_sxy",
        "regr_syy",
        "row_number",
        "sin",
        "sinh",
        "sqrt",
        "stddev_pop",
        "stddev_samp",
        "substring",
        "substring_regex",
        "sum",
        "tan",
        "tanh",
        "translate",
        "translate_regex",
        "treat",
        "trim",
        "trim_array",
        "unnest",
        "upper",
        "value_of",
        "var_pop",
        "var_samp",
        "width_bucket"
      ];
      const POSSIBLE_WITHOUT_PARENS = [
        "current_catalog",
        "current_date",
        "current_default_transform_group",
        "current_path",
        "current_role",
        "current_schema",
        "current_transform_group_for_type",
        "current_user",
        "session_user",
        "system_time",
        "system_user",
        "current_time",
        "localtime",
        "current_timestamp",
        "localtimestamp"
      ];
      const COMBOS = [
        "create table",
        "insert into",
        "primary key",
        "foreign key",
        "not null",
        "alter table",
        "add constraint",
        "grouping sets",
        "on overflow",
        "character set",
        "respect nulls",
        "ignore nulls",
        "nulls first",
        "nulls last",
        "depth first",
        "breadth first"
      ];
      const FUNCTIONS = RESERVED_FUNCTIONS;
      const KEYWORDS = [
        ...RESERVED_WORDS,
        ...NON_RESERVED_WORDS
      ].filter((keyword) => {
        return !RESERVED_FUNCTIONS.includes(keyword);
      });
      const VARIABLE = {
        className: "variable",
        begin: /@[a-z0-9]+/
      };
      const OPERATOR = {
        className: "operator",
        begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
        relevance: 0
      };
      const FUNCTION_CALL = {
        begin: regex.concat(/\b/, regex.either(...FUNCTIONS), /\s*\(/),
        relevance: 0,
        keywords: { built_in: FUNCTIONS }
      };
      function reduceRelevancy(list, {
        exceptions,
        when
      } = {}) {
        const qualifyFn = when;
        exceptions = exceptions || [];
        return list.map((item) => {
          if (item.match(/\|\d+$/) || exceptions.includes(item))
            return item;
          else if (qualifyFn(item))
            return `${item}|0`;
          else
            return item;
        });
      }
      return {
        name: "SQL",
        case_insensitive: true,
        illegal: /[{}]|<\//,
        keywords: {
          $pattern: /\b[\w\.]+/,
          keyword: reduceRelevancy(KEYWORDS, { when: (x) => x.length < 3 }),
          literal: LITERALS,
          type: TYPES,
          built_in: POSSIBLE_WITHOUT_PARENS
        },
        contains: [
          {
            begin: regex.either(...COMBOS),
            relevance: 0,
            keywords: {
              $pattern: /[\w\.]+/,
              keyword: KEYWORDS.concat(COMBOS),
              literal: LITERALS,
              type: TYPES
            }
          },
          {
            className: "type",
            begin: regex.either(...MULTI_WORD_TYPES)
          },
          FUNCTION_CALL,
          VARIABLE,
          STRING,
          QUOTED_IDENTIFIER,
          hljs.C_NUMBER_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          COMMENT_MODE,
          OPERATOR
        ]
      };
    }
    module.exports = sql;
  }
}["highlight.js/lib/languages/sql.js"]);


// highlight.js/lib/languages/rust.js
export var $be1a865 = $$m({
  "highlight.js/lib/languages/rust.js": (module, exports) => {
    function rust(hljs) {
      const regex = hljs.regex;
      const FUNCTION_INVOKE = {
        className: "title.function.invoke",
        relevance: 0,
        begin: regex.concat(/\b/, /(?!let\b)/, hljs.IDENT_RE, regex.lookahead(/\s*\(/))
      };
      const NUMBER_SUFFIX = "([ui](8|16|32|64|128|size)|f(32|64))?";
      const KEYWORDS = [
        "abstract",
        "as",
        "async",
        "await",
        "become",
        "box",
        "break",
        "const",
        "continue",
        "crate",
        "do",
        "dyn",
        "else",
        "enum",
        "extern",
        "false",
        "final",
        "fn",
        "for",
        "if",
        "impl",
        "in",
        "let",
        "loop",
        "macro",
        "match",
        "mod",
        "move",
        "mut",
        "override",
        "priv",
        "pub",
        "ref",
        "return",
        "self",
        "Self",
        "static",
        "struct",
        "super",
        "trait",
        "true",
        "try",
        "type",
        "typeof",
        "unsafe",
        "unsized",
        "use",
        "virtual",
        "where",
        "while",
        "yield"
      ];
      const LITERALS = [
        "true",
        "false",
        "Some",
        "None",
        "Ok",
        "Err"
      ];
      const BUILTINS = [
        "drop ",
        "Copy",
        "Send",
        "Sized",
        "Sync",
        "Drop",
        "Fn",
        "FnMut",
        "FnOnce",
        "ToOwned",
        "Clone",
        "Debug",
        "PartialEq",
        "PartialOrd",
        "Eq",
        "Ord",
        "AsRef",
        "AsMut",
        "Into",
        "From",
        "Default",
        "Iterator",
        "Extend",
        "IntoIterator",
        "DoubleEndedIterator",
        "ExactSizeIterator",
        "SliceConcatExt",
        "ToString",
        "assert!",
        "assert_eq!",
        "bitflags!",
        "bytes!",
        "cfg!",
        "col!",
        "concat!",
        "concat_idents!",
        "debug_assert!",
        "debug_assert_eq!",
        "env!",
        "panic!",
        "file!",
        "format!",
        "format_args!",
        "include_bytes!",
        "include_str!",
        "line!",
        "local_data_key!",
        "module_path!",
        "option_env!",
        "print!",
        "println!",
        "select!",
        "stringify!",
        "try!",
        "unimplemented!",
        "unreachable!",
        "vec!",
        "write!",
        "writeln!",
        "macro_rules!",
        "assert_ne!",
        "debug_assert_ne!"
      ];
      const TYPES = [
        "i8",
        "i16",
        "i32",
        "i64",
        "i128",
        "isize",
        "u8",
        "u16",
        "u32",
        "u64",
        "u128",
        "usize",
        "f32",
        "f64",
        "str",
        "char",
        "bool",
        "Box",
        "Option",
        "Result",
        "String",
        "Vec"
      ];
      return {
        name: "Rust",
        aliases: ["rs"],
        keywords: {
          $pattern: hljs.IDENT_RE + "!?",
          type: TYPES,
          keyword: KEYWORDS,
          literal: LITERALS,
          built_in: BUILTINS
        },
        illegal: "</",
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            begin: /b?"/,
            illegal: null
          }),
          {
            className: "string",
            variants: [
              { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
              { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }
            ]
          },
          {
            className: "symbol",
            begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
          },
          {
            className: "number",
            variants: [
              { begin: "\\b0b([01_]+)" + NUMBER_SUFFIX },
              { begin: "\\b0o([0-7_]+)" + NUMBER_SUFFIX },
              { begin: "\\b0x([A-Fa-f0-9_]+)" + NUMBER_SUFFIX },
              { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + NUMBER_SUFFIX }
            ],
            relevance: 0
          },
          {
            begin: [
              /fn/,
              /\s+/,
              hljs.UNDERSCORE_IDENT_RE
            ],
            className: {
              1: "keyword",
              3: "title.function"
            }
          },
          {
            className: "meta",
            begin: "#!?\\[",
            end: "\\]",
            contains: [
              {
                className: "string",
                begin: /"/,
                end: /"/
              }
            ]
          },
          {
            begin: [
              /let/,
              /\s+/,
              /(?:mut\s+)?/,
              hljs.UNDERSCORE_IDENT_RE
            ],
            className: {
              1: "keyword",
              3: "keyword",
              4: "variable"
            }
          },
          {
            begin: [
              /for/,
              /\s+/,
              hljs.UNDERSCORE_IDENT_RE,
              /\s+/,
              /in/
            ],
            className: {
              1: "keyword",
              3: "variable",
              5: "keyword"
            }
          },
          {
            begin: [
              /type/,
              /\s+/,
              hljs.UNDERSCORE_IDENT_RE
            ],
            className: {
              1: "keyword",
              3: "title.class"
            }
          },
          {
            begin: [
              /(?:trait|enum|struct|union|impl|for)/,
              /\s+/,
              hljs.UNDERSCORE_IDENT_RE
            ],
            className: {
              1: "keyword",
              3: "title.class"
            }
          },
          {
            begin: hljs.IDENT_RE + "::",
            keywords: {
              keyword: "Self",
              built_in: BUILTINS,
              type: TYPES
            }
          },
          {
            className: "punctuation",
            begin: "->"
          },
          FUNCTION_INVOKE
        ]
      };
    }
    module.exports = rust;
  }
}["highlight.js/lib/languages/rust.js"]);


// highlight.js/lib/languages/scss.js
export var $a2e2eb9 = $$m({
  "highlight.js/lib/languages/scss.js": (module, exports) => {
    const MODES = (hljs) => {
      return {
        IMPORTANT: {
          scope: "meta",
          begin: "!important"
        },
        BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
        HEXCOLOR: {
          scope: "number",
          begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
        },
        FUNCTION_DISPATCH: {
          className: "built_in",
          begin: /[\w-]+(?=\()/
        },
        ATTRIBUTE_SELECTOR_MODE: {
          scope: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE
          ]
        },
        CSS_NUMBER_MODE: {
          scope: "number",
          begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
          relevance: 0
        },
        CSS_VARIABLE: {
          className: "attr",
          begin: /--[A-Za-z][A-Za-z0-9_-]*/
        }
      };
    };
    const TAGS = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "p",
      "q",
      "quote",
      "samp",
      "section",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video"
    ];
    const MEDIA_FEATURES = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      "min-width",
      "max-width",
      "min-height",
      "max-height"
    ];
    const PSEUDO_CLASSES = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir",
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has",
      "host",
      "host-context",
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is",
      "lang",
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not",
      "nth-child",
      "nth-col",
      "nth-last-child",
      "nth-last-col",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where"
    ];
    const PSEUDO_ELEMENTS = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error"
    ];
    const ATTRIBUTES = [
      "align-content",
      "align-items",
      "align-self",
      "all",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "block-size",
      "border",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "clip-path",
      "clip-rule",
      "color",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "empty-cells",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "flow",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "glyph-orientation-vertical",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "inline-size",
      "isolation",
      "justify-content",
      "left",
      "letter-spacing",
      "line-break",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "right",
      "row-gap",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "speak",
      "speak-as",
      "src",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-all",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-position",
      "top",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "unicode-bidi",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "z-index"
    ].reverse();
    function scss(hljs) {
      const modes = MODES(hljs);
      const PSEUDO_ELEMENTS$1 = PSEUDO_ELEMENTS;
      const PSEUDO_CLASSES$1 = PSEUDO_CLASSES;
      const AT_IDENTIFIER = "@[a-z-]+";
      const AT_MODIFIERS = "and or not only";
      const IDENT_RE = "[a-zA-Z-][a-zA-Z0-9_-]*";
      const VARIABLE = {
        className: "variable",
        begin: "(\\$" + IDENT_RE + ")\\b",
        relevance: 0
      };
      return {
        name: "SCSS",
        case_insensitive: true,
        illegal: "[=/|\']",
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          modes.CSS_NUMBER_MODE,
          {
            className: "selector-id",
            begin: "#[A-Za-z0-9_-]+",
            relevance: 0
          },
          {
            className: "selector-class",
            begin: "\\.[A-Za-z0-9_-]+",
            relevance: 0
          },
          modes.ATTRIBUTE_SELECTOR_MODE,
          {
            className: "selector-tag",
            begin: "\\b(" + TAGS.join("|") + ")\\b",
            relevance: 0
          },
          {
            className: "selector-pseudo",
            begin: ":(" + PSEUDO_CLASSES$1.join("|") + ")"
          },
          {
            className: "selector-pseudo",
            begin: ":(:)?(" + PSEUDO_ELEMENTS$1.join("|") + ")"
          },
          VARIABLE,
          {
            begin: /\(/,
            end: /\)/,
            contains: [modes.CSS_NUMBER_MODE]
          },
          modes.CSS_VARIABLE,
          {
            className: "attribute",
            begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
          },
          { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
          {
            begin: /:/,
            end: /[;}{]/,
            relevance: 0,
            contains: [
              modes.BLOCK_COMMENT,
              VARIABLE,
              modes.HEXCOLOR,
              modes.CSS_NUMBER_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.APOS_STRING_MODE,
              modes.IMPORTANT,
              modes.FUNCTION_DISPATCH
            ]
          },
          {
            begin: "@(page|font-face)",
            keywords: {
              $pattern: AT_IDENTIFIER,
              keyword: "@page @font-face"
            }
          },
          {
            begin: "@",
            end: "[{;]",
            returnBegin: true,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: AT_MODIFIERS,
              attribute: MEDIA_FEATURES.join(" ")
            },
            contains: [
              {
                begin: AT_IDENTIFIER,
                className: "keyword"
              },
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              VARIABLE,
              hljs.QUOTE_STRING_MODE,
              hljs.APOS_STRING_MODE,
              modes.HEXCOLOR,
              modes.CSS_NUMBER_MODE
            ]
          },
          modes.FUNCTION_DISPATCH
        ]
      };
    }
    module.exports = scss;
  }
}["highlight.js/lib/languages/scss.js"]);


// highlight.js/lib/languages/shell.js
export var $ae3e8fac = $$m({
  "highlight.js/lib/languages/shell.js": (module, exports) => {
    function shell(hljs) {
      return {
        name: "Shell Session",
        aliases: [
          "console",
          "shellsession"
        ],
        contains: [
          {
            className: "meta.prompt",
            begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
            starts: {
              end: /[^\\](?=\s*$)/,
              subLanguage: "bash"
            }
          }
        ]
      };
    }
    module.exports = shell;
  }
}["highlight.js/lib/languages/shell.js"]);


// marked/lib/marked.esm.js
export var $b13d3c26 = $$m({
  "marked/lib/marked.esm.js": (module, exports) => {
    function getDefaults() {
      return {
        async: false,
        baseUrl: null,
        breaks: false,
        extensions: null,
        gfm: true,
        headerIds: true,
        headerPrefix: "",
        highlight: null,
        langPrefix: "language-",
        mangle: true,
        pedantic: false,
        renderer: null,
        sanitize: false,
        sanitizer: null,
        silent: false,
        smartypants: false,
        tokenizer: null,
        walkTokens: null,
        xhtml: false
      };
    }
    let defaults = getDefaults();
    function changeDefaults(newDefaults) {
      defaults = newDefaults;
    }
    const escapeTest = /[&<>"']/;
    const escapeReplace = new RegExp(escapeTest.source, "g");
    const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
    const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
    const escapeReplacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    const getEscapeReplacement = (ch) => escapeReplacements[ch];
    function escape(html, encode) {
      if (encode) {
        if (escapeTest.test(html))
          return html.replace(escapeReplace, getEscapeReplacement);
      } else if (escapeTestNoEncode.test(html))
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      return html;
    }
    const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
    function unescape(html) {
      return html.replace(unescapeTest, (_, n) => {
        n = n.toLowerCase();
        if (n === "colon")
          return ":";
        if (n.charAt(0) === "#")
          return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
        return "";
      });
    }
    const caret = /(^|[^\[])\^/g;
    function edit(regex, opt) {
      regex = typeof regex === "string" ? regex : regex.source;
      opt = opt || "";
      const obj = {
        replace: (name, val) => {
          val = val.source || val;
          val = val.replace(caret, "$1");
          regex = regex.replace(name, val);
          return obj;
        },
        getRegex: () => {
          return new RegExp(regex, opt);
        }
      };
      return obj;
    }
    const nonWordAndColonTest = /[^\w:]/g;
    const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    function cleanUrl(sanitize, base, href) {
      if (sanitize) {
        let prot;
        try {
          prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
        } catch (e) {
          return null;
        }
        if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0)
          return null;
      }
      if (base && !originIndependentUrl.test(href))
        href = resolveUrl(base, href);
      try {
        href = encodeURI(href).replace(/%25/g, "%");
      } catch (e) {
        return null;
      }
      return href;
    }
    const baseUrls = {};
    const justDomain = /^[^:]+:\/*[^/]*$/;
    const protocol = /^([^:]+:)[\s\S]*$/;
    const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    function resolveUrl(base, href) {
      if (!baseUrls[" " + base])
        if (justDomain.test(base))
          baseUrls[" " + base] = base + "/";
        else
          baseUrls[" " + base] = rtrim(base, "/", true);
      base = baseUrls[" " + base];
      const relativeBase = base.indexOf(":") === -1;
      if (href.substring(0, 2) === "//") {
        if (relativeBase)
          return href;
        return base.replace(protocol, "$1") + href;
      } else if (href.charAt(0) === "/") {
        if (relativeBase)
          return href;
        return base.replace(domain, "$1") + href;
      } else
        return base + href;
    }
    const noopTest = { exec: function noopTest() {
    } };
    function merge(obj) {
      let i = 1, target, key;
      for (;i < arguments.length; i++) {
        target = arguments[i];
        for (key in target)
          if (Object.prototype.hasOwnProperty.call(target, key))
            obj[key] = target[key];
      }
      return obj;
    }
    function splitCells(tableRow, count) {
      const row = tableRow.replace(/\|/g, (match, offset, str) => {
        let escaped = false, curr = offset;
        while (--curr >= 0 && str[curr] === "\\")
          escaped = !escaped;
        if (escaped)
          return "|";
        else
          return " |";
      }), cells = row.split(/ \|/);
      let i = 0;
      if (!cells[0].trim())
        cells.shift();
      if (cells.length > 0 && !cells[cells.length - 1].trim())
        cells.pop();
      if (cells.length > count)
        cells.splice(count);
      else
        while (cells.length < count)
          cells.push("");
      for (;i < cells.length; i++)
        cells[i] = cells[i].trim().replace(/\\\|/g, "|");
      return cells;
    }
    function rtrim(str, c, invert) {
      const l = str.length;
      if (l === 0)
        return "";
      let suffLen = 0;
      while (suffLen < l) {
        const currChar = str.charAt(l - suffLen - 1);
        if (currChar === c && !invert)
          suffLen++;
        else if (currChar !== c && invert)
          suffLen++;
        else
          break;
      }
      return str.slice(0, l - suffLen);
    }
    function findClosingBracket(str, b) {
      if (str.indexOf(b[1]) === -1)
        return -1;
      const l = str.length;
      let level = 0, i = 0;
      for (;i < l; i++)
        if (str[i] === "\\")
          i++;
        else if (str[i] === b[0])
          level++;
        else if (str[i] === b[1]) {
          level--;
          if (level < 0)
            return i;
        }
      return -1;
    }
    function checkSanitizeDeprecation(opt) {
      if (opt && opt.sanitize && !opt.silent)
        console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
    }
    function repeatString(pattern, count) {
      if (count < 1)
        return "";
      let result = "";
      while (count > 1) {
        if (count & 1)
          result += pattern;
        count >>= 1;
        pattern += pattern;
      }
      return result + pattern;
    }
    function outputLink(cap, link, raw, lexer) {
      const href = link.href;
      const title = link.title ? escape(link.title) : null;
      const text = cap[1].replace(/\\([\[\]])/g, "$1");
      if (cap[0].charAt(0) !== "!") {
        lexer.state.inLink = true;
        const token = {
          type: "link",
          raw,
          href,
          title,
          text,
          tokens: lexer.inlineTokens(text)
        };
        lexer.state.inLink = false;
        return token;
      }
      return {
        type: "image",
        raw,
        href,
        title,
        text: escape(text)
      };
    }
    function indentCodeCompensation(raw, text) {
      const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
      if (matchIndentToCode === null)
        return text;
      const indentToCode = matchIndentToCode[1];
      return text.split("\n").map((node) => {
        const matchIndentInNode = node.match(/^\s+/);
        if (matchIndentInNode === null)
          return node;
        const [indentInNode] = matchIndentInNode;
        if (indentInNode.length >= indentToCode.length)
          return node.slice(indentToCode.length);
        return node;
      }).join("\n");
    }

    class Tokenizer {
      constructor(options) {
        this.options = options || defaults;
      }
      space(src) {
        const cap = this.rules.block.newline.exec(src);
        if (cap && cap[0].length > 0)
          return {
            type: "space",
            raw: cap[0]
          };
      }
      code(src) {
        const cap = this.rules.block.code.exec(src);
        if (cap) {
          const text = cap[0].replace(/^ {1,4}/gm, "");
          return {
            type: "code",
            raw: cap[0],
            codeBlockStyle: "indented",
            text: !this.options.pedantic ? rtrim(text, "\n") : text
          };
        }
      }
      fences(src) {
        const cap = this.rules.block.fences.exec(src);
        if (cap) {
          const raw = cap[0];
          const text = indentCodeCompensation(raw, cap[3] || "");
          return {
            type: "code",
            raw,
            lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
            text
          };
        }
      }
      heading(src) {
        const cap = this.rules.block.heading.exec(src);
        if (cap) {
          let text = cap[2].trim();
          if (/#$/.test(text)) {
            const trimmed = rtrim(text, "#");
            if (this.options.pedantic)
              text = trimmed.trim();
            else if (!trimmed || / $/.test(trimmed))
              text = trimmed.trim();
          }
          return {
            type: "heading",
            raw: cap[0],
            depth: cap[1].length,
            text,
            tokens: this.lexer.inline(text)
          };
        }
      }
      hr(src) {
        const cap = this.rules.block.hr.exec(src);
        if (cap)
          return {
            type: "hr",
            raw: cap[0]
          };
      }
      blockquote(src) {
        const cap = this.rules.block.blockquote.exec(src);
        if (cap) {
          const text = cap[0].replace(/^ *>[ \t]?/gm, "");
          const top = this.lexer.state.top;
          this.lexer.state.top = true;
          const tokens = this.lexer.blockTokens(text);
          this.lexer.state.top = top;
          return {
            type: "blockquote",
            raw: cap[0],
            tokens,
            text
          };
        }
      }
      list(src) {
        let cap = this.rules.block.list.exec(src);
        if (cap) {
          let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
          let bull = cap[1].trim();
          const isordered = bull.length > 1;
          const list = {
            type: "list",
            raw: "",
            ordered: isordered,
            start: isordered ? +bull.slice(0, -1) : "",
            loose: false,
            items: []
          };
          bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
          if (this.options.pedantic)
            bull = isordered ? bull : "[*+-]";
          const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|\$))`);
          while (src) {
            endEarly = false;
            if (!(cap = itemRegex.exec(src)))
              break;
            if (this.rules.block.hr.test(src))
              break;
            raw = cap[0];
            src = src.substring(raw.length);
            line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
            nextLine = src.split("\n", 1)[0];
            if (this.options.pedantic) {
              indent = 2;
              itemContents = line.trimLeft();
            } else {
              indent = cap[2].search(/[^ ]/);
              indent = indent > 4 ? 1 : indent;
              itemContents = line.slice(indent);
              indent += cap[1].length;
            }
            blankLine = false;
            if (!line && /^ *$/.test(nextLine)) {
              raw += nextLine + "\n";
              src = src.substring(nextLine.length + 1);
              endEarly = true;
            }
            if (!endEarly) {
              const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|\$))`);
              const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|\$)`);
              const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
              const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
              while (src) {
                rawLine = src.split("\n", 1)[0];
                nextLine = rawLine;
                if (this.options.pedantic)
                  nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
                if (fencesBeginRegex.test(nextLine))
                  break;
                if (headingBeginRegex.test(nextLine))
                  break;
                if (nextBulletRegex.test(nextLine))
                  break;
                if (hrRegex.test(src))
                  break;
                if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim())
                  itemContents += "\n" + nextLine.slice(indent);
                else {
                  if (blankLine)
                    break;
                  if (line.search(/[^ ]/) >= 4)
                    break;
                  if (fencesBeginRegex.test(line))
                    break;
                  if (headingBeginRegex.test(line))
                    break;
                  if (hrRegex.test(line))
                    break;
                  itemContents += "\n" + nextLine;
                }
                if (!blankLine && !nextLine.trim())
                  blankLine = true;
                raw += rawLine + "\n";
                src = src.substring(rawLine.length + 1);
                line = nextLine.slice(indent);
              }
            }
            if (!list.loose) {
              if (endsWithBlankLine)
                list.loose = true;
              else if (/\n *\n *$/.test(raw))
                endsWithBlankLine = true;
            }
            if (this.options.gfm) {
              istask = /^\[[ xX]\] /.exec(itemContents);
              if (istask) {
                ischecked = istask[0] !== "[ ] ";
                itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
              }
            }
            list.items.push({
              type: "list_item",
              raw,
              task: !!istask,
              checked: ischecked,
              loose: false,
              text: itemContents
            });
            list.raw += raw;
          }
          list.items[list.items.length - 1].raw = raw.trimRight();
          list.items[list.items.length - 1].text = itemContents.trimRight();
          list.raw = list.raw.trimRight();
          const l = list.items.length;
          for (i = 0;i < l; i++) {
            this.lexer.state.top = false;
            list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
            if (!list.loose) {
              const spacers = list.items[i].tokens.filter((t) => t.type === "space");
              const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
              list.loose = hasMultipleLineBreaks;
            }
          }
          if (list.loose)
            for (i = 0;i < l; i++)
              list.items[i].loose = true;
          return list;
        }
      }
      html(src) {
        const cap = this.rules.block.html.exec(src);
        if (cap) {
          const token = {
            type: "html",
            raw: cap[0],
            pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
            text: cap[0]
          };
          if (this.options.sanitize) {
            const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
            token.type = "paragraph";
            token.text = text;
            token.tokens = this.lexer.inline(text);
          }
          return token;
        }
      }
      def(src) {
        const cap = this.rules.block.def.exec(src);
        if (cap) {
          const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
          const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "";
          const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
          return {
            type: "def",
            tag,
            raw: cap[0],
            href,
            title
          };
        }
      }
      table(src) {
        const cap = this.rules.block.table.exec(src);
        if (cap) {
          const item = {
            type: "table",
            header: splitCells(cap[1]).map((c) => {
              return { text: c };
            }),
            align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
            rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
          };
          if (item.header.length === item.align.length) {
            item.raw = cap[0];
            let l = item.align.length;
            let i, j, k, row;
            for (i = 0;i < l; i++)
              if (/^ *-+: *$/.test(item.align[i]))
                item.align[i] = "right";
              else if (/^ *:-+: *$/.test(item.align[i]))
                item.align[i] = "center";
              else if (/^ *:-+ *$/.test(item.align[i]))
                item.align[i] = "left";
              else
                item.align[i] = null;
            l = item.rows.length;
            for (i = 0;i < l; i++)
              item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => {
                return { text: c };
              });
            l = item.header.length;
            for (j = 0;j < l; j++)
              item.header[j].tokens = this.lexer.inline(item.header[j].text);
            l = item.rows.length;
            for (j = 0;j < l; j++) {
              row = item.rows[j];
              for (k = 0;k < row.length; k++)
                row[k].tokens = this.lexer.inline(row[k].text);
            }
            return item;
          }
        }
      }
      lheading(src) {
        const cap = this.rules.block.lheading.exec(src);
        if (cap)
          return {
            type: "heading",
            raw: cap[0],
            depth: cap[2].charAt(0) === "=" ? 1 : 2,
            text: cap[1],
            tokens: this.lexer.inline(cap[1])
          };
      }
      paragraph(src) {
        const cap = this.rules.block.paragraph.exec(src);
        if (cap) {
          const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
          return {
            type: "paragraph",
            raw: cap[0],
            text,
            tokens: this.lexer.inline(text)
          };
        }
      }
      text(src) {
        const cap = this.rules.block.text.exec(src);
        if (cap)
          return {
            type: "text",
            raw: cap[0],
            text: cap[0],
            tokens: this.lexer.inline(cap[0])
          };
      }
      escape(src) {
        const cap = this.rules.inline.escape.exec(src);
        if (cap)
          return {
            type: "escape",
            raw: cap[0],
            text: escape(cap[1])
          };
      }
      tag(src) {
        const cap = this.rules.inline.tag.exec(src);
        if (cap) {
          if (!this.lexer.state.inLink && /^<a /i.test(cap[0]))
            this.lexer.state.inLink = true;
          else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0]))
            this.lexer.state.inLink = false;
          if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0]))
            this.lexer.state.inRawBlock = true;
          else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0]))
            this.lexer.state.inRawBlock = false;
          return {
            type: this.options.sanitize ? "text" : "html",
            raw: cap[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
          };
        }
      }
      link(src) {
        const cap = this.rules.inline.link.exec(src);
        if (cap) {
          const trimmedUrl = cap[2].trim();
          if (!this.options.pedantic && /^</.test(trimmedUrl)) {
            if (!/>$/.test(trimmedUrl))
              return;
            const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
            if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0)
              return;
          } else {
            const lastParenIndex = findClosingBracket(cap[2], "()");
            if (lastParenIndex > -1) {
              const start = cap[0].indexOf("!") === 0 ? 5 : 4;
              const linkLen = start + cap[1].length + lastParenIndex;
              cap[2] = cap[2].substring(0, lastParenIndex);
              cap[0] = cap[0].substring(0, linkLen).trim();
              cap[3] = "";
            }
          }
          let href = cap[2];
          let title = "";
          if (this.options.pedantic) {
            const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
            if (link) {
              href = link[1];
              title = link[3];
            }
          } else
            title = cap[3] ? cap[3].slice(1, -1) : "";
          href = href.trim();
          if (/^</.test(href))
            if (this.options.pedantic && !/>$/.test(trimmedUrl))
              href = href.slice(1);
            else
              href = href.slice(1, -1);
          return outputLink(cap, {
            href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
            title: title ? title.replace(this.rules.inline._escapes, "$1") : title
          }, cap[0], this.lexer);
        }
      }
      reflink(src, links) {
        let cap;
        if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
          let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
          link = links[link.toLowerCase()];
          if (!link) {
            const text = cap[0].charAt(0);
            return {
              type: "text",
              raw: text,
              text
            };
          }
          return outputLink(cap, link, cap[0], this.lexer);
        }
      }
      emStrong(src, maskedSrc, prevChar = "") {
        let match = this.rules.inline.emStrong.lDelim.exec(src);
        if (!match)
          return;
        if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
          return;
        const nextChar = match[1] || match[2] || "";
        if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
          const lLength = match[0].length - 1;
          let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
          const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
          endReg.lastIndex = 0;
          maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
          while ((match = endReg.exec(maskedSrc)) != null) {
            rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
            if (!rDelim)
              continue;
            rLength = rDelim.length;
            if (match[3] || match[4]) {
              delimTotal += rLength;
              continue;
            } else if (match[5] || match[6]) {
              if (lLength % 3 && !((lLength + rLength) % 3)) {
                midDelimTotal += rLength;
                continue;
              }
            }
            delimTotal -= rLength;
            if (delimTotal > 0)
              continue;
            rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
            const raw = src.slice(0, lLength + match.index + (match[0].length - rDelim.length) + rLength);
            if (Math.min(lLength, rLength) % 2) {
              const text = raw.slice(1, -1);
              return {
                type: "em",
                raw,
                text,
                tokens: this.lexer.inlineTokens(text)
              };
            }
            const text = raw.slice(2, -2);
            return {
              type: "strong",
              raw,
              text,
              tokens: this.lexer.inlineTokens(text)
            };
          }
        }
      }
      codespan(src) {
        const cap = this.rules.inline.code.exec(src);
        if (cap) {
          let text = cap[2].replace(/\n/g, " ");
          const hasNonSpaceChars = /[^ ]/.test(text);
          const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
          if (hasNonSpaceChars && hasSpaceCharsOnBothEnds)
            text = text.substring(1, text.length - 1);
          text = escape(text, true);
          return {
            type: "codespan",
            raw: cap[0],
            text
          };
        }
      }
      br(src) {
        const cap = this.rules.inline.br.exec(src);
        if (cap)
          return {
            type: "br",
            raw: cap[0]
          };
      }
      del(src) {
        const cap = this.rules.inline.del.exec(src);
        if (cap)
          return {
            type: "del",
            raw: cap[0],
            text: cap[2],
            tokens: this.lexer.inlineTokens(cap[2])
          };
      }
      autolink(src, mangle) {
        const cap = this.rules.inline.autolink.exec(src);
        if (cap) {
          let text, href;
          if (cap[2] === "@") {
            text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
            href = "mailto:" + text;
          } else {
            text = escape(cap[1]);
            href = text;
          }
          return {
            type: "link",
            raw: cap[0],
            text,
            href,
            tokens: [
              {
                type: "text",
                raw: text,
                text
              }
            ]
          };
        }
      }
      url(src, mangle) {
        let cap;
        if (cap = this.rules.inline.url.exec(src)) {
          let text, href;
          if (cap[2] === "@") {
            text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
            href = "mailto:" + text;
          } else {
            let prevCapZero;
            do {
              prevCapZero = cap[0];
              cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
            } while (prevCapZero !== cap[0]);
            text = escape(cap[0]);
            if (cap[1] === "www.")
              href = "http://" + cap[0];
            else
              href = cap[0];
          }
          return {
            type: "link",
            raw: cap[0],
            text,
            href,
            tokens: [
              {
                type: "text",
                raw: text,
                text
              }
            ]
          };
        }
      }
      inlineText(src, smartypants) {
        const cap = this.rules.inline.text.exec(src);
        if (cap) {
          let text;
          if (this.lexer.state.inRawBlock)
            text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
          else
            text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
          return {
            type: "text",
            raw: cap[0],
            text
          };
        }
      }
    }
    const block = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
      hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
      html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
      def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
      table: noopTest,
      lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
      text: /^[^\n]+/
    };
    block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
    block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
    block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
    block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
    block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
    block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
    block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
    block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
    block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
    block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
    block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
    block.normal = merge({}, block);
    block.gfm = merge({}, block.normal, {
      table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
    });
    block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
    block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
    block.pedantic = merge({}, block.normal, {
      html: edit('^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: noopTest,
      lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
    });
    const inline = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: noopTest,
      tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(ref)\]/,
      nolink: /^!?\[(ref)\](?:\[\])?/,
      reflinkSearch: "reflink|nolink(?!\\()",
      emStrong: {
        lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
        rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
        rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
      },
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: noopTest,
      text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
      punctuation: /^([\spunctuation])/
    };
    inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
    inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
    inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
    inline.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
    inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
    inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
    inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
    inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
    inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
    inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
    inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
    inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
    inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
    inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
    inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
    inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
    inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
    inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
    inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
    inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
    inline.normal = merge({}, inline);
    inline.pedantic = merge({}, inline.normal, {
      strong: {
        start: /^__|\*\*/,
        middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g
      },
      link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
      reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
    });
    inline.gfm = merge({}, inline.normal, {
      escape: edit(inline.escape).replace("])", "~|])").getRegex(),
      _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    });
    inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
    inline.breaks = merge({}, inline.gfm, {
      br: edit(inline.br).replace("{2,}", "*").getRegex(),
      text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    });
    function smartypants(text) {
      return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
    }
    function mangle(text) {
      let out = "", i, ch;
      const l = text.length;
      for (i = 0;i < l; i++) {
        ch = text.charCodeAt(i);
        if (Math.random() > 0.5)
          ch = "x" + ch.toString(16);
        out += "&#" + ch + ";";
      }
      return out;
    }

    class Lexer {
      constructor(options) {
        this.tokens = [];
        this.tokens.links = Object.create(null);
        this.options = options || defaults;
        this.options.tokenizer = this.options.tokenizer || new Tokenizer;
        this.tokenizer = this.options.tokenizer;
        this.tokenizer.options = this.options;
        this.tokenizer.lexer = this;
        this.inlineQueue = [];
        this.state = {
          inLink: false,
          inRawBlock: false,
          top: true
        };
        const rules = {
          block: block.normal,
          inline: inline.normal
        };
        if (this.options.pedantic) {
          rules.block = block.pedantic;
          rules.inline = inline.pedantic;
        } else if (this.options.gfm) {
          rules.block = block.gfm;
          if (this.options.breaks)
            rules.inline = inline.breaks;
          else
            rules.inline = inline.gfm;
        }
        this.tokenizer.rules = rules;
      }
      static get rules() {
        return {
          block,
          inline
        };
      }
      static lex(src, options) {
        const lexer = new Lexer(options);
        return lexer.lex(src);
      }
      static lexInline(src, options) {
        const lexer = new Lexer(options);
        return lexer.inlineTokens(src);
      }
      lex(src) {
        src = src.replace(/\r\n|\r/g, "\n");
        this.blockTokens(src, this.tokens);
        let next;
        while (next = this.inlineQueue.shift())
          this.inlineTokens(next.src, next.tokens);
        return this.tokens;
      }
      blockTokens(src, tokens = []) {
        if (this.options.pedantic)
          src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
        else
          src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
            return leading + "    ".repeat(tabs.length);
          });
        let token, lastToken, cutSrc, lastParagraphClipped;
        while (src) {
          if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
            if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          }))
            continue;
          if (token = this.tokenizer.space(src)) {
            src = src.substring(token.raw.length);
            if (token.raw.length === 1 && tokens.length > 0)
              tokens[tokens.length - 1].raw += "\n";
            else
              tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.code(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
              lastToken.raw += "\n" + token.raw;
              lastToken.text += "\n" + token.text;
              this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
            } else
              tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.fences(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.heading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.hr(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.blockquote(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.list(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.html(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.def(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
              lastToken.raw += "\n" + token.raw;
              lastToken.text += "\n" + token.raw;
              this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
            } else if (!this.tokens.links[token.tag])
              this.tokens.links[token.tag] = {
                href: token.href,
                title: token.title
              };
            continue;
          }
          if (token = this.tokenizer.table(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.lheading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          cutSrc = src;
          if (this.options.extensions && this.options.extensions.startBlock) {
            let startIndex = Infinity;
            const tempSrc = src.slice(1);
            let tempStart;
            this.options.extensions.startBlock.forEach(function(getStartIndex) {
              tempStart = getStartIndex.call({ lexer: this }, tempSrc);
              if (typeof tempStart === "number" && tempStart >= 0)
                startIndex = Math.min(startIndex, tempStart);
            });
            if (startIndex < Infinity && startIndex >= 0)
              cutSrc = src.substring(0, startIndex + 1);
          }
          if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
            lastToken = tokens[tokens.length - 1];
            if (lastParagraphClipped && lastToken.type === "paragraph") {
              lastToken.raw += "\n" + token.raw;
              lastToken.text += "\n" + token.text;
              this.inlineQueue.pop();
              this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
            } else
              tokens.push(token);
            lastParagraphClipped = cutSrc.length !== src.length;
            src = src.substring(token.raw.length);
            continue;
          }
          if (token = this.tokenizer.text(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && lastToken.type === "text") {
              lastToken.raw += "\n" + token.raw;
              lastToken.text += "\n" + token.text;
              this.inlineQueue.pop();
              this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
            } else
              tokens.push(token);
            continue;
          }
          if (src) {
            const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else
              throw new Error(errMsg);
          }
        }
        this.state.top = true;
        return tokens;
      }
      inline(src, tokens = []) {
        this.inlineQueue.push({ src, tokens });
        return tokens;
      }
      inlineTokens(src, tokens = []) {
        let token, lastToken, cutSrc;
        let maskedSrc = src;
        let match;
        let keepPrevChar, prevChar;
        if (this.tokens.links) {
          const links = Object.keys(this.tokens.links);
          if (links.length > 0) {
            while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null)
              if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1)))
                maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
        while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null)
          maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
          maskedSrc = maskedSrc.slice(0, match.index + match[0].length - 2) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
          this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
        }
        while (src) {
          if (!keepPrevChar)
            prevChar = "";
          keepPrevChar = false;
          if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
            if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          }))
            continue;
          if (token = this.tokenizer.escape(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.tag(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && token.type === "text" && lastToken.type === "text") {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else
              tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.link(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.reflink(src, this.tokens.links)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && token.type === "text" && lastToken.type === "text") {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else
              tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.codespan(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.br(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.del(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.autolink(src, mangle)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          cutSrc = src;
          if (this.options.extensions && this.options.extensions.startInline) {
            let startIndex = Infinity;
            const tempSrc = src.slice(1);
            let tempStart;
            this.options.extensions.startInline.forEach(function(getStartIndex) {
              tempStart = getStartIndex.call({ lexer: this }, tempSrc);
              if (typeof tempStart === "number" && tempStart >= 0)
                startIndex = Math.min(startIndex, tempStart);
            });
            if (startIndex < Infinity && startIndex >= 0)
              cutSrc = src.substring(0, startIndex + 1);
          }
          if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
            src = src.substring(token.raw.length);
            if (token.raw.slice(-1) !== "_")
              prevChar = token.raw.slice(-1);
            keepPrevChar = true;
            lastToken = tokens[tokens.length - 1];
            if (lastToken && lastToken.type === "text") {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else
              tokens.push(token);
            continue;
          }
          if (src) {
            const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else
              throw new Error(errMsg);
          }
        }
        return tokens;
      }
    }

    class Renderer {
      constructor(options) {
        this.options = options || defaults;
      }
      code(code, infostring, escaped) {
        const lang = (infostring || "").match(/\S*/)[0];
        if (this.options.highlight) {
          const out = this.options.highlight(code, lang);
          if (out != null && out !== code) {
            escaped = true;
            code = out;
          }
        }
        code = code.replace(/\n$/, "") + "\n";
        if (!lang)
          return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
        return '<pre><code class="' + this.options.langPrefix + escape(lang) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
      }
      blockquote(quote) {
        return `<blockquote>\n${quote}</blockquote>\n`;
      }
      html(html) {
        return html;
      }
      heading(text, level, raw, slugger) {
        if (this.options.headerIds) {
          const id = this.options.headerPrefix + slugger.slug(raw);
          return `<h${level} id="${id}">${text}</h${level}>\n`;
        }
        return `<h${level}>${text}</h${level}>\n`;
      }
      hr() {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
      }
      list(body, ordered, start) {
        const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
        return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
      }
      listitem(text) {
        return `<li>${text}</li>\n`;
      }
      checkbox(checked) {
        return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
      }
      paragraph(text) {
        return `<p>${text}</p>\n`;
      }
      table(header, body) {
        if (body)
          body = `<tbody>${body}</tbody>`;
        return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
      }
      tablerow(content) {
        return `<tr>\n${content}</tr>\n`;
      }
      tablecell(content, flags) {
        const type = flags.header ? "th" : "td";
        const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
        return tag + content + `</${type}>\n`;
      }
      strong(text) {
        return `<strong>${text}</strong>`;
      }
      em(text) {
        return `<em>${text}</em>`;
      }
      codespan(text) {
        return `<code>${text}</code>`;
      }
      br() {
        return this.options.xhtml ? "<br/>" : "<br>";
      }
      del(text) {
        return `<del>${text}</del>`;
      }
      link(href, title, text) {
        href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
        if (href === null)
          return text;
        let out = '<a href="' + href + '"';
        if (title)
          out += ' title="' + title + '"';
        out += ">" + text + "</a>";
        return out;
      }
      image(href, title, text) {
        href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
        if (href === null)
          return text;
        let out = `<img src="${href}" alt="${text}"`;
        if (title)
          out += ` title="${title}"`;
        out += this.options.xhtml ? "/>" : ">";
        return out;
      }
      text(text) {
        return text;
      }
    }

    class TextRenderer {
      strong(text) {
        return text;
      }
      em(text) {
        return text;
      }
      codespan(text) {
        return text;
      }
      del(text) {
        return text;
      }
      html(text) {
        return text;
      }
      text(text) {
        return text;
      }
      link(href, title, text) {
        return "" + text;
      }
      image(href, title, text) {
        return "" + text;
      }
      br() {
        return "";
      }
    }

    class Slugger {
      constructor() {
        this.seen = {};
      }
      serialize(value) {
        return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
      }
      getNextSafeSlug(originalSlug, isDryRun) {
        let slug = originalSlug;
        let occurenceAccumulator = 0;
        if (this.seen.hasOwnProperty(slug)) {
          occurenceAccumulator = this.seen[originalSlug];
          do {
            occurenceAccumulator++;
            slug = originalSlug + "-" + occurenceAccumulator;
          } while (this.seen.hasOwnProperty(slug));
        }
        if (!isDryRun) {
          this.seen[originalSlug] = occurenceAccumulator;
          this.seen[slug] = 0;
        }
        return slug;
      }
      slug(value, options = {}) {
        const slug = this.serialize(value);
        return this.getNextSafeSlug(slug, options.dryrun);
      }
    }

    class Parser {
      constructor(options) {
        this.options = options || defaults;
        this.options.renderer = this.options.renderer || new Renderer;
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
        this.textRenderer = new TextRenderer;
        this.slugger = new Slugger;
      }
      static parse(tokens, options) {
        const parser = new Parser(options);
        return parser.parse(tokens);
      }
      static parseInline(tokens, options) {
        const parser = new Parser(options);
        return parser.parseInline(tokens);
      }
      parse(tokens, top = true) {
        let out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
        const l = tokens.length;
        for (i = 0;i < l; i++) {
          token = tokens[i];
          if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
            ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
            if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
              out += ret || "";
              continue;
            }
          }
          switch (token.type) {
            case "space":
              continue;
            case "hr": {
              out += this.renderer.hr();
              continue;
            }
            case "heading": {
              out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
              continue;
            }
            case "code": {
              out += this.renderer.code(token.text, token.lang, token.escaped);
              continue;
            }
            case "table": {
              header = "";
              cell = "";
              l2 = token.header.length;
              for (j = 0;j < l2; j++)
                cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), { header: true, align: token.align[j] });
              header += this.renderer.tablerow(cell);
              body = "";
              l2 = token.rows.length;
              for (j = 0;j < l2; j++) {
                row = token.rows[j];
                cell = "";
                l3 = row.length;
                for (k = 0;k < l3; k++)
                  cell += this.renderer.tablecell(this.parseInline(row[k].tokens), { header: false, align: token.align[k] });
                body += this.renderer.tablerow(cell);
              }
              out += this.renderer.table(header, body);
              continue;
            }
            case "blockquote": {
              body = this.parse(token.tokens);
              out += this.renderer.blockquote(body);
              continue;
            }
            case "list": {
              ordered = token.ordered;
              start = token.start;
              loose = token.loose;
              l2 = token.items.length;
              body = "";
              for (j = 0;j < l2; j++) {
                item = token.items[j];
                checked = item.checked;
                task = item.task;
                itemBody = "";
                if (item.task) {
                  checkbox = this.renderer.checkbox(checked);
                  if (loose)
                    if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                      item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text")
                        item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                    } else
                      item.tokens.unshift({
                        type: "text",
                        text: checkbox
                      });
                  else
                    itemBody += checkbox;
                }
                itemBody += this.parse(item.tokens, loose);
                body += this.renderer.listitem(itemBody, task, checked);
              }
              out += this.renderer.list(body, ordered, start);
              continue;
            }
            case "html": {
              out += this.renderer.html(token.text);
              continue;
            }
            case "paragraph": {
              out += this.renderer.paragraph(this.parseInline(token.tokens));
              continue;
            }
            case "text": {
              body = token.tokens ? this.parseInline(token.tokens) : token.text;
              while (i + 1 < l && tokens[i + 1].type === "text") {
                token = tokens[++i];
                body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
              }
              out += top ? this.renderer.paragraph(body) : body;
              continue;
            }
            default: {
              const errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else
                throw new Error(errMsg);
            }
          }
        }
        return out;
      }
      parseInline(tokens, renderer) {
        renderer = renderer || this.renderer;
        let out = "", i, token, ret;
        const l = tokens.length;
        for (i = 0;i < l; i++) {
          token = tokens[i];
          if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
            ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
            if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
              out += ret || "";
              continue;
            }
          }
          switch (token.type) {
            case "escape": {
              out += renderer.text(token.text);
              break;
            }
            case "html": {
              out += renderer.html(token.text);
              break;
            }
            case "link": {
              out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
              break;
            }
            case "image": {
              out += renderer.image(token.href, token.title, token.text);
              break;
            }
            case "strong": {
              out += renderer.strong(this.parseInline(token.tokens, renderer));
              break;
            }
            case "em": {
              out += renderer.em(this.parseInline(token.tokens, renderer));
              break;
            }
            case "codespan": {
              out += renderer.codespan(token.text);
              break;
            }
            case "br": {
              out += renderer.br();
              break;
            }
            case "del": {
              out += renderer.del(this.parseInline(token.tokens, renderer));
              break;
            }
            case "text": {
              out += renderer.text(token.text);
              break;
            }
            default: {
              const errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else
                throw new Error(errMsg);
            }
          }
        }
        return out;
      }
    }
    function marked(src, opt, callback) {
      if (typeof src === "undefined" || src === null)
        throw new Error("marked(): input parameter is undefined or null");
      if (typeof src !== "string")
        throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
      if (typeof opt === "function") {
        callback = opt;
        opt = null;
      }
      opt = merge({}, marked.defaults, opt || {});
      checkSanitizeDeprecation(opt);
      if (callback) {
        const highlight = opt.highlight;
        let tokens;
        try {
          tokens = Lexer.lex(src, opt);
        } catch (e) {
          return callback(e);
        }
        const done = function(err) {
          let out;
          if (!err)
            try {
              if (opt.walkTokens)
                marked.walkTokens(tokens, opt.walkTokens);
              out = Parser.parse(tokens, opt);
            } catch (e) {
              err = e;
            }
          opt.highlight = highlight;
          return err ? callback(err) : callback(null, out);
        };
        if (!highlight || highlight.length < 3)
          return done();
        delete opt.highlight;
        if (!tokens.length)
          return done();
        let pending = 0;
        marked.walkTokens(tokens, function(token) {
          if (token.type === "code") {
            pending++;
            setTimeout(() => {
              highlight(token.text, token.lang, function(err, code) {
                if (err)
                  return done(err);
                if (code != null && code !== token.text) {
                  token.text = code;
                  token.escaped = true;
                }
                pending--;
                if (pending === 0)
                  done();
              });
            }, 0);
          }
        });
        if (pending === 0)
          done();
        return;
      }
      function onError(e) {
        e.message += "\nPlease report this to https://github.com/markedjs/marked.";
        if (opt.silent)
          return "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
        throw e;
      }
      try {
        const tokens = Lexer.lex(src, opt);
        if (opt.walkTokens) {
          if (opt.async)
            return Promise.all(marked.walkTokens(tokens, opt.walkTokens)).then(() => {
              return Parser.parse(tokens, opt);
            }).catch(onError);
          marked.walkTokens(tokens, opt.walkTokens);
        }
        return Parser.parse(tokens, opt);
      } catch (e) {
        onError(e);
      }
    }
    marked.options = marked.setOptions = function(opt) {
      merge(marked.defaults, opt);
      changeDefaults(marked.defaults);
      return marked;
    };
    marked.getDefaults = getDefaults;
    marked.defaults = defaults;
    marked.use = function(...args) {
      const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
      args.forEach((pack) => {
        const opts = merge({}, pack);
        opts.async = marked.defaults.async || opts.async;
        if (pack.extensions) {
          pack.extensions.forEach((ext) => {
            if (!ext.name)
              throw new Error("extension name required");
            if (ext.renderer) {
              const prevRenderer = extensions.renderers[ext.name];
              if (prevRenderer)
                extensions.renderers[ext.name] = function(...args) {
                  let ret = ext.renderer.apply(this, args);
                  if (ret === false)
                    ret = prevRenderer.apply(this, args);
                  return ret;
                };
              else
                extensions.renderers[ext.name] = ext.renderer;
            }
            if (ext.tokenizer) {
              if (!ext.level || ext.level !== "block" && ext.level !== "inline")
                throw new Error("extension level must be 'block' or 'inline'");
              if (extensions[ext.level])
                extensions[ext.level].unshift(ext.tokenizer);
              else
                extensions[ext.level] = [ext.tokenizer];
              if (ext.start) {
                if (ext.level === "block")
                  if (extensions.startBlock)
                    extensions.startBlock.push(ext.start);
                  else
                    extensions.startBlock = [ext.start];
                else if (ext.level === "inline")
                  if (extensions.startInline)
                    extensions.startInline.push(ext.start);
                  else
                    extensions.startInline = [ext.start];
              }
            }
            if (ext.childTokens)
              extensions.childTokens[ext.name] = ext.childTokens;
          });
          opts.extensions = extensions;
        }
        if (pack.renderer) {
          const renderer = marked.defaults.renderer || new Renderer;
          for (const prop in pack.renderer) {
            const prevRenderer = renderer[prop];
            renderer[prop] = (...args) => {
              let ret = pack.renderer[prop].apply(renderer, args);
              if (ret === false)
                ret = prevRenderer.apply(renderer, args);
              return ret;
            };
          }
          opts.renderer = renderer;
        }
        if (pack.tokenizer) {
          const tokenizer = marked.defaults.tokenizer || new Tokenizer;
          for (const prop in pack.tokenizer) {
            const prevTokenizer = tokenizer[prop];
            tokenizer[prop] = (...args) => {
              let ret = pack.tokenizer[prop].apply(tokenizer, args);
              if (ret === false)
                ret = prevTokenizer.apply(tokenizer, args);
              return ret;
            };
          }
          opts.tokenizer = tokenizer;
        }
        if (pack.walkTokens) {
          const walkTokens = marked.defaults.walkTokens;
          opts.walkTokens = function(token) {
            let values = [];
            values.push(pack.walkTokens.call(this, token));
            if (walkTokens)
              values = values.concat(walkTokens.call(this, token));
            return values;
          };
        }
        marked.setOptions(opts);
      });
    };
    marked.walkTokens = function(tokens, callback) {
      let values = [];
      for (const token of tokens) {
        values = values.concat(callback.call(marked, token));
        switch (token.type) {
          case "table": {
            for (const cell of token.header)
              values = values.concat(marked.walkTokens(cell.tokens, callback));
            for (const row of token.rows)
              for (const cell of row)
                values = values.concat(marked.walkTokens(cell.tokens, callback));
            break;
          }
          case "list": {
            values = values.concat(marked.walkTokens(token.items, callback));
            break;
          }
          default:
            if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type])
              marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
                values = values.concat(marked.walkTokens(token[childTokens], callback));
              });
            else if (token.tokens)
              values = values.concat(marked.walkTokens(token.tokens, callback));
        }
      }
      return values;
    };
    marked.parseInline = function(src, opt) {
      if (typeof src === "undefined" || src === null)
        throw new Error("marked.parseInline(): input parameter is undefined or null");
      if (typeof src !== "string")
        throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
      opt = merge({}, marked.defaults, opt || {});
      checkSanitizeDeprecation(opt);
      try {
        const tokens = Lexer.lexInline(src, opt);
        if (opt.walkTokens)
          marked.walkTokens(tokens, opt.walkTokens);
        return Parser.parseInline(tokens, opt);
      } catch (e) {
        e.message += "\nPlease report this to https://github.com/markedjs/marked.";
        if (opt.silent)
          return "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
        throw e;
      }
    };
    marked.Parser = Parser;
    marked.parser = Parser.parse;
    marked.Renderer = Renderer;
    marked.TextRenderer = TextRenderer;
    marked.Lexer = Lexer;
    marked.lexer = Lexer.lex;
    marked.Tokenizer = Tokenizer;
    marked.Slugger = Slugger;
    marked.parse = marked;
    const options = marked.options;
    const setOptions = marked.setOptions;
    const use = marked.use;
    const walkTokens = marked.walkTokens;
    const parseInline = marked.parseInline;
    const parse = marked;
    const parser = Parser.parse;
    const lexer = Lexer.lex;
    __export(module.exports, { Lexer: () => Lexer,Parser: () => Parser,Renderer: () => Renderer,Slugger: () => Slugger,TextRenderer: () => TextRenderer,Tokenizer: () => Tokenizer,defaults: () => defaults,getDefaults: () => getDefaults,lexer: () => lexer,marked: () => marked,options: () => options,parse: () => parse,parseInline: () => parseInline,parser: () => parser,setOptions: () => setOptions,use: () => use,walkTokens: () => walkTokens});
  }
}["marked/lib/marked.esm.js"]);


// highlight.js/lib/languages/typescript.js
export var $86aa7ce9 = $$m({
  "highlight.js/lib/languages/typescript.js": (module, exports) => {
    const IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
    const KEYWORDS = [
      "as",
      "in",
      "of",
      "if",
      "for",
      "while",
      "finally",
      "var",
      "new",
      "function",
      "do",
      "return",
      "void",
      "else",
      "break",
      "catch",
      "instanceof",
      "with",
      "throw",
      "case",
      "default",
      "try",
      "switch",
      "continue",
      "typeof",
      "delete",
      "let",
      "yield",
      "const",
      "class",
      "debugger",
      "async",
      "await",
      "static",
      "import",
      "from",
      "export",
      "extends"
    ];
    const LITERALS = [
      "true",
      "false",
      "null",
      "undefined",
      "NaN",
      "Infinity"
    ];
    const TYPES = [
      "Object",
      "Function",
      "Boolean",
      "Symbol",
      "Math",
      "Date",
      "Number",
      "BigInt",
      "String",
      "RegExp",
      "Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Int32Array",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array",
      "Set",
      "Map",
      "WeakSet",
      "WeakMap",
      "ArrayBuffer",
      "SharedArrayBuffer",
      "Atomics",
      "DataView",
      "JSON",
      "Promise",
      "Generator",
      "GeneratorFunction",
      "AsyncFunction",
      "Reflect",
      "Proxy",
      "Intl",
      "WebAssembly"
    ];
    const ERROR_TYPES = [
      "Error",
      "EvalError",
      "InternalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError"
    ];
    const BUILT_IN_GLOBALS = [
      "setInterval",
      "setTimeout",
      "clearInterval",
      "clearTimeout",
      "require",
      "exports",
      "eval",
      "isFinite",
      "isNaN",
      "parseFloat",
      "parseInt",
      "decodeURI",
      "decodeURIComponent",
      "encodeURI",
      "encodeURIComponent",
      "escape",
      "unescape"
    ];
    const BUILT_IN_VARIABLES = [
      "arguments",
      "this",
      "super",
      "console",
      "window",
      "document",
      "localStorage",
      "module",
      "global"
    ];
    const BUILT_INS = [].concat(BUILT_IN_GLOBALS, TYPES, ERROR_TYPES);
    function javascript(hljs) {
      const regex = hljs.regex;
      const hasClosingTag = (match, { after }) => {
        const tag = "</" + match[0].slice(1);
        const pos = match.input.indexOf(tag, after);
        return pos !== -1;
      };
      const IDENT_RE$1 = IDENT_RE;
      const FRAGMENT = {
        begin: "<>",
        end: "</>"
      };
      const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
      const XML_TAG = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (match, response) => {
          const afterMatchIndex = match[0].length + match.index;
          const nextChar = match.input[afterMatchIndex];
          if (nextChar === "<" || nextChar === ",") {
            response.ignoreMatch();
            return;
          }
          if (nextChar === ">") {
            if (!hasClosingTag(match, { after: afterMatchIndex }))
              response.ignoreMatch();
          }
          let m;
          const afterMatch = match.input.substring(afterMatchIndex);
          if (m = afterMatch.match(/^\s*=/)) {
            response.ignoreMatch();
            return;
          }
          if (m = afterMatch.match(/^\s+extends\s+/)) {
            if (m.index === 0) {
              response.ignoreMatch();
              return;
            }
          }
        }
      };
      const KEYWORDS$1 = {
        $pattern: IDENT_RE,
        keyword: KEYWORDS,
        literal: LITERALS,
        built_in: BUILT_INS,
        "variable.language": BUILT_IN_VARIABLES
      };
      const decimalDigits = "[0-9](_?[0-9])*";
      const frac = `\\.(${decimalDigits})`;
      const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
      const NUMBER = {
        className: "number",
        variants: [
          { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))` + `[eE][+-]?(${decimalDigits})\\b` },
          { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
          { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
          { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
          { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
          { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
          { begin: "\\b0[0-7]+n?\\b" }
        ],
        relevance: 0
      };
      const SUBST = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: KEYWORDS$1,
        contains: []
      };
      const HTML_TEMPLATE = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ],
          subLanguage: "xml"
        }
      };
      const CSS_TEMPLATE = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ],
          subLanguage: "css"
        }
      };
      const TEMPLATE_STRING = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ]
      };
      const JSDOC_COMMENT = hljs.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
        relevance: 0,
        contains: [
          {
            begin: "(?=@[A-Za-z]+)",
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              },
              {
                className: "type",
                begin: "\\{",
                end: "\\}",
                excludeEnd: true,
                excludeBegin: true,
                relevance: 0
              },
              {
                className: "variable",
                begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
                endsParent: true,
                relevance: 0
              },
              {
                begin: /(?=[^\n])\s/,
                relevance: 0
              }
            ]
          }
        ]
      });
      const COMMENT = {
        className: "comment",
        variants: [
          JSDOC_COMMENT,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.C_LINE_COMMENT_MODE
        ]
      };
      const SUBST_INTERNALS = [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        HTML_TEMPLATE,
        CSS_TEMPLATE,
        TEMPLATE_STRING,
        { match: /\$\d+/ },
        NUMBER
      ];
      SUBST.contains = SUBST_INTERNALS.concat({
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS$1,
        contains: [
          "self"
        ].concat(SUBST_INTERNALS)
      });
      const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
      const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: KEYWORDS$1,
          contains: ["self"].concat(SUBST_AND_COMMENTS)
        }
      ]);
      const PARAMS = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS$1,
        contains: PARAMS_CONTAINS
      };
      const CLASS_OR_EXTENDS = {
        variants: [
          {
            match: [
              /class/,
              /\s+/,
              IDENT_RE$1,
              /\s+/,
              /extends/,
              /\s+/,
              regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
            ],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          },
          {
            match: [
              /class/,
              /\s+/,
              IDENT_RE$1
            ],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }
        ]
      };
      const CLASS_REFERENCE = {
        relevance: 0,
        match: regex.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
        className: "title.class",
        keywords: {
          _: [
            ...TYPES,
            ...ERROR_TYPES
          ]
        }
      };
      const USE_STRICT = {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      };
      const FUNCTION_DEFINITION = {
        variants: [
          {
            match: [
              /function/,
              /\s+/,
              IDENT_RE$1,
              /(?=\s*\()/
            ]
          },
          {
            match: [
              /function/,
              /\s*(?=\()/
            ]
          }
        ],
        className: {
          1: "keyword",
          3: "title.function"
        },
        label: "func.def",
        contains: [PARAMS],
        illegal: /%/
      };
      const UPPER_CASE_CONSTANT = {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
      };
      function noneOf(list) {
        return regex.concat("(?!", list.join("|"), ")");
      }
      const FUNCTION_CALL = {
        match: regex.concat(/\b/, noneOf([
          ...BUILT_IN_GLOBALS,
          "super",
          "import"
        ]), IDENT_RE$1, regex.lookahead(/\(/)),
        className: "title.function",
        relevance: 0
      };
      const PROPERTY_ACCESS = {
        begin: regex.concat(/\./, regex.lookahead(regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/))),
        end: IDENT_RE$1,
        excludeBegin: true,
        keywords: "prototype",
        className: "property",
        relevance: 0
      };
      const GETTER_OR_SETTER = {
        match: [
          /get|set/,
          /\s+/,
          IDENT_RE$1,
          /(?=\()/
        ],
        className: {
          1: "keyword",
          3: "title.function"
        },
        contains: [
          {
            begin: /\(\)/
          },
          PARAMS
        ]
      };
      const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
      const FUNCTION_VARIABLE = {
        match: [
          /const|var|let/,
          /\s+/,
          IDENT_RE$1,
          /\s*/,
          /=\s*/,
          /(async\s*)?/,
          regex.lookahead(FUNC_LEAD_IN_RE)
        ],
        keywords: "async",
        className: {
          1: "keyword",
          3: "title.function"
        },
        contains: [
          PARAMS
        ]
      };
      return {
        name: "Javascript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: KEYWORDS$1,
        exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
        illegal: /#(?![$_A-z])/,
        contains: [
          hljs.SHEBANG({
            label: "shebang",
            binary: "node",
            relevance: 5
          }),
          USE_STRICT,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          HTML_TEMPLATE,
          CSS_TEMPLATE,
          TEMPLATE_STRING,
          COMMENT,
          { match: /\$\d+/ },
          NUMBER,
          CLASS_REFERENCE,
          {
            className: "attr",
            begin: IDENT_RE$1 + regex.lookahead(":"),
            relevance: 0
          },
          FUNCTION_VARIABLE,
          {
            begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
            keywords: "return throw case",
            relevance: 0,
            contains: [
              COMMENT,
              hljs.REGEXP_MODE,
              {
                className: "function",
                begin: FUNC_LEAD_IN_RE,
                returnBegin: true,
                end: "\\s*=>",
                contains: [
                  {
                    className: "params",
                    variants: [
                      {
                        begin: hljs.UNDERSCORE_IDENT_RE,
                        relevance: 0
                      },
                      {
                        className: null,
                        begin: /\(\s*\)/,
                        skip: true
                      },
                      {
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: true,
                        excludeEnd: true,
                        keywords: KEYWORDS$1,
                        contains: PARAMS_CONTAINS
                      }
                    ]
                  }
                ]
              },
              {
                begin: /,/,
                relevance: 0
              },
              {
                match: /\s+/,
                relevance: 0
              },
              {
                variants: [
                  { begin: FRAGMENT.begin, end: FRAGMENT.end },
                  { match: XML_SELF_CLOSING },
                  {
                    begin: XML_TAG.begin,
                    "on:begin": XML_TAG.isTrulyOpeningTag,
                    end: XML_TAG.end
                  }
                ],
                subLanguage: "xml",
                contains: [
                  {
                    begin: XML_TAG.begin,
                    end: XML_TAG.end,
                    skip: true,
                    contains: ["self"]
                  }
                ]
              }
            ]
          },
          FUNCTION_DEFINITION,
          {
            beginKeywords: "while if switch catch for"
          },
          {
            begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
            returnBegin: true,
            label: "func.def",
            contains: [
              PARAMS,
              hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
            ]
          },
          {
            match: /\.\.\./,
            relevance: 0
          },
          PROPERTY_ACCESS,
          {
            match: "\\$" + IDENT_RE$1,
            relevance: 0
          },
          {
            match: [/\bconstructor(?=\s*\()/],
            className: { 1: "title.function" },
            contains: [PARAMS]
          },
          FUNCTION_CALL,
          UPPER_CASE_CONSTANT,
          CLASS_OR_EXTENDS,
          GETTER_OR_SETTER,
          {
            match: /\$[(.]/
          }
        ]
      };
    }
    function typescript(hljs) {
      const tsLanguage = javascript(hljs);
      const IDENT_RE$1 = IDENT_RE;
      const TYPES = [
        "any",
        "void",
        "number",
        "boolean",
        "string",
        "object",
        "never",
        "symbol",
        "bigint",
        "unknown"
      ];
      const NAMESPACE = {
        beginKeywords: "namespace",
        end: /\{/,
        excludeEnd: true,
        contains: [tsLanguage.exports.CLASS_REFERENCE]
      };
      const INTERFACE = {
        beginKeywords: "interface",
        end: /\{/,
        excludeEnd: true,
        keywords: {
          keyword: "interface extends",
          built_in: TYPES
        },
        contains: [tsLanguage.exports.CLASS_REFERENCE]
      };
      const USE_STRICT = {
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use strict['"]/
      };
      const TS_SPECIFIC_KEYWORDS = [
        "type",
        "namespace",
        "interface",
        "public",
        "private",
        "protected",
        "implements",
        "declare",
        "abstract",
        "readonly",
        "enum",
        "override"
      ];
      const KEYWORDS$1 = {
        $pattern: IDENT_RE,
        keyword: KEYWORDS.concat(TS_SPECIFIC_KEYWORDS),
        literal: LITERALS,
        built_in: BUILT_INS.concat(TYPES),
        "variable.language": BUILT_IN_VARIABLES
      };
      const DECORATOR = {
        className: "meta",
        begin: "@" + IDENT_RE$1
      };
      const swapMode = (mode, label, replacement) => {
        const indx = mode.contains.findIndex((m) => m.label === label);
        if (indx === -1)
          throw new Error("can not find mode to replace");
        mode.contains.splice(indx, 1, replacement);
      };
      Object.assign(tsLanguage.keywords, KEYWORDS$1);
      tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
      tsLanguage.contains = tsLanguage.contains.concat([
        DECORATOR,
        NAMESPACE,
        INTERFACE
      ]);
      swapMode(tsLanguage, "shebang", hljs.SHEBANG());
      swapMode(tsLanguage, "use_strict", USE_STRICT);
      const functionDeclaration = tsLanguage.contains.find((m) => m.label === "func.def");
      functionDeclaration.relevance = 0;
      Object.assign(tsLanguage, {
        name: "TypeScript",
        aliases: [
          "ts",
          "tsx"
        ]
      });
      return tsLanguage;
    }
    module.exports = typescript;
  }
}["highlight.js/lib/languages/typescript.js"]);


// highlight.js/lib/languages/vbnet.js
export var $10be251f = $$m({
  "highlight.js/lib/languages/vbnet.js": (module, exports) => {
    function vbnet(hljs) {
      const regex = hljs.regex;
      const CHARACTER = {
        className: "string",
        begin: /"(""|[^/n])"C\b/
      };
      const STRING = {
        className: "string",
        begin: /"/,
        end: /"/,
        illegal: /\n/,
        contains: [
          {
            begin: /""/
          }
        ]
      };
      const MM_DD_YYYY = /\d{1,2}\/\d{1,2}\/\d{4}/;
      const YYYY_MM_DD = /\d{4}-\d{1,2}-\d{1,2}/;
      const TIME_12H = /(\d|1[012])(:\d+){0,2} *(AM|PM)/;
      const TIME_24H = /\d{1,2}(:\d{1,2}){1,2}/;
      const DATE = {
        className: "literal",
        variants: [
          {
            begin: regex.concat(/# */, regex.either(YYYY_MM_DD, MM_DD_YYYY), / *#/)
          },
          {
            begin: regex.concat(/# */, TIME_24H, / *#/)
          },
          {
            begin: regex.concat(/# */, TIME_12H, / *#/)
          },
          {
            begin: regex.concat(/# */, regex.either(YYYY_MM_DD, MM_DD_YYYY), / +/, regex.either(TIME_12H, TIME_24H), / *#/)
          }
        ]
      };
      const NUMBER = {
        className: "number",
        relevance: 0,
        variants: [
          {
            begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
          },
          {
            begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
          },
          {
            begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
          },
          {
            begin: /&O[0-7_]+((U?[SIL])|[%&])?/
          },
          {
            begin: /&B[01_]+((U?[SIL])|[%&])?/
          }
        ]
      };
      const LABEL = {
        className: "label",
        begin: /^\w+:/
      };
      const DOC_COMMENT = hljs.COMMENT(/'''/, /$/, { contains: [
        {
          className: "doctag",
          begin: /<\/?/,
          end: />/
        }
      ] });
      const COMMENT = hljs.COMMENT(null, /$/, { variants: [
        { begin: /'/ },
        {
          begin: /([\t ]|^)REM(?=\s)/
        }
      ] });
      const DIRECTIVES = {
        className: "meta",
        begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
        end: /$/,
        keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
        contains: [COMMENT]
      };
      return {
        name: "Visual Basic .NET",
        aliases: ["vb"],
        case_insensitive: true,
        classNameAliases: { label: "symbol" },
        keywords: {
          keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
          built_in: "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
          type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
          literal: "true false nothing"
        },
        illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
        contains: [
          CHARACTER,
          STRING,
          DATE,
          NUMBER,
          LABEL,
          DOC_COMMENT,
          COMMENT,
          DIRECTIVES
        ]
      };
    }
    module.exports = vbnet;
  }
}["highlight.js/lib/languages/vbnet.js"]);


// highlight.js/lib/languages/swift.js
export var $8feb0e55 = $$m({
  "highlight.js/lib/languages/swift.js": (module, exports) => {
    function source(re) {
      if (!re)
        return null;
      if (typeof re === "string")
        return re;
      return re.source;
    }
    function lookahead(re) {
      return concat("(?=", re, ")");
    }
    function concat(...args) {
      const joined = args.map((x) => source(x)).join("");
      return joined;
    }
    function stripOptionsFromArgs(args) {
      const opts = args[args.length - 1];
      if (typeof opts === "object" && opts.constructor === Object) {
        args.splice(args.length - 1, 1);
        return opts;
      } else
        return {};
    }
    function either(...args) {
      const opts = stripOptionsFromArgs(args);
      const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
      return joined;
    }
    const keywordWrapper = (keyword) => concat(/\b/, keyword, /\w$/.test(keyword) ? /\b/ : /\B/);
    const dotKeywords = [
      "Protocol",
      "Type"
    ].map(keywordWrapper);
    const optionalDotKeywords = [
      "init",
      "self"
    ].map(keywordWrapper);
    const keywordTypes = [
      "Any",
      "Self"
    ];
    const keywords = [
      "actor",
      "any",
      "associatedtype",
      "async",
      "await",
      /as\?/,
      /as!/,
      "as",
      "break",
      "case",
      "catch",
      "class",
      "continue",
      "convenience",
      "default",
      "defer",
      "deinit",
      "didSet",
      "distributed",
      "do",
      "dynamic",
      "else",
      "enum",
      "extension",
      "fallthrough",
      /fileprivate\(set\)/,
      "fileprivate",
      "final",
      "for",
      "func",
      "get",
      "guard",
      "if",
      "import",
      "indirect",
      "infix",
      /init\?/,
      /init!/,
      "inout",
      /internal\(set\)/,
      "internal",
      "in",
      "is",
      "isolated",
      "nonisolated",
      "lazy",
      "let",
      "mutating",
      "nonmutating",
      /open\(set\)/,
      "open",
      "operator",
      "optional",
      "override",
      "postfix",
      "precedencegroup",
      "prefix",
      /private\(set\)/,
      "private",
      "protocol",
      /public\(set\)/,
      "public",
      "repeat",
      "required",
      "rethrows",
      "return",
      "set",
      "some",
      "static",
      "struct",
      "subscript",
      "super",
      "switch",
      "throws",
      "throw",
      /try\?/,
      /try!/,
      "try",
      "typealias",
      /unowned\(safe\)/,
      /unowned\(unsafe\)/,
      "unowned",
      "var",
      "weak",
      "where",
      "while",
      "willSet"
    ];
    const literals = [
      "false",
      "nil",
      "true"
    ];
    const precedencegroupKeywords = [
      "assignment",
      "associativity",
      "higherThan",
      "left",
      "lowerThan",
      "none",
      "right"
    ];
    const numberSignKeywords = [
      "#colorLiteral",
      "#column",
      "#dsohandle",
      "#else",
      "#elseif",
      "#endif",
      "#error",
      "#file",
      "#fileID",
      "#fileLiteral",
      "#filePath",
      "#function",
      "#if",
      "#imageLiteral",
      "#keyPath",
      "#line",
      "#selector",
      "#sourceLocation",
      "#warn_unqualified_access",
      "#warning"
    ];
    const builtIns = [
      "abs",
      "all",
      "any",
      "assert",
      "assertionFailure",
      "debugPrint",
      "dump",
      "fatalError",
      "getVaList",
      "isKnownUniquelyReferenced",
      "max",
      "min",
      "numericCast",
      "pointwiseMax",
      "pointwiseMin",
      "precondition",
      "preconditionFailure",
      "print",
      "readLine",
      "repeatElement",
      "sequence",
      "stride",
      "swap",
      "swift_unboxFromSwiftValueWithType",
      "transcode",
      "type",
      "unsafeBitCast",
      "unsafeDowncast",
      "withExtendedLifetime",
      "withUnsafeMutablePointer",
      "withUnsafePointer",
      "withVaList",
      "withoutActuallyEscaping",
      "zip"
    ];
    const operatorHead = either(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/);
    const operatorCharacter = either(operatorHead, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/);
    const operator = concat(operatorHead, operatorCharacter, "*");
    const identifierHead = either(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/);
    const identifierCharacter = either(identifierHead, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/);
    const identifier = concat(identifierHead, identifierCharacter, "*");
    const typeIdentifier = concat(/[A-Z]/, identifierCharacter, "*");
    const keywordAttributes = [
      "autoclosure",
      concat(/convention\(/, either("swift", "block", "c"), /\)/),
      "discardableResult",
      "dynamicCallable",
      "dynamicMemberLookup",
      "escaping",
      "frozen",
      "GKInspectable",
      "IBAction",
      "IBDesignable",
      "IBInspectable",
      "IBOutlet",
      "IBSegueAction",
      "inlinable",
      "main",
      "nonobjc",
      "NSApplicationMain",
      "NSCopying",
      "NSManaged",
      concat(/objc\(/, identifier, /\)/),
      "objc",
      "objcMembers",
      "propertyWrapper",
      "requires_stored_property_inits",
      "resultBuilder",
      "testable",
      "UIApplicationMain",
      "unknown",
      "usableFromInline"
    ];
    const availabilityKeywords = [
      "iOS",
      "iOSApplicationExtension",
      "macOS",
      "macOSApplicationExtension",
      "macCatalyst",
      "macCatalystApplicationExtension",
      "watchOS",
      "watchOSApplicationExtension",
      "tvOS",
      "tvOSApplicationExtension",
      "swift"
    ];
    function swift(hljs) {
      const WHITESPACE = {
        match: /\s+/,
        relevance: 0
      };
      const BLOCK_COMMENT = hljs.COMMENT("/\\*", "\\*/", { contains: ["self"] });
      const COMMENTS = [
        hljs.C_LINE_COMMENT_MODE,
        BLOCK_COMMENT
      ];
      const DOT_KEYWORD = {
        match: [
          /\./,
          either(...dotKeywords, ...optionalDotKeywords)
        ],
        className: { 2: "keyword" }
      };
      const KEYWORD_GUARD = {
        match: concat(/\./, either(...keywords)),
        relevance: 0
      };
      const PLAIN_KEYWORDS = keywords.filter((kw) => typeof kw === "string").concat(["_|0"]);
      const REGEX_KEYWORDS = keywords.filter((kw) => typeof kw !== "string").concat(keywordTypes).map(keywordWrapper);
      const KEYWORD = { variants: [
        {
          className: "keyword",
          match: either(...REGEX_KEYWORDS, ...optionalDotKeywords)
        }
      ] };
      const KEYWORDS = {
        $pattern: either(/\b\w+/, /#\w+/),
        keyword: PLAIN_KEYWORDS.concat(numberSignKeywords),
        literal: literals
      };
      const KEYWORD_MODES = [
        DOT_KEYWORD,
        KEYWORD_GUARD,
        KEYWORD
      ];
      const BUILT_IN_GUARD = {
        match: concat(/\./, either(...builtIns)),
        relevance: 0
      };
      const BUILT_IN = {
        className: "built_in",
        match: concat(/\b/, either(...builtIns), /(?=\()/)
      };
      const BUILT_INS = [
        BUILT_IN_GUARD,
        BUILT_IN
      ];
      const OPERATOR_GUARD = {
        match: /->/,
        relevance: 0
      };
      const OPERATOR = {
        className: "operator",
        relevance: 0,
        variants: [
          { match: operator },
          {
            match: `\\.(\\.|${operatorCharacter})+`
          }
        ]
      };
      const OPERATORS = [
        OPERATOR_GUARD,
        OPERATOR
      ];
      const decimalDigits = "([0-9]_*)+";
      const hexDigits = "([0-9a-fA-F]_*)+";
      const NUMBER = {
        className: "number",
        relevance: 0,
        variants: [
          { match: `\\b(${decimalDigits})(\\.(${decimalDigits}))?` + `([eE][+-]?(${decimalDigits}))?\\b` },
          { match: `\\b0x(${hexDigits})(\\.(${hexDigits}))?` + `([pP][+-]?(${decimalDigits}))?\\b` },
          { match: /\b0o([0-7]_*)+\b/ },
          { match: /\b0b([01]_*)+\b/ }
        ]
      };
      const ESCAPED_CHARACTER = (rawDelimiter = "") => ({
        className: "subst",
        variants: [
          { match: concat(/\\/, rawDelimiter, /[0\\tnr"']/) },
          { match: concat(/\\/, rawDelimiter, /u\{[0-9a-fA-F]{1,8}\}/) }
        ]
      });
      const ESCAPED_NEWLINE = (rawDelimiter = "") => ({
        className: "subst",
        match: concat(/\\/, rawDelimiter, /[\t ]*(?:[\r\n]|\r\n)/)
      });
      const INTERPOLATION = (rawDelimiter = "") => ({
        className: "subst",
        label: "interpol",
        begin: concat(/\\/, rawDelimiter, /\(/),
        end: /\)/
      });
      const MULTILINE_STRING = (rawDelimiter = "") => ({
        begin: concat(rawDelimiter, /"""/),
        end: concat(/"""/, rawDelimiter),
        contains: [
          ESCAPED_CHARACTER(rawDelimiter),
          ESCAPED_NEWLINE(rawDelimiter),
          INTERPOLATION(rawDelimiter)
        ]
      });
      const SINGLE_LINE_STRING = (rawDelimiter = "") => ({
        begin: concat(rawDelimiter, /"/),
        end: concat(/"/, rawDelimiter),
        contains: [
          ESCAPED_CHARACTER(rawDelimiter),
          INTERPOLATION(rawDelimiter)
        ]
      });
      const STRING = {
        className: "string",
        variants: [
          MULTILINE_STRING(),
          MULTILINE_STRING("#"),
          MULTILINE_STRING("##"),
          MULTILINE_STRING("###"),
          SINGLE_LINE_STRING(),
          SINGLE_LINE_STRING("#"),
          SINGLE_LINE_STRING("##"),
          SINGLE_LINE_STRING("###")
        ]
      };
      const QUOTED_IDENTIFIER = { match: concat(/`/, identifier, /`/) };
      const IMPLICIT_PARAMETER = {
        className: "variable",
        match: /\$\d+/
      };
      const PROPERTY_WRAPPER_PROJECTION = {
        className: "variable",
        match: `\\\$${identifierCharacter}+`
      };
      const IDENTIFIERS = [
        QUOTED_IDENTIFIER,
        IMPLICIT_PARAMETER,
        PROPERTY_WRAPPER_PROJECTION
      ];
      const AVAILABLE_ATTRIBUTE = {
        match: /(@|#(un)?)available/,
        className: "keyword",
        starts: { contains: [
          {
            begin: /\(/,
            end: /\)/,
            keywords: availabilityKeywords,
            contains: [
              ...OPERATORS,
              NUMBER,
              STRING
            ]
          }
        ] }
      };
      const KEYWORD_ATTRIBUTE = {
        className: "keyword",
        match: concat(/@/, either(...keywordAttributes))
      };
      const USER_DEFINED_ATTRIBUTE = {
        className: "meta",
        match: concat(/@/, identifier)
      };
      const ATTRIBUTES = [
        AVAILABLE_ATTRIBUTE,
        KEYWORD_ATTRIBUTE,
        USER_DEFINED_ATTRIBUTE
      ];
      const TYPE = {
        match: lookahead(/\b[A-Z]/),
        relevance: 0,
        contains: [
          {
            className: "type",
            match: concat(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, identifierCharacter, "+")
          },
          {
            className: "type",
            match: typeIdentifier,
            relevance: 0
          },
          {
            match: /[?!]+/,
            relevance: 0
          },
          {
            match: /\.\.\./,
            relevance: 0
          },
          {
            match: concat(/\s+&\s+/, lookahead(typeIdentifier)),
            relevance: 0
          }
        ]
      };
      const GENERIC_ARGUMENTS = {
        begin: /</,
        end: />/,
        keywords: KEYWORDS,
        contains: [
          ...COMMENTS,
          ...KEYWORD_MODES,
          ...ATTRIBUTES,
          OPERATOR_GUARD,
          TYPE
        ]
      };
      TYPE.contains.push(GENERIC_ARGUMENTS);
      const TUPLE_ELEMENT_NAME = {
        match: concat(identifier, /\s*:/),
        keywords: "_|0",
        relevance: 0
      };
      const TUPLE = {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        keywords: KEYWORDS,
        contains: [
          "self",
          TUPLE_ELEMENT_NAME,
          ...COMMENTS,
          ...KEYWORD_MODES,
          ...BUILT_INS,
          ...OPERATORS,
          NUMBER,
          STRING,
          ...IDENTIFIERS,
          ...ATTRIBUTES,
          TYPE
        ]
      };
      const GENERIC_PARAMETERS = {
        begin: /</,
        end: />/,
        contains: [
          ...COMMENTS,
          TYPE
        ]
      };
      const FUNCTION_PARAMETER_NAME = {
        begin: either(lookahead(concat(identifier, /\s*:/)), lookahead(concat(identifier, /\s+/, identifier, /\s*:/))),
        end: /:/,
        relevance: 0,
        contains: [
          {
            className: "keyword",
            match: /\b_\b/
          },
          {
            className: "params",
            match: identifier
          }
        ]
      };
      const FUNCTION_PARAMETERS = {
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        contains: [
          FUNCTION_PARAMETER_NAME,
          ...COMMENTS,
          ...KEYWORD_MODES,
          ...OPERATORS,
          NUMBER,
          STRING,
          ...ATTRIBUTES,
          TYPE,
          TUPLE
        ],
        endsParent: true,
        illegal: /["']/
      };
      const FUNCTION = {
        match: [
          /func/,
          /\s+/,
          either(QUOTED_IDENTIFIER.match, identifier, operator)
        ],
        className: {
          1: "keyword",
          3: "title.function"
        },
        contains: [
          GENERIC_PARAMETERS,
          FUNCTION_PARAMETERS,
          WHITESPACE
        ],
        illegal: [
          /\[/,
          /%/
        ]
      };
      const INIT_SUBSCRIPT = {
        match: [
          /\b(?:subscript|init[?!]?)/,
          /\s*(?=[<(])/
        ],
        className: { 1: "keyword" },
        contains: [
          GENERIC_PARAMETERS,
          FUNCTION_PARAMETERS,
          WHITESPACE
        ],
        illegal: /\[|%/
      };
      const OPERATOR_DECLARATION = {
        match: [
          /operator/,
          /\s+/,
          operator
        ],
        className: {
          1: "keyword",
          3: "title"
        }
      };
      const PRECEDENCEGROUP = {
        begin: [
          /precedencegroup/,
          /\s+/,
          typeIdentifier
        ],
        className: {
          1: "keyword",
          3: "title"
        },
        contains: [TYPE],
        keywords: [
          ...precedencegroupKeywords,
          ...literals
        ],
        end: /}/
      };
      for (const variant of STRING.variants) {
        const interpolation = variant.contains.find((mode) => mode.label === "interpol");
        interpolation.keywords = KEYWORDS;
        const submodes = [
          ...KEYWORD_MODES,
          ...BUILT_INS,
          ...OPERATORS,
          NUMBER,
          STRING,
          ...IDENTIFIERS
        ];
        interpolation.contains = [
          ...submodes,
          {
            begin: /\(/,
            end: /\)/,
            contains: [
              "self",
              ...submodes
            ]
          }
        ];
      }
      return {
        name: "Swift",
        keywords: KEYWORDS,
        contains: [
          ...COMMENTS,
          FUNCTION,
          INIT_SUBSCRIPT,
          {
            beginKeywords: "struct protocol class extension enum actor",
            end: "\\{",
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: [
              hljs.inherit(hljs.TITLE_MODE, {
                className: "title.class",
                begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
              }),
              ...KEYWORD_MODES
            ]
          },
          OPERATOR_DECLARATION,
          PRECEDENCEGROUP,
          {
            beginKeywords: "import",
            end: /$/,
            contains: [...COMMENTS],
            relevance: 0
          },
          ...KEYWORD_MODES,
          ...BUILT_INS,
          ...OPERATORS,
          NUMBER,
          STRING,
          ...IDENTIFIERS,
          ...ATTRIBUTES,
          TYPE,
          TUPLE
        ]
      };
    }
    module.exports = swift;
  }
}["highlight.js/lib/languages/swift.js"]);


// highlight.js/lib/languages/yaml.js
export var $d9715d3c = $$m({
  "highlight.js/lib/languages/yaml.js": (module, exports) => {
    function yaml(hljs) {
      const LITERALS = "true false yes no null";
      const URI_CHARACTERS = "[\\w#;/?:@&=+$,.~*\'()[\\]]+";
      const KEY = {
        className: "attr",
        variants: [
          { begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)" },
          {
            begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)'
          },
          {
            begin: "\'\\w[\\w :\\/.-]*\':(?=[ \t]|$)"
          }
        ]
      };
      const TEMPLATE_VARIABLES = {
        className: "template-variable",
        variants: [
          {
            begin: /\{\{/,
            end: /\}\}/
          },
          {
            begin: /%\{/,
            end: /\}/
          }
        ]
      };
      const STRING = {
        className: "string",
        relevance: 0,
        variants: [
          {
            begin: /'/,
            end: /'/
          },
          {
            begin: /"/,
            end: /"/
          },
          { begin: /\S+/ }
        ],
        contains: [
          hljs.BACKSLASH_ESCAPE,
          TEMPLATE_VARIABLES
        ]
      };
      const CONTAINER_STRING = hljs.inherit(STRING, { variants: [
        {
          begin: /'/,
          end: /'/
        },
        {
          begin: /"/,
          end: /"/
        },
        { begin: /[^\s,{}[\]]+/ }
      ] });
      const DATE_RE = "[0-9]{4}(-[0-9][0-9]){0,2}";
      const TIME_RE = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?";
      const FRACTION_RE = "(\\.[0-9]*)?";
      const ZONE_RE = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?";
      const TIMESTAMP = {
        className: "number",
        begin: "\\b" + DATE_RE + TIME_RE + FRACTION_RE + ZONE_RE + "\\b"
      };
      const VALUE_CONTAINER = {
        end: ",",
        endsWithParent: true,
        excludeEnd: true,
        keywords: LITERALS,
        relevance: 0
      };
      const OBJECT = {
        begin: /\{/,
        end: /\}/,
        contains: [VALUE_CONTAINER],
        illegal: "\\n",
        relevance: 0
      };
      const ARRAY = {
        begin: "\\[",
        end: "\\]",
        contains: [VALUE_CONTAINER],
        illegal: "\\n",
        relevance: 0
      };
      const MODES = [
        KEY,
        {
          className: "meta",
          begin: "^---\\s*$",
          relevance: 10
        },
        {
          className: "string",
          begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
        },
        {
          begin: "<%[%=-]?",
          end: "[%-]?%>",
          subLanguage: "ruby",
          excludeBegin: true,
          excludeEnd: true,
          relevance: 0
        },
        {
          className: "type",
          begin: "!\\w+!" + URI_CHARACTERS
        },
        {
          className: "type",
          begin: "!<" + URI_CHARACTERS + ">"
        },
        {
          className: "type",
          begin: "!" + URI_CHARACTERS
        },
        {
          className: "type",
          begin: "!!" + URI_CHARACTERS
        },
        {
          className: "meta",
          begin: "&" + hljs.UNDERSCORE_IDENT_RE + "$"
        },
        {
          className: "meta",
          begin: "\\*" + hljs.UNDERSCORE_IDENT_RE + "$"
        },
        {
          className: "bullet",
          begin: "-(?=[ ]|$)",
          relevance: 0
        },
        hljs.HASH_COMMENT_MODE,
        {
          beginKeywords: LITERALS,
          keywords: { literal: LITERALS }
        },
        TIMESTAMP,
        {
          className: "number",
          begin: hljs.C_NUMBER_RE + "\\b",
          relevance: 0
        },
        OBJECT,
        ARRAY,
        STRING
      ];
      const VALUE_MODES = [...MODES];
      VALUE_MODES.pop();
      VALUE_MODES.push(CONTAINER_STRING);
      VALUE_CONTAINER.contains = VALUE_MODES;
      return {
        name: "YAML",
        case_insensitive: true,
        aliases: ["yml"],
        contains: MODES
      };
    }
    module.exports = yaml;
  }
}["highlight.js/lib/languages/yaml.js"]);



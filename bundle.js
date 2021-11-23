!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return C})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return O})),n.d(t,"j",(function(){return _})),n.d(t,"k",(function(){return p})),n.d(t,"l",(function(){return R})),n.d(t,"m",(function(){return L})),n.d(t,"n",(function(){return q})),n.d(t,"o",(function(){return S})),n.d(t,"p",(function(){return P})),n.d(t,"q",(function(){return g})),n.d(t,"r",(function(){return v})),n.d(t,"s",(function(){return y})),n.d(t,"t",(function(){return k})),n.d(t,"u",(function(){return T})),n.d(t,"v",(function(){return N})),n.d(t,"w",(function(){return A})),n.d(t,"x",(function(){return x})),n.d(t,"y",(function(){return F})),n.d(t,"z",(function(){return M})),n.d(t,"A",(function(){return E}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=!1,r=!1,s="${JSCORE_VERSION}",o=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+s+") INTERNAL ASSERT FAILED: "+e)},c=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(u=64)),i.push(n[l],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},h=function(e){const t=c(e);return l.encodeByteArray(t,!0)},u=function(e){return h(e).replace(/\./g,"")},d=function(e){try{return l.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(e){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(const i in n)n.hasOwnProperty(i)&&"__proto__"!==i&&(t[i]=e(t[i],n[i]));return t}(void 0,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function g(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function y(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function v(){return!0===i||!0===r}class C extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(w,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new C(i,o,n)}}const w=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){return JSON.parse(e)}function E(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=T(d(s[0])||""),n=T(d(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},k=function(e){const t=I(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},S=function(e){const t=I(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function P(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function R(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(D(n)&&D(s)){if(!R(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function D(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):e<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const t=(s<<5|s>>>27)+i+l+r+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function L(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const M=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,o(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},F=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e){return e&&e._delegate?e._delegate:e}}).call(this,n(10))},function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return y})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return _})),n.d(t,"k",(function(){return g})),n.d(t,"l",(function(){return k})),n.d(t,"m",(function(){return E})),n.d(t,"n",(function(){return I})),n.d(t,"o",(function(){return T})),n.d(t,"p",(function(){return O})),n.d(t,"q",(function(){return S})),n.d(t,"r",(function(){return x}));var i=n(2),r=n(3),s=n(0);n.d(t,"a",(function(){return s.c}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const a="@firebase/app",c=new r.b("@firebase/app"),l="[DEFAULT]",h={[a]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},u=new Map,d=new Map;function p(e,t){try{e.container.addComponent(t)}catch(n){c.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function f(e,t){e.container.addOrOverwriteComponent(t)}function _(e){const t=e.name;if(d.has(t))return c.debug(`There were multiple attempts to register component ${t}.`),!1;d.set(t,e);for(const t of u.values())p(t,e);return!0}function m(e,t){return e.container.getProvider(t)}function g(e,t,n=l){m(e,t).clearInstance(n)}function y(){d.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},C=new s.b("app","Firebase",v);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw C.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w="9.5.0";function T(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:l,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw C.create("bad-app-name",{appName:String(r)});const o=u.get(r);if(o){if(Object(s.l)(e,o.options)&&Object(s.l)(n,o.config))return o;throw C.create("duplicate-app",{appName:r})}const a=new i.b(r);for(const e of d.values())a.addComponent(e);const c=new b(e,n,a);return u.set(r,c),c}function E(e=l){const t=u.get(e);if(!t)throw C.create("no-app",{appName:e});return t}function I(){return Array.from(u.values())}async function k(e){const t=e.name;u.has(t)&&(u.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function S(e,t,n){var r;let s=null!==(r=h[e])&&void 0!==r?r:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void c.warn(e.join(" "))}_(new i.a(s+"-version",()=>({library:s,version:t}),"VERSION"))}function O(e,t){if(null!==e&&"function"!=typeof e)throw C.create("invalid-log-argument");Object(r.d)(e,t)}function x(e){Object(r.c)(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;P="",_(new i.a("platform-logger",e=>new o(e),"PRIVATE")),S(a,"0.7.9",P),S(a,"0.7.9","esm2017"),S("fire-js","")},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var i=n(0);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return u}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function h(e){i.forEach(t=>{t.setLogLevel(e)})}function u(e,t){for(const n of i){let i=null;t&&t.level&&(i=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}},function(e,t){e.exports.getTooltipInfo=function(e,t,n,i,r){var s={};e.forEach((function(e){t.forEach((function(t){s[t.name]||(s[t.name]=[]),t.name===e.name&&s[t.name].push(e)}))}));var o={};for(var a in s){var c=s[a];if(c.length){var l=i+(r-i-s[a].reduce((function(e,t){return e+t.yPosition}),0)/c.length),h=Math.round(l/n);o[a]={name:a,yPosition:h,color:c[0].color}}}return o},e.exports.hexToRgb=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},e.exports.formatDate=function(e){var t=e.getDate();return{short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]+" "+t,ms:e}},e.exports.createTemplate=function(e,t){function n(e,t,n){var i=document.createElement(e);for(var r in t)i.setAttribute(r,t[r]);return n&&(i.textContent=n),i}function i(e,t){return e.forEach((function(e){t.appendChild(e)})),t}var r=n("div",{class:"wrap"}),s=n("div",{class:"content"}),o=n("div",{class:"followers"},"followers"),a=n("div",{class:"viewChart"}),c=n("div",{class:"lineChart"}),l=n("canvas",{class:"view",id:e}),h=n("canvas",{class:"timeLine",id:t}),u=n("div",{class:"slider"}),d=n("div",{class:"date"},"Sat, Feb 24"),p=n("div",{class:"columns"}),f=n("div",{class:"tooltip"}),_=n("div",{class:"checkboxes"}),m=n("div",{class:"switchLabel"}),g=n("label"),y=n("span"),v=n("input",{class:"switcher",type:"checkbox"}),C=i([d,p],f),b=i([l,C],a),w=i([h,u],c),T=i([o,b,w,_],s),E=i([y,v],g),I=i([E],m),k=i([T,I],r);return document.querySelector(".loadWrap").style.display="none",{wrap:r,content:s,viewChart:a,lineChart:c,canvasView:l,canvasLong:h,sliderElem:u,dateElem:d,columnsElem:p,tooltipElem:f,checkboxes:_,switchLabel:m,label:g,labelText:y,switcher:v,wrapBlock:k}},e.exports.createCheckbox=function(e,t,n,i,r,s){var o=document.createElement("input"),a=document.createElement("div"),c=document.createElement("label"),l=document.createTextNode(e);return o.type="checkbox",o.className="checkbox",o.checked=!0,o.style.display="none",o.addEventListener("change",i.bind(window,t-1,s)),a.className="custom-checkbox",a.style.backgroundColor=s,c.appendChild(o),c.appendChild(a),c.appendChild(l),r.appendChild(c),n.push({isVisible:!0,idx:t-1}),a},e.exports.formatNumber=function(e){var t=Math.round(e).toString().length;return t>3&&t<7?(e/1e3).toFixed(1)+"K":t>6?(e/1e6).toFixed(1)+"M":e}},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return br})),n.d(t,"b",(function(){return _s})),n.d(t,"c",(function(){return _r})),n.d(t,"d",(function(){return Br})),n.d(t,"e",(function(){return Es})),n.d(t,"f",(function(){return mr})),n.d(t,"g",(function(){return pt})),n.d(t,"h",(function(){return Cr})),n.d(t,"i",(function(){return Ss})),n.d(t,"j",(function(){return ks})),n.d(t,"k",(function(){return fs})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return Ri})),n.d(t,"n",(function(){return Di})),n.d(t,"o",(function(){return Er})),n.d(t,"p",(function(){return gs})),n.d(t,"q",(function(){return Cs})),n.d(t,"r",(function(){return zr})),n.d(t,"s",(function(){return Yr})),n.d(t,"t",(function(){return hs})),n.d(t,"u",(function(){return Rr})),n.d(t,"v",(function(){return ms})),n.d(t,"w",(function(){return ys})),n.d(t,"x",(function(){return vs})),n.d(t,"y",(function(){return Ts})),n.d(t,"z",(function(){return Jr})),n.d(t,"A",(function(){return es})),n.d(t,"B",(function(){return Ur})),n.d(t,"C",(function(){return Mr})),n.d(t,"D",(function(){return Fr})),n.d(t,"E",(function(){return qr})),n.d(t,"F",(function(){return Wr})),n.d(t,"G",(function(){return Ir})),n.d(t,"H",(function(){return Lr})),n.d(t,"I",(function(){return ns})),n.d(t,"J",(function(){return rs})),n.d(t,"K",(function(){return os})),n.d(t,"L",(function(){return cs})),n.d(t,"M",(function(){return kr})),n.d(t,"N",(function(){return us})),n.d(t,"O",(function(){return wr})),n.d(t,"P",(function(){return Tr})),n.d(t,"Q",(function(){return Sr})),n.d(t,"R",(function(){return Is})),n.d(t,"S",(function(){return ws})),n.d(t,"T",(function(){return Or})),n.d(t,"U",(function(){return xr})),n.d(t,"V",(function(){return Pr})),n.d(t,"W",(function(){return Gr})),n.d(t,"X",(function(){return Kr})),n.d(t,"Y",(function(){return Nr}));var i=n(1),r=n(2),s=n(0),o=n(3);const a="@firebase/database";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="";function l(e){c=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(s.A)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(s.u)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(s.i)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(e){}return new u},p=d("localStorage"),f=d("sessionStorage"),_=new o.b("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),g=function(e){const t=Object(s.z)(e),n=new s.d;n.update(t);const i=n.digest();return s.g.encodeByteArray(i)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=y.apply(null,i):t+="object"==typeof i?Object(s.A)(i):i,t+=" "}return t};let v=null,C=!0;const b=function(e,t){Object(s.e)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(_.logLevel=o.a.VERBOSE,v=_.log.bind(_),t&&f.set("logging_enabled",!0)):"function"==typeof e?v=e:(v=null,f.remove("logging_enabled"))},w=function(...e){if(!0===C&&(C=!1,null===v&&!0===f.get("logging_enabled")&&b(!0)),v){const t=y.apply(null,e);v(t)}},T=function(e){return function(...t){w(e,...t)}},E=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);_.error(t)},I=function(...e){const t="FIREBASE FATAL ERROR: "+y(...e);throw _.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+y(...e);_.warn(t)},S=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},O="[MIN_NAME]",x="[MAX_NAME]",P=function(e,t){if(e===t)return 0;if(e===O||t===x)return-1;if(t===O||e===x)return 1;{const n=F(e),i=F(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},N=function(e,t){return e===t?0:e<t?-1:1},R=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(s.A)(t))},D=function(e){if("object"!=typeof e||null===e)return Object(s.A)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Object(s.A)(t[i]),n+=":",n+=D(e[t[i]]);return n+="}",n},A=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function j(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const L=function(e){Object(s.e)(!S(e),"Invalid JSON number");let t,n,i,r,o;0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023),n=r+1023,i=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(n=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(n%2?1:0),n=Math.floor(n/2);a.push(t?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const M=new RegExp("^-?(0*)\\d{1,10}$"),F=function(e){if(M.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},q=function(e){try{e()}catch(e){setTimeout(()=>{const t=e.stack||"";throw k("Exception was thrown by user callback.",t),e},Math.floor(0))}},W=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(w("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class H{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}H.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function Y(e,t,n){let i;if(Object(s.e)("string"==typeof t,"typeof type must == string"),Object(s.e)("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return j(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(){this.counters_={}}incrementCounter(e,t=1){Object(s.i)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(s.k)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={},Q={};function G(e){const t=e.toString();return K[t]||(K[t]=new $),K[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&q(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(e),this.stats_=G(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Y(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new X(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),function(e){if(Object(s.r)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}}(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Z((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&z.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){J.forceAllow_=!0}static forceDisallow(){J.forceDisallow_=!0}static isAvailable(){return!Object(s.r)()&&(!!J.forceAllow_||!(J.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(s.A)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(s.h)(t),i=A(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(s.r)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(s.A)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Z{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(s.r)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Z.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){w("frame writing exception"),e.stack&&w(e.stack),w(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||w("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(i),n()})}addTag(e,t){Object(s.r)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{w("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ee=null;"undefined"!=typeof MozWebSocket?ee=MozWebSocket:"undefined"!=typeof WebSocket&&(ee=WebSocket);class te{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=G(t),this.connURL=te.connectionURL_(t,s,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const r={v:"5"};return!Object(s.r)()&&"undefined"!=typeof location&&location.hostname&&z.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),Y(e,"websocket",r)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(s.r)()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/5/${c}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers.Authorization="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i=e.env,r=0===this.connURL.indexOf("wss://")?i.HTTPS_PROXY||i.https_proxy:i.HTTP_PROXY||i.http_proxy;r&&(n.proxy={origin:r}),this.mySock=new ee(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new ee(this.connURL,[],e)}}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){te.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ee&&!te.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(s.u)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(s.e)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(s.A)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=A(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}te.responsesRequiredToBeHealthy=2,te.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[J,te]}initTransports_(e){const t=te&&te.isAvailable();let n=t&&!te.previouslyFailed();if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[te];else{const e=this.transports_=[];for(const t of ne.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new ne(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=W(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=R("t",e),n=R("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=R("t",e),n=R("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=R("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?E("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):E("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),W(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):W(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(s.e)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Object(s.e)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends se{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Object(s.q)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new oe}getInitialEvent(e){return Object(s.e)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ce(){return new ae("")}function le(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function he(e){return e.pieces_.length-e.pieceNum_}function ue(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ae(e.pieces_,t)}function de(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function pe(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function fe(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ae(t,0)}function _e(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ae)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ae(n,0)}function me(e){return e.pieceNum_>=e.pieces_.length}function ge(e,t){const n=le(e),i=le(t);if(null===n)return t;if(n===i)return ge(ue(e),ue(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ye(e,t){const n=pe(e,0),i=pe(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=P(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function ve(e,t){if(he(e)!==he(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ce(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(he(e)>he(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class be{constructor(e,t){this.errorPrefix_=t,this.parts_=pe(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Object(s.y)(this.parts_[e]);we(this)}}function we(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Te(e))}function Te(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends se{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new Ee}getInitialEvent(e){return Object(s.e)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends re{constructor(e,t,n,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ie.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(s.r)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ee.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&oe.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Object(s.A)(r)),Object(s.e)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s.a,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},3e3),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Object(s.e)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(s.e)(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{const s=r.d,o=r.s;Ie.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Object(s.i)(e,"w")){const n=Object(s.x)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Object(s.o)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(s.t)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Object(s.e)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(s.A)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):E("Unrecognized action received from server: "+Object(s.A)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(s.e)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ie.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){Object(s.e)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?w("getToken() completed but was canceled"):(w("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new ie(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&k(e),c())}}}interrupt(e){w("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){w("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(s.p)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>D(e)).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ae(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){w("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){w("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(s.r)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,Object(s.q)()?e["framework.cordova"]=1:Object(s.s)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oe.getInstance().currentlyOnline();return Object(s.p)(this.interruptReasons_)&&e}}Ie.nextPersistentConnectionId_=0,Ie.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ke(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new ke(O,e),i=new ke(O,t);return 0!==this.compare(n,i)}minPost(){return ke.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oe;class xe extends Se{static get __EMPTY_NODE(){return Oe}static set __EMPTY_NODE(e){Oe=e}compare(e,t){return P(e.name,t.name)}isDefinedOn(e){throw Object(s.f)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ke.MIN}maxPost(){return new ke(x,Oe)}makePost(e,t){return Object(s.e)("string"==typeof e,"KeyIndex indexValue must always be a string."),new ke(e,Oe)}toString(){return".key"}}const Pe=new xe;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Re{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Re.RED,this.left=null!=i?i:De.EMPTY_NODE,this.right=null!=r?r:De.EMPTY_NODE}copy(e,t,n,i,r){return new Re(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return De.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Re.RED=!0,Re.BLACK=!1;class De{constructor(e,t=De.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new De(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ne(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ne(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ne(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ne(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ae(e,t){return P(e.name,t.name)}function je(e,t){return P(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le;De.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Re(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Me=function(e){return"number"==typeof e?"number:"+L(e):"string:"+e},Fe=function(e){if(e.isLeafNode()){const t=e.val();Object(s.e)("string"==typeof t||"number"==typeof t||"object"==typeof t&&Object(s.i)(t,".sv"),"Priority must be a string or number.")}else Object(s.e)(e===Le||e.isEmpty(),"priority of unexpected type.");Object(s.e)(e===Le||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let qe,We,Ue;class Be{constructor(e,t=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(s.e)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Fe(this.priorityNode_)}static set __childrenNodeConstructor(e){qe=e}static get __childrenNodeConstructor(){return qe}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:".priority"===le(e)?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=le(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(s.e)(".priority"!==n||1===he(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Me(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?L(this.value_):this.value_,this.lazyHash_=g(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(Object(s.e)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(t),r=Be.VALUE_TYPE_ORDER.indexOf(n);return Object(s.e)(i>=0,"Unknown leaf type: "+t),Object(s.e)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];const He=new class extends Se{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?P(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ke.MIN}maxPost(){return new ke(x,new Be("[PRIORITY-POST]",Ue))}makePost(e,t){const n=We(e);return new ke(t,new Be("[PRIORITY-POST]",n))}toString(){return".priority"}},ze=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/ze,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ye=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Re(a,o.node,Re.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),h=r(c+1,i);return o=e[c],a=n?n(o):o,new Re(a,o.node,Re.BLACK,l,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),h=e[s],u=n?n(h):h;c(new Re(u,h.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Re.BLACK):(a(i,Re.BLACK),a(i,Re.RED))}return s}(new Ve(e.length));return new De(i||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e;const Ke={};class Qe{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(s.e)(Ke&&He,"ChildrenNode.ts has not been loaded"),$e=$e||new Qe({".priority":Ke},{".priority":He}),$e}get(e){const t=Object(s.x)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof De?t:null}hasIndex(e){return Object(s.i)(this.indexSet_,e.toString())}addIndex(e,t){Object(s.e)(e!==Pe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(ke.Wrap);let o,a=r.getNext();for(;a;)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?Ye(n,e.getCompare()):Ke;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=o,new Qe(h,l)}addToIndexes(e,t){const n=Object(s.v)(this.indexes_,(n,i)=>{const r=Object(s.x)(this.indexSet_,i);if(Object(s.e)(r,"Missing index implementation for "+i),n===Ke){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(ke.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),Ye(n,r.getCompare())}return Ke}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new ke(e.name,i))),r.insert(e,e.node)}});return new Qe(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(s.v)(this.indexes_,n=>{if(n===Ke)return n;{const i=t.get(e.name);return i?n.remove(new ke(e.name,i)):n}});return new Qe(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ge;class Xe{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Fe(this.priorityNode_),this.children_.isEmpty()&&Object(s.e)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ge||(Ge=new Xe(new De(je),null,Qe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ge}updatePriority(e){return this.children_.isEmpty()?this:new Xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Ge:t}}getChild(e){const t=le(e);return null===t?this:this.getImmediateChild(t).getChild(ue(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(s.e)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new ke(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?Ge:this.priorityNode_;return new Xe(i,s,r)}}updateChild(e,t){const n=le(e);if(null===n)return t;{Object(s.e)(".priority"!==le(e)||1===he(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ue(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(He,(s,o)=>{t[s]=o.val(e),n++,r&&Xe.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Me(this.getPriority().val())+":"),this.forEachChild(He,(t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":g(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new ke(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ke(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ke(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,ke.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,ke.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Je?-1:0}withIndex(e){if(e===Pe||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Xe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Pe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(He),n=t.getIterator(He);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Pe?null:this.indexMap_.get(e.toString())}}Xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Je=new class extends Xe{constructor(){super(new De(je),Xe.EMPTY_NODE,Qe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Xe.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(ke,{MIN:{value:new ke(O,Xe.EMPTY_NODE)},MAX:{value:new ke(x,Je)}}),xe.__EMPTY_NODE=Xe.EMPTY_NODE,Be.__childrenNodeConstructor=Xe,Le=Je,function(e){Ue=e}(Je);function Ze(e,t=null){if(null===e)return Xe.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Object(s.e)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Be(e,Ze(t))}if(e instanceof Array){let n=Xe.EMPTY_NODE;return j(e,(t,i)=>{if(Object(s.i)(e,t)&&"."!==t.substring(0,1)){const e=Ze(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(Ze(t))}{const n=[];let i=!1;if(j(e,(e,t)=>{if("."!==e.substring(0,1)){const r=Ze(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new ke(e,r)))}}),0===n.length)return Xe.EMPTY_NODE;const r=Ye(n,Ae,e=>e.name,je);if(i){const e=Ye(n,He.getCompare());return new Xe(r,Ze(t),new Qe({".priority":e},{".priority":He}))}return new Xe(r,Ze(t),Qe.Default)}}!function(e){We=e}(Ze);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Se{constructor(e){super(),this.indexPath_=e,Object(s.e)(!me(e)&&".priority"!==le(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?P(e.name,t.name):r}makePost(e,t){const n=Ze(e),i=Xe.EMPTY_NODE.updateChild(this.indexPath_,n);return new ke(t,i)}maxPost(){const e=Xe.EMPTY_NODE.updateChild(this.indexPath_,Je);return new ke(x,e)}toString(){return pe(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=new class extends Se{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?P(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ke.MIN}maxPost(){return ke.MAX}makePost(e,t){const n=Ze(e);return new ke(t,n)}toString(){return".value"}},nt="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",it=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=nt.charAt(n%64),n=Math.floor(n/64);Object(s.e)(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=nt.charAt(t[r]);return Object(s.e)(20===a.length,"nextPushId: Length should be 20."),a}}(),rt=function(e){if("2147483647"===e)return"-";const t=F(e);if(null!=t)return""+(t+1);const n=new Array(e.length);for(let t=0;t<n.length;t++)n[t]=e.charAt(t);if(n.length<786)return n.push("-"),n.join("");let i=n.length-1;for(;i>=0&&"z"===n[i];)i--;if(-1===i)return x;const r=n[i],s=nt.charAt(nt.indexOf(r)+1);return n[i]=s,n.slice(0,i+1).join("")},st=function(e){if("-2147483648"===e)return O;const t=F(e);if(null!=t)return""+(t-1);const n=new Array(e.length);for(let t=0;t<n.length;t++)n[t]=e.charAt(t);return"-"===n[n.length-1]?1===n.length?"2147483647":(delete n[n.length-1],n.join("")):(n[n.length-1]=nt.charAt(nt.indexOf(n[n.length-1])-1),n.join("")+"z".repeat(786-n.length))};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ot(e){return{type:"value",snapshotNode:e}}function at(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ct(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function lt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(e){this.index_=e}updateChild(e,t,n,i,r,o){Object(s.e)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(ct(t,a)):Object(s.e)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(at(t,n)):o.trackChildChange(lt(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(He,(e,i)=>{t.hasChild(e)||n.trackChildChange(ct(e,i))}),t.isLeafNode()||t.forEachChild(He,(t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(lt(t,i,r))}else n.trackChildChange(at(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Xe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.indexedFilter_=new ht(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ut.getStartPost_(e),this.endPost_=ut.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new ke(t,n))||(n=Xe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Xe.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Xe.EMPTY_NODE);const r=this;return t.forEachChild(He,(e,t)=>{r.matches(new ke(e,t))||(i=i.updateImmediateChild(e,Xe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.rangedFilter_=new ut(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new ke(t,n))||(n=Xe.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Xe.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Xe.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(Xe.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);a&&o<this.limit_&&r(t,n)<=0?o++:i=i.updateImmediateChild(t.name,Xe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;Object(s.e)(a.numChildren()===this.limit_,"");const c=new ke(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=s&&(s.name===t||a.hasChild(s.name));)s=i.getChildAfterChild(this.index_,s,this.reverse_);const u=null==s?1:o(s,c);if(h&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(lt(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(ct(t,e));const n=a.updateImmediateChild(t,Xe.EMPTY_NODE);return null!=s&&this.rangedFilter_.matches(s)?(null!=r&&r.trackChildChange(at(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:h&&o(l,c)>=0?(null!=r&&(r.trackChildChange(ct(l.name,l.node)),r.trackChildChange(at(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,Xe.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=He}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(s.e)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(s.e)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:O}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(s.e)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(s.e)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:x}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(s.e)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===He}copy(){const e=new pt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ft(e,t,n){const i=e.copy();return i.startSet_=!0,void 0===t&&(t=null),i.indexStartValue_=t,null!=n?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function _t(e,t,n){const i=e.copy();return i.endSet_=!0,void 0===t&&(t=null),i.indexEndValue_=t,void 0!==n?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function mt(e,t){const n=e.copy();return n.index_=t,n}function gt(e){const t={};if(e.isDefault())return t;let n;return e.index_===He?n="$priority":e.index_===tt?n="$value":e.index_===Pe?n="$key":(Object(s.e)(e.index_ instanceof et,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Object(s.A)(n),e.startSet_&&(t.startAt=Object(s.A)(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+Object(s.A)(e.indexStartName_))),e.endSet_&&(t.endAt=Object(s.A)(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+Object(s.A)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function yt(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==He&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends re{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=T("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(s.e)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vt.getListenId_(e,n),a={};this.listens_[o]=a;const c=gt(e._queryParams);this.restRequest_(r+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(r,c,!1,n),Object(s.x)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}})}unlisten(e,t){const n=vt.getListenId_(e,t);delete this.listens_[n]}get(e){const t=gt(e._queryParams),n=e._path.toString(),i=new s.a;return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(s.w)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=Object(s.u)(a.responseText)}catch(e){k("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.rootNode_=Xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return{value:null,children:new Map}}function wt(e,t,n){if(me(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=le(t);e.children.has(i)||e.children.set(i,bt());wt(e.children.get(i),t=ue(t),n)}}function Tt(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,(e,i)=>{Tt(i,new ae(t.toString()+"/"+e),n)})}class Et{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&j(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Et(e);const n=1e4+2e4*Math.random();W(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;j(e,(e,i)=>{i>0&&Object(s.i)(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),W(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt;function St(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(kt||(kt={}));class Ot{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=kt.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(me(this.path)){if(null!=this.affectedTree.value)return Object(s.e)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ae(e));return new Ot(ce(),t,this.revert)}}return Object(s.e)(le(this.path)===e,"operationForChild called for unrelated child."),new Ot(ue(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){this.source=e,this.path=t,this.type=kt.LISTEN_COMPLETE}operationForChild(e){return me(this.path)?new xt(this.source,ce()):new xt(this.source,ue(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=kt.OVERWRITE}operationForChild(e){return me(this.path)?new Pt(this.source,ce(),this.snap.getImmediateChild(e)):new Pt(this.source,ue(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=kt.MERGE}operationForChild(e){if(me(this.path)){const t=this.children.subtree(new ae(e));return t.isEmpty()?null:t.value?new Pt(this.source,ce(),t.value):new Nt(this.source,ce(),t)}return Object(s.e)(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Nt(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const t=le(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function At(e,t,n,i,r,o){const a=i.filter(e=>e.type===n);a.sort((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Object(s.f)("Should only compare child_ events.");const i=new ke(t.childName,t.snapshotNode),r=new ke(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n)),a.forEach(n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}function jt(e,t){return{eventCache:e,serverCache:t}}function Lt(e,t,n,i){return jt(new Rt(t,n,i),e.serverCache)}function Mt(e,t,n,i){return jt(e.eventCache,new Rt(t,n,i))}function Ft(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function qt(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt;class Ut{constructor(e,t=(()=>(Wt||(Wt=new De(N)),Wt))()){this.value=e,this.children=t}static fromObject(e){let t=new Ut(null);return j(e,(e,n)=>{t=t.set(new ae(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ce(),value:this.value};if(me(e))return null;{const n=le(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(ue(e),t);if(null!=r){return{path:_e(new ae(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const t=le(e),n=this.children.get(t);return null!==n?n.subtree(ue(e)):new Ut(null)}}set(e,t){if(me(e))return new Ut(t,this.children);{const n=le(e),i=(this.children.get(n)||new Ut(null)).set(ue(e),t),r=this.children.insert(n,i);return new Ut(this.value,r)}}remove(e){if(me(e))return this.children.isEmpty()?new Ut(null):new Ut(null,this.children);{const t=le(e),n=this.children.get(t);if(n){const i=n.remove(ue(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Ut(null):new Ut(this.value,r)}return this}}get(e){if(me(e))return this.value;{const t=le(e),n=this.children.get(t);return n?n.get(ue(e)):null}}setTree(e,t){if(me(e))return t;{const n=le(e),i=(this.children.get(n)||new Ut(null)).setTree(ue(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Ut(this.value,r)}}fold(e){return this.fold_(ce(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(_e(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ce(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(me(e))return null;{const i=le(e),r=this.children.get(i);return r?r.findOnPath_(ue(e),_e(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ce(),t)}foreachOnPath_(e,t,n){if(me(e))return this;{this.value&&n(t,this.value);const i=le(e),r=this.children.get(i);return r?r.foreachOnPath_(ue(e),_e(t,i),n):new Ut(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(_e(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.writeTree_=e}static empty(){return new Bt(new Ut(null))}}function Ht(e,t,n){if(me(t))return new Bt(new Ut(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=ge(r,t);return s=s.updateChild(o,n),new Bt(e.writeTree_.set(r,s))}{const i=new Ut(n),r=e.writeTree_.setTree(t,i);return new Bt(r)}}}function zt(e,t,n){let i=e;return j(n,(e,n)=>{i=Ht(i,_e(t,e),n)}),i}function Vt(e,t){if(me(t))return Bt.empty();{const n=e.writeTree_.setTree(t,new Ut(null));return new Bt(n)}}function Yt(e,t){return null!=$t(e,t)}function $t(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ge(n.path,t)):null}function Kt(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(He,(e,n)=>{t.push(new ke(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new ke(e,n.value))}),t}function Qt(e,t){if(me(t))return e;{const n=$t(e,t);return new Bt(null!=n?new Ut(n):e.writeTree_.subtree(t))}}function Gt(e){return e.writeTree_.isEmpty()}function Xt(e,t){return function e(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let r=null;return n.children.inorderTraversal((n,o)=>{".priority"===n?(Object(s.e)(null!==o.value,"Priority writes must always be leaf nodes"),r=o.value):i=e(_e(t,n),o,i)}),i.getChild(t).isEmpty()||null===r||(i=i.updateChild(_e(t,".priority"),r)),i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ce(),e.writeTree_,t)}function Jt(e,t){return dn(t,e)}function Zt(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(s.e)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;for(;r&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&en(t,i.path)?r=!1:Ce(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return function(e){e.visibleWrites=nn(e.allWrites,tn,ce()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Vt(e.visibleWrites,i.path);else{j(i.children,t=>{e.visibleWrites=Vt(e.visibleWrites,_e(i.path,t))})}return!0}return!1}function en(e,t){if(e.snap)return Ce(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ce(_e(e.path,n),t))return!0;return!1}function tn(e){return e.visible}function nn(e,t,n){let i=Bt.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)Ce(n,e)?(t=ge(n,e),i=Ht(i,t,o.snap)):Ce(e,n)&&(t=ge(e,n),i=Ht(i,ce(),o.snap.getChild(t)));else{if(!o.children)throw Object(s.f)("WriteRecord should have .snap or .children");if(Ce(n,e))t=ge(n,e),i=zt(i,t,o.children);else if(Ce(e,n))if(t=ge(e,n),me(t))i=zt(i,ce(),o.children);else{const e=Object(s.x)(o.children,le(t));if(e){const n=e.getChild(ue(t));i=Ht(i,ce(),n)}}}}}return i}function rn(e,t,n,i,r){if(i||r){const s=Qt(e.visibleWrites,t);if(!r&&Gt(s))return n;if(r||null!=n||Yt(s,ce())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Ce(e.path,t)||Ce(t,e.path))};return Xt(nn(e.allWrites,s,t),n||Xe.EMPTY_NODE)}return null}{const i=$t(e.visibleWrites,t);if(null!=i)return i;{const i=Qt(e.visibleWrites,t);if(Gt(i))return n;if(null!=n||Yt(i,ce())){return Xt(i,n||Xe.EMPTY_NODE)}return null}}}function sn(e,t,n,i){return rn(e.writeTree,e.treePath,t,n,i)}function on(e,t){return function(e,t,n){let i=Xe.EMPTY_NODE;const r=$t(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(He,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){const r=Qt(e.visibleWrites,t);return n.forEachChild(He,(e,t)=>{const n=Xt(Qt(r,new ae(e)),t);i=i.updateImmediateChild(e,n)}),Kt(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}return Kt(Qt(e.visibleWrites,t)).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}(e.writeTree,e.treePath,t)}function an(e,t,n,i){return function(e,t,n,i,r){Object(s.e)(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=_e(t,n);if(Yt(e.visibleWrites,o))return null;{const t=Qt(e.visibleWrites,o);return Gt(t)?r.getChild(n):Xt(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function cn(e,t){return function(e,t){return $t(e.visibleWrites,t)}(e.writeTree,_e(e.treePath,t))}function ln(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const c=Qt(e.visibleWrites,t),l=$t(c,ce());if(null!=l)a=l;else{if(null==n)return[];a=Xt(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<r;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function hn(e,t,n){return function(e,t,n,i){const r=_e(t,n),s=$t(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){return Xt(Qt(e.visibleWrites,r),i.getNode().getImmediateChild(n))}return null}(e.writeTree,e.treePath,t,n)}function un(e,t){return dn(_e(e.treePath,t),e.writeTree)}function dn(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(s.e)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(s.e)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,lt(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,ct(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,at(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Object(s.f)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,lt(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class _n{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Rt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hn(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:qt(this.viewCache_),r=ln(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e,t,n,i,r){const o=new pn;let a,c;if(n.type===kt.OVERWRITE){const l=n;l.source.fromUser?a=vn(e,t,l.path,l.snap,i,r,o):(Object(s.e)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!me(l.path),a=yn(e,t,l.path,l.snap,i,r,c,o))}else if(n.type===kt.MERGE){const l=n;l.source.fromUser?a=function(e,t,n,i,r,s,o){let a=t;return i.foreach((i,c)=>{const l=_e(n,i);Cn(t,le(l))&&(a=vn(e,a,l,c,r,s,o))}),i.foreach((i,c)=>{const l=_e(n,i);Cn(t,le(l))||(a=vn(e,a,l,c,r,s,o))}),a}(e,t,l.path,l.children,i,r,o):(Object(s.e)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=wn(e,t,l.path,l.children,i,r,c,o))}else if(n.type===kt.ACK_USER_WRITE){const c=n;a=c.revert?function(e,t,n,i,r,o){let a;if(null!=cn(i,n))return t;{const c=new _n(i,t,r),l=t.eventCache.getNode();let h;if(me(n)||".priority"===le(n)){let n;if(t.serverCache.isFullyInitialized())n=sn(i,qt(t));else{const e=t.serverCache.getNode();Object(s.e)(e instanceof Xe,"serverChildren would be complete if leaf node"),n=on(i,e)}n=n,h=e.filter.updateFullNode(l,n,o)}else{const r=le(n);let s=hn(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=l.getImmediateChild(r)),h=null!=s?e.filter.updateChild(l,r,s,ue(n),c,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,Xe.EMPTY_NODE,ue(n),c,o):l,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=sn(i,qt(t)),a.isLeafNode()&&(h=e.filter.updateFullNode(h,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=cn(i,ce()),Lt(t,h,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,c.path,i,r,o):function(e,t,n,i,r,s,o){if(null!=cn(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(me(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return yn(e,t,n,c.getNode().getChild(n),r,s,a,o);if(me(n)){let i=new Ut(null);return c.getNode().forEachChild(Pe,(e,t)=>{i=i.set(new ae(e),t)}),wn(e,t,n,i,r,s,a,o)}return t}{let l=new Ut(null);return i.foreach((e,t)=>{const i=_e(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))}),wn(e,t,n,l,r,s,a,o)}}(e,t,c.path,c.affectedTree,i,r,o)}else{if(n.type!==kt.LISTEN_COMPLETE)throw Object(s.f)("Unknown operation type: "+n.type);a=function(e,t,n,i,r){const s=t.serverCache,o=Mt(t,s.getNode(),s.isFullyInitialized()||me(n),s.isFiltered());return gn(e,o,n,i,fn,r)}(e,t,n.path,i,o)}const l=o.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Ft(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(ot(Ft(t)))}}(t,a,l),{viewCache:a,changes:l}}function gn(e,t,n,i,r,o){const a=t.eventCache;if(null!=cn(i,n))return t;{let c,l;if(me(n))if(Object(s.e)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=qt(t),r=on(i,n instanceof Xe?n:Xe.EMPTY_NODE);c=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=sn(i,qt(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const h=le(n);if(".priority"===h){Object(s.e)(1===he(n),"Can't have a priority with additional path components");const r=a.getNode();l=t.serverCache.getNode();const o=an(i,n,r,l);c=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=ue(n);let u;if(a.isCompleteForChild(h)){l=t.serverCache.getNode();const e=an(i,n,a.getNode(),l);u=null!=e?a.getNode().getImmediateChild(h).updateChild(s,e):a.getNode().getImmediateChild(h)}else u=hn(i,h,t.serverCache);c=null!=u?e.filter.updateChild(a.getNode(),h,u,s,r,o):a.getNode()}}return Lt(t,c,a.isFullyInitialized()||me(n),e.filter.filtersNodes())}}function yn(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const h=o?e.filter:e.filter.getIndexedFilter();if(me(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),e,null)}else{const e=le(n);if(!c.isCompleteForPath(n)&&he(n)>1)return t;const r=ue(n),s=c.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?h.updatePriority(c.getNode(),s):h.updateChild(c.getNode(),e,s,r,fn,null)}const u=Mt(t,l,c.isFullyInitialized()||me(n),h.filtersNodes());return gn(e,u,n,r,new _n(r,u,s),a)}function vn(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const h=new _n(r,t,s);if(me(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=Lt(t,l,!0,e.filter.filtersNodes());else{const r=le(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=Lt(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=ue(n),l=a.getNode().getImmediateChild(r);let u;if(me(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===de(s)&&e.getChild(fe(s)).isEmpty()?e:e.updateChild(s,i):Xe.EMPTY_NODE}if(l.equals(u))c=t;else{c=Lt(t,e.filter.updateChild(a.getNode(),r,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Cn(e,t){return e.eventCache.isCompleteForChild(t)}function bn(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function wn(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=me(n)?i:new Ut(null).setTree(n,i);const h=t.serverCache.getNode();return c.children.inorderTraversal((n,i)=>{if(h.hasChild(n)){const c=bn(0,t.serverCache.getNode().getImmediateChild(n),i);l=yn(e,l,new ae(n),c,r,s,o,a)}}),c.children.inorderTraversal((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!h.hasChild(n)&&!c){const c=bn(0,t.serverCache.getNode().getImmediateChild(n),i);l=yn(e,l,new ae(n),c,r,s,o,a)}}),l}class Tn{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new ht(n.getIndex()),r=(s=n).loadsAllData()?new ht(s.getIndex()):s.hasLimit()?new dt(s):new ut(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(Xe.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(Xe.EMPTY_NODE,a.getNode(),null),h=new Rt(c,o.isFullyInitialized(),i.filtersNodes()),u=new Rt(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=jt(u,h),this.eventGenerator_=new Dt(this.query_)}get query(){return this.query_}}function En(e,t){const n=qt(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!me(t)&&!n.getImmediateChild(le(t)).isEmpty())?n.getChild(t):null}function In(e){return 0===e.eventRegistrations_.length}function kn(e,t,n){const i=[];if(n){Object(s.e)(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Sn(e,t,n,i){t.type===kt.MERGE&&null!==t.source.queryId&&(Object(s.e)(qt(e.viewCache_),"We should always have a full cache before handling merges"),Object(s.e)(Ft(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=mn(e.processor_,r,t,n,i);var a,c;return a=e.processor_,c=o.viewCache,Object(s.e)(c.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),Object(s.e)(c.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),Object(s.e)(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,On(e,o.changes,o.viewCache.eventCache.getNode(),null)}function On(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach(t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))}),At(e,r,"child_removed",t,i,n),At(e,r,"child_added",t,i,n),At(e,r,"child_moved",s,i,n),At(e,r,"child_changed",t,i,n),At(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn,Pn;class Nn{constructor(){this.views=new Map}}function Rn(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return Object(s.e)(null!=o,"SyncTree gave us an op for an invalid query."),Sn(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Sn(s,t,n,i));return r}}function Dn(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=sn(n,r?i:null),s=!1;e?s=!0:i instanceof Xe?(e=on(n,i),s=!1):(e=Xe.EMPTY_NODE,s=!1);const o=jt(new Rt(e,s,!1),new Rt(i,r,!1));return new Tn(t,o)}return o}function An(e,t,n,i,r,s){const o=Dn(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){n.getNode().forEachChild(He,(e,t)=>{i.push(at(e,t))})}return n.isFullyInitialized()&&i.push(ot(n.getNode())),On(e,i,n.getNode(),t)}(o,n)}function jn(e,t,n,i){const r=t._queryIdentifier,o=[];let a=[];const c=Wn(e);if("default"===r)for(const[t,r]of e.views.entries())a=a.concat(kn(r,n,i)),In(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||o.push(r.query));else{const t=e.views.get(r);t&&(a=a.concat(kn(t,n,i)),In(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||o.push(t.query)))}return c&&!Wn(e)&&o.push(new(Object(s.e)(xn,"Reference.ts has not been loaded"),xn)(t._repo,t._path)),{removed:o,events:a}}function Ln(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Mn(e,t){let n=null;for(const i of e.views.values())n=n||En(i,t);return n}function Fn(e,t){if(t._queryParams.loadsAllData())return Un(e);{const n=t._queryIdentifier;return e.views.get(n)}}function qn(e,t){return null!=Fn(e,t)}function Wn(e){return null!=Un(e)}function Un(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn=1;class Hn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ut(null),this.pendingWriteTree_={visibleWrites:Bt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zn(e,t,n,i,r){return function(e,t,n,i,r){Object(s.e)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Ht(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?Jn(e,new Pt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Vn(e,t,n,i){!function(e,t,n,i){Object(s.e)(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=zt(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const r=Ut.fromObject(n);return Jn(e,new Nt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,r))}function Yn(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Zt(e.pendingWriteTree_,t)){let t=new Ut(null);return null!=i.snap?t=t.set(ce(),!0):j(i.children,e=>{t=t.set(new ae(e),!0)}),Jn(e,new Ot(i.path,t,n))}return[]}function $n(e,t,n){return Jn(e,new Pt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Kn(e,t,n,i){const r=t._path,s=e.syncPointTree_.get(r);let o=[];if(s&&("default"===t._queryIdentifier||qn(s,t))){const a=jn(s,t,n,i);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=a.removed;o=a.events;const l=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),h=e.syncPointTree_.findOnPath(r,(e,t)=>Wn(t));if(l&&!h){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold((e,t,n)=>{if(t&&Wn(t)){return[Un(t)]}{let e=[];return t&&(e=Ln(t)),j(n,(t,n)=>{e=e.concat(n)}),e}})}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=Zn(e,i);e.listenProvider_.startListening(si(r),ei(e,r),s.hashFn,s.onComplete)}}}if(!h&&c.length>0&&!i)if(l){const n=null;e.listenProvider_.stopListening(si(t),n)}else c.forEach(t=>{const n=e.queryToTagMap.get(ti(t));e.listenProvider_.stopListening(si(t),n)});!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ti(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return o}function Qn(e,t,n){const i=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(i,(e,t)=>{const n=ge(e,i);r=r||Mn(t,n),o=o||Wn(t)});let a,c=e.syncPointTree_.get(i);if(c?(o=o||Wn(c),r=r||Mn(c,ce())):(c=new Nn,e.syncPointTree_=e.syncPointTree_.set(i,c)),null!=r)a=!0;else{a=!1,r=Xe.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild((e,t)=>{const n=Mn(t,ce());n&&(r=r.updateImmediateChild(e,n))})}const l=qn(c,t);if(!l&&!t._queryParams.loadsAllData()){const n=ti(t);Object(s.e)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Bn++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let h=An(c,t,n,Jt(e.pendingWriteTree_,i),r,a);if(!l&&!o){const n=Fn(c,t);h=h.concat(function(e,t,n){const i=t._path,r=ei(e,t),o=Zn(e,n),a=e.listenProvider_.startListening(si(t),r,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(i);if(r)Object(s.e)(!Wn(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!me(e)&&t&&Wn(t))return[Un(t).query];{let e=[];return t&&(e=e.concat(Ln(t).map(e=>e.query))),j(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(si(i),ei(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return h}function Gn(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{const i=Mn(n,ge(e,t));if(i)return i});return rn(i,t,r,n,!0)}function Xn(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const r=ge(e,n);i=i||Mn(t,r)});let r=e.syncPointTree_.get(n);r?i=i||Mn(r,ce()):(r=new Nn,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new Rt(i,!0,!1):null;return function(e){return Ft(e.viewCache_)}(Dn(r,t,Jt(e.pendingWriteTree_,t._path),s?o.getNode():Xe.EMPTY_NODE,s))}function Jn(e,t){return function e(t,n,i,r){if(me(t.path))return function e(t,n,i,r){const s=n.get(ce());null==i&&null!=s&&(i=Mn(s,ce()));let o=[];n.children.inorderTraversal((n,s)=>{const a=i?i.getImmediateChild(n):null,c=un(r,n),l=t.operationForChild(n);l&&(o=o.concat(e(l,s,a,c)))}),s&&(o=o.concat(Rn(s,t,r,i)));return o}(t,n,i,r);{const s=n.get(ce());null==i&&null!=s&&(i=Mn(s,ce()));let o=[];const a=le(t.path),c=t.operationForChild(a),l=n.children.get(a);if(l&&c){const t=i?i.getImmediateChild(a):null,n=un(r,a);o=o.concat(e(c,l,t,n))}return s&&(o=o.concat(Rn(s,t,r,i))),o}}(t,e.syncPointTree_,null,Jt(e.pendingWriteTree_,ce()))}function Zn(e,t){const n=t.query,i=ei(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||Xe.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=ni(e,n);if(i){const n=ii(i),r=n.path,s=n.queryId,o=ge(r,t);return ri(e,r,new xt(St(s),o))}return[]}(e,n._path,i):function(e,t){return Jn(e,new xt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Kn(e,n,null,i)}}}}function ei(e,t){const n=ti(t);return e.queryToTagMap.get(n)}function ti(e){return e._path.toString()+"$"+e._queryIdentifier}function ni(e,t){return e.tagToQueryMap.get(t)}function ii(e){const t=e.indexOf("$");return Object(s.e)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ae(e.substr(0,t))}}function ri(e,t,n){const i=e.syncPointTree_.get(t);Object(s.e)(i,"Missing sync point for query tag that we're tracking");return Rn(i,n,Jt(e.pendingWriteTree_,t),null)}function si(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Object(s.e)(Pn,"Reference.ts has not been loaded"),Pn)(e._repo,e._path):e}class oi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new oi(t)}node(){return this.node_}}class ai{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_e(this.path_,e);return new ai(this.syncTree_,t)}node(){return Gn(this.syncTree_,this.path_)}}const ci=function(e,t,n){return e&&"object"==typeof e?(Object(s.e)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?li(e[".sv"],t,n):"object"==typeof e[".sv"]?hi(e[".sv"],t):void Object(s.e)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},li=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:Object(s.e)(!1,"Unexpected server value: "+e)}},hi=function(e,t,n){e.hasOwnProperty("increment")||Object(s.e)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Object(s.e)(!1,"Unexpected increment value: "+i);const r=t.node();if(Object(s.e)(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return"number"!=typeof o?i:o+i},ui=function(e,t,n,i){return pi(t,new ai(n,e),i)},di=function(e,t,n){return pi(e,new oi(t),n)};function pi(e,t,n){const i=e.getPriority().val(),r=ci(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=ci(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new Be(s,Ze(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new Be(r))),i.forEachChild(He,(e,i)=>{const r=pi(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function _i(e,t){let n=t instanceof ae?t:new ae(t),i=e,r=le(n);for(;null!==r;){const e=Object(s.x)(i.node.children,r)||{children:{},childCount:0};i=new fi(r,i,e),n=ue(n),r=le(n)}return i}function mi(e){return e.node.value}function gi(e,t){e.node.value=t,bi(e)}function yi(e){return e.node.childCount>0}function vi(e,t){j(e.node.children,(n,i)=>{t(new fi(n,e,i))})}function Ci(e){return new ae(null===e.parent?e.name:Ci(e.parent)+"/"+e.name)}function bi(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===mi(e)&&!yi(e)}(n),r=Object(s.i)(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,bi(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,bi(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const wi=/[\[\].#$\/\u0000-\u001F\u007F]/,Ti=/[\[\].#$\u0000-\u001F\u007F]/,Ei=function(e){return"string"==typeof e&&0!==e.length&&!wi.test(e)},Ii=function(e){return"string"==typeof e&&0!==e.length&&!Ti.test(e)},ki=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!S(e)||e&&"object"==typeof e&&Object(s.i)(e,".sv")},Si=function(e,t,n,i){i&&void 0===t||Oi(Object(s.m)(e,"value"),t,n)},Oi=function(e,t,n){const i=n instanceof ae?new be(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Te(i));if("function"==typeof t)throw new Error(e+"contains a function "+Te(i)+" with contents = "+t.toString());if(S(t))throw new Error(e+"contains "+t.toString()+" "+Te(i));if("string"==typeof t&&t.length>10485760/3&&Object(s.y)(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Te(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(j(t,(t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Ei(t)))throw new Error(e+" contains an invalid key ("+t+") "+Te(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(s.y)(t),we(e)}(i,t),Oi(e,o,i),function(e){const t=e.parts_.pop();e.byteLength_-=Object(s.y)(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)}),n&&r)throw new Error(e+' contains ".value" child '+Te(i)+" in addition to actual children.")}},xi=function(e,t,n,i){if(i&&void 0===t)return;const r=Object(s.m)(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const o=[];j(t,(e,t)=>{const i=new ae(e);if(Oi(r,t,_e(n,i)),".priority"===de(i)&&!ki(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(i)}),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=pe(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!Ei(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(ye);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&Ce(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}}(r,o)},Pi=function(e,t,n){if(!n||void 0!==t){if(S(t))throw new Error(Object(s.m)(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ki(t))throw new Error(Object(s.m)(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Ni=function(e,t,n,i){if(!(i&&void 0===n||Ei(n)))throw new Error(Object(s.m)(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},Ri=function(e,t,n,i){if(!(i&&void 0===n||Ii(n)))throw new Error(Object(s.m)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Di=function(e,t){if(".info"===le(t))throw new Error(e+" failed = Can't modify data under /.info/")},Ai=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ei(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ii(e)}(n))throw new Error(Object(s.m)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ji{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Li(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||ve(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Mi(e,t,n){Li(e,n),qi(e,e=>ve(e,t))}function Fi(e,t,n){Li(e,n),qi(e,e=>Ce(e,t)||Ce(t,e))}function qi(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Wi(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Wi(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();v&&w("event: "+n.toString()),q(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ji,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bt(),this.transactionQueueTree_=new fi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Bi(e,t,n){if(e.stats_=G(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new vt(e.repoInfo_,(t,n,i,r)=>{Vi(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Yi(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(s.A)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ie(e.repoInfo_,t,(t,n,i,r)=>{Vi(e,t,n,i,r)},t=>{Yi(e,t)},t=>{!function(e,t){j(t,(t,n)=>{$i(e,t,n)})}(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){const n=e.toString();return Q[n]||(Q[n]=t()),Q[n]}(e.repoInfo_,()=>new It(e.stats_,e.server_)),e.infoData_=new Ct,e.infoSyncTree_=new Hn({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=$n(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),$i(e,"connected",!1),e.serverSyncTree_=new Hn({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{const s=r(n,i);Fi(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Hi(e){const t=e.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function zi(e){return(t=(t={timestamp:Hi(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Vi(e,t,n,i,r){e.dataUpdateCount++;const o=new ae(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=Object(s.v)(n,e=>Ze(e));a=function(e,t,n,i){const r=ni(e,i);if(r){const i=ii(r),s=i.path,o=i.queryId,a=ge(s,t),c=Ut.fromObject(n);return ri(e,s,new Nt(St(o),a,c))}return[]}(e.serverSyncTree_,o,t,r)}else{const t=Ze(n);a=function(e,t,n,i){const r=ni(e,i);if(null!=r){const i=ii(r),s=i.path,o=i.queryId,a=ge(s,t);return ri(e,s,new Pt(St(o),a,n))}return[]}(e.serverSyncTree_,o,t,r)}else if(i){const t=Object(s.v)(n,e=>Ze(e));a=function(e,t,n){const i=Ut.fromObject(n);return Jn(e,new Nt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,o,t)}else{const t=Ze(n);a=$n(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=rr(e,o)),Fi(e.eventQueue_,c,a)}function Yi(e,t){$i(e,"connected",t),!1===t&&function(e){er(e,"onDisconnectEvents");const t=zi(e),n=bt();Tt(e.onDisconnect_,ce(),(i,r)=>{const s=ui(i,r,e.serverSyncTree_,t);wt(n,i,s)});let i=[];Tt(n,ce(),(t,n)=>{i=i.concat($n(e.serverSyncTree_,t,n));const r=cr(e,t);rr(e,r)}),e.onDisconnect_=bt(),Fi(e.eventQueue_,ce(),i)}(e)}function $i(e,t,n){const i=new ae("/.info/"+t),r=Ze(n);e.infoData_.updateSnapshot(i,r);const s=$n(e.infoSyncTree_,i,r);Fi(e.eventQueue_,i,s)}function Ki(e){return e.nextWriteId_++}function Qi(e,t,n,i,r){er(e,"set",{path:t.toString(),value:n,priority:i});const s=zi(e),o=Ze(n,i),a=Gn(e.serverSyncTree_,t),c=di(o,a,s),l=Ki(e),h=zn(e.serverSyncTree_,t,c,l,!0);Li(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),(n,i)=>{const s="ok"===n;s||k("set at "+t+" failed: "+n);const o=Yn(e.serverSyncTree_,l,!s);Fi(e.eventQueue_,t,o),tr(e,r,n,i)});const u=cr(e,t);rr(e,u),Fi(e.eventQueue_,u,[])}function Gi(e,t,n){e.server_.onDisconnectCancel(t.toString(),(i,r)=>{"ok"===i&&function e(t,n){if(me(n))return t.value=null,t.children.clear(),!0;if(null!==t.value){if(t.value.isLeafNode())return!1;{const i=t.value;return t.value=null,i.forEachChild(He,(e,n)=>{wt(t,new ae(e),n)}),e(t,n)}}if(t.children.size>0){const i=le(n);if(n=ue(n),t.children.has(i)){e(t.children.get(i),n)&&t.children.delete(i)}return 0===t.children.size}return!0}(e.onDisconnect_,t),tr(e,n,i,r)})}function Xi(e,t,n,i){const r=Ze(n);e.server_.onDisconnectPut(t.toString(),r.val(!0),(n,s)=>{"ok"===n&&wt(e.onDisconnect_,t,r),tr(e,i,n,s)})}function Ji(e,t,n){let i;i=".info"===le(t._path)?Kn(e.infoSyncTree_,t,n):Kn(e.serverSyncTree_,t,n),Mi(e.eventQueue_,t._path,i)}function Zi(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function er(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),w(n,...t)}function tr(e,t,n,i){t&&q(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}})}function nr(e,t,n){return Gn(e.serverSyncTree_,t,n)||Xe.EMPTY_NODE}function ir(e,t=e.transactionQueueTree_){if(t||ar(e,t),mi(t)){const n=or(e,t);Object(s.e)(n.length>0,"Sending zero length transaction queue");n.every(e=>0===e.status)&&function(e,t,n){const i=n.map(e=>e.currentWriteId),r=nr(e,t,i);let o=r;const a=r.hash();for(let e=0;e<n.length;e++){const i=n[e];Object(s.e)(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=ge(t,i.path);o=o.updateChild(r,i.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,i=>{er(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Yn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();ar(e,_i(e.transactionQueueTree_,t)),ir(e,e.transactionQueueTree_),Fi(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)q(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{k("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}rr(e,t)}},a)}(e,Ci(t),n)}else yi(t)&&vi(t,t=>{ir(e,t)})}function rr(e,t){const n=sr(e,t),i=Ci(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const l=t[c],h=ge(n,l.path);let u,d=!1;if(Object(s.e)(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)d=!0,u=l.abortReason,r=r.concat(Yn(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)d=!0,u="maxretry",r=r.concat(Yn(e.serverSyncTree_,l.currentWriteId,!0));else{const n=nr(e,l.path,o);l.currentInputSnapshot=n;const i=t[c].update(n.val());if(void 0!==i){Oi("transaction failed: Data returned ",i,l.path);let t=Ze(i);"object"==typeof i&&null!=i&&Object(s.i)(i,".priority")||(t=t.updatePriority(n.getPriority()));const a=l.currentWriteId,c=zi(e),h=di(t,n,c);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=h,l.currentWriteId=Ki(e),o.splice(o.indexOf(a),1),r=r.concat(zn(e.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),r=r.concat(Yn(e.serverSyncTree_,a,!0))}else d=!0,u="nodata",r=r.concat(Yn(e.serverSyncTree_,l.currentWriteId,!0))}Fi(e.eventQueue_,n,r),r=[],d&&(t[c].status=2,a=t[c].unwatcher,setTimeout(a,Math.floor(0)),t[c].onComplete&&("nodata"===u?i.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):i.push(()=>t[c].onComplete(new Error(u),!1,null))))}var a;ar(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)q(i[e]);ir(e,e.transactionQueueTree_)}(e,or(e,n),i),i}function sr(e,t){let n,i=e.transactionQueueTree_;for(n=le(t);null!==n&&void 0===mi(i);)i=_i(i,n),n=le(t=ue(t));return i}function or(e,t){const n=[];return function e(t,n,i){const r=mi(n);if(r)for(let e=0;e<r.length;e++)i.push(r[e]);vi(n,n=>{e(t,n,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function ar(e,t){const n=mi(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,gi(t,n.length>0?n:void 0)}vi(t,t=>{ar(e,t)})}function cr(e,t){const n=Ci(sr(e,t)),i=_i(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,t=>{lr(e,t)}),lr(e,i),function e(t,n,i,r){i&&!r&&n(t),vi(t,t=>{e(t,n,!0,r)}),i&&r&&n(t)}(i,t=>{lr(e,t)}),n}function lr(e,t){const n=mi(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(s.e)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(s.e)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Yn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?gi(t,void 0):n.length=o+1,Fi(e.eventQueue_,Ci(t),r);for(let e=0;e<i.length;e++)q(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=function(e,t){const n=ur(e),i=n.namespace;"firebase.com"===n.domain&&I(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||I("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new V(n.host,n.secure,i,t,r,"",i!==n.subdomain),path:new ae(n.pathString)}},ur=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dr{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(s.A)(this.snapshot.exportVal())}}class pr{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(s.e)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new s.a;return Gi(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Di("OnDisconnect.remove",this._path);const e=new s.a;return Xi(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Di("OnDisconnect.set",this._path),Si("OnDisconnect.set",e,this._path,!1);const t=new s.a;return Xi(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Di("OnDisconnect.setWithPriority",this._path),Si("OnDisconnect.setWithPriority",e,this._path,!1),Pi("OnDisconnect.setWithPriority",t,!1);const n=new s.a;return function(e,t,n,i,r){const s=Ze(n,i);e.server_.onDisconnectPut(t.toString(),s.val(!0),(n,i)=>{"ok"===n&&wt(e.onDisconnect_,t,s),tr(e,r,n,i)})}(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){Di("OnDisconnect.update",this._path),xi("OnDisconnect.update",e,this._path,!1);const t=new s.a;return function(e,t,n,i){if(Object(s.p)(n))return w("onDisconnect().update() called with empty data.  Don't do anything."),void tr(e,i,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,(r,s)=>{"ok"===r&&j(n,(n,i)=>{const r=Ze(i);wt(e.onDisconnect_,_e(t,n),r)}),tr(e,i,r,s)})}(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return me(this._path)?null:de(this._path)}get ref(){return new Cr(this._repo,this._path)}get _queryIdentifier(){const e=yt(this._queryParams),t=D(e);return"{}"===t?"default":t}get _queryObject(){return yt(this._queryParams)}isEqual(e){if(!((e=Object(s.n)(e))instanceof mr))return!1;const t=this._repo===e._repo,n=ve(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}function gr(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function yr(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Pe){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==O)throw new Error(i);if("string"!=typeof t)throw new Error(r)}if(e.hasEnd()){if(e.getIndexEndName()!==x)throw new Error(i);if("string"!=typeof n)throw new Error(r)}}else if(e.getIndex()===He){if(null!=t&&!ki(t)||null!=n&&!ki(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Object(s.e)(e.getIndex()instanceof et||e.getIndex()===tt,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function vr(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Cr extends mr{constructor(e,t){super(e,t,new pt,!1)}get parent(){const e=fe(this._path);return null===e?null:new Cr(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class br{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ae(e),n=Er(this.ref,e);return new br(this._node.getChild(t),n,He)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,(t,n)=>e(new br(n,Er(this.ref,t),He)))}hasChild(e){const t=new ae(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wr(e,t){return(e=Object(s.n)(e))._checkNotDeleted("ref"),void 0!==t?Er(e._root,t):e._root}function Tr(e,t){(e=Object(s.n)(e))._checkNotDeleted("refFromURL");const n=hr(t,e._repo.repoInfo_.nodeAdmin);Ai("refFromURL",n);const i=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||i.host===e._repo.repoInfo_.host||I("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+e._repo.repoInfo_.host+")"),wr(e,n.path.toString())}function Er(e,t){var n,i,r,o;return null===le((e=Object(s.n)(e))._path)?(n="child",i="path",o=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Ri(n,i,r,o)):Ri("child","path",t,!1),new Cr(e._repo,_e(e._path,t))}function Ir(e){return e=Object(s.n)(e),new _r(e._repo,e._path)}function kr(e,t){e=Object(s.n)(e),Di("push",e._path),Si("push",t,e._path,!0);const n=Hi(e._repo),i=it(n),r=Er(e,i),o=Er(e,i);let a;return a=null!=t?Or(o,t).then(()=>o):Promise.resolve(o),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function Sr(e){return Di("remove",e._path),Or(e,null)}function Or(e,t){e=Object(s.n)(e),Di("set",e._path),Si("set",t,e._path,!1);const n=new s.a;return Qi(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function xr(e,t){e=Object(s.n)(e),Di("setPriority",e._path),Pi("setPriority",t,!1);const n=new s.a;return Qi(e._repo,_e(e._path,".priority"),t,null,n.wrapCallback(()=>{})),n.promise}function Pr(e,t,n){if(Di("setWithPriority",e._path),Si("setWithPriority",t,e._path,!1),Pi("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const i=new s.a;return Qi(e._repo,e._path,t,n,i.wrapCallback(()=>{})),i.promise}function Nr(e,t){xi("update",t,e._path,!1);const n=new s.a;return function(e,t,n,i){er(e,"update",{path:t.toString(),value:n});let r=!0;const s=zi(e),o={};if(j(n,(n,i)=>{r=!1,o[n]=ui(_e(t,n),Ze(i),e.serverSyncTree_,s)}),r)w("update() called with empty data.  Don't do anything."),tr(e,i,"ok",void 0);else{const r=Ki(e),s=Vn(e.serverSyncTree_,t,o,r);Li(e.eventQueue_,s),e.server_.merge(t.toString(),n,(n,s)=>{const o="ok"===n;o||k("update at "+t+" failed: "+n);const a=Yn(e.serverSyncTree_,r,!o),c=a.length>0?rr(e,t):t;Fi(e.eventQueue_,c,a),tr(e,i,n,s)}),j(n,n=>{const i=cr(e,_e(t,n));rr(e,i)}),Fi(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function Rr(e){return function(e,t){const n=Xn(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{const i=Ze(n).withIndex(t._queryParams.getIndex()),r=$n(e.serverSyncTree_,t._path,i);return Mi(e.eventQueue_,t._path,r),Promise.resolve(i)},n=>(er(e,"get for query "+Object(s.A)(t)+" failed: "+n),Promise.reject(new Error(n))))}((e=Object(s.n)(e))._repo,e).then(t=>new br(t,new Cr(e._repo,e._path),e._queryParams.getIndex()))}class Dr{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new dr("value",this,new br(e.snapshotNode,new Cr(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new pr(this,e,t):null}matches(e){return e instanceof Dr&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Ar{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new pr(this,e,t):null}createEvent(e,t){Object(s.e)(null!=e.childName,"Child events should have a childName.");const n=Er(new Cr(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new dr(e.type,this,new br(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ar&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function jr(e,t,n,i,r){let s;if("object"==typeof i&&(s=void 0,r=i),"function"==typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{Ji(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new fr(n,s||void 0),a="value"===t?new Dr(o):new Ar(t,o);return function(e,t,n){let i;i=".info"===le(t._path)?Qn(e.infoSyncTree_,t,n):Qn(e.serverSyncTree_,t,n),Mi(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>Ji(e._repo,e,a)}function Lr(e,t,n,i){return jr(e,"value",t,n,i)}function Mr(e,t,n,i){return jr(e,"child_added",t,n,i)}function Fr(e,t,n,i){return jr(e,"child_changed",t,n,i)}function qr(e,t,n,i){return jr(e,"child_moved",t,n,i)}function Wr(e,t,n,i){return jr(e,"child_removed",t,n,i)}function Ur(e,t,n){let i=null;const r=n?new fr(n):null;"value"===t?i=new Dr(r):t&&(i=new Ar(t,r)),Ji(e._repo,e,i)}class Br{}class Hr extends Br{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Si("endAt",this._value,e._path,!0);const t=_t(e._queryParams,this._value,this._key);if(vr(t),yr(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new mr(e._repo,e._path,t,e._orderByCalled)}}function zr(e,t){return Ni("endAt","key",t,!0),new Hr(e,t)}class Vr extends Br{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Si("endBefore",this._value,e._path,!1);const t=function(e,t,n){let i,r;return e.index_===Pe?("string"==typeof t&&(t=st(t)),r=_t(e,t,n)):(i=null==n?O:st(n),r=_t(e,t,i)),r.endBeforeSet_=!0,r}(e._queryParams,this._value,this._key);if(vr(t),yr(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new mr(e._repo,e._path,t,e._orderByCalled)}}function Yr(e,t){return Ni("endBefore","key",t,!0),new Vr(e,t)}class $r extends Br{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Si("startAt",this._value,e._path,!0);const t=ft(e._queryParams,this._value,this._key);if(vr(t),yr(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new mr(e._repo,e._path,t,e._orderByCalled)}}function Kr(e=null,t){return Ni("startAt","key",t,!0),new $r(e,t)}class Qr extends Br{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Si("startAfter",this._value,e._path,!1);const t=function(e,t,n){let i;if(e.index_===Pe)"string"==typeof t&&(t=rt(t)),i=ft(e,t,n);else{let r;r=null==n?x:rt(n),i=ft(e,t,r)}return i.startAfterSet_=!0,i}(e._queryParams,this._value,this._key);if(vr(t),yr(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new mr(e._repo,e._path,t,e._orderByCalled)}}function Gr(e,t){return Ni("startAfter","key",t,!0),new Qr(e,t)}class Xr extends Br{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new mr(e._repo,e._path,function(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}(e._queryParams,this._limit),e._orderByCalled)}}function Jr(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Xr(e)}class Zr extends Br{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new mr(e._repo,e._path,function(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}(e._queryParams,this._limit),e._orderByCalled)}}function es(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Zr(e)}class ts extends Br{constructor(e){super(),this._path=e}_apply(e){gr(e,"orderByChild");const t=new ae(this._path);if(me(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new et(t),i=mt(e._queryParams,n);return yr(i),new mr(e._repo,e._path,i,!0)}}function ns(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Ri("orderByChild","path",e,!1),new ts(e)}class is extends Br{_apply(e){gr(e,"orderByKey");const t=mt(e._queryParams,Pe);return yr(t),new mr(e._repo,e._path,t,!0)}}function rs(){return new is}class ss extends Br{_apply(e){gr(e,"orderByPriority");const t=mt(e._queryParams,He);return yr(t),new mr(e._repo,e._path,t,!0)}}function os(){return new ss}class as extends Br{_apply(e){gr(e,"orderByValue");const t=mt(e._queryParams,tt);return yr(t),new mr(e._repo,e._path,t,!0)}}function cs(){return new as}class ls extends Br{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Si("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Hr(this._value,this._key)._apply(new $r(this._value,this._key)._apply(e))}}function hs(e,t){return Ni("equalTo","key",t,!0),new ls(e,t)}function us(e,...t){let n=Object(s.n)(e);for(const e of t)n=e._apply(n);return n}!function(e){Object(s.e)(!xn,"__referenceConstructor has already been defined"),xn=e}(Cr),function(e){Object(s.e)(!Pn,"__referenceConstructor has already been defined"),Pn=e}(Cr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ds={};let ps=!1;function fs(t,n,i,r,s){let o=r||t.options.databaseURL;void 0===o&&(t.options.projectId||I("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),w("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=hr(o,s),l=c.repoInfo,h=void 0;void 0!==e&&(h=e.env.FIREBASE_DATABASE_EMULATOR_HOST),h?(a=!0,o=`http://${h}?ns=${l.namespace}`,c=hr(o,s),l=c.repoInfo):a=!c.repoInfo.secure;const u=s&&a?new H(H.OWNER):new B(t.name,t.options,n);Ai("Invalid Firebase Database URL",c),me(c.path)||I("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let r=ds[t.name];r||(r={},ds[t.name]=r);let s=r[e.toURLString()];s&&I("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Ui(e,ps,n,i),r[e.toURLString()]=s,s}(l,t,u,new U(t.name,i));return new _s(d,t)}class _s{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Bi(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cr(this._repo,ce())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=ds[t];n&&n[e.key]===e||I(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Zi(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&I("Cannot call "+e+" on a deleted database.")}}function ms(e=Object(i.m)(),t){return Object(i.i)(e,"database").getImmediate({identifier:t})}function gs(e,t,n,i={}){(e=Object(s.n)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&I("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o=void 0;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&I('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new H(H.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:Object(s.j)(i.mockUserToken,e.app.options.projectId);o=new H(t)}!function(e,t,n,i){e.repoInfo_=new V(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}(r,t,n,o)}function ys(e){(e=Object(s.n)(e))._checkNotDeleted("goOffline"),Zi(e._repo)}function vs(e){var t;(e=Object(s.n)(e))._checkNotDeleted("goOnline"),(t=e._repo).persistentConnection_&&t.persistentConnection_.resume("repo_interrupt")}function Cs(e,t){b(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bs={".sv":"timestamp"};function ws(){return bs}function Ts(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Is(e,t,n){var i;if(e=Object(s.n)(e),Di("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const r=null===(i=null==n?void 0:n.applyLocally)||void 0===i||i,o=new s.a,a=Lr(e,()=>{});return function(e,t,n,i,r,o){er(e,"transaction on "+t);const a={path:t,update:n,onComplete:i,status:null,order:m(),applyLocally:o,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},c=nr(e,t,void 0);a.currentInputSnapshot=c;const l=a.update(c.val());if(void 0===l)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{Oi("transaction failed: Data returned ",l,a.path),a.status=0;const n=_i(e.transactionQueueTree_,t),i=mi(n)||[];let r;if(i.push(a),gi(n,i),"object"==typeof l&&null!==l&&Object(s.i)(l,".priority"))r=Object(s.x)(l,".priority"),Object(s.e)(ki(r),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{r=(Gn(e.serverSyncTree_,t)||Xe.EMPTY_NODE).getPriority().val()}const o=zi(e),h=Ze(l,r),u=di(h,c,o);a.currentOutputSnapshotRaw=h,a.currentOutputSnapshotResolved=u,a.currentWriteId=Ki(e);const d=zn(e.serverSyncTree_,t,u,a.currentWriteId,a.applyLocally);Fi(e.eventQueue_,t,d),ir(e,e.transactionQueueTree_)}}(e._repo,e._path,t,(t,n,i)=>{let r=null;t?o.reject(t):(r=new br(i,new Cr(e._repo,e._path),He),o.resolve(new Es(n,r)))},a,r),o.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ie.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};const ks=function(e){const t=Ie.prototype.put;return Ie.prototype.put=function(n,i,r,s){void 0!==s&&(s=e()),t.call(this,n,i,r,s)},function(){Ie.prototype.put=t}},Ss=function(e){!function(e){ps=e}(e)};var Os;l(i.b),Object(i.j)(new r.a("database",(e,{instanceIdentifier:t})=>fs(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),Object(i.q)(a,"0.12.4",Os),Object(i.q)(a,"0.12.4","esm2017")}).call(this,n(12))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),r=n(8),s=n(4),o=s.createTemplate,a=s.createCheckbox,c=n(9),l=n(11),h=function(){function e(e,t){var n=this;this.template={},this.theme={day:{wrap:"transparent",sliderElem:"slider",labelText:"Switch to Night Mode",tooltip:"tooltip",checkboxes:"#000",mainColor:"#000",subColor:"#fff"},night:{wrap:"#242f3e",sliderElem:"slider-nightTheme",labelText:"Switch to Day Mode",tooltip:"tooltip-nightTheme",checkboxes:"#fff",mainColor:"#fff",subColor:"#222f3f"}},this.onChangeTheme=function(e){var t=e.target.checked?"night":"day";n.switchTheme(t)},this.createCheckboxes=function(){var e=n,t=e.shortChart,i=e.data,r=n.template.checkboxes;!function(e){var n=function(e,n,r){var s=r.target.checked,o=r.target.parentNode.querySelector(".custom-checkbox");i[e].isVisible=s,o.style.backgroundColor=s?n:"transparent",t.renderChart({isVisible:i})},i=[];e.columns.map((function(t,s){if(0!==s){var o=t[0],c=e.colors[o],l=e.names[o];a(l,s,i,n,r,c)}}))}(i,n.renderChart.bind(t))},this.data=t,this.createTemplate(e),this.initChart(),this.initSlider(),this.template.switcher.addEventListener("change",this.onChangeTheme),this.switchTheme.call(this,"day"),this.createCheckboxes()}return e.prototype.createTemplate=function(e){var t="view_"+e,n="timeLine_"+e;this.template=o(t,n),this.id1=t,this.id2=n;var i=this.template.wrapBlock;document.body.appendChild(i)},e.prototype.initChart=function(){var e=this.id1,t=this.id2,n=this.data,r=this.template,s=r.wrap,o=r.dateElem,a=r.columnsElem,c={wrap:s,canvas:e,tooltipElem:r.tooltipElem,columnsElem:a,dateElem:o,switchLabel:r.labelText},l={canvas:t};this.shortChart=new i(c,n,"short"),this.longChart=new i(l,n,"long");var h=this.shortChart.renderChart;this.renderChart=h},e.prototype.initSlider=function(){var e=this,t=e.id1,n=e.shortChart,i=e.longChart,s=e.renderChart,o=e.data,a=this.template,c=a.lineChart,l={main:t,slider:a.sliderElem,parent:c,method:s.bind(n),longChart:i};new r(l,o)},e.prototype.switchTheme=function(e){var t=this.shortChart,n=this.theme,i=this.template,r=i.wrap,s=i.sliderElem,o=i.tooltipElem,a=i.checkboxes,c=i.labelText,l=this.renderChart,h=n[e],u=n.night;r.style.color=h.mainColor,r.style.backgroundColor=h.wrap,c.innerText=h.labelText,a.style.color=h.checkboxes,"night"===e?(s.classList.add(u.sliderElem),o.classList.add(u.tooltip)):"day"===e&&(s.classList.remove(u.sliderElem),o.classList.remove(u.tooltip)),l.call(t,{theme:n[e]})},e}();function u(e){new h(1,e[0]),new h(2,e[1]),new h(3,e[2]),new h(4,e[3]),new h(5,e[4])}!function(){c.initializeApp({apiKey:"AIzaSyCdp-7vQrEw9HtaPQ_U7BnQ_UnjT5uHrd0",authDomain:"charts-e38b9.firebaseapp.com",databaseURL:"https://charts-e38b9-default-rtdb.firebaseio.com",projectId:"charts-e38b9",storageBucket:"charts-e38b9.appspot.com",messagingSenderId:"1073528811796",appId:"1:1073528811796:web:bc2593236f80de39891201"});var e=l.getDatabase(),t=l.ref(e);l.onValue(t,(function(e){var t=e.val();u(JSON.parse(t.charts))}))}()},function(e,t,n){var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=n(4),s=r.hexToRgb,o=r.getTooltipInfo,a=r.formatDate,c=r.formatNumber,l=function(){function e(e,t,n){this.canvas=null,this.domElems={},this.canvasConfig={width:600,height:500,ref:null},this.chartConfig={screenWidth:null,columns:[],xPositions:[],x0:30,y0:30,stepX:10,stepY:10,countX:0,countY:0,data:[],dates:[],view:"",datesPerLine:8,tooltipInfo:{},isVisible:[],pageX:null};var i=e.canvas;this.canvas=document.getElementById(i),this.domElems=e,this.ctx=this.canvas.getContext("2d"),this.chartConfig.data=t,this.canvasConfig.ref=i,this.setScreenOptions(),this.canvas.addEventListener("click",this.onCanvasClick.bind(this)),"short"===n&&this.drawShort({startDate:0}),"long"===n&&this.drawLong(t,0)}return e.prototype.setConfig=function(e,t,n){var i=this,r=this.chartConfig.data,s=this.chartConfig.data,o=s.columns,c=s.colors,l=this.canvasConfig,h=l.width,u=l.height,d=this.chartConfig.isVisible,p=0,f=0;this.chartConfig.view=n,this.chartConfig.columns=[];var _=o.slice();d.length>1&&d.forEach((function(e,t){var n=d.length-t-1;!1===d[n].isVisible&&_.length>2&&_.splice(n+1,1)})),_.forEach((function(s,o){if(0!==o){var l=e||-11,h=t?t+1:s.length,u=[];switch(n){case"short":u=s.slice(l,h);break;case"long":default:u=s.slice(1)}f=Math.max.apply(Math,u.slice(1))>f?Math.max.apply(Math,u.slice(1)):f,p=u.length-1;var d=s[0],_={start:l,end:h,name:r.names[d],data:u,color:c[d]};i.chartConfig.columns.push(_),1===o&&(i.chartConfig.dates=i.chartConfig.data.columns[0].slice(l,h).map((function(e){return a(new Date(e))})))}})),this.chartConfig.countX=p,this.chartConfig.countY=f,this.chartConfig.stepY=u/f,this.chartConfig.stepX=t?1.1*h/p:h/p},e.prototype.drawShort=function(e){var t=e.startDate,n=e.endDate;this.setConfig(t,n,"short"),this.clearChart(),this.drawChart(),this.drawHorizontalLines(),this.drawDates(),this.drawTooltip()},e.prototype.drawLong=function(e,t,n){this.setConfig(t,n,"long"),this.drawChart()},e.prototype.drawChart=function(){var e=this,t=this.canvasConfig.height,n=this.chartConfig,i=n.y0,r=n.stepX,s=n.stepY,o=n.columns,a=n.view,c=n.dates,l=this.ctx;o.forEach((function(n,o){l.beginPath();var h=n.data,u=n.color;h.forEach((function(n,h){var u=h*r,d=i+(t-i-n*s);0===h?l.moveTo(u,d):l.lineTo(u,d),"short"===a&&0===o&&e.chartConfig.xPositions.push({date:c[h].short,xPosition:u})})),l.strokeStyle=u,l.lineWidth=2,l.stroke()}))},e.prototype.drawHorizontalLines=function(){var e=this,t=this.chartConfig.countY,n=Math.ceil(t/5),i=this.canvasConfig,r=i.width,s=i.height,o=this.chartConfig,a=o.stepY,l=o.y0,h=new Array(5).fill(n);h.map((function(e,t){h[t]=e*t})),h.forEach((function(t){var n=l+(s-a*t-l),i=String(Math.round(t));e.drawLine(0,n,r,n,"#9aa6ae"),e.drawText(c(i),3,n-10)}))},e.prototype.drawLine=function(e,t,n,i,r,s){void 0===r&&(r="#9aa6ae"),void 0===s&&(s=1);var o=this.ctx;o.beginPath(),o.fillStyle=r,o.moveTo(e,t),o.lineTo(n,i),o.strokeStyle=r,o.lineWidth=s,o.stroke()},e.prototype.drawText=function(e,t,n,i,r){void 0===i&&(i="#9aa6ae"),void 0===r&&(r=1);var s=this.ctx,o=this.chartConfig.font;s.beginPath(),s.fillStyle=i,s.font=o,s.fillText(e,t,n),s.strokeStyle=i,s.lineWidth=r,s.stroke()},e.prototype.drawDates=function(){var e=this,t=this.chartConfig,n=t.xPositions,i=t.datesPerLine,r=this.canvas.height,s=Math.round(n.length/i);n.filter((function(e,t){return!(t%s)})).forEach((function(t){e.drawText(t.date,t.xPosition,r,"#9da8af")}))},e.prototype.clearChart=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.chartConfig.xPositions=[]},e.prototype.setScreenOptions=function(){var e=this.chartConfig.y0;this.chartConfig.screenWidth=screen.width,this.chartConfig.isMobile=screen.width<=520;var t=this.chartConfig.isMobile;this.chartConfig.font=t?"300 25px sans-serif":"100 20px sans-serif",this.chartConfig.datesPerLine=t?6:8,this.canvasConfig={width:t?600:1800,height:500},this.canvas.width=this.canvasConfig.width,this.canvas.height=this.canvasConfig.height+e,document.addEventListener("resize",this.setScreenOptions)},e.prototype.renderChart=function(e){this.chartConfig=i(i({},this.chartConfig),e),this.drawShort({startDate:this.chartConfig.startDate,endDate:this.chartConfig.endDate})},e.prototype.onCanvasClick=function(e){var t=e.pageX,n=this.canvas.getBoundingClientRect(),r=n.left,a=n.width,c=(t-r)*(this.canvas.width/a),l=this.ctx.getImageData(c,0,1,500),h=[],u=this.chartConfig,d=u.columns,p=u.stepY,f=u.tooltipInfo,_=d.map((function(e){var t=s(e.color);return i(i({},e),{rgbColor:t})})),m=l.data.length/500/4;l.data.map((function(e,t){if(e){var n=t-t%4,i=n+4,r=l.data.slice(n,i),s={r:r[0],g:r[1],b:r[2],yPosition:n/(4*m)};_.forEach((function(e,t){var n=e.rgbColor;for(var i in n){if(Math.abs(n[i]-s[i])>.03*n[i])return}var r={yPosition:s.yPosition,name:e.name,color:e.color};h.push(r)}))}}));var g=o(h,d,p,0,500);f.x0!==c&&(this.chartConfig.tooltipInfo={yPoints:g,x0:c,clicked:!0},this.chartConfig.pageX=t,this.renderChart(),this.domElems.wrap.addEventListener("mousedown",this.clickOutside.bind(this)))},e.prototype.clickOutside=function(e){var t=e.target;t!==this.canvas&&t!==this.domElems.switchLabel&&(this.deleteTooltip(),this.renderChart())},e.prototype.drawTooltip=function(){var t=this.chartConfig,n=t.tooltipInfo,i=t.xPositions,r=t.dates,s=t.stepY,o=t.pageX,a=n.x0,c=n.yPoints,l=n.clicked;if(l){var h="";i.map((function(e,t){if(e.xPosition<=a&&i[t+1].xPosition>=a){var n=new Date(r[t].ms);h=n.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}}));l&&this.drawLine(a,100,a,500,"rgba(223, 230, 235, 0.5)",2);var u=this.domElems,d=u.tooltipElem,p=u.columnsElem,f=u.dateElem;this.chartConfig.tooltipInfo.node=d,this.chartConfig.tooltipInfo.date=h,d.style.display="flex";var _=d.getBoundingClientRect().width/2;for(var m in d.style.transform="translateX("+(o-_)+"px)",f.textContent=h,p.innerHTML=null,c){var g=c[m],y=500-g.yPosition*s,v=g.color;this.drawCircle(a,y,v),e.drawTooltipName(g,p)}}},e.prototype.deleteTooltip=function(){this.chartConfig.tooltipInfo.node.style.display="none",this.chartConfig.tooltipInfo.clicked=!1},e.prototype.drawCircle=function(e,t,n){var i=this.ctx,r=this.chartConfig.theme.subColor;i.strokeStyle=n,i.lineWidth=3,i.beginPath(),i.arc(e,t,5,0,2*Math.PI),i.fillStyle=r,i.fill(),i.stroke()},e.drawTooltipName=function(e,t){var n=document.createElement("div"),i=document.createElement("span"),r=document.createElement("span");i.textContent=e.yPosition,r.textContent=e.name,r.style.textTransform="uppercase",n.classList.add("column"),n.style.color=e.color,n.appendChild(i),n.appendChild(r),t.appendChild(n)},e}();e.exports=l},function(e,t){var n=function(){function e(t,n){this.slider=null,this.parent=null,this.data=[],this.sliderConfig={width:15,left:0,right:15,stepY:0},this.renderMethod=function(){};var i=t.slider,r=t.parent,s=t.method;this.slider=i,this.parent=r,this.data=n.columns[0],this.renderMethod=s,this.setConfig(t),this.setStyle(),this.makeDraggable(),this.initTouchEvents(),this.slider.style.left=e.getCoords(this.parent).right-e.getCoords(this.slider).width-e.getCoords(this.parent).left+"px",this.callChartRender()}return e.prototype.callChartRender=function(){var t=e.getCoords(this.parent),n=e.getCoords(this.slider),i=n.left,r=n.right,s=Math.floor(i/t.width*this.data.length),o=Math.ceil(r/t.width*this.data.length);this.renderMethod({startDate:s<=0?1:s,endDate:o})},e.prototype.setConfig=function(t){var n=t.longChart,i=e.getCoords(this.parent),r=10*(i.width/this.data.length<15?15:i.width/this.data.length);this.sliderConfig={width:r,left:0,right:r,stepY:n.chartConfig.stepY}},e.getCoords=function(e){var t=e.getBoundingClientRect();return{top:t.top,left:t.left,right:t.right,width:t.width}},e.prototype.setStyle=function(){var e=this.sliderConfig.width;this.slider.style.width=e+"px"},e.prototype.makeDraggable=function(){this.slider.ondragstart=function(){return!1},this.slider.addEventListener("mousedown",this.onMouseDown.bind(this))},e.prototype.onMouseDown=function(t){var n=this;t.preventDefault();var i=e.getCoords(this.slider);if(!(t.pageX<i.left||t.pageX>=i.right)){var r=e.getCoords(this.parent),s=t.pageX-i.left,o=function(){},a="",c=i.width,l=function(e){var t=e.pageX-s-r.left-n.slider.style.left.split("px")[0];if("left"===a){var i=n.slider.style.left.split("px")[0],o=n.slider.style.width.split("px")[0];n.sliderConfig.width=+o-t+"px",n.slider.style.width=+o-t+"px",n.slider.style.left=+i+t+"px"}else"right"===a&&(n.setStyle(),n.sliderConfig.width=c+t);n.callChartRender()},h=(this.slider.offsetWidth-this.slider.clientWidth)/2;t.pageX>=i.left&&t.pageX<=i.left+h?(o=l,a="left"):t.pageX>=i.right-h&&t.pageX<=i.right?(o=l,a="right"):o=function(e){var t=e.pageX-s-r.left;t<0&&(t=0);var i=n.parent.offsetWidth-n.slider.offsetWidth;t>i&&(t=i),n.slider.style.left=t+"px";var o=n.slider.style.left.split("px")[0],a=t+n.slider.offsetWidth;n.sliderConfig.left=o,n.sliderConfig.right=a,n.setStyle(),n.callChartRender()},o(t),this.slider.style.zIndex="1000";var u=function(e){e.preventDefault(),requestAnimationFrame((function(){o(e)}))},d=function(e){e.preventDefault(),n.slider.removeEventListener("mousemove",u),n.slider.removeEventListener("mouseup",d)};this.slider.addEventListener("mousemove",u),this.slider.addEventListener("mouseup",d)}},e.prototype.initTouchEvents=function(){function e(e){var t=e.changedTouches[0],n=document.createEvent("MouseEvent");n.initMouseEvent({touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"}[e.type],!0,!0,window,1,t.screenX,t.screenY,t.clientX,t.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(n)}document.addEventListener("touchstart",e,!0),document.addEventListener("touchmove",e,!0),document.addEventListener("touchend",e,!0),document.addEventListener("touchcancel",e,!0)},e}();e.exports=n},function(e,t,n){"use strict";n.r(t);var i=n(1);n.d(t,"FirebaseError",(function(){return i.a})),n.d(t,"SDK_VERSION",(function(){return i.b})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return i.c})),n.d(t,"_addComponent",(function(){return i.d})),n.d(t,"_addOrOverwriteComponent",(function(){return i.e})),n.d(t,"_apps",(function(){return i.f})),n.d(t,"_clearComponents",(function(){return i.g})),n.d(t,"_components",(function(){return i.h})),n.d(t,"_getProvider",(function(){return i.i})),n.d(t,"_registerComponent",(function(){return i.j})),n.d(t,"_removeServiceInstance",(function(){return i.k})),n.d(t,"deleteApp",(function(){return i.l})),n.d(t,"getApp",(function(){return i.m})),n.d(t,"getApps",(function(){return i.n})),n.d(t,"initializeApp",(function(){return i.o})),n.d(t,"onLog",(function(){return i.p})),n.d(t,"registerVersion",(function(){return i.q})),n.d(t,"setLogLevel",(function(){return i.r}));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(i.q)("firebase","9.5.0","app")},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var i=n(5);n.d(t,"DataSnapshot",(function(){return i.a})),n.d(t,"Database",(function(){return i.b})),n.d(t,"OnDisconnect",(function(){return i.c})),n.d(t,"QueryConstraint",(function(){return i.d})),n.d(t,"TransactionResult",(function(){return i.e})),n.d(t,"_QueryImpl",(function(){return i.f})),n.d(t,"_QueryParams",(function(){return i.g})),n.d(t,"_ReferenceImpl",(function(){return i.h})),n.d(t,"_TEST_ACCESS_forceRestClient",(function(){return i.i})),n.d(t,"_TEST_ACCESS_hijackHash",(function(){return i.j})),n.d(t,"_repoManagerDatabaseFromApp",(function(){return i.k})),n.d(t,"_setSDKVersion",(function(){return i.l})),n.d(t,"_validatePathString",(function(){return i.m})),n.d(t,"_validateWritablePath",(function(){return i.n})),n.d(t,"child",(function(){return i.o})),n.d(t,"connectDatabaseEmulator",(function(){return i.p})),n.d(t,"enableLogging",(function(){return i.q})),n.d(t,"endAt",(function(){return i.r})),n.d(t,"endBefore",(function(){return i.s})),n.d(t,"equalTo",(function(){return i.t})),n.d(t,"get",(function(){return i.u})),n.d(t,"getDatabase",(function(){return i.v})),n.d(t,"goOffline",(function(){return i.w})),n.d(t,"goOnline",(function(){return i.x})),n.d(t,"increment",(function(){return i.y})),n.d(t,"limitToFirst",(function(){return i.z})),n.d(t,"limitToLast",(function(){return i.A})),n.d(t,"off",(function(){return i.B})),n.d(t,"onChildAdded",(function(){return i.C})),n.d(t,"onChildChanged",(function(){return i.D})),n.d(t,"onChildMoved",(function(){return i.E})),n.d(t,"onChildRemoved",(function(){return i.F})),n.d(t,"onDisconnect",(function(){return i.G})),n.d(t,"onValue",(function(){return i.H})),n.d(t,"orderByChild",(function(){return i.I})),n.d(t,"orderByKey",(function(){return i.J})),n.d(t,"orderByPriority",(function(){return i.K})),n.d(t,"orderByValue",(function(){return i.L})),n.d(t,"push",(function(){return i.M})),n.d(t,"query",(function(){return i.N})),n.d(t,"ref",(function(){return i.O})),n.d(t,"refFromURL",(function(){return i.P})),n.d(t,"remove",(function(){return i.Q})),n.d(t,"runTransaction",(function(){return i.R})),n.d(t,"serverTimestamp",(function(){return i.S})),n.d(t,"set",(function(){return i.T})),n.d(t,"setPriority",(function(){return i.U})),n.d(t,"setWithPriority",(function(){return i.V})),n.d(t,"startAfter",(function(){return i.W})),n.d(t,"startAt",(function(){return i.X})),n.d(t,"update",(function(){return i.Y}))},function(e,t){var n,i,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var c,l=[],h=!1,u=-1;function d(){h&&c&&(h=!1,c.length?l=c.concat(l):u=-1,l.length&&p())}function p(){if(!h){var e=a(d);h=!0;for(var t=l.length;t;){for(c=l,l=[];++u<t;)c&&c[u].run();u=-1,t=l.length}c=null,h=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function _(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||h||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=_,r.addListener=_,r.once=_,r.off=_,r.removeListener=_,r.removeAllListeners=_,r.emit=_,r.prependListener=_,r.prependOnceListener=_,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}]);
//# sourceMappingURL=bundle.js.map
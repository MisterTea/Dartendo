(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.m2(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)H.m3(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=b.fs[0]
if(a)return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"(receiver) {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(receiver, this);"+"}")(b,H.iA,null)
else return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"() {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(this, null);"+"}")(b,H.iA,null)}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=H.iA(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var C={},H={ig:function ig(){},
iR(a,b,c){if(b.j("p<0>").b(a))return new H.c8(a,b.j("@<0>").O(c).j("c8<1,2>"))
return new H.aI(a,b.j("@<0>").O(c).j("aI<1,2>"))},
c(a){return new H.bM("Field '"+a+"' has not been initialized.")},
iz(a,b,c){return a},
kw(a,b,c,d){if(t.gw.b(a))return new H.aN(a,b,c.j("@<0>").O(d).j("aN<1,2>"))
return new H.aV(a,b,c.j("@<0>").O(d).j("aV<1,2>"))},
kp(){return new P.bg("No element")},
kq(){return new P.bg("Too many elements")},
aK:function aK(a,b){this.a=a
this.$ti=b},
b5:function b5(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
aq:function aq(){},
bB:function bB(a,b){this.a=a
this.$ti=b},
aI:function aI(a,b){this.a=a
this.$ti=b},
c8:function c8(a,b){this.a=a
this.$ti=b},
c6:function c6(){},
al:function al(a,b){this.a=a
this.$ti=b},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
bM:function bM(a){this.a=a},
p:function p(){},
af:function af(){},
aU:function aU(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aV:function aV(a,b,c){this.a=a
this.b=b
this.$ti=c},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
bS:function bS(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
bT:function bT(a,b,c){this.a=a
this.b=b
this.$ti=c},
aY:function aY(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
ae:function ae(){},
cs:function cs(){},
jG(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
lT(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
y(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bw(a)
return s},
dx(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
kB(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return H.a(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
h6(a){return H.ky(a)},
ky(a){var s,r,q,p
if(a instanceof P.u)return H.a6(H.aj(a),null)
if(J.bt(a)===C.N||t.ak.b(a)){s=C.m(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a6(H.aj(a),null)},
kz(){return Date.now()},
kA(){var s,r
if($.h7!==0)return
$.h7=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.h7=1e6
$.ik=new H.h5(r)},
j2(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
kD(a){var s,r,q,p=H.r([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.i4)(a),++r){q=a[r]
if(!H.hT(q))throw H.h(H.ea(q))
if(q<=65535)C.a.G(p,q)
else if(q<=1114111){C.a.G(p,55296+(C.b.l(q-65536,10)&1023))
C.a.G(p,56320+(q&1023))}else throw H.h(H.ea(q))}return H.j2(p)},
kC(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.hT(q))throw H.h(H.ea(q))
if(q<0)throw H.h(H.ea(q))
if(q>65535)return H.kD(a)}return H.j2(a)},
a(a,b){if(a==null)J.b1(a)
throw H.h(H.bs(a,b))},
bs(a,b){var s,r="index"
if(!H.hT(b))return new P.ac(!0,b,r,null)
s=H.Y(J.b1(a))
if(b<0||b>=s)return P.bI(b,a,r,null,s)
return P.kE(b,r)},
ea(a){return new P.ac(!0,a,null,null)},
h(a){var s,r
if(a==null)a=new P.dv()
s=new Error()
s.dartException=a
r=H.m4
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
m4(){return J.bw(this.dartException)},
b(a){throw H.h(a)},
i4(a){throw H.h(P.au(a))},
ap(a){var s,r,q,p,o,n
a=H.m_(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.r([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.hn(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ho(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
j9(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ih(a,b){var s=b==null,r=s?null:b.method
return new H.cV(a,r,s?null:b.receiver)},
T(a){if(a==null)return new H.fY(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.b0(a,a.dartException)
return H.lC(a)},
b0(a,b){if(t.W.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
lC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.l(r,16)&8191)===10)switch(q){case 438:return H.b0(a,H.ih(H.y(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.y(s)+" (Error "+q+")"
return H.b0(a,new H.c_(p,e))}}if(a instanceof TypeError){o=$.jO()
n=$.jP()
m=$.jQ()
l=$.jR()
k=$.jU()
j=$.jV()
i=$.jT()
$.jS()
h=$.jX()
g=$.jW()
f=o.aF(s)
if(f!=null)return H.b0(a,H.ih(H.H(s),f))
else{f=n.aF(s)
if(f!=null){f.method="call"
return H.b0(a,H.ih(H.H(s),f))}else{f=m.aF(s)
if(f==null){f=l.aF(s)
if(f==null){f=k.aF(s)
if(f==null){f=j.aF(s)
if(f==null){f=i.aF(s)
if(f==null){f=l.aF(s)
if(f==null){f=h.aF(s)
if(f==null){f=g.aF(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){H.H(s)
return H.b0(a,new H.c_(s,f==null?e:f.method))}}}return H.b0(a,new H.dK(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.c2()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.b0(a,new P.ac(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.c2()
return a},
ai(a){var s
if(a==null)return new H.cl(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.cl(a)},
lY(a){if(a==null||typeof a!="object")return J.eb(a)
else return H.dx(a)},
lK(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
lS(a,b,c,d,e,f){t.Y.a(a)
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.hv("Unsupported number of arguments for wrapped closure"))},
br(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lS)
a.$identity=s
return s},
ki(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new H.dD().constructor.prototype):Object.create(new H.b4(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else{q=$.am
if(typeof q!=="number")return q.aX()
$.am=q+1
q=new Function("a,b"+q,"this.$initialize(a,b"+q+")")
r=q}s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=H.iS(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=H.ke(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=H.iS(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ke(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw H.h("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,H.kb)}throw H.h("Error in functionType of tearoff")},
kf(a,b,c,d){var s=H.iP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
iS(a,b,c,d){var s,r,q,p,o,n="receiver"
if(c)return H.kh(a,b,d)
s=b.length
r=d||s>=27
if(r)return H.kf(s,d,a,b)
if(s===0){r=$.am
if(typeof r!=="number")return r.aX()
$.am=r+1
q="self"+r
r="return function(){var "+q+" = this."
p=$.bA
return new Function(r+(p==null?$.bA=H.eh(n):p)+";return "+q+"."+a+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
r=$.am
if(typeof r!=="number")return r.aX()
$.am=r+1
o+=r
r="return function("+o+"){return this."
p=$.bA
return new Function(r+(p==null?$.bA=H.eh(n):p)+"."+a+"("+o+");}")()},
kg(a,b,c,d){var s=H.iP,r=H.kc
switch(b?-1:a){case 0:throw H.h(new H.dA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
kh(a,b,c){var s,r,q,p,o,n=$.iO
if(n==null)n=$.iO=H.eh("interceptor")
s=$.bA
if(s==null)s=$.bA=H.eh("receiver")
r=b.length
q=c||r>=28
if(q)return H.kg(r,c,a,b)
if(r===1){q="return function(){return this."+n+"."+a+"(this."+s+");"
p=$.am
if(typeof p!=="number")return p.aX()
$.am=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
q="return function("+o+"){return this."+n+"."+a+"(this."+s+", "+o+");"
p=$.am
if(typeof p!=="number")return p.aX()
$.am=p+1
return new Function(q+p+"}")()},
iA(a){return H.ki(a)},
kb(a,b){return H.hP(v.typeUniverse,H.aj(a.a),b)},
iP(a){return a.a},
kc(a){return a.b},
eh(a){var s,r,q,p=new H.b4("receiver","interceptor"),o=J.iW(Object.getOwnPropertyNames(p),t.O)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.h(P.cB("Field name "+a+" not found.",null))},
R(a){if(a==null)H.lD("boolean expression must not be null")
return a},
lD(a){throw H.h(new H.dN(a))},
m2(a){throw H.h(new P.cM(a))},
lL(a){return v.getIsolateTag(a)},
mR(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lV(a){var s,r,q,p,o,n=H.H($.jB.$1(a)),m=$.hW[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.i2[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=H.jp($.jy.$2(a,n))
if(q!=null){m=$.hW[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.i2[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.i3(s)
$.hW[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.i2[n]=s
return s}if(p==="-"){o=H.i3(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.jE(a,s)
if(p==="*")throw H.h(P.ja(n))
if(v.leafTags[n]===true){o=H.i3(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.jE(a,s)},
jE(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.iD(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
i3(a){return J.iD(a,!1,null,!!a.$iX)},
lX(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.i3(s)
else return J.iD(s,c,null,null)},
lQ(){if(!0===$.iC)return
$.iC=!0
H.lR()},
lR(){var s,r,q,p,o,n,m,l
$.hW=Object.create(null)
$.i2=Object.create(null)
H.lP()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.jF.$1(o)
if(n!=null){m=H.lX(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
lP(){var s,r,q,p,o,n,m=C.z()
m=H.bq(C.A,H.bq(C.B,H.bq(C.n,H.bq(C.n,H.bq(C.C,H.bq(C.D,H.bq(C.E(C.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.jB=new H.i_(p)
$.jy=new H.i0(o)
$.jF=new H.i1(n)},
bq(a,b){return a(b)||b},
kv(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.h(P.ic("Illegal RegExp pattern ("+String(n)+")",a))},
m1(a,b,c){var s=a.indexOf(b,c)
return s>=0},
m_(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
h5:function h5(a){this.a=a},
hn:function hn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c_:function c_(a,b){this.a=a
this.b=b},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function dK(a){this.a=a},
fY:function fY(a){this.a=a},
cl:function cl(a){this.a=a
this.b=null},
aL:function aL(){},
cF:function cF(){},
cG:function cG(){},
dI:function dI(){},
dD:function dD(){},
b4:function b4(a,b){this.a=a
this.b=b},
dA:function dA(a){this.a=a},
dN:function dN(a){this.a=a},
a3:function a3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fS:function fS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aT:function aT(a,b){this.a=a
this.$ti=b},
bN:function bN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
i_:function i_(a){this.a=a},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
cU:function cU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
lc(a){return a},
bn(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bs(b,a))},
ds:function ds(){},
dt:function dt(){},
bc:function bc(){},
bd:function bd(){},
bW:function bW(){},
bV:function bV(){},
bX:function bX(){},
be:function be(){},
du:function du(){},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
j5(a,b){var s=b.c
return s==null?b.c=H.is(a,b.z,!0):s},
j4(a,b){var s=b.c
return s==null?b.c=H.co(a,"b8",[b.z]):s},
j6(a){var s=a.y
if(s===6||s===7||s===8)return H.j6(a.z)
return s===11||s===12},
kG(a){return a.cy},
jA(a){return H.it(v.typeUniverse,a,!1)},
aC(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aC(a,s,a0,a1)
if(r===s)return b
return H.jl(a,r,!0)
case 7:s=b.z
r=H.aC(a,s,a0,a1)
if(r===s)return b
return H.is(a,r,!0)
case 8:s=b.z
r=H.aC(a,s,a0,a1)
if(r===s)return b
return H.jk(a,r,!0)
case 9:q=b.Q
p=H.cy(a,q,a0,a1)
if(p===q)return b
return H.co(a,b.z,p)
case 10:o=b.z
n=H.aC(a,o,a0,a1)
m=b.Q
l=H.cy(a,m,a0,a1)
if(n===o&&l===m)return b
return H.iq(a,n,l)
case 11:k=b.z
j=H.aC(a,k,a0,a1)
i=b.Q
h=H.lz(a,i,a0,a1)
if(j===k&&h===i)return b
return H.jj(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cy(a,g,a0,a1)
o=b.z
n=H.aC(a,o,a0,a1)
if(f===g&&n===o)return b
return H.ir(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.h(P.ee("Attempted to substitute unexpected RTI kind "+c))}},
cy(a,b,c,d){var s,r,q,p,o=b.length,n=H.hQ(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aC(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
lA(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=H.hQ(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aC(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
lz(a,b,c,d){var s,r=b.a,q=H.cy(a,r,c,d),p=b.b,o=H.cy(a,p,c,d),n=b.c,m=H.lA(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.dW()
s.a=q
s.b=o
s.c=m
return s},
r(a,b){a[v.arrayRti]=b
return a},
lH(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lM(s)
return a.$S()}return null},
jC(a,b){var s
if(H.j6(b))if(a instanceof H.aL){s=H.lH(a)
if(s!=null)return s}return H.aj(a)},
aj(a){var s
if(a instanceof P.u){s=a.$ti
return s!=null?s:H.iv(a)}if(Array.isArray(a))return H.aB(a)
return H.iv(J.bt(a))},
aB(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
A(a){var s=a.$ti
return s!=null?s:H.iv(a)},
iv(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.lj(a,s)},
lj(a,b){var s=a instanceof H.aL?a.__proto__.__proto__.constructor:b,r=H.l7(v.typeUniverse,s.name)
b.$ccache=r
return r},
lM(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.it(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
li(a){var s,r,q,p,o=this
if(o===t.K)return H.bo(o,a,H.ln)
if(!H.ar(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return H.bo(o,a,H.lq)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=H.hT
else if(r===t.i||r===t.di)q=H.lm
else if(r===t.N)q=H.lo
else q=r===t.y?H.js:null
if(q!=null)return H.bo(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(H.lU)){o.r="$i"+p
if(p==="q")return H.bo(o,a,H.ll)
return H.bo(o,a,H.lp)}}else if(s===7)return H.bo(o,a,H.lg)
return H.bo(o,a,H.le)},
bo(a,b,c){a.b=c
return a.b(b)},
lh(a){var s,r=this,q=H.ld
if(!H.ar(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.lb
else if(r===t.K)q=H.la
else{s=H.cz(r)
if(s)q=H.lf}r.a=q
return r.a(a)},
hU(a){var s,r=a.y
if(!H.ar(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.hU(a.z)||a===t.P||a===t.u
else s=!0
else s=!0
else s=!0
else s=!0
return s},
le(a){var s=this
if(a==null)return H.hU(s)
return H.E(v.typeUniverse,H.jC(a,s),null,s,null)},
lg(a){if(a==null)return!0
return this.z.b(a)},
lp(a){var s,r=this
if(a==null)return H.hU(r)
s=r.r
if(a instanceof P.u)return!!a[s]
return!!J.bt(a)[s]},
ll(a){var s,r=this
if(a==null)return H.hU(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof P.u)return!!a[s]
return!!J.bt(a)[s]},
ld(a){var s,r=this
if(a==null){s=H.cz(r)
if(s)return a}else if(r.b(a))return a
H.jq(a,r)},
lf(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.jq(a,s)},
jq(a,b){throw H.h(H.kY(H.jc(a,H.jC(a,b),H.a6(b,null))))},
jc(a,b,c){var s=P.cO(a),r=H.a6(b==null?H.aj(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
kY(a){return new H.cm("TypeError: "+a)},
W(a,b){return new H.cm("TypeError: "+H.jc(a,null,b))},
ln(a){return a!=null},
la(a){if(a!=null)return a
throw H.h(H.W(a,"Object"))},
lq(a){return!0},
lb(a){return a},
js(a){return!0===a||!1===a},
iu(a){if(!0===a)return!0
if(!1===a)return!1
throw H.h(H.W(a,"bool"))},
mJ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.h(H.W(a,"bool"))},
mI(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.h(H.W(a,"bool?"))},
l9(a){if(typeof a=="number")return a
throw H.h(H.W(a,"double"))},
mL(a){if(typeof a=="number")return a
if(a==null)return a
throw H.h(H.W(a,"double"))},
mK(a){if(typeof a=="number")return a
if(a==null)return a
throw H.h(H.W(a,"double?"))},
hT(a){return typeof a=="number"&&Math.floor(a)===a},
Y(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.h(H.W(a,"int"))},
mN(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.h(H.W(a,"int"))},
mM(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.h(H.W(a,"int?"))},
lm(a){return typeof a=="number"},
jo(a){if(typeof a=="number")return a
throw H.h(H.W(a,"num"))},
mP(a){if(typeof a=="number")return a
if(a==null)return a
throw H.h(H.W(a,"num"))},
mO(a){if(typeof a=="number")return a
if(a==null)return a
throw H.h(H.W(a,"num?"))},
lo(a){return typeof a=="string"},
H(a){if(typeof a=="string")return a
throw H.h(H.W(a,"String"))},
mQ(a){if(typeof a=="string")return a
if(a==null)return a
throw H.h(H.W(a,"String"))},
jp(a){if(typeof a=="string")return a
if(a==null)return a
throw H.h(H.W(a,"String?"))},
lw(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a6(a[q],b)
return s},
jr(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.r([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)C.a.G(a5,"T"+(q+p))
for(o=t.O,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.a(a5,j)
m=C.d.aX(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.a6(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.a6(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.a6(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.a6(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.a6(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a6(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a6(a.z,b)
return s}if(l===7){r=a.z
s=H.a6(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.a6(a.z,b)+">"
if(l===9){p=H.lB(a.z)
o=a.Q
return o.length>0?p+("<"+H.lw(o,b)+">"):p}if(l===11)return H.jr(a,b,null)
if(l===12)return H.jr(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.a(b,n)
return b[n]}return"?"},
lB(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
l8(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
l7(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.it(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cp(a,5,"#")
q=H.hQ(s)
for(p=0;p<s;++p)q[p]=r
o=H.co(a,b,q)
n[b]=o
return o}else return m},
l5(a,b){return H.jm(a.tR,b)},
l4(a,b){return H.jm(a.eT,b)},
it(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.jh(H.jf(a,null,b,c))
r.set(b,s)
return s},
hP(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.jh(H.jf(a,b,c,!0))
q.set(c,r)
return r},
l6(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.iq(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aA(a,b){b.a=H.lh
b.b=H.li
return b},
cp(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aa(null,null)
s.y=b
s.cy=c
r=H.aA(a,s)
a.eC.set(c,r)
return r},
jl(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.l2(a,b,r,c)
a.eC.set(r,s)
return s},
l2(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ar(b))r=b===t.P||b===t.u||s===7||s===6
else r=!0
if(r)return b}q=new H.aa(null,null)
q.y=6
q.z=b
q.cy=c
return H.aA(a,q)},
is(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.l1(a,b,r,c)
a.eC.set(r,s)
return s},
l1(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.ar(b))if(!(b===t.P||b===t.u))if(s!==7)r=s===8&&H.cz(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.cz(q.z))return q
else return H.j5(a,b)}}p=new H.aa(null,null)
p.y=7
p.z=b
p.cy=c
return H.aA(a,p)},
jk(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.l_(a,b,r,c)
a.eC.set(r,s)
return s},
l_(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ar(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.co(a,"b8",[b])
else if(b===t.P||b===t.u)return t.eH}q=new H.aa(null,null)
q.y=8
q.z=b
q.cy=c
return H.aA(a,q)},
l3(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aa(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aA(a,s)
a.eC.set(q,r)
return r},
e7(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
kZ(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
co(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+H.e7(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aa(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aA(a,r)
a.eC.set(p,q)
return q},
iq(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.e7(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aa(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aA(a,o)
a.eC.set(q,n)
return n},
jj(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.e7(m)
if(j>0){s=l>0?",":""
r=H.e7(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.kZ(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aa(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aA(a,o)
a.eC.set(q,r)
return r},
ir(a,b,c,d){var s,r=b.cy+("<"+H.e7(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.l0(a,b,c,r,d)
a.eC.set(r,s)
return s},
l0(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=H.hQ(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aC(a,b,r,0)
m=H.cy(a,c,r,0)
return H.ir(a,n,m,c!==m)}}l=new H.aa(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aA(a,l)},
jf(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
jh(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.kT(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.jg(a,r,h,g,!1)
else if(q===46)r=H.jg(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.az(a.u,a.e,g.pop()))
break
case 94:g.push(H.l3(a.u,g.pop()))
break
case 35:g.push(H.cp(a.u,5,"#"))
break
case 64:g.push(H.cp(a.u,2,"@"))
break
case 126:g.push(H.cp(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.ip(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.co(p,n,o))
else{m=H.az(p,a.e,n)
switch(m.y){case 11:g.push(H.ir(p,m,o,a.n))
break
default:g.push(H.iq(p,m,o))
break}}break
case 38:H.kU(a,g)
break
case 42:p=a.u
g.push(H.jl(p,H.az(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.is(p,H.az(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.jk(p,H.az(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.dW()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
H.ip(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.jj(p,H.az(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.ip(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.kW(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.az(a.u,a.e,i)},
kT(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
jg(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.l8(s,o.z)[p]
if(n==null)H.b('No "'+p+'" in "'+H.kG(o)+'"')
d.push(H.hP(s,o,n))}else d.push(p)
return m},
kU(a,b){var s=b.pop()
if(0===s){b.push(H.cp(a.u,1,"0&"))
return}if(1===s){b.push(H.cp(a.u,4,"1&"))
return}throw H.h(P.ee("Unexpected extended operation "+H.y(s)))},
az(a,b,c){if(typeof c=="string")return H.co(a,c,a.sEA)
else if(typeof c=="number")return H.kV(a,b,c)
else return c},
ip(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.az(a,b,c[s])},
kW(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.az(a,b,c[s])},
kV(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.h(P.ee("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.h(P.ee("Bad index "+c+" for "+b.q(0)))},
E(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.ar(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.ar(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.E(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.u
if(s){if(p===8)return H.E(a,b,c,d.z,e)
return d===t.P||d===t.u||p===7||p===6}if(d===t.K){if(r===8)return H.E(a,b.z,c,d,e)
if(r===6)return H.E(a,b.z,c,d,e)
return r!==7}if(r===6)return H.E(a,b.z,c,d,e)
if(p===6){s=H.j5(a,d)
return H.E(a,b,c,s,e)}if(r===8){if(!H.E(a,b.z,c,d,e))return!1
return H.E(a,H.j4(a,b),c,d,e)}if(r===7){s=H.E(a,t.P,c,d,e)
return s&&H.E(a,b.z,c,d,e)}if(p===8){if(H.E(a,b,c,d.z,e))return!0
return H.E(a,b,c,H.j4(a,d),e)}if(p===7){s=H.E(a,b,c,t.P,e)
return s||H.E(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
if(p===12){if(b===t.b)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.E(a,k,c,j,e)||!H.E(a,j,e,k,c))return!1}return H.jt(a,b.z,c,d.z,e)}if(p===11){if(b===t.b)return!0
if(s)return!1
return H.jt(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.lk(a,b,c,d,e)}return!1},
jt(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.E(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!H.E(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.E(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.E(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!H.E(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
lk(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=H.hP(a,b,r[o])
return H.jn(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return H.jn(a,n,null,c,m,e)},
jn(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!H.E(a,r,d,q,f))return!1}return!0},
cz(a){var s,r=a.y
if(!(a===t.P||a===t.u))if(!H.ar(a))if(r!==7)if(!(r===6&&H.cz(a.z)))s=r===8&&H.cz(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
lU(a){var s
if(!H.ar(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
ar(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.O},
jm(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
hQ(a){return a>0?new Array(a):v.typeUniverse.sEA},
aa:function aa(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
dW:function dW(){this.c=this.b=this.a=null},
dT:function dT(){},
cm:function cm(a){this.a=a},
lZ(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
m3(a){return H.b(new H.bM("Field '"+a+"' has been assigned during initialization."))}},J={
iD(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hZ(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.iC==null){H.lQ()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.h(P.ja("Return interceptor for "+H.y(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.hH
if(o==null)o=$.hH=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.lV(a)
if(p!=null)return p
if(typeof a=="function")return C.O
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){o=$.hH
if(o==null)o=$.hH=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
kr(a,b){if(a<0||a>4294967295)throw H.h(P.dy(a,0,4294967295,"length",null))
return J.ks(new Array(a),b)},
ks(a,b){return J.iW(H.r(a,b.j("F<0>")),b)},
iW(a,b){a.fixed$length=Array
return a},
iX(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
kt(a,b){var s,r
for(s=a.length;b<s;){r=C.d.cR(a,b)
if(r!==32&&r!==13&&!J.iX(r))break;++b}return b},
ku(a,b){var s,r
for(;b>0;b=s){s=b-1
r=C.d.dk(a,s)
if(r!==32&&r!==13&&!J.iX(r))break}return b},
bt(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bJ.prototype
return J.cT.prototype}if(typeof a=="string")return J.aR.prototype
if(a==null)return J.bK.prototype
if(typeof a=="boolean")return J.cS.prototype
if(a.constructor==Array)return J.F.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
return a}if(a instanceof P.u)return a
return J.hZ(a)},
hX(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.F.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
return a}if(a instanceof P.u)return a
return J.hZ(a)},
hY(a){if(a==null)return a
if(a.constructor==Array)return J.F.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
return a}if(a instanceof P.u)return a
return J.hZ(a)},
iB(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.u))return J.bj.prototype
return a},
S(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
return a}if(a instanceof P.u)return a
return J.hZ(a)},
bu(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bt(a).be(a,b)},
iH(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lT(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.hX(a).H(a,b)},
jZ(a,b,c){return J.hY(a).h(a,b,c)},
k_(a,b,c,d){return J.S(a).eX(a,b,c,d)},
k0(a){return J.S(a).f1(a)},
k1(a,b,c,d){return J.S(a).fn(a,b,c,d)},
k2(a,b){return J.hY(a).aA(a,b)},
i5(a,b){return J.hY(a).ad(a,b)},
k3(a){return J.S(a).gfD(a)},
i6(a){return J.S(a).gdr(a)},
k4(a){return J.S(a).gfM(a)},
eb(a){return J.bt(a).gak(a)},
bv(a){return J.hY(a).ga2(a)},
b1(a){return J.hX(a).gE(a)},
iI(a){return J.S(a).gdD(a)},
k5(a){return J.S(a).gdE(a)},
k6(a){return J.S(a).gdF(a)},
iJ(a){return J.S(a).gdG(a)},
iK(a){return J.S(a).gdH(a)},
iL(a){return J.S(a).hb(a)},
k7(a,b){return J.S(a).sfb(a,b)},
iM(a,b){return J.S(a).sbA(a,b)},
k8(a,b){return J.S(a).sdw(a,b)},
ec(a,b){return J.S(a).scr(a,b)},
k9(a,b){return J.iB(a).e1(a,b)},
ka(a){return J.iB(a).hk(a)},
bw(a){return J.bt(a).q(a)},
iN(a){return J.iB(a).hl(a)},
K:function K(){},
cS:function cS(){},
bK:function bK(){},
aS:function aS(){},
dw:function dw(){},
bj:function bj(){},
an:function an(){},
F:function F(a){this.$ti=a},
fQ:function fQ(a){this.$ti=a},
aD:function aD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bL:function bL(){},
bJ:function bJ(){},
cT:function cT(){},
aR:function aR(){}},M={
kj(){var s,r
$.e=H.r([],t.f1)
for(s=0;s<256;++s){r=$.e
r.toString
C.a.G(r,new M.d(255,0,0,0))}r=$.e
r.toString
C.a.h(r,105,new M.d(0,5,2,2))
r=$.e
r.toString
C.a.h(r,101,new M.d(0,0,2,3))
r=$.e
r.toString
C.a.h(r,117,new M.d(0,6,2,4))
r=$.e
r.toString
C.a.h(r,109,new M.d(0,3,3,4))
r=$.e
r.toString
C.a.h(r,125,new M.d(0,8,3,4))
r=$.e
r.toString
C.a.h(r,121,new M.d(0,9,3,4))
r=$.e
r.toString
C.a.h(r,97,new M.d(0,10,2,6))
r=$.e
r.toString
C.a.h(r,113,new M.d(0,11,2,5))
r=$.e
r.toString
C.a.h(r,41,new M.d(1,5,2,2))
r=$.e
r.toString
C.a.h(r,37,new M.d(1,0,2,3))
r=$.e
r.toString
C.a.h(r,53,new M.d(1,6,2,4))
r=$.e
r.toString
C.a.h(r,45,new M.d(1,3,3,4))
r=$.e
r.toString
C.a.h(r,61,new M.d(1,8,3,4))
r=$.e
r.toString
C.a.h(r,57,new M.d(1,9,3,4))
r=$.e
r.toString
C.a.h(r,33,new M.d(1,10,2,6))
r=$.e
r.toString
C.a.h(r,49,new M.d(1,11,2,5))
r=$.e
r.toString
C.a.h(r,10,new M.d(2,4,1,2))
r=$.e
r.toString
C.a.h(r,6,new M.d(2,0,2,5))
r=$.e
r.toString
C.a.h(r,22,new M.d(2,6,2,6))
r=$.e
r.toString
C.a.h(r,14,new M.d(2,3,3,6))
r=$.e
r.toString
C.a.h(r,30,new M.d(2,8,3,7))
r=$.e
r.toString
C.a.h(r,144,new M.d(3,1,2,2))
r=$.e
r.toString
C.a.h(r,176,new M.d(4,1,2,2))
r=$.e
r.toString
C.a.h(r,240,new M.d(5,1,2,2))
r=$.e
r.toString
C.a.h(r,36,new M.d(6,0,2,3))
r=$.e
r.toString
C.a.h(r,44,new M.d(6,3,3,4))
r=$.e
r.toString
C.a.h(r,48,new M.d(7,1,2,2))
r=$.e
r.toString
C.a.h(r,208,new M.d(8,1,2,2))
r=$.e
r.toString
C.a.h(r,16,new M.d(9,1,2,2))
r=$.e
r.toString
C.a.h(r,0,new M.d(10,2,1,7))
r=$.e
r.toString
C.a.h(r,80,new M.d(11,1,2,2))
r=$.e
r.toString
C.a.h(r,112,new M.d(12,1,2,2))
r=$.e
r.toString
C.a.h(r,24,new M.d(13,2,1,2))
r=$.e
r.toString
C.a.h(r,216,new M.d(14,2,1,2))
r=$.e
r.toString
C.a.h(r,88,new M.d(15,2,1,2))
r=$.e
r.toString
C.a.h(r,184,new M.d(16,2,1,2))
r=$.e
r.toString
C.a.h(r,201,new M.d(17,5,2,2))
r=$.e
r.toString
C.a.h(r,197,new M.d(17,0,2,3))
r=$.e
r.toString
C.a.h(r,213,new M.d(17,6,2,4))
r=$.e
r.toString
C.a.h(r,205,new M.d(17,3,3,4))
r=$.e
r.toString
C.a.h(r,221,new M.d(17,8,3,4))
r=$.e
r.toString
C.a.h(r,217,new M.d(17,9,3,4))
r=$.e
r.toString
C.a.h(r,193,new M.d(17,10,2,6))
r=$.e
r.toString
C.a.h(r,209,new M.d(17,11,2,5))
r=$.e
r.toString
C.a.h(r,224,new M.d(18,5,2,2))
r=$.e
r.toString
C.a.h(r,228,new M.d(18,0,2,3))
r=$.e
r.toString
C.a.h(r,236,new M.d(18,3,3,4))
r=$.e
r.toString
C.a.h(r,192,new M.d(19,5,2,2))
r=$.e
r.toString
C.a.h(r,196,new M.d(19,0,2,3))
r=$.e
r.toString
C.a.h(r,204,new M.d(19,3,3,4))
r=$.e
r.toString
C.a.h(r,198,new M.d(20,0,2,5))
r=$.e
r.toString
C.a.h(r,214,new M.d(20,6,2,6))
r=$.e
r.toString
C.a.h(r,206,new M.d(20,3,3,6))
r=$.e
r.toString
C.a.h(r,222,new M.d(20,8,3,7))
r=$.e
r.toString
C.a.h(r,202,new M.d(21,2,1,2))
r=$.e
r.toString
C.a.h(r,136,new M.d(22,2,1,2))
r=$.e
r.toString
C.a.h(r,73,new M.d(23,5,2,2))
r=$.e
r.toString
C.a.h(r,69,new M.d(23,0,2,3))
r=$.e
r.toString
C.a.h(r,85,new M.d(23,6,2,4))
r=$.e
r.toString
C.a.h(r,77,new M.d(23,3,3,4))
r=$.e
r.toString
C.a.h(r,93,new M.d(23,8,3,4))
r=$.e
r.toString
C.a.h(r,89,new M.d(23,9,3,4))
r=$.e
r.toString
C.a.h(r,65,new M.d(23,10,2,6))
r=$.e
r.toString
C.a.h(r,81,new M.d(23,11,2,5))
r=$.e
r.toString
C.a.h(r,230,new M.d(24,0,2,5))
r=$.e
r.toString
C.a.h(r,246,new M.d(24,6,2,6))
r=$.e
r.toString
C.a.h(r,238,new M.d(24,3,3,6))
r=$.e
r.toString
C.a.h(r,254,new M.d(24,8,3,7))
r=$.e
r.toString
C.a.h(r,232,new M.d(25,2,1,2))
r=$.e
r.toString
C.a.h(r,200,new M.d(26,2,1,2))
r=$.e
r.toString
C.a.h(r,76,new M.d(27,3,3,3))
r=$.e
r.toString
C.a.h(r,108,new M.d(27,12,3,5))
r=$.e
r.toString
C.a.h(r,32,new M.d(28,3,3,6))
r=$.e
r.toString
C.a.h(r,169,new M.d(29,5,2,2))
r=$.e
r.toString
C.a.h(r,165,new M.d(29,0,2,3))
r=$.e
r.toString
C.a.h(r,181,new M.d(29,6,2,4))
r=$.e
r.toString
C.a.h(r,173,new M.d(29,3,3,4))
r=$.e
r.toString
C.a.h(r,189,new M.d(29,8,3,4))
r=$.e
r.toString
C.a.h(r,185,new M.d(29,9,3,4))
r=$.e
r.toString
C.a.h(r,161,new M.d(29,10,2,6))
r=$.e
r.toString
C.a.h(r,177,new M.d(29,11,2,5))
r=$.e
r.toString
C.a.h(r,162,new M.d(30,5,2,2))
r=$.e
r.toString
C.a.h(r,166,new M.d(30,0,2,3))
r=$.e
r.toString
C.a.h(r,182,new M.d(30,7,2,4))
r=$.e
r.toString
C.a.h(r,174,new M.d(30,3,3,4))
r=$.e
r.toString
C.a.h(r,190,new M.d(30,9,3,4))
r=$.e
r.toString
C.a.h(r,160,new M.d(31,5,2,2))
r=$.e
r.toString
C.a.h(r,164,new M.d(31,0,2,3))
r=$.e
r.toString
C.a.h(r,180,new M.d(31,6,2,4))
r=$.e
r.toString
C.a.h(r,172,new M.d(31,3,3,4))
r=$.e
r.toString
C.a.h(r,188,new M.d(31,8,3,4))
r=$.e
r.toString
C.a.h(r,74,new M.d(32,4,1,2))
r=$.e
r.toString
C.a.h(r,70,new M.d(32,0,2,5))
r=$.e
r.toString
C.a.h(r,86,new M.d(32,6,2,6))
r=$.e
r.toString
C.a.h(r,78,new M.d(32,3,3,6))
r=$.e
r.toString
C.a.h(r,94,new M.d(32,8,3,7))
r=$.e
r.toString
C.a.h(r,234,new M.d(33,2,1,2))
r=$.e
r.toString
C.a.h(r,9,new M.d(34,5,2,2))
r=$.e
r.toString
C.a.h(r,5,new M.d(34,0,2,3))
r=$.e
r.toString
C.a.h(r,21,new M.d(34,6,2,4))
r=$.e
r.toString
C.a.h(r,13,new M.d(34,3,3,4))
r=$.e
r.toString
C.a.h(r,29,new M.d(34,8,3,4))
r=$.e
r.toString
C.a.h(r,25,new M.d(34,9,3,4))
r=$.e
r.toString
C.a.h(r,1,new M.d(34,10,2,6))
r=$.e
r.toString
C.a.h(r,17,new M.d(34,11,2,5))
r=$.e
r.toString
C.a.h(r,72,new M.d(35,2,1,3))
r=$.e
r.toString
C.a.h(r,8,new M.d(36,2,1,3))
r=$.e
r.toString
C.a.h(r,104,new M.d(37,2,1,4))
r=$.e
r.toString
C.a.h(r,40,new M.d(38,2,1,4))
r=$.e
r.toString
C.a.h(r,42,new M.d(39,4,1,2))
r=$.e
r.toString
C.a.h(r,38,new M.d(39,0,2,5))
r=$.e
r.toString
C.a.h(r,54,new M.d(39,6,2,6))
r=$.e
r.toString
C.a.h(r,46,new M.d(39,3,3,6))
r=$.e
r.toString
C.a.h(r,62,new M.d(39,8,3,7))
r=$.e
r.toString
C.a.h(r,106,new M.d(40,4,1,2))
r=$.e
r.toString
C.a.h(r,102,new M.d(40,0,2,5))
r=$.e
r.toString
C.a.h(r,118,new M.d(40,6,2,6))
r=$.e
r.toString
C.a.h(r,110,new M.d(40,3,3,6))
r=$.e
r.toString
C.a.h(r,126,new M.d(40,8,3,7))
r=$.e
r.toString
C.a.h(r,64,new M.d(41,2,1,6))
r=$.e
r.toString
C.a.h(r,96,new M.d(42,2,1,6))
r=$.e
r.toString
C.a.h(r,233,new M.d(43,5,2,2))
r=$.e
r.toString
C.a.h(r,229,new M.d(43,0,2,3))
r=$.e
r.toString
C.a.h(r,245,new M.d(43,6,2,4))
r=$.e
r.toString
C.a.h(r,237,new M.d(43,3,3,4))
r=$.e
r.toString
C.a.h(r,253,new M.d(43,8,3,4))
r=$.e
r.toString
C.a.h(r,249,new M.d(43,9,3,4))
r=$.e
r.toString
C.a.h(r,225,new M.d(43,10,2,6))
r=$.e
r.toString
C.a.h(r,241,new M.d(43,11,2,5))
r=$.e
r.toString
C.a.h(r,56,new M.d(44,2,1,2))
r=$.e
r.toString
C.a.h(r,248,new M.d(45,2,1,2))
r=$.e
r.toString
C.a.h(r,120,new M.d(46,2,1,2))
r=$.e
r.toString
C.a.h(r,133,new M.d(47,0,2,3))
r=$.e
r.toString
C.a.h(r,149,new M.d(47,6,2,4))
r=$.e
r.toString
C.a.h(r,141,new M.d(47,3,3,4))
r=$.e
r.toString
C.a.h(r,157,new M.d(47,8,3,5))
r=$.e
r.toString
C.a.h(r,153,new M.d(47,9,3,5))
r=$.e
r.toString
C.a.h(r,129,new M.d(47,10,2,6))
r=$.e
r.toString
C.a.h(r,145,new M.d(47,11,2,6))
r=$.e
r.toString
C.a.h(r,134,new M.d(48,0,2,3))
r=$.e
r.toString
C.a.h(r,150,new M.d(48,7,2,4))
r=$.e
r.toString
C.a.h(r,142,new M.d(48,3,3,4))
r=$.e
r.toString
C.a.h(r,132,new M.d(49,0,2,3))
r=$.e
r.toString
C.a.h(r,148,new M.d(49,6,2,4))
r=$.e
r.toString
C.a.h(r,140,new M.d(49,3,3,4))
r=$.e
r.toString
C.a.h(r,170,new M.d(50,2,1,2))
r=$.e
r.toString
C.a.h(r,168,new M.d(51,2,1,2))
r=$.e
r.toString
C.a.h(r,186,new M.d(52,2,1,2))
r=$.e
r.toString
C.a.h(r,138,new M.d(53,2,1,2))
r=$.e
r.toString
C.a.h(r,154,new M.d(54,2,1,2))
r=$.e
r.toString
C.a.h(r,152,new M.d(55,2,1,2))},
kd(a){var s=new M.ej(a)
s.eb(a)
return s},
iY(a,b){$.n()
return new M.fR(P.I(255,!1,!1,t.y),$.n().F(8,0),b,a)},
bC(a){var s,r,q,p=t.x
if(p.a(window.location).search.length===0)return null
p=p.a(window.location).search
p.toString
s=C.d.e4(p,1).split("&")
for(r=0;r<s.length;++r){q=J.k9(s[r],"=")
if(0>=q.length)return H.a(q,0)
if(J.bu(q[0],a)){if(1>=q.length)return H.a(q,1)
return q[1]}}return null},
lW(){var s,r,q,p,o,n="#webGlCanvas",m=document,l=t.gA,k=l.a(m.querySelector(n)),j=t.cD.a(C.o.cz(l.a(m.querySelector(n)),"2d")),i=new P.hk()
$.iF()
s=t.S
r=t.g6
r=new M.cK(k,j,new M.cI(),i,P.ii(s,r),P.ii(s,r))
s=new M.h9(r)
j=m.querySelector("#menu")
j.toString
s.b=j
j=m.querySelector("#roms-label")
j.toString
s.c=j
j=m.querySelector("#roms-content")
j.toString
s.d=j
j=m.querySelector("#input-file")
j.toString
s.f=t.gk.a(j)
j=m.querySelector("#tv")
j.toString
s.e=j
j=m.querySelector("#heading")
j.toString
s.r=j
r.c=s
r.r=r.f=r.e=r.d=!1
r.dy=new M.cI()
q=i.b
if(q!=null){i.a=i.a+($.ik.$0()-q)
i.b=null}r.go=0
r.x=!1
r.k1=r.k3=r.id=r.k2=r.z=r.y=0
k=t.cT
r.sfl(new H.a3(k))
r.sfs(new H.a3(k))
P.v("READING PARAMS")
r.d=!1
p=M.bC("fps")
k=p!=null
if(!k||p==="")r.f=!0
else r.f=p==="on"
if(!k||p==="")r.r=!0
else r.r=p==="on"
p=M.bC("sound")
if(p==null||p===""){k=!!(window.AudioContext||window.webkitAudioContext)
k.toString
r.e=k}else r.e=p==="on"
p=M.bC("netplay")
P.v("NETPLAY: "+(p==null||p===""?r.x=!1:r.x=p==="on"))
p=M.bC("matchid")
if(p==null||p==="")r.y=0
else r.y=P.jD(p)
p=M.bC("playerid")
if(p==null||p==="")r.z=0
else r.z=P.jD(p)
k=new M.ed(r)
j=new M.fV(k,new M.h2())
j.ed(k)
k.c=j
r.cy=k
j=new M.ei(k.gbH())
m=m.querySelector(n)
m.toString
l.a(m)
j.a=m
m=C.o.cz(m,"2d")
m.toString
j.b=t.ar.a(m)
j.c=P.lJ(j.gdn(j).getImageData(0,0,256,240))
C.W.cc(J.i6(j.gbZ()),0,245760,255)
k.f=j
k.gcu()
k.d=M.iY(k.gbH(),0)
k.e=M.iY(k.gbH(),1)
m=k.gao().b
if(0>=m.length)return H.a(m,0)
m[0]=75
m=k.gao().b
if(1>=m.length)return H.a(m,1)
m[1]=74
m=k.gao().b
if(2>=m.length)return H.a(m,2)
m[2]=13
m=k.gao().b
if(3>=m.length)return H.a(m,3)
m[3]=77
m=k.gao().b
if(4>=m.length)return H.a(m,4)
m[4]=87
m=k.gao().b
if(5>=m.length)return H.a(m,5)
m[5]=83
m=k.gao().b
if(6>=m.length)return H.a(m,6)
m[6]=65
m=k.gao().b
if(7>=m.length)return H.a(m,7)
m[7]=68
m=k.gaD().b
if(0>=m.length)return H.a(m,0)
m[0]=88
m=k.gaD().b
if(1>=m.length)return H.a(m,1)
m[1]=90
m=k.gaD().b
if(2>=m.length)return H.a(m,2)
m[2]=13
m=k.gaD().b
if(3>=m.length)return H.a(m,3)
m[3]=77
m=k.gaD().b
if(4>=m.length)return H.a(m,4)
m[4]=73
m=k.gaD().b
if(5>=m.length)return H.a(m,5)
m[5]=75
m=k.gaD().b
if(6>=m.length)return H.a(m,6)
m[6]=74
k=k.gaD().b
if(7>=k.length)return H.a(k,7)
k[7]=76
k=$.at()
k.x=!0
k.e=0
k=r.db=r.cy.gbH()
o=k.ch
if(o)k.bv()
$.at()
if(o)k.bQ()
r.db.B(0)
P.iV(C.p,r.gd8(),t.H)
m=r.gdP()
m.fm()
m.fc()},
j1(a){var s=new M.ba(a)
s.N(a)
return s},
d3:function d3(a){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=0
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
d4:function d4(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
d5:function d5(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
d8:function d8(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
db:function db(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
dc:function dc(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
dd:function dd(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
df:function df(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
dg:function dg(a){var _=this
_.dy=_.dx=0
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
dh:function dh(a){var _=this
_.dx=0
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
di:function di(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
dk:function dk(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
dl:function dl(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
dm:function dm(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
dn:function dn(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
dq:function dq(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
ed:function ed(a){var _=this
_.b=a
_.f=_.e=_.d=_.c=null},
ei:function ei(a){var _=this
_.c=_.b=_.a=null
_.d=a
_.x=!1
_.y=0
_.z=!1},
fy:function fy(a){var _=this
_.a=a
_.d=_.c=_.b=!1
_.fx=_.fr=_.dy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=0},
fz:function fz(a){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=!1
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=0
_.fy=1
_.go=0},
cE:function cE(a,b){var _=this
_.a=a
_.b=b
_.z=_.x=_.r=_.f=_.e=_.d=_.c=!1
_.k3=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=0},
fA:function fA(a){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=!1
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=0},
cI:function cI(){},
d:function d(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
ej:function ej(a){var _=this
_.a=a
_.c=_.b=null
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=0
_.fr=!1
_.fy=_.fx=0
_.go=null
_.id=0
_.k3=_.k2=_.k1=!1
_.v=_.aa=_.a1=_.U=_.Y=_.a4=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=0
_.aB=null
_.a6=_.I=_.C=_.a5=_.m=_.W=_.M=0
_.aC=!1
_.as=_.aN=_.aw=$},
ek:function ek(){},
el:function el(a){this.a=a},
em:function em(a){this.a=a},
ex:function ex(a){this.a=a},
eI:function eI(a){this.a=a},
eT:function eT(a){this.a=a},
f3:function f3(a){this.a=a},
fe:function fe(a){this.a=a},
fp:function fp(a){this.a=a},
fu:function fu(a){this.a=a},
fv:function fv(a){this.a=a},
en:function en(a){this.a=a},
eo:function eo(a){this.a=a},
ep:function ep(a){this.a=a},
eq:function eq(a){this.a=a},
er:function er(a){this.a=a},
es:function es(a){this.a=a},
et:function et(a){this.a=a},
eu:function eu(a){this.a=a},
ev:function ev(a){this.a=a},
ew:function ew(a){this.a=a},
ey:function ey(a){this.a=a},
ez:function ez(a){this.a=a},
eA:function eA(a){this.a=a},
eB:function eB(a){this.a=a},
eC:function eC(a){this.a=a},
eD:function eD(a){this.a=a},
eE:function eE(a){this.a=a},
eF:function eF(a){this.a=a},
eG:function eG(a){this.a=a},
eH:function eH(a){this.a=a},
eJ:function eJ(a){this.a=a},
eK:function eK(a){this.a=a},
eL:function eL(a){this.a=a},
eM:function eM(){},
eN:function eN(a){this.a=a},
eO:function eO(a){this.a=a},
eP:function eP(a){this.a=a},
eQ:function eQ(a){this.a=a},
eR:function eR(a){this.a=a},
eS:function eS(a){this.a=a},
eU:function eU(a){this.a=a},
eV:function eV(a){this.a=a},
eW:function eW(a){this.a=a},
eX:function eX(a){this.a=a},
eY:function eY(a){this.a=a},
eZ:function eZ(a){this.a=a},
f_:function f_(a){this.a=a},
f0:function f0(a){this.a=a},
f1:function f1(a){this.a=a},
f2:function f2(a){this.a=a},
f4:function f4(a){this.a=a},
f5:function f5(a){this.a=a},
f6:function f6(a){this.a=a},
f7:function f7(a){this.a=a},
f8:function f8(a){this.a=a},
f9:function f9(a){this.a=a},
fa:function fa(){},
fb:function fb(a){this.a=a},
fc:function fc(a){this.a=a},
fd:function fd(){},
ff:function ff(a){this.a=a},
fg:function fg(a){this.a=a},
fh:function fh(a){this.a=a},
fi:function fi(a){this.a=a},
fj:function fj(a){this.a=a},
fk:function fk(a){this.a=a},
fl:function fl(a){this.a=a},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
fo:function fo(a){this.a=a},
fq:function fq(){},
fr:function fr(a){this.a=a},
fs:function fs(a){this.a=a},
ft:function ft(a){this.a=a},
hj:function hj(){this.e=255
this.x=!0
this.cx=!1},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cK:function cK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=null
_.x=_.r=_.f=_.e=_.d=!1
_.z=_.y=0
_.dx=_.db=_.cy=null
_.dy=c
_.fx=d
_.k3=_.k2=_.k1=_.id=_.go=_.fy=0
_.k4=e
_.r1=f},
fB:function fB(a){this.a=a},
fC:function fC(a){this.a=a},
cY:function cY(a){var _=this
_.dx=0
_.fx=_.fr=1
_.k3=_.k2=_.id=_.go=_.fy=0
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
cZ:function cZ(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
d_:function d_(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
d0:function d0(a){var _=this
_.id=_.go=_.fy=_.fr=_.dy=_.dx=0
_.k1=!1
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
d1:function d1(a){var _=this
_.dy=_.dx=0
_.fr=null
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
d2:function d2(a){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=0
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
d6:function d6(a,b){var _=this
_.dy=0
_.fx=a
_.fy=0
_.a=b
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
d7:function d7(a,b){var _=this
_.fr=_.dy=0
_.fx=a
_.a=b
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
d9:function d9(a,b){var _=this
_.fr=_.dy=0
_.fx=a
_.a=b
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
da:function da(a,b){var _=this
_.dx=a
_.a=b
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
de:function de(a,b){var _=this
_.dy=0
_.fx=a
_.a=b
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
dj:function dj(a,b){var _=this
_.dx=a
_.a=b
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
dp:function dp(a,b){var _=this
_.fr=0
_.fx=a
_.go=_.fy=0
_.a=b
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
dr:function dr(a,b){var _=this
_.fr=a
_.a=b
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
ba:function ba(a){var _=this
_.a=a
_.x=_.f=_.d=_.b=null
_.z=_.y=0
_.Q=-1
_.ch=!1},
bU:function bU(a){this.a=null
this.b=0
this.c=a},
bb:function bb(a,b){var _=this
_.c=_.b=null
_.d=a
_.e=b},
fV:function fV(a,b){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null
_.y=b
_.z=null
_.ch=!1
_.cx=null},
h2:function h2(){var _=this
_.a=-1
_.e=_.d=_.c=_.b=0},
fZ:function fZ(a,b){var _=this
_.a=a
_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=null
_.fr=4
_.fx=2048
_.id=0
_.k1=44100
_.rx=_.k3=_.k2=!1
_.aT=_.as=_.aN=_.aw=_.aS=_.ab=_.aC=_.a6=_.I=_.C=_.a5=_.m=_.W=_.M=_.v=_.aa=_.a1=_.U=_.Y=_.a4=0
_.bC=b
_.bo=_.fS=_.c9=_.aj=_.b9=_.b8=_.b7=_.aO=_.at=_.b6=_.b5=_.ds=_.aU=0},
h_:function h_(a,b){var _=this
_.a=a
_.c=_.b=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.f=0
_.fy=!0
_.go=null
_.a1=_.U=_.Y=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=0
_.C=_.a5=_.m=_.W=_.M=_.aB=_.v=null
_.a6=_.I=0
_.aC=!1
_.ab=b
_.aw=_.aS=null
_.aN=-1
_.aT=_.as=null
_.aU=_.bC=!1
_.b5=0
_.b6=!1
_.at=null
_.aO=!1
_.ca=_.dt=_.bo=_.aj=_.b9=_.b8=_.b7=null
_.cb=0},
h0:function h0(){},
h1:function h1(){},
h9:function h9(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null
_.y=0},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
hf:function hf(a){this.a=a},
hg:function hg(a){this.a=a},
hh:function hh(){},
hi:function hi(a){this.a=a},
ha:function ha(a){this.a=a},
hb:function hb(a,b){this.a=a
this.b=b},
h8:function h8(a,b){var _=this
_.r=_.e=_.d=_.c=null
_.Q=_.z=_.y=0
_.cy=_.ch=!1
_.db=0
_.fr=!1
_.fx=a
_.fy=b},
a5:function a5(a,b){var _=this
_.a=a
_.r=_.f=_.c=_.b=0
_.z=b},
fw:function fw(){},
dM:function dM(a){var _=this
_.a=null
_.b=a
_.e=_.d=_.c=null
_.f=!1}},P={
kL(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.lE()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.br(new P.hq(q),1)).observe(s,{childList:true})
return new P.hp(q,s,r)}else if(self.setImmediate!=null)return P.lF()
return P.lG()},
kM(a){self.scheduleImmediate(H.br(new P.hr(t.M.a(a)),0))},
kN(a){self.setImmediate(H.br(new P.hs(t.M.a(a)),0))},
kO(a){P.im(C.J,t.M.a(a))},
im(a,b){var s=C.b.ai(a.a,1000)
return P.kX(s<0?0:s,b)},
kX(a,b){var s=new P.hN()
s.ei(a,b)
return s},
ef(a,b){var s=H.iz(a,"error",t.K)
return new P.by(s,b==null?P.i8(a):b)},
i8(a){var s
if(t.W.b(a)){s=a.gbP()
if(s!=null)return s}return C.G},
iV(a,b,c){var s=new P.Q($.D,c.j("Q<0>"))
P.kI(a,new P.fN(b,s,c))
return s},
jd(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.by()
b.bU(a)
P.bm(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.d2(q)}},
bm(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
P.cw(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
P.bm(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
P.cw(i.a,i.b)
return}f=$.D
if(f!==g)$.D=g
else f=null
b=b.c
if((b&15)===8)new P.hF(p,c,m).$0()
else if(n){if((b&1)!==0)new P.hE(p,i).$0()}else if((b&2)!==0)new P.hD(c,p).$0()
if(f!=null)$.D=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.j("b8<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.bz(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else P.jd(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.bz(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
lv(a,b){var s
if(t.U.b(a))return b.dK(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw H.h(P.i7(a,"onError",u.c))},
lt(){var s,r
for(s=$.bp;s!=null;s=$.bp){$.cv=null
r=s.b
$.bp=r
if(r==null)$.cu=null
s.a.$0()}},
ly(){$.iw=!0
try{P.lt()}finally{$.cv=null
$.iw=!1
if($.bp!=null)$.iG().$1(P.jz())}},
jx(a){var s=new P.dO(a),r=$.cu
if(r==null){$.bp=$.cu=s
if(!$.iw)$.iG().$1(P.jz())}else $.cu=r.b=s},
lx(a){var s,r,q,p=$.bp
if(p==null){P.jx(a)
$.cv=$.cu
return}s=new P.dO(a)
r=$.cv
if(r==null){s.b=p
$.bp=$.cv=s}else{q=r.b
s.b=q
$.cv=r.b=s
if(q==null)$.cu=s}},
m0(a){var s=null,r=$.D
if(C.c===r){P.cx(s,s,C.c,a)
return}P.cx(s,s,r,t.M.a(r.c4(a)))},
kI(a,b){var s=$.D
if(s===C.c)return P.im(a,t.M.a(b))
return P.im(a,t.M.a(s.c4(b)))},
cw(a,b){P.lx(new P.hV(a,b))},
ju(a,b,c,d,e){var s,r=$.D
if(r===c)return d.$0()
$.D=c
s=r
try{r=d.$0()
return r}finally{$.D=s}},
jw(a,b,c,d,e,f,g){var s,r=$.D
if(r===c)return d.$1(e)
$.D=c
s=r
try{r=d.$1(e)
return r}finally{$.D=s}},
jv(a,b,c,d,e,f,g,h,i){var s,r=$.D
if(r===c)return d.$2(e,f)
$.D=c
s=r
try{r=d.$2(e,f)
return r}finally{$.D=s}},
cx(a,b,c,d){t.M.a(d)
if(C.c!==c)d=c.c4(d)
P.jx(d)},
hq:function hq(a){this.a=a},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
hN:function hN(){},
hO:function hO(a,b){this.a=a
this.b=b},
by:function by(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
c7:function c7(){},
c5:function c5(a,b){this.a=a
this.$ti=b},
cb:function cb(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
Q:function Q(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
hw:function hw(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
hy:function hy(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
hG:function hG(a){this.a=a},
hE:function hE(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
dO:function dO(a){this.a=a
this.b=null},
a4:function a4(){},
hl:function hl(a,b){this.a=a
this.b=b},
hm:function hm(a,b){this.a=a
this.b=b},
bh:function bh(){},
dE:function dE(){},
cr:function cr(){},
hV:function hV(a,b){this.a=a
this.b=b},
e2:function e2(){},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
j_(a,b,c){return b.j("@<0>").O(c).j("iZ<1,2>").a(H.lK(a,new H.a3(b.j("@<0>").O(c).j("a3<1,2>"))))},
ii(a,b){return new H.a3(a.j("@<0>").O(b).j("a3<1,2>"))},
bO(a){return new P.ay(a.j("ay<0>"))},
io(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
kS(a,b,c){var s=new P.b_(a,b,c.j("b_<0>"))
s.c=a.e
return s},
ko(a,b,c){var s,r
if(P.ix(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.r([],t.s)
C.a.G($.a2,a)
try{P.lr(a,s)}finally{if(0>=$.a2.length)return H.a($.a2,-1)
$.a2.pop()}r=P.j8(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
ie(a,b,c){var s,r
if(P.ix(a))return b+"..."+c
s=new P.dF(b)
C.a.G($.a2,a)
try{r=s
r.a=P.j8(r.a,a,", ")}finally{if(0>=$.a2.length)return H.a($.a2,-1)
$.a2.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ix(a){var s,r
for(s=$.a2.length,r=0;r<s;++r)if(a===$.a2[r])return!0
return!1},
lr(a,b){var s,r,q,p,o,n,m,l=a.ga2(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.S())return
s=H.y(l.ga0())
C.a.G(b,s)
k+=s.length+2;++j}if(!l.S()){if(j<=5)return
if(0>=b.length)return H.a(b,-1)
r=b.pop()
if(0>=b.length)return H.a(b,-1)
q=b.pop()}else{p=l.ga0();++j
if(!l.S()){if(j<=4){C.a.G(b,H.y(p))
return}r=H.y(p)
if(0>=b.length)return H.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.ga0();++j
for(;l.S();p=o,o=n){n=l.ga0();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.a(b,-1)
k-=b.pop().length+2;--j}C.a.G(b,"...")
return}}q=H.y(p)
r=H.y(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)C.a.G(b,m)
C.a.G(b,q)
C.a.G(b,r)},
fT(a,b){var s,r,q=P.bO(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.i4)(a),++r)q.G(0,b.a(a[r]))
return q},
j0(a){var s,r={}
if(P.ix(a))return"{...}"
s=new P.dF("")
try{C.a.G($.a2,a)
s.a+="{"
r.a=!0
a.aI(0,new P.fU(r,s))
s.a+="}"}finally{if(0>=$.a2.length)return H.a($.a2,-1)
$.a2.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ay:function ay(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
e_:function e_(a){this.a=a
this.c=this.b=null},
b_:function b_(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bP:function bP(){},
t:function t(){},
bR:function bR(){},
fU:function fU(a,b){this.a=a
this.b=b},
J:function J(){},
O:function O(){},
c1:function c1(){},
ci:function ci(){},
cc:function cc(){},
cj:function cj(){},
ct:function ct(){},
lu(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=H.T(r)
q=P.ic(String(s),null)
throw H.h(q)}q=P.hS(p)
return q},
hS(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.dY(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=P.hS(a[s])
return a},
dY:function dY(a,b){this.a=a
this.b=b
this.c=null},
dZ:function dZ(a){this.a=a},
cH:function cH(){},
cL:function cL(){},
cW:function cW(){},
cX:function cX(a){this.a=a},
jD(a){var s=H.kB(a,null)
if(s!=null)return s
throw H.h(P.ic(a,null))},
kl(a){if(a instanceof H.aL)return a.q(0)
return"Instance of '"+H.h6(a)+"'"},
I(a,b,c,d){var s,r=J.kr(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
kH(a){var s=a,r=s.length,q=P.il(0,null,r)
return H.kC(q<r?s.slice(0,q):s)},
kF(a){return new H.cU(a,H.kv(a,!1,!0,!1,!1,!1))},
j8(a,b,c){var s=J.bv(b)
if(!s.S())return a
if(c.length===0){do a+=H.y(s.ga0())
while(s.S())}else{a+=H.y(s.ga0())
for(;s.S();)a=a+c+H.y(s.ga0())}return a},
cO(a){if(typeof a=="number"||H.js(a)||a==null)return J.bw(a)
if(typeof a=="string")return JSON.stringify(a)
return P.kl(a)},
ee(a){return new P.bx(a)},
cB(a,b){return new P.ac(!1,null,b,a)},
i7(a,b,c){return new P.ac(!0,a,b,c)},
kE(a,b){return new P.c0(null,null,!0,a,b,"Value not in range")},
dy(a,b,c,d,e){return new P.c0(b,c,!0,a,d,"Invalid value")},
il(a,b,c){if(0>a||a>c)throw H.h(P.dy(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.dy(b,a,c,"end",null))
return b}return c},
j3(a,b){if(a<0)throw H.h(P.dy(a,0,null,b,null))
return a},
bI(a,b,c,d,e){var s=H.Y(e==null?J.b1(b):e)
return new P.cR(s,!0,a,c,"Index out of range")},
ax(a){return new P.dL(a)},
ja(a){return new P.dJ(a)},
dC(a){return new P.bg(a)},
au(a){return new P.cJ(a)},
ic(a,b){return new P.fM(a,b)},
v(a){H.lZ(a)},
j7(a,b,c,d){return new H.aJ(a,b,c.j("@<0>").O(d).j("aJ<1,2>"))},
b7:function b7(a){this.a=a},
fJ:function fJ(){},
fK:function fK(){},
B:function B(){},
bx:function bx(a){this.a=a},
aw:function aw(){},
dv:function dv(){},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c0:function c0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cR:function cR(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dL:function dL(a){this.a=a},
dJ:function dJ(a){this.a=a},
bg:function bg(a){this.a=a},
cJ:function cJ(a){this.a=a},
c2:function c2(){},
cM:function cM(a){this.a=a},
hv:function hv(a){this.a=a},
fM:function fM(a,b){this.a=a
this.b=b},
l:function l(){},
L:function L(){},
M:function M(){},
u:function u(){},
e4:function e4(){},
hk:function hk(){this.b=this.a=0},
dF:function dF(a){this.a=a},
lJ(a){var s,r,q,p
if(t.gb.b(a)){s=J.i6(a)
r=s.constructor===Array
r.toString
if(r){r=typeof CanvasPixelArray!=="undefined"
r.toString
if(r){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}}return a}r=a.data
r.toString
q=a.height
q.toString
p=a.width
p.toString
return new P.cn(r,q,p)},
lI(a){if(a instanceof P.cn)return{data:a.a,height:a.b,width:a.c}
return a},
i9(){var s=window.navigator.userAgent
s.toString
return s},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(){},
fE:function fE(a){this.a=a},
fD:function fD(a,b){this.a=a
this.b=b},
fF:function fF(){},
bf:function bf(){},
cC:function cC(a){this.a=a},
i:function i(){},
eg:function eg(){},
aE:function aE(){},
w:function w(){},
ak:function ak(){},
bz:function bz(){},
aX:function aX(){},
dz:function dz(){}},W={
kk(a,b,c){var s,r=document.body
r.toString
s=t.ac
s=new H.aY(new W.P(C.l.au(r,a,b,c)),s.j("G(t.E)").a(new W.fL()),s.j("aY<t.E>"))
return t.h.a(s.gaY(s))},
bE(a){var s,r,q="element tag unavailable"
try{s=J.S(a)
s.gdQ(a)
q=s.gdQ(a)}catch(r){H.T(r)}return q},
km(a){return W.kn(a,null,null).cs(new W.fO(),t.N)},
kn(a,b,c){var s,r,q,p=new P.Q($.D,t.ao),o=new P.c5(p,t.bj),n=new XMLHttpRequest()
n.toString
C.M.h5(n,"GET",a,!0)
s=t.gx
r=s.a(new W.fP(n,o))
t.Z.a(null)
q=t.p
W.V(n,"load",r,!1,q)
W.V(n,"error",s.a(o.gfG()),!1,q)
n.send()
return p},
kP(a,b){var s,r=a.classList
r.toString
for(s=b.ga2(b);s.S();)r.add(s.ga0())},
V(a,b,c,d,e){var s=c==null?null:W.iy(new W.ht(c),t.B)
s=new W.ca(a,b,s,!1,e.j("ca<0>"))
s.d7()
return s},
je(a){var s=document
s=s.createElement("a")
s.toString
s=new W.e3(s,t.x.a(window.location))
s=new W.aZ(s)
s.eg(a)
return s},
kQ(a,b,c,d){t.h.a(a)
H.H(b)
H.H(c)
t.G.a(d)
return!0},
kR(a,b,c,d){var s,r,q,p,o
t.h.a(a)
H.H(b)
H.H(c)
s=t.G.a(d).a
r=s.a
C.x.sfV(r,c)
q=r.hostname
s=s.b
if(q==s.hostname){p=r.port
o=s.port
o.toString
if(p===o){p=r.protocol
s=s.protocol
s.toString
s=p===s}else s=!1}else s=!1
if(!s)if(q==="")if(r.port===""){s=r.protocol
s=s===":"||s===""}else s=!1
else s=!1
else s=!0
return s},
ji(){var s=t.N,r=P.fT(C.r,s),q=t.dG.a(new W.hM()),p=H.r(["TEMPLATE"],t.s)
s=new W.e6(r,P.bO(s),P.bO(s),P.bO(s),null)
s.eh(null,new H.bT(C.r,q,t.dv),p,null)
return s},
iy(a,b){var s=$.D
if(s===C.c)return a
return s.fE(a,b)},
k:function k(){},
b2:function b2(){},
cA:function cA(){},
b3:function b3(){},
cD:function cD(){},
aF:function aF(){},
aG:function aG(){},
aH:function aH(){},
ad:function ad(){},
b6:function b6(){},
fG:function fG(){},
aM:function aM(){},
fH:function fH(){},
cN:function cN(){},
fI:function fI(){},
C:function C(){},
fL:function fL(){},
f:function f(){},
x:function x(){},
a_:function a_(){},
cP:function cP(){},
bF:function bF(){},
cQ:function cQ(){},
bG:function bG(){},
a7:function a7(){},
fO:function fO(){},
fP:function fP(a,b){this.a=a
this.b=b},
bH:function bH(){},
aQ:function aQ(){},
b9:function b9(){},
ao:function ao(){},
bQ:function bQ(){},
a1:function a1(){},
P:function P(a){this.a=a},
m:function m(){},
bY:function bY(){},
a9:function a9(){},
dB:function dB(){},
c3:function c3(){},
dG:function dG(){},
dH:function dH(){},
bi:function bi(){},
ah:function ah(){},
bk:function bk(){},
bl:function bl(){},
cd:function cd(){},
dP:function dP(){},
dR:function dR(a){this.a=a},
dS:function dS(a){this.a=a},
ib:function ib(a,b){this.a=a
this.$ti=b},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
U:function U(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ca:function ca(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
aZ:function aZ(a){this.a=a},
a0:function a0(){},
bZ:function bZ(a){this.a=a},
fX:function fX(a){this.a=a},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
ck:function ck(){},
hK:function hK(){},
hL:function hL(){},
e6:function e6(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hM:function hM(){},
e5:function e5(){},
aO:function aO(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e3:function e3(a,b){this.a=a
this.b=b},
cq:function cq(a){this.a=a
this.b=0},
hR:function hR(a){this.a=a},
dQ:function dQ(){},
dU:function dU(){},
dV:function dV(){},
e0:function e0(){},
e1:function e1(){},
e8:function e8(){},
e9:function e9(){}}
var w=[C,H,J,M,P,W]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ig.prototype={}
J.K.prototype={
be(a,b){return a===b},
gak(a){return H.dx(a)},
q(a){return"Instance of '"+H.h6(a)+"'"}}
J.cS.prototype={
q(a){return String(a)},
gak(a){return a?519018:218159},
$iG:1}
J.bK.prototype={
be(a,b){return null==b},
q(a){return"null"},
gak(a){return 0},
$iM:1}
J.aS.prototype={
gak(a){return 0},
q(a){return String(a)}}
J.dw.prototype={}
J.bj.prototype={}
J.an.prototype={
q(a){var s=a[$.jJ()]
if(s==null)return this.e7(a)
return"JavaScript function for "+J.bw(s)},
$iaP:1}
J.F.prototype={
aA(a,b){return new H.al(a,H.aB(a).j("@<1>").O(b).j("al<1,2>"))},
G(a,b){H.aB(a).c.a(b)
if(!!a.fixed$length)H.b(P.ax("add"))
a.push(b)},
aI(a,b){var s,r
H.aB(a).j("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw H.h(P.au(a))}},
ad(a,b){H.Y(b)
if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
dd(a,b){var s,r
H.aB(a).j("G(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(H.R(b.$1(a[r])))return!0
if(a.length!==s)throw H.h(P.au(a))}return!1},
an(a,b){var s
for(s=0;s<a.length;++s)if(J.bu(a[s],b))return!0
return!1},
q(a){return P.ie(a,"[","]")},
ga2(a){return new J.aD(a,a.length,H.aB(a).j("aD<1>"))},
gak(a){return H.dx(a)},
gE(a){return a.length},
H(a,b){if(b>=a.length||b<0)throw H.h(H.bs(a,b))
return a[b]},
h(a,b,c){H.aB(a).c.a(c)
if(!!a.immutable$list)H.b(P.ax("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bs(a,b))
a[b]=c},
$ip:1,
$il:1,
$iq:1}
J.fQ.prototype={}
J.aD.prototype={
ga0(){return this.$ti.c.a(this.d)},
S(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.h(H.i4(q))
s=r.c
if(s>=p){r.scV(null)
return!1}r.scV(q[s]);++r.c
return!0},
scV(a){this.d=this.$ti.j("1?").a(a)},
$iL:1}
J.bL.prototype={
bc(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.h(P.ax(""+a+".toInt()"))},
cd(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.h(P.ax(""+a+".floor()"))},
q(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gak(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
V(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aK(a,b){H.jo(b)
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d6(a,b)},
ai(a,b){return(a|0)===a?a/b|0:this.d6(a,b)},
d6(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.h(P.ax("Result of truncating division is "+H.y(s)+": "+H.y(a)+" ~/ "+b))},
bk(a,b){return b>31?0:a<<b>>>0},
cG(a,b){var s
if(b<0)throw H.h(H.ea(b))
if(a>0)s=this.d5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
l(a,b){var s
if(a>0)s=this.d5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
d5(a,b){return b>31?0:a>>>b},
$iZ:1,
$ias:1}
J.bJ.prototype={$io:1}
J.cT.prototype={}
J.aR.prototype={
dk(a,b){if(b<0)throw H.h(H.bs(a,b))
if(b>=a.length)H.b(H.bs(a,b))
return a.charCodeAt(b)},
cR(a,b){if(b>=a.length)throw H.h(H.bs(a,b))
return a.charCodeAt(b)},
aX(a,b){H.H(b)
return a+b},
e1(a,b){var s=H.r(a.split(b),t.s)
return s},
e3(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
cK(a,b,c){return a.substring(b,P.il(b,c,a.length))},
e4(a,b){return this.cK(a,b,null)},
hk(a){return a.toLowerCase()},
hl(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.cR(p,0)===133){s=J.kt(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.dk(p,r)===133?J.ku(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
c8(a,b,c){var s=a.length
if(c>s)throw H.h(P.dy(c,0,s,null,null))
return H.m1(a,b,c)},
q(a){return a},
gak(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gE(a){return a.length},
$ih4:1,
$ij:1}
H.aK.prototype={
bE(a,b,c,d){var s,r=this.$ti
r.j("~(2)?").a(a)
s=this.a.dz(null,!0,t.Z.a(c))
r=new H.b5(s,$.D,r.j("@<1>").O(r.Q[1]).j("b5<1,2>"))
s.ck(r.gfi())
r.ck(a)
r.cl(0,d)
return r},
dz(a,b,c){return this.bE(a,b,c,null)},
aA(a,b){return new H.aK(this.a,this.$ti.j("@<1>").O(b).j("aK<1,2>"))}}
H.b5.prototype={
ck(a){var s=this.$ti
s.j("~(2)?").a(a)
this.sf8(a==null?null:t.gu.O(s.Q[1]).j("1(2)").a(a))},
cl(a,b){var s=this
s.a.cl(0,b)
if(b==null)s.d=null
else if(t.k.b(b))s.d=s.b.dK(b,t.z,t.K,t.l)
else if(t.d5.b(b))s.d=t.v.a(b)
else throw H.h(P.cB("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
fj(a){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(a)
o=m.c
if(o==null)return
s=null
try{s=l.Q[1].a(a)}catch(n){r=H.T(n)
q=H.ai(n)
p=m.d
if(p==null)P.cw(t.K.a(r),t.l.a(q))
else{l=t.K
o=m.b
if(t.k.b(p))o.hh(p,r,q,l,t.l)
else o.cq(t.d5.a(p),r,l)}return}m.b.cq(o,s,l.Q[1])},
sf8(a){this.c=this.$ti.j("~(2)?").a(a)},
$ibh:1}
H.aq.prototype={
ga2(a){var s=H.A(this)
return new H.bB(J.bv(this.gb2()),s.j("@<1>").O(s.Q[1]).j("bB<1,2>"))},
gE(a){return J.b1(this.gb2())},
ad(a,b){H.Y(b)
return H.A(this).Q[1].a(J.i5(this.gb2(),b))},
q(a){return J.bw(this.gb2())}}
H.bB.prototype={
S(){return this.a.S()},
ga0(){return this.$ti.Q[1].a(this.a.ga0())},
$iL:1}
H.aI.prototype={
aA(a,b){return H.iR(this.a,H.A(this).c,b)},
gb2(){return this.a}}
H.c8.prototype={$ip:1}
H.c6.prototype={
H(a,b){return this.$ti.Q[1].a(J.iH(this.a,b))},
h(a,b,c){var s=this.$ti
J.jZ(this.a,b,s.c.a(s.Q[1].a(c)))},
$ip:1,
$iq:1}
H.al.prototype={
aA(a,b){return new H.al(this.a,this.$ti.j("@<1>").O(b).j("al<1,2>"))},
gb2(){return this.a}}
H.aJ.prototype={
aA(a,b){return new H.aJ(this.a,this.b,this.$ti.j("@<1>").O(b).j("aJ<1,2>"))},
$ip:1,
$iN:1,
gb2(){return this.a}}
H.bM.prototype={
q(a){var s="LateInitializationError: "+this.a
return s}}
H.p.prototype={}
H.af.prototype={
ga2(a){var s=this
return new H.aU(s,s.gE(s),H.A(s).j("aU<af.E>"))},
bJ(a,b){return this.e6(0,H.A(this).j("G(af.E)").a(b))}}
H.aU.prototype={
ga0(){return this.$ti.c.a(this.d)},
S(){var s,r=this,q=r.a,p=J.hX(q),o=p.gE(q)
if(r.b!==o)throw H.h(P.au(q))
s=r.c
if(s>=o){r.sbg(null)
return!1}r.sbg(p.ad(q,s));++r.c
return!0},
sbg(a){this.d=this.$ti.j("1?").a(a)},
$iL:1}
H.aV.prototype={
ga2(a){var s=H.A(this)
return new H.bS(J.bv(this.a),this.b,s.j("@<1>").O(s.Q[1]).j("bS<1,2>"))},
gE(a){return J.b1(this.a)},
ad(a,b){return this.b.$1(J.i5(this.a,b))}}
H.aN.prototype={$ip:1}
H.bS.prototype={
S(){var s=this,r=s.b
if(r.S()){s.sbg(s.c.$1(r.ga0()))
return!0}s.sbg(null)
return!1},
ga0(){return this.$ti.Q[1].a(this.a)},
sbg(a){this.a=this.$ti.j("2?").a(a)}}
H.bT.prototype={
gE(a){return J.b1(this.a)},
ad(a,b){return this.b.$1(J.i5(this.a,H.Y(b)))}}
H.aY.prototype={
ga2(a){return new H.c4(J.bv(this.a),this.b,this.$ti.j("c4<1>"))}}
H.c4.prototype={
S(){var s,r
for(s=this.a,r=this.b;s.S();)if(H.R(r.$1(s.ga0())))return!0
return!1},
ga0(){return this.a.ga0()}}
H.ae.prototype={}
H.cs.prototype={}
H.h5.prototype={
$0(){return C.e.cd(1000*this.a.now())},
$S:15}
H.hn.prototype={
aF(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
H.c_.prototype={
q(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.cV.prototype={
q(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.dK.prototype={
q(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.fY.prototype={
q(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.cl.prototype={
q(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iab:1}
H.aL.prototype={
q(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.jG(r==null?"unknown":r)+"'"},
$iaP:1,
ghp(){return this},
$C:"$1",
$R:1,
$D:null}
H.cF.prototype={$C:"$0",$R:0}
H.cG.prototype={$C:"$2",$R:2}
H.dI.prototype={}
H.dD.prototype={
q(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.jG(s)+"'"}}
H.b4.prototype={
be(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.b4))return!1
return this.$_target===b.$_target&&this.a===b.a},
gak(a){return(H.lY(this.a)^H.dx(this.$_target))>>>0},
q(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+H.h6(t.K.a(this.a))+"'")}}
H.dA.prototype={
q(a){return"RuntimeError: "+this.a}}
H.dN.prototype={
q(a){return"Assertion failed: "+P.cO(this.a)}}
H.a3.prototype={
gE(a){return this.a},
gaE(){return new H.aT(this,H.A(this).j("aT<1>"))},
fH(a){var s
if((a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.f5(s,a)}else return this.fX(a)},
fX(a){var s=this.d
if(s==null)return!1
return this.cf(this.bY(s,C.b.gak(a)&0x3ffffff),a)>=0},
H(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bx(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bx(p,b)
q=r==null?n:r.b
return q}else return o.fY(b)},
fY(a){var s,r,q=this.d
if(q==null)return null
s=this.bY(q,J.eb(a)&0x3ffffff)
r=this.cf(s,a)
if(r<0)return null
return s[r].b},
h(a,b,c){var s,r,q,p,o,n,m=this,l=H.A(m)
l.c.a(b)
l.Q[1].a(c)
if(typeof b=="string"){s=m.b
m.cL(s==null?m.b=m.c_():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cL(r==null?m.c=m.c_():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.c_()
p=J.eb(b)&0x3ffffff
o=m.bY(q,p)
if(o==null)m.c1(q,p,[m.bT(b,c)])
else{n=m.cf(o,b)
if(n>=0)o[n].b=c
else o.push(m.bT(b,c))}}},
b4(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cN()}},
aI(a,b){var s,r,q=this
H.A(q).j("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw H.h(P.au(q))
s=s.c}},
cL(a,b,c){var s,r=this,q=H.A(r)
q.c.a(b)
q.Q[1].a(c)
s=r.bx(a,b)
if(s==null)r.c1(a,b,r.bT(b,c))
else s.b=c},
cN(){this.r=this.r+1&67108863},
bT(a,b){var s=this,r=H.A(s),q=new H.fS(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cN()
return q},
cf(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bu(a[r].a,b))return r
return-1},
q(a){return P.j0(this)},
bx(a,b){return a[b]},
bY(a,b){return a[b]},
c1(a,b,c){a[b]=c},
f6(a,b){delete a[b]},
f5(a,b){return this.bx(a,b)!=null},
c_(){var s="<non-identifier-key>",r=Object.create(null)
this.c1(r,s,r)
this.f6(r,s)
return r},
$iiZ:1}
H.fS.prototype={}
H.aT.prototype={
gE(a){return this.a.a},
ga2(a){var s=this.a,r=new H.bN(s,s.r,this.$ti.j("bN<1>"))
r.c=s.e
return r}}
H.bN.prototype={
ga0(){return this.d},
S(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.h(P.au(q))
s=r.c
if(s==null){r.scM(null)
return!1}else{r.scM(s.a)
r.c=s.c
return!0}},
scM(a){this.d=this.$ti.j("1?").a(a)},
$iL:1}
H.i_.prototype={
$1(a){return this.a(a)},
$S:7}
H.i0.prototype={
$2(a,b){return this.a(a,b)},
$S:16}
H.i1.prototype={
$1(a){return this.a(H.H(a))},
$S:25}
H.cU.prototype={
q(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ih4:1}
H.ds.prototype={$iiQ:1}
H.dt.prototype={}
H.bc.prototype={
gE(a){return a.length},
$iX:1}
H.bd.prototype={
H(a,b){H.bn(b,a,a.length)
return a[b]},
h(a,b,c){H.l9(c)
H.bn(b,a,a.length)
a[b]=c},
$ip:1,
$il:1,
$iq:1}
H.bW.prototype={
h(a,b,c){H.Y(c)
H.bn(b,a,a.length)
a[b]=c},
$ip:1,
$il:1,
$iq:1}
H.bV.prototype={
H(a,b){H.bn(b,a,a.length)
return a[b]},
$iid:1}
H.bX.prototype={
H(a,b){H.bn(b,a,a.length)
return a[b]}}
H.be.prototype={
gE(a){return a.length},
H(a,b){H.bn(b,a,a.length)
return a[b]},
$ikJ:1}
H.du.prototype={
gE(a){return a.length},
H(a,b){H.bn(b,a,a.length)
return a[b]}}
H.ce.prototype={}
H.cf.prototype={}
H.cg.prototype={}
H.ch.prototype={}
H.aa.prototype={
j(a){return H.hP(v.typeUniverse,this,a)},
O(a){return H.l6(v.typeUniverse,this,a)}}
H.dW.prototype={}
H.dT.prototype={
q(a){return this.a}}
H.cm.prototype={$iaw:1}
P.hq.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
P.hp.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:33}
P.hr.prototype={
$0(){this.a.$0()},
$S:0}
P.hs.prototype={
$0(){this.a.$0()},
$S:0}
P.hN.prototype={
ei(a,b){if(self.setTimeout!=null)self.setTimeout(H.br(new P.hO(this,b),0),a)
else throw H.h(P.ax("`setTimeout()` not found."))}}
P.hO.prototype={
$0(){this.b.$0()},
$S:1}
P.by.prototype={
q(a){return H.y(this.a)},
$iB:1,
gbP(){return this.b}}
P.fN.prototype={
$0(){var s,r,q,p,o=this,n=o.a
if(n==null)o.b.bV(o.c.a(null))
else try{o.b.bV(n.$0())}catch(q){s=H.T(q)
r=H.ai(q)
n=s
p=r
if(p==null)p=P.i8(n)
o.b.b1(n,p)}},
$S:1}
P.c7.prototype={
dm(a,b){var s
H.iz(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw H.h(P.dC("Future already completed"))
b=P.i8(a)
s.eZ(a,b)},
dl(a){return this.dm(a,null)}}
P.c5.prototype={}
P.cb.prototype={
h4(a){if((this.c&15)!==6)return!0
return this.b.b.cp(t.al.a(this.d),a.a,t.y,t.K)},
fU(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.U.b(q))p=l.hg(q,m,a.b,o,n,t.l)
else p=l.cp(t.v.a(q),m,o,n)
try{o=r.$ti.j("2/").a(p)
return o}catch(s){if(t.eK.b(H.T(s))){if((r.c&1)!==0)throw H.h(P.cB("The error handler of Future.then must return a value of the returned future's type","onError"))
throw H.h(P.cB("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
P.Q.prototype={
dR(a,b,c){var s,r,q,p=this.$ti
p.O(c).j("1/(2)").a(a)
s=$.D
if(s===C.c){if(b!=null&&!t.U.b(b)&&!t.v.b(b))throw H.h(P.i7(b,"onError",u.c))}else{c.j("@<0/>").O(p.c).j("1(2)").a(a)
if(b!=null)b=P.lv(b,s)}r=new P.Q(s,c.j("Q<0>"))
q=b==null?1:3
this.cP(new P.cb(r,q,a,b,p.j("@<1>").O(c).j("cb<1,2>")))
return r},
cs(a,b){return this.dR(a,null,b)},
ft(a){this.a=this.a&1|16
this.c=a},
bU(a){this.a=a.a&30|this.a&1
this.c=a.c},
cP(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.cP(a)
return}r.bU(s)}P.cx(null,null,r.b,t.M.a(new P.hw(r,a)))}},
d2(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.d2(a)
return}m.bU(n)}l.a=m.bz(a)
P.cx(null,null,m.b,t.M.a(new P.hC(l,m)))}},
by(){var s=t.F.a(this.c)
this.c=null
return this.bz(s)},
bz(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
f0(a){var s,r,q,p=this
p.a^=2
try{a.dR(new P.hz(p),new P.hA(p),t.P)}catch(q){s=H.T(q)
r=H.ai(q)
P.m0(new P.hB(p,s,r))}},
bV(a){var s,r=this,q=r.$ti
q.j("1/").a(a)
if(q.j("b8<1>").b(a))if(q.b(a))P.jd(a,r)
else r.f0(a)
else{s=r.by()
q.c.a(a)
r.a=8
r.c=a
P.bm(r,s)}},
cT(a){var s,r=this
r.$ti.c.a(a)
s=r.by()
r.a=8
r.c=a
P.bm(r,s)},
b1(a,b){var s
t.l.a(b)
s=this.by()
this.ft(P.ef(a,b))
P.bm(this,s)},
eY(a){var s=this.$ti
s.j("1/").a(a)
this.f_(s.c.a(a))},
f_(a){var s=this
s.$ti.c.a(a)
s.a^=2
P.cx(null,null,s.b,t.M.a(new P.hy(s,a)))},
eZ(a,b){this.a^=2
P.cx(null,null,this.b,t.M.a(new P.hx(this,a,b)))},
$ib8:1}
P.hw.prototype={
$0(){P.bm(this.a,this.b)},
$S:1}
P.hC.prototype={
$0(){P.bm(this.b,this.a.a)},
$S:1}
P.hz.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.cT(p.$ti.c.a(a))}catch(q){s=H.T(q)
r=H.ai(q)
p.b1(s,r)}},
$S:4}
P.hA.prototype={
$2(a,b){this.a.b1(t.K.a(a),t.l.a(b))},
$S:19}
P.hB.prototype={
$0(){this.a.b1(this.b,this.c)},
$S:1}
P.hy.prototype={
$0(){this.a.cT(this.b)},
$S:1}
P.hx.prototype={
$0(){this.a.b1(this.b,this.c)},
$S:1}
P.hF.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.hf(t.fO.a(q.d),t.z)}catch(p){s=H.T(p)
r=H.ai(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=P.ef(s,r)
o.b=!0
return}if(l instanceof P.Q&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.cs(new P.hG(n),t.z)
q.b=!1}},
$S:1}
P.hG.prototype={
$1(a){return this.a},
$S:24}
P.hE.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cp(o.j("2/(1)").a(p.d),m,o.j("2/"),n)}catch(l){s=H.T(l)
r=H.ai(l)
q=this.a
q.c=P.ef(s,r)
q.b=!0}},
$S:1}
P.hD.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.h4(s)&&p.a.e!=null){p.c=p.a.fU(s)
p.b=!1}}catch(o){r=H.T(o)
q=H.ai(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=P.ef(r,q)
n.b=!0}},
$S:1}
P.dO.prototype={}
P.a4.prototype={
gE(a){var s={},r=new P.Q($.D,t.fJ)
s.a=0
this.bE(new P.hl(s,this),!0,new P.hm(s,r),r.gf2())
return r},
aA(a,b){return new H.aK(this,H.A(this).j("@<a4.T>").O(b).j("aK<1,2>"))}}
P.hl.prototype={
$1(a){H.A(this.b).j("a4.T").a(a);++this.a.a},
$S(){return H.A(this.b).j("~(a4.T)")}}
P.hm.prototype={
$0(){this.b.bV(this.a.a)},
$S:1}
P.bh.prototype={}
P.dE.prototype={}
P.cr.prototype={$ijb:1}
P.hV.prototype={
$0(){var s=t.K.a(H.h(this.a))
s.stack=this.b.q(0)
throw s},
$S:1}
P.e2.prototype={
hi(a){var s,r,q,p,o
t.M.a(a)
try{if(C.c===$.D){a.$0()
return}P.ju(null,null,this,a,t.H)}catch(q){s=H.T(q)
r=H.ai(q)
p=t.K.a(s)
o=t.l.a(r)
P.cw(p,o)}},
cq(a,b,c){var s,r,q,p,o
c.j("~(0)").a(a)
c.a(b)
try{if(C.c===$.D){a.$1(b)
return}P.jw(null,null,this,a,b,t.H,c)}catch(q){s=H.T(q)
r=H.ai(q)
p=t.K.a(s)
o=t.l.a(r)
P.cw(p,o)}},
hh(a,b,c,d,e){var s,r,q,p,o
d.j("@<0>").O(e).j("~(1,2)").a(a)
d.a(b)
e.a(c)
try{if(C.c===$.D){a.$2(b,c)
return}P.jv(null,null,this,a,b,c,t.H,d,e)}catch(q){s=H.T(q)
r=H.ai(q)
p=t.K.a(s)
o=t.l.a(r)
P.cw(p,o)}},
c4(a){return new P.hI(this,t.M.a(a))},
fE(a,b){return new P.hJ(this,b.j("~(0)").a(a),b)},
hf(a,b){b.j("0()").a(a)
if($.D===C.c)return a.$0()
return P.ju(null,null,this,a,b)},
cp(a,b,c,d){c.j("@<0>").O(d).j("1(2)").a(a)
d.a(b)
if($.D===C.c)return a.$1(b)
return P.jw(null,null,this,a,b,c,d)},
hg(a,b,c,d,e,f){d.j("@<0>").O(e).O(f).j("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.D===C.c)return a.$2(b,c)
return P.jv(null,null,this,a,b,c,d,e,f)},
dK(a,b,c,d){return b.j("@<0>").O(c).O(d).j("1(2,3)").a(a)}}
P.hI.prototype={
$0(){return this.a.hi(this.b)},
$S:1}
P.hJ.prototype={
$1(a){var s=this.c
return this.a.cq(this.b,s.a(a),s)},
$S(){return this.c.j("~(0)")}}
P.ay.prototype={
d1(a){return new P.ay(a.j("ay<0>"))},
fg(){return this.d1(t.z)},
ga2(a){var s=this,r=new P.b_(s,s.r,H.A(s).j("b_<1>"))
r.c=s.e
return r},
gE(a){return this.a},
an(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.br.a(s[b])!=null}else{r=this.f4(b)
return r}},
f4(a){var s=this.d
if(s==null)return!1
return this.cW(s[this.cU(a)],a)>=0},
G(a,b){var s,r,q=this
H.A(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cO(s==null?q.b=P.io():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cO(r==null?q.c=P.io():r,b)}else return q.eW(b)},
eW(a){var s,r,q,p=this
H.A(p).c.a(a)
s=p.d
if(s==null)s=p.d=P.io()
r=p.cU(a)
q=s[r]
if(q==null)s[r]=[p.c0(a)]
else{if(p.cW(q,a)>=0)return!1
q.push(p.c0(a))}return!0},
b4(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.d0()}},
cO(a,b){H.A(this).c.a(b)
if(t.br.a(a[b])!=null)return!1
a[b]=this.c0(b)
return!0},
d0(){this.r=this.r+1&1073741823},
c0(a){var s,r=this,q=new P.e_(H.A(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.d0()
return q},
cU(a){return J.eb(a)&1073741823},
cW(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bu(a[r].a,b))return r
return-1}}
P.e_.prototype={}
P.b_.prototype={
ga0(){return this.$ti.c.a(this.d)},
S(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.h(P.au(q))
else if(r==null){s.scS(null)
return!1}else{s.scS(s.$ti.j("1?").a(r.a))
s.c=r.b
return!0}},
scS(a){this.d=this.$ti.j("1?").a(a)},
$iL:1}
P.bP.prototype={$ip:1,$il:1,$iq:1}
P.t.prototype={
ga2(a){return new H.aU(a,this.gE(a),H.aj(a).j("aU<t.E>"))},
ad(a,b){return this.H(a,H.Y(b))},
aI(a,b){var s,r
H.aj(a).j("~(t.E)").a(b)
s=this.gE(a)
for(r=0;r<s;++r){b.$1(this.H(a,r))
if(s!==this.gE(a))throw H.h(P.au(a))}},
aA(a,b){return new H.al(a,H.aj(a).j("@<t.E>").O(b).j("al<1,2>"))},
cc(a,b,c,d){var s,r=H.aj(a)
d=r.j("t.E").a(r.j("t.E?").a(d))
P.il(b,c,this.gE(a))
for(s=b;s<c;++s)this.h(a,s,d)},
q(a){return P.ie(a,"[","]")}}
P.bR.prototype={}
P.fU.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.y(a)
r.a=s+": "
r.a+=H.y(b)},
$S:22}
P.J.prototype={
aI(a,b){var s,r,q=H.A(this)
q.j("~(J.K,J.V)").a(b)
for(s=J.bv(this.gaE()),q=q.j("J.V");s.S();){r=s.ga0()
b.$2(r,q.a(this.H(0,r)))}},
gE(a){return J.b1(this.gaE())},
q(a){return P.j0(this)},
$iag:1}
P.O.prototype={
aA(a,b){return P.j7(this,null,H.A(this).j("O.E"),b)},
ar(a,b){var s
for(s=J.bv(H.A(this).j("l<O.E>").a(b));s.S();)this.G(0,s.ga0())},
dB(a,b,c){var s=H.A(this)
return new H.aN(this,s.O(c).j("1(O.E)").a(b),s.j("@<O.E>").O(c).j("aN<1,2>"))},
q(a){return P.ie(this,"{","}")},
cg(a,b){var s,r,q=this.ga2(this)
if(!q.S())return""
s=q.$ti.c
if(b===""){r=""
do r+=H.y(s.a(q.d))
while(q.S())
s=r}else{r=""+H.y(s.a(q.d))
for(;q.S();)r=r+b+H.y(s.a(q.d))
s=r}return s.charCodeAt(0)==0?s:s},
ad(a,b){var s,r,q,p,o="index"
H.iz(b,o,t.S)
P.j3(b,o)
for(s=this.ga2(this),r=s.$ti.c,q=0;s.S();){p=r.a(s.d)
if(b===q)return p;++q}throw H.h(P.bI(b,this,o,null,q))}}
P.c1.prototype={$ip:1,$il:1,$iN:1}
P.ci.prototype={
aA(a,b){return P.j7(this,this.gff(),H.A(this).c,b)},
$ip:1,
$il:1,
$iN:1}
P.cc.prototype={}
P.cj.prototype={}
P.ct.prototype={}
P.dY.prototype={
H(a,b){var s,r=this.b
if(r==null)return this.c.H(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.fk(b):s}},
gE(a){return this.b==null?this.c.a:this.bw().length},
gaE(){if(this.b==null){var s=this.c
return new H.aT(s,H.A(s).j("aT<1>"))}return new P.dZ(this)},
aI(a,b){var s,r,q,p,o=this
t.cA.a(b)
if(o.b==null)return o.c.aI(0,b)
s=o.bw()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=P.hS(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw H.h(P.au(o))}},
bw(){var s=t.bM.a(this.c)
if(s==null)s=this.c=H.r(Object.keys(this.a),t.s)
return s},
fk(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=P.hS(this.a[a])
return this.b[a]=s}}
P.dZ.prototype={
gE(a){var s=this.a
return s.gE(s)},
ad(a,b){var s
H.Y(b)
s=this.a
if(s.b==null)s=s.gaE().ad(0,b)
else{s=s.bw()
if(b<0||b>=s.length)return H.a(s,b)
s=s[b]}return s},
ga2(a){var s=this.a
if(s.b==null){s=s.gaE()
s=s.ga2(s)}else{s=s.bw()
s=new J.aD(s,s.length,H.aB(s).j("aD<1>"))}return s}}
P.cH.prototype={}
P.cL.prototype={}
P.cW.prototype={
fN(a,b){var s=P.lu(b,this.gfO().a)
return s},
gfO(){return C.P}}
P.cX.prototype={}
P.b7.prototype={
be(a,b){if(b==null)return!1
return b instanceof P.b7&&this.a===b.a},
gak(a){return C.b.gak(this.a)},
q(a){var s,r,q,p=new P.fK(),o=this.a
if(o<0)return"-"+new P.b7(0-o).q(0)
s=p.$1(C.b.ai(o,6e7)%60)
r=p.$1(C.b.ai(o,1e6)%60)
q=new P.fJ().$1(o%1e6)
return""+C.b.ai(o,36e8)+":"+s+":"+r+"."+q}}
P.fJ.prototype={
$1(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:8}
P.fK.prototype={
$1(a){if(a>=10)return""+a
return"0"+a},
$S:8}
P.B.prototype={
gbP(){return H.ai(this.$thrownJsError)}}
P.bx.prototype={
q(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.cO(s)
return"Assertion failed"}}
P.aw.prototype={}
P.dv.prototype={
q(a){return"Throw of null."}}
P.ac.prototype={
gbX(){return"Invalid argument"+(!this.a?"(s)":"")},
gbW(){return""},
q(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+H.y(n),l=q.gbX()+o+m
if(!q.a)return l
s=q.gbW()
r=P.cO(q.b)
return l+s+": "+r}}
P.c0.prototype={
gbX(){return"RangeError"},
gbW(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.y(q):""
else if(q==null)s=": Not greater than or equal to "+H.y(r)
else if(q>r)s=": Not in inclusive range "+H.y(r)+".."+H.y(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.y(r)
return s}}
P.cR.prototype={
gbX(){return"RangeError"},
gbW(){if(H.Y(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gE(a){return this.f}}
P.dL.prototype={
q(a){return"Unsupported operation: "+this.a}}
P.dJ.prototype={
q(a){var s="UnimplementedError: "+this.a
return s}}
P.bg.prototype={
q(a){return"Bad state: "+this.a}}
P.cJ.prototype={
q(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cO(s)+"."}}
P.c2.prototype={
q(a){return"Stack Overflow"},
gbP(){return null},
$iB:1}
P.cM.prototype={
q(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.hv.prototype={
q(a){return"Exception: "+this.a}}
P.fM.prototype={
q(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=C.d.cK(q,0,75)+"..."
return r+"\n"+q}else return r}}
P.l.prototype={
aA(a,b){return H.iR(this,H.A(this).j("l.E"),b)},
dB(a,b,c){var s=H.A(this)
return H.kw(this,s.O(c).j("1(l.E)").a(b),s.j("l.E"),c)},
bJ(a,b){var s=H.A(this)
return new H.aY(this,s.j("G(l.E)").a(b),s.j("aY<l.E>"))},
gE(a){var s,r=this.ga2(this)
for(s=0;r.S();)++s
return s},
gaY(a){var s,r=this.ga2(this)
if(!r.S())throw H.h(H.kp())
s=r.ga0()
if(r.S())throw H.h(H.kq())
return s},
ad(a,b){var s,r,q
H.Y(b)
P.j3(b,"index")
for(s=this.ga2(this),r=0;s.S();){q=s.ga0()
if(b===r)return q;++r}throw H.h(P.bI(b,this,"index",null,r))},
q(a){return P.ko(this,"(",")")}}
P.L.prototype={}
P.M.prototype={
gak(a){return P.u.prototype.gak.call(this,this)},
q(a){return"null"}}
P.u.prototype={$iu:1,
be(a,b){return this===b},
gak(a){return H.dx(this)},
q(a){return"Instance of '"+H.h6(this)+"'"},
toString(){return this.q(this)}}
P.e4.prototype={
q(a){return""},
$iab:1}
P.hk.prototype={}
P.dF.prototype={
gE(a){return this.a.length},
q(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.k.prototype={}
W.b2.prototype={
sfV(a,b){a.href=b},
q(a){var s=String(a)
s.toString
return s},
$ib2:1}
W.cA.prototype={
q(a){var s=String(a)
s.toString
return s}}
W.b3.prototype={$ib3:1}
W.cD.prototype={}
W.aF.prototype={$iaF:1}
W.aG.prototype={
cz(a,b){return a.getContext(b)},
$iaG:1}
W.aH.prototype={
h9(a,b,c,d,e,f,g,h){a.putImageData(P.lI(b),c,d,e,f,g,h)
return},
$ifx:1,
$iaH:1}
W.ad.prototype={
gE(a){return a.length}}
W.b6.prototype={
cQ(a,b){var s=$.jI(),r=s[b]
if(typeof r=="string")return r
r=this.fu(a,b)
s[b]=r
return r},
fu(a,b){var s,r=b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()})
r.toString
r=r in a
r.toString
if(r)return b
s=$.jK()+b
r=s in a
r.toString
if(r)return s
return b},
d4(a,b,c,d){a.setProperty(b,c,d)},
gE(a){var s=a.length
s.toString
return s}}
W.fG.prototype={}
W.aM.prototype={}
W.fH.prototype={
q(a){var s=String(a)
s.toString
return s}}
W.cN.prototype={
fJ(a,b){var s=a.createHTMLDocument(b)
s.toString
return s}}
W.fI.prototype={
gE(a){var s=a.length
s.toString
return s}}
W.C.prototype={
gfD(a){return new W.dR(a)},
gbA(a){return new W.dS(a)},
sbA(a,b){var s
t.X.a(b)
s=this.gbA(a)
s.b4(0)
s.ar(0,b)},
q(a){var s=a.localName
s.toString
return s},
au(a,b,c,d){var s,r,q,p
if(c==null){s=$.iU
if(s==null){s=H.r([],t.j)
r=new W.bZ(s)
C.a.G(s,W.je(null))
C.a.G(s,W.ji())
$.iU=r
d=r}else d=s
s=$.iT
if(s==null){s=new W.cq(d)
$.iT=s
c=s}else{s.a=d
c=s}}if($.av==null){s=document
r=s.implementation
r.toString
r=C.I.fJ(r,"")
$.av=r
r=r.createRange()
r.toString
$.ia=r
r=$.av.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.av.head.appendChild(r).toString}s=$.av
if(s.body==null){r=s.createElement("body")
C.L.sfF(s,t.a.a(r))}s=$.av
if(t.a.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.av.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.a.an(C.U,s)}else s=!1
if(s){$.ia.selectNodeContents(q)
s=$.ia
s=s.createContextualFragment(b)
s.toString
p=s}else{J.k7(q,b)
s=$.av.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.av.body)J.iL(q)
c.cC(p)
document.adoptNode(p).toString
return p},
fI(a,b,c){return this.au(a,b,c,null)},
sdw(a,b){this.bM(a,b)},
bM(a,b){var s
this.scr(a,null)
s=a.appendChild(this.au(a,b,null,null))
s.toString},
sfb(a,b){a.innerHTML=b},
gdQ(a){var s=a.tagName
s.toString
return s},
gdD(a){return new W.U(a,"click",!1,t.C)},
gdE(a){return new W.U(a,"dragenter",!1,t.C)},
gdF(a){return new W.U(a,"dragleave",!1,t.C)},
gdG(a){return new W.U(a,"dragover",!1,t.C)},
gdH(a){return new W.U(a,"drop",!1,t.C)},
$iC:1}
W.fL.prototype={
$1(a){return t.h.b(t.A.a(a))},
$S:23}
W.f.prototype={$if:1}
W.x.prototype={
eX(a,b,c,d){return a.addEventListener(b,H.br(t.o.a(c),1),!1)},
fn(a,b,c,d){return a.removeEventListener(b,H.br(t.o.a(c),1),!1)},
$ix:1}
W.a_.prototype={$ia_:1}
W.cP.prototype={
gE(a){var s=a.length
s.toString
return s},
H(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.h(P.bI(b,a,null,null,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.c8.a(c)
throw H.h(P.ax("Cannot assign element of immutable List."))},
ad(a,b){H.Y(b)
if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$ip:1,
$iX:1,
$il:1,
$iq:1}
W.bF.prototype={
ghc(a){var s,r=a.result
if(t.dI.b(r)){s=new Uint8Array(r,0)
return s}return r}}
W.cQ.prototype={
gE(a){return a.length}}
W.bG.prototype={
sfF(a,b){a.body=b}}
W.a7.prototype={
h5(a,b,c,d){return a.open(b,c,!0)},
$ia7:1}
W.fO.prototype={
$1(a){var s=t.bo.a(a).responseText
s.toString
return s},
$S:34}
W.fP.prototype={
$1(a){var s,r,q,p,o
t.p.a(a)
s=this.a
r=s.status
r.toString
q=r>=200&&r<300
p=r>307&&r<400
r=q||r===0||r===304||p
o=this.b
if(r){r=o.$ti
r.j("1/?").a(s)
o=o.a
if((o.a&30)!==0)H.b(P.dC("Future already completed"))
o.eY(r.j("1/").a(s))}else o.dl(a)},
$S:9}
W.bH.prototype={}
W.aQ.prototype={
gdr(a){var s=a.data
s.toString
return s},
$iaQ:1}
W.b9.prototype={$ib9:1}
W.ao.prototype={$iao:1}
W.bQ.prototype={
q(a){var s=String(a)
s.toString
return s},
$ibQ:1}
W.a1.prototype={
gfM(a){var s=a.dataTransfer
s.toString
return s},
$ia1:1}
W.P.prototype={
gaY(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.h(P.dC("No elements"))
if(r>1)throw H.h(P.dC("More than one element"))
s=s.firstChild
s.toString
return s},
ar(a,b){var s,r,q,p,o
t.eh.a(b)
if(b instanceof W.P){s=b.a
r=this.a
if(s!==r)for(q=s.childNodes.length,p=0;p<q;++p){o=s.firstChild
o.toString
r.appendChild(o).toString}return}for(s=b.ga2(b),r=this.a;s.S();)r.appendChild(s.ga0()).toString},
h(a,b,c){var s,r
t.A.a(c)
s=this.a
r=s.childNodes
if(b<0||b>=r.length)return H.a(r,b)
s.replaceChild(c,r[b]).toString},
ga2(a){var s=this.a.childNodes
return new W.aO(s,s.length,H.aj(s).j("aO<a0.E>"))},
gE(a){return this.a.childNodes.length},
H(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.a(s,b)
return s[b]}}
W.m.prototype={
hb(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
f1(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s).toString},
q(a){var s=a.nodeValue
return s==null?this.e5(a):s},
scr(a,b){a.textContent=b},
$im:1}
W.bY.prototype={
gE(a){var s=a.length
s.toString
return s},
H(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.h(P.bI(b,a,null,null,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.A.a(c)
throw H.h(P.ax("Cannot assign element of immutable List."))},
ad(a,b){H.Y(b)
if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$ip:1,
$iX:1,
$il:1,
$iq:1}
W.a9.prototype={$ia9:1}
W.dB.prototype={
gE(a){return a.length}}
W.c3.prototype={
au(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bR(a,b,c,d)
s=W.kk("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.P(r).ar(0,new W.P(s))
return r}}
W.dG.prototype={
au(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bR(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.P(C.v.au(r,b,c,d))
r=new W.P(r.gaY(r))
new W.P(s).ar(0,new W.P(r.gaY(r)))
return s}}
W.dH.prototype={
au(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bR(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.P(C.v.au(r,b,c,d))
new W.P(s).ar(0,new W.P(r.gaY(r)))
return s}}
W.bi.prototype={
bM(a,b){var s,r
this.scr(a,null)
s=a.content
s.toString
J.k0(s)
r=this.au(a,b,null,null)
a.content.appendChild(r).toString},
$ibi:1}
W.ah.prototype={}
W.bk.prototype={
dO(a,b){var s
t.c4.a(b)
this.f7(a)
s=W.iy(b,t.di)
s.toString
return this.fo(a,s)},
fo(a,b){var s=a.requestAnimationFrame(H.br(t.c4.a(b),1))
s.toString
return s},
f7(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bl.prototype={$ibl:1}
W.cd.prototype={
gE(a){var s=a.length
s.toString
return s},
H(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.h(P.bI(b,a,null,null,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.A.a(c)
throw H.h(P.ax("Cannot assign element of immutable List."))},
ad(a,b){H.Y(b)
if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$ip:1,
$iX:1,
$il:1,
$iq:1}
W.dP.prototype={
aI(a,b){var s,r,q,p,o
t.eA.a(b)
for(s=this.gaE(),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.i4)(s),++p){o=s[p]
b.$2(o,H.H(q.getAttribute(o)))}},
gaE(){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.r([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.a(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
C.a.G(s,n)}}return s}}
W.dR.prototype={
H(a,b){return this.a.getAttribute(H.H(b))},
gE(a){return this.gaE().length}}
W.dS.prototype={
ba(){var s,r,q,p,o=P.bO(t.N)
for(s=this.a.className.split(" "),r=s.length,q=0;q<r;++q){p=J.iN(s[q])
if(p.length!==0)o.G(0,p)}return o},
dW(a){this.a.className=t.Q.a(a).cg(0," ")},
gE(a){var s=this.a.classList.length
s.toString
return s},
b4(a){this.a.className=""},
G(a,b){var s,r
H.H(b)
s=this.a.classList
r=s.contains(b)
r.toString
s.add(b)
return!r},
ar(a,b){W.kP(this.a,t.X.a(b))}}
W.ib.prototype={}
W.c9.prototype={
bE(a,b,c,d){var s=H.A(this)
s.j("~(1)?").a(a)
t.Z.a(c)
return W.V(this.a,this.b,a,!1,s.c)},
dz(a,b,c){return this.bE(a,b,c,null)}}
W.U.prototype={}
W.ca.prototype={
ck(a){var s,r=this
r.$ti.j("~(1)?").a(a)
s=r.d
if(s!=null)J.k1(r.b,r.c,t.o.a(s),!1)
s=W.iy(new W.hu(a),t.B)
r.sfa(s)
r.d7()},
cl(a,b){},
d7(){var s=this.d,r=s!=null
if(r&&!0){t.o.a(s)
if(r)J.k_(this.b,this.c,s,!1)}},
sfa(a){this.d=t.o.a(a)}}
W.ht.prototype={
$1(a){return this.a.$1(t.B.a(a))},
$S:5}
W.hu.prototype={
$1(a){return this.a.$1(t.B.a(a))},
$S:5}
W.aZ.prototype={
eg(a){var s
if($.dX.a===0){for(s=0;s<262;++s)$.dX.h(0,C.Q[s],W.lN())
for(s=0;s<12;++s)$.dX.h(0,C.j[s],W.lO())}},
b3(a){return $.jY().an(0,W.bE(a))},
aM(a,b,c){var s=$.dX.H(0,W.bE(a)+"::"+b)
if(s==null)s=$.dX.H(0,"*::"+b)
if(s==null)return!1
return H.iu(s.$4(a,b,c,this))},
$ia8:1}
W.a0.prototype={
ga2(a){return new W.aO(a,this.gE(a),H.aj(a).j("aO<a0.E>"))}}
W.bZ.prototype={
b3(a){return C.a.dd(this.a,new W.fX(a))},
aM(a,b,c){return C.a.dd(this.a,new W.fW(a,b,c))},
$ia8:1}
W.fX.prototype={
$1(a){return t.e.a(a).b3(this.a)},
$S:10}
W.fW.prototype={
$1(a){return t.e.a(a).aM(this.a,this.b,this.c)},
$S:10}
W.ck.prototype={
eh(a,b,c,d){var s,r,q
this.a.ar(0,c)
s=b.bJ(0,new W.hK())
r=b.bJ(0,new W.hL())
this.b.ar(0,s)
q=this.c
q.ar(0,C.V)
q.ar(0,r)},
b3(a){return this.a.an(0,W.bE(a))},
aM(a,b,c){var s=this,r=W.bE(a),q=s.c
if(q.an(0,r+"::"+b))return s.d.fA(c)
else if(q.an(0,"*::"+b))return s.d.fA(c)
else{q=s.b
if(q.an(0,r+"::"+b))return!0
else if(q.an(0,"*::"+b))return!0
else if(q.an(0,r+"::*"))return!0
else if(q.an(0,"*::*"))return!0}return!1},
$ia8:1}
W.hK.prototype={
$1(a){return!C.a.an(C.j,H.H(a))},
$S:11}
W.hL.prototype={
$1(a){return C.a.an(C.j,H.H(a))},
$S:11}
W.e6.prototype={
aM(a,b,c){if(this.ea(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.an(0,b)
return!1}}
W.hM.prototype={
$1(a){return"TEMPLATE::"+H.H(a)},
$S:6}
W.e5.prototype={
b3(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.bE(a)==="foreignObject")return!1
if(s)return!0
return!1},
aM(a,b,c){if(b==="is"||C.d.e3(b,"on"))return!1
return this.b3(a)},
$ia8:1}
W.aO.prototype={
S(){var s=this,r=s.c+1,q=s.b
if(r<q){s.scY(J.iH(s.a,r))
s.c=r
return!0}s.scY(null)
s.c=q
return!1},
ga0(){return this.$ti.c.a(this.d)},
scY(a){this.d=this.$ti.j("1?").a(a)},
$iL:1}
W.e3.prototype={$ikK:1}
W.cq.prototype={
cC(a){var s,r=new W.hR(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
bj(a,b){++this.b
if(b==null||b!==a.parentNode)J.iL(a)
else b.removeChild(a).toString},
fq(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.k3(a)
j=k.a.getAttribute("is")
t.h.a(a)
p=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=="lastChild"||c.name=="lastChild"||c.id=="previousSibling"||c.name=="previousSibling"||c.id=="children"||c.name=="children")return true
var i=c.childNodes
if(c.lastChild&&c.lastChild!==i[i.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var h=0
if(c.children)h=c.children.length
for(var g=0;g<h;g++){var f=c.children[g]
if(f.id=="attributes"||f.name=="attributes"||f.id=="lastChild"||f.name=="lastChild"||f.id=="previousSibling"||f.name=="previousSibling"||f.id=="children"||f.name=="children")return true}return false}(a)
p.toString
s=p
if(H.R(s))o=!0
else{p=!(a.attributes instanceof NamedNodeMap)
p.toString
o=p}l=o}catch(n){H.T(n)}r="element unprintable"
try{r=J.bw(a)}catch(n){H.T(n)}try{q=W.bE(a)
this.fp(t.h.a(a),b,l,r,q,t.eO.a(k),H.jp(j))}catch(n){if(H.T(n) instanceof P.ac)throw n
else{this.bj(a,b)
p=window
p.toString
p="Removing corrupted element "+H.y(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
fp(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bj(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.b3(a)){m.bj(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.y(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.aM(a,"is",g)){m.bj(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.gaE()
q=H.r(s.slice(0),H.aB(s))
for(p=f.gaE().length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.a(q,p)
o=q[p]
r=m.a
n=J.ka(o)
H.H(o)
if(!r.aM(a,n,H.H(s.getAttribute(o)))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.y(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.cC(s)}},
$ikx:1}
W.hR.prototype={
$2(a,b){var s,r,q,p,o,n=this.a,m=a.nodeType
m.toString
switch(m){case 1:n.fq(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.bj(a,b)}s=a.lastChild
for(m=t.A;s!=null;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.dC("Corrupt HTML")
throw H.h(q)}}catch(o){H.T(o)
q=m.a(s);++n.b
p=q.parentNode
if(a!==p){if(p!=null)p.removeChild(q).toString}else a.removeChild(q).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:26}
W.dQ.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e8.prototype={}
W.e9.prototype={}
P.cn.prototype={$iaQ:1,
gdr(a){return this.a}}
P.bD.prototype={
da(a){var s
H.H(a)
s=$.jH().b
if(s.test(a))return a
throw H.h(P.i7(a,"value","Not a valid class token"))},
q(a){return this.ba().cg(0," ")},
ga2(a){var s=this.ba()
return P.kS(s,s.r,H.A(s).c)},
gE(a){return this.ba().a},
G(a,b){var s
H.H(b)
this.da(b)
s=this.cj(new P.fE(b))
return H.iu(s==null?!1:s)},
ar(a,b){this.cj(new P.fD(this,t.X.a(b)))},
ad(a,b){return this.ba().ad(0,b)},
b4(a){this.cj(new P.fF())},
cj(a){var s,r
t.bU.a(a)
s=this.ba()
r=a.$1(s)
this.dW(s)
return r}}
P.fE.prototype={
$1(a){return t.Q.a(a).G(0,this.a)},
$S:27}
P.fD.prototype={
$1(a){return t.Q.a(a).ar(0,this.b.dB(0,this.a.gfw(),t.N))},
$S:13}
P.fF.prototype={
$1(a){return t.Q.a(a).b4(0)},
$S:13}
P.bf.prototype={$ibf:1}
P.cC.prototype={
ba(){var s,r,q,p,o=this.a.getAttribute("class"),n=P.bO(t.N)
if(o==null)return n
for(s=o.split(" "),r=s.length,q=0;q<r;++q){p=J.iN(s[q])
if(p.length!==0)n.G(0,p)}return n},
dW(a){this.a.setAttribute("class",a.cg(0," "))}}
P.i.prototype={
gbA(a){return new P.cC(a)},
sdw(a,b){this.bM(a,b)},
au(a,b,c,d){var s,r,q,p,o=H.r([],t.j)
C.a.G(o,W.je(null))
C.a.G(o,W.ji())
C.a.G(o,new W.e5())
c=new W.cq(new W.bZ(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.l.fI(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.P(q)
p=r.gaY(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
gdD(a){return new W.U(a,"click",!1,t.C)},
gdE(a){return new W.U(a,"dragenter",!1,t.C)},
gdF(a){return new W.U(a,"dragleave",!1,t.C)},
gdG(a){return new W.U(a,"dragover",!1,t.C)},
gdH(a){return new W.U(a,"drop",!1,t.C)},
$ii:1}
P.eg.prototype={
gE(a){return a.length}}
P.aE.prototype={
fL(a,b,c,d){var s=(a.createScriptProcessor||a.createJavaScriptNode).call(a,b,c,d)
s.toString
return s},
$iaE:1}
P.w.prototype={
f3(a,b,c,d){var s=a.connect(b,c,d)
s.toString
return s},
$iw:1}
P.ak.prototype={$iak:1}
P.bz.prototype={}
P.aX.prototype={$iaX:1}
P.dz.prototype={$ifx:1}
M.d3.prototype={
D(a,b){var s,r=this
if(a<32768)r.T(a,b)
else{b&=255
switch(C.b.l(a,12)){case 10:r.J(b,32768)
break
case 11:r.fr=b
if(r.dx===253)r.K(b,0)
break
case 12:r.fx=b
if(r.dx===254)r.K(b,0)
break
case 13:r.fy=b
if(r.dy===253)r.K(b,4096)
break
case 14:r.go=b
if(r.dy===254)r.K(b,4096)
break
case 15:s=r.a
if((b&1)===0)s.gp().u(0)
else s.gp().u(1)
break}}},
X(a){var s,r=this
if(!r.gn().fr){P.v("Mapper010.loadROM: MMC2: Invalid ROM! Unable to load.")
return}s=r.gn().y
r.J(0,32768)
r.J(s*4-1,49152)
r.Z()
r.ax()
r.a.gw().R(2)},
bq(a){var s=this,r=a&4080
if(a<8192){if(r===4048){s.dx=253
s.K(s.fr,0)}else if(r===4064){s.dx=254
s.K(s.fx,0)}}else if(r===4048){s.dy=253
s.K(s.fy,4096)}else if(r===4064){s.dy=254
s.K(s.go,4096)}},
B(a){var s=this
s.dy=s.dx=254
s.fr=0
s.fx=4
s.go=s.fy=0}}
M.d4.prototype={
D(a,b){var s,r,q,p,o,n,m=this
if(a<32768)m.T(a,b)
else{s=(b&15)*2
r=m.a
q=r.z.y
p=C.b.V(s,q)
o=C.b.V(s+1,q)
m.J(p,32768)
m.J(o,49152)
if(m.gn().z>0){n=C.b.V(C.b.l(b,4)*2,r.z.z)
m.K(n,0)
m.K(n+1,4096)}}}}
M.d5.prototype={
D(a,b){var s,r=this,q=32768,p=40960,o=49152,n=57344
if(a<32768)r.T(a,b)
else switch(a){case 32768:s=(b&63)*2
if((b&128)!==0){r.i(s+1,q)
r.i(s,p)
r.i(s+3,o)
r.i(s+2,n)}else{r.i(s,q)
r.i(s+1,p)
r.i(s+2,o)
r.i(s+3,n)}s=r.a
if((b&64)!==0)s.gp().u(1)
else s.gp().u(0)
break
case 32769:s=(b&63)*2
if((b&128)!==0){r.i(s+1,o)
r.i(s,n)}else{r.i(s,o)
r.i(s+1,n)}break
case 32770:s=(b&63)*2
if((b&128)!==0){++s
r.i(s,q)
r.i(s,p)
r.i(s,o)
r.i(s,n)}else{r.i(s,q)
r.i(s,p)
r.i(s,o)
r.i(s,n)}break
case 32771:s=(b&63)*2
if((b&128)!==0){r.i(s+1,o)
r.i(s,n)}else{r.i(s,o)
r.i(s+1,n)}s=r.a
if((b&64)!==0)s.gp().u(1)
else s.gp().u(0)
break}},
X(a){var s=this
if(!s.gn().fr){P.v("Mapper015.loadRom: Invalid ROM! Unable to load.")
return}s.i(0,32768)
s.i(1,40960)
s.i(2,49152)
s.i(3,57344)
s.Z()
s.ax()
s.a.gw().R(2)}}
M.d8.prototype={
D(a,b){var s,r=this
if(a<32768)r.T(a,b)
else switch(a){case 32768:r.i(b,32768)
break
case 36864:b&=3
if(b===0)r.a.gp().u(0)
else if(b===1)r.a.gp().u(1)
else{s=r.a
if(b===2)s.gp().u(3)
else s.gp().u(4)}break
case 40960:r.i(b,40960)
break
case 45056:r.k(C.b.l(b,1),0)
break
case 45057:r.k(C.b.l(b,1),1024)
break
case 49152:r.k(C.b.l(b,1),2048)
break
case 49153:r.k(C.b.l(b,1),3072)
break
case 53248:r.k(C.b.l(b,1),4096)
break
case 53249:r.k(C.b.l(b,1),5120)
break
case 57344:r.k(C.b.l(b,1),6144)
break
case 57345:r.k(C.b.l(b,1),7168)
break}},
X(a){var s,r=this
if(!r.gn().fr){P.v("Mapper022.loadROM: VRC2: Invalid ROM! Unable to load.")
return}s=r.gn().y*2
r.i(0,32768)
r.i(1,40960)
r.i(s-2,49152)
r.i(s-1,57344)
r.Z()
r.a.gw().R(2)}}
M.db.prototype={
D(a,b){var s,r=this
if(a<32768)r.T(a,b)
else switch(a){case 32768:s=r.a
if((b&64)!==0)s.gp().u(1)
else s.gp().u(0)
r.i(b&31,32768)
break
case 32769:r.i(b&31,40960)
break
case 32770:r.al(b,0)
break
case 32771:r.al(b,2048)
break
case 40960:r.k(b,4096)
break
case 40961:r.k(b,5120)
break
case 40962:r.k(b,6144)
break
case 40963:r.k(b,7168)
break}},
X(a){var s,r=this
if(!r.gn().fr){P.v("Mapper033.loadROM: 048: Invalid ROM! Unable to load.")
return}s=r.gn().y*2
r.i(0,32768)
r.i(1,40960)
r.i(s-2,49152)
r.i(s-1,57344)
r.Z()
r.a.gw().R(2)}}
M.dc.prototype={
D(a,b){if(a<32768)this.T(a,b)
else this.bF(b,32768)}}
M.dd.prototype={
D(a,b){var s,r=this
if(a<32768)r.T(a,b)
else switch(a){case 32768:r.i(b,32768)
break
case 32769:r.i(b,40960)
break
case 32770:r.al(b*2,0)
break
case 32771:r.al(b*2,2048)
break
case 40960:r.k(b,4096)
break
case 40961:r.k(b,5120)
break
case 40962:r.k(b,6144)
break
case 40963:r.k(b,7168)
break
case 49152:break
case 49153:case 49154:case 57345:case 57346:break
case 57344:s=r.a
if((b&64)!==0)s.gp().u(1)
else s.gp().u(0)
break}},
X(a){var s,r=this
if(!r.gn().fr){P.v("Mapper048.loadROM: VRC4: Invalid ROM! Unable to load.")
return}s=r.gn().y*2
r.i(0,32768)
r.i(1,40960)
r.i(s-2,49152)
r.i(s-1,57344)
r.Z()
r.ax()
r.a.gw().R(2)},
B(a){}}
M.df.prototype={
D(a,b){if(a<32768)this.T(a,b)
else{this.bF(C.b.l(b,4)&3,32768)
this.aQ((b&3)*2,0)}}}
M.dg.prototype={
D(a,b){var s=this
if(a<32768){s.T(a,b)
return}switch(C.b.l(a,12)-8){case 0:s.al(b,0)
break
case 1:s.al(b,2048)
break
case 2:s.al(b,4096)
break
case 3:s.al(b,6144)
break
case 4:s.bN()
break
case 5:s.bN()
break
case 6:s.dx=C.b.l(b,4)&1
s.dy=b&3
s.bN()
break
case 7:s.J(b,32768)
break}},
bN(){var s=this
if(s.dx===0)switch(s.dy){case 0:s.gp().u(1)
break
case 1:s.gp().u(0)
break
case 2:s.gp().u(3)
break
case 3:s.gp().u(4)
break}else switch(s.dy){case 0:break
case 1:break
case 2:break
case 3:break}},
X(a){var s,r=this
if(!r.gn().fr){P.v("Mapper068.loadROM: Sunsoft#4: Invalid ROM! Unable to load.")
return}s=r.gn().y
r.J(0,32768)
r.J(s-1,49152)
r.Z()
r.ax()
r.a.gw().R(2)},
B(a){this.dx=this.dy=0}}
M.dh.prototype={
X(a){var s,r=this
if(!r.gn().fr){P.v("Mapper071.loadROM: Camerica: Invalid ROM! Unable to load.")
return}s=r.gn().y
r.J(0,32768)
r.J(s-1,49152)
r.Z()
r.ax()
r.a.gw().R(2)},
D(a,b){var s=this
if(a<32768)s.T(a,b)
else if(a>=49152)if(b!==s.dx){s.dx=b
s.J(b,32768)}},
B(a){this.dx=-1}}
M.di.prototype={
D(a,b){var s,r,q=this
if(a<32768)q.T(a,b)
else{s=b&15
r=q.gn().y
if((b&128)!==0){q.J(s*2,32768)
q.J(r-1,49152)}if((b&64)!==0)q.aQ(s*8,0)}},
X(a){var s,r=this
if(!r.gn().fr){P.v("Mapper072.loadROM: 048: Invalid ROM! Unable to load.")
return}s=r.gn().y
r.J(1,32768)
r.J(s*2-1,49152)
r.Z()
r.a.gw().R(2)}}
M.dk.prototype={
D(a,b){var s,r=this
if(a<32768)r.T(a,b)
else{r.J(b&15,32768)
r.aQ(b>>>4&15,0)
if((a&65024)!==65024){s=r.a
if((b&8)!==0)s.gp().u(4)
else s.gp().u(3)}}},
X(a){var s,r=this
if(!r.gn().fr){P.v("Mapper078.loadROM: Invalid ROM! Unable to load.")
return}s=r.gn().y
r.J(0,32768)
r.J(s*4-1,49152)
r.Z()
r.a.gw().R(2)}}
M.dl.prototype={
X(a){var s=this
if(!s.gn().fr){P.v("Mapper079.loadROM: Invalid ROM! Unable to load.")
return}s.ci()
s.Z()
s.a.gw().R(2)}}
M.dm.prototype={
X(a){var s=this
if(!s.gn().fr){P.v("Mapper087.loadROM: Invalid ROM! Unable to load.")
return}s.gn()
s.i(0,32768)
s.i(1,40960)
s.i(2,49152)
s.i(3,57344)
s.Z()
s.a.gw().R(2)}}
M.dn.prototype={
D(a,b){if(a<32768)this.T(a,b)
else if((a&65520)===65280)this.J(b>>>2&7,32768)},
X(a){var s=this,r=s.gn().y
s.J(0,32768)
s.J(r-1,49152)
s.Z()
s.a.gw().R(2)}}
M.dq.prototype={
X(a){var s=this
if(!s.gn().fr)return
s.ci()
s.Z()
s.a.gw().R(2)},
D(a,b){var s=a<32768
if(s)this.T(a,b)
if(a>=24576&&s){this.bF(b>>>4&15,32768)
this.aQ(b&15,0)}}}
M.ed.prototype={
gde(){return this.b},
gbH(){var s=this.c
return s==null?H.b(H.c("nes")):s},
gao(){var s=this.d
return s==null?H.b(H.c("kbJoy1")):s},
gaD(){var s=this.e
return s==null?H.b(H.c("kbJoy2")):s},
gcu(){var s=this.f
return s==null?H.b(H.c("vScreen")):s}}
M.ei.prototype={
gdn(a){var s=this.b
return s==null?H.b(H.c("context")):s},
gbZ(){var s=this.c
return s==null?H.b(H.c("_imageData")):s},
fT(){if(!this.x)return
this.x=!1},
h6(){var s,r,q,p,o,n,m,l,k=this
k.y=(k.y+1)%100
s=k.d
if(s.a.gde().go<=-16)return!1
r=J.i6(k.gbZ())
s=s.gp()
q=s.gdf(s)
for(s=q.length,p=r.length,o=0,n=0;n<245760;){if(o>=s)return H.a(q,o)
m=q[o]
l=n+1
if(n>=p)return H.a(r,n)
r[n]=m&255
n=l+1
if(l>=p)return H.a(r,l)
r[l]=m>>>8&255
if(n>=p)return H.a(r,n)
r[n]=m>>>16&255;++o
n=n+1+1}C.H.h9(k.gdn(k),k.gbZ(),0,0,0,0,256,240)
return!0}}
M.fy.prototype={
aq(a,b){var s,r,q=this
if(a===16400){s=C.b.l(b,6)
if(s===0)q.e=0
else if((s&1)===1)q.e=1
else if(s===2)q.e=2
if((b&128)===0)q.d=!1
q.f=q.a.dY(b&15)}else if(a===16401){s=C.b.l(b,1)&63
q.x=s
r=b&1
q.fr=r
q.dy=(s<<1)+r}else if(a===16402)q.z=q.y=(b<<6|49152)>>>0
else if(a===16403)q.ch=q.Q=(b<<4>>>0)+1
else if(a===16405){if((C.b.l(b,4)&1)===0)q.ch=0
else{q.z=q.y
q.ch=q.Q}q.d=!1}}}
M.fz.prototype={
aH(){var s=this
if(s.b&&s.x>0)s.fr=s.dx*s.cy}}
M.cE.prototype={
di(){var s=this
if(s.d&&s.cx>0)if(--s.cx===0)s.aH()},
dh(){var s,r=this
if(r.x){r.x=!1
r.fy=r.fx+1
r.go=15}else if(--r.fy<=0){r.fy=r.fx+1
s=r.go
if(s>0)r.go=s-1
else r.go=r.r?15:0}r.id=r.f?r.fx:r.go
r.aH()},
dj(){var s,r,q,p=this
if(--p.db<=0){p.db=p.dx+1
if(p.e&&p.fr>0&&p.ch>7){s=p.dy
r=p.ch
q=p.fr
if(s===0){s=r+C.b.l(r,q)
p.ch=s
if(s>4095)p.ch=4095}else{s=C.b.l(r,q)
p.ch=r-(s-(p.b?1:0))}}}if(p.z){p.z=!1
p.db=p.dx+1}},
aH(){var s,r,q=this
if(q.c&&q.cx>0&&q.ch>7){if(q.dy===0){s=q.ch
s=s+C.b.l(s,q.fr)>4095}else s=!1
if(s)q.k3=0
else{s=q.id
r=(q.k1<<3>>>0)+q.cy
if(r>=32)return H.a(C.q,r)
q.k3=s*C.q[r]}}else q.k3=0},
aq(a,b){var s,r,q,p=this,o=p.b?0:4
if(a===16384+o){s=(b&16)!==0
p.f=s
r=p.fx=b&15
q=(b&32)===0
p.r=!q
p.k1=C.b.l(b,6)&3
p.d=q
p.id=s?r:p.go
p.aH()}else if(a===16385+o){p.e=(b&128)!==0
p.dx=C.b.l(b,4)&7
p.dy=C.b.l(b,3)&1
p.fr=b&7
p.z=!0}else if(a===16386+o){s=p.ch&=1792
p.ch=(s|b)>>>0}else if(a===16387+o){s=p.ch&=255
p.ch=(s|(b&7)<<8)>>>0
if(p.c)p.cx=C.i[b>>>3&31]
p.x=!0}},
cE(a){this.c=a
if(!a)this.cx=0
this.aH()},
B(a){var s=this
s.k1=s.id=s.go=s.fy=s.fx=s.fr=s.dy=s.dx=s.db=s.cy=s.cx=s.ch=s.Q=0
s.r=s.f=s.e=s.d=s.c=!1}}
M.fA.prototype={
bs(){var s=this
s.c=s.b&&s.x>7&&s.Q>0&&s.z>0}}
M.cI.prototype={}
M.d.prototype={}
M.ej.prototype={
gac(){var s=this.b
return s==null?H.b(H.c("mmap")):s},
gL(){var s=this.c
return s==null?H.b(H.c("mem")):s},
gbI(){var s=this.aB
return s==null?H.b(H.c("opinf")):s},
gt(){var s=this.aw
return s===$?H.b(H.c("_opcode_table")):s},
gah(){var s=this.aN
return s===$?H.b(H.c("_addressModeLookup")):s},
gbD(){var s=this.as
return s===$?H.b(H.c("irqTypeSwitch")):s},
eb(a){var s,r=this
r.k3=!1
s=t.Y
r.aw=P.I(56,new M.ek(),!1,s)
C.a.h(r.gt(),0,new M.el(r))
C.a.h(r.gt(),1,new M.em(r))
C.a.h(r.gt(),2,new M.ex(r))
C.a.h(r.gt(),3,new M.eI(r))
C.a.h(r.gt(),4,new M.eT(r))
C.a.h(r.gt(),5,new M.f3(r))
C.a.h(r.gt(),6,new M.fe(r))
C.a.h(r.gt(),7,new M.fp(r))
C.a.h(r.gt(),8,new M.fu(r))
C.a.h(r.gt(),9,new M.fv(r))
C.a.h(r.gt(),10,new M.en(r))
C.a.h(r.gt(),11,new M.eo(r))
C.a.h(r.gt(),12,new M.ep(r))
C.a.h(r.gt(),13,new M.eq(r))
C.a.h(r.gt(),14,new M.er(r))
C.a.h(r.gt(),15,new M.es(r))
C.a.h(r.gt(),16,new M.et(r))
C.a.h(r.gt(),17,new M.eu(r))
C.a.h(r.gt(),18,new M.ev(r))
C.a.h(r.gt(),19,new M.ew(r))
C.a.h(r.gt(),20,new M.ey(r))
C.a.h(r.gt(),21,new M.ez(r))
C.a.h(r.gt(),22,new M.eA(r))
C.a.h(r.gt(),23,new M.eB(r))
C.a.h(r.gt(),24,new M.eC(r))
C.a.h(r.gt(),25,new M.eD(r))
C.a.h(r.gt(),26,new M.eE(r))
C.a.h(r.gt(),27,new M.eF(r))
C.a.h(r.gt(),28,new M.eG(r))
C.a.h(r.gt(),29,new M.eH(r))
C.a.h(r.gt(),30,new M.eJ(r))
C.a.h(r.gt(),31,new M.eK(r))
C.a.h(r.gt(),32,new M.eL(r))
C.a.h(r.gt(),33,new M.eM())
C.a.h(r.gt(),34,new M.eN(r))
C.a.h(r.gt(),35,new M.eO(r))
C.a.h(r.gt(),36,new M.eP(r))
C.a.h(r.gt(),37,new M.eQ(r))
C.a.h(r.gt(),38,new M.eR(r))
C.a.h(r.gt(),39,new M.eS(r))
C.a.h(r.gt(),40,new M.eU(r))
C.a.h(r.gt(),41,new M.eV(r))
C.a.h(r.gt(),42,new M.eW(r))
C.a.h(r.gt(),43,new M.eX(r))
C.a.h(r.gt(),44,new M.eY(r))
C.a.h(r.gt(),45,new M.eZ(r))
C.a.h(r.gt(),46,new M.f_(r))
C.a.h(r.gt(),47,new M.f0(r))
C.a.h(r.gt(),48,new M.f1(r))
C.a.h(r.gt(),49,new M.f2(r))
C.a.h(r.gt(),50,new M.f4(r))
C.a.h(r.gt(),51,new M.f5(r))
C.a.h(r.gt(),52,new M.f6(r))
C.a.h(r.gt(),53,new M.f7(r))
C.a.h(r.gt(),54,new M.f8(r))
C.a.h(r.gt(),55,new M.f9(r))
r.aN=P.I(13,new M.fa(),!1,s)
C.a.h(r.gah(),0,new M.fb(r))
C.a.h(r.gah(),1,new M.fc(r))
C.a.h(r.gah(),2,new M.fd())
C.a.h(r.gah(),3,new M.ff(r))
C.a.h(r.gah(),4,new M.fg(r))
C.a.h(r.gah(),5,new M.fh(r))
C.a.h(r.gah(),6,new M.fi(r))
C.a.h(r.gah(),7,new M.fj(r))
C.a.h(r.gah(),8,new M.fk(r))
C.a.h(r.gah(),9,new M.fl(r))
C.a.h(r.gah(),10,new M.fm(r))
C.a.h(r.gah(),11,new M.fn(r))
C.a.h(r.gah(),12,new M.fo(r))
r.as=P.I(3,new M.fq(),!1,s)
C.a.h(r.gbD(),0,new M.fr(r))
C.a.h(r.gbD(),1,new M.fs(r))
C.a.h(r.gbD(),2,new M.ft(r))},
bp(){var s,r,q=this
if($.e==null)M.kj()
s=$.e
s.toString
q.sek(t.fD.a(s))
q.k2=!1
s=q.ch=q.db=q.cy=1
q.fr=!1
r=q.a
q.sej(t.L.a(r.ga3().gL()))
P.v("MEMORY SIZE: "+q.gL().length)
r.gp()
r.gay()
q.r2=q.d
q.rx=q.e
q.ry=q.f
q.x1=q.r
q.x2=q.x
q.y1=q.z
q.y2=q.Q===0?s:0
q.a4=q.ch
q.Y=q.cx
q.U=q.db
q.a1=q.cy
q.aa=q.dx
q.v=q.dy
q.a5=q.m=q.W=q.M=0
$.at().toString
q.k1=q.aC=!1},
fP(){var s,r,q,p,o=this
if(o.k1)return 0
if(o.fr){s=o.y1
r=o.y2===0?1:0
q=o.a4
o.fy=(s|r<<1|q<<2|o.Y<<3|o.a1<<4|o.U<<5|o.aa<<6|o.v<<7)>>>0
o.x=o.x2
o.ch=q
q=o.gbD()
r=o.fx
if(r>=3)return H.a(q,r)
q[r].$0()
o.x2=o.x
o.a4=o.ch
o.a1=o.cy
o.fr=!1}s=o.go
if(s==null)s=H.b(H.c("opdata"))
r=o.gac().A(0,o.x2+1)
if(r<0||r>=s.length)return H.a(s,r)
o.aB=s[r]
o.C=o.gbI().e
o.I=0
o.W=o.gbI().c
r=o.x2
o.M=r
o.x2=r+o.gbI().d
r=o.gah()
s=o.W
if(s>=13)return H.a(r,s)
r[s].$0()
o.m&=65535
p=o.gbI().a
o.gt()
if(p<56)o.gt()[p].$0()
else if(!o.k2){o.k1=o.k2=!0
P.v("CPU.emulate(): ERROR: Game crashed, invalid opcode.")}return o.C},
A(a,b){var s,r
if(b<8192){s=this.gL()
r=b&2047
if(r>=s.length)return H.a(s,r)
r=s[r]
s=r}else s=this.gac().A(0,b)
return s},
aV(a){var s,r,q=this,p=a+1
if(a<8191){s=q.gL()
r=a&2047
if(r>=s.length)return H.a(s,r)
r=s[r]
s=q.gL()
p&=2047
if(p>=s.length)return H.a(s,p)
p=(r|s[p]<<8)>>>0}else p=(q.gac().A(0,a)|q.gac().A(0,p)<<8)>>>0
return p},
D(a,b){var s,r
if(a<8192){s=this.gL()
r=a&2047
if(r>=s.length)return H.a(s,r)
s[r]=b}else this.gac().D(a,b)},
R(a){if(this.fr)if(a===0)return
this.fr=!0
this.fx=a},
ap(a){var s=this
s.gac().D(s.y,a)
s.y=--s.y&255|256},
aW(){var s=this
s.y=++s.y&255|256
return s.gac().A(0,s.y)},
sej(a){this.c=t.T.a(a)},
sek(a){this.go=t.gU.a(a)}}
M.ek.prototype={
$0(){},
$S:0}
M.el.prototype={
$0(){var s=this.a,r=s.r2+s.A(0,s.m)+s.y1
s.aa=((s.r2^s.A(0,s.m))&128)===0&&((s.r2^r)&128)!==0?1:0
s.y1=r>255?1:0
s.v=C.b.l(r,7)&1
s.r2=s.y2=r&255
s.C=s.C+s.I},
$S:0}
M.em.prototype={
$0(){var s=this.a,r=s.r2=(s.r2&s.A(0,s.m))>>>0
s.v=r>>>7&1
s.y2=r
if(s.W!==11)s.C=s.C+s.I},
$S:0}
M.ex.prototype={
$0(){var s,r,q=this.a
if(q.W===4){s=q.r2
q.y1=C.b.l(s,7)&1
s=q.r2=s<<1&255
q.v=s>>>7&1
q.y2=s}else{r=q.A(0,q.m)
q.y1=C.b.l(r,7)&1
r=r<<1&255
q.v=r>>>7&1
q.y2=r
q.D(q.m,r)}},
$S:0}
M.eI.prototype={
$0(){var s,r,q,p=this.a
if(p.y1===0){s=p.C
r=p.M
q=p.m
p.C=s+((r&65280)!==(q&65280)?2:1)
p.x2=q}},
$S:0}
M.eT.prototype={
$0(){var s,r,q,p=this.a
if(p.y1===1){s=p.C
r=p.M
q=p.m
p.C=s+((r&65280)!==(q&65280)?2:1)
p.x2=q}},
$S:0}
M.f3.prototype={
$0(){var s,r,q,p=this.a
if(p.y2===0){s=p.C
r=p.M
q=p.m
p.C=s+((r&65280)!==(q&65280)?2:1)
p.x2=q}},
$S:0}
M.fe.prototype={
$0(){var s=this.a,r=s.A(0,s.m)
s.v=C.b.l(r,7)&1
s.aa=C.b.l(r,6)&1
s.y2=(r&s.r2)>>>0},
$S:0}
M.fp.prototype={
$0(){var s=this.a
if(s.v===1){++s.C
s.x2=s.m}},
$S:0}
M.fu.prototype={
$0(){var s,r,q,p=this.a
if(p.y2!==0){s=p.C
r=p.M
q=p.m
p.C=s+((r&65280)!==(q&65280)?2:1)
p.x2=q}},
$S:0}
M.fv.prototype={
$0(){var s,r,q,p=this.a
if(p.v===0){s=p.C
r=p.M
q=p.m
p.C=s+((r&65280)!==(q&65280)?2:1)
p.x2=q}},
$S:0}
M.en.prototype={
$0(){var s,r=this.a,q=r.x2+=2
r.ap(C.b.l(q,8)&255)
r.ap(r.x2&255)
r.a1=1
q=r.y1
s=r.y2===0?1:0
r.ap((q|s<<1|r.a4<<2|r.Y<<3|r.U<<5|r.aa<<6|r.v<<7|16)>>>0)
r.a4=1
s=r.aV(65534)
r.x2=s
r.x2=s-1},
$S:0}
M.eo.prototype={
$0(){var s,r,q,p=this.a
if(p.aa===0){s=p.C
r=p.M
q=p.m
p.C=s+((r&65280)!==(q&65280)?2:1)
p.x2=q}},
$S:0}
M.ep.prototype={
$0(){var s,r,q,p=this.a
if(p.aa===1){s=p.C
r=p.M
q=p.m
p.C=s+((r&65280)!==(q&65280)?2:1)
p.x2=q}},
$S:0}
M.eq.prototype={
$0(){this.a.y1=0},
$S:0}
M.er.prototype={
$0(){this.a.Y=0},
$S:0}
M.es.prototype={
$0(){this.a.a4=0},
$S:0}
M.et.prototype={
$0(){this.a.aa=0},
$S:0}
M.eu.prototype={
$0(){var s=this.a,r=s.r2-s.A(0,s.m)
s.y1=r>=0?1:0
s.v=C.b.l(r,7)&1
s.y2=r&255
s.C=s.C+s.I},
$S:0}
M.ev.prototype={
$0(){var s=this.a,r=s.rx-s.A(0,s.m)
s.y1=r>=0?1:0
s.v=C.b.l(r,7)&1
s.y2=r&255},
$S:0}
M.ew.prototype={
$0(){var s=this.a,r=s.ry-s.A(0,s.m)
s.y1=r>=0?1:0
s.v=C.b.l(r,7)&1
s.y2=r&255},
$S:0}
M.ey.prototype={
$0(){var s=this.a,r=s.A(0,s.m)-1&255
s.v=r>>>7&1
s.y2=r
s.D(s.m,r)},
$S:0}
M.ez.prototype={
$0(){var s=this.a,r=s.rx=s.rx-1&255
s.v=r>>>7&1
s.y2=r},
$S:0}
M.eA.prototype={
$0(){var s=this.a,r=s.ry=s.ry-1&255
s.v=r>>>7&1
s.y2=r},
$S:0}
M.eB.prototype={
$0(){var s=this.a,r=s.r2=(s.A(0,s.m)^s.r2)&255
s.v=r>>>7&1
s.y2=r
s.C=s.C+s.I},
$S:0}
M.eC.prototype={
$0(){var s=this.a,r=s.A(0,s.m)+1&255
s.v=r>>>7&1
s.y2=r
s.D(s.m,r&255)},
$S:0}
M.eD.prototype={
$0(){var s=this.a,r=s.rx=s.rx+1&255
s.v=r>>>7&1
s.y2=r},
$S:0}
M.eE.prototype={
$0(){var s=this.a,r=s.ry=++s.ry&255
s.v=r>>>7&1
s.y2=r},
$S:0}
M.eF.prototype={
$0(){var s=this.a
s.x2=s.m-1},
$S:0}
M.eG.prototype={
$0(){var s=this.a
s.ap(C.b.l(s.x2,8)&255)
s.ap(s.x2&255)
s.x2=s.m-1},
$S:0}
M.eH.prototype={
$0(){var s=this.a,r=s.r2=s.A(0,s.m)
s.v=C.b.l(r,7)&1
s.y2=r
s.C=s.C+s.I},
$S:0}
M.eJ.prototype={
$0(){var s=this.a,r=s.rx=s.A(0,s.m)
s.v=C.b.l(r,7)&1
s.y2=r
s.C=s.C+s.I},
$S:0}
M.eK.prototype={
$0(){var s=this.a,r=s.ry=s.A(0,s.m)
s.v=C.b.l(r,7)&1
s.y2=r
s.C=s.C+s.I},
$S:0}
M.eL.prototype={
$0(){var s,r=this.a
if(r.W===4){s=r.r2&255
r.y1=s&1
s=r.r2=s>>>1}else{s=r.A(0,r.m)&255
r.y1=s&1
s=s>>>1
r.D(r.m,s)}r.v=0
r.y2=s},
$S:0}
M.eM.prototype={
$0(){},
$S:0}
M.eN.prototype={
$0(){var s=this.a,r=(s.A(0,s.m)|s.r2)&255
s.v=r>>>7&1
s.r2=s.y2=r
if(s.W!==11)s.C=s.C+s.I},
$S:0}
M.eO.prototype={
$0(){var s=this.a
s.ap(s.r2)},
$S:0}
M.eP.prototype={
$0(){var s,r,q=this.a
q.a1=1
s=q.y1
r=q.y2===0?1:0
q.ap((s|r<<1|q.a4<<2|q.Y<<3|q.U<<5|q.aa<<6|q.v<<7|16)>>>0)},
$S:0}
M.eQ.prototype={
$0(){var s=this.a,r=s.r2=s.aW()
s.v=C.b.l(r,7)&1
s.y2=r},
$S:0}
M.eR.prototype={
$0(){var s=this.a,r=s.aW()
s.y1=r&1
s.y2=(C.b.l(r,1)&1)===1?0:1
s.a4=C.b.l(r,2)&1
s.Y=C.b.l(r,3)&1
s.a1=C.b.l(r,4)&1
s.U=C.b.l(r,5)&1
s.aa=C.b.l(r,6)&1
s.v=C.b.l(r,7)&1
s.U=1},
$S:0}
M.eS.prototype={
$0(){var s,r,q=this.a
if(q.W===4){s=q.r2
r=q.y1
q.a6=r
q.y1=C.b.l(s,7)&1
s=q.r2=(s<<1&255)+r}else{s=q.A(0,q.m)
r=q.y1
q.a6=r
q.y1=C.b.l(s,7)&1
s=(s<<1&255)+r
q.D(q.m,s)}q.v=s>>>7&1
q.y2=s},
$S:0}
M.eU.prototype={
$0(){var s,r,q,p=this.a
if(p.W===4){s=p.y1<<7>>>0
p.a6=s
r=p.r2
p.y1=r&1
q=p.r2=C.b.l(r,1)+s}else{q=p.A(0,p.m)
s=p.y1<<7>>>0
p.a6=s
p.y1=q&1
q=C.b.l(q,1)+s
p.D(p.m,q)}p.v=q>>>7&1
p.y2=q},
$S:0}
M.eV.prototype={
$0(){var s,r=this.a,q=r.aW()
r.y1=q&1
r.y2=(C.b.l(q,1)&1)===0?1:0
r.a4=C.b.l(q,2)&1
r.Y=C.b.l(q,3)&1
r.a1=C.b.l(q,4)&1
r.U=C.b.l(q,5)&1
r.aa=C.b.l(q,6)&1
r.v=C.b.l(q,7)&1
s=r.aW()
r.x2=s
s=r.x2=s+(r.aW()<<8>>>0)
if(s===65535)return
r.x2=s-1
r.U=1},
$S:0}
M.eW.prototype={
$0(){var s=this.a,r=s.aW()
s.x2=r
r+=s.aW()<<8>>>0
s.x2=r
if(r===65535)return},
$S:0}
M.eX.prototype={
$0(){var s,r,q=this.a,p=q.r2-q.A(0,q.m)-(1-q.y1)
q.v=C.b.l(p,7)&1
s=p&255
q.y2=s
r=q.r2
q.aa=((r^p)&128)!==0&&((r^q.A(0,q.m))&128)!==0?1:0
q.y1=p<0?0:1
q.r2=s
if(q.W!==11)q.C=q.C+q.I},
$S:0}
M.eY.prototype={
$0(){this.a.y1=1},
$S:0}
M.eZ.prototype={
$0(){this.a.Y=1},
$S:0}
M.f_.prototype={
$0(){this.a.a4=1},
$S:0}
M.f0.prototype={
$0(){var s=this.a
s.D(s.m,s.r2)},
$S:0}
M.f1.prototype={
$0(){var s=this.a
s.D(s.m,s.rx)},
$S:0}
M.f2.prototype={
$0(){var s=this.a
s.D(s.m,s.ry)},
$S:0}
M.f4.prototype={
$0(){var s=this.a,r=s.rx=s.r2
s.v=C.b.l(r,7)&1
s.y2=r},
$S:0}
M.f5.prototype={
$0(){var s=this.a,r=s.ry=s.r2
s.v=C.b.l(r,7)&1
s.y2=r},
$S:0}
M.f6.prototype={
$0(){var s=this.a,r=s.y,q=r-256
s.rx=q
s.v=C.b.l(r,7)&1
s.y2=q},
$S:0}
M.f7.prototype={
$0(){var s=this.a,r=s.r2=s.rx
s.v=C.b.l(r,7)&1
s.y2=r},
$S:0}
M.f8.prototype={
$0(){var s=this.a,r=s.rx+256
s.y=r
s.y=r&255|256},
$S:0}
M.f9.prototype={
$0(){var s=this.a,r=s.r2=s.ry
s.v=C.b.l(r,7)&1
s.y2=r},
$S:0}
M.fa.prototype={
$0(){},
$S:0}
M.fb.prototype={
$0(){var s=this.a
s.m=s.A(0,s.M+2)},
$S:0}
M.fc.prototype={
$0(){var s=this.a,r=s.m=s.A(0,s.M+2),q=s.x2
if(r<128)s.m=r+q
else s.m=r+(q-256)},
$S:0}
M.fd.prototype={
$0(){},
$S:0}
M.ff.prototype={
$0(){var s=this.a
s.m=s.aV(s.M+2)},
$S:0}
M.fg.prototype={
$0(){var s=this.a
s.m=s.r2},
$S:0}
M.fh.prototype={
$0(){var s=this.a
s.m=s.x2},
$S:0}
M.fi.prototype={
$0(){var s=this.a
s.m=s.A(0,s.M+2)+s.rx&255},
$S:0}
M.fj.prototype={
$0(){var s=this.a
s.m=s.A(0,s.M+2)+s.ry&255},
$S:0}
M.fk.prototype={
$0(){var s=this.a,r=s.m=s.aV(s.M+2),q=r+s.rx
if((r&65280)!==(q&65280))s.I=1
s.m=q},
$S:0}
M.fl.prototype={
$0(){var s=this.a,r=s.m=s.aV(s.M+2),q=r+s.ry
if((r&65280)!==(q&65280))s.I=1
s.m=q},
$S:0}
M.fm.prototype={
$0(){var s=this.a,r=s.m=s.A(0,s.M+2),q=r+s.rx
if((r&65280)!==(q&65280))s.I=1
s.m=q
r=q&255
s.m=r
s.m=s.aV(r)},
$S:0}
M.fn.prototype={
$0(){var s=this.a,r=s.m=s.aV(s.A(0,s.M+2)),q=r+s.ry
if((r&65280)!==(q&65280))s.I=1
s.m=q},
$S:0}
M.fo.prototype={
$0(){var s,r,q=this.a,p=q.aV(q.M+2)
q.m=p
if(p<8191){p=q.gL()
s=q.m
if(s<0||s>=p.length)return H.a(p,s)
s=p[s]
p=q.gL()
r=q.m
r=r&65280|(r&255)+1&255
if(r>=p.length)return H.a(p,r)
q.m=s+(p[r]<<8>>>0)}else{p=q.gac().A(0,q.m)
s=q.gac()
r=q.m
q.m=p+(s.A(0,r&65280|(r&255)+1&255)<<8>>>0)}},
$S:0}
M.fq.prototype={
$0(){},
$S:0}
M.fr.prototype={
$0(){var s,r=this.a
if(r.a4!==0)return
r.ap(C.b.l(++r.x,8)&255)
r.ap(r.x&255)
r.ap(r.fy)
r.ch=1
r.cy=0
s=(r.gac().A(0,65534)|r.gac().A(0,65535)<<8)>>>0
r.x=s
r.x=s-1},
$S:0}
M.fs.prototype={
$0(){var s=this.a,r=s.fy
if((s.gac().A(0,8192)&128)!==0){s.ap(C.b.l(++s.x,8)&255)
s.ap(s.x&255)
s.ap(r)
r=(s.gac().A(0,65530)|s.gac().A(0,65531)<<8)>>>0
s.x=r
s.x=r-1}},
$S:0}
M.ft.prototype={
$0(){var s=this.a,r=(s.gac().A(0,65532)|s.gac().A(0,65533)<<8)>>>0
s.x=r
s.x=r-1},
$S:0}
M.hj.prototype={}
M.fR.prototype={
a_(a){var s=this.a,r=this.b
if(a>=r.length)return H.a(r,a)
r=r[a]
if(r<0||r>=s.length)return H.a(s,r)
if(H.R(s[r]))return 65
else return 64},
aJ(a,b){var s,r,q=this
if(b===65){s=q.a
r=q.b
if(a>=r.length)return H.a(r,a)
C.a.h(s,r[a],!0)}else if(b===64){s=q.a
r=q.b
if(a>=r.length)return H.a(r,a)
C.a.h(s,r[a],!1)}},
h0(a){var s,r,q,p=this,o=a.keyCode
o.toString
s=p.a
if(o>=s.length)return
C.a.h(s,o,!0)
s=p.b
r=s.length
if(6>=r)return H.a(s,6)
q=s[6]
if(o===q){o=p.a
if(7>=r)return H.a(s,7)
C.a.h(o,s[7],!1)}else{if(7>=r)return H.a(s,7)
if(o===s[7])C.a.h(p.a,q,!1)
else{r=s[4]
if(o===r)C.a.h(p.a,s[5],!1)
else if(o===s[5])C.a.h(p.a,r,!1)}}},
h1(a){var s,r=a.keyCode
r.toString
s=this.a
if(r>=s.length)return
C.a.h(s,r,!1)
if(this.c===0)switch(a.code){case"F5":r=this.d
if(r.ch){r.bv()
r.B(0)
s=r.cx
if(s!=null)r.dA(s)
r.bQ()}break
case"F10":break
case"F12":break}},
sfz(a){this.a=t.w.a(a)}}
M.cK.prototype={
gdP(){var s=this.c
return s==null?H.b(H.c("romManager")):s},
fv(){var s,r=this
if(r.f){s=document.querySelector("#fps_counter")
s.toString
J.k8(s,""+(r.id-r.k2)+" ["+(r.k1-r.k3)+"]")
r.k2=r.id
r.k3=r.k1}P.iV(C.p,r.gd8(),t.H)},
he(){var s,r,q,p,o=this,n=o.db
n.toString
s=o.gdP().x
s.toString
n.dA(s)
if(o.db.z.fr){o.dx=o.cy.gcu()
if(o.d)P.v("SCALE NOT SUPPORTED, USING NO SCALE")
$.at()
P.v("nesdart.run(): dartendo is now starting the processor.")
o.db.gw()}else P.v("ERROR: dartendo was unable to find ROM.")
o.db.gw().k1=!1
o.db.gw().k3=!0
r=$.n().F(5,0)
if(3>=r.length)return H.a(r,3)
r[3]=2
n=document
n.toString
s=t.eN
q=s.a(new M.fB(o))
t.Z.a(null)
p=t.g
W.V(n,"keydown",q,!1,p)
W.V(n,"keyup",s.a(new M.fC(o)),!1,p)
p=window
p.toString
C.w.dO(p,o.gdc(o))},
fB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="papu"
H.jo(b)
if(e.db.gw().k1){P.v("NOT RUNNING")
s=e.db.gw()
s.d=s.r2
s.e=s.rx
s.f=s.ry
s.r=s.x1
s.x=s.x2
s.z=s.y1
s.Q=s.y2===0?1:0
s.ch=s.a4
s.cx=s.Y
s.cy=s.a1
s.db=s.U
s.dx=s.aa
s.dy=s.v
return}s=e.fx
r=s.b
if(r==null)r=$.ik.$0()
q=C.b.aK(1000*(r-s.a),$.iF())
p=q-e.fy
o=!e.e||!e.db.gay().d.f||e.db.gay().id<(e.db.gay().gbt().length/2|0)
if(p<1000&&o){n=e.db.a.gcu()
m=e.db.gw()
l=e.db.gp()
for(s=t.bT,r=t.N,k=t.S;j=e.go,j<=0;){for(;!0;){j=m.id
if(j===0){i=m.fP()
if(e.e){j=e.db.d;(j==null?H.b(H.c(d)):j).c5(i)}i*=3}else if(j>8){if(e.e){j=e.db.d;(j==null?H.b(H.c(d)):j).c5(8)}m.id-=8
i=24}else{i=j*3
if(e.e){h=e.db.d;(h==null?H.b(H.c(d)):h).c5(j)}m.id=0}l.cb=i
l.fQ()
if(n.x){if(e.x){if(!e.r1.fH(-1))e.r1.h(0,-1,P.j_(["matchid",e.y,"playerid",e.z],r,k))
g=new H.a3(s)
j=e.z
h=e.cy
if(j===1){j=h.d
f=j==null?H.b(H.c("kbJoy1")):j}else{j=h.e
f=j==null?H.b(H.c("kbJoy2")):j}g.h(0,"left",f.a_(6))
g.h(0,"right",f.a_(7))
g.h(0,"up",f.a_(4))
g.h(0,"down",f.a_(5))
g.h(0,"a",f.a_(0))
g.h(0,"b",f.a_(1))
g.h(0,"select",f.a_(3))
g.h(0,"start",f.a_(2))
e.r1.h(0,e.id,g)
if(C.b.V(e.id,10)===0){e.r1.b4(0)
e.r1.h(0,-1,P.j_(["matchid",e.y,"playerid",e.z],r,k))}}if(n.z)++e.k1;++e.id
n.fT()
if(e.x)e.f9()
break}}e.go+=16}e.go=j-p}e.fy=q
s=window
s.toString
C.w.dO(s,e.gdc(e))},
f9(){var s,r,q,p=this,o=p.k4.H(0,p.id)
if(o==null)return
s=p.z
r=p.cy
q=s===1?r.gaD():r.gao()
s=o.H(0,"left")
s.toString
q.aJ(6,s)
s=o.H(0,"right")
s.toString
q.aJ(7,s)
s=o.H(0,"up")
s.toString
q.aJ(4,s)
s=o.H(0,"down")
s.toString
q.aJ(5,s)
s=o.H(0,"a")
s.toString
q.aJ(0,s)
s=o.H(0,"b")
s.toString
q.aJ(1,s)
s=o.H(0,"select")
s.toString
q.aJ(3,s)
s=o.H(0,"start")
s.toString
q.aJ(2,s)},
sfl(a){this.k4=t.I.a(a)},
sfs(a){this.r1=t.I.a(a)}}
M.fB.prototype={
$1(a){t.g.a(a)
this.a.cy.gao().h0(a)},
$S:14}
M.fC.prototype={
$1(a){t.g.a(a)
this.a.cy.gao().h1(a)},
$S:14}
M.cY.prototype={
D(a,b){var s,r,q,p,o,n,m,l=this
if(a<32768){l.T(a,b)
return}if((b&128)!==0){l.k2=l.k3=0
if(l.cA(a)===0)l.fx=l.fr=1}else{s=l.k2
r=l.k3
l.k2=(s&255-C.b.bk(1,r)|C.b.bk(b&1,r))>>>0;++r
l.k3=r
if(r===5){s=l.cA(a)
r=l.k2
if(s===0){q=r&3
if(q!==l.dx){l.dx=q
s=l.a
if((q&2)===0)s.gp().u(3)
else{s=s.gp()
s.u((l.dx&1)!==0?1:0)}}l.fr=r>>>2&1
l.fx=r>>>3&1
l.fy=r>>>4&1}else if(s===1){s=l.go=r>>>4&1
p=l.a.z.z
if(p>0)if(l.fy===0){r&=15
if(s===0)l.aQ(r,0)
else l.aQ(C.b.ai(p,2)+r,0)}else{r&=15
if(s===0)l.K(r,0)
else l.K(C.b.ai(p,2)+r,0)}}else if(s===2){s=r>>>4&1
l.id=s
p=l.a.z.z
if(p>0)if(l.fy===1){r&=15
if(s===0)l.K(r,4096)
else l.K(C.b.ai(p,2)+r,4096)}}else{o=l.a.z.y
if(o>=32)if(l.fy===0)n=l.go===1?16:0
else n=(l.go|l.id<<1)<<3>>>0
else n=o>=16?l.go===1?8:0:0
s=r&15
if(l.fx===0)l.bF(n+s,32768)
else{m=n*2+s
if(l.fr===0)l.J(m,49152)
else l.J(m,32768)}}l.k3=l.k2=0}}},
cA(a){if(a>=32768&&a<=40959)return 0
else if(a>=40960&&a<=49151)return 1
else if(a>=49152&&a<=57343)return 2
else return 3},
X(a){var s=this
if(!s.gn().fr)return
s.J(0,32768)
s.J(s.gn().y-1,49152)
s.Z()
s.ax()
s.a.gw().R(2)},
B(a){var s=this
s.dx=s.k3=s.k2=0
s.fx=s.fr=1
s.id=s.go=s.fy=0}}
M.cZ.prototype={
D(a,b){if(a<32768)this.T(a,b)
else this.J(b,32768)},
X(a){var s=this
if(!s.gn().fr)return
s.J(0,32768)
s.J(s.gn().y-1,49152)
s.Z()
s.a.gw().R(2)}}
M.d_.prototype={
D(a,b){var s,r=this
if(a<32768)r.T(a,b)
else{s=C.b.V(b,C.b.ai(r.a.z.z,2))*2
r.K(s,0)
r.K(s+1,4096)
r.aQ(b*2,0)}}}
M.d0.prototype={
D(a,b){var s,r,q,p=this
if(a<32768){p.T(a,b)
return}if(a===32768){p.dx=b&7
s=C.b.l(b,6)&1
if(s!==p.dy)p.k1=!0
p.dy=s
p.fr=C.b.l(b,7)&1}else if(a===32769){r=p.dx
if(r===0){r=b+1
if(p.fr===0){p.k(b,0)
p.k(r,1024)}else{p.k(b,4096)
p.k(r,5120)}}else if(r===1){r=b+1
if(p.fr===0){p.k(b,2048)
p.k(r,3072)}else{p.k(b,6144)
p.k(r,7168)}}else if(r===2)if(p.fr===0)p.k(b,4096)
else p.k(b,0)
else if(r===3)if(p.fr===0)p.k(b,5120)
else p.k(b,1024)
else if(r===4)if(p.fr===0)p.k(b,6144)
else p.k(b,2048)
else if(r===5)if(p.fr===0)p.k(b,7168)
else p.k(b,3072)
else if(r===6){if(p.k1){r=p.dy
q=p.a.z
if(r===0)p.i((q.y-1)*2,49152)
else p.i((q.y-1)*2,32768)
p.k1=!1}if(p.dy===0)p.i(b,32768)
else p.i(b,49152)}else if(r===7){p.i(b,40960)
if(p.k1){r=p.dy
q=p.a.z
if(r===0)p.i((q.y-1)*2,49152)
else p.i((q.y-1)*2,32768)
p.k1=!1}}}else if(a===40960){r=p.a
if((b&1)!==0)r.gp().u(1)
else r.gp().u(0)}else if(a===40961)p.a.z.toString
else if(a===49152)p.fy=b
else if(a===49153)p.go=b
else if(a===57344)p.id=0
else if(a===57345)p.id=1},
X(a){var s,r=this
if(!r.gn().fr)return
s=r.a
r.i((s.z.y-1)*2,49152)
r.i((s.z.y-1)*2+1,57344)
r.i(0,32768)
r.i(1,40960)
r.Z()
r.ax()
s.gw().R(2)},
c6(){var s=this
if(s.id===1)if(--s.fy<0){s.a.gw().R(0)
s.fy=s.go}},
B(a){var s=this
s.id=s.go=s.fy=s.fr=s.dy=s.dx=0
s.k1=!1}}
M.d1.prototype={
gdI(){var s=this.fr
return s==null?H.b(H.c("prgrom")):s},
ec(a){var s,r,q,p,o,n,m=this
m.dx=0
m.dy=-1
s=m.a.z
r=s.y
m.sel(t.L.a($.n().F(r*16384,0)))
for(q=0;q<r;++q){p=$.n()
o=s.d
if(o==null)o=H.b(H.c("rom"))
if(q>=o.length)return H.a(o,q)
o=o[q]
n=m.fr
if(n==null)n=H.b(H.c("prgrom"))
p.bm(o,0,n,q*16384,16384)}},
A(a,b){var s,r,q=this
if(b<32768)return q.e8(0,b)
else if(b+q.dx>=262144){s=q.gdI()
r=b+q.dx-262144
if(r<0||r>=s.length)return H.a(s,r)
return s[r]}else{s=q.gdI()
r=b+q.dx
if(r>=s.length)return H.a(s,r)
return s[r]}},
D(a,b){var s,r,q=this
if(a<32768)q.T(a,b)
else{q.dx=(b&15)-1<<15>>>0
s=b&16
if(q.dy!==s){q.dy=s
r=q.a
if(s===0)r.gp().u(3)
else r.gp().u(4)}}},
B(a){this.e9(0)
this.dx=0
this.dy=-1},
sel(a){this.fr=t.T.a(a)}}
M.d2.prototype={
D(a,b){var s,r=this
if(a<32768)r.T(a,b)
else{b&=255
switch(a>>>12&15){case 10:r.i(b,32768)
return
case 11:r.fr=b
if(r.dx===253)r.K(b,0)
return
case 12:r.fx=b
if(r.dx===254)r.K(b,0)
return
case 13:r.fy=b
if(r.dy===253)r.K(b,4096)
return
case 14:r.go=b
if(r.dy===254)r.K(b,4096)
return
case 15:s=r.a
if((b&1)===0)s.gp().u(0)
else s.gp().u(1)
return}}},
X(a){var s,r=this
if(!r.gn().fr)return
s=r.gn().y*2
r.i(0,32768)
r.i(s-3,40960)
r.i(s-2,49152)
r.i(s-1,57344)
r.Z()
r.ax()
r.a.gw().R(2)},
bq(a){var s=this,r=a&8176
if(r===4048&&s.dx!==253){s.K(s.fr,0)
s.dx=253}else if(r===4064&&s.dx!==254){s.K(s.fx,0)
s.dx=254}else if(r===8144&&s.dy!==253){s.K(s.fy,4096)
s.dy=253}else if(r===8160&&s.dy!==254){s.K(s.go,4096)
s.dy=254}},
B(a){var s=this
s.dy=s.dx=254
s.fr=0
s.fx=4
s.go=s.fy=0}}
M.d6.prototype={
B(a){var s,r,q,p=this
p.sag($.n().F(11,0))
s=p.fx
r=s.length
if(0>=r)return H.a(s,0)
s[0]=0
if(1>=r)return H.a(s,1)
s[1]=1
q=p.fy
if(2>=r)return H.a(s,2)
s[2]=q-2
if(3>=r)return H.a(s,3)
s[3]=q-1
if(4>=r)return H.a(s,4)
s[4]=0
if(5>=r)return H.a(s,5)
s[5]=0
if(6>=r)return H.a(s,6)
s[6]=0
if(7>=r)return H.a(s,7)
s[7]=0
if(8>=r)return H.a(s,8)
s[8]=0
if(9>=r)return H.a(s,9)
s[9]=0
if(10>=r)return H.a(s,10)
s[10]=0
p.dy=0},
D(a,b){var s,r=this
if(a<32768)r.T(a,b)
else switch(a){case 32768:s=r.fx
if(0>=s.length)return H.a(s,0)
s[0]=s[0]&240|b&15
r.i(s[0],32768)
break
case 32769:s=r.fx
if(0>=s.length)return H.a(s,0)
s[0]=s[0]&15|(b&15)<<4
r.i(s[0],32768)
break
case 32770:s=r.fx
if(1>=s.length)return H.a(s,1)
s[1]=s[1]&240|b&15
r.i(s[1],40960)
break
case 32771:s=r.fx
if(1>=s.length)return H.a(s,1)
s[1]=s[1]&15|(b&15)<<4
r.i(s[1],40960)
break
case 36864:s=r.fx
if(2>=s.length)return H.a(s,2)
s[2]=s[2]&240|b&15
r.i(s[2],49152)
break
case 36865:s=r.fx
if(2>=s.length)return H.a(s,2)
s[2]=s[2]&15|(b&15)<<4
r.i(s[2],49152)
break
case 40960:s=r.fx
if(3>=s.length)return H.a(s,3)
s[3]=s[3]&240|b&15
r.k(s[3],0)
break
case 40961:s=r.fx
if(3>=s.length)return H.a(s,3)
s[3]=s[3]&15|(b&15)<<4
r.k(s[3],0)
break
case 40962:s=r.fx
if(4>=s.length)return H.a(s,4)
s[4]=s[4]&240|b&15
r.k(s[4],1024)
break
case 40963:s=r.fx
if(4>=s.length)return H.a(s,4)
s[4]=s[4]&15|(b&15)<<4
r.k(s[4],1024)
break
case 45056:s=r.fx
if(5>=s.length)return H.a(s,5)
s[5]=s[5]&240|b&15
r.k(s[5],2048)
break
case 45057:s=r.fx
if(5>=s.length)return H.a(s,5)
s[5]=s[5]&15|(b&15)<<4
r.k(s[5],2048)
break
case 45058:s=r.fx
if(6>=s.length)return H.a(s,6)
s[6]=s[6]&240|b&15
r.k(s[6],3072)
break
case 45059:s=r.fx
if(6>=s.length)return H.a(s,6)
s[6]=s[6]&15|(b&15)<<4
r.k(s[6],3072)
break
case 49152:s=r.fx
if(7>=s.length)return H.a(s,7)
s[7]=s[7]&240|b&15
r.k(s[7],4096)
break
case 49153:s=r.fx
if(7>=s.length)return H.a(s,7)
s[7]=s[7]&15|(b&15)<<4
r.k(s[7],4096)
break
case 49154:s=r.fx
if(8>=s.length)return H.a(s,8)
s[8]=s[8]&240|b&15
r.k(s[8],5120)
break
case 49155:s=r.fx
if(8>=s.length)return H.a(s,8)
s[8]=s[8]&15|(b&15)<<4
r.k(s[8],5120)
break
case 53248:s=r.fx
if(9>=s.length)return H.a(s,9)
s[9]=s[9]&240|b&15
r.k(s[9],6144)
break
case 53249:s=r.fx
if(9>=s.length)return H.a(s,9)
s[9]=s[9]&15|(b&15)<<4
r.k(s[9],6144)
break
case 53250:s=r.fx
if(10>=s.length)return H.a(s,10)
s[10]=s[10]&240|b&15
r.k(s[10],7168)
break
case 53251:s=r.fx
if(10>=s.length)return H.a(s,10)
s[10]=s[10]&15|(b&15)<<4
r.k(s[10],7168)
break
case 57344:r.dy=r.dy&65520|b&15
break
case 57345:r.dy=r.dy&65295|(b&15)<<4
break
case 57346:r.dy=r.dy&61695|(b&15)<<8
break
case 57347:r.dy=r.dy&4095|(b&15)<<12
break
case 61440:break
case 61441:break
case 61442:b&=3
if(b===0)r.a.gp().u(1)
else{s=r.a
if(b===1)s.gp().u(0)
else s.gp().u(3)}break}},
X(a){var s=this
if(!s.gn().fr){P.v("Mapper018.loadRom: VRC2: Invalid ROM! Unable to load.")
return}s.fy=s.gn().y*2
s.i(0,32768)
s.i(1,40960)
s.i(s.fy-2,49152)
s.i(s.fy-1,57344)
s.Z()
s.ax()
s.a.gw().R(2)},
sag(a){this.fx=t.L.a(a)}}
M.d7.prototype={
B(a){var s,r,q=this
q.sag($.n().F(9,0))
s=q.fx
r=s.length
if(0>=r)return H.a(s,0)
s[0]=0
if(1>=r)return H.a(s,1)
s[1]=1
if(2>=r)return H.a(s,2)
s[2]=2
if(3>=r)return H.a(s,3)
s[3]=3
if(4>=r)return H.a(s,4)
s[4]=4
if(5>=r)return H.a(s,5)
s[5]=5
if(6>=r)return H.a(s,6)
s[6]=6
if(7>=r)return H.a(s,7)
s[7]=7
if(8>=r)return H.a(s,8)
s[8]=0
q.dy=q.fr=0},
D(a,b){var s,r=this
if(a<32768)r.T(a,b)
else switch(a&61647){case 32768:s=r.fx
if(8>=s.length)return H.a(s,8)
if((s[8]&2)!==0)r.i(b,49152)
else r.i(b,32768)
break
case 40960:r.i(b,40960)
break
case 36864:b&=3
if(b===0)r.a.gp().u(0)
else if(b===1)r.a.gp().u(1)
else{s=r.a
if(b===2)s.gp().u(3)
else s.gp().u(4)}break
case 36866:case 36992:s=r.fx
if(8>=s.length)return H.a(s,8)
s[8]=b
break
case 45056:s=r.fx
if(0>=s.length)return H.a(s,0)
s[0]=s[0]&240|b&15
r.k(s[0],0)
break
case 45058:case 45120:s=r.fx
if(0>=s.length)return H.a(s,0)
s[0]=s[0]&15|(b&15)<<4
r.k(s[0],0)
break
case 45057:case 45060:case 45184:s=r.fx
if(1>=s.length)return H.a(s,1)
s[1]=s[1]&240|b&15
r.k(s[1],1024)
break
case 45059:case 45062:case 45248:s=r.fx
if(1>=s.length)return H.a(s,1)
s[1]=s[1]&15|(b&15)<<4
r.k(s[1],1024)
break
case 49152:s=r.fx
if(2>=s.length)return H.a(s,2)
s[2]=s[2]&240|b&15
r.k(s[2],2048)
break
case 49154:case 49216:s=r.fx
if(2>=s.length)return H.a(s,2)
s[2]=s[2]&15|(b&15)<<4
r.k(s[2],2048)
break
case 49153:case 49156:case 49280:s=r.fx
if(3>=s.length)return H.a(s,3)
s[3]=s[3]&240|b&15
r.k(s[3],3072)
break
case 49155:case 49158:case 49344:s=r.fx
if(3>=s.length)return H.a(s,3)
s[3]=s[3]&15|(b&15)<<4
r.k(s[3],3072)
break
case 53248:s=r.fx
if(4>=s.length)return H.a(s,4)
s[4]=s[4]&240|b&15
r.k(s[4],4096)
break
case 53250:case 53312:s=r.fx
if(4>=s.length)return H.a(s,4)
s[4]=s[4]&15|(b&15)<<4
r.k(s[4],4096)
break
case 53249:case 53252:case 53376:s=r.fx
if(5>=s.length)return H.a(s,5)
s[5]=s[5]&240|b&15
r.k(s[5],5120)
break
case 53251:case 53254:case 53440:s=r.fx
if(5>=s.length)return H.a(s,5)
s[5]=s[5]&15|(b&15)<<4
r.k(s[5],5120)
break
case 57344:s=r.fx
if(6>=s.length)return H.a(s,6)
s[6]=s[6]&240|b&15
r.k(s[6],6144)
break
case 57346:case 57408:s=r.fx
if(6>=s.length)return H.a(s,6)
s[6]=s[6]&15|(b&15)<<4
r.k(s[6],6144)
break
case 57345:case 57348:case 57472:s=r.fx
if(7>=s.length)return H.a(s,7)
s[7]=s[7]&240|b&15
r.k(s[7],7168)
break
case 57347:case 57350:case 57536:s=r.fx
if(7>=s.length)return H.a(s,7)
s[7]=s[7]&15|(b&15)<<4
r.k(s[7],7168)
break
case 61440:r.dy=r.dy&240|b&15
break
case 61442:case 61504:r.dy=r.dy&15|(b&15)<<4
break
case 61443:case 61632:r.fr=(r.fr&1)*3
break
case 61444:case 61568:r.fr=b&3
break}},
X(a){var s,r=this
if(!r.gn().fr){P.v("Mapper012.loadRom: VRC4: Invalid ROM! Unable to load.")
return}s=r.gn().y*2
r.i(0,32768)
r.i(1,40960)
r.i(s-2,49152)
r.i(s-1,57344)
r.Z()
r.ax()
r.a.gw().R(2)},
sag(a){this.fx=t.L.a(a)}}
M.d9.prototype={
B(a){var s,r,q=this
q.sag($.n().F(9,0))
s=q.fx
r=s.length
if(0>=r)return H.a(s,0)
s[0]=0
if(1>=r)return H.a(s,1)
s[1]=1
if(2>=r)return H.a(s,2)
s[2]=2
if(3>=r)return H.a(s,3)
s[3]=3
if(4>=r)return H.a(s,4)
s[4]=4
if(5>=r)return H.a(s,5)
s[5]=5
if(6>=r)return H.a(s,6)
s[6]=6
if(7>=r)return H.a(s,7)
s[7]=7
if(8>=r)return H.a(s,8)
s[8]=0
q.dy=q.fr=0},
D(a,b){var s,r=this
if(a<32768)r.T(a,b)
else switch(a&65535){case 32768:case 32772:case 32776:case 32780:s=r.fx
if(8>=s.length)return H.a(s,8)
if(s[8]!==0)r.i(b,49152)
else r.i(b,32768)
break
case 36864:if(b!==255){b&=3
if(b===0)r.a.gp().u(0)
else if(b===1)r.a.gp().u(1)
else{s=r.a
if(b===2)s.gp().u(3)
else s.gp().u(4)}}break
case 36872:s=r.fx
if(8>=s.length)return H.a(s,8)
s[8]=b&2
break
case 40960:case 40964:case 40968:case 40972:r.i(b,40960)
break
case 45056:s=r.fx
if(0>=s.length)return H.a(s,0)
s[0]=s[0]&240|b&15
r.k(s[0],0)
break
case 45057:case 45060:s=r.fx
if(0>=s.length)return H.a(s,0)
s[0]=s[0]&15|(b&15)<<4
r.k(s[0],0)
break
case 45058:case 45064:s=r.fx
if(1>=s.length)return H.a(s,1)
s[1]=s[1]&240|b&15
r.k(s[1],1024)
break
case 45059:case 45068:s=r.fx
if(1>=s.length)return H.a(s,1)
s[1]=s[1]&15|(b&15)<<4
r.k(s[1],1024)
break
case 49152:s=r.fx
if(2>=s.length)return H.a(s,2)
s[2]=s[2]&240|b&15
r.k(s[2],2048)
break
case 49153:case 49156:s=r.fx
if(2>=s.length)return H.a(s,2)
s[2]=s[2]&15|(b&15)<<4
r.k(s[2],2048)
break
case 49154:case 49160:s=r.fx
if(3>=s.length)return H.a(s,3)
s[3]=s[3]&240|b&15
r.k(s[3],3072)
break
case 49155:case 49164:s=r.fx
if(3>=s.length)return H.a(s,3)
s[3]=s[3]&15|(b&15)<<4
r.k(s[3],3072)
break
case 53248:s=r.fx
if(4>=s.length)return H.a(s,4)
s[4]=s[4]&240|b&15
r.k(s[4],4096)
break
case 53249:case 53252:s=r.fx
if(4>=s.length)return H.a(s,4)
s[4]=s[4]&15|(b&15)<<4
r.k(s[4],4096)
break
case 53250:case 53256:s=r.fx
if(5>=s.length)return H.a(s,5)
s[5]=s[5]&240|b&15
r.k(s[5],5120)
break
case 53251:case 53260:s=r.fx
if(5>=s.length)return H.a(s,5)
s[5]=s[5]&15|(b&15)<<4
r.k(s[5],5120)
break
case 57344:s=r.fx
if(6>=s.length)return H.a(s,6)
s[6]=s[6]&240|b&15
r.k(s[6],6144)
break
case 57345:case 57348:s=r.fx
if(6>=s.length)return H.a(s,6)
s[6]=s[6]&15|(b&15)<<4
r.k(s[6],6144)
break
case 57346:case 57352:s=r.fx
if(7>=s.length)return H.a(s,7)
s[7]=s[7]&240|b&15
r.k(s[7],7168)
break
case 57347:case 57356:s=r.fx
if(7>=s.length)return H.a(s,7)
s[7]=s[7]&15|(b&15)<<4
r.k(s[7],7168)
break
case 61440:r.dy=r.dy&240|b&15
break
case 61444:r.dy=r.dy&15|(b&15)<<4
break
case 61448:r.fr=b&3
break
case 61452:r.fr=(r.fr&1)*3
break}},
X(a){var s,r=this
if(!r.gn().fr){P.v("Mapper023.loadROM: VRC2: Invalid ROM! Unable to load.")
return}s=r.gn().y*2
r.i(0,32768)
r.i(1,40960)
r.i(s-2,49152)
r.i(s-1,57344)
r.Z()
r.a.gw().R(2)},
sag(a){this.fx=t.L.a(a)}}
M.da.prototype={
D(a,b){var s,r=this
if(a<32768)r.T(a,b)
else{switch(a&61440){case 32768:s=r.dx
if(0>=s.length)return H.a(s,0)
if((s[0]&2)!==0)r.i(b,49152)
else r.i(b,32768)
break
case 36864:s=r.a
if((b&1)!==0)s.gp().u(1)
else s.gp().u(0)
s=r.dx
if(0>=s.length)return H.a(s,0)
s[0]=b
break
case 40960:r.i(b,40960)
break}switch(a&61447){case 45056:r.k(b,0)
break
case 45057:r.k(b,1024)
break
case 45058:r.k(b,2048)
break
case 45059:r.k(b,3072)
break
case 45060:r.k(b,4096)
break
case 45061:r.k(b,5120)
break
case 45062:r.k(b,6144)
break
case 45063:r.k(b,7168)
break}}},
X(a){var s=this,r=s.gn().y*2
s.i(0,32768)
s.i(1,40960)
s.i(r-2,49152)
s.i(r-1,57344)
s.Z()
s.a.gw().R(2)},
B(a){var s,r,q
this.sag($.n().F(1,0))
for(s=this.dx,r=s.length,q=0;q<r;++q)s[q]=0},
sag(a){this.dx=t.L.a(a)}}
M.de.prototype={
B(a){var s,r
this.sag($.n().F(3,0))
this.dy=0
s=this.fx
r=s.length
if(0>=r)return H.a(s,0)
s[0]=0
if(1>=r)return H.a(s,1)
s[1]=0
if(2>=r)return H.a(s,2)
s[2]=0},
D(a,b){var s,r,q=this
if(a<32768){q.T(a,b)
return}switch(a&61443){case 32768:s=q.fx
r=s.length
if(0>=r)return H.a(s,0)
s[0]=b&15
if(1>=r)return H.a(s,1)
s[1]=b&64
if(2>=r)return H.a(s,2)
s[2]=b&128
break
case 32769:s=q.fx
r=s.length
if(0>=r)return H.a(s,0)
switch(s[0]){case 0:if(2>=r)return H.a(s,2)
if(s[2]!==0)q.al(b,4096)
else q.al(b,0)
break
case 1:if(2>=r)return H.a(s,2)
if(s[2]!==0)q.al(b,6144)
else q.al(b,2048)
break
case 2:if(2>=r)return H.a(s,2)
if(s[2]!==0)q.k(b,0)
else q.k(b,4096)
break
case 3:if(2>=r)return H.a(s,2)
if(s[2]!==0)q.k(b,1024)
else q.k(b,5120)
break
case 4:if(2>=r)return H.a(s,2)
if(s[2]!==0)q.k(b,2048)
else q.k(b,6144)
break
case 5:if(2>=r)return H.a(s,2)
if(s[2]!==0)q.k(b,3072)
else q.k(b,7168)
break
case 6:if(1>=r)return H.a(s,1)
if(s[1]!==0)q.i(b,40960)
else q.i(b,32768)
break
case 7:if(1>=r)return H.a(s,1)
if(s[1]!==0)q.i(b,49152)
else q.i(b,40960)
break
case 8:q.k(b,1024)
break
case 9:q.k(b,3072)
break
case 15:if(1>=r)return H.a(s,1)
if(s[1]!==0)q.i(b,32768)
else q.i(b,49152)
break}break
case 40960:s=q.a
if((b&1)===0)s.gp().u(0)
else s.gp().u(1)
break
case 49152:q.dy=b
break
case 49153:break
case 57344:break
case 57345:break}},
X(a){var s,r,q=this
if(!q.gn().fr){P.v("Mapper064.loadROM: MMC3: Invalid ROM! Unable to load.")
return}s=q.gn().z
r=q.gn().y*2
q.i(0,32768)
q.i(1,40960)
q.i(r-2,49152)
q.i(r-1,57344)
q.aQ(0,0)
P.v("Mapper064.loadROM: CHR = "+s*4)
q.a.gw().R(2)},
sag(a){this.fx=t.L.a(a)}}
M.dj.prototype={
B(a){var s,r
this.sag($.n().F(2,0))
s=this.dx
r=s.length
if(0>=r)return H.a(s,0)
s[0]=0
if(1>=r)return H.a(s,1)
s[1]=1},
D(a,b){var s,r=this
if(a<32768)r.T(a,b)
else switch(a&61440){case 32768:r.i(b,32768)
break
case 36864:s=r.a
if((b&1)!==0)s.gp().u(1)
else s.gp().u(0)
s=r.dx
if(0>=s.length)return H.a(s,0)
s[0]=s[0]&15|(b&2)<<3
r.K(s[0],0)
s=r.dx
if(1>=s.length)return H.a(s,1)
s[1]=s[1]&15|(b&4)<<2
r.K(s[1],4096)
break
case 40960:r.i(b,40960)
break
case 49152:r.i(b,49152)
break
case 57344:s=r.dx
if(0>=s.length)return H.a(s,0)
s[0]=s[0]&16|b&15
r.K(s[0],0)
break
case 61440:s=r.dx
if(1>=s.length)return H.a(s,1)
s[1]=s[1]&16|b&15
r.K(s[1],4096)
break}},
X(a){var s=this,r=s.gn().y*2
s.i(0,32768)
s.i(1,40960)
s.i(r-2,49152)
s.i(r-1,57344)
s.Z()
s.a.gw().R(2)},
sag(a){this.dx=t.L.a(a)}}
M.dp.prototype={
B(a){var s,r,q=this
q.sag($.n().F(4,0))
s=q.fx
r=s.length
if(0>=r)return H.a(s,0)
s[0]=12
if(1>=r)return H.a(s,1)
s[1]=0
if(2>=r)return H.a(s,2)
s[2]=0
if(3>=r)return H.a(s,3)
s[3]=16
q.fr=q.go=q.fy=0},
D(a,b){var s,r,q,p=this,o=32768,n=40960,m=49152,l=57344,k=a>>>13&3
if(a<32768)p.T(a,b)
else{if((b&128)!==0){p.go=p.fy=0
if(k===0){s=p.fx
if(k>=s.length)return H.a(s,k)
s[k]=(s[k]|12)>>>0}}else{s=p.fy
r=p.go
q=r+1
p.go=q
r=(s|C.b.bk(b&1,r))>>>0
p.fy=r
if(q===5){s=p.fx
if(k>=s.length)return H.a(s,k)
s[k]=r&31
p.fy=p.go=0}}s=p.fx
if(0>=s.length)return H.a(s,0)
s=s[0]
if((s&2)!==0){r=p.a
if((s&1)!==0)r.gp().u(1)
else r.gp().u(0)}else{r=p.a
if((s&1)!==0)r.gp().u(4)
else r.gp().u(3)}s=p.fr
switch(s){case 0:case 1:p.fr=s+1
break
case 2:s=p.fx
r=s.length
if(1>=r)return H.a(s,1)
q=s[1]
if((q&8)!==0){q=s[0]
if((q&8)!==0)if((q&4)!==0){if(3>=r)return H.a(s,3)
p.i((s[3]&7)*2+16,o)
s=p.fx
if(3>=s.length)return H.a(s,3)
p.i((s[3]&7)*2+17,n)
p.i(30,m)
p.i(31,l)}else{p.i(16,o)
p.i(17,n)
s=p.fx
if(3>=s.length)return H.a(s,3)
p.i((s[3]&7)*2+16,m)
s=p.fx
if(3>=s.length)return H.a(s,3)
p.i((s[3]&7)*2+17,l)}else{if(3>=r)return H.a(s,3)
p.i((s[3]&6)*2+16,o)
s=p.fx
if(3>=s.length)return H.a(s,3)
p.i((s[3]&6)*2+17,n)
s=p.fx
if(3>=s.length)return H.a(s,3)
p.i((s[3]&6)*2+18,m)
s=p.fx
if(3>=s.length)return H.a(s,3)
p.i((s[3]&6)*2+19,l)}}else{p.i((q&6)*2,o)
s=p.fx
if(1>=s.length)return H.a(s,1)
p.i((s[1]&6)*2+1,n)
s=p.fx
if(1>=s.length)return H.a(s,1)
p.i((s[1]&6)*2+2,m)
s=p.fx
if(1>=s.length)return H.a(s,1)
p.i((s[1]&6)*2+3,l)}s=p.fx
if(1>=s.length)return H.a(s,1)
break}}},
X(a){var s=this
if(!s.gn().fr)return
s.i(0,32768)
s.i(1,40960)
s.i(2,49152)
s.i(3,57344)
s.Z()
s.a.gw().R(2)},
sag(a){this.fx=t.L.a(a)}}
M.dr.prototype={
B(a){this.sag($.n().F(1,0))},
D(a,b){var s,r=this
if(a<32768)r.T(a,b)
else switch(a&61443){case 32769:s=r.a
if((b&1)!==0)s.gp().u(1)
else s.gp().u(0)
break
case 40960:s=r.fr
if(0>=s.length)return H.a(s,0)
s[0]=b&7
break
case 49152:s=r.fr
if(0>=s.length)return H.a(s,0)
switch(s[0]){case 0:r.al(b,0)
break
case 1:r.k(b,5120)
break
case 2:r.al(b,2048)
break
case 3:r.k(b,7168)
break
case 4:r.i(b,32768)
break
case 5:r.i(b,40960)
break
case 6:r.k(b,4096)
break
case 7:r.k(b,6144)
break}break
case 57347:break}},
X(a){var s,r=this
if(!r.gn().fr)return
s=r.gn().y*2
r.i(0,32768)
r.i(1,40960)
r.i(s-2,49152)
r.i(s-1,57344)
r.Z()
r.a.gw().R(2)},
sag(a){this.fr=t.L.a(a)}}
M.ba.prototype={
ga3(){var s=this.b
return s==null?H.b(H.c("cpuMem")):s},
gdq(){var s=this.d
return s==null?H.b(H.c("cpuMemArray")):s},
gn(){var s=this.f
return s==null?H.b(H.c("rom")):s},
gp(){var s=this.x
return s==null?H.b(H.c("ppu")):s},
N(a){var s,r=this,q=r.a
r.b=q.ga3()
r.sem(t.L.a(r.ga3().gL()))
r.ga3()
q.gaf()
s=q.z
s.toString
r.f=s
q.gw()
r.x=q.gp()},
D(a,b){var s,r,q=this
if(a<8192){s=q.ga3().gL()
r=a&2047
if(r>=s.length)return H.a(s,r)
s[r]=b}else if(a>16407){s=q.ga3().gL()
if(a>=s.length)return H.a(s,a)
s[a]=b
if(a>=24576&&a<32768){q.gn()
s=q.gn()
if(s.ch)r=!0
else r=!1
if(r)s.gcD().h(0,a-24576,b)}}else if(a>8199&&a<16384)q.dJ(8192+(a&7),b)
else q.dJ(a,b)},
A(a,b){var s,r
b&=65535
if(b>16407){s=this.gdq()
if(b>=s.length)return H.a(s,b)
return s[b]}else if(b>=8192)return this.ha(b)
else{s=this.gdq()
r=b&2047
if(r>=s.length)return H.a(s,r)
return s[r]}},
ha(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
switch(a>>>12){case 0:break
case 1:break
case 2:case 3:switch(a&7){case 0:s=h.ga3().gL()
if(8192>=s.length)return H.a(s,8192)
return s[8192]
case 1:s=h.ga3().gL()
if(8193>=s.length)return H.a(s,8193)
return s[8193]
case 2:s=h.gp()
r=s.a.ga3().gL()
if(8194>=r.length)return H.a(r,8194)
q=r[8194]
s.fy=!0
s.bf(7,!1)
return q
case 3:return 0
case 4:s=h.gp()
r=s.gaZ()
s=s.id
r=r.gL()
if(s<0||s>=r.length)return H.a(r,s)
return r[s]
case 5:return 0
case 6:return 0
case 7:return h.gp().hn()}case 4:switch(a-16405){case 0:s=h.a.gay()
r=s.ga7()
r=r.cx===0||!r.c?0:1
p=s.ga8()
p=p.cx===0||!p.c?0:1
o=s.gam()
o=o.z===0||!o.b?0:1
n=s.gae()
n=n.x===0||!n.b?0:1
m=s.gav()
m=m.ch===0||!m.b?0:1
l=s.k3&&s.k2?1:0
k=s.gav().d?1:0
s.k3=!1
s.gav().d=!1
return(r|p<<1|o<<2|n<<3|m<<4|l<<6|k<<7|0)&65535
case 1:j=h.a.a.gao()
switch(h.y){case 0:i=j.a_(0)
break
case 1:i=j.a_(1)
break
case 2:i=j.a_(3)
break
case 3:i=j.a_(2)
break
case 4:i=j.a_(4)
break
case 5:i=j.a_(5)
break
case 6:i=j.a_(6)
break
case 7:i=j.a_(7)
break
case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:i=0
break
case 19:i=1
break
default:i=0
break}if(++h.y===24)h.y=0
return i
case 2:return h.h_()}break}return 0},
dJ(a,b){var s,r,q,p=this
switch(a){case 8192:s=p.ga3().gL()
if(a<0||a>=s.length)return H.a(s,a)
s[a]=b
p.gp().dT(b)
break
case 8193:s=p.ga3().gL()
if(a<0||a>=s.length)return H.a(s,a)
s[a]=b
p.gp().dU(b)
break
case 8195:p.gp().id=b
break
case 8196:s=p.gp()
r=s.gaZ()
q=s.id
r=r.gL()
if(q<0||q>=r.length)return H.a(r,q)
r[q]=b
s.cJ(s.id,b)
s.id=C.b.V(++s.id,256)
break
case 8197:s=p.gp()
s.aG()
r=s.fy
q=b&7
if(r){s.x2=C.b.l(b,3)&31
s.y1=q}else{s.r2=q
s.x1=C.b.l(b,3)&31}s.fy=!r
break
case 8198:s=p.gp()
if(s.fy){s.r2=C.b.l(b,4)&3
s.rx=C.b.l(b,3)&1
s.ry=C.b.l(b,2)&1
s.x1=s.x1&7|(b&3)<<3}else{s.aG()
r=s.x1&24|C.b.l(b,5)&7
s.x1=r
q=b&31
s.x2=q
s.k1=s.r2
s.k2=s.rx
s.k3=s.ry
s.k4=r
s.r1=q
s.bn(s.U-0+1-21)}s.fy=!s.fy
s.bB()
r=s.dy
if(r<8192)s.a.x.bq(r)
break
case 8199:s=p.gp()
s.aG()
s.bB()
s.cn()
r=s.dy
if(r>=8192)if(r>=16128&&r<16160)if(r===16128||r===16144){s.az(16128,b)
s.az(16144,b)}else if(r===16132||r===16148){s.az(16132,b)
s.az(16148,b)}else if(r===16136||r===16152){s.az(16136,b)
s.az(16152,b)}else if(r===16140||r===16156){s.az(16140,b)
s.az(16156,b)}else s.az(r,b)
else if(r<s.gbl().length){q=s.gbl()
if(r>=q.length)return H.a(q,r)
s.az(q[r],b)}else{$.at().toString
s.a.gw().k2=!0}else{s.az(r,b)
s.a.x.bq(s.dy)}r=s.dy
s.dy=r+(s.y===1?32:1)
s.cm()
s.c7()
break
case 16404:p.gp().e2(b)
break
case 16405:p.a.gay().aq(a,b)
break
case 16406:if(b===0&&p.Q===1)p.z=p.y=0
p.Q=b
break
case 16407:p.a.gay().aq(a,b)
break
default:if(a>=16384&&a<=16407)p.a.gay().aq(a,b)
break}},
h_(){var s=this,r=s.a.a.gaD(),q=s.z,p=q+1
s.z=p
if(p===24)s.z=0
if(q===0)return r.a_(0)
else if(q===1)return r.a_(1)
else if(q===2)return r.a_(3)
else if(q===3)return r.a_(2)
else if(q===4)return r.a_(4)
else if(q===5)return r.a_(5)
else if(q===6)return r.a_(6)
else if(q===7)return r.a_(7)
else if(q===16)return 0
else if(q===17)return 0
else if(q===18)return 1
else if(q===19)return 0
else return 0},
X(a){var s=this
if(!s.gn().fr||s.gn().y<1){P.v("NoMapper: Invalid ROM! Unable to load.")
return}s.ci()
s.Z()
s.ax()
s.a.gw().R(2)},
ci(){var s=this
if(s.gn().y>1){s.J(0,32768)
s.J(1,49152)}else{s.J(0,32768)
s.J(0,49152)}},
Z(){var s=this
P.v("Loading CHR ROM..")
if(s.gn().z>0)if(s.gn().z===1){s.K(0,0)
s.K(0,4096)}else{s.K(0,0)
s.K(1,4096)}else P.v("MapperDefault: There aren't any CHR-ROM banks..")},
ax(){if(this.gn().ch)this.gn().dX()},
J(a,b){var s,r,q=this
a=C.b.V(a,q.gn().y)
s=q.gn().gn()
if(a<0||a>=s.length)return H.a(s,a)
s=$.n()
r=q.gn().gn()
if(a>=r.length)return H.a(r,a)
s.bm(r[a],0,q.ga3().gL(),b,16384)},
K(a,b){var s,r,q,p,o=this
if(o.gn().z===0)return
o.gp().aG()
s=$.n()
r=o.gn()
q=C.b.V(a,o.gn().z)
r=r.gcv()
if(q<0||q>=r.length)return H.a(r,q)
s.bm(r[q],0,o.a.gaf().gL(),b,4096)
q=o.gn()
r=C.b.V(a,o.gn().z)
q=q.gcw()
if(r<0||r>=q.length)return H.a(q,r)
p=q[r]
$.n().fC(p,0,o.gp().ab,b>>>4,256)},
bF(a,b){var s=this,r=a*2
s.J(C.b.V(r,s.gn().y),b)
s.J(C.b.V(r+1,s.gn().y),b+16384)},
aQ(a,b){var s=this
if(s.gn().z===0)return
s.gp().aG()
s.K(C.b.V(a,s.gn().z),b)
s.K(C.b.V(a+1,s.gn().z),b+4096)},
k(a,b){var s,r,q,p,o,n,m,l=this
if(l.gn().z===0)return
l.gp().aG()
s=C.b.V(C.b.l(a,2),l.gn().z)
r=C.b.V(a,4)
q=$.n()
p=l.gn().gcv()
if(s<0||s>=p.length)return H.a(p,s)
q.bm(p[s],0,l.a.gaf().gL(),r*1024,1024)
p=l.gn().gcw()
if(s>=p.length)return H.a(p,s)
o=p[s]
n=b>>>4
for(m=0;m<64;++m){q=l.x
q=(q==null?H.b(H.c("ppu")):q).ab
p=(r<<6>>>0)+m
if(p>=o.length)return H.a(o,p)
C.a.h(q,n+m,o[p])}},
al(a,b){var s,r,q,p,o,n,m,l=this
if(l.gn().z===0)return
l.gp().aG()
s=C.b.V(C.b.l(a,1),l.gn().z)
r=C.b.V(a,2)
q=$.n()
p=l.gn().gcv()
if(s<0||s>=p.length)return H.a(p,s)
q.bm(p[s],r*2048,l.a.gaf().gL(),b,2048)
p=l.gn().gcw()
if(s>=p.length)return H.a(p,s)
o=p[s]
n=b>>>4
for(m=0;m<128;++m){q=l.x
q=(q==null?H.b(H.c("ppu")):q).ab
p=(r<<7>>>0)+m
if(p>=o.length)return H.a(o,p)
C.a.h(q,n+m,o[p])}},
i(a,b){var s,r=C.b.V(C.b.l(a,1),this.gn().y),q=C.b.V(a,2),p=this.gn().gn()
if(r<0||r>=p.length)return H.a(p,r)
s=p[r]
this.ga3().ho(b,s,q*8192,8192)},
c6(){},
bq(a){},
B(a){var s=this
s.Q=s.z=s.y=0
s.ch=!1},
sem(a){this.d=t.T.a(a)},
$iz:1}
M.bU.prototype={
gL(){var s=this.a
return s==null?H.b(H.c("mem")):s},
bS(a,b){P.v("BYTE COUNT: "+b)
this.sen(t.L.a($.n().F(b,0)))
this.b=b},
B(a){var s,r=0
while(!0){s=this.a
if(!(r<(s==null?H.b(H.c("mem")):s).length))break
if(r>=s.length)return H.a(s,r)
s[r]=0;++r}},
ho(a,b,c,d){var s,r,q,p,o
t.L.a(b)
if(a+d>this.gL().length)return
for(s=b.length,r=0;r<d;++r){q=this.a
if(q==null)q=H.b(H.c("mem"))
p=a+r
o=c+r
if(o<0||o>=s)return H.a(b,o)
o=b[o]
if(p>=q.length)return H.a(q,p)
q[p]=o}},
sen(a){this.a=t.T.a(a)}}
M.bb.prototype={
ghj(){var s=this.b
return s==null?H.b(H.c("tile")):s},
bK(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=C.b.V(a0,8)*4,a=C.b.ai(a0,8)*4
for(s=this.d,r=c,q=r,p=q,o=p,n=0;n<2;++n)for(m=n*2,l=a+m,k=0;k<2;++k){o=C.b.l(a1,2*(m+k))&3
for(j=o<<2&12,i=b+k*2,h=0;h<2;++h)for(g=l+h,f=g*s,e=0;e<2;++e,q=g){p=i+e
r=f+p
d=this.c
if(d==null)d=H.b(H.c("attrib"))
if(r<0||r>=d.length)return H.a(d,r)
d[r]=j}}},
sep(a){this.b=t.T.a(a)},
seo(a){this.c=t.T.a(a)}}
M.fV.prototype={
gw(){var s=this.b
return s==null?H.b(H.c("cpu")):s},
gp(){var s=this.c
return s==null?H.b(H.c("ppu")):s},
gay(){var s=this.d
return s==null?H.b(H.c("papu")):s},
ga3(){var s=this.e
return s==null?H.b(H.c("cpuMem")):s},
gaf(){var s=this.f
return s==null?H.b(H.c("ppuMem")):s},
gaZ(){var s=this.r
return s==null?H.b(H.c("sprMem")):s},
ed(a){var s,r,q,p=this,o=61440
$.at()
s=new M.bU(p)
s.bS(p,65536)
p.e=s
s=new M.bU(p)
s.bS(p,32768)
p.f=s
s=new M.bU(p)
s.bS(p,256)
p.r=s
p.b=M.kd(p)
s=new M.h_(p,H.r([],t.f))
r=t.L
s.sew(r.a(P.I(5,0,!1,t.S)))
C.a.h(s.gbh(),0,0)
C.a.h(s.gbh(),1,65280)
C.a.h(s.gbh(),2,16711680)
C.a.h(s.gbh(),3,0)
C.a.h(s.gbh(),4,255)
s.seB(r.a($.n().F(4,0)))
s.seH(r.a($.n().F(16,0)))
s.sez(r.a($.n().F(16,0)))
s.seF(t.h6.a(P.I(32,null,!1,t.f9)))
s.sev(r.a($.n().F(32,0)))
s.sex(r.a($.n().br(o,0)))
s.seD(r.a($.n().F(o,0)))
s.seG(r.a($.n().br(o,0)))
s.sey(r.a($.n().br(o,0)))
s.seC(r.a($.n().br(o,0)))
$.n()
s.seE(t.w.a(P.I(240,!1,!1,t.y)))
s.seJ(r.a($.n().br(o,0)))
p.c=s
s=new M.fZ(p,H.r([80,170,100,150,128],t.t))
s.ee(p)
p.d=s
P.v("Nes.constructor(): Hi.")
p.y.h2(C.R)
p.gw().bp()
p.gp().bp()
for(q=0;q<20;++q){s=p.d
if(q===16)(s==null?H.b(H.c("papu")):s).aq(16400,16)
else{if(s==null)s=H.b(H.c("papu"))
s.aq(16384+q,0)}}p.dg()},
bQ(){var s,r=this
P.v("NES.startEmulation")
if(r.gw().k3){r.gw().k1=!0
r.ch=!1}r.gay().B(0)
s=r.z
if(s!=null&&s.fr&&!r.gw().k3){r.gw()
r.ch=!0}},
bv(){if(this.gw().k3){this.gw().k1=!0
this.ch=!1}},
dg(){var s,r,q,p,o,n="mem",m=$.at().e
for(s=0;s<8192;++s){r=this.e
r=(r==null?H.b(H.c("cpuMem")):r).a
if(r==null)r=H.b(H.c(n))
if(s>=r.length)return H.a(r,s)
r[s]=m}for(q=0;q<4;++q){s=q*2048
r=this.e
p=(r==null?H.b(H.c("cpuMem")):r).a
if(p==null)p=H.b(H.c(n))
o=s+8
if(o>=p.length)return H.a(p,o)
p[o]=247
p=r.a
if(p==null)p=H.b(H.c(n))
o=s+9
if(o>=p.length)return H.a(p,o)
p[o]=239
p=r.a
if(p==null)p=H.b(H.c(n))
o=s+10
if(o>=p.length)return H.a(p,o)
p[o]=223
r=r.a
if(r==null)r=H.b(H.c(n))
p=s+15
if(p>=r.length)return H.a(r,p)
r[p]=191}},
dA(a){var s,r,q=this
t.L.a(a)
if(q.ch)q.bv()
s=P.I(255,"",!1,t.N)
$.n()
s=new M.h8(s,P.I(255,!1,!1,t.y))
s.ef(q)
q.z=s
s.A(0,a)
if(q.z.fr){q.B(0)
q.x=q.z.fK(q)
s=q.gw()
r=q.x
r.toString
s.b=r
s=q.z
s.toString
r.X(s)
q.gp().u(q.z.dZ())
q.shd(a)}return q.z.fr},
B(a){var s,r=this,q=r.x
if(q!=null)q.B(0)
r.ga3().B(0)
r.gaf().B(0)
r.gaZ().B(0)
r.dg()
q=r.gw()
q.f=q.e=q.d=0
q.fr=!1
q.fx=0
q.y=511
q.x=32767
q.r=40
q.ch=q.Q=q.z=0
q.cx=1
q.cy=0
q.db=1
q.dy=q.dx=0
q.k2=!1
q.cx=0
q.cy=q.ch=1
q.id=0
r.gw().bp()
r.gp().B(0)
q=r.y
q.d=q.c=q.b=q.a=0
q.bL(0)
q.ct()
r.gay().B(0)
s=r.a.gao()
$.n()
s.sfz(P.I(255,!1,!1,t.y))},
shd(a){this.cx=t.T.a(a)}}
M.h2.prototype={
h2(a){var s,r,q,p,o
t.L.a(a)
$.ij=H.r([],t.t)
for(s=0;s<64;++s){r=$.ij
q=s*3
if(q>=192)return H.a(a,q)
p=a[q]
o=q+1
if(o>=192)return H.a(a,o)
o=a[o]
q+=2
if(q>=192)return H.a(a,q)
C.a.G(r,(p<<16|o<<8|a[q])>>>0)}this.h3()
this.bL(0)
this.ct()},
h3(){var s,r,q,p,o,n,m,l,k,j,i,h
$.h3=H.r([],t.r)
for(s=t.t,r=0,q=0,p=0,o=null,n=0;n<8;++n){if((n&1)!==0){m=0.75
l=0.75}else{m=1
l=1}if((n&2)!==0){m=0.75
k=0.75}else k=1
if((n&4)!==0){k=0.75
l=0.75}j=H.r([],s)
for(i=0;i<64;++i){h=$.ij
if(i>=h.length)return H.a(h,i)
o=h[i]
r=C.e.bc((o>>>16&255)*m)
q=C.e.bc((o>>>8&255)*k)
p=C.e.bc((o&255)*l)
C.a.G(j,(r<<16|q<<8|p)>>>0)}C.a.G($.h3,j)}},
bL(a){var s,r,q
if(a!==this.a){this.a=a
$.aW=H.r([],t.t)
for(s=0;s<64;++s){r=$.aW
q=$.h3
if(a>=q.length)return H.a(q,a)
q=q[a]
if(s>=q.length)return H.a(q,s)
C.a.G(r,q[s])}this.ct()}},
ct(){var s=this
s.hm(s.b,s.c,s.d,s.e)},
hm(a,b,c,d){var s,r,q,p,o=this
if(d>0)d*=4
$.aW=H.r([],t.t)
for(s=0;s<64;++s){r=$.aW
q=$.h3
p=o.a
if(p<0||p>=q.length)return H.a(q,p)
p=q[p]
if(s>=p.length)return H.a(p,s)
C.a.G(r,p[s])}o.b=a
o.c=b
o.d=c
o.e=d}}
M.fZ.prototype={
ga7(){var s=this.e
return s==null?H.b(H.c("square1")):s},
ga8(){var s=this.f
return s==null?H.b(H.c("square2")):s},
gam(){var s=this.r
return s==null?H.b(H.c("triangle")):s},
gae(){var s=this.x
return s==null?H.b(H.c("noise")):s},
gav(){var s=this.y
return s==null?H.b(H.c("dmc")):s},
gb0(){var s=this.cx
return s==null?H.b(H.c("square_table")):s},
gbb(){var s=this.cy
return s==null?H.b(H.c("tnd_table")):s},
gbt(){var s=this.db
return s==null?H.b(H.c("sampleBufferL")):s},
gcB(){var s=this.dx
return s==null?H.b(H.c("sampleBufferR")):s},
ee(a){var s,r,q=this,p=q.a
p.ga3()
p.a.gde()
q.cF(q.k1,!1)
p=t.i
s=t.q
q.seq(s.a(P.I(2048,0,!1,p)))
q.ser(s.a(P.I(2048,0,!1,p)))
q.id=0
q.k2=!1
q.e=new M.cE(q,!0)
q.f=new M.cE(q,!1)
q.r=new M.fA(q)
p=new M.fz(q)
p.db=16384
q.x=p
q.y=new M.fy(q)
q.aT=256
q.e0(q.bC)
q.fW()
q.k2=!1
q.fr=4
for(r=0;r<20;++r)if(r===16)q.aq(16400,16)
else q.aq(16384+r,0)
q.B(0)},
aq(a,b){var s,r,q,p,o=this
if(a>=16384&&a<16388)o.ga7().aq(a,b)
else if(a>=16388&&a<16392)o.ga8().aq(a,b)
else if(a>=16392&&a<16396){s=o.gam()
if(a===16392){r=(b&128)===0
s.f=!r
s.ch=b&127
s.d=r}else if(a===16394){r=s.x&=1792
s.x=(r|b)>>>0}else if(a===16395){r=s.x&=255
s.x=(r|(b&7)<<8)>>>0
s.z=C.i[b>>>3&31]
s.e=!0}s.bs()}else if(a>=16396&&a<=16399){s=o.gae()
if(a===16396){r=(b&16)!==0
s.c=r
q=s.Q=b&15
p=(b&32)===0
s.d=!p
s.e=p
s.cy=r?q:s.cx}else if(a===16398){s.z=s.a.e_(b&15)
s.dy=C.b.l(b,7)}else if(a===16399){s.x=C.i[b>>>3&31]
s.f=!0}}else if(a>=16400&&a<=16403)o.gav().aq(a,b)
else if(a===16405){o.dS(b)
o.rx=b!==0&&o.fx>0
o.gav().aq(a,b)}else if(a===16407){s=C.b.l(b,7)&1
o.U=s
o.a4=0
o.k3=!1
o.k2=(C.b.l(b,6)&1)===0
if(s===0)o.Y=o.fr=4
else{o.fr=5
o.Y=0
o.du()}}},
dS(a){var s,r=this,q=r.ga7()
q.cE((a&1)!==0)
q=r.ga8()
q.cE((a&2)!==0)
q=r.gam()
s=(a&4)===0
q.b=!s
if(s)q.z=0
q.bs()
q=r.gae()
s=(a&8)===0
q.b=!s
if(s)q.x=0
q.aH()
q=r.gav()
s=(a&16)!==0
if(!q.b&&s)q.ch=q.Q
q.b=s},
c5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.fx
if(c>0)if(d.rx){c-=a
d.fx=c
if(c<=0)d.rx=!1
return}a+=d.c9
c=d.v-d.a1
d.fS=c
s=(a<<10>>>0)-c
if(s>0){c=C.b.l(s,10)
d.c9=c
a-=c}else d.c9=0
if(d.gav().b){c=d.gav()
c.cx=c.cx-(a<<3>>>0)
while(!0){c=d.y
if((c==null?H.b(H.c("dmc")):c).cx<=0)r=c.f>0
else r=!1
if(!r)break
r=c
q=r.cx
r.cx=q+c.f
if(c.c){r=c.fx
if((r&1)===0){q=c.x
if(q>0){--q
c.x=q}}else{q=c.x
if(q<63){++q
c.x=q}}c.dy=c.b?(q<<1>>>0)+c.fr:0
c.fx=C.b.l(r,1)}if(--c.r<=0){r=c.c=!1
q=c.ch
if(q===0?c.e===1:r){c.z=c.y
r=c.ch=c.Q}else r=q
if(r>0){r=c.a.a
c.fx=r.x.A(0,c.z)
r=r.b;(r==null?H.b(H.c("cpu")):r).id+=4
r=--c.ch
if(++c.z>65535)c.z=32768
c.c=!0
if(r===0)if(c.e===2)c.d=!0}c.r=8}if(c.d){c=c.a.a.b;(c==null?H.b(H.c("cpu")):c).R(0)}}}if(d.gam().x>0){d.gam().r-=a
while(!0){c=d.r
if(!((c==null?H.b(H.c("triangle")):c).r<=0))break
r=c
q=r.r
r.r=q+(c.x+1)
if(c.Q>0)r=c.z>0
else r=!1
if(r){++c.y
c.y&=31
if(c.b){p=c.y&15
if(c.y>=16)c.cx=p
else{r=c
r.cx=15-p}c.cx=c.cx<<4>>>0}}}}d.ga7().Q-=a
if(d.ga7().Q<=0){c=d.ga7()
c.Q=c.Q+(d.ga7().ch+1<<1>>>0);++d.ga7().cy
d.ga7().cy&=7
d.ga7().aH()}d.ga8().Q-=a
if(d.ga8().Q<=0){c=d.ga8()
c.Q=c.Q+(d.ga8().ch+1<<1>>>0);++d.ga8().cy
d.ga8().cy&=7
d.ga8().aH()}o=d.gae().y-a
if(o>0){d.gae().y=o
d.gae().fy+=a
c=d.gae()
c.fx=c.fx+a*d.gae().fr}else for(n=a;m=n-1,n>0;n=m){c=d.x
if(--(c==null?H.b(H.c("noise")):c).y<=0)r=c.z>0
else r=!1
if(r){r=c
r.db=c.db<<1&2147483647
r=c
q=c.db
q=C.b.bk(q,c.dy===0?1:6)
r.go=(q&2147483647^c.db)&32768
if(c.go!==0){c.db|=1
c.dx=0
c.fr=0}else{c.dx=1
if(c.b)r=c.x>0
else r=!1
if(r){r=c
r.fr=c.cy}else c.fr=0}r=c
q=r.y
r.y=q+c.z}r=c
q=r.fx
r.fx=q+c.fr;++c.fy}if(d.k2&&d.k3)d.a.gw().R(0)
c=d.a4=d.a4+(a<<1>>>0)
r=d.aa
if(c>=r){d.a4=c-r
d.du()}if(d.gam().c){c=C.b.aK(d.gam().r<<4>>>0,d.gam().x+1)
d.M=c
if(c>16)d.M=16
if(d.gam().y>=16)d.M=16-d.M
d.M=d.M+d.gam().cx}d.a5=d.a5+a*d.M
d.I=d.I+a*d.gav().dy
d.W=d.W+a*d.ga7().k3
c=d.m+a*d.ga8().k3
d.m=c
r=d.a6+=a
q=d.a1+(a<<10>>>0)
d.a1=q
if(q>=d.v){if(r>0){q=d.W<<4>>>0
d.W=q
d.W=C.b.aK(q,r)
c=c<<4>>>0
d.m=c
d.m=C.b.aK(c,r)
d.a5=C.b.aK(d.a5,r)
c=d.I<<4>>>0
d.I=c
d.I=C.b.aK(c,r)
d.a6=0}else{d.W=d.ga7().k3<<4>>>0
d.m=d.ga8().k3<<4>>>0
d.a5=d.gam().cx
d.I=d.gav().dy<<4>>>0}d.C=C.b.aK(d.gae().fx<<4>>>0,d.gae().fy)
d.gae().fx=C.b.l(d.C,4)
d.gae().fy=1
l=C.b.l(d.W*d.aU+d.m*d.ds,8)
k=C.b.l(3*d.a5*d.b5+(d.C<<1>>>0)*d.b6+d.I*d.at,8)
if(l>=d.gb0().length)l=d.gb0().length-1
if(k>=d.gbb().length)k=d.gbb().length-1
c=d.gb0()
if(l<0||l>=c.length)return H.a(c,l)
c=c[l]
r=d.gbb()
if(k<0||k>=r.length)return H.a(r,k)
r=r[k]
q=d.as
l=C.b.l(d.W*d.aO+d.m*d.b7,8)
k=C.b.l(3*d.a5*d.b8+(d.C<<1>>>0)*d.b9+d.I*d.aj,8)
if(l>=d.gb0().length)l=d.gb0().length-1
if(k>=d.gbb().length)k=d.gbb().length-1
j=d.gb0()
if(l<0||l>=j.length)return H.a(j,l)
j=j[l]
i=d.gbb()
if(k<0||k>=i.length)return H.a(i,k)
i=i[k]
h=d.as
g=d.aC
f=c+r-q-g
d.aC=g+f
g=d.aS
$.n()
g+=f-C.b.ai(g,1024)
d.aS=g
q=d.ab
e=j+i-h-q
d.ab=q+e
q=d.aw
q+=e-C.b.ai(q,1024)
d.aw=q
C.a.h(d.gbt(),d.id,g/65536)
C.a.h(d.gcB(),d.id,q/65536)
q=++d.id;++d.bo
if(q===d.gbt().length){c=d.d
c.toString
c.D(d.gbt(),d.gcB())
d.id=0}d.I=d.a5=d.m=d.W=0
d.a1=d.a1-d.v}},
du(){var s,r=this,q=++r.Y
if(q>=r.fr)q=r.Y=0
if(q===1||q===3){q=r.gam()
if(q.d&&q.z>0)if(--q.z===0)q.bs()
r.ga7().di()
r.ga8().di()
q=r.gae()
if(q.e&&q.x>0)if(--q.x===0)q.aH()
r.ga7().dj()
r.ga8().dj()}q=r.Y
if(q<4){r.ga7().dh()
r.ga8().dh()
q=r.gae()
if(q.f){q.f=!1
q.ch=q.Q+1
q.cx=15}else if(--q.ch<=0){q.ch=q.Q+1
s=q.cx
if(s>0)q.cx=s-1
else q.cx=q.d?15:0}q.cy=q.c?q.Q:q.cx
q.aH()
q=r.gam()
if(q.e){q.Q=q.ch
q.bs()}else{s=q.Q
if(s>0){q.Q=s-1
q.bs()}}if(!q.f)q.e=!1}if(r.Y===3&&r.U===0)r.k3=!0},
B(a){var s,r=this
r.cF(r.k1,!1)
r.dS(0)
r.U=r.Y=r.a4=0
r.rx=r.k2=!1
r.Y=4
r.ga7().B(0)
r.ga8().B(0)
s=r.gam()
s.y=s.x=s.r=0
s.c=s.b=!1
s.z=0
s.d=!1
s.ch=s.Q=0
s.e=!0
s.f=!1
s.cx=15
s=r.gae()
s.z=s.y=0
s.b=!1
s.x=0
s.d=s.c=s.e=!1
s.cy=s.cx=s.ch=s.Q=0
s.db=1
s.go=s.fr=s.dy=s.dx=0
s=r.gav()
s.d=s.b=!1
r.I=r.C=r.a5=r.m=r.W=r.a6=r.id=s.fx=s.cx=s.fr=s.dy=s.ch=s.Q=s.z=s.y=s.x=s.r=s.f=s.e=0
r.k2=!1
r.fr=4
r.aw=r.aS=r.ab=r.aC=0},
dY(a){if(a<16)return C.T[a]
return 0},
e_(a){if(a<16)return C.S[a]
return 0},
cF(a,b){var s=this,r=s.a,q=r.ch
if(q)r.bv()
s.k1=a
$.at().toString
s.v=C.b.bc(C.b.aK(109963622400,a*60))
s.aa=14915
s.id=s.a1=0
if(q)r.bQ()},
e0(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
for(s=l.bC,r=0;r<5;++r)C.a.h(s,r,a[r])
q=s[0]
p=l.aT
q=q*p>>>8
l.aU=q
o=s[1]*p>>>8
l.ds=o
n=s[2]*p>>>8
l.b5=n
m=s[3]*p>>>8
l.b6=m
s=s[4]*p>>>8
l.at=s
l.aO=p-q
l.b7=p-o
l.b8=p-n
l.b9=p-m
l.aj=p-s},
fW(){var s,r,q,p,o=this,n=t.L
o.ses(n.a($.n().F(512,0)))
o.seu(n.a($.n().F(3264,0)))
for(s=0,r=0;r<512;++r){q=C.b.bc(C.e.cd(95.52/(8128/(r/16)+100)*0.98411*5e4))
n=o.cx
if(n==null)n=H.b(H.c("square_table"))
if(r>=n.length)return H.a(n,r)
n[r]=q
if(q>s)s=q}for(p=0,r=0;r<3264;++r){q=C.b.bc(C.e.cd(163.67/(24329/(r/16)+100)*0.98411*5e4))
n=o.cy
if(n==null)n=H.b(H.c("tnd_table"))
if(r>=n.length)return H.a(n,r)
n[r]=q
if(q>p)p=q}n=s+p
o.aN=n
o.as=C.b.ai(n,2)},
ses(a){this.cx=t.T.a(a)},
seu(a){this.cy=t.T.a(a)},
seq(a){this.db=t.R.a(a)},
ser(a){this.dx=t.R.a(a)}}
M.h_.prototype={
gaf(){var s=this.b
return s==null?H.b(H.c("ppuMem")):s},
gaZ(){var s=this.c
return s==null?H.b(H.c("sprMem")):s},
gbl(){var s=this.go
return s==null?H.b(H.c("_vramMirrorTable")):s},
gcH(){var s=this.v
return s==null?H.b(H.c("sprX")):s},
gcI(){var s=this.aB
return s==null?H.b(H.c("sprY")):s},
gb_(){var s=this.M
return s==null?H.b(H.c("sprTile")):s},
gbO(){var s=this.W
return s==null?H.b(H.c("sprCol")):s},
gbd(){var s=this.m
return s==null?H.b(H.c("vertFlip")):s},
gce(){var s=this.a5
return s==null?H.b(H.c("horiFlip")):s},
gc3(){var s=this.C
return s==null?H.b(H.c("bgPriority")):s},
gP(){var s=this.aS
return s==null?H.b(H.c("_ntable1")):s},
gbi(){var s=this.aw
return s==null?H.b(H.c("_nameTable")):s},
gdf(a){var s=this.at
return s==null?H.b(H.c("buffer")):s},
gfh(){var s=this.bo
return s==null?H.b(H.c("_oldFrame")):s},
gbh(){var s=this.ca
return s==null?H.b(H.c("_bgColor_table")):s},
bp(){var s,r,q,p,o=this,n=o.a
o.b=n.gaf()
o.c=n.gaZ()
o.dT(0)
o.dU(0)
o.U=0
n=t.L
o.seN(n.a($.n().F(64,0)))
o.seO(n.a($.n().F(64,0)))
o.seM(n.a($.n().F(64,0)))
o.seL(n.a($.n().F(64,0)))
$.n()
s=t.y
r=t.w
o.seP(r.a(P.I(64,!1,!1,s)))
$.n()
o.seK(r.a(P.I(64,!1,!1,s)))
$.n()
o.seI(r.a(P.I(64,!1,!1,s)))
o.sh8(H.r([],t.f))
for(q=0;q<512;++q){r=o.ab
p=$.n().F(64,0)
$.n()
C.a.G(r,new M.a5(p,P.I(8,!1,!1,s)))}o.seA(t.aB.a(H.r([],t.aR)))
for(q=0;q<4;++q){s=o.aw
if(s==null)s=H.b(H.c("_nameTable"))
""+q
r=new M.bb(32,32)
r.sep(n.a($.n().F(1024,0)))
r.seo(n.a($.n().F(1024,0)))
C.a.G(s,r)}n=o.go=$.n().F(32768,0)
for(s=n.length,q=0;q<32768;++q){if(q>=s)return H.a(n,q)
n[q]=q}o.a1=-1
q=o.Y=0
while(!0){n=o.bo
if(!(q<(n==null?H.b(H.c("_oldFrame")):n).length))break
if(q>=n.length)return H.a(n,q)
n[q]=-1;++q}},
u(a){var s,r,q=this,p=16128,o=8192,n=9216,m=1024,l=11264,k=10240
if(a===q.aN)return
q.aN=a
q.aG()
q.gbl()
for(s=0;s<32768;++s){r=q.go
if(r==null)r=H.b(H.c("_vramMirrorTable"))
if(s>=r.length)return H.a(r,s)
r[s]=s}q.a9(16160,p,32)
q.a9(16192,p,32)
q.a9(16256,p,32)
q.a9(16320,p,32)
q.a9(12288,o,3840)
q.a9(16384,0,16384)
if(a===1){r=q.gP()
if(0>=r.length)return H.a(r,0)
r[0]=0
r=q.gP()
if(1>=r.length)return H.a(r,1)
r[1]=0
r=q.gP()
if(2>=r.length)return H.a(r,2)
r[2]=1
r=q.gP()
if(3>=r.length)return H.a(r,3)
r[3]=1
q.a9(n,o,m)
q.a9(l,k,m)}else if(a===0){r=q.gP()
if(0>=r.length)return H.a(r,0)
r[0]=0
r=q.gP()
if(1>=r.length)return H.a(r,1)
r[1]=1
r=q.gP()
if(2>=r.length)return H.a(r,2)
r[2]=0
r=q.gP()
if(3>=r.length)return H.a(r,3)
r[3]=1
q.a9(k,o,m)
q.a9(l,n,m)}else if(a===3){r=q.gP()
if(0>=r.length)return H.a(r,0)
r[0]=0
r=q.gP()
if(1>=r.length)return H.a(r,1)
r[1]=0
r=q.gP()
if(2>=r.length)return H.a(r,2)
r[2]=0
r=q.gP()
if(3>=r.length)return H.a(r,3)
r[3]=0
q.a9(n,o,m)
q.a9(k,o,m)
q.a9(l,o,m)}else if(a===4){r=q.gP()
if(0>=r.length)return H.a(r,0)
r[0]=1
r=q.gP()
if(1>=r.length)return H.a(r,1)
r[1]=1
r=q.gP()
if(2>=r.length)return H.a(r,2)
r[2]=1
r=q.gP()
if(3>=r.length)return H.a(r,3)
r[3]=1
q.a9(n,n,m)
q.a9(k,n,m)
q.a9(l,n,m)}else{r=q.gP()
if(0>=r.length)return H.a(r,0)
r[0]=0
r=q.gP()
if(1>=r.length)return H.a(r,1)
r[1]=1
r=q.gP()
if(2>=r.length)return H.a(r,2)
r[2]=2
r=q.gP()
if(3>=r.length)return H.a(r,3)
r[3]=3}},
a9(a,b,c){var s,r,q
for(s=0;s<c;++s){r=this.go
if(r==null)r=H.b(H.c("_vramMirrorTable"))
q=a+s
if(q>=r.length)return H.a(r,q)
r[q]=b+s}},
fQ(){var s,r,q,p,o,n,m=this,l="buffer"
for(s=m.a,r=s.a;m.cb>0;--m.cb){if(m.U-21===m.a6)if(m.Y===m.I&&m.ch===1)m.bf(6,!0)
if(m.aU)if(--m.b5===0){m.aU=!1
q=s.b;(q==null?H.b(H.c("cpu")):q).R(1)
q=m.a1
if(q<239){p=m.at
if(p==null)p=H.b(H.c(l))
m.dM(p,q+1,240-q)}m.fR()
q=r.f
if(q==null)q=H.b(H.c("vScreen"))
p=$.at()
if(!p.cx)p.cx=!0
q.z=!1
q.z=q.h6()
q.x=!0
m.a1=-1
if(m.dx===0){q=m.aT
if(q==null)q=H.b(H.c("_imgPalette"))
if(0>=q.length)return H.a(q,0)
o=q[0]}else{q=m.Q
p=m.ca
if(p==null)H.b(H.c("_bgColor_table"))
if(q<5)o=p[q]
else o=0}q=m.at
p=q==null?H.b(H.c(l)):q
C.t.cc(p,0,q.length,o)
q=m.aj
p=q==null?H.b(H.c("_pixrendered")):q
C.h.cc(p,0,q.length,65)}if(++m.Y===341){m.Y=0
q=m.U
if(q>=19)if(q===19){if(m.b6){m.Y=1
m.b6=!1}}else if(q===20){m.bf(7,!1)
m.bf(6,!1)
q=m.aC=!1
m.a6=m.I=-1
p=m.cx===1
if(p||m.ch===1){m.k1=m.r2
m.k2=m.rx
m.k3=m.ry
m.k4=m.x1
m.r1=m.x2
if(p){p=m.at
m.dL(p==null?H.b(H.c(l)):p,0)}}if(m.cx===1?m.ch===1:q)m.bn(0)
if(m.cx===1||m.ch===1)s.x.c6()}else if(q>=21&&q<=260){if(m.cx===1){m.r1=m.x2
m.k3=m.ry
p=m.b9
if(p==null)p=H.b(H.c("_bgbuffer"))
m.dL(p,q+1-21)
m.bC=!1
if(!m.aC&&m.ch===1){q=m.v
p=q==null?H.b(H.c("sprX")):q
if(0>=p.length)return H.a(p,0)
if(p[0]>=-7){if(0>=q.length)return H.a(q,0)
if(q[0]<256){q=m.aB
p=q==null?H.b(H.c("sprY")):q
if(0>=p.length)return H.a(p,0)
p=p[0]
n=m.U-0+1-21
if(p+1<=n){if(0>=q.length)return H.a(q,0)
q=q[0]
p=m.f===0?8:16
n=q+1+p>=n
q=n}else q=!1}else q=!1}else q=!1
if(q)if(m.bn(m.U+1-21))m.aC=!0}}if(m.cx===1||m.ch===1)s.x.c6()}else if(q===261){m.bf(7,!0)
m.aU=!0
m.b5=9
m.U=-1}++m.U
m.cn()
m.bB()}}},
fR(){var s,r,q,p,o
if(this.db===0||this.cy===0)for(s=0;s<240;++s)for(r=s<<8>>>0,q=0;q<8;++q){p=this.at
if(p==null)p=H.b(H.c("buffer"))
o=r+q
if(o>=p.length)return H.a(p,o)
p[o]=0}},
dT(a){var s,r=this
r.aG()
C.b.l(a,7)
r.f=C.b.l(a,5)&1
s=C.b.l(a,4)
r.x=C.b.l(a,3)&1
r.y=C.b.l(a,2)&1
r.rx=C.b.l(a,1)&1
r.ry=a&1
r.y2=s&1},
dU(a){var s,r,q=this
q.aG()
s=C.b.l(a,5)&7
q.Q=s
q.ch=C.b.l(a,4)&1
q.cx=C.b.l(a,3)&1
q.cy=C.b.l(a,2)&1
q.db=C.b.l(a,1)&1
r=a&1
q.dx=r
if(r===0)q.a.y.bL(s)
q.dV()},
bf(a,b){var s,r=C.b.bk(1,a),q=this.a,p=q.ga3().gL()
if(8194>=p.length)return H.a(p,8194)
s=p[8194]
p=b?r:0
q=q.ga3().gL()
if(8194>=q.length)return H.a(q,8194)
q[8194]=(s&255-r|p)>>>0},
hn(){var s,r,q,p,o=this
o.bB()
o.cn()
s=o.dy
if(s<=16127){r=o.fx
if(s<8192){s=o.gaf()
q=o.dy
s=s.gL()
if(q>=s.length)return H.a(s,q)
o.fx=s[q]}else{q=o.gaf()
p=o.gbl()
if(s>=p.length)return H.a(p,s)
s=p[s]
q=q.gL()
if(s<0||s>=q.length)return H.a(q,s)
o.fx=q[s]}s=o.dy
if(s<8192)o.a.x.bq(s)
s=o.dy
o.dy=s+(o.y===1?32:1)
o.c7()
o.cm()
return r}q=o.gaf()
p=o.gbl()
if(s>=p.length)return H.a(p,s)
s=p[s]
q=q.gL()
if(s<0||s>=q.length)return H.a(q,s)
r=q[s]
s=o.dy
o.dy=s+(o.y===1?32:1)
o.c7()
o.cm()
return r},
e2(a){var s,r,q,p,o=this,n=o.a,m=n.ga3(),l=a*256
for(s=o.id;s<256;++s){r=l+s
q=m.a
if(q==null)q=H.b(H.c("mem"))
if(r<0||r>=q.length)return H.a(q,r)
p=q[r]
r=o.c
r=(r==null?H.b(H.c("sprMem")):r).a
if(r==null)r=H.b(H.c("mem"))
if(s<0||s>=r.length)return H.a(r,s)
r[s]=p
o.cJ(s,p)}n.gw().id+=513},
cm(){var s,r=this,q=r.fr,p=q>>>8&255
r.r2=p>>>4&7
r.rx=p>>>3&1
r.ry=p>>>2&1
s=r.x1&7|(p&3)<<3
r.x1=s
p=q&255
r.x1=s&24|p>>>5&7
r.x2=p&31},
c7(){var s,r=this,q=r.dy,p=q>>>8&255
r.k1=p>>>4&3
r.k2=p>>>3&1
r.k3=p>>>2&1
s=r.k4&7|(p&3)<<3
r.k4=s
p=q&255
r.k4=s&24|p>>>5&7
r.r1=p&31},
cn(){var s=this,r=s.r2,q=s.rx,p=s.ry,o=s.x1
s.fr=(((r&7)<<4|(q&1)<<3|(p&1)<<2|o>>>3&3)<<8|(o&7)<<5|s.x2&31)&32767},
bB(){var s=this,r=s.k1,q=s.k2,p=s.k3,o=s.k4
s.dy=(((r&7)<<4|(q&1)<<3|(p&1)<<2|o>>>3&3)<<8|(o&7)<<5|s.r1&31)&32767},
aG(){var s,r=this,q=r.U-0
if(q>=21&&q<=260){q=r.gdf(r)
s=r.a1
r.dM(q,s+1,r.U-0-21-s)
r.a1=r.U-0-21}},
dM(a,b,c){var s,r,q,p,o,n=this
t.L.a(a)
if(n.ch===1)n.dN(b,c,!0)
if(n.cx===1){s=b<<8>>>0
r=Math.min(b+c<<8>>>0,61440)
for(q=a.length,p=s;p<r;++p){o=n.aj
if(o==null)o=H.b(H.c("_pixrendered"))
if(p>=o.length)return H.a(o,p)
if(o[p]>255){o=n.b9
if(o==null)o=H.b(H.c("_bgbuffer"))
if(p>=o.length)return H.a(o,p)
o=o[p]
if(p>=q)return H.a(a,p)
a[p]=o}}}if(n.ch===1)n.dN(b,c,!1)
n.aO=!1},
dL(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3="_scantile"
t.L.a(a4)
s=a2.y2===0?0:256
r=(a5<<8>>>0)-a2.y1
a2.r1=a2.x2
a2.k3=a2.ry
q=a2.gP()
p=(a2.k2<<1>>>0)+a2.k3
if(p>=q.length)return H.a(q,p)
o=q[p]
if(a5<240&&a5-a2.k1>=0){n=a2.k1<<3>>>0
for(q=a5>=0,p=a4.length,m=0;m<32;++m){if(q){if(a2.aO){l=a2.b7
k=(l==null?H.b(H.c(a3)):l)[m]
j=k.a
l=a2.b8
if(l==null)l=H.b(H.c("_attrib"))
if(m>=l.length)return H.a(l,m)
i=l[m]}else{l=a2.ab
h=a2.aw
g=h==null?H.b(H.c("_nameTable")):h
if(o<0||o>=g.length)return H.a(g,o)
g=g[o]
f=a2.r1
e=a2.k4
d=g.b
if(d==null)d=H.b(H.c("tile"))
g=e*g.d+f
if(g>=d.length)return H.a(d,g)
g=s+d[g]
if(g<0||g>=l.length)return H.a(l,g)
k=l[g]
j=k.a
l=h
if(o>=l.length)return H.a(l,o)
l=l[o]
h=l.c
if(h==null)h=H.b(H.c("attrib"))
f=e*l.d+f
if(f>=h.length)return H.a(h,f)
i=h[f]
f=a2.b7
C.a.h(f==null?H.b(H.c(a3)):f,m,k)
l=a2.b8
if(l==null)l=H.b(H.c("_attrib"))
if(m>=l.length)return H.a(l,m)
l[m]=i}c=(m<<3>>>0)-a2.y1
if(c>-8){if(c<0){r-=c
b=-c}else b=0
a=a2.aT
if(a==null)a=H.b(H.c("_imgPalette"))
a0=a2.aj
if(a0==null)a0=H.b(H.c("_pixrendered"))
l=k.z
h=a2.k1
if(h>=l.length)return H.a(l,h)
if(H.R(l[h]))for(l=j.length,h=a.length,g=a0.length;b<8;++b){f=n+b
if(f<0||f>=l)return H.a(j,f)
f=j[f]+i
if(f<0||f>=h)return H.a(a,f)
f=a[f]
if(r<0||r>=p)return H.a(a4,r)
a4[r]=f
if(r>=g)return H.a(a0,r)
a0[r]=(a0[r]|256)>>>0;++r}else for(l=j.length,h=a.length,g=a0.length;b<8;++b){f=n+b
if(f<0||f>=l)return H.a(j,f)
a1=j[f]
if(a1!==0){f=a1+i
if(f<0||f>=h)return H.a(a,f)
f=a[f]
if(r<0||r>=p)return H.a(a4,r)
a4[r]=f
if(r>=g)return H.a(a0,r)
a0[r]=(a0[r]|256)>>>0}++r}}}if(++a2.r1===32){a2.r1=0
l=++a2.k3%2
a2.k3=l
h=a2.aS
if(h==null)h=H.b(H.c("_ntable1"))
l=(a2.k2<<1>>>0)+l
if(l>=h.length)return H.a(h,l)
o=h[l]}}a2.aO=!0}if(++a2.k1===8){a2.k1=0
q=++a2.k4
if(q===30){a2.k4=0
a2.k2=++a2.k2%2
q=a2.gP()
p=(a2.k2<<1>>>0)+a2.k3
if(p>=q.length)return H.a(q,p)}else if(q===32)a2.k4=0
a2.aO=!1}},
dN(a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b="sprX",a="sprY",a0="sprTile",a1="buffer",a2="sprCol",a3="_sprPalette",a4="horiFlip",a5="vertFlip",a6="_pixrendered"
for(s=a7+a8,r=0;r<64;++r){q=c.C
if(q==null)q=H.b(H.c("bgPriority"))
if(r>=q.length)return H.a(q,r)
if(J.bu(q[r],a9)){q=c.v
p=q==null?H.b(H.c(b)):q
if(r>=p.length)return H.a(p,r)
if(p[r]>=0){if(r>=q.length)return H.a(q,r)
if(q[r]<256){q=c.aB
p=q==null?H.b(H.c(a)):q
if(r>=p.length)return H.a(p,r)
if(p[r]+8>=a7){if(r>=q.length)return H.a(q,r)
q=q[r]<s}else q=!1}else q=!1}else q=!1}else q=!1
if(q)if(c.f===0){q=c.aB
p=q==null?H.b(H.c(a)):q
if(r>=p.length)return H.a(p,r)
if(p[r]<a7){p=q
if(r>=p.length)return H.a(p,r)
o=a7-p[r]-1}else o=0
p=q
if(r>=p.length)return H.a(p,r)
if(p[r]+8>s){p=q
if(r>=p.length)return H.a(p,r)
n=s-p[r]+1}else n=8
p=c.x
m=c.M
if(p===0){p=m==null?H.b(H.c(a0)):m
if(r>=p.length)return H.a(p,r)
l=p[r]}else{p=m==null?H.b(H.c(a0)):m
if(r>=p.length)return H.a(p,r)
l=p[r]+256}p=c.ab
if(l<0||l>=p.length)return H.a(p,l)
p=p[l]
m=c.v
if(m==null)m=H.b(H.c(b))
if(r>=m.length)return H.a(m,r)
m=m[r]
if(r>=q.length)return H.a(q,r)
q=q[r]
k=c.at
if(k==null)k=H.b(H.c(a1))
j=c.W
if(j==null)j=H.b(H.c(a2))
if(r>=j.length)return H.a(j,r)
j=j[r]
i=c.as
if(i==null)i=H.b(H.c(a3))
h=c.a5
if(h==null)h=H.b(H.c(a4))
if(r>=h.length)return H.a(h,r)
h=h[r]
g=c.m
if(g==null)g=H.b(H.c(a5))
if(r>=g.length)return H.a(g,r)
g=g[r]
f=c.aj
if(f==null)f=H.b(H.c(a6))
p.co(0,o,8,n,m,q+1,k,j,i,h,g,r,f)}else{q=c.M
p=q==null?H.b(H.c(a0)):q
if(r>=p.length)return H.a(p,r)
e=p[r]
if((e&1)!==0){if(r>=q.length)return H.a(q,r)
e=q[r]-1+256}q=c.aB
p=q==null?H.b(H.c(a)):q
if(r>=p.length)return H.a(p,r)
if(p[r]<a7){p=q
if(r>=p.length)return H.a(p,r)
o=a7-p[r]-1}else o=0
p=q
if(r>=p.length)return H.a(p,r)
if(p[r]+8>s){p=q
if(r>=p.length)return H.a(p,r)
n=s-p[r]}else n=8
p=c.m
m=p==null?H.b(H.c(a5)):p
if(r>=m.length)return H.a(m,r)
l=e+(H.R(m[r])?1:0)
k=c.ab
if(l<0||l>=k.length)return H.a(k,l)
k=k[l]
j=c.v
m=j==null?H.b(H.c(b)):j
if(r>=m.length)return H.a(m,r)
m=m[r]
if(r>=q.length)return H.a(q,r)
q=q[r]
j=c.at
if(j==null)j=H.b(H.c(a1))
i=c.W
if(i==null)i=H.b(H.c(a2))
if(r>=i.length)return H.a(i,r)
i=i[r]
h=c.as
if(h==null)h=H.b(H.c(a3))
g=c.a5
if(g==null)g=H.b(H.c(a4))
if(r>=g.length)return H.a(g,r)
g=g[r]
if(r>=p.length)return H.a(p,r)
p=p[r]
f=c.aj
if(f==null)f=H.b(H.c(a6))
k.co(0,o,8,n,m,q+1,j,i,h,g,p,r,f)
q=c.aB
p=q==null?H.b(H.c(a)):q
if(r>=p.length)return H.a(p,r)
if(p[r]+8<a7){p=q
if(r>=p.length)return H.a(p,r)
o=a7-(p[r]+8+1)}else o=0
p=q
if(r>=p.length)return H.a(p,r)
if(p[r]+16>s){p=q
if(r>=p.length)return H.a(p,r)
n=s-(p[r]+8)}else n=8
p=c.m
m=p==null?H.b(H.c(a5)):p
if(r>=m.length)return H.a(m,r)
d=e+(H.R(m[r])?0:1)
k=c.ab
if(d<0||d>=k.length)return H.a(k,d)
k=k[d]
j=c.v
m=j==null?H.b(H.c(b)):j
if(r>=m.length)return H.a(m,r)
m=m[r]
if(r>=q.length)return H.a(q,r)
q=q[r]
j=c.at
if(j==null)j=H.b(H.c(a1))
i=c.W
if(i==null)i=H.b(H.c(a2))
if(r>=i.length)return H.a(i,r)
i=i[r]
h=c.as
if(h==null)h=H.b(H.c(a3))
g=c.a5
if(g==null)g=H.b(H.c(a4))
if(r>=g.length)return H.a(g,r)
g=g[r]
if(r>=p.length)return H.a(p,r)
p=p[r]
f=c.aj
if(f==null)f=H.b(H.c(a6))
k.co(0,o,8,n,m,q+1+8,j,i,h,g,p,r,f)}}},
bn(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_pixrendered"
h.a6=h.I=-1
s=h.x===0?0:256
r=h.gcH()
if(0>=r.length)return H.a(r,0)
q=r[0]
r=h.gcI()
if(0>=r.length)return H.a(r,0)
p=r[0]+1
if(h.f===0){if(p<=a&&p+8>a&&q>=-7&&q<256){r=h.ab
o=h.gb_()
if(0>=o.length)return H.a(o,0)
o=o[0]+s
if(o<0||o>=r.length)return H.a(r,o)
n=r[o]
o=h.gbO()
if(0>=o.length)return H.a(o,0)
o=h.gc3()
if(0>=o.length)return H.a(o,0)
r=h.gbd()
if(0>=r.length)return H.a(r,0)
m=a-p
m=(H.R(r[0])?7-m:m)*8
l=a*256+q
r=h.gce()
if(0>=r.length)return H.a(r,0)
if(H.R(r[0]))for(r=n.a,o=r.length,k=7;k>=0;--k){if(q>=0&&q<256){if(l>=0)if(l<61440){j=h.aj
if(j==null)j=H.b(H.c(g))
if(l>=j.length)return H.a(j,l)
j=j[l]!==0}else j=!1
else j=!1
if(j){j=m+k
if(j<0||j>=o)return H.a(r,j)
if(r[j]!==0){h.I=C.b.V(l,256)
h.a6=a
return!0}}}++q;++l}else for(r=n.a,o=r.length,k=0;k<8;++k){if(q>=0&&q<256){if(l>=0)if(l<61440){j=h.aj
if(j==null)j=H.b(H.c(g))
if(l>=j.length)return H.a(j,l)
j=j[l]!==0}else j=!1
else j=!1
if(j){j=m+k
if(j<0||j>=o)return H.a(r,j)
if(r[j]!==0){h.I=C.b.V(l,256)
h.a6=a
return!0}}}++q;++l}}}else if(p<=a&&p+16>a&&q>=-7&&q<256){r=h.gbd()
if(0>=r.length)return H.a(r,0)
m=a-p
if(H.R(r[0]))m=15-m
r=h.ab
if(m<8){o=h.gb_()
if(0>=o.length)return H.a(o,0)
o=o[0]
j=h.gbd()
if(0>=j.length)return H.a(j,0)
j=H.R(j[0])?1:0
i=h.gb_()
if(0>=i.length)return H.a(i,0)
i=(i[0]&1)!==0?255:0
i=o+j+i
if(i<0||i>=r.length)return H.a(r,i)
n=r[i]}else{o=h.gb_()
if(0>=o.length)return H.a(o,0)
o=o[0]
j=h.gbd()
if(0>=j.length)return H.a(j,0)
j=H.R(j[0])?0:1
i=h.gb_()
if(0>=i.length)return H.a(i,0)
i=(i[0]&1)!==0?255:0
i=o+j+i
if(i<0||i>=r.length)return H.a(r,i)
n=r[i]
r=h.gbd()
if(0>=r.length)return H.a(r,0)
m=H.R(r[0])?15-m:m-8}m*=8
r=h.gbO()
if(0>=r.length)return H.a(r,0)
r=h.gc3()
if(0>=r.length)return H.a(r,0)
l=a*256+q
r=h.gce()
if(0>=r.length)return H.a(r,0)
if(H.R(r[0]))for(r=n.a,o=r.length,k=7;k>=0;--k){if(q>=0&&q<256){if(l>=0)if(l<61440){j=h.aj
if(j==null)j=H.b(H.c(g))
if(l>=j.length)return H.a(j,l)
j=j[l]!==0}else j=!1
else j=!1
if(j){j=m+k
if(j<0||j>=o)return H.a(r,j)
if(r[j]!==0){h.I=C.b.V(l,256)
h.a6=a
return!0}}}++q;++l}else for(r=n.a,o=r.length,k=0;k<8;++k){if(q>=0&&q<256){if(l>=0)if(l<61440){j=h.aj
if(j==null)j=H.b(H.c(g))
if(l>=j.length)return H.a(j,l)
j=j[l]!==0}else j=!1
else j=!1
if(j){j=m+k
if(j<0||j>=o)return H.a(r,j)
if(r[j]!==0){h.I=C.b.V(l,256)
h.a6=a
return!0}}}++q;++l}}return!1},
az(a,b){var s,r=this,q=r.gaf().gL()
if(a<0||a>=q.length)return H.a(q,a)
q[a]=b
if(a<8192){q=r.gaf().gL()
if(a>=q.length)return H.a(q,a)
q[a]=b
r.h7(a,b)}else if(a<9152){q=r.gP()
if(0>=q.length)return H.a(q,0)
r.bG(q[0],a-8192,b)}else if(a<9216){q=r.gP()
if(0>=q.length)return H.a(q,0)
q=q[0]
s=r.gbi()
if(q<0||q>=s.length)return H.a(s,q)
s[q].bK(a-9152,b)}else if(a>=9216&&a<10176){q=r.gP()
if(1>=q.length)return H.a(q,1)
r.bG(q[1],a-9216,b)}else if(a>=10176&&a<10240){q=r.gP()
if(1>=q.length)return H.a(q,1)
q=q[1]
s=r.gbi()
if(q<0||q>=s.length)return H.a(s,q)
s[q].bK(a-10176,b)}else if(a>=10240&&a<11200){q=r.gP()
if(2>=q.length)return H.a(q,2)
r.bG(q[2],a-10240,b)}else if(a>=11200&&a<11264){q=r.gP()
if(2>=q.length)return H.a(q,2)
q=q[2]
s=r.gbi()
if(q<0||q>=s.length)return H.a(s,q)
s[q].bK(a-11200,b)}else if(a>=11264&&a<12224){q=r.gP()
if(3>=q.length)return H.a(q,3)
r.bG(q[3],a-11264,b)}else if(a>=12224&&a<12288){q=r.gP()
if(3>=q.length)return H.a(q,3)
q=q[3]
s=r.gbi()
if(q<0||q>=s.length)return H.a(s,q)
s[q].bK(a-12224,b)}else if(a>=16128&&a<16160)r.dV()},
dV(){var s,r,q,p,o=this,n="_imgPalette",m="ppuMem",l="mem",k="_sprPalette"
for(s=0;s<16;++s){r=o.dx
q=o.aT
if(r===0){r=q==null?H.b(H.c(n)):q
q=o.b
if(q==null)q=H.b(H.c(m))
p=16128+s
q=q.a
if(q==null)q=H.b(H.c(l))
if(p>=q.length)return H.a(q,p)
p=q[p]&63
q=$.aW
if(p>=q.length)return H.a(q,p)
p=q[p]
if(s>=r.length)return H.a(r,s)
r[s]=p}else{r=q==null?H.b(H.c(n)):q
q=o.b
if(q==null)q=H.b(H.c(m))
p=16128+s
q=q.a
if(q==null)q=H.b(H.c(l))
if(p>=q.length)return H.a(q,p)
p=q[p]&32
q=$.aW
if(p>=q.length)return H.a(q,p)
p=q[p]
if(s>=r.length)return H.a(r,s)
r[s]=p}}for(s=0;s<16;++s){r=o.dx
q=o.as
if(r===0){r=q==null?H.b(H.c(k)):q
q=o.b
if(q==null)q=H.b(H.c(m))
p=16144+s
q=q.a
if(q==null)q=H.b(H.c(l))
if(p>=q.length)return H.a(q,p)
p=q[p]&63
q=$.aW
if(p>=q.length)return H.a(q,p)
p=q[p]
if(s>=r.length)return H.a(r,s)
r[s]=p}else{r=q==null?H.b(H.c(k)):q
q=o.b
if(q==null)q=H.b(H.c(m))
p=16144+s
q=q.a
if(q==null)q=H.b(H.c(l))
if(p>=q.length)return H.a(q,p)
p=q[p]&32
q=$.aW
if(p>=q.length)return H.a(q,p)
p=q[p]
if(s>=r.length)return H.a(r,s)
r[s]=p}}},
h7(a,b){var s,r=C.b.ai(a,16),q=C.b.V(a,16),p=this.ab,o=p.length
if(q<8){if(r<0||r>=o)return H.a(p,r)
p=p[r]
o=a+8
s=this.gaf().gL()
if(o<0||o>=s.length)return H.a(s,o)
p.bu(q,b,s[o])}else{if(r<0||r>=o)return H.a(p,r)
p=p[r]
o=a-8
s=this.gaf().gL()
if(o<0||o>=s.length)return H.a(s,o)
p.bu(q-8,s[o],b)}},
bG(a,b,c){var s=this.gbi()
if(a<0||a>=s.length)return H.a(s,a)
s=s[a].ghj()
if(b<0||b>=s.length)return H.a(s,b)
s[b]=c
this.bn(this.U+1-0-21)},
cJ(a,b){var s,r=this,q=C.b.ai(a,4)
if(q===0)r.bn(r.U+1-0-21)
s=C.b.V(a,4)
if(s===0){s=r.gcI()
if(q<0||q>=s.length)return H.a(s,q)
s[q]=b}else if(s===1){s=r.gb_()
if(q<0||q>=s.length)return H.a(s,q)
s[q]=b}else if(s===2){C.a.h(r.gbd(),q,(b&128)!==0)
C.a.h(r.gce(),q,(b&64)!==0)
C.a.h(r.gc3(),q,(b&32)!==0)
s=r.gbO()
if(q<0||q>=s.length)return H.a(s,q)
s[q]=(b&3)<<2}else if(s===3){s=r.gcH()
if(q<0||q>=s.length)return H.a(s,q)
s[q]=b}},
B(a){var s,r=this
r.gaf().B(0)
r.gaZ().B(0)
r.a6=r.I=r.a1=r.U=r.Y=r.id=r.fx=0
r.aN=-1
r.fy=!0
r.aO=r.b6=r.aC=r.aU=!1
r.y2=r.y1=r.x2=r.x1=r.ry=r.rx=r.r2=r.r1=r.k4=r.k3=r.k2=r.k1=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.y=r.x=r.f=r.b5=0
s=r.dt
if(s==null)s=H.b(H.c("_scanlineChanged"))
C.a.aI(s,new M.h0())
C.t.aI(r.gfh(),new M.h1())
r.bp()},
seN(a){this.v=t.T.a(a)},
seO(a){this.aB=t.T.a(a)},
seM(a){this.M=t.T.a(a)},
seL(a){this.W=t.T.a(a)},
seP(a){this.m=t.E.a(a)},
seK(a){this.a5=t.E.a(a)},
seI(a){this.C=t.E.a(a)},
sh8(a){this.ab=t.m.a(a)},
seB(a){this.aS=t.T.a(a)},
seA(a){this.aw=t.cW.a(a)},
seH(a){this.as=t.T.a(a)},
sez(a){this.aT=t.T.a(a)},
seJ(a){this.at=t.T.a(a)},
seF(a){this.b7=t.gl.a(a)},
sev(a){this.b8=t.T.a(a)},
sex(a){this.b9=t.T.a(a)},
seD(a){this.aj=t.T.a(a)},
seG(a){t.T.a(a)},
sey(a){t.T.a(a)},
seC(a){this.bo=t.T.a(a)},
seE(a){this.dt=t.E.a(a)},
sew(a){this.ca=t.T.a(a)}}
M.h0.prototype={
$1(a){H.iu(a)
return!0},
$S:29}
M.h1.prototype={
$1(a){H.Y(a)
return-1},
$S:30}
M.h9.prototype={
gaL(){var s=this.b
return s==null?H.b(H.c("_menu")):s},
gaR(){var s=this.d
return s==null?H.b(H.c("_romsContent")):s},
gc2(){var s=this.e
return s==null?H.b(H.c("_tv")):s},
gcZ(){var s=this.f
return s==null?H.b(H.c("_inputFile")):s},
gcX(){var s=this.r
return s==null?H.b(H.c("_heading")):s},
dv(){var s,r,q=this
P.v("HIDING")
s=q.gaL().clientHeight
s.toString
P.v(C.b.q(s))
s=q.gaL().style.bottom
s.toString
P.v(s)
s=q.gaL().style
s.toString
C.f.d4(s,C.f.cQ(s,"transition"),"bottom 0.2s","")
s=q.gaL().style
s.toString
r=q.gaR().clientHeight
r.toString
r="-"+C.b.q(r)+"px"
s.bottom=r
s=q.gaL().style.bottom
s.toString
P.v(s)},
fm(){var s,r,q,p,o=this,n=o.c
n=J.iI(n==null?H.b(H.c("_romsLabel")):n)
s=n.$ti
r=s.j("~(1)?").a(new M.hc(o))
t.Z.a(null)
W.V(n.a,n.b,r,!1,s.c)
s=t.cl
W.V(o.gcZ(),"change",s.j("~(1)?").a(new M.hd(o)),!1,s.c)
s=J.k5(o.gaR())
r=s.$ti
W.V(s.a,s.b,r.j("~(1)?").a(new M.he(o)),!1,r.c)
r=J.k6(o.gaR())
s=r.$ti
W.V(r.a,r.b,s.j("~(1)?").a(new M.hf(o)),!1,s.c)
s=J.iI(o.gc2())
r=s.$ti
W.V(s.a,s.b,r.j("~(1)?").a(new M.hg(o)),!1,r.c)
q=new M.hh()
r=J.iJ(o.gaR())
s=r.$ti
W.V(r.a,r.b,s.j("~(1)?").a(q),!1,s.c)
s=J.iJ(o.gc2())
r=s.$ti
W.V(s.a,s.b,r.j("~(1)?").a(q),!1,r.c)
p=new M.hi(o)
r=J.iK(o.gaR())
s=r.$ti
W.V(r.a,r.b,s.j("~(1)?").a(p),!1,s.c)
s=J.iK(o.gc2())
r=s.$ti
W.V(s.a,s.b,r.j("~(1)?").a(p),!1,r.c)},
d9(){var s=t.s,r=t.N
if(this.y>0)J.iM(this.gaR(),P.fT(H.r(["roms-drag-in"],s),r))
else J.iM(this.gaR(),P.fT(H.r(["roms-drag-out"],s),r))},
fc(){var s=M.bC("rom")
W.km("./"+(s!=null&&s.length>0?"roms/"+H.y(s)+".json":"roms/SuperMario3.json")).cs(new M.ha(this),t.P)},
d_(a){var s,r=document,q=r.querySelector("#name")
q.toString
s=a.name
s.toString
J.ec(q,s)
r=r.querySelector("#size")
r.toString
J.ec(r,H.y(a)+".size")
r=new FileReader()
r.toString
s=t.gx.a(new M.hb(this,r))
t.Z.a(null)
W.V(r,"loadend",s,!1,t.p)
r.readAsArrayBuffer(a)},
sd3(a){this.x=t.T.a(a)}}
M.hc.prototype={
$1(a){var s,r
t.V.a(a).preventDefault()
s=this.a
r=s.gaL().style.bottom
r.toString
if(r==="0px")s.dv()
else{P.v("SHOWING")
r=s.gaL().style
r.toString
C.f.d4(r,C.f.cQ(r,"transition"),"bottom 0.2s","")
s=s.gaL().style
s.bottom="0"}},
$S:2}
M.hd.prototype={
$1(a){var s,r
a.preventDefault()
s=this.a
r=s.gcZ().files
if(0>=r.length)return H.a(r,0)
s.d_(r[0])},
$S:5}
M.he.prototype={
$1(a){var s
t.V.a(a).preventDefault()
s=this.a;++s.y
s.d9()},
$S:2}
M.hf.prototype={
$1(a){var s
t.V.a(a).preventDefault()
s=this.a;--s.y
s.d9()},
$S:2}
M.hg.prototype={
$1(a){var s,r,q,p,o,n=2048
t.V.a(a)
s=this.a
if(s.x!=null){P.v("STARTING")
J.ec(s.gcX(),"Dartendo!")
s=s.a
r=s.db.gay()
if(r.d==null){q=new M.dM(n)
p=t.i
o=t.q
q.seU(o.a(P.I(n,0,!1,p)))
q.seV(o.a(P.I(n,0,!1,p)))
p=!!(window.AudioContext||window.webkitAudioContext)
p.toString
if(p){p=new (window.AudioContext||window.webkitAudioContext)()
p.toString
q.a=p
p=C.y.fL(p,n,2,2)
q.c=p
o=t.gf.a(q.gfd())
t.Z.a(null)
W.V(p,"audioprocess",o,!1,t.D)
p=!!(window.AudioContext||window.webkitAudioContext)
p.toString
if(p){p=q.c
p.toString
o=q.a.destination
o.toString
C.X.f3(p,o,0,0)}}r.d=q}s.he()}},
$S:2}
M.hh.prototype={
$1(a){return a.preventDefault()},
$S:7}
M.hi.prototype={
$1(a){var s
a.preventDefault()
s=J.k4(a).files
if(0>=s.length)return H.a(s,0)
this.a.d_(s[0])},
$S:4}
M.ha.prototype={
$1(a){var s=this.a
s.sd3(t.T.a(J.k2(C.F.fN(0,H.H(a)),t.S)))
J.ec(s.gcX(),"Click the TV to turn it on")},
$S:31}
M.hb.prototype={
$1(a){var s
t.p.a(a)
s=this.a
s.sd3(new Uint8Array(H.lc(t.L.a(C.K.ghc(this.b)))))
s.dv()},
$S:9}
M.h8.prototype={
gaP(){var s=this.c
return s==null?H.b(H.c("header")):s},
gn(){var s=this.d
return s==null?H.b(H.c("rom")):s},
gcv(){var s=this.e
return s==null?H.b(H.c("vrom")):s},
gcD(){var s=H.b(H.c("saveRam"))
return s},
gcw(){var s=this.r
return s==null?H.b(H.c("vromTile")):s},
ef(a){var s,r
this.fr=!1
for(s=this.fx,r=0;r<255;++r)C.a.h(s,r,"Unknown Mapper")
C.a.h(s,0,"NROM")
C.a.h(s,1,"Nintendo MMC1")
C.a.h(s,2,"UxROM")
C.a.h(s,3,"CNROM")
C.a.h(s,4,"Nintendo MMC3")
C.a.h(s,5,"Nintendo MMC5")
C.a.h(s,6,"FFE F4xxx")
C.a.h(s,7,"AxROM")
C.a.h(s,8,"FFE F3xxx")
C.a.h(s,9,"Nintendo MMC2")
C.a.h(s,10,"Nintendo MMC4")
C.a.h(s,11,"Color Dreams")
C.a.h(s,12,"FFE F6xxx")
C.a.h(s,13,"CPROM")
C.a.h(s,15,"iNES Mapper #015")
C.a.h(s,16,"Bandai")
C.a.h(s,17,"FFE F8xxx")
C.a.h(s,18,"Jaleco SS8806")
C.a.h(s,19,"Namcot 106")
C.a.h(s,20,"(Hardware) Famicom Disk System")
C.a.h(s,21,"Konami VRC4a, VRC4c")
C.a.h(s,22,"Konami VRC2a")
C.a.h(s,23,"Konami VRC2b, VRC4e, VRC4f")
C.a.h(s,24,"Konami VRC6a")
C.a.h(s,25,"Konami VRC4b, VRC4d")
C.a.h(s,26,"Konami VRC6b")
C.a.h(s,32,"Irem G-101")
C.a.h(s,33,"Taito TC0190, TC0350")
C.a.h(s,34,"BxROM, NINA-001")
C.a.h(s,41,"Caltron 6-in-1")
C.a.h(s,46,"Rumblestation 15-in-1")
C.a.h(s,47,"Nintendo MMC3 Multicart (Super Spike V'Ball + Nintendo World Cup)")
C.a.h(s,48,"iNES Mapper #048")
C.a.h(s,64,"Tengen RAMBO-1")
C.a.h(s,65,"Irem H-3001")
C.a.h(s,66,"GxROM")
C.a.h(s,67,"Sunsoft 3")
C.a.h(s,68,"Sunsoft 4")
C.a.h(s,69,"Sunsoft FME-7")
C.a.h(s,70,"iNES Mapper #070")
C.a.h(s,71,"Camerica")
C.a.h(s,72,"iNES Mapper #072")
C.a.h(s,73,"Konami VRC3")
C.a.h(s,75,"Konami VRC1")
C.a.h(s,76,"iNES Mapper #076 (Digital Devil Monogatari - Megami Tensei)")
C.a.h(s,77,"iNES Mapper #077 (Napoleon Senki)")
C.a.h(s,78,"Irem 74HC161/32")
C.a.h(s,79,"American Game Cartridges")
C.a.h(s,80,"iNES Mapper #080")
C.a.h(s,82,"iNES Mapper #082")
C.a.h(s,85,"Konami VRC7a, VRC7b")
C.a.h(s,86,"iNES Mapper #086 (Moero!! Pro Yakyuu)")
C.a.h(s,87,"iNES Mapper #087")
C.a.h(s,88,"iNES Mapper #088")
C.a.h(s,89,"iNES Mapper #087 (Mito Koumon)")
C.a.h(s,92,"iNES Mapper #092")
C.a.h(s,93,"iNES Mapper #093 (Fantasy Zone)")
C.a.h(s,94,"iNES Mapper #094 (Senjou no Ookami)")
C.a.h(s,95,"iNES Mapper #095 (Dragon Buster) [MMC3 Derived]")
C.a.h(s,96,"(Hardware) Oeka Kids Tablet")
C.a.h(s,97,"iNES Mapper #097 (Kaiketsu Yanchamaru)")
C.a.h(s,105,"NES-EVENT [MMC1 Derived]")
C.a.h(s,113,"iNES Mapper #113")
C.a.h(s,115,"iNES Mapper #115 (Yuu Yuu Hakusho Final) [MMC3 Derived]")
C.a.h(s,118,"iNES Mapper #118 [MMC3 Derived]")
C.a.h(s,119,"TQROM")
C.a.h(s,140,"iNES Mapper #140 (Bio Senshi Dan)")
C.a.h(s,152,"iNES Mapper #152")
C.a.h(s,154,"iNES Mapper #152 (Devil Man)")
C.a.h(s,159,"Bandai (Alternate of #016)")
C.a.h(s,180,"(Hardware) Crazy Climber Controller")
C.a.h(s,182,"iNES Mapper #182")
C.a.h(s,184,"iNES Mapper #184")
C.a.h(s,185,"iNES Mapper #185")
C.a.h(s,207,"iNES Mapper #185 (Fudou Myouou Den)")
C.a.h(s,228,"Active Enterprises")
C.a.h(s,232,"Camerica (Quattro series)")
s=this.fy
C.a.h(s,0,!0)
C.a.h(s,1,!0)
C.a.h(s,2,!0)
C.a.h(s,3,!0)
C.a.h(s,4,!0)
C.a.h(s,7,!0)
C.a.h(s,9,!0)
C.a.h(s,10,!0)
C.a.h(s,11,!0)
C.a.h(s,15,!0)
C.a.h(s,18,!0)
C.a.h(s,21,!0)
C.a.h(s,22,!0)
C.a.h(s,23,!0)
C.a.h(s,32,!0)
C.a.h(s,33,!0)
C.a.h(s,34,!0)
C.a.h(s,48,!0)
C.a.h(s,64,!0)
C.a.h(s,66,!0)
C.a.h(s,68,!0)
C.a.h(s,71,!0)
C.a.h(s,72,!0)
C.a.h(s,75,!0)
C.a.h(s,78,!0)
C.a.h(s,79,!0)
C.a.h(s,87,!0)
C.a.h(s,94,!0)
C.a.h(s,105,!0)
C.a.h(s,140,!0)
C.a.h(s,182,!0)
C.a.h(s,232,!0)},
A(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="vrom",f="vromTile",e=t.L
e.a(b)
s=J.hX(b)
r=s.gE(b)
if(r===0){P.v("Unable to load ROM file.")
h.fr=!1}h.seQ(e.a($.n().F(16,0)))
for(q=0;q<16;++q){e=h.c
if(e==null)e=H.b(H.c("header"))
C.h.h(e,q,s.H(b,q))}if(P.kH(H.r([s.H(b,0),s.H(b,1),s.H(b,2)],t.t))!=="NES"||!J.bu(s.H(b,3),26)){P.v("Header is incorrect.")
h.fr=!1
return}e=h.gaP()
if(4>=e.length)return H.a(e,4)
h.y=e[4]
e=h.gaP()
if(5>=e.length)return H.a(e,5)
h.z=e[5]*2
e=h.gaP()
if(6>=e.length)return H.a(e,6)
h.Q=(e[6]&1)!==0?1:0
r=h.gaP()
if(6>=r.length)return H.a(r,6)
h.ch=(r[6]&2)!==0
r=h.gaP()
if(6>=r.length)return H.a(r,6)
r=h.gaP()
if(6>=r.length)return H.a(r,6)
h.cy=(r[6]&8)!==0
r=h.gaP()
if(6>=r.length)return H.a(r,6)
r=C.b.l(r[6],4)
p=h.gaP()
if(7>=p.length)return H.a(p,7)
h.db=(r|p[7]&240)>>>0
q=8
while(!0){if(!(q<16)){o=!1
break}e=h.c
if(e==null)e=H.b(H.c("header"))
if(q>=e.length)return H.a(e,q)
if(e[q]!==0){o=!0
break}++q}if(o)h.db&=15
e=t.aG
h.seR(e.a($.n().dC(h.y,16384,0)))
h.seS(e.a($.n().dC(h.z,4096,0)))
for(n=16,q=0;q<h.y;++q){for(m=0;m<16384;++m){e=n+m
if(e>=s.gE(b))break
r=h.d
if(r==null)r=H.b(H.c("rom"))
if(q>=r.length)return H.a(r,q)
C.h.h(r[q],m,s.H(b,e))}n+=16384}for(q=0;q<h.z;++q){for(m=0;m<4096;++m){e=n+m
if(e>=s.gE(b))break
r=h.e
if(r==null)r=H.b(H.c(g))
if(q>=r.length)return H.a(r,q)
C.h.h(r[q],m,s.H(b,e))}n+=4096}h.seT(t.ci.a(H.r([],t.fk)))
for(e=t.y,s=t.f,q=0;q<h.z;++q){l=H.r([],s)
for(m=0;m<256;++m){r=$.n().F(64,0)
$.n()
C.a.G(l,new M.a5(r,P.I(8,!1,!1,e)))}r=h.r
C.a.G(r==null?H.b(H.c(f)):r,l)}for(k=null,j=null,i=0;i<h.z;++i)for(q=0;q<4096;++q){k=q>>>4
j=C.b.V(q,16)
e=h.r
if(j<8){if(e==null)e=H.b(H.c(f))
if(i>=e.length)return H.a(e,i)
e=e[i]
if(k>=e.length)return H.a(e,k)
e=e[k]
s=h.e
r=s==null?H.b(H.c(g)):s
if(i>=r.length)return H.a(r,i)
r=r[i]
if(q>=r.length)return H.a(r,q)
r=r[q]
if(i>=s.length)return H.a(s,i)
s=s[i]
p=q+8
if(p>=s.length)return H.a(s,p)
e.bu(j,r,s[p])}else{if(e==null)e=H.b(H.c(f))
if(i>=e.length)return H.a(e,i)
e=e[i]
if(k>=e.length)return H.a(e,k)
e=e[k]
s=h.e
r=s==null?H.b(H.c(g)):s
if(i>=r.length)return H.a(r,i)
r=r[i]
p=q-8
if(p<0||p>=r.length)return H.a(r,p)
p=r[p]
if(i>=s.length)return H.a(s,i)
s=s[i]
if(q>=s.length)return H.a(s,q)
e.bu(j-8,p,s[q])}}h.fr=!0},
dZ(){if(this.cy)return 2
if(this.Q===0)return 1
return 0},
fZ(){var s=this.db,r=this.fy,q=r.length
if(s<q&&!0){if(s>=q)return H.a(r,s)
return r[s]}return!1},
fK(a){var s,r,q,p=this
if(p.fZ())switch(p.db){case 0:return M.j1(a)
case 1:s=new M.cY(a)
s.N(a)
return s
case 2:s=new M.cZ(a)
s.N(a)
return s
case 3:s=new M.d_(a)
s.N(a)
return s
case 4:s=new M.d0(a)
s.N(a)
return s
case 7:s=new M.d1(a)
s.N(a)
s.ec(a)
return s
case 9:s=new M.d2(a)
s.N(a)
s.B(0)
return s
case 10:s=new M.d3(a)
s.N(a)
s.B(0)
return s
case 11:s=new M.d4(a)
s.N(a)
return s
case 15:s=new M.d5(a)
s.N(a)
return s
case 18:s=new M.d6($.n().F(11,0),a)
s.N(a)
s.B(0)
return s
case 21:s=new M.d7($.n().F(9,0),a)
s.N(a)
s.B(0)
return s
case 22:s=new M.d8(a)
s.N(a)
s.B(0)
return s
case 23:s=new M.d9($.n().F(9,0),a)
s.N(a)
s.B(0)
return s
case 32:s=new M.da($.n().F(1,0),a)
s.N(a)
return s
case 33:s=new M.db(a)
s.N(a)
return s
case 34:s=new M.dc(a)
s.N(a)
return s
case 48:s=new M.dd(a)
s.N(a)
return s
case 64:s=new M.de($.n().F(3,0),a)
s.N(a)
s.B(0)
return s
case 66:s=new M.df(a)
s.N(a)
return s
case 68:s=new M.dg(a)
s.N(a)
return s
case 71:s=new M.dh(a)
s.N(a)
s.dx=-1
return s
case 72:s=new M.di(a)
s.N(a)
return s
case 75:s=new M.dj($.n().F(2,0),a)
s.N(a)
return s
case 78:s=new M.dk(a)
s.N(a)
return s
case 79:s=new M.dl(a)
s.N(a)
return s
case 87:s=new M.dm(a)
s.N(a)
return s
case 94:s=new M.dn(a)
s.N(a)
return s
case 105:s=new M.dp($.n().F(4,0),a)
s.N(a)
s.B(0)
return s
case 140:s=new M.dq(a)
s.N(a)
return s
case 182:s=new M.dr($.n().F(1,0),a)
s.N(a)
s.B(0)
return s}s="WARNING: Mapper "+p.db+" ["
r=p.fx
q=p.db
if(q>=255)return H.a(r,q)
P.v(s+H.y(r[q])+"]not supported yet. Using default.")
return M.j1(a)},
dX(){return this.gcD()},
seQ(a){this.c=t.T.a(a)},
seR(a){this.d=t.J.a(a)},
seS(a){this.e=t.J.a(a)},
seT(a){this.r=t.ff.a(a)}}
M.a5.prototype={
bu(a,b,c){var s,r,q,p,o,n,m,l=this
l.c=a<<3>>>0
for(s=l.a,r=s.length,q=l.z,p=0;p<8;++p){o=l.c+p
n=7-p
m=C.b.cG(b,n)
n=C.b.cG(c,n)
if(o<0||o>=r)return H.a(s,o)
s[o]=(m&1)+((n&1)<<1)
if(s[o]===0)C.a.h(q,a,!1)}},
co(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=t.L
f.a(a1)
f.a(a3)
f.a(a7)
if(e<-7||e>=256||a0<-7||a0>=240)return
if(e<0)a-=e
if(e+c>=256)c=256-e
if(a0<0)b-=a0
if(a0+d>=240)d=240-a0
f=!a4
if(f&&!a5){f=(a0<<8>>>0)+e
g.b=f
g.c=0
for(s=g.a,r=s.length,q=a7.length,p=a3.length,o=a1.length,n=0;n<8;++n){for(m=n>=b,l=n<d,k=0;k<8;++k){if(k>=a&&k<c&&m&&l){j=g.c
if(j<0||j>=r)return H.a(s,j)
j=g.f=s[j]
if(f<0||f>=q)return H.a(a7,f)
i=g.r=a7[f]
if(j!==0&&a6<=(i&255)){j+=a2
if(j<0||j>=p)return H.a(a3,j)
j=a3[j]
if(f>=o)return H.a(a1,f)
a1[f]=j
i=(i&3840|a6)>>>0
g.r=i
a7[f]=i}}++f
g.b=f;++g.c}f-=8
g.b=f
f+=256
g.b=f}}else if(a4&&!a5){f=(a0<<8>>>0)+e
g.b=f
g.c=7
for(s=g.a,r=s.length,q=a7.length,p=a3.length,o=a1.length,n=0,m=7;n<8;++n){for(l=n>=b,j=n<d,k=0;k<8;++k){if(k>=a&&k<c&&l&&j){if(m<0||m>=r)return H.a(s,m)
i=g.f=s[m]
if(f<0||f>=q)return H.a(a7,f)
h=g.r=a7[f]
if(i!==0&&a6<=(h&255)){i+=a2
if(i<0||i>=p)return H.a(a3,i)
i=a3[i]
if(f>=o)return H.a(a1,f)
a1[f]=i
h=(h&3840|a6)>>>0
g.r=h
a7[f]=h}}++f
g.b=f;--m
g.c=m}f-=8
g.b=f
f+=256
g.b=f
m+=16
g.c=m}}else{f=a5&&f
s=(a0<<8>>>0)+e
if(f){g.b=s
g.c=56
for(f=g.a,r=f.length,q=a7.length,p=a3.length,o=a1.length,n=0,m=56;n<8;++n){for(l=n>=b,j=n<d,k=0;k<8;++k){if(k>=a&&k<c&&l&&j){if(m<0||m>=r)return H.a(f,m)
i=g.f=f[m]
if(s<0||s>=q)return H.a(a7,s)
h=g.r=a7[s]
if(i!==0&&a6<=(h&255)){i+=a2
if(i<0||i>=p)return H.a(a3,i)
i=a3[i]
if(s>=o)return H.a(a1,s)
a1[s]=i
h=(h&3840|a6)>>>0
g.r=h
a7[s]=h}}++s
g.b=s;++m
g.c=m}s-=8
g.b=s
s+=256
g.b=s
m-=16
g.c=m}}else{g.b=s
g.c=63
for(f=g.a,r=f.length,q=a7.length,p=a3.length,o=a1.length,n=0;n<8;++n){for(m=n>=b,l=n<d,k=0;k<8;++k){if(k>=a&&k<c&&m&&l){j=g.c
if(j<0||j>=r)return H.a(f,j)
j=g.f=f[j]
if(s<0||s>=q)return H.a(a7,s)
i=g.r=a7[s]
if(j!==0&&a6<=(i&255)){j+=a2
if(j<0||j>=p)return H.a(a3,j)
j=a3[j]
if(s>=o)return H.a(a1,s)
a1[s]=j
i=(i&3840|a6)>>>0
g.r=i
a7[s]=i}}++s
g.b=s;--g.c}s-=8
g.b=s
s+=256
g.b=s}}}}}
M.fw.prototype={
bm(a,b,c,d,e){var s,r,q,p,o=t.L
o.a(a)
o.a(c)
for(o=a.length,s=c.length,r=0;r<e;++r){q=d+r
p=b+r
if(p<0||p>=o)return H.a(a,p)
p=a[p]
if(q<0||q>=s)return H.a(c,q)
c[q]=p}},
fC(a,b,c,d,e){var s,r=t.m
r.a(a)
r.a(c)
for(s=0;s<e;++s){r=b+s
if(r>=a.length)return H.a(a,r)
C.a.h(c,d+s,a[r])}},
br(a,b){var s,r=new Uint32Array(a)
for(s=0;s<a;++s){if(s>=a)return H.a(r,s)
r[s]=b}return r},
F(a,b){var s,r=new Int32Array(a)
for(s=0;s<a;++s){if(s>=a)return H.a(r,s)
r[s]=b}return r},
dC(a,b,c){var s,r
if(a<0)H.b(P.cB("Length must be a non-negative integer: "+a,null))
s=H.r(new Array(a),t.eu)
for(r=0;r<a;++r)s[r]=this.F(b,c)
return s}}
M.dM.prototype={
D(a,b){var s,r,q,p,o=this,n=t.q
n.a(a)
n.a(b)
for(n=o.b,s=b.length,r=a.length,q=0;q<n;++q){p=o.d
if(p==null)p=H.b(H.c("_bufferL"))
if(q>=r)return H.a(a,q)
C.a.h(p,q,a[q])
p=o.e
if(p==null)p=H.b(H.c("_bufferR"))
if(q>=s)return H.a(b,q)
C.a.h(p,q,b[q])}o.f=!0},
fe(a){var s,r,q,p,o,n,m,l=this
t.D.a(a)
if(!l.f)return
s=a.outputBuffer.getChannelData(0)
s.toString
r=a.outputBuffer.getChannelData(1)
for(q=l.b,p=r.length,o=s.length,n=0;n<q;++n){m=l.d
if(m==null)m=H.b(H.c("_bufferL"))
if(n>=m.length)return H.a(m,n)
m=m[n]
if(n>=o)return H.a(s,n)
s[n]=m
m=l.e
if(m==null)m=H.b(H.c("_bufferR"))
if(n>=m.length)return H.a(m,n)
m=m[n]
if(n>=p)return H.a(r,n)
r[n]=m}l.f=!1},
seU(a){this.d=t.R.a(a)},
seV(a){this.e=t.R.a(a)}};(function aliases(){var s=J.K.prototype
s.e5=s.q
s=J.aS.prototype
s.e7=s.q
s=P.l.prototype
s.e6=s.bJ
s=W.C.prototype
s.bR=s.au
s=W.ck.prototype
s.ea=s.aM
s=M.ba.prototype
s.T=s.D
s.e8=s.A
s.e9=s.B})();(function installTearOffs(){var s=hunkHelpers._instance_1u,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1i
s(H.b5.prototype,"gfi","fj",20)
r(H,"ls","kz",15)
q(P,"lE","kM",3)
q(P,"lF","kN",3)
q(P,"lG","kO",3)
r(P,"jz","ly",1)
p(P.c7.prototype,"gfG",0,1,null,["$2","$1"],["dm","dl"],17,0,0)
o(P.Q.prototype,"gf2","b1",18)
p(P.ay.prototype,"gff",0,0,null,["$1$0","$0"],["d1","fg"],21,0,0)
n(W,"lN",4,null,["$4"],["kQ"],12,0)
n(W,"lO",4,null,["$4"],["kR"],12,0)
s(P.bD.prototype,"gfw","da",6)
var k
m(k=M.cK.prototype,"gd8","fv",1)
l(k,"gdc","fB",28)
s(M.dM.prototype,"gfd","fe",32)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.u,null)
q(P.u,[H.ig,J.K,J.aD,P.a4,H.b5,P.l,H.bB,P.B,H.aU,P.L,H.ae,H.aL,H.hn,H.fY,H.cl,P.J,H.fS,H.bN,H.cU,H.aa,H.dW,P.hN,P.by,P.c7,P.cb,P.Q,P.dO,P.bh,P.dE,P.cr,P.ct,P.e_,P.b_,P.cc,P.t,P.O,P.cj,P.cH,P.b7,P.c2,P.hv,P.fM,P.M,P.e4,P.hk,P.dF,W.fG,W.ib,W.aZ,W.a0,W.bZ,W.ck,W.e5,W.aO,W.e3,W.cq,P.cn,M.ba,M.ed,M.ei,M.fy,M.fz,M.cE,M.fA,M.cI,M.d,M.ej,M.hj,M.fR,M.cK,M.bU,M.bb,M.fV,M.h2,M.fZ,M.h_,M.h9,M.h8,M.a5,M.fw,M.dM])
q(J.K,[J.cS,J.bK,J.aS,J.F,J.bL,J.aR,H.ds,H.dt,W.x,W.cD,W.aH,W.dQ,W.fH,W.cN,W.fI,W.f,W.dU,W.aQ,W.bQ,W.e0,W.e8,P.eg,P.dz])
q(J.aS,[J.dw,J.bj,J.an])
r(J.fQ,J.F)
q(J.bL,[J.bJ,J.cT])
q(P.a4,[H.aK,W.c9])
q(P.l,[H.aq,H.p,H.aV,H.aY])
q(H.aq,[H.aI,H.cs,H.aJ])
r(H.c8,H.aI)
r(H.c6,H.cs)
r(H.al,H.c6)
q(P.B,[H.bM,P.aw,H.cV,H.dK,H.dA,P.bx,H.dT,P.dv,P.ac,P.dL,P.dJ,P.bg,P.cJ,P.cM])
q(H.p,[H.af,H.aT])
r(H.aN,H.aV)
q(P.L,[H.bS,H.c4])
q(H.af,[H.bT,P.dZ])
q(H.aL,[H.cF,H.cG,H.dI,H.i_,H.i1,P.hq,P.hp,P.hz,P.hG,P.hl,P.hJ,P.fJ,P.fK,W.fL,W.fO,W.fP,W.ht,W.hu,W.fX,W.fW,W.hK,W.hL,W.hM,P.fE,P.fD,P.fF,M.fB,M.fC,M.h0,M.h1,M.hc,M.hd,M.he,M.hf,M.hg,M.hh,M.hi,M.ha,M.hb])
q(H.cF,[H.h5,P.hr,P.hs,P.hO,P.fN,P.hw,P.hC,P.hB,P.hy,P.hx,P.hF,P.hE,P.hD,P.hm,P.hV,P.hI,M.ek,M.el,M.em,M.ex,M.eI,M.eT,M.f3,M.fe,M.fp,M.fu,M.fv,M.en,M.eo,M.ep,M.eq,M.er,M.es,M.et,M.eu,M.ev,M.ew,M.ey,M.ez,M.eA,M.eB,M.eC,M.eD,M.eE,M.eF,M.eG,M.eH,M.eJ,M.eK,M.eL,M.eM,M.eN,M.eO,M.eP,M.eQ,M.eR,M.eS,M.eU,M.eV,M.eW,M.eX,M.eY,M.eZ,M.f_,M.f0,M.f1,M.f2,M.f4,M.f5,M.f6,M.f7,M.f8,M.f9,M.fa,M.fb,M.fc,M.fd,M.ff,M.fg,M.fh,M.fi,M.fj,M.fk,M.fl,M.fm,M.fn,M.fo,M.fq,M.fr,M.fs,M.ft])
r(H.c_,P.aw)
q(H.dI,[H.dD,H.b4])
r(H.dN,P.bx)
r(P.bR,P.J)
q(P.bR,[H.a3,P.dY,W.dP])
q(H.cG,[H.i0,P.hA,P.fU,W.hR])
r(H.bc,H.dt)
q(H.bc,[H.ce,H.cg])
r(H.cf,H.ce)
r(H.bd,H.cf)
r(H.ch,H.cg)
r(H.bW,H.ch)
q(H.bW,[H.bV,H.bX,H.be,H.du])
r(H.cm,H.dT)
r(P.c5,P.c7)
r(P.e2,P.cr)
r(P.ci,P.ct)
r(P.ay,P.ci)
r(P.bP,P.cc)
r(P.c1,P.cj)
r(P.cL,P.dE)
r(P.cW,P.cH)
r(P.cX,P.cL)
q(P.ac,[P.c0,P.cR])
q(W.x,[W.m,W.bF,W.bH,W.bk,P.bz,P.w])
q(W.m,[W.C,W.ad,W.aM,W.bl])
q(W.C,[W.k,P.i])
q(W.k,[W.b2,W.cA,W.b3,W.aF,W.aG,W.cQ,W.b9,W.dB,W.c3,W.dG,W.dH,W.bi])
r(W.b6,W.dQ)
r(W.a_,W.cD)
r(W.dV,W.dU)
r(W.cP,W.dV)
r(W.bG,W.aM)
r(W.a7,W.bH)
q(W.f,[W.ah,W.a9,P.ak])
q(W.ah,[W.ao,W.a1])
r(W.P,P.bP)
r(W.e1,W.e0)
r(W.bY,W.e1)
r(W.e9,W.e8)
r(W.cd,W.e9)
r(W.dR,W.dP)
r(P.bD,P.c1)
q(P.bD,[W.dS,P.cC])
r(W.U,W.c9)
r(W.ca,P.bh)
r(W.e6,W.ck)
r(P.bf,P.i)
r(P.aE,P.bz)
r(P.aX,P.w)
q(M.ba,[M.d3,M.d4,M.d5,M.d8,M.db,M.dc,M.dd,M.df,M.dg,M.dh,M.di,M.dk,M.dl,M.dm,M.dn,M.dq,M.cY,M.cZ,M.d_,M.d0,M.d1,M.d2,M.d6,M.d7,M.d9,M.da,M.de,M.dj,M.dp,M.dr])
s(H.cs,P.t)
s(H.ce,P.t)
s(H.cf,H.ae)
s(H.cg,P.t)
s(H.ch,H.ae)
s(P.cc,P.t)
s(P.cj,P.O)
s(P.ct,P.O)
s(W.dQ,W.fG)
s(W.dU,P.t)
s(W.dV,W.a0)
s(W.e0,P.t)
s(W.e1,W.a0)
s(W.e8,P.t)
s(W.e9,W.a0)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",Z:"double",as:"num",j:"String",G:"bool",M:"Null",q:"List"},mangledNames:{},types:["M()","~()","~(a1)","~(~())","M(@)","~(f)","j(j)","@(@)","j(o)","~(a9)","G(a8)","G(j)","G(C,j,j,aZ)","~(N<j>)","~(ao)","o()","@(@,j)","~(u[ab?])","~(u,ab)","M(u,ab)","~(u?)","N<0^>()<u?>","~(u?,u?)","G(m)","Q<@>(@)","@(j)","~(m,m?)","G(N<j>)","~(as)","~(G)","~(o)","M(j)","~(ak)","M(~())","j(a7)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
H.l5(v.typeUniverse,JSON.parse('{"dw":"aS","bj":"aS","an":"aS","m6":"f","mk":"f","m7":"w","m5":"i","mm":"i","mH":"a9","m8":"k","mn":"k","mq":"m","mj":"m","mE":"aM","mp":"a1","ma":"ah","m9":"ad","ms":"ad","mo":"bd","cS":{"G":[]},"bK":{"M":[]},"F":{"q":["1"],"p":["1"],"l":["1"]},"fQ":{"F":["1"],"q":["1"],"p":["1"],"l":["1"]},"aD":{"L":["1"]},"bL":{"Z":[],"as":[]},"bJ":{"Z":[],"o":[],"as":[]},"cT":{"Z":[],"as":[]},"aR":{"j":[],"h4":[]},"aK":{"a4":["2"],"a4.T":"2"},"b5":{"bh":["2"]},"aq":{"l":["2"]},"bB":{"L":["2"]},"aI":{"aq":["1","2"],"l":["2"],"l.E":"2"},"c8":{"aI":["1","2"],"aq":["1","2"],"p":["2"],"l":["2"],"l.E":"2"},"c6":{"t":["2"],"q":["2"],"aq":["1","2"],"p":["2"],"l":["2"]},"al":{"c6":["1","2"],"t":["2"],"q":["2"],"aq":["1","2"],"p":["2"],"l":["2"],"t.E":"2","l.E":"2"},"aJ":{"N":["2"],"aq":["1","2"],"p":["2"],"l":["2"],"l.E":"2"},"bM":{"B":[]},"p":{"l":["1"]},"af":{"p":["1"],"l":["1"]},"aU":{"L":["1"]},"aV":{"l":["2"],"l.E":"2"},"aN":{"aV":["1","2"],"p":["2"],"l":["2"],"l.E":"2"},"bS":{"L":["2"]},"bT":{"af":["2"],"p":["2"],"l":["2"],"af.E":"2","l.E":"2"},"aY":{"l":["1"],"l.E":"1"},"c4":{"L":["1"]},"c_":{"aw":[],"B":[]},"cV":{"B":[]},"dK":{"B":[]},"cl":{"ab":[]},"aL":{"aP":[]},"cF":{"aP":[]},"cG":{"aP":[]},"dI":{"aP":[]},"dD":{"aP":[]},"b4":{"aP":[]},"dA":{"B":[]},"dN":{"B":[]},"a3":{"J":["1","2"],"iZ":["1","2"],"ag":["1","2"],"J.K":"1","J.V":"2"},"aT":{"p":["1"],"l":["1"],"l.E":"1"},"bN":{"L":["1"]},"cU":{"h4":[]},"ds":{"iQ":[]},"bc":{"X":["1"]},"bd":{"t":["Z"],"X":["Z"],"q":["Z"],"p":["Z"],"l":["Z"],"ae":["Z"],"t.E":"Z"},"bW":{"t":["o"],"X":["o"],"q":["o"],"p":["o"],"l":["o"],"ae":["o"]},"bV":{"t":["o"],"id":[],"X":["o"],"q":["o"],"p":["o"],"l":["o"],"ae":["o"],"t.E":"o"},"bX":{"t":["o"],"X":["o"],"q":["o"],"p":["o"],"l":["o"],"ae":["o"],"t.E":"o"},"be":{"t":["o"],"kJ":[],"X":["o"],"q":["o"],"p":["o"],"l":["o"],"ae":["o"],"t.E":"o"},"du":{"t":["o"],"X":["o"],"q":["o"],"p":["o"],"l":["o"],"ae":["o"],"t.E":"o"},"dT":{"B":[]},"cm":{"aw":[],"B":[]},"Q":{"b8":["1"]},"by":{"B":[]},"c5":{"c7":["1"]},"cr":{"jb":[]},"e2":{"cr":[],"jb":[]},"ay":{"ci":["1"],"O":["1"],"N":["1"],"p":["1"],"l":["1"],"O.E":"1"},"b_":{"L":["1"]},"bP":{"t":["1"],"q":["1"],"p":["1"],"l":["1"]},"bR":{"J":["1","2"],"ag":["1","2"]},"J":{"ag":["1","2"]},"c1":{"O":["1"],"N":["1"],"p":["1"],"l":["1"]},"ci":{"O":["1"],"N":["1"],"p":["1"],"l":["1"]},"dY":{"J":["j","@"],"ag":["j","@"],"J.K":"j","J.V":"@"},"dZ":{"af":["j"],"p":["j"],"l":["j"],"af.E":"j","l.E":"j"},"cW":{"cH":["u?","j"]},"cX":{"cL":["j","u?"]},"Z":{"as":[]},"o":{"as":[]},"q":{"p":["1"],"l":["1"]},"N":{"p":["1"],"l":["1"]},"j":{"h4":[]},"bx":{"B":[]},"aw":{"B":[]},"dv":{"B":[]},"ac":{"B":[]},"c0":{"B":[]},"cR":{"B":[]},"dL":{"B":[]},"dJ":{"B":[]},"bg":{"B":[]},"cJ":{"B":[]},"c2":{"B":[]},"cM":{"B":[]},"e4":{"ab":[]},"C":{"m":[],"x":[]},"a7":{"x":[]},"ao":{"f":[]},"a1":{"f":[]},"m":{"x":[]},"a9":{"f":[]},"aZ":{"a8":[]},"k":{"C":[],"m":[],"x":[]},"b2":{"C":[],"m":[],"x":[]},"cA":{"C":[],"m":[],"x":[]},"b3":{"C":[],"m":[],"x":[]},"aF":{"C":[],"m":[],"x":[]},"aG":{"C":[],"m":[],"x":[]},"aH":{"fx":[]},"ad":{"m":[],"x":[]},"aM":{"m":[],"x":[]},"cP":{"t":["a_"],"a0":["a_"],"q":["a_"],"X":["a_"],"p":["a_"],"l":["a_"],"t.E":"a_","a0.E":"a_"},"bF":{"x":[]},"cQ":{"C":[],"m":[],"x":[]},"bG":{"m":[],"x":[]},"bH":{"x":[]},"b9":{"C":[],"m":[],"x":[]},"P":{"t":["m"],"q":["m"],"p":["m"],"l":["m"],"t.E":"m"},"bY":{"t":["m"],"a0":["m"],"q":["m"],"X":["m"],"p":["m"],"l":["m"],"t.E":"m","a0.E":"m"},"dB":{"C":[],"m":[],"x":[]},"c3":{"C":[],"m":[],"x":[]},"dG":{"C":[],"m":[],"x":[]},"dH":{"C":[],"m":[],"x":[]},"bi":{"C":[],"m":[],"x":[]},"ah":{"f":[]},"bk":{"x":[]},"bl":{"m":[],"x":[]},"cd":{"t":["m"],"a0":["m"],"q":["m"],"X":["m"],"p":["m"],"l":["m"],"t.E":"m","a0.E":"m"},"dP":{"J":["j","j"],"ag":["j","j"]},"dR":{"J":["j","j"],"ag":["j","j"],"J.K":"j","J.V":"j"},"dS":{"O":["j"],"N":["j"],"p":["j"],"l":["j"],"O.E":"j"},"c9":{"a4":["1"],"a4.T":"1"},"U":{"c9":["1"],"a4":["1"],"a4.T":"1"},"ca":{"bh":["1"]},"bZ":{"a8":[]},"ck":{"a8":[]},"e6":{"a8":[]},"e5":{"a8":[]},"aO":{"L":["1"]},"e3":{"kK":[]},"cq":{"kx":[]},"cn":{"aQ":[]},"bD":{"O":["j"],"N":["j"],"p":["j"],"l":["j"]},"bf":{"i":[],"C":[],"m":[],"x":[]},"cC":{"O":["j"],"N":["j"],"p":["j"],"l":["j"],"O.E":"j"},"i":{"C":[],"m":[],"x":[]},"ak":{"f":[]},"aE":{"x":[]},"w":{"x":[]},"bz":{"x":[]},"aX":{"w":[],"x":[]},"dz":{"fx":[]},"d3":{"z":[]},"d4":{"z":[]},"d5":{"z":[]},"d8":{"z":[]},"db":{"z":[]},"dc":{"z":[]},"dd":{"z":[]},"df":{"z":[]},"dg":{"z":[]},"dh":{"z":[]},"di":{"z":[]},"dk":{"z":[]},"dl":{"z":[]},"dm":{"z":[]},"dn":{"z":[]},"dq":{"z":[]},"cY":{"z":[]},"cZ":{"z":[]},"d_":{"z":[]},"d0":{"z":[]},"d1":{"z":[]},"d2":{"z":[]},"d6":{"z":[]},"d7":{"z":[]},"d9":{"z":[]},"da":{"z":[]},"de":{"z":[]},"dj":{"z":[]},"dp":{"z":[]},"dr":{"z":[]},"ba":{"z":[]},"id":{"q":["o"],"p":["o"],"l":["o"]}}'))
H.l4(v.typeUniverse,JSON.parse('{"cs":2,"bc":1,"dE":2,"bP":1,"bR":2,"c1":1,"cc":1,"cj":1,"ct":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=H.jA
return{gu:s("@<@>"),n:s("by"),D:s("ak"),cR:s("b3"),a:s("aF"),dI:s("iQ"),gA:s("aG"),cD:s("fx"),ar:s("aH"),gw:s("p<@>"),h:s("C"),W:s("B"),B:s("f"),c8:s("a_"),Y:s("aP"),d:s("b8<@>"),bo:s("a7"),gb:s("aQ"),gk:s("b9"),eh:s("l<m>"),X:s("l<j>"),hf:s("l<@>"),eu:s("F<id>"),fk:s("F<q<a5>>"),r:s("F<q<o>>"),aR:s("F<bb>"),j:s("F<a8>"),f1:s("F<d>"),s:s("F<j>"),f:s("F<a5>"),gn:s("F<@>"),t:s("F<o>"),u:s("bK"),b:s("an"),aU:s("X<@>"),bT:s("a3<j,o>"),cT:s("a3<o,ag<j,o>>"),g:s("ao"),ci:s("q<q<a5>>"),aG:s("q<q<o>>"),aB:s("q<bb>"),fD:s("q<d>"),m:s("q<a5>"),w:s("q<G>"),q:s("q<Z>"),L:s("q<o>"),h6:s("q<a5?>"),x:s("bQ"),g6:s("ag<j,o>"),eO:s("ag<@,@>"),I:s("ag<o,ag<j,o>>"),dv:s("bT<j,j>"),V:s("a1"),A:s("m"),e:s("a8"),P:s("M"),K:s("u"),p:s("a9"),ew:s("bf"),Q:s("N<j>"),l:s("ab"),N:s("j"),dG:s("j(j)"),g7:s("i"),aW:s("bi"),eK:s("aw"),ak:s("bj"),bj:s("c5<a7>"),h9:s("bl"),ac:s("P"),cl:s("U<f>"),C:s("U<a1>"),ao:s("Q<a7>"),c:s("Q<@>"),fJ:s("Q<o>"),G:s("aZ"),y:s("G"),al:s("G(u)"),i:s("Z"),z:s("@"),fO:s("@()"),v:s("@(u)"),U:s("@(u,ab)"),bU:s("@(N<j>)"),S:s("o"),aw:s("0&*"),_:s("u*"),eH:s("b8<M>?"),ff:s("q<q<a5>>?"),J:s("q<q<o>>?"),cW:s("q<bb>?"),gU:s("q<d>?"),E:s("q<G>?"),R:s("q<Z>?"),bM:s("q<@>?"),T:s("q<o>?"),gl:s("q<a5?>?"),O:s("u?"),f9:s("a5?"),F:s("cb<@,@>?"),br:s("e_?"),o:s("@(f)?"),Z:s("~()?"),gf:s("~(ak)?"),eN:s("~(ao)?"),gx:s("~(a9)?"),di:s("as"),H:s("~"),M:s("~()"),d5:s("~(u)"),k:s("~(u,ab)"),eA:s("~(j,j)"),cA:s("~(j,@)"),c4:s("~(as)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.x=W.b2.prototype
C.y=P.aE.prototype
C.l=W.aF.prototype
C.o=W.aG.prototype
C.H=W.aH.prototype
C.f=W.b6.prototype
C.I=W.cN.prototype
C.K=W.bF.prototype
C.L=W.bG.prototype
C.M=W.a7.prototype
C.N=J.K.prototype
C.a=J.F.prototype
C.b=J.bJ.prototype
C.e=J.bL.prototype
C.d=J.aR.prototype
C.O=J.an.prototype
C.h=H.bV.prototype
C.t=H.bX.prototype
C.W=H.be.prototype
C.u=J.dw.prototype
C.X=P.aX.prototype
C.v=W.c3.prototype
C.k=J.bj.prototype
C.w=W.bk.prototype
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.E=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.D=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.C=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.n=function(hooks) { return hooks; }

C.F=new P.cW()
C.c=new P.e2()
C.G=new P.e4()
C.J=new P.b7(0)
C.p=new P.b7(1e6)
C.P=new P.cX(null)
C.Q=H.r(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
C.R=H.r(s([82,82,82,128,0,0,138,0,8,126,0,44,78,0,74,6,0,80,0,0,68,0,8,38,0,32,10,0,46,0,0,50,0,10,38,0,72,28,0,0,0,0,0,0,0,0,0,0,164,164,164,206,56,0,236,22,52,220,4,94,176,0,140,76,0,154,0,24,144,0,54,112,0,84,76,0,108,14,0,116,0,44,108,0,132,94,0,0,0,0,0,0,0,0,0,0,255,255,255,255,156,76,255,120,124,255,100,166,255,90,218,192,84,240,86,106,240,16,134,214,0,164,186,0,192,118,26,204,70,102,200,46,190,194,52,58,58,58,0,0,0,0,0,0,255,255,255,255,218,182,255,202,200,255,194,218,255,190,240,238,188,252,192,194,250,162,204,242,146,218,230,142,230,204,162,238,184,190,234,174,226,232,174,176,176,176,0,0,0,0,0,0]),t.t)
C.q=H.r(s([0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1]),t.t)
C.i=H.r(s([10,254,20,2,40,4,80,6,160,8,60,10,14,12,26,14,12,16,24,18,48,20,96,22,192,24,72,26,16,28,32,30]),t.t)
C.S=H.r(s([4,8,16,32,64,96,128,160,202,254,380,508,762,1016,2034,4068]),t.t)
C.T=H.r(s([3424,3040,2720,2560,2288,2032,1808,1712,1520,1280,1136,1024,848,672,576,432]),t.t)
C.U=H.r(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
C.V=H.r(s([]),t.s)
C.r=H.r(s(["bind","if","ref","repeat","syntax"]),t.s)
C.j=H.r(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)})();(function staticFields(){$.hH=null
$.h7=0
$.ik=H.ls()
$.am=0
$.bA=null
$.iO=null
$.jB=null
$.jy=null
$.jF=null
$.hW=null
$.i2=null
$.iC=null
$.bp=null
$.cu=null
$.cv=null
$.iw=!1
$.D=C.c
$.a2=H.r([],H.jA("F<u>"))
$.av=null
$.ia=null
$.iU=null
$.iT=null
$.dX=P.ii(t.N,t.Y)
$.e=null
$.aW=H.r([],t.t)
$.ij=H.r([],t.t)
$.h3=H.r([],t.r)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"md","jJ",function(){return H.lL("_$dart_dartClosure")})
s($,"mt","jO",function(){return H.ap(H.ho({
toString:function(){return"$receiver$"}}))})
s($,"mu","jP",function(){return H.ap(H.ho({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"mv","jQ",function(){return H.ap(H.ho(null))})
s($,"mw","jR",function(){return H.ap(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"mz","jU",function(){return H.ap(H.ho(void 0))})
s($,"mA","jV",function(){return H.ap(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"my","jT",function(){return H.ap(H.j9(null))})
s($,"mx","jS",function(){return H.ap(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"mC","jX",function(){return H.ap(H.j9(void 0))})
s($,"mB","jW",function(){return H.ap(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"mF","iG",function(){return P.kL()})
s($,"mr","iF",function(){H.kA()
return $.h7})
s($,"mc","jI",function(){return{}})
s($,"mG","jY",function(){return P.fT(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"mb","jH",function(){return P.kF("^\\S+$")})
s($,"mh","iE",function(){return C.d.c8(P.i9(),"Opera",0)})
s($,"mg","jM",function(){return!H.R($.iE())&&C.d.c8(P.i9(),"Trident/",0)})
s($,"mf","jL",function(){return C.d.c8(P.i9(),"Firefox",0)})
s($,"me","jK",function(){return"-"+$.jN()+"-"})
s($,"mi","jN",function(){if(H.R($.jL()))var q="moz"
else if($.jM())q="ms"
else q=H.R($.iE())?"o":"webkit"
return q})
r($,"ml","at",function(){return new M.hj()})
r($,"mD","n",function(){return new M.fw()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DataTransfer:J.K,DOMError:J.K,MediaError:J.K,Navigator:J.K,NavigatorConcurrentHardware:J.K,NavigatorUserMediaError:J.K,OverconstrainedError:J.K,PositionError:J.K,GeolocationPositionError:J.K,Range:J.K,WebGL2RenderingContext:J.K,SQLError:J.K,ArrayBuffer:H.ds,ArrayBufferView:H.dt,Float32Array:H.bd,Int32Array:H.bV,Uint32Array:H.bX,Uint8ClampedArray:H.be,CanvasPixelArray:H.be,Uint8Array:H.du,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.b2,HTMLAreaElement:W.cA,HTMLBaseElement:W.b3,Blob:W.cD,HTMLBodyElement:W.aF,HTMLCanvasElement:W.aG,CanvasRenderingContext2D:W.aH,CDATASection:W.ad,CharacterData:W.ad,Comment:W.ad,ProcessingInstruction:W.ad,Text:W.ad,CSSStyleDeclaration:W.b6,MSStyleCSSProperties:W.b6,CSS2Properties:W.b6,XMLDocument:W.aM,Document:W.aM,DOMException:W.fH,DOMImplementation:W.cN,DOMTokenList:W.fI,Element:W.C,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,SubmitEvent:W.f,EventTarget:W.x,File:W.a_,FileList:W.cP,FileReader:W.bF,HTMLFormElement:W.cQ,HTMLDocument:W.bG,XMLHttpRequest:W.a7,XMLHttpRequestEventTarget:W.bH,ImageData:W.aQ,HTMLInputElement:W.b9,KeyboardEvent:W.ao,Location:W.bQ,MouseEvent:W.a1,DragEvent:W.a1,PointerEvent:W.a1,WheelEvent:W.a1,DocumentFragment:W.m,ShadowRoot:W.m,DocumentType:W.m,Node:W.m,NodeList:W.bY,RadioNodeList:W.bY,ProgressEvent:W.a9,ResourceProgressEvent:W.a9,HTMLSelectElement:W.dB,HTMLTableElement:W.c3,HTMLTableRowElement:W.dG,HTMLTableSectionElement:W.dH,HTMLTemplateElement:W.bi,CompositionEvent:W.ah,FocusEvent:W.ah,TextEvent:W.ah,TouchEvent:W.ah,UIEvent:W.ah,Window:W.bk,DOMWindow:W.bk,Attr:W.bl,NamedNodeMap:W.cd,MozNamedAttrMap:W.cd,SVGScriptElement:P.bf,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,AudioBuffer:P.eg,AudioContext:P.aE,webkitAudioContext:P.aE,AnalyserNode:P.w,RealtimeAnalyserNode:P.w,AudioBufferSourceNode:P.w,AudioDestinationNode:P.w,AudioScheduledSourceNode:P.w,AudioWorkletNode:P.w,BiquadFilterNode:P.w,ChannelMergerNode:P.w,AudioChannelMerger:P.w,ChannelSplitterNode:P.w,AudioChannelSplitter:P.w,ConstantSourceNode:P.w,ConvolverNode:P.w,DelayNode:P.w,DynamicsCompressorNode:P.w,GainNode:P.w,AudioGainNode:P.w,IIRFilterNode:P.w,MediaElementAudioSourceNode:P.w,MediaStreamAudioDestinationNode:P.w,MediaStreamAudioSourceNode:P.w,OscillatorNode:P.w,Oscillator:P.w,PannerNode:P.w,AudioPannerNode:P.w,webkitAudioPannerNode:P.w,StereoPannerNode:P.w,WaveShaperNode:P.w,AudioNode:P.w,AudioProcessingEvent:P.ak,BaseAudioContext:P.bz,ScriptProcessorNode:P.aX,JavaScriptAudioNode:P.aX,WebGLRenderingContext:P.dz})
hunkHelpers.setOrUpdateLeafTags({DataTransfer:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,Range:true,WebGL2RenderingContext:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,Float32Array:true,Int32Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,File:true,FileList:true,FileReader:true,HTMLFormElement:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,ProgressEvent:true,ResourceProgressEvent:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,AudioBuffer:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,AudioProcessingEvent:true,BaseAudioContext:false,ScriptProcessorNode:true,JavaScriptAudioNode:true,WebGLRenderingContext:true})
H.bc.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.bd.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=M.lW
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

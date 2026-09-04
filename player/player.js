var TourPlayer=(function(bn){"use strict";var sM=Object.defineProperty;var rM=(bn,Zn,Es)=>Zn in bn?sM(bn,Zn,{enumerable:!0,configurable:!0,writable:!0,value:Es}):bn[Zn]=Es;var $e=(bn,Zn,Es)=>rM(bn,typeof Zn!="symbol"?Zn+"":Zn,Es);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ln="srgb",vi="srgb-linear",mr="linear",yt="srgb",Cl="300 es";class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rl=1234567;const ws=Math.PI/180,Ms=180/Math.PI;function zi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Bo(n,e){return(n%e+e)%e}function Cp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Rp(n,e,t){return n!==e?(t-n)/(e-n):0}function Ss(n,e,t){return(1-t)*n+t*e}function Pp(n,e,t,i){return Ss(n,e,1-Math.exp(-t*i))}function Lp(n,e=1){return e-Math.abs(Bo(n,e*2)-e)}function Ip(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Dp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Np(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Up(n,e){return n+Math.random()*(e-n)}function Fp(n){return n*(.5-Math.random())}function kp(n){n!==void 0&&(Rl=n);let e=Rl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Op(n){return n*ws}function Bp(n){return n*Ms}function zp(n){return(n&n-1)===0&&n!==0}function Hp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Vp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const it={DEG2RAD:ws,RAD2DEG:Ms,generateUUID:zi,clamp:rt,euclideanModulo:Bo,mapLinear:Cp,inverseLerp:Rp,lerp:Ss,damp:Pp,pingpong:Lp,smoothstep:Ip,smootherstep:Dp,randInt:Np,randFloat:Up,randFloatSpread:Fp,seededRandom:kp,degToRad:Op,radToDeg:Bp,isPowerOfTwo:zp,ceilPowerOfTwo:Hp,floorPowerOfTwo:Vp,setQuaternionFromProperEuler:Gp,normalize:$t,denormalize:Hi};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==m||h!==g){let p=1-a;const u=l*f+c*m+h*g+d*v,y=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const P=Math.sqrt(E),R=Math.atan2(P,u*y);p=Math.sin(p*R)/P,a=Math.sin(a*R)/P}const x=a*y;if(l=l*p+f*x,c=c*p+m*x,h=h*p+g*x,d=d*p+v*x,p===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-a*m,e[t+2]=c*g+h*m+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new O,Pl=new Kn;class Ze{constructor(e,t,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],v=s[0],p=s[3],u=s[6],y=s[1],E=s[4],x=s[7],P=s[2],R=s[5],N=s[8];return r[0]=o*v+a*y+l*P,r[3]=o*p+a*E+l*R,r[6]=o*u+a*x+l*N,r[1]=c*v+h*y+d*P,r[4]=c*p+h*E+d*R,r[7]=c*u+h*x+d*N,r[2]=f*v+m*y+g*P,r[5]=f*p+m*E+g*R,r[8]=f*u+m*x+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=t*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ho.makeScale(e,t)),this}rotate(e){return this.premultiply(Ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ho=new Ze;function Ll(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wp(){const n=bs("canvas");return n.style.display="block",n}const Il={};function Vi(n){n in Il||(Il[n]=!0,console.warn(n))}function $p(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Dl=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xp(){const n={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?mr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vi]:{primaries:e,whitePoint:i,transfer:mr,toXYZ:Dl,fromXYZ:Nl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:Dl,fromXYZ:Nl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}const ct=Xp();function On(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wi;class qp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wi===void 0&&(Wi=bs("canvas")),Wi.width=e.width,Wi.height=e.height;const s=Wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Wi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(On(t[i]/255)*255):t[i]=On(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yp=0;class Vo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Go(s[o].image)):r.push(Go(s[o]))}else r=Go(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jp=0;const Wo=new O;class kt extends Bi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=1001,s=1001,r=1006,o=1008,a=1023,l=1009,c=kt.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=zi(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=300,kt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,x=(m+1)/2,P=(u+1)/2,R=(h+f)/4,N=(d+v)/4,F=(g+p)/4;return E>x&&E>P?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=R/i,r=N/i):x>P?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=R/s,r=F/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=N/r,s=F/r),this.set(i,s,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zp extends Bi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new kt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Zp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ul extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kp extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gr.copy(i.boundingBox)),gr.applyMatrix4(e.matrixWorld),this.union(gr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),vr.subVectors(this.max,Ts),Xi.subVectors(e.a,Ts),qi.subVectors(e.b,Ts),Yi.subVectors(e.c,Ts),Qn.subVectors(qi,Xi),ei.subVectors(Yi,qi),_i.subVectors(Xi,Yi);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-_i.z,_i.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,_i.z,0,-_i.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-_i.y,_i.x,0];return!$o(t,Xi,qi,Yi,vr)||(t=[1,0,0,0,1,0,0,0,1],!$o(t,Xi,qi,Yi,vr))?!1:(_r.crossVectors(Qn,ei),t=[_r.x,_r.y,_r.z],$o(t,Xi,qi,Yi,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new O,new O,new O,new O,new O,new O,new O,new O],_n=new O,gr=new $i,Xi=new O,qi=new O,Yi=new O,Qn=new O,ei=new O,_i=new O,Ts=new O,vr=new O,_r=new O,yi=new O;function $o(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){yi.fromArray(n,r);const a=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),h=i.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Jp=new $i,As=new O,Xo=new O;class yr{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Jp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(As,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Xo)),this.expandByPoint(As.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new O,qo=new O,xr=new O,ti=new O,Yo=new O,Er=new O,jo=new O;class Zo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qo.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(qo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(xr),a=ti.dot(this.direction),l=-ti.dot(xr),c=ti.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qo).addScaledVector(xr,f),m}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),s=zn.dot(zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,s,r){Yo.subVectors(t,e),Er.subVectors(i,e),jo.crossVectors(Yo,Er);let o=this.direction.dot(jo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const l=a*this.direction.dot(Er.crossVectors(ti,Er));if(l<0)return null;const c=a*this.direction.dot(Yo.cross(ti));if(c<0||l+c>o)return null;const h=-a*ti.dot(jo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,s,r,o,a,l,c,h,d,f,m,g,v,p){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,f,m,g,v,p)}set(e,t,i,s,r,o,a,l,c,h,d,f,m,g,v,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,m=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,g=c*h,v=c*d;t[0]=f+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,g=c*h,v=c*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qp,e,em)}lookAt(e,t,i){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ni.crossVectors(i,en),ni.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ni.crossVectors(i,en)),ni.normalize(),wr.crossVectors(en,ni),s[0]=ni.x,s[4]=wr.x,s[8]=en.x,s[1]=ni.y,s[5]=wr.y,s[9]=en.y,s[2]=ni.z,s[6]=wr.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],v=i[6],p=i[10],u=i[14],y=i[3],E=i[7],x=i[11],P=i[15],R=s[0],N=s[4],F=s[8],b=s[12],T=s[1],D=s[5],K=s[9],V=s[13],W=s[2],ie=s[6],j=s[10],oe=s[14],z=s[3],me=s[7],Ee=s[11],Ue=s[15];return r[0]=o*R+a*T+l*W+c*z,r[4]=o*N+a*D+l*ie+c*me,r[8]=o*F+a*K+l*j+c*Ee,r[12]=o*b+a*V+l*oe+c*Ue,r[1]=h*R+d*T+f*W+m*z,r[5]=h*N+d*D+f*ie+m*me,r[9]=h*F+d*K+f*j+m*Ee,r[13]=h*b+d*V+f*oe+m*Ue,r[2]=g*R+v*T+p*W+u*z,r[6]=g*N+v*D+p*ie+u*me,r[10]=g*F+v*K+p*j+u*Ee,r[14]=g*b+v*V+p*oe+u*Ue,r[3]=y*R+E*T+x*W+P*z,r[7]=y*N+E*D+x*ie+P*me,r[11]=y*F+E*K+x*j+P*Ee,r[15]=y*b+E*V+x*oe+P*Ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],u=e[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*m-i*l*m)+v*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+t*c*d-t*a*m-r*o*d+i*o*m+r*a*h-i*c*h)+u*(-s*a*h-t*l*d+t*a*f+s*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],u=e[15],y=d*p*c-v*f*c+v*l*m-a*p*m-d*l*u+a*f*u,E=g*f*c-h*p*c-g*l*m+o*p*m+h*l*u-o*f*u,x=h*v*c-g*d*c+g*a*m-o*v*m-h*a*u+o*d*u,P=g*d*l-h*v*l-g*a*f+o*v*f+h*a*p-o*d*p,R=t*y+i*E+s*x+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=y*N,e[1]=(v*f*r-d*p*r-v*s*m+i*p*m+d*s*u-i*f*u)*N,e[2]=(a*p*r-v*l*r+v*s*c-i*p*c-a*s*u+i*l*u)*N,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*m-i*l*m)*N,e[4]=E*N,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*u+t*f*u)*N,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*u-t*l*u)*N,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*N,e[8]=x*N,e[9]=(g*d*r-h*v*r-g*i*m+t*v*m+h*i*u-t*d*u)*N,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*u+t*a*u)*N,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*m-t*a*m)*N,e[12]=P*N,e[13]=(h*v*s-g*d*s+g*i*f-t*v*f-h*i*p+t*d*p)*N,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*p-t*a*p)*N,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*f+t*a*f)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,g=r*d,v=o*h,p=o*d,u=a*d,y=l*c,E=l*h,x=l*d,P=i.x,R=i.y,N=i.z;return s[0]=(1-(v+u))*P,s[1]=(m+x)*P,s[2]=(g-E)*P,s[3]=0,s[4]=(m-x)*R,s[5]=(1-(f+u))*R,s[6]=(p+y)*R,s[7]=0,s[8]=(g+E)*N,s[9]=(p-y)*N,s[10]=(1-(f+v))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ji.set(s[0],s[1],s[2]).length();const o=ji.set(s[4],s[5],s[6]).length(),a=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);const c=1/r,h=1/o,d=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=2e3,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===2e3)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===2001)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=2e3,l=!1){const c=this.elements,h=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),m=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===2e3)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===2001)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ji=new O,yn=new xt,Qp=new O(0,0,0),em=new O(1,1,1),ni=new O,wr=new O,en=new O,Fl=new xt,kl=new Kn;class Tn{constructor(e=0,t=0,i=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Ko{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tm=0;const Ol=new O,Zi=new Kn,Hn=new xt,Mr=new O,Cs=new O,nm=new O,im=new Kn,Bl=new O(1,0,0),zl=new O(0,1,0),Hl=new O(0,0,1),Vl={type:"added"},sm={type:"removed"},Ki={type:"childadded",child:null},Jo={type:"childremoved",child:null};class Ot extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new O,t=new Tn,i=new Kn,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ze}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Bl,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Hl,e)}translateOnAxis(e,t){return Ol.copy(e).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bl,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mr.copy(e):Mr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Cs,Mr,this.up):Hn.lookAt(Mr,Cs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vl),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sm),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vl),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new O(0,1,0),Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new O,Vn=new O,Qo=new O,Gn=new O,Ji=new O,Qi=new O,Gl=new O,ea=new O,ta=new O,na=new O,ia=new At,sa=new At,ra=new At;class En{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xn.subVectors(s,t),Vn.subVectors(i,t),Qo.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(Vn),l=xn.dot(Qo),c=Vn.dot(Vn),h=Vn.dot(Qo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(e,t),sa.fromBufferAttribute(e,i),ra.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ia,r.x),o.addScaledVector(sa,r.y),o.addScaledVector(ra,r.z),o}static isFrontFacing(e,t,i,s){return xn.subVectors(i,t),Vn.subVectors(e,t),xn.cross(Vn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),xn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return En.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ji.subVectors(s,i),Qi.subVectors(r,i),ea.subVectors(e,i);const l=Ji.dot(ea),c=Qi.dot(ea);if(l<=0&&c<=0)return t.copy(i);ta.subVectors(e,s);const h=Ji.dot(ta),d=Qi.dot(ta);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ji,o);na.subVectors(e,r);const m=Ji.dot(na),g=Qi.dot(na);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Qi,a);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Gl.subVectors(r,s),a=(d-h)/(d-h+(m-g)),t.copy(s).addScaledVector(Gl,a);const u=1/(p+v+f);return o=v*u,a=f*u,t.copy(i).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function oa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?n+(e-n)*6*t:t<.5?e:t<.6666666666666666?n+(e-n)*6*(.6666666666666666-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=Bo(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=oa(o,r,e+.3333333333333333),this.g=oa(o,r,e),this.b=oa(o,r,e-.3333333333333333)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=Wl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return ct.workingToColorSpace(Vt.copy(this),e),Math.round(rt(Vt.r*255,0,255))*65536+Math.round(rt(Vt.g*255,0,255))*256+Math.round(rt(Vt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Vt.copy(this),t);const i=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=ln){ct.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,s=Vt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Sr);const i=Ss(ii.h,Sr.h,t),s=Ss(ii.s,Sr.s,t),r=Ss(ii.l,Sr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new pt;pt.NAMES=Wl;let rm=0;class Rs extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class si extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new O,br=new ut;let om=0;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class $l extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xl extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tn extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let am=0;const cn=new xt,aa=new Ot,es=new O,nn=new $i,Ps=new $i,Dt=new O;class Cn extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ll(e)?Xl:$l)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(nn.min,Ps.min),nn.expandByPoint(Dt),Dt.addVectors(nn.max,Ps.max),nn.expandByPoint(Dt)):(nn.expandByPoint(Ps.min),nn.expandByPoint(Ps.max))}nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dt.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),Dt.add(es)),s=Math.max(s,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new O,l[F]=new O;const c=new O,h=new O,d=new O,f=new ut,m=new ut,g=new ut,v=new O,p=new O;function u(F,b,T){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,T),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,T),h.sub(c),d.sub(c),m.sub(f),g.sub(f);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(D),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(D),a[F].add(v),a[b].add(v),a[T].add(v),l[F].add(p),l[b].add(p),l[T].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,b=y.length;F<b;++F){const T=y[F],D=T.start,K=T.count;for(let V=D,W=D+K;V<W;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const E=new O,x=new O,P=new O,R=new O;function N(F){P.fromBufferAttribute(s,F),R.copy(P);const b=a[F];E.copy(b),E.sub(P.multiplyScalar(P.dot(b))).normalize(),x.crossVectors(R,b);const D=x.dot(l[F])<0?-1:1;o.setXYZW(F,E.x,E.y,E.z,D)}for(let F=0,b=y.length;F<b;++F){const T=y[F],D=T.start,K=T.count;for(let V=D,W=D+K;V<W;V+=3)N(e.getX(V+0)),N(e.getX(V+1)),N(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new An(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new xt,xi=new Zo,Tr=new yr,Yl=new O,Ar=new O,Cr=new O,Rr=new O,la=new O,Pr=new O,jl=new O,Lr=new O;class jt extends Ot{constructor(e=new Cn,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(la.fromBufferAttribute(d,e),o?Pr.addScaledVector(la,h):Pr.addScaledVector(la.sub(t),h))}t.add(Pr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere),Tr.applyMatrix4(r),xi.copy(e.ray).recast(e.near),!(Tr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Tr,Yl)===null||xi.origin.distanceToSquared(Yl)>(e.far-e.near)**2))&&(ql.copy(r).invert(),xi.copy(e.ray).applyMatrix4(ql),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],u=o[p.materialIndex],y=Math.max(p.start,m.start),E=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=y,P=E;x<P;x+=3){const R=a.getX(x),N=a.getX(x+1),F=a.getX(x+2);s=Ir(this,u,e,i,c,h,d,R,N,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const y=a.getX(p),E=a.getX(p+1),x=a.getX(p+2);s=Ir(this,o,e,i,c,h,d,y,E,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],u=o[p.materialIndex],y=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=y,P=E;x<P;x+=3){const R=x,N=x+1,F=x+2;s=Ir(this,u,e,i,c,h,d,R,N,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const y=p,E=p+1,x=p+2;s=Ir(this,o,e,i,c,h,d,y,E,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function lm(n,e,t,i,s,r,o,a){let l;if(e.side===1?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===0,a),l===null)return null;Lr.copy(a),Lr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Lr);return c<t.near||c>t.far?null:{distance:c,point:Lr.clone(),object:n}}function Ir(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ar),n.getVertexPosition(l,Cr),n.getVertexPosition(c,Rr);const h=lm(n,e,t,i,Ar,Cr,Rr,jl);if(h){const d=new O;En.getBarycoord(jl,Ar,Cr,Rr,d),s&&(h.uv=En.getInterpolatedAttribute(s,a,l,c,d,new ut)),r&&(h.uv1=En.getInterpolatedAttribute(r,a,l,c,d,new ut)),o&&(h.normal=En.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};En.getNormal(Ar,Cr,Rr,f.normal),h.face=f,h.barycoord=d}return h}class Ls extends Cn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(h,3)),this.setAttribute("uv",new tn(d,2));function g(v,p,u,y,E,x,P,R,N,F,b){const T=x/N,D=P/F,K=x/2,V=P/2,W=R/2,ie=N+1,j=F+1;let oe=0,z=0;const me=new O;for(let Ee=0;Ee<j;Ee++){const Ue=Ee*D-V;for(let Ve=0;Ve<ie;Ve++){const ht=Ve*T-K;me[v]=ht*y,me[p]=Ue*E,me[u]=W,c.push(me.x,me.y,me.z),me[v]=0,me[p]=0,me[u]=R>0?1:-1,h.push(me.x,me.y,me.z),d.push(Ve/N),d.push(1-Ee/F),oe+=1}}for(let Ee=0;Ee<F;Ee++)for(let Ue=0;Ue<N;Ue++){const Ve=f+Ue+ie*Ee,ht=f+Ue+ie*(Ee+1),Je=f+(Ue+1)+ie*(Ee+1),X=f+(Ue+1)+ie*Ee;l.push(Ve,ht,X),l.push(ht,Je,X),z+=6}a.addGroup(m,z,b),m+=z,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=ts(n[t]);for(const s in i)e[s]=i[s]}return e}function cm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const hm={clone:ts,merge:Xt};var dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Kl extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new O,Jl=new ut,Ql=new ut;class sn extends Kl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,Jl,Ql),t.subVectors(Ql,Jl)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class fm extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(ns,is,e,t);s.layers=this.layers,this.add(s);const r=new sn(ns,is,e,t);r.layers=this.layers,this.add(r);const o=new sn(ns,is,e,t);o.layers=this.layers,this.add(o);const a=new sn(ns,is,e,t);a.layers=this.layers,this.add(a);const l=new sn(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new sn(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ec extends kt{constructor(e=[],t=301,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pm extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ec(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ls(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const o=new jt(s,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new fm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class oi extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mm={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new oi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Dr extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ha=new O,gm=new O,vm=new Ze;class Ei{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ha.subVectors(i,t).cross(gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ha),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vm.getNormalMatrix(e),s=this.coplanarPoint(ha).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new yr,_m=new ut(.5,.5),Nr=new O;class da{constructor(e=new Ei,t=new Ei,i=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],m=r[7],g=r[8],v=r[9],p=r[10],u=r[11],y=r[12],E=r[13],x=r[14],P=r[15];if(s[0].setComponents(c-o,m-h,u-g,P-y).normalize(),s[1].setComponents(c+o,m+h,u+g,P+y).normalize(),s[2].setComponents(c+a,m+d,u+v,P+E).normalize(),s[3].setComponents(c-a,m-d,u-v,P-E).normalize(),i)s[4].setComponents(l,f,p,x).normalize(),s[5].setComponents(c-l,m-f,u-p,P-x).normalize();else if(s[4].setComponents(c-l,m-f,u-p,P-x).normalize(),t===2e3)s[5].setComponents(c+l,m+f,u+p,P+x).normalize();else if(t===2001)s[5].setComponents(l,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){wi.center.set(0,0,0);const t=_m.distanceTo(e.center);return wi.radius=.7071067811865476+t,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Nr.x=s.normal.x>0?e.max.x:e.min.x,Nr.y=s.normal.y>0?e.max.y:e.min.y,Nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ym extends Rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ur=new O,Fr=new O,tc=new xt,Is=new Zo,kr=new yr,ua=new O,nc=new O;class xm extends Ot{constructor(e=new Cn,t=new ym){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ur.fromBufferAttribute(t,s-1),Fr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ur.distanceTo(Fr);e.setAttribute("lineDistance",new tn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,e.ray.intersectsSphere(kr)===!1)return;tc.copy(s).invert(),Is.copy(e.ray).applyMatrix4(tc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=c){const u=h.getX(v),y=h.getX(v+1),E=Or(this,e,Is,l,u,y,v);E&&t.push(E)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(m),u=Or(this,e,Is,l,v,p,g-1);u&&t.push(u)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=c){const u=Or(this,e,Is,l,v,v+1,v);u&&t.push(u)}if(this.isLineLoop){const v=Or(this,e,Is,l,g-1,m,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Or(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Ur.fromBufferAttribute(a,s),Fr.fromBufferAttribute(a,r),t.distanceSqToSegment(Ur,Fr,ua,nc)>i)return;ua.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ua);if(!(c<e.near||c>e.far))return{distance:c,point:nc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const ic=new O,sc=new O;class Em extends xm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ic.fromBufferAttribute(t,s),sc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ic.distanceTo(sc);e.setAttribute("lineDistance",new tn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wm extends kt{constructor(e,t,i,s,r=1006,o=1006,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class rc extends kt{constructor(e,t,i=1014,s,r,o,a=1003,l=1003,c,h=1026,d=1){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ds extends Cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,m=[],g=[],v=[],p=[];for(let u=0;u<h;u++){const y=u*f-o;for(let E=0;E<c;E++){const x=E*d-r;g.push(x,-y,0),v.push(0,0,1),p.push(E/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<a;y++){const E=y+c*u,x=y+c*(u+1),P=y+1+c*(u+1),R=y+1+c*u;m.push(E,x,R),m.push(x,P,R)}this.setIndex(m),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}class ss extends Cn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new O,f=new O,m=[],g=[],v=[],p=[];for(let u=0;u<=i;u++){const y=[],E=u/i;let x=0;u===0&&o===0?x=.5/t:u===i&&l===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){const R=P/t;d.x=-e*Math.cos(s+R*r)*Math.sin(o+E*a),d.y=e*Math.cos(o+E*a),d.z=e*Math.sin(s+R*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(R+x,1-E),y.push(c++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<t;y++){const E=h[u][y+1],x=h[u][y],P=h[u+1][y],R=h[u+1][y+1];(u!==0||o>0)&&m.push(E,x,R),(u!==i-1||l<Math.PI)&&m.push(x,P,R)}this.setIndex(m),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mm extends Cn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,s=new O,r=new O;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],f=d.start,m=d.count;for(let g=f,v=f+m;g<v;g+=3)for(let p=0;p<3;p++){const u=a.getX(g+p),y=a.getX(g+(p+1)%3);s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,y),oc(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,d=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),oc(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new tn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function oc(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}class Sm extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bm extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ai={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Tm{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Am=new Tm;let fa=class{constructor(e){this.manager=e!==void 0?e:Am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fa.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class Cm extends Error{constructor(e,t){super(e),this.response=t}}class Rm extends fa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ai.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:i,onError:s});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=$n[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0;let v=0;const p=new ReadableStream({start(u){y();function y(){d.read().then(({done:E,value:x})=>{if(E)u.close();else{v+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let R=0,N=h.length;R<N;R++){const F=h[R];F.onProgress&&F.onProgress(P)}u.enqueue(x),y()}},E=>{u.error(E)})}}});return new Response(p)}else throw new Cm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ai.add(`file:${e}`,c);const h=$n[e];delete $n[e];for(let d=0,f=h.length;d<f;d++){const m=h[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=$n[e];if(h===void 0)throw this.manager.itemError(e),c;delete $n[e];for(let d=0,f=h.length;d<f;d++){const m=h[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const rs=new WeakMap;class Pm extends fa{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ai.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=rs.get(o);d===void 0&&(d=[],rs.set(o,d)),d.push({onLoad:t,onError:s})}return o}const a=bs("img");function l(){h(),t&&t(this);const d=rs.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onLoad&&m.onLoad(this)}rs.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),ai.remove(`image:${e}`);const f=rs.get(this)||[];for(let m=0;m<f.length;m++){const g=f[m];g.onError&&g.onError(d)}rs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ai.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Lm extends Kl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Im extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ac=new xt;class Dm{constructor(e,t,i=0,s=1/0){this.ray=new Zo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ac.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ac),this}intersectObject(e,t=!0,i=[]){return pa(e,this,i,t),i.sort(lc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)pa(e[s],this,i,t);return i.sort(lc),i}}function lc(n,e){return n.distance-e.distance}function pa(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)pa(r[o],e,t,!0)}}function cc(n,e,t,i){const s=Nm(i);switch(t){case 1021:return n*e;case 1028:return n*e/s.components*s.byteLength;case 1029:return n*e/s.components*s.byteLength;case 1030:return n*e*2/s.components*s.byteLength;case 1031:return n*e*2/s.components*s.byteLength;case 1022:return n*e*3/s.components*s.byteLength;case 1023:return n*e*4/s.components*s.byteLength;case 1033:return n*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nm(n){switch(n){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="179");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hc(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Um(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,km=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ym=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ag=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ag=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ng=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ug=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Og=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$g=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const et={alphahash_fragment:Fm,alphahash_pars_fragment:km,alphamap_fragment:Om,alphamap_pars_fragment:Bm,alphatest_fragment:zm,alphatest_pars_fragment:Hm,aomap_fragment:Vm,aomap_pars_fragment:Gm,batching_pars_vertex:Wm,batching_vertex:$m,begin_vertex:Xm,beginnormal_vertex:qm,bsdfs:Ym,iridescence_fragment:jm,bumpmap_pars_fragment:Zm,clipping_planes_fragment:Km,clipping_planes_pars_fragment:Jm,clipping_planes_pars_vertex:Qm,clipping_planes_vertex:eg,color_fragment:tg,color_pars_fragment:ng,color_pars_vertex:ig,color_vertex:sg,common:rg,cube_uv_reflection_fragment:og,defaultnormal_vertex:ag,displacementmap_pars_vertex:lg,displacementmap_vertex:cg,emissivemap_fragment:hg,emissivemap_pars_fragment:dg,colorspace_fragment:ug,colorspace_pars_fragment:fg,envmap_fragment:pg,envmap_common_pars_fragment:mg,envmap_pars_fragment:gg,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Cg,envmap_vertex:_g,fog_vertex:yg,fog_pars_vertex:xg,fog_fragment:Eg,fog_pars_fragment:wg,gradientmap_pars_fragment:Mg,lightmap_pars_fragment:Sg,lights_lambert_fragment:bg,lights_lambert_pars_fragment:Tg,lights_pars_begin:Ag,lights_toon_fragment:Rg,lights_toon_pars_fragment:Pg,lights_phong_fragment:Lg,lights_phong_pars_fragment:Ig,lights_physical_fragment:Dg,lights_physical_pars_fragment:Ng,lights_fragment_begin:Ug,lights_fragment_maps:Fg,lights_fragment_end:kg,logdepthbuf_fragment:Og,logdepthbuf_pars_fragment:Bg,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:Hg,map_fragment:Vg,map_pars_fragment:Gg,map_particle_fragment:Wg,map_particle_pars_fragment:$g,metalnessmap_fragment:Xg,metalnessmap_pars_fragment:qg,morphinstance_vertex:Yg,morphcolor_vertex:jg,morphnormal_vertex:Zg,morphtarget_pars_vertex:Kg,morphtarget_vertex:Jg,normal_fragment_begin:Qg,normal_fragment_maps:ev,normal_pars_fragment:tv,normal_pars_vertex:nv,normal_vertex:iv,normalmap_pars_fragment:sv,clearcoat_normal_fragment_begin:rv,clearcoat_normal_fragment_maps:ov,clearcoat_pars_fragment:av,iridescence_pars_fragment:lv,opaque_fragment:cv,packing:hv,premultiplied_alpha_fragment:dv,project_vertex:uv,dithering_fragment:fv,dithering_pars_fragment:pv,roughnessmap_fragment:mv,roughnessmap_pars_fragment:gv,shadowmap_pars_fragment:vv,shadowmap_pars_vertex:_v,shadowmap_vertex:yv,shadowmask_pars_fragment:xv,skinbase_vertex:Ev,skinning_pars_vertex:wv,skinning_vertex:Mv,skinnormal_vertex:Sv,specularmap_fragment:bv,specularmap_pars_fragment:Tv,tonemapping_fragment:Av,tonemapping_pars_fragment:Cv,transmission_fragment:Rv,transmission_pars_fragment:Pv,uv_pars_fragment:Lv,uv_pars_vertex:Iv,uv_vertex:Dv,worldpos_vertex:Nv,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Me={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Rn={basic:{uniforms:Xt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Xt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new pt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Xt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Xt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Xt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new pt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Xt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Xt([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Xt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Xt([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Xt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Xt([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Xt([Me.common,Me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Xt([Me.lights,Me.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Rn.physical={uniforms:Xt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Br={r:0,b:0,g:0},Mi=new Tn,Uv=new xt;function Fv(n,e,t,i,s,r,o){const a=new pt(0);let l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function v(E){let x=!1;const P=g(E);P===null?u(a,l):P&&P.isColor&&(u(P,1),x=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,x){const P=g(x);P&&(P.isCubeTexture||P.mapping===306)?(h===void 0&&(h=new jt(new Ls(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:ts(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Mi.copy(x.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(Mi)),h.material.toneMapped=ct.getTransfer(P.colorSpace)!==yt,(d!==P||f!==P.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=P,f=P.version,m=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new jt(new Ds(2,2),new Wn({name:"BackgroundMaterial",uniforms:ts(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ct.getTransfer(P.colorSpace)!==yt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=P,f=P.version,m=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,x){E.getRGB(Br,Zl(n)),i.buffers.color.setClear(Br.r,Br.g,Br.b,x,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(a,l)},render:v,addToRenderList:p,dispose:y}}function kv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(T,D,K,V,W){let ie=!1;const j=d(V,K,D);r!==j&&(r=j,c(r.object)),ie=m(T,V,K,W),ie&&g(T,V,K,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,x(T,D,K,V),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function h(T){return n.deleteVertexArray(T)}function d(T,D,K){const V=K.wireframe===!0;let W=i[T.id];W===void 0&&(W={},i[T.id]=W);let ie=W[D.id];ie===void 0&&(ie={},W[D.id]=ie);let j=ie[V];return j===void 0&&(j=f(l()),ie[V]=j),j}function f(T){const D=[],K=[],V=[];for(let W=0;W<t;W++)D[W]=0,K[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:K,attributeDivisors:V,object:T,attributes:{},index:null}}function m(T,D,K,V){const W=r.attributes,ie=D.attributes;let j=0;const oe=K.getAttributes();for(const z in oe)if(oe[z].location>=0){const Ee=W[z];let Ue=ie[z];if(Ue===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(Ue=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(Ue=T.instanceColor)),Ee===void 0||Ee.attribute!==Ue||Ue&&Ee.data!==Ue.data)return!0;j++}return r.attributesNum!==j||r.index!==V}function g(T,D,K,V){const W={},ie=D.attributes;let j=0;const oe=K.getAttributes();for(const z in oe)if(oe[z].location>=0){let Ee=ie[z];Ee===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(Ee=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(Ee=T.instanceColor));const Ue={};Ue.attribute=Ee,Ee&&Ee.data&&(Ue.data=Ee.data),W[z]=Ue,j++}r.attributes=W,r.attributesNum=j,r.index=V}function v(){const T=r.newAttributes;for(let D=0,K=T.length;D<K;D++)T[D]=0}function p(T){u(T,0)}function u(T,D){const K=r.newAttributes,V=r.enabledAttributes,W=r.attributeDivisors;K[T]=1,V[T]===0&&(n.enableVertexAttribArray(T),V[T]=1),W[T]!==D&&(n.vertexAttribDivisor(T,D),W[T]=D)}function y(){const T=r.newAttributes,D=r.enabledAttributes;for(let K=0,V=D.length;K<V;K++)D[K]!==T[K]&&(n.disableVertexAttribArray(K),D[K]=0)}function E(T,D,K,V,W,ie,j){j===!0?n.vertexAttribIPointer(T,D,K,W,ie):n.vertexAttribPointer(T,D,K,V,W,ie)}function x(T,D,K,V){v();const W=V.attributes,ie=K.getAttributes(),j=D.defaultAttributeValues;for(const oe in ie){const z=ie[oe];if(z.location>=0){let me=W[oe];if(me===void 0&&(oe==="instanceMatrix"&&T.instanceMatrix&&(me=T.instanceMatrix),oe==="instanceColor"&&T.instanceColor&&(me=T.instanceColor)),me!==void 0){const Ee=me.normalized,Ue=me.itemSize,Ve=e.get(me);if(Ve===void 0)continue;const ht=Ve.buffer,Je=Ve.type,X=Ve.bytesPerElement,le=Je===n.INT||Je===n.UNSIGNED_INT||me.gpuType===1013;if(me.isInterleavedBufferAttribute){const de=me.data,Be=de.stride,Te=me.offset;if(de.isInstancedInterleavedBuffer){for(let He=0;He<z.locationSize;He++)u(z.location+He,de.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let He=0;He<z.locationSize;He++)p(z.location+He);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let He=0;He<z.locationSize;He++)E(z.location+He,Ue/z.locationSize,Je,Ee,Be*X,(Te+Ue/z.locationSize*He)*X,le)}else{if(me.isInstancedBufferAttribute){for(let de=0;de<z.locationSize;de++)u(z.location+de,me.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let de=0;de<z.locationSize;de++)p(z.location+de);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let de=0;de<z.locationSize;de++)E(z.location+de,Ue/z.locationSize,Je,Ee,Ue*X,Ue/z.locationSize*de*X,le)}}else if(j!==void 0){const Ee=j[oe];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(z.location,Ee);break;case 3:n.vertexAttrib3fv(z.location,Ee);break;case 4:n.vertexAttrib4fv(z.location,Ee);break;default:n.vertexAttrib1fv(z.location,Ee)}}}}y()}function P(){F();for(const T in i){const D=i[T];for(const K in D){const V=D[K];for(const W in V)h(V[W].object),delete V[W];delete D[K]}delete i[T]}}function R(T){if(i[T.id]===void 0)return;const D=i[T.id];for(const K in D){const V=D[K];for(const W in V)h(V[W].object),delete V[W];delete D[K]}delete i[T.id]}function N(T){for(const D in i){const K=i[D];if(K[T.id]===void 0)continue;const V=K[T.id];for(const W in V)h(V[W].object),delete V[W];delete K[T.id]}}function F(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function Ov(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];t.update(m,i,1)}function l(c,h,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==1023&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const F=N===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==1009&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==1015&&!F)}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:P,maxSamples:R}}function zv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ei,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:i,E=y*4;let x=u.clippingState||null;l.value=x,x=h(g,f,E,m);for(let P=0;P!==E;++P)x[P]=t[P];u.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const u=m+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let E=0,x=m;E!==v;++E,x+=4)o.copy(d[E]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Hv(n){let e=new WeakMap;function t(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pm(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const os=4,dc=[.125,.215,.35,.446,.526,.582],Si=20,ma=new Lm,uc=new pt;let ga=null,va=0,_a=0,ya=!1;const bi=(1+Math.sqrt(5))/2,as=1/bi,fc=[new O(-bi,as,0),new O(bi,as,0),new O(-as,0,bi),new O(as,0,bi),new O(0,bi,-as),new O(0,bi,as),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Vv=new O;class pc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Vv}=r;ga=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ga,va,_a),this._renderer.xr.enabled=ya,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:vi,depthBuffer:!1},s=mc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gv(r)),this._blurMaterial=Wv(r,e,t)}return s}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,i,s,r){const l=new sn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(uc),d.toneMapping=0,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new si({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),p=new jt(new Ls,v);let u=!1;const y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,u=!0):(v.color.copy(uc),u=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const P=this._cubeSize;zr(s,x*P,E>2?P:0,P,P),d.setRenderTarget(s),u&&d.render(p,l),d.render(e,l)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===301||e.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;zr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ma)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fc[(s-r-1)%fc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new jt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Si-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Si;p>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);const u=[];let y=0;for(let N=0;N<Si;++N){const F=N/v,b=Math.exp(-F*F/2);u.push(b),N===0?y+=b:N<p&&(y+=2*b)}for(let N=0;N<u.length;N++)u[N]=u[N]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const x=this._sizeLods[s],P=3*x*(s>E-os?s-E+os:0),R=4*(this._cubeSize-x);zr(t,P,R,3*x,2*x),l.setRenderTarget(t),l.render(d,ma)}}function Gv(n){const e=[],t=[],i=[];let s=n;const r=n-os+1+dc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-os?l=dc[o-n+os-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,v=3,p=2,u=1,y=new Float32Array(v*g*m),E=new Float32Array(p*g*m),x=new Float32Array(u*g*m);for(let R=0;R<m;R++){const N=R%3*2/3-1,F=R>2?0:-1,b=[N,F,0,N+2/3,F,0,N+2/3,F+1,0,N,F,0,N+2/3,F+1,0,N,F+1,0];y.set(b,v*g*R),E.set(f,p*g*R);const T=[R,R,R,R,R,R];x.set(T,u*g*R)}const P=new Cn;P.setAttribute("position",new An(y,v)),P.setAttribute("uv",new An(E,p)),P.setAttribute("faceIndex",new An(x,u)),e.push(P),s>os&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mc(n,e,t){const i=new Jn(n,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Wv(n,e,t){const i=new Float32Array(Si),s=new O(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function gc(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vc(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $v(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new pc(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new pc(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Xv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Vi("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function qv(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(d){const f=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let E=0,x=y.length;E<x;E+=3){const P=y[E+0],R=y[E+1],N=y[E+2];f.push(P,R,R,N,N,P)}}else if(g!==void 0){const y=g.array;v=g.version;for(let E=0,x=y.length/3-1;E<x;E+=3){const P=E+0,R=E+1,N=E+2;f.push(P,R,R,N,N,P)}}else return;const p=new(Ll(f)?Xl:$l)(f,1);p.version=v;const u=r.get(d);u&&e.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Yv(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*o),t.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,f*o,g),t.update(m,i,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];t.update(p,i,1)}function d(f,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/o,m[u],v[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,v,0,g);let u=0;for(let y=0;y<g;y++)u+=m[y]*v[y];t.update(u,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function jv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Zv(n,e,t){const i=new WeakMap,s=new At;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let b=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;m===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let x=a.attributes.position.count*E,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const R=new Float32Array(x*P*4*d),N=new Ul(R,x,P,d);N.type=1015,N.needsUpdate=!0;const F=E*4;for(let T=0;T<d;T++){const D=p[T],K=u[T],V=y[T],W=x*P*4*T;for(let ie=0;ie<D.count;ie++){const j=ie*F;m===!0&&(s.fromBufferAttribute(D,ie),R[W+j+0]=s.x,R[W+j+1]=s.y,R[W+j+2]=s.z,R[W+j+3]=0),g===!0&&(s.fromBufferAttribute(K,ie),R[W+j+4]=s.x,R[W+j+5]=s.y,R[W+j+6]=s.z,R[W+j+7]=0),v===!0&&(s.fromBufferAttribute(V,ie),R[W+j+8]=s.x,R[W+j+9]=s.y,R[W+j+10]=s.z,R[W+j+11]=V.itemSize===4?s.w:1)}}f={count:d,texture:N,size:new ut(x,P)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Kv(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const _c=new kt,yc=new rc(1,1),xc=new Ul,Ec=new Kp,wc=new ec,Mc=[],Sc=[],bc=new Float32Array(16),Tc=new Float32Array(9),Ac=new Float32Array(4);function ls(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Mc[s];if(r===void 0&&(r=new Float32Array(s),Mc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hr(n,e){let t=Sc[e];t===void 0&&(t=new Int32Array(e),Sc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Jv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function e_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function t_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function n_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Ac.set(i),n.uniformMatrix2fv(this.addr,!1,Ac),Lt(t,i)}}function i_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Tc.set(i),n.uniformMatrix3fv(this.addr,!1,Tc),Lt(t,i)}}function s_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;bc.set(i),n.uniformMatrix4fv(this.addr,!1,bc),Lt(t,i)}}function r_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function o_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function a_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function l_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function c_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function f_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(yc.compareFunction=515,r=yc):r=_c,t.setTexture2D(e||r,s)}function p_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ec,s)}function m_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||wc,s)}function g_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xc,s)}function v_(n){switch(n){case 5126:return Jv;case 35664:return Qv;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return d_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function __(n,e){n.uniform1fv(this.addr,e)}function y_(n,e){const t=ls(e,this.size,2);n.uniform2fv(this.addr,t)}function x_(n,e){const t=ls(e,this.size,3);n.uniform3fv(this.addr,t)}function E_(n,e){const t=ls(e,this.size,4);n.uniform4fv(this.addr,t)}function w_(n,e){const t=ls(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function M_(n,e){const t=ls(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function S_(n,e){const t=ls(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function b_(n,e){n.uniform1iv(this.addr,e)}function T_(n,e){n.uniform2iv(this.addr,e)}function A_(n,e){n.uniform3iv(this.addr,e)}function C_(n,e){n.uniform4iv(this.addr,e)}function R_(n,e){n.uniform1uiv(this.addr,e)}function P_(n,e){n.uniform2uiv(this.addr,e)}function L_(n,e){n.uniform3uiv(this.addr,e)}function I_(n,e){n.uniform4uiv(this.addr,e)}function D_(n,e,t){const i=this.cache,s=e.length,r=Hr(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||_c,r[o])}function N_(n,e,t){const i=this.cache,s=e.length,r=Hr(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ec,r[o])}function U_(n,e,t){const i=this.cache,s=e.length,r=Hr(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||wc,r[o])}function F_(n,e,t){const i=this.cache,s=e.length,r=Hr(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xc,r[o])}function k_(n){switch(n){case 5126:return __;case 35664:return y_;case 35665:return x_;case 35666:return E_;case 35674:return w_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return b_;case 35667:case 35671:return T_;case 35668:case 35672:return A_;case 35669:case 35673:return C_;case 5125:return R_;case 36294:return P_;case 36295:return L_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return F_}}class O_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=v_(t.type)}}class B_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k_(t.type)}}class z_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function Cc(n,e){n.seq.push(e),n.map[e.id]=e}function H_(n,e,t){const i=n.name,s=i.length;for(Ea.lastIndex=0;;){const r=Ea.exec(i),o=Ea.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cc(t,c===void 0?new O_(a,n,e):new B_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new z_(a),Cc(t,d)),t=d}}}class Vr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);H_(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Rc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const V_=37297;let G_=0;function W_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Pc=new Ze;function $_(n){ct._getMatrix(Pc,ct.workingColorSpace,n);const e=`mat3( ${Pc.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case mr:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Lc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+W_(n.getShaderSource(e),a)}else return r}function X_(n,e){const t=$_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function q_(n,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gr=new O;function Y_(){ct.getLuminanceCoefficients(Gr);const n=Gr.x.toFixed(4),e=Gr.y.toFixed(4),t=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Z_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function K_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ns(n){return n!==""}function Ic(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(n){return n.replace(J_,e0)}const Q_=new Map;function e0(n,e){let t=et[e];if(t===void 0){const i=Q_.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wa(t)}const t0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(n){return n.replace(t0,n0)}function n0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function i0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function s0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function o0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function a0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function l0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=i0(t),c=s0(t),h=r0(t),d=o0(t),f=a0(t),m=j_(t),g=Z_(r),v=s.createProgram();let p,u,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),u.length>0&&(u+=`
`)):(p=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),u=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?et.tonemapping_pars_fragment:"",t.toneMapping!==0?q_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,X_("linearToOutputTexel",t.outputColorSpace),Y_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=wa(o),o=Ic(o,t),o=Dc(o,t),a=wa(a),a=Ic(a,t),a=Dc(a,t),o=Nc(o),a=Nc(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=y+p+o,x=y+u+a,P=Rc(s,s.VERTEX_SHADER,E),R=Rc(s,s.FRAGMENT_SHADER,x);s.attachShader(v,P),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function N(D){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(v)||"",V=s.getShaderInfoLog(P)||"",W=s.getShaderInfoLog(R)||"",ie=K.trim(),j=V.trim(),oe=W.trim();let z=!0,me=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,R);else{const Ee=Lc(s,P,"vertex"),Ue=Lc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+ie+`
`+Ee+`
`+Ue)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(j===""||oe==="")&&(me=!1);me&&(D.diagnostics={runnable:z,programLog:ie,vertexShader:{log:j,prefix:p},fragmentShader:{log:oe,prefix:u}})}s.deleteShader(P),s.deleteShader(R),F=new Vr(s,v),b=K_(s,v)}let F;this.getUniforms=function(){return F===void 0&&N(this),F};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,V_)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=R,this}let c0=0;class h0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new d0(e),t.set(e,i)),i}}class d0{constructor(e){this.id=c0++,this.code=e,this.usedTimes=0}}function u0(n,e,t,i,s,r,o){const a=new Ko,l=new h0,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,T,D,K,V){const W=K.fog,ie=V.geometry,j=b.isMeshStandardMaterial?K.environment:null,oe=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),z=oe&&oe.mapping===306?oe.image.height:null,me=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const Ee=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ue=Ee!==void 0?Ee.length:0;let Ve=0;ie.morphAttributes.position!==void 0&&(Ve=1),ie.morphAttributes.normal!==void 0&&(Ve=2),ie.morphAttributes.color!==void 0&&(Ve=3);let ht,Je,X,le;if(me){const dt=Rn[me];ht=dt.vertexShader,Je=dt.fragmentShader}else ht=b.vertexShader,Je=b.fragmentShader,l.update(b),X=l.getVertexShaderID(b),le=l.getFragmentShaderID(b);const de=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),Te=V.isInstancedMesh===!0,He=V.isBatchedMesh===!0,gt=!!b.map,J=!!b.matcap,A=!!oe,Ae=!!b.aoMap,ve=!!b.lightMap,G=!!b.bumpMap,Z=!!b.normalMap,Ie=!!b.displacementMap,ne=!!b.emissiveMap,De=!!b.metalnessMap,Ge=!!b.roughnessMap,Xe=b.anisotropy>0,S=b.clearcoat>0,_=b.dispersion>0,k=b.iridescence>0,H=b.sheen>0,Q=b.transmission>0,$=Xe&&!!b.anisotropyMap,se=S&&!!b.clearcoatMap,ae=S&&!!b.clearcoatNormalMap,ue=S&&!!b.clearcoatRoughnessMap,pe=k&&!!b.iridescenceMap,q=k&&!!b.iridescenceThicknessMap,_e=H&&!!b.sheenColorMap,Fe=H&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,ye=!!b.specularColorMap,ze=!!b.specularIntensityMap,U=Q&&!!b.transmissionMap,ce=Q&&!!b.thicknessMap,ge=!!b.gradientMap,we=!!b.alphaMap,te=b.alphaTest>0,ee=!!b.alphaHash,ke=!!b.extensions;let qe=0;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(qe=n.toneMapping);const Et={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:ht,fragmentShader:Je,defines:b.defines,customVertexShaderID:X,customFragmentShaderID:le,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:He,batchingColor:He&&V._colorsTexture!==null,instancing:Te,instancingColor:Te&&V.instanceColor!==null,instancingMorph:Te&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:vi,alphaToCoverage:!!b.alphaToCoverage,map:gt,matcap:J,envMap:A,envMapMode:A&&oe.mapping,envMapCubeUVHeight:z,aoMap:Ae,lightMap:ve,bumpMap:G,normalMap:Z,displacementMap:f&&Ie,emissiveMap:ne,normalMapObjectSpace:Z&&b.normalMapType===1,normalMapTangentSpace:Z&&b.normalMapType===0,metalnessMap:De,roughnessMap:Ge,anisotropy:Xe,anisotropyMap:$,clearcoat:S,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,dispersion:_,iridescence:k,iridescenceMap:pe,iridescenceThicknessMap:q,sheen:H,sheenColorMap:_e,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:ye,specularIntensityMap:ze,transmission:Q,transmissionMap:U,thicknessMap:ce,gradientMap:ge,opaque:b.transparent===!1&&b.blending===1&&b.alphaToCoverage===!1,alphaMap:we,alphaTest:te,alphaHash:ee,combine:b.combine,mapUv:gt&&v(b.map.channel),aoMapUv:Ae&&v(b.aoMap.channel),lightMapUv:ve&&v(b.lightMap.channel),bumpMapUv:G&&v(b.bumpMap.channel),normalMapUv:Z&&v(b.normalMap.channel),displacementMapUv:Ie&&v(b.displacementMap.channel),emissiveMapUv:ne&&v(b.emissiveMap.channel),metalnessMapUv:De&&v(b.metalnessMap.channel),roughnessMapUv:Ge&&v(b.roughnessMap.channel),anisotropyMapUv:$&&v(b.anisotropyMap.channel),clearcoatMapUv:se&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:q&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(b.sheenRoughnessMap.channel),specularMapUv:Pe&&v(b.specularMap.channel),specularColorMapUv:ye&&v(b.specularColorMap.channel),specularIntensityMapUv:ze&&v(b.specularIntensityMap.channel),transmissionMapUv:U&&v(b.transmissionMap.channel),thicknessMapUv:ce&&v(b.thicknessMap.channel),alphaMapUv:we&&v(b.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Z||Xe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ie.attributes.uv&&(gt||we),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Be,skinning:V.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Ve,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:gt&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===yt,decodeVideoTextureEmissive:ne&&b.emissiveMap.isVideoTexture===!0&&ct.getTransfer(b.emissiveMap.colorSpace)===yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===2,flipSided:b.side===1,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&b.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function u(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)T.push(D),T.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(y(T,b),E(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function y(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function E(b,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const T=g[b.type];let D;if(T){const K=Rn[T];D=hm.clone(K.uniforms)}else D=b.uniforms;return D}function P(b,T){let D;for(let K=0,V=h.length;K<V;K++){const W=h[K];if(W.cacheKey===T){D=W,++D.usedTimes;break}}return D===void 0&&(D=new l0(n,T,b,r),h.push(D)),D}function R(b){if(--b.usedTimes===0){const T=h.indexOf(b);h[T]=h[h.length-1],h.pop(),b.destroy()}}function N(b){l.remove(b)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:x,acquireProgram:P,releaseProgram:R,releaseShaderCache:N,programs:h,dispose:F}}function f0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function p0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,m,g,v,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=p),e++,u}function a(d,f,m,g,v,p){const u=o(d,f,m,g,v,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(d,f,m,g,v,p){const u=o(d,f,m,g,v,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||p0),i.length>1&&i.sort(f||Fc),s.length>1&&s.sort(f||Fc)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function m0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new kc,n.set(i,[o])):s>=r.length?(o=new kc,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function g0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new pt};break;case"SpotLight":t={position:new O,direction:new O,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function v0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let _0=0;function y0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function x0(n){const e=new g0,t=v0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new xt,o=new xt;function a(c){let h=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,g=0,v=0,p=0,u=0,y=0,E=0,x=0,P=0,R=0,N=0;c.sort(y0);for(let b=0,T=c.length;b<T;b++){const D=c[b],K=D.color,V=D.intensity,W=D.distance,ie=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=K.r*V,d+=K.g*V,f+=K.b*V;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],V);N++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const oe=D.shadow,z=t.get(D);z.shadowIntensity=oe.intensity,z.shadowBias=oe.bias,z.shadowNormalBias=oe.normalBias,z.shadowRadius=oe.radius,z.shadowMapSize=oe.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=D.shadow.matrix,y++}i.directional[m]=j,m++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(K).multiplyScalar(V),j.distance=W,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[v]=j;const oe=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,oe.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[v]=oe.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=oe.intensity,z.shadowBias=oe.bias,z.shadowNormalBias=oe.normalBias,z.shadowRadius=oe.radius,z.shadowMapSize=oe.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=ie,x++}v++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(K).multiplyScalar(V),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=j,p++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const oe=D.shadow,z=t.get(D);z.shadowIntensity=oe.intensity,z.shadowBias=oe.bias,z.shadowNormalBias=oe.normalBias,z.shadowRadius=oe.radius,z.shadowMapSize=oe.mapSize,z.shadowCameraNear=oe.camera.near,z.shadowCameraFar=oe.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=j,g++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(V),j.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[u]=j,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==p||F.hemiLength!==u||F.numDirectionalShadows!==y||F.numPointShadows!==E||F.numSpotShadows!==x||F.numSpotMaps!==P||F.numLightProbes!==N)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=N,F.directionalLength=m,F.pointLength=g,F.spotLength=v,F.rectAreaLength=p,F.hemiLength=u,F.numDirectionalShadows=y,F.numPointShadows=E,F.numSpotShadows=x,F.numSpotMaps=P,F.numLightProbes=N,i.version=_0++)}function l(c,h){let d=0,f=0,m=0,g=0,v=0;const p=h.matrixWorldInverse;for(let u=0,y=c.length;u<y;u++){const E=c[u];if(E.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(E.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Oc(n){const e=new x0(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function E0(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Oc(n),e.set(s,[a])):r>=o.length?(a=new Oc(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const w0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S0(n,e,t){let i=new da;const s=new ut,r=new ut,o=new At,a=new Sm({depthPacking:3201}),l=new bm,c={},h=t.maxTextureSize,d={0:1,1:0,2:2},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:w0,fragmentShader:M0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Cn;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new jt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let u=this.type;this.render=function(R,N,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const b=n.getRenderTarget(),T=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),K=n.state;K.setBlending(0),K.buffers.depth.getReversed()?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const V=u!==3&&this.type===3,W=u===3&&this.type!==3;for(let ie=0,j=R.length;ie<j;ie++){const oe=R[ie],z=oe.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const me=z.getFrameExtents();if(s.multiply(me),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,z.mapSize.y=r.y)),z.map===null||V===!0||W===!0){const Ue=this.type!==3?{minFilter:1003,magFilter:1003}:{};z.map!==null&&z.map.dispose(),z.map=new Jn(s.x,s.y,Ue),z.map.texture.name=oe.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Ee=z.getViewportCount();for(let Ue=0;Ue<Ee;Ue++){const Ve=z.getViewport(Ue);o.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),K.viewport(o),z.updateMatrices(oe,Ue),i=z.getFrustum(),x(N,F,z.camera,oe,this.type)}z.isPointLightShadow!==!0&&this.type===3&&y(z,F),z.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(b,T,D)};function y(R,N){const F=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Jn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(N,null,F,f,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(N,null,F,m,v,null)}function E(R,N,F,b){let T=null;const D=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)T=D;else if(T=F.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const K=T.uuid,V=N.uuid;let W=c[K];W===void 0&&(W={},c[K]=W);let ie=W[V];ie===void 0&&(ie=T.clone(),W[V]=ie,N.addEventListener("dispose",P)),T=ie}if(T.visible=N.visible,T.wireframe=N.wireframe,b===3?T.side=N.shadowSide!==null?N.shadowSide:N.side:T.side=N.shadowSide!==null?N.shadowSide:d[N.side],T.alphaMap=N.alphaMap,T.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,T.map=N.map,T.clipShadows=N.clipShadows,T.clippingPlanes=N.clippingPlanes,T.clipIntersection=N.clipIntersection,T.displacementMap=N.displacementMap,T.displacementScale=N.displacementScale,T.displacementBias=N.displacementBias,T.wireframeLinewidth=N.wireframeLinewidth,T.linewidth=N.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const K=n.properties.get(T);K.light=F}return T}function x(R,N,F,b,T){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===3)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const V=e.update(R),W=R.material;if(Array.isArray(W)){const ie=V.groups;for(let j=0,oe=ie.length;j<oe;j++){const z=ie[j],me=W[z.materialIndex];if(me&&me.visible){const Ee=E(R,me,b,T);R.onBeforeShadow(n,R,N,F,V,Ee,z),n.renderBufferDirect(F,null,V,Ee,R,z),R.onAfterShadow(n,R,N,F,V,Ee,z)}}}else if(W.visible){const ie=E(R,W,b,T);R.onBeforeShadow(n,R,N,F,V,ie,null),n.renderBufferDirect(F,null,V,ie,R,null),R.onAfterShadow(n,R,N,F,V,ie,null)}}const K=R.children;for(let V=0,W=K.length;V<W;V++)x(K[V],N,F,b,T)}function P(R){R.target.removeEventListener("dispose",P);for(const F in c){const b=c[F],T=R.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const b0={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function T0(n,e){function t(){let U=!1;const ce=new At;let ge=null;const we=new At(0,0,0,0);return{setMask:function(te){ge!==te&&!U&&(n.colorMask(te,te,te,te),ge=te)},setLocked:function(te){U=te},setClear:function(te,ee,ke,qe,Et){Et===!0&&(te*=qe,ee*=qe,ke*=qe),ce.set(te,ee,ke,qe),we.equals(ce)===!1&&(n.clearColor(te,ee,ke,qe),we.copy(ce))},reset:function(){U=!1,ge=null,we.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,ge=null,we=null,te=null;return{setReversed:function(ee){if(ce!==ee){const ke=e.get("EXT_clip_control");ee?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ce=ee;const qe=te;te=null,this.setClear(qe)}},getReversed:function(){return ce},setTest:function(ee){ee?de(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(ee){ge!==ee&&!U&&(n.depthMask(ee),ge=ee)},setFunc:function(ee){if(ce&&(ee=b0[ee]),we!==ee){switch(ee){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=ee}},setLocked:function(ee){U=ee},setClear:function(ee){te!==ee&&(ce&&(ee=1-ee),n.clearDepth(ee),te=ee)},reset:function(){U=!1,ge=null,we=null,te=null,ce=!1}}}function s(){let U=!1,ce=null,ge=null,we=null,te=null,ee=null,ke=null,qe=null,Et=null;return{setTest:function(dt){U||(dt?de(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(dt){ce!==dt&&!U&&(n.stencilMask(dt),ce=dt)},setFunc:function(dt,Wt,Qt){(ge!==dt||we!==Wt||te!==Qt)&&(n.stencilFunc(dt,Wt,Qt),ge=dt,we=Wt,te=Qt)},setOp:function(dt,Wt,Qt){(ee!==dt||ke!==Wt||qe!==Qt)&&(n.stencilOp(dt,Wt,Qt),ee=dt,ke=Wt,qe=Qt)},setLocked:function(dt){U=dt},setClear:function(dt){Et!==dt&&(n.clearStencil(dt),Et=dt)},reset:function(){U=!1,ce=null,ge=null,we=null,te=null,ee=null,ke=null,qe=null,Et=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,v=!1,p=null,u=null,y=null,E=null,x=null,P=null,R=null,N=new pt(0,0,0),F=0,b=!1,T=null,D=null,K=null,V=null,W=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,oe=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(z)[1]),j=oe>=1):z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),j=oe>=2);let me=null,Ee={};const Ue=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),ht=new At().fromArray(Ue),Je=new At().fromArray(Ve);function X(U,ce,ge,we){const te=new Uint8Array(4),ee=n.createTexture();n.bindTexture(U,ee),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<ge;ke++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(ce+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return ee}const le={};le[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(n.DEPTH_TEST),o.setFunc(3),G(!1),Z(1),de(n.CULL_FACE),Ae(0);function de(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function Be(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Te(U,ce){return d[U]!==ce?(n.bindFramebuffer(U,ce),d[U]=ce,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ce),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function He(U,ce){let ge=m,we=!1;if(U){ge=f.get(ce),ge===void 0&&(ge=[],f.set(ce,ge));const te=U.textures;if(ge.length!==te.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,ke=te.length;ee<ke;ee++)ge[ee]=n.COLOR_ATTACHMENT0+ee;ge.length=te.length,we=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,we=!0);we&&n.drawBuffers(ge)}function gt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const J={100:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};J[103]=n.MIN,J[104]=n.MAX;const A={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,204:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,205:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function Ae(U,ce,ge,we,te,ee,ke,qe,Et,dt){if(U===0){v===!0&&(Be(n.BLEND),v=!1);return}if(v===!1&&(de(n.BLEND),v=!0),U!==5){if(U!==p||dt!==b){if((u!==100||x!==100)&&(n.blendEquation(n.FUNC_ADD),u=100,x=100),dt)switch(U){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,E=null,P=null,R=null,N.set(0,0,0),F=0,p=U,b=dt}return}te=te||ce,ee=ee||ge,ke=ke||we,(ce!==u||te!==x)&&(n.blendEquationSeparate(J[ce],J[te]),u=ce,x=te),(ge!==y||we!==E||ee!==P||ke!==R)&&(n.blendFuncSeparate(A[ge],A[we],A[ee],A[ke]),y=ge,E=we,P=ee,R=ke),(qe.equals(N)===!1||Et!==F)&&(n.blendColor(qe.r,qe.g,qe.b,Et),N.copy(qe),F=Et),p=U,b=!1}function ve(U,ce){U.side===2?Be(n.CULL_FACE):de(n.CULL_FACE);let ge=U.side===1;ce&&(ge=!ge),G(ge),U.blending===1&&U.transparent===!1?Ae(0):Ae(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const we=U.stencilWrite;a.setTest(we),we&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(U){T!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),T=U)}function Z(U){U!==0?(de(n.CULL_FACE),U!==D&&(U===1?n.cullFace(n.BACK):U===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),D=U}function Ie(U){U!==K&&(j&&n.lineWidth(U),K=U)}function ne(U,ce,ge){U?(de(n.POLYGON_OFFSET_FILL),(V!==ce||W!==ge)&&(n.polygonOffset(ce,ge),V=ce,W=ge)):Be(n.POLYGON_OFFSET_FILL)}function De(U){U?de(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function Ge(U){U===void 0&&(U=n.TEXTURE0+ie-1),me!==U&&(n.activeTexture(U),me=U)}function Xe(U,ce,ge){ge===void 0&&(me===null?ge=n.TEXTURE0+ie-1:ge=me);let we=Ee[ge];we===void 0&&(we={type:void 0,texture:void 0},Ee[ge]=we),(we.type!==U||we.texture!==ce)&&(me!==ge&&(n.activeTexture(ge),me=ge),n.bindTexture(U,ce||le[U]),we.type=U,we.texture=ce)}function S(){const U=Ee[me];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(U){ht.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ht.copy(U))}function Fe(U){Je.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Je.copy(U))}function Pe(U,ce){let ge=c.get(ce);ge===void 0&&(ge=new WeakMap,c.set(ce,ge));let we=ge.get(U);we===void 0&&(we=n.getUniformBlockIndex(ce,U.name),ge.set(U,we))}function ye(U,ce){const we=c.get(ce).get(U);l.get(ce)!==we&&(n.uniformBlockBinding(ce,we,U.__bindingPointIndex),l.set(ce,we))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},me=null,Ee={},d={},f=new WeakMap,m=[],g=null,v=!1,p=null,u=null,y=null,E=null,x=null,P=null,R=null,N=new pt(0,0,0),F=0,b=!1,T=null,D=null,K=null,V=null,W=null,ht.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Be,bindFramebuffer:Te,drawBuffers:He,useProgram:gt,setBlending:Ae,setMaterial:ve,setFlipSided:G,setCullFace:Z,setLineWidth:Ie,setPolygonOffset:ne,setScissorTest:De,activeTexture:Ge,bindTexture:Xe,unbindTexture:S,compressedTexImage2D:_,compressedTexImage3D:k,texImage2D:pe,texImage3D:q,updateUBOMapping:Pe,uniformBlockBinding:ye,texStorage2D:ae,texStorage3D:ue,texSubImage2D:H,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:se,scissor:_e,viewport:Fe,reset:ze}}function A0(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return m?new OffscreenCanvas(S,_):bs("canvas")}function v(S,_,k){let H=1;const Q=Xe(S);if((Q.width>k||Q.height>k)&&(H=k/Math.max(Q.width,Q.height)),H<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const $=Math.floor(H*Q.width),se=Math.floor(H*Q.height);d===void 0&&(d=g($,se));const ae=_?g($,se):d;return ae.width=$,ae.height=se,ae.getContext("2d").drawImage(S,0,0,$,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+se+")."),ae}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function p(S){return S.generateMipmaps}function u(S){n.generateMipmap(S)}function y(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(S,_,k,H,Q=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let $=_;if(_===n.RED&&(k===n.FLOAT&&($=n.R32F),k===n.HALF_FLOAT&&($=n.R16F),k===n.UNSIGNED_BYTE&&($=n.R8)),_===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.R8UI),k===n.UNSIGNED_SHORT&&($=n.R16UI),k===n.UNSIGNED_INT&&($=n.R32UI),k===n.BYTE&&($=n.R8I),k===n.SHORT&&($=n.R16I),k===n.INT&&($=n.R32I)),_===n.RG&&(k===n.FLOAT&&($=n.RG32F),k===n.HALF_FLOAT&&($=n.RG16F),k===n.UNSIGNED_BYTE&&($=n.RG8)),_===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RG8UI),k===n.UNSIGNED_SHORT&&($=n.RG16UI),k===n.UNSIGNED_INT&&($=n.RG32UI),k===n.BYTE&&($=n.RG8I),k===n.SHORT&&($=n.RG16I),k===n.INT&&($=n.RG32I)),_===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGB8UI),k===n.UNSIGNED_SHORT&&($=n.RGB16UI),k===n.UNSIGNED_INT&&($=n.RGB32UI),k===n.BYTE&&($=n.RGB8I),k===n.SHORT&&($=n.RGB16I),k===n.INT&&($=n.RGB32I)),_===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGBA8UI),k===n.UNSIGNED_SHORT&&($=n.RGBA16UI),k===n.UNSIGNED_INT&&($=n.RGBA32UI),k===n.BYTE&&($=n.RGBA8I),k===n.SHORT&&($=n.RGBA16I),k===n.INT&&($=n.RGBA32I)),_===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),_===n.RGBA){const se=Q?mr:ct.getTransfer(H);k===n.FLOAT&&($=n.RGBA32F),k===n.HALF_FLOAT&&($=n.RGBA16F),k===n.UNSIGNED_BYTE&&($=se===yt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(S,_){let k;return S?_===null||_===1014||_===1020?k=n.DEPTH24_STENCIL8:_===1015?k=n.DEPTH32F_STENCIL8:_===1012&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===1014||_===1020?k=n.DEPTH_COMPONENT24:_===1015?k=n.DEPTH_COMPONENT32F:_===1012&&(k=n.DEPTH_COMPONENT16),k}function P(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==1003&&S.minFilter!==1006?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function R(S){const _=S.target;_.removeEventListener("dispose",R),F(_),_.isVideoTexture&&h.delete(_)}function N(S){const _=S.target;_.removeEventListener("dispose",N),T(_)}function F(S){const _=i.get(S);if(_.__webglInit===void 0)return;const k=S.source,H=f.get(k);if(H){const Q=H[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(S),Object.keys(H).length===0&&f.delete(k)}i.remove(S)}function b(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const k=S.source,H=f.get(k);delete H[_.__cacheKey],o.memory.textures--}function T(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let Q=0;Q<_.__webglFramebuffer[H].length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[H][Q]);else n.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)n.deleteFramebuffer(_.__webglFramebuffer[H]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=S.textures;for(let H=0,Q=k.length;H<Q;H++){const $=i.get(k[H]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(k[H])}i.remove(S)}let D=0;function K(){D=0}function V(){const S=D;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),D+=1,S}function W(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function ie(S,_){const k=i.get(S);if(S.isVideoTexture&&De(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&k.__version!==S.version){const H=S.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(k,S,_);return}}else S.isExternalTexture&&(k.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+_)}function j(S,_){const k=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&k.__version!==S.version){le(k,S,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+_)}function oe(S,_){const k=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&k.__version!==S.version){le(k,S,_);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+_)}function z(S,_){const k=i.get(S);if(S.version>0&&k.__version!==S.version){de(k,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+_)}const me={1e3:n.REPEAT,1001:n.CLAMP_TO_EDGE,1002:n.MIRRORED_REPEAT},Ee={1003:n.NEAREST,1004:n.NEAREST_MIPMAP_NEAREST,1005:n.NEAREST_MIPMAP_LINEAR,1006:n.LINEAR,1007:n.LINEAR_MIPMAP_NEAREST,1008:n.LINEAR_MIPMAP_LINEAR},Ue={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function Ve(S,_){if(_.type===1015&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===1006||_.magFilter===1007||_.magFilter===1005||_.magFilter===1008||_.minFilter===1006||_.minFilter===1007||_.minFilter===1005||_.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,me[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,me[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,me[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Ee[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Ee[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===1003||_.minFilter!==1005&&_.minFilter!==1008||_.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ht(S,_){let k=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",R));const H=_.source;let Q=f.get(H);Q===void 0&&(Q={},f.set(H,Q));const $=W(_);if($!==S.__cacheKey){Q[$]===void 0&&(Q[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[$].usedTimes++;const se=Q[S.__cacheKey];se!==void 0&&(Q[S.__cacheKey].usedTimes--,se.usedTimes===0&&b(_)),S.__cacheKey=$,S.__webglTexture=Q[$].texture}return k}function Je(S,_,k){return Math.floor(Math.floor(S/k)/_)}function X(S,_,k,H){const $=S.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,k,H,_.data);else{$.sort((q,_e)=>q.start-_e.start);let se=0;for(let q=1;q<$.length;q++){const _e=$[se],Fe=$[q],Pe=_e.start+_e.count,ye=Je(Fe.start,_.width,4),ze=Je(_e.start,_.width,4);Fe.start<=Pe+1&&ye===ze&&Je(Fe.start+Fe.count-1,_.width,4)===ye?_e.count=Math.max(_e.count,Fe.start+Fe.count-_e.start):(++se,$[se]=Fe)}$.length=se+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),ue=n.getParameter(n.UNPACK_SKIP_PIXELS),pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let q=0,_e=$.length;q<_e;q++){const Fe=$[q],Pe=Math.floor(Fe.start/4),ye=Math.ceil(Fe.count/4),ze=Pe%_.width,U=Math.floor(Pe/_.width),ce=ye,ge=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,ze,U,ce,ge,k,H,_.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function le(S,_,k){let H=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=n.TEXTURE_3D);const Q=ht(S,_),$=_.source;t.bindTexture(H,S.__webglTexture,n.TEXTURE0+k);const se=i.get($);if($.version!==se.__version||Q===!0){t.activeTexture(n.TEXTURE0+k);const ae=ct.getPrimaries(ct.workingColorSpace),ue=_.colorSpace===""?null:ct.getPrimaries(_.colorSpace),pe=_.colorSpace===""||ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let q=v(_.image,!1,s.maxTextureSize);q=Ge(_,q);const _e=r.convert(_.format,_.colorSpace),Fe=r.convert(_.type);let Pe=E(_.internalFormat,_e,Fe,_.colorSpace,_.isVideoTexture);Ve(H,_);let ye;const ze=_.mipmaps,U=_.isVideoTexture!==!0,ce=se.__version===void 0||Q===!0,ge=$.dataReady,we=P(_,q);if(_.isDepthTexture)Pe=x(_.format===1027,_.type),ce&&(U?t.texStorage2D(n.TEXTURE_2D,1,Pe,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,Pe,q.width,q.height,0,_e,Fe,null));else if(_.isDataTexture)if(ze.length>0){U&&ce&&t.texStorage2D(n.TEXTURE_2D,we,Pe,ze[0].width,ze[0].height);for(let te=0,ee=ze.length;te<ee;te++)ye=ze[te],U?ge&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ye.width,ye.height,_e,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,te,Pe,ye.width,ye.height,0,_e,Fe,ye.data);_.generateMipmaps=!1}else U?(ce&&t.texStorage2D(n.TEXTURE_2D,we,Pe,q.width,q.height),ge&&X(_,q,_e,Fe)):t.texImage2D(n.TEXTURE_2D,0,Pe,q.width,q.height,0,_e,Fe,q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Pe,ze[0].width,ze[0].height,q.depth);for(let te=0,ee=ze.length;te<ee;te++)if(ye=ze[te],_.format!==1023)if(_e!==null)if(U){if(ge)if(_.layerUpdates.size>0){const ke=cc(ye.width,ye.height,_.format,_.type);for(const qe of _.layerUpdates){const Et=ye.data.subarray(qe*ke/ye.data.BYTES_PER_ELEMENT,(qe+1)*ke/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,qe,ye.width,ye.height,1,_e,Et)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ye.width,ye.height,q.depth,_e,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Pe,ye.width,ye.height,q.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ye.width,ye.height,q.depth,_e,Fe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Pe,ye.width,ye.height,q.depth,0,_e,Fe,ye.data)}else{U&&ce&&t.texStorage2D(n.TEXTURE_2D,we,Pe,ze[0].width,ze[0].height);for(let te=0,ee=ze.length;te<ee;te++)ye=ze[te],_.format!==1023?_e!==null?U?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Pe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ge&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ye.width,ye.height,_e,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,te,Pe,ye.width,ye.height,0,_e,Fe,ye.data)}else if(_.isDataArrayTexture)if(U){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Pe,q.width,q.height,q.depth),ge)if(_.layerUpdates.size>0){const te=cc(q.width,q.height,_.format,_.type);for(const ee of _.layerUpdates){const ke=q.data.subarray(ee*te/q.data.BYTES_PER_ELEMENT,(ee+1)*te/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,q.width,q.height,1,_e,Fe,ke)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,_e,Fe,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,q.width,q.height,q.depth,0,_e,Fe,q.data);else if(_.isData3DTexture)U?(ce&&t.texStorage3D(n.TEXTURE_3D,we,Pe,q.width,q.height,q.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,_e,Fe,q.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,q.width,q.height,q.depth,0,_e,Fe,q.data);else if(_.isFramebufferTexture){if(ce)if(U)t.texStorage2D(n.TEXTURE_2D,we,Pe,q.width,q.height);else{let te=q.width,ee=q.height;for(let ke=0;ke<we;ke++)t.texImage2D(n.TEXTURE_2D,ke,Pe,te,ee,0,_e,Fe,null),te>>=1,ee>>=1}}else if(ze.length>0){if(U&&ce){const te=Xe(ze[0]);t.texStorage2D(n.TEXTURE_2D,we,Pe,te.width,te.height)}for(let te=0,ee=ze.length;te<ee;te++)ye=ze[te],U?ge&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,_e,Fe,ye):t.texImage2D(n.TEXTURE_2D,te,Pe,_e,Fe,ye);_.generateMipmaps=!1}else if(U){if(ce){const te=Xe(q);t.texStorage2D(n.TEXTURE_2D,we,Pe,te.width,te.height)}ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Fe,q)}else t.texImage2D(n.TEXTURE_2D,0,Pe,_e,Fe,q);p(_)&&u(H),se.__version=$.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function de(S,_,k){if(_.image.length!==6)return;const H=ht(S,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+k);const $=i.get(Q);if(Q.version!==$.__version||H===!0){t.activeTexture(n.TEXTURE0+k);const se=ct.getPrimaries(ct.workingColorSpace),ae=_.colorSpace===""?null:ct.getPrimaries(_.colorSpace),ue=_.colorSpace===""||se===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const pe=_.isCompressedTexture||_.image[0].isCompressedTexture,q=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let ee=0;ee<6;ee++)!pe&&!q?_e[ee]=v(_.image[ee],!0,s.maxCubemapSize):_e[ee]=q?_.image[ee].image:_.image[ee],_e[ee]=Ge(_,_e[ee]);const Fe=_e[0],Pe=r.convert(_.format,_.colorSpace),ye=r.convert(_.type),ze=E(_.internalFormat,Pe,ye,_.colorSpace),U=_.isVideoTexture!==!0,ce=$.__version===void 0||H===!0,ge=Q.dataReady;let we=P(_,Fe);Ve(n.TEXTURE_CUBE_MAP,_);let te;if(pe){U&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,ze,Fe.width,Fe.height);for(let ee=0;ee<6;ee++){te=_e[ee].mipmaps;for(let ke=0;ke<te.length;ke++){const qe=te[ke];_.format!==1023?Pe!==null?U?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke,0,0,qe.width,qe.height,Pe,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke,ze,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke,0,0,qe.width,qe.height,Pe,ye,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke,ze,qe.width,qe.height,0,Pe,ye,qe.data)}}}else{if(te=_.mipmaps,U&&ce){te.length>0&&we++;const ee=Xe(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(q){U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,_e[ee].width,_e[ee].height,Pe,ye,_e[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,_e[ee].width,_e[ee].height,0,Pe,ye,_e[ee].data);for(let ke=0;ke<te.length;ke++){const Et=te[ke].image[ee].image;U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke+1,0,0,Et.width,Et.height,Pe,ye,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke+1,ze,Et.width,Et.height,0,Pe,ye,Et.data)}}else{U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,ye,_e[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,Pe,ye,_e[ee]);for(let ke=0;ke<te.length;ke++){const qe=te[ke];U?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke+1,0,0,Pe,ye,qe.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke+1,ze,Pe,ye,qe.image[ee])}}}p(_)&&u(n.TEXTURE_CUBE_MAP),$.__version=Q.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Be(S,_,k,H,Q,$){const se=r.convert(k.format,k.colorSpace),ae=r.convert(k.type),ue=E(k.internalFormat,se,ae,k.colorSpace),pe=i.get(_),q=i.get(k);if(q.__renderTarget=_,!pe.__hasExternalTextures){const _e=Math.max(1,_.width>>$),Fe=Math.max(1,_.height>>$);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,ue,_e,Fe,_.depth,0,se,ae,null):t.texImage2D(Q,$,ue,_e,Fe,0,se,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ne(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,Q,q.__webglTexture,0,Ie(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,Q,q.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(S,_,k){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const H=_.depthTexture,Q=H&&H.isDepthTexture?H.type:null,$=x(_.stencilBuffer,Q),se=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Ie(_);ne(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,$,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,$,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,$,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,S)}else{const H=_.textures;for(let Q=0;Q<H.length;Q++){const $=H[Q],se=r.convert($.format,$.colorSpace),ae=r.convert($.type),ue=E($.internalFormat,se,ae,$.colorSpace),pe=Ie(_);k&&ne(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ue,_.width,_.height):ne(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,ue,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ue,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(_.depthTexture);H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ie(_.depthTexture,0);const Q=H.__webglTexture,$=Ie(_);if(_.depthTexture.format===1026)ne(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(_.depthTexture.format===1027)ne(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function gt(S){const _=i.get(S),k=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const H=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",Q)};H.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=H}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const H=S.texture.mipmaps;H&&H.length>0?He(_.__webglFramebuffer[0],S):He(_.__webglFramebuffer,S)}else if(k){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=n.createRenderbuffer(),Te(_.__webglDepthbuffer[H],S,!1);else{const Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}else{const H=S.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Te(_.__webglDepthbuffer,S,!1);else{const Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function J(S,_,k){const H=i.get(S);_!==void 0&&Be(H.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&gt(S)}function A(S){const _=S.texture,k=i.get(S),H=i.get(_);S.addEventListener("dispose",N);const Q=S.textures,$=S.isWebGLCubeRenderTarget===!0,se=Q.length>1;if(se||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=_.version,o.memory.textures++),$){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let ue=0;ue<_.mipmaps.length;ue++)k.__webglFramebuffer[ae][ue]=n.createFramebuffer()}else k.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)k.__webglFramebuffer[ae]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(se)for(let ae=0,ue=Q.length;ae<ue;ae++){const pe=i.get(Q[ae]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&ne(S)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){const ue=Q[ae];k.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);const pe=r.convert(ue.format,ue.colorSpace),q=r.convert(ue.type),_e=E(ue.internalFormat,pe,q,ue.colorSpace,S.isXRRenderTarget===!0),Fe=Ie(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,_e,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(k.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)Be(k.__webglFramebuffer[ae][ue],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else Be(k.__webglFramebuffer[ae],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(_)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let ae=0,ue=Q.length;ae<ue;ae++){const pe=Q[ae],q=i.get(pe);let _e=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(_e=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,q.__webglTexture),Ve(_e,pe),Be(k.__webglFramebuffer,S,pe,n.COLOR_ATTACHMENT0+ae,_e,0),p(pe)&&u(_e)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,H.__webglTexture),Ve(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)Be(k.__webglFramebuffer[ue],S,_,n.COLOR_ATTACHMENT0,ae,ue);else Be(k.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,ae,0);p(_)&&u(ae),t.unbindTexture()}S.depthBuffer&&gt(S)}function Ae(S){const _=S.textures;for(let k=0,H=_.length;k<H;k++){const Q=_[k];if(p(Q)){const $=y(S),se=i.get(Q).__webglTexture;t.bindTexture($,se),u($),t.unbindTexture()}}}const ve=[],G=[];function Z(S){if(S.samples>0){if(ne(S)===!1){const _=S.textures,k=S.width,H=S.height;let Q=n.COLOR_BUFFER_BIT;const $=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(S),ae=_.length>1;if(ae)for(let pe=0;pe<_.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const ue=S.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let pe=0;pe<_.length;pe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[pe]);const q=i.get(_[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,q,0)}n.blitFramebuffer(0,0,k,H,0,0,k,H,Q,n.NEAREST),l===!0&&(ve.length=0,G.length=0,ve.push(n.COLOR_ATTACHMENT0+pe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ve.push($),G.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let pe=0;pe<_.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,se.__webglColorRenderbuffer[pe]);const q=i.get(_[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Ie(S){return Math.min(s.maxSamples,S.samples)}function ne(S){const _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function De(S){const _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function Ge(S,_){const k=S.colorSpace,H=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||k!==vi&&k!==""&&(ct.getTransfer(k)===yt?(H!==1023||Q!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}function Xe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=K,this.setTexture2D=ie,this.setTexture2DArray=j,this.setTexture3D=oe,this.setTextureCube=z,this.rebindTextures=J,this.setupRenderTarget=A,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=ne}function C0(n,e){function t(i,s=""){let r;const o=ct.getTransfer(s);if(i===1009)return n.UNSIGNED_BYTE;if(i===1017)return n.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return n.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===1010)return n.BYTE;if(i===1011)return n.SHORT;if(i===1012)return n.UNSIGNED_SHORT;if(i===1013)return n.INT;if(i===1014)return n.UNSIGNED_INT;if(i===1015)return n.FLOAT;if(i===1016)return n.HALF_FLOAT;if(i===1021)return n.ALPHA;if(i===1022)return n.RGB;if(i===1023)return n.RGBA;if(i===1026)return n.DEPTH_COMPONENT;if(i===1027)return n.DEPTH_STENCIL;if(i===1028)return n.RED;if(i===1029)return n.RED_INTEGER;if(i===1030)return n.RG;if(i===1031)return n.RG_INTEGER;if(i===1033)return n.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===36196||i===37492)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===37496)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===37808)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===36492)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Bc extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const R0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class L0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Bc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wn({vertexShader:R0,fragmentShader:P0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new Ds(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I0 extends Bi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const v=new L0,p={},u=t.getContextAttributes();let y=null,E=null;const x=[],P=[],R=new ut;let N=null;const F=new sn;F.viewport=new At;const b=new sn;b.viewport=new At;const T=[F,b],D=new Im;let K=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let le=x[X];return le===void 0&&(le=new ca,x[X]=le),le.getTargetRaySpace()},this.getControllerGrip=function(X){let le=x[X];return le===void 0&&(le=new ca,x[X]=le),le.getGripSpace()},this.getHand=function(X){let le=x[X];return le===void 0&&(le=new ca,x[X]=le),le.getHandSpace()};function W(X){const le=P.indexOf(X.inputSource);if(le===-1)return;const de=x[le];de!==void 0&&(de.update(X.inputSource,X.frame,c||o),de.dispatchEvent({type:X.type,data:X.inputSource}))}function ie(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",j);for(let X=0;X<x.length;X++){const le=P[X];le!==null&&(P[X]=null,x[X].disconnect(le))}K=null,V=null,v.reset();for(const X in p)delete p[X];e.setRenderTarget(y),m=null,f=null,d=null,s=null,E=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",j),u.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Be=null,Te=null;u.depth&&(Te=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=u.stencil?1027:1026,Be=u.stencil?1020:1014);const He={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};f=d.createProjectionLayer(He),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Jn(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new rc(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Jn(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(X){for(let le=0;le<X.removed.length;le++){const de=X.removed[le],Be=P.indexOf(de);Be>=0&&(P[Be]=null,x[Be].disconnect(de))}for(let le=0;le<X.added.length;le++){const de=X.added[le];let Be=P.indexOf(de);if(Be===-1){for(let He=0;He<x.length;He++)if(He>=P.length){P.push(de),Be=He;break}else if(P[He]===null){P[He]=de,Be=He;break}if(Be===-1)break}const Te=x[Be];Te&&Te.connect(de)}}const oe=new O,z=new O;function me(X,le,de){oe.setFromMatrixPosition(le.matrixWorld),z.setFromMatrixPosition(de.matrixWorld);const Be=oe.distanceTo(z),Te=le.projectionMatrix.elements,He=de.projectionMatrix.elements,gt=Te[14]/(Te[10]-1),J=Te[14]/(Te[10]+1),A=(Te[9]+1)/Te[5],Ae=(Te[9]-1)/Te[5],ve=(Te[8]-1)/Te[0],G=(He[8]+1)/He[0],Z=gt*ve,Ie=gt*G,ne=Be/(-ve+G),De=ne*-ve;if(le.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(De),X.translateZ(ne),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Ge=gt+ne,Xe=J+ne,S=Z-De,_=Ie+(Be-De),k=A*J/Xe*Ge,H=Ae*J/Xe*Ge;X.projectionMatrix.makePerspective(S,_,k,H,Ge,Xe),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Ee(X,le){le===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(le.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let le=X.near,de=X.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(de=v.depthFar)),D.near=b.near=F.near=le,D.far=b.far=F.far=de,(K!==D.near||V!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),K=D.near,V=D.far),D.layers.mask=X.layers.mask|6,F.layers.mask=D.layers.mask&3,b.layers.mask=D.layers.mask&5;const Be=X.parent,Te=D.cameras;Ee(D,Be);for(let He=0;He<Te.length;He++)Ee(Te[He],Be);Te.length===2?me(D,F,b):D.projectionMatrix.copy(F.projectionMatrix),Ue(X,D,Be)};function Ue(X,le,de){de===null?X.matrix.copy(le.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(le.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ms*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(D)},this.getCameraTexture=function(X){return p[X]};let Ve=null;function ht(X,le){if(h=le.getViewerPose(c||o),g=le,h!==null){const de=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Be=!1;de.length!==D.cameras.length&&(D.cameras.length=0,Be=!0);for(let J=0;J<de.length;J++){const A=de[J];let Ae=null;if(m!==null)Ae=m.getViewport(A);else{const G=d.getViewSubImage(f,A);Ae=G.viewport,J===0&&(e.setRenderTargetTextures(E,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(E))}let ve=T[J];ve===void 0&&(ve=new sn,ve.layers.enable(J),ve.viewport=new At,T[J]=ve),ve.matrix.fromArray(A.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(A.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),J===0&&(D.matrix.copy(ve.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Be===!0&&D.cameras.push(ve)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const J=d.getDepthInformation(de[0]);J&&J.isValid&&J.texture&&v.init(J,s.renderState)}if(Te&&Te.includes("camera-access")&&(e.state.unbindTexture(),d))for(let J=0;J<de.length;J++){const A=de[J].camera;if(A){let Ae=p[A];Ae||(Ae=new Bc,p[A]=Ae);const ve=d.getCameraImage(A);Ae.sourceTexture=ve}}}for(let de=0;de<x.length;de++){const Be=P[de],Te=x[de];Be!==null&&Te!==void 0&&Te.update(Be,le,c||o)}Ve&&Ve(X,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}const Je=new hc;Je.setAnimationLoop(ht),this.setAnimationLoop=function(X){Ve=X},this.dispose=function(){}}}const Ti=new Tn,D0=new xt;function N0(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Zl(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,y,E,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,x)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),v(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,y,E):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===1&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===1&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const y=e.get(u),E=y.envMap,x=y.envMapRotation;E&&(p.envMap.value=E,Ti.copy(x),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),p.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(Ti)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,y,E){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=E*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===1&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const y=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function U0(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const x=E.program;i.uniformBlockBinding(y,x)}function c(y,E){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",p));const P=E.program;i.updateUBOMapping(y,P);const R=e.render.frame;r[y.id]!==R&&(f(y),r[y.id]=R)}function h(y){const E=d();y.__bindingPointIndex=E;const x=n.createBuffer(),P=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,x),x}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const E=s[y.id],x=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let R=0,N=x.length;R<N;R++){const F=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,T=F.length;b<T;b++){const D=F[b];if(m(D,R,b,P)===!0){const K=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let ie=0;ie<V.length;ie++){const j=V[ie],oe=v(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,K+W,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,W),W+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,E,x,P){const R=y.value,N=E+"_"+x;if(P[N]===void 0)return typeof R=="number"||typeof R=="boolean"?P[N]=R:P[N]=R.clone(),!0;{const F=P[N];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return P[N]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(y){const E=y.uniforms;let x=0;const P=16;for(let N=0,F=E.length;N<F;N++){const b=Array.isArray(E[N])?E[N]:[E[N]];for(let T=0,D=b.length;T<D;T++){const K=b[T],V=Array.isArray(K.value)?K.value:[K.value];for(let W=0,ie=V.length;W<ie;W++){const j=V[W],oe=v(j),z=x%P,me=z%oe.boundary,Ee=z+me;x+=me,Ee!==0&&P-Ee<oe.storage&&(x+=P-Ee),K.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=x,x+=oe.storage}}}const R=x%P;return R>0&&(x+=P-R),y.__size=x,y.__cache={},this}function v(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function p(y){const E=y.target;E.removeEventListener("dispose",p);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}class F0{constructor(e={}){const{canvas:t=Wp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,u=null;const y=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let P=!1;this._outputColorSpace=ln;let R=0,N=0,F=null,b=-1,T=null;const D=new At,K=new At;let V=null;const W=new pt(0);let ie=0,j=t.width,oe=t.height,z=1,me=null,Ee=null;const Ue=new At(0,0,j,oe),Ve=new At(0,0,j,oe);let ht=!1;const Je=new da;let X=!1,le=!1;const de=new xt,Be=new O,Te=new At,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function J(){return F===null?z:1}let A=i;function Ae(w,M){return t.getContext(w,M)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r179"),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",te,!1),A===null){const M="webgl2";if(A=Ae(M,w),A===null)throw Ae(M)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ve,G,Z,Ie,ne,De,Ge,Xe,S,_,k,H,Q,$,se,ae,ue,pe,q,_e,Fe,Pe,ye,ze;function U(){ve=new Xv(A),ve.init(),Pe=new C0(A,ve),G=new Bv(A,ve,e,Pe),Z=new T0(A,ve),G.reversedDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),Ie=new jv(A),ne=new f0,De=new A0(A,ve,Z,ne,G,Pe,Ie),Ge=new Hv(x),Xe=new $v(x),S=new Um(A),ye=new kv(A,S),_=new qv(A,S,Ie,ye),k=new Kv(A,_,S,Ie),q=new Zv(A,G,De),ae=new zv(ne),H=new u0(x,Ge,Xe,ve,G,ye,ae),Q=new N0(x,ne),$=new m0,se=new E0(ve),pe=new Fv(x,Ge,Xe,Z,k,m,l),ue=new S0(x,k,G),ze=new U0(A,Ie,G,Z),_e=new Ov(A,ve,Ie),Fe=new Yv(A,ve,Ie),Ie.programs=H.programs,x.capabilities=G,x.extensions=ve,x.properties=ne,x.renderLists=$,x.shadowMap=ue,x.state=Z,x.info=Ie}U();const ce=new I0(x,A);this.xr=ce,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const w=ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(j,oe,!1))},this.getSize=function(w){return w.set(j,oe)},this.setSize=function(w,M,C=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,oe=M,t.width=Math.floor(w*z),t.height=Math.floor(M*z),C===!0&&(t.style.width=w+"px",t.style.height=M+"px"),this.setViewport(0,0,w,M)},this.getDrawingBufferSize=function(w){return w.set(j*z,oe*z).floor()},this.setDrawingBufferSize=function(w,M,C){j=w,oe=M,z=C,t.width=Math.floor(w*C),t.height=Math.floor(M*C),this.setViewport(0,0,w,M)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(Ue)},this.setViewport=function(w,M,C,I){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,M,C,I),Z.viewport(D.copy(Ue).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(Ve)},this.setScissor=function(w,M,C,I){w.isVector4?Ve.set(w.x,w.y,w.z,w.w):Ve.set(w,M,C,I),Z.scissor(K.copy(Ve).multiplyScalar(z).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(w){Z.setScissorTest(ht=w)},this.setOpaqueSort=function(w){me=w},this.setTransparentSort=function(w){Ee=w},this.getClearColor=function(w){return w.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(w=!0,M=!0,C=!0){let I=0;if(w){let L=!1;if(F!==null){const B=F.texture.format;L=B===1033||B===1031||B===1029}if(L){const B=F.texture.type,Y=B===1009||B===1014||B===1012||B===1020||B===1017||B===1018,he=pe.getClearColor(),fe=pe.getClearAlpha(),be=he.r,xe=he.g,Ce=he.b;Y?(g[0]=be,g[1]=xe,g[2]=Ce,g[3]=fe,A.clearBufferuiv(A.COLOR,0,g)):(v[0]=be,v[1]=xe,v[2]=Ce,v[3]=fe,A.clearBufferiv(A.COLOR,0,v))}else I|=A.COLOR_BUFFER_BIT}M&&(I|=A.DEPTH_BUFFER_BIT),C&&(I|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",te,!1),pe.dispose(),$.dispose(),se.dispose(),ne.dispose(),Ge.dispose(),Xe.dispose(),k.dispose(),ye.dispose(),ze.dispose(),H.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Qt),ce.removeEventListener("sessionend",Uo),kn.stop()};function ge(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=Ie.autoReset,M=ue.enabled,C=ue.autoUpdate,I=ue.needsUpdate,L=ue.type;U(),Ie.autoReset=w,ue.enabled=M,ue.autoUpdate=C,ue.needsUpdate=I,ue.type=L}function te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ee(w){const M=w.target;M.removeEventListener("dispose",ee),ke(M)}function ke(w){qe(w),ne.remove(w)}function qe(w){const M=ne.get(w).programs;M!==void 0&&(M.forEach(function(C){H.releaseProgram(C)}),w.isShaderMaterial&&H.releaseShaderCache(w))}this.renderBufferDirect=function(w,M,C,I,L,B){M===null&&(M=He);const Y=L.isMesh&&L.matrixWorld.determinant()<0,he=ki(w,M,C,I,L);Z.setMaterial(I,Y);let fe=C.index,be=1;if(I.wireframe===!0){if(fe=_.getWireframeAttribute(C),fe===void 0)return;be=2}const xe=C.drawRange,Ce=C.attributes.position;let We=xe.start*be,je=(xe.start+xe.count)*be;B!==null&&(We=Math.max(We,B.start*be),je=Math.min(je,(B.start+B.count)*be)),fe!==null?(We=Math.max(We,0),je=Math.min(je,fe.count)):Ce!=null&&(We=Math.max(We,0),je=Math.min(je,Ce.count));const ft=je-We;if(ft<0||ft===1/0)return;ye.setup(L,I,he,C,fe);let tt,ot=_e;if(fe!==null&&(tt=S.get(fe),ot=Fe,ot.setIndex(tt)),L.isMesh)I.wireframe===!0?(Z.setLineWidth(I.wireframeLinewidth*J()),ot.setMode(A.LINES)):ot.setMode(A.TRIANGLES);else if(L.isLine){let Le=I.linewidth;Le===void 0&&(Le=1),Z.setLineWidth(Le*J()),L.isLineSegments?ot.setMode(A.LINES):L.isLineLoop?ot.setMode(A.LINE_LOOP):ot.setMode(A.LINE_STRIP)}else L.isPoints?ot.setMode(A.POINTS):L.isSprite&&ot.setMode(A.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Vi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))ot.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Le=L._multiDrawStarts,at=L._multiDrawCounts,st=L._multiDrawCount,_t=fe?S.get(fe).bytesPerElement:1,mn=ne.get(I).currentProgram.getUniforms();for(let Ft=0;Ft<st;Ft++)mn.setValue(A,"_gl_DrawID",Ft),ot.render(Le[Ft]/_t,at[Ft])}else if(L.isInstancedMesh)ot.renderInstances(We,ft,L.count);else if(C.isInstancedBufferGeometry){const Le=C._maxInstanceCount!==void 0?C._maxInstanceCount:1/0,at=Math.min(C.instanceCount,Le);ot.renderInstances(We,ft,at)}else ot.render(We,ft)};function Et(w,M,C){w.transparent===!0&&w.side===2&&w.forceSinglePass===!1?(w.side=1,w.needsUpdate=!0,ys(w,M,C),w.side=0,w.needsUpdate=!0,ys(w,M,C),w.side=2):ys(w,M,C)}this.compile=function(w,M,C=null){C===null&&(C=w),u=se.get(C),u.init(M),E.push(u),C.traverseVisible(function(L){L.isLight&&L.layers.test(M.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),w!==C&&w.traverseVisible(function(L){L.isLight&&L.layers.test(M.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),u.setupLights();const I=new Set;return w.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const B=L.material;if(B)if(Array.isArray(B))for(let Y=0;Y<B.length;Y++){const he=B[Y];Et(he,C,L),I.add(he)}else Et(B,C,L),I.add(B)}),u=E.pop(),I},this.compileAsync=function(w,M,C=null){const I=this.compile(w,M,C);return new Promise(L=>{function B(){if(I.forEach(function(Y){ne.get(Y).currentProgram.isReady()&&I.delete(Y)}),I.size===0){L(w);return}setTimeout(B,10)}ve.get("KHR_parallel_shader_compile")!==null?B():setTimeout(B,10)})};let dt=null;function Wt(w){dt&&dt(w)}function Qt(){kn.stop()}function Uo(){kn.start()}const kn=new hc;kn.setAnimationLoop(Wt),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(w){dt=w,ce.setAnimationLoop(w),w===null?kn.stop():kn.start()},ce.addEventListener("sessionstart",Qt),ce.addEventListener("sessionend",Uo),this.render=function(w,M){if(M!==void 0&&M.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),M.parent===null&&M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(M),M=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,M,F),u=se.get(w,E.length),u.init(M),E.push(u),de.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),Je.setFromProjectionMatrix(de,2e3,M.reversedDepth),le=this.localClippingEnabled,X=ae.init(this.clippingPlanes,le),p=$.get(w,y.length),p.init(),y.push(p),ce.enabled===!0&&ce.isPresenting===!0){const B=x.xr.getDepthSensingMesh();B!==null&&Ui(B,M,-1/0,x.sortObjects)}Ui(w,M,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(me,Ee),gt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,gt&&pe.addToRenderList(p,w),this.info.render.frame++,X===!0&&ae.beginShadows();const C=u.state.shadowsArray;ue.render(C,w,M),X===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=p.opaque,L=p.transmissive;if(u.setupLights(),M.isArrayCamera){const B=M.cameras;if(L.length>0)for(let Y=0,he=B.length;Y<he;Y++){const fe=B[Y];pr(I,L,w,fe)}gt&&pe.render(w);for(let Y=0,he=B.length;Y<he;Y++){const fe=B[Y];fr(p,w,fe,fe.viewport)}}else L.length>0&&pr(I,L,w,M),gt&&pe.render(w),fr(p,w,M);F!==null&&N===0&&(De.updateMultisampleRenderTarget(F),De.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(x,w,M),ye.resetDefaultState(),b=-1,T=null,E.pop(),E.length>0?(u=E[E.length-1],X===!0&&ae.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Ui(w,M,C,I){if(w.visible===!1)return;if(w.layers.test(M.layers)){if(w.isGroup)C=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(M);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Je.intersectsSprite(w)){I&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(de);const Y=k.update(w),he=w.material;he.visible&&p.push(w,Y,he,C,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Je.intersectsObject(w))){const Y=k.update(w),he=w.material;if(I&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),Te.copy(Y.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(de)),Array.isArray(he)){const fe=Y.groups;for(let be=0,xe=fe.length;be<xe;be++){const Ce=fe[be],We=he[Ce.materialIndex];We&&We.visible&&p.push(w,Y,We,C,Te.z,Ce)}}else he.visible&&p.push(w,Y,he,C,Te.z,null)}}const B=w.children;for(let Y=0,he=B.length;Y<he;Y++)Ui(B[Y],M,C,I)}function fr(w,M,C,I){const L=w.opaque,B=w.transmissive,Y=w.transparent;u.setupLightsView(C),X===!0&&ae.setGlobalState(x.clippingPlanes,C),I&&Z.viewport(D.copy(I)),L.length>0&&gi(L,M,C),B.length>0&&gi(B,M,C),Y.length>0&&gi(Y,M,C),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function pr(w,M,C,I){if((C.isScene===!0?C.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[I.id]===void 0&&(u.state.transmissionRenderTarget[I.id]=new Jn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const B=u.state.transmissionRenderTarget[I.id],Y=I.viewport||D;B.setSize(Y.z*x.transmissionResolutionScale,Y.w*x.transmissionResolutionScale);const he=x.getRenderTarget(),fe=x.getActiveCubeFace(),be=x.getActiveMipmapLevel();x.setRenderTarget(B),x.getClearColor(W),ie=x.getClearAlpha(),ie<1&&x.setClearColor(16777215,.5),x.clear(),gt&&pe.render(C);const xe=x.toneMapping;x.toneMapping=0;const Ce=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),u.setupLightsView(I),X===!0&&ae.setGlobalState(x.clippingPlanes,I),gi(w,C,I),De.updateMultisampleRenderTarget(B),De.updateRenderTargetMipmap(B),ve.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let je=0,ft=M.length;je<ft;je++){const tt=M[je],ot=tt.object,Le=tt.geometry,at=tt.material,st=tt.group;if(at.side===2&&ot.layers.test(I.layers)){const _t=at.side;at.side=1,at.needsUpdate=!0,Fi(ot,C,I,Le,at,st),at.side=_t,at.needsUpdate=!0,We=!0}}We===!0&&(De.updateMultisampleRenderTarget(B),De.updateRenderTargetMipmap(B))}x.setRenderTarget(he,fe,be),x.setClearColor(W,ie),Ce!==void 0&&(I.viewport=Ce),x.toneMapping=xe}function gi(w,M,C){const I=M.isScene===!0?M.overrideMaterial:null;for(let L=0,B=w.length;L<B;L++){const Y=w[L],he=Y.object,fe=Y.geometry,be=Y.group;let xe=Y.material;xe.allowOverride===!0&&I!==null&&(xe=I),he.layers.test(C.layers)&&Fi(he,M,C,fe,xe,be)}}function Fi(w,M,C,I,L,B){w.onBeforeRender(x,M,C,I,L,B),w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),L.onBeforeRender(x,M,C,I,w,B),L.transparent===!0&&L.side===2&&L.forceSinglePass===!1?(L.side=1,L.needsUpdate=!0,x.renderBufferDirect(C,M,I,L,w,B),L.side=0,L.needsUpdate=!0,x.renderBufferDirect(C,M,I,L,w,B),L.side=2):x.renderBufferDirect(C,M,I,L,w,B),w.onAfterRender(x,M,C,I,L,B)}function ys(w,M,C){M.isScene!==!0&&(M=He);const I=ne.get(w),L=u.state.lights,B=u.state.shadowsArray,Y=L.state.version,he=H.getParameters(w,L.state,B,M,C),fe=H.getProgramCacheKey(he);let be=I.programs;I.environment=w.isMeshStandardMaterial?M.environment:null,I.fog=M.fog,I.envMap=(w.isMeshStandardMaterial?Xe:Ge).get(w.envMap||I.environment),I.envMapRotation=I.environment!==null&&w.envMap===null?M.environmentRotation:w.envMapRotation,be===void 0&&(w.addEventListener("dispose",ee),be=new Map,I.programs=be);let xe=be.get(fe);if(xe!==void 0){if(I.currentProgram===xe&&I.lightsStateVersion===Y)return Fo(w,he),xe}else he.uniforms=H.getUniforms(w),w.onBeforeCompile(he,x),xe=H.acquireProgram(he,fe),be.set(fe,xe),I.uniforms=he.uniforms;const Ce=I.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=ae.uniform),Fo(w,he),I.needsLights=bl(w),I.lightsStateVersion=Y,I.needsLights&&(Ce.ambientLightColor.value=L.state.ambient,Ce.lightProbe.value=L.state.probe,Ce.directionalLights.value=L.state.directional,Ce.directionalLightShadows.value=L.state.directionalShadow,Ce.spotLights.value=L.state.spot,Ce.spotLightShadows.value=L.state.spotShadow,Ce.rectAreaLights.value=L.state.rectArea,Ce.ltc_1.value=L.state.rectAreaLTC1,Ce.ltc_2.value=L.state.rectAreaLTC2,Ce.pointLights.value=L.state.point,Ce.pointLightShadows.value=L.state.pointShadow,Ce.hemisphereLights.value=L.state.hemi,Ce.directionalShadowMap.value=L.state.directionalShadowMap,Ce.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ce.spotShadowMap.value=L.state.spotShadowMap,Ce.spotLightMatrix.value=L.state.spotLightMatrix,Ce.spotLightMap.value=L.state.spotLightMap,Ce.pointShadowMap.value=L.state.pointShadowMap,Ce.pointShadowMatrix.value=L.state.pointShadowMatrix),I.currentProgram=xe,I.uniformsList=null,xe}function xs(w){if(w.uniformsList===null){const M=w.currentProgram.getUniforms();w.uniformsList=Vr.seqWithValue(M.seq,w.uniforms)}return w.uniformsList}function Fo(w,M){const C=ne.get(w);C.outputColorSpace=M.outputColorSpace,C.batching=M.batching,C.batchingColor=M.batchingColor,C.instancing=M.instancing,C.instancingColor=M.instancingColor,C.instancingMorph=M.instancingMorph,C.skinning=M.skinning,C.morphTargets=M.morphTargets,C.morphNormals=M.morphNormals,C.morphColors=M.morphColors,C.morphTargetsCount=M.morphTargetsCount,C.numClippingPlanes=M.numClippingPlanes,C.numIntersection=M.numClipIntersection,C.vertexAlphas=M.vertexAlphas,C.vertexTangents=M.vertexTangents,C.toneMapping=M.toneMapping}function ki(w,M,C,I,L){M.isScene!==!0&&(M=He),De.resetTextureUnits();const B=M.fog,Y=I.isMeshStandardMaterial?M.environment:null,he=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:vi,fe=(I.isMeshStandardMaterial?Xe:Ge).get(I.envMap||Y),be=I.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,xe=!!C.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Ce=!!C.morphAttributes.position,We=!!C.morphAttributes.normal,je=!!C.morphAttributes.color;let ft=0;I.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ft=x.toneMapping);const tt=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ot=tt!==void 0?tt.length:0,Le=ne.get(I),at=u.state.lights;if(X===!0&&(le===!0||w!==T)){const lt=w===T&&I.id===b;ae.setState(I,w,lt)}let st=!1;I.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==at.state.version||Le.outputColorSpace!==he||L.isBatchedMesh&&Le.batching===!1||!L.isBatchedMesh&&Le.batching===!0||L.isBatchedMesh&&Le.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Le.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Le.instancing===!1||!L.isInstancedMesh&&Le.instancing===!0||L.isSkinnedMesh&&Le.skinning===!1||!L.isSkinnedMesh&&Le.skinning===!0||L.isInstancedMesh&&Le.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Le.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Le.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Le.instancingMorph===!1&&L.morphTexture!==null||Le.envMap!==fe||I.fog===!0&&Le.fog!==B||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ae.numPlanes||Le.numIntersection!==ae.numIntersection)||Le.vertexAlphas!==be||Le.vertexTangents!==xe||Le.morphTargets!==Ce||Le.morphNormals!==We||Le.morphColors!==je||Le.toneMapping!==ft||Le.morphTargetsCount!==ot)&&(st=!0):(st=!0,Le.__version=I.version);let _t=Le.currentProgram;st===!0&&(_t=ys(I,M,L));let mn=!1,Ft=!1,gn=!1;const Oe=_t.getUniforms(),nt=Le.uniforms;if(Z.useProgram(_t.program)&&(mn=!0,Ft=!0,gn=!0),I.id!==b&&(b=I.id,Ft=!0),mn||T!==w){Z.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Oe.setValue(A,"projectionMatrix",w.projectionMatrix),Oe.setValue(A,"viewMatrix",w.matrixWorldInverse);const Mt=Oe.map.cameraPosition;Mt!==void 0&&Mt.setValue(A,Be.setFromMatrixPosition(w.matrixWorld)),G.logarithmicDepthBuffer&&Oe.setValue(A,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Oe.setValue(A,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,Ft=!0,gn=!0)}if(L.isSkinnedMesh){Oe.setOptional(A,L,"bindMatrix"),Oe.setOptional(A,L,"bindMatrixInverse");const lt=L.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),Oe.setValue(A,"boneTexture",lt.boneTexture,De))}L.isBatchedMesh&&(Oe.setOptional(A,L,"batchingTexture"),Oe.setValue(A,"batchingTexture",L._matricesTexture,De),Oe.setOptional(A,L,"batchingIdTexture"),Oe.setValue(A,"batchingIdTexture",L._indirectTexture,De),Oe.setOptional(A,L,"batchingColorTexture"),L._colorsTexture!==null&&Oe.setValue(A,"batchingColorTexture",L._colorsTexture,De));const Qe=C.morphAttributes;if((Qe.position!==void 0||Qe.normal!==void 0||Qe.color!==void 0)&&q.update(L,C,_t),(Ft||Le.receiveShadow!==L.receiveShadow)&&(Le.receiveShadow=L.receiveShadow,Oe.setValue(A,"receiveShadow",L.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(nt.envMap.value=fe,nt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&M.environment!==null&&(nt.envMapIntensity.value=M.environmentIntensity),Ft&&(Oe.setValue(A,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&ko(nt,gn),B&&I.fog===!0&&Q.refreshFogUniforms(nt,B),Q.refreshMaterialUniforms(nt,I,z,oe,u.state.transmissionRenderTarget[w.id]),Vr.upload(A,xs(Le),nt,De)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Vr.upload(A,xs(Le),nt,De),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Oe.setValue(A,"center",L.center),Oe.setValue(A,"modelViewMatrix",L.modelViewMatrix),Oe.setValue(A,"normalMatrix",L.normalMatrix),Oe.setValue(A,"modelMatrix",L.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const lt=I.uniformsGroups;for(let Mt=0,Oi=lt.length;Mt<Oi;Mt++){const vn=lt[Mt];ze.update(vn,_t),ze.bind(vn,_t)}}return _t}function ko(w,M){w.ambientLightColor.needsUpdate=M,w.lightProbe.needsUpdate=M,w.directionalLights.needsUpdate=M,w.directionalLightShadows.needsUpdate=M,w.pointLights.needsUpdate=M,w.pointLightShadows.needsUpdate=M,w.spotLights.needsUpdate=M,w.spotLightShadows.needsUpdate=M,w.rectAreaLights.needsUpdate=M,w.hemisphereLights.needsUpdate=M}function bl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,M,C){const I=ne.get(w);I.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,I.__autoAllocateDepthBuffer===!1&&(I.__useRenderToTexture=!1),ne.get(w.texture).__webglTexture=M,ne.get(w.depthTexture).__webglTexture=I.__autoAllocateDepthBuffer?void 0:C,I.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,M){const C=ne.get(w);C.__webglFramebuffer=M,C.__useDefaultFramebuffer=M===void 0};const Tl=A.createFramebuffer();this.setRenderTarget=function(w,M=0,C=0){F=w,R=M,N=C;let I=!0,L=null,B=!1,Y=!1;if(w){const fe=ne.get(w);if(fe.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(A.FRAMEBUFFER,null),I=!1;else if(fe.__webglFramebuffer===void 0)De.setupRenderTarget(w);else if(fe.__hasExternalTextures)De.rebindTextures(w,ne.get(w.texture).__webglTexture,ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ce=w.depthTexture;if(fe.__boundDepthTexture!==Ce){if(Ce!==null&&ne.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(w)}}const be=w.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Y=!0);const xe=ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(xe[M])?L=xe[M][C]:L=xe[M],B=!0):w.samples>0&&De.useMultisampledRTT(w)===!1?L=ne.get(w).__webglMultisampledFramebuffer:Array.isArray(xe)?L=xe[C]:L=xe,D.copy(w.viewport),K.copy(w.scissor),V=w.scissorTest}else D.copy(Ue).multiplyScalar(z).floor(),K.copy(Ve).multiplyScalar(z).floor(),V=ht;if(C!==0&&(L=Tl),Z.bindFramebuffer(A.FRAMEBUFFER,L)&&I&&Z.drawBuffers(w,L),Z.viewport(D),Z.scissor(K),Z.setScissorTest(V),B){const fe=ne.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+M,fe.__webglTexture,C)}else if(Y){const fe=M;for(let be=0;be<w.textures.length;be++){const xe=ne.get(w.textures[be]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+be,xe.__webglTexture,C,fe)}}else if(w!==null&&C!==0){const fe=ne.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,fe.__webglTexture,C)}b=-1},this.readRenderTargetPixels=function(w,M,C,I,L,B,Y,he=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Y!==void 0&&(fe=fe[Y]),fe){Z.bindFramebuffer(A.FRAMEBUFFER,fe);try{const be=w.textures[he],xe=be.format,Ce=be.type;if(!G.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}M>=0&&M<=w.width-I&&C>=0&&C<=w.height-L&&(w.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+he),A.readPixels(M,C,I,L,Pe.convert(xe),Pe.convert(Ce),B))}finally{const be=F!==null?ne.get(F).__webglFramebuffer:null;Z.bindFramebuffer(A.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,M,C,I,L,B,Y,he=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Y!==void 0&&(fe=fe[Y]),fe)if(M>=0&&M<=w.width-I&&C>=0&&C<=w.height-L){Z.bindFramebuffer(A.FRAMEBUFFER,fe);const be=w.textures[he],xe=be.format,Ce=be.type;if(!G.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,We),A.bufferData(A.PIXEL_PACK_BUFFER,B.byteLength,A.STREAM_READ),w.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+he),A.readPixels(M,C,I,L,Pe.convert(xe),Pe.convert(Ce),0);const je=F!==null?ne.get(F).__webglFramebuffer:null;Z.bindFramebuffer(A.FRAMEBUFFER,je);const ft=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await $p(A,ft,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,We),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,B),A.deleteBuffer(We),A.deleteSync(ft),B}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,M=null,C=0){const I=Math.pow(2,-C),L=Math.floor(w.image.width*I),B=Math.floor(w.image.height*I),Y=M!==null?M.x:0,he=M!==null?M.y:0;De.setTexture2D(w,0),A.copyTexSubImage2D(A.TEXTURE_2D,C,0,0,Y,he,L,B),Z.unbindTexture()};const Oo=A.createFramebuffer(),Al=A.createFramebuffer();this.copyTextureToTexture=function(w,M,C=null,I=null,L=0,B=null){B===null&&(L!==0?(Vi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),B=L,L=0):B=0);let Y,he,fe,be,xe,Ce,We,je,ft;const tt=w.isCompressedTexture?w.mipmaps[B]:w.image;if(C!==null)Y=C.max.x-C.min.x,he=C.max.y-C.min.y,fe=C.isBox3?C.max.z-C.min.z:1,be=C.min.x,xe=C.min.y,Ce=C.isBox3?C.min.z:0;else{const Qe=Math.pow(2,-L);Y=Math.floor(tt.width*Qe),he=Math.floor(tt.height*Qe),w.isDataArrayTexture?fe=tt.depth:w.isData3DTexture?fe=Math.floor(tt.depth*Qe):fe=1,be=0,xe=0,Ce=0}I!==null?(We=I.x,je=I.y,ft=I.z):(We=0,je=0,ft=0);const ot=Pe.convert(M.format),Le=Pe.convert(M.type);let at;M.isData3DTexture?(De.setTexture3D(M,0),at=A.TEXTURE_3D):M.isDataArrayTexture||M.isCompressedArrayTexture?(De.setTexture2DArray(M,0),at=A.TEXTURE_2D_ARRAY):(De.setTexture2D(M,0),at=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,M.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,M.unpackAlignment);const st=A.getParameter(A.UNPACK_ROW_LENGTH),_t=A.getParameter(A.UNPACK_IMAGE_HEIGHT),mn=A.getParameter(A.UNPACK_SKIP_PIXELS),Ft=A.getParameter(A.UNPACK_SKIP_ROWS),gn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,tt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,tt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,be),A.pixelStorei(A.UNPACK_SKIP_ROWS,xe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ce);const Oe=w.isDataArrayTexture||w.isData3DTexture,nt=M.isDataArrayTexture||M.isData3DTexture;if(w.isDepthTexture){const Qe=ne.get(w),lt=ne.get(M),Mt=ne.get(Qe.__renderTarget),Oi=ne.get(lt.__renderTarget);Z.bindFramebuffer(A.READ_FRAMEBUFFER,Mt.__webglFramebuffer),Z.bindFramebuffer(A.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let vn=0;vn<fe;vn++)Oe&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ne.get(w).__webglTexture,L,Ce+vn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ne.get(M).__webglTexture,B,ft+vn)),A.blitFramebuffer(be,xe,Y,he,We,je,Y,he,A.DEPTH_BUFFER_BIT,A.NEAREST);Z.bindFramebuffer(A.READ_FRAMEBUFFER,null),Z.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(L!==0||w.isRenderTargetTexture||ne.has(w)){const Qe=ne.get(w),lt=ne.get(M);Z.bindFramebuffer(A.READ_FRAMEBUFFER,Oo),Z.bindFramebuffer(A.DRAW_FRAMEBUFFER,Al);for(let Mt=0;Mt<fe;Mt++)Oe?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Qe.__webglTexture,L,Ce+Mt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Qe.__webglTexture,L),nt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,lt.__webglTexture,B,ft+Mt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,lt.__webglTexture,B),L!==0?A.blitFramebuffer(be,xe,Y,he,We,je,Y,he,A.COLOR_BUFFER_BIT,A.NEAREST):nt?A.copyTexSubImage3D(at,B,We,je,ft+Mt,be,xe,Y,he):A.copyTexSubImage2D(at,B,We,je,be,xe,Y,he);Z.bindFramebuffer(A.READ_FRAMEBUFFER,null),Z.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else nt?w.isDataTexture||w.isData3DTexture?A.texSubImage3D(at,B,We,je,ft,Y,he,fe,ot,Le,tt.data):M.isCompressedArrayTexture?A.compressedTexSubImage3D(at,B,We,je,ft,Y,he,fe,ot,tt.data):A.texSubImage3D(at,B,We,je,ft,Y,he,fe,ot,Le,tt):w.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,B,We,je,Y,he,ot,Le,tt.data):w.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,B,We,je,tt.width,tt.height,ot,tt.data):A.texSubImage2D(A.TEXTURE_2D,B,We,je,Y,he,ot,Le,tt);A.pixelStorei(A.UNPACK_ROW_LENGTH,st),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,_t),A.pixelStorei(A.UNPACK_SKIP_PIXELS,mn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ft),A.pixelStorei(A.UNPACK_SKIP_IMAGES,gn),B===0&&M.generateMipmaps&&A.generateMipmap(at),Z.unbindTexture()},this.copyTextureToTexture3D=function(w,M,C=null,I=null,L=0){return Vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,M,C,I,L)},this.initRenderTarget=function(w){ne.get(w).__webglFramebuffer===void 0&&De.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?De.setTextureCube(w,0):w.isData3DTexture?De.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?De.setTexture2DArray(w,0):De.setTexture2D(w,0),Z.unbindTexture()},this.resetState=function(){R=0,N=0,F=null,Z.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}/*!
 * Photo Sphere Viewer 5.14.1
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var k0=Object.defineProperty,Ma=(n,e)=>{for(var t in e)k0(n,t,{get:e[t],enumerable:!0})},cs={};Ma(cs,{ACTIONS:()=>$c,ANIMATION_MIN_DURATION:()=>Sa,CAPTURE_EVENTS_CLASS:()=>Us,CTRLZOOM_TIMEOUT:()=>Wc,DBLCLICK_DELAY:()=>Hc,EASINGS:()=>Wr,ICONS:()=>wn,IDS:()=>Bt,KEY_CODES:()=>Nt,LONGTOUCH_DELAY:()=>Vc,MOVE_THRESHOLD:()=>zc,SPHERE_RADIUS:()=>Ai,TWOFINGERSOVERLAY_DELAY:()=>Gc,VIEWER_DATA:()=>li});var O0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,B0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',z0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,H0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,V0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,G0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,W0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,$0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,X0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,Sa=500,zc=4,Hc=300,Vc=500,Gc=100,Wc=2e3,Ai=10,li="photoSphereViewer",Us="psv--capture-event",$c=(n=>(n.ROTATE_UP="ROTATE_UP",n.ROTATE_DOWN="ROTATE_DOWN",n.ROTATE_RIGHT="ROTATE_RIGHT",n.ROTATE_LEFT="ROTATE_LEFT",n.ZOOM_IN="ZOOM_IN",n.ZOOM_OUT="ZOOM_OUT",n))($c||{}),Bt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},Nt={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},wn={arrow:O0,close:B0,download:z0,fullscreenIn:H0,fullscreenOut:V0,info:G0,menu:W0,zoomIn:$0,zoomOut:X0},Wr={linear:n=>n,inQuad:n=>n*n,outQuad:n=>n*(2-n),inOutQuad:n=>n<.5?2*n*n:-1+(4-2*n)*n,inCubic:n=>n*n*n,outCubic:n=>--n*n*n+1,inOutCubic:n=>n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1,inQuart:n=>n*n*n*n,outQuart:n=>1- --n*n*n*n,inOutQuart:n=>n<.5?8*n*n*n*n:1-8*--n*n*n*n,inQuint:n=>n*n*n*n*n,outQuint:n=>1+--n*n*n*n*n,inOutQuint:n=>n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n,inSine:n=>1-Math.cos(n*(Math.PI/2)),outSine:n=>Math.sin(n*(Math.PI/2)),inOutSine:n=>.5-.5*Math.cos(Math.PI*n),inExpo:n=>Math.pow(2,10*(n-1)),outExpo:n=>1-Math.pow(2,-10*n),inOutExpo:n=>(n=n*2-1)<0?.5*Math.pow(2,10*n):1-.5*Math.pow(2,-10*n),inCirc:n=>1-Math.sqrt(1-n*n),outCirc:n=>Math.sqrt(1-(n-1)*(n-1)),inOutCirc:n=>(n*=2)<1?.5-.5*Math.sqrt(1-n*n):.5+.5*Math.sqrt(1-(n-=2)*n)},Re={};Ma(Re,{Animation:()=>Qr,Dynamic:()=>ks,MultiDynamic:()=>vh,PressHandler:()=>eo,Slider:()=>yh,SliderDirection:()=>_h,addClasses:()=>ba,angle:()=>qc,applyEulerInverse:()=>Ua,checkClosedShadowDom:()=>mh,checkStylesheet:()=>ph,checkVersion:()=>Fa,cleanCssPosition:()=>dh,clone:()=>Yr,createTexture:()=>Na,cssPositionIsOrdered:()=>Ia,dasherize:()=>K0,deepEqual:()=>oh,deepmerge:()=>sh,distance:()=>Xc,exitFullscreen:()=>nh,firstNonNull:()=>Ln,getAbortError:()=>Pa,getAngle:()=>jc,getClosest:()=>Kc,getConfigParser:()=>Jr,getElement:()=>Zc,getEventTarget:()=>Xr,getMatchingTarget:()=>Jc,getPosition:()=>Qc,getShortestArc:()=>Yc,getStyleProperty:()=>Pn,getTouchData:()=>Ta,getXMPValue:()=>rn,greatArcDistance:()=>Y0,hasParent:()=>Z0,invertResolvableBoolean:()=>jr,isAbortError:()=>lh,isEmpty:()=>rh,isExtendedPosition:()=>La,isFullscreenEnabled:()=>eh,isNil:()=>Ut,isPlainObject:()=>Ca,keyPressMatch:()=>Aa,logWarn:()=>zt,mergePanoData:()=>gh,parseAngle:()=>In,parsePoint:()=>J0,parseSpeed:()=>uh,removeClasses:()=>j0,requestFullscreen:()=>th,resolveBoolean:()=>Ra,speedToDuration:()=>Da,sum:()=>q0,throttle:()=>ih,toggleClass:()=>$r,wrap:()=>Fs});function Fs(n,e){let t=n%e;return t<0&&(t+=e),t}function q0(n){return n.reduce((e,t)=>e+t,0)}function Xc(n,e){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function qc(n,e){return Math.atan2(e.y-n.y,e.x-n.x)}function Yc(n,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,s)=>{const r=e-n+s;return Math.abs(r)<Math.abs(i)?r:i},1/0)}function jc(n,e){return Math.acos(Math.cos(n.pitch)*Math.cos(e.pitch)*Math.cos(n.yaw-e.yaw)+Math.sin(n.pitch)*Math.sin(e.pitch))}function Y0([n,e],[t,i]){n-t>Math.PI?n-=2*Math.PI:n-t<-Math.PI&&(n+=2*Math.PI);const s=(t-n)*Math.cos((e+i)/2),r=i-e;return Math.sqrt(s*s+r*r)}function Zc(n){return typeof n=="string"?n.match(/^[a-z]/i)?document.getElementById(n):document.querySelector(n):n}function $r(n,e,t){t===void 0?n.classList.toggle(e):t?n.classList.add(e):t||n.classList.remove(e)}function ba(n,e){n.classList.add(...e.split(" ").filter(t=>!!t))}function j0(n,e){n.classList.remove(...e.split(" ").filter(t=>!!t))}function Z0(n,e){let t=n;do{if(t===e)return!0;t=t.parentElement}while(t);return!1}function Kc(n,e){if(!n?.matches)return null;let t=n;do{if(t.matches(e))return t;t=t.parentElement}while(t);return null}function Xr(n){return n?.composedPath()[0]||null}function Jc(n,e){return n?n.composedPath().find(t=>!(t instanceof HTMLElement)&&!(t instanceof SVGElement)?!1:t.matches(e)):null}function Qc(n){let e=0,t=0,i=n;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,t+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return e-=window.scrollX,t-=window.scrollY,{x:e,y:t}}function Pn(n,e){return window.getComputedStyle(n).getPropertyValue(e)}function Ta(n){if(n.touches.length<2)return null;const e={x:n.touches[0].clientX,y:n.touches[0].clientY},t={x:n.touches[1].clientX,y:n.touches[1].clientY};return{distance:Xc(e,t),angle:qc(e,t),center:{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}}var qr;function eh(n,e=!1){return e?n===qr:document.fullscreenElement===n}function th(n,e=!1){e?(qr=n,n.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):n.requestFullscreen()}function nh(n=!1){n?(qr.classList.remove("psv-fullscreen-emulation"),qr=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function Aa(n,e){let t,i=!1,s=!1,r=!1,o=!1;return e==="+"?t=e:e.split("+").forEach(a=>{switch(a){case"Shift":i=!0;break;case"Ctrl":s=!0;break;case"Alt":r=!0;break;case"Meta":o=!0;break;case"Space":t=" ";break;case"Plus":t="+";break;case"Minus":t="-";break;default:t=a;break}}),i===n.shiftKey&&s===n.ctrlKey&&r===n.altKey&&o===n.metaKey&&t===n.key}function K0(n){return n.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,t)=>(t>0?"-":"")+e.toLowerCase())}function ih(n,e){let t=!1;return function(...i){t||(t=!0,setTimeout(()=>{n.apply(this,i),t=!1},e))}}function Ca(n){if(typeof n!="object"||n===null||Object.prototype.toString.call(n)!=="[object Object]")return!1;if(Object.getPrototypeOf(n)===null)return!0;let e=n;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(n)===e}function sh(n,e){const t=e;return(function i(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((o,a)=>{s[a]=i(null,o)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(o=>{o!=="__proto__"&&(typeof r[o]!="object"||!r[o]||!Ca(r[o])?s[o]=r[o]:r[o]!==t&&(s[o]?i(s[o],r[o]):s[o]=i(null,r[o])))})):s=r,s})(n,e)}function Yr(n){return sh(null,n)}function rh(n){return!n||Object.keys(n).length===0&&n.constructor===Object}function Ut(n){return n==null}function Ln(...n){for(const e of n)if(!Ut(e))return e;return null}function oh(n,e){if(n===e)return!0;if(ah(n)&&ah(e)){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t of Object.keys(n))if(!oh(n[t],e[t]))return!1;return!0}else return!1}function ah(n){return typeof n=="object"&&n!==null}var Se=class Rf extends Error{constructor(e,t){super(t&&t instanceof Error?`${e}: ${t.message}`:e),this.name="PSVError",Error.captureStackTrace?.(this,Rf)}};function Ra(n,e){Ca(n)?(e(n.initial,!0),n.promise.then(t=>e(t,!1))):e(n,!0)}function jr(n){return{initial:!n.initial,promise:n.promise.then(e=>!e)}}function Pa(){const n=new Error("Loading was aborted.");return n.name="AbortError",n}function lh(n){return n?.name==="AbortError"}function zt(n){console.warn(`PhotoSphereViewer: ${n}`)}function La(n){return!n||Array.isArray(n)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,t])=>n[e]!==void 0&&n[t]!==void 0)}function rn(n,e,t=!0){let i=n.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(i!==null){const s=t?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}if(i=n.match("GPano:"+e+'="(.*?)"'),i!==null){const s=t?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}return null}var ch={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zr=["left","center","right"],Kr=["top","center","bottom"],hh=[...Zr,...Kr],hn="center";function J0(n){if(!n)return{x:.5,y:.5};if(typeof n=="object")return n;let e=n.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(ch[e[0]]?e=[e[0],hn]:e=[e[0],e[0]]);const t=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>ch[s]||s),t||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function dh(n,{allowCenter:e,cssOrder:t}={allowCenter:!0,cssOrder:!0}){return n?(typeof n=="string"&&(n=n.split(" ")),n.length===1&&(n[0]===hn?n=[hn,hn]:Zr.indexOf(n[0])!==-1?n=[hn,n[0]]:Kr.indexOf(n[0])!==-1&&(n=[n[0],hn])),n.length!==2||hh.indexOf(n[0])===-1||hh.indexOf(n[1])===-1?(zt(`Unparsable position ${n}`),null):!e&&n[0]===hn&&n[1]===hn?(zt("Invalid position center center"),null):(t&&!Ia(n)&&(n=[n[1],n[0]]),n[1]===hn&&Zr.indexOf(n[0])!==-1&&(n=[hn,n[0]]),n[0]===hn&&Kr.indexOf(n[1])!==-1&&(n=[n[1],hn]),n)):null}function Ia(n){return Kr.indexOf(n[0])!==-1&&Zr.indexOf(n[1])!==-1}function uh(n){let e;if(typeof n=="string"){const t=n.toString().trim();let i=parseFloat(t.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=t.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(i/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=it.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new Se(`Unknown speed unit "${s}"`)}}else e=n;return e}function Da(n,e){if(typeof n!="number"){const t=uh(n);return e/Math.abs(t)*1e3}else return Math.abs(n)}function In(n,e=!1,t=e){let i;if(typeof n=="string"){const s=n.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new Se(`Unknown angle "${n}"`);const r=parseFloat(s[1]),o=s[2];if(o)switch(o){case"deg":case"degs":i=it.degToRad(r);break;case"rad":case"rads":i=r;break;default:throw new Se(`Unknown angle unit "${o}"`)}else i=r}else if(typeof n=="number"&&!isNaN(n))i=n;else throw new Se(`Unknown angle "${n}"`);return i=Fs(e?i+Math.PI:i,Math.PI*2),e?it.clamp(i-Math.PI,-Math.PI/(t?2:1),Math.PI/(t?2:1)):i}function Na(n,e=!1){const t=new kt(n);return t.needsUpdate=!0,t.minFilter=e?1008:1006,t.generateMipmaps=e,t.anisotropy=e?2:1,t}var fh=new Kn;function Ua(n,e){fh.setFromEuler(e).invert(),n.applyQuaternion(fh)}function Jr(n,e){const t=function(i){const s=Yr({...n,...i}),r={};for(let[o,a]of Object.entries(s)){if(e&&o in e)a=e[o](a,{rawConfig:s,defValue:n[o]});else if(!(o in n)){zt(`Unknown option ${o}`);continue}r[o]=a}return r};return t.defaults=n,t.parsers=e||{},t}function ph(n,e){Pn(n,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function Fa(n,e,t){e&&e!==t&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${n} is in version ${e} but @photo-sphere-viewer/core is in version ${t}`)}function mh(n){do{if(n instanceof ShadowRoot&&n.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}n=n.parentNode}while(n)}function gh(n,e,t,i){const s={isEquirectangular:!0,fullWidth:Ln(t?.fullWidth,i?.fullWidth),fullHeight:Ln(t?.fullHeight,i?.fullHeight),croppedWidth:Ln(t?.croppedWidth,i?.croppedWidth,n),croppedHeight:Ln(t?.croppedHeight,i?.croppedHeight,e),croppedX:Ln(t?.croppedX,i?.croppedX),croppedY:Ln(t?.croppedY,i?.croppedY),poseHeading:Ln(t?.poseHeading,i?.poseHeading,0),posePitch:Ln(t?.posePitch,i?.posePitch,0),poseRoll:Ln(t?.poseRoll,i?.poseRoll,0),initialHeading:i?.initialHeading,initialPitch:i?.initialPitch,initialFov:i?.initialFov};if(s.croppedWidth!==n){const r=n/s.croppedWidth;["fullWidth","fullHeight","croppedWidth","croppedHeight","croppedX","croppedY"].forEach(o=>{s[o]&&(s[o]=Math.round(s[o]*r))})}return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(s.croppedWidth,s.croppedHeight*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-n)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-e)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(zt("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(zt("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(zt("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(zt("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(zt("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var Qr=class{constructor(e){this.easing=Wr.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=e,e?(e.easing&&(this.easing=typeof e.easing=="function"?e.easing:Wr[e.easing]||Wr.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(t=>this.__run(t))},e.delay||0)):this.resolved=!0}__run(e){if(this.cancelled)return;this.start||(this.start=e);const t=(e-this.start)/this.options.duration,i={};if(t<1){for(const[s,r]of Object.entries(this.options.properties))if(r){const o=r.start+(r.end-r.start)*this.easing(t);i[s]=o}this.options.onTick(i,t),this.animationFrame=window.requestAnimationFrame(s=>this.__run(s))}else{for(const[s,r]of Object.entries(this.options.properties))r&&(i[s]=r.end);this.options.onTick(i,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(e){e?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(t=>t(e)),this.callbacks.length=0}then(e){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(e):new Promise(t=>{this.callbacks.push(t)}).then(e)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},ks=class{constructor(n,e){if(this.fn=n,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new Se("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(n){this.__current=n}setSpeed(n){this.speed=n}goto(n,e=1){this.mode=2,this.target=this.wrap?Fs(n,this.max):it.clamp(n,this.min,this.max),this.speedMult=e}step(n,e=1){e===0?this.setValue(this.current+n):(this.mode!==2&&(this.target=this.current),this.goto(this.target+n,e))}roll(n=!1,e=1){this.mode=1,this.target=n?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(n){return this.target=this.wrap?Fs(n,this.max):it.clamp(n,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(n){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+n/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-n/1e3*this.speed*this.speedMult*2));let t=null;return this.current>this.target&&this.currentSpeed?t=Math.max(this.target,this.current+this.currentSpeed*n/1e3):this.current<this.target&&this.currentSpeed&&(t=Math.min(this.target,this.current+this.currentSpeed*n/1e3)),t!==null&&(t=this.wrap?Fs(t,this.max):it.clamp(t,this.min,this.max),t!==this.current)?(this.current=t,this.fn&&this.fn(this.current),!0):!1}},vh=class{constructor(n,e){this.fn=n,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((n,[e,t])=>(n[e]=t.current,n),{})}setSpeed(n){for(const e of Object.values(this.dynamics))e.setSpeed(n)}goto(n,e=1){for(const[t,i]of Object.entries(n))this.dynamics[t].goto(i,e)}step(n,e=1){if(e===0)this.setValue(Object.keys(n).reduce((t,i)=>(t[i]=n[i]+this.dynamics[i].current,t),{}));else for(const[t,i]of Object.entries(n))this.dynamics[t].step(i,e)}roll(n,e=1){for(const[t,i]of Object.entries(n))this.dynamics[t].roll(i,e)}stop(){for(const n of Object.values(this.dynamics))n.stop()}setValue(n){let e=!1;for(const[t,i]of Object.entries(n))e=this.dynamics[t].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(n){let e=!1;for(const t of Object.values(this.dynamics))e=t.update(n)||e;return e&&this.fn&&this.fn(this.current),e}},eo=class{constructor(n=200){this.delay=n,this.time=0,this.delay=n}get pending(){return this.time!==0}down(n){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=n}up(n){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{n(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(n(this.data),this.time=0,this.data=void 0)}},_h=(n=>(n.VERTICAL="VERTICAL",n.HORIZONTAL="HORIZONTAL",n))(_h||{}),yh=class{constructor(n,e,t){this.container=n,this.direction=e,this.listener=t,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(n){switch(n.type){case"click":n.stopPropagation();break;case"mousedown":this.__onMouseDown(n);break;case"mouseenter":this.__onMouseEnter(n);break;case"mouseleave":this.__onMouseLeave(n);break;case"touchstart":this.__onTouchStart(n);break;case"mousemove":this.__onMouseMove(n);break;case"touchmove":this.__onTouchMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchend":this.__onTouchEnd(n);break}}__onMouseDown(n){this.mousedown=!0,this.__update(n.clientX,n.clientY,!0)}__onMouseEnter(n){this.mouseover=!0,this.__update(n.clientX,n.clientY,!0)}__onTouchStart(n){this.mouseover=!0,this.mousedown=!0;const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(n){(this.mousedown||this.mouseover)&&(n.stopPropagation(),this.__update(n.clientX,n.clientY,!0))}__onTouchMove(n){if(this.mousedown||this.mouseover){n.stopPropagation();const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(n){this.mousedown&&(this.mousedown=!1,this.__update(n.clientX,n.clientY,!1))}__onMouseLeave(n){this.mouseover&&(this.mouseover=!1,this.__update(n.clientX,n.clientY,!0))}__onTouchEnd(n){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(n,e,t){const i=this.container.getBoundingClientRect();let s;this.isVertical?s=it.clamp((i.bottom-e)/i.height,0,1):s=it.clamp((n-i.left)/i.width,0,1),this.listener({value:s,click:!t,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:n,clientY:e}})}},Ne={};Ma(Ne,{BeforeAnimateEvent:()=>ka,BeforeRenderEvent:()=>Bs,BeforeRotateEvent:()=>Sh,ClickEvent:()=>Th,ConfigChangedEvent:()=>Zt,DoubleClickEvent:()=>Rh,FullscreenEvent:()=>zs,HideNotificationEvent:()=>Hs,HideOverlayEvent:()=>Dh,HidePanelEvent:()=>ci,HideTooltipEvent:()=>Fh,KeypressEvent:()=>hi,LoadProgressEvent:()=>Bh,ObjectEnterEvent:()=>ld,ObjectEvent:()=>to,ObjectHoverEvent:()=>dd,ObjectLeaveEvent:()=>Oa,PanoramaErrorEvent:()=>Wh,PanoramaLoadEvent:()=>Hh,PanoramaLoadedEvent:()=>hs,PositionUpdatedEvent:()=>Vs,ReadyEvent:()=>Ws,RenderEvent:()=>Kh,RollUpdatedEvent:()=>Gs,ShowNotificationEvent:()=>$s,ShowOverlayEvent:()=>ed,ShowPanelEvent:()=>di,ShowTooltipEvent:()=>id,SizeUpdatedEvent:()=>Xs,StopAllEvent:()=>qs,TransitionDoneEvent:()=>Xh,ViewerEvent:()=>mt,ZoomUpdatedEvent:()=>Xn});var Os=class extends Event{constructor(n,e=!1){super(n,{cancelable:e})}},xh=class extends EventTarget{dispatchEvent(n){return super.dispatchEvent(n)}addEventListener(n,e,t){super.addEventListener(n,e,t)}removeEventListener(n,e,t){super.removeEventListener(n,e,t)}},mt=class extends Os{},Eh=class Pf extends mt{constructor(e,t){super(Pf.type,!0),this.position=e,this.zoomLevel=t}};Eh.type="before-animate";var ka=Eh,wh=class Lf extends mt{constructor(e,t){super(Lf.type),this.timestamp=e,this.elapsed=t}};wh.type="before-render";var Bs=wh,Mh=class If extends mt{constructor(e){super(If.type,!0),this.position=e}};Mh.type="before-rotate";var Sh=Mh,bh=class Df extends mt{constructor(e){super(Df.type),this.data=e}};bh.type="click";var Th=bh,Ah=class Nf extends mt{constructor(e){super(Nf.type),this.options=e}containsOptions(...e){return e.some(t=>this.options.includes(t))}};Ah.type="config-changed";var Zt=Ah,Ch=class Uf extends mt{constructor(e){super(Uf.type),this.data=e}};Ch.type="dblclick";var Rh=Ch,Ph=class Ff extends mt{constructor(e){super(Ff.type),this.fullscreenEnabled=e}};Ph.type="fullscreen";var zs=Ph,Lh=class kf extends mt{constructor(e){super(kf.type),this.notificationId=e}};Lh.type="hide-notification";var Hs=Lh,Ih=class Of extends mt{constructor(e){super(Of.type),this.overlayId=e}};Ih.type="hide-overlay";var Dh=Ih,Nh=class Bf extends mt{constructor(e){super(Bf.type),this.panelId=e}};Nh.type="hide-panel";var ci=Nh,Uh=class zf extends mt{constructor(e){super(zf.type),this.tooltipData=e}};Uh.type="hide-tooltip";var Fh=Uh,kh=class Hf extends mt{constructor(e,t){super(Hf.type,!0),this.key=e,this.originalEvent=t}matches(e){return Aa(this.originalEvent,e)}};kh.type="key-press";var hi=kh,Oh=class Vf extends mt{constructor(e){super(Vf.type),this.progress=e}};Oh.type="load-progress";var Bh=Oh,zh=class Gf extends mt{constructor(e){super(Gf.type),this.panorama=e}};zh.type="panorama-load";var Hh=zh,Vh=class Wf extends mt{constructor(e){super(Wf.type),this.data=e}};Vh.type="panorama-loaded";var hs=Vh,Gh=class $f extends mt{constructor(e,t){super($f.type),this.panorama=e,this.error=t}};Gh.type="panorama-error";var Wh=Gh,$h=class Xf extends mt{constructor(e){super(Xf.type),this.completed=e}};$h.type="transition-done";var Xh=$h,qh=class qf extends mt{constructor(e){super(qf.type),this.position=e}};qh.type="position-updated";var Vs=qh,Yh=class Yf extends mt{constructor(e){super(Yf.type),this.roll=e}};Yh.type="roll-updated";var Gs=Yh,jh=class jf extends mt{constructor(){super(jf.type)}};jh.type="ready";var Ws=jh,Zh=class Zf extends mt{constructor(){super(Zf.type)}};Zh.type="render";var Kh=Zh,Jh=class Kf extends mt{constructor(e){super(Kf.type),this.notificationId=e}};Jh.type="show-notification";var $s=Jh,Qh=class Jf extends mt{constructor(e){super(Jf.type),this.overlayId=e}};Qh.type="show-overlay";var ed=Qh,td=class Qf extends mt{constructor(e){super(Qf.type),this.panelId=e}};td.type="show-panel";var di=td,nd=class ep extends mt{constructor(e,t){super(ep.type),this.tooltip=e,this.tooltipData=t}};nd.type="show-tooltip";var id=nd,sd=class tp extends mt{constructor(e){super(tp.type),this.size=e}};sd.type="size-updated";var Xs=sd,rd=class np extends mt{constructor(){super(np.type)}};rd.type="stop-all";var qs=rd,od=class ip extends mt{constructor(e){super(ip.type),this.zoomLevel=e}};od.type="zoom-updated";var Xn=od,to=class extends mt{constructor(n,e,t,i,s){super(n),this.originalEvent=e,this.object=t,this.viewerPoint=i,this.userDataKey=s}},ad=class sp extends to{constructor(e,t,i,s){super(sp.type,e,t,i,s)}};ad.type="enter-object";var ld=ad,cd=class rp extends to{constructor(e,t,i,s){super(rp.type,e,t,i,s)}};cd.type="leave-object";var Oa=cd,hd=class op extends to{constructor(e,t,i,s){super(op.type,e,t,i,s)}};hd.type="hover-object";var dd=hd,no=class{constructor(n){this.viewer=n}init(){}destroy(){}supportsTransition(n){return!1}supportsPreload(n){return!1}textureCoordsToSphericalCoords(n,e){throw new Se("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(n,e){throw new Se("Current adapter does not support texture coordinates.")}};no.supportsDownload=!1;function ud(n){if(n){for(const[,e]of[["_",n],...Object.entries(n)])if(e.prototype instanceof no)return Fa(e.id,e.VERSION,"5.14.1"),e}return null}var Ys=`${li}_touchSupport`,qt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=ty(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const n=Q0();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!n,this.maxTextureWidth=n?n.getParameter(n.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=ey(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!qt.isWebGLSupported)throw new Se("WebGL 2 is not supported.");if(qt.maxTextureWidth===0)throw new Se("Unable to detect system capabilities")}};function Q0(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function ey(){let n="ontouchstart"in window||navigator.maxTouchPoints>0;Ys in localStorage&&(n=localStorage[Ys]==="true");const e=new Promise(t=>{const i=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(a)},s=()=>{i(),localStorage[Ys]=!1,t(!1)},r=()=>{i(),localStorage[Ys]=!0,t(!0)},o=()=>{i(),localStorage[Ys]=n,t(n)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const a=setTimeout(o,1e4)});return{initial:n,promise:e}}function ty(n){let e=n,t=!1;const i=document.createElement("canvas"),s=i.getContext("2d");for(i.width=1,i.height=1;e>1024&&!t;){const r=document.createElement("canvas"),o=r.getContext("2d");r.width=e,r.height=e/2;try{o.fillStyle="white",o.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(t=!0)}catch{}r.width=0,r.height=0,t||(e/=2)}if(t)return e;throw new Se("Unable to detect system capabilities")}var ny=Jr({resolution:64,useXmpData:!0,blur:!1},{resolution:n=>{if(!n||!it.isPowerOfTwo(n))throw new Se("EquirectangularAdapter resolution must be power of two.");return n}}),io=class ap extends no{static withConfig(e){return[ap,e]}constructor(e,t){super(e),this.config=ny(t),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(e,t){if(Ut(e.textureX)||Ut(e.textureY))throw new Se("Texture position is missing 'textureX' or 'textureY'");const i=(e.textureX+t.croppedX)/t.fullWidth*Math.PI*2,s=(e.textureY+t.croppedY)/t.fullHeight*Math.PI;return{yaw:i>=Math.PI?i-Math.PI:i+Math.PI,pitch:Math.PI/2-s}}sphericalCoordsToTextureCoords(e,t){const i=e.yaw/Math.PI/2*t.fullWidth,s=e.pitch/Math.PI*t.fullHeight;let r=Math.round(e.yaw<Math.PI?i+t.fullWidth/2:i-t.fullWidth/2)-t.croppedX,o=Math.round(t.fullHeight/2-s)-t.croppedY;return(r<0||r>t.croppedWidth||o<0||o>t.croppedHeight)&&(r=o=void 0),{textureX:r,textureY:o}}async loadTexture(e,t=!0,i,s=this.config.useXmpData){if(typeof e!="string"&&(typeof e!="object"||!e.path))return Promise.reject(new Se("Invalid panorama url, are you using the right adapter?"));let r;typeof e=="string"?r={path:e,data:i}:r={data:i,...e};const o=await this.viewer.textureLoader.loadFile(r.path,t?d=>this.viewer.textureLoader.dispatchProgress(d):null,r.path),a=s?await this.loadXMP(o):null,l=await this.viewer.textureLoader.blobToImage(o);typeof r.data=="function"&&(r.data=r.data(l,a));const c=gh(l.width,l.height,r.data,a),h=this.createEquirectangularTexture(l);return{panorama:e,texture:h,panoData:c,cacheKey:r.path}}async loadXMP(e){const t=await this.loadBlobAsString(e),i=t.indexOf("<x:xmpmeta");if(i===-1)return null;const s=t.indexOf("</x:xmpmeta>",i);if(s===-1)return null;const r=t.substring(i,s);return r.includes("GPano:")?{fullWidth:rn(r,"FullPanoWidthPixels"),fullHeight:rn(r,"FullPanoHeightPixels"),croppedWidth:rn(r,"CroppedAreaImageWidthPixels"),croppedHeight:rn(r,"CroppedAreaImageHeightPixels"),croppedX:rn(r,"CroppedAreaLeftPixels"),croppedY:rn(r,"CroppedAreaTopPixels"),poseHeading:rn(r,"PoseHeadingDegrees",!1),posePitch:rn(r,"PosePitchDegrees",!1),poseRoll:rn(r,"PoseRollDegrees",!1),initialHeading:rn(r,"InitialViewHeadingDegrees",!1),initialPitch:rn(r,"InitialViewPitchDegrees",!1),initialFov:rn(r,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(e){return new Promise((t,i)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=i,s.readAsText(e)})}createEquirectangularTexture(e){if(this.config.blur||e.width>qt.maxTextureWidth){const t=Math.min(1,qt.maxCanvasWidth/e.width),i=new OffscreenCanvas(Math.floor(e.width*t),Math.floor(e.height*t)),s=i.getContext("2d");return this.config.blur&&(s.filter=`blur(${i.width/2048}px)`),s.drawImage(e,0,0,i.width,i.height),Na(i)}return Na(e)}createMesh(e){const t=e.croppedX/e.fullWidth*2*Math.PI,i=e.croppedWidth/e.fullWidth*2*Math.PI,s=e.croppedY/e.fullHeight*Math.PI,r=e.croppedHeight/e.fullHeight*Math.PI,o=new ss(Ai,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*i),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*r),-Math.PI/2+t,i,s,r).scale(-1,1,1),a=new si({depthTest:!1,depthWrite:!1});return new jt(o,a)}setTexture(e,t){e.material.map=t.texture}setTextureOpacity(e,t){e.material.opacity=t,e.material.transparent=t<1}disposeTexture({texture:e}){e.dispose()}disposeMesh(e){e.geometry.dispose(),e.material.dispose()}};io.id="equirectangular",io.VERSION="5.14.1",io.supportsDownload=!0;var Ba=io,fd=class lp extends Ba{static withConfig(e){return[lp,e]}constructor(e,t){super(e,{resolution:t?.resolution??64,useXmpData:!1})}async loadTexture(e,t){const i=await super.loadTexture(e,t,null,!1);return i.panoData=null,i}createMesh(){const e=new ss(Ai,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),t=e.getAttribute("uv"),i=e.getAttribute("normal");for(let r=0;r<t.count;r++)for(let o=0;o<3;o++){const a=r*3+o,l=i.getX(a),c=i.getY(a),h=i.getZ(a),d=.947;if(r<t.count/6){const f=l===0&&h===0?1:Math.acos(c)/Math.sqrt(l*l+h*h)*(2/Math.PI);t.setXY(a,l*(d/4)*f+1/4,h*(d/2)*f+1/2)}else{const f=l===0&&h===0?1:Math.acos(-c)/Math.sqrt(l*l+h*h)*(2/Math.PI);t.setXY(a,-l*(d/4)*f+3/4,h*(d/2)*f+1/2)}}e.rotateX(-Math.PI/2),e.rotateY(Math.PI);const s=new si({depthTest:!1,depthWrite:!1});return new jt(e,s)}};fd.id="dual-fisheye",fd.VERSION="5.14.1";var ui=class cp{constructor(e,t){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof cp?e.viewer:e,this.container=document.createElement(t.tagName??"div"),this.container.className=t.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(t=>t.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},iy=Jr({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),Yt=class extends ui{constructor(n,e){super(n,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=iy(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",t=>{this.state.enabled&&this.onClick(),t.stopPropagation()}),this.container.addEventListener("keydown",t=>{t.key===Nt.Enter&&this.state.enabled&&(this.onClick(),t.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(n=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),n&&this.viewer.navbar.autoSize())}hide(n=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",n&&this.viewer.navbar.autoSize())}checkSupported(){Ra(this.isSupported(),(n,e)=>{this.state&&(this.state.supported=n,e?n||this.hide():this.toggle(n))})}autoSize(){}isSupported(){return!0}toggleActive(n=!this.state.active){n!==this.state.active&&(this.state.active=n,$r(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(n){this.container.innerHTML=n,ba(this.container.querySelector("svg"),"psv-button-svg")}},sy=class extends Yt{constructor(n,e){super(n,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",e.content.attachViewer?.(this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){this.customOnClick?.(this.viewer)}},js=class extends Yt{constructor(n){super(n,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:wn.info}),this.mode=0,this.viewer.addEventListener(Hs.type,this),this.viewer.addEventListener($s.type,this),this.viewer.addEventListener(ci.type,this),this.viewer.addEventListener(di.type,this),this.viewer.addEventListener(Zt.type,this)}destroy(){this.viewer.removeEventListener(Hs.type,this),this.viewer.removeEventListener($s.type,this),this.viewer.removeEventListener(ci.type,this),this.viewer.removeEventListener(di.type,this),this.viewer.removeEventListener(Zt.type,this),super.destroy()}handleEvent(n){if(n instanceof Zt){n.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;n instanceof Hs?e=this.mode===1:n instanceof $s?e=this.mode===1&&n.notificationId!==Bt.DESCRIPTION:n instanceof ci?e=this.mode===2:n instanceof di&&(e=this.mode===2&&n.panelId!==Bt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(n){super.hide(n),this.mode&&this.__close()}autoSize(n=!1){if(n){const e=this.viewer.navbar.getButton("caption",!1),t=e&&!e.isVisible(),i=!!this.viewer.config.description;t||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(Bt.DESCRIPTION);break;case 2:this.viewer.panel.hide(Bt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:Bt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:Bt.DESCRIPTION,content:this.viewer.config.caption}))}};js.id="description";var pd=class extends Yt{constructor(n){super(n,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:wn.download}),this.viewer.addEventListener(Zt.type,this),this.viewer.addEventListener(hs.type,this)}destroy(){this.viewer.removeEventListener(Zt.type,this),this.viewer.removeEventListener(hs.type,this),super.destroy()}handleEvent(n){n instanceof Zt?(n.containsOptions("downloadUrl")&&this.checkSupported(),n.containsOptions("downloadUrl","downloadName")&&this.__update()):n instanceof hs&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const n=this.container;n.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,n.target="_blank",n.href.startsWith("data:")&&!this.viewer.config.downloadName?n.download="panorama."+n.href.substring(0,n.href.indexOf(";")).split("/").pop():n.download=this.viewer.config.downloadName||n.href.split("/").pop()}};pd.id="download";var md=class extends Yt{constructor(n){super(n,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:wn.fullscreenIn,iconActive:wn.fullscreenOut}),this.viewer.addEventListener(zs.type,this)}destroy(){this.viewer.removeEventListener(zs.type,this),super.destroy()}handleEvent(n){n instanceof zs&&this.toggleActive(n.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};md.id="fullscreen";var ry="psvButton",oy=(n,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${wn.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${n.map(t=>`
    <li data-psv-button="${t.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${t.content}</span>
      <span class="psv-panel-menu-item-label">${t.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,so=class extends Yt{constructor(n){super(n,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:wn.menu}),this.viewer.addEventListener(di.type,this),this.viewer.addEventListener(ci.type,this),super.hide()}destroy(){this.viewer.removeEventListener(di.type,this),this.viewer.removeEventListener(ci.type,this),super.destroy()}handleEvent(n){n instanceof di?this.toggleActive(n.panelId===Bt.MENU):n instanceof ci&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(n){super.hide(n),this.__hideMenu()}show(n){super.show(n),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:Bt.MENU,content:oy(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:n=>{const e=n?Kc(n,".psv-panel-menu-item"):void 0,t=e?e.dataset[ry]:void 0;t&&(this.viewer.navbar.getButton(t).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(Bt.MENU)}};so.id="menu";function ay(n){let e=0;switch(n){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return wn.arrow.replace("rotate(0",`rotate(${e}`)}var Zs=class extends Yt{constructor(n,e){super(n,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:ay(e)}),this.direction=e,this.handler=new eo,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":n.key===Nt.Enter&&this.__onMouseDown();break;case"keyup":n.key===Nt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return jr(qt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const n={};switch(this.direction){case 0:n.pitch=!1;break;case 1:n.pitch=!0;break;case 3:n.yaw=!1;break;default:n.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(n),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Zs.groupId="move";var gd=class extends Zs{constructor(n){super(n,1)}};gd.id="moveDown";var vd=class extends Zs{constructor(n){super(n,2)}};vd.id="moveLeft";var _d=class extends Zs{constructor(n){super(n,3)}};_d.id="moveRight";var yd=class extends Zs{constructor(n){super(n,0)}};yd.id="moveUp";var za=class extends Yt{constructor(n,e,t){super(n,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=t,this.handler=new eo,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":n.key===Nt.Enter&&this.__onMouseDown();break;case"keyup":n.key===Nt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return jr(qt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};za.groupId="zoom";var xd=class extends za{constructor(n){super(n,wn.zoomIn,0)}};xd.id="zoomIn";var Ed=class extends za{constructor(n){super(n,wn.zoomOut,1)}};Ed.id="zoomOut";var Ha=class extends Yt{constructor(n){super(n,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new yh(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(Pn(this.container,"max-width"),10),this.viewer.addEventListener(Xn.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(Ws.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(Xn.type,this),this.viewer.removeEventListener(Ws.type,this),super.destroy()}handleEvent(n){n instanceof Xn?this.__moveZoomValue(n.zoomLevel):n instanceof Ws&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return jr(qt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(n){this.zoomValue.style.left=n/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(n){n.mousedown&&this.viewer.zoom(n.value*100)}};Ha.id="zoomRange",Ha.groupId="zoom";var wd=class extends xh{constructor(n){super(),this.viewer=n}init(){}destroy(){}},Va=class extends wd{constructor(n,e){super(n),this.config=this.constructor.configParser(e)}setOption(n,e){this.setOptions({[n]:e})}setOptions(n){const e={...this.config,...n},t=this.constructor,i=t.configParser,s=t.readonlyOptions,r=t.id;for(let[o,a]of Object.entries(n)){if(!(o in i.defaults)){zt(`${r}: Unknown option "${o}"`);continue}if(s.includes(o)){zt(`${r}: Option "${o}" cannot be updated`);continue}o in i.parsers&&(a=i.parsers[o](a,{rawConfig:e,defValue:i.defaults[o]})),this.config[o]=a}}};Va.readonlyOptions=[];function Ga(n){if(n){for(const[,e]of[["_",n],...Object.entries(n)])if(e.prototype instanceof wd)return Fa(e.id,e.VERSION,"5.14.1"),e}return null}var qn={panorama:null,container:null,adapter:[Ba,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[Nt.ArrowUp]:"ROTATE_UP",[Nt.ArrowDown]:"ROTATE_DOWN",[Nt.ArrowRight]:"ROTATE_RIGHT",[Nt.ArrowLeft]:"ROTATE_LEFT",[Nt.PageUp]:"ZOOM_IN",[Nt.PageDown]:"ZOOM_OUT",[Nt.Plus]:"ZOOM_IN",[Nt.Minus]:"ZOOM_OUT"}},Md={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Wa={container:n=>{if(!n)throw new Se("No value given for container.");return n},adapter:(n,{defValue:e})=>{if(n?Array.isArray(n)?n=[ud(n[0]),n[1]]:n=[ud(n),null]:n=e,!n[0])throw new Se("An undefined value was given for adapter.");if(!n[0].id)throw new Se("Adapter has no id.");return n},defaultYaw:n=>In(n),defaultPitch:n=>In(n,!0),defaultZoomLvl:n=>it.clamp(n,0,100),minFov:(n,{rawConfig:e})=>(e.maxFov<n&&(zt("maxFov cannot be lower than minFov"),n=e.maxFov),it.clamp(n,1,179)),maxFov:(n,{rawConfig:e})=>(n<e.minFov&&(n=e.minFov),it.clamp(n,1,179)),moveInertia:(n,{defValue:e})=>n===!0?e:n===!1?0:n,lang:n=>({...qn.lang,...n}),fisheye:n=>n===!0?1:n===!1?0:n,requestHeaders:n=>n&&typeof n=="object"?()=>n:typeof n=="function"?n:null,withCredentials:n=>typeof n=="boolean"?()=>n:typeof n=="function"?n:()=>!1,defaultTransition:(n,{defValue:e})=>n===null||n.speed===0?null:{...e,...n},rendererParameters:(n,{defValue:e})=>({...n,...e}),plugins:n=>n.map((e,t)=>{if(Array.isArray(e)?e=[Ga(e[0]),e[1]]:e=[Ga(e),null],!e[0])throw new Se(`An undefined value was given for plugin ${t}.`);if(!e[0].id)throw new Se(`Plugin ${t} has no id.`);return e}),navbar:n=>n===!1?null:n===!0?Yr(qn.navbar):typeof n=="string"?n.split(/[ ,]/):n},ly=Jr(qn,Wa),ds=class extends Yt{constructor(n){super(n,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(n){this.show(),this.contentElt.innerHTML=n??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){this.viewer.navbar.getButton(js.id,!1)?.autoSize(!0)}};ds.id="caption";var $a={},ro={};function Xa(n,e){if(!n.id)throw new Se("Button id is required");if($a[n.id]=n,n.groupId&&(ro[n.groupId]=ro[n.groupId]||[]).push(n),e){const t=qn.navbar;switch(e){case"start":t.unshift(n.id);break;case"end":t.push(n.id);break;default:{const[i,s]=e.split(":"),r=t.indexOf(i);if(!i||!s||r===-1)throw new Se(`Invalid defaultPosition ${e}`);t.splice(r+(s==="right"?1:0),0,n.id)}}}}[Ed,Ha,xd,js,ds,pd,md,vd,_d,yd,gd].forEach(n=>Xa(n));var cy=class extends ui{constructor(n){super(n,{className:`psv-navbar ${Us}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(n){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,n.indexOf(ds.id)!==-1&&n.indexOf(js.id)===-1&&n.splice(n.indexOf(ds.id),0,js.id),n.forEach(e=>{typeof e=="object"?new sy(this,e):$a[e]?new $a[e](this):ro[e]?ro[e].forEach(t=>{new t(this)}):zt(`Unknown button ${e}`)}),new so(this),this.children.forEach(e=>{e instanceof Yt&&e.checkSupported()}),this.autoSize()}setCaption(n){this.children.some(e=>e instanceof ds?(e.setCaption(n),!0):!1)}getButton(n,e=!0){const t=this.children.find(i=>i instanceof Yt&&i.id===n);return!t&&e&&zt(`button "${n}" not found in the navbar`),t}focusButton(n){this.isVisible()&&(this.getButton(n,!1)?.container||this.container.firstElementChild)?.focus()}autoSize(){this.children.forEach(i=>{i instanceof Yt&&i.autoSize()});const n=this.container.offsetWidth;let e=0;const t=[];this.children.forEach(i=>{i.isVisible()&&i instanceof Yt&&(e+=i.width,i.collapsable&&t.push(i))}),e!==0&&(n<e&&t.length>0?(t.forEach(i=>i.collapse()),this.collapsed=t,this.getButton(so.id).show(!1)):n>=e&&this.collapsed.length>0&&(this.collapsed.forEach(i=>i.uncollapse()),this.collapsed=[],this.getButton(so.id).hide(!1)),this.getButton(ds.id,!1)?.autoSize())}};ai.enabled=!1;var us={enabled:!0,maxItems:10,ttl:600,items:{},purgeInterval:null,init(){ai.enabled&&(zt("ThreeJS cache should be disabled"),ai.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(n,e,t){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[n]=t,this.items[e].lastAccess=Date.now())},get(n,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[n]},remove(n,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[n],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,n],[,e])=>e.lastAccess-n.lastAccess).forEach(([n,{lastAccess:e}],t)=>{t>0&&(Date.now()-e>=this.ttl*1e3||t>=this.maxItems)&&delete this.items[n]})}},hy=class extends ui{constructor(n){super(n,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=Pn(this.loader,"color"),this.color=Pn(this.canvas,"color"),this.border=parseInt(Pn(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(Pn(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(Zt.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Zt.type,this),super.destroy()}handleEvent(n){n instanceof Zt&&n.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(n){this.container.classList.remove("psv-loader--undefined");const e=it.clamp(n,0,99.999)/100*Math.PI*2,t=this.size/2,i=t,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,o=Math.sin(e)*r+t,a=-Math.cos(e)*r+t,l=n>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${i} ${s} A ${r} ${r} 0 ${l} 1 ${o} ${a}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const n=this.loader.querySelector(".psv-loader-image, .psv-loader-text");n&&this.loader.removeChild(n);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const t=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=t+"px",e.style.maxHeight=t+"px",this.loader.appendChild(e)}}},dy=class extends ui{constructor(n){super(n,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new Se("Notification cannot be toggled")}show(n){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof n=="string"&&(n={content:n}),this.state.contentId=n.id||null,this.content.innerHTML=n.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new $s(this.state.contentId)),n.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),n.timeout))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new Hs(e))}}},uy=class extends ui{constructor(n){super(n,{className:`psv-overlay ${Us}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(hi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(hi.type,this),super.destroy()}handleEvent(n){n.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),n.stopPropagation()):n instanceof hi&&this.isVisible()&&this.state.dismissible&&n.matches(Nt.Escape)&&(this.hide(),n.preventDefault())}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new Se("Overlay cannot be toggled")}show(n){typeof n=="string"&&(n={title:n}),this.state.contentId=n.id||null,this.state.dismissible=n.dismissible!==!1,this.image.innerHTML=n.image||"",this.title.innerHTML=n.title||"",this.text.innerHTML=n.text||"",super.show(),this.viewer.dispatchEvent(new ed(this.state.contentId))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new Dh(e))}}},fy=200,qa="psv-panel-content--no-interaction",py=class extends ui{constructor(n){super(n,{className:`psv-panel ${Us}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const t=document.createElement("div");t.className="psv-panel-close-button",t.innerHTML=wn.close,t.title=n.config.lang.close,this.container.appendChild(t),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),t.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(hi.type,this)}destroy(){this.viewer.removeEventListener(hi.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown(n);break;case"touchstart":this.__onTouchStart(n);break;case"mousemove":this.__onMouseMove(n);break;case"touchmove":this.__onTouchMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchend":this.__onTouchEnd(n);break;case hi.type:this.__onKeyPress(n);break}}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new Se("Panel cannot be toggled")}show(n){typeof n=="string"&&(n={content:n});const e=this.isVisible(n.id);this.state.contentId=n.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),n.id&&this.state.width[n.id]?this.container.style.width=this.state.width[n.id]:n.width?this.container.style.width=n.width:this.container.style.width=null,this.content.innerHTML=n.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),$r(this.content,"psv-panel-content--no-margin",n.noMargin===!0),n.clickHandler&&(this.state.clickHandler=t=>{n.clickHandler(Xr(t))},this.state.keyHandler=t=>{t.key===Nt.Enter&&n.clickHandler(Xr(t))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{this.content.querySelector("a,button,[tabindex]")?.focus()},300)),this.viewer.dispatchEvent(new di(this.state.contentId))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new ci(e))}}__onMouseDown(n){n.stopPropagation(),this.__startResize(n.clientX,n.clientY)}__onTouchStart(n){if(n.stopPropagation(),n.touches.length===1){const e=n.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(n){this.state.mousedown&&(n.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(qa))}__onTouchEnd(n){this.state.mousedown&&(n.stopPropagation(),n.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(qa)))}__onMouseMove(n){this.state.mousedown&&(n.stopPropagation(),this.__resize(n.clientX,n.clientY))}__onTouchMove(n){if(this.state.mousedown){const e=n.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(n){this.isVisible()&&n.matches(Nt.Escape)&&(this.hide(),n.preventDefault())}__startResize(n,e){this.state.mouseX=n,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(qa)}__resize(n,e){const t=n,i=e,s=Math.max(fy,this.container.offsetWidth-(t-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=t,this.state.mouseY=i}},my=class extends ui{constructor(n,e){super(n,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",t=>t.stopPropagation()),this.container.addEventListener("mousedown",t=>t.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(n){n.type==="transitionend"&&this.__onTransitionEnd(n)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new Se("Tooltip cannot be toggled")}show(n){if(this.state.state!==0)throw new Se("Initialized tooltip cannot be re-initialized");n.className&&ba(this.container,n.className),n.style&&Object.assign(this.container.style,n.style),this.state.state=3,this.update(n.content,n),this.state.data=n.data,this.state.state=1,this.viewer.dispatchEvent(new id(this,this.state.data)),this.__waitImages()}update(n,e){this.content.innerHTML=n;const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.state.arrow=parseInt(Pn(this.arrow,"border-top-width"),10),this.state.border=parseInt(Pn(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(n){if(this.state.state!==1&&this.state.state!==3)throw new Se("Uninitialized tooltip cannot be moved");n.box=n.box??this.state.config?.box??{width:0,height:0},this.state.config=n;const e=this.container,t=this.arrow,i={posClass:dh(n.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,n);let s=null,r=null;if(i.top<0?s="bottom":i.top+i.height>this.viewer.state.size.height&&(s="top"),i.left<0?r="right":i.left+i.width>this.viewer.state.size.width&&(r="left"),r||s){const a=Ia(i.posClass);s&&(i.posClass[a?0:1]=s),r&&(i.posClass[a?1:0]=r),this.__computeTooltipPosition(i,n)}e.style.top=i.top+"px",e.style.left=i.left+"px",t.style.top=i.arrowTop+"px",t.style.left=i.arrowLeft+"px";const o=i.posClass.join("-");o!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=o,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new Fh(this.state.data));const n=parseFloat(Pn(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},n*2)}__onTransitionEnd(n){if(n.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(n,e){const t=this.state.arrow,i=e.top,s=n.height,r=e.left,o=n.width,a=t+this.state.border,l=e.box.width/2+t*2,c=e.box.height/2+t*2;switch(n.posClass.join("-")){case"top-left":n.top=i-c-s,n.left=r+a-o,n.arrowTop=s,n.arrowLeft=o-a-t;break;case"top-center":n.top=i-c-s,n.left=r-o/2,n.arrowTop=s,n.arrowLeft=o/2-t;break;case"top-right":n.top=i-c-s,n.left=r-a,n.arrowTop=s,n.arrowLeft=t;break;case"bottom-left":n.top=i+c,n.left=r+a-o,n.arrowTop=-t*2,n.arrowLeft=o-a-t;break;case"bottom-center":n.top=i+c,n.left=r-o/2,n.arrowTop=-t*2,n.arrowLeft=o/2-t;break;case"bottom-right":n.top=i+c,n.left=r-a,n.arrowTop=-t*2,n.arrowLeft=t;break;case"left-top":n.top=i+a-s,n.left=r-l-o,n.arrowTop=s-a-t,n.arrowLeft=o;break;case"center-left":n.top=i-s/2,n.left=r-l-o,n.arrowTop=s/2-t,n.arrowLeft=o;break;case"left-bottom":n.top=i-a,n.left=r-l-o,n.arrowTop=t,n.arrowLeft=o;break;case"right-top":n.top=i+a-s,n.left=r+l,n.arrowTop=s-a-t,n.arrowLeft=-t*2;break;case"center-right":n.top=i-s/2,n.left=r+l,n.arrowTop=s/2-t,n.arrowLeft=-t*2;break;case"right-bottom":n.top=i-a,n.left=r+l,n.arrowTop=t,n.arrowLeft=-t*2;break}}__waitImages(){const n=this.content.querySelectorAll("img");if(n.length>0){const e=[];n.forEach(t=>{t.complete||e.push(new Promise(i=>{t.onload=i,t.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.move(this.state.config)}})}}},gy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Ks=class{constructor(n){this.viewer=n,this.config=n.config,this.state=n.state}destroy(){}},Mn=new O,oo=new Tn(0,0,0,"ZXY"),vy=class extends Ks{constructor(n){super(n)}fovToZoomLevel(n){const e=Math.round((n-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return it.clamp(e-2*(e-50),0,100)}zoomLevelToFov(n){return this.config.maxFov+n/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(n){return it.radToDeg(2*Math.atan(Math.tan(it.degToRad(n)/2)*this.state.aspect))}hFovToVFov(n){return it.radToDeg(2*Math.atan(Math.tan(it.degToRad(n)/2)/this.state.aspect))}getAnimationProperties(n,e,t){const i=!Ut(e),s=!Ut(t),r={};let o=null;if(i){const a=this.viewer.getPosition(),l=Yc(a.yaw,e.yaw);r.yaw={start:a.yaw,end:a.yaw+l},r.pitch={start:a.pitch,end:e.pitch},o=Da(n,jc(a,e))}if(s){const a=this.viewer.getZoomLevel(),l=Math.abs(t-a);r.zoom={start:a,end:t},o===null&&(o=Da(n,Math.PI/4*l/100))}return o===null?typeof n=="number"?o=n:o=Sa:o=Math.max(Sa,o),{duration:o,properties:r}}getTransitionOptions(n){let e;const t=this.config.defaultTransition??qn.defaultTransition;return n.transition===!1||n.transition===null?e=null:n.transition===!0?e={...t}:typeof n.transition=="object"?e={...t,...n.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(n){if(!this.state.textureData?.panoData)throw new Se("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(n,this.state.textureData.panoData);return!oo.equals(this.viewer.renderer.panoramaPose)||!oo.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,Mn),Mn.applyEuler(this.viewer.renderer.panoramaPose),Mn.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(Mn)):e}sphericalCoordsToTextureCoords(n){if(!this.state.textureData?.panoData)throw new Se("Current adapter does not support texture coordinates or no texture has been loaded");return(!oo.equals(this.viewer.renderer.panoramaPose)||!oo.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(n,Mn),Ua(Mn,this.viewer.renderer.sphereCorrection),Ua(Mn,this.viewer.renderer.panoramaPose),n=this.vector3ToSphericalCoords(Mn)),this.viewer.adapter.sphericalCoordsToTextureCoords(n,this.state.textureData.panoData)}sphericalCoordsToVector3(n,e,t=Ai){return e||(e=new O),e.x=t*-Math.cos(n.pitch)*Math.sin(n.yaw),e.y=t*Math.sin(n.pitch),e.z=t*Math.cos(n.pitch)*Math.cos(n.yaw),e}vector3ToSphericalCoords(n){const e=Math.acos(n.y/Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z)),t=Math.atan2(n.x,n.z);return{yaw:t<0?-t:Math.PI*2-t,pitch:Math.PI/2-e}}viewerCoordsToVector3(n){const e=this.viewer.renderer.getIntersections(n).filter(t=>t.object.userData[li]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(n){const e=this.viewerCoordsToVector3(n);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(n){const e=n.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(n){return this.sphericalCoordsToVector3(n,Mn),this.vector3ToViewerCoords(Mn)}isPointVisible(n){let e,t;if(n instanceof O)e=n,t=this.vector3ToViewerCoords(n);else if(La(n))e=this.sphericalCoordsToVector3(n,Mn),t=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&t.x>=0&&t.x<=this.viewer.state.size.width&&t.y>=0&&t.y<=this.viewer.state.size.height}cleanPosition(n){if("yaw"in n||"pitch"in n){if(!("yaw"in n)||!("pitch"in n))throw new Se("Position is missing 'yaw' or 'pitch'");return{yaw:In(n.yaw),pitch:In(n.pitch,!0)}}else return this.textureCoordsToSphericalCoords(n)}cleanSphereCorrection(n){return{pan:In(n?.pan||0),tilt:In(n?.tilt||0,!0),roll:In(n?.roll||0,!0,!1)}}cleanPanoramaPose(n){return{pan:it.degToRad(n?.poseHeading||0),tilt:it.degToRad(n?.posePitch||0),roll:it.degToRad(n?.poseRoll||0)}}cleanPanoramaOptions(n,e){return e?.isEquirectangular&&(Ut(n.zoom)&&!Ut(e.initialFov)&&(n={...n,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),Ut(n.position)&&!Ut(e.initialHeading)&&!Ut(e.initialPitch)&&(n={...n,position:{yaw:In(e.initialHeading),pitch:In(e.initialPitch,!0)}})),n}},_y=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,yy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,ao=class hp{constructor(){this.$=hp.IDLE}is(...e){return e.some(t=>this.$&t)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};ao.IDLE=0,ao.CLICK=1,ao.MOVING=2;var Rt=ao,xy=class extends Ks{constructor(n){super(n),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new Rt,this.keyHandler=new eo,this.resizeObserver=new ResizeObserver(ih(()=>this.viewer.autoSize(),50)),this.moveThreshold=zc*qt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(Bs.type,this),this.viewer.addEventListener(qs.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(Bs.type,this),this.viewer.removeEventListener(qs.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(n){switch(n.type){case"keydown":this.__onKeyDown(n);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchmove":this.__onTouchMove(n);break;case"touchend":this.__onTouchEnd(n);break;case"fullscreenchange":this.__onFullscreenChange();break;case Bs.type:this.__applyMoveDelta();break;case qs.type:this.__clearMoveDelta();break}if(!Jc(n,"."+Us))switch(n.type){case"mousedown":this.__onMouseDown(n);break;case"touchstart":this.__onTouchStart(n);break;case"wheel":this.__onMouseWheel(n);break}}__onKeyDown(n){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=n.key===Nt.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(Bt.CTRL_ZOOM))),!!this.viewer.dispatchEvent(new hi(n.key,n))&&!(!this.state.keyboardEnabled||!this.config.keyboardActions||this.keyHandler.pending)){for(const[e,t]of Object.entries(this.config.keyboardActions))if(Aa(n,e)){if(typeof t=="function")t(this.viewer,n);else{switch(t!=="ZOOM_IN"&&t!=="ZOOM_OUT"&&this.viewer.stopAll(),t){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(t)}n.preventDefault();return}}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(n=>{n==="ZOOM_IN"||n==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(n){this.step.add(Rt.CLICK),this.data.startMouseX=n.clientX,this.data.startMouseY=n.clientY,this.config.mousemove&&n.preventDefault()}__onMouseUp(n){this.step.is(Rt.CLICK,Rt.MOVING)&&this.__stopMove(n.clientX,n.clientY,n,n.button===2)}__onMouseMove(n){this.config.mousemove&&this.step.is(Rt.CLICK,Rt.MOVING)&&(n.preventDefault(),this.__doMove(n.clientX,n.clientY)),this.__handleObjectsEvents(n)}__onTouchStart(n){n.touches.length===1?(this.step.add(Rt.CLICK),this.data.startMouseX=n.touches[0].clientX,this.data.startMouseY=n.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=n.touches[0];this.__stopMove(e.clientX,e.clientY,n,!0),this.data.longtouchTimeout=null},Vc))):n.touches.length===2&&(this.step.set(Rt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(n),n.preventDefault()))}__onTouchEnd(n){if(this.__cancelLongTouch(),this.step.is(Rt.CLICK,Rt.MOVING)){if(n.preventDefault(),this.__cancelTwoFingersOverlay(),n.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(n.touches.length===0){const e=n.changedTouches[0];this.__stopMove(e.clientX,e.clientY,n)}}}__onTouchMove(n){if(this.__cancelLongTouch(),!!this.config.mousemove)if(n.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(Rt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:Bt.TWO_FINGERS,image:_y,title:this.config.lang.twoFingers})},Gc));else if(this.step.is(Rt.CLICK,Rt.MOVING)){n.preventDefault();const e=n.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(n),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(Bt.TWO_FINGERS))}__onMouseWheel(n){if(!this.config.mousewheel||!n.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:Bt.CTRL_ZOOM,image:yy,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(Bt.CTRL_ZOOM),Wc);return}n.preventDefault(),n.stopPropagation();const e=n.deltaY/Math.abs(n.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const n=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(n?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new zs(n))}__resetMove(){this.step.set(Rt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(n){this.viewer.stopAll(),this.__resetMove();const e=Ta(n);this.step.set(Rt.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(n,e,t,i=!1){this.step.is(Rt.CLICK)&&!this.__moveThresholdReached(n,e)&&this.__doClick(n,e,t,i),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(n,e,t,i=!1){const s=this.viewer.container.getBoundingClientRect(),r=n-s.left,o=e-s.top,a=this.viewer.renderer.getIntersections({x:r,y:o}),l=a.find(c=>c.object.userData[li]);if(l){const c=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),h={rightclick:i,originalEvent:t,target:Xr(t),clientX:n,clientY:e,viewerX:r,viewerY:o,yaw:c.yaw,pitch:c.pitch,objects:a.map(d=>d.object).filter(d=>!d.userData[li])};try{const d=this.viewer.dataHelper.sphericalCoordsToTextureCoords(h);Object.assign(h,d)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-h.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-h.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new Rh(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Th(h)),this.data.dblclickData=Yr(h),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},Hc))}}__handleObjectsEvents(n){if(!rh(this.state.objectsObservers)&&n.composedPath().includes(this.viewer.container)){const e=Qc(this.viewer.container),t={x:n.clientX-e.x,y:n.clientY-e.y},i=this.viewer.renderer.getIntersections(t),s=(r,o,a)=>{this.viewer.dispatchEvent(new a(n,r,t,o))};for(const[r,o]of Object.entries(this.state.objectsObservers)){const a=i.find(l=>l.object.userData[r]);a?(o&&a.object!==o&&(s(o,r,Oa),this.state.objectsObservers[r]=null),o?s(a.object,r,dd):(this.state.objectsObservers[r]=a.object,s(a.object,r,ld))):o&&(s(o,r,Oa),this.state.objectsObservers[r]=null)}}}__doMove(n,e){if(this.step.is(Rt.CLICK)&&this.__moveThresholdReached(n,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(Rt.MOVING),this.data.mouseX=n,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(Rt.MOVING)){const t=(n-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),i=(e-this.data.mouseY)*Math.cos(this.state.roll)+(n-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(t/this.state.size.width)*it.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(i/this.state.size.height)*it.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=n,this.data.mouseY=e}}__moveThresholdReached(n,e){return Math.abs(n-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(n){if(this.step.is(Rt.MOVING)){n.preventDefault();const e=Ta(n);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/qt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};ct.enabled=!1;var lo=new ut,Sd=new xt,bd=new $i,Ey=class extends Ks{constructor(n){super(n),this.frustumNeedsUpdate=!0,this.renderer=new F0(this.config.rendererParameters),this.renderer.setPixelRatio(qt.pixelRatio),this.renderer.outputColorSpace=vi,this.renderer.toneMapping=1,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Dr,this.camera=new sn(50,16/9,.1,2*Ai),this.camera.matrixAutoUpdate=!1;const e=new jt(new ss(Ai).scale(-1,1,1),new si({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[li]:!0},this.scene.add(e),this.raycaster=new Dm,this.frustum=new da,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",t=>t.preventDefault()),this.viewer.addEventListener(Xs.type,this),this.viewer.addEventListener(Xn.type,this),this.viewer.addEventListener(Vs.type,this),this.viewer.addEventListener(Gs.type,this),this.viewer.addEventListener(Zt.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(n=>this.__renderLoop(n))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(Xs.type,this),this.viewer.removeEventListener(Xn.type,this),this.viewer.removeEventListener(Vs.type,this),this.viewer.removeEventListener(Gs.type,this),this.viewer.removeEventListener(Zt.type,this),super.destroy()}handleEvent(n){switch(n.type){case Xs.type:this.__onSizeUpdated();break;case Xn.type:this.__onZoomUpdated();break;case Vs.type:this.__onPositionUpdated();break;case Gs.type:this.__onPositionUpdated();break;case Zt.type:n.containsOptions("fisheye")&&this.__onPositionUpdated(),n.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(n){n?this.customRenderer=n(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(n){const e=this.timestamp?n-this.timestamp:0;this.timestamp=n,this.viewer.dispatchEvent(new Bs(n,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Kh))}setTexture(n){this.meshContainer||(this.meshContainer=new oi,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(n.panoData),this.viewer.adapter.setTexture(this.mesh,n,!1),this.meshContainer.add(this.mesh),this.state.textureData=n,this.viewer.needsUpdate()}setPanoramaPose(n,e=this.mesh){const t=this.viewer.dataHelper.cleanPanoramaPose(n);e.rotation.set(-t.tilt,t.pan,t.roll,"YXZ")}setSphereCorrection(n,e=this.meshContainer){const t=this.viewer.dataHelper.cleanSphereCorrection(n);e.rotation.set(t.tilt,t.pan,t.roll,"YXZ")}transition(n,e,t){const i=t.effect==="fade"||t.rotation,s=!Ut(e.position),r=!Ut(e.zoom),o=new ka(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(o);const a=new oi,l=this.viewer.adapter.createMesh(n.panoData);if(this.viewer.adapter.setTexture(l,n,!0),this.viewer.adapter.setTextureOpacity(l,0),this.setPanoramaPose(n.panoData,l),this.setSphereCorrection(e.sphereCorrection,a),s&&!t.rotation){const f=this.viewer.getPosition(),m=new O(0,1,0);a.rotateOnWorldAxis(m,o.position.yaw-f.yaw);const g=new O(0,1,0).cross(this.camera.getWorldDirection(new O)).normalize();a.rotateOnWorldAxis(g,o.position.pitch-f.pitch)}a.add(l),this.scene.add(a),this.renderer.setRenderTarget(new Jn),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:c,properties:h}=this.viewer.dataHelper.getAnimationProperties(t.speed,t.rotation?o.position:null,i?o.zoomLevel:null),d=new Qr({properties:{...h,opacity:{start:0,end:1}},duration:c,easing:"inOutCubic",onTick:f=>{switch(t.effect){case"fade":this.viewer.adapter.setTextureOpacity(l,f.opacity);break;case"black":case"white":f.opacity<.5?this.renderer.toneMappingExposure=t.effect==="black"?it.mapLinear(f.opacity,0,.5,1,0):it.mapLinear(f.opacity,0,.5,1,5):(this.renderer.toneMappingExposure=t.effect==="black"?it.mapLinear(f.opacity,.5,1,0,1):it.mapLinear(f.opacity,.5,1,5,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(l,1),r&&!i&&this.viewer.dynamics.zoom.setValue(o.zoomLevel));break}s&&t.rotation&&this.viewer.dynamics.position.setValue({yaw:f.yaw,pitch:f.pitch}),r&&i&&this.viewer.dynamics.zoom.setValue(f.zoom),this.viewer.needsUpdate()}});return d.then(f=>{a.remove(l),this.scene.remove(a),f?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=l,this.meshContainer.add(l),this.state.textureData=n,this.setPanoramaPose(n.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!t.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(n),this.viewer.adapter.disposeMesh(l))}),d}getIntersections(n){lo.x=2*n.x/this.state.size.width-1,lo.y=-2*n.y/this.state.size.height+1,this.raycaster.setFromCamera(lo,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(t=>t.object.visible).filter(t=>t.object.isMesh&&!!t.object.userData);return this.customRenderer?.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,lo)),e}isObjectVisible(n){if(!n)return!1;if(this.frustumNeedsUpdate&&(Sd.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(Sd),this.frustumNeedsUpdate=!1),n.isVector3)return this.frustum.containsPoint(n);if(n.isMesh&&n.geometry){const e=n;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),bd.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(bd)}else return n.isObject3D?this.frustum.intersectsObject(n):!1}addObject(n){this.scene.add(n)}removeObject(n){this.scene.remove(n)}cleanScene(n){const e=t=>{t.map?.dispose(),t.uniforms&&Object.values(t.uniforms).forEach(i=>{i.value?.dispose?.()}),t.dispose()};n.traverse(t=>{t.geometry?.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>{e(i)}):e(t.material)),t instanceof Dr||t.dispose?.(),t!==n&&this.cleanScene(t)})}},wy=class extends Pm{constructor(){super(...arguments),this._abortController=new AbortController}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}load(n,e,t,i){const s=this._abortController.signal,r=super.load(n,l=>{a(),e(l)},t,l=>{if(a(),s.aborted){const c=new Error;c.name="AbortError",c.message="The operation was aborted.",i(c)}else i(l)});function o(){r.src=""}function a(){s.removeEventListener("abort",o,!1)}return s.addEventListener("abort",o,!1),r}},My=class extends Ks{constructor(n){super(n),this.fileLoader=new Rm,this.fileLoader.setResponseType("blob"),this.imageLoader=new wy}destroy(){this.abortLoading(),super.destroy()}abortLoading(){this.fileLoader.abort?.(),this.imageLoader.abort()}loadFile(n,e,t){const i=us.get(n,t);if(i){if(i instanceof Blob)return e?.(100),Promise.resolve(i);us.remove(n,t)}this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(n)),this.fileLoader.setWithCredentials(this.config.withCredentials(n));let s=0;return e?.(s),this.fileLoader.loadAsync(n,r=>{if(r.lengthComputable){const o=r.loaded/r.total*100;o>s&&(s=o,e?.(s))}}).then(r=>(s=100,e?.(s),us.add(n,t,r),r))}loadImage(n,e,t){const i=us.get(n,t);return i?(e?.(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(n)),this.imageLoader.loadAsync(n).then(s=>(us.add(n,t,s),s))):this.loadFile(n,e,t).then(s=>this.blobToImage(s))}blobToImage(n){return new Promise((e,t)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=t,i.src=URL.createObjectURL(n)})}preloadPanorama(n){return this.viewer.adapter.supportsPreload(n)?this.viewer.adapter.loadTexture(n,!1):Promise.reject(new Se("Current adapter does not support preload"))}dispatchProgress(n){this.viewer.loader.setProgress(n),this.viewer.dispatchEvent(new Bh(Math.round(n)))}},Sy=class extends Ks{constructor(n){super(n),this.zoom=new ks(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new Xn(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new vh(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new Vs(e))},{yaw:new ks(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new ks(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new ks(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new Gs(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(it.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(it.degToRad(this.config.moveSpeed*50))}update(n){this.zoom.update(n),this.position.update(n),this.roll.update(n)}},by=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new O(0,0,Ai),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},Ty=class extends xh{constructor(n){if(super(),this.plugins={},this.children=[],this.parent=Zc(n.container),!this.parent)throw new Se('"container" element not found.');this.parent[li]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),mh(this.parent),ph(this.container,"core"),this.state=new by,this.config=ly(n),this.__setSize(this.config.size),this.overlay=new uy(this);try{qt.load()}catch(e){console.error(e),this.showError(this.config.lang.webglError);return}us.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new Ey(this),this.textureLoader=new My(this),this.eventsHandler=new xy(this),this.dataHelper=new vy(this),this.dynamics=new Sy(this),this.adapter.init?.(),this.loader=new hy(this),this.navbar=new cy(this),this.panel=new py(this),this.notification=new dy(this),this.autoSize(),this.setCursor(null),Ra(qt.isTouchEnabled,e=>{$r(this.container,"psv--is-touch",e)}),this.config.plugins.forEach(([e,t])=>{this.plugins[e.id]=new e(this,t)});for(const e of Object.values(this.plugins))e.init?.();this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[n,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[n];this.children.slice().forEach(n=>n.destroy()),this.children.length=0,this.eventsHandler?.destroy(),this.renderer?.destroy(),this.textureLoader?.destroy(),this.dataHelper?.destroy(),this.adapter?.destroy(),this.dynamics?.destroy(),this.parent.removeChild(this.container),delete this.parent[li]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new Ws)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(n){if(typeof n=="string")return this.plugins[n];{const e=Ga(n);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return eh(this.parent,qt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(n){n?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new Xs(this.getSize())),this.navbar.autoSize())}setPanorama(n,e={}){this.textureLoader.abortLoading(),this.state.transitionAnimation?.cancel();const t=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=n,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection,(typeof this.config.panoData!="function"||typeof e.panoData=="function")&&(this.config.panoData=e.panoData);const i=r=>{if(lh(r))return!1;if(this.loader.hide(),this.state.loadingPromise=null,r)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(r),this.dispatchEvent(new Wh(n,r)),r;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new Hh(n));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(r=>{if(r.panorama!==this.config.panorama)throw this.adapter.disposeTexture(r),Pa();const o=this.dataHelper.cleanPanoramaOptions(e,r.panoData);return(!Ut(o.zoom)||!Ut(o.position))&&this.stopAll(),{textureData:r,cleanOptions:o}});return!t||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:r,cleanOptions:o})=>{this.renderer.show(),this.renderer.setTexture(r),this.renderer.setPanoramaPose(r.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new hs(r)),Ut(o.zoom)||this.zoom(o.zoom),Ut(o.position)||this.rotate(o.position)}).then(()=>i(),r=>i(r)):this.state.loadingPromise=s.then(({textureData:r,cleanOptions:o})=>(this.loader.hide(),this.dispatchEvent(new hs(r)),this.state.transitionAnimation=this.renderer.transition(r,o,t),this.state.transitionAnimation)).then(r=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new Xh(r)),!r)throw Pa()}).then(()=>i(),r=>i(r)),this.state.loadingPromise}setOptions(n){const e={...this.config,...n};for(let[t,i]of Object.entries(n)){if(!(t in qn)){zt(`Unknown option ${t}`);continue}if(t in Md){zt(Md[t]);continue}switch(t in Wa&&(i=Wa[t](i,{rawConfig:e,defValue:qn[t]})),this.config[t]=i,t){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new Xn(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Zt(Object.keys(n)))}setOption(n,e){this.setOptions({[n]:e})}showError(n){this.overlay.show({id:Bt.ERROR,image:gy,title:n,dismissible:!1})}hideError(){this.overlay.hide(Bt.ERROR)}rotate(n){const e=new Sh(this.dataHelper.cleanPosition(n));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(n){this.dynamics.zoom.setValue(n)}zoomIn(n=1){this.dynamics.zoom.step(n)}zoomOut(n=1){this.dynamics.zoom.step(-n)}animate(n){const e=La(n),t=!Ut(n.zoom),i=new ka(e?this.dataHelper.cleanPosition(n):void 0,n.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(n.speed,i.position,i.zoomLevel);return s?(this.state.animation=new Qr({properties:r,duration:s,easing:n.easing||"inOutSine",onTick:o=>{e&&this.dynamics.position.setValue({yaw:o.yaw,pitch:o.pitch}),t&&this.dynamics.zoom.setValue(o.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),t&&this.zoom(i.zoomLevel),new Qr(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(n){this.__setSize(n),this.autoSize()}__setSize(n){["width","height"].forEach(e=>{n?.[e]&&(/^[0-9.]+$/.test(n[e])&&(n[e]+="px"),this.parent.style[e]=n[e])})}enterFullscreen(){this.isFullscreenEnabled()||th(this.parent,qt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&nh(qt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(n){return new my(this,n)}setCursor(n){this.state.cursorOverride=n,n?this.container.style.cursor=n:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(n){this.state.objectsObservers[n]||(this.state.objectsObservers[n]=null)}unobserveObjects(n){delete this.state.objectsObservers[n]}stopAll(){return this.dispatchEvent(new qs),this.disableIdleTimer(),this.stopAnimation()}};/*!
 * Photo Sphere Viewer / Equirectangular Tiles Adapter 5.14.1
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Ay=class{constructor(n,e,t){this.id=n,this.priority=e,this.fn=t,this.status=1}start(){return this.status=2,this.fn(this).then(()=>{this.status=4},()=>{this.status=5})}cancel(){this.status=3}isCancelled(){return this.status===3}},Cy=class{constructor(n=8){this.concurency=n,this.runningTasks={},this.tasks={}}enqueue(n){this.tasks[n.id]=n}clear(){Object.values(this.tasks).forEach(n=>n.cancel()),this.tasks={},this.runningTasks={}}setPriority(n,e){const t=this.tasks[n];t&&(t.priority=e,t.status===0&&(t.status=1))}disableAllTasks(){Object.values(this.tasks).forEach(n=>{n.status=0})}start(){if(Object.keys(this.runningTasks).length>=this.concurency)return;const n=Object.values(this.tasks).filter(e=>e.status===1).sort((e,t)=>t.priority-e.priority).pop();n&&(this.runningTasks[n.id]=!0,n.start().then(()=>{n.isCancelled()||(delete this.tasks[n.id],delete this.runningTasks[n.id],this.start())}),this.start())}};function Ry(){const n=new OffscreenCanvas(512,512),e=n.getContext("2d");return e.fillStyle="#333",e.fillRect(0,0,n.width,n.height),e.font=`${n.width/5}px serif`,e.fillStyle="#a22",e.textAlign="center",e.textBaseline="middle",e.fillText("⚠",n.width/2,n.height/2),new si({map:Re.createTexture(n)})}function Py(n){const e=new Mm(n),t=new Em(e);return t.material.depthTest=!1,t.material.depthWrite=!1,t.material.opacity=.25,t.material.transparent=!0,t}var Td=["dodgerblue","limegreen","indianred"];function Ly(n,e,t){const i=document.createElement("canvas");i.width=n.width,i.height=n.height;const s=i.getContext("2d");s.fillStyle=Td[e%Td.length],s.fillRect(0,0,i.width,i.height),s.globalCompositeOperation="multiply",s.drawImage(n,0,0);const r=n.width/7;return s.globalCompositeOperation="source-over",s.fillStyle="white",s.font=`${r}px monospace`,s.textAlign="center",t.split(`
`).forEach((o,a)=>{s.fillText(o,n.width/2,n.height/2+r*(.3+a))}),i}function Ya(n){return!!n.levels}function Ad(n,e,t){return{...n,level:e,colSize:n.width/n.cols,rowSize:n.width/2/n.rows,facesByCol:t.SPHERE_SEGMENTS/n.cols,facesByRow:t.SPHERE_HORIZONTAL_SEGMENTS/n.rows}}function Cd(n,e,t,i,s){let r,o;return Ya(n)?(i?(o=n.levels.findIndex(a=>{const l=a.width/360*e,c=a.width/2/180*t;return l>=i.width&&c>=i.height}),o===-1&&(o=n.levels.length-1)):o=0,r=n.levels[o]):(o=0,r={...n}),Ad(r,o,s)}function Iy(n,e,t){return!Ya(n)||!n.levels[e]?null:Ad(n.levels[e],e,t)}function Dy(n,e){if(typeof n!="object"||!n.tileUrl)throw new Se("Invalid panorama configuration, are you using the right adapter?");Ya(n)?(n.levels.forEach(t=>{Rd(t,e),"zoomRange"in t&&Re.logWarn('EquirectangularTilesAdapter: "zoomRange" property is deprecated and must be removed')}),n.levels.sort((t,i)=>t.width-i.width)):Rd(n,e)}function Rd(n,e){if(!n.width||!n.cols||!n.rows)throw new Se("Invalid panorama configuration, are you using the right adapter?");if(n.cols>e.SPHERE_SEGMENTS)throw new Se(`Panorama cols must not be greater than ${e.SPHERE_SEGMENTS}.`);if(n.rows>e.SPHERE_HORIZONTAL_SEGMENTS)throw new Se(`Panorama rows must not be greater than ${e.SPHERE_HORIZONTAL_SEGMENTS}.`);if(!it.isPowerOfTwo(n.cols)||!it.isPowerOfTwo(n.rows))throw new Se("Panorama cols and rows must be powers of 2.")}function Ny(n,e){for(let t=0;t<e.cols;t++){const i=n.tileUrl(t,e.rows/2,e.level);if(i)return i}return n.tileUrl.toString()}var Js=6,Kt=3,Uy="uv",Fy="position",Pd=-1;function ja(n){return`${n.col}x${n.row}/${n.config.level}`}function co(n){return n.children}var ky=Re.getConfigParser({resolution:64,showErrorTile:!0,baseBlur:!0,antialias:!0,debug:!1,useXmpData:!1}),ho=new O,uo=class dp extends no{constructor(e,t){super(e),this.state={tileConfig:null,tiles:{},faces:{},geom:null,materials:[],errorMaterial:null,inTransition:!1},this.queue=new Cy,this.config=ky(t),this.adapter=new Ba(this.viewer,{resolution:this.config.resolution,blur:this.config.baseBlur}),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2,this.NB_VERTICES=2*this.SPHERE_SEGMENTS*Kt+(this.SPHERE_HORIZONTAL_SEGMENTS-2)*this.SPHERE_SEGMENTS*Js,this.NB_GROUPS=this.SPHERE_SEGMENTS*this.SPHERE_HORIZONTAL_SEGMENTS,this.viewer.config.requestHeaders&&Re.logWarn('EquirectangularTilesAdapter fallbacks to file loader because "requestHeaders" where provided. Consider removing "requestHeaders" if you experience performances issues.')}static withConfig(e){return[dp,e]}init(){super.init(),this.viewer.addEventListener(Ne.TransitionDoneEvent.type,this),this.viewer.addEventListener(Ne.PositionUpdatedEvent.type,this),this.viewer.addEventListener(Ne.ZoomUpdatedEvent.type,this)}destroy(){this.viewer.removeEventListener(Ne.TransitionDoneEvent.type,this),this.viewer.removeEventListener(Ne.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(Ne.ZoomUpdatedEvent.type,this),this.__cleanup(),this.state.errorMaterial?.map?.dispose(),this.state.errorMaterial?.dispose(),this.adapter.destroy(),delete this.adapter,delete this.state.geom,delete this.state.errorMaterial,super.destroy()}handleEvent(e){switch(e.type){case Ne.PositionUpdatedEvent.type:case Ne.ZoomUpdatedEvent.type:this.__refresh();break;case Ne.TransitionDoneEvent.type:this.state.inTransition=!1,e.completed&&this.__switchMesh(this.viewer.renderer.mesh);break}}supportsTransition(e){return!!e.baseUrl}supportsPreload(e){return!!e.baseUrl}textureCoordsToSphericalCoords(e,t){return this.adapter.textureCoordsToSphericalCoords(e,t)}sphericalCoordsToTextureCoords(e,t){return this.adapter.sphericalCoordsToTextureCoords(e,t)}async loadTexture(e,t=!0){Dy(e,this);const i=Cd(e,0,0,null,this),s={isEquirectangular:!0,fullWidth:i.width,fullHeight:i.width/2,croppedWidth:i.width,croppedHeight:i.width/2,croppedX:0,croppedY:0,poseHeading:0,posePitch:0,poseRoll:0};if(e.baseUrl){const r=await this.adapter.loadTexture(e.baseUrl,t,e.basePanoData,!0);return{panorama:e,panoData:{...s,baseData:r.panoData},cacheKey:r.cacheKey,texture:r.texture}}else return{panorama:e,panoData:{...s,baseData:null},cacheKey:Ny(e,i),texture:null}}createMesh(e){const t=this.adapter.createMesh(e.baseData??e),i=new ss(cs.SPHERE_RADIUS,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS,-Math.PI/2).scale(-1,1,1).toNonIndexed();i.clearGroups();let s=0,r=0;for(;s<this.SPHERE_SEGMENTS*Kt;s+=Kt)i.addGroup(s,Kt,r++);for(;s<this.NB_VERTICES-this.SPHERE_SEGMENTS*Kt;s+=Js)i.addGroup(s,Js,r++);for(;s<this.NB_VERTICES;s+=Kt)i.addGroup(s,Kt,r++);const o=[],a=new si({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1});for(let h=0;h<this.NB_GROUPS;h++)o.push(a);const l=new jt(i,o);l.renderOrder=1;const c=new oi;return c.add(t),c.add(l),c}setTexture(e,t,i){const[s]=co(e);t.texture?this.adapter.setTexture(s,{panorama:t.panorama.baseUrl,texture:t.texture,panoData:t.panoData.baseData}):s.visible=!1,i?this.state.inTransition=!0:this.__switchMesh(e)}setTextureOpacity(e,t){const[i]=co(e);this.adapter.setTextureOpacity(i,t)}disposeTexture({texture:e}){e?.dispose()}disposeMesh(e){const[t,i]=co(e);t.geometry.dispose(),t.material.dispose(),i.geometry.dispose(),i.material.forEach(s=>{s.map?.dispose(),s.dispose()})}__refresh(){if(!this.state.geom||this.state.inTransition)return;const e=this.viewer.config.panorama,t=Cd(e,this.viewer.state.hFov,this.viewer.state.vFov,this.viewer.state.size,this),i=this.state.geom.getAttribute(Fy),s={};for(let r=0;r<this.NB_VERTICES;r+=1)if(ho.fromBufferAttribute(i,r),ho.applyEuler(this.viewer.renderer.sphereCorrection),this.viewer.renderer.isObjectVisible(ho)){let o;r<this.SPHERE_SEGMENTS*Kt?o=Math.floor(r/3):r<this.NB_VERTICES-this.SPHERE_SEGMENTS*Kt?o=Math.floor((r/3-this.SPHERE_SEGMENTS)/2)+this.SPHERE_SEGMENTS:o=Math.floor((r-this.NB_VERTICES-this.SPHERE_SEGMENTS*Kt)/3)+this.SPHERE_HORIZONTAL_SEGMENTS*(this.SPHERE_SEGMENTS-1);const a=Math.floor(o/this.SPHERE_SEGMENTS),l=o-a*this.SPHERE_SEGMENTS;let c=t;for(;c;){const h=Math.floor(a/c.facesByRow),d=Math.floor(l/c.facesByCol);let f=ho.angleTo(this.viewer.state.direction);(h===0||h===c.rows-1)&&(f*=2);const m={row:h,col:d,angle:f,config:c,url:null},g=ja(m);if(s[g]){s[g].angle=Math.min(s[g].angle,f);break}else if(m.url=e.tileUrl(d,h,c.level),m.url){s[g]=m;break}else c=Iy(e,c.level-1,this)}}this.state.tileConfig=t,this.__loadTiles(Object.values(s))}__loadTiles(e){this.queue.disableAllTasks(),e.forEach(t=>{const i=ja(t);this.state.tiles[i]?this.queue.setPriority(i,t.angle):(this.state.tiles[i]=!0,this.queue.enqueue(new Ay(i,t.angle,s=>this.__loadTile(t,s))))}),this.queue.start()}__loadTile(e,t){return this.viewer.textureLoader.loadImage(e.url,null,this.viewer.state.textureData.cacheKey).then(i=>{if(!t.isCancelled()){this.config.debug&&(i=Ly(i,e.config.level,ja(e)));const s=this.config.antialias&&e.config.level>0,r=new si({map:Re.createTexture(i,s)});this.__swapMaterial(e,r,!1),this.viewer.needsUpdate()}}).catch(i=>{!Re.isAbortError(i)&&!t.isCancelled()&&this.config.showErrorTile&&(this.state.errorMaterial||(this.state.errorMaterial=Ry()),this.__swapMaterial(e,this.state.errorMaterial,!0),this.viewer.needsUpdate())})}__swapMaterial(e,t,i){const s=this.state.geom.getAttribute(Uy);for(let r=0;r<e.config.facesByCol;r++)for(let o=0;o<e.config.facesByRow;o++){const a=e.col*e.config.facesByCol+r,l=e.row*e.config.facesByRow+o,c=l===0,h=l===this.SPHERE_HORIZONTAL_SEGMENTS-1;let d;if(c?d=a*Kt:h?d=this.NB_VERTICES-this.SPHERE_SEGMENTS*Kt+a*Kt:d=this.SPHERE_SEGMENTS*Kt+(l-1)*this.SPHERE_SEGMENTS*Js+a*Js,i&&this.state.faces[d]>Pd||this.state.faces[d]>e.config.level)continue;this.state.faces[d]=i?Pd:e.config.level;const f=this.state.geom.groups.find(u=>u.start===d).materialIndex;this.state.materials[f]=t;const m=1-o/e.config.facesByRow,g=1-(o+1)/e.config.facesByRow,v=r/e.config.facesByCol,p=(r+1)/e.config.facesByCol;c?(s.setXY(d,(v+p)/2,m),s.setXY(d+1,v,g),s.setXY(d+2,p,g)):h?(s.setXY(d,p,m),s.setXY(d+1,v,m),s.setXY(d+2,(v+p)/2,g)):(s.setXY(d,p,m),s.setXY(d+1,v,m),s.setXY(d+2,p,g),s.setXY(d+3,v,m),s.setXY(d+4,v,g),s.setXY(d+5,p,g))}s.needsUpdate=!0}__switchMesh(e){const[,t]=co(e);if(this.__cleanup(),this.state.materials=t.material,this.state.geom=t.geometry,this.config.debug){const i=Py(this.state.geom);this.viewer.renderer.addObject(i),this.viewer.renderer.setSphereCorrection(this.viewer.config.sphereCorrection,i)}setTimeout(()=>this.__refresh())}__cleanup(){this.queue.clear(),this.state.tiles={},this.state.faces={},this.state.materials=[],this.state.inTransition=!1}};uo.id="equirectangular-tiles",uo.VERSION="5.14.1",uo.supportsDownload=!1;var Oy=uo;const By=3,Ld={accent:"#3b82f6",panelBg:"#111111",radius:"12px"},zy={background:"#1a1d24",backgroundOpacity:.96,textColor:"#ffffff",fontSize:13,padding:8,radius:6},Hy={autoRotate:{enabled:!1,speed:.5,idleDelayMs:4e3},gyroscope:!0,fullscreenButton:!0,audio:{muted:!1}},Vy={goto:"arrow",info:"info",video:"play",url:"plus",audio:"circle",look:"eye",toggle:"dot",image:"circle",panel:"info",narrate:"play",model3d:"circle"};function Id(n,e=Ld.accent){return{builtinIcon:Vy[n]??"circle",iconColor:"#ffffff",background:e,radius:999,text:"",textColor:"#ffffff",fontSize:13,size:22,padding:9,effect:"none",effectColor:e,effectOpacity:.7,effectSpeed:1.6,effectSize:44,effectStroke:2,fill:e,fillOpacity:.28,stroke:e,strokeWidth:2}}function Qs(n){const e=globalThis.crypto,t=e?.randomUUID?e.randomUUID().replace(/-/g,""):Math.random().toString(16).slice(2).padEnd(12,"0");return`${n}-${t.slice(0,8)}`}function Gy(n,e){if(!n.componentId)return n.style;const t=e?.find(s=>s.id===n.componentId);return t?.variants.length?(n.variantId&&t.variants.find(s=>s.id===n.variantId)||t.variants[0])?.style??n.style:n.style}const vt=n=>typeof n=="object"&&n!==null,dn=n=>Array.isArray(n)?n:[],Ye=(n,e="")=>typeof n=="string"?n:e,wt=(n,e=0)=>typeof n=="number"&&!Number.isNaN(n)?n:e;function fo(n,e){return n.length?[{event:e==="hover"?"hover":"click",actions:n}]:[]}function Wy(n,e){if(!vt(n))return{action:{type:"none"},trigger:"click"};const t=Ye(n.type,"none"),i=n.trigger==="hover"?"hover":"click";switch(t){case"goto":return{action:{type:"goto",targetSceneId:Ye(n.targetSceneId),...vt(n.landing)?{landing:n.landing}:{}},trigger:i};case"info":return{action:{type:"info",title:Ye(n.title),text:Ye(n.text),...n.imageAssetId?{imageAssetId:Ye(n.imageAssetId)}:{},...n.imageSrc?{imageSrc:Ye(n.imageSrc)}:{},...n.videoUrl?{videoUrl:Ye(n.videoUrl)}:{}},trigger:i};case"video":return{action:{type:"video",url:Ye(n.url)},trigger:i};case"url":return{action:{type:"url",url:Ye(n.url),target:n.target==="lightbox"?"lightbox":"blank"},trigger:i};case"audio":return{action:{type:"audio",url:Ye(n.url),...n.loop?{loop:!0}:{}},trigger:i};case"look":return{action:{type:"look",yaw:wt(n.yaw),pitch:wt(n.pitch),...n.zoom!=null?{zoom:wt(n.zoom)}:{}},trigger:i};case"toggle":return{action:{type:"toggle",targetIds:dn(n.targetIds),mode:n.mode==="show"||n.mode==="hide"?n.mode:"toggle"},trigger:i};case"image":return{action:{type:"image",...n.imageAssetId?{imageAssetId:Ye(n.imageAssetId)}:{},...n.imageSrc?{imageSrc:Ye(n.imageSrc)}:{}},trigger:i};case"none":return{action:{type:"none"},trigger:i};default:return t==="panel"||t==="setVar"||t==="animate"||t==="narrate"||t==="model3d"?{action:n,trigger:i}:(e.push({code:"unknown-action",message:`Unknown action type "${t}" replaced with none`,data:n}),{action:{type:"none"},trigger:i})}}function $y(n,e){const t=n.geometry;if(vt(t)){if(t.kind==="polygon"&&Array.isArray(t.points)&&t.points.length>=3)return{kind:"polygon",points:t.points.map(i=>({yaw:wt(i.yaw),pitch:wt(i.pitch)}))};if(t.kind==="point")return{kind:"point",yaw:wt(t.yaw),pitch:wt(t.pitch)};if(t.kind==="point3d")return{kind:"point3d",x:wt(t.x),y:wt(t.y),z:wt(t.z)}}return e==="polygon"&&Array.isArray(n.points)&&n.points.length>=3?{kind:"polygon",points:n.points.map(i=>({yaw:wt(i.yaw),pitch:wt(i.pitch)}))}:{kind:"point",yaw:wt(n.yaw),pitch:wt(n.pitch)}}function Dd(n,e,t){const i=vt(n)?n:{},s=Ye(i.id)||Qs("h");let r;if(Array.isArray(i.on))r=i.on.map(d=>({...d,actions:Array.isArray(d?.actions)?d.actions:[]}));else{const d=Array.isArray(i.actions)?i.actions:i.action!=null?[i.action]:[];if(d.length){const f=d.map(v=>Wy(v,t)),m=f.filter(v=>v.trigger==="hover").map(v=>v.action),g=f.filter(v=>v.trigger==="click").map(v=>v.action);r=[...fo(g,"click"),...fo(m,"hover")]}else i.type==="info"?r=fo([{type:"info",title:Ye(i.label,"Info"),text:Ye(i.content)}],"hover"):i.type!=null||i.targetSceneId!=null?r=fo([{type:"goto",targetSceneId:Ye(i.targetSceneId)}],"click"):r=[]}const a=["icon","text","image","html","polygon","callout","portal","circle"].includes(i.form)?i.form:"icon",l=r[0]?.actions[0]?.type??"none",c=vt(i.style)?{...Id(l,e),...i.style}:{...Id(l,e),...i.label?{text:Ye(i.label)}:{}},h=$y(i,a);return a==="polygon"&&h.kind==="point"&&t.push({code:"hotspot-repaired",message:`Hotspot ${s} was marked polygon but had fewer than 3 points; treated as a point`,data:i.points}),{id:s,name:Ye(i.name)||c.text||Ye(i.tooltip)||s,geometry:h,form:h.kind==="polygon"?"polygon":a==="polygon"?"icon":a,style:c,...i.componentId?{componentId:Ye(i.componentId)}:{},...i.variantId?{variantId:Ye(i.variantId)}:{},...i.tooltip?{tooltip:Ye(i.tooltip)}:{},...i.hoverGroup?{hoverGroup:Ye(i.hoverGroup)}:{},on:r,...i.perspective?{perspective:!0}:{},...i.html?{html:Ye(i.html)}:{},...vt(i.callout)?{callout:i.callout}:{},...i.imageAssetId?{imageAssetId:Ye(i.imageAssetId)}:{},...i.imageSrc?{imageSrc:Ye(i.imageSrc)}:{},...i.width!=null?{width:wt(i.width)}:{},...i.height!=null?{height:wt(i.height)}:{},...i.visible===!1?{visible:!1}:{},...vt(i.provenance)?{provenance:i.provenance}:{}}}function Xy(n,e,t){if(vt(n.source))return n.source;if(vt(n.tiles)){const s=n.tiles;return{kind:"tiled",dir:Ye(s.dir),width:wt(s.width),cols:wt(s.cols),rows:wt(s.rows),...s.format==="avif"||s.format==="webp"||s.format==="jpg"?{format:s.format}:{}}}const i=Ye(n.panorama);return i||e.push({code:"scene-missing-source",message:`Scene ${t} has no panorama; it will not render until one is set`,data:n}),{kind:"single",src:i}}function qy(n,e,t){const i=vt(n)?n:{},s=Ye(i.id)||Qs("scene"),r=Array.isArray(i.layers)?i.layers.map(a=>({id:Ye(a.id)||Qs("layer"),name:Ye(a.name,"Hotspots"),visible:a.visible!==!1,locked:a.locked===!0,hotspots:dn(a.hotspots).map(l=>Dd(l,e,t))})):[{id:Qs("layer"),name:"Hotspots",visible:!0,locked:!1,hotspots:dn(i.hotspots).map(a=>Dd(a,e,t))}],o=vt(i.initialView)?i.initialView:{};return{id:s,name:Ye(i.name,"Scene"),projection:i.projection==="cubemap"?"cubemap":"equirect",source:Xy(i,t,s),...i.proxy?{proxy:Ye(i.proxy)}:{},...i.thumbnail?{thumbnail:Ye(i.thumbnail)}:{},...i.subtitle?{subtitle:Ye(i.subtitle)}:{},initialView:{yaw:wt(o.yaw),pitch:wt(o.pitch),...o.fov!=null?{fov:wt(o.fov)}:{}},...i.north!=null?{north:wt(i.north)}:{},...i.tilt!=null?{tilt:wt(i.tilt)}:{},...i.roll!=null?{roll:wt(i.roll)}:{},...vt(i.limits)?{limits:i.limits}:{},...vt(i.covers)?{covers:i.covers}:{},...vt(i.audio)?{audio:i.audio}:{},...vt(i.guide)?{guide:i.guide}:{},layers:r,...Array.isArray(i.on)?{on:i.on}:{}}}function Yy(n){const e=vt(n)?n:{},t=[],i=wt(e.schema,(vt(e.skin)&&"elements"in e.skin,2)),s={...Ld,...vt(e.theme)?e.theme:{}},r=dn(e.scenes).map(y=>qy(y,s.accent,t));let o={};if(vt(e.skin)){const y=e.skin;o={...typeof y.html=="string"?{html:y.html}:{},...typeof y.css=="string"?{css:y.css}:{},...typeof y.dir=="string"?{dir:y.dir}:{},...typeof y.entry=="string"?{entry:y.entry}:{},...typeof y.template=="string"?{template:y.template}:{}};const E=Array.isArray(y.elements)?y.elements:[];E.length&&t.push({code:"skin-dropped",message:`The old skin had ${E.length} element(s) on a fixed stage. Skins are now markup over the panorama — these were not converted.`,data:e.skin})}const a={schema:By,id:Ye(e.id)||Qs("tour"),title:Ye(e.title,"Untitled tour"),...Ye(e.description)?{description:Ye(e.description)}:{},locales:vt(e.locales)?{default:Ye(e.locales.default,"en"),available:dn(e.locales.available).length?dn(e.locales.available):["en"]}:{default:"en",available:["en"]},theme:s,tooltipStyle:{...zy,...vt(e.tooltipStyle)?e.tooltipStyle:{}},...vt(e.defaultStyle)?{defaultStyle:e.defaultStyle}:{},...Array.isArray(e.stylePresets)?{stylePresets:e.stylePresets}:{},...Array.isArray(e.components)?{components:e.components}:{},...Array.isArray(e.ignored)?{ignored:dn(e.ignored).filter(Boolean)}:{},assets:dn(e.assets),variables:dn(e.variables),scenes:r,...vt(e.graph)?{graph:{...e.graph,...["floors","edges","groups"].reduce((y,E)=>{const x=e.graph[E];return y[E]=Array.isArray(x)?x:[],y},{}),floors:(Array.isArray(e.graph.floors)?e.graph.floors:[]).map(y=>({...y,nodes:Array.isArray(y?.nodes)?y.nodes:[]})),groups:(Array.isArray(e.graph.groups)?e.graph.groups:[]).map(y=>({...y,sceneIds:Array.isArray(y?.sceneIds)?y.sceneIds:[]}))}}:{},skin:o,runtime:{...Hy,...vt(e.runtime)?e.runtime:{}},...vt(e.i18n)?{i18n:e.i18n}:{},...vt(e.quiz)?{quiz:{...e.quiz,questions:(Array.isArray(e.quiz.questions)?e.quiz.questions:[]).map(y=>({...y,answers:Array.isArray(y?.answers)?y.answers:[]}))}}:{},...Ye(e.logo)?{logo:Ye(e.logo)}:{}},l=new Set(["schema","version","pages","skinDir"]),c=new Set(["panorama","hotspots","yaw","pitch","fov","cube","faces","analysis","transition"]),h=new Set,d=new Set(["action","actions","type","targetSceneId","label","content","points","yaw","pitch"]),f=new Set(Object.keys(a)),m=Object.keys(e).filter(y=>!f.has(y)&&!l.has(y)),g=new Set,v=new Set,p=new Set;for(const[y,E]of dn(e.scenes).entries()){if(!vt(E)||!r[y])continue;const x=new Set(Object.keys(r[y]));for(const R of Object.keys(E))!x.has(R)&&!c.has(R)&&g.add(R);const P=new Map((r[y].layers??[]).flatMap(R=>R.hotspots.map(N=>[N.id,N])));for(const R of dn(E.layers)){if(!vt(R))continue;const N=(r[y].layers??[]).find(F=>F.id===Ye(R.id));if(N){const F=new Set(Object.keys(N));for(const b of Object.keys(R))!F.has(b)&&!h.has(b)&&v.add(b)}for(const F of dn(R.hotspots)){if(!vt(F))continue;const b=P.get(Ye(F.id));if(!b)continue;const T=new Set(Object.keys(b));for(const D of Object.keys(F))!T.has(D)&&!d.has(D)&&p.add(D)}}}const u=[...m,...[...g].map(y=>`scenes[].${y}`),...[...v].map(y=>`layers[].${y}`),...[...p].map(y=>`hotspots[].${y}`)];return u.length&&t.push({code:"unknown-fields",message:`This tour has ${u.length} field(s) this version does not understand — ${u.join(", ")}. It was probably written by a newer build. Saving from here would delete them.`,data:u}),{doc:a,warnings:t,from:wt(e.schema,i)}}const jy={enabled:!0,radius:.14,angle:Math.PI/3,fill:"#3b82f6",fillOpacity:.35,stroke:"#3b82f6"};function Zy(n,e=.5){const t=n/2,i=r=>.5+Math.sin(r)*e,s=r=>.5-Math.cos(r)*e;return["M 0.5 0.5",`L ${i(-t)} ${s(-t)}`,`A ${e} ${e} 0 ${n>Math.PI?1:0} 1 ${i(t)} ${s(t)}`,"Z"].join(" ")}function Za(n){return{...jy,...n?.radar??{}}}const Ky={visible:!0,movement:"draggable",scaleMode:"fit"};function Ci(n){return{...Ky,...n?.view??{}}}function Jy(n,e,t){return!n||n.heading==null?null:Qy(n.heading+(t-(e?.north??0)))}function Qy(n){const e=Math.PI*2,t=(n%e+e)%e;return t>Math.PI?t-e:t}const ex=Math.PI/180*90,tx=Math.PI/180*8,nx=Math.PI/180*200;function Ka(n,e){return e==null||!Number.isFinite(e)||e<=0?n:Math.min(nx,Math.max(tx,n*(e/ex)))}const ix=[{id:"circle",name:"Circle",hint:"The safe one. A filled disc with a ring around it.",style:{sides:0,fill:"#3b82f6",outline:"#ffffff",outlineWidth:2,size:.032,hover:{scale:1.12},here:{fill:"#f97316",scale:1.4},visited:{fill:"#94a3b8"},locked:{fill:"#475569",outline:"#94a3b8"}}},{id:"marker",name:"Marker",hint:"Stands on the point it names, the way a map pin does.",style:{sides:0,tail:!0,fill:"#ef4444",outline:"#ffffff",outlineWidth:2,size:.045,hover:{scale:1.1},here:{fill:"#f97316",scale:1.25},visited:{fill:"#94a3b8"},locked:{fill:"#475569"}}},{id:"hexagon",name:"Hexagon",hint:"Six sides, softened. Reads as deliberate on a technical drawing.",style:{sides:6,roundness:.25,fill:"#0f172a",outline:"#38bdf8",outlineWidth:2,size:.036,hover:{scale:1.12},here:{fill:"#38bdf8",outline:"#0f172a",scale:1.35},visited:{fill:"#334155",outline:"#64748b"},locked:{fill:"#1e293b",outline:"#475569"}}},{id:"squircle",name:"Squircle",hint:"A square most of the way to a circle. Warm rather than technical.",style:{sides:4,roundness:.55,rotation:Math.PI/4,fill:"#f59e0b",outline:"#fffbeb",outlineWidth:2.5,size:.038,hover:{scale:1.15},here:{fill:"#ec4899",scale:1.35},visited:{fill:"#d6d3d1"},locked:{fill:"#a8a29e"}}},{id:"triangle",name:"Triangle",hint:"Sharp and directional. For plans where a disc gets lost in the lines.",style:{sides:3,roundness:.2,fill:"#22c55e",outline:"#052e16",outlineWidth:1.5,size:.042,hover:{scale:1.12},here:{fill:"#facc15",scale:1.3},visited:{fill:"#86efac"},locked:{fill:"#4b5563"}}},{id:"named",name:"Named",hint:"Carries the room's name. For plans with few rooms and long walks.",style:{sides:0,label:"pill",fill:"#1e293b",outline:"#ffffff",outlineWidth:1,text:"#ffffff",size:.03,hover:{fill:"#334155"},here:{fill:"#f97316"},visited:{fill:"#64748b"},locked:{fill:"#334155",text:"#94a3b8"}}}],sx={dot:{sides:0},circle:{sides:0},ring:{sides:0,fill:"transparent"},marker:{sides:0,tail:!0},label:{sides:0,label:"pill"}},Nd=ix[0].style;function on(n,e){if(!n)return e;const t=n.trim();return/^#[0-9a-f]{3,8}$/i.test(t)||/^(rgb|rgba|hsl|hsla)\([0-9a-z.,%\s/+-]*\)$/i.test(t)||/^[a-z]{3,20}$/i.test(t)?t:e}function Ri(n){if(!n.template)return n;const{template:e,...t}=n;return{...sx[e]??{},...t}}function Ud(n,e){const t=e?.pin??n?.pin;return t?Ri(t):Nd}function er(n,e){const t=Ri(n),i=e!=="default"&&t[e]||{},s=i.size??t.size??Nd.size??.032;return{fill:on(i.fill??t.fill,"#3b82f6"),outline:on(i.outline??t.outline,"#ffffff"),outlineWidth:i.outlineWidth??t.outlineWidth??2,text:on(i.text??t.text,"#ffffff"),size:s*(i.scale??1)}}const rx=320;function Fd(n){return Ri(n).sizing==="plan"}function kd(n,e,t){const i=Fd(n)?t:rx;return Math.max(6,er(n,e).size*i)}function Od(n,e,t,i="--pin"){const s=er(n,e);return{[`${i}-fill`]:s.fill,[`${i}-outline`]:s.outline,[`${i}-outline-width`]:`${s.outlineWidth}px`,[`${i}-text`]:s.text,[`${i}-size`]:`${kd(n,e,t)}px`}}function ox(n,e,t){return{...Od(n,e,t),...Od(n,"hover",t,"--pin-hover"),"--pin-hover-lift":String(er(n,"hover").size/(er(n,e).size||1))}}function ax(n,e,t){const i=kd(n,e,t);return hx(Ri(n),er(n,e).outlineWidth/2/i)}function lx(n,e){const t=Ri(n).label??"hover";return t==="pill"||t==="always"||t==="hover"&&e}function cx(n){return Ri(n).label==="pill"}function hx(n,e=0){const t=Math.round(n.sides??0),i=Math.min(1,Math.max(0,n.roundness??0)),s=Math.max(.02,.5-Math.min(.4,Math.max(0,e))),r=!!n.tail;if(t<3||i>.9999)return r?ux(s):zd(s);const o=n.rotation??0,a=r?s*.68:s,l=r?.5-s+a:.5,c=g=>{const v=-Math.PI/2+2*Math.PI*g/t+o;return{x:.5+a*Math.cos(v),y:l+a*Math.sin(v)}},h=[];for(let g=0;g<t;g++)h.push(c(g));let d=-1;if(r){let g=0;for(let p=1;p<h.length;p++)h[p].y>h[g].y+1e-9&&(g=p);const v={x:.5,y:.5+s};if(Math.abs(h[g].x-.5)<1e-6)d=g,h[g]=v;else{let p=0,u=-1/0;for(let y=0;y<h.length;y++){const E=(h[y].y+h[(y+1)%h.length].y)/2;E>u+1e-9&&(u=E,p=y)}d=p+1,h.splice(d,0,v)}}const f=h.length,m=[];for(let g=0;g<f;g++){const v=h[g],p=h[(g-1+f)%f],u=h[(g+1)%f],y=r&&g===d,E=Math.hypot(p.x-v.x,p.y-v.y),x=Math.hypot(u.x-v.x,u.y-v.y),P=y?0:i*Math.min(E,x)/2;if(P>1e-6){const R=Bd(v,p,P),N=Bd(v,u,P),F=Math.abs(dx(v,p,u))/2,b=P*Math.tan(F);m.push(`${g===0?"M":"L"} ${St(R.x)} ${St(R.y)}`),m.push(`A ${St(b)} ${St(b)} 0 0 1 ${St(N.x)} ${St(N.y)}`)}else m.push(`${g===0?"M":"L"} ${St(v.x)} ${St(v.y)}`)}return m.push("Z"),m.join(" ")}const St=n=>Math.round(n*1e4)/1e4+"";function Bd(n,e,t){const i=e.x-n.x,s=e.y-n.y,r=Math.hypot(i,s)||1,o=Math.min(t,r/2)/r;return{x:n.x+i*o,y:n.y+s*o}}function dx(n,e,t){const i=Math.atan2(e.y-n.y,e.x-n.x),s=Math.atan2(t.y-n.y,t.x-n.x);let r=i-s;for(;r<=-Math.PI;)r+=Math.PI*2;for(;r>Math.PI;)r-=Math.PI*2;return r}function zd(n){return[`M ${St(.5)} ${St(.5-n)}`,`A ${St(n)} ${St(n)} 0 1 1 ${St(.5)} ${St(.5+n)}`,`A ${St(n)} ${St(n)} 0 1 1 ${St(.5)} ${St(.5-n)}`,"Z"].join(" ")}function ux(n){const e=n*.72,t=e+(.5-n),i={x:.5,y:.5+n},s=i.y-t;if(s<=e)return zd(n);const r=Math.asin(e/s),o=Math.PI/2-r,a={x:.5-e*Math.sin(o),y:t+e*Math.cos(o)},l={x:.5+e*Math.sin(o),y:t+e*Math.cos(o)};return[`M ${St(a.x)} ${St(a.y)}`,`A ${St(e)} ${St(e)} 0 1 1 ${St(l.x)} ${St(l.y)}`,`L ${St(i.x)} ${St(i.y)}`,"Z"].join(" ")}const fx=n=>typeof n=="string"&&n.trim()!=="";function px(n,e){if(e===n.locales.default)return(i,s)=>s;const t=n.i18n?.[e]??{};return(i,s)=>fx(t[i])?t[i]:s}function Hd(n,e){if(e===n.locales.default||!n.i18n?.[e])return n;const t=px(n,e);return{...n,title:t("tour.title",n.title),...n.description?{description:t("tour.description",n.description)}:{},scenes:n.scenes.map(i=>({...i,name:t(`${i.id}.name`,i.name),...i.guide?.text?{guide:{...i.guide,text:t(`${i.id}.guide.text`,i.guide.text)}}:{},...i.subtitle?{subtitle:t(`${i.id}.subtitle`,i.subtitle)}:{},layers:i.layers.map(s=>({...s,hotspots:s.hotspots.map(r=>({...r,...r.tooltip?{tooltip:t(`${r.id}.tooltip`,r.tooltip)}:{},...r.style?.text?{style:{...r.style,text:t(`${r.id}.style.text`,r.style.text)}}:{},...r.on?{on:r.on.map(o=>({...o,actions:o.actions.map((a,l)=>{const c=`${r.id}.${o.event}.${l}`;return a.type==="info"?{...a,title:t(`${c}.title`,a.title),text:t(`${c}.text`,a.text)}:a.type==="panel"&&a.content?{...a,content:Object.fromEntries(Object.entries(a.content).map(([h,d])=>typeof d=="string"?[h,t(`${c}.content.${h}`,d)]:[h,d]))}:a.type==="narrate"&&a.text?{...a,text:t(`${c}.narrate`,a.text)}:a})}))}:{}}))}))})),...n.quiz?{quiz:{...n.quiz,...n.quiz.title?{title:t("quiz.title",n.quiz.title)}:{},...n.quiz.intro?{intro:t("quiz.intro",n.quiz.intro)}:{},...n.quiz.passMessage?{passMessage:t("quiz.passMessage",n.quiz.passMessage)}:{},...n.quiz.failMessage?{failMessage:t("quiz.failMessage",n.quiz.failMessage)}:{},questions:n.quiz.questions.map(i=>({...i,prompt:t(`${i.id}.prompt`,i.prompt),...i.explanation?{explanation:t(`${i.id}.explanation`,i.explanation)}:{},answers:i.answers.map(s=>({...s,text:t(`${s.id}.text`,s.text)}))}))}}:{},...n.graph?{graph:{...n.graph,floors:(n.graph.floors??[]).map(i=>({...i,name:t(`floor:${i.id}.name`,i.name)}))}}:{},variables:n.variables.map(i=>typeof i.initial=="string"?{...i,initial:t(`var:${i.name}.initial`,i.initial)}:i)}}const mx=[{code:"en",label:"English"},{code:"pt",label:"Português"},{code:"pt-BR",label:"Português (Brasil)"},{code:"es",label:"Español"},{code:"fr",label:"Français"},{code:"de",label:"Deutsch"},{code:"it",label:"Italiano"},{code:"nl",label:"Nederlands"},{code:"pl",label:"Polski"},{code:"ru",label:"Русский"},{code:"tr",label:"Türkçe"},{code:"ar",label:"العربية"},{code:"zh",label:"中文"},{code:"ja",label:"日本語"},{code:"ko",label:"한국어"}],gx=n=>mx.find(e=>e.code===n)?.label??n;function Vd(n){return n.scenes.some(e=>e.guide?.text||e.guide?.audio)?!0:!!n.quiz&&n.quiz.enabled!==!1&&n.quiz.questions.length>0}const Gd=n=>n.points??1,Wd=n=>n.trim().toLowerCase().replace(/\s+/g," ");function $d(n,e){if(n.kind==="text"){const s=(n.accept??[]).map(Wd).filter(Boolean);return s.length?s.includes(Wd(e[0]??"")):!1}const t=n.answers.filter(s=>s.correct).map(s=>s.id);if(!t.length)return!1;if(n.kind==="single")return e.length===1&&t.includes(e[0]);const i=new Set(e);return t.length===i.size&&t.every(s=>i.has(s))}function Xd(n){return n.kind==="text"?!(n.accept??[]).some(e=>e.trim()):!n.answers.some(e=>e.correct)}function vx(n,e){const t=n.questions.filter(l=>!Xd(l)),i=new Map(e.map(l=>[l.questionId,l.given]));let s=0,r=0;for(const l of t){const c=i.get(l.id);c&&$d(l,c)&&(s+=Gd(l),r+=1)}const o=t.reduce((l,c)=>l+Gd(c),0),a=o===0?100:Math.round(s/o*100);return{points:s,total:o,percent:a,correct:r,answered:n.questions.filter(l=>i.has(l.id)).length,questions:t.length,passed:n.passScore==null?null:a>=n.passScore}}function _x(n,e){const t=[...n];let i=e||1;for(let s=t.length-1;s>0;s-=1){i^=i<<13,i^=i>>>17,i^=i<<5;const r=Math.abs(i)%(s+1);[t[s],t[r]]=[t[r],t[s]]}return t}const yx=[{n:1,color:"#E5243B",title:"No Poverty",zh:"消除貧窮"},{n:2,color:"#DDA63A",title:"Zero Hunger",zh:"消除飢餓"},{n:3,color:"#4C9F38",title:"Good Health and Well-Being",zh:"健康與福祉"},{n:4,color:"#C5192D",title:"Quality Education",zh:"優質教育"},{n:5,color:"#FF3A21",title:"Gender Equality",zh:"性別平等"},{n:6,color:"#26BDE2",title:"Clean Water and Sanitation",zh:"淨水與衛生"},{n:7,color:"#FCC30B",title:"Affordable and Clean Energy",zh:"可負擔的潔淨能源"},{n:8,color:"#A21942",title:"Decent Work and Economic Growth",zh:"合適的工作及經濟成長"},{n:9,color:"#FD6925",title:"Industry, Innovation and Infrastructure",zh:"工業化、創新及基礎建設"},{n:10,color:"#DD1367",title:"Reduced Inequalities",zh:"減少不平等"},{n:11,color:"#FD9D24",title:"Sustainable Cities and Communities",zh:"永續城市與社區"},{n:12,color:"#BF8B2E",title:"Responsible Consumption and Production",zh:"負責任的消費與生產"},{n:13,color:"#3F7E44",title:"Climate Action",zh:"氣候行動"},{n:14,color:"#0A97D9",title:"Life Below Water",zh:"水下生命"},{n:15,color:"#56C02B",title:"Life on Land",zh:"陸域生命"},{n:16,color:"#00689D",title:"Peace, Justice and Strong Institutions",zh:"和平、正義及健全制度"},{n:17,color:"#19486A",title:"Partnerships for the Goals",zh:"多元夥伴關係"}],Ja=n=>yx.find(e=>e.n===n),xx="#64748b";function qd(n){const e=n?.[0];return e!=null&&Ja(e)?.color||xx}function po(n){const e=n.replace("#",""),t=r=>parseInt(e.slice(r,r+2),16)/255,i=r=>r<=.03928?r/12.92:((r+.055)/1.055)**2.4;return .2126*i(t(0))+.7152*i(t(2))+.0722*i(t(4))>.45?"#10131a":"#ffffff"}function Yd(n,e){return e.toLowerCase().startsWith("zh")?n.zh:n.title}const Dn=Math.PI*2,Qa=Dn-1e-6,Ex=Math.PI-1e-6,fi=(n,e,t)=>Math.min(t,Math.max(e,n));function jd(n){return((n+Math.PI)%Dn+Dn)%Dn-Math.PI}function wx(n){const e=n.source;return!e.width||!e.height?null:e.hfov!=null?e.width/fi(e.hfov,Dn/100,Dn):Math.max(e.width/Dn,e.height/Math.PI)}function Mx(n){if(n.covers&&(n.covers.yaw||n.covers.pitch))return n.covers;const e=n.source,t=wx(n),i=t&&e.width?Math.min(Dn,e.width/t):e.hfov!=null?fi(e.hfov,0,Dn):Dn,s=t&&e.height?Math.min(Math.PI,e.height/t):Math.PI,r={};return i<Qa&&(r.yaw={min:-i/2,max:i/2}),s<Ex&&(r.pitch={min:-s/2,max:s/2}),r.yaw||r.pitch?r:null}const Sx=Math.PI*.98,tr=n=>Math.tan(Math.min(Math.max(n,0),Sx)/2);function bx(n,e){const t=tr(e.hFov),i=tr(e.vFov);return Math.atan2(t,Math.cos(n)-i*Math.abs(Math.sin(n)))}function Tx(n){return Math.max(0,Math.PI/2-Math.atan(tr(n.vFov))-Math.PI/180)}function Ax(n,e){const t=Tx(e);if(n>=Math.PI)return Math.PI/2;const i=tr(e.hFov),s=tr(e.vFov),r=Math.sin(n),o=Math.abs(r)<1e-9?0:i*Math.cos(n)/r,a=Math.hypot(1,s),l=Math.max(0,Math.acos(fi(o/a,-1,1))-Math.atan(s));return Math.min(t,l)}function el(n,e,t){const i=Cx(n),s=Zd(n)?Mx(n):null;if(!i&&!s)return e;let{yaw:r,pitch:o}=e;if(i?.pitch&&(o=Kd(o,i.pitch,0)),s?.pitch&&(o=Kd(o,s.pitch,t?.vFov??0)),s?.yaw&&t){const a=Ax((s.yaw.max-s.yaw.min)/2,t);o=fi(o,-a,a)}if(o=fi(o,-Math.PI/2,Math.PI/2),i?.yaw&&(r=Rx(r,i.yaw,0)),s?.yaw){const a=(s.yaw.max-s.yaw.min)/2;if(a<Qa/2){const l=(s.yaw.min+s.yaw.max)/2,c=Math.max(0,a-(t?bx(o,t):0)),h=jd(r-l);(h<-c||h>c)&&(r=l+fi(h,-c,c))}}return r===e.yaw&&o===e.pitch?e:{...e,yaw:r,pitch:o}}const Zd=n=>!!n&&typeof n=="object"&&"source"in n,Cx=n=>{if(!n)return null;const e=Zd(n)?n.limits:n;return e&&(e.yaw||e.pitch)?e:null};function Kd(n,e,t){const i=Math.max(0,(e.max-e.min)/2-t/2),s=(e.min+e.max)/2;return fi(n,s-i,s+i)}function Rx(n,e,t){const i=Math.max(0,(e.max-e.min)/2-t/2);if(i>=Qa/2)return n;const s=(e.min+e.max)/2,r=jd(n-s);return r<-i||r>i?s+fi(r,-i,i):n}const Px=50;function Lx(n){const e=[];for(const t of n.layers)for(const i of t.hotspots)if(i.geometry.kind==="point")for(const s of i.on??[])for(const r of s.actions)r.type==="goto"&&r.targetSceneId&&e.push({sceneId:r.targetSceneId,yaw:i.geometry.yaw,hotspot:i});return e}function Ix(n,e){return Math.abs((n-e+Math.PI*3)%(Math.PI*2)-Math.PI)}function Dx(n,e,t,i={}){const s=n.scenes.find(h=>h.id===e);if(!s)return{sceneId:null,exit:null,offBy:1/0,reason:"no-exits"};const r=i.canEnter??(()=>!0),o=Lx(s).filter(h=>h.sceneId!==e&&n.scenes.some(d=>d.id===h.sceneId)&&r(h.sceneId));if(!o.length)return{sceneId:null,exit:null,offBy:1/0,reason:"no-exits"};const a=(i.toleranceDeg??Px)*Math.PI/180;let l=null,c=1/0;for(const h of o){const d=Ix(h.yaw,t.yaw);if(d>a)continue;const f=Math.abs(d-c)<.035;d<c&&!f?(l=h,c=d):f&&l&&Nx(n,e,h.sceneId,l.sceneId)&&(l=h,c=Math.min(d,c))}return l?{sceneId:l.sceneId,exit:l,offBy:c}:{sceneId:null,exit:null,offBy:1/0,reason:"too-far"}}function Nx(n,e,t,i){for(const s of n.graph?.floors??[]){const r=h=>s.nodes?.find(d=>d.sceneId===h),o=r(e),a=r(t),l=r(i);if(!o||!a||!l)continue;const c=h=>(h.x-o.x)**2+(h.y-o.y)**2;return c(a)<c(l)}return!1}const Ux=new Map;let tl="";function Fx(n){tl=n.replace(/\/+$/,"")}const kx=/^(?:[a-z]+:|\/\/)/i,Ox=n=>n.split("/").map(encodeURIComponent).join("/");function Ke(n){if(!n)return n;const e=Ux.get(n);return e||(!tl||kx.test(n)?n:`${tl}/${Ox(n.replace(/^\/+/,""))}`)}const nl=new Set,Gt=new WeakMap,Pi=new WeakMap,an=new WeakMap,nr=new WeakMap,il=new WeakMap,ir=new WeakMap,Li=new WeakMap,pi=new WeakMap,fs=new WeakSet;let Jt,sl=0,rl=0;const Yn="__aa_tgt",sr="__aa_del",mo="__aa_new",Jd=n=>{const e=Vx(n);e&&e.forEach(t=>Gx(t))},Bx=n=>{n.forEach(e=>{e.target===Jt&&zx(),Gt.has(e.target)&&Ii(e.target)})};function Qd(n){const e=n.getBoundingClientRect(),t=Jt?.clientWidth||0,i=Jt?.clientHeight||0;return e.bottom<0||e.top>i||e.right<0||e.left>t}function ol(n){const e=nr.get(n);e?.disconnect();let t=Gt.get(n),i=0;const s=5;t||(t=ps(n),Gt.set(n,t));const{offsetWidth:r,offsetHeight:o}=Jt,l=[t.top-s,r-(t.left+s+t.width),o-(t.top+s+t.height),t.left-s].map(h=>`${-1*Math.floor(h)}px`).join(" "),c=new IntersectionObserver(()=>{++i>1&&Ii(n)},{root:Jt,threshold:1,rootMargin:l});c.observe(n),nr.set(n,c)}function Ii(n,e=!0){clearTimeout(pi.get(n));const t=go(n),i=e?rr(t)?500:t.duration:0;pi.set(n,setTimeout(async()=>{const s=an.get(n);try{await s?.finished,Gt.set(n,ps(n)),ol(n)}catch{}},i))}function zx(){clearTimeout(pi.get(Jt)),pi.set(Jt,setTimeout(()=>{nl.forEach(n=>vo(n,e=>eu(()=>Ii(e))))},100))}function Hx(n){setTimeout(()=>{ir.set(n,setInterval(()=>eu(Ii.bind(null,n)),2e3))},Math.round(2e3*Math.random()))}function eu(n){typeof requestIdleCallback=="function"?requestIdleCallback(()=>n()):requestAnimationFrame(()=>n())}let jn;const tu=typeof window<"u"&&"ResizeObserver"in window;tu&&(Jt=document.documentElement,new MutationObserver(Jd),jn=new ResizeObserver(Bx),window.addEventListener("scroll",()=>{rl=window.scrollY,sl=window.scrollX}),jn.observe(Jt));function Vx(n){return n.reduce((i,s)=>[...i,...Array.from(s.addedNodes),...Array.from(s.removedNodes)],[]).every(i=>i.nodeName==="#comment")?!1:n.reduce((i,s)=>{if(i===!1)return!1;if(s.target instanceof Element){if(al(s.target),!i.has(s.target)){i.add(s.target);for(let r=0;r<s.target.children.length;r++){const o=s.target.children.item(r);if(o){if(sr in o)return!1;al(s.target,o),i.add(o)}}}if(s.removedNodes.length)for(let r=0;r<s.removedNodes.length;r++){const o=s.removedNodes[r];if(sr in o)return!1;o instanceof Element&&(i.add(o),al(s.target,o),Pi.set(o,[s.previousSibling,s.nextSibling]))}}return i},new Set)}function al(n,e){!e&&!(Yn in n)?Object.defineProperty(n,Yn,{value:n}):e&&!(Yn in e)&&Object.defineProperty(e,Yn,{value:n})}function Gx(n){var e,t;const i=n.isConnected,s=Gt.has(n);i&&Pi.has(n)&&Pi.delete(n),((e=an.get(n))===null||e===void 0?void 0:e.playState)!=="finished"&&((t=an.get(n))===null||t===void 0||t.cancel()),mo in n?su(n):s&&i?$x(n):s&&!i?Xx(n):su(n)}function Nn(n){return Number(n.replace(/[^0-9.\-]/g,""))}function Wx(n){let e=n.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function ps(n){const e=n.getBoundingClientRect(),{x:t,y:i}=Wx(n);return{top:e.top+i,left:e.left+t,width:e.width,height:e.height}}function nu(n,e,t){let i=e.width,s=e.height,r=t.width,o=t.height;const a=getComputedStyle(n);if(a.getPropertyValue("box-sizing")==="content-box"){const c=Nn(a.paddingTop)+Nn(a.paddingBottom)+Nn(a.borderTopWidth)+Nn(a.borderBottomWidth),h=Nn(a.paddingLeft)+Nn(a.paddingRight)+Nn(a.borderRightWidth)+Nn(a.borderLeftWidth);i-=h,r-=h,s-=c,o-=c}return[i,r,s,o].map(Math.round)}function go(n){return Yn in n&&Li.has(n[Yn])?Li.get(n[Yn]):{duration:250,easing:"ease-in-out"}}function iu(n){if(Yn in n)return n[Yn]}function ll(n){const e=iu(n);return e?fs.has(e):!1}function vo(n,...e){e.forEach(t=>t(n,Li.has(n)));for(let t=0;t<n.children.length;t++){const i=n.children.item(t);i&&e.forEach(s=>s(i,Li.has(i)))}}function cl(n){return Array.isArray(n)?n:[n]}function rr(n){return typeof n=="function"}function $x(n){const e=Gt.get(n),t=ps(n);if(!ll(n))return Gt.set(n,t);if(Qd(n)){Gt.set(n,t),ol(n);return}let i;if(!e)return;const s=go(n);if(typeof s!="function"){let r=e.left-t.left,o=e.top-t.top;const a=e.left+e.width-(t.left+t.width);e.top+e.height-(t.top+t.height)==0&&(o=0),a==0&&(r=0);const[c,h,d,f]=nu(n,e,t),m={transform:`translate(${r}px, ${o}px)`},g={transform:"translate(0, 0)"};c!==h&&(m.width=`${c}px`,g.width=`${h}px`),d!==f&&(m.height=`${d}px`,g.height=`${f}px`),i=n.animate([m,g],{duration:s.duration,easing:s.easing})}else{const[r]=cl(s(n,"remain",e,t));i=new Animation(r),i.play()}an.set(n,i),Gt.set(n,t),i.addEventListener("finish",Ii.bind(null,n,!1),{once:!0})}function su(n){mo in n&&delete n[mo];const e=ps(n);Gt.set(n,e);const t=go(n);if(!ll(n))return;if(Qd(n)){ol(n);return}let i;if(typeof t!="function")i=n.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:t.duration*1.5,easing:"ease-in"});else{const[s]=cl(t(n,"add",e));i=new Animation(s),i.play()}an.set(n,i),i.addEventListener("finish",Ii.bind(null,n,!1),{once:!0})}function ru(n,e){var t;n.remove(),Gt.delete(n),Pi.delete(n),an.delete(n),(t=nr.get(n))===null||t===void 0||t.disconnect(),setTimeout(()=>{if(sr in n&&delete n[sr],Object.defineProperty(n,mo,{value:!0,configurable:!0}),e&&n instanceof HTMLElement)for(const i in e)n.style[i]=""},0)}function Xx(n){var e;if(!Pi.has(n)||!Gt.has(n))return;const[t,i]=Pi.get(n);Object.defineProperty(n,sr,{value:!0,configurable:!0});const s=window.scrollX,r=window.scrollY;if(i&&i.parentNode&&i.parentNode instanceof Element?i.parentNode.insertBefore(n,i):t&&t.parentNode?t.parentNode.appendChild(n):(e=iu(n))===null||e===void 0||e.appendChild(n),!ll(n))return ru(n);const[o,a,l,c]=Yx(n),h=go(n),d=Gt.get(n);(s!==sl||r!==rl)&&qx(n,s,r,h);let f,m={position:"absolute",top:`${o}px`,left:`${a}px`,width:`${l}px`,height:`${c}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!rr(h))Object.assign(n.style,m),f=n.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:h.duration,easing:"ease-out"});else{const[g,v]=cl(h(n,"remove",d));v?.styleReset!==!1&&(m=v?.styleReset||m,Object.assign(n.style,m)),f=new Animation(g),f.play()}an.set(n,f),f.addEventListener("finish",()=>ru(n,m),{once:!0})}function qx(n,e,t,i){const s=sl-e,r=rl-t,o=document.documentElement.style.scrollBehavior;if(getComputedStyle(Jt).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+s,window.scrollY+r),!n.parentElement)return;const l=n.parentElement;let c=l.clientHeight,h=l.clientWidth;const d=performance.now();function f(){requestAnimationFrame(()=>{if(!rr(i)){const m=c-l.clientHeight,g=h-l.clientWidth;d+i.duration>performance.now()?(window.scrollTo({left:window.scrollX-g,top:window.scrollY-m}),c=l.clientHeight,h=l.clientWidth,f()):document.documentElement.style.scrollBehavior=o}})}f()}function Yx(n){var e;const t=Gt.get(n),[i,,s]=nu(n,t,ps(n));let r=n.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const o=getComputedStyle(r),a=!an.has(n)||((e=an.get(n))===null||e===void 0?void 0:e.playState)==="finished"?ps(r):Gt.get(r),l=Math.round(t.top-a.top)-Nn(o.borderTopWidth),c=Math.round(t.left-a.left)-Nn(o.borderLeftWidth);return[l,c,i,s]}function jx(n,e={}){if(tu&&jn&&!(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!rr(e)&&!e.disrespectUserMotionPreference)){fs.add(n),getComputedStyle(n).position==="static"&&Object.assign(n.style,{position:"relative"}),vo(n,Ii,Hx,o=>jn?.observe(o)),rr(e)?Li.set(n,e):Li.set(n,{duration:250,easing:"ease-in-out",...e});const r=new MutationObserver(Jd);r.observe(n,{childList:!0}),il.set(n,r),nl.add(n)}return Object.freeze({parent:n,enable:()=>{fs.add(n)},disable:()=>{fs.delete(n),vo(n,i=>{const s=an.get(i);try{s?.cancel()}catch{}an.delete(i);const r=pi.get(i);r&&clearTimeout(r),pi.delete(i);const o=ir.get(i);o&&clearInterval(o),ir.delete(i)})},isEnabled:()=>fs.has(n),destroy:()=>{fs.delete(n),nl.delete(n),Li.delete(n);const i=il.get(n);i?.disconnect(),il.delete(n),vo(n,s=>{jn?.unobserve(s);const r=an.get(s);try{r?.cancel()}catch{}an.delete(s);const o=nr.get(s);o?.disconnect(),nr.delete(s);const a=ir.get(s);a&&clearInterval(a),ir.delete(s);const l=pi.get(s);l&&clearTimeout(l),pi.delete(s),Gt.delete(s),Pi.delete(s)})}})}const Zx=180;function Kx(n,e=Zx){if(!n||!(n instanceof HTMLElement))return null;try{return jx(n,{duration:e,easing:"cubic-bezier(0.22, 1, 0.36, 1)"})}catch{return null}}const or="data-tour-scene",Jx="data-tour-current",ou="data-tour-scenes",Di="data-tour-field",_o="data-tour-embed",Qx="data-tour-embed-close",au="data-tour-embedded",eE="data-tour-embed-current",tE="tour-embed",lu=new WeakMap;function nE(n){const e=lu.get(n);if(e)return e;const t=n.firstElementChild;if(!t)return null;const i=t.cloneNode(!0);return lu.set(n,i),i}function iE(n,e){const t=n.matches(`[${Di}]`)?[n,...n.querySelectorAll(`[${Di}]`)]:[...n.querySelectorAll(`[${Di}]`)];for(const i of t)switch(i.getAttribute(Di)){case"name":i.textContent=e.name??"";break;case"subtitle":i.textContent=e.subtitle??"",e.subtitle?i.removeAttribute("hidden"):i.setAttribute("hidden","");break;case"thumb":e.thumbnail?(i.setAttribute("src",Ke(e.thumbnail)??e.thumbnail),i.removeAttribute("hidden")):(i.removeAttribute("src"),i.setAttribute("hidden",""));break}}function yo(n,e){for(const t of n.querySelectorAll(`[${ou}]`)){const i=nE(t);i&&t.replaceChildren(...e.map(s=>{const r=i.cloneNode(!0);return r.setAttribute(or,s.id),iE(r,s),r}))}}function cu(n,e,t={},i){const s=a=>!t.skip||!t.skip.contains(a),r=a=>{const l=a.target,c=l?.closest?.(`[${Qx}]`);if(c&&s(c)){a.preventDefault(),i?.closeEmbed();return}const h=l?.closest?.(`[${_o}]`);if(h&&s(h)){const m=h.getAttribute("href")??h.getAttribute(_o);if(m&&m!=="#"&&i){a.preventDefault(),i.openEmbed(m);return}}const d=l?.closest?.(`[${or}]`),f=d?.getAttribute(or);!f||!s(d)||(a.preventDefault(),e.goToScene(f))},o=a=>{const l=a===void 0?e.sceneId:a;for(const c of n.querySelectorAll(`[${or}]`)){if(!s(c))continue;const h=c.getAttribute(or)===l;c.toggleAttribute(Jx,h),h?c.setAttribute("aria-current","location"):c.removeAttribute("aria-current")}};return n.addEventListener("click",r),o(),{update:o,destroy(){n.removeEventListener("click",r)}}}const hu="tour-skin",sE="tour-skin-style";function rE(n,e,t){const i=n.querySelector(`:scope > .${hu}`),s=i??document.createElement("div");i||(s.className=hu,n.appendChild(s)),Kx(s);let r=null;const o=m=>{if(!i){if(!m){r?.remove(),r=null;return}r||(r=document.createElement("style"),r.className=sE,n.appendChild(r)),r.textContent=m}};let a=t.scenes;const l=m=>{s.innerHTML=m,yo(s,a)};i?yo(s,a):(l(t.html??""),o(t.css??""));let c=null;const h=m=>{for(const g of s.querySelectorAll(`[${_o}]`)){const v=g.getAttribute("href")??g.getAttribute(_o),p=m!=null&&v===m;g.toggleAttribute(eE,p),p?g.setAttribute("aria-current","true"):g.removeAttribute("aria-current")}},d={openEmbed(m){c||(c=document.createElement("iframe"),c.className=tE,c.setAttribute("allow","xr-spatial-tracking; fullscreen; gyroscope; accelerometer"),c.setAttribute("allowfullscreen",""),c.setAttribute("referrerpolicy","no-referrer"),c.setAttribute("title",""),n.insertBefore(c,s)),c.src!==m&&(c.src=m),s.setAttribute(au,""),h(m)},closeEmbed(){s.removeAttribute(au),h(null),c?.remove(),c=null}},f=cu(s,e,{},d);return{layer:s,update:f.update,openEmbed:d.openEmbed,closeEmbed:d.closeEmbed,setHtml(m){d.closeEmbed(),l(m),f.update()},setCss:o,setScenes(m){a=m,yo(s,a),f.update()},destroy(){f.destroy(),i||(s.remove(),r?.remove())}}}function oE(n){return n.length<2?"":`<nav class="ts-rail" ${ou} aria-label="Scenes"><button class="ts-rail-item" type="button"><img class="ts-rail-thumb" ${Di}="thumb" alt="" hidden><span class="ts-rail-name" ${Di}="name"></span><span class="ts-rail-sub" ${Di}="subtitle" hidden></span></button></nav>`}function aE(){return`.ts-rail {
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  max-width: min(92%, 900px);
  padding: 6px;
  overflow-x: auto;
  border-radius: var(--tour-radius, 10px);
  background: rgba(18, 20, 24, 0.72);
  backdrop-filter: blur(8px);
  scrollbar-width: none;
}
.ts-rail::-webkit-scrollbar { display: none; }

.ts-rail-item {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 108px;
  padding: 5px;
  border: 0;
  border-radius: calc(var(--tour-radius, 10px) - 4px);
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s ease-out;
}
.ts-rail-item:hover { background: rgba(255, 255, 255, 0.1); }

/* Hidden by the runtime on a scene that has no thumbnail, which is why the
   item is laid out to look right either way. */
.ts-rail-thumb {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.07);
}
.ts-rail-thumb[hidden] { display: none; }

.ts-rail-sub {
  display: block;
  padding: 0 3px;
  font-size: 10px;
  line-height: 1.3;
  opacity: 0.62;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ts-rail-sub[hidden] { display: none; }

.ts-rail-name {
  display: block;
  padding: 0 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* The runtime sets this on the link for the room you are in. */
.ts-rail-item[data-tour-current] {
  background: var(--tour-accent, #0099ff);
  color: #fff;
}
`}function lE(n){const e=n.skin?.html?.trim();return e?{html:e,css:n.skin?.css??""}:{html:oE(n.scenes),css:aE()}}/*!
 * Photo Sphere Viewer / Markers Plugin 5.14.1
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var cE=Object.defineProperty,hE=(n,e)=>{for(var t in e)cE(n,t,{get:e[t],enumerable:!0})},dE={};hE(dE,{EnterMarkerEvent:()=>vu,GotoMarkerDoneEvent:()=>hl,HideMarkersEvent:()=>ar,LeaveMarkerEvent:()=>mu,MarkerVisibilityEvent:()=>uu,MarkersPluginEvent:()=>un,RenderMarkersListEvent:()=>Ru,SelectMarkerEvent:()=>yu,SelectMarkerListEvent:()=>Eu,SetMarkersEvent:()=>Tu,ShowMarkersEvent:()=>lr,UnselectMarkerEvent:()=>Mu});var un=class extends Os{},du=class up extends un{constructor(e,t){super(up.type),this.marker=e,this.visible=t}};du.type="marker-visibility";var uu=du,fu=class fp extends un{constructor(e){super(fp.type),this.marker=e}};fu.type="goto-marker-done";var hl=fu,pu=class pp extends un{constructor(e){super(pp.type),this.marker=e}};pu.type="leave-marker";var mu=pu,gu=class mp extends un{constructor(e){super(mp.type),this.marker=e}};gu.type="enter-marker";var vu=gu,_u=class gp extends un{constructor(e,t,i){super(gp.type),this.marker=e,this.doubleClick=t,this.rightClick=i}};_u.type="select-marker";var yu=_u,xu=class vp extends un{constructor(e){super(vp.type),this.marker=e}};xu.type="select-marker-list";var Eu=xu,wu=class _p extends un{constructor(e){super(_p.type),this.marker=e}};wu.type="unselect-marker";var Mu=wu,Su=class yp extends un{constructor(){super(yp.type)}};Su.type="hide-markers";var ar=Su,bu=class xp extends un{constructor(e){super(xp.type),this.markers=e}};bu.type="set-markers";var Tu=bu,Au=class Ep extends un{constructor(){super(Ep.type)}};Au.type="show-markers";var lr=Au,Cu=class wp extends un{constructor(e){super(wp.type),this.markers=e}};Cu.type="render-markers-list";var Ru=Cu,uE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,cr=class extends Yt{constructor(n){super(n,{className:"psv-markers-button",icon:uE,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(lr.type,this),this.plugin.addEventListener(ar.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(lr.type,this),this.plugin.removeEventListener(ar.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(n){n instanceof lr?this.toggleActive(!0):n instanceof ar&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};cr.id="markers";var Pu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,xo="http://www.w3.org/2000/svg",bt="psvMarker",fE=Re.dasherize(bt),hr="marker",ms="markersList",dl={amount:2,duration:100,easing:"linear"},pE=(n,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${Pu} ${e}</h1>
    <ul class="psv-panel-menu-list">
    ${n.map(t=>`
        <li data-${fE}="${t.id}" class="psv-panel-menu-item" tabindex="0">
          ${t.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${t.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${t.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,Eo=class extends Yt{constructor(n){super(n,{className:" psv-markers-list-button",icon:Pu,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(Ne.ShowPanelEvent.type,this),this.viewer.addEventListener(Ne.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(Ne.ShowPanelEvent.type,this),this.viewer.removeEventListener(Ne.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(n){n instanceof Ne.ShowPanelEvent?this.toggleActive(n.panelId===ms):n instanceof Ne.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};Eo.id="markersList";var Lu=new O,mE=new Kn,Iu=new O,gE=class extends Ot{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}},Un=new xt,vE=new xt,_E=class{constructor(e={}){const t=this;let i,s,r,o;const a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:i,height:s}},this.render=function(p,u){const y=u.projectionMatrix.elements[5]*o;u.view&&u.view.enabled?(c.style.transform=`translate( ${-u.view.offsetX*(i/u.view.width)}px, ${-u.view.offsetY*(s/u.view.height)}px )`,c.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):c.style.transform="",p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let E,x;u.isOrthographicCamera&&(E=-(u.right+u.left)/2,x=(u.top+u.bottom)/2);const P=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,R=u.isOrthographicCamera?`scale( ${P} )scale(`+y+")translate("+d(E)+"px,"+d(x)+"px)"+f(u.matrixWorldInverse):`scale( ${P} )translateZ(`+y+"px)"+f(u.matrixWorldInverse),F=(u.isPerspectiveCamera?"perspective("+y+"px) ":"")+R+"translate("+r+"px,"+o+"px)";a.camera.style!==F&&(h.style.transform=F,a.camera.style=F),v(p,p,u)},this.setSize=function(p,u){i=p,s=u,r=i/2,o=s/2,l.style.width=p+"px",l.style.height=u+"px",c.style.width=p+"px",c.style.height=u+"px",h.style.width=p+"px",h.style.height=u+"px"};function d(p){return Math.abs(p)<1e-10?0:p}function f(p){const u=p.elements;return"matrix3d("+d(u[0])+","+d(-u[1])+","+d(u[2])+","+d(u[3])+","+d(u[4])+","+d(-u[5])+","+d(u[6])+","+d(u[7])+","+d(u[8])+","+d(-u[9])+","+d(u[10])+","+d(u[11])+","+d(u[12])+","+d(-u[13])+","+d(u[14])+","+d(u[15])+")"}function m(p){const u=p.elements;return"translate(-50%,-50%)"+("matrix3d("+d(u[0])+","+d(u[1])+","+d(u[2])+","+d(u[3])+","+d(-u[4])+","+d(-u[5])+","+d(-u[6])+","+d(-u[7])+","+d(u[8])+","+d(u[9])+","+d(u[10])+","+d(u[11])+","+d(u[12])+","+d(u[13])+","+d(u[14])+","+d(u[15])+")")}function g(p){p.isCSS3DObject&&(p.element.style.display="none");for(let u=0,y=p.children.length;u<y;u++)g(p.children[u])}function v(p,u,y,E){if(p.visible===!1){g(p);return}if(p.isCSS3DObject){const x=p.layers.test(y.layers)===!0,P=p.element;if(P.style.display=x===!0?"":"none",x===!0){p.onBeforeRender(t,u,y);let R;p.isCSS3DSprite?(Un.copy(y.matrixWorldInverse),Un.transpose(),p.rotation2D!==0&&Un.multiply(vE.makeRotationZ(p.rotation2D)),p.matrixWorld.decompose(Lu,mE,Iu),Un.setPosition(Lu),Un.scale(Iu),Un.elements[3]=0,Un.elements[7]=0,Un.elements[11]=0,Un.elements[15]=1,R=m(Un)):R=m(p.matrixWorld);const N=a.objects.get(p);if(N===void 0||N.style!==R){P.style.transform=R;const F={style:R};a.objects.set(p,F)}P.parentNode!==h&&h.appendChild(P),p.onAfterRender(t,u,y)}}for(let x=0,P=p.children.length;x<P;x++)v(p.children[x],u,y)}}},yE=class{constructor(n){this.viewer=n,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new _E({element:this.element}),this.scene=new Dr,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(t=>{const i=t.target[bt];i.config.visible&&(i.viewportIntersection=t.isIntersecting)})},{root:this.element}),n.addEventListener(Ne.ReadyEvent.type,this,{once:!0}),n.addEventListener(Ne.SizeUpdatedEvent.type,this),n.addEventListener(Ne.RenderEvent.type,this)}handleEvent(n){switch(n.type){case Ne.ReadyEvent.type:case Ne.SizeUpdatedEvent.type:this.updateSize();break;case Ne.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(Ne.ReadyEvent.type,this),this.viewer.removeEventListener(Ne.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(Ne.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const n=this.viewer.getSize();this.renderer.setSize(n.width,n.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(n){this.scene.add(n.threeElement),this.intersectionObserver.observe(n.domElement)}removeObject(n){this.scene.remove(n.threeElement),this.intersectionObserver.unobserve(n.domElement)}},wo=(n=>(n.image="image",n.html="html",n.element="element",n.imageLayer="imageLayer",n.videoLayer="videoLayer",n.elementLayer="elementLayer",n.polygon="polygon",n.polygonPixels="polygonPixels",n.polyline="polyline",n.polylinePixels="polylinePixels",n.square="square",n.rect="rect",n.circle="circle",n.ellipse="ellipse",n.path="path",n))(wo||{});function ul(n,e=!1){const t=[];if(Object.keys(wo).forEach(i=>{n[i]&&t.push(i)}),t.length===0&&!e)throw new Se(`missing marker content, either ${Object.keys(wo).join(", ")}`);if(t.length>1)throw new Se(`multiple marker content, either ${Object.keys(wo).join(", ")}`);return t[0]}var Du=class{constructor(n,e,t){if(this.viewer=n,this.plugin=e,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!t.id)throw new Se("missing marker id");this.type=ul(t),this.createElement(),this.update(t)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(n){const e=ul(n,!0);if(e!==void 0&&e!==this.type)throw new Se(`cannot change marker ${n.id} type`);if(this.config=Re.deepmerge(this.config,n),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),Re.isNil(this.config.visible)&&(this.config.visible=!0),Re.isNil(this.config.zIndex)&&(this.config.zIndex=1),Re.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const t=this.config.rotation;typeof t=="object"?this.config.rotation={yaw:t.yaw?Re.parseAngle(t.yaw,!0,!1):0,pitch:t.pitch?Re.parseAngle(t.pitch,!0,!1):0,roll:t.roll?Re.parseAngle(t.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:Re.parseAngle(t,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=Re.parsePoint(this.config.anchor)}getListContent(){return this.config.listContent?this.config.listContent:this.config.tooltip?.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(n,e,t=!1){if(this.state.visible&&this.config.tooltip?.content&&this.state.position2D){const i={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(n||e){const s=Re.getPosition(this.viewer.container);i.top=e-s.y+10,i.left=n-s.x,i.box={width:20,height:20}}else i.top=this.state.position2D.y,i.left=this.state.position2D.x;else{const s=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let r=this.state.size.width,o=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(r*=this.config.hoverScale.amount,o*=this.config.hoverScale.amount),i.top=s.y-o*this.state.anchor.y+o/2,i.left=s.x-r*this.state.anchor.x+r/2,i.box={width:r,height:o}}this.tooltip?t?this.tooltip.update(this.config.tooltip.content,i):this.tooltip.move(i):this.tooltip=this.viewer.createTooltip(i)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},fl=class extends Du{get domElement(){return this.element}constructor(n,e,t){super(n,e,t)}afterCreateElement(){this.element[bt]=this}destroy(){delete this.element[bt],super.destroy()}update(n){super.update(n);const e=this.domElement;e.id=`psv-marker-${this.config.id}`,e.setAttribute("class","psv-marker"),this.state.visible&&e.classList.add("psv-marker--visible"),this.config.tooltip&&e.classList.add("psv-marker--has-tooltip"),this.config.content&&e.classList.add("psv-marker--has-content"),this.config.className&&Re.addClasses(e,this.config.className),e.style.opacity=`${this.config.opacity}`,e.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(e.style,this.config.style)}},Mo=class extends fl{constructor(n,e,t){super(n,e,t)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:n,zoomLevel:e,hoveringMarker:t}){this.__updateSize();const i=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return i.x-=this.state.size.width*this.state.anchor.x,i.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&i.x+this.state.size.width>=0&&i.x-this.state.size.width<=this.viewer.state.size.width&&i.y+this.state.size.height>=0&&i.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${i.x}px ${i.y}px 0px`,this.applyScale({zoomLevel:e,viewerPosition:n,mouseover:this===t}),i):null}update(n){if(super.update(n),!Re.isExtendedPosition(this.config.position))throw new Se(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(t){throw new Se(`invalid marker ${this.id} position`,t)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.domElement;e.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||dl:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),e.style.rotate=this.config.rotation.roll!==0?it.radToDeg(this.config.rotation.roll)+"deg":null,e.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const n=this.domElement,e=!this.state.visible||!this.state.size;if(e&&n.classList.add("psv-marker--transparent"),this.isSvg()){const t=n.firstElementChild.getBoundingClientRect();this.state.size={width:t.width,height:t.height}}else this.state.size={width:n.offsetWidth,height:n.offsetHeight};e&&n.classList.remove("psv-marker--transparent"),this.isSvg()&&(n.style.width=this.state.size.width+"px",n.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:n,viewerPosition:e,mouseover:t}){t!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let i=1;if(typeof this.config.scale=="function")i=this.config.scale(n,e);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;i*=s+(r-s)*cs.EASINGS.inQuad(n/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,o=it.degToRad(this.viewer.state.hFov)/2,a=Math.abs(Re.getShortestArc(this.state.position.yaw,e.yaw));i*=r+(s-r)*cs.EASINGS.outQuad(Math.max(0,(o-a)/o))}}t&&this.config.hoverScale&&(i*=this.config.hoverScale.amount),this.domElement.style.scale=`${i}`}},xE=`// https://www.8thwall.com/playground/chromakey-threejs

uniform sampler2D map;
uniform float alpha;
uniform bool keying;
uniform vec3 color;
uniform float similarity;
uniform float smoothness;
uniform float spill;

varying vec2 vUv;

vec2 RGBtoUV(vec3 rgb) {
    return vec2(
        rgb.r * -0.169 + rgb.g * -0.331 + rgb.b *  0.5    + 0.5,
        rgb.r *  0.5   + rgb.g * -0.419 + rgb.b * -0.081  + 0.5
    );
}

void main(void) {
    gl_FragColor = texture2D(map, vUv);

    if (keying) {
        float chromaDist = distance(RGBtoUV(gl_FragColor.rgb), RGBtoUV(color));

        float baseMask = chromaDist - similarity;
        float fullMask = pow(clamp(baseMask / smoothness, 0., 1.), 1.5);
        gl_FragColor.a *= fullMask * alpha;

        float spillVal = pow(clamp(baseMask / spill, 0., 1.), 1.5);
        float desat = clamp(gl_FragColor.r * 0.2126 + gl_FragColor.g * 0.7152 + gl_FragColor.b * 0.0722, 0., 1.);
        gl_FragColor.rgb = mix(vec3(desat, desat, desat), gl_FragColor.rgb, spillVal);
    } else {
        gl_FragColor.a *= alpha;
    }
}
`,EE=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,wE=class extends Wn{get map(){return this.uniforms.map.value}set map(n){this.uniforms.map.value=n}set alpha(n){this.uniforms.alpha.value=n}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(n){this.uniforms.keying.value=n?.enabled===!0,n?.enabled&&(typeof n.color=="object"&&"r"in n.color?this.uniforms.color.value.set(n.color.r/255,n.color.g/255,n.color.b/255):this.uniforms.color.value.set(n.color??65280),this.uniforms.similarity.value=n.similarity??.2,this.uniforms.smoothness.value=n.smoothness??.2)}constructor(n){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:n?.map},repeat:{value:new ut(1,1)},offset:{value:new ut(0,0)},alpha:{value:n?.alpha??1},keying:{value:!1},color:{value:new pt(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:EE,fragmentShader:xE}),this.chromaKey=n?.chromaKey}};function ME({src:n,withCredentials:e,muted:t,autoplay:i}){const s=document.createElement("video");return s.crossOrigin=e?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=i,s.muted=t,s.preload="metadata",n instanceof MediaStream?s.srcObject=n:s.src=n,s}function SE(n,e,t){const[i,s]=n,[r,o]=e,a=Re.greatArcDistance(n,e),l=Math.sin((1-t)*a)/Math.sin(a),c=Math.sin(t*a)/Math.sin(a),h=l*Math.cos(s)*Math.cos(i)+c*Math.cos(o)*Math.cos(r),d=l*Math.cos(s)*Math.sin(i)+c*Math.cos(o)*Math.sin(r),f=l*Math.sin(s)+c*Math.sin(o);return[Math.atan2(d,h),Math.atan2(f,Math.sqrt(h*h+d*d))]}function bE(n){const e=[n[0]];let t=0;for(let i=1;i<n.length;i++){const s=n[i-1][0]-n[i][0];s>Math.PI?t+=1:s<-Math.PI&&(t-=1),e.push([n[i][0]+t*2*Math.PI,n[i][1]])}return e}function Nu(n){return n.reduce((e,t)=>e.add(t),new O).normalize()}function TE(n){const e=bE(n);let t=0;const i=[];for(let r=0;r<e.length-1;r++){const o=Re.greatArcDistance(e[r],e[r+1])*cs.SPHERE_RADIUS;i.push(o),t+=o}let s=0;for(let r=0;r<e.length-1;r++){if(s+i[r]>t/2){const o=(t/2-s)/i[r];return SE(e[r],e[r+1],o)}s+=i[r]}return e[Math.round(e.length/2)]}var So=new O,Uu=new O,pl=new O,Fu=new O,ku=new O,Ou=new O;function AE(n,e,t){So.copy(t).normalize(),Uu.crossVectors(n,e).normalize(),pl.crossVectors(Uu,n).normalize(),Fu.copy(n).multiplyScalar(-So.dot(pl)),ku.copy(pl).multiplyScalar(So.dot(n));const i=new O().addVectors(Fu,ku).normalize();return Ou.crossVectors(i,So),i.applyAxisAngle(Ou,.01).multiplyScalar(cs.SPHERE_RADIUS)}var CE=class extends Du{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(n,e,t){super(n,e,t)}is3d(){return!0}createElement(){const n=new wE({alpha:0}),e=new Ds(1,1),t=new jt(e,n);t.userData={[bt]:this},Object.defineProperty(t,"visible",{enumerable:!0,get:function(){return this.userData[bt].config.visible},set:function(i){this.userData[bt].config.visible=i}}),this.element=new oi().add(t),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[bt],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(n){super.update(n);const e=this.threeMesh,t=e.parent,i=e.material;if(Re.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(r){throw new Se(`invalid marker ${this.id} position`,r)}if(!this.config.size)throw new Se(`missing marker ${this.id} size`);this.state.size=this.config.size,e.scale.set(this.config.size.width/100,this.config.size.height/100,1),e.position.set(e.scale.x*(.5-this.state.anchor.x),e.scale.y*(this.state.anchor.y-.5),0),e.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,t.position),t.lookAt(0,t.position.y,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll);const s=e.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(r=>{const o=new O;return o.fromBufferAttribute(s,r),e.localToWorld(o)})}else{if(this.config.position?.length!==4)throw new Se(`missing marker ${this.id} position`);let s;try{s=this.config.position.map(l=>this.viewer.dataHelper.cleanPosition(l))}catch(l){throw new Se(`invalid marker ${this.id} position`,l)}const r=s.map(l=>this.viewer.dataHelper.sphericalCoordsToVector3(l)),o=Nu(r);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(o),this.state.positions3D=r;const a=e.geometry.getAttribute("position");[r[0],r[1],r[3],r[2]].forEach((l,c)=>{a.setX(c,l.x),a.setY(c,l.y),a.setZ(c,l.z)}),a.needsUpdate=!0,this.__setTextureWrap(i)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){i.map?.dispose();const s=ME({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials(this.config.videoLayer),muted:!0,autoplay:this.config.autoplay??!0}),r=new wm(s);i.map=r,i.alpha=0,s.addEventListener("loadedmetadata",()=>{this.viewer&&(i.alpha=this.config.opacity,Re.isExtendedPosition(this.config.position)||(e.material.userData[bt]={width:s.videoWidth,height:s.videoHeight},this.__setTextureWrap(i)))},{once:!0}),s.autoplay&&s.play(),this.definition=this.config.videoLayer}else i.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){i.map?.dispose();const s=new kt;i.map=s,i.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(r=>{this.viewer&&(Re.isExtendedPosition(this.config.position)||(e.material.userData[bt]={width:r.width,height:r.height},this.__setTextureWrap(i)),s.image=r,s.anisotropy=4,s.needsUpdate=!0,i.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else i.alpha=this.config.opacity;break}i.chromaKey=this.config.chromaKey,e.renderOrder=1e3+this.config.zIndex,e.geometry.boundingBox=null}__setTextureWrap(n){const e=n.userData[bt];if(!e||!e.height||!e.width){n.repeat.set(1,1),n.offset.set(0,0);return}const t=this.config.position.map(d=>this.viewer.dataHelper.cleanPosition(d)),i=Re.greatArcDistance([t[0].yaw,t[0].pitch],[t[1].yaw,t[1].pitch]),s=Re.greatArcDistance([t[3].yaw,t[3].pitch],[t[2].yaw,t[2].pitch]),r=Re.greatArcDistance([t[1].yaw,t[1].pitch],[t[2].yaw,t[2].pitch]),o=Re.greatArcDistance([t[0].yaw,t[0].pitch],[t[3].yaw,t[3].pitch]),a=(i+s)/(r+o),l=e.width/e.height;let c=0,h=0;a<l?c=l-a:h=1/l-1/a,n.repeat.set(1-c,1-h),n.offset.set(c/2,h/2)}},RE=class extends fl{constructor(n,e,t){super(n,e,t),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new gE(this.element),this.object.userData={[bt]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[bt].config.visible},set:function(n){this.userData[bt].config.visible=n}}),this.afterCreateElement()}destroy(){delete this.object.userData[bt],delete this.object,super.destroy()}render({viewerPosition:n,zoomLevel:e}){const t=this.domElement;if(this.state.size={width:t.offsetWidth,height:t.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const s=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return this.config.elementLayer.updateMarker?.({marker:this,position:s,viewerPosition:n,zoomLevel:e,viewerSize:this.viewer.state.size}),s}else return null}update(n){if(super.update(n),!Re.isExtendedPosition(this.config.position))throw new Se(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(i){throw new Se(`invalid marker ${this.id} position`,i)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.threeElement,t=this.domElement;t.classList.add("psv-marker--css3d"),t.childNodes.forEach(i=>i.remove()),t.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",e.position.copy(this.state.positions3D[0]).multiplyScalar(100),e.lookAt(0,this.state.positions3D[0].y*100,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll)}},PE=class extends Mo{constructor(n,e,t){super(n,e,t)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(n){const e=super.render(n);return e&&this.type==="element"&&this.config.element.updateMarker?.({marker:this,position:e,viewerPosition:n.viewerPosition,zoomLevel:n.zoomLevel,viewerSize:this.viewer.state.size}),e}update(n){super.update(n);const e=this.domElement;if(this.config.image&&!this.config.size)throw new Se(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,e.style.width=this.config.size.width+"px",e.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,e.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,e.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,e.childNodes.forEach(t=>t.remove()),e.appendChild(this.config.element),this.config.element.style.display="block");break}}},LE=class extends fl{constructor(n,e,t){super(n,e,t)}createElement(){this.element=document.createElementNS(xo,"path"),this.element[bt]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const n=this.__getAllPolyPositions();if(n[0].length>(this.isPolygon?2:1)){const t=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),i=n.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(o=>`${o.x-t.x},${o.y-t.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",i),this.domElement.setAttributeNS(null,"transform",`translate(${t.x} ${t.y})`),t}else return null}update(n){super.update(n);const e=this.domElement;e.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([t,i])=>{e.setAttributeNS(null,Re.dasherize(t),i)}),this.isPolyline&&!this.config.svgStyle.fill&&e.setAttributeNS(null,"fill","none")):this.isPolygon?e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let t=this.config[this.type];if(!Array.isArray(t[0])&&typeof t[0]!="object")for(let i=0;i<t.length;i++)t.splice(i,2,[t[i],t[i+1]]);if(!Array.isArray(t[0][0])&&typeof t[0][0]!="object"&&(t=[t]),this.isPolyline&&t.length>1)throw new Se("polylines cannot have holes");this.isPixels?this.definition=t.map(i=>i.map(s=>{let r;return Re.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:s[0],textureY:s[1]}),[r.yaw,r.pitch]})):this.definition=t.map(i=>i.map(s=>{let r;return Re.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.cleanPosition({yaw:s[0],pitch:s[1]}),[r.yaw,r.pitch]}))}catch(t){throw new Se(`invalid marker ${this.id} position`,t)}if(this.positions3D=this.coords.map(t=>t.map(i=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:i[0],pitch:i[1]}))),this.isPolygon){const t=Nu(this.positions3D[0]);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(t)}else{const t=TE(this.coords[0]);this.state.position={yaw:t[0],pitch:t[1]}}this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(n=>this.__getPolyPositions(n))}__getPolyPositions(n){const e=n.length,t=n.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),i=[];return t.forEach((s,r)=>{s.visible||[r===0?t[e-1]:t[r-1],r===e-1?t[0]:t[r+1]].forEach(a=>{a.visible&&i.push({visible:a.vector,invisible:s.vector,index:r})})}),i.reverse().forEach(s=>{t.splice(s.index,0,{vector:AE(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),t.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},IE=class extends Mo{get svgElement(){return this.domElement.firstElementChild}constructor(n,e,t){super(n,e,t)}isSvg(){return!0}createElement(){const n=this.type==="square"?"rect":this.type,e=document.createElementNS(xo,n);this.element=document.createElementNS(xo,"svg"),this.element.appendChild(e),this.afterCreateElement()}update(n){super.update(n);const e=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([t,i])=>{e.setAttributeNS(null,t,i)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([t,i])=>{e.setAttributeNS(null,Re.dasherize(t),i)}):e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},DE=Re.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(n){return n?(n===!0&&(n=dl),typeof n=="number"&&(n={amount:n}),{...dl,...n}):null}});function NE(n){switch(ul(n,!1)){case"image":case"html":case"element":return PE;case"imageLayer":case"videoLayer":return CE;case"elementLayer":return RE;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return LE;case"square":case"rect":case"circle":case"ellipse":case"path":return IE;default:throw new Se("invalid marker type")}}var dr=class Mp extends Va{constructor(e,t){super(e,t),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",i=>i.preventDefault()),this.svgContainer=document.createElementNS(xo,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new yE(e),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}static withConfig(e){return[Mp,e]}init(){super.init(),Re.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(Ne.ClickEvent.type,this),this.viewer.addEventListener(Ne.DoubleClickEvent.type,this),this.viewer.addEventListener(Ne.RenderEvent.type,this),this.viewer.addEventListener(Ne.ConfigChangedEvent.type,this),this.viewer.addEventListener(Ne.ObjectEnterEvent.type,this),this.viewer.addEventListener(Ne.ObjectHoverEvent.type,this),this.viewer.addEventListener(Ne.ObjectLeaveEvent.type,this),this.viewer.addEventListener(Ne.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(bt),this.viewer.removeEventListener(Ne.ClickEvent.type,this),this.viewer.removeEventListener(Ne.DoubleClickEvent.type,this),this.viewer.removeEventListener(Ne.RenderEvent.type,this),this.viewer.removeEventListener(Ne.ObjectEnterEvent.type,this),this.viewer.removeEventListener(Ne.ObjectHoverEvent.type,this),this.viewer.removeEventListener(Ne.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(Ne.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(e){switch(e.type){case Ne.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case Ne.RenderEvent.type:this.renderMarkers();break;case Ne.ClickEvent.type:this.__onClick(e,!1);break;case Ne.DoubleClickEvent.type:this.__onClick(e,!0);break;case Ne.ObjectEnterEvent.type:case Ne.ObjectLeaveEvent.type:case Ne.ObjectHoverEvent.type:if(e.userDataKey===bt){const t=e.originalEvent,i=e.object.userData[bt];switch(e.type){case Ne.ObjectEnterEvent.type:i.config.style?.cursor?this.viewer.setCursor(i.config.style.cursor):(i.config.tooltip||i.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(t,i);break;case Ne.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(i);break;case Ne.ObjectHoverEvent.type:this.__onHoverMarker(t,i);break}}break;case"mouseenter":{const t=this.__getTargetMarker(Re.getEventTarget(e));this.__onEnterMarker(e,t);break}case"mouseleave":{const t=this.__getTargetMarker(Re.getEventTarget(e));this.__onLeaveMarker(t);break}case"mousemove":{const t=this.__getTargetMarker(Re.getEventTarget(e),!0);this.__onHoverMarker(e,t);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(e=>{e.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new lr)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(e=>{e.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new ar)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!0,e.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!1,e.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(e,t=!0){if(this.markers[e.id])throw new Se(`marker "${e.id}" already exists`);const i=new(NE(e))(this.viewer,this,e);i.isPoly()?this.svgContainer.appendChild(i.domElement):i.isCss3d()?this.css3DContainer.addObject(i):i.is3d()?this.viewer.renderer.addObject(i.threeElement):this.container.appendChild(i.domElement),this.markers[i.id]=i,this.state.showAllTooltips&&(i.state.staticTooltip=!0),t&&this.__afterChangeMarkers()}getMarker(e){const t=typeof e=="object"?e.id:e;if(!this.markers[t])throw new Se(`cannot find marker "${t}"`);return this.markers[t]}getCurrentMarker(){return this.state.currentMarker}updateMarker(e,t=!0){const i=this.getMarker(e.id);i.update(e),t&&(this.__afterChangeMarkers(),(i===this.state.hoveringMarker&&i.config.tooltip?.trigger==="hover"||i.state.staticTooltip)&&i.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(e,t=!0){const i=this.getMarker(e);i.isPoly()?this.svgContainer.removeChild(i.domElement):i.isCss3d()?this.css3DContainer.removeObject(i):i.is3d()?this.viewer.renderer.removeObject(i.threeElement):this.container.removeChild(i.domElement),this.state.hoveringMarker===i&&(this.state.hoveringMarker=null),this.state.currentMarker===i&&(this.state.currentMarker=null),i.destroy(),delete this.markers[i.id],t&&this.__afterChangeMarkers()}removeMarkers(e,t=!0){e.forEach(i=>this.removeMarker(i,!1)),t&&this.__afterChangeMarkers()}setMarkers(e,t=!0){this.clearMarkers(!1),e?.forEach(i=>{this.addMarker(i,!1)}),t&&this.__afterChangeMarkers()}clearMarkers(e=!0){Object.keys(this.markers).forEach(t=>{this.removeMarker(t,!1)}),e&&this.__afterChangeMarkers()}gotoMarker(e,t=this.config.gotoMarkerSpeed){const i=this.getMarker(e);return t?this.viewer.animate({...i.state.position,zoom:i.config.zoomLvl,speed:t}).then(()=>{this.dispatchEvent(new hl(i))}):(this.viewer.rotate(i.state.position),Re.isNil(i.config.zoomLvl)||this.viewer.zoom(i.config.zoomLvl),this.dispatchEvent(new hl(i)),Promise.resolve())}hideMarker(e){this.toggleMarker(e,!1)}showMarker(e){this.toggleMarker(e,!0)}showMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!0,t.showTooltip()}hideMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!1,t.hideTooltip()}toggleMarker(e,t){const i=this.getMarker(e);i.config.visible=Re.isNil(t)?!i.config.visible:t,this.renderMarkers()}showMarkerPanel(e){const t=this.getMarker(e);t.config.content?this.viewer.panel.show({id:hr,content:t.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(hr)}toggleMarkersList(){this.viewer.panel.isVisible(ms)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let e=[];Object.values(this.markers).forEach(i=>{i.config.visible&&!i.config.hideList&&e.push(i)});const t=new Ru(e);this.dispatchEvent(t),e=t.markers,this.viewer.panel.show({id:ms,content:pE(e,this.viewer.config.lang[cr.id]),noMargin:!0,clickHandler:i=>{const s=Re.getClosest(i,".psv-panel-menu-item"),r=s?s.dataset[bt]:void 0;if(r){const o=this.getMarker(r);this.dispatchEvent(new Eu(o)),this.gotoMarker(o.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(ms)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const e=this.viewer.getZoomLevel(),t=this.viewer.getPosition(),i=this.state.hoveringMarker;Object.values(this.markers).forEach(s=>{let r=s.config.visible,o=!1,a=null;r&&(a=s.render({viewerPosition:t,zoomLevel:e,hoveringMarker:i}),r=!!a),o=s.state.visible!==r,s.state.visible=r,s.state.position2D=a,s.domElement&&Re.toggleClass(s.domElement,"psv-marker--visible",r),r?s.state.staticTooltip?s.showTooltip():s!==this.state.hoveringMarker&&s.hideTooltip():s.hideTooltip(),o&&(this.dispatchEvent(new uu(s,r)),(s.is3d()||s.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(e,t=!1){if(e instanceof Node){const i=t?Re.getClosest(e,".psv-marker"):e;return i?i[bt]:void 0}else return Array.isArray(e)?e.map(i=>i.userData[bt]).filter(i=>!!i).sort((i,s)=>s.config.zIndex-i.config.zIndex)[0]:null}__onEnterMarker(e,t){t&&(this.state.hoveringMarker=t,this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,this.dispatchEvent(new vu(t)),t instanceof Mo&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!t.state.staticTooltip&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onLeaveMarker(e){e&&(this.dispatchEvent(new mu(e)),e instanceof Mo&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!e.state.staticTooltip&&e.config.tooltip?.trigger==="hover"?e.hideTooltip():e.state.staticTooltip&&e.showTooltip())}__onHoverMarker(e,t){t&&(this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,(t.isPoly()||t.is3d()||t.isCss3d())&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onClick(e,t){const i=this.__getTargetMarker(e.data.objects),r=this.__getTargetMarker(e.data.target,!0)||i;this.state.currentMarker&&this.state.currentMarker!==r&&(this.dispatchEvent(new Mu(this.state.currentMarker)),this.viewer.panel.hide(hr),!this.state.showAllTooltips&&this.state.currentMarker.config.tooltip?.trigger==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),r&&(this.state.currentMarker=r,this.dispatchEvent(new yu(r,t,e.data.rightclick)),this.config.clickEventOnMarker?e.data.marker=r:e.stopImmediatePropagation(),this.markers[r.id]&&!e.data.rightclick&&(r.config.tooltip?.trigger==="click"?r.tooltip?this.hideMarkerTooltip(r.id):this.showMarkerTooltip(r.id):this.showMarkerPanel(r.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new Tu(this.getMarkers()))}__refreshUi(){const e=Object.values(this.markers).filter(t=>!t.config.hideList).length;e===0?(this.viewer.panel.hide(hr),this.viewer.panel.hide(ms)):this.viewer.panel.isVisible(ms)?this.showMarkersList():this.viewer.panel.isVisible(hr)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),this.viewer.navbar.getButton(cr.id,!1)?.toggle(e>0),this.viewer.navbar.getButton(Eo.id,!1)?.toggle(e>0)}__checkObjectsObserver(){Object.values(this.markers).some(t=>t.is3d())?this.viewer.observeObjects(bt):this.viewer.unobserveObjects(bt)}};dr.id="markers",dr.VERSION="5.14.1",dr.configParser=DE,dr.readonlyOptions=["markers"];var Bu=dr;qn.lang[cr.id]="Markers",qn.lang[Eo.id]="Markers list",Xa(cr,"caption:left"),Xa(Eo,"caption:left");/*!
 * Photo Sphere Viewer / Virtual Tour Plugin 5.14.1
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var UE=Object.defineProperty,FE=(n,e)=>{for(var t in e)UE(n,t,{get:e[t],enumerable:!0})},kE={};FE(kE,{EnterArrowEvent:()=>Gu,LeaveArrowEvent:()=>$u,NodeChangedEvent:()=>Hu});var zu=class Sp extends Os{constructor(e,t){super(Sp.type),this.node=e,this.data=t}};zu.type="node-changed";var Hu=zu,Vu=class bp extends Os{constructor(e,t){super(bp.type),this.link=e,this.node=t}};Vu.type="enter-arrow";var Gu=Vu,Wu=class Tp extends Os{constructor(e,t){super(Tp.type),this.link=e,this.node=t}};Wu.type="leave-arrow";var $u=Wu,OE=class extends Ot{constructor(n=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=n,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ut(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(n,e){return super.copy(n,e),this.element=n.element.cloneNode(!0),this.center=n.center,this}},gs=new O,Xu=new xt,qu=new xt,Yu=new O,ju=new O,BE=class{constructor(n={}){const e=this;let t,i,s,r;const o={objects:new WeakMap},a=n.element!==void 0?n.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a,this.getSize=function(){return{width:t,height:i}},this.render=function(m,g){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Xu.copy(g.matrixWorldInverse),qu.multiplyMatrices(g.projectionMatrix,Xu),c(m,m,g),f(m)},this.setSize=function(m,g){t=m,i=g,s=t/2,r=i/2,a.style.width=m+"px",a.style.height=g+"px"};function l(m){m.isCSS2DObject&&(m.element.style.display="none");for(let g=0,v=m.children.length;g<v;g++)l(m.children[g])}function c(m,g,v){if(m.visible===!1){l(m);return}if(m.isCSS2DObject){gs.setFromMatrixPosition(m.matrixWorld),gs.applyMatrix4(qu);const p=gs.z>=-1&&gs.z<=1&&m.layers.test(v.layers)===!0,u=m.element;u.style.display=p===!0?"":"none",p===!0&&(m.onBeforeRender(e,g,v),u.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(gs.x*s+s)+"px,"+(-gs.y*r+r)+"px)",u.parentNode!==a&&a.appendChild(u),m.onAfterRender(e,g,v));const y={distanceToCameraSquared:h(v,m)};o.objects.set(m,y)}for(let p=0,u=m.children.length;p<u;p++)c(m.children[p],g,v)}function h(m,g){return Yu.setFromMatrixPosition(m.matrixWorld),ju.setFromMatrixPosition(g.matrixWorld),Yu.distanceToSquared(ju)}function d(m){const g=[];return m.traverseVisible(function(v){v.isCSS2DObject&&g.push(v)}),g}function f(m){const g=d(m).sort(function(p,u){if(p.renderOrder!==u.renderOrder)return u.renderOrder-p.renderOrder;const y=o.objects.get(p).distanceToCameraSquared,E=o.objects.get(u).distanceToCameraSquared;return y-E}),v=g.length;for(let p=0,u=g.length;p<u;p++)g[p].element.style.zIndex=v-p}}},Zu=new O,zE=new Kn,Ku=new O,HE=class extends Ot{constructor(n=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=n,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(n,e){return super.copy(n,e),this.element=n.element.cloneNode(!0),this}},Fn=new xt,VE=new xt,GE=class{constructor(n={}){const e=this;let t,i,s,r;const o={camera:{style:""},objects:new WeakMap},a=n.element!==void 0?n.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",a.appendChild(l);const c=document.createElement("div");c.style.transformStyle="preserve-3d",l.appendChild(c),this.getSize=function(){return{width:t,height:i}},this.render=function(v,p){const u=p.projectionMatrix.elements[5]*r;p.view&&p.view.enabled?(l.style.transform=`translate( ${-p.view.offsetX*(t/p.view.width)}px, ${-p.view.offsetY*(i/p.view.height)}px )`,l.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):l.style.transform="",v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let y,E;p.isOrthographicCamera&&(y=-(p.right+p.left)/2,E=(p.top+p.bottom)/2);const x=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,P=p.isOrthographicCamera?`scale( ${x} )scale(`+u+")translate("+h(y)+"px,"+h(E)+"px)"+d(p.matrixWorldInverse):`scale( ${x} )translateZ(`+u+"px)"+d(p.matrixWorldInverse),N=(p.isPerspectiveCamera?"perspective("+u+"px) ":"")+P+"translate("+s+"px,"+r+"px)";o.camera.style!==N&&(c.style.transform=N,o.camera.style=N),g(v,v,p)},this.setSize=function(v,p){t=v,i=p,s=t/2,r=i/2,a.style.width=v+"px",a.style.height=p+"px",l.style.width=v+"px",l.style.height=p+"px",c.style.width=v+"px",c.style.height=p+"px"};function h(v){return Math.abs(v)<1e-10?0:v}function d(v){const p=v.elements;return"matrix3d("+h(p[0])+","+h(-p[1])+","+h(p[2])+","+h(p[3])+","+h(p[4])+","+h(-p[5])+","+h(p[6])+","+h(p[7])+","+h(p[8])+","+h(-p[9])+","+h(p[10])+","+h(p[11])+","+h(p[12])+","+h(-p[13])+","+h(p[14])+","+h(p[15])+")"}function f(v){const p=v.elements;return"translate(-50%,-50%)"+("matrix3d("+h(p[0])+","+h(p[1])+","+h(p[2])+","+h(p[3])+","+h(-p[4])+","+h(-p[5])+","+h(-p[6])+","+h(-p[7])+","+h(p[8])+","+h(p[9])+","+h(p[10])+","+h(p[11])+","+h(p[12])+","+h(p[13])+","+h(p[14])+","+h(p[15])+")")}function m(v){v.isCSS3DObject&&(v.element.style.display="none");for(let p=0,u=v.children.length;p<u;p++)m(v.children[p])}function g(v,p,u,y){if(v.visible===!1){m(v);return}if(v.isCSS3DObject){const E=v.layers.test(u.layers)===!0,x=v.element;if(x.style.display=E===!0?"":"none",E===!0){v.onBeforeRender(e,p,u);let P;v.isCSS3DSprite?(Fn.copy(u.matrixWorldInverse),Fn.transpose(),v.rotation2D!==0&&Fn.multiply(VE.makeRotationZ(v.rotation2D)),v.matrixWorld.decompose(Zu,zE,Ku),Fn.setPosition(Zu),Fn.scale(Ku),Fn.elements[3]=0,Fn.elements[7]=0,Fn.elements[11]=0,Fn.elements[15]=1,P=f(Fn)):P=f(v.matrixWorld);const R=o.objects.get(v);if(R===void 0||R.style!==P){x.style.transform=P;const N={style:P};o.objects.set(v,N)}x.parentNode!==c&&c.appendChild(x),v.onAfterRender(e,p,u)}}for(let E=0,x=v.children.length;E<x;E++)g(v.children[E],p,u)}}},WE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill-rule="even-odd" fill="currentColor" d="
        M50,50 m45,0
        a45,45 0 1,0 -90,0
        a45,45 0 1,0  90,0

        M50,50 m38,0
        a38,38 0 0,1 -76,0
        a38,38 0 0,1  76,0

        M50,50 m30,0
        a30,30 0 1,0 -60,0
        a30,30 0 1,0  60,0
        
        M50,40 m2.5,-2.5
        l17.5,17.5
        a 2.5,2.5 0 0 1 -5,5
        l-15,-15
        l-15,15
        a 2.5,2.5 0 0 1 -5,-5
        l17.5,-17.5
        a 3.5,3.5 0 0 1 5,0
    "/>
</svg>`,bo="tourLink",vs="__tour-link__",$E={className:"psv-virtual-tour-tooltip",content:'<div class="psv-virtual-tour-loader"><div></div><div></div><div></div></div>'},XE={element:()=>{const n=document.createElement("button");return n.className="psv-virtual-tour-arrow",n.innerHTML=WE,n},size:{width:80,height:80}},ml="arrow",qE=class extends ui{constructor(n,e){super(n,{className:"psv-virtual-tour-arrows"}),this.plugin=e,this.renderer=this.is3D?new GE({element:this.container}):new BE({element:this.container}),this.camera=this.is3D?new sn(30,1):null,this.scene=new Dr,this.viewer.addEventListener(Ne.ReadyEvent.type,this,{once:!0}),this.viewer.addEventListener(Ne.PositionUpdatedEvent.type,this),this.viewer.addEventListener(Ne.SizeUpdatedEvent.type,this),this.viewer.addEventListener(Ne.RenderEvent.type,this),this.viewer.addEventListener(Ne.ClickEvent.type,this),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("contextmenu",t=>t.preventDefault())}get is3D(){return this.plugin.is3D}get arrowsPosition(){return this.plugin.config.arrowsPosition}get arrowStyle(){return this.plugin.config.arrowStyle}init(){this.is3D&&(this.gallery=this.viewer.getPlugin("gallery"),this.gallery?.addEventListener("show-gallery",this),this.gallery?.addEventListener("hide-gallery",this))}destroy(){this.viewer.removeEventListener(Ne.ReadyEvent.type,this),this.viewer.removeEventListener(Ne.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(Ne.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(Ne.RenderEvent.type,this),this.viewer.removeEventListener(Ne.ClickEvent.type,this),this.gallery?.removeEventListener("show-gallery",this),this.gallery?.removeEventListener("hide-gallery",this),super.destroy()}handleEvent(n){switch(n.type){case Ne.ReadyEvent.type:case Ne.SizeUpdatedEvent.type:case Ne.PositionUpdatedEvent.type:this.__updateCamera();break;case Ne.RenderEvent.type:this.render();break;case Ne.ClickEvent.type:{if(n.data.rightclick)break;const e=this.__getTargetLink(n.data.target,!0);e&&this.plugin.setCurrentNode(e.nodeId,null,e);break}case"mouseenter":{const e=this.__getTargetLink(Re.getEventTarget(n));e&&this.plugin.__onEnterArrow(e,n);break}case"mouseleave":{const e=this.__getTargetLink(Re.getEventTarget(n));e&&this.plugin.__onLeaveArrow(e);break}case"mousemove":{this.__getTargetLink(Re.getEventTarget(n),!0)&&this.plugin.__onHoverArrow(n);break}case"hide-gallery":this.__onToggleGallery(!1);break;case"show-gallery":n.fullscreen||this.__onToggleGallery(!0);break}}__updateCamera(){const n=this.viewer.getSize();if(this.renderer.setSize(n.width,n.height),this.is3D){const e=this.viewer.getPosition();e.pitch=it.clamp(e.pitch,-this.arrowsPosition.maxPitch,-this.arrowsPosition.minPitch),this.viewer.dataHelper.sphericalCoordsToVector3(e,this.camera.position,n.height*2).negate(),this.camera.lookAt(0,0,0),this.camera.translateY(n.height/3),this.camera.updateProjectionMatrix()}}render(){if(this.is3D){const n=this.viewer.getPosition(),e=[];let t=Number.MAX_SAFE_INTEGER;this.scene.children.forEach(i=>{const s=i.userData[ml];if(s.conflict){const r=Math.abs(Re.getShortestArc(n.yaw,s.yaw));t=Math.min(t,r),e.push([i,r])}}),e.forEach(([i,s])=>{const r=s!==t;i.element.style.opacity=r?"0.5":null,i.element.style.zIndex=r?"-1":null}),this.renderer.render(this.scene,this.camera)}else this.renderer.render(this.scene,this.viewer.renderer.camera)}clear(){this.scene.clear()}__buildArrowElement(n,e){if(e?.image){const t=document.createElement("img");return t.src=e.image,t}else if(e?.element)return typeof e.element=="function"?e.element(n):e.element}addLinkArrow(n,e,t=1){let i=this.__buildArrowElement(n,n.arrowStyle);i||(i=this.__buildArrowElement(n,this.arrowStyle)),i[bo]=n;const s={...this.arrowStyle,...n.arrowStyle};if(i.classList.add("psv-virtual-tour-link"),s.className&&Re.addClasses(i,s.className),s.style&&Object.assign(i.style,s.style),this.is3D){i.style.width=s.size.width*1.5+"px",i.style.height=s.size.height*1.5+"px";let r=!1;this.scene.children.forEach(a=>{const l=a.userData[ml];Math.abs(Re.getShortestArc(l.yaw,e.yaw))<this.arrowsPosition.linkOverlapAngle&&(l.conflict=!0,r=!0)});const o=new HE(i);o.userData[ml]={yaw:e.yaw,conflict:r},o.rotation.set(-Math.PI/2,0,Math.PI-e.yaw),this.viewer.dataHelper.sphericalCoordsToVector3({yaw:e.yaw,pitch:0},o.position,t*100),this.scene.add(o)}else{i.style.width=s.size.width+"px",i.style.height=s.size.height+"px",i.style.pointerEvents="auto";const r=new OE(i);this.viewer.dataHelper.sphericalCoordsToVector3(e,r.position),this.scene.add(r)}}__getTargetLink(n,e=!1){const t=e?Re.getClosest(n,".psv-virtual-tour-link"):n;return t?t[bo]:void 0}__onToggleGallery(n){n?this.container.style.marginBottom=this.viewer.container.querySelector(".psv-gallery").offsetHeight+"px":this.container.style.marginBottom=""}},Ju=class{constructor(n,e){this.plugin=n,this.viewer=e,this.nodes={}}destroy(){}checkNode(n){if(!n.id)throw new Se("No id given for node");if(!n.panorama)throw new Se(`No panorama provided for node ${n.id}`);if(this.plugin.isGps&&!(n.gps?.length>=2))throw new Se(`No GPS position provided for node ${n.id}`);if(!this.plugin.isGps&&n.markers?.some(e=>e.gps&&!e.position))throw new Se("Cannot use GPS positioning for markers in manual mode");n.links||(Re.logWarn(`Node ${n.id} has no links`),n.links=[])}checkLink(n,e){if(!e.nodeId)throw new Se(`Link of node ${n.id} has no target id`);if(e.nodeId===n.id)throw new Se(`Node ${n.id} links to itself`);if(!this.plugin.isGps&&!Re.isExtendedPosition(e.position))throw new Se(`No position provided for link ${e.nodeId} of node ${n.id}`);if(this.plugin.isGps&&!e.gps)throw new Se(`No GPS position provided for link ${e.nodeId} of node ${n.id}`)}},YE=class extends Ju{async loadNode(n){if(this.nodes[n])return this.nodes[n];throw new Se(`Node ${n} not found`)}setNodes(n){if(!n?.length)throw new Se("No nodes provided");const e={},t={};n.forEach(i=>{if(this.checkNode(i),e[i.id])throw new Se(`Duplicate node ${i.id}`);e[i.id]=i}),n.forEach(i=>{this.__checkLinks(i,e),i.links.forEach(s=>{t[s.nodeId]=!0})}),n.forEach(i=>{t[i.id]||Re.logWarn(`Node ${i.id} is never linked to`)}),this.nodes=e}updateNode(n){if(!n.id)throw new Se("No id given for node");const e=this.nodes[n.id];if(!e)throw new Se(`Node ${n.id} does not exist`);return Object.assign(e,n),this.checkNode(e),this.__checkLinks(e,this.nodes),e}__checkLinks(n,e){n.links.forEach(t=>{if(!e[t.nodeId])throw new Se(`Target node ${t.nodeId} of node ${n.id} does not exists`);t.gps=t.gps||e[t.nodeId].gps,this.checkLink(n,t)})}},jE=class extends Ju{constructor(n,e){if(super(n,e),!n.config.getNode)throw new Se("Missing getNode() option.");this.nodeResolver=n.config.getNode}async loadNode(n){if(this.nodes[n])return this.nodes[n];{const e=await this.nodeResolver(n);return this.checkNode(e),e.links.forEach(t=>{this.checkLink(e,t)}),this.nodes[n]=e,e}}clearCache(){this.nodes={}}};function Qu(n,e){const t=ef(n),i=ef(e),s=n[2]??0,r=e[2]??0;let o=0;return s!==r&&(o=Math.atan((r-s)/ZE(t,i))),{yaw:KE(t,i),pitch:o}}function ef(n){return[it.degToRad(n[0]),it.degToRad(n[1])]}function ZE(n,e){return Re.greatArcDistance(n,e)*6371e3}function KE(n,e){const[t,i]=n,[s,r]=e,o=Math.sin(s-t)*Math.cos(r),a=Math.cos(i)*Math.sin(r)-Math.sin(i)*Math.cos(r)*Math.cos(s-t);return Math.atan2(o,a)}var gl=Re.getConfigParser({dataMode:"client",positionMode:"manual",renderMode:"3d",nodes:null,getNode:null,startNodeId:null,preload:!1,transitionOptions:{showLoader:!0,speed:"20rpm",effect:"fade",rotation:!0},linksOnCompass:!0,showLinkTooltip:!0,getLinkTooltip:null,arrowStyle:XE,arrowsPosition:{minPitch:.3,maxPitch:Math.PI/2,linkOverlapAngle:Math.PI/4,linkPitchOffset:-.1},map:null},{dataMode(n){if(n!=="client"&&n!=="server")throw new Se("VirtualTourPlugin: invalid dataMode");return n},positionMode(n){if(n!=="gps"&&n!=="manual")throw new Se("VirtualTourPlugin: invalid positionMode");return n},renderMode(n){if(n!=="3d"&&n!=="2d")throw new Se("VirtualTourPlugin: invalid renderMode");return n},arrowsPosition(n,{defValue:e}){return{...e,...n}},arrowStyle(n,{defValue:e}){return{...e,...n}},map(n,{rawConfig:e}){if(n){if(e.dataMode==="server")return Re.logWarn("VirtualTourPlugin: The map cannot be used in server side mode"),null;if(!n.imageUrl)return Re.logWarn('VirtualTourPlugin: configuring the map requires at least "imageUrl"'),null;"recenter"in n||(n.recenter=!0)}return n}}),ur=class Ap extends Va{constructor(e,t){super(e,t),this.state={currentNode:null,currentTooltip:null,loadingNode:null,preload:{}},this.arrowsRenderer=new qE(this.viewer,this)}get is3D(){return this.config.renderMode==="3d"}get isServerSide(){return this.config.dataMode==="server"}get isGps(){return this.config.positionMode==="gps"}static withConfig(e){return[Ap,e]}init(){super.init(),this.arrowsRenderer.init(),Re.checkStylesheet(this.viewer.container,"virtual-tour-plugin"),this.markers=this.viewer.getPlugin("markers"),this.compass=this.viewer.getPlugin("compass"),this.markers?.config.markers&&(Re.logWarn("No default markers can be configured on the MarkersPlugin when using the VirtualTourPlugin. Consider defining `markers` on each tour node."),delete this.markers.config.markers),this.isGps&&(this.plan=this.viewer.getPlugin("plan")),this.isServerSide||(this.gallery=this.viewer.getPlugin("gallery"),this.map=this.viewer.getPlugin("map"),this.config.map&&!this.map&&Re.logWarn("The map is configured on the VirtualTourPlugin but the MapPlugin is not loaded.")),this.datasource=this.isServerSide?new jE(this,this.viewer):new YE(this,this.viewer),this.map&&(this.map.addEventListener("select-hotspot",this),this.map.setImage(this.config.map.imageUrl)),this.plan?.addEventListener("select-hotspot",this),this.isServerSide?this.config.startNodeId&&this.setCurrentNode(this.config.startNodeId):this.config.nodes&&(this.setNodes(this.config.nodes,this.config.startNodeId),delete this.config.nodes)}destroy(){this.map?.removeEventListener("select-hotspot",this),this.plan?.removeEventListener("select-hotspot",this),this.datasource.destroy(),this.arrowsRenderer.destroy(),delete this.datasource,delete this.markers,delete this.compass,delete this.gallery,delete this.arrowsRenderer,super.destroy()}handleEvent(e){if(e instanceof Ne.ClickEvent){const t=e.data.objects.find(i=>i.userData[bo])?.userData[bo];t&&this.setCurrentNode(t.nodeId,null,t)}else if(e.type==="select-hotspot"){const t=e.hotspotId;t.startsWith(vs)&&this.setCurrentNode(t.substring(vs.length))}}getCurrentNode(){return this.state.currentNode}setNodes(e,t){if(this.isServerSide)throw new Se("Cannot set nodes in server side mode");this.__hideTooltip(),this.state.currentNode=null,this.datasource.setNodes(e),t?this.datasource.nodes[t]||(t=e[0].id,Re.logWarn(`startNodeId not found is provided nodes, resetted to ${t}`)):t=e[0].id,this.setCurrentNode(t),this.__setGalleryItems(),this.__setMapHotspots(),this.__setPlanHotspots()}setCurrentNode(e,t,i){if(e===this.state.currentNode?.id&&!t?.forceUpdate)return Promise.resolve(!0);t?.forceUpdate&&this.isServerSide&&this.datasource.clearCache(),this.viewer.hideError(),this.state.loadingNode=e;const s=this.state.currentNode,r=s&&i?this.__getLinkPosition(s,i):null;return Promise.resolve(this.state.preload[e]).then(()=>{if(this.state.loadingNode!==e)throw Re.getAbortError();return this.datasource.loadNode(e)}).then(o=>{if(this.state.loadingNode!==e)throw Re.getAbortError();const a={...gl.defaults.transitionOptions,rotateTo:r,zoomTo:r?this.viewer.getZoomLevel():null,...typeof this.config.transitionOptions=="function"?this.config.transitionOptions(o,s,i):this.config.transitionOptions,...t};return a.effect||(a.effect="none"),this.viewer.panel.hide("description"),this.__hideTooltip(),this.arrowsRenderer.clear(),this.gallery?.config.hideOnClick&&this.gallery.hide(),this.map?.config.minimizeOnHotspotClick&&this.map.minimize(),this.plan?.config.minimizeOnHotspotClick&&this.plan.minimize(),a.rotation&&a.effect==="none"?this.viewer.animate({...a.rotateTo,zoom:a.zoomTo,speed:a.speed}).then(()=>[o,a]):Promise.resolve([o,a])}).then(([o,a])=>{if(this.state.loadingNode!==e)throw Re.getAbortError();return this.markers?.clearMarkers(),this.config.linksOnCompass&&this.compass?.clearHotspots(),this.viewer.setPanorama(o.panorama,{caption:o.caption,description:o.description,panoData:o.panoData,sphereCorrection:o.sphereCorrection,showLoader:a.showLoader,position:a.rotateTo,zoom:a.zoomTo,transition:a.effect==="none"?!1:{effect:a.effect,rotation:a.rotation,speed:a.speed}}).then(l=>{if(!l)throw Re.getAbortError();return o})}).then(o=>{if(this.state.loadingNode!==e)throw Re.getAbortError();return this.state.currentNode=o,this.map&&this.map.setCenter(this.__getNodeMapPosition(o)??this.map.config.center,this.config.map.recenter),this.plan?.setCoordinates(o.gps),this.__addNodeMarkers(o),this.__renderLinks(o),this.__preload(o),this.state.loadingNode=null,this.dispatchEvent(new Hu(o,{fromNode:s,fromLink:i,fromLinkPosition:r})),this.viewer.resetIdleTimer(),!0}).catch(o=>{if(Re.isAbortError(o))return!1;throw this.viewer.showError(this.viewer.config.lang.loadError),this.viewer.loader.hide(),this.viewer.navbar.setCaption(""),this.state.loadingNode=null,o})}async gotoLink(e,t="8rpm"){const i=this.getLinkPosition(e);t?await this.viewer.animate({...i,speed:t}):this.viewer.rotate(i)}getLinkPosition(e){const t=this.state.currentNode?.links.find(i=>i.nodeId===e);if(!t)throw new Se(`Cannot find link "${e}"`);return this.__getLinkPosition(this.state.currentNode,t)}updateNode(e){if(this.isServerSide)throw new Se("Cannot update node in server side mode");const t=this.datasource.updateNode(e);if((e.name||e.thumbnail||e.panorama)&&this.__setGalleryItems(),(e.name||e.gps||e.map)&&this.__setMapHotspots(),(e.name||e.gps||e.plan)&&this.__setPlanHotspots(),this.state.currentNode?.id===t.id){if(this.__hideTooltip(),e.panorama||e.panoData||e.sphereCorrection){this.setCurrentNode(t.id,{forceUpdate:!0});return}e.caption&&this.viewer.setOption("caption",t.caption),e.description&&this.viewer.setOption("description",t.description),(e.links||e.gps)&&this.__renderLinks(t),e.gps&&this.plan?.setCoordinates(t.gps),(e.map||e.gps)&&this.map?.setCenter(this.__getNodeMapPosition(t)),(e.markers||e.gps)&&this.__addNodeMarkers(t)}}__setGalleryItems(){this.gallery&&this.gallery.setItems(Object.values(this.datasource.nodes).filter(e=>e.showInGallery!==!1).map(e=>({id:e.id,panorama:e.panorama,name:e.name,thumbnail:e.thumbnail})),e=>{this.setCurrentNode(e)})}__setMapHotspots(){this.map&&this.map.setHotspots(Object.values(this.datasource.nodes).filter(e=>e.map!==!1).map(e=>({tooltip:e.name,...e.map||{},...this.__getNodeMapPosition(e),id:vs+e.id})))}__setPlanHotspots(){this.plan&&this.plan.setHotspots(Object.values(this.datasource.nodes).filter(e=>e.plan!==!1).map(e=>({tooltip:e.name,...e.plan||{},coordinates:e.gps,id:vs+e.id})))}__renderLinks(e){this.arrowsRenderer.clear();const t=[];e.links.forEach(i=>{const s=this.__getLinkPosition(e,i);s.yaw+=i.linkOffset?.yaw??0,s.pitch+=i.linkOffset?.pitch??0,this.isGps&&!this.is3D&&(s.pitch+=this.config.arrowsPosition.linkPitchOffset),t.push(s),this.arrowsRenderer.addLinkArrow(i,s,i.linkOffset?.depth)}),this.arrowsRenderer.render(),this.config.linksOnCompass&&this.compass?.setHotspots(t)}__getLinkPosition(e,t){return this.isGps?Qu(e.gps,t.gps):this.viewer.dataHelper.cleanPosition(t.position)}async __getTooltipContent(e){const t=await this.datasource.loadNode(e.nodeId),i=[];(t.name||t.thumbnail||t.caption)&&(t.name&&i.push(`<h3>${t.name}</h3>`),t.thumbnail&&i.push(`<img src="${t.thumbnail}">`),t.caption&&i.push(`<p>${t.caption}</p>`));let s=i.join("");return this.config.getLinkTooltip&&(s=this.config.getLinkTooltip(s,e,t)),s}__onEnterArrow(e,t){const i=Re.getPosition(this.viewer.container),s={x:t.clientX-i.x,y:t.clientY-i.y};this.config.showLinkTooltip&&(this.state.currentTooltip=this.viewer.createTooltip({...$E,left:s.x,top:s.y,box:{width:20,height:20}}),this.__getTooltipContent(e).then(r=>{r?this.state.currentTooltip.update(r):this.__hideTooltip()})),this.map?.setActiveHotspot(vs+e.nodeId),this.plan?.setActiveHotspot(vs+e.nodeId),this.dispatchEvent(new Gu(e,this.state.currentNode))}__onHoverArrow(e){const t=Re.getPosition(this.viewer.container),i={x:e.clientX-t.x,y:e.clientY-t.y};this.state.currentTooltip?.move({left:i.x,top:i.y})}__onLeaveArrow(e){this.__hideTooltip(),this.map?.setActiveHotspot(null),this.plan?.setActiveHotspot(null),this.dispatchEvent(new $u(e,this.state.currentNode))}__hideTooltip(){this.state.currentTooltip?.hide(),this.state.currentTooltip=null}__preload(e){this.config.preload&&(this.state.preload[e.id]=!0,this.state.currentNode.links.filter(t=>!this.state.preload[t.nodeId]).filter(t=>typeof this.config.preload=="function"?this.config.preload(this.state.currentNode,t):!0).forEach(t=>{this.state.preload[t.nodeId]=this.datasource.loadNode(t.nodeId).then(i=>this.viewer.textureLoader.preloadPanorama(i.panorama)).then(()=>{this.state.preload[t.nodeId]=!0}).catch(()=>{delete this.state.preload[t.nodeId]})}))}__addNodeMarkers(e){e.markers&&(this.markers?this.markers.setMarkers(e.markers.map(t=>(t.gps&&this.isGps&&(t.position=Qu(e.gps,t.gps),t.data?.map&&Object.assign(t.data.map,this.__getGpsMapPosition(t.gps)),t.data?.plan&&(t.data.plan.coordinates=t.gps)),t))):Re.logWarn(`Node ${e.id} markers ignored because the plugin is not loaded.`))}__getNodeMapPosition(e){const t=this.__getGpsMapPosition(e.gps);return t||(e.map?{x:e.map.x,y:e.map.y}:null)}__getGpsMapPosition(e){const t=this.config.map;return this.isGps&&t&&t.extent&&t.size?{x:it.mapLinear(e[0],t.extent[0],t.extent[2],0,t.size.width),y:it.mapLinear(e[1],t.extent[1],t.extent[3],0,t.size.height)}:null}};ur.id="virtual-tour",ur.VERSION="5.14.1",ur.configParser=gl,ur.readonlyOptions=Object.keys(gl.defaults);var tf=ur;class JE{constructor(){$e(this,"clips",new Map);$e(this,"ambientEl",null);$e(this,"ambientSrc",null);$e(this,"muted",!1)}element(e){let t=this.clips.get(e);if(!t){if(typeof Audio>"u")return null;t=new Audio(e),this.clips.set(e,t)}return t}start(e,t){e.loop=!!t.loop,e.volume=t.volume??1,e.muted=this.muted,e.play().catch(()=>{})}play(e,t={}){const i=Ke(e);if(!i)return;const s=this.element(i);s&&this.start(s,t)}toggle(e,t={}){const i=Ke(e);if(!i)return;const s=this.clips.get(i);if(s&&!s.paused){s.pause();return}const r=this.element(i);r&&this.start(r,t)}stop(e){const t=Ke(e),i=t?this.clips.get(t):void 0;i&&(i.pause(),i.currentTime=0)}setAmbient(e,t={}){const i=e?Ke(e)??null:null;i!==this.ambientSrc&&(this.ambientEl?.pause(),this.ambientEl=null,this.ambientSrc=i,!(!i||typeof Audio>"u")&&(this.ambientEl=new Audio(i),this.start(this.ambientEl,{loop:!0,...t})))}setMuted(e){this.muted=e;for(const t of this.clips.values())t.muted=e;this.ambientEl&&(this.ambientEl.muted=e)}isMuted(){return this.muted}stopAll(){for(const e of this.clips.values())e.pause();this.clips.clear(),this.ambientEl?.pause(),this.ambientEl=null,this.ambientSrc=null}}const QE=new Set(["info","none"]);function ew(n){return[...n].sort((e,t)=>(e.type==="goto"?1:0)-(t.type==="goto"?1:0))}function nf(n,e){const t=[];for(const i of ew(n)){if(i.if&&e.variables&&!e.variables.test(i.if))continue;let s=!0;switch(i.type){case"goto":if(!i.targetSceneId)break;e.goTo?e.goTo(i.targetSceneId,i.landing,i.transition):s=!1;break;case"look":e.lookAt?e.lookAt(i.yaw,i.pitch,i.zoom):s=!1;break;case"toggle":if(!i.targetIds?.length)break;e.toggleHotspots?e.toggleHotspots(i.targetIds,i.mode):s=!1;break;case"video":if(!i.url)break;e.playVideo?e.playVideo(i.url):s=!1;break;case"url":if(!i.url)break;e.openUrl?e.openUrl(i.url,i.target):s=!1;break;case"audio":if(!i.url)break;e.playAudio?e.playAudio(i.url,!!i.loop):s=!1;break;case"image":{const r=e.resolveMedia?.(i.imageAssetId,i.imageSrc)??i.imageSrc;if(!r)break;e.showImage?e.showImage(r):s=!1;break}case"panel":if(!i.panelId)break;e.openPanel?e.openPanel(i.panelId,i.mode,i.content):s=!1;break;case"setVar":e.variables?s=e.variables.apply(i):s=!1;break;case"animate":if(!i.targetIds?.length)break;e.animate?e.animate(i.targetIds,i.animation,i.durationMs):s=!1;break;case"narrate":{const r=e.resolveMedia?.(i.audioAssetId,void 0);if(!i.text&&!r)break;e.narrate?e.narrate({text:i.text,src:r,voice:i.voice}):s=!1;break}case"model3d":{const r=e.resolveMedia?.(i.assetId,i.src)??i.src;if(!r)break;e.showModel?e.showModel(r,i.scale):s=!1;break}default:s=QE.has(i.type);break}s?t.push(i.type):e.onUnsupported?.(i)}return t}const mi=(n,e=!1)=>`<svg viewBox="0 0 24 24" width="100%" height="100%" fill="${e?"currentColor":"none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${n}</svg>`,sf={pin:mi('<path d="M12 21s-7-5.7-7-11a7 7 0 0 1 14 0c0 5.3-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>'),arrow:mi('<path d="M5 12h14M13 6l6 6-6 6"/>'),info:mi('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),circle:mi('<circle cx="12" cy="12" r="8"/>'),plus:mi('<path d="M12 5v14M5 12h14"/>'),eye:mi('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>'),dot:mi('<circle cx="12" cy="12" r="6"/>',!0),play:mi('<path d="M8 5v14l11-7z"/>',!0)};function tw(n){return sf[n]??sf.circle}const nw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Tt=n=>n.replace(/[&<>"']/g,e=>nw[e]),rf=(n,e)=>e?n.find(t=>t.id===e):void 0;function iw(n,e){const t=rf(e,n.iconAssetId);return t?.kind==="svg"&&t.svg?t.svg:t?.kind==="image"&&t.src?`<img src="${Tt(Ke(t.src))}" alt="" draggable="false" />`:tw(n.builtinIcon)}const sw=new Set(["pulse","echo","strobe","glow"]);function vl(n,e){const t=rf(e,n.imageAssetId);return t?.kind==="image"&&t.src?Ke(t.src):Ke(n.imageSrc)}const It=(n,e)=>typeof n=="number"&&Number.isFinite(n)?n:e,rw=new Set(["solid","dashed","dotted","double","groove","ridge","inset","outset","none"]),ow=n=>n&&rw.has(n)?n:"solid";function of(n){const e=n.borderWidth?`border:${It(n.borderWidth,0)}px ${ow(n.borderStyle)} ${on(n.borderColor,"#ffffff")};`:"";return`color:${on(n.iconColor,"#ffffff")};background:${on(n.background,"transparent")};border-radius:${It(n.radius,0)}px;padding:${It(n.padding,0)}px;`+e}function af(n,e){return`--hs-hover-scale:${It(n.hoverScale,1.08)};--hs-hover-bg:${on(n.hoverColor||n.background,"transparent")};`+(n.opacity!=null&&n.opacity<1?`opacity:${It(n.opacity,1)};`:"")+(e?`--fx-color:${n.effectColor||"#3b82f6"};--fx-op:${n.effectOpacity??.7};--fx-speed:${n.effectSpeed??1.6};--fx-size:${n.effectSize??44};--fx-stroke:${n.effectStroke??2};--fx-radius:${n.radius}`:"")}function aw(n,e,t,i){const s=t??n.style;if(n.form==="html")return`<div class="vtc-hotspot vtc-hotspot--html">${n.html??""}</div>`;if(n.form==="circle"){const l=s.size||64,c=s.borderColor||s.iconColor||"#ffffff",h=s.borderWidth??2,d=s.text||"",f=i?.src?`<img class="vtc-circle-img" src="${Tt(i.src)}" alt="" draggable="false" />`:"";return`<div class="vtc-hotspot vtc-hotspot--circle" style="--vtc-circle:${It(l,64)}px;--vtc-ring:${on(c,"#ffffff")};--vtc-ring-w:${It(h,2)}px;--vtc-circle-label:${on(s.textColor,"#fff")};--vtc-circle-font:${It(s.fontSize,13)}px;"><span class="vtc-circle-ring">${f}<i class="vtc-circle-dot"></i></span>`+(d?`<span class="vtc-circle-name">${Tt(d)}</span>`:"")+"</div>"}if(n.form==="text"){const l=s.background?`background:${on(s.background,"transparent")};padding:${It(s.padding,0)}px;border-radius:${It(s.radius,0)}px;`:"";return`<div class="vtc-hotspot vtc-hotspot--text" style="color:${on(s.textColor,"#fff")};font-size:${It(s.fontSize,16)}px;${l}">${Tt(s.text||"Text")}</div>`}if(n.form==="callout"){const l=n.callout??{dx:90,dy:-60},c=on(l.lineColor||s.borderColor||s.textColor,"#fff"),h=It(l.lineWidth,2),d=It(l.anchorSize,7),f=l.elbow,m=Math.max(Math.abs(l.dx),Math.abs(l.dy),Math.abs(f?.dx??0),Math.abs(f?.dy??0))+h+2,g=m,v=f?`${g},${g} ${g+f.dx},${g+f.dy} ${g+l.dx},${g+l.dy}`:`${g},${g} ${g+l.dx},${g+l.dy}`,p=l.side==="right",u=p?`translate(calc(${It(l.dx,0)}px - 100%), calc(${It(l.dy,0)}px - 50%))`:`translate(${It(l.dx,0)}px, calc(${It(l.dy,0)}px - 50%))`,y=`<div class="vtc-callout__card" style="${of(s)}color:${on(s.textColor,"#fff")};font-size:${It(s.fontSize,14)}px;max-width:${It(l.maxWidth,200)}px;--vtc-leader:${c};--vtc-leader-w:${h}px;transform:${u};"><span class="vtc-callout__name">${Tt(s.text||n.name)}</span>`+(l.note?`<span class="vtc-callout__note">${Tt(l.note)}</span>`:"")+"</div>";return`<div class="vtc-hotspot vtc-callout${p?" vtc-callout--right":""}" style="${af(s,null)}width:${m*2}px;height:${m*2}px;"><svg class="vtc-callout__leader" width="${m*2}" height="${m*2}" style="margin-left:${-m}px;margin-top:${-m}px" aria-hidden="true"><polyline points="${v}" fill="none" stroke="${c}" stroke-width="${h}" stroke-linejoin="round" stroke-linecap="round" />`+(d>0?(s.effect&&s.effect!=="none"?`<circle class="vtc-callout__ripple" cx="${g}" cy="${g}" r="${d/2}" fill="none" stroke="${c}" stroke-width="${h}" />`:"")+`<circle cx="${g}" cy="${g}" r="${d/2}" fill="${c}" />`:"")+`</svg>${y}</div>`}if(n.form==="image"){const l=vl(n,e)??"",c=n.width??120,h=n.height??120;return`<div class="vtc-hotspot vtc-hotspot--image"><img src="${Tt(l)}" alt="" draggable="false" style="width:${c}px;height:${h}px;object-fit:contain" /></div>`}const r=s.effect&&s.effect!=="none"?s.effect:null,o=r&&sw.has(r)?'<span class="vtc-hotspot__fx"></span>':"",a=s.text?`<span class="vtc-hotspot__text" style="color:${s.textColor};font-size:${s.fontSize}px">${Tt(s.text)}</span>`:"";return`<div class="vtc-hotspot${r?` vtc-fx-${r}`:""}" style="${af(s,r)}"><span class="vtc-hotspot__core">${o}<span class="vtc-hotspot__chip" style="${of(s)}"><span class="vtc-hotspot__icon" style="width:${s.size}px;height:${s.size}px;">${iw(s,e)}</span></span></span>${a}</div>`}function lf(n){const e=n.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);if(e)return`<iframe class="vtc-info__video" src="https://www.youtube.com/embed/${Tt(e[1])}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;const t=n.match(/vimeo\.com\/(\d+)/);return t?`<iframe class="vtc-info__video" src="https://player.vimeo.com/video/${Tt(t[1])}" allow="autoplay; fullscreen" allowfullscreen></iframe>`:`<video class="vtc-info__video" src="${Tt(Ke(n))}" controls></video>`}function lw(n,e){const t=vl(n,e),i=[];return n.title&&i.push(`<div class="vtc-info__title">${Tt(n.title)}</div>`),t&&i.push(`<img class="vtc-info__img" src="${Tt(t)}" alt="" />`),n.videoUrl&&i.push(lf(n.videoUrl)),n.text&&i.push(`<div class="vtc-info__text">${Tt(n.text)}</div>`),i.length?`<div class="vtc-info">${i.join("")}</div>`:""}function cw(n){return n.scenes[0]}function hw(n){return n.layers.flatMap(e=>e.hotspots)}function To(n){return n.layers.filter(e=>e.visible).flatMap(e=>e.hotspots)}function _l(n,e){for(const t of n.layers){const i=t.hotspots.find(s=>s.id===e);if(i)return{scene:n,layer:t,hotspot:i}}}function cf(n,e){return(n.on??[]).filter(t=>t.event===e).flatMap(t=>t.actions)}function Ni(n,e,t){for(const i of n.on??[])if(!(t&&i.event!==t)){for(const s of i.actions)if(s.type===e)return s}}function dw(n){const e=[];for(const t of hw(n))for(const i of t.on??[])for(const s of i.actions)s.type==="goto"&&s.targetSceneId&&!e.includes(s.targetSceneId)&&e.push(s.targetSceneId);return e}function uw(n){const e=n.hotspot?Ni(n.hotspot,"goto"):null;return e?n.tour?.scenes.find(t=>t.id===e.targetSceneId)??null:null}function hf(n,e){if(!n||!n.includes("{{"))return n??"";const t=uw(e);return n.replace(/\{\{\s*([a-z.]+)\s*\}\}/gi,(i,s)=>{switch(s.toLowerCase()){case"scene.name":return e.scene?.name??"";case"scene.subtitle":return e.scene?.subtitle??"";case"target.name":return t?.name??"";case"target.subtitle":return t?.subtitle??"";case"tour.title":return e.tour?.title??"";default:return i}})}const fw=(n,e)=>e;function yl(n,e,t){const i=t.t??fw,s=Ni(e,"info","hover"),r=s??Ni(e,"info");if(r){const o={...r,title:i(`${e.id}.info.title`,r.title),text:i(`${e.id}.info.text`,r.text)},a=lw(o,t.assets);if(a)return n.tooltip={content:a,trigger:s?"hover":"click",position:"top center",className:"vtc-info-tip"},n}if(e.tooltip){const o=hf(i(`${e.id}.tooltip`,e.tooltip),{...t.tokens,hotspot:e});o&&(n.tooltip={content:Tt(o),position:"top center"})}return n}function pw(n,e){const t=Ni(n,"goto"),i=t?e.tokens?.tour?.scenes?.find(r=>r.id===t.targetSceneId):null;if(!i)return;const s=i.source.kind==="tiled"?`${i.source.dir}/base.avif`:i.source.kind==="single"?i.source.src:i.thumbnail;return{src:Ke(s),name:i.name}}function Ao(n,e){const t=Gy(n,e.components),i=n.visible===!1,s={id:n.id,className:"vtc-hotspot-marker"+(e.selected?" is-selected":"")+(i?" is-hidden":""),data:{hotspotId:n.id},visible:e.showHidden?!0:!i};if(n.geometry.kind==="polygon"){const a=n.geometry.points,l={...s,visible:s.visible&&a.length>=3,polygon:a.map(c=>[c.yaw,c.pitch]),svgStyle:{fill:t.fill||t.background||"#3b82f6",fillOpacity:String(t.fillOpacity??.28),stroke:t.stroke||t.iconColor||"#ffffff",strokeWidth:`${t.strokeWidth??2}px`}};return yl(l,n,e)}if(n.geometry.kind!=="point")return null;const r={yaw:n.geometry.yaw,pitch:n.geometry.pitch};if(n.form==="image"&&n.perspective){const a=vl(n,e.assets);if(a){const l={...s,imageLayer:a,position:r,size:{width:n.width??120,height:n.height??120}};return yl(l,n,e)}}const o={...s,position:r,html:aw(n,e.assets,t.text?{...t,text:hf(t.text,{...e.tokens,hotspot:n})}:t,n.form==="circle"?pw(n,e):void 0),anchor:n.form==="callout"?"left top":"center center",...t.scaleWithZoom?{scale:[.7,1.4]}:{}};return yl(o,n,e)}function df(n){return n.kind==="tiled"?"equirect-tiles":n.kind==="cube"?"cubemap":"equirect"}function mw(n){const e=new Set(n.scenes.map(t=>df(t.source)));return e.has("cubemap")&&e.size>1?{kind:"cubemap",conflict:n.scenes.filter(i=>df(i.source)!=="cubemap").map(i=>i.id)}:e.has("cubemap")?{kind:"cubemap"}:e.has("equirect-tiles")?{kind:"equirect-tiles"}:{kind:"equirect"}}function uf(n){return n.source.kind!=="splat"}function ff(n){const e=n.source.hfov;if(e==null)return null;const t=Math.PI*2,i=Math.min(t,Math.max(t/100,e));return s=>{const r=s.width/i,o=Math.round(t*r),a=Math.round(o/2),l=Math.min(s.height,a);return{fullWidth:o,fullHeight:a,croppedWidth:Math.min(s.width,o),croppedHeight:l,croppedX:Math.max(0,Math.round((o-s.width)/2)),croppedY:Math.max(0,Math.round((a-l)/2))}}}function gw(n,e={}){if(e.preferProxy&&n.proxy)return Ke(n.proxy);const t=n.source;if(t.kind==="single")return Ke(t.src);if(t.kind==="cube"){const s=t.faces;return{left:Ke(s.nx),front:Ke(s.pz),right:Ke(s.px),back:Ke(s.nz),top:Ke(s.py),bottom:Ke(s.ny)}}if(t.kind==="splat")return null;const i=t.format??"jpg";return{width:t.width,cols:t.cols,rows:t.rows,baseUrl:Ke(`${t.dir}/base.${i}`),tileUrl:(s,r)=>Ke(`${t.dir}/tile_${s}_${r}.${i}`)}}const vw=2,_w=1500,pf=2,mf=1;function yw(){const n=navigator.connection;return n?n.saveData?!1:n.effectiveType!=="2g"&&n.effectiveType!=="slow-2g":!0}function gf(n,e,t=null){const i=n.source;if(i.kind==="single"){const f=Ke(i.src);return{full:f?[f]:[],band:[]}}if(i.kind==="cube"){const f=i.faces;return{full:[f.nx,f.pz,f.px,f.nz,f.py,f.ny].map(g=>Ke(g)).filter(g=>!!g),band:[]}}if(i.kind==="splat")return{full:[],band:[]};const s=i.format??"jpg",r=Ke(`${i.dir}/base.${s}`),o=r?[r]:[];if(e==null||!i.cols||!i.rows)return{full:o,band:[]};const a=((e+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)/(Math.PI*2),l=Math.floor(a*i.cols),c=t==null?.5:(Math.PI/2-t)/Math.PI,h=Math.min(i.rows-1,Math.max(0,Math.floor(c*i.rows))),d=[];for(let f=-pf;f<=pf;f+=1){const m=((l+f)%i.cols+i.cols)%i.cols;for(let g=-mf;g<=mf;g+=1){const v=h+g;if(v<0||v>=i.rows)continue;const p=Ke(`${i.dir}/tile_${m}_${v}.${s}`);p&&d.push(p)}}return{full:o,band:d}}function xw(n){const e=new Set,t=new Map,i=[],s=new Set;let r=!1,o=!1;const a=()=>{if(!o)for(;s.size<vw&&i.length;){const d=i.findIndex(m=>!r||m.urgent);if(d===-1)return;const f=i.splice(d,1)[0];!f||e.has(f.url)||(s.add(f),fetch(f.url,{signal:f.controller.signal,priority:"low"}).then(async m=>{const g=m.body?.getReader();if(g)for(;!(await g.read()).done;);}).catch(()=>{}).finally(()=>{e.add(f.url),s.delete(f),a()}))}},l=(d,f,m=!1)=>{const g=t.get(d)??new Set;for(const p of f)g.add(p);t.set(d,g);const v=f.filter(p=>!e.has(p)).filter(p=>![...i,...s].some(u=>u.url===p)).map(p=>({url:p,sceneId:d,controller:new AbortController,urgent:m}));m?i.unshift(...v):i.push(...v),a()},c=d=>{const f=t.get(d);if(!f||!f.size)return!1;for(const m of f)if(!e.has(m))return!1;return!0},h=()=>{for(const d of i.splice(0))d.controller.abort();for(const d of s)d.controller.abort()};return{aimAt(d){if(o||!yw())return;for(const m of i.splice(0))m.controller.abort();if(!d)return;const f=n.scenes.find(m=>m.id===d);if(f)for(const m of dw(f)){const g=n.scenes.find(v=>v.id===m);g&&l(m,gf(g,null).full)}},warm(d,f,m=null,g=_w){if(o)return Promise.resolve();const v=n.scenes.find(y=>y.id===d);if(!v)return Promise.resolve();const{full:p,band:u}=gf(v,f,m);for(const y of s)y.urgent||y.controller.abort();return l(d,[...p,...u],!0),c(d)?Promise.resolve():new Promise(y=>{let E=!1;const x=()=>{E||(E=!0,window.clearInterval(P),window.clearTimeout(R),y())},P=window.setInterval(()=>{c(d)&&x()},60),R=window.setTimeout(x,g)})},isWarm:c,pause(){r=!0},resume(){r=!1,a()},destroy(){o=!0,h()}}}const vf=10,Ew=.32,ww=.32,Mw=.84,Co=.15,xl=.28;function Sw(n){if(n<=0)return 0;if(n>=1)return 1;const e=1/(1-(Co+xl)/2);if(n<Co)return e*n*n/(2*Co);if(n<1-xl)return e*(n-Co/2);const t=1-n;return 1-e*t*t/(2*xl)}const _f=.15,bw=.85,Tw=.999;function Aw(n){if(n>=1)return 1;const e=Math.min(1,Math.max(0,(n-_f)/(bw-_f)));return Math.min(Tw,e*e*(3-2*e))}function Cw(n){return!!n?.renderer?.scene&&!!n.renderer.meshContainer}function Rw(n,e){const t=n.renderer?.scene,i=n.renderer?.meshContainer;if(!t||!i)return{cancel(){}};const s=vf*Ew,r=vf*ww;let o=null,a=0,l=0,c=!1;const d=performance.now()+8e3,f=n.dataHelper.sphericalCoordsToVector3({yaw:e.yaw,pitch:0},void 0,1),m=new Set(t.children),g=(x,P)=>{x.position.set(f.x*P,f.y*P,f.z*P)},v=n.adapter,p=v?.setTextureOpacity;let u=null;v&&p&&(v.setTextureOpacity=(x,P)=>{u??(u=x),p.call(v,x,x===u?Aw(P):P)});const y=()=>{c||(c=!0,cancelAnimationFrame(a),g(i,0),o&&g(o,0),v&&p&&(v.setTextureOpacity=p,u&&p.call(v,u,1)),n.needsUpdate())},E=()=>{if(c)return;const x=performance.now();if(!o){if(x>d)return y();const N=u?.parent??t.children.find(F=>F.isGroup&&!m.has(F)&&F!==i);N&&(o=N,l=x)}if(!o){a=requestAnimationFrame(E);return}const P=Math.min(1,(x-l)/(e.durationMs*Mw)),R=Sw(P);if(g(i,-R*s),g(o,(1-R)*r),n.needsUpdate(),P>=1)return y();a=requestAnimationFrame(E)};return a=requestAnimationFrame(E),{cancel:y}}function Ro(n,e){n.style.setProperty("--tour-accent",e.theme.accent),n.style.setProperty("--tour-accent-ink",Pw(e.theme.accent)),n.style.setProperty("--tour-panel-bg",e.theme.panelBg),n.style.setProperty("--tour-radius",e.theme.radius);const t=e.tooltipStyle;t&&(n.style.setProperty("--tour-tooltip-bg",t.background),n.style.setProperty("--tour-tooltip-fg",t.textColor),n.style.setProperty("--tour-tooltip-size",`${t.fontSize}px`))}function Pw(n){const e=n.trim().replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e.slice(0,6);if(!/^[0-9a-f]{6}$/i.test(t))return"#14161a";const i=r=>{const o=parseInt(t.slice(r*2,r*2+2),16)/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*i(0)+.7152*i(1)+.0722*i(2)>.45?"#14161a":"#fdfdfb"}function Lw(){const n=globalThis.localStorage;try{return n?.getItem("__probe__"),n}catch{return}}function Po(n,e){if(e==="boolean")return n===!0||n==="true"||n===1;if(e==="number"){const t=typeof n=="number"?n:Number(n);return Number.isFinite(t)?t:0}return n==null?"":String(n)}class yf{constructor(e,t={}){$e(this,"types",new Map);$e(this,"initial",new Map);$e(this,"persisted",new Set);$e(this,"values",new Map);$e(this,"listeners",new Set);$e(this,"storage");$e(this,"storageKey");this.storageKey=`tour-studio:vars:${t.tourId??"tour"}`,this.storage=t.storage===null?void 0:t.storage??Lw();for(const i of e)this.types.set(i.name,i.type),this.initial.set(i.name,Po(i.initial,i.type)),i.persist&&this.persisted.add(i.name);this.reset()}reset(){if(this.values=new Map(this.initial),!(!this.storage||this.persisted.size===0))try{const e=JSON.parse(this.storage.getItem(this.storageKey)??"{}");for(const t of this.persisted)t in e&&this.values.set(t,Po(e[t],this.types.get(t)))}catch{}}has(e){return this.types.has(e)}get(e){return this.values.get(e)}snapshot(){return Object.fromEntries(this.values)}set(e,t){const i=this.types.get(e);if(!i)return!1;const s=Po(t,i);if(this.values.get(e)===s)return!0;this.values.set(e,s),this.save();for(const r of this.listeners)r(e,s);return!0}apply(e){if(!this.types.get(e.variable))return!1;const i=this.values.get(e.variable);if(e.op==="toggle")return this.set(e.variable,!i);if(e.op==="add"){const s=typeof e.value=="number"?e.value:Number(e.value??0);return this.set(e.variable,Number(i??0)+(Number.isFinite(s)?s:0))}return this.set(e.variable,e.value??"")}test(e){if(!e)return!0;const t=this.types.get(e.variable);if(!t)return!1;const i=this.values.get(e.variable);if(e.op==="truthy")return!!i;if(e.op==="falsy")return!i;const s=Po(e.value,t);switch(e.op){case"eq":return i===s;case"ne":return i!==s;case"gt":return i>s;case"lt":return i<s;case"gte":return i>=s;case"lte":return i<=s;default:return!1}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}save(){if(!this.storage||this.persisted.size===0)return;const e={};for(const t of this.persisted){const i=this.values.get(t);i!==void 0&&(e[t]=i)}try{this.storage.setItem(this.storageKey,JSON.stringify(e))}catch{}}}function xf(n,e){if(!n||!e)return 1;const t=n/e;return Math.min(2,Math.max(1,1/Math.min(1,t)))}const Lo=3;function Iw(n,e=30,t=90){const i=t-e;return i>0?Math.max(0,Math.min(100,(t-n)/i*100)):50}const Dw="data-tour-near",Nw="data-tour-hover",Uw=Math.cos(34*Math.PI/180),Fw=Math.cos(42*Math.PI/180),Ef="__tour-draft",kw="__tour-draft-v",Io="__tour-edit-v",El="__tour-edit-m",wf={effect:"none",rotation:!1,showLoader:!1},Ow=62,Bw={kind:"fade",durationMs:400},zw=620;function Mf(n,e=!1){return Hw(n??Bw,e)}function Hw(n,e){if(n.kind==="none")return wf;const t={showLoader:!1,effect:"fade",speed:n.durationMs,rotation:!1};return n.kind==="zoom-blend"&&!e?{...t,rotation:!1,zoomTo:Ow}:t}function Vw(n){if(!n.length)return null;let e=0,t=0,i=0;for(const s of n)e+=Math.cos(s.pitch)*Math.cos(s.yaw),t+=Math.sin(s.pitch),i+=Math.cos(s.pitch)*Math.sin(s.yaw);return{yaw:Math.atan2(i,e),pitch:Math.atan2(t,Math.hypot(e,i))}}class Gw{constructor(e,t={},i={}){$e(this,"viewer",null);$e(this,"vt",null);$e(this,"walk",null);$e(this,"prefetch",null);$e(this,"pendingGo",null);$e(this,"markers",null);$e(this,"container");$e(this,"callbacks");$e(this,"options");$e(this,"doc",null);$e(this,"currentSceneId",null);$e(this,"editMode",!1);$e(this,"selectedHotspotIds",[]);$e(this,"runtimeHidden",new Set);$e(this,"nearWatch",[]);$e(this,"editingAreaId",null);$e(this,"editIds",new Set);$e(this,"draftPoints",null);$e(this,"draftIds",new Set);$e(this,"audio",new JE);$e(this,"vars");$e(this,"onGrabStart",e=>{if(e.target?.closest?.(".psv-marker, .vtc-hotspot-marker")||this.restingCursor!=="grab")return;this.viewer?.setCursor("grabbing");const t=()=>{this.viewer?.setCursor(this.restingCursor),window.removeEventListener("pointerup",t),window.removeEventListener("pointercancel",t)};window.addEventListener("pointerup",t),window.addEventListener("pointercancel",t)});$e(this,"onPointerDown",e=>{if(!this.editMode||!this.viewer)return;const t=e.target?.closest?.(".psv-marker");if(!t)return;const i=t.id.replace("psv-marker-","");if(e.stopPropagation(),e.preventDefault(),this.handleAreaHandle(e,i))return;const s=e.shiftKey||e.metaKey||e.ctrlKey;if(this.hotspotById(i)?.geometry.kind==="polygon"){this.callbacks.onHotspotSelected?.(i,s);return}if(s){this.callbacks.onHotspotSelected?.(i,!0);return}this.startMarkerDrag(e,i)});$e(this,"restingCursor","grab");$e(this,"rotateRaf",0);$e(this,"rotateTimer",null);$e(this,"rotateLastFrame",0);$e(this,"rotateRate",0);$e(this,"rotateDelay",4e3);$e(this,"rotateHeld",!1);$e(this,"armAutoRotate",()=>{this.rotateRate===0||this.rotateHeld||(this.stopAutoRotate(),this.rotateTimer=setTimeout(()=>{this.rotateTimer=null,this.rotateLastFrame=0,this.rotateRaf=requestAnimationFrame(this.rotateFrame)},this.rotateDelay))});$e(this,"rotateFrame",e=>{if(!this.viewer||this.rotateRate===0){this.rotateRaf=0;return}this.rotateRaf=requestAnimationFrame(this.rotateFrame);const t=this.rotateLastFrame?e-this.rotateLastFrame:0;if(this.rotateLastFrame=e,t<=0||t>200||document.documentElement.dataset.inXr==="on")return;const i=this.viewer.getPosition();this.viewer.rotate({yaw:i.yaw+this.rotateRate*t,pitch:i.pitch})});$e(this,"onRotateInterrupt",()=>{this.rotateHeld=!0,this.stopAutoRotate();const e=()=>{window.removeEventListener("pointerup",e),window.removeEventListener("pointercancel",e),this.rotateHeld=!1,this.armAutoRotate()};window.addEventListener("pointerup",e),window.addEventListener("pointercancel",e)});$e(this,"appliedSceneId",null);$e(this,"appliedShared","");$e(this,"appliedAssets",null);$e(this,"appliedComponents",null);$e(this,"applied",new Map);this.container=e,this.callbacks=t,this.options=i,this.vars=new yf([]),this.container.addEventListener("pointerdown",this.onPointerDown,!0),this.container.addEventListener("pointerdown",this.onGrabStart),this.container.addEventListener("pointerdown",this.onRotateInterrupt,!0)}quietUnlinked(e){const t=console.warn;console.warn=(...i)=>{typeof i[0]=="string"&&i[0].includes("is never linked to")||t.apply(console,i)};try{return e()}finally{console.warn=t}}get variables(){return this.vars}get isLive(){return this.viewer!==null}get sceneId(){return this.currentSceneId}get psv(){return this.viewer}setEditMode(e){this.editMode!==e&&(this.editMode=e,this.applyMarkers(),this.applyAutoRotate())}setSelected(e){const t=e==null?[]:Array.isArray(e)?e:[e];t.length===this.selectedHotspotIds.length&&t.every((i,s)=>this.selectedHotspotIds[s]===i)||(this.selectedHotspotIds=t,this.applyMarkers())}setAreaEdit(e){this.editingAreaId!==e&&(this.editingAreaId=e,this.renderAreaEdit())}refreshAreaEdit(){this.renderAreaEdit()}setDraft(e){this.draftPoints=e?.length?e.map(t=>({yaw:t.yaw,pitch:t.pitch})):null,this.renderDraft()}load(e,t){if(this.doc=e,this.forgetMarkers(),this.prefetch?.destroy(),this.prefetch=this.options.preferProxy?null:xw(e),Ro(this.container,e),this.vars=new yf(e.variables,{tourId:e.id}),this.audio.setMuted(!!this.options.silent||!!e.runtime.audio?.muted),e.scenes.length===0){this.destroyViewer();return}const i=t&&e.scenes.find(r=>r.id===t)||cw(e),s=e.scenes.filter(uf).map(r=>this.toNode(r));this.viewer?this.quietUnlinked(()=>this.vt.setNodes(s,i.id)):this.quietUnlinked(()=>this.create(s,i)),this.applyAutoRotate()}setDoc(e){const t=this.doc;if(this.doc=e,Ro(this.container,e),(!t||t.scenes.length!==e.scenes.length||e.scenes.some((s,r)=>{const o=t.scenes[r];return!o||o.id!==s.id?!0:o.source===s.source?!1:JSON.stringify(o.source)!==JSON.stringify(s.source)}))&&this.viewer){this.forgetMarkers(),this.quietUnlinked(()=>this.vt.setNodes(e.scenes.filter(uf).map(s=>this.toNode(s)),this.currentSceneId??void 0)),this.applyAutoRotate();return}this.applyMarkers(),this.applyAutoRotate()}toNode(e){return{id:e.id,panorama:gw(e,this.options),...ff(e)?{panoData:ff(e)}:{},name:e.name,caption:e.name,thumbnail:Ke(e.thumbnail),markers:this.markersFor(e),links:[],...e.north!=null||e.tilt!=null||e.roll!=null?{sphereCorrection:{pan:e.north??0,tilt:e.tilt??0,roll:e.roll??0}}:{}}}currentScene(){return this.doc?.scenes.find(e=>e.id===this.currentSceneId)??null}frame(){const e=this.viewer?.state;return e?.hFov==null||e.vFov==null?null:{hFov:e.hFov*Math.PI/180,vFov:e.vFov*Math.PI/180}}holdView(){if(this.editMode||!this.viewer)return;const e=this.currentScene();if(!e)return;const t=this.viewer.getPosition(),i=el(e,t,this.frame());i!==t&&this.viewer.rotate(i)}held(e,t){return this.editMode?t:el(e,t,this.frame())}markersFor(e){const t=this.doc;return To(e).map(i=>Ao(i,{assets:t.assets,components:t.components,tokens:{tour:t,scene:e},selected:this.selectedHotspotIds.includes(i.id),showHidden:this.editMode,t:this.options.t})).filter(i=>i!==null)}create(e,t){const s=this.doc.runtime;this.viewer=new Ty({container:this.container,...this.options.adapter?{adapter:this.options.adapter}:{},defaultYaw:this.held(t,t.initialView).yaw,defaultPitch:this.held(t,t.initialView).pitch,...s.minFov!=null?{minFov:s.minFov}:{},...s.maxFov!=null?{maxFov:s.maxFov}:{},...t.initialView.fov!=null?{defaultZoomLvl:Iw(t.initialView.fov,s.minFov,s.maxFov)}:{},navbar:!1,moveSpeed:xf(this.container.clientWidth,this.container.clientHeight),plugins:[[Bu,{gotoMarkerSpeed:"6rpm"}],[tf,{dataMode:"client",positionMode:"manual",nodes:e,startNodeId:t.id,preload:!0,transitionOptions:()=>Mf(void 0)}]]}),this.vt=this.viewer.getPlugin(tf),this.markers=this.viewer.getPlugin(Bu),this.viewer.setCursor(this.restingCursor),this.viewer.addEventListener("load-progress",o=>{this.setProgress(o.progress),this.prefetch?.pause()}),this.viewer.addEventListener("panorama-loaded",()=>{this.setProgress(null),this.prefetch?.resume()}),this.viewer.addEventListener("ready",()=>this.setProgress(null)),this.viewer.addEventListener("before-rotate",o=>{if(this.editMode)return;const a=this.currentScene();if(!a)return;const l=el(a,o.position,this.frame());o.position.yaw=l.yaw,o.position.pitch=l.pitch}),this.vt.addEventListener("node-changed",o=>{const a=this.currentSceneId;this.currentSceneId=o.node.id,this.runtimeHidden.clear(),this.draftPoints=null,this.draftIds.clear(),this.editingAreaId=null,this.editIds.clear(),this.applyMarkers(),a&&a!==o.node.id&&this.runSceneEvent(a,"unload"),this.startSceneAudio(),this.runSceneEvent(o.node.id,"load"),this.prefetch?.aimAt(o.node.id),this.callbacks.onSceneChanged?.(o.node.id)}),this.markers.addEventListener("select-marker",o=>{this.editMode||this.runHotspotEvent(wl(o.marker),"click")}),this.markers.addEventListener("enter-marker",o=>{if(this.editMode)return;const a=wl(o.marker);this.markHoverGroup(a,!0),this.runHotspotEvent(a,"hover")}),this.markers.addEventListener("leave-marker",o=>{if(this.editMode)return;const a=wl(o.marker);this.markHoverGroup(a,!1),this.runHotspotEvent(a,"leave")}),this.viewer.addEventListener("click",o=>{o.data.rightclick||o.data.marker||this.callbacks.onSphereClick?.({yaw:o.data.yaw,pitch:o.data.pitch})}),this.viewer.addEventListener("dblclick",o=>{o.data.rightclick||o.data.marker||this.callbacks.onSphereDoubleClick?.({yaw:o.data.yaw,pitch:o.data.pitch})}),this.viewer.addEventListener("position-updated",o=>{this.callbacks.onViewChanged?.({yaw:o.position.yaw,pitch:o.position.pitch}),this.markNear(o.position)});const r=()=>{const o=this.viewer?.state.hFov;o!=null&&this.callbacks.onFovChanged?.(o*Math.PI/180);const a=this.viewer?.state.vFov;a!=null&&this.callbacks.onZoomChanged?.(a),this.holdView()};this.viewer.addEventListener("zoom-updated",r),this.viewer.addEventListener("size-updated",r),this.viewer.addEventListener("ready",r),this.viewer.addEventListener("stop-all",this.armAutoRotate),this.viewer.addEventListener("size-updated",()=>{const o=this.viewer;if(!o)return;const a=xf(this.container.clientWidth,this.container.clientHeight);Math.abs((o.config.moveSpeed??1)-a)>.01&&o.setOption("moveSpeed",a)}),this.currentSceneId=t.id,this.startSceneAudio(),this.runSceneEvent(t.id,"load")}runHotspotEvent(e,t){if(!e||!this.doc||!this.currentSceneId)return;const i=this.doc.scenes.find(r=>r.id===this.currentSceneId),s=i&&_l(i,e);s&&nf(cf(s.hotspot,t),this.deps())}runSceneEvent(e,t){const i=this.doc?.scenes.find(s=>s.id===e);i?.on?.length&&nf(cf(i,t),this.deps())}trigger(e,t){this.runHotspotEvent(e,t)}deps(){return{...this.options.host,variables:this.vars,goTo:(e,t,i)=>this.goToScene(e,t,i),lookAt:(e,t,i)=>this.lookAt(e,t,i),toggleHotspots:(e,t)=>this.setHotspotsVisible(e,t),playAudio:(e,t)=>this.audio.toggle(e,{loop:t}),resolveMedia:(e,t)=>{const i=e?this.doc?.assets.find(s=>s.id===e):void 0;return Ke(i?.src??t)},onUnsupported:this.callbacks.onUnsupportedAction}}hotspotById(e){const t=this.doc?.scenes.find(i=>i.id===this.currentSceneId);return t?_l(t,e)?.hotspot:void 0}startMarkerDrag(e,t){const i=this.container.getBoundingClientRect(),s=e.clientX,r=e.clientY;let o=!1,a=null;const l=h=>{if(!o&&(Math.abs(h.clientX-s)>Lo||Math.abs(h.clientY-r)>Lo)&&(o=!0),!o)return;const d=this.viewer.dataHelper.viewerCoordsToSphericalCoords({x:h.clientX-i.left,y:h.clientY-i.top});a={yaw:d.yaw,pitch:d.pitch};const f=this.hotspotById(t);if(f){const m=Ao({...f,geometry:{kind:"point",...a}},{assets:this.doc.assets,components:this.doc.components,tokens:{tour:this.doc,scene:this.doc.scenes.find(g=>g.id===this.currentSceneId)},selected:!0,showHidden:!0,t:this.options.t});m&&this.markers?.updateMarker(m)}},c=()=>{window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",c),o&&a?this.callbacks.onHotspotMoved?.(t,a):this.callbacks.onHotspotSelected?.(t)};window.addEventListener("pointermove",l),window.addEventListener("pointerup",c)}doorYaw(e,t){if(!e)return null;const i=this.doc?.scenes.find(s=>s.id===e);if(!i)return null;for(const s of i.layers)for(const r of s.hotspots){if(r.geometry.kind!=="point")continue;if((r.on??[]).some(a=>a.actions.some(l=>l.type==="goto"&&l.targetSceneId===t)))return r.geometry.yaw}return null}goToScene(e,t,i){if(!this.vt||e===this.currentSceneId)return;const s=this.doc?.scenes.find(u=>u.id===e);if(!s)return;const r=document.documentElement.dataset.inXr==="on",o=this.held(s,t??s.initialView),a=i?.kind==="zoom-blend",l=a&&!r?this.doorYaw(this.currentSceneId,e):null,c=a&&!r?this.doorYaw(e,this.currentSceneId??""):null,h=c==null?null:c+Math.PI,d=a&&!r&&l!=null&&Cw(this.viewer),f=i?.durationMs??zw,m=r?wf:Mf(d?{...i,durationMs:f}:i,d);this.walk?.cancel(),this.walk=d?Rw(this.viewer,{yaw:l,durationMs:f}):null;const g=()=>{this.vt&&this.vt.setCurrentNode(e,{...m,...r?{}:t?{rotateTo:{yaw:t.yaw,pitch:t.pitch}}:h!=null?{rotateTo:{yaw:h,pitch:0}}:a?{}:{rotateTo:{yaw:o.yaw,pitch:o.pitch}}})},v=this.prefetch?this.prefetch.warm(e,h??o.yaw,o.pitch):Promise.resolve(),p=Symbol("navigation");this.pendingGo=p,v.then(()=>{this.pendingGo===p&&(this.pendingGo=null,g())})}setProgress(e){const t=this.progressBar();if(t){if(e==null||e>=100){t.style.opacity="0",t.style.width="0%";return}t.style.opacity="1",t.style.width=`${Math.max(0,Math.min(100,e))}%`}}progressBar(){if(!this.container)return null;let e=this.container.querySelector(":scope > .tour-progress");return e||(e=document.createElement("div"),e.className="tour-progress",this.container.appendChild(e)),e}setCursor(e){this.restingCursor=e,this.viewer?.setCursor(e)}focusHotspot(e){const t=this.doc?.scenes.find(o=>o.id===this.currentSceneId),i=t&&_l(t,e);if(!i||!this.viewer)return;const s=i.hotspot.geometry,r=s.kind==="point"?{yaw:s.yaw,pitch:s.pitch}:s.kind==="polygon"?Vw(s.points):null;r&&this.viewer.rotate(r)}lookAt(e,t,i){this.viewer?.animate({yaw:e,pitch:t,...i!=null?{zoom:i}:{},speed:"6rpm"})}focusPoint(e){this.viewer?.animate({yaw:e.yaw,pitch:e.pitch,speed:"8rpm"})}refreshSize(){this.viewer?.autoSize()}getPosition(){if(!this.viewer)return null;const e=this.viewer.getPosition();return{yaw:e.yaw,pitch:e.pitch}}pointAt(e,t){if(!this.viewer)return null;const i=this.container.getBoundingClientRect(),s=this.viewer.dataHelper.viewerCoordsToSphericalCoords({x:e-i.left,y:t-i.top});return{yaw:s.yaw,pitch:s.pitch}}setHotspotsVisible(e,t){if(this.markers)for(const i of e){const s=t==="hide"?!0:t==="show"?!1:!this.runtimeHidden.has(i);s?this.runtimeHidden.add(i):this.runtimeHidden.delete(i);try{this.markers.toggleMarker(i,!s)}catch{}}}applyAutoRotate(){const e=this.doc?.runtime.autoRotate,i=!!e?.enabled&&!this.options.silent&&!this.editMode?e?.speed??.5:0;this.rotateRate=Number.isFinite(i)?i*2*Math.PI/6e4:0,this.rotateDelay=Math.max(0,e?.idleDelayMs??4e3),this.stopAutoRotate(),this.rotateRate!==0&&this.viewer&&this.armAutoRotate()}stopAutoRotate(){this.rotateTimer!==null&&clearTimeout(this.rotateTimer),this.rotateTimer=null,this.rotateRaf&&cancelAnimationFrame(this.rotateRaf),this.rotateRaf=0,this.rotateLastFrame=0}forgetMarkers(){this.appliedSceneId=null,this.applied.clear()}sharedMarkerKey(e){const t=this.doc;let i="";for(const s of t.scenes)i+=`${s.id}\0${s.name}\0${s.subtitle??""}`;return[t.title,e.name,e.subtitle??"",this.editMode?"1":"0",i].join("")}applyMarkers(){const e=this.doc?.scenes.find(f=>f.id===this.currentSceneId);if(!e||!this.markers)return;const t=this.doc,i=this.markers,s=To(e),r=new Set(this.selectedHotspotIds),o=this.sharedMarkerKey(e),a=f=>Ao(f,{assets:t.assets,components:t.components,tokens:{tour:t,scene:e},selected:r.has(f.id),showHidden:this.editMode,t:this.options.t}),l=[],c=new Set;for(const f of s){c.add(f.id);const m=this.applied.get(f.id);(!m||m.hotspot!==f||m.selected!==r.has(f.id))&&l.push(f)}const h=[];for(const f of this.applied.keys())c.has(f)||h.push(f);if(this.appliedSceneId!==e.id||this.appliedShared!==o||this.appliedAssets!==t.assets||this.appliedComponents!==t.components||(l.length+h.length)*3>s.length){this.applied.clear();const f=[];for(const m of s){const g=a(m);this.applied.set(m.id,{hotspot:m,selected:r.has(m.id),present:!!g}),g&&f.push(g)}i.setMarkers(f),this.appliedSceneId=e.id,this.appliedShared=o,this.appliedAssets=t.assets,this.appliedComponents=t.components}else{for(const f of h){if(this.applied.get(f)?.present)try{i.removeMarker(f)}catch{}this.applied.delete(f)}for(const f of l){const m=a(f);if(this.applied.get(f.id)?.present)try{i.removeMarker(f.id)}catch{}m&&i.addMarker(m),this.applied.set(f.id,{hotspot:f,selected:r.has(f.id),present:!!m})}}for(const f of this.runtimeHidden)try{i.hideMarker(f)}catch{}this.renderDraft(),this.renderAreaEdit(),this.rebuildNearWatch()}renderDraft(){if(!this.markers)return;for(const r of this.draftIds)try{this.markers.removeMarker(r)}catch{}this.draftIds.clear();const e=this.draftPoints;if(!e?.length)return;const t=this.doc?.theme.accent??"#3b82f6",i=r=>{this.markers.addMarker(r),this.draftIds.add(r.id)},s=e.map(r=>[r.yaw,r.pitch]);e.length>=3?i({id:Ef,polygon:s,className:"vtc-draft",svgStyle:{fill:t,fillOpacity:"0.22",stroke:"#ffffff",strokeWidth:"2px",strokeDasharray:"6 4"}}):e.length===2&&i({id:Ef,polyline:s,className:"vtc-draft",svgStyle:{stroke:"#ffffff",strokeWidth:"2px",strokeDasharray:"6 4",fill:"none"}}),e.forEach((r,o)=>{i({id:`${kw}${o}`,position:{yaw:r.yaw,pitch:r.pitch},html:`<span class="vtc-draft-dot${o===0?" is-first":""}"></span>`,anchor:"center center",className:"vtc-draft-vertex"})})}renderAreaEdit(){for(const s of this.editIds)try{this.markers?.removeMarker(s)}catch{}if(this.editIds.clear(),!this.editingAreaId||!this.editMode||!this.markers)return;const e=this.hotspotById(this.editingAreaId);if(e?.geometry.kind!=="polygon")return;const t=e.geometry.points;if(t.length<3)return;const i=s=>{this.markers.addMarker(s),this.editIds.add(s.id)};t.forEach((s,r)=>{i({id:`${Io}${r}`,position:{yaw:s.yaw,pitch:s.pitch},html:'<span class="vtc-edit-dot" title="Drag to move. Alt-click to remove."></span>',anchor:"center center",className:"vtc-edit-vertex"})}),t.forEach((s,r)=>{const o=t[(r+1)%t.length];let a=o.yaw-s.yaw;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;i({id:`${El}${r}`,position:{yaw:s.yaw+a/2,pitch:(s.pitch+o.pitch)/2},html:'<span class="vtc-edit-mid" title="Click to add a point here"></span>',anchor:"center center",className:"vtc-edit-midpoint"})})}handleAreaHandle(e,t){const i=this.editingAreaId;if(!i)return!1;if(t.startsWith(El)){const r=Number(t.slice(El.length)),o=this.hotspotById(i);if(o?.geometry.kind==="polygon"){const a=o.geometry.points,l=a[r],c=a[(r+1)%a.length];let h=c.yaw-l.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;this.callbacks.onAreaVertexAdded?.(i,r+1,{yaw:l.yaw+h/2,pitch:(l.pitch+c.pitch)/2})}return!0}if(!t.startsWith(Io))return!1;const s=Number(t.slice(Io.length));if(e.altKey){const r=this.hotspotById(i);return r?.geometry.kind==="polygon"&&r.geometry.points.length>3&&this.callbacks.onAreaVertexRemoved?.(i,s),!0}return this.startVertexDrag(e,i,s),!0}startVertexDrag(e,t,i){const s=this.container.getBoundingClientRect(),r=e.clientX,o=e.clientY;let a=!1,l=null;const c=d=>{if(!a&&(Math.abs(d.clientX-r)>Lo||Math.abs(d.clientY-o)>Lo)&&(a=!0),!a)return;const f=this.viewer.dataHelper.viewerCoordsToSphericalCoords({x:d.clientX-s.left,y:d.clientY-s.top});l={yaw:f.yaw,pitch:f.pitch};const m=this.hotspotById(t);if(m?.geometry.kind!=="polygon")return;const g=m.geometry.points.map((p,u)=>u===i?l:p),v=Ao({...m,geometry:{kind:"polygon",points:g}},{assets:this.doc.assets,components:this.doc.components,tokens:{tour:this.doc,scene:this.doc.scenes.find(p=>p.id===this.currentSceneId)},selected:!0,showHidden:!0,t:this.options.t});v&&this.markers?.updateMarker(v);try{this.markers?.updateMarker({id:`${Io}${i}`,position:{yaw:l.yaw,pitch:l.pitch}})}catch{}},h=()=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",h),a&&l?this.callbacks.onAreaVertexMoved?.(t,i,l):this.renderAreaEdit()};window.addEventListener("pointermove",c),window.addEventListener("pointerup",h)}markNear(e){const t=this.nearWatch;if(!t.length)return;const i=Math.cos(e.pitch),s=Math.sin(e.pitch);for(const r of t){const o=s*r.sinPitch+i*r.cosPitch*Math.cos(e.yaw-r.yaw),a=r.near?o>Fw:o>Uw;if(a===r.near)continue;r.near=a,document.getElementById(`psv-marker-${r.id}`)?.toggleAttribute(Dw,a)}}rebuildNearWatch(){const e=this.doc?.scenes.find(s=>s.id===this.currentSceneId);this.nearWatch=[];const t=this.nearWatch;if(!e)return;for(const s of e.layers)for(const r of s.hotspots)r.form!=="callout"||r.geometry.kind!=="point"||this.nearWatch.push({id:r.id,yaw:r.geometry.yaw,sinPitch:Math.sin(r.geometry.pitch),cosPitch:Math.cos(r.geometry.pitch),near:!1});const i=this.viewer?.getPosition();i&&requestAnimationFrame(()=>{this.nearWatch===t&&this.markNear(i)})}markHoverGroup(e,t){if(!e)return;const i=this.doc?.scenes.find(o=>o.id===this.currentSceneId);if(!i)return;const s=i.layers.flatMap(o=>o.hotspots),r=s.find(o=>o.id===e)?.hoverGroup;if(r)for(const o of s)o.hoverGroup===r&&document.getElementById(`psv-marker-${o.id}`)?.toggleAttribute(Nw,t)}startSceneAudio(){if(this.options.silent){this.audio.setAmbient(null);return}const t=this.doc?.scenes.find(s=>s.id===this.currentSceneId)?.audio;if(!t){this.audio.setAmbient(null);return}const i=t.assetId?this.doc?.assets.find(s=>s.id===t.assetId):void 0;this.audio.setAmbient(i?.src??t.src,{loop:t.loop!==!1,volume:t.volume})}destroyViewer(){this.rotateRate=0,this.stopAutoRotate(),this.walk?.cancel(),this.walk=null,this.prefetch?.destroy(),this.prefetch=null,this.pendingGo=null,this.forgetMarkers(),this.viewer?.destroy(),this.viewer=null,this.vt=null,this.markers=null,this.currentSceneId=null}destroy(){this.container.removeEventListener("pointerdown",this.onPointerDown,!0),this.container.removeEventListener("pointerdown",this.onGrabStart),this.container.removeEventListener("pointerdown",this.onRotateInterrupt,!0),this.audio.stopAll(),this.destroyViewer()}}function wl(n){return n.data?.hotspotId??n.id}const Ww={restart:[{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},{d:"M3 3v5h5"}],close:[{d:"M18 6 6 18"},{d:"m6 6 12 12"}],next:[{d:"m9 18 6-6-6-6"}],back:[{d:"m15 18-6-6 6-6"}],up:[{d:"m18 15-6-6-6 6"}],down:[{d:"m6 9 6 6 6-6"}],collapse:[{d:"m6 9 6 6 6-6"}],expand:[{d:"m18 15-6-6-6 6"}],scenes:[{d:"M3 5h.01"},{d:"M3 12h.01"},{d:"M3 19h.01"},{d:"M8 5h13"},{d:"M8 12h13"},{d:"M8 19h13"}],language:[{d:"M2 12A10 10 0 1 0 22 12A10 10 0 1 0 2 12Z"},{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"},{d:"M2 12h20"}],vr:[{d:"M2 15A4 4 0 1 0 10 15A4 4 0 1 0 2 15Z"},{d:"M14 15A4 4 0 1 0 22 15A4 4 0 1 0 14 15Z"},{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"},{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"},{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}],drag:[{d:"M12 2v20"},{d:"m15 19-3 3-3-3"},{d:"m19 9 3 3-3 3"},{d:"M2 12h20"},{d:"m5 9-3 3 3 3"},{d:"m9 5 3-3 3 3"}],look:[{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},{d:"M9 12A3 3 0 1 0 15 12A3 3 0 1 0 9 12Z"}],pin:[{d:"M12 17v5"},{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"}],pinOff:[{d:"M12 17v5"},{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"},{d:"m2 2 20 20"},{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"}],grip:[{d:"M11 9A1 1 0 1 0 13 9A1 1 0 1 0 11 9Z"},{d:"M18 9A1 1 0 1 0 20 9A1 1 0 1 0 18 9Z"},{d:"M4 9A1 1 0 1 0 6 9A1 1 0 1 0 4 9Z"},{d:"M11 15A1 1 0 1 0 13 15A1 1 0 1 0 11 15Z"},{d:"M18 15A1 1 0 1 0 20 15A1 1 0 1 0 18 15Z"},{d:"M4 15A1 1 0 1 0 6 15A1 1 0 1 0 4 15Z"}],check:[{d:"M20 6 9 17l-5-5"}],cross:[{d:"M18 6 6 18"},{d:"m6 6 12 12"}],play:[{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",filled:!0}],pause:[{d:"M15 3H18A1 1 0 0 1 19 4V20A1 1 0 0 1 18 21H15A1 1 0 0 1 14 20V4A1 1 0 0 1 15 3Z",filled:!0},{d:"M6 3H9A1 1 0 0 1 10 4V20A1 1 0 0 1 9 21H6A1 1 0 0 1 5 20V4A1 1 0 0 1 6 3Z",filled:!0}],lock:[{d:"M5 11H19A2 2 0 0 1 21 13V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V13A2 2 0 0 1 5 11Z",filled:!0},{d:"M7 11V7a5 5 0 0 1 10 0v4"}],unlocked:[{d:"M5 11H19A2 2 0 0 1 21 13V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V13A2 2 0 0 1 5 11Z",filled:!0},{d:"M7 11V7a5 5 0 0 1 9.9-1"}],sound:[{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"},{d:"M16 9a5 5 0 0 1 0 6"},{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}],mute:[{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"},{d:"M22 9L16 15"},{d:"M16 9L22 15"}]};function Do(n,e=20){const t=Ww[n];if(!t)return"";const i=t.map(s=>`<path d="${s.d}" `+(s.filled?'fill="currentColor" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round"/>':'fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>')).join("");return`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" aria-hidden="true">${i}</svg>`}const Sf='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>';function $w(n){if(!n)return"";const{title:e,text:t,image:i,...s}=n,r=[];e&&r.push(`<h2>${Tt(String(e))}</h2>`),i&&r.push(`<img src="${Tt(Ke(String(i)))}" alt="" />`),t&&r.push(`<p>${Tt(String(t))}</p>`);for(const[o,a]of Object.entries(s))a==null||a===""||r.push(`<p class="tp-kv"><span>${Tt(o)}</span>${Tt(String(a))}</p>`);return r.join("")}function Xw(n,e){let t=null;const i=document.createElement("div");i.className="tour-player-host",n.appendChild(i);let s=null;const r=y=>{y.key!=="Escape"||!s||(s(),y.stopPropagation())};document.addEventListener("keydown",r);let o=null;const a=()=>{o?.remove(),o=null,s=c?.classList.contains("open")?f:null},l=(y,E)=>{a();const x=document.createElement("div");return x.className=`tp-overlay ${y}`,x.innerHTML=`<button class="tp-close" aria-label="Close">${Sf}</button><div class="tp-overlay-body">${E}</div>`,x.addEventListener("click",P=>{(P.target===x||P.target.closest(".tp-close"))&&a()}),i.appendChild(x),o=x,s=a,x};let c=null,h=null;const d=()=>c||(c=document.createElement("aside"),c.className="tp-panel",c.innerHTML=`<button class="tp-close" aria-label="Close">${Sf}</button><div class="tp-panel-body"></div>`,c.querySelector(".tp-close").addEventListener("click",()=>f()),i.appendChild(c),c);function f(){c?.classList.remove("open"),h=null,s=o?a:null}const m=(y,E)=>{const x=d();x.querySelector(".tp-panel-body").innerHTML=$w(E),x.classList.add("open"),h=y,s=f};let g=null;const v=()=>{g?.pause(),g=null,"speechSynthesis"in window&&window.speechSynthesis.cancel()},p={playVideo(y){l("tp-video",lf(Ke(y)??y))},openUrl(y,E){if(E==="blank"){window.open(y,"_blank","noopener,noreferrer");return}if(t){t.openEmbed(y);return}l("tp-frame",`<iframe src="${Tt(y)}" title="" referrerpolicy="no-referrer"></iframe>`)},showImage(y){l("tp-image",`<img src="${Tt(Ke(y)??y)}" alt="" />`)},openPanel(y,E,x){E==="close"||E==="toggle"&&h===y?f():m(y,x)},animate(y,E,x){for(const P of y){const R=document.getElementById(`psv-marker-${P}`);R&&(R.classList.remove(`tp-anim-${E}`),R.offsetWidth,R.classList.add(`tp-anim-${E}`),window.setTimeout(()=>R.classList.remove(`tp-anim-${E}`),x??1200))}},narrate({text:y,src:E}){if(v(),E){g=new Audio(Ke(E)??E),g.play().catch(()=>{});return}y&&"speechSynthesis"in window&&window.speechSynthesis.speak(new SpeechSynthesisUtterance(y))},showModel(y){const E=Ke(y)??y;l("tp-model",`<p>This tour includes a 3D model.</p><p><a href="${Tt(E)}" download>Download the model</a></p>`)}},u=y=>{i.style.setProperty("--tp-accent",y.theme.accent),i.style.setProperty("--tp-panel-bg",y.theme.panelBg),i.style.setProperty("--tp-radius",y.theme.radius)};return u(e),{effects:p,setTheme:u,setEmbed(y){t=y},clear(){a(),f(),v(),t?.closeEmbed()},destroy(){v(),document.removeEventListener("keydown",r),i.remove()}}}const Ml={next:"Next",back:"Back",questions:"questions",question:"question",answerVerb:"Answer",typeAnswer:"Type your answer",lookAround:"Look around…",answer:"Answer to continue",check:"Check",correct:"Correct!",wrong:"Not quite",continue:"Continue",finish:"Finish",nextScene:"Next scene",scenes:"Scenes",restart:"Start again",startTour:"Start tour",startVr:"Start in VR",preparing:"Preparing…",loading:"Loading",mute:"Sound off",unmute:"Sound on",progress:"Progress",done:"done",restartAsk:"Restart the tour?",restartWarn:"Your progress and collected stamps will be cleared.",restartYes:"Restart",restartNo:"Keep going",correctOf:"questions right, out of",visitedOf:"places visited, out of",score:"Your score",placesSeen:"places visited",congrats:"You finished the tour!",doneSeal:"DONE",youChose:"You chose",theAnswer:"The answer",notAnswered:"not answered",play:"Listen",pause:"Pause",close:"Close",locked:"Answer the earlier questions first",menuScenes:"Scenes",menuSound:"Sound",menuRestart:"Restart",welcomeTitle:"Welcome!",welcomeGo:"Let's go",welcomeBlurb:"You are about to walk through {scenes} places, one at a time. Look around each one, listen to your guide, and answer to move on.",howLook:"Drag the picture to look around",howLookMore:"Every place is a full 360° photo — turn all the way round.",howListen:"Listen or read the guide",howListenMore:"The card at the bottom tells you about each place.",howQuiz:"Answer 2 questions to move on",howQuizMore:"Each place unlocks the next one. There are {scenes} places to visit."},bf={zh:{next:"下一站",back:"上一站",questions:"題",question:"題",answerVerb:"回答",typeAnswer:"請輸入答案",lookAround:"先看看四周…",answer:"答對才能繼續",check:"確認",correct:"答對了！",wrong:"再想想",continue:"繼續",finish:"完成",nextScene:"下一站",scenes:"所有地點",restart:"重新開始",startTour:"開始導覽",startVr:"VR 模式",preparing:"準備中",loading:"載入中",mute:"關閉聲音",unmute:"開啟聲音",progress:"進度",done:"題完成",restartAsk:"要重新開始導覽嗎？",restartWarn:"你的進度和收集的印章都會清除。",restartYes:"重新開始",restartNo:"繼續參觀",correctOf:"題答對，總共",visitedOf:"個地點去過，總共",score:"你的成績",placesSeen:"個地點去過",congrats:"你完成了導覽！",doneSeal:"完成",youChose:"你選的是",theAnswer:"正確答案",notAnswered:"沒有作答",play:"聽解說",pause:"暫停",close:"關閉",locked:"要先答完前面的題目喔",menuScenes:"地點",menuSound:"聲音",menuRestart:"重來",welcomeTitle:"歡迎！",welcomeGo:"出發！",welcomeBlurb:"你將依序走過 {scenes} 個地點。到每個地方看看四周，聽聽解說，答對問題就能前往下一站。",howLook:"拖曳畫面就能環顧四周",howLookMore:"每個地點都是 360° 全景，可以轉一整圈喔。",howListen:"聽解說或閱讀文字",howListenMore:"下方的卡片會介紹每個地點。",howQuiz:"答對 2 題就能前往下一站",howQuizMore:"每一站會解鎖下一站，總共有 {scenes} 個地點。"}};function Sl(n){return{...Ml,...bf[n]??bf[n.split("-")[0].toLowerCase()]??{}}}const re=(n,e,t)=>{const i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.textContent=t),i},fn=(n,e,t)=>{const i=document.createElement("button");return i.type="button",i.className=n,i.textContent=e,i.addEventListener("click",t),i},Tf=(n,e,t,i)=>{const s=document.createElement("button");return s.type="button",s.className=n,s.setAttribute("aria-label",t),s.innerHTML=Do(e),s.addEventListener("click",i),s},_s=(n,e)=>{n.textContent!==e&&(n.textContent=e)},qw=/SDG\s*0?(\d{1,2})\b/gi,Yw=(n,e,t)=>{const i=`${t}\0${e}`;if(n.dataset.rich===i)return;n.dataset.rich=i;const s=[];let r=0;for(const o of e.matchAll(qw)){const a=Ja(Number(o[1]));if(!a)continue;const l=o.index??0;l>r&&s.push(document.createTextNode(e.slice(r,l)));const c=re("span","tg-sdg-pill",o[0]);c.style.background=a.color,c.style.color=po(a.color),c.title=Yd(a,t),s.push(c),r=l+o[0].length}r<e.length&&s.push(document.createTextNode(e.slice(r))),n.replaceChildren(...s)},pn=(n,e,t=20)=>{const i=e?`${e}:${t}`:"";n.dataset.icon!==i&&(n.dataset.icon=i,n.innerHTML=e?Do(e,t):"")},Sn=(n,e,t,i=!1)=>{const s=`${e}:${t}:${i}`;if(n.dataset.icon===s)return n;n.dataset.icon=s;const r=Do(e,16);return n.innerHTML=i?`<span>${t}</span>${r}`:`${r}<span>${t}</span>`,n};function jw(n,e,t){let i=e,s=t.locale,r={...Ml,...t.strings},o=null,a=!1,l=!1;const c=new Set;let h=null;const d=M=>{if(!a)try{h??(h=new AudioContext);const C=h,I=C.currentTime,L=(B,Y,he,fe,be="sine")=>{const xe=C.createOscillator(),Ce=C.createGain();xe.type=be,xe.frequency.value=B,Ce.gain.setValueAtTime(0,I+Y),Ce.gain.linearRampToValueAtTime(fe,I+Y+.015),Ce.gain.exponentialRampToValueAtTime(1e-4,I+Y+he),xe.connect(Ce).connect(C.destination),xe.start(I+Y),xe.stop(I+Y+he+.05)};M==="right"?(L(659.25,0,.16,.09),L(880,.09,.22,.09)):M==="wrong"?L(196,0,.24,.08,"triangle"):(L(98,0,.14,.2),L(65.4,.02,.22,.16))}catch{}},f=(M,C)=>{const I=re("span","tg-seal",String(M));return I.style.setProperty("--tilt",`${M*47%9-4}deg`),C&&(I.style.setProperty("--seal",C),I.style.color=po(C)),I},m=M=>{const C=q(M);return C.length>0&&C.every(I=>y.given.has(I.id))},g=6e3;let v=null;const p=()=>{v&&clearTimeout(v),v=null},u=()=>{if(p(),!o||c.has(o)||!H.hidden)return;const M=o;v=setTimeout(()=>{c.add(M),p(),gi()},g),gi()},y={given:new Map,correct:new Set,visited:new Set},E=new Audio;E.preload="none";const x=re("div","tg");n.appendChild(x);const P=re("div","tg-top"),R=re("img","tg-logo");R.alt="",R.hidden=!0;const N=re("div","tg-menu"),F=M=>M.toLowerCase().startsWith("zh")?"中文":M.split("-")[0].toUpperCase(),b=re("div","tg-lang-seg"),T=re("span","tg-lang-thumb");b.append(T);const D=new Map,K=[];for(const M of t.locales??[]){const C=fn("tg-lang-opt",F(M),()=>t.onLocale?.(M));D.set(M,C),K.push(M),b.append(C)}b.style.setProperty("--lang-count",String(Math.max(1,K.length))),b.hidden=(t.locales??[]).length<2;const V=fn("tg-menu-btn scenes","",()=>Ui(!!z.hidden)),W=fn("tg-menu-btn sound","",()=>{a=!a,a&&ze(),dt(),pr()}),ie=()=>{ki=0,y.given.clear(),y.correct.clear(),y.visited.clear(),l=!1,ze(),we&&te(),t.onRestart(),w()},oe=fn("tg-menu-btn restart","",()=>{const M=re("div","tg-quiz tg-confirm");M.append(Tf("tg-confirm-x","cross",r.restartNo,te),re("p","tg-quiz-prompt",r.restartAsk),re("p","tg-confirm-warn",r.restartWarn));const C=re("div","tg-confirm-actions");C.append(fn("tg-confirm-yes",r.restartYes,ie),fn("tg-quiz-go",r.restartNo,te)),M.append(C),k.replaceChildren(M),k.hidden=!1,we=te});N.append(W,oe,V,b);const z=re("div","tg-panel");z.hidden=!0;const me=re("div","tg-card"),Ee=re("h1","tg-card-title"),Ue=re("span","tg-card-stamp"),Ve=re("span","tg-card-name");Ee.append(Ue,Ve);const ht=re("p","tg-card-text"),Je=re("div","tg-card-voice"),X=re("img","tg-avatar");X.alt="";const le=re("button","tg-play"),de=M=>{me.classList.toggle("shut",M),pn(Be,M?"expand":"collapse",14),M&&ze()},Be=Tf("tg-card-toggle","collapse","Hide",()=>{de(!me.classList.contains("shut"))});me.addEventListener("click",M=>{const C=M.target;C.closest(".tg-card-toggle")||(me.classList.contains("shut")?de(!1):C.closest(".tg-card-title")&&de(!0))});const Te=re("div","tg-voice-track"),He=re("span","tg-voice-fill");Te.append(He),Je.append(X,Te,le);const gt=()=>{const M=E.duration>0?E.currentTime/E.duration:0,C=Math.max(0,Math.min(1,M))*100;He.style.width=`${C}%`,Te.setAttribute("aria-valuenow",String(Math.round(C)))};E.addEventListener("timeupdate",gt),E.addEventListener("loadedmetadata",gt),Te.setAttribute("role","slider"),Te.tabIndex=0,Te.setAttribute("aria-valuemin","0"),Te.setAttribute("aria-valuemax","100");const J=M=>{if(!(E.duration>0))return;const C=Te.getBoundingClientRect();if(!C.width)return;const I=Math.max(0,Math.min(1,(M-C.left)/C.width));E.currentTime=I*E.duration,gt()};Te.addEventListener("pointerdown",M=>{if(E.duration>0){M.preventDefault(),J(M.clientX),Te.classList.add("scrubbing");try{Te.setPointerCapture(M.pointerId)}catch{}}}),Te.addEventListener("pointermove",M=>{Te.hasPointerCapture(M.pointerId)&&J(M.clientX)});const A=M=>{Te.hasPointerCapture(M.pointerId)&&(Te.releasePointerCapture(M.pointerId),Te.classList.remove("scrubbing"))};Te.addEventListener("pointerup",A),Te.addEventListener("pointercancel",A),Te.addEventListener("keydown",M=>{if(!(E.duration>0))return;const C=M.key==="ArrowRight"?5:M.key==="ArrowLeft"?-5:0;C&&(M.preventDefault(),E.currentTime=Math.max(0,Math.min(E.duration,E.currentTime+C)),gt())}),me.append(Ee,ht,Je,Be);const Ae=re("div","tg-bar"),ve=re("div","tg-track"),G=re("div","tg-dots"),Z=re("div","tg-tip");Z.hidden=!0;const Ie=re("span","tg-tip-lock"),ne=re("span","tg-tip-name"),De=re("span","tg-tip-marks");Z.append(Ie,ne,De),ve.append(G,Z);const Ge=re("span","tg-count");Ae.append(ve,Ge);const Xe=re("div","tg-nav"),S=re("button","tg-nav-btn back"),_=re("button","tg-nav-btn next");Xe.append(S,_);const k=re("div","tg-modal");k.hidden=!0;const H=re("div","tg-welcome");H.hidden=!0,P.append(R,N);const Q=re("div","tg-scene-title"),$=M=>{M&&(_s(Q,M),Q.classList.remove("on"),Q.offsetWidth,Q.classList.add("on"))};x.append(P,z,me,Xe,Ae,k,H,Q);const se=()=>i.scenes.filter(M=>M.source.kind!=="splat"),ae=M=>i.scenes.find(C=>C.id===M)??null,ue=M=>se().findIndex(C=>C.id===M),pe=()=>i.quiz&&i.quiz.enabled!==!1&&i.quiz.questions.length?i.quiz:null,q=M=>(pe()?.questions??[]).filter(C=>C.sceneId===M&&!Xd(C)),_e=M=>{const C=q(M);return C.length===0||C.every(I=>y.given.has(I.id))},Fe=()=>pe()?.gate==="scene",Pe=M=>{const C=i.scenes.find(L=>L.id===M),I=q(M).find(L=>L.sdgs?.length)?.sdgs??C?.guide?.sdgs??[];return qd(I)},ye=M=>{const C=M?.guide?.audio?.[s]??M?.guide?.audio?.[i.locales.default];return C?Ke(C)??null:null},ze=()=>{E.pause(),E.currentTime=0,He.style.width="0%",le.classList.remove("playing"),Sn(le,"play",r.play)},U=(M=!1)=>{if(M&&me.classList.contains("shut"))return;const C=ye(ae(o));!C||a||(E.src!==new URL(C,location.href).href&&(E.src=C),E.play().then(()=>{le.classList.add("playing"),Sn(le,"pause",r.pause)},()=>ze()))},ce=()=>{E.pause(),le.classList.remove("playing"),Sn(le,"play",r.play)},ge=()=>{if(!a){if(!E.paused){ce();return}U()}};E.addEventListener("ended",ze),le.addEventListener("click",ge);let we=null;const te=()=>{k.hidden=!0,k.replaceChildren(),we=null,w()},ee=M=>{const C=se().findIndex(B=>B.id===M);if(C<0||(d("stamp"),ko(),matchMedia("(prefers-reduced-motion: reduce)").matches))return;const I=re("div","tg-stamp-pop"),L=f(C+1,Pe(M));L.classList.add("big"),I.append(L),x.append(I),setTimeout(()=>{const B=Fi.get(M),Y=L.getBoundingClientRect(),he=B?.getBoundingClientRect();if(!he||!Y.width){I.remove();return}L.animate([{transform:"rotate(var(--tilt)) scale(1)",opacity:1},{transform:`translate(${he.left+he.width/2-(Y.left+Y.width/2)}px, ${he.top+he.height/2-(Y.top+Y.height/2)}px) rotate(var(--tilt)) scale(${he.width/Y.width})`,opacity:.85}],{duration:560,easing:"cubic-bezier(0.22, 1, 0.36, 1)",fill:"forwards"}).finished.catch(()=>{}).finally(()=>I.remove())},850)},ke=(M,C)=>{const I=M[C];if(!I){const Oe=o;te();const nt=!!Oe&&m(Oe);nt&&ee(Oe);const Qe=Oe?ue(Oe):-1,lt=Qe>=0?se()[Qe+1]:void 0;if(nt&&lt){const Mt=matchMedia("(prefers-reduced-motion: reduce)").matches;setTimeout(()=>{o===Oe&&t.onGoto(lt.id)},Mt?500:1900)}return}const L=ae(I.sceneId??o),B=C+1,Y=(I.sdgs?.length?I.sdgs:L?.guide?.sdgs)??[],he=qd(Y),fe=re("div","tg-quiz");fe.style.setProperty("--sdg",he),fe.style.setProperty("--sdg-ink",po(he));const be=re("div","tg-quiz-bands");for(const Oe of Y){const nt=Ja(Oe);if(!nt)continue;const Qe=re("div","tg-band");Qe.style.background=nt.color,Qe.style.color=po(nt.color),Qe.append(re("span","tg-band-name",Yd(nt,s)),re("span","tg-band-n",`SDG ${nt.n}`)),be.append(Qe)}const xe=re("div","tg-quiz-head"),Ce=re("div","tg-quiz-pips"),We=new Map;Ce.replaceChildren(...M.map((Oe,nt)=>{const Qe=re("span","tg-quiz-pip"),lt=re("span","tg-quiz-pip-face front","?"),Mt=re("span","tg-quiz-pip-face back");Qe.append(lt,Mt);const Oi=y.given.has(Oe.id);if(Oi){const vn=y.correct.has(Oe.id);Mt.classList.add(vn?"right":"wrong"),pn(Mt,vn?"check":"cross",12),Qe.classList.add("flipped","settled")}return Qe.classList.toggle("here",nt===C&&!Oi),Qe.title=`${nt+1} / ${M.length}`,We.set(Oe.id,{pip:Qe,back:Mt}),Qe}));const je=Oe=>{const nt=We.get(I.id);nt&&(nt.back.classList.add(Oe?"right":"wrong"),pn(nt.back,Oe?"check":"cross",12),nt.pip.classList.remove("here"),nt.pip.classList.add("flipped"))},ft=re("p","tg-quiz-prompt",I.prompt),tt=re("div","tg-answers"),ot=i.quiz?.shuffleAnswers?_x(I.answers,B):I.answers;let Le=[],at=!1;const st=()=>{if(at||!Le.length)return;at=!0,y.given.set(I.id,Le);const Oe=$d(I,Le);Oe&&y.correct.add(I.id),d(Oe?"right":"wrong");const nt=(i.quiz?.feedback??"immediate")==="immediate";for(const lt of tt.querySelectorAll("input"))lt.disabled=!0,lt.classList.add(nt?Oe?"is-right":"is-wrong":"on");for(const lt of tt.querySelectorAll("button")){const Mt=lt;if(Mt.disabled=!0,!nt)continue;I.answers.find(vn=>vn.id===Mt.dataset.id)?.correct?Mt.classList.add("is-right"):Le.includes(Mt.dataset.id)&&Mt.classList.add("is-wrong")}je(Oe);const Qe=ue(o)>=0&&ue(o)<se().length-1;_t.textContent=C+1===M.length?Qe?r.nextScene:r.finish:r.continue,_t.disabled=!1,w()},_t=fn("tg-quiz-go",r.check,()=>{at?ke(M,C+1):st()});if(_t.disabled=!0,I.kind==="text"){const Oe=re("input","tg-answer-text");Oe.type="text",Oe.autocomplete="off",Oe.placeholder=r.typeAnswer,Oe.addEventListener("input",()=>{at||(Le=Oe.value.trim()?[Oe.value.trim()]:[],_t.disabled=!Le.length)}),Oe.addEventListener("keydown",nt=>{nt.key==="Enter"&&!_t.disabled&&_t.click()}),tt.append(Oe)}const mn="ABCDEFGH";(I.kind==="text"?[]:ot).forEach((Oe,nt)=>{const Qe=fn("tg-answer",Oe.text,()=>{if(!at){I.kind==="multiple"?Le=Le.includes(Oe.id)?Le.filter(lt=>lt!==Oe.id):[...Le,Oe.id]:Le=[Oe.id];for(const lt of tt.querySelectorAll("button"))lt.classList.toggle("on",Le.includes(lt.dataset.id));_t.disabled=!Le.length}});Qe.dataset.id=Oe.id,Qe.prepend(re("span","tg-answer-key",mn[nt]??"")),tt.append(Qe)}),tt.childElementCount||(_t.textContent=r.close,_t.disabled=!1,_t.onclick=te),fe.append(be,xe,ft,tt,_t);const gn=re("div","tg-quiz-stack");gn.append(fe),M.length>1&&gn.append(Ce),k.replaceChildren(gn),k.hidden=!1,we=te},qe=()=>{const M=q(o).filter(C=>!y.given.has(C.id));M.length&&(ze(),ke(M,0))},Et=()=>{const M=pe();if(!M)return;const C=vx(M,[...y.given].map(([je,ft])=>({questionId:je,given:ft}))),I=se(),L=re("div","tg-quiz tg-score"),B=re("div","tg-score-crown"),Y=re("span","tg-seal tg-score-seal",r.doneSeal);Y.style.setProperty("--tilt","-5deg"),B.append(re("p","tg-score-congrats",r.congrats),Y),L.append(B);const he=re("div","tg-score-head"),fe=re("div","tg-score-dial");fe.style.setProperty("--at",`${C.percent}%`),fe.append(re("span","tg-score-big",`${C.percent}%`));const be=re("div","tg-score-sum");be.append(re("p","tg-score-line",`${r.score}: ${C.correct} / ${C.questions}`),re("p","tg-score-sub",`${y.visited.size} / ${I.length} ${r.placesSeen}`)),he.append(fe,be),L.append(he),C.passed===!0&&M.passMessage&&L.append(re("p","tg-score-msg",M.passMessage)),C.passed===!1&&M.failMessage&&L.append(re("p","tg-score-msg",M.failMessage));const xe=re("div","tg-review");for(const je of I){const ft=q(je.id);if(!ft.length)continue;const tt=re("div","tg-review-group");tt.append(re("h2","tg-review-room",je.name??""));for(const ot of ft){const Le=y.given.get(ot.id),at=y.correct.has(ot.id),st=re("div",`tg-review-q${Le?at?" right":" wrong":" unseen"}`),_t=re("span","tg-mark");pn(_t,Le?at?"check":"cross":"",12),Le&&_t.classList.add(at?"right":"wrong");const mn=fn("tg-review-open","",()=>{const Qe=st.classList.toggle("open");pn(Ft,Qe?"collapse":"expand",14)});mn.append(_t,re("span","tg-review-prompt",ot.prompt));const Ft=re("span","tg-review-chev");pn(Ft,"expand",14),mn.append(Ft);const gn=re("div","tg-review-detail"),Oe=Qe=>ot.answers.filter(lt=>Qe.includes(lt.id)).map(lt=>lt.text).join(", "),nt=ot.answers.filter(Qe=>Qe.correct).map(Qe=>Qe.text).join(", ");gn.append(re("p","tg-review-you",`${r.youChose}: ${Le?Oe(Le):r.notAnswered}`),...at?[]:[re("p","tg-review-right",`${r.theAnswer}: ${nt}`)]),st.append(mn,gn),tt.append(st)}xe.append(tt)}L.append(xe);const Ce=re("div","tg-score-actions"),We=fn("tg-quiz-go ghost",r.restart,()=>{y.given.clear(),y.correct.clear(),y.visited.clear(),l=!1,ze(),te(),t.onRestart(),w()});Ce.append(We,fn("tg-quiz-go",r.close,te)),L.append(Ce),k.replaceChildren(L),k.hidden=!1,we=te},dt=()=>{const M=i.logo?Ke(i.logo):null;R.hidden=!M,M&&R.getAttribute("src")!==M&&R.setAttribute("src",M),Sn(W,a?"mute":"sound",r.menuSound),W.classList.toggle("off",a);const C=a?r.unmute:r.mute,I=K.indexOf(s);I>=0&&b.style.setProperty("--lang-at",String(I)),W.setAttribute("aria-label",C),Sn(V,"scenes",r.menuScenes),V.setAttribute("aria-label",r.scenes),V.classList.toggle("on",!z.hidden),Sn(oe,"restart",r.menuRestart),oe.setAttribute("aria-label",r.restart);for(const[L,B]of D)B.classList.toggle("on",L===s)},Wt=M=>se().slice(0,M).every(C=>_e(C.id)),Qt=new Map,Uo=()=>{Qt.clear(),z.replaceChildren(...se().map((M,C)=>{const I=document.createElement("button");I.type="button",I.className="tg-row";const L=re("span","tg-row-thumb");if(M.thumbnail){const be=re("img");be.alt="",be.loading="lazy",be.src=Ke(M.thumbnail)??"",L.append(be)}const B=re("span","tg-row-lock");L.append(B);const Y=re("span","tg-row-name",M.name),he=re("span","tg-row-marks"),fe=q(M.id).map(()=>{const be=re("span","tg-mark");return he.append(be),be});return I.append(L,Y,he),I.addEventListener("click",()=>{I.classList.contains("locked")||(Ui(!1),t.onGoto(M.id))}),Qt.set(M.id,{row:I,dot:B,name:Y,marks:fe}),I}))},kn=()=>{const M=new Set;se().forEach((C,I)=>{const L=Qt.get(C.id);if(!L)return;_s(L.name,C.name);const B=Fe()&&!Wt(I);B&&M.add(C.id);const Y=C.id===o;L.row.classList.toggle("here",Y),L.row.classList.toggle("locked",B),L.row.disabled=B,L.row.title=B?r.locked:C.name,pn(L.dot,B?"lock":"",14),L.dot.hidden=!B;const he=q(C.id);L.marks.forEach((fe,be)=>{const xe=he[be];if(!xe)return;const Ce=y.given.has(xe.id),We=y.correct.has(xe.id);fe.className=`tg-mark${Ce?We?" right":" wrong":""}`,Ce?pn(fe,We?"check":"cross",11):(delete fe.dataset.icon,fe.textContent="?"),fe.title=Ce?We?r.correct:r.wrong:r.answer})}),t.onProgress?.(y.visited,M)},Ui=M=>{z.hidden=!M,M&&kn(),V.classList.toggle("on",M)},fr=M=>{if(z.hidden)return;const C=M.target;C&&(z.contains(C)||V.contains(C))||Ui(!1)};document.addEventListener("pointerdown",fr,!0);const pr=()=>{const M=ae(o),C=M?.guide?.text??M?.subtitle??"";if(me.hidden=!C,!C)return;if(_s(Ve,M?.name??""),o){const B=ue(o);_s(Ue,B>=0?String(B+1):""),Ue.style.setProperty("--seal",Pe(o)),Ue.hidden=B<0}Ee.hidden=!M?.name,Yw(ht,C,s);const I=M?.guide?.avatar?Ke(M.guide.avatar):null;X.hidden=!I,I&&(X.src=I);const L=ye(M);le.hidden=!L,Je.hidden=!L,Te.hidden=!L,le.toggleAttribute("disabled",a),le.title=a?r.unmute:"",E.paused?Sn(le,"play",r.play):Sn(le,"pause",r.pause)},gi=()=>{const M=ue(o),C=se(),I=q(o).filter(B=>!y.given.has(B.id)).length;S.hidden=M<=0,Sn(S,"back",r.back),S.onclick=()=>C[M-1]&&t.onGoto(C[M-1].id);const L=M===C.length-1;if(Fe()&&I>0){const B=!c.has(o??""),Y=`tg-nav-btn next ${B?v?"waiting running":"waiting":"asking"}`;if(_.className!==Y&&(_.className=Y),_.style.setProperty("--dwell",`${g}ms`),_.disabled=B,B){if(_.dataset.icon!=="dwell"){_.dataset.icon="dwell";const he=re("span","tg-dwell-dots");he.append(re("i"),re("i"),re("i")),_.replaceChildren(re("span","",r.lookAround.replace(/…$/,"")),he)}}else Sn(_,"next",`${r.answerVerb} ${I} ${I===1?r.question:r.questions}`,!0);_.onclick=qe,_.hidden=!1;return}if(_.disabled=!1,_.style.removeProperty("--dwell"),_.className="tg-nav-btn next",L){_.hidden=!pe(),_.textContent=r.score,_.onclick=Et;return}_.hidden=!1,_.className=`tg-nav-btn next${l?"":" attract"}`,Sn(_,"next",r.next,!0),_.onclick=()=>{l=!0,C[M+1]&&t.onGoto(C[M+1].id)}},Fi=new Map,ys=(M,C,I)=>{const L=Fe()&&!Wt(C);pn(Ie,L?"lock":"",14),Ie.hidden=!L,_s(ne,M.name);const B=q(M.id);De.replaceChildren(...B.map(xe=>{const Ce=y.given.has(xe.id),We=y.correct.has(xe.id),je=re("span",`tg-mark${Ce?We?" right":" wrong":""}`);return Ce?pn(je,We?"check":"cross",11):je.textContent="?",je})),Z.hidden=!1;const Y=G.offsetLeft+I.offsetLeft-G.scrollLeft+I.offsetWidth/2,he=Z.offsetWidth/2,fe=ve.clientWidth,be=Math.max(he,Math.min(Y,fe-he));Z.style.left=`${be}px`,Z.style.setProperty("--caret",`${Y-be+he}px`)},xs=[],Fo=()=>{Fi.clear(),xs.length=0,G.replaceChildren(...se().flatMap((M,C)=>{const I=re("span","tg-slot");if(I.addEventListener("click",B=>{B.stopPropagation(),!(Fe()&&!Wt(C)||M.id===o)&&t.onGoto(M.id)}),I.addEventListener("pointerenter",B=>{B.pointerType!=="touch"&&ys(M,C,I)}),Fi.set(M.id,I),!C)return[I];const L=re("span","tg-seg");return xs.push(L),[L,I]}))};ve.addEventListener("pointerleave",()=>{Z.hidden=!0});let ki=0;const ko=()=>{const M=se();if(Ae.hidden=M.length<2,Ae.hidden)return;const C=ue(o);C>ki&&(ki=C);const I=C>=0?`${C+1}/${M.length}`:"";Ge.textContent!==I&&_s(Ge,I),M.forEach((L,B)=>{const Y=Fi.get(L.id);if(!Y)return;const he=L.id===o,fe=m(L.id);he&&!Y.classList.contains("here")&&(Y.classList.add("landed"),Y.addEventListener("animationend",()=>Y.classList.remove("landed"),{once:!0}),G.scrollWidth>G.clientWidth&&G.scrollTo({left:Y.offsetLeft-(G.clientWidth-Y.offsetWidth)/2,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})),Y.classList.toggle("here",he),Y.classList.toggle("past",B<=ki&&!he),Y.classList.toggle("locked",Fe()&&!Wt(B));const be=Fe()&&!Wt(B),xe=fe?"seal":be?"lock":`n${B+1}`;Y.dataset.face!==xe&&(Y.dataset.face=xe,delete Y.dataset.icon,fe?Y.replaceChildren(f(B+1,Pe(L.id))):xe==="lock"?pn(Y,"lock",11):Y.textContent=String(B+1))}),xs.forEach((L,B)=>L.classList.toggle("filled",ki>B))},bl=()=>{if(H.hidden=!0,!(o&&se().some(C=>C.id===o))){N.append(b);return}U(!0),$(i.scenes.find(C=>C.id===o)?.name),N.append(b),u()},Tl=()=>{if(H.hidden)return;const M=se().length,C=[["look",r.howLook,r.howLookMore],["play",r.howListen,r.howListenMore],["check",r.howQuiz,r.howQuizMore.replace("{scenes}",String(M))]],I=re("div","tg-welcome-box"),L=re("div","tg-welcome-head"),B=i.logo?Ke(i.logo):null;if(B){const xe=re("img","tg-welcome-crest");xe.src=B,xe.alt="",L.append(xe)}if((t.locales??[]).length>1){const xe=re("div","tg-welcome-langs");xe.append(b),L.append(xe)}I.append(L);const Y=re("div","tg-welcome-intro");Y.append(re("h2","tg-welcome-title",i.title||r.welcomeTitle));const he=i.description||r.welcomeBlurb.replace("{scenes}",String(M));he&&Y.append(re("p","tg-welcome-blurb",he)),I.append(Y);const fe=re("div","tg-welcome-how");fe.append(...C.map(([xe,Ce,We])=>{const je=re("div","tg-welcome-row"),ft=re("span","tg-welcome-icon");pn(ft,xe,18);const tt=re("div","tg-welcome-body");return tt.append(re("strong","",Ce),re("span","",We)),je.append(ft,tt),je})),I.append(fe);const be=re("div","tg-welcome-actions");be.append(fn("tg-welcome-go",r.welcomeGo,bl)),I.append(be),H.replaceChildren(I)};let Oo="";const Al=()=>{const M=se().map(C=>`${C.id}:${q(C.id).length}`).join("|");M!==Oo&&(Oo=M,Uo(),Fo())},w=()=>{Al(),Tl(),dt(),pr(),gi(),ko(),kn()};return w(),{setDoc(M,C,I){i=M,s=C,r={...Ml,...I},ze(),w()},setScene(M){const C=M===o;o=M;const I=se().some(B=>B.id===M),L=x.classList.contains("intro");if(x.classList.toggle("intro",!I),L&&I&&x.classList.add("arrive"),!I){ze(),p(),z.hidden=!0,we&&te(),w();return}if(M&&y.visited.add(M),C){w();return}if(ze(),z.hidden=!0,we&&te(),w(),u(),H.hidden){const B=M;window.setTimeout(()=>{o===B&&E.paused&&U(!0)},1100),$(i.scenes.find(Y=>Y.id===M)?.name)}},canLeave(M){return Fe()?_e(M):!0},canEnter(M){if(!Fe())return!0;const C=se().findIndex(I=>I.id===M);return C<0||Wt(C)},destroy(){p(),ze(),document.removeEventListener("pointerdown",fr,!0),x.remove()}}}function Zw(n,e,t={}){return{supported:()=>!1,isPresenting:()=>!1,enter:async()=>{},exit:async()=>{},destroy:()=>{}}}const No="http://www.w3.org/2000/svg";function Kw(n,e,t={}){let i=e,s=null,r=null,o=0,a=!1,l=null,c=new Set,h=new Set,d=null,f=0;const m=document.createElement("button");m.type="button",m.className="tp-minimap-toggle",m.setAttribute("aria-label","Floor plan"),m.innerHTML='<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path d="M1.5 4.2L6 2.2l4 2 4.5-2v9.6l-4.5 2-4-2-4.5 2z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M6 2.2v9.6M10 4.2v9.6" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>',n.appendChild(m);const g=document.createElement("div");g.className="tp-minimap",g.hidden=!0;const v=document.createElement("div");v.className="tp-minimap-floors";const p=document.createElement("div");p.className="tp-minimap-frame";const u=document.createElement("div");u.className="tp-minimap-stage",p.appendChild(u);const y=document.createElement("img");y.className="tp-minimap-image",y.alt="",y.draggable=!1,u.appendChild(y);const E=document.createElement("div");E.className="tp-minimap-pins",u.appendChild(E);const x=document.createElementNS(No,"svg");x.setAttribute("class","tp-minimap-radar"),x.setAttribute("viewBox","0 0 1 1"),x.setAttribute("preserveAspectRatio","none");const P=document.createElementNS(No,"path");x.appendChild(P),u.appendChild(x);const R=document.createElement("button");R.type="button",R.className="tp-minimap-close",R.setAttribute("aria-label","Close the floor plan"),R.innerHTML='<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>',g.append(R,v,p),n.appendChild(g);let N=1,F=0,b=0;const T=G=>i.graph?.floors.find(Z=>Z.id===G),D=()=>{u.style.transform=`translate(${F}px, ${b}px) scale(${N})`;const G=Ud(i.graph,T(r));E.style.setProperty("--pin-zoom",Fd(G)?"1":String(1/N))},K=()=>{N=Ci(T(r)).zoom?.initial??1,F=0,b=0,D()};let V=null;const W=G=>{Ci(T(r)).movement==="draggable"&&(G.target.closest(".tp-minimap-pin")||(V={x:G.clientX,y:G.clientY,panX:F,panY:b},p.setPointerCapture(G.pointerId),p.classList.add("dragging")))},ie=G=>{V&&(F=V.panX+(G.clientX-V.x),b=V.panY+(G.clientY-V.y),D())},j=G=>{V&&(V=null,p.releasePointerCapture(G.pointerId),p.classList.remove("dragging"))},oe=G=>{const Z=Ci(T(r)).zoom;if(!Z)return;G.preventDefault();const Ie=Math.min(Z.max,Math.max(Z.min,N*(G.deltaY<0?1.12:1/1.12)));Ie!==N&&(N=Ie,D())};p.addEventListener("pointerdown",W),p.addEventListener("pointermove",ie),p.addEventListener("pointerup",j),p.addEventListener("pointercancel",j),p.addEventListener("wheel",oe,{passive:!1});const z=G=>{a=G,g.hidden=!G,m.classList.toggle("on",G),G&&Ve()};m.addEventListener("click",()=>z(!a)),R.addEventListener("click",()=>z(!1));const me=()=>{const G=(i.graph?.floors??[]).filter(Z=>Ci(Z).visible);if(G.length)return G.find(Z=>Z.nodes.some(Ie=>Ie.sceneId===s))??G[0]},Ee=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Ue=G=>{if(cancelAnimationFrame(f),d==null||Ee()){d=G,a&&Ve();return}const Z=d,Ie=performance.now(),ne=De=>{const Ge=Math.min(1,(De-Ie)/180);d=Z+(G-Z)*(1-(1-Ge)**3),a&&Ve(),Ge<1&&(f=requestAnimationFrame(ne))};f=requestAnimationFrame(ne)},Ve=()=>{const Z=T(r)?.nodes.find(Ge=>Ge.sceneId===s),Ie=i.scenes.find(Ge=>Ge.id===s),ne=Za(i.graph),De=ne.enabled?Jy(Z,Ie,o):null;if(De==null||!Z){x.style.display="none";return}x.style.display="",x.setAttribute("style",""),x.style.left=`${(Z.x-ne.radius)*100}%`,x.style.top=`${Z.y*100}%`,x.style.width=`${ne.radius*200}%`,x.style.marginTop=`${-ne.radius*100}%`,x.style.transform=`rotate(${De}rad)`,P.setAttribute("d",Zy(d??Ka(ne.angle,l))),P.setAttribute("fill",ne.fill),P.setAttribute("fill-opacity",String(ne.fillOpacity)),P.setAttribute("stroke",ne.stroke),P.setAttribute("stroke-width","0.006"),P.setAttribute("stroke-opacity","0.9")},ht=[];let Je=[];const X=new WeakMap;let le=null,de=[],Be=null;const Te=(G,Z)=>!!G&&G.length===Z.length&&Z.every((Ie,ne)=>G[ne]===Ie),He=()=>{const G=(i.graph?.floors??[]).filter(Z=>Ci(Z).visible);v.hidden=G.length<2,Te(Be,G)||(Be=G,de=G.map(Z=>{const Ie=document.createElement("button");return Ie.type="button",Ie.textContent=Z.name,Ie.addEventListener("click",()=>{r=Z.id,K(),A()}),{id:Z.id,el:Ie}}),v.replaceChildren(...de.map(Z=>Z.el)));for(const Z of de)Z.el.classList.toggle("on",Z.id===r)},gt=()=>y.clientWidth||p.clientWidth||320,J=()=>{const G=T(r),Z=G?.nodes??ht,Ie=Ud(i.graph,G),ne=gt(),De=new Map;if(!le||le.nodes!==Z||le.scenes!==i.scenes){le={nodes:Z,scenes:i.scenes};const Ge=new Map(i.scenes.map(Xe=>[Xe.id,Xe.name]));Je=Z.map(Xe=>{const S=document.createElement("button");S.type="button",S.className="tp-minimap-pin",S.style.left=`${Xe.x*100}%`,S.style.top=`${Xe.y*100}%`;const _=Ge.get(Xe.sceneId)??Xe.sceneId;S.setAttribute("aria-label",_);const k=document.createElementNS(No,"svg");k.setAttribute("class","tp-minimap-shape"),k.setAttribute("viewBox","0 0 1 1"),k.setAttribute("aria-hidden","true");const H=document.createElementNS(No,"path");H.setAttribute("vector-effect","non-scaling-stroke"),k.appendChild(H),S.appendChild(k);const Q=document.createElement("span");return Q.className="tp-minimap-label",Q.textContent=_,S.appendChild(Q),X.set(S,H),S.addEventListener("click",$=>{$.stopPropagation(),Xe.sceneId!==s&&t.onGoto?.(Xe.sceneId)}),{sceneId:Xe.sceneId,el:S}}),E.replaceChildren(...Je.map(Xe=>Xe.el))}for(const Ge of Je){const Xe=Ge.sceneId===s,S=Xe?"here":h.has(Ge.sceneId)?"locked":c.has(Ge.sceneId)?"visited":"default";Ge.el.classList.toggle("here",Xe),Ge.el.classList.toggle("locked",S==="locked"),Ge.el.disabled=S==="locked",Ge.el.classList.toggle("visited",S==="visited"),Ge.el.dataset.pinLabel=cx(Ie)?"pill":lx(Ie,!1)?"always":Ie.label??"hover",Ge.el.dataset.pinTail=Ri(Ie).tail?"1":"0";const _=De.get(S)??De.set(S,ax(Ie,S,ne)).get(S),k=X.get(Ge.el);k&&k.getAttribute("d")!==_&&k.setAttribute("d",_);for(const[H,Q]of Object.entries(ox(Ie,S,ne)))Ge.el.style.getPropertyValue(H)!==Q&&Ge.el.style.setProperty(H,Q)}},A=()=>{const G=T(r),Z=G?.image?Ke(G.image):null;Z&&y.getAttribute("src")!==Z&&y.setAttribute("src",Z),y.hidden=!Z;const Ie=Ci(G);p.classList.toggle("fill",Ie.scaleMode==="fill"),p.classList.toggle("draggable",Ie.movement==="draggable"),He(),J(),Ve()},Ae=()=>{const G=me();G&&G.id!==r?(r=G.id,K()):G||(r=null)};y.addEventListener("load",()=>J());const ve=typeof ResizeObserver>"u"?null:new ResizeObserver(()=>J());return ve?.observe(p),Ae(),A(),{setDoc(G){i=G,D(),d=l==null?null:Ka(Za(G.graph).angle,l),Ae(),A()},setScene(G){s=G,Ae(),A()},setFov(G){G===l||!Number.isFinite(G)||(l=G,Ue(Ka(Za(i.graph).angle,G)))},setYaw(G){G!==o&&(o=G,a&&Ve())},setProgress(G,Z){c=G,h=Z,a&&J()},setOpen:z,isOpen:()=>a,destroy(){cancelAnimationFrame(f),ve?.disconnect(),p.removeEventListener("pointerdown",W),p.removeEventListener("pointermove",ie),p.removeEventListener("pointerup",j),p.removeEventListener("pointercancel",j),p.removeEventListener("wheel",oe),g.remove(),m.remove()}}}function Jw(n){return!!n?.graph?.floors.some(e=>Ci(e).visible&&e.image)}const Qw="1";function eM(){const n=document.getElementById("tour-doc");if(!n?.textContent)throw new Error('No tour document on the page: expected <script type="application/json" id="tour-doc">.');const{doc:e,warnings:t}=Yy(JSON.parse(n.textContent));for(const i of t)console.warn(`[tour] ${i}`);return e}function Af(n,e){if(!e)return null;if(n.includes(e))return e;const t=e.split("-")[0].toLowerCase();return n.find(i=>i.toLowerCase()===t)??n.find(i=>i.split("-")[0].toLowerCase()===t)??null}function Cf(n={}){const e=n.container??document.getElementById("tour");if(!e)throw new Error('No container: expected an element with id="tour".');const t=n.doc??eM();if(!t.scenes.length)throw new Error("This tour has no scenes.");const i=(()=>{try{return localStorage.getItem(`tour-lang:${t.id}`)}catch{return null}})(),s=t.locales.available,r=[new URLSearchParams(location.search).get("lang"),i,...navigator.languages??[]].find(J=>J&&Af(s,J))??t.locales.default;let o=Af(s,r)??t.locales.default,a=Hd(t,o);Fx(""),Ro(e,a),document.title=a.title||document.title;const l=Xw(e,a),c=mw(a);let h=null,d=null,f=null;const m=Vd(t),g=J=>{if(J!==o){o=J,a=Hd(t,o);try{localStorage.setItem(`tour-lang:${t.id}`,J)}catch{}document.documentElement.lang=J,document.title=a.title||document.title,E.setDoc(a),h?.setScenes(a.scenes),u?.setDoc(a),f?.setDoc(a,o,Sl(o)),E.sceneId&&f?.setScene(E.sceneId),p()}},v=s.length>1&&!m?document.createElement("div"):null,p=()=>{v&&(v.className="tp-langs",v.replaceChildren(...s.map(J=>{const A=document.createElement("button");return A.type="button",A.textContent=J.toUpperCase(),A.title=gx(J),A.className=J===o?"on":"",A.addEventListener("click",()=>g(J)),A})))};v&&(p(),e.appendChild(v)),document.documentElement.lang=o;const u=Jw(a)?Kw(e,a,{onGoto:J=>{f&&!f.canEnter(J)||j(J)}}):null;let y=null;const E=new Gw(e,{onSceneChanged:J=>{y||W(J)},onSphereClick:J=>{const A=a.runtime?.navigation;if(!A?.enabled||!E.sceneId)return;const Ae=Dx(a,E.sceneId,J,{toleranceDeg:A.toleranceDeg,canEnter:f?ve=>f.canEnter(ve):void 0});!Ae.sceneId||!Ae.exit||E.goToScene(Ae.sceneId,void 0,{kind:"zoom-blend",durationMs:620})},onViewChanged:J=>u?.setYaw(J.yaw),onFovChanged:J=>u?.setFov(J),onUnsupportedAction:J=>console.warn(`[tour] unsupported action: ${J.type}`)},{host:l.effects,...c.kind==="equirect-tiles"?{adapter:Oy}:{}}),x=J=>{const A=new Set,Ae=[];for(const ve of a.locales.available.length?a.locales.available:["en"]){const G=Sl(ve)[J];G&&!A.has(G)&&(A.add(G),Ae.push(G))}return Ae.join(" · ")},P=n.sceneId??new URLSearchParams(location.search).get("scene")??void 0,R=P&&a.scenes.some(J=>J.id===P)?P:void 0,N=lE(a),F=m&&!a.skin?.html,b=rE(e,E,{...F?{html:"",css:N.css}:N,scenes:a.scenes});h=b,l.setEmbed(b),yo(document,a.scenes),d=cu(document,E,{skip:h.layer});const T=()=>{if(!y)return;const J=y;y=null,J.layer.classList.add("leaving"),J.layer.style.transitionDelay="0s",window.setTimeout(()=>{J.layer.hidden=!0,Promise.resolve(J.handle?.destroy()).catch(()=>{}).finally(()=>J.layer.remove())},420)},D=async J=>{T();const A=J.source,Ae=document.createElement("div");Ae.className="tp-splat";const ve=document.createElement("div");ve.className="tp-splat-status",ve.textContent="0%",Ae.append(ve),e.append(Ae),y={layer:Ae,handle:null},W(J.id);const G=new URLSearchParams(location.search),Z=(se,ae)=>{const ue=G.get(se);if(!ue)return null;const pe=ue.split(",").map(Number);return pe.length===ae&&pe.every(Number.isFinite)?pe:null},Ie=Z("target",3),ne=Z("view",4),De=A.view??{yaw:0,pitch:-.6,distance:40},{mountSplat:Ge}=await Promise.resolve().then(()=>iM),S=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches&&A.srcMobile?A.srcMobile:A.src,_=await Ge(Ae,{src:Ke(S)??S,...A.up?{up:A.up}:{},...A.mode?{mode:A.mode}:{},...A.reveal?{reveal:A.reveal}:{},...A.flightFrom?{flightFrom:A.flightFrom}:{},idle:!1,...Ie?{target:Ie}:A.target?{target:A.target}:{},yaw:ne?ne[0]:De.yaw,pitch:ne?ne[1]:De.pitch,distance:ne?ne[2]:De.distance,...ne?{fov:ne[3]}:De.fov!=null?{fov:De.fov}:{},...A.limits?.distance?{distanceLimit:A.limits.distance}:{},...A.limits?.pitch?{pitchLimit:A.limits.pitch}:{},onProgress:se=>{Ve?.(se),se>=1?ve.textContent=x("preparing"):ve.textContent=`${Math.round(se*100)}%`},onReady:()=>{ve.remove(),ht?.()},onError:se=>{ve.textContent=se,ve.classList.add("failed")}});if(!y||y.layer!==Ae){_.destroy(),Ae.remove();return}y.handle=_;const k=document.createElement("p");k.className="tp-splat-hint",k.textContent="Drag to look around · 拖曳環顧四周",Ae.append(k),Ae.addEventListener("pointerdown",()=>k.classList.add("gone"),{once:!0});const H=To(J).filter(se=>se.geometry.kind==="point3d"&&se.form==="portal").map(se=>{const ae=se.geometry,ue=se.style,pe=_.addPortal({x:ae.x,y:ae.y,z:ae.z,radius:ue.portalRadius,height:ue.portalHeight,colour:ue.fill,label:ue.text||se.name||""});if(!pe)return null;const q=document.createElement("button");return q.type="button",q.className="tp-splat-portal",q.style.setProperty("--portal",ue.fill||"#ffd23f"),q.setAttribute("aria-label",ue.text||se.name||""),q.addEventListener("pointerenter",()=>pe.highlight(!0)),q.addEventListener("pointerleave",()=>pe.highlight(!1)),q.addEventListener("click",()=>{const _e=Ni(se,"goto");if(_e?.type!=="goto"||!_e.targetSceneId)return;const Fe=_e.targetSceneId;q.disabled=!0,Ae.classList.add("leaving"),Promise.resolve(_.dive?.(950)).catch(()=>{}).finally(()=>j(Fe))}),Ae.append(q),{el:q,solid:pe}}).filter(Boolean),Q=To(J).filter(se=>se.geometry.kind==="point3d"&&se.form!=="portal").map(se=>{const ae=document.createElement("div");ae.className="tp-splat-callout";const ue={x:26,y:-62},pe={x:88,y:-62},q=Math.max(Math.abs(pe.x),Math.abs(pe.y))+10,_e=Math.hypot(ue.x,ue.y)+Math.hypot(pe.x-ue.x,pe.y-ue.y),Fe="http://www.w3.org/2000/svg",Pe=document.createElementNS(Fe,"svg");Pe.setAttribute("class","tp-splat-leader"),Pe.setAttribute("width",String(q*2)),Pe.setAttribute("height",String(q*2)),Pe.style.marginLeft=`${-q}px`,Pe.style.marginTop=`${-q}px`;const ye=document.createElementNS(Fe,"polyline");ye.setAttribute("points",`${q},${q} ${q+ue.x},${q+ue.y} ${q+pe.x},${q+pe.y}`),ye.style.setProperty("--len",String(Math.ceil(_e))),Pe.append(ye);const ze=document.createElementNS(Fe,"line");ze.setAttribute("class","tp-splat-tick"),ze.setAttribute("x1",String(q+pe.x)),ze.setAttribute("x2",String(q+pe.x)),ze.setAttribute("y1",String(q+pe.y-13)),ze.setAttribute("y2",String(q+pe.y+13)),Pe.append(ze);const U=document.createElementNS(Fe,"circle");U.setAttribute("class","tp-splat-ring"),U.setAttribute("cx",String(q)),U.setAttribute("cy",String(q)),U.setAttribute("r","4.5"),Pe.append(U);const ce=document.createElementNS(Fe,"circle");ce.setAttribute("class","tp-splat-dot"),ce.setAttribute("cx",String(q)),ce.setAttribute("cy",String(q)),ce.setAttribute("r","4.5"),Pe.append(ce),ae.append(Pe);const ge=document.createElement("div");ge.className="tp-splat-card",ge.style.transform=`translate(${pe.x+12}px, calc(-50% + ${pe.y}px))`;const we=!!Ni(se,"goto"),te=document.createElement(we?"button":"span");return te.className=we?"tp-splat-hotspot":"tp-splat-hotspot sign",we&&(te.type="button"),te.innerHTML=`<span>${(se.name??"").replace(/[<>&]/g,"")}</span>${we?Do("next",16):""}`,ge.append(te),ae.append(ge),we&&te.addEventListener("click",()=>{const ee=Ni(se,"goto");if(ee?.type!=="goto"||!ee.targetSceneId)return;const ke=ee.targetSceneId;te.disabled=!0,Ae.classList.add("leaving"),Promise.resolve(_.dive?.(950)).catch(()=>{}).finally(()=>j(ke))}),Ae.append(ae),{el:ae,at:se.geometry}}),$=()=>{for(const{el:se,at:ae}of Q){const ue=_.at(ae.x,ae.y,ae.z);se.hidden=!ue,ue&&(se.style.transform=`translate(${ue.x}px, ${ue.y}px)`)}for(const{el:se,solid:ae}of H){const ue=ae.screen();if(se.hidden=!ue,!ue)continue;const pe=Math.max(44,Math.min(260,ue.r*1.7));se.style.transform=`translate(${ue.x}px, ${ue.y}px) translate(-50%, -50%)`,se.style.width=`${pe}px`,se.style.height=`${pe}px`,se.style.fontSize=`${Math.max(11,Math.min(22,pe*.13))}px`}};_.onFrame($),$()};let K=null;const V=J=>{K?.abort(),K=null;const A=a.scenes.find(ne=>ne.id===J);if(!A||A.source.kind!=="tiled"||navigator.connection?.saveData)return;const{dir:Ae,cols:ve,rows:G}=A.source,Z=A.source.format??"jpg",Ie=new AbortController;K=Ie,window.setTimeout(()=>{if(Ie.signal.aborted)return;const ne=E.getPosition()?.yaw??0,De=[];for(let S=0;S<ve;S++)for(let _=0;_<G;_++){const k=(S+.5)/ve*2*Math.PI-Math.PI;let H=Math.abs(k-(((ne+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI));H>Math.PI&&(H=2*Math.PI-H);const Q=(G-1)/2;H+=Math.abs(_-Q)/Math.max(1,Q)*.8,De.push({url:Ke(`${Ae}/tile_${S}_${_}.${Z}`)??"",d:H})}De.sort((S,_)=>S.d-_.d);let Ge=0;const Xe=async()=>{for(;Ge<De.length&&!Ie.signal.aborted;){const S=De[Ge++];try{await(await fetch(S.url,{signal:Ie.signal})).arrayBuffer()}catch{}}};for(let S=0;S<4;S++)Xe()},700)},W=J=>{l.clear(),h?.update(J),d?.update(J),u?.setScene(J),f?.setScene(J),V(J)},ie=J=>{const A=a.scenes.find(Ae=>Ae.id===J);return A&&A.source.kind==="splat"?A:null},j=J=>{const A=ie(J);if(A){D(A);return}const Ae=!!y;T(),E.goToScene(J),Ae&&E.sceneId===J&&W(J)};m&&(f=jw(e,a,{locale:o,onGoto:j,onProgress:(J,A)=>u?.setProgress(J,A),locales:s,strings:Sl(o),onLocale:J=>g(J),onRestart:()=>{(async()=>{try{await Ee?.exit?.()}catch{}location.reload()})()}}));const oe=R??a.scenes[0]?.id,z=a.scenes.find(J=>J.source.kind!=="splat")?.id,me=oe&&!ie(oe)?oe:z;let Ee=null,Ue=!1,Ve=null,ht=null;const Je=J=>{if(Ue)return;Ue=!0,J==="vr"?E.load(a,z??me):(E.load(a,me),oe&&ie(oe)&&D(ie(oe)));const A=E.psv;if(A&&a.runtime?.vr&&(Ee=Zw(e,A,{needsCjk:a.locales.available.some(Ae=>/^(zh|ja|ko)/i.test(Ae)),guideRoot:e.querySelector(".tg")})),J==="vr"){const Ae=ve=>{e.classList.contains("in-vr")||(e.querySelector(".tp-vr")?.click(),ve<10&&setTimeout(()=>Ae(ve+1),300))};Ae(0)}};let X=0,le=!1,de=null,Be=null;const Te=()=>{const J=oe?ie(oe):null;if(!J||navigator.connection?.saveData)return;const Ae=J.source,G=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches&&Ae.srcMobile||Ae.src;if(!G)return;const Z=Ke(G)??G,Ie=new AbortController;de=()=>Ie.abort(),(async()=>{try{const ne=await fetch(Z,{signal:Ie.signal});if(!ne.ok||!ne.body)return;const De=Number(ne.headers.get("content-length"))||0,Ge=ne.body.getReader();let Xe=0;for(;;){const{done:S,value:_}=await Ge.read();if(S)break;Xe+=_?.byteLength??0,De&&(X=Math.min(1,Xe/De),Be?.())}le=!0,X=1,Be?.()}catch{}})()},He=new URLSearchParams(location.search).get("start"),gt=Vd(a)||!!(oe&&ie(oe));if(He==="flat"||He==="vr")Je(He);else if(!gt)Je("flat");else{const J=document.createElement("div");J.className="tp-gate",Ro(J,a);const A=document.createElement("div");A.className="tp-gate-card",J.append(A);const Ae=a.logo?Ke(a.logo):null;if(Ae){const ne=document.createElement("img");ne.className="tp-gate-crest",ne.alt="",ne.src=Ae,A.append(ne)}const ve=document.createElement("h1");ve.className="tp-gate-title",ve.textContent=a.title||"",A.append(ve);const G=document.createElement("button");G.className="tp-gate-flat",G.textContent=x("startTour");const Z=document.createElement("button");Z.className="tp-gate-vr",Z.textContent=x("startVr"),Z.hidden=!0;const Ie=document.createElement("div");Ie.className="tp-gate-actions",Ie.append(G,Z),A.append(Ie),G.addEventListener("click",()=>{if(!Ue){if(oe&&ie(oe)){Be=null,le||de?.(),G.disabled=!0,Z.disabled=!0,G.classList.remove("preloading"),G.classList.add("loading"),Ve=ne=>{const De=Math.round(ne*100);G.textContent=ne>=1?x("preparing"):`${x("loading")} ${De}%`,G.style.setProperty("--gate-progress",`${De}%`)},ht=()=>{Ve=null,ht=null,J.remove()},Je("flat");return}J.remove(),Je("flat")}}),Z.addEventListener("click",()=>{Be=null,de?.(),J.remove(),Je("vr")}),e.append(J),Te(),Be=()=>{Ue||(G.classList.toggle("preloading",!le),G.style.setProperty("--gate-progress",`${Math.round(X*100)}%`))},a.runtime?.vr&&navigator.xr?.isSessionSupported?.("immersive-vr").then(De=>{Z.hidden=!De}).catch(()=>{})}return{engine:E,skin:b,destroy(){Ee?.destroy(),f?.destroy(),v?.remove(),u?.destroy(),E.destroy(),l.destroy(),h?.destroy(),d?.destroy()}}}function tM(){if(document.currentScript?.hasAttribute("data-tour-manual"))return;const e=()=>{try{window.tourPlayer=Cf()}catch(t){const i=t instanceof Error?t.message:String(t);console.error("[tour]",t);const s=document.getElementById("tour");s&&(s.innerHTML=`<div class="tour-player-error"><p>${i}</p></div>`)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}tM();async function nM(){throw new Error("This player was built without 3D scan support.")}const iM=Object.freeze(Object.defineProperty({__proto__:null,mountSplat:nM},Symbol.toStringTag,{value:"Module"}));return bn.PLAYER_VERSION=Qw,bn.createPlayer=Cf,Object.defineProperty(bn,Symbol.toStringTag,{value:"Module"}),bn})({});

!(function (t, e) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
		? define([], e)
		: 'object' == typeof exports
		? (exports.spritejs = e())
		: (t.spritejs = e());
})(this, function () {
	return (function (t) {
		var e = {};
		function r(n) {
			if (e[n]) return e[n].exports;
			var i = (e[n] = { i: n, l: !1, exports: {} });
			return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
		}
		return (
			(r.m = t),
			(r.c = e),
			(r.d = function (t, e, n) {
				r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
			}),
			(r.r = function (t) {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(t, '__esModule', { value: !0 });
			}),
			(r.t = function (t, e) {
				if ((1 & e && (t = r(t)), 8 & e)) return t;
				if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
				var n = Object.create(null);
				if (
					(r.r(n),
					Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
					2 & e && 'string' != typeof t)
				)
					for (var i in t)
						r.d(
							n,
							i,
							function (e) {
								return t[e];
							}.bind(null, i),
						);
				return n;
			}),
			(r.n = function (t) {
				var e =
					t && t.__esModule
						? function () {
								return t.default;
						  }
						: function () {
								return t;
						  };
				return r.d(e, 'a', e), e;
			}),
			(r.o = function (t, e) {
				return Object.prototype.hasOwnProperty.call(t, e);
			}),
			(r.p = '/js/'),
			r((r.s = 243))
		);
	})([
		function (t, e, r) {
			'use strict';
			r.r(e);
			var n = {};
			r.r(n),
				r.d(n, 'EPSILON', function () {
					return d;
				}),
				r.d(n, 'ARRAY_TYPE', function () {
					return p;
				}),
				r.d(n, 'RANDOM', function () {
					return g;
				}),
				r.d(n, 'setMatrixArrayType', function () {
					return m;
				}),
				r.d(n, 'toRadian', function () {
					return y;
				}),
				r.d(n, 'equals', function () {
					return b;
				});
			var i = {};
			r.r(i),
				r.d(i, 'create', function () {
					return x;
				}),
				r.d(i, 'clone', function () {
					return w;
				}),
				r.d(i, 'copy', function () {
					return M;
				}),
				r.d(i, 'identity', function () {
					return S;
				}),
				r.d(i, 'fromValues', function () {
					return A;
				}),
				r.d(i, 'set', function () {
					return _;
				}),
				r.d(i, 'transpose', function () {
					return T;
				}),
				r.d(i, 'invert', function () {
					return E;
				}),
				r.d(i, 'adjoint', function () {
					return O;
				}),
				r.d(i, 'determinant', function () {
					return C;
				}),
				r.d(i, 'multiply', function () {
					return R;
				}),
				r.d(i, 'rotate', function () {
					return L;
				}),
				r.d(i, 'scale', function () {
					return k;
				}),
				r.d(i, 'fromRotation', function () {
					return D;
				}),
				r.d(i, 'fromScaling', function () {
					return j;
				}),
				r.d(i, 'str', function () {
					return P;
				}),
				r.d(i, 'frob', function () {
					return q;
				}),
				r.d(i, 'LDU', function () {
					return I;
				}),
				r.d(i, 'add', function () {
					return N;
				}),
				r.d(i, 'subtract', function () {
					return F;
				}),
				r.d(i, 'exactEquals', function () {
					return U;
				}),
				r.d(i, 'equals', function () {
					return B;
				}),
				r.d(i, 'multiplyScalar', function () {
					return z;
				}),
				r.d(i, 'multiplyScalarAndAdd', function () {
					return G;
				}),
				r.d(i, 'mul', function () {
					return V;
				}),
				r.d(i, 'sub', function () {
					return H;
				});
			var o = {};
			r.r(o),
				r.d(o, 'create', function () {
					return $;
				}),
				r.d(o, 'clone', function () {
					return W;
				}),
				r.d(o, 'copy', function () {
					return Y;
				}),
				r.d(o, 'identity', function () {
					return X;
				}),
				r.d(o, 'fromValues', function () {
					return J;
				}),
				r.d(o, 'set', function () {
					return Q;
				}),
				r.d(o, 'invert', function () {
					return Z;
				}),
				r.d(o, 'determinant', function () {
					return K;
				}),
				r.d(o, 'multiply', function () {
					return tt;
				}),
				r.d(o, 'rotate', function () {
					return et;
				}),
				r.d(o, 'scale', function () {
					return rt;
				}),
				r.d(o, 'translate', function () {
					return nt;
				}),
				r.d(o, 'fromRotation', function () {
					return it;
				}),
				r.d(o, 'fromScaling', function () {
					return ot;
				}),
				r.d(o, 'fromTranslation', function () {
					return st;
				}),
				r.d(o, 'str', function () {
					return at;
				}),
				r.d(o, 'frob', function () {
					return ut;
				}),
				r.d(o, 'add', function () {
					return lt;
				}),
				r.d(o, 'subtract', function () {
					return ct;
				}),
				r.d(o, 'multiplyScalar', function () {
					return ft;
				}),
				r.d(o, 'multiplyScalarAndAdd', function () {
					return ht;
				}),
				r.d(o, 'exactEquals', function () {
					return dt;
				}),
				r.d(o, 'equals', function () {
					return pt;
				}),
				r.d(o, 'mul', function () {
					return gt;
				}),
				r.d(o, 'sub', function () {
					return mt;
				});
			var s = {};
			r.r(s),
				r.d(s, 'create', function () {
					return vt;
				}),
				r.d(s, 'fromMat4', function () {
					return yt;
				}),
				r.d(s, 'clone', function () {
					return bt;
				}),
				r.d(s, 'copy', function () {
					return xt;
				}),
				r.d(s, 'fromValues', function () {
					return wt;
				}),
				r.d(s, 'set', function () {
					return Mt;
				}),
				r.d(s, 'identity', function () {
					return St;
				}),
				r.d(s, 'transpose', function () {
					return At;
				}),
				r.d(s, 'invert', function () {
					return _t;
				}),
				r.d(s, 'adjoint', function () {
					return Tt;
				}),
				r.d(s, 'determinant', function () {
					return Et;
				}),
				r.d(s, 'multiply', function () {
					return Ot;
				}),
				r.d(s, 'translate', function () {
					return Ct;
				}),
				r.d(s, 'rotate', function () {
					return Rt;
				}),
				r.d(s, 'scale', function () {
					return Lt;
				}),
				r.d(s, 'fromTranslation', function () {
					return kt;
				}),
				r.d(s, 'fromRotation', function () {
					return Dt;
				}),
				r.d(s, 'fromScaling', function () {
					return jt;
				}),
				r.d(s, 'fromMat2d', function () {
					return Pt;
				}),
				r.d(s, 'fromQuat', function () {
					return qt;
				}),
				r.d(s, 'normalFromMat4', function () {
					return It;
				}),
				r.d(s, 'projection', function () {
					return Nt;
				}),
				r.d(s, 'str', function () {
					return Ft;
				}),
				r.d(s, 'frob', function () {
					return Ut;
				}),
				r.d(s, 'add', function () {
					return Bt;
				}),
				r.d(s, 'subtract', function () {
					return zt;
				}),
				r.d(s, 'multiplyScalar', function () {
					return Gt;
				}),
				r.d(s, 'multiplyScalarAndAdd', function () {
					return Vt;
				}),
				r.d(s, 'exactEquals', function () {
					return Ht;
				}),
				r.d(s, 'equals', function () {
					return $t;
				}),
				r.d(s, 'mul', function () {
					return Wt;
				}),
				r.d(s, 'sub', function () {
					return Yt;
				});
			var a = {};
			r.r(a),
				r.d(a, 'create', function () {
					return Xt;
				}),
				r.d(a, 'clone', function () {
					return Jt;
				}),
				r.d(a, 'copy', function () {
					return Qt;
				}),
				r.d(a, 'fromValues', function () {
					return Zt;
				}),
				r.d(a, 'set', function () {
					return Kt;
				}),
				r.d(a, 'identity', function () {
					return te;
				}),
				r.d(a, 'transpose', function () {
					return ee;
				}),
				r.d(a, 'invert', function () {
					return re;
				}),
				r.d(a, 'adjoint', function () {
					return ne;
				}),
				r.d(a, 'determinant', function () {
					return ie;
				}),
				r.d(a, 'multiply', function () {
					return oe;
				}),
				r.d(a, 'translate', function () {
					return se;
				}),
				r.d(a, 'scale', function () {
					return ae;
				}),
				r.d(a, 'rotate', function () {
					return ue;
				}),
				r.d(a, 'rotateX', function () {
					return le;
				}),
				r.d(a, 'rotateY', function () {
					return ce;
				}),
				r.d(a, 'rotateZ', function () {
					return fe;
				}),
				r.d(a, 'fromTranslation', function () {
					return he;
				}),
				r.d(a, 'fromScaling', function () {
					return de;
				}),
				r.d(a, 'fromRotation', function () {
					return pe;
				}),
				r.d(a, 'fromXRotation', function () {
					return ge;
				}),
				r.d(a, 'fromYRotation', function () {
					return me;
				}),
				r.d(a, 'fromZRotation', function () {
					return ve;
				}),
				r.d(a, 'fromRotationTranslation', function () {
					return ye;
				}),
				r.d(a, 'fromQuat2', function () {
					return be;
				}),
				r.d(a, 'getTranslation', function () {
					return xe;
				}),
				r.d(a, 'getScaling', function () {
					return we;
				}),
				r.d(a, 'getRotation', function () {
					return Me;
				}),
				r.d(a, 'fromRotationTranslationScale', function () {
					return Se;
				}),
				r.d(a, 'fromRotationTranslationScaleOrigin', function () {
					return Ae;
				}),
				r.d(a, 'fromQuat', function () {
					return _e;
				}),
				r.d(a, 'frustum', function () {
					return Te;
				}),
				r.d(a, 'perspective', function () {
					return Ee;
				}),
				r.d(a, 'perspectiveFromFieldOfView', function () {
					return Oe;
				}),
				r.d(a, 'ortho', function () {
					return Ce;
				}),
				r.d(a, 'lookAt', function () {
					return Re;
				}),
				r.d(a, 'targetTo', function () {
					return Le;
				}),
				r.d(a, 'str', function () {
					return ke;
				}),
				r.d(a, 'frob', function () {
					return De;
				}),
				r.d(a, 'add', function () {
					return je;
				}),
				r.d(a, 'subtract', function () {
					return Pe;
				}),
				r.d(a, 'multiplyScalar', function () {
					return qe;
				}),
				r.d(a, 'multiplyScalarAndAdd', function () {
					return Ie;
				}),
				r.d(a, 'exactEquals', function () {
					return Ne;
				}),
				r.d(a, 'equals', function () {
					return Fe;
				}),
				r.d(a, 'mul', function () {
					return Ue;
				}),
				r.d(a, 'sub', function () {
					return Be;
				});
			var u = {};
			r.r(u),
				r.d(u, 'create', function () {
					return ze;
				}),
				r.d(u, 'clone', function () {
					return Ge;
				}),
				r.d(u, 'length', function () {
					return Ve;
				}),
				r.d(u, 'fromValues', function () {
					return He;
				}),
				r.d(u, 'copy', function () {
					return $e;
				}),
				r.d(u, 'set', function () {
					return We;
				}),
				r.d(u, 'add', function () {
					return Ye;
				}),
				r.d(u, 'subtract', function () {
					return Xe;
				}),
				r.d(u, 'multiply', function () {
					return Je;
				}),
				r.d(u, 'divide', function () {
					return Qe;
				}),
				r.d(u, 'ceil', function () {
					return Ze;
				}),
				r.d(u, 'floor', function () {
					return Ke;
				}),
				r.d(u, 'min', function () {
					return tr;
				}),
				r.d(u, 'max', function () {
					return er;
				}),
				r.d(u, 'round', function () {
					return rr;
				}),
				r.d(u, 'scale', function () {
					return nr;
				}),
				r.d(u, 'scaleAndAdd', function () {
					return ir;
				}),
				r.d(u, 'distance', function () {
					return or;
				}),
				r.d(u, 'squaredDistance', function () {
					return sr;
				}),
				r.d(u, 'squaredLength', function () {
					return ar;
				}),
				r.d(u, 'negate', function () {
					return ur;
				}),
				r.d(u, 'inverse', function () {
					return lr;
				}),
				r.d(u, 'normalize', function () {
					return cr;
				}),
				r.d(u, 'dot', function () {
					return fr;
				}),
				r.d(u, 'cross', function () {
					return hr;
				}),
				r.d(u, 'lerp', function () {
					return dr;
				}),
				r.d(u, 'hermite', function () {
					return pr;
				}),
				r.d(u, 'bezier', function () {
					return gr;
				}),
				r.d(u, 'random', function () {
					return mr;
				}),
				r.d(u, 'transformMat4', function () {
					return vr;
				}),
				r.d(u, 'transformMat3', function () {
					return yr;
				}),
				r.d(u, 'transformQuat', function () {
					return br;
				}),
				r.d(u, 'rotateX', function () {
					return xr;
				}),
				r.d(u, 'rotateY', function () {
					return wr;
				}),
				r.d(u, 'rotateZ', function () {
					return Mr;
				}),
				r.d(u, 'angle', function () {
					return Sr;
				}),
				r.d(u, 'zero', function () {
					return Ar;
				}),
				r.d(u, 'str', function () {
					return _r;
				}),
				r.d(u, 'exactEquals', function () {
					return Tr;
				}),
				r.d(u, 'equals', function () {
					return Er;
				}),
				r.d(u, 'sub', function () {
					return Cr;
				}),
				r.d(u, 'mul', function () {
					return Rr;
				}),
				r.d(u, 'div', function () {
					return Lr;
				}),
				r.d(u, 'dist', function () {
					return kr;
				}),
				r.d(u, 'sqrDist', function () {
					return Dr;
				}),
				r.d(u, 'len', function () {
					return jr;
				}),
				r.d(u, 'sqrLen', function () {
					return Pr;
				}),
				r.d(u, 'forEach', function () {
					return qr;
				});
			var l = {};
			r.r(l),
				r.d(l, 'create', function () {
					return Ir;
				}),
				r.d(l, 'clone', function () {
					return Nr;
				}),
				r.d(l, 'fromValues', function () {
					return Fr;
				}),
				r.d(l, 'copy', function () {
					return Ur;
				}),
				r.d(l, 'set', function () {
					return Br;
				}),
				r.d(l, 'add', function () {
					return zr;
				}),
				r.d(l, 'subtract', function () {
					return Gr;
				}),
				r.d(l, 'multiply', function () {
					return Vr;
				}),
				r.d(l, 'divide', function () {
					return Hr;
				}),
				r.d(l, 'ceil', function () {
					return $r;
				}),
				r.d(l, 'floor', function () {
					return Wr;
				}),
				r.d(l, 'min', function () {
					return Yr;
				}),
				r.d(l, 'max', function () {
					return Xr;
				}),
				r.d(l, 'round', function () {
					return Jr;
				}),
				r.d(l, 'scale', function () {
					return Qr;
				}),
				r.d(l, 'scaleAndAdd', function () {
					return Zr;
				}),
				r.d(l, 'distance', function () {
					return Kr;
				}),
				r.d(l, 'squaredDistance', function () {
					return tn;
				}),
				r.d(l, 'length', function () {
					return en;
				}),
				r.d(l, 'squaredLength', function () {
					return rn;
				}),
				r.d(l, 'negate', function () {
					return nn;
				}),
				r.d(l, 'inverse', function () {
					return on;
				}),
				r.d(l, 'normalize', function () {
					return sn;
				}),
				r.d(l, 'dot', function () {
					return an;
				}),
				r.d(l, 'cross', function () {
					return un;
				}),
				r.d(l, 'lerp', function () {
					return ln;
				}),
				r.d(l, 'random', function () {
					return cn;
				}),
				r.d(l, 'transformMat4', function () {
					return fn;
				}),
				r.d(l, 'transformQuat', function () {
					return hn;
				}),
				r.d(l, 'zero', function () {
					return dn;
				}),
				r.d(l, 'str', function () {
					return pn;
				}),
				r.d(l, 'exactEquals', function () {
					return gn;
				}),
				r.d(l, 'equals', function () {
					return mn;
				}),
				r.d(l, 'sub', function () {
					return vn;
				}),
				r.d(l, 'mul', function () {
					return yn;
				}),
				r.d(l, 'div', function () {
					return bn;
				}),
				r.d(l, 'dist', function () {
					return xn;
				}),
				r.d(l, 'sqrDist', function () {
					return wn;
				}),
				r.d(l, 'len', function () {
					return Mn;
				}),
				r.d(l, 'sqrLen', function () {
					return Sn;
				}),
				r.d(l, 'forEach', function () {
					return An;
				});
			var c = {};
			r.r(c),
				r.d(c, 'create', function () {
					return _n;
				}),
				r.d(c, 'identity', function () {
					return Tn;
				}),
				r.d(c, 'setAxisAngle', function () {
					return En;
				}),
				r.d(c, 'getAxisAngle', function () {
					return On;
				}),
				r.d(c, 'getAngle', function () {
					return Cn;
				}),
				r.d(c, 'multiply', function () {
					return Rn;
				}),
				r.d(c, 'rotateX', function () {
					return Ln;
				}),
				r.d(c, 'rotateY', function () {
					return kn;
				}),
				r.d(c, 'rotateZ', function () {
					return Dn;
				}),
				r.d(c, 'calculateW', function () {
					return jn;
				}),
				r.d(c, 'exp', function () {
					return Pn;
				}),
				r.d(c, 'ln', function () {
					return qn;
				}),
				r.d(c, 'pow', function () {
					return In;
				}),
				r.d(c, 'slerp', function () {
					return Nn;
				}),
				r.d(c, 'random', function () {
					return Fn;
				}),
				r.d(c, 'invert', function () {
					return Un;
				}),
				r.d(c, 'conjugate', function () {
					return Bn;
				}),
				r.d(c, 'fromMat3', function () {
					return zn;
				}),
				r.d(c, 'fromEuler', function () {
					return Gn;
				}),
				r.d(c, 'str', function () {
					return Vn;
				}),
				r.d(c, 'clone', function () {
					return Qn;
				}),
				r.d(c, 'fromValues', function () {
					return Zn;
				}),
				r.d(c, 'copy', function () {
					return Kn;
				}),
				r.d(c, 'set', function () {
					return ti;
				}),
				r.d(c, 'add', function () {
					return ei;
				}),
				r.d(c, 'mul', function () {
					return ri;
				}),
				r.d(c, 'scale', function () {
					return ni;
				}),
				r.d(c, 'dot', function () {
					return ii;
				}),
				r.d(c, 'lerp', function () {
					return oi;
				}),
				r.d(c, 'length', function () {
					return si;
				}),
				r.d(c, 'len', function () {
					return ai;
				}),
				r.d(c, 'squaredLength', function () {
					return ui;
				}),
				r.d(c, 'sqrLen', function () {
					return li;
				}),
				r.d(c, 'normalize', function () {
					return ci;
				}),
				r.d(c, 'exactEquals', function () {
					return fi;
				}),
				r.d(c, 'equals', function () {
					return hi;
				}),
				r.d(c, 'rotationTo', function () {
					return di;
				}),
				r.d(c, 'sqlerp', function () {
					return pi;
				}),
				r.d(c, 'setAxes', function () {
					return gi;
				});
			var f = {};
			r.r(f),
				r.d(f, 'create', function () {
					return mi;
				}),
				r.d(f, 'clone', function () {
					return vi;
				}),
				r.d(f, 'fromValues', function () {
					return yi;
				}),
				r.d(f, 'fromRotationTranslationValues', function () {
					return bi;
				}),
				r.d(f, 'fromRotationTranslation', function () {
					return xi;
				}),
				r.d(f, 'fromTranslation', function () {
					return wi;
				}),
				r.d(f, 'fromRotation', function () {
					return Mi;
				}),
				r.d(f, 'fromMat4', function () {
					return Si;
				}),
				r.d(f, 'copy', function () {
					return Ai;
				}),
				r.d(f, 'identity', function () {
					return _i;
				}),
				r.d(f, 'set', function () {
					return Ti;
				}),
				r.d(f, 'getReal', function () {
					return Ei;
				}),
				r.d(f, 'getDual', function () {
					return Oi;
				}),
				r.d(f, 'setReal', function () {
					return Ci;
				}),
				r.d(f, 'setDual', function () {
					return Ri;
				}),
				r.d(f, 'getTranslation', function () {
					return Li;
				}),
				r.d(f, 'translate', function () {
					return ki;
				}),
				r.d(f, 'rotateX', function () {
					return Di;
				}),
				r.d(f, 'rotateY', function () {
					return ji;
				}),
				r.d(f, 'rotateZ', function () {
					return Pi;
				}),
				r.d(f, 'rotateByQuatAppend', function () {
					return qi;
				}),
				r.d(f, 'rotateByQuatPrepend', function () {
					return Ii;
				}),
				r.d(f, 'rotateAroundAxis', function () {
					return Ni;
				}),
				r.d(f, 'add', function () {
					return Fi;
				}),
				r.d(f, 'multiply', function () {
					return Ui;
				}),
				r.d(f, 'mul', function () {
					return Bi;
				}),
				r.d(f, 'scale', function () {
					return zi;
				}),
				r.d(f, 'dot', function () {
					return Gi;
				}),
				r.d(f, 'lerp', function () {
					return Vi;
				}),
				r.d(f, 'invert', function () {
					return Hi;
				}),
				r.d(f, 'conjugate', function () {
					return $i;
				}),
				r.d(f, 'length', function () {
					return Wi;
				}),
				r.d(f, 'len', function () {
					return Yi;
				}),
				r.d(f, 'squaredLength', function () {
					return Xi;
				}),
				r.d(f, 'sqrLen', function () {
					return Ji;
				}),
				r.d(f, 'normalize', function () {
					return Qi;
				}),
				r.d(f, 'str', function () {
					return Zi;
				}),
				r.d(f, 'exactEquals', function () {
					return Ki;
				}),
				r.d(f, 'equals', function () {
					return to;
				});
			var h = {};
			r.r(h),
				r.d(h, 'create', function () {
					return eo;
				}),
				r.d(h, 'clone', function () {
					return ro;
				}),
				r.d(h, 'fromValues', function () {
					return no;
				}),
				r.d(h, 'copy', function () {
					return io;
				}),
				r.d(h, 'set', function () {
					return oo;
				}),
				r.d(h, 'add', function () {
					return so;
				}),
				r.d(h, 'subtract', function () {
					return ao;
				}),
				r.d(h, 'multiply', function () {
					return uo;
				}),
				r.d(h, 'divide', function () {
					return lo;
				}),
				r.d(h, 'ceil', function () {
					return co;
				}),
				r.d(h, 'floor', function () {
					return fo;
				}),
				r.d(h, 'min', function () {
					return ho;
				}),
				r.d(h, 'max', function () {
					return po;
				}),
				r.d(h, 'round', function () {
					return go;
				}),
				r.d(h, 'scale', function () {
					return mo;
				}),
				r.d(h, 'scaleAndAdd', function () {
					return vo;
				}),
				r.d(h, 'distance', function () {
					return yo;
				}),
				r.d(h, 'squaredDistance', function () {
					return bo;
				}),
				r.d(h, 'length', function () {
					return xo;
				}),
				r.d(h, 'squaredLength', function () {
					return wo;
				}),
				r.d(h, 'negate', function () {
					return Mo;
				}),
				r.d(h, 'inverse', function () {
					return So;
				}),
				r.d(h, 'normalize', function () {
					return Ao;
				}),
				r.d(h, 'dot', function () {
					return _o;
				}),
				r.d(h, 'cross', function () {
					return To;
				}),
				r.d(h, 'lerp', function () {
					return Eo;
				}),
				r.d(h, 'random', function () {
					return Oo;
				}),
				r.d(h, 'transformMat2', function () {
					return Co;
				}),
				r.d(h, 'transformMat2d', function () {
					return Ro;
				}),
				r.d(h, 'transformMat3', function () {
					return Lo;
				}),
				r.d(h, 'transformMat4', function () {
					return ko;
				}),
				r.d(h, 'rotate', function () {
					return Do;
				}),
				r.d(h, 'angle', function () {
					return jo;
				}),
				r.d(h, 'zero', function () {
					return Po;
				}),
				r.d(h, 'str', function () {
					return qo;
				}),
				r.d(h, 'exactEquals', function () {
					return Io;
				}),
				r.d(h, 'equals', function () {
					return No;
				}),
				r.d(h, 'len', function () {
					return Fo;
				}),
				r.d(h, 'sub', function () {
					return Uo;
				}),
				r.d(h, 'mul', function () {
					return Bo;
				}),
				r.d(h, 'div', function () {
					return zo;
				}),
				r.d(h, 'dist', function () {
					return Go;
				}),
				r.d(h, 'sqrDist', function () {
					return Vo;
				}),
				r.d(h, 'sqrLen', function () {
					return Ho;
				}),
				r.d(h, 'forEach', function () {
					return $o;
				});
			var d = 1e-6,
				p = 'undefined' != typeof Float32Array ? Float32Array : Array,
				g = Math.random;
			function m(t) {
				p = t;
			}
			var v = Math.PI / 180;
			function y(t) {
				return t * v;
			}
			function b(t, e) {
				return Math.abs(t - e) <= d * Math.max(1, Math.abs(t), Math.abs(e));
			}
			function x() {
				var t = new p(4);
				return p != Float32Array && ((t[1] = 0), (t[2] = 0)), (t[0] = 1), (t[3] = 1), t;
			}
			function w(t) {
				var e = new p(4);
				return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
			}
			function M(t, e) {
				return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
			}
			function S(t) {
				return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
			}
			function A(t, e, r, n) {
				var i = new p(4);
				return (i[0] = t), (i[1] = e), (i[2] = r), (i[3] = n), i;
			}
			function _(t, e, r, n, i) {
				return (t[0] = e), (t[1] = r), (t[2] = n), (t[3] = i), t;
			}
			function T(t, e) {
				if (t === e) {
					var r = e[1];
					(t[1] = e[2]), (t[2] = r);
				} else (t[0] = e[0]), (t[1] = e[2]), (t[2] = e[1]), (t[3] = e[3]);
				return t;
			}
			function E(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[3],
					s = r * o - i * n;
				return s ? ((s = 1 / s), (t[0] = o * s), (t[1] = -n * s), (t[2] = -i * s), (t[3] = r * s), t) : null;
			}
			function O(t, e) {
				var r = e[0];
				return (t[0] = e[3]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = r), t;
			}
			function C(t) {
				return t[0] * t[3] - t[2] * t[1];
			}
			function R(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = r[0],
					u = r[1],
					l = r[2],
					c = r[3];
				return (
					(t[0] = n * a + o * u), (t[1] = i * a + s * u), (t[2] = n * l + o * c), (t[3] = i * l + s * c), t
				);
			}
			function L(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = Math.sin(r),
					u = Math.cos(r);
				return (
					(t[0] = n * u + o * a), (t[1] = i * u + s * a), (t[2] = n * -a + o * u), (t[3] = i * -a + s * u), t
				);
			}
			function k(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = r[0],
					u = r[1];
				return (t[0] = n * a), (t[1] = i * a), (t[2] = o * u), (t[3] = s * u), t;
			}
			function D(t, e) {
				var r = Math.sin(e),
					n = Math.cos(e);
				return (t[0] = n), (t[1] = r), (t[2] = -r), (t[3] = n), t;
			}
			function j(t, e) {
				return (t[0] = e[0]), (t[1] = 0), (t[2] = 0), (t[3] = e[1]), t;
			}
			function P(t) {
				return 'mat2(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')';
			}
			function q(t) {
				return Math.hypot(t[0], t[1], t[2], t[3]);
			}
			function I(t, e, r, n) {
				return (t[2] = n[2] / n[0]), (r[0] = n[0]), (r[1] = n[1]), (r[3] = n[3] - t[2] * r[1]), [t, e, r];
			}
			function N(t, e, r) {
				return (t[0] = e[0] + r[0]), (t[1] = e[1] + r[1]), (t[2] = e[2] + r[2]), (t[3] = e[3] + r[3]), t;
			}
			function F(t, e, r) {
				return (t[0] = e[0] - r[0]), (t[1] = e[1] - r[1]), (t[2] = e[2] - r[2]), (t[3] = e[3] - r[3]), t;
			}
			function U(t, e) {
				return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
			}
			function B(t, e) {
				var r = t[0],
					n = t[1],
					i = t[2],
					o = t[3],
					s = e[0],
					a = e[1],
					u = e[2],
					l = e[3];
				return (
					Math.abs(r - s) <= d * Math.max(1, Math.abs(r), Math.abs(s)) &&
					Math.abs(n - a) <= d * Math.max(1, Math.abs(n), Math.abs(a)) &&
					Math.abs(i - u) <= d * Math.max(1, Math.abs(i), Math.abs(u)) &&
					Math.abs(o - l) <= d * Math.max(1, Math.abs(o), Math.abs(l))
				);
			}
			function z(t, e, r) {
				return (t[0] = e[0] * r), (t[1] = e[1] * r), (t[2] = e[2] * r), (t[3] = e[3] * r), t;
			}
			function G(t, e, r, n) {
				return (
					(t[0] = e[0] + r[0] * n),
					(t[1] = e[1] + r[1] * n),
					(t[2] = e[2] + r[2] * n),
					(t[3] = e[3] + r[3] * n),
					t
				);
			}
			Math.hypot ||
				(Math.hypot = function () {
					for (var t = 0, e = arguments.length; e--; ) t += arguments[e] * arguments[e];
					return Math.sqrt(t);
				});
			var V = R,
				H = F;
			function $() {
				var t = new p(6);
				return p != Float32Array && ((t[1] = 0), (t[2] = 0), (t[4] = 0), (t[5] = 0)), (t[0] = 1), (t[3] = 1), t;
			}
			function W(t) {
				var e = new p(6);
				return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), (e[4] = t[4]), (e[5] = t[5]), e;
			}
			function Y(t, e) {
				return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[4] = e[4]), (t[5] = e[5]), t;
			}
			function X(t) {
				return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), t;
			}
			function J(t, e, r, n, i, o) {
				var s = new p(6);
				return (s[0] = t), (s[1] = e), (s[2] = r), (s[3] = n), (s[4] = i), (s[5] = o), s;
			}
			function Q(t, e, r, n, i, o, s) {
				return (t[0] = e), (t[1] = r), (t[2] = n), (t[3] = i), (t[4] = o), (t[5] = s), t;
			}
			function Z(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[3],
					s = e[4],
					a = e[5],
					u = r * o - n * i;
				return u
					? ((u = 1 / u),
					  (t[0] = o * u),
					  (t[1] = -n * u),
					  (t[2] = -i * u),
					  (t[3] = r * u),
					  (t[4] = (i * a - o * s) * u),
					  (t[5] = (n * s - r * a) * u),
					  t)
					: null;
			}
			function K(t) {
				return t[0] * t[3] - t[1] * t[2];
			}
			function tt(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = e[4],
					u = e[5],
					l = r[0],
					c = r[1],
					f = r[2],
					h = r[3],
					d = r[4],
					p = r[5];
				return (
					(t[0] = n * l + o * c),
					(t[1] = i * l + s * c),
					(t[2] = n * f + o * h),
					(t[3] = i * f + s * h),
					(t[4] = n * d + o * p + a),
					(t[5] = i * d + s * p + u),
					t
				);
			}
			function et(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = e[4],
					u = e[5],
					l = Math.sin(r),
					c = Math.cos(r);
				return (
					(t[0] = n * c + o * l),
					(t[1] = i * c + s * l),
					(t[2] = n * -l + o * c),
					(t[3] = i * -l + s * c),
					(t[4] = a),
					(t[5] = u),
					t
				);
			}
			function rt(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = e[4],
					u = e[5],
					l = r[0],
					c = r[1];
				return (t[0] = n * l), (t[1] = i * l), (t[2] = o * c), (t[3] = s * c), (t[4] = a), (t[5] = u), t;
			}
			function nt(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = e[4],
					u = e[5],
					l = r[0],
					c = r[1];
				return (
					(t[0] = n),
					(t[1] = i),
					(t[2] = o),
					(t[3] = s),
					(t[4] = n * l + o * c + a),
					(t[5] = i * l + s * c + u),
					t
				);
			}
			function it(t, e) {
				var r = Math.sin(e),
					n = Math.cos(e);
				return (t[0] = n), (t[1] = r), (t[2] = -r), (t[3] = n), (t[4] = 0), (t[5] = 0), t;
			}
			function ot(t, e) {
				return (t[0] = e[0]), (t[1] = 0), (t[2] = 0), (t[3] = e[1]), (t[4] = 0), (t[5] = 0), t;
			}
			function st(t, e) {
				return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = e[0]), (t[5] = e[1]), t;
			}
			function at(t) {
				return 'mat2d(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ', ' + t[4] + ', ' + t[5] + ')';
			}
			function ut(t) {
				return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1);
			}
			function lt(t, e, r) {
				return (
					(t[0] = e[0] + r[0]),
					(t[1] = e[1] + r[1]),
					(t[2] = e[2] + r[2]),
					(t[3] = e[3] + r[3]),
					(t[4] = e[4] + r[4]),
					(t[5] = e[5] + r[5]),
					t
				);
			}
			function ct(t, e, r) {
				return (
					(t[0] = e[0] - r[0]),
					(t[1] = e[1] - r[1]),
					(t[2] = e[2] - r[2]),
					(t[3] = e[3] - r[3]),
					(t[4] = e[4] - r[4]),
					(t[5] = e[5] - r[5]),
					t
				);
			}
			function ft(t, e, r) {
				return (
					(t[0] = e[0] * r),
					(t[1] = e[1] * r),
					(t[2] = e[2] * r),
					(t[3] = e[3] * r),
					(t[4] = e[4] * r),
					(t[5] = e[5] * r),
					t
				);
			}
			function ht(t, e, r, n) {
				return (
					(t[0] = e[0] + r[0] * n),
					(t[1] = e[1] + r[1] * n),
					(t[2] = e[2] + r[2] * n),
					(t[3] = e[3] + r[3] * n),
					(t[4] = e[4] + r[4] * n),
					(t[5] = e[5] + r[5] * n),
					t
				);
			}
			function dt(t, e) {
				return (
					t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5]
				);
			}
			function pt(t, e) {
				var r = t[0],
					n = t[1],
					i = t[2],
					o = t[3],
					s = t[4],
					a = t[5],
					u = e[0],
					l = e[1],
					c = e[2],
					f = e[3],
					h = e[4],
					p = e[5];
				return (
					Math.abs(r - u) <= d * Math.max(1, Math.abs(r), Math.abs(u)) &&
					Math.abs(n - l) <= d * Math.max(1, Math.abs(n), Math.abs(l)) &&
					Math.abs(i - c) <= d * Math.max(1, Math.abs(i), Math.abs(c)) &&
					Math.abs(o - f) <= d * Math.max(1, Math.abs(o), Math.abs(f)) &&
					Math.abs(s - h) <= d * Math.max(1, Math.abs(s), Math.abs(h)) &&
					Math.abs(a - p) <= d * Math.max(1, Math.abs(a), Math.abs(p))
				);
			}
			var gt = tt,
				mt = ct;
			function vt() {
				var t = new p(9);
				return (
					p != Float32Array && ((t[1] = 0), (t[2] = 0), (t[3] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0)),
					(t[0] = 1),
					(t[4] = 1),
					(t[8] = 1),
					t
				);
			}
			function yt(t, e) {
				return (
					(t[0] = e[0]),
					(t[1] = e[1]),
					(t[2] = e[2]),
					(t[3] = e[4]),
					(t[4] = e[5]),
					(t[5] = e[6]),
					(t[6] = e[8]),
					(t[7] = e[9]),
					(t[8] = e[10]),
					t
				);
			}
			function bt(t) {
				var e = new p(9);
				return (
					(e[0] = t[0]),
					(e[1] = t[1]),
					(e[2] = t[2]),
					(e[3] = t[3]),
					(e[4] = t[4]),
					(e[5] = t[5]),
					(e[6] = t[6]),
					(e[7] = t[7]),
					(e[8] = t[8]),
					e
				);
			}
			function xt(t, e) {
				return (
					(t[0] = e[0]),
					(t[1] = e[1]),
					(t[2] = e[2]),
					(t[3] = e[3]),
					(t[4] = e[4]),
					(t[5] = e[5]),
					(t[6] = e[6]),
					(t[7] = e[7]),
					(t[8] = e[8]),
					t
				);
			}
			function wt(t, e, r, n, i, o, s, a, u) {
				var l = new p(9);
				return (
					(l[0] = t),
					(l[1] = e),
					(l[2] = r),
					(l[3] = n),
					(l[4] = i),
					(l[5] = o),
					(l[6] = s),
					(l[7] = a),
					(l[8] = u),
					l
				);
			}
			function Mt(t, e, r, n, i, o, s, a, u, l) {
				return (
					(t[0] = e),
					(t[1] = r),
					(t[2] = n),
					(t[3] = i),
					(t[4] = o),
					(t[5] = s),
					(t[6] = a),
					(t[7] = u),
					(t[8] = l),
					t
				);
			}
			function St(t) {
				return (
					(t[0] = 1),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 1),
					(t[5] = 0),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 1),
					t
				);
			}
			function At(t, e) {
				if (t === e) {
					var r = e[1],
						n = e[2],
						i = e[5];
					(t[1] = e[3]), (t[2] = e[6]), (t[3] = r), (t[5] = e[7]), (t[6] = n), (t[7] = i);
				} else
					(t[0] = e[0]),
						(t[1] = e[3]),
						(t[2] = e[6]),
						(t[3] = e[1]),
						(t[4] = e[4]),
						(t[5] = e[7]),
						(t[6] = e[2]),
						(t[7] = e[5]),
						(t[8] = e[8]);
				return t;
			}
			function _t(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[3],
					s = e[4],
					a = e[5],
					u = e[6],
					l = e[7],
					c = e[8],
					f = c * s - a * l,
					h = -c * o + a * u,
					d = l * o - s * u,
					p = r * f + n * h + i * d;
				return p
					? ((p = 1 / p),
					  (t[0] = f * p),
					  (t[1] = (-c * n + i * l) * p),
					  (t[2] = (a * n - i * s) * p),
					  (t[3] = h * p),
					  (t[4] = (c * r - i * u) * p),
					  (t[5] = (-a * r + i * o) * p),
					  (t[6] = d * p),
					  (t[7] = (-l * r + n * u) * p),
					  (t[8] = (s * r - n * o) * p),
					  t)
					: null;
			}
			function Tt(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[3],
					s = e[4],
					a = e[5],
					u = e[6],
					l = e[7],
					c = e[8];
				return (
					(t[0] = s * c - a * l),
					(t[1] = i * l - n * c),
					(t[2] = n * a - i * s),
					(t[3] = a * u - o * c),
					(t[4] = r * c - i * u),
					(t[5] = i * o - r * a),
					(t[6] = o * l - s * u),
					(t[7] = n * u - r * l),
					(t[8] = r * s - n * o),
					t
				);
			}
			function Et(t) {
				var e = t[0],
					r = t[1],
					n = t[2],
					i = t[3],
					o = t[4],
					s = t[5],
					a = t[6],
					u = t[7],
					l = t[8];
				return e * (l * o - s * u) + r * (-l * i + s * a) + n * (u * i - o * a);
			}
			function Ot(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = e[4],
					u = e[5],
					l = e[6],
					c = e[7],
					f = e[8],
					h = r[0],
					d = r[1],
					p = r[2],
					g = r[3],
					m = r[4],
					v = r[5],
					y = r[6],
					b = r[7],
					x = r[8];
				return (
					(t[0] = h * n + d * s + p * l),
					(t[1] = h * i + d * a + p * c),
					(t[2] = h * o + d * u + p * f),
					(t[3] = g * n + m * s + v * l),
					(t[4] = g * i + m * a + v * c),
					(t[5] = g * o + m * u + v * f),
					(t[6] = y * n + b * s + x * l),
					(t[7] = y * i + b * a + x * c),
					(t[8] = y * o + b * u + x * f),
					t
				);
			}
			function Ct(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = e[4],
					u = e[5],
					l = e[6],
					c = e[7],
					f = e[8],
					h = r[0],
					d = r[1];
				return (
					(t[0] = n),
					(t[1] = i),
					(t[2] = o),
					(t[3] = s),
					(t[4] = a),
					(t[5] = u),
					(t[6] = h * n + d * s + l),
					(t[7] = h * i + d * a + c),
					(t[8] = h * o + d * u + f),
					t
				);
			}
			function Rt(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = e[4],
					u = e[5],
					l = e[6],
					c = e[7],
					f = e[8],
					h = Math.sin(r),
					d = Math.cos(r);
				return (
					(t[0] = d * n + h * s),
					(t[1] = d * i + h * a),
					(t[2] = d * o + h * u),
					(t[3] = d * s - h * n),
					(t[4] = d * a - h * i),
					(t[5] = d * u - h * o),
					(t[6] = l),
					(t[7] = c),
					(t[8] = f),
					t
				);
			}
			function Lt(t, e, r) {
				var n = r[0],
					i = r[1];
				return (
					(t[0] = n * e[0]),
					(t[1] = n * e[1]),
					(t[2] = n * e[2]),
					(t[3] = i * e[3]),
					(t[4] = i * e[4]),
					(t[5] = i * e[5]),
					(t[6] = e[6]),
					(t[7] = e[7]),
					(t[8] = e[8]),
					t
				);
			}
			function kt(t, e) {
				return (
					(t[0] = 1),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 1),
					(t[5] = 0),
					(t[6] = e[0]),
					(t[7] = e[1]),
					(t[8] = 1),
					t
				);
			}
			function Dt(t, e) {
				var r = Math.sin(e),
					n = Math.cos(e);
				return (
					(t[0] = n),
					(t[1] = r),
					(t[2] = 0),
					(t[3] = -r),
					(t[4] = n),
					(t[5] = 0),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 1),
					t
				);
			}
			function jt(t, e) {
				return (
					(t[0] = e[0]),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = e[1]),
					(t[5] = 0),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 1),
					t
				);
			}
			function Pt(t, e) {
				return (
					(t[0] = e[0]),
					(t[1] = e[1]),
					(t[2] = 0),
					(t[3] = e[2]),
					(t[4] = e[3]),
					(t[5] = 0),
					(t[6] = e[4]),
					(t[7] = e[5]),
					(t[8] = 1),
					t
				);
			}
			function qt(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[3],
					s = r + r,
					a = n + n,
					u = i + i,
					l = r * s,
					c = n * s,
					f = n * a,
					h = i * s,
					d = i * a,
					p = i * u,
					g = o * s,
					m = o * a,
					v = o * u;
				return (
					(t[0] = 1 - f - p),
					(t[3] = c - v),
					(t[6] = h + m),
					(t[1] = c + v),
					(t[4] = 1 - l - p),
					(t[7] = d - g),
					(t[2] = h - m),
					(t[5] = d + g),
					(t[8] = 1 - l - f),
					t
				);
			}
			function It(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[3],
					s = e[4],
					a = e[5],
					u = e[6],
					l = e[7],
					c = e[8],
					f = e[9],
					h = e[10],
					d = e[11],
					p = e[12],
					g = e[13],
					m = e[14],
					v = e[15],
					y = r * a - n * s,
					b = r * u - i * s,
					x = r * l - o * s,
					w = n * u - i * a,
					M = n * l - o * a,
					S = i * l - o * u,
					A = c * g - f * p,
					_ = c * m - h * p,
					T = c * v - d * p,
					E = f * m - h * g,
					O = f * v - d * g,
					C = h * v - d * m,
					R = y * C - b * O + x * E + w * T - M * _ + S * A;
				return R
					? ((R = 1 / R),
					  (t[0] = (a * C - u * O + l * E) * R),
					  (t[1] = (u * T - s * C - l * _) * R),
					  (t[2] = (s * O - a * T + l * A) * R),
					  (t[3] = (i * O - n * C - o * E) * R),
					  (t[4] = (r * C - i * T + o * _) * R),
					  (t[5] = (n * T - r * O - o * A) * R),
					  (t[6] = (g * S - m * M + v * w) * R),
					  (t[7] = (m * x - p * S - v * b) * R),
					  (t[8] = (p * M - g * x + v * y) * R),
					  t)
					: null;
			}
			function Nt(t, e, r) {
				return (
					(t[0] = 2 / e),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = -2 / r),
					(t[5] = 0),
					(t[6] = -1),
					(t[7] = 1),
					(t[8] = 1),
					t
				);
			}
			function Ft(t) {
				return (
					'mat3(' +
					t[0] +
					', ' +
					t[1] +
					', ' +
					t[2] +
					', ' +
					t[3] +
					', ' +
					t[4] +
					', ' +
					t[5] +
					', ' +
					t[6] +
					', ' +
					t[7] +
					', ' +
					t[8] +
					')'
				);
			}
			function Ut(t) {
				return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]);
			}
			function Bt(t, e, r) {
				return (
					(t[0] = e[0] + r[0]),
					(t[1] = e[1] + r[1]),
					(t[2] = e[2] + r[2]),
					(t[3] = e[3] + r[3]),
					(t[4] = e[4] + r[4]),
					(t[5] = e[5] + r[5]),
					(t[6] = e[6] + r[6]),
					(t[7] = e[7] + r[7]),
					(t[8] = e[8] + r[8]),
					t
				);
			}
			function zt(t, e, r) {
				return (
					(t[0] = e[0] - r[0]),
					(t[1] = e[1] - r[1]),
					(t[2] = e[2] - r[2]),
					(t[3] = e[3] - r[3]),
					(t[4] = e[4] - r[4]),
					(t[5] = e[5] - r[5]),
					(t[6] = e[6] - r[6]),
					(t[7] = e[7] - r[7]),
					(t[8] = e[8] - r[8]),
					t
				);
			}
			function Gt(t, e, r) {
				return (
					(t[0] = e[0] * r),
					(t[1] = e[1] * r),
					(t[2] = e[2] * r),
					(t[3] = e[3] * r),
					(t[4] = e[4] * r),
					(t[5] = e[5] * r),
					(t[6] = e[6] * r),
					(t[7] = e[7] * r),
					(t[8] = e[8] * r),
					t
				);
			}
			function Vt(t, e, r, n) {
				return (
					(t[0] = e[0] + r[0] * n),
					(t[1] = e[1] + r[1] * n),
					(t[2] = e[2] + r[2] * n),
					(t[3] = e[3] + r[3] * n),
					(t[4] = e[4] + r[4] * n),
					(t[5] = e[5] + r[5] * n),
					(t[6] = e[6] + r[6] * n),
					(t[7] = e[7] + r[7] * n),
					(t[8] = e[8] + r[8] * n),
					t
				);
			}
			function Ht(t, e) {
				return (
					t[0] === e[0] &&
					t[1] === e[1] &&
					t[2] === e[2] &&
					t[3] === e[3] &&
					t[4] === e[4] &&
					t[5] === e[5] &&
					t[6] === e[6] &&
					t[7] === e[7] &&
					t[8] === e[8]
				);
			}
			function $t(t, e) {
				var r = t[0],
					n = t[1],
					i = t[2],
					o = t[3],
					s = t[4],
					a = t[5],
					u = t[6],
					l = t[7],
					c = t[8],
					f = e[0],
					h = e[1],
					p = e[2],
					g = e[3],
					m = e[4],
					v = e[5],
					y = e[6],
					b = e[7],
					x = e[8];
				return (
					Math.abs(r - f) <= d * Math.max(1, Math.abs(r), Math.abs(f)) &&
					Math.abs(n - h) <= d * Math.max(1, Math.abs(n), Math.abs(h)) &&
					Math.abs(i - p) <= d * Math.max(1, Math.abs(i), Math.abs(p)) &&
					Math.abs(o - g) <= d * Math.max(1, Math.abs(o), Math.abs(g)) &&
					Math.abs(s - m) <= d * Math.max(1, Math.abs(s), Math.abs(m)) &&
					Math.abs(a - v) <= d * Math.max(1, Math.abs(a), Math.abs(v)) &&
					Math.abs(u - y) <= d * Math.max(1, Math.abs(u), Math.abs(y)) &&
					Math.abs(l - b) <= d * Math.max(1, Math.abs(l), Math.abs(b)) &&
					Math.abs(c - x) <= d * Math.max(1, Math.abs(c), Math.abs(x))
				);
			}
			var Wt = Ot,
				Yt = zt;
			function Xt() {
				var t = new p(16);
				return (
					p != Float32Array &&
						((t[1] = 0),
						(t[2] = 0),
						(t[3] = 0),
						(t[4] = 0),
						(t[6] = 0),
						(t[7] = 0),
						(t[8] = 0),
						(t[9] = 0),
						(t[11] = 0),
						(t[12] = 0),
						(t[13] = 0),
						(t[14] = 0)),
					(t[0] = 1),
					(t[5] = 1),
					(t[10] = 1),
					(t[15] = 1),
					t
				);
			}
			function Jt(t) {
				var e = new p(16);
				return (
					(e[0] = t[0]),
					(e[1] = t[1]),
					(e[2] = t[2]),
					(e[3] = t[3]),
					(e[4] = t[4]),
					(e[5] = t[5]),
					(e[6] = t[6]),
					(e[7] = t[7]),
					(e[8] = t[8]),
					(e[9] = t[9]),
					(e[10] = t[10]),
					(e[11] = t[11]),
					(e[12] = t[12]),
					(e[13] = t[13]),
					(e[14] = t[14]),
					(e[15] = t[15]),
					e
				);
			}
			function Qt(t, e) {
				return (
					(t[0] = e[0]),
					(t[1] = e[1]),
					(t[2] = e[2]),
					(t[3] = e[3]),
					(t[4] = e[4]),
					(t[5] = e[5]),
					(t[6] = e[6]),
					(t[7] = e[7]),
					(t[8] = e[8]),
					(t[9] = e[9]),
					(t[10] = e[10]),
					(t[11] = e[11]),
					(t[12] = e[12]),
					(t[13] = e[13]),
					(t[14] = e[14]),
					(t[15] = e[15]),
					t
				);
			}
			function Zt(t, e, r, n, i, o, s, a, u, l, c, f, h, d, g, m) {
				var v = new p(16);
				return (
					(v[0] = t),
					(v[1] = e),
					(v[2] = r),
					(v[3] = n),
					(v[4] = i),
					(v[5] = o),
					(v[6] = s),
					(v[7] = a),
					(v[8] = u),
					(v[9] = l),
					(v[10] = c),
					(v[11] = f),
					(v[12] = h),
					(v[13] = d),
					(v[14] = g),
					(v[15] = m),
					v
				);
			}
			function Kt(t, e, r, n, i, o, s, a, u, l, c, f, h, d, p, g, m) {
				return (
					(t[0] = e),
					(t[1] = r),
					(t[2] = n),
					(t[3] = i),
					(t[4] = o),
					(t[5] = s),
					(t[6] = a),
					(t[7] = u),
					(t[8] = l),
					(t[9] = c),
					(t[10] = f),
					(t[11] = h),
					(t[12] = d),
					(t[13] = p),
					(t[14] = g),
					(t[15] = m),
					t
				);
			}
			function te(t) {
				return (
					(t[0] = 1),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = 1),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = 0),
					(t[10] = 1),
					(t[11] = 0),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = 0),
					(t[15] = 1),
					t
				);
			}
			function ee(t, e) {
				if (t === e) {
					var r = e[1],
						n = e[2],
						i = e[3],
						o = e[6],
						s = e[7],
						a = e[11];
					(t[1] = e[4]),
						(t[2] = e[8]),
						(t[3] = e[12]),
						(t[4] = r),
						(t[6] = e[9]),
						(t[7] = e[13]),
						(t[8] = n),
						(t[9] = o),
						(t[11] = e[14]),
						(t[12] = i),
						(t[13] = s),
						(t[14] = a);
				} else
					(t[0] = e[0]),
						(t[1] = e[4]),
						(t[2] = e[8]),
						(t[3] = e[12]),
						(t[4] = e[1]),
						(t[5] = e[5]),
						(t[6] = e[9]),
						(t[7] = e[13]),
						(t[8] = e[2]),
						(t[9] = e[6]),
						(t[10] = e[10]),
						(t[11] = e[14]),
						(t[12] = e[3]),
						(t[13] = e[7]),
						(t[14] = e[11]),
						(t[15] = e[15]);
				return t;
			}
			function re(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[3],
					s = e[4],
					a = e[5],
					u = e[6],
					l = e[7],
					c = e[8],
					f = e[9],
					h = e[10],
					d = e[11],
					p = e[12],
					g = e[13],
					m = e[14],
					v = e[15],
					y = r * a - n * s,
					b = r * u - i * s,
					x = r * l - o * s,
					w = n * u - i * a,
					M = n * l - o * a,
					S = i * l - o * u,
					A = c * g - f * p,
					_ = c * m - h * p,
					T = c * v - d * p,
					E = f * m - h * g,
					O = f * v - d * g,
					C = h * v - d * m,
					R = y * C - b * O + x * E + w * T - M * _ + S * A;
				return R
					? ((R = 1 / R),
					  (t[0] = (a * C - u * O + l * E) * R),
					  (t[1] = (i * O - n * C - o * E) * R),
					  (t[2] = (g * S - m * M + v * w) * R),
					  (t[3] = (h * M - f * S - d * w) * R),
					  (t[4] = (u * T - s * C - l * _) * R),
					  (t[5] = (r * C - i * T + o * _) * R),
					  (t[6] = (m * x - p * S - v * b) * R),
					  (t[7] = (c * S - h * x + d * b) * R),
					  (t[8] = (s * O - a * T + l * A) * R),
					  (t[9] = (n * T - r * O - o * A) * R),
					  (t[10] = (p * M - g * x + v * y) * R),
					  (t[11] = (f * x - c * M - d * y) * R),
					  (t[12] = (a * _ - s * E - u * A) * R),
					  (t[13] = (r * E - n * _ + i * A) * R),
					  (t[14] = (g * b - p * w - m * y) * R),
					  (t[15] = (c * w - f * b + h * y) * R),
					  t)
					: null;
			}
			function ne(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[3],
					s = e[4],
					a = e[5],
					u = e[6],
					l = e[7],
					c = e[8],
					f = e[9],
					h = e[10],
					d = e[11],
					p = e[12],
					g = e[13],
					m = e[14],
					v = e[15];
				return (
					(t[0] = a * (h * v - d * m) - f * (u * v - l * m) + g * (u * d - l * h)),
					(t[1] = -(n * (h * v - d * m) - f * (i * v - o * m) + g * (i * d - o * h))),
					(t[2] = n * (u * v - l * m) - a * (i * v - o * m) + g * (i * l - o * u)),
					(t[3] = -(n * (u * d - l * h) - a * (i * d - o * h) + f * (i * l - o * u))),
					(t[4] = -(s * (h * v - d * m) - c * (u * v - l * m) + p * (u * d - l * h))),
					(t[5] = r * (h * v - d * m) - c * (i * v - o * m) + p * (i * d - o * h)),
					(t[6] = -(r * (u * v - l * m) - s * (i * v - o * m) + p * (i * l - o * u))),
					(t[7] = r * (u * d - l * h) - s * (i * d - o * h) + c * (i * l - o * u)),
					(t[8] = s * (f * v - d * g) - c * (a * v - l * g) + p * (a * d - l * f)),
					(t[9] = -(r * (f * v - d * g) - c * (n * v - o * g) + p * (n * d - o * f))),
					(t[10] = r * (a * v - l * g) - s * (n * v - o * g) + p * (n * l - o * a)),
					(t[11] = -(r * (a * d - l * f) - s * (n * d - o * f) + c * (n * l - o * a))),
					(t[12] = -(s * (f * m - h * g) - c * (a * m - u * g) + p * (a * h - u * f))),
					(t[13] = r * (f * m - h * g) - c * (n * m - i * g) + p * (n * h - i * f)),
					(t[14] = -(r * (a * m - u * g) - s * (n * m - i * g) + p * (n * u - i * a))),
					(t[15] = r * (a * h - u * f) - s * (n * h - i * f) + c * (n * u - i * a)),
					t
				);
			}
			function ie(t) {
				var e = t[0],
					r = t[1],
					n = t[2],
					i = t[3],
					o = t[4],
					s = t[5],
					a = t[6],
					u = t[7],
					l = t[8],
					c = t[9],
					f = t[10],
					h = t[11],
					d = t[12],
					p = t[13],
					g = t[14],
					m = t[15];
				return (
					(e * s - r * o) * (f * m - h * g) -
					(e * a - n * o) * (c * m - h * p) +
					(e * u - i * o) * (c * g - f * p) +
					(r * a - n * s) * (l * m - h * d) -
					(r * u - i * s) * (l * g - f * d) +
					(n * u - i * a) * (l * p - c * d)
				);
			}
			function oe(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = e[4],
					u = e[5],
					l = e[6],
					c = e[7],
					f = e[8],
					h = e[9],
					d = e[10],
					p = e[11],
					g = e[12],
					m = e[13],
					v = e[14],
					y = e[15],
					b = r[0],
					x = r[1],
					w = r[2],
					M = r[3];
				return (
					(t[0] = b * n + x * a + w * f + M * g),
					(t[1] = b * i + x * u + w * h + M * m),
					(t[2] = b * o + x * l + w * d + M * v),
					(t[3] = b * s + x * c + w * p + M * y),
					(b = r[4]),
					(x = r[5]),
					(w = r[6]),
					(M = r[7]),
					(t[4] = b * n + x * a + w * f + M * g),
					(t[5] = b * i + x * u + w * h + M * m),
					(t[6] = b * o + x * l + w * d + M * v),
					(t[7] = b * s + x * c + w * p + M * y),
					(b = r[8]),
					(x = r[9]),
					(w = r[10]),
					(M = r[11]),
					(t[8] = b * n + x * a + w * f + M * g),
					(t[9] = b * i + x * u + w * h + M * m),
					(t[10] = b * o + x * l + w * d + M * v),
					(t[11] = b * s + x * c + w * p + M * y),
					(b = r[12]),
					(x = r[13]),
					(w = r[14]),
					(M = r[15]),
					(t[12] = b * n + x * a + w * f + M * g),
					(t[13] = b * i + x * u + w * h + M * m),
					(t[14] = b * o + x * l + w * d + M * v),
					(t[15] = b * s + x * c + w * p + M * y),
					t
				);
			}
			function se(t, e, r) {
				var n,
					i,
					o,
					s,
					a,
					u,
					l,
					c,
					f,
					h,
					d,
					p,
					g = r[0],
					m = r[1],
					v = r[2];
				return (
					e === t
						? ((t[12] = e[0] * g + e[4] * m + e[8] * v + e[12]),
						  (t[13] = e[1] * g + e[5] * m + e[9] * v + e[13]),
						  (t[14] = e[2] * g + e[6] * m + e[10] * v + e[14]),
						  (t[15] = e[3] * g + e[7] * m + e[11] * v + e[15]))
						: ((n = e[0]),
						  (i = e[1]),
						  (o = e[2]),
						  (s = e[3]),
						  (a = e[4]),
						  (u = e[5]),
						  (l = e[6]),
						  (c = e[7]),
						  (f = e[8]),
						  (h = e[9]),
						  (d = e[10]),
						  (p = e[11]),
						  (t[0] = n),
						  (t[1] = i),
						  (t[2] = o),
						  (t[3] = s),
						  (t[4] = a),
						  (t[5] = u),
						  (t[6] = l),
						  (t[7] = c),
						  (t[8] = f),
						  (t[9] = h),
						  (t[10] = d),
						  (t[11] = p),
						  (t[12] = n * g + a * m + f * v + e[12]),
						  (t[13] = i * g + u * m + h * v + e[13]),
						  (t[14] = o * g + l * m + d * v + e[14]),
						  (t[15] = s * g + c * m + p * v + e[15])),
					t
				);
			}
			function ae(t, e, r) {
				var n = r[0],
					i = r[1],
					o = r[2];
				return (
					(t[0] = e[0] * n),
					(t[1] = e[1] * n),
					(t[2] = e[2] * n),
					(t[3] = e[3] * n),
					(t[4] = e[4] * i),
					(t[5] = e[5] * i),
					(t[6] = e[6] * i),
					(t[7] = e[7] * i),
					(t[8] = e[8] * o),
					(t[9] = e[9] * o),
					(t[10] = e[10] * o),
					(t[11] = e[11] * o),
					(t[12] = e[12]),
					(t[13] = e[13]),
					(t[14] = e[14]),
					(t[15] = e[15]),
					t
				);
			}
			function ue(t, e, r, n) {
				var i,
					o,
					s,
					a,
					u,
					l,
					c,
					f,
					h,
					p,
					g,
					m,
					v,
					y,
					b,
					x,
					w,
					M,
					S,
					A,
					_,
					T,
					E,
					O,
					C = n[0],
					R = n[1],
					L = n[2],
					k = Math.hypot(C, R, L);
				return k < d
					? null
					: ((C *= k = 1 / k),
					  (R *= k),
					  (L *= k),
					  (i = Math.sin(r)),
					  (s = 1 - (o = Math.cos(r))),
					  (a = e[0]),
					  (u = e[1]),
					  (l = e[2]),
					  (c = e[3]),
					  (f = e[4]),
					  (h = e[5]),
					  (p = e[6]),
					  (g = e[7]),
					  (m = e[8]),
					  (v = e[9]),
					  (y = e[10]),
					  (b = e[11]),
					  (x = C * C * s + o),
					  (w = R * C * s + L * i),
					  (M = L * C * s - R * i),
					  (S = C * R * s - L * i),
					  (A = R * R * s + o),
					  (_ = L * R * s + C * i),
					  (T = C * L * s + R * i),
					  (E = R * L * s - C * i),
					  (O = L * L * s + o),
					  (t[0] = a * x + f * w + m * M),
					  (t[1] = u * x + h * w + v * M),
					  (t[2] = l * x + p * w + y * M),
					  (t[3] = c * x + g * w + b * M),
					  (t[4] = a * S + f * A + m * _),
					  (t[5] = u * S + h * A + v * _),
					  (t[6] = l * S + p * A + y * _),
					  (t[7] = c * S + g * A + b * _),
					  (t[8] = a * T + f * E + m * O),
					  (t[9] = u * T + h * E + v * O),
					  (t[10] = l * T + p * E + y * O),
					  (t[11] = c * T + g * E + b * O),
					  e !== t && ((t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])),
					  t);
			}
			function le(t, e, r) {
				var n = Math.sin(r),
					i = Math.cos(r),
					o = e[4],
					s = e[5],
					a = e[6],
					u = e[7],
					l = e[8],
					c = e[9],
					f = e[10],
					h = e[11];
				return (
					e !== t &&
						((t[0] = e[0]),
						(t[1] = e[1]),
						(t[2] = e[2]),
						(t[3] = e[3]),
						(t[12] = e[12]),
						(t[13] = e[13]),
						(t[14] = e[14]),
						(t[15] = e[15])),
					(t[4] = o * i + l * n),
					(t[5] = s * i + c * n),
					(t[6] = a * i + f * n),
					(t[7] = u * i + h * n),
					(t[8] = l * i - o * n),
					(t[9] = c * i - s * n),
					(t[10] = f * i - a * n),
					(t[11] = h * i - u * n),
					t
				);
			}
			function ce(t, e, r) {
				var n = Math.sin(r),
					i = Math.cos(r),
					o = e[0],
					s = e[1],
					a = e[2],
					u = e[3],
					l = e[8],
					c = e[9],
					f = e[10],
					h = e[11];
				return (
					e !== t &&
						((t[4] = e[4]),
						(t[5] = e[5]),
						(t[6] = e[6]),
						(t[7] = e[7]),
						(t[12] = e[12]),
						(t[13] = e[13]),
						(t[14] = e[14]),
						(t[15] = e[15])),
					(t[0] = o * i - l * n),
					(t[1] = s * i - c * n),
					(t[2] = a * i - f * n),
					(t[3] = u * i - h * n),
					(t[8] = o * n + l * i),
					(t[9] = s * n + c * i),
					(t[10] = a * n + f * i),
					(t[11] = u * n + h * i),
					t
				);
			}
			function fe(t, e, r) {
				var n = Math.sin(r),
					i = Math.cos(r),
					o = e[0],
					s = e[1],
					a = e[2],
					u = e[3],
					l = e[4],
					c = e[5],
					f = e[6],
					h = e[7];
				return (
					e !== t &&
						((t[8] = e[8]),
						(t[9] = e[9]),
						(t[10] = e[10]),
						(t[11] = e[11]),
						(t[12] = e[12]),
						(t[13] = e[13]),
						(t[14] = e[14]),
						(t[15] = e[15])),
					(t[0] = o * i + l * n),
					(t[1] = s * i + c * n),
					(t[2] = a * i + f * n),
					(t[3] = u * i + h * n),
					(t[4] = l * i - o * n),
					(t[5] = c * i - s * n),
					(t[6] = f * i - a * n),
					(t[7] = h * i - u * n),
					t
				);
			}
			function he(t, e) {
				return (
					(t[0] = 1),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = 1),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = 0),
					(t[10] = 1),
					(t[11] = 0),
					(t[12] = e[0]),
					(t[13] = e[1]),
					(t[14] = e[2]),
					(t[15] = 1),
					t
				);
			}
			function de(t, e) {
				return (
					(t[0] = e[0]),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = e[1]),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = 0),
					(t[10] = e[2]),
					(t[11] = 0),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = 0),
					(t[15] = 1),
					t
				);
			}
			function pe(t, e, r) {
				var n,
					i,
					o,
					s = r[0],
					a = r[1],
					u = r[2],
					l = Math.hypot(s, a, u);
				return l < d
					? null
					: ((s *= l = 1 / l),
					  (a *= l),
					  (u *= l),
					  (n = Math.sin(e)),
					  (o = 1 - (i = Math.cos(e))),
					  (t[0] = s * s * o + i),
					  (t[1] = a * s * o + u * n),
					  (t[2] = u * s * o - a * n),
					  (t[3] = 0),
					  (t[4] = s * a * o - u * n),
					  (t[5] = a * a * o + i),
					  (t[6] = u * a * o + s * n),
					  (t[7] = 0),
					  (t[8] = s * u * o + a * n),
					  (t[9] = a * u * o - s * n),
					  (t[10] = u * u * o + i),
					  (t[11] = 0),
					  (t[12] = 0),
					  (t[13] = 0),
					  (t[14] = 0),
					  (t[15] = 1),
					  t);
			}
			function ge(t, e) {
				var r = Math.sin(e),
					n = Math.cos(e);
				return (
					(t[0] = 1),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = n),
					(t[6] = r),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = -r),
					(t[10] = n),
					(t[11] = 0),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = 0),
					(t[15] = 1),
					t
				);
			}
			function me(t, e) {
				var r = Math.sin(e),
					n = Math.cos(e);
				return (
					(t[0] = n),
					(t[1] = 0),
					(t[2] = -r),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = 1),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = r),
					(t[9] = 0),
					(t[10] = n),
					(t[11] = 0),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = 0),
					(t[15] = 1),
					t
				);
			}
			function ve(t, e) {
				var r = Math.sin(e),
					n = Math.cos(e);
				return (
					(t[0] = n),
					(t[1] = r),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = -r),
					(t[5] = n),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = 0),
					(t[10] = 1),
					(t[11] = 0),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = 0),
					(t[15] = 1),
					t
				);
			}
			function ye(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = n + n,
					u = i + i,
					l = o + o,
					c = n * a,
					f = n * u,
					h = n * l,
					d = i * u,
					p = i * l,
					g = o * l,
					m = s * a,
					v = s * u,
					y = s * l;
				return (
					(t[0] = 1 - (d + g)),
					(t[1] = f + y),
					(t[2] = h - v),
					(t[3] = 0),
					(t[4] = f - y),
					(t[5] = 1 - (c + g)),
					(t[6] = p + m),
					(t[7] = 0),
					(t[8] = h + v),
					(t[9] = p - m),
					(t[10] = 1 - (c + d)),
					(t[11] = 0),
					(t[12] = r[0]),
					(t[13] = r[1]),
					(t[14] = r[2]),
					(t[15] = 1),
					t
				);
			}
			function be(t, e) {
				var r = new p(3),
					n = -e[0],
					i = -e[1],
					o = -e[2],
					s = e[3],
					a = e[4],
					u = e[5],
					l = e[6],
					c = e[7],
					f = n * n + i * i + o * o + s * s;
				return (
					f > 0
						? ((r[0] = (2 * (a * s + c * n + u * o - l * i)) / f),
						  (r[1] = (2 * (u * s + c * i + l * n - a * o)) / f),
						  (r[2] = (2 * (l * s + c * o + a * i - u * n)) / f))
						: ((r[0] = 2 * (a * s + c * n + u * o - l * i)),
						  (r[1] = 2 * (u * s + c * i + l * n - a * o)),
						  (r[2] = 2 * (l * s + c * o + a * i - u * n))),
					ye(t, e, r),
					t
				);
			}
			function xe(t, e) {
				return (t[0] = e[12]), (t[1] = e[13]), (t[2] = e[14]), t;
			}
			function we(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[4],
					s = e[5],
					a = e[6],
					u = e[8],
					l = e[9],
					c = e[10];
				return (t[0] = Math.hypot(r, n, i)), (t[1] = Math.hypot(o, s, a)), (t[2] = Math.hypot(u, l, c)), t;
			}
			function Me(t, e) {
				var r = new p(3);
				we(r, e);
				var n = 1 / r[0],
					i = 1 / r[1],
					o = 1 / r[2],
					s = e[0] * n,
					a = e[1] * i,
					u = e[2] * o,
					l = e[4] * n,
					c = e[5] * i,
					f = e[6] * o,
					h = e[8] * n,
					d = e[9] * i,
					g = e[10] * o,
					m = s + c + g,
					v = 0;
				return (
					m > 0
						? ((v = 2 * Math.sqrt(m + 1)),
						  (t[3] = 0.25 * v),
						  (t[0] = (f - d) / v),
						  (t[1] = (h - u) / v),
						  (t[2] = (a - l) / v))
						: s > c && s > g
						? ((v = 2 * Math.sqrt(1 + s - c - g)),
						  (t[3] = (f - d) / v),
						  (t[0] = 0.25 * v),
						  (t[1] = (a + l) / v),
						  (t[2] = (h + u) / v))
						: c > g
						? ((v = 2 * Math.sqrt(1 + c - s - g)),
						  (t[3] = (h - u) / v),
						  (t[0] = (a + l) / v),
						  (t[1] = 0.25 * v),
						  (t[2] = (f + d) / v))
						: ((v = 2 * Math.sqrt(1 + g - s - c)),
						  (t[3] = (a - l) / v),
						  (t[0] = (h + u) / v),
						  (t[1] = (f + d) / v),
						  (t[2] = 0.25 * v)),
					t
				);
			}
			function Se(t, e, r, n) {
				var i = e[0],
					o = e[1],
					s = e[2],
					a = e[3],
					u = i + i,
					l = o + o,
					c = s + s,
					f = i * u,
					h = i * l,
					d = i * c,
					p = o * l,
					g = o * c,
					m = s * c,
					v = a * u,
					y = a * l,
					b = a * c,
					x = n[0],
					w = n[1],
					M = n[2];
				return (
					(t[0] = (1 - (p + m)) * x),
					(t[1] = (h + b) * x),
					(t[2] = (d - y) * x),
					(t[3] = 0),
					(t[4] = (h - b) * w),
					(t[5] = (1 - (f + m)) * w),
					(t[6] = (g + v) * w),
					(t[7] = 0),
					(t[8] = (d + y) * M),
					(t[9] = (g - v) * M),
					(t[10] = (1 - (f + p)) * M),
					(t[11] = 0),
					(t[12] = r[0]),
					(t[13] = r[1]),
					(t[14] = r[2]),
					(t[15] = 1),
					t
				);
			}
			function Ae(t, e, r, n, i) {
				var o = e[0],
					s = e[1],
					a = e[2],
					u = e[3],
					l = o + o,
					c = s + s,
					f = a + a,
					h = o * l,
					d = o * c,
					p = o * f,
					g = s * c,
					m = s * f,
					v = a * f,
					y = u * l,
					b = u * c,
					x = u * f,
					w = n[0],
					M = n[1],
					S = n[2],
					A = i[0],
					_ = i[1],
					T = i[2],
					E = (1 - (g + v)) * w,
					O = (d + x) * w,
					C = (p - b) * w,
					R = (d - x) * M,
					L = (1 - (h + v)) * M,
					k = (m + y) * M,
					D = (p + b) * S,
					j = (m - y) * S,
					P = (1 - (h + g)) * S;
				return (
					(t[0] = E),
					(t[1] = O),
					(t[2] = C),
					(t[3] = 0),
					(t[4] = R),
					(t[5] = L),
					(t[6] = k),
					(t[7] = 0),
					(t[8] = D),
					(t[9] = j),
					(t[10] = P),
					(t[11] = 0),
					(t[12] = r[0] + A - (E * A + R * _ + D * T)),
					(t[13] = r[1] + _ - (O * A + L * _ + j * T)),
					(t[14] = r[2] + T - (C * A + k * _ + P * T)),
					(t[15] = 1),
					t
				);
			}
			function _e(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[3],
					s = r + r,
					a = n + n,
					u = i + i,
					l = r * s,
					c = n * s,
					f = n * a,
					h = i * s,
					d = i * a,
					p = i * u,
					g = o * s,
					m = o * a,
					v = o * u;
				return (
					(t[0] = 1 - f - p),
					(t[1] = c + v),
					(t[2] = h - m),
					(t[3] = 0),
					(t[4] = c - v),
					(t[5] = 1 - l - p),
					(t[6] = d + g),
					(t[7] = 0),
					(t[8] = h + m),
					(t[9] = d - g),
					(t[10] = 1 - l - f),
					(t[11] = 0),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = 0),
					(t[15] = 1),
					t
				);
			}
			function Te(t, e, r, n, i, o, s) {
				var a = 1 / (r - e),
					u = 1 / (i - n),
					l = 1 / (o - s);
				return (
					(t[0] = 2 * o * a),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = 2 * o * u),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = (r + e) * a),
					(t[9] = (i + n) * u),
					(t[10] = (s + o) * l),
					(t[11] = -1),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = s * o * 2 * l),
					(t[15] = 0),
					t
				);
			}
			function Ee(t, e, r, n, i) {
				var o,
					s = 1 / Math.tan(e / 2);
				return (
					(t[0] = s / r),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = s),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = 0),
					(t[11] = -1),
					(t[12] = 0),
					(t[13] = 0),
					(t[15] = 0),
					null != i && i !== 1 / 0
						? ((o = 1 / (n - i)), (t[10] = (i + n) * o), (t[14] = 2 * i * n * o))
						: ((t[10] = -1), (t[14] = -2 * n)),
					t
				);
			}
			function Oe(t, e, r, n) {
				var i = Math.tan((e.upDegrees * Math.PI) / 180),
					o = Math.tan((e.downDegrees * Math.PI) / 180),
					s = Math.tan((e.leftDegrees * Math.PI) / 180),
					a = Math.tan((e.rightDegrees * Math.PI) / 180),
					u = 2 / (s + a),
					l = 2 / (i + o);
				return (
					(t[0] = u),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = l),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = -(s - a) * u * 0.5),
					(t[9] = (i - o) * l * 0.5),
					(t[10] = n / (r - n)),
					(t[11] = -1),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = (n * r) / (r - n)),
					(t[15] = 0),
					t
				);
			}
			function Ce(t, e, r, n, i, o, s) {
				var a = 1 / (e - r),
					u = 1 / (n - i),
					l = 1 / (o - s);
				return (
					(t[0] = -2 * a),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = -2 * u),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = 0),
					(t[10] = 2 * l),
					(t[11] = 0),
					(t[12] = (e + r) * a),
					(t[13] = (i + n) * u),
					(t[14] = (s + o) * l),
					(t[15] = 1),
					t
				);
			}
			function Re(t, e, r, n) {
				var i,
					o,
					s,
					a,
					u,
					l,
					c,
					f,
					h,
					p,
					g = e[0],
					m = e[1],
					v = e[2],
					y = n[0],
					b = n[1],
					x = n[2],
					w = r[0],
					M = r[1],
					S = r[2];
				return Math.abs(g - w) < d && Math.abs(m - M) < d && Math.abs(v - S) < d
					? te(t)
					: ((c = g - w),
					  (f = m - M),
					  (h = v - S),
					  (i = b * (h *= p = 1 / Math.hypot(c, f, h)) - x * (f *= p)),
					  (o = x * (c *= p) - y * h),
					  (s = y * f - b * c),
					  (p = Math.hypot(i, o, s)) ? ((i *= p = 1 / p), (o *= p), (s *= p)) : ((i = 0), (o = 0), (s = 0)),
					  (a = f * s - h * o),
					  (u = h * i - c * s),
					  (l = c * o - f * i),
					  (p = Math.hypot(a, u, l)) ? ((a *= p = 1 / p), (u *= p), (l *= p)) : ((a = 0), (u = 0), (l = 0)),
					  (t[0] = i),
					  (t[1] = a),
					  (t[2] = c),
					  (t[3] = 0),
					  (t[4] = o),
					  (t[5] = u),
					  (t[6] = f),
					  (t[7] = 0),
					  (t[8] = s),
					  (t[9] = l),
					  (t[10] = h),
					  (t[11] = 0),
					  (t[12] = -(i * g + o * m + s * v)),
					  (t[13] = -(a * g + u * m + l * v)),
					  (t[14] = -(c * g + f * m + h * v)),
					  (t[15] = 1),
					  t);
			}
			function Le(t, e, r, n) {
				var i = e[0],
					o = e[1],
					s = e[2],
					a = n[0],
					u = n[1],
					l = n[2],
					c = i - r[0],
					f = o - r[1],
					h = s - r[2],
					d = c * c + f * f + h * h;
				d > 0 && ((c *= d = 1 / Math.sqrt(d)), (f *= d), (h *= d));
				var p = u * h - l * f,
					g = l * c - a * h,
					m = a * f - u * c;
				return (
					(d = p * p + g * g + m * m) > 0 && ((p *= d = 1 / Math.sqrt(d)), (g *= d), (m *= d)),
					(t[0] = p),
					(t[1] = g),
					(t[2] = m),
					(t[3] = 0),
					(t[4] = f * m - h * g),
					(t[5] = h * p - c * m),
					(t[6] = c * g - f * p),
					(t[7] = 0),
					(t[8] = c),
					(t[9] = f),
					(t[10] = h),
					(t[11] = 0),
					(t[12] = i),
					(t[13] = o),
					(t[14] = s),
					(t[15] = 1),
					t
				);
			}
			function ke(t) {
				return (
					'mat4(' +
					t[0] +
					', ' +
					t[1] +
					', ' +
					t[2] +
					', ' +
					t[3] +
					', ' +
					t[4] +
					', ' +
					t[5] +
					', ' +
					t[6] +
					', ' +
					t[7] +
					', ' +
					t[8] +
					', ' +
					t[9] +
					', ' +
					t[10] +
					', ' +
					t[11] +
					', ' +
					t[12] +
					', ' +
					t[13] +
					', ' +
					t[14] +
					', ' +
					t[15] +
					')'
				);
			}
			function De(t) {
				return Math.hypot(
					t[0],
					t[1],
					t[3],
					t[4],
					t[5],
					t[6],
					t[7],
					t[8],
					t[9],
					t[10],
					t[11],
					t[12],
					t[13],
					t[14],
					t[15],
				);
			}
			function je(t, e, r) {
				return (
					(t[0] = e[0] + r[0]),
					(t[1] = e[1] + r[1]),
					(t[2] = e[2] + r[2]),
					(t[3] = e[3] + r[3]),
					(t[4] = e[4] + r[4]),
					(t[5] = e[5] + r[5]),
					(t[6] = e[6] + r[6]),
					(t[7] = e[7] + r[7]),
					(t[8] = e[8] + r[8]),
					(t[9] = e[9] + r[9]),
					(t[10] = e[10] + r[10]),
					(t[11] = e[11] + r[11]),
					(t[12] = e[12] + r[12]),
					(t[13] = e[13] + r[13]),
					(t[14] = e[14] + r[14]),
					(t[15] = e[15] + r[15]),
					t
				);
			}
			function Pe(t, e, r) {
				return (
					(t[0] = e[0] - r[0]),
					(t[1] = e[1] - r[1]),
					(t[2] = e[2] - r[2]),
					(t[3] = e[3] - r[3]),
					(t[4] = e[4] - r[4]),
					(t[5] = e[5] - r[5]),
					(t[6] = e[6] - r[6]),
					(t[7] = e[7] - r[7]),
					(t[8] = e[8] - r[8]),
					(t[9] = e[9] - r[9]),
					(t[10] = e[10] - r[10]),
					(t[11] = e[11] - r[11]),
					(t[12] = e[12] - r[12]),
					(t[13] = e[13] - r[13]),
					(t[14] = e[14] - r[14]),
					(t[15] = e[15] - r[15]),
					t
				);
			}
			function qe(t, e, r) {
				return (
					(t[0] = e[0] * r),
					(t[1] = e[1] * r),
					(t[2] = e[2] * r),
					(t[3] = e[3] * r),
					(t[4] = e[4] * r),
					(t[5] = e[5] * r),
					(t[6] = e[6] * r),
					(t[7] = e[7] * r),
					(t[8] = e[8] * r),
					(t[9] = e[9] * r),
					(t[10] = e[10] * r),
					(t[11] = e[11] * r),
					(t[12] = e[12] * r),
					(t[13] = e[13] * r),
					(t[14] = e[14] * r),
					(t[15] = e[15] * r),
					t
				);
			}
			function Ie(t, e, r, n) {
				return (
					(t[0] = e[0] + r[0] * n),
					(t[1] = e[1] + r[1] * n),
					(t[2] = e[2] + r[2] * n),
					(t[3] = e[3] + r[3] * n),
					(t[4] = e[4] + r[4] * n),
					(t[5] = e[5] + r[5] * n),
					(t[6] = e[6] + r[6] * n),
					(t[7] = e[7] + r[7] * n),
					(t[8] = e[8] + r[8] * n),
					(t[9] = e[9] + r[9] * n),
					(t[10] = e[10] + r[10] * n),
					(t[11] = e[11] + r[11] * n),
					(t[12] = e[12] + r[12] * n),
					(t[13] = e[13] + r[13] * n),
					(t[14] = e[14] + r[14] * n),
					(t[15] = e[15] + r[15] * n),
					t
				);
			}
			function Ne(t, e) {
				return (
					t[0] === e[0] &&
					t[1] === e[1] &&
					t[2] === e[2] &&
					t[3] === e[3] &&
					t[4] === e[4] &&
					t[5] === e[5] &&
					t[6] === e[6] &&
					t[7] === e[7] &&
					t[8] === e[8] &&
					t[9] === e[9] &&
					t[10] === e[10] &&
					t[11] === e[11] &&
					t[12] === e[12] &&
					t[13] === e[13] &&
					t[14] === e[14] &&
					t[15] === e[15]
				);
			}
			function Fe(t, e) {
				var r = t[0],
					n = t[1],
					i = t[2],
					o = t[3],
					s = t[4],
					a = t[5],
					u = t[6],
					l = t[7],
					c = t[8],
					f = t[9],
					h = t[10],
					p = t[11],
					g = t[12],
					m = t[13],
					v = t[14],
					y = t[15],
					b = e[0],
					x = e[1],
					w = e[2],
					M = e[3],
					S = e[4],
					A = e[5],
					_ = e[6],
					T = e[7],
					E = e[8],
					O = e[9],
					C = e[10],
					R = e[11],
					L = e[12],
					k = e[13],
					D = e[14],
					j = e[15];
				return (
					Math.abs(r - b) <= d * Math.max(1, Math.abs(r), Math.abs(b)) &&
					Math.abs(n - x) <= d * Math.max(1, Math.abs(n), Math.abs(x)) &&
					Math.abs(i - w) <= d * Math.max(1, Math.abs(i), Math.abs(w)) &&
					Math.abs(o - M) <= d * Math.max(1, Math.abs(o), Math.abs(M)) &&
					Math.abs(s - S) <= d * Math.max(1, Math.abs(s), Math.abs(S)) &&
					Math.abs(a - A) <= d * Math.max(1, Math.abs(a), Math.abs(A)) &&
					Math.abs(u - _) <= d * Math.max(1, Math.abs(u), Math.abs(_)) &&
					Math.abs(l - T) <= d * Math.max(1, Math.abs(l), Math.abs(T)) &&
					Math.abs(c - E) <= d * Math.max(1, Math.abs(c), Math.abs(E)) &&
					Math.abs(f - O) <= d * Math.max(1, Math.abs(f), Math.abs(O)) &&
					Math.abs(h - C) <= d * Math.max(1, Math.abs(h), Math.abs(C)) &&
					Math.abs(p - R) <= d * Math.max(1, Math.abs(p), Math.abs(R)) &&
					Math.abs(g - L) <= d * Math.max(1, Math.abs(g), Math.abs(L)) &&
					Math.abs(m - k) <= d * Math.max(1, Math.abs(m), Math.abs(k)) &&
					Math.abs(v - D) <= d * Math.max(1, Math.abs(v), Math.abs(D)) &&
					Math.abs(y - j) <= d * Math.max(1, Math.abs(y), Math.abs(j))
				);
			}
			var Ue = oe,
				Be = Pe;
			function ze() {
				var t = new p(3);
				return p != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t;
			}
			function Ge(t) {
				var e = new p(3);
				return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
			}
			function Ve(t) {
				var e = t[0],
					r = t[1],
					n = t[2];
				return Math.hypot(e, r, n);
			}
			function He(t, e, r) {
				var n = new p(3);
				return (n[0] = t), (n[1] = e), (n[2] = r), n;
			}
			function $e(t, e) {
				return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
			}
			function We(t, e, r, n) {
				return (t[0] = e), (t[1] = r), (t[2] = n), t;
			}
			function Ye(t, e, r) {
				return (t[0] = e[0] + r[0]), (t[1] = e[1] + r[1]), (t[2] = e[2] + r[2]), t;
			}
			function Xe(t, e, r) {
				return (t[0] = e[0] - r[0]), (t[1] = e[1] - r[1]), (t[2] = e[2] - r[2]), t;
			}
			function Je(t, e, r) {
				return (t[0] = e[0] * r[0]), (t[1] = e[1] * r[1]), (t[2] = e[2] * r[2]), t;
			}
			function Qe(t, e, r) {
				return (t[0] = e[0] / r[0]), (t[1] = e[1] / r[1]), (t[2] = e[2] / r[2]), t;
			}
			function Ze(t, e) {
				return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), (t[2] = Math.ceil(e[2])), t;
			}
			function Ke(t, e) {
				return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), (t[2] = Math.floor(e[2])), t;
			}
			function tr(t, e, r) {
				return (t[0] = Math.min(e[0], r[0])), (t[1] = Math.min(e[1], r[1])), (t[2] = Math.min(e[2], r[2])), t;
			}
			function er(t, e, r) {
				return (t[0] = Math.max(e[0], r[0])), (t[1] = Math.max(e[1], r[1])), (t[2] = Math.max(e[2], r[2])), t;
			}
			function rr(t, e) {
				return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), (t[2] = Math.round(e[2])), t;
			}
			function nr(t, e, r) {
				return (t[0] = e[0] * r), (t[1] = e[1] * r), (t[2] = e[2] * r), t;
			}
			function ir(t, e, r, n) {
				return (t[0] = e[0] + r[0] * n), (t[1] = e[1] + r[1] * n), (t[2] = e[2] + r[2] * n), t;
			}
			function or(t, e) {
				var r = e[0] - t[0],
					n = e[1] - t[1],
					i = e[2] - t[2];
				return Math.hypot(r, n, i);
			}
			function sr(t, e) {
				var r = e[0] - t[0],
					n = e[1] - t[1],
					i = e[2] - t[2];
				return r * r + n * n + i * i;
			}
			function ar(t) {
				var e = t[0],
					r = t[1],
					n = t[2];
				return e * e + r * r + n * n;
			}
			function ur(t, e) {
				return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
			}
			function lr(t, e) {
				return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t;
			}
			function cr(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = r * r + n * n + i * i;
				return o > 0 && (o = 1 / Math.sqrt(o)), (t[0] = e[0] * o), (t[1] = e[1] * o), (t[2] = e[2] * o), t;
			}
			function fr(t, e) {
				return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
			}
			function hr(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = r[0],
					a = r[1],
					u = r[2];
				return (t[0] = i * u - o * a), (t[1] = o * s - n * u), (t[2] = n * a - i * s), t;
			}
			function dr(t, e, r, n) {
				var i = e[0],
					o = e[1],
					s = e[2];
				return (t[0] = i + n * (r[0] - i)), (t[1] = o + n * (r[1] - o)), (t[2] = s + n * (r[2] - s)), t;
			}
			function pr(t, e, r, n, i, o) {
				var s = o * o,
					a = s * (2 * o - 3) + 1,
					u = s * (o - 2) + o,
					l = s * (o - 1),
					c = s * (3 - 2 * o);
				return (
					(t[0] = e[0] * a + r[0] * u + n[0] * l + i[0] * c),
					(t[1] = e[1] * a + r[1] * u + n[1] * l + i[1] * c),
					(t[2] = e[2] * a + r[2] * u + n[2] * l + i[2] * c),
					t
				);
			}
			function gr(t, e, r, n, i, o) {
				var s = 1 - o,
					a = s * s,
					u = o * o,
					l = a * s,
					c = 3 * o * a,
					f = 3 * u * s,
					h = u * o;
				return (
					(t[0] = e[0] * l + r[0] * c + n[0] * f + i[0] * h),
					(t[1] = e[1] * l + r[1] * c + n[1] * f + i[1] * h),
					(t[2] = e[2] * l + r[2] * c + n[2] * f + i[2] * h),
					t
				);
			}
			function mr(t, e) {
				e = e || 1;
				var r = 2 * g() * Math.PI,
					n = 2 * g() - 1,
					i = Math.sqrt(1 - n * n) * e;
				return (t[0] = Math.cos(r) * i), (t[1] = Math.sin(r) * i), (t[2] = n * e), t;
			}
			function vr(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = r[3] * n + r[7] * i + r[11] * o + r[15];
				return (
					(s = s || 1),
					(t[0] = (r[0] * n + r[4] * i + r[8] * o + r[12]) / s),
					(t[1] = (r[1] * n + r[5] * i + r[9] * o + r[13]) / s),
					(t[2] = (r[2] * n + r[6] * i + r[10] * o + r[14]) / s),
					t
				);
			}
			function yr(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2];
				return (
					(t[0] = n * r[0] + i * r[3] + o * r[6]),
					(t[1] = n * r[1] + i * r[4] + o * r[7]),
					(t[2] = n * r[2] + i * r[5] + o * r[8]),
					t
				);
			}
			function br(t, e, r) {
				var n = r[0],
					i = r[1],
					o = r[2],
					s = r[3],
					a = e[0],
					u = e[1],
					l = e[2],
					c = i * l - o * u,
					f = o * a - n * l,
					h = n * u - i * a,
					d = i * h - o * f,
					p = o * c - n * h,
					g = n * f - i * c,
					m = 2 * s;
				return (
					(c *= m),
					(f *= m),
					(h *= m),
					(d *= 2),
					(p *= 2),
					(g *= 2),
					(t[0] = a + c + d),
					(t[1] = u + f + p),
					(t[2] = l + h + g),
					t
				);
			}
			function xr(t, e, r, n) {
				var i = [],
					o = [];
				return (
					(i[0] = e[0] - r[0]),
					(i[1] = e[1] - r[1]),
					(i[2] = e[2] - r[2]),
					(o[0] = i[0]),
					(o[1] = i[1] * Math.cos(n) - i[2] * Math.sin(n)),
					(o[2] = i[1] * Math.sin(n) + i[2] * Math.cos(n)),
					(t[0] = o[0] + r[0]),
					(t[1] = o[1] + r[1]),
					(t[2] = o[2] + r[2]),
					t
				);
			}
			function wr(t, e, r, n) {
				var i = [],
					o = [];
				return (
					(i[0] = e[0] - r[0]),
					(i[1] = e[1] - r[1]),
					(i[2] = e[2] - r[2]),
					(o[0] = i[2] * Math.sin(n) + i[0] * Math.cos(n)),
					(o[1] = i[1]),
					(o[2] = i[2] * Math.cos(n) - i[0] * Math.sin(n)),
					(t[0] = o[0] + r[0]),
					(t[1] = o[1] + r[1]),
					(t[2] = o[2] + r[2]),
					t
				);
			}
			function Mr(t, e, r, n) {
				var i = [],
					o = [];
				return (
					(i[0] = e[0] - r[0]),
					(i[1] = e[1] - r[1]),
					(i[2] = e[2] - r[2]),
					(o[0] = i[0] * Math.cos(n) - i[1] * Math.sin(n)),
					(o[1] = i[0] * Math.sin(n) + i[1] * Math.cos(n)),
					(o[2] = i[2]),
					(t[0] = o[0] + r[0]),
					(t[1] = o[1] + r[1]),
					(t[2] = o[2] + r[2]),
					t
				);
			}
			function Sr(t, e) {
				var r = He(t[0], t[1], t[2]),
					n = He(e[0], e[1], e[2]);
				cr(r, r), cr(n, n);
				var i = fr(r, n);
				return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i);
			}
			function Ar(t) {
				return (t[0] = 0), (t[1] = 0), (t[2] = 0), t;
			}
			function _r(t) {
				return 'vec3(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')';
			}
			function Tr(t, e) {
				return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
			}
			function Er(t, e) {
				var r = t[0],
					n = t[1],
					i = t[2],
					o = e[0],
					s = e[1],
					a = e[2];
				return (
					Math.abs(r - o) <= d * Math.max(1, Math.abs(r), Math.abs(o)) &&
					Math.abs(n - s) <= d * Math.max(1, Math.abs(n), Math.abs(s)) &&
					Math.abs(i - a) <= d * Math.max(1, Math.abs(i), Math.abs(a))
				);
			}
			var Or,
				Cr = Xe,
				Rr = Je,
				Lr = Qe,
				kr = or,
				Dr = sr,
				jr = Ve,
				Pr = ar,
				qr =
					((Or = ze()),
					function (t, e, r, n, i, o) {
						var s, a;
						for (
							e || (e = 3), r || (r = 0), a = n ? Math.min(n * e + r, t.length) : t.length, s = r;
							s < a;
							s += e
						)
							(Or[0] = t[s]),
								(Or[1] = t[s + 1]),
								(Or[2] = t[s + 2]),
								i(Or, Or, o),
								(t[s] = Or[0]),
								(t[s + 1] = Or[1]),
								(t[s + 2] = Or[2]);
						return t;
					});
			function Ir() {
				var t = new p(4);
				return p != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0)), t;
			}
			function Nr(t) {
				var e = new p(4);
				return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
			}
			function Fr(t, e, r, n) {
				var i = new p(4);
				return (i[0] = t), (i[1] = e), (i[2] = r), (i[3] = n), i;
			}
			function Ur(t, e) {
				return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
			}
			function Br(t, e, r, n, i) {
				return (t[0] = e), (t[1] = r), (t[2] = n), (t[3] = i), t;
			}
			function zr(t, e, r) {
				return (t[0] = e[0] + r[0]), (t[1] = e[1] + r[1]), (t[2] = e[2] + r[2]), (t[3] = e[3] + r[3]), t;
			}
			function Gr(t, e, r) {
				return (t[0] = e[0] - r[0]), (t[1] = e[1] - r[1]), (t[2] = e[2] - r[2]), (t[3] = e[3] - r[3]), t;
			}
			function Vr(t, e, r) {
				return (t[0] = e[0] * r[0]), (t[1] = e[1] * r[1]), (t[2] = e[2] * r[2]), (t[3] = e[3] * r[3]), t;
			}
			function Hr(t, e, r) {
				return (t[0] = e[0] / r[0]), (t[1] = e[1] / r[1]), (t[2] = e[2] / r[2]), (t[3] = e[3] / r[3]), t;
			}
			function $r(t, e) {
				return (
					(t[0] = Math.ceil(e[0])),
					(t[1] = Math.ceil(e[1])),
					(t[2] = Math.ceil(e[2])),
					(t[3] = Math.ceil(e[3])),
					t
				);
			}
			function Wr(t, e) {
				return (
					(t[0] = Math.floor(e[0])),
					(t[1] = Math.floor(e[1])),
					(t[2] = Math.floor(e[2])),
					(t[3] = Math.floor(e[3])),
					t
				);
			}
			function Yr(t, e, r) {
				return (
					(t[0] = Math.min(e[0], r[0])),
					(t[1] = Math.min(e[1], r[1])),
					(t[2] = Math.min(e[2], r[2])),
					(t[3] = Math.min(e[3], r[3])),
					t
				);
			}
			function Xr(t, e, r) {
				return (
					(t[0] = Math.max(e[0], r[0])),
					(t[1] = Math.max(e[1], r[1])),
					(t[2] = Math.max(e[2], r[2])),
					(t[3] = Math.max(e[3], r[3])),
					t
				);
			}
			function Jr(t, e) {
				return (
					(t[0] = Math.round(e[0])),
					(t[1] = Math.round(e[1])),
					(t[2] = Math.round(e[2])),
					(t[3] = Math.round(e[3])),
					t
				);
			}
			function Qr(t, e, r) {
				return (t[0] = e[0] * r), (t[1] = e[1] * r), (t[2] = e[2] * r), (t[3] = e[3] * r), t;
			}
			function Zr(t, e, r, n) {
				return (
					(t[0] = e[0] + r[0] * n),
					(t[1] = e[1] + r[1] * n),
					(t[2] = e[2] + r[2] * n),
					(t[3] = e[3] + r[3] * n),
					t
				);
			}
			function Kr(t, e) {
				var r = e[0] - t[0],
					n = e[1] - t[1],
					i = e[2] - t[2],
					o = e[3] - t[3];
				return Math.hypot(r, n, i, o);
			}
			function tn(t, e) {
				var r = e[0] - t[0],
					n = e[1] - t[1],
					i = e[2] - t[2],
					o = e[3] - t[3];
				return r * r + n * n + i * i + o * o;
			}
			function en(t) {
				var e = t[0],
					r = t[1],
					n = t[2],
					i = t[3];
				return Math.hypot(e, r, n, i);
			}
			function rn(t) {
				var e = t[0],
					r = t[1],
					n = t[2],
					i = t[3];
				return e * e + r * r + n * n + i * i;
			}
			function nn(t, e) {
				return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = -e[3]), t;
			}
			function on(t, e) {
				return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), (t[3] = 1 / e[3]), t;
			}
			function sn(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[3],
					s = r * r + n * n + i * i + o * o;
				return (
					s > 0 && (s = 1 / Math.sqrt(s)), (t[0] = r * s), (t[1] = n * s), (t[2] = i * s), (t[3] = o * s), t
				);
			}
			function an(t, e) {
				return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
			}
			function un(t, e, r, n) {
				var i = r[0] * n[1] - r[1] * n[0],
					o = r[0] * n[2] - r[2] * n[0],
					s = r[0] * n[3] - r[3] * n[0],
					a = r[1] * n[2] - r[2] * n[1],
					u = r[1] * n[3] - r[3] * n[1],
					l = r[2] * n[3] - r[3] * n[2],
					c = e[0],
					f = e[1],
					h = e[2],
					d = e[3];
				return (
					(t[0] = f * l - h * u + d * a),
					(t[1] = -c * l + h * s - d * o),
					(t[2] = c * u - f * s + d * i),
					(t[3] = -c * a + f * o - h * i),
					t
				);
			}
			function ln(t, e, r, n) {
				var i = e[0],
					o = e[1],
					s = e[2],
					a = e[3];
				return (
					(t[0] = i + n * (r[0] - i)),
					(t[1] = o + n * (r[1] - o)),
					(t[2] = s + n * (r[2] - s)),
					(t[3] = a + n * (r[3] - a)),
					t
				);
			}
			function cn(t, e) {
				var r, n, i, o, s, a;
				e = e || 1;
				do {
					s = (r = 2 * g() - 1) * r + (n = 2 * g() - 1) * n;
				} while (s >= 1);
				do {
					a = (i = 2 * g() - 1) * i + (o = 2 * g() - 1) * o;
				} while (a >= 1);
				var u = Math.sqrt((1 - s) / a);
				return (t[0] = e * r), (t[1] = e * n), (t[2] = e * i * u), (t[3] = e * o * u), t;
			}
			function fn(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3];
				return (
					(t[0] = r[0] * n + r[4] * i + r[8] * o + r[12] * s),
					(t[1] = r[1] * n + r[5] * i + r[9] * o + r[13] * s),
					(t[2] = r[2] * n + r[6] * i + r[10] * o + r[14] * s),
					(t[3] = r[3] * n + r[7] * i + r[11] * o + r[15] * s),
					t
				);
			}
			function hn(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = r[0],
					a = r[1],
					u = r[2],
					l = r[3],
					c = l * n + a * o - u * i,
					f = l * i + u * n - s * o,
					h = l * o + s * i - a * n,
					d = -s * n - a * i - u * o;
				return (
					(t[0] = c * l + d * -s + f * -u - h * -a),
					(t[1] = f * l + d * -a + h * -s - c * -u),
					(t[2] = h * l + d * -u + c * -a - f * -s),
					(t[3] = e[3]),
					t
				);
			}
			function dn(t) {
				return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), t;
			}
			function pn(t) {
				return 'vec4(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')';
			}
			function gn(t, e) {
				return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
			}
			function mn(t, e) {
				var r = t[0],
					n = t[1],
					i = t[2],
					o = t[3],
					s = e[0],
					a = e[1],
					u = e[2],
					l = e[3];
				return (
					Math.abs(r - s) <= d * Math.max(1, Math.abs(r), Math.abs(s)) &&
					Math.abs(n - a) <= d * Math.max(1, Math.abs(n), Math.abs(a)) &&
					Math.abs(i - u) <= d * Math.max(1, Math.abs(i), Math.abs(u)) &&
					Math.abs(o - l) <= d * Math.max(1, Math.abs(o), Math.abs(l))
				);
			}
			var vn = Gr,
				yn = Vr,
				bn = Hr,
				xn = Kr,
				wn = tn,
				Mn = en,
				Sn = rn,
				An = (function () {
					var t = Ir();
					return function (e, r, n, i, o, s) {
						var a, u;
						for (
							r || (r = 4), n || (n = 0), u = i ? Math.min(i * r + n, e.length) : e.length, a = n;
							a < u;
							a += r
						)
							(t[0] = e[a]),
								(t[1] = e[a + 1]),
								(t[2] = e[a + 2]),
								(t[3] = e[a + 3]),
								o(t, t, s),
								(e[a] = t[0]),
								(e[a + 1] = t[1]),
								(e[a + 2] = t[2]),
								(e[a + 3] = t[3]);
						return e;
					};
				})();
			function _n() {
				var t = new p(4);
				return p != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), (t[3] = 1), t;
			}
			function Tn(t) {
				return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
			}
			function En(t, e, r) {
				r *= 0.5;
				var n = Math.sin(r);
				return (t[0] = n * e[0]), (t[1] = n * e[1]), (t[2] = n * e[2]), (t[3] = Math.cos(r)), t;
			}
			function On(t, e) {
				var r = 2 * Math.acos(e[3]),
					n = Math.sin(r / 2);
				return (
					n > d
						? ((t[0] = e[0] / n), (t[1] = e[1] / n), (t[2] = e[2] / n))
						: ((t[0] = 1), (t[1] = 0), (t[2] = 0)),
					r
				);
			}
			function Cn(t, e) {
				var r = ii(t, e);
				return Math.acos(2 * r * r - 1);
			}
			function Rn(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = r[0],
					u = r[1],
					l = r[2],
					c = r[3];
				return (
					(t[0] = n * c + s * a + i * l - o * u),
					(t[1] = i * c + s * u + o * a - n * l),
					(t[2] = o * c + s * l + n * u - i * a),
					(t[3] = s * c - n * a - i * u - o * l),
					t
				);
			}
			function Ln(t, e, r) {
				r *= 0.5;
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = Math.sin(r),
					u = Math.cos(r);
				return (
					(t[0] = n * u + s * a), (t[1] = i * u + o * a), (t[2] = o * u - i * a), (t[3] = s * u - n * a), t
				);
			}
			function kn(t, e, r) {
				r *= 0.5;
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = Math.sin(r),
					u = Math.cos(r);
				return (
					(t[0] = n * u - o * a), (t[1] = i * u + s * a), (t[2] = o * u + n * a), (t[3] = s * u - i * a), t
				);
			}
			function Dn(t, e, r) {
				r *= 0.5;
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = Math.sin(r),
					u = Math.cos(r);
				return (
					(t[0] = n * u + i * a), (t[1] = i * u - n * a), (t[2] = o * u + s * a), (t[3] = s * u - o * a), t
				);
			}
			function jn(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2];
				return (t[0] = r), (t[1] = n), (t[2] = i), (t[3] = Math.sqrt(Math.abs(1 - r * r - n * n - i * i))), t;
			}
			function Pn(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[3],
					s = Math.sqrt(r * r + n * n + i * i),
					a = Math.exp(o),
					u = s > 0 ? (a * Math.sin(s)) / s : 0;
				return (t[0] = r * u), (t[1] = n * u), (t[2] = i * u), (t[3] = a * Math.cos(s)), t;
			}
			function qn(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[3],
					s = Math.sqrt(r * r + n * n + i * i),
					a = s > 0 ? Math.atan2(s, o) / s : 0;
				return (
					(t[0] = r * a),
					(t[1] = n * a),
					(t[2] = i * a),
					(t[3] = 0.5 * Math.log(r * r + n * n + i * i + o * o)),
					t
				);
			}
			function In(t, e, r) {
				return qn(t, e), ni(t, t, r), Pn(t, t), t;
			}
			function Nn(t, e, r, n) {
				var i,
					o,
					s,
					a,
					u,
					l = e[0],
					c = e[1],
					f = e[2],
					h = e[3],
					p = r[0],
					g = r[1],
					m = r[2],
					v = r[3];
				return (
					(o = l * p + c * g + f * m + h * v) < 0 && ((o = -o), (p = -p), (g = -g), (m = -m), (v = -v)),
					1 - o > d
						? ((i = Math.acos(o)),
						  (s = Math.sin(i)),
						  (a = Math.sin((1 - n) * i) / s),
						  (u = Math.sin(n * i) / s))
						: ((a = 1 - n), (u = n)),
					(t[0] = a * l + u * p),
					(t[1] = a * c + u * g),
					(t[2] = a * f + u * m),
					(t[3] = a * h + u * v),
					t
				);
			}
			function Fn(t) {
				var e = g(),
					r = g(),
					n = g(),
					i = Math.sqrt(1 - e),
					o = Math.sqrt(e);
				return (
					(t[0] = i * Math.sin(2 * Math.PI * r)),
					(t[1] = i * Math.cos(2 * Math.PI * r)),
					(t[2] = o * Math.sin(2 * Math.PI * n)),
					(t[3] = o * Math.cos(2 * Math.PI * n)),
					t
				);
			}
			function Un(t, e) {
				var r = e[0],
					n = e[1],
					i = e[2],
					o = e[3],
					s = r * r + n * n + i * i + o * o,
					a = s ? 1 / s : 0;
				return (t[0] = -r * a), (t[1] = -n * a), (t[2] = -i * a), (t[3] = o * a), t;
			}
			function Bn(t, e) {
				return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = e[3]), t;
			}
			function zn(t, e) {
				var r,
					n = e[0] + e[4] + e[8];
				if (n > 0)
					(r = Math.sqrt(n + 1)),
						(t[3] = 0.5 * r),
						(r = 0.5 / r),
						(t[0] = (e[5] - e[7]) * r),
						(t[1] = (e[6] - e[2]) * r),
						(t[2] = (e[1] - e[3]) * r);
				else {
					var i = 0;
					e[4] > e[0] && (i = 1), e[8] > e[3 * i + i] && (i = 2);
					var o = (i + 1) % 3,
						s = (i + 2) % 3;
					(r = Math.sqrt(e[3 * i + i] - e[3 * o + o] - e[3 * s + s] + 1)),
						(t[i] = 0.5 * r),
						(r = 0.5 / r),
						(t[3] = (e[3 * o + s] - e[3 * s + o]) * r),
						(t[o] = (e[3 * o + i] + e[3 * i + o]) * r),
						(t[s] = (e[3 * s + i] + e[3 * i + s]) * r);
				}
				return t;
			}
			function Gn(t, e, r, n) {
				var i = (0.5 * Math.PI) / 180;
				(e *= i), (r *= i), (n *= i);
				var o = Math.sin(e),
					s = Math.cos(e),
					a = Math.sin(r),
					u = Math.cos(r),
					l = Math.sin(n),
					c = Math.cos(n);
				return (
					(t[0] = o * u * c - s * a * l),
					(t[1] = s * a * c + o * u * l),
					(t[2] = s * u * l - o * a * c),
					(t[3] = s * u * c + o * a * l),
					t
				);
			}
			function Vn(t) {
				return 'quat(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')';
			}
			var Hn,
				$n,
				Wn,
				Yn,
				Xn,
				Jn,
				Qn = Nr,
				Zn = Fr,
				Kn = Ur,
				ti = Br,
				ei = zr,
				ri = Rn,
				ni = Qr,
				ii = an,
				oi = ln,
				si = en,
				ai = si,
				ui = rn,
				li = ui,
				ci = sn,
				fi = gn,
				hi = mn,
				di =
					((Hn = ze()),
					($n = He(1, 0, 0)),
					(Wn = He(0, 1, 0)),
					function (t, e, r) {
						var n = fr(e, r);
						return n < -0.999999
							? (hr(Hn, $n, e), jr(Hn) < 1e-6 && hr(Hn, Wn, e), cr(Hn, Hn), En(t, Hn, Math.PI), t)
							: n > 0.999999
							? ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t)
							: (hr(Hn, e, r), (t[0] = Hn[0]), (t[1] = Hn[1]), (t[2] = Hn[2]), (t[3] = 1 + n), ci(t, t));
					}),
				pi =
					((Yn = _n()),
					(Xn = _n()),
					function (t, e, r, n, i, o) {
						return Nn(Yn, e, i, o), Nn(Xn, r, n, o), Nn(t, Yn, Xn, 2 * o * (1 - o)), t;
					}),
				gi =
					((Jn = vt()),
					function (t, e, r, n) {
						return (
							(Jn[0] = r[0]),
							(Jn[3] = r[1]),
							(Jn[6] = r[2]),
							(Jn[1] = n[0]),
							(Jn[4] = n[1]),
							(Jn[7] = n[2]),
							(Jn[2] = -e[0]),
							(Jn[5] = -e[1]),
							(Jn[8] = -e[2]),
							ci(t, zn(t, Jn))
						);
					});
			function mi() {
				var t = new p(8);
				return (
					p != Float32Array &&
						((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[4] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0)),
					(t[3] = 1),
					t
				);
			}
			function vi(t) {
				var e = new p(8);
				return (
					(e[0] = t[0]),
					(e[1] = t[1]),
					(e[2] = t[2]),
					(e[3] = t[3]),
					(e[4] = t[4]),
					(e[5] = t[5]),
					(e[6] = t[6]),
					(e[7] = t[7]),
					e
				);
			}
			function yi(t, e, r, n, i, o, s, a) {
				var u = new p(8);
				return (
					(u[0] = t), (u[1] = e), (u[2] = r), (u[3] = n), (u[4] = i), (u[5] = o), (u[6] = s), (u[7] = a), u
				);
			}
			function bi(t, e, r, n, i, o, s) {
				var a = new p(8);
				(a[0] = t), (a[1] = e), (a[2] = r), (a[3] = n);
				var u = 0.5 * i,
					l = 0.5 * o,
					c = 0.5 * s;
				return (
					(a[4] = u * n + l * r - c * e),
					(a[5] = l * n + c * t - u * r),
					(a[6] = c * n + u * e - l * t),
					(a[7] = -u * t - l * e - c * r),
					a
				);
			}
			function xi(t, e, r) {
				var n = 0.5 * r[0],
					i = 0.5 * r[1],
					o = 0.5 * r[2],
					s = e[0],
					a = e[1],
					u = e[2],
					l = e[3];
				return (
					(t[0] = s),
					(t[1] = a),
					(t[2] = u),
					(t[3] = l),
					(t[4] = n * l + i * u - o * a),
					(t[5] = i * l + o * s - n * u),
					(t[6] = o * l + n * a - i * s),
					(t[7] = -n * s - i * a - o * u),
					t
				);
			}
			function wi(t, e) {
				return (
					(t[0] = 0),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 1),
					(t[4] = 0.5 * e[0]),
					(t[5] = 0.5 * e[1]),
					(t[6] = 0.5 * e[2]),
					(t[7] = 0),
					t
				);
			}
			function Mi(t, e) {
				return (
					(t[0] = e[0]),
					(t[1] = e[1]),
					(t[2] = e[2]),
					(t[3] = e[3]),
					(t[4] = 0),
					(t[5] = 0),
					(t[6] = 0),
					(t[7] = 0),
					t
				);
			}
			function Si(t, e) {
				var r = _n();
				Me(r, e);
				var n = new p(3);
				return xe(n, e), xi(t, r, n), t;
			}
			function Ai(t, e) {
				return (
					(t[0] = e[0]),
					(t[1] = e[1]),
					(t[2] = e[2]),
					(t[3] = e[3]),
					(t[4] = e[4]),
					(t[5] = e[5]),
					(t[6] = e[6]),
					(t[7] = e[7]),
					t
				);
			}
			function _i(t) {
				return (
					(t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0), t
				);
			}
			function Ti(t, e, r, n, i, o, s, a, u) {
				return (
					(t[0] = e), (t[1] = r), (t[2] = n), (t[3] = i), (t[4] = o), (t[5] = s), (t[6] = a), (t[7] = u), t
				);
			}
			var Ei = Kn;
			function Oi(t, e) {
				return (t[0] = e[4]), (t[1] = e[5]), (t[2] = e[6]), (t[3] = e[7]), t;
			}
			var Ci = Kn;
			function Ri(t, e) {
				return (t[4] = e[0]), (t[5] = e[1]), (t[6] = e[2]), (t[7] = e[3]), t;
			}
			function Li(t, e) {
				var r = e[4],
					n = e[5],
					i = e[6],
					o = e[7],
					s = -e[0],
					a = -e[1],
					u = -e[2],
					l = e[3];
				return (
					(t[0] = 2 * (r * l + o * s + n * u - i * a)),
					(t[1] = 2 * (n * l + o * a + i * s - r * u)),
					(t[2] = 2 * (i * l + o * u + r * a - n * s)),
					t
				);
			}
			function ki(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = 0.5 * r[0],
					u = 0.5 * r[1],
					l = 0.5 * r[2],
					c = e[4],
					f = e[5],
					h = e[6],
					d = e[7];
				return (
					(t[0] = n),
					(t[1] = i),
					(t[2] = o),
					(t[3] = s),
					(t[4] = s * a + i * l - o * u + c),
					(t[5] = s * u + o * a - n * l + f),
					(t[6] = s * l + n * u - i * a + h),
					(t[7] = -n * a - i * u - o * l + d),
					t
				);
			}
			function Di(t, e, r) {
				var n = -e[0],
					i = -e[1],
					o = -e[2],
					s = e[3],
					a = e[4],
					u = e[5],
					l = e[6],
					c = e[7],
					f = a * s + c * n + u * o - l * i,
					h = u * s + c * i + l * n - a * o,
					d = l * s + c * o + a * i - u * n,
					p = c * s - a * n - u * i - l * o;
				return (
					Ln(t, e, r),
					(n = t[0]),
					(i = t[1]),
					(o = t[2]),
					(s = t[3]),
					(t[4] = f * s + p * n + h * o - d * i),
					(t[5] = h * s + p * i + d * n - f * o),
					(t[6] = d * s + p * o + f * i - h * n),
					(t[7] = p * s - f * n - h * i - d * o),
					t
				);
			}
			function ji(t, e, r) {
				var n = -e[0],
					i = -e[1],
					o = -e[2],
					s = e[3],
					a = e[4],
					u = e[5],
					l = e[6],
					c = e[7],
					f = a * s + c * n + u * o - l * i,
					h = u * s + c * i + l * n - a * o,
					d = l * s + c * o + a * i - u * n,
					p = c * s - a * n - u * i - l * o;
				return (
					kn(t, e, r),
					(n = t[0]),
					(i = t[1]),
					(o = t[2]),
					(s = t[3]),
					(t[4] = f * s + p * n + h * o - d * i),
					(t[5] = h * s + p * i + d * n - f * o),
					(t[6] = d * s + p * o + f * i - h * n),
					(t[7] = p * s - f * n - h * i - d * o),
					t
				);
			}
			function Pi(t, e, r) {
				var n = -e[0],
					i = -e[1],
					o = -e[2],
					s = e[3],
					a = e[4],
					u = e[5],
					l = e[6],
					c = e[7],
					f = a * s + c * n + u * o - l * i,
					h = u * s + c * i + l * n - a * o,
					d = l * s + c * o + a * i - u * n,
					p = c * s - a * n - u * i - l * o;
				return (
					Dn(t, e, r),
					(n = t[0]),
					(i = t[1]),
					(o = t[2]),
					(s = t[3]),
					(t[4] = f * s + p * n + h * o - d * i),
					(t[5] = h * s + p * i + d * n - f * o),
					(t[6] = d * s + p * o + f * i - h * n),
					(t[7] = p * s - f * n - h * i - d * o),
					t
				);
			}
			function qi(t, e, r) {
				var n = r[0],
					i = r[1],
					o = r[2],
					s = r[3],
					a = e[0],
					u = e[1],
					l = e[2],
					c = e[3];
				return (
					(t[0] = a * s + c * n + u * o - l * i),
					(t[1] = u * s + c * i + l * n - a * o),
					(t[2] = l * s + c * o + a * i - u * n),
					(t[3] = c * s - a * n - u * i - l * o),
					(a = e[4]),
					(u = e[5]),
					(l = e[6]),
					(c = e[7]),
					(t[4] = a * s + c * n + u * o - l * i),
					(t[5] = u * s + c * i + l * n - a * o),
					(t[6] = l * s + c * o + a * i - u * n),
					(t[7] = c * s - a * n - u * i - l * o),
					t
				);
			}
			function Ii(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = r[0],
					u = r[1],
					l = r[2],
					c = r[3];
				return (
					(t[0] = n * c + s * a + i * l - o * u),
					(t[1] = i * c + s * u + o * a - n * l),
					(t[2] = o * c + s * l + n * u - i * a),
					(t[3] = s * c - n * a - i * u - o * l),
					(a = r[4]),
					(u = r[5]),
					(l = r[6]),
					(c = r[7]),
					(t[4] = n * c + s * a + i * l - o * u),
					(t[5] = i * c + s * u + o * a - n * l),
					(t[6] = o * c + s * l + n * u - i * a),
					(t[7] = s * c - n * a - i * u - o * l),
					t
				);
			}
			function Ni(t, e, r, n) {
				if (Math.abs(n) < d) return Ai(t, e);
				var i = Math.hypot(r[0], r[1], r[2]);
				n *= 0.5;
				var o = Math.sin(n),
					s = (o * r[0]) / i,
					a = (o * r[1]) / i,
					u = (o * r[2]) / i,
					l = Math.cos(n),
					c = e[0],
					f = e[1],
					h = e[2],
					p = e[3];
				(t[0] = c * l + p * s + f * u - h * a),
					(t[1] = f * l + p * a + h * s - c * u),
					(t[2] = h * l + p * u + c * a - f * s),
					(t[3] = p * l - c * s - f * a - h * u);
				var g = e[4],
					m = e[5],
					v = e[6],
					y = e[7];
				return (
					(t[4] = g * l + y * s + m * u - v * a),
					(t[5] = m * l + y * a + v * s - g * u),
					(t[6] = v * l + y * u + g * a - m * s),
					(t[7] = y * l - g * s - m * a - v * u),
					t
				);
			}
			function Fi(t, e, r) {
				return (
					(t[0] = e[0] + r[0]),
					(t[1] = e[1] + r[1]),
					(t[2] = e[2] + r[2]),
					(t[3] = e[3] + r[3]),
					(t[4] = e[4] + r[4]),
					(t[5] = e[5] + r[5]),
					(t[6] = e[6] + r[6]),
					(t[7] = e[7] + r[7]),
					t
				);
			}
			function Ui(t, e, r) {
				var n = e[0],
					i = e[1],
					o = e[2],
					s = e[3],
					a = r[4],
					u = r[5],
					l = r[6],
					c = r[7],
					f = e[4],
					h = e[5],
					d = e[6],
					p = e[7],
					g = r[0],
					m = r[1],
					v = r[2],
					y = r[3];
				return (
					(t[0] = n * y + s * g + i * v - o * m),
					(t[1] = i * y + s * m + o * g - n * v),
					(t[2] = o * y + s * v + n * m - i * g),
					(t[3] = s * y - n * g - i * m - o * v),
					(t[4] = n * c + s * a + i * l - o * u + f * y + p * g + h * v - d * m),
					(t[5] = i * c + s * u + o * a - n * l + h * y + p * m + d * g - f * v),
					(t[6] = o * c + s * l + n * u - i * a + d * y + p * v + f * m - h * g),
					(t[7] = s * c - n * a - i * u - o * l + p * y - f * g - h * m - d * v),
					t
				);
			}
			var Bi = Ui;
			function zi(t, e, r) {
				return (
					(t[0] = e[0] * r),
					(t[1] = e[1] * r),
					(t[2] = e[2] * r),
					(t[3] = e[3] * r),
					(t[4] = e[4] * r),
					(t[5] = e[5] * r),
					(t[6] = e[6] * r),
					(t[7] = e[7] * r),
					t
				);
			}
			var Gi = ii;
			function Vi(t, e, r, n) {
				var i = 1 - n;
				return (
					Gi(e, r) < 0 && (n = -n),
					(t[0] = e[0] * i + r[0] * n),
					(t[1] = e[1] * i + r[1] * n),
					(t[2] = e[2] * i + r[2] * n),
					(t[3] = e[3] * i + r[3] * n),
					(t[4] = e[4] * i + r[4] * n),
					(t[5] = e[5] * i + r[5] * n),
					(t[6] = e[6] * i + r[6] * n),
					(t[7] = e[7] * i + r[7] * n),
					t
				);
			}
			function Hi(t, e) {
				var r = Xi(e);
				return (
					(t[0] = -e[0] / r),
					(t[1] = -e[1] / r),
					(t[2] = -e[2] / r),
					(t[3] = e[3] / r),
					(t[4] = -e[4] / r),
					(t[5] = -e[5] / r),
					(t[6] = -e[6] / r),
					(t[7] = e[7] / r),
					t
				);
			}
			function $i(t, e) {
				return (
					(t[0] = -e[0]),
					(t[1] = -e[1]),
					(t[2] = -e[2]),
					(t[3] = e[3]),
					(t[4] = -e[4]),
					(t[5] = -e[5]),
					(t[6] = -e[6]),
					(t[7] = e[7]),
					t
				);
			}
			var Wi = si,
				Yi = Wi,
				Xi = ui,
				Ji = Xi;
			function Qi(t, e) {
				var r = Xi(e);
				if (r > 0) {
					r = Math.sqrt(r);
					var n = e[0] / r,
						i = e[1] / r,
						o = e[2] / r,
						s = e[3] / r,
						a = e[4],
						u = e[5],
						l = e[6],
						c = e[7],
						f = n * a + i * u + o * l + s * c;
					(t[0] = n),
						(t[1] = i),
						(t[2] = o),
						(t[3] = s),
						(t[4] = (a - n * f) / r),
						(t[5] = (u - i * f) / r),
						(t[6] = (l - o * f) / r),
						(t[7] = (c - s * f) / r);
				}
				return t;
			}
			function Zi(t) {
				return (
					'quat2(' +
					t[0] +
					', ' +
					t[1] +
					', ' +
					t[2] +
					', ' +
					t[3] +
					', ' +
					t[4] +
					', ' +
					t[5] +
					', ' +
					t[6] +
					', ' +
					t[7] +
					')'
				);
			}
			function Ki(t, e) {
				return (
					t[0] === e[0] &&
					t[1] === e[1] &&
					t[2] === e[2] &&
					t[3] === e[3] &&
					t[4] === e[4] &&
					t[5] === e[5] &&
					t[6] === e[6] &&
					t[7] === e[7]
				);
			}
			function to(t, e) {
				var r = t[0],
					n = t[1],
					i = t[2],
					o = t[3],
					s = t[4],
					a = t[5],
					u = t[6],
					l = t[7],
					c = e[0],
					f = e[1],
					h = e[2],
					p = e[3],
					g = e[4],
					m = e[5],
					v = e[6],
					y = e[7];
				return (
					Math.abs(r - c) <= d * Math.max(1, Math.abs(r), Math.abs(c)) &&
					Math.abs(n - f) <= d * Math.max(1, Math.abs(n), Math.abs(f)) &&
					Math.abs(i - h) <= d * Math.max(1, Math.abs(i), Math.abs(h)) &&
					Math.abs(o - p) <= d * Math.max(1, Math.abs(o), Math.abs(p)) &&
					Math.abs(s - g) <= d * Math.max(1, Math.abs(s), Math.abs(g)) &&
					Math.abs(a - m) <= d * Math.max(1, Math.abs(a), Math.abs(m)) &&
					Math.abs(u - v) <= d * Math.max(1, Math.abs(u), Math.abs(v)) &&
					Math.abs(l - y) <= d * Math.max(1, Math.abs(l), Math.abs(y))
				);
			}
			function eo() {
				var t = new p(2);
				return p != Float32Array && ((t[0] = 0), (t[1] = 0)), t;
			}
			function ro(t) {
				var e = new p(2);
				return (e[0] = t[0]), (e[1] = t[1]), e;
			}
			function no(t, e) {
				var r = new p(2);
				return (r[0] = t), (r[1] = e), r;
			}
			function io(t, e) {
				return (t[0] = e[0]), (t[1] = e[1]), t;
			}
			function oo(t, e, r) {
				return (t[0] = e), (t[1] = r), t;
			}
			function so(t, e, r) {
				return (t[0] = e[0] + r[0]), (t[1] = e[1] + r[1]), t;
			}
			function ao(t, e, r) {
				return (t[0] = e[0] - r[0]), (t[1] = e[1] - r[1]), t;
			}
			function uo(t, e, r) {
				return (t[0] = e[0] * r[0]), (t[1] = e[1] * r[1]), t;
			}
			function lo(t, e, r) {
				return (t[0] = e[0] / r[0]), (t[1] = e[1] / r[1]), t;
			}
			function co(t, e) {
				return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), t;
			}
			function fo(t, e) {
				return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), t;
			}
			function ho(t, e, r) {
				return (t[0] = Math.min(e[0], r[0])), (t[1] = Math.min(e[1], r[1])), t;
			}
			function po(t, e, r) {
				return (t[0] = Math.max(e[0], r[0])), (t[1] = Math.max(e[1], r[1])), t;
			}
			function go(t, e) {
				return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), t;
			}
			function mo(t, e, r) {
				return (t[0] = e[0] * r), (t[1] = e[1] * r), t;
			}
			function vo(t, e, r, n) {
				return (t[0] = e[0] + r[0] * n), (t[1] = e[1] + r[1] * n), t;
			}
			function yo(t, e) {
				var r = e[0] - t[0],
					n = e[1] - t[1];
				return Math.hypot(r, n);
			}
			function bo(t, e) {
				var r = e[0] - t[0],
					n = e[1] - t[1];
				return r * r + n * n;
			}
			function xo(t) {
				var e = t[0],
					r = t[1];
				return Math.hypot(e, r);
			}
			function wo(t) {
				var e = t[0],
					r = t[1];
				return e * e + r * r;
			}
			function Mo(t, e) {
				return (t[0] = -e[0]), (t[1] = -e[1]), t;
			}
			function So(t, e) {
				return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), t;
			}
			function Ao(t, e) {
				var r = e[0],
					n = e[1],
					i = r * r + n * n;
				return i > 0 && (i = 1 / Math.sqrt(i)), (t[0] = e[0] * i), (t[1] = e[1] * i), t;
			}
			function _o(t, e) {
				return t[0] * e[0] + t[1] * e[1];
			}
			function To(t, e, r) {
				var n = e[0] * r[1] - e[1] * r[0];
				return (t[0] = t[1] = 0), (t[2] = n), t;
			}
			function Eo(t, e, r, n) {
				var i = e[0],
					o = e[1];
				return (t[0] = i + n * (r[0] - i)), (t[1] = o + n * (r[1] - o)), t;
			}
			function Oo(t, e) {
				e = e || 1;
				var r = 2 * g() * Math.PI;
				return (t[0] = Math.cos(r) * e), (t[1] = Math.sin(r) * e), t;
			}
			function Co(t, e, r) {
				var n = e[0],
					i = e[1];
				return (t[0] = r[0] * n + r[2] * i), (t[1] = r[1] * n + r[3] * i), t;
			}
			function Ro(t, e, r) {
				var n = e[0],
					i = e[1];
				return (t[0] = r[0] * n + r[2] * i + r[4]), (t[1] = r[1] * n + r[3] * i + r[5]), t;
			}
			function Lo(t, e, r) {
				var n = e[0],
					i = e[1];
				return (t[0] = r[0] * n + r[3] * i + r[6]), (t[1] = r[1] * n + r[4] * i + r[7]), t;
			}
			function ko(t, e, r) {
				var n = e[0],
					i = e[1];
				return (t[0] = r[0] * n + r[4] * i + r[12]), (t[1] = r[1] * n + r[5] * i + r[13]), t;
			}
			function Do(t, e, r, n) {
				var i = e[0] - r[0],
					o = e[1] - r[1],
					s = Math.sin(n),
					a = Math.cos(n);
				return (t[0] = i * a - o * s + r[0]), (t[1] = i * s + o * a + r[1]), t;
			}
			function jo(t, e) {
				var r = t[0],
					n = t[1],
					i = e[0],
					o = e[1],
					s = r * r + n * n;
				s > 0 && (s = 1 / Math.sqrt(s));
				var a = i * i + o * o;
				a > 0 && (a = 1 / Math.sqrt(a));
				var u = (r * i + n * o) * s * a;
				return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u);
			}
			function Po(t) {
				return (t[0] = 0), (t[1] = 0), t;
			}
			function qo(t) {
				return 'vec2(' + t[0] + ', ' + t[1] + ')';
			}
			function Io(t, e) {
				return t[0] === e[0] && t[1] === e[1];
			}
			function No(t, e) {
				var r = t[0],
					n = t[1],
					i = e[0],
					o = e[1];
				return (
					Math.abs(r - i) <= d * Math.max(1, Math.abs(r), Math.abs(i)) &&
					Math.abs(n - o) <= d * Math.max(1, Math.abs(n), Math.abs(o))
				);
			}
			var Fo = xo,
				Uo = ao,
				Bo = uo,
				zo = lo,
				Go = yo,
				Vo = bo,
				Ho = wo,
				$o = (function () {
					var t = eo();
					return function (e, r, n, i, o, s) {
						var a, u;
						for (
							r || (r = 2), n || (n = 0), u = i ? Math.min(i * r + n, e.length) : e.length, a = n;
							a < u;
							a += r
						)
							(t[0] = e[a]), (t[1] = e[a + 1]), o(t, t, s), (e[a] = t[0]), (e[a + 1] = t[1]);
						return e;
					};
				})();
			r.d(e, 'glMatrix', function () {
				return n;
			}),
				r.d(e, 'mat2', function () {
					return i;
				}),
				r.d(e, 'mat2d', function () {
					return o;
				}),
				r.d(e, 'mat3', function () {
					return s;
				}),
				r.d(e, 'mat4', function () {
					return a;
				}),
				r.d(e, 'quat', function () {
					return c;
				}),
				r.d(e, 'quat2', function () {
					return f;
				}),
				r.d(e, 'vec2', function () {
					return h;
				}),
				r.d(e, 'vec3', function () {
					return u;
				}),
				r.d(e, 'vec4', function () {
					return l;
				});
		},
		function (t, e, r) {
			'use strict';
			function n(t, e) {
				const r = t.trim().match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin)$/);
				t = r ? { size: parseFloat(r[1]), unit: r[2] } : { size: parseFloat(t), unit: 'px' };
				let { size: i, unit: o } = t;
				if ('pt' === o) i /= 0.75;
				else if ('pc' === o) i *= 16;
				else if ('in' === o) i *= 96;
				else if ('cm' === o) i *= 96 / 2.54;
				else if ('mm' === o) i *= 96 / 25.4;
				else if ('em' === o || 'rem' === o || 'ex' === o) {
					if (!e && 'function' == typeof getComputedStyle && 'undefined' != typeof document) {
						const t = getComputedStyle(document.documentElement).fontSize;
						e = t ? n(t, 16) : 16;
					}
					(i *= e), 'ex' === o && (i /= 2);
				} else if ('q' === o) i *= 96 / 25.4 / 4;
				else if ('vw' === o || 'vh' === o) {
					if ('undefined' != typeof document) {
						i *=
							('vw' === o
								? window.innerWidth || document.documentElement.clientWidth
								: window.innerHeight || document.documentElement.clientHeight) / 100;
					}
				} else if (('vmax' === o || 'vmin' === o) && 'undefined' != typeof document) {
					const t = window.innerWidth || document.documentElement.clientWidth,
						e = window.innerHeight || document.documentElement.clientHeight;
					i *= 'vmax' === o ? Math.max(t, e) / 100 : Math.min(t, e) / 100;
				}
				return i;
			}
			function i(t) {
				return null == t ? t : String(t);
			}
			function o(t) {
				if (null == t) return t;
				if (('string' == typeof t && (t = n(t)), !Number.isFinite(t))) throw new TypeError('Invalid value');
				return t;
			}
			function s(t, e = !1) {
				return '' === t
					? null
					: ('string' == typeof t && (t = t.split(/[\s,]+/g)),
					  Array.isArray(t) && (e && (t = t.map(o)), 1 === t.length) ? t[0] : t);
			}
			function a(t, e) {
				if (Array.isArray(t) && Array.isArray(e)) {
					if (t.length !== e.length) return !1;
					for (let r = 0; r < t.length; r++) if (t[r] !== e[r]) return !1;
					return !0;
				}
				return (null == t && null == e) || t === e;
			}
			r.d(e, 'b', function () {
				return n;
			}),
				r.d(e, 'e', function () {
					return i;
				}),
				r.d(e, 'd', function () {
					return o;
				}),
				r.d(e, 'c', function () {
					return s;
				}),
				r.d(e, 'a', function () {
					return a;
				}),
				r(0).glMatrix.setMatrixArrayType(Array);
		},
		function (t, e, r) {
			'use strict';
			r(0).glMatrix.setMatrixArrayType(Array);
			const n = new Map();
			function i(t, e = {}, r = []) {
				t = t.toLowerCase();
				const i = n.get(t);
				if (!i) throw new TypeError(`Invalid node: ${t}`);
				const o = new i(e);
				return (
					r.forEach(t => {
						o.appendChild(t);
					}),
					o
				);
			}
			const o = {
				registerNode(t, e, r = 100) {
					if (((e = e.toLowerCase()), n.has(e)))
						throw new TypeError(`Cannot registerNode, ${e} has been taken.`);
					n.set(e, t),
						Object.defineProperties(t.prototype, {
							nodeType: { value: r },
							tagName: { value: e.toUpperCase() },
							nodeName: { value: e },
							ownerDocument: { value: o },
							namespaceURI: { value: `http://spritejs.org/${e}` },
						});
				},
				createElement: i,
				createElementNS: (t, e) => i(e),
				isSpriteNode: t => n.has(t.toLowerCase()),
			};
			e.a = o;
		},
		function (t, e, r) {
			'use strict';
			var n = r(62),
				i = r(0),
				o = r(28),
				s = r(14),
				a = r(37);
			function u(t, e, r) {
				return t * (1 - r) + e * r;
			}
			function l(t, e) {
				const r = t.canvas;
				t.save(), (t.filter = e), t.drawImage(r, 0, 0, r.width, r.height), t.restore();
			}
			function c(t, e) {
				const r = /rgba\((\d+),(\d+),(\d+),(\d+)\)/;
				t = t.match(r).slice(1, 5).map(Number);
				const n = [],
					i = (e = e.match(r).slice(1, 5).map(Number))[3];
				for (let r = 0; r < 4; r++) n[r] = u(t[r], e[r], i);
				return `rgba(${n.join()})`;
			}
			function f(t, e, r = !0, n = null, o = null, u = null, f = null) {
				e.save();
				let h = !1,
					d = !1;
				if (((e.globalAlpha = t.getOpacity()), t.lineWidth)) {
					let r = t.gradient && t.gradient.stroke;
					if (r) {
						const { vector: t, colors: n } = r;
						if (6 === t.length) r = e.createRadialGradient(...t);
						else if (4 === t.length) r = e.createLinearGradient(...t);
						else {
							if (3 !== t.length) throw new TypeError('Invalid vector dimension.');
							r = e.createCircularGradient(...t);
						}
						n.forEach(({ offset: t, color: e }) => {
							let n = Object(s.a)(e);
							o && (n = c(n, o)), r.addColorStop(t, n);
						}),
							(e.strokeStyle = r),
							(h = !0);
					} else t.strokeStyle && ((e.strokeStyle = o ? c(t.strokeStyle, o) : t.strokeStyle), (h = !0));
				}
				h &&
					((e.lineWidth = t.lineWidth),
					(e.lineJoin = t.lineJoin),
					(e.lineCap = t.lineCap),
					(e.miterLimit = t.miterLimit),
					t.lineDash &&
						(e.setLineDash(t.lineDash), t.lineDashOffset && (e.lineDashOffset = t.lineDashOffset)));
				let p = t.gradient && t.gradient.fill;
				if (p) {
					const { vector: t, colors: r } = p;
					if (6 === t.length) p = e.createRadialGradient(...t);
					else if (4 === t.length) p = e.createLinearGradient(...t);
					else {
						if (3 !== t.length) throw new TypeError('Invalid vector dimension.');
						p = e.createCircularGradient(...t);
					}
					r.forEach(({ offset: t, color: e }) => {
						let r = Object(s.a)(e);
						o && (r = c(r, o)), p.addColorStop(t, r);
					}),
						(e.fillStyle = p),
						(d = !0);
				} else t.fillStyle && ((e.fillStyle = n ? c(t.fillStyle, n) : t.fillStyle), (d = !0));
				f && e.transform(...f), e.transform(...t.transformMatrix);
				const g = t.contours.length;
				if (
					(t.contours.forEach((r, n) => {
						const o = r.length,
							l = o > 1 && i.vec2.equals(r[0], r[o - 1]),
							c = n === g - 1 && t.texture;
						if (r && o > 0) {
							if (d || h || c) {
								e.beginPath(), e.moveTo(...r[0]);
								for (let t = 1; t < o; t++) t === o - 1 && l ? e.closePath() : e.lineTo(...r[t]);
							}
							if ((d && e.fill(), c)) {
								e.save(), e.clip();
								let { image: r, options: n } = t.texture;
								if (
									(u && (r = u),
									n.repeat && console.warn('Context 2D not supported image repeat yet.'),
									r.font)
								) {
									n.scale && console.warn('Context 2D not supported text scale yet.'),
										n.srcRect && console.warn('Context 2D not supported text srcRect yet.');
									let { font: t, fillColor: i, strokeColor: o, strokeWidth: u, text: l } = r;
									i || o || (i = '#000'),
										Array.isArray(i) && (i = Object(s.a)(i)),
										Array.isArray(o) && (o = Object(s.a)(o)),
										(e.font = t);
									const { width: c } = e.measureText(l),
										f = Object(a.a)(t),
										h = Math.max(f.pxLineHeight, 1.13 * f.pxHeight);
									(e.textAlign = 'center'), (e.textBaseline = 'middle');
									const d = n.rect,
										p = d[0] + 0.5 * h + 0.06 * f.pxHeight,
										g = d[1] + 0.5 * c;
									null != d[2] && e.scale(d[2] / c, d[3] / h),
										i && ((e.fillStyle = i), e.fillText(l, g, p)),
										o && ((e.lineWidth = u), (e.strokeStyle = o), e.strokeText(l, g, p));
								} else {
									let t = n.rect;
									const i = n.srcRect;
									n.scale && (t = [0, 0, e.canvas.width, e.canvas.height]),
										n.rotated && t && (t = [-t[1], t[0], t[3], t[2]]),
										i && (t = t || [0, 0, i[2], i[3]]),
										n.rotated && (e.translate(0, t ? t[2] : r.width), e.rotate(-0.5 * Math.PI)),
										i
											? e.drawImage(r, ...i, ...t)
											: t
											? e.drawImage(r, ...t)
											: e.drawImage(r, 0, 0);
								}
								e.restore();
							}
							h && e.stroke();
						}
					}),
					e.restore(),
					r)
				) {
					const r = t.filter;
					r && l(e, r);
				}
			}
			r(0).glMatrix.setMatrixArrayType(Array),
				r(0).glMatrix.setMatrixArrayType(Array),
				r(0).glMatrix.setMatrixArrayType(Array);
			const h = Symbol('transform');
			class d {
				constructor(t, e) {
					(this.context = t.getContext('2d')), (this.options = e), (this[h] = [1, 0, 0, 1, 0, 0]);
				}
				createTexture(t) {
					return { _img: t };
				}
				async loadTexture(t) {
					const e = await o.a.loadImage(t, { useImageBitmap: !1 });
					return this.createTexture(e);
				}
				deleteTexture(t) {
					return t;
				}
				clear(t, e, r, n) {
					const i = this.context;
					(t = t || 0),
						(e = e || 0),
						(r = r || i.canvas.width - t),
						(n = n || i.canvas.height - e),
						i.clearRect(t, e, r, n);
				}
				drawMeshCloud(t, { clear: e = !1 } = {}) {
					const r = [];
					for (let e = 0; e < t.amount; e++) {
						const n = t.getTransform(e);
						let i = t.getTextureFrame(e);
						i && (i = i._img);
						const o = t.getFilter(e),
							{ fill: s, stroke: a } = t.getCloudRGBA(e);
						r.push({ mesh: t.mesh, _cloudOptions: [s, a, i, n, o] });
					}
					t.beforeRender && t.beforeRender(this.context, t),
						this.drawMeshes(r, { clear: e, hook: !1 }),
						t.afterRender && t.afterRender(this.context, t);
				}
				drawMeshes(t, { clear: e = !1, hook: r = !0 } = {}) {
					const n = this.context;
					e && n.clearRect(0, 0, n.canvas.width, n.canvas.height);
					let i = null;
					const { width: s, height: a } = n.canvas,
						u = t.length;
					t.forEach((t, e) => {
						let c, d, p, g, m;
						r && t.beforeRender && t.beforeRender(n, t),
							t._cloudOptions && (([c, d, p, g, m] = t._cloudOptions), (t = t.mesh));
						let v = t.filter;
						if ((m && (v = v ? `${v} ${m}` : m), v && !1 !== this.filterBuffer)) {
							const t = o.a.createCanvas(s, a);
							this.filterBuffer = !!t && t.getContext('2d');
						}
						i &&
							i !== v &&
							(l(this.filterBuffer, i),
							n.drawImage(this.filterBuffer.canvas, 0, 0, s, a),
							this.filterBuffer.clearRect(0, 0, s, a),
							(i = null)),
							v && this.filterBuffer
								? (this.filterBuffer.save(),
								  this.filterBuffer.transform(...this[h]),
								  f(t, this.filterBuffer, !1, c, d, p, g),
								  this.filterBuffer.restore(),
								  e === u - 1
										? (l(this.filterBuffer, v),
										  n.drawImage(this.filterBuffer.canvas, 0, 0, s, a),
										  this.filterBuffer.clearRect(0, 0, s, a))
										: (i = v))
								: (n.save(), n.transform(...this[h]), f(t, n, !1, c, d, p, g), n.restore()),
							r && t.afterRender && t.afterRender(n, t);
					});
				}
				setTransform(t) {
					this[h] = t;
				}
			}
			r(0).glMatrix.setMatrixArrayType(Array);
			const p = {
				UNSIGNED_BYTE: Uint8Array,
				UNSIGNED_SHORT: Uint16Array,
				BYTE: Int8Array,
				SHORT: Int16Array,
				FLOAT: Float32Array,
			};
			function g(t, e) {
				let r = [],
					n = [],
					i = [],
					o = [],
					s = [],
					a = 0,
					u = 0;
				const l = (t[0] && t[0].uniforms) || {},
					c = t[0] ? t[0].program : null;
				e &&
					(!(function (t, e) {
						let r = 0,
							n = 0,
							i = 0,
							o = 0,
							s = 0,
							a = 0;
						const u = t[0].program;
						for (let e = 0; e < t.length; e++) {
							const u = t[e].meshData;
							if (u) {
								a += u.positions.length;
								const t = u.positions[0].length;
								(r += u.positions.length * t),
									(n += 3 * u.cells.length),
									(s += 4 * u.attributes.a_color.length);
								const e = u.textureCoord;
								e && (i += e.length * e[0].length);
								const l = u.attributes.a_sourceRect;
								l && (o += 4 * l.length);
							}
						}
						if (
							((!e.positions || e.positions.length < r) && (e.positions = new Float32Array(r)),
							(!e.cells || e.cells.length < n) && (e.cells = new Uint16Array(n)),
							i &&
								(!e.textureCoord || e.textureCoord.length < i) &&
								(e.textureCoord = new Float32Array(i)),
							(!e.a_color || e.a_color.length < s) && (e.a_color = new Uint8Array(s)),
							o &&
								(!e.a_sourceRect || e.a_sourceRect.length < o) &&
								(e.a_sourceRect = new Float32Array(o)),
							u)
						) {
							const t = Object.entries(u._attribute),
								r = u._attribOpts || {};
							for (let n = 0; n < t.length; n++) {
								const [i, o] = t[n];
								if ('a_color' !== i && 'a_sourceRect' !== i && 'ignored' !== o) {
									const t = r[i] ? r[i].type : 'FLOAT',
										n = p[t],
										s = o.size * a;
									(!e[i] || e[i].length < s) && (e[i] = new n(s));
								}
							}
						}
					})(t, e),
					(n = e.cells),
					(r = e.positions),
					(i = e.textureCoord),
					(o = e.a_color),
					(s = e.a_sourceRect));
				let f = !1;
				const h = {};
				for (let l = 0; l < t.length; l++) {
					let d = t[l];
					if (d) {
						if ((d.meshData && (d = d.meshData), e)) {
							const t = d.positions;
							for (let e = 0; e < t.length; e++) {
								const n = t[e],
									i = 3 * (a + e);
								for (let t = 0; t < n.length; t++) r[i + t] = n[t];
							}
						} else r.push(...d.positions);
						const t = d.cells;
						for (let r = 0; r < t.length; r++) {
							const i = t[r];
							if (e) {
								const t = 3 * (u + r);
								(n[t] = i[0] + a), (n[t + 1] = i[1] + a), (n[t + 2] = i[2] + a);
							} else n.push([i[0] + a, i[1] + a, i[2] + a]);
						}
						if (e) {
							const t = d.attributes.a_color;
							for (let e = 0; e < t.length; e++) {
								const r = t[e],
									n = 4 * (a + e);
								(o[n] = r[0]), (o[n + 1] = r[1]), (o[n + 2] = r[2]), (o[n + 3] = r[3]);
							}
						} else o.push(...d.attributes.a_color);
						if (d.attributes.a_sourceRect)
							if (((f = !0), e)) {
								const t = d.attributes.a_sourceRect;
								for (let e = 0; e < t.length; e++) {
									const r = t[e],
										n = 4 * (a + e);
									(s[n] = r[0]), (s[n + 1] = r[1]), (s[n + 2] = r[2]), (s[n + 3] = r[3]);
								}
							} else s.push(...d.attributes.a_sourceRect);
						if (d.textureCoord)
							if (e) {
								const t = d.textureCoord;
								for (let e = 0; e < t.length; e++) {
									const r = t[e],
										n = 3 * (a + e);
									for (let t = 0; t < r.length; t++) i[n + t] = r[t];
								}
							} else i.push(...d.textureCoord);
						if (c) {
							const t = Object.entries(c._attribute);
							for (let r = 0; r < t.length; r++) {
								const [n, i] = t[r];
								if ('a_color' !== n && 'a_sourceRect' !== n && 'ignored' !== i)
									if (((h[n] = []), e)) {
										h[n] = e[n];
										const t = d.attributes[n],
											r = t[0].length;
										for (let e = 0; e < t.length; e++) {
											const i = t[e],
												o = r * (a + e);
											for (let t = 0; t < i.length; t++) h[n][o + t] = i[t];
										}
									} else h[n].push(...d.attributes[n]);
							}
						}
						(a += d.positions.length), (u += d.cells.length);
					}
				}
				(h.a_color = o), f && s && s.length > 0 && (h.a_sourceRect = s);
				const d = { positions: r, cells: n, attributes: h, uniforms: l, cellsCount: 3 * u, program: c };
				return i && i.length && (d.textureCoord = i), d;
			}
			function m(t, e) {
				const r = [],
					n = t[0],
					i = t[1],
					o = t[2],
					s = t[3],
					a = t[4],
					u = t[5],
					l = t[6],
					c = t[7],
					f = t[8],
					h = t[9],
					d = t[10],
					p = t[11],
					g = t[12],
					m = t[13],
					v = t[14],
					y = t[15],
					b = t[16],
					x = t[17],
					w = t[18],
					M = t[19];
				let S = e[0],
					A = e[1],
					_ = e[2],
					T = e[3],
					E = e[4];
				return (
					(r[0] = S * n + A * u + _ * d + T * y),
					(r[1] = S * i + A * l + _ * p + T * b),
					(r[2] = S * o + A * c + _ * g + T * x),
					(r[3] = S * s + A * f + _ * m + T * w),
					(r[4] = S * a + A * h + _ * v + T * M + E),
					(S = e[5]),
					(A = e[6]),
					(_ = e[7]),
					(T = e[8]),
					(E = e[9]),
					(r[5] = S * n + A * u + _ * d + T * y),
					(r[6] = S * i + A * l + _ * p + T * b),
					(r[7] = S * o + A * c + _ * g + T * x),
					(r[8] = S * s + A * f + _ * m + T * w),
					(r[9] = S * a + A * h + _ * v + T * M + E),
					(S = e[10]),
					(A = e[11]),
					(_ = e[12]),
					(T = e[13]),
					(E = e[14]),
					(r[10] = S * n + A * u + _ * d + T * y),
					(r[11] = S * i + A * l + _ * p + T * b),
					(r[12] = S * o + A * c + _ * g + T * x),
					(r[13] = S * s + A * f + _ * m + T * w),
					(r[14] = S * a + A * h + _ * v + T * M + E),
					(S = e[15]),
					(A = e[16]),
					(_ = e[17]),
					(T = e[18]),
					(E = e[19]),
					(r[15] = S * n + A * u + _ * d + T * y),
					(r[16] = S * i + A * l + _ * p + T * b),
					(r[17] = S * o + A * c + _ * g + T * x),
					(r[18] = S * s + A * f + _ * m + T * w),
					(r[19] = S * a + A * h + _ * v + T * M + E),
					r
				);
			}
			function v(t) {
				var e, r, n;
				(e = 0), (r = 1) > (n = t) && ([r, n] = [n, r]);
				const i = 0.2126 * (t = e < r ? r : e > n ? n : e),
					o = 0.7152 * t,
					s = 0.0722 * t;
				return [i + 1 - t, o, s, 0, 0, i, o + 1 - t, s, 0, 0, i, o, s + 1 - t, 0, 0, 0, 0, 0, 1, 0];
			}
			function y(t) {
				return [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
			}
			function b(t) {
				const e = 0.2126 * (1 - t),
					r = 0.7152 * (1 - t),
					n = 0.0722 * (1 - t);
				return [e + t, r, n, 0, 0, e, r + t, n, 0, 0, e, r, n + t, 0, 0, 0, 0, 0, 1, 0];
			}
			function x(t) {
				const e = 0.5 * (1 - t);
				return [t, 0, 0, 0, e, 0, t, 0, 0, e, 0, 0, t, 0, e, 0, 0, 0, 1, 0];
			}
			function w(t) {
				const e = 1 - 2 * t;
				return [e, 0, 0, 0, t, 0, e, 0, 0, t, 0, 0, e, 0, t, 0, 0, 0, 1, 0];
			}
			function M(t) {
				return [
					1 - 0.607 * t,
					0.769 * t,
					0.189 * t,
					0,
					0,
					0.349 * t,
					1 - 0.314 * t,
					0.168 * t,
					0,
					0,
					0.272 * t,
					0.534 * t,
					1 - 0.869 * t,
					0,
					0,
					0,
					0,
					0,
					1,
					0,
				];
			}
			function S(t) {
				return [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, t, 0];
			}
			function A(t) {
				const e = (t / 180) * Math.PI,
					r = Math.cos(e),
					n = Math.sin(e);
				return [
					0.2126 + 0.7874 * r + -0.2126 * n,
					0.7152 + -0.7152 * r + -0.7152 * n,
					0.0722 + -0.0722 * r + 0.9278 * n,
					0,
					0,
					0.2126 + -0.2126 * r + 0.143 * n,
					0.7152 + r * (1 - 0.7152) + 0.14 * n,
					0.0722 + -0.0722 * r + -0.283 * n,
					0,
					0,
					0.2126 + -0.2126 * r + -0.7874 * n,
					0.7152 + -0.7152 * r + 0.7152 * n,
					0.0722 + 0.9278 * r + 0.0722 * n,
					0,
					0,
					0,
					0,
					0,
					1,
					0,
				];
			}
			r(0).glMatrix.setMatrixArrayType(Array);
			var _ = r(21),
				T = r.n(_);
			function E(t) {
				const e = T()(t);
				if (!e || !e.length) throw new TypeError('Invalid color value.');
				return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
			}
			function O(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e &&
						(n = n.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function C(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2
						? O(r, !0).forEach(function (e) {
								R(t, e, r[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: O(r).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
						  });
				}
				return t;
			}
			function R(t, e, r) {
				return (
					e in t
						? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (t[e] = r),
					t
				);
			}
			r(0).glMatrix.setMatrixArrayType(Array), r(0).glMatrix.setMatrixArrayType(Array);
			const L = Symbol('mesh'),
				k = Symbol('count'),
				D = Symbol('blend'),
				j = Symbol('filter'),
				P = Symbol('textures'),
				q = Symbol('textureOptions'),
				I = Symbol('cloudColor'),
				N = Symbol('cloudFilter'),
				F = Symbol('buffer');
			function U(t, e = null) {
				const r = new Float32Array(4 * t),
					n = new Float32Array(4 * t),
					i = new Float32Array(4 * t),
					o = new Float32Array(4 * t),
					s = new Float32Array(4 * t),
					a = new Float32Array(4 * t),
					u = new Float32Array(4 * t),
					l = new Uint8Array(t),
					c = new Uint8Array(4 * t),
					f = new Uint8Array(4 * t);
				return (
					e &&
						(r.set(e.transform0, 0),
						n.set(e.transform1, 0),
						i.set(e.color0, 0),
						o.set(e.color1, 0),
						s.set(e.color2, 0),
						a.set(e.color3, 0),
						u.set(e.color4, 0),
						l.set(e.frameIndex, 0),
						c.set(e.fillColor, 0),
						f.set(e.strokeColor, 0)),
					{
						bufferSize: t,
						transform0: r,
						transform1: n,
						color0: i,
						color1: o,
						color2: s,
						color3: a,
						color4: u,
						frameIndex: l,
						fillColor: c,
						strokeColor: f,
					}
				);
			}
			var B = class {
				constructor(t, e = 1, { buffer: r = 1e3 } = {}) {
					(r = Math.max(r, e)),
						(this[k] = e),
						(this[L] = t),
						(this[F] = U(r)),
						(this[P] = []),
						(this[j] = []),
						(this[I] = !1),
						(this[N] = !1),
						(this[D] = !1),
						this.initBuffer();
				}
				initBuffer(t = 0) {
					const e = this[k],
						r = this[L],
						{ width: n, height: i } = r;
					for (let r = t; r < e; r++)
						this[F].transform0.set([1, 0, 0, n], 4 * r),
							this[F].transform1.set([1, 0, 0, i], 4 * r),
							this[F].frameIndex.set([-1], r),
							this[F].fillColor.set([0, 0, 0, 0], 4 * r),
							this[F].strokeColor.set([0, 0, 0, 0], 4 * r),
							this.setColorTransform(r, null);
				}
				get bufferSize() {
					return this[F].bufferSize;
				}
				get mesh() {
					return this[L];
				}
				set mesh(t) {
					(this[L] = t), this[P] && this.setTextureFrames(this[P], this[q]);
				}
				get hasCloudColor() {
					return this[I];
				}
				get hasCloudFilter() {
					return this[N];
				}
				_getFilter(t) {
					return (this[j][t] = this[j][t] || []), this[j][t];
				}
				getFilter(t) {
					return this._getFilter(t).join(' ');
				}
				get enableBlend() {
					return this[L].enableBlend || this[D];
				}
				canIgnore() {
					return this[L].canIgnore();
				}
				delete(t) {
					if (t >= this[k] || t < 0) throw new Error('Out of range.');
					const {
						transform0: e,
						transform1: r,
						color0: n,
						color1: i,
						color2: o,
						color3: s,
						color4: a,
						frameIndex: u,
						fillColor: l,
						strokeColor: c,
					} = this[F];
					e.set(e.subarray(4 * (t + 1)), 4 * t),
						r.set(r.subarray(4 * (t + 1)), 4 * t),
						n.set(n.subarray(4 * (t + 1)), 4 * t),
						i.set(i.subarray(4 * (t + 1)), 4 * t),
						o.set(o.subarray(4 * (t + 1)), 4 * t),
						s.set(s.subarray(4 * (t + 1)), 4 * t),
						a.set(a.subarray(4 * (t + 1)), 4 * t),
						u.set(u.subarray(t + 1), t),
						l.set(l.subarray(4 * (t + 1)), 4 * t),
						c.set(c.subarray(4 * (t + 1)), 4 * t);
					for (const e in this[j])
						e === t ? delete this[j][e] : e > t && ((this[j][e - 1] = this[j][e]), delete this[j][e]);
					this[k]--;
				}
				setColorTransform(t, e) {
					if (t >= this[k] || t < 0) throw new Error('Out of range.');
					t *= 4;
					const { color0: r, color1: n, color2: i, color3: o, color4: s } = this[F];
					return (
						null != e
							? (r.set([e[0], e[5], e[10], e[15]], t),
							  n.set([e[1], e[6], e[11], e[16]], t),
							  i.set([e[2], e[7], e[12], e[17]], t),
							  o.set([e[3], e[8], e[13], e[18]], t),
							  s.set([e[4], e[9], e[14], e[19]], t),
							  (this[D] = this[D] || e[18] < 1),
							  (this[N] = !0))
							: (r.set([1, 0, 0, 0], t),
							  n.set([0, 1, 0, 0], t),
							  i.set([0, 0, 1, 0], t),
							  o.set([0, 0, 0, 1], t),
							  s.set([0, 0, 0, 0], t)),
						this
					);
				}
				getColorTransform(t) {
					if (t >= this[k] || t < 0) throw new Error('Out of range.');
					t *= 4;
					const { color0: e, color1: r, color2: n, color3: i, color4: o } = this[F];
					return [
						e[t],
						r[t],
						n[t],
						i[t],
						o[t],
						e[t + 1],
						r[t + 1],
						n[t + 1],
						i[t + 1],
						o[t + 1],
						e[t + 2],
						r[t + 2],
						n[t + 2],
						i[t + 2],
						o[t + 2],
						e[t + 3],
						r[t + 3],
						n[t + 3],
						i[t + 3],
						o[t + 3],
					];
				}
				transformColor(t, e) {
					let r = this.getColorTransform(t);
					return (r = m(r, e)), this.setColorTransform(t, r), this;
				}
				setFillColor(t, e) {
					if (t >= this[k] || t < 0) throw new Error('Out of range.');
					'string' == typeof e && (e = E(e)),
						e[3] > 0 && (this[I] = !0),
						this[F].fillColor.set(
							e.map(t => Math.round(255 * t)),
							4 * t,
						);
				}
				setStrokeColor(t, e) {
					if (t >= this[k] || t < 0) throw new Error('Out of range.');
					'string' == typeof e && (e = E(e)),
						e[3] > 0 && (this[I] = !0),
						this[F].strokeColor.set(
							e.map(t => Math.round(255 * t)),
							4 * t,
						);
				}
				getCloudRGBA(t) {
					if (t >= this[k] || t < 0) throw new Error('Out of range.');
					t *= 4;
					const { fillColor: e, strokeColor: r } = this[F],
						n = [e[t], e[t + 1], e[t + 2], e[t + 3]],
						i = [r[t], r[t + 1], r[t + 2], r[t + 3]];
					return (n[3] /= 255), (i[3] /= 255), { fill: `rgba(${n.join()})`, stroke: `rgba(${i.join()})` };
				}
				grayscale(t, e) {
					this.transformColor(t, v(e)), this._getFilter(t).push(`grayscale(${100 * e}%)`);
				}
				brightness(t, e) {
					this.transformColor(t, y(e)), this._getFilter(t).push(`brightness(${100 * e}%)`);
				}
				saturate(t, e) {
					this.transformColor(t, b(e)), this._getFilter(t).push(`saturate(${100 * e}%)`);
				}
				contrast(t, e) {
					this.transformColor(t, x(e)), this._getFilter(t).push(`contrast(${100 * e}%)`);
				}
				invert(t, e) {
					this.transformColor(t, w(e)), this._getFilter(t).push(`invert(${100 * e}%)`);
				}
				sepia(t, e) {
					this.transformColor(t, M(e)), this._getFilter(t).push(`sepia(${100 * e}%)`);
				}
				opacity(t, e) {
					this.transformColor(t, S(e)), this._getFilter(t).push(`opacity(${100 * e}%)`);
				}
				hueRotate(t, e) {
					this.transformColor(t, A(e)), this._getFilter(t).push(`hue-rotate(${e}deg)`);
				}
				setTransform(t, e) {
					if (t >= this[k] || t < 0) throw new Error('Out of range.');
					(t *= 4), null == e && (e = [1, 0, 0, 1, 0, 0]);
					const { transform0: r, transform1: n } = this[F];
					return r.set([e[0], e[1], e[2]], t), n.set([e[3], e[4], e[5]], t), this;
				}
				getTransform(t) {
					if (t >= this[k] || t < 0) throw new Error('Out of range.');
					t *= 4;
					const { transform0: e, transform1: r } = this[F];
					return [e[t], e[t + 1], e[t + 2], r[t], r[t + 1], r[t + 2]];
				}
				getTextureFrame(t) {
					return this[P][this[F].frameIndex[t]];
				}
				setTextureFrames(t = [], e = {}) {
					if (t.length > 12) throw new Error('Max frames exceed. Allow 12 frames.');
					if (t.length) {
						this[L].setTexture(t[0], e);
					}
					(this[P] = t), (this[q] = e);
				}
				setFrameIndex(t, e) {
					if (t >= this[k] || t < 0) throw new Error('Out of range.');
					const r = this[P].length;
					if (r <= 0) throw new Error('No frames');
					this[F].frameIndex[t] = e % r;
				}
				get amount() {
					return this[k];
				}
				set amount(t) {
					const e = this[k];
					t !== e &&
						(t > this[F].bufferSize && (this[F] = U(Math.max(t, this[F].bufferSize + 1e3), this[F])),
						(this[k] = t),
						t > e && this.initBuffer(e));
				}
				get meshData() {
					const { attributes: t, cells: e, positions: r, textureCoord: n, uniforms: i } = this[L].meshData,
						o = this[P],
						s = {
							attributes: C({}, t),
							cells: e,
							positions: r,
							textureCoord: n,
							uniforms: C({}, i),
							instanceCount: this[k],
							enableBlend: this.enableBlend,
						};
					o.length &&
						o.forEach((t, e) => {
							s.uniforms[`u_texFrame${e}`] = t;
						});
					const {
						transform0: a,
						transform1: u,
						color0: l,
						color1: c,
						color2: f,
						color3: h,
						color4: d,
						fillColor: p,
						strokeColor: g,
						frameIndex: m,
					} = this[F];
					return (
						this[L].uniforms.u_texSampler && (s.attributes.a_frameIndex = { data: m, divisor: 1 }),
						(s.attributes.a_transform0 = { data: a, divisor: 1 }),
						(s.attributes.a_transform1 = { data: u, divisor: 1 }),
						(s.attributes.a_colorCloud0 = { data: l, divisor: 1 }),
						(s.attributes.a_colorCloud1 = { data: c, divisor: 1 }),
						(s.attributes.a_colorCloud2 = { data: f, divisor: 1 }),
						(s.attributes.a_colorCloud3 = { data: h, divisor: 1 }),
						(s.attributes.a_colorCloud4 = { data: d, divisor: 1 }),
						this.hasCloudColor &&
							((s.attributes.a_fillCloudColor = { data: p, divisor: 1 }),
							(s.attributes.a_strokeCloudColor = { data: g, divisor: 1 })),
						s
					);
				}
				setProgram(t) {
					this[L].setProgram(t);
				}
				get program() {
					return this[L].program;
				}
				transform(t, e) {
					const r = this.getTransform(t);
					return (e = i.mat2d.multiply(Array.of(0, 0, 0, 0, 0, 0), e, r)), this.setTransform(t, e), this;
				}
				translate(t, [e, r]) {
					let n = i.mat2d.create();
					return (n = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), n, [e, r])), this.transform(t, n);
				}
				rotate(t, e, [r, n] = [0, 0]) {
					let o = i.mat2d.create();
					return (
						(o = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), o, [r, n])),
						(o = i.mat2d.rotate(Array.of(0, 0, 0, 0, 0, 0), o, e)),
						(o = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), o, [-r, -n])),
						this.transform(t, o)
					);
				}
				scale(t, [e, r = e], [n, o] = [0, 0]) {
					let s = i.mat2d.create();
					return (
						(s = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), s, [n, o])),
						(s = i.mat2d.scale(Array.of(0, 0, 0, 0, 0, 0), s, [e, r])),
						(s = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), s, [-n, -o])),
						this.transform(t, s)
					);
				}
				skew(t, [e, r = e], [n, o] = [0, 0]) {
					let s = i.mat2d.create();
					return (
						(s = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), s, [n, o])),
						(s = i.mat2d.multiply(
							Array.of(0, 0, 0, 0, 0, 0),
							s,
							i.mat2d.fromValues(1, Math.tan(r), Math.tan(e), 1, 0, 0),
						)),
						(s = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), s, [-n, -o])),
						this.transform(t, s)
					);
				}
				isPointCollision(t, [e, r], n = 'both') {
					const o = this.getTransform(t),
						s = (function (t, e) {
							const [r, n] = t;
							return [r * e[0] + n * e[2] + e[4], r * e[1] + n * e[3] + e[5]];
						})([e, r], i.mat2d.invert(Array.of(0, 0, 0, 0, 0, 0), o));
					return this[L].isPointCollision(...s, n);
				}
				isPointInFill(t, [e, r]) {
					return this.isPointCollision(t, [e, r], 'fill');
				}
				isPointInStroke(t, [e, r]) {
					return this.isPointCollision(t, [e, r], 'stroke');
				}
			};
			function z(t, e, r) {
				const n = t.uniforms || {},
					i = e.uniforms || {};
				if (n.u_texSampler && i.u_texSampler && n.u_texSampler !== i.u_texSampler) return !1;
				const o = Object.keys(n),
					s = Object.keys(i),
					a = o.indexOf('u_texSampler'),
					u = s.indexOf('u_texSampler');
				if ((a >= 0 && o.splice(a, 1), u >= 0 && s.splice(u, 1), o.length !== s.length)) return !1;
				const l = o.every(t => {
					const e = n[t],
						r = i[t];
					if (e === r) return !0;
					if (e.length && r.length && e.length === r.length) {
						for (let t = 0; t < e.length; t++) if (e[t] !== r[t]) return !1;
						return !0;
					}
					return !1;
				});
				if (l)
					if (n.u_texSampler && !i.u_texSampler) e.setTexture(n.u_texSampler, { hidden: !0 });
					else if (!n.u_texSampler && i.u_texSampler)
						for (let t = 0; t < r.length; t++) r[t].setTexture(i.u_texSampler, { hidden: !0 });
				return l;
			}
			r(0).glMatrix.setMatrixArrayType(Array);
			const G = {};
			function V(t, e) {
				if (t.length) {
					const r = g(t, G);
					return (
						(r.enableBlend = e),
						t[0].filterCanvas && (r.filterCanvas = !0),
						(r.packIndex = t[0].packIndex),
						(r.packLength = t.length),
						(r.beforeRender = t[0].beforeRender),
						(r.pass = t[0].pass),
						(r.afterRender = t[t.length - 1].afterRender),
						(t.length = 0),
						r
					);
				}
			}
			var H = r(86),
				$ = r.n(H),
				W = r(50),
				Y = r.n(W),
				X = r(87),
				J = r.n(X);
			r(0).glMatrix.setMatrixArrayType(Array);
			const Q = 2 * Math.PI;
			function Z(t, e, r, n) {
				let i = t * r + e * n;
				return i > 1 && (i = 1), i < -1 && (i = -1), (t * n - e * r < 0 ? -1 : 1) * Math.acos(i);
			}
			function K(t, e) {
				const r = (4 / 3) * Math.tan(e / 4),
					n = Math.cos(t),
					i = Math.sin(t),
					o = Math.cos(t + e),
					s = Math.sin(t + e);
				return [n, i, n - i * r, i + n * r, o + s * r, s - o * r, o, s];
			}
			function tt(t, e, r, n, i, o, s, a, u) {
				const l = Math.sin((u * Q) / 360),
					c = Math.cos((u * Q) / 360),
					f = (c * (t - r)) / 2 + (l * (e - n)) / 2,
					h = (-l * (t - r)) / 2 + (c * (e - n)) / 2;
				if (0 === f && 0 === h) return [];
				if (0 === s || 0 === a) return [];
				(s = Math.abs(s)), (a = Math.abs(a));
				const d = (f * f) / (s * s) + (h * h) / (a * a);
				d > 1 && ((s *= Math.sqrt(d)), (a *= Math.sqrt(d)));
				const p = (function (t, e, r, n, i, o, s, a, u, l) {
						const c = (l * (t - r)) / 2 + (u * (e - n)) / 2,
							f = (-u * (t - r)) / 2 + (l * (e - n)) / 2,
							h = s * s,
							d = a * a,
							p = c * c,
							g = f * f;
						let m = h * d - h * g - d * p;
						m < 0 && (m = 0), (m /= h * g + d * p), (m = Math.sqrt(m) * (i === o ? -1 : 1));
						const v = ((m * s) / a) * f,
							y = ((m * -a) / s) * c,
							b = l * v - u * y + (t + r) / 2,
							x = u * v + l * y + (e + n) / 2,
							w = (c - v) / s,
							M = (f - y) / a,
							S = (-c - v) / s,
							A = (-f - y) / a,
							_ = Z(1, 0, w, M);
						let T = Z(w, M, S, A);
						return 0 === o && T > 0 && (T -= Q), 1 === o && T < 0 && (T += Q), [b, x, _, T];
					})(t, e, r, n, i, o, s, a, l, c),
					g = [];
				let m = p[2],
					v = p[3];
				const y = Math.max(Math.ceil(Math.abs(v) / (Q / 4)), 1);
				v /= y;
				for (let t = 0; t < y; t++) g.push(K(m, v)), (m += v);
				return g.map(t => {
					for (let e = 0; e < t.length; e += 2) {
						let r = t[e + 0],
							n = t[e + 1];
						(r *= s), (n *= a);
						const i = c * r - l * n,
							o = l * r + c * n;
						(t[e + 0] = i + p[0]), (t[e + 1] = o + p[1]);
					}
					return t;
				});
			}
			function et(t) {
				for (
					var e, r = [], n = 0, i = 0, o = 0, s = 0, a = null, u = null, l = 0, c = 0, f = 0, h = t.length;
					f < h;
					f++
				) {
					var d = t[f],
						p = d[0];
					switch (p) {
						case 'M':
							(o = d[1]), (s = d[2]);
							break;
						case 'A':
							var g = tt(l, c, d[6], d[7], d[4], d[5], d[1], d[2], d[3]);
							if (!g.length) continue;
							g = g.map(t => {
								const [e, r, n, i, o, s, a, u] = t;
								return { x1: n, y1: i, x2: o, y2: s, x: a, y: u };
							});
							for (var m, v = 0; v < g.length; v++)
								(d = ['C', (m = g[v]).x1, m.y1, m.x2, m.y2, m.x, m.y]), v < g.length - 1 && r.push(d);
							break;
						case 'S':
							var y = l,
								b = c;
							('C' != e && 'S' != e) || ((y += y - n), (b += b - i)),
								(d = ['C', y, b, d[1], d[2], d[3], d[4]]);
							break;
						case 'T':
							'Q' == e || 'T' == e ? ((a = 2 * l - a), (u = 2 * c - u)) : ((a = l), (u = c)),
								(d = nt(l, c, a, u, d[1], d[2]));
							break;
						case 'Q':
							(a = d[1]), (u = d[2]), (d = nt(l, c, d[1], d[2], d[3], d[4]));
							break;
						case 'L':
							d = rt(l, c, d[1], d[2]);
							break;
						case 'H':
							d = rt(l, c, d[1], c);
							break;
						case 'V':
							d = rt(l, c, l, d[1]);
							break;
						case 'Z':
							d = rt(l, c, o, s);
					}
					(e = p),
						(l = d[d.length - 2]),
						(c = d[d.length - 1]),
						d.length > 4 ? ((n = d[d.length - 4]), (i = d[d.length - 3])) : ((n = l), (i = c)),
						r.push(d);
				}
				return r;
			}
			function rt(t, e, r, n) {
				return ['C', t, e, r, n, r, n];
			}
			function nt(t, e, r, n, i, o) {
				return ['C', t / 3 + (2 / 3) * r, e / 3 + (2 / 3) * n, i / 3 + (2 / 3) * r, o / 3 + (2 / 3) * n, i, o];
			}
			r(0).glMatrix.setMatrixArrayType(Array);
			var it = r(58),
				ot = r.n(it);
			function st([t, e, r = 0], [n, i, o = 0]) {
				return Math.hypot(n - t, i - e, o - r);
			}
			function at(t) {
				if (null != t.totalLength) return t.totalLength;
				let e = 0;
				return (
					t.forEach(t => {
						let r = t[0];
						for (let n = 1; n < t.length; n++) {
							const i = t[n];
							(e += st(r, i)), (r = i);
						}
					}),
					(t.totalLength = e),
					e
				);
			}
			function ut(t, e, r = !0) {
				if (((e = Number(e)), !Number.isFinite(e)))
					throw new TypeError(
						"Failed to execute 'getPointAtLength' on figure: The provided float value is non-finite.",
					);
				if (e <= 0) throw new TypeError('Length must > 0');
				if (e >= at(t)) {
					const e = t[t.length - 1],
						r = e[e.length - 2],
						n = e[e.length - 1],
						i = Math.atan2(n[1] - r[1], n[0] - r[0]);
					return { current: t.map(t => [...t]), point: { x: n[0], y: n[1], angle: i } };
				}
				const n = [];
				for (let i = 0; i < t.length; i++) {
					n[i] = [];
					const o = t[i];
					let s = o[0];
					for (let a = 1; a < o.length; a++) {
						const u = o[a],
							l = st(s, u);
						if (e < l) {
							const c = e / l,
								f = Math.atan2(u[1] - s[1], u[0] - s[0]),
								h = { x: s[0] * (1 - c) + u[0] * c, y: s[1] * (1 - c) + u[1] * c, angle: f };
							if ((n[i].push(s), e > 0 && n[i].push([h.x, h.y]), !r)) return { current: n, point: h };
							const d = [],
								p = i;
							for (; i < t.length; i++) {
								for (d[i - p] = [], i === p && d[0].push([h.x, h.y]); a < o.length; a++)
									d[i - p].push(o[a]);
								a = 0;
							}
							return { current: n, point: h, rest: d };
						}
						(e -= l), n[i].push(s), (s = u);
					}
				}
			}
			function lt(t, e) {
				if (((e = Number(e)), !Number.isFinite(e)))
					throw new TypeError(
						"Failed to execute 'getPointAtLength' on figure: The provided float value is non-finite.",
					);
				if (t.length <= 0) return { x: 0, y: 0, angle: 0 };
				if (e <= 0) {
					const e = t[0][0],
						r = t[0][1],
						n = Math.atan2(r[1] - e[1], r[0] - e[0]);
					return { x: e[0], y: e[1], angle: n };
				}
				return ut(t, e, !1).point;
			}
			r(0).glMatrix.setMatrixArrayType(Array),
				r(0).glMatrix.setMatrixArrayType(Array),
				r(0).glMatrix.setMatrixArrayType(Array);
			const ct = 2 * Math.PI;
			function ft(t, e, r, n, i) {
				(i %= ct) < 0 && (i += ct);
				const o = Math.tan(i);
				if (Math.abs(o) < 1e5) {
					const s = e - o * t,
						a = 1 / r ** 2 + o ** 2 / n ** 2;
					let u = -1;
					(i <= Math.PI / 2 || i > (3 * Math.PI) / 2) && (u = 1);
					const l = u * Math.sqrt(1 / a) + t;
					return [l, o * l + s];
				}
				return i < Math.PI ? [t, e + n] : [t, e - n];
			}
			r(0).glMatrix.setMatrixArrayType(Array);
			const ht = Symbol('contours'),
				dt = Symbol('path'),
				pt = Symbol('simplify'),
				gt = Symbol('scale');
			class mt {
				constructor(t = {}) {
					'string' == typeof t && (t = { path: t }),
						t.path ? (this[dt] = $()(t.path)) : (this[dt] = []),
						(this[ht] = null),
						(this[pt] = t.simplify || 0),
						(this[gt] = t.scale || 1);
				}
				get contours() {
					let t = null;
					if (!this[ht] && this[dt]) {
						const t = et(J()(this[dt]));
						(this[ht] = ot()(t, this[gt], this[pt])),
							(this[ht].path = t),
							(this[ht].simplify = this[pt]),
							(this[ht].scale = this[gt]);
					}
					return (
						this[ht] &&
							((t = this[ht].map(t => [...t])),
							(t.path = this[ht].path),
							(t.simplify = this[ht].simplify),
							(t.scale = this[ht].scale)),
						t
					);
				}
				get path() {
					return this[dt];
				}
				get simplify() {
					return this[pt];
				}
				get boundingBox() {
					const t = this.contours;
					if (t && t.length) {
						const e = t.reduce((t, e) => [...t, ...e]);
						return Y()(e);
					}
					return [
						[0, 0],
						[0, 0],
					];
				}
				get boundingCenter() {
					const t = this.boundingBox;
					return t ? [0.5 * (t[0][0] + t[1][0]), 0.5 * (t[0][1] + t[1][1])] : [0, 0];
				}
				normalize(t = 0, e = 0) {
					const r = et(J()(this[dt])).map(([r, ...n]) => {
						const i = [r];
						for (let r = 0; r < n.length; r += 2) {
							const o = n[r] - t,
								s = n[r + 1] - e;
							i.push(o, s);
						}
						return i;
					});
					return this.beginPath(), this[dt].push(...r), this;
				}
				getPointAtLength(t) {
					return this.contours ? lt(this[ht], t) : null;
				}
				getTotalLength() {
					return this.contours ? at(this[ht]) : 0;
				}
				addPath(t) {
					(this[ht] = null), 'string' == typeof t && (t = $()(t)), this[dt].push(...t);
				}
				beginPath() {
					(this[dt] = []), (this[ht] = null);
				}
				clear() {
					this.beginPath();
				}
				ellipse(t, e, r, n, i, o, s, a = 0) {
					if (((o += i), (s += i), r <= 0 || n <= 0 || s === o)) return;
					const u = 2 * Math.PI;
					s < o && (s = o + u + ((s - o) % u)), s - o > u && (s = o + u);
					const l = s - o;
					let c = this[dt].length > 0 && l < u ? 'L' : 'M';
					const f = a ? -1 : 1,
						h = ft(t, e, r, n, o),
						d = ft(t, e, r, n, s),
						p = Number(!a);
					let g = l > Math.PI ? 1 : 0;
					a && (g = 1 - g),
						l >= u && (d[1] -= 0.01 * f),
						(c += h.join(' ')),
						(c += `A${r} ${n} 0 ${g} ${p} ${d.join(' ')}`),
						l >= u && (c += 'Z'),
						this.addPath(c);
				}
				arc(t, e, r, n, i, o = 0) {
					return this.ellipse(t, e, r, r, 0, n, i, o);
				}
				arcTo(t, e, r, n, i, o, s) {
					(this[ht] = null), this[dt].push(['A', t, e, r, n, i, o, s]);
				}
				moveTo(t, e) {
					(this[ht] = null), this[dt].push(['M', t, e]);
				}
				lineTo(t, e) {
					(this[ht] = null), this[dt].push(['L', t, e]);
				}
				bezierCurveTo(t, e, r, n, i, o) {
					(this[ht] = null), this[dt].push(['C', t, e, r, n, i, o]);
				}
				quadraticCurveTo(t, e, r, n) {
					(this[ht] = null), this[dt].push(['Q', t, e, r, n]);
				}
				rect(t, e, r, n) {
					const i = `M${t} ${e}L${t + r} ${e}L${t + r} ${e + n}L${t} ${e + n}Z`;
					this.addPath(i);
				}
				closePath() {
					this[ht] = null;
					let t = [];
					const e = this[dt].length;
					e > 0 && (t = this[dt][e - 1]), 'Z' !== t[0] && 'z' !== t[0] && this[dt].push(['Z']);
				}
			}
			var vt = r(88),
				yt = r.n(vt),
				bt = r(4);
			r(0).glMatrix.setMatrixArrayType(Array);
			const xt = bt.create(),
				wt = bt.create(),
				Mt = bt.create(),
				St = bt.create(),
				At = bt.create(),
				_t = bt.create(),
				Tt = r(145),
				Et = Tt.computeMiter,
				Ot = Tt.normal,
				Ct = Tt.direction;
			function Rt(t) {
				if (!(this instanceof Rt)) return new Rt(t);
				(t = t || {}),
					(this.miterLimit = yt()(t.miterLimit, 10)),
					(this.thickness = yt()(t.thickness, 1)),
					(this.join = t.join || 'miter'),
					(this.cap = t.cap || 'butt'),
					(this._normal = null),
					(this._lastFlip = -1),
					(this._started = !1);
			}
			function Lt(t, e, r, n) {
				const i = t.positions;
				bt.scaleAndAdd(xt, e, r, -n), i.push(bt.clone(xt)), bt.scaleAndAdd(xt, e, r, n), i.push(bt.clone(xt));
			}
			(Rt.prototype.mapThickness = function (t, e, r) {
				return this.thickness;
			}),
				(Rt.prototype.build = function (t, e = !1) {
					const r = { positions: [], cells: [] };
					if ((t = [...t]).length <= 1) return r;
					let n = null;
					if (e) {
						const [e, r] = t,
							i = [r[0] - e[0], r[1] - e[1]];
						(n = bt.scaleAndAdd(bt.create(), e, i, 1e-7)), t.unshift([...t[t.length - 2]]);
					}
					const i = t.length;
					(this._lastFlip = -1), (this._started = !1), (this._normal = null);
					for (let o = 1, s = 0; o < i; o++) {
						const i = t[o - 1],
							a = t[o],
							u = o < t.length - 1 ? t[o + 1] : null,
							l = this.mapThickness(a, o, t);
						s += this._seg(r, s, i, a, u, l / 2, e, n);
					}
					return (
						e &&
							((r.positions = r.positions.slice(2)),
							(r.cells = r.cells.slice(2).map(([t, e, r]) => [t - 2, e - 2, r - 2]))),
						r
					);
				}),
				(Rt.prototype._seg = function (t, e, r, n, i, o, s, a) {
					let u = 0;
					const l = t.cells,
						c = t.positions,
						f = 'square' === this.cap,
						h = 'bevel' === this.join;
					if (
						(Ct(Mt, n, r),
						this._normal || ((this._normal = bt.create()), Ot(this._normal, Mt)),
						this._started ||
							((this._started = !0),
							f && (bt.scaleAndAdd(wt, r, Mt, -o), (r = wt)),
							Lt(t, r, this._normal, o)),
						l.push([e + 0, e + 1, e + 2]),
						s || i)
					) {
						Ct(St, i || a, n);
						let r = Et(At, _t, Mt, St, o);
						r = Math.min(r, 1e20);
						let s = bt.dot(At, this._normal) < 0 ? -1 : 1,
							f = h;
						if (!f && 'miter' === this.join) {
							r / o > this.miterLimit && ((r = this.miterLimit * o), (f = !0));
						}
						f
							? (bt.scaleAndAdd(xt, n, this._normal, -o * s),
							  c.push(bt.clone(xt)),
							  bt.scaleAndAdd(xt, n, _t, r * s),
							  c.push(bt.clone(xt)),
							  l.push(this._lastFlip !== -s ? [e, e + 2, e + 3] : [e + 2, e + 1, e + 3]),
							  i &&
									(Ot(xt, St),
									bt.copy(this._normal, xt),
									bt.scaleAndAdd(xt, n, xt, -o * s),
									c.push(bt.clone(xt)),
									l.push([e + 2, e + 3, e + 4]),
									u++),
							  (u += 2))
							: (Lt(t, n, _t, r),
							  l.push(1 === this._lastFlip ? [e, e + 2, e + 3] : [e + 2, e + 1, e + 3]),
							  (s = -1),
							  bt.copy(this._normal, _t),
							  (u += 2)),
							(this._lastFlip = s);
					} else
						Ot(this._normal, Mt),
							f && (bt.scaleAndAdd(wt, n, Mt, o), (n = wt)),
							Lt(t, n, this._normal, o),
							l.push(1 === this._lastFlip ? [e, e + 2, e + 3] : [e + 2, e + 1, e + 3]),
							(u += 2);
					return u;
				});
			var kt = Rt;
			function Dt(t) {
				return 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5];
			}
			r(0).glMatrix.setMatrixArrayType(Array);
			var jt = r(132),
				Pt = r.n(jt);
			function qt(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e &&
						(n = n.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function It(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2
						? qt(r, !0).forEach(function (e) {
								Nt(t, e, r[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: qt(r).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
						  });
				}
				return t;
			}
			function Nt(t, e, r) {
				return (
					e in t
						? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (t[e] = r),
					t
				);
			}
			r(0).glMatrix.setMatrixArrayType(Array);
			const Ft = Symbol('mesh'),
				Ut = Symbol('contours'),
				Bt = Symbol('stroke'),
				zt = Symbol('fill'),
				Gt = Symbol('bound'),
				Vt = Symbol('strokeColor'),
				Ht = Symbol('fillColor'),
				$t = Symbol('transform'),
				Wt = Symbol('uniforms'),
				Yt = Symbol('texOptions'),
				Xt = Symbol('blend'),
				Jt = Symbol('applyTexture'),
				Qt = Symbol('applyTransform'),
				Zt = Symbol('applyGradientTransform'),
				Kt = Symbol('gradient'),
				te = Symbol('filter'),
				ee = Symbol('opacity'),
				re = Symbol('program'),
				ne = Symbol('attributes'),
				ie = Symbol('pass');
			function oe(t, e) {
				const [r, n] = e[1];
				for (let e = 0; e < t.length; e++) {
					const i = t[e];
					(i[0] = (2 * i[0]) / r - 1), (i[1] = (2 * i[1]) / n - 1);
				}
			}
			function se(t, e, r, n, i) {
				const [o, s] = (function ([t, e, r], n, i, o) {
					return (
						(t = 0.5 * (t + 1) * n),
						(e = 0.5 * (1 - e) * i),
						Number.isFinite(o) ? [t, e, (r = 0.5 * (r + 1) * o)] : [t, e]
					);
				})(t, r, n);
				return (
					(t[0] = o * e[0] + s * e[2] + e[4]), (t[1] = o * e[1] + s * e[3] + e[5]), i && (t[1] = n - t[1]), t
				);
			}
			function ae([t, e], [r, n, i, o], { scale: s, repeat: a }) {
				return s || ((t /= i), (e = 1 - (1 - e) / o), (t -= r), (e += n)), [t, e, 0];
			}
			class ue {
				constructor(t, { width: e, height: r } = { width: 300, height: 150 }) {
					(this[Bt] = null),
						(this[zt] = null),
						(this[Gt] = [
							[0, 0],
							[e, r],
						]),
						(this[$t] = [1, 0, 0, 1, 0, 0]),
						(this[ee] = 1),
						(this[Wt] = {}),
						(this[te] = []),
						(this[Xt] = null),
						(this[Yt] = {}),
						(this.contours = t.contours),
						(this[re] = null),
						(this[ne] = {}),
						(this[ie] = []);
				}
				get width() {
					return this[Gt][1][0];
				}
				get height() {
					return this[Gt][1][1];
				}
				get contours() {
					return this[Ut];
				}
				set contours(t) {
					(this[Ft] = null), (this[Ut] = t);
					const e = t.scale,
						r = this.transformScale / e;
					(r > 1.5 || r < 0.67) && this.accurate(this.transformScale);
				}
				setProgram(t) {
					this[re] = t;
				}
				get program() {
					return this[re];
				}
				setAttribute(t, e) {
					null == e ? delete this[ne][t] : (this[ne][t] = e);
				}
				getOpacity() {
					return this[ee];
				}
				setOpacity(t) {
					if (t < 0 || t > 1) throw new TypeError('Invalid opacity value.');
					this[Ft] &&
						this[Ft].positions.forEach(e => {
							e[2] = 1 / e[2] > 0 ? t : -t;
						}),
						(this[ee] = t);
				}
				getPointAtLength(t) {
					return lt(this[Ut], t);
				}
				getTotalLength() {
					return at(this[Ut]);
				}
				get blend() {
					return null == this[Xt] ? 'auto' : this[Xt];
				}
				set blend(t) {
					(this[Xt] = t), this[Ft] && (this[Ft].enableBlend = this.enableBlend);
				}
				get boundingBox() {
					if (this[Ft] && this[Ft].boundingBox) return this[Ft].boundingBox;
					const t = this.meshData;
					if (t) {
						let { positions: e } = t;
						const r = i.mat2d.invert(Array.of(0, 0, 0, 0, 0, 0), this[$t]),
							[n, o] = this[Gt][1];
						return (
							(e = e.map(([t, e]) => se([t, e], r, n, o, !1))),
							e.length
								? ((t.boundingBox = Y()(e)), t.boundingBox)
								: [
										[0, 0],
										[0, 0],
								  ]
						);
					}
					return [
						[0, 0],
						[0, 0],
					];
				}
				get boundingCenter() {
					const t = this.boundingBox;
					return t ? [0.5 * (t[0][0] + t[1][0]), 0.5 * (t[0][1] + t[1][1])] : [0, 0];
				}
				get lineWidth() {
					return this[Bt] ? this[Bt].thickness : 0;
				}
				get lineCap() {
					return this[Bt] ? this[Bt].cap : '';
				}
				get lineJoin() {
					return this[Bt] ? this[Bt].join : '';
				}
				get miterLimit() {
					return this[Bt] ? this[Bt].miterLimit : 0;
				}
				get strokeStyle() {
					return this[Vt] && 0 !== this[Vt][3] ? Object(s.a)(this[Vt]) : '';
				}
				get lineDash() {
					return this[Bt] ? this[Bt].lineDash : null;
				}
				get lineDashOffset() {
					return this[Bt] ? this[Bt].lineDashOffset : 0;
				}
				get fillStyle() {
					return this[Ht] && 0 !== this[Ht][3] ? Object(s.a)(this[Ht]) : '';
				}
				get gradient() {
					return this[Kt];
				}
				get texture() {
					return this[Wt].u_texSampler ? { image: this[Wt].u_texSampler._img, options: this[Yt] } : null;
				}
				get enableBlend() {
					return !0 === this[Xt] || !1 === this[Xt]
						? this[Xt]
						: this[ee] < 1 ||
								(null != this[Vt] && this[Vt][3] < 1) ||
								(null != this[Ht] && this[Ht][3] < 1) ||
								(null != this[Wt].u_colorMatrix && this[Wt].u_colorMatrix[18] < 1) ||
								null != this[Wt].u_radialGradientVector ||
								this.beforeRender ||
								this.afterRender;
				}
				get filterCanvas() {
					return /blur|drop-shadow|url/.test(this.filter);
				}
				get filter() {
					return this[te].join(' ');
				}
				get transformMatrix() {
					return this[$t];
				}
				get transformScale() {
					const t = this[$t];
					return Math.max(Math.hypot(t[0], t[1]), Math.hypot(t[2], t[3]));
				}
				get uniforms() {
					return this[Wt];
				}
				get pass() {
					return this[ie];
				}
				get meshData() {
					if (!this[Ft]) {
						this[zt] || this[Bt] || this.setFill();
						const t = this[Ut],
							e = {};
						if (t && t.length) {
							if (this[zt])
								try {
									const r = Pt()(t);
									(r.positions = r.positions.map(
										t => ((t[1] = this[Gt][1][1] - t[1]), t.push(this[ee]), t),
									)),
										(r.attributes = {
											a_color: Array.from({ length: r.positions.length }).map(() =>
												this[Ht].map(t => Math.round(255 * t)),
											),
										}),
										(e.fill = r);
								} catch (t) {}
							if (this[Bt]) {
								const r = this[Bt].lineDash;
								let n = t;
								if (r) {
									n = (function (t, e, r) {
										let n = 0,
											i = e[0],
											o = t;
										const s = [],
											a = e.length;
										if (r > 0) {
											do {
												(r -= e[n % a]), n++;
											} while (r > 0);
											r < 0 && ((i = -r), n--);
										} else if (r < 0) {
											n = -1;
											do {
												(r += e[(n % a) + a]), n--;
											} while (r < 0);
											r > 0 && (n++, (i = e[(n % a) + a] - r));
										}
										do {
											const t = ut(o, i);
											(o = t.rest), ++n % 2 && s.push(...t.current);
											let r = n % a;
											r < 0 && (r += a), (i = e[r]);
										} while (o);
										return s;
									})(t, r, this[Bt].lineDashOffset);
								}
								const o = n.map((t, e) => {
									const r = t.length > 1 && i.vec2.equals(t[0], t[t.length - 1]);
									return this[Bt].build(t, r);
								});
								o.forEach(t => {
									(t.positions = t.positions.map(
										t => ((t[1] = this[Gt][1][1] - t[1]), t.push(-this[ee]), t),
									)),
										(t.attributes = {
											a_color: Array.from({ length: t.positions.length }).map(() =>
												this[Vt].map(t => Math.round(255 * t)),
											),
										});
								}),
									(e.stroke = g(o));
							}
						}
						const r = g([e.fill, e.stroke]);
						(r.fillPointCount = e.fill ? e.fill.positions.length : 0),
							(r.enableBlend = this.enableBlend),
							oe(r.positions, this[Gt]),
							this[Wt].u_texSampler && this[Jt](r, this[Yt], !1),
							(r.uniforms = this[Wt]),
							(this[Ft] = r);
						const n = this[$t];
						Dt(n) || this[Qt](r, n);
					}
					if (this[re]) {
						const t = this[ne],
							e = this[Ft].positions,
							r = Object.entries(this[re]._attribute);
						for (let n = 0; n < r.length; n++) {
							const [i, o] = r[n];
							if ('a_color' !== i && 'a_sourceRect' !== i && 'ignored' !== o) {
								const r = t[i];
								if (((this[Ft].attributes[i] = []), 'uv' !== i || r))
									for (let t = 0; t < e.length; t++) {
										const s = e[t];
										this[Ft].attributes[i].push(r ? r(s, n, e) : Array(o.size).fill(0));
									}
								else {
									const t = Y()(e),
										[r, n] = [t[1][0] - t[0][0], t[1][1] - t[0][1]];
									for (let o = 0; o < e.length; o++) {
										const s = e[o],
											a = [(s[0] - t[0][0]) / r, (s[1] - t[0][1]) / n];
										this[Ft].attributes[i].push(a);
									}
								}
							}
						}
					}
					return this[Ft];
				}
				[Qt](t, e) {
					const { positions: r } = t,
						[n, i] = this[Gt][1];
					for (let t = 0; t < r.length; t++) {
						se(r[t], e, n, i, !0);
					}
					oe(r, this[Gt]);
				}
				[Zt](t) {
					const e = this[Gt][1][1],
						r = this[Wt].u_radialGradientVector;
					if (r) {
						let [n, i, , o, s] = r;
						(i = e - i),
							(s = e - s),
							(r[0] = n * t[0] + i * t[2] + t[4]),
							(r[1] = e - (n * t[1] + i * t[3] + t[5])),
							(r[3] = o * t[0] + s * t[2] + t[4]),
							(r[4] = e - (o * t[1] + s * t[3] + t[5])),
							(this[Wt].u_radialGradientVector = r);
					}
				}
				[Jt](t, e, r) {
					const n = this[Wt].u_texSampler;
					if (!n) return;
					const { width: o, height: s } = n._img,
						a = this[$t],
						u = e.srcRect;
					let l = e.rect || [0, 0];
					e.rotated && (l = [-l[1], l[0], l[3], l[2]]),
						null == l[2] && (l[2] = u ? u[2] : o),
						null == l[3] && (l[3] = u ? u[3] : s);
					const [c, f] = this[Gt][1];
					if (e.hidden) t.textureCoord = t.positions.map(() => [-1, -1, -1]);
					else if (
						!(
							t.textureCoord &&
							((h = this[Yt].rect),
							(d = e.rect),
							(null == h && null == d) ||
								(null != h &&
									null != d &&
									h[0] === d[0] &&
									h[1] === d[1] &&
									h[2] === d[2] &&
									h[3] === d[3])) &&
							this[Yt].hidden === e.hidden &&
							this[Yt].rotated === e.rotated
						)
					)
						if (r && !Dt(a)) {
							const r = i.mat2d.invert(Array.of(0, 0, 0, 0, 0, 0), a);
							let n = null;
							e.rotated &&
								((n = i.mat2d.rotate(
									Array.of(0, 0, 0, 0, 0, 0),
									i.mat2d.fromValues(1, 0, 0, 1, 0, 0),
									0.5 * Math.PI,
								)),
								(n = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), n, [0, -l[2]]))),
								(t.textureCoord = t.positions.map(([t, i, o]) => {
									if (o > 0) {
										([t, i] = se([t, i], r, c, f, !0)),
											([t, i] = [t / c, i / f]),
											e.rotated &&
												(([t, i] = [2 * t - 1, 2 * i - 1]),
												([t, i] = se([t, i], n, c, f, !0)),
												([t, i] = [t / c, i / f]));
										const o = ae([t, i], [l[0] / l[2], l[1] / l[3], l[2] / c, l[3] / f], e);
										return e.repeat && (o[2] = 1), o;
									}
									return [-1, -1, -1];
								}));
						} else {
							let r = null;
							e.rotated &&
								((r = i.mat2d.rotate(
									Array.of(0, 0, 0, 0, 0, 0),
									i.mat2d.fromValues(1, 0, 0, 1, 0, 0),
									0.5 * Math.PI,
								)),
								(r = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), r, [0, -l[2]]))),
								(t.textureCoord = t.positions.map(([t, n, i]) => {
									if (i > 0) {
										e.rotated
											? (([t, n] = se([t, n], r, c, f, !0)), ([t, n] = [t / c, n / f]))
											: ([t, n] = [0.5 * (t + 1), 0.5 * (n + 1)]);
										const i = ae([t, n], [l[0] / l[2], l[1] / l[3], l[2] / c, l[3] / f], e);
										return e.repeat && (i[2] = 1), i;
									}
									return [-1, -1, -1];
								}));
						}
					var h, d;
					if (u) {
						const e = [u[0] / o, u[1] / s, u[2] / o, u[3] / s];
						t.attributes.a_sourceRect = t.positions.map(() => [...e]);
					} else t.attributes.a_sourceRect = t.positions.map(() => [0, 0, 0, 0]);
				}
				accurate(t) {
					if (!this.contours) return;
					if (this.contours.path) {
						const e = this.contours.simplify,
							r = (function (t, e, r) {
								const n = ot()(t, e, r);
								return (n.path = t), (n.simplify = r), (n.scale = e), n;
							})(this.contours.path, t, e);
						(this[Ft] = null), (this[Ut] = r);
					}
				}
				setResolution({ width: t, height: e }) {
					(this[Gt][1][0] === t && this[Gt][1][1] === e) ||
						((this[Ft] = null),
						(this[Gt][1][0] = t),
						(this[Gt][1][1] = e),
						this[Kt] &&
							(this[Kt].fill
								? this.setGradient(It({}, this[Kt].fill, { type: 'fill' }))
								: this[Kt].stroke && this.setGradient(It({}, this[Kt].stroke, { type: 'stroke' }))),
						this[ie].length &&
							this[ie].forEach(r => {
								r.setResolution({ width: t, height: e });
							}));
				}
				canIgnore() {
					const t = null == this[Bt] || 0 === this[Bt].thickness || 0 === this[Vt][3],
						e = null == this[zt] || 0 === this[Ht][3],
						r = null == this[Wt].u_radialGradientVector,
						n = null == this[Wt].u_texSampler;
					return (
						0 === this[ee] ||
						(null == this[re] && t && e && r && n && !this.beforeRender && !this.afterRender)
					);
				}
				setStroke({
					thickness: t = 1,
					cap: e = 'butt',
					join: r = 'miter',
					miterLimit: n = 10,
					color: i = [0, 0, 0, 0],
					lineDash: o = null,
					lineDashOffset: s = 0,
				} = {}) {
					return (
						(this[Ft] = null),
						(this[Bt] = kt({ thickness: t, cap: e, join: r, miterLimit: n })),
						'string' == typeof i && (i = E(i)),
						(this[Vt] = i),
						(this[Bt].lineDash = o),
						(this[Bt].lineDashOffset = s),
						this
					);
				}
				setFill({ delaunay: t = !0, clean: e = !0, randomization: r = 0, color: n = [0, 0, 0, 0] } = {}) {
					return (
						(this[Ft] = null),
						(this[zt] = { delaunay: t, clean: e, randomization: r }),
						'string' == typeof n && (n = E(n)),
						(this[Ht] = n),
						this
					);
				}
				setTexture(t, e = {}) {
					if (t && t.image) {
						const { image: r, rect: n } = t;
						if (((t = r), e.rect)) for (let t = 0; t < e.rect.length; t++) n[t] = e.rect[t];
						e.rect = n;
					}
					return (
						this[zt] || this.setFill(),
						this.setUniforms({ u_texSampler: t }),
						this[Ft] && this[Jt](this[Ft], e, !0),
						(this[Yt] = e),
						this
					);
				}
				setCircularGradient({ vector: t, colors: e, type: r = 'fill' } = {}) {
					if (3 !== t.length) throw new TypeError('Invalid linearGradient.');
					this.setGradient({ vector: t, colors: e, type: r });
				}
				setLinearGradient({ vector: t, colors: e, type: r = 'fill' } = {}) {
					if (4 !== t.length) throw new TypeError('Invalid linearGradient.');
					this.setGradient({ vector: t, colors: e, type: r });
				}
				setRadialGradient({ vector: t, colors: e, type: r = 'fill' } = {}) {
					if (6 !== t.length) throw new TypeError('Invalid radialGradient.');
					this.setGradient({ vector: t, colors: e, type: r });
				}
				setGradient({ vector: t, colors: e, type: r = 'fill' } = {}) {
					(e = e.map(
						({ offset: t, color: e }) => ('string' == typeof e && (e = E(e)), { offset: t, color: e }),
					)),
						(this[Kt] = this[Kt] || {}),
						(this[Kt][r] = { vector: t, colors: e }),
						e.sort((t, e) => t.offset - e.offset);
					const n = [];
					let i;
					e.forEach(({ offset: t, color: e }) => {
						n.push(t, ...e);
					}),
						(i = 4 === t.length ? [t[0], t[1], 0, t[2], t[3], 0] : [...t]);
					const [, o] = this[Gt][1];
					if (((i[1] = o - i[1]), (i[4] = o - i[4]), n.length < 40 && n.push(-1), n.length > 40))
						throw new Error('Too many colors, should be less than 8 colors');
					return (
						(this[Wt].u_radialGradientVector = i),
						(this[Wt].u_colorSteps = n),
						(this[Wt].u_gradientType = 'fill' === r ? 1 : 0),
						this[Zt](this[$t]),
						this
					);
				}
				setUniforms(t = {}) {
					return Object.assign(this[Wt], t), this;
				}
				setTransform(...t) {
					const e = this[$t];
					if (!i.mat2d.equals(t, e)) {
						this[$t] = t;
						const r = this.transformScale / this.contours.scale;
						(r > 1.5 || r < 0.67) && this.accurate(this.transformScale),
							(this[Ft] || this[Wt].u_radialGradientVector) &&
								(t = i.mat2d.multiply(
									Array.of(0, 0, 0, 0, 0, 0),
									t,
									i.mat2d.invert(Array.of(0, 0, 0, 0, 0, 0), e),
								)),
							this[Ft] && this[Qt](this[Ft], t),
							this[Wt].u_radialGradientVector && this[Zt](t);
					}
					return this;
				}
				transform(...t) {
					const e = this[$t];
					this[$t] = i.mat2d.multiply(Array.of(0, 0, 0, 0, 0, 0), t, e);
					const r = this.transformScale / this.contours.scale;
					return (
						(r > 1.5 || r < 0.67) && this.accurate(this.transformScale),
						this[Ft] && this[Qt](this[Ft], t),
						this[Wt].u_radialGradientVector && this[Zt](t),
						this
					);
				}
				translate(t, e) {
					let r = i.mat2d.create();
					return (r = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), r, [t, e])), this.transform(...r);
				}
				rotate(t, [e, r] = [0, 0]) {
					let n = i.mat2d.create();
					return (
						(n = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), n, [e, r])),
						(n = i.mat2d.rotate(Array.of(0, 0, 0, 0, 0, 0), n, t)),
						(n = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), n, [-e, -r])),
						this.transform(...n)
					);
				}
				scale(t, e = t, [r, n] = [0, 0]) {
					let o = i.mat2d.create();
					return (
						(o = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), o, [r, n])),
						(o = i.mat2d.scale(Array.of(0, 0, 0, 0, 0, 0), o, [t, e])),
						(o = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), o, [-r, -n])),
						this.transform(...o)
					);
				}
				skew(t, e = t, [r, n] = [0, 0]) {
					let o = i.mat2d.create();
					return (
						(o = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), o, [r, n])),
						(o = i.mat2d.multiply(
							Array.of(0, 0, 0, 0, 0, 0),
							o,
							i.mat2d.fromValues(1, Math.tan(e), Math.tan(t), 1, 0, 0),
						)),
						(o = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), o, [-r, -n])),
						this.transform(...o)
					);
				}
				clearFilter() {
					return this.setColorTransform(null), (this[te].length = 0), this;
				}
				setColorTransform(...t) {
					return (
						null === t[0]
							? this.setUniforms({ u_filterFlag: 0, u_colorMatrix: 0 })
							: this.setUniforms({ u_filterFlag: 1, u_colorMatrix: t }),
						this
					);
				}
				transformColor(...t) {
					let e = this.uniforms.u_colorMatrix;
					return (e = e ? m(e, t) : t), this.setColorTransform(...e), this;
				}
				blur(t) {
					return this[te].push(`blur(${t}px)`), this;
				}
				brightness(t = 1) {
					return this[te].push(`brightness(${100 * t}%)`), this.transformColor(...y(t));
				}
				contrast(t = 1) {
					return this[te].push(`contrast(${100 * t}%)`), this.transformColor(...x(t));
				}
				dropShadow(t, e, r = 0, n = [0, 0, 0, 1]) {
					return (
						Array.isArray(n) && (n = Object(s.a)(n)),
						this[te].push(`drop-shadow(${t}px ${e}px ${r}px ${n})`),
						this
					);
				}
				grayscale(t = 1) {
					return this[te].push(`grayscale(${100 * t}%)`), this.transformColor(...v(t));
				}
				hueRotate(t = 0) {
					return this[te].push(`hue-rotate(${t}deg)`), this.transformColor(...A(t));
				}
				invert(t = 1) {
					return this[te].push(`invert(${100 * t}%)`), this.transformColor(...w(t));
				}
				opacity(t = 1) {
					return this[te].push(`opacity(${100 * t}%)`), this.transformColor(...S(t));
				}
				saturate(t = 1) {
					return this[te].push(`saturate(${100 * t}%)`), this.transformColor(...b(t));
				}
				sepia(t = 1) {
					return this[te].push(`sepia(${100 * t}%)`), this.transformColor(...M(t));
				}
				url(t) {
					return this[te].push(`url(${t})`), this;
				}
				isPointCollision(t, e, r = 'both') {
					const [n, i] = this[Gt][1];
					[t, e] = (function ([t, e, r], n, i, o) {
						return (
							(t = (2 * t) / n - 1),
							(e = 1 - (2 * e) / i),
							Number.isFinite(o) ? [t, e, (r = (2 * r) / o - 1)] : [t, e]
						);
					})([t, e], n, i);
					const o = this.meshData,
						{ positions: s, cells: a } = o;
					function u([t, e], [r, n], [i, o]) {
						const s = i - r,
							a = o - n,
							u = ((t - r) * s + (e - n) * a) / (s ** 2 + a ** 2);
						return u >= 0 && u <= 1;
					}
					for (let n = 0; n < a.length; n++) {
						const i = a[n];
						if ('fill' === r && i[0] >= o.fillPointCount) break;
						if ('stroke' === r && i[0] < o.fillPointCount) continue;
						const [[l, c], [f, h], [d, p]] = i.map(t => s[t]),
							g = Math.sign((t - l) * (h - c) - (f - l) * (e - c));
						if (0 === g && u([t, e], [l, c], [f, h])) return !0;
						const m = Math.sign((t - f) * (p - h) - (d - f) * (e - h));
						if (0 === m && u([t, e], [f, h], [d, p])) return !0;
						const v = Math.sign((t - d) * (c - p) - (l - d) * (e - p));
						if (0 === v && u([t, e], [d, p], [l, c])) return !0;
						if ((1 === g && 1 === m && 1 === v) || (-1 === g && -1 === m && -1 === v)) return !0;
					}
					return !1;
				}
				isPointInFill(t, e) {
					return this.isPointCollision(t, e, 'fill');
				}
				isPointInStroke(t, e) {
					return this.isPointCollision(t, e, 'stroke');
				}
				addPass(t, e = {}) {
					const { width: r, height: n } = this,
						i = new mt();
					i.rect(0, 0, r, n);
					const o = new ue(i, { width: r, height: n });
					o.setUniforms(e), o.setProgram(t), this[ie].push(o);
				}
			}
			var le =
					'attribute vec3 a_vertexPosition;\nattribute vec4 a_color;\nvarying vec4 vColor;\nvarying float flagBackground;\n\n#ifdef TEXTURE\nattribute vec3 a_vertexTextureCoord;\nvarying vec3 vTextureCoord;\nattribute vec4 a_sourceRect;\nvarying vec4 vSourceRect;\n#endif\n\n#ifdef GRADIENT\nuniform float u_radialGradientVector[6];\nvarying vec3 vGradientVector1;\nvarying vec3 vGradientVector2;\n#endif\n\n#ifdef GLOBALTRANSFORM\nuniform float u_globalTransform[8];\n\nvoid transformPoint(inout vec2 p) {\n  vec3 m0 = vec3(u_globalTransform[0], u_globalTransform[2], u_globalTransform[5]);\n  vec3 m1 = vec3(u_globalTransform[1], u_globalTransform[4], u_globalTransform[6]);\n  float w = u_globalTransform[3];\n  float h = u_globalTransform[7];\n  float x = p.x;\n  float y = p.y;\n  x = (x + 1.0) * 0.5 * w;\n  y = (1.0 - y) * 0.5 * h;\n  p.x = x * m0.x + y * m0.y + m0.z;\n  p.y = x * m1.x + y * m1.y + m1.z;\n  p.x = 2.0 * (p.x / w - 0.5);\n  p.y = 2.0 * (0.5 - p.y / h);\n}\n#endif\n\nvoid main() {\n  gl_PointSize = 1.0;\n  gl_Position = vec4(a_vertexPosition.xy, 1.0, 1.0);\n  \n#ifdef GRADIENT\n  vGradientVector1 = vec3(u_radialGradientVector[0], u_radialGradientVector[1], u_radialGradientVector[2]);\n  vGradientVector2 = vec3(u_radialGradientVector[3], u_radialGradientVector[4], u_radialGradientVector[5]);\n#endif\n\n#ifdef GLOBALTRANSFORM\n  vec2 xy = a_vertexPosition.xy;\n  transformPoint(xy);\n  gl_Position = vec4(xy, 1.0, 1.0);\n#ifdef GRADIENT\n  vec2 vg1 = vGradientVector1.xy;\n  vec2 vg2 = vGradientVector2.xy;\n  float h = u_globalTransform[7];\n  float y1 = h - vg1.y;\n  float y2 = h - vg2.y;\n\n  vGradientVector1.x = vg1.x * u_globalTransform[0] + y1 * u_globalTransform[2] + u_globalTransform[5];\n  vGradientVector1.y = h - (vg1.x * u_globalTransform[1] + y1 * u_globalTransform[4] + u_globalTransform[6]);\n\n  vGradientVector2.x = vg2.x * u_globalTransform[0] + y2 * u_globalTransform[2] + u_globalTransform[5];\n  vGradientVector2.y = h - (vg2.x * u_globalTransform[1] + y2 * u_globalTransform[4] + u_globalTransform[6]);\n#endif\n#endif\n  \n  flagBackground = a_vertexPosition.z;\n  vColor = a_color;\n\n#ifdef TEXTURE\n  vTextureCoord = a_vertexTextureCoord;\n  vSourceRect = a_sourceRect;\n#endif\n}',
				ce =
					'precision mediump float;\n\nvarying vec4 vColor;\nvarying float flagBackground;\n\n#ifdef TEXTURE\nvarying vec3 vTextureCoord;\nvarying vec4 vSourceRect;\n#endif\n\n#ifdef FILTER\nuniform int u_filterFlag;\nuniform float u_colorMatrix[20];\n#endif\n\n#ifdef GRADIENT\nvarying vec3 vGradientVector1;\nvarying vec3 vGradientVector2;\nuniform float u_colorSteps[40];\nuniform int u_gradientType;\n// uniform float u_radialGradientVector[6];\n\nvoid gradient(inout vec4 color, vec3 gv1, vec3 gv2, float colorSteps[40]) {\n  float t;\n  // center circle radius\n  float cr = gv1.z;\n  // focal circle radius\n  float fr = gv2.z;\n\n  if(cr > 0.0 || fr > 0.0) {\n    // radial gradient\n    vec2 center = gv1.xy;\n    vec2 focal = gv2.xy;\n    float x = focal.x - gl_FragCoord.x;\n    float y = focal.y - gl_FragCoord.y;\n    float dx = focal.x - center.x;\n    float dy = focal.y - center.y;\n    float dr = cr - fr;\n    float a = dx * dx + dy * dy - dr * dr;\n    float b = -2.0 * (y * dy + x * dx + fr * dr);\n    float c = x * x + y * y - fr * fr;\n    t = 1.0 - 0.5 * (1.0 / a) * (-b + sqrt(b * b - 4.0 * a * c));\n  } else {\n    // linear gradient\n    vec2 v1 = gl_FragCoord.xy - gv1.xy;\n    vec2 v2 = gv2.xy - gv1.xy;\n    t = (v1.x * v2.x + v1.y * v2.y) / (v2.x * v2.x + v2.y * v2.y);\n  }\n\n  vec4 colors[8];\n  colors[0] = vec4(colorSteps[1], colorSteps[2], colorSteps[3], colorSteps[4]);\n  colors[1] = vec4(colorSteps[6], colorSteps[7], colorSteps[8], colorSteps[9]);\n  colors[2] = vec4(colorSteps[11], colorSteps[12], colorSteps[13], colorSteps[14]);\n  colors[3] = vec4(colorSteps[16], colorSteps[17], colorSteps[18], colorSteps[19]);\n  colors[4] = vec4(colorSteps[21], colorSteps[22], colorSteps[23], colorSteps[24]);\n  colors[5] = vec4(colorSteps[26], colorSteps[27], colorSteps[28], colorSteps[29]);\n  colors[6] = vec4(colorSteps[31], colorSteps[32], colorSteps[33], colorSteps[34]);\n  colors[7] = vec4(colorSteps[36], colorSteps[37], colorSteps[38], colorSteps[39]);\n  \n  float steps[8];\n  steps[0] = colorSteps[0];\n  steps[1] = colorSteps[5];\n  steps[2] = colorSteps[10];\n  steps[3] = colorSteps[15];\n  steps[4] = colorSteps[20];\n  steps[5] = colorSteps[25];\n  steps[6] = colorSteps[30];\n  steps[7] = colorSteps[35];\n\n  color = colors[0];\n  for (int i = 1; i < 8; i++) {\n    if (steps[i] < 0.0 || steps[i] > 1.0) {\n      break;\n    }\n    if(steps[i] == steps[i - 1]) {\n      color = colors[i];\n    } else {\n      color = mix(color, colors[i], clamp((t - steps[i - 1]) / (steps[i] - steps[i - 1]), 0.0, 1.0));\n    }\n    if (steps[i] >= t) {\n      break;\n    }\n  }\n}\n#endif\n\n#ifdef FILTER\nvoid transformColor(inout vec4 color, in float colorMatrix[20]) {\n  float r = color.r, g = color.g, b = color.b, a = color.a;\n  color[0] = colorMatrix[0] * r + colorMatrix[1] * g + colorMatrix[2] * b + colorMatrix[3] * a + colorMatrix[4];\n  color[1] = colorMatrix[5] * r + colorMatrix[6] * g + colorMatrix[7] * b + colorMatrix[8] * a + colorMatrix[9];\n  color[2] = colorMatrix[10] * r + colorMatrix[11] * g + colorMatrix[12] * b + colorMatrix[13] * a + colorMatrix[14];\n  color[3] = colorMatrix[15] * r + colorMatrix[16] * g + colorMatrix[17] * b + colorMatrix[18] * a + colorMatrix[19];\n}\n#endif\n\nvoid main() {\n  vec4 color = vColor;\n  float opacity = abs(flagBackground);\n\n#ifdef GRADIENT\n  if(u_gradientType > 0 && flagBackground > 0.0 || u_gradientType == 0 && flagBackground <= 0.0) {\n    gradient(color, vGradientVector1, vGradientVector2, u_colorSteps);\n  }\n#endif\n\n  if(opacity < 1.0) {\n    color.a *= opacity;\n  }\n\n#ifdef TEXTURE\n  if(flagBackground > 0.0) {\n    vec3 texCoord = vTextureCoord;\n\n    if(texCoord.z == 1.0) {\n      texCoord = fract(texCoord);\n    }\n\n    if(texCoord.x <= 1.0 && texCoord.x >= 0.0\n      && texCoord.y <= 1.0 && texCoord.y >= 0.0) {\n      if(vSourceRect.z > 0.0) {\n        texCoord.x = vSourceRect.x + texCoord.x * vSourceRect.z;\n        texCoord.y = 1.0 - (vSourceRect.y + (1.0 - texCoord.y) * vSourceRect.w);\n      }\n      vec4 texColor = texture2D(u_texSampler, texCoord.xy);\n      float alpha = texColor.a;\n      if(opacity < 1.0) {\n        texColor.a *= opacity;\n        alpha *= mix(0.465, 1.0, opacity);\n      }\n      // color = mix(color, texColor, texColor.a);\n      color.rgb = mix(color.rgb, texColor.rgb, alpha);\n      // color.rgb = mix(texColor.rgb, color.rgb, color.a);\n      color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));\n      color.a = texColor.a + (1.0 - texColor.a) * color.a;\n    }\n  }\n#endif\n\n#ifdef FILTER\n  if(u_filterFlag > 0) {\n    transformColor(color, u_colorMatrix);\n  }\n#endif\n\n  gl_FragColor = color;\n}',
				fe =
					'attribute vec3 a_vertexPosition;\nattribute vec4 a_color;\nvarying vec4 vColor;\nvarying float flagBackground;\nattribute vec4 a_transform0;\nattribute vec4 a_transform1;\n\n#ifdef TEXTURE\nattribute vec3 a_vertexTextureCoord;\nvarying vec3 vTextureCoord;\nattribute float a_frameIndex;\nvarying float frameIndex;\nattribute vec4 a_sourceRect;\nvarying vec4 vSourceRect;\n#endif\n\n#ifdef CLOUDFILTER\nattribute vec4 a_colorCloud0;\nattribute vec4 a_colorCloud1;\nattribute vec4 a_colorCloud2;\nattribute vec4 a_colorCloud3;\nattribute vec4 a_colorCloud4;\nvarying vec4 colorCloud0;\nvarying vec4 colorCloud1;\nvarying vec4 colorCloud2;\nvarying vec4 colorCloud3;\nvarying vec4 colorCloud4;\n#endif\n\n#ifdef CLOUDCOLOR\nattribute vec4 a_fillCloudColor;\nattribute vec4 a_strokeCloudColor;\n#endif\n\n#ifdef GRADIENT\nuniform float u_radialGradientVector[6];\nvarying vec3 vGradientVector1;\nvarying vec3 vGradientVector2;\n#endif\n\n#ifdef GLOBALTRANSFORM\nuniform float u_globalTransform[8];\n#endif\n\nvoid transformPoint(inout vec2 p, vec3 m0, vec3 m1, float w, float h) {\n  float x = p.x;\n  float y = p.y;\n  x = (x + 1.0) * 0.5 * w;\n  y = (1.0 - y) * 0.5 * h;\n  p.x = x * m0.x + y * m0.y + m0.z;\n  p.y = x * m1.x + y * m1.y + m1.z;\n  p.x = 2.0 * (p.x / w - 0.5);\n  p.y = 2.0 * (0.5 - p.y / h);\n}\n\nvoid main() {\n  gl_PointSize = 1.0;\n\n  vec3 m0 = vec3(a_transform0.x, a_transform0.z, a_transform1.y);\n  vec3 m1 = vec3(a_transform0.y, a_transform1.x, a_transform1.z);\n\n  vec2 xy = a_vertexPosition.xy;\n  transformPoint(xy, m0, m1, a_transform0.w, a_transform1.w);\n  gl_Position = vec4(xy, 1.0, 1.0);\n\n#ifdef GRADIENT\n  vGradientVector1 = vec3(u_radialGradientVector[0], u_radialGradientVector[1], u_radialGradientVector[2]);\n  vGradientVector2 = vec3(u_radialGradientVector[3], u_radialGradientVector[4], u_radialGradientVector[5]);\n#endif\n\n#ifdef GLOBALTRANSFORM\n  vec3 m3 = vec3(u_globalTransform[0], u_globalTransform[2], u_globalTransform[5]);\n  vec3 m4 = vec3(u_globalTransform[1], u_globalTransform[4], u_globalTransform[6]);\n  float width = u_globalTransform[3];\n  float height = u_globalTransform[7];\n  transformPoint(xy, m3, m4, width, height);\n  gl_Position = vec4(xy, 1.0, 1.0);\n#ifdef GRADIENT\n  vec2 vg1 = vGradientVector1.xy;\n  vec2 vg2 = vGradientVector2.xy;\n  float h = u_globalTransform[7];\n  float y1 = h - vg1.y;\n  float y2 = h - vg2.y;\n\n  vGradientVector1.x = vg1.x * u_globalTransform[0] + y1 * u_globalTransform[2] + u_globalTransform[5];\n  vGradientVector1.y = h - (vg1.x * u_globalTransform[1] + y1 * u_globalTransform[4] + u_globalTransform[6]);\n\n  vGradientVector2.x = vg2.x * u_globalTransform[0] + y2 * u_globalTransform[2] + u_globalTransform[5];\n  vGradientVector2.y = h - (vg2.x * u_globalTransform[1] + y2 * u_globalTransform[4] + u_globalTransform[6]);\n#endif\n#endif\n  \n  flagBackground = a_vertexPosition.z;\n\n#ifdef CLOUDCOLOR\n  if(flagBackground > 0.0) {\n    vColor = mix(a_color, a_fillCloudColor, a_fillCloudColor.a);\n  } else {\n    vColor = mix(a_color, a_strokeCloudColor, a_strokeCloudColor.a);\n  }\n#else\n  vColor = a_color;\n#endif\n\n#ifdef TEXTURE\n  vTextureCoord = a_vertexTextureCoord;\n  frameIndex = a_frameIndex;\n  vSourceRect = a_sourceRect;\n#endif\n\n#ifdef CLOUDFILTER\n  colorCloud0 = a_colorCloud0;\n  colorCloud1 = a_colorCloud1;\n  colorCloud2 = a_colorCloud2;\n  colorCloud3 = a_colorCloud3;\n  colorCloud4 = a_colorCloud4;\n#endif\n}',
				he =
					'precision mediump float;\n\nvarying vec4 vColor;\nvarying float flagBackground;\n\n#ifdef TEXTURE\nvarying float frameIndex;\nvarying vec3 vTextureCoord;\nvarying vec4 vSourceRect;\n#endif\n\n#ifdef FILTER\nuniform int u_filterFlag;\nuniform float u_colorMatrix[20];\n#endif\n\n#ifdef CLOUDFILTER\nvarying vec4 colorCloud0;\nvarying vec4 colorCloud1;\nvarying vec4 colorCloud2;\nvarying vec4 colorCloud3;\nvarying vec4 colorCloud4;\n#endif\n\n#ifdef GRADIENT\nvarying vec3 vGradientVector1;\nvarying vec3 vGradientVector2;\nuniform float u_colorSteps[40];\nuniform int u_gradientType;\n\nvoid gradient(inout vec4 color, vec3 gv1, vec3 gv2, float colorSteps[40]) {\n  float t;\n  // center circle radius\n  float cr = gv1.z;\n  // focal circle radius\n  float fr = gv2.z;\n\n  if(cr > 0.0 || fr > 0.0) {\n    // radial gradient\n    vec2 center = gv1.xy;\n    vec2 focal = gv2.xy;\n    float x = focal.x - gl_FragCoord.x;\n    float y = focal.y - gl_FragCoord.y;\n    float dx = focal.x - center.x;\n    float dy = focal.y - center.y;\n    float dr = cr - fr;\n    float a = dx * dx + dy * dy - dr * dr;\n    float b = -2.0 * (y * dy + x * dx + fr * dr);\n    float c = x * x + y * y - fr * fr;\n    t = 1.0 - 0.5 * (1.0 / a) * (-b + sqrt(b * b - 4.0 * a * c));\n  } else {\n    // linear gradient\n    vec2 v1 = gl_FragCoord.xy - gv1.xy;\n    vec2 v2 = gv2.xy - gv1.xy;\n    t = (v1.x * v2.x + v1.y * v2.y) / (v2.x * v2.x + v2.y * v2.y);\n  }\n\n  vec4 colors[8];\n  colors[0] = vec4(colorSteps[1], colorSteps[2], colorSteps[3], colorSteps[4]);\n  colors[1] = vec4(colorSteps[6], colorSteps[7], colorSteps[8], colorSteps[9]);\n  colors[2] = vec4(colorSteps[11], colorSteps[12], colorSteps[13], colorSteps[14]);\n  colors[3] = vec4(colorSteps[16], colorSteps[17], colorSteps[18], colorSteps[19]);\n  colors[4] = vec4(colorSteps[21], colorSteps[22], colorSteps[23], colorSteps[24]);\n  colors[5] = vec4(colorSteps[26], colorSteps[27], colorSteps[28], colorSteps[29]);\n  colors[6] = vec4(colorSteps[31], colorSteps[32], colorSteps[33], colorSteps[34]);\n  colors[7] = vec4(colorSteps[36], colorSteps[37], colorSteps[38], colorSteps[39]);\n  \n  float steps[8];\n  steps[0] = colorSteps[0];\n  steps[1] = colorSteps[5];\n  steps[2] = colorSteps[10];\n  steps[3] = colorSteps[15];\n  steps[4] = colorSteps[20];\n  steps[5] = colorSteps[25];\n  steps[6] = colorSteps[30];\n  steps[7] = colorSteps[35];\n\n  color = colors[0];\n  for (int i = 1; i < 8; i++) {\n    if (steps[i] < 0.0 || steps[i] > 1.0) {\n      break;\n    }\n    if(steps[i] == steps[i - 1]) {\n      color = colors[i];\n    } else {\n      color = mix(color, colors[i], clamp((t - steps[i - 1]) / (steps[i] - steps[i - 1]), 0.0, 1.0));\n    }\n    if (steps[i] >= t) {\n      break;\n    }\n  }\n}\n#endif\n\nvoid transformColor(inout vec4 color, in float colorMatrix[20]) {\n  float r = color.r, g = color.g, b = color.b, a = color.a;\n  color[0] = colorMatrix[0] * r + colorMatrix[1] * g + colorMatrix[2] * b + colorMatrix[3] * a + colorMatrix[4];\n  color[1] = colorMatrix[5] * r + colorMatrix[6] * g + colorMatrix[7] * b + colorMatrix[8] * a + colorMatrix[9];\n  color[2] = colorMatrix[10] * r + colorMatrix[11] * g + colorMatrix[12] * b + colorMatrix[13] * a + colorMatrix[14];\n  color[3] = colorMatrix[15] * r + colorMatrix[16] * g + colorMatrix[17] * b + colorMatrix[18] * a + colorMatrix[19];\n}\n\n#ifdef CLOUDFILTER\nvoid buildCloudColor(inout float colorCloudMatrix[20]) {\n  colorCloudMatrix[0] = colorCloud0[0];\n  colorCloudMatrix[1] = colorCloud1[0];\n  colorCloudMatrix[2] = colorCloud2[0];\n  colorCloudMatrix[3] = colorCloud3[0];\n  colorCloudMatrix[4] = colorCloud4[0];\n\n  colorCloudMatrix[5] = colorCloud0[1];\n  colorCloudMatrix[6] = colorCloud1[1];\n  colorCloudMatrix[7] = colorCloud2[1];\n  colorCloudMatrix[8] = colorCloud3[1];\n  colorCloudMatrix[9] = colorCloud4[1];\n\n  colorCloudMatrix[10] = colorCloud0[2];\n  colorCloudMatrix[11] = colorCloud1[2];\n  colorCloudMatrix[12] = colorCloud2[2];\n  colorCloudMatrix[13] = colorCloud3[2];\n  colorCloudMatrix[14] = colorCloud4[2];\n\n  colorCloudMatrix[15] = colorCloud0[3];\n  colorCloudMatrix[16] = colorCloud1[3];\n  colorCloudMatrix[17] = colorCloud2[3];\n  colorCloudMatrix[18] = colorCloud3[3];\n  colorCloudMatrix[19] = colorCloud4[3];\n}\n#endif\n\nvoid main() {\n  vec4 color = vColor;\n  float opacity = abs(flagBackground);\n\n#ifdef GRADIENT\n  if(u_gradientType > 0 && flagBackground > 0.0 || u_gradientType == 0 && flagBackground <= 0.0) {\n    gradient(color, vGradientVector1, vGradientVector2, u_colorSteps);\n  }\n#endif\n\n  if(opacity < 1.0) {\n    color.a *= opacity;\n  }\n\n#ifdef TEXTURE\n  if(flagBackground > 0.0) {\n    vec3 texCoord = vTextureCoord;\n\n    if(texCoord.z == 1.0) {\n      texCoord = fract(texCoord);\n    }\n\n    if(texCoord.x <= 1.0 && texCoord.x >= 0.0\n      && texCoord.y <= 1.0 && texCoord.y >= 0.0) {\n      if(vSourceRect.z > 0.0) {\n        texCoord.x = vSourceRect.x + texCoord.x * vSourceRect.z;\n        texCoord.y = 1.0 - (vSourceRect.y + (1.0 - texCoord.y) * vSourceRect.w);\n      }\n      if(frameIndex < 0.0) {\n        vec4 texColor = texture2D(u_texSampler, texCoord.xy);\n        color = mix(color, texColor, texColor.a);\n      } else {\n        int index = int(floor(clamp(0.0, 11.0, frameIndex)));\n        vec4 texColor;\n        if(index == 0) texColor = texture2D(u_texFrame0, texCoord.xy);\n        else if(index == 1) texColor = texture2D(u_texFrame1, texCoord.xy);\n        else if(index == 2) texColor = texture2D(u_texFrame2, texCoord.xy);\n        else if(index == 3) texColor = texture2D(u_texFrame3, texCoord.xy);\n        else if(index == 4) texColor = texture2D(u_texFrame4, texCoord.xy);\n        else if(index == 5) texColor = texture2D(u_texFrame5, texCoord.xy);\n        else if(index == 6) texColor = texture2D(u_texFrame6, texCoord.xy);\n        else if(index == 7) texColor = texture2D(u_texFrame7, texCoord.xy);\n        else if(index == 8) texColor = texture2D(u_texFrame8, texCoord.xy);\n        else if(index == 9) texColor = texture2D(u_texFrame9, texCoord.xy);\n        else if(index == 10) texColor = texture2D(u_texFrame10, texCoord.xy);\n        else texColor = texture2D(u_texFrame11, texCoord.xy);\n        float alpha = texColor.a;\n        if(opacity < 1.0) {\n          texColor.a *= opacity;\n          alpha *= mix(0.465, 1.0, opacity);\n        }\n        // color = mix(color, texColor, texColor.a);\n        color.rgb = mix(color.rgb, texColor.rgb, alpha);\n        // color.rgb = mix(texColor.rgb, color.rgb, color.a);\n        color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));\n        color.a = texColor.a + (1.0 - texColor.a) * color.a;\n      }\n    }\n  }\n#endif\n\n#ifdef FILTER\n  if(u_filterFlag > 0) {\n    transformColor(color, u_colorMatrix);\n  }\n#endif\n\n#ifdef CLOUDFILTER\n  float colorCloudMatrix[20];\n  buildCloudColor(colorCloudMatrix);\n  transformColor(color, colorCloudMatrix);\n#endif\n\n  gl_FragColor = color;\n}';
			r(0).glMatrix.setMatrixArrayType(Array);
			const de = Symbol('shaders');
			function pe(
				t,
				{ hasTexture: e = !1, hasFilter: r = !1, hasGradient: n = !1, hasGlobalTransform: i = !1 } = {},
			) {
				const o = e | (r << 1) | (n << 2) | (i << 3);
				let s = t[de][o];
				Array.isArray(s) && ((s = t.createProgram(...s)), (t[de][o] = s)),
					t.program !== s && t.useProgram(s, { a_color: { type: 'UNSIGNED_BYTE', normalize: !0 } });
			}
			const ge = [];
			r(0).glMatrix.setMatrixArrayType(Array);
			const me = { autoUpdate: !1, preserveDrawingBuffer: !1, bufferSize: 1500 },
				ve =
					'attribute vec3 a_vertexPosition;\nattribute vec3 a_vertexTextureCoord;\nvarying vec3 vTextureCoord;\nvoid main() {\n  gl_PointSize = 1.0;\n  gl_Position = vec4(a_vertexPosition.xy, 1.0, 1.0);    \n  vTextureCoord = a_vertexTextureCoord;              \n}\n',
				ye =
					'precision mediump float;\nvarying vec3 vTextureCoord;\nuniform sampler2D u_texSampler;\nvoid main() {\n  gl_FragColor = texture2D(u_texSampler, vTextureCoord.xy);\n}\n',
				be = Symbol('glRenderer'),
				xe = Symbol('canvasRenderer'),
				we = Symbol('options'),
				Me = Symbol('globalTransform'),
				Se = Symbol('applyGlobalTransform'),
				Ae = Symbol('canvas');
			function _e(t) {
				const e = t.gl,
					r = t.fbo;
				r && e.bindFramebuffer(e.FRAMEBUFFER, r), t._draw(), r && e.bindFramebuffer(e.FRAMEBUFFER, null);
			}
			function Te(t, e, r, n) {
				const i = t.createTexture(e.canvas),
					o = [
						[
							[0, 0],
							[r, 0],
							[r, n],
							[0, n],
							[0, 0],
						],
					];
				o.closed = !0;
				const s = new ue({ contours: o }, { width: r, height: n });
				s.setTexture(i),
					t.setMeshData([s.meshData]),
					_e(t),
					i.delete(),
					e.clearRect(0, 0, r, n),
					delete e._filter;
			}
			class Ee {
				constructor(t, e = {}) {
					let r = e.contextType;
					if (
						(r ||
							(r =
								'function' == typeof WebGL2RenderingContext
									? 'webgl2'
									: 'function' == typeof WebGLRenderingContext
									? 'webgl'
									: '2d'),
						!t.getContext)
					) {
						const n = t;
						(t = { getContext: () => n, width: e.width, height: e.height }), (n.canvas = t), (r = '2d');
					}
					if (((this[Ae] = t), 'webgl' !== r && 'webgl2' !== r && '2d' !== r))
						throw new Error(`Unknown context type ${r}`);
					if (((e.contextType = r), (this[we] = Object.assign({}, me, e)), 'webgl' === r || 'webgl2' === r)) {
						'webgl2' === r && (this[we].webgl2 = !0);
						const i = new n.a(t, this[we]);
						'webgl2' !== r || i.isWebGL2 || (e.contextType = 'webgl'),
							(function (t) {
								t[de] = [];
								for (let e = 0; e < 16; e++) {
									const r = [],
										n = !!(1 & e),
										i = !!(2 & e),
										o = !!(4 & e),
										s = !!(8 & e);
									n && r.push('#define TEXTURE 1'),
										i && r.push('#define FILTER 1'),
										o && r.push('#define GRADIENT 1'),
										s && r.push('#define GLOBALTRANSFORM 1');
									const a = `${r.join('\n')}\n`,
										u = [];
									n && u.push('uniform sampler2D u_texSampler;'),
										(t[de][e] = [a + u.join('\n') + ce, a + le]);
								}
							})(i),
							pe(i),
							(function (t) {
								for (let t = 0; t < 64; t++) {
									const e = [],
										r = !!(1 & t),
										n = !!(2 & t),
										i = !!(4 & t),
										o = !!(8 & t),
										s = !!(16 & t),
										a = !!(32 & t);
									r && e.push('#define TEXTURE 1'),
										n && e.push('#define FILTER 1'),
										i && e.push('#define GRADIENT 1'),
										o && e.push('#define GLOBALTRANSFORM 1'),
										s && e.push('#define CLOUDCOLOR 1'),
										a && e.push('#define CLOUDFILTER 1');
									const u = `${e.join('\n')}\n`,
										l = [];
									if (r) {
										l.push('uniform sampler2D u_texSampler;');
										for (let t = 0; t < 12; t++) l.push(`uniform sampler2D u_texFrame${t};`);
									}
									ge[t] = [u + l.join('\n') + he, u + fe];
								}
							})();
						const o = i.gl;
						o.clearColor(0, 0, 0, 0),
							o.blendFuncSeparate(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA, o.ONE, o.ONE_MINUS_SRC_ALPHA),
							(this[be] = i);
					} else this[xe] = new d(t, this[we]);
					this[Me] = [1, 0, 0, 1, 0, 0];
				}
				get canvas() {
					return this[Ae];
				}
				get canvasRenderer() {
					return this[xe];
				}
				get glRenderer() {
					return this[be];
				}
				get isWebGL2() {
					return this[be] && this[be].isWebGL2;
				}
				get options() {
					return this[we];
				}
				get globalTransformMatrix() {
					return this[Me];
				}
				[Se](t) {
					const e = this[be] || this[xe];
					if (this[be]) {
						const { width: r, height: n } = this.canvas;
						e.uniforms.u_globalTransform = [...t.slice(0, 3), r, ...t.slice(3), n];
					} else e.setTransform(t);
				}
				createTexture(t) {
					return (this[be] || this[xe]).createTexture(t);
				}
				loadTexture(t, { useImageBitmap: e = !1 } = {}) {
					return (this[be] || this[xe]).loadTexture(t, { useImageBitmap: e });
				}
				createText(
					t,
					{ font: e = '16px arial', fillColor: r = null, strokeColor: n = null, strokeWidth: i = 1 } = {},
				) {
					if (this[be]) {
						const s = o.a.createText(t, { font: e, fillColor: r, strokeColor: n, strokeWidth: i });
						return { image: this.createTexture(s.image), rect: s.rect };
					}
					return { _img: { font: e, fillColor: r, strokeColor: n, strokeWidth: i, text: t } };
				}
				createProgram({ vertex: t, fragment: e, options: r } = {}) {
					if (this[be]) {
						const n = this[be].compileSync(e, t);
						return (n._attribOpts = r), n;
					}
					throw new Error('Context 2D cannot create webgl program.');
				}
				createPassProgram({ vertex: t = ve, fragment: e = ye, options: r } = {}) {
					return this.createProgram({ vertex: t, fragment: e, options: r });
				}
				useProgram(t, e = {}) {
					if (this[be]) {
						const r = Object.assign({}, t._attribOpts, e);
						return this[be].useProgram(t, r);
					}
					throw new Error('Context 2D cannot use webgl program.');
				}
				deleteTexture(t) {
					return (this[be] || this[xe]).deleteTexture(t);
				}
				clear(...t) {
					if (this[be]) {
						const t = this[be].gl;
						t.clear(t.COLOR_BUFFER_BIT);
					} else this[xe].clear(...t);
				}
				drawMeshCloud(t, { clear: e = !1, program: r = null } = {}) {
					const n = this[be] || this[xe],
						i = r || t.program;
					if (this[be]) {
						const r = n.gl;
						if ((e && r.clear(r.COLOR_BUFFER_BIT), i))
							n.program !== i &&
								this.useProgram(i, {
									a_color: { type: 'UNSIGNED_BYTE', normalize: !0 },
									a_fillCloudColor: { type: 'UNSIGNED_BYTE', normalize: !0 },
									a_strokeCloudColor: { type: 'UNSIGNED_BYTE', normalize: !0 },
									a_frameIndex: { type: 'UNSIGNED_BYTE', normalize: !1 },
								});
						else {
							const e = t.mesh.meshData;
							!(function (
								t,
								{
									hasTexture: e = !1,
									hasFilter: r = !1,
									hasGradient: n = !1,
									hasGlobalTransform: i = !1,
									hasCloudColor: o = !1,
									hasCloudFilter: s = !1,
								} = {},
							) {
								const a = e | (r << 1) | (n << 2) | (i << 3) | (o << 4) | (s << 5);
								let u = ge[a];
								Array.isArray(u) && ((u = t.createProgram(...u)), (ge[a] = u)),
									t.program !== u &&
										t.useProgram(u, {
											a_color: { type: 'UNSIGNED_BYTE', normalize: !0 },
											a_fillCloudColor: { type: 'UNSIGNED_BYTE', normalize: !0 },
											a_strokeCloudColor: { type: 'UNSIGNED_BYTE', normalize: !0 },
											a_frameIndex: { type: 'UNSIGNED_BYTE', normalize: !1 },
										});
							})(n, {
								hasTexture: !!e.uniforms.u_texSampler,
								hasFilter: !!e.uniforms.u_filterFlag,
								hasGradient: !!e.uniforms.u_radialGradientVector,
								hasGlobalTransform: !Dt(this[Me]),
								hasCloudColor: t.hasCloudColor,
								hasCloudFilter: t.hasCloudFilter,
							});
						}
						this[Se](this[Me]),
							n.setMeshData([t.meshData]),
							t.beforeRender && t.beforeRender(r, t),
							_e(n),
							t.afterRender && t.afterRender(r, t);
					} else n.setTransform(this[Me]), n.drawMeshCloud(t, { clear: e, hook: !1 });
				}
				drawMeshes(t, { clear: e = !1, program: r = null } = {}) {
					const n = this[be] || this[xe];
					if (this[be]) {
						const i = n.fbo,
							s = (function* (t, e, r = !1) {
								const n = [],
									i = t.options.bufferSize;
								let o = 0,
									s = !1;
								for (let t = 0; t < e.length; t++) {
									const a = e[t];
									if (a instanceof B) n.length && (yield V(n, s)), (o = 0), (s = !1), yield a;
									else {
										const u = a.meshData;
										let l = 0;
										if ((!r || !a.canIgnore()) && u && u.positions.length) {
											a.packIndex = t;
											const e = a.filterCanvas;
											if (((l = u.positions.length), e || o + l > i))
												n.length && (yield V(n, s)), (o = 0), (s = !1);
											else if (o) {
												const t = n[n.length - 1];
												t &&
													(t.filterCanvas ||
														t.afterRender ||
														a.beforeRender ||
														t.pass.length ||
														a.pass.length ||
														t.program !== a.program ||
														!z(t, a, n)) &&
													(yield V(n, s), (o = 0), (s = !1));
											}
											n.push(a), (s = s || a.enableBlend), (o += l);
										}
										t === e.length - 1 && n.length && (yield V(n, s));
									}
								}
							})(this, t, null == r),
							a = n.gl;
						e && a.clear(a.COLOR_BUFFER_BIT);
						const u = !Dt(this[Me]);
						this._drawCalls = 0;
						for (const c of s) {
							this._drawCalls++;
							const s = r || c.program;
							if (c instanceof B) this.drawMeshCloud(c, { clear: e, program: s });
							else {
								const { width: e, height: r } = this.canvas;
								if (
									(c.beforeRender && c.beforeRender(a, c),
									c.pass.length &&
										((this.fbo && this.fbo.width === e && this.fbo.height === r) ||
											(this.fbo = {
												width: e,
												height: r,
												target: n.createFBO(),
												buffer: n.createFBO(),
												swap() {
													[this.target, this.buffer] = [this.buffer, this.target];
												},
											}),
										n.bindFBO(this.fbo.target)),
									!s && c.filterCanvas)
								) {
									pe(n, { hasTexture: !0 });
									let i = this.filterContext;
									if (!i) {
										(i = o.a.createCanvas(e, r).getContext('2d')), (this.filterContext = i);
									}
									const s = t[c.packIndex],
										a = s.filter,
										h = t[c.packIndex + 1],
										d = t[c.packIndex - 1];
									(d && d.filterCanvas && d.filter === a) || (h && h.filterCanvas && h.filter === a)
										? (u && (i.save(), i.transform(...this[Me])),
										  f(s, i, !1),
										  u && i.restore(),
										  (h && h.filterCanvas && s.filter === h.filter) || (l(i, a), Te(n, i, e, r)))
										: (u
												? (i.save(),
												  i.transform(...this[Me]),
												  f(s, i, !1),
												  i.restore(),
												  l(i, a))
												: f(s, i, !0),
										  Te(n, i, e, r));
								} else {
									if (s)
										n.program !== s &&
											this.useProgram(s, { a_color: { type: 'UNSIGNED_BYTE', normalize: !0 } });
									else {
										const t = !!c.uniforms.u_texSampler,
											e = !!c.uniforms.u_filterFlag,
											r = !!c.uniforms.u_radialGradientVector;
										pe(n, { hasTexture: t, hasFilter: e, hasGradient: r, hasGlobalTransform: u });
									}
									c.filterCanvas && console.warn('User program ignored some filter effects.'),
										this[Se](this[Me]),
										n.setMeshData([c]),
										_e(n);
								}
								if (c.pass.length) {
									const t = c.pass.length;
									c.pass.forEach((e, r) => {
										(e.blend = c.enableBlend),
											e.setTexture(n.fbo.texture),
											r === t - 1 ? n.bindFBO(i) : (this.fbo.swap(), n.bindFBO(this.fbo.target)),
											e.program
												? n.useProgram(e.program)
												: ((this.defaultPassProgram =
														this.defaultPassProgram || this.createPassProgram()),
												  n.useProgram(this.defaultPassProgram)),
											n.setMeshData([e.meshData]),
											a.clear(a.COLOR_BUFFER_BIT),
											_e(n);
									});
								}
								c.afterRender && c.afterRender(a, c);
							}
						}
					} else n.setTransform(this[Me]), n.drawMeshes(t, { clear: e });
				}
				drawImage(t, ...e) {
					const r = e.length;
					if (r < 2)
						throw new TypeError(
							`Failed to execute 'drawImage' on 'Renderer': 3 arguments required, but only ${
								e.length + 1
							} present.`,
						);
					if (2 !== r && 4 !== r && 8 !== r)
						throw new TypeError(
							`Failed to execute 'drawImage' on 'Renderer': Valid arities are: [3, 5, 9], but ${
								e.length + 1
							} arguments provided.`,
						);
					let n = null,
						i = null;
					2 === r
						? (n = [e[0], e[1], t.width, t.height])
						: 4 === r
						? (n = e)
						: 8 === r && ((i = e.slice(0, 4)), (n = e.slice(4)));
					const o = this.createTexture(t),
						{ width: s, height: a } = this.canvas,
						u = new mt();
					u.rect(n[0], n[1], s, a);
					const l = new ue(u, { width: s, height: a });
					l.setTexture(o, { rect: n, srcRect: i }), this.drawMeshes([l]), this.deleteTexture(o);
				}
				setGlobalTransform(...t) {
					const e = this[Me];
					return (
						i.mat2d.equals(t, e) ||
							((this[Me] = t),
							(t = i.mat2d.multiply(
								Array.of(0, 0, 0, 0, 0, 0),
								t,
								i.mat2d.invert(Array.of(0, 0, 0, 0, 0, 0), e),
							)),
							this[Se](t)),
						this
					);
				}
				globalTransform(...t) {
					const e = this[Me];
					return (this[Me] = i.mat2d.multiply(Array.of(0, 0, 0, 0, 0, 0), t, e)), this[Se](t), this;
				}
				globalTranslate(t, e) {
					let r = i.mat2d.create();
					return (r = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), r, [t, e])), this.globalTransform(...r);
				}
				globalRotate(t, [e, r] = [0, 0]) {
					let n = i.mat2d.create();
					return (
						(n = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), n, [e, r])),
						(n = i.mat2d.rotate(Array.of(0, 0, 0, 0, 0, 0), n, t)),
						(n = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), n, [-e, -r])),
						this.globalTransform(...n)
					);
				}
				globalScale(t, e = t, [r, n] = [0, 0]) {
					let o = i.mat2d.create();
					return (
						(o = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), o, [r, n])),
						(o = i.mat2d.scale(Array.of(0, 0, 0, 0, 0, 0), o, [t, e])),
						(o = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), o, [-r, -n])),
						this.globalTransform(...o)
					);
				}
				globalSkew(t, e = t, [r, n] = [0, 0]) {
					let o = i.mat2d.create();
					return (
						(o = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), o, [r, n])),
						(o = i.mat2d.multiply(
							Array.of(0, 0, 0, 0, 0, 0),
							o,
							i.mat2d.fromValues(1, Math.tan(e), Math.tan(t), 1, 0, 0),
						)),
						(o = i.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), o, [-r, -n])),
						this.globalTransform(...o)
					);
				}
				transformPoint(t, e, r) {
					let n = this[Me];
					return (
						r && (n = i.mat2d.multiply(Array.of(0, 0, 0, 0, 0, 0), n, r)),
						[t * n[0] + e * n[2] + n[4], t * n[1] + e * n[3] + n[5]]
					);
				}
			}
			r.d(e, 'e', function () {
				return Ee;
			}),
				r.d(e, 'b', function () {
					return mt;
				}),
				r.d(e, 'c', function () {
					return ue;
				}),
				r.d(e, 'd', function () {
					return B;
				}),
				r.d(e, 'f', function () {
					return a.a;
				}),
				r.d(e, 'a', function () {
					return o.a;
				}),
				r(0).glMatrix.setMatrixArrayType(Array);
		},
		function (t, e, r) {
			'use strict';
			r.r(e),
				r.d(e, 'create', function () {
					return o;
				}),
				r.d(e, 'clone', function () {
					return i;
				}),
				r.d(e, 'copy', function () {
					return s;
				}),
				r.d(e, 'scaleAndAdd', function () {
					return a;
				}),
				r.d(e, 'dot', function () {
					return u;
				});
			var n = r(0);
			function i(t) {
				return [t[0], t[1]];
			}
			function o() {
				return [0, 0];
			}
			r(0).glMatrix.setMatrixArrayType(Array);
			const s = n.vec2.copy,
				a = n.vec2.scaleAndAdd,
				u = n.vec2.dot;
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'b', function () {
				return o;
			}),
				r.d(e, 'c', function () {
					return s;
				}),
				r.d(e, 'd', function () {
					return u;
				}),
				r.d(e, 'e', function () {
					return l;
				}),
				r.d(e, 'a', function () {
					return c;
				});
			var n = r(21),
				i = r.n(n);
			r(0).glMatrix.setMatrixArrayType(Array);
			class o {
				constructor({ vector: t, colors: e }) {
					if (!Array.isArray(t) || (4 !== t.length && 6 !== t.length && 3 !== t.length))
						throw new TypeError('Invalid gradient');
					(this.vector = t), (this.colors = e.map(({ offset: t, color: e }) => ({ offset: t, color: s(e) })));
				}
				toString() {
					return JSON.stringify({ vector: this.vector, colors: this.colors });
				}
			}
			function s(t) {
				if (null == t) return t;
				if ((t || (t = 'transparent'), t instanceof o)) return t;
				const e = i()(t);
				if (!e || !e.length) throw new TypeError('Invalid color value.');
				return `rgba(${e.join()})`;
			}
			function a(t, e, r) {
				const n = t.boundingBox[0];
				if (r.vector) {
					let { vector: i, colors: o } = r;
					4 === i.length
						? ((i = [i[0] + n[0], i[1] + n[1], i[2] + n[0], i[3] + n[1]]),
						  t.setLinearGradient({ vector: i, colors: o, type: e }))
						: 3 === i.length
						? ((i = [i[0] + n[0], i[1] + n[1], i[2]]),
						  t.setCircularGradient({ vector: i, colors: o, type: e }))
						: ((i = [i[0] + n[0], i[1] + n[1], i[2], i[3] + n[0], i[4] + n[1], i[5]]),
						  t.setRadialGradient({ vector: i, colors: o, type: e }));
				} else t.gradient && t.gradient[e] && (delete t.gradient[e], delete t.uniforms.u_radialGradientVector);
			}
			function u(t, { color: e }) {
				return a(t, 'fill', e), e.vector || t.setFill({ color: e }), t;
			}
			function l(
				t,
				{ color: e, lineWidth: r, lineCap: n, lineJoin: i, lineDash: o, lineDashOffset: s, miterLimit: u },
			) {
				a(t, 'stroke', e),
					e.vector && (e = [0, 0, 0, 1]),
					t.setStroke({
						color: e,
						thickness: r,
						cap: n,
						join: i,
						miterLimit: u,
						lineDash: o,
						lineDashOffset: s,
					});
			}
			class c extends Array {
				constructor(t = 0, e = 0, r = 0, n = 0) {
					return (
						Array.isArray(t) && ([t, e, r, n] = t),
						'string' == typeof t && (([t, e, r, n] = i()(t)), (t /= 255), (e /= 255), (r /= 255)),
						super(t, e, r, n),
						this
					);
				}
				get r() {
					return Math.round(255 * this[0]);
				}
				set r(t) {
					this[0] = t / 255;
				}
				get g() {
					return Math.round(255 * this[1]);
				}
				set g(t) {
					this[1] = t / 255;
				}
				get b() {
					return Math.round(255 * this[2]);
				}
				set b(t) {
					this[2] = t / 255;
				}
				get a() {
					return this[3];
				}
				set a(t) {
					this[3] = t;
				}
				get hex() {
					const t = `0${this.r.toString(16)}`.slice(-2),
						e = `0${this.g.toString(16)}`.slice(-2),
						r = `0${this.b.toString(16)}`.slice(-2);
					let n;
					return (
						this.a < 1 && ((n = Math.round(255 * this[3])), (n = `0${n.toString(16)}`.slice(-2))),
						`#${t}${e}${r}${n || ''}`
					);
				}
				get rgba() {
					return `rgba(${this.r},${this.g},${this.b},${this.a})`;
				}
				fromColor(t) {
					return (
						'string' == typeof t && (((t = i()(t))[0] /= 255), (t[1] /= 255), (t[2] /= 255)),
						(this[0] = t[0]),
						(this[1] = t[1]),
						(this[2] = t[2]),
						(this[3] = t[3]),
						this
					);
				}
			}
		},
		function (t, e) {
			var r = (t.exports = { version: '2.6.9' });
			'number' == typeof __e && (__e = r);
		},
		function (t, e, r) {
			'use strict';
			(function (t, n) {
				let i, o;
				r.d(e, 'b', function () {
					return i;
				}),
					r.d(e, 'a', function () {
						return o;
					}),
					r(0).glMatrix.setMatrixArrayType(Array),
					void 0 !== n && 'function' == typeof n.requestAnimationFrame
						? ((i = n.requestAnimationFrame), (o = n.cancelAnimationFrame))
						: ((i = function (e) {
								return setTimeout(() => {
									e(
										(function () {
											if ('undefined' != typeof performance && performance.now)
												return performance.now();
											if (void 0 !== t && t.hrtime) {
												const [e, r] = t.hrtime();
												return 1e3 * e + 1e-6 * r;
											}
											return Date.now ? Date.now() : new Date().getTime();
										})(),
									);
								}, 16);
						  }),
						  (o = function (t) {
								return clearTimeout(t);
						  }));
			}.call(this, r(154), r(63)));
		},
		function (t, e) {
			var r = (t.exports =
				'undefined' != typeof window && window.Math == Math
					? window
					: 'undefined' != typeof self && self.Math == Math
					? self
					: Function('return this')());
			'number' == typeof __g && (__g = r);
		},
		function (t, e, r) {
			var n = r(73)('wks'),
				i = r(54),
				o = r(8).Symbol,
				s = 'function' == typeof o;
			(t.exports = function (t) {
				return n[t] || (n[t] = (s && o[t]) || (s ? o : i)('Symbol.' + t));
			}).store = n;
		},
		function (t, e, r) {
			var n = r(8),
				i = r(6),
				o = r(25),
				s = r(26),
				a = r(32),
				u = function (t, e, r) {
					var l,
						c,
						f,
						h = t & u.F,
						d = t & u.G,
						p = t & u.S,
						g = t & u.P,
						m = t & u.B,
						v = t & u.W,
						y = d ? i : i[e] || (i[e] = {}),
						b = y.prototype,
						x = d ? n : p ? n[e] : (n[e] || {}).prototype;
					for (l in (d && (r = e), r))
						((c = !h && x && void 0 !== x[l]) && a(y, l)) ||
							((f = c ? x[l] : r[l]),
							(y[l] =
								d && 'function' != typeof x[l]
									? r[l]
									: m && c
									? o(f, n)
									: v && x[l] == f
									? (function (t) {
											var e = function (e, r, n) {
												if (this instanceof t) {
													switch (arguments.length) {
														case 0:
															return new t();
														case 1:
															return new t(e);
														case 2:
															return new t(e, r);
													}
													return new t(e, r, n);
												}
												return t.apply(this, arguments);
											};
											return (e.prototype = t.prototype), e;
									  })(f)
									: g && 'function' == typeof f
									? o(Function.call, f)
									: f),
							g && (((y.virtual || (y.virtual = {}))[l] = f), t & u.R && b && !b[l] && s(b, l, f)));
				};
			(u.F = 1),
				(u.G = 2),
				(u.S = 4),
				(u.P = 8),
				(u.B = 16),
				(u.W = 32),
				(u.U = 64),
				(u.R = 128),
				(t.exports = u);
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'f', function () {
				return s;
			}),
				r.d(e, 'a', function () {
					return a;
				}),
				r.d(e, 'b', function () {
					return l;
				}),
				r.d(e, 'c', function () {
					return c;
				}),
				r.d(e, 'd', function () {
					return h;
				}),
				r.d(e, 'e', function () {
					return d;
				});
			var n = r(3),
				i = r(1);
			r(0).glMatrix.setMatrixArrayType(Array);
			const o = {};
			function s(t, e) {
				if (o[t]) return o[t];
				const r = n.a.loadImage(t, { alias: e, useImageBitmap: !1 });
				return null != r ? r : t;
			}
			async function a(t, e, r) {
				let n = e;
				if (
					('string' == typeof e && (n = s(e)),
					n && 'function' == typeof n.then && (n = await n),
					e === t.attributes.texture)
				) {
					n &&
						n.image &&
						(n.sourceRect && (t.attributes.sourceRect = n.sourceRect),
						(t.textureImageRotated = !!n.rotated),
						(n = n.image));
					const { width: e, height: i, textureRect: o } = t.attributes,
						s = t.textureImage;
					(t.textureImage = n),
						!r || s === n || o || (null != e && null != i) || t.updateContours(),
						t.forceUpdate();
				}
				return n;
			}
			const u = Symbol('textureMap');
			function l(t, e) {
				if (((e[u] = e[u] || new Map()), e[u].has(t))) return e[u].get(t);
				const r = e.createTexture(t);
				return /^blob:/.test(t.src) || e[u].set(t, r), r;
			}
			function c(t, e) {
				if (e[u].has(t)) {
					const r = e[u].get(t);
					return e.deleteTexture(r), e[u].delete(t), !0;
				}
				return !1;
			}
			const f = Symbol('textureContext');
			function h(t, e) {
				const r = t.textureImage instanceof String ? String(t.textureImage) : t.textureImage,
					n = t.textureImageRotated,
					o = e.texture;
				if (r) {
					const s = t.originalContentRect;
					let a = t.attributes.textureRect;
					const c = t.attributes.textureRepeat,
						h = t.attributes.sourceRect,
						d = t.renderer;
					if (
						!o ||
						(t[f] && t[f] !== d) ||
						o.image !== r ||
						o.options.repeat !== c ||
						!Object(i.a)(o.options.rect, a) ||
						!Object(i.a)(o.options.srcRect, h)
					) {
						const i = l(r, d);
						a ? ((a[0] += s[0]), (a[1] += s[1])) : (a = s);
						let p = null;
						o && !d[u].has(o.image) && (p = e.uniforms.u_texSampler),
							e.setTexture(i, { rect: a, repeat: c, srcRect: h, rotated: n }),
							p && p.delete && p.delete(),
							(t[f] = d);
					}
				} else o && e.setTexture(null);
			}
			async function d(t, e) {
				if ('string' == typeof e) {
					const t = await fetch(e, { method: 'GET', mode: 'cors', cache: 'default' });
					e = await t.json();
				}
				const r = await s(t),
					n = e.frames;
				return (
					Object.entries(n).forEach(([t, e]) => {
						const { x: n, y: i, w: s, h: a } = e.frame;
						let u = [n, i, s, a];
						const l = e.rotated;
						l && (u = [u[0], u[1], u[3], u[2]]), (o[t] = { image: r, sourceRect: u, rotated: l });
					}),
					r
				);
			}
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'b', function () {
				return f;
			}),
				r.d(e, 'a', function () {
					return h;
				});
			var n = r(5),
				i = r(2);
			r(0).glMatrix.setMatrixArrayType(Array);
			const o = r(219);
			function s(t) {
				return 1 === t.nodeType || i.a.isSpriteNode(t.nodeName);
			}
			function a(t) {
				return Array.from(t.childNodes || []);
			}
			function u(t) {
				return i.a.isSpriteNode(t.nodeName) ? t.parent || t.canvas || t.container : t.parentElement;
			}
			const l = {
				isTag: s,
				existsOne: (t, e) => e.some(e => !!s(e) && (t(e) || l.existsOne(t, a(e)))),
				getSiblings(t) {
					const e = u(t);
					return e && a(e);
				},
				getChildren: a,
				getParent: u,
				getAttributeValue(t, e) {
					if ((1 === t.nodeType && 'class' === e) || 'id' === e) return t[e];
					if (this.hasAttrib(t, e)) {
						let r = t.attributes[e];
						return Array.isArray(r) && (r = `[${r.join()}]`), String(r);
					}
				},
				hasAttrib: (t, e) => null != t.attributes[e],
				removeSubsets: function (t) {
					let e,
						r,
						n,
						i = t.length;
					for (; --i > -1; ) {
						for (e = r = t[i], t[i] = null, n = !0; r; ) {
							if (t.indexOf(r) > -1) {
								(n = !1), t.splice(i, 1);
								break;
							}
							r = u(r);
						}
						n && (t[i] = e);
					}
					return t;
				},
				getName: t => (t.tagName ? t.tagName.toLowerCase() : null),
				findOne: function t(e, r) {
					let n = null;
					for (let i = 0, o = r.length; i < o && !n; i++)
						if (e(r[i])) n = r[i];
						else {
							const o = a(r[i]);
							o && o.length > 0 && (n = t(e, o));
						}
					return n;
				},
				findAll: function t(e, r) {
					let n = [];
					for (let i = 0, o = r.length; i < o; i++) {
						if (!s(r[i])) continue;
						e(r[i]) && n.push(r[i]);
						const o = a(r[i]);
						o && (n = n.concat(t(e, o)));
					}
					return n;
				},
				getText: function t(e) {
					return Array.isArray(e)
						? e.map(t).join('')
						: s(e)
						? t(a(e))
						: 3 === e.nodeType
						? e.nodeValue
						: i.a.isSpriteNode(e.nodeName)
						? e.text
						: '';
				},
			};
			function c(t) {
				if ('string' != typeof t) return t;
				let e = t.match(/\[(bgcolor|fillColor|strokeColor|color)\s*=\s*['"]?\w+['"]?\]/g);
				return (
					e &&
						((e = e.map(t => {
							const e = t.slice(1, -1).split('='),
								r = Object(n.c)(e[1].replace(/['"]/g, ''));
							return [t, `[${e[0]}="${r}"]`];
						})),
						e.forEach(([e, r]) => {
							t = t.replace(e, r);
						})),
					(e = t.match(/\[\w+\s*=\s*['"]\[.+?\]['"]\]/g)),
					e &&
						((e = e.map(t => {
							const e = t.slice(1, -1).split('='),
								r = e[1]
									.slice(2, -2)
									.split(/,/g)
									.map(t => t.trim());
							return [t, `[${e[0]}="[${r}]"]`];
						})),
						e.forEach(([e, r]) => {
							t = t.replace(e, r);
						})),
					t
				);
			}
			function f(t, e) {
				return o.selectAll(c(t), e, { adapter: l });
			}
			function h(t, e) {
				return o.selectOne(c(t), e, { adapter: l });
			}
		},
		function (t, e, r) {
			t.exports = !r(31)(function () {
				return (
					7 !=
					Object.defineProperty({}, 'a', {
						get: function () {
							return 7;
						},
					}).a
				);
			});
		},
		function (t, e, r) {
			'use strict';
			function n(t) {
				return `rgba(${t.map((t, e) => (e < 3 ? Math.round(255 * t) : t)).join()})`;
			}
			r.d(e, 'a', function () {
				return n;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
		},
		function (t, e, r) {
			var n = r(23),
				i = r(92),
				o = r(69),
				s = Object.defineProperty;
			e.f = r(13)
				? Object.defineProperty
				: function (t, e, r) {
						if ((n(t), (e = o(e, !0)), n(r), i))
							try {
								return s(t, e, r);
							} catch (t) {}
						if ('get' in r || 'set' in r) throw TypeError('Accessors not supported!');
						return 'value' in r && (t[e] = r.value), t;
				  };
		},
		function (t, e) {
			t.exports = function (t) {
				return 'object' == typeof t ? null !== t : 'function' == typeof t;
			};
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'a', function () {
				return d;
			});
			var n = r(3),
				i = r(51),
				o = r.n(i),
				s = r(24),
				a = r(19),
				u = r(5),
				l = r(11),
				c = r(2),
				f = r(59);
			r(0).glMatrix.setMatrixArrayType(Array);
			const h = Symbol('mesh');
			class d extends s.a {
				constructor(t = {}) {
					'string' == typeof t && (t = { d: t }),
						super(t),
						(this.effects = {
							d(t, e, r, n, i) {
								const s = (r - n) / (i - n);
								if (s <= 0) return t;
								if (s >= 1) return e;
								const a = o.a._preprocessing(o.a.path2shapes(t), o.a.path2shapes(e)),
									u = o.a._lerp(...a, s)[0];
								return u
									.reduce((t, e) => `${t}${e.slice(2).join(' ')} `, `M${u[0][0]} ${u[0][1]}C`)
									.trim();
							},
						});
				}
				get isVisible() {
					return !!this.d;
				}
				get mesh() {
					if ('none' === this.attributes.display) return null;
					const t = this.path;
					if (t) {
						let e = this[h];
						if (e) e.path !== t && ((e.contours = t.contours), (e.path = t));
						else {
							(e = new n.c(this.path, this.getResolution())), (e.path = t);
							const r = this.attributes.fillColor;
							r && Object(u.d)(e, { color: r });
							const i = this.attributes.lineWidth,
								o = this.attributes.strokeColor;
							if (o && i > 0) {
								const {
									lineCap: t,
									lineJoin: r,
									miterLimit: n,
									lineDash: s,
									lineDashOffset: a,
								} = this.attributes;
								Object(u.e)(e, {
									color: o,
									lineWidth: i,
									lineCap: t,
									lineJoin: r,
									miterLimit: n,
									lineDash: s,
									lineDashOffset: a,
								});
							}
							this[h] = e;
						}
						const r = this.opacity;
						return e.getOpacity() !== r && e.setOpacity(r), e.setTransform(...this.renderMatrix), e;
					}
					return null;
				}
				get originalContentRect() {
					if (this.path) {
						const t = this.path.boundingBox;
						return [t[0][0], t[0][1], t[1][0] - t[0][0], t[1][1] - t[0][1]];
					}
					return [0, 0, 0, 0];
				}
				get originalClientRect() {
					if (this.mesh) {
						const t = this.mesh.boundingBox;
						return [t[0][0], t[0][1], t[1][0] - t[0][0], t[1][1] - t[0][1]];
					}
					return [0, 0, 0, 0];
				}
				get originalClientCenter() {
					return this.mesh ? this.mesh.boundingCenter : [0, 0];
				}
				set d(t) {
					this.attributes.d = t;
				}
				get d() {
					return this.attributes.d;
				}
				draw(t = []) {
					super.draw(t);
					const e = this.mesh;
					return e && Object(l.d)(this, e), t;
				}
				getBoundingClientRect() {
					let t = null;
					return this.mesh && (t = this.mesh.boundingBox), Object(f.a)(t, this.renderMatrix);
				}
				getPathLength() {
					return this.mesh ? this.mesh.getTotalLength() : 0;
				}
				getPointAtLength(t) {
					if (this.mesh) {
						const e = this.mesh.getPointAtLength(t);
						if (e) return [e.x, e.y];
					}
					return [0, 0];
				}
				onPropertyChange(t, e, r) {
					if (
						(super.onPropertyChange(t, e, r),
						('d' !== t && 'normalize' !== t) || this.updateContours(),
						this[h] && 'fillColor' === t && Object(u.d)(this[h], { color: e }),
						this[h] &&
							('strokeColor' === t ||
								'lineWidth' === t ||
								'lineCap' === t ||
								'lineJoin' === t ||
								'lineDash' === t ||
								'lineDashOffset' === t))
					) {
						const { strokeColor: t, lineWidth: e } = this.attributes;
						if (t && e > 0) {
							const {
								lineCap: r,
								lineJoin: n,
								lineDash: i,
								lineDashOffset: o,
								miterLimit: s,
							} = this.attributes;
							Object(u.e)(this[h], {
								color: t,
								lineCap: r,
								lineJoin: n,
								lineWidth: e,
								lineDash: i,
								lineDashOffset: o,
								miterLimit: s,
							});
						}
					}
					'texture' === t && Object(l.a)(this, e);
				}
				updateContours() {
					(this.path = new n.b()),
						this.path.addPath(this.attributes.d),
						this.attributes.normalize && this.path.normalize(...this.path.boundingCenter);
				}
			}
			var p, g, m;
			(p = d),
				(g = 'Attr'),
				(m = a.a),
				g in p
					? Object.defineProperty(p, g, { value: m, enumerable: !0, configurable: !0, writable: !0 })
					: (p[g] = m),
				c.a.registerNode(d, 'path');
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'a', function () {
				return l;
			});
			var n,
				i,
				o,
				s = r(17),
				a = r(2),
				u = r(20);
			r(0).glMatrix.setMatrixArrayType(Array);
			class l extends s.a {
				get isVisible() {
					const { points: t } = this.attributes;
					return t.length > 0 && super.isVisible;
				}
			}
			(n = l),
				(i = 'Attr'),
				(o = u.a),
				i in n
					? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
					: (n[i] = o),
				a.a.registerNode(l, 'polyline');
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'a', function () {
				return l;
			});
			var n = r(38),
				i = r(5),
				o = r(1);
			r(0).glMatrix.setMatrixArrayType(Array);
			const s = Symbol.for('spritejs_setAttributeDefault'),
				a = Symbol.for('spritejs_setAttribute'),
				u = Symbol.for('spritejs_getAttribute');
			class l extends n.a {
				constructor(t) {
					super(t),
						this[s]({
							d: '',
							normalize: !1,
							fillColor: void 0,
							strokeColor: void 0,
							lineWidth: 1,
							lineJoin: 'miter',
							lineCap: 'butt',
							lineDash: void 0,
							lineDashOffset: 0,
							miterLimit: 10,
							texture: void 0,
							textureRect: void 0,
							textureRepeat: !1,
							sourceRect: void 0,
						});
				}
				get d() {
					return this[u]('d');
				}
				set d(t) {
					this[a]('d', t);
				}
				get normalize() {
					return this[u]('normalize');
				}
				set normalize(t) {
					this[a]('normalize', !!t);
				}
				get fillColor() {
					return this[u]('fillColor');
				}
				set fillColor(t) {
					this[a]('fillColor', Object(i.c)(t));
				}
				get strokeColor() {
					return this[u]('strokeColor');
				}
				set strokeColor(t) {
					this[a]('strokeColor', Object(i.c)(t));
				}
				get lineWidth() {
					return this[u]('lineWidth');
				}
				set lineWidth(t) {
					this[a]('lineWidth', Object(o.d)(t));
				}
				get lineJoin() {
					return this[u]('lineJoin');
				}
				set lineJoin(t) {
					if (null != t && 'miter' !== t && 'bevel' !== t) throw new TypeError('Invalid lineJoin type.');
					this[a]('lineJoin', t);
				}
				get lineCap() {
					return this[u]('lineCap');
				}
				set lineCap(t) {
					if (null != t && 'butt' !== t && 'square' !== t) throw new TypeError('Invalid lineCap type.');
					this[a]('lineCap', t);
				}
				get lineDash() {
					return this[u]('lineDash');
				}
				set lineDash(t) {
					null == (t = Object(o.c)(t, !0)) || Array.isArray(t) || (t = [t]),
						this[a]('lineDash', t ? t.map(o.d) : null);
				}
				get lineDashOffset() {
					return this[u]('lineDashOffset');
				}
				set lineDashOffset(t) {
					this[a]('lineDashOffset', Object(o.d)(t));
				}
				get miterLimit() {
					return this[u]('miterLimit');
				}
				set miterLimit(t) {
					this[a]('miterLimit', Object(o.d)(t));
				}
				get texture() {
					return this[u]('texture');
				}
				set texture(t) {
					this[a]('texture', t);
				}
				get textureRect() {
					return this[u]('textureRect');
				}
				set textureRect(t) {
					this[a]('textureRect', t);
				}
				get sourceRect() {
					return this[u]('sourceRect');
				}
				set sourceRect(t) {
					this[a]('sourceRect', t);
				}
				get textureRepeat() {
					return this[u]('textureRepeat');
				}
				set textureRepeat(t) {
					this[a]('textureRepeat', !!t);
				}
			}
		},
		function (t, e, r) {
			'use strict';
			var n = r(19),
				i = r(1);
			function o(t, e = [0]) {
				t = t.map(([t, e]) => ({ x: t, y: e }));
				let r = '',
					n = 0;
				return (
					t.forEach((i, o) => {
						if (0 === o) r += `M${i.x} ${i.y}`;
						else {
							for (; o > e[n]; ) n++;
							if (n % 2) {
								const [e, n] = (function (e, r = 0.168, n = 0.168) {
									let i, o, s, a;
									if (
										((t[e].x !== t[e + 1].x && t[e].y !== t[e + 1].y) || ((r = 0), (n = 0)),
										e < 1
											? ((i = t[0].x + (t[1].x - t[0].x) * r),
											  (o = t[0].y + (t[1].y - t[0].y) * r))
											: ((i = t[e].x + (t[e + 1].x - t[e - 1].x) * r),
											  (o = t[e].y + (t[e + 1].y - t[e - 1].y) * r)),
										e > t.length - 3)
									) {
										const e = t.length - 1;
										(s = t[e].x - (t[e].x - t[e - 1].x) * n),
											(a = t[e].y - (t[e].y - t[e - 1].y) * n);
									} else
										(s = t[e + 1].x - (t[e + 2].x - t[e].x) * n),
											(a = t[e + 1].y - (t[e + 2].y - t[e].y) * n);
									return [
										{ x: i, y: o },
										{ x: s, y: a },
									];
								})(o - 1);
								r += `C${[e.x, e.y, n.x, n.y, i.x, i.y].join(' ')}`;
							} else r += `L${i.x} ${i.y}`;
						}
					}),
					r
				);
			}
			r(0).glMatrix.setMatrixArrayType(Array),
				r.d(e, 'a', function () {
					return f;
				}),
				r(0).glMatrix.setMatrixArrayType(Array);
			const s = Symbol.for('spritejs_setAttributeDefault'),
				a = Symbol.for('spritejs_setAttribute'),
				u = Symbol.for('spritejs_getAttribute'),
				l = Symbol.for('spritejs_declareAlias');
			function c(t) {
				const { points: e, smooth: r, smoothRange: n, close: i } = t,
					s = [];
				for (let t = 0; t < e.length; t += 2) s.push([e[t], e[t + 1]]);
				let a = '';
				return (
					r ? (a = o(s, n)) : s.length && (a = `M${s.map(t => t.join(' ')).join('L')}`),
					a && i && (a += 'Z'),
					a
				);
			}
			class f extends n.a {
				constructor(t) {
					super(t),
						this[s]({ points: [], smooth: !1, smoothRange: [0], closeType: 'none' }),
						this[l]('close');
				}
				get d() {
					return this[u]('d');
				}
				set d(t) {}
				get close() {
					return 'none' !== this.closeType;
				}
				set close(t) {
					(t = t ? 'normal' : 'none'), (this.closeType = t);
				}
				get closeType() {
					return this[u]('closeType');
				}
				set closeType(t) {
					if (null != t && 'none' !== t && 'normal' !== t) throw new TypeError('Invalid closeType type.');
					if (this[a]('closeType', t)) {
						const t = c(this);
						this[a]('d', t);
					}
				}
				get smooth() {
					return this[u]('smooth');
				}
				set smooth(t) {
					if (this[a]('smooth', t)) {
						const t = c(this);
						this[a]('d', t);
					}
				}
				get smoothRange() {
					return this[u]('smoothRange');
				}
				set smoothRange(t) {
					if ((t && !Array.isArray(t) && (t = [t]), this[a]('smoothRange', t) && this.smooth)) {
						const t = c(this);
						this[a]('d', t);
					}
				}
				get points() {
					return this[u]('points');
				}
				set points(t) {
					if (
						((t = Object(i.c)(t)),
						Array.isArray(t) &&
							(t = t.reduce(
								(t, e) =>
									Array.isArray(e) ? [...t, ...e.map(t => Object(i.d)(t))] : [...t, Object(i.d)(e)],
								[],
							)),
						this[a]('points', t))
					) {
						const t = c(this);
						this[a]('d', t);
					}
				}
			}
		},
		function (t, e, r) {
			'use strict';
			var n = r(133),
				i = r(137),
				o = r(139);
			t.exports = function (t) {
				var e,
					r = n(t);
				return r.space
					? (((e = Array(3))[0] = o(r.values[0], 0, 255)),
					  (e[1] = o(r.values[1], 0, 255)),
					  (e[2] = o(r.values[2], 0, 255)),
					  'h' === r.space[0] && (e = i.rgb(e)),
					  e.push(o(r.alpha, 0, 1)),
					  e)
					: [];
			};
		},
		function (t, e, r) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }),
				(e.Timeline = e.Effects = e.Easings = e.Animator = void 0);
			var n = a(r(90)),
				i = a(r(109)),
				o = r(83),
				s = a(r(202));
			function a(t) {
				return t && t.__esModule ? t : { default: t };
			}
			(e.Animator = s.default), (e.Easings = o.Easings), (e.Effects = i.default), (e.Timeline = n.default);
		},
		function (t, e, r) {
			var n = r(16);
			t.exports = function (t) {
				if (!n(t)) throw TypeError(t + ' is not an object!');
				return t;
			};
		},
		function (t, e, r) {
			'use strict';
			var n = r(0),
				i = r(38),
				o = r(22),
				s = r(21),
				a = r.n(s),
				u = r(7),
				l = r(1);
			function c() {
				return (c =
					Object.assign ||
					function (t) {
						for (var e = 1; e < arguments.length; e++) {
							var r = arguments[e];
							for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
						}
						return t;
					}).apply(this, arguments);
			}
			function f(t) {
				if ('string' == typeof t) {
					if (((t = t.trim()), /%$/.test(t))) return parseFloat(t) / 100;
					if (/^\d+/.test(t)) return Object(l.b)(t);
				}
				return t;
			}
			function h(t, e, r, n, i) {
				return (
					'string' == typeof t && (t = a()(t)),
					'string' == typeof e && (e = a()(e)),
					o.Effects.default(t, e, r, n, i)
				);
			}
			r(0).glMatrix.setMatrixArrayType(Array),
				(o.Effects.default = function (t, e, r, n, i) {
					return Array.isArray(t) && Array.isArray(e)
						? t.map((t, o) => t + ((r - n) / (i - n)) * (e[o] - t))
						: 'number' == typeof t && 'number' == typeof e
						? t + ((r - n) / (i - n)) * (e - t)
						: r - n > i - r
						? e
						: t;
				}),
				(o.Effects.fillColor = h),
				(o.Effects.strokeColor = h),
				(o.Effects.bgcolor = h),
				(o.Effects.borderColor = h);
			class d extends o.Animator {
				constructor(t, e, r) {
					const n = t.attr();
					Object.entries(n).forEach(([t, e]) => {
						n[t] = f(e);
					}),
						(e = e.map(t => {
							let e = c({}, t);
							const r = {};
							return (
								Object.entries(e).forEach(([t, e]) => {
									r[t] = f(e);
								}),
								r
							);
						})),
						super(n, e, r),
						(this.target = t),
						(this.setter = function (t, e) {
							e.attr(t);
						});
				}
				get playState() {
					return this.target.parent ? super.playState : 'idle';
				}
				get finished() {
					return super.finished.then(() => {
						const t = this;
						return new Promise(e => {
							!(function r() {
								t.setter(t.frame, t.target);
								const n = t.playState;
								'finished' === n || 'idle' === n ? (Object(u.a)(t.requestId), e()) : Object(u.b)(r);
							})();
						});
					});
				}
				finish() {
					super.finish(), Object(u.a)(this.requestId), this.setter(this.frame, this.target);
				}
				play() {
					if (!this.target.parent || 'running' === this.playState) return;
					super.play(), this.setter(this.frame, this.target);
					const t = this;
					this.ready.then(() => {
						t.setter(t.frame, t.target),
							(t.requestId = Object(u.b)(function e() {
								const r = t.target;
								if (
									'undefined' != typeof document &&
									document.documentElement &&
									document.documentElement.contains &&
									r.layer &&
									r.layer.canvas &&
									!document.documentElement.contains(r.layer.canvas)
								)
									return void t.cancel();
								const n = t.playState;
								t.setter(t.frame, t.target),
									'idle' !== n &&
										('running' === n
											? (t.requestId = Object(u.b)(e))
											: ('paused' === n || ('pending' === n && t.timeline.currentTime < 0)) &&
											  t.ready.then(() => {
													t.setter(t.frame, t.target), (t.requestId = Object(u.b)(e));
											  }));
							}));
					});
				}
				cancel(t = !1) {
					Object(u.a)(this.requestId),
						t
							? (this.setter(this.frame, this.target), super.cancel())
							: (super.cancel(), this.setter(this.frame, this.target));
				}
			}
			var p = r(2),
				g = r(33);
			function m(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e &&
						(n = n.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function v(t, e, r) {
				return (
					e in t
						? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (t[e] = r),
					t
				);
			}
			r(0).glMatrix.setMatrixArrayType(Array),
				r(0).glMatrix.setMatrixArrayType(Array),
				r.d(e, 'a', function () {
					return C;
				}),
				r(0).glMatrix.setMatrixArrayType(Array);
			const y = Symbol.for('spritejs_changedAttrs'),
				b = Symbol.for('spritejs_attributes'),
				x = Symbol('resolution'),
				w = Symbol('animations'),
				M = Symbol('eventListeners'),
				S = Symbol('captureEventListeners'),
				A = Symbol('filters'),
				_ = Symbol('display'),
				T = Symbol('program'),
				E = Symbol('shaderAttrs'),
				O = Symbol('uniforms');
			class C {
				constructor(t = {}) {
					(this.attributes = new this.constructor.Attr(this)),
						(this[x] = { width: 300, height: 150 }),
						Object.assign(this.attributes, t),
						(this[w] = new Set()),
						(this[M] = {}),
						(this[S] = {});
				}
				get ancestors() {
					let t = this.parent;
					const e = [];
					for (; t; ) e.push(t), (t = t.parent);
					return e;
				}
				get animations() {
					return this[w];
				}
				get filters() {
					return this[A] || (this.parent && this.parent.filters);
				}
				get isVisible() {
					return !1;
				}
				get layer() {
					return this.parent ? this.parent.layer : null;
				}
				get localMatrix() {
					const t = this.transformMatrix,
						{ x: e, y: r } = this.attributes;
					return (t[4] += e), (t[5] += r), t;
				}
				get opacity() {
					let t = this.attributes.opacity;
					return this.parent && null != this.parent.opacity && (t *= this.parent.opacity), t;
				}
				get program() {
					return this[T];
				}
				get renderer() {
					return this.parent ? this.parent.renderer : null;
				}
				get renderMatrix() {
					if (this.__cacheRenderMatrix) return this.__cacheRenderMatrix;
					let t = this.localMatrix;
					const e = this.parent;
					if (e) {
						const r = e.__cacheRenderMatrix || e.renderMatrix;
						r && (t = n.mat2d.multiply(Array.of(0, 0, 0, 0, 0, 0), r, t));
					}
					return t;
				}
				get uniforms() {
					return this[O];
				}
				get className() {
					return this.attributes.className;
				}
				set className(t) {
					this.attributes.className = t;
				}
				get id() {
					return this.attributes.id;
				}
				set id(t) {
					this.attributes.id = t;
				}
				get name() {
					return this.attributes.name;
				}
				set name(t) {
					this.attributes.name = t;
				}
				get zIndex() {
					return this.attributes.zIndex;
				}
				set zIndex(t) {
					this.attributes.zIndex = t;
				}
				get mesh() {
					return null;
				}
				get shaderAttrs() {
					return this[E] || {};
				}
				activateAnimations() {
					const t = this.layer;
					if (t) {
						const e = this[w];
						e.forEach(r => {
							(r.baseTimeline = t.timeline),
								r.play(),
								r.finished.then(() => {
									e.delete(r);
								});
						});
						const r = this.children;
						r &&
							r.forEach(t => {
								t.activateAnimations && t.activateAnimations();
							});
					}
				}
				addEventListener(t, e, r = {}) {
					'boolean' == typeof r && (r = { capture: r });
					const { capture: n, once: i } = r,
						o = n ? S : M;
					return (this[o][t] = this[o][t] || []), this[o][t].push({ listener: e, once: i }), this;
				}
				animate(t, e) {
					const r = new d(this, t, e);
					return (
						this.effects && r.applyEffects(this.effects),
						this.layer &&
							((r.baseTimeline = this.layer.timeline),
							r.play(),
							r.finished.then(() => {
								this[w].delete(r);
							})),
						this[w].add(r),
						r
					);
				}
				attr(...t) {
					if (0 === t.length) return this.attributes[b];
					if (t.length > 1) {
						let [e, r] = t;
						return 'function' == typeof r && (r = r(this.attr(e))), this.setAttribute(e, r), this;
					}
					return 'string' == typeof t[0]
						? this.getAttribute(t[0])
						: (Object.assign(this.attributes, t[0]), this);
				}
				cloneNode() {
					const t = new this.constructor(),
						e = this.attributes[y];
					return t.attr(e), t;
				}
				connect(t, e) {
					Object.defineProperty(this, 'parent', { value: t, writable: !1, configurable: !0 }),
						Object.defineProperty(this, 'zOrder', { value: e, writable: !1, configurable: !0 }),
						t.timeline && this.activateAnimations(),
						this.setResolution(t.getResolution()),
						this.forceUpdate(),
						this.dispatchEvent({ type: 'append', detail: { parent: t, zOrder: e } });
				}
				deactivateAnimations() {
					this[w].forEach(t => t.cancel());
					const t = this.children;
					t &&
						t.forEach(t => {
							t.deactivateAnimations && t.deactivateAnimations();
						});
				}
				disconnect() {
					const { parent: t, zOrder: e } = this;
					delete this.parent,
						delete this.zOrder,
						this.deactivateAnimations(),
						this.dispatchEvent({ type: 'remove', detail: { parent: t, zOrder: e } }),
						t && t.forceUpdate();
				}
				dispatchEvent(t) {
					t instanceof g.a || (t = new g.a(t)), (t.target = this);
					const e = t.type,
						r = [this];
					let n = this.parent;
					for (; t.bubbles && n; ) r.push(n), (n = n.parent);
					for (let n = r.length - 1; n >= 0; n--) {
						const i = r[n],
							o = i[S] && i[S][e];
						if (
							(o &&
								o.length &&
								o.forEach(({ listener: e, once: n }) => {
									e.call(this, t), n && r.removeEventListener(e);
								}),
							!t.bubbles && t.cancelBubble)
						)
							break;
					}
					if (!t.cancelBubble)
						for (let n = 0; n < r.length; n++) {
							const i = r[n],
								o = i[M] && i[M][e];
							if (
								(o &&
									o.length &&
									o.forEach(({ listener: e, once: n }) => {
										e.call(this, t), n && r.removeEventListener(e);
									}),
								!t.bubbles || t.cancelBubble)
							)
								break;
						}
				}
				dispatchPointerEvent(t) {
					const { x: e, y: r } = t;
					return !!this.isPointCollision(e, r) && (this.dispatchEvent(t), !0);
				}
				draw(t = []) {
					const e = this.mesh;
					if (e) {
						if (
							((function (t, e) {
								t.clearFilter(),
									e &&
										e.forEach(({ type: e, args: r }) => {
											let n = e;
											'drop-shadow' === n
												? (n = 'dropShadow')
												: 'hue-rotate' === n && (n = 'hueRotate'),
												t[n](...r);
										});
							})(e, this.filters),
							t.push(e),
							this[T])
						) {
							e.setProgram(this[T]);
							const t = this[E];
							t &&
								Object.entries(t).forEach(([t, r]) => {
									e.setAttribute(t, r);
								});
							const r = this[O];
							if (this[O]) {
								const t = {};
								Object.entries(r).forEach(([e, r]) => {
									'function' == typeof r && (r = r(this, e)), (t[e] = r);
								}),
									e.setUniforms(t);
							}
						}
						!(function (t, e) {
							if (!e) return;
							const r = t.getListeners('beforerender'),
								n = t.getListeners('afterrender');
							r.length && !e.beforeRender
								? (e.beforeRender = e => {
										t.dispatchEvent({ type: 'beforerender', detail: { context: e } });
								  })
								: r.length || (e.beforeRender = null),
								n.length && !e.afterRender
									? (e.afterRender = e => {
											t.dispatchEvent({ type: 'afterrender', detail: { context: e } });
									  })
									: n.length || (e.afterRender = null);
						})(this, e);
					}
					return t;
				}
				forceUpdate() {
					this.parent && this.parent.forceUpdate();
				}
				getAttribute(t) {
					return this.attributes[t];
				}
				getListeners(t, { capture: e = !1 } = {}) {
					return [...(this[e ? S : M][t] || [])];
				}
				getOffsetPosition(t, e) {
					const r = n.mat2d.invert(Array.of(0, 0, 0, 0, 0, 0), this.renderMatrix);
					return [t * r[0] + e * r[2] + r[4], t * r[1] + e * r[3] + r[5]];
				}
				getResolution() {
					return (function (t) {
						for (var e = 1; e < arguments.length; e++) {
							var r = null != arguments[e] ? arguments[e] : {};
							e % 2
								? m(r, !0).forEach(function (e) {
										v(t, e, r[e]);
								  })
								: Object.getOwnPropertyDescriptors
								? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
								: m(r).forEach(function (e) {
										Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
								  });
						}
						return t;
					})({}, this[x]);
				}
				isPointCollision(t, e) {
					if (!this.mesh) return !1;
					const r = this.attributes.pointerEvents;
					if ('none' === r) return !1;
					if ('all' !== r && !this.isVisible) return !1;
					let n = 'both';
					return (
						'visibleFill' === r && (n = 'fill'),
						'visibleStroke' === r && (n = 'stroke'),
						this.mesh.isPointCollision(t, e, n)
					);
				}
				onPropertyChange(t, e, r) {
					'id' !== t &&
						'name' !== t &&
						'className' !== t &&
						'pointerEvents' !== t &&
						'passEvents' !== t &&
						this.forceUpdate(),
						'filter' === t &&
							(this[A] = (function (t) {
								if (!(t = t.trim()) || 'none' === t) return null;
								const e = /^(?:(url|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)\(([^()]+)\))+$/i,
									r = t.match(
										/^(?:(url|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)\(([^()]+)\))+$/gi,
									),
									n = [];
								return (
									r &&
										r.forEach(t => {
											const r = t.match(e);
											if (!r) throw new TypeError('Invalid fitler string.');
											let [, i, o] = r;
											(o = o
												.trim()
												.split(/\s+/g)
												.map((t, e) => {
													let r;
													return (
														(r =
															'url' === i || ('drop-shadow' === i && 3 === e)
																? t
																: Object(l.d)(t)),
														/%$/.test(t) && (r /= 100),
														r
													);
												})),
												n.push({ type: i, args: o });
										}),
									n
								);
							})(e)),
						'zIndex' === t && this.parent && this.parent.reorder();
				}
				setAttribute(t, e) {
					'attrs' === t && this.attr(e), (this.attributes[t] = e);
				}
				setMouseCapture() {
					this.layer && (this.layer.__mouseCapturedTarget = this);
				}
				setProgram(t) {
					(this[T] = t), this.forceUpdate();
				}
				setShaderAttribute(t, e) {
					(this[E] = this[E] || {}), (this[E][t] = e), this.forceUpdate();
				}
				setUniforms(t) {
					(this[O] = this[O] || {}), Object.assign(this[O], t), this.forceUpdate();
				}
				setResolution({ width: t, height: e }) {
					const { width: r, height: n } = this[x];
					(r === t && n === e) ||
						((this[x] = { width: t, height: e }),
						this.updateContours(),
						this.forceUpdate(),
						this.dispatchEvent({ type: 'resolutionchange', detail: { width: t, height: e } })),
						this.mesh && this.mesh.setResolution && this.mesh.setResolution({ width: t, height: e });
				}
				show() {
					'none' === this.attributes.display && (this.attributes.display = this[_] || '');
				}
				hide() {
					'none' !== this.attributes.display &&
						((this[_] = this.attributes.display), (this.attributes.display = 'none'));
				}
				releaseMouseCapture() {
					this.layer &&
						this.layer.__mouseCapturedTarget === this &&
						(this.layer.__mouseCapturedTarget = null);
				}
				remove() {
					return !(!this.parent || !this.parent.removeChild) && (this.parent.removeChild(this), !0);
				}
				removeAllListeners(t, e = {}) {
					'boolean' == typeof e && (e = { capture: e });
					const r = e.capture ? S : M;
					return this[r][t] && (this[r][t] = []), this;
				}
				removeAttribute(t) {
					this.setAttribute(t, null);
				}
				removeEventListener(t, e, r = {}) {
					'boolean' == typeof r && (r = { capture: r });
					const n = r.capture ? S : M;
					if (this[n][t]) {
						const r = this[n][t];
						if (r)
							for (let i = 0; i < r.length; i++) {
								const { listener: o } = r[i];
								if (o === e) {
									this[n][t].splice(i, 1);
									break;
								}
							}
					}
					return this;
				}
				transition(t, e = 'linear') {
					const r = this,
						n = Symbol('animation');
					e = e || 'linear';
					let i = 0;
					return (
						'object' == typeof t && ((i = t.delay || 0), (t = t.duration)),
						{
							[n]: null,
							cancel(t = !1) {
								const e = this[n];
								e && e.cancel(t);
							},
							end() {
								const t = this[n];
								!t || ('running' !== t.playState && 'pending' !== t.playState) || t.finish();
							},
							reverse() {
								const t = this[n];
								if (t)
									if ('running' === t.playState || 'pending' === t.playState)
										t.playbackRate = -t.playbackRate;
									else {
										const e = t.timing.direction;
										(t.timing.direction = 'reverse' === e ? 'normal' : 'reverse'), t.play();
									}
								return t.finished;
							},
							attr(o, s) {
								return (
									this.end(),
									'string' == typeof o && (o = { [o]: s }),
									Object.entries(o).forEach(([t, e]) => {
										'function' == typeof e && (o[t] = e(r.attr(t)));
									}),
									(this[n] = r.animate([o], {
										duration: 1e3 * t,
										delay: 1e3 * i,
										fill: 'forwards',
										easing: e,
									})),
									this[n].finished
								);
							},
						}
					);
				}
				updateContours() {}
			}
			v(C, 'Attr', i.a), p.a.registerNode(C, 'node');
		},
		function (t, e, r) {
			var n = r(41);
			t.exports = function (t, e, r) {
				if ((n(t), void 0 === e)) return t;
				switch (r) {
					case 1:
						return function (r) {
							return t.call(e, r);
						};
					case 2:
						return function (r, n) {
							return t.call(e, r, n);
						};
					case 3:
						return function (r, n, i) {
							return t.call(e, r, n, i);
						};
				}
				return function () {
					return t.apply(e, arguments);
				};
			};
		},
		function (t, e, r) {
			var n = r(15),
				i = r(42);
			t.exports = r(13)
				? function (t, e, r) {
						return n.f(t, e, i(1, r));
				  }
				: function (t, e, r) {
						return (t[e] = r), t;
				  };
		},
		function (t, e, r) {
			'use strict';
			var n = r(3),
				i = r(24),
				o = r(29),
				s = r(5);
			function a(t, e, r, n, i, o = 'leftTop') {
				const s = (n / 2) * 0.5522848,
					a = (i / 2) * 0.5522848,
					u = e + n,
					l = r + i,
					c = e + n / 2,
					f = r + i / 2;
				'leftTop' === o
					? (t.moveTo(e, f), t.bezierCurveTo(e, f - a, c - s, r, c, r))
					: 'rightTop' === o
					? t.bezierCurveTo(c + s, r, u, f - a, u, f)
					: 'rightBottom' === o
					? t.bezierCurveTo(u, f + a, c + s, l, c, l)
					: 'leftBottom' === o && t.bezierCurveTo(c - s, l, e, f + a, e, f);
			}
			r(0).glMatrix.setMatrixArrayType(Array);
			var u = r(2),
				l = r(59);
			r.d(e, 'a', function () {
				return f;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
			const c = Symbol('mesh');
			class f extends i.a {
				constructor(t = {}) {
					super(t);
				}
				get borderSize() {
					const {
							paddingTop: t,
							paddingRight: e,
							paddingBottom: r,
							paddingLeft: n,
							borderWidth: i,
						} = this.attributes,
						[o, s] = this.contentSize;
					return [n + o + e + i, t + s + r + i];
				}
				get clientSize() {
					const { paddingTop: t, paddingRight: e, paddingBottom: r, paddingLeft: n } = this.attributes,
						[i, o] = this.contentSize;
					return [n + i + e, t + o + r];
				}
				get contentSize() {
					let { width: t, height: e, boxSizing: r } = this.attributes;
					if (((t = t || 0), (e = e || 0), 'border-box' === r)) {
						const r = 2 * this.attributes.borderWidth;
						(t -= r), (e -= r), (t = Math.max(0, t)), (e = Math.max(0, e));
					}
					return [t, e];
				}
				get hasBorder() {
					return this.attributes.borderWidth > 0;
				}
				get isVisible() {
					const [t, e] = this.borderSize;
					return t > 0 && e > 0;
				}
				get mesh() {
					if ('none' === this.attributes.display) return null;
					const t = this.clientBox;
					if (t) {
						let e = this[c];
						if (e) e.box !== t && ((e.contours = t.contours), (e.box = t));
						else {
							(e = new n.c(t, this.getResolution())), (e.box = t);
							const r = this.attributes.bgcolor;
							if ((Object(s.d)(e, { color: r }), this.hasBorder)) {
								const {
									borderColor: t,
									borderWidth: r,
									borderDash: n,
									borderDashOffset: i,
								} = this.attributes;
								Object(s.e)(e, { color: t, lineWidth: r, lineDash: n, lineDashOffset: i });
							}
							this[c] = e;
						}
						const r = this.opacity;
						return e.getOpacity() !== r && e.setOpacity(r), e.setTransform(...this.renderMatrix), e;
					}
					return null;
				}
				get offsetSize() {
					const {
							paddingTop: t,
							paddingRight: e,
							paddingBottom: r,
							paddingLeft: n,
							borderWidth: i,
						} = this.attributes,
						[o, s] = this.contentSize,
						a = 2 * i;
					return [n + o + e + a, t + s + r + a];
				}
				get originalClientRect() {
					if (this.mesh) {
						const t = this.mesh.boundingBox;
						return [t[0][0], t[0][1], t[1][0] - t[0][0], t[1][1] - t[0][1]];
					}
					return [0, 0, 0, 0];
				}
				get originalContentRect() {
					const [t, e, r, n] = this.originalClientRect,
						i = this.attributes.padding;
					return [t + i[0], e + i[1], r - i[0] - i[2], n - i[1] - i[3]];
				}
				getBoundingClientRect() {
					let t = null;
					if (this.mesh) {
						t = [...this.mesh.boundingBox];
						const e = this.attributes.borderWidth;
						e && ((t[0] = [t[0][0] - e, t[0][1] - e]), (t[1] = [t[1][0] + e, t[1][1] + e]));
					}
					return Object(l.a)(t, this.renderMatrix);
				}
				onPropertyChange(t, e, r) {
					if (
						(super.onPropertyChange(t, e, r),
						('anchorX' === t ||
							'anchorY' === t ||
							'boxSizing' === t ||
							'width' === t ||
							'height' === t ||
							'borderWidth' === t ||
							'paddingLeft' === t ||
							'paddingRight' === t ||
							'paddingTop' === t ||
							'paddingBottom' === t ||
							/^border(TopLeft|TopRight|BottomRight|BottomLeft)Radius$/.test(t)) &&
							this.updateContours(),
						this[c] && 'bgcolor' === t && Object(s.d)(this[c], { color: e }),
						this[c] &&
							('borderColor' === t ||
								'borderWidth' === t ||
								'borderDash' === t ||
								'borderDashOffset' === t))
					) {
						const { borderColor: t, borderWidth: e, borderDash: r, borderDashOffset: n } = this.attributes;
						Object(s.e)(this[c], { color: t, lineWidth: e, lineDash: r, lineDashOffset: n });
					}
				}
				updateContours() {
					const { anchorX: t, anchorY: e, borderWidth: r, borderRadius: i } = this.attributes,
						[o, s] = this.borderSize,
						u = this.offsetSize,
						l = 0.5 * r,
						c = -t * u[0] + l,
						f = -e * u[1] + l;
					(this.clientBox = new n.b()),
						(function (t, [e, r, n, i], o) {
							if (!o || (Array.isArray(o) && o.every(t => 0 === t))) t.beginPath(), t.rect(e, r, n, i);
							else {
								'number' == typeof o && (o = Array(8).fill(o));
								const [s, u, l, c, f, h, d, p] = o.map((t, e) =>
									e % 2 ? Math.min(t, i / 2) : Math.min(t, n / 2),
								);
								t.beginPath(),
									t.moveTo(e, r + u),
									a(t, e, r, 2 * s, 2 * u, 'leftTop'),
									t.lineTo(e + n - l, r),
									a(t, e + n - 2 * l, r, 2 * l, 2 * c, 'rightTop'),
									t.lineTo(e + n, r + i - h),
									a(t, e + n - 2 * f, r + i - 2 * h, 2 * f, 2 * h, 'rightBottom'),
									t.lineTo(e + d, r + i),
									a(t, e, r + i - 2 * p, 2 * d, 2 * p, 'leftBottom'),
									t.closePath();
							}
						})(this.clientBox, [c, f, o, s], i);
				}
			}
			var h, d, p;
			(h = f),
				(d = 'Attr'),
				(p = o.a),
				d in h
					? Object.defineProperty(h, d, { value: p, enumerable: !0, configurable: !0, writable: !0 })
					: (h[d] = p),
				u.a.registerNode(f, 'block');
		},
		function (t, e, r) {
			'use strict';
			(function (t) {
				var n = r(62),
					i = r(37),
					o = r(14);
				r(0).glMatrix.setMatrixArrayType(Array);
				const s = {};
				let a = !1;
				if ('object' == typeof navigator && 'string' == typeof navigator.userAgent) {
					const t = navigator.userAgent.toLowerCase().match(/chrome\/(\d+)/);
					t && (a = Number(t[1]) < 70);
				}
				function u(e, r, n = {}) {
					const i = n.offscreen || (!a && !1 !== n.offscreen);
					let o;
					return (
						'function' == typeof t.createCanvas
							? (o = t.createCanvas(e, r, n))
							: i && 'function' == typeof OffscreenCanvas
							? (o = new OffscreenCanvas(e, r))
							: ((o = document.createElement('canvas')), (o.width = e), (o.height = r)),
						o
					);
				}
				const l = {
					createCanvas: u,
					createText: function (t, { font: e, fillColor: r, strokeColor: n, strokeWidth: a }) {
						const l = [t, e, String(r), String(n), String(a)].join('###');
						let c = s[l];
						if (c) return c;
						c = u(1, 1);
						const f = c.getContext('2d');
						f.save(), (f.font = e);
						let { width: h } = f.measureText(t);
						f.restore();
						const d = Object(i.a)(e),
							p = Math.max(d.pxLineHeight, 1.13 * d.pxHeight);
						/italic|oblique/.test(e) && (h += p * Math.tan((15 * Math.PI) / 180)), r || n || (r = '#000');
						const g = f.canvas,
							m = Math.ceil(h),
							v = Math.ceil(p);
						(g.width = 2 * m),
							(g.height = 2 * v),
							f.save(),
							(f.font = (function (t, e) {
								const {
									style: r,
									variant: n,
									weight: i,
									stretch: o,
									size: s,
									pxLineHeight: a,
									family: u,
								} = t;
								return `${r} ${n} ${i} ${o} ${s * e}px/${a * e}px ${u}`;
							})(d, 2)),
							(f.textAlign = 'center'),
							(f.textBaseline = 'middle');
						const y = 0.5 * g.height + 0.1 * d.pxHeight,
							b = 0.5 * g.width;
						if (r) {
							if (Array.isArray(r)) r = Object(o.a)(r);
							else if (r.vector) {
								let t;
								const { vector: e, colors: n } = r;
								(t = 6 === e.length ? f.createRadialGradient(...e) : f.createLinearGradient(...e)),
									n.forEach(({ offset: e, color: r }) => {
										t.addColorStop(e, r);
									}),
									(r = t);
							}
							(f.fillStyle = r), f.fillText(t, b, y);
						}
						if (n) {
							if (((f.lineWidth = 2 * a), Array.isArray(n))) n = Object(o.a)(n);
							else if (n.vector) {
								let t;
								const { vector: e, colors: r } = n;
								(t = 6 === e.length ? f.createRadialGradient(...e) : f.createLinearGradient(...e)),
									r.forEach(({ offset: e, color: r }) => {
										t.addColorStop(e, r);
									}),
									(n = t);
							}
							(f.strokeStyle = n), f.strokeText(t, b, y);
						}
						return f.restore(), (s[l] = { image: c, rect: [0, 0, m, v] }), s[l];
					},
					loadImage: n.a.loadImage,
				};
				e.a = l;
			}.call(this, r(63)));
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'a', function () {
				return c;
			});
			var n = r(38),
				i = r(1),
				o = r(5);
			r(0).glMatrix.setMatrixArrayType(Array);
			const s = Symbol.for('spritejs_setAttribute'),
				a = Symbol.for('spritejs_getAttribute'),
				u = Symbol.for('spritejs_setAttributeDefault'),
				l = Symbol.for('spritejs_declareAlias');
			class c extends n.a {
				constructor(t) {
					super(t),
						this[u]({
							anchorX: 0,
							anchorY: 0,
							width: void 0,
							height: void 0,
							borderWidth: 0,
							borderColor: 'rgba(0,0,0,1)',
							borderDash: void 0,
							borderDashOffset: 0,
							borderTopLeftRadius: [0, 0],
							borderTopRightRadius: [0, 0],
							borderBottomRightRadius: [0, 0],
							borderBottomLeftRadius: [0, 0],
							bgcolor: 'rgba(0,0,0,0)',
							paddingTop: 0,
							paddingRight: 0,
							paddingBottom: 0,
							paddingLeft: 0,
							boxSizing: 'content-box',
						}),
						this[l]('anchor', 'size', 'border', 'borderRadius', 'padding');
				}
				get anchorX() {
					return this[a]('anchorX');
				}
				set anchorX(t) {
					this[s]('anchorX', Object(i.d)(t));
				}
				get anchorY() {
					return this[a]('anchorY');
				}
				set anchorY(t) {
					this[s]('anchorY', Object(i.d)(t));
				}
				get anchor() {
					return [this.anchorX, this.anchorY];
				}
				set anchor(t) {
					(t = Object(i.c)(t)),
						Array.isArray(t) || (t = [t, t]),
						(this.anchorX = t[0]),
						(this.anchorY = t[1]);
				}
				get width() {
					return this[a]('width');
				}
				set width(t) {
					this[s]('width', Object(i.d)(t));
				}
				get height() {
					return this[a]('height');
				}
				set height(t) {
					this[s]('height', Object(i.d)(t));
				}
				get size() {
					return [this.width, this.height];
				}
				set size(t) {
					(t = Object(i.c)(t)), Array.isArray(t) || (t = [t, t]), (this.width = t[0]), (this.height = t[1]);
				}
				get borderWidth() {
					return this[a]('borderWidth');
				}
				set borderWidth(t) {
					this[s]('borderWidth', Object(i.d)(t));
				}
				get borderColor() {
					return this[a]('borderColor');
				}
				set borderColor(t) {
					this[s]('borderColor', Object(o.c)(t));
				}
				get border() {
					return [this.borderWidth, this.borderColor];
				}
				set border(t) {
					(t = Object(i.c)(t)),
						Array.isArray(t) || (t = [t]),
						(this.borderWidth = t[0]),
						null != t[1] && (this.borderColor = t[1]);
				}
				get borderDash() {
					return this[a]('borderDash');
				}
				set borderDash(t) {
					null == (t = Object(i.c)(t, !0)) || Array.isArray(t) || (t = [t]),
						this[s]('borderDash', t.map(i.d));
				}
				get borderDashOffset() {
					return this[a]('borderDashOffset');
				}
				set borderDashOffset(t) {
					this[s]('borderDashOffset', Object(i.d)(t));
				}
				get borderTopLeftRadius() {
					return this[a]('borderTopLeftRadius');
				}
				set borderTopLeftRadius(t) {
					(t = Object(i.c)(t, !0)),
						Array.isArray(t) || (t = [t, t]),
						this[s]('borderTopLeftRadius', t.map(i.d));
				}
				get borderTopRightRadius() {
					return this[a]('borderTopRightRadius');
				}
				set borderTopRightRadius(t) {
					(t = Object(i.c)(t, !0)),
						Array.isArray(t) || (t = [t, t]),
						this[s]('borderTopRightRadius', t.map(i.d));
				}
				get borderBottomRightRadius() {
					return this[a]('borderBottomRightRadius');
				}
				set borderBottomRightRadius(t) {
					(t = Object(i.c)(t, !0)),
						Array.isArray(t) || (t = [t, t]),
						this[s]('borderBottomRightRadius', t.map(i.d));
				}
				get borderBottomLeftRadius() {
					return this[a]('borderBottomLeftRadius');
				}
				set borderBottomLeftRadius(t) {
					(t = Object(i.c)(t, !0)),
						Array.isArray(t) || (t = [t, t]),
						this[s]('borderBottomLeftRadius', t.map(i.d));
				}
				get borderRadius() {
					return [
						...this.borderTopLeftRadius,
						...this.borderTopRightRadius,
						...this.borderBottomRightRadius,
						...this.borderBottomLeftRadius,
					];
				}
				set borderRadius(t) {
					if (((t = Object(i.c)(t)), Array.isArray(t))) {
						if (2 === t.length) t = [t[0], t[1], t[0], t[1], t[0], t[1], t[0], t[1]];
						else if (4 === t.length) t = [t[0], t[1], t[2], t[3], t[0], t[1], t[2], t[3]];
						else if (6 === t.length) t = [t[0], t[1], t[2], t[3], t[4], t[5], t[2], t[3]];
						else if (8 !== t.length) throw new TypeError('Invalid borderRadius value.');
					} else t = Array(8).fill(t);
					(this.borderTopLeftRadius = [t[0], t[1]]),
						(this.borderTopRightRadius = [t[2], t[3]]),
						(this.borderBottomRightRadius = [t[4], t[5]]),
						(this.borderBottomLeftRadius = [t[6], t[7]]);
				}
				get bgcolor() {
					return this[a]('bgcolor');
				}
				set bgcolor(t) {
					this[s]('bgcolor', Object(o.c)(t));
				}
				get paddingTop() {
					return this[a]('paddingTop');
				}
				set paddingTop(t) {
					this[s]('paddingTop', Object(i.d)(t));
				}
				get paddingRight() {
					return this[a]('paddingRight');
				}
				set paddingRight(t) {
					this[s]('paddingRight', Object(i.d)(t));
				}
				get paddingBottom() {
					return this[a]('paddingBottom');
				}
				set paddingBottom(t) {
					this[s]('paddingBottom', Object(i.d)(t));
				}
				get paddingLeft() {
					return this[a]('paddingLeft');
				}
				set paddingLeft(t) {
					this[s]('paddingLeft', Object(i.d)(t));
				}
				get padding() {
					return [this.paddingTop, this.paddingRight, this.paddingBottom, this.paddingLeft];
				}
				set padding(t) {
					(t = Object(i.c)(t)),
						Array.isArray(t)
							? 2 === t.length
								? (t = [t[0], t[1], t[0], t[1]])
								: 3 === t.length && (t = [t[0], t[1], t[2], t[1]])
							: (t = [t, t, t, t]),
						(this.paddingTop = t[0]),
						(this.paddingRight = t[1]),
						(this.paddingBottom = t[2]),
						(this.paddingLeft = t[3]);
				}
				get boxSizing() {
					return this[a]('boxSizing');
				}
				set boxSizing(t) {
					if (null != t && 'border-box' !== t && 'content-box' !== t)
						throw new TypeError('Invalid boxSizing type.');
					this[s]('boxSizing', t);
				}
			}
		},
		function (t, e, r) {
			var n = r(65),
				i = r(66);
			t.exports = function (t) {
				return n(i(t));
			};
		},
		function (t, e) {
			t.exports = function (t) {
				try {
					return !!t();
				} catch (t) {
					return !0;
				}
			};
		},
		function (t, e) {
			var r = {}.hasOwnProperty;
			t.exports = function (t, e) {
				return r.call(t, e);
			};
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'a', function () {
				return a;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
			const n = Symbol('type'),
				i = Symbol('bubbles'),
				o = Symbol('originalEvent'),
				s = Symbol('detail');
			class a {
				constructor(t, { bubbles: e = null } = {}) {
					if (
						('string' == typeof t
							? ((this[n] = t), (this[i] = !!e))
							: ((this[n] = t.type),
							  (this[o] = t),
							  (this[i] = null != e ? !!e : !!t.bubbles),
							  t.detail && (this[s] = t.detail)),
						!this[n])
					)
						throw new TypeError('Invalid event type.');
					this.cancelBubble = !1;
				}
				setOriginalEvent(t) {
					this[o] = t;
				}
				get originalEvent() {
					return this[o];
				}
				get type() {
					return this[n];
				}
				get bubbles() {
					return this[i];
				}
				get detail() {
					return this[s];
				}
				stopPropagation() {
					this.cancelBubble = !0;
				}
			}
		},
		function (t, e) {
			t.exports = {};
		},
		function (t, e, r) {
			var n = r(94),
				i = r(74);
			t.exports =
				Object.keys ||
				function (t) {
					return n(t, i);
				};
		},
		function (t, e, r) {
			var n = r(66);
			t.exports = function (t) {
				return Object(n(t));
			};
		},
		function (t, e, r) {
			'use strict';
			function n(t, e) {
				if ('string' == typeof t) {
					const e = t.trim().match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%)$/);
					t = e ? { size: parseFloat(e[1]), unit: e[2] } : { size: parseInt(t, 10), unit: 'px' };
				}
				let { size: r, unit: i } = t;
				if ('pt' === i) r /= 0.75;
				else if ('pc' === i) r *= 16;
				else if ('in' === i) r *= 96;
				else if ('cm' === i) r *= 96 / 2.54;
				else if ('mm' === i) r *= 96 / 25.4;
				else if ('em' === i || 'rem' === i || 'ex' === i) {
					if (!e && 'function' == typeof getComputedStyle && 'undefined' != typeof document) {
						e = n(getComputedStyle(document.documentElement).fontSize, 16);
					}
					(r *= e), 'ex' === i && (r /= 2);
				} else if ('q' === i) r *= 96 / 25.4 / 4;
				else if ('vw' === i || 'vh' === i) {
					if ('undefined' != typeof document) {
						r *=
							('vw' === i
								? document.documentElement.clientWidth
								: document.documentElement.clientHeight) / 100;
					}
				} else if (('vmax' === i || 'vmin' === i) && 'undefined' != typeof document) {
					const t = document.documentElement.clientWidth,
						e = document.documentElement.clientHeight;
					r *= 'vmax' === i ? Math.max(t, e) / 100 : Math.min(t, e) / 100;
				}
				return r;
			}
			r.d(e, 'a', function () {
				return f;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
			const i = 'px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%',
				o = '\'([^\']+)\'|"([^"]+)"|([\\w-]|[一-龥])+',
				s = new RegExp('(bold|bolder|lighter|[1-9]00) +', 'i'),
				a = new RegExp('(italic|oblique) +', 'i'),
				u = new RegExp('(small-caps) +', 'i'),
				l = new RegExp(
					'(ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded) +',
					'i',
				),
				c = new RegExp(
					'([\\d\\.]+)(' + i + ')(?:\\/([\\d\\.]+)(' + i + '))? *((?:' + o + ')( *, *(?:' + o + '))*)',
				);
			function f(t, e) {
				const r = c.exec(t);
				if (!r) return;
				const i = parseFloat(r[3]),
					o = {
						weight: 'normal',
						style: 'normal',
						stretch: 'normal',
						variant: 'normal',
						size: parseFloat(r[1]),
						unit: r[2],
						lineHeight: Number.isFinite(i) ? i : void 0,
						lineHeightUnit: r[4],
						family: r[5].replace(/ *, */g, ','),
					},
					f = t.substring(0, r.index),
					h = s.exec(f),
					d = a.exec(f),
					p = u.exec(f),
					g = l.exec(f);
				return (
					h && (o.weight = h[1]),
					d && (o.style = d[1]),
					p && (o.variant = p[1]),
					g && (o.stretch = g[1]),
					(o.pxHeight = n({ size: o.size, unit: o.unit }, e)),
					(o.pxLineHeight = n({ size: o.lineHeight || o.size, unit: o.lineHeightUnit || o.unit }, e)),
					o
				);
			}
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'a', function () {
				return S;
			});
			var n = r(0),
				i = r(3),
				o = r(1);
			r(0).glMatrix.setMatrixArrayType(Array);
			const s = Symbol.for('spritejs_setAttributeDefault'),
				a = Symbol.for('spritejs_declareAlias'),
				u = Symbol.for('spritejs_setAttribute'),
				l = Symbol.for('spritejs_getAttribute'),
				c = Symbol.for('spritejs_attributes'),
				f = Symbol.for('spritejs_changedAttrs'),
				h = Symbol('subject'),
				d = Symbol('attr'),
				p = Symbol('default'),
				g = Symbol('alias');
			const m = Symbol('transformMatrix'),
				v = Symbol('transforms'),
				y = Symbol('changedAttrs'),
				b = Symbol('lastChangedAttr'),
				x = Symbol('offsetFigure');
			function w(t, e, r) {
				const n = t[d][e];
				if (t[u](e, r, !1) || t[b] !== e) {
					const i = t[v];
					i.has(e) && i.delete(e),
						r &&
							('rotate' === e && (r = (Math.PI * r) / 180),
							'scale' === e &&
								(r = r.map(t => {
									const e = 1e-5;
									return Math.abs(t) > e ? t : 1 / t > 0 ? e : -e;
								})),
							i.set(e, r)),
						(t[m] = null),
						t[h].onPropertyChange(e, r, n, t);
				}
			}
			function M(t) {
				const e = t[x],
					r = t.offsetDistance * e.getTotalLength(),
					n = e.getPointAtLength(r);
				if (n) {
					const e = t[v];
					let r = t.offsetRotate;
					(r = 'auto' === r ? n.angle : 'reverse' === r ? Math.PI + n.angle : (Math.PI * r) / 180),
						e.set('offsetRotate', r),
						e.set('offsetTranslate', [n.x, n.y]),
						(t[m] = null);
				}
			}
			class S {
				static setDefault(t, ...e) {
					return t[s](...e);
				}
				static declareAlias(t, ...e) {
					return t[a](...e);
				}
				static setAttribute(t, ...e) {
					return t[u](...e);
				}
				static getAttribute(t, ...e) {
					return t[l](...e);
				}
				static getAttributes(t) {
					return t[c];
				}
				static getChangedAttributes(t) {
					return t[f];
				}
				constructor(t) {
					(this[h] = t),
						(this[d] = {}),
						(this[m] = n.mat2d.fromValues(1, 0, 0, 1, 0, 0)),
						(this[v] = new Map()),
						(this[p] = {}),
						(this[g] = []),
						Object.defineProperty(t, 'transformMatrix', {
							get: () => (
								this[m] ||
									(this[m] = (function (t, [e, r]) {
										let i = n.mat2d.fromValues(1, 0, 0, 1, 0, 0);
										return (
											[...t].forEach(([t, o]) => {
												if (
													((e || r) &&
														(i = n.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), i, [e, r])),
													'matrix' === t)
												)
													i = n.mat2d.multiply(i, i, o);
												else if ('offsetTranslate' === t) (i[4] += o[0]), (i[5] += o[1]);
												else if ('offsetRotate' === t)
													i = n.mat2d.rotate(Array.of(0, 0, 0, 0, 0, 0), i, o);
												else if ('skew' === t) {
													const [t, e] = o;
													i = n.mat2d.multiply(
														i,
														i,
														n.mat2d.fromValues(1, Math.tan(e), Math.tan(t), 1, 0, 0),
													);
												} else n.mat2d[t](i, i, o);
												(e || r) &&
													(i = n.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), i, [-e, -r]));
											}),
											i
										);
									})(this[v], this.transformOrigin)),
								[...this[m]]
							),
						}),
						this[s]({
							id: '',
							name: '',
							className: '',
							x: 0,
							y: 0,
							transformOrigin: [0, 0],
							transform: '',
							translate: [0, 0],
							rotate: 0,
							scale: [1, 1],
							skew: [0, 0],
							opacity: 1,
							zIndex: 0,
							offsetPath: void 0,
							offsetDistance: 0,
							offsetRotate: 'auto',
							pointerEvents: 'visible',
							filter: 'none',
							display: '',
						}),
						this[a]('class', 'pos'),
						(this[y] = new Set()),
						(this[x] = new i.b({ scale: 5 }));
				}
				get [f]() {
					const t = {};
					return (
						[...this[y]].forEach(e => {
							t[e] = this[d][e];
						}),
						t
					);
				}
				get [c]() {
					const t = Object.assign({}, this[d]);
					for (let e = 0; e < this[g].length; e++) {
						const r = this[g][e];
						t[r] = this[r];
					}
					return t;
				}
				[s](t) {
					Object.assign(this[p], t), Object.assign(this[d], t);
				}
				[a](...t) {
					this[g].push(...t);
				}
				[u](t, e, r = !0) {
					const n = this[d][t],
						i = this[h];
					return (
						null == e && (e = this[p][t]),
						!Object(o.a)(n, e) &&
							((this[d][t] = e),
							this[y].has(t) && this[y].delete(t),
							this[y].add(t),
							(this[b] = t),
							r && i.onPropertyChange(t, e, n, this),
							!0)
					);
				}
				[l](t) {
					return this[d][t];
				}
				set id(t) {
					this[u]('id', t);
				}
				get id() {
					return this[l]('id');
				}
				set name(t) {
					this[u]('name', t);
				}
				get name() {
					return this[l]('name');
				}
				set className(t) {
					this[u]('className', t);
				}
				get className() {
					return this[l]('className');
				}
				set class(t) {
					this.className = t;
				}
				get class() {
					return this.className;
				}
				get x() {
					return this[l]('x');
				}
				set x(t) {
					this[u]('x', Object(o.d)(t));
				}
				get y() {
					return this[l]('y');
				}
				set y(t) {
					this[u]('y', Object(o.d)(t));
				}
				get pos() {
					return [this.x, this.y];
				}
				set pos(t) {
					(t = Object(o.c)(t)), Array.isArray(t) || (t = [t, t]), (this.x = t[0]), (this.y = t[1]);
				}
				get transform() {
					return this[l]('transform');
				}
				set transform(t) {
					let e = null;
					if ((Array.isArray(t) && ((e = t), (t = `matrix(${t.map(o.d).join()})`)), 'string' == typeof t))
						t = t.replace(/\s*,\s*/g, ',');
					else if (null != t) throw new TypeError('Invalid transform value.');
					if (this[u]('transform', t)) {
						const r = this[v];
						if ((r.has('matrix') && r.delete('matrix'), e)) r.set('matrix', e);
						else if (t) {
							const e = t.match(/(matrix|translate|rotate|scale|skew)\([^()]+\)/g);
							if (!e) throw new TypeError('Invalid transform value.');
							{
								let t = n.mat2d.fromValues(1, 0, 0, 1, 0, 0);
								for (let i = 0; i < e.length; i++) {
									const s = e[i].match(/^(matrix|translate|rotate|scale|skew)\(([^()]+)\)/);
									if (s) {
										let [, e, i] = s;
										(i =
											'rotate' === e
												? (Math.PI * parseFloat(i)) / 180
												: i
														.trim()
														.split(/[\s,]+/)
														.map(t => Object(o.d)(t))),
											'matrix' === e
												? (t = n.mat2d.multiply(t, t, i))
												: 'skew' === e
												? (t = n.mat2d.multiply(
														t,
														t,
														n.mat2d.fromValues(1, Math.tan(i[1]), Math.tan(i[0]), 1, 0, 0),
												  ))
												: n.mat2d[e](t, t, i),
											r.set('matrix', t);
									}
								}
							}
						}
						this[m] = null;
					}
				}
				get transformOrigin() {
					return this[l]('transformOrigin');
				}
				set transformOrigin(t) {
					null == (t = Object(o.c)(t, !0)) || Array.isArray(t) || (t = [t, t]),
						this[u]('transformOrigin', t) && (this[m] = null);
				}
				get rotate() {
					return this[l]('rotate');
				}
				set rotate(t) {
					w(this, 'rotate', t);
				}
				get translate() {
					return this[l]('translate');
				}
				set translate(t) {
					null == (t = Object(o.c)(t, !0)) || Array.isArray(t) || (t = [t, t]), w(this, 'translate', t);
				}
				get scale() {
					return this[l]('scale');
				}
				set scale(t) {
					null == (t = Object(o.c)(t, !0)) || Array.isArray(t) || (t = [t, t]), w(this, 'scale', t);
				}
				get skew() {
					return this[l]('skew');
				}
				set skew(t) {
					null == (t = Object(o.c)(t, !0)) || Array.isArray(t) || (t = [t, t]), w(this, 'skew', t);
				}
				get opacity() {
					return this[l]('opacity');
				}
				set opacity(t) {
					null != t && (t = Number(t)), this[u]('opacity', t);
				}
				get zIndex() {
					return this[l]('zIndex');
				}
				set zIndex(t) {
					null != t && (t = Number(t)), this[u]('zIndex', t);
				}
				get offsetPath() {
					return this[l]('offsetPath');
				}
				set offsetPath(t) {
					this[u]('offsetPath', t) && (this[x].beginPath(), null != t && this[x].addPath(t), M(this));
				}
				get offsetDistance() {
					return this[l]('offsetDistance');
				}
				set offsetDistance(t) {
					this[u]('offsetDistance', Object(o.d)(t)) && M(this);
				}
				get offsetRotate() {
					return this[l]('offsetRotate');
				}
				set offsetRotate(t) {
					this[u]('offsetRotate', t), M(this);
				}
				get pointerEvents() {
					return this[l]('pointerEvents');
				}
				set pointerEvents(t) {
					if (
						null != t &&
						'none' !== t &&
						'visible' !== t &&
						'visibleFill' !== t &&
						'visibleStroke' !== t &&
						'all' !== t
					)
						throw new TypeError('Invalid pointerEvents type.');
					this[u]('pointerEvents', t);
				}
				get filter() {
					return this[l]('filter');
				}
				set filter(t) {
					this[u]('filter', t);
				}
				get display() {
					return this[l]('display');
				}
				set display(t) {
					this[u]('display', t);
				}
				set offset(t) {}
			}
		},
		function (t, e) {
			var r = {}.toString;
			t.exports = function (t) {
				return r.call(t).slice(8, -1);
			};
		},
		function (t, e) {
			t.exports = !0;
		},
		function (t, e) {
			t.exports = function (t) {
				if ('function' != typeof t) throw TypeError(t + ' is not a function!');
				return t;
			};
		},
		function (t, e) {
			t.exports = function (t, e) {
				return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
			};
		},
		function (t, e, r) {
			var n = r(15).f,
				i = r(32),
				o = r(9)('toStringTag');
			t.exports = function (t, e, r) {
				t && !i((t = r ? t : t.prototype), o) && n(t, o, { configurable: !0, value: e });
			};
		},
		function (t, e, r) {
			'use strict';
			var n = r(164)(!0);
			r(67)(
				String,
				'String',
				function (t) {
					(this._t = String(t)), (this._i = 0);
				},
				function () {
					var t,
						e = this._t,
						r = this._i;
					return r >= e.length
						? { value: void 0, done: !0 }
						: ((t = n(e, r)), (this._i += t.length), { value: t, done: !1 });
				},
			);
		},
		function (t, e, r) {
			var n = r(25),
				i = r(97),
				o = r(98),
				s = r(23),
				a = r(53),
				u = r(75),
				l = {},
				c = {};
			((e = t.exports = function (t, e, r, f, h) {
				var d,
					p,
					g,
					m,
					v = h
						? function () {
								return t;
						  }
						: u(t),
					y = n(r, f, e ? 2 : 1),
					b = 0;
				if ('function' != typeof v) throw TypeError(t + ' is not iterable!');
				if (o(v)) {
					for (d = a(t.length); d > b; b++)
						if ((m = e ? y(s((p = t[b]))[0], p[1]) : y(t[b])) === l || m === c) return m;
				} else
					for (g = v.call(t); !(p = g.next()).done; )
						if ((m = i(g, y, p.value, e)) === l || m === c) return m;
			}).BREAK = l),
				(e.RETURN = c);
		},
		function (t, e) {
			e.f = {}.propertyIsEnumerable;
		},
		function (t, e) {
			t.exports = {
				trueFunc: function () {
					return !0;
				},
				falseFunc: function () {
					return !1;
				},
			};
		},
		function (t, e, r) {
			'use strict';
			var n = r(3),
				i = r(27),
				o = r(29);
			r(0).glMatrix.setMatrixArrayType(Array);
			class s extends o.a {}
			var a = r(2),
				u = r(12);
			r.d(e, 'a', function () {
				return d;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
			const l = Symbol('zOrder'),
				c = Symbol('ordered'),
				f = Symbol('children'),
				h = Symbol('sealed');
			class d extends i.a {
				constructor(t = {}) {
					super(t), (this[f] = []), (this[c] = null), (this[l] = 0);
				}
				get childNodes() {
					return this[f];
				}
				get children() {
					return this[f];
				}
				get orderedChildren() {
					return (
						this[c] ||
							((this[c] = [...this[f]]),
							this[c].sort((t, e) => t.zIndex - e.zIndex || t.zOrder - e.zOrder)),
						this[c]
					);
				}
				append(...t) {
					return t.map(t => this.appendChild(t));
				}
				appendChild(t) {
					return (
						t.remove(),
						this[f].push(t),
						t.connect(this, this[l]++),
						this[c] &&
							(this[c].length && t.zIndex < this[c][this[c].length - 1].zIndex
								? this.reorder()
								: this[c].push(t)),
						t
					);
				}
				cloneNode(t = !1) {
					const e = super.cloneNode();
					return (
						t &&
							this[f].forEach(r => {
								const n = r.cloneNode(t);
								e.appendChild(n);
							}),
						e
					);
				}
				dispatchPointerEvent(t) {
					const e = this.orderedChildren;
					for (let r = e.length - 1; r >= 0; r--) {
						if (e[r].dispatchPointerEvent(t)) return !0;
					}
					return super.dispatchPointerEvent(t);
				}
				draw(t = []) {
					if (
						((this.__cacheRenderMatrix = this.renderMatrix),
						super.draw(t),
						!this[h] && 'none' !== this.attributes.display)
					) {
						const e = this.orderedChildren;
						for (let r = 0; r < e.length; r++) {
							e[r].draw(t);
						}
					}
					return (this.__cacheRenderMatrix = null), t;
				}
				getElementById(t) {
					return Object(u.a)(`#${t}`, this);
				}
				getElementsByClassName(t) {
					return Object(u.b)(`.${t}`, this);
				}
				getElementsByName(t) {
					return Object(u.b)(`[name="${t}"]`, this);
				}
				getElementsByTagName(t) {
					return Object(u.b)(t, this);
				}
				insertBefore(t, e) {
					if (null == e) return this.appendChild(t);
					t.remove();
					const r = this[f].indexOf(e);
					if (r < 0) throw new Error('Invalid reference node.');
					const n = e.zOrder;
					for (let t = r; t < this[f].length; t++) {
						const e = this[f][t].zOrder,
							r = this[f][t];
						delete r.zOrder,
							Object.defineProperty(r, 'zOrder', { value: e + 1, writable: !1, configurable: !0 });
					}
					if ((this[f].splice(r, 0, t), t.connect(this, n), this[c]))
						if (t.zIndex !== e.zIndex) this.reorder();
						else {
							const r = this[c].indexOf(e);
							this[c].splice(r, 0, t);
						}
					return t;
				}
				querySelector(t) {
					return Object(u.a)(t, this);
				}
				querySelectorAll(t) {
					return Object(u.b)(t, this);
				}
				replaceChild(t, e) {
					t.remove();
					const r = this[f].indexOf(e);
					if (r < 0) throw new Error('Invalid reference node.');
					if (((this[f][r] = t), t.connect(this, e.zOrder), this[c]))
						if (t.zIndex !== e.zIndex) this.reorder();
						else {
							const r = this[c].indexOf(e);
							this[c][r] = t;
						}
					return e.disconnect(this), t;
				}
				removeAllChildren() {
					const t = this[f];
					for (let e = t.length - 1; e >= 0; e--) t[e].remove();
				}
				removeChild(t) {
					const e = this[f].indexOf(t);
					if (e >= 0) {
						if ((this[f].splice(e, 1), this[c])) {
							const e = this[c].indexOf(t);
							this[c].splice(e, 1);
						}
						return t.disconnect(this), t;
					}
					return null;
				}
				reorder() {
					this[c] = null;
				}
				seal() {
					function t(t, e) {
						const r = [];
						for (let n = 0; n < t.length; n++) {
							const i = [...t[n]];
							for (let t = 1; t < i.length; t += 2) {
								const r = i[t],
									n = i[t + 1];
								(i[t] = r * e[0] + n * e[2] + e[4]), (i[t + 1] = r * e[1] + n * e[3] + e[5]);
							}
							r.push(i);
						}
						return r;
					}
					const e = this.orderedChildren,
						r = new n.b(),
						i = this.localMatrix;
					for (let n = 0; n < e.length; n++) {
						let i = e[n];
						if ((i instanceof d && (i = i.seal()), i.clientBox)) {
							let e = i.clientBox.contours.path;
							(e = t(e, i.localMatrix)), r.addPath(e);
						}
						if (i.path) {
							let e = i.path.contours.path;
							(e = t(e, i.localMatrix)), r.addPath(e);
						}
					}
					return (this[h] = !0), (this.clientBox = r), { clientBox: r, localMatrix: i };
				}
				setResolution({ width: t, height: e }) {
					super.setResolution({ width: t, height: e }),
						this[f].forEach(r => {
							r.setResolution({ width: t, height: e });
						});
				}
				updateContours() {
					this[h] || super.updateContours();
				}
			}
			var p, g, m;
			(m = s),
				(g = 'Attr') in (p = d)
					? Object.defineProperty(p, g, { value: m, enumerable: !0, configurable: !0, writable: !0 })
					: (p[g] = m),
				a.a.registerNode(d, 'group');
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'a', function () {
				return y;
			});
			var n = r(3),
				i = r(22),
				o = r(7),
				s = r(48),
				a = r(2),
				u = r(11);
			function l(t, e) {
				if (null == t) return {};
				var r,
					n,
					i = (function (t, e) {
						if (null == t) return {};
						var r,
							n,
							i = {},
							o = Object.keys(t);
						for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
						return i;
					})(t, e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					for (n = 0; n < o.length; n++)
						(r = o[n]),
							e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
				}
				return i;
			}
			r(0).glMatrix.setMatrixArrayType(Array);
			const c = { antialias: !0, autoRender: !0, alpha: !0 },
				f = Symbol('autoRender'),
				h = Symbol('renderer'),
				d = Symbol('timeline'),
				p = Symbol('prepareRender'),
				g = Symbol('tickRender'),
				m = Symbol('pass'),
				v = Symbol('fbo');
			class y extends s.a {
				constructor(t = {}) {
					if ((super(), !t.canvas)) {
						const { width: e, height: r } = this.getResolution(),
							i = n.a.createCanvas(e, r, { offscreen: !!t.offscreen, id: t.id, extra: t.extra });
						i.style && (i.style.position = 'absolute'),
							i.dataset && (i.dataset.layerId = t.id),
							i.contextType && (t.contextType = i.contextType),
							(t.canvas = i);
					}
					const e = t.canvas,
						r = Object.assign({}, c, t);
					(this[f] = r.autoRender), delete t.autoRender;
					const o = r.Renderer || n.e;
					if (((this[h] = new o(e, r)), e.__gl__)) {
						const t = e.__gl__;
						t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA);
					}
					(this.options = t),
						(this.id = t.id),
						(this[m] = []),
						this.setResolution(e),
						(this.canvas = e),
						(this[d] = new i.Timeline()),
						(this.__mouseCapturedTarget = null);
				}
				get autoRender() {
					return this[f];
				}
				get displayRatio() {
					return this.parent && this.parent.options ? this.parent.options.displayRatio : 1;
				}
				get height() {
					const { height: t } = this.getResolution();
					return t / this.displayRatio;
				}
				get gl() {
					return this.renderer.glRenderer ? this.renderer.glRenderer.gl : null;
				}
				get layer() {
					return this;
				}
				get offscreen() {
					return !!this.options.offscreen || this.canvas._offscreen;
				}
				get pass() {
					return this[m];
				}
				get prepareRender() {
					return this[p] ? this[p] : Promise.resolve();
				}
				get renderer() {
					return this[h];
				}
				get renderOffset() {
					if (this.parent && this.parent.options) {
						const { left: t, top: e } = this.parent.options;
						return [t, e];
					}
					return [0 | this.options.left, 0 | this.options.top];
				}
				get timeline() {
					return this[d];
				}
				get width() {
					const { width: t } = this.getResolution();
					return t / this.displayRatio;
				}
				addPass({ vertex: t, fragment: e, options: r, uniforms: i } = {}) {
					if (this.renderer.glRenderer) {
						const { width: o, height: s } = this.getResolution(),
							a = this.renderer.createPassProgram({ vertex: t, fragment: e, options: r }),
							u = new n.b();
						u.rect(0, 0, o, s);
						const l = new n.c(u, { width: o, height: s });
						return l.setUniforms(i), l.setProgram(a), this[m].push(l), this.forceUpdate(), l;
					}
					return null;
				}
				deleteTexture(t) {
					return Object(u.c)(t, this.renderer);
				}
				dispatchPointerEvent(t) {
					const e = t.type;
					if ('mousedown' === e || 'mouseup' === e || 'mousemove' === e) {
						const e = this.__mouseCapturedTarget;
						if (e) {
							if (e.layer === this) return e.dispatchEvent(t), !0;
							this.__mouseCapturedTarget = null;
						}
					}
					return super.dispatchPointerEvent(t);
				}
				forceUpdate() {
					if (!this[p])
						if (this.parent && this.parent.hasOffscreenCanvas) {
							this.parent.forceUpdate();
							let t = null;
							const e = new Promise(e => {
								t = e;
							});
							(e._resolve = t), (this[p] = e);
						} else {
							let t = null,
								e = null;
							const r = new Promise(n => {
								(t = n),
									this[f] &&
										(e = Object(o.b)(() => {
											delete r._requestID, this.render();
										}));
							});
							(r._resolve = t), (r._requestID = e), (this[p] = r);
						}
				}
				getFBO() {
					const t = this.renderer.glRenderer,
						{ width: e, height: r } = this.getResolution();
					return !t || (this[v] && this[v].width === e && this[v].height === r)
						? this[v]
							? this[v]
							: null
						: ((this[v] = {
								width: e,
								height: r,
								target: t.createFBO(),
								buffer: t.createFBO(),
								swap() {
									[this.target, this.buffer] = [this.buffer, this.target];
								},
						  }),
						  this[v]);
				}
				onPropertyChange(t, e, r) {
					super.onPropertyChange(t, e, r), 'zIndex' === t && (this.canvas.style.zIndex = e);
				}
				_prepareRenderFinished() {
					this[p] &&
						(this[p]._requestID && Object(o.a)(this[p]._requestID), this[p]._resolve(), delete this[p]);
				}
				render({ clear: t = !0 } = {}) {
					const e = this[m].length ? this.getFBO() : null;
					e && this.renderer.glRenderer.bindFBO(e.target), t && this[h].clear();
					const r = this.draw();
					if ((r && r.length && (this.renderer.drawMeshes(r), this.canvas.draw && this.canvas.draw()), e)) {
						const t = this.renderer.glRenderer,
							r = this[m].length;
						this[m].forEach((n, i) => {
							(n.blend = !0),
								n.setTexture(e.target.texture),
								i === r - 1 ? t.bindFBO(null) : (e.swap(), t.bindFBO(e.target)),
								this[h].clear(),
								this.renderer.drawMeshes([n]);
						});
					}
					this._prepareRenderFinished();
				}
				setResolution({ width: t, height: e }) {
					const r = this.renderer,
						n = r.globalTransformMatrix,
						i = n[4],
						o = n[5],
						s = n[0],
						{ width: a, height: u } = this.getResolution();
					(a === t && u === e) ||
						(super.setResolution({ width: t, height: e }),
						this.canvas && ((this.canvas.width = t), (this.canvas.height = e)),
						r.glRenderer && r.glRenderer.gl.viewport(0, 0, t, e),
						(this.attributes.size = [t, e]),
						this[m].length &&
							this[m].forEach(r => {
								r.setResolution({ width: t, height: e });
							}));
					const [l, c] = this.renderOffset,
						f = this.displayRatio;
					(i === l && o === c && s === f) || (r.setGlobalTransform(f, 0, 0, f, l, c), this.forceUpdate());
				}
				tick(t, e = {}) {
					let { duration: r = 1 / 0 } = e,
						n = l(e, ['duration']);
					const i = this.timeline.fork(n),
						s = this,
						a = () => {
							let e = null,
								n = null;
							const u = () => {
								const e = Math.min(1, i.currentTime / r),
									n = t(i.currentTime, e);
								s[f] &&
									!s[g] &&
									(s[g] = Promise.resolve().then(() => {
										s.render(), delete s[g], t && !1 !== n && e < 1 && a();
									}));
							};
							if (
								(this[p] &&
									'ticker' !== this[p]._type &&
									(Object(o.a)(this[p]._requestID), delete this[p]),
								this[p])
							)
								Object(o.b)(u);
							else {
								const t = new Promise(t => {
									(e = t), (n = Object(o.b)(u));
								});
								(t._resolve = e), (t._requestID = n), (t._type = 'ticker'), (this[p] = t);
							}
						};
					a();
				}
				toGlobalPos(t, e) {
					const { width: r, height: n } = this.getResolution(),
						i = this.renderOffset,
						o = [this.canvas.clientWidth, this.canvas.clientHeight];
					(t = (t * o[0]) / r + i[0]), (e = (e * o[1]) / n + i[1]);
					const s = this.displayRatio;
					return [t * s, e * s];
				}
				toLocalPos(t, e) {
					const { width: r, height: n } = this.getResolution(),
						i = this.renderOffset,
						o = [this.canvas.clientWidth, this.canvas.clientHeight];
					(t = (t * r) / o[0] - i[0]), (e = (e * n) / o[1] - i[1]);
					const s = this.displayRatio;
					return [t / s, e / s];
				}
			}
			a.a.registerNode(y, 'layer');
		},
		function (t, e, r) {
			'use strict';
			t.exports = function (t) {
				var e = t.length;
				if (0 === e) return [[], []];
				for (var r = t[0].length, n = t[0].slice(), i = t[0].slice(), o = 1; o < e; ++o)
					for (var s = t[o], a = 0; a < r; ++a) {
						var u = s[a];
						(n[a] = Math.min(n[a], u)), (i[a] = Math.max(i[a], u));
					}
				return [n, i];
			};
		},
		function (t, e, r) {
			t.exports = (function () {
				'use strict';
				var t = function (t, e) {
						if (Array.isArray(t)) return t;
						if (Symbol.iterator in Object(t))
							return (function (t, e) {
								var r = [],
									n = !0,
									i = !1,
									o = void 0;
								try {
									for (
										var s, a = t[Symbol.iterator]();
										!(n = (s = a.next()).done) && (r.push(s.value), !e || r.length !== e);
										n = !0
									);
								} catch (t) {
									(i = !0), (o = t);
								} finally {
									try {
										!n && a.return && a.return();
									} finally {
										if (i) throw o;
									}
								}
								return r;
							})(t, e);
						throw new TypeError('Invalid attempt to destructure non-iterable instance');
					},
					e = 2 * Math.PI,
					r = function (t, e, r, n, i, o, s) {
						var a = t.x,
							u = t.y;
						return { x: n * (a *= e) - i * (u *= r) + o, y: i * a + n * u + s };
					},
					n = function (t, e) {
						var r = (4 / 3) * Math.tan(e / 4),
							n = Math.cos(t),
							i = Math.sin(t),
							o = Math.cos(t + e),
							s = Math.sin(t + e);
						return [
							{ x: n - i * r, y: i + n * r },
							{ x: o + s * r, y: s - o * r },
							{ x: o, y: s },
						];
					},
					i = function (t, e, r, n) {
						var i = t * n - e * r < 0 ? -1 : 1,
							o = (t * r + e * n) / (Math.sqrt(t * t + e * e) * Math.sqrt(t * t + e * e));
						return o > 1 && (o = 1), o < -1 && (o = -1), i * Math.acos(o);
					},
					o = function (o) {
						var s = o.px,
							a = o.py,
							u = o.cx,
							l = o.cy,
							c = o.rx,
							f = o.ry,
							h = o.xAxisRotation,
							d = void 0 === h ? 0 : h,
							p = o.largeArcFlag,
							g = void 0 === p ? 0 : p,
							m = o.sweepFlag,
							v = void 0 === m ? 0 : m,
							y = [];
						if (0 === c || 0 === f) return [];
						var b = Math.sin((d * e) / 360),
							x = Math.cos((d * e) / 360),
							w = (x * (s - u)) / 2 + (b * (a - l)) / 2,
							M = (-b * (s - u)) / 2 + (x * (a - l)) / 2;
						if (0 === w && 0 === M) return [];
						(c = Math.abs(c)), (f = Math.abs(f));
						var S = Math.pow(w, 2) / Math.pow(c, 2) + Math.pow(M, 2) / Math.pow(f, 2);
						S > 1 && ((c *= Math.sqrt(S)), (f *= Math.sqrt(S)));
						var A = (function (t, r, n, o, s, a, u, l, c, f, h, d) {
								var p = Math.pow(s, 2),
									g = Math.pow(a, 2),
									m = Math.pow(h, 2),
									v = Math.pow(d, 2),
									y = p * g - p * v - g * m;
								y < 0 && (y = 0), (y /= p * v + g * m);
								var b = (((y = Math.sqrt(y) * (u === l ? -1 : 1)) * s) / a) * d,
									x = ((y * -a) / s) * h,
									w = f * b - c * x + (t + n) / 2,
									M = c * b + f * x + (r + o) / 2,
									S = (h - b) / s,
									A = (d - x) / a,
									_ = (-h - b) / s,
									T = (-d - x) / a,
									E = i(1, 0, S, A),
									O = i(S, A, _, T);
								return 0 === l && O > 0 && (O -= e), 1 === l && O < 0 && (O += e), [w, M, E, O];
							})(s, a, u, l, c, f, g, v, b, x, w, M),
							_ = t(A, 4),
							T = _[0],
							E = _[1],
							O = _[2],
							C = _[3],
							R = Math.max(Math.ceil(Math.abs(C) / (e / 4)), 1);
						C /= R;
						for (var L = 0; L < R; L++) y.push(n(O, C)), (O += C);
						return y.map(function (t) {
							var e = r(t[0], c, f, x, b, T, E),
								n = e.x,
								i = e.y,
								o = r(t[1], c, f, x, b, T, E),
								s = o.x,
								a = o.y,
								u = r(t[2], c, f, x, b, T, E);
							return { x1: n, y1: i, x2: s, y2: a, x: u.x, y: u.y };
						});
					},
					s = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
					a = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
					u = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
				function l(t) {
					var e = t[0][0],
						r = t[0][1],
						n = e,
						i = r;
					return (
						t.forEach(function (t) {
							var o = t[0],
								s = t[2],
								a = t[4],
								u = t[6],
								l = t[1],
								c = t[3],
								f = t[5],
								h = t[7];
							(e = Math.min(e, o, s, a, u)),
								(r = Math.min(r, l, c, f, h)),
								(n = Math.max(n, o, s, a, u)),
								(i = Math.max(i, l, c, f, h));
						}),
						[e, r, n, i]
					);
				}
				var c = {};
				function f(t, e, r, n, i, o, s, a, u, l) {
					var c = (r - t) * u + t,
						f = (n - e) * u + e,
						h = (i - r) * u + r,
						d = (o - n) * u + n,
						p = (h - c) * u + c,
						g = (d - f) * u + f,
						m = (((s - i) * u + i - h) * u + h - p) * u + p,
						v = (((a - o) * u + o - d) * u + d - g) * u + g;
					return l ? [m, v, p, g, c, f, t, e] : [t, e, c, f, p, g, m, v];
				}
				return (
					(c.parser = function (t) {
						var e = [];
						return (
							t.replace(a, function (t, r, n) {
								var i = r.toLowerCase();
								for (
									n = (function (t) {
										var e = t.match(u);
										return e ? e.map(Number) : [];
									})(n),
										'm' == i &&
											n.length > 2 &&
											(e.push([r].concat(n.splice(0, 2))), (i = 'l'), (r = 'm' == r ? 'l' : 'L'));
									;

								) {
									if (n.length == s[i]) return n.unshift(r), e.push(n);
									if (n.length < s[i]) throw new Error('malformed path data');
									e.push([r].concat(n.splice(0, s[i])));
								}
							}),
							e
						);
					}),
					(c.lerpCurve = function (t, e, r) {
						return c
							.lerpPoints(t[0], t[1], e[0], e[1], r)
							.concat(c.lerpPoints(t[2], t[3], e[2], e[3], r))
							.concat(c.lerpPoints(t[4], t[5], e[4], e[5], r))
							.concat(c.lerpPoints(t[6], t[7], e[6], e[7], r));
					}),
					(c.lerpPoints = function (t, e, r, n, i) {
						return [t + (r - t) * i, e + (n - e) * i];
					}),
					(c.q2b = function (t, e, r, n, i, o) {
						return [t, e, (t + 2 * r) / 3, (e + 2 * n) / 3, (i + 2 * r) / 3, (o + 2 * n) / 3, i, o];
					}),
					(c.path2shapes = function (t) {
						for (
							var e = c.parser(t),
								r = 0,
								n = 0,
								i = 0,
								s = e.length,
								a = [],
								u = null,
								l = void 0,
								f = void 0,
								h = void 0,
								d = void 0,
								p = void 0,
								g = void 0,
								m = void 0;
							i < s;
							i++
						) {
							var v = e[i],
								y = v[0],
								b = e[i - 1];
							switch (y) {
								case 'm':
									(a[(p = a.length)] = []), (u = a[p]), (r += v[1]), (n += v[2]);
									break;
								case 'M':
									(a[(p = a.length)] = []), (u = a[p]), (r = v[1]), (n = v[2]);
									break;
								case 'l':
									u.push([r, n, r, n, r, n, r + v[1], n + v[2]]), (r += v[1]), (n += v[2]);
									break;
								case 'L':
									u.push([r, n, v[1], v[2], v[1], v[2], v[1], v[2]]), (r = v[1]), (n = v[2]);
									break;
								case 'h':
									u.push([r, n, r, n, r, n, r + v[1], n]), (r += v[1]);
									break;
								case 'H':
									u.push([r, n, v[1], n, v[1], n, v[1], n]), (r = v[1]);
									break;
								case 'v':
									u.push([r, n, r, n, r, n, r, n + v[1]]), (n += v[1]);
									break;
								case 'V':
									u.push([r, n, r, v[1], r, v[1], r, v[1]]), (n = v[1]);
									break;
								case 'C':
									u.push([r, n, v[1], v[2], v[3], v[4], v[5], v[6]]), (r = v[5]), (n = v[6]);
									break;
								case 'S':
									'C' === b[0] || 'c' === b[0]
										? u.push([r, n, r + b[5] - b[3], n + b[6] - b[4], v[1], v[2], v[3], v[4]])
										: ('S' !== b[0] && 's' !== b[0]) ||
										  u.push([r, n, r + b[3] - b[1], n + b[4] - b[2], v[1], v[2], v[3], v[4]]),
										(r = v[3]),
										(n = v[4]);
									break;
								case 'c':
									u.push([r, n, r + v[1], n + v[2], r + v[3], n + v[4], r + v[5], n + v[6]]),
										(r += v[5]),
										(n += v[6]);
									break;
								case 's':
									'C' === b[0] || 'c' === b[0]
										? u.push([
												r,
												n,
												r + b[5] - b[3],
												n + b[6] - b[4],
												r + v[1],
												n + v[2],
												r + v[3],
												n + v[4],
										  ])
										: ('S' !== b[0] && 's' !== b[0]) ||
										  u.push([
												r,
												n,
												r + b[3] - b[1],
												n + b[4] - b[2],
												r + v[1],
												n + v[2],
												r + v[3],
												n + v[4],
										  ]),
										(r += v[3]),
										(n += v[4]);
									break;
								case 'a':
									(m = (g = o({
										rx: v[1],
										ry: v[2],
										px: r,
										py: n,
										xAxisRotation: v[3],
										largeArcFlag: v[4],
										sweepFlag: v[5],
										cx: r + v[6],
										cy: n + v[7],
									}))[g.length - 1]),
										g.forEach(function (t, e) {
											0 === e
												? u.push([r, n, t.x1, t.y1, t.x2, t.y2, t.x, t.y])
												: u.push([g[e - 1].x, g[e - 1].y, t.x1, t.y1, t.x2, t.y2, t.x, t.y]);
										}),
										(r = m.x),
										(n = m.y);
									break;
								case 'A':
									(m = (g = o({
										rx: v[1],
										ry: v[2],
										px: r,
										py: n,
										xAxisRotation: v[3],
										largeArcFlag: v[4],
										sweepFlag: v[5],
										cx: v[6],
										cy: v[7],
									}))[g.length - 1]),
										g.forEach(function (t, e) {
											0 === e
												? u.push([r, n, t.x1, t.y1, t.x2, t.y2, t.x, t.y])
												: u.push([g[e - 1].x, g[e - 1].y, t.x1, t.y1, t.x2, t.y2, t.x, t.y]);
										}),
										(r = m.x),
										(n = m.y);
									break;
								case 'Q':
									u.push(c.q2b(r, n, v[1], v[2], v[3], v[4])), (r = v[3]), (n = v[4]);
									break;
								case 'q':
									u.push(c.q2b(r, n, r + v[1], n + v[2], v[3] + r, v[4] + n)),
										(r += v[3]),
										(n += v[4]);
									break;
								case 'T':
									'Q' === b[0] || 'q' === b[0]
										? ((h = r + b[3] - b[1]),
										  (d = n + b[4] - b[2]),
										  u.push(c.q2b(r, n, h, d, v[1], v[2])))
										: ('T' !== b[0] && 't' !== b[0]) ||
										  (u.push(c.q2b(r, n, r + r - h, n + n - d, v[1], v[2])),
										  (h = r + r - h),
										  (d = n + n - d)),
										(r = v[1]),
										(n = v[2]);
									break;
								case 't':
									'Q' === b[0] || 'q' === b[0]
										? ((h = r + b[3] - b[1]),
										  (d = n + b[4] - b[2]),
										  u.push(c.q2b(r, n, h, d, r + v[1], n + v[2])))
										: ('T' !== b[0] && 't' !== b[0]) ||
										  (u.push(c.q2b(r, n, r + r - h, n + n - d, r + v[1], n + v[2])),
										  (h = r + r - h),
										  (d = n + n - d)),
										(r += v[1]),
										(n += v[2]);
									break;
								case 'Z':
								case 'z':
									(l = u[0][0]), (f = u[0][1]), u.push([r, n, l, f, l, f, l, f]);
							}
						}
						return a;
					}),
					(c._upCurves = function (t, e) {
						for (var r = 0, n = 0, i = t.length; r < e; r++) t.push(t[n].slice(0)), ++n > i - 1 && (n -= i);
					}),
					(c._splitCurves = function (t, e) {
						for (var r, n, i, o, s, a, u, l, c, h = 0, d = 0; h < e; h++) {
							var p = t[d],
								g =
									((r = p[0]),
									(n = p[1]),
									(i = p[2]),
									(o = p[3]),
									(s = p[4]),
									(a = p[5]),
									(u = p[6]),
									(l = p[7]),
									{
										left: f(r, n, i, o, s, a, u, l, (c = 0.5)),
										right: f(u, l, s, a, i, o, r, n, 1 - c, !0),
									});
							t.splice(d, 1), t.splice(d, 0, g.left, g.right), (d += 2) >= t.length - 1 && (d = 0);
						}
					}),
					(c._upShapes = function (t, e) {
						for (
							var r = function (e) {
									var r = t[t.length - 1],
										n = [];
									r.forEach(function (t) {
										n.push(t.slice(0));
									}),
										t.push(n);
								},
								n = 0;
							n < e;
							n++
						)
							r();
					}),
					(c._subShapes = function (t, e) {
						for (
							var r = function (e) {
									var r = t[t.length - 1],
										n = [],
										i = r[0][0],
										o = r[0][1];
									r.forEach(function () {
										n.push([i, o, i, o, i, o, i, o]);
									}),
										t.push(n);
								},
								n = 0;
							n < e;
							n++
						)
							r();
					}),
					(c.lerp = function (t, e, r) {
						return c._lerp(c.path2shapes(t), c.path2shapes(e), r);
					}),
					(c.MIM_CURVES_COUNT = 100),
					(c._preprocessing = function (t, e) {
						var r = t.length,
							n = e.length,
							i = JSON.parse(JSON.stringify(t)),
							o = JSON.parse(JSON.stringify(e));
						return (
							r > n ? c._subShapes(o, r - n) : r < n && c._upShapes(i, n - r),
							(i = (function (t, e) {
								var r = (function (t) {
										for (var e = [], r = 0; r < t; r++) e.push(r);
										return (
											(n = []),
											(i = []),
											(function t(e) {
												var r, o;
												for (r = 0; r < e.length; r++)
													(o = e.splice(r, 1)[0]),
														i.push(o),
														0 == e.length && n.push(i.slice()),
														t(e),
														e.splice(r, 0, o),
														i.pop();
												return n;
											})(e)
										);
										var n, i;
									})(t.length),
									n = [];
								r.forEach(function (r) {
									var i = 0;
									r.forEach(function (r) {
										var n, o;
										i +=
											((n = l(t[r])),
											(o = l(e[r])),
											Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)) +
												Math.sqrt(Math.pow(n[2] - o[2], 2) + Math.pow(n[3] - o[3], 2)));
									}),
										n.push({ index: r, distance: i });
								}),
									n.sort(function (t, e) {
										return t.distance - e.distance;
									});
								var i = [];
								return (
									n[0].index.forEach(function (e) {
										i.push(t[e]);
									}),
									i
								);
							})(i, o)).forEach(function (t, e) {
								var r = t.length,
									n = o[e].length;
								r > n
									? r < c.MIM_CURVES_COUNT
										? (c._splitCurves(t, c.MIM_CURVES_COUNT - r),
										  c._splitCurves(o[e], c.MIM_CURVES_COUNT - n))
										: c._splitCurves(o[e], r - n)
									: r < n &&
									  (n < c.MIM_CURVES_COUNT
											? (c._splitCurves(t, c.MIM_CURVES_COUNT - r),
											  c._splitCurves(o[e], c.MIM_CURVES_COUNT - n))
											: c._splitCurves(t, n - r));
							}),
							i.forEach(function (t, e) {
								i[e] = (function (t, e) {
									var r = (function (t) {
											for (var e = [], r = 0; r < t; r++) {
												for (var n = [], i = 0; i < t; i++) {
													var o = i + r;
													o > t - 1 && (o -= t), (n[o] = i);
												}
												e.push(n);
											}
											return e;
										})(t.length),
										n = [];
									r.forEach(function (r) {
										var i = 0,
											o = 0;
										r.forEach(function (r) {
											var n, s, a, u, l, c, f, h, d, p, g, m, v, y, b, x, w, M;
											i +=
												((n = t[r]),
												(s = e[o++]),
												(a = n[0]),
												(u = n[2]),
												(l = n[4]),
												(c = n[6]),
												(f = n[1]),
												(h = n[3]),
												(d = n[5]),
												(p = n[7]),
												(g = s[0]),
												(m = s[2]),
												(v = s[4]),
												(y = s[6]),
												(b = s[1]),
												(x = s[3]),
												(w = s[5]),
												(M = s[7]),
												Math.sqrt(Math.pow(g - a, 2) + Math.pow(b - f, 2)) +
													Math.sqrt(Math.pow(m - u, 2) + Math.pow(x - h, 2)) +
													Math.sqrt(Math.pow(v - l, 2) + Math.pow(w - d, 2)) +
													Math.sqrt(Math.pow(y - c, 2) + Math.pow(M - p, 2)));
										}),
											n.push({ index: r, distance: i });
									}),
										n.sort(function (t, e) {
											return t.distance - e.distance;
										});
									var i = [];
									return (
										n[0].index.forEach(function (e) {
											i.push(t[e]);
										}),
										i
									);
								})(t, o[e]);
							}),
							[i, o]
						);
					}),
					(c._lerp = function (t, e, r) {
						var n = [];
						return (
							t.forEach(function (t, i) {
								var o = [];
								t.forEach(function (t, n) {
									o.push(c.lerpCurve(t, e[i][n], r));
								}),
									n.push(o);
							}),
							n
						);
					}),
					(c.animate = function (t) {
						var e = c.path2shapes(t.from),
							r = c.path2shapes(t.to),
							n = c._preprocessing(e, r),
							i = new Date(),
							o = t.end || function () {},
							s = t.progress || function () {},
							a = t.begin || function () {},
							u =
								t.easing ||
								function (t) {
									return t;
								},
							l = null,
							f = null,
							h = t.time;
						a(e),
							(function t() {
								var e = new Date() - i;
								if (e >= h) return s((f = r), 1), o(f), void cancelAnimationFrame(l);
								var a = u(e / h);
								(f = c._lerp(n[0], n[1], a)), s(f, a), (l = requestAnimationFrame(t));
							})();
					}),
					c
				);
			})();
		},
		function (t, e, r) {
			r(157);
			for (
				var n = r(8),
					i = r(26),
					o = r(34),
					s = r(9)('toStringTag'),
					a = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
						',',
					),
					u = 0;
				u < a.length;
				u++
			) {
				var l = a[u],
					c = n[l],
					f = c && c.prototype;
				f && !f[s] && i(f, s, l), (o[l] = o.Array);
			}
		},
		function (t, e, r) {
			var n = r(71),
				i = Math.min;
			t.exports = function (t) {
				return t > 0 ? i(n(t), 9007199254740991) : 0;
			};
		},
		function (t, e) {
			var r = 0,
				n = Math.random();
			t.exports = function (t) {
				return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++r + n).toString(36));
			};
		},
		function (t, e, r) {
			var n = r(39),
				i = r(9)('toStringTag'),
				o =
					'Arguments' ==
					n(
						(function () {
							return arguments;
						})(),
					);
			t.exports = function (t) {
				var e, r, s;
				return void 0 === t
					? 'Undefined'
					: null === t
					? 'Null'
					: 'string' ==
					  typeof (r = (function (t, e) {
							try {
								return t[e];
							} catch (t) {}
					  })((e = Object(t)), i))
					? r
					: o
					? n(e)
					: 'Object' == (s = n(e)) && 'function' == typeof e.callee
					? 'Arguments'
					: s;
			};
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'a', function () {
				return c;
			});
			var n,
				i,
				o,
				s = r(11),
				a = r(27),
				u = r(60),
				l = r(2);
			r(0).glMatrix.setMatrixArrayType(Array);
			class c extends a.a {
				constructor(t = {}) {
					'string' == typeof t && (t = { texture: t }), super(t);
				}
				get contentSize() {
					let [t, e] = super.contentSize;
					const { width: r, height: n } = this.attributes;
					if (null == r || null == n) {
						const i = this.textureImage,
							o = this.attributes.textureRect,
							s = this.attributes.sourceRect;
						if (o) null == r && (t = o[0] + o[2]), null == n && (e = o[1] + o[3]);
						else if (s) {
							const i = this.layer ? this.layer.displayRatio : 1;
							null == r && (t = s[2] / i), null == n && (e = s[3] / i);
						} else if (i) {
							const o = this.layer ? this.layer.displayRatio : 1;
							null == r && (t = i.width / o), null == n && (e = i.height / o);
						}
					}
					return [t, e];
				}
				draw(t = []) {
					super.draw(t);
					const e = this.mesh;
					return e && Object(s.d)(this, e), t;
				}
				onPropertyChange(t, e, r) {
					if (
						(super.onPropertyChange(t, e, r),
						'texture' === t && Object(s.a)(this, e, !0),
						'textureRect' === t)
					) {
						const { width: t, height: e } = this.attributes;
						(null != t && null != e) || this.updateContours();
					}
				}
			}
			(n = c),
				(i = 'Attr'),
				(o = u.a),
				i in n
					? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
					: (n[i] = o),
				l.a.registerNode(c, 'sprite');
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'a', function () {
				return l;
			});
			var n,
				i,
				o,
				s = r(17),
				a = r(2),
				u = r(61);
			r(0).glMatrix.setMatrixArrayType(Array);
			class l extends s.a {
				get isVisible() {
					const { radiusX: t, radiusY: e, startAngle: r, endAngle: n } = this.attributes;
					return t > 0 && e > 0 && r !== n && super.isVisible;
				}
			}
			(n = l),
				(i = 'Attr'),
				(o = u.a),
				i in n
					? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
					: (n[i] = o),
				a.a.registerNode(l, 'ellipse');
		},
		function (t, e, r) {
			r(0).glMatrix.setMatrixArrayType(Array);
			var n = r(140),
				i = r(4),
				o = r(142);
			function s(t, e, r) {
				return (t[0] = e), (t[1] = r), t;
			}
			var a = [0, 0],
				u = [0, 0],
				l = [0, 0];
			t.exports = function (t, e, r) {
				var c = [],
					f = [],
					h = [0, 0];
				return (
					t.forEach(function (t, r, o) {
						if ('M' === t[0]) i.copy(h, t.slice(1)), f.length > 0 && (c.push(f), (f = []));
						else {
							if ('C' !== t[0]) throw new Error('illegal type in SVG: ' + t[0]);
							!(function (t, e, r, i) {
								n(r, s(a, i[1], i[2]), s(u, i[3], i[4]), s(l, i[5], i[6]), e, t);
							})(f, e, h, t),
								s(h, t[5], t[6]);
						}
					}),
					f.length > 0 && c.push(f),
					c.map(function (t) {
						return o(t, r || 0);
					})
				);
			};
		},
		function (t, e, r) {
			'use strict';
			r(0).glMatrix.setMatrixArrayType(Array),
				(e.a = function (t, e) {
					if (!t) return { x: 0, y: 0, width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0 };
					const [[r, n], [i, o]] = t,
						s = r * e[0] + n * e[2] + e[4],
						a = r * e[1] + n * e[3] + e[5],
						u = i * e[0] + n * e[2] + e[4],
						l = i * e[1] + n * e[3] + e[5],
						c = i * e[0] + o * e[2] + e[4],
						f = i * e[1] + o * e[3] + e[5],
						h = r * e[0] + o * e[2] + e[4],
						d = r * e[1] + o * e[3] + e[5],
						p = Math.min(s, u, c, h),
						g = Math.min(a, l, f, d),
						m = Math.max(s, u, c, h),
						v = Math.max(a, l, f, d);
					return { x: p, y: g, width: m - p, height: v - g, left: p, top: g, right: m, bottom: v };
				});
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'a', function () {
				return a;
			});
			var n = r(29);
			r(0).glMatrix.setMatrixArrayType(Array);
			const i = Symbol.for('spritejs_setAttributeDefault'),
				o = Symbol.for('spritejs_setAttribute'),
				s = Symbol.for('spritejs_getAttribute');
			class a extends n.a {
				constructor(t) {
					super(t), this[i]({ texture: void 0, textureRect: void 0, textureRepeat: !1, sourceRect: void 0 });
				}
				get texture() {
					return this[s]('texture');
				}
				set texture(t) {
					this[o]('texture', t);
				}
				get textureRect() {
					return this[s]('textureRect');
				}
				set textureRect(t) {
					this[o]('textureRect', t);
				}
				get sourceRect() {
					return this[s]('sourceRect');
				}
				set sourceRect(t) {
					this[o]('sourceRect', t);
				}
				get textureRepeat() {
					return this[s]('textureRepeat');
				}
				set textureRepeat(t) {
					this[o]('textureRepeat', !!t);
				}
			}
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'a', function () {
				return f;
			});
			var n = r(3),
				i = r(19),
				o = r(1);
			r(0).glMatrix.setMatrixArrayType(Array);
			const s = Symbol.for('spritejs_setAttributeDefault'),
				a = Symbol.for('spritejs_setAttribute'),
				u = Symbol.for('spritejs_getAttribute'),
				l = Symbol.for('spritejs_declareAlias');
			function c(t) {
				const { radiusX: e, radiusY: r, startAngle: i, endAngle: o, direction: s, closeType: a } = t,
					u = 'anitclockwise' === s,
					l = new n.b();
				return (
					'sector' === a && l.moveTo(0, 0),
					l.ellipse(0, 0, e, r, 0, (Math.PI * i) / 180, (Math.PI * o) / 180, u),
					'none' !== a && l.closePath(),
					l.path.reduce((t, e) => t + e.join(' '), '')
				);
			}
			class f extends i.a {
				constructor(t) {
					super(t),
						this[s]({
							radiusX: 0,
							radiusY: 0,
							startAngle: 0,
							endAngle: 360,
							direction: 'clockwise',
							closeType: 'none',
						}),
						this[l]('radius', 'angle');
				}
				get d() {
					return this[u]('d');
				}
				set d(t) {}
				get radiusX() {
					return this[u]('radiusX');
				}
				set radiusX(t) {
					if (((t = Object(o.d)(t)), this[a]('radiusX', t))) {
						const t = c(this);
						this[a]('d', t);
					}
				}
				get radiusY() {
					return this[u]('radiusY');
				}
				set radiusY(t) {
					if (((t = Object(o.d)(t)), this[a]('radiusY', t))) {
						const t = c(this);
						this[a]('d', t);
					}
				}
				get radius() {
					return [this.radiusX, this.radiusY];
				}
				set radius(t) {
					(t = Object(o.c)(t, !0)),
						Array.isArray(t) || (t = [t, t]),
						(this.radiusX = t[0]),
						(this.radiusY = t[1]);
				}
				get angle() {
					return [this.startAngle, this.endAngle];
				}
				set angle(t) {
					(t = Object(o.c)(t)),
						Array.isArray(t) || (t = [t, t]),
						(this.startAngle = t[0]),
						(this.endAngle = t[1]);
				}
				get direction() {
					return this[u]('direction');
				}
				set direction(t) {
					if (null != t && 'clockwise' !== t && 'anticlockwise' !== t)
						throw new TypeError('Invalid direction type.');
					this[a]('direction', t);
				}
				get startAngle() {
					return this[u]('startAngle');
				}
				set startAngle(t) {
					if (((t = Object(o.d)(t)), this[a]('startAngle', t))) {
						const t = c(this);
						this[a]('d', t);
					}
				}
				get endAngle() {
					return this[u]('endAngle');
				}
				set endAngle(t) {
					if (((t = Object(o.d)(t)), this[a]('endAngle', t))) {
						const t = c(this);
						this[a]('d', t);
					}
				}
				get closeType() {
					return this[u]('closeType');
				}
				set closeType(t) {
					if (null != t && 'none' !== t && 'sector' !== t && 'normal' !== t)
						throw new TypeError('Invalid closeType type.');
					if (this[a]('closeType', t)) {
						const t = c(this);
						this[a]('d', t);
					}
				}
			}
		},
		function (t, e, r) {
			'use strict';
			function n(t, e = Float32Array, r = null) {
				if (r && !(r instanceof e)) throw new TypeError('Wrong buffer type.');
				if (null == t) return t;
				if (t instanceof e) return t;
				if (null == t[0] || null == t[0].length) return r ? (r.set(t, 0), r) : new e(t);
				const n = t[0].length,
					i = t.length;
				r || (r = new e(n * i));
				let o = 0;
				for (let e = 0; e < i; e++) for (let i = 0; i < n; i++) r[o++] = t[e][i];
				return r;
			}
			r(0).glMatrix.setMatrixArrayType(Array);
			const i = {};
			const o = {};
			var s =
					'attribute vec3 a_vertexPosition;\n\nvoid main() {\n  gl_PointSize = 1.0;\n  gl_Position = vec4(a_vertexPosition, 1);\n}',
				a =
					'#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvoid main() {\n  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);\n}',
				u =
					'attribute vec4 a_vertexPosition;\nattribute vec2 a_vertexTextureCoord;\nvarying vec2 vTextureCoord;\n\nvoid main() {\n  gl_PointSize = 1.0;\n  gl_Position = a_vertexPosition;\n  vTextureCoord = a_vertexTextureCoord;\n}';
			function l(t, e, r) {
				return (
					e in t
						? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (t[e] = r),
					t
				);
			}
			r(0).glMatrix.setMatrixArrayType(Array);
			const c = {},
				f = Symbol('renderFrameID');
			const h = {
				int: '1i',
				ivec2: '2i',
				ivec3: '3i',
				ivec4: '4i',
				float: '1f',
				vec2: '2f',
				vec3: '3f',
				vec4: '4f',
				mat2: 'Matrix2fv',
				mat3: 'Matrix3fv',
				mat4: 'Matrix4fv',
				sampler2D: 'sampler2D',
			};
			class d {
				static addLibs(t = {}) {
					Object.assign(c, t);
				}
				static FLOAT(t, e) {
					return n(t, Float32Array, e);
				}
				static UNSIGNED_BYTE(t, e) {
					return n(t, Uint8Array, e);
				}
				static UNSIGNED_SHORT(t, e) {
					return n(t, Uint16Array, e);
				}
				static BYTE(t, e) {
					return n(t, Int8Array, e);
				}
				static SHORT(t, e) {
					return n(t, Int16Array, e);
				}
				constructor(t, e = {}) {
					let r;
					(this.options = Object.assign({}, d.defaultOptions, e)),
						(this.canvas = t),
						this.options.webgl2 && (r = t.getContext('webgl2', this.options)),
						null == r &&
							((r = (function (t, e) {
								const r = (function (t, e) {
									const r = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
									let n = null;
									for (let i = 0; i < r.length; ++i) {
										try {
											n = t.getContext(r[i], e);
										} catch (t) {}
										if (n) break;
									}
									return n;
								})(t, e);
								if (!r) throw new Error("Sorry, your browser doesn't support WebGL.");
								return r;
							})(t, this.options)),
							(this.aia_ext = r.getExtension('ANGLE_instanced_arrays'))),
						(this.gl = r),
						r.viewport(0, 0, t.width, t.height),
						r.clearColor(0, 0, 0, 0),
						r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA),
						(this.programs = []),
						(this._events = {});
				}
				get program() {
					const t = this.gl;
					return t.getParameter(t.CURRENT_PROGRAM);
				}
				_declareUniform(t, e, r = '1f') {
					const n = this.gl,
						i = n.getUniformLocation(t, e);
					let o;
					const s = this;
					if ('sampler2D' === r) {
						const r = t._samplerMap,
							a = t._bindTextures;
						Object.defineProperty(t.uniforms, e, {
							get: () => o,
							set(t) {
								o = t;
								const u = null != r[e] ? r[e] : a.length;
								(a[u] = t),
									(function (t, e, r) {
										t.activeTexture(t.TEXTURE0 + r), t.bindTexture(t.TEXTURE_2D, e);
									})(n, t, u),
									r[e] || ((r[e] = u), n.uniform1i(i, u)),
									s.options.autoUpdate && s.update();
							},
							configurable: !1,
							enumerable: !0,
						});
					} else {
						const a = 0 === r.indexOf('Matrix'),
							u = !a && /v$/.test(r),
							l = n[`uniform${r}`].bind(n);
						Object.defineProperty(t.uniforms, e, {
							get: () => o,
							set(t) {
								(o = t),
									'number' == typeof t && (t = [t]),
									a ? l(i, !1, t) : u ? l(i, t) : l(i, ...t),
									s.options.autoUpdate && s.update();
							},
							configurable: !1,
							enumerable: !0,
						});
					}
				}
				_draw() {
					const t = this.program;
					t.meshData.forEach((e, r) => {
						const {
								positions: n,
								cells: i,
								instanceCount: o,
								cellsCount: s,
								attributes: a,
								uniforms: u,
								textureCoord: l,
								enableBlend: c,
							} = e,
							f = this.gl;
						c ? f.enable(f.BLEND) : f.disable(f.BLEND),
							f.bindBuffer(f.ARRAY_BUFFER, t._buffers.verticesBuffer),
							f.bufferData(f.ARRAY_BUFFER, n, f.STATIC_DRAW),
							f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, t._buffers.cellsBuffer),
							f.bufferData(f.ELEMENT_ARRAY_BUFFER, i, f.STATIC_DRAW);
						const h = [];
						if (
							(a &&
								Object.values(a).forEach(({ name: e, data: r, divisor: n }) => {
									if (
										(f.bindBuffer(f.ARRAY_BUFFER, t._buffers[e]),
										f.bufferData(f.ARRAY_BUFFER, r, f.STATIC_DRAW),
										null != n)
									) {
										const r = f.getAttribLocation(t, e);
										r >= 0 &&
											(f.enableVertexAttribArray(r),
											h.push(r),
											f.vertexAttribDivisor
												? f.vertexAttribDivisor(r, n)
												: this.aia_ext && this.aia_ext.vertexAttribDivisorANGLE(r, n));
									}
								}),
							u &&
								Object.entries(u).forEach(([t, e]) => {
									this.uniforms[t] = e;
								}),
							t._enableTextures && t._buffers.texCoordBuffer)
						) {
							const e =
								l ||
								(function (t, e = 3) {
									const r = [],
										n = t.length;
									for (let i = 0; i < n; i++) i % e < 2 && r.push(0.5 * (t[i] + 1));
									return r;
								})(n, t._dimension);
							f.bindBuffer(f.ARRAY_BUFFER, t._buffers.texCoordBuffer),
								f.bufferData(f.ARRAY_BUFFER, d.FLOAT(e), f.STATIC_DRAW);
						}
						null != o
							? (f.drawElementsInstanced
									? f.drawElementsInstanced(f.TRIANGLES, s, f.UNSIGNED_SHORT, 0, o)
									: this.aia_ext &&
									  this.aia_ext.drawElementsInstancedANGLE(f.TRIANGLES, s, f.UNSIGNED_SHORT, 0, o),
							  h.forEach(t => {
									f.vertexAttribDivisor(t, null);
							  }))
							: f.drawElements(f.TRIANGLES, s, f.UNSIGNED_SHORT, 0);
					});
				}
				get isWebGL2() {
					return 'undefined' != typeof WebGL2RenderingContext && this.gl instanceof WebGL2RenderingContext;
				}
				get enableTextures() {
					return this.program && this.program._enableTextures;
				}
				get uniforms() {
					const t = this.program;
					if (!t || !t.uniforms) throw Error('No avaliable program.');
					return t.uniforms;
				}
				deleteProgram(t) {
					const e = this.gl;
					this.program === t &&
						((this.startRender = !1),
						this[f] && (cancelAnimationFrame(this[f]), delete this[f]),
						e.useProgram(null));
					const r = this.programs.indexOf(t);
					r >= 0 && this.programs.splice(r, 1),
						(function (t, e) {
							const r = e._buffers;
							Object.values(r).forEach(e => {
								t.deleteBuffer(e);
							}),
								(e._buffers = {});
						})(e, t),
						e.deleteProgram(t);
				}
				setMeshData(t) {
					Array.isArray(t) || (t = [t]);
					const e = this.program;
					(e.meshData = t.map(
						({
							positions: t,
							instanceCount: r,
							cells: n,
							cellsCount: i,
							attributes: o,
							uniforms: s,
							textureCoord: a,
							enableBlend: u,
						}) => {
							const l = {
								positions: d.FLOAT(t),
								cells: d.USHORT(n),
								uniforms: s,
								enableBlend: !!u,
								textureCoord: d.FLOAT(a),
							};
							if (((l.cellsCount = i || l.cells.length), null != r)) {
								if (!this.isWebGL2 && !this.aia_ext)
									throw new Error(
										'Cannot use instanceCount in this rendering context, use webgl2 context instead.',
									);
								l.instanceCount = r;
							}
							if (o) {
								const t = {};
								Object.entries(o).forEach(([r, n]) => {
									if (e._attribute[r]) {
										if ('ignored' !== e._attribute[r]) {
											const { name: i, type: o } = e._attribute[r];
											let s = n.data || n;
											if (
												(Array.isArray(s) && (s = d[o](s)),
												(t[r] = { name: i, data: s }),
												null != n.divisor)
											) {
												if (!this.isWebGL2 && !this.aia_ext)
													throw new Error(
														'Cannot use divisor in this rendering context, use webgl2 context instead.',
													);
												t[r].divisor = n.divisor;
											}
										}
									} else e._attribute[r] = 'ignored';
								}),
									(l.attributes = t);
							}
							return l;
						},
					)),
						this.options.autoUpdate && this.update();
				}
				createProgram(t, e) {
					const r = /^\s*uniform\s+sampler2D/gm.test(t);
					null == t && (t = a), null == e && (e = r ? u : s);
					const n = this.gl,
						i = (function (t, e, r) {
							const n = t.createShader(t.VERTEX_SHADER);
							if (
								(t.shaderSource(n, e), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS))
							) {
								const e = `Vertex shader failed to compile.  The error log is:${t.getShaderInfoLog(n)}`;
								throw new Error(e);
							}
							const i = t.createShader(t.FRAGMENT_SHADER);
							if (
								(t.shaderSource(i, r), t.compileShader(i), !t.getShaderParameter(i, t.COMPILE_STATUS))
							) {
								const e = `Fragment shader failed to compile.  The error log is:${t.getShaderInfoLog(
									i,
								)}`;
								throw new Error(e);
							}
							const o = t.createProgram();
							if (
								(t.attachShader(o, n),
								t.attachShader(o, i),
								t.linkProgram(o),
								!t.getProgramParameter(o, t.LINK_STATUS))
							) {
								const e = `Shader program failed to link.  The error log is:${t.getProgramInfoLog(o)}`;
								throw new Error(e);
							}
							return t.deleteShader(n), t.deleteShader(i), o;
						})(n, e, t);
					(i.shaderText = { vertexShader: e, fragmentShader: t }),
						(i._buffers = {}),
						(i._attribute = {}),
						(i.uniforms = {}),
						(i._samplerMap = {}),
						(i._bindTextures = []),
						(i._enableTextures = r);
					const o = new RegExp(`attribute vec(\\d) ${this.options.vertexPosition}`, 'im');
					let l = e.match(o);
					l && (i._dimension = Number(l[1]));
					const c = new RegExp(`attribute vec(\\d) ${this.options.vertexTextureCoord}`, 'im');
					(l = e.match(c)), l && (i._texCoordSize = Number(l[1]));
					if (((l = e.match(/^\s*attribute (\w+?)(\d*) (\w+)/gim)), l))
						for (let t = 0; t < l.length; t++) {
							const e = /^\s*attribute (\w+?)(\d*) (\w+)/im,
								r = l[t].match(e);
							if (r && r[3] !== this.options.vertexPosition && r[3] !== this.options.vertexTextureCoord) {
								let [, t, e, o] = r;
								'mat' === t && (e **= 2),
									(i._buffers[o] = n.createBuffer()),
									(i._attribute[o] = { name: o, type: t, size: Number(e) || 1 });
							}
						}
					const f = /^\s*uniform\s+(\w+)\s+(\w+)(\[\d+\])?/gm;
					return (
						(l = e.match(f) || []),
						(l = l.concat(t.match(f) || [])),
						l.forEach(t => {
							const e = t.match(/^\s*uniform\s+(\w+)\s+(\w+)(\[\d+\])?/);
							let [r, n, o] = e.slice(1);
							(r = h[r]),
								(o = !!o),
								0 !== r.indexOf('Matrix') && o && (r += 'v'),
								this._declareUniform(i, n, r);
						}),
						(i._buffers.verticesBuffer = n.createBuffer()),
						(i._buffers.cellsBuffer = n.createBuffer()),
						i._enableTextures && (i._buffers.texCoordBuffer = n.createBuffer()),
						this.programs.push(i),
						i
					);
				}
				useProgram(t, e = {}) {
					(this.startRender = !1), this[f] && (cancelAnimationFrame(this[f]), delete this[f]);
					const r = this.gl;
					r.useProgram(t);
					const n = t._dimension;
					r.bindBuffer(r.ARRAY_BUFFER, t._buffers.verticesBuffer);
					const i = r.getAttribLocation(t, this.options.vertexPosition);
					if (
						(r.vertexAttribPointer(i, n, r.FLOAT, !1, 0, 0),
						r.enableVertexAttribArray(i),
						t._enableTextures)
					) {
						r.bindBuffer(r.ARRAY_BUFFER, t._buffers.texCoordBuffer);
						const e = r.getAttribLocation(t, this.options.vertexTextureCoord);
						r.vertexAttribPointer(e, t._texCoordSize || 2, r.FLOAT, !1, 0, 0), r.enableVertexAttribArray(e);
					}
					if (
						(Object.entries(t._attribute).forEach(([n, i]) => {
							if ('ignored' !== i) {
								const o = i.size,
									s = e[n] || {},
									a = !!s.normalize;
								let u = s.type || 'FLOAT';
								const l = s.key || n;
								'UBYTE' === u && (u = 'UNSIGNED_BYTE'),
									'USHORT' === u && (u = 'UNSIGNED_SHORT'),
									(i.type = u),
									l && l !== n && (t._attribute[l] = i),
									r.bindBuffer(r.ARRAY_BUFFER, t._buffers[n]);
								const c = r.getAttribLocation(t, n);
								c >= 0 && (r.vertexAttribPointer(c, o, r[u], a, 0, 0), r.enableVertexAttribArray(c));
							}
						}),
						!t.meshData)
					) {
						const t = [
								[-1, -1, 0, 1].slice(0, n),
								[1, -1, 0, 1].slice(0, n),
								[1, 1, 0, 1].slice(0, n),
								[-1, 1, 0, 1].slice(0, n),
							],
							e = [
								[0, 1, 3],
								[3, 1, 2],
							];
						this.setMeshData({ positions: t, cells: e });
					}
					return t;
				}
				compileSync(t, e) {
					const r = {};
					function n(t) {
						const e = [],
							i = (t = t.replace(/^\s*/gm, '')).match(/^#pragma\s+include\s+.*/gm);
						if (i) {
							for (let t = 0; t < i.length; t++) {
								const o = i[t].match(/(?:<|")(.*)(?:>|")/);
								if (o) {
									const t = 0 === o[0].indexOf('<') ? 'lib' : 'link';
									let i = o[1];
									if (('graph' === i && (i = 'graphics'), r[i])) e.push(`/* included ${i} */`);
									else if (((r[i] = !0), 'lib' === t)) {
										const t = n(c[i]);
										e.push(t);
									} else if ('link' === t)
										throw new Error(
											'Cannot load external links synchronously. Use compile instead of compileSync.',
										);
								}
							}
							e.forEach(e => {
								t = t.replace(/^#pragma\s+include\s+.*/m, e);
							});
						}
						return t;
					}
					const i = n((t = t || a)),
						o = e ? n(e) : null;
					return this.createProgram(i, o);
				}
				async compile(t, e) {
					t = t || a;
					const r = {};
					async function n(t) {
						const e = [],
							i = (t = t.replace(/^\s*/gm, '')).match(/^#pragma\s+include\s+.*/gm);
						if (i) {
							for (let t = 0; t < i.length; t++) {
								const o = i[t].match(/(?:<|")(.*)(?:>|")/);
								if (o) {
									const t = 0 === o[0].indexOf('<') ? 'lib' : 'link';
									let i = o[1];
									if (('graph' === i && (i = 'graphics'), r[i])) e.push(`/* included ${i} */`);
									else if (((r[i] = !0), 'lib' === t)) {
										const t = await n(c[i]);
										e.push(t);
									} else if ('link' === t) {
										let t = await d.fetchShader(i);
										(t = await n(t)), e.push(t);
									}
								}
							}
							e.forEach(e => {
								t = t.replace(/^#pragma\s+include\s+.*/m, e);
							});
						}
						return t;
					}
					const i = await n(t),
						o = e ? await n(e) : null;
					return this.createProgram(i, o);
				}
				async load(t, e = null) {
					return (t = await d.fetchShader(t)), e && (e = await d.fetchShader(e)), this.compile(t, e);
				}
				createTexture(t = null) {
					const e = this.gl;
					e.activeTexture(e.TEXTURE15);
					const r = e.createTexture();
					e.bindTexture(e.TEXTURE_2D, r), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0);
					const { width: n, height: i } = this.canvas;
					return (
						t
							? e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t)
							: e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, n, i, 0, e.RGBA, e.UNSIGNED_BYTE, null),
						e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
						e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
						e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
						e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
						e.bindTexture(e.TEXTURE_2D, null),
						(r._img = t || { width: n, height: i }),
						(r.delete = () => {
							this.deleteTexture(r);
						}),
						r
					);
				}
				deleteTexture(t) {
					const e = t._img;
					this.gl.deleteTexture(t), 'function' == typeof e.close && e.close();
				}
				async loadTexture(t, { useImageBitmap: e = !0 } = {}) {
					const r = await d.loadImage(t, { useImageBitmap: e });
					return this.createTexture(r);
				}
				createFBO({
					color: t = 1,
					blend: e = !1,
					depth: r = !1 !== this.options.depth,
					stencil: n = !!this.options.stencil,
				} = {}) {
					const i = this.gl,
						o = i.createFramebuffer();
					i.bindFramebuffer(i.FRAMEBUFFER, o);
					const s = [];
					for (let e = 0; e < t; e++) {
						const t = this.createTexture();
						i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + e, i.TEXTURE_2D, t, 0), s.push(t);
					}
					(o.textures = s), (o.texture = s[0]), (o.blend = e);
					const { width: a, height: u } = this.canvas;
					return (
						r &&
							!n &&
							((o.depthBuffer = i.createRenderbuffer()),
							i.bindRenderbuffer(i.RENDERBUFFER, o.depthBuffer),
							i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_COMPONENT16, a, u),
							i.framebufferRenderbuffer(
								i.FRAMEBUFFER,
								i.DEPTH_ATTACHMENT,
								i.RENDERBUFFER,
								o.depthBuffer,
							)),
						n &&
							!r &&
							((o.stencilBuffer = i.createRenderbuffer()),
							i.bindRenderbuffer(i.RENDERBUFFER, o.stencilBuffer),
							i.renderbufferStorage(i.RENDERBUFFER, i.STENCIL_INDEX8, a, u),
							i.framebufferRenderbuffer(
								i.FRAMEBUFFER,
								i.STENCIL_ATTACHMENT,
								i.RENDERBUFFER,
								o.stencilBuffer,
							)),
						r &&
							n &&
							((o.depthStencilBuffer = i.createRenderbuffer()),
							i.bindRenderbuffer(i.RENDERBUFFER, o.depthStencilBuffer),
							i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, a, u),
							i.framebufferRenderbuffer(
								i.FRAMEBUFFER,
								i.DEPTH_STENCIL_ATTACHMENT,
								i.RENDERBUFFER,
								o.depthStencilBuffer,
							)),
						i.bindFramebuffer(i.FRAMEBUFFER, null),
						o
					);
				}
				bindFBO(t = null) {
					this.fbo = t;
				}
				render({ clearBuffer: t = !0 } = {}) {
					this.startRender = !0;
					const e = this.gl;
					let r = this.program;
					r || ((r = this.createProgram()), this.useProgram(r)),
						this.fbo && e.bindFramebuffer(e.FRAMEBUFFER, this.fbo),
						t && e.clear(e.COLOR_BUFFER_BIT);
					const n = this[f];
					this._draw(), this.fbo && e.bindFramebuffer(e.FRAMEBUFFER, null), this[f] === n && (this[f] = null);
				}
				update() {
					this.startRender && null == this[f] && (this[f] = requestAnimationFrame(this.render.bind(this)));
				}
			}
			l(d, 'defaultOptions', {
				preserveDrawingBuffer: !0,
				autoUpdate: !0,
				vertexPosition: 'a_vertexPosition',
				vertexTextureCoord: 'a_vertexTextureCoord',
				webgl2: !1,
			}),
				l(d, 'UBYTE', d.UNSIGNED_BYTE),
				l(d, 'USHORT', d.UNSIGNED_SHORT),
				l(d, 'fetchShader', async function (t) {
					if (o[t]) return o[t];
					const e = await fetch(t);
					if (e.status >= 200 && e.status < 300) {
						const r = await e.text();
						return (o[t] = r), r;
					}
					throw new Error('Shader loaded error.');
				}),
				l(d, 'loadImage', function (t, { useImageBitmap: e = !0, alias: r = null } = {}) {
					if (!i[t])
						if ('function' == typeof Image) {
							const n = new Image();
							'string' != typeof t ||
								('object' == typeof location && /^file:/.test(location.href)) ||
								/^data:/.test(t) ||
								(n.crossOrigin = 'anonymous'),
								(i[t] = new Promise(o => {
									(n.onload = function () {
										e && 'function' == typeof createImageBitmap
											? createImageBitmap(n, { imageOrientation: 'flipY' }).then(e => {
													(i[t] = e), r && (i[r] = e), o(e);
											  })
											: ((i[t] = n), r && (i[r] = n), o(n));
									}),
										(n.src = t);
								})),
								r && (i[r] = i[t]);
						} else if ('function' == typeof fetch)
							return fetch(t, { method: 'GET', mode: 'cors', cache: 'default' })
								.then(t => t.blob())
								.then(e =>
									createImageBitmap(e, { imageOrientation: 'flipY' }).then(
										e => ((i[t] = e), r && (i[r] = e), e),
									),
								);
					return i[t];
				}),
				r(0).glMatrix.setMatrixArrayType(Array);
			e.a = d;
		},
		function (t, e) {
			var r;
			r = (function () {
				return this;
			})();
			try {
				r = r || new Function('return this')();
			} catch (t) {
				'object' == typeof window && (r = window);
			}
			t.exports = r;
		},
		function (t, e, r) {
			'use strict';
			e.__esModule = !0;
			var n = o(r(155)),
				i = o(r(166));
			function o(t) {
				return t && t.__esModule ? t : { default: t };
			}
			e.default = function (t, e) {
				if (Array.isArray(t)) return t;
				if ((0, n.default)(Object(t)))
					return (function (t, e) {
						var r = [],
							n = !0,
							o = !1,
							s = void 0;
						try {
							for (
								var a, u = (0, i.default)(t);
								!(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e);
								n = !0
							);
						} catch (t) {
							(o = !0), (s = t);
						} finally {
							try {
								!n && u.return && u.return();
							} finally {
								if (o) throw s;
							}
						}
						return r;
					})(t, e);
				throw new TypeError('Invalid attempt to destructure non-iterable instance');
			};
		},
		function (t, e, r) {
			var n = r(39);
			t.exports = Object('z').propertyIsEnumerable(0)
				? Object
				: function (t) {
						return 'String' == n(t) ? t.split('') : Object(t);
				  };
		},
		function (t, e) {
			t.exports = function (t) {
				if (null == t) throw TypeError("Can't call method on  " + t);
				return t;
			};
		},
		function (t, e, r) {
			'use strict';
			var n = r(40),
				i = r(10),
				o = r(93),
				s = r(26),
				a = r(34),
				u = r(159),
				l = r(43),
				c = r(163),
				f = r(9)('iterator'),
				h = !([].keys && 'next' in [].keys()),
				d = function () {
					return this;
				};
			t.exports = function (t, e, r, p, g, m, v) {
				u(r, e, p);
				var y,
					b,
					x,
					w = function (t) {
						if (!h && t in _) return _[t];
						switch (t) {
							case 'keys':
							case 'values':
								return function () {
									return new r(this, t);
								};
						}
						return function () {
							return new r(this, t);
						};
					},
					M = e + ' Iterator',
					S = 'values' == g,
					A = !1,
					_ = t.prototype,
					T = _[f] || _['@@iterator'] || (g && _[g]),
					E = T || w(g),
					O = g ? (S ? w('entries') : E) : void 0,
					C = ('Array' == e && _.entries) || T;
				if (
					(C &&
						(x = c(C.call(new t()))) !== Object.prototype &&
						x.next &&
						(l(x, M, !0), n || 'function' == typeof x[f] || s(x, f, d)),
					S &&
						T &&
						'values' !== T.name &&
						((A = !0),
						(E = function () {
							return T.call(this);
						})),
					(n && !v) || (!h && !A && _[f]) || s(_, f, E),
					(a[e] = E),
					(a[M] = d),
					g)
				)
					if (((y = { values: S ? E : w('values'), keys: m ? E : w('keys'), entries: O }), v))
						for (b in y) b in _ || o(_, b, y[b]);
					else i(i.P + i.F * (h || A), e, y);
				return y;
			};
		},
		function (t, e, r) {
			var n = r(16),
				i = r(8).document,
				o = n(i) && n(i.createElement);
			t.exports = function (t) {
				return o ? i.createElement(t) : {};
			};
		},
		function (t, e, r) {
			var n = r(16);
			t.exports = function (t, e) {
				if (!n(t)) return t;
				var r, i;
				if (e && 'function' == typeof (r = t.toString) && !n((i = r.call(t)))) return i;
				if ('function' == typeof (r = t.valueOf) && !n((i = r.call(t)))) return i;
				if (!e && 'function' == typeof (r = t.toString) && !n((i = r.call(t)))) return i;
				throw TypeError("Can't convert object to primitive value");
			};
		},
		function (t, e, r) {
			var n = r(23),
				i = r(160),
				o = r(74),
				s = r(72)('IE_PROTO'),
				a = function () {},
				u = function () {
					var t,
						e = r(68)('iframe'),
						n = o.length;
					for (
						e.style.display = 'none',
							r(95).appendChild(e),
							e.src = 'javascript:',
							(t = e.contentWindow.document).open(),
							t.write('<script>document.F=Object</script>'),
							t.close(),
							u = t.F;
						n--;

					)
						delete u.prototype[o[n]];
					return u();
				};
			t.exports =
				Object.create ||
				function (t, e) {
					var r;
					return (
						null !== t
							? ((a.prototype = n(t)), (r = new a()), (a.prototype = null), (r[s] = t))
							: (r = u()),
						void 0 === e ? r : i(r, e)
					);
				};
		},
		function (t, e) {
			var r = Math.ceil,
				n = Math.floor;
			t.exports = function (t) {
				return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
			};
		},
		function (t, e, r) {
			var n = r(73)('keys'),
				i = r(54);
			t.exports = function (t) {
				return n[t] || (n[t] = i(t));
			};
		},
		function (t, e, r) {
			var n = r(6),
				i = r(8),
				o = i['__core-js_shared__'] || (i['__core-js_shared__'] = {});
			(t.exports = function (t, e) {
				return o[t] || (o[t] = void 0 !== e ? e : {});
			})('versions', []).push({
				version: n.version,
				mode: r(40) ? 'pure' : 'global',
				copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
			});
		},
		function (t, e) {
			t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
				',',
			);
		},
		function (t, e, r) {
			var n = r(55),
				i = r(9)('iterator'),
				o = r(34);
			t.exports = r(6).getIteratorMethod = function (t) {
				if (null != t) return t[i] || t['@@iterator'] || o[n(t)];
			};
		},
		function (t, e) {},
		function (t, e, r) {
			var n = r(26);
			t.exports = function (t, e, r) {
				for (var i in e) r && t[i] ? (t[i] = e[i]) : n(t, i, e[i]);
				return t;
			};
		},
		function (t, e) {
			t.exports = function (t, e, r, n) {
				if (!(t instanceof e) || (void 0 !== n && n in t)) throw TypeError(r + ': incorrect invocation!');
				return t;
			};
		},
		function (t, e, r) {
			var n = r(54)('meta'),
				i = r(16),
				o = r(32),
				s = r(15).f,
				a = 0,
				u =
					Object.isExtensible ||
					function () {
						return !0;
					},
				l = !r(31)(function () {
					return u(Object.preventExtensions({}));
				}),
				c = function (t) {
					s(t, n, { value: { i: 'O' + ++a, w: {} } });
				},
				f = (t.exports = {
					KEY: n,
					NEED: !1,
					fastKey: function (t, e) {
						if (!i(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
						if (!o(t, n)) {
							if (!u(t)) return 'F';
							if (!e) return 'E';
							c(t);
						}
						return t[n].i;
					},
					getWeak: function (t, e) {
						if (!o(t, n)) {
							if (!u(t)) return !0;
							if (!e) return !1;
							c(t);
						}
						return t[n].w;
					},
					onFreeze: function (t) {
						return l && f.NEED && u(t) && !o(t, n) && c(t), t;
					},
				});
		},
		function (t, e, r) {
			t.exports = { default: r(187), __esModule: !0 };
		},
		function (t, e) {
			e.f = Object.getOwnPropertySymbols;
		},
		function (t, e, r) {
			var n = r(8),
				i = r(6),
				o = r(40),
				s = r(107),
				a = r(15).f;
			t.exports = function (t) {
				var e = i.Symbol || (i.Symbol = o ? {} : n.Symbol || {});
				'_' == t.charAt(0) || t in e || a(e, t, { value: s.f(t) });
			};
		},
		function (t, e, r) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }), (e.parseEasing = e.Easings = void 0);
			var n = s(r(64)),
				i = s(r(96)),
				o = s(r(100));
			function s(t) {
				return t && t.__esModule ? t : { default: t };
			}
			var a = r(201),
				u = new o.default();
			function l() {
				for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
				var n = u.get(e);
				return n || ((n = a.apply(void 0, e)), u.set(e, n), n);
			}
			function c(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'end';
				return function (r, n) {
					for (var i = 1; i < n.length; i++) {
						var o = n[i].offset;
						if (r <= o) {
							var s = n[i - 1].offset,
								a = o,
								u = 1 / t,
								l = (r - s) / (a - s) / u;
							return u * (l = 'end' === e ? Math.floor(l) : Math.ceil(l)) * (a - s) + s;
						}
					}
					return 0;
				};
			}
			var f = {
				linear: function (t) {
					return t;
				},
				ease: l(0.25, 0.1, 0.25, 1),
				'ease-in': l(0.42, 0, 1, 1),
				'ease-out': l(0, 0, 0.58, 1),
				'ease-in-out': l(0.42, 0, 0.58, 1),
				'step-start': c(1, 'start'),
				'step-end': c(1, 'end'),
			};
			(e.Easings = f),
				(e.parseEasing = function (t) {
					return (
						'string' == typeof t
							? (t = f[t]
									? f[t]
									: (function (t) {
											var e = /^cubic-bezier\((.*)\)/,
												r = t.match(e);
											if (r) {
												var o = r[1].trim();
												return (
													(o = o.split(',').map(function (t) {
														return parseFloat(t.trim());
													})),
													l.apply(void 0, (0, i.default)(o))
												);
											}
											if (((e = /^steps\((.*)\)/), (r = t.match(e)))) {
												var s = r[1].trim(),
													a = (s = s.split(',').map(function (t) {
														return t.trim();
													})),
													u = (0, n.default)(a, 2),
													f = u[0],
													h = u[1];
												return c(parseInt(f, 10), h);
											}
											return t;
									  })(t))
							: 'cubic-bezier' === t.type
							? (t = l.apply(void 0, (0, i.default)(t.value)))
							: 'steps' === t.type && (t = c(t.step, t.pos)),
						t
					);
				});
		},
		function (t, e, r) {
			'use strict';
			var n = r(41);
			function i(t) {
				var e, r;
				(this.promise = new t(function (t, n) {
					if (void 0 !== e || void 0 !== r) throw TypeError('Bad Promise constructor');
					(e = t), (r = n);
				})),
					(this.resolve = n(e)),
					(this.reject = n(r));
			}
			t.exports.f = function (t) {
				return new i(t);
			};
		},
		function (t, e) {
			t.exports = {
				Text: 'text',
				Directive: 'directive',
				Comment: 'comment',
				Script: 'script',
				Style: 'style',
				Tag: 'tag',
				CDATA: 'cdata',
				Doctype: 'doctype',
				isTag: function (t) {
					return 'tag' === t.type || 'script' === t.type || 'style' === t.type;
				},
			};
		},
		function (t, e) {
			t.exports = function (t) {
				var e = [];
				return (
					t.replace(n, function (t, n, o) {
						var s = n.toLowerCase();
						for (
							o = (function (t) {
								var e = t.match(i);
								return e ? e.map(Number) : [];
							})(o),
								'm' == s &&
									o.length > 2 &&
									(e.push([n].concat(o.splice(0, 2))), (s = 'l'), (n = 'm' == n ? 'l' : 'L'));
							;

						) {
							if (o.length == r[s]) return o.unshift(n), e.push(o);
							if (o.length < r[s]) throw new Error('malformed path data');
							e.push([n].concat(o.splice(0, r[s])));
						}
					}),
					e
				);
			};
			var r = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
				n = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
			var i = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
		},
		function (t, e) {
			t.exports = function (t) {
				var e = 0,
					r = 0,
					n = 0,
					i = 0;
				return t.map(function (t) {
					var o = (t = t.slice())[0],
						s = o.toUpperCase();
					if (o != s)
						switch (((t[0] = s), o)) {
							case 'a':
								(t[6] += n), (t[7] += i);
								break;
							case 'v':
								t[1] += i;
								break;
							case 'h':
								t[1] += n;
								break;
							default:
								for (var a = 1; a < t.length; ) (t[a++] += n), (t[a++] += i);
						}
					switch (s) {
						case 'Z':
							(n = e), (i = r);
							break;
						case 'H':
							n = t[1];
							break;
						case 'V':
							i = t[1];
							break;
						case 'M':
							(n = e = t[1]), (i = r = t[2]);
							break;
						default:
							(n = t[t.length - 2]), (i = t[t.length - 1]);
					}
					return t;
				});
			};
		},
		function (t, e) {
			t.exports = function (t, e) {
				return 'number' == typeof t ? t : 'number' == typeof e ? e : 0;
			};
		},
		function (t, e, r) {
			'use strict';
			var n = r(3);
			function i(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e &&
						(n = n.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function o(t, e, r) {
				return (
					e in t
						? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (t[e] = r),
					t
				);
			}
			r(0).glMatrix.setMatrixArrayType(Array);
			const s = Symbol('inited');
			let a = null;
			'function' == typeof Worker &&
				(a = class extends Worker {
					constructor(t) {
						if (
							(!0 === t.worker && (t.worker = `./${t.id}.worker.js`),
							super(t.worker),
							(this.options = t),
							!t.canvas)
						) {
							const { width: e, height: r } = this.getResolution(),
								i = n.a.createCanvas(e, r, { offscreen: !1 });
							i.style && (i.style.position = 'absolute'),
								i.dataset && (i.dataset.layerId = t.id),
								(t.canvas = i);
						}
						this.canvas = t.canvas;
					}
					get id() {
						return this.options.id;
					}
					setResolution({ width: t, height: e }) {
						if (this[s]) this.postMessage({ type: 'resolution_change', width: t, height: e });
						else {
							(this.canvas.width = t), (this.canvas.height = e);
							const r = this.options,
								n = r.canvas.transferControlToOffscreen(),
								a = (function (t) {
									for (var e = 1; e < arguments.length; e++) {
										var r = null != arguments[e] ? arguments[e] : {};
										e % 2
											? i(r, !0).forEach(function (e) {
													o(t, e, r[e]);
											  })
											: Object.getOwnPropertyDescriptors
											? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
											: i(r).forEach(function (e) {
													Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
											  });
									}
									return t;
								})({}, r);
							delete a.container,
								(a.canvas = n),
								this.postMessage({ type: 'create', options: a }, [n]),
								(this[s] = !0);
						}
					}
					getResolution() {
						if (this.canvas) {
							const { width: t, height: e } = this.canvas;
							return { width: t, height: e };
						}
						return { width: 300, height: 150 };
					}
					remove() {
						return !(!this.parent || !this.parent.removeChild) && (this.parent.removeChild(this), !0);
					}
					connect(t, e) {
						Object.defineProperty(this, 'parent', { value: t, writable: !1, configurable: !0 }),
							Object.defineProperty(this, 'zOrder', { value: e, writable: !1, configurable: !0 });
					}
					disconnect() {
						delete this.parent, delete this.zOrder;
					}
					dispatchPointerEvent(t) {
						this.postMessage({
							type: 'event',
							event: {
								cancelBubble: t.cancelBubble,
								bubbles: t.bubbles,
								detail: t.detail,
								identifier: t.identifier,
								layerX: t.layerX,
								layerY: t.layerY,
								originalX: t.originalX,
								originalY: t.originalY,
								type: t.type,
								x: t.x,
								y: t.y,
							},
						});
					}
				}),
				(e.a = a);
		},
		function (t, e, r) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 });
			var n = f(r(64)),
				i = f(r(96)),
				o = f(r(100)),
				s = f(r(80)),
				a = f(r(104)),
				u = f(r(105)),
				l = f(r(106)),
				c = r(200);
			function f(t) {
				return t && t.__esModule ? t : { default: t };
			}
			var h = (0, c.createNowTime)(),
				d = { originTime: 0, playbackRate: 1 },
				p = (0, l.default)('timeMark'),
				g = (0, l.default)('playbackRate'),
				m = (0, l.default)('timers'),
				v = (0, l.default)('originTime'),
				y = (0, l.default)('setTimer'),
				b = (0, l.default)('parent'),
				x = (function () {
					function t(e, r) {
						(0, a.default)(this, t),
							e instanceof t && ((r = e), (e = {})),
							(e = (0, s.default)({}, d, e)),
							r && (this[b] = r);
						var n = e.nowtime || h;
						if (r)
							Object.defineProperty(this, 'globalTime', {
								get: function () {
									return r.currentTime;
								},
							});
						else {
							var i = n();
							Object.defineProperty(this, 'globalTime', {
								get: function () {
									return n() - i;
								},
							});
						}
						(this[p] = [
							{
								globalTime: this.globalTime,
								localTime: -e.originTime,
								entropy: -e.originTime,
								playbackRate: e.playbackRate,
								globalEntropy: 0,
							},
						]),
							this[b] && (this[p][0].globalEntropy = this[b].entropy),
							(this[v] = e.originTime),
							(this[g] = e.playbackRate),
							(this[m] = new o.default());
					}
					return (
						(0, u.default)(t, [
							{
								key: 'markTime',
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
										e = t.time,
										r = void 0 === e ? this.currentTime : e,
										n = t.entropy,
										i = void 0 === n ? this.entropy : n,
										o = t.playbackRate,
										s = void 0 === o ? this.playbackRate : o,
										a = {
											globalTime: this.globalTime,
											localTime: r,
											entropy: i,
											playbackRate: s,
											globalEntropy: this.globalEntropy,
										};
									this[p].push(a);
								},
							},
							{
								key: 'fork',
								value: function (e) {
									return new t(e, this);
								},
							},
							{
								key: 'seekGlobalTime',
								value: function (t) {
									var e = this.seekTimeMark(t),
										r = this[p][e],
										n = r.entropy,
										i = r.playbackRate;
									return r.globalTime + (t - n) / Math.abs(i);
								},
							},
							{
								key: 'seekLocalTime',
								value: function (t) {
									var e = this.seekTimeMark(t),
										r = this[p][e],
										n = r.localTime,
										i = r.entropy;
									return r.playbackRate > 0 ? n + (t - i) : n - (t - i);
								},
							},
							{
								key: 'seekTimeMark',
								value: function (t) {
									var e = this[p],
										r = 0,
										n = e.length - 1;
									if (t <= e[r].entropy) return r;
									if (t >= e[n].entropy) return n;
									for (var i = Math.floor((r + n) / 2); i > r && i < n; ) {
										if (t === e[i].entropy) return i;
										t < e[i].entropy ? (n = i) : t > e[i].entropy && (r = i),
											(i = Math.floor((r + n) / 2));
									}
									return r;
								},
							},
							{
								key: 'updateTimers',
								value: function () {
									var t = this;
									[].concat((0, i.default)(this[m])).forEach(function (e) {
										var r = (0, n.default)(e, 2),
											i = r[0],
											o = r[1];
										t[y](o.handler, o.time, i);
									});
								},
							},
							{
								key: 'clearTimeout',
								value: (function (t) {
									function e(e) {
										return t.apply(this, arguments);
									}
									return (
										(e.toString = function () {
											return t.toString();
										}),
										e
									);
								})(function (t) {
									var e = this[m].get(t);
									e &&
										null != e.timerID &&
										(this[b] ? this[b].clearTimeout(e.timerID) : clearTimeout(e.timerID)),
										this[m].delete(t);
								}),
							},
							{
								key: 'clearInterval',
								value: function (t) {
									return this.clearTimeout(t);
								},
							},
							{
								key: 'clear',
								value: function () {
									var t = this,
										e = this[m];
									[].concat((0, i.default)(e.keys())).forEach(function (e) {
										t.clearTimeout(e);
									});
								},
							},
							{
								key: 'setTimeout',
								value: function (t) {
									var e =
										arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { delay: 0 };
									return this[y](t, e);
								},
							},
							{
								key: 'setInterval',
								value: function (t) {
									var e =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: { delay: 0 },
										r = this,
										n = this[y](function i() {
											r[y](i, e, n), t();
										}, e);
									return n;
								},
							},
							{
								key: y,
								value: function (t, e) {
									var r = this,
										n =
											arguments.length > 2 && void 0 !== arguments[2]
												? arguments[2]
												: (0, l.default)('timerID');
									e = (0, c.formatDelay)(e);
									var i = this[m].get(n),
										o = void 0,
										s = null,
										a = void 0,
										u = void 0;
									i
										? (this.clearTimeout(n),
										  (o = e.isEntropy
												? (e.delay - (this.entropy - i.startEntropy)) /
												  Math.abs(this.playbackRate)
												: (e.delay - (this.currentTime - i.startTime)) / this.playbackRate),
										  (a = i.startTime),
										  (u = i.startEntropy))
										: ((o =
												e.delay /
												(e.isEntropy ? Math.abs(this.playbackRate) : this.playbackRate)),
										  (a = this.currentTime),
										  (u = this.entropy));
									var f = this[b],
										h = f ? f.setTimeout.bind(f) : setTimeout,
										d = e.heading;
									return (
										!f && !1 === d && o < 0 && (o = 1 / 0),
										(isFinite(o) || f) &&
											((o = Math.ceil(o)),
											h !== setTimeout && (o = { delay: o, heading: d }),
											(s = h(function () {
												r[m].delete(n), t();
											}, o))),
										this[m].set(n, {
											timerID: s,
											handler: t,
											time: e,
											startTime: a,
											startEntropy: u,
										}),
										n
									);
								},
							},
							{
								key: 'parent',
								get: function () {
									return this[b];
								},
							},
							{
								key: 'lastTimeMark',
								get: function () {
									return this[p][this[p].length - 1];
								},
							},
							{
								key: 'currentTime',
								get: function () {
									var t = this.lastTimeMark,
										e = t.localTime,
										r = t.globalTime;
									return e + (this.globalTime - r) * this.playbackRate;
								},
								set: function (t) {
									var e = this,
										r = this.currentTime,
										o = t,
										s = this[m];
									this.markTime({ time: t }),
										[].concat((0, i.default)(s)).forEach(function (t) {
											var i = (0, n.default)(t, 2),
												a = i[0],
												u = i[1];
											if (s.has(a)) {
												var l = u.time,
													c = l.isEntropy,
													f = l.delay,
													h = l.heading,
													d = u.handler,
													p = u.startTime;
												if (c) 0 === f && (d(), e.clearTimeout(a));
												else {
													var g = p + f;
													(0 === f ||
														(!1 !== h && (o - r) * f <= 0) ||
														(r <= g && g <= o) ||
														(r >= g && g >= o)) &&
														(d(), e.clearTimeout(a));
												}
											}
										}),
										this.updateTimers();
								},
							},
							{
								key: 'entropy',
								get: function () {
									var t = this.lastTimeMark,
										e = t.entropy,
										r = t.globalEntropy;
									return e + Math.abs((this.globalEntropy - r) * this.playbackRate);
								},
								set: function (t) {
									if (this.entropy > t) {
										var e = this.seekTimeMark(t);
										this[p].length = e + 1;
									}
									this.markTime({ entropy: t }), this.updateTimers();
								},
							},
							{
								key: 'globalEntropy',
								get: function () {
									return this[b] ? this[b].entropy : this.globalTime;
								},
							},
							{
								key: 'playbackRate',
								get: function () {
									return this[g];
								},
								set: function (t) {
									t !== this.playbackRate &&
										(this.markTime({ playbackRate: t }), (this[g] = t), this.updateTimers());
								},
							},
							{
								key: 'paused',
								get: function () {
									if (0 === this.playbackRate) return !0;
									for (var t = this.parent; t; ) {
										if (0 === t.playbackRate) return !0;
										t = t.parent;
									}
									return !1;
								},
							},
						]),
						t
					);
				})();
			e.default = x;
		},
		function (t, e) {
			t.exports = function (t, e) {
				return { value: e, done: !!t };
			};
		},
		function (t, e, r) {
			t.exports =
				!r(13) &&
				!r(31)(function () {
					return (
						7 !=
						Object.defineProperty(r(68)('div'), 'a', {
							get: function () {
								return 7;
							},
						}).a
					);
				});
		},
		function (t, e, r) {
			t.exports = r(26);
		},
		function (t, e, r) {
			var n = r(32),
				i = r(30),
				o = r(161)(!1),
				s = r(72)('IE_PROTO');
			t.exports = function (t, e) {
				var r,
					a = i(t),
					u = 0,
					l = [];
				for (r in a) r != s && n(a, r) && l.push(r);
				for (; e.length > u; ) n(a, (r = e[u++])) && (~o(l, r) || l.push(r));
				return l;
			};
		},
		function (t, e, r) {
			var n = r(8).document;
			t.exports = n && n.documentElement;
		},
		function (t, e, r) {
			'use strict';
			e.__esModule = !0;
			var n,
				i = r(169),
				o = (n = i) && n.__esModule ? n : { default: n };
			e.default = function (t) {
				if (Array.isArray(t)) {
					for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
					return r;
				}
				return (0, o.default)(t);
			};
		},
		function (t, e, r) {
			var n = r(23);
			t.exports = function (t, e, r, i) {
				try {
					return i ? e(n(r)[0], r[1]) : e(r);
				} catch (e) {
					var o = t.return;
					throw (void 0 !== o && n(o.call(t)), e);
				}
			};
		},
		function (t, e, r) {
			var n = r(34),
				i = r(9)('iterator'),
				o = Array.prototype;
			t.exports = function (t) {
				return void 0 !== t && (n.Array === t || o[i] === t);
			};
		},
		function (t, e, r) {
			var n = r(9)('iterator'),
				i = !1;
			try {
				var o = [7][n]();
				(o.return = function () {
					i = !0;
				}),
					Array.from(o, function () {
						throw 2;
					});
			} catch (t) {}
			t.exports = function (t, e) {
				if (!e && !i) return !1;
				var r = !1;
				try {
					var o = [7],
						s = o[n]();
					(s.next = function () {
						return { done: (r = !0) };
					}),
						(o[n] = function () {
							return s;
						}),
						t(o);
				} catch (t) {}
				return r;
			};
		},
		function (t, e, r) {
			t.exports = { default: r(173), __esModule: !0 };
		},
		function (t, e, r) {
			'use strict';
			var n = r(8),
				i = r(6),
				o = r(15),
				s = r(13),
				a = r(9)('species');
			t.exports = function (t) {
				var e = 'function' == typeof i[t] ? i[t] : n[t];
				s &&
					e &&
					!e[a] &&
					o.f(e, a, {
						configurable: !0,
						get: function () {
							return this;
						},
					});
			};
		},
		function (t, e, r) {
			var n = r(16);
			t.exports = function (t, e) {
				if (!n(t) || t._t !== e) throw TypeError('Incompatible receiver, ' + e + ' required!');
				return t;
			};
		},
		function (t, e, r) {
			var n = r(39);
			t.exports =
				Array.isArray ||
				function (t) {
					return 'Array' == n(t);
				};
		},
		function (t, e, r) {
			'use strict';
			(e.__esModule = !0),
				(e.default = function (t, e) {
					if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
				});
		},
		function (t, e, r) {
			'use strict';
			e.__esModule = !0;
			var n,
				i = r(190),
				o = (n = i) && n.__esModule ? n : { default: n };
			e.default = (function () {
				function t(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							'value' in n && (n.writable = !0),
							(0, o.default)(t, n.key, n);
					}
				}
				return function (e, r, n) {
					return r && t(e.prototype, r), n && t(e, n), e;
				};
			})();
		},
		function (t, e, r) {
			t.exports = { default: r(193), __esModule: !0 };
		},
		function (t, e, r) {
			e.f = r(9);
		},
		function (t, e, r) {
			var n = r(94),
				i = r(74).concat('length', 'prototype');
			e.f =
				Object.getOwnPropertyNames ||
				function (t) {
					return n(t, i);
				};
		},
		function (t, e, r) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }),
				(e.default = {
					default: function (t, e, r, n, i) {
						return 'number' == typeof t && 'number' == typeof e
							? t + ((r - n) / (i - n)) * (e - t)
							: r - n > i - r
							? e
							: t;
					},
				});
		},
		function (t, e, r) {
			t.exports = { default: r(203), __esModule: !0 };
		},
		function (t, e, r) {
			var n = r(23),
				i = r(41),
				o = r(9)('species');
			t.exports = function (t, e) {
				var r,
					s = n(t).constructor;
				return void 0 === s || null == (r = n(s)[o]) ? e : i(r);
			};
		},
		function (t, e, r) {
			var n,
				i,
				o,
				s = r(25),
				a = r(205),
				u = r(95),
				l = r(68),
				c = r(8),
				f = c.process,
				h = c.setImmediate,
				d = c.clearImmediate,
				p = c.MessageChannel,
				g = c.Dispatch,
				m = 0,
				v = {},
				y = function () {
					var t = +this;
					if (v.hasOwnProperty(t)) {
						var e = v[t];
						delete v[t], e();
					}
				},
				b = function (t) {
					y.call(t.data);
				};
			(h && d) ||
				((h = function (t) {
					for (var e = [], r = 1; arguments.length > r; ) e.push(arguments[r++]);
					return (
						(v[++m] = function () {
							a('function' == typeof t ? t : Function(t), e);
						}),
						n(m),
						m
					);
				}),
				(d = function (t) {
					delete v[t];
				}),
				'process' == r(39)(f)
					? (n = function (t) {
							f.nextTick(s(y, t, 1));
					  })
					: g && g.now
					? (n = function (t) {
							g.now(s(y, t, 1));
					  })
					: p
					? ((o = (i = new p()).port2), (i.port1.onmessage = b), (n = s(o.postMessage, o, 1)))
					: c.addEventListener && 'function' == typeof postMessage && !c.importScripts
					? ((n = function (t) {
							c.postMessage(t + '', '*');
					  }),
					  c.addEventListener('message', b, !1))
					: (n =
							'onreadystatechange' in l('script')
								? function (t) {
										u.appendChild(l('script')).onreadystatechange = function () {
											u.removeChild(this), y.call(t);
										};
								  }
								: function (t) {
										setTimeout(s(y, t, 1), 0);
								  })),
				(t.exports = { set: h, clear: d });
		},
		function (t, e) {
			t.exports = function (t) {
				try {
					return { e: !1, v: t() };
				} catch (t) {
					return { e: !0, v: t };
				}
			};
		},
		function (t, e, r) {
			var n = r(23),
				i = r(16),
				o = r(84);
			t.exports = function (t, e) {
				if ((n(t), i(e) && e.constructor === t)) return e;
				var r = o.f(t);
				return (0, r.resolve)(e), r.promise;
			};
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'a', function () {
				return l;
			});
			var n = r(3),
				i = r(11),
				o = r(24),
				s = r(2);
			r(0).glMatrix.setMatrixArrayType(Array);
			const a = Symbol('amount'),
				u = Symbol('meshCloud');
			class l extends o.a {
				constructor(t, e = 1) {
					super(), (this.meshNode = t), t.connect(this), (this[a] = e), (this[u] = null);
				}
				get meshCloud() {
					const t = this.meshNode,
						e = this[a];
					return !this[u] && t.mesh && (this[u] = new n.d(t.mesh, e)), this[u];
				}
				get isVisible() {
					return !!this.meshNode && this.meshNode.isVisible;
				}
				get amount() {
					return this[a];
				}
				set amount(t) {
					(this[a] = t), this[u] && (this[u].amount = t);
				}
				brightness(t, e) {
					this.meshCloud && (this.meshCloud.brightness(t, e), this.forceUpdate());
				}
				contrast(t, e) {
					this.meshCloud && (this.meshCloud.contrast(t, e), this.forceUpdate());
				}
				delete(t) {
					this.meshCloud && (this.meshCloud.delete(t), this[a]--, this.forceUpdate());
				}
				draw(t = []) {
					if ((super.draw(t), this.meshCloud)) {
						if (this.program) {
							this.meshCloud.setProgram(this.program);
							const t = this.shaderAttrs;
							t &&
								Object.entries(t).forEach(([t, e]) => {
									this.meshCloud.mesh.setAttribute(t, e);
								});
							const e = this.uniforms;
							if (this.uniforms) {
								const t = {};
								Object.entries(e).forEach(([e, r]) => {
									'function' == typeof r && (r = r(this, e)), (t[e] = r);
								}),
									this.meshCloud.mesh.setUniforms(t);
							}
						}
						this.meshNode.textureImage && Object(i.d)(this.meshNode, this.meshNode.mesh),
							t.push(this.meshCloud);
					}
					return t;
				}
				getTransform(t) {
					if (this.meshCloud) return this.meshCloud.getTransform(t);
				}
				grayscale(t, e) {
					this.meshCloud && (this.meshCloud.grayscale(t, e), this.forceUpdate());
				}
				hueRotate(t, e) {
					this.meshCloud && (this.meshCloud.hueRotate(t, e), this.forceUpdate());
				}
				invert(t, e) {
					this.meshCloud && (this.meshCloud.invert(t, e), this.forceUpdate());
				}
				isPointCollision(t, e) {
					if (!this.meshCloud) return !1;
					const r = this.attributes.pointerEvents;
					if ('none' === r) return !1;
					if ('all' !== r && !this.isVisible) return !1;
					let n = 'both';
					'visibleFill' === r && (n = 'fill'), 'visibleStroke' === r && (n = 'stroke');
					for (let r = 0; r < this[a]; r++) if (!this.meshCloud.isPointCollision(r, [t, e], n)) return !1;
					return !0;
				}
				setOpacity(t, e) {
					this.meshCloud && (this.meshCloud.opacity(t, e), this.forceUpdate());
				}
				rotate(t, e, [r, n] = [0, 0]) {
					const i = (Math.PI * e) / 180;
					if (this.meshCloud) {
						const { x: e, y: o } = this.meshNode.attributes;
						this.meshCloud.rotate(t, i, [r + e, n + o]), this.forceUpdate();
					}
				}
				saturate(t, e) {
					this.meshCloud && (this.meshCloud.saturate(t, e), this.forceUpdate());
				}
				scale(t, [e, r = e], [n, i] = [0, 0]) {
					if (this.meshCloud) {
						const { x: o, y: s } = this.meshNode.attributes,
							a = 1e-5;
						Math.abs(e) < a && (e = 1 / e > 0 ? a : -a),
							Math.abs(r) < a && (r = 1 / r > 0 ? a : -a),
							this.meshCloud.scale(t, [e, r], [n + o, i + s]),
							this.forceUpdate();
					}
				}
				setColorTransform(t, e) {
					this.meshCloud && (this.meshCloud.setColorTransform(t, e), this.forceUpdate());
				}
				setFillColor(t, e) {
					this.meshCloud &&
						(Array.isArray(e) && (((e = [...e])[0] /= 255), (e[1] /= 255), (e[2] /= 255)),
						this.meshCloud.setFillColor(t, e),
						this.forceUpdate());
				}
				sepia(t, e) {
					this.meshCloud && (this.meshCloud.sepia(t, e), this.forceUpdate());
				}
				setResolution({ width: t, height: e }) {
					super.setResolution({ width: t, height: e }), this.meshNode.setResolution({ width: t, height: e });
				}
				setStrokeColor(t, e) {
					this.meshCloud &&
						(Array.isArray(e) && (((e = [...e])[0] /= 255), (e[1] /= 255), (e[2] /= 255)),
						this.meshCloud.setStrokeColor(t, e),
						this.forceUpdate());
				}
				setTransform(t, e) {
					this.meshCloud && (this.meshCloud.setTransform(t, e), this.forceUpdate());
				}
				skew(t, [e, r = e], [n, i] = [0, 0]) {
					if (this.meshCloud) {
						const { x: o, y: s } = this.meshNode.attributes;
						this.meshCloud.skew(t, [e, r], [n + o, i + s]), this.forceUpdate();
					}
				}
				transform(t, e) {
					this.meshCloud && (this.meshCloud.transform(t, e), this.forceUpdate());
				}
				transformColor(t, e) {
					this.meshCloud && (this.meshCloud.transformColor(t, e), this.forceUpdate());
				}
				translate(t, [e, r]) {
					this.meshCloud && (this.meshCloud.translate(t, [e, r]), this.forceUpdate());
				}
				updateMesh() {
					this[u] && ((this[u].mesh = this.meshNode.mesh), this.forceUpdate());
				}
			}
			s.a.registerNode(l, 'cloud');
		},
		function (t, e, r) {
			'use strict';
			var n =
				(this && this.__importDefault) ||
				function (t) {
					return t && t.__esModule ? t : { default: t };
				};
			Object.defineProperty(e, '__esModule', { value: !0 });
			var i = n(r(117)),
				o = n(r(225)),
				s = n(r(118)),
				a = n(r(226));
			function u(t) {
				var e = Object.keys(t).join('|'),
					r = c(t),
					n = new RegExp('&(?:' + (e += '|#[xX][\\da-fA-F]+|#\\d+') + ');', 'g');
				return function (t) {
					return String(t).replace(n, r);
				};
			}
			(e.decodeXML = u(s.default)), (e.decodeHTMLStrict = u(i.default));
			var l = function (t, e) {
				return t < e ? 1 : -1;
			};
			function c(t) {
				return function (e) {
					return '#' === e.charAt(1)
						? 'X' === e.charAt(2) || 'x' === e.charAt(2)
							? a.default(parseInt(e.substr(3), 16))
							: a.default(parseInt(e.substr(2), 10))
						: t[e.slice(1, -1)];
				};
			}
			e.decodeHTML = (function () {
				for (
					var t = Object.keys(o.default).sort(l), e = Object.keys(i.default).sort(l), r = 0, n = 0;
					r < e.length;
					r++
				)
					t[n] === e[r] ? ((e[r] += ';?'), n++) : (e[r] += ';');
				var s = new RegExp('&(?:' + e.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)', 'g'),
					a = c(i.default);
				function u(t) {
					return ';' !== t.substr(-1) && (t += ';'), a(t);
				}
				return function (t) {
					return String(t).replace(s, u);
				};
			})();
		},
		function (t) {
			t.exports = JSON.parse(
				'{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}',
			);
		},
		function (t) {
			t.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}');
		},
		function (t, e, r) {
			'use strict';
			var n =
				(this && this.__importDefault) ||
				function (t) {
					return t && t.__esModule ? t : { default: t };
				};
			Object.defineProperty(e, '__esModule', { value: !0 });
			var i = u(n(r(118)).default),
				o = l(i);
			e.encodeXML = p(i, o);
			var s = u(n(r(117)).default),
				a = l(s);
			function u(t) {
				return Object.keys(t)
					.sort()
					.reduce(function (e, r) {
						return (e[t[r]] = '&' + r + ';'), e;
					}, {});
			}
			function l(t) {
				var e = [],
					r = [];
				return (
					Object.keys(t).forEach(function (t) {
						return 1 === t.length ? e.push('\\' + t) : r.push(t);
					}),
					r.unshift('[' + e.join('') + ']'),
					new RegExp(r.join('|'), 'g')
				);
			}
			e.encodeHTML = p(s, a);
			var c = /[^\0-\x7F]/g,
				f = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
			function h(t) {
				return '&#x' + t.charCodeAt(0).toString(16).toUpperCase() + ';';
			}
			function d(t, e) {
				return (
					'&#x' +
					(1024 * (t.charCodeAt(0) - 55296) + t.charCodeAt(1) - 56320 + 65536).toString(16).toUpperCase() +
					';'
				);
			}
			function p(t, e) {
				return function (r) {
					return r
						.replace(e, function (e) {
							return t[e];
						})
						.replace(f, d)
						.replace(c, h);
				};
			}
			var g = l(i);
			e.escape = function (t) {
				return t.replace(g, h).replace(f, d).replace(c, h);
			};
		},
		function (t) {
			t.exports = JSON.parse(
				'{"universal":50,"tag":30,"attribute":1,"pseudo":0,"descendant":-1,"child":-1,"parent":-1,"sibling":-1,"adjacent":-1}',
			);
		},
		function (t, e, r) {
			var n = r(47).falseFunc,
				i = /[-[\]{}()*+?.,\\^$|#\s]/g,
				o = {
					__proto__: null,
					equals: function (t, e, r) {
						var n = e.name,
							i = e.value,
							o = r.adapter;
						return e.ignoreCase
							? ((i = i.toLowerCase()),
							  function (e) {
									var r = o.getAttributeValue(e, n);
									return null != r && r.toLowerCase() === i && t(e);
							  })
							: function (e) {
									return o.getAttributeValue(e, n) === i && t(e);
							  };
					},
					hyphen: function (t, e, r) {
						var n = e.name,
							i = e.value,
							o = i.length,
							s = r.adapter;
						return e.ignoreCase
							? ((i = i.toLowerCase()),
							  function (e) {
									var r = s.getAttributeValue(e, n);
									return (
										null != r &&
										(r.length === o || '-' === r.charAt(o)) &&
										r.substr(0, o).toLowerCase() === i &&
										t(e)
									);
							  })
							: function (e) {
									var r = s.getAttributeValue(e, n);
									return (
										null != r &&
										r.substr(0, o) === i &&
										(r.length === o || '-' === r.charAt(o)) &&
										t(e)
									);
							  };
					},
					element: function (t, e, r) {
						var o = e.name,
							s = e.value,
							a = r.adapter;
						if (/\s/.test(s)) return n;
						var u = '(?:^|\\s)' + (s = s.replace(i, '\\$&')) + '(?:$|\\s)',
							l = e.ignoreCase ? 'i' : '',
							c = new RegExp(u, l);
						return function (e) {
							var r = a.getAttributeValue(e, o);
							return null != r && c.test(r) && t(e);
						};
					},
					exists: function (t, e, r) {
						var n = e.name,
							i = r.adapter;
						return function (e) {
							return i.hasAttrib(e, n) && t(e);
						};
					},
					start: function (t, e, r) {
						var i = e.name,
							o = e.value,
							s = o.length,
							a = r.adapter;
						return 0 === s
							? n
							: e.ignoreCase
							? ((o = o.toLowerCase()),
							  function (e) {
									var r = a.getAttributeValue(e, i);
									return null != r && r.substr(0, s).toLowerCase() === o && t(e);
							  })
							: function (e) {
									var r = a.getAttributeValue(e, i);
									return null != r && r.substr(0, s) === o && t(e);
							  };
					},
					end: function (t, e, r) {
						var i = e.name,
							o = e.value,
							s = -o.length,
							a = r.adapter;
						return 0 === s
							? n
							: e.ignoreCase
							? ((o = o.toLowerCase()),
							  function (e) {
									var r = a.getAttributeValue(e, i);
									return null != r && r.substr(s).toLowerCase() === o && t(e);
							  })
							: function (e) {
									var r = a.getAttributeValue(e, i);
									return null != r && r.substr(s) === o && t(e);
							  };
					},
					any: function (t, e, r) {
						var o = e.name,
							s = e.value,
							a = r.adapter;
						if ('' === s) return n;
						if (e.ignoreCase) {
							var u = new RegExp(s.replace(i, '\\$&'), 'i');
							return function (e) {
								var r = a.getAttributeValue(e, o);
								return null != r && u.test(r) && t(e);
							};
						}
						return function (e) {
							var r = a.getAttributeValue(e, o);
							return null != r && r.indexOf(s) >= 0 && t(e);
						};
					},
					not: function (t, e, r) {
						var n = e.name,
							i = e.value,
							o = r.adapter;
						return '' === i
							? function (e) {
									return !!o.getAttributeValue(e, n) && t(e);
							  }
							: e.ignoreCase
							? ((i = i.toLowerCase()),
							  function (e) {
									var r = o.getAttributeValue(e, n);
									return null != r && r.toLowerCase() !== i && t(e);
							  })
							: function (e) {
									return o.getAttributeValue(e, n) !== i && t(e);
							  };
					},
				};
			t.exports = {
				compile: function (t, e, r) {
					if (r && r.strict && (e.ignoreCase || 'not' === e.action))
						throw new Error('Unsupported attribute selector');
					return o[e.action](t, e, r);
				},
				rules: o,
			};
		},
		function (t, e, r) {
			var n = r(238),
				i = r(47),
				o = r(121),
				s = i.trueFunc,
				a = i.falseFunc,
				u = o.rules.equals;
			function l(t, e) {
				var r = { name: t, value: e };
				return function (t, e, n) {
					return u(t, r, n);
				};
			}
			function c(t, e) {
				return function (r) {
					return !!e.getParent(r) && t(r);
				};
			}
			var f = {
				contains: function (t, e, r) {
					var n = r.adapter;
					return function (r) {
						return t(r) && n.getText(r).indexOf(e) >= 0;
					};
				},
				icontains: function (t, e, r) {
					var n = e.toLowerCase(),
						i = r.adapter;
					return function (e) {
						return t(e) && i.getText(e).toLowerCase().indexOf(n) >= 0;
					};
				},
				'nth-child': function (t, e, r) {
					var i = n(e),
						o = r.adapter;
					return i === a
						? i
						: i === s
						? c(t, o)
						: function (e) {
								for (var r = o.getSiblings(e), n = 0, s = 0; n < r.length; n++)
									if (o.isTag(r[n])) {
										if (r[n] === e) break;
										s++;
									}
								return i(s) && t(e);
						  };
				},
				'nth-last-child': function (t, e, r) {
					var i = n(e),
						o = r.adapter;
					return i === a
						? i
						: i === s
						? c(t, o)
						: function (e) {
								for (var r = o.getSiblings(e), n = 0, s = r.length - 1; s >= 0; s--)
									if (o.isTag(r[s])) {
										if (r[s] === e) break;
										n++;
									}
								return i(n) && t(e);
						  };
				},
				'nth-of-type': function (t, e, r) {
					var i = n(e),
						o = r.adapter;
					return i === a
						? i
						: i === s
						? c(t, o)
						: function (e) {
								for (var r = o.getSiblings(e), n = 0, s = 0; s < r.length; s++)
									if (o.isTag(r[s])) {
										if (r[s] === e) break;
										o.getName(r[s]) === o.getName(e) && n++;
									}
								return i(n) && t(e);
						  };
				},
				'nth-last-of-type': function (t, e, r) {
					var i = n(e),
						o = r.adapter;
					return i === a
						? i
						: i === s
						? c(t, o)
						: function (e) {
								for (var r = o.getSiblings(e), n = 0, s = r.length - 1; s >= 0; s--)
									if (o.isTag(r[s])) {
										if (r[s] === e) break;
										o.getName(r[s]) === o.getName(e) && n++;
									}
								return i(n) && t(e);
						  };
				},
				root: function (t, e, r) {
					var n = r.adapter;
					return function (e) {
						return !n.getParent(e) && t(e);
					};
				},
				scope: function (t, e, r, n) {
					var i = r.adapter;
					if (!n || 0 === n.length) return f.root(t, e, r);
					return 1 === n.length
						? function (e) {
								return (
									(r = n[0]),
									(o = e),
									('function' == typeof i.equals ? i.equals(r, o) : r === o) && t(e)
								);
								var r, o;
						  }
						: function (e) {
								return n.indexOf(e) >= 0 && t(e);
						  };
				},
				checkbox: l('type', 'checkbox'),
				file: l('type', 'file'),
				password: l('type', 'password'),
				radio: l('type', 'radio'),
				reset: l('type', 'reset'),
				image: l('type', 'image'),
				submit: l('type', 'submit'),
			};
			var h = {
				empty: function (t, e) {
					return !e.getChildren(t).some(function (t) {
						return e.isTag(t) || 'text' === t.type;
					});
				},
				'first-child': function (t, e) {
					return (
						(function (t, e) {
							for (var r = 0; t && r < t.length; r++) if (e.isTag(t[r])) return t[r];
						})(e.getSiblings(t), e) === t
					);
				},
				'last-child': function (t, e) {
					for (var r = e.getSiblings(t), n = r.length - 1; n >= 0; n--) {
						if (r[n] === t) return !0;
						if (e.isTag(r[n])) break;
					}
					return !1;
				},
				'first-of-type': function (t, e) {
					for (var r = e.getSiblings(t), n = 0; n < r.length; n++)
						if (e.isTag(r[n])) {
							if (r[n] === t) return !0;
							if (e.getName(r[n]) === e.getName(t)) break;
						}
					return !1;
				},
				'last-of-type': function (t, e) {
					for (var r = e.getSiblings(t), n = r.length - 1; n >= 0; n--)
						if (e.isTag(r[n])) {
							if (r[n] === t) return !0;
							if (e.getName(r[n]) === e.getName(t)) break;
						}
					return !1;
				},
				'only-of-type': function (t, e) {
					for (var r = e.getSiblings(t), n = 0, i = r.length; n < i; n++)
						if (e.isTag(r[n])) {
							if (r[n] === t) continue;
							if (e.getName(r[n]) === e.getName(t)) return !1;
						}
					return !0;
				},
				'only-child': function (t, e) {
					for (var r = e.getSiblings(t), n = 0; n < r.length; n++) if (e.isTag(r[n]) && r[n] !== t) return !1;
					return !0;
				},
				link: function (t, e) {
					return e.hasAttrib(t, 'href');
				},
				visited: a,
				selected: function (t, e) {
					if (e.hasAttrib(t, 'selected')) return !0;
					if ('option' !== e.getName(t)) return !1;
					var r = e.getParent(t);
					if (!r || 'select' !== e.getName(r) || e.hasAttrib(r, 'multiple')) return !1;
					for (var n = e.getChildren(r), i = !1, o = 0; o < n.length; o++)
						if (e.isTag(n[o]))
							if (n[o] === t) i = !0;
							else {
								if (!i) return !1;
								if (e.hasAttrib(n[o], 'selected')) return !1;
							}
					return i;
				},
				disabled: function (t, e) {
					return e.hasAttrib(t, 'disabled');
				},
				enabled: function (t, e) {
					return !e.hasAttrib(t, 'disabled');
				},
				checked: function (t, e) {
					return e.hasAttrib(t, 'checked') || h.selected(t, e);
				},
				required: function (t, e) {
					return e.hasAttrib(t, 'required');
				},
				optional: function (t, e) {
					return !e.hasAttrib(t, 'required');
				},
				parent: function (t, e) {
					return !h.empty(t, e);
				},
				header: d(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
				button: function (t, e) {
					var r = e.getName(t);
					return 'button' === r || ('input' === r && 'button' === e.getAttributeValue(t, 'type'));
				},
				input: d(['input', 'textarea', 'select', 'button']),
				text: function (t, e) {
					var r;
					return (
						'input' === e.getName(t) &&
						(!(r = e.getAttributeValue(t, 'type')) || 'text' === r.toLowerCase())
					);
				},
			};
			function d(t) {
				if ('undefined' != typeof Set) {
					var e = new Set(t);
					return function (t, r) {
						return e.has(r.getName(t));
					};
				}
				return function (e, r) {
					return t.indexOf(r.getName(e)) >= 0;
				};
			}
			var p = /^(?:(?:nth|last|first|only)-(?:child|of-type)|root|empty|(?:en|dis)abled|checked|not)$/;
			t.exports = {
				compile: function (t, e, r, n) {
					var i = e.name,
						o = e.data,
						u = r.adapter;
					if (r && r.strict && !p.test(i)) throw new Error(':' + i + " isn't part of CSS3");
					if ('function' == typeof f[i]) return f[i](t, o, r, n);
					if ('function' == typeof h[i]) {
						var l = h[i];
						return (
							(function (t, e, r) {
								if (null === r) {
									if (t.length > 2 && 'scope' !== e)
										throw new Error('pseudo-selector :' + e + ' requires an argument');
								} else if (2 === t.length)
									throw new Error('pseudo-selector :' + e + " doesn't have any arguments");
							})(l, i, o),
							l === a
								? l
								: t === s
								? function (t) {
										return l(t, u, o);
								  }
								: function (e) {
										return l(e, u, o) && t(e);
								  }
						);
					}
					throw new Error('unmatched pseudo-class :' + i);
				},
				filters: f,
				pseudos: h,
			};
		},
		function (t, e, r) {
			'use strict';
			var n = r(17),
				i = r(2),
				o = r(19),
				s = r(1);
			r(0).glMatrix.setMatrixArrayType(Array);
			const a = Symbol.for('spritejs_setAttributeDefault'),
				u = Symbol.for('spritejs_setAttribute'),
				l = Symbol.for('spritejs_getAttribute'),
				c = Symbol.for('spritejs_declareAlias');
			function f(t) {
				const { x: e, y: r, width: n, height: i } = t;
				return `M${e} ${r}L${e + n} ${r}L${e + n} ${r + i}L${e} ${r + i}Z`;
			}
			class h extends o.a {
				constructor(t) {
					super(t), this[a]({ width: 0, height: 0 }), this[c]('size');
				}
				get d() {
					return this[l]('d');
				}
				set d(t) {}
				get width() {
					return this[l]('width');
				}
				set width(t) {
					if (((t = Object(s.d)(t)), this[u]('width', t))) {
						const t = f(this);
						this[u]('d', t);
					}
				}
				get height() {
					return this[l]('height');
				}
				set height(t) {
					if (((t = Object(s.d)(t)), this[u]('height', t))) {
						const t = f(this);
						this[u]('d', t);
					}
				}
				get size() {
					return [this.width, this.height];
				}
				set size(t) {
					(t = Object(s.c)(t)), Array.isArray(t) || (t = [t, t]), (this.width = t[0]), (this.height = t[1]);
				}
			}
			r.d(e, 'a', function () {
				return d;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
			class d extends n.a {
				get isVisible() {
					const { width: t, height: e } = this.attributes;
					return t > 0 && e > 0 && super.isVisible;
				}
			}
			var p, g, m;
			(m = h),
				(g = 'Attr') in (p = d)
					? Object.defineProperty(p, g, { value: m, enumerable: !0, configurable: !0, writable: !0 })
					: (p[g] = m),
				i.a.registerNode(d, 'rect');
		},
		function (t, e, r) {
			'use strict';
			var n = r(18),
				i = r(2),
				o = r(20),
				s = r(1);
			r(0).glMatrix.setMatrixArrayType(Array);
			const a = Symbol.for('spritejs_setAttributeDefault'),
				u = Symbol.for('spritejs_setAttribute'),
				l = Symbol.for('spritejs_getAttribute');
			function c(t) {
				const [e, r] = t.sides;
				let n = t.angle % 360;
				return n < 0 && (n += 360), (n = (Math.PI * n) / 180), [0, 0, e, 0, r * Math.cos(n), r * Math.sin(n)];
			}
			class f extends o.a {
				constructor(t) {
					super(t), this[a]({ sides: [0, 0], angle: 60, closeType: 'normal' });
				}
				get points() {
					return super.points;
				}
				set points(t) {}
				get sides() {
					return this[l]('sides');
				}
				set sides(t) {
					if ((null == (t = Object(s.c)(t, !0)) || Array.isArray(t) || (t = [t, t]), this[u]('sides', t))) {
						const t = c(this);
						super.points = t;
					}
				}
				get angle() {
					return this[l]('angle');
				}
				set angle(t) {
					if (((t = Object(s.d)(t)), this[u]('angle', t))) {
						const t = c(this);
						super.points = t;
					}
				}
			}
			r.d(e, 'a', function () {
				return h;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
			class h extends n.a {
				get isVisible() {
					const { sides: t } = this.attributes;
					return t[0] > 0 && t[1] > 0 && super.isVisible;
				}
			}
			var d, p, g;
			(g = f),
				(p = 'Attr') in (d = h)
					? Object.defineProperty(d, p, { value: g, enumerable: !0, configurable: !0, writable: !0 })
					: (d[p] = g),
				i.a.registerNode(h, 'triangle');
		},
		function (t, e, r) {
			'use strict';
			var n = r(18),
				i = r(2),
				o = r(20),
				s = r(1);
			r(0).glMatrix.setMatrixArrayType(Array);
			const a = Symbol.for('spritejs_setAttributeDefault'),
				u = Symbol.for('spritejs_setAttribute'),
				l = Symbol.for('spritejs_getAttribute');
			function c(t) {
				const [e, r] = t.sides;
				let n = t.angle % 360;
				n < 0 && (n += 360), (n = (Math.PI * n) / 180);
				const i = r * Math.cos(n),
					o = r * Math.sin(n);
				return [0, 0, e, 0, i + e, o, i, o];
			}
			class f extends o.a {
				constructor(t) {
					super(t), this[a]({ sides: [0, 0], angle: 90, closeType: 'normal' });
				}
				get points() {
					return super.points;
				}
				set points(t) {}
				get sides() {
					return this[l]('sides');
				}
				set sides(t) {
					if ((null == (t = Object(s.c)(t, !0)) || Array.isArray(t) || (t = [t, t]), this[u]('sides', t))) {
						const t = c(this);
						super.points = t;
					}
				}
				get angle() {
					return this[l]('angle');
				}
				set angle(t) {
					if (((t = Object(s.d)(t)), this[u]('angle', t))) {
						const t = c(this);
						super.points = t;
					}
				}
			}
			r.d(e, 'a', function () {
				return h;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
			class h extends n.a {
				get isVisible() {
					const { sides: t } = this.attributes;
					return t[0] > 0 && t[1] > 0 && super.isVisible;
				}
			}
			var d, p, g;
			(g = f),
				(p = 'Attr') in (d = h)
					? Object.defineProperty(d, p, { value: g, enumerable: !0, configurable: !0, writable: !0 })
					: (d[p] = g),
				i.a.registerNode(h, 'parallel');
		},
		function (t, e, r) {
			'use strict';
			var n = r(18),
				i = r(2),
				o = r(20),
				s = r(1);
			r(0).glMatrix.setMatrixArrayType(Array);
			const a = Symbol.for('spritejs_setAttributeDefault'),
				u = Symbol.for('spritejs_setAttribute'),
				l = Symbol.for('spritejs_getAttribute');
			function c(t) {
				const { edges: e, radius: r, offsetAngle: n } = t,
					i = (Math.PI * n) / 180 - 0.5 * Math.PI;
				if (e < 3 || r <= 0) return [];
				const o = [];
				for (let t = 0; t < e; t++) {
					const n = (2 * t * Math.PI) / e + i,
						s = r * Math.cos(n),
						a = r * Math.sin(n);
					o.push(s, a);
				}
				return o;
			}
			class f extends o.a {
				constructor(t) {
					super(t), this[a]({ edges: 3, radius: 0, offsetAngle: 0, closeType: 'normal' });
				}
				get points() {
					return super.points;
				}
				set points(t) {}
				get edges() {
					return this[l]('edges');
				}
				set edges(t) {
					if (((t = Object(s.d)(t)), this[u]('edges', t))) {
						const t = c(this);
						super.points = t;
					}
				}
				get radius() {
					return this[l]('radius');
				}
				set radius(t) {
					if (((t = Object(s.d)(t)), this[u]('radius', t))) {
						const t = c(this);
						super.points = t;
					}
				}
				get offsetAngle() {
					return this[l]('offsetAngle');
				}
				set offsetAngle(t) {
					if (((t = Object(s.d)(t)), this[u]('offsetAngle', t))) {
						const t = c(this);
						super.points = t;
					}
				}
			}
			r.d(e, 'a', function () {
				return h;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
			class h extends n.a {}
			var d, p, g;
			(g = f),
				(p = 'Attr') in (d = h)
					? Object.defineProperty(d, p, { value: g, enumerable: !0, configurable: !0, writable: !0 })
					: (d[p] = g),
				i.a.registerNode(h, 'regular');
		},
		function (t, e, r) {
			'use strict';
			var n = r(18),
				i = r(2),
				o = r(20),
				s = r(1);
			r(0).glMatrix.setMatrixArrayType(Array);
			const a = Symbol.for('spritejs_setAttributeDefault'),
				u = Symbol.for('spritejs_setAttribute'),
				l = Symbol.for('spritejs_getAttribute');
			function c(t) {
				const { angles: e, innerRadius: r, outerRadius: n, offsetAngle: i } = t,
					o = (Math.PI * i) / 180 - 0.5 * Math.PI;
				if (e < 3 || r <= 0 || n <= 0) return [];
				const s = [];
				for (let t = 0; t < 2 * e; t++) {
					const i = (t * Math.PI) / e + o,
						a = t % 2 ? r : n,
						u = a * Math.cos(i),
						l = a * Math.sin(i);
					s.push(u, l);
				}
				return s;
			}
			class f extends o.a {
				constructor(t) {
					super(t),
						this[a]({ angles: 5, innerRadius: 0, outerRadius: 0, offsetAngle: 0, closeType: 'normal' });
				}
				get points() {
					return super.points;
				}
				set points(t) {}
				get angles() {
					return this[l]('angles');
				}
				set angles(t) {
					if (((t = Object(s.d)(t)), this[u]('angles', t))) {
						const t = c(this);
						super.points = t;
					}
				}
				get innerRadius() {
					return this[l]('innerRadius');
				}
				set innerRadius(t) {
					if (((t = Object(s.d)(t)), this[u]('innerRadius', t))) {
						const t = c(this);
						super.points = t;
					}
				}
				get outerRadius() {
					return this[l]('outerRadius');
				}
				set outerRadius(t) {
					if (((t = Object(s.d)(t)), this[u]('outerRadius', t))) {
						const t = c(this);
						super.points = t;
					}
				}
				get radius() {
					return [this.innerRadius, this.outerRadius];
				}
				set radius(t) {
					(t = Object(s.c)(t, !0)),
						Array.isArray(t) || (t = [t, t]),
						(this.innerRadius = t[0]),
						(this.outerRadius = t[1]);
				}
				get offsetAngle() {
					return this[l]('offsetAngle');
				}
				set offsetAngle(t) {
					if (((t = Object(s.d)(t)), this[u]('offsetAngle', t))) {
						const t = c(this);
						super.points = t;
					}
				}
			}
			r.d(e, 'a', function () {
				return h;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
			class h extends n.a {}
			var d, p, g;
			(g = f),
				(p = 'Attr') in (d = h)
					? Object.defineProperty(d, p, { value: g, enumerable: !0, configurable: !0, writable: !0 })
					: (d[p] = g),
				i.a.registerNode(h, 'star');
		},
		function (t, e, r) {
			'use strict';
			var n,
				i,
				o,
				s = r(57),
				a = r(2),
				u = r(61),
				l = r(1);
			r(0).glMatrix.setMatrixArrayType(Array);
			class c extends u.a {
				get radius() {
					return super.radiusX;
				}
				set radius(t) {
					(t = Object(l.d)(t)), (super.radiusX = t), (super.radiusY = t);
				}
			}
			r.d(e, 'a', function () {
				return f;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
			class f extends s.a {}
			(o = c),
				(i = 'Attr') in (n = f)
					? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
					: (n[i] = o),
				a.a.registerNode(f, 'arc');
		},
		function (t, e, r) {
			'use strict';
			var n = r(17),
				i = r(2),
				o = r(3),
				s = r(19),
				a = r(1);
			r(0).glMatrix.setMatrixArrayType(Array);
			const u = Symbol.for('spritejs_setAttributeDefault'),
				l = Symbol.for('spritejs_setAttribute'),
				c = Symbol.for('spritejs_getAttribute'),
				f = Symbol.for('spritejs_declareAlias');
			function h(t) {
				let { innerRadius: e, outerRadius: r, startAngle: n, endAngle: i } = t;
				const s = new o.b();
				if (
					((n = (Math.PI * n) / 180),
					(i = (Math.PI * i) / 180),
					e > r && ([e, r] = [r, e]),
					e <= 0 && s.moveTo(0, 0),
					s.arc(0, 0, r, n, i, !1),
					e > 0)
				) {
					const t = 2 * Math.PI;
					i < n && (i = n + t + ((i - n) % t)), i - n >= t && (i = n + t - 1e-6), s.arc(0, 0, e, i, n, !0);
				}
				return s.closePath(), s.path.reduce((t, e) => t + e.join(' '), '');
			}
			class d extends s.a {
				constructor(t) {
					super(t),
						this[u]({ innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 360 }),
						this[f]('radius', 'angle');
				}
				get d() {
					return this[c]('d');
				}
				set d(t) {}
				get innerRadius() {
					return this[c]('innerRadius');
				}
				set innerRadius(t) {
					if (((t = Object(a.d)(t)), this[l]('innerRadius', t))) {
						const t = h(this);
						this[l]('d', t);
					}
				}
				get outerRadius() {
					return this[c]('outerRadius');
				}
				set outerRadius(t) {
					if (((t = Object(a.d)(t)), this[l]('outerRadius', t))) {
						const t = h(this);
						this[l]('d', t);
					}
				}
				get radius() {
					return [this.innerRadius, this.outerRadius];
				}
				set radius(t) {
					(t = Object(a.c)(t, !0)),
						Array.isArray(t) || (t = [t, t]),
						(this.innerRadius = t[0]),
						(this.outerRadius = t[1]);
				}
				get startAngle() {
					return this[c]('startAngle');
				}
				set startAngle(t) {
					if (((t = Object(a.d)(t)), this[l]('startAngle', t))) {
						const t = h(this);
						this[l]('d', t);
					}
				}
				get endAngle() {
					return this[c]('endAngle');
				}
				set endAngle(t) {
					if (((t = Object(a.d)(t)), this[l]('endAngle', t))) {
						const t = h(this);
						this[l]('d', t);
					}
				}
				get angle() {
					return [this.startAngle, this.endAngle];
				}
				set angle(t) {
					(t = Object(a.c)(t)),
						Array.isArray(t) || (t = [t, t]),
						(this.startAngle = t[0]),
						(this.endAngle = t[1]);
				}
			}
			r.d(e, 'a', function () {
				return p;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
			class p extends n.a {
				get isVisible() {
					const { innerRadius: t, outerRadius: e, startAngle: r, endAngle: n } = this.attributes;
					return (t > 0 || e > 0) && r !== n && super.isVisible;
				}
			}
			var g, m, v;
			(v = d),
				(m = 'Attr') in (g = p)
					? Object.defineProperty(g, m, { value: v, enumerable: !0, configurable: !0, writable: !0 })
					: (g[m] = v),
				i.a.registerNode(p, 'ring');
		},
		function (t, e, r) {
			'use strict';
			var n = r(3),
				i = r(11),
				o = r(27),
				s = r(1),
				a = r(5),
				u = r(29);
			r(0).glMatrix.setMatrixArrayType(Array);
			const l = Symbol.for('spritejs_setAttributeDefault'),
				c = Symbol.for('spritejs_setAttribute'),
				f = Symbol.for('spritejs_getAttribute'),
				h = Symbol.for('spritejs_declareAlias');
			class d extends u.a {
				constructor(t) {
					super(t),
						this[l]({
							text: '',
							fontSize: 16,
							fontFamily: 'Helvetica,Arial,sans-serif',
							fontStyle: 'normal',
							fontVariant: 'normal',
							fontWeight: 'normal',
							fontStretch: 'normal',
							lineHeight: '',
							textAlign: 'left',
							strokeColor: void 0,
							strokeWidth: 1,
							fillColor: void 0,
							verticalAlign: 'middle',
						}),
						this[h]('font');
				}
				get text() {
					return this[f]('text') || ' ';
				}
				set text(t) {
					this[c]('text', t);
				}
				get fontSize() {
					return this[f]('fontSize');
				}
				set fontSize(t) {
					this[c]('fontSize', Object(s.d)(t));
				}
				get fontFamily() {
					return this[f]('fontFamily');
				}
				set fontFamily(t) {
					this[c]('fontFamily', t);
				}
				get fontStyle() {
					return this[f]('fontStyle');
				}
				set fontStyle(t) {
					this[c]('fontStyle', t);
				}
				get fontVariant() {
					return this[f]('fontVariant');
				}
				set fontVariant(t) {
					this[c]('fontVariant', t);
				}
				get fontWeight() {
					return this[f]('fontWeight');
				}
				set fontWeight(t) {
					this[c]('fontWeight', t);
				}
				get fontStretch() {
					return this[f]('fontStretch');
				}
				set fontStretch(t) {
					this[c]('fontStretch', t);
				}
				get lineHeight() {
					return this[f]('lineHeight') || this.fontSize;
				}
				set lineHeight(t) {
					this[c]('lineHeight', Object(s.d)(t));
				}
				get textAlign() {
					return this[f]('textAlign');
				}
				set textAlign(t) {
					this[c]('textAlign', t);
				}
				get strokeColor() {
					return this[f]('strokeColor');
				}
				set strokeColor(t) {
					this[c]('strokeColor', Object(a.c)(t));
				}
				get strokeWidth() {
					return this[f]('strokeWidth');
				}
				set strokeWidth(t) {
					this[c]('strokeWidth', Object(s.d)(t));
				}
				get verticalAlign() {
					return this[f]('verticalAlign');
				}
				set verticalAlign(t) {
					this[c]('verticalAlign', t);
				}
				get fillColor() {
					return this[f]('fillColor');
				}
				set fillColor(t) {
					this[c]('fillColor', Object(a.c)(t));
				}
				get font() {
					const {
						fontStyle: t,
						fontVariant: e,
						fontWeight: r,
						fontStretch: n,
						fontSize: i,
						lineHeight: o,
						fontFamily: s,
					} = this;
					return `${t} ${e} ${r} ${n} ${i}px/${o}px ${s}`;
				}
				set font(t) {
					if (null == t)
						(this.fontStyle = null),
							(this.fontVariant = null),
							(this.fontWeight = null),
							(this.fontStretch = null),
							(this.fontSize = null),
							(this.lineHeight = null),
							(this.fontFamily = null);
					else {
						const e = Object(n.f)(t);
						(this.fontStyle = e.style),
							(this.fontVariant = e.variant),
							(this.fontWeight = e.weight),
							(this.fontStretch = e.stretch),
							(this.fontSize = Object(s.d)(`${e.size}${e.unit}`)),
							e.lineHeight && (this.lineHeight = e.pxLineHeight),
							(this.fontFamily = e.family);
					}
				}
			}
			var p = r(2);
			r.d(e, 'a', function () {
				return b;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
			const g = Symbol('textImage'),
				m = Symbol('textImageTask'),
				v = Symbol('textureContext'),
				y = Symbol('updateTextureRect');
			class b extends o.a {
				constructor(t = {}) {
					'string' == typeof t && (t = { text: t }), super(t);
				}
				get contentSize() {
					let [t, e] = super.contentSize;
					const { width: r, height: n } = this.attributes;
					if (null == r || null == n) {
						const i = this[g];
						i && (null == r && (t = i.rect[2]), null == n && (e = i.rect[3]));
					}
					return [t, e];
				}
				get text() {
					return this.attributes.text;
				}
				set text(t) {
					this.attributes.text = t;
				}
				draw(t) {
					super.draw(t);
					const e = this.mesh;
					if (e) {
						const t = this[g];
						if (t) {
							let r = e.texture;
							if (
								(!r || (this[v] && this[v] !== this.renderer) || r.image !== t.image
									? ((r = Object(i.b)(t.image, this.renderer)), (this[y] = !0))
									: (r = e.uniforms.u_texSampler),
								this[y])
							) {
								const [n, i] = t.rect.slice(2),
									[o, s] = this.contentSize,
									a = this.attributes.textAlign,
									u = this.attributes.verticalAlign;
								let l = 0;
								'center' === a ? (l = (o - n) / 2) : ('right' !== a && 'end' !== a) || (l = o - n);
								const c = this.attributes.fontSize,
									f = this.attributes.lineHeight;
								let h = 0;
								'top' === u ? (h = (c - f) / 2) : 'bottom' === u && (h = (f - c) / 2);
								const { paddingLeft: d, paddingTop: p } = this.attributes,
									{ borderWidth: g } = this.attributes;
								(l += d + g), (h += p + g);
								const { anchorX: m, anchorY: b } = this.attributes;
								(l -= this.clientSize[0] * m),
									(h -= this.clientSize[1] * b),
									e.setTexture(r, { rect: [l, h, n, i] }),
									(this[y] = !1),
									(this[v] = this.renderer);
							}
						}
					}
					return t;
				}
				onPropertyChange(t, e, r) {
					'text' === t ||
					'fontSize' === t ||
					'fontFamily' === t ||
					'fontStyle' === t ||
					'fontVariant' === t ||
					'fontWeight' === t ||
					'fontStretch' === t ||
					'lineHeight' === t ||
					'strokeColor' === t ||
					'fillColor' === t ||
					'strokeWidth' === t
						? this.updateText()
						: (('textAlign' !== t && 'verticalAlign' !== t) || (this[y] = !0),
						  super.onPropertyChange(t, e, r));
				}
				updateContours() {
					super.updateContours(), (this[y] = !0);
				}
				updateText() {
					this[m] ||
						(this[m] = Promise.resolve().then(() => {
							this[m] = null;
							const { text: t, font: e, fillColor: r, strokeColor: i, strokeWidth: o } = this.attributes;
							return (
								(this[g] = n.a.createText(t, {
									font: e,
									fillColor: r,
									strokeColor: i,
									strokeWidth: o,
									parseFont: n.f,
								})),
								this.updateContours(),
								this.forceUpdate(),
								this[g]
							);
						}));
				}
			}
			var x, w, M;
			(M = d),
				(w = 'Attr') in (x = b)
					? Object.defineProperty(x, w, { value: M, enumerable: !0, configurable: !0, writable: !0 })
					: (x[w] = M),
				p.a.registerNode(b, 'label');
		},
		function (t, e, r) {
			'use strict';
			var n = r(56),
				i = r(60);
			r(0).glMatrix.setMatrixArrayType(Array);
			const o = Symbol.for('spritejs_getAttribute'),
				s = Symbol.for('spritejs_setAttribute'),
				a = Symbol.for('spritejs_setAttributeDefault');
			class u extends i.a {
				constructor(t) {
					super(t), this[a]({ passEvents: !1, flexible: !1 });
				}
				get texture() {
					return this[o]('texture');
				}
				set texture(t) {}
				get passEvents() {
					return this[o]('passEvents');
				}
				set passEvents(t) {
					return this[s]('passEvents', t);
				}
				get flexible() {
					return this[o]('flexible');
				}
				set flexible(t) {
					return this[s]('flexible', t);
				}
			}
			var l = r(2),
				c = r(12),
				f = r(1);
			function h(t, e) {
				if (null == t) return {};
				var r,
					n,
					i = (function (t, e) {
						if (null == t) return {};
						var r,
							n,
							i = {},
							o = Object.keys(t);
						for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
						return i;
					})(t, e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					for (n = 0; n < o.length; n++)
						(r = o[n]),
							e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
				}
				return i;
			}
			r.d(e, 'a', function () {
				return y;
			}),
				r(0).glMatrix.setMatrixArrayType(Array);
			const d = 'http://www.w3.org/2000/svg',
				p = Symbol.for('spritejs_setAttribute'),
				g = Symbol('root'),
				m = Symbol('task');
			function v(t, e = !0) {
				const r = t[g];
				if (r && r.children[0])
					if (e && t.attributes.flexible) {
						const e = t.svg;
						if (!e.hasAttribute('data-original-width')) {
							let t = e.getAttribute('width');
							t = t ? Object(f.b)(t) : 300;
							let r = e.getAttribute('height');
							(r = r ? Object(f.b)(r) : 150),
								e.hasAttribute('viewBox') ||
									e.setAttribute('viewBox', `0 0 ${Math.round(t)} ${Math.round(r)}`),
								e.setAttribute('data-original-width', t),
								e.setAttribute('data-original-height', r);
						}
						let r = t.attributes.width || Number(e.getAttribute('data-original-width')),
							n = t.attributes.height || Number(e.getAttribute('data-original-height'));
						const i = t.attributes.scale[0],
							o = t.layer ? t.layer.displayRatio : 1;
						if (
							((r *= i * o),
							(n *= i * o),
							e.setAttribute('width', r),
							e.setAttribute('height', n),
							r && n && t.textureImage)
						) {
							const e = t.textureImage.width,
								i = t.textureImage.height,
								o = t.clientSize;
							t.attributes.textureRect = [0, 0, Math.round((o[0] * e) / r), Math.round((o[1] * i) / n)];
						}
					} else
						t[m] ||
							(t[m] = Promise.resolve().then(() => {
								delete t[m];
								const e = r.innerHTML,
									n = new Blob([e], { type: 'image/svg+xml' }),
									i = URL.createObjectURL(n),
									o = new Image();
								(o.onload = function () {
									o.width && o.height
										? (t.attributes[p]('texture', o),
										  t.attributes.flexible && (t.attributes.textureRect = null))
										: t.attributes[p]('texture', null);
								}),
									(o.src = i);
							}));
			}
			class y extends n.a {
				constructor(t = {}) {
					'string' == typeof t && (t = { svgText: t });
					let { svgText: e } = t;
					if ((super(h(t, ['svgText'])), (this[g] = document.createElement('div')), e)) {
						this[g].innerHTML = e;
						const t = this[g].children[0];
						t
							? t.setAttribute('xmlns', d)
							: (fetch(e)
									.then(t => t.text())
									.then(t => {
										(this[g].innerHTML = t),
											(this.observer && !this.attributes.flexible) || v(this);
									}),
							  (e = null));
					}
					if (!e) {
						const t = document.createElementNS(d, 'svg');
						t.setAttribute('xmlns', d), this[g].appendChild(t);
					}
					if ((v(this), 'function' == typeof MutationObserver)) {
						const t = new MutationObserver(t => {
							v(this, !1);
						});
						t.observe(this[g], { attributes: !0, subtree: !0, characterData: !0, childList: !0 }),
							(this.observer = t);
					}
				}
				get children() {
					return [this.svg];
				}
				get childNodes() {
					return [this.svg];
				}
				get svg() {
					return this[g] ? this[g].children[0] : null;
				}
				setResolution({ width: t, height: e }) {
					super.setResolution({ width: t, height: e }), v(this);
				}
				dispatchPointerEvent(t) {
					const e = super.dispatchPointerEvent(t);
					if (e && this.attributes.passEvents && 'function' == typeof MouseEvent) {
						const { x: e, y: r } = t;
						let [n, i] = this.getOffsetPosition(e, r);
						const o = t.originalEvent,
							s = this.attributes.anchor,
							a = this.clientSize;
						(n = (n + s[0] * a[0]) / 2), (i = (i + s[1] * a[1]) / 2);
						const u = t.type;
						if (u === o.type) {
							let e = null;
							if (o instanceof MouseEvent)
								e = new MouseEvent(u, {
									screenX: n,
									screenY: i,
									clientX: n,
									clientY: i,
									bubbles: o.bubbles,
									button: o.button,
									buttons: o.buttons,
									cancelBubble: o.cancelBubble,
									cancelable: o.cancelable,
									currentTarget: o.currentTarget,
									fromElement: o.fromElement,
									relatedTarget: o.relatedTarget,
									returnValue: o.returnValue,
									srcElement: o.srcElement,
									target: o.target,
									toElement: o.toElement,
									which: o.witch,
								});
							else if (o instanceof TouchEvent) {
								let r = null;
								const s = o.changedTouches || [o];
								for (let e = 0; e < s.length; e++) {
									const n = s[e];
									if (t.identifier === n.identifier) {
										r = n;
										break;
									}
								}
								if (r) {
									const t = new Touch({
										identifier: r.identifier,
										target: r.target,
										clientX: n,
										clientY: i,
										screenX: n,
										screenY: i,
										pageX: n,
										pageY: i,
										radiusX: r.radiusX,
										radiusY: r.radiusY,
										rotationAngle: r.rotationAngle,
										force: r.force,
									});
									e = new TouchEvent(u, {
										cancelable: o.cancelable,
										bubbles: o.bubbles,
										composed: o.composed,
										touches: [t],
										targetTouches: [t],
										changedTouches: [t],
									});
								}
							} else e = o;
							e && this.svg.dispatchEvent(e);
						}
					}
					return e;
				}
				getElementById(t) {
					return Object(c.a)(`#${t}`, this);
				}
				getElementsByClassName(t) {
					return Object(c.b)(`.${t}`, this);
				}
				getElementsByName(t) {
					return Object(c.b)(`[name="${t}"]`, this);
				}
				getElementsByTagName(t) {
					return Object(c.b)(t, this);
				}
				querySelector(t) {
					return Object(c.a)(t, this);
				}
				querySelectorAll(t) {
					return Object(c.b)(t, this);
				}
				onPropertyChange(t, e, r) {
					super.onPropertyChange(t, e, r),
						'flexible' === t && v(this),
						!this.attributes.flexible ||
							('width' !== t && 'height' !== t && 'scale' !== t && 'transform' !== t) ||
							v(this);
				}
			}
			var b, x, w;
			(w = u),
				(x = 'Attr') in (b = y)
					? Object.defineProperty(b, x, { value: w, enumerable: !0, configurable: !0, writable: !0 })
					: (b[x] = w),
				l.a.registerNode(y, 'spritesvg');
		},
		function (t, e, r) {
			r(0).glMatrix.setMatrixArrayType(Array);
			var n = r(151),
				i = r(153);
			t.exports = function (t, e) {
				if (
					((e = e || {}),
					0 ===
						(t = t.filter(function (t) {
							return t.length > 2;
						})).length)
				)
					return { positions: [], cells: [] };
				'number' != typeof e.vertexSize && (e.vertexSize = t[0][0].length),
					(t = t.map(function (t) {
						return t.reduce(function (t, e) {
							return t.concat(e);
						});
					}));
				for (
					var r = n.tesselate(
							i(
								{
									contours: t,
									windingRule: n.WINDING_ODD,
									elementType: n.POLYGONS,
									polySize: 3,
									vertexSize: 2,
								},
								e,
							),
						),
						o = [],
						s = 0;
					s < r.vertices.length;
					s += e.vertexSize
				) {
					var a = r.vertices.slice(s, s + e.vertexSize);
					o.push(a);
				}
				var u = [];
				for (s = 0; s < r.elements.length; s += 3) {
					var l = r.elements[s],
						c = r.elements[s + 1],
						f = r.elements[s + 2];
					u.push([l, c, f]);
				}
				return { positions: o, cells: u };
			};
		},
		function (t, e, r) {
			'use strict';
			(function (e) {
				var n = r(134),
					i = r(135),
					o = r(136);
				t.exports = function (t) {
					var r,
						a,
						u = [],
						l = 1;
					if ('string' == typeof t)
						if (n[t]) (u = n[t].slice()), (a = 'rgb');
						else if ('transparent' === t) (l = 0), (a = 'rgb'), (u = [0, 0, 0]);
						else if (/^#[A-Fa-f0-9]+$/.test(t)) {
							var c = (d = t.slice(1)).length;
							(l = 1),
								c <= 4
									? ((u = [
											parseInt(d[0] + d[0], 16),
											parseInt(d[1] + d[1], 16),
											parseInt(d[2] + d[2], 16),
									  ]),
									  4 === c && (l = parseInt(d[3] + d[3], 16) / 255))
									: ((u = [
											parseInt(d[0] + d[1], 16),
											parseInt(d[2] + d[3], 16),
											parseInt(d[4] + d[5], 16),
									  ]),
									  8 === c && (l = parseInt(d[6] + d[7], 16) / 255)),
								u[0] || (u[0] = 0),
								u[1] || (u[1] = 0),
								u[2] || (u[2] = 0),
								(a = 'rgb');
						} else if (
							(r = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(
								t,
							))
						) {
							var f = r[1],
								h = 'rgb' === f,
								d = f.replace(/a$/, '');
							a = d;
							c = 'cmyk' === d ? 4 : 'gray' === d ? 1 : 3;
							(u = r[2]
								.trim()
								.split(/\s*,\s*/)
								.map(function (t, e) {
									if (/%$/.test(t))
										return e === c
											? parseFloat(t) / 100
											: 'rgb' === d
											? (255 * parseFloat(t)) / 100
											: parseFloat(t);
									if ('h' === d[e]) {
										if (/deg$/.test(t)) return parseFloat(t);
										if (void 0 !== s[t]) return s[t];
									}
									return parseFloat(t);
								})),
								f === d && u.push(1),
								(l = h ? 1 : void 0 === u[c] ? 1 : u[c]),
								(u = u.slice(0, c));
						} else
							t.length > 10 &&
								/[0-9](?:\s|\/)/.test(t) &&
								((u = t.match(/([0-9]+)/g).map(function (t) {
									return parseFloat(t);
								})),
								(a = t
									.match(/([a-z])/gi)
									.join('')
									.toLowerCase()));
					else if (isNaN(t))
						if (i(t)) {
							var p = o(t.r, t.red, t.R, null);
							null !== p
								? ((a = 'rgb'), (u = [p, o(t.g, t.green, t.G), o(t.b, t.blue, t.B)]))
								: ((a = 'hsl'),
								  (u = [
										o(t.h, t.hue, t.H),
										o(t.s, t.saturation, t.S),
										o(t.l, t.lightness, t.L, t.b, t.brightness),
								  ])),
								(l = o(t.a, t.alpha, t.opacity, 1)),
								null != t.opacity && (l /= 100);
						} else
							(Array.isArray(t) || (e.ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(t))) &&
								((u = [t[0], t[1], t[2]]), (a = 'rgb'), (l = 4 === t.length ? t[3] : 1));
					else (a = 'rgb'), (u = [t >>> 16, (65280 & t) >>> 8, 255 & t]);
					return { space: a, values: u, alpha: l };
				};
				var s = { red: 0, orange: 60, yellow: 120, green: 180, blue: 240, purple: 300 };
			}.call(this, r(63)));
		},
		function (t, e, r) {
			'use strict';
			t.exports = {
				aliceblue: [240, 248, 255],
				antiquewhite: [250, 235, 215],
				aqua: [0, 255, 255],
				aquamarine: [127, 255, 212],
				azure: [240, 255, 255],
				beige: [245, 245, 220],
				bisque: [255, 228, 196],
				black: [0, 0, 0],
				blanchedalmond: [255, 235, 205],
				blue: [0, 0, 255],
				blueviolet: [138, 43, 226],
				brown: [165, 42, 42],
				burlywood: [222, 184, 135],
				cadetblue: [95, 158, 160],
				chartreuse: [127, 255, 0],
				chocolate: [210, 105, 30],
				coral: [255, 127, 80],
				cornflowerblue: [100, 149, 237],
				cornsilk: [255, 248, 220],
				crimson: [220, 20, 60],
				cyan: [0, 255, 255],
				darkblue: [0, 0, 139],
				darkcyan: [0, 139, 139],
				darkgoldenrod: [184, 134, 11],
				darkgray: [169, 169, 169],
				darkgreen: [0, 100, 0],
				darkgrey: [169, 169, 169],
				darkkhaki: [189, 183, 107],
				darkmagenta: [139, 0, 139],
				darkolivegreen: [85, 107, 47],
				darkorange: [255, 140, 0],
				darkorchid: [153, 50, 204],
				darkred: [139, 0, 0],
				darksalmon: [233, 150, 122],
				darkseagreen: [143, 188, 143],
				darkslateblue: [72, 61, 139],
				darkslategray: [47, 79, 79],
				darkslategrey: [47, 79, 79],
				darkturquoise: [0, 206, 209],
				darkviolet: [148, 0, 211],
				deeppink: [255, 20, 147],
				deepskyblue: [0, 191, 255],
				dimgray: [105, 105, 105],
				dimgrey: [105, 105, 105],
				dodgerblue: [30, 144, 255],
				firebrick: [178, 34, 34],
				floralwhite: [255, 250, 240],
				forestgreen: [34, 139, 34],
				fuchsia: [255, 0, 255],
				gainsboro: [220, 220, 220],
				ghostwhite: [248, 248, 255],
				gold: [255, 215, 0],
				goldenrod: [218, 165, 32],
				gray: [128, 128, 128],
				green: [0, 128, 0],
				greenyellow: [173, 255, 47],
				grey: [128, 128, 128],
				honeydew: [240, 255, 240],
				hotpink: [255, 105, 180],
				indianred: [205, 92, 92],
				indigo: [75, 0, 130],
				ivory: [255, 255, 240],
				khaki: [240, 230, 140],
				lavender: [230, 230, 250],
				lavenderblush: [255, 240, 245],
				lawngreen: [124, 252, 0],
				lemonchiffon: [255, 250, 205],
				lightblue: [173, 216, 230],
				lightcoral: [240, 128, 128],
				lightcyan: [224, 255, 255],
				lightgoldenrodyellow: [250, 250, 210],
				lightgray: [211, 211, 211],
				lightgreen: [144, 238, 144],
				lightgrey: [211, 211, 211],
				lightpink: [255, 182, 193],
				lightsalmon: [255, 160, 122],
				lightseagreen: [32, 178, 170],
				lightskyblue: [135, 206, 250],
				lightslategray: [119, 136, 153],
				lightslategrey: [119, 136, 153],
				lightsteelblue: [176, 196, 222],
				lightyellow: [255, 255, 224],
				lime: [0, 255, 0],
				limegreen: [50, 205, 50],
				linen: [250, 240, 230],
				magenta: [255, 0, 255],
				maroon: [128, 0, 0],
				mediumaquamarine: [102, 205, 170],
				mediumblue: [0, 0, 205],
				mediumorchid: [186, 85, 211],
				mediumpurple: [147, 112, 219],
				mediumseagreen: [60, 179, 113],
				mediumslateblue: [123, 104, 238],
				mediumspringgreen: [0, 250, 154],
				mediumturquoise: [72, 209, 204],
				mediumvioletred: [199, 21, 133],
				midnightblue: [25, 25, 112],
				mintcream: [245, 255, 250],
				mistyrose: [255, 228, 225],
				moccasin: [255, 228, 181],
				navajowhite: [255, 222, 173],
				navy: [0, 0, 128],
				oldlace: [253, 245, 230],
				olive: [128, 128, 0],
				olivedrab: [107, 142, 35],
				orange: [255, 165, 0],
				orangered: [255, 69, 0],
				orchid: [218, 112, 214],
				palegoldenrod: [238, 232, 170],
				palegreen: [152, 251, 152],
				paleturquoise: [175, 238, 238],
				palevioletred: [219, 112, 147],
				papayawhip: [255, 239, 213],
				peachpuff: [255, 218, 185],
				peru: [205, 133, 63],
				pink: [255, 192, 203],
				plum: [221, 160, 221],
				powderblue: [176, 224, 230],
				purple: [128, 0, 128],
				rebeccapurple: [102, 51, 153],
				red: [255, 0, 0],
				rosybrown: [188, 143, 143],
				royalblue: [65, 105, 225],
				saddlebrown: [139, 69, 19],
				salmon: [250, 128, 114],
				sandybrown: [244, 164, 96],
				seagreen: [46, 139, 87],
				seashell: [255, 245, 238],
				sienna: [160, 82, 45],
				silver: [192, 192, 192],
				skyblue: [135, 206, 235],
				slateblue: [106, 90, 205],
				slategray: [112, 128, 144],
				slategrey: [112, 128, 144],
				snow: [255, 250, 250],
				springgreen: [0, 255, 127],
				steelblue: [70, 130, 180],
				tan: [210, 180, 140],
				teal: [0, 128, 128],
				thistle: [216, 191, 216],
				tomato: [255, 99, 71],
				turquoise: [64, 224, 208],
				violet: [238, 130, 238],
				wheat: [245, 222, 179],
				white: [255, 255, 255],
				whitesmoke: [245, 245, 245],
				yellow: [255, 255, 0],
				yellowgreen: [154, 205, 50],
			};
		},
		function (t, e, r) {
			'use strict';
			var n = Object.prototype.toString;
			t.exports = function (t) {
				var e;
				return (
					'[object Object]' === n.call(t) &&
					(null === (e = Object.getPrototypeOf(t)) || e === Object.getPrototypeOf({}))
				);
			};
		},
		function (t, e) {
			t.exports = function () {
				for (var t = 0; t < arguments.length; t++) if (void 0 !== arguments[t]) return arguments[t];
			};
		},
		function (t, e, r) {
			'use strict';
			var n = r(138);
			(t.exports = {
				name: 'hsl',
				min: [0, 0, 0],
				max: [360, 100, 100],
				channel: ['hue', 'saturation', 'lightness'],
				alias: ['HSL'],
				rgb: function (t) {
					var e,
						r,
						n,
						i,
						o,
						s = t[0] / 360,
						a = t[1] / 100,
						u = t[2] / 100;
					if (0 === a) return [(o = 255 * u), o, o];
					(e = 2 * u - (r = u < 0.5 ? u * (1 + a) : u + a - u * a)), (i = [0, 0, 0]);
					for (var l = 0; l < 3; l++)
						(n = s + (1 / 3) * -(l - 1)) < 0 ? n++ : n > 1 && n--,
							(o =
								6 * n < 1
									? e + 6 * (r - e) * n
									: 2 * n < 1
									? r
									: 3 * n < 2
									? e + (r - e) * (2 / 3 - n) * 6
									: e),
							(i[l] = 255 * o);
					return i;
				},
			}),
				(n.hsl = function (t) {
					var e,
						r,
						n = t[0] / 255,
						i = t[1] / 255,
						o = t[2] / 255,
						s = Math.min(n, i, o),
						a = Math.max(n, i, o),
						u = a - s;
					return (
						a === s
							? (e = 0)
							: n === a
							? (e = (i - o) / u)
							: i === a
							? (e = 2 + (o - n) / u)
							: o === a && (e = 4 + (n - i) / u),
						(e = Math.min(60 * e, 360)) < 0 && (e += 360),
						(r = (s + a) / 2),
						[e, 100 * (a === s ? 0 : r <= 0.5 ? u / (a + s) : u / (2 - a - s)), 100 * r]
					);
				});
		},
		function (t, e, r) {
			'use strict';
			t.exports = {
				name: 'rgb',
				min: [0, 0, 0],
				max: [255, 255, 255],
				channel: ['red', 'green', 'blue'],
				alias: ['RGB'],
			};
		},
		function (t, e) {
			t.exports = function (t, e, r) {
				return e < r ? (t < e ? e : t > r ? r : t) : t < r ? r : t > e ? e : t;
			};
		},
		function (t, e, r) {
			t.exports = r(141)();
		},
		function (t, e) {
			function r(t) {
				return [t[0], t[1]];
			}
			function n(t, e) {
				return [t, e];
			}
			t.exports = function (t) {
				var e = 'number' == typeof (t = t || {}).recursion ? t.recursion : 8,
					i = 'number' == typeof t.epsilon ? t.epsilon : 1.1920929e-7,
					o = 'number' == typeof t.pathEpsilon ? t.pathEpsilon : 1,
					s = 'number' == typeof t.angleEpsilon ? t.angleEpsilon : 0.01,
					a = t.angleTolerance || 0,
					u = t.cuspLimit || 0;
				return function (t, l, c, f, h, d) {
					d || (d = []);
					var p = o / (h = 'number' == typeof h ? h : 1);
					return (
						(function (t, o, l, c, f, h) {
							f.push(r(t));
							var d = t[0],
								p = t[1],
								g = o[0],
								m = o[1],
								v = l[0],
								y = l[1],
								b = c[0],
								x = c[1];
							(function t(r, o, l, c, f, h, d, p, g, m, v) {
								if (v > e) return;
								var y = Math.PI,
									b = (r + l) / 2,
									x = (o + c) / 2,
									w = (l + f) / 2,
									M = (c + h) / 2,
									S = (f + d) / 2,
									A = (h + p) / 2,
									_ = (b + w) / 2,
									T = (x + M) / 2,
									E = (w + S) / 2,
									O = (M + A) / 2,
									C = (_ + E) / 2,
									R = (T + O) / 2;
								if (v > 0) {
									var L,
										k,
										D = d - r,
										j = p - o,
										P = Math.abs((l - d) * j - (c - p) * D),
										q = Math.abs((f - d) * j - (h - p) * D);
									if (P > i && q > i) {
										if ((P + q) * (P + q) <= m * (D * D + j * j)) {
											if (a < s) return void g.push(n(C, R));
											var I = Math.atan2(h - c, f - l);
											if (
												((L = Math.abs(I - Math.atan2(c - o, l - r))),
												(k = Math.abs(Math.atan2(p - h, d - f) - I)),
												L >= y && (L = 2 * y - L),
												k >= y && (k = 2 * y - k),
												L + k < a)
											)
												return void g.push(n(C, R));
											if (0 !== u) {
												if (L > u) return void g.push(n(l, c));
												if (k > u) return void g.push(n(f, h));
											}
										}
									} else if (P > i) {
										if (P * P <= m * (D * D + j * j)) {
											if (a < s) return void g.push(n(C, R));
											if (
												((L = Math.abs(Math.atan2(h - c, f - l) - Math.atan2(c - o, l - r))) >=
													y && (L = 2 * y - L),
												L < a)
											)
												return g.push(n(l, c)), void g.push(n(f, h));
											if (0 !== u && L > u) return void g.push(n(l, c));
										}
									} else if (q > i) {
										if (q * q <= m * (D * D + j * j)) {
											if (a < s) return void g.push(n(C, R));
											if (
												((L = Math.abs(Math.atan2(p - h, d - f) - Math.atan2(h - c, f - l))) >=
													y && (L = 2 * y - L),
												L < a)
											)
												return g.push(n(l, c)), void g.push(n(f, h));
											if (0 !== u && L > u) return void g.push(n(f, h));
										}
									} else if ((D = C - (r + d) / 2) * D + (j = R - (o + p) / 2) * j <= m)
										return void g.push(n(C, R));
								}
								t(r, o, b, x, _, T, C, R, g, m, v + 1), t(C, R, E, O, S, A, d, p, g, m, v + 1);
							})(d, p, g, m, v, y, b, x, f, h, 0),
								f.push(r(c));
						})(t, l, c, f, d, (p *= p)),
						d
					);
				};
			};
		},
		function (t, e, r) {
			var n = r(143),
				i = r(144);
			(t.exports = function (t, e) {
				return (t = n(t, e)), (t = i(t, e));
			}),
				(t.exports.radialDistance = n),
				(t.exports.douglasPeucker = i);
		},
		function (t, e) {
			t.exports = function (t, e) {
				if (t.length <= 1) return t;
				for (
					var r,
						n,
						i,
						o,
						s,
						a = (e = 'number' == typeof e ? e : 1) * e,
						u = t[0],
						l = [u],
						c = 1,
						f = t.length;
					c < f;
					c++
				)
					(r = t[c]),
						(i = u),
						(o = void 0),
						(s = void 0),
						(o = (n = r)[0] - i[0]),
						(s = n[1] - i[1]),
						o * o + s * s > a && (l.push(r), (u = r));
				return u !== r && l.push(r), l;
			};
		},
		function (t, e) {
			function r(t, e, r) {
				var n = e[0],
					i = e[1],
					o = r[0] - n,
					s = r[1] - i;
				if (0 !== o || 0 !== s) {
					var a = ((t[0] - n) * o + (t[1] - i) * s) / (o * o + s * s);
					a > 1 ? ((n = r[0]), (i = r[1])) : a > 0 && ((n += o * a), (i += s * a));
				}
				return (o = t[0] - n) * o + (s = t[1] - i) * s;
			}
			t.exports = function (t, e) {
				if (t.length <= 1) return t;
				var n = (e = 'number' == typeof e ? e : 1) * e,
					i = t.length - 1,
					o = [t[0]];
				return (
					(function t(e, n, i, o, s) {
						for (var a, u = o, l = n + 1; l < i; l++) {
							var c = r(e[l], e[n], e[i]);
							c > u && ((a = l), (u = c));
						}
						u > o && (a - n > 1 && t(e, n, a, o, s), s.push(e[a]), i - a > 1 && t(e, a, i, o, s));
					})(t, 0, i, n, o),
					o.push(t[i]),
					o
				);
			};
		},
		function (t, e, r) {
			var n = r(146),
				i = r(147),
				o = r(148),
				s = r(149),
				a = r(150),
				u = [0, 0];
			(t.exports.computeMiter = function (t, e, r, s, l) {
				return n(t, r, s), o(t, t), i(e, -t[1], t[0]), i(u, -r[1], r[0]), l / a(e, u);
			}),
				(t.exports.normal = function (t, e) {
					return i(t, -e[1], e[0]), t;
				}),
				(t.exports.direction = function (t, e, r) {
					return s(t, e, r), o(t, t), t;
				});
		},
		function (t, e) {
			t.exports = function (t, e, r) {
				return (t[0] = e[0] + r[0]), (t[1] = e[1] + r[1]), t;
			};
		},
		function (t, e) {
			t.exports = function (t, e, r) {
				return (t[0] = e), (t[1] = r), t;
			};
		},
		function (t, e) {
			t.exports = function (t, e) {
				var r = e[0],
					n = e[1],
					i = r * r + n * n;
				i > 0 && ((i = 1 / Math.sqrt(i)), (t[0] = e[0] * i), (t[1] = e[1] * i));
				return t;
			};
		},
		function (t, e) {
			t.exports = function (t, e, r) {
				return (t[0] = e[0] - r[0]), (t[1] = e[1] - r[1]), t;
			};
		},
		function (t, e) {
			t.exports = function (t, e) {
				return t[0] * e[0] + t[1] * e[1];
			};
		},
		function (t, e, r) {
			t.exports = r(152);
		},
		function (t, e, r) {
			'use strict';
			var n = {};
			(t.exports = n),
				(n.WINDING_ODD = 0),
				(n.WINDING_NONZERO = 1),
				(n.WINDING_POSITIVE = 2),
				(n.WINDING_NEGATIVE = 3),
				(n.WINDING_ABS_GEQ_TWO = 4),
				(n.POLYGONS = 0),
				(n.CONNECTED_POLYGONS = 1),
				(n.BOUNDARY_CONTOURS = 2),
				(n.tesselate = function (t) {
					for (var e = t.debug || !1, r = new v(), i = 0; i < t.contours.length; i++)
						r.addContour(t.vertexSize || 2, t.contours[i]);
					return (
						r.tesselate(
							t.windingRule || n.WINDING_ODD,
							t.elementType || n.POLYGONS,
							t.polySize || 3,
							t.vertexSize || 2,
							t.normal || [0, 0, 1],
						),
						{
							vertices: r.vertices,
							vertexIndices: r.vertexIndices,
							vertexCount: r.vertexCount,
							elements: r.elements,
							elementCount: r.elementCount,
							mesh: e ? r.mesh : void 0,
						}
					);
				});
			var i = function (t) {
				if (!t) throw 'Assertion Failed!';
			};
			function o() {
				(this.next = null),
					(this.prev = null),
					(this.anEdge = null),
					(this.coords = [0, 0, 0]),
					(this.s = 0),
					(this.t = 0),
					(this.pqHandle = 0),
					(this.n = 0),
					(this.idx = 0);
			}
			function s() {
				(this.next = null),
					(this.prev = null),
					(this.anEdge = null),
					(this.trail = null),
					(this.n = 0),
					(this.marked = !1),
					(this.inside = !1);
			}
			function a(t) {
				(this.next = null),
					(this.Sym = null),
					(this.Onext = null),
					(this.Lnext = null),
					(this.Org = null),
					(this.Lface = null),
					(this.activeRegion = null),
					(this.winding = 0),
					(this.side = t);
			}
			function u() {
				var t = new o(),
					e = new s(),
					r = new a(0),
					n = new a(1);
				(t.next = t.prev = t),
					(t.anEdge = null),
					(e.next = e.prev = e),
					(e.anEdge = null),
					(e.trail = null),
					(e.marked = !1),
					(e.inside = !1),
					(r.next = r),
					(r.Sym = n),
					(r.Onext = null),
					(r.Lnext = null),
					(r.Org = null),
					(r.Lface = null),
					(r.winding = 0),
					(r.activeRegion = null),
					(n.next = n),
					(n.Sym = r),
					(n.Onext = null),
					(n.Lnext = null),
					(n.Org = null),
					(n.Lface = null),
					(n.winding = 0),
					(n.activeRegion = null),
					(this.vHead = t),
					(this.fHead = e),
					(this.eHead = r),
					(this.eHeadSym = n);
			}
			(a.prototype = {
				get Rface() {
					return this.Sym.Lface;
				},
				set Rface(t) {
					this.Sym.Lface = t;
				},
				get Dst() {
					return this.Sym.Org;
				},
				set Dst(t) {
					this.Sym.Org = t;
				},
				get Oprev() {
					return this.Sym.Lnext;
				},
				set Oprev(t) {
					this.Sym.Lnext = t;
				},
				get Lprev() {
					return this.Onext.Sym;
				},
				set Lprev(t) {
					this.Onext.Sym = t;
				},
				get Dprev() {
					return this.Lnext.Sym;
				},
				set Dprev(t) {
					this.Lnext.Sym = t;
				},
				get Rprev() {
					return this.Sym.Onext;
				},
				set Rprev(t) {
					this.Sym.Onext = t;
				},
				get Dnext() {
					return this.Sym.Onext.Sym;
				},
				set Dnext(t) {
					this.Sym.Onext.Sym = t;
				},
				get Rnext() {
					return this.Sym.Lnext.Sym;
				},
				set Rnext(t) {
					this.Sym.Lnext.Sym = t;
				},
			}),
				(u.prototype = {
					makeEdge_: function (t) {
						var e = new a(0),
							r = new a(1);
						t.Sym.side < t.side && (t = t.Sym);
						var n = t.Sym.next;
						return (
							(r.next = n),
							(n.Sym.next = e),
							(e.next = t),
							(t.Sym.next = r),
							(e.Sym = r),
							(e.Onext = e),
							(e.Lnext = r),
							(e.Org = null),
							(e.Lface = null),
							(e.winding = 0),
							(e.activeRegion = null),
							(r.Sym = e),
							(r.Onext = r),
							(r.Lnext = e),
							(r.Org = null),
							(r.Lface = null),
							(r.winding = 0),
							(r.activeRegion = null),
							e
						);
					},
					splice_: function (t, e) {
						var r = t.Onext,
							n = e.Onext;
						(r.Sym.Lnext = e), (n.Sym.Lnext = t), (t.Onext = n), (e.Onext = r);
					},
					makeVertex_: function (t, e, r) {
						var n = t;
						i(null !== n);
						var o = r.prev;
						(n.prev = o), (o.next = n), (n.next = r), (r.prev = n), (n.anEdge = e);
						var s = e;
						do {
							(s.Org = n), (s = s.Onext);
						} while (s !== e);
					},
					makeFace_: function (t, e, r) {
						var n = t;
						i(null !== n);
						var o = r.prev;
						(n.prev = o),
							(o.next = n),
							(n.next = r),
							(r.prev = n),
							(n.anEdge = e),
							(n.trail = null),
							(n.marked = !1),
							(n.inside = r.inside);
						var s = e;
						do {
							(s.Lface = n), (s = s.Lnext);
						} while (s !== e);
					},
					killEdge_: function (t) {
						t.Sym.side < t.side && (t = t.Sym);
						var e = t.next,
							r = t.Sym.next;
						(e.Sym.next = r), (r.Sym.next = e);
					},
					killVertex_: function (t, e) {
						var r = t.anEdge,
							n = r;
						do {
							(n.Org = e), (n = n.Onext);
						} while (n !== r);
						var i = t.prev,
							o = t.next;
						(o.prev = i), (i.next = o);
					},
					killFace_: function (t, e) {
						var r = t.anEdge,
							n = r;
						do {
							(n.Lface = e), (n = n.Lnext);
						} while (n !== r);
						var i = t.prev,
							o = t.next;
						(o.prev = i), (i.next = o);
					},
					makeEdge: function () {
						var t = new o(),
							e = new o(),
							r = new s(),
							n = this.makeEdge_(this.eHead);
						return (
							this.makeVertex_(t, n, this.vHead),
							this.makeVertex_(e, n.Sym, this.vHead),
							this.makeFace_(r, n, this.fHead),
							n
						);
					},
					splice: function (t, e) {
						var r = !1,
							n = !1;
						if (t !== e) {
							if (
								(e.Org !== t.Org && ((n = !0), this.killVertex_(e.Org, t.Org)),
								e.Lface !== t.Lface && ((r = !0), this.killFace_(e.Lface, t.Lface)),
								this.splice_(e, t),
								!n)
							) {
								var i = new o();
								this.makeVertex_(i, e, t.Org), (t.Org.anEdge = t);
							}
							if (!r) {
								var a = new s();
								this.makeFace_(a, e, t.Lface), (t.Lface.anEdge = t);
							}
						}
					},
					delete: function (t) {
						var e = t.Sym,
							r = !1;
						if ((t.Lface !== t.Rface && ((r = !0), this.killFace_(t.Lface, t.Rface)), t.Onext === t))
							this.killVertex_(t.Org, null);
						else if (((t.Rface.anEdge = t.Oprev), (t.Org.anEdge = t.Onext), this.splice_(t, t.Oprev), !r)) {
							var n = new s();
							this.makeFace_(n, t, t.Lface);
						}
						e.Onext === e
							? (this.killVertex_(e.Org, null), this.killFace_(e.Lface, null))
							: ((t.Lface.anEdge = e.Oprev), (e.Org.anEdge = e.Onext), this.splice_(e, e.Oprev)),
							this.killEdge_(t);
					},
					addEdgeVertex: function (t) {
						var e = this.makeEdge_(t),
							r = e.Sym;
						this.splice_(e, t.Lnext), (e.Org = t.Dst);
						var n = new o();
						return this.makeVertex_(n, r, e.Org), (e.Lface = r.Lface = t.Lface), e;
					},
					splitEdge: function (t, e) {
						var r = this.addEdgeVertex(t).Sym;
						return (
							this.splice_(t.Sym, t.Sym.Oprev),
							this.splice_(t.Sym, r),
							(t.Dst = r.Org),
							(r.Dst.anEdge = r.Sym),
							(r.Rface = t.Rface),
							(r.winding = t.winding),
							(r.Sym.winding = t.Sym.winding),
							r
						);
					},
					connect: function (t, e) {
						var r = !1,
							n = this.makeEdge_(t),
							i = n.Sym;
						if (
							(e.Lface !== t.Lface && ((r = !0), this.killFace_(e.Lface, t.Lface)),
							this.splice_(n, t.Lnext),
							this.splice_(i, e),
							(n.Org = t.Dst),
							(i.Org = e.Org),
							(n.Lface = i.Lface = t.Lface),
							(t.Lface.anEdge = i),
							!r)
						) {
							var o = new s();
							this.makeFace_(o, n, t.Lface);
						}
						return n;
					},
					zapFace: function (t) {
						var e,
							r,
							n,
							i,
							o,
							s = t.anEdge;
						r = s.Lnext;
						do {
							(r = (e = r).Lnext),
								(e.Lface = null),
								null === e.Rface &&
									(e.Onext === e
										? this.killVertex_(e.Org, null)
										: ((e.Org.anEdge = e.Onext), this.splice_(e, e.Oprev)),
									(n = e.Sym).Onext === n
										? this.killVertex_(n.Org, null)
										: ((n.Org.anEdge = n.Onext), this.splice_(n, n.Oprev)),
									this.killEdge_(e));
						} while (e != s);
						(i = t.prev), ((o = t.next).prev = i), (i.next = o);
					},
					countFaceVerts_: function (t) {
						var e = t.anEdge,
							r = 0;
						do {
							r++, (e = e.Lnext);
						} while (e !== t.anEdge);
						return r;
					},
					mergeConvexFaces: function (t) {
						var e, r, n, i, o;
						for (e = this.fHead.next; e !== this.fHead; e = e.next)
							if (e.inside)
								for (
									o = (r = e.anEdge).Org;
									(n = r.Lnext),
										(i = r.Sym) &&
											i.Lface &&
											i.Lface.inside &&
											this.countFaceVerts_(e) + this.countFaceVerts_(i.Lface) - 2 <= t &&
											l.vertCCW(r.Lprev.Org, r.Org, i.Lnext.Lnext.Org) &&
											l.vertCCW(i.Lprev.Org, i.Org, r.Lnext.Lnext.Org) &&
											((n = i.Lnext), this.delete(i), (r = null), (i = null)),
										!r || r.Lnext.Org !== o;

								)
									r = n;
						return !0;
					},
					check: function () {
						var t,
							e,
							r,
							n,
							o,
							s,
							a = this.fHead,
							u = this.vHead,
							l = this.eHead;
						for (e = a, e = a; (t = e.next) !== a; e = t) {
							i(t.prev === e), (o = t.anEdge);
							do {
								i(o.Sym !== o),
									i(o.Sym.Sym === o),
									i(o.Lnext.Onext.Sym === o),
									i(o.Onext.Sym.Lnext === o),
									i(o.Lface === t),
									(o = o.Lnext);
							} while (o !== t.anEdge);
						}
						for (i(t.prev === e && null === t.anEdge), n = u, n = u; (r = n.next) !== u; n = r) {
							i(r.prev === n), (o = r.anEdge);
							do {
								i(o.Sym !== o),
									i(o.Sym.Sym === o),
									i(o.Lnext.Onext.Sym === o),
									i(o.Onext.Sym.Lnext === o),
									i(o.Org === r),
									(o = o.Onext);
							} while (o !== r.anEdge);
						}
						for (i(r.prev === n && null === r.anEdge), s = l, s = l; (o = s.next) !== l; s = o)
							i(o.Sym.next === s.Sym),
								i(o.Sym !== o),
								i(o.Sym.Sym === o),
								i(null !== o.Org),
								i(null !== o.Dst),
								i(o.Lnext.Onext.Sym === o),
								i(o.Onext.Sym.Lnext === o);
						i(
							o.Sym.next === s.Sym &&
								o.Sym === this.eHeadSym &&
								o.Sym.Sym === o &&
								null === o.Org &&
								null === o.Dst &&
								null === o.Lface &&
								null === o.Rface,
						);
					},
				});
			var l = {};
			function c() {
				(this.key = null), (this.next = null), (this.prev = null);
			}
			function f(t, e) {
				(this.head = new c()),
					(this.head.next = this.head),
					(this.head.prev = this.head),
					(this.frame = t),
					(this.leq = e);
			}
			function h() {
				this.handle = null;
			}
			function d() {
				(this.key = null), (this.node = null);
			}
			function p(t, e) {
				(this.size = 0), (this.max = t), (this.nodes = []), (this.nodes.length = t + 1);
				for (var r = 0; r < this.nodes.length; r++) this.nodes[r] = new h();
				(this.handles = []), (this.handles.length = t + 1);
				for (r = 0; r < this.handles.length; r++) this.handles[r] = new d();
				(this.initialized = !1),
					(this.freeList = 0),
					(this.leq = e),
					(this.nodes[1].handle = 1),
					(this.handles[1].key = null);
			}
			function g() {
				(this.eUp = null),
					(this.nodeUp = null),
					(this.windingNumber = 0),
					(this.inside = !1),
					(this.sentinel = !1),
					(this.dirty = !1),
					(this.fixUpperEdge = !1);
			}
			(l.vertEq = function (t, e) {
				return t.s === e.s && t.t === e.t;
			}),
				(l.vertLeq = function (t, e) {
					return t.s < e.s || (t.s === e.s && t.t <= e.t);
				}),
				(l.transLeq = function (t, e) {
					return t.t < e.t || (t.t === e.t && t.s <= e.s);
				}),
				(l.edgeGoesLeft = function (t) {
					return l.vertLeq(t.Dst, t.Org);
				}),
				(l.edgeGoesRight = function (t) {
					return l.vertLeq(t.Org, t.Dst);
				}),
				(l.vertL1dist = function (t, e) {
					return Math.abs(t.s - e.s) + Math.abs(t.t - e.t);
				}),
				(l.edgeEval = function (t, e, r) {
					i(l.vertLeq(t, e) && l.vertLeq(e, r));
					var n = e.s - t.s,
						o = r.s - e.s;
					return n + o > 0
						? n < o
							? e.t - t.t + (t.t - r.t) * (n / (n + o))
							: e.t - r.t + (r.t - t.t) * (o / (n + o))
						: 0;
				}),
				(l.edgeSign = function (t, e, r) {
					i(l.vertLeq(t, e) && l.vertLeq(e, r));
					var n = e.s - t.s,
						o = r.s - e.s;
					return n + o > 0 ? (e.t - r.t) * n + (e.t - t.t) * o : 0;
				}),
				(l.transEval = function (t, e, r) {
					i(l.transLeq(t, e) && l.transLeq(e, r));
					var n = e.t - t.t,
						o = r.t - e.t;
					return n + o > 0
						? n < o
							? e.s - t.s + (t.s - r.s) * (n / (n + o))
							: e.s - r.s + (r.s - t.s) * (o / (n + o))
						: 0;
				}),
				(l.transSign = function (t, e, r) {
					i(l.transLeq(t, e) && l.transLeq(e, r));
					var n = e.t - t.t,
						o = r.t - e.t;
					return n + o > 0 ? (e.s - r.s) * n + (e.s - t.s) * o : 0;
				}),
				(l.vertCCW = function (t, e, r) {
					return t.s * (e.t - r.t) + e.s * (r.t - t.t) + r.s * (t.t - e.t) >= 0;
				}),
				(l.interpolate = function (t, e, r, n) {
					return (t = t < 0 ? 0 : t) <= (r = r < 0 ? 0 : r)
						? 0 == r
							? (e + n) / 2
							: e + (t / (t + r)) * (n - e)
						: n + (r / (t + r)) * (e - n);
				}),
				(l.intersect = function (t, e, r, n, i) {
					var o, s, a;
					l.vertLeq(t, e) || ((a = t), (t = e), (e = a)),
						l.vertLeq(r, n) || ((a = r), (r = n), (n = a)),
						l.vertLeq(t, r) || ((a = t), (t = r), (r = a), (a = e), (e = n), (n = a)),
						l.vertLeq(r, e)
							? l.vertLeq(e, n)
								? ((o = l.edgeEval(t, r, e)) + (s = l.edgeEval(r, e, n)) < 0 && ((o = -o), (s = -s)),
								  (i.s = l.interpolate(o, r.s, s, e.s)))
								: ((o = l.edgeSign(t, r, e)) + (s = -l.edgeSign(t, n, e)) < 0 && ((o = -o), (s = -s)),
								  (i.s = l.interpolate(o, r.s, s, n.s)))
							: (i.s = (r.s + e.s) / 2),
						l.transLeq(t, e) || ((a = t), (t = e), (e = a)),
						l.transLeq(r, n) || ((a = r), (r = n), (n = a)),
						l.transLeq(t, r) || ((a = t), (t = r), (r = a), (a = e), (e = n), (n = a)),
						l.transLeq(r, e)
							? l.transLeq(e, n)
								? ((o = l.transEval(t, r, e)) + (s = l.transEval(r, e, n)) < 0 && ((o = -o), (s = -s)),
								  (i.t = l.interpolate(o, r.t, s, e.t)))
								: ((o = l.transSign(t, r, e)) + (s = -l.transSign(t, n, e)) < 0 && ((o = -o), (s = -s)),
								  (i.t = l.interpolate(o, r.t, s, n.t)))
							: (i.t = (r.t + e.t) / 2);
				}),
				(f.prototype = {
					min: function () {
						return this.head.next;
					},
					max: function () {
						return this.head.prev;
					},
					insert: function (t) {
						return this.insertBefore(this.head, t);
					},
					search: function (t) {
						var e = this.head;
						do {
							e = e.next;
						} while (null !== e.key && !this.leq(this.frame, t, e.key));
						return e;
					},
					insertBefore: function (t, e) {
						do {
							t = t.prev;
						} while (null !== t.key && !this.leq(this.frame, t.key, e));
						var r = new c();
						return (r.key = e), (r.next = t.next), (t.next.prev = r), (r.prev = t), (t.next = r), r;
					},
					delete: function (t) {
						(t.next.prev = t.prev), (t.prev.next = t.next);
					},
				}),
				(p.prototype = {
					floatDown_: function (t) {
						var e,
							r,
							n,
							o = this.nodes,
							s = this.handles;
						for (e = o[t].handle; ; ) {
							if (
								((n = t << 1) < this.size &&
									this.leq(s[o[n + 1].handle].key, s[o[n].handle].key) &&
									++n,
								i(n <= this.max),
								(r = o[n].handle),
								n > this.size || this.leq(s[e].key, s[r].key))
							) {
								(o[t].handle = e), (s[e].node = t);
								break;
							}
							(o[t].handle = r), (s[r].node = t), (t = n);
						}
					},
					floatUp_: function (t) {
						var e,
							r,
							n,
							i = this.nodes,
							o = this.handles;
						for (e = i[t].handle; ; ) {
							if (((r = i[(n = t >> 1)].handle), 0 == n || this.leq(o[r].key, o[e].key))) {
								(i[t].handle = e), (o[e].node = t);
								break;
							}
							(i[t].handle = r), (o[r].node = t), (t = n);
						}
					},
					init: function () {
						for (var t = this.size; t >= 1; --t) this.floatDown_(t);
						this.initialized = !0;
					},
					min: function () {
						return this.handles[this.nodes[1].handle].key;
					},
					isEmpty: function () {
						this.size;
					},
					insert: function (t) {
						var e, r;
						if (2 * (e = ++this.size) > this.max) {
							var n;
							(this.max *= 2), (n = this.nodes.length), (this.nodes.length = this.max + 1);
							for (var i = n; i < this.nodes.length; i++) this.nodes[i] = new h();
							(n = this.handles.length), (this.handles.length = this.max + 1);
							for (i = n; i < this.handles.length; i++) this.handles[i] = new d();
						}
						return (
							0 === this.freeList
								? (r = e)
								: ((r = this.freeList), (this.freeList = this.handles[r].node)),
							(this.nodes[e].handle = r),
							(this.handles[r].node = e),
							(this.handles[r].key = t),
							this.initialized && this.floatUp_(e),
							r
						);
					},
					extractMin: function () {
						var t = this.nodes,
							e = this.handles,
							r = t[1].handle,
							n = e[r].key;
						return (
							this.size > 0 &&
								((t[1].handle = t[this.size].handle),
								(e[t[1].handle].node = 1),
								(e[r].key = null),
								(e[r].node = this.freeList),
								(this.freeList = r),
								--this.size,
								this.size > 0 && this.floatDown_(1)),
							n
						);
					},
					delete: function (t) {
						var e,
							r = this.nodes,
							n = this.handles;
						i(t >= 1 && t <= this.max && null !== n[t].key),
							(r[(e = n[t].node)].handle = r[this.size].handle),
							(n[r[e].handle].node = e),
							--this.size,
							e <= this.size &&
								(e <= 1 || this.leq(n[r[e >> 1].handle].key, n[r[e].handle].key)
									? this.floatDown_(e)
									: this.floatUp_(e)),
							(n[t].key = null),
							(n[t].node = this.freeList),
							(this.freeList = t);
					},
				});
			var m = {};
			function v() {
				(this.mesh = null),
					(this.normal = [0, 0, 0]),
					(this.sUnit = [0, 0, 0]),
					(this.tUnit = [0, 0, 0]),
					(this.bmin = [0, 0]),
					(this.bmax = [0, 0]),
					(this.windingRule = n.WINDING_ODD),
					(this.dict = null),
					(this.pq = null),
					(this.event = null),
					(this.vertexIndexCounter = 0),
					(this.vertices = []),
					(this.vertexIndices = []),
					(this.vertexCount = 0),
					(this.elements = []),
					(this.elementCount = 0);
			}
			(m.regionBelow = function (t) {
				return t.nodeUp.prev.key;
			}),
				(m.regionAbove = function (t) {
					return t.nodeUp.next.key;
				}),
				(m.debugEvent = function (t) {}),
				(m.addWinding = function (t, e) {
					(t.winding += e.winding), (t.Sym.winding += e.Sym.winding);
				}),
				(m.edgeLeq = function (t, e, r) {
					var n = t.event,
						i = e.eUp,
						o = r.eUp;
					return i.Dst === n
						? o.Dst === n
							? l.vertLeq(i.Org, o.Org)
								? l.edgeSign(o.Dst, i.Org, o.Org) <= 0
								: l.edgeSign(i.Dst, o.Org, i.Org) >= 0
							: l.edgeSign(o.Dst, n, o.Org) <= 0
						: o.Dst === n
						? l.edgeSign(i.Dst, n, i.Org) >= 0
						: l.edgeEval(i.Dst, n, i.Org) >= l.edgeEval(o.Dst, n, o.Org);
				}),
				(m.deleteRegion = function (t, e) {
					e.fixUpperEdge && i(0 === e.eUp.winding), (e.eUp.activeRegion = null), t.dict.delete(e.nodeUp);
				}),
				(m.fixUpperEdge = function (t, e, r) {
					i(e.fixUpperEdge), t.mesh.delete(e.eUp), (e.fixUpperEdge = !1), (e.eUp = r), (r.activeRegion = e);
				}),
				(m.topLeftRegion = function (t, e) {
					var r,
						n = e.eUp.Org;
					do {
						e = m.regionAbove(e);
					} while (e.eUp.Org === n);
					if (e.fixUpperEdge) {
						if (null === (r = t.mesh.connect(m.regionBelow(e).eUp.Sym, e.eUp.Lnext))) return null;
						m.fixUpperEdge(t, e, r), (e = m.regionAbove(e));
					}
					return e;
				}),
				(m.topRightRegion = function (t) {
					var e = t.eUp.Dst;
					t = null;
					do {
						t = m.regionAbove(t);
					} while (t.eUp.Dst === e);
					return t;
				}),
				(m.addRegionBelow = function (t, e, r) {
					var n = new g();
					return (
						(n.eUp = r),
						(n.nodeUp = t.dict.insertBefore(e.nodeUp, n)),
						(n.fixUpperEdge = !1),
						(n.sentinel = !1),
						(n.dirty = !1),
						(r.activeRegion = n),
						n
					);
				}),
				(m.isWindingInside = function (t, e) {
					switch (t.windingRule) {
						case n.WINDING_ODD:
							return 0 != (1 & e);
						case n.WINDING_NONZERO:
							return 0 != e;
						case n.WINDING_POSITIVE:
							return e > 0;
						case n.WINDING_NEGATIVE:
							return e < 0;
						case n.WINDING_ABS_GEQ_TWO:
							return e >= 2 || e <= -2;
					}
					return i(!1), !1;
				}),
				(m.computeWinding = function (t, e) {
					(e.windingNumber = m.regionAbove(e).windingNumber + e.eUp.winding),
						(e.inside = m.isWindingInside(t, e.windingNumber));
				}),
				(m.finishRegion = function (t, e) {
					var r = e.eUp,
						n = r.Lface;
					(n.inside = e.inside), (n.anEdge = r), m.deleteRegion(t, e);
				}),
				(m.finishLeftRegions = function (t, e, r) {
					for (var n, i = null, o = e, s = e.eUp; o !== r; ) {
						if (((o.fixUpperEdge = !1), (n = (i = m.regionBelow(o)).eUp).Org != s.Org)) {
							if (!i.fixUpperEdge) {
								m.finishRegion(t, o);
								break;
							}
							(n = t.mesh.connect(s.Lprev, n.Sym)), m.fixUpperEdge(t, i, n);
						}
						s.Onext !== n && (t.mesh.splice(n.Oprev, n), t.mesh.splice(s, n)),
							m.finishRegion(t, o),
							(s = i.eUp),
							(o = i);
					}
					return s;
				}),
				(m.addRightEdges = function (t, e, r, n, o, s) {
					var a,
						u,
						c,
						f,
						h = !0;
					c = r;
					do {
						i(l.vertLeq(c.Org, c.Dst)), m.addRegionBelow(t, e, c.Sym), (c = c.Onext);
					} while (c !== n);
					for (
						null === o && (o = m.regionBelow(e).eUp.Rprev), u = e, f = o;
						(c = (a = m.regionBelow(u)).eUp.Sym).Org === f.Org;

					)
						c.Onext !== f && (t.mesh.splice(c.Oprev, c), t.mesh.splice(f.Oprev, c)),
							(a.windingNumber = u.windingNumber - c.winding),
							(a.inside = m.isWindingInside(t, a.windingNumber)),
							(u.dirty = !0),
							!h &&
								m.checkForRightSplice(t, u) &&
								(m.addWinding(c, f), m.deleteRegion(t, u), t.mesh.delete(f)),
							(h = !1),
							(u = a),
							(f = c);
					(u.dirty = !0), i(u.windingNumber - c.winding === a.windingNumber), s && m.walkDirtyRegions(t, u);
				}),
				(m.spliceMergeVertices = function (t, e, r) {
					t.mesh.splice(e, r);
				}),
				(m.vertexWeights = function (t, e, r) {
					var n = l.vertL1dist(e, t),
						i = l.vertL1dist(r, t),
						o = (0.5 * i) / (n + i),
						s = (0.5 * n) / (n + i);
					(t.coords[0] += o * e.coords[0] + s * r.coords[0]),
						(t.coords[1] += o * e.coords[1] + s * r.coords[1]),
						(t.coords[2] += o * e.coords[2] + s * r.coords[2]);
				}),
				(m.getIntersectData = function (t, e, r, n, i, o) {
					(e.coords[0] = e.coords[1] = e.coords[2] = 0),
						(e.idx = -1),
						m.vertexWeights(e, r, n),
						m.vertexWeights(e, i, o);
				}),
				(m.checkForRightSplice = function (t, e) {
					var r = m.regionBelow(e),
						n = e.eUp,
						i = r.eUp;
					if (l.vertLeq(n.Org, i.Org)) {
						if (l.edgeSign(i.Dst, n.Org, i.Org) > 0) return !1;
						l.vertEq(n.Org, i.Org)
							? n.Org !== i.Org && (t.pq.delete(n.Org.pqHandle), m.spliceMergeVertices(t, i.Oprev, n))
							: (t.mesh.splitEdge(i.Sym), t.mesh.splice(n, i.Oprev), (e.dirty = r.dirty = !0));
					} else {
						if (l.edgeSign(n.Dst, i.Org, n.Org) < 0) return !1;
						(m.regionAbove(e).dirty = e.dirty = !0), t.mesh.splitEdge(n.Sym), t.mesh.splice(i.Oprev, n);
					}
					return !0;
				}),
				(m.checkForLeftSplice = function (t, e) {
					var r,
						n = m.regionBelow(e),
						o = e.eUp,
						s = n.eUp;
					if ((i(!l.vertEq(o.Dst, s.Dst)), l.vertLeq(o.Dst, s.Dst))) {
						if (l.edgeSign(o.Dst, s.Dst, o.Org) < 0) return !1;
						(m.regionAbove(e).dirty = e.dirty = !0),
							(r = t.mesh.splitEdge(o)),
							t.mesh.splice(s.Sym, r),
							(r.Lface.inside = e.inside);
					} else {
						if (l.edgeSign(s.Dst, o.Dst, s.Org) > 0) return !1;
						(e.dirty = n.dirty = !0),
							(r = t.mesh.splitEdge(s)),
							t.mesh.splice(o.Lnext, s.Sym),
							(r.Rface.inside = e.inside);
					}
					return !0;
				}),
				(m.checkForIntersect = function (t, e) {
					var r,
						n,
						s = m.regionBelow(e),
						a = e.eUp,
						u = s.eUp,
						c = a.Org,
						f = u.Org,
						h = a.Dst,
						d = u.Dst,
						p = new o();
					if (
						(i(!l.vertEq(d, h)),
						i(l.edgeSign(h, t.event, c) <= 0),
						i(l.edgeSign(d, t.event, f) >= 0),
						i(c !== t.event && f !== t.event),
						i(!e.fixUpperEdge && !s.fixUpperEdge),
						c === f)
					)
						return !1;
					if (Math.min(c.t, h.t) > Math.max(f.t, d.t)) return !1;
					if (l.vertLeq(c, f)) {
						if (l.edgeSign(d, c, f) > 0) return !1;
					} else if (l.edgeSign(h, f, c) < 0) return !1;
					return (
						m.debugEvent(t),
						l.intersect(h, c, d, f, p),
						i(Math.min(c.t, h.t) <= p.t),
						i(p.t <= Math.max(f.t, d.t)),
						i(Math.min(d.s, h.s) <= p.s),
						i(p.s <= Math.max(f.s, c.s)),
						l.vertLeq(p, t.event) && ((p.s = t.event.s), (p.t = t.event.t)),
						(r = l.vertLeq(c, f) ? c : f),
						l.vertLeq(r, p) && ((p.s = r.s), (p.t = r.t)),
						l.vertEq(p, c) || l.vertEq(p, f)
							? (m.checkForRightSplice(t, e), !1)
							: (!l.vertEq(h, t.event) && l.edgeSign(h, t.event, p) >= 0) ||
							  (!l.vertEq(d, t.event) && l.edgeSign(d, t.event, p) <= 0)
							? d === t.event
								? (t.mesh.splitEdge(a.Sym),
								  t.mesh.splice(u.Sym, a),
								  (e = m.topLeftRegion(t, e)),
								  (a = m.regionBelow(e).eUp),
								  m.finishLeftRegions(t, m.regionBelow(e), s),
								  m.addRightEdges(t, e, a.Oprev, a, a, !0),
								  TRUE)
								: h === t.event
								? (t.mesh.splitEdge(u.Sym),
								  t.mesh.splice(a.Lnext, u.Oprev),
								  (s = e),
								  (e = m.topRightRegion(e)),
								  (n = m.regionBelow(e).eUp.Rprev),
								  (s.eUp = u.Oprev),
								  (u = m.finishLeftRegions(t, s, null)),
								  m.addRightEdges(t, e, u.Onext, a.Rprev, n, !0),
								  !0)
								: (l.edgeSign(h, t.event, p) >= 0 &&
										((m.regionAbove(e).dirty = e.dirty = !0),
										t.mesh.splitEdge(a.Sym),
										(a.Org.s = t.event.s),
										(a.Org.t = t.event.t)),
								  l.edgeSign(d, t.event, p) <= 0 &&
										((e.dirty = s.dirty = !0),
										t.mesh.splitEdge(u.Sym),
										(u.Org.s = t.event.s),
										(u.Org.t = t.event.t)),
								  !1)
							: (t.mesh.splitEdge(a.Sym),
							  t.mesh.splitEdge(u.Sym),
							  t.mesh.splice(u.Oprev, a),
							  (a.Org.s = p.s),
							  (a.Org.t = p.t),
							  (a.Org.pqHandle = t.pq.insert(a.Org)),
							  m.getIntersectData(t, a.Org, c, h, f, d),
							  (m.regionAbove(e).dirty = e.dirty = s.dirty = !0),
							  !1)
					);
				}),
				(m.walkDirtyRegions = function (t, e) {
					for (var r, n, i = m.regionBelow(e); ; ) {
						for (; i.dirty; ) (e = i), (i = m.regionBelow(i));
						if (!e.dirty && ((i = e), null == (e = m.regionAbove(e)) || !e.dirty)) return;
						if (
							((e.dirty = !1),
							(r = e.eUp),
							(n = i.eUp),
							r.Dst !== n.Dst &&
								m.checkForLeftSplice(t, e) &&
								(i.fixUpperEdge
									? (m.deleteRegion(t, i), t.mesh.delete(n), (n = (i = m.regionBelow(e)).eUp))
									: e.fixUpperEdge &&
									  (m.deleteRegion(t, e), t.mesh.delete(r), (r = (e = m.regionAbove(i)).eUp))),
							r.Org !== n.Org)
						)
							if (
								r.Dst === n.Dst ||
								e.fixUpperEdge ||
								i.fixUpperEdge ||
								(r.Dst !== t.event && n.Dst !== t.event)
							)
								m.checkForRightSplice(t, e);
							else if (m.checkForIntersect(t, e)) return;
						r.Org === n.Org &&
							r.Dst === n.Dst &&
							(m.addWinding(n, r), m.deleteRegion(t, e), t.mesh.delete(r), (e = m.regionAbove(i)));
					}
				}),
				(m.connectRightVertex = function (t, e, r) {
					var n,
						i = r.Onext,
						o = m.regionBelow(e),
						s = e.eUp,
						a = o.eUp,
						u = !1;
					s.Dst !== a.Dst && m.checkForIntersect(t, e),
						l.vertEq(s.Org, t.event) &&
							(t.mesh.splice(i.Oprev, s),
							(e = m.topLeftRegion(t, e)),
							(i = m.regionBelow(e).eUp),
							m.finishLeftRegions(t, m.regionBelow(e), o),
							(u = !0)),
						l.vertEq(a.Org, t.event) &&
							(t.mesh.splice(r, a.Oprev), (r = m.finishLeftRegions(t, o, null)), (u = !0)),
						u
							? m.addRightEdges(t, e, r.Onext, i, i, !0)
							: ((n = l.vertLeq(a.Org, s.Org) ? a.Oprev : s),
							  (n = t.mesh.connect(r.Lprev, n)),
							  m.addRightEdges(t, e, n, n.Onext, n.Onext, !1),
							  (n.Sym.activeRegion.fixUpperEdge = !0),
							  m.walkDirtyRegions(t, e));
				}),
				(m.connectLeftDegenerate = function (t, e, r) {
					var n, o, s, a, u;
					return (
						(n = e.eUp),
						l.vertEq(n.Org, r)
							? (i(!1), void m.spliceMergeVertices(t, n, r.anEdge))
							: l.vertEq(n.Dst, r)
							? (i(!1),
							  (e = m.topRightRegion(e)),
							  (o = a = (s = (u = m.regionBelow(e)).eUp.Sym).Onext),
							  u.fixUpperEdge && (i(o !== s), m.deleteRegion(t, u), t.mesh.delete(s), (s = o.Oprev)),
							  t.mesh.splice(r.anEdge, s),
							  l.edgeGoesLeft(o) || (o = null),
							  void m.addRightEdges(t, e, s.Onext, a, o, !0))
							: (t.mesh.splitEdge(n.Sym),
							  e.fixUpperEdge && (t.mesh.delete(n.Onext), (e.fixUpperEdge = !1)),
							  t.mesh.splice(r.anEdge, n),
							  void m.sweepEvent(t, r))
					);
				}),
				(m.connectLeftVertex = function (t, e) {
					var r,
						n,
						i,
						o,
						s,
						a,
						u = new g();
					if (((u.eUp = e.anEdge.Sym), (r = t.dict.search(u).key), (n = m.regionBelow(r))))
						if (((o = r.eUp), (s = n.eUp), 0 !== l.edgeSign(o.Dst, e, o.Org)))
							if (((i = l.vertLeq(s.Dst, o.Dst) ? r : n), r.inside || i.fixUpperEdge)) {
								if (i === r) a = t.mesh.connect(e.anEdge.Sym, o.Lnext);
								else a = t.mesh.connect(s.Dnext, e.anEdge).Sym;
								i.fixUpperEdge
									? m.fixUpperEdge(t, i, a)
									: m.computeWinding(t, m.addRegionBelow(t, r, a)),
									m.sweepEvent(t, e);
							} else m.addRightEdges(t, r, e.anEdge, e.anEdge, null, !0);
						else m.connectLeftDegenerate(t, r, e);
				}),
				(m.sweepEvent = function (t, e) {
					(t.event = e), m.debugEvent(t);
					for (var r = e.anEdge; null === r.activeRegion; )
						if ((r = r.Onext) == e.anEdge) return void m.connectLeftVertex(t, e);
					var n = m.topLeftRegion(t, r.activeRegion);
					i(null !== n);
					var o = m.regionBelow(n),
						s = o.eUp,
						a = m.finishLeftRegions(t, o, null);
					a.Onext === s ? m.connectRightVertex(t, n, a) : m.addRightEdges(t, n, a.Onext, s, s, !0);
				}),
				(m.addSentinel = function (t, e, r, n) {
					var i = new g(),
						o = t.mesh.makeEdge();
					(o.Org.s = r),
						(o.Org.t = n),
						(o.Dst.s = e),
						(o.Dst.t = n),
						(t.event = o.Dst),
						(i.eUp = o),
						(i.windingNumber = 0),
						(i.inside = !1),
						(i.fixUpperEdge = !1),
						(i.sentinel = !0),
						(i.dirty = !1),
						(i.nodeUp = t.dict.insert(i));
				}),
				(m.initEdgeDict = function (t) {
					t.dict = new f(t, m.edgeLeq);
					var e = t.bmax[0] - t.bmin[0],
						r = t.bmax[1] - t.bmin[1],
						n = t.bmin[0] - e,
						i = t.bmax[0] + e,
						o = t.bmin[1] - r,
						s = t.bmax[1] + r;
					m.addSentinel(t, n, i, o), m.addSentinel(t, n, i, s);
				}),
				(m.doneEdgeDict = function (t) {
					for (var e, r = 0; null !== (e = t.dict.min().key); )
						e.sentinel || (i(e.fixUpperEdge), i(1 == ++r)), i(0 == e.windingNumber), m.deleteRegion(t, e);
				}),
				(m.removeDegenerateEdges = function (t) {
					var e,
						r,
						n,
						i = t.mesh.eHead;
					for (e = i.next; e !== i; e = r)
						(r = e.next),
							(n = e.Lnext),
							l.vertEq(e.Org, e.Dst) &&
								e.Lnext.Lnext !== e &&
								(m.spliceMergeVertices(t, n, e), t.mesh.delete(e), (n = (e = n).Lnext)),
							n.Lnext === e &&
								(n !== e && ((n !== r && n !== r.Sym) || (r = r.next), t.mesh.delete(n)),
								(e !== r && e !== r.Sym) || (r = r.next),
								t.mesh.delete(e));
				}),
				(m.initPriorityQ = function (t) {
					var e,
						r,
						n,
						i = 0;
					for (r = (n = t.mesh.vHead).next; r !== n; r = r.next) i++;
					for (i += 8, e = t.pq = new p(i, l.vertLeq), r = (n = t.mesh.vHead).next; r !== n; r = r.next)
						r.pqHandle = e.insert(r);
					return r === n && (e.init(), !0);
				}),
				(m.donePriorityQ = function (t) {
					t.pq = null;
				}),
				(m.removeDegenerateFaces = function (t, e) {
					var r, n, o;
					for (r = e.fHead.next; r !== e.fHead; r = n)
						(n = r.next),
							(o = r.anEdge),
							i(o.Lnext !== o),
							o.Lnext.Lnext === o && (m.addWinding(o.Onext, o), t.mesh.delete(o));
					return !0;
				}),
				(m.computeInterior = function (t) {
					var e, r;
					if ((m.removeDegenerateEdges(t), !m.initPriorityQ(t))) return !1;
					for (m.initEdgeDict(t); null !== (e = t.pq.extractMin()); ) {
						for (; null !== (r = t.pq.min()) && l.vertEq(r, e); )
							(r = t.pq.extractMin()), m.spliceMergeVertices(t, e.anEdge, r.anEdge);
						m.sweepEvent(t, e);
					}
					return (
						(t.event = t.dict.min().key.eUp.Org),
						m.debugEvent(t),
						m.doneEdgeDict(t),
						m.donePriorityQ(t),
						!!m.removeDegenerateFaces(t, t.mesh) && (t.mesh.check(), !0)
					);
				}),
				(v.prototype = {
					dot_: function (t, e) {
						return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
					},
					normalize_: function (t) {
						var e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2];
						i(e > 0), (e = Math.sqrt(e)), (t[0] /= e), (t[1] /= e), (t[2] /= e);
					},
					longAxis_: function (t) {
						var e = 0;
						return (
							Math.abs(t[1]) > Math.abs(t[0]) && (e = 1), Math.abs(t[2]) > Math.abs(t[e]) && (e = 2), e
						);
					},
					computeNormal_: function (t) {
						var e,
							r,
							n,
							i,
							o,
							s,
							a,
							u = [0, 0, 0],
							l = [0, 0, 0],
							c = [0, 0, 0],
							f = [0, 0, 0],
							h = [0, 0, 0],
							d = [null, null, null],
							p = [null, null, null],
							g = this.mesh.vHead;
						for (e = g.next, a = 0; a < 3; ++a)
							(i = e.coords[a]), (l[a] = i), (p[a] = e), (u[a] = i), (d[a] = e);
						for (e = g.next; e !== g; e = e.next)
							for (a = 0; a < 3; ++a)
								(i = e.coords[a]) < l[a] && ((l[a] = i), (p[a] = e)),
									i > u[a] && ((u[a] = i), (d[a] = e));
						if (
							((a = 0),
							u[1] - l[1] > u[0] - l[0] && (a = 1),
							u[2] - l[2] > u[a] - l[a] && (a = 2),
							l[a] >= u[a])
						)
							return (t[0] = 0), (t[1] = 0), void (t[2] = 1);
						for (
							s = 0,
								r = p[a],
								n = d[a],
								c[0] = r.coords[0] - n.coords[0],
								c[1] = r.coords[1] - n.coords[1],
								c[2] = r.coords[2] - n.coords[2],
								e = g.next;
							e !== g;
							e = e.next
						)
							(f[0] = e.coords[0] - n.coords[0]),
								(f[1] = e.coords[1] - n.coords[1]),
								(f[2] = e.coords[2] - n.coords[2]),
								(h[0] = c[1] * f[2] - c[2] * f[1]),
								(h[1] = c[2] * f[0] - c[0] * f[2]),
								(h[2] = c[0] * f[1] - c[1] * f[0]),
								(o = h[0] * h[0] + h[1] * h[1] + h[2] * h[2]) > s &&
									((s = o), (t[0] = h[0]), (t[1] = h[1]), (t[2] = h[2]));
						s <= 0 && ((t[0] = t[1] = t[2] = 0), (t[this.longAxis_(c)] = 1));
					},
					checkOrientation_: function () {
						var t,
							e,
							r,
							n,
							i = this.mesh.fHead,
							o = this.mesh.vHead;
						for (t = 0, e = i.next; e !== i; e = e.next)
							if (!((n = e.anEdge).winding <= 0))
								do {
									(t += (n.Org.s - n.Dst.s) * (n.Org.t + n.Dst.t)), (n = n.Lnext);
								} while (n !== e.anEdge);
						if (t < 0) {
							for (r = o.next; r !== o; r = r.next) r.t = -r.t;
							(this.tUnit[0] = -this.tUnit[0]),
								(this.tUnit[1] = -this.tUnit[1]),
								(this.tUnit[2] = -this.tUnit[2]);
						}
					},
					projectPolygon_: function () {
						var t,
							e,
							r,
							n,
							i,
							o = this.mesh.vHead,
							s = [0, 0, 0],
							a = !1;
						for (
							s[0] = this.normal[0],
								s[1] = this.normal[1],
								s[2] = this.normal[2],
								0 === s[0] && 0 === s[1] && 0 === s[2] && (this.computeNormal_(s), (a = !0)),
								e = this.sUnit,
								r = this.tUnit,
								e[(n = this.longAxis_(s))] = 0,
								e[(n + 1) % 3] = 1,
								e[(n + 2) % 3] = 0,
								r[n] = 0,
								r[(n + 1) % 3] = 0,
								r[(n + 2) % 3] = s[n] > 0 ? 1 : -1,
								t = o.next;
							t !== o;
							t = t.next
						)
							(t.s = this.dot_(t.coords, e)), (t.t = this.dot_(t.coords, r));
						for (a && this.checkOrientation_(), i = !0, t = o.next; t !== o; t = t.next)
							i
								? ((this.bmin[0] = this.bmax[0] = t.s), (this.bmin[1] = this.bmax[1] = t.t), (i = !1))
								: (t.s < this.bmin[0] && (this.bmin[0] = t.s),
								  t.s > this.bmax[0] && (this.bmax[0] = t.s),
								  t.t < this.bmin[1] && (this.bmin[1] = t.t),
								  t.t > this.bmax[1] && (this.bmax[1] = t.t));
					},
					addWinding_: function (t, e) {
						(t.winding += e.winding), (t.Sym.winding += e.Sym.winding);
					},
					tessellateMonoRegion_: function (t, e) {
						var r, n;
						for (
							r = e.anEdge, i(r.Lnext !== r && r.Lnext.Lnext !== r);
							l.vertLeq(r.Dst, r.Org);
							r = r.Lprev
						);
						for (; l.vertLeq(r.Org, r.Dst); r = r.Lnext);
						for (n = r.Lprev; r.Lnext !== n; )
							if (l.vertLeq(r.Dst, n.Org)) {
								for (
									;
									n.Lnext !== r &&
									(l.edgeGoesLeft(n.Lnext) || l.edgeSign(n.Org, n.Dst, n.Lnext.Dst) <= 0);

								) {
									n = t.connect(n.Lnext, n).Sym;
								}
								n = n.Lprev;
							} else {
								for (
									;
									n.Lnext != r &&
									(l.edgeGoesRight(r.Lprev) || l.edgeSign(r.Dst, r.Org, r.Lprev.Org) >= 0);

								) {
									r = t.connect(r, r.Lprev).Sym;
								}
								r = r.Lnext;
							}
						for (i(n.Lnext !== r); n.Lnext.Lnext !== r; ) {
							n = t.connect(n.Lnext, n).Sym;
						}
						return !0;
					},
					tessellateInterior_: function (t) {
						var e, r;
						for (e = t.fHead.next; e !== t.fHead; e = r)
							if (((r = e.next), e.inside && !this.tessellateMonoRegion_(t, e))) return !1;
						return !0;
					},
					discardExterior_: function (t) {
						var e, r;
						for (e = t.fHead.next; e !== t.fHead; e = r) (r = e.next), e.inside || t.zapFace(e);
					},
					setWindingNumber_: function (t, e, r) {
						var n, i;
						for (n = t.eHead.next; n !== t.eHead; n = i)
							(i = n.next),
								n.Rface.inside !== n.Lface.inside
									? (n.winding = n.Lface.inside ? e : -e)
									: r
									? t.delete(n)
									: (n.winding = 0);
					},
					getNeighbourFace_: function (t) {
						return t.Rface && t.Rface.inside ? t.Rface.n : -1;
					},
					outputPolymesh_: function (t, e, r, o) {
						var s,
							a,
							u,
							l,
							c,
							f = 0,
							h = 0;
						for (r > 3 && t.mergeConvexFaces(r), s = t.vHead.next; s !== t.vHead; s = s.next) s.n = -1;
						for (a = t.fHead.next; a != t.fHead; a = a.next)
							if (((a.n = -1), a.inside)) {
								(u = a.anEdge), (l = 0);
								do {
									-1 === (s = u.Org).n && ((s.n = h), h++), l++, (u = u.Lnext);
								} while (u !== a.anEdge);
								i(l <= r), (a.n = f), ++f;
							}
						for (
							this.elementCount = f,
								e == n.CONNECTED_POLYGONS && (f *= 2),
								this.elements = [],
								this.elements.length = f * r,
								this.vertexCount = h,
								this.vertices = [],
								this.vertices.length = h * o,
								this.vertexIndices = [],
								this.vertexIndices.length = h,
								s = t.vHead.next;
							s !== t.vHead;
							s = s.next
						)
							if (-1 != s.n) {
								var d = s.n * o;
								(this.vertices[d + 0] = s.coords[0]),
									(this.vertices[d + 1] = s.coords[1]),
									o > 2 && (this.vertices[d + 2] = s.coords[2]),
									(this.vertexIndices[s.n] = s.idx);
							}
						var p = 0;
						for (a = t.fHead.next; a !== t.fHead; a = a.next)
							if (a.inside) {
								(u = a.anEdge), (l = 0);
								do {
									(s = u.Org), (this.elements[p++] = s.n), l++, (u = u.Lnext);
								} while (u !== a.anEdge);
								for (c = l; c < r; ++c) this.elements[p++] = -1;
								if (e == n.CONNECTED_POLYGONS) {
									u = a.anEdge;
									do {
										(this.elements[p++] = this.getNeighbourFace_(u)), (u = u.Lnext);
									} while (u !== a.anEdge);
									for (c = l; c < r; ++c) this.elements[p++] = -1;
								}
							}
					},
					outputContours_: function (t, e) {
						var r,
							n,
							i,
							o = 0,
							s = 0;
						for (this.vertexCount = 0, this.elementCount = 0, r = t.fHead.next; r !== t.fHead; r = r.next)
							if (r.inside) {
								i = n = r.anEdge;
								do {
									this.vertexCount++, (n = n.Lnext);
								} while (n !== i);
								this.elementCount++;
							}
						(this.elements = []),
							(this.elements.length = 2 * this.elementCount),
							(this.vertices = []),
							(this.vertices.length = this.vertexCount * e),
							(this.vertexIndices = []),
							(this.vertexIndices.length = this.vertexCount);
						var a = 0,
							u = 0,
							l = 0;
						for (o = 0, r = t.fHead.next; r !== t.fHead; r = r.next)
							if (r.inside) {
								(s = 0), (i = n = r.anEdge);
								do {
									(this.vertices[a++] = n.Org.coords[0]),
										(this.vertices[a++] = n.Org.coords[1]),
										e > 2 && (this.vertices[a++] = n.Org.coords[2]),
										(this.vertexIndices[u++] = n.Org.idx),
										s++,
										(n = n.Lnext);
								} while (n !== i);
								(this.elements[l++] = o), (this.elements[l++] = s), (o += s);
							}
					},
					addContour: function (t, e) {
						var r, n;
						for (
							null === this.mesh && (this.mesh = new u()),
								t < 2 && (t = 2),
								t > 3 && (t = 3),
								r = null,
								n = 0;
							n < e.length;
							n += t
						)
							null == r
								? ((r = this.mesh.makeEdge()), this.mesh.splice(r, r.Sym))
								: (this.mesh.splitEdge(r), (r = r.Lnext)),
								(r.Org.coords[0] = e[n + 0]),
								(r.Org.coords[1] = e[n + 1]),
								(r.Org.coords[2] = t > 2 ? e[n + 2] : 0),
								(r.Org.idx = this.vertexIndexCounter++),
								(r.winding = 1),
								(r.Sym.winding = -1);
					},
					tesselate: function (t, e, r, i, o) {
						if (
							((this.vertices = []),
							(this.elements = []),
							(this.vertexIndices = []),
							(this.vertexIndexCounter = 0),
							o && ((this.normal[0] = o[0]), (this.normal[1] = o[1]), (this.normal[2] = o[2])),
							(this.windingRule = t),
							i < 2 && (i = 2),
							i > 3 && (i = 3),
							!this.mesh)
						)
							return !1;
						this.projectPolygon_(), m.computeInterior(this);
						var s = this.mesh;
						return (
							e == n.BOUNDARY_CONTOURS ? this.setWindingNumber_(s, 1, !0) : this.tessellateInterior_(s),
							s.check(),
							e == n.BOUNDARY_CONTOURS ? this.outputContours_(s, i) : this.outputPolymesh_(s, e, r, i),
							!0
						);
					},
				});
		},
		function (t, e) {
			t.exports = function () {
				for (var t = {}, e = 0; e < arguments.length; e++) {
					var n = arguments[e];
					for (var i in n) r.call(n, i) && (t[i] = n[i]);
				}
				return t;
			};
			var r = Object.prototype.hasOwnProperty;
		},
		function (t, e) {
			var r,
				n,
				i = (t.exports = {});
			function o() {
				throw new Error('setTimeout has not been defined');
			}
			function s() {
				throw new Error('clearTimeout has not been defined');
			}
			function a(t) {
				if (r === setTimeout) return setTimeout(t, 0);
				if ((r === o || !r) && setTimeout) return (r = setTimeout), setTimeout(t, 0);
				try {
					return r(t, 0);
				} catch (e) {
					try {
						return r.call(null, t, 0);
					} catch (e) {
						return r.call(this, t, 0);
					}
				}
			}
			!(function () {
				try {
					r = 'function' == typeof setTimeout ? setTimeout : o;
				} catch (t) {
					r = o;
				}
				try {
					n = 'function' == typeof clearTimeout ? clearTimeout : s;
				} catch (t) {
					n = s;
				}
			})();
			var u,
				l = [],
				c = !1,
				f = -1;
			function h() {
				c && u && ((c = !1), u.length ? (l = u.concat(l)) : (f = -1), l.length && d());
			}
			function d() {
				if (!c) {
					var t = a(h);
					c = !0;
					for (var e = l.length; e; ) {
						for (u = l, l = []; ++f < e; ) u && u[f].run();
						(f = -1), (e = l.length);
					}
					(u = null),
						(c = !1),
						(function (t) {
							if (n === clearTimeout) return clearTimeout(t);
							if ((n === s || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(t);
							try {
								n(t);
							} catch (e) {
								try {
									return n.call(null, t);
								} catch (e) {
									return n.call(this, t);
								}
							}
						})(t);
				}
			}
			function p(t, e) {
				(this.fun = t), (this.array = e);
			}
			function g() {}
			(i.nextTick = function (t) {
				var e = new Array(arguments.length - 1);
				if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
				l.push(new p(t, e)), 1 !== l.length || c || a(d);
			}),
				(p.prototype.run = function () {
					this.fun.apply(null, this.array);
				}),
				(i.title = 'browser'),
				(i.browser = !0),
				(i.env = {}),
				(i.argv = []),
				(i.version = ''),
				(i.versions = {}),
				(i.on = g),
				(i.addListener = g),
				(i.once = g),
				(i.off = g),
				(i.removeListener = g),
				(i.removeAllListeners = g),
				(i.emit = g),
				(i.prependListener = g),
				(i.prependOnceListener = g),
				(i.listeners = function (t) {
					return [];
				}),
				(i.binding = function (t) {
					throw new Error('process.binding is not supported');
				}),
				(i.cwd = function () {
					return '/';
				}),
				(i.chdir = function (t) {
					throw new Error('process.chdir is not supported');
				}),
				(i.umask = function () {
					return 0;
				});
		},
		function (t, e, r) {
			t.exports = { default: r(156), __esModule: !0 };
		},
		function (t, e, r) {
			r(52), r(44), (t.exports = r(165));
		},
		function (t, e, r) {
			'use strict';
			var n = r(158),
				i = r(91),
				o = r(34),
				s = r(30);
			(t.exports = r(67)(
				Array,
				'Array',
				function (t, e) {
					(this._t = s(t)), (this._i = 0), (this._k = e);
				},
				function () {
					var t = this._t,
						e = this._k,
						r = this._i++;
					return !t || r >= t.length
						? ((this._t = void 0), i(1))
						: i(0, 'keys' == e ? r : 'values' == e ? t[r] : [r, t[r]]);
				},
				'values',
			)),
				(o.Arguments = o.Array),
				n('keys'),
				n('values'),
				n('entries');
		},
		function (t, e) {
			t.exports = function () {};
		},
		function (t, e, r) {
			'use strict';
			var n = r(70),
				i = r(42),
				o = r(43),
				s = {};
			r(26)(s, r(9)('iterator'), function () {
				return this;
			}),
				(t.exports = function (t, e, r) {
					(t.prototype = n(s, { next: i(1, r) })), o(t, e + ' Iterator');
				});
		},
		function (t, e, r) {
			var n = r(15),
				i = r(23),
				o = r(35);
			t.exports = r(13)
				? Object.defineProperties
				: function (t, e) {
						i(t);
						for (var r, s = o(e), a = s.length, u = 0; a > u; ) n.f(t, (r = s[u++]), e[r]);
						return t;
				  };
		},
		function (t, e, r) {
			var n = r(30),
				i = r(53),
				o = r(162);
			t.exports = function (t) {
				return function (e, r, s) {
					var a,
						u = n(e),
						l = i(u.length),
						c = o(s, l);
					if (t && r != r) {
						for (; l > c; ) if ((a = u[c++]) != a) return !0;
					} else for (; l > c; c++) if ((t || c in u) && u[c] === r) return t || c || 0;
					return !t && -1;
				};
			};
		},
		function (t, e, r) {
			var n = r(71),
				i = Math.max,
				o = Math.min;
			t.exports = function (t, e) {
				return (t = n(t)) < 0 ? i(t + e, 0) : o(t, e);
			};
		},
		function (t, e, r) {
			var n = r(32),
				i = r(36),
				o = r(72)('IE_PROTO'),
				s = Object.prototype;
			t.exports =
				Object.getPrototypeOf ||
				function (t) {
					return (
						(t = i(t)),
						n(t, o)
							? t[o]
							: 'function' == typeof t.constructor && t instanceof t.constructor
							? t.constructor.prototype
							: t instanceof Object
							? s
							: null
					);
				};
		},
		function (t, e, r) {
			var n = r(71),
				i = r(66);
			t.exports = function (t) {
				return function (e, r) {
					var o,
						s,
						a = String(i(e)),
						u = n(r),
						l = a.length;
					return u < 0 || u >= l
						? t
							? ''
							: void 0
						: (o = a.charCodeAt(u)) < 55296 ||
						  o > 56319 ||
						  u + 1 === l ||
						  (s = a.charCodeAt(u + 1)) < 56320 ||
						  s > 57343
						? t
							? a.charAt(u)
							: o
						: t
						? a.slice(u, u + 2)
						: s - 56320 + ((o - 55296) << 10) + 65536;
				};
			};
		},
		function (t, e, r) {
			var n = r(55),
				i = r(9)('iterator'),
				o = r(34);
			t.exports = r(6).isIterable = function (t) {
				var e = Object(t);
				return void 0 !== e[i] || '@@iterator' in e || o.hasOwnProperty(n(e));
			};
		},
		function (t, e, r) {
			t.exports = { default: r(167), __esModule: !0 };
		},
		function (t, e, r) {
			r(52), r(44), (t.exports = r(168));
		},
		function (t, e, r) {
			var n = r(23),
				i = r(75);
			t.exports = r(6).getIterator = function (t) {
				var e = i(t);
				if ('function' != typeof e) throw TypeError(t + ' is not iterable!');
				return n(e.call(t));
			};
		},
		function (t, e, r) {
			t.exports = { default: r(170), __esModule: !0 };
		},
		function (t, e, r) {
			r(44), r(171), (t.exports = r(6).Array.from);
		},
		function (t, e, r) {
			'use strict';
			var n = r(25),
				i = r(10),
				o = r(36),
				s = r(97),
				a = r(98),
				u = r(53),
				l = r(172),
				c = r(75);
			i(
				i.S +
					i.F *
						!r(99)(function (t) {
							Array.from(t);
						}),
				'Array',
				{
					from: function (t) {
						var e,
							r,
							i,
							f,
							h = o(t),
							d = 'function' == typeof this ? this : Array,
							p = arguments.length,
							g = p > 1 ? arguments[1] : void 0,
							m = void 0 !== g,
							v = 0,
							y = c(h);
						if ((m && (g = n(g, p > 2 ? arguments[2] : void 0, 2)), null == y || (d == Array && a(y))))
							for (r = new d((e = u(h.length))); e > v; v++) l(r, v, m ? g(h[v], v) : h[v]);
						else
							for (f = y.call(h), r = new d(); !(i = f.next()).done; v++)
								l(r, v, m ? s(f, g, [i.value, v], !0) : i.value);
						return (r.length = v), r;
					},
				},
			);
		},
		function (t, e, r) {
			'use strict';
			var n = r(15),
				i = r(42);
			t.exports = function (t, e, r) {
				e in t ? n.f(t, e, i(0, r)) : (t[e] = r);
			};
		},
		function (t, e, r) {
			r(76), r(44), r(52), r(174), r(180), r(183), r(185), (t.exports = r(6).Map);
		},
		function (t, e, r) {
			'use strict';
			var n = r(175),
				i = r(102);
			t.exports = r(176)(
				'Map',
				function (t) {
					return function () {
						return t(this, arguments.length > 0 ? arguments[0] : void 0);
					};
				},
				{
					get: function (t) {
						var e = n.getEntry(i(this, 'Map'), t);
						return e && e.v;
					},
					set: function (t, e) {
						return n.def(i(this, 'Map'), 0 === t ? 0 : t, e);
					},
				},
				n,
				!0,
			);
		},
		function (t, e, r) {
			'use strict';
			var n = r(15).f,
				i = r(70),
				o = r(77),
				s = r(25),
				a = r(78),
				u = r(45),
				l = r(67),
				c = r(91),
				f = r(101),
				h = r(13),
				d = r(79).fastKey,
				p = r(102),
				g = h ? '_s' : 'size',
				m = function (t, e) {
					var r,
						n = d(e);
					if ('F' !== n) return t._i[n];
					for (r = t._f; r; r = r.n) if (r.k == e) return r;
				};
			t.exports = {
				getConstructor: function (t, e, r, l) {
					var c = t(function (t, n) {
						a(t, c, e, '_i'),
							(t._t = e),
							(t._i = i(null)),
							(t._f = void 0),
							(t._l = void 0),
							(t[g] = 0),
							null != n && u(n, r, t[l], t);
					});
					return (
						o(c.prototype, {
							clear: function () {
								for (var t = p(this, e), r = t._i, n = t._f; n; n = n.n)
									(n.r = !0), n.p && (n.p = n.p.n = void 0), delete r[n.i];
								(t._f = t._l = void 0), (t[g] = 0);
							},
							delete: function (t) {
								var r = p(this, e),
									n = m(r, t);
								if (n) {
									var i = n.n,
										o = n.p;
									delete r._i[n.i],
										(n.r = !0),
										o && (o.n = i),
										i && (i.p = o),
										r._f == n && (r._f = i),
										r._l == n && (r._l = o),
										r[g]--;
								}
								return !!n;
							},
							forEach: function (t) {
								p(this, e);
								for (
									var r, n = s(t, arguments.length > 1 ? arguments[1] : void 0, 3);
									(r = r ? r.n : this._f);

								)
									for (n(r.v, r.k, this); r && r.r; ) r = r.p;
							},
							has: function (t) {
								return !!m(p(this, e), t);
							},
						}),
						h &&
							n(c.prototype, 'size', {
								get: function () {
									return p(this, e)[g];
								},
							}),
						c
					);
				},
				def: function (t, e, r) {
					var n,
						i,
						o = m(t, e);
					return (
						o
							? (o.v = r)
							: ((t._l = o = { i: (i = d(e, !0)), k: e, v: r, p: (n = t._l), n: void 0, r: !1 }),
							  t._f || (t._f = o),
							  n && (n.n = o),
							  t[g]++,
							  'F' !== i && (t._i[i] = o)),
						t
					);
				},
				getEntry: m,
				setStrong: function (t, e, r) {
					l(
						t,
						e,
						function (t, r) {
							(this._t = p(t, e)), (this._k = r), (this._l = void 0);
						},
						function () {
							for (var t = this._k, e = this._l; e && e.r; ) e = e.p;
							return this._t && (this._l = e = e ? e.n : this._t._f)
								? c(0, 'keys' == t ? e.k : 'values' == t ? e.v : [e.k, e.v])
								: ((this._t = void 0), c(1));
						},
						r ? 'entries' : 'values',
						!r,
						!0,
					),
						f(e);
				},
			};
		},
		function (t, e, r) {
			'use strict';
			var n = r(8),
				i = r(10),
				o = r(79),
				s = r(31),
				a = r(26),
				u = r(77),
				l = r(45),
				c = r(78),
				f = r(16),
				h = r(43),
				d = r(15).f,
				p = r(177)(0),
				g = r(13);
			t.exports = function (t, e, r, m, v, y) {
				var b = n[t],
					x = b,
					w = v ? 'set' : 'add',
					M = x && x.prototype,
					S = {};
				return (
					g &&
					'function' == typeof x &&
					(y ||
						(M.forEach &&
							!s(function () {
								new x().entries().next();
							})))
						? ((x = e(function (e, r) {
								c(e, x, t, '_c'), (e._c = new b()), null != r && l(r, v, e[w], e);
						  })),
						  p('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (t) {
								var e = 'add' == t || 'set' == t;
								t in M &&
									(!y || 'clear' != t) &&
									a(x.prototype, t, function (r, n) {
										if ((c(this, x, t), !e && y && !f(r))) return 'get' == t && void 0;
										var i = this._c[t](0 === r ? 0 : r, n);
										return e ? this : i;
									});
						  }),
						  y ||
								d(x.prototype, 'size', {
									get: function () {
										return this._c.size;
									},
								}))
						: ((x = m.getConstructor(e, t, v, w)), u(x.prototype, r), (o.NEED = !0)),
					h(x, t),
					(S[t] = x),
					i(i.G + i.W + i.F, S),
					y || m.setStrong(x, t, v),
					x
				);
			};
		},
		function (t, e, r) {
			var n = r(25),
				i = r(65),
				o = r(36),
				s = r(53),
				a = r(178);
			t.exports = function (t, e) {
				var r = 1 == t,
					u = 2 == t,
					l = 3 == t,
					c = 4 == t,
					f = 6 == t,
					h = 5 == t || f,
					d = e || a;
				return function (e, a, p) {
					for (
						var g,
							m,
							v = o(e),
							y = i(v),
							b = n(a, p, 3),
							x = s(y.length),
							w = 0,
							M = r ? d(e, x) : u ? d(e, 0) : void 0;
						x > w;
						w++
					)
						if ((h || w in y) && ((m = b((g = y[w]), w, v)), t))
							if (r) M[w] = m;
							else if (m)
								switch (t) {
									case 3:
										return !0;
									case 5:
										return g;
									case 6:
										return w;
									case 2:
										M.push(g);
								}
							else if (c) return !1;
					return f ? -1 : l || c ? c : M;
				};
			};
		},
		function (t, e, r) {
			var n = r(179);
			t.exports = function (t, e) {
				return new (n(t))(e);
			};
		},
		function (t, e, r) {
			var n = r(16),
				i = r(103),
				o = r(9)('species');
			t.exports = function (t) {
				var e;
				return (
					i(t) &&
						('function' != typeof (e = t.constructor) || (e !== Array && !i(e.prototype)) || (e = void 0),
						n(e) && null === (e = e[o]) && (e = void 0)),
					void 0 === e ? Array : e
				);
			};
		},
		function (t, e, r) {
			var n = r(10);
			n(n.P + n.R, 'Map', { toJSON: r(181)('Map') });
		},
		function (t, e, r) {
			var n = r(55),
				i = r(182);
			t.exports = function (t) {
				return function () {
					if (n(this) != t) throw TypeError(t + "#toJSON isn't generic");
					return i(this);
				};
			};
		},
		function (t, e, r) {
			var n = r(45);
			t.exports = function (t, e) {
				var r = [];
				return n(t, !1, r.push, r, e), r;
			};
		},
		function (t, e, r) {
			r(184)('Map');
		},
		function (t, e, r) {
			'use strict';
			var n = r(10);
			t.exports = function (t) {
				n(n.S, t, {
					of: function () {
						for (var t = arguments.length, e = new Array(t); t--; ) e[t] = arguments[t];
						return new this(e);
					},
				});
			};
		},
		function (t, e, r) {
			r(186)('Map');
		},
		function (t, e, r) {
			'use strict';
			var n = r(10),
				i = r(41),
				o = r(25),
				s = r(45);
			t.exports = function (t) {
				n(n.S, t, {
					from: function (t) {
						var e,
							r,
							n,
							a,
							u = arguments[1];
						return (
							i(this),
							(e = void 0 !== u) && i(u),
							null == t
								? new this()
								: ((r = []),
								  e
										? ((n = 0),
										  (a = o(u, arguments[2], 2)),
										  s(t, !1, function (t) {
												r.push(a(t, n++));
										  }))
										: s(t, !1, r.push, r),
								  new this(r))
						);
					},
				});
			};
		},
		function (t, e, r) {
			r(188), (t.exports = r(6).Object.assign);
		},
		function (t, e, r) {
			var n = r(10);
			n(n.S + n.F, 'Object', { assign: r(189) });
		},
		function (t, e, r) {
			'use strict';
			var n = r(13),
				i = r(35),
				o = r(81),
				s = r(46),
				a = r(36),
				u = r(65),
				l = Object.assign;
			t.exports =
				!l ||
				r(31)(function () {
					var t = {},
						e = {},
						r = Symbol(),
						n = 'abcdefghijklmnopqrst';
					return (
						(t[r] = 7),
						n.split('').forEach(function (t) {
							e[t] = t;
						}),
						7 != l({}, t)[r] || Object.keys(l({}, e)).join('') != n
					);
				})
					? function (t, e) {
							for (var r = a(t), l = arguments.length, c = 1, f = o.f, h = s.f; l > c; )
								for (
									var d, p = u(arguments[c++]), g = f ? i(p).concat(f(p)) : i(p), m = g.length, v = 0;
									m > v;

								)
									(d = g[v++]), (n && !h.call(p, d)) || (r[d] = p[d]);
							return r;
					  }
					: l;
		},
		function (t, e, r) {
			t.exports = { default: r(191), __esModule: !0 };
		},
		function (t, e, r) {
			r(192);
			var n = r(6).Object;
			t.exports = function (t, e, r) {
				return n.defineProperty(t, e, r);
			};
		},
		function (t, e, r) {
			var n = r(10);
			n(n.S + n.F * !r(13), 'Object', { defineProperty: r(15).f });
		},
		function (t, e, r) {
			r(194), r(76), r(198), r(199), (t.exports = r(6).Symbol);
		},
		function (t, e, r) {
			'use strict';
			var n = r(8),
				i = r(32),
				o = r(13),
				s = r(10),
				a = r(93),
				u = r(79).KEY,
				l = r(31),
				c = r(73),
				f = r(43),
				h = r(54),
				d = r(9),
				p = r(107),
				g = r(82),
				m = r(195),
				v = r(103),
				y = r(23),
				b = r(16),
				x = r(36),
				w = r(30),
				M = r(69),
				S = r(42),
				A = r(70),
				_ = r(196),
				T = r(197),
				E = r(81),
				O = r(15),
				C = r(35),
				R = T.f,
				L = O.f,
				k = _.f,
				D = n.Symbol,
				j = n.JSON,
				P = j && j.stringify,
				q = d('_hidden'),
				I = d('toPrimitive'),
				N = {}.propertyIsEnumerable,
				F = c('symbol-registry'),
				U = c('symbols'),
				B = c('op-symbols'),
				z = Object.prototype,
				G = 'function' == typeof D && !!E.f,
				V = n.QObject,
				H = !V || !V.prototype || !V.prototype.findChild,
				$ =
					o &&
					l(function () {
						return (
							7 !=
							A(
								L({}, 'a', {
									get: function () {
										return L(this, 'a', { value: 7 }).a;
									},
								}),
							).a
						);
					})
						? function (t, e, r) {
								var n = R(z, e);
								n && delete z[e], L(t, e, r), n && t !== z && L(z, e, n);
						  }
						: L,
				W = function (t) {
					var e = (U[t] = A(D.prototype));
					return (e._k = t), e;
				},
				Y =
					G && 'symbol' == typeof D.iterator
						? function (t) {
								return 'symbol' == typeof t;
						  }
						: function (t) {
								return t instanceof D;
						  },
				X = function (t, e, r) {
					return (
						t === z && X(B, e, r),
						y(t),
						(e = M(e, !0)),
						y(r),
						i(U, e)
							? (r.enumerable
									? (i(t, q) && t[q][e] && (t[q][e] = !1), (r = A(r, { enumerable: S(0, !1) })))
									: (i(t, q) || L(t, q, S(1, {})), (t[q][e] = !0)),
							  $(t, e, r))
							: L(t, e, r)
					);
				},
				J = function (t, e) {
					y(t);
					for (var r, n = m((e = w(e))), i = 0, o = n.length; o > i; ) X(t, (r = n[i++]), e[r]);
					return t;
				},
				Q = function (t) {
					var e = N.call(this, (t = M(t, !0)));
					return (
						!(this === z && i(U, t) && !i(B, t)) &&
						(!(e || !i(this, t) || !i(U, t) || (i(this, q) && this[q][t])) || e)
					);
				},
				Z = function (t, e) {
					if (((t = w(t)), (e = M(e, !0)), t !== z || !i(U, e) || i(B, e))) {
						var r = R(t, e);
						return !r || !i(U, e) || (i(t, q) && t[q][e]) || (r.enumerable = !0), r;
					}
				},
				K = function (t) {
					for (var e, r = k(w(t)), n = [], o = 0; r.length > o; )
						i(U, (e = r[o++])) || e == q || e == u || n.push(e);
					return n;
				},
				tt = function (t) {
					for (var e, r = t === z, n = k(r ? B : w(t)), o = [], s = 0; n.length > s; )
						!i(U, (e = n[s++])) || (r && !i(z, e)) || o.push(U[e]);
					return o;
				};
			G ||
				(a(
					(D = function () {
						if (this instanceof D) throw TypeError('Symbol is not a constructor!');
						var t = h(arguments.length > 0 ? arguments[0] : void 0),
							e = function (r) {
								this === z && e.call(B, r),
									i(this, q) && i(this[q], t) && (this[q][t] = !1),
									$(this, t, S(1, r));
							};
						return o && H && $(z, t, { configurable: !0, set: e }), W(t);
					}).prototype,
					'toString',
					function () {
						return this._k;
					},
				),
				(T.f = Z),
				(O.f = X),
				(r(108).f = _.f = K),
				(r(46).f = Q),
				(E.f = tt),
				o && !r(40) && a(z, 'propertyIsEnumerable', Q, !0),
				(p.f = function (t) {
					return W(d(t));
				})),
				s(s.G + s.W + s.F * !G, { Symbol: D });
			for (
				var et = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
						',',
					),
					rt = 0;
				et.length > rt;

			)
				d(et[rt++]);
			for (var nt = C(d.store), it = 0; nt.length > it; ) g(nt[it++]);
			s(s.S + s.F * !G, 'Symbol', {
				for: function (t) {
					return i(F, (t += '')) ? F[t] : (F[t] = D(t));
				},
				keyFor: function (t) {
					if (!Y(t)) throw TypeError(t + ' is not a symbol!');
					for (var e in F) if (F[e] === t) return e;
				},
				useSetter: function () {
					H = !0;
				},
				useSimple: function () {
					H = !1;
				},
			}),
				s(s.S + s.F * !G, 'Object', {
					create: function (t, e) {
						return void 0 === e ? A(t) : J(A(t), e);
					},
					defineProperty: X,
					defineProperties: J,
					getOwnPropertyDescriptor: Z,
					getOwnPropertyNames: K,
					getOwnPropertySymbols: tt,
				});
			var ot = l(function () {
				E.f(1);
			});
			s(s.S + s.F * ot, 'Object', {
				getOwnPropertySymbols: function (t) {
					return E.f(x(t));
				},
			}),
				j &&
					s(
						s.S +
							s.F *
								(!G ||
									l(function () {
										var t = D();
										return '[null]' != P([t]) || '{}' != P({ a: t }) || '{}' != P(Object(t));
									})),
						'JSON',
						{
							stringify: function (t) {
								for (var e, r, n = [t], i = 1; arguments.length > i; ) n.push(arguments[i++]);
								if (((r = e = n[1]), (b(e) || void 0 !== t) && !Y(t)))
									return (
										v(e) ||
											(e = function (t, e) {
												if (('function' == typeof r && (e = r.call(this, t, e)), !Y(e)))
													return e;
											}),
										(n[1] = e),
										P.apply(j, n)
									);
							},
						},
					),
				D.prototype[I] || r(26)(D.prototype, I, D.prototype.valueOf),
				f(D, 'Symbol'),
				f(Math, 'Math', !0),
				f(n.JSON, 'JSON', !0);
		},
		function (t, e, r) {
			var n = r(35),
				i = r(81),
				o = r(46);
			t.exports = function (t) {
				var e = n(t),
					r = i.f;
				if (r) for (var s, a = r(t), u = o.f, l = 0; a.length > l; ) u.call(t, (s = a[l++])) && e.push(s);
				return e;
			};
		},
		function (t, e, r) {
			var n = r(30),
				i = r(108).f,
				o = {}.toString,
				s =
					'object' == typeof window && window && Object.getOwnPropertyNames
						? Object.getOwnPropertyNames(window)
						: [];
			t.exports.f = function (t) {
				return s && '[object Window]' == o.call(t)
					? (function (t) {
							try {
								return i(t);
							} catch (t) {
								return s.slice();
							}
					  })(t)
					: i(n(t));
			};
		},
		function (t, e, r) {
			var n = r(46),
				i = r(42),
				o = r(30),
				s = r(69),
				a = r(32),
				u = r(92),
				l = Object.getOwnPropertyDescriptor;
			e.f = r(13)
				? l
				: function (t, e) {
						if (((t = o(t)), (e = s(e, !0)), u))
							try {
								return l(t, e);
							} catch (t) {}
						if (a(t, e)) return i(!n.f.call(t, e), t[e]);
				  };
		},
		function (t, e, r) {
			r(82)('asyncIterator');
		},
		function (t, e, r) {
			r(82)('observable');
		},
		function (t, e, r) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }),
				(e.createNowTime = function () {
					!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					var t = null;
					t = Date.now
						? Date.now
						: function () {
								return new Date().getTime();
						  };
					return t;
				}),
				(e.formatDelay = function (t) {
					'number' == typeof t
						? (t = { delay: t })
						: 'entropy' in t && (t = { delay: t.entropy, isEntropy: !0 });
					return t;
				});
		},
		function (t, e) {
			var r = 4,
				n = 0.001,
				i = 1e-7,
				o = 10,
				s = 11,
				a = 1 / (s - 1),
				u = 'function' == typeof Float32Array;
			function l(t, e) {
				return 1 - 3 * e + 3 * t;
			}
			function c(t, e) {
				return 3 * e - 6 * t;
			}
			function f(t) {
				return 3 * t;
			}
			function h(t, e, r) {
				return ((l(e, r) * t + c(e, r)) * t + f(e)) * t;
			}
			function d(t, e, r) {
				return 3 * l(e, r) * t * t + 2 * c(e, r) * t + f(e);
			}
			function p(t) {
				return t;
			}
			t.exports = function (t, e, l, c) {
				if (!(0 <= t && t <= 1 && 0 <= l && l <= 1)) throw new Error('bezier x values must be in [0, 1] range');
				if (t === e && l === c) return p;
				for (var f = u ? new Float32Array(s) : new Array(s), g = 0; g < s; ++g) f[g] = h(g * a, t, l);
				function m(e) {
					for (var u = 0, c = 1, p = s - 1; c !== p && f[c] <= e; ++c) u += a;
					--c;
					var g = u + ((e - f[c]) / (f[c + 1] - f[c])) * a,
						m = d(g, t, l);
					return m >= n
						? (function (t, e, n, i) {
								for (var o = 0; o < r; ++o) {
									var s = d(e, n, i);
									if (0 === s) return e;
									e -= (h(e, n, i) - t) / s;
								}
								return e;
						  })(e, g, t, l)
						: 0 === m
						? g
						: (function (t, e, r, n, s) {
								var a,
									u,
									l = 0;
								do {
									(a = h((u = e + (r - e) / 2), n, s) - t) > 0 ? (r = u) : (e = u);
								} while (Math.abs(a) > i && ++l < o);
								return u;
						  })(e, u, u + a, t, l);
				}
				return function (t) {
					return 0 === t ? 0 : 1 === t ? 1 : h(m(t), e, c);
				};
			};
		},
		function (t, e, r) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 });
			var n = h(r(110)),
				i = h(r(210)),
				o = h(r(80)),
				s = h(r(104)),
				a = h(r(105)),
				u = h(r(106)),
				l = h(r(90)),
				c = r(214),
				f = r(83);
			function h(t) {
				return t && t.__esModule ? t : { default: t };
			}
			var d = (0, u.default)('timing'),
				p = (0, u.default)('keyframes'),
				g = (0, u.default)('initState'),
				m = (0, u.default)('readyDefer'),
				v = (0, u.default)('finishedDefer'),
				y = (0, u.default)('effects'),
				b = (0, u.default)('activeReadyTimer'),
				x = (0, u.default)('activeFinishTimer'),
				w = (0, u.default)('removeDefer'),
				M = {
					delay: 0,
					endDelay: 0,
					fill: 'auto',
					iterations: 1,
					playbackRate: 1,
					direction: 'normal',
					easing: 'linear',
					effect: null,
				},
				S = (function () {
					function t(e, r, n) {
						var a = this;
						if (((0, s.default)(this, t), Array.isArray(e))) {
							var u = [e[0], e, r];
							(e = u[0]), (r = u[1]), (n = u[2]);
						}
						'number' == typeof n && (n = { duration: n }),
							(this[d] = (0, o.default)({}, M, n)),
							(this[d].easing = (0, f.parseEasing)(this[d].easing)),
							(this[p] = (0, c.calculateFramesOffset)(r));
						var l = this[p][this[p].length - 1];
						(this[g] = {}),
							(0, i.default)(l).forEach(function (t) {
								Object.prototype.hasOwnProperty.call(e, t) &&
									'easing' !== t &&
									'offset' !== t &&
									(a[g][t] = e[t]);
							}),
							(this[p] = this[p].map(function (t) {
								return (0, o.default)({}, a[g], t);
							})),
							0 !== this[p][0].offset && this[p].unshift((0, o.default)({}, this[g], { offset: 0 })),
							l.offset < 1 && this[p].push((0, o.default)({}, l, { offset: 1 })),
							(this[y] = {}),
							(this.timeline = null);
					}
					return (
						(0, a.default)(t, [
							{
								key: 'pause',
								value: function () {
									this.timeline.playbackRate = 0;
								},
							},
							{
								key: b,
								value: function () {
									var t = this;
									this[m] &&
										!this[m].timerID &&
										(this.timeline.currentTime < 0
											? (this[m].timerID = this.timeline.setTimeout(
													function () {
														t[m].resolve(), delete t[m];
													},
													{ delay: -this.timeline.currentTime, heading: !1 },
											  ))
											: (this[m].timerID = this.timeline.setTimeout(
													function () {
														t[m].resolve(), delete t[m];
													},
													{ delay: 0, isEntropy: !0 },
											  )));
								},
							},
							{
								key: x,
								value: function () {
									var t = this,
										e = this[d],
										r = e.duration,
										n = e.iterations,
										i = e.endDelay,
										o = Math.ceil(r * n + i - this.timeline.currentTime) + 1;
									this[v] &&
										!this[v].timerID &&
										((this[v].timerID = this.timeline.setTimeout(
											function () {
												t[v].resolve(), t[w](m), t[w](v);
											},
											{ delay: o, heading: !1 },
										)),
										(this[v].reverseTimerID = this.timeline.setTimeout(
											function () {
												t[v].resolve(), t[w](m), t[w](v), (t.timeline = null);
											},
											{ delay: -this[d].delay - 1, heading: !1 },
										)));
								},
							},
							{
								key: 'play',
								value: function () {
									if (('finished' === this.playState && this.cancel(), 'idle' === this.playState)) {
										if (this.playbackRate <= 0) return;
										var t = this[d],
											e = t.delay,
											r = t.playbackRate,
											n = t.timeline;
										(this.timeline = new l.default({ originTime: e, playbackRate: r }, n)),
											this[b](),
											this[x]();
									} else
										'paused' === this.playState &&
											((this.timeline.playbackRate = this.playbackRate), this[b]());
								},
							},
							{
								key: w,
								value: function (t) {
									var e = this[t],
										r = this.timeline;
									e &&
										r &&
										(r.clearTimeout(e.timerID),
										e.reverseTimerID && r.clearTimeout(e.reverseTimerID)),
										delete this[t];
								},
							},
							{
								key: 'cancel',
								value: function () {
									this[w](m), this[w](v), (this.timeline = null);
								},
							},
							{
								key: 'finish',
								value: function () {
									this.timeline && (this.timeline.currentTime = 1 / 0 / this.playbackRate),
										this[w](m),
										this[w](v);
								},
							},
							{
								key: 'applyEffects',
								value: function (t) {
									return (0, o.default)(this[y], t);
								},
							},
							{
								key: 'playbackRate',
								get: function () {
									return this[d].playbackRate;
								},
								set: function (t) {
									this.timeline && (this.timeline.playbackRate = t), (this[d].playbackRate = t);
								},
							},
							{
								key: 'playState',
								get: function () {
									var t = this.timeline,
										e = this[d],
										r = e.iterations,
										n = e.duration,
										i = e.endDelay,
										o = 'running';
									if (null == t) o = 'idle';
									else if (t.paused) o = 'paused';
									else if (t.currentTime < 0) o = 'pending';
									else {
										var s = t.currentTime - r * n;
										s > 0 && s < i ? (o = 'pending') : s >= i && (o = 'finished');
									}
									return o;
								},
							},
							{
								key: 'progress',
								get: function () {
									if (!this.timeline) return 0;
									var t = this[d],
										e = t.duration,
										r = t.iterations,
										n = this.timeline,
										i = this.playState,
										o = void 0;
									if ('idle' === i) o = 0;
									else if ('paused' === i && n.currentTime < 0) o = 0;
									else if ('pending' === i)
										if (n.currentTime < 0) o = 0;
										else {
											var s = n.seekLocalTime(r * e);
											o = (0, c.periodicity)(s, e)[1] / e;
										}
									else
										('running' !== i && 'paused' !== i) ||
											(o = (0, c.periodicity)(n.currentTime, e)[1] / e);
									return 'finished' === i && (o = (0, c.periodicity)(r, 1)[1]), o;
								},
							},
							{
								key: 'frame',
								get: function () {
									var t = this.playState,
										e = this[g],
										r = this[d].fill;
									if ('idle' === t) return e;
									var n = this.timeline.currentTime,
										i = this[p].slice(0),
										o = (0, c.getProgress)(this.timeline, this[d], this.progress),
										s = o.p,
										a = o.inverted,
										u = e;
									return (
										n < 0 && 'pending' === t
											? ('backwards' !== r && 'both' !== r) || (u = a ? i[i.length - 1] : i[0])
											: (('pending' !== t && 'finished' !== t) ||
													'forwards' === r ||
													'both' === r) &&
											  (u = (0, c.getCurrentFrame)(this[d], i, this[y], s)),
										u
									);
								},
							},
							{
								key: 'timing',
								get: function () {
									return this[d];
								},
							},
							{
								key: 'baseTimeline',
								set: function (t) {
									this[d].timeline = t;
								},
								get: function () {
									return this[d].timeline;
								},
							},
							{
								key: 'ready',
								get: function () {
									return this[m]
										? this[m].promise
										: this.timeline && this.timeline.currentTime >= 0 && 'paused' !== this.playState
										? n.default.resolve()
										: ((this[m] = (0, c.defer)()),
										  this.timeline && this[b](),
										  this[m] ? this[m].promise : n.default.resolve());
								},
							},
							{
								key: 'finished',
								get: function () {
									return 'finished' === this.playState
										? n.default.resolve()
										: (this[v] || ((this[v] = (0, c.defer)()), this.timeline && this[x]()),
										  this[v].promise);
								},
							},
						]),
						t
					);
				})();
			e.default = S;
		},
		function (t, e, r) {
			r(76), r(44), r(52), r(204), r(208), r(209), (t.exports = r(6).Promise);
		},
		function (t, e, r) {
			'use strict';
			var n,
				i,
				o,
				s,
				a = r(40),
				u = r(8),
				l = r(25),
				c = r(55),
				f = r(10),
				h = r(16),
				d = r(41),
				p = r(78),
				g = r(45),
				m = r(111),
				v = r(112).set,
				y = r(206)(),
				b = r(84),
				x = r(113),
				w = r(207),
				M = r(114),
				S = u.TypeError,
				A = u.process,
				_ = A && A.versions,
				T = (_ && _.v8) || '',
				E = u.Promise,
				O = 'process' == c(A),
				C = function () {},
				R = (i = b.f),
				L = !!(function () {
					try {
						var t = E.resolve(1),
							e = ((t.constructor = {})[r(9)('species')] = function (t) {
								t(C, C);
							});
						return (
							(O || 'function' == typeof PromiseRejectionEvent) &&
							t.then(C) instanceof e &&
							0 !== T.indexOf('6.6') &&
							-1 === w.indexOf('Chrome/66')
						);
					} catch (t) {}
				})(),
				k = function (t) {
					var e;
					return !(!h(t) || 'function' != typeof (e = t.then)) && e;
				},
				D = function (t, e) {
					if (!t._n) {
						t._n = !0;
						var r = t._c;
						y(function () {
							for (
								var n = t._v,
									i = 1 == t._s,
									o = 0,
									s = function (e) {
										var r,
											o,
											s,
											a = i ? e.ok : e.fail,
											u = e.resolve,
											l = e.reject,
											c = e.domain;
										try {
											a
												? (i || (2 == t._h && q(t), (t._h = 1)),
												  !0 === a
														? (r = n)
														: (c && c.enter(), (r = a(n)), c && (c.exit(), (s = !0))),
												  r === e.promise
														? l(S('Promise-chain cycle'))
														: (o = k(r))
														? o.call(r, u, l)
														: u(r))
												: l(n);
										} catch (t) {
											c && !s && c.exit(), l(t);
										}
									};
								r.length > o;

							)
								s(r[o++]);
							(t._c = []), (t._n = !1), e && !t._h && j(t);
						});
					}
				},
				j = function (t) {
					v.call(u, function () {
						var e,
							r,
							n,
							i = t._v,
							o = P(t);
						if (
							(o &&
								((e = x(function () {
									O
										? A.emit('unhandledRejection', i, t)
										: (r = u.onunhandledrejection)
										? r({ promise: t, reason: i })
										: (n = u.console) && n.error && n.error('Unhandled promise rejection', i);
								})),
								(t._h = O || P(t) ? 2 : 1)),
							(t._a = void 0),
							o && e.e)
						)
							throw e.v;
					});
				},
				P = function (t) {
					return 1 !== t._h && 0 === (t._a || t._c).length;
				},
				q = function (t) {
					v.call(u, function () {
						var e;
						O
							? A.emit('rejectionHandled', t)
							: (e = u.onrejectionhandled) && e({ promise: t, reason: t._v });
					});
				},
				I = function (t) {
					var e = this;
					e._d ||
						((e._d = !0), ((e = e._w || e)._v = t), (e._s = 2), e._a || (e._a = e._c.slice()), D(e, !0));
				},
				N = function (t) {
					var e,
						r = this;
					if (!r._d) {
						(r._d = !0), (r = r._w || r);
						try {
							if (r === t) throw S("Promise can't be resolved itself");
							(e = k(t))
								? y(function () {
										var n = { _w: r, _d: !1 };
										try {
											e.call(t, l(N, n, 1), l(I, n, 1));
										} catch (t) {
											I.call(n, t);
										}
								  })
								: ((r._v = t), (r._s = 1), D(r, !1));
						} catch (t) {
							I.call({ _w: r, _d: !1 }, t);
						}
					}
				};
			L ||
				((E = function (t) {
					p(this, E, 'Promise', '_h'), d(t), n.call(this);
					try {
						t(l(N, this, 1), l(I, this, 1));
					} catch (t) {
						I.call(this, t);
					}
				}),
				((n = function (t) {
					(this._c = []),
						(this._a = void 0),
						(this._s = 0),
						(this._d = !1),
						(this._v = void 0),
						(this._h = 0),
						(this._n = !1);
				}).prototype = r(77)(E.prototype, {
					then: function (t, e) {
						var r = R(m(this, E));
						return (
							(r.ok = 'function' != typeof t || t),
							(r.fail = 'function' == typeof e && e),
							(r.domain = O ? A.domain : void 0),
							this._c.push(r),
							this._a && this._a.push(r),
							this._s && D(this, !1),
							r.promise
						);
					},
					catch: function (t) {
						return this.then(void 0, t);
					},
				})),
				(o = function () {
					var t = new n();
					(this.promise = t), (this.resolve = l(N, t, 1)), (this.reject = l(I, t, 1));
				}),
				(b.f = R = function (t) {
					return t === E || t === s ? new o(t) : i(t);
				})),
				f(f.G + f.W + f.F * !L, { Promise: E }),
				r(43)(E, 'Promise'),
				r(101)('Promise'),
				(s = r(6).Promise),
				f(f.S + f.F * !L, 'Promise', {
					reject: function (t) {
						var e = R(this);
						return (0, e.reject)(t), e.promise;
					},
				}),
				f(f.S + f.F * (a || !L), 'Promise', {
					resolve: function (t) {
						return M(a && this === s ? E : this, t);
					},
				}),
				f(
					f.S +
						f.F *
							!(
								L &&
								r(99)(function (t) {
									E.all(t).catch(C);
								})
							),
					'Promise',
					{
						all: function (t) {
							var e = this,
								r = R(e),
								n = r.resolve,
								i = r.reject,
								o = x(function () {
									var r = [],
										o = 0,
										s = 1;
									g(t, !1, function (t) {
										var a = o++,
											u = !1;
										r.push(void 0),
											s++,
											e.resolve(t).then(function (t) {
												u || ((u = !0), (r[a] = t), --s || n(r));
											}, i);
									}),
										--s || n(r);
								});
							return o.e && i(o.v), r.promise;
						},
						race: function (t) {
							var e = this,
								r = R(e),
								n = r.reject,
								i = x(function () {
									g(t, !1, function (t) {
										e.resolve(t).then(r.resolve, n);
									});
								});
							return i.e && n(i.v), r.promise;
						},
					},
				);
		},
		function (t, e) {
			t.exports = function (t, e, r) {
				var n = void 0 === r;
				switch (e.length) {
					case 0:
						return n ? t() : t.call(r);
					case 1:
						return n ? t(e[0]) : t.call(r, e[0]);
					case 2:
						return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
					case 3:
						return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
					case 4:
						return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3]);
				}
				return t.apply(r, e);
			};
		},
		function (t, e, r) {
			var n = r(8),
				i = r(112).set,
				o = n.MutationObserver || n.WebKitMutationObserver,
				s = n.process,
				a = n.Promise,
				u = 'process' == r(39)(s);
			t.exports = function () {
				var t,
					e,
					r,
					l = function () {
						var n, i;
						for (u && (n = s.domain) && n.exit(); t; ) {
							(i = t.fn), (t = t.next);
							try {
								i();
							} catch (n) {
								throw (t ? r() : (e = void 0), n);
							}
						}
						(e = void 0), n && n.enter();
					};
				if (u)
					r = function () {
						s.nextTick(l);
					};
				else if (!o || (n.navigator && n.navigator.standalone))
					if (a && a.resolve) {
						var c = a.resolve(void 0);
						r = function () {
							c.then(l);
						};
					} else
						r = function () {
							i.call(n, l);
						};
				else {
					var f = !0,
						h = document.createTextNode('');
					new o(l).observe(h, { characterData: !0 }),
						(r = function () {
							h.data = f = !f;
						});
				}
				return function (n) {
					var i = { fn: n, next: void 0 };
					e && (e.next = i), t || ((t = i), r()), (e = i);
				};
			};
		},
		function (t, e, r) {
			var n = r(8).navigator;
			t.exports = (n && n.userAgent) || '';
		},
		function (t, e, r) {
			'use strict';
			var n = r(10),
				i = r(6),
				o = r(8),
				s = r(111),
				a = r(114);
			n(n.P + n.R, 'Promise', {
				finally: function (t) {
					var e = s(this, i.Promise || o.Promise),
						r = 'function' == typeof t;
					return this.then(
						r
							? function (r) {
									return a(e, t()).then(function () {
										return r;
									});
							  }
							: t,
						r
							? function (r) {
									return a(e, t()).then(function () {
										throw r;
									});
							  }
							: t,
					);
				},
			});
		},
		function (t, e, r) {
			'use strict';
			var n = r(10),
				i = r(84),
				o = r(113);
			n(n.S, 'Promise', {
				try: function (t) {
					var e = i.f(this),
						r = o(t);
					return (r.e ? e.reject : e.resolve)(r.v), e.promise;
				},
			});
		},
		function (t, e, r) {
			t.exports = { default: r(211), __esModule: !0 };
		},
		function (t, e, r) {
			r(212), (t.exports = r(6).Object.keys);
		},
		function (t, e, r) {
			var n = r(36),
				i = r(35);
			r(213)('keys', function () {
				return function (t) {
					return i(n(t));
				};
			});
		},
		function (t, e, r) {
			var n = r(10),
				i = r(6),
				o = r(31);
			t.exports = function (t, e) {
				var r = (i.Object || {})[t] || Object[t],
					s = {};
				(s[t] = e(r)),
					n(
						n.S +
							n.F *
								o(function () {
									r(1);
								}),
						'Object',
						s,
					);
			};
		},
		function (t, e, r) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 });
			var n = l(r(64)),
				i = l(r(215)),
				o = l(r(80)),
				s = l(r(110));
			(e.defer = function () {
				var t = {};
				return (
					(t.promise = new s.default(function (e, r) {
						(t.resolve = e), (t.reject = r);
					})),
					t
				);
			}),
				(e.periodicity = function (t, e) {
					var r = Math.floor(t / e),
						n = t - r * e;
					0 === n && r > 0 && ((n = e), r--);
					return [r, n];
				}),
				(e.calculateFramesOffset = function (t) {
					var e = (t = t.slice(0))[0],
						r = t[t.length - 1];
					(r.offset = r.offset || 1), (e.offset = e.offset || 0);
					for (var n = 0, i = -1, s = 0; s < t.length; s++) {
						var u = t[s];
						if (null != u.offset) {
							var l = s - i;
							if (l > 1)
								for (var c = (u.offset - n) / l, f = 0; f < l - 1; f++)
									t[i + f + 1].offset = n + c * (f + 1);
							(n = u.offset), (i = s);
						}
						if ((null != u.easing && (u.easing = (0, a.parseEasing)(u.easing)), s > 0)) {
							var h = null != t[s].easing;
							(t[s] = (0, o.default)({}, t[s - 1], t[s])), h || delete t[s].easing;
						}
					}
					return t;
				}),
				(e.getProgress = function (t, e, r) {
					var n = t.currentTime,
						i = e.direction,
						o = e.duration,
						s = !1;
					if ('reverse' === i) (r = 1 - r), (s = !0);
					else if ('alternate' === i || 'alternate-reverse' === i) {
						var a = Math.floor(n / o);
						1 === r && a--, a % 2 ^ ('alternate-reverse' === i) && ((r = 1 - r), (s = !0));
					}
					return { p: r, inverted: s };
				}),
				(e.getCurrentFrame = function (t, e, r, n) {
					var i = t.easing,
						s = t.effect;
					s || (r = (0, o.default)({}, r, u.default));
					var a = {};
					n = i(n, e);
					for (var l = 1; l < e.length; l++) {
						var f = e[l],
							h = f.offset;
						if (h >= n || l === e.length - 1) {
							var d = e[l - 1],
								p = d.offset,
								g = d.easing,
								m = n;
							if (g) {
								var v = h - p;
								m = g((n - p) / v) * v + p;
							}
							a = s ? s(d, f, m, p, h) : c(d, f, r, m);
							break;
						}
					}
					return a;
				});
			var a = r(83),
				u = l(r(109));
			function l(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function c(t, e, r, o) {
				var s = {};
				return (
					(0, i.default)(e).forEach(function (i) {
						var a = (0, n.default)(i, 2),
							u = a[0],
							l = a[1];
						if ('offset' !== u && 'easing' !== u) {
							var c = (r[u] || r.default)(t[u], l, o, t.offset, e.offset);
							null != c && (s[u] = c);
						}
					}),
					s
				);
			}
		},
		function (t, e, r) {
			t.exports = { default: r(216), __esModule: !0 };
		},
		function (t, e, r) {
			r(217), (t.exports = r(6).Object.entries);
		},
		function (t, e, r) {
			var n = r(10),
				i = r(218)(!0);
			n(n.S, 'Object', {
				entries: function (t) {
					return i(t);
				},
			});
		},
		function (t, e, r) {
			var n = r(13),
				i = r(35),
				o = r(30),
				s = r(46).f;
			t.exports = function (t) {
				return function (e) {
					for (var r, a = o(e), u = i(a), l = u.length, c = 0, f = []; l > c; )
						(r = u[c++]), (n && !s.call(a, r)) || f.push(t ? [r, a[r]] : a[r]);
					return f;
				};
			};
		},
		function (t, e, r) {
			'use strict';
			t.exports = d;
			var n = r(220),
				i = r(47).falseFunc,
				o = r(234);
			function s(t) {
				return function (e, r, i) {
					return ((r = r || {}).adapter = r.adapter || n), t(e, r, i);
				};
			}
			var a = s(o),
				u = s(o.compileUnsafe);
			function l(t) {
				return function (e, r, i) {
					return (
						((i = i || {}).adapter = i.adapter || n),
						'function' != typeof e && (e = u(e, i, r)),
						e.shouldTestNextSiblings &&
							(r = (function (t, e) {
								Array.isArray(t) || (t = [t]);
								for (var r = t.slice(0), n = 0, i = t.length; n < i; n++) {
									var o = c(r[n], e);
									r.push.apply(r, o);
								}
								return r;
							})((i && i.context) || r, i.adapter)),
						(r = Array.isArray(r) ? i.adapter.removeSubsets(r) : i.adapter.getChildren(r)),
						t(e, r, i)
					);
				};
			}
			function c(t, e) {
				var r = e.getSiblings(t);
				if (!Array.isArray(r)) return [];
				for (r = r.slice(0); r.shift() !== t; );
				return r;
			}
			var f = l(function (t, e, r) {
					return t !== i && e && 0 !== e.length ? r.adapter.findAll(t, e) : [];
				}),
				h = l(function (t, e, r) {
					return t !== i && e && 0 !== e.length ? r.adapter.findOne(t, e) : null;
				});
			function d(t, e, r) {
				return f(t, e, r);
			}
			(d.compile = a),
				(d.filters = o.Pseudos.filters),
				(d.pseudos = o.Pseudos.pseudos),
				(d.selectAll = f),
				(d.selectOne = h),
				(d.is = function (t, e, r) {
					return ((r = r || {}).adapter = r.adapter || n), ('function' == typeof e ? e : a(e, r))(t);
				}),
				(d.parse = a),
				(d.iterate = f),
				(d._compileUnsafe = u),
				(d._compileToken = o.compileToken);
		},
		function (t, e, r) {
			var n = t.exports;
			[r(221), r(229), r(230), r(231), r(232), r(233)].forEach(function (t) {
				Object.keys(t).forEach(function (e) {
					n[e] = t[e].bind(n);
				});
			});
		},
		function (t, e, r) {
			var n = r(85),
				i = r(222),
				o = n.isTag;
			t.exports = {
				getInnerHTML: function (t, e) {
					return t.children
						? t.children
								.map(function (t) {
									return i(t, e);
								})
								.join('')
						: '';
				},
				getOuterHTML: i,
				getText: function t(e) {
					return Array.isArray(e)
						? e.map(t).join('')
						: o(e)
						? 'br' === e.name
							? '\n'
							: t(e.children)
						: e.type === n.CDATA
						? t(e.children)
						: e.type === n.Text
						? e.data
						: '';
				},
			};
		},
		function (t, e, r) {
			var n = r(223),
				i = r(224),
				o = r(228);
			(o.elementNames.__proto__ = null), (o.attributeNames.__proto__ = null);
			var s = {
				__proto__: null,
				style: !0,
				script: !0,
				xmp: !0,
				iframe: !0,
				noembed: !0,
				noframes: !0,
				plaintext: !0,
				noscript: !0,
			};
			var a = {
					__proto__: null,
					area: !0,
					base: !0,
					basefont: !0,
					br: !0,
					col: !0,
					command: !0,
					embed: !0,
					frame: !0,
					hr: !0,
					img: !0,
					input: !0,
					isindex: !0,
					keygen: !0,
					link: !0,
					meta: !0,
					param: !0,
					source: !0,
					track: !0,
					wbr: !0,
				},
				u = (t.exports = function (t, e) {
					Array.isArray(t) || t.cheerio || (t = [t]), (e = e || {});
					for (var r = '', i = 0; i < t.length; i++) {
						var o = t[i];
						'root' === o.type
							? (r += u(o.children, e))
							: n.isTag(o)
							? (r += c(o, e))
							: o.type === n.Directive
							? (r += f(o))
							: o.type === n.Comment
							? (r += p(o))
							: o.type === n.CDATA
							? (r += d(o))
							: (r += h(o, e));
					}
					return r;
				});
			const l = ['mi', 'mo', 'mn', 'ms', 'mtext', 'annotation-xml', 'foreignObject', 'desc', 'title'];
			function c(t, e) {
				'foreign' === e.xmlMode &&
					((t.name = o.elementNames[t.name] || t.name),
					t.parent && l.indexOf(t.parent.name) >= 0 && (e = Object.assign({}, e, { xmlMode: !1 }))),
					!e.xmlMode &&
						['svg', 'math'].indexOf(t.name) >= 0 &&
						(e = Object.assign({}, e, { xmlMode: 'foreign' }));
				var r = '<' + t.name,
					n = (function (t, e) {
						if (t) {
							var r,
								n = '';
							for (var s in t)
								(r = t[s]),
									n && (n += ' '),
									'foreign' === e.xmlMode && (s = o.attributeNames[s] || s),
									(n += s),
									((null !== r && '' !== r) || e.xmlMode) &&
										(n +=
											'="' +
											(e.decodeEntities ? i.encodeXML(r) : r.replace(/\"/g, '&quot;')) +
											'"');
							return n;
						}
					})(t.attribs, e);
				return (
					n && (r += ' ' + n),
					!e.xmlMode || (t.children && 0 !== t.children.length)
						? ((r += '>'),
						  t.children && (r += u(t.children, e)),
						  (a[t.name] && !e.xmlMode) || (r += '</' + t.name + '>'))
						: (r += '/>'),
					r
				);
			}
			function f(t) {
				return '<' + t.data + '>';
			}
			function h(t, e) {
				var r = t.data || '';
				return !e.decodeEntities || (t.parent && t.parent.name in s) || (r = i.encodeXML(r)), r;
			}
			function d(t) {
				return '<![CDATA[' + t.children[0].data + ']]>';
			}
			function p(t) {
				return '\x3c!--' + t.data + '--\x3e';
			}
		},
		function (t, e, r) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 }),
				(e.isTag = function (t) {
					return 'tag' === t.type || 'script' === t.type || 'style' === t.type;
				}),
				(e.Text = 'text'),
				(e.Directive = 'directive'),
				(e.Comment = 'comment'),
				(e.Script = 'script'),
				(e.Style = 'style'),
				(e.Tag = 'tag'),
				(e.CDATA = 'cdata'),
				(e.Doctype = 'doctype');
		},
		function (t, e, r) {
			'use strict';
			Object.defineProperty(e, '__esModule', { value: !0 });
			var n = r(116),
				i = r(119);
			(e.decode = function (t, e) {
				return (!e || e <= 0 ? n.decodeXML : n.decodeHTML)(t);
			}),
				(e.decodeStrict = function (t, e) {
					return (!e || e <= 0 ? n.decodeXML : n.decodeHTMLStrict)(t);
				}),
				(e.encode = function (t, e) {
					return (!e || e <= 0 ? i.encodeXML : i.encodeHTML)(t);
				});
			var o = r(119);
			(e.encodeXML = o.encodeXML),
				(e.encodeHTML = o.encodeHTML),
				(e.escape = o.escape),
				(e.encodeHTML4 = o.encodeHTML),
				(e.encodeHTML5 = o.encodeHTML);
			var s = r(116);
			(e.decodeXML = s.decodeXML),
				(e.decodeHTML = s.decodeHTML),
				(e.decodeHTMLStrict = s.decodeHTMLStrict),
				(e.decodeHTML4 = s.decodeHTML),
				(e.decodeHTML5 = s.decodeHTML),
				(e.decodeHTML4Strict = s.decodeHTMLStrict),
				(e.decodeHTML5Strict = s.decodeHTMLStrict),
				(e.decodeXMLStrict = s.decodeXML);
		},
		function (t) {
			t.exports = JSON.parse(
				'{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}',
			);
		},
		function (t, e, r) {
			'use strict';
			var n =
				(this && this.__importDefault) ||
				function (t) {
					return t && t.__esModule ? t : { default: t };
				};
			Object.defineProperty(e, '__esModule', { value: !0 });
			var i = n(r(227));
			e.default = function (t) {
				if ((t >= 55296 && t <= 57343) || t > 1114111) return '�';
				t in i.default && (t = i.default[t]);
				var e = '';
				return (
					t > 65535 &&
						((t -= 65536),
						(e += String.fromCharCode(((t >>> 10) & 1023) | 55296)),
						(t = 56320 | (1023 & t))),
					(e += String.fromCharCode(t))
				);
			};
		},
		function (t) {
			t.exports = JSON.parse(
				'{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}',
			);
		},
		function (t) {
			t.exports = JSON.parse(
				'{"elementNames":{"altglyph":"altGlyph","altglyphdef":"altGlyphDef","altglyphitem":"altGlyphItem","animatecolor":"animateColor","animatemotion":"animateMotion","animatetransform":"animateTransform","clippath":"clipPath","feblend":"feBlend","fecolormatrix":"feColorMatrix","fecomponenttransfer":"feComponentTransfer","fecomposite":"feComposite","feconvolvematrix":"feConvolveMatrix","fediffuselighting":"feDiffuseLighting","fedisplacementmap":"feDisplacementMap","fedistantlight":"feDistantLight","fedropshadow":"feDropShadow","feflood":"feFlood","fefunca":"feFuncA","fefuncb":"feFuncB","fefuncg":"feFuncG","fefuncr":"feFuncR","fegaussianblur":"feGaussianBlur","feimage":"feImage","femerge":"feMerge","femergenode":"feMergeNode","femorphology":"feMorphology","feoffset":"feOffset","fepointlight":"fePointLight","fespecularlighting":"feSpecularLighting","fespotlight":"feSpotLight","fetile":"feTile","feturbulence":"feTurbulence","foreignobject":"foreignObject","glyphref":"glyphRef","lineargradient":"linearGradient","radialgradient":"radialGradient","textpath":"textPath"},"attributeNames":{"definitionurl":"definitionURL","attributename":"attributeName","attributetype":"attributeType","basefrequency":"baseFrequency","baseprofile":"baseProfile","calcmode":"calcMode","clippathunits":"clipPathUnits","diffuseconstant":"diffuseConstant","edgemode":"edgeMode","filterunits":"filterUnits","glyphref":"glyphRef","gradienttransform":"gradientTransform","gradientunits":"gradientUnits","kernelmatrix":"kernelMatrix","kernelunitlength":"kernelUnitLength","keypoints":"keyPoints","keysplines":"keySplines","keytimes":"keyTimes","lengthadjust":"lengthAdjust","limitingconeangle":"limitingConeAngle","markerheight":"markerHeight","markerunits":"markerUnits","markerwidth":"markerWidth","maskcontentunits":"maskContentUnits","maskunits":"maskUnits","numoctaves":"numOctaves","pathlength":"pathLength","patterncontentunits":"patternContentUnits","patterntransform":"patternTransform","patternunits":"patternUnits","pointsatx":"pointsAtX","pointsaty":"pointsAtY","pointsatz":"pointsAtZ","preservealpha":"preserveAlpha","preserveaspectratio":"preserveAspectRatio","primitiveunits":"primitiveUnits","refx":"refX","refy":"refY","repeatcount":"repeatCount","repeatdur":"repeatDur","requiredextensions":"requiredExtensions","requiredfeatures":"requiredFeatures","specularconstant":"specularConstant","specularexponent":"specularExponent","spreadmethod":"spreadMethod","startoffset":"startOffset","stddeviation":"stdDeviation","stitchtiles":"stitchTiles","surfacescale":"surfaceScale","systemlanguage":"systemLanguage","tablevalues":"tableValues","targetx":"targetX","targety":"targetY","textlength":"textLength","viewbox":"viewBox","viewtarget":"viewTarget","xchannelselector":"xChannelSelector","ychannelselector":"yChannelSelector","zoomandpan":"zoomAndPan"}}',
			);
		},
		function (t, e) {
			var r = (e.getChildren = function (t) {
					return t.children;
				}),
				n = (e.getParent = function (t) {
					return t.parent;
				});
			(e.getSiblings = function (t) {
				var e = n(t);
				return e ? r(e) : [t];
			}),
				(e.getAttributeValue = function (t, e) {
					return t.attribs && t.attribs[e];
				}),
				(e.hasAttrib = function (t, e) {
					return !!t.attribs && hasOwnProperty.call(t.attribs, e);
				}),
				(e.getName = function (t) {
					return t.name;
				});
		},
		function (t, e) {
			(e.removeElement = function (t) {
				if ((t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.parent)) {
					var e = t.parent.children;
					e.splice(e.lastIndexOf(t), 1);
				}
			}),
				(e.replaceElement = function (t, e) {
					var r = (e.prev = t.prev);
					r && (r.next = e);
					var n = (e.next = t.next);
					n && (n.prev = e);
					var i = (e.parent = t.parent);
					if (i) {
						var o = i.children;
						o[o.lastIndexOf(t)] = e;
					}
				}),
				(e.appendChild = function (t, e) {
					if (((e.parent = t), 1 !== t.children.push(e))) {
						var r = t.children[t.children.length - 2];
						(r.next = e), (e.prev = r), (e.next = null);
					}
				}),
				(e.append = function (t, e) {
					var r = t.parent,
						n = t.next;
					if (((e.next = n), (e.prev = t), (t.next = e), (e.parent = r), n)) {
						if (((n.prev = e), r)) {
							var i = r.children;
							i.splice(i.lastIndexOf(n), 0, e);
						}
					} else r && r.children.push(e);
				}),
				(e.prepend = function (t, e) {
					var r = t.parent;
					if (r) {
						var n = r.children;
						n.splice(n.lastIndexOf(t), 0, e);
					}
					t.prev && (t.prev.next = e), (e.parent = r), (e.prev = t.prev), (e.next = t), (t.prev = e);
				});
		},
		function (t, e, r) {
			var n = r(85).isTag;
			function i(t, e, r, n) {
				for (
					var o, s = [], a = 0, u = e.length;
					a < u &&
					!(t(e[a]) && (s.push(e[a]), --n <= 0)) &&
					((o = e[a].children),
					!(r && o && o.length > 0 && ((o = i(t, o, r, n)), (s = s.concat(o)), (n -= o.length) <= 0)));
					a++
				);
				return s;
			}
			t.exports = {
				filter: function (t, e, r, n) {
					Array.isArray(e) || (e = [e]);
					('number' == typeof n && isFinite(n)) || (n = 1 / 0);
					return i(t, e, !1 !== r, n);
				},
				find: i,
				findOneChild: function (t, e) {
					for (var r = 0, n = e.length; r < n; r++) if (t(e[r])) return e[r];
					return null;
				},
				findOne: function t(e, r) {
					for (var i = null, o = 0, s = r.length; o < s && !i; o++)
						n(r[o]) && (e(r[o]) ? (i = r[o]) : r[o].children.length > 0 && (i = t(e, r[o].children)));
					return i;
				},
				existsOne: function t(e, r) {
					for (var i = 0, o = r.length; i < o; i++)
						if (n(r[i]) && (e(r[i]) || (r[i].children.length > 0 && t(e, r[i].children)))) return !0;
					return !1;
				},
				findAll: function (t, e) {
					var r = [],
						i = e.slice();
					for (; i.length; ) {
						var o = i.shift();
						n(o) &&
							(o.children && o.children.length > 0 && i.unshift.apply(i, o.children), t(o) && r.push(o));
					}
					return r;
				},
			};
		},
		function (t, e, r) {
			var n = r(85),
				i = (e.isTag = n.isTag);
			e.testElement = function (t, e) {
				for (var r in t)
					if (t.hasOwnProperty(r)) {
						if ('tag_name' === r) {
							if (!i(e) || !t.tag_name(e.name)) return !1;
						} else if ('tag_type' === r) {
							if (!t.tag_type(e.type)) return !1;
						} else if ('tag_contains' === r) {
							if (i(e) || !t.tag_contains(e.data)) return !1;
						} else if (!e.attribs || !t[r](e.attribs[r])) return !1;
					} else;
				return !0;
			};
			var o = {
				tag_name: function (t) {
					return 'function' == typeof t
						? function (e) {
								return i(e) && t(e.name);
						  }
						: '*' === t
						? i
						: function (e) {
								return i(e) && e.name === t;
						  };
				},
				tag_type: function (t) {
					return 'function' == typeof t
						? function (e) {
								return t(e.type);
						  }
						: function (e) {
								return e.type === t;
						  };
				},
				tag_contains: function (t) {
					return 'function' == typeof t
						? function (e) {
								return !i(e) && t(e.data);
						  }
						: function (e) {
								return !i(e) && e.data === t;
						  };
				},
			};
			function s(t, e) {
				return 'function' == typeof e
					? function (r) {
							return r.attribs && e(r.attribs[t]);
					  }
					: function (r) {
							return r.attribs && r.attribs[t] === e;
					  };
			}
			function a(t, e) {
				return function (r) {
					return t(r) || e(r);
				};
			}
			(e.getElements = function (t, e, r, n) {
				var i = Object.keys(t).map(function (e) {
					var r = t[e];
					return e in o ? o[e](r) : s(e, r);
				});
				return 0 === i.length ? [] : this.filter(i.reduce(a), e, r, n);
			}),
				(e.getElementById = function (t, e, r) {
					return Array.isArray(e) || (e = [e]), this.findOne(s('id', t), e, !1 !== r);
				}),
				(e.getElementsByTagName = function (t, e, r, n) {
					return this.filter(o.tag_name(t), e, r, n);
				}),
				(e.getElementsByTagType = function (t, e, r, n) {
					return this.filter(o.tag_type(t), e, r, n);
				});
		},
		function (t, e) {
			e.removeSubsets = function (t) {
				for (var e, r, n, i = t.length; --i > -1; ) {
					for (e = r = t[i], t[i] = null, n = !0; r; ) {
						if (t.indexOf(r) > -1) {
							(n = !1), t.splice(i, 1);
							break;
						}
						r = r.parent;
					}
					n && (t[i] = e);
				}
				return t;
			};
			var r = 1,
				n = 2,
				i = 4,
				o = 8,
				s = 16,
				a = (e.compareDocumentPosition = function (t, e) {
					var a,
						u,
						l,
						c,
						f,
						h,
						d = [],
						p = [];
					if (t === e) return 0;
					for (a = t; a; ) d.unshift(a), (a = a.parent);
					for (a = e; a; ) p.unshift(a), (a = a.parent);
					for (h = 0; d[h] === p[h]; ) h++;
					return 0 === h
						? r
						: ((l = (u = d[h - 1]).children),
						  (c = d[h]),
						  (f = p[h]),
						  l.indexOf(c) > l.indexOf(f) ? (u === e ? i | s : i) : u === t ? n | o : n);
				});
			e.uniqueSort = function (t) {
				var e,
					r,
					o = t.length;
				for (t = t.slice(); --o > -1; ) (e = t[o]), (r = t.indexOf(e)) > -1 && r < o && t.splice(o, 1);
				return (
					t.sort(function (t, e) {
						var r = a(t, e);
						return r & n ? -1 : r & i ? 1 : 0;
					}),
					t
				);
			};
		},
		function (t, e, r) {
			t.exports = h;
			var n = r(235),
				i = r(47),
				o = r(236),
				s = r(120),
				a = r(237),
				u = r(122),
				l = i.trueFunc,
				c = i.falseFunc,
				f = u.filters;
			function h(t, e, r) {
				return d(p(t, e, r), e);
			}
			function d(t, e) {
				var r = e.adapter;
				return function (e) {
					return r.isTag(e) && t(e);
				};
			}
			function p(t, e, r) {
				return x(n(t, e), e, r);
			}
			function g(t) {
				return (
					'pseudo' === t.type &&
					('scope' === t.name ||
						(Array.isArray(t.data) &&
							t.data.some(function (t) {
								return t.some(g);
							})))
				);
			}
			var m = { type: 'descendant' },
				v = { type: '_flexibleDescendant' },
				y = { type: 'pseudo', name: 'scope' },
				b = {};
			function x(t, e, r) {
				(t = t.filter(function (t) {
					return t.length > 0;
				})).forEach(o);
				var n = Array.isArray(r);
				(r = (e && e.context) || r) && !n && (r = [r]),
					(function (t, e, r) {
						var n = e.adapter,
							i =
								!!r &&
								!!r.length &&
								r.every(function (t) {
									return t === b || !!n.getParent(t);
								});
						t.forEach(function (t) {
							if (t.length > 0 && w(t[0]) && 'descendant' !== t[0].type);
							else {
								if (!i || g(t)) return;
								t.unshift(m);
							}
							t.unshift(y);
						});
					})(t, e, r);
				var i = !1,
					s = t
						.map(function (t) {
							if (t[0] && t[1] && 'scope' === t[0].name) {
								var o = t[1].type;
								n && 'descendant' === o
									? (t[1] = v)
									: ('adjacent' !== o && 'sibling' !== o) || (i = !0);
							}
							return (function (t, e, r) {
								return t.reduce(function (t, n) {
									if (t === c) return t;
									if (!(n.type in a))
										throw new Error('Rule type ' + n.type + ' is not supported by css-select');
									return a[n.type](t, n, e, r);
								}, (e && e.rootFunc) || l);
							})(t, e, r);
						})
						.reduce(M, c);
				return (s.shouldTestNextSiblings = i), s;
			}
			function w(t) {
				return s[t.type] < 0;
			}
			function M(t, e) {
				return e === c || t === l
					? t
					: t === c || e === l
					? e
					: function (r) {
							return t(r) || e(r);
					  };
			}
			function S(t) {
				return t.some(w);
			}
			(f.not = function (t, e, r, n) {
				var i = { xmlMode: !(!r || !r.xmlMode), strict: !(!r || !r.strict), adapter: r.adapter };
				if (i.strict && (e.length > 1 || e.some(S)))
					throw new Error("complex selectors in :not aren't allowed in strict mode");
				var o = x(e, i, n);
				return o === c
					? t
					: o === l
					? c
					: function (e) {
							return !o(e) && t(e);
					  };
			}),
				(f.has = function (t, e, r) {
					var n = r.adapter,
						i = { xmlMode: !(!r || !r.xmlMode), strict: !(!r || !r.strict), adapter: n },
						o = e.some(S) ? [b] : null,
						s = x(e, i, o);
					return s === c
						? c
						: s === l
						? function (e) {
								return n.getChildren(e).some(n.isTag) && t(e);
						  }
						: ((s = d(s, r)),
						  o
								? function (e) {
										return t(e) && ((o[0] = e), n.existsOne(s, n.getChildren(e)));
								  }
								: function (e) {
										return t(e) && n.existsOne(s, n.getChildren(e));
								  });
				}),
				(f.matches = function (t, e, r, n) {
					return x(
						e,
						{ xmlMode: !(!r || !r.xmlMode), strict: !(!r || !r.strict), rootFunc: t, adapter: r.adapter },
						n,
					);
				}),
				(h.compileToken = x),
				(h.compileUnsafe = p),
				(h.Pseudos = u);
		},
		function (t, e, r) {
			'use strict';
			t.exports = function (t, e) {
				var r = [];
				if (
					'' !==
					(t = (function t(e, r, i) {
						var h,
							m,
							v,
							y,
							b = [],
							x = !1;
						function w() {
							var t = r.match(n)[0];
							return (r = r.substr(t.length)), d(t);
						}
						function M(t) {
							for (; p(r.charAt(t)); ) t++;
							r = r.substr(t);
						}
						function S(t) {
							for (var e = 0; '\\' === r.charAt(--t); ) e++;
							return 1 == (1 & e);
						}
						M(0);
						for (; '' !== r; )
							if (p((m = r.charAt(0)))) (x = !0), M(1);
							else if (m in a) b.push({ type: a[m] }), (x = !1), M(1);
							else if (',' === m) {
								if (0 === b.length) throw new SyntaxError('empty sub-selector');
								e.push(b), (b = []), (x = !1), M(1);
							} else if ((x && (b.length > 0 && b.push({ type: 'descendant' }), (x = !1)), '*' === m))
								(r = r.substr(1)), b.push({ type: 'universal' });
							else if (m in u)
								(r = r.substr(1)),
									b.push({
										type: 'attribute',
										name: u[m][0],
										action: u[m][1],
										value: w(),
										ignoreCase: !1,
									});
							else if ('[' === m) {
								if (((r = r.substr(1)), !(h = r.match(o))))
									throw new SyntaxError('Malformed attribute selector: ' + r);
								(r = r.substr(h[0].length)),
									(v = d(h[1])),
									(i && ('lowerCaseAttributeNames' in i ? !i.lowerCaseAttributeNames : i.xmlMode)) ||
										(v = v.toLowerCase()),
									b.push({
										type: 'attribute',
										name: v,
										action: s[h[2]],
										value: d(h[4] || h[5] || ''),
										ignoreCase: !!h[6],
									});
							} else if (':' === m) {
								if (':' === r.charAt(1)) {
									(r = r.substr(2)), b.push({ type: 'pseudo-element', name: w().toLowerCase() });
									continue;
								}
								if (((r = r.substr(1)), (v = w().toLowerCase()), (h = null), '(' === r.charAt(0)))
									if (v in l) {
										var A = (y = r.charAt(1)) in f;
										if (((r = r.substr(A + 1)), (r = t((h = []), r, i)), A)) {
											if (r.charAt(0) !== y) throw new SyntaxError('unmatched quotes in :' + v);
											r = r.substr(1);
										}
										if (')' !== r.charAt(0))
											throw new SyntaxError('missing closing parenthesis in :' + v + ' ' + r);
										r = r.substr(1);
									} else {
										for (var _ = 1, T = 1; T > 0 && _ < r.length; _++)
											'(' !== r.charAt(_) || S(_) ? ')' !== r.charAt(_) || S(_) || T-- : T++;
										if (T) throw new SyntaxError('parenthesis not matched');
										(h = r.substr(1, _ - 2)),
											(r = r.substr(_)),
											v in c &&
												((y = h.charAt(0)) === h.slice(-1) && y in f && (h = h.slice(1, -1)),
												(h = d(h)));
									}
								b.push({ type: 'pseudo', name: v, data: h });
							} else {
								if (!n.test(r))
									return b.length && 'descendant' === b[b.length - 1].type && b.pop(), g(e, b), r;
								(v = w()),
									(i && ('lowerCaseTags' in i ? !i.lowerCaseTags : i.xmlMode)) ||
										(v = v.toLowerCase()),
									b.push({ type: 'tag', name: v });
							}
						return g(e, b), r;
					})(r, t + '', e))
				)
					throw new SyntaxError('Unmatched selector: ' + t);
				return r;
			};
			var n = /^(?:\\.|[\w\-\u00b0-\uFFFF])+/,
				i = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
				o = /^\s*((?:\\.|[\w\u00b0-\uFFFF\-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00b0-\uFFFF\-])*)|)|)\s*(i)?\]/,
				s = {
					__proto__: null,
					undefined: 'exists',
					'': 'equals',
					'~': 'element',
					'^': 'start',
					$: 'end',
					'*': 'any',
					'!': 'not',
					'|': 'hyphen',
				},
				a = { __proto__: null, '>': 'child', '<': 'parent', '~': 'sibling', '+': 'adjacent' },
				u = { __proto__: null, '#': ['id', 'equals'], '.': ['class', 'element'] },
				l = { __proto__: null, has: !0, not: !0, matches: !0 },
				c = { __proto__: null, contains: !0, icontains: !0 },
				f = { __proto__: null, '"': !0, "'": !0 };
			function h(t, e, r) {
				var n = '0x' + e - 65536;
				return n != n || r
					? e
					: n < 0
					? String.fromCharCode(n + 65536)
					: String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
			}
			function d(t) {
				return t.replace(i, h);
			}
			function p(t) {
				return ' ' === t || '\n' === t || '\t' === t || '\f' === t || '\r' === t;
			}
			function g(t, e) {
				if (t.length > 0 && 0 === e.length) throw new SyntaxError('empty sub-selector');
				t.push(e);
			}
		},
		function (t, e, r) {
			t.exports = function (t) {
				for (var e = t.map(o), r = 1; r < t.length; r++) {
					var n = e[r];
					if (!(n < 0))
						for (var i = r - 1; i >= 0 && n < e[i]; i--) {
							var s = t[i + 1];
							(t[i + 1] = t[i]), (t[i] = s), (e[i + 1] = e[i]), (e[i] = n);
						}
				}
			};
			var n = r(120),
				i = { __proto__: null, exists: 10, equals: 8, not: 7, start: 6, end: 6, any: 5, hyphen: 4, element: 4 };
			function o(t) {
				var e = n[t.type];
				if (e === n.attribute)
					(e = i[t.action]) === i.equals && 'id' === t.name && (e = 9), t.ignoreCase && (e >>= 1);
				else if (e === n.pseudo)
					if (t.data)
						if ('has' === t.name || 'contains' === t.name) e = 0;
						else if ('matches' === t.name || 'not' === t.name) {
							e = 0;
							for (var r = 0; r < t.data.length; r++)
								if (1 === t.data[r].length) {
									var s = o(t.data[r][0]);
									if (0 === s) {
										e = 0;
										break;
									}
									s > e && (e = s);
								}
							t.data.length > 1 && e > 0 && (e -= 1);
						} else e = 1;
					else e = 3;
				return e;
			}
		},
		function (t, e, r) {
			var n = r(121),
				i = r(122);
			t.exports = {
				__proto__: null,
				attribute: n.compile,
				pseudo: i.compile,
				tag: function (t, e, r) {
					var n = e.name,
						i = r.adapter;
					return function (e) {
						return i.getName(e) === n && t(e);
					};
				},
				descendant: function (t, e, r) {
					var n = 'undefined' != typeof WeakSet ? new WeakSet() : null,
						i = r.adapter;
					return function (e) {
						for (var r = !1; !r && (e = i.getParent(e)); )
							(n && n.has(e)) || (!(r = t(e)) && n && n.add(e));
						return r;
					};
				},
				_flexibleDescendant: function (t, e, r) {
					var n = r.adapter;
					return function (e) {
						for (var r = t(e); !r && (e = n.getParent(e)); ) r = t(e);
						return r;
					};
				},
				parent: function (t, e, r) {
					if (r && r.strict) throw new Error("Parent selector isn't part of CSS3");
					var n = r.adapter;
					return function (t) {
						return n.getChildren(t).some(i);
					};
					function i(e) {
						return n.isTag(e) && t(e);
					}
				},
				child: function (t, e, r) {
					var n = r.adapter;
					return function (e) {
						var r = n.getParent(e);
						return !!r && t(r);
					};
				},
				sibling: function (t, e, r) {
					var n = r.adapter;
					return function (e) {
						for (var r = n.getSiblings(e), i = 0; i < r.length; i++)
							if (n.isTag(r[i])) {
								if (r[i] === e) break;
								if (t(r[i])) return !0;
							}
						return !1;
					};
				},
				adjacent: function (t, e, r) {
					var n = r.adapter;
					return function (e) {
						for (var r, i = n.getSiblings(e), o = 0; o < i.length; o++)
							if (n.isTag(i[o])) {
								if (i[o] === e) break;
								r = i[o];
							}
						return !!r && t(r);
					};
				},
				universal: function (t) {
					return t;
				},
			};
		},
		function (t, e, r) {
			var n = r(239),
				i = r(240);
			(t.exports = function (t) {
				return i(n(t));
			}),
				(t.exports.parse = n),
				(t.exports.compile = i);
		},
		function (t, e) {
			t.exports = function (t) {
				if ('even' === (t = t.trim().toLowerCase())) return [2, 0];
				if ('odd' === t) return [2, 1];
				var e,
					n = t.match(r);
				if (!n) throw new SyntaxError("n-th rule couldn't be parsed ('" + t + "')");
				return (
					n[1] ? ((e = parseInt(n[1], 10)), isNaN(e) && (e = '-' === n[1].charAt(0) ? -1 : 1)) : (e = 0),
					[e, n[3] ? parseInt((n[2] || '') + n[3], 10) : 0]
				);
			};
			var r = /^([+\-]?\d*n)?\s*(?:([+\-]?)\s*(\d+))?$/;
		},
		function (t, e, r) {
			t.exports = function (t) {
				var e = t[0],
					r = t[1] - 1;
				if (r < 0 && e <= 0) return o;
				if (-1 === e)
					return function (t) {
						return t <= r;
					};
				if (0 === e)
					return function (t) {
						return t === r;
					};
				if (1 === e)
					return r < 0
						? i
						: function (t) {
								return t >= r;
						  };
				var n = r % e;
				n < 0 && (n += e);
				if (e > 1)
					return function (t) {
						return t >= r && t % e === n;
					};
				return (
					(e *= -1),
					function (t) {
						return t <= r && t % e === n;
					}
				);
			};
			var n = r(47),
				i = n.trueFunc,
				o = n.falseFunc;
		},
		function (t, e, r) {
			'use strict';
			(function (t) {
				r.d(e, 'a', function () {
					return x;
				});
				var n = r(3),
					i = r(7),
					o = r(24),
					s = r(49),
					a = r(89),
					u = r(48),
					l = r(242),
					c = r(33),
					f = r(11),
					h = r(2);
				r(0).glMatrix.setMatrixArrayType(Array);
				const d = Symbol('enteredTargets');
				function p(t) {
					return (
						(t.id = t.id || `_layer${Math.random().toString(36).slice(2, 12)}`),
						t.dataset || (t.dataset = {}),
						(t.dataset.layerId = t.id),
						(t.connect = (e, r) => {
							(t.parent = e),
								Object.defineProperty(t, 'zOrder', { value: r, writable: !1, configurable: !0 });
						}),
						(t.disconnect = e => {
							delete t.zOrder;
						}),
						(t.canvas = t),
						(t.getResolution = () => ({ width: 0, height: 0 })),
						(t.setResolution = () => !1),
						(t.options = { handleEvent: !1 }),
						t
					);
				}
				function g(t, e) {
					const r = t.children;
					let n = null;
					for (let t = 0; t < r.length; t++) {
						const i = r[t];
						if (((e !== i && null == n) || (n = i), n && n !== e && !n.offscreen)) return n.canvas;
					}
					return null;
				}
				function m(t, e) {
					const [r, n] = t.renderOffset,
						{ width: i, height: o } = t.getResolution(),
						s = t.displayRatio;
					t.renderer.drawImage(e.canvas, -r / s, -n / s, i / s, o / s);
				}
				const v = {};
				function y(t, e) {
					if (e && e.style) {
						let { width: r, height: n, mode: i, container: o } = t;
						const { clientWidth: s, clientHeight: a } = o;
						(r = r || s),
							(n = n || a),
							'static' === i
								? ((e.style.width = `${r}px`),
								  (e.style.height = `${n}px`),
								  (e.style.top = '50%'),
								  (e.style.left = '50%'),
								  (e.style.transform = 'translate(-50%, -50%)'),
								  (e.style.webkitTransform = 'translate(-50%, -50%)'))
								: ((e.style.top = '0'),
								  (e.style.left = '0'),
								  (e.style.width = `${s}px`),
								  (e.style.height = `${a}px`),
								  (e.style.transform = ''),
								  (e.style.webkitTransform = ''));
					}
				}
				const b = Symbol('offscreenLayerCount');
				class x extends u.a {
					constructor(e = {}) {
						if ((super(), !e.container)) {
							if ('function' != typeof n.a.Container) throw new Error('No container specified.');
							e.container = new n.a.Container(e.width || 300, e.height || 150);
						}
						if (
							((this.container = e.container),
							this.container.style &&
								(this.container.style.overflow || (this.container.style.overflow = 'hidden'),
								this.container.style.position || (this.container.style.position = 'relative')),
							(this.options = e),
							(e.displayRatio = e.displayRatio || 1),
							(e.mode = e.mode || 'scale'),
							(e.left = 0),
							(e.top = 0),
							(e.autoResize = !1 !== e.autoResize),
							e.autoResize && t.addEventListener)
						) {
							const e = this;
							t.addEventListener('resize', function r() {
								'undefined' != typeof document && document.contains(e.container)
									? e.resize()
									: t.removeEventListener('resize', r);
							});
						}
						(this[d] = new Set()),
							this.setResolution(e),
							(function (t) {
								const e = t.container,
									{ left: r, top: n, displayRatio: i } = t.options;
								e.addEventListener(
									'mouseleave',
									e => {
										const r = t[d];
										if (r.size) {
											const n = new c.a('mouseleave');
											n.setOriginalEvent(e),
												[...r].forEach(t => {
													t.dispatchEvent(n);
												}),
												t[d].clear();
										}
									},
									{ passive: !0 },
								),
									[
										'mousedown',
										'mouseup',
										'mousemove',
										'mousewheel',
										'wheel',
										'touchstart',
										'touchend',
										'touchmove',
										'touchcancel',
										'click',
										'dblclick',
										'longpress',
										'tap',
									].forEach(s => {
										e.addEventListener(
											s,
											e => {
												const s = t.orderedChildren;
												Object(l.a)(e, {
													offsetLeft: r,
													offsetTop: n,
													displayRatio: i,
												}).forEach(r => {
													const n = r.identifier;
													if ('touchmove' === r.type || 'touchend' === r.type) {
														const t = v[n];
														t && t.dispatchEvent(e), 'touchend' === r.type && delete v[n];
													} else {
														for (let t = s.length - 1; t >= 0; t--) {
															const e = s[t];
															if (!1 !== e.options.handleEvent) {
																if (e.dispatchPointerEvent(r) && r.target !== e) break;
															}
														}
														r.target === s[0] && (r.target = s[s.length - 1]);
													}
													const i = r.target;
													if (
														('touchstart' === r.type && (v[n] = r.target),
														'mousemove' === r.type)
													) {
														const r = t[d];
														let n;
														if (i) {
															const t = i.ancestors || [];
															n = new Set([i, ...t]);
														} else n = new Set();
														const s = Object.entries(e);
														if (!r.has(i) && i) {
															const t = new c.a('mouseenter');
															t.setOriginalEvent(e),
																s.forEach(([e, r]) => {
																	t[e] = r;
																}),
																r.add(i),
																i.dispatchEvent(t);
															const n = i.ancestors;
															n &&
																n.forEach(e => {
																	e instanceof o.a &&
																		!r.has(e) &&
																		(r.add(e), e.dispatchEvent(t));
																});
														}
														const a = new c.a('mouseleave');
														a.setOriginalEvent(e),
															s.forEach(([t, e]) => {
																a[t] = e;
															}),
															[...r].forEach(t => {
																n.has(t) || (r.delete(t), t.dispatchEvent(a));
															});
													}
												});
											},
											{ passive: !0 },
										);
									});
							})(this),
							(this[b] = 0);
					}
					get hasOffscreenCanvas() {
						return this[b] > 0;
					}
					set displayRatio(t) {
						this.options.displayRatio !== t && ((this.options.displayRatio = t), this.resize());
					}
					get displayRatio() {
						return this.options.displayRatio;
					}
					set height(t) {
						this.options.height !== t && ((this.options.height = t), this.resize());
					}
					get height() {
						return this.options.height;
					}
					set mode(t) {
						this.options.mode !== t && ((this.options.mode = t), this.resize());
					}
					get mode() {
						return this.options.mode;
					}
					set width(t) {
						this.options.width !== t && ((this.options.width = t), this.resize());
					}
					get width() {
						return this.options.width;
					}
					appendChild(t) {
						t instanceof s.a || t instanceof a.a || p(t);
						const e = super.appendChild(t),
							r = t.canvas;
						return (
							t.offscreen ? this[b]++ : this.container.appendChild(r),
							y(this.options, r),
							t.setResolution(this.getResolution()),
							e
						);
					}
					forceUpdate() {
						this.hasOffscreenCanvas &&
							!this._requestID &&
							(this._requestID = Object(i.b)(() => {
								delete this._requestID, this.render();
							}));
					}
					insertBefore(t, e) {
						t instanceof s.a || t instanceof a.a || p(t);
						const r = super.insertBefore(t, e),
							n = t.canvas;
						if (!t.offscreen) {
							const e = g(this, t);
							this.container.insertBefore(n, e);
						}
						return y(this.options, n), t.setResolution(this.getResolution()), r;
					}
					layer(t = 'default', e = {}) {
						(e = Object.assign({}, this.options, e)).id = t;
						const r = this.orderedChildren;
						for (let e = 0; e < r.length; e++) if (r[e].id === t) return r[e];
						let n;
						return (n = e.worker ? new a.a(e) : new s.a(e)), this.appendChild(n), n;
					}
					async preload(...t) {
						const e = [],
							r = [];
						for (let n = 0; n < t.length; n++) {
							const i = t[n];
							let o;
							if ('string' == typeof i) o = Object(f.f)(i);
							else if (Array.isArray(i)) o = Object(f.e)(...i);
							else {
								const { id: t, src: e } = i;
								o = Object(f.f)(e, t);
							}
							o instanceof Promise || (o = Promise.resolve(o)),
								r.push(
									o.then(r => {
										e.push(r);
										const n = new c.a({
											type: 'preload',
											detail: { current: r, loaded: e, resources: t },
										});
										this.dispatchEvent(n);
									}),
								);
						}
						return await Promise.all(r), e;
					}
					removeChild(t) {
						const e = super.removeChild(t);
						if (e) {
							t._prepareRenderFinished();
							const e = t.canvas;
							e.remove && e.remove(), t.offscreen && this[b]--;
						}
						return e;
					}
					render() {
						const t = this.orderedChildren;
						let e = null;
						const r = [];
						for (let n = 0; n < t.length; n++) {
							const i = t[n],
								o = r.length > 0;
							if (i instanceof s.a && !i.offscreen)
								if (i.autoRender)
									if (((e = i), o)) {
										i.renderer.clear();
										for (let t = 0; t < r.length; t++) {
											const e = r[t];
											e.render(), m(i, e);
										}
										(r.length = 0), i.render({ clear: !1 });
									} else i.prepareRender && i.render();
								else o && (console.warn('Some offscreen canvas will not be rendered.'), (r.length = 0));
							else
								i.offscreen
									? e
										? (i.prepareRender && i.render(), m(e, i))
										: r.push(i)
									: i instanceof a.a &&
									  o &&
									  (console.warn('Some offscreen canvas will not be rendered.'), (r.length = 0));
						}
					}
					replaceChild(t, e) {
						const r = super.replaceChild(t, e);
						e.canvas.remove && e.canvas.remove(), e.offscreen && this[b]--;
						const n = t.canvas;
						if (!t.offscreen) {
							const e = g(this, t);
							this.container.insertBefore(n, e);
						}
						return y(this.options, n), t.setResolution(this.getResolution()), r;
					}
					resize() {
						const t = this.options;
						this.children.forEach(e => {
							y(t, e.canvas);
						}),
							this.setResolution(t),
							this.dispatchEvent({ type: 'resize' });
					}
					setResolution({ width: t, height: e } = {}) {
						const r = this.container,
							{ clientWidth: n, clientHeight: i } = r;
						(null != t && null != e) || ((t = null == t ? n : t), (e = null == e ? i : e));
						const { mode: o, displayRatio: s } = this.options;
						if (
							((t *= s),
							(e *= s),
							(this.options.left = 0),
							(this.options.top = 0),
							'stickyHeight' === o || 'stickyLeft' === o || 'stickyRight' === o)
						) {
							const r = t;
							(t = (n * e) / i),
								'stickyHeight' === o && (this.options.left = 0.5 * (t - r)),
								'stickyRight' === o && (this.options.left = t - r);
						} else if ('stickyWidth' === o || 'stickyTop' === o || 'stickyBottom' === o) {
							const r = e;
							(e = (i * t) / n),
								'stickyWidth' === o && (this.options.top = 0.5 * (e - r)),
								'stickyBottom' === o && (this.options.top = e - r);
						}
						super.setResolution({ width: t, height: e });
					}
					snapshot({ offscreen: t = !1 } = {}) {
						const e = t ? 'snapshotOffScreenCanvas' : 'snapshotCanvas',
							{ width: r, height: i } = this.getResolution();
						this[e] = this[e] || n.a.createCanvas(r, i, { offscreen: t });
						const o = this[e].getContext('2d'),
							s = this.orderedChildren;
						o.clearRect(0, 0, r, i);
						for (let t = 0; t < s.length; t++) {
							const e = s[t];
							e.render && e.render();
							const n = e.canvas;
							n && n !== e && o.drawImage(n, 0, 0, r, i);
						}
						return this[e];
					}
				}
				h.a.registerNode(x, 'scene');
			}.call(this, r(63)));
		},
		function (t, e, r) {
			'use strict';
			r.d(e, 'a', function () {
				return i;
			});
			var n = r(33);
			function i(t, { offsetTop: e = 0, offsetLeft: r = 0, displayRatio: i = 1 } = {}) {
				let o, s;
				const a = [],
					{ left: u, top: l, width: c, height: f } = t.target.getBoundingClientRect(),
					h = t.target.width,
					d = t.target.height,
					p = t.changedTouches || [t];
				for (let t = 0; t < p.length; t++) {
					const e = p[t],
						r = e.identifier,
						{ clientX: n, clientY: i } = e;
					null != n &&
						null != i &&
						a.push({ x: Math.round((0 | n) - u), y: Math.round((0 | i) - l), identifier: r });
				}
				a.length <= 0 && a.push({ x: o, y: s });
				const g = [];
				return (
					a.forEach(a => {
						null != a.x && null != a.y && ((o = ((a.x * h) / c - r) / i), (s = ((a.y * d) / f - e) / i));
						const u = new n.a(t);
						Object.defineProperties(u, {
							layerX: { value: o },
							layerY: { value: s },
							originalX: { value: a.x },
							originalY: { value: a.y },
							x: { value: o },
							y: { value: s },
							identifier: { value: a.identifier },
						}),
							g.push(u);
					}),
					g
				);
			}
			r(0).glMatrix.setMatrixArrayType(Array);
		},
		function (t, e, r) {
			'use strict';
			r.r(e),
				r.d(e, 'helpers', function () {
					return L;
				}),
				r.d(e, 'createElement', function () {
					return O;
				}),
				r.d(e, 'isSpriteNode', function () {
					return C;
				}),
				r.d(e, 'registerNode', function () {
					return R;
				});
			var n = r(3);
			r.d(e, 'ENV', function () {
				return n.a;
			});
			var i = r(7);
			r.d(e, 'requestAnimationFrame', function () {
				return i.b;
			}),
				r.d(e, 'cancelAnimationFrame', function () {
					return i.a;
				});
			var o = r(24);
			r.d(e, 'Node', function () {
				return o.a;
			});
			var s = r(115);
			r.d(e, 'Cloud', function () {
				return s.a;
			});
			var a = r(27);
			r.d(e, 'Block', function () {
				return a.a;
			});
			var u = r(56);
			r.d(e, 'Sprite', function () {
				return u.a;
			});
			var l = r(17);
			r.d(e, 'Path', function () {
				return l.a;
			});
			var c = r(123);
			r.d(e, 'Rect', function () {
				return c.a;
			});
			var f = r(124);
			r.d(e, 'Triangle', function () {
				return f.a;
			});
			var h = r(125);
			r.d(e, 'Parallel', function () {
				return h.a;
			});
			var d = r(126);
			r.d(e, 'Regular', function () {
				return d.a;
			});
			var p = r(127);
			r.d(e, 'Star', function () {
				return p.a;
			});
			var g = r(57);
			r.d(e, 'Ellipse', function () {
				return g.a;
			});
			var m = r(128);
			r.d(e, 'Arc', function () {
				return m.a;
			});
			var v = r(129);
			r.d(e, 'Ring', function () {
				return v.a;
			});
			var y = r(18);
			r.d(e, 'Polyline', function () {
				return y.a;
			});
			var b = r(130);
			r.d(e, 'Label', function () {
				return b.a;
			});
			var x = r(48);
			r.d(e, 'Group', function () {
				return x.a;
			});
			var w = r(49);
			r.d(e, 'Layer', function () {
				return w.a;
			});
			var M = r(131);
			r.d(e, 'SpriteSvg', function () {
				return M.a;
			});
			var S = r(89);
			r.d(e, 'LayerWorker', function () {
				return S.a;
			});
			var A = r(241);
			r.d(e, 'Scene', function () {
				return A.a;
			});
			var _ = r(2),
				T = r(5);
			r.d(e, 'Color', function () {
				return T.a;
			}),
				r.d(e, 'Gradient', function () {
					return T.b;
				});
			var E = r(1);
			r(0).glMatrix.setMatrixArrayType(Array);
			const O = _.a.createElement,
				C = _.a.isSpriteNode,
				R = _.a.registerNode,
				L = { parseColor: T.c, sizeToPixel: E.b, toArray: E.c, toString: E.e, toNumber: E.d };
		},
	]);
});

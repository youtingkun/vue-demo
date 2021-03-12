!(function (t, e) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = e(require('spritejs')))
		: 'function' == typeof define && define.amd
		? define(['spritejs'], e)
		: 'object' == typeof exports
		? (exports['sprite-extend-3d'] = e(require('spritejs')))
		: ((t.spritejs = t.spritejs || {}), (t.spritejs.ext3d = e(t.spritejs)));
})(this, function (t) {
	return (function (t) {
		var e = {};
		function r(i) {
			if (e[i]) return e[i].exports;
			var n = (e[i] = { i: i, l: !1, exports: {} });
			return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
		}
		return (
			(r.m = t),
			(r.c = e),
			(r.d = function (t, e, i) {
				r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
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
				var i = Object.create(null);
				if (
					(r.r(i),
					Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
					2 & e && 'string' != typeof t)
				)
					for (var n in t)
						r.d(
							i,
							n,
							function (e) {
								return t[e];
							}.bind(null, n),
						);
				return i;
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
			r((r.s = 2))
		);
	})([
		function (e, r) {
			e.exports = t;
		},
		,
		function (t, e, r) {
			'use strict';
			r.r(e);
			var i = {};
			r.r(i),
				r.d(i, 'NORMAL', function () {
					return xi;
				}),
				r.d(i, 'NORMAL_GEOMETRY', function () {
					return wi;
				}),
				r.d(i, 'NORMAL_TEXTURE', function () {
					return Mi;
				}),
				r.d(i, 'TEXTURE_CUBE', function () {
					return Ei;
				}),
				r.d(i, 'TEXTURE_WITH_SHADOW', function () {
					return Ai;
				}),
				r.d(i, 'GEOMETRY_WITH_TEXTURE', function () {
					return Si;
				}),
				r.d(i, 'GEOMETRY_WITH_SHADOW', function () {
					return Ci;
				}),
				r.d(i, 'GEOMETRY_WITH_TEXTURE_AND_SHADOW', function () {
					return _i;
				}),
				r.d(i, 'POLYLINE', function () {
					return Li;
				}),
				r.d(i, 'DASHLINE', function () {
					return Pi;
				}),
				r.d(i, 'TEXTURE_NORMAL_MAP_100', function () {
					return Oi;
				}),
				r.d(i, 'TEXTURE_NORMAL_MAP_300', function () {
					return Ti;
				}),
				r.d(i, 'getTextureNormalMap', function () {
					return Ni;
				}),
				r.d(i, 'GEOMETRY_NORMAL_MAP_100', function () {
					return Ri;
				}),
				r.d(i, 'GEOMETRY_NORMAL_MAP_300', function () {
					return Fi;
				}),
				r.d(i, 'getGeometryNormalMap', function () {
					return zi;
				});
			function n(t, e, r) {
				return (t[0] = e[0] + r[0]), (t[1] = e[1] + r[1]), t;
			}
			function s(t, e, r) {
				return (t[0] = e[0] - r[0]), (t[1] = e[1] - r[1]), t;
			}
			function o(t, e, r) {
				return (t[0] = e[0] * r), (t[1] = e[1] * r), t;
			}
			function a(t) {
				var e = t[0],
					r = t[1];
				return Math.sqrt(e * e + r * r);
			}
			function h(t, e) {
				return t[0] * e[1] - t[1] * e[0];
			}
			class l extends Array {
				constructor(t = 0, e = t) {
					return super(t, e), this;
				}
				get x() {
					return this[0];
				}
				get y() {
					return this[1];
				}
				set x(t) {
					this[0] = t;
				}
				set y(t) {
					this[1] = t;
				}
				set(t, e = t) {
					return t.length
						? this.copy(t)
						: ((function (t, e, r) {
								(t[0] = e), (t[1] = r);
						  })(this, t, e),
						  this);
				}
				copy(t) {
					var e, r;
					return (r = t), ((e = this)[0] = r[0]), (e[1] = r[1]), this;
				}
				add(t, e) {
					return e ? n(this, t, e) : n(this, this, t), this;
				}
				sub(t, e) {
					return e ? s(this, t, e) : s(this, this, t), this;
				}
				multiply(t) {
					var e, r, i;
					return (
						t.length
							? ((r = this), (i = t), ((e = this)[0] = r[0] * i[0]), (e[1] = r[1] * i[1]))
							: o(this, this, t),
						this
					);
				}
				divide(t) {
					var e, r, i;
					return (
						t.length
							? ((r = this), (i = t), ((e = this)[0] = r[0] / i[0]), (e[1] = r[1] / i[1]))
							: o(this, this, 1 / t),
						this
					);
				}
				inverse(t = this) {
					var e, r;
					return (r = t), ((e = this)[0] = 1 / r[0]), (e[1] = 1 / r[1]), this;
				}
				len() {
					return a(this);
				}
				distance(t) {
					return t
						? ((e = this), (i = (r = t)[0] - e[0]), (n = r[1] - e[1]), Math.sqrt(i * i + n * n))
						: a(this);
					var e, r, i, n;
				}
				squaredLen() {
					return this.squaredDistance();
				}
				squaredDistance(t) {
					return t
						? ((e = this), (i = (r = t)[0] - e[0]), (n = r[1] - e[1]), i * i + n * n)
						: (function (t) {
								var e = t[0],
									r = t[1];
								return e * e + r * r;
						  })(this);
					var e, r, i, n;
				}
				negate(t = this) {
					var e, r;
					return (r = t), ((e = this)[0] = -r[0]), (e[1] = -r[1]), this;
				}
				cross(t, e) {
					return e ? h(t, e) : h(this, t);
				}
				scale(t) {
					return o(this, this, t), this;
				}
				normalize() {
					var t, e, r, i, n;
					return (
						(t = this),
						(r = (e = this)[0]),
						(i = e[1]),
						(n = r * r + i * i) > 0 && (n = 1 / Math.sqrt(n)),
						(t[0] = e[0] * n),
						(t[1] = e[1] * n),
						this
					);
				}
				dot(t) {
					return (r = t), (e = this)[0] * r[0] + e[1] * r[1];
					var e, r;
				}
				equals(t) {
					return (r = t), (e = this)[0] === r[0] && e[1] === r[1];
					var e, r;
				}
				applyMatrix3(t) {
					var e, r, i, n, s;
					return (
						(e = this),
						(i = t),
						(n = (r = this)[0]),
						(s = r[1]),
						(e[0] = i[0] * n + i[3] * s + i[6]),
						(e[1] = i[1] * n + i[4] * s + i[7]),
						this
					);
				}
				applyMatrix4(t) {
					return (
						(function (t, e, r) {
							let i = e[0],
								n = e[1];
							(t[0] = r[0] * i + r[4] * n + r[12]), (t[1] = r[1] * i + r[5] * n + r[13]);
						})(this, this, t),
						this
					);
				}
				lerp(t, e) {
					!(function (t, e, r, i) {
						var n = e[0],
							s = e[1];
						(t[0] = n + i * (r[0] - n)), (t[1] = s + i * (r[1] - s));
					})(this, this, t, e);
				}
				clone() {
					return new l(this[0], this[1]);
				}
				fromArray(t, e = 0) {
					return (this[0] = t[e]), (this[1] = t[e + 1]), this;
				}
				toArray(t = [], e = 0) {
					return (t[e] = this[0]), (t[e + 1] = this[1]), t;
				}
			}
			function c(t) {
				let e = t[0],
					r = t[1],
					i = t[2];
				return Math.sqrt(e * e + r * r + i * i);
			}
			function u(t, e) {
				return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
			}
			function d(t, e, r) {
				return (t[0] = e[0] + r[0]), (t[1] = e[1] + r[1]), (t[2] = e[2] + r[2]), t;
			}
			function m(t, e, r) {
				return (t[0] = e[0] - r[0]), (t[1] = e[1] - r[1]), (t[2] = e[2] - r[2]), t;
			}
			function g(t, e, r) {
				return (t[0] = e[0] * r), (t[1] = e[1] * r), (t[2] = e[2] * r), t;
			}
			function p(t) {
				let e = t[0],
					r = t[1],
					i = t[2];
				return e * e + r * r + i * i;
			}
			function f(t, e) {
				let r = e[0],
					i = e[1],
					n = e[2],
					s = r * r + i * i + n * n;
				return s > 0 && (s = 1 / Math.sqrt(s)), (t[0] = e[0] * s), (t[1] = e[1] * s), (t[2] = e[2] * s), t;
			}
			function v(t, e) {
				return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
			}
			function b(t, e, r) {
				let i = e[0],
					n = e[1],
					s = e[2],
					o = r[0],
					a = r[1],
					h = r[2];
				return (t[0] = n * h - s * a), (t[1] = s * o - i * h), (t[2] = i * a - n * o), t;
			}
			const y = (function () {
				const t = [0, 0, 0],
					e = [0, 0, 0];
				return function (r, i) {
					u(t, r), u(e, i), f(t, t), f(e, e);
					let n = v(t, e);
					return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n);
				};
			})();
			class x extends Array {
				constructor(t = 0, e = t, r = t) {
					return super(t, e, r), this;
				}
				get x() {
					return this[0];
				}
				get y() {
					return this[1];
				}
				get z() {
					return this[2];
				}
				set x(t) {
					this[0] = t;
				}
				set y(t) {
					this[1] = t;
				}
				set z(t) {
					this[2] = t;
				}
				set(t, e = t, r = t) {
					return t.length
						? this.copy(t)
						: ((function (t, e, r, i) {
								(t[0] = e), (t[1] = r), (t[2] = i);
						  })(this, t, e, r),
						  this);
				}
				copy(t) {
					return u(this, t), this;
				}
				add(t, e) {
					return e ? d(this, t, e) : d(this, this, t), this;
				}
				sub(t, e) {
					return e ? m(this, t, e) : m(this, this, t), this;
				}
				multiply(t) {
					var e, r, i;
					return (
						t.length
							? ((r = this),
							  (i = t),
							  ((e = this)[0] = r[0] * i[0]),
							  (e[1] = r[1] * i[1]),
							  (e[2] = r[2] * i[2]))
							: g(this, this, t),
						this
					);
				}
				divide(t) {
					var e, r, i;
					return (
						t.length
							? ((r = this),
							  (i = t),
							  ((e = this)[0] = r[0] / i[0]),
							  (e[1] = r[1] / i[1]),
							  (e[2] = r[2] / i[2]))
							: g(this, this, 1 / t),
						this
					);
				}
				inverse(t = this) {
					var e, r;
					return (r = t), ((e = this)[0] = 1 / r[0]), (e[1] = 1 / r[1]), (e[2] = 1 / r[2]), this;
				}
				len() {
					return c(this);
				}
				distance(t) {
					return t
						? (function (t, e) {
								let r = e[0] - t[0],
									i = e[1] - t[1],
									n = e[2] - t[2];
								return Math.sqrt(r * r + i * i + n * n);
						  })(this, t)
						: c(this);
				}
				squaredLen() {
					return p(this);
				}
				squaredDistance(t) {
					return t
						? (function (t, e) {
								let r = e[0] - t[0],
									i = e[1] - t[1],
									n = e[2] - t[2];
								return r * r + i * i + n * n;
						  })(this, t)
						: p(this);
				}
				negate(t = this) {
					var e, r;
					return (r = t), ((e = this)[0] = -r[0]), (e[1] = -r[1]), (e[2] = -r[2]), this;
				}
				cross(t, e) {
					return e ? b(this, t, e) : b(this, this, t), this;
				}
				scale(t) {
					return g(this, this, t), this;
				}
				normalize() {
					return f(this, this), this;
				}
				dot(t) {
					return v(this, t);
				}
				equals(t) {
					return (r = t), (e = this)[0] === r[0] && e[1] === r[1] && e[2] === r[2];
					var e, r;
				}
				applyMatrix4(t) {
					return (
						(function (t, e, r) {
							let i = e[0],
								n = e[1],
								s = e[2],
								o = r[3] * i + r[7] * n + r[11] * s + r[15];
							(o = o || 1),
								(t[0] = (r[0] * i + r[4] * n + r[8] * s + r[12]) / o),
								(t[1] = (r[1] * i + r[5] * n + r[9] * s + r[13]) / o),
								(t[2] = (r[2] * i + r[6] * n + r[10] * s + r[14]) / o);
						})(this, this, t),
						this
					);
				}
				applyQuaternion(t) {
					return (
						(function (t, e, r) {
							let i = e[0],
								n = e[1],
								s = e[2],
								o = r[0],
								a = r[1],
								h = r[2],
								l = a * s - h * n,
								c = h * i - o * s,
								u = o * n - a * i,
								d = a * u - h * c,
								m = h * l - o * u,
								g = o * c - a * l,
								p = 2 * r[3];
							(l *= p),
								(c *= p),
								(u *= p),
								(d *= 2),
								(m *= 2),
								(g *= 2),
								(t[0] = i + l + d),
								(t[1] = n + c + m),
								(t[2] = s + u + g);
						})(this, this, t),
						this
					);
				}
				angle(t) {
					return y(this, t);
				}
				lerp(t, e) {
					return (
						(function (t, e, r, i) {
							let n = e[0],
								s = e[1],
								o = e[2];
							(t[0] = n + i * (r[0] - n)), (t[1] = s + i * (r[1] - s)), (t[2] = o + i * (r[2] - o));
						})(this, this, t, e),
						this
					);
				}
				clone() {
					return new x(this[0], this[1], this[2]);
				}
				fromArray(t, e = 0) {
					return (this[0] = t[e]), (this[1] = t[e + 1]), (this[2] = t[e + 2]), this;
				}
				toArray(t = [], e = 0) {
					return (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), t;
				}
				transformDirection(t) {
					const e = this[0],
						r = this[1],
						i = this[2];
					return (
						(this[0] = t[0] * e + t[4] * r + t[8] * i),
						(this[1] = t[1] * e + t[5] * r + t[9] * i),
						(this[2] = t[2] * e + t[6] * r + t[10] * i),
						this.normalize()
					);
				}
			}
			function w(t, e) {
				return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
			}
			function M(t, e, r, i, n) {
				return (t[0] = e), (t[1] = r), (t[2] = i), (t[3] = n), t;
			}
			function E(t, e) {
				let r = e[0],
					i = e[1],
					n = e[2],
					s = e[3],
					o = r * r + i * i + n * n + s * s;
				return (
					o > 0 && (o = 1 / Math.sqrt(o)), (t[0] = r * o), (t[1] = i * o), (t[2] = n * o), (t[3] = s * o), t
				);
			}
			class A extends Array {
				constructor(t = 0, e = t, r = t, i = t) {
					return super(t, e, r, i), this;
				}
				get x() {
					return this[0];
				}
				get y() {
					return this[1];
				}
				get z() {
					return this[2];
				}
				get w() {
					return this[3];
				}
				set x(t) {
					this[0] = t;
				}
				set y(t) {
					this[1] = t;
				}
				set z(t) {
					this[2] = t;
				}
				set w(t) {
					this[3] = t;
				}
				set(t, e, r, i) {
					return t.length ? this.copy(t) : (M(this, t, e, r, i), this);
				}
				copy(t) {
					return w(this, t), this;
				}
				normalize() {
					return E(this, this), this;
				}
				fromArray(t, e = 0) {
					return (this[0] = t[e]), (this[1] = t[e + 1]), (this[2] = t[e + 2]), (this[3] = t[e + 3]), this;
				}
				toArray(t = [], e = 0) {
					return (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), (t[e + 3] = this[3]), t;
				}
			}
			function S(t, e, r) {
				let i = e[0],
					n = e[1],
					s = e[2],
					o = e[3],
					a = e[4],
					h = e[5],
					l = e[6],
					c = e[7],
					u = e[8],
					d = r[0],
					m = r[1],
					g = r[2],
					p = r[3],
					f = r[4],
					v = r[5],
					b = r[6],
					y = r[7],
					x = r[8];
				return (
					(t[0] = d * i + m * o + g * l),
					(t[1] = d * n + m * a + g * c),
					(t[2] = d * s + m * h + g * u),
					(t[3] = p * i + f * o + v * l),
					(t[4] = p * n + f * a + v * c),
					(t[5] = p * s + f * h + v * u),
					(t[6] = b * i + y * o + x * l),
					(t[7] = b * n + y * a + x * c),
					(t[8] = b * s + y * h + x * u),
					t
				);
			}
			class C extends Array {
				constructor(t = 1, e = 0, r = 0, i = 0, n = 1, s = 0, o = 0, a = 0, h = 1) {
					return super(t, e, r, i, n, s, o, a, h), this;
				}
				set(t, e, r, i, n, s, o, a, h) {
					return t.length
						? this.copy(t)
						: ((function (t, e, r, i, n, s, o, a, h, l) {
								(t[0] = e),
									(t[1] = r),
									(t[2] = i),
									(t[3] = n),
									(t[4] = s),
									(t[5] = o),
									(t[6] = a),
									(t[7] = h),
									(t[8] = l);
						  })(this, t, e, r, i, n, s, o, a, h),
						  this);
				}
				translate(t, e = this) {
					return (
						(function (t, e, r) {
							let i = e[0],
								n = e[1],
								s = e[2],
								o = e[3],
								a = e[4],
								h = e[5],
								l = e[6],
								c = e[7],
								u = e[8],
								d = r[0],
								m = r[1];
							(t[0] = i),
								(t[1] = n),
								(t[2] = s),
								(t[3] = o),
								(t[4] = a),
								(t[5] = h),
								(t[6] = d * i + m * o + l),
								(t[7] = d * n + m * a + c),
								(t[8] = d * s + m * h + u);
						})(this, e, t),
						this
					);
				}
				rotate(t, e = this) {
					return (
						(function (t, e, r) {
							let i = e[0],
								n = e[1],
								s = e[2],
								o = e[3],
								a = e[4],
								h = e[5],
								l = e[6],
								c = e[7],
								u = e[8],
								d = Math.sin(r),
								m = Math.cos(r);
							(t[0] = m * i + d * o),
								(t[1] = m * n + d * a),
								(t[2] = m * s + d * h),
								(t[3] = m * o - d * i),
								(t[4] = m * a - d * n),
								(t[5] = m * h - d * s),
								(t[6] = l),
								(t[7] = c),
								(t[8] = u);
						})(this, e, t),
						this
					);
				}
				scale(t, e = this) {
					return (
						(function (t, e, r) {
							let i = r[0],
								n = r[1];
							(t[0] = i * e[0]),
								(t[1] = i * e[1]),
								(t[2] = i * e[2]),
								(t[3] = n * e[3]),
								(t[4] = n * e[4]),
								(t[5] = n * e[5]),
								(t[6] = e[6]),
								(t[7] = e[7]),
								(t[8] = e[8]);
						})(this, e, t),
						this
					);
				}
				multiply(t, e) {
					return e ? S(this, t, e) : S(this, this, t), this;
				}
				identity() {
					var t;
					return (
						((t = this)[0] = 1),
						(t[1] = 0),
						(t[2] = 0),
						(t[3] = 0),
						(t[4] = 1),
						(t[5] = 0),
						(t[6] = 0),
						(t[7] = 0),
						(t[8] = 1),
						this
					);
				}
				copy(t) {
					var e, r;
					return (
						(r = t),
						((e = this)[0] = r[0]),
						(e[1] = r[1]),
						(e[2] = r[2]),
						(e[3] = r[3]),
						(e[4] = r[4]),
						(e[5] = r[5]),
						(e[6] = r[6]),
						(e[7] = r[7]),
						(e[8] = r[8]),
						this
					);
				}
				fromMatrix4(t) {
					var e, r;
					return (
						(r = t),
						((e = this)[0] = r[0]),
						(e[1] = r[1]),
						(e[2] = r[2]),
						(e[3] = r[4]),
						(e[4] = r[5]),
						(e[5] = r[6]),
						(e[6] = r[8]),
						(e[7] = r[9]),
						(e[8] = r[10]),
						this
					);
				}
				fromQuaternion(t) {
					return (
						(function (t, e) {
							let r = e[0],
								i = e[1],
								n = e[2],
								s = e[3],
								o = r + r,
								a = i + i,
								h = n + n,
								l = r * o,
								c = i * o,
								u = i * a,
								d = n * o,
								m = n * a,
								g = n * h,
								p = s * o,
								f = s * a,
								v = s * h;
							(t[0] = 1 - u - g),
								(t[3] = c - v),
								(t[6] = d + f),
								(t[1] = c + v),
								(t[4] = 1 - l - g),
								(t[7] = m - p),
								(t[2] = d - f),
								(t[5] = m + p),
								(t[8] = 1 - l - u);
						})(this, t),
						this
					);
				}
				fromBasis(t, e, r) {
					return this.set(t[0], t[1], t[2], e[0], e[1], e[2], r[0], r[1], r[2]), this;
				}
				inverse(t = this) {
					return (
						(function (t, e) {
							let r = e[0],
								i = e[1],
								n = e[2],
								s = e[3],
								o = e[4],
								a = e[5],
								h = e[6],
								l = e[7],
								c = e[8],
								u = c * o - a * l,
								d = -c * s + a * h,
								m = l * s - o * h,
								g = r * u + i * d + n * m;
							g &&
								((g = 1 / g),
								(t[0] = u * g),
								(t[1] = (-c * i + n * l) * g),
								(t[2] = (a * i - n * o) * g),
								(t[3] = d * g),
								(t[4] = (c * r - n * h) * g),
								(t[5] = (-a * r + n * s) * g),
								(t[6] = m * g),
								(t[7] = (-l * r + i * h) * g),
								(t[8] = (o * r - i * s) * g));
						})(this, t),
						this
					);
				}
				getNormalMatrix(t) {
					return (
						(function (t, e) {
							let r = e[0],
								i = e[1],
								n = e[2],
								s = e[3],
								o = e[4],
								a = e[5],
								h = e[6],
								l = e[7],
								c = e[8],
								u = e[9],
								d = e[10],
								m = e[11],
								g = e[12],
								p = e[13],
								f = e[14],
								v = e[15],
								b = r * a - i * o,
								y = r * h - n * o,
								x = r * l - s * o,
								w = i * h - n * a,
								M = i * l - s * a,
								E = n * l - s * h,
								A = c * p - u * g,
								S = c * f - d * g,
								C = c * v - m * g,
								_ = u * f - d * p,
								L = u * v - m * p,
								P = d * v - m * f,
								O = b * P - y * L + x * _ + w * C - M * S + E * A;
							O &&
								((O = 1 / O),
								(t[0] = (a * P - h * L + l * _) * O),
								(t[1] = (h * C - o * P - l * S) * O),
								(t[2] = (o * L - a * C + l * A) * O),
								(t[3] = (n * L - i * P - s * _) * O),
								(t[4] = (r * P - n * C + s * S) * O),
								(t[5] = (i * C - r * L - s * A) * O),
								(t[6] = (p * E - f * M + v * w) * O),
								(t[7] = (f * x - g * E - v * y) * O),
								(t[8] = (g * M - p * x + v * b) * O));
						})(this, t),
						this
					);
				}
			}
			const _ = 1e-6;
			function L(t, e, r) {
				let i = e[0],
					n = e[1],
					s = e[2],
					o = e[3],
					a = e[4],
					h = e[5],
					l = e[6],
					c = e[7],
					u = e[8],
					d = e[9],
					m = e[10],
					g = e[11],
					p = e[12],
					f = e[13],
					v = e[14],
					b = e[15],
					y = r[0],
					x = r[1],
					w = r[2],
					M = r[3];
				return (
					(t[0] = y * i + x * a + w * u + M * p),
					(t[1] = y * n + x * h + w * d + M * f),
					(t[2] = y * s + x * l + w * m + M * v),
					(t[3] = y * o + x * c + w * g + M * b),
					(y = r[4]),
					(x = r[5]),
					(w = r[6]),
					(M = r[7]),
					(t[4] = y * i + x * a + w * u + M * p),
					(t[5] = y * n + x * h + w * d + M * f),
					(t[6] = y * s + x * l + w * m + M * v),
					(t[7] = y * o + x * c + w * g + M * b),
					(y = r[8]),
					(x = r[9]),
					(w = r[10]),
					(M = r[11]),
					(t[8] = y * i + x * a + w * u + M * p),
					(t[9] = y * n + x * h + w * d + M * f),
					(t[10] = y * s + x * l + w * m + M * v),
					(t[11] = y * o + x * c + w * g + M * b),
					(y = r[12]),
					(x = r[13]),
					(w = r[14]),
					(M = r[15]),
					(t[12] = y * i + x * a + w * u + M * p),
					(t[13] = y * n + x * h + w * d + M * f),
					(t[14] = y * s + x * l + w * m + M * v),
					(t[15] = y * o + x * c + w * g + M * b),
					t
				);
			}
			function P(t, e) {
				let r = e[0],
					i = e[1],
					n = e[2],
					s = e[4],
					o = e[5],
					a = e[6],
					h = e[8],
					l = e[9],
					c = e[10];
				return (t[0] = Math.hypot(r, i, n)), (t[1] = Math.hypot(s, o, a)), (t[2] = Math.hypot(h, l, c)), t;
			}
			const O = (function () {
				const t = [0, 0, 0];
				return function (e, r) {
					let i = t;
					P(i, r);
					let n = 1 / i[0],
						s = 1 / i[1],
						o = 1 / i[2],
						a = r[0] * n,
						h = r[1] * s,
						l = r[2] * o,
						c = r[4] * n,
						u = r[5] * s,
						d = r[6] * o,
						m = r[8] * n,
						g = r[9] * s,
						p = r[10] * o,
						f = a + u + p,
						v = 0;
					return (
						f > 0
							? ((v = 2 * Math.sqrt(f + 1)),
							  (e[3] = 0.25 * v),
							  (e[0] = (d - g) / v),
							  (e[1] = (m - l) / v),
							  (e[2] = (h - c) / v))
							: a > u && a > p
							? ((v = 2 * Math.sqrt(1 + a - u - p)),
							  (e[3] = (d - g) / v),
							  (e[0] = 0.25 * v),
							  (e[1] = (h + c) / v),
							  (e[2] = (m + l) / v))
							: u > p
							? ((v = 2 * Math.sqrt(1 + u - a - p)),
							  (e[3] = (m - l) / v),
							  (e[0] = (h + c) / v),
							  (e[1] = 0.25 * v),
							  (e[2] = (d + g) / v))
							: ((v = 2 * Math.sqrt(1 + p - a - u)),
							  (e[3] = (h - c) / v),
							  (e[0] = (m + l) / v),
							  (e[1] = (d + g) / v),
							  (e[2] = 0.25 * v)),
						e
					);
				};
			})();
			class T extends Array {
				constructor(
					t = 1,
					e = 0,
					r = 0,
					i = 0,
					n = 0,
					s = 1,
					o = 0,
					a = 0,
					h = 0,
					l = 0,
					c = 1,
					u = 0,
					d = 0,
					m = 0,
					g = 0,
					p = 1,
				) {
					return super(t, e, r, i, n, s, o, a, h, l, c, u, d, m, g, p), this;
				}
				get x() {
					return this[12];
				}
				get y() {
					return this[13];
				}
				get z() {
					return this[14];
				}
				get w() {
					return this[15];
				}
				set x(t) {
					this[12] = t;
				}
				set y(t) {
					this[13] = t;
				}
				set z(t) {
					this[14] = t;
				}
				set w(t) {
					this[15] = t;
				}
				set(t, e, r, i, n, s, o, a, h, l, c, u, d, m, g, p) {
					return t.length
						? this.copy(t)
						: ((function (t, e, r, i, n, s, o, a, h, l, c, u, d, m, g, p, f) {
								(t[0] = e),
									(t[1] = r),
									(t[2] = i),
									(t[3] = n),
									(t[4] = s),
									(t[5] = o),
									(t[6] = a),
									(t[7] = h),
									(t[8] = l),
									(t[9] = c),
									(t[10] = u),
									(t[11] = d),
									(t[12] = m),
									(t[13] = g),
									(t[14] = p),
									(t[15] = f);
						  })(this, t, e, r, i, n, s, o, a, h, l, c, u, d, m, g, p),
						  this);
				}
				translate(t, e = this) {
					return (
						(function (t, e, r) {
							let i,
								n,
								s,
								o,
								a,
								h,
								l,
								c,
								u,
								d,
								m,
								g,
								p = r[0],
								f = r[1],
								v = r[2];
							e === t
								? ((t[12] = e[0] * p + e[4] * f + e[8] * v + e[12]),
								  (t[13] = e[1] * p + e[5] * f + e[9] * v + e[13]),
								  (t[14] = e[2] * p + e[6] * f + e[10] * v + e[14]),
								  (t[15] = e[3] * p + e[7] * f + e[11] * v + e[15]))
								: ((i = e[0]),
								  (n = e[1]),
								  (s = e[2]),
								  (o = e[3]),
								  (a = e[4]),
								  (h = e[5]),
								  (l = e[6]),
								  (c = e[7]),
								  (u = e[8]),
								  (d = e[9]),
								  (m = e[10]),
								  (g = e[11]),
								  (t[0] = i),
								  (t[1] = n),
								  (t[2] = s),
								  (t[3] = o),
								  (t[4] = a),
								  (t[5] = h),
								  (t[6] = l),
								  (t[7] = c),
								  (t[8] = u),
								  (t[9] = d),
								  (t[10] = m),
								  (t[11] = g),
								  (t[12] = i * p + a * f + u * v + e[12]),
								  (t[13] = n * p + h * f + d * v + e[13]),
								  (t[14] = s * p + l * f + m * v + e[14]),
								  (t[15] = o * p + c * f + g * v + e[15]));
						})(this, e, t),
						this
					);
				}
				rotate(t, e, r = this) {
					return (
						(function (t, e, r, i) {
							let n,
								s,
								o,
								a,
								h,
								l,
								c,
								u,
								d,
								m,
								g,
								p,
								f,
								v,
								b,
								y,
								x,
								w,
								M,
								E,
								A,
								S,
								C,
								L,
								P = i[0],
								O = i[1],
								T = i[2],
								N = Math.hypot(P, O, T);
							Math.abs(N) < _ ||
								((N = 1 / N),
								(P *= N),
								(O *= N),
								(T *= N),
								(n = Math.sin(r)),
								(s = Math.cos(r)),
								(o = 1 - s),
								(a = e[0]),
								(h = e[1]),
								(l = e[2]),
								(c = e[3]),
								(u = e[4]),
								(d = e[5]),
								(m = e[6]),
								(g = e[7]),
								(p = e[8]),
								(f = e[9]),
								(v = e[10]),
								(b = e[11]),
								(y = P * P * o + s),
								(x = O * P * o + T * n),
								(w = T * P * o - O * n),
								(M = P * O * o - T * n),
								(E = O * O * o + s),
								(A = T * O * o + P * n),
								(S = P * T * o + O * n),
								(C = O * T * o - P * n),
								(L = T * T * o + s),
								(t[0] = a * y + u * x + p * w),
								(t[1] = h * y + d * x + f * w),
								(t[2] = l * y + m * x + v * w),
								(t[3] = c * y + g * x + b * w),
								(t[4] = a * M + u * E + p * A),
								(t[5] = h * M + d * E + f * A),
								(t[6] = l * M + m * E + v * A),
								(t[7] = c * M + g * E + b * A),
								(t[8] = a * S + u * C + p * L),
								(t[9] = h * S + d * C + f * L),
								(t[10] = l * S + m * C + v * L),
								(t[11] = c * S + g * C + b * L),
								e !== t && ((t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])));
						})(this, r, t, e),
						this
					);
				}
				scale(t, e = this) {
					return (
						(function (t, e, r) {
							let i = r[0],
								n = r[1],
								s = r[2];
							(t[0] = e[0] * i),
								(t[1] = e[1] * i),
								(t[2] = e[2] * i),
								(t[3] = e[3] * i),
								(t[4] = e[4] * n),
								(t[5] = e[5] * n),
								(t[6] = e[6] * n),
								(t[7] = e[7] * n),
								(t[8] = e[8] * s),
								(t[9] = e[9] * s),
								(t[10] = e[10] * s),
								(t[11] = e[11] * s),
								(t[12] = e[12]),
								(t[13] = e[13]),
								(t[14] = e[14]),
								(t[15] = e[15]);
						})(this, e, 'number' == typeof t ? [t, t, t] : t),
						this
					);
				}
				multiply(t, e) {
					return e ? L(this, t, e) : L(this, this, t), this;
				}
				identity() {
					var t;
					return (
						((t = this)[0] = 1),
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
						this
					);
				}
				copy(t) {
					var e, r;
					return (
						(r = t),
						((e = this)[0] = r[0]),
						(e[1] = r[1]),
						(e[2] = r[2]),
						(e[3] = r[3]),
						(e[4] = r[4]),
						(e[5] = r[5]),
						(e[6] = r[6]),
						(e[7] = r[7]),
						(e[8] = r[8]),
						(e[9] = r[9]),
						(e[10] = r[10]),
						(e[11] = r[11]),
						(e[12] = r[12]),
						(e[13] = r[13]),
						(e[14] = r[14]),
						(e[15] = r[15]),
						this
					);
				}
				fromPerspective({ fov: t, aspect: e, near: r, far: i } = {}) {
					return (
						(function (t, e, r, i, n) {
							let s = 1 / Math.tan(e / 2),
								o = 1 / (i - n);
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
								(t[10] = (n + i) * o),
								(t[11] = -1),
								(t[12] = 0),
								(t[13] = 0),
								(t[14] = 2 * n * i * o),
								(t[15] = 0);
						})(this, t, e, r, i),
						this
					);
				}
				fromOrthogonal({ left: t, right: e, bottom: r, top: i, near: n, far: s }) {
					return (
						(function (t, e, r, i, n, s, o) {
							let a = 1 / (e - r),
								h = 1 / (i - n),
								l = 1 / (s - o);
							(t[0] = -2 * a),
								(t[1] = 0),
								(t[2] = 0),
								(t[3] = 0),
								(t[4] = 0),
								(t[5] = -2 * h),
								(t[6] = 0),
								(t[7] = 0),
								(t[8] = 0),
								(t[9] = 0),
								(t[10] = 2 * l),
								(t[11] = 0),
								(t[12] = (e + r) * a),
								(t[13] = (n + i) * h),
								(t[14] = (o + s) * l),
								(t[15] = 1);
						})(this, t, e, r, i, n, s),
						this
					);
				}
				fromQuaternion(t) {
					return (
						(function (t, e) {
							let r = e[0],
								i = e[1],
								n = e[2],
								s = e[3],
								o = r + r,
								a = i + i,
								h = n + n,
								l = r * o,
								c = i * o,
								u = i * a,
								d = n * o,
								m = n * a,
								g = n * h,
								p = s * o,
								f = s * a,
								v = s * h;
							(t[0] = 1 - u - g),
								(t[1] = c + v),
								(t[2] = d - f),
								(t[3] = 0),
								(t[4] = c - v),
								(t[5] = 1 - l - g),
								(t[6] = m + p),
								(t[7] = 0),
								(t[8] = d + f),
								(t[9] = m - p),
								(t[10] = 1 - l - u),
								(t[11] = 0),
								(t[12] = 0),
								(t[13] = 0),
								(t[14] = 0),
								(t[15] = 1);
						})(this, t),
						this
					);
				}
				setPosition(t) {
					return (this.x = t[0]), (this.y = t[1]), (this.z = t[2]), this;
				}
				inverse(t = this) {
					return (
						(function (t, e) {
							let r = e[0],
								i = e[1],
								n = e[2],
								s = e[3],
								o = e[4],
								a = e[5],
								h = e[6],
								l = e[7],
								c = e[8],
								u = e[9],
								d = e[10],
								m = e[11],
								g = e[12],
								p = e[13],
								f = e[14],
								v = e[15],
								b = r * a - i * o,
								y = r * h - n * o,
								x = r * l - s * o,
								w = i * h - n * a,
								M = i * l - s * a,
								E = n * l - s * h,
								A = c * p - u * g,
								S = c * f - d * g,
								C = c * v - m * g,
								_ = u * f - d * p,
								L = u * v - m * p,
								P = d * v - m * f,
								O = b * P - y * L + x * _ + w * C - M * S + E * A;
							O &&
								((O = 1 / O),
								(t[0] = (a * P - h * L + l * _) * O),
								(t[1] = (n * L - i * P - s * _) * O),
								(t[2] = (p * E - f * M + v * w) * O),
								(t[3] = (d * M - u * E - m * w) * O),
								(t[4] = (h * C - o * P - l * S) * O),
								(t[5] = (r * P - n * C + s * S) * O),
								(t[6] = (f * x - g * E - v * y) * O),
								(t[7] = (c * E - d * x + m * y) * O),
								(t[8] = (o * L - a * C + l * A) * O),
								(t[9] = (i * C - r * L - s * A) * O),
								(t[10] = (g * M - p * x + v * b) * O),
								(t[11] = (u * x - c * M - m * b) * O),
								(t[12] = (a * S - o * _ - h * A) * O),
								(t[13] = (r * _ - i * S + n * A) * O),
								(t[14] = (p * y - g * w - f * b) * O),
								(t[15] = (c * w - u * y + d * b) * O));
						})(this, t),
						this
					);
				}
				compose(t, e, r) {
					return (
						(function (t, e, r, i) {
							let n = e[0],
								s = e[1],
								o = e[2],
								a = e[3],
								h = n + n,
								l = s + s,
								c = o + o,
								u = n * h,
								d = n * l,
								m = n * c,
								g = s * l,
								p = s * c,
								f = o * c,
								v = a * h,
								b = a * l,
								y = a * c,
								x = i[0],
								w = i[1],
								M = i[2];
							(t[0] = (1 - (g + f)) * x),
								(t[1] = (d + y) * x),
								(t[2] = (m - b) * x),
								(t[3] = 0),
								(t[4] = (d - y) * w),
								(t[5] = (1 - (u + f)) * w),
								(t[6] = (p + v) * w),
								(t[7] = 0),
								(t[8] = (m + b) * M),
								(t[9] = (p - v) * M),
								(t[10] = (1 - (u + g)) * M),
								(t[11] = 0),
								(t[12] = r[0]),
								(t[13] = r[1]),
								(t[14] = r[2]),
								(t[15] = 1);
						})(this, t, e, r),
						this
					);
				}
				getRotation(t) {
					return O(t, this), this;
				}
				getTranslation(t) {
					var e, r;
					return (r = this), ((e = t)[0] = r[12]), (e[1] = r[13]), (e[2] = r[14]), this;
				}
				getScaling(t) {
					return P(t, this), this;
				}
				getMaxScaleOnAxis() {
					return (function (t) {
						let e = t[0],
							r = t[1],
							i = t[2],
							n = t[4],
							s = t[5],
							o = t[6],
							a = t[8],
							h = t[9],
							l = t[10];
						const c = e * e + r * r + i * i,
							u = n * n + s * s + o * o,
							d = a * a + h * h + l * l;
						return Math.sqrt(Math.max(c, u, d));
					})(this);
				}
				lookAt(t, e, r) {
					return (
						(function (t, e, r, i) {
							let n = e[0],
								s = e[1],
								o = e[2],
								a = i[0],
								h = i[1],
								l = i[2],
								c = n - r[0],
								u = s - r[1],
								d = o - r[2],
								m = c * c + u * u + d * d;
							0 === m ? (d = 1) : ((m = 1 / Math.sqrt(m)), (c *= m), (u *= m), (d *= m));
							let g = h * d - l * u,
								p = l * c - a * d,
								f = a * u - h * c;
							(m = g * g + p * p + f * f),
								0 === m &&
									(l ? (a += 1e-6) : h ? (l += 1e-6) : (h += 1e-6),
									(g = h * d - l * u),
									(p = l * c - a * d),
									(f = a * u - h * c),
									(m = g * g + p * p + f * f)),
								(m = 1 / Math.sqrt(m)),
								(g *= m),
								(p *= m),
								(f *= m),
								(t[0] = g),
								(t[1] = p),
								(t[2] = f),
								(t[3] = 0),
								(t[4] = u * f - d * p),
								(t[5] = d * g - c * f),
								(t[6] = c * p - u * g),
								(t[7] = 0),
								(t[8] = c),
								(t[9] = u),
								(t[10] = d),
								(t[11] = 0),
								(t[12] = n),
								(t[13] = s),
								(t[14] = o),
								(t[15] = 1);
						})(this, t, e, r),
						this
					);
				}
				determinant() {
					return (function (t) {
						let e = t[0],
							r = t[1],
							i = t[2],
							n = t[3],
							s = t[4],
							o = t[5],
							a = t[6],
							h = t[7],
							l = t[8],
							c = t[9],
							u = t[10],
							d = t[11],
							m = t[12],
							g = t[13],
							p = t[14],
							f = t[15];
						return (
							(e * o - r * s) * (u * f - d * p) -
							(e * a - i * s) * (c * f - d * g) +
							(e * h - n * s) * (c * p - u * g) +
							(r * a - i * o) * (l * f - d * m) -
							(r * h - n * o) * (l * p - u * m) +
							(i * h - n * a) * (l * g - c * m)
						);
					})(this);
				}
			}
			function N(t, e, r) {
				let i = e[0],
					n = e[1],
					s = e[2],
					o = e[3],
					a = r[0],
					h = r[1],
					l = r[2],
					c = r[3];
				return (
					(t[0] = i * c + o * a + n * l - s * h),
					(t[1] = n * c + o * h + s * a - i * l),
					(t[2] = s * c + o * l + i * h - n * a),
					(t[3] = o * c - i * a - n * h - s * l),
					t
				);
			}
			const R = w,
				F = M,
				z = function (t, e) {
					return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
				},
				j = E;
			class D extends Array {
				constructor(t = 0, e = 0, r = 0, i = 1) {
					return super(t, e, r, i), (this.onChange = () => {}), this;
				}
				get x() {
					return this[0];
				}
				get y() {
					return this[1];
				}
				get z() {
					return this[2];
				}
				get w() {
					return this[3];
				}
				set x(t) {
					(this[0] = t), this.onChange();
				}
				set y(t) {
					(this[1] = t), this.onChange();
				}
				set z(t) {
					(this[2] = t), this.onChange();
				}
				set w(t) {
					(this[3] = t), this.onChange();
				}
				identity() {
					var t;
					return ((t = this)[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), this.onChange(), this;
				}
				set(t, e, r, i) {
					return t.length ? this.copy(t) : (F(this, t, e, r, i), this.onChange(), this);
				}
				rotateX(t) {
					return (
						(function (t, e, r) {
							r *= 0.5;
							let i = e[0],
								n = e[1],
								s = e[2],
								o = e[3],
								a = Math.sin(r),
								h = Math.cos(r);
							(t[0] = i * h + o * a),
								(t[1] = n * h + s * a),
								(t[2] = s * h - n * a),
								(t[3] = o * h - i * a);
						})(this, this, t),
						this.onChange(),
						this
					);
				}
				rotateY(t) {
					return (
						(function (t, e, r) {
							r *= 0.5;
							let i = e[0],
								n = e[1],
								s = e[2],
								o = e[3],
								a = Math.sin(r),
								h = Math.cos(r);
							(t[0] = i * h - s * a),
								(t[1] = n * h + o * a),
								(t[2] = s * h + i * a),
								(t[3] = o * h - n * a);
						})(this, this, t),
						this.onChange(),
						this
					);
				}
				rotateZ(t) {
					return (
						(function (t, e, r) {
							r *= 0.5;
							let i = e[0],
								n = e[1],
								s = e[2],
								o = e[3],
								a = Math.sin(r),
								h = Math.cos(r);
							(t[0] = i * h + n * a),
								(t[1] = n * h - i * a),
								(t[2] = s * h + o * a),
								(t[3] = o * h - s * a);
						})(this, this, t),
						this.onChange(),
						this
					);
				}
				inverse(t = this) {
					return (
						(function (t, e) {
							let r = e[0],
								i = e[1],
								n = e[2],
								s = e[3],
								o = r * r + i * i + n * n + s * s,
								a = o ? 1 / o : 0;
							(t[0] = -r * a), (t[1] = -i * a), (t[2] = -n * a), (t[3] = s * a);
						})(this, t),
						this.onChange(),
						this
					);
				}
				conjugate(t = this) {
					var e, r;
					return (
						(r = t),
						((e = this)[0] = -r[0]),
						(e[1] = -r[1]),
						(e[2] = -r[2]),
						(e[3] = r[3]),
						this.onChange(),
						this
					);
				}
				copy(t) {
					return R(this, t), this.onChange(), this;
				}
				normalize(t = this) {
					return j(this, t), this.onChange(), this;
				}
				multiply(t, e) {
					return e ? N(this, t, e) : N(this, this, t), this.onChange(), this;
				}
				dot(t) {
					return z(this, t);
				}
				fromMatrix3(t) {
					return (
						(function (t, e) {
							let r,
								i = e[0] + e[4] + e[8];
							if (i > 0)
								(r = Math.sqrt(i + 1)),
									(t[3] = 0.5 * r),
									(r = 0.5 / r),
									(t[0] = (e[5] - e[7]) * r),
									(t[1] = (e[6] - e[2]) * r),
									(t[2] = (e[1] - e[3]) * r);
							else {
								let i = 0;
								e[4] > e[0] && (i = 1), e[8] > e[3 * i + i] && (i = 2);
								let n = (i + 1) % 3,
									s = (i + 2) % 3;
								(r = Math.sqrt(e[3 * i + i] - e[3 * n + n] - e[3 * s + s] + 1)),
									(t[i] = 0.5 * r),
									(r = 0.5 / r),
									(t[3] = (e[3 * n + s] - e[3 * s + n]) * r),
									(t[n] = (e[3 * n + i] + e[3 * i + n]) * r),
									(t[s] = (e[3 * s + i] + e[3 * i + s]) * r);
							}
						})(this, t),
						this.onChange(),
						this
					);
				}
				fromEuler(t) {
					return (
						(function (t, e, r = 'YXZ') {
							let i = Math.sin(0.5 * e[0]),
								n = Math.cos(0.5 * e[0]),
								s = Math.sin(0.5 * e[1]),
								o = Math.cos(0.5 * e[1]),
								a = Math.sin(0.5 * e[2]),
								h = Math.cos(0.5 * e[2]);
							'XYZ' === r
								? ((t[0] = i * o * h + n * s * a),
								  (t[1] = n * s * h - i * o * a),
								  (t[2] = n * o * a + i * s * h),
								  (t[3] = n * o * h - i * s * a))
								: 'YXZ' === r
								? ((t[0] = i * o * h + n * s * a),
								  (t[1] = n * s * h - i * o * a),
								  (t[2] = n * o * a - i * s * h),
								  (t[3] = n * o * h + i * s * a))
								: 'ZXY' === r
								? ((t[0] = i * o * h - n * s * a),
								  (t[1] = n * s * h + i * o * a),
								  (t[2] = n * o * a + i * s * h),
								  (t[3] = n * o * h - i * s * a))
								: 'ZYX' === r
								? ((t[0] = i * o * h - n * s * a),
								  (t[1] = n * s * h + i * o * a),
								  (t[2] = n * o * a - i * s * h),
								  (t[3] = n * o * h + i * s * a))
								: 'YZX' === r
								? ((t[0] = i * o * h + n * s * a),
								  (t[1] = n * s * h + i * o * a),
								  (t[2] = n * o * a - i * s * h),
								  (t[3] = n * o * h - i * s * a))
								: 'XZY' === r &&
								  ((t[0] = i * o * h - n * s * a),
								  (t[1] = n * s * h - i * o * a),
								  (t[2] = n * o * a + i * s * h),
								  (t[3] = n * o * h + i * s * a));
						})(this, t, t.order),
						this
					);
				}
				fromAxisAngle(t, e) {
					return (
						(function (t, e, r) {
							r *= 0.5;
							let i = Math.sin(r);
							(t[0] = i * e[0]), (t[1] = i * e[1]), (t[2] = i * e[2]), (t[3] = Math.cos(r));
						})(this, t, e),
						this
					);
				}
				slerp(t, e) {
					return (
						(function (t, e, r, i) {
							let n,
								s,
								o,
								a,
								h,
								l = e[0],
								c = e[1],
								u = e[2],
								d = e[3],
								m = r[0],
								g = r[1],
								p = r[2],
								f = r[3];
							(s = l * m + c * g + u * p + d * f),
								s < 0 && ((s = -s), (m = -m), (g = -g), (p = -p), (f = -f)),
								1 - s > 1e-6
									? ((n = Math.acos(s)),
									  (o = Math.sin(n)),
									  (a = Math.sin((1 - i) * n) / o),
									  (h = Math.sin(i * n) / o))
									: ((a = 1 - i), (h = i)),
								(t[0] = a * l + h * m),
								(t[1] = a * c + h * g),
								(t[2] = a * u + h * p),
								(t[3] = a * d + h * f);
						})(this, this, t, e),
						this
					);
				}
				fromArray(t, e = 0) {
					return (this[0] = t[e]), (this[1] = t[e + 1]), (this[2] = t[e + 2]), (this[3] = t[e + 3]), this;
				}
				toArray(t = [], e = 0) {
					return (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), (t[e + 3] = this[3]), t;
				}
			}
			const U = new T();
			class B extends Array {
				constructor(t = 0, e = t, r = t, i = 'YXZ') {
					return super(t, e, r), (this.order = i), (this.onChange = () => {}), this;
				}
				get x() {
					return this[0];
				}
				get y() {
					return this[1];
				}
				get z() {
					return this[2];
				}
				set x(t) {
					(this[0] = t), this.onChange();
				}
				set y(t) {
					(this[1] = t), this.onChange();
				}
				set z(t) {
					(this[2] = t), this.onChange();
				}
				set(t, e = t, r = t) {
					return t.length
						? this.copy(t)
						: ((this[0] = t), (this[1] = e), (this[2] = r), this.onChange(), this);
				}
				copy(t) {
					return (this[0] = t[0]), (this[1] = t[1]), (this[2] = t[2]), this.onChange(), this;
				}
				reorder(t) {
					return (this.order = t), this.onChange(), this;
				}
				fromRotationMatrix(t, e = this.order) {
					return (
						(function (t, e, r = 'YXZ') {
							'XYZ' === r
								? ((t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1))),
								  Math.abs(e[8]) < 0.99999
										? ((t[0] = Math.atan2(-e[9], e[10])), (t[2] = Math.atan2(-e[4], e[0])))
										: ((t[0] = Math.atan2(e[6], e[5])), (t[2] = 0)))
								: 'YXZ' === r
								? ((t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1))),
								  Math.abs(e[9]) < 0.99999
										? ((t[1] = Math.atan2(e[8], e[10])), (t[2] = Math.atan2(e[1], e[5])))
										: ((t[1] = Math.atan2(-e[2], e[0])), (t[2] = 0)))
								: 'ZXY' === r
								? ((t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1))),
								  Math.abs(e[6]) < 0.99999
										? ((t[1] = Math.atan2(-e[2], e[10])), (t[2] = Math.atan2(-e[4], e[5])))
										: ((t[1] = 0), (t[2] = Math.atan2(e[1], e[0]))))
								: 'ZYX' === r
								? ((t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1))),
								  Math.abs(e[2]) < 0.99999
										? ((t[0] = Math.atan2(e[6], e[10])), (t[2] = Math.atan2(e[1], e[0])))
										: ((t[0] = 0), (t[2] = Math.atan2(-e[4], e[5]))))
								: 'YZX' === r
								? ((t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1))),
								  Math.abs(e[1]) < 0.99999
										? ((t[0] = Math.atan2(-e[9], e[5])), (t[1] = Math.atan2(-e[2], e[0])))
										: ((t[0] = 0), (t[1] = Math.atan2(e[8], e[10]))))
								: 'XZY' === r &&
								  ((t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1))),
								  Math.abs(e[4]) < 0.99999
										? ((t[0] = Math.atan2(e[6], e[5])), (t[1] = Math.atan2(e[8], e[0])))
										: ((t[0] = Math.atan2(-e[9], e[10])), (t[1] = 0)));
						})(this, t, e),
						this
					);
				}
				fromQuaternion(t, e = this.order) {
					return U.fromQuaternion(t), this.fromRotationMatrix(U, e);
				}
			}
			let I = 1;
			const G = {};
			class V {
				constructor(
					t,
					{
						vertex: e,
						fragment: r,
						uniforms: i = {},
						transparent: n = !1,
						cullFace: s = t.BACK,
						frontFace: o = t.CCW,
						depthTest: a = !0,
						depthWrite: h = !0,
						depthFunc: l = t.LESS,
					} = {},
				) {
					t.canvas || console.error('gl not passed as fist argument to Program'),
						(this.gl = t),
						(this.uniforms = i),
						(this.id = I++),
						e || console.warn('vertex shader not supplied'),
						r || console.warn('fragment shader not supplied'),
						(this.transparent = n),
						(this.cullFace = s),
						(this.frontFace = o),
						(this.depthTest = a),
						(this.depthWrite = h),
						(this.depthFunc = l),
						(this.blendFunc = {}),
						(this.blendEquation = {}),
						this.transparent &&
							!this.blendFunc.src &&
							(this.gl.renderer.premultipliedAlpha
								? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
								: this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
					const c = t.createShader(t.VERTEX_SHADER);
					t.shaderSource(c, e),
						t.compileShader(c),
						'' !== t.getShaderInfoLog(c) &&
							console.warn(`${t.getShaderInfoLog(c)}\nVertex Shader\n${Y(e)}`);
					const u = t.createShader(t.FRAGMENT_SHADER);
					if (
						(t.shaderSource(u, r),
						t.compileShader(u),
						'' !== t.getShaderInfoLog(u) &&
							console.warn(`${t.getShaderInfoLog(u)}\nFragment Shader\n${Y(r)}`),
						(this.program = t.createProgram()),
						t.attachShader(this.program, c),
						t.attachShader(this.program, u),
						t.linkProgram(this.program),
						!t.getProgramParameter(this.program, t.LINK_STATUS))
					)
						return console.warn(t.getProgramInfoLog(this.program));
					t.deleteShader(c), t.deleteShader(u), (this.uniformLocations = new Map());
					let d = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
					for (let e = 0; e < d; e++) {
						let r = t.getActiveUniform(this.program, e);
						this.uniformLocations.set(r, t.getUniformLocation(this.program, r.name));
						const i = r.name.match(/(\w+)/g);
						(r.uniformName = i[0]),
							3 === i.length
								? ((r.isStructArray = !0), (r.structIndex = Number(i[1])), (r.structProperty = i[2]))
								: 2 === i.length &&
								  isNaN(Number(i[1])) &&
								  ((r.isStruct = !0), (r.structProperty = i[1]));
					}
					this.attributeLocations = new Map();
					const m = [],
						g = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
					for (let e = 0; e < g; e++) {
						const r = t.getActiveAttrib(this.program, e),
							i = t.getAttribLocation(this.program, r.name);
						(m[i] = r.name), this.attributeLocations.set(r.name, i);
					}
					this.attributeOrder = m.join('');
				}
				setBlendFunc(t, e, r, i) {
					(this.blendFunc.src = t),
						(this.blendFunc.dst = e),
						(this.blendFunc.srcAlpha = r),
						(this.blendFunc.dstAlpha = i),
						t && (this.transparent = !0);
				}
				setBlendEquation(t, e) {
					(this.blendEquation.modeRGB = t), (this.blendEquation.modeAlpha = e);
				}
				applyState() {
					this.depthTest
						? this.gl.renderer.enable(this.gl.DEPTH_TEST)
						: this.gl.renderer.disable(this.gl.DEPTH_TEST),
						this.cullFace
							? this.gl.renderer.enable(this.gl.CULL_FACE)
							: this.gl.renderer.disable(this.gl.CULL_FACE),
						this.blendFunc.src
							? this.gl.renderer.enable(this.gl.BLEND)
							: this.gl.renderer.disable(this.gl.BLEND),
						this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
						this.gl.renderer.setFrontFace(this.frontFace),
						this.gl.renderer.setDepthMask(this.depthWrite),
						this.gl.renderer.setDepthFunc(this.depthFunc),
						this.blendFunc.src &&
							this.gl.renderer.setBlendFunc(
								this.blendFunc.src,
								this.blendFunc.dst,
								this.blendFunc.srcAlpha,
								this.blendFunc.dstAlpha,
							),
						this.blendEquation.modeRGB &&
							this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
				}
				use({ flipFaces: t = !1 } = {}) {
					let e = -1;
					this.gl.renderer.currentProgram === this.id ||
						(this.gl.useProgram(this.program), (this.gl.renderer.currentProgram = this.id)),
						this.uniformLocations.forEach((t, r) => {
							let i = r.uniformName,
								n = this.uniforms[i];
							if (
								(r.isStruct && ((n = n[r.structProperty]), (i += `.${r.structProperty}`)),
								r.isStructArray &&
									((n = n[r.structIndex][r.structProperty]),
									(i += `[${r.structIndex}].${r.structProperty}`)),
								!n)
							)
								return q(`Active uniform ${i} has not been supplied`);
							if (n && void 0 === n.value) return q(`${i} uniform is missing a value parameter`);
							if (n.value.texture) return (e += 1), n.value.update(e), k(this.gl, r.type, t, e);
							if (n.value.length && n.value[0].texture) {
								const i = [];
								return (
									n.value.forEach(t => {
										(e += 1), t.update(e), i.push(e);
									}),
									k(this.gl, r.type, t, i)
								);
							}
							k(this.gl, r.type, t, n.value);
						}),
						this.applyState(),
						t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
				}
				remove() {
					this.gl.deleteProgram(this.program);
				}
			}
			function k(t, e, r, i) {
				i = i.length
					? (function (t) {
							const e = t.length,
								r = t[0].length;
							if (void 0 === r) return t;
							const i = e * r;
							let n = G[i];
							n || (G[i] = n = new Float32Array(i));
							for (let i = 0; i < e; i++) n.set(t[i], i * r);
							return n;
					  })(i)
					: i;
				const n = t.renderer.state.uniformLocations.get(r);
				if (i.length)
					if (void 0 === n) t.renderer.state.uniformLocations.set(r, i.slice(0));
					else {
						if (
							(function (t, e) {
								if (t.length !== e.length) return !1;
								for (let r = 0, i = t.length; r < i; r++) if (t[r] !== e[r]) return !1;
								return !0;
							})(n, i)
						)
							return;
						n.set
							? n.set(i)
							: (function (t, e) {
									for (let r = 0, i = t.length; r < i; r++) t[r] = e[r];
							  })(n, i),
							t.renderer.state.uniformLocations.set(r, n);
					}
				else {
					if (n === i) return;
					t.renderer.state.uniformLocations.set(r, i);
				}
				switch (e) {
					case 5126:
						return i.length ? t.uniform1fv(r, i) : t.uniform1f(r, i);
					case 35664:
						return t.uniform2fv(r, i);
					case 35665:
						return t.uniform3fv(r, i);
					case 35666:
						return t.uniform4fv(r, i);
					case 35670:
					case 5124:
					case 35678:
					case 35680:
						return i.length ? t.uniform1iv(r, i) : t.uniform1i(r, i);
					case 35671:
					case 35667:
						return t.uniform2iv(r, i);
					case 35672:
					case 35668:
						return t.uniform3iv(r, i);
					case 35673:
					case 35669:
						return t.uniform4iv(r, i);
					case 35674:
						return t.uniformMatrix2fv(r, !1, i);
					case 35675:
						return t.uniformMatrix3fv(r, !1, i);
					case 35676:
						return t.uniformMatrix4fv(r, !1, i);
				}
			}
			function Y(t) {
				let e = t.split('\n');
				for (let t = 0; t < e.length; t++) e[t] = t + 1 + ': ' + e[t];
				return e.join('\n');
			}
			let X = 0;
			function q(t) {
				X > 100 ||
					(console.warn(t), X++, X > 100 && console.warn('More than 100 program warnings - stopping logs.'));
			}
			class W {
				constructor() {
					(this.parent = null),
						(this.children = []),
						(this.visible = !0),
						(this.matrix = new T()),
						(this.worldMatrix = new T()),
						(this.matrixAutoUpdate = !0),
						(this.position = new x()),
						(this.quaternion = new D()),
						(this.scale = new x(1)),
						(this.rotation = new B()),
						(this.up = new x(0, 1, 0)),
						(this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation)),
						(this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion));
				}
				setParent(t, e = !0) {
					e && this.parent && t !== this.parent && this.parent.removeChild(this, !1),
						(this.parent = t),
						e && t && t.addChild(this, !1);
				}
				addChild(t, e = !0) {
					~this.children.indexOf(t) || this.children.push(t), e && t.setParent(this, !1);
				}
				removeChild(t, e = !0) {
					~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1),
						e && t.setParent(null, !1);
				}
				updateMatrixWorld(t) {
					this.matrixAutoUpdate && this.updateMatrix(),
						(this.worldMatrixNeedsUpdate || t) &&
							(null === this.parent
								? this.worldMatrix.copy(this.matrix)
								: this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
							(this.worldMatrixNeedsUpdate = !1),
							(t = !0));
					for (let e = 0, r = this.children.length; e < r; e++) this.children[e].updateMatrixWorld(t);
				}
				updateMatrix() {
					this.matrix.compose(this.quaternion, this.position, this.scale), (this.worldMatrixNeedsUpdate = !0);
				}
				traverse(t) {
					if (!t(this)) for (let e = 0, r = this.children.length; e < r; e++) this.children[e].traverse(t);
				}
				decompose() {
					this.matrix.getTranslation(this.position),
						this.matrix.getRotation(this.quaternion),
						this.matrix.getScaling(this.scale),
						this.rotation.fromQuaternion(this.quaternion);
				}
				lookAt(t, e = !1) {
					e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up),
						this.matrix.getRotation(this.quaternion),
						this.rotation.fromQuaternion(this.quaternion);
				}
			}
			let Z = 0;
			class H extends W {
				constructor(
					t,
					{ geometry: e, program: r, mode: i = t.TRIANGLES, frustumCulled: n = !0, renderOrder: s = 0 } = {},
				) {
					super(),
						t.canvas || console.error('gl not passed as fist argument to Mesh'),
						(this.gl = t),
						(this.id = Z++),
						(this.geometry = e),
						(this.program = r),
						(this.mode = i),
						(this.frustumCulled = n),
						(this.renderOrder = s),
						(this.modelViewMatrix = new T()),
						(this.normalMatrix = new C()),
						(this.beforeRenderCallbacks = []),
						(this.afterRenderCallbacks = []);
				}
				onBeforeRender(t) {
					return this.beforeRenderCallbacks.push(t), this;
				}
				onAfterRender(t) {
					return this.afterRenderCallbacks.push(t), this;
				}
				draw({ camera: t } = {}) {
					this.beforeRenderCallbacks.forEach(e => e && e({ mesh: this, camera: t })),
						t &&
							(this.program.uniforms.modelMatrix ||
								Object.assign(this.program.uniforms, {
									modelMatrix: { value: null },
									viewMatrix: { value: null },
									modelViewMatrix: { value: null },
									normalMatrix: { value: null },
									projectionMatrix: { value: null },
									cameraPosition: { value: null },
								}),
							(this.program.uniforms.projectionMatrix.value = t.projectionMatrix),
							(this.program.uniforms.cameraPosition.value = t.worldPosition),
							(this.program.uniforms.viewMatrix.value = t.viewMatrix),
							this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix),
							this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
							(this.program.uniforms.modelMatrix.value = this.worldMatrix),
							(this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix),
							(this.program.uniforms.normalMatrix.value = this.normalMatrix));
					let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
					this.program.use({ flipFaces: e }),
						this.geometry.draw({ mode: this.mode, program: this.program }),
						this.afterRenderCallbacks.forEach(e => e && e({ mesh: this, camera: t }));
				}
			}
			const $ = new Uint8Array(4);
			function Q(t) {
				return 0 == (t & (t - 1));
			}
			let K = 1;
			class J {
				constructor(
					t,
					{
						image: e,
						target: r = t.TEXTURE_2D,
						type: i = t.UNSIGNED_BYTE,
						format: n = t.RGBA,
						internalFormat: s = n,
						wrapS: o = t.CLAMP_TO_EDGE,
						wrapT: a = t.CLAMP_TO_EDGE,
						generateMipmaps: h = !0,
						minFilter: l = h ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR,
						magFilter: c = t.LINEAR,
						premultiplyAlpha: u = !1,
						unpackAlignment: d = 4,
						flipY: m = r == t.TEXTURE_2D,
						anisotropy: g = 0,
						level: p = 0,
						width: f,
						height: v = f,
					} = {},
				) {
					(this.gl = t),
						(this.id = K++),
						(this.image = e),
						(this.target = r),
						(this.type = i),
						(this.format = n),
						(this.internalFormat = s),
						(this.minFilter = l),
						(this.magFilter = c),
						(this.wrapS = o),
						(this.wrapT = a),
						(this.generateMipmaps = h),
						(this.premultiplyAlpha = u),
						(this.unpackAlignment = d),
						(this.flipY = m),
						(this.anisotropy = Math.min(g, this.gl.renderer.parameters.maxAnisotropy)),
						(this.level = p),
						(this.width = f),
						(this.height = v),
						(this.texture = this.gl.createTexture()),
						(this.store = { image: null }),
						(this.glState = this.gl.renderer.state),
						(this.state = {}),
						(this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR),
						(this.state.magFilter = this.gl.LINEAR),
						(this.state.wrapS = this.gl.REPEAT),
						(this.state.wrapT = this.gl.REPEAT),
						(this.state.anisotropy = 0);
				}
				bind() {
					this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id &&
						(this.gl.bindTexture(this.target, this.texture),
						(this.glState.textureUnits[this.glState.activeTextureUnit] = this.id));
				}
				update(t = 0) {
					const e = !(this.image === this.store.image && !this.needsUpdate);
					if (
						((e || this.glState.textureUnits[t] !== this.id) &&
							(this.gl.renderer.activeTexture(t), this.bind()),
						e)
					) {
						if (
							((this.needsUpdate = !1),
							this.flipY !== this.glState.flipY &&
								(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
								(this.glState.flipY = this.flipY)),
							this.premultiplyAlpha !== this.glState.premultiplyAlpha &&
								(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha),
								(this.glState.premultiplyAlpha = this.premultiplyAlpha)),
							this.unpackAlignment !== this.glState.unpackAlignment &&
								(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment),
								(this.glState.unpackAlignment = this.unpackAlignment)),
							this.minFilter !== this.state.minFilter &&
								(this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter),
								(this.state.minFilter = this.minFilter)),
							this.magFilter !== this.state.magFilter &&
								(this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter),
								(this.state.magFilter = this.magFilter)),
							this.wrapS !== this.state.wrapS &&
								(this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS),
								(this.state.wrapS = this.wrapS)),
							this.wrapT !== this.state.wrapT &&
								(this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT),
								(this.state.wrapT = this.wrapT)),
							this.anisotropy &&
								this.anisotropy !== this.state.anisotropy &&
								(this.gl.texParameterf(
									this.target,
									this.gl.renderer.getExtension('EXT_texture_filter_anisotropic')
										.TEXTURE_MAX_ANISOTROPY_EXT,
									this.anisotropy,
								),
								(this.state.anisotropy = this.anisotropy)),
							this.image)
						) {
							if (
								(this.image.width &&
									((this.width = this.image.width), (this.height = this.image.height)),
								this.target === this.gl.TEXTURE_CUBE_MAP)
							)
								for (let t = 0; t < 6; t++)
									this.gl.texImage2D(
										this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t,
										this.level,
										this.internalFormat,
										this.format,
										this.type,
										this.image[t],
									);
							else if (ArrayBuffer.isView(this.image))
								this.gl.texImage2D(
									this.target,
									this.level,
									this.internalFormat,
									this.width,
									this.height,
									0,
									this.format,
									this.type,
									this.image,
								);
							else if (this.image.isCompressedTexture)
								for (let t = 0; t < this.image.length; t++)
									this.gl.compressedTexImage2D(
										this.target,
										t,
										this.internalFormat,
										this.image[t].width,
										this.image[t].height,
										0,
										this.image[t].data,
									);
							else
								this.gl.texImage2D(
									this.target,
									this.level,
									this.internalFormat,
									this.format,
									this.type,
									this.image,
								);
							this.generateMipmaps &&
								(this.gl.renderer.isWebgl2 || (Q(this.image.width) && Q(this.image.height))
									? this.gl.generateMipmap(this.target)
									: ((this.generateMipmaps = !1),
									  (this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE),
									  (this.minFilter = this.gl.LINEAR))),
								this.onUpdate && this.onUpdate();
						} else if (this.target === this.gl.TEXTURE_CUBE_MAP)
							for (let t = 0; t < 6; t++)
								this.gl.texImage2D(
									this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t,
									0,
									this.gl.RGBA,
									1,
									1,
									0,
									this.gl.RGBA,
									this.gl.UNSIGNED_BYTE,
									$,
								);
						else
							this.width
								? this.gl.texImage2D(
										this.target,
										this.level,
										this.internalFormat,
										this.width,
										this.height,
										0,
										this.format,
										this.type,
										null,
								  )
								: this.gl.texImage2D(
										this.target,
										0,
										this.gl.RGBA,
										1,
										1,
										0,
										this.gl.RGBA,
										this.gl.UNSIGNED_BYTE,
										$,
								  );
						this.store.image = this.image;
					}
				}
			}
			class tt {
				constructor(
					t,
					{
						width: e = t.canvas.width,
						height: r = t.canvas.height,
						target: i = t.FRAMEBUFFER,
						color: n = 1,
						depth: s = !0,
						stencil: o = !1,
						depthTexture: a = !1,
						wrapS: h = t.CLAMP_TO_EDGE,
						wrapT: l = t.CLAMP_TO_EDGE,
						minFilter: c = t.LINEAR,
						magFilter: u = c,
						type: d = t.UNSIGNED_BYTE,
						format: m = t.RGBA,
						internalFormat: g = m,
						unpackAlignment: p,
						premultiplyAlpha: f,
					} = {},
				) {
					(this.gl = t),
						(this.width = e),
						(this.height = r),
						(this.depth = s),
						(this.buffer = this.gl.createFramebuffer()),
						(this.target = i),
						this.gl.bindFramebuffer(this.target, this.buffer),
						(this.textures = []);
					const v = [];
					for (let i = 0; i < n; i++)
						this.textures.push(
							new J(t, {
								width: e,
								height: r,
								wrapS: h,
								wrapT: l,
								minFilter: c,
								magFilter: u,
								type: d,
								format: m,
								internalFormat: g,
								unpackAlignment: p,
								premultiplyAlpha: f,
								flipY: !1,
								generateMipmaps: !1,
							}),
						),
							this.textures[i].update(),
							this.gl.framebufferTexture2D(
								this.target,
								this.gl.COLOR_ATTACHMENT0 + i,
								this.gl.TEXTURE_2D,
								this.textures[i].texture,
								0,
							),
							v.push(this.gl.COLOR_ATTACHMENT0 + i);
					v.length > 1 && this.gl.renderer.drawBuffers(v),
						(this.texture = this.textures[0]),
						a && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension('WEBGL_depth_texture'))
							? ((this.depthTexture = new J(t, {
									width: e,
									height: r,
									minFilter: this.gl.NEAREST,
									magFilter: this.gl.NEAREST,
									format: this.gl.DEPTH_COMPONENT,
									internalFormat: t.renderer.isWebgl2
										? this.gl.DEPTH_COMPONENT16
										: this.gl.DEPTH_COMPONENT,
									type: this.gl.UNSIGNED_INT,
							  })),
							  this.depthTexture.update(),
							  this.gl.framebufferTexture2D(
									this.target,
									this.gl.DEPTH_ATTACHMENT,
									this.gl.TEXTURE_2D,
									this.depthTexture.texture,
									0,
							  ))
							: (s &&
									!o &&
									((this.depthBuffer = this.gl.createRenderbuffer()),
									this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
									this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, e, r),
									this.gl.framebufferRenderbuffer(
										this.target,
										this.gl.DEPTH_ATTACHMENT,
										this.gl.RENDERBUFFER,
										this.depthBuffer,
									)),
							  o &&
									!s &&
									((this.stencilBuffer = this.gl.createRenderbuffer()),
									this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
									this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, e, r),
									this.gl.framebufferRenderbuffer(
										this.target,
										this.gl.STENCIL_ATTACHMENT,
										this.gl.RENDERBUFFER,
										this.stencilBuffer,
									)),
							  s &&
									o &&
									((this.depthStencilBuffer = this.gl.createRenderbuffer()),
									this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer),
									this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, e, r),
									this.gl.framebufferRenderbuffer(
										this.target,
										this.gl.DEPTH_STENCIL_ATTACHMENT,
										this.gl.RENDERBUFFER,
										this.depthStencilBuffer,
									))),
						this.gl.bindFramebuffer(this.target, null);
				}
			}
			const et = new x();
			let rt = 1,
				it = 1,
				nt = !1;
			class st {
				constructor(t, e = {}) {
					t.canvas || console.error('gl not passed as fist argument to Geometry'),
						(this.gl = t),
						(this.attributes = e),
						(this.id = rt++),
						(this.VAOs = {}),
						(this.drawRange = { start: 0, count: 0 }),
						(this.instancedCount = 0),
						this.gl.renderer.bindVertexArray(null),
						(this.gl.renderer.currentGeometry = null),
						(this.glState = this.gl.renderer.state);
					for (let t in e) this.addAttribute(t, e[t]);
				}
				addAttribute(t, e) {
					if (
						((this.attributes[t] = e),
						(e.id = it++),
						(e.size = e.size || 1),
						(e.type =
							e.type ||
							(e.data.constructor === Float32Array
								? this.gl.FLOAT
								: e.data.constructor === Uint16Array
								? this.gl.UNSIGNED_SHORT
								: this.gl.UNSIGNED_INT)),
						(e.target = 'index' === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER),
						(e.normalized = e.normalized || !1),
						(e.stride = e.stride || 0),
						(e.offset = e.offset || 0),
						(e.count = e.count || e.data.length / e.size),
						(e.divisor = e.instanced || 0),
						(e.needsUpdate = !1),
						e.buffer || ((e.buffer = this.gl.createBuffer()), this.updateAttribute(e)),
						e.divisor)
					) {
						if (
							((this.isInstanced = !0),
							this.instancedCount && this.instancedCount !== e.count * e.divisor)
						)
							return (
								console.warn('geometry has multiple instanced buffers of different length'),
								(this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor))
							);
						this.instancedCount = e.count * e.divisor;
					} else
						'index' === t
							? (this.drawRange.count = e.count)
							: this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count));
				}
				updateAttribute(t) {
					this.glState.boundBuffer !== t.buffer &&
						(this.gl.bindBuffer(t.target, t.buffer), (this.glState.boundBuffer = t.buffer)),
						this.gl.bufferData(t.target, t.data, this.gl.STATIC_DRAW),
						(t.needsUpdate = !1);
				}
				setIndex(t) {
					this.addAttribute('index', t);
				}
				setDrawRange(t, e) {
					(this.drawRange.start = t), (this.drawRange.count = e);
				}
				setInstancedCount(t) {
					this.instancedCount = t;
				}
				createVAO(t) {
					(this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray()),
						this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
						this.bindAttributes(t);
				}
				bindAttributes(t) {
					t.attributeLocations.forEach((t, e) => {
						if (!this.attributes[e]) return void console.warn(`active attribute ${e} not being supplied`);
						const r = this.attributes[e];
						this.gl.bindBuffer(r.target, r.buffer),
							(this.glState.boundBuffer = r.buffer),
							this.gl.vertexAttribPointer(t, r.size, r.type, r.normalized, r.stride, r.offset),
							this.gl.enableVertexAttribArray(t),
							this.gl.renderer.vertexAttribDivisor(t, r.divisor);
					}),
						this.attributes.index &&
							this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
				}
				draw({ program: t, mode: e = this.gl.TRIANGLES }) {
					this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` &&
						(this.VAOs[t.attributeOrder] || this.createVAO(t),
						this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
						(this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`)),
						t.attributeLocations.forEach((t, e) => {
							const r = this.attributes[e];
							r.needsUpdate && this.updateAttribute(r);
						}),
						this.isInstanced
							? this.attributes.index
								? this.gl.renderer.drawElementsInstanced(
										e,
										this.drawRange.count,
										this.attributes.index.type,
										this.drawRange.start,
										this.instancedCount,
								  )
								: this.gl.renderer.drawArraysInstanced(
										e,
										this.drawRange.start,
										this.drawRange.count,
										this.instancedCount,
								  )
							: this.attributes.index
							? this.gl.drawElements(
									e,
									this.drawRange.count,
									this.attributes.index.type,
									this.attributes.index.offset + 2 * this.drawRange.start,
							  )
							: this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count);
				}
				getPositionArray() {
					const t = this.attributes.position;
					return t.min
						? [...t.min, ...t.max]
						: t.data
						? t.data
						: nt
						? void 0
						: (console.warn('No position buffer data found to compute bounds'), (nt = !0));
				}
				computeBoundingBox(t) {
					t || (t = this.getPositionArray()),
						this.bounds ||
							(this.bounds = {
								min: new x(),
								max: new x(),
								center: new x(),
								scale: new x(),
								radius: 1 / 0,
							});
					const e = this.bounds.min,
						r = this.bounds.max,
						i = this.bounds.center,
						n = this.bounds.scale;
					e.set(1 / 0), r.set(-1 / 0);
					for (let i = 0, n = t.length; i < n; i += 3) {
						const n = t[i],
							s = t[i + 1],
							o = t[i + 2];
						(e.x = Math.min(n, e.x)),
							(e.y = Math.min(s, e.y)),
							(e.z = Math.min(o, e.z)),
							(r.x = Math.max(n, r.x)),
							(r.y = Math.max(s, r.y)),
							(r.z = Math.max(o, r.z));
					}
					n.sub(r, e), i.add(e, r).divide(2);
				}
				computeBoundingSphere(t) {
					t || (t = this.getPositionArray()), this.bounds || this.computeBoundingBox(t);
					let e = 0;
					for (let r = 0, i = t.length; r < i; r += 3)
						et.fromArray(t, r), (e = Math.max(e, this.bounds.center.squaredDistance(et)));
					this.bounds.radius = Math.sqrt(e);
				}
				remove() {
					this.vao && this.gl.renderer.deleteVertexArray(this.vao);
					for (let t in this.attributes)
						this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t];
				}
			}
			class ot extends st {
				constructor(t, { attributes: e = {} } = {}) {
					Object.assign(e, {
						position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
						uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
					}),
						super(t, e);
				}
			}
			class at {
				constructor(t, { data: e = new Float32Array(16), geometry: r = new ot(t), type: i }) {
					this.gl = t;
					const n = e;
					(this.passes = []),
						(this.geometry = r),
						(this.dataLength = n.length / 4),
						(this.size = Math.pow(
							2,
							Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2),
						)),
						(this.coords = new Float32Array(2 * this.dataLength));
					for (let t = 0; t < this.dataLength; t++) {
						const e = (t % this.size) / this.size,
							r = Math.floor(t / this.size) / this.size;
						this.coords.set([e, r], 2 * t);
					}
					const s = (() => {
						if (n.length === this.size * this.size * 4) return n;
						{
							const t = new Float32Array(this.size * this.size * 4);
							return t.set(n), t;
						}
					})();
					this.uniform = {
						value: new J(t, {
							image: s,
							target: t.TEXTURE_2D,
							type: t.FLOAT,
							format: t.RGBA,
							internalFormat: t.renderer.isWebgl2 ? t.RGBA32F : t.RGBA,
							wrapS: t.CLAMP_TO_EDGE,
							wrapT: t.CLAMP_TO_EDGE,
							generateMipmaps: !1,
							minFilter: t.NEAREST,
							magFilter: t.NEAREST,
							width: this.size,
							flipY: !1,
						}),
					};
					const o = {
						width: this.size,
						height: this.size,
						type: i || t.HALF_FLOAT || t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES,
						format: t.RGBA,
						internalFormat: t.renderer.isWebgl2 ? (i === t.FLOAT ? t.RGBA32F : t.RGBA16F) : t.RGBA,
						minFilter: t.NEAREST,
						depth: !1,
						unpackAlignment: 1,
					};
					this.fbo = {
						read: new tt(t, o),
						write: new tt(t, o),
						swap: () => {
							let t = this.fbo.read;
							(this.fbo.read = this.fbo.write),
								(this.fbo.write = t),
								(this.uniform.value = this.fbo.read.texture);
						},
					};
				}
				addPass({
					vertex: t = ht,
					fragment: e = lt,
					uniforms: r = {},
					textureUniform: i = 'tMap',
					enabled: n = !0,
				} = {}) {
					r[i] = this.uniform;
					const s = new V(this.gl, { vertex: t, fragment: e, uniforms: r }),
						o = {
							mesh: new H(this.gl, { geometry: this.geometry, program: s }),
							program: s,
							uniforms: r,
							enabled: n,
							textureUniform: i,
						};
					return this.passes.push(o), o;
				}
				render() {
					this.passes
						.filter(t => t.enabled)
						.forEach((t, e) => {
							this.gl.renderer.render({ scene: t.mesh, target: this.fbo.write, clear: !1 }),
								this.fbo.swap();
						});
				}
			}
			const ht =
					'\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n',
				lt =
					'\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n',
				ct = new x(),
				ut = new x(),
				dt = new x(),
				mt = new T();
			class gt {
				constructor(t) {
					(this.gl = t), (this.origin = new x()), (this.direction = new x());
				}
				castMouse(t, e = [0, 0]) {
					if ('orthographic' === t.type) {
						const { left: r, right: i, bottom: n, top: s, zoom: o } = t,
							a = r / o + ((i - r) / o) * (0.5 * e[0] + 0.5),
							h = n / o + ((s - n) / o) * (0.5 * e[1] + 0.5);
						this.origin.set(a, h, 0),
							this.origin.applyMatrix4(t.worldMatrix),
							(this.direction.x = -t.worldMatrix[8]),
							(this.direction.y = -t.worldMatrix[9]),
							(this.direction.z = -t.worldMatrix[10]);
					} else
						t.worldMatrix.getTranslation(this.origin),
							this.direction.set(e[0], e[1], 0.5),
							t.unproject(this.direction),
							this.direction.sub(this.origin).normalize();
				}
				intersectBounds(t) {
					Array.isArray(t) || (t = [t]);
					const e = mt,
						r = ct,
						i = ut,
						n = [];
					return (
						t.forEach(t => {
							t.geometry.bounds || t.geometry.computeBoundingBox(),
								'sphere' === t.geometry.raycast &&
									t.geometry.bounds.radius === 1 / 0 &&
									t.geometry.computeBoundingSphere(),
								e.inverse(t.worldMatrix),
								r.copy(this.origin).applyMatrix4(e),
								i.copy(this.direction).transformDirection(e);
							let s = 0;
							(s =
								'sphere' === t.geometry.raycast
									? this.intersectSphere(t.geometry.bounds, r, i)
									: this.intersectBox(t.geometry.bounds, r, i)),
								s &&
									(t.hit || (t.hit = { localPoint: new x(), point: new x() }),
									t.hit.localPoint.copy(i).multiply(s).add(r),
									t.hit.point.copy(t.hit.localPoint).applyMatrix4(t.worldMatrix),
									(t.hit.distance = t.hit.point.distance(this.origin)),
									n.push(t));
						}),
						n.sort((t, e) => t.hit.distance - e.hit.distance),
						n
					);
				}
				intersectSphere(t, e = this.origin, r = this.direction) {
					const i = dt;
					i.sub(t.center, e);
					const n = i.dot(r),
						s = i.dot(i) - n * n,
						o = t.radius * t.radius;
					if (s > o) return 0;
					const a = Math.sqrt(o - s),
						h = n - a,
						l = n + a;
					return h < 0 && l < 0 ? 0 : h < 0 ? l : h;
				}
				intersectBox(t, e = this.origin, r = this.direction) {
					let i, n, s, o, a, h;
					const l = 1 / r.x,
						c = 1 / r.y,
						u = 1 / r.z,
						d = t.min,
						m = t.max;
					return (
						(i = ((l >= 0 ? d.x : m.x) - e.x) * l),
						(n = ((l >= 0 ? m.x : d.x) - e.x) * l),
						(s = ((c >= 0 ? d.y : m.y) - e.y) * c),
						(o = ((c >= 0 ? m.y : d.y) - e.y) * c),
						i > o || s > n
							? 0
							: (s > i && (i = s),
							  o < n && (n = o),
							  (a = ((u >= 0 ? d.z : m.z) - e.z) * u),
							  (h = ((u >= 0 ? m.z : d.z) - e.z) * u),
							  i > h || a > n ? 0 : (a > i && (i = a), h < n && (n = h), n < 0 ? 0 : i >= 0 ? i : n))
					);
				}
			}
			var pt = r(0);
			const ft = new x();
			let vt = 1;
			class bt {
				constructor({
					canvas: t = document.createElement('canvas'),
					width: e = 300,
					height: r = 150,
					dpr: i = 1,
					alpha: n = !1,
					depth: s = !0,
					stencil: o = !1,
					antialias: a = !1,
					premultipliedAlpha: h = !1,
					preserveDrawingBuffer: l = !1,
					powerPreference: c = 'default',
					autoClear: u = !0,
					webgl: d = 2,
				} = {}) {
					const m = {
						alpha: n,
						depth: s,
						stencil: o,
						antialias: a,
						premultipliedAlpha: h,
						preserveDrawingBuffer: l,
						powerPreference: c,
					};
					(this.dpr = i),
						(this.alpha = n),
						(this.color = !0),
						(this.depth = s),
						(this.stencil = o),
						(this.premultipliedAlpha = h),
						(this.autoClear = u),
						(this.id = vt++),
						2 === d && (this.gl = t.getContext('webgl2', m)),
						(this.isWebgl2 = !!this.gl),
						this.gl || (this.gl = t.getContext('webgl', m) || t.getContext('experimental-webgl', m)),
						(this.gl.renderer = this),
						this.setSize(e, r),
						(this.state = {}),
						(this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }),
						(this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }),
						(this.state.cullFace = null),
						(this.state.frontFace = this.gl.CCW),
						(this.state.depthMask = !0),
						(this.state.depthFunc = this.gl.LESS),
						(this.state.premultiplyAlpha = !1),
						(this.state.flipY = !1),
						(this.state.unpackAlignment = 4),
						(this.state.framebuffer = null),
						(this.state.viewport = { width: null, height: null }),
						(this.state.textureUnits = []),
						(this.state.activeTextureUnit = 0),
						(this.state.boundBuffer = null),
						(this.state.uniformLocations = new Map()),
						(this.extensions = {}),
						this.isWebgl2
							? (this.getExtension('EXT_color_buffer_float'),
							  this.getExtension('OES_texture_float_linear'))
							: (this.getExtension('OES_texture_float'),
							  this.getExtension('OES_texture_float_linear'),
							  this.getExtension('OES_texture_half_float'),
							  this.getExtension('OES_texture_half_float_linear'),
							  this.getExtension('OES_element_index_uint'),
							  this.getExtension('OES_standard_derivatives'),
							  this.getExtension('EXT_sRGB'),
							  this.getExtension('WEBGL_depth_texture'),
							  this.getExtension('WEBGL_draw_buffers')),
						(this.vertexAttribDivisor = this.getExtension(
							'ANGLE_instanced_arrays',
							'vertexAttribDivisor',
							'vertexAttribDivisorANGLE',
						)),
						(this.drawArraysInstanced = this.getExtension(
							'ANGLE_instanced_arrays',
							'drawArraysInstanced',
							'drawArraysInstancedANGLE',
						)),
						(this.drawElementsInstanced = this.getExtension(
							'ANGLE_instanced_arrays',
							'drawElementsInstanced',
							'drawElementsInstancedANGLE',
						)),
						(this.createVertexArray = this.getExtension(
							'OES_vertex_array_object',
							'createVertexArray',
							'createVertexArrayOES',
						)),
						(this.bindVertexArray = this.getExtension(
							'OES_vertex_array_object',
							'bindVertexArray',
							'bindVertexArrayOES',
						)),
						(this.deleteVertexArray = this.getExtension(
							'OES_vertex_array_object',
							'deleteVertexArray',
							'deleteVertexArrayOES',
						)),
						(this.drawBuffers = this.getExtension('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL')),
						(this.parameters = {}),
						(this.parameters.maxTextureUnits = this.gl.getParameter(
							this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS,
						)),
						(this.parameters.maxAnisotropy = this.getExtension('EXT_texture_filter_anisotropic')
							? this.gl.getParameter(
									this.getExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT,
							  )
							: 0);
				}
				setSize(t, e) {
					(this.width = t),
						(this.height = e),
						(this.gl.canvas.width = t * this.dpr),
						(this.gl.canvas.height = e * this.dpr),
						Object.assign(this.gl.canvas.style, { width: t + 'px', height: e + 'px' });
				}
				setViewport(t, e) {
					(this.state.viewport.width === t && this.state.viewport.height === e) ||
						((this.state.viewport.width = t),
						(this.state.viewport.height = e),
						this.gl.viewport(0, 0, t, e));
				}
				enable(t) {
					!0 !== this.state[t] && (this.gl.enable(t), (this.state[t] = !0));
				}
				disable(t) {
					!1 !== this.state[t] && (this.gl.disable(t), (this.state[t] = !1));
				}
				setBlendFunc(t, e, r, i) {
					(this.state.blendFunc.src === t &&
						this.state.blendFunc.dst === e &&
						this.state.blendFunc.srcAlpha === r &&
						this.state.blendFunc.dstAlpha === i) ||
						((this.state.blendFunc.src = t),
						(this.state.blendFunc.dst = e),
						(this.state.blendFunc.srcAlpha = r),
						(this.state.blendFunc.dstAlpha = i),
						void 0 !== r ? this.gl.blendFuncSeparate(t, e, r, i) : this.gl.blendFunc(t, e));
				}
				setBlendEquation(t, e) {
					(this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e) ||
						((this.state.blendEquation.modeRGB = t),
						(this.state.blendEquation.modeAlpha = e),
						void 0 !== e ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t));
				}
				setCullFace(t) {
					this.state.cullFace !== t && ((this.state.cullFace = t), this.gl.cullFace(t));
				}
				setFrontFace(t) {
					this.state.frontFace !== t && ((this.state.frontFace = t), this.gl.frontFace(t));
				}
				setDepthMask(t) {
					this.state.depthMask !== t && ((this.state.depthMask = t), this.gl.depthMask(t));
				}
				setDepthFunc(t) {
					this.state.depthFunc !== t && ((this.state.depthFunc = t), this.gl.depthFunc(t));
				}
				activeTexture(t) {
					this.state.activeTextureUnit !== t &&
						((this.state.activeTextureUnit = t), this.gl.activeTexture(this.gl.TEXTURE0 + t));
				}
				bindFramebuffer({ target: t = this.gl.FRAMEBUFFER, buffer: e = null } = {}) {
					this.state.framebuffer !== e && ((this.state.framebuffer = e), this.gl.bindFramebuffer(t, e));
				}
				getExtension(t, e, r) {
					return e && this.gl[e]
						? this.gl[e].bind(this.gl)
						: (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)),
						  e
								? this.extensions[t]
									? this.extensions[t][r].bind(this.extensions[t])
									: null
								: this.extensions[t]);
				}
				sortOpaque(t, e) {
					return t.renderOrder !== e.renderOrder
						? t.renderOrder - e.renderOrder
						: t.program.id !== e.program.id
						? t.program.id - e.program.id
						: t.zDepth !== e.zDepth
						? t.zDepth - e.zDepth
						: e.id - t.id;
				}
				sortTransparent(t, e) {
					return t.renderOrder !== e.renderOrder
						? t.renderOrder - e.renderOrder
						: t.zDepth !== e.zDepth
						? e.zDepth - t.zDepth
						: e.id - t.id;
				}
				sortUI(t, e) {
					return t.renderOrder !== e.renderOrder
						? t.renderOrder - e.renderOrder
						: t.program.id !== e.program.id
						? t.program.id - e.program.id
						: e.id - t.id;
				}
				getRenderList({ scene: t, camera: e, frustumCull: r, sort: i }) {
					let n = [];
					if (
						(e && r && e.updateFrustum(),
						t.traverse(t => {
							if (!t.visible) return !0;
							t.draw && ((r && t.frustumCulled && e && !e.frustumIntersectsMesh(t)) || n.push(t));
						}),
						i)
					) {
						const t = [],
							r = [],
							i = [];
						n.forEach(n => {
							n.program.transparent ? (n.program.depthTest ? r.push(n) : i.push(n)) : t.push(n),
								(n.zDepth = 0),
								0 === n.renderOrder &&
									n.program.depthTest &&
									e &&
									(n.worldMatrix.getTranslation(ft),
									ft.applyMatrix4(e.projectionViewMatrix),
									(n.zDepth = ft.z));
						}),
							t.sort(this.sortOpaque),
							r.sort(this.sortTransparent),
							i.sort(this.sortUI),
							(n = t.concat(r, i));
					}
					return n;
				}
				render({
					scene: t,
					camera: e,
					target: r = null,
					update: i = !0,
					sort: n = !0,
					frustumCull: s = !0,
					clear: o,
				}) {
					null === r
						? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr))
						: (this.bindFramebuffer(r), this.setViewport(r.width, r.height)),
						(o || (this.autoClear && !1 !== o)) &&
							(!this.depth || (r && !r.depth) || (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
							this.gl.clear(
								(this.color ? this.gl.COLOR_BUFFER_BIT : 0) |
									(this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
									(this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0),
							)),
						i && t.updateMatrixWorld(),
						e && e.updateMatrixWorld(),
						this.getRenderList({ scene: t, camera: e, frustumCull: s, sort: n }).forEach(t => {
							t.draw({ camera: e });
						});
				}
			}
			class yt {
				constructor(
					t,
					{
						width: e,
						height: r,
						dpr: i,
						wrapS: n = t.CLAMP_TO_EDGE,
						wrapT: s = t.CLAMP_TO_EDGE,
						minFilter: o = t.LINEAR,
						magFilter: a = t.LINEAR,
						geometry: h = new ot(t),
						targetOnly: l = null,
					} = {},
				) {
					(this.gl = t),
						(this.options = { wrapS: n, wrapT: s, minFilter: o, magFilter: a }),
						(this.passes = []),
						(this.geometry = h),
						(this.uniform = { value: null }),
						(this.targetOnly = l);
					const c = (this.fbo = {
						read: null,
						write: null,
						swap: () => {
							let t = c.read;
							(c.read = c.write), (c.write = t);
						},
					});
					this.resize({ width: e, height: r, dpr: i });
				}
				addPass({
					vertex: t = xt,
					fragment: e = wt,
					uniforms: r = {},
					textureUniform: i = 'tMap',
					enabled: n = !0,
				} = {}) {
					r[i] = { value: this.fbo.read.texture };
					const s = new V(this.gl, { vertex: t, fragment: e, uniforms: r }),
						o = {
							mesh: new H(this.gl, { geometry: this.geometry, program: s }),
							program: s,
							uniforms: r,
							enabled: n,
							textureUniform: i,
						};
					return this.passes.push(o), o;
				}
				resize({ width: t, height: e, dpr: r } = {}) {
					r && (this.dpr = r),
						t && ((this.width = t), (this.height = e || t)),
						(r = this.dpr || this.gl.renderer.dpr),
						(t = (this.width || this.gl.renderer.width) * r),
						(e = (this.height || this.gl.renderer.height) * r),
						(this.options.width = t),
						(this.options.height = e),
						(this.fbo.read = new tt(this.gl, this.options)),
						(this.fbo.write = new tt(this.gl, this.options));
				}
				render({ scene: t, camera: e, target: r = null, update: i = !0, sort: n = !0, frustumCull: s = !0 }) {
					const o = this.passes.filter(t => t.enabled);
					this.gl.renderer.render({
						scene: t,
						camera: e,
						target: o.length || (!r && this.targetOnly) ? this.fbo.write : r,
						update: i,
						sort: n,
						frustumCull: s,
					}),
						this.fbo.swap(),
						o.forEach((t, e) => {
							(t.mesh.program.uniforms[t.textureUniform].value = this.fbo.read.texture),
								this.gl.renderer.render({
									scene: t.mesh,
									target: e !== o.length - 1 || (!r && this.targetOnly) ? this.fbo.write : r,
									clear: !0,
								}),
								this.fbo.swap();
						}),
						(this.uniform.value = this.fbo.read.texture);
				}
			}
			const xt =
					'\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n',
				wt =
					'\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n',
				Mt = new x(),
				Et = new x(),
				At = new x(),
				St = new x(),
				Ct = new D(),
				_t = new D(),
				Lt = new D(),
				Pt = new D();
			class Ot {
				constructor(t, e = 1) {
					(this.data = t),
						(this.elapsed = 0),
						(this.weight = e),
						(this.loop = !0),
						(this.duration = t.reduce((t, { times: e }) => Math.max(t, e[e.length - 1]), 0));
				}
				update(t = 1, e) {
					const r = e ? 1 : this.weight / t,
						i = this.loop ? this.elapsed % this.duration : Math.min(this.elapsed, this.duration);
					this.data.forEach(({ node: t, transform: e, interpolation: n, times: s, values: o }) => {
						const a =
								Math.max(
									1,
									s.findIndex(t => t > i),
								) - 1,
							h = a + 1;
						let l = (i - s[a]) / (s[h] - s[a]);
						'STEP' === n && (l = 0);
						let c = Mt,
							u = Et,
							d = At,
							m = St,
							g = 3;
						'quaternion' === e && ((c = Ct), (u = _t), (d = Lt), (m = Pt), (g = 4)),
							'CUBICSPLINE' === n
								? (c.fromArray(o, a * g * 3 + 1 * g),
								  u.fromArray(o, a * g * 3 + 2 * g),
								  d.fromArray(o, h * g * 3 + 0 * g),
								  m.fromArray(o, h * g * 3 + 1 * g),
								  (c = this.cubicSplineInterpolate(l, c, u, d, m)),
								  4 === g && c.normalize())
								: (c.fromArray(o, a * g),
								  m.fromArray(o, h * g),
								  4 === g ? c.slerp(m, l) : c.lerp(m, l)),
							4 === g ? t[e].slerp(c, r) : t[e].lerp(c, r);
					});
				}
				cubicSplineInterpolate(t, e, r, i, n) {
					const s = t * t,
						o = s * t,
						a = 3 * s - 2 * o,
						h = o - s,
						l = 1 - a,
						c = h - s + t;
					for (let s = 0; s < e.length; s++)
						e[s] = l * e[s] + c * ((1 - t) * r[s]) + a * n[s] + h * (t * i[s]);
					return e;
				}
			}
			const Tt =
					'\n    precision highp float;\n    precision highp int;\n\n    attribute vec3 position;\n    attribute vec3 normal;\n\n    uniform mat3 normalMatrix;\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n\n    varying vec3 vNormal;\n\n    void main() {\n        vNormal = normalize(normalMatrix * normal);\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n',
				Nt =
					'\n    precision highp float;\n    precision highp int;\n\n    varying vec3 vNormal;\n\n    void main() {\n        gl_FragColor.rgb = normalize(vNormal);\n        gl_FragColor.a = 1.0;\n    }\n';
			function Rt(t) {
				return new V(t, { vertex: Tt, fragment: Nt, cullFace: null });
			}
			const Ft = { 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array },
				zt = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
				jt = {
					POSITION: 'position',
					NORMAL: 'normal',
					TANGENT: 'tangent',
					TEXCOORD_0: 'uv',
					TEXCOORD_1: 'uv2',
					COLOR_0: 'color',
					WEIGHTS_0: 'skinWeight',
					JOINTS_0: 'skinIndex',
				},
				Dt = { translation: 'position', rotation: 'quaternion', scale: 'scale' };
			class Ut {
				static async load(t, e) {
					const r = e.split('/').slice(0, -1).join('/') + '/',
						i = await fetch(e).then(t => t.json());
					(void 0 === i.asset || i.asset.version[0] < 2) &&
						console.warn('Only GLTF >=2.0 supported. Attempting to parse.');
					const n = await this.loadBuffers(i, r),
						s = this.parseBufferViews(t, i, n),
						o = this.parseMeshes(t, i, s),
						a = this.parseNodes(t, i, o),
						h = this.parseAnimations(t, i, a, s),
						l = this.parseScenes(i, a);
					return {
						json: i,
						buffers: n,
						bufferViews: s,
						meshes: o,
						nodes: a,
						animations: h,
						scenes: l,
						scene: l[i.scene],
					};
				}
				static resolveURI(t, e) {
					return 'string' != typeof t || '' === t
						? ''
						: (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, '$1')),
						  /^(https?:)?\/\//i.test(t)
								? t
								: /^data:.*,.*$/i.test(t)
								? t
								: /^blob:.*$/i.test(t)
								? t
								: e + t);
				}
				static async loadBuffers(t, e) {
					return await Promise.all(
						t.buffers.map(t => {
							const r = this.resolveURI(t.uri, e);
							return fetch(r).then(t => t.arrayBuffer());
						}),
					);
				}
				static parseBufferViews(t, e, r) {
					const i = e.bufferViews.map(t => Object.assign({}, t));
					return (
						e.meshes.forEach(({ primitives: r }) => {
							r.forEach(({ attributes: r, indices: n }) => {
								for (let t in r) i[e.accessors[r[t]].bufferView].isAttribute = !0;
								void 0 !== n &&
									((i[e.accessors[n].bufferView].isAttribute = !0),
									(i[e.accessors[n].bufferView].target = t.ELEMENT_ARRAY_BUFFER));
							});
						}),
						e.accessors.forEach(({ bufferView: t, componentType: e }) => {
							i[t].componentType = e;
						}),
						i.forEach(
							(
								{
									buffer: e,
									byteOffset: n = 0,
									byteLength: s,
									byteStride: o,
									target: a = t.ARRAY_BUFFER,
									name: h,
									extensions: l,
									extras: c,
									componentType: u,
									isAttribute: d,
								},
								m,
							) => {
								const g = Ft[u],
									p = g.BYTES_PER_ELEMENT,
									f = new g(r[e], n, s / p);
								if (((i[m].data = f), !d)) return;
								const v = t.createBuffer();
								t.bindBuffer(a, v),
									(t.renderer.state.boundBuffer = v),
									t.bufferData(a, f, t.STATIC_DRAW),
									(i[m].buffer = v);
							},
						),
						i
					);
				}
				static parseMeshes(t, e, r) {
					return e.meshes.map(({ primitives: i, weights: n, name: s, extensions: o, extras: a }) => ({
						primitives: this.parsePrimitives(t, i, e, r),
						weights: n,
						name: s,
					}));
				}
				static parsePrimitives(t, e, r, i) {
					return e.map(
						({
							attributes: e,
							indices: n,
							material: s,
							mode: o = 4,
							targets: a,
							extensions: h,
							extras: l,
						}) => {
							const c = new st(t);
							for (let t in e) c.addAttribute(jt[t], this.parseAccessor(e[t], r, i));
							return (
								void 0 !== n && c.addAttribute('index', this.parseAccessor(n, r, i)),
								{ geometry: c, program: new Rt(t), mode: o }
							);
						},
					);
				}
				static parseAccessor(t, e, r) {
					const {
							bufferView: i,
							byteOffset: n = 0,
							componentType: s,
							normalized: o = !1,
							count: a,
							type: h,
							min: l,
							max: c,
							sparse: u,
						} = e.accessors[t],
						{ data: d, buffer: m, byteStride: g = 0, target: p } = r[i];
					return {
						data: d,
						size: zt[h],
						type: s,
						normalized: o,
						buffer: m,
						stride: g,
						offset: n,
						count: a,
						min: l,
						max: c,
					};
				}
				static parseNodes(t, e, r) {
					const i = e.nodes.map(
						({
							camera: e,
							children: i,
							skin: n,
							matrix: s,
							mesh: o,
							rotation: a,
							scale: h,
							translation: l,
							weights: c,
							name: u,
							extensions: d,
							extras: m,
						}) => {
							const g = new W();
							return (
								s
									? (g.matrix.copy(s), g.decompose())
									: (a && g.quaternion.copy(a), h && g.scale.copy(h), l && g.position.copy(l)),
								void 0 !== o &&
									r[o].primitives.forEach(({ geometry: e, program: r, mode: i }) => {
										new H(t, { geometry: e, program: r, mode: i }).setParent(g);
									}),
								g
							);
						},
					);
					return (
						e.nodes.forEach(({ children: t = [] }, e) => {
							t.forEach(t => {
								i[t].setParent(i[e]);
							});
						}),
						i
					);
				}
				static parseAnimations(t, e, r, i) {
					return e.animations
						? e.animations.map(({ channels: t, samplers: n, name: s }) => {
								const o = t.map(({ sampler: t, target: s }) => {
									const { input: o, interpolation: a = 'LINEAR', output: h } = n[t],
										{ node: l, path: c } = s,
										u = r[l],
										d = Dt[c],
										m = this.parseAccessor(o, e, i),
										g = m.data.slice(m.offset / 4, m.count * m.size),
										p = this.parseAccessor(h, e, i);
									return {
										node: u,
										transform: d,
										interpolation: a,
										times: g,
										values: p.data.slice(p.offset / 4, p.count * p.size),
									};
								});
								return { name: s, animation: new Ot(o) };
						  })
						: null;
				}
				static parseScenes(t, e) {
					return t.scenes.map(({ nodes: t = [], name: r, extensions: i, extras: n }) => t.map(t => e[t]));
				}
			}
			const Bt = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, DOLLY_PAN: 3 },
				It = new x(),
				Gt = new l(),
				Vt = new l();
			function kt(
				t,
				{
					element: e = document,
					enabled: r = !0,
					target: i = new x(),
					ease: n = 0.25,
					inertia: s = 0.85,
					enableRotate: o = !0,
					rotateSpeed: a = 0.1,
					enableZoom: h = !0,
					zoomSpeed: c = 1,
					enablePan: u = !0,
					panSpeed: d = 0.1,
					minPolarAngle: m = 0,
					maxPolarAngle: g = Math.PI,
					minAzimuthAngle: p = -1 / 0,
					maxAzimuthAngle: f = 1 / 0,
					minDistance: v = 0,
					maxDistance: b = 1 / 0,
				} = {},
			) {
				(this.enabled = r),
					(this.target = i),
					(n = n || 1),
					(s = s || 1),
					(this.minDistance = v),
					(this.maxDistance = b);
				const y = { radius: 1, phi: 0, theta: 0 },
					w = { radius: 1, phi: 0, theta: 0 },
					M = { radius: 1, phi: 0, theta: 0 },
					E = new x(),
					A = new x();
				A.copy(t.position).sub(this.target),
					(M.radius = w.radius = A.distance()),
					(M.theta = w.theta = Math.atan2(A.x, A.z)),
					(M.phi = w.phi = Math.acos(Math.min(Math.max(A.y / w.radius, -1), 1))),
					(this.update = () => {
						(w.radius *= y.radius),
							(w.theta += y.theta),
							(w.phi += y.phi),
							(w.theta = Math.max(p, Math.min(f, w.theta))),
							(w.phi = Math.max(m, Math.min(g, w.phi))),
							(w.radius = Math.max(this.minDistance, Math.min(this.maxDistance, w.radius))),
							(M.phi += (w.phi - M.phi) * n),
							(M.theta += (w.theta - M.theta) * n),
							(M.radius += (w.radius - M.radius) * n),
							this.target.add(E);
						let e = M.radius * Math.sin(Math.max(1e-6, M.phi));
						(A.x = e * Math.sin(M.theta)),
							(A.y = M.radius * Math.cos(M.phi)),
							(A.z = e * Math.cos(M.theta)),
							t.position.copy(this.target).add(A),
							t.lookAt(this.target),
							(y.theta *= s),
							(y.phi *= s),
							E.multiply(s),
							(y.radius = 1);
					});
				const S = new l(),
					C = new l(),
					_ = new l();
				let L = Bt.NONE;
				function P() {
					return Math.pow(0.95, c);
				}
				this.mouseButtons = { ORBIT: 0, ZOOM: 1, PAN: 2 };
				const O = (r, i) => {
					let n = e === document ? document.body : e;
					It.copy(t.position).sub(this.target);
					let s = It.distance();
					(s *= Math.tan((((t.fov || 45) / 2) * Math.PI) / 180)),
						(function (t, e) {
							It.set(e[0], e[1], e[2]), It.multiply(-t), E.add(It);
						})((2 * r * s) / n.clientHeight, t.matrix),
						(function (t, e) {
							It.set(e[4], e[5], e[6]), It.multiply(t), E.add(It);
						})((2 * i * s) / n.clientHeight, t.matrix);
				};
				function T(t) {
					y.radius /= t;
				}
				function N(t, r) {
					Gt.set(t, r), Vt.sub(Gt, S).multiply(a);
					let i = e === document ? document.body : e;
					(y.theta -= (2 * Math.PI * Vt.x) / i.clientHeight),
						(y.phi -= (2 * Math.PI * Vt.y) / i.clientHeight),
						S.copy(Gt);
				}
				function R(t, e) {
					Gt.set(t, e), Vt.sub(Gt, C).multiply(d), O(Vt.x, Vt.y), C.copy(Gt);
				}
				const F = t => {
						if (this.enabled) {
							switch (t.button) {
								case this.mouseButtons.ORBIT:
									if (!1 === o) return;
									S.set(t.clientX, t.clientY), (L = Bt.ROTATE);
									break;
								case this.mouseButtons.ZOOM:
									if (!1 === h) return;
									_.set(t.clientX, t.clientY), (L = Bt.DOLLY);
									break;
								case this.mouseButtons.PAN:
									if (!1 === u) return;
									C.set(t.clientX, t.clientY), (L = Bt.PAN);
							}
							L !== Bt.NONE &&
								(window.addEventListener('mousemove', z, !1),
								window.addEventListener('mouseup', j, !1));
						}
					},
					z = t => {
						if (this.enabled)
							switch (L) {
								case Bt.ROTATE:
									if (!1 === o) return;
									N(t.clientX, t.clientY);
									break;
								case Bt.DOLLY:
									if (!1 === h) return;
									!(function (t) {
										Gt.set(t.clientX, t.clientY),
											Vt.sub(Gt, _),
											Vt.y > 0 ? T(P()) : Vt.y < 0 && T(1 / P()),
											_.copy(Gt);
									})(t);
									break;
								case Bt.PAN:
									if (!1 === u) return;
									R(t.clientX, t.clientY);
							}
					},
					j = () => {
						window.removeEventListener('mousemove', z, !1),
							window.removeEventListener('mouseup', j, !1),
							(L = Bt.NONE);
					},
					D = t => {
						this.enabled &&
							h &&
							(L === Bt.NONE || L === Bt.ROTATE) &&
							(t.stopPropagation(),
							t.preventDefault(),
							t.deltaY < 0 ? T(1 / P()) : t.deltaY > 0 && T(P()));
					},
					U = t => {
						if (this.enabled)
							switch ((t.preventDefault(), t.touches.length)) {
								case 1:
									if (!1 === o) return;
									S.set(t.touches[0].pageX, t.touches[0].pageY), (L = Bt.ROTATE);
									break;
								case 2:
									if (!1 === h && !1 === u) return;
									!(function (t) {
										if (h) {
											let e = t.touches[0].pageX - t.touches[1].pageX,
												r = t.touches[0].pageY - t.touches[1].pageY,
												i = Math.sqrt(e * e + r * r);
											_.set(0, i);
										}
										if (u) {
											let e = 0.5 * (t.touches[0].pageX + t.touches[1].pageX),
												r = 0.5 * (t.touches[0].pageY + t.touches[1].pageY);
											C.set(e, r);
										}
									})(t),
										(L = Bt.DOLLY_PAN);
									break;
								default:
									L = Bt.NONE;
							}
					},
					B = t => {
						if (this.enabled)
							switch ((t.preventDefault(), t.stopPropagation(), t.touches.length)) {
								case 1:
									if (!1 === o) return;
									N(t.touches[0].pageX, t.touches[0].pageY);
									break;
								case 2:
									if (!1 === h && !1 === u) return;
									!(function (t) {
										if (h) {
											let e = t.touches[0].pageX - t.touches[1].pageX,
												r = t.touches[0].pageY - t.touches[1].pageY,
												i = Math.sqrt(e * e + r * r);
											Gt.set(0, i), Vt.set(0, Math.pow(Gt.y / _.y, c)), T(Vt.y), _.copy(Gt);
										}
										if (u) {
											R(
												0.5 * (t.touches[0].pageX + t.touches[1].pageX),
												0.5 * (t.touches[0].pageY + t.touches[1].pageY),
											);
										}
									})(t);
									break;
								default:
									L = Bt.NONE;
							}
					},
					I = () => {
						this.enabled && (L = Bt.NONE);
					},
					G = t => {
						this.enabled && t.preventDefault();
					};
				(this.remove = function () {
					e.removeEventListener('contextmenu', G),
						e.removeEventListener('mousedown', F),
						e.removeEventListener('wheel', D),
						e.removeEventListener('touchstart', U),
						e.removeEventListener('touchend', I),
						e.removeEventListener('touchmove', B),
						window.removeEventListener('mousemove', z),
						window.removeEventListener('mouseup', j);
				}),
					e.addEventListener('contextmenu', G, !1),
					e.addEventListener('mousedown', F, !1),
					e.addEventListener('wheel', D, { passive: !1 }),
					e.addEventListener('touchstart', U, { passive: !1 }),
					e.addEventListener('touchend', I, !1),
					e.addEventListener('touchmove', B, { passive: !1 });
			}
			const Yt = new T(),
				Xt = new x(),
				qt = new x();
			class Wt extends W {
				constructor(
					t,
					{
						near: e = 0.1,
						far: r = 100,
						fov: i = 45,
						aspect: n = 1,
						left: s,
						right: o,
						bottom: a,
						top: h,
						zoom: l = 1,
					} = {},
				) {
					super(),
						Object.assign(this, {
							near: e,
							far: r,
							fov: i,
							aspect: n,
							left: s,
							right: o,
							bottom: a,
							top: h,
							zoom: l,
						}),
						(this.projectionMatrix = new T()),
						(this.viewMatrix = new T()),
						(this.projectionViewMatrix = new T()),
						(this.worldPosition = new x()),
						(this.type = s || o ? 'orthographic' : 'perspective'),
						'orthographic' === this.type ? this.orthographic() : this.perspective();
				}
				perspective({
					near: t = this.near,
					far: e = this.far,
					fov: r = this.fov,
					aspect: i = this.aspect,
				} = {}) {
					return (
						Object.assign(this, { near: t, far: e, fov: r, aspect: i }),
						this.projectionMatrix.fromPerspective({ fov: r * (Math.PI / 180), aspect: i, near: t, far: e }),
						(this.type = 'perspective'),
						this
					);
				}
				orthographic({
					near: t = this.near,
					far: e = this.far,
					left: r = this.left,
					right: i = this.right,
					bottom: n = this.bottom,
					top: s = this.top,
					zoom: o = this.zoom,
				} = {}) {
					return (
						Object.assign(this, { near: t, far: e, left: r, right: i, bottom: n, top: s, zoom: o }),
						(r /= o),
						(i /= o),
						(n /= o),
						(s /= o),
						this.projectionMatrix.fromOrthogonal({ left: r, right: i, bottom: n, top: s, near: t, far: e }),
						(this.type = 'orthographic'),
						this
					);
				}
				updateMatrixWorld() {
					return (
						super.updateMatrixWorld(),
						this.viewMatrix.inverse(this.worldMatrix),
						this.worldMatrix.getTranslation(this.worldPosition),
						this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix),
						this
					);
				}
				lookAt(t) {
					return super.lookAt(t, !0), this;
				}
				project(t) {
					return t.applyMatrix4(this.viewMatrix), t.applyMatrix4(this.projectionMatrix), this;
				}
				unproject(t) {
					return t.applyMatrix4(Yt.inverse(this.projectionMatrix)), t.applyMatrix4(this.worldMatrix), this;
				}
				updateFrustum() {
					this.frustum || (this.frustum = [new x(), new x(), new x(), new x(), new x(), new x()]);
					const t = this.projectionViewMatrix;
					(this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12]),
						(this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12]),
						(this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13]),
						(this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13]),
						(this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14]),
						(this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14]);
					for (let t = 0; t < 6; t++) {
						const e = 1 / this.frustum[t].distance();
						this.frustum[t].multiply(e), (this.frustum[t].constant *= e);
					}
				}
				frustumIntersectsMesh(t) {
					if (!t.geometry.attributes.position) return !0;
					if (
						((t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0) ||
							t.geometry.computeBoundingSphere(),
						!t.geometry.bounds)
					)
						return !0;
					const e = Xt;
					e.copy(t.geometry.bounds.center), e.applyMatrix4(t.worldMatrix);
					const r = t.geometry.bounds.radius * t.worldMatrix.getMaxScaleOnAxis();
					return this.frustumIntersectsSphere(e, r);
				}
				frustumIntersectsSphere(t, e) {
					const r = qt;
					for (let i = 0; i < 6; i++) {
						const n = this.frustum[i];
						if (r.copy(n).dot(t) + n.constant < -e) return !1;
					}
					return !0;
				}
			}
			class Zt {
				constructor(t, { light: e = new Wt(t), width: r = 1024, height: i = r }) {
					(this.gl = t),
						(this.light = e),
						(this.target = new tt(t, { width: r, height: i })),
						(this.depthProgram = new V(t, { vertex: Ht, fragment: $t, cullFace: null })),
						(this.castMeshes = []);
				}
				add({
					mesh: t,
					receive: e = !0,
					cast: r = !0,
					vertex: i = Ht,
					fragment: n = $t,
					uniformProjection: s = 'shadowProjectionMatrix',
					uniformView: o = 'shadowViewMatrix',
					uniformTexture: a = 'tShadow',
				}) {
					e &&
						!t.program.uniforms[s] &&
						((t.program.uniforms[s] = { value: this.light.projectionMatrix }),
						(t.program.uniforms[o] = { value: this.light.viewMatrix }),
						(t.program.uniforms[a] = { value: this.target.texture })),
						r &&
							(this.castMeshes.push(t),
							(t.colorProgram = t.program),
							t.depthProgram ||
								(t.depthProgram =
									i !== Ht || n !== $t
										? new V(gl, { vertex: i, fragment: n, cullFace: null })
										: this.depthProgram));
				}
				render({ scene: t }) {
					t.traverse(t => {
						t.draw &&
							(~this.castMeshes.indexOf(t)
								? (t.program = t.depthProgram)
								: ((t.isForceVisibility = t.visible), (t.visible = !1)));
					}),
						this.gl.renderer.render({ scene: t, camera: this.light, target: this.target }),
						t.traverse(t => {
							t.draw &&
								(~this.castMeshes.indexOf(t)
									? (t.program = t.colorProgram)
									: (t.visible = t.isForceVisibility));
						});
				}
			}
			const Ht =
					'\n    attribute vec3 position;\n    attribute vec2 uv;\n\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n\n    void main() {\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n',
				$t =
					'\n    precision highp float;\n\n    vec4 packRGBA (float v) {\n        vec4 pack = fract(vec4(1.0, 255.0, 65025.0, 16581375.0) * v);\n        pack -= pack.yzww * vec2(1.0 / 255.0, 0.0).xxxy;\n        return pack;\n    }\n\n    void main() {\n        gl_FragColor = packRGBA(gl_FragCoord.z);\n    }\n';
			class Qt extends Zt {
				async add(t, e = {}) {
					await t.model,
						(e.mesh = t.body),
						t.addEventListener('updatemesh', r => {
							const i = r.detail.oldMesh;
							(this.castMeshes = this.castMeshes.filter(t => t !== i)), this.add(t, e);
						}),
						super.add(e);
				}
				remove(t) {
					const e = t.body;
					if (e) {
						const t = this.castMeshes.indexOf(e);
						if (t >= 0) return this.castMeshes.splice(t, 1), !0;
					}
					return !1;
				}
			}
			const Kt = pt.Node.Attr,
				Jt = Symbol.for('spritejs_setAttribute'),
				te = Symbol.for('spritejs_getAttribute'),
				ee = Symbol.for('spritejs_setAttributeDefault'),
				re = Symbol.for('spritejs_declareAlias');
			class ie extends Kt {
				constructor(t) {
					super(t),
						this[ee]({
							z: 0,
							rotateX: 0,
							rotateY: 0,
							rotateZ: 0,
							rotateOrder: 'YXZ',
							scaleX: 1,
							scaleY: 1,
							scaleZ: 1,
							raycast: void 0,
							visibility: 'visible',
						}),
						this[re]('rotate', 'scale');
				}
				get z() {
					return this[te]('z');
				}
				set z(t) {
					this[Jt]('z', t);
				}
				get raycast() {
					return this[te]('raycast');
				}
				set raycast(t) {
					this[Jt]('raycast', t);
				}
				get pos() {
					return [this.x, this.y, this.z];
				}
				set pos(t) {
					Array.isArray(t) || (t = null != t.x && null != t.y && null != t.z ? [t.x, t.y, t.z] : [t, t, t]),
						(this.x = t[0]),
						(this.y = t[1]),
						(this.z = t[2]);
				}
				get rotateX() {
					return this[te]('rotateX');
				}
				set rotateX(t) {
					this[Jt]('rotateX', t);
				}
				get rotateY() {
					return this[te]('rotateY');
				}
				set rotateY(t) {
					this[Jt]('rotateY', t);
				}
				get rotateZ() {
					return this[te]('rotateZ');
				}
				set rotateZ(t) {
					this[Jt]('rotateZ', t);
				}
				get rotate() {
					return [this.rotateX, this.rotateY, this.rotateZ];
				}
				set rotate(t) {
					Array.isArray(t) || (t = [t, 0, 0]),
						(this.rotateX = t[0]),
						(this.rotateY = t[1]),
						(this.rotateZ = t[2]);
				}
				get rotateOrder() {
					return this[te]('rotateOrder');
				}
				set rotateOrder(t) {
					this[Jt]('rotateOrder', t);
				}
				get scaleX() {
					return this[te]('scaleX');
				}
				set scaleX(t) {
					this[Jt]('scaleX', t);
				}
				get scaleY() {
					return this[te]('scaleY');
				}
				set scaleY(t) {
					this[Jt]('scaleY', t);
				}
				get scaleZ() {
					return this[te]('scaleZ');
				}
				set scaleZ(t) {
					this[Jt]('scaleZ', t);
				}
				get scale() {
					return [this.scaleX, this.scaleY, this.scaleZ];
				}
				set scale(t) {
					Array.isArray(t) || (t = [t, t, t]),
						(this.scaleX = t[0]),
						(this.scaleY = t[1]),
						(this.scaleZ = t[2]);
				}
				get visibility() {
					return this[te]('visibility');
				}
				set visibility(t) {
					if ('visible' !== t && 'hidden' !== t) throw new TypeError('Invalid visiblity value.');
					this[Jt]('visibility', t);
				}
			}
			const ne = Symbol('body'),
				se = Symbol.for('spritejs_changedAttrs'),
				oe = Symbol.for('spritejs_setAttribute');
			function ae({ attributes: t }, { rotation: e }) {
				return [
					t[oe]('rotateX', (180 * e.x) / Math.PI),
					t[oe]('rotateY', (180 * e.y) / Math.PI),
					t[oe]('rotateZ', (180 * e.z) / Math.PI),
				].some(t => t);
			}
			class he extends pt.Node {
				get body() {
					return this[ne] ? this[ne] : null;
				}
				get isVisible() {
					return !!this[ne] && this[ne].visible;
				}
				get localMatrix() {
					return this.matrix;
				}
				get matrix() {
					return this[ne] ? this[ne].matrix : null;
				}
				get mesh() {
					return this.body.draw ? this.body : null;
				}
				get meshes() {
					return [];
				}
				get modelViewMatrix() {
					return this[ne] ? this[ne].modelViewMatrix : null;
				}
				get normalMatrix() {
					return this[ne] ? this[ne].normalMatrix : null;
				}
				get renderMatrix() {
					return this.worldMatrix;
				}
				get worldMatrix() {
					return this[ne] ? this[ne].worldMatrix : null;
				}
				get zDepth() {
					return this[ne] ? this[ne].zDepth : 0;
				}
				get up() {
					return this[ne] ? this[ne].up : null;
				}
				set up(t) {
					return this[ne] && (this[ne].up = t), null;
				}
				connect(t, e) {
					if ((super.connect(t, e), this[ne]))
						if (this.camera) {
							if (!t.sublayers) throw new Error('Node3d with camera should only use as sublayers');
							t.sublayers.push(this);
						} else {
							const e = t.groupBody || t.body;
							e &&
								e !== this[ne] &&
								(this[ne].setParent(e),
								t.groupBody && null == t.groupBody.parent && t.groupBody.setParent(t.body));
						}
				}
				decompose() {
					const t = this[ne];
					t && (t.decompose(), this.resyncState());
				}
				disconnect(t) {
					if ((super.disconnect(t), this[ne])) {
						if (this.camera && t.sublayers) {
							const e = t.sublayers.indexOf(this);
							e >= 0 && t.sublayers.splice(e, 1);
						}
						this[ne].setParent(null);
						const e = t.groupBody;
						e && e.children && e.children.length <= 0 && e.setParent(null);
					}
				}
				dispose() {
					this.remove();
				}
				lookAt(t, e = !1) {
					const r = this[ne];
					if (r) {
						t instanceof he && (t = t.body.position), r.lookAt(t, e), ae(this, r) && this.forceUpdate();
					}
				}
				onPropertyChange(t, e, r) {
					super.onPropertyChange(t, e, r);
					const i = this[ne];
					if (i) {
						if (
							(('x' !== t && 'y' !== t && 'z' !== t) || (i.position[t] = e),
							'rotateX' === t || 'rotateY' === t || 'rotateZ' === t)
						) {
							const r = (e * Math.PI) / 180;
							i.rotation[t.toLowerCase().slice(-1)] = r;
						}
						('scaleX' !== t && 'scaleY' !== t && 'scaleZ' !== t) ||
							(i.scale[t.toLowerCase().slice(-1)] = e),
							'raycast' === t && (i.geometry.raycast = e),
							'display' === t && (i.visible = 'none' !== e && 'visible' === this.attributes.visibility),
							'visibility' === t && (i.visible = 'visible' === e && 'none' !== this.attributes.display),
							'rotateOrder' === t && i.rotation.reorder(e),
							'zIndex' === t && (i.renderOrder = e);
					}
				}
				resyncState(t = !1) {
					const e = this[ne];
					if (e) {
						const r = this.attributes,
							i = [
								ae(this, e),
								r[oe]('scaleX', e.scale.x),
								r[oe]('scaleY', e.scale.y),
								r[oe]('scaleZ', e.scale.z),
								r[oe]('x', e.position.x),
								r[oe]('y', e.position.y),
								r[oe]('z', e.position.z),
							];
						t && i.some(t => t) && this.forceUpdate();
					}
				}
				rotate(t, e = [0, 1, 0]) {
					const r = this[ne];
					if (r) {
						const i = (Math.PI * t) / 180;
						r.matrix.rotate(i, e),
							r.matrix.getRotation(r.quaternion),
							r.rotation.fromQuaternion(r.quaternion),
							ae(this, r) && this.forceUpdate();
					}
				}
				setBody(t, e = !0) {
					const r = this[ne];
					if (
						((this[ne] = t),
						r && (r.setParent(null), delete r._node),
						this.parent && this.parent.body && this[ne].setParent(this.parent.body),
						e)
					) {
						const t = Object.entries(this.attributes[se]);
						for (let e = 0; e < t.length; e++) {
							const [r, i] = t[e];
							this.onPropertyChange(r, i, i);
						}
						t.length <= 0 && this.forceUpdate();
					}
					(t._node = this),
						this.groupBody && this.children && this.children.length > 0 && this.groupBody.setParent(t);
				}
				setQuaternion(t) {
					const e = this[ne];
					if (e) {
						Array.isArray(t) || (t = [t.x, t.y, t.z, t.w]),
							(e.quaternion.x = t[0]),
							(e.quaternion.y = t[1]),
							(e.quaternion.z = t[2]),
							(e.quaternion.w = t[3]),
							e.rotation.fromQuaternion(e.quaternion),
							ae(this, e) && this.forceUpdate();
					}
				}
				transform(t) {
					const e = this[ne];
					e && (e.matrix.multiply(t), this.decompose());
				}
				traverse(t) {
					this[ne] &&
						this[ne].traverse(e => {
							e._node && t(e._node);
						});
				}
				updateMatrix() {
					this[ne] && (this[ne].updateMatrix(), this.forceUpdate());
				}
				updateMatrixWorld(t = !1) {
					this[ne] && (this[ne].updateMatrixWorld(), this.forceUpdate());
				}
			}
			var le, ce, ue;
			(ue = ie),
				(ce = 'Attr') in (le = he)
					? Object.defineProperty(le, ce, { value: ue, enumerable: !0, configurable: !0, writable: !0 })
					: (le[ce] = ue),
				Object(pt.registerNode)(he, 'node3d');
			const de = Symbol('zOrder'),
				me = Symbol('children');
			class ge extends he {
				constructor(t = {}) {
					super(t), this.setBody(new W(), !1), (this[me] = []), (this[de] = 0);
				}
				get childNodes() {
					return this[me];
				}
				get children() {
					return this[me];
				}
				get meshes() {
					if ('none' === this.attributes.display) return [];
					const t = this.children,
						e = [];
					for (let r = 0; r < t.length; r++) {
						const i = t[r];
						i.meshes && i.meshes.length && e.push(...i.meshes);
					}
					return e;
				}
				append(...t) {
					return t.map(t => this.appendChild(t));
				}
				appendChild(t) {
					return t.remove(), this.children.push(t), t.connect(this, this[de]++), t;
				}
				cloneNode(t = !1) {
					const e = super.cloneNode();
					return (
						t &&
							this[me].forEach(r => {
								const i = r.cloneNode(t);
								e.appendChild(i);
							}),
						e
					);
				}
				getElementById(t) {
					return pt.Group.prototype.querySelector.call(this, `#${t}`);
				}
				getElementsByClassName(t) {
					return pt.Group.prototype.querySelectorAll.call(this, `.${t}`);
				}
				getElementsByName(t) {
					return pt.Group.prototype.querySelectorAll.call(this, `[name="${t}"]`);
				}
				getElementsByTagName(t) {
					return pt.Group.prototype.querySelectorAll.call(this, t);
				}
				insertBefore(t, e) {
					if (null == e) return this.appendChild(t);
					t.remove();
					const r = this[me].indexOf(e);
					if (r < 0) throw new Error('Invalid reference node.');
					const i = e.zOrder;
					for (let t = r; t < this[me].length; t++) {
						const e = this[me][t].zOrder,
							r = this[me][t];
						delete r.zOrder,
							Object.defineProperty(r, 'zOrder', { value: e + 1, writable: !1, configurable: !0 });
					}
					return this[me].splice(r, 0, t), t.connect(this, i), t;
				}
				querySelector(t) {
					return pt.Group.prototype.querySelector.call(this, t);
				}
				querySelectorAll(t) {
					return pt.Group.prototype.querySelectorAll.call(this, t);
				}
				replaceChild(t, e) {
					t.remove();
					const r = this[me].indexOf(e);
					if (r < 0) throw new Error('Invalid reference node.');
					return (this[me][r] = t), t.connect(this, e.zOrder), e.disconnect(this), t;
				}
				removeAllChildren() {
					const t = this[me];
					for (let e = t.length - 1; e >= 0; e--) t[e].remove();
				}
				removeChild(t) {
					const e = this[me].indexOf(t);
					return e >= 0 ? (this[me].splice(e, 1), t.disconnect(this), t) : null;
				}
				setResolution({ width: t, height: e }) {
					super.setResolution({ width: t, height: e }),
						this[me].forEach(r => {
							r.setResolution({ width: t, height: e });
						});
				}
			}
			Object(pt.registerNode)(ge, 'group3d');
			const pe = Symbol.for('spritejs_setAttribute'),
				fe = Symbol.for('spritejs_getAttribute'),
				ve = Symbol.for('spritejs_setAttributeDefault');
			function be(t, e) {
				if (null == t) return {};
				var r,
					i,
					n = (function (t, e) {
						if (null == t) return {};
						var r,
							i,
							n = {},
							s = Object.keys(t);
						for (i = 0; i < s.length; i++) (r = s[i]), e.indexOf(r) >= 0 || (n[r] = t[r]);
						return n;
					})(t, e);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(t);
					for (i = 0; i < s.length; i++)
						(r = s[i]),
							e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]));
				}
				return n;
			}
			const ye = Symbol.for('spritejs_setAttribute'),
				xe = Symbol.for('spritejs_changedAttrs');
			class we extends ge {
				constructor(t, e = {}) {
					let {
							fov: r = 45,
							near: i = 0.1,
							far: n = 100,
							aspect: s = 1,
							left: o,
							right: a,
							bottom: h,
							top: l,
						} = e,
						c = be(e, ['fov', 'near', 'far', 'aspect', 'left', 'right', 'bottom', 'top']);
					super({ fov: r, near: i, far: n, aspect: s, left: o, right: a, bottom: h, top: l }),
						(this.groupBody = this.body),
						this.setBody(
							new Wt(t, { fov: r, near: i, far: n, aspect: s, left: o, right: a, bottom: h, top: l }),
							!1,
						),
						this.attributes[ye]('mode', this.body.type),
						(this.gl = t),
						c && this.attr(c);
				}
				get projectionMatrix() {
					return this.body.projectionMatrix;
				}
				get projectionViewMatrix() {
					return this.body.projectionViewMatrix;
				}
				get viewMatrix() {
					return this.body.viewMatrix;
				}
				get worldPosition() {
					return this.body.worldPosition;
				}
				cloneNode(t = !1) {
					const e = this.attributes[xe],
						r = new this.constructor(this.gl, e);
					return (
						t &&
							this.children.forEach(e => {
								const i = e.cloneNode(t);
								r.appendChild(i);
							}),
						r
					);
				}
				frustumIntersects(t) {
					return !!t.body && this.body.frustumIntersectsMesh(t.body);
				}
				frustumIntersectsSphere(t, e) {
					return t instanceof he && t.body && (t = t.body.position), this.body.frustumIntersectsSphere(t, e);
				}
				lookAt(t) {
					return super.lookAt(t, !0), this;
				}
				onPropertyChange(t, e, r) {
					super.onPropertyChange(t, e, r);
					const i = this.body;
					if (i) {
						const r = this.attributes.mode;
						if ('perspective' === r && ('near' === t || 'far' === t || 'fov' === t || 'aspect' === t)) {
							const r = 'fov' === t ? e * (Math.PI / 180) : e;
							i.perspective({ [t]: r });
						}
						if (
							('orthographic' !== r ||
								('left' !== t && 'right' !== t && 'bottom' !== t && 'top' !== t && 'zoom' !== t) ||
								i.orthographic({ [t]: e }),
							'mode' === t)
						)
							if ('perspective' === e) i.perspective();
							else {
								const { left: t, right: e, bottom: r, top: n } = this.attributes;
								i.orthographic({ left: t, right: e, bottom: r, top: n });
							}
					}
				}
				project(t) {
					return this.body.project(t), this;
				}
				unproject(t) {
					return this.body.unproject(t), this;
				}
				updateFrustum() {
					return this.body.updateFrustum(), this;
				}
			}
			function Me(t, e) {
				if (null == t) return {};
				var r,
					i,
					n = (function (t, e) {
						if (null == t) return {};
						var r,
							i,
							n = {},
							s = Object.keys(t);
						for (i = 0; i < s.length; i++) (r = s[i]), e.indexOf(r) >= 0 || (n[r] = t[r]);
						return n;
					})(t, e);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(t);
					for (i = 0; i < s.length; i++)
						(r = s[i]),
							e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]));
				}
				return n;
			}
			function Ee(t, e = 3) {
				let r = t.data || t;
				Array.isArray(r) && (r = new Float32Array(r));
				const i = t.size || e;
				return t.data ? ((t.data = r), (t.size = i), t) : { size: i, data: r };
			}
			!(function (t, e, r) {
				e in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r);
			})(
				we,
				'Attr',
				class extends ie {
					constructor(t) {
						super(t),
							this[ve]({
								near: 0.1,
								far: 100,
								fov: 45,
								aspect: 1,
								left: void 0,
								right: void 0,
								bottom: void 0,
								top: void 0,
								zoom: 1,
								mode: 'perspective',
							});
					}
					get near() {
						return this[fe]('near');
					}
					set near(t) {
						this[pe]('near', t);
					}
					get far() {
						return this[fe]('far');
					}
					set far(t) {
						this[pe]('far', t);
					}
					get fov() {
						return this[fe]('fov');
					}
					set fov(t) {
						this[pe]('fov', t);
					}
					get aspect() {
						return this[fe]('aspect');
					}
					set aspect(t) {
						this[pe]('aspect', t);
					}
					get left() {
						return this[fe]('left');
					}
					set left(t) {
						this[pe]('left', t);
					}
					get right() {
						return this[fe]('right');
					}
					set right(t) {
						this[pe]('right', t);
					}
					get top() {
						return this[fe]('top');
					}
					set top(t) {
						this[pe]('top', t);
					}
					get bottom() {
						return this[fe]('bottom');
					}
					set bottom(t) {
						this[pe]('bottom', t);
					}
					get zoom() {
						return this[fe]('zoom');
					}
					set zoom(t) {
						this[pe]('zoom', t);
					}
					get mode() {
						return this[fe]('mode');
					}
					set mode(t) {
						if (t && 'perspective' !== t && 'orthographic' !== t)
							throw new TypeError('Invalid camera mode.');
						this[pe]('mode', t);
					}
				},
			),
				Object(pt.registerNode)(we, 'camera'),
				(st.prototype.transpose = function (t = 'zxy') {
					const e = this;
					if (e) {
						t = [...t].map(t => ('x' === t || 'X' === t ? 0 : 'y' === t || 'Y' === t ? 1 : 2));
						const r = e.attributes.position,
							{ size: i, data: n } = r;
						for (let e = 0; e < n.length; e += i) {
							const r = [n[e], n[e + 1], n[e + 2]];
							for (let i = 0; i < 3; i++) {
								const s = null != t[i] ? t[i] : i;
								n[e + i] = r[s];
							}
						}
						r.needsUpdate = !0;
					}
				});
			class Ae extends st {
				constructor(t, e, r = !0) {
					const { position: i, uv: n, normal: s, index: o } = e,
						a = Me(e, ['position', 'uv', 'normal', 'index']),
						h = {};
					if ((i && (h.position = Ee(i)), n && (h.uv = Ee(n, 2)), s && (h.normal = Ee(s)), o)) {
						let t = o.data || o;
						Array.isArray(t) && (t = new Uint16Array(t)), (h.index = { data: t });
					}
					if (a) {
						let t;
						const e = h.position;
						e && (t = e.data.length / e.size),
							Object.entries(a).forEach(([e, r]) => {
								let i = 3;
								if (!r.size) {
									const e = r.data ? r.data.length : r.length;
									e && t && (i = e / t);
								}
								h[e] = Ee(r, i);
							});
					}
					super(t, h), (this.preserveBuffers = r);
				}
			}
			const Se = Symbol.for('spritejs_setAttribute'),
				Ce = Symbol.for('spritejs_getAttribute'),
				_e = Symbol.for('spritejs_setAttributeDefault');
			class Le extends ie {
				constructor(t) {
					super(t),
						this[_e]({ mode: 'TRIANGLES', colors: [0.5, 0.5, 0.5, 1], colorDivisor: 3, raycast: 'box' });
				}
				get colors() {
					return this[Ce]('colors');
				}
				set colors(t) {
					if ('string' == typeof t) {
						let e = (t = t.replace(/\s*,\s*/g, ',')).split(/\s+/g);
						(e = e.map(t => new pt.Color(t))), (t = e.reduce((t, e) => [...t, ...e]));
					} else
						Array.isArray(t) &&
							('string' == typeof t[0]
								? (t = t.reduce((t, e) => (t.push(...new pt.Color(e)), t), []))
								: Array.isArray(t[0]) && (t = t.reduce((t, e) => [...t, ...e])));
					this[Se]('colors', t);
				}
				get colorDivisor() {
					return this[Ce]('colorDivisor');
				}
				set colorDivisor(t) {
					this[Se]('colorDivisor', t);
				}
				get mode() {
					return this[Ce]('mode');
				}
				set mode(t) {
					if (
						('number' == typeof t &&
							t >= 0 &&
							t < 7 &&
							(t = [
								'POINTS',
								'LINES',
								'LINE_LOOP',
								'LINE_STRIP',
								'TRIANGLES',
								'TRIANGLE_STRIP',
								'TRIANGLE_FAN',
							][t]),
						t &&
							'TRIANGLES' !== t &&
							'POINTS' !== t &&
							'LINES' !== t &&
							'LINE_LOOP' !== t &&
							'LINE_STRIP' !== t &&
							'TRIANGLE_STRIP' !== t &&
							'TRIANGLE_FAN' !== t)
					)
						throw new TypeError('Invalid mode value.');
					this[Se]('mode', t);
				}
				get raycast() {
					return this[Ce]('raycast');
				}
				set raycast(t) {
					this[Se]('raycast', t);
				}
			}
			function Pe(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(t);
					e &&
						(i = i.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push.apply(r, i);
				}
				return r;
			}
			function Oe(t, e) {
				if (null == t) return {};
				var r,
					i,
					n = (function (t, e) {
						if (null == t) return {};
						var r,
							i,
							n = {},
							s = Object.keys(t);
						for (i = 0; i < s.length; i++) (r = s[i]), e.indexOf(r) >= 0 || (n[r] = t[r]);
						return n;
					})(t, e);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(t);
					for (i = 0; i < s.length; i++)
						(r = s[i]),
							e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]));
				}
				return n;
			}
			function Te(t, e, r) {
				return (
					e in t
						? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (t[e] = r),
					t
				);
			}
			const Ne = Symbol.for('spritejs_changedAttrs'),
				Re = Symbol('program'),
				Fe = Symbol('geometry'),
				ze = Symbol('model'),
				je = Symbol('beforeRender'),
				De = Symbol('afterRender'),
				Ue = Symbol('updateMeshPromise');
			function Be(t, e, r) {
				const i = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
					n = [e[0] - r[0], e[1] - r[1], e[2] - r[2]];
				return (function (t) {
					const e = Math.hypot(...t);
					return [t[0] / e, t[1] / e, t[2] / e];
				})([i[1] * n[2] - i[2] * n[1], i[0] * n[2] - i[2] * n[0], i[0] * n[1] - i[1] * n[0]]);
			}
			class Ie extends ge {
				static fromMesh(t) {
					const e = t.program,
						r = t.geometry,
						i = t.geometry.attributes,
						n = new Ie(e);
					(n[Fe] = r), (n[ze] = i), n.setBody(t);
					let s = n.getListeners('beforerender');
					return (
						s.length && t.onBeforeRender(n[je]),
						(s = n.getListeners('afterrender')),
						s.length && t.onAfterRender(n[De]),
						n
					);
				}
				constructor(t, e = {}) {
					let { model: r } = e,
						i = Oe(e, ['model']);
					if ((!t || t instanceof V || ((i = t), (t = i.program)), !t))
						throw new Error('No program specified!');
					super(i),
						(this.groupBody = this.body),
						this.setProgram(t),
						(this[je] = t => {
							this.dispatchEvent({ type: 'beforerender', detail: t });
						}),
						(this[De] = t => {
							this.dispatchEvent({ type: 'afterrender', detail: t });
						}),
						r && 'function' == typeof r.then
							? (this[ze] = r.then(t => {
									(this[ze] = t), this.remesh();
							  }))
							: r
							? this.setGeometry(r)
							: this.remesh();
				}
				get geometry() {
					return this[Fe];
				}
				get meshes() {
					const t = super.meshes;
					return this.body.geometry && 'none' !== this.attributes.display && t.unshift(this.body), t;
				}
				get model() {
					return this[ze];
				}
				get program() {
					return this[Re];
				}
				_createMesh({ geometry: t, mode: e, program: r }) {
					return new H(r.gl, { geometry: t, mode: e, program: r });
				}
				addEventListener(t, e, r = {}) {
					if ((super.addEventListener(t, e, r), this.body.onBeforeRender && 'beforerender' === t)) {
						1 === this.getListeners('beforerender').length && this.body.onBeforeRender(this[je]);
					} else if (this.body.onAfterRender && 'afterrender' === t) {
						1 === this.getListeners('afterrender').length && this.body.onAfterRender(this[De]);
					}
					return this;
				}
				cloneNode(t = !1) {
					const e = this.attributes[Ne],
						r = this[Fe].preserveBuffers ? this[Fe] : this[ze],
						i = new this.constructor(
							this[Re],
							(function (t) {
								for (var e = 1; e < arguments.length; e++) {
									var r = null != arguments[e] ? arguments[e] : {};
									e % 2
										? Pe(Object(r), !0).forEach(function (e) {
												Te(t, e, r[e]);
										  })
										: Object.getOwnPropertyDescriptors
										? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
										: Pe(Object(r)).forEach(function (e) {
												Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
										  });
								}
								return t;
							})({}, e, { model: r }),
						);
					return (
						t &&
							this.children.forEach(e => {
								const r = e.cloneNode(t);
								i.appendChild(r);
							}),
						i
					);
				}
				dispose() {
					const t = this.children;
					for (let e = t.length - 1; e >= 0; e--) t[e].dispose();
					const e = this[Fe];
					e && !e.preserveBuffers && (e.remove(), delete this[Fe]), super.dispose();
				}
				onPropertyChange(t, e, r) {
					if ((super.onPropertyChange(t, e, r), ('colors' === t || 'colorDivisor' === t) && e !== r)) {
						const t = this.program;
						if (t && t.extraAttribute.color) {
							const e = this.geometry;
							e && t.extraAttribute.color(this, e);
						}
					}
					if ('mode' === t) {
						const t = this.program;
						t && (this.body.mode = t.gl[e]);
					}
				}
				remesh() {
					this.setGeometry();
				}
				removeAllListeners(t, e = {}) {
					if ((super.removeAllListeners(t, e), this.body.onBeforeRender && 'beforerender' === t)) {
						const t = this.body.beforeRenderCallbacks.indexOf(this[je]);
						t >= 0 && this.body.beforeRenderCallbacks.splice(t, 1);
					} else if (this.body.onAfterRender && 'afterrender' === t) {
						const t = this.body.afterRenderCallbacks.indexOf(this[De]);
						t >= 0 && this.body.afterRenderCallbacks.splice(t, 1);
					}
					return this;
				}
				removeEventListener(t, e, r = {}) {
					if ((super.removeEventListener(t, e, r), this.body.onBeforeRender && 'beforerender' === t)) {
						if (0 === this.getListeners('beforerender').length) {
							const t = this.body.beforeRenderCallbacks.indexOf(this[je]);
							t >= 0 && this.body.beforeRenderCallbacks.splice(t, 1);
						}
					} else if (this.body.onAfterRender && 'afterrender' === t) {
						if (0 === this.getListeners('afterrender').length) {
							const t = this.body.afterRenderCallbacks.indexOf(this[De]);
							t >= 0 && this.body.afterRenderCallbacks.splice(t, 1);
						}
					}
					return this;
				}
				setGeometry(t = this[ze]) {
					if (!t) return;
					const e = this[Re],
						r = e.gl;
					let i;
					if (
						((i = t instanceof st ? t : new Ae(r, t, !1)),
						!i.attributes.normal && e.attributeLocations.has('normal'))
					) {
						const t = i.attributes.position.data,
							e = i.attributes.position.data.length,
							r = new Float32Array(e);
						if (e % 9 == 0)
							for (let i = 0; i < e; i += 9) {
								const e = Be(
									[t[i], t[i + 1], t[i + 2]],
									[t[i + 3], t[i + 4], t[i + 5]],
									[t[i + 6], t[i + 7], t[i + 8]],
								);
								r.set([...e, ...e, ...e], i);
							}
						else if (e % 3 == 0) for (let t = 0; t < e; t += 3) r.set([-1, 0, 0], t);
						i.addAttribute('normal', { size: 3, data: r });
					}
					const n = e.extraAttribute;
					n &&
						Object.entries(n).forEach(([t, e]) => {
							i.attributes[t] || i.addAttribute(t, e(this, i));
						}),
						(i.raycast = this.attributes.raycast);
					const s = this[Fe];
					s && s !== i && !s.preserveBuffers && s.remove(), (this[Fe] = i), (this[ze] = t);
					const o = this.attributes.mode,
						a = this._createMesh({ mode: r[o], geometry: i, program: e });
					this.setBody(a);
					let h = this.getListeners('beforerender');
					h.length && a.onBeforeRender(this[je]),
						(h = this.getListeners('afterrender')),
						h.length && a.onAfterRender(this[De]);
				}
				setResolution({ width: t, height: e }) {
					super.setResolution({ width: t, height: e });
					const r = this.program;
					if (
						(r && r.uniforms.uResolution && (r.uniforms.uResolution = { value: [t, e] }),
						r && r.uniforms.uDPR)
					) {
						const t = this.layer ? this.layer.displayRatio : 1;
						r.uniforms.uDPR = { value: t };
					}
				}
				setProgram(t) {
					this[Re] = t;
					const e = t.gl,
						r = this[Fe];
					if (r) {
						const i = this.attributes.mode,
							n = this._createMesh({ mode: e[i], geometry: r, program: t });
						this.setBody(n);
					}
				}
				transpose(t = 'zxy') {
					const e = this[Fe];
					e && (e.transpose(t), this.forceUpdate());
				}
				updateMesh() {
					this.program &&
						(this[Ue] ||
							(this[Ue] = Promise.resolve().then(() => {
								delete this[Ue];
								const t = this.mesh;
								this.remesh();
								const e = this.mesh;
								this.dispatchEvent({ type: 'updatemesh', detail: { oldMesh: t, newMesh: e } });
							})));
				}
			}
			function Ge(t, e) {
				const r = e.attributes.color,
					i = e.attributes.position.data,
					n = e.attributes.position.size || 3,
					s = i.length / n,
					o = r ? r.data : new Float32Array(4 * s),
					a = t.attributes.colors,
					h = a.length / 4,
					l = t.attributes.colorDivisor;
				for (let t = 0; t < s; t++) {
					const e = Math.floor(t / l) % h;
					(o[4 * t] = a[4 * e]),
						(o[4 * t + 1] = a[4 * e + 1]),
						(o[4 * t + 2] = a[4 * e + 2]),
						(o[4 * t + 3] = a[4 * e + 3]);
				}
				return r && (r.needsUpdate = !0), { size: 4, data: o };
			}
			function Ve(t, e) {
				if (null == t) return {};
				var r,
					i,
					n = (function (t, e) {
						if (null == t) return {};
						var r,
							i,
							n = {},
							s = Object.keys(t);
						for (i = 0; i < s.length; i++) (r = s[i]), e.indexOf(r) >= 0 || (n[r] = t[r]);
						return n;
					})(t, e);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(t);
					for (i = 0; i < s.length; i++)
						(r = s[i]),
							e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]));
				}
				return n;
			}
			function ke(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(t);
					e &&
						(i = i.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push.apply(r, i);
				}
				return r;
			}
			function Ye(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2
						? ke(Object(r), !0).forEach(function (e) {
								Xe(t, e, r[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: ke(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
						  });
				}
				return t;
			}
			function Xe(t, e, r) {
				return (
					e in t
						? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (t[e] = r),
					t
				);
			}
			Te(Ie, 'Attr', Le), Object(pt.registerNode)(Ie, 'mesh3d');
			const qe = { depth: !0, alpha: !0 },
				We = Symbol('orbit_checker'),
				Ze = Symbol('orbit_checking'),
				He = Symbol('utime'),
				$e = Symbol('shadow'),
				Qe = Symbol('directionalLight'),
				Ke = Symbol('pointLightPosition'),
				Je = Symbol('pointLightColor'),
				tr = Symbol('ambientColor'),
				er = Symbol('targets'),
				rr = Symbol('post'),
				ir = Symbol('renderOptions'),
				nr = Symbol('root'),
				sr = Symbol('camera'),
				or = Symbol('sublayers'),
				ar = Symbol('orbit');
			class hr extends pt.Layer {
				constructor(t = {}) {
					if ('2d' === t.contextType) throw new TypeError('Cannot create 3d layer in 2d context.');
					t.Renderer ||
						((t = Object.assign({}, qe, t)).Renderer = function (t, e) {
							e = Object.assign({}, e);
							const r = new bt(Ye({ canvas: t }, e));
							return (
								(r.globalTransformMatrix = [1, 0, 0, 1, 0, 0]),
								(r.setGlobalTransform = function (t) {}),
								r
							);
						}),
						super(t),
						(this[He] = []),
						(this[er] = []),
						(this[Qe] = t.directionalLight || [1, 0, 0, 0]),
						(this[Ke] = t.pointLightPosition || [0, 0, 0]),
						(this[Je] = new pt.Color(t.pointLightColor || [0, 0, 0, 0])),
						(this[tr] = new pt.Color(t.ambientColor || [1, 1, 1, 0])),
						(this[ir] = { update: !0, sort: !0, frustumCull: !0, clear: void 0 });
					const e = this.renderer.gl;
					if (
						(e.clearColor(...this[tr]),
						t.post && ('boolean' == typeof t.post && (t.post = {}), (this[rr] = new yt(e, t.post))),
						t.camera)
					) {
						const r = new we(e, t.camera);
						r.connect(this, 0), (this[sr] = r);
					} else this[sr] = { body: null };
					(this[nr] = new ge()), this[nr].connect(this, 0), (this[or] = []), (this[ar] = !1);
				}
				get body() {
					return this[nr] ? this[nr].body : null;
				}
				get camera() {
					return this[sr] && this[sr].body ? this[sr] : null;
				}
				get gl() {
					return this.renderer.gl;
				}
				get meshes() {
					const t = this.children,
						e = [];
					for (let r = 0; r < t.length; r++) {
						const i = t[r];
						i.meshes && i.meshes.length && e.push(...i.meshes);
					}
					return e;
				}
				get post() {
					return this[rr];
				}
				get renderOptions() {
					return this[ir];
				}
				get root() {
					return this[nr];
				}
				get shadow() {
					return this[$e];
				}
				get sublayers() {
					return this[or];
				}
				get autoClear() {
					return this.renderer.autoClear;
				}
				set autoClear(t) {
					this.renderer.autoClear = t;
				}
				bindTarget(t, e = {}) {
					this[er].push({ target: t, options: e });
				}
				bindTime(t, e = {}) {
					(t.timeline = this.timeline.fork(e)), this[He].push(t), this.forceUpdate();
				}
				createProgram(t = {}, { attributes: e, uniforms: r } = {}) {
					let { attributes: i, texture: n, normalMap: s, uniforms: o } = t,
						a = Ve(t, ['attributes', 'texture', 'normalMap', 'uniforms']);
					const h = this.renderer.gl;
					o && (a.uniforms = Ye({}, o));
					const l = new V(h, a);
					if (
						(e && (l.extraAttribute = Object.assign({}, i, e)),
						(l.uniforms.directionalLight = { value: this[Qe] }),
						(l.uniforms.pointLightPosition = { value: this[Ke] }),
						(l.uniforms.pointLightColor = { value: this[Je] }),
						(l.uniforms.ambientColor = { value: this[tr] }),
						n && (l.uniforms.tMap = { value: n }),
						s && (l.uniforms.tNormal = { value: s }),
						h.getUniformLocation(l.program, 'uShadow') &&
							!l.uniforms.uShadow &&
							(l.uniforms.uShadow = { value: 0.5 }),
						h.getUniformLocation(l.program, 'uResolution') && !l.uniforms.uResolution)
					) {
						const { width: t, height: e } = this.getResolution();
						l.uniforms.uResolution = { value: [t, e] };
					}
					if (h.getUniformLocation(l.program, 'uDPR') && !l.uniforms.uDPR) {
						const t = this.layer ? this.layer.displayRatio : 1;
						l.uniforms.uDPR = { value: t };
					}
					return (
						h.getUniformLocation(l.program, 'uNormalScale') &&
							!l.uniforms.uNormalScale &&
							(l.uniforms.uNormalScale = { value: 1 }),
						h.getUniformLocation(l.program, 'uNormalUVScale') &&
							!l.uniforms.uNormalUVScale &&
							(l.uniforms.uNormalUVScale = { value: 1 }),
						(l.extraAttribute = l.extraAttribute || {}),
						l.attributeLocations.has('color') && !l.extraAttribute.color && (l.extraAttribute.color = Ge),
						r && Object.assign(l.uniforms, r),
						l
					);
				}
				createSublayer(t = {}) {
					let { camera: e = null } = t,
						r = Ve(t, ['camera']);
					!e && this.camera && (e = this.camera.cloneNode());
					const i = new ge(r);
					return (i.camera = e), i;
				}
				createText(
					t,
					{
						font: e = '16px Helvetica,Arial,sans-serif',
						fillColor: r,
						strokeColor: i,
						strokeWidth: n = 1,
					} = {},
				) {
					const s = pt.ENV.createText(t, { font: e, fillColor: r, strokeColor: i, strokeWidth: n }).image;
					return this.createTexture({ image: s, generateMipmaps: !1, width: s.width, height: s.height });
				}
				createTexture(t = {}) {
					const e = this.renderer.gl;
					let r;
					function i(t) {
						return 'string' == typeof t || (Array.isArray(t) && 'string' == typeof t[0]);
					}
					i(t)
						? ((r = t), (t = {}))
						: i(t.image)
						? ((r = t.image), delete (t = Ye({}, t)).image)
						: Array.isArray(t) && (t = { image: t });
					const n = new J(e, t);
					if (r) {
						let t;
						return (
							(t = Array.isArray(r) ? this.loadImages(r) : this.loadImage(r)),
							t.then(t => {
								(n.image = t), this.forceUpdate();
							}),
							(n.loaded = t),
							n
						);
					}
					return (n.loaded = Promise.resolve()), n;
				}
				createShadow({
					width: t = this.canvas.width,
					height: e = this.canvas.height,
					light: r = this[sr],
				} = {}) {
					const i = this.renderer.gl;
					return new Qt(i, { width: t, height: e, light: r.body });
				}
				dispatchPointerEvent(t) {
					let e;
					const r = this.raycast;
					let i = !1;
					if (r) {
						const n = this.renderer;
						(e = new l()),
							e.set((t.x / n.width) * 2 - 1, 2 * (1 - t.y / n.height) - 1),
							(i = (function (e, r, i) {
								e.castMouse(r.camera.body, i);
								const n = e.intersectBounds(r.meshes.filter(t => 'none' !== t.geometry.raycast));
								if (n && n.length) {
									let e;
									for (let t = 0; t < n.length; t++) {
										const r = n[t]._node,
											i = r.attributes.pointerEvents;
										if ('none' !== i && (r.isVisible || 'all' === i)) {
											e = r;
											break;
										}
									}
									if (e) return (t.mouse = i), (t.hit = e.body.hit), e.dispatchEvent(t), !0;
								}
							})(r, this, e));
					}
					return i || pt.Block.prototype.dispatchPointerEvent.call(this, t);
				}
				async loadGLTF(t) {
					const e = this.renderer.gl,
						r = await Ut.load(e, t);
					return (
						r.scene.forEach(t => {
							t.traverse(t => {
								let e;
								t instanceof H ? (e = Ie.fromMesh(t)) : ((e = new ge()), e.setBody(t, !1));
								const r = e.body.parent;
								if (r) {
									r._node.appendChild(e);
								}
							}),
								this.appendChild(t._node);
						}),
						r
					);
				}
				async loadImage(t) {
					return await pt.ENV.loadImage(t);
				}
				async loadImages(t) {
					return await Promise.all(t.map(t => pt.ENV.loadImage(t, { useImageBitmap: !1 })));
				}
				async loadModel(t) {
					return await (await fetch(t)).json();
				}
				async loadShader({ vertex: t, fragment: e }) {
					const r = await Promise.all([t && (await fetch(t)).text(), e && (await fetch(e)).text()]);
					return { vertex: r[0], fragment: r[1] };
				}
				removeOrbit(t = this[sr]) {
					t.orbit && (t.orbit.remove(), delete t.orbit);
				}
				render({ clear: t = !0 } = {}) {
					const e = this[nr],
						r = this[sr];
					(this.renderer.autoClear = t),
						this._prepareRenderFinished(),
						this.dispatchEvent({ type: 'beforerender', detail: { camera: r.body } }),
						this[er].length &&
							this[er].forEach(({ target: t, options: e }) => {
								t.renderBy(this, e);
							}),
						r.orbit && (r.orbit.update(), r.resyncState()),
						this[$e] && this[$e].render({ scene: e.body }),
						this[or].length &&
							this[or].forEach((t, e) => {
								const r = t.camera;
								r.orbit && (r.orbit.update(), r.resyncState()),
									this.renderer.render(Ye({ scene: t.body, camera: r.body }, this[ir])),
									0 === e && (this.renderer.autoClear = !1);
							}),
						this[rr]
							? this[rr].render(Ye({ scene: e.body, camera: r.body }, this[ir]))
							: this.renderer.render(Ye({ scene: e.body, camera: r.body }, this[ir])),
						this[He].length &&
							(this[He].forEach(t => {
								t.uniforms.uTime.value = 0.001 * t.timeline.currentTime;
							}),
							this.forceUpdate()),
						this.dispatchEvent({ type: 'afterrender', detail: { camera: r.body } });
				}
				renderTarget(t, e = {}) {
					return t.renderBy(this, e);
				}
				renderTo(t, e = {}) {
					const r = Object.assign(e, this[ir]),
						i = this[nr],
						n = this[sr];
					return this.renderer.render(Ye({ scene: i.body, camera: n.body, target: t }, r));
				}
				setLights(
					t,
					{
						directionalLight: e = this[Qe],
						pointLightPosition: r = this[Ke],
						pointLightColor: i = this[Je],
						ambientColor: n = this[tr],
					} = {},
				) {
					(t.uniforms.directionalLight.value = e),
						(t.uniforms.pointLightPosition.value = r),
						(t.uniforms.pointLightColor.value = new pt.Color(i)),
						(t.uniforms.ambientColor.value = new pt.Color(n)),
						this.forceUpdate();
				}
				setOrbit(t = {}) {
					if (
						(this[We] ||
							(this[We] = [
								() => {
									this[Ze] = !0;
								},
								() => {
									this[Ze] = !1;
								},
								() => {
									this[Ze] && this.forceUpdate();
								},
								() => {
									this.forceUpdate();
								},
							]),
						null == t)
					)
						return (
							this[sr] && this.removeOrbit(),
							this[or].length &&
								this[or].forEach(({ camera: t }) => {
									t && this.removeOrbit(t);
								}),
							this[ar] &&
								((this[ar] = 0),
								this.removeEventListener('mousedown', this[We][0]),
								this.removeEventListener('mouseup', this[We][1]),
								this.removeEventListener('mousemove', this[We][2]),
								this.removeEventListener('touchstart', this[We][3]),
								this.removeEventListener('touchend', this[We][3]),
								this.removeEventListener('touchmove', this[We][3]),
								this.removeEventListener('wheel', this[We][3], !1)),
							null
						);
					const e = t.camera || this[sr],
						r = t.target || [0, 0, 0];
					(t.target = new x(...r)), (t.element = t.element || this.parent.container);
					const i = new kt(e.body, t);
					return (
						(e.orbit = i),
						this[ar] ||
							(this.addEventListener('mousedown', this[We][0]),
							this.addEventListener('mouseup', this[We][1]),
							this.addEventListener('mousemove', this[We][2]),
							this.addEventListener('touchstart', this[We][3]),
							this.addEventListener('touchend', this[We][3]),
							this.addEventListener('touchmove', this[We][3]),
							this.addEventListener('wheel', this[We][3], !1)),
						this[ar]++,
						i
					);
				}
				setRaycast(t = !0) {
					if (t) {
						const t = this.renderer.gl;
						this.raycast = new gt(t);
					} else delete this.raycast;
				}
				setRenderOptions(t) {
					Object.assign(this[ir], t);
				}
				setResolution({ width: t, height: e }) {
					const { width: r, height: i } = this.getResolution();
					if ((super.setResolution({ width: t, height: e }), r !== t || i !== e)) {
						const r = this.displayRatio,
							i = this.renderer;
						(this.renderer.dpr = r), (i.width = t / r), (i.height = e / r);
						const n = i.gl;
						(n.canvas.width = t), (n.canvas.height = e);
						const s = this.camera;
						s && !1 !== this.options.camera.preserveAspect && (s.attributes.aspect = t / e),
							this[or] &&
								this[or].length &&
								this[or].forEach(({ camera: r }) => {
									r && !1 !== this.options.camera.preserveAspect && (r.attributes.aspect = t / e);
								}),
							this[rr] && this[rr].resize();
					}
				}
				setShadow(t) {
					(this[$e] = t), this.forceUpdate();
				}
				setUniforms(t, e = this.uniforms || {}) {
					t instanceof V || ((e = t || {}), (t = null)),
						super.setUniforms(e),
						t &&
							Object.entries(e).forEach(([e, r]) => {
								r && r.value
									? (t.uniforms[e] = r)
									: t.uniforms[e]
									? (t.uniforms[e].value = r)
									: (t.uniforms[e] = { value: r });
							}),
						this.forceUpdate();
				}
				traverse(t) {
					return this[nr].traverse(t);
				}
				unbindTime(t) {
					const e = this[He].indexOf(t);
					return e >= 0 && (this[He].splice(e, 1), !0);
				}
				unbindTarget(t) {
					const e = this[er].indexOf(t);
					return e >= 0 && (this[er].splice(e, 1), !0);
				}
			}
			Object(pt.registerNode)(hr, 'layer3d');
			const lr = new x(),
				cr = new D(),
				ur = new x(),
				dr = new x(),
				mr = new D(),
				gr = new x();
			class pr {
				constructor({ objects: t, data: e }) {
					(this.objects = t),
						(this.data = e),
						(this.elapsed = 0),
						(this.weight = 1),
						(this.duration = e.frames.length - 1);
				}
				update(t = 1, e) {
					const r = e ? 1 : this.weight / t,
						i = this.elapsed % this.duration,
						n = Math.floor(i),
						s = i - n,
						o = this.data.frames[n],
						a = this.data.frames[(n + 1) % this.duration];
					this.objects.forEach((t, e) => {
						lr.fromArray(o.position, 3 * e),
							cr.fromArray(o.quaternion, 4 * e),
							ur.fromArray(o.scale, 3 * e),
							dr.fromArray(a.position, 3 * e),
							mr.fromArray(a.quaternion, 4 * e),
							gr.fromArray(a.scale, 3 * e),
							lr.lerp(dr, s),
							cr.slerp(mr, s),
							ur.lerp(gr, s),
							t.position.lerp(lr, r),
							t.quaternion.slerp(cr, r),
							t.scale.lerp(ur, r);
					});
				}
			}
			const fr = new T();
			class vr extends H {
				constructor(t, { rig: e, geometry: r, program: i, mode: n = t.TRIANGLES } = {}) {
					super(t, { geometry: r, program: i, mode: n }),
						this.createBones(e),
						this.createBoneTexture(),
						(this.animations = []),
						Object.assign(this.program.uniforms, {
							boneTexture: { value: this.boneTexture },
							boneTextureSize: { value: this.boneTextureSize },
						});
				}
				createBones(t) {
					if (((this.root = new W()), (this.bones = []), t.bones && t.bones.length)) {
						for (let e = 0; e < t.bones.length; e++) {
							const r = new W();
							r.position.fromArray(t.bindPose.position, 3 * e),
								r.quaternion.fromArray(t.bindPose.quaternion, 4 * e),
								r.scale.fromArray(t.bindPose.scale, 3 * e),
								this.bones.push(r);
						}
						t.bones.forEach((t, e) => {
							if (((this.bones[e].name = t.name), -1 === t.parent))
								return this.bones[e].setParent(this.root);
							this.bones[e].setParent(this.bones[t.parent]);
						}),
							this.root.updateMatrixWorld(!0),
							this.bones.forEach(t => {
								t.bindInverse = new T(...t.worldMatrix).inverse();
							});
					}
				}
				createBoneTexture() {
					if (!this.bones.length) return;
					const t = Math.max(
						4,
						Math.pow(2, Math.ceil(Math.log(Math.sqrt(4 * this.bones.length)) / Math.LN2)),
					);
					(this.boneMatrices = new Float32Array(t * t * 4)),
						(this.boneTextureSize = t),
						(this.boneTexture = new J(this.gl, {
							image: this.boneMatrices,
							generateMipmaps: !1,
							type: this.gl.FLOAT,
							internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA16F : this.gl.RGBA,
							flipY: !1,
							width: t,
						}));
				}
				addAnimation(t) {
					const e = new pr({ objects: this.bones, data: t });
					return this.animations.push(e), e;
				}
				update() {
					let t = 0;
					this.animations.forEach(e => (t += e.weight)),
						this.animations.forEach((e, r) => {
							e.update(t, 0 === r);
						});
				}
				draw({ camera: t } = {}) {
					this.root.updateMatrixWorld(!0),
						this.bones.forEach((t, e) => {
							fr.multiply(t.worldMatrix, t.bindInverse), this.boneMatrices.set(fr, 16 * e);
						}),
						this.boneTexture && (this.boneTexture.needsUpdate = !0),
						super.draw({ camera: t });
				}
			}
			function br(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(t);
					e &&
						(i = i.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push.apply(r, i);
				}
				return r;
			}
			function yr(t, e, r) {
				return (
					e in t
						? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (t[e] = r),
					t
				);
			}
			function xr(t, e) {
				if (null == t) return {};
				var r,
					i,
					n = (function (t, e) {
						if (null == t) return {};
						var r,
							i,
							n = {},
							s = Object.keys(t);
						for (i = 0; i < s.length; i++) (r = s[i]), e.indexOf(r) >= 0 || (n[r] = t[r]);
						return n;
					})(t, e);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(t);
					for (i = 0; i < s.length; i++)
						(r = s[i]),
							e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]));
				}
				return n;
			}
			const wr = Symbol('rig'),
				Mr = [];
			function Er(t, e) {
				const r = t.addAnimation(e.data),
					i = t._node,
					n = e.elapsed || 0;
				return (
					n && ((r.elapsed = n), t.update(), i.forceUpdate()),
					Object.defineProperties(e, {
						animation: { get: () => r, enumerable: !0 },
						elapsed: {
							get: () => r.elapsed,
							set(e) {
								(r.elapsed = e), t.update(), i.forceUpdate();
							},
							enumerable: !0,
						},
					}),
					e
				);
			}
			class Ar extends Ie {
				constructor(t, e = {}) {
					let { model: r } = e;
					super(
						t,
						(function (t) {
							for (var e = 1; e < arguments.length; e++) {
								var r = null != arguments[e] ? arguments[e] : {};
								e % 2
									? br(Object(r), !0).forEach(function (e) {
											yr(t, e, r[e]);
									  })
									: Object.getOwnPropertyDescriptors
									? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
									: br(Object(r)).forEach(function (e) {
											Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
									  });
							}
							return t;
						})({ model: r }, xr(e, ['model'])),
					),
						(this[Mr] = []);
				}
				get bones() {
					return this[wr] ? this[wr].bones : null;
				}
				_createMesh({ geometry: t, program: e }) {
					const r = this[wr];
					return new vr(e.gl, { rig: r, geometry: t, program: e });
				}
				addAnimation(t) {
					const e = { data: t },
						r = this.body;
					return r.addAnimation && Er(r, e), this[Mr].push(e), e;
				}
				setGeometry(t = this.model) {
					const e = t.rig;
					(this[wr] = e),
						delete t.rig,
						super.setGeometry(t),
						(t.rig = e),
						t !== this.geometry && (this.geometry.rig = e),
						this[Mr].forEach(t => {
							t.animation || Er(this.body, t);
						});
				}
			}
			Object(pt.registerNode)(Ar, 'skin');
			class Sr extends st {
				constructor(
					t,
					{
						radius: e = 0.5,
						widthSegments: r = 16,
						heightSegments: i = Math.ceil(0.5 * r),
						phiStart: n = 0,
						phiLength: s = 2 * Math.PI,
						thetaStart: o = 0,
						thetaLength: a = Math.PI,
						attributes: h = {},
					} = {},
				) {
					const l = r,
						c = i,
						u = n,
						d = s,
						m = o,
						g = a,
						p = (l + 1) * (c + 1),
						f = l * c * 6,
						v = new Float32Array(3 * p),
						b = new Float32Array(3 * p),
						y = new Float32Array(2 * p),
						w = p > 65536 ? new Uint32Array(f) : new Uint16Array(f);
					let M = 0,
						E = 0,
						A = 0,
						S = m + g;
					const C = [];
					let _ = new x();
					for (let t = 0; t <= c; t++) {
						let r = [],
							i = t / c;
						for (let t = 0; t <= l; t++, M++) {
							let n = t / l,
								s = -e * Math.cos(u + n * d) * Math.sin(m + i * g),
								o = e * Math.cos(m + i * g),
								a = e * Math.sin(u + n * d) * Math.sin(m + i * g);
							(v[3 * M] = s),
								(v[3 * M + 1] = o),
								(v[3 * M + 2] = a),
								_.set(s, o, a).normalize(),
								(b[3 * M] = _.x),
								(b[3 * M + 1] = _.y),
								(b[3 * M + 2] = _.z),
								(y[2 * M] = n),
								(y[2 * M + 1] = 1 - i),
								r.push(E++);
						}
						C.push(r);
					}
					for (let t = 0; t < c; t++)
						for (let e = 0; e < l; e++) {
							let r = C[t][e + 1],
								i = C[t][e],
								n = C[t + 1][e],
								s = C[t + 1][e + 1];
							(0 !== t || m > 0) && ((w[3 * A] = r), (w[3 * A + 1] = i), (w[3 * A + 2] = s), A++),
								(t !== c - 1 || S < Math.PI) &&
									((w[3 * A] = i), (w[3 * A + 1] = n), (w[3 * A + 2] = s), A++);
						}
					Object.assign(h, {
						position: { size: 3, data: v },
						normal: { size: 3, data: b },
						uv: { size: 2, data: y },
						index: { data: w },
					}),
						super(t, h);
				}
			}
			const Cr = Symbol.for('spritejs_setAttribute'),
				_r = Symbol.for('spritejs_getAttribute'),
				Lr = Symbol.for('spritejs_setAttributeDefault');
			class Pr extends Ie {
				onPropertyChange(t, e, r) {
					super.onPropertyChange(t, e, r),
						('radius' !== t &&
							'widthSegments' !== t &&
							'heightSegments' !== t &&
							'phiStart' !== t &&
							'phiLength' !== t &&
							'thetaStart' !== t &&
							'thetaLength' !== t) ||
							(e !== r && this.updateMesh());
				}
				remesh() {
					const t = this.program.gl,
						{
							radius: e,
							widthSegments: r,
							heightSegments: i,
							phiStart: n,
							phiLength: s,
							thetaStart: o,
							thetaLength: a,
						} = this.attributes,
						h = new Sr(t, {
							radius: e,
							widthSegments: r,
							heightSegments: i,
							phiStart: n,
							phiLength: s,
							thetaStart: o,
							thetaLength: a,
						});
					this.setGeometry(h);
				}
			}
			!(function (t, e, r) {
				e in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r);
			})(
				Pr,
				'Attr',
				class extends Le {
					constructor(t) {
						super(t),
							this[Lr]({
								radius: 0.5,
								widthSegments: 32,
								heightSegments: 16,
								phiStart: 0,
								phiLength: 2 * Math.PI,
								thetaStart: 0,
								thetaLength: Math.PI,
								raycast: 'sphere',
							});
					}
					get radius() {
						return this[_r]('radius');
					}
					set radius(t) {
						this[Cr]('radius', t);
					}
					get widthSegments() {
						return this[_r]('widthSegments');
					}
					set widthSegments(t) {
						this[Cr]('widthSegments', t);
					}
					get heightSegments() {
						return this[_r]('heightSegments');
					}
					set heightSegments(t) {
						this[Cr]('heightSegments', t);
					}
					get phiStart() {
						return this[_r]('phiStart');
					}
					set phiStart(t) {
						this[Cr]('phiStart', t);
					}
					get phiLength() {
						return this[_r]('phiLength');
					}
					set phiLength(t) {
						this[Cr]('phiLength', t);
					}
					get thetaStart() {
						return this[_r]('thetaStart');
					}
					set thetaStart(t) {
						this[Cr]('thetaStart', t);
					}
					get thetaLength() {
						return this[_r]('thetaLength');
					}
					set thetaLength(t) {
						this[Cr]('thetaLength', t);
					}
				},
			),
				Object(pt.registerNode)(Pr, 'sphere');
			class Or extends st {
				constructor(
					t,
					{
						width: e = 1,
						height: r = 1,
						widthSegments: i = 1,
						heightSegments: n = 1,
						attributes: s = {},
					} = {},
				) {
					const o = i,
						a = n,
						h = (o + 1) * (a + 1),
						l = o * a * 6,
						c = new Float32Array(3 * h),
						u = new Float32Array(3 * h),
						d = new Float32Array(2 * h),
						m = h > 65536 ? new Uint32Array(l) : new Uint16Array(l);
					Or.buildPlane(c, u, d, m, e, r, 0, o, a),
						Object.assign(s, {
							position: { size: 3, data: c },
							normal: { size: 3, data: u },
							uv: { size: 2, data: d },
							index: { data: m },
						}),
						super(t, s);
				}
				static buildPlane(t, e, r, i, n, s, o, a, h, l = 0, c = 1, u = 2, d = 1, m = -1, g = 0, p = 0) {
					const f = g,
						v = n / a,
						b = s / h;
					for (let y = 0; y <= h; y++) {
						let x = y * b - s / 2;
						for (let s = 0; s <= a; s++, g++) {
							let b = s * v - n / 2;
							if (
								((t[3 * g + l] = b * d),
								(t[3 * g + c] = x * m),
								(t[3 * g + u] = o / 2),
								(e[3 * g + l] = 0),
								(e[3 * g + c] = 0),
								(e[3 * g + u] = o >= 0 ? 1 : -1),
								(r[2 * g] = s / a),
								(r[2 * g + 1] = 1 - y / h),
								y === h || s === a)
							)
								continue;
							let w = f + s + y * (a + 1),
								M = f + s + (y + 1) * (a + 1),
								E = f + s + (y + 1) * (a + 1) + 1,
								A = f + s + y * (a + 1) + 1;
							(i[6 * p] = w),
								(i[6 * p + 1] = M),
								(i[6 * p + 2] = A),
								(i[6 * p + 3] = M),
								(i[6 * p + 4] = E),
								(i[6 * p + 5] = A),
								p++;
						}
					}
				}
			}
			class Tr extends st {
				constructor(
					t,
					{
						width: e = 1,
						height: r = 1,
						depth: i = 1,
						widthSegments: n = 1,
						heightSegments: s = 1,
						depthSegments: o = 1,
						attributes: a = {},
					} = {},
				) {
					const h = n,
						l = s,
						c = o,
						u = (h + 1) * (l + 1) * 2 + (h + 1) * (c + 1) * 2 + (l + 1) * (c + 1) * 2,
						d = 6 * (h * l * 2 + h * c * 2 + l * c * 2),
						m = new Float32Array(3 * u),
						g = new Float32Array(3 * u),
						p = new Float32Array(2 * u),
						f = u > 65536 ? new Uint32Array(d) : new Uint16Array(d);
					let v = 0,
						b = 0;
					Or.buildPlane(m, g, p, f, i, r, e, c, l, 2, 1, 0, -1, -1, v, b),
						Or.buildPlane(
							m,
							g,
							p,
							f,
							i,
							r,
							-e,
							c,
							l,
							2,
							1,
							0,
							1,
							-1,
							(v += (c + 1) * (l + 1)),
							(b += c * l),
						),
						Or.buildPlane(m, g, p, f, e, i, r, c, l, 0, 2, 1, 1, 1, (v += (c + 1) * (l + 1)), (b += c * l)),
						Or.buildPlane(
							m,
							g,
							p,
							f,
							e,
							i,
							-r,
							c,
							l,
							0,
							2,
							1,
							1,
							-1,
							(v += (h + 1) * (c + 1)),
							(b += h * c),
						),
						Or.buildPlane(
							m,
							g,
							p,
							f,
							e,
							r,
							-i,
							h,
							l,
							0,
							1,
							2,
							-1,
							-1,
							(v += (h + 1) * (c + 1)),
							(b += h * c),
						),
						Or.buildPlane(
							m,
							g,
							p,
							f,
							e,
							r,
							i,
							h,
							l,
							0,
							1,
							2,
							1,
							-1,
							(v += (h + 1) * (l + 1)),
							(b += h * l),
						),
						Object.assign(a, {
							position: { size: 3, data: m },
							normal: { size: 3, data: g },
							uv: { size: 2, data: p },
							index: { data: f },
						}),
						super(t, a);
				}
			}
			const Nr = Symbol.for('spritejs_setAttribute'),
				Rr = Symbol.for('spritejs_getAttribute'),
				Fr = Symbol.for('spritejs_setAttributeDefault');
			class zr extends Ie {
				onPropertyChange(t, e, r) {
					super.onPropertyChange(t, e, r),
						('width' !== t &&
							'height' !== t &&
							'depth' !== t &&
							'widthSegments' !== t &&
							'heightSegments' !== t &&
							'depthSegments' !== t) ||
							(e !== r && this.updateMesh());
				}
				remesh() {
					const t = this.program.gl,
						{
							width: e,
							height: r,
							depth: i,
							widthSegments: n,
							heightSegments: s,
							depthSegments: o,
						} = this.attributes,
						a = new Tr(t, {
							width: e,
							height: r,
							depth: i,
							widthSegments: n,
							heightSegments: s,
							depthSegments: o,
						});
					this.setGeometry(a);
				}
			}
			!(function (t, e, r) {
				e in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r);
			})(
				zr,
				'Attr',
				class extends Le {
					constructor(t) {
						super(t),
							this[Fr]({
								width: 1,
								height: 1,
								depth: 1,
								widthSegments: 1,
								heightSegments: 1,
								depthSegments: 1,
								colorDivisor: 4,
							});
					}
					get width() {
						return this[Rr]('width');
					}
					set width(t) {
						this[Nr]('width', t);
					}
					get height() {
						return this[Rr]('height');
					}
					set height(t) {
						this[Nr]('height', t);
					}
					get size() {
						return [this.width, this.height, this.depth];
					}
					set size(t) {
						Array.isArray(t) || (t = [t, t, t]),
							(this.width = t[0]),
							(this.height = t[1]),
							(this.depth = t[2]);
					}
					get depth() {
						return this[Rr]('depth');
					}
					set depth(t) {
						this[Nr]('depth', t);
					}
					get widthSegments() {
						return this[Rr]('widthSegments');
					}
					set widthSegments(t) {
						this[Nr]('widthSegments', t);
					}
					get heightSegments() {
						return this[Rr]('heightSegments');
					}
					set heightSegments(t) {
						this[Nr]('heightSegments', t);
					}
					get depthSegments() {
						return this[Rr]('depthSegments');
					}
					set depthSegments(t) {
						this[Nr]('depthSegments', t);
					}
				},
			),
				Object(pt.registerNode)(zr, 'cube');
			const jr = 'catmullrom',
				Dr = 'cubicbezier',
				Ur = 'quadraticbezier',
				Br = new x(),
				Ir = new x(),
				Gr = new x(),
				Vr = new x();
			function kr(t, e, r, i) {
				const n = 1 - t;
				Br.copy(e).scale(n ** 2), Ir.copy(r).scale(2 * n * t), Gr.copy(i).scale(t ** 2);
				const s = new x();
				return s.add(Br, Ir).add(Gr), s;
			}
			function Yr(t, e, r, i, n) {
				const s = 1 - t;
				Br.copy(e).scale(s ** 3),
					Ir.copy(r).scale(3 * s ** 2 * t),
					Gr.copy(i).scale(3 * s * t ** 2),
					Vr.copy(n).scale(t ** 3);
				const o = new x();
				return o.add(Br, Ir).add(Gr).add(Vr), o;
			}
			class Xr {
				constructor({
					points: t = [new x(0, 0, 0), new x(0, 1, 0), new x(1, 1, 0), new x(1, 0, 0)],
					divisions: e = 12,
					type: r = jr,
				} = {}) {
					(this.points = t), (this.divisions = e), (this.type = r);
				}
				_getQuadraticBezierPoints(t = this.divisions) {
					const e = [],
						r = this.points.length;
					if (r < 3) return console.warn('Not enough points provided.'), [];
					const i = this.points[0];
					let n = this.points[1],
						s = this.points[2];
					for (let r = 0; r <= t; r++) {
						const o = kr(r / t, i, n, s);
						e.push(o);
					}
					let o = 3;
					for (; r - o > 0; ) {
						i.copy(s), (n = s.scale(2).sub(n)), (s = this.points[o]);
						for (let r = 1; r <= t; r++) {
							const o = kr(r / t, i, n, s);
							e.push(o);
						}
						o++;
					}
					return e;
				}
				_getCubicBezierPoints(t = this.divisions) {
					const e = [],
						r = this.points.length;
					if (r < 4) return console.warn('Not enough points provided.'), [];
					let i = this.points[0],
						n = this.points[1],
						s = this.points[2],
						o = this.points[3];
					for (let r = 0; r <= t; r++) {
						const a = Yr(r / t, i, n, s, o);
						e.push(a);
					}
					let a = 4;
					for (; r - a > 1; ) {
						i.copy(o), (n = o.scale(2).sub(s)), (s = this.points[a]), (o = this.points[a + 1]);
						for (let r = 1; r <= t; r++) {
							const a = Yr(r / t, i, n, s, o);
							e.push(a);
						}
						a += 2;
					}
					return e;
				}
				_getCatmullRomPoints(t = this.divisions, e = 0.168, r = 0.168) {
					const i = [];
					if (this.points.length <= 2) return this.points;
					let n;
					return (
						this.points.forEach((s, o) => {
							if (0 === o) n = s;
							else {
								const [a, h] = (function (t, e, r = 0.168, i = 0.168) {
										if (
											(e < 1
												? Br.sub(t[1], t[0]).scale(r).add(t[0])
												: Br.sub(t[e + 1], t[e - 1])
														.scale(r)
														.add(t[e]),
											e > t.length - 3)
										) {
											const e = t.length - 1;
											Ir.sub(t[e - 1], t[e])
												.scale(i)
												.add(t[e]);
										} else
											Ir.sub(t[e], t[e + 2])
												.scale(i)
												.add(t[e + 1]);
										return [Br.clone(), Ir.clone()];
									})(this.points, o - 1, e, r),
									l = new Xr({ points: [n, a, h, s], type: Dr });
								i.pop(), i.push(...l.getPoints(t)), (n = s);
							}
						}),
						i
					);
				}
				getPoints(t = this.divisions, e = 0.168, r = 0.168) {
					const i = this.type;
					return i === Ur
						? this._getQuadraticBezierPoints(t)
						: i === Dr
						? this._getCubicBezierPoints(t)
						: i === jr
						? this._getCatmullRomPoints(t, e, r)
						: this.points;
				}
			}
			(Xr.CATMULLROM = jr), (Xr.CUBICBEZIER = Dr), (Xr.QUADRATICBEZIER = Ur);
			class qr extends Xr {
				constructor({ points: t, divisions: e, type: r } = {}) {
					!Array.isArray(t) || !t[0] || t[0] instanceof x || (t = t.map(t => new x().copy(t))),
						super({ points: t, divisions: e, type: r });
				}
			}
			const Wr = Symbol.for('spritejs_setAttribute'),
				Zr = Symbol.for('spritejs_getAttribute'),
				Hr = Symbol.for('spritejs_setAttributeDefault');
			class $r extends Ie {
				onPropertyChange(t, e, r) {
					super.onPropertyChange(t, e, r),
						('width' !== t && 'height' !== t && 'widthSegments' !== t && 'heightSegments' !== t) ||
							(e !== r && this.updateMesh());
				}
				remesh() {
					const t = this.program.gl,
						{ width: e, height: r, widthSegments: i, heightSegments: n } = this.attributes,
						s = new Or(t, { width: e, height: r, widthSegments: i, heightSegments: n });
					this.setGeometry(s);
				}
			}
			!(function (t, e, r) {
				e in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r);
			})(
				$r,
				'Attr',
				class extends Le {
					constructor(t) {
						super(t), this[Hr]({ width: 1, height: 1, widthSegments: 1, heightSegments: 1 });
					}
					get width() {
						return this[Zr]('width');
					}
					set width(t) {
						this[Wr]('width', t);
					}
					get height() {
						return this[Zr]('height');
					}
					set height(t) {
						this[Wr]('height', t);
					}
					get widthSegments() {
						return this[Zr]('widthSegments');
					}
					set widthSegments(t) {
						this[Wr]('widthSegments', t);
					}
					get heightSegments() {
						return this[Zr]('heightSegments');
					}
					set heightSegments(t) {
						this[Wr]('heightSegments', t);
					}
				},
			),
				Object(pt.registerNode)($r, 'plane');
			const Qr = Symbol.for('spritejs_setAttribute'),
				Kr = Symbol.for('spritejs_getAttribute'),
				Jr = Symbol.for('spritejs_setAttributeDefault');
			class ti extends Ie {
				setProgram(t) {
					t.uniforms.uThickness || (t.uniforms.uThickness = { value: 1 }),
						t.uniforms.uMiter || (t.uniforms.uMiter = { value: 1 }),
						t.gl.getUniformLocation(t.program, 'uTotalLength') &&
							!t.uniforms.uTotalLength &&
							(t.uniforms.uTotalLength = { value: 0 }),
						super.setProgram(t);
				}
				get points() {
					return this.attributes.points;
				}
				onPropertyChange(t, e, r) {
					super.onPropertyChange(t, e, r),
						'points' === t &&
							e !== r &&
							(e.length === r.length ? this.updateGeometry() : this.updateMesh());
				}
				updateGeometry() {
					const t = this.attributes.points,
						e = this.geometry.attributes.position.data,
						r = this.geometry.attributes.prev.data,
						i = this.geometry.attributes.next.data,
						n = this.geometry.attributes.seg ? this.geometry.attributes.seg.data : null;
					let s = 0;
					for (let o = 0; o < t.length; o += 3) {
						const a = [t[o], t[o + 1], t[o + 2]];
						if (
							(e.set(a, 2 * o),
							e.set(a, 2 * o + 3),
							n &&
								(0 === o
									? n.set([0, 0], 0)
									: ((s += Math.hypot(t[o] - t[o - 3], t[o + 1] - t[o - 2], t[o + 2] - t[o - 1])),
									  n.set([s, s], (o / 3) * 2))),
							0 === o)
						) {
							const e = [
								t[o] - t[o + 3] + t[o],
								t[o + 1] - t[o + 4] + t[o + 1],
								t[o + 2] - t[o + 5] + t[o + 2],
							];
							r.set(e, 2 * o), r.set(e, 2 * o + 3);
						} else i.set(a, 2 * (o - 3)), i.set(a, 2 * (o - 3) + 3);
						if (o >= t.length - 3) {
							const e = [
								t[o] - t[o - 3] + t[o],
								t[o + 1] - t[o - 2] + t[o + 1],
								t[o + 2] - t[o - 1] + t[o + 2],
							];
							i.set(e, 2 * o), i.set(e, 2 * o + 3);
						} else r.set(a, 2 * (o + 3)), r.set(a, 2 * (o + 3) + 3);
					}
					this.program &&
						this.program.uniforms.uTotalLength &&
						(this.program.uniforms.uTotalLength = { value: s }),
						(this.geometry.attributes.position.needsUpdate = !0),
						(this.geometry.attributes.prev.needsUpdate = !0),
						(this.geometry.attributes.next.needsUpdate = !0),
						n && (this.geometry.attributes.seg.needsUpdate = !0);
				}
				remesh() {
					const t = this.attributes.points.length / 3,
						e = new Float32Array(3 * t * 2),
						r = new Float32Array(3 * t * 2),
						i = new Float32Array(3 * t * 2),
						n = new Float32Array(2 * t),
						s = new Float32Array(2 * t * 2),
						o = new Uint16Array(3 * (t - 1) * 2),
						a = { position: e, prev: r, next: i, side: n, uv: s, index: o };
					if (this.program && this.program.attributeLocations.has('seg')) {
						const e = new Float32Array(2 * t);
						a.seg = e;
					}
					for (let e = 0; e < t; e++) {
						n.set([-1, 1], 2 * e);
						const r = e / (t - 1);
						if ((s.set([0, r, 1, r], 4 * e), e === t - 1)) continue;
						const i = 2 * e;
						o.set([i + 0, i + 1, i + 2], 3 * (i + 0)), o.set([i + 2, i + 1, i + 3], 3 * (i + 1));
					}
					this.setGeometry(a), this.updateGeometry();
				}
			}
			!(function (t, e, r) {
				e in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r);
			})(
				ti,
				'Attr',
				class extends Le {
					constructor(t) {
						super(t), this[Jr]({ points: [], raycast: 'none' });
					}
					get points() {
						return this[Kr]('points');
					}
					set points(t) {
						Array.isArray(t) && (t = t.reduce((t, e) => (Array.isArray(e) ? [...t, ...e] : [...t, e]), [])),
							this[Qr]('points', t);
					}
				},
			),
				Object(pt.registerNode)(ti, 'polyline3d');
			class ei extends st {
				constructor(
					t,
					{
						radiusTop: e = 0.5,
						radiusBottom: r = 0.5,
						height: i = 1,
						radialSegments: n = 8,
						heightSegments: s = 1,
						openEnded: o = !1,
						thetaStart: a = 0,
						thetaLength: h = 2 * Math.PI,
						attributes: l = {},
					} = {},
				) {
					const c = n,
						u = s,
						d = a,
						m = h,
						g = o ? 0 : r && e ? 2 : 1,
						p = (c + 1) * (u + 1 + g) + g,
						f = c * u * 6 + g * c * 3,
						v = new Float32Array(3 * p),
						b = new Float32Array(3 * p),
						y = new Float32Array(2 * p),
						w = p > 65536 ? new Uint32Array(f) : new Uint16Array(f);
					let M = 0,
						E = 0;
					const A = [];
					function S(t) {
						let n;
						const s = !0 === t ? e : r,
							o = !0 === t ? 1 : -1,
							a = M;
						for (
							v.set([0, 0.5 * i * o, 0], 3 * M),
								b.set([0, o, 0], 3 * M),
								y.set([0.5, 0.5], 2 * M),
								M++,
								n = 0;
							n <= c;
							n++
						) {
							const t = (n / c) * m + d,
								e = Math.cos(t),
								r = Math.sin(t);
							v.set([s * r, 0.5 * i * o, s * e], 3 * M),
								b.set([0, o, 0], 3 * M),
								y.set([0.5 * e + 0.5, 0.5 * r * o + 0.5], 2 * M),
								M++;
						}
						for (n = 0; n < c; n++) {
							const e = a + n + 1;
							t ? w.set([e, e + 1, a], 3 * E) : w.set([e + 1, e, a], 3 * E), E++;
						}
					}
					!(function () {
						let t, n;
						const s = new x(),
							o = (r - e) / i;
						for (n = 0; n <= u; n++) {
							const a = [],
								h = n / u,
								l = h * (r - e) + e;
							for (t = 0; t <= c; t++) {
								const e = t / c,
									r = e * m + d,
									n = Math.sin(r),
									u = Math.cos(r);
								v.set([l * n, (0.5 - h) * i, l * u], 3 * M),
									s.set(n, o, u).normalize(),
									b.set([s.x, s.y, s.z], 3 * M),
									y.set([e, 1 - h], 2 * M),
									a.push(M++);
							}
							A.push(a);
						}
						for (t = 0; t < c; t++)
							for (n = 0; n < u; n++) {
								const e = A[n][t],
									r = A[n + 1][t],
									i = A[n + 1][t + 1],
									s = A[n][t + 1];
								w.set([e, r, s, r, i, s], 3 * E), (E += 2);
							}
					})(),
						o || (e && S(!0), r && S(!1)),
						Object.assign(l, {
							position: { size: 3, data: v },
							normal: { size: 3, data: b },
							uv: { size: 2, data: y },
							index: { data: w },
						}),
						super(t, l);
				}
			}
			const ri = Symbol.for('spritejs_setAttribute'),
				ii = Symbol.for('spritejs_getAttribute'),
				ni = Symbol.for('spritejs_setAttributeDefault');
			class si extends Ie {
				onPropertyChange(t, e, r) {
					super.onPropertyChange(t, e, r),
						('radiusTop' !== t &&
							'radiusBottom' !== t &&
							'height' !== t &&
							'radialSegments' !== t &&
							'heightSegments' !== t &&
							'openEnded' !== t &&
							'thetaStart' !== t &&
							'thetaLength' !== t) ||
							(e !== r && this.updateMesh());
				}
				remesh() {
					const t = this.program.gl,
						{
							radiusTop: e,
							radiusBottom: r,
							height: i,
							radialSegments: n,
							heightSegments: s,
							openEnded: o,
							thetaStart: a,
							thetaLength: h,
						} = this.attributes,
						l = new ei(t, {
							radiusTop: e,
							radiusBottom: r,
							height: i,
							radialSegments: n,
							heightSegments: s,
							openEnded: o,
							thetaStart: a,
							thetaLength: h,
						});
					this.setGeometry(l);
				}
			}
			function oi(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(t);
					e &&
						(i = i.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push.apply(r, i);
				}
				return r;
			}
			function ai(t, e, r) {
				return (
					e in t
						? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (t[e] = r),
					t
				);
			}
			function hi(t, e) {
				if (null == t) return {};
				var r,
					i,
					n = (function (t, e) {
						if (null == t) return {};
						var r,
							i,
							n = {},
							s = Object.keys(t);
						for (i = 0; i < s.length; i++) (r = s[i]), e.indexOf(r) >= 0 || (n[r] = t[r]);
						return n;
					})(t, e);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(t);
					for (i = 0; i < s.length; i++)
						(r = s[i]),
							e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]));
				}
				return n;
			}
			!(function (t, e, r) {
				e in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r);
			})(
				si,
				'Attr',
				class extends Le {
					constructor(t) {
						super(t),
							this[ni]({
								radiusTop: 0.5,
								radiusBottom: 0.5,
								height: 1,
								radialSegments: 16,
								heightSegments: 1,
								openEnded: !1,
								thetaStart: 0,
								thetaLength: 2 * Math.PI,
							});
					}
					get radiusTop() {
						return this[ii]('radiusTop');
					}
					set radiusTop(t) {
						this[ri]('radiusTop', t);
					}
					get radiusBottom() {
						return this[ii]('radiusBottom');
					}
					set radiusBottom(t) {
						this[ri]('radiusBottom', t);
					}
					get radius() {
						return [this.radiusTop, this.radiusBottom];
					}
					set radius(t) {
						Array.isArray(t) || (t = [t, t]), (this.radiusTop = t[0]), (this.radiusBottom = t[1]);
					}
					get height() {
						return this[ii]('height');
					}
					set height(t) {
						this[ri]('height', t);
					}
					get radialSegments() {
						return this[ii]('radialSegments');
					}
					set radialSegments(t) {
						this[ri]('radialSegments', t);
					}
					get heightSegments() {
						return this[ii]('heightSegments');
					}
					set heightSegments(t) {
						this[ri]('heightSegments', t);
					}
					get openEnded() {
						return this[ii]('openEnded');
					}
					set openEnded(t) {
						this[ri]('openEnded', t);
					}
					get thetaStart() {
						return this[ii]('thetaStart');
					}
					set thetaStart(t) {
						this[ri]('thetaStart', t);
					}
					get thetaLength() {
						return this[ii]('thetaLength');
					}
					set thetaLength(t) {
						this[ri]('thetaLength', t);
					}
				},
			),
				Object(pt.registerNode)(si, 'cylinder');
			const li = Symbol('target'),
				ci = Symbol('buffer');
			class ui extends ge {
				constructor(t, e = {}) {
					let {
						width: r = t.canvas.width,
						height: i = t.canvas.height,
						target: n = t.FRAMEBUFFER,
						color: s = 1,
						depth: o = !0,
						stencil: a = !1,
						depthTexture: h = !1,
						wrapS: l = t.CLAMP_TO_EDGE,
						wrapT: c = t.CLAMP_TO_EDGE,
						minFilter: u = t.LINEAR,
						magFilter: d = u,
						type: m = t.UNSIGNED_BYTE,
						format: g = t.RGBA,
						internalFormat: p = g,
						unpackAlignment: f,
						premultiplyAlpha: v,
						camera: b,
						buffer: y = !1,
					} = e;
					super(
						hi(e, [
							'width',
							'height',
							'target',
							'color',
							'depth',
							'stencil',
							'depthTexture',
							'wrapS',
							'wrapT',
							'minFilter',
							'magFilter',
							'type',
							'format',
							'internalFormat',
							'unpackAlignment',
							'premultiplyAlpha',
							'camera',
							'buffer',
						]),
					);
					const x = {
						width: r,
						height: i,
						target: n,
						color: s,
						depth: o,
						stencil: a,
						depthTexture: h,
						wrapS: l,
						wrapT: c,
						minFilter: u,
						magFilter: d,
						type: m,
						format: g,
						internalFormat: p,
						unpackAlignment: f,
						premultiplyAlpha: v,
					};
					if (((this.options = x), (this[li] = new tt(t, x)), y && (this[ci] = new tt(t, this.options)), b)) {
						const e = new we(t, b);
						e.connect(this, 0), (this.camera = e);
					}
				}
				get texture() {
					return this[ci] ? this[ci].texture : this[li].texture;
				}
				renderBy(t, e = {}) {
					let { root: r = this } = e,
						i = hi(e, ['root']);
					const n = this.camera ? this.camera.body : null,
						s = this[li];
					return (
						this.dispatchEvent({ type: 'beforerender', detail: { scene: r, camera: n, renderer: t } }),
						t.renderer.render(
							(function (t) {
								for (var e = 1; e < arguments.length; e++) {
									var r = null != arguments[e] ? arguments[e] : {};
									e % 2
										? oi(Object(r), !0).forEach(function (e) {
												ai(t, e, r[e]);
										  })
										: Object.getOwnPropertyDescriptors
										? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
										: oi(Object(r)).forEach(function (e) {
												Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
										  });
								}
								return t;
							})({ scene: r.body, camera: n, target: s }, i),
						),
						this.dispatchEvent({ type: 'afterrender', detail: { scene: r, camera: n, renderer: t } }),
						this[li].texture
					);
				}
				swap() {
					if (null == this[ci])
						throw new Error(
							'No buffer to swap. You must set buffer option to true when creating the renderTarget object.',
						);
					[this[li], this[ci]] = [this[ci], this[li]];
				}
			}
			Object(pt.registerNode)(ui, 'rendertarget');
			class di extends J {
				constructor(
					t,
					{ buffer: e, wrapS: r = t.CLAMP_TO_EDGE, wrapT: i = t.CLAMP_TO_EDGE, anisotropy: n = 0 } = {},
				) {
					if ((super(t, { generateMipmaps: !1, wrapS: r, wrapT: i, anisotropy: n }), e))
						return this.parseBuffer(e);
				}
				parseBuffer(t) {
					const e = new mi(t);
					(e.mipmaps.isCompressedTexture = !0),
						(this.image = e.mipmaps),
						(this.internalFormat = e.glInternalFormat),
						(this.minFilter = e.numberOfMipmapLevels > 1 ? this.gl.NEAREST_MIPMAP_LINEAR : this.gl.LINEAR);
				}
			}
			function mi(t) {
				const e = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
					r = new Uint8Array(t, 0, 12);
				for (let t = 0; t < r.length; t++)
					if (r[t] !== e[t]) return console.error('File missing KTX identifier');
				const i = Uint32Array.BYTES_PER_ELEMENT,
					n = new DataView(t, 12, 13 * i),
					s = 67305985 === n.getUint32(0, !0);
				if (0 !== n.getUint32(1 * i, s)) return console.warn('only compressed formats currently supported');
				this.glInternalFormat = n.getUint32(4 * i, s);
				let o = n.getUint32(6 * i, s),
					a = n.getUint32(7 * i, s);
				(this.numberOfFaces = n.getUint32(10 * i, s)),
					(this.numberOfMipmapLevels = Math.max(1, n.getUint32(11 * i, s)));
				const h = n.getUint32(12 * i, s);
				this.mipmaps = [];
				let l = 64 + h;
				for (let e = 0; e < this.numberOfMipmapLevels; e++) {
					const e = new Int32Array(t, l, 1)[0];
					l += 4;
					for (let r = 0; r < this.numberOfFaces; r++) {
						const r = new Uint8Array(t, l, e);
						this.mipmaps.push({ data: r, width: o, height: a }), (l += e), (l += 3 - ((e + 3) % 4));
					}
					(o >>= 1), (a >>= 1);
				}
			}
			let gi = {};
			const pi = [];
			class fi {
				static load(
					t,
					{
						src: e,
						wrapS: r = t.CLAMP_TO_EDGE,
						wrapT: i = t.CLAMP_TO_EDGE,
						anisotropy: n = 0,
						format: s = t.RGBA,
						internalFormat: o = s,
						generateMipmaps: a = !0,
						minFilter: h = a ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR,
						magFilter: l = t.LINEAR,
						premultiplyAlpha: c = !1,
						unpackAlignment: u = 4,
						flipY: d = !0,
					} = {},
				) {
					const m = this.getSupportedExtensions(t);
					let g = 'none';
					if (
						('string' == typeof e && (g = e.split('.').pop().split('?')[0].toLowerCase()),
						'object' == typeof e)
					)
						for (const t in e)
							if (m.includes(t.toLowerCase())) {
								(g = t.toLowerCase()), (e = e[t]);
								break;
							}
					const p = e + r + i + n + s + o + a + h + l + c + u + d + t.renderer.id;
					if (gi[p]) return gi[p];
					let f;
					switch (g) {
						case 'ktx':
						case 'pvrtc':
						case 's3tc':
						case 'etc':
						case 'etc1':
						case 'astc':
							(f = new di(t, { src: e, wrapS: r, wrapT: i, anisotropy: n })),
								(f.loaded = this.loadKTX(e, f));
							break;
						case 'webp':
						case 'jpg':
						case 'jpeg':
						case 'png':
							(f = new J(t, {
								wrapS: r,
								wrapT: i,
								anisotropy: n,
								format: s,
								internalFormat: o,
								generateMipmaps: a,
								minFilter: h,
								magFilter: l,
								premultiplyAlpha: c,
								unpackAlignment: u,
								flipY: d,
							})),
								(f.loaded = this.loadImage(t, e, f));
							break;
						default:
							console.warn('No supported format supplied'), (f = new J(t));
					}
					return (f.ext = g), (gi[p] = f), f;
				}
				static getSupportedExtensions(t) {
					if (pi.length) return pi;
					const e = {
						pvrtc:
							t.renderer.getExtension('WEBGL_compressed_texture_pvrtc') ||
							t.renderer.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
						s3tc:
							t.renderer.getExtension('WEBGL_compressed_texture_s3tc') ||
							t.renderer.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
							t.renderer.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc'),
						etc: t.renderer.getExtension('WEBGL_compressed_texture_etc'),
						etc1: t.renderer.getExtension('WEBGL_compressed_texture_etc1'),
						astc: t.renderer.getExtension('WEBGL_compressed_texture_astc'),
					};
					for (const t in e) e[t] && pi.push(t);
					return vi && pi.push('webp'), pi.push('png', 'jpg'), pi;
				}
				static loadKTX(t, e) {
					return fetch(t)
						.then(t => t.arrayBuffer())
						.then(t => e.parseBuffer(t));
				}
				static loadImage(t, e, r) {
					return (function (t) {
						return new Promise(e => {
							const r = new Image();
							r.src = t;
							const i = navigator.userAgent.toLowerCase().includes('chrome');
							window.createImageBitmap && i
								? (r.onload = () => {
										createImageBitmap(r, {
											imageOrientation: 'flipY',
											premultiplyAlpha: 'none',
										}).then(t => {
											e(t);
										});
								  })
								: (r.onload = () => e(r));
						});
					})(e).then(e => {
						(bi(e.width) && bi(e.height)) ||
							(r.generateMipmaps && (r.generateMipmaps = !1),
							r.minFilter === t.NEAREST_MIPMAP_LINEAR && (r.minFilter = t.LINEAR),
							r.wrapS === t.REPEAT && (r.wrapS = r.wrapT = t.CLAMP_TO_EDGE)),
							(r.image = e),
							(r.onUpdate = () => {
								e.close && e.close(), (r.onUpdate = null);
							});
					});
				}
				static clearCache() {
					gi = {};
				}
			}
			function vi() {
				return 0 == document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp');
			}
			function bi(t) {
				return Math.log2(t) % 1 == 0;
			}
			class yi {
				static load(t, e) {
					const r = fi.load(t.gl, e);
					return (
						r && r.loaded && r.loaded.then
							? r.loaded.then(() => {
									t.forceUpdate();
							  })
							: r &&
							  r.then &&
							  r.then(() => {
									t.forceUpdate();
							  }),
						r
					);
				}
			}
			const xi = {
					vertex:
						'precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\n\nuniform mat3 normalMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec3 vNormal;\n\nvoid main() {\n    vNormal = normalize(normalMatrix * normal);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}',
					fragment:
						'precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\n\nvoid main() {\n    gl_FragColor.rgb = normalize(vNormal);\n    gl_FragColor.a = 1.0;\n}',
				},
				wi = {
					vertex:
						'precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec3 pointLightPosition; //点光源位置\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  vColor = vec4(diffuse + ambient, color.a);\n  // vColor = color;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}',
					fragment:
						'precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光 xyz - 向量位置, w - 强度\n\nvoid main() {\n  float light = dot(vNormal, normalize(directionalLight.xyz));\n  gl_FragColor.rgb = vColor.rgb + light * directionalLight.w;\n  gl_FragColor.a = vColor.a;\n}',
				},
				Mi = {
					vertex:
						'precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec4 vColor;\n\nvarying float fCos;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  \n  fCos = cos;\n\n  vUv = uv;\n  vColor = color;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}',
					fragment:
						'precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nvarying vec2 vUv;\n\nvarying float fCos;\nvarying vec4 vColor;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture2D(tMap, vUv);\n\n  float alpha = texColor.a;\n  color.rgb = mix(color.rgb, texColor.rgb, alpha);\n  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb + shading;\n  gl_FragColor.a = color.a;\n}',
				},
				Ei = {
					vertex:
						'precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec3 vDir;\nvarying vec4 vColor;\n\nvarying float fCos;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n  vDir = normalize(position);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  \n  fCos = cos;\n  vColor = color;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}',
					fragment:
						'precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec3 vDir;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光\n\nuniform samplerCube tMap;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = textureCube(tMap, vDir);\n\n  float alpha = texColor.a;\n  color.rgb = mix(color.rgb, texColor.rgb, alpha);\n  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb + shading;\n  gl_FragColor.a = color.a;\n}',
				},
				Ai = {
					vertex:
						'precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 uv;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec4 vColor;\n\nvarying float fCos;\nvarying vec4 vLightNDC;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nuniform mat4 shadowViewMatrix;\nuniform mat4 shadowProjectionMatrix;\n\n// Matrix to shift range from -1->1 to 0->1\nconst mat4 depthScaleMatrix = mat4(\n    0.5, 0, 0, 0, \n    0, 0.5, 0, 0, \n    0, 0, 0.5, 0, \n    0.5, 0.5, 0.5, 1\n);\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  \n  fCos = cos;\n\n  vUv = uv;\n  vColor = color;\n\n  vLightNDC = depthScaleMatrix * shadowProjectionMatrix * shadowViewMatrix * modelMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}',
					fragment:
						'precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nuniform sampler2D tShadow;\nuniform float uShadow;\nvarying vec2 vUv;\n\nvarying float fCos;\nvarying vec4 vColor;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvarying vec4 vLightNDC; // 阴影\n\nfloat unpackRGBA (vec4 v) {\n    return dot(v, 1.0 / vec4(1.0, 255.0, 65025.0, 16581375.0));\n}\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture2D(tMap, vUv);\n\n  float alpha = texColor.a;\n  color.rgb = mix(color.rgb, texColor.rgb, alpha);\n  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 lightPos = vLightNDC.xyz / vLightNDC.w;\n  \n  float bias = 0.001;\n  float depth = lightPos.z - bias;\n  float occluder = unpackRGBA(texture2D(tShadow, lightPos.xy));\n\n  // Compare actual depth from light to the occluded depth rendered in the depth map\n  // If the occluded depth is smaller, we must be in uShadow\n  float uShadowDept = mix(uShadow, 1.0, step(depth, occluder));\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb * uShadowDept + shading;\n  gl_FragColor.a = color.a;\n}',
				},
				Si = {
					vertex:
						'precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  \n  fCos = cos;\n\n  // vColor = vec4(diffuse + ambient, color.a);\n  vColor = color;\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}',
					fragment:
						'precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture2D(tMap, vUv);\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  float alpha = texColor.a;\n  color.rgb = mix(texColor.rgb, color.rgb, 1.0 - alpha);\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb + shading;\n  gl_FragColor.a = color.a;\n}',
				},
				Ci = {
					vertex:
						'precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform mat4 shadowViewMatrix;\nuniform mat4 shadowProjectionMatrix;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\nvarying vec4 vLightNDC;\n\nuniform vec3 pointLightPosition; //点光源位置\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\n// Matrix to shift range from -1->1 to 0->1\nconst mat4 depthScaleMatrix = mat4(\n    0.5, 0, 0, 0, \n    0, 0.5, 0, 0, \n    0, 0, 0.5, 0, \n    0.5, 0.5, 0.5, 1\n);\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  vColor = vec4(diffuse + ambient, color.a);\n  // vColor = color;\n\n  vLightNDC = depthScaleMatrix * shadowProjectionMatrix * shadowViewMatrix * modelMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}',
					fragment:
						'precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight;\n\nuniform sampler2D tShadow;\nuniform float uShadow;\n\nvarying vec4 vLightNDC;\n\nfloat unpackRGBA (vec4 v) {\n    return dot(v, 1.0 / vec4(1.0, 255.0, 65025.0, 16581375.0));\n}\n\nvoid main() {\n  float l = dot(vNormal, normalize(directionalLight.xyz));\n\n  vec3 lightPos = vLightNDC.xyz / vLightNDC.w;\n  \n  float bias = 0.001;\n  float depth = lightPos.z - bias;\n  float occluder = unpackRGBA(texture2D(tShadow, lightPos.xy));\n\n  // Compare actual depth from light to the occluded depth rendered in the depth map\n  // If the occluded depth is smaller, we must be in uShadow\n  float uShadowDept = mix(uShadow, 1.0, step(depth, occluder));\n\n  gl_FragColor.rgb = vColor.rgb * uShadowDept + l * directionalLight.w;\n  gl_FragColor.a = vColor.a;\n}',
				},
				_i = {
					vertex:
						'precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 uv;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform mat4 shadowViewMatrix;\nuniform mat4 shadowProjectionMatrix;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\nvarying vec2 vUv;\n\nvarying vec4 vLightNDC;\n\nvarying float fCos;\n\nuniform vec3 pointLightPosition; //点光源位置\n\n// Matrix to shift range from -1->1 to 0->1\nconst mat4 depthScaleMatrix = mat4(\n    0.5, 0, 0, 0, \n    0, 0.5, 0, 0, \n    0, 0, 0.5, 0, \n    0.5, 0.5, 0.5, 1\n);\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n\n  fCos = cos;\n\n  vColor = color;\n\n  vUv = uv;\n  vLightNDC = depthScaleMatrix * shadowProjectionMatrix * shadowViewMatrix * modelMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}',
					fragment:
						'precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nuniform sampler2D tShadow;\nuniform float uShadow;\n\nvarying vec2 vUv;\nvarying vec4 vLightNDC;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nfloat unpackRGBA (vec4 v) {\n  return dot(v, 1.0 / vec4(1.0, 255.0, 65025.0, 16581375.0));\n}\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture2D(tMap, vUv);\n\n  vec3 lightPos = vLightNDC.xyz / vLightNDC.w;\n  float bias = 0.001;\n  float depth = lightPos.z - bias;\n  float occluder = unpackRGBA(texture2D(tShadow, lightPos.xy));\n\n  // Compare actual depth from light to the occluded depth rendered in the depth map\n  // If the occluded depth is smaller, we must be in uShadow\n  float uShadow = mix(uShadow, 1.0, step(depth, occluder));\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  float alpha = texColor.a;\n  color.rgb = mix(texColor.rgb, color.rgb, 1.0 - alpha);\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb * uShadow + shading;\n  gl_FragColor.a = color.a;\n}',
				},
				Li = {
					vertex:
						'precision highp float;\nattribute vec3 position;\nattribute vec3 next;\nattribute vec3 prev;\nattribute float side;\nattribute vec4 color;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform vec2 uResolution;\nuniform float uDPR;\nuniform float uThickness;\nuniform float uMiter;\n\nvarying vec4 vColor;\n\nvec4 getPosition() {\n    mat4 mvp = projectionMatrix * modelViewMatrix;\n    vec4 current = mvp * vec4(position, 1);\n    vec4 nextPos = mvp * vec4(next, 1);\n    vec4 prevPos = mvp * vec4(prev, 1);\n    vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    \n    vec2 currentScreen = current.xy / current.w * aspect;\n    vec2 nextScreen = nextPos.xy / nextPos.w * aspect;\n    vec2 prevScreen = prevPos.xy / prevPos.w * aspect;\n\n    vec2 dir1 = normalize(currentScreen - prevScreen);\n    vec2 dir2 = normalize(nextScreen - currentScreen);\n    vec2 dir = normalize(dir1 + dir2);\n\n    vec2 normal = vec2(-dir.y, dir.x);\n    normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);\n    normal /= aspect;\n    float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);\n    float pixelWidth = current.w * pixelWidthRatio;\n    normal *= pixelWidth * uThickness;\n    current.xy -= normal * side;\n    return current;\n}\n\nvoid main() {\n    gl_Position = getPosition();\n    vColor = color;\n}',
					fragment:
						'precision highp float;\n\nvarying vec4 vColor;\n\nvoid main() {\n    gl_FragColor = vColor;\n}',
				},
				Pi = {
					vertex:
						'precision highp float;\nattribute vec3 position;\nattribute vec3 next;\nattribute vec3 prev;\nattribute vec2 uv;\nattribute float side;\nattribute vec4 color;\nattribute float seg;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform vec2 uResolution;\nuniform float uDPR;\nuniform float uThickness;\nuniform float uMiter;\n\nvarying vec2 vUv;\nvarying vec4 vColor;\nvarying float fSeg;\n\nvec4 getPosition() {\n    mat4 mvp = projectionMatrix * modelViewMatrix;\n    vec4 current = mvp * vec4(position, 1);\n    vec4 nextPos = mvp * vec4(next, 1);\n    vec4 prevPos = mvp * vec4(prev, 1);\n    vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    \n    vec2 currentScreen = current.xy / current.w * aspect;\n    vec2 nextScreen = nextPos.xy / nextPos.w * aspect;\n    vec2 prevScreen = prevPos.xy / prevPos.w * aspect;\n\n    vec2 dir1 = normalize(currentScreen - prevScreen);\n    vec2 dir2 = normalize(nextScreen - currentScreen);\n    vec2 dir = normalize(dir1 + dir2);\n\n    vec2 normal = vec2(-dir.y, dir.x);\n    normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);\n    normal /= aspect;\n    float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);\n    float pixelWidth = current.w * pixelWidthRatio;\n    normal *= pixelWidth * uThickness;\n    current.xy -= normal * side;\n    return current;\n}\n\nvoid main() {\n    vUv = uv;\n    gl_Position = getPosition();\n    vColor = color;\n    fSeg = seg;\n}',
					fragment:
						'precision highp float;\n\nuniform float uTotalLength;\nuniform float uDashLength;\nuniform float uDashOffset;\n\nvarying vec4 vColor;\nvarying vec2 vUv;\nvarying float fSeg;\n\nvoid main() {\n    float f = fract((uDashOffset + fSeg) / (2.0 * uDashLength));\n    f = 1.0 - step(0.5, f);\n    gl_FragColor = vColor * f;\n}',
				},
				Oi = {
					vertex:
						'precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec2 uv;\nattribute vec3 normal;\nattribute vec4 color;\n\nuniform mat3 normalMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vMPos;\nvarying vec4 vColor;\nvarying vec3 vLDir;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nvoid main() {\n  vUv = uv;\n  vColor = color;\n  vNormal = normalize(normalMatrix * normal);\n  vMPos = (modelMatrix * vec4(position, 1.0)).xyz;\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  vLDir = dir;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}',
					fragment:
						'#extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\nprecision highp int;\n\nuniform mat4 viewMatrix;\nuniform sampler2D tMap;\n\nuniform sampler2D tNormal;\nuniform float uNormalScale;\nuniform float uNormalUVScale;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vMPos;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvarying vec3 vLDir;\n\nvec3 getNormal() {\n  vec3 pos_dx = dFdx(vMPos.xyz);\n  vec3 pos_dy = dFdy(vMPos.xyz);\n  vec2 tex_dx = dFdx(vUv);\n  vec2 tex_dy = dFdy(vUv);\n\n  vec3 t = normalize(pos_dx * tex_dy.t - pos_dy * tex_dx.t);\n  vec3 b = normalize(-pos_dx * tex_dy.s + pos_dy * tex_dx.s);\n  mat3 tbn = mat3(t, b, normalize(vNormal));\n\n  vec3 n = texture2D(tNormal, vUv * uNormalUVScale).rgb * 2.0 - 1.0;\n  n.xy *= uNormalScale;\n  vec3 normal = normalize(tbn * n);\n\n  // Get world normal from view normal\n  return normalize((vec4(normal, 0.0) * viewMatrix).xyz);\n}\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture2D(tMap, vUv);\n\n  float alpha = texColor.a;\n  color.rgb = mix(color.rgb, texColor.rgb, alpha);\n  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 normal = getNormal();\n  float cos = max(dot(vLDir, normal), 0.0);// 计算入射角余弦值\n  \n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(normal, light) * directionalLight.w;\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n  color = vec4(diffuse + ambient, color.a);\n  \n  gl_FragColor.rgb = color.rgb + shading;\n  gl_FragColor.a = color.a;\n}',
				},
				Ti = {
					vertex:
						'#version 300 es\nprecision highp float;\nprecision highp int;\n\nin vec3 position;\nin vec2 uv;\nin vec3 normal;\nin vec4 color;\n\nuniform mat3 normalMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nout vec2 vUv;\nout vec3 vNormal;\nout vec3 vMPos;\nout vec4 vColor;\nout vec3 vLDir;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nvoid main() {\n  vUv = uv;\n  vColor = color;\n  vNormal = normalize(normalMatrix * normal);\n  vMPos = (modelMatrix * vec4(position, 1.0)).xyz;\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  vLDir = dir;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}',
					fragment:
						'#version 300 es\nprecision highp float;\nprecision highp int;\n\nuniform mat4 viewMatrix;\nuniform sampler2D tMap;\n\nuniform sampler2D tNormal;\nuniform float uNormalScale;\nuniform float uNormalUVScale;\n\nin vec2 vUv;\nin vec3 vNormal;\nin vec3 vMPos;\nin vec4 vColor;\nin vec3 vLDir;\n\nuniform vec4 directionalLight; //平行光\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nout vec4 FragColor;\n\nvec3 getNormal() {\n  vec3 pos_dx = dFdx(vMPos.xyz);\n  vec3 pos_dy = dFdy(vMPos.xyz);\n  vec2 tex_dx = dFdx(vUv);\n  vec2 tex_dy = dFdy(vUv);\n\n  vec3 t = normalize(pos_dx * tex_dy.t - pos_dy * tex_dx.t);\n  vec3 b = normalize(-pos_dx * tex_dy.s + pos_dy * tex_dx.s);\n  mat3 tbn = mat3(t, b, normalize(vNormal));\n\n  vec3 n = texture(tNormal, vUv * uNormalUVScale).rgb * 2.0 - 1.0;\n  n.xy *= uNormalScale;\n  vec3 normal = normalize(tbn * n);\n\n  // Get world normal from view normal\n  return normalize((vec4(normal, 0.0) * viewMatrix).xyz);\n}\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture(tMap, vUv);\n\n  float alpha = texColor.a;\n  color.rgb = mix(color.rgb, texColor.rgb, alpha);\n  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 normal = getNormal();\n\n  vec3 dir = vLDir;\n  float cos = max(dot(dir, normal), 0.0);// 计算入射角余弦值\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(normal, light) * directionalLight.w;\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n  color = vec4(diffuse + ambient, color.a);\n  \n  FragColor.rgb = color.rgb + shading;\n  FragColor.a = color.a;\n}',
				};
			function Ni(t) {
				return t.renderer.isWebgl2 ? Ti : Oi;
			}
			const Ri = {
					vertex:
						'precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec2 uv;\nattribute vec3 normal;\nattribute vec4 color;\n\nuniform mat3 normalMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vMPos;\nvarying vec4 vColor;\nvarying vec3 vLDir;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nvoid main() {\n  vUv = uv;\n  vNormal = normalize(normalMatrix * normal);\n  vMPos = (modelMatrix * vec4(position, 1.0)).xyz;\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  vLDir = dir;\n\n  vColor = color;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}',
					fragment:
						'#extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\nprecision highp int;\n\nuniform mat4 viewMatrix;\n\nuniform sampler2D tNormal;\nuniform float uNormalScale;\nuniform float uNormalUVScale;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vMPos;\n\nuniform vec4 directionalLight; //平行光\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvarying vec4 vColor;\nvarying vec3 vLDir;\n\nvec3 getNormal() {\n  vec3 pos_dx = dFdx(vMPos.xyz);\n  vec3 pos_dy = dFdy(vMPos.xyz);\n  vec2 tex_dx = dFdx(vUv);\n  vec2 tex_dy = dFdy(vUv);\n\n  vec3 t = normalize(pos_dx * tex_dy.t - pos_dy * tex_dx.t);\n  vec3 b = normalize(-pos_dx * tex_dy.s + pos_dy * tex_dx.s);\n  mat3 tbn = mat3(t, b, normalize(vNormal));\n\n  vec3 n = texture2D(tNormal, vUv * uNormalUVScale).rgb * 2.0 - 1.0;\n  n.xy *= uNormalScale;\n  vec3 normal = normalize(tbn * n);\n\n  // Get world normal from view normal\n  return normalize((vec4(normal, 0.0) * viewMatrix).xyz);\n}\n\nvoid main() {\n  vec4 color = vColor;\n\n  vec3 normal = getNormal();\n  \n  vec3 dir = vLDir;\n  float cos = max(dot(dir, normal), 0.0);// 计算入射角余弦值\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(normal, light) * directionalLight.w;\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n  color = vec4(diffuse + ambient, color.a);\n  \n  gl_FragColor.rgb = color.rgb + shading;\n  gl_FragColor.a = color.a;\n}',
				},
				Fi = {
					vertex:
						'#version 300 es\nprecision highp float;\nprecision highp int;\n\nin vec3 position;\nin vec2 uv;\nin vec3 normal;\nin vec4 color;\n\nuniform mat3 normalMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nout vec2 vUv;\nout vec3 vNormal;\nout vec3 vMPos;\nout float fCos;\nout vec4 vColor;\nout vec3 vLDir;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nvoid main() {\n  vUv = uv;\n  vNormal = normalize(normalMatrix * normal);\n  vMPos = (modelMatrix * vec4(position, 1.0)).xyz;\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  vLDir = dir;\n\n  vColor = color;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}',
					fragment:
						'#version 300 es\nprecision highp float;\nprecision highp int;\n\nuniform mat4 viewMatrix;\n\nuniform sampler2D tNormal;\nuniform float uNormalScale;\nuniform float uNormalUVScale;\n\nin vec2 vUv;\nin vec3 vNormal;\nin vec3 vMPos;\nin vec4 vColor;\nin vec3 vLDir;\n\nuniform vec4 directionalLight; //平行光\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nout vec4 FragColor;\n\nvec3 getNormal() {\n  vec3 pos_dx = dFdx(vMPos.xyz);\n  vec3 pos_dy = dFdy(vMPos.xyz);\n  vec2 tex_dx = dFdx(vUv);\n  vec2 tex_dy = dFdy(vUv);\n\n  vec3 t = normalize(pos_dx * tex_dy.t - pos_dy * tex_dx.t);\n  vec3 b = normalize(-pos_dx * tex_dy.s + pos_dy * tex_dx.s);\n  mat3 tbn = mat3(t, b, normalize(vNormal));\n\n  vec3 n = texture(tNormal, vUv * uNormalUVScale).rgb * 2.0 - 1.0;\n  n.xy *= uNormalScale;\n  vec3 normal = normalize(tbn * n);\n\n  // Get world normal from view normal\n  return normalize((vec4(normal, 0.0) * viewMatrix).xyz);\n}\n\nvoid main() {\n  vec4 color = vColor;\n\n  vec3 normal = getNormal();\n\n  vec3 dir = vLDir;\n  float cos = max(dot(dir, normal), 0.0);// 计算入射角余弦值\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(normal, light) * directionalLight.w;\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n  color = vec4(diffuse + ambient, color.a);\n  \n  FragColor.rgb = color.rgb + shading;\n  FragColor.a = color.a;\n}',
				};
			function zi(t) {
				return t.renderer.isWebgl2 ? Fi : Ri;
			}
			r.d(e, 'Layer3d', function () {
				return hr;
			}),
				r.d(e, 'Sphere', function () {
					return Pr;
				}),
				r.d(e, 'Plane', function () {
					return $r;
				}),
				r.d(e, 'Polyline3d', function () {
					return ti;
				}),
				r.d(e, 'Camera', function () {
					return we;
				}),
				r.d(e, 'Cube', function () {
					return zr;
				}),
				r.d(e, 'Cylinder', function () {
					return si;
				}),
				r.d(e, 'Mesh3d', function () {
					return Ie;
				}),
				r.d(e, 'Skin', function () {
					return Ar;
				}),
				r.d(e, 'Group3d', function () {
					return ge;
				}),
				r.d(e, 'RenderTarget', function () {
					return ui;
				}),
				r.d(e, 'Shadow', function () {
					return Qt;
				}),
				r.d(e, 'TextureLoader', function () {
					return yi;
				}),
				r.d(e, 'Geometry', function () {
					return Ae;
				}),
				r.d(e, 'Curve', function () {
					return qr;
				}),
				r.d(e, 'shaders', function () {
					return i;
				}),
				r.d(e, 'Vec2', function () {
					return l;
				}),
				r.d(e, 'Vec3', function () {
					return x;
				}),
				r.d(e, 'Vec4', function () {
					return A;
				}),
				r.d(e, 'Mat3', function () {
					return C;
				}),
				r.d(e, 'Mat4', function () {
					return T;
				}),
				r.d(e, 'Quat', function () {
					return D;
				}),
				r.d(e, 'Euler', function () {
					return B;
				}),
				r.d(e, 'GPGPU', function () {
					return at;
				}),
				r.d(e, 'Raycast', function () {
					return gt;
				}),
				r.d(e, 'FrameBuffer', function () {
					return tt;
				}),
				(pt.Scene.prototype.layer3d = function (t = 'default3d', e = {}) {
					const { displayRatio: r } = this.options;
					(e = Object.assign({ dpr: r }, this.options, e)).id = t;
					const i = this.orderedChildren;
					for (let e = 0; e < i.length; e++) if (i[e].id === t) return i[e];
					const n = new hr(e);
					return this.appendChild(n), n;
				});
		},
	]);
});

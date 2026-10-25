import { i as e, t } from "./__vite-browser-external-C_tnBdFj.mjs";
// node_modules/rolldown/dist/shared/binding-BMtuZhvP.mjs
var n = /* @__PURE__ */ e(t(), 1), r = Object.create, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, s = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, l = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), u = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var s = o(t), l = 0, u = s.length, d; l < u; l++) d = s[l], !c.call(e, d) && d !== n && i(e, d, {
		get: ((e) => t[e]).bind(null, d),
		enumerable: !(r = a(t, d)) || r.enumerable
	});
	return e;
}, d = (e, t, n) => (n = e == null ? {} : r(s(e)), u(t || !e || !e.__esModule || !c.call(e, "default") ? i(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), f = /* @__PURE__ */ (0, n.createRequire)(import.meta.url), p = /* @__PURE__ */ l(((e, t) => {
	let n = f("node:fs"), r = f("node:child_process"), i = JSON.parse(n.readFileSync(f.resolve("rolldown/package.json"), "utf-8")).version, a = `/tmp/rolldown-${i}`, o = `${a}/node_modules/@rolldown/binding-wasm32-wasi/rolldown-binding.wasi.cjs`;
	if (!n.existsSync(o)) {
		let e = `@rolldown/binding-wasm32-wasi@${i}`;
		n.rmSync(a, {
			recursive: !0,
			force: !0
		}), n.mkdirSync(a, { recursive: !0 }), console.log(`[rolldown] Downloading ${e} on WebContainer...`), r.execFileSync("pnpm", ["i", e], {
			cwd: a,
			stdio: "inherit"
		});
	}
	t.exports = f(o);
})), m = /* @__PURE__ */ l(((e, t) => {
	let { readFileSync: n } = f("fs"), r = null, i = "native", a = [], o = () => {
		let e = !1;
		return process.platform === "linux" && (e = c(), e === null && (e = l()), e === null && (e = u())), e;
	}, s = (e) => e.includes("libc.musl-") || e.includes("ld-musl-"), c = () => {
		try {
			return n("/usr/bin/ldd", "utf-8").includes("musl");
		} catch {
			return null;
		}
	}, l = () => {
		let e = null;
		return process.report && typeof process.report.getReport == "function" && (process.report.excludeNetwork = !0, e = process.report.getReport()), e ? e.header && e.header.glibcVersionRuntime ? !1 : !!(Array.isArray(e.sharedObjects) && e.sharedObjects.some(s)) : null;
	}, u = () => {
		try {
			return f("child_process").execSync("ldd --version", { encoding: "utf8" }).includes("musl");
		} catch {
			return !1;
		}
	};
	function d() {
		if (process.env.NAPI_RS_NATIVE_LIBRARY_PATH) try {
			let e = f(process.env.NAPI_RS_NATIVE_LIBRARY_PATH);
			return i = e && typeof e.__napiBindingTarget == "string" ? e.__napiBindingTarget : "native", e;
		} catch (e) {
			a.push(e);
		}
		else if (process.platform === "android") {
			if (process.arch === "arm64") {
				try {
					return f("./rolldown-binding.android-arm64.node");
				} catch (e) {
					a.push(e);
				}
				try {
					let e = f("@rolldown/binding-android-arm64"), t = f("@rolldown/binding-android-arm64/package.json").version;
					if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
					return e;
				} catch (e) {
					a.push(e);
				}
			} else if (process.arch === "arm") {
				try {
					return f("./rolldown-binding.android-arm-eabi.node");
				} catch (e) {
					a.push(e);
				}
				try {
					let e = f("@rolldown/binding-android-arm-eabi"), t = f("@rolldown/binding-android-arm-eabi/package.json").version;
					if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
					return e;
				} catch (e) {
					a.push(e);
				}
			} else a.push(/* @__PURE__ */ Error(`Unsupported architecture on Android ${process.arch}`));
		} else if (process.platform === "win32") {
			if (process.arch === "x64") {
				if (process.config && process.config.variables && process.config.variables.shlib_suffix === "dll.a" || process.config && process.config.variables && process.config.variables.node_target_type === "shared_library") {
					try {
						return f("./rolldown-binding.win32-x64-gnu.node");
					} catch (e) {
						a.push(e);
					}
					try {
						let e = f("@rolldown/binding-win32-x64-gnu"), t = f("@rolldown/binding-win32-x64-gnu/package.json").version;
						if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
						return e;
					} catch (e) {
						a.push(e);
					}
				} else {
					try {
						return f("./rolldown-binding.win32-x64-msvc.node");
					} catch (e) {
						a.push(e);
					}
					try {
						let e = f("@rolldown/binding-win32-x64-msvc"), t = f("@rolldown/binding-win32-x64-msvc/package.json").version;
						if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
						return e;
					} catch (e) {
						a.push(e);
					}
				}
			} else if (process.arch === "ia32") {
				try {
					return f("./rolldown-binding.win32-ia32-msvc.node");
				} catch (e) {
					a.push(e);
				}
				try {
					let e = f("@rolldown/binding-win32-ia32-msvc"), t = f("@rolldown/binding-win32-ia32-msvc/package.json").version;
					if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
					return e;
				} catch (e) {
					a.push(e);
				}
			} else if (process.arch === "arm64") {
				try {
					return f("./rolldown-binding.win32-arm64-msvc.node");
				} catch (e) {
					a.push(e);
				}
				try {
					let e = f("@rolldown/binding-win32-arm64-msvc"), t = f("@rolldown/binding-win32-arm64-msvc/package.json").version;
					if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
					return e;
				} catch (e) {
					a.push(e);
				}
			} else a.push(/* @__PURE__ */ Error(`Unsupported architecture on Windows: ${process.arch}`));
		} else if (process.platform === "darwin") {
			try {
				return f("./rolldown-binding.darwin-universal.node");
			} catch (e) {
				a.push(e);
			}
			try {
				let e = f("@rolldown/binding-darwin-universal"), t = f("@rolldown/binding-darwin-universal/package.json").version;
				if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
				return e;
			} catch (e) {
				a.push(e);
			}
			if (process.arch === "x64") {
				try {
					return f("./rolldown-binding.darwin-x64.node");
				} catch (e) {
					a.push(e);
				}
				try {
					let e = f("@rolldown/binding-darwin-x64"), t = f("@rolldown/binding-darwin-x64/package.json").version;
					if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
					return e;
				} catch (e) {
					a.push(e);
				}
			} else if (process.arch === "arm64") {
				try {
					return f("./rolldown-binding.darwin-arm64.node");
				} catch (e) {
					a.push(e);
				}
				try {
					let e = f("@rolldown/binding-darwin-arm64"), t = f("@rolldown/binding-darwin-arm64/package.json").version;
					if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
					return e;
				} catch (e) {
					a.push(e);
				}
			} else a.push(/* @__PURE__ */ Error(`Unsupported architecture on macOS: ${process.arch}`));
		} else if (process.platform === "freebsd") {
			if (process.arch === "x64") {
				try {
					return f("./rolldown-binding.freebsd-x64.node");
				} catch (e) {
					a.push(e);
				}
				try {
					let e = f("@rolldown/binding-freebsd-x64"), t = f("@rolldown/binding-freebsd-x64/package.json").version;
					if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
					return e;
				} catch (e) {
					a.push(e);
				}
			} else if (process.arch === "arm64") {
				try {
					return f("./rolldown-binding.freebsd-arm64.node");
				} catch (e) {
					a.push(e);
				}
				try {
					let e = f("@rolldown/binding-freebsd-arm64"), t = f("@rolldown/binding-freebsd-arm64/package.json").version;
					if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
					return e;
				} catch (e) {
					a.push(e);
				}
			} else a.push(/* @__PURE__ */ Error(`Unsupported architecture on FreeBSD: ${process.arch}`));
		} else if (process.platform === "linux") {
			if (process.arch === "x64") {
				if (o()) {
					try {
						return f("./rolldown-binding.linux-x64-musl.node");
					} catch (e) {
						a.push(e);
					}
					try {
						let e = f("@rolldown/binding-linux-x64-musl"), t = f("@rolldown/binding-linux-x64-musl/package.json").version;
						if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
						return e;
					} catch (e) {
						a.push(e);
					}
				} else {
					try {
						return f("../rolldown-binding.linux-x64-gnu.node");
					} catch (e) {
						a.push(e);
					}
					try {
						let e = f("@rolldown/binding-linux-x64-gnu"), t = f("@rolldown/binding-linux-x64-gnu/package.json").version;
						if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
						return e;
					} catch (e) {
						a.push(e);
					}
				}
			} else if (process.arch === "arm64") {
				if (o()) {
					try {
						return f("./rolldown-binding.linux-arm64-musl.node");
					} catch (e) {
						a.push(e);
					}
					try {
						let e = f("@rolldown/binding-linux-arm64-musl"), t = f("@rolldown/binding-linux-arm64-musl/package.json").version;
						if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
						return e;
					} catch (e) {
						a.push(e);
					}
				} else {
					try {
						return f("./rolldown-binding.linux-arm64-gnu.node");
					} catch (e) {
						a.push(e);
					}
					try {
						let e = f("@rolldown/binding-linux-arm64-gnu"), t = f("@rolldown/binding-linux-arm64-gnu/package.json").version;
						if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
						return e;
					} catch (e) {
						a.push(e);
					}
				}
			} else if (process.arch === "arm") {
				if (o()) {
					try {
						return f("./rolldown-binding.linux-arm-musleabihf.node");
					} catch (e) {
						a.push(e);
					}
					try {
						let e = f("@rolldown/binding-linux-arm-musleabihf"), t = f("@rolldown/binding-linux-arm-musleabihf/package.json").version;
						if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
						return e;
					} catch (e) {
						a.push(e);
					}
				} else {
					try {
						return f("./rolldown-binding.linux-arm-gnueabihf.node");
					} catch (e) {
						a.push(e);
					}
					try {
						let e = f("@rolldown/binding-linux-arm-gnueabihf"), t = f("@rolldown/binding-linux-arm-gnueabihf/package.json").version;
						if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
						return e;
					} catch (e) {
						a.push(e);
					}
				}
			} else if (process.arch === "loong64") {
				if (o()) {
					try {
						return f("./rolldown-binding.linux-loong64-musl.node");
					} catch (e) {
						a.push(e);
					}
					try {
						let e = f("@rolldown/binding-linux-loong64-musl"), t = f("@rolldown/binding-linux-loong64-musl/package.json").version;
						if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
						return e;
					} catch (e) {
						a.push(e);
					}
				} else {
					try {
						return f("./rolldown-binding.linux-loong64-gnu.node");
					} catch (e) {
						a.push(e);
					}
					try {
						let e = f("@rolldown/binding-linux-loong64-gnu"), t = f("@rolldown/binding-linux-loong64-gnu/package.json").version;
						if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
						return e;
					} catch (e) {
						a.push(e);
					}
				}
			} else if (process.arch === "riscv64") {
				if (o()) {
					try {
						return f("./rolldown-binding.linux-riscv64-musl.node");
					} catch (e) {
						a.push(e);
					}
					try {
						let e = f("@rolldown/binding-linux-riscv64-musl"), t = f("@rolldown/binding-linux-riscv64-musl/package.json").version;
						if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
						return e;
					} catch (e) {
						a.push(e);
					}
				} else {
					try {
						return f("./rolldown-binding.linux-riscv64-gnu.node");
					} catch (e) {
						a.push(e);
					}
					try {
						let e = f("@rolldown/binding-linux-riscv64-gnu"), t = f("@rolldown/binding-linux-riscv64-gnu/package.json").version;
						if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
						return e;
					} catch (e) {
						a.push(e);
					}
				}
			} else if (process.arch === "ppc64") {
				try {
					return f("./rolldown-binding.linux-ppc64-gnu.node");
				} catch (e) {
					a.push(e);
				}
				try {
					let e = f("@rolldown/binding-linux-ppc64-gnu"), t = f("@rolldown/binding-linux-ppc64-gnu/package.json").version;
					if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
					return e;
				} catch (e) {
					a.push(e);
				}
			} else if (process.arch === "s390x") {
				try {
					return f("./rolldown-binding.linux-s390x-gnu.node");
				} catch (e) {
					a.push(e);
				}
				try {
					let e = f("@rolldown/binding-linux-s390x-gnu"), t = f("@rolldown/binding-linux-s390x-gnu/package.json").version;
					if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
					return e;
				} catch (e) {
					a.push(e);
				}
			} else a.push(/* @__PURE__ */ Error(`Unsupported architecture on Linux: ${process.arch}`));
		} else if (process.platform === "openharmony") {
			if (process.arch === "arm64") {
				try {
					return f("./rolldown-binding.openharmony-arm64.node");
				} catch (e) {
					a.push(e);
				}
				try {
					let e = f("@rolldown/binding-openharmony-arm64"), t = f("@rolldown/binding-openharmony-arm64/package.json").version;
					if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
					return e;
				} catch (e) {
					a.push(e);
				}
			} else if (process.arch === "x64") {
				try {
					return f("./rolldown-binding.openharmony-x64.node");
				} catch (e) {
					a.push(e);
				}
				try {
					let e = f("@rolldown/binding-openharmony-x64"), t = f("@rolldown/binding-openharmony-x64/package.json").version;
					if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
					return e;
				} catch (e) {
					a.push(e);
				}
			} else if (process.arch === "arm") {
				try {
					return f("./rolldown-binding.openharmony-arm.node");
				} catch (e) {
					a.push(e);
				}
				try {
					let e = f("@rolldown/binding-openharmony-arm"), t = f("@rolldown/binding-openharmony-arm/package.json").version;
					if (t !== "1.2.15" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw Error(`Native binding package version mismatch, expected 1.2.15 but got ${t}. You can reinstall dependencies to fix this issue.`);
					return e;
				} catch (e) {
					a.push(e);
				}
			} else a.push(/* @__PURE__ */ Error(`Unsupported architecture on OpenHarmony: ${process.arch}`));
		} else a.push(/* @__PURE__ */ Error(`Unsupported OS: ${process.platform}, architecture: ${process.arch}`));
	}
	function m(e) {
		return e.reduce((e, t) => {
			let n;
			try {
				n = t && typeof t.message == "string" ? t.message : String(t);
			} catch {
				n = "Unknown error";
			}
			let r = Error(n);
			return r.cause = e, r;
		}, null);
	}
	let h = ["wasm32-wasi"], g = process.env.NAPI_RS_WASI_FLAVOR, _ = typeof g == "string" && g.length > 0;
	if (_ && h.indexOf(g) === -1) throw Error("Unsupported WASI flavor \"" + g + "\". Available flavors: " + h.join(", "));
	let v = process.env.NAPI_RS_FORCE_WASI === "error", y = process.env.NAPI_RS_FORCE_WASI === "true" || v || _;
	if (y || (r = d()), !r || y) {
		let e = null, t = !1, n = [], o = (e, t, n) => {
			try {
				f.resolve(e);
			} catch (n) {
				if (!n || n.code !== "MODULE_NOT_FOUND") throw n;
				if (t) {
					try {
						f.resolve(e + "/package.json");
					} catch (e) {
						if (e && e.code === "MODULE_NOT_FOUND") return n;
						throw n;
					}
					throw n;
				}
				return n;
			}
			if (n) {
				let e = null;
				for (let t = 0; t < n.length; t++) try {
					return f.resolve(n[t]), null;
				} catch (t) {
					if (!t || t.code !== "MODULE_NOT_FOUND") throw t;
					e = t;
				}
				return e;
			}
			return null;
		};
		if (!t && (!_ || g === "wasm32-wasi")) {
			let s = null, c = !1;
			try {
				s = o("./rolldown-binding.wasi.cjs", !1, ["./rolldown-binding.wasm32-wasi.debug.wasm", "./rolldown-binding.wasm32-wasi.wasm"]), c = s !== null, c || (e = f("../rolldown-binding.wasi.cjs"), r = e, i = "wasm32-wasi", t = !0);
			} catch (e) {
				s = e, c = !0;
			}
			c && (n.push(s), a.push(s));
		}
		if (!t && (!_ || g === "wasm32-wasi")) {
			let s = null, c = !1;
			try {
				if (s = o("@rolldown/binding-wasm32-wasi", !0, void 0), c = s !== null, !c) {
					if (process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
						let e = f("@rolldown/binding-wasm32-wasi/package.json").version;
						if (e !== "1.2.15") throw Error(`WASI binding package version mismatch, expected 1.2.15 but got ${e}. You can reinstall dependencies to fix this issue.`);
					}
					e = f("@rolldown/binding-wasm32-wasi"), r = e, i = "wasm32-wasi", t = !0;
				}
			} catch (e) {
				s = e, c = !0;
			}
			c && (n.push(s), a.push(s));
		}
		if (!t && y && !v && !_ && (r = d()), (v || _) && !t) {
			let e = /* @__PURE__ */ Error(_ ? "WASI binding for flavor \"" + g + "\" not found" : "WASI binding not found and NAPI_RS_FORCE_WASI is set to error");
			throw e.cause = m(n), e;
		}
	}
	if (!r && globalThis.process?.versions?.webcontainer) try {
		r = p(), i = "wasm32-wasi";
	} catch (e) {
		a.push(e);
	}
	if (!r) {
		if (a.length > 0) {
			let e = /* @__PURE__ */ Error("Cannot find native binding. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.");
			throw e.cause = m(a), e;
		}
		throw Error("Failed to load native binding");
	}
	function b(e, t) {
		if (Object.prototype.hasOwnProperty.call(e, "__napiBindingTarget")) {
			if (e.__napiBindingTarget === t) return t;
			let n = /* @__PURE__ */ Error("`__napiBindingTarget` is reserved by the generated binding loader, but the loaded binding already exports it. Rename the export, e.g. #[napi(js_name = \"...\")].");
			throw n.code = "ERR_NAPI_BINDING_TARGET_CONFLICT", n;
		}
		if (!Object.isExtensible(e)) return t;
		try {
			Object.defineProperty(e, "__napiBindingTarget", {
				configurable: !0,
				enumerable: !0,
				value: t,
				writable: !0
			});
		} catch {}
		return t;
	}
	t.exports.__napiBindingTarget = b(r, i), t.exports = r, t.exports.LegalCommentsMode = r.LegalCommentsMode, t.exports.minify = r.minify, t.exports.minifySync = r.minifySync, t.exports.Severity = r.Severity, t.exports.ParseResult = r.ParseResult, t.exports.ExportExportNameKind = r.ExportExportNameKind, t.exports.ExportImportNameKind = r.ExportImportNameKind, t.exports.ExportLocalNameKind = r.ExportLocalNameKind, t.exports.ImportNameKind = r.ImportNameKind, t.exports.parse = r.parse, t.exports.parseSync = r.parseSync, t.exports.rawTransferSupported = r.rawTransferSupported, t.exports.ResolverFactory = r.ResolverFactory, t.exports.EnforceExtension = r.EnforceExtension, t.exports.ModuleType = r.ModuleType, t.exports.sync = r.sync, t.exports.HelperMode = r.HelperMode, t.exports.isolatedDeclaration = r.isolatedDeclaration, t.exports.isolatedDeclarationSync = r.isolatedDeclarationSync, t.exports.moduleRunnerTransform = r.moduleRunnerTransform, t.exports.moduleRunnerTransformSync = r.moduleRunnerTransformSync, t.exports.transform = r.transform, t.exports.transformSync = r.transformSync, t.exports.BindingBundleEndEventData = r.BindingBundleEndEventData, t.exports.BindingBundleErrorEventData = r.BindingBundleErrorEventData, t.exports.BindingBundler = r.BindingBundler, t.exports.BindingCallableBuiltinPlugin = r.BindingCallableBuiltinPlugin, t.exports.BindingChunkingContext = r.BindingChunkingContext, t.exports.BindingDecodedMap = r.BindingDecodedMap, t.exports.BindingDevEngine = r.BindingDevEngine, t.exports.BindingLoadPluginContext = r.BindingLoadPluginContext, t.exports.BindingMagicString = r.BindingMagicString, t.exports.BindingModuleInfo = r.BindingModuleInfo, t.exports.BindingNormalizedOptions = r.BindingNormalizedOptions, t.exports.BindingOutputAsset = r.BindingOutputAsset, t.exports.BindingOutputChunk = r.BindingOutputChunk, t.exports.BindingPluginContext = r.BindingPluginContext, t.exports.BindingRenderedChunk = r.BindingRenderedChunk, t.exports.BindingRenderedChunkMeta = r.BindingRenderedChunkMeta, t.exports.BindingRenderedModule = r.BindingRenderedModule, t.exports.BindingSourceMap = r.BindingSourceMap, t.exports.BindingTransformPluginContext = r.BindingTransformPluginContext, t.exports.BindingWatcher = r.BindingWatcher, t.exports.BindingWatcherBundler = r.BindingWatcherBundler, t.exports.BindingWatcherChangeData = r.BindingWatcherChangeData, t.exports.BindingWatcherEvent = r.BindingWatcherEvent, t.exports.ParallelJsPluginRegistry = r.ParallelJsPluginRegistry, t.exports.TraceSubscriberGuard = r.TraceSubscriberGuard, t.exports.TsconfigCache = r.TsconfigCache, t.exports.BindingAttachDebugInfo = r.BindingAttachDebugInfo, t.exports.BindingBuiltinPluginName = r.BindingBuiltinPluginName, t.exports.BindingChunkModuleOrderBy = r.BindingChunkModuleOrderBy, t.exports.BindingErrorStage = r.BindingErrorStage, t.exports.BindingLogLevel = r.BindingLogLevel, t.exports.BindingPluginOrder = r.BindingPluginOrder, t.exports.BindingPropertyReadSideEffects = r.BindingPropertyReadSideEffects, t.exports.BindingPropertyWriteSideEffects = r.BindingPropertyWriteSideEffects, t.exports.BindingRebuildStrategy = r.BindingRebuildStrategy, t.exports.collapseSourcemaps = r.collapseSourcemaps, t.exports.enhancedTransform = r.enhancedTransform, t.exports.enhancedTransformSync = r.enhancedTransformSync, t.exports.FilterTokenKind = r.FilterTokenKind, t.exports.getNativeMemoryStats = r.getNativeMemoryStats, t.exports.initTraceSubscriber = r.initTraceSubscriber, t.exports.registerPlugins = r.registerPlugins, t.exports.resetNativeMemoryStats = r.resetNativeMemoryStats, t.exports.resolveTsconfig = r.resolveTsconfig, t.exports.shutdownAsyncRuntime = r.shutdownAsyncRuntime, t.exports.startAsyncRuntime = r.startAsyncRuntime;
}));
// node_modules/rolldown/dist/shared/error-D0SD8_tL.mjs
m(), m(), m();
// node_modules/rolldown/dist/shared/resolve-tsconfig-BeEfxbU7.mjs
var h = /* @__PURE__ */ d(m(), 1);
typeof process == "object" && process.versions?.pnp, typeof process == "object" && process.versions?.pnp, h.TsconfigCache;
// node_modules/rolldown/dist/utils-index.mjs
var g = [], _ = [], v = [];
for (let e = 27; e !== 0; e--) g.push(0);
for (let e = 138; e !== 0; e--) _.push(0), v.push(0);
g.length = 0, _.length = 0, v.length = 0;
// node_modules/rolldown/dist/shared/bindingify-input-options-BMZwyvQ7.mjs
var y = /* @__PURE__ */ d(m(), 1), b = Symbol("__lazy_fields__"), x = class {
	constructor() {
		S(this);
	}
};
function S(e) {
	let t = e.constructor[b];
	if (t) for (let [n, r] of t.entries()) {
		let t, i = !1;
		Object.defineProperty(e, n, {
			get() {
				return i ||= (t = r.call(this), !0), t;
			},
			enumerable: !0,
			configurable: !0
		});
	}
}
function C(e) {
	let t = e.constructor[b];
	return t ? new Set(t.keys()) : /* @__PURE__ */ new Set();
}
function w(e, t, n) {
	e.constructor[b] || (e.constructor[b] = /* @__PURE__ */ new Map());
	let r = n.get;
	return e.constructor[b].set(t, r), {
		enumerable: !1,
		configurable: !0
	};
}
function T(e) {
	return e.inner;
}
function E(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
var D = class extends x {
	bindingAsset;
	type = "asset";
	constructor(e) {
		super(), this.bindingAsset = e;
	}
	get fileName() {
		return this.bindingAsset.getFileName();
	}
	get originalFileName() {
		return this.bindingAsset.getOriginalFileName() || null;
	}
	get originalFileNames() {
		return this.bindingAsset.getOriginalFileNames();
	}
	get name() {
		return this.bindingAsset.getName() ?? void 0;
	}
	get names() {
		return this.bindingAsset.getNames();
	}
	get source() {
		return T(this.bindingAsset.getSource());
	}
	__rolldown_external_memory_handle__(e) {
		return e && this.#e(), this.bindingAsset.dropInner();
	}
	#e() {
		for (let e of C(this)) this[e];
	}
};
E([w], D.prototype, "fileName", null), E([w], D.prototype, "originalFileName", null), E([w], D.prototype, "originalFileNames", null), E([w], D.prototype, "name", null), E([w], D.prototype, "names", null), E([w], D.prototype, "source", null);
function O(e) {
	return {
		get code() {
			return e.code;
		},
		get renderedLength() {
			return e.code?.length || 0;
		},
		get renderedExports() {
			return e.renderedExports;
		}
	};
}
function k(e) {
	let t = {};
	for (let n = 0; n < e.values.length; n++) {
		let r = e.keys[n], i = e.values[n];
		t[r] = O(i);
	}
	return t;
}
var A = class extends x {
	bindingChunk;
	type = "chunk";
	constructor(e) {
		super(), this.bindingChunk = e;
	}
	get fileName() {
		return this.bindingChunk.getFileName();
	}
	get name() {
		return this.bindingChunk.getName();
	}
	get exports() {
		return this.bindingChunk.getExports();
	}
	get isEntry() {
		return this.bindingChunk.getIsEntry();
	}
	get facadeModuleId() {
		return this.bindingChunk.getFacadeModuleId() || null;
	}
	get isDynamicEntry() {
		return this.bindingChunk.getIsDynamicEntry();
	}
	get sourcemapFileName() {
		return this.bindingChunk.getSourcemapFileName() || null;
	}
	get preliminaryFileName() {
		return this.bindingChunk.getPreliminaryFileName();
	}
	get code() {
		return this.bindingChunk.getCode();
	}
	get modules() {
		return k(this.bindingChunk.getModules());
	}
	get imports() {
		return this.bindingChunk.getImports();
	}
	get dynamicImports() {
		return this.bindingChunk.getDynamicImports();
	}
	get moduleIds() {
		return this.bindingChunk.getModuleIds();
	}
	get map() {
		let e = this.bindingChunk.getMap();
		return e ? ee(e) : null;
	}
	__rolldown_external_memory_handle__(e) {
		return e && this.#e(), this.bindingChunk.dropInner();
	}
	#e() {
		for (let e of C(this)) this[e];
	}
};
E([w], A.prototype, "fileName", null), E([w], A.prototype, "name", null), E([w], A.prototype, "exports", null), E([w], A.prototype, "isEntry", null), E([w], A.prototype, "facadeModuleId", null), E([w], A.prototype, "isDynamicEntry", null), E([w], A.prototype, "sourcemapFileName", null), E([w], A.prototype, "preliminaryFileName", null), E([w], A.prototype, "code", null), E([w], A.prototype, "modules", null), E([w], A.prototype, "imports", null), E([w], A.prototype, "dynamicImports", null), E([w], A.prototype, "moduleIds", null), E([w], A.prototype, "map", null);
function ee(e) {
	let t = {
		...JSON.parse(e),
		toString() {
			return JSON.stringify(t);
		},
		toUrl() {
			return `data:application/json;charset=utf-8;base64,${Buffer.from(t.toString(), "utf-8").toString("base64")}`;
		}
	};
	return Object.defineProperty(t, "x_google_ignoreList", {
		get: () => t.ignoreList,
		set: (e) => {
			t.ignoreList = e;
		}
	}), t;
}
function j(e) {
	return new A(e);
}
function M(e) {
	return new D(e);
}
function N(e) {
	let { chunks: t, assets: n } = e, r = { output: [...t.map((e) => j(e)), ...n.map((e) => M(e))] };
	return e.mangleCache !== void 0 && (r.mangleCache = e.mangleCache), r;
}
var te = class extends x {
	onLog;
	inputPlugins;
	inner;
	constructor(e, t, n) {
		super(), this.onLog = t, this.inputPlugins = n, this.inner = e;
	}
	get shimMissingExports() {
		return this.inner.shimMissingExports;
	}
	get input() {
		return this.inner.input;
	}
	get cwd() {
		return this.inner.cwd;
	}
	get platform() {
		return this.inner.platform;
	}
	get context() {
		return this.inner.context;
	}
	get plugins() {
		return this.inputPlugins;
	}
};
E([w], te.prototype, "shimMissingExports", null), E([w], te.prototype, "input", null), E([w], te.prototype, "cwd", null), E([w], te.prototype, "platform", null), E([w], te.prototype, "context", null);
var P = class extends x {
	inner;
	outputOptions;
	normalizedOutputPlugins;
	constructor(e, t, n) {
		super(), this.inner = e, this.outputOptions = t, this.normalizedOutputPlugins = n;
	}
	get dir() {
		return this.inner.dir ?? void 0;
	}
	get charset() {
		return this.inner.charset;
	}
	get entryFileNames() {
		return this.inner.entryFilenames || this.outputOptions.entryFileNames;
	}
	get chunkFileNames() {
		return this.inner.chunkFilenames || this.outputOptions.chunkFileNames;
	}
	get assetFileNames() {
		return this.inner.assetFilenames || this.outputOptions.assetFileNames;
	}
	get format() {
		return this.inner.format;
	}
	get exports() {
		return this.inner.exports;
	}
	get sourcemap() {
		return this.inner.sourcemap;
	}
	get sourcemapFileNames() {
		return this.inner.sourcemapFilenames || this.outputOptions.sourcemapFileNames;
	}
	get sourcemapBaseUrl() {
		return this.inner.sourcemapBaseUrl ?? void 0;
	}
	get shimMissingExports() {
		return this.inner.shimMissingExports;
	}
	get name() {
		return this.inner.name ?? void 0;
	}
	get file() {
		return this.inner.file ?? void 0;
	}
	get codeSplitting() {
		return this.inner.codeSplitting;
	}
	get inlineDynamicImports() {
		return !this.inner.codeSplitting;
	}
	get dynamicImportInCjs() {
		return this.inner.dynamicImportInCjs;
	}
	get externalLiveBindings() {
		return this.inner.externalLiveBindings;
	}
	get banner() {
		return ne(this.outputOptions.banner);
	}
	get footer() {
		return ne(this.outputOptions.footer);
	}
	get postBanner() {
		return ne(this.outputOptions.postBanner);
	}
	get postFooter() {
		return ne(this.outputOptions.postFooter);
	}
	get intro() {
		return ne(this.outputOptions.intro);
	}
	get outro() {
		return ne(this.outputOptions.outro);
	}
	get esModule() {
		return this.inner.esModule;
	}
	get extend() {
		return this.inner.extend;
	}
	get globals() {
		return this.inner.globals || this.outputOptions.globals;
	}
	get paths() {
		return this.outputOptions.paths;
	}
	get hashCharacters() {
		return this.inner.hashCharacters;
	}
	get sourcemapDebugIds() {
		return this.inner.sourcemapDebugIds;
	}
	get sourcemapExcludeSources() {
		return this.inner.sourcemapExcludeSources;
	}
	get sourcemapIgnoreList() {
		return this.outputOptions.sourcemapIgnoreList;
	}
	get sourcemapPathTransform() {
		return this.outputOptions.sourcemapPathTransform;
	}
	get minify() {
		let e = this.inner.minify;
		return typeof e == "object" && e && (delete e.codegen, delete e.module, delete e.sourcemap), e;
	}
	get legalComments() {
		return this.inner.legalComments;
	}
	get comments() {
		let e = this.inner.comments;
		return {
			legal: e.legal ?? !0,
			annotation: e.annotation ?? !0,
			jsdoc: e.jsdoc ?? !0
		};
	}
	get polyfillRequire() {
		return this.inner.polyfillRequire;
	}
	get plugins() {
		return this.normalizedOutputPlugins;
	}
	get preserveModules() {
		return this.inner.preserveModules;
	}
	get preserveModulesRoot() {
		return this.inner.preserveModulesRoot;
	}
	get virtualDirname() {
		return this.inner.virtualDirname;
	}
	get topLevelVar() {
		return this.inner.topLevelVar ?? !1;
	}
	get minifyInternalExports() {
		return this.inner.minifyInternalExports ?? !1;
	}
};
E([w], P.prototype, "dir", null), E([w], P.prototype, "charset", null), E([w], P.prototype, "entryFileNames", null), E([w], P.prototype, "chunkFileNames", null), E([w], P.prototype, "assetFileNames", null), E([w], P.prototype, "format", null), E([w], P.prototype, "exports", null), E([w], P.prototype, "sourcemap", null), E([w], P.prototype, "sourcemapFileNames", null), E([w], P.prototype, "sourcemapBaseUrl", null), E([w], P.prototype, "shimMissingExports", null), E([w], P.prototype, "name", null), E([w], P.prototype, "file", null), E([w], P.prototype, "codeSplitting", null), E([w], P.prototype, "inlineDynamicImports", null), E([w], P.prototype, "dynamicImportInCjs", null), E([w], P.prototype, "externalLiveBindings", null), E([w], P.prototype, "banner", null), E([w], P.prototype, "footer", null), E([w], P.prototype, "postBanner", null), E([w], P.prototype, "postFooter", null), E([w], P.prototype, "intro", null), E([w], P.prototype, "outro", null), E([w], P.prototype, "esModule", null), E([w], P.prototype, "extend", null), E([w], P.prototype, "globals", null), E([w], P.prototype, "paths", null), E([w], P.prototype, "hashCharacters", null), E([w], P.prototype, "sourcemapDebugIds", null), E([w], P.prototype, "sourcemapExcludeSources", null), E([w], P.prototype, "sourcemapIgnoreList", null), E([w], P.prototype, "sourcemapPathTransform", null), E([w], P.prototype, "minify", null), E([w], P.prototype, "legalComments", null), E([w], P.prototype, "comments", null), E([w], P.prototype, "polyfillRequire", null), E([w], P.prototype, "plugins", null), E([w], P.prototype, "preserveModules", null), E([w], P.prototype, "preserveModulesRoot", null), E([w], P.prototype, "virtualDirname", null), E([w], P.prototype, "topLevelVar", null), E([w], P.prototype, "minifyInternalExports", null);
function ne(e) {
	return typeof e == "function" ? e : () => e || "";
}
Object.defineProperty(y.BindingMagicString.prototype, "isRolldownMagicString", {
	value: !0,
	writable: !1,
	configurable: !1
});
function re(e, t) {
	if (typeof e != "string") throw TypeError(t);
}
var F = y.BindingMagicString.prototype.append, ie = y.BindingMagicString.prototype.prepend, ae = y.BindingMagicString.prototype.appendLeft, oe = y.BindingMagicString.prototype.appendRight, se = y.BindingMagicString.prototype.prependLeft, ce = y.BindingMagicString.prototype.prependRight, le = y.BindingMagicString.prototype.overwrite, ue = y.BindingMagicString.prototype.update;
y.BindingMagicString.prototype.append = function(e) {
	return re(e, "outro content must be a string"), F.call(this, e);
}, y.BindingMagicString.prototype.prepend = function(e) {
	return re(e, "outro content must be a string"), ie.call(this, e);
}, y.BindingMagicString.prototype.appendLeft = function(e, t) {
	return re(t, "inserted content must be a string"), ae.call(this, e, t);
}, y.BindingMagicString.prototype.appendRight = function(e, t) {
	return re(t, "inserted content must be a string"), oe.call(this, e, t);
}, y.BindingMagicString.prototype.prependLeft = function(e, t) {
	return re(t, "inserted content must be a string"), se.call(this, e, t);
}, y.BindingMagicString.prototype.prependRight = function(e, t) {
	return re(t, "inserted content must be a string"), ce.call(this, e, t);
}, y.BindingMagicString.prototype.overwrite = function(e, t, n, r) {
	return re(n, "replacement content must be a string"), le.call(this, e, t, n, r);
}, y.BindingMagicString.prototype.update = function(e, t, n, r) {
	return re(n, "replacement content must be a string"), ue.call(this, e, t, n, r);
};
var de = y.BindingMagicString.prototype.replace, fe = y.BindingMagicString.prototype.replaceAll;
y.BindingMagicString.prototype.replace = function(e, t) {
	if (typeof e == "string") return de.call(this, e, t);
	e.global && (e.lastIndex = 0);
	let n = this.replaceRegex(e, t);
	return e.global ? e.lastIndex = 0 : e.sticky && (e.lastIndex = n === -1 ? 0 : n), this;
}, y.BindingMagicString.prototype.replaceAll = function(e, t) {
	if (typeof e == "string") return fe.call(this, e, t);
	if (!e.global) throw TypeError("MagicString.prototype.replaceAll called with a non-global RegExp argument");
	return e.lastIndex = 0, this.replaceRegex(e, t), e.lastIndex = 0, this;
}, y.BindingMagicString, n.default.appendFile, n.default.copyFile, n.default.mkdir, n.default.mkdtemp, n.default.readdir, n.default.readFile, n.default.realpath, n.default.rename, n.default.rmdir, n.default.stat, n.default.lstat, n.default.unlink, n.default.writeFile;
// node_modules/rolldown/dist/shared/create-bundler-option-DzNR1xQS.mjs
var pe = [
	"options",
	"buildStart",
	"resolveId",
	"load",
	"transform",
	"moduleParsed",
	"buildEnd",
	"onLog",
	"resolveDynamicImport",
	"closeBundle",
	"closeWatcher",
	"watchChange"
], me = [
	"augmentChunkHash",
	"outputOptions",
	"renderChunk",
	"renderStart",
	"renderError",
	"writeBundle",
	"generateBundle",
	"resolveFileUrl"
], I = [
	...pe,
	...me,
	"footer",
	"banner",
	"intro",
	"outro"
];
I[0], I[0], I[1], I[1], I[2], I[2], I[3], I[3], I[4], I[4], I[5], I[5], I[6], I[6], I[7], I[7], I[8], I[8], I[9], I[9], I[10], I[10], I[11], I[11], I[12], I[12], I[13], I[13], I[14], I[14], I[15], I[15], I[16], I[16], I[17], I[17], I[18], I[18], I[19], I[19], I[20], I[20], I[21], I[21], I[22], I[22], I[23], I[23];
var he = {
	lang: void 0,
	message: void 0,
	abortEarly: void 0,
	abortPipeEarly: void 0
};
/* @__NO_SIDE_EFFECTS__ */
function ge(e) {
	return e ? {
		lang: e?.lang ?? void 0,
		message: e?.message,
		abortEarly: e?.abortEarly ?? void 0,
		abortPipeEarly: e?.abortPipeEarly ?? void 0
	} : he;
}
/* @__NO_SIDE_EFFECTS__ */
function _e(e) {
	let t = typeof e;
	return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function L(e, t, n, r, i) {
	let a = i && "input" in i ? i.input : n.value, o = i?.expected ?? e.expects ?? null, s = i?.received ?? /* @__PURE__ */ _e(a), c = {
		kind: e.kind,
		type: e.type,
		input: a,
		expected: o,
		received: s,
		message: `Invalid ${t}: ${o ? `Expected ${o} but r` : "R"}eceived ${s}`,
		requirement: e.requirement,
		path: i?.path,
		issues: i?.issues,
		lang: r.lang,
		abortEarly: r.abortEarly,
		abortPipeEarly: r.abortPipeEarly
	}, l = e.kind === "schema", u = i?.message ?? e.message ?? (e.reference, c.lang, void 0) ?? (l ? (c.lang, void 0) : null) ?? r.message ?? (c.lang, void 0);
	u !== void 0 && (c.message = typeof u == "function" ? u(c) : u), l && (n.typed = !1), n.issues ? n.issues.push(c) : n.issues = [c];
}
/* @__NO_SIDE_EFFECTS__ */
function ve(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
/* @__NO_SIDE_EFFECTS__ */
function ye(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t) && t !== "__proto__" && t !== "prototype" && t !== "constructor";
}
/* @__NO_SIDE_EFFECTS__ */
function be(e, t) {
	let n = [...new Set(e)];
	return n.length > 1 ? `(${n.join(` ${t} `)})` : n[0] ?? "never";
}
function R(e) {
	return e["~standard"] = {
		version: 1,
		vendor: "valibot",
		validate: (t) => e["~run"]({ value: t }, /* @__PURE__ */ ge())
	}, e;
}
var xe = class extends Error {
	constructor(e) {
		super(e[0].message), this.name = "ValiError", this.issues = e;
	}
};
/* @__NO_SIDE_EFFECTS__ */
function Se(e) {
	return {
		kind: "transformation",
		type: "args",
		reference: Se,
		async: !1,
		schema: e,
		"~run"(e, t) {
			let n = e.value;
			return e.value = (...e) => {
				let r = this.schema["~run"]({ value: e }, t);
				if (r.issues) throw new xe(r.issues);
				return n(...r.value);
			}, e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Ce() {
	return {
		kind: "transformation",
		type: "await",
		reference: Ce,
		async: !0,
		async "~run"(e) {
			return e.value = await e.value, e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function we(e, t) {
	return {
		kind: "validation",
		type: "check",
		reference: we,
		async: !1,
		expects: null,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && !this.requirement(e.value) && L(this, "input", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function z(e) {
	return {
		kind: "metadata",
		type: "description",
		reference: z,
		description: e
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Te(e) {
	return {
		kind: "transformation",
		type: "returns",
		reference: Te,
		async: !1,
		schema: e,
		"~run"(e, t) {
			let n = e.value;
			return e.value = (...e) => {
				let r = this.schema["~run"]({ value: n(...e) }, t);
				if (r.issues) throw new xe(r.issues);
				return r.value;
			}, e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Ee(e) {
	return {
		kind: "transformation",
		type: "returns",
		reference: Ee,
		async: !1,
		schema: e,
		"~run"(e, t) {
			let n = e.value;
			return e.value = async (...e) => {
				let r = await this.schema["~run"]({ value: await n(...e) }, t);
				if (r.issues) throw new xe(r.issues);
				return r.value;
			}, e;
		}
	};
}
var De = { abortEarly: !0 };
/* @__NO_SIDE_EFFECTS__ */
function Oe(e, t, n) {
	return typeof e.fallback == "function" ? e.fallback(t, n) : e.fallback;
}
/* @__NO_SIDE_EFFECTS__ */
function ke(e, t, n) {
	return typeof e.default == "function" ? e.default(t, n) : e.default;
}
/* @__NO_SIDE_EFFECTS__ */
function Ae(e, t) {
	return !e["~run"]({ value: t }, De).issues;
}
/* @__NO_SIDE_EFFECTS__ */
function je() {
	return R({
		kind: "schema",
		type: "any",
		reference: je,
		expects: "any",
		async: !1,
		"~run"(e) {
			return e.typed = !0, e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function B(e, t) {
	return R({
		kind: "schema",
		type: "array",
		reference: B,
		expects: "Array",
		async: !1,
		item: e,
		message: t,
		"~run"(e, t) {
			let n = e.value;
			if (Array.isArray(n)) {
				e.typed = !0, e.value = [];
				for (let r = 0; r < n.length; r++) {
					let i = n[r], a = this.item["~run"]({ value: i }, t);
					if (a.issues) {
						let o = {
							type: "array",
							origin: "value",
							input: n,
							key: r,
							value: i
						};
						for (let t of a.issues) t.path ? t.path.unshift(o) : t.path = [o], e.issues?.push(t);
						if (e.issues ||= a.issues, t.abortEarly) {
							e.typed = !1;
							break;
						}
					}
					a.typed || (e.typed = !1), e.value.push(a.value);
				}
			} else L(this, "type", e, t);
			return e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function V(e) {
	return R({
		kind: "schema",
		type: "boolean",
		reference: V,
		expects: "boolean",
		async: !1,
		message: e,
		"~run"(e, t) {
			return typeof e.value == "boolean" ? e.typed = !0 : L(this, "type", e, t), e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Me(e, t) {
	return R({
		kind: "schema",
		type: "custom",
		reference: Me,
		expects: "unknown",
		async: !1,
		check: e,
		message: t,
		"~run"(e, t) {
			return this.check(e.value) ? e.typed = !0 : L(this, "type", e, t), e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ne(e) {
	return R({
		kind: "schema",
		type: "function",
		reference: Ne,
		expects: "Function",
		async: !1,
		message: e,
		"~run"(e, t) {
			return typeof e.value == "function" ? e.typed = !0 : L(this, "type", e, t), e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Pe(e, t) {
	return R({
		kind: "schema",
		type: "instance",
		reference: Pe,
		expects: e.name,
		async: !1,
		class: e,
		message: t,
		"~run"(e, t) {
			return e.value instanceof this.class ? e.typed = !0 : L(this, "type", e, t), e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function H(e, t) {
	return R({
		kind: "schema",
		type: "literal",
		reference: H,
		expects: /* @__PURE__ */ _e(e),
		async: !1,
		literal: e,
		message: t,
		"~run"(e, t) {
			return /* @__PURE__ */ ve(e.value, this.literal) ? e.typed = !0 : L(this, "type", e, t), e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Fe(e) {
	return R({
		kind: "schema",
		type: "never",
		reference: Fe,
		expects: "never",
		async: !1,
		message: e,
		"~run"(e, t) {
			return L(this, "type", e, t), e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ie(e, t) {
	return R({
		kind: "schema",
		type: "nullish",
		reference: Ie,
		expects: `(${e.expects} | null | undefined)`,
		async: !1,
		wrapped: e,
		default: t,
		"~run"(e, t) {
			return (e.value === null || e.value === void 0) && (this.default !== void 0 && (e.value = /* @__PURE__ */ ke(this, e, t)), e.value === null || e.value === void 0) ? (e.typed = !0, e) : this.wrapped["~run"](e, t);
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function U(e) {
	return R({
		kind: "schema",
		type: "number",
		reference: U,
		expects: "number",
		async: !1,
		message: e,
		"~run"(e, t) {
			return typeof e.value == "number" && !isNaN(e.value) ? e.typed = !0 : L(this, "type", e, t), e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Le(e, t) {
	return R({
		kind: "schema",
		type: "object",
		reference: Le,
		expects: "Object",
		async: !1,
		entries: e,
		message: t,
		"~run"(e, t) {
			let n = e.value;
			if (n && typeof n == "object") {
				e.typed = !0, e.value = {};
				for (let r in this.entries) {
					let i = this.entries[r];
					if (r in n || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && i.default !== void 0) {
						let a = r in n ? n[r] : /* @__PURE__ */ ke(i), o = i["~run"]({ value: a }, t);
						if (o.issues) {
							let i = {
								type: "object",
								origin: "value",
								input: n,
								key: r,
								value: a
							};
							for (let t of o.issues) t.path ? t.path.unshift(i) : t.path = [i], e.issues?.push(t);
							if (e.issues ||= o.issues, t.abortEarly) {
								e.typed = !1;
								break;
							}
						}
						o.typed || (e.typed = !1), e.value[r] = o.value;
					} else if (i.fallback !== void 0) e.value[r] = /* @__PURE__ */ Oe(i);
					else if (i.type !== "exact_optional" && i.type !== "optional" && i.type !== "nullish" && (L(this, "key", e, t, {
						input: void 0,
						expected: `"${r}"`,
						path: [{
							type: "object",
							origin: "key",
							input: n,
							key: r,
							value: n[r]
						}]
					}), t.abortEarly)) break;
				}
			} else L(this, "type", e, t);
			return e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function W(e, t) {
	return R({
		kind: "schema",
		type: "optional",
		reference: W,
		expects: `(${e.expects} | undefined)`,
		async: !1,
		wrapped: e,
		default: t,
		"~run"(e, t) {
			return e.value === void 0 && (this.default !== void 0 && (e.value = /* @__PURE__ */ ke(this, e, t)), e.value === void 0) ? (e.typed = !0, e) : this.wrapped["~run"](e, t);
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Re(e) {
	return R({
		kind: "schema",
		type: "promise",
		reference: Re,
		expects: "Promise",
		async: !1,
		message: e,
		"~run"(e, t) {
			return e.value instanceof Promise ? e.typed = !0 : L(this, "type", e, t), e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ze(e, t, n) {
	return R({
		kind: "schema",
		type: "record",
		reference: ze,
		expects: "Object",
		async: !1,
		key: e,
		value: t,
		message: n,
		"~run"(e, t) {
			let n = e.value;
			if (n && typeof n == "object") {
				e.typed = !0, e.value = {};
				for (let r in n) if (/* @__PURE__ */ ye(n, r)) {
					let i = n[r], a = this.key["~run"]({ value: r }, t);
					if (a.issues) {
						let o = {
							type: "object",
							origin: "key",
							input: n,
							key: r,
							value: i
						};
						for (let t of a.issues) t.path = [o], e.issues?.push(t);
						if (e.issues ||= a.issues, t.abortEarly) {
							e.typed = !1;
							break;
						}
					}
					let o = this.value["~run"]({ value: i }, t);
					if (o.issues) {
						let a = {
							type: "object",
							origin: "value",
							input: n,
							key: r,
							value: i
						};
						for (let t of o.issues) t.path ? t.path.unshift(a) : t.path = [a], e.issues?.push(t);
						if (e.issues ||= o.issues, t.abortEarly) {
							e.typed = !1;
							break;
						}
					}
					a.typed && o.typed || (e.typed = !1), a.typed && (e.value[a.value] = o.value);
				}
			} else L(this, "type", e, t);
			return e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function G(e, t) {
	return R({
		kind: "schema",
		type: "strict_object",
		reference: G,
		expects: "Object",
		async: !1,
		entries: e,
		message: t,
		"~run"(e, t) {
			let n = e.value;
			if (n && typeof n == "object") {
				e.typed = !0, e.value = {};
				for (let r in this.entries) {
					let i = this.entries[r];
					if (r in n || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && i.default !== void 0) {
						let a = r in n ? n[r] : /* @__PURE__ */ ke(i), o = i["~run"]({ value: a }, t);
						if (o.issues) {
							let i = {
								type: "object",
								origin: "value",
								input: n,
								key: r,
								value: a
							};
							for (let t of o.issues) t.path ? t.path.unshift(i) : t.path = [i], e.issues?.push(t);
							if (e.issues ||= o.issues, t.abortEarly) {
								e.typed = !1;
								break;
							}
						}
						o.typed || (e.typed = !1), e.value[r] = o.value;
					} else if (i.fallback !== void 0) e.value[r] = /* @__PURE__ */ Oe(i);
					else if (i.type !== "exact_optional" && i.type !== "optional" && i.type !== "nullish" && (L(this, "key", e, t, {
						input: void 0,
						expected: `"${r}"`,
						path: [{
							type: "object",
							origin: "key",
							input: n,
							key: r,
							value: n[r]
						}]
					}), t.abortEarly)) break;
				}
				if (!e.issues || !t.abortEarly) {
					for (let r in n) if (!Object.prototype.hasOwnProperty.call(this.entries, r)) {
						L(this, "key", e, t, {
							input: r,
							expected: "never",
							path: [{
								type: "object",
								origin: "key",
								input: n,
								key: r,
								value: n[r]
							}]
						});
						break;
					}
				}
			} else L(this, "type", e, t);
			return e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function K(e) {
	return R({
		kind: "schema",
		type: "string",
		reference: K,
		expects: "string",
		async: !1,
		message: e,
		"~run"(e, t) {
			return typeof e.value == "string" ? e.typed = !0 : L(this, "type", e, t), e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function q(e, t) {
	return R({
		kind: "schema",
		type: "tuple",
		reference: q,
		expects: "Array",
		async: !1,
		items: e,
		message: t,
		"~run"(e, t) {
			let n = e.value;
			if (Array.isArray(n)) {
				e.typed = !0, e.value = [];
				for (let r = 0; r < this.items.length; r++) {
					let i = n[r], a = this.items[r]["~run"]({ value: i }, t);
					if (a.issues) {
						let o = {
							type: "array",
							origin: "value",
							input: n,
							key: r,
							value: i
						};
						for (let t of a.issues) t.path ? t.path.unshift(o) : t.path = [o], e.issues?.push(t);
						if (e.issues ||= a.issues, t.abortEarly) {
							e.typed = !1;
							break;
						}
					}
					a.typed || (e.typed = !1), e.value.push(a.value);
				}
			} else L(this, "type", e, t);
			return e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Be(e) {
	return R({
		kind: "schema",
		type: "undefined",
		reference: Be,
		expects: "undefined",
		async: !1,
		message: e,
		"~run"(e, t) {
			return e.value === void 0 ? e.typed = !0 : L(this, "type", e, t), e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ve(e) {
	let t;
	if (e) for (let n of e) if (t) for (let e of n.issues) t.push(e);
	else t = n.issues;
	return t;
}
/* @__NO_SIDE_EFFECTS__ */
function J(e, t) {
	return R({
		kind: "schema",
		type: "union",
		reference: J,
		expects: /* @__PURE__ */ be(e.map((e) => e.expects), "|"),
		async: !1,
		options: e,
		message: t,
		"~run"(e, t) {
			let n, r, i;
			for (let a of this.options) {
				let o = a["~run"]({ value: e.value }, t);
				if (o.typed) {
					if (o.issues) r ? r.push(o) : r = [o];
					else {
						n = o;
						break;
					}
				} else i ? i.push(o) : i = [o];
			}
			if (n) return n;
			if (r) {
				if (r.length === 1) return r[0];
				L(this, "type", e, t, { issues: /* @__PURE__ */ Ve(r) }), e.typed = !0;
			} else if (i?.length === 1) return i[0];
			else L(this, "type", e, t, { issues: /* @__PURE__ */ Ve(i) });
			return e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function He(e, t) {
	return R({
		kind: "schema",
		type: "union",
		reference: He,
		expects: /* @__PURE__ */ be(e.map((e) => e.expects), "|"),
		async: !0,
		options: e,
		message: t,
		async "~run"(e, t) {
			let n, r, i;
			for (let a of this.options) {
				let o = await a["~run"]({ value: e.value }, t);
				if (o.typed) {
					if (o.issues) r ? r.push(o) : r = [o];
					else {
						n = o;
						break;
					}
				} else i ? i.push(o) : i = [o];
			}
			if (n) return n;
			if (r) {
				if (r.length === 1) return r[0];
				L(this, "type", e, t, { issues: /* @__PURE__ */ Ve(r) }), e.typed = !0;
			} else if (i?.length === 1) return i[0];
			else L(this, "type", e, t, { issues: /* @__PURE__ */ Ve(i) });
			return e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ue(e) {
	return R({
		kind: "schema",
		type: "void",
		reference: Ue,
		expects: "void",
		async: !1,
		message: e,
		"~run"(e, t) {
			return e.value === void 0 ? e.typed = !0 : L(this, "type", e, t), e;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function We(e, t) {
	let n = { ...e.entries };
	for (let e of t) delete n[e];
	return R({
		...e,
		entries: n
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ge(e, t) {
	let n = {};
	for (let r in e.entries) n[r] = !t || t.includes(r) ? /* @__PURE__ */ W(e.entries[r]) : e.entries[r];
	return R({
		...e,
		entries: n
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Y(...e) {
	return R({
		...e[0],
		pipe: e,
		"~run"(t, n) {
			for (let r of e) if (r.kind !== "metadata") {
				if (t.issues && (r.kind === "schema" || r.kind === "transformation")) {
					t.typed = !1;
					break;
				}
				t.issues && (n.abortEarly || n.abortPipeEarly) || (t = r["~run"](t, n));
			}
			return t;
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ke(...e) {
	return R({
		...e[0],
		pipe: e,
		async: !0,
		async "~run"(t, n) {
			for (let r of e) if (r.kind !== "metadata") {
				if (t.issues && (r.kind === "schema" || r.kind === "transformation")) {
					t.typed = !1;
					break;
				}
				t.issues && (n.abortEarly || n.abortPipeEarly) || (t = await r["~run"](t, n));
			}
			return t;
		}
	});
}
function qe(...e) {
	return (0, n.styleText)(...e);
}
var Je = /* @__PURE__ */ J([/* @__PURE__ */ K(), /* @__PURE__ */ Pe(RegExp)]);
function Ye() {
	return /* @__PURE__ */ Ne();
}
var Xe = /* @__PURE__ */ J([
	/* @__PURE__ */ H("debug"),
	/* @__PURE__ */ H("info"),
	/* @__PURE__ */ H("warn")
]), Ze = /* @__PURE__ */ J([Xe, /* @__PURE__ */ H("silent")]), Qe = /* @__PURE__ */ J([Xe, /* @__PURE__ */ H("error")]), $e = /* @__PURE__ */ je(), et = /* @__PURE__ */ J([$e, /* @__PURE__ */ K()]), tt = /* @__PURE__ */ J([
	/* @__PURE__ */ K(),
	/* @__PURE__ */ B(/* @__PURE__ */ K()),
	/* @__PURE__ */ ze(/* @__PURE__ */ K(), /* @__PURE__ */ K())
]), nt = /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([
	/* @__PURE__ */ K(),
	/* @__PURE__ */ W(/* @__PURE__ */ K()),
	/* @__PURE__ */ V()
])), /* @__PURE__ */ Te(/* @__PURE__ */ Ie(/* @__PURE__ */ V()))), rt = /* @__PURE__ */ J([
	Je,
	/* @__PURE__ */ B(Je),
	nt
]), it = /* @__PURE__ */ ze(/* @__PURE__ */ K(), /* @__PURE__ */ J([
	/* @__PURE__ */ H("asset"),
	/* @__PURE__ */ H("base64"),
	/* @__PURE__ */ H("binary"),
	/* @__PURE__ */ H("copy"),
	/* @__PURE__ */ H("css"),
	/* @__PURE__ */ H("dataurl"),
	/* @__PURE__ */ H("empty"),
	/* @__PURE__ */ H("js"),
	/* @__PURE__ */ H("json"),
	/* @__PURE__ */ H("jsx"),
	/* @__PURE__ */ H("text"),
	/* @__PURE__ */ H("ts"),
	/* @__PURE__ */ H("tsx")
])), at = /* @__PURE__ */ Le({
	assumptions: /* @__PURE__ */ W(/* @__PURE__ */ Le({
		ignoreFunctionLength: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		noDocumentAll: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		objectRestNoSymbols: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		pureGetters: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		setPublicClassFields: /* @__PURE__ */ W(/* @__PURE__ */ V())
	})),
	typescript: /* @__PURE__ */ W(/* @__PURE__ */ Le({
		jsxPragma: /* @__PURE__ */ W(/* @__PURE__ */ K()),
		jsxPragmaFrag: /* @__PURE__ */ W(/* @__PURE__ */ K()),
		onlyRemoveTypeImports: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		allowNamespaces: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		allowDeclareFields: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		removeClassFieldsWithoutInitializer: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		optimizeConstEnums: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		optimizeEnums: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		declaration: /* @__PURE__ */ W(/* @__PURE__ */ Le({
			stripInternal: /* @__PURE__ */ W(/* @__PURE__ */ V()),
			sourcemap: /* @__PURE__ */ W(/* @__PURE__ */ V())
		})),
		rewriteImportExtensions: /* @__PURE__ */ W(/* @__PURE__ */ J([
			/* @__PURE__ */ H("rewrite"),
			/* @__PURE__ */ H("remove"),
			/* @__PURE__ */ V()
		]))
	})),
	helpers: /* @__PURE__ */ W(/* @__PURE__ */ Le({ mode: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ H("Runtime"), /* @__PURE__ */ H("External")])) })),
	decorator: /* @__PURE__ */ W(/* @__PURE__ */ Le({
		legacy: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		emitDecoratorMetadata: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		strictNullChecks: /* @__PURE__ */ W(/* @__PURE__ */ V())
	})),
	jsx: /* @__PURE__ */ W(/* @__PURE__ */ J([
		/* @__PURE__ */ H(!1),
		/* @__PURE__ */ H("preserve"),
		/* @__PURE__ */ H("react"),
		/* @__PURE__ */ H("react-jsx"),
		/* @__PURE__ */ G({
			runtime: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ H("classic"), /* @__PURE__ */ H("automatic")])), /* @__PURE__ */ z("Which runtime to use")),
			development: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Development specific information")),
			throwIfNamespace: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Toggles whether to throw an error when a tag name uses an XML namespace")),
			pure: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Mark JSX elements and top-level React method calls as pure for tree shaking.")),
			importSource: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("Import the factory of element and fragment if mode is classic")),
			pragma: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("Jsx element transformation")),
			pragmaFrag: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("Jsx fragment transformation")),
			refresh: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ je()])), /* @__PURE__ */ z("Enable react fast refresh"))
		})
	])),
	target: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ K(), /* @__PURE__ */ B(/* @__PURE__ */ K())])), /* @__PURE__ */ z("The JavaScript target environment")),
	define: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ ze(/* @__PURE__ */ K(), /* @__PURE__ */ K())), /* @__PURE__ */ z("Define global variables (syntax: key:value,key2:value2)")),
	inject: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ ze(/* @__PURE__ */ K(), /* @__PURE__ */ J([/* @__PURE__ */ K(), /* @__PURE__ */ q([/* @__PURE__ */ K(), /* @__PURE__ */ K()])]))), /* @__PURE__ */ z("Inject import statements on demand")),
	dropLabels: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ K())), /* @__PURE__ */ z("Remove labeled statements with these label names")),
	plugins: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ Le({
		styledComponents: /* @__PURE__ */ W(/* @__PURE__ */ je()),
		taggedTemplateEscape: /* @__PURE__ */ W(/* @__PURE__ */ V())
	})), /* @__PURE__ */ z("Third-party plugins to use"))
}), ot = /* @__PURE__ */ G({
	usePolling: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Use polling-based file watching instead of native OS events")),
	pollInterval: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ U()), /* @__PURE__ */ z("Poll interval in milliseconds (only used when usePolling is true)")),
	compareContentsForPolling: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Compare file contents for poll-based watchers (only used when usePolling is true)")),
	useDebounce: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Use debounced event delivery at the filesystem level")),
	debounceDelay: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ U()), /* @__PURE__ */ z("Debounce delay in milliseconds (only used when useDebounce is true)")),
	debounceTickRate: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ U()), /* @__PURE__ */ z("Tick rate in milliseconds for debouncer (only used when useDebounce is true)"))
}), st = /* @__PURE__ */ G({
	chokidar: /* @__PURE__ */ W(/* @__PURE__ */ Fe("The \"watch.chokidar\" option is deprecated, please use \"watch.watcher\" instead of it")),
	exclude: /* @__PURE__ */ W(/* @__PURE__ */ J([Je, /* @__PURE__ */ B(Je)])),
	include: /* @__PURE__ */ W(/* @__PURE__ */ J([Je, /* @__PURE__ */ B(Je)])),
	watcher: /* @__PURE__ */ W(ot),
	notify: /* @__PURE__ */ W(ot),
	skipWrite: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Skip the bundle.write() step")),
	buildDelay: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ U()), /* @__PURE__ */ z("Throttle watch rebuilds")),
	clearScreen: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to clear the screen when a rebuild is triggered")),
	onInvalidate: /* @__PURE__ */ Y(/* @__PURE__ */ W(Ye()), /* @__PURE__ */ z("An optional function that will be called immediately every time a module changes that is part of the build."))
}), ct = /* @__PURE__ */ G({
	circularDependency: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when detecting circular dependency")),
	eval: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when detecting uses of direct `eval`s")),
	missingGlobalName: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when the `output.globals` option is missing when needed")),
	missingNameOptionForIifeExport: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when the `output.name` option is missing when needed")),
	invalidAnnotation: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when a `#__PURE__` / `@__PURE__` annotation has no effect due to its position")),
	mixedExports: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when the way to export values is ambiguous")),
	unresolvedEntry: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when an entrypoint cannot be resolved")),
	unresolvedImport: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when an import cannot be resolved")),
	filenameConflict: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when files generated have the same name with different contents")),
	moduleLevelDirective: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings for module-level directives other than `use strict`")),
	commonJsVariableInEsm: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when a CommonJS variable is used in an ES module")),
	importIsUndefined: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when an imported variable is not exported")),
	emptyImportMeta: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when `import.meta` is not supported with the output format and is replaced with an empty object (`{}`)")),
	toleratedTransform: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when detecting tolerated transform")),
	cannotCallNamespace: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when a namespace is called as a function")),
	configurationFieldConflict: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when a config value is overridden by another config value with a higher priority")),
	preferBuiltinFeature: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when a plugin that is covered by a built-in feature is used")),
	couldNotCleanDirectory: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when Rolldown could not clean the output directory")),
	bundlerTimings: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when plugins and option callbacks take significant time during the build process")),
	pluginTimings: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Deprecated alias for bundlerTimings. Rolldown uses bundlerTimings if both options have values.")),
	duplicateShebang: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when both the code and postBanner contain shebang")),
	unsupportedTsconfigOption: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when a tsconfig option or combination of options is not supported")),
	ineffectiveDynamicImport: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when a module is dynamically imported but also statically imported, making the dynamic import ineffective for code splitting")),
	largeBarrelModules: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit info logs when a barrel module has a very large number of re-exports (more than 5000)")),
	sourcemapBroken: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when a plugin transforms code without generating a sourcemap")),
	namespaceConflict: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when multiple star re-exports provide the same name from different modules")),
	shimmedExport: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to emit warnings when a missing export is replaced with an undefined binding"))
}), lt = /* @__PURE__ */ G({
	compress: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ G({
		target: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ K(), /* @__PURE__ */ B(/* @__PURE__ */ K())])),
		dropConsole: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		dropDebugger: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		keepNames: /* @__PURE__ */ W(/* @__PURE__ */ G({
			function: /* @__PURE__ */ V(),
			class: /* @__PURE__ */ V()
		})),
		unused: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ H("keep_assign")])),
		joinVars: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		sequences: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		dropLabels: /* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ K())),
		maxIterations: /* @__PURE__ */ W(/* @__PURE__ */ U()),
		treeshake: /* @__PURE__ */ W(/* @__PURE__ */ G({
			annotations: /* @__PURE__ */ W(/* @__PURE__ */ V()),
			manualPureFunctions: /* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ K())),
			propertyReadSideEffects: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ H("always")])),
			propertyWriteSideEffects: /* @__PURE__ */ W(/* @__PURE__ */ V()),
			unknownGlobalSideEffects: /* @__PURE__ */ W(/* @__PURE__ */ V()),
			invalidImportSideEffects: /* @__PURE__ */ W(/* @__PURE__ */ V())
		}))
	})])),
	mangle: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ G({
		toplevel: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		keepNames: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ G({
			function: /* @__PURE__ */ V(),
			class: /* @__PURE__ */ V()
		})])),
		reserved: /* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ K())),
		debug: /* @__PURE__ */ W(/* @__PURE__ */ V())
	})])),
	mangleProps: /* @__PURE__ */ W(/* @__PURE__ */ G({
		include: /* @__PURE__ */ Pe(RegExp),
		exclude: /* @__PURE__ */ W(/* @__PURE__ */ Pe(RegExp)),
		reserved: /* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ K())),
		quoted: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		debug: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		cache: /* @__PURE__ */ W(/* @__PURE__ */ ze(/* @__PURE__ */ K(), /* @__PURE__ */ J([/* @__PURE__ */ K(), /* @__PURE__ */ H(!1)])))
	})),
	codegen: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ G({
		removeWhitespace: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		asciiOnly: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		legalComments: /* @__PURE__ */ W(/* @__PURE__ */ J([
			/* @__PURE__ */ H("none"),
			/* @__PURE__ */ H("inline"),
			/* @__PURE__ */ H("eof"),
			/* @__PURE__ */ H("external"),
			/* @__PURE__ */ G({ linked: /* @__PURE__ */ K() })
		]))
	})]))
}), ut = /* @__PURE__ */ G({
	alias: /* @__PURE__ */ W(/* @__PURE__ */ ze(/* @__PURE__ */ K(), /* @__PURE__ */ J([
		/* @__PURE__ */ H(!1),
		/* @__PURE__ */ K(),
		/* @__PURE__ */ B(/* @__PURE__ */ K())
	]))),
	aliasFields: /* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ B(/* @__PURE__ */ K()))),
	conditionNames: /* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ K())),
	extensionAlias: /* @__PURE__ */ W(/* @__PURE__ */ ze(/* @__PURE__ */ K(), /* @__PURE__ */ B(/* @__PURE__ */ K()))),
	exportsFields: /* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ B(/* @__PURE__ */ K()))),
	extensions: /* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ K())),
	mainFields: /* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ K())),
	mainFiles: /* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ K())),
	modules: /* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ K())),
	symlinks: /* @__PURE__ */ W(/* @__PURE__ */ V()),
	tsconfigFilename: /* @__PURE__ */ W(/* @__PURE__ */ K())
}), dt = /* @__PURE__ */ G({
	moduleSideEffects: /* @__PURE__ */ W(/* @__PURE__ */ je()),
	annotations: /* @__PURE__ */ W(/* @__PURE__ */ V()),
	manualPureFunctions: /* @__PURE__ */ W(/* @__PURE__ */ Me((e) => /* @__PURE__ */ Ae(/* @__PURE__ */ B(/* @__PURE__ */ K()), e), "string array")),
	unknownGlobalSideEffects: /* @__PURE__ */ W(/* @__PURE__ */ V()),
	invalidImportSideEffects: /* @__PURE__ */ W(/* @__PURE__ */ V()),
	commonjs: /* @__PURE__ */ W(/* @__PURE__ */ V()),
	propertyReadSideEffects: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ H(!1), /* @__PURE__ */ H("always")])),
	propertyWriteSideEffects: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ H(!1), /* @__PURE__ */ H("always")]))
}), ft = /* @__PURE__ */ G({
	inlineConst: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ G({
		mode: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ H("all"), /* @__PURE__ */ H("smart")])),
		pass: /* @__PURE__ */ W(/* @__PURE__ */ U())
	})])), /* @__PURE__ */ z("Enable crossmodule constant inlining")),
	pifeForModuleWrappers: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Use PIFE pattern for module wrappers"))
}), pt = /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([Qe, et]))), mt = /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([
	Xe,
	$e,
	pt
]))), ht = /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([$e, /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([/* @__PURE__ */ J([et, /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Te(et))])])))]))), gt = /* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ G({
	port: /* @__PURE__ */ W(/* @__PURE__ */ U()),
	host: /* @__PURE__ */ W(/* @__PURE__ */ K()),
	implement: /* @__PURE__ */ W(/* @__PURE__ */ K()),
	skipCommonRuntimeInjection: /* @__PURE__ */ W(/* @__PURE__ */ V()),
	lazy: /* @__PURE__ */ W(/* @__PURE__ */ V()),
	hotUpdate: /* @__PURE__ */ W(/* @__PURE__ */ V())
})]), _t = /* @__PURE__ */ G({
	input: /* @__PURE__ */ W(tt),
	plugins: /* @__PURE__ */ W(/* @__PURE__ */ Me(() => !0)),
	external: /* @__PURE__ */ W(rt),
	makeAbsoluteExternalsRelative: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ H("ifRelativeSource")])),
	resolve: /* @__PURE__ */ W(ut),
	cwd: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("Current working directory")),
	platform: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([
		/* @__PURE__ */ H("browser"),
		/* @__PURE__ */ H("neutral"),
		/* @__PURE__ */ H("node")
	])), /* @__PURE__ */ z(`Platform for which the code should be generated (node, ${qe("underline", "browser")}, neutral)`)),
	shimMissingExports: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Create shim variables for missing exports")),
	treeshake: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), dt])),
	optimization: /* @__PURE__ */ W(ft),
	logLevel: /* @__PURE__ */ Y(/* @__PURE__ */ W(Ze), /* @__PURE__ */ z(`Log level (${qe("dim", "silent")}, ${qe(["underline", "gray"], "info")}, debug, ${qe("yellow", "warn")})`)),
	onLog: /* @__PURE__ */ W(mt),
	onwarn: /* @__PURE__ */ W(ht),
	moduleTypes: /* @__PURE__ */ Y(/* @__PURE__ */ W(it), /* @__PURE__ */ z("Module types for customized extensions")),
	experimental: /* @__PURE__ */ W(/* @__PURE__ */ G({
		viteMode: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		resolveNewUrlToAsset: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		devMode: /* @__PURE__ */ W(gt),
		chunkModulesOrder: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ H("module-id"), /* @__PURE__ */ H("exec-order")])),
		attachDebugInfo: /* @__PURE__ */ W(/* @__PURE__ */ J([
			/* @__PURE__ */ H("none"),
			/* @__PURE__ */ H("simple"),
			/* @__PURE__ */ H("full")
		])),
		chunkImportMap: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ Le({
			baseUrl: /* @__PURE__ */ W(/* @__PURE__ */ K()),
			fileName: /* @__PURE__ */ W(/* @__PURE__ */ K())
		})])),
		onDemandWrapping: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		incrementalBuild: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		nativeMagicString: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		chunkOptimization: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ G({
			mergeCommonChunks: /* @__PURE__ */ W(/* @__PURE__ */ V()),
			avoidRedundantChunkLoads: /* @__PURE__ */ W(/* @__PURE__ */ V())
		})])),
		lazyBarrel: /* @__PURE__ */ W(/* @__PURE__ */ V())
	})),
	transform: /* @__PURE__ */ W(at),
	watch: /* @__PURE__ */ W(/* @__PURE__ */ J([st, /* @__PURE__ */ H(!1)])),
	checks: /* @__PURE__ */ W(ct),
	devtools: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ Le({ sessionId: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ Y(/* @__PURE__ */ K(), /* @__PURE__ */ we((e) => e !== "" && e !== "." && e !== ".." && !/[/\\\0]/.test(e), "Expected one path segment: not empty, not \".\" or \"..\", and without \"/\", \"\\\" or NUL"), /* @__PURE__ */ we((e) => e.toLowerCase().toUpperCase() !== "UNKNOWN-SESSION", "\"unknown-session\" is reserved for devtools events without a session context"))), /* @__PURE__ */ z("Used to name the build.")) })), /* @__PURE__ */ z("Enable debug mode. Emit debug information to disk. This might slow down the build process significantly.")),
	preserveEntrySignatures: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([
		/* @__PURE__ */ H("strict"),
		/* @__PURE__ */ H("allow-extension"),
		/* @__PURE__ */ H("exports-only"),
		/* @__PURE__ */ H(!1)
	]))),
	context: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("The value of `this` at the top level of each module.")),
	tsconfig: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ K()])), /* @__PURE__ */ z("Path to the tsconfig.json file."))
}), vt = /* @__PURE__ */ G({
	input: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ K())), /* @__PURE__ */ z("Entry file")),
	external: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ K())), /* @__PURE__ */ z("Comma-separated list of module ids to exclude from the bundle `<module-id>,...`")),
	treeshake: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("enable treeshaking")),
	makeAbsoluteExternalsRelative: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Prevent normalization of external imports")),
	preserveEntrySignatures: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ H(!1)), /* @__PURE__ */ z("Avoid facade chunks for entry points")),
	context: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("The entity top-level `this` represents."))
}), yt = /* @__PURE__ */ We(/* @__PURE__ */ G({
	..._t.entries,
	...vt.entries
}), [
	"plugins",
	"onwarn",
	"onLog",
	"resolve",
	"experimental",
	"watch"
]), bt = /* @__PURE__ */ J([
	/* @__PURE__ */ H("es"),
	/* @__PURE__ */ H("cjs"),
	/* @__PURE__ */ H("esm"),
	/* @__PURE__ */ H("module"),
	/* @__PURE__ */ H("commonjs"),
	/* @__PURE__ */ H("iife"),
	/* @__PURE__ */ H("umd")
]), xt = /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([/* @__PURE__ */ Me(() => !0)])), /* @__PURE__ */ Ee(/* @__PURE__ */ He([/* @__PURE__ */ K(), /* @__PURE__ */ Ke(/* @__PURE__ */ Re(), /* @__PURE__ */ Ce(), /* @__PURE__ */ K())]))), St = /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([/* @__PURE__ */ Me(() => !0)])), /* @__PURE__ */ Te(/* @__PURE__ */ K())), Ct = /* @__PURE__ */ J([/* @__PURE__ */ K(), St]), wt = /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([/* @__PURE__ */ Me(() => !0)])), /* @__PURE__ */ Te(/* @__PURE__ */ K())), Tt = /* @__PURE__ */ J([/* @__PURE__ */ K(), wt]), Et = /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([/* @__PURE__ */ K()])), /* @__PURE__ */ Te(/* @__PURE__ */ K())), Dt = /* @__PURE__ */ J([/* @__PURE__ */ V(), Et]), Ot = /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([/* @__PURE__ */ K()])), /* @__PURE__ */ Te(/* @__PURE__ */ K())), kt = /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([/* @__PURE__ */ K()])), /* @__PURE__ */ Te(/* @__PURE__ */ K())), At = /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([/* @__PURE__ */ K(), /* @__PURE__ */ Le({})])), /* @__PURE__ */ Te(/* @__PURE__ */ Ie(/* @__PURE__ */ K()))), jt = /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([/* @__PURE__ */ K(), /* @__PURE__ */ Le({})])), /* @__PURE__ */ Te(/* @__PURE__ */ Ie(/* @__PURE__ */ K()))), Mt = /* @__PURE__ */ Y(Ye(), /* @__PURE__ */ Se(/* @__PURE__ */ q([/* @__PURE__ */ K()])), /* @__PURE__ */ Te(/* @__PURE__ */ J([
	/* @__PURE__ */ V(),
	/* @__PURE__ */ Ue(),
	/* @__PURE__ */ Be()
]))), Nt = /* @__PURE__ */ J([Je, Mt]), Pt = /* @__PURE__ */ G({
	includeDependenciesRecursively: /* @__PURE__ */ W(/* @__PURE__ */ V()),
	minSize: /* @__PURE__ */ W(/* @__PURE__ */ U()),
	maxSize: /* @__PURE__ */ W(/* @__PURE__ */ U()),
	minModuleSize: /* @__PURE__ */ W(/* @__PURE__ */ U()),
	maxModuleSize: /* @__PURE__ */ W(/* @__PURE__ */ U()),
	minShareCount: /* @__PURE__ */ W(/* @__PURE__ */ U()),
	groups: /* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ G({
		debugName: /* @__PURE__ */ W(/* @__PURE__ */ K()),
		name: /* @__PURE__ */ J([/* @__PURE__ */ K(), jt]),
		test: /* @__PURE__ */ W(/* @__PURE__ */ J([Je, Mt])),
		priority: /* @__PURE__ */ W(/* @__PURE__ */ U()),
		minSize: /* @__PURE__ */ W(/* @__PURE__ */ U()),
		minShareCount: /* @__PURE__ */ W(/* @__PURE__ */ U()),
		maxSize: /* @__PURE__ */ W(/* @__PURE__ */ U()),
		minModuleSize: /* @__PURE__ */ W(/* @__PURE__ */ U()),
		maxModuleSize: /* @__PURE__ */ W(/* @__PURE__ */ U()),
		entriesAware: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		entriesAwareMergeThreshold: /* @__PURE__ */ W(/* @__PURE__ */ U()),
		includeDependenciesRecursively: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		tags: /* @__PURE__ */ W(/* @__PURE__ */ B(/* @__PURE__ */ K()))
	}))),
	experimentalInlineCommonChunks: /* @__PURE__ */ W(/* @__PURE__ */ G({
		maxSize: /* @__PURE__ */ W(/* @__PURE__ */ U()),
		exclude: /* @__PURE__ */ W(/* @__PURE__ */ J([Nt, /* @__PURE__ */ B(Nt)]))
	}))
}), Ft = /* @__PURE__ */ G({
	symbols: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to use Symbol.toStringTag for namespace objects")),
	preset: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ H("es5"), /* @__PURE__ */ H("es2015")])),
	profilerNames: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Whether to add readable names to internal variables for profiling purposes"))
}), It = /* @__PURE__ */ G({
	dir: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("Output directory, defaults to `dist` if `file` is not set")),
	file: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("Single output file")),
	charset: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ H("ascii"), /* @__PURE__ */ H("utf8")])), /* @__PURE__ */ z("Character set to use in generated JavaScript")),
	exports: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([
		/* @__PURE__ */ H("auto"),
		/* @__PURE__ */ H("named"),
		/* @__PURE__ */ H("default"),
		/* @__PURE__ */ H("none")
	])), /* @__PURE__ */ z(`Specify a export mode (${qe("underline", "auto")}, named, default, none)`)),
	hashCharacters: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([
		/* @__PURE__ */ H("base64"),
		/* @__PURE__ */ H("base36"),
		/* @__PURE__ */ H("hex")
	])), /* @__PURE__ */ z("Use the specified character set for file hashes")),
	format: /* @__PURE__ */ Y(/* @__PURE__ */ W(bt), /* @__PURE__ */ z(`Output format of the generated bundle (supports ${qe("underline", "esm")}, cjs, and iife)`)),
	sourcemap: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([
		/* @__PURE__ */ V(),
		/* @__PURE__ */ H("inline"),
		/* @__PURE__ */ H("hidden")
	])), /* @__PURE__ */ z("Generate sourcemap (`-s inline` for inline, or `-s` for `.map` file)")),
	sourcemapBaseUrl: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("Base URL used to prefix sourcemap paths")),
	sourcemapFileNames: /* @__PURE__ */ Y(/* @__PURE__ */ W(Ct), /* @__PURE__ */ z("Name pattern for emitted sourcemaps")),
	sourcemapDebugIds: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Inject sourcemap debug IDs")),
	sourcemapExcludeSources: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Exclude source content from sourcemaps")),
	sourcemapIgnoreList: /* @__PURE__ */ W(/* @__PURE__ */ J([
		/* @__PURE__ */ V(),
		/* @__PURE__ */ Me(() => !0),
		Je
	])),
	sourcemapPathTransform: /* @__PURE__ */ W(/* @__PURE__ */ Me(() => !0)),
	banner: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ K(), xt])),
	footer: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ K(), xt])),
	postBanner: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ K(), xt])),
	postFooter: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ K(), xt])),
	intro: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ K(), xt])),
	outro: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ K(), xt])),
	extend: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Extend global variable defined by name in IIFE / UMD formats")),
	esModule: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ H("if-default-prop")])),
	assetFileNames: /* @__PURE__ */ W(Tt),
	entryFileNames: /* @__PURE__ */ W(Ct),
	chunkFileNames: /* @__PURE__ */ W(Ct),
	sanitizeFileName: /* @__PURE__ */ W(Dt),
	minify: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([
		/* @__PURE__ */ V(),
		/* @__PURE__ */ H("dce-only"),
		lt
	])), /* @__PURE__ */ z("Minify the bundled file")),
	name: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("Name for UMD / IIFE format outputs")),
	globals: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ ze(/* @__PURE__ */ K(), /* @__PURE__ */ K()), Ot])), /* @__PURE__ */ z("Global variable of UMD / IIFE dependencies (syntax: `key:value`)")),
	paths: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ ze(/* @__PURE__ */ K(), /* @__PURE__ */ K()), kt])), /* @__PURE__ */ z("Maps external module IDs to paths")),
	generatedCode: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ Ge(Ft)), /* @__PURE__ */ z("Generated code options")),
	externalLiveBindings: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("external live bindings")),
	inlineDynamicImports: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Inline dynamic imports")),
	dynamicImportInCjs: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Dynamic import in CJS output")),
	manualChunks: /* @__PURE__ */ W(At),
	codeSplitting: /* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), Pt])),
	advancedChunks: /* @__PURE__ */ W(Pt),
	legalComments: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ H("none"), /* @__PURE__ */ H("inline")])), /* @__PURE__ */ z("Control legal comments in the output")),
	comments: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ G({
		legal: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		annotation: /* @__PURE__ */ W(/* @__PURE__ */ V()),
		jsdoc: /* @__PURE__ */ W(/* @__PURE__ */ V())
	})])), /* @__PURE__ */ z("Control comments in the output")),
	plugins: /* @__PURE__ */ W(/* @__PURE__ */ Me(() => !0)),
	polyfillRequire: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Disable require polyfill injection")),
	hoistTransitiveImports: /* @__PURE__ */ W(/* @__PURE__ */ H(!1)),
	preserveModules: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Preserve module structure")),
	preserveModulesRoot: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("Put preserved modules under this path at root level")),
	virtualDirname: /* @__PURE__ */ W(/* @__PURE__ */ K()),
	minifyInternalExports: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Minify internal exports")),
	topLevelVar: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Rewrite top-level declarations to use `var`.")),
	cleanDir: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Clean output directory before emitting output")),
	keepNames: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Keep function and class names after bundling")),
	strictExecutionOrder: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Preserve source module execution order across generated chunks.")),
	strict: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ H("auto")])), /* @__PURE__ */ z("Whether to always output `\"use strict\"` directive in non-ES module outputs."))
}), Lt = (e, t) => `Code to insert the ${qe("bold", e)} of the bundled file (${qe("bold", t)} the wrapper function)`, Rt = /* @__PURE__ */ G({
	assetFileNames: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("Name pattern for asset files")),
	entryFileNames: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("Name pattern for emitted entry chunks")),
	chunkFileNames: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("Name pattern for emitted secondary chunks")),
	sanitizeFileName: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Sanitize file name")),
	banner: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z(Lt("top", "outside"))),
	footer: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z(Lt("bottom", "outside"))),
	postBanner: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("A string to prepend to the top of each chunk. Applied after the `renderChunk` hook and minification")),
	postFooter: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z("A string to append to the bottom of each chunk. Applied after the `renderChunk` hook and minification")),
	intro: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z(Lt("top", "inside"))),
	outro: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ K()), /* @__PURE__ */ z(Lt("bottom", "inside"))),
	esModule: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Always generate `__esModule` marks in non-ESM formats, defaults to `if-default-prop` (use `--no-esModule` to always disable)")),
	globals: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ ze(/* @__PURE__ */ K(), /* @__PURE__ */ K())), /* @__PURE__ */ z("Global variable of UMD / IIFE dependencies (syntax: `key:value`)")),
	codeSplitting: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ J([/* @__PURE__ */ V(), /* @__PURE__ */ G({
		minSize: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ U()), /* @__PURE__ */ z("Minimum size of the chunk")),
		minShareCount: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ U()), /* @__PURE__ */ z("Minimum share count of the chunk"))
	})])), /* @__PURE__ */ z("Code splitting options. Enabled by default; use `--no-codeSplitting` to disable, or `--codeSplitting.minSize` / `--codeSplitting.minShareCount` to configure")),
	advancedChunks: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ G({
		minSize: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ U()), /* @__PURE__ */ z("Minimum size of the chunk")),
		minShareCount: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ U()), /* @__PURE__ */ z("Minimum share count of the chunk"))
	})), /* @__PURE__ */ z("Deprecated: use codeSplitting instead")),
	minify: /* @__PURE__ */ Y(/* @__PURE__ */ W(/* @__PURE__ */ V()), /* @__PURE__ */ z("Minify the bundled file"))
}), zt = /* @__PURE__ */ We(/* @__PURE__ */ G({
	...It.entries,
	...Rt.entries
}), [
	"sourcemapIgnoreList",
	"sourcemapPathTransform",
	"plugins",
	"hoistTransitiveImports"
]);
({
	...yt.entries,
	...zt.entries
});
var Bt = {
	silent: -Infinity,
	fatal: 0,
	error: 0,
	warn: 1,
	log: 2,
	info: 3,
	success: 3,
	fail: 3,
	ready: 3,
	start: 3,
	box: 3,
	debug: 4,
	trace: 5,
	verbose: Infinity
}, Vt = {
	silent: { level: -1 },
	fatal: { level: Bt.fatal },
	error: { level: Bt.error },
	warn: { level: Bt.warn },
	log: { level: Bt.log },
	info: { level: Bt.info },
	success: { level: Bt.success },
	fail: { level: Bt.fail },
	ready: { level: Bt.info },
	start: { level: Bt.info },
	box: { level: Bt.info },
	debug: { level: Bt.debug },
	trace: { level: Bt.trace },
	verbose: { level: Bt.verbose }
};
function Ht(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ut(e, t, n = ".", r) {
	if (!Ht(t)) return Ut(e, {}, n, r);
	let i = Object.assign({}, t);
	for (let t in e) {
		if (t === "__proto__" || t === "constructor") continue;
		let a = e[t];
		a != null && (r && r(i, t, a, n) || (i[t] = Array.isArray(a) && Array.isArray(i[t]) ? [...a, ...i[t]] : Ht(a) && Ht(i[t]) ? Ut(a, i[t], (n ? `${n}.` : "") + t.toString(), r) : a));
	}
	return i;
}
function Wt(e) {
	return (...t) => t.reduce((t, n) => Ut(t, n, "", e), {});
}
var Gt = Wt();
function Kt(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function qt(e) {
	return !(!Kt(e) || !e.message && !e.args || e.stack);
}
var Jt = !1, Yt = [], Xt = class e {
	options;
	_lastLog;
	_mockFn;
	constructor(e = {}) {
		let t = e.types || Vt;
		this.options = Gt({
			...e,
			defaults: { ...e.defaults },
			level: Zt(e.level, t),
			reporters: [...e.reporters || []]
		}, {
			types: Vt,
			throttle: 1e3,
			throttleMin: 5,
			formatOptions: {
				date: !0,
				colors: !1,
				compact: !0
			}
		});
		for (let e in t) {
			let n = {
				type: e,
				...this.options.defaults,
				...t[e]
			};
			this[e] = this._wrapLogFn(n), this[e].raw = this._wrapLogFn(n, !0);
		}
		this.options.mockFn && this.mockTypes(), this._lastLog = {};
	}
	get level() {
		return this.options.level;
	}
	set level(e) {
		this.options.level = Zt(e, this.options.types, this.options.level);
	}
	prompt(e, t) {
		if (!this.options.prompt) throw Error("prompt is not supported!");
		return this.options.prompt(e, t);
	}
	create(t) {
		let n = new e({
			...this.options,
			...t
		});
		return this._mockFn && n.mockTypes(this._mockFn), n;
	}
	withDefaults(e) {
		return this.create({
			...this.options,
			defaults: {
				...this.options.defaults,
				...e
			}
		});
	}
	withTag(e) {
		return this.withDefaults({ tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + e : e });
	}
	addReporter(e) {
		return this.options.reporters.push(e), this;
	}
	removeReporter(e) {
		if (e) {
			let t = this.options.reporters.indexOf(e);
			if (t !== -1) return this.options.reporters.splice(t, 1);
		} else this.options.reporters.splice(0);
		return this;
	}
	setReporters(e) {
		return this.options.reporters = Array.isArray(e) ? e : [e], this;
	}
	wrapAll() {
		this.wrapConsole(), this.wrapStd();
	}
	restoreAll() {
		this.restoreConsole(), this.restoreStd();
	}
	wrapConsole() {
		for (let e in this.options.types) console["__" + e] || (console["__" + e] = console[e]), console[e] = this[e].raw;
	}
	restoreConsole() {
		for (let e in this.options.types) console["__" + e] && (console[e] = console["__" + e], delete console["__" + e]);
	}
	wrapStd() {
		this._wrapStream(this.options.stdout, "log"), this._wrapStream(this.options.stderr, "log");
	}
	_wrapStream(e, t) {
		e && (e.__write ||= e.write, e.write = (e) => {
			this[t].raw(String(e).trim());
		});
	}
	restoreStd() {
		this._restoreStream(this.options.stdout), this._restoreStream(this.options.stderr);
	}
	_restoreStream(e) {
		e && e.__write && (e.write = e.__write, delete e.__write);
	}
	pauseLogs() {
		Jt = !0;
	}
	resumeLogs() {
		Jt = !1;
		let e = Yt.splice(0);
		for (let t of e) t[0]._logFn(t[1], t[2]);
	}
	mockTypes(e) {
		let t = e || this.options.mockFn;
		if (this._mockFn = t, typeof t == "function") for (let e in this.options.types) this[e] = t(e, this.options.types[e]) || this[e], this[e].raw = this[e];
	}
	_wrapLogFn(e, t) {
		return (...n) => {
			if (Jt) Yt.push([
				this,
				e,
				n,
				t
			]);
			else return this._logFn(e, n, t);
		};
	}
	_logFn(e, t, n) {
		if ((e.level || 0) > this.level) return !1;
		let r = {
			date: /* @__PURE__ */ new Date(),
			args: [],
			...e,
			level: Zt(e.level, this.options.types)
		};
		!n && t.length === 1 && qt(t[0]) ? Object.assign(r, t[0]) : r.args = [...t], r.message && (r.args.unshift(r.message), delete r.message), r.additional && (Array.isArray(r.additional) || (r.additional = r.additional.split("\n")), r.args.push("\n" + r.additional.join("\n")), delete r.additional), r.type = typeof r.type == "string" ? r.type.toLowerCase() : "log", r.tag = typeof r.tag == "string" ? r.tag : "";
		let i = (e = !1) => {
			let t = (this._lastLog.count || 0) - this.options.throttleMin;
			if (this._lastLog.object && t > 0) {
				let e = [...this._lastLog.object.args];
				t > 1 && e.push(`(repeated ${t} times)`), this._log({
					...this._lastLog.object,
					args: e
				}), this._lastLog.count = 1;
			}
			e && (this._lastLog.object = r, this._log(r));
		};
		clearTimeout(this._lastLog.timeout);
		let a = this._lastLog.time && r.date ? r.date.getTime() - this._lastLog.time.getTime() : 0;
		if (this._lastLog.time = r.date, a < this.options.throttle) try {
			let e = JSON.stringify([
				r.type,
				r.tag,
				r.args
			]), t = this._lastLog.serialized === e;
			if (this._lastLog.serialized = e, t && (this._lastLog.count = (this._lastLog.count || 0) + 1, this._lastLog.count > this.options.throttleMin)) {
				this._lastLog.timeout = setTimeout(i, this.options.throttle);
				return;
			}
		} catch {}
		i(!0);
	}
	_log(e) {
		for (let t of this.options.reporters) t.log(e, { options: this.options });
	}
};
function Zt(e, t = {}, n = 3) {
	return e === void 0 ? n : typeof e == "number" ? e : t[e] && t[e].level !== void 0 ? t[e].level : n;
}
Xt.prototype.add = Xt.prototype.addReporter, Xt.prototype.remove = Xt.prototype.removeReporter, Xt.prototype.clear = Xt.prototype.removeReporter, Xt.prototype.withScope = Xt.prototype.withTag, Xt.prototype.mock = Xt.prototype.mockTypes, Xt.prototype.pause = Xt.prototype.pauseLogs, Xt.prototype.resume = Xt.prototype.resumeLogs;
function Qt(e = {}) {
	return new Xt(e);
}
function $t(e, t) {
	let r = process.cwd() + n.sep;
	return e.split("\n").splice(t.split("\n").length).map((e) => e.trim().replace("file://", "").replace(r, ""));
}
function en(e, t) {
	return (t.__write || t.write).call(t, e);
}
var tn = (e) => e ? `[${e}]` : "", nn = class {
	formatStack(e, t, n) {
		let r = "  ".repeat((n?.errorLevel || 0) + 1);
		return r + $t(e, t).join(`
${r}`);
	}
	formatError(e, t) {
		let r = e.message ?? (0, n.formatWithOptions)(t, e), i = e.stack ? this.formatStack(e.stack, r, t) : "", a = t?.errorLevel || 0, o = a > 0 ? `${"  ".repeat(a)}[cause]: ` : "", s = e.cause ? "\n\n" + this.formatError(e.cause, {
			...t,
			errorLevel: a + 1
		}) : "";
		return o + r + "\n" + i + s;
	}
	formatArgs(e, t) {
		let r = e.map((e) => e && typeof e.stack == "string" ? this.formatError(e, t) : e);
		return (0, n.formatWithOptions)(t, ...r);
	}
	formatDate(e, t) {
		return t.date ? e.toLocaleTimeString() : "";
	}
	filterAndJoin(e) {
		return e.filter(Boolean).join(" ");
	}
	formatLogObj(e, t) {
		let n = this.formatArgs(e.args, t);
		return e.type === "box" ? "\n" + [
			tn(e.tag),
			e.title && e.title,
			...n.split("\n")
		].filter(Boolean).map((e) => " > " + e).join("\n") + "\n" : this.filterAndJoin([
			tn(e.type),
			tn(e.tag),
			n
		]);
	}
	log(e, t) {
		return en(this.formatLogObj(e, {
			columns: t.options.stdout.columns || 0,
			...t.options.formatOptions
		}) + "\n", e.level < 2 ? t.options.stderr || process.stderr : t.options.stdout || process.stdout);
	}
}, { env: rn = {}, argv: an = [], platform: on = "" } = typeof process > "u" ? {} : process, sn = "NO_COLOR" in rn || an.includes("--no-color"), cn = "FORCE_COLOR" in rn || an.includes("--color"), ln = on === "win32", un = rn.TERM === "dumb", dn = n && n.isatty && n.isatty(1) && rn.TERM && !un, fn = "CI" in rn && ("GITHUB_ACTIONS" in rn || "GITLAB_CI" in rn || "CIRCLECI" in rn), pn = !sn && (cn || ln && !un || dn || fn);
function mn(e, t, n, r, i = t.slice(0, Math.max(0, e)) + r, a = t.slice(Math.max(0, e + n.length)), o = a.indexOf(n)) {
	return i + (o < 0 ? a : mn(o, a, n, r));
}
function hn(e, t, n, r, i) {
	return e < 0 ? n + t + r : n + mn(e, t, r, i) + r;
}
function gn(e, t, n = e, r = e.length + 1) {
	return (i) => i || i !== "" && i !== void 0 ? hn(("" + i).indexOf(t, r), i, e, t, n) : "";
}
function X(e, t, n) {
	return gn(`\x1B[${e}m`, `\x1B[${t}m`, n);
}
var _n = {
	reset: X(0, 0),
	bold: X(1, 22, "\x1B[22m\x1B[1m"),
	dim: X(2, 22, "\x1B[22m\x1B[2m"),
	italic: X(3, 23),
	underline: X(4, 24),
	inverse: X(7, 27),
	hidden: X(8, 28),
	strikethrough: X(9, 29),
	black: X(30, 39),
	red: X(31, 39),
	green: X(32, 39),
	yellow: X(33, 39),
	blue: X(34, 39),
	magenta: X(35, 39),
	cyan: X(36, 39),
	white: X(37, 39),
	gray: X(90, 39),
	bgBlack: X(40, 49),
	bgRed: X(41, 49),
	bgGreen: X(42, 49),
	bgYellow: X(43, 49),
	bgBlue: X(44, 49),
	bgMagenta: X(45, 49),
	bgCyan: X(46, 49),
	bgWhite: X(47, 49),
	blackBright: X(90, 39),
	redBright: X(91, 39),
	greenBright: X(92, 39),
	yellowBright: X(93, 39),
	blueBright: X(94, 39),
	magentaBright: X(95, 39),
	cyanBright: X(96, 39),
	whiteBright: X(97, 39),
	bgBlackBright: X(100, 49),
	bgRedBright: X(101, 49),
	bgGreenBright: X(102, 49),
	bgYellowBright: X(103, 49),
	bgBlueBright: X(104, 49),
	bgMagentaBright: X(105, 49),
	bgCyanBright: X(106, 49),
	bgWhiteBright: X(107, 49)
};
function vn(e = pn) {
	return e ? _n : Object.fromEntries(Object.keys(_n).map((e) => [e, String]));
}
var yn = vn();
function bn(e, t = "reset") {
	return yn[e] || yn[t];
}
var xn = [String.raw`[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d\/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?\u0007)`, String.raw`(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))`].join("|");
function Sn(e) {
	return e.replace(new RegExp(xn, "g"), "");
}
var Cn = {
	solid: {
		tl: "┌",
		tr: "┐",
		bl: "└",
		br: "┘",
		h: "─",
		v: "│"
	},
	double: {
		tl: "╔",
		tr: "╗",
		bl: "╚",
		br: "╝",
		h: "═",
		v: "║"
	},
	doubleSingle: {
		tl: "╓",
		tr: "╖",
		bl: "╙",
		br: "╜",
		h: "─",
		v: "║"
	},
	doubleSingleRounded: {
		tl: "╭",
		tr: "╮",
		bl: "╰",
		br: "╯",
		h: "─",
		v: "║"
	},
	singleThick: {
		tl: "┏",
		tr: "┓",
		bl: "┗",
		br: "┛",
		h: "━",
		v: "┃"
	},
	singleDouble: {
		tl: "╒",
		tr: "╕",
		bl: "╘",
		br: "╛",
		h: "═",
		v: "│"
	},
	singleDoubleRounded: {
		tl: "╭",
		tr: "╮",
		bl: "╰",
		br: "╯",
		h: "═",
		v: "│"
	},
	rounded: {
		tl: "╭",
		tr: "╮",
		bl: "╰",
		br: "╯",
		h: "─",
		v: "│"
	}
}, wn = {
	borderColor: "white",
	borderStyle: "rounded",
	valign: "center",
	padding: 2,
	marginLeft: 1,
	marginTop: 1,
	marginBottom: 1
};
function Tn(e, t = {}) {
	let n = {
		...t,
		style: {
			...wn,
			...t.style
		}
	}, r = e.split("\n"), i = [], a = bn(n.style.borderColor), o = { ...typeof n.style.borderStyle == "string" ? Cn[n.style.borderStyle] || Cn.solid : n.style.borderStyle };
	if (a) for (let e in o) o[e] = a(o[e]);
	let s = n.style.padding % 2 == 0 ? n.style.padding : n.style.padding + 1, c = r.length + s, l = Math.max(...r.map((e) => Sn(e).length), n.title ? Sn(n.title).length : 0) + s, u = l + s, d = n.style.marginLeft > 0 ? " ".repeat(n.style.marginLeft) : "";
	if (n.style.marginTop > 0 && i.push("".repeat(n.style.marginTop)), n.title) {
		let e = a ? a(n.title) : n.title, t = o.h.repeat(Math.floor((l - Sn(n.title).length) / 2)), r = o.h.repeat(l - Sn(n.title).length - Sn(t).length + s);
		i.push(`${d}${o.tl}${t}${e}${r}${o.tr}`);
	} else i.push(`${d}${o.tl}${o.h.repeat(u)}${o.tr}`);
	let f = n.style.valign === "center" ? Math.floor((c - r.length) / 2) : n.style.valign === "top" ? c - r.length - s : c - r.length;
	for (let e = 0; e < c; e++) if (e < f || e >= f + r.length) i.push(`${d}${o.v}${" ".repeat(u)}${o.v}`);
	else {
		let t = r[e - f], n = " ".repeat(s), a = " ".repeat(l - Sn(t).length);
		i.push(`${d}${o.v}${n}${t}${a}${o.v}`);
	}
	return i.push(`${d}${o.bl}${o.h.repeat(u)}${o.br}`), n.style.marginBottom > 0 && i.push("".repeat(n.style.marginBottom)), i.join("\n");
}
var En = Object.create(null), Dn = (e) => globalThis.process?.env || {
	BASE_URL: "/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1
}, On = new Proxy(En, {
	get(e, t) {
		return Dn()[t] ?? En[t];
	},
	has(e, t) {
		return t in Dn() || t in En;
	},
	set(e, t, n) {
		let r = Dn(!0);
		return r[t] = n, !0;
	},
	deleteProperty(e, t) {
		if (!t) return !1;
		let n = Dn(!0);
		return delete n[t], !0;
	},
	ownKeys() {
		let e = Dn(!0);
		return Object.keys(e);
	}
}), kn = typeof process < "u" && process.env && process.env.NODE_ENV || "", An = [
	["APPVEYOR"],
	[
		"AWS_AMPLIFY",
		"AWS_APP_ID",
		{ ci: !0 }
	],
	["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],
	["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],
	["APPCIRCLE", "AC_APPCIRCLE"],
	["BAMBOO", "bamboo_planKey"],
	["BITBUCKET", "BITBUCKET_COMMIT"],
	["BITRISE", "BITRISE_IO"],
	["BUDDY", "BUDDY_WORKSPACE_ID"],
	["BUILDKITE"],
	["CIRCLE", "CIRCLECI"],
	["CIRRUS", "CIRRUS_CI"],
	[
		"CLOUDFLARE_PAGES",
		"CF_PAGES",
		{ ci: !0 }
	],
	["CODEBUILD", "CODEBUILD_BUILD_ARN"],
	["CODEFRESH", "CF_BUILD_ID"],
	["DRONE"],
	["DRONE", "DRONE_BUILD_EVENT"],
	["DSARI"],
	["GITHUB_ACTIONS"],
	["GITLAB", "GITLAB_CI"],
	["GITLAB", "CI_MERGE_REQUEST_ID"],
	["GOCD", "GO_PIPELINE_LABEL"],
	["LAYERCI"],
	["HUDSON", "HUDSON_URL"],
	["JENKINS", "JENKINS_URL"],
	["MAGNUM"],
	["NETLIFY"],
	[
		"NETLIFY",
		"NETLIFY_LOCAL",
		{ ci: !1 }
	],
	["NEVERCODE"],
	["RENDER"],
	["SAIL", "SAILCI"],
	["SEMAPHORE"],
	["SCREWDRIVER"],
	["SHIPPABLE"],
	["SOLANO", "TDDIUM"],
	["STRIDER"],
	["TEAMCITY", "TEAMCITY_VERSION"],
	["TRAVIS"],
	["VERCEL", "NOW_BUILDER"],
	[
		"VERCEL",
		"VERCEL",
		{ ci: !1 }
	],
	[
		"VERCEL",
		"VERCEL_ENV",
		{ ci: !1 }
	],
	["APPCENTER", "APPCENTER_BUILD_ID"],
	[
		"CODESANDBOX",
		"CODESANDBOX_SSE",
		{ ci: !1 }
	],
	[
		"CODESANDBOX",
		"CODESANDBOX_HOST",
		{ ci: !1 }
	],
	["STACKBLITZ"],
	["STORMKIT"],
	["CLEAVR"],
	["ZEABUR"],
	[
		"CODESPHERE",
		"CODESPHERE_APP_ID",
		{ ci: !0 }
	],
	["RAILWAY", "RAILWAY_PROJECT_ID"],
	["RAILWAY", "RAILWAY_SERVICE_ID"],
	["DENO-DEPLOY", "DENO_DEPLOYMENT_ID"],
	[
		"FIREBASE_APP_HOSTING",
		"FIREBASE_APP_HOSTING",
		{ ci: !0 }
	]
];
function jn() {
	if (globalThis.process?.env) for (let e of An) {
		let t = e[1] || e[0];
		if (globalThis.process?.env[t]) return {
			name: e[0].toLowerCase(),
			...e[2]
		};
	}
	return globalThis.process?.env?.SHELL === "/bin/jsh" && globalThis.process?.versions?.webcontainer ? {
		name: "stackblitz",
		ci: !1
	} : {
		name: "",
		ci: !1
	};
}
var Mn = jn();
Mn.name;
function Nn(e) {
	return e ? e !== "false" : !1;
}
var Pn = globalThis.process?.platform || "", Fn = Nn(On.CI) || Mn.ci !== !1, In = Nn(globalThis.process?.stdout && globalThis.process?.stdout.isTTY), Ln = Nn(On.DEBUG), Rn = kn === "test" || Nn(On.TEST);
On.MINIMAL;
var zn = /^win/i.test(Pn);
Nn(On.NO_COLOR) || Nn(On.FORCE_COLOR) || (In || zn) && On.TERM;
var Bn = (globalThis.process?.versions?.node || "").replace(/^v/, "") || null;
Number(Bn?.split(".")[0]);
var Vn = globalThis.process || Object.create(null), Hn = { versions: {} };
new Proxy(Vn, { get(e, t) {
	if (t === "env") return On;
	if (t in e) return e[t];
	if (t in Hn) return Hn[t];
} });
var Un = globalThis.process?.release?.name === "node", Wn = !!globalThis.Bun || !!globalThis.process?.versions?.bun, Gn = !!globalThis.Deno, Kn = !!globalThis.fastly, qn = !!globalThis.Netlify, Jn = !!globalThis.EdgeRuntime, Yn = globalThis.navigator?.userAgent === "Cloudflare-Workers", Xn = [
	[qn, "netlify"],
	[Jn, "edge-light"],
	[Yn, "workerd"],
	[Kn, "fastly"],
	[Gn, "deno"],
	[Wn, "bun"],
	[Un, "node"]
];
function Zn() {
	let e = Xn.find((e) => e[0]);
	if (e) return { name: e[1] };
}
Zn()?.name;
function Qn({ onlyFirst: e = !1 } = {}) {
	return RegExp("[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))", e ? void 0 : "g");
}
var $n = Qn();
function er(e) {
	if (typeof e != "string") throw TypeError(`Expected a \`string\`, got \`${typeof e}\``);
	return e.replace($n, "");
}
function tr(e) {
	return e === 161 || e === 164 || e === 167 || e === 168 || e === 170 || e === 173 || e === 174 || e >= 176 && e <= 180 || e >= 182 && e <= 186 || e >= 188 && e <= 191 || e === 198 || e === 208 || e === 215 || e === 216 || e >= 222 && e <= 225 || e === 230 || e >= 232 && e <= 234 || e === 236 || e === 237 || e === 240 || e === 242 || e === 243 || e >= 247 && e <= 250 || e === 252 || e === 254 || e === 257 || e === 273 || e === 275 || e === 283 || e === 294 || e === 295 || e === 299 || e >= 305 && e <= 307 || e === 312 || e >= 319 && e <= 322 || e === 324 || e >= 328 && e <= 331 || e === 333 || e === 338 || e === 339 || e === 358 || e === 359 || e === 363 || e === 462 || e === 464 || e === 466 || e === 468 || e === 470 || e === 472 || e === 474 || e === 476 || e === 593 || e === 609 || e === 708 || e === 711 || e >= 713 && e <= 715 || e === 717 || e === 720 || e >= 728 && e <= 731 || e === 733 || e === 735 || e >= 768 && e <= 879 || e >= 913 && e <= 929 || e >= 931 && e <= 937 || e >= 945 && e <= 961 || e >= 963 && e <= 969 || e === 1025 || e >= 1040 && e <= 1103 || e === 1105 || e === 8208 || e >= 8211 && e <= 8214 || e === 8216 || e === 8217 || e === 8220 || e === 8221 || e >= 8224 && e <= 8226 || e >= 8228 && e <= 8231 || e === 8240 || e === 8242 || e === 8243 || e === 8245 || e === 8251 || e === 8254 || e === 8308 || e === 8319 || e >= 8321 && e <= 8324 || e === 8364 || e === 8451 || e === 8453 || e === 8457 || e === 8467 || e === 8470 || e === 8481 || e === 8482 || e === 8486 || e === 8491 || e === 8531 || e === 8532 || e >= 8539 && e <= 8542 || e >= 8544 && e <= 8555 || e >= 8560 && e <= 8569 || e === 8585 || e >= 8592 && e <= 8601 || e === 8632 || e === 8633 || e === 8658 || e === 8660 || e === 8679 || e === 8704 || e === 8706 || e === 8707 || e === 8711 || e === 8712 || e === 8715 || e === 8719 || e === 8721 || e === 8725 || e === 8730 || e >= 8733 && e <= 8736 || e === 8739 || e === 8741 || e >= 8743 && e <= 8748 || e === 8750 || e >= 8756 && e <= 8759 || e === 8764 || e === 8765 || e === 8776 || e === 8780 || e === 8786 || e === 8800 || e === 8801 || e >= 8804 && e <= 8807 || e === 8810 || e === 8811 || e === 8814 || e === 8815 || e === 8834 || e === 8835 || e === 8838 || e === 8839 || e === 8853 || e === 8857 || e === 8869 || e === 8895 || e === 8978 || e >= 9312 && e <= 9449 || e >= 9451 && e <= 9547 || e >= 9552 && e <= 9587 || e >= 9600 && e <= 9615 || e >= 9618 && e <= 9621 || e === 9632 || e === 9633 || e >= 9635 && e <= 9641 || e === 9650 || e === 9651 || e === 9654 || e === 9655 || e === 9660 || e === 9661 || e === 9664 || e === 9665 || e >= 9670 && e <= 9672 || e === 9675 || e >= 9678 && e <= 9681 || e >= 9698 && e <= 9701 || e === 9711 || e === 9733 || e === 9734 || e === 9737 || e === 9742 || e === 9743 || e === 9756 || e === 9758 || e === 9792 || e === 9794 || e === 9824 || e === 9825 || e >= 9827 && e <= 9829 || e >= 9831 && e <= 9834 || e === 9836 || e === 9837 || e === 9839 || e === 9886 || e === 9887 || e === 9919 || e >= 9926 && e <= 9933 || e >= 9935 && e <= 9939 || e >= 9941 && e <= 9953 || e === 9955 || e === 9960 || e === 9961 || e >= 9963 && e <= 9969 || e === 9972 || e >= 9974 && e <= 9977 || e === 9979 || e === 9980 || e === 9982 || e === 9983 || e === 10045 || e >= 10102 && e <= 10111 || e >= 11094 && e <= 11097 || e >= 12872 && e <= 12879 || e >= 57344 && e <= 63743 || e >= 65024 && e <= 65039 || e === 65533 || e >= 127232 && e <= 127242 || e >= 127248 && e <= 127277 || e >= 127280 && e <= 127337 || e >= 127344 && e <= 127373 || e === 127375 || e === 127376 || e >= 127387 && e <= 127404 || e >= 917760 && e <= 917999 || e >= 983040 && e <= 1048573 || e >= 1048576 && e <= 1114109;
}
function nr(e) {
	return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function rr(e) {
	return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101631 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129673 || e >= 129679 && e <= 129734 || e >= 129742 && e <= 129756 || e >= 129759 && e <= 129769 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
function ir(e) {
	if (!Number.isSafeInteger(e)) throw TypeError(`Expected a code point, got \`${typeof e}\`.`);
}
function ar(e, { ambiguousAsWide: t = !1 } = {}) {
	return ir(e), nr(e) || rr(e) || t && tr(e) ? 2 : 1;
}
var or = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g, sr = globalThis.Intl?.Segmenter ? new Intl.Segmenter() : { segment: (e) => e.split("") }, cr = /^\p{Default_Ignorable_Code_Point}$/u;
function lr(e, t = {}) {
	if (typeof e != "string" || e.length === 0) return 0;
	let { ambiguousIsNarrow: n = !0, countAnsiEscapeCodes: r = !1 } = t;
	if (r || (e = er(e)), e.length === 0) return 0;
	let i = 0, a = { ambiguousAsWide: !n };
	for (let { segment: t } of sr.segment(e)) {
		let e = t.codePointAt(0);
		e <= 31 || e >= 127 && e <= 159 || e >= 8203 && e <= 8207 || e === 65279 || e >= 768 && e <= 879 || e >= 6832 && e <= 6911 || e >= 7616 && e <= 7679 || e >= 8400 && e <= 8447 || e >= 65056 && e <= 65071 || e >= 55296 && e <= 57343 || e >= 65024 && e <= 65039 || cr.test(t) || (or().test(t) ? i += 2 : i += ar(e, a));
	}
	return i;
}
function ur() {
	let { env: e } = n.default, { TERM: t, TERM_PROGRAM: r } = e;
	return n.default.platform === "win32" ? !!e.WT_SESSION || !!e.TERMINUS_SUBLIME || e.ConEmuTask === "{cmd::Cmder}" || r === "Terminus-Sublime" || r === "vscode" || t === "xterm-256color" || t === "alacritty" || t === "rxvt-unicode" || t === "rxvt-unicode-256color" || e.TERMINAL_EMULATOR === "JetBrains-JediTerm" : t !== "linux";
}
var dr = {
	info: "cyan",
	fail: "red",
	success: "green",
	ready: "green",
	start: "magenta"
}, fr = {
	0: "red",
	1: "yellow"
}, pr = ur(), mr = (e, t) => pr ? e : t, hr = {
	error: mr("✖", "×"),
	fatal: mr("✖", "×"),
	ready: mr("✔", "√"),
	warn: mr("⚠", "‼"),
	info: mr("ℹ", "i"),
	success: mr("✔", "√"),
	debug: mr("⚙", "D"),
	trace: mr("→", "→"),
	fail: mr("✖", "×"),
	start: mr("◐", "o"),
	log: ""
};
function gr(e) {
	return typeof Intl != "object" || !Intl.Segmenter ? Sn(e).length : lr(e);
}
var _r = class extends nn {
	formatStack(e, t, n) {
		let r = "  ".repeat((n?.errorLevel || 0) + 1);
		return `
${r}` + $t(e, t).map((e) => "  " + e.replace(/^at +/, (e) => yn.gray(e)).replace(/\((.+)\)/, (e, t) => `(${yn.cyan(t)})`)).join(`
${r}`);
	}
	formatType(e, t, n) {
		let r = dr[e.type] || fr[e.level] || "gray";
		if (t) return br(r)(yn.black(` ${e.type.toUpperCase()} `));
		let i = typeof hr[e.type] == "string" ? hr[e.type] : e.icon || e.type;
		return i ? yr(r)(i) : "";
	}
	formatLogObj(e, t) {
		let [n, ...r] = this.formatArgs(e.args, t).split("\n");
		if (e.type === "box") return Tn(vr(n + (r.length > 0 ? "\n" + r.join("\n") : "")), {
			title: e.title ? vr(e.title) : void 0,
			style: e.style
		});
		let i = this.formatDate(e.date, t), a = i && yn.gray(i), o = e.badge ?? e.level < 2, s = this.formatType(e, o, t), c = e.tag ? yn.gray(e.tag) : "", l, u = this.filterAndJoin([s, vr(n)]), d = this.filterAndJoin(t.columns ? [c, a] : [c]), f = (t.columns || 0) - gr(u) - gr(d) - 2;
		if (l = f > 0 && (t.columns || 0) >= 80 ? u + " ".repeat(f) + d : (d ? `${yn.gray(`[${d}]`)} ` : "") + u, l += vr(r.length > 0 ? "\n" + r.join("\n") : ""), e.type === "trace") {
			let t = /* @__PURE__ */ Error("Trace: " + e.message);
			l += this.formatStack(t.stack || "", t.message);
		}
		return o ? "\n" + l + "\n" : l;
	}
};
function vr(e) {
	return e.replace(/`([^`]+)`/gm, (e, t) => yn.cyan(t)).replace(/\s+_([^_]+)_\s+/gm, (e, t) => ` ${yn.underline(t)} `);
}
function yr(e = "white") {
	return yn[e] || yn.white;
}
function br(e = "bgWhite") {
	return yn[`bg${e[0].toUpperCase()}${e.slice(1)}`] || yn.bgWhite;
}
function xr(e = {}) {
	let t = Sr();
	return process.env.CONSOLA_LEVEL && (t = Number.parseInt(process.env.CONSOLA_LEVEL) ?? t), Qt({
		level: t,
		defaults: { level: t },
		stdout: process.stdout,
		stderr: process.stderr,
		prompt: (...e) => import("./prompt-DkftHXS7-BdLGeRRA.mjs").then((t) => t.prompt(...e)),
		reporters: e.reporters || [e.fancy ?? !(Fn || Rn) ? new _r() : new nn()],
		...e
	});
}
function Sr() {
	return Ln ? Bt.debug : Rn ? Bt.warn : Bt.info;
}
xr(), process.env.ROLLDOWN_TEST ? Cr() : xr({ formatOptions: { date: !1 } });
function Cr() {
	let e = [
		"silent",
		"fatal",
		"error",
		"warn",
		"log",
		"info",
		"success",
		"fail",
		"ready",
		"start",
		"box",
		"debug",
		"trace",
		"verbose"
	], t = Object.create(null);
	for (let n of e) t[n] = (...e) => console.log(...e);
	return t;
}
m();
// node_modules/rolldown/dist/shared/watch-DCbIzCTu.mjs
var wr = [];
wr.push("SIGHUP", "SIGINT", "SIGTERM"), process.platform !== "win32" && wr.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT"), process.platform === "linux" && wr.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
var Tr = (e) => !!e && typeof e == "object" && typeof e.removeListener == "function" && typeof e.emit == "function" && typeof e.reallyExit == "function" && typeof e.listeners == "function" && typeof e.kill == "function" && typeof e.pid == "number" && typeof e.on == "function", Er = Symbol.for("signal-exit emitter"), Dr = globalThis, Or = Object.defineProperty.bind(Object), kr = class {
	emitted = {
		afterExit: !1,
		exit: !1
	};
	listeners = {
		afterExit: [],
		exit: []
	};
	count = 0;
	id = Math.random();
	constructor() {
		if (Dr[Er]) return Dr[Er];
		Or(Dr, Er, {
			value: this,
			writable: !1,
			enumerable: !1,
			configurable: !1
		});
	}
	on(e, t) {
		this.listeners[e].push(t);
	}
	removeListener(e, t) {
		let n = this.listeners[e], r = n.indexOf(t);
		/* c8 ignore start */
		r !== -1 && 
		/* c8 ignore stop */
		(r === 0 && n.length === 1 ? n.length = 0 : n.splice(r, 1));
	}
	emit(e, t, n) {
		if (this.emitted[e]) return !1;
		this.emitted[e] = !0;
		let r = !1;
		for (let i of this.listeners[e]) r = i(t, n) === !0 || r;
		return e === "exit" && (r = this.emit("afterExit", t, n) || r), r;
	}
}, Ar = class {}, jr = (e) => ({
	onExit(t, n) {
		return e.onExit(t, n);
	},
	load() {
		return e.load();
	},
	unload() {
		return e.unload();
	}
}), Mr = class extends Ar {
	onExit() {
		return () => {};
	}
	load() {}
	unload() {}
}, Nr = class extends Ar {
	/* c8 ignore start */
	#e = Pr.platform === "win32" ? "SIGINT" : "SIGHUP";
	/* c8 ignore stop */
	#t = new kr();
	#n;
	#r;
	#i;
	#a = {};
	#o = !1;
	constructor(e) {
		super(), this.#n = e, this.#a = {};
		for (let t of wr) this.#a[t] = () => {
			let n = this.#n.listeners(t), { count: r } = this.#t, i = e;
			/* c8 ignore stop */
			if (typeof i.__signal_exit_emitter__ == "object" && typeof i.__signal_exit_emitter__.count == "number" && (r += i.__signal_exit_emitter__.count), n.length === r) {
				this.unload();
				let n = this.#t.emit("exit", null, t), r = t === "SIGHUP" ? this.#e : t;
				n || e.kill(e.pid, r);
			}
		};
		this.#i = e.reallyExit, this.#r = e.emit;
	}
	onExit(e, t) {
		/* c8 ignore start */
		if (!Tr(this.#n)) return () => {};
		/* c8 ignore stop */
		this.#o === !1 && this.load();
		let n = t?.alwaysLast ? "afterExit" : "exit";
		return this.#t.on(n, e), () => {
			this.#t.removeListener(n, e), this.#t.listeners.exit.length === 0 && this.#t.listeners.afterExit.length === 0 && this.unload();
		};
	}
	load() {
		if (!this.#o) {
			this.#o = !0, this.#t.count += 1;
			for (let e of wr) try {
				let t = this.#a[e];
				t && this.#n.on(e, t);
			} catch {}
			this.#n.emit = (e, ...t) => this.#c(e, ...t), this.#n.reallyExit = (e) => this.#s(e);
		}
	}
	unload() {
		this.#o && (this.#o = !1, wr.forEach((e) => {
			let t = this.#a[e];
			/* c8 ignore start */
			if (!t) throw Error("Listener not defined for signal: " + e);
			/* c8 ignore stop */
			try {
				this.#n.removeListener(e, t);
			} catch {}
			/* c8 ignore stop */
		}), this.#n.emit = this.#r, this.#n.reallyExit = this.#i, --this.#t.count);
	}
	#s(e) {
		return Tr(this.#n) ? 
		/* c8 ignore stop */
		(this.#n.exitCode = e || 0, this.#t.emit("exit", this.#n.exitCode, null), this.#i.call(this.#n, this.#n.exitCode)) : 0;
	}
	#c(e, ...t) {
		let n = this.#r;
		if (e === "exit" && Tr(this.#n)) {
			typeof t[0] == "number" && (this.#n.exitCode = t[0]);
			/* c8 ignore start */
			let r = n.call(this.#n, e, ...t);
			/* c8 ignore stop */
			return this.#t.emit("exit", this.#n.exitCode, null), r;
		}
		return n.call(this.#n, e, ...t);
	}
}, Pr = globalThis.process, { onExit: Fr, load: Ir, unload: Lr } = jr(Tr(Pr) ? new Nr(Pr) : new Mr());
function Rr(...e) {
	typeof process == "object" && process.versions.webcontainer ? process.on("exit", (t) => {
		e[0](t, null);
	}) : Fr(...e);
}
m(), m(), E([w], class extends x {
	bindingOutputs;
	constructor(e) {
		super(), this.bindingOutputs = e, e.mangleCache !== void 0 && (this.mangleCache = e.mangleCache);
	}
	get output() {
		return N(this.bindingOutputs).output;
	}
	__rolldown_external_memory_handle__(e) {
		let t = this.output.map((t) => t.__rolldown_external_memory_handle__(e));
		if (!t.every((e) => e.freed)) {
			let e = t.filter((e) => !e.freed).map((e) => e.reason).filter(Boolean);
			return {
				freed: !1,
				reason: `Failed to free ${e.length} item(s): ${e.join("; ")}`
			};
		}
		return { freed: !0 };
	}
}.prototype, "output", null), Symbol.asyncDispose ??= Symbol("Symbol.asyncDispose");
// node_modules/rolldown/dist/index.mjs
var zr = /* @__PURE__ */ d(m(), 1);
if (n.isMainThread) {
	let e = (0, zr.initTraceSubscriber)();
	e && Rr(() => {
		e.close();
	});
}
// node_modules/rolldown/dist/experimental-index.mjs
var Br = /* @__PURE__ */ d(m(), 1);
Br.BindingRebuildStrategy, Br.ResolverFactory, Br.getNativeMemoryStats, Br.isolatedDeclaration, Br.isolatedDeclarationSync, Br.moduleRunnerTransform, Br.resetNativeMemoryStats;
// node_modules/vite/dist/node/module-runner.js
var Vr = "sourceMa";
Vr += "ppingURL", typeof process < "u" && process.platform, async function() {}.constructor;
var Hr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ur = /* @__PURE__ */ new Uint8Array(64), Wr = /* @__PURE__ */ new Uint8Array(128);
for (let e = 0; e < Hr.length; e++) {
	let t = Hr.charCodeAt(e);
	Ur[e] = t, Wr[t] = e;
}
var Gr = new TextDecoder();
(() => {
	let e = typeof Buffer == "function" ? Buffer : void 0;
	return e && typeof e.from == "function" ? (t) => e.from(t, "base64").toString("utf-8") : (e) => Gr.decode(Uint8Array.from(atob(e), (e) => e.charCodeAt(0)));
})(), `${Vr}`;
var Kr = "vite-module-runner:import-meta-resolve/v1/";
`${JSON.stringify(Kr)}${JSON.stringify(Kr)}`, new Proxy({}, { get(e, t) {
	throw Error(`[module runner] Dynamic access of "import.meta.env" is not supported. Please, use "import.meta.env.${String(t)}" instead.`);
} }), Error.prepareStackTrace;
// node_modules/vite/dist/node/chunks/node.js
var qr = Object.create, Jr = Object.defineProperty, Yr = Object.getOwnPropertyDescriptor, Xr = Object.getOwnPropertyNames, Zr = Object.getPrototypeOf, Qr = Object.prototype.hasOwnProperty, $r = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, Z = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), ei = (e, t) => {
	let n = {};
	for (var r in e) Jr(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Jr(n, Symbol.toStringTag, { value: "Module" }), n;
}, ti = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Xr(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !Qr.call(e, s) && s !== n && Jr(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Yr(t, s)) || r.enumerable
	});
	return e;
}, ni = (e, t, n) => (n = e == null ? {} : qr(Zr(e)), ti(t || !e || !e.__esModule || !Qr.call(e, "default") ? Jr(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), ri = (e) => Qr.call(e, "module.exports") ? e["module.exports"] : ti(Jr({}, "__esModule", { value: !0 }), e), Q = /* @__PURE__ */ (0, n.createRequire)(import.meta.url);
Math.random().toString(36).slice(2);
var ii = /* @__PURE__ */ Z(((e, t) => {
	let n = process || {}, r = n.argv || [], i = n.env || {}, a = !(i.NO_COLOR || r.includes("--no-color")) && (!!i.FORCE_COLOR || r.includes("--color") || n.platform === "win32" || (n.stdout || {}).isTTY && i.TERM !== "dumb" || !!i.CI), o = (e, t, n = e) => (r) => {
		let i = "" + r, a = i.indexOf(t, e.length);
		return ~a ? e + s(i, t, n, a) + t : e + i + t;
	}, s = (e, t, n, r) => {
		let i = "", a = 0;
		do
			i += e.substring(a, r) + n, a = r + t.length, r = e.indexOf(t, a);
		while (~r);
		return i + e.substring(a);
	}, c = (e = a) => {
		let t = e ? o : () => String;
		return {
			isColorSupported: e,
			reset: t("\x1B[0m", "\x1B[0m"),
			bold: t("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
			dim: t("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
			italic: t("\x1B[3m", "\x1B[23m"),
			underline: t("\x1B[4m", "\x1B[24m"),
			inverse: t("\x1B[7m", "\x1B[27m"),
			hidden: t("\x1B[8m", "\x1B[28m"),
			strikethrough: t("\x1B[9m", "\x1B[29m"),
			black: t("\x1B[30m", "\x1B[39m"),
			red: t("\x1B[31m", "\x1B[39m"),
			green: t("\x1B[32m", "\x1B[39m"),
			yellow: t("\x1B[33m", "\x1B[39m"),
			blue: t("\x1B[34m", "\x1B[39m"),
			magenta: t("\x1B[35m", "\x1B[39m"),
			cyan: t("\x1B[36m", "\x1B[39m"),
			white: t("\x1B[37m", "\x1B[39m"),
			gray: t("\x1B[90m", "\x1B[39m"),
			bgBlack: t("\x1B[40m", "\x1B[49m"),
			bgRed: t("\x1B[41m", "\x1B[49m"),
			bgGreen: t("\x1B[42m", "\x1B[49m"),
			bgYellow: t("\x1B[43m", "\x1B[49m"),
			bgBlue: t("\x1B[44m", "\x1B[49m"),
			bgMagenta: t("\x1B[45m", "\x1B[49m"),
			bgCyan: t("\x1B[46m", "\x1B[49m"),
			bgWhite: t("\x1B[47m", "\x1B[49m"),
			blackBright: t("\x1B[90m", "\x1B[39m"),
			redBright: t("\x1B[91m", "\x1B[39m"),
			greenBright: t("\x1B[92m", "\x1B[39m"),
			yellowBright: t("\x1B[93m", "\x1B[39m"),
			blueBright: t("\x1B[94m", "\x1B[39m"),
			magentaBright: t("\x1B[95m", "\x1B[39m"),
			cyanBright: t("\x1B[96m", "\x1B[39m"),
			whiteBright: t("\x1B[97m", "\x1B[39m"),
			bgBlackBright: t("\x1B[100m", "\x1B[49m"),
			bgRedBright: t("\x1B[101m", "\x1B[49m"),
			bgGreenBright: t("\x1B[102m", "\x1B[49m"),
			bgYellowBright: t("\x1B[103m", "\x1B[49m"),
			bgBlueBright: t("\x1B[104m", "\x1B[49m"),
			bgMagentaBright: t("\x1B[105m", "\x1B[49m"),
			bgCyanBright: t("\x1B[106m", "\x1B[49m"),
			bgWhiteBright: t("\x1B[107m", "\x1B[49m")
		};
	};
	t.exports = c(), t.exports.createColors = c;
})), ai = "vite-module-runner:import-meta-resolve/v1/";
`${JSON.stringify(ai)}${JSON.stringify(ai)}`;
var oi = "/@id/", si = "sourceMa";
si += "ppingURL";
var ci = typeof process < "u" && process.platform === "win32", li = /\\/g;
function ui(e) {
	return e.replace(li, "/");
}
var di = /* @__PURE__ */ ni(ii(), 1);
di.default.blue, di.default.magenta, di.default.green, di.default.gray;
var fi = [
	"browser",
	"module",
	"jsnext:main",
	"jsnext"
];
Object.freeze(fi), Object.freeze(fi.filter((e) => e !== "browser"));
var pi = [
	"module",
	"browser",
	"node",
	"development|production"
];
Object.freeze(pi.filter((e) => e !== "node")), Object.freeze(pi.filter((e) => e !== "browser"));
var mi = Object.freeze(["node", "module-sync"]), hi = [
	".mjs",
	".js",
	".mts",
	".ts",
	".jsx",
	".tsx",
	".json"
], gi = /\.(css|less|sass|scss|styl|stylus|pcss|postcss|sss)(?:$|\?)/, _i = "/@fs/", vi = "/@vite/client", yi = "/@vite/env", bi = (0, n.resolve)((0, n.fileURLToPath)(new URL("../../../src/node/constants.ts", "" + import.meta.url)), "../../.."), xi = (0, n.resolve)(bi, "dist/client/client.mjs"), Si = (0, n.resolve)(bi, "dist/client/bundledDevClient.mjs"), Ci = (0, n.resolve)(bi, "dist/client/env.mjs"), wi = n.default.dirname(xi), Ti = /* @__PURE__ */ "apng.bmp.png.jpe?g.jfif.pjpeg.pjp.gif.svg.ico.webp.avif.cur.jxl.mp4.webm.ogg.mp3.wav.flac.aac.opus.mov.m4a.vtt.woff2?.eot.ttf.otf.webmanifest.pdf.txt".split(".");
RegExp("\\.(?:" + Ti.join("|") + ")(\\?.*)?$", "i");
var Ei = 5173, Di = 4173, Oi = 4096, ki = /^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/, Ai = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ji = /* @__PURE__ */ new Uint8Array(64), Mi = /* @__PURE__ */ new Uint8Array(128);
for (let e = 0; e < Ai.length; e++) {
	let t = Ai.charCodeAt(e);
	ji[e] = t, Mi[t] = e;
}
function Ni(e) {
	return e instanceof Error ? e.stack || e.message : e;
}
function Pi(e, t) {
	let n = 0;
	for (let e = 0; e < t.length; e++) n = (n << 5) - n + t.charCodeAt(e), n |= 0;
	return e[Math.abs(n) % e.length];
}
function Fi(e, t) {
	let n = 0, r = 0, i = -1, a = 0;
	for (; n < e.length;) if (r < t.length && (t[r] === e[n] || t[r] === "*")) t[r] === "*" ? (i = r, a = n, r++) : (n++, r++);
	else if (i !== -1) r = i + 1, a++, n = a;
	else return !1;
	for (; r < t.length && t[r] === "*";) r++;
	return r === t.length;
}
function Ii(e) {
	return e >= 1e3 ? `${(e / 1e3).toFixed(1)}s` : `${e}ms`;
}
function Li(e, t, n, r, i, a, o) {
	let s = (r) => {
		let i, a, c, l, u = (...e) => {
			if (!u.enabled) return;
			let t = Date.now();
			u.diff = t - (i || t), u.prev = i, u.curr = t, i = t, e[0] = Ni(e[0]), typeof e[0] != "string" && e.unshift("%O");
			let n = 0;
			e[0] = e[0].replace(/%([a-z%])/gi, (t, r) => {
				if (t === "%%") return "%";
				n++;
				let i = s.formatters[r];
				return typeof i == "function" && (t = i.call(u, e[n]), e.splice(n, 1), n--), t;
			}), s.formatArgs.call(u, e), (u.log || s.log).apply(u, e);
		};
		function d(e, t = ":") {
			let n = s(this.namespace + t + e);
			return n.log = this.log, n;
		}
		return u.namespace = r, u.useColors = e, u.color = Pi(t, r), u.extend = d, u.log = n, Object.defineProperty(u, "enabled", {
			enumerable: !0,
			configurable: !1,
			get: () => a ?? (c !== s.namespaces && (c = s.namespaces, l = s.enabled(r)), l),
			set: (e) => {
				a = e;
			}
		}), o && o(u), u;
	};
	function c(e) {
		i(e), s.namespaces = e, s.names = [], s.skips = [];
		let t = e.trim().replace(/\s+/g, ",").split(",").filter(Boolean);
		for (let e of t) e[0] === "-" ? s.skips.push(e.slice(1)) : s.names.push(e);
	}
	function l() {
		let e = [...s.names, ...s.skips.map((e) => `-${e}`)].join(",");
		return s.enable(""), e;
	}
	function u(e) {
		for (let t of s.skips) if (Fi(e, t)) return !1;
		for (let t of s.names) if (Fi(e, t)) return !0;
		return !1;
	}
	return s.namespaces = "", s.formatters = {}, s.enable = c, s.disable = l, s.enabled = u, s.names = [], s.skips = [], s.selectColor = (e) => Pi(t, e), s.formatArgs = a, s.log = n, s.enable(r()), s;
}
var Ri = $r((() => {})), zi = /* @__PURE__ */ ei({
	createDebug: () => Zi,
	default: () => Qi,
	formatArgs: () => Wi,
	log: () => Bi,
	"module.exports": () => Zi
});
function Bi(...e) {
	process.stderr.write(`${(0, n.formatWithOptions)(Yi, ...e)}\n`);
}
function Vi() {
	return process.env.DEBUG || "";
}
function Hi(e) {
	e ? process.env.DEBUG = e : delete process.env.DEBUG;
}
function Ui() {
	return "colors" in Yi ? !!Yi.colors : (0, n.isatty)(process.stderr.fd);
}
function Wi(e) {
	let { namespace: t, useColors: n } = this;
	if (n) {
		let n = this.color, r = `\u001B[3${n < 8 ? n : `8;5;${n}`}`, i = `  ${r};1m${t} \u001B[0m`;
		e[0] = i + e[0].split("\n").join(`\n${i}`), e.push(`${r}m+${Xi(this.diff)}\u001B[0m`);
	} else e[0] = `${Gi()}${t} ${e[0]}`;
}
function Gi() {
	return Yi.hideDate ? "" : `${(/* @__PURE__ */ new Date()).toISOString()} `;
}
function Ki(e) {
	e.inspectOpts = Object.assign({}, Yi);
}
var qi, Ji, Yi, Xi, Zi, Qi, $i = $r((() => {
	Ri(), qi = (0, n.createRequire)(import.meta.url), Ji = process.stderr.getColorDepth && process.stderr.getColorDepth() > 2 ? [
		20,
		21,
		26,
		27,
		32,
		33,
		38,
		39,
		40,
		41,
		42,
		43,
		44,
		45,
		56,
		57,
		62,
		63,
		68,
		69,
		74,
		75,
		76,
		77,
		78,
		79,
		80,
		81,
		92,
		93,
		98,
		99,
		112,
		113,
		128,
		129,
		134,
		135,
		148,
		149,
		160,
		161,
		162,
		163,
		164,
		165,
		166,
		167,
		168,
		169,
		170,
		171,
		172,
		173,
		178,
		179,
		184,
		185,
		196,
		197,
		198,
		199,
		200,
		201,
		202,
		203,
		204,
		205,
		206,
		207,
		208,
		209,
		214,
		215,
		220,
		221
	] : [
		6,
		2,
		3,
		4,
		5,
		1
	], Yi = Object.keys(process.env).filter((e) => /^debug_/i.test(e)).reduce((e, t) => {
		let n = t.slice(6).toLowerCase().replace(/_([a-z])/g, (e, t) => t.toUpperCase()), r = process.env[t];
		return r = r === "null" ? null : /^yes|on|true|enabled$/i.test(r) ? !0 : !/^no|off|false|disabled$/i.test(r) && Number(r), e[n] = r, e;
	}, {});
	try {
		Xi = qi("ms");
	} catch {
		Xi = Ii;
	}
	Zi = Li(Ui(), Ji, Bi, Vi, Hi, Wi, Ki), Zi.inspectOpts = Yi, Zi.formatters.o = function(e) {
		return this.inspectOpts.colors = this.useColors, (0, n.inspect)(e, this.inspectOpts).split("\n").map((e) => e.trim()).join(" ");
	}, Zi.formatters.O = function(e) {
		return this.inspectOpts.colors = this.useColors, (0, n.inspect)(e, this.inspectOpts);
	}, Qi = Zi, Zi.default = Zi, Zi.debug = Zi;
}));
RegExp(`\\${n.win32.sep}`, "g"), new Set("break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield enum await implements package protected static interface private public arguments Infinity NaN undefined null true false eval uneval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Symbol Error EvalError InternalError RangeError ReferenceError SyntaxError TypeError URIError Number Math Date String RegExp Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array Map Set WeakMap WeakSet SIMD ArrayBuffer DataView JSON Promise Generator GeneratorFunction Reflect Proxy Intl".split(" ")).add(""), "isWellFormed" in String.prototype, $i();
var ea = "node:", ta = "bun:";
[
	...n.builtinModules.filter((e) => !e.includes(":")),
	RegExp(`^${ea}`),
	RegExp(`^${ta}`)
], n.default.dirname((0, n.fileURLToPath)(import.meta.url));
var na = process.env.VITE_DEBUG_FILTER, ra = process.env.DEBUG;
function $(e, t = {}) {
	let n = Qi(e), { onlyWhenFocused: r, depth: i } = t;
	i && n.inspectOpts && n.inspectOpts.depth == null && (n.inspectOpts.depth = t.depth);
	let a = n.enabled;
	if (a && r && (a = !!ra?.includes(typeof r == "string" ? r : e)), a) return (...e) => {
		(!na || e.some((e) => e?.includes?.(na))) && n(...e);
	};
}
function ia() {
	if (!xi.endsWith("client.mjs")) throw Error("cannot test case insensitive FS, CLIENT_ENTRY const doesn't contain client.mjs");
	if (!n.default.existsSync(xi)) throw Error("cannot test case insensitive FS, CLIENT_ENTRY does not point to an existing file: " + xi);
	return n.default.existsSync(xi.replace("client.mjs", "cLiEnT.mjs"));
}
ia();
function aa(e) {
	return n.default.posix.normalize(ci ? ui(e) : e);
}
if (RegExp(`^(?:${[
	_i,
	oi,
	vi,
	yi
].join("|")})`), ci || n.default.realpathSync.native, process.versions.pnp) try {
	(0, n.createRequire)(import.meta.url)("pnpapi");
} catch {}
var oa = /* @__PURE__ */ Z(((e, t) => {
	var n = /["'&<>]/;
	t.exports = r;
	function r(e) {
		var t = "" + e, r = n.exec(t);
		if (!r) return t;
		var i, a = "", o = 0, s = 0;
		for (o = r.index; o < t.length; o++) {
			switch (t.charCodeAt(o)) {
				case 34:
					i = "&quot;";
					break;
				case 38:
					i = "&amp;";
					break;
				case 39:
					i = "&#39;";
					break;
				case 60:
					i = "&lt;";
					break;
				case 62:
					i = "&gt;";
					break;
				default: continue;
			}
			s !== o && (a += t.substring(s, o)), s = o + 1, a += i;
		}
		return s === o ? a : a + t.substring(s, o);
	}
}));
(/* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return e.replace(/\\\$/g, "$");
	}
	function r(e, t, n) {
		let r = {
			...n,
			...t
		}, i = /(?<!\\)\${([^{}]+)}|(?<!\\)\$([A-Za-z_][A-Za-z0-9_]*)/g, a = e, o, s = /* @__PURE__ */ new Set();
		for (; (o = i.exec(a)) !== null;) {
			s.add(a);
			let [e, t, c] = o, l = t || c, u = l.match(/(:\+|\+|:-|-)/), d = u ? u[0] : null, f = l.split(d), p, m, h = f.shift();
			if ([":+", "+"].includes(d) ? (p = r[h] ? f.join(d) : "", m = null) : (p = f.join(d), m = r[h]), a = m ? s.has(m) ? a.replace(e, p) : a.replace(e, m) : a.replace(e, p), a === n[h]) break;
			i.lastIndex = 0;
		}
		return a;
	}
	function i(e) {
		let t = process.env;
		e && e.processEnv != null && (t = e.processEnv);
		for (let i in e.parsed) {
			let a = e.parsed[i];
			a = t[i] && t[i] !== a ? t[i] : r(a, t, e.parsed), e.parsed[i] = n(a);
		}
		for (let n in e.parsed) t[n] = e.parsed[n];
		return e;
	}
	t.exports.expand = i;
})))(), $("vite:env"), async function() {}.constructor;
var sa = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("path"), r = Q("fs"), i = Q("os"), a = Q("url"), o = r.promises.readFile;
	function s(e, t) {
		return [
			"package.json",
			`.${e}rc.json`,
			`.${e}rc.js`,
			`.${e}rc.cjs`,
			...t ? [] : [`.${e}rc.mjs`],
			`.config/${e}rc`,
			`.config/${e}rc.json`,
			`.config/${e}rc.js`,
			`.config/${e}rc.cjs`,
			...t ? [] : [`.config/${e}rc.mjs`],
			`${e}.config.js`,
			`${e}.config.cjs`,
			...t ? [] : [`${e}.config.mjs`]
		];
	}
	function c(e) {
		return n.dirname(e) || n.sep;
	}
	let l = (e, t) => JSON.parse(t.replace(/^\uFEFF/, "")), u = typeof __webpack_require__ == "function" ? __non_webpack_require__ : Q, d = Object.freeze({
		".js": u,
		".json": u,
		".cjs": u,
		noExt: l
	});
	t.exports.defaultLoadersSync = d;
	let f = async (e) => {
		try {
			return (await import(
				/* webpackIgnore: true */
				a.pathToFileURL(e).href
)).default;
		} catch (t) {
			try {
				return u(e);
			} catch (e) {
				throw e.code === "ERR_REQUIRE_ESM" || e instanceof SyntaxError && e.toString().includes("Cannot use import statement outside a module") ? t : e;
			}
		}
	}, p = Object.freeze({
		".js": f,
		".mjs": f,
		".cjs": f,
		".json": l,
		noExt: l
	});
	t.exports.defaultLoaders = p;
	function m(e, t, r) {
		let a = {
			stopDir: i.homedir(),
			searchPlaces: s(e, r),
			ignoreEmptySearchPlaces: !0,
			cache: !0,
			transform: (e) => e,
			packageProp: [e],
			...t,
			loaders: {
				...r ? d : p,
				...t.loaders
			}
		};
		return a.searchPlaces.forEach((e) => {
			let t = n.extname(e) || "noExt", r = a.loaders[t];
			if (!r) throw Error(`Missing loader for extension "${e}"`);
			if (typeof r != "function") throw Error(`Loader for extension "${e}" is not a function: Received ${typeof r}.`);
		}), a;
	}
	function h(e, t) {
		return typeof e == "string" && e in t ? t[e] : (Array.isArray(e) ? e : e.split(".")).reduce((e, t) => e === void 0 ? e : e[t], t) || null;
	}
	function g(e) {
		if (!e) throw Error("load must pass a non-empty string");
	}
	function _(e, t) {
		if (!e) throw Error(`No loader specified for extension "${t}"`);
		if (typeof e != "function") throw Error("loader is not a function");
	}
	let v = (e) => (t, n, r) => (e && t.set(n, r), r);
	t.exports.lilconfig = function(e, t) {
		let { ignoreEmptySearchPlaces: i, loaders: a, packageProp: s, searchPlaces: l, stopDir: u, transform: d, cache: f } = m(e, t ?? {}, !1), p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), b = v(f);
		return {
			async search(e = process.cwd()) {
				let t = {
					config: null,
					filepath: ""
				}, m = /* @__PURE__ */ new Set(), g = e;
				dirLoop: for (;;) {
					if (f) {
						let e = p.get(g);
						if (e !== void 0) {
							for (let t of m) p.set(t, e);
							return e;
						}
						m.add(g);
					}
					for (let e of l) {
						let c = n.join(g, e);
						try {
							await r.promises.access(c);
						} catch {
							continue;
						}
						let l = String(await o(c)), u = n.extname(e) || "noExt", d = a[u];
						if (e === "package.json") {
							let e = await d(c, l), n = h(s, e);
							if (n != null) {
								t.config = n, t.filepath = c;
								break dirLoop;
							}
							continue;
						}
						let f = l.trim() === "";
						if (!(f && i)) {
							f ? (t.isEmpty = !0, t.config = void 0) : (_(d, u), t.config = await d(c, l)), t.filepath = c;
							break dirLoop;
						}
					}
					if (g === u || g === c(g)) break dirLoop;
					g = c(g);
				}
				let v = t.filepath === "" && t.config === null ? d(null) : d(t);
				if (f) for (let e of m) p.set(e, v);
				return v;
			},
			async load(e) {
				g(e);
				let t = n.resolve(process.cwd(), e);
				if (f && y.has(t)) return y.get(t);
				let { base: r, ext: c } = n.parse(t), l = c || "noExt", u = a[l];
				_(u, l);
				let p = String(await o(t));
				if (r === "package.json") {
					let e = await u(t, p);
					return b(y, t, d({
						config: h(s, e),
						filepath: t
					}));
				}
				let m = {
					config: null,
					filepath: t
				}, v = p.trim() === "";
				return v && i ? b(y, t, d({
					config: void 0,
					filepath: t,
					isEmpty: !0
				})) : (m.config = v ? void 0 : await u(t, p), b(y, t, d(v ? {
					...m,
					isEmpty: v,
					config: void 0
				} : m)));
			},
			clearLoadCache() {
				f && y.clear();
			},
			clearSearchCache() {
				f && p.clear();
			},
			clearCaches() {
				f && (y.clear(), p.clear());
			}
		};
	}, t.exports.lilconfigSync = function(e, t) {
		let { ignoreEmptySearchPlaces: i, loaders: a, packageProp: o, searchPlaces: s, stopDir: l, transform: u, cache: d } = m(e, t ?? {}, !0), f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), y = v(d);
		return {
			search(e = process.cwd()) {
				let t = {
					config: null,
					filepath: ""
				}, p = /* @__PURE__ */ new Set(), m = e;
				dirLoop: for (;;) {
					if (d) {
						let e = f.get(m);
						if (e !== void 0) {
							for (let t of p) f.set(t, e);
							return e;
						}
						p.add(m);
					}
					for (let e of s) {
						let s = n.join(m, e);
						try {
							r.accessSync(s);
						} catch {
							continue;
						}
						let c = n.extname(e) || "noExt", l = a[c], u = String(r.readFileSync(s));
						if (e === "package.json") {
							let e = l(s, u), n = h(o, e);
							if (n != null) {
								t.config = n, t.filepath = s;
								break dirLoop;
							}
							continue;
						}
						let d = u.trim() === "";
						if (!(d && i)) {
							d ? (t.isEmpty = !0, t.config = void 0) : (_(l, c), t.config = l(s, u)), t.filepath = s;
							break dirLoop;
						}
					}
					if (m === l || m === c(m)) break dirLoop;
					m = c(m);
				}
				let g = t.filepath === "" && t.config === null ? u(null) : u(t);
				if (d) for (let e of p) f.set(e, g);
				return g;
			},
			load(e) {
				g(e);
				let t = n.resolve(process.cwd(), e);
				if (d && p.has(t)) return p.get(t);
				let { base: s, ext: c } = n.parse(t), l = c || "noExt", f = a[l];
				_(f, l);
				let m = String(r.readFileSync(t));
				if (s === "package.json") {
					let e = f(t, m);
					return u({
						config: h(o, e),
						filepath: t
					});
				}
				let v = {
					config: null,
					filepath: t
				}, b = m.trim() === "";
				return b && i ? y(p, t, u({
					filepath: t,
					config: void 0,
					isEmpty: !0
				})) : (v.config = b ? void 0 : f(t, m), y(p, t, u(b ? {
					...v,
					isEmpty: b,
					config: void 0
				} : v)));
			},
			clearLoadCache() {
				d && p.clear();
			},
			clearSearchCache() {
				d && f.clear();
			},
			clearCaches() {
				d && (p.clear(), f.clear());
			}
		};
	};
})), ca = /* @__PURE__ */ Z(((e, t) => {
	let { createRequire: n } = Q("node:module"), { fileURLToPath: r, pathToFileURL: i } = Q("node:url"), a = /\.[mc]?ts$/, o, s, c = [];
	async function l(e, t = r(import.meta.url)) {
		let l = n(t).resolve(e);
		try {
			return (await import(`${i(l)}?t=${Date.now()}`)).default;
		} catch (e) {
			if (!a.test(l))
 /* c8 ignore start */
			throw e;
		}
		if (o === void 0) try {
			o = await import("./api_vite-Czy4HHT5.mjs");
		} catch (e) {
			c.push(e);
		}
		if (o) {
			let n = o.require(e, t);
			return n && "__esModule" in n ? n.default : n;
		}
		if (s === void 0) try {
			s = (await import("./__vite-optional-peer-dep_jiti_vite-31Br_3TI.mjs")).default;
		} catch (e) {
			c.push(e);
		}
		if (s) return s(t, { interopDefault: !0 })(e);
		throw Error(`'tsx' or 'jiti' is required for the TypeScript configuration files. Make sure it is installed\nError: ${c.map((e) => e.message).join("\n")}`);
	}
	t.exports = l;
})), la = /* @__PURE__ */ Z(((e, t) => {
	let n = ca();
	async function r(e, t) {
		if (e.parser && typeof e.parser == "string") try {
			e.parser = await n(e.parser, t);
		} catch (e) {
			throw Error(`Loading PostCSS Parser failed: ${e.message}\n\n(@${t})`);
		}
		if (e.syntax && typeof e.syntax == "string") try {
			e.syntax = await n(e.syntax, t);
		} catch (e) {
			throw Error(`Loading PostCSS Syntax failed: ${e.message}\n\n(@${t})`);
		}
		if (e.stringifier && typeof e.stringifier == "string") try {
			e.stringifier = await n(e.stringifier, t);
		} catch (e) {
			throw Error(`Loading PostCSS Stringifier failed: ${e.message}\n\n(@${t})`);
		}
		return e;
	}
	t.exports = r;
})), ua = /* @__PURE__ */ Z(((e, t) => {
	let n = ca();
	async function r(e, t, r) {
		try {
			return t == null || Object.keys(t).length === 0 ? await n(e, r) : (await n(e, r))(t);
		} catch (e) {
			throw Error(`Loading PostCSS Plugin failed: ${e.message}\n\n(@${r})`);
		}
	}
	async function i(e, t) {
		let n = [];
		return Array.isArray(e.plugins) ? n = e.plugins.filter(Boolean) : (n = Object.entries(e.plugins).filter(([, e]) => e !== !1).map(([e, n]) => r(e, n, t)), n = await Promise.all(n)), n.length && n.length > 0 && n.forEach((e, n) => {
			if (e.default && (e = e.default), e.postcss === !0 ? e = e() : e.postcss && (e = e.postcss), !(typeof e == "object" && Array.isArray(e.plugins) || typeof e == "object" && e.postcssPlugin || typeof e == "function")) throw TypeError(`Invalid PostCSS Plugin found at: plugins[${n}]\n\n(@${t})`);
		}), n;
	}
	t.exports = i;
})), da = /* @__PURE__ */ Z(((e, t) => {
	let { resolve: n } = Q("node:path"), r = sa(), i = la(), a = ua(), o = ca(), s = (e) => e && e.__esModule ? e : { default: e };
	async function c(e, t) {
		let n = t.filepath || "", r = s(t.config).default || {};
		r = typeof r == "function" ? r(e) : Object.assign({}, r, e), r.plugins || (r.plugins = []);
		let o = {
			file: n,
			options: await i(r, n),
			plugins: await a(r, n)
		};
		return delete r.plugins, o;
	}
	function l(e) {
		return e = Object.assign({
			cwd: process.cwd(),
			env: process.env.NODE_ENV
		}, e), e.env || (process.env.NODE_ENV = "development"), e;
	}
	async function u(e) {
		return o(e);
	}
	let d;
	async function f(e, t) {
		if (!d) try {
			d = await import("./__vite-optional-peer-dep_yaml_vite-DKpyWTwg.mjs");
		} catch (e) {
			/* c8 ignore start */
			throw Error(`'yaml' is required for the YAML configuration files. Make sure it is installed\nError: ${e.message}`);
		}
		return d.parse(t);
	}
	let p = (e = {}) => {
		let t = "postcss";
		return {
			...e,
			loaders: {
				...e.loaders,
				".cjs": u,
				".cts": u,
				".js": u,
				".mjs": u,
				".mts": u,
				".ts": u,
				".yaml": f,
				".yml": f
			},
			searchPlaces: [
				...e.searchPlaces || [],
				"package.json",
				`.${t}rc`,
				`.${t}rc.json`,
				`.${t}rc.yaml`,
				`.${t}rc.yml`,
				`.${t}rc.ts`,
				`.${t}rc.cts`,
				`.${t}rc.mts`,
				`.${t}rc.js`,
				`.${t}rc.cjs`,
				`.${t}rc.mjs`,
				`${t}.config.ts`,
				`${t}.config.cts`,
				`${t}.config.mts`,
				`${t}.config.js`,
				`${t}.config.cjs`,
				`${t}.config.mjs`
			]
		};
	};
	function m(e, t, i) {
		return e = l(e), t = t ? n(t) : process.cwd(), r.lilconfig("postcss", p(i)).search(t).then((n) => {
			if (!n) throw Error(`No PostCSS Config found in: ${t}`);
			return c(e, n);
		});
	}
	t.exports = m;
}));
$("vite:external"), (function(e) {
	return e[e.Static = 1] = "Static", e[e.Dynamic = 2] = "Dynamic", e[e.ImportMeta = 3] = "ImportMeta", e[e.StaticSourcePhase = 4] = "StaticSourcePhase", e[e.DynamicSourcePhase = 5] = "DynamicSourcePhase", e[e.StaticDeferPhase = 6] = "StaticDeferPhase", e[e.DynamicDeferPhase = 7] = "DynamicDeferPhase", e;
})({}), new Uint8Array(new Uint16Array([1]).buffer)[0], WebAssembly.compile((() => {
	return e = "AGFzbQEAAAABKwhgAAF/YAF/AX9gAABgAn9/AX9gBH9/f38AYAN/f38Bf2ABfwBgA39/fwADPj0CAgEEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgABBQICAgYBAQYBAQEFAQEBAQECAgIBAQEDAQEHAQMDBAUBcAECAgUHAQGCAoCAAgYPAn8BQaCLBAt/AEGgiwQLB80BHgZtZW1vcnkCAAJzYQACAWUABQJpcwAGAmllAAcCc3MACAJzZQAJAml0AAoCYWkACwJpZAAMAmlwAA0CZXMADgJlZQAPA2VscwAQA2VsZQARA2VzcwASAnJpABMCcmUAFAFmABUCbXMAFgJyYQAXA2FrcwAYA2FrZQAZA2F2cwAaA2F2ZQAbA3JzYQAcBXBhcnNlAB0LX19oZWFwX2Jhc2UDAQtfaW5pdGlhbGl6ZQABGV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBAAkHAQBBAQsBAAwBAQrZVz0oAEHYCkGAwAA2AgBB0ApBoIsENgIAQbgKQSo2AgBB1ApBgIAENgIACwQAEAALWQBB6AkgADYCACAAQQF0IgBBADsBoIsEQewJIABBoosEajYCAEHECUEANgIAQdQJQQA2AgBBzAlBADYCAEHICUEANgIAQdwJQQA2AgBB0AlBADYCAEGgiwQLuAEBAn9B7AlB7AkoAgAiBEEoajYCAAJAQdQJKAIAIgVFBEBBxAkgBDYCAAwBCyAFIAQ2AiQLQdQJIAQ2AgBB2AkgBTYCACAEIAA2AgggBEIANwIgIAQgA0EBRiIAOgAYIAQgAzYCFCAEQQA2AhAgBCACNgIEIAQgATYCACAEQQNBAUECIAAbIANBAkYiARs2AhwgBCACIAJBAmpBACAAGyABGzYCDCADQQFrQQFNBEBB8AlBAToAAAsLdwECf0HsCUHsCSgCACIEQRhqNgIAAkBB3AkoAgAiBUUEQEHICSAENgIADAELIAUgBDYCFAtB3AkgBDYCACAEIAM2AgwgBCACNgIIIAQgATYCBCAEIAA2AgBB4AkoAgAhACAEQQA2AhQgBCAANgIQQfAJQQE6AAALCABB9AkoAgALEwBBzAkoAgAoAgBBoIsEa0EBdQscAQF/QcwJKAIAKAIEIgBBoIsEa0EBdUF/IAAbCxMAQcwJKAIAKAIIQaCLBGtBAXULHAEBf0HMCSgCACgCDCIAQaCLBGtBAXVBfyAAGwsLAEHMCSgCACgCHAscAQF/QcwJKAIAKAIQIgBBoIsEa0EBdUF/IAAbCzUBAn9BfyEAAkACQAJAQcwJKAIAKAIUIgFBAWsOAgIBAAsgAUGgiwRrQQF1DwtBfiEACyAACwsAQcwJKAIALQAYCxMAQdAJKAIAKAIAQaCLBGtBAXULEwBB0AkoAgAoAgRBoIsEa0EBdQscAQF/QdAJKAIAKAIIIgBBoIsEa0EBdUF/IAAbCxwBAX9B0AkoAgAoAgwiAEGgiwRrQQF1QX8gABsLEwBB0AkoAgAoAhBBoIsEa0EBdQslAQF/QcwJQcwJKAIAIgBBJGpBxAkgABsoAgAiADYCACAAQQBHCyUBAX9B0AlB0AkoAgAiAEEUakHICSAAGygCACIANgIAIABBAEcLCABB+AktAAALCABB8AktAAALKwEBf0H8CUH8CSgCACIAQRBqQcwJKAIAQSBqIAAbKAIAIgA2AgAgAEEARwsTAEH8CSgCACgCAEGgiwRrQQF1CxMAQfwJKAIAKAIEQaCLBGtBAXULEwBB/AkoAgAoAghBoIsEa0EBdQsTAEH8CSgCACgCDEGgiwRrQQF1CwoAQfwJQQA2AgAL3g8BBn8jAEGA0ABrIgQkAEH4CUEBOgAAQYAIIQBBhApBgAg2AgBBnApBnosEIgJB6AkoAgBBAXRqIgU2AgBB8AlBADoAAEGACkEAOwEAQYIKQQA7AQBBiApBADoAAEH0CUEANgIAQeQJQQA6AABBjAogBEGAEGo2AgBBkAogBDYCAEGUCkEAOgAAA0AgACEBQZgKIAJBAmoiADYCAAJAAkACfwJAAkAgAiAFSQRAIAAvAQAiA0EJa0EFSQ0EAkACQAJAAkACQCADQeUAaw4FAQYGBgIACyADQSBGDQggA0EvRg0DIANBO0YNAgwFC0GCCi8BAA0BIAAQHkUNASACQQRqQYIIQQoQHw0BECBBmAooAgAhAEH4CS0AAA0BQYQKIAA2AgAgACIBIQIMBQsgAi8BBEHtAEcNACAAEB5FDQAgAikABkLwgLyDoI6AOlINABAhQZgKKAIAIQALQYQKIAA2AgAMBgsgAi8BBCIAQSpHBEAgAEEvRw0CECIMBQtBARAjDAQLIAAhAkEAQeQJLQAADQIaDAELQfgJQQA6AAALA0ACQEGYCiACQQJqIgA2AgACQAJAAkACQCACIAVJBEACQAJAAkACQAJAAkACQAJAAkACQAJAIAAvAQAiA0Egaw4QDwgFCAgICAUKAggIAQgIBgALAkACQAJAAkACQAJAIANB2wBrDg8EDQUNDQwNDQMNAQ0NDQIACyADQQlrQQVJDRMgA0H7AGsOAwcMCAwLQYIKLwEADQwgABAeRQ0MIAJBBGpBgghBChAfDQwQIAwRCyACLwEEQe0ARw0LIAAQHkUNCyACKQAGQvCAvIOgjoA6Ug0LECEMEAsgAi8BBEHsAEcNCiAAEB5FDQogAkEGakGyCEEGEB8NCiACLwEMECRFDQpBlApBAToAAAwKC0GCCkGCCi8BACIAQQFqOwEAIARBgBBqIABBA3RqIgBBCDYCACAAIAE2AgQMDgtBggovAQAiAEUND0GCCiAAQQFrOwEADA0LQYAKLwEAIgBFDQxBggovAQAiA0UNDCADQQN0IARqQfgPaigCAEEFRw0MIAQgAEECdGpBBGsoAgAiACgCBA0MIAAgAUECajYCBEGYCiACQQRqNgIAQQEQJRogAEGYCigCACIANgIQQZgKIABBAms2AgAMDAtBggovAQAiAEUNDUGCCiAAQQFrIgM7AQBBgAovAQAiAEUNCyAEQYAQaiADQf//A3FBA3RqKAIAQQVHDQsgBCAAQQJ0akEEaygCACIDKAIERQRAIAMgAUECajYCBAsgAyACQQRqNgIMQYAKIABBAWs7AQAMCwsCQCABLwEAQSlHDQBB1AkoAgAiAEUNACAAKAIMIAFBAmpHDQBB1AlB2AkoAgAiADYCACAABEAgAEEANgIkDAELQcQJQQA2AgALQYIKQYIKLwEAIgBBAWo7AQAgBEGAEGogAEEDdGoiAEEGQQJBlAotAAAbNgIAIAAgATYCBEGUCkEAOgAADAoLQYIKLwEAIgBFDQtBggogAEEBayIAOwEAIARBgBBqIABB//8DcUEDdGooAgBBBEcNCQwICyADECYMCAsCQCACLwEEIgBBKkcEQCAAQS9HDQEQIgwKC0EBECMMCQsCQCABLwEAIgAQJwRAAkACQAJAIABBK2sOBAEKAgAKCyABQQJrLwEAQTBrQf//A3FBCkkNAwwJCyABQQJrLwEAQStGDQIMCAsgAUECay8BAEEtRg0BDAcLIABBKUcNACAEQYAQakGCCi8BAEEDdGooAgQQKA0GCwJAAkBBggovAQAiAkUgAEHmAEdyDQAgBEGAEGogAkEDdGoiA0EIaygCAEEBRw0AIAFBAmsvAQBB7wBHDQEgAUEEaxApRQ0BIANBBGsoAgBBnglBAxAqRQ0BDAcLIABB/QBHDQAgBEGAEGogAkEDdGoiAigCBBArDQYgAigCAEEGRg0GCyABECwNBUGICi0AACAAQS9GcSAAQQBHc0UNBQJAQdwJKAIAIgJFDQAgASACKAIASQ0AIAEgAigCBE0NBgsDQCABQaCLBEsEQEGECiABQQJrIgE2AgAgAS8BACIAEC1FDQELCyAAQf//A3EQLgRAA0AgAUGgiwRLBEBBhAogAUECayIBNgIAIAEvAQAQLg0BCwsgARAvDQYLQYgKQQE6AAAMBwtBggpBggovAQAiAEEBajsBACAEQYAQaiAAQQN0aiIAIAE2AgQgAEEDNgIADAULIANBMGtB//8DcUEKSSADQSByQeEAa0H//wNxQRpJcg0AAkACQCADQdwAaw4EAgEBAgALIANBJEYNAQsgA0GgAUYgA0GAAUlyDQULA0AgAC8BAiIBQSByQeEAayECAkAgAUEwa0H//wNxQQpJIAJB//8DcUEaSXINAAJAAkAgAUHcAGsOBAIBAQIACyABQSRGDQELIAFBoAFGIAFBgAFJcg0GC0GYCiAAQQJqIgA2AgAMAAsAC0GCCkGCCi8BACIAQQFqOwEAIARBgBBqIABBA3RqIgBBATYCACAAIAE2AgQMAwtBgAovAQBFQYIKLwEARUHkCS0AAEF/c3FxDAYLEDBBiApBADoAAAwBCxAxC0GECkGYCigCACIBNgIAC0GYCigCACECDAELCxAyQQALIQMgBEGA0ABqJAAgAw8LIAEhAAtBmAooAgAhAgwACwALFgAgAEGgiwRGBEBBAQ8LIABBAmsQMwtDAQN/AkAgAkUNAANAIAAtAAAiBCABLQAAIgVGBEAgAUEBaiEBIABBAWohACACQQFrIgINAQwCCwsgBCAFayEDCyADC9IIAQV/QZgKQZgKKAIAIgRBDGoiATYCAEHcCSgCACEDQQEQJSECAkACQAJAAkACQAJAIAFBmAooAgAiAEYEQCACEDRFDQELQeAJIAQ2AgACQAJAAkAgAkEqRwRAIAJB+wBHDQFBmAogAEECajYCAEEBECUhAkGcCigCACEBQZgKKAIAIQADQAJAIAJB//8DcSICQSJGIAJBJ0ZyRQRAIAIQNRpBmAooAgAhAgwBCyACECZBmApBmAooAgBBAmoiAjYCAAtBARAlGiAAIAIQNiICQSxGBEBBmApBmAooAgBBAmo2AgBBARAlIQILIAJB/QBGDQMgAEGYCigCACIARg0IIAAgAU0NAAsMBwtBmAogAEECajYCAEEBECUaQZgKKAIAIgAgABA2GgwCC0H4CUEAOgAAAkACQAJAAkACQAJAIAJB4QBrDgwCCAQBCAMICAgICAUACyACQfYARg0EDAcLQZgKIABBDmoiBDYCAAJAAkACQAJAQQEQJUHhAGsOBgAMAgwMAQwLQZgKKAIAIgEpAAJC84Dkg+CNwDFSDQsgAS8BChAuRQ0LQZgKIAFBCmo2AgBBABAlGgtBmAooAgAiA0ECakGiCEEOEB8NCgJAIAMvARAiARAkDQAgAUEoaw4DAAsACwtBmAogA0EQajYCAEEBECUiAUEqRgRAQZgKQZgKKAIAQQJqNgIAQQEQJSEBCyABQShHDQEMCgtBmAooAgAiAykAAkLsgISDsI7AOVINCSADLwEKIgEQJEUgAUH7AEdxDQlBmAogA0EKajYCAEEBECUiAUH7AEYNCQtBmAooAgAhAyABEDUaQZgKKAIAIgEgA00NCCAAIAQgAyABEAQMCgtBmAogAEEKajYCAEEAECUaQZgKKAIAIQALQZgKIABBEGo2AgBBARAlIgBBKkYEQEGYCkGYCigCAEECajYCAEEBECUhAAsMCQsCQCAAKQACQuyAhIOwjsA5Ug0AIAAvAQoQLUUNAEGYCiAAQQpqNgIAQQEQJSEADAkLIABBBGohAAtBmAogAEEGajYCAEGcCigCACEDA0BBARAlIQBBmAooAgAiASADSw0HIAAQNyECQZgKKAIAIgAgAUYNBCACQT1GBEBBARA4IQJBmAooAgAhAAsgAkEsRw0EQZgKIABBAmo2AgAMAAsAC0HwCUEBOgAAQZgKQZgKKAIAQQJqNgIAC0EBECUhAEGYCigCACEBAkAgAEHmAEcNACABQQJqQZwIQQYQHw0AQZgKIAFBCGo2AgAgBEEBECVBABA5IANBFGpByAkgAxshAgNAIAIoAgAiAEUNAiAAQgA3AgggAEEUaiECDAALAAtBmAogAUECazYCAAsPCyAAIQEMAgsgACAEQQBBABAEQZgKIABBDGo2AgAPCxAyDwtBmAogAUECazYCAA8LQZgKKAIAIQEgABA1GiABQZgKKAIAIgAgASAAEARBmAogAEECazYCAAuKCwEKf0GYCkGYCigCACIGQQxqIgk2AgBBARAlIQBBmAooAgAhAgJAAkACQAJAAkACQAJ/IABBLkYEQEGYCiACQQJqNgIAQQEQJSIAQeQARwRAIABB8wBHBEAgAEHtAEcNB0GYCigCACIAQQJqQYwIQQYQHw0HQYQKKAIAIgEQOkUEQCABLwEAQS5GDQgLIAYgBiAAQQhqQQIQAw8LQZgKKAIAIgBBAmpBkghBChAfDQZBhAooAgAiARA6RQRAIAEvAQBBLkYNBwtBmAogAEEMajYCAEEBIQhBBSEEQQEQJSEAQQEMAgtBmAooAgAiACkAAkLlgJiD0IyAOVINBUGECigCACIBEDpFBEAgAS8BAEEuRg0GC0GYCiAAQQpqNgIAQQchBEEBIQVBARAlIQBBASEIQQIMAQsCQAJAIABB8wBHIAIgCU1yRQRAQfMAIQAgAkECakGSCEEKEB8NASACLwEMECRFDQFBmAogAkEMaiIANgIAQQEhCEEBECUhASAAQZgKKAIAIgRHBEBB5gAhACABQeYARwRAQQUhBCABIQBBAQwFC0EBIQMgBEECakGcCEEGEB8NBSAELwEIEC1FDQULQZgKIAI2AgBBByEEQQEhB0EAIQggASEAQQAMAwtBByEEQQEhByAAQeQARyACIAZBCmpNcg0BQeQAIQAgAikAAkLlgJiD0IyAOVINACACLwEKECRFDQBBmAogAkEKajYCAEEqIQBBASEFQQIhA0EBECUiAUEqRg0EQZgKIAI2AgBBACEFIAEhAEEADAILIAIhBAwCC0EACyEDIABBKEYEQEGMCigCAEGCCi8BACIFQQN0aiIAQQU2AgBBggogBUEBajsBACAAQZgKKAIAIgI2AgRBhAooAgAvAQBBLkYNBEGYCiACQQJqNgIAQQEQJSEAIAZBmAooAgAiAUEAIAIQA0HUCSgCACEDIAgEQCADIAQ2AhwLQYAKQYAKLwEAIgRBAWo7AQBBkAooAgAgBEECdGogAzYCAAJAIABBIkYgAEEnRnJFBEACQCAAQeAARw0AQZwKKAIAIQYgASEAA0AgACICIAZPDQECQAJAIABBAmoiAC8BACIHQdwAaw4FAAICAgUBCyACQQRqIQAMAQsgB0EkRw0AIAIvAQRB+wBHDQALC0GYCiABQQJrNgIADwsgABAmQZgKKAIAIQALQZgKIABBAmoiADYCAAJAAkACQEEBECVBKWsOBAECAgACC0GYCkGYCigCAEECajYCAEEBECUaIAMgADYCBEGYCigCACEAIANBAToAGCADIAA2AhAMCAtBggogBTsBACADIAA2AgRBmAooAgAhACADQQE6ABggAyAAQQJqNgIMQYAKIAQ7AQAPC0GYCkGYCigCAEECazYCAA8LIAdFIABB+wBHckUEQEGYCigCACEAQYIKLwEADQZBnAooAgAhAQNAAkACQCAAIAFJBEBBARAlIgBBIkYgAEEnRnINASAAQf0ARw0CQZgKQZgKKAIAQQJqNgIAC0EBECUhAUGYCigCACEAIAFB5gBGBEAgAEECakGcCEEGEB8NBwtBmAogAEEIajYCAEEBECUiAEEiRyAAQSdHcQ0GIAYgAEEAEDkPCyAAECYLQZgKQZgKKAIAQQJqIgA2AgAMAAsACwJAAkAgAEEnaw4EAwEBAwALIABBIkYNAgtBmAooAgAhBAsgBCAJRw0AQZgKIARBAms2AgAPCyAAQSpHIAVxDQJBggovAQANAkGYCigCACEAQZwKKAIAIQIDQCAAIAJPDQEgAC8BACIBQSdHIAFBIkdxBEBBmAogAEECaiIANgIADAEFIAYgASADEDkPCwALAAsQMgsPC0GYCkGYCigCAEECazYCAA8LQZgKIABBAms2AgALQwEDf0GYCigCACEAQZwKKAIAIQIDQAJAIABBAmohASAAIAJPDQAgASEAIAEvAQBBCmsOBAABAQABCwtBmAogATYCAAtwAQR/QZgKKAIAQQJqIQFBnAooAgAhBAJAA0AgASICQQJqIQEgAiAETw0BIAEvAQAhAwJAIABFBEAgA0EqRg0BIANBCmsOBAMCAgMCCyADQSpHDQELIAIvAQRBL0cNAAsgAkEEaiEBC0GYCiABNgIACwsAIABBn4CABBA8C30BBH9BnAooAgAhA0GYCigCACEBA0ACQAJAAkAgAS8BACICQS9GBEAgAS8BAiIBQSpHBEAgAUEvRg0CQS8PCyAAECMMAgsgAARAIAIQJA0CDAMLIAIQLg0BDAILECILQZgKQZgKKAIAIgRBAmoiATYCACADIARLDQELCyACC4YBAQR/QZgKKAIAIQFBnAooAgAhBAJAA0ACQCABIgJBAmohASACIARPDQAgAS8BACIDIABGDQIgA0HcAEcEQCADQQprDgQBAgIBAgsgAkEEaiEBIAIvAQRBDUcNASACQQZqIAEgAi8BBkEKRhshAQwBCwtBmAogATYCABAyDwtBmAogATYCAAtuAQF/AkAgAEEpRyAAQShrQf//A3FBB0lxIABBIWsiAUEFTUEAQQEgAXRBMXEbckUEQCAAQTprIgFB//8DcUElT0K/gICAoAIgAa2Ip0EBcUVyDQELQQEPCyAAQf0ARyAAQfsAa0H//wNxQQRJcQsuAQF/QQEhAQJAIABBlAlBBRAqDQAgAEGeCUEDECoNACAAQaQJQQIQKiEBCyABC28BAX8CfyAALwEAIgEQJCABQSlGciABQf0ARnJFBEBBACABQd0ARw0BGgsDQAJAIABBoIsETQ0AIAEQJEUNACAAQQJrIgAvAQAhAQwBCwtBASABQSlGIAFB3QBGciABQf0ARnINABogARA0QQFzCws+AQJ/AkAgACACQQF0IgJrIgRBAmoiAEGgiwRJDQAgACABIAIQHw0AIABBoIsERgRAQQEPCyAEEDMhAwsgAwuDAQECf0EBIQICQAJAAkACQAJAAkAgAC8BACIBQTtrDgQFBAQBAAsCQCABQeUAaw4EAwQEAgALIAFBKUYNBCABQfkARw0DIABBAmtBsAlBBhAqDwsgAEECay8BAEE9Rg8LIABBAmtBqAlBBBAqDwsgAEECa0G8CUEDECoPC0EAIQILIAILqgMBAn8CQAJAAkACQAJAAkACQAJAAkACQCAALwEAQeQAaw4UAAECCQkJCQMJCQQFCQkGCQcJCQgJCwJAAkAgAEECay8BAEHpAGsOBAAKCgEKCyAAQQRrQbgIQQIQKg8LIABBBGtBvAhBAxAqDwsCQAJAAkAgAEECay8BAEHzAGsOAwABAgoLIABBBGsvAQAiAUHhAEcEQCABQewARw0KIABBBmtB5QAQOw8LIABBBmtB4wAQOw8LIABBBGtBwghBBBAqDwsgAEEEa0HKCEEGECoPCyAAQQJrLwEAQe8ARw0GIABBBGsvAQBB5QBHDQYgAEEGay8BACIBQfAARwRAIAFB4wBHDQcgAEEIa0HWCEEGECoPCyAAQQhrQeIIQQIQKg8LIABBAmtB5ghBBBAqDwtBASECIABBAmsiAEHpABA7DQQgAEHuCEEFECoPCyAAQQJrQeQAEDsPCyAAQQJrQfgIQQcQKg8LIABBAmtBhglBBBAqDwsgAEECay8BACIBQe8ARwRAIAFB5QBHDQEgAEEEa0HuABA7DwsgAEEEa0GOCUEDECohAgsgAgs0AQF/IABBoAFGIABBCWsiAUEXTUEAQQEgAXRBn4CABHEbckUEQCAAEDQgAEEuR3EPC0EBCwsAIABBjYCABBA8C0gBAn8CQCAALwEAIgJB5QBHBEAgAkHrAEcNASAAQQJrQeYIQQQQKg8LIABBAmsvAQBB9QBHDQAgAEEEa0HKCEEGECohAQsgAQvbAQEEf0GYCigCACEAQZwKKAIAIQMDQCAAQQJqIQECQAJAIAAgA08NAAJAAkACQCABLwEAIgJB2wBrDgIBAgALIAEhACACQQprDgQCBAQCAwsCQANAAkAgAUECaiEAIAEgA08NAAJAAkAgAC8BACICQdwAaw4CAAQBCyABQQRqIQEMAgsgACEBIAJBCmsOBAABAQABCwtBmAogADYCABAyQZgKKAIAIQAMBAtBmAogADYCAAwDCyAAQQRqIQAMAgtBmAogATYCABAyDwsgAkEvRw0AC0GYCiAANgIAC94BAQR/QZgKKAIAIQBBnAooAgAhAwJAAkADQAJAIAAiAUECaiEAIAEgA08NAAJAAkACQCAALwEAIgJB3ABrDgUCBAQEAQALIAJBJEcNAyABLwEEQfsARw0DQZgKIAFBBGoiAjYCAEGMCigCAEGCCi8BACIAQQN0aiIBQQQ2AgBBggogAEEBajsBACABIAI2AgQPC0GYCiAANgIAQYIKQYIKLwEAQQFrIgE7AQBBjAooAgAgAUH//wNxQQN0aigCAEEDRw0DDAQLIAFBBGohAAwBCwtBmAogADYCAAsQMgsLMwEBf0HkCUEBOgAAQZgKKAIAIQBBmApBnAooAgBBAmo2AgBB9AkgAEGgiwRrQQF1NgIACz0BAX8Cf0EBIAAvAQAiAUEJa0H//wNxQQVJIAFBgAFyQaABRnINABpBACABEDRFDQAaIAAQOiABQS5HcgsLXgEBfwJAIABB+P8DcUEoRiAAQSFrIgFBBU1BAEEBIAF0QTFxG3JFBEAgAEE6ayIBQf//A3FBJU9Cv4CAgKADIAGtiKdBAXFFcg0BC0EBDwsgAEH7AGtB//8DcUEESQtXAQN/QZgKKAIAIQEDQAJAIABB//8DcSICECQEQCAAIQMMAQsgACEDIAIQNA0AQQAhA0GYCiABQQJqIgI2AgAgAS8BAiEAIAIhASAADQELCyADQf//A3ELpQEBBH8CQEGYCigCACIDLwEAIgVB4QBHBEAgASECIAAhBAwBC0GYCiADQQRqNgIAQQEQJSECQZgKKAIAIQQCQCACQSJGIAJBJ0ZyRQRAIAIQNRpBmAooAgAhAgwBCyACECZBmApBmAooAgBBAmoiAjYCAAtBARAlIQVBmAooAgAhAwsgAyAERwRAIAQgAkEAIAAgACABRiIAG0EAIAEgABsQBAsgBQvTBAEHf0GYCigCACEBAkAgAEHf/wNxQdsARgRAIAEvAQAhBUGYCiABQQJqNgIAQf0AQd0AIAVB+wBGGyEGQQEQJSEDQZwKKAIAIQcDQAJAIAYgA0H//wNxIgJGQZgKKAIAIgEgB0tyDQACQCACQS5HDQAgAS8BAkEuRw0AIAEvAQRBLkcNAEGYCiABQQZqNgIAQQEQJRA3IQMMAgsCQAJ/AkAgBUH7AEYEQAJAIAJBIkYgAkEnRnJFBEAgAkHbAEcNAUEAEDgaQZgKQZgKKAIAQQJqNgIAIAEMBAsgAhAmQZgKQZgKKAIAQQJqNgIAIAEMAwsgASEAIANBMGtB//8DcUEJSw0BA0AgACICQQJqIQAgAi8BAiIDQTBrQf//A3FBCkkNACADQcEAayIEQR5NQQBBASAEdEG/gIGEBHEbDQAgA0HhAGsiBEEXTUEAQQEgBHRBv8CBBHEbDQACQAJAIANBK2sOBAABAAIBCyACLwEAQSByQeUARg0BCwtBmAogADYCACABDAILIAJBLEYEQEGYCiABQQJqNgIAQQEQJSEDDAULIAIQNyECDAILIAIQNRpBmAooAgALIQBBARAlIgJBOkYEQEGYCkGYCigCAEECajYCAEEBECUQNyECDAELIAAgAU0NACABIAAgASAAEAQLIAJBPUYEQEEAEDghAgtBmAooAgAhASACQSxHDQBBmAogAUECajYCAEEBECUhAwwBCwtBmAogAUECajYCAAwBCyAAEDUaQZgKKAIAIgAgAU0NACABIAAgASAAEAQLQQEQJQvgDgEMf0GECkGYCigCACIBNgIAQZAKKAIAIQpBjAooAgAhB0GcCigCACEMQYIKLwEAIQsgASIDIQUCQANAQZgKIAVBAmoiBDYCACAFIAxPBEBBACEIDAILAkACQCAELwEAIgIQLg0AAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQEGCCi8BACIGIAtHDQAgAiEIAkACQCACQSlrDgQcAQEcAAsgAkE7RiACQd0ARnIgAkH9AEZyDRkLIAAgCXFBAUcNAAJAIAJBImsODgsODg4OCxAIDg4HDg4MAAsCQCACQdsAaw4PBQ4GDg4NDg4EDgIODg4DAAsCQCACQfsAaw4DCQ4KAAsgAkEKaw4EGg0NGg0LAkAgAkEiaw4OCg0NDQ0KDwcNDQYNDQsACwJAIAJB2wBrDg8EDQUNDQwNDQMNAQ0NDQIACwJAIAJBCmsOBBcNDRcACyACQfsAaw4DBwwIDAsgBg0MIAQQHkUNDCAFQQRqQYIIQQoQHw0MECAMEgsgBS8BBEHtAEcNCyAEEB5FDQsgBSkABkLwgLyDoI6AOlINCxAhDBELIAUvAQRB7ABHDQogBBAeRQ0KIAVBBmpBsghBBhAfDQogBS8BDBAkRQ0KQZQKQQE6AAAMCgsgByAGQQN0aiIBQQg2AgBBggogBkEBajsBACABIAM2AgQMDwsgBkUND0GCCiAGQQFrOwEADA4LIAZFDQ1BgAovAQAiAUUNDSAHIAZBA3RqQQhrKAIAQQVHDQ0gCiABQQJ0akEEaygCACIBKAIEDQ0gASADQQJqNgIEQZgKIAVBBGo2AgBBARAlGiABQZgKKAIAIgE2AhBBmAogAUECazYCAAwNCyAGRQ0NQYIKIAZBAWsiBDsBAEGACi8BACIBRQ0MIAcgBEH//wNxQQN0aigCAEEFRw0MIAogAUECdGpBBGsoAgAiBCgCBEUEQCAEIANBAmo2AgQLIAQgBUEEajYCDEGACiABQQFrOwEADAwLAkAgAy8BAEEpRw0AQdQJKAIAIgFFDQAgASgCDCADQQJqRw0AQdQJQdgJKAIAIgE2AgAgAQRAIAFBADYCJAwBC0HECUEANgIACyAHIAZBA3RqIgFBBkECQZQKLQAAGzYCAEGCCiAGQQFqOwEAIAEgAzYCBEGUCkEAOgAADAsLIAZFDQtBggogBkEBayIBOwEAIAcgAUH//wNxQQN0aigCAEEERw0KDAkLIAIQJgwJCwJAIAUvAQQiBEEqRwRAIARBL0cNARAiDAwLQQEQIwwLCwJAIAMvAQAiBRAnBEACQAJAAkAgBUEraw4EAQsCAAsLIANBAmsvAQBBMGtB//8DcUEKSQ0DDAoLIANBAmsvAQBBK0YNAgwJCyADQQJrLwEAQS1GDQEMCAsgBUEpRw0AIAcgBkEDdGooAgQQKA0HCwJAAkAgBkUgBUHmAEdyDQAgByAGQQN0aiIBQQhrKAIAQQFHDQAgA0ECay8BAEHvAEcNASADQQRrEClFDQEgAUEEaygCAEGeCUEDECpFDQEMCAsgBUH9AEcNACAHIAZBA3RqIgEoAgQQKw0HIAEoAgBBBkYNBwsgAxAsDQZBiAotAAAgBUEvRnEgBUEAR3NFDQZB3AkoAgAiAUUNBCADIAEoAgBJDQQgAyEEIAMgASgCBE0NBgwFCyAHIAZBA3RqIgEgAzYCBEGCCiAGQQFqOwEAIAFBAzYCAAwGCyACQTBrQf//A3FBCkkgAkEgckHhAGtB//8DcUEaSXINAAJAAkAgAkHcAGsOBAIBAQIACyACQSRGDQELIAJBoAFGIAJBgAFJcg0GCwNAIAQvAQIiAUEgckHhAGshCAJAIAFBMGtB//8DcUEKSSAIQf//A3FBGklyDQACQAJAIAFB3ABrDgQCAQECAAsgAUEkRg0BCyABQaABRiABQYABSXINBwtBmAogBEECaiIENgIADAALAAsgByAGQQN0aiIBQQE2AgBBggogBkEBajsBACABIAM2AgQMBAsgAyEECwNAIARBoIsESwRAIARBAmsiBC8BACIFEC1FDQELCyAFQf//A3EQLgRAA0AgBEGgiwRLBEBBhAogBEECayIENgIAIAQvAQAQLg0BCwsgBBAvDQELQYgKQQE6AAAMAgsQMEGICkEAOgAADAELEDELQYQKQZgKKAIAIgE2AgAMAQsQMgtBACEIQeQJLQAADQMCQCABIANGBEAgAEUNAUGCCi8BACALRiAJcUUNAUEBIQkgASEDQZgKKAIALwEAIghBCmsOBAUCAgUCCyACQS9GBEBBiAotAABBAXMhCQwBC0EBIQkgAkEwa0H//wNxQQpJIAJB3/8DcUHBAGtB//8DcUEaSXIgAkEkRiACQd8ARnJyIAJB/wBLcg0AIAEhAwJAAkAgAkEnaw4DAwEDAAsCQCACQd0Aaw4EAwEBAwALIAJBIkYgAkH9AEZyDQELQQAhCQsgASEDC0GYCigCACEFDAELCyACDwsgCAuvBAEHfyABQSJGIAFBJ0ZyRQRAEDIPC0GYCigCACEDIAEQJiAAIANBAmpBmAooAgBBARADIAIEQEHUCSgCAEEEQQYgAkEBRhs2AhwLQZgKQZgKKAIAQQJqNgIAQQAQJSEAQZgKKAIAIQQCQAJAIABB9wBHDQAgBC8BAkHpAEcNACAELwEEQfQARw0AIAQvAQZB6ABGDQELQZgKIARBAms2AgAPC0GYCiAEQQhqNgIAAkBBARAlQfsARwRADAELQewJKAIAIQNB1AkoAgAhBUGYCigCACIGIQBBACECA0AgAyEBQZgKIABBAmo2AgBBARAlIQBBmAooAgAhBwJAAkACQCAAQSJHBEAgAEEnRw0BQScQJgwCC0EiECYMAQsgABA1IQNBmAooAgAhAAwBC0GYCigCAEECaiEAQZgKIAA2AgBBARAlIQMLIANBOkcEQAwCC0GYCkGYCigCAEECajYCAEEBECUiA0EiRiADQSdGckUEQAwCC0GYCigCACEIIAMQJkHsCSABQRRqIgM2AgBBmAooAgAhCSABQQA2AhAgASAINgIIIAEgADYCBCABIAc2AgAgASAJQQJqIgA2AgwCQCACRQRAIAUgATYCIAwBCyACIAE2AhALQZgKIAA2AgACQEEBECUiAEEsRwRAIABB/QBGDQEMAwtBmApBmAooAgBBAmoiADYCACABIQIMAQsLIAUgBjYCECAFQZgKKAIAQQJqNgIMDwtBmAogBDYCAAstAQF/AkAgAC8BAEEuRw0AIABBAmsvAQBBLkcNACAAQQRrLwEAQS5GIQELIAELNQEBfwJAIABBoIsESQ0AIAAvAQAgAUcNACAAQaCLBEYEQEEBDwsgAEECay8BABAtIQILIAILKQEBfyAAQaABRiAAQQlrIgJBF01BAEEBIAJ0IAFxG3JFBEBBAA8LQQELC8cBAQBBgggLvwF4AHAAbwByAHQAZQB0AGEAbwB1AHIAYwBlAHIAbwBtAHUAbgBjAHQAaQBvAG4AbABhAHMAcwB2AG8AeQBpAGUAZABlAGwAZQBjAG8AbgB0AGkAbgBpAG4AcwB0AGEAbgB0AHkAYgByAGUAYQByAGUAdAB1AHIAZABlAGIAdQBnAGcAZQBhAHcAYQBpAHQAaAByAHcAaABpAGwAZQBmAG8AcgBpAGYAYwBhAHQAYwBmAGkAbgBhAGwAbABlAGwAcw==", typeof Buffer < "u" ? Buffer.from(e, "base64") : Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
	var e;
})()).then(WebAssembly.instantiate).then(({ exports: e }) => {}), $("vite:esbuild"), new Set(n.builtinModules);
var fa = {}.hasOwnProperty, pa = /^([A-Z][a-z\d]*)+$/, ma = /* @__PURE__ */ new Set([
	"string",
	"function",
	"number",
	"object",
	"Function",
	"Object",
	"boolean",
	"bigint",
	"symbol"
]);
function ha(e, t = "and") {
	return e.length < 3 ? e.join(` ${t} `) : `${e.slice(0, -1).join(", ")}, ${t} ${e[e.length - 1]}`;
}
var ga = /* @__PURE__ */ new Map(), _a = "__node_internal_", va;
ya("ERR_INVALID_ARG_TYPE", (e, t, r) => {
	n.default.ok(typeof e == "string", "'name' must be a string"), Array.isArray(t) || (t = [t]);
	let i = "The ";
	if (e.endsWith(" argument")) i += `${e} `;
	else {
		let t = e.includes(".") ? "property" : "argument";
		i += `"${e}" ${t} `;
	}
	i += "must be ";
	let a = [], o = [], s = [];
	for (let e of t) n.default.ok(typeof e == "string", "All expected entries have to be of type string"), ma.has(e) ? a.push(e.toLowerCase()) : pa.exec(e) === null ? (n.default.ok(e !== "object", "The value \"object\" should be written as \"Object\""), s.push(e)) : o.push(e);
	if (o.length > 0) {
		let e = a.indexOf("object");
		e !== -1 && (a.slice(e, 1), o.push("Object"));
	}
	return a.length > 0 && (i += `${a.length > 1 ? "one of type" : "of type"} ${ha(a, "or")}`, (o.length > 0 || s.length > 0) && (i += " or ")), o.length > 0 && (i += `an instance of ${ha(o, "or")}`, s.length > 0 && (i += " or ")), s.length > 0 && (s.length > 1 ? i += `one of ${ha(s, "or")}` : (s[0].toLowerCase() !== s[0] && (i += "an "), i += `${s[0]}`)), i += `. Received ${Ta(r)}`, i;
}, TypeError), ya("ERR_INVALID_MODULE_SPECIFIER", (e, t, n = void 0) => `Invalid module "${e}" ${t}${n ? ` imported from ${n}` : ""}`, TypeError), ya("ERR_INVALID_PACKAGE_CONFIG", (e, t, n) => `Invalid package config ${e}${t ? ` while importing ${t}` : ""}${n ? `. ${n}` : ""}`, Error), ya("ERR_INVALID_PACKAGE_TARGET", (e, t, r, i = !1, a = void 0) => {
	let o = typeof r == "string" && !i && r.length > 0 && !r.startsWith("./");
	return t === "." ? (n.default.ok(i === !1), `Invalid "exports" main target ${JSON.stringify(r)} defined in the package config ${e}package.json${a ? ` imported from ${a}` : ""}${o ? "; targets must start with \"./\"" : ""}`) : `Invalid "${i ? "imports" : "exports"}" target ${JSON.stringify(r)} defined for '${t}' in the package config ${e}package.json${a ? ` imported from ${a}` : ""}${o ? "; targets must start with \"./\"" : ""}`;
}, Error), ya("ERR_MODULE_NOT_FOUND", (e, t, n = !1) => `Cannot find ${n ? "module" : "package"} '${e}' imported from ${t}`, Error), ya("ERR_NETWORK_IMPORT_DISALLOWED", "import of '%s' by %s is not supported: %s", Error), ya("ERR_PACKAGE_IMPORT_NOT_DEFINED", (e, t, n) => `Package import specifier "${e}" is not defined${t ? ` in package ${t}package.json` : ""} imported from ${n}`, TypeError), ya("ERR_PACKAGE_PATH_NOT_EXPORTED", (e, t, n = void 0) => t === "." ? `No "exports" main defined in ${e}package.json${n ? ` imported from ${n}` : ""}` : `Package subpath '${t}' is not defined by "exports" in ${e}package.json${n ? ` imported from ${n}` : ""}`, Error), ya("ERR_UNSUPPORTED_DIR_IMPORT", "Directory import '%s' is not supported resolving ES modules imported from %s", Error), ya("ERR_UNSUPPORTED_RESOLVE_REQUEST", "Failed to resolve module specifier \"%s\" from \"%s\": Invalid relative URL or base scheme is not hierarchical.", TypeError), ya("ERR_UNKNOWN_FILE_EXTENSION", (e, t) => `Unknown file extension "${e}" for ${t}`, TypeError), ya("ERR_INVALID_ARG_VALUE", (e, t, r = "is invalid") => {
	let i = (0, n.inspect)(t);
	return i.length > 128 && (i = `${i.slice(0, 128)}...`), `The ${e.includes(".") ? "property" : "argument"} '${e}' ${r}. Received ${i}`;
}, TypeError);
function ya(e, t, n) {
	return ga.set(e, t), ba(n, e);
}
function ba(e, t) {
	return n;
	function n(...n) {
		let r = Error.stackTraceLimit;
		xa() && (Error.stackTraceLimit = 0);
		let i = new e();
		xa() && (Error.stackTraceLimit = r);
		let a = wa(t, n, i);
		return Object.defineProperties(i, {
			message: {
				value: a,
				enumerable: !1,
				writable: !0,
				configurable: !0
			},
			toString: {
				value() {
					return `${this.name} [${t}]: ${this.message}`;
				},
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), Ca(i), i.code = t, i;
	}
}
function xa() {
	try {
		if (n.default.startupSnapshot.isBuildingSnapshot()) return !1;
	} catch {}
	let e = Object.getOwnPropertyDescriptor(Error, "stackTraceLimit");
	return e === void 0 ? Object.isExtensible(Error) : fa.call(e, "writable") && e.writable !== void 0 ? e.writable : e.set !== void 0;
}
function Sa(e) {
	let t = _a + e.name;
	return Object.defineProperty(e, "name", { value: t }), e;
}
var Ca = Sa(function(e) {
	let t = xa();
	return t && (va = Error.stackTraceLimit, Error.stackTraceLimit = Infinity), Error.captureStackTrace(e), t && (Error.stackTraceLimit = va), e;
});
function wa(e, t, r) {
	let i = ga.get(e);
	if (n.default.ok(i !== void 0, "expected `message` to be found"), typeof i == "function") return n.default.ok(i.length <= t.length, `Code: ${e}; The provided arguments length (${t.length}) does not match the required ones (${i.length}).`), Reflect.apply(i, r, t);
	let a = /%[dfijoOs]/g, o = 0;
	for (; a.exec(i) !== null;) o++;
	return n.default.ok(o === t.length, `Code: ${e}; The provided arguments length (${t.length}) does not match the required ones (${o}).`), t.length === 0 ? i : (t.unshift(i), Reflect.apply(n.format, null, t));
}
function Ta(e) {
	if (e == null) return String(e);
	if (typeof e == "function" && e.name) return `function ${e.name}`;
	if (typeof e == "object") return e.constructor && e.constructor.name ? `an instance of ${e.constructor.name}` : `${(0, n.inspect)(e, { depth: -1 })}`;
	let t = (0, n.inspect)(e, { colors: !1 });
	return t.length > 28 && (t = `${t.slice(0, 25)}...`), `type ${typeof e} (${t})`;
}
var Ea = Object.freeze(["node", "import"]);
new Set(Ea), Object.freeze({}), process.env.DEBUG_VITE_SOURCEMAP_COMBINE_FILTER, $("vite:sourcemap-combine", { onlyWhenFocused: !0 }), $("vite:resolve"), $("vite:plugin-resolve", { onlyWhenFocused: "vite:plugin" }), $("vite:plugin-transform", { onlyWhenFocused: "vite:plugin" }), $("vite:plugin-container-context"), n.default.appendFile, n.default.copyFile, n.default.mkdir, n.default.mkdtemp, n.default.readdir, n.default.readFile, n.default.realpath, n.default.rename, n.default.rmdir, n.default.stat, n.default.lstat, n.default.unlink, n.default.writeFile;
var Da = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("fs"), { Readable: r } = Q("stream"), i = Q("path"), { promisify: a } = Q("util"), o = Q("picomatch"), s = a(n.readdir), c = a(n.stat), l = a(n.lstat), u = a(n.realpath), d = "READDIRP_RECURSIVE_ERROR", f = /* @__PURE__ */ new Set([
		"ENOENT",
		"EPERM",
		"EACCES",
		"ELOOP",
		d
	]), p = "files", m = "directories", h = "files_directories", g = [
		p,
		m,
		h,
		"all"
	], _ = (e) => f.has(e.code), [v, y] = process.versions.node.split(".").slice(0, 2).map((e) => Number.parseInt(e, 10)), b = process.platform === "win32" && (v > 10 || v === 10 && y >= 5), x = (e) => {
		if (e !== void 0) {
			if (typeof e == "function") return e;
			if (typeof e == "string") {
				let t = o(e.trim());
				return (e) => t(e.basename);
			}
			if (Array.isArray(e)) {
				let t = [], n = [];
				for (let r of e) {
					let e = r.trim();
					e.charAt(0) === "!" ? n.push(o(e.slice(1))) : t.push(o(e));
				}
				return n.length > 0 ? t.length > 0 ? (e) => t.some((t) => t(e.basename)) && !n.some((t) => t(e.basename)) : (e) => !n.some((t) => t(e.basename)) : (e) => t.some((t) => t(e.basename));
			}
		}
	};
	var S = class e extends r {
		static get defaultOptions() {
			return {
				root: ".",
				fileFilter: (e) => !0,
				directoryFilter: (e) => !0,
				type: p,
				lstat: !1,
				depth: 2147483648,
				alwaysStat: !1
			};
		}
		constructor(t = {}) {
			super({
				objectMode: !0,
				autoDestroy: !0,
				highWaterMark: t.highWaterMark || 4096
			});
			let r = {
				...e.defaultOptions,
				...t
			}, { root: a, type: o } = r;
			this._fileFilter = x(r.fileFilter), this._directoryFilter = x(r.directoryFilter);
			let s = r.lstat ? l : c;
			this._stat = b ? (e) => s(e, { bigint: !0 }) : s, this._maxDepth = r.depth, this._wantsDir = [
				m,
				h,
				"all"
			].includes(o), this._wantsFile = [
				p,
				h,
				"all"
			].includes(o), this._wantsEverything = o === "all", this._root = i.resolve(a), this._isDirent = "Dirent" in n && !r.alwaysStat, this._statsProp = this._isDirent ? "dirent" : "stats", this._rdOptions = {
				encoding: "utf8",
				withFileTypes: this._isDirent
			}, this.parents = [this._exploreDir(a, 1)], this.reading = !1, this.parent = void 0;
		}
		async _read(e) {
			if (!this.reading) {
				this.reading = !0;
				try {
					for (; !this.destroyed && e > 0;) {
						let { path: t, depth: n, files: r = [] } = this.parent || {};
						if (r.length > 0) {
							let i = r.splice(0, e).map((e) => this._formatEntry(e, t));
							for (let t of await Promise.all(i)) {
								if (this.destroyed) return;
								let r = await this._getEntryType(t);
								r === "directory" && this._directoryFilter(t) ? (n <= this._maxDepth && this.parents.push(this._exploreDir(t.fullPath, n + 1)), this._wantsDir && (this.push(t), e--)) : (r === "file" || this._includeAsFile(t)) && this._fileFilter(t) && this._wantsFile && (this.push(t), e--);
							}
						} else {
							let e = this.parents.pop();
							if (!e) {
								this.push(null);
								break;
							}
							if (this.parent = await e, this.destroyed) return;
						}
					}
				} catch (e) {
					this.destroy(e);
				} finally {
					this.reading = !1;
				}
			}
		}
		async _exploreDir(e, t) {
			let n;
			try {
				n = await s(e, this._rdOptions);
			} catch (e) {
				this._onError(e);
			}
			return {
				files: n,
				depth: t,
				path: e
			};
		}
		async _formatEntry(e, t) {
			let n;
			try {
				let r = this._isDirent ? e.name : e, a = i.resolve(i.join(t, r));
				n = {
					path: i.relative(this._root, a),
					fullPath: a,
					basename: r
				}, n[this._statsProp] = this._isDirent ? e : await this._stat(a);
			} catch (e) {
				this._onError(e);
			}
			return n;
		}
		_onError(e) {
			_(e) && !this.destroyed ? this.emit("warn", e) : this.destroy(e);
		}
		async _getEntryType(e) {
			let t = e && e[this._statsProp];
			if (t) {
				if (t.isFile()) return "file";
				if (t.isDirectory()) return "directory";
				if (t && t.isSymbolicLink()) {
					let t = e.fullPath;
					try {
						let e = await u(t), n = await l(e);
						if (n.isFile()) return "file";
						if (n.isDirectory()) {
							let n = e.length;
							if (t.startsWith(e) && t.substr(n, 1) === i.sep) {
								let n = /* @__PURE__ */ Error(`Circular symlink detected: "${t}" points to "${e}"`);
								return n.code = d, this._onError(n);
							}
							return "directory";
						}
					} catch (e) {
						this._onError(e);
					}
				}
			}
		}
		_includeAsFile(e) {
			let t = e && e[this._statsProp];
			return t && this._wantsEverything && !t.isDirectory();
		}
	};
	let C = (e, t = {}) => {
		let n = t.entryType || t.type;
		if (n === "both" && (n = h), n && (t.type = n), !e) throw Error("readdirp: root argument is required. Usage: readdirp(root, options)");
		if (typeof e != "string") throw TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");
		if (n && !g.includes(n)) throw Error(`readdirp: Invalid type passed. Use one of ${g.join(", ")}`);
		return t.root = e, new S(t);
	};
	C.promise = (e, t = {}) => new Promise((n, r) => {
		let i = [];
		C(e, t).on("data", (e) => i.push(e)).on("end", () => n(i)).on("error", (e) => r(e));
	}), C.ReaddirpStream = S, C.default = C, t.exports = C;
})), Oa = /* @__PURE__ */ Z(((e, t) => {
	t.exports = function(e, t) {
		if (typeof e != "string") throw TypeError("expected path to be a string");
		if (e === "\\" || e === "/") return "/";
		var n = e.length;
		if (n <= 1) return e;
		var r = "";
		if (n > 4 && e[3] === "\\") {
			var i = e[2];
			(i === "?" || i === ".") && e.slice(0, 2) === "\\\\" && (e = e.slice(2), r = "//");
		}
		var a = e.split(/[/\\]+/);
		return t !== !1 && a[a.length - 1] === "" && a.pop(), r + a.join("/");
	};
})), ka = /* @__PURE__ */ Z(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	let n = Q("picomatch"), r = Oa(), i = { returnIndex: !1 }, a = (e) => Array.isArray(e) ? e : [e], o = (e, t) => {
		if (typeof e == "function") return e;
		if (typeof e == "string") {
			let r = n(e, t);
			return (t) => e === t || r(t);
		}
		return e instanceof RegExp ? (t) => e.test(t) : (e) => !1;
	}, s = (e, t, n, i) => {
		let a = Array.isArray(n), o = a ? n[0] : n;
		if (!a && typeof o != "string") throw TypeError("anymatch: second argument must be a string: got " + Object.prototype.toString.call(o));
		let s = r(o, !1);
		for (let e = 0; e < t.length; e++) {
			let n = t[e];
			if (n(s)) return i ? -1 : !1;
		}
		let c = a && [s].concat(n.slice(1));
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (a ? n(...c) : n(s)) return !i || t;
		}
		return i ? -1 : !1;
	}, c = (e, t, r = i) => {
		if (e == null) throw TypeError("anymatch: specify first argument");
		let c = typeof r == "boolean" ? { returnIndex: r } : r, l = c.returnIndex || !1, u = a(e), d = u.filter((e) => typeof e == "string" && e.charAt(0) === "!").map((e) => e.slice(1)).map((e) => n(e, c)), f = u.filter((e) => typeof e != "string" || typeof e == "string" && e.charAt(0) !== "!").map((e) => o(e, c));
		return t == null ? (e, t = !1) => s(f, d, e, typeof t == "boolean" && t) : s(f, d, t, l);
	};
	c.default = c, t.exports = c;
})), Aa = /* @__PURE__ */ Z(((e, t) => {
	t.exports = function(e) {
		if (typeof e != "string" || e === "") return !1;
		for (var t; t = /(\\).|([@?!+*]\(.*\))/g.exec(e);) {
			if (t[2]) return !0;
			e = e.slice(t.index + t[0].length);
		}
		return !1;
	};
})), ja = /* @__PURE__ */ Z(((e, t) => {
	var n = Aa(), r = {
		"{": "}",
		"(": ")",
		"[": "]"
	}, i = function(e) {
		if (e[0] === "!") return !0;
		for (var t = 0, n = -2, i = -2, a = -2, o = -2, s = -2; t < e.length;) {
			if (e[t] === "*" || e[t + 1] === "?" && /[\].+)]/.test(e[t]) || i !== -1 && e[t] === "[" && e[t + 1] !== "]" && (i < t && (i = e.indexOf("]", t)), i > t && (s === -1 || s > i || (s = e.indexOf("\\", t), s === -1 || s > i))) || a !== -1 && e[t] === "{" && e[t + 1] !== "}" && (a = e.indexOf("}", t), a > t && (s = e.indexOf("\\", t), s === -1 || s > a)) || o !== -1 && e[t] === "(" && e[t + 1] === "?" && /[:!=]/.test(e[t + 2]) && e[t + 3] !== ")" && (o = e.indexOf(")", t), o > t && (s = e.indexOf("\\", t), s === -1 || s > o)) || n !== -1 && e[t] === "(" && e[t + 1] !== "|" && (n < t && (n = e.indexOf("|", t)), n !== -1 && e[n + 1] !== ")" && (o = e.indexOf(")", n), o > n && (s = e.indexOf("\\", n), s === -1 || s > o)))) return !0;
			if (e[t] === "\\") {
				var c = e[t + 1];
				t += 2;
				var l = r[c];
				if (l) {
					var u = e.indexOf(l, t);
					u !== -1 && (t = u + 1);
				}
				if (e[t] === "!") return !0;
			} else t++;
		}
		return !1;
	}, a = function(e) {
		if (e[0] === "!") return !0;
		for (var t = 0; t < e.length;) {
			if (/[*?{}()[\]]/.test(e[t])) return !0;
			if (e[t] === "\\") {
				var n = e[t + 1];
				t += 2;
				var i = r[n];
				if (i) {
					var a = e.indexOf(i, t);
					a !== -1 && (t = a + 1);
				}
				if (e[t] === "!") return !0;
			} else t++;
		}
		return !1;
	};
	t.exports = function(e, t) {
		if (typeof e != "string" || e === "") return !1;
		if (n(e)) return !0;
		var r = i;
		return t && t.strict === !1 && (r = a), r(e);
	};
})), Ma = /* @__PURE__ */ Z(((e, t) => {
	var n = ja(), r = Q("path").posix.dirname, i = Q("os").platform() === "win32", a = "/", o = /\\/g, s = /[\{\[].*[\}\]]$/, c = /(^|[^\\])([\{\[]|\([^\)]+$)/, l = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
	t.exports = function(e, t) {
		Object.assign({ flipBackslashes: !0 }, t).flipBackslashes && i && e.indexOf(a) < 0 && (e = e.replace(o, a)), s.test(e) && (e += a), e += "a";
		do
			e = r(e);
		while (n(e) || c.test(e));
		return e.replace(l, "$1");
	};
})), Na = /* @__PURE__ */ Z(((e) => {
	e.isInteger = (e) => typeof e == "number" ? Number.isInteger(e) : typeof e == "string" && e.trim() !== "" && Number.isInteger(Number(e)), e.find = (e, t) => e.nodes.find((e) => e.type === t), e.exceedsLimit = (t, n, r = 1, i) => i === !1 || !e.isInteger(t) || !e.isInteger(n) ? !1 : (Number(n) - Number(t)) / Number(r) >= i, e.escapeNode = (e, t = 0, n) => {
		let r = e.nodes[t];
		r && (n && r.type === n || r.type === "open" || r.type === "close") && r.escaped !== !0 && (r.value = "\\" + r.value, r.escaped = !0);
	}, e.encloseBrace = (e) => e.type === "brace" ? e.commas >> 0 + e.ranges | 0 ? !1 : (e.invalid = !0, !0) : !1, e.isInvalidBrace = (e) => e.type === "brace" ? e.invalid === !0 || e.dollar ? !0 : !(e.commas >> 0 + e.ranges | 0) || e.open !== !0 || e.close !== !0 ? (e.invalid = !0, !0) : !1 : !1, e.isOpenOrClose = (e) => e.type === "open" || e.type === "close" || e.open === !0 || e.close === !0, e.reduce = (e) => e.reduce((e, t) => (t.type === "text" && e.push(t.value), t.type === "range" && (t.type = "text"), e), []), e.flatten = (...e) => {
		let t = [], n = (e) => {
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				Array.isArray(i) ? n(i) : i !== void 0 && t.push(i);
			}
			return t;
		};
		return n(e), t;
	};
})), Pa = /* @__PURE__ */ Z(((e, t) => {
	let n = Na();
	t.exports = (e, t = {}) => {
		let r = (e, i = {}) => {
			let a = t.escapeInvalid && n.isInvalidBrace(i), o = e.invalid === !0 && t.escapeInvalid === !0, s = "";
			if (e.value) return (a || o) && n.isOpenOrClose(e) ? "\\" + e.value : e.value;
			if (e.value) return e.value;
			if (e.nodes) for (let t of e.nodes) s += r(t);
			return s;
		};
		return r(e);
	};
})), Fa = /* @__PURE__ */ Z(((e, t) => {
	t.exports = function(e) {
		return typeof e == "number" ? e - e === 0 : typeof e == "string" && e.trim() !== "" ? Number.isFinite ? Number.isFinite(+e) : isFinite(+e) : !1;
	};
})), Ia = /* @__PURE__ */ Z(((e, t) => {
	let n = Fa(), r = (e, t, a) => {
		if (n(e) === !1) throw TypeError("toRegexRange: expected the first argument to be a number");
		if (t === void 0 || e === t) return String(e);
		if (n(t) === !1) throw TypeError("toRegexRange: expected the second argument to be a number.");
		let o = {
			relaxZeros: !0,
			...a
		};
		typeof o.strictZeros == "boolean" && (o.relaxZeros = o.strictZeros === !1);
		let c = String(o.relaxZeros), l = String(o.shorthand), u = String(o.capture), d = String(o.wrap), f = e + ":" + t + "=" + c + l + u + d;
		if (r.cache.hasOwnProperty(f)) return r.cache[f].result;
		let p = Math.min(e, t), m = Math.max(e, t);
		if (Math.abs(p - m) === 1) {
			let n = e + "|" + t;
			return o.capture ? `(${n})` : o.wrap === !1 ? n : `(?:${n})`;
		}
		let h = g(e) || g(t), _ = {
			min: e,
			max: t,
			a: p,
			b: m
		}, v = [], y = [];
		return h && (_.isPadded = h, _.maxLen = String(_.max).length), p < 0 && (y = s(m < 0 ? Math.abs(m) : 1, Math.abs(p), _, o), p = _.a = 0), m >= 0 && (v = s(p, m, _, o)), _.negatives = y, _.positives = v, _.result = i(y, v, o), o.capture === !0 ? _.result = `(${_.result})` : o.wrap !== !1 && v.length + y.length > 1 && (_.result = `(?:${_.result})`), r.cache[f] = _, _.result;
	};
	function i(e, t, n) {
		let r = c(e, t, "-", !1, n) || [], i = c(t, e, "", !1, n) || [], a = c(e, t, "-?", !0, n) || [];
		return r.concat(a).concat(i).join("|");
	}
	function a(e, t) {
		let n = 1, r = 1, i = f(e, n), a = /* @__PURE__ */ new Set([t]);
		for (; e <= i && i <= t;) a.add(i), n += 1, i = f(e, n);
		for (i = p(t + 1, r) - 1; e < i && i <= t;) a.add(i), r += 1, i = p(t + 1, r) - 1;
		return a = [...a], a.sort(u), a;
	}
	function o(e, t, n) {
		if (e === t) return {
			pattern: e,
			count: [],
			digits: 0
		};
		let r = l(e, t), i = r.length, a = "", o = 0;
		for (let e = 0; e < i; e++) {
			let [t, i] = r[e];
			t === i ? a += t : t !== "0" || i !== "9" ? a += h(t, i, n) : o++;
		}
		return o && (a += n.shorthand === !0 ? "\\d" : "[0-9]"), {
			pattern: a,
			count: [o],
			digits: i
		};
	}
	function s(e, t, n, r) {
		let i = a(e, t), s = [], c = e, l;
		for (let e = 0; e < i.length; e++) {
			let t = i[e], a = o(String(c), String(t), r), u = "";
			!n.isPadded && l && l.pattern === a.pattern ? (l.count.length > 1 && l.count.pop(), l.count.push(a.count[0]), l.string = l.pattern + m(l.count), c = t + 1) : (n.isPadded && (u = _(t, n, r)), a.string = u + a.pattern + m(a.count), s.push(a), c = t + 1, l = a);
		}
		return s;
	}
	function c(e, t, n, r, i) {
		let a = [];
		for (let i of e) {
			let { string: e } = i;
			!r && !d(t, "string", e) && a.push(n + e), r && d(t, "string", e) && a.push(n + e);
		}
		return a;
	}
	function l(e, t) {
		let n = [];
		for (let r = 0; r < e.length; r++) n.push([e[r], t[r]]);
		return n;
	}
	function u(e, t) {
		return e > t ? 1 : t > e ? -1 : 0;
	}
	function d(e, t, n) {
		return e.some((e) => e[t] === n);
	}
	function f(e, t) {
		return Number(String(e).slice(0, -t) + "9".repeat(t));
	}
	function p(e, t) {
		return e - e % 10 ** t;
	}
	function m(e) {
		let [t = 0, n = ""] = e;
		return n || t > 1 ? `{${t + (n ? "," + n : "")}}` : "";
	}
	function h(e, t, n) {
		return `[${e}${t - e === 1 ? "" : "-"}${t}]`;
	}
	function g(e) {
		return /^-?(0+)\d/.test(e);
	}
	function _(e, t, n) {
		if (!t.isPadded) return e;
		let r = Math.abs(t.maxLen - String(e).length), i = n.relaxZeros !== !1;
		switch (r) {
			case 0: return "";
			case 1: return i ? "0?" : "0";
			case 2: return i ? "0{0,2}" : "00";
			default: return i ? `0{0,${r}}` : `0{${r}}`;
		}
	}
	r.cache = {}, r.clearCache = () => r.cache = {}, t.exports = r;
})), La = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("util"), r = Ia(), i = (e) => typeof e == "object" && !!e && !Array.isArray(e), a = (e) => (t) => e === !0 ? Number(t) : String(t), o = (e) => typeof e == "number" || typeof e == "string" && e !== "", s = (e) => Number.isInteger(+e), c = (e) => {
		let t = `${e}`, n = -1;
		if (t[0] === "-" && (t = t.slice(1)), t === "0") return !1;
		for (; t[++n] === "0";);
		return n > 0;
	}, l = (e, t, n) => typeof e == "string" || typeof t == "string" || n.stringify === !0, u = (e, t, n) => {
		if (t > 0) {
			let n = e[0] === "-" ? "-" : "";
			n && (e = e.slice(1)), e = n + e.padStart(n ? t - 1 : t, "0");
		}
		return n === !1 ? String(e) : e;
	}, d = (e, t) => {
		let n = e[0] === "-" ? "-" : "";
		for (n && (e = e.slice(1), t--); e.length < t;) e = "0" + e;
		return n ? "-" + e : e;
	}, f = (e, t, n) => {
		e.negatives.sort((e, t) => e < t ? -1 : +(e > t)), e.positives.sort((e, t) => e < t ? -1 : +(e > t));
		let r = t.capture ? "" : "?:", i = "", a = "", o;
		return e.positives.length && (i = e.positives.map((e) => d(String(e), n)).join("|")), e.negatives.length && (a = `-(${r}${e.negatives.map((e) => d(String(e), n)).join("|")})`), o = i && a ? `${i}|${a}` : i || a, t.wrap ? `(${r}${o})` : o;
	}, p = (e, t, n, i) => {
		if (n) return r(e, t, {
			wrap: !1,
			...i
		});
		let a = String.fromCharCode(e);
		return e === t ? a : `[${a}-${String.fromCharCode(t)}]`;
	}, m = (e, t, n) => Array.isArray(e) ? n.wrap === !0 ? `(${n.capture ? "" : "?:"}${e.join("|")})` : e.join("|") : r(e, t, n), h = (...e) => /* @__PURE__ */ RangeError("Invalid range arguments: " + n.inspect(...e)), g = (e, t, n) => {
		if (n.strictRanges === !0) throw h([e, t]);
		return [];
	}, _ = (e, t) => {
		if (t.strictRanges === !0) throw TypeError(`Expected step "${e}" to be a number`);
		return [];
	}, v = (e, t, n = 1, r = {}) => {
		let i = Number(e), o = Number(t);
		if (!Number.isInteger(i) || !Number.isInteger(o)) {
			if (r.strictRanges === !0) throw h([e, t]);
			return [];
		}
		i === 0 && (i = 0), o === 0 && (o = 0);
		let s = i > o, g = String(e), _ = String(t), v = String(n);
		n = Math.max(Math.abs(n), 1);
		let y = c(g) || c(_) || c(v), b = y ? Math.max(g.length, _.length, v.length) : 0, x = y === !1 && l(e, t, r) === !1, S = r.transform || a(x);
		if (r.toRegex && n === 1) return p(d(e, b), d(t, b), !0, r);
		let C = {
			negatives: [],
			positives: []
		}, w = (e) => C[e < 0 ? "negatives" : "positives"].push(Math.abs(e)), T = [], E = 0;
		for (; s ? i >= o : i <= o;) r.toRegex === !0 && n > 1 ? w(i) : T.push(u(S(i, E), b, x)), i = s ? i - n : i + n, E++;
		return r.toRegex === !0 ? n > 1 ? f(C, r, b) : m(T, null, {
			wrap: !1,
			...r
		}) : T;
	}, y = (e, t, n = 1, r = {}) => {
		if (!s(e) && e.length > 1 || !s(t) && t.length > 1) return g(e, t, r);
		let i = r.transform || ((e) => String.fromCharCode(e)), a = `${e}`.charCodeAt(0), o = `${t}`.charCodeAt(0), c = a > o, l = Math.min(a, o), u = Math.max(a, o);
		if (r.toRegex && n === 1) return p(l, u, !1, r);
		let d = [], f = 0;
		for (; c ? a >= o : a <= o;) d.push(i(a, f)), a = c ? a - n : a + n, f++;
		return r.toRegex === !0 ? m(d, null, {
			wrap: !1,
			options: r
		}) : d;
	}, b = (e, t, n, r = {}) => {
		if (t == null && o(e)) return [e];
		if (!o(e) || !o(t)) return g(e, t, r);
		if (typeof n == "function") return b(e, t, 1, { transform: n });
		if (i(n)) return b(e, t, 0, n);
		let a = { ...r };
		return a.capture === !0 && (a.wrap = !0), n = n || a.step || 1, s(n) ? s(e) && s(t) ? v(e, t, n, a) : y(e, t, Math.max(Math.abs(n), 1), a) : n != null && !i(n) ? _(n, a) : b(e, t, 1, n);
	};
	t.exports = b;
})), Ra = /* @__PURE__ */ Z(((e, t) => {
	let n = La(), r = Na();
	t.exports = (e, t = {}) => {
		let i = (e, a = {}) => {
			let o = r.isInvalidBrace(a) === !0 || e.invalid === !0 && t.escapeInvalid === !0, s = t.escapeInvalid === !0 ? "\\" : "", c = "";
			if (e.isOpen === !0) return s + e.value;
			if (e.isClose === !0) return console.log("node.isClose", s, e.value), s + e.value;
			if (e.type === "open") return o ? s + e.value : "(";
			if (e.type === "close") return o ? s + e.value : ")";
			if (e.type === "comma") return e.prev.type === "comma" ? "" : o ? e.value : "|";
			if (e.value) return e.value;
			if (e.nodes && e.ranges > 0) {
				let i = r.reduce(e.nodes), a = n(...i, {
					...t,
					wrap: !1,
					toRegex: !0,
					strictZeros: !0
				});
				if (a.length !== 0) return i.length > 1 && a.length > 1 ? `(${a})` : a;
			}
			if (e.nodes) for (let t of e.nodes) c += i(t, e);
			return c;
		};
		return i(e);
	};
})), za = /* @__PURE__ */ Z(((e, t) => {
	let n = La(), r = Pa(), i = Na(), a = (e = "", t = "", n = !1) => {
		let r = [];
		if (e = [].concat(e), t = [].concat(t), !t.length) return e;
		if (!e.length) return n ? i.flatten(t).map((e) => `{${e}}`) : t;
		for (let i of e) if (Array.isArray(i)) for (let e of i) r.push(a(e, t, n));
		else for (let e of t) n === !0 && typeof e == "string" && (e = `{${e}}`), r.push(Array.isArray(e) ? a(i, e, n) : i + e);
		return i.flatten(r);
	};
	t.exports = (e, t = {}) => {
		let o = t.rangeLimit === void 0 ? 1e3 : t.rangeLimit, s = (e, c = {}) => {
			e.queue = [];
			let l = c, u = c.queue;
			for (; l.type !== "brace" && l.type !== "root" && l.parent;) l = l.parent, u = l.queue;
			if (e.invalid || e.dollar) {
				u.push(a(u.pop(), r(e, t)));
				return;
			}
			if (e.type === "brace" && e.invalid !== !0 && e.nodes.length === 2) {
				u.push(a(u.pop(), ["{}"]));
				return;
			}
			if (e.nodes && e.ranges > 0) {
				let s = i.reduce(e.nodes);
				if (i.exceedsLimit(...s, t.step, o)) throw RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
				let c = n(...s, t);
				c.length === 0 && (c = r(e, t)), u.push(a(u.pop(), c)), e.nodes = [];
				return;
			}
			let d = i.encloseBrace(e), f = e.queue, p = e;
			for (; p.type !== "brace" && p.type !== "root" && p.parent;) p = p.parent, f = p.queue;
			for (let t = 0; t < e.nodes.length; t++) {
				let n = e.nodes[t];
				n.type === "comma" && e.type === "brace" ? (t === 1 && f.push(""), f.push("")) : n.type === "close" ? u.push(a(u.pop(), f, d)) : n.value && n.type !== "open" ? f.push(a(f.pop(), n.value)) : n.nodes && s(n, e);
			}
			return f;
		};
		return i.flatten(s(e));
	};
})), Ba = /* @__PURE__ */ Z(((e, t) => {
	t.exports = {
		MAX_LENGTH: 1e4,
		CHAR_0: "0",
		CHAR_9: "9",
		CHAR_UPPERCASE_A: "A",
		CHAR_LOWERCASE_A: "a",
		CHAR_UPPERCASE_Z: "Z",
		CHAR_LOWERCASE_Z: "z",
		CHAR_LEFT_PARENTHESES: "(",
		CHAR_RIGHT_PARENTHESES: ")",
		CHAR_ASTERISK: "*",
		CHAR_AMPERSAND: "&",
		CHAR_AT: "@",
		CHAR_BACKSLASH: "\\",
		CHAR_BACKTICK: "`",
		CHAR_CARRIAGE_RETURN: "\r",
		CHAR_CIRCUMFLEX_ACCENT: "^",
		CHAR_COLON: ":",
		CHAR_COMMA: ",",
		CHAR_DOLLAR: "$",
		CHAR_DOT: ".",
		CHAR_DOUBLE_QUOTE: "\"",
		CHAR_EQUAL: "=",
		CHAR_EXCLAMATION_MARK: "!",
		CHAR_FORM_FEED: "\f",
		CHAR_FORWARD_SLASH: "/",
		CHAR_HASH: "#",
		CHAR_HYPHEN_MINUS: "-",
		CHAR_LEFT_ANGLE_BRACKET: "<",
		CHAR_LEFT_CURLY_BRACE: "{",
		CHAR_LEFT_SQUARE_BRACKET: "[",
		CHAR_LINE_FEED: "\n",
		CHAR_NO_BREAK_SPACE: "\xA0",
		CHAR_PERCENT: "%",
		CHAR_PLUS: "+",
		CHAR_QUESTION_MARK: "?",
		CHAR_RIGHT_ANGLE_BRACKET: ">",
		CHAR_RIGHT_CURLY_BRACE: "}",
		CHAR_RIGHT_SQUARE_BRACKET: "]",
		CHAR_SEMICOLON: ";",
		CHAR_SINGLE_QUOTE: "'",
		CHAR_SPACE: " ",
		CHAR_TAB: "	",
		CHAR_UNDERSCORE: "_",
		CHAR_VERTICAL_LINE: "|",
		CHAR_ZERO_WIDTH_NOBREAK_SPACE: "﻿"
	};
})), Va = /* @__PURE__ */ Z(((e, t) => {
	let n = Pa(), { MAX_LENGTH: r, CHAR_BACKSLASH: i, CHAR_BACKTICK: a, CHAR_COMMA: o, CHAR_DOT: s, CHAR_LEFT_PARENTHESES: c, CHAR_RIGHT_PARENTHESES: l, CHAR_LEFT_CURLY_BRACE: u, CHAR_RIGHT_CURLY_BRACE: d, CHAR_LEFT_SQUARE_BRACKET: f, CHAR_RIGHT_SQUARE_BRACKET: p, CHAR_DOUBLE_QUOTE: m, CHAR_SINGLE_QUOTE: h, CHAR_NO_BREAK_SPACE: g, CHAR_ZERO_WIDTH_NOBREAK_SPACE: _ } = Ba();
	t.exports = (e, t = {}) => {
		if (typeof e != "string") throw TypeError("Expected a string");
		let v = t || {}, y = typeof v.maxLength == "number" ? Math.min(r, v.maxLength) : r;
		if (e.length > y) throw SyntaxError(`Input length (${e.length}), exceeds max characters (${y})`);
		let b = {
			type: "root",
			input: e,
			nodes: []
		}, x = [b], S = b, C = b, w = 0, T = e.length, E = 0, D = 0, O, k = () => e[E++], A = (e) => {
			if (e.type === "text" && C.type === "dot" && (C.type = "text"), C && C.type === "text" && e.type === "text") C.value += e.value;
			else return S.nodes.push(e), e.parent = S, e.prev = C, C = e, e;
		};
		for (A({ type: "bos" }); E < T;) if (S = x[x.length - 1], O = k(), O !== _ && O !== g) {
			if (O === i) A({
				type: "text",
				value: (t.keepEscaping ? O : "") + k()
			});
			else if (O === p) A({
				type: "text",
				value: "\\" + O
			});
			else if (O === f) {
				w++;
				let e;
				for (; E < T && (e = k());) if (O += e, e === f) w++;
				else if (e === i) O += k();
				else if (e === p && (w--, w === 0)) break;
				A({
					type: "text",
					value: O
				});
			} else if (O === c) S = A({
				type: "paren",
				nodes: []
			}), x.push(S), A({
				type: "text",
				value: O
			});
			else if (O === l) {
				if (S.type !== "paren") {
					A({
						type: "text",
						value: O
					});
					continue;
				}
				S = x.pop(), A({
					type: "text",
					value: O
				}), S = x[x.length - 1];
			} else if (O === m || O === h || O === a) {
				let e = O, n;
				for (t.keepQuotes !== !0 && (O = ""); E < T && (n = k());) if (n === i) O += n + k();
				else {
					if (n === e) {
						t.keepQuotes === !0 && (O += n);
						break;
					}
					O += n;
				}
				A({
					type: "text",
					value: O
				});
			} else if (O === u) D++, S = A({
				type: "brace",
				open: !0,
				close: !1,
				dollar: C.value && C.value.slice(-1) === "$" || S.dollar === !0,
				depth: D,
				commas: 0,
				ranges: 0,
				nodes: []
			}), x.push(S), A({
				type: "open",
				value: O
			});
			else if (O === d) {
				if (S.type !== "brace") {
					A({
						type: "text",
						value: O
					});
					continue;
				}
				S = x.pop(), S.close = !0, A({
					type: "close",
					value: O
				}), D--, S = x[x.length - 1];
			} else if (O === o && D > 0) {
				if (S.ranges > 0) {
					S.ranges = 0;
					let e = S.nodes.shift();
					S.nodes = [e, {
						type: "text",
						value: n(S)
					}];
				}
				A({
					type: "comma",
					value: O
				}), S.commas++;
			} else if (O === s && D > 0 && S.commas === 0) {
				let e = S.nodes;
				if (D === 0 || e.length === 0) {
					A({
						type: "text",
						value: O
					});
					continue;
				}
				if (C.type === "dot") {
					if (S.range = [], C.value += O, C.type = "range", S.nodes.length !== 3 && S.nodes.length !== 5) {
						S.invalid = !0, S.ranges = 0, C.type = "text";
						continue;
					}
					S.ranges++, S.args = [];
					continue;
				}
				if (C.type === "range") {
					e.pop();
					let t = e[e.length - 1];
					t.value += C.value + O, C = t, S.ranges--;
					continue;
				}
				A({
					type: "dot",
					value: O
				});
			} else A({
				type: "text",
				value: O
			});
		}
		do
			if (S = x.pop(), S.type !== "root") {
				S.nodes.forEach((e) => {
					e.nodes || (e.type === "open" && (e.isOpen = !0), e.type === "close" && (e.isClose = !0), e.nodes || (e.type = "text"), e.invalid = !0);
				});
				let e = x[x.length - 1], t = e.nodes.indexOf(S);
				e.nodes.splice(t, 1, ...S.nodes);
			}
		while (x.length > 0);
		return A({ type: "eos" }), b;
	};
})), Ha = /* @__PURE__ */ Z(((e, t) => {
	let n = Pa(), r = Ra(), i = za(), a = Va(), o = (e, t = {}) => {
		let n = [];
		if (Array.isArray(e)) for (let r of e) {
			let e = o.create(r, t);
			Array.isArray(e) ? n.push(...e) : n.push(e);
		}
		else n = [].concat(o.create(e, t));
		return t && t.expand === !0 && t.nodupes === !0 && (n = [...new Set(n)]), n;
	};
	o.parse = (e, t = {}) => a(e, t), o.stringify = (e, t = {}) => n(typeof e == "string" ? o.parse(e, t) : e, t), o.compile = (e, t = {}) => (typeof e == "string" && (e = o.parse(e, t)), r(e, t)), o.expand = (e, t = {}) => {
		typeof e == "string" && (e = o.parse(e, t));
		let n = i(e, t);
		return t.noempty === !0 && (n = n.filter(Boolean)), t.nodupes === !0 && (n = [...new Set(n)]), n;
	}, o.create = (e, t = {}) => e === "" || e.length < 3 ? [e] : t.expand === !0 ? o.expand(e, t) : o.compile(e, t), t.exports = o;
})), Ua = /* @__PURE__ */ Z(((e, t) => {
	t.exports = /* @__PURE__ */ "3dm.3ds.3g2.3gp.7z.a.aac.adp.afdesign.afphoto.afpub.ai.aif.aiff.alz.ape.apk.appimage.ar.arj.asf.au.avi.bak.baml.bh.bin.bk.bmp.btif.bz2.bzip2.cab.caf.cgm.class.cmx.cpio.cr2.cur.dat.dcm.deb.dex.djvu.dll.dmg.dng.doc.docm.docx.dot.dotm.dra.DS_Store.dsk.dts.dtshd.dvb.dwg.dxf.ecelp4800.ecelp7470.ecelp9600.egg.eol.eot.epub.exe.f4v.fbs.fh.fla.flac.flatpak.fli.flv.fpx.fst.fvt.g3.gh.gif.graffle.gz.gzip.h261.h263.h264.icns.ico.ief.img.ipa.iso.jar.jpeg.jpg.jpgv.jpm.jxr.key.ktx.lha.lib.lvp.lz.lzh.lzma.lzo.m3u.m4a.m4v.mar.mdi.mht.mid.midi.mj2.mka.mkv.mmr.mng.mobi.mov.movie.mp3.mp4.mp4a.mpeg.mpg.mpga.mxu.nef.npx.numbers.nupkg.o.odp.ods.odt.oga.ogg.ogv.otf.ott.pages.pbm.pcx.pdb.pdf.pea.pgm.pic.png.pnm.pot.potm.potx.ppa.ppam.ppm.pps.ppsm.ppsx.ppt.pptm.pptx.psd.pya.pyc.pyo.pyv.qt.rar.ras.raw.resources.rgb.rip.rlc.rmf.rmvb.rpm.rtf.rz.s3m.s7z.scpt.sgi.shar.snap.sil.sketch.slk.smv.snk.so.stl.suo.sub.swf.tar.tbz.tbz2.tga.tgz.thmx.tif.tiff.tlz.ttc.ttf.txz.udf.uvh.uvi.uvm.uvp.uvs.uvu.viv.vob.war.wav.wax.wbmp.wdp.weba.webm.webp.whl.wim.wm.wma.wmv.wmx.woff.woff2.wrm.wvx.xbm.xif.xla.xlam.xls.xlsb.xlsm.xlsx.xlt.xltm.xltx.xm.xmind.xpi.xpm.xwd.xz.z.zip.zipx".split(".");
})), Wa = /* @__PURE__ */ Z(((e, t) => {
	t.exports = Ua();
})), Ga = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("path"), r = Wa(), i = new Set(r);
	t.exports = (e) => i.has(n.extname(e).slice(1).toLowerCase());
})), Ka = /* @__PURE__ */ Z(((e) => {
	let { sep: t } = Q("path"), { platform: n } = process, r = Q("os");
	e.EV_ALL = "all", e.EV_READY = "ready", e.EV_ADD = "add", e.EV_CHANGE = "change", e.EV_ADD_DIR = "addDir", e.EV_UNLINK = "unlink", e.EV_UNLINK_DIR = "unlinkDir", e.EV_RAW = "raw", e.EV_ERROR = "error", e.STR_DATA = "data", e.STR_END = "end", e.STR_CLOSE = "close", e.FSEVENT_CREATED = "created", e.FSEVENT_MODIFIED = "modified", e.FSEVENT_DELETED = "deleted", e.FSEVENT_MOVED = "moved", e.FSEVENT_CLONED = "cloned", e.FSEVENT_UNKNOWN = "unknown", e.FSEVENT_FLAG_MUST_SCAN_SUBDIRS = 1, e.FSEVENT_TYPE_FILE = "file", e.FSEVENT_TYPE_DIRECTORY = "directory", e.FSEVENT_TYPE_SYMLINK = "symlink", e.KEY_LISTENERS = "listeners", e.KEY_ERR = "errHandlers", e.KEY_RAW = "rawEmitters", e.HANDLER_KEYS = [
		e.KEY_LISTENERS,
		e.KEY_ERR,
		e.KEY_RAW
	], e.DOT_SLASH = `.${t}`, e.BACK_SLASH_RE = /\\/g, e.DOUBLE_SLASH_RE = /\/\//, e.SLASH_OR_BACK_SLASH_RE = /[/\\]/, e.DOT_RE = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/, e.REPLACER_RE = /^\.[/\\]/, e.SLASH = "/", e.SLASH_SLASH = "//", e.BRACE_START = "{", e.BANG = "!", e.ONE_DOT = ".", e.TWO_DOTS = "..", e.STAR = "*", e.GLOBSTAR = "**", e.ROOT_GLOBSTAR = "/**/*", e.SLASH_GLOBSTAR = "/**", e.DIR_SUFFIX = "Dir", e.ANYMATCH_OPTS = { dot: !0 }, e.STRING_TYPE = "string", e.FUNCTION_TYPE = "function", e.EMPTY_STR = "", e.EMPTY_FN = () => {}, e.IDENTITY_FN = (e) => e, e.isWindows = n === "win32", e.isMacos = n === "darwin", e.isLinux = n === "linux", e.isIBMi = r.type() === "OS400";
})), qa = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("fs"), r = Q("path"), { promisify: i } = Q("util"), a = Ga(), { isWindows: o, isLinux: s, EMPTY_FN: c, EMPTY_STR: l, KEY_LISTENERS: u, KEY_ERR: d, KEY_RAW: f, HANDLER_KEYS: p, EV_CHANGE: m, EV_ADD: h, EV_ADD_DIR: g, EV_ERROR: _, STR_DATA: v, STR_END: y, BRACE_START: b, STAR: x } = Ka(), S = i(n.open), C = i(n.stat), w = i(n.lstat), T = i(n.close), E = i(n.realpath), D = {
		lstat: w,
		stat: C
	}, O = (e, t) => {
		e instanceof Set ? e.forEach(t) : t(e);
	}, k = (e, t, n) => {
		let r = e[t];
		r instanceof Set || (e[t] = r = /* @__PURE__ */ new Set([r])), r.add(n);
	}, A = (e) => (t) => {
		let n = e[t];
		n instanceof Set ? n.clear() : delete e[t];
	}, ee = (e, t, n) => {
		let r = e[t];
		r instanceof Set ? r.delete(n) : r === n && delete e[t];
	}, j = (e) => e instanceof Set ? e.size === 0 : !e, M = /* @__PURE__ */ new Map();
	function N(e, t, i, a, o) {
		let s = (t, n) => {
			i(e), o(t, n, { watchedPath: e }), n && e !== n && te(r.resolve(e, n), u, r.join(e, n));
		};
		try {
			return n.watch(e, t, s);
		} catch (e) {
			a(e);
		}
	}
	let te = (e, t, n, r, i) => {
		let a = M.get(e);
		a && O(a[t], (e) => {
			e(n, r, i);
		});
	}, P = (e, t, n, r) => {
		let { listener: i, errHandler: a, rawEmitter: s } = r, c = M.get(t), l;
		if (!n.persistent) return l = N(e, n, i, a, s), l.close.bind(l);
		if (c) k(c, u, i), k(c, d, a), k(c, f, s);
		else {
			if (l = N(e, n, te.bind(null, t, u), a, te.bind(null, t, f)), !l) return;
			l.on(_, async (n) => {
				let r = te.bind(null, t, d);
				if (c.watcherUnusable = !0, o && n.code === "EPERM") try {
					let t = await S(e, "r");
					await T(t), r(n);
				} catch {}
				else r(n);
			}), c = {
				listeners: i,
				errHandlers: a,
				rawEmitters: s,
				watcher: l
			}, M.set(t, c);
		}
		return () => {
			ee(c, u, i), ee(c, d, a), ee(c, f, s), j(c.listeners) && (c.watcher.close(), M.delete(t), p.forEach(A(c)), c.watcher = void 0, Object.freeze(c));
		};
	}, ne = /* @__PURE__ */ new Map(), re = (e, t, r, i) => {
		let { listener: a, rawEmitter: o } = i, s = ne.get(t), c = s && s.options;
		return c && (c.persistent < r.persistent || c.interval > r.interval) && (n.unwatchFile(t), s = void 0), s ? (k(s, u, a), k(s, f, o)) : (s = {
			listeners: a,
			rawEmitters: o,
			options: r,
			watcher: n.watchFile(t, r, (n, r) => {
				O(s.rawEmitters, (e) => {
					e(m, t, {
						curr: n,
						prev: r
					});
				});
				let i = n.mtimeMs;
				(n.size !== r.size || i > r.mtimeMs || i === 0) && O(s.listeners, (t) => t(e, n));
			})
		}, ne.set(t, s)), () => {
			ee(s, u, a), ee(s, f, o), j(s.listeners) && (ne.delete(t), n.unwatchFile(t), s.options = s.watcher = void 0, Object.freeze(s));
		};
	};
	t.exports = class {
		constructor(e) {
			this.fsw = e, this._boundHandleError = (t) => e._handleError(t);
		}
		_watchWithNodeFs(e, t) {
			let n = this.fsw.options, i = r.dirname(e), o = r.basename(e);
			this.fsw._getWatchedDir(i).add(o);
			let s = r.resolve(e), l = { persistent: n.persistent };
			t ||= c;
			let u;
			return n.usePolling ? (l.interval = n.enableBinaryInterval && a(o) ? n.binaryInterval : n.interval, u = re(e, s, l, {
				listener: t,
				rawEmitter: this.fsw._emitRaw
			})) : u = P(e, s, l, {
				listener: t,
				errHandler: this._boundHandleError,
				rawEmitter: this.fsw._emitRaw
			}), u;
		}
		_handleFile(e, t, n) {
			if (this.fsw.closed) return;
			let i = r.dirname(e), a = r.basename(e), o = this.fsw._getWatchedDir(i), c = t;
			if (o.has(a)) return;
			let l = async (t, n) => {
				if (this.fsw._throttle("watch", e, 5)) {
					if (!n || n.mtimeMs === 0) try {
						let n = await C(e);
						if (this.fsw.closed) return;
						let r = n.atimeMs, i = n.mtimeMs;
						(!r || r <= i || i !== c.mtimeMs) && this.fsw._emit(m, e, n), s && c.ino !== n.ino ? (this.fsw._closeFile(t), c = n, this.fsw._addPathCloser(t, this._watchWithNodeFs(e, l))) : c = n;
					} catch {
						this.fsw._remove(i, a);
					}
					else if (o.has(a)) {
						let t = n.atimeMs, r = n.mtimeMs;
						(!t || t <= r || r !== c.mtimeMs) && this.fsw._emit(m, e, n), c = n;
					}
				}
			}, u = this._watchWithNodeFs(e, l);
			if (!(n && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(e)) {
				if (!this.fsw._throttle(h, e, 0)) return;
				this.fsw._emit(h, e, t);
			}
			return u;
		}
		async _handleSymlink(e, t, n, r) {
			if (this.fsw.closed) return;
			let i = e.fullPath, a = this.fsw._getWatchedDir(t);
			if (!this.fsw.options.followSymlinks) {
				this.fsw._incrReadyCount();
				let t;
				try {
					t = await E(n);
				} catch {
					return this.fsw._emitReady(), !0;
				}
				return this.fsw.closed ? void 0 : (a.has(r) ? this.fsw._symlinkPaths.get(i) !== t && (this.fsw._symlinkPaths.set(i, t), this.fsw._emit(m, n, e.stats)) : (a.add(r), this.fsw._symlinkPaths.set(i, t), this.fsw._emit(h, n, e.stats)), this.fsw._emitReady(), !0);
			}
			if (this.fsw._symlinkPaths.has(i)) return !0;
			this.fsw._symlinkPaths.set(i, !0);
		}
		_handleRead(e, t, n, i, a, o, s) {
			if (e = r.join(e, l), !n.hasGlob && (s = this.fsw._throttle("readdir", e, 1e3), !s)) return;
			let c = this.fsw._getWatchedDir(n.path), u = /* @__PURE__ */ new Set(), d = this.fsw._readdirp(e, {
				fileFilter: (e) => n.filterPath(e),
				directoryFilter: (e) => n.filterDir(e),
				depth: 0
			}).on(v, async (s) => {
				if (this.fsw.closed) {
					d = void 0;
					return;
				}
				let l = s.path, f = r.join(e, l);
				u.add(l), !(s.stats.isSymbolicLink() && await this._handleSymlink(s, e, f, l)) && (this.fsw.closed ? d = void 0 : (l === i || !i && !c.has(l)) && (this.fsw._incrReadyCount(), f = r.join(a, r.relative(a, f)), this._addToNodeFs(f, t, n, o + 1)));
			}).on(_, this._boundHandleError);
			return new Promise((t) => d.once(y, () => {
				if (this.fsw.closed) {
					d = void 0;
					return;
				}
				let l = s ? s.clear() : !1;
				t(), c.getChildren().filter((t) => t !== e && !u.has(t) && (!n.hasGlob || n.filterPath({ fullPath: r.resolve(e, t) }))).forEach((t) => {
					this.fsw._remove(e, t);
				}), d = void 0, l && this._handleRead(e, !1, n, i, a, o, s);
			}));
		}
		async _handleDir(e, t, n, i, a, o, s) {
			let c = this.fsw._getWatchedDir(r.dirname(e)), l = c.has(r.basename(e));
			n && this.fsw.options.ignoreInitial || a || l || o.hasGlob && !o.globFilter(e) || this.fsw._emit(g, e, t), c.add(r.basename(e)), this.fsw._getWatchedDir(e);
			let u, d, f = this.fsw.options.depth;
			if ((f == null || i <= f) && !this.fsw._symlinkPaths.has(s)) {
				if (!a && (await this._handleRead(e, n, o, a, e, i, u), this.fsw.closed)) return;
				d = this._watchWithNodeFs(e, (t, n) => {
					n && n.mtimeMs === 0 || this._handleRead(t, !1, o, a, e, i, u);
				});
			}
			return d;
		}
		async _addToNodeFs(e, t, n, i, a) {
			let o = this.fsw._emitReady;
			if (this.fsw._isIgnored(e) || this.fsw.closed) return o(), !1;
			let s = this.fsw._getWatchHelpers(e, i);
			!s.hasGlob && n && (s.hasGlob = n.hasGlob, s.globFilter = n.globFilter, s.filterPath = (e) => n.filterPath(e), s.filterDir = (e) => n.filterDir(e));
			try {
				let n = await D[s.statMethod](s.watchPath);
				if (this.fsw.closed) return;
				if (this.fsw._isIgnored(s.watchPath, n)) return o(), !1;
				let c = this.fsw.options.followSymlinks && !e.includes(x) && !e.includes(b), l;
				if (n.isDirectory()) {
					let o = r.resolve(e), u = c ? await E(e) : e;
					if (this.fsw.closed || (l = await this._handleDir(s.watchPath, n, t, i, a, s, u), this.fsw.closed)) return;
					o !== u && u !== void 0 && this.fsw._symlinkPaths.set(o, u);
				} else if (n.isSymbolicLink()) {
					let a = c ? await E(e) : e;
					if (this.fsw.closed) return;
					let o = r.dirname(s.watchPath);
					if (this.fsw._getWatchedDir(o).add(s.watchPath), this.fsw._emit(h, s.watchPath, n), l = await this._handleDir(o, n, t, i, e, s, a), this.fsw.closed) return;
					a !== void 0 && this.fsw._symlinkPaths.set(r.resolve(e), a);
				} else l = this._handleFile(s.watchPath, n, t);
				return o(), this.fsw._addPathCloser(e, l), !1;
			} catch (t) {
				if (this.fsw._handleError(t)) return o(), e;
			}
		}
	};
})), Ja = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("fs"), r = Q("path"), { promisify: i } = Q("util"), a;
	try {
		a = Q("fsevents");
	} catch (e) {
		process.env.CHOKIDAR_PRINT_FSEVENTS_REQUIRE_ERROR && console.error(e);
	}
	if (a) {
		let e = process.version.match(/v(\d+)\.(\d+)/);
		e && e[1] && e[2] && Number.parseInt(e[1], 10) === 8 && Number.parseInt(e[2], 10) < 16 && (a = void 0);
	}
	let { EV_ADD: o, EV_CHANGE: s, EV_ADD_DIR: c, EV_UNLINK: l, EV_ERROR: u, STR_DATA: d, STR_END: f, FSEVENT_CREATED: p, FSEVENT_MODIFIED: m, FSEVENT_DELETED: h, FSEVENT_MOVED: g, FSEVENT_UNKNOWN: _, FSEVENT_FLAG_MUST_SCAN_SUBDIRS: v, FSEVENT_TYPE_FILE: y, FSEVENT_TYPE_DIRECTORY: b, FSEVENT_TYPE_SYMLINK: x, ROOT_GLOBSTAR: S, DIR_SUFFIX: C, DOT_SLASH: w, FUNCTION_TYPE: T, EMPTY_FN: E, IDENTITY_FN: D } = Ka(), O = (e) => isNaN(e) ? {} : { depth: e }, k = i(n.stat), A = i(n.lstat), ee = i(n.realpath), j = {
		stat: k,
		lstat: A
	}, M = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Set([
		69888,
		70400,
		71424,
		72704,
		73472,
		131328,
		131840,
		262912
	]), te = (e, t) => ({ stop: a.watch(e, t) });
	function P(e, t, n, i) {
		let o = r.extname(t) ? r.dirname(t) : t, s = r.dirname(o), c = M.get(o);
		ne(s) && (o = s);
		let l = r.resolve(e), u = l !== t, d = (e, i, a) => {
			u && (e = e.replace(t, l)), e !== l && e.indexOf(l + r.sep) || n(e, i, a);
		}, f = !1;
		for (let e of M.keys()) if (t.indexOf(r.resolve(e) + r.sep) === 0) {
			o = e, c = M.get(o), f = !0;
			break;
		}
		return c || f ? c.listeners.add(d) : (c = {
			listeners: /* @__PURE__ */ new Set([d]),
			rawEmitter: i,
			watcher: te(o, (e, t) => {
				if (!c.listeners.size || t & v) return;
				let n = a.getInfo(e, t);
				c.listeners.forEach((r) => {
					r(e, t, n);
				}), c.rawEmitter(n.event, e, n);
			})
		}, M.set(o, c)), () => {
			let e = c.listeners;
			if (e.delete(d), !e.size && (M.delete(o), c.watcher)) return c.watcher.stop().then(() => {
				c.rawEmitter = c.watcher = void 0, Object.freeze(c);
			});
		};
	}
	let ne = (e) => {
		let t = 0;
		for (let n of M.keys()) if (n.indexOf(e) === 0 && (t++, t >= 10)) return !0;
		return !1;
	}, re = () => a && M.size < 128, F = (e, t) => {
		let n = 0;
		for (; !e.indexOf(t) && (e = r.dirname(e)) !== t;) n++;
		return n;
	}, ie = (e, t) => e.type === b && t.isDirectory() || e.type === x && t.isSymbolicLink() || e.type === y && t.isFile();
	t.exports = class {
		constructor(e) {
			this.fsw = e;
		}
		checkIgnored(e, t) {
			let n = this.fsw._ignoredPaths;
			if (this.fsw._isIgnored(e, t)) return n.add(e), t && t.isDirectory() && n.add(e + S), !0;
			n.delete(e), n.delete(e + S);
		}
		addOrChange(e, t, n, r, i, a, c, l) {
			let u = i.has(a) ? s : o;
			this.handleEvent(u, e, t, n, r, i, a, c, l);
		}
		async checkExists(e, t, n, r, i, a, o, s) {
			try {
				let c = await k(e);
				if (this.fsw.closed) return;
				ie(o, c) ? this.addOrChange(e, t, n, r, i, a, o, s) : this.handleEvent(l, e, t, n, r, i, a, o, s);
			} catch (c) {
				c.code === "EACCES" ? this.addOrChange(e, t, n, r, i, a, o, s) : this.handleEvent(l, e, t, n, r, i, a, o, s);
			}
		}
		handleEvent(e, t, n, r, i, a, s, u, d) {
			if (!(this.fsw.closed || this.checkIgnored(t))) {
				if (e === l) {
					let e = u.type === b;
					(e || a.has(s)) && this.fsw._remove(i, s, e);
				} else {
					if (e === o) {
						if (u.type === b && this.fsw._getWatchedDir(t), u.type === x && d.followSymlinks) {
							let e = d.depth === void 0 ? void 0 : F(n, r) + 1;
							return this._addToFsEvents(t, !1, !0, e);
						}
						this.fsw._getWatchedDir(i).add(s);
					}
					let a = u.type === b ? e + C : e;
					this.fsw._emit(a, t), a === c && this._addToFsEvents(t, !1, !0);
				}
			}
		}
		_watchWithFsEvents(e, t, n, i) {
			if (this.fsw.closed || this.fsw._isIgnored(e)) return;
			let a = this.fsw.options, o = P(e, t, async (o, s, c) => {
				if (this.fsw.closed || this.fsw._isIgnored(o) || a.depth !== void 0 && F(o, t) > a.depth) return;
				let u = n(r.join(e, r.relative(e, o)));
				if (i && !i(u)) return;
				let d = r.dirname(u), f = r.basename(u), v = this.fsw._getWatchedDir(c.type === b ? u : d);
				if (N.has(s) || c.event === _) {
					if (typeof a.ignored === T) {
						let e;
						try {
							e = await k(u);
						} catch {}
						if (this.fsw.closed || this.checkIgnored(u, e)) return;
						ie(c, e) ? this.addOrChange(u, o, t, d, v, f, c, a) : this.handleEvent(l, u, o, t, d, v, f, c, a);
					} else this.checkExists(u, o, t, d, v, f, c, a);
				} else switch (c.event) {
					case p:
					case m: return this.addOrChange(u, o, t, d, v, f, c, a);
					case h:
					case g: return this.checkExists(u, o, t, d, v, f, c, a);
				}
			}, this.fsw._emitRaw);
			return this.fsw._emitReady(), o;
		}
		async _handleFsEventsSymlink(e, t, n, i) {
			if (!(this.fsw.closed || this.fsw._symlinkPaths.has(t))) {
				this.fsw._symlinkPaths.set(t, !0), this.fsw._incrReadyCount();
				try {
					let t = await ee(e);
					if (this.fsw.closed) return;
					if (this.fsw._isIgnored(t)) return this.fsw._emitReady();
					this.fsw._incrReadyCount(), this._addToFsEvents(t || e, (i) => {
						let a = e;
						return t && t !== w ? a = i.replace(t, e) : i !== w && (a = r.join(e, i)), n(a);
					}, !1, i);
				} catch (e) {
					if (this.fsw._handleError(e)) return this.fsw._emitReady();
				}
			}
		}
		emitAdd(e, t, n, i, a) {
			let s = n(e), l = t.isDirectory(), u = this.fsw._getWatchedDir(r.dirname(s)), d = r.basename(s);
			l && this.fsw._getWatchedDir(s), !u.has(d) && (u.add(d), i.ignoreInitial && a !== !0 || this.fsw._emit(l ? c : o, s, t));
		}
		initWatch(e, t, n, i) {
			if (this.fsw.closed) return;
			let a = this._watchWithFsEvents(n.watchPath, r.resolve(e || n.watchPath), i, n.globFilter);
			this.fsw._addPathCloser(t, a);
		}
		async _addToFsEvents(e, t, n, i) {
			if (this.fsw.closed) return;
			let a = this.fsw.options, o = typeof t === T ? t : D, s = this.fsw._getWatchHelpers(e);
			try {
				let t = await j[s.statMethod](s.watchPath);
				if (this.fsw.closed) return;
				if (this.fsw._isIgnored(s.watchPath, t)) throw null;
				if (t.isDirectory()) {
					if (s.globFilter || this.emitAdd(o(e), t, o, a, n), i && i > a.depth) return;
					this.fsw._readdirp(s.watchPath, {
						fileFilter: (e) => s.filterPath(e),
						directoryFilter: (e) => s.filterDir(e),
						...O(a.depth - (i || 0))
					}).on(d, (e) => {
						if (this.fsw.closed || e.stats.isDirectory() && !s.filterPath(e)) return;
						let t = r.join(s.watchPath, e.path), { fullPath: i } = e;
						if (s.followSymlinks && e.stats.isSymbolicLink()) {
							let e = a.depth === void 0 ? void 0 : F(t, r.resolve(s.watchPath)) + 1;
							this._handleFsEventsSymlink(t, i, o, e);
						} else this.emitAdd(t, e.stats, o, a, n);
					}).on(u, E).on(f, () => {
						this.fsw._emitReady();
					});
				} else this.emitAdd(s.watchPath, t, o, a, n), this.fsw._emitReady();
			} catch (e) {
				(!e || this.fsw._handleError(e)) && (this.fsw._emitReady(), this.fsw._emitReady());
			}
			if (a.persistent && n !== !0) {
				if (typeof t === T) this.initWatch(void 0, e, s, o);
				else {
					let t;
					try {
						t = await ee(s.watchPath);
					} catch {}
					this.initWatch(t, e, s, o);
				}
			}
		}
	}, t.exports.canUse = re;
})), Ya = /* @__PURE__ */ Z(((e) => {
	let { EventEmitter: t } = Q("events"), n = Q("fs"), r = Q("path"), { promisify: i } = Q("util"), a = Da(), o = ka().default, s = Ma(), c = ja(), l = Ha(), u = Oa(), d = qa(), f = Ja(), { EV_ALL: p, EV_READY: m, EV_ADD: h, EV_CHANGE: g, EV_UNLINK: _, EV_ADD_DIR: v, EV_UNLINK_DIR: y, EV_RAW: b, EV_ERROR: x, STR_CLOSE: S, STR_END: C, BACK_SLASH_RE: w, DOUBLE_SLASH_RE: T, SLASH_OR_BACK_SLASH_RE: E, DOT_RE: D, REPLACER_RE: O, SLASH: k, SLASH_SLASH: A, BRACE_START: ee, BANG: j, ONE_DOT: M, TWO_DOTS: N, GLOBSTAR: te, SLASH_GLOBSTAR: P, ANYMATCH_OPTS: ne, STRING_TYPE: re, FUNCTION_TYPE: F, EMPTY_STR: ie, EMPTY_FN: ae, isWindows: oe, isMacos: se, isIBMi: ce } = Ka(), le = i(n.stat), ue = i(n.readdir), de = (e = []) => Array.isArray(e) ? e : [e], fe = (e, t = []) => (e.forEach((e) => {
		Array.isArray(e) ? fe(e, t) : t.push(e);
	}), t), pe = (e) => {
		let t = fe(de(e));
		if (!t.every((e) => typeof e === re)) throw TypeError(`Non-string provided as watch path: ${t}`);
		return t.map(I);
	}, me = (e) => {
		let t = e.replace(w, k), n = !1;
		for (t.startsWith(A) && (n = !0); t.match(T);) t = t.replace(T, k);
		return n && (t = k + t), t;
	}, I = (e) => me(r.normalize(me(e))), he = (e = ie) => (t) => typeof t === re ? I(r.isAbsolute(t) ? t : r.join(e, t)) : t, ge = (e, t) => r.isAbsolute(e) ? e : e.startsWith(j) ? j + r.join(t, e.slice(1)) : r.join(t, e), _e = (e, t) => e[t] === void 0;
	var L = class {
		constructor(e, t) {
			this.path = e, this._removeWatcher = t, this.items = /* @__PURE__ */ new Set();
		}
		add(e) {
			let { items: t } = this;
			t && e !== M && e !== N && t.add(e);
		}
		async remove(e) {
			let { items: t } = this;
			if (!t || (t.delete(e), t.size > 0)) return;
			let n = this.path;
			try {
				await ue(n);
			} catch {
				this._removeWatcher && this._removeWatcher(r.dirname(n), r.basename(n));
			}
		}
		has(e) {
			let { items: t } = this;
			if (t) return t.has(e);
		}
		getChildren() {
			let { items: e } = this;
			if (e) return [...e.values()];
		}
		dispose() {
			this.items.clear(), delete this.path, delete this._removeWatcher, delete this.items, Object.freeze(this);
		}
	}, ve = class {
		constructor(e, t, n, i) {
			this.fsw = i, this.path = e = e.replace(O, ie), this.watchPath = t, this.fullWatchPath = r.resolve(t), this.hasGlob = t !== e, e === ie && (this.hasGlob = !1), this.globSymlink = this.hasGlob && n ? void 0 : !1, this.globFilter = this.hasGlob ? o(e, void 0, ne) : !1, this.dirParts = this.getDirParts(e), this.dirParts.forEach((e) => {
				e.length > 1 && e.pop();
			}), this.followSymlinks = n, this.statMethod = n ? "stat" : "lstat";
		}
		checkGlobSymlink(e) {
			return this.globSymlink === void 0 && (this.globSymlink = e.fullParentDir !== this.fullWatchPath && {
				realPath: e.fullParentDir,
				linkPath: this.fullWatchPath
			}), this.globSymlink ? e.fullPath.replace(this.globSymlink.realPath, this.globSymlink.linkPath) : e.fullPath;
		}
		entryPath(e) {
			return r.join(this.watchPath, r.relative(this.watchPath, this.checkGlobSymlink(e)));
		}
		filterPath(e) {
			let { stats: t } = e;
			if (t && t.isSymbolicLink()) return this.filterDir(e);
			let n = this.entryPath(e);
			return (this.hasGlob && typeof this.globFilter === F ? this.globFilter(n) : !0) && this.fsw._isntIgnored(n, t) && this.fsw._hasReadPermissions(t);
		}
		getDirParts(e) {
			if (!this.hasGlob) return [];
			let t = [];
			return (e.includes(ee) ? l.expand(e) : [e]).forEach((e) => {
				t.push(r.relative(this.watchPath, e).split(E));
			}), t;
		}
		filterDir(e) {
			if (this.hasGlob) {
				let t = this.getDirParts(this.checkGlobSymlink(e)), n = !1;
				this.unmatchedGlob = !this.dirParts.some((e) => e.every((e, r) => (e === te && (n = !0), n || !t[0][r] || o(e, t[0][r], ne))));
			}
			return !this.unmatchedGlob && this.fsw._isntIgnored(this.entryPath(e), e.stats);
		}
	}, ye = class extends t {
		constructor(e) {
			super();
			let t = {};
			e && Object.assign(t, e), this._watched = /* @__PURE__ */ new Map(), this._closers = /* @__PURE__ */ new Map(), this._ignoredPaths = /* @__PURE__ */ new Set(), this._throttled = /* @__PURE__ */ new Map(), this._symlinkPaths = /* @__PURE__ */ new Map(), this._streams = /* @__PURE__ */ new Set(), this.closed = !1, _e(t, "persistent") && (t.persistent = !0), _e(t, "ignoreInitial") && (t.ignoreInitial = !1), _e(t, "ignorePermissionErrors") && (t.ignorePermissionErrors = !1), _e(t, "interval") && (t.interval = 100), _e(t, "binaryInterval") && (t.binaryInterval = 300), _e(t, "disableGlobbing") && (t.disableGlobbing = !1), t.enableBinaryInterval = t.binaryInterval !== t.interval, _e(t, "useFsEvents") && (t.useFsEvents = !t.usePolling), f.canUse() || (t.useFsEvents = !1), _e(t, "usePolling") && !t.useFsEvents && (t.usePolling = se), ce && (t.usePolling = !0);
			let n = process.env.CHOKIDAR_USEPOLLING;
			if (n !== void 0) {
				let e = n.toLowerCase();
				t.usePolling = e === "false" || e === "0" ? !1 : e === "true" || e === "1" || !!e;
			}
			let r = process.env.CHOKIDAR_INTERVAL;
			r && (t.interval = Number.parseInt(r, 10)), _e(t, "atomic") && (t.atomic = !t.usePolling && !t.useFsEvents), t.atomic && (this._pendingUnlinks = /* @__PURE__ */ new Map()), _e(t, "followSymlinks") && (t.followSymlinks = !0), _e(t, "awaitWriteFinish") && (t.awaitWriteFinish = !1), t.awaitWriteFinish === !0 && (t.awaitWriteFinish = {});
			let i = t.awaitWriteFinish;
			i && (i.stabilityThreshold ||= 2e3, i.pollInterval ||= 100, this._pendingWrites = /* @__PURE__ */ new Map()), t.ignored &&= de(t.ignored);
			let a = 0;
			this._emitReady = () => {
				a++, a >= this._readyCount && (this._emitReady = ae, this._readyEmitted = !0, process.nextTick(() => this.emit(m)));
			}, this._emitRaw = (...e) => this.emit(b, ...e), this._readyEmitted = !1, this.options = t, t.useFsEvents ? this._fsEventsHandler = new f(this) : this._nodeFsHandler = new d(this), Object.freeze(t);
		}
		add(e, t, n) {
			let { cwd: i, disableGlobbing: a } = this.options;
			this.closed = !1;
			let o = pe(e);
			return i && (o = o.map((e) => {
				let t = ge(e, i);
				return a || !c(e) ? t : u(t);
			})), o = o.filter((e) => e.startsWith(j) ? (this._ignoredPaths.add(e.slice(1)), !1) : (this._ignoredPaths.delete(e), this._ignoredPaths.delete(e + P), this._userIgnored = void 0, !0)), this.options.useFsEvents && this._fsEventsHandler ? (this._readyCount ||= o.length, this.options.persistent && (this._readyCount += o.length), o.forEach((e) => this._fsEventsHandler._addToFsEvents(e))) : (this._readyCount ||= 0, this._readyCount += o.length, Promise.all(o.map(async (e) => {
				let r = await this._nodeFsHandler._addToNodeFs(e, !n, 0, 0, t);
				return r && this._emitReady(), r;
			})).then((e) => {
				this.closed || e.filter((e) => e).forEach((e) => {
					this.add(r.dirname(e), r.basename(t || e));
				});
			})), this;
		}
		unwatch(e) {
			if (this.closed) return this;
			let t = pe(e), { cwd: n } = this.options;
			return t.forEach((e) => {
				!r.isAbsolute(e) && !this._closers.has(e) && (n && (e = r.join(n, e)), e = r.resolve(e)), this._closePath(e), this._ignoredPaths.add(e), this._watched.has(e) && this._ignoredPaths.add(e + P), this._userIgnored = void 0;
			}), this;
		}
		close() {
			if (this.closed) return this._closePromise;
			this.closed = !0, this.removeAllListeners();
			let e = [];
			return this._closers.forEach((t) => t.forEach((t) => {
				let n = t();
				n instanceof Promise && e.push(n);
			})), this._streams.forEach((e) => e.destroy()), this._userIgnored = void 0, this._readyCount = 0, this._readyEmitted = !1, this._watched.forEach((e) => e.dispose()), [
				"closers",
				"watched",
				"streams",
				"symlinkPaths",
				"throttled"
			].forEach((e) => {
				this[`_${e}`].clear();
			}), this._closePromise = e.length ? Promise.all(e).then(() => void 0) : Promise.resolve(), this._closePromise;
		}
		getWatched() {
			let e = {};
			return this._watched.forEach((t, n) => {
				let i = this.options.cwd ? r.relative(this.options.cwd, n) : n;
				e[i || M] = t.getChildren().sort();
			}), e;
		}
		emitWithAll(e, t) {
			this.emit(...t), e !== x && this.emit(p, ...t);
		}
		async _emit(e, t, n, i, a) {
			if (this.closed) return;
			let o = this.options;
			oe && (t = r.normalize(t)), o.cwd && (t = r.relative(o.cwd, t));
			let s = [e, t];
			a === void 0 ? i === void 0 ? n !== void 0 && s.push(n) : s.push(n, i) : s.push(n, i, a);
			let c = o.awaitWriteFinish, l;
			if (c && (l = this._pendingWrites.get(t))) return l.lastChange = /* @__PURE__ */ new Date(), this;
			if (o.atomic) {
				if (e === _) return this._pendingUnlinks.set(t, s), setTimeout(() => {
					this._pendingUnlinks.forEach((e, t) => {
						this.emit(...e), this.emit(p, ...e), this._pendingUnlinks.delete(t);
					});
				}, typeof o.atomic == "number" ? o.atomic : 100), this;
				e === h && this._pendingUnlinks.has(t) && (e = s[0] = g, this._pendingUnlinks.delete(t));
			}
			if (c && (e === h || e === g) && this._readyEmitted) return this._awaitWriteFinish(t, c.stabilityThreshold, e, (t, n) => {
				t ? (e = s[0] = x, s[1] = t, this.emitWithAll(e, s)) : n && (s.length > 2 ? s[2] = n : s.push(n), this.emitWithAll(e, s));
			}), this;
			if (e === g && !this._throttle(g, t, 50)) return this;
			if (o.alwaysStat && n === void 0 && (e === h || e === v || e === g)) {
				let e = o.cwd ? r.join(o.cwd, t) : t, n;
				try {
					n = await le(e);
				} catch {}
				if (!n || this.closed) return;
				s.push(n);
			}
			return this.emitWithAll(e, s), this;
		}
		_handleError(e) {
			let t = e && e.code;
			return e && t !== "ENOENT" && t !== "ENOTDIR" && (!this.options.ignorePermissionErrors || t !== "EPERM" && t !== "EACCES") && this.emit(x, e), e || this.closed;
		}
		_throttle(e, t, n) {
			this._throttled.has(e) || this._throttled.set(e, /* @__PURE__ */ new Map());
			let r = this._throttled.get(e), i = r.get(t);
			if (i) return i.count++, !1;
			let a, o = () => {
				let e = r.get(t), n = e ? e.count : 0;
				return r.delete(t), clearTimeout(a), e && clearTimeout(e.timeoutObject), n;
			};
			a = setTimeout(o, n);
			let s = {
				timeoutObject: a,
				clear: o,
				count: 0
			};
			return r.set(t, s), s;
		}
		_incrReadyCount() {
			return this._readyCount++;
		}
		_awaitWriteFinish(e, t, i, a) {
			let o, s = e;
			this.options.cwd && !r.isAbsolute(e) && (s = r.join(this.options.cwd, e));
			let c = /* @__PURE__ */ new Date(), l = (r) => {
				n.stat(s, (n, i) => {
					if (n || !this._pendingWrites.has(e)) {
						n && n.code !== "ENOENT" && a(n);
						return;
					}
					let s = Number(/* @__PURE__ */ new Date());
					r && i.size !== r.size && (this._pendingWrites.get(e).lastChange = s), s - this._pendingWrites.get(e).lastChange >= t ? (this._pendingWrites.delete(e), a(void 0, i)) : o = setTimeout(l, this.options.awaitWriteFinish.pollInterval, i);
				});
			};
			this._pendingWrites.has(e) || (this._pendingWrites.set(e, {
				lastChange: c,
				cancelWait: () => (this._pendingWrites.delete(e), clearTimeout(o), i)
			}), o = setTimeout(l, this.options.awaitWriteFinish.pollInterval));
		}
		_getGlobIgnored() {
			return [...this._ignoredPaths.values()];
		}
		_isIgnored(e, t) {
			if (this.options.atomic && D.test(e)) return !0;
			if (!this._userIgnored) {
				let { cwd: e } = this.options, t = this.options.ignored, n = t && t.map(he(e)), r = de(n).filter((e) => typeof e === re && !c(e)).map((e) => e + P), i = this._getGlobIgnored().map(he(e)).concat(n, r);
				this._userIgnored = o(i, void 0, ne);
			}
			return this._userIgnored([e, t]);
		}
		_isntIgnored(e, t) {
			return !this._isIgnored(e, t);
		}
		_getWatchHelpers(e, t) {
			let n = t || this.options.disableGlobbing || !c(e) ? e : s(e), r = this.options.followSymlinks;
			return new ve(e, n, r, this);
		}
		_getWatchedDir(e) {
			this._boundRemove ||= this._remove.bind(this);
			let t = r.resolve(e);
			return this._watched.has(t) || this._watched.set(t, new L(t, this._boundRemove)), this._watched.get(t);
		}
		_hasReadPermissions(e) {
			if (this.options.ignorePermissionErrors) return !0;
			let t = (e && Number.parseInt(e.mode, 10)) & 511;
			return !!(4 & Number.parseInt(t.toString(8)[0], 10));
		}
		_remove(e, t, n) {
			let i = r.join(e, t), a = r.resolve(i);
			if (n ??= this._watched.has(i) || this._watched.has(a), !this._throttle("remove", i, 100)) return;
			!n && !this.options.useFsEvents && this._watched.size === 1 && this.add(e, t, !0), this._getWatchedDir(i).getChildren().forEach((e) => this._remove(i, e));
			let o = this._getWatchedDir(e), s = o.has(t);
			o.remove(t), this._symlinkPaths.has(a) && this._symlinkPaths.delete(a);
			let c = i;
			if (this.options.cwd && (c = r.relative(this.options.cwd, i)), this.options.awaitWriteFinish && this._pendingWrites.has(c) && this._pendingWrites.get(c).cancelWait() === h) return;
			this._watched.delete(i), this._watched.delete(a);
			let l = n ? y : _;
			s && !this._isIgnored(i) && this._emit(l, i), this.options.useFsEvents || this._closePath(i);
		}
		_closePath(e) {
			this._closeFile(e);
			let t = r.dirname(e);
			this._getWatchedDir(t).remove(r.basename(e));
		}
		_closeFile(e) {
			e = r.normalize(e);
			let t = this._closers.get(e);
			t && (t.forEach((e) => e()), this._closers.delete(e));
		}
		_addPathCloser(e, t) {
			if (!t) return;
			e = r.normalize(e);
			let n = this._closers.get(e);
			n || (n = [], this._closers.set(e, n)), n.push(t);
		}
		_readdirp(e, t) {
			if (this.closed) return;
			let n = a(e, {
				type: p,
				alwaysStat: !0,
				lstat: !0,
				...t
			});
			return this._streams.add(n), n.once(S, () => {
				n = void 0;
			}), n.once(C, () => {
				n &&= (this._streams.delete(n), void 0);
			}), n;
		}
	};
	e.watch = (e, t) => {
		let n = new ye(t);
		return n.add(e), n;
	};
})), Xa = /* @__PURE__ */ Z(((e, t) => {
	t.exports = a;
	var n = /(?:[^\x21\x25\x26-\x3B\x3D\x3F-\x5B\x5D\x5F\x61-\x7A\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g, r = /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g, i = "$1�$2";
	function a(e) {
		return String(e).replace(r, i).replace(n, encodeURI);
	}
})), Za = /* @__PURE__ */ Z(((e, t) => {
	t.exports = n;
	function n(e, t) {
		if (!Array.isArray(e)) throw TypeError("arg must be an array of [ee, events...] arrays");
		for (var n = [], i = 0; i < e.length; i++) {
			var a = e[i];
			if (!Array.isArray(a) || a.length < 2) throw TypeError("each array member must be [ee, events...]");
			for (var o = a[0], s = 1; s < a.length; s++) {
				var c = a[s], l = r(c, u);
				o.on(c, l), n.push({
					ee: o,
					event: c,
					fn: l
				});
			}
		}
		function u() {
			d(), t.apply(null, arguments);
		}
		function d() {
			for (var e, t = 0; t < n.length; t++) e = n[t], e.ee.removeListener(e.event, e.fn);
		}
		function f(e) {
			t = e;
		}
		return f.cancel = d, f;
	}
	function r(e, t) {
		return function(n) {
			for (var r = Array(arguments.length), i = this, a = e === "error" ? n : null, o = 0; o < r.length; o++) r[o] = arguments[o];
			t(a, i, e, r);
		};
	}
})), Qa = /* @__PURE__ */ Z(((e, t) => {
	t.exports = i, t.exports.isFinished = a;
	var n = Za(), r = typeof setImmediate == "function" ? setImmediate : function(e) {
		process.nextTick(e.bind.apply(e, arguments));
	};
	function i(e, t) {
		return a(e) === !1 ? (s(e, t), e) : (r(t, null, e), e);
	}
	function a(e) {
		var t = e.socket;
		if (typeof e.finished == "boolean") return !!(e.finished || t && !t.writable);
		if (typeof e.complete == "boolean") return !!(e.upgrade || !t || !t.readable || e.complete && !e.readable);
	}
	function o(e, t) {
		var r, i, a = !1;
		function o(e) {
			r.cancel(), i.cancel(), a = !0, t(e);
		}
		r = i = n([[
			e,
			"end",
			"finish"
		]], o);
		function s(t) {
			e.removeListener("socket", s), !a && r === i && (i = n([[
				t,
				"error",
				"close"
			]], o));
		}
		e.socket ? s(e.socket) : (e.on("socket", s), e.socket === void 0 && l(e, s));
	}
	function s(e, t) {
		var n = e.__onFinished;
		n && n.queue || (n = e.__onFinished = c(e), o(e, n)), n.queue.push(t);
	}
	function c(e) {
		function t(n) {
			if (e.__onFinished === t && (e.__onFinished = null), t.queue) {
				var r = t.queue;
				t.queue = null;
				for (var i = 0; i < r.length; i++) r[i](n, e);
			}
		}
		return t.queue = [], t;
	}
	function l(e, t) {
		var n = e.assignSocket;
		typeof n == "function" && (e.assignSocket = function(e) {
			n.call(this, e), t(e);
		});
	}
})), $a = /* @__PURE__ */ Z(((e, t) => {
	var n = Q("url"), r = n.parse, i = n.Url;
	t.exports = a, t.exports.original = o;
	function a(e) {
		var t = e.url;
		if (t !== void 0) {
			var n = e._parsedUrl;
			return c(t, n) ? n : (n = s(t), n._raw = t, e._parsedUrl = n);
		}
	}
	function o(e) {
		var t = e.originalUrl;
		if (typeof t != "string") return a(e);
		var n = e._parsedOriginalUrl;
		return c(t, n) ? n : (n = s(t), n._raw = t, e._parsedOriginalUrl = n);
	}
	function s(e) {
		if (typeof e != "string" || e.charCodeAt(0) !== 47) return r(e);
		for (var t = e, n = null, a = null, o = 1; o < e.length; o++) switch (e.charCodeAt(o)) {
			case 63:
				a === null && (t = e.substring(0, o), n = e.substring(o + 1), a = e.substring(o));
				break;
			case 9:
			case 10:
			case 12:
			case 13:
			case 32:
			case 35:
			case 160:
			case 65279: return r(e);
		}
		var s = i === void 0 ? {} : new i();
		return s.path = e, s.href = e, s.pathname = t, a !== null && (s.query = n, s.search = a), s;
	}
	function c(e, t) {
		return typeof t == "object" && !!t && (i === void 0 || t instanceof i) && t._raw === e;
	}
})), eo = /* @__PURE__ */ Z(((e, t) => {
	t.exports = {
		100: "Continue",
		101: "Switching Protocols",
		102: "Processing",
		103: "Early Hints",
		200: "OK",
		201: "Created",
		202: "Accepted",
		203: "Non-Authoritative Information",
		204: "No Content",
		205: "Reset Content",
		206: "Partial Content",
		207: "Multi-Status",
		208: "Already Reported",
		226: "IM Used",
		300: "Multiple Choices",
		301: "Moved Permanently",
		302: "Found",
		303: "See Other",
		304: "Not Modified",
		305: "Use Proxy",
		306: "(Unused)",
		307: "Temporary Redirect",
		308: "Permanent Redirect",
		400: "Bad Request",
		401: "Unauthorized",
		402: "Payment Required",
		403: "Forbidden",
		404: "Not Found",
		405: "Method Not Allowed",
		406: "Not Acceptable",
		407: "Proxy Authentication Required",
		408: "Request Timeout",
		409: "Conflict",
		410: "Gone",
		411: "Length Required",
		412: "Precondition Failed",
		413: "Payload Too Large",
		414: "URI Too Long",
		415: "Unsupported Media Type",
		416: "Range Not Satisfiable",
		417: "Expectation Failed",
		418: "I'm a teapot",
		421: "Misdirected Request",
		422: "Unprocessable Entity",
		423: "Locked",
		424: "Failed Dependency",
		425: "Unordered Collection",
		426: "Upgrade Required",
		428: "Precondition Required",
		429: "Too Many Requests",
		431: "Request Header Fields Too Large",
		451: "Unavailable For Legal Reasons",
		500: "Internal Server Error",
		501: "Not Implemented",
		502: "Bad Gateway",
		503: "Service Unavailable",
		504: "Gateway Timeout",
		505: "HTTP Version Not Supported",
		506: "Variant Also Negotiates",
		507: "Insufficient Storage",
		508: "Loop Detected",
		509: "Bandwidth Limit Exceeded",
		510: "Not Extended",
		511: "Network Authentication Required"
	};
})), to = /* @__PURE__ */ Z(((e, t) => {
	var n = eo();
	t.exports = i, i.STATUS_CODES = n, i.codes = r(i, n), i.redirect = {
		300: !0,
		301: !0,
		302: !0,
		303: !0,
		305: !0,
		307: !0,
		308: !0
	}, i.empty = {
		204: !0,
		205: !0,
		304: !0
	}, i.retry = {
		502: !0,
		503: !0,
		504: !0
	};
	function r(e, t) {
		var n = [];
		return Object.keys(t).forEach(function(r) {
			var i = t[r], a = Number(r);
			e[a] = i, e[i] = a, e[i.toLowerCase()] = a, n.push(a);
		}), n;
	}
	function i(e) {
		if (typeof e == "number") {
			if (!i[e]) throw Error("invalid status code: " + e);
			return e;
		}
		if (typeof e != "string") throw TypeError("code must be a number or string");
		var t = parseInt(e, 10);
		if (!isNaN(t)) {
			if (!i[t]) throw Error("invalid status code: " + t);
			return t;
		}
		if (t = i[e.toLowerCase()], !t) throw Error("invalid status message: \"" + e + "\"");
		return t;
	}
})), no = /* @__PURE__ */ Z(((e, t) => {
	t.exports = r;
	function n(e) {
		for (var t = e.listeners("data"), n = 0; n < t.length; n++) if (t[n].name === "ondata") return !0;
		return !1;
	}
	function r(e) {
		if (!e) throw TypeError("argument stream is required");
		if (typeof e.unpipe == "function") e.unpipe();
		else if (n(e)) for (var t, r = e.listeners("close"), i = 0; i < r.length; i++) t = r[i], (t.name === "cleanup" || t.name === "onclose") && t.call(e);
	}
})), ro = /* @__PURE__ */ Z(((e, t) => {
	var n = ($i(), ri(zi))("finalhandler"), r = Xa(), i = oa(), a = Qa(), o = $a(), s = to(), c = no(), l = /\x20{2}/g, u = /\n/g, d = typeof setImmediate == "function" ? setImmediate : function(e) {
		process.nextTick(e.bind.apply(e, arguments));
	}, f = a.isFinished;
	function p(e) {
		return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>" + i(e).replace(u, "<br>").replace(l, " &nbsp;") + "</pre>\n</body>\n</html>\n";
	}
	t.exports = m;
	function m(e, t, i) {
		var a = i || {}, o = a.env || process.env.NODE_ENV || "development", s = a.onerror;
		return function(i) {
			var a, c, l;
			!i && b(t) ? n("cannot 404 after headers sent") : (i ? (l = _(i), l === void 0 ? l = y(t) : a = h(i), c = g(i, l, o)) : (l = 404, c = "Cannot " + e.method + " " + r(v(e))), n("default %s", l), i && s && d(s, i, e, t), b(t) ? (n("cannot %d after headers sent", l), e.socket.destroy()) : x(e, t, l, a, c));
		};
	}
	function h(e) {
		if (e.headers && typeof e.headers == "object") {
			for (var t = Object.create(null), n = Object.keys(e.headers), r = 0; r < n.length; r++) {
				var i = n[r];
				t[i] = e.headers[i];
			}
			return t;
		}
	}
	function g(e, t, n) {
		var r;
		return n !== "production" && (r = e.stack, !r && typeof e.toString == "function" && (r = e.toString())), r || s[t];
	}
	function _(e) {
		if (typeof e.status == "number" && e.status >= 400 && e.status < 600) return e.status;
		if (typeof e.statusCode == "number" && e.statusCode >= 400 && e.statusCode < 600) return e.statusCode;
	}
	function v(e) {
		try {
			return o.original(e).pathname;
		} catch {
			return "resource";
		}
	}
	function y(e) {
		var t = e.statusCode;
		return (typeof t != "number" || t < 400 || t > 599) && (t = 500), t;
	}
	function b(e) {
		return typeof e.headersSent == "boolean" ? e.headersSent : !!e._header;
	}
	function x(e, t, n, r, i) {
		function o() {
			var a = p(i);
			t.statusCode = n, t.statusMessage = s[n], S(t, r), t.setHeader("Content-Security-Policy", "default-src 'none'"), t.setHeader("X-Content-Type-Options", "nosniff"), t.setHeader("Content-Type", "text/html; charset=utf-8"), t.setHeader("Content-Length", Buffer.byteLength(a, "utf8")), e.method === "HEAD" ? t.end() : t.end(a, "utf8");
		}
		f(e) ? o() : (c(e), a(e, o), e.resume());
	}
	function S(e, t) {
		if (t) for (var n = Object.keys(t), r = 0; r < n.length; r++) {
			var i = n[r];
			e.setHeader(i, t[i]);
		}
	}
})), io = /* @__PURE__ */ Z(((e, t) => {
	e = t.exports = function(e, t) {
		if (e && t) for (var n in t) e[n] = t[n];
		return e;
	};
})), ao = /* @__PURE__ */ Z(((e, t) => {
	var n = ($i(), ri(zi))("connect:dispatcher"), r = Q("events").EventEmitter, i = ro(), a = Q("http"), o = io(), s = $a();
	t.exports = d;
	var c = process.env.NODE_ENV || "development", l = {}, u = typeof setImmediate == "function" ? setImmediate : function(e) {
		process.nextTick(e.bind.apply(e, arguments));
	};
	function d() {
		function e(t, n, r) {
			e.handle(t, n, r);
		}
		return o(e, l), o(e, r.prototype), e.route = "/", e.stack = [], e;
	}
	l.use = function(e, t) {
		var r = t, i = e;
		if (typeof e != "string" && (r = e, i = "/"), typeof r.handle == "function") {
			var o = r;
			o.route = i, r = function(e, t, n) {
				o.handle(e, t, n);
			};
		}
		return r instanceof a.Server && (r = r.listeners("request")[0]), i[i.length - 1] === "/" && (i = i.slice(0, -1)), n("use %s %s", i || "/", r.name || "anonymous"), this.stack.push({
			route: i,
			handle: r
		}), this;
	}, l.handle = function(e, t, n) {
		var r = 0, a = m(e.url) || "", o = "", l = !1, d = this.stack, h = n || i(e, t, {
			env: c,
			onerror: p
		});
		e.originalUrl = e.originalUrl || e.url;
		function g(n) {
			l &&= (e.url = e.url.substr(1), !1), o.length !== 0 && (e.url = a + o + e.url.substr(a.length), o = "");
			var i = d[r++];
			if (!i) u(h, n);
			else {
				var c = s(e).pathname || "/", p = i.route;
				if (c.toLowerCase().substr(0, p.length) !== p.toLowerCase()) return g(n);
				var m = c.length > p.length && c[p.length];
				if (m && m !== "/" && m !== ".") return g(n);
				p.length !== 0 && p !== "/" && (o = p, e.url = a + e.url.substr(a.length + o.length), !a && e.url[0] !== "/" && (e.url = "/" + e.url, l = !0)), f(i.handle, p, n, e, t, g);
			}
		}
		g();
	}, l.listen = function() {
		var e = a.createServer(this);
		return e.listen.apply(e, arguments);
	};
	function f(e, t, r, i, a, o) {
		var s = e.length, c = r, l = !!r;
		n("%s %s : %s", e.name || "<anonymous>", t, i.originalUrl);
		try {
			if (l && s === 4) {
				e(r, i, a, o);
				return;
			}
			if (!l && s < 4) {
				e(i, a, o);
				return;
			}
		} catch (e) {
			c = e;
		}
		o(c);
	}
	function p(e) {
		c !== "test" && console.error(e.stack || e.toString());
	}
	function m(e) {
		if (e.length !== 0 && e[0] !== "/") {
			var t = e.indexOf("://");
			return t !== -1 && e.lastIndexOf("?", t) === -1 ? e.substr(0, e.indexOf("/", 3 + t)) : void 0;
		}
	}
})), oo = /* @__PURE__ */ Z(((e, t) => {
	var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
	function a(e) {
		if (e == null) throw TypeError("Object.assign cannot be called with null or undefined");
		return Object(e);
	}
	function o() {
		try {
			if (!Object.assign) return !1;
			var e = /* @__PURE__ */ new String("abc");
			if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
			for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
			if (Object.getOwnPropertyNames(t).map(function(e) {
				return t[e];
			}).join("") !== "0123456789") return !1;
			var r = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(e) {
				r[e] = e;
			}), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
		} catch {
			return !1;
		}
	}
	t.exports = o() ? Object.assign : function(e, t) {
		for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
			for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
			if (n) {
				c = n(o);
				for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
			}
		}
		return s;
	};
})), so = /* @__PURE__ */ Z(((e, t) => {
	t.exports = a, t.exports.append = r;
	var n = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
	function r(e, t) {
		if (typeof e != "string") throw TypeError("header argument is required");
		if (!t) throw TypeError("field argument is required");
		for (var r = Array.isArray(t) ? t : i(String(t)), a = 0; a < r.length; a++) if (!n.test(r[a])) throw TypeError("field argument contains an invalid header name");
		if (e === "*") return e;
		var o = e, s = i(e.toLowerCase());
		if (r.indexOf("*") !== -1 || s.indexOf("*") !== -1) return "*";
		for (var c = 0; c < r.length; c++) {
			var l = r[c].toLowerCase();
			s.indexOf(l) === -1 && (s.push(l), o = o ? o + ", " + r[c] : r[c]);
		}
		return o;
	}
	function i(e) {
		for (var t = 0, n = [], r = 0, i = 0, a = e.length; i < a; i++) switch (e.charCodeAt(i)) {
			case 32:
				r === t && (r = t = i + 1);
				break;
			case 44:
				n.push(e.substring(r, t)), r = t = i + 1;
				break;
			default: t = i + 1;
		}
		return n.push(e.substring(r, t)), n;
	}
	function a(e, t) {
		if (!e || !e.getHeader || !e.setHeader) throw TypeError("res argument is required");
		var n = e.getHeader("Vary") || "";
		(n = r(Array.isArray(n) ? n.join(", ") : String(n), t)) && e.setHeader("Vary", n);
	}
})), co = /* @__PURE__ */ Z(((e, t) => {
	(function() {
		var e = oo(), n = so(), r = {
			origin: "*",
			methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
			preflightContinue: !1,
			optionsSuccessStatus: 204
		};
		function i(e) {
			return typeof e == "string" || e instanceof String;
		}
		function a(e, t) {
			if (Array.isArray(t)) {
				for (var n = 0; n < t.length; ++n) if (a(e, t[n])) return !0;
				return !1;
			}
			return i(t) ? e === t : t instanceof RegExp ? t.test(e) : !!t;
		}
		function o(e, t) {
			var n = t.headers.origin, r = [], o;
			return !e.origin || e.origin === "*" ? r.push([{
				key: "Access-Control-Allow-Origin",
				value: "*"
			}]) : i(e.origin) ? (r.push([{
				key: "Access-Control-Allow-Origin",
				value: e.origin
			}]), r.push([{
				key: "Vary",
				value: "Origin"
			}])) : (o = a(n, e.origin), r.push([{
				key: "Access-Control-Allow-Origin",
				value: o ? n : !1
			}]), r.push([{
				key: "Vary",
				value: "Origin"
			}])), r;
		}
		function s(e) {
			var t = e.methods;
			return t.join && (t = e.methods.join(",")), {
				key: "Access-Control-Allow-Methods",
				value: t
			};
		}
		function c(e) {
			return e.credentials === !0 ? {
				key: "Access-Control-Allow-Credentials",
				value: "true"
			} : null;
		}
		function l(e, t) {
			var n = e.allowedHeaders || e.headers, r = [];
			return n ? n.join && (n = n.join(",")) : (n = t.headers["access-control-request-headers"], r.push([{
				key: "Vary",
				value: "Access-Control-Request-Headers"
			}])), n && n.length && r.push([{
				key: "Access-Control-Allow-Headers",
				value: n
			}]), r;
		}
		function u(e) {
			var t = e.exposedHeaders;
			if (t) t.join && (t = t.join(","));
			else return null;
			return t && t.length ? {
				key: "Access-Control-Expose-Headers",
				value: t
			} : null;
		}
		function d(e) {
			var t = (typeof e.maxAge == "number" || e.maxAge) && e.maxAge.toString();
			return t && t.length ? {
				key: "Access-Control-Max-Age",
				value: t
			} : null;
		}
		function f(e, t) {
			for (var r = 0, i = e.length; r < i; r++) {
				var a = e[r];
				a && (Array.isArray(a) ? f(a, t) : a.key === "Vary" && a.value ? n(t, a.value) : a.value && t.setHeader(a.key, a.value));
			}
		}
		function p(e, t, n, r) {
			var i = [];
			(t.method && t.method.toUpperCase && t.method.toUpperCase()) === "OPTIONS" ? (i.push(o(e, t)), i.push(c(e)), i.push(s(e)), i.push(l(e, t)), i.push(d(e)), i.push(u(e)), f(i, n), e.preflightContinue ? r() : (n.statusCode = e.optionsSuccessStatus, n.setHeader("Content-Length", "0"), n.end())) : (i.push(o(e, t)), i.push(c(e)), i.push(u(e)), f(i, n), r());
		}
		function m(t) {
			var n = null;
			return n = typeof t == "function" ? t : function(e, n) {
				n(null, t);
			}, function(t, i, a) {
				n(t, function(n, o) {
					if (n) a(n);
					else {
						var s = e({}, r, o), c = null;
						s.origin && typeof s.origin == "function" ? c = s.origin : s.origin && (c = function(e, t) {
							t(null, s.origin);
						}), c ? c(t.headers.origin, function(e, n) {
							e || !n ? a(e) : (s.origin = n, p(s, t, i, a));
						}) : a();
					}
				});
			};
		}
		t.exports = m;
	})();
})), lo = /* @__PURE__ */ Z(((e, t) => {
	var n = [
		"||",
		"&&",
		";;&",
		";;",
		";&",
		"|&",
		"<(",
		">(",
		"<<<",
		"<<-",
		"<<",
		">>",
		">&",
		">|",
		"&>>",
		"&>",
		"<&",
		"<>",
		"&",
		";",
		"(",
		")",
		"|",
		"<",
		">"
	], r = /[\n\r\u2028\u2029]/, i = /[\s#!"$&'():;<=>@\\^`|~]/g;
	t.exports = function(e) {
		var t = !1;
		return e.map(function(e) {
			if (t && typeof e == "string" && r.test(e)) throw TypeError("a token after a `comment` must not contain line terminators");
			if (e === "") return "''";
			if (e && typeof e == "object") {
				if ("op" in e && e.op === "glob") {
					if (typeof e.pattern != "string") throw TypeError("glob token requires a string `pattern`");
					if (r.test(e.pattern)) throw TypeError("glob `pattern` must not contain line terminators");
					return e.pattern === "" ? "''" : e.pattern.replace(i, "\\$&");
				}
				if ("op" in e && typeof e.op == "string") {
					if (n.indexOf(e.op) < 0) throw TypeError("invalid `op` value: " + JSON.stringify(e.op));
					return e.op.replace(/[\s\S]/g, "\\$&");
				}
				if ("comment" in e && typeof e.comment == "string") {
					if (r.test(e.comment)) throw TypeError("`comment` must not contain line terminators");
					return t = !0, "#" + e.comment;
				}
				throw TypeError("unrecognized object token shape");
			}
			return /'/.test(e) && /!/.test(e) ? "'" + e.replace(/'/g, "'\"'\"'") + "'" : /["\s\\]/.test(e) && !/'/.test(e) ? "'" + e + "'" : /["'\s]/.test(e) ? "\"" + e.replace(/(["\\$`])/g, "\\$1") + "\"" : String(e).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}~])/g, "$1\\$2");
		}).join(" ");
	};
})), uo = /* @__PURE__ */ Z(((e, t) => {
	for (var n = "(?:\\|\\||\\&(?:\\&|>>?)|;;\\&?|[;|]\\&|\\<\\(|\\<\\<\\<|\\<\\<-|\\<\\<(?!\\()|>>|>[&|(]|<[&>]|[&;()|<>])", r = RegExp("^" + n + "$"), i = "|&;()<> \\t", a = "'([^']*?)'", o = "(?:\\\\[\\s\\S]|[^\\\\'])*?", s = "\\$'" + o + "'", c = RegExp("\\$'" + o + "(?:(')|\\\\?$)", "g"), l = "abeEfnrtv", u = "\x07\b\x1B\x1B\f\n\r	\v", d = /^#$/, f = "'", p = "\"", m = "$", h = "", g = 4294967296, _ = 0; _ < 4; _++) h += (g * Math.random()).toString(16);
	var v = RegExp("^" + h);
	function y(e, t) {
		for (var n = t.lastIndex, r = [], i; i = t.exec(e);) r[r.length] = i, t.lastIndex === i.index && (t.lastIndex += 1);
		return t.lastIndex = n, r;
	}
	function b(e, t, n) {
		var r = typeof e == "function" ? e(n) : e[n];
		return r === void 0 && n != "" ? r = "" : r === void 0 && (r = "$"), typeof r == "object" ? t + h + JSON.stringify(r) + h : t + r;
	}
	var x = /\\([0-7]{1,3}|x[\dA-Fa-f]{1,2}|u[\dA-Fa-f]{1,4}|U[\dA-Fa-f]{1,8}|c(?:\\\\|[\s\S])|[abeEfnrtv\\'"?])/g;
	function S(e, t) {
		var n = t.charAt(0);
		if (n === "c") {
			var r = t.charAt(1);
			return r === "?" ? "" : String.fromCharCode(r.charCodeAt(0) & 31);
		}
		if (n === "x" || n === "u" || n === "U") {
			var i = parseInt(t.slice(1), 16);
			return i > 1114111 ? e : String.fromCharCode.apply(null, i > 65535 ? [55232 + (i >> 10), 56320 + (i & 1023)] : [i]);
		}
		if (n >= "0" && n <= "7") return String.fromCharCode(parseInt(t, 8) & 255);
		var a = l.indexOf(t);
		return a < 0 ? t : u.charAt(a);
	}
	function C(e) {
		return e.replace(x, S).split("\0")[0];
	}
	function w(e, t) {
		return c.lastIndex = t, !!c.exec(e)[1];
	}
	function T(e, t, o) {
		o ||= {};
		var l = o.escape || "\\", u = o.splitUnquoted === !0 ? " 	\n" : typeof o.splitUnquoted == "string" ? o.splitUnquoted : "", h = "(\\" + l + "['\"$\\" + l + i + "]|\\$\\$|\\$(?!" + s.slice(2) + ")|[^\\s'\"$" + i + "])+", g = "\"(?:\\" + l + "[\\s\\S]|[^\"\\" + l + "])*\"", _ = y(e, new RegExp(["(" + n + ")", "(" + s + "|" + h + "|" + g + "|" + a + ")+"].join("|"), "g"));
		if (_.length === 0) return [];
		t ||= {};
		var v = !1;
		return _.map(function(n) {
			var i = n[0];
			if (!i || v) return;
			if (r.test(i)) return { op: i };
			var a = !1, o = !1, s = "", h = [], g = !1, _ = null, y = !1, x;
			function S() {
				x += 1;
				var e, n, r = i.charAt(x);
				if (r === "{") {
					if (x += 1, i.charAt(x) === "}") throw Error("Bad substitution: " + i.slice(x - 2, x + 1));
					var a = 1;
					for (e = x; a > 0 && e < i.length;) i.charAt(e) === "{" && i.charAt(e - 1) === "$" ? a += 1 : i.charAt(e) === "}" && --a, e += 1;
					if (a !== 0) throw Error("Bad substitution: " + i.slice(x));
					--e, n = i.slice(x, e), x = e;
				} else if (/[*@#?$!-]/.test(r)) n = r;
				else {
					var o = i.slice(x);
					e = o.match(/[^\w\d_]/), e ? (n = o.slice(0, e.index), x += e.index - 1) : (n = o, x = i.length);
				}
				return b(t, "", n);
			}
			function T() {
				if (_ !== null) {
					if (_ === 0) s !== "" && (h[h.length] = s, s = "");
					else {
						h[h.length] = s, s = "";
						for (var e = 1; e < _; e += 1) h[h.length] = "";
					}
					_ = null;
				}
			}
			for (x = 0; x < i.length; x++) {
				var E = i.charAt(x);
				if (u && E !== m && T(), y ||= !a && (E === "*" || E === "?"), o) s += E, o = !1;
				else if (a) E === a ? a = !1 : a == f ? s += E : E === l ? (x += 1, E = i.charAt(x), s += E === p || E === l || E === m ? E : l + E) : s += E === m ? S() : E;
				else if (E === p || E === f) a = E, g = !0;
				else if (r.test(E)) return { op: i };
				else if (d.test(E)) {
					v = !0;
					var D = { comment: e.slice(n.index + x + 1) };
					return s.length ? [s, D] : [D];
				} else if (E === l) o = !0;
				else if (E === m && i.charAt(x + 1) === f && w(i, x)) T(), g = !0, s += C(i.slice(x + 2, c.lastIndex - 1)), x = c.lastIndex - 1;
				else if (E === m) {
					var O = S();
					if (!u) s += O;
					else for (var k = 0; k < O.length; k += 1) {
						var A = O.charAt(k);
						u.indexOf(A) < 0 ? (T(), s += A) : _ === null ? _ = A === " " || A === "	" || A === "\n" ? 0 : 1 : A !== " " && A !== "	" && A !== "\n" && (_ += 1);
					}
				} else s += E;
			}
			if (y) return {
				op: "glob",
				pattern: s
			};
			if (u) {
				if (_ !== null && _ > 0) {
					h[h.length] = s, s = "";
					for (var ee = 1; ee < _; ee += 1) h[h.length] = "";
				}
				return (s !== "" || g && h.length === 0) && (h[h.length] = s), h;
			}
			return s;
		}).reduce(function(e, t) {
			return t === void 0 || [].concat(t).forEach(function(t) {
				e[e.length] = t;
			}), e;
		}, []);
	}
	t.exports = function(e, t, n) {
		var r = T(e, t, n);
		return typeof t == "function" ? r.reduce(function(e, t) {
			if (typeof t == "object") return e[e.length] = t, e;
			var n = t.split(RegExp("(" + h + ".*?" + h + ")", "g"));
			return n.length === 1 ? (e[e.length] = n[0], e) : (n.filter(Boolean).forEach(function(t) {
				e[e.length] = v.test(t) ? JSON.parse(t.split(h)[1]) : t;
			}), e);
		}, []) : r;
	};
})), fo = /* @__PURE__ */ Z(((e) => {
	e.quote = lo(), e.parse = uo();
})), po = /* @__PURE__ */ Z(((e, t) => {
	t.exports = {
		"/Applications/Atom.app/Contents/MacOS/Atom": "atom",
		"/Applications/Atom Beta.app/Contents/MacOS/Atom Beta": "/Applications/Atom Beta.app/Contents/MacOS/Atom Beta",
		"/Applications/Brackets.app/Contents/MacOS/Brackets": "brackets",
		"/Applications/Sublime Text.app/Contents/MacOS/Sublime Text": "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl",
		"/Applications/Sublime Text.app/Contents/MacOS/sublime_text": "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl",
		"/Applications/Sublime Text 2.app/Contents/MacOS/Sublime Text 2": "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl",
		"/Applications/Sublime Text Dev.app/Contents/MacOS/Sublime Text": "/Applications/Sublime Text Dev.app/Contents/SharedSupport/bin/subl",
		"/Applications/Visual Studio Code.app/Contents/MacOS/Code": "code",
		"/Applications/Visual Studio Code.app/Contents/MacOS/Electron": "code",
		"/Applications/Visual Studio Code - Insiders.app/Contents/MacOS/Code - Insiders": "code-insiders",
		"/Applications/Visual Studio Code - Insiders.app/Contents/MacOS/Electron": "code-insiders",
		"/Applications/VSCodium.app/Contents/MacOS/Electron": "codium",
		"/Applications/Cursor.app/Contents/MacOS/Cursor": "cursor",
		"/Applications/Trae.app/Contents/MacOS/Electron": "trae",
		"/Applications/Antigravity.app/Contents/MacOS/Electron": "antigravity",
		"/Applications/AppCode.app/Contents/MacOS/appcode": "/Applications/AppCode.app/Contents/MacOS/appcode",
		"/Applications/CLion.app/Contents/MacOS/clion": "/Applications/CLion.app/Contents/MacOS/clion",
		"/Applications/IntelliJ IDEA.app/Contents/MacOS/idea": "/Applications/IntelliJ IDEA.app/Contents/MacOS/idea",
		"/Applications/IntelliJ IDEA Ultimate.app/Contents/MacOS/idea": "/Applications/IntelliJ IDEA Ultimate.app/Contents/MacOS/idea",
		"/Applications/IntelliJ IDEA Community Edition.app/Contents/MacOS/idea": "/Applications/IntelliJ IDEA Community Edition.app/Contents/MacOS/idea",
		"/Applications/PhpStorm.app/Contents/MacOS/phpstorm": "/Applications/PhpStorm.app/Contents/MacOS/phpstorm",
		"/Applications/PyCharm.app/Contents/MacOS/pycharm": "/Applications/PyCharm.app/Contents/MacOS/pycharm",
		"/Applications/PyCharm CE.app/Contents/MacOS/pycharm": "/Applications/PyCharm CE.app/Contents/MacOS/pycharm",
		"/Applications/RubyMine.app/Contents/MacOS/rubymine": "/Applications/RubyMine.app/Contents/MacOS/rubymine",
		"/Applications/WebStorm.app/Contents/MacOS/webstorm": "/Applications/WebStorm.app/Contents/MacOS/webstorm",
		"/Applications/MacVim.app/Contents/MacOS/MacVim": "mvim",
		"/Applications/GoLand.app/Contents/MacOS/goland": "/Applications/GoLand.app/Contents/MacOS/goland",
		"/Applications/Rider.app/Contents/MacOS/rider": "/Applications/Rider.app/Contents/MacOS/rider",
		"/Applications/Zed.app/Contents/MacOS/zed": "zed"
	};
})), mo = /* @__PURE__ */ Z(((e, t) => {
	t.exports = {
		atom: "atom",
		Brackets: "brackets",
		"code-insiders": "code-insiders",
		code: "code",
		vscodium: "vscodium",
		codium: "codium",
		cursor: "cursor",
		trae: "trae",
		antigravity: "antigravity",
		emacs: "emacs",
		gvim: "gvim",
		idea: "idea",
		"idea.sh": "idea",
		phpstorm: "phpstorm",
		"phpstorm.sh": "phpstorm",
		pycharm: "pycharm",
		"pycharm.sh": "pycharm",
		rubymine: "rubymine",
		"rubymine.sh": "rubymine",
		sublime_text: "subl",
		vim: "vim",
		webstorm: "webstorm",
		"webstorm.sh": "webstorm",
		goland: "goland",
		"goland.sh": "goland",
		rider: "rider",
		"rider.sh": "rider",
		zed: "zed"
	};
})), ho = /* @__PURE__ */ Z(((e, t) => {
	t.exports = /* @__PURE__ */ "Brackets.exe,Code.exe,Code - Insiders.exe,VSCodium.exe,Cursor.exe,atom.exe,sublime_text.exe,notepad++.exe,clion.exe,clion64.exe,idea.exe,idea64.exe,phpstorm.exe,phpstorm64.exe,pycharm.exe,pycharm64.exe,rubymine.exe,rubymine64.exe,webstorm.exe,webstorm64.exe,goland.exe,goland64.exe,rider.exe,rider64.exe,Trae.exe,zed.exe,Antigravity.exe".split(",");
})), go = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("path"), r = fo(), i = Q("child_process"), a = po(), o = mo(), s = ho();
	function c(e) {
		let t = Object.keys(a), n = e.split("\n");
		for (let r = 0; r < t.length; r++) {
			let i = t[r];
			if (n.includes(i)) return a[i];
			let o = i.replace("/Applications", "");
			if (e.indexOf(o) !== -1) {
				if (i !== a[i]) return a[i];
				let e = n.find((e) => e.endsWith(o));
				if (e !== void 0) return e;
			}
		}
	}
	function l(e) {
		let t = e.split("\r\n");
		for (let e = 0; e < t.length; e++) {
			let r = t[e].trim(), i = n.win32.basename(r);
			if (s.indexOf(i) !== -1) return r;
		}
	}
	function u(e) {
		let t = Object.keys(o);
		for (let n = 0; n < t.length; n++) {
			let r = t[n];
			if (e.indexOf(r) !== -1) return o[r];
		}
	}
	function d(e) {
		if (e) return r.parse(e);
		if (process.env.LAUNCH_EDITOR) return [process.env.LAUNCH_EDITOR];
		if (process.versions.webcontainer) return [process.env.EDITOR || "code"];
		try {
			if (process.platform === "darwin") {
				let e = c(i.execSync("ps x -o comm=", { stdio: [
					"pipe",
					"pipe",
					"ignore"
				] }).toString());
				if (e !== void 0) return [e];
			} else if (process.platform === "win32") {
				let e = l(i.execSync("powershell -NoProfile -Command \"[Console]::OutputEncoding=[Text.Encoding]::UTF8;Get-CimInstance -Query \\\"select executablepath from win32_process where executablepath is not null\\\" | % { $_.ExecutablePath }\"", { stdio: [
					"pipe",
					"pipe",
					"ignore"
				] }).toString());
				if (e !== void 0) return [e];
			} else if (process.platform === "linux") {
				let e = u(i.execSync("ps x --no-heading -o comm --sort=comm", { stdio: [
					"pipe",
					"pipe",
					"ignore"
				] }).toString());
				if (e !== void 0) return [e];
			}
		} catch {}
		return process.env.VISUAL ? [process.env.VISUAL] : process.env.EDITOR ? [process.env.EDITOR] : [null];
	}
	t.exports = d, t.exports.getEditorFromMacProcesses = c, t.exports.getEditorFromWindowsProcesses = l, t.exports.getEditorFromLinuxProcesses = u;
})), _o = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("os"), r = Q("path");
	t.exports = function(e, t, i, a = 1) {
		if (t = r.resolve(t), process.platform === "linux" && t.startsWith("/mnt/") && /Microsoft/i.test(n.release()) && (t = `./${r.relative("", t)}`), !i) return [t];
		switch (r.basename(e).replace(/\.(exe|cmd|bat)$/i, "")) {
			case "atom":
			case "Atom":
			case "Atom Beta":
			case "subl":
			case "sublime":
			case "sublime_text":
			case "wstorm":
			case "charm":
			case "zed": return [`${t}:${i}:${a}`];
			case "notepad++": return [
				"-n" + i,
				"-c" + a,
				t
			];
			case "vim":
			case "mvim": return [`+call cursor(${i}, ${a})`, t];
			case "joe":
			case "gvim": return [`+${i}`, t];
			case "emacs":
			case "emacsclient": return [`+${i}:${a}`, t];
			case "rmate":
			case "mate":
			case "mine": return [
				"--line",
				i,
				t
			];
			case "code":
			case "Code":
			case "code-insiders":
			case "Code - Insiders":
			case "codium":
			case "trae":
			case "antigravity":
			case "cursor":
			case "vscodium":
			case "VSCodium": return [
				"-r",
				"-g",
				`${t}:${i}:${a}`
			];
			case "appcode":
			case "clion":
			case "clion64":
			case "idea":
			case "idea64":
			case "phpstorm":
			case "phpstorm64":
			case "pycharm":
			case "pycharm64":
			case "rubymine":
			case "rubymine64":
			case "webstorm":
			case "webstorm64":
			case "goland":
			case "goland64":
			case "rider":
			case "rider64": return [
				"--line",
				i,
				"--column",
				a,
				t
			];
		}
		return process.env.LAUNCH_EDITOR ? [
			t,
			i,
			a
		] : [t];
	};
})), vo = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return e.replace(/([&|<>,;=^])/g, "^$1");
	}
	function r(e) {
		return e.includes("^") ? `^"${e}^"` : e.includes(" ") ? `"${e}"` : e;
	}
	function i(e, t) {
		if (t.some((e) => /[\r\n]/.test(e))) throw Error("Cannot launch an editor with an argument containing a line break");
		if (t.some((e) => e.includes("%"))) throw Error("Cannot launch an editor with an argument containing \"%\"");
		return [e, ...t.map(n)].map(r).join(" ");
	}
	t.exports = i;
})), yo = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("path"), r = /:(\d+)(:(\d+))?$/;
	t.exports = function(e) {
		e.startsWith("file://") && (e = Q("url").fileURLToPath(e));
		let t = e.replace(r, ""), i = t ? n.resolve(t) : "", a = e.match(r);
		return {
			fileName: i,
			lineNumber: a && a[1],
			columnNumber: a && a[3]
		};
	};
})), bo = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("fs"), r = Q("path"), i = ii(), a = Q("child_process"), o = go(), s = _o(), c = vo(), l = yo();
	function u(e) {
		return (t, n) => {
			console.log(), console.log(i.red("Could not open " + r.basename(t) + " in the editor.")), n && (n[n.length - 1] !== "." && (n += "."), console.log(i.red("The editor process exited with an error: " + n))), console.log(), e && e(t, n);
		};
	}
	function d(e) {
		switch (e) {
			case "vim":
			case "emacs":
			case "nano": return !0;
		}
		return !1;
	}
	let f = null;
	function p(e, t, r) {
		let { fileName: i, lineNumber: p, columnNumber: m } = l(e);
		if (typeof t == "function" && (r = t, t = void 0), r = u(r), process.platform === "win32" && i.startsWith("\\\\")) return r(i, "UNC paths are not supported on Windows to avoid security issues. See https://github.com/vitejs/launch-editor/tree/main/packages/launch-editor#unc-paths-on-windows for details.");
		if (!n.existsSync(i)) return;
		let [h, ...g] = o(t);
		if (!h) {
			r(i, null);
			return;
		}
		let _ = s(h, i, p, m);
		g.push.apply(g, _);
		let v;
		if (process.platform === "win32") try {
			v = c(h, g);
		} catch (e) {
			r(i, e.message);
			return;
		}
		f && d(h) && f.kill("SIGKILL"), f = process.platform === "win32" ? a.exec(v, {
			stdio: "inherit",
			shell: !0
		}) : a.spawn(h, g, { stdio: "inherit" }), f.on("exit", function(e) {
			f = null, e && r(i, "(code " + e + ")");
		}), f.on("error", function(e) {
			let { code: t, message: n } = e;
			t === "ENOENT" && (n = `${n} ('${h}' command does not exist in 'PATH')`), r(i, n);
		});
	}
	t.exports = p;
})), xo = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("path"), r = bo();
	t.exports = (e, t, i) => (typeof e == "function" && (i = e, e = void 0), typeof t == "function" && (i = t, t = void 0), t ||= process.cwd(), function(a, o) {
		let s;
		try {
			let e = a.url.startsWith("http") ? a.url : `http://localhost${a.url}`;
			s = new URL(e);
		} catch {
			o.statusCode = 500, o.end("launch-editor-middleware: invalid URL.");
			return;
		}
		let c = s.searchParams.get("file");
		if (!c) o.statusCode = 500, o.end("launch-editor-middleware: required query param \"file\" is missing.");
		else {
			let a = c.startsWith("file://") ? c : n.resolve(t, c);
			r(a, e, i), o.end();
		}
	});
})), So = globalThis.process?.env || Object.create(null), Co = globalThis.process || { env: So }, wo = Co.platform || "";
/^win/i.test(wo), /^linux/i.test(wo), /^darwin/i.test(wo);
var To = (Co.versions?.node || "").replace(/^v/, "") || null;
Number(To?.split(".")[0]);
var Eo = !!Co?.versions?.node, Do = "Bun" in globalThis, Oo = "Deno" in globalThis, ko = "fastly" in globalThis, Ao = "Netlify" in globalThis, jo = "EdgeRuntime" in globalThis, Mo = [
	[Ao, "netlify"],
	[jo, "edge-light"],
	[globalThis.navigator?.userAgent === "Cloudflare-Workers", "workerd"],
	[ko, "fastly"],
	[Oo, "deno"],
	[Do, "bun"],
	[Eo, "node"]
];
(function() {
	let e = Mo.find((e) => e[0]);
	if (e) return { name: e[1] };
})();
var No;
function Po() {
	try {
		return n.default.statSync("/.dockerenv"), !0;
	} catch {
		return !1;
	}
}
function Fo() {
	try {
		return n.default.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
	} catch {
		return !1;
	}
}
function Io() {
	return No === void 0 && (No = Po() || Fo()), No;
}
var Lo, Ro = () => {
	try {
		return n.default.statSync("/run/.containerenv"), !0;
	} catch {
		return !1;
	}
};
function zo() {
	return Lo === void 0 && (Lo = Ro() || Io()), Lo;
}
var Bo = () => {
	if (n.default.platform !== "linux") return !1;
	if (n.default.release().toLowerCase().includes("microsoft")) return !zo();
	try {
		if (n.default.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft")) return !zo();
	} catch {}
	return n.default.existsSync("/proc/sys/fs/binfmt_misc/WSLInterop") || n.default.existsSync("/run/WSL") ? !zo() : !1;
}, Vo = n.default.env.__IS_WSL_TEST__ ? Bo : Bo();
function Ho(e, t, n) {
	let r = (n) => Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		writable: !0
	});
	return Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !0,
		get() {
			let e = n();
			return r(e), e;
		},
		set(e) {
			r(e);
		}
	}), e;
}
(0, n.promisify)(n.execFile), (0, n.promisify)(n.execFile), (0, n.promisify)(n.execFile), new Map(Object.entries({
	MSEdgeHTM: {
		name: "Edge",
		id: "com.microsoft.edge"
	},
	MSEdgeBHTML: {
		name: "Edge Beta",
		id: "com.microsoft.edge.beta"
	},
	MSEdgeDHTML: {
		name: "Edge Dev",
		id: "com.microsoft.edge.dev"
	},
	AppXq0fevzme2pys62n3e0fbqa7peapykr8v: {
		name: "Edge",
		id: "com.microsoft.edge.old"
	},
	ChromeHTML: {
		name: "Chrome",
		id: "com.google.chrome"
	},
	ChromeBHTML: {
		name: "Chrome Beta",
		id: "com.google.chrome.beta"
	},
	ChromeDHTML: {
		name: "Chrome Dev",
		id: "com.google.chrome.dev"
	},
	ChromiumHTM: {
		name: "Chromium",
		id: "org.chromium.Chromium"
	},
	BraveHTML: {
		name: "Brave",
		id: "com.brave.Browser"
	},
	BraveBHTML: {
		name: "Brave Beta",
		id: "com.brave.Browser.beta"
	},
	BraveDHTML: {
		name: "Brave Dev",
		id: "com.brave.Browser.dev"
	},
	BraveSSHTM: {
		name: "Brave Nightly",
		id: "com.brave.Browser.nightly"
	},
	FirefoxURL: {
		name: "Firefox",
		id: "org.mozilla.firefox"
	},
	OperaStable: {
		name: "Opera",
		id: "com.operasoftware.Opera"
	},
	VivaldiHTM: {
		name: "Vivaldi",
		id: "com.vivaldi.Vivaldi"
	},
	"IE.HTTP": {
		name: "Internet Explorer",
		id: "com.microsoft.ie"
	}
})), (0, n.promisify)(n.execFile), (0, n.promisify)(n.default.execFile);
var Uo = n.default.dirname((0, n.fileURLToPath)(import.meta.url));
n.default.join(Uo, "xdg-open");
var { platform: Wo, arch: Go } = n.default;
function Ko(e) {
	if (typeof e == "string" || Array.isArray(e)) return e;
	let { [Go]: t } = e;
	if (!t) throw Error(`${Go} is not supported`);
	return t;
}
function qo({ [Wo]: e }, { wsl: t }) {
	if (t && Vo) return Ko(t);
	if (!e) throw Error(`${Wo} is not supported`);
	return Ko(e);
}
var Jo = {};
Ho(Jo, "chrome", () => qo({
	darwin: "google chrome",
	win32: "chrome",
	linux: [
		"google-chrome",
		"google-chrome-stable",
		"chromium"
	]
}, { wsl: {
	ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
	x64: ["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe", "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"]
} })), Ho(Jo, "brave", () => qo({
	darwin: "brave browser",
	win32: "brave",
	linux: ["brave-browser", "brave"]
}, { wsl: {
	ia32: "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe",
	x64: ["/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe", "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe"]
} })), Ho(Jo, "firefox", () => qo({
	darwin: "firefox",
	win32: String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`,
	linux: "firefox"
}, { wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe" })), Ho(Jo, "edge", () => qo({
	darwin: "microsoft edge",
	win32: "msedge",
	linux: ["microsoft-edge", "microsoft-edge-dev"]
}, { wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" })), Ho(Jo, "browser", () => "browser"), Ho(Jo, "browserPrivate", () => "browserPrivate"), process.platform, $("vite:html-fallback"), aa(xi), aa(Si), aa(Ci);
var Yo = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "commentRegex", { get: function() {
		return /^\s*?\/[\/\*][@#]\s+?sourceMappingURL=data:(((?:application|text)\/json)(?:;charset=([^;,]+?)?)?)?(?:;(base64))?,(.*?)$/gm;
	} }), Object.defineProperty(e, "mapFileCommentRegex", { get: function() {
		return /(?:\/\/[@#][ \t]+?sourceMappingURL=([^\s'"`]+?)[ \t]*?$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*?(?:\*\/){1}[ \t]*?$)/gm;
	} });
	var t = typeof Buffer < "u" ? typeof Buffer.from == "function" ? n : r : i;
	function n(e) {
		return Buffer.from(e, "base64").toString();
	}
	function r(e) {
		if (typeof value == "number") throw TypeError("The value to decode must not be of type number.");
		return new Buffer(e, "base64").toString();
	}
	function i(e) {
		return decodeURIComponent(escape(atob(e)));
	}
	function a(e) {
		return e.split(",").pop();
	}
	function o(t, n) {
		var r = e.mapFileCommentRegex.exec(t), i = r[1] || r[2];
		try {
			var t = n(i);
			return t != null && typeof t.catch == "function" ? t.catch(a) : t;
		} catch (e) {
			a(e);
		}
		function a(e) {
			throw Error("An error occurred while trying to read the map file at " + i + "\n" + e.stack);
		}
	}
	function s(e, n) {
		n ||= {}, n.hasComment && (e = a(e)), n.encoding === "base64" ? e = t(e) : n.encoding === "uri" && (e = decodeURIComponent(e)), (n.isJSON || n.encoding) && (e = JSON.parse(e)), this.sourcemap = e;
	}
	s.prototype.toJSON = function(e) {
		return JSON.stringify(this.sourcemap, null, e);
	}, typeof Buffer < "u" ? typeof Buffer.from == "function" ? s.prototype.toBase64 = c : s.prototype.toBase64 = l : s.prototype.toBase64 = u;
	function c() {
		var e = this.toJSON();
		return Buffer.from(e, "utf8").toString("base64");
	}
	function l() {
		var e = this.toJSON();
		if (typeof e == "number") throw TypeError("The json to encode must not be of type number.");
		return new Buffer(e, "utf8").toString("base64");
	}
	function u() {
		var e = this.toJSON();
		return btoa(unescape(encodeURIComponent(e)));
	}
	s.prototype.toURI = function() {
		var e = this.toJSON();
		return encodeURIComponent(e);
	}, s.prototype.toComment = function(e) {
		var t, n, r;
		return e != null && e.encoding === "uri" ? (t = "", n = this.toURI()) : (t = ";base64", n = this.toBase64()), r = "sourceMappingURL=data:application/json;charset=utf-8" + t + "," + n, e != null && e.multiline ? "/*# " + r + " */" : "//# " + r;
	}, s.prototype.toObject = function() {
		return JSON.parse(this.toJSON());
	}, s.prototype.addProperty = function(e, t) {
		if (this.sourcemap.hasOwnProperty(e)) throw Error("property \"" + e + "\" already exists on the sourcemap, use set property instead");
		return this.setProperty(e, t);
	}, s.prototype.setProperty = function(e, t) {
		return this.sourcemap[e] = t, this;
	}, s.prototype.getProperty = function(e) {
		return this.sourcemap[e];
	}, e.fromObject = function(e) {
		return new s(e);
	}, e.fromJSON = function(e) {
		return new s(e, { isJSON: !0 });
	}, e.fromURI = function(e) {
		return new s(e, { encoding: "uri" });
	}, e.fromBase64 = function(e) {
		return new s(e, { encoding: "base64" });
	}, e.fromComment = function(t) {
		var n, r;
		return t = t.replace(/^\/\*/g, "//").replace(/\*\/$/g, ""), n = e.commentRegex.exec(t), r = n && n[4] || "uri", new s(t, {
			encoding: r,
			hasComment: !0
		});
	};
	function d(e) {
		return new s(e, { isJSON: !0 });
	}
	e.fromMapFileComment = function(e, t) {
		if (typeof t == "string") throw Error("String directory paths are no longer supported with `fromMapFileComment`\nPlease review the Upgrading documentation at https://github.com/thlorenz/convert-source-map#upgrading");
		var n = o(e, t);
		return n != null && typeof n.then == "function" ? n.then(d) : d(n);
	}, e.fromSource = function(t) {
		var n = t.match(e.commentRegex);
		return n ? e.fromComment(n.pop()) : null;
	}, e.fromMapFileSource = function(t, n) {
		if (typeof n == "string") throw Error("String directory paths are no longer supported with `fromMapFileSource`\nPlease review the Upgrading documentation at https://github.com/thlorenz/convert-source-map#upgrading");
		var r = t.match(e.mapFileCommentRegex);
		return r ? e.fromMapFileComment(r.pop(), n) : null;
	}, e.removeComments = function(t) {
		return t.replace(e.commentRegex, "");
	}, e.removeMapFileComments = function(t) {
		return t.replace(e.mapFileCommentRegex, "");
	}, e.generateMapFileComment = function(e, t) {
		var n = "sourceMappingURL=" + e;
		return t && t.multiline ? "/*# " + n + " */" : "//# " + n;
	};
})), Xo = /* @__PURE__ */ Z(((e, t) => {
	t.exports = o;
	var n = Q("crypto"), r = Q("fs").Stats, i = Object.prototype.toString;
	function a(e) {
		if (e.length === 0) return "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"";
		var t = n.createHash("sha1").update(e, "utf8").digest("base64").substring(0, 27);
		return "\"" + (typeof e == "string" ? Buffer.byteLength(e, "utf8") : e.length).toString(16) + "-" + t + "\"";
	}
	function o(e, t) {
		if (e == null) throw TypeError("argument entity is required");
		var n = s(e), r = t && typeof t.weak == "boolean" ? t.weak : n;
		if (!n && typeof e != "string" && !Buffer.isBuffer(e)) throw TypeError("argument entity must be string, Buffer, or fs.Stats");
		var i = n ? c(e) : a(e);
		return r ? "W/" + i : i;
	}
	function s(e) {
		return typeof r == "function" && e instanceof r || e && typeof e == "object" && "ctime" in e && i.call(e.ctime) === "[object Date]" && "mtime" in e && i.call(e.mtime) === "[object Date]" && "ino" in e && typeof e.ino == "number" && "size" in e && typeof e.size == "number";
	}
	function c(e) {
		var t = e.mtime.getTime().toString(16);
		return "\"" + e.size.toString(16) + "-" + t + "\"";
	}
}));
Yo(), $("vite:sourcemap", { onlyWhenFocused: !0 }), Xo(), $("vite:send", { onlyWhenFocused: !0 }), oa();
var Zo = /* @__PURE__ */ Z(((e, t) => {
	var n;
	t.exports = function() {
		if (!n) {
			try {
				n = ($i(), ri(zi))("follow-redirects");
			} catch {}
			typeof n != "function" && (n = function() {});
		}
		n.apply(null, arguments);
	};
})), Qo = /* @__PURE__ */ Z(((e, t) => {
	var n = Q("url"), r = n.URL, i = Q("http"), a = Q("https"), o = Q("stream").Writable, s = Q("assert"), c = Zo();
	// istanbul ignore next
	(function() {
		var e = typeof process < "u", t = typeof window < "u" && typeof document < "u", n = M(Error.captureStackTrace);
		e || !t && n || console.warn("The follow-redirects package should be excluded from browser builds.");
	})();
	var l = !1;
	try {
		s(new r(""));
	} catch (e) {
		l = e.code === "ERR_INVALID_URL";
	}
	var u = [
		"Authorization",
		"Proxy-Authorization",
		"Cookie"
	], d = [
		"auth",
		"host",
		"hostname",
		"href",
		"path",
		"pathname",
		"port",
		"protocol",
		"query",
		"search",
		"hash"
	], f = [
		"abort",
		"aborted",
		"connect",
		"error",
		"socket",
		"timeout"
	], p = Object.create(null);
	f.forEach(function(e) {
		p[e] = function(t, n, r) {
			this._redirectable.emit(e, t, n, r);
		};
	});
	var m = O("ERR_INVALID_URL", "Invalid URL", TypeError), h = O("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed"), g = O("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", h), _ = O("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit"), v = O("ERR_STREAM_WRITE_AFTER_END", "write after end"), y = o.prototype.destroy || S;
	function b(e, t) {
		o.call(this), this._sanitizeOptions(e), this._options = e, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
		var n = this;
		this._onNativeResponse = function(e) {
			try {
				n._processResponse(e);
			} catch (e) {
				n.emit("error", e instanceof h ? e : new h({ cause: e }));
			}
		}, this._headerFilter = RegExp("^(?:" + u.concat(e.sensitiveHeaders).map(P).join("|") + ")$", "i"), this._performRequest();
	}
	b.prototype = Object.create(o.prototype), b.prototype.abort = function() {
		k(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
	}, b.prototype.destroy = function(e) {
		return k(this._currentRequest, e), y.call(this, e), this;
	}, b.prototype.write = function(e, t, n) {
		if (this._ending) throw new v();
		if (!j(e) && !N(e)) throw TypeError("data should be a string, Buffer or Uint8Array");
		M(t) && (n = t, t = null), e.length === 0 ? n && n() : this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({
			data: e,
			encoding: t
		}), this._currentRequest.write(e, t, n)) : (this.emit("error", new _()), this.abort());
	}, b.prototype.end = function(e, t, n) {
		if (M(e) ? (n = e, e = t = null) : M(t) && (n = t, t = null), !e) this._ended = this._ending = !0, this._currentRequest.end(null, null, n);
		else {
			var r = this, i = this._currentRequest;
			this.write(e, t, function() {
				r._ended = !0, i.end(null, null, n);
			}), this._ending = !0;
		}
	}, b.prototype.setHeader = function(e, t) {
		this._options.headers[e] = t, this._currentRequest.setHeader(e, t);
	}, b.prototype.removeHeader = function(e) {
		delete this._options.headers[e], this._currentRequest.removeHeader(e);
	}, b.prototype.setTimeout = function(e, t) {
		var n = this;
		function r(t) {
			t.setTimeout(e), t.removeListener("timeout", t.destroy), t.addListener("timeout", t.destroy);
		}
		function i(t) {
			n._timeout && clearTimeout(n._timeout), n._timeout = setTimeout(function() {
				n.emit("timeout"), a();
			}, e), r(t);
		}
		function a() {
			n._timeout &&= (clearTimeout(n._timeout), null), n.removeListener("abort", a), n.removeListener("error", a), n.removeListener("response", a), n.removeListener("close", a), t && n.removeListener("timeout", t), n.socket || n._currentRequest.removeListener("socket", i);
		}
		return t && this.on("timeout", t), this.socket ? i(this.socket) : this._currentRequest.once("socket", i), this.on("socket", r), this.on("abort", a), this.on("error", a), this.on("response", a), this.on("close", a), this;
	}, [
		"flushHeaders",
		"getHeader",
		"setNoDelay",
		"setSocketKeepAlive"
	].forEach(function(e) {
		b.prototype[e] = function(t, n) {
			return this._currentRequest[e](t, n);
		};
	}), [
		"aborted",
		"connection",
		"socket"
	].forEach(function(e) {
		Object.defineProperty(b.prototype, e, { get: function() {
			return this._currentRequest[e];
		} });
	}), b.prototype._sanitizeOptions = function(e) {
		if (!e.headers) e.headers = {};
		else if (Array.isArray(e.headers)) {
			var t = e.headers;
			e.headers = {};
			for (var n = 0; n < t.length; n += 2) e.headers[t[n]] = t[n + 1];
		}
		if (ee(e.sensitiveHeaders) || (e.sensitiveHeaders = []), e.host && (e.hostname ||= e.host, delete e.host), !e.pathname && e.path) {
			var r = e.path.indexOf("?");
			r < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, r), e.search = e.path.substring(r));
		}
	}, b.prototype._performRequest = function() {
		var e = this._options.protocol, t = this._options.nativeProtocols[e];
		if (!t) throw TypeError("Unsupported protocol " + e);
		if (this._options.agents) {
			var r = e.slice(0, -1);
			this._options.agent = this._options.agents[r];
		}
		var i = this._currentRequest = t.request(this._options, this._onNativeResponse);
		i._redirectable = this;
		for (var a of f) i.on(a, p[a]);
		if (this._currentUrl = /^\//.test(this._options.path) ? n.format(this._options) : this._options.path, this._isRedirect) {
			var o = 0, s = this, c = this._requestBodyBuffers;
			(function e(t) {
				// istanbul ignore else
				if (i === s._currentRequest) {
					// istanbul ignore if
					if (t) s.emit("error", t);
					else if (o < c.length) {
						var n = c[o++];
						// istanbul ignore else
						i.finished || i.write(n.data, n.encoding, e);
					} else s._ended && i.end();
				}
			})();
		}
	}, b.prototype._processResponse = function(e) {
		var t = e.statusCode;
		this._options.trackRedirects && this._redirects.push({
			url: this._currentUrl,
			headers: e.headers,
			statusCode: t
		});
		var r = e.headers.location;
		if (!r || this._options.followRedirects === !1 || t < 300 || t >= 400) e.responseUrl = this._currentUrl, e.redirects = this._redirects, this.emit("response", e), this._requestBodyBuffers = [];
		else {
			if (k(this._currentRequest), e.destroy(), ++this._redirectCount > this._options.maxRedirects) throw new g();
			var i, a = this._options.beforeRedirect;
			a && (i = Object.assign({ Host: e.req.getHeader("host") }, this._options.headers));
			var o = this._options.method;
			((t === 301 || t === 302) && this._options.method === "POST" || t === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], D(/^content-/i, this._options.headers));
			var s = D(/^host$/i, this._options.headers), l = C(this._currentUrl), u = s || l.host, d = /^\w+:/.test(r) ? this._currentUrl : n.format(Object.assign(l, { host: u })), f = w(r, d);
			if (c("redirecting to", f.href), this._isRedirect = !0, E(f, this._options), (f.protocol !== l.protocol && f.protocol !== "https:" || f.host !== u && !A(f.host, u)) && D(this._headerFilter, this._options.headers), M(a)) {
				var p = {
					headers: e.headers,
					statusCode: t
				}, m = {
					url: d,
					method: o,
					headers: i
				};
				a(this._options, p, m), this._sanitizeOptions(this._options);
			}
			this._performRequest();
		}
	};
	function x(e) {
		var t = {
			maxRedirects: 21,
			maxBodyLength: 10485760
		}, n = {};
		return Object.keys(e).forEach(function(r) {
			var i = r + ":", a = n[i] = e[r], o = t[r] = Object.create(a);
			function l(e, r, a) {
				return te(e) ? e = E(e) : j(e) ? e = E(C(e)) : (a = r, r = T(e), e = { protocol: i }), M(r) && (a = r, r = null), r = Object.assign({
					maxRedirects: t.maxRedirects,
					maxBodyLength: t.maxBodyLength
				}, e, r), r.nativeProtocols = n, !j(r.host) && !j(r.hostname) && (r.hostname = "::1"), s.equal(r.protocol, i, "protocol mismatch"), c("options", r), new b(r, a);
			}
			function u(e, t, n) {
				var r = o.request(e, t, n);
				return r.end(), r;
			}
			Object.defineProperties(o, {
				request: {
					value: l,
					configurable: !0,
					enumerable: !0,
					writable: !0
				},
				get: {
					value: u,
					configurable: !0,
					enumerable: !0,
					writable: !0
				}
			});
		}), t;
	}
	function S() {}
	function C(e) {
		var t;
		// istanbul ignore else
		if (l) t = new r(e);
		else if (t = T(n.parse(e)), !j(t.protocol)) throw new m({ input: e });
		return t;
	}
	function w(e, t) {
		// istanbul ignore next
		return l ? new r(e, t) : C(n.resolve(t, e));
	}
	function T(e) {
		if (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname) || /^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host)) throw new m({ input: e.href || e });
		return e;
	}
	function E(e, t) {
		var n = t || {};
		for (var r of d) n[r] = e[r];
		return n.hostname.startsWith("[") && (n.hostname = n.hostname.slice(1, -1)), n.port !== "" && (n.port = Number(n.port)), n.path = n.search ? n.pathname + n.search : n.pathname, n;
	}
	function D(e, t) {
		var n;
		for (var r in t) e.test(r) && (n = t[r], delete t[r]);
		return n == null ? void 0 : String(n).trim();
	}
	function O(e, t, n) {
		function r(n) {
			M(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor), Object.assign(this, n || {}), this.code = e, this.message = this.cause ? t + ": " + this.cause.message : t;
		}
		return r.prototype = new (n || Error)(), Object.defineProperties(r.prototype, {
			constructor: {
				value: r,
				enumerable: !1
			},
			name: {
				value: "Error [" + e + "]",
				enumerable: !1
			}
		}), r;
	}
	function k(e, t) {
		for (var n of f) e.removeListener(n, p[n]);
		e.on("error", S), e.destroy(t);
	}
	function A(e, t) {
		s(j(e) && j(t));
		var n = e.length - t.length - 1;
		return n > 0 && e[n] === "." && e.endsWith(t);
	}
	function ee(e) {
		return e instanceof Array;
	}
	function j(e) {
		return typeof e == "string" || e instanceof String;
	}
	function M(e) {
		return typeof e == "function";
	}
	function N(e) {
		return typeof e == "object" && "length" in e;
	}
	function te(e) {
		return r && e instanceof r;
	}
	function P(e) {
		return e.replace(/[[\]\\/()*+?.^$|]/g, "\\$&");
	}
	t.exports = x({
		http: i,
		https: a
	}), t.exports.wrap = x;
})), $o = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.isSSL = void 0, e.setupOutgoing = i, e.setupSocket = a, e.getPort = o, e.hasEncryptedConnection = s, e.urlJoin = c, e.rewriteCookieProperty = l, e.toURL = f;
	let t = Q("node:tls"), n = /(^|,)\s*upgrade\s*($|,)/i;
	e.isSSL = /^https|wss/;
	let r = [
		":method",
		":path",
		":scheme",
		":authority",
		"connection",
		"keep-alive"
	];
	function i(t, i, a, o) {
		let s = i[o || "target"];
		t.port = +(s.port ?? (s.protocol !== void 0 && e.isSSL.test(s.protocol) ? 443 : 80));
		for (let e of [
			"host",
			"hostname",
			"socketPath",
			"pfx",
			"key",
			"passphrase",
			"cert",
			"ca",
			"ciphers",
			"secureProtocol"
		]) t[e] = s[e];
		t.hostname?.startsWith("[") && t.hostname.endsWith("]") && (t.hostname = t.hostname.slice(1, -1)), t.method = i.method || a.method, t.headers = { ...a.headers }, a.headers?.[":authority"] && (t.headers.host = a.headers[":authority"]), i.headers && (t.headers = {
			...t.headers,
			...i.headers
		});
		for (let e in t.headers) if (e.toLowerCase() == "trailer") {
			delete t.headers[e];
			break;
		}
		if (a.httpVersionMajor > 1) for (let e of r) delete t.headers[e];
		i.auth && (delete t.headers.authorization, t.auth = i.auth), i.ca && (t.ca = i.ca), s.protocol !== void 0 && e.isSSL.test(s.protocol) && (t.rejectUnauthorized = i.secure === void 0 || i.secure), t.agent = i.agent || !1, t.localAddress = i.localAddress, t.agent || (t.headers = t.headers || {}, typeof t.headers.connection == "string" && n.test(t.headers.connection) || (t.headers.connection = "close"));
		let l = s && i.prependPath !== !1 && "pathname" in s ? d(`${s.pathname}${s.search ?? ""}`) : "/", f = i.toProxy ? a.url : d(a.url);
		if (f = i.ignorePath ? "" : f, t.path = c(l, f ?? ""), i.changeOrigin && (t.headers.host = s.protocol !== void 0 && p(t.port, s.protocol) && !u(t.host) ? t.host + ":" + t.port : t.host), t.url = "href" in s && s.href || (s.protocol === "https" ? "https" : "http") + "://" + t.host + (t.port ? ":" + t.port : ""), a.httpVersionMajor > 1) for (let e of r) delete t.headers[e];
		return t;
	}
	function a(e) {
		return e.setTimeout(0), e.setNoDelay(!0), e.setKeepAlive(!0, 0), e;
	}
	function o(e) {
		let t = e.headers[":authority"] || e.headers.host, n = t ? t.match(/:(\d+)/) : "";
		return n ? n[1] : s(e) ? "443" : "80";
	}
	function s(e) {
		let n = e.connection;
		return n instanceof t.TLSSocket && n.encrypted || !!n.pair;
	}
	function c(...e) {
		let t = [], n = "";
		e.forEach((n, r) => {
			let i = n.indexOf("?");
			i !== -1 && (t.push(n.substring(i + 1)), e[r] = n.substring(0, i));
		}), n = t.filter(Boolean).join("&");
		let r = "";
		for (let t of e) t && (r.endsWith("/") ? t.startsWith("/") ? r += t.slice(1) : r += t : t.startsWith("/") ? r += t : r += "/" + t);
		return n ? r + "?" + n : r;
	}
	function l(e, t, n) {
		return Array.isArray(e) ? e.map((e) => l(e, t, n)) : e.replace(RegExp("(;\\s*" + n + "=)([^;]+)", "i"), (e, n, r) => {
			let i;
			if (r in t) i = t[r];
			else if ("*" in t) i = t["*"];
			else return e;
			return i ? n + i : "";
		});
	}
	function u(e) {
		if (e.startsWith("[")) {
			let t = e.indexOf("]");
			return t !== -1 && e.length > t + 1;
		}
		return e.includes(":");
	}
	function d(e) {
		if (e === "" || e?.startsWith("?")) return e;
		let t = f(e);
		return `${t.pathname ?? ""}${t.search ?? ""}`;
	}
	function f(e) {
		return e instanceof URL ? e : (typeof e == "object" && "href" in e && typeof e.href == "string" && (e = e.href), e ||= "", typeof e != "string" && (e = `${e}`), e.startsWith("//") && (e = `http://base.invalid${e}`), new URL(e, "http://base.invalid"));
	}
	function p(e, t) {
		if (t = t.split(":")[0], e = +e, !e) return !1;
		switch (t) {
			case "http":
			case "ws": return e !== 80;
			case "https":
			case "wss": return e !== 443;
		}
		return e !== 0;
	}
})), es = /* @__PURE__ */ Z(((e, t, n) => {
	var r = n && n.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), i = n && n.__setModuleDefault || (Object.create ? (function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	}) : function(e, t) {
		e.default = t;
	}), a = n && n.__importStar || (function() {
		var e = function(t) {
			return e = Object.getOwnPropertyNames || function(e) {
				var t = [];
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
				return t;
			}, e(t);
		};
		return function(t) {
			if (t && t.__esModule) return t;
			var n = {};
			if (t != null) for (var a = e(t), o = 0; o < a.length; o++) a[o] !== "default" && r(n, t, a[o]);
			return i(n, t), n;
		};
	})();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.OUTGOING_PASSES = void 0, e.removeChunked = c, e.setConnection = l, e.setRedirectHostRewrite = u, e.writeHeaders = d, e.writeStatusCode = f;
	let o = a($o()), s = /^201|30(1|2|7|8)$/;
	function c(e, t, n) {
		delete n.headers["transfer-encoding"];
	}
	function l(e, t, n) {
		e.httpVersion === "1.0" ? n.headers.connection = e.headers.connection || "close" : e.httpVersion !== "2.0" && !n.headers.connection && (n.headers.connection = e.headers.connection || "keep-alive");
	}
	function u(e, t, n, r) {
		if ((r.hostRewrite || r.autoRewrite || r.protocolRewrite) && n.headers.location && s.test(`${n.statusCode}`)) {
			let t = o.toURL(r.target), i = n.headers.location;
			if (typeof i != "string") return;
			let a = o.toURL(i);
			if (t.host != a.host) return;
			r.hostRewrite ? a.host = r.hostRewrite : r.autoRewrite && (a.host = e.headers[":authority"] ?? e.headers.host ?? ""), r.protocolRewrite && (a.protocol = r.protocolRewrite), n.headers.location = a.toString();
		}
	}
	function d(e, t, n, r) {
		let i = typeof r.cookieDomainRewrite == "string" ? { "*": r.cookieDomainRewrite } : r.cookieDomainRewrite, a = typeof r.cookiePathRewrite == "string" ? { "*": r.cookiePathRewrite } : r.cookiePathRewrite, s = r.preserveHeaderKeyCase, c = (e, n) => {
			n != null && (i && e.toLowerCase() === "set-cookie" && (n = o.rewriteCookieProperty(n, i, "domain")), a && e.toLowerCase() === "set-cookie" && (n = o.rewriteCookieProperty(n, a, "path")), t.setHeader(String(e).trim(), n));
		}, l;
		if (s && n.rawHeaders != null) {
			l = {};
			for (let e = 0; e < n.rawHeaders.length; e += 2) {
				let t = n.rawHeaders[e];
				l[t.toLowerCase()] = t;
			}
		}
		for (let t in n.headers) {
			let r = t;
			if (e.httpVersionMajor > 1 && (r === "connection" || r === "keep-alive")) continue;
			let i = n.headers[r];
			s && l && (r = l[r] ?? r), c(r, i);
		}
	}
	function f(e, t, n) {
		t.statusCode = n.statusCode, n.statusMessage && e.httpVersionMajor === 1 && (t.statusMessage = n.statusMessage);
	}
	e.OUTGOING_PASSES = {
		removeChunked: c,
		setConnection: l,
		setRedirectHostRewrite: u,
		writeHeaders: d,
		writeStatusCode: f
	};
})), ts = /* @__PURE__ */ Z(((e, t, n) => {
	var r = n && n.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), i = n && n.__setModuleDefault || (Object.create ? (function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	}) : function(e, t) {
		e.default = t;
	}), a = n && n.__importStar || (function() {
		var e = function(t) {
			return e = Object.getOwnPropertyNames || function(e) {
				var t = [];
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
				return t;
			}, e(t);
		};
		return function(t) {
			if (t && t.__esModule) return t;
			var n = {};
			if (t != null) for (var a = e(t), o = 0; o < a.length; o++) a[o] !== "default" && r(n, t, a[o]);
			return i(n, t), n;
		};
	})();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.WEB_PASSES = void 0, e.deleteLength = m, e.timeout = h, e.XHeaders = g, e.stream = _;
	let o = a(Q("node:http")), s = a(Q("node:https")), c = a(Qo()), l = a($o()), u = es(), d = Q("node:stream"), f = Object.values(u.OUTGOING_PASSES), p = {
		http: o,
		https: s
	};
	function m(e) {
		e.method !== "DELETE" && e.method !== "OPTIONS" || e.headers["content-length"] || (e.headers["content-length"] = "0", delete e.headers["transfer-encoding"]);
	}
	function h(e, t, n) {
		n.timeout && e.socket.setTimeout(n.timeout);
	}
	function g(e, t, n) {
		if (!n.xfwd) return;
		let r = l.hasEncryptedConnection(e), i = {
			for: e.connection.remoteAddress || e.socket.remoteAddress,
			port: l.getPort(e),
			proto: r ? "https" : "http"
		};
		for (let t of [
			"for",
			"port",
			"proto"
		]) e.headers["x-forwarded-" + t] = (e.headers["x-forwarded-" + t] || "") + (e.headers["x-forwarded-" + t] ? "," : "") + i[t];
		e.headers["x-forwarded-host"] = e.headers["x-forwarded-host"] || e.headers[":authority"] || e.headers.host || "";
	}
	function _(e, t, n, r, i, a) {
		if (i.emit("start", e, t, n.target || n.forward), n.fetch || n.fetchOptions || process.env.FORCE_FETCH_PATH === "true") return v(e, t, n, r, i, a);
		let o = n.followRedirects ? c : p, s = o.http, u = o.https;
		if (n.forward) {
			let r = n.forward.protocol === "https:" ? u : s, i = l.setupOutgoing(n.ssl || {}, n, e, "forward"), a = r.request(i), o = _(a, n.forward);
			if (e.on("error", o), a.on("error", o), (n.buffer || e).pipe(a), !n.target) return t.end();
		}
		let d = n.target.protocol === "https:" ? u : s, m = l.setupOutgoing(n.ssl || {}, n, e), h = d.request(m);
		h.on("socket", (r) => {
			i && !h.getHeader("expect") && i.emit("proxyReq", h, e, t, n, r);
		}), n.proxyTimeout && h.setTimeout(n.proxyTimeout, () => {
			h.destroy();
		}), t.on("close", () => {
			t.writableFinished || h.destroy();
		});
		let g = _(h, n.target);
		e.on("error", g), h.on("error", g);
		function _(n, r) {
			return (o) => {
				e.socket.destroyed && o.code === "ECONNRESET" ? (i.emit("econnreset", o, e, t, r), n.destroy()) : a ? a(o, e, t, r) : i.emit("error", o, e, t, r);
			};
		}
		(n.buffer || e).pipe(h), h.on("response", (r) => {
			if (i?.emit("proxyRes", r, e, t), !t.headersSent && !n.selfHandleResponse) for (let i of f) i(e, t, r, n);
			t.finished ? i?.emit("end", e, t, r) : (r.on("end", () => {
				i?.emit("end", e, t, r);
			}), n.selfHandleResponse || r.pipe(t));
		});
	}
	async function v(e, t, n, r, i, a) {
		let o = (n, r) => {
			let o = n;
			o.code === void 0 && o.cause?.code && (o.code = o.cause.code), a ? a(n, e, t, r) : i.emit("error", n, e, t, r);
		};
		e.on("error", (r) => {
			if (e.socket.destroyed && r.code === "ECONNRESET") {
				let a = n.target || n.forward;
				a && i.emit("econnreset", r, e, t, a);
			} else o(r);
		});
		let s = n.fetch || fetch, c = n.fetchOptions ?? {}, u = (t) => {
			let r = {
				method: t.method,
				...c.requestOptions
			}, i = new Headers(c.requestOptions?.headers);
			if (!c.requestOptions?.headers && t.headers) {
				for (let [e, n] of Object.entries(t.headers)) if (typeof e == "string") {
					if (Array.isArray(n)) for (let t of n) i.append(e, t);
					else n != null && i.append(e, n);
				}
			}
			return n.auth && i.set("authorization", `Basic ${Buffer.from(n.auth).toString("base64")}`), n.proxyTimeout && (r.signal = AbortSignal.timeout(n.proxyTimeout)), r.headers = i, n.buffer ? r.body = n.buffer : e.method !== "GET" && e.method !== "HEAD" && (r.body = e, r.duplex = "half"), r;
		};
		if (n.forward) {
			let r = l.setupOutgoing(n.ssl || {}, n, e, "forward"), i = u(r), a = new URL(r.url).origin + r.path;
			if (a.startsWith("ws") && (a = a.replace("ws", "http")), c.onBeforeRequest) try {
				await c.onBeforeRequest(i, e, t, n);
			} catch (e) {
				o(e, n.forward);
				return;
			}
			try {
				let r = await s(a, i);
				if (c.onAfterResponse) try {
					await c.onAfterResponse(r, e, t, n);
				} catch (e) {
					o(e, n.forward);
					return;
				}
			} catch (e) {
				o(e, n.forward);
			}
			if (!n.target) return t.end();
		}
		let p = l.setupOutgoing(n.ssl || {}, n, e), m = u(p), h = new URL(p.url).origin + p.path;
		if (h.startsWith("ws") && (h = h.replace("ws", "http")), c.onBeforeRequest) try {
			await c.onBeforeRequest(m, e, t, n);
		} catch (e) {
			o(e, n.target);
			return;
		}
		try {
			let r = await s(h, m);
			if (c.onAfterResponse) try {
				await c.onAfterResponse(r, e, t, n);
			} catch (e) {
				o(e, n.target);
				return;
			}
			let a = {
				statusCode: r.status,
				statusMessage: r.statusText,
				headers: Object.fromEntries(r.headers.entries()),
				rawHeaders: Object.entries(r.headers).flatMap(([e, t]) => Array.isArray(t) ? t.flatMap((t) => t == null ? [] : [e, t]) : t == null ? [] : [e, t])
			};
			if (i?.emit("proxyRes", a, e, t), !t.headersSent && !n.selfHandleResponse) for (let r of f) r(e, t, a, n);
			if (t.writableEnded) i?.emit("end", e, t, a);
			else {
				let s = r.body ? d.Readable.from(r.body) : null;
				s ? (s.on("error", (e) => {
					o(e, n.target);
				}), s.on("end", () => {
					i?.emit("end", e, t, a);
				}), n.selfHandleResponse ? s.resume() : s.pipe(t, { end: !0 })) : i?.emit("end", e, t, a);
			}
		} catch (e) {
			o(e, n.target);
		}
	}
	e.WEB_PASSES = {
		deleteLength: m,
		timeout: h,
		XHeaders: g,
		stream: _
	};
})), ns = /* @__PURE__ */ Z(((e, t, n) => {
	var r = n && n.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), i = n && n.__setModuleDefault || (Object.create ? (function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	}) : function(e, t) {
		e.default = t;
	}), a = n && n.__importStar || (function() {
		var e = function(t) {
			return e = Object.getOwnPropertyNames || function(e) {
				var t = [];
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
				return t;
			}, e(t);
		};
		return function(t) {
			if (t && t.__esModule) return t;
			var n = {};
			if (t != null) for (var a = e(t), o = 0; o < a.length; o++) a[o] !== "default" && r(n, t, a[o]);
			return i(n, t), n;
		};
	})(), o = n && n.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.WS_PASSES = void 0, e.numOpenSockets = _, e.checkMethodAndHeader = v, e.XHeaders = y, e.stream = b;
	let s = a(Q("node:http")), c = a(Q("node:https")), l = a($o()), u = es(), d = (0, o(($i(), ri(zi))).default)("http-proxy-3:ws-incoming"), f = Object.values(u.OUTGOING_PASSES);
	function p(e) {
		let t = /* @__PURE__ */ new Set();
		return ({ add: n, rm: r } = {}) => (n && (n.id ||= Math.random(), t.has(n.id) || t.add(n.id)), r && (r.id ||= Math.random(), t.has(r.id) && t.delete(r.id)), d("socket counter:", { [e]: t.size }, n ? "add" : r ? "rm" : ""), t.size);
	}
	let m = p("socket"), h = p("proxySocket");
	var g = class {
		constructor() {
			this.headers = {}, this.statusCode = 200, this.statusMessage = "";
		}
		setHeader(e, t) {
			return this.headers[e] = t, this;
		}
	};
	function _() {
		return m() + h();
	}
	function v(e, t) {
		if (d("websocket: checkMethodAndHeader"), e.method !== "GET" || !e.headers.upgrade || e.headers.upgrade.toLowerCase() !== "websocket") return t.destroy(), !0;
	}
	function y(e, t, n) {
		if (!n.xfwd) return;
		d("websocket: XHeaders");
		let r = {
			for: e.connection.remoteAddress || e.socket.remoteAddress,
			port: l.getPort(e),
			proto: l.hasEncryptedConnection(e) ? "wss" : "ws"
		};
		for (let t of [
			"for",
			"port",
			"proto"
		]) e.headers["x-forwarded-" + t] = (e.headers["x-forwarded-" + t] || "") + (e.headers["x-forwarded-" + t] ? "," : "") + r[t];
	}
	function b(e, t, n, r, i, a) {
		d("websocket: new stream");
		let o = [];
		m({ add: t });
		let u = () => {
			for (let e of o) e.end();
		};
		t.on("close", () => {
			m({ rm: t }), u();
		}), t.on("error", u);
		let p = (e, t) => Object.keys(t).reduce((e, n) => {
			let r = t[n];
			if (!Array.isArray(r)) return e.push(n + ": " + r), e;
			for (let t = 0; t < r.length; t++) e.push(n + ": " + r[t]);
			return e;
		}, [e]).join("\r\n") + "\r\n\r\n";
		l.setupSocket(t), r && r.length && t.unshift(r);
		let _ = l.isSSL.test(n.target.protocol) ? c : s, v = l.setupOutgoing(n.ssl || {}, n, e), y = _.request(v);
		i && i.emit("proxyReqWs", y, e, t, n, r), y.on("error", b), y.on("upgrade", (e, n, r) => {
			d("upgrade"), h({ add: n }), o.push(n), n.on("close", () => {
				h({ rm: n });
			}), n.on("error", b), n.on("end", () => {
				i.emit("close", e, n, r);
			}), n.on("close", () => {
				t.end();
			}), l.setupSocket(n), r && r.length && n.unshift(r), t.write(p("HTTP/1.1 101 Switching Protocols", e.headers)), n.pipe(t).pipe(n), i.emit("open", n);
		});
		function b(n) {
			a ? a(n, e, t) : i.emit("error", n, e, t), t.destroySoon();
		}
		y.on("response", (r) => {
			d("got non-ws HTTP response", {
				statusCode: r.statusCode,
				statusMessage: r.statusMessage
			});
			let i = new g();
			for (let t of f) t(e, i, r, n);
			let a = (e) => {
				t.write(e);
			};
			e.httpVersion === "1.1" && r.headers["content-length"] === void 0 && (i.headers["transfer-encoding"] = "chunked", a = (e) => {
				t.write(e.length.toString(16)), t.write("\r\n"), t.write(e), t.write("\r\n");
			});
			let o = p(`HTTP/${e.httpVersion} ${r.statusCode} ${r.statusMessage}`, i.headers);
			t.destroyed ? r.resume() : (t.write(o), r.on("data", (e) => {
				a(e);
			}), r.on("end", () => {
				a(""), t.destroySoon();
			}));
		}), y.end();
	}
	e.WS_PASSES = {
		checkMethodAndHeader: v,
		XHeaders: y,
		stream: b
	};
})), rs = /* @__PURE__ */ Z(((e, t, n) => {
	var r = n && n.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), i = n && n.__setModuleDefault || (Object.create ? (function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	}) : function(e, t) {
		e.default = t;
	}), a = n && n.__importStar || (function() {
		var e = function(t) {
			return e = Object.getOwnPropertyNames || function(e) {
				var t = [];
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
				return t;
			}, e(t);
		};
		return function(t) {
			if (t && t.__esModule) return t;
			var n = {};
			if (t != null) for (var a = e(t), o = 0; o < a.length; o++) a[o] !== "default" && r(n, t, a[o]);
			return i(n, t), n;
		};
	})(), o = n && n.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ProxyServer = void 0;
	let s = a(Q("node:http")), c = a(Q("node:http2")), l = ts(), u = ns(), d = Q("node:events"), f = o(($i(), ri(zi))), p = $o(), m = (0, f.default)("http-proxy-3");
	e.ProxyServer = class e extends d.EventEmitter {
		constructor(e = {}) {
			super(), this.createRightProxy = (e) => (m("createRightProxy", { type: e }), (t) => (...n) => {
				let r = n[0];
				m("proxy: ", {
					type: e,
					path: r.url
				});
				let i = n[1], a = e === "ws" ? this.wsPasses : this.webPasses;
				e == "ws" && i.on("error", (e) => {
					this.emit("error", e, r, i);
				});
				let o = n.length - 1, s, c;
				typeof n[o] == "function" && (c = n[o], o--);
				let l;
				!(n[o] instanceof Buffer) && n[o] !== i ? (l = {
					...t,
					...n[o]
				}, o--) : l = { ...t }, n[o] instanceof Buffer && (s = n[o]);
				for (let e of ["target", "forward"]) typeof l[e] == "string" && (l[e] = (0, p.toURL)(l[e]));
				if (!l.target && !l.forward) this.emit("error", /* @__PURE__ */ Error("Must set target or forward"), r, i);
				else for (let e of a) if (e(r, i, l, s, this, c)) break;
			}), this.onError = (e) => {
				if (this.listeners("error").length === 1) throw e;
			}, this.listen = (e, t) => {
				m("listen", {
					port: e,
					hostname: t
				});
				let n = (e, t) => {
					this.web(e, t);
				};
				return this._server = this.options.ssl ? c.createSecureServer({
					...this.options.ssl,
					allowHTTP1: !0
				}, n) : s.createServer(n), this.options.ws && this._server.on("upgrade", (e, t, n) => {
					this.ws(e, t, n);
				}), this._server.listen(e, t), this;
			}, this.address = () => this._server?.address(), this.close = (e) => {
				this._server == null ? e?.() : this._server.close((t) => {
					this._server = null, e?.(t);
				});
			}, this.before = (e, t, n) => {
				if (e !== "ws" && e !== "web") throw Error("type must be `web` or `ws`");
				let r = e === "ws" ? this.wsPasses : this.webPasses, i = !1;
				if (r.forEach((e, n) => {
					e.name === t && (i = n);
				}), i === !1) throw Error("No such pass");
				r.splice(i, 0, n);
			}, this.after = (e, t, n) => {
				if (e !== "ws" && e !== "web") throw Error("type must be `web` or `ws`");
				let r = e === "ws" ? this.wsPasses : this.webPasses, i = !1;
				if (r.forEach((e, n) => {
					e.name === t && (i = n);
				}), i === !1) throw Error("No such pass");
				r.splice(i++, 0, n);
			}, m("creating a ProxyServer", e), e.prependPath = e.prependPath !== !1, this.options = e, this.web = this.createRightProxy("web")(e), this.ws = this.createRightProxy("ws")(e), this.webPasses = Object.values(l.WEB_PASSES), this.wsPasses = Object.values(u.WS_PASSES), this.on("error", this.onError);
		}
		static createProxyServer(t) {
			return new e(t);
		}
		static createServer(t) {
			return new e(t);
		}
		static createProxy(t) {
			return new e(t);
		}
	};
}));
(/* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.numOpenSockets = e.ProxyServer = void 0, e.createProxyServer = r;
	let t = rs();
	Object.defineProperty(e, "ProxyServer", {
		enumerable: !0,
		get: function() {
			return t.ProxyServer;
		}
	});
	var n = ns();
	Object.defineProperty(e, "numOpenSockets", {
		enumerable: !0,
		get: function() {
			return n.numOpenSockets;
		}
	});
	function r(e = {}) {
		return new t.ProxyServer(e);
	}
})))(), $("vite:proxy"), $("vite:time"), $("vite:load"), $("vite:transform"), $("vite:cache"), $("vite:cache"), Object.freeze({});
var is = /* @__PURE__ */ Z(((e, t) => {
	let n = [
		"nodebuffer",
		"arraybuffer",
		"fragments"
	], r = typeof Blob < "u";
	r && n.push("blob"), t.exports = {
		BINARY_TYPES: n,
		CLOSE_TIMEOUT: 3e4,
		EMPTY_BUFFER: Buffer.alloc(0),
		GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
		hasBlob: r,
		kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
		kListener: Symbol("kListener"),
		kStatusCode: Symbol("status-code"),
		kWebSocket: Symbol("websocket"),
		NOOP: () => {}
	};
})), as = /* @__PURE__ */ Z(((e, t) => {
	let { EMPTY_BUFFER: n } = is(), r = Buffer[Symbol.species];
	function i(e, t) {
		if (e.length === 0) return n;
		if (e.length === 1) return e[0];
		let i = Buffer.allocUnsafe(t), a = 0;
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			i.set(n, a), a += n.length;
		}
		return a < t ? new r(i.buffer, i.byteOffset, a) : i;
	}
	function a(e, t, n, r, i) {
		for (let a = 0; a < i; a++) n[r + a] = e[a] ^ t[a & 3];
	}
	function o(e, t) {
		for (let n = 0; n < e.length; n++) e[n] ^= t[n & 3];
	}
	function s(e) {
		return e.length === e.buffer.byteLength ? e.buffer : e.buffer.slice(e.byteOffset, e.byteOffset + e.length);
	}
	function c(e) {
		if (c.readOnly = !0, Buffer.isBuffer(e)) return e;
		let t;
		return e instanceof ArrayBuffer ? t = new r(e) : ArrayBuffer.isView(e) ? t = new r(e.buffer, e.byteOffset, e.byteLength) : (t = Buffer.from(e), c.readOnly = !1), t;
	}
	/* istanbul ignore else  */
	if (t.exports = {
		concat: i,
		mask: a,
		toArrayBuffer: s,
		toBuffer: c,
		unmask: o
	}, !process.env.WS_NO_BUFFER_UTIL) try {
		let e = Q("bufferutil");
		t.exports.mask = function(t, n, r, i, o) {
			o < 48 ? a(t, n, r, i, o) : e.mask(t, n, r, i, o);
		}, t.exports.unmask = function(t, n) {
			t.length < 32 ? o(t, n) : e.unmask(t, n);
		};
	} catch {}
})), os = /* @__PURE__ */ Z(((e, t) => {
	let n = Symbol("kDone"), r = Symbol("kRun");
	t.exports = class {
		constructor(e) {
			this[n] = () => {
				this.pending--, this[r]();
			}, this.concurrency = e || Infinity, this.jobs = [], this.pending = 0;
		}
		add(e) {
			this.jobs.push(e), this[r]();
		}
		[r]() {
			if (this.pending !== this.concurrency && this.jobs.length) {
				let e = this.jobs.shift();
				this.pending++, e(this[n]);
			}
		}
	};
})), ss = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("zlib"), r = as(), i = os(), { kStatusCode: a } = is(), o = Buffer[Symbol.species], s = Buffer.from([
		0,
		0,
		255,
		255
	]), c = Symbol("permessage-deflate"), l = Symbol("total-length"), u = Symbol("callback"), d = Symbol("buffers"), f = Symbol("error"), p;
	t.exports = class {
		constructor(e) {
			if (this._options = e || {}, this._threshold = this._options.threshold === void 0 ? 1024 : this._options.threshold, this._maxPayload = this._options.maxPayload | 0, this._isServer = !!this._options.isServer, this._deflate = null, this._inflate = null, this.params = null, !p) {
				let e = this._options.concurrencyLimit === void 0 ? 10 : this._options.concurrencyLimit;
				p = new i(e);
			}
		}
		static get extensionName() {
			return "permessage-deflate";
		}
		offer() {
			let e = {};
			return this._options.serverNoContextTakeover && (e.server_no_context_takeover = !0), this._options.clientNoContextTakeover && (e.client_no_context_takeover = !0), this._options.serverMaxWindowBits && (e.server_max_window_bits = this._options.serverMaxWindowBits), this._options.clientMaxWindowBits ? e.client_max_window_bits = this._options.clientMaxWindowBits : this._options.clientMaxWindowBits ?? (e.client_max_window_bits = !0), e;
		}
		accept(e) {
			return e = this.normalizeParams(e), this.params = this._isServer ? this.acceptAsServer(e) : this.acceptAsClient(e), this.params;
		}
		cleanup() {
			if (this._inflate &&= (this._inflate.close(), null), this._deflate) {
				let e = this._deflate[u];
				this._deflate.close(), this._deflate = null, e && e(/* @__PURE__ */ Error("The deflate stream was closed while data was being processed"));
			}
		}
		acceptAsServer(e) {
			let t = this._options, n = e.find((e) => !(t.serverNoContextTakeover === !1 && e.server_no_context_takeover || e.server_max_window_bits && (t.serverMaxWindowBits === !1 || typeof t.serverMaxWindowBits == "number" && t.serverMaxWindowBits > e.server_max_window_bits) || typeof t.clientMaxWindowBits == "number" && (typeof e.client_max_window_bits == "number" ? t.clientMaxWindowBits > e.client_max_window_bits : !e.client_max_window_bits)));
			if (!n) throw Error("None of the extension offers can be accepted");
			return t.serverNoContextTakeover && (n.server_no_context_takeover = !0), t.clientNoContextTakeover && (n.client_no_context_takeover = !0), typeof t.serverMaxWindowBits == "number" && (n.server_max_window_bits = t.serverMaxWindowBits), typeof t.clientMaxWindowBits == "number" ? n.client_max_window_bits = t.clientMaxWindowBits : (n.client_max_window_bits === !0 || t.clientMaxWindowBits === !1) && delete n.client_max_window_bits, n;
		}
		acceptAsClient(e) {
			let t = e[0];
			if (this._options.clientNoContextTakeover === !1 && t.client_no_context_takeover) throw Error("Unexpected parameter \"client_no_context_takeover\"");
			if (!t.client_max_window_bits) typeof this._options.clientMaxWindowBits == "number" && (t.client_max_window_bits = this._options.clientMaxWindowBits);
			else if (this._options.clientMaxWindowBits === !1 || typeof this._options.clientMaxWindowBits == "number" && t.client_max_window_bits > this._options.clientMaxWindowBits) throw Error("Unexpected or invalid parameter \"client_max_window_bits\"");
			return t;
		}
		normalizeParams(e) {
			return e.forEach((e) => {
				Object.keys(e).forEach((t) => {
					let n = e[t];
					if (n.length > 1) throw Error(`Parameter "${t}" must have only a single value`);
					if (n = n[0], t === "client_max_window_bits") {
						if (n !== !0) {
							let e = +n;
							if (!Number.isInteger(e) || e < 8 || e > 15) throw TypeError(`Invalid value for parameter "${t}": ${n}`);
							n = e;
						} else if (!this._isServer) throw TypeError(`Invalid value for parameter "${t}": ${n}`);
					} else if (t === "server_max_window_bits") {
						let e = +n;
						if (!Number.isInteger(e) || e < 8 || e > 15) throw TypeError(`Invalid value for parameter "${t}": ${n}`);
						n = e;
					} else if (t === "client_no_context_takeover" || t === "server_no_context_takeover") {
						if (n !== !0) throw TypeError(`Invalid value for parameter "${t}": ${n}`);
					} else throw Error(`Unknown parameter "${t}"`);
					e[t] = n;
				});
			}), e;
		}
		decompress(e, t, n) {
			p.add((r) => {
				this._decompress(e, t, (e, t) => {
					r(), n(e, t);
				});
			});
		}
		compress(e, t, n) {
			p.add((r) => {
				this._compress(e, t, (e, t) => {
					r(), n(e, t);
				});
			});
		}
		_decompress(e, t, i) {
			let a = this._isServer ? "client" : "server";
			if (!this._inflate) {
				let e = `${a}_max_window_bits`, t = typeof this.params[e] == "number" ? this.params[e] : n.Z_DEFAULT_WINDOWBITS;
				this._inflate = n.createInflateRaw({
					...this._options.zlibInflateOptions,
					windowBits: t
				}), this._inflate[c] = this, this._inflate[l] = 0, this._inflate[d] = [], this._inflate.on("error", g), this._inflate.on("data", h);
			}
			this._inflate[u] = i, this._inflate.write(e), t && this._inflate.write(s), this._inflate.flush(() => {
				let e = this._inflate[f];
				if (e) {
					this._inflate.close(), this._inflate = null, i(e);
					return;
				}
				let n = r.concat(this._inflate[d], this._inflate[l]);
				this._inflate._readableState.endEmitted ? (this._inflate.close(), this._inflate = null) : (this._inflate[l] = 0, this._inflate[d] = [], t && this.params[`${a}_no_context_takeover`] && this._inflate.reset()), i(null, n);
			});
		}
		_compress(e, t, i) {
			let a = this._isServer ? "server" : "client";
			if (!this._deflate) {
				let e = `${a}_max_window_bits`, t = typeof this.params[e] == "number" ? this.params[e] : n.Z_DEFAULT_WINDOWBITS;
				this._deflate = n.createDeflateRaw({
					...this._options.zlibDeflateOptions,
					windowBits: t
				}), this._deflate[l] = 0, this._deflate[d] = [], this._deflate.on("data", m);
			}
			this._deflate[u] = i, this._deflate.write(e), this._deflate.flush(n.Z_SYNC_FLUSH, () => {
				if (!this._deflate) return;
				let e = r.concat(this._deflate[d], this._deflate[l]);
				t && (e = new o(e.buffer, e.byteOffset, e.length - 4)), this._deflate[u] = null, this._deflate[l] = 0, this._deflate[d] = [], t && this.params[`${a}_no_context_takeover`] && this._deflate.reset(), i(null, e);
			});
		}
	};
	function m(e) {
		this[d].push(e), this[l] += e.length;
	}
	function h(e) {
		this[l] += e.length, this[c]._maxPayload < 1 || this[l] <= this[c]._maxPayload ? this[d].push(e) : (this[f] = /* @__PURE__ */ RangeError("Max payload size exceeded"), this[f].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[f][a] = 1009, this.removeListener("data", h), this.reset());
	}
	function g(e) {
		this[c]._inflate = null, this[f] ? this[u](this[f]) : (e[a] = 1007, this[u](e));
	}
})), cs = /* @__PURE__ */ Z(((e, t) => {
	let { isUtf8: n } = Q("buffer"), { hasBlob: r } = is(), i = [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		0,
		1,
		0
	];
	function a(e) {
		return e >= 1e3 && e <= 1014 && e !== 1004 && e !== 1005 && e !== 1006 || e >= 3e3 && e <= 4999;
	}
	function o(e) {
		let t = e.length, n = 0;
		for (; n < t;) if (!(e[n] & 128)) n++;
		else if ((e[n] & 224) == 192) {
			if (n + 1 === t || (e[n + 1] & 192) != 128 || (e[n] & 254) == 192) return !1;
			n += 2;
		} else if ((e[n] & 240) == 224) {
			if (n + 2 >= t || (e[n + 1] & 192) != 128 || (e[n + 2] & 192) != 128 || e[n] === 224 && (e[n + 1] & 224) == 128 || e[n] === 237 && (e[n + 1] & 224) == 160) return !1;
			n += 3;
		} else if ((e[n] & 248) == 240) {
			if (n + 3 >= t || (e[n + 1] & 192) != 128 || (e[n + 2] & 192) != 128 || (e[n + 3] & 192) != 128 || e[n] === 240 && (e[n + 1] & 240) == 128 || e[n] === 244 && e[n + 1] > 143 || e[n] > 244) return !1;
			n += 4;
		} else return !1;
		return !0;
	}
	function s(e) {
		return r && typeof e == "object" && typeof e.arrayBuffer == "function" && typeof e.type == "string" && typeof e.stream == "function" && (e[Symbol.toStringTag] === "Blob" || e[Symbol.toStringTag] === "File");
	}
	if (t.exports = {
		isBlob: s,
		isValidStatusCode: a,
		isValidUTF8: o,
		tokenChars: i
	}, n) t.exports.isValidUTF8 = function(e) {
		return e.length < 24 ? o(e) : n(e);
	};
	else if (!process.env.WS_NO_UTF_8_VALIDATE) try {
		let e = Q("utf-8-validate");
		t.exports.isValidUTF8 = function(t) {
			return t.length < 32 ? o(t) : e(t);
		};
	} catch {}
})), ls = /* @__PURE__ */ Z(((e, t) => {
	let { Writable: n } = Q("stream"), r = ss(), { BINARY_TYPES: i, EMPTY_BUFFER: a, kStatusCode: o, kWebSocket: s } = is(), { concat: c, toArrayBuffer: l, unmask: u } = as(), { isValidStatusCode: d, isValidUTF8: f } = cs(), p = Buffer[Symbol.species];
	t.exports = class extends n {
		constructor(e = {}) {
			super(), this._allowSynchronousEvents = e.allowSynchronousEvents === void 0 || e.allowSynchronousEvents, this._binaryType = e.binaryType || i[0], this._extensions = e.extensions || {}, this._isServer = !!e.isServer, this._maxBufferedChunks = e.maxBufferedChunks | 0, this._maxFragments = e.maxFragments | 0, this._maxPayload = e.maxPayload | 0, this._skipUTF8Validation = !!e.skipUTF8Validation, this[s] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = !1, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = !1, this._fin = !1, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._numFragments = 0, this._fragments = [], this._errored = !1, this._loop = !1, this._state = 0;
		}
		_write(e, t, n) {
			if (this._opcode === 8 && this._state == 0) return n();
			this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks ? n(this.createError(RangeError, "Too many buffered chunks", !1, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS")) : (this._bufferedBytes += e.length, this._buffers.push(e), this.startLoop(n));
		}
		consume(e) {
			if (this._bufferedBytes -= e, e === this._buffers[0].length) return this._buffers.shift();
			if (e < this._buffers[0].length) {
				let t = this._buffers[0];
				return this._buffers[0] = new p(t.buffer, t.byteOffset + e, t.length - e), new p(t.buffer, t.byteOffset, e);
			}
			let t = Buffer.allocUnsafe(e);
			do {
				let n = this._buffers[0], r = t.length - e;
				e >= n.length ? t.set(this._buffers.shift(), r) : (t.set(new Uint8Array(n.buffer, n.byteOffset, e), r), this._buffers[0] = new p(n.buffer, n.byteOffset + e, n.length - e)), e -= n.length;
			} while (e > 0);
			return t;
		}
		startLoop(e) {
			this._loop = !0;
			do
				switch (this._state) {
					case 0:
						this.getInfo(e);
						break;
					case 1:
						this.getPayloadLength16(e);
						break;
					case 2:
						this.getPayloadLength64(e);
						break;
					case 3:
						this.getMask();
						break;
					case 4:
						this.getData(e);
						break;
					case 5:
					case 6:
						this._loop = !1;
						return;
				}
			while (this._loop);
			this._errored || e();
		}
		getInfo(e) {
			if (this._bufferedBytes < 2) {
				this._loop = !1;
				return;
			}
			let t = this.consume(2);
			if (t[0] & 48) {
				e(this.createError(RangeError, "RSV2 and RSV3 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_2_3"));
				return;
			}
			let n = (t[0] & 64) == 64;
			if (n && !this._extensions[r.extensionName]) e(this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
			else {
				if (this._fin = (t[0] & 128) == 128, this._opcode = t[0] & 15, this._payloadLength = t[1] & 127, this._opcode === 0) {
					if (n) {
						e(this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
						return;
					}
					if (!this._fragmented) {
						e(this.createError(RangeError, "invalid opcode 0", !0, 1002, "WS_ERR_INVALID_OPCODE"));
						return;
					}
					this._opcode = this._fragmented;
				} else if (this._opcode === 1 || this._opcode === 2) {
					if (this._fragmented) {
						e(this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE"));
						return;
					}
					this._compressed = n;
				} else if (this._opcode > 7 && this._opcode < 11) {
					if (!this._fin) {
						e(this.createError(RangeError, "FIN must be set", !0, 1002, "WS_ERR_EXPECTED_FIN"));
						return;
					}
					if (n) {
						e(this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
						return;
					}
					if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
						e(this.createError(RangeError, `invalid payload length ${this._payloadLength}`, !0, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"));
						return;
					}
				} else {
					e(this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE"));
					return;
				}
				if (!this._fin && !this._fragmented && (this._fragmented = this._opcode), this._masked = (t[1] & 128) == 128, this._isServer) {
					if (!this._masked) {
						e(this.createError(RangeError, "MASK must be set", !0, 1002, "WS_ERR_EXPECTED_MASK"));
						return;
					}
				} else if (this._masked) {
					e(this.createError(RangeError, "MASK must be clear", !0, 1002, "WS_ERR_UNEXPECTED_MASK"));
					return;
				}
				this._payloadLength === 126 ? this._state = 1 : this._payloadLength === 127 ? this._state = 2 : this.haveLength(e);
			}
		}
		getPayloadLength16(e) {
			this._bufferedBytes < 2 ? this._loop = !1 : (this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(e));
		}
		getPayloadLength64(e) {
			if (this._bufferedBytes < 8) {
				this._loop = !1;
				return;
			}
			let t = this.consume(8), n = t.readUInt32BE(0);
			n > 2 ** 21 - 1 ? e(this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", !1, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH")) : (this._payloadLength = n * 2 ** 32 + t.readUInt32BE(4), this.haveLength(e));
		}
		haveLength(e) {
			this._payloadLength && this._opcode < 8 && (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) ? e(this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH")) : this._state = this._masked ? 3 : 4;
		}
		getMask() {
			this._bufferedBytes < 4 ? this._loop = !1 : (this._mask = this.consume(4), this._state = 4);
		}
		getData(e) {
			let t = a;
			if (this._payloadLength) {
				if (this._bufferedBytes < this._payloadLength) {
					this._loop = !1;
					return;
				}
				t = this.consume(this._payloadLength), this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0 && u(t, this._mask);
			}
			this._opcode > 7 ? this.controlMessage(t, e) : this._maxFragments > 0 && ++this._numFragments > this._maxFragments ? e(this.createError(RangeError, "Too many message fragments", !1, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS")) : this._compressed ? (this._state = 5, this.decompress(t, e)) : (t.length && (this._messageLength = this._totalPayloadLength, this._fragments.push(t)), this.dataMessage(e));
		}
		decompress(e, t) {
			this._extensions[r.extensionName].decompress(e, this._fin, (e, n) => {
				if (e) return t(e);
				if (n.length) {
					if (this._messageLength += n.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
						t(this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"));
						return;
					}
					this._fragments.push(n);
				}
				this.dataMessage(t), this._state === 0 && this.startLoop(t);
			});
		}
		dataMessage(e) {
			if (!this._fin) {
				this._state = 0;
				return;
			}
			let t = this._messageLength, n = this._fragments;
			if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._numFragments = 0, this._fragments = [], this._opcode === 2) {
				let r;
				r = this._binaryType === "nodebuffer" ? c(n, t) : this._binaryType === "arraybuffer" ? l(c(n, t)) : this._binaryType === "blob" ? new Blob(n) : n, this._allowSynchronousEvents ? (this.emit("message", r, !0), this._state = 0) : (this._state = 6, setImmediate(() => {
					this.emit("message", r, !0), this._state = 0, this.startLoop(e);
				}));
			} else {
				let r = c(n, t);
				if (!this._skipUTF8Validation && !f(r)) {
					e(this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8"));
					return;
				}
				this._state === 5 || this._allowSynchronousEvents ? (this.emit("message", r, !1), this._state = 0) : (this._state = 6, setImmediate(() => {
					this.emit("message", r, !1), this._state = 0, this.startLoop(e);
				}));
			}
		}
		controlMessage(e, t) {
			if (this._opcode === 8) {
				if (e.length === 0) this._loop = !1, this.emit("conclude", 1005, a), this.end();
				else {
					let n = e.readUInt16BE(0);
					if (!d(n)) {
						t(this.createError(RangeError, `invalid status code ${n}`, !0, 1002, "WS_ERR_INVALID_CLOSE_CODE"));
						return;
					}
					let r = new p(e.buffer, e.byteOffset + 2, e.length - 2);
					if (!this._skipUTF8Validation && !f(r)) {
						t(this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8"));
						return;
					}
					this._loop = !1, this.emit("conclude", n, r), this.end();
				}
				this._state = 0;
			} else this._allowSynchronousEvents ? (this.emit(this._opcode === 9 ? "ping" : "pong", e), this._state = 0) : (this._state = 6, setImmediate(() => {
				this.emit(this._opcode === 9 ? "ping" : "pong", e), this._state = 0, this.startLoop(t);
			}));
		}
		createError(e, t, n, r, i) {
			this._loop = !1, this._errored = !0;
			let a = new e(n ? `Invalid WebSocket frame: ${t}` : t);
			return Error.captureStackTrace(a, this.createError), a.code = i, a[o] = r, a;
		}
	};
})), us = /* @__PURE__ */ Z(((e, t) => {
	let { Duplex: n } = Q("stream"), { randomFillSync: r } = Q("crypto"), { types: { isUint8Array: i } } = Q("util"), a = ss(), { EMPTY_BUFFER: o, kWebSocket: s, NOOP: c } = is(), { isBlob: l, isValidStatusCode: u } = cs(), { mask: d, toBuffer: f } = as(), p = Symbol("kByteLength"), m = Buffer.alloc(4), h = 8192, g, _ = h;
	t.exports = class e {
		constructor(e, t, n) {
			this._extensions = t || {}, n && (this._generateMask = n, this._maskBuffer = Buffer.alloc(4)), this._socket = e, this._firstFragment = !0, this._compress = !1, this._bufferedBytes = 0, this._queue = [], this._state = 0, this.onerror = c, this[s] = void 0;
		}
		static frame(e, t) {
			let n, i = !1, a = 2, o = !1;
			t.mask && (n = t.maskBuffer || m, t.generateMask ? t.generateMask(n) : (_ === h && (g === void 0 && (g = Buffer.alloc(h)), r(g, 0, h), _ = 0), n[0] = g[_++], n[1] = g[_++], n[2] = g[_++], n[3] = g[_++]), o = (n[0] | n[1] | n[2] | n[3]) === 0, a = 6);
			let s;
			typeof e == "string" ? (!t.mask || o) && t[p] !== void 0 ? s = t[p] : (e = Buffer.from(e), s = e.length) : (s = e.length, i = t.mask && t.readOnly && !o);
			let c = s;
			s >= 65536 ? (a += 8, c = 127) : s > 125 && (a += 2, c = 126);
			let l = Buffer.allocUnsafe(i ? s + a : a);
			return l[0] = t.fin ? t.opcode | 128 : t.opcode, t.rsv1 && (l[0] |= 64), l[1] = c, c === 126 ? l.writeUInt16BE(s, 2) : c === 127 && (l[2] = l[3] = 0, l.writeUIntBE(s, 4, 6)), !t.mask || (l[1] |= 128, l[a - 4] = n[0], l[a - 3] = n[1], l[a - 2] = n[2], l[a - 1] = n[3], o) ? [l, e] : i ? (d(e, n, l, a, s), [l]) : (d(e, n, e, 0, s), [l, e]);
		}
		close(t, n, r, a) {
			let s;
			if (t === void 0) s = o;
			else if (typeof t != "number" || !u(t)) throw TypeError("First argument must be a valid error code number");
			else if (n === void 0 || !n.length) s = Buffer.allocUnsafe(2), s.writeUInt16BE(t, 0);
			else {
				let e = Buffer.byteLength(n);
				if (e > 123) throw RangeError("The message must not be greater than 123 bytes");
				if (s = Buffer.allocUnsafe(2 + e), s.writeUInt16BE(t, 0), typeof n == "string") s.write(n, 2);
				else if (i(n)) s.set(n, 2);
				else throw TypeError("Second argument must be a string or a Uint8Array");
			}
			let c = {
				[p]: s.length,
				fin: !0,
				generateMask: this._generateMask,
				mask: r,
				maskBuffer: this._maskBuffer,
				opcode: 8,
				readOnly: !1,
				rsv1: !1
			};
			this._state === 0 ? this.sendFrame(e.frame(s, c), a) : this.enqueue([
				this.dispatch,
				s,
				!1,
				c,
				a
			]);
		}
		ping(t, n, r) {
			let i, a;
			if (typeof t == "string" ? (i = Buffer.byteLength(t), a = !1) : l(t) ? (i = t.size, a = !1) : (t = f(t), i = t.length, a = f.readOnly), i > 125) throw RangeError("The data size must not be greater than 125 bytes");
			let o = {
				[p]: i,
				fin: !0,
				generateMask: this._generateMask,
				mask: n,
				maskBuffer: this._maskBuffer,
				opcode: 9,
				readOnly: a,
				rsv1: !1
			};
			l(t) ? this._state === 0 ? this.getBlobData(t, !1, o, r) : this.enqueue([
				this.getBlobData,
				t,
				!1,
				o,
				r
			]) : this._state === 0 ? this.sendFrame(e.frame(t, o), r) : this.enqueue([
				this.dispatch,
				t,
				!1,
				o,
				r
			]);
		}
		pong(t, n, r) {
			let i, a;
			if (typeof t == "string" ? (i = Buffer.byteLength(t), a = !1) : l(t) ? (i = t.size, a = !1) : (t = f(t), i = t.length, a = f.readOnly), i > 125) throw RangeError("The data size must not be greater than 125 bytes");
			let o = {
				[p]: i,
				fin: !0,
				generateMask: this._generateMask,
				mask: n,
				maskBuffer: this._maskBuffer,
				opcode: 10,
				readOnly: a,
				rsv1: !1
			};
			l(t) ? this._state === 0 ? this.getBlobData(t, !1, o, r) : this.enqueue([
				this.getBlobData,
				t,
				!1,
				o,
				r
			]) : this._state === 0 ? this.sendFrame(e.frame(t, o), r) : this.enqueue([
				this.dispatch,
				t,
				!1,
				o,
				r
			]);
		}
		send(e, t, n) {
			let r = this._extensions[a.extensionName], i = t.binary ? 2 : 1, o = t.compress, s, c;
			typeof e == "string" ? (s = Buffer.byteLength(e), c = !1) : l(e) ? (s = e.size, c = !1) : (e = f(e), s = e.length, c = f.readOnly), this._firstFragment ? (this._firstFragment = !1, o && r && r.params[r._isServer ? "server_no_context_takeover" : "client_no_context_takeover"] && (o = s >= r._threshold), this._compress = o) : (o = !1, i = 0), t.fin && (this._firstFragment = !0);
			let u = {
				[p]: s,
				fin: t.fin,
				generateMask: this._generateMask,
				mask: t.mask,
				maskBuffer: this._maskBuffer,
				opcode: i,
				readOnly: c,
				rsv1: o
			};
			l(e) ? this._state === 0 ? this.getBlobData(e, this._compress, u, n) : this.enqueue([
				this.getBlobData,
				e,
				this._compress,
				u,
				n
			]) : this._state === 0 ? this.dispatch(e, this._compress, u, n) : this.enqueue([
				this.dispatch,
				e,
				this._compress,
				u,
				n
			]);
		}
		getBlobData(t, n, r, i) {
			this._bufferedBytes += r[p], this._state = 2, t.arrayBuffer().then((t) => {
				if (this._socket.destroyed) {
					let e = /* @__PURE__ */ Error("The socket was closed while the blob was being read");
					process.nextTick(v, this, e, i);
					return;
				}
				this._bufferedBytes -= r[p];
				let a = f(t);
				n ? this.dispatch(a, n, r, i) : (this._state = 0, this.sendFrame(e.frame(a, r), i), this.dequeue());
			}).catch((e) => {
				process.nextTick(y, this, e, i);
			});
		}
		dispatch(t, n, r, i) {
			if (!n) {
				this.sendFrame(e.frame(t, r), i);
				return;
			}
			let o = this._extensions[a.extensionName];
			this._bufferedBytes += r[p], this._state = 1, o.compress(t, r.fin, (t, n) => {
				if (this._socket.destroyed) {
					let e = /* @__PURE__ */ Error("The socket was closed while data was being compressed");
					v(this, e, i);
				} else this._bufferedBytes -= r[p], this._state = 0, r.readOnly = !1, this.sendFrame(e.frame(n, r), i), this.dequeue();
			});
		}
		dequeue() {
			for (; this._state === 0 && this._queue.length;) {
				let e = this._queue.shift();
				this._bufferedBytes -= e[3][p], Reflect.apply(e[0], this, e.slice(1));
			}
		}
		enqueue(e) {
			this._bufferedBytes += e[3][p], this._queue.push(e);
		}
		sendFrame(e, t) {
			e.length === 2 ? (this._socket.cork(), this._socket.write(e[0]), this._socket.write(e[1], t), this._socket.uncork()) : this._socket.write(e[0], t);
		}
	};
	function v(e, t, n) {
		typeof n == "function" && n(t);
		for (let n = 0; n < e._queue.length; n++) {
			let r = e._queue[n], i = r[r.length - 1];
			typeof i == "function" && i(t);
		}
	}
	function y(e, t, n) {
		v(e, t, n), e.onerror(t);
	}
})), ds = /* @__PURE__ */ Z(((e, t) => {
	let { kForOnEventAttribute: n, kListener: r } = is(), i = Symbol("kCode"), a = Symbol("kData"), o = Symbol("kError"), s = Symbol("kMessage"), c = Symbol("kReason"), l = Symbol("kTarget"), u = Symbol("kType"), d = Symbol("kWasClean");
	var f = class {
		constructor(e) {
			this[l] = null, this[u] = e;
		}
		get target() {
			return this[l];
		}
		get type() {
			return this[u];
		}
	};
	Object.defineProperty(f.prototype, "target", { enumerable: !0 }), Object.defineProperty(f.prototype, "type", { enumerable: !0 });
	var p = class extends f {
		constructor(e, t = {}) {
			super(e), this[i] = t.code === void 0 ? 0 : t.code, this[c] = t.reason === void 0 ? "" : t.reason, this[d] = t.wasClean !== void 0 && t.wasClean;
		}
		get code() {
			return this[i];
		}
		get reason() {
			return this[c];
		}
		get wasClean() {
			return this[d];
		}
	};
	Object.defineProperty(p.prototype, "code", { enumerable: !0 }), Object.defineProperty(p.prototype, "reason", { enumerable: !0 }), Object.defineProperty(p.prototype, "wasClean", { enumerable: !0 });
	var m = class extends f {
		constructor(e, t = {}) {
			super(e), this[o] = t.error === void 0 ? null : t.error, this[s] = t.message === void 0 ? "" : t.message;
		}
		get error() {
			return this[o];
		}
		get message() {
			return this[s];
		}
	};
	Object.defineProperty(m.prototype, "error", { enumerable: !0 }), Object.defineProperty(m.prototype, "message", { enumerable: !0 });
	var h = class extends f {
		constructor(e, t = {}) {
			super(e), this[a] = t.data === void 0 ? null : t.data;
		}
		get data() {
			return this[a];
		}
	};
	Object.defineProperty(h.prototype, "data", { enumerable: !0 }), t.exports = {
		CloseEvent: p,
		ErrorEvent: m,
		Event: f,
		EventTarget: {
			addEventListener(e, t, i = {}) {
				for (let a of this.listeners(e)) if (!i[n] && a[r] === t && !a[n]) return;
				let a;
				if (e === "message") a = function(e, n) {
					let r = new h("message", { data: n ? e : e.toString() });
					r[l] = this, g(t, this, r);
				};
				else if (e === "close") a = function(e, n) {
					let r = new p("close", {
						code: e,
						reason: n.toString(),
						wasClean: this._closeFrameReceived && this._closeFrameSent
					});
					r[l] = this, g(t, this, r);
				};
				else if (e === "error") a = function(e) {
					let n = new m("error", {
						error: e,
						message: e.message
					});
					n[l] = this, g(t, this, n);
				};
				else if (e === "open") a = function() {
					let e = new f("open");
					e[l] = this, g(t, this, e);
				};
				else return;
				a[n] = !!i[n], a[r] = t, i.once ? this.once(e, a) : this.on(e, a);
			},
			removeEventListener(e, t) {
				for (let i of this.listeners(e)) if (i[r] === t && !i[n]) {
					this.removeListener(e, i);
					break;
				}
			}
		},
		MessageEvent: h
	};
	function g(e, t, n) {
		typeof e == "object" && e.handleEvent ? e.handleEvent.call(e, n) : e.call(t, n);
	}
})), fs = /* @__PURE__ */ Z(((e, t) => {
	let { tokenChars: n } = cs();
	function r(e, t, n) {
		e[t] === void 0 ? e[t] = [n] : e[t].push(n);
	}
	function i(e) {
		let t = Object.create(null), i = Object.create(null), a = !1, o = !1, s = !1, c, l, u = -1, d = -1, f = -1, p = 0;
		for (; p < e.length; p++) if (d = e.charCodeAt(p), c === void 0) {
			if (f === -1 && n[d] === 1) u === -1 && (u = p);
			else if (p !== 0 && (d === 32 || d === 9)) f === -1 && u !== -1 && (f = p);
			else if (d === 59 || d === 44) {
				if (u === -1) throw SyntaxError(`Unexpected character at index ${p}`);
				f === -1 && (f = p);
				let n = e.slice(u, f);
				d === 44 ? (r(t, n, i), i = Object.create(null)) : c = n, u = f = -1;
			} else throw SyntaxError(`Unexpected character at index ${p}`);
		} else if (l === void 0) {
			if (f === -1 && n[d] === 1) u === -1 && (u = p);
			else if (d === 32 || d === 9) f === -1 && u !== -1 && (f = p);
			else if (d === 59 || d === 44) {
				if (u === -1) throw SyntaxError(`Unexpected character at index ${p}`);
				f === -1 && (f = p), r(i, e.slice(u, f), !0), d === 44 && (r(t, c, i), i = Object.create(null), c = void 0), u = f = -1;
			} else if (d === 61 && u !== -1 && f === -1) l = e.slice(u, p), u = f = -1;
			else throw SyntaxError(`Unexpected character at index ${p}`);
		} else if (o) {
			if (n[d] !== 1) throw SyntaxError(`Unexpected character at index ${p}`);
			u === -1 ? u = p : a ||= !0, o = !1;
		} else if (s) {
			if (n[d] === 1) u === -1 && (u = p);
			else if (d === 34 && u !== -1) s = !1, f = p;
			else if (d === 92) o = !0;
			else throw SyntaxError(`Unexpected character at index ${p}`);
		} else if (d === 34 && e.charCodeAt(p - 1) === 61) s = !0;
		else if (f === -1 && n[d] === 1) u === -1 && (u = p);
		else if (u !== -1 && (d === 32 || d === 9)) f === -1 && (f = p);
		else if (d === 59 || d === 44) {
			if (u === -1) throw SyntaxError(`Unexpected character at index ${p}`);
			f === -1 && (f = p);
			let n = e.slice(u, f);
			a &&= (n = n.replace(/\\/g, ""), !1), r(i, l, n), d === 44 && (r(t, c, i), i = Object.create(null), c = void 0), l = void 0, u = f = -1;
		} else throw SyntaxError(`Unexpected character at index ${p}`);
		if (u === -1 || s || d === 32 || d === 9) throw SyntaxError("Unexpected end of input");
		f === -1 && (f = p);
		let m = e.slice(u, f);
		return c === void 0 ? r(t, m, i) : (l === void 0 ? r(i, m, !0) : a ? r(i, l, m.replace(/\\/g, "")) : r(i, l, m), r(t, c, i)), t;
	}
	function a(e) {
		return Object.keys(e).map((t) => {
			let n = e[t];
			return Array.isArray(n) || (n = [n]), n.map((e) => [t].concat(Object.keys(e).map((t) => {
				let n = e[t];
				return Array.isArray(n) || (n = [n]), n.map((e) => e === !0 ? t : `${t}=${e}`).join("; ");
			})).join("; ")).join(", ");
		}).join(", ");
	}
	t.exports = {
		format: a,
		parse: i
	};
})), ps = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("events"), r = Q("https"), i = Q("http"), a = Q("net"), o = Q("tls"), { randomBytes: s, createHash: c } = Q("crypto"), { Duplex: l, Readable: u } = Q("stream"), { URL: d } = Q("url"), f = ss(), p = ls(), m = us(), { isBlob: h } = cs(), { BINARY_TYPES: g, CLOSE_TIMEOUT: _, EMPTY_BUFFER: v, GUID: y, kForOnEventAttribute: b, kListener: x, kStatusCode: S, kWebSocket: C, NOOP: w } = is(), { EventTarget: { addEventListener: T, removeEventListener: E } } = ds(), { format: D, parse: O } = fs(), { toBuffer: k } = as(), A = Symbol("kAborted"), ee = [8, 13], j = [
		"CONNECTING",
		"OPEN",
		"CLOSING",
		"CLOSED"
	], M = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
	var N = class e extends n {
		constructor(t, n, r) {
			super(), this._binaryType = g[0], this._closeCode = 1006, this._closeFrameReceived = !1, this._closeFrameSent = !1, this._closeMessage = v, this._closeTimer = null, this._errorEmitted = !1, this._extensions = {}, this._paused = !1, this._protocol = "", this._readyState = e.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, t === null ? (this._autoPong = r.autoPong, this._closeTimeout = r.closeTimeout, this._isServer = !0) : (this._bufferedAmount = 0, this._isServer = !1, this._redirects = 0, n === void 0 ? n = !r || r.protocols === void 0 ? [] : Array.isArray(r.protocols) ? r.protocols : [r.protocols] : Array.isArray(n) || (typeof n == "object" && n ? (r = n, n = r.protocols === void 0 ? [] : Array.isArray(r.protocols) ? r.protocols : [r.protocols]) : n = [n]), te(this, t, n, r));
		}
		get binaryType() {
			return this._binaryType;
		}
		set binaryType(e) {
			g.includes(e) && (this._binaryType = e, this._receiver && (this._receiver._binaryType = e));
		}
		get bufferedAmount() {
			return this._socket ? this._socket._writableState.length + this._sender._bufferedBytes : this._bufferedAmount;
		}
		get extensions() {
			return Object.keys(this._extensions).join();
		}
		get isPaused() {
			return this._paused;
		}
		/* istanbul ignore next */
		get onclose() {
			return null;
		}
		/* istanbul ignore next */
		get onerror() {
			return null;
		}
		/* istanbul ignore next */
		get onopen() {
			return null;
		}
		/* istanbul ignore next */
		get onmessage() {
			return null;
		}
		get protocol() {
			return this._protocol;
		}
		get readyState() {
			return this._readyState;
		}
		get url() {
			return this._url;
		}
		setSocket(t, n, r) {
			let i = new p({
				allowSynchronousEvents: r.allowSynchronousEvents,
				binaryType: this.binaryType,
				extensions: this._extensions,
				isServer: this._isServer,
				maxBufferedChunks: r.maxBufferedChunks,
				maxFragments: r.maxFragments,
				maxPayload: r.maxPayload,
				skipUTF8Validation: r.skipUTF8Validation
			}), a = new m(t, this._extensions, r.generateMask);
			this._receiver = i, this._sender = a, this._socket = t, i[C] = this, a[C] = this, t[C] = this, i.on("conclude", ae), i.on("drain", oe), i.on("error", se), i.on("message", le), i.on("ping", ue), i.on("pong", de), a.onerror = pe, t.setTimeout && t.setTimeout(0), t.setNoDelay && t.setNoDelay(), n.length > 0 && t.unshift(n), t.on("close", I), t.on("data", he), t.on("end", ge), t.on("error", _e), this._readyState = e.OPEN, this.emit("open");
		}
		emitClose() {
			this._socket ? (this._extensions[f.extensionName] && this._extensions[f.extensionName].cleanup(), this._receiver.removeAllListeners(), this._readyState = e.CLOSED, this.emit("close", this._closeCode, this._closeMessage)) : (this._readyState = e.CLOSED, this.emit("close", this._closeCode, this._closeMessage));
		}
		close(t, n) {
			this.readyState !== e.CLOSED && (this.readyState === e.CONNECTING ? F(this, this._req, "WebSocket was closed before the connection was established") : this.readyState === e.CLOSING ? this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end() : (this._sender.close(t, n, !this._isServer, (e) => {
				e || (this._closeFrameSent = !0, (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end());
			}), this._readyState = e.CLOSING, me(this)));
		}
		pause() {
			this.readyState !== e.CONNECTING && this.readyState !== e.CLOSED && (this._paused = !0, this._socket.pause());
		}
		ping(t, n, r) {
			if (this.readyState === e.CONNECTING) throw Error("WebSocket is not open: readyState 0 (CONNECTING)");
			typeof t == "function" ? (r = t, t = n = void 0) : typeof n == "function" && (r = n, n = void 0), typeof t == "number" && (t = t.toString()), this.readyState === e.OPEN ? (n === void 0 && (n = !this._isServer), this._sender.ping(t || v, n, r)) : ie(this, t, r);
		}
		pong(t, n, r) {
			if (this.readyState === e.CONNECTING) throw Error("WebSocket is not open: readyState 0 (CONNECTING)");
			typeof t == "function" ? (r = t, t = n = void 0) : typeof n == "function" && (r = n, n = void 0), typeof t == "number" && (t = t.toString()), this.readyState === e.OPEN ? (n === void 0 && (n = !this._isServer), this._sender.pong(t || v, n, r)) : ie(this, t, r);
		}
		resume() {
			this.readyState !== e.CONNECTING && this.readyState !== e.CLOSED && (this._paused = !1, this._receiver._writableState.needDrain || this._socket.resume());
		}
		send(t, n, r) {
			if (this.readyState === e.CONNECTING) throw Error("WebSocket is not open: readyState 0 (CONNECTING)");
			if (typeof n == "function" && (r = n, n = {}), typeof t == "number" && (t = t.toString()), this.readyState !== e.OPEN) {
				ie(this, t, r);
				return;
			}
			let i = {
				binary: typeof t != "string",
				mask: !this._isServer,
				compress: !0,
				fin: !0,
				...n
			};
			this._extensions[f.extensionName] || (i.compress = !1), this._sender.send(t || v, i, r);
		}
		terminate() {
			this.readyState !== e.CLOSED && (this.readyState === e.CONNECTING ? F(this, this._req, "WebSocket was closed before the connection was established") : this._socket && (this._readyState = e.CLOSING, this._socket.destroy()));
		}
	};
	Object.defineProperty(N, "CONNECTING", {
		enumerable: !0,
		value: j.indexOf("CONNECTING")
	}), Object.defineProperty(N.prototype, "CONNECTING", {
		enumerable: !0,
		value: j.indexOf("CONNECTING")
	}), Object.defineProperty(N, "OPEN", {
		enumerable: !0,
		value: j.indexOf("OPEN")
	}), Object.defineProperty(N.prototype, "OPEN", {
		enumerable: !0,
		value: j.indexOf("OPEN")
	}), Object.defineProperty(N, "CLOSING", {
		enumerable: !0,
		value: j.indexOf("CLOSING")
	}), Object.defineProperty(N.prototype, "CLOSING", {
		enumerable: !0,
		value: j.indexOf("CLOSING")
	}), Object.defineProperty(N, "CLOSED", {
		enumerable: !0,
		value: j.indexOf("CLOSED")
	}), Object.defineProperty(N.prototype, "CLOSED", {
		enumerable: !0,
		value: j.indexOf("CLOSED")
	}), [
		"binaryType",
		"bufferedAmount",
		"extensions",
		"isPaused",
		"protocol",
		"readyState",
		"url"
	].forEach((e) => {
		Object.defineProperty(N.prototype, e, { enumerable: !0 });
	}), [
		"open",
		"error",
		"close",
		"message"
	].forEach((e) => {
		Object.defineProperty(N.prototype, `on${e}`, {
			enumerable: !0,
			get() {
				for (let t of this.listeners(e)) if (t[b]) return t[x];
				return null;
			},
			set(t) {
				for (let t of this.listeners(e)) if (t[b]) {
					this.removeListener(e, t);
					break;
				}
				typeof t == "function" && this.addEventListener(e, t, { [b]: !0 });
			}
		});
	}), N.prototype.addEventListener = T, N.prototype.removeEventListener = E, t.exports = N;
	function te(e, t, n, a) {
		let o = {
			allowSynchronousEvents: !0,
			autoPong: !0,
			closeTimeout: _,
			protocolVersion: ee[1],
			maxBufferedChunks: 262144,
			maxFragments: 16384,
			maxPayload: 104857600,
			skipUTF8Validation: !1,
			perMessageDeflate: !0,
			followRedirects: !1,
			maxRedirects: 10,
			...a,
			socketPath: void 0,
			hostname: void 0,
			protocol: void 0,
			protocols: void 0,
			timeout: void 0,
			method: "GET",
			host: void 0,
			path: void 0,
			port: void 0
		};
		if (e._autoPong = o.autoPong, e._closeTimeout = o.closeTimeout, !ee.includes(o.protocolVersion)) throw RangeError(`Unsupported protocol version: ${o.protocolVersion} (supported versions: ${ee.join(", ")})`);
		let l;
		if (t instanceof d) l = t;
		else try {
			l = new d(t);
		} catch {
			throw SyntaxError(`Invalid URL: ${t}`);
		}
		l.protocol === "http:" ? l.protocol = "ws:" : l.protocol === "https:" && (l.protocol = "wss:"), e._url = l.href;
		let u = l.protocol === "wss:", p = l.protocol === "ws+unix:", m;
		if (l.protocol !== "ws:" && !u && !p ? m = "The URL's protocol must be one of \"ws:\", \"wss:\", \"http:\", \"https:\", or \"ws+unix:\"" : p && !l.pathname ? m = "The URL's pathname is empty" : l.hash && (m = "The URL contains a fragment identifier"), m) {
			let t = SyntaxError(m);
			if (e._redirects === 0) throw t;
			P(e, t);
			return;
		}
		let h = u ? 443 : 80, g = s(16).toString("base64"), v = u ? r.request : i.request, b = /* @__PURE__ */ new Set(), x;
		if (o.createConnection = o.createConnection || (u ? re : ne), o.defaultPort = o.defaultPort || h, o.port = l.port || h, o.host = l.hostname.startsWith("[") ? l.hostname.slice(1, -1) : l.hostname, o.headers = {
			...o.headers,
			"Sec-WebSocket-Version": o.protocolVersion,
			"Sec-WebSocket-Key": g,
			Connection: "Upgrade",
			Upgrade: "websocket"
		}, o.path = l.pathname + l.search, o.timeout = o.handshakeTimeout, o.perMessageDeflate && (x = new f({
			...o.perMessageDeflate,
			isServer: !1,
			maxPayload: o.maxPayload
		}), o.headers["Sec-WebSocket-Extensions"] = D({ [f.extensionName]: x.offer() })), n.length) {
			for (let e of n) {
				if (typeof e != "string" || !M.test(e) || b.has(e)) throw SyntaxError("An invalid or duplicated subprotocol was specified");
				b.add(e);
			}
			o.headers["Sec-WebSocket-Protocol"] = n.join(",");
		}
		if (o.origin && (o.protocolVersion < 13 ? o.headers["Sec-WebSocket-Origin"] = o.origin : o.headers.Origin = o.origin), (l.username || l.password) && (o.auth = `${l.username}:${l.password}`), p) {
			let e = o.path.split(":");
			o.socketPath = e[0], o.path = e[1];
		}
		let S;
		if (o.followRedirects) {
			if (e._redirects === 0) {
				e._originalIpc = p, e._originalSecure = u, e._originalHostOrSocketPath = p ? o.socketPath : l.host;
				let t = a && a.headers;
				if (a = {
					...a,
					headers: {}
				}, t) for (let [e, n] of Object.entries(t)) a.headers[e.toLowerCase()] = n;
			} else if (e.listenerCount("redirect") === 0) {
				let t = p ? e._originalIpc ? o.socketPath === e._originalHostOrSocketPath : !1 : !e._originalIpc && l.host === e._originalHostOrSocketPath;
				(!t || e._originalSecure && !u) && (delete o.headers.authorization, delete o.headers.cookie, t || delete o.headers.host, o.auth = void 0);
			}
			o.auth && !a.headers.authorization && (a.headers.authorization = "Basic " + Buffer.from(o.auth).toString("base64")), S = e._req = v(o), e._redirects && e.emit("redirect", e.url, S);
		} else S = e._req = v(o);
		o.timeout && S.on("timeout", () => {
			F(e, S, "Opening handshake has timed out");
		}), S.on("error", (t) => {
			S === null || S[A] || (S = e._req = null, P(e, t));
		}), S.on("response", (r) => {
			let i = r.headers.location, s = r.statusCode;
			if (i && o.followRedirects && s >= 300 && s < 400) {
				if (++e._redirects > o.maxRedirects) {
					F(e, S, "Maximum redirects exceeded");
					return;
				}
				S.abort();
				let r;
				try {
					r = new d(i, t);
				} catch {
					P(e, /* @__PURE__ */ SyntaxError(`Invalid URL: ${i}`));
					return;
				}
				te(e, r, n, a);
			} else e.emit("unexpected-response", S, r) || F(e, S, `Unexpected server response: ${r.statusCode}`);
		}), S.on("upgrade", (t, n, r) => {
			if (e.emit("upgrade", t), e.readyState !== N.CONNECTING) return;
			S = e._req = null;
			let i = t.headers.upgrade;
			if (i === void 0 || i.toLowerCase() !== "websocket") {
				F(e, n, "Invalid Upgrade header");
				return;
			}
			let a = c("sha1").update(g + y).digest("base64");
			if (t.headers["sec-websocket-accept"] !== a) {
				F(e, n, "Invalid Sec-WebSocket-Accept header");
				return;
			}
			let s = t.headers["sec-websocket-protocol"], l;
			if (s === void 0 ? b.size && (l = "Server sent no subprotocol") : b.size ? b.has(s) || (l = "Server sent an invalid subprotocol") : l = "Server sent a subprotocol but none was requested", l) {
				F(e, n, l);
				return;
			}
			s && (e._protocol = s);
			let u = t.headers["sec-websocket-extensions"];
			if (u !== void 0) {
				if (!x) {
					F(e, n, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
					return;
				}
				let t;
				try {
					t = O(u);
				} catch {
					F(e, n, "Invalid Sec-WebSocket-Extensions header");
					return;
				}
				let r = Object.keys(t);
				if (r.length !== 1 || r[0] !== f.extensionName) {
					F(e, n, "Server indicated an extension that was not requested");
					return;
				}
				try {
					x.accept(t[f.extensionName]);
				} catch {
					F(e, n, "Invalid Sec-WebSocket-Extensions header");
					return;
				}
				e._extensions[f.extensionName] = x;
			}
			e.setSocket(n, r, {
				allowSynchronousEvents: o.allowSynchronousEvents,
				generateMask: o.generateMask,
				maxBufferedChunks: o.maxBufferedChunks,
				maxFragments: o.maxFragments,
				maxPayload: o.maxPayload,
				skipUTF8Validation: o.skipUTF8Validation
			});
		}), o.finishRequest ? o.finishRequest(S, e) : S.end();
	}
	function P(e, t) {
		e._readyState = N.CLOSING, e._errorEmitted = !0, e.emit("error", t), e.emitClose();
	}
	function ne(e) {
		return e.path = e.socketPath, a.connect(e);
	}
	function re(e) {
		return e.path = void 0, !e.servername && e.servername !== "" && (e.servername = a.isIP(e.host) ? "" : e.host), o.connect(e);
	}
	function F(e, t, n) {
		e._readyState = N.CLOSING;
		let r = Error(n);
		Error.captureStackTrace(r, F), t.setHeader ? (t[A] = !0, t.abort(), t.socket && !t.socket.destroyed && t.socket.destroy(), process.nextTick(P, e, r)) : (t.destroy(r), t.once("error", e.emit.bind(e, "error")), t.once("close", e.emitClose.bind(e)));
	}
	function ie(e, t, n) {
		if (t) {
			let n = h(t) ? t.size : k(t).length;
			e._socket ? e._sender._bufferedBytes += n : e._bufferedAmount += n;
		}
		if (n) {
			let t = /* @__PURE__ */ Error(`WebSocket is not open: readyState ${e.readyState} (${j[e.readyState]})`);
			process.nextTick(n, t);
		}
	}
	function ae(e, t) {
		let n = this[C];
		n._closeFrameReceived = !0, n._closeMessage = t, n._closeCode = e, n._socket[C] !== void 0 && (n._socket.removeListener("data", he), process.nextTick(fe, n._socket), e === 1005 ? n.close() : n.close(e, t));
	}
	function oe() {
		let e = this[C];
		e.isPaused || e._socket.resume();
	}
	function se(e) {
		let t = this[C];
		t._socket[C] !== void 0 && (t._socket.removeListener("data", he), process.nextTick(fe, t._socket), t.close(e[S])), t._errorEmitted || (t._errorEmitted = !0, t.emit("error", e));
	}
	function ce() {
		this[C].emitClose();
	}
	function le(e, t) {
		this[C].emit("message", e, t);
	}
	function ue(e) {
		let t = this[C];
		t._autoPong && t.pong(e, !this._isServer, w), t.emit("ping", e);
	}
	function de(e) {
		this[C].emit("pong", e);
	}
	function fe(e) {
		e.resume();
	}
	function pe(e) {
		let t = this[C];
		t.readyState !== N.CLOSED && (t.readyState === N.OPEN && (t._readyState = N.CLOSING, me(t)), this._socket.end(), t._errorEmitted || (t._errorEmitted = !0, t.emit("error", e)));
	}
	function me(e) {
		e._closeTimer = setTimeout(e._socket.destroy.bind(e._socket), e._closeTimeout);
	}
	function I() {
		let e = this[C];
		if (this.removeListener("close", I), this.removeListener("data", he), this.removeListener("end", ge), e._readyState = N.CLOSING, !this._readableState.endEmitted && !e._closeFrameReceived && !e._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
			let t = this.read(this._readableState.length);
			e._receiver.write(t);
		}
		e._receiver.end(), this[C] = void 0, clearTimeout(e._closeTimer), e._receiver._writableState.finished || e._receiver._writableState.errorEmitted ? e.emitClose() : (e._receiver.on("error", ce), e._receiver.on("finish", ce));
	}
	function he(e) {
		this[C]._receiver.write(e) || this.pause();
	}
	function ge() {
		let e = this[C];
		e._readyState = N.CLOSING, e._receiver.end(), this.end();
	}
	function _e() {
		let e = this[C];
		this.removeListener("error", _e), this.on("error", w), e && (e._readyState = N.CLOSING, this.destroy());
	}
})), ms = /* @__PURE__ */ Z(((e, t) => {
	ps();
	let { Duplex: n } = Q("stream");
	function r(e) {
		e.emit("close");
	}
	function i() {
		!this.destroyed && this._writableState.finished && this.destroy();
	}
	function a(e) {
		this.removeListener("error", a), this.destroy(), this.listenerCount("error") === 0 && this.emit("error", e);
	}
	function o(e, t) {
		let o = !0, s = new n({
			...t,
			autoDestroy: !1,
			emitClose: !1,
			objectMode: !1,
			writableObjectMode: !1
		});
		return e.on("message", function(t, n) {
			let r = !n && s._readableState.objectMode ? t.toString() : t;
			s.push(r) || e.pause();
		}), e.once("error", function(e) {
			s.destroyed || (o = !1, s.destroy(e));
		}), e.once("close", function() {
			s.destroyed || s.push(null);
		}), s._destroy = function(t, n) {
			if (e.readyState === e.CLOSED) {
				n(t), process.nextTick(r, s);
				return;
			}
			let i = !1;
			e.once("error", function(e) {
				i = !0, n(e);
			}), e.once("close", function() {
				i || n(t), process.nextTick(r, s);
			}), o && e.terminate();
		}, s._final = function(t) {
			e.readyState === e.CONNECTING ? e.once("open", function() {
				s._final(t);
			}) : e._socket !== null && (e._socket._writableState.finished ? (t(), s._readableState.endEmitted && s.destroy()) : (e._socket.once("finish", function() {
				t();
			}), e.close()));
		}, s._read = function() {
			e.isPaused && e.resume();
		}, s._write = function(t, n, r) {
			e.readyState === e.CONNECTING ? e.once("open", function() {
				s._write(t, n, r);
			}) : e.send(t, r);
		}, s.on("end", i), s.on("error", a), s;
	}
	t.exports = o;
})), hs = /* @__PURE__ */ Z(((e, t) => {
	let { tokenChars: n } = cs();
	function r(e) {
		let t = /* @__PURE__ */ new Set(), r = -1, i = -1, a = 0;
		for (; a < e.length; a++) {
			let o = e.charCodeAt(a);
			if (i === -1 && n[o] === 1) r === -1 && (r = a);
			else if (a !== 0 && (o === 32 || o === 9)) i === -1 && r !== -1 && (i = a);
			else if (o === 44) {
				if (r === -1) throw SyntaxError(`Unexpected character at index ${a}`);
				i === -1 && (i = a);
				let n = e.slice(r, i);
				if (t.has(n)) throw SyntaxError(`The "${n}" subprotocol is duplicated`);
				t.add(n), r = i = -1;
			} else throw SyntaxError(`Unexpected character at index ${a}`);
		}
		if (r === -1 || i !== -1) throw SyntaxError("Unexpected end of input");
		let o = e.slice(r, a);
		if (t.has(o)) throw SyntaxError(`The "${o}" subprotocol is duplicated`);
		return t.add(o), t;
	}
	t.exports = { parse: r };
})), gs = /* @__PURE__ */ Z(((e, t) => {
	let n = Q("events"), r = Q("http"), { Duplex: i } = Q("stream"), { createHash: a } = Q("crypto"), o = fs(), s = ss(), c = hs(), l = ps(), { CLOSE_TIMEOUT: u, GUID: d, kWebSocket: f } = is(), p = /^[+/0-9A-Za-z]{22}==$/;
	t.exports = class extends n {
		constructor(e, t) {
			if (super(), e = {
				allowSynchronousEvents: !0,
				autoPong: !0,
				maxBufferedChunks: 262144,
				maxFragments: 16384,
				maxPayload: 104857600,
				skipUTF8Validation: !1,
				perMessageDeflate: !1,
				handleProtocols: null,
				clientTracking: !0,
				closeTimeout: u,
				verifyClient: null,
				noServer: !1,
				backlog: null,
				server: null,
				host: null,
				path: null,
				port: null,
				WebSocket: l,
				...e
			}, e.port == null && !e.server && !e.noServer || e.port != null && (e.server || e.noServer) || e.server && e.noServer) throw TypeError("One and only one of the \"port\", \"server\", or \"noServer\" options must be specified");
			if (e.port == null ? e.server && (this._server = e.server) : (this._server = r.createServer((e, t) => {
				let n = r.STATUS_CODES[426];
				t.writeHead(426, {
					"Content-Length": n.length,
					"Content-Type": "text/plain"
				}), t.end(n);
			}), this._server.listen(e.port, e.host, e.backlog, t)), this._server) {
				let e = this.emit.bind(this, "connection");
				this._removeListeners = m(this._server, {
					listening: this.emit.bind(this, "listening"),
					error: this.emit.bind(this, "error"),
					upgrade: (t, n, r) => {
						this.handleUpgrade(t, n, r, e);
					}
				});
			}
			e.perMessageDeflate === !0 && (e.perMessageDeflate = {}), e.clientTracking && (this.clients = /* @__PURE__ */ new Set(), this._shouldEmitClose = !1), this.options = e, this._state = 0;
		}
		address() {
			if (this.options.noServer) throw Error("The server is operating in \"noServer\" mode");
			return this._server ? this._server.address() : null;
		}
		close(e) {
			if (this._state === 2) e && this.once("close", () => {
				e(/* @__PURE__ */ Error("The server is not running"));
			}), process.nextTick(h, this);
			else if (e && this.once("close", e), this._state !== 1) {
				if (this._state = 1, this.options.noServer || this.options.server) this._server && (this._removeListeners(), this._removeListeners = this._server = null), this.clients && this.clients.size ? this._shouldEmitClose = !0 : process.nextTick(h, this);
				else {
					let e = this._server;
					this._removeListeners(), this._removeListeners = this._server = null, e.close(() => {
						h(this);
					});
				}
			}
		}
		shouldHandle(e) {
			if (this.options.path) {
				let t = e.url.indexOf("?");
				if ((t === -1 ? e.url : e.url.slice(0, t)) !== this.options.path) return !1;
			}
			return !0;
		}
		handleUpgrade(e, t, n, r) {
			t.on("error", g);
			let i = e.headers["sec-websocket-key"], a = e.headers.upgrade, l = +e.headers["sec-websocket-version"];
			if (e.method !== "GET") {
				v(this, e, t, 405, "Invalid HTTP method");
				return;
			}
			if (a === void 0 || a.toLowerCase() !== "websocket") {
				v(this, e, t, 400, "Invalid Upgrade header");
				return;
			}
			if (i === void 0 || !p.test(i)) {
				v(this, e, t, 400, "Missing or invalid Sec-WebSocket-Key header");
				return;
			}
			if (l !== 13 && l !== 8) {
				v(this, e, t, 400, "Missing or invalid Sec-WebSocket-Version header", { "Sec-WebSocket-Version": "13, 8" });
				return;
			}
			if (!this.shouldHandle(e)) {
				_(t, 400);
				return;
			}
			let u = e.headers["sec-websocket-protocol"], d = /* @__PURE__ */ new Set();
			if (u !== void 0) try {
				d = c.parse(u);
			} catch {
				v(this, e, t, 400, "Invalid Sec-WebSocket-Protocol header");
				return;
			}
			let f = e.headers["sec-websocket-extensions"], m = {};
			if (this.options.perMessageDeflate && f !== void 0) {
				let n = new s({
					...this.options.perMessageDeflate,
					isServer: !0,
					maxPayload: this.options.maxPayload
				});
				try {
					let e = o.parse(f);
					e[s.extensionName] && (n.accept(e[s.extensionName]), m[s.extensionName] = n);
				} catch {
					v(this, e, t, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
					return;
				}
			}
			if (this.options.verifyClient) {
				let a = {
					origin: e.headers[`${l === 8 ? "sec-websocket-origin" : "origin"}`],
					secure: !!(e.socket.authorized || e.socket.encrypted),
					req: e
				};
				if (this.options.verifyClient.length === 2) {
					this.options.verifyClient(a, (a, o, s, c) => {
						if (!a) return _(t, o || 401, s, c);
						this.completeUpgrade(m, i, d, e, t, n, r);
					});
					return;
				}
				if (!this.options.verifyClient(a)) return _(t, 401);
			}
			this.completeUpgrade(m, i, d, e, t, n, r);
		}
		completeUpgrade(e, t, n, r, i, c, l) {
			if (!i.readable || !i.writable) return i.destroy();
			if (i[f]) throw Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
			if (this._state > 0) return _(i, 503);
			let u = [
				"HTTP/1.1 101 Switching Protocols",
				"Upgrade: websocket",
				"Connection: Upgrade",
				`Sec-WebSocket-Accept: ${a("sha1").update(t + d).digest("base64")}`
			], p = new this.options.WebSocket(null, void 0, this.options);
			if (n.size) {
				let e = this.options.handleProtocols ? this.options.handleProtocols(n, r) : n.values().next().value;
				e && (u.push(`Sec-WebSocket-Protocol: ${e}`), p._protocol = e);
			}
			if (e[s.extensionName]) {
				let t = e[s.extensionName].params, n = o.format({ [s.extensionName]: [t] });
				u.push(`Sec-WebSocket-Extensions: ${n}`), p._extensions = e;
			}
			this.emit("headers", u, r), i.write(u.concat("\r\n").join("\r\n")), i.removeListener("error", g), p.setSocket(i, c, {
				allowSynchronousEvents: this.options.allowSynchronousEvents,
				maxBufferedChunks: this.options.maxBufferedChunks,
				maxFragments: this.options.maxFragments,
				maxPayload: this.options.maxPayload,
				skipUTF8Validation: this.options.skipUTF8Validation
			}), this.clients && (this.clients.add(p), p.on("close", () => {
				this.clients.delete(p), this._shouldEmitClose && !this.clients.size && process.nextTick(h, this);
			})), l(p, r);
		}
	};
	function m(e, t) {
		for (let n of Object.keys(t)) e.on(n, t[n]);
		return function() {
			for (let n of Object.keys(t)) e.removeListener(n, t[n]);
		};
	}
	function h(e) {
		e._state = 2, e.emit("close");
	}
	function g() {
		this.destroy();
	}
	function _(e, t, n, i) {
		n ||= r.STATUS_CODES[t], i = {
			Connection: "close",
			"Content-Type": "text/html",
			"Content-Length": Buffer.byteLength(n),
			...i
		}, e.once("finish", e.destroy), e.end(`HTTP/1.1 ${t} ${r.STATUS_CODES[t]}\r\n` + Object.keys(i).map((e) => `${e}: ${i[e]}`).join("\r\n") + "\r\n\r\n" + n);
	}
	function v(e, t, n, r, i, a) {
		if (e.listenerCount("wsClientError")) {
			let r = Error(i);
			Error.captureStackTrace(r, v), e.emit("wsClientError", r, n, t);
		} else _(n, r, i, a);
	}
}));
ms(), fs(), ss(), ls(), us(), hs(), ps();
var _s = /* @__PURE__ */ ni(gs(), 1);
process.versions.bun ? import.meta.require("ws").WebSocketServer : _s.default, Ya(), ao(), co(), xo();
var vs = Object.freeze({
	port: Ei,
	strictPort: !1,
	host: "localhost",
	allowedHosts: [],
	https: void 0,
	open: !1,
	proxy: void 0,
	cors: { origin: ki },
	headers: {},
	warmup: {
		clientFiles: [],
		ssrFiles: []
	},
	middlewareMode: !1,
	fs: {
		strict: !0,
		deny: [
			".env",
			".env.*",
			"*.{crt,pem,key,p12,pfx,cer,der}",
			".npmrc",
			".yarnrc.yml",
			"**/.git/**"
		]
	},
	preTransformRequests: !0,
	perEnvironmentStartEndDuringDev: !1,
	perEnvironmentWatchChangeDuringDev: !1,
	forwardConsole: void 0
});
$("vite:hmr"), aa(wi), $("vite:optimize-deps"), $("vite:import-analysis"), aa(wi), ((e, t) => t || !e?.__esModule ? {
	...typeof e == "object" && !Array.isArray(e) || typeof e == "function" ? e : {},
	default: e
} : e).toString().replaceAll("\n", ""), [...Ti];
var { basename: ys, dirname: bs, relative: xs } = n.posix;
$("vite:deps"), $("vite:deps"), [
	{
		path: "node_modules/.pnpm/lock.yaml",
		checkPatchesDir: !1,
		manager: "pnpm"
	},
	{
		path: "node_modules/.package-lock.json",
		checkPatchesDir: "patches",
		manager: "npm"
	},
	{
		path: "node_modules/.yarn-state.yml",
		checkPatchesDir: !1,
		manager: "yarn"
	},
	{
		path: "bun.lock",
		checkPatchesDir: "patches",
		manager: "bun"
	},
	{
		path: ".rush/temp/shrinkwrap-deps.json",
		checkPatchesDir: !1,
		manager: "pnpm"
	},
	{
		path: "aube-lock.yaml",
		checkPatchesDir: !1,
		manager: "aube"
	},
	{
		path: "nub.lock",
		checkPatchesDir: !1,
		manager: "nub"
	},
	{
		path: ".pnp.cjs",
		checkPatchesDir: ".yarn/patches",
		manager: "yarn"
	},
	{
		path: ".pnp.js",
		checkPatchesDir: ".yarn/patches",
		manager: "yarn"
	},
	{
		path: "node_modules/.yarn-integrity",
		checkPatchesDir: "patches",
		manager: "yarn"
	},
	{
		path: "bun.lockb",
		checkPatchesDir: "patches",
		manager: "bun"
	}
].sort((e, { manager: t }) => process.env.npm_config_user_agent?.startsWith(t) ? 1 : -1).map((e) => e.path), [{
	path: "yarn.lock",
	checkPatchesDir: !1,
	manager: "yarn"
}].map((e) => e.path);
var Ss = 5e3;
(0, n.promisify)(function(e, t, r) {
	let i = Date.now(), a = 0;
	n.default.rename(e, t, function o(s) {
		s && (s.code === "EACCES" || s.code === "EPERM") && Date.now() - i < Ss ? (setTimeout(function() {
			n.default.stat(t, function(r, i) {
				r && r.code === "ENOENT" ? n.default.rename(e, t, o) : o(s);
			});
		}, a), a < 100 && (a += 10)) : r(s);
	});
}), aa(xi), aa(Ci), $("vite:resolve-details", { onlyWhenFocused: !0 }), da(), new TextDecoder();
var Cs = Object.freeze({
	transformer: "postcss",
	preprocessorMaxWorkers: !0,
	devSourcemap: !1
});
RegExp(`\\.module${gi.source}`), new RegExp([/[ \t]*<script[^>]*type\s*=\s*(?:"module"|'module'|module)[^>]*>/i, /[ \t]*<link[^>]*rel\s*=\s*(?:"modulepreload"|'modulepreload'|modulepreload)[\s\S]*?>/i].map((e) => e.source).join("|"), "i"), n.Buffer.from("version https://git-lfs.github.com");
var ws = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ts = /* @__PURE__ */ new Uint8Array(64), Es = /* @__PURE__ */ new Uint8Array(128);
for (let e = 0; e < ws.length; e++) {
	let t = ws.charCodeAt(e);
	Ts[e] = t, Es[t] = e;
}
var Ds = Date.now().toString().length;
RegExp(`vitest=\\d{${Ds}}`);
var Os = {
	builtins: ["js-string"],
	importedStringConstants: "wasm:js/string-constants"
};
[...Os.builtins.map((e) => `wasm:${e}`), Os.importedStringConstants], (async (e = {}, t) => {
	let n;
	if (t.startsWith("data:")) {
		let r = t.replace(/^data:.*?base64,/, ""), i;
		if (typeof Buffer == "function" && typeof Buffer.from == "function") i = Buffer.from(r, "base64");
		else if (typeof atob == "function") {
			let e = atob(r);
			i = new Uint8Array(e.length);
			for (let t = 0; t < e.length; t++) i[t] = e.charCodeAt(t);
		} else throw Error("Failed to decode base64-encoded data URL, Buffer and atob are not supported");
		n = await WebAssembly.instantiate(i, e, Os);
	} else n = await ks(t, e);
	return n.instance;
}).toString();
var ks = async (e, t) => {
	let n = await fetch(e), r = n.headers.get("Content-Type") || "";
	if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) return WebAssembly.instantiateStreaming(n, t, Os);
	{
		let e = await n.arrayBuffer();
		return WebAssembly.instantiate(e, t, Os);
	}
};
ks.toString(), (async (t, n) => {
	let { readFile: r } = await import("./__vite-browser-external-C_tnBdFj.mjs").then((t) => /* @__PURE__ */ e(t.t(), 1)), i = await r(new URL(t, import.meta.url));
	return WebAssembly.instantiate(i, n, Os);
}).toString(), Object.freeze({ fileName: ".vite/license.md" });
var As = Object.freeze({
	target: "baseline-widely-available",
	polyfillModulePreload: !0,
	modulePreload: !0,
	outDir: "dist",
	assetsDir: "assets",
	assetsInlineLimit: Oi,
	sourcemap: !1,
	terserOptions: {},
	chunkImportMap: !1,
	rolldownOptions: {},
	commonjsOptions: {
		include: [/node_modules/],
		extensions: [".js", ".cjs"]
	},
	dynamicImportVarsOptions: { exclude: [/node_modules/] },
	write: !0,
	emptyOutDir: null,
	copyPublicDir: !0,
	license: !1,
	manifest: !1,
	lib: !1,
	ssrManifest: !1,
	ssrEmitAssets: !1,
	reportCompressedSize: !0,
	chunkSizeWarningLimit: 500,
	watch: null
}), js = Object.freeze({
	sharedConfigBuild: !1,
	sharedPlugins: !1
});
$("vite:deps"), RegExp(`//# ${si}=data:application/json[^,]+base64,([A-Za-z0-9+/=]+)$`, "gm"), $("vite:full-bundle-mode");
var Ms = Object.freeze({
	target: "node",
	optimizeDeps: {}
});
$("vite:config", { depth: 10 }), (0, n.promisify)(n.default.realpath);
function Ns(e) {
	return e;
}
Object.freeze({
	define: {},
	dev: {
		warmup: [],
		sourcemap: { js: !0 },
		sourcemapIgnoreList: void 0
	},
	build: As,
	resolve: {
		externalConditions: [...mi],
		extensions: hi,
		dedupe: [],
		noExternal: [],
		external: [],
		preserveSymlinks: !1,
		tsconfigPaths: !1,
		alias: []
	},
	base: "/",
	publicDir: "public",
	plugins: [],
	html: { cspNonce: void 0 },
	css: Cs,
	json: {
		namedExports: !0,
		stringify: "auto"
	},
	assetsInclude: void 0,
	builder: js,
	server: vs,
	preview: { port: Di },
	experimental: {
		importGlobRestoreExtension: !1,
		renderBuiltUrl: void 0,
		hmrPartialAccept: !1,
		bundledDev: !1
	},
	future: {
		removePluginHookHandleHotUpdate: void 0,
		removePluginHookSsrArgument: void 0,
		removeServerModuleGraph: void 0,
		removeServerHot: void 0,
		removeServerTransformRequest: void 0,
		removeServerWarmupRequest: void 0,
		removeSsrLoadModule: void 0
	},
	legacy: { skipWebSocketTokenCheck: !1 },
	logLevel: "info",
	customLogger: void 0,
	clearScreen: !0,
	envDir: void 0,
	envPrefix: "VITE_",
	worker: {
		format: "iife",
		plugins: () => []
	},
	optimizeDeps: {
		include: [],
		exclude: [],
		needsInterop: [],
		rolldownOptions: {},
		extensions: [],
		disabled: "build",
		holdUntilCrawlEnd: !0,
		force: !1,
		ignoreOutdatedRequests: !1
	},
	ssr: Ms,
	environments: {},
	appType: "spa"
}), n.default.posix.join(_i, aa(Ci)), n.default.posix.join(_i, aa(xi)), (0, n.createRequire)(import.meta.url);
export { Q as n, Ns as r, Z as t };

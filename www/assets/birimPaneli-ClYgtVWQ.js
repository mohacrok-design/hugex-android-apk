import { Ct as registerSW, n as ErrorBoundary, t as UnitPanelApp, wt as require_client, xt as require_jsx_runtime } from "./src-BpHdwD6L.js";
// src/unitPanelMain.tsx
var import_client = require_client();
var import_jsx_runtime = require_jsx_runtime();
var rootEl = document.getElementById("root");
if (rootEl) (0, import_client.createRoot)(rootEl).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitPanelApp, {}) }));
if (typeof window !== "undefined") {
	window.addEventListener("vite:preloadError", () => {
		try {
			const key = "hugex_unit_preload_reload_once";
			if (!sessionStorage.getItem(key)) {
				sessionStorage.setItem(key, "1");
				window.location.reload();
			}
		} catch {
			window.location.reload();
		}
	});
	const isLockedLocalBundle = Boolean(window.__HUGEX_UNIT_CONFIG__?.lockedBuild || window.Capacitor?.isNativePlatform?.() || window.location.protocol === "capacitor:" || window.location.hostname === "localhost" && /Android/i.test(navigator.userAgent || "") && /wv\)|Version\/\d/i.test(navigator.userAgent || ""));
	if ("serviceWorker" in navigator) {
		if (isLockedLocalBundle) navigator.serviceWorker.getRegistrations().then((regs) => Promise.all(regs.map((r) => r.unregister()))).catch(() => {});
		else try {
			let hadController = Boolean(navigator.serviceWorker.controller);
			let refreshing = false;
			navigator.serviceWorker.addEventListener("controllerchange", () => {
				if (hadController && !refreshing) {
					refreshing = true;
					window.location.reload();
				}
				hadController = true;
			});
			registerSW({
				immediate: true,
				onRegisteredSW(_swUrl, registration) {
					if (registration) setInterval(() => {
						registration.update().catch(() => {});
					}, 6e4);
				}
			});
		} catch {}
	}
}

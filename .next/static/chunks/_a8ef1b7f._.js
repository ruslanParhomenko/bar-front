(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_a8ef1b7f._.js", {

"[project]/data/personal.ts [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
[
    {
        id: 1,
        name: "Chiper Adam",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 2,
        name: "Gologanov Iulia",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 3,
        name: "Vladescu Vera",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 4,
        name: "Balaes Vera",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 5,
        name: "Amafteoae Daniela",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 6,
        name: "Blanari Lolita",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 7,
        name: "Bulgari Ilie",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 8,
        name: "Cojocari Maria",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 9,
        name: "Vintcovscaia Eustinia",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 10,
        name: "Plamadeala Olivia",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 11,
        name: "Pirco Anna",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 12,
        name: "Plesca Adriana",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 13,
        name: "Velicico Ecaterina",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 14,
        name: "Zlacevschi Tatiana",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    },
    {
        id: 15,
        name: "Railean Anastasia",
        departament: "waiter",
        dayHours: null,
        nightHours: null,
        tips: null,
        medicalDate: ""
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/store/personalApi.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "personalApi": (()=>personalApi),
    "useGetProductsQuery": (()=>useGetProductsQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/personal.ts [app-client] (ecmascript)");
;
;
const personalApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "productApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: "/"
    }),
    endpoints: (builder)=>({
            getProducts: builder.query({
                query: ()=>"personal",
                // Имитация асинхронного запроса к локальным данным
                async queryFn () {
                    try {
                        // Имитация задержки сети
                        await new Promise((resolve)=>setTimeout(resolve, 500));
                        return {
                            data: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                        };
                    } catch (error) {
                        return {
                            error
                        };
                    }
                }
            })
        })
});
const { useGetProductsQuery } = personalApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/store/store.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// store.js
__turbopack_context__.s({
    "store": (()=>store)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$personalApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/personalApi.js [app-client] (ecmascript)");
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$personalApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$personalApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$personalApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].middleware)
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/componets/Providers.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Providers": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/store.js [app-client] (ecmascript)");
"use client"; // Важно для App Router
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/componets/Providers.jsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_a8ef1b7f._.js.map
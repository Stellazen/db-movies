"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const app_1 = require("./app");
const root = react_dom_1.default.createRoot(document.getElementById('root'));
root.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(app_1.default, null)));

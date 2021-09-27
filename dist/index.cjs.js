'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');
var reactShare = require('react-share');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get__default['default'](theme, path, fallback);
}; };

var rotate$3 = styled.keyframes(templateObject_1$1b || (templateObject_1$1b = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$D || (templateObject_2$D = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$3);
var Svg = styled__default['default'].svg(templateObject_3$k || (templateObject_3$k = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$1b, templateObject_2$D, templateObject_3$k;

var Icon$1V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$5 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$3 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
    DARK: "dark",
};

var _a$4, _b$1;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$5.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a$4[scales$5.SM] = {
        height: "40px",
        fontSize: "14px",
        padding: "0 16px",
    },
    _a$4[scales$5.XS] = {
        height: "32px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$4);
var styleVariants$2 = (_b$1 = {},
    _b$1[variants$3.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b$1[variants$3.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$1[variants$3.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b$1[variants$3.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "white",
    },
    _b$1[variants$3.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b$1[variants$3.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b$1[variants$3.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$1[variants$3.DARK] = {
        backgroundColor: "dark",
        color: "text",
        boxShadow: "none",
    },
    _b$1);

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.biswap-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.biswap-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton$1 = styled__default['default'].button(templateObject_1$1a || (templateObject_1$1a = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 8px;\n  //box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(:active):not(.hover-disabled) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(.hover-disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 8px;\n  //box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(:active):not(.hover-disabled) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(.hover-disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$1,
}), styledSystem.variant({
    variants: styleVariants$2,
}), styledSystem.layout, styledSystem.space);
var templateObject_1$1a;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("biswap-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("biswap-button--disabled");
    }
    return (React__default['default'].createElement(StyledButton$1, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default['default'].createElement(React__default['default'].Fragment, null,
            React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$3.PRIMARY,
    scale: scales$5.MD,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$19 || (templateObject_1$19 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$19;

var Icon$1R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$1N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$1L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$1K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1I = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default['default'].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default['default'].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$1H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React__default['default'].createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React__default['default'].createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React__default['default'].createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React__default['default'].createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React__default['default'].createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$1E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M17.0024 7C17.0024 6.44772 16.5547 6 16.0024 6C15.4502 6 15.0024 6.44772 15.0024 7L15.0024 17C15.0024 17.5523 15.4502 18 16.0024 18C16.5547 18 17.0024 17.5523 17.0024 17L17.0024 7Z" }),
        React__default['default'].createElement("path", { d: "M11.1725 12L7.2925 15.88C6.9025 16.27 6.9125 16.91 7.2925 17.3C7.6825 17.69 8.3125 17.69 8.7025 17.3L13.2925 12.71C13.6825 12.32 13.6825 11.69 13.2925 11.3L8.7025 6.70998C8.3125 6.31998 7.6825 6.31998 7.2925 6.70998C6.9025 7.09998 6.9025 7.72998 7.2925 8.11998L11.1725 12Z" })));
};

var Icon$1A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$1z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.2987 5.70997C17.9087 5.31997 17.2787 5.31997 16.8887 5.70997L11.9988 10.59L7.10875 5.69997C6.71875 5.30997 6.08875 5.30997 5.69875 5.69997C5.30875 6.08997 5.30875 6.71997 5.69875 7.10997L10.5888 12L5.69875 16.89C5.30875 17.28 5.30875 17.91 5.69875 18.3C6.08875 18.69 6.71875 18.69 7.10875 18.3L11.9988 13.41L16.8887 18.3C17.2787 18.69 17.9087 18.69 18.2987 18.3C18.6887 17.91 18.6887 17.28 18.2987 16.89L13.4087 12L18.2987 7.10997C18.6787 6.72997 18.6787 6.08997 18.2987 5.70997Z" })));
};

var Icon$1y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$1x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$1w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$1v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$1u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$1t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default['default'].createElement("path", { d: "M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z", fill: "#fff" }),
        React__default['default'].createElement("path", { d: "M35.492 7.524c-1.387.274-2.71.662-3.798.903-2.484.557-4.807 2.46-5.315 5.944-.452 3.113.597 4.452.137 8.073-.806 6.322-6.87 8.5-9.701 9.822-1.638.758-5.613 2.5-8.678 3.83A19.9 19.9 0 0020 40c11.049 0 20-8.952 20-20 0-4.71-1.629-9.04-4.355-12.452a6.31 6.31 0 00-.153-.024z", fill: "url(#logo-color-1)" }),
        React__default['default'].createElement("path", { d: "M17.75 17.064c1.54-3.33.984-3.338 2.153-6.467 1.476-3.968 6.065-2.839 7.33-2.67 2.09.283 2.638-.46 7.041-1.169.218-.032.428-.064.637-.089C31.25 2.581 25.927 0 20 0 12.04 0 5.17 4.645 1.952 11.379c6.596 1.637 13.717 5.194 15.798 5.685zm-4.371-13.58c.58.089 3.403 3.597 3.935 12.605 0 0-3.629-.871-4.41-2.742-.646-1.54.193-3.565.475-9.863zm22.234 4.024c.008.016.024.024.032.04-.048-.008-.105-.008-.153-.016.04-.016.08-.016.12-.024zM0 20c0-1.597.185-3.145.54-4.63.726.606 1.5 1.275 2.323 2.041 5.21 4.83 13.685 8.645 16.774 5.097.008.008.016.008.016.016-.564.742-2.717 3.089-6.83 2.363l-6.5 9.702A19.943 19.943 0 010 20z", fill: "url(#logo-color-2)" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "logo-color-1", x1: "32.011", y1: "12.762", x2: "27.293", y2: "38.757", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#FF496A" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#E42648" })),
            React__default['default'].createElement("linearGradient", { id: "logo-color-2", x1: "9.653", y1: "29.461", x2: "20.086", y2: "0", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { offset: ".002", stopColor: "#1158F1" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#119BED" })))));
};

var Icon$1s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var rotate$2 = styled.keyframes(templateObject_1$18 || (templateObject_1$18 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var Loader$1 = styled__default['default'](Svg)(templateObject_2$C || (templateObject_2$C = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$2);
var Icon$1r = function (props) {
    return (React__default['default'].createElement(Loader$1, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};
var templateObject_1$18, templateObject_2$C;

var Icon$1q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React__default['default'].createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React__default['default'].createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React__default['default'].createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React__default['default'].createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React__default['default'].createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React__default['default'].createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React__default['default'].createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React__default['default'].createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React__default['default'].createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React__default['default'].createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React__default['default'].createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React__default['default'].createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$1p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1o = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$1n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$1m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$1l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default['default'].createElement("circle", { cx: "45", cy: "45", r: "45", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.7703 49.9442C15.7626 50.1122 15.7587 50.2809 15.7587 50.4501C15.7587 51.0897 15.8144 51.7214 15.923 52.3435H15.7587V53.3228C15.7587 53.8008 15.7898 54.2744 15.8508 54.7428C17.0423 63.8844 29.6377 71.0772 45 71.0772C60.3623 71.0772 72.9577 63.8844 74.1492 54.7428C74.2102 54.2744 74.2413 53.8008 74.2413 53.3228V52.3435H74.077C74.1856 51.7214 74.2413 51.0897 74.2413 50.4501C74.2413 50.2809 74.2374 50.1122 74.2297 49.9442C73.7886 40.3727 60.8709 32.6957 45 32.6957C29.1291 32.6957 16.2114 40.3727 15.7703 49.9442ZM13.3688 49.9442C13.5863 44.1042 17.5547 39.1986 23.0781 35.845C28.8037 32.3686 36.5601 30.2964 45 30.2964C53.4399 30.2964 61.1964 32.3686 66.9219 35.845C72.4453 39.1986 76.4137 44.1042 76.6312 49.9442H76.6406V53.3228C76.6406 59.3853 72.6041 64.4779 66.9219 67.9279C61.1964 71.4043 53.4399 73.4765 45 73.4765C36.5601 73.4765 28.8037 71.4043 23.0781 67.9279C17.3959 64.4779 13.3594 59.3853 13.3594 53.3228V49.9442H13.3688Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M74.2412 53.3233C74.2412 63.1287 61.1494 71.0776 44.9999 71.0776C28.8503 71.0776 15.7585 63.1287 15.7585 53.3233V50.5127H74.2412V53.3233Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M74.2412 50.4502C74.2412 60.2557 61.1494 68.2046 44.9999 68.2046C28.8503 68.2046 15.7585 60.2557 15.7585 50.4502C15.7585 40.6447 28.8503 32.6958 44.9999 32.6958C61.1494 32.6958 74.2412 40.6447 74.2412 50.4502Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 45.4345C20.2577 45.4456 20.2577 45.4567 20.2577 45.4679C20.2577 46.2752 20.3747 47.0659 20.5989 47.8338H20.2574V48.8736C20.2574 49.3326 20.2953 49.7861 20.3691 50.2332C21.4839 56.9839 30.8104 62.2532 42.1508 62.2532C53.4912 62.2532 62.8178 56.9839 63.9326 50.2332C64.0064 49.7861 64.0442 49.3326 64.0442 48.8736V47.8338H63.7032C63.9213 47.0868 64.038 46.3183 64.0442 45.5339C64.0444 45.5119 64.0445 45.4899 64.0445 45.4679C64.0445 45.4567 64.0444 45.4456 64.0444 45.4345C64.015 38.0605 54.2243 32.0883 42.1511 32.0883C30.0779 32.0883 20.2872 38.0605 20.2578 45.4345ZM17.8585 45.4345H17.8582V48.8736C17.8582 53.7204 21.0631 57.7199 25.4188 60.3817C29.8156 63.0687 35.7372 64.6525 42.1508 64.6525C48.5644 64.6525 54.4861 63.0687 58.8829 60.3817C63.2385 57.7199 66.4435 53.7204 66.4435 48.8736V45.5428C66.4437 45.5178 66.4438 45.4928 66.4438 45.4679C66.4438 40.621 63.2388 36.6216 58.8832 33.9598C54.4863 31.2728 48.5647 29.689 42.1511 29.689C35.7375 29.689 29.8158 31.2728 25.419 33.9598C21.0734 36.6155 17.8731 40.6027 17.8585 45.4345Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M64.0441 48.8738C64.0441 56.2631 54.2421 62.2534 42.1507 62.2534C30.0593 62.2534 20.2573 56.2631 20.2573 48.8738V45.7346H64.0441V48.8738Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M64.0441 45.4679C64.0441 52.8573 54.2421 58.8475 42.1507 58.8475C30.0593 58.8475 20.2573 52.8573 20.2573 45.4679C20.2573 38.0786 30.0593 32.0884 42.1507 32.0884C54.2421 32.0884 64.0441 38.0786 64.0441 45.4679Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.8557 38.2365C26.8556 38.2476 26.8556 38.2587 26.8556 38.2699C26.8556 39.0772 26.9726 39.8679 27.1968 40.6359H26.8553V41.6756C26.8553 42.1346 26.8932 42.5881 26.967 43.0352C28.0818 49.7859 37.4083 55.0552 48.7487 55.0552C60.0891 55.0552 69.4157 49.7859 70.5305 43.0352C70.6043 42.5881 70.6421 42.1346 70.6421 41.6756V40.6359H70.3011C70.5192 39.8888 70.6359 39.1203 70.6421 38.3359C70.6423 38.3139 70.6424 38.2919 70.6424 38.2699C70.6424 38.2587 70.6423 38.2476 70.6423 38.2365C70.6129 30.8625 60.8222 24.8903 48.749 24.8903C36.6758 24.8903 26.8851 30.8625 26.8557 38.2365ZM24.4564 38.2365H24.4561V41.6756C24.4561 46.5224 27.661 50.5219 32.0167 53.1837C36.4135 55.8707 42.3351 57.4545 48.7487 57.4545C55.1623 57.4545 61.084 55.8707 65.4808 53.1837C69.8364 50.5219 73.0414 46.5224 73.0414 41.6756V38.3448C73.0416 38.3198 73.0417 38.2948 73.0417 38.2699C73.0417 33.4231 69.8367 29.4236 65.4811 26.7618C61.0842 24.0748 55.1626 22.491 48.749 22.491C42.3354 22.491 36.4137 24.0748 32.0169 26.7618C27.6713 29.4175 24.471 33.4047 24.4564 38.2365Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M70.6422 41.6758C70.6422 49.0651 60.8402 55.0554 48.7488 55.0554C36.6575 55.0554 26.8555 49.0651 26.8555 41.6758V38.5366H70.6422V41.6758Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M70.6422 38.2699C70.6422 45.6593 60.8402 51.6495 48.7488 51.6495C36.6575 51.6495 26.8555 45.6593 26.8555 38.2699C26.8555 30.8806 36.6575 24.8904 48.7488 24.8904C60.8402 24.8904 70.6422 30.8806 70.6422 38.2699Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 31.0385C20.2577 31.0496 20.2577 31.0607 20.2577 31.0719C20.2577 31.8792 20.3747 32.6699 20.5989 33.4379H20.2574V34.4776C20.2574 34.9366 20.2953 35.3901 20.3691 35.8372C21.4839 42.5879 30.8104 47.8572 42.1508 47.8572C53.4912 47.8572 62.8178 42.5879 63.9326 35.8372C64.0064 35.3901 64.0442 34.9366 64.0442 34.4776V33.4379H63.7032C63.9213 32.6908 64.038 31.9223 64.0442 31.1379C64.0444 31.1159 64.0445 31.0939 64.0445 31.0719C64.0445 31.0607 64.0444 31.0496 64.0444 31.0385C64.015 23.6645 54.2243 17.6923 42.1511 17.6923C30.0779 17.6923 20.2872 23.6645 20.2578 31.0385ZM17.8585 31.0385H17.8582V34.4776C17.8582 39.3244 21.0631 43.3239 25.4188 45.9857C29.8156 48.6727 35.7372 50.2565 42.1508 50.2565C48.5644 50.2565 54.4861 48.6727 58.8829 45.9857C63.2385 43.3239 66.4435 39.3244 66.4435 34.4776V31.1468C66.4437 31.1218 66.4438 31.0968 66.4438 31.0719C66.4438 26.2251 63.2388 22.2256 58.8832 19.5638C54.4863 16.8768 48.5647 15.293 42.1511 15.293C35.7375 15.293 29.8158 16.8768 25.419 19.5638C21.0734 22.2195 17.8731 26.2067 17.8585 31.0385Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M64.0441 34.4778C64.0441 41.8671 54.2421 47.8574 42.1507 47.8574C30.0593 47.8574 20.2573 41.8671 20.2573 34.4778V31.3386H64.0441V34.4778Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M64.0441 31.0719C64.0441 38.4613 54.2421 44.4515 42.1507 44.4515C30.0593 44.4515 20.2573 38.4613 20.2573 31.0719C20.2573 23.6826 30.0593 17.6924 42.1507 17.6924C54.2421 17.6924 64.0441 23.6826 64.0441 31.0719Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4361 31.9044C25.4361 34.3714 27.2287 36.5809 30.0567 38.0676L28.0973 41.4614L28.0977 41.4617H28.0973V50.0509C28.0973 51.1867 29.018 52.1075 30.1538 52.1075C31.2896 52.1075 32.2104 51.1867 32.2104 50.0509V43.22L34.3184 39.5686C35.6663 39.8545 37.1133 40.0097 38.6192 40.0097C45.9 40.0097 51.8022 36.3808 51.8022 31.9044C51.8022 27.428 45.9 23.7991 38.6192 23.7991C31.3383 23.7991 25.4361 27.428 25.4361 31.9044Z", fill: "url(#paint1_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0569 38.0676C29.7437 37.9029 29.4431 37.7294 29.1563 37.5476C26.8538 36.0883 25.4363 34.0982 25.4363 31.9045C25.4363 27.428 31.3386 23.7991 38.6194 23.7991C45.9002 23.7991 51.8025 27.428 51.8025 31.9045C51.8025 36.3809 45.9002 40.0098 38.6194 40.0098C37.1135 40.0098 35.6666 39.8545 34.3187 39.5687L32.2106 43.22V50.0509C32.2106 51.1868 31.2899 52.1075 30.1541 52.1075C29.0183 52.1075 28.0975 51.1868 28.0975 50.0509V41.4617L30.0569 38.0676ZM25.9981 41.4978V50.0509C25.9981 52.3462 27.8588 54.2069 30.1541 54.2069C32.4493 54.2069 34.31 52.3462 34.31 50.0509V43.7826L35.4034 41.8887C36.4418 42.0334 37.5181 42.1092 38.6194 42.1092C42.584 42.1092 46.2738 41.1254 49.0408 39.4242C51.7735 37.7441 53.9019 35.1446 53.9019 31.9045C53.9019 28.6643 51.7735 26.0648 49.0408 24.3847C46.2738 22.6835 42.584 21.6997 38.6194 21.6997C34.6548 21.6997 30.965 22.6835 28.198 24.3847C25.4652 26.0648 23.3369 28.6643 23.3369 31.9045C23.3369 34.7481 24.9657 37.0898 27.2286 38.7677L26.2939 40.3867C26.2048 40.5358 26.1337 40.697 26.0835 40.8672C26.0221 41.0746 25.9943 41.2873 25.9981 41.4978Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M29.5544 28.4894C29.5544 30.8083 32.5084 32.6882 36.1524 32.6882C39.7964 32.6882 42.7505 30.8083 42.7505 28.4894C42.7505 26.1704 39.7964 24.2905 36.1524 24.2905C32.5084 24.2905 29.5544 26.1704 29.5544 28.4894Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M29.5547 26.6899H42.7508V28.4894H29.5547V26.6899Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M29.5544 26.6898C29.5544 29.0088 32.5084 30.8887 36.1524 30.8887C39.7964 30.8887 42.7505 29.0088 42.7505 26.6898C42.7505 24.3709 39.7964 22.491 36.1524 22.491C32.5084 22.491 29.5544 24.3709 29.5544 26.6898Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M33.6489 26.1838L35.5086 25.0003C35.9016 24.7502 36.4038 24.7502 36.7968 25.0003L38.6565 26.1838C39.0269 26.4195 39.0269 26.9602 38.6565 27.1959L36.7968 28.3794C36.4038 28.6295 35.9016 28.6295 35.5086 28.3794L33.6489 27.1959C33.2785 26.9602 33.2785 26.4195 33.6489 26.1838Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.3599 21.9496C31.9392 20.9446 33.9929 20.3916 36.1525 20.3916C38.3121 20.3916 40.3658 20.9446 41.9451 21.9496C43.4996 22.9389 44.8499 24.5636 44.8499 26.6899V28.4894C44.8499 30.6156 43.4996 32.2404 41.9451 33.2296C40.3658 34.2347 38.3121 34.7876 36.1525 34.7876C33.9929 34.7876 31.9392 34.2347 30.3599 33.2296C28.8054 32.2404 27.4551 30.6156 27.4551 28.4894V26.6899C27.4551 24.5636 28.8054 22.9389 30.3599 21.9496ZM36.1525 22.491C32.5085 22.491 29.5545 24.3709 29.5545 26.6899V28.4894C29.5545 30.8083 32.5085 32.6882 36.1525 32.6882C39.7965 32.6882 42.7505 30.8083 42.7505 28.4894V26.6899C42.7505 24.3709 39.7965 22.491 36.1525 22.491Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "45", y1: "0", x2: "45", y2: "90", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "38.7618", y1: "24.0704", x2: "38.7618", y2: "51.8948", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$1k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$1j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$1i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$1h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$1g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default['default'].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default['default'].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$1f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$1e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$1d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$1c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$1b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$1a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$18 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$17 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$16 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M16.59 9H15V4C15 3.45 14.55 3 14 3H10C9.45 3 9 3.45 9 4V9H7.41C6.52 9 6.07 10.08 6.7 10.71L11.29 15.3C11.68 15.69 12.31 15.69 12.7 15.3L17.29 10.71C17.92 10.08 17.48 9 16.59 9ZM5 19C5 19.55 5.45 20 6 20H18C18.55 20 19 19.55 19 19C19 18.45 18.55 18 18 18H6C5.45 18 5 18.45 5 19Z" })));
};

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M20.9822 5.07062C20.8756 6.63229 18.0143 18.2999 18.0143 18.2999C18.0143 18.2999 17.8366 18.982 17.2146 19C17.0013 19 16.717 18.982 16.3971 18.6769C15.7395 18.1204 14.2467 17.0434 12.8427 16.0562C12.7894 16.11 12.7361 16.1639 12.665 16.2177C12.3451 16.5049 11.8653 16.9178 11.3499 17.4204C11.1544 17.5999 10.9411 17.7973 10.7279 18.0127L10.7101 18.0307C10.5857 18.1563 10.4791 18.2461 10.3902 18.3179C9.69709 18.8923 9.62601 18.4076 9.62601 18.1563L9.99922 14.0457V14.0098L10.017 13.9739C10.0348 13.9201 10.0703 13.9021 10.0703 13.9021C10.0703 13.9021 17.339 7.36825 17.5345 6.66819C17.5523 6.63229 17.4989 6.59639 17.4101 6.63229C16.9302 6.79385 8.55969 12.143 7.63555 12.7354C7.58224 12.7713 7.42229 12.7533 7.42229 12.7533L3.35254 11.4071C3.35254 11.4071 2.8727 11.2096 3.03264 10.7608C3.06819 10.6711 3.1215 10.5813 3.31699 10.4557C4.22336 9.80948 19.987 4.08336 19.987 4.08336C19.987 4.08336 20.4313 3.93976 20.6979 4.02951C20.8223 4.08336 20.8934 4.13721 20.9645 4.31671C20.9822 4.38851 21 4.53212 21 4.69367C21 4.78342 20.9822 4.89112 20.9822 5.07062Z" })));
};

var Icon$13 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.4158 8.3528C11.8828 8.88474 10.3235 10.444 10.3235 10.444C10.3235 10.444 10.6654 12.1511 9.80615 13.4062C9.65016 13.6341 9.32911 13.6324 9.13385 13.4372L3.14805 7.45132C2.95278 7.25606 2.95113 6.93494 3.17934 6.77945C4.43557 5.9235 6.14832 6.28183 6.14832 6.28183C6.14832 6.28183 6.98173 5.42057 8.23238 4.16991C9.9052 2.49653 13.2519 3.33322 13.2519 3.33322C13.2519 3.33322 14.0886 6.67997 12.4158 8.3528ZM6.05548 12.1512C4.9632 13.2435 3.32479 13.2435 3.32479 13.2435C3.32479 13.2435 3.32479 11.0589 4.41707 10.5128L6.05548 12.1512ZM10.1112 6.47413C10.5017 6.86465 11.1348 6.86465 11.5254 6.47413C11.9159 6.08361 11.9159 5.45044 11.5254 5.05992C11.1348 4.66939 10.5017 4.66939 10.1112 5.05992C9.72063 5.45044 9.72063 6.08361 10.1112 6.47413Z" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "16", height: "16" })))));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("path", { d: "M12.7697 3.74169C12.7005 3.70807 12.623 3.69384 12.5459 3.70058C12.4689 3.70732 12.3952 3.73477 12.3333 3.77985C10.8594 4.85278 9.61031 4.33322 8.16413 3.73167C6.69309 3.1198 5.02586 2.42653 3.16668 3.77985C3.16421 3.78164 3.16207 3.78367 3.15968 3.7855C3.15391 3.78989 3.14834 3.79443 3.14282 3.79911C3.13766 3.80349 3.13255 3.80791 3.12767 3.81249C3.12311 3.81675 3.11874 3.82115 3.11439 3.82561C3.10918 3.83094 3.10404 3.83629 3.09918 3.84185C3.0955 3.84607 3.09201 3.85042 3.0885 3.85478C3.08367 3.86078 3.07889 3.8668 3.07446 3.87302C3.07116 3.87761 3.06813 3.88235 3.06503 3.88708C3.06101 3.89326 3.05699 3.89943 3.05333 3.9058C3.0502 3.9112 3.04735 3.91677 3.04448 3.92234C3.04145 3.92823 3.03838 3.93411 3.03566 3.94012C3.03276 3.94649 3.03019 3.95302 3.02762 3.95954C3.02546 3.96506 3.02327 3.97056 3.02136 3.97616C3.019 3.98308 3.01699 3.99014 3.01501 3.99723C3.01343 4.00284 3.01185 4.00841 3.01053 4.01408C3.00895 4.02092 3.00766 4.02786 3.00644 4.03484C3.00532 4.04117 3.00425 4.04749 3.00343 4.05387C3.00265 4.06015 3.00209 4.06647 3.00158 4.07284C3.00102 4.0802 3.00061 4.08757 3.00043 4.09496C3.00038 4.0978 3 4.10054 3 4.10338V12.5956C3 12.7029 3.0439 12.8057 3.12204 12.8816C3.20018 12.9574 3.30616 13 3.41667 13C3.52717 13 3.63315 12.9574 3.71129 12.8816C3.78943 12.8057 3.83333 12.7029 3.83333 12.5956V10.3782C5.23559 9.46014 6.4446 9.96224 7.83587 10.541C8.68293 10.8933 9.595 11.2727 10.5714 11.2726C11.2906 11.2726 12.0447 11.0668 12.8333 10.4928C12.8851 10.4551 12.9271 10.4063 12.956 10.3501C12.9849 10.294 13 10.232 13 10.1693V4.10338C13 4.02828 12.9785 3.95467 12.9378 3.89079C12.8971 3.8269 12.8389 3.77528 12.7697 3.74169Z" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("g", { opacity: "0.56" },
            React__default['default'].createElement("path", { d: "M18.6667 7.625L6 7.625C5.82319 7.625 5.65362 7.55586 5.5286 7.43279C5.40357 7.30972 5.33333 7.1428 5.33333 6.96875C5.33333 6.7947 5.40357 6.62778 5.5286 6.50471C5.65362 6.38164 5.82319 6.3125 6 6.3125L16.6667 6.3125C16.8435 6.3125 17.013 6.24336 17.1381 6.12029C17.2631 5.99722 17.3333 5.8303 17.3333 5.65625C17.3333 5.4822 17.2631 5.31528 17.1381 5.19221C17.013 5.06914 16.8435 5 16.6667 5L6 5C5.46975 5.0006 4.9614 5.20821 4.58646 5.57729C4.21151 5.94638 4.00061 6.44679 4 6.96875L4 17.0312C4.00061 17.5532 4.21151 18.0536 4.58646 18.4227C4.9614 18.7918 5.46975 18.9994 6 19H18.6667C19.0202 18.9996 19.3591 18.8612 19.609 18.6151C19.859 18.3691 19.9996 18.0355 20 17.6875V8.9375C19.9996 8.58953 19.859 8.25592 19.609 8.00986C19.3591 7.76381 19.0202 7.6254 18.6667 7.625ZM16.3333 14.5156C16.1356 14.5156 15.9422 14.4579 15.7778 14.3497C15.6133 14.2416 15.4851 14.0878 15.4095 13.908C15.3338 13.7281 15.314 13.5302 15.3525 13.3392C15.3911 13.1483 15.4864 12.9729 15.6262 12.8352C15.7661 12.6975 15.9443 12.6038 16.1382 12.5658C16.3322 12.5278 16.5333 12.5473 16.716 12.6218C16.8987 12.6963 17.0549 12.8225 17.1648 12.9844C17.2747 13.1462 17.3333 13.3366 17.3333 13.5313C17.3333 13.7923 17.228 14.0427 17.0404 14.2273C16.8529 14.4119 16.5985 14.5156 16.3333 14.5156Z" }))));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.38031 13.532L4.01253 11.58C3.71703 11.4726 3.46156 11.2772 3.28053 11.0201C3.09949 10.763 3.00159 10.4566 3.00002 10.1422C2.99844 9.82779 3.09327 9.52044 3.27172 9.26156C3.45016 9.00268 3.70367 8.80471 3.99807 8.69431L18.9218 3.09796C19.1983 2.99424 19.4988 2.97234 19.7875 3.03486C20.0761 3.09738 20.3407 3.24168 20.5495 3.45052C20.7584 3.65936 20.9027 3.92392 20.9652 4.21257C21.0277 4.50122 21.0057 4.80176 20.902 5.07829V5.07824L15.3056 20.0019C15.1974 20.2961 15.0011 20.5498 14.7435 20.7284C14.4858 20.907 14.1794 21.0019 13.8659 21H13.8578C13.5429 21.0003 13.2356 20.9032 12.9782 20.7219C12.7207 20.5406 12.5257 20.2841 12.4199 19.9875L10.468 14.6197L4.40017 20.6874C4.25593 20.8317 4.0603 20.9127 3.85631 20.9127C3.65233 20.9127 3.4567 20.8317 3.31246 20.6874C3.16822 20.5432 3.08718 20.3476 3.08718 20.1436C3.08718 19.9396 3.16822 19.744 3.31246 19.5997L9.38031 13.532Z" })));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6.90909 9.06666C6.90909 11.9017 9.18837 14.2 12 14.2C14.8116 14.2 17.0909 11.9017 17.0909 9.06666C17.0909 6.2316 14.8116 3.93333 12 3.93333C9.18837 3.93333 6.90909 6.2316 6.90909 9.06666Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6021 2.46693C15.2546 1.51168 13.6473 0.999364 12 1C10.3528 0.999362 8.74568 1.51161 7.39813 2.46673C6.05059 3.42185 5.02842 4.77325 4.4713 6.33624C3.91419 7.89924 3.84932 9.59757 4.28556 11.1991C4.7218 12.8007 5.63786 14.2274 6.90856 15.2842V22.2666C6.90856 22.3916 6.94024 22.5146 7.00061 22.6237C7.06097 22.7329 7.14801 22.8247 7.25346 22.8904C7.3589 22.9562 7.47926 22.9936 7.6031 22.9992C7.72694 23.0049 7.85015 22.9785 7.96103 22.9226L12.0001 20.8865L16.0378 22.9225C16.1487 22.9785 16.2719 23.0049 16.3958 22.9993C16.5196 22.9937 16.64 22.9562 16.7455 22.8905C16.8509 22.8248 16.938 22.733 16.9983 22.6238C17.0587 22.5146 17.0904 22.3916 17.0904 22.2666V15.2851C18.3613 14.2284 19.2777 12.8018 19.7142 11.2002C20.1506 9.59852 20.0859 7.90006 19.5289 6.3369C18.9719 4.77375 17.9497 3.42218 16.6021 2.46693ZM15.6365 14.5543C14.5601 15.2796 13.2946 15.6666 12 15.6666C10.2646 15.6647 8.60091 14.9687 7.37383 13.7314C6.14674 12.4941 5.4565 10.8165 5.45455 9.06666C5.45455 7.7613 5.83843 6.48526 6.55765 5.3999C7.27688 4.31453 8.29914 3.4686 9.49516 2.96906C10.6912 2.46952 12.0073 2.33882 13.277 2.59348C14.5466 2.84814 15.7129 3.47673 16.6283 4.39976C17.5437 5.32278 18.1671 6.49879 18.4197 7.77906C18.6722 9.05933 18.5426 10.3864 18.0472 11.5924C17.5518 12.7984 16.7129 13.8291 15.6365 14.5543Z" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3.33263 6.25H5.33157V5.5C5.33198 5.10231 5.47251 4.72105 5.72234 4.43984C5.97216 4.15864 6.31089 4.00045 6.6642 4H17.3252C17.6785 4.00045 18.0173 4.15864 18.2671 4.43984C18.5169 4.72105 18.6575 5.10231 18.6579 5.5V6.25H20.6674C21.0207 6.25045 21.3594 6.40864 21.6092 6.68984C21.8591 6.97105 21.9996 7.35231 22 7.75V9.25C21.999 10.2442 21.6477 11.1974 21.0231 11.9004C20.3985 12.6034 19.5517 12.9989 18.6684 13H18.3316C17.5285 15.8066 15.3213 17.9075 12.661 18.2109V20.5H14.66C14.8367 20.5 15.0062 20.579 15.1311 20.7197C15.2561 20.8603 15.3263 21.0511 15.3263 21.25C15.3263 21.4489 15.2561 21.6397 15.1311 21.7803C15.0062 21.921 14.8367 22 14.66 22H9.32946C9.15274 22 8.98326 21.921 8.8583 21.7803C8.73334 21.6397 8.66314 21.4489 8.66314 21.25C8.66314 21.0511 8.73334 20.8603 8.8583 20.7197C8.98326 20.579 9.15274 20.5 9.32946 20.5H11.3284V18.2131C10.0308 18.0654 8.80008 17.4929 7.78839 16.5664C6.77671 15.6399 6.0284 14.4 5.63598 13H5.33157C4.44829 12.9989 3.60148 12.6034 2.97691 11.9004C2.35234 11.1974 2.00101 10.2442 2 9.25V7.75C2.0004 7.35231 2.14094 6.97105 2.39076 6.68984C2.64059 6.40864 2.97932 6.25045 3.33263 6.25ZM18.6684 11.5C19.1984 11.4993 19.7065 11.262 20.0812 10.8402C20.456 10.4184 20.6668 9.84653 20.6674 9.25V7.75H18.6579V10.6652C18.6575 10.9441 18.6436 11.2228 18.6163 11.5H18.6684ZM3.33263 9.25C3.33323 9.84653 3.54403 10.4184 3.91878 10.8402C4.29352 11.262 4.80161 11.4993 5.33157 11.5H5.36423C5.34255 11.2524 5.33167 11.0024 5.33157 10.75V7.75H3.33263V9.25Z" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 8.31935V6.75448C9.10375 6.75448 6.75 9.10616 6.75 11.9999C6.75 12.6905 6.88125 13.3637 7.135 13.9669C7.26625 14.2816 7.17 14.64 6.93375 14.8761C6.4875 15.3219 5.735 15.1646 5.49875 14.5788C5.175 13.7833 5 12.9091 5 11.9999C5 8.13576 8.1325 5.00602 12 5.00602V3.44115C12 3.04775 12.4725 2.85542 12.7438 3.12643L15.185 5.56553C15.36 5.74037 15.36 6.01139 15.185 6.18623L12.7438 8.62533C12.4725 8.90508 12 8.71275 12 8.31935ZM16.865 10.0328C16.7337 9.72686 16.83 9.35968 17.0662 9.12364C17.5125 8.67778 18.265 8.83514 18.5013 9.42088C18.825 10.2164 19 11.0907 19 11.9999C19 15.8639 15.8675 18.9937 12 18.9937V20.5673C12 20.952 11.5275 21.1443 11.2562 20.8733L8.815 18.4342C8.64 18.2593 8.64 17.9883 8.815 17.8135L11.2562 15.3744C11.5275 15.0946 12 15.287 12 15.6804V17.2452C14.8962 17.2452 17.25 14.8936 17.25 11.9999C17.25 11.3092 17.11 10.6448 16.865 10.0328Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M0 12.0057L0 5.8403C0 5.41523 0.227073 5.02171 0.597324 4.80513L5.96072 1.66786C6.34124 1.44527 6.81401 1.44397 7.19579 1.66446L12.6357 4.80618C13.0093 5.02192 13.2389 5.41728 13.2389 5.84475V8.06681L10.8636 9.40682V7.30474C10.8636 6.88322 10.6403 6.49245 10.2749 6.27469L7.19233 4.43725C6.81283 4.21104 6.33888 4.20639 5.9549 4.4251L3.01492 6.09972C2.6378 6.31453 2.40543 6.71187 2.40543 7.14192V10.6338C2.40543 11.0551 2.62852 11.4457 2.99357 11.6636L5.95654 13.4316C6.339 13.6599 6.81728 13.6629 7.20263 13.4394L16.7802 7.88594C17.1586 7.66648 17.6274 7.66517 18.0071 7.88251L23.3927 10.965C23.7686 11.1802 24 11.5768 24 12.006V18.2288C24 18.6589 23.7676 19.0562 23.3905 19.271L18.0046 22.3391C17.6261 22.5547 17.1598 22.5535 16.7825 22.336L11.4676 19.272C11.0936 19.0564 10.8636 18.6608 10.8636 18.233L10.8636 16.0175L13.2389 14.6418V16.8496C13.2389 17.2751 13.4664 17.669 13.8373 17.8854L16.7781 19.6015C17.1576 19.823 17.6286 19.8246 18.0096 19.6057L21.007 17.8841C21.382 17.6687 21.6127 17.2726 21.6127 16.8441V13.3907C21.6127 12.9631 21.3829 12.5677 21.0092 12.3519L18.0043 10.6175C17.6262 10.3992 17.1585 10.3983 16.7796 10.6151L7.18666 16.1036C6.80964 16.3193 6.34468 16.3196 5.96737 16.1044L0.608812 13.0476C0.232073 12.8326 0 12.4355 0 12.0057Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0L5.55306 3.6761L7.92329 5.03416L12 2.7161L16.0767 5.03416L18.447 3.6761L12 0ZM16.0767 6.95417L18.447 8.31221V11.0283L14.3702 13.3463L14.3702 17.9825L12 19.3406L9.62982 17.9825L9.62982 13.3463L5.55306 11.0283V8.31221L7.92329 6.95417L12 9.27218L16.0767 6.95417ZM18.447 12.9483V15.6644L16.0767 17.0225V14.3063L18.447 12.9483ZM16.053 18.9424L20.1299 16.6244V11.9883L22.5 10.6303V17.9825L16.053 21.6585V18.9424ZM20.1299 7.3522L17.7596 5.99417L20.1299 4.6361L22.5 5.99417V8.71027L20.1299 10.0683V7.3522ZM9.62982 22.642V19.9259L12 21.2839L14.3702 19.9259V22.642L12 24L9.62982 22.642ZM7.92329 17.0225L5.55306 15.6644V12.9483L7.92329 14.3063V17.0225ZM12 7.3522L9.62982 5.99417L12 4.6361L14.3702 5.99417L12 7.3522ZM6.24042 5.99417L3.8702 7.3522V10.0683L1.5 8.71027L1.5 5.99417L3.8702 4.6361L6.24042 5.99417ZM1.5 10.6303L3.8702 11.9883L3.8702 16.6244L7.94695 18.9424V21.6585L1.5 17.9825L1.5 10.6303Z" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20", fill: "none" }, props),
        React__default['default'].createElement("path", { d: "M7.39371 2.09677C8.40066 0.322581 10.0885 0.0537634 10.8373 0C9.83028 1.77419 10.2176 3.54839 11.8442 5.8871C13.4708 8.22581 15.2523 10.9677 14.1679 15.3226C13.3004 18.8065 9.98524 19.8925 8.4361 20C11 18 10.8134 15.3226 7.11932 13.7903C2.5 16 4.5 19 6.11237 20C0.148152 18.5484 -0.00676221 13.4677 0.922727 10.0806C1.66632 7.37097 3.34971 5.94086 4.09846 5.56452C3.55626 7.33871 4.33084 9.43548 5.64761 9.19355C6.96439 8.95161 6.88692 7.58064 6.80946 6.77419L6.80705 6.74911C6.72741 5.92107 6.50943 3.65483 7.39371 2.09677Z", fill: "#F93B5D" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React__default['default'].createElement("path", { d: "M11.4545 4.90909C11.4545 4.90909 10.6364 8.18182 9 8.18182C7.36364 8.18182 6.54545 4.90909 6.54545 4.90909L11.4545 4.90909Z" }),
        React__default['default'].createElement("path", { d: "M9 9.81818C10.6364 9.81818 11.4545 13.0909 11.4545 13.0909H6.54545C6.54545 13.0909 7.36364 9.81818 9 9.81818Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 0V0.818182C18 1.72193 17.2674 2.45455 16.3636 2.45455H15.4292C15.1634 4.44627 14.4814 6.05746 13.7994 7.23802C13.3629 7.9933 12.9252 8.57483 12.5928 8.97116L12.5685 9L12.5928 9.02889C12.9252 9.42522 13.3629 10.0067 13.7994 10.7621C14.4814 11.9426 15.1634 13.5538 15.4292 15.5455L16.3636 15.5455C17.2674 15.5455 18 16.2781 18 17.1818V18H0L0 17.1818C0 16.2781 0.732613 15.5455 1.63636 15.5455H2.5708C2.83662 13.5538 3.51857 11.9426 4.20065 10.7621C4.63705 10.0068 5.07481 9.42525 5.4072 9.02891L5.43149 9.00005L5.40722 8.97119C5.07481 8.57488 4.63705 7.99335 4.20065 7.23807C3.51857 6.05751 2.8366 4.44629 2.5708 2.45455H1.63636C0.732613 2.45455 0 1.72193 0 0.818182L0 0L18 0ZM13.7762 2.45455L4.22384 2.45455C4.47523 4.0977 5.04644 5.43099 5.61753 6.41941C5.99931 7.08019 6.37974 7.58431 6.66096 7.91964C6.80144 8.08711 6.91664 8.21188 6.99417 8.29238L7.02486 8.32397C7.04865 8.34826 7.06738 8.36681 7.08044 8.37957L7.09932 8.39777L7.10089 8.39927L7.10209 8.4004C7.26883 8.55518 7.36364 8.77243 7.36364 9.00002C7.36364 9.22764 7.26883 9.44492 7.10209 9.5997L7.10136 9.60038L7.09932 9.6023L7.08046 9.6205L7.06396 9.63676L7.0483 9.65241C7.03317 9.66759 7.01507 9.68605 6.9942 9.70769C6.97824 9.72427 6.96069 9.74273 6.94164 9.76303C6.92533 9.7804 6.90795 9.79913 6.88955 9.81923C6.85452 9.85746 6.81579 9.9006 6.77385 9.94859C6.73844 9.98909 6.70071 10.0331 6.66099 10.0805C6.37974 10.4158 5.99931 10.9199 5.61753 11.5807C5.04644 12.5691 4.47526 13.9024 4.22387 15.5455H13.7761C13.5247 13.9024 12.9536 12.5691 12.3825 11.5807C12.0007 10.9199 11.6203 10.4157 11.339 10.0804C11.1986 9.91294 11.0833 9.78817 11.0058 9.70764C10.9893 9.69057 10.9746 9.67548 10.9617 9.66243L10.9347 9.63541L10.9195 9.62048L10.9007 9.60225L10.8991 9.60075L10.8979 9.59968C10.7312 9.4449 10.6364 9.22759 10.6364 9C10.6364 8.77238 10.7312 8.55508 10.898 8.4003L10.8987 8.39957L10.9007 8.39772L10.9196 8.37952C10.9378 8.36169 10.9671 8.33258 11.0058 8.29233C11.0834 8.21183 11.1986 8.08706 11.339 7.91959C11.6203 7.58429 12.0007 7.08014 12.3825 6.41936C12.9536 5.43094 13.5248 4.09768 13.7762 2.45455Z" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.97828 0H11.2146C11.6079 0.00188312 11.9846 0.145139 12.2627 0.398653C12.5408 0.652167 12.6979 0.995464 12.7 1.35398V6.18372C13.2346 6.20899 13.7383 6.42011 14.1073 6.77362C14.4762 7.12713 14.6825 7.59614 14.6835 8.08407V12.5267C14.6835 12.8034 14.8041 13.0688 15.0188 13.2645C15.2335 13.4602 15.5246 13.5701 15.8282 13.5701C16.1317 13.5701 16.4229 13.4602 16.6376 13.2645C16.8523 13.0688 16.9728 12.8034 16.9728 12.5267V6.05151C15.1999 4.44345 14.8565 4.40443 15.338 2.63628L13.995 0.884071L14.5306 0.458761L17.92 3.51717V12.5323C17.9088 13.0303 17.6839 13.5045 17.2936 13.8531C16.9033 14.2017 16.3786 14.3969 15.8321 14.3969C15.2856 14.3969 14.7609 14.2017 14.3706 13.8531C13.9803 13.5045 13.7554 13.0303 13.7442 12.5323V8.08805C13.742 7.82869 13.6344 7.57927 13.4422 7.38802C13.25 7.19677 12.9868 7.07728 12.7035 7.05266V15.8623H13.7154C13.8417 15.8625 13.9627 15.9083 14.0521 15.9897C14.1416 16.071 14.192 16.1812 14.1924 16.2964V17.5054C14.192 17.6206 14.1416 17.731 14.0522 17.8124C13.9628 17.8939 13.8418 17.9399 13.7154 17.9403H0.480121C0.353812 17.9399 0.23282 17.8938 0.143587 17.8124C0.0543547 17.7309 0.00413632 17.6206 0.00390625 17.5054V16.2964C0.00413723 16.1813 0.0543833 16.0711 0.14364 15.9897C0.232898 15.9083 0.353892 15.8625 0.480121 15.8623H1.49284V1.35717C1.4949 0.99865 1.65207 0.655353 1.9302 0.401839C2.20832 0.148325 2.58495 0.00506903 2.97828 0.00318591V0ZM3.64148 2.16239H10.5505C10.6402 2.1626 10.726 2.19514 10.7894 2.2529C10.8527 2.31066 10.8884 2.38893 10.8887 2.47062V6.39319C10.8882 6.47473 10.8524 6.5528 10.789 6.61039C10.7257 6.66798 10.64 6.70041 10.5505 6.70062H3.64148C3.55217 6.7002 3.46665 6.66768 3.40349 6.61011C3.34034 6.55255 3.30466 6.47459 3.3042 6.39319V2.47062C3.30443 2.38907 3.34001 2.31091 3.40319 2.25318C3.46637 2.19544 3.55202 2.16281 3.64148 2.16239Z" })));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M7 6H19V9H7V6Z" }),
        React__default['default'].createElement("path", { d: "M3.17317 7.51079C3.07444 7.39497 3.07808 7.22356 3.18164 7.11203L7 3L7 12L3.17317 7.51079Z" }),
        React__default['default'].createElement("path", { d: "M18 16H5V19H18V16Z" }),
        React__default['default'].createElement("path", { d: "M20.8221 17.7336C20.9235 17.6203 20.9242 17.449 20.8236 17.335L17 13L17 22L20.8221 17.7336Z" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 22 22" }, props),
        React__default['default'].createElement("path", { d: "M11 1.93936L13.8747 6.71605C14.1539 7.18008 14.6094 7.51101 15.137 7.63321L20.5682 8.89109L16.9137 13.1011C16.5586 13.5101 16.3846 14.0456 16.4315 14.5851L16.9135 20.1392L11.7802 17.9645C11.2815 17.7532 10.7185 17.7532 10.2198 17.9645L5.0865 20.1392L5.56853 14.5851C5.61535 14.0456 5.44137 13.5101 5.08635 13.1011L1.43176 8.89109L6.86298 7.63321C7.39059 7.51101 7.84609 7.18007 8.12534 6.71605L11 1.93936Z", strokeWidth: "2" })));
};

var Box = styled__default['default'].div(templateObject_1$17 || (templateObject_1$17 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.background, styledSystem.border, styledSystem.layout, styledSystem.position, styledSystem.space);
var templateObject_1$17;

var Flex = styled__default['default'](Box)(templateObject_1$16 || (templateObject_1$16 = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), styledSystem.flexbox);
var templateObject_1$16;

var variants$2 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$2.INFO : _b;
    switch (variant) {
        case variants$2.DANGER:
            return theme.colors.failure;
        case variants$2.WARNING:
            return theme.colors.warning;
        case variants$2.SUCCESS:
            return theme.colors.success;
        case variants$2.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$2.INFO; }
    switch (variant) {
        case variants$2.DANGER:
            return Icon$1T;
        case variants$2.WARNING:
            return Icon$1U;
        case variants$2.SUCCESS:
            return Icon$1V;
        case variants$2.INFO:
        default:
            return Icon$1S;
    }
};
// const IconLabel = styled.div<ThemedIconLabel>`
//   /* background-color: ${getThemeColor}; */
//   /* border-radius: 16px 0 0 16px; */
//   /* color: ${({ theme }) => theme.alert.background}; */
//   /* padding: 12px; */
//   svg {
//     fill: ${getThemeColor};
//   }
// `;
var Title$5 = styled__default['default'].div(templateObject_1$15 || (templateObject_1$15 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 8px;\n  margin-left: 16px;\n  margin-right: 28px;\n\n  svg {\n    margin-right: 8px;\n    fill: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 8px;\n  margin-left: 16px;\n  margin-right: 28px;\n\n  svg {\n    margin-right: 8px;\n    fill: ", ";\n  }\n"])), getThemeColor);
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$B || (templateObject_2$B = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 16px;\n  padding-left: 16px;\n  padding-right: ", ";\n  padding-top: 16px;\n"], ["\n  flex: 1;\n  padding-bottom: 16px;\n  padding-left: 16px;\n  padding-right: ", ";\n  padding-top: 16px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$j || (templateObject_3$j = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4$d || (templateObject_4$d = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])));
var Description = styled__default['default'].p(templateObject_5$b || (templateObject_5$b = __makeTemplateObject(["\n  color: #6b7d98;\n  font-size: 16px;\n  vertical-align: middle;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n"], ["\n  color: #6b7d98;\n  font-size: 16px;\n  vertical-align: middle;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n"])));
var Alert = function (_a) {
    var style = _a.style, title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(Details, { style: style, hasHandler: !!onClick },
            React__default['default'].createElement(Title$5, { variant: variant, hasDescription: !!children },
                React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" }),
                React__default['default'].createElement("span", null, title)),
            typeof children === "string" ? React__default['default'].createElement(Description, null, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$1z, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$15, templateObject_2$B, templateObject_3$j, templateObject_4$d, templateObject_5$b;

var StyledBanner = styled__default['default'].div(templateObject_1$14 || (templateObject_1$14 = __makeTemplateObject(["\n  padding: 32px;\n  border-radius: 24px;\n  background: ", ";\n  display: flex;\n"], ["\n  padding: 32px;\n  border-radius: 24px;\n  background: ", ";\n  display: flex;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.cardBlue;
});
var StyledBannerBoby = styled__default['default'].div(templateObject_2$A || (templateObject_2$A = __makeTemplateObject(["\n  width: ", ";\n  align-items: ", ";\n  display: flex;\n  flex-direction: column;\n"], ["\n  width: ", ";\n  align-items: ", ";\n  display: flex;\n  flex-direction: column;\n"])), function (_a) {
    var large = _a.large;
    return (large ? "50%" : "100%");
}, function (_a) {
    var large = _a.large;
    return large && "flex-start";
});
var StyledBannerLeft = styled__default['default'].div(templateObject_3$i || (templateObject_3$i = __makeTemplateObject(["\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var Banner = function (_a) {
    var large = _a.large, children = _a.children;
    return (React__default['default'].createElement(StyledBanner, null,
        React__default['default'].createElement(StyledBannerBoby, { large: large },
            children[0],
            children[1],
            children[2]),
        children[3] && React__default['default'].createElement(StyledBannerLeft, null, children[3])));
};
Banner.defaultProps = {
    large: false,
};
var templateObject_1$14, templateObject_2$A, templateObject_3$i;

var BannerBody = styled__default['default'].p(templateObject_1$13 || (templateObject_1$13 = __makeTemplateObject(["\n  color: ", ";\n  margin-bottom: 24px;\n  font-weight: 900;\n  min-height: 64px;\n  font-size: 26px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"], ["\n  color: ", ";\n  margin-bottom: 24px;\n  font-weight: 900;\n  min-height: 64px;\n  font-size: 26px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.warning;
});
var templateObject_1$13;

var BannerTitle = styled__default['default'].h2(templateObject_1$12 || (templateObject_1$12 = __makeTemplateObject(["\n  color: ", ";\n  min-height: 32px;\n  margin-bottom: 24px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"], ["\n  color: ", ";\n  min-height: 32px;\n  margin-bottom: 24px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var templateObject_1$12;

var Separator = styled__default['default'].div(templateObject_1$11 || (templateObject_1$11 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$z || (templateObject_2$z = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$1C, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$11, templateObject_2$z;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$3.SUBTLE ? "tertiary" : "card"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$10 || (templateObject_1$10 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 8px;\n  display: ", ";\n\n  & > button,\n  & > a {\n    ", "\n  }\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 8px;\n  display: ", ";\n\n  & > button,\n  & > a {\n    ", "\n  }\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor, function (_a) {
    var autoWidth = _a.autoWidth;
    return autoWidth ? 'flex' : 'inline-flex';
}, function (_a) {
    var autoWidth = _a.autoWidth;
    return autoWidth && 'flex: 1 1 auto;';
});
var templateObject_1$10;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$5.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$3.PRIMARY : _d, onItemClick = _a.onItemClick, _e = _a.autoWidth, autoWidth = _e === void 0 ? false : _e, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant, autoWidth: autoWidth }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$$ || (templateObject_1$$ = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$3.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary", color: variant === variants$3.PRIMARY ? "text" : "primary" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$$;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$_ || (templateObject_1$_ = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$_;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$Z || (templateObject_1$Z = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$Z;

var CardHeader = styled__default['default'].div(templateObject_1$Y || (templateObject_1$Y = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$Y;

var CardFooter = styled__default['default'].div(templateObject_1$X || (templateObject_1$X = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$X;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$W || (templateObject_1$W = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$W;

var scales$4 = {
    SM: "sm",
    MD: "md",
};

var getScale$2 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$4.SM:
            return "24px";
        case scales$4.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$2, getScale$2, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.card;
});
Checkbox.defaultProps = {
    scale: scales$4.MD,
};
var templateObject_1$V;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$3 = styled__default['default'].div(templateObject_2$y || (templateObject_2$y = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container$3, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$U, templateObject_2$y;

var bunnyFall = styled.keyframes(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled__default['default'].div(templateObject_2$x || (templateObject_2$x = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count)).map(function (_, index) { return (React__default['default'].createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React__default['default'].createElement(Icon$1t, { width: size, height: size }))); });
    return React__default['default'].createElement("div", null, bunnies);
};
var templateObject_1$T, templateObject_2$x;

var StyledFarmCard = styled__default['default'].div(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  position: relative;\n  padding: 24px;\n  border-radius: 16px;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n\n  // &:before {\n  //   content: \"New\";\n  //   display: ", ";\n  //   color: #fff;\n  //   background-color: #1dc872;\n  //   border-radius: 16px;\n  //   position: absolute;\n  //   top: 12px;\n  //   right: 12px;\n  //   font-size: 10px;\n  //   padding: 5px 10px;\n  //   text-align: center;\n  //   min-width: 45px;\n  // }\n"], ["\n  position: relative;\n  padding: 24px;\n  border-radius: 16px;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n\n  // &:before {\n  //   content: \"New\";\n  //   display: ", ";\n  //   color: #fff;\n  //   background-color: #1dc872;\n  //   border-radius: 16px;\n  //   position: absolute;\n  //   top: 12px;\n  //   right: 12px;\n  //   font-size: 10px;\n  //   padding: 5px 10px;\n  //   text-align: center;\n  //   min-width: 45px;\n  // }\n"])), function (_a) {
    var isNew = _a.isNew;
    return (isNew ? "block" : "none");
});
var FarmCard = function (_a) {
    _a.isSoon; var isNew = _a.isNew, children = _a.children;
    return React__default['default'].createElement(StyledFarmCard, { isNew: isNew }, children);
};
FarmCard.defaultProps = {
    isSoon: false,
    isNew: false,
};
var templateObject_1$S;

var StyledFarmCardHead = styled__default['default'].div(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 70px 1fr;\n  column-gap: 8px;\n  margin-bottom: 24px;\n\n  & > img {\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n    position: relative;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n\n    &:nth-child(1) {\n      box-shadow: 0 0 0 3px #fff;\n      z-index: 2;\n    }\n    &:nth-child(2) {\n      margin-left: 30px;\n      z-index: 1;\n    }\n  }\n\n  & > p {\n    align-self: center;\n    grid-column: 2 / 3;\n    font-weight: 900;\n    font-size: 18px;\n    color: ", ";\n\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n\n  & > span {\n    align-self: center;\n    grid-column: 2 / 3;\n    font-size: 12px;\n    color: ", ";\n\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: 70px 1fr;\n  column-gap: 8px;\n  margin-bottom: 24px;\n\n  & > img {\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n    position: relative;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n\n    &:nth-child(1) {\n      box-shadow: 0 0 0 3px #fff;\n      z-index: 2;\n    }\n    &:nth-child(2) {\n      margin-left: 30px;\n      z-index: 1;\n    }\n  }\n\n  & > p {\n    align-self: center;\n    grid-column: 2 / 3;\n    font-weight: 900;\n    font-size: 18px;\n    color: ", ";\n\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n\n  & > span {\n    align-self: center;\n    grid-column: 2 / 3;\n    font-size: 12px;\n    color: ", ";\n\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var FarmCardHead = function (_a) {
    var children = _a.children;
    return React__default['default'].createElement(StyledFarmCardHead, null, children);
};
var templateObject_1$R;

var StyledFarmCardBody = styled__default['default'].div(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  & > p {\n    flex: 1 1;\n    color: ", ";\n    font-size: 20px;\n    font-weight: 900;\n\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n\n  & > div {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  & > p {\n    flex: 1 1;\n    color: ", ";\n    font-size: 20px;\n    font-weight: 900;\n\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n\n  & > div {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var FarmCardBody = function (_a) {
    var children = _a.children;
    return React__default['default'].createElement(StyledFarmCardBody, null, children);
};
var templateObject_1$Q;

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].span(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  display: block;\n  color: ", ";\n  font-size: ", ";\n  vertical-align: middle;\n  font-weight: ", ";\n  line-height: ", ";\n  ", "\n  ", "\n  ", "\n"], ["\n  display: block;\n  color: ", ";\n  font-size: ", ";\n  vertical-align: middle;\n  font-weight: ", ";\n  line-height: ", ";\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var lineHeight = _a.lineHeight;
    return lineHeight || "1.5";
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space, styledSystem.typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$P;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style = (_a$3 = {},
    _a$3[sizes.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$3[sizes.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$3[sizes.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$3[sizes.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$3);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.1;\n  color: #07162d;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.1;\n  color: #07162d;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var normal = _a.normal;
    return (normal ? 400 : 600);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
    normal: false,
};
var templateObject_1$O;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$g = styled__default['default'].div(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$N;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper$g, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$w || (templateObject_2$w = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper$g, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$M, templateObject_2$w;

var scales$3 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBorderColor = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.colors.failure;
    }
    if (isSuccess) {
        return theme.colors.success;
    }
    return theme.colors.inputBorder;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b;
    switch (scale) {
        case scales$3.SM:
            return "32px";
        case scales$3.LG:
            return "48px";
        case scales$3.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled__default['default'].input(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 8px;\n  border-color: ", ";\n  color: ", ";\n  border-width: ", ";\n  border-style: solid;\n  display: block;\n  font-size: 12px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    border-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 8px;\n  border-color: ", ";\n  color: ", ";\n  border-width: ", ";\n  border-style: solid;\n  display: block;\n  font-size: 12px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    border-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return (isLight ? 'transparent' : theme.colors.input);
}, getBorderColor, function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return (isLight ? theme.colors.textSubtle : theme.colors.text);
}, function (_a) {
    var isLight = _a.isLight;
    return (isLight ? '0px' : '1px');
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
Input$1.defaultProps = {
    scale: scales$3.MD,
    isSuccess: false,
    isWarning: false,
    isLight: false,
};
var templateObject_1$L;

var GridLayout$1 = styled__default['default'].div(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$K;

var GridLayout = styled__default['default'](GridLayout$1)(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$J;

var NotificationDotRoot = styled__default['default'].span(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled__default['default'].span(templateObject_2$v || (templateObject_2$v = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React__default['default'].createElement(NotificationDotRoot, null,
        React.Children.map(children, function (child) { return React.cloneElement(child, props); }),
        React__default['default'].createElement(Dot, { show: show })));
};
var templateObject_1$I, templateObject_2$v;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  // &:focus {\n  //   outline: none;\n  //   box-shadow: ", ";\n  // }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  // &:focus {\n  //   outline: none;\n  //   box-shadow: ", ";\n  // }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.card;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$H;

var variants$1 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
};
var scales$1 = {
    MD: "md",
    SM: "sm",
};

var _a$2, _b;
var scaleVariants = (_a$2 = {},
    _a$2[scales$1.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$2[scales$1.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$2);
var styleVariants$1 = (_b = {},
    _b[variants$1.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants$1.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants$1.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants$1.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants$1.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants$1.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants$1.FAILURE] = {
        backgroundColor: "failure",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants$1.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants$1[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: transparent;\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n\n  ", "\n"])), styledSystem.variant({
    prop: "scale",
    variants: scaleVariants,
}), styledSystem.variant({
    variants: styleVariants$1,
}), styledSystem.space, getOutlineStyles);
var templateObject_1$G;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var StyledLink$1 = styled__default['default'](Text)(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return React__default['default'].createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$F;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$1n, { color: "primary", ml: "4px" })));
};

var variants = {
    ROUND: "round",
    FLAT: "flat",
};

var _a$1;
var styleVariants = (_a$1 = {},
    _a$1[variants.ROUND] = {
        borderRadius: "32px",
    },
    _a$1[variants.FLAT] = {
        borderRadius: 0,
    },
    _a$1);

var Bar = styled__default['default'].div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$u || (templateObject_2$u = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ",
    "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants.FLAT ? "0" : "32px");
}, styledSystem.variant({
    variants: styleVariants,
}), styledSystem.space);
var templateObject_1$E, templateObject_2$u;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$D;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants.ROUND : _b, _c = _a.primaryStep, primaryStep = _c === void 0 ? 0 : _c, _d = _a.secondaryStep, secondaryStep = _d === void 0 ? null : _d, _e = _a.showProgressBunny, showProgressBunny = _e === void 0 ? false : _e;
    return (React__default['default'].createElement(StyledProgress, { variant: variant },
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$1g, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var bunnyHeadMain = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20y%3D%2218%22%20width%3D%2217%22%20height%3D%2210%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M7.50675%2023.7056C6.14677%2025.0656%207.73758%2027.2292%209.75419%2029.2458C11.7708%2031.2624%2013.9344%2032.8532%2015.2944%2031.4933C16.6543%2030.1333%2015.9641%2027.0691%2013.9475%2025.0525C11.9309%2023.0359%208.86673%2022.3457%207.50675%2023.7056Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M13.507%2021.706C12.1463%2023.0666%2013.7379%2025.2313%2015.7555%2027.2489C17.7731%2029.2665%2019.9378%2030.8581%2021.2984%2029.4974C22.6591%2028.1368%2021.9685%2025.0711%2019.9509%2023.0535C17.9333%2021.0359%2014.8676%2020.3453%2013.507%2021.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.7694%205.63421C11.8457%206.02664%2011.9158%206.4375%2011.9836%206.85716C11.6151%206.85766%2011.2482%206.87522%2010.8839%206.90895C10.6029%206.29464%2010.2694%205.67199%209.88441%205.05277C7.39613%201.05079%205.06199%200.901096%202.98861%202.01265C0.915239%203.12421%200.810677%205.89597%203.28297%208.59188C3.57049%208.90541%203.86254%209.23841%204.15744%209.58036C1.66027%2011.5156%200%2014.291%200%2017.2695C0%2022.8292%205.78518%2024%2012%2024C18.2148%2024%2024%2022.8292%2024%2017.2695C24%2013.8488%2021.8101%2010.6958%2018.6776%208.77602C18.8852%207.81022%2019%206.74856%2019%205.63421C19%201.17171%2017.159%200%2014.888%200C12.6171%200%2011.1155%202.27116%2011.7694%205.63421Z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2212%22%20y1%3D%220%22%20x2%3D%2212%22%20y2%3D%2224%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyHeadMax = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20y%3D%2218%22%20width%3D%2217%22%20height%3D%2210%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M7.50675%2023.7056C6.14677%2025.0656%207.73758%2027.2292%209.75419%2029.2458C11.7708%2031.2624%2013.9344%2032.8532%2015.2944%2031.4933C16.6543%2030.1333%2015.9641%2027.0691%2013.9475%2025.0525C11.9309%2023.0359%208.86673%2022.3457%207.50675%2023.7056Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M13.507%2021.706C12.1463%2023.0666%2013.7379%2025.2313%2015.7555%2027.2489C17.7731%2029.2665%2019.9378%2030.8581%2021.2984%2029.4974C22.6591%2028.1368%2021.9685%2025.0711%2019.9509%2023.0535C17.9333%2021.0359%2014.8676%2020.3453%2013.507%2021.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.146%205.75159C12.2105%206.10896%2012.2703%206.48131%2012.3281%206.86164C12.2189%206.85865%2012.1095%206.85714%2012%206.85714C11.3803%206.85714%2010.7648%206.90539%2010.159%206.99779C9.87904%206.41458%209.55472%205.82246%209.18725%205.23145C6.69897%201.22947%204.53826%200.986793%202.67882%201.98366C0.819381%202.98052%200.856278%205.67644%203.26696%208.40538C3.58076%208.76061%203.90097%209.13983%204.2247%209.52859C1.69013%2011.4659%200%2014.2644%200%2017.2695C0%2022.8292%205.78518%2024%2012%2024C18.2148%2024%2024%2022.8292%2024%2017.2695C24%2013.8658%2021.8318%2010.7272%2018.7243%208.80476C18.9022%207.86044%2019%206.83019%2019%205.75159C19%201.19612%2017.2549%200%2015.1022%200C12.9495%200%2011.5261%202.31847%2012.146%205.75159Z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20d%3D%22M9.50467%2015.0634C8.94352%2013.4456%206.79685%2013.4456%206.08131%2015.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M18.8894%2015.0634C18.3283%2013.4456%2016.1816%2013.4456%2015.4661%2015.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M11.4505%2019.0787C11.4505%2020.5097%2013.955%2020.5097%2013.955%2019.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2212%22%20y1%3D%220%22%20x2%3D%2212%22%20y2%3D%2224%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var SliderContainer = styled__default['default'](Box)(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  position: relative;\n  height: 48px;\n"], ["\n  position: relative;\n  height: 48px;\n"])));
var SliderLabel = styled__default['default'].label(templateObject_2$t || (templateObject_2$t = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  margin-left: 16px; // offset the bunny butt width\n  left: calc(", "%);\n"], ["\n  position: absolute;\n  bottom: 0;\n  margin-left: 16px; // offset the bunny butt width\n  left: calc(", "%);\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
styled__default['default'].img(templateObject_3$h || (templateObject_3$h = __makeTemplateObject(["\n  position: absolute;\n"], ["\n  position: absolute;\n"])));
var BunnySlider = styled__default['default'].div(templateObject_4$c || (templateObject_4$c = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: 100%;\n"], ["\n  position: absolute;\n  left: 14px;\n  width: 100%;\n"])));
var StyledInput = styled__default['default'].input(templateObject_5$a || (templateObject_5$a = __makeTemplateObject(["\n  height: 32px;\n  position: relative;\n  cursor: pointer;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transition: 0.1s all;\n    transform: translate(-2px, -2px);\n    // custom moz reset\n    background-color: transparent;\n    border: 0;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-ms-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n"], ["\n  height: 32px;\n  position: relative;\n  cursor: pointer;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transition: 0.1s all;\n    transform: translate(-2px, -2px);\n    // custom moz reset\n    background-color: transparent;\n    border: 0;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-ms-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n"])), function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
}, function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
}, function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
});
var BarBackground = styled__default['default'].div(templateObject_6$7 || (templateObject_6$7 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  top: 18px;\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  top: 18px;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
});
var BarProgress = styled__default['default'].div(templateObject_7$7 || (templateObject_7$7 = __makeTemplateObject(["\n  position: absolute;\n  width: ", ";\n  height: 10px;\n  top: 18px;\n\n  background: ", ";\n"], ["\n  position: absolute;\n  width: ", ";\n  height: 10px;\n  top: 18px;\n\n  background: ", ";\n"])), function (_a) {
    var progress = _a.progress, isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? "calc(100% - 16px)" : progress + "%");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var templateObject_1$C, templateObject_2$t, templateObject_3$h, templateObject_4$c, templateObject_5$a, templateObject_6$7, templateObject_7$7;

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 32", width: 15, height: 32 }, props),
        React__default['default'].createElement("path", { d: "M9.58803 20.8649C7.72935 21.3629 8.02539 24.0334 8.76388 26.7895C9.50238 29.5456 10.5812 32.0062 12.4399 31.5082C14.2986 31.0102 15.2334 28.0099 14.4949 25.2538C13.7564 22.4978 11.4467 20.3669 9.58803 20.8649Z", fill: "#0098A1" }),
        React__default['default'].createElement("path", { d: "M1 24.4516C1 20.8885 3.88849 18 7.45161 18H15V28H4.54839C2.58867 28 1 26.4113 1 24.4516Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M6.11115 17.2246C6.79693 18.4124 5.77784 19.3343 4.52793 20.0559C3.27802 20.7776 1.97011 21.1992 1.28433 20.0114C0.598546 18.8236 1.1635 17.1151 2.41341 16.3935C3.66332 15.6718 5.42537 16.0368 6.11115 17.2246Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M1.64665 23.6601C0.285995 25.0207 1.87759 27.1854 3.89519 29.203C5.91279 31.2206 8.07743 32.8122 9.43808 31.4515C10.7987 30.0909 10.1082 27.0252 8.09058 25.0076C6.07298 22.99 3.0073 22.2994 1.64665 23.6601Z", fill: "#1FC7D4" })));
};

// We need to adjust the offset as the percentage increases, as 100% really is 100% - label width. The number 10 is arbitrary, but seems to work...
var MOVING_SLIDER_LABEL_OFFSET_FACTOR = 10;
var Slider = function (_a) {
    var min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, props = __rest(_a, ["min", "max", "value", "onValueChanged", "valueLabel"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseInt(target.value, 10));
    };
    var progressPercentage = (value / max) * 100;
    var isCurrentValueMaxValue = value === max;
    var labelOffset = progressPercentage - progressPercentage / MOVING_SLIDER_LABEL_OFFSET_FACTOR;
    return (React__default['default'].createElement(SliderContainer, __assign({}, props),
        React__default['default'].createElement(Icon$P, { style: { position: "absolute" } }),
        React__default['default'].createElement(BunnySlider, null,
            React__default['default'].createElement(BarBackground, null),
            React__default['default'].createElement(BarProgress, { isCurrentValueMaxValue: isCurrentValueMaxValue, progress: progressPercentage }),
            React__default['default'].createElement(StyledInput, { type: "range", min: min, max: max, value: value, onChange: handleChange, isCurrentValueMaxValue: isCurrentValueMaxValue })),
        valueLabel && React__default['default'].createElement(SliderLabel, { progress: labelOffset }, valueLabel)));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 256 256" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z", fill: "#464649" }),
        React__default['default'].createElement("path", { d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z", fill: "#464649" }),
        React__default['default'].createElement("path", { d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z", fill: "#979797" }),
        React__default['default'].createElement("path", { d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z", fill: "#737373" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z", fill: "#606063" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("svg", { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z", fill: "#FEDC90", stroke: "#D1884F", strokeWidth: "2.89134" }),
            React__default['default'].createElement("path", { d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z", fill: "#D1884F", stroke: "#633001", strokeWidth: "2.89134" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z", fill: "#633001" }))));
};

var rotate$1 = styled.keyframes(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = styled.keyframes(templateObject_2$s || (templateObject_2$s = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$2 = styled__default['default'].div(templateObject_3$g || (templateObject_3$g = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default['default'](Icon$N)(templateObject_4$b || (templateObject_4$b = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var FloatingPanIcon = styled__default['default'](Icon$O)(templateObject_5$9 || (templateObject_5$9 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" }),
        React__default['default'].createElement(FloatingPanIcon, { width: size + "px" })));
};
var templateObject_1$B, templateObject_2$s, templateObject_3$g, templateObject_4$b, templateObject_5$9;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$r || (templateObject_2$r = __makeTemplateObject(["\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 0.3;\n  }\n  100% {\n    opacity: 0.6;\n  }\n"], ["\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 0.3;\n  }\n  100% {\n    opacity: 0.6;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  // background-color: ", ";\n  background-color: ", ";\n  opacity: 0.16;\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  // background-color: ", ";\n  background-color: ", ";\n  opacity: 0.16;\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    _a.theme; var isDark = _a.isDark;
    return (isDark ? "#749BD8" : "#708DB7");
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$A, templateObject_2$r, templateObject_3$f, templateObject_4$a, templateObject_5$8;

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "0",
        handleTop: "-3px",
        checkedLeft: "calc(100% - 16px)",
        toggleHeight: "10px",
        toggleWidth: "32px",
    },
    md: {
        handleHeight: "24px",
        handleWidth: "24px",
        handleLeft: "0",
        handleTop: "-4px",
        checkedLeft: "calc(100% - 24px)",
        toggleHeight: "16px",
        toggleWidth: "40px",
    },
};
var getScale = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$4.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled__default['default'].div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return (checked ? theme.colors.success : theme.toggle.handleBackground);
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled__default['default'].input(templateObject_2$q || (templateObject_2$q = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n"])), Handle, getScale("checkedLeft"));
var StyledToggle = styled__default['default'].div(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n  align-items: center;\n  //background-color: ", ";\n  background-color: #E5EAF2;\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  //background-color: ", ";\n  background-color: #E5EAF2;\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$z, templateObject_2$q, templateObject_3$e;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked, scale: scale },
        React__default['default'].createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, { checked: checked, scale: scale })));
};
Toggle.defaultProps = {
    scale: scales.MD,
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArray([], action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var getBadgeBg = function (_a) {
    var _b = _a.badgeType, badgeType = _b === void 0 ? "light" : _b, theme = _a.theme;
    if (badgeType === "light") {
        return theme.colors.tertiary;
    }
    if (badgeType === "dark") {
        return theme.colors.dropDown;
    }
    if (badgeType === "new") {
        return theme.colors.success;
    }
    if (badgeType === "hot") {
        return theme.colors.failure;
    }
    if (badgeType === "primary") {
        return theme.colors.primary;
    }
    if (badgeType === "warning") {
        return theme.colors.warning;
    }
    if (badgeType === "boost") {
        return theme.colors.boost;
    }
    return theme.colors.inputBorder;
};
var getBadgeColor = function (_a) {
    var _b = _a.badgeType, badgeType = _b === void 0 ? "light" : _b, theme = _a.theme;
    if (badgeType === "light" || badgeType === "dark") {
        return theme.colors.text;
    }
    if (badgeType === "new" || badgeType === "primary" || badgeType === "hot" || badgeType === "boost") {
        return theme.colors.contrast;
    }
    if (badgeType === "warning") {
        return theme.colors.background;
    }
    return theme.colors.contrast;
};
var Wrapper$f = styled__default['default'].div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: inline-flex;\n  padding: ", ";\n  background: ", ";\n  color: ", ";\n  border-radius: 16px;\n"], ["\n  display: inline-flex;\n  padding: ", ";\n  background: ", ";\n  color: ", ";\n  border-radius: 16px;\n"])), function (_a) {
    var isMenu = _a.isMenu;
    return isMenu ? '2px 8px' : '4px 12px';
}, getBadgeBg, getBadgeColor);
var StyledText$1 = styled__default['default'](Text)(templateObject_2$p || (templateObject_2$p = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n"])), function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "10px";
}, function (_a) {
    var fontWeight = _a.fontWeight;
    return fontWeight || "600";
}, function (_a) {
    var lineHeight = _a.lineHeight;
    return lineHeight || '1.5';
});
var Badge = function (_a) {
    var children = _a.children, badgeType = _a.badgeType, fontSize = _a.fontSize, fontWeight = _a.fontWeight, isMenu = _a.isMenu, lineHeight = _a.lineHeight;
    return (React__default['default'].createElement(Wrapper$f, { badgeType: badgeType, isMenu: isMenu },
        React__default['default'].createElement(StyledText$1, { fontSize: fontSize, lineHeight: lineHeight, fontWeight: fontWeight, color: "inherit" }, children)));
};
var templateObject_1$y, templateObject_2$p;

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
    xll: 1200,
    xxl: 1400,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    xll: "@media screen and (min-width: " + breakpointMap.xll + "px)",
    xxl: "@media screen and (min-width: " + breakpointMap.xxl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    React.useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var StyledModal$1 = styled__default['default'].div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  background-color: #fff;\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"], ["\n  background-color: #fff;\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalHeader = styled__default['default'].div(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 24px 16px;\n\n  ", " {\n    padding: 32px 32px 24px;\n  }\n  \n  .closeModal {\n    width: 24px;\n    height: 24px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 24px 16px;\n\n  ", " {\n    padding: 32px 32px 24px;\n  }\n  \n  .closeModal {\n    width: 24px;\n    height: 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalTitle = styled__default['default'](Flex)(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var ModalBody$1 = styled__default['default'].div(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n  padding: 0 16px 24px;\n  \n  ", " {\n    padding: 0 32px 32px;\n  }\n"], ["\n  padding: 0 16px 24px;\n  \n  ", " {\n    padding: 0 32px 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b;
    return (React__default['default'].createElement(StyledModal$1, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$1Q, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", className: "closeModal", scale: "sm", ml: "12px", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$1z, { width: "24px", color: "card" })))),
        React__default['default'].createElement(ModalBody$1, null, children)));
};
var templateObject_1$x, templateObject_2$o, templateObject_3$d, templateObject_4$9;

var StyledModal = styled__default['default'].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  position: relative;\n  top: 0;\n  left: 0;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  position: relative;\n  top: 0;\n  left: 0;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var StyledIconButton = styled__default['default'](IconButton)(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 24px;\n  left: calc(100% - 40px);\n  \n  ", " {\n    top: 32px;\n    left: calc(100% - 56px);\n  }\n"], ["\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 24px;\n  left: calc(100% - 40px);\n  \n  ", " {\n    top: 32px;\n    left: calc(100% - 56px);\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalBody = styled__default['default'].div(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  padding: 0 16px 24px;\n  \n  ", " {\n    padding: 0 32px 32px;\n  }\n"], ["\n  padding: 0 16px 24px;\n  \n  ", " {\n    padding: 0 32px 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Background = styled__default['default'].img(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var ModalWithBackground = function (_a) {
    var onDismiss = _a.onDismiss, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, backBtnColor = _a.backBtnColor, background = _a.background;
    return (React__default['default'].createElement(StyledModal, null,
        !hideCloseButton && (React__default['default'].createElement(StyledIconButton, { variant: "text", className: "closeModal", scale: "sm", onClick: onDismiss, "aria-label": "Close the dialog" },
            React__default['default'].createElement(Icon$1z, { width: "24px", color: backBtnColor !== null && backBtnColor !== void 0 ? backBtnColor : "card" }))),
        React__default['default'].createElement(Background, { src: background, alt: 'image' }),
        React__default['default'].createElement(ModalBody, null, children)));
};
var templateObject_1$w, templateObject_2$n, templateObject_3$c, templateObject_4$8;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(10, 22, 43);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(10, 22, 43);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.55 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled__default['default'].div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n\n  ", " {\n    justify-content: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n\n  ", " {\n    justify-content: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$u;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.5358 18.4866C19.2402 18.4866 19.8112 17.9156 19.8112 17.2113C19.8112 16.5069 19.2402 15.9359 18.5358 15.9359C17.8315 15.9359 17.2605 16.5069 17.2605 17.2113C17.2605 17.9156 17.8315 18.4866 18.5358 18.4866ZM18.5358 19.8682C20.0032 19.8682 21.1928 18.6786 21.1928 17.2113C21.1928 15.7439 20.0032 14.5543 18.5358 14.5543C17.0685 14.5543 15.8789 15.7439 15.8789 17.2113C15.8789 18.6786 17.0685 19.8682 18.5358 19.8682Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.31384 17.7426C7.48774 17.7426 8.43938 16.791 8.43938 15.6171C8.43938 14.4432 7.48774 13.4915 6.31384 13.4915C5.13993 13.4915 4.18829 14.4432 4.18829 15.6171C4.18829 16.791 5.13993 17.7426 6.31384 17.7426ZM6.31384 19.8681C8.66165 19.8681 10.5649 17.9649 10.5649 15.6171C10.5649 13.2692 8.66165 11.366 6.31384 11.366C3.96602 11.366 2.06274 13.2692 2.06274 15.6171C2.06274 17.9649 3.96602 19.8681 6.31384 19.8681Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.2103 7.49462C13.3866 7.24265 13.6854 7.10558 13.9914 7.13619L18.1624 7.55329C18.9773 7.63478 19.5979 8.32054 19.5979 9.13954V13.2399C19.2782 13.1598 18.9436 13.1173 18.599 13.1173C16.7044 13.1173 15.1099 14.4024 14.6397 16.1485H12.0741C12.0904 15.9729 12.0987 15.7949 12.0987 15.6149C12.0987 13.3921 10.8264 11.4664 8.97021 10.5266V10.4084L10.9711 9.96377C11.3602 9.87731 11.7027 9.64826 11.9313 9.32176L13.2103 7.49462ZM17.1109 15.8073L17.9979 15.2568C17.6555 15.3617 17.3512 15.5539 17.1109 15.8073Z" }),
        React__default['default'].createElement("path", { d: "M3.12549 8.70906C3.12549 8.41558 3.3634 8 3.65687 8H6.31381C6.90076 8 7.37658 8.65349 7.37658 9.24045V9.77183H3.65687C3.3634 9.77183 3.12549 9.53392 3.12549 9.24045V8.70906Z" }),
        React__default['default'].createElement("path", { d: "M9.57983 7.32788L12.7196 4.00004L13.4148 4.65599L10.2751 7.98383L9.57983 7.32788Z" }),
        React__default['default'].createElement("path", { d: "M12.166 5.97961L14.4851 8.16761L13.8287 8.86333L11.5096 6.67533L12.166 5.97961Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.6566 3.3244C11.8493 3.14234 12.1507 3.14234 12.3434 3.3244L19.7463 10.3184C20.0751 10.629 19.8553 11.1818 19.4029 11.1818H4.59706C4.14473 11.1818 3.92489 10.629 4.25369 10.3184L11.6566 3.3244Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.13647 10.2727C5.86033 10.2727 5.63647 10.4966 5.63647 10.7727V18.8636C5.63647 19.1398 5.86033 19.3636 6.13647 19.3636L10.1819 19.3636V13H13.8182V19.3636L17.8637 19.3636C18.1399 19.3636 18.3637 19.1398 18.3637 18.8636V10.7727C18.3637 10.4966 18.1399 10.2727 17.8637 10.2727H6.13647Z" })));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM14 10L10.1663 10.3345L10.0562 10.7784L10.659 10.8744C11.0507 10.9559 11.1289 11.0791 11.0423 11.4203L10.0562 15.4631C9.7981 16.5085 10.4597 17 11.3987 17C12.1267 17 13.483 16.7065 13.8664 16.3031L13.9841 15.8182C13.7184 16.0236 13.3267 16.1057 13.0686 16.1057C12.7004 16.1057 12.5675 15.8805 12.6617 15.4837L13.3308 12.7418L14 10ZM12.9035 9.4C13.6767 9.4 14.3035 8.7732 14.3035 8C14.3035 7.2268 13.6767 6.59998 12.9035 6.59998C12.1303 6.59998 11.5035 7.2268 11.5035 8C11.5035 8.7732 12.1303 9.4 12.9035 9.4Z" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo$3 = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    var textColor = isDark ? "#FFFFFF" : "#000000";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 122 34" }, props),
        React__default['default'].createElement("path", { d: "M99.0005 12.5965C98.6537 11.775 98.0759 10.9536 97.3824 10.4842C96.5734 9.8974 95.6488 9.428 94.3775 9.07594C92.7594 8.60654 90.4479 8.48918 87.7897 8.60654C87.0963 8.60654 86.4028 8.72389 85.7094 8.72389C85.0159 8.84124 84.3225 8.84124 83.629 8.95859C83.0512 9.07594 82.4733 9.07594 82.011 9.19329V13.6526C82.4733 13.5353 83.0512 13.4179 83.5135 13.3006C84.2069 13.1832 84.9004 13.0659 85.5938 12.9485C86.2873 12.8312 86.9807 12.8312 87.6741 12.7138C89.6389 12.5965 91.257 12.5965 92.1816 12.8312C92.875 12.9485 93.4529 13.1832 93.7996 13.4179C94.1463 13.6526 94.3775 14.0047 94.493 14.4741C94.6086 14.8262 94.7242 15.1782 94.7242 15.6476V15.9997L94.3775 15.8823C92.875 15.4129 91.0258 15.2956 88.9455 15.2956C87.2119 15.2956 85.825 15.4129 84.6692 15.6476C83.5135 15.8823 82.5889 16.2344 81.8954 16.7038C81.202 17.1732 80.7397 17.6426 80.5085 18.2294C80.2774 18.8161 80.1618 19.4029 80.1618 20.107V20.459C80.1618 21.1631 80.2774 21.8673 80.6241 22.454C80.8553 23.0408 81.3176 23.6275 82.011 24.2143C82.7045 24.6837 83.629 25.1531 84.7848 25.3878C85.9405 25.7399 87.443 25.8572 89.1766 25.8572C90.6791 25.8572 92.066 25.7399 93.2217 25.3878C94.3775 25.1531 94.6086 25.0357 95.6488 24.5663C95.9955 24.3316 96.9201 24.2143 97.498 24.449L98.5382 25.0357H99.5783V15.1782C99.5783 14.5915 99.3472 13.5353 99.0005 12.5965ZM94.7242 21.7499H94.493C92.9906 22.2193 91.3725 22.454 89.5233 22.454C88.4832 22.454 87.5586 22.454 86.9807 22.3367C86.4028 22.2193 85.9405 22.2193 85.5938 21.9846C85.2471 21.8673 85.0159 21.6325 84.9004 21.3978C84.7848 21.1631 84.7848 20.9284 84.7848 20.6937C84.7848 20.459 84.7848 20.3417 84.9004 20.107C85.0159 19.8723 85.2471 19.6376 85.4782 19.5202C85.7094 19.4029 86.1717 19.1682 86.7496 19.1682C87.3274 19.0508 88.1365 19.0508 89.061 19.0508C90.1012 19.0508 91.0258 19.0508 91.9504 19.1682C92.7594 19.2855 93.5684 19.4029 94.3775 19.6376H94.6086V21.7499H94.7242Z", fill: textColor }),
        React__default['default'].createElement("path", { d: "M18.2139 10.7189C17.5205 10.0148 16.5959 9.42807 15.4402 8.95866C14.2844 8.48925 12.7819 8.25455 10.9328 8.25455C10.0082 8.25455 9.08356 8.3719 8.27454 8.48926C7.46552 8.60661 6.6565 8.84131 5.84748 9.07601L5.50076 9.19336V2.85639L1.6868 0.626709H0.762207V17.76C0.762207 18.9335 0.877783 19.9897 1.22451 20.9285C1.45566 21.8673 2.03353 22.6888 2.72697 23.5102C3.42042 24.2143 4.34501 24.8011 5.50076 25.2705C6.6565 25.7399 8.15897 25.9746 10.0082 25.9746H10.9328C12.7819 25.9746 14.2844 25.7399 15.4402 25.2705C16.5959 24.9185 17.6361 24.3317 18.3295 23.5102C19.023 22.8061 19.4853 21.9847 19.832 20.9285C20.0631 19.8723 20.2943 18.8162 20.2943 17.76V16.4692C20.2943 15.2956 20.1787 14.2395 19.832 13.3007C19.4853 12.2445 18.9074 11.423 18.2139 10.7189ZM15.3246 18.6988C15.3246 19.2856 15.0934 19.755 14.7467 20.2244C14.4 20.5765 13.9377 20.9285 13.2442 21.2806C12.5508 21.5153 11.6262 21.6326 10.4705 21.6326C9.31471 21.6326 8.39012 21.5153 7.69667 21.2806C7.00322 21.0459 6.54093 20.6938 6.1942 20.2244C5.84748 19.755 5.73191 19.2856 5.61633 18.6988C5.61633 18.2294 5.50076 17.6427 5.50076 17.0559V13.418H5.61633C6.30978 13.1833 7.1188 12.9486 7.92782 12.8313C8.73684 12.7139 9.54586 12.5966 10.586 12.5966C11.7418 12.5966 12.6664 12.7139 13.2442 12.9486C13.8221 13.1833 14.4 13.5354 14.6311 13.8874C14.9779 14.3568 15.0934 14.8262 15.209 15.413C15.209 15.8824 15.3246 16.4692 15.3246 17.0559C15.3246 17.6427 15.3246 18.2294 15.3246 18.6988Z", fill: textColor }),
        React__default['default'].createElement("path", { d: "M25.9573 0.626709H25.7261C24.686 0.626709 23.9925 0.861412 23.6458 1.21347C23.2991 1.68287 23.0679 2.15228 23.0679 2.85639V3.20844C23.0679 3.7952 23.2991 4.38195 23.6458 4.85136C23.9925 5.32077 24.686 5.43812 25.7261 5.43812H25.9573C26.9975 5.43812 27.6909 5.20341 28.0376 4.85136C28.3844 4.38195 28.4999 3.91255 28.4999 3.20844V2.85639C28.4999 2.26963 28.2688 1.68287 27.9221 1.21347C27.6909 0.861412 26.9975 0.626709 25.9573 0.626709Z", fill: textColor }),
        React__default['default'].createElement("path", { d: "M23.4149 8.95874V25.2706H28.269V11.1884L24.455 8.95874H23.4149Z", fill: textColor }),
        React__default['default'].createElement("path", { d: "M47.2231 16.8213C46.7608 16.4692 46.1829 16.1172 45.6051 15.8825C45.0272 15.6478 44.3337 15.5304 43.6403 15.4131C43.0624 15.2957 42.369 15.1784 41.7911 15.1784C41.2132 15.1784 40.6353 15.1784 40.2886 15.061C38.9017 15.061 37.9771 14.9437 37.3993 14.8263C36.4747 14.5916 36.3591 14.1222 36.3591 13.6528C36.3591 13.4181 36.3591 13.3008 36.4747 13.1834C36.5903 13.066 36.7058 12.8313 37.0525 12.714C37.2837 12.5966 37.746 12.4793 38.2083 12.4793C38.6706 12.3619 39.364 12.3619 40.2886 12.3619C41.6755 12.3619 43.0624 12.4793 44.3337 12.5966C45.4895 12.714 46.7608 12.9487 48.0321 13.1834V9.0761C46.9919 8.8414 45.9518 8.60669 44.796 8.48934C43.6403 8.37199 42.369 8.25464 41.2132 8.25464H40.0575C38.3239 8.25464 36.937 8.37199 35.7812 8.72405C34.7411 8.95875 33.8165 9.42815 33.123 9.89756C32.4296 10.367 31.9673 10.9537 31.7361 11.5405C31.505 12.1272 31.3894 12.8313 31.3894 13.5355V13.8875C31.3894 14.709 31.505 15.4131 31.8517 15.9998C32.1984 16.5866 32.5451 17.056 33.0074 17.4081C33.4697 17.7601 34.0476 18.1122 34.6255 18.3469C35.2034 18.5816 35.8968 18.6989 36.4747 18.8163C37.1681 18.9336 37.746 19.051 38.3239 19.051C38.9017 19.051 39.4796 19.1683 39.9419 19.1683C41.3288 19.1683 42.2534 19.2857 42.8313 19.403C43.7559 19.5204 43.987 20.1071 43.987 20.5765C43.987 20.6939 43.987 20.9286 43.8714 21.0459C43.7559 21.1633 43.6403 21.398 43.2936 21.5154C43.0624 21.6327 42.6001 21.7501 42.1378 21.7501C41.6755 21.8674 40.9821 21.8674 40.1731 21.8674C38.7862 21.8674 37.1681 21.7501 35.6657 21.6327C34.2788 21.5154 32.7763 21.2807 31.505 20.9286V25.0359C32.7763 25.2706 33.932 25.5053 35.2034 25.6227C36.4747 25.74 37.9771 25.8574 39.364 25.8574H40.2886C42.0222 25.8574 43.4091 25.74 44.4493 25.388C45.6051 25.1532 46.4141 24.6838 47.1075 24.2144C47.801 23.745 48.1477 23.1583 48.4944 22.5715C48.7256 21.9848 48.9567 21.2807 48.9567 20.5765V20.2245C48.9567 19.403 48.8411 18.6989 48.4944 18.1122C48.0321 17.6428 47.6854 17.1734 47.2231 16.8213Z", fill: textColor }),
        React__default['default'].createElement("path", { d: "M70.8002 19.6377L66.6395 8.95874H62.9411L58.896 19.6377L54.7354 8.95874H50.4591V10.0149L56.7001 25.2706H60.9764L64.7903 15.4131L68.6043 25.2706H72.8805L79.2371 10.0149V8.95874H74.8453L70.8002 19.6377Z", fill: textColor }),
        React__default['default'].createElement("path", { d: "M121.422 13.5354C121.191 12.5966 120.613 11.7751 119.919 10.9536C119.226 10.2495 118.301 9.66277 117.03 9.19337C115.874 8.72396 114.372 8.48926 112.523 8.48926H111.713C109.864 8.48926 108.362 8.72396 107.206 9.19337C106.05 9.54542 105.126 10.1322 104.432 10.9536C103.739 11.6577 103.277 12.4792 102.93 13.5354C102.699 14.5915 102.468 15.6477 102.468 16.7039V33.8372H103.508L107.322 31.6075V25.2705L107.668 25.3879C108.477 25.6226 109.171 25.8573 110.095 25.9746C110.904 26.092 111.829 26.2093 112.754 26.2093C114.603 26.2093 116.105 25.9746 117.261 25.5052C118.417 25.0358 119.341 24.5664 120.035 23.7449C120.728 23.0408 121.191 22.102 121.537 21.1632C121.768 20.2244 122 19.1682 122 17.9947V16.7039C121.884 15.6477 121.768 14.5915 121.422 13.5354ZM117.03 19.0509C117.03 19.6376 116.799 20.1071 116.452 20.5765C116.105 21.0459 115.643 21.2806 115.065 21.5153C114.487 21.75 113.563 21.8673 112.407 21.8673C111.482 21.8673 110.558 21.75 109.749 21.6326C108.94 21.5153 108.131 21.2806 107.437 21.0459H107.322V17.408C107.322 16.8212 107.322 16.3518 107.437 15.765C107.437 15.1783 107.668 14.7089 108.015 14.2395C108.362 13.7701 108.824 13.5354 109.518 13.1833C110.211 12.9486 111.136 12.8313 112.291 12.8313C113.447 12.8313 114.372 12.9486 115.065 13.1833C115.759 13.418 116.221 13.7701 116.568 14.2395C116.914 14.7089 117.145 15.1783 117.145 15.765C117.145 16.2345 117.261 16.8212 117.261 17.408C117.03 17.9947 117.03 18.5815 117.03 19.0509Z", fill: textColor })));
};
var LogoWithText = React__default['default'].memo(Logo$3, function (prev, next) { return prev.isDark === next.isDark; });

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 5C4.44772 5 4 5.44772 4 6V17C4 17.5523 4.44772 18 5 18H17.7455C18.1062 18 18.4389 17.8058 18.6163 17.4917L21.7223 11.9917C21.8946 11.6866 21.8946 11.3134 21.7223 11.0083L18.6163 5.50826C18.4389 5.19421 18.1062 5 17.7455 5H5ZM7.75 10C7.05964 10 6.5 10.5596 6.5 11.25C6.5 11.9404 7.05964 12.5 7.75 12.5C8.44036 12.5 9 11.9404 9 11.25C9 10.5596 8.44036 10 7.75 10ZM11.5 11.25C11.5 10.5596 12.0596 10 12.75 10C13.4404 10 14 10.5596 14 11.25C14 11.9404 13.4404 12.5 12.75 12.5C12.0596 12.5 11.5 11.9404 11.5 11.25ZM17.75 10C17.0596 10 16.5 10.5596 16.5 11.25C16.5 11.9404 17.0596 12.5 17.75 12.5C18.4404 12.5 19 11.9404 19 11.25C19 10.5596 18.4404 10 17.75 10Z" })));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M20.9822 5.07062C20.8756 6.63229 18.0143 18.2999 18.0143 18.2999C18.0143 18.2999 17.8366 18.982 17.2146 19C17.0013 19 16.717 18.982 16.3971 18.6769C15.7395 18.1204 14.2467 17.0434 12.8427 16.0562C12.7894 16.11 12.7361 16.1639 12.665 16.2177C12.3451 16.5049 11.8653 16.9178 11.3499 17.4204C11.1544 17.5999 10.9411 17.7973 10.7279 18.0127L10.7101 18.0307C10.5857 18.1563 10.4791 18.2461 10.3902 18.3179C9.69709 18.8923 9.62601 18.4076 9.62601 18.1563L9.99922 14.0457V14.0098L10.017 13.9739C10.0348 13.9201 10.0703 13.9021 10.0703 13.9021C10.0703 13.9021 17.339 7.36825 17.5345 6.66819C17.5523 6.63229 17.4989 6.59639 17.4101 6.63229C16.9302 6.79385 8.55969 12.143 7.63555 12.7354C7.58224 12.7713 7.42229 12.7533 7.42229 12.7533L3.35254 11.4071C3.35254 11.4071 2.8727 11.2096 3.03264 10.7608C3.06819 10.6711 3.1215 10.5813 3.31699 10.4557C4.22336 9.80948 19.987 4.08336 19.987 4.08336C19.987 4.08336 20.4313 3.93976 20.6979 4.02951C20.8223 4.08336 20.8934 4.13721 20.9645 4.31671C20.9822 4.38851 21 4.53212 21 4.69367C21 4.78342 20.9822 4.89112 20.9822 5.07062Z" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6173 4.74263C16.261 4.20784 15.48 4.10541 15.0033 4.5211C13.7386 5.62388 11.3953 7.56262 9.43732 8.59499C7.56606 9.58164 4.91917 10.431 3.38138 10.8828C2.75176 11.0677 2.46818 11.7616 2.80723 12.3134L3.8898 14.0754C4.16495 13.7472 4.57798 13.5386 5.03974 13.5386C5.86817 13.5386 6.53974 14.2101 6.53974 15.0386C6.53974 15.7502 6.04424 16.346 5.37946 16.4999L6.64943 18.5669C6.86213 18.9131 7.2702 19.1087 7.67914 19.0414C9.18679 18.7936 12.9209 18.0137 15.9219 16.0206C18.6184 14.2298 20.1025 12.8081 20.7632 12.099C21.0333 11.8091 21.0443 11.3863 20.8198 11.0495L19.3497 8.84326C19.0746 9.16934 18.6629 9.37647 18.2028 9.37647C17.3744 9.37647 16.7028 8.7049 16.7028 7.87647C16.7028 7.20514 17.1438 6.63682 17.752 6.44541L16.6173 4.74263ZM12.259 15.3765C13.9158 15.3765 15.259 14.0333 15.259 12.3765C15.259 10.7196 13.9158 9.37647 12.259 9.37647C10.6021 9.37647 9.25898 10.7196 9.25898 12.3765C9.25898 14.0333 10.6021 15.3765 12.259 15.3765Z" })));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M7 6H19V9H7V6Z" }),
        React__default['default'].createElement("path", { d: "M3.17317 7.51079C3.07444 7.39497 3.07808 7.22356 3.18164 7.11203L7 3L7 12L3.17317 7.51079Z" }),
        React__default['default'].createElement("path", { d: "M18 16H5V19H18V16Z" }),
        React__default['default'].createElement("path", { d: "M20.8221 17.7336C20.9235 17.6203 20.9242 17.449 20.8236 17.335L17 13L17 22L20.8221 17.7336Z" })));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.1345 7.85614C5.157 7.63937 5.07225 7.42555 4.90725 7.28006L3.22725 5.29612V5H8.44575L12.4792 13.6669L16.0253 5H21V5.29612L19.563 6.64593C19.4392 6.73852 19.3778 6.89062 19.4032 7.04125V16.9595C19.3778 17.1094 19.4392 17.2615 19.563 17.3541L20.9662 18.7039V19H13.9073V18.7039L15.3615 17.321C15.504 17.1814 15.504 17.1402 15.504 16.9264V8.90983L11.4622 18.9677H10.9163L6.21 8.90983V15.6508C6.171 15.9337 6.267 16.2195 6.47025 16.4238L8.361 18.6708V18.9677H3V18.6708L4.89075 16.4238C5.09325 16.2188 5.18325 15.9315 5.1345 15.6508V7.85614Z" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 19 19" }, props),
        React__default['default'].createElement("path", { d: "M10.8864 12.0768C10.4832 12.48 9.6192 12.624 9.0048 12.624C8.3904 12.624 7.5264 12.48 7.1232 12.0768C7.0272 11.9808 6.8736 11.9808 6.7776 12.0768C6.6816 12.1728 6.6816 12.3264 6.7776 12.4224C7.4208 13.056 8.64 13.104 9.0048 13.104C9.3696 13.104 10.5888 13.056 11.232 12.4128C11.328 12.3168 11.328 12.1632 11.232 12.0672C11.136 11.9808 10.9824 11.9808 10.8864 12.0768Z" }),
        React__default['default'].createElement("path", { d: "M7.8816 9.936C7.8816 9.4176 7.4592 8.9952 6.9408 8.9952C6.4224 8.9952 6 9.4176 6 9.936C6 10.4544 6.4224 10.8768 6.9408 10.8768C7.4592 10.8768 7.8816 10.4544 7.8816 9.936Z" }),
        React__default['default'].createElement("path", { d: "M9.0048 0C4.032 0 0 4.032 0 9.0048C0 13.9776 4.032 18.0096 9.0048 18.0096C13.9776 18.0096 18.0096 13.9872 18.0096 9.0048C18 4.032 13.9776 0 9.0048 0ZM14.2272 10.2048C14.2464 10.3296 14.256 10.464 14.256 10.5984C14.256 12.624 11.904 14.256 9.0048 14.256C6.1056 14.256 3.7536 12.624 3.7536 10.5984C3.7536 10.464 3.7632 10.3296 3.7824 10.2048C3.3216 10.0032 3.0048 9.5424 3.0048 9.0048C3.0048 8.2848 3.5904 7.6896 4.32 7.6896C4.6752 7.6896 4.992 7.824 5.232 8.0544C6.144 7.392 7.4016 6.9792 8.8032 6.9408C8.8032 6.9216 9.4656 3.8016 9.4656 3.8016C9.4656 3.744 9.504 3.6864 9.552 3.6576C9.6 3.6192 9.6672 3.6096 9.7344 3.6192L11.9136 4.0896C12.0672 3.7824 12.384 3.5616 12.7488 3.5616C13.2672 3.5616 13.6896 3.9744 13.6896 4.5024C13.6896 5.0304 13.2672 5.4432 12.7488 5.4432C12.2496 5.4432 11.8368 5.0496 11.8176 4.5504L9.8592 4.128L9.264 6.9408C10.6464 6.9888 11.8848 7.4112 12.7776 8.0544C13.0176 7.824 13.3344 7.68 13.6896 7.68C14.4192 7.68 15.0048 8.2656 15.0048 8.9952C15.0048 9.5424 14.6784 9.9936 14.2272 10.2048Z" }),
        React__default['default'].createElement("path", { d: "M11.0688 9.0048C10.5504 9.0048 10.128 9.4272 10.128 9.9456C10.128 10.464 10.5504 10.8864 11.0688 10.8864C11.5872 10.8864 12.0096 10.464 12.0096 9.9456C12 9.4272 11.5776 9.0048 11.0688 9.0048Z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.8254 5.34984C20.682 5.58317 21.3575 6.26651 21.5881 7.13318C22.0165 8.71652 22 12.0165 22 12.0165C22 12.0165 22 15.2999 21.5881 16.8832C21.3575 17.7499 20.682 18.4332 19.8254 18.6666C18.2603 19.0832 12 19.0832 12 19.0832C12 19.0832 5.75618 19.0832 4.17463 18.6499C3.31796 18.4166 2.6425 17.7332 2.41186 16.8666C2 15.2999 2 11.9999 2 11.9999C2 11.9999 2 8.71652 2.41186 7.13318C2.6425 6.26651 3.33443 5.56651 4.17463 5.33317C5.7397 4.9165 12 4.9165 12 4.9165C12 4.9165 18.2603 4.9165 19.8254 5.34984ZM10.0065 8.96652L15.2124 11.9999L10.0065 15.0332V8.96652Z" })));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("g", { opacity: "0.56" },
            React__default['default'].createElement("path", { d: "M18.6667 7.625L6 7.625C5.82319 7.625 5.65362 7.55586 5.5286 7.43279C5.40357 7.30972 5.33333 7.1428 5.33333 6.96875C5.33333 6.7947 5.40357 6.62778 5.5286 6.50471C5.65362 6.38164 5.82319 6.3125 6 6.3125L16.6667 6.3125C16.8435 6.3125 17.013 6.24336 17.1381 6.12029C17.2631 5.99722 17.3333 5.8303 17.3333 5.65625C17.3333 5.4822 17.2631 5.31528 17.1381 5.19221C17.013 5.06914 16.8435 5 16.6667 5L6 5C5.46975 5.0006 4.9614 5.20821 4.58646 5.57729C4.21151 5.94638 4.00061 6.44679 4 6.96875L4 17.0312C4.00061 17.5532 4.21151 18.0536 4.58646 18.4227C4.9614 18.7918 5.46975 18.9994 6 19H18.6667C19.0202 18.9996 19.3591 18.8612 19.609 18.6151C19.859 18.3691 19.9996 18.0355 20 17.6875V8.9375C19.9996 8.58953 19.859 8.25592 19.609 8.00986C19.3591 7.76381 19.0202 7.6254 18.6667 7.625ZM16.3333 14.5156C16.1356 14.5156 15.9422 14.4579 15.7778 14.3497C15.6133 14.2416 15.4851 14.0878 15.4095 13.908C15.3338 13.7281 15.314 13.5302 15.3525 13.3392C15.3911 13.1483 15.4864 12.9729 15.6262 12.8352C15.7661 12.6975 15.9443 12.6038 16.1382 12.5658C16.3322 12.5278 16.5333 12.5473 16.716 12.6218C16.8987 12.6963 17.0549 12.8225 17.1648 12.9844C17.2747 13.1462 17.3333 13.3366 17.3333 13.5313C17.3333 13.7923 17.228 14.0427 17.0404 14.2273C16.8529 14.4119 16.5985 14.5156 16.3333 14.5156Z" }))));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("path", { d: "M9.80657 10.5867L7.21991 7.99999L9.80657 5.41332C10.0666 5.15332 10.0666 4.73332 9.80657 4.47332C9.54657 4.21332 9.12657 4.21332 8.86657 4.47332L5.80657 7.53332C5.54657 7.79332 5.54657 8.21332 5.80657 8.47332L8.86657 11.5333C9.12657 11.7933 9.54657 11.7933 9.80657 11.5333C10.0599 11.2733 10.0666 10.8467 9.80657 10.5867Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21 10.5C21 15.1944 17.1944 19 12.5 19C11.1972 19 9.96279 18.7069 8.85922 18.183C8.95124 17.8037 9 17.4076 9 17C9 14.2828 6.83254 12.0718 4.13224 12.0017C4.04534 11.5143 4 11.0124 4 10.5C4 5.80558 7.80558 2 12.5 2C17.1944 2 21 5.80558 21 10.5ZM13.375 16V14.9441C15.0996 14.622 16 13.3607 16 12.1072C16 11.0172 15.545 9.18763 12.5 9.18763C10.75 9.18763 10.75 8.57841 10.75 8.21443C10.75 7.74341 11.3634 7.24124 12.5 7.24124C13.5369 7.24124 13.7127 7.86213 13.725 8.23195L14.6 8.21443H15.475C15.475 7.21593 14.8922 5.81161 13.375 5.4126V4.33333H11.625V5.37757C9.90037 5.69969 9 6.96096 9 8.21443C9 9.30441 9.455 11.134 12.5 11.134C14.25 11.134 14.25 11.7919 14.25 12.1072C14.25 12.5111 13.7075 13.0804 12.5 13.0804C10.8891 13.0804 10.7596 12.2464 10.75 12.1072H9C9 13.0006 9.57837 14.5918 11.625 14.9489V16H13.375Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 17C8 19.2091 6.20914 21 4 21C1.79086 21 0 19.2091 0 17C0 14.7909 1.79086 13 4 13C6.20914 13 8 14.7909 8 17ZM4 14C4.55229 14 5 14.4477 5 15V16H6C6.55228 16 7 16.4477 7 17C7 17.5523 6.55228 18 6 18H5V19C5 19.5523 4.55228 20 4 20C3.44772 20 3 19.5523 3 19V18H2C1.44772 18 1 17.5523 1 17C1 16.4477 1.44772 16 2 16H3L3 15C3 14.4477 3.44772 14 4 14Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.4545 8.25C14.4545 7.09625 14.0455 6.03187 13.3664 5.195C13.71 5.08125 14.07 5 14.4545 5C16.2627 5 17.7273 6.45438 17.7273 8.25C17.7273 10.0456 16.2627 11.5 14.4545 11.5C14.1027 11.5 13.7673 11.4269 13.4482 11.3294C13.4236 11.3212 13.3991 11.3131 13.3664 11.305C14.0704 10.4403 14.4545 9.36199 14.4545 8.25ZM15.8127 12.4181C16.9336 13.1737 17.7273 14.1975 17.7273 15.5625V18H21V15.5625C21 13.7913 18.0709 12.7431 15.8127 12.4181ZM9.54545 5C11.3536 5 12.8182 6.45438 12.8182 8.25C12.8182 10.0456 11.3536 11.5 9.54545 11.5C7.73727 11.5 6.27273 10.0456 6.27273 8.25C6.27273 6.45438 7.73727 5 9.54545 5ZM9.54545 12.3125C11.73 12.3125 16.0909 13.4012 16.0909 15.5625V18H3V15.5625C3 13.4012 7.36091 12.3125 9.54545 12.3125Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.4319 12.8431C16.6324 13.641 14.2935 15.9799 14.2935 15.9799C14.2935 15.9799 14.8442 18.7296 13.37 20.6252C13.2005 20.8432 12.8811 20.8417 12.6858 20.6464L3.35353 11.3141C3.15827 11.1189 3.15678 10.7993 3.375 10.6301C5.2718 9.15946 8.03072 9.73667 8.03072 9.73667C8.03072 9.73667 9.28083 8.44477 11.1568 6.56878C13.666 4.05872 18.6861 5.31375 18.6861 5.31375C18.6861 5.31375 19.9411 10.3339 17.4319 12.8431ZM7.89146 18.5407C6.25305 20.1791 3.79543 20.1791 3.79543 20.1791C3.79543 20.1791 3.79543 16.9023 5.43384 16.0831L7.89146 18.5407ZM13.975 10.0251C14.5608 10.6109 15.5105 10.6109 16.0963 10.0251C16.6821 9.43933 16.6821 8.48958 16.0963 7.90379C15.5105 7.318 14.5608 7.318 13.975 7.90379C13.3892 8.48958 13.3892 9.43933 13.975 10.0251Z" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "24", height: "24" })))));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.50016 10.3043C1.02187 10.5805 0.858 11.1921 1.13414 11.6704L7.13414 22.0627C7.41029 22.541 8.02188 22.7048 8.50017 22.4287L22.6515 14.2584C22.998 14.0584 23.1919 13.6711 23.1445 13.2739L22.3714 6.79207C22.339 6.52032 22.1967 6.27372 21.9775 6.10978L16.7506 2.19929C16.4302 1.95965 15.9979 1.93396 15.6515 2.13398L1.50016 10.3043ZM20.8935 9.8938L21.7229 11.3304L19.0345 12.8826L15.0345 5.95435L17.6979 4.41661L18.5244 5.8481L16.7414 6.87753L17.4973 8.18676L19.0276 7.30324L19.804 8.64813L18.2737 9.53165L19.0855 10.9377L20.8935 9.8938ZM18.1003 13.4219L17.2709 11.9853L15.4628 13.0292L14.6511 11.6232L16.1814 10.7397L15.4049 9.39479L13.8746 10.2783L13.1187 8.96908L14.9017 7.93965L14.0753 6.50816L11.4118 8.0459L15.4118 14.9741L18.1003 13.4219ZM11.0036 14.4287L12.3418 16.7466L11.4614 17.2549L7.46143 10.3267L9.11949 9.36938C9.91658 8.90918 11.0302 9.5296 11.8302 10.9152C12.3743 11.8577 12.5203 12.7583 12.2813 13.3514L14.572 15.459L13.5639 16.041L11.5646 14.1048L11.3952 14.2026L11.0036 14.4287ZM9.91279 10.8268L9.17125 11.2549L10.2242 13.0787L10.9657 12.6506C11.2574 12.4822 11.2616 11.9635 10.9498 11.4236C10.6704 10.9396 10.2016 10.66 9.91279 10.8268ZM7.27341 16.2698L8.74694 18.8221L7.86653 19.3304L3.86653 12.4022L6.52998 10.8644L7.35939 12.301L5.57635 13.3305L6.494 14.9199L8.0243 14.0363L8.80371 15.3863L7.27341 16.2698Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3.33263 6.25H5.33157V5.5C5.33198 5.10231 5.47251 4.72105 5.72234 4.43984C5.97216 4.15864 6.31089 4.00045 6.6642 4H17.3252C17.6785 4.00045 18.0173 4.15864 18.2671 4.43984C18.5169 4.72105 18.6575 5.10231 18.6579 5.5V6.25H20.6674C21.0207 6.25045 21.3594 6.40864 21.6092 6.68984C21.8591 6.97105 21.9996 7.35231 22 7.75V9.25C21.999 10.2442 21.6477 11.1974 21.0231 11.9004C20.3985 12.6034 19.5517 12.9989 18.6684 13H18.3316C17.5285 15.8066 15.3213 17.9075 12.661 18.2109V20.5H14.66C14.8367 20.5 15.0062 20.579 15.1311 20.7197C15.2561 20.8603 15.3263 21.0511 15.3263 21.25C15.3263 21.4489 15.2561 21.6397 15.1311 21.7803C15.0062 21.921 14.8367 22 14.66 22H9.32946C9.15274 22 8.98326 21.921 8.8583 21.7803C8.73334 21.6397 8.66314 21.4489 8.66314 21.25C8.66314 21.0511 8.73334 20.8603 8.8583 20.7197C8.98326 20.579 9.15274 20.5 9.32946 20.5H11.3284V18.2131C10.0308 18.0654 8.80008 17.4929 7.78839 16.5664C6.77671 15.6399 6.0284 14.4 5.63598 13H5.33157C4.44829 12.9989 3.60148 12.6034 2.97691 11.9004C2.35234 11.1974 2.00101 10.2442 2 9.25V7.75C2.0004 7.35231 2.14094 6.97105 2.39076 6.68984C2.64059 6.40864 2.97932 6.25045 3.33263 6.25ZM18.6684 11.5C19.1984 11.4993 19.7065 11.262 20.0812 10.8402C20.456 10.4184 20.6668 9.84653 20.6674 9.25V7.75H18.6579V10.6652C18.6575 10.9441 18.6436 11.2228 18.6163 11.5H18.6684ZM3.33263 9.25C3.33323 9.84653 3.54403 10.4184 3.91878 10.8402C4.29352 11.262 4.80161 11.4993 5.33157 11.5H5.36423C5.34255 11.2524 5.33167 11.0024 5.33157 10.75V7.75H3.33263V9.25Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 12C3 7.032 7.032 3 12 3C16.968 3 21 7.032 21 12C21 16.968 16.968 21 12 21C7.032 21 3 16.968 3 12ZM9.99998 14.17L15.88 8.29C16.27 7.9 16.91 7.9 17.3 8.29C17.69 8.68 17.69 9.31 17.3 9.7L10.71 16.29C10.32 16.68 9.68998 16.68 9.29998 16.29L6.70998 13.7C6.31998 13.31 6.31998 12.68 6.70998 12.29C7.09998 11.9 7.72998 11.9 8.11998 12.29L9.99998 14.17Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.116 10.404L12 6.52L15.886 10.406L18.146 8.146L12 2L5.856 8.144L8.116 10.404ZM2 12L4.26 9.74L6.52 12L4.26 14.26L2 12ZM8.116 13.596L12 17.48L15.886 13.594L18.146 15.853L12 22L5.856 15.856L5.853 15.853L8.116 13.596ZM17.48 12L19.74 9.74L22 12L19.74 14.26L17.48 12ZM14.292 11.998H14.294V12L12 14.294L9.709 12.004L9.705 12L9.709 11.997L10.11 11.595L10.305 11.4L12 9.706L14.293 11.999L14.292 11.998Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.9463 13.4868C14.3246 13.0859 15.9504 13.1374 19.1607 13.5923L13.6138 3.98473C12.4022 6.99181 11.6079 8.38112 10.5717 9.37385L12.9463 13.4868ZM13.3847 19.0706L13.3594 19.0615L13.3246 19.0428C12.9924 18.8543 12.4351 18.3846 11.6645 17.2156L11.66 17.209L11.0894 16.1115L10.4797 16.4636L9.87574 16.8256L9.18538 17.225L11.4543 21.2641L13.3914 20.1461C13.397 20.1418 13.4037 20.1369 13.4105 20.1322L13.4328 20.1158L13.4687 20.0979C13.4768 20.0943 13.4845 20.0906 13.4909 20.0882C13.7537 19.9284 13.8426 19.5857 13.6885 19.3175C13.6417 19.2365 13.5728 19.1684 13.4839 19.116C13.4464 19.0949 13.4173 19.0818 13.3847 19.0706ZM4.40308 14.2689L5.69381 16.5045C6.05 17.1196 6.84195 17.3313 7.45904 16.9768L8.22912 16.5322L9.28977 15.9198L12.2399 14.2166L9.65736 9.74347L4.8765 12.5037C4.26064 12.8603 4.04818 13.6523 4.40308 14.2689ZM15.0479 1.36229L14.4543 1.705C14.3119 1.78762 14.2611 1.97781 14.3431 2.12034L21.4907 14.1667C21.278 14.1313 21.4643 14.1815 21.6093 14.0978L22.2034 13.7548C22.3479 13.6713 22.3979 13.4854 22.6104 13.5196L15.4627 1.4732C15.3793 1.32871 15.1931 1.27881 15.0479 1.36229Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.57232 13.9999C8.57232 12.7376 9.59567 11.7142 10.858 11.7142H13.1438C14.4061 11.7142 15.4295 12.7376 15.4295 13.9999V16.2856H8.57232V13.9999ZM18.0004 12.857H16.5719V16.2856H20.0004V14.857C20.0004 13.7525 19.105 12.857 18.0004 12.857ZM4 14.857C4 13.7525 4.89543 12.857 6 12.857H7.42857V16.2856H4V14.857ZM11.9991 10.5714C13.2615 10.5714 14.2848 9.54801 14.2848 8.28564C14.2848 7.02328 13.2615 5.99993 11.9991 5.99993C10.7367 5.99993 9.71339 7.02328 9.71339 8.28564C9.71339 9.54801 10.7367 10.5714 11.9991 10.5714ZM18.8574 9.99987C18.8574 10.9466 18.0899 11.7142 17.1431 11.7142C16.1963 11.7142 15.4288 10.9466 15.4288 9.99987C15.4288 9.0531 16.1963 8.28559 17.1431 8.28559C18.0899 8.28559 18.8574 9.0531 18.8574 9.99987ZM6.85686 11.7142C7.80364 11.7142 8.57115 10.9467 8.57115 9.9999C8.57115 9.05312 7.80364 8.28561 6.85686 8.28561C5.91009 8.28561 5.14258 9.05312 5.14258 9.9999C5.14258 10.9467 5.91009 11.7142 6.85686 11.7142Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.9715 6.38586C18.3473 6.50925 17.7522 6.68344 17.2623 6.79231C16.1445 7.04272 15.0994 7.89917 14.8707 9.46691C14.6675 10.8677 15.1393 11.4701 14.9324 13.0996C14.5695 15.9447 11.8405 16.9246 10.5667 17.5197C9.83001 17.8608 8.0409 18.6447 6.66187 19.2435C8.15703 20.3467 10.0006 20.9999 12.0002 20.9999C16.9719 20.9999 21.0002 16.9717 21.0002 12C21.0002 9.88061 20.2671 7.93183 19.0405 6.39675C19.0187 6.39312 18.9969 6.38949 18.9715 6.38586Z", fill: "white" }),
        React__default['default'].createElement("path", { d: "M10.9875 10.679C11.6806 9.18023 11.4302 9.1766 11.9564 7.76854C12.6206 5.98306 14.6855 6.49112 15.2552 6.56733C16.1951 6.69435 16.4419 6.36048 18.4234 6.04112C18.5214 6.02661 18.6157 6.01209 18.7101 6.0012C17.0625 4.16129 14.6673 3 12 3C8.41814 3 5.32621 5.09032 3.87822 8.12055C6.84677 8.85725 10.0512 10.4576 10.9875 10.679ZM9.02056 4.56774C9.28185 4.60766 10.552 6.18628 10.7915 10.2399C10.7915 10.2399 9.15846 9.84797 8.80645 9.00604C8.51612 8.31289 8.89354 7.40201 9.02056 4.56774ZM19.0258 6.37862C19.0294 6.38588 19.0367 6.38951 19.0403 6.39677C19.0185 6.39314 18.9931 6.39314 18.9714 6.38951C18.9895 6.38225 19.0076 6.38225 19.0258 6.37862ZM3 12C3 11.2814 3.08347 10.5847 3.24314 9.91692C3.56976 10.1891 3.91814 10.4903 4.28831 10.8351C6.63266 13.0089 10.4468 14.7254 11.8367 13.1286C11.8403 13.1322 11.8439 13.1322 11.8439 13.1359C11.5899 13.4697 10.621 14.5258 8.77016 14.1992L5.84516 18.5649C4.09597 16.9246 3 14.5911 3 12Z", fill: "white" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "18", height: "18", viewBox: "0 0 18 18" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.6714 16.9887C15.0136 17.4369 15.4935 17.7604 16.0373 17.9096C16.0484 17.9121 16.0581 17.9187 16.0646 17.9281C16.0711 17.9375 16.0739 17.9489 16.0724 17.9602C16.0709 17.9716 16.0652 17.9819 16.0565 17.9892C16.0478 17.9966 16.0366 18.0004 16.0252 18H2.25C1.65326 18 1.08097 17.7629 0.65901 17.341C0.237053 16.919 0 16.3467 0 15.75V0.482142C0 0.35427 0.050797 0.231635 0.141216 0.141216C0.231636 0.0507969 0.354271 0 0.482143 0H13.6607C13.7886 0 13.9112 0.0507969 14.0016 0.141216C14.0921 0.231635 14.1429 0.35427 14.1429 0.482142V15.4285C14.1435 15.9924 14.3292 16.5405 14.6714 16.9887ZM2.57143 3.21428V7.07141H6.42857V3.21428H2.57143ZM2.57143 14.7857H11.5714V13.5H2.57143V14.7857ZM2.57143 12.2143H11.5714V10.9286H2.57143V12.2143ZM2.57143 9.64284H11.5714V8.35713H2.57143V9.64284ZM7.71429 7.07141H11.5714V5.7857H7.71429V7.07141ZM7.71429 4.49999H11.5714V3.21428H7.71429V4.49999Z" }),
        React__default['default'].createElement("path", { d: "M15.4286 3.21428H17.5179C17.6457 3.21428 17.7684 3.26508 17.8588 3.3555C17.9492 3.44591 18 3.56855 18 3.69642V15.4285C18 15.7695 17.8645 16.0966 17.6234 16.3377C17.3823 16.5788 17.0553 16.7143 16.7143 16.7143C16.3733 16.7143 16.0463 16.5788 15.8051 16.3377C15.564 16.0966 15.4286 15.7695 15.4286 15.4285V3.21428Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 5.56584V3.27604C0.366455 2.41736 2.08879 0.700012 6.04651 0.700012C10.0042 0.700012 11.7266 2.41736 12.093 3.27604V5.52418C10.4428 5.88061 8.99007 6.76777 7.92241 7.9981C7.36233 8.08936 6.7386 8.14187 6.04651 8.14187C3.22726 8.14187 1.54231 7.27043 0.673759 6.4587C0.592484 6.61142 0.549683 6.76997 0.549683 6.93257C0.549683 8.16558 3.0107 9.16513 6.04651 9.16513C6.41081 9.16513 6.76683 9.15074 7.11131 9.12327C6.70019 9.8181 6.39552 10.5834 6.21975 11.3966C6.16248 11.3973 6.10474 11.3977 6.04651 11.3977C3.21123 11.3977 1.52319 10.5383 0.659027 9.7431C0.58732 9.88699 0.549683 10.0359 0.549683 10.1884C0.549683 11.4214 3.0107 12.4209 6.04651 12.4209L6.06998 12.4209C6.05443 12.6204 6.04651 12.8221 6.04651 13.0256C6.04651 13.5838 6.10611 14.1281 6.21928 14.6524C6.16217 14.6531 6.10458 14.6535 6.04651 14.6535C3.21123 14.6535 1.52319 13.7942 0.659027 12.9989C0.58732 13.1428 0.549683 13.2917 0.549683 13.4442C0.549683 14.6772 3.0107 15.6768 6.04651 15.6768C6.20392 15.6768 6.35978 15.6741 6.51384 15.6688C6.79896 16.446 7.2062 17.1642 7.71232 17.8003C7.20748 17.87 6.65326 17.9093 6.04651 17.9093C2.08879 17.9093 0.366455 16.2349 0 15.3977V13.1651C0.0651301 13.0163 0.17309 12.8411 0.328817 12.6535C0.17309 12.4659 0.0651301 12.2907 0 12.1419V9.90931C0.0651301 9.76052 0.17309 9.58527 0.328817 9.39769C0.17309 9.2101 0.0651301 9.03486 0 8.88606V6.6535C0.0680515 6.49803 0.182861 6.31369 0.350061 6.11656C0.182861 5.91437 0.0680516 5.7253 0 5.56584ZM10.9937 3.56227C10.9937 4.82689 9.08233 5.56584 6.04651 5.56584C3.0107 5.56584 1.09937 4.82689 1.09937 3.56227C1.09937 2.29764 3.0107 1.55869 6.04651 1.55869C9.08233 1.55869 10.9937 2.29764 10.9937 3.56227Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20 13.0256C20 16.4934 17.1888 19.3047 13.7209 19.3047C10.2531 19.3047 7.44186 16.4934 7.44186 13.0256C7.44186 9.55776 10.2531 6.74652 13.7209 6.74652C17.1888 6.74652 20 9.55776 20 13.0256ZM14.3673 16.3085V17.0885H13.0745V16.3121C11.5626 16.0483 11.1354 14.8728 11.1354 14.2129H12.4281C12.4352 14.3157 12.5309 14.9318 13.7209 14.9318C14.6129 14.9318 15.0136 14.5112 15.0136 14.2129C15.0136 13.9799 15.0136 13.494 13.7209 13.494C11.4715 13.494 11.1354 12.1424 11.1354 11.3372C11.1354 10.4113 11.8005 9.47954 13.0745 9.24158V8.47019H14.3673V9.26746C15.4881 9.56222 15.9186 10.5996 15.9186 11.3372H15.2722L14.6258 11.3502C14.6168 11.077 14.4868 10.6183 13.7209 10.6183C12.8812 10.6183 12.4281 10.9893 12.4281 11.3372C12.4281 11.6061 12.4281 12.0561 13.7209 12.0561C15.9703 12.0561 16.3064 13.4077 16.3064 14.2129C16.3064 15.1388 15.6413 16.0705 14.3673 16.3085Z" })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { d: "M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z", fill: "#F0F0F0" }),
            React__default['default'].createElement("path", { d: "M6.69566 7.00001H14C14 6.3682 13.9158 5.75614 13.7589 5.1739H6.69566V7.00001Z", fill: "#D80027" }),
            React__default['default'].createElement("path", { d: "M6.69566 3.34783H12.9726C12.5441 2.6486 11.9962 2.03055 11.3574 1.52174H6.69566V3.34783Z", fill: "#D80027" }),
            React__default['default'].createElement("path", { d: "M7 14C8.64743 14 10.1616 13.4306 11.3574 12.4783H2.64261C3.83835 13.4306 5.35257 14 7 14Z", fill: "#D80027" }),
            React__default['default'].createElement("path", { d: "M1.02742 10.6522H12.9726C13.3166 10.0908 13.5834 9.47724 13.7589 8.82607H0.24115C0.416615 9.47724 0.683408 10.0908 1.02742 10.6522Z", fill: "#D80027" }),
            React__default['default'].createElement("path", { d: "M3.24253 1.09315H3.88043L3.28707 1.52422L3.51373 2.22173L2.92039 1.79066L2.32706 2.22173L2.52284 1.61916C2.00041 2.05434 1.54252 2.56419 1.16517 3.13228H1.36957L0.991867 3.40668C0.933023 3.50484 0.876586 3.60456 0.8225 3.70576L1.00286 4.26087L0.666367 4.01639C0.582723 4.1936 0.506215 4.37481 0.437445 4.55979L0.636152 5.17141H1.36957L0.776207 5.60249L1.00286 6.3L0.409527 5.86893L0.0541133 6.12716C0.0185391 6.41312 0 6.70439 0 7H7C7 3.13403 7 2.67827 7 0C5.61717 0 4.32811 0.401133 3.24253 1.09315ZM3.51373 6.3L2.92039 5.86893L2.32706 6.3L2.55371 5.60249L1.96036 5.17141H2.69377L2.92039 4.4739L3.14702 5.17141H3.88043L3.28707 5.60249L3.51373 6.3ZM3.28707 3.56336L3.51373 4.26087L2.92039 3.82979L2.32706 4.26087L2.55371 3.56336L1.96036 3.13228H2.69377L2.92039 2.43477L3.14702 3.13228H3.88043L3.28707 3.56336ZM6.02459 6.3L5.43126 5.86893L4.83793 6.3L5.06458 5.60249L4.47122 5.17141H5.20464L5.43126 4.4739L5.65789 5.17141H6.3913L5.79794 5.60249L6.02459 6.3ZM5.79794 3.56336L6.02459 4.26087L5.43126 3.82979L4.83793 4.26087L5.06458 3.56336L4.47122 3.13228H5.20464L5.43126 2.43477L5.65789 3.13228H6.3913L5.79794 3.56336ZM5.79794 1.52422L6.02459 2.22173L5.43126 1.79066L4.83793 2.22173L5.06458 1.52422L4.47122 1.09315H5.20464L5.43126 0.395637L5.65789 1.09315H6.3913L5.79794 1.52422Z", fill: "#0052B4" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "14", height: "14", fill: "white" })))));
};

var Icon$c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({}, props, { viewBox: "0 0 24 24" }),
        React__default['default'].createElement("g", { clipPath: "url(#clipID)" },
            React__default['default'].createElement("rect", { width: "24", height: "24", rx: "12", fill: "white" }),
            React__default['default'].createElement("path", { d: "M-6 0H30V24H-6V0Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M-6 0H30V12H-6V0Z", fill: "#FF0000" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clipID" },
                React__default['default'].createElement("rect", { width: "24", height: "24", rx: "12", fill: "white" })))));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("rect", { width: "14", height: "14", rx: "7", fill: "white" }),
            React__default['default'].createElement("path", { d: "M14 10H0V15H14V10Z", fill: "#D52B1E" }),
            React__default['default'].createElement("path", { d: "M18 4H-5V10H18V4Z", fill: "#0039A6" }),
            React__default['default'].createElement("path", { d: "M20 -1H-3V4H20V-1Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "14", height: "14", rx: "7", fill: "white" })))));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React__default['default'].createElement("mask", { id: "mask0vn", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "14", height: "14" },
            React__default['default'].createElement("circle", { cx: "7", cy: "7", r: "7", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0vn)" },
            React__default['default'].createElement("path", { d: "M17 0H-3V14H17V0Z", fill: "#DA251D" }),
            React__default['default'].createElement("path", { d: "M7 2.44922L4.21804 11L11.5 5.7198H2.5L9.78196 11L7 2.44922Z", fill: "#FFFF00" }))));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React__default['default'].createElement("mask", { id: "maskBD", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "14", height: "14" },
            React__default['default'].createElement("path", { d: "M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#maskBD)" },
            React__default['default'].createElement("path", { d: "M-3.13574 0V4.63246V4.73505V9.26495V9.36754V14H18.7883V9.36754V9.26495V4.73505V4.63246V0H-3.13574Z", fill: "#2B5034" }),
            React__default['default'].createElement("path", { d: "M5.54361 9.46399C7.44568 9.46399 8.98761 7.84685 8.98761 5.85199C8.98761 3.85713 7.44568 2.23999 5.54361 2.23999C3.64154 2.23999 2.09961 3.85713 2.09961 5.85199C2.09961 7.84685 3.64154 9.46399 5.54361 9.46399Z", fill: "#DB0032" }))));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React__default['default'].createElement("mask", { id: "maskBD", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "14", height: "14" },
            React__default['default'].createElement("path", { d: "M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#maskBD)" },
            React__default['default'].createElement("path", { d: "M4.69028 -0.839966H0V14H4.69028V-0.839966Z", fill: "#002395" }),
            React__default['default'].createElement("path", { d: "M9.38564 -0.839966H4.69043V14H9.38564V-0.839966Z", fill: "#EEEEEE" }),
            React__default['default'].createElement("path", { d: "M14.0002 -0.839966H9.38574V14H14.0002V-0.839966Z", fill: "#ED2939" }))));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React__default['default'].createElement("mask", { id: "maskPT", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "14", height: "14" },
            React__default['default'].createElement("path", { d: "M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#maskPT)" },
            React__default['default'].createElement("path", { d: "M5.30957 14V-0.196045H20.3341V14H5.30957Z", fill: "#FC0D1B" }),
            React__default['default'].createElement("path", { d: "M-9.66016 14V-0.196045H5.36439V14H-9.66016Z", fill: "#009B3A" }),
            React__default['default'].createElement("path", { d: "M3.34033 7.28661C3.34033 7.28661 2.34874 7.08473 2.25391 7.02417V7.3539C2.25391 7.3539 3.11935 7.60948 3.33397 7.58257L3.34033 7.28661Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.29562 7.5997C3.03447 7.5997 2.28053 7.37777 2.24862 7.36842L2.23828 7.36534V6.99829L2.2597 7.01207C2.33356 7.05885 2.9993 7.20297 3.3414 7.27261L3.35322 7.27493L3.34628 7.59676L3.33415 7.59824C3.32136 7.59953 3.30848 7.60003 3.29562 7.5997ZM2.2665 7.34238C2.3597 7.36957 3.05454 7.56954 3.29562 7.56954C3.30374 7.56954 3.31156 7.56954 3.3185 7.56954L3.32441 7.29979C3.21319 7.27697 2.42839 7.11519 2.2665 7.04833V7.34238Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.23438 6.95691C2.23438 6.95691 2.68918 7.11169 3.33971 7.21935V7.28666C3.33971 7.28666 2.35432 7.10497 2.24664 7.05785L2.23438 6.95691Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.35384 7.30452L3.33729 7.30144C3.29697 7.29399 2.34909 7.11902 2.24156 7.07178L2.23402 7.06857L2.21777 6.93542L2.23904 6.94259C2.24362 6.94422 2.7005 7.09825 3.3423 7.20445L3.35429 7.20649L3.35384 7.30452ZM2.25987 7.04689C2.38646 7.09357 3.19889 7.24513 3.32561 7.26868V7.23239C2.96198 7.17267 2.60299 7.08783 2.25131 6.97843L2.25987 7.04689Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.23926 7.31775C2.25816 7.33122 2.82804 7.49726 3.3384 7.54948L3.33204 7.62832C3.33204 7.62832 2.38579 7.46741 2.25373 7.39427L2.23926 7.31775Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.34559 7.64572L3.33083 7.64326C3.29197 7.63665 2.38058 7.48232 2.2475 7.40758L2.24144 7.4042L2.21973 7.28528L2.24794 7.30547C2.27054 7.31776 2.83008 7.48248 3.34102 7.5347L3.35491 7.53616L3.34559 7.64572ZM2.2664 7.38401C2.4054 7.45219 3.20038 7.59042 3.32005 7.61092L3.32389 7.56293C2.87911 7.51569 2.37852 7.38065 2.25857 7.34044L2.2664 7.38401Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.08691 9.24731C3.98277 9.41305 4.32222 9.47025 4.95843 9.53843L5.16863 9.61465C5.16863 9.61465 4.44113 9.63688 3.14997 9.3503L3.08691 9.24731Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.12942 9.63001C4.94448 9.63001 4.25481 9.611 3.14741 9.36511L3.14167 9.36379L3.05762 9.22656L3.08968 9.23241C4.00402 9.40167 4.33977 9.45698 4.95999 9.52353L5.24775 9.62724L5.16932 9.62973C5.16932 9.62973 5.15588 9.63001 5.12942 9.63001ZM3.15895 9.33744C4.18347 9.56449 4.84774 9.59667 5.08364 9.60078L4.95409 9.5538C4.34329 9.4887 4.00799 9.43385 3.11684 9.26929L3.15895 9.33744Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.87695 8.94714C2.87695 8.94714 3.8105 9.14421 4.43708 9.21135L4.98362 9.54284C4.98362 9.54284 3.50768 9.39055 3.06189 9.25114L2.87695 8.94714Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.04779 9.56467L4.98194 9.55792C4.96715 9.55646 3.49948 9.40389 3.05752 9.26624L3.05251 9.26476L2.8457 8.92554L2.87849 8.9324C2.88779 8.93444 3.81868 9.13019 4.43745 9.19571L4.44308 9.19761L5.04779 9.56467ZM3.07038 9.23903C3.46109 9.35853 4.62743 9.48946 4.9184 9.52093L4.4323 9.22615C3.87806 9.16645 3.07701 9.00408 2.90627 8.96869L3.07038 9.23903Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.80859 8.87085C2.80859 8.87085 3.74228 9.06805 4.3689 9.1352L4.38144 9.22488C4.38144 9.22488 3.30061 9.09936 2.85496 8.96053L2.80859 8.87085Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.3988 9.24199L4.38063 9.23994C4.36968 9.23863 3.29345 9.11268 2.8515 8.97517L2.84604 8.97341L2.78223 8.8501L2.81176 8.85637C2.82109 8.85827 3.75195 9.05402 4.37072 9.11971L4.38167 9.12103L4.3988 9.24199ZM2.8651 8.94796C3.27603 9.07435 4.22229 9.19066 4.3654 9.20791L4.35714 9.14939C3.79997 9.08869 2.9995 8.92601 2.8357 8.89238L2.8651 8.94796Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.62936 5.37122C2.62936 5.37122 2.44265 5.74219 2.44044 5.78592C2.43822 5.82969 3.12582 6.31476 3.12582 6.31476C3.12582 6.31476 3.50161 6.2687 3.50618 6.25624C3.51077 6.24381 3.50161 5.94334 3.4994 5.93119C3.49716 5.91906 2.62936 5.37122 2.62936 5.37122Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.12197 6.33024L3.11769 6.32716C2.8007 6.10377 2.42343 5.82831 2.42579 5.78516C2.42816 5.74199 2.58503 5.42645 2.61649 5.36399L2.62358 5.3501L2.63614 5.35813C3.50927 5.90979 3.51103 5.91973 3.51265 5.92866C3.51265 5.93085 3.52581 6.24363 3.51887 6.2622C3.51503 6.27231 3.5112 6.28269 3.12698 6.32979L3.12197 6.33024ZM2.63451 5.39207C2.56258 5.53543 2.45548 5.75781 2.45401 5.78707C2.47114 5.8245 2.87529 6.12029 3.12891 6.29907C3.25595 6.28342 3.45388 6.25679 3.49289 6.24596C3.49434 6.20662 3.48815 5.97884 3.48535 5.93877C3.43764 5.90217 2.9608 5.59835 2.63451 5.39207Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.41504 5.87319C2.41504 5.87319 2.86144 6.28076 3.02538 6.37058L3.17311 6.32934C3.17311 6.32934 2.6016 5.93874 2.44665 5.77637L2.41504 5.87319Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.02453 6.38636L3.01965 6.38387C2.85613 6.29432 2.42497 5.90112 2.40665 5.88457L2.39941 5.87785L2.44181 5.74866L2.45761 5.76535C2.60961 5.92495 3.17609 6.31261 3.18141 6.31641L3.2086 6.33501L3.02453 6.38636ZM2.43235 5.86847C2.49041 5.921 2.87548 6.268 3.02794 6.35447L3.13961 6.3233C3.02735 6.24591 2.60651 5.95261 2.45377 5.80309L2.43235 5.86847Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.29102 8.76424L2.44139 9.01207C2.44139 9.01207 2.76369 8.64211 3.71246 8.53151L3.56134 8.26453C3.56134 8.26453 2.85661 8.28368 2.29102 8.76424Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M2.43967 9.0364L2.27246 8.76093L2.28251 8.75245C2.84545 8.27438 3.55491 8.24979 3.562 8.24951H3.57026L3.73616 8.54413L3.71429 8.54662C2.78296 8.65532 2.45518 9.01884 2.45193 9.02251L2.43967 9.0364ZM2.31013 8.76751L2.4441 8.9884C2.51353 8.92008 2.85326 8.62107 3.68976 8.51971L3.55519 8.28053C3.47545 8.28431 2.83184 8.33127 2.31072 8.76751H2.31013Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.22656 8.7194L2.27088 8.79561C2.27088 8.79561 2.66039 8.41439 3.5799 8.30278L3.53337 8.23035C3.53337 8.23035 2.78506 8.27702 2.22656 8.7194Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M2.26872 8.81894L2.20801 8.71551L2.21849 8.70734C2.77404 8.26729 3.52546 8.21566 3.53313 8.21521H3.54111L3.60537 8.31542L3.58202 8.31836C2.67788 8.42807 2.28526 8.80343 2.28142 8.80724L2.26872 8.81894ZM2.24582 8.72313L2.27536 8.77286C2.34922 8.70835 2.74805 8.39368 3.55573 8.29011L3.52619 8.2452C3.44569 8.25253 2.76282 8.3201 2.24582 8.72313Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.39453 9.00453L2.43574 9.07299C2.43574 9.07299 2.79202 8.69936 3.74079 8.58876L3.70134 8.51562C3.70134 8.51562 2.95348 8.54679 2.39453 9.00453Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M2.43441 9.09678L2.37695 9.00093L2.38715 8.99245C2.94284 8.5372 3.69456 8.50153 3.70178 8.50122H3.71021L3.76487 8.60157L3.74331 8.60392C2.81004 8.71276 2.45007 9.08037 2.44653 9.08404L2.43441 9.09678ZM2.41462 9.00796L2.43988 9.0501C2.51167 8.9847 2.88819 8.67765 3.71892 8.57626L3.6947 8.53238C3.61123 8.53706 2.9303 8.59281 2.41462 9.00796Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M1.875 6.76195V7.07149C1.875 7.07149 2.30455 6.79574 3.34047 6.58039V6.28418C3.34047 6.28418 2.70884 6.34474 1.875 6.76195Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M1.86035 7.09802V6.75233L1.86847 6.74838C2.69493 6.33483 3.33231 6.26987 3.33867 6.26928L3.35343 6.26782V6.59273L3.34206 6.59508C2.32121 6.80718 1.88546 7.08164 1.88118 7.08427L1.86035 7.09802ZM1.88856 6.77148V7.0458C1.98738 6.98918 2.43259 6.75468 3.32582 6.56801V6.30103C3.22432 6.3136 2.63525 6.39948 1.88856 6.77148Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M1.84863 6.72803V6.82267C1.84863 6.82267 2.42471 6.41569 3.33331 6.30408V6.21045C3.33331 6.21045 2.44303 6.32441 1.84863 6.72803Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M1.83496 6.85015V6.72026L1.84146 6.71572C2.43128 6.31487 3.32273 6.19668 3.33174 6.19551L3.34753 6.1936V6.3175L3.33485 6.31899C2.44088 6.42883 1.86229 6.831 1.85653 6.83522L1.83496 6.85015ZM1.86332 6.73619V6.79471C1.97691 6.72157 2.52301 6.39067 3.31948 6.29001V6.22726C3.1979 6.24496 2.40425 6.3718 1.86332 6.73619Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M1.84961 7.07702V7.17124C1.84961 7.17124 2.42347 6.75519 3.32673 6.66772L3.33295 6.56006C3.33295 6.56006 2.44327 6.67343 1.84961 7.07702Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M1.83594 7.19956V7.06878L1.84244 7.06441C2.4321 6.66342 3.32297 6.54624 3.33181 6.54479L3.34867 6.5426L3.34055 6.68112L3.32843 6.68229C2.43964 6.76831 1.86371 7.17968 1.85795 7.18332L1.83594 7.19956ZM1.86415 7.08532V7.14384C1.97789 7.0685 2.52162 6.73351 3.31381 6.65407L3.31837 6.57741C3.19282 6.59541 2.4036 6.72194 1.86415 7.08605V7.08532Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.13379 5.54563C2.13379 5.54563 2.13379 5.42741 2.15521 5.37782C2.17663 5.32824 2.1911 5.32062 2.1911 5.32062C2.1911 5.32062 2.54561 5.27484 3.32598 5.70582L3.31534 5.79724C3.31534 5.79724 2.47752 5.40064 2.17677 5.4084L2.13379 5.54563Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.32738 5.81935L3.31008 5.811C3.30182 5.8072 2.48999 5.42452 2.18747 5.42334L2.12012 5.63779V5.54565C2.12012 5.54066 2.12012 5.42348 2.14301 5.37154C2.16591 5.31963 2.18083 5.30952 2.18526 5.3072L2.18984 5.30571C2.20136 5.30445 2.21296 5.30392 2.22455 5.30412C2.31953 5.30412 2.68054 5.3322 3.3324 5.69237L3.3411 5.69718L3.32738 5.81935ZM2.186 5.39321C2.47212 5.39321 3.18069 5.71782 3.30417 5.77547L3.31128 5.71432C2.66991 5.36174 2.31761 5.33397 2.22455 5.33397C2.21067 5.33397 2.20136 5.33397 2.19678 5.33497C2.1847 5.34959 2.17517 5.36611 2.16857 5.38383C2.1639 5.39579 2.16049 5.40819 2.15838 5.42085L2.16694 5.39335L2.186 5.39321Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.46001 4.85931L2.21289 5.32831C2.21289 5.32831 2.85028 5.42368 3.33714 5.74024L3.31925 5.07289C3.31925 5.07289 2.64968 4.84788 2.46001 4.85931Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.35174 5.7674L3.32959 5.75276C2.85085 5.44162 2.21717 5.34404 2.21082 5.34314L2.19043 5.34009L2.45129 4.8446H2.45897C2.464 4.8446 2.46916 4.8446 2.47478 4.8446C2.68157 4.8446 3.29725 5.05057 3.32337 5.0592L3.33298 5.06242L3.35174 5.7674ZM2.23504 5.31668C2.34612 5.33598 2.8903 5.44072 3.32206 5.71297L3.30523 5.08392C3.22487 5.05729 2.664 4.87386 2.47478 4.87386H2.46887L2.23504 5.31668Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.44562 4.7677C2.44562 4.7677 2.39511 4.84786 2.39186 4.86251C2.38861 4.87712 2.38477 5.00732 2.38477 5.00732L2.45995 4.8587C2.45995 4.8587 2.73189 4.87334 3.30841 5.0913L3.31566 5.00352C3.31566 5.00352 2.81076 4.79828 2.44562 4.7677Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.32116 5.1124L3.30402 5.10596C2.79308 4.91332 2.51951 4.8798 2.46826 4.87499L2.36914 5.07101L2.37092 5.00737C2.37092 4.98556 2.37475 4.87571 2.37845 4.85933C2.38214 4.84293 2.41877 4.78399 2.43414 4.75926L2.43872 4.75195L2.44699 4.75268C2.81007 4.78295 3.31598 4.98791 3.32099 4.98995L3.3309 4.99404L3.32116 5.1124ZM2.45201 4.84368H2.46087C2.46368 4.84368 2.73621 4.86124 3.29635 5.07071L3.30091 5.01367C3.22898 4.98514 2.78392 4.81266 2.45304 4.78295C2.43562 4.80972 2.41988 4.83752 2.40592 4.86619C2.40459 4.87205 2.40282 4.90439 2.40134 4.94345L2.45201 4.84368Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.5957 7.28661C7.5957 7.28661 8.58729 7.08473 8.68199 7.02417V7.3539C8.68199 7.3539 7.81668 7.60948 7.60206 7.58257L7.5957 7.28661Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.63868 7.59967C7.62577 7.59978 7.61289 7.59905 7.60012 7.59749L7.588 7.59603L7.58105 7.2742L7.59287 7.27185C7.93497 7.20221 8.60146 7.05812 8.67457 7.01131L8.69598 6.99756V7.36534L8.68565 7.36839C8.65373 7.37777 7.89997 7.59967 7.63868 7.59967ZM7.61578 7.56881C7.83174 7.58346 8.57147 7.37046 8.66793 7.34235V7.04759C8.50545 7.11446 7.72125 7.27624 7.61001 7.29906L7.61578 7.56881Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M8.70103 6.95691C8.70103 6.95691 8.24623 7.11169 7.5957 7.21935V7.28666C7.5957 7.28666 8.5811 7.10497 8.68876 7.05785L8.70103 6.95691Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.58203 7.30452V7.20649L7.59402 7.20445C8.23597 7.09825 8.69268 6.94422 8.69727 6.94259L8.71855 6.93542L8.70184 7.06857L8.6943 7.07178C8.58678 7.11902 7.6389 7.29399 7.59858 7.30144L7.58203 7.30452ZM7.60967 7.23239V7.26882C7.7364 7.24527 8.54882 7.09329 8.6754 7.04706L8.68397 6.97843C8.33229 7.08783 7.9733 7.17267 7.60967 7.23239Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M8.6968 7.31775C8.67773 7.33122 8.10784 7.49726 7.59766 7.54948L7.60387 7.62832C7.60387 7.62832 8.55024 7.46741 8.68215 7.39427L8.6968 7.31775Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.5906 7.6458L7.58203 7.53596L7.59589 7.53448C8.10639 7.48226 8.66594 7.31753 8.68898 7.30482L8.71718 7.28491L8.69489 7.4043L8.68884 7.40766C8.5559 7.48184 7.64422 7.63673 7.6055 7.64334L7.5906 7.6458ZM7.61244 7.56301L7.6163 7.611C7.73595 7.5905 8.53106 7.45227 8.66992 7.38412L8.67776 7.34021C8.55856 7.38118 8.06741 7.51488 7.61244 7.56301Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.84845 9.24731C6.95257 9.41305 6.61312 9.47025 5.97694 9.53843L5.7666 9.61465C5.7666 9.61465 6.49424 9.63688 7.78537 9.3503L7.84845 9.24731Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.80775 9.63C5.78132 9.63 5.76788 9.63 5.76788 9.63L5.68945 9.62751L5.97393 9.52511C6.59744 9.45783 6.93318 9.40253 7.84752 9.23327L7.87958 9.22742L7.79553 9.36465L7.78976 9.36596C6.68163 9.61099 5.99196 9.63 5.80775 9.63ZM7.82033 9.2681C6.92921 9.43266 6.59433 9.48754 5.97998 9.55351L5.85208 9.59959C6.08753 9.59621 6.75194 9.56403 7.77721 9.33625L7.82033 9.2681Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M8.05881 8.94714C8.05881 8.94714 7.12529 9.14421 6.49868 9.21135L5.95215 9.54284C5.95215 9.54284 7.42825 9.39055 7.87404 9.25173L8.05881 8.94714Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.8877 9.5647L6.49745 9.19647C7.11622 9.13022 8.04695 8.93447 8.05627 8.93316L8.08906 8.92627L7.88225 9.26552L7.87724 9.267C7.43529 9.40465 5.96747 9.55722 5.95268 9.55868L5.8877 9.5647ZM6.50322 9.22618L6.01708 9.52093C6.30809 9.48949 7.47443 9.35856 7.86511 9.23906L8.02922 8.96872C7.85848 9.00411 7.05742 9.16648 6.50322 9.22618Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M8.1267 8.87085C8.1267 8.87085 7.19301 9.06805 6.5664 9.1352L6.55371 9.22488C6.55371 9.22488 7.63451 9.09936 8.08033 8.96053L8.1267 8.87085Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.53613 9.24191L6.55313 9.12151L6.56405 9.1202C7.18282 9.05392 8.11371 8.85817 8.12301 8.85686L8.15255 8.85059L8.0889 8.9739L8.08328 8.97566C7.64146 9.11317 6.56508 9.23897 6.5543 9.24043L6.53613 9.24191ZM6.57794 9.14901L6.56968 9.20753C6.71295 9.19025 7.65905 9.0738 8.06998 8.94758L8.09952 8.89169C7.93558 8.92563 7.13511 9.08831 6.57794 9.1487V9.14901Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M8.30568 5.37122C8.30568 5.37122 8.49253 5.74219 8.49474 5.78592C8.49698 5.82969 7.80921 6.31476 7.80921 6.31476C7.80921 6.31476 7.4336 6.2687 7.429 6.25624C7.42441 6.24381 7.4336 5.94334 7.43581 5.93119C7.43802 5.91906 8.30568 5.37122 8.30568 5.37122Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.81328 6.33016H7.80827C7.42423 6.28306 7.42022 6.27267 7.41639 6.26256C7.40885 6.24238 7.42201 5.93138 7.42243 5.92903C7.42406 5.9201 7.42613 5.9103 8.29897 5.3585L8.31168 5.35046L8.31877 5.36435C8.35021 5.42682 8.50709 5.74062 8.50944 5.78553C8.51182 5.83044 8.13441 6.10414 7.81757 6.32752L7.81328 6.33016ZM7.44268 6.24604C7.48196 6.25685 7.67902 6.28348 7.80634 6.29899C8.05996 6.11993 8.46397 5.82414 8.4817 5.78304C8.47976 5.75817 8.37267 5.53538 8.30073 5.39202C7.97445 5.59826 7.49747 5.90212 7.44976 5.93883C7.44696 5.9773 7.44105 6.20141 7.44268 6.24604Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M8.51976 5.87319C8.51976 5.87319 8.07339 6.28076 7.90942 6.37058L7.76172 6.32934C7.76172 6.32934 8.3332 5.93874 8.48815 5.77637L8.51976 5.87319Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.91158 6.38636L7.72754 6.33501L7.7547 6.31641C7.76047 6.31261 8.3268 5.92495 8.4785 5.76535L8.49446 5.74866L8.53685 5.87785L8.52963 5.88457C8.51129 5.90126 8.08011 6.29418 7.91645 6.38387L7.91158 6.38636ZM7.7965 6.3233L7.9082 6.35447C8.06077 6.268 8.44571 5.921 8.50376 5.86847L8.4822 5.80309C8.32962 5.95261 7.90878 6.24591 7.7965 6.3233Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.47694 3.15222C3.50334 3.15222 1.90332 4.8565 1.90332 6.95865C1.90332 9.06084 3.50334 10.7649 5.47694 10.7649C7.45052 10.7649 9.0507 9.06098 9.0507 6.95865C9.0507 4.85633 7.45066 3.15222 5.47694 3.15222ZM5.47694 10.353C3.71678 10.353 2.29003 8.83334 2.29003 6.9591C2.29003 5.08484 3.71678 3.56519 5.47694 3.56519C7.23708 3.56519 8.66399 5.08484 8.66399 6.9591C8.66399 8.83334 7.23708 10.353 5.47694 10.353Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.47744 10.78C3.49926 10.78 1.88965 9.06583 1.88965 6.95869C1.88965 4.85155 3.49971 3.13733 5.47744 3.13733C7.45516 3.13733 9.06538 4.85155 9.06538 6.95869C9.06538 9.06583 7.45592 10.78 5.47744 10.78ZM5.47744 3.16732C3.51478 3.16732 1.91756 4.86809 1.91756 6.95869C1.91756 9.04931 3.51433 10.7499 5.47744 10.7499C7.44054 10.7499 9.03733 9.04917 9.03733 6.95869C9.03733 4.86823 7.44026 3.16732 5.47744 3.16732ZM5.47744 10.3681C3.71243 10.3681 2.27695 8.83866 2.27695 6.95869C2.27695 5.07874 3.71302 3.54915 5.47802 3.54915C7.24306 3.54915 8.67926 5.0786 8.67926 6.95869C8.67926 8.8388 7.24261 10.3681 5.47744 10.3681ZM5.47744 3.57928C3.72794 3.57928 2.30457 5.09526 2.30457 6.95855C2.30457 8.82183 3.72794 10.3378 5.47744 10.3378C7.22696 10.3378 8.65045 8.82183 8.65045 6.95855C8.65045 5.09526 7.2271 3.57928 5.47744 3.57928Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.47722 3.2533C3.55695 3.2533 1.99902 4.91207 1.99902 6.95806C1.99902 9.00405 3.55636 10.6632 5.47722 10.6632C7.39808 10.6632 8.95555 9.00463 8.95555 6.95865C8.95555 4.91266 7.39822 3.2533 5.47722 3.2533ZM5.47722 10.4339C3.67511 10.4339 2.2138 8.87765 2.2138 6.95806C2.2138 5.03846 3.67497 3.48222 5.47722 3.48222C7.27947 3.48222 8.74065 5.03829 8.74065 6.95806C8.74065 8.87779 7.27961 10.4345 5.47722 10.4345V10.4339Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.47757 10.6783C3.55198 10.6783 1.98535 9.00961 1.98535 6.95864C1.98535 4.90767 3.55198 3.23865 5.47757 3.23865C7.40316 3.23865 8.96995 4.90753 8.96995 6.95864C8.96995 9.00975 7.40271 10.6783 5.47757 10.6783ZM5.47757 3.26894C3.5675 3.26894 2.01356 4.92419 2.01356 6.95864C2.01356 8.99307 3.5675 10.6482 5.47757 10.6482C7.38765 10.6482 8.94173 8.99307 8.94173 6.95864C8.94173 4.92419 7.38795 3.26894 5.47757 3.26894ZM5.47757 10.4495C3.67045 10.4495 2.20013 8.88423 2.20013 6.95864C2.20013 5.03303 3.67045 3.46774 5.47757 3.46774C7.28469 3.46774 8.75517 5.03303 8.75517 6.95864C8.75517 8.88423 7.28455 10.4495 5.47757 10.4495ZM5.47757 3.49787C3.68596 3.49787 2.2279 5.0503 2.2279 6.95864C2.2279 8.86698 3.68552 10.4194 5.47757 10.4194C7.26963 10.4194 8.72725 8.86681 8.72725 6.95864C8.72725 5.05044 7.26977 3.49787 5.47757 3.49787Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.29102 8.76424L2.44139 9.01207C2.44139 9.01207 2.76369 8.64211 3.71246 8.53151L3.56134 8.26453C3.56134 8.26453 2.85661 8.28368 2.29102 8.76424Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M2.43967 9.0364L2.27246 8.76093L2.28251 8.75245C2.84545 8.27438 3.55491 8.24979 3.562 8.24951H3.57026L3.73616 8.54413L3.71429 8.54662C2.78296 8.65532 2.45518 9.01884 2.45193 9.02251L2.43967 9.0364ZM2.31013 8.76751L2.4441 8.9884C2.51353 8.92008 2.85326 8.62107 3.68976 8.51971L3.55519 8.28053C3.47545 8.28431 2.83184 8.33127 2.31072 8.76751H2.31013Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.22656 8.7194L2.27088 8.79561C2.27088 8.79561 2.66039 8.41439 3.5799 8.30278L3.53337 8.23035C3.53337 8.23035 2.78506 8.27702 2.22656 8.7194Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M2.26872 8.81894L2.20801 8.71551L2.21849 8.70734C2.77404 8.26729 3.52546 8.21566 3.53313 8.21521H3.54111L3.60537 8.31542L3.58202 8.31836C2.67788 8.42807 2.28526 8.80343 2.28142 8.80724L2.26872 8.81894ZM2.24582 8.72313L2.27536 8.77286C2.34922 8.70835 2.74805 8.39368 3.55573 8.29011L3.52619 8.2452C3.44569 8.25253 2.76282 8.3201 2.24582 8.72313Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.39453 9.00453L2.43574 9.07299C2.43574 9.07299 2.79202 8.69936 3.74079 8.58876L3.70134 8.51562C3.70134 8.51562 2.95348 8.54679 2.39453 9.00453Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M2.43441 9.09678L2.37695 9.00093L2.38715 8.99245C2.94284 8.5372 3.69456 8.50153 3.70178 8.50122H3.71021L3.76487 8.60157L3.74331 8.60392C2.81004 8.71276 2.45007 9.08037 2.44653 9.08404L2.43441 9.09678ZM2.41462 9.00796L2.43988 9.0501C2.51167 8.9847 2.88819 8.67765 3.71892 8.57626L3.6947 8.53238C3.61123 8.53706 2.9303 8.59281 2.41462 9.00796Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M1.875 6.76195V7.07149C1.875 7.07149 2.30455 6.79574 3.34047 6.58039V6.28418C3.34047 6.28418 2.70884 6.34474 1.875 6.76195Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M1.86035 7.09802V6.75233L1.86847 6.74838C2.69493 6.33483 3.33231 6.26987 3.33867 6.26928L3.35343 6.26782V6.59273L3.34206 6.59508C2.32121 6.80718 1.88546 7.08164 1.88118 7.08427L1.86035 7.09802ZM1.88856 6.77148V7.0458C1.98738 6.98918 2.43259 6.75468 3.32582 6.56801V6.30103C3.22432 6.3136 2.63525 6.39948 1.88856 6.77148Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M1.84863 6.72803V6.82267C1.84863 6.82267 2.42471 6.41569 3.33331 6.30408V6.21045C3.33331 6.21045 2.44303 6.32441 1.84863 6.72803Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M1.83496 6.85015V6.72026L1.84146 6.71572C2.43128 6.31487 3.32273 6.19668 3.33174 6.19551L3.34753 6.1936V6.3175L3.33485 6.31899C2.44088 6.42883 1.86229 6.831 1.85653 6.83522L1.83496 6.85015ZM1.86332 6.73619V6.79471C1.97691 6.72157 2.52301 6.39067 3.31948 6.29001V6.22726C3.1979 6.24496 2.40425 6.3718 1.86332 6.73619Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M1.84961 7.07702V7.17124C1.84961 7.17124 2.42347 6.75519 3.32673 6.66772L3.33295 6.56006C3.33295 6.56006 2.44327 6.67343 1.84961 7.07702Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M1.83594 7.19956V7.06878L1.84244 7.06441C2.4321 6.66342 3.32297 6.54624 3.33181 6.54479L3.34867 6.5426L3.34055 6.68112L3.32843 6.68229C2.43964 6.76831 1.86371 7.17968 1.85795 7.18332L1.83594 7.19956ZM1.86415 7.08532V7.14384C1.97789 7.0685 2.52162 6.73351 3.31381 6.65407L3.31837 6.57741C3.19282 6.59541 2.4036 6.72194 1.86415 7.08605V7.08532Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.13379 5.54563C2.13379 5.54563 2.13379 5.42741 2.15521 5.37782C2.17663 5.32824 2.1911 5.32062 2.1911 5.32062C2.1911 5.32062 2.54561 5.27484 3.32598 5.70582L3.31534 5.79724C3.31534 5.79724 2.47752 5.40064 2.17677 5.4084L2.13379 5.54563Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.32738 5.81935L3.31008 5.811C3.30182 5.8072 2.48999 5.42452 2.18747 5.42334L2.12012 5.63779V5.54565C2.12012 5.54066 2.12012 5.42348 2.14301 5.37154C2.16591 5.31963 2.18083 5.30952 2.18526 5.3072L2.18984 5.30571C2.20136 5.30445 2.21296 5.30392 2.22455 5.30412C2.31953 5.30412 2.68054 5.3322 3.3324 5.69237L3.3411 5.69718L3.32738 5.81935ZM2.186 5.39321C2.47212 5.39321 3.18069 5.71782 3.30417 5.77547L3.31128 5.71432C2.66991 5.36174 2.31761 5.33397 2.22455 5.33397C2.21067 5.33397 2.20136 5.33397 2.19678 5.33497C2.1847 5.34959 2.17517 5.36611 2.16857 5.38383C2.1639 5.39579 2.16049 5.40819 2.15838 5.42085L2.16694 5.39335L2.186 5.39321Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.46001 4.85931L2.21289 5.32831C2.21289 5.32831 2.85028 5.42368 3.33714 5.74024L3.31925 5.07289C3.31925 5.07289 2.64968 4.84788 2.46001 4.85931Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.35174 5.7674L3.32959 5.75276C2.85085 5.44162 2.21717 5.34404 2.21082 5.34314L2.19043 5.34009L2.45129 4.8446H2.45897C2.464 4.8446 2.46916 4.8446 2.47478 4.8446C2.68157 4.8446 3.29725 5.05057 3.32337 5.0592L3.33298 5.06242L3.35174 5.7674ZM2.23504 5.31668C2.34612 5.33598 2.8903 5.44072 3.32206 5.71297L3.30523 5.08392C3.22487 5.05729 2.664 4.87386 2.47478 4.87386H2.46887L2.23504 5.31668Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M2.44562 4.7677C2.44562 4.7677 2.39511 4.84786 2.39186 4.86251C2.38861 4.87712 2.38477 5.00732 2.38477 5.00732L2.45995 4.8587C2.45995 4.8587 2.73189 4.87334 3.30841 5.0913L3.31566 5.00352C3.31566 5.00352 2.81076 4.79828 2.44562 4.7677Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.32116 5.1124L3.30402 5.10596C2.79308 4.91332 2.51951 4.8798 2.46826 4.87499L2.36914 5.07101L2.37092 5.00737C2.37092 4.98556 2.37475 4.87571 2.37845 4.85933C2.38214 4.84293 2.41877 4.78399 2.43414 4.75926L2.43872 4.75195L2.44699 4.75268C2.81007 4.78295 3.31598 4.98791 3.32099 4.98995L3.3309 4.99404L3.32116 5.1124ZM2.45201 4.84368H2.46087C2.46368 4.84368 2.73621 4.86124 3.29635 5.07071L3.30091 5.01367C3.22898 4.98514 2.78392 4.81266 2.45304 4.78295C2.43562 4.80972 2.41988 4.83752 2.40592 4.86619C2.40459 4.87205 2.40282 4.90439 2.40134 4.94345L2.45201 4.84368Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M8.64335 8.76153L8.49299 9.01022C8.49299 9.01022 8.17068 8.6404 7.22266 8.52966L7.37302 8.26282C7.37302 8.26282 8.07747 8.2811 8.64335 8.76153Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M8.49584 9.03393L8.48344 9.01932C8.48019 9.01579 8.1524 8.65226 7.22123 8.54357L7.19922 8.54108L7.36523 8.24646H7.37338C7.3806 8.24646 8.09007 8.27118 8.65301 8.74926L8.66289 8.75774L8.49584 9.03393ZM7.24617 8.51666C8.08253 8.61906 8.4233 8.91748 8.49125 8.98566L8.62523 8.76491C8.10396 8.32839 7.46052 8.28216 7.38091 8.27748L7.24617 8.51666Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M8.70784 8.71678L8.66352 8.79317C8.66352 8.79317 8.27432 8.41178 7.35449 8.30031L7.40103 8.22717C7.40103 8.22717 8.14933 8.27441 8.70784 8.71678Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M8.66643 8.8164L8.65403 8.80411C8.65005 8.80033 8.25654 8.42465 7.35326 8.31523L7.33008 8.31229L7.39434 8.21252H7.40232C7.40985 8.21252 8.16126 8.2646 8.71694 8.70465L8.7273 8.71283L8.66643 8.8164ZM7.37972 8.28815C8.1871 8.39058 8.58579 8.70583 8.66024 8.7709L8.68978 8.72117C8.17276 8.31814 7.49004 8.25072 7.40895 8.244L7.37972 8.28815Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M8.54058 9.00244L8.49936 9.07118C8.49936 9.07118 8.14309 8.69741 7.19434 8.58684L7.23376 8.5144C7.23376 8.5144 7.9815 8.54425 8.54058 9.00244Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M8.50051 9.09425L8.48811 9.08137C8.48455 9.07757 8.12324 8.70981 7.19148 8.60126L7.16992 8.59876L7.22441 8.49841H7.23284C7.24037 8.49841 7.99223 8.53439 8.54749 8.98965L8.55783 8.99799L8.50051 9.09425ZM7.21539 8.57376C7.69576 8.63228 8.01911 8.7594 8.20685 8.85639C8.37275 8.94196 8.46313 9.01832 8.4946 9.04657L8.51972 9.00474C8.00418 8.58897 7.32322 8.53383 7.23964 8.52854L7.21539 8.57376Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M9.06061 6.75928V7.06868C9.06061 7.06868 8.63106 6.7935 7.59473 6.57759V6.28149C7.59473 6.28149 8.22677 6.34206 9.06061 6.75928Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M9.07471 7.0953L9.05329 7.08156C9.04901 7.07892 8.61327 6.80464 7.59256 6.59237L7.58105 6.59005V6.26514L7.59584 6.26659C7.60217 6.26659 8.23942 6.33214 9.06587 6.7457L9.07399 6.74965L9.07471 7.0953ZM7.60956 6.56518C8.50265 6.75197 8.94785 6.98647 9.04666 7.04325V6.7688C8.29967 6.39651 7.71089 6.31092 7.60956 6.29834V6.56518Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M9.08607 6.72538V6.81957C9.08607 6.81957 8.51 6.41262 7.60156 6.30098V6.20752C7.60156 6.20752 8.49241 6.32176 9.08607 6.72538Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M9.09978 6.84781L9.07777 6.83229C9.07215 6.82821 8.49341 6.4259 7.59946 6.31617L7.58691 6.31457V6.19067L7.60271 6.19272C7.61172 6.19389 8.50375 6.31194 9.09298 6.71293L9.09948 6.7173L9.09978 6.84781ZM7.61528 6.28781C8.41174 6.38844 8.95782 6.71892 9.07142 6.79265V6.73413C8.53049 6.36957 7.73683 6.24275 7.61542 6.22503L7.61528 6.28781Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M9.08503 7.07436V7.16856C9.08503 7.16856 8.51117 6.7525 7.60789 6.66503L7.60156 6.55737C7.60156 6.55737 8.49138 6.67074 9.08503 7.07436Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M9.09867 7.1971L9.07666 7.181C9.07089 7.17692 8.49496 6.76613 7.60618 6.67997L7.59406 6.6788L7.58594 6.54028L7.60277 6.54247C7.61164 6.54364 8.50249 6.66082 9.09217 7.06164L9.09867 7.06618V7.1971ZM7.62153 6.65116C8.41373 6.73088 8.95746 7.06573 9.0712 7.14108V7.08256C8.53175 6.71917 7.74179 6.59278 7.6171 6.57464L7.62153 6.65116Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M8.80096 5.54304C8.80096 5.54304 8.80096 5.42485 8.77912 5.37523C8.75725 5.32565 8.74246 5.31806 8.74246 5.31806C8.74246 5.31806 8.37998 5.27225 7.58203 5.70323L7.59298 5.79482C7.59298 5.79482 8.4497 5.39822 8.75708 5.40581L8.80096 5.54304Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.58116 5.81645L7.56641 5.69459L7.57525 5.68978C8.24233 5.32961 8.61117 5.30167 8.70836 5.30167C8.72014 5.3015 8.73193 5.30198 8.74366 5.30312L8.74826 5.30458C8.75268 5.30693 8.76909 5.3185 8.79138 5.36881C8.81369 5.41913 8.81473 5.53807 8.81473 5.54303V5.63389L8.74677 5.42075C8.4376 5.42176 7.60687 5.80475 7.59861 5.80856L7.58116 5.81645ZM7.59712 5.71187L7.60437 5.77302C7.72917 5.7161 8.45504 5.3906 8.74781 5.3906H8.76702L8.77735 5.4228C8.77514 5.40863 8.77133 5.39474 8.76598 5.38138C8.75909 5.36346 8.7491 5.34689 8.73644 5.33238C8.73171 5.33238 8.72166 5.33135 8.70808 5.33135C8.61383 5.33166 8.25283 5.35988 7.59712 5.71187Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M8.46707 4.85662L8.71966 5.32562C8.71966 5.32562 8.0681 5.42099 7.57031 5.73756L7.58848 5.07018C7.58848 5.07018 8.27359 4.8452 8.46707 4.85662Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.55566 5.76453L7.57501 5.05898L7.58462 5.05576C7.61211 5.04683 8.27459 4.83061 8.4681 4.84159H8.47577L8.7427 5.33708L8.72186 5.34016C8.71537 5.34117 8.06736 5.43875 7.57784 5.74977L7.55566 5.76453ZM7.60265 5.08135L7.58537 5.7104C8.02718 5.43774 8.58419 5.33285 8.6975 5.31367L8.45894 4.87099C8.27386 4.86573 7.68536 5.05459 7.60265 5.08194V5.08135Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M8.48231 4.76514C8.48231 4.76514 8.53358 4.8453 8.53727 4.86053C8.54097 4.87574 8.54464 5.00549 8.54464 5.00549L8.46769 4.85672C8.46769 4.85672 8.18954 4.87134 7.60017 5.08932L7.59277 5.00154C7.59277 5.00154 8.1089 4.79571 8.48231 4.76514Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.58787 5.10969L7.57812 4.99151L7.58815 4.98739C7.59333 4.98535 8.11046 4.78041 8.48152 4.75012L8.48964 4.74939L8.49423 4.75656C8.51005 4.78128 8.5474 4.84067 8.55124 4.85677C8.5551 4.87287 8.55804 4.97381 8.55894 5.00495L8.5607 5.06727L8.45996 4.87242C8.40841 4.8771 8.12863 4.91031 7.605 5.10342L7.58787 5.10969ZM7.60811 5.01169L7.61282 5.06873C8.18581 4.85912 8.46455 4.84171 8.46721 4.84157H8.47606L8.52864 4.94307C8.52702 4.90345 8.52525 4.86993 8.52377 4.86467C8.50952 4.83585 8.49339 4.80799 8.47547 4.78128C8.13765 4.81054 7.68136 4.9833 7.60811 5.01169Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.6662 3.13196H5.25586V4.64197H5.6662V3.13196Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.67977 4.65767H5.24121V3.11694H5.67977V4.65767ZM5.26941 4.62752H5.65141V3.1471H5.26941V4.62752Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.34407 3.08118H5.25293V4.66402H5.34407V3.08118Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.35876 4.67903H5.23926V3.06604H5.35876V4.67903ZM5.26762 4.64891H5.33054V3.0962H5.26762V4.64891Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.67122 3.08118H5.58008V4.66402H5.67122V3.08118Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.68493 4.67903H5.56543V3.06604H5.68493V4.67903ZM5.59365 4.64891H5.65657V3.0962H5.59365V4.64891Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.6662 9.29639H5.25586V10.8064H5.6662V9.29639Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.67977 10.8214H5.24121V9.28125H5.67977V10.8214ZM5.26941 10.7912H5.65141V9.31138H5.26941V10.7912Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.34407 9.24524H5.25293V10.8282H5.34407V9.24524Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.35876 10.8432H5.23926V9.23022H5.35876V10.8432ZM5.26762 10.8132H5.33054V9.26038H5.26762V10.8132Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.67122 9.24524H5.58008V10.8282H5.67122V9.24524Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.68493 10.8432H5.56543V9.23022H5.68493V10.8432ZM5.59365 10.8132H5.65657V9.26038H5.59365V10.8132Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.30273 4.32275H7.58978V7.73917C7.58978 7.73917 7.47871 8.33078 7.22525 8.66592C6.49126 9.67092 5.4549 9.67092 5.4549 9.67092C5.4549 9.67092 4.32667 9.6838 3.70969 8.66592C3.4011 8.24446 3.32726 7.72543 3.32726 7.72543L3.30273 4.32275Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.45324 9.67809C5.40685 9.67809 4.30787 9.66683 3.70372 8.67045C3.39827 8.25295 3.32099 7.73231 3.31967 7.72705L3.2959 4.31531H7.5967V7.73845C7.59535 7.74575 7.48221 8.3372 7.23124 8.66959C6.50347 9.66597 5.46579 9.67736 5.45531 9.67736L5.45324 9.67809ZM3.30979 4.33037L3.33429 7.72587C3.33429 7.72996 3.41171 8.24681 3.71525 8.66211C4.31555 9.65205 5.40699 9.66347 5.45324 9.66347H5.45531C5.46565 9.66347 6.49666 9.65177 7.22001 8.66138C7.46907 8.33166 7.58147 7.74388 7.58267 7.73803V4.33037H3.30979Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.39258 4.42102H7.50163V7.69554C7.50163 7.69554 7.39515 8.26257 7.15275 8.58353C6.4492 9.54684 5.45595 9.54684 5.45595 9.54684C5.45595 9.54684 4.37398 9.55941 3.78281 8.5844C3.48739 8.18036 3.41621 7.68297 3.41621 7.68297L3.39258 4.42102Z", fill: "#FB1221" }),
            React__default['default'].createElement("path", { d: "M5.45273 9.55419C5.40841 9.55419 4.3548 9.54336 3.77559 8.58867C3.48268 8.18844 3.40885 7.68928 3.40809 7.68433L3.38477 4.41345H7.50785V7.69544C7.50667 7.70261 7.39826 8.26947 7.15749 8.5878C6.45998 9.54291 5.46514 9.5533 5.45525 9.5533L5.45273 9.55419ZM3.39952 4.42852L3.42315 7.6827C3.42315 7.68665 3.49702 8.18186 3.78816 8.5796C4.36292 9.52902 5.40841 9.5391 5.45273 9.5391H5.45467C5.46469 9.5391 6.45275 9.52798 7.14598 8.57887C7.38468 8.26289 7.49237 7.69953 7.49337 7.69382V4.42852H3.39952Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.21973 5.31165H6.68266V7.46456C6.68266 7.46456 6.61885 7.8373 6.4735 8.04839C6.05179 8.68169 5.45651 8.6817 5.45651 8.6817C5.45651 8.6817 4.80806 8.68987 4.45369 8.04884C4.27643 7.78332 4.23389 7.45622 4.23389 7.45622L4.21973 5.31165Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.4552 8.68947C5.42846 8.68947 4.79521 8.68213 4.44751 8.05294C4.27099 7.78935 4.22667 7.46077 4.22667 7.45741L4.21191 5.30432H6.68949V7.46472C6.68874 7.46984 6.62361 7.84303 6.47899 8.05294C6.06022 8.68199 5.46245 8.68947 5.45637 8.68947H5.4552ZM4.22667 5.31941L4.24145 7.45637C4.24145 7.45859 4.28575 7.78378 4.45991 8.04463C4.80409 8.66721 5.42935 8.67438 5.45579 8.67438V8.68185L5.45682 8.67438C5.46287 8.67438 6.05359 8.66679 6.46821 8.04418C6.6109 7.83689 6.67502 7.46707 6.67605 7.46326V5.31941H4.22667Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.73819 4.88208H5.1748V5.19733H5.73819V4.88208Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.74536 5.20495H5.16797V4.87463H5.74536V5.20495ZM5.182 5.19033H5.73119V4.8897H5.182V5.19033Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.33852 4.67871H5.17383V4.9024H5.33852V4.67871Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.34588 4.91001H5.16699V4.67114H5.34588V4.91001ZM5.18105 4.89539H5.33172V4.68693H5.18105V4.89539Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.77549 5.177H5.13574V5.25831H5.77549V5.177Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.78268 5.26594H5.12891V5.16968H5.78268V5.26594ZM5.14307 5.2513H5.76865V5.18429H5.14293L5.14307 5.2513Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.53875 4.59229H5.37402V4.90241H5.53875V4.59229Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.54608 4.9101H5.36719V4.58459H5.54608V4.9101ZM5.38136 4.89548H5.53188V4.59924H5.38136V4.89548Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.73406 4.69397H5.56934V4.90243H5.73406V4.69397Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.74139 4.90997H5.5625V4.68689H5.74139V4.90997ZM5.5767 4.89535H5.72722V4.70151H5.5767V4.89535Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.77549 4.84644H5.13574V4.90994H5.77549V4.84644Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.78268 4.91758H5.12891V4.83887H5.78268V4.91758ZM5.14307 4.90293H5.76865V4.85438H5.14293L5.14307 4.90293Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.61333 5.15286C5.61333 5.05953 5.54227 4.98376 5.45455 4.98376C5.36679 4.98376 5.2959 5.05953 5.2959 5.15286C5.29609 5.16095 5.29685 5.16901 5.29811 5.17699H5.61095C5.61235 5.16901 5.61314 5.16095 5.61333 5.15286Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.6163 5.18427H5.29133L5.29002 5.17492C5.28893 5.1675 5.28828 5.16002 5.28809 5.15252C5.28809 5.05511 5.36195 4.97595 5.45382 4.97595C5.54571 4.97595 5.61972 5.05511 5.61972 5.15252C5.61961 5.16033 5.61885 5.16812 5.61751 5.17579L5.6163 5.18427ZM5.3036 5.16966H5.60421C5.60502 5.16411 5.60544 5.15854 5.60552 5.15297C5.60552 5.06387 5.53743 4.99205 5.45382 4.99205C5.37024 4.99205 5.30228 5.06446 5.30228 5.15297C5.30237 5.15854 5.30281 5.16411 5.3036 5.16966Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.57504 5.15288C5.57504 5.08193 5.52114 5.02441 5.4545 5.02441C5.38788 5.02441 5.33398 5.08193 5.33398 5.15288C5.33401 5.16097 5.3348 5.16903 5.33634 5.17701H5.57268C5.57414 5.16903 5.57492 5.16097 5.57504 5.15288Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.57803 5.18424H5.32973L5.32869 5.17811C5.3271 5.16965 5.32626 5.16108 5.32617 5.15251C5.32617 5.07761 5.38349 5.0166 5.4538 5.0166C5.5241 5.0166 5.58142 5.07761 5.58142 5.15251C5.58139 5.16108 5.58061 5.16965 5.57907 5.17811L5.57803 5.18424ZM5.34168 5.16962H5.56636C5.56706 5.16408 5.56739 5.15851 5.56739 5.15293C5.56739 5.08624 5.51657 5.03211 5.45394 5.03211C5.39133 5.03211 5.34051 5.08624 5.34051 5.15293C5.34051 5.15851 5.34084 5.16408 5.34154 5.16962H5.34168Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.3626 4.68384V4.61129H5.3143V4.56946H5.27485V4.60939H5.24088V4.56946H5.20409V4.60939H5.15137V4.68283L5.3626 4.68384Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.36898 4.69126L5.14355 4.69025V4.60247H5.19645V4.56238H5.24727V4.60247H5.26706V4.56238H5.32068V4.60438H5.36898V4.69126ZM5.15716 4.67533L5.3542 4.6762V4.61885H5.3059V4.57688H5.28123V4.61695H5.23307V4.57688H5.21047V4.61695H5.15716V4.67533Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.56182 4.58936V4.51695H5.51338V4.47498H5.47409V4.51504H5.43996V4.47498H5.40334V4.51504H5.35059V4.58849L5.56182 4.58936Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.56901 4.59697L5.34375 4.59597V4.50819H5.39647V4.46753H5.44729V4.5076H5.46737V4.46753H5.52085V4.5095H5.56915L5.56901 4.59697ZM5.35778 4.58104L5.55498 4.58191V4.52457H5.50651V4.48215H5.48215V4.52224H5.43399V4.48215H5.4114V4.52224H5.35851L5.35778 4.58104Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.75811 4.68948V4.61693H5.70981V4.57507H5.67038V4.61517H5.63639V4.57507H5.59977V4.61517H5.54688V4.68845L5.75811 4.68948Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.76432 4.69698L5.53906 4.69611V4.6076H5.59179V4.5675H5.64261V4.6076H5.66254V4.5675H5.71602V4.6095H5.76432V4.69698ZM5.55309 4.68104L5.75029 4.68191V4.62457H5.70183V4.5826H5.67674V4.62266H5.62844V4.5826H5.60598V4.62266H5.55309V4.68104Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.27102 4.71997H5.24414V4.79809H5.27102V4.71997Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.27835 4.80583H5.2373V4.71265H5.27835V4.80583ZM5.25147 4.79119H5.26418V4.72813H5.25147V4.79119Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.48779 4.65527H5.42871V4.71816H5.48779V4.65527Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.49403 4.72566H5.4209V4.64771H5.49403V4.72566ZM5.43493 4.71104H5.47998V4.66322H5.43493V4.71104Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.6699 4.71997H5.6377V4.79809H5.6699V4.71997Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M5.67656 4.80583H5.62988V4.71265H5.67611L5.67656 4.80583ZM5.64436 4.79119H5.66253V4.72813H5.64467L5.64436 4.79119Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.07703 4.88208H3.51367V5.19733H4.07703V4.88208Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.08325 5.20495H3.50586V4.87463H4.08325V5.20495ZM3.52003 5.19033H4.06922V4.8897H3.52003V5.19033Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.67739 4.67871H3.5127V4.9024H3.67739V4.67871Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.68475 4.91001H3.50586V4.67114H3.68475V4.91001ZM3.52006 4.89539H3.67058V4.68693H3.52006V4.89539Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.11324 5.177H3.47363V5.25831H4.11324V5.177Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.12157 5.26594H3.46777V5.16968H4.12157V5.26594ZM3.4818 5.2513H4.10738V5.18429H3.4818V5.2513Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.87759 4.59229H3.71289V4.90241H3.87759V4.59229Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.88478 4.9101H3.70605V4.58459H3.88478V4.9101ZM3.72008 4.89548H3.87061V4.59924H3.72008V4.89548Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.0729 4.69397H3.9082V4.90243H4.0729V4.69397Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.08062 4.90997H3.90234V4.68689H4.08121L4.08062 4.90997ZM3.91592 4.89535H4.06645V4.70151H3.91592V4.89535Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.11324 4.84644H3.47363V4.90994H4.11324V4.84644Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.12157 4.91758H3.46777V4.83887H4.12157V4.91758ZM3.4818 4.90293H4.10738V4.85438H3.4818V4.90293Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.9522 5.15286C3.9522 5.05953 3.88117 4.98376 3.79341 4.98376C3.70569 4.98376 3.63477 5.05953 3.63477 5.15286C3.63496 5.16095 3.63575 5.16901 3.63715 5.17699H3.94999C3.95125 5.16901 3.95201 5.16095 3.9522 5.15286Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.95517 5.18427H3.6302L3.62889 5.17492C3.62779 5.1675 3.62715 5.16002 3.62695 5.15252C3.62695 5.05511 3.70082 4.97595 3.79269 4.97595C3.88458 4.97595 3.95859 5.05511 3.95859 5.15252C3.95845 5.16033 3.95775 5.16809 3.95651 5.17579L3.95517 5.18427ZM3.64247 5.16966H3.94307C3.94389 5.16411 3.94431 5.15854 3.94439 5.15297C3.94439 5.06387 3.87629 4.99205 3.79269 4.99205C3.70911 4.99205 3.64115 5.06446 3.64115 5.15297C3.64123 5.15854 3.64168 5.16411 3.64247 5.16966Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.91376 5.15288C3.91376 5.08193 3.85984 5.02441 3.79322 5.02441C3.72661 5.02441 3.67285 5.08193 3.67285 5.15288C3.67282 5.16097 3.67358 5.16903 3.67506 5.17701H3.91138C3.91287 5.16903 3.91365 5.16097 3.91376 5.15288Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.91712 5.18424H3.6694L3.66837 5.17811C3.66683 5.16965 3.66604 5.16108 3.66602 5.15251C3.66602 5.07761 3.72319 5.0166 3.7935 5.0166C3.86381 5.0166 3.92112 5.07761 3.92112 5.15251C3.9211 5.16108 3.92028 5.16965 3.91874 5.17811L3.91712 5.18424ZM3.6808 5.16962H3.90547C3.9062 5.16408 3.90659 5.15851 3.90665 5.15293C3.90665 5.08624 3.85569 5.03211 3.79305 5.03211C3.73042 5.03211 3.6796 5.08624 3.6796 5.15293C3.67965 5.15851 3.68004 5.16408 3.6808 5.16962Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.70147 4.68384V4.61129H3.65317V4.56946H3.61374V4.60939H3.57975V4.56946H3.54313V4.60939H3.49023V4.68283L3.70147 4.68384Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.70782 4.69126L3.48242 4.69025V4.60247H3.53531V4.56238H3.5861V4.60247H3.60635V4.56238H3.65983V4.60438H3.70813L3.70782 4.69126ZM3.49659 4.67533L3.69365 4.6762V4.61885H3.64535V4.57688H3.6201V4.61695H3.57194V4.57688H3.54948V4.61695H3.49659V4.67533Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.90069 4.58936V4.51695H3.85239V4.47498H3.81293V4.51504H3.77897V4.47498H3.74218V4.51504H3.68945V4.58849L3.90069 4.58936Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.90802 4.59697L3.68262 4.59597V4.50819H3.73548V4.46753H3.7863V4.5076H3.8061V4.46753H3.85958V4.5095H3.90802V4.59697ZM3.69679 4.58104L3.89385 4.58191V4.52457H3.84555V4.48215H3.82029V4.52224H3.77213V4.48215H3.74954V4.52224H3.69679V4.58104Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.096 4.68948V4.61693H4.04753V4.57507H4.00825V4.61517H3.97411V4.57507H3.93749V4.61517H3.88477V4.68845L4.096 4.68948Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.10333 4.69698L3.87793 4.69611V4.6076H3.93124V4.5675H3.98206V4.6076H4.002V4.5675H4.05548V4.6095H4.10392L4.10333 4.69698ZM3.89196 4.68104L4.08916 4.68191V4.62457H4.04086V4.5826H4.01561V4.62266H3.96745V4.5826H3.94485V4.62266H3.89196V4.68104Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.60891 4.71997H3.58203V4.79809H3.60891V4.71997Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.61624 4.80583H3.5752V4.71265H3.61624V4.80583ZM3.58936 4.79119H3.60207V4.72813H3.58936V4.79119Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.82568 4.65527H3.7666V4.71816H3.82568V4.65527Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.83363 4.72566H3.75977V4.64771H3.83363V4.72566ZM3.77452 4.71104H3.81884V4.66322H3.77452V4.71104Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.00876 4.71997H3.97656V4.79809H4.00876V4.71997Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.01609 4.80583H3.96973V4.71265H4.01609V4.80583ZM3.98375 4.79119H4.00193V4.72813H3.98375V4.79119Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.07703 6.65918H3.51367V6.97443H4.07703V6.65918Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.08325 6.98193H3.50586V6.65161H4.08325V6.98193ZM3.52003 6.96731H4.06922V6.66668H3.52003V6.96731Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.67739 6.45581H3.5127V6.67947H3.67739V6.45581Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.68475 6.687H3.50586V6.44824H3.68475V6.687ZM3.52006 6.67235H3.67058V6.46333H3.52006V6.67235Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.11324 6.9541H3.47363V7.03544H4.11324V6.9541Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.12157 7.04282H3.46777V6.94641H4.12157V7.04282ZM3.4818 7.0282H4.10738V6.96192H3.4818V7.0282Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.87759 6.36938H3.71289V6.67954H3.87759V6.36938Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.88478 6.68701H3.70605V6.36182H3.88478V6.68701ZM3.72008 6.67239H3.87061V6.37688H3.72008V6.67239Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.0729 6.47107H3.9082V6.67953H4.0729V6.47107Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.08062 6.68701H3.90234V6.46362H4.08121L4.08062 6.68701ZM3.91592 6.67236H4.06645V6.47855H3.91592V6.67236Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.11324 6.62366H3.47363V6.68713H4.11324V6.62366Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.12157 6.69466H3.46777V6.61609H4.12157V6.69466ZM3.4818 6.68001H4.10738V6.63115H3.4818V6.68001Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.9522 6.92982C3.9522 6.83649 3.88117 6.76086 3.79341 6.76086C3.70569 6.76086 3.63477 6.83649 3.63477 6.92982C3.63496 6.93796 3.63575 6.94608 3.63715 6.95412H3.94999C3.95125 6.94606 3.95201 6.93796 3.9522 6.92982Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.95517 6.96157H3.6302L3.62903 6.95236C3.62779 6.94491 3.62709 6.93738 3.62695 6.92985C3.62695 6.83255 3.70082 6.75342 3.79269 6.75342C3.88458 6.75342 3.95859 6.83255 3.95859 6.92985C3.95839 6.93769 3.95766 6.9455 3.95637 6.95325L3.95517 6.96157ZM3.64247 6.94695H3.94307C3.94389 6.94144 3.94433 6.93587 3.94439 6.93027C3.94439 6.84134 3.87629 6.76935 3.79269 6.76935C3.70911 6.76935 3.64115 6.84251 3.64115 6.93027C3.64123 6.9357 3.64168 6.94113 3.64247 6.94651V6.94695Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.91376 6.92981C3.91376 6.859 3.85983 6.80151 3.79322 6.80151C3.72661 6.80151 3.67285 6.859 3.67285 6.92981C3.67282 6.93796 3.67355 6.94608 3.67506 6.95409H3.91138C3.91287 6.94608 3.91365 6.93796 3.91376 6.92981Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.91712 6.96158H3.6694L3.66837 6.95545C3.66683 6.94699 3.66604 6.93843 3.66602 6.92983C3.66602 6.85493 3.72319 6.79395 3.7935 6.79395C3.86381 6.79395 3.92112 6.85493 3.92112 6.92983C3.9211 6.93843 3.92031 6.94699 3.91874 6.95545L3.91712 6.96158ZM3.6808 6.94697H3.90547C3.9062 6.94142 3.90659 6.93585 3.90665 6.93028C3.90665 6.86372 3.85569 6.80943 3.79305 6.80943C3.73042 6.80943 3.6796 6.86372 3.6796 6.93028C3.67968 6.93571 3.68007 6.94114 3.6808 6.94652V6.94697Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.70147 6.46082V6.38841H3.65317V6.34644H3.61374V6.3865H3.57975V6.34644H3.54313V6.3865H3.49023V6.45995L3.70147 6.46082Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.70782 6.46848L3.48242 6.46745V6.3797H3.53531V6.3396H3.5861V6.3797H3.60635V6.3396H3.65983V6.38157H3.70813L3.70782 6.46848ZM3.49659 6.45238L3.69365 6.45342V6.39594H3.64535V6.35466H3.6201V6.3949H3.57194V6.35466H3.54948V6.3949H3.49659V6.45238Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.90069 6.36646V6.29405H3.85239V6.25208H3.81293V6.29214H3.77897V6.25208H3.74218V6.29214H3.68945V6.36559L3.90069 6.36646Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.90802 6.3741L3.68262 6.37309V6.28459H3.73548V6.24463H3.7863V6.28459H3.8061V6.24463H3.85958V6.28649H3.90802V6.3741ZM3.69679 6.35817L3.89385 6.3589V6.30155H3.84555V6.25955H3.82029V6.29965H3.77213V6.25955H3.74954V6.29965H3.69679V6.35817Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.096 6.46655V6.39415H4.04753V6.35217H4.00825V6.39224H3.97411V6.35217H3.93749V6.39224H3.88477V6.46569L4.096 6.46655Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.10333 6.4741L3.87793 6.47306V6.38531H3.93124V6.34521H3.98206V6.38531H4.002V6.34521H4.05548V6.38721H4.10392L4.10333 6.4741ZM3.89196 6.45817L4.08916 6.45904V6.40169H4.04086V6.35969H4.01561V6.39979H3.96745V6.35969H3.94485V6.39979H3.89196V6.45817Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.60891 6.49719H3.58203V6.57545H3.60891V6.49719Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.61624 6.58283H3.5752V6.4895H3.61624V6.58283ZM3.58936 6.56821H3.60207V6.50501H3.58936V6.56821Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M3.82568 6.43225H3.7666V6.49514H3.82568V6.43225Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.83363 6.50264H3.75977V6.42468H3.83363V6.50264ZM3.77452 6.48802H3.81884V6.44017H3.77452V6.48802Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.00876 6.49719H3.97656V6.57545H4.00876V6.49719Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.01609 6.58283H3.96973V6.4895H4.01609V6.58283ZM3.98375 6.56821H4.00193V6.50501H3.98375V6.56821Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.37781 4.88208H6.81445V5.19733H7.37781V4.88208Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.38503 5.20495H6.80762V4.87463H7.38503V5.20495ZM6.82181 5.19033H7.37101V4.8897H6.82181V5.19033Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.97915 4.67871H6.81445V4.9024H6.97915V4.67871Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.98553 4.91001H6.80664V4.67114H6.98553V4.91001ZM6.82081 4.89539H6.97134V4.68693H6.82081V4.89539Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.415 5.177H6.77539V5.25831H7.415V5.177Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.42247 5.26594H6.76855V5.16968H7.42247V5.26594ZM6.78272 5.2513H7.4083V5.18429H6.78244L6.78272 5.2513Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.17837 4.59229H7.01367V4.90241H7.17837V4.59229Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.18573 4.9101H7.00684V4.58459H7.18573V4.9101ZM7.021 4.89548H7.17168V4.59924H7.021V4.89548Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.37368 4.69397H7.20898V4.90243H7.37368V4.69397Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.38104 4.90997H7.20215V4.68689H7.38104V4.90997ZM7.21634 4.89535H7.36687V4.70151H7.21634V4.89535Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.415 4.84644H6.77539V4.90994H7.415V4.84644Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.42247 4.91758H6.76855V4.83887H7.42247V4.91758ZM6.78272 4.90293H7.4083V4.85438H6.78244L6.78272 4.90293Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.25299 5.15286C7.25299 5.05953 7.18195 4.98376 7.0942 4.98376C7.00644 4.98376 6.93555 5.05953 6.93555 5.15286C6.93577 5.16095 6.9365 5.16901 6.93776 5.17699H7.25077C7.25203 5.16901 7.25279 5.16095 7.25299 5.15286Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.25595 5.18427H6.93098L6.93009 5.17783C6.92874 5.16946 6.92796 5.161 6.92773 5.15252C6.92773 5.05511 7.00157 4.97595 7.09347 4.97595C7.18533 4.97595 7.25934 5.05511 7.25934 5.15252C7.2592 5.16033 7.2585 5.16809 7.25727 5.17579L7.25595 5.18427ZM6.94308 5.16966H7.24369C7.2445 5.16411 7.24495 5.15854 7.245 5.15297C7.245 5.06387 7.17707 4.99205 7.09333 4.99205C7.00955 4.99205 6.94176 5.06446 6.94176 5.15297C6.94185 5.15854 6.94229 5.16411 6.94308 5.16966Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.21507 5.15288C7.21507 5.08193 7.16103 5.02441 7.09439 5.02441C7.02778 5.02441 6.97461 5.08193 6.97461 5.15288C6.97464 5.16097 6.97545 5.16903 6.97696 5.17701H7.2133C7.21465 5.16903 7.21524 5.16094 7.21507 5.15288Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.21849 5.18424H6.97018L6.96915 5.17811C6.96761 5.16965 6.96682 5.16108 6.9668 5.15251C6.9668 5.07761 7.02397 5.0166 7.09428 5.0166C7.16459 5.0166 7.2219 5.07761 7.2219 5.15251C7.22188 5.16108 7.22106 5.16965 7.21952 5.17811L7.21849 5.18424ZM6.98217 5.16962H7.20684C7.20757 5.16408 7.20796 5.15851 7.20802 5.15293C7.20802 5.08624 7.15706 5.03211 7.09442 5.03211C7.03178 5.03211 6.98113 5.08624 6.98113 5.15293C6.98108 5.15851 6.98136 5.16408 6.982 5.16962H6.98217Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.00127 4.68384V4.61129H6.95297V4.56946H6.91366V4.60939H6.87955V4.56946H6.8429V4.60939H6.79004V4.68283L7.00127 4.68384Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.00863 4.69126L6.7832 4.69025V4.60247H6.83609V4.56238H6.88691V4.60247H6.90685V4.56238H6.96033V4.60438H7.00863V4.69126ZM6.7974 4.67533L6.9946 4.6762V4.61885H6.94613V4.57688H6.92088V4.61695H6.87289V4.57688H6.85026V4.61695H6.7974V4.67533Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.20244 4.58936V4.51695H7.15414V4.47498H7.11469V4.51504H7.08072V4.47498H7.04393V4.51504H6.99121V4.58849L7.20244 4.58936Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.2088 4.59697L6.9834 4.59597V4.50819H7.03626V4.46753H7.08708V4.5076H7.10688V4.46753H7.1605V4.5095H7.2088V4.59697ZM6.99757 4.58104L7.19463 4.58191V4.52457H7.14633V4.48215H7.12166V4.52224H7.07291V4.48215H7.05032V4.52224H6.99757V4.58104Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.39661 4.68948V4.61693H7.34848V4.57507H7.30903V4.61517H7.27506V4.57507H7.23827V4.61517H7.18555V4.68845L7.39661 4.68948Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.40414 4.69698L7.17871 4.69611V4.6076H7.23146V4.5675H7.28225V4.6076H7.30222V4.5675H7.35567V4.6095H7.40414V4.69698ZM7.19291 4.68104L7.38994 4.68191V4.62457H7.34164V4.5826H7.31639V4.62266H7.26823V4.5826H7.24563V4.62266H7.19291V4.68104Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.91067 4.71997H6.88379V4.79809H6.91067V4.71997Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.91786 4.80583H6.87695V4.71265H6.91786V4.80583ZM6.89098 4.79119H6.90383V4.72813H6.89098V4.79119Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.12744 4.65527H7.06836V4.71816H7.12744V4.65527Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.13441 4.72566H7.06055V4.64771H7.13441V4.72566ZM7.07533 4.71104H7.11963V4.66322H7.07533V4.71104Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.30954 4.71997H7.27734V4.79809H7.30954V4.71997Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.31649 4.80583H7.26953V4.71265H7.3159L7.31649 4.80583ZM7.28429 4.79119H7.30232V4.72813H7.28429V4.79119Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.37781 6.65918H6.81445V6.97443H7.37781V6.65918Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.38503 6.98193H6.80762V6.65161H7.38503V6.98193ZM6.82181 6.96731H7.37101V6.66668H6.82181V6.96731Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.97915 6.45581H6.81445V6.67947H6.97915V6.45581Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.98553 6.687H6.80664V6.44824H6.98553V6.687ZM6.82081 6.67235H6.97134V6.46333H6.82081V6.67235Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.415 6.9541H6.77539V7.03544H7.415V6.9541Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.42247 7.04282H6.76855V6.94641H7.42247V7.04282ZM6.78244 7.02748H7.408V6.9612H6.78244V7.02748Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.17837 6.36938H7.01367V6.67954H7.17837V6.36938Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.18573 6.68701H7.00684V6.36182H7.18573V6.68701ZM7.021 6.67239H7.17168V6.37688H7.021V6.67239Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.37368 6.47107H7.20898V6.67953H7.37368V6.47107Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.38104 6.68701H7.20215V6.46362H7.38104V6.68701ZM7.21634 6.67236H7.36687V6.47855H7.21634V6.67236Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.415 6.62366H6.77539V6.68713H7.415V6.62366Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.42247 6.69466H6.76855V6.61609H7.42247V6.69466ZM6.78272 6.68001H7.4083V6.63115H6.78244L6.78272 6.68001Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.25299 6.92982C7.25299 6.83649 7.18195 6.76086 7.0942 6.76086C7.00644 6.76086 6.93555 6.83649 6.93555 6.92982C6.93577 6.93796 6.9365 6.94606 6.93776 6.95412H7.25077C7.25203 6.94606 7.25279 6.93796 7.25299 6.92982Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.25595 6.96157H6.93098L6.93009 6.95516C6.92874 6.94676 6.92793 6.93833 6.92773 6.92985C6.92773 6.83255 7.00157 6.75342 7.09347 6.75342C7.18533 6.75342 7.25934 6.83255 7.25934 6.92985C7.25923 6.93769 7.2585 6.9455 7.25713 6.95325L7.25595 6.96157ZM6.94308 6.94695H7.24369C7.2445 6.94144 7.24495 6.93587 7.245 6.93027C7.245 6.84134 7.17707 6.76935 7.09333 6.76935C7.00955 6.76935 6.94176 6.84251 6.94176 6.93027C6.94185 6.9357 6.94229 6.94113 6.94308 6.94651V6.94695Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.21485 6.92981C7.21485 6.859 7.16079 6.80151 7.09417 6.80151C7.02756 6.80151 6.97363 6.859 6.97363 6.92981C6.97366 6.93796 6.97444 6.94608 6.97598 6.95409H7.21233C7.21393 6.94611 7.21477 6.93796 7.21485 6.92981Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.21849 6.96158H6.97018L6.96915 6.95545C6.96761 6.94699 6.96682 6.93843 6.9668 6.92983C6.9668 6.85493 7.02397 6.79395 7.09428 6.79395C7.16459 6.79395 7.2219 6.85493 7.2219 6.92983C7.22188 6.93843 7.22109 6.94699 7.21952 6.95545L7.21849 6.96158ZM6.98217 6.94697H7.20684C7.20757 6.94142 7.20796 6.93585 7.20802 6.93028C7.20802 6.86372 7.15706 6.80943 7.09442 6.80943C7.03178 6.80943 6.98113 6.86372 6.98113 6.93028C6.98108 6.93571 6.98138 6.94111 6.982 6.94652L6.98217 6.94697Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.00127 6.46082V6.38841H6.95297V6.34644H6.91366V6.3865H6.87955V6.34644H6.8429V6.3865H6.79004V6.45995L7.00127 6.46082Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.00863 6.46848L6.7832 6.46745V6.3797H6.83609V6.3396H6.88691V6.3797H6.90685V6.3396H6.96033V6.38157H7.00863V6.46848ZM6.7974 6.45238L6.9946 6.45342V6.39594H6.94613V6.35466H6.92088V6.3949H6.87289V6.35466H6.85026V6.3949H6.7974V6.45238Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.20244 6.36646V6.29405H7.15414V6.25208H7.11469V6.29214H7.08072V6.25208H7.04393V6.29214H6.99121V6.36559L7.20244 6.36646Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.2088 6.3741L6.9834 6.37309V6.28459H7.03626V6.24463H7.08708V6.28459H7.10688V6.24463H7.1605V6.28649H7.2088V6.3741ZM6.99757 6.35817L7.19463 6.3589V6.30155H7.14633V6.25955H7.12166V6.29965H7.07291V6.25955H7.05032V6.29965H6.99757V6.35817Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.39661 6.46655V6.39415H7.34848V6.35217H7.30903V6.39224H7.27506V6.35217H7.23827V6.39224H7.18555V6.46569L7.39661 6.46655Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.40414 6.4741L7.17871 6.47306V6.38531H7.23146V6.34521H7.28225V6.38531H7.30222V6.34521H7.35567V6.38721H7.40414V6.4741ZM7.19291 6.45817L7.38994 6.45904V6.40169H7.34164V6.35969H7.31639V6.39979H7.26823V6.35969H7.24563V6.39979H7.19291V6.45817Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.91067 6.49719H6.88379V6.57545H6.91067V6.49719Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.91786 6.58283H6.87695V6.4895H6.91786V6.58283ZM6.89098 6.56821H6.90383V6.50501H6.89098V6.56821Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.12744 6.43225H7.06836V6.49514H7.12744V6.43225Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.13441 6.50264H7.06055V6.42468H7.13441V6.50264ZM7.07533 6.48802H7.11963V6.44017H7.07533V6.48802Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.30954 6.49719H7.27734V6.57545H7.30954V6.49719Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.31649 6.58283H7.26953V6.4895H7.3159L7.31649 6.58283ZM7.28429 6.56821H7.30232V6.50501H7.28429V6.56821Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.69607 8.94394L6.29785 8.51972L6.50701 8.29675L6.9054 8.72101L6.69607 8.94394Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.69638 8.95465L6.69134 8.94936L6.28809 8.51973L6.5073 8.28564L6.51231 8.29108L6.91529 8.72102L6.91025 8.72642L6.69638 8.95465ZM6.30802 8.51973L6.69638 8.93329L6.89563 8.72102L6.5073 8.30746L6.30802 8.51973Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.60956 8.43457L6.49316 8.31051L6.64162 8.15222L6.75818 8.27629L6.60956 8.43457Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.60985 8.44513L6.4834 8.31056L6.64191 8.14172L6.76835 8.27632L6.60985 8.44513ZM6.50336 8.31056L6.60985 8.42394L6.74842 8.27632L6.64191 8.16295L6.50336 8.31056Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.68178 9.01493L6.22949 8.53319L6.28356 8.47571L6.73584 8.95745L6.68178 9.01493Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.6817 9.02555L6.67666 9.02015L6.21875 8.53315L6.28273 8.46497L6.28774 8.47023L6.74565 8.95737L6.6817 9.02555ZM6.23944 8.53315L6.6817 9.00419L6.726 8.95737L6.28287 8.48619L6.23944 8.53315Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.7513 8.58516L6.63477 8.46126L6.84082 8.24182L6.95721 8.36589L6.7513 8.58516Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.75145 8.5959L6.74644 8.59047L6.625 8.46116L6.84169 8.2312L6.968 8.36577L6.75145 8.5959ZM6.64494 8.46116L6.75145 8.57453L6.94731 8.36577L6.84096 8.25254L6.64494 8.46116Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.88886 8.73245L6.77246 8.60839L6.91086 8.46094L7.02726 8.58498L6.88886 8.73245Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.88914 8.74291L6.88413 8.73764L6.7627 8.60834L6.91115 8.4502L7.0376 8.58493L7.03259 8.59033L6.88914 8.74291ZM6.78263 8.60834L6.88914 8.72171L7.01766 8.58493L6.91115 8.47156L6.78263 8.60834Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.91339 8.76847L6.46094 8.28673L6.50319 8.24182L6.95547 8.72356L6.91339 8.76847Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.91334 8.77919L6.90833 8.77392L6.45117 8.28678L6.50331 8.2312L6.50832 8.2366L6.96623 8.72361L6.91334 8.77919ZM6.47111 8.28678L6.91334 8.75796L6.94554 8.72361L6.50331 8.25254L6.47111 8.28678Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.63759 8.81804C6.66755 8.78525 6.68415 8.74263 6.68415 8.69842C6.68415 8.65423 6.66755 8.61162 6.63759 8.57883C6.62345 8.56326 6.60614 8.55077 6.58682 8.54223C6.5675 8.53372 6.54656 8.5293 6.52542 8.5293C6.50425 8.5293 6.48331 8.53372 6.46399 8.54223C6.44467 8.55077 6.42736 8.56326 6.41322 8.57883C6.40787 8.58468 6.40295 8.5909 6.39844 8.59742L6.62003 8.8331C6.62627 8.82856 6.63215 8.82352 6.63759 8.81804Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.6185 8.84343L6.61421 8.83876L6.38867 8.5984L6.39382 8.59109C6.39791 8.58496 6.40245 8.57914 6.40743 8.57368C6.42219 8.55738 6.44025 8.54433 6.46046 8.5354C6.48065 8.52647 6.50252 8.52185 6.52464 8.52185C6.54673 8.52185 6.5686 8.52647 6.58882 8.5354C6.609 8.54433 6.62706 8.55738 6.64185 8.57368C6.67307 8.60789 6.69037 8.65239 6.69037 8.69853C6.69037 8.74468 6.67307 8.78917 6.64185 8.82338C6.63653 8.82865 6.63084 8.83355 6.62485 8.83803L6.6185 8.84343ZM6.40726 8.59709L6.61939 8.82352C6.62362 8.82019 6.62762 8.81658 6.63135 8.81272C6.65994 8.78144 6.67578 8.74073 6.67578 8.69853C6.67578 8.65634 6.65994 8.61565 6.63135 8.58435C6.61785 8.56942 6.60133 8.55749 6.58288 8.54932C6.5644 8.54117 6.54441 8.53694 6.52419 8.53694C6.50398 8.53694 6.48396 8.54117 6.4655 8.54932C6.44702 8.55749 6.4305 8.56942 6.41701 8.58435C6.41345 8.58835 6.4102 8.59261 6.40726 8.59709Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.61019 8.78935C6.63287 8.76445 6.64544 8.73211 6.64544 8.69857C6.64544 8.66503 6.63287 8.63269 6.61019 8.60779C6.59941 8.59595 6.58625 8.58649 6.57155 8.58002C6.55688 8.57352 6.54098 8.57019 6.52488 8.57019C6.50878 8.57019 6.49287 8.57352 6.47817 8.58002C6.4635 8.58649 6.45034 8.59595 6.43956 8.60779C6.43404 8.61356 6.42912 8.61983 6.4248 8.62653L6.59202 8.80472C6.59854 8.80018 6.60465 8.79503 6.61019 8.78935Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.59152 8.8143L6.41602 8.62749L6.41926 8.62236C6.42358 8.61531 6.42853 8.60864 6.43405 8.60246C6.44542 8.58988 6.45933 8.57983 6.4749 8.57294C6.49047 8.56606 6.50732 8.5625 6.52438 8.5625C6.54143 8.5625 6.55828 8.56606 6.57382 8.57294C6.58939 8.57983 6.60334 8.58988 6.6147 8.60246C6.63867 8.62883 6.65192 8.66305 6.65192 8.69849C6.65192 8.73397 6.63867 8.76819 6.6147 8.79453C6.60896 8.80055 6.60266 8.80604 6.59594 8.81091L6.59152 8.8143ZM6.43433 8.62572L6.59314 8.79484C6.59732 8.79145 6.60132 8.78784 6.6051 8.78401C6.62641 8.76054 6.63822 8.73008 6.63822 8.69849C6.63822 8.66694 6.62641 8.63648 6.6051 8.61301C6.59499 8.60184 6.58262 8.59291 6.56878 8.58678C6.55495 8.58067 6.53997 8.57751 6.52482 8.57751C6.50968 8.57751 6.4947 8.58067 6.48086 8.58678C6.46703 8.59291 6.45466 8.60184 6.44452 8.61301C6.4408 8.61696 6.43738 8.62122 6.43433 8.62572Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.77081 8.2975L6.81897 8.24614L6.78483 8.20988L6.81261 8.18018L6.78483 8.1505L6.75809 8.17886L6.73401 8.15313L6.76075 8.12488L6.73477 8.09724L6.70817 8.12546L6.67079 8.08582L6.62207 8.13762L6.77081 8.2975Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.77092 8.30812L6.6123 8.13754L6.67138 8.07507L6.70874 8.11486L6.73534 8.08647L6.77123 8.1248L6.74463 8.15305L6.75869 8.16767L6.78498 8.1393L6.82278 8.17968L6.79487 8.20891L6.829 8.2452L6.77092 8.30812ZM6.63224 8.13768L6.77092 8.28661L6.80903 8.24607L6.77493 8.20981L6.80271 8.18055L6.78498 8.16154L6.75824 8.18976L6.72425 8.15347L6.75085 8.12525L6.73489 8.10828L6.70832 8.13664L6.67094 8.09672L6.63224 8.13768Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.9749 8.38134L7.02306 8.33013L6.98879 8.29387L7.01671 8.26416L6.98879 8.23448L6.96222 8.2627L6.93828 8.23711L6.96471 8.20886L6.93887 8.18122L6.9123 8.20945L6.87492 8.1698L6.82617 8.2216L6.9749 8.38134Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.976 8.3921L6.81738 8.22152L6.87646 8.15906L6.91382 8.19887L6.94042 8.17048L6.97631 8.20867L6.94971 8.23704L6.9645 8.25168L6.99093 8.22329L7.0289 8.26366L7.00098 8.29292L7.03408 8.32949L6.976 8.3921ZM6.83732 8.22169L6.976 8.37059L7.01411 8.33008L6.98001 8.29379L7.00792 8.26453L6.98989 8.24552L6.96346 8.27377L6.92933 8.23748L6.95593 8.20909L6.93997 8.19227L6.9134 8.22052L6.87602 8.18073L6.83732 8.22169Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M7.04717 8.59939L7.09517 8.54807L7.06106 8.51164L7.08898 8.48193L7.06106 8.45239L7.03446 8.48062L7.01038 8.45502L7.03698 8.42677L7.01097 8.39914L6.98454 8.4275L6.94716 8.38757L6.89844 8.43951L7.04717 8.59939Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M7.04648 8.60998L7.04147 8.60472L6.8877 8.43954L6.94677 8.37708L6.98415 8.41672L7.01059 8.3885L7.04665 8.4268L7.02005 8.45505L7.03483 8.46967L7.0614 8.44131L7.09923 8.48168L7.07146 8.51094L7.10556 8.54737L7.04648 8.60998ZM6.90763 8.43954L7.04648 8.58876L7.08459 8.5481L7.05032 8.51167L7.07826 8.48241L7.06037 8.46323L7.0338 8.49162L6.99981 8.45533L7.0264 8.42711L7.01031 8.41L6.98385 8.43837L6.94649 8.39858L6.90763 8.43954Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.63026 8.30925L6.61133 8.28907L6.66332 8.23376L6.68225 8.25395L6.63026 8.30925Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.63013 8.32L6.60059 8.28911L6.66261 8.22314L6.69215 8.254L6.63013 8.32ZM6.62125 8.28911L6.63013 8.29863L6.67207 8.25476L6.66319 8.24524L6.62125 8.28911Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.83659 8.41583L6.79492 8.37137L6.83659 8.3269L6.87839 8.37137L6.83659 8.41583Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.83684 8.42648L6.78516 8.37132L6.83684 8.31616L6.8887 8.37132L6.83684 8.42648ZM6.80509 8.37132L6.83684 8.40526L6.86876 8.37132L6.83684 8.33753L6.80509 8.37132Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M6.91241 8.60995L6.88965 8.58565L6.9415 8.53052L6.96424 8.55465L6.91241 8.60995Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M6.91253 8.62055L6.87988 8.5856L6.94176 8.51978L6.97455 8.55458L6.91253 8.62055ZM6.89982 8.5856L6.91253 8.59935L6.95461 8.55458L6.94176 8.54097L6.89982 8.5856Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.63196 8.50019L4.23374 8.92442L4.02441 8.70148L4.4228 8.27722L4.63196 8.50019Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.234 8.93516L4.22899 8.92973L4.01465 8.70139L4.01966 8.69612L4.42292 8.2666L4.64227 8.50068L4.6374 8.50595L4.234 8.93516ZM4.03475 8.70108L4.234 8.91349L4.62233 8.49979L4.42292 8.28752L4.03475 8.70108Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.1535 8.59261L4.0371 8.71651L3.88867 8.55839L4.00507 8.43433L4.1535 8.59261Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.03741 8.72711L4.03237 8.72185L3.87891 8.5583L4.00535 8.42371L4.16386 8.59283L4.03741 8.72711ZM3.89884 8.5583L4.03741 8.70589L4.1439 8.59252L4.00535 8.44493L3.89884 8.5583Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.69874 8.51549L4.24645 8.99723L4.19238 8.93972L4.64467 8.45801L4.69874 8.51549Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.2466 9.00785L4.18262 8.93967L4.64498 8.44727L4.70893 8.51545L4.70406 8.52071L4.2466 9.00785ZM4.20227 8.93967L4.2466 8.98666L4.68883 8.51545L4.64453 8.46849L4.20227 8.93967Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.29496 8.44185L4.17857 8.56592L3.97266 8.34648L4.08905 8.22241L4.29496 8.44185Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.17886 8.57647L4.17384 8.57121L3.96289 8.34665L4.08934 8.21191L4.3053 8.44188L4.17886 8.57647ZM3.98283 8.34665L4.17886 8.55511L4.28537 8.44188L4.08934 8.23314L3.98283 8.34665Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.43368 8.29482L4.31711 8.41872L4.17871 8.27141L4.29528 8.14734L4.43368 8.29482Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.31665 8.42933L4.16895 8.27133L4.29539 8.1366L4.44309 8.29474L4.31665 8.42933ZM4.18829 8.27105L4.31665 8.40783L4.42316 8.29446L4.29481 8.15751L4.18829 8.27105Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.46803 8.26916L4.01574 8.75101L3.97363 8.7061L4.42594 8.22424L4.46803 8.26916Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.01503 8.76152L3.96289 8.70608L3.9679 8.70065L4.42582 8.2135L4.47795 8.26911L4.47308 8.27451L4.01503 8.76152ZM3.98283 8.70608L4.01503 8.74029L4.45816 8.26911L4.42596 8.23487L3.98283 8.70608Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.51309 8.56349C4.49892 8.54792 4.48162 8.53549 4.4623 8.52695C4.44298 8.51843 4.42206 8.51404 4.40089 8.51404C4.37975 8.51404 4.35881 8.51843 4.33949 8.52695C4.32017 8.53549 4.30286 8.54792 4.2887 8.56349C4.25876 8.59625 4.24219 8.63883 4.24219 8.68302C4.24219 8.7272 4.25876 8.76979 4.2887 8.80252C4.29416 8.80821 4.30009 8.81339 4.30642 8.81803L4.52801 8.58236C4.52356 8.57569 4.51858 8.56937 4.51309 8.56349Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.30818 8.82701L4.30168 8.82189C4.29572 8.81741 4.29009 8.81253 4.28485 8.80727C4.2536 8.77303 4.23633 8.72853 4.23633 8.68239C4.23633 8.63627 4.2536 8.59178 4.28485 8.55754C4.29961 8.54124 4.31767 8.52819 4.33788 8.51929C4.35807 8.51036 4.37994 8.50574 4.40206 8.50574C4.42418 8.50574 4.44605 8.51036 4.46624 8.51929C4.48642 8.52819 4.50448 8.54124 4.51927 8.55754C4.52467 8.56333 4.52963 8.56955 4.53402 8.57613L4.53758 8.58139L4.53419 8.58711L4.30818 8.82701ZM4.40212 8.52052C4.3819 8.52061 4.36191 8.52486 4.34346 8.53301C4.32498 8.54119 4.30846 8.55306 4.29488 8.56793C4.26629 8.59923 4.25047 8.63991 4.25047 8.68211C4.25047 8.72431 4.26629 8.76502 4.29488 8.79629C4.29854 8.80024 4.30255 8.80385 4.30686 8.8071L4.51941 8.58067C4.51636 8.57619 4.513 8.57193 4.50936 8.56793C4.49575 8.5532 4.47917 8.54141 4.46072 8.53335C4.44227 8.52531 4.4223 8.52114 4.40212 8.52111V8.52052Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.48705 8.5918C4.47633 8.57996 4.46317 8.57049 4.44849 8.56403C4.43379 8.55753 4.41792 8.5542 4.40182 8.5542C4.38575 8.5542 4.36987 8.55753 4.35517 8.56403C4.3405 8.57049 4.32734 8.57996 4.31661 8.5918C4.29385 8.61667 4.28125 8.64904 4.28125 8.68258C4.28125 8.71612 4.29385 8.74849 4.31661 8.77336C4.32199 8.77876 4.32787 8.78366 4.33417 8.78797L4.50139 8.60995C4.49719 8.60348 4.4924 8.5974 4.48705 8.5918Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.33526 8.79839L4.33053 8.79486C4.32367 8.79019 4.31737 8.78475 4.31177 8.77865C4.28771 8.75227 4.27441 8.71803 4.27441 8.68253C4.27441 8.64702 4.28771 8.61278 4.31177 8.5864C4.32316 8.57394 4.33708 8.56394 4.35262 8.55711C4.36813 8.55028 4.38496 8.54675 4.40195 8.54675C4.41895 8.54675 4.43575 8.55028 4.45126 8.55711C4.4668 8.56394 4.48072 8.57394 4.49211 8.5864C4.49763 8.59264 4.50259 8.59934 4.5069 8.60645L4.51015 8.61157L4.506 8.61597L4.33526 8.79839ZM4.40201 8.56168C4.38689 8.56176 4.37191 8.56495 4.35808 8.57106C4.34425 8.57713 4.33184 8.58601 4.32165 8.5971C4.30029 8.62051 4.28844 8.65097 4.28844 8.68253C4.28844 8.71408 4.30029 8.74455 4.32165 8.76795C4.32523 8.77199 4.32918 8.77565 4.33347 8.77893L4.49301 8.60981C4.48987 8.60538 4.48646 8.60113 4.48282 8.5971C4.4726 8.58593 4.46011 8.57699 4.44619 8.57092C4.43228 8.56481 4.41724 8.56168 4.40201 8.56168Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.02483 8.42035L3.97667 8.36914L3.94257 8.40557L3.91479 8.37589L3.88688 8.40557L3.91348 8.43382L3.8894 8.45941L3.8628 8.43119L3.83695 8.45883L3.86352 8.48705L3.82617 8.52684L3.87492 8.57878L4.02483 8.42035Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.87451 8.58935L3.81543 8.52688L3.85281 8.4871L3.82621 8.45887L3.86211 8.42054L3.88871 8.4489L3.90346 8.43429L3.87672 8.40606L3.91469 8.36569L3.94247 8.39492L3.9766 8.35852L4.03478 8.4204L3.87451 8.58935ZM3.83567 8.52688L3.87451 8.56813L4.01454 8.4204L3.97629 8.37986L3.94216 8.41614L3.91441 8.38688L3.89652 8.4059L3.92312 8.43415L3.88899 8.47041L3.86241 8.44218L3.84645 8.45915L3.87305 8.48738L3.83567 8.52688Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.1041 8.20292L4.05594 8.15173L4.02184 8.18799L3.99406 8.15831L3.96615 8.18799L3.99272 8.21639L3.96864 8.24198L3.94207 8.21361L3.91605 8.24125L3.94265 8.26964L3.90527 8.30943L3.95402 8.36137L4.1041 8.20292Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M3.95361 8.37197L3.89453 8.30951L3.93188 8.26972L3.90531 8.24147L3.94121 8.20316L3.96778 8.23153L3.98256 8.21691L3.95596 8.18852L3.99379 8.14828L4.02171 8.17754L4.05581 8.14111L4.11402 8.20299L3.95361 8.37197ZM3.91492 8.30951L3.95361 8.35075L4.09364 8.20299L4.05553 8.16234L4.0214 8.19877L3.99348 8.16951L3.97548 8.18807L4.00205 8.21646L3.96809 8.25275L3.94149 8.22436L3.9257 8.24177L3.95227 8.27L3.91492 8.30951Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.30803 8.12667L4.25987 8.07532L4.22577 8.11175L4.19786 8.08218L4.17008 8.11175L4.19668 8.14011L4.1726 8.16573L4.146 8.13748L4.12002 8.16497L4.14673 8.19337L4.10938 8.23315L4.15812 8.28495L4.30803 8.12667Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.15869 8.29558L4.09961 8.23311L4.13699 8.19332L4.11039 8.16493L4.14629 8.1266L4.17289 8.15499L4.18764 8.14034L4.1609 8.11198L4.19887 8.07174L4.22665 8.101L4.26078 8.06458L4.31896 8.12646L4.15869 8.29558ZM4.11985 8.23311L4.15869 8.27435L4.29872 8.1266L4.26047 8.08594L4.22695 8.12237L4.19918 8.09311L4.18129 8.11212L4.20789 8.14051L4.17375 8.17677L4.14718 8.14841L4.13122 8.16537L4.15782 8.19374L4.11985 8.23311Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.03574 8.57018L4.01667 8.5905L3.96484 8.5352L3.98388 8.51501L4.03574 8.57018Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.01699 8.6011L3.95508 8.53513L3.98462 8.50427L4.04636 8.5701L4.01699 8.6011ZM3.97546 8.53513L4.01727 8.57973L4.02628 8.5701L3.98448 8.5262L3.97546 8.53513Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.13634 8.35049L4.09454 8.39513L4.05273 8.35049L4.09454 8.30603L4.13634 8.35049Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.09368 8.40561L4.04199 8.35045L4.09368 8.29529L4.14553 8.35045L4.09368 8.40561ZM4.06193 8.35045L4.09368 8.38438L4.12543 8.35045L4.09368 8.31665L4.06193 8.35045Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M4.31887 8.26953L4.29614 8.29381L4.24414 8.23865L4.26704 8.21423L4.31887 8.26953Z", fill: "#FEDF00" }),
            React__default['default'].createElement("path", { d: "M4.29625 8.30451L4.23438 8.23868L4.26716 8.20374L4.32904 8.26956L4.29625 8.30451ZM4.25431 8.23868L4.29625 8.28258L4.30897 8.26898L4.26716 8.22507L4.25431 8.23868Z", fill: "#603913" }),
            React__default['default'].createElement("path", { d: "M5.17285 6.59485H5.75144V7.10073C5.75144 7.10073 5.73666 7.18851 5.70225 7.23779C5.6033 7.38658 5.46341 7.38658 5.46341 7.38658C5.41432 7.38445 5.36667 7.36961 5.32517 7.34351C5.2837 7.31745 5.24988 7.28105 5.22706 7.23795C5.20057 7.19542 5.18299 7.14805 5.17537 7.09868L5.17285 6.59485Z", fill: "#063796" }),
            React__default['default'].createElement("path", { d: "M5.52491 6.94598C5.52413 6.95676 5.52021 6.96707 5.5136 6.97566C5.50696 6.98423 5.49798 6.99073 5.4877 6.99434C5.47742 6.99792 5.46631 6.99845 5.45572 6.99588C5.44511 6.9933 5.43554 6.98773 5.42809 6.97984C5.42067 6.97191 5.41574 6.96203 5.41389 6.95139C5.41205 6.94075 5.41339 6.9298 5.41773 6.91992C5.4221 6.91 5.42926 6.90158 5.43839 6.89567C5.44752 6.88976 5.45816 6.8866 5.46908 6.8866C5.48442 6.88718 5.49893 6.89374 5.50937 6.90488C5.51984 6.916 5.52544 6.93078 5.52491 6.94598Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.36767 6.78597C5.36688 6.79675 5.36291 6.80702 5.3563 6.81559C5.34966 6.82416 5.34065 6.83063 5.33037 6.83421C5.3201 6.83777 5.30898 6.8383 5.2984 6.8357C5.28784 6.83312 5.27824 6.82752 5.27084 6.81962C5.26342 6.8117 5.2585 6.80182 5.25665 6.79118C5.25483 6.78056 5.25617 6.76962 5.26054 6.75973C5.26488 6.74982 5.27205 6.74142 5.28118 6.73551C5.2903 6.72958 5.30094 6.72644 5.31184 6.72644C5.32721 6.727 5.34174 6.73361 5.35221 6.74475C5.36268 6.75592 5.36823 6.77076 5.36767 6.78597Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.36767 7.10826C5.36688 7.11902 5.36291 7.12932 5.3563 7.13789C5.34966 7.14643 5.34065 7.1529 5.33037 7.15648C5.3201 7.16004 5.30898 7.16057 5.2984 7.15797C5.28784 7.15539 5.27824 7.14979 5.27084 7.14189C5.26342 7.13397 5.2585 7.12411 5.25665 7.11347C5.25483 7.10283 5.25617 7.09188 5.26054 7.082C5.26488 7.07212 5.27205 7.06369 5.28118 7.05778C5.2903 7.05187 5.30094 7.04871 5.31184 7.04871C5.32721 7.04929 5.34174 7.05587 5.35221 7.06705C5.36268 7.07819 5.36823 7.09303 5.36767 7.10826Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.67433 6.78597C5.67351 6.79672 5.66957 6.80702 5.66293 6.81559C5.65632 6.82416 5.64733 6.8306 5.63706 6.83418C5.62678 6.83777 5.61567 6.8383 5.60511 6.83572C5.59453 6.83315 5.58495 6.82755 5.57753 6.81965C5.57011 6.81178 5.56516 6.8019 5.56331 6.79129C5.56146 6.78065 5.5628 6.76973 5.56712 6.75982C5.57146 6.74993 5.57862 6.7415 5.5877 6.73557C5.5968 6.72963 5.60744 6.72647 5.61833 6.72644C5.63373 6.727 5.64826 6.73361 5.65876 6.74475C5.66923 6.75592 5.67483 6.77074 5.67433 6.78597Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.67433 7.10826C5.67351 7.11902 5.66957 7.12929 5.66293 7.13786C5.65632 7.14643 5.64733 7.1529 5.63706 7.15646C5.62678 7.16004 5.61567 7.16057 5.60511 7.158C5.59453 7.15542 5.58495 7.14985 5.57753 7.14195C5.57011 7.13405 5.56516 7.12417 5.56331 7.11356C5.56146 7.10292 5.5628 7.092 5.56712 7.08211C5.57146 7.0722 5.57862 7.06377 5.5877 7.05783C5.5968 7.05193 5.60744 7.04873 5.61833 7.04871C5.63373 7.04929 5.64826 7.05587 5.65876 7.06702C5.66923 7.07819 5.67483 7.093 5.67433 7.10826Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.9082 6.59485H6.48696V7.10073C6.48696 7.10073 6.47218 7.18851 6.43777 7.23779C6.33879 7.38658 6.1989 7.38658 6.1989 7.38658C6.14982 7.38445 6.10216 7.36961 6.06069 7.34351C6.01922 7.31745 5.98537 7.28105 5.96258 7.23795C5.93609 7.19542 5.91851 7.14805 5.91086 7.09868L5.9082 6.59485Z", fill: "#063796" }),
            React__default['default'].createElement("path", { d: "M6.25929 6.94598C6.2585 6.95676 6.25458 6.96707 6.24795 6.97566C6.24134 6.98423 6.23235 6.99073 6.22208 6.99434C6.2118 6.99792 6.20068 6.99845 6.19007 6.99588C6.17949 6.9933 6.16991 6.98773 6.16246 6.97984C6.15504 6.97191 6.15012 6.96203 6.14827 6.95139C6.14642 6.94075 6.14776 6.9298 6.1521 6.91992C6.15647 6.91 6.16364 6.90158 6.17277 6.89567C6.18187 6.88976 6.19254 6.8866 6.20346 6.8866C6.2188 6.88718 6.23328 6.89374 6.24375 6.90488C6.25422 6.916 6.25979 6.93078 6.25929 6.94598Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M6.10304 6.78597C6.10223 6.79675 6.09828 6.80702 6.09164 6.81559C6.08501 6.82416 6.07602 6.83063 6.06572 6.83421C6.05544 6.83777 6.04432 6.8383 6.03377 6.8357C6.02318 6.83312 6.01358 6.82752 6.00619 6.81962C5.99877 6.8117 5.99384 6.80182 5.99202 6.79118C5.99017 6.78056 5.99151 6.76962 5.99588 6.75973C6.00022 6.74982 6.00742 6.74142 6.01652 6.73551C6.02565 6.72958 6.03629 6.72644 6.04718 6.72644C6.06258 6.727 6.07708 6.73361 6.08756 6.74475C6.09803 6.75592 6.1036 6.77076 6.10304 6.78597Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M6.10304 7.10826C6.10223 7.11902 6.09828 7.12932 6.09164 7.13789C6.08501 7.14643 6.07602 7.1529 6.06572 7.15648C6.05544 7.16004 6.04432 7.16057 6.03377 7.15797C6.02318 7.15539 6.01358 7.14979 6.00619 7.14189C5.99877 7.13397 5.99384 7.12411 5.99202 7.11347C5.99017 7.10283 5.99151 7.09188 5.99588 7.082C6.00022 7.07212 6.00742 7.06369 6.01652 7.05778C6.02565 7.05187 6.03629 7.04871 6.04718 7.04871C6.06258 7.04929 6.07708 7.05587 6.08756 7.06705C6.09803 7.07819 6.1036 7.09303 6.10304 7.10826Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M6.40966 6.78597C6.40885 6.79672 6.4049 6.80702 6.39829 6.81559C6.39165 6.82416 6.38267 6.8306 6.37239 6.83418C6.36211 6.83777 6.35103 6.8383 6.34044 6.83572C6.32986 6.83315 6.32028 6.82755 6.31286 6.81965C6.30544 6.81178 6.30051 6.8019 6.29866 6.79129C6.29682 6.78065 6.29813 6.76973 6.30247 6.75982C6.30678 6.74993 6.31395 6.7415 6.32305 6.73557C6.33215 6.72963 6.34279 6.72647 6.35369 6.72644C6.36906 6.727 6.38359 6.73361 6.39409 6.74475C6.40459 6.75592 6.41019 6.77074 6.40966 6.78597Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M6.40966 7.10826C6.40885 7.11902 6.4049 7.12929 6.39829 7.13786C6.39165 7.14643 6.38267 7.1529 6.37239 7.15646C6.36211 7.16004 6.35103 7.16057 6.34044 7.158C6.32986 7.15542 6.32028 7.14985 6.31286 7.14195C6.30544 7.13405 6.30051 7.12417 6.29866 7.11356C6.29682 7.10292 6.29813 7.092 6.30247 7.08211C6.30678 7.0722 6.31395 7.06377 6.32305 7.05783C6.33215 7.05193 6.34279 7.04873 6.35369 7.04871C6.36906 7.04929 6.38359 7.05587 6.39409 7.06702C6.40459 7.07819 6.41019 7.093 6.40966 7.10826Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.17285 5.61353H5.75144V6.1194C5.75144 6.1194 5.73666 6.20715 5.70225 6.25646C5.6033 6.40523 5.46341 6.40523 5.46341 6.40523C5.41432 6.40313 5.36667 6.38829 5.32517 6.36219C5.2837 6.33612 5.24988 6.29969 5.22706 6.2566C5.2006 6.21407 5.18302 6.16672 5.17537 6.11733L5.17285 5.61353Z", fill: "#063796" }),
            React__default['default'].createElement("path", { d: "M5.52491 5.96492C5.5241 5.97567 5.52012 5.98598 5.51352 5.99455C5.50688 6.00311 5.49786 6.00958 5.48759 6.01314C5.47731 6.01672 5.4662 6.01725 5.45561 6.01465C5.44506 6.01205 5.43545 6.00647 5.42806 5.99855C5.42064 5.99065 5.41571 5.98077 5.41389 5.97013C5.41204 5.95949 5.41339 5.94857 5.41776 5.93869C5.4221 5.92878 5.42929 5.92038 5.43839 5.91444C5.44752 5.90853 5.45816 5.9054 5.46905 5.9054C5.48442 5.90596 5.49896 5.91256 5.50943 5.92371C5.5199 5.93488 5.52547 5.94969 5.52491 5.96492Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.36767 5.80477C5.36688 5.81552 5.36291 5.82582 5.3563 5.83439C5.34966 5.84296 5.34065 5.84943 5.33037 5.85298C5.3201 5.85657 5.30898 5.85707 5.2984 5.8545C5.28784 5.85189 5.27824 5.84632 5.27084 5.8384C5.26342 5.8305 5.2585 5.82062 5.25665 5.80998C5.25483 5.79934 5.25617 5.78842 5.26054 5.7785C5.26488 5.76862 5.27205 5.76019 5.28118 5.75428C5.2903 5.74838 5.30094 5.74524 5.31184 5.74524C5.32721 5.7458 5.34174 5.75238 5.35221 5.76355C5.36268 5.77472 5.36823 5.78954 5.36767 5.80477Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.36766 6.12694C5.36688 6.13769 5.36291 6.14799 5.3563 6.15656C5.34966 6.16513 5.34065 6.17157 5.33037 6.17515C5.32009 6.17874 5.30898 6.17924 5.29839 6.17667C5.28784 6.17406 5.27824 6.16846 5.27084 6.16057C5.26342 6.15267 5.2585 6.14279 5.25665 6.13215C5.25483 6.12151 5.25617 6.11056 5.26054 6.10067C5.26488 6.09079 5.27205 6.08236 5.28118 6.07645C5.2903 6.07055 5.30094 6.06738 5.31183 6.06738C5.32721 6.068 5.34171 6.07461 5.35215 6.08575C5.36262 6.09692 5.3682 6.11171 5.36766 6.12694Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.67433 5.80477C5.67351 5.81552 5.66957 5.82582 5.66293 5.83436C5.65632 5.84293 5.64733 5.8494 5.63706 5.85298C5.62678 5.85654 5.61567 5.85707 5.60511 5.8545C5.59453 5.85192 5.58495 5.84635 5.57753 5.83845C5.57011 5.83056 5.56516 5.8207 5.56331 5.81006C5.56146 5.79945 5.5628 5.7885 5.56712 5.77862C5.57146 5.76873 5.57862 5.7603 5.5877 5.75437C5.5968 5.74843 5.60744 5.74527 5.61833 5.74524C5.63373 5.7458 5.64826 5.75238 5.65876 5.76355C5.66923 5.7747 5.67483 5.78954 5.67433 5.80477Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.67433 6.12694C5.67351 6.13769 5.66957 6.14797 5.66293 6.15654C5.65632 6.1651 5.64733 6.17157 5.63706 6.17516C5.62678 6.17871 5.61567 6.17924 5.60511 6.17667C5.59453 6.17409 5.58495 6.16852 5.57753 6.16062C5.57011 6.15273 5.56516 6.14287 5.56331 6.13223C5.56146 6.12159 5.5628 6.11067 5.56712 6.10079C5.57146 6.09088 5.57862 6.08245 5.5877 6.07651C5.5968 6.0706 5.60744 6.06741 5.61833 6.06738C5.63373 6.06797 5.64826 6.07455 5.65876 6.08572C5.66923 6.09687 5.67483 6.11168 5.67433 6.12694Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.17285 7.59668H5.75144V8.10239C5.75144 8.10239 5.73666 8.19017 5.70225 8.23945C5.6033 8.3881 5.46341 8.3881 5.46341 8.3881C5.41432 8.38597 5.36667 8.37113 5.32517 8.34504C5.2837 8.31897 5.24988 8.28257 5.22706 8.23945C5.20057 8.19695 5.18299 8.14957 5.17537 8.1002L5.17285 7.59668Z", fill: "#063796" }),
            React__default['default'].createElement("path", { d: "M5.52491 7.94784C5.5241 7.95862 5.52013 7.96889 5.51352 7.97746C5.50688 7.98603 5.49787 7.9925 5.48759 7.99608C5.47731 7.99964 5.4662 8.00017 5.45561 7.99756C5.44506 7.99499 5.43545 7.98939 5.42806 7.98149C5.42064 7.97357 5.41571 7.96368 5.41389 7.95307C5.41204 7.94243 5.41339 7.93148 5.41776 7.9216C5.4221 7.91171 5.42929 7.90329 5.43839 7.89738C5.44752 7.89147 5.45816 7.88831 5.46905 7.88831C5.48443 7.88892 5.49893 7.89553 5.50937 7.90667C5.51985 7.91782 5.52542 7.93263 5.52491 7.94784Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.36767 7.78817C5.36688 7.79895 5.36291 7.80923 5.3563 7.81779C5.34966 7.82636 5.34065 7.83283 5.33037 7.83641C5.3201 7.83997 5.30898 7.8405 5.2984 7.8379C5.28784 7.83532 5.27824 7.82972 5.27084 7.8218C5.26342 7.8139 5.2585 7.80402 5.25665 7.79338C5.25483 7.78274 5.25617 7.77182 5.26054 7.76193C5.26488 7.75202 5.27205 7.74362 5.28118 7.73771C5.2903 7.73177 5.30094 7.72864 5.31184 7.72864C5.32721 7.7292 5.34174 7.73581 5.35221 7.74695C5.36268 7.75812 5.36823 7.77294 5.36767 7.78817Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.36767 8.1101C5.36688 8.12085 5.36291 8.13115 5.3563 8.13972C5.34966 8.14829 5.34065 8.15476 5.33037 8.15832C5.3201 8.1619 5.30898 8.1624 5.2984 8.15983C5.28784 8.15722 5.27824 8.15165 5.27084 8.14373C5.26342 8.13583 5.2585 8.12595 5.25665 8.11531C5.25483 8.10466 5.25617 8.09374 5.26054 8.08383C5.26488 8.07395 5.27205 8.06552 5.28118 8.05961C5.2903 8.0537 5.30094 8.05057 5.31184 8.05054C5.32721 8.05113 5.34174 8.05771 5.35221 8.06888C5.36268 8.08005 5.36823 8.09486 5.36767 8.1101Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.67433 7.78816C5.67351 7.79892 5.66957 7.80922 5.66293 7.81779C5.65632 7.82633 5.64733 7.8328 5.63706 7.83638C5.62678 7.83996 5.61567 7.8405 5.60511 7.83792C5.59453 7.83532 5.58495 7.82974 5.57753 7.82185C5.57011 7.81395 5.56516 7.8041 5.56331 7.79348C5.56146 7.78284 5.5628 7.77192 5.56712 7.76201C5.57146 7.75213 5.57862 7.7437 5.5877 7.73777C5.5968 7.73183 5.60744 7.72867 5.61833 7.72864C5.63373 7.7292 5.64826 7.73581 5.65876 7.74695C5.66923 7.75812 5.67483 7.77293 5.67433 7.78816Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M5.67433 8.11009C5.67351 8.12084 5.66957 8.13112 5.66293 8.13969C5.65632 8.14825 5.64733 8.15472 5.63706 8.15831C5.62678 8.16186 5.61567 8.1624 5.60511 8.15982C5.59453 8.15724 5.58495 8.15167 5.57753 8.14378C5.57011 8.13588 5.56516 8.12602 5.56331 8.11538C5.56146 8.10477 5.5628 8.09382 5.56712 8.08394C5.57146 8.07406 5.57862 8.0656 5.5877 8.05969C5.5968 8.05376 5.60744 8.05059 5.61833 8.05054C5.63373 8.05113 5.64826 8.0577 5.65876 8.06888C5.66923 8.08002 5.67483 8.09486 5.67433 8.11009Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M4.4043 6.61011H4.98275V7.11526C4.98275 7.11526 4.96797 7.20301 4.93369 7.25232C4.83457 7.40108 4.69471 7.40108 4.69471 7.40108C4.64574 7.39884 4.59823 7.38395 4.5569 7.35788C4.51557 7.33181 4.48186 7.29547 4.45909 7.25246C4.43272 7.20993 4.41519 7.16255 4.40755 7.11319L4.4043 6.61011Z", fill: "#063796" }),
            React__default['default'].createElement("path", { d: "M4.76026 6.94598C4.75948 6.95676 4.75556 6.96707 4.74895 6.97566C4.74234 6.98423 4.73333 6.99073 4.72305 6.99434C4.71278 6.99792 4.70166 6.99845 4.69108 6.99588C4.68049 6.9933 4.67089 6.98773 4.66347 6.97984C4.65602 6.97191 4.65109 6.96203 4.64924 6.95139C4.6474 6.94075 4.64874 6.9298 4.65311 6.91992C4.65745 6.91 4.66462 6.90158 4.67374 6.89567C4.68287 6.88976 4.69354 6.8866 4.70443 6.8866C4.71978 6.88718 4.73428 6.89374 4.74475 6.90488C4.7552 6.916 4.7608 6.93078 4.76026 6.94598Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M4.60399 6.78597C4.60318 6.79672 4.59923 6.80702 4.59263 6.81559C4.58599 6.82416 4.577 6.8306 4.56672 6.83418C4.55645 6.83777 4.54533 6.8383 4.53478 6.83572C4.52419 6.83315 4.51462 6.82755 4.5072 6.81965C4.49978 6.81178 4.49485 6.8019 4.493 6.79129C4.49115 6.78065 4.49247 6.76973 4.49681 6.75982C4.50112 6.74993 4.50829 6.7415 4.51739 6.73557C4.52649 6.72963 4.53713 6.72647 4.54802 6.72644C4.56339 6.727 4.57793 6.73361 4.58843 6.74475C4.59893 6.75592 4.60453 6.77074 4.60399 6.78597Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M4.60399 7.10826C4.60318 7.11902 4.59923 7.12929 4.59263 7.13786C4.58599 7.14643 4.577 7.1529 4.56672 7.15646C4.55645 7.16004 4.54533 7.16057 4.53478 7.158C4.52419 7.15542 4.51462 7.14985 4.5072 7.14195C4.49978 7.13405 4.49485 7.12417 4.493 7.11356C4.49115 7.10292 4.49247 7.092 4.49681 7.08211C4.50112 7.0722 4.50829 7.06377 4.51739 7.05783C4.52649 7.05193 4.53713 7.04873 4.54802 7.04871C4.56339 7.04929 4.57793 7.05587 4.58843 7.06702C4.59893 7.07819 4.60453 7.093 4.60399 7.10826Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M4.91063 6.78597C4.90982 6.79672 4.90587 6.80702 4.89926 6.81559C4.89263 6.82416 4.88364 6.8306 4.87336 6.83418C4.86309 6.83777 4.85197 6.8383 4.84142 6.83572C4.83083 6.83315 4.82126 6.82755 4.81384 6.81965C4.80642 6.81178 4.80146 6.8019 4.79964 6.79129C4.79779 6.78065 4.79911 6.76973 4.80345 6.75982C4.80776 6.74993 4.81493 6.7415 4.82403 6.73557C4.8331 6.72963 4.84377 6.72647 4.85466 6.72644C4.87003 6.727 4.88456 6.73361 4.89506 6.74475C4.90553 6.75592 4.91113 6.77074 4.91063 6.78597Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M4.91063 7.10826C4.90982 7.11902 4.90587 7.12929 4.89926 7.13786C4.89263 7.14643 4.88364 7.1529 4.87336 7.15646C4.86309 7.16004 4.85197 7.16057 4.84142 7.158C4.83083 7.15542 4.82126 7.14985 4.81384 7.14195C4.80642 7.13405 4.80146 7.12417 4.79964 7.11356C4.79779 7.10292 4.79911 7.092 4.80345 7.08211C4.80776 7.0722 4.81493 7.06377 4.82403 7.05783C4.8331 7.05193 4.84377 7.04873 4.85466 7.04871C4.87003 7.04929 4.88456 7.05587 4.89506 7.06702C4.90553 7.07819 4.91113 7.093 4.91063 7.10826Z", fill: "white" }))));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$M,
    GroupsIcon: Icon$L,
    HamburgerIcon: Icon$K,
    HamburgerCloseIcon: Icon$J,
    HomeIcon: Icon$I,
    IfoIcon: Icon$H,
    InfoIcon: Icon$G,
    LanguageIcon: Icon$F,
    LogoIcon: LogoWithText,
    MoonIcon: Icon$E,
    MoreIcon: Icon$D,
    NftIcon: Icon$C,
    PoolIcon: Icon$B,
    SunIcon: Icon$A,
    TelegramIcon: Icon$z,
    TicketIcon: Icon$y,
    TradeIcon: Icon$x,
    TwitterIcon: Icon$w,
    MediumIcon: Icon$v,
    RedditIcon: Icon$u,
    YoutubeIcon: Icon$t,
    Wallet: Icon$s,
    ArrowSidebar: Icon$r,
    ExchangeIcon: Icon$q,
    ReferralIcon: Icon$p,
    RocketIcon: Icon$o,
    FreeIcon: Icon$n,
    LoaderIcon: Icon$m,
    CupIcon: Icon$l,
    AuditIcon: Icon$k,
    RewardIcon: Icon$j,
    PromoIcon: Icon$i,
    TeamIcon: Icon$h,
    MenuBswLogoIcon: Icon$g,
    MagazineIcon: Icon$f,
    UsdCoinsIcon: Icon$e,
    USAIcon: Icon$d,
    IDIcon: Icon$c,
    RUIcon: Icon$b,
    VNIcon: Icon$a,
    BDIcon: Icon$9,
    FRIcon: Icon$8,
    PTIcon: Icon$7
});

var MenuButton = styled__default['default'](Button)(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n  margin-right: 8px;\n\n  ", " {\n    margin-right: 20px;\n  }\n  ", " {\n    display: none;\n  }\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n  margin-right: 8px;\n\n  ", " {\n    margin-right: 20px;\n  }\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$t;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "FreeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
                target: '_blank'
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
        calloutClass: "warning",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        badgeType: "primary",
        href: "/syrup",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        badgeType: "warning",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        badgeType: "new",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        badgeType: "hot",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/teams",
                cycleType: 'active'
            },
            {
                label: "YourProfile",
                href: "/profile",
                cycleType: 'inactive'
            },
            {
                label: "Archive",
                href: "/profile",
            },
        ],
        // calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "UsdCoinsIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.pancakeswap.finance",
            },
            {
                label: "Github",
                href: "https://github.com/pancakeswap",
            },
            {
                label: "Docs",
                href: "https://docs.pancakeswap.finance",
            },
            {
                label: "Blog",
                href: "https://pancakeswap.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: {
            channel: {
                icon: 'LogoIcon',
                label: "Channel",
                href: "https://t.me/biswap_news",
            },
            chats: [
                {
                    icon: 'USAIcon',
                    label: "English",
                    href: "https://t.me/biswap",
                },
                {
                    icon: 'IDIcon',
                    label: "Bahasa",
                    href: "https://t.me/biswap_idn",
                },
                {
                    icon: 'RUIcon',
                    label: "Русский",
                    href: "https://t.me/biswap_rus",
                },
                {
                    icon: 'VNIcon',
                    label: "Tiếng Việt",
                    href: "https://t.me/biswap_vnm",
                },
                {
                    icon: 'BDIcon',
                    label: "Bangladesh",
                    href: "https://t.me/biswap_bgd",
                },
                {
                    icon: 'FRIcon',
                    label: "La France",
                    href: "https://t.me/biswap_france",
                },
                {
                    icon: 'PTIcon',
                    label: "Portugal",
                    href: "https://t.me/biswap_prt",
                },
            ]
        },
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/Biswap_DEX",
    },
    {
        label: "Medium",
        icon: "MediumIcon",
        href: "https://biswap-dex.medium.com/",
    },
    {
        label: "Youtube",
        icon: "YoutubeIcon",
        href: "https://www.youtube.com/channel/UCHartwkRUURf2Q7MlKOV84w",
    },
];
var MENU_HEIGHT = 72;
var MENU_HEIGHT_MOBILE = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 224;
var SIDEBAR_WIDTH_REDUCED = 74;

var Icons$2 = IconModule;
var Wrapper$e = styled__default['default'].div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  display: ", ";\n  align-items: center;\n  padding: ", ";\n\n  ", " {\n    display: ", ";\n  }\n"], ["\n  display: ", ";\n  align-items: center;\n  padding: ", ";\n\n  ", " {\n    display: ", ";\n  }\n"])), function (_a) {
    var isPushed = _a.isPushed, isSidebar = _a.isSidebar;
    return isPushed && isSidebar ? 'flex' : 'none';
}, function (_a) {
    var isSidebar = _a.isSidebar;
    return isSidebar ? '16px' : '0px';
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var isSidebar = _a.isSidebar;
    return isSidebar ? 'none' : 'flex';
});
var DropDownWrap$1 = styled__default['default'].div(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  position: relative;\n\n  &:hover {\n    .hovered-item {\n      background-color: ", ";\n    }\n    .drop-down-inner {\n      display: block;\n    }\n  }\n"], ["\n  position: relative;\n\n  &:hover {\n    .hovered-item {\n      background-color: ", ";\n    }\n    .drop-down-inner {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dropDown;
});
var DropDownInnerWrap$1 = styled__default['default'].div(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  display: none;\n  position: absolute;\n  padding-top: ", ";\n  padding-bottom: ", ";\n  top: ", ";\n  bottom: ", ";\n  left: ", ";\n  transform: translateX(-50%);\n  z-index: 50;\n"], ["\n  display: none;\n  position: absolute;\n  padding-top: ", ";\n  padding-bottom: ", ";\n  top: ", ";\n  bottom: ", ";\n  left: ", ";\n  transform: translateX(-50%);\n  z-index: 50;\n"])), function (_a) {
    var isSidebar = _a.isSidebar;
    return isSidebar ? '0' : '8px';
}, function (_a) {
    var isSidebar = _a.isSidebar;
    return isSidebar ? '8px' : '0';
}, function (_a) {
    var isSidebar = _a.isSidebar;
    return isSidebar ? 'auto' : '40px';
}, function (_a) {
    var isSidebar = _a.isSidebar;
    return isSidebar ? '40px' : 'auto';
}, function (_a) {
    var isSidebar = _a.isSidebar;
    return isSidebar ? '90%' : '50%';
});
var DropDown$1 = styled__default['default'].div(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  border-radius: 8px;\n  padding: 8px;\n  background-color: ", ";\n  position: relative;\n  \n  &:before {\n    display: block;\n    content: \"\";\n    width: 8px;\n    height: 8px;\n    position: absolute;\n    top: ", ";\n    bottom: ", ";\n    left: ", ";\n    transform: translateX(-50%) rotate(45deg);\n    background-color: ", ";\n  }\n\n  &.active {\n    display: block;\n  }\n"], ["\n  border-radius: 8px;\n  padding: 8px;\n  background-color: ", ";\n  position: relative;\n  \n  &:before {\n    display: block;\n    content: \"\";\n    width: 8px;\n    height: 8px;\n    position: absolute;\n    top: ", ";\n    bottom: ", ";\n    left: ", ";\n    transform: translateX(-50%) rotate(45deg);\n    background-color: ", ";\n  }\n\n  &.active {\n    display: block;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dropDown;
}, function (_a) {
    var isSidebar = _a.isSidebar;
    return isSidebar ? 'auto' : '-4px';
}, function (_a) {
    var isSidebar = _a.isSidebar;
    return isSidebar ? '-4px' : 'auto';
}, function (_a) {
    var isSidebar = _a.isSidebar;
    return isSidebar ? '18px' : '50%';
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dropDown;
});
var DropDownLink$1 = styled__default['default'].a(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  user-select: none;\n  white-space: nowrap;\n  transition: all 0.4s ease;\n\n  &:hover {\n    color: ", ";\n  }\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  user-select: none;\n  white-space: nowrap;\n  transition: all 0.4s ease;\n\n  &:hover {\n    color: ", ";\n  }\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var ItemWrapper = styled__default['default'].div(templateObject_6$6 || (templateObject_6$6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background-color: transparent;\n  border-radius: 8px;\n  margin-right: 8px;\n  transition: all 0.2s;\n\n  &:hover,\n  &.active {\n    background-color: ", ";\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background-color: transparent;\n  border-radius: 8px;\n  margin-right: 8px;\n  transition: all 0.2s;\n\n  &:hover,\n  &.active {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dropDown;
});
var DropDownLabel$1 = styled__default['default'].span(templateObject_7$6 || (templateObject_7$6 = __makeTemplateObject(["\n  display: block;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  margin-bottom: 8px;\n"], ["\n  display: block;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  margin-bottom: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var FlagWrap$1 = styled__default['default'].div(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["\n  border-radius: 50%;\n  margin-right: 8px;\n  overflow: hidden;\n  width: 14px;\n  height: 14px;\n"], ["\n  border-radius: 50%;\n  margin-right: 8px;\n  overflow: hidden;\n  width: 14px;\n  height: 14px;\n"])));
var NavSocial = function (_a) {
    var isPushed = _a.isPushed, isSidebar = _a.isSidebar;
    return (React__default['default'].createElement(Wrapper$e, { isPushed: isPushed, isSidebar: isSidebar }, socials.map(function (social) {
        var Icon = Icons$2[social.icon];
        var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
        if (social.items) {
            return (React__default['default'].createElement(DropDownWrap$1, { key: social.label },
                React__default['default'].createElement(ItemWrapper, { className: 'hovered-item' },
                    React__default['default'].createElement(Icon, __assign({}, iconProps))),
                React__default['default'].createElement(DropDownInnerWrap$1, { className: "drop-down-inner", isSidebar: isSidebar },
                    React__default['default'].createElement(DropDown$1, { isSidebar: isSidebar },
                        React__default['default'].createElement(DropDownLink$1, { key: social.items.channel.label, href: social.items.channel.href, target: "_blank", "aria-label": social.label },
                            React__default['default'].createElement(FlagWrap$1, null,
                                React__default['default'].createElement("svg", { width: "14", height: "14", viewBox: "0 0 256 256", fill: "none" },
                                    React__default['default'].createElement("path", { d: "M128 256C198.692 256 256 198.692 256 128C256 57.3075 198.692 0 128 0C57.3075 0 0 57.3075 0 128C0 198.692 57.3075 256 128 256Z", fill: "white" }),
                                    React__default['default'].createElement("path", { d: "M227.149 48.1543C218.272 49.9091 209.807 52.3865 202.839 53.9349C186.943 57.4962 172.078 69.6768 168.826 91.9736C165.936 111.896 172.646 120.464 169.704 143.638C164.543 184.102 125.73 198.038 107.614 206.502C97.1362 211.354 71.691 222.502 52.0781 231.018C73.3426 246.709 99.562 255.999 128.001 255.999C198.71 255.999 256.001 198.709 256.001 127.999C256.001 97.8574 245.575 70.1413 228.13 48.3091C227.82 48.2575 227.51 48.2059 227.149 48.1543Z", fill: "url(#paint0_linear)" }),
                                    React__default['default'].createElement("path", { d: "M113.6 109.213C123.458 87.8966 119.897 87.845 127.381 67.8192C136.826 42.4257 166.193 49.6515 174.297 50.7354C187.664 52.5419 191.174 47.7935 219.355 43.2515C220.748 43.0451 222.09 42.8386 223.432 42.6838C200 16.5161 165.935 0 128 0C77.058 0 33.0838 29.729 12.4903 72.8257C54.7096 83.3031 100.284 106.064 113.6 109.213ZM85.6257 22.2967C89.3419 22.8645 107.406 45.3161 110.813 102.968C110.813 102.968 87.587 97.3934 82.5806 85.4192C78.4515 75.5612 83.8193 62.6063 85.6257 22.2967ZM227.922 48.0515C227.974 48.1548 228.077 48.2064 228.129 48.3096C227.819 48.258 227.458 48.258 227.148 48.2064C227.406 48.1031 227.664 48.1031 227.922 48.0515ZM0 128C0 117.78 1.1871 107.871 3.45806 98.374C8.10322 102.245 13.0581 106.529 18.3226 111.432C51.6645 142.348 105.91 166.761 125.677 144.051C125.729 144.103 125.781 144.103 125.781 144.155C122.168 148.903 108.387 163.922 82.0644 159.277L40.4645 221.367C15.5871 198.038 0 164.851 0 128Z", fill: "url(#paint1_linear)" }),
                                    React__default['default'].createElement("defs", null,
                                        React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "204.871", y1: "81.6791", x2: "174.673", y2: "248.042", gradientUnits: "userSpaceOnUse" },
                                            React__default['default'].createElement("stop", { stopColor: "#FF496A" }),
                                            React__default['default'].createElement("stop", { offset: "1", stopColor: "#E42648" })),
                                        React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "61.7817", y1: "188.552", x2: "128.549", y2: "-4.19941e-05", gradientUnits: "userSpaceOnUse" },
                                            React__default['default'].createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                                            React__default['default'].createElement("stop", { offset: "1", stopColor: "#119BED" }))))),
                            social.items.channel.label),
                        React__default['default'].createElement(DropDownLabel$1, null, "Chats:"),
                        social.items.chats.map(function (item) {
                            var IconFlag = Icons$2[item.icon];
                            return (React__default['default'].createElement(DropDownLink$1, { key: item.label, href: item.href, target: "_blank", "aria-label": social.label },
                                React__default['default'].createElement(FlagWrap$1, null,
                                    React__default['default'].createElement(IconFlag, { width: "14px" })),
                                item.label));
                        })))));
        }
        return (React__default['default'].createElement(ItemWrapper, { key: social.label },
            React__default['default'].createElement(Link, { external: true, href: social.href, "aria-label": social.label },
                React__default['default'].createElement(Icon, __assign({}, iconProps)))));
    })));
};
var templateObject_1$s, templateObject_2$m, templateObject_3$b, templateObject_4$7, templateObject_5$7, templateObject_6$6, templateObject_7$6, templateObject_8$2;

var Wrapper$d = styled__default['default'].div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  display: flex;\n  padding-left: 8px;\n\n  ", " {\n    padding-left: 40px;\n  }\n"], ["\n  display: flex;\n  padding-left: 8px;\n\n  ", " {\n    padding-left: 40px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var HeaderMobileLogo = styled__default['default'].a(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  align-self: center;\n  overflow: hidden;\n\n  ", " {\n    width: 0;\n    opacity: 0;\n  }\n"], ["\n  align-self: center;\n  overflow: hidden;\n\n  ", " {\n    width: 0;\n    opacity: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Logo$2 = function (_a) {
    var togglePush = _a.togglePush;
    return (React__default['default'].createElement(Wrapper$d, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush },
            React__default['default'].createElement(Icon$K, { width: "24px", color: "textSubtle" })),
        React__default['default'].createElement(HeaderMobileLogo, { href: "/" },
            React__default['default'].createElement("svg", { width: "32px", viewBox: "0 0 55 55", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React__default['default'].createElement("path", { d: "M27.0769 54.1537C42.031 54.1537 54.1538 42.031 54.1538 27.0769C54.1538 12.1227 42.031 0 27.0769 0C12.1227 0 0 12.1227 0 27.0769C0 42.031 12.1227 54.1537 27.0769 54.1537Z", fill: "white" }),
                React__default['default'].createElement("path", { d: "M48.0498 10.187C46.1719 10.5582 44.3814 11.0823 42.9074 11.4098C39.5446 12.1632 36.4002 14.7399 35.7124 19.4565C35.101 23.6709 36.5203 25.4833 35.898 30.3855C34.8062 38.9453 26.5958 41.8931 22.7635 43.6837C20.5471 44.71 15.1645 47.0683 11.0156 48.8698C15.5139 52.1889 21.0603 54.1542 27.0762 54.1542C42.034 54.1542 54.1531 42.0351 54.1531 27.0773C54.1531 20.7011 51.9476 14.8381 48.2573 10.2198C48.1918 10.2088 48.1263 10.1979 48.0498 10.187Z", fill: "url(#paint0_linear)" }),
                React__default['default'].createElement("path", { d: "M24.0307 23.1027C26.1161 18.5935 25.3628 18.5826 26.9459 14.3464C28.9439 8.97467 35.1563 10.5032 36.8704 10.7325C39.6982 11.1146 40.4407 10.1102 46.4019 9.14936C46.6967 9.10569 46.9806 9.06202 47.2645 9.02926C42.3076 3.49379 35.1017 0 27.0769 0C16.3007 0 6.9985 6.28882 2.64218 15.4054C11.5732 17.6218 21.2139 22.4367 24.0307 23.1027ZM18.1131 4.71662C18.8992 4.83671 22.7206 9.58608 23.4412 21.7816C23.4412 21.7816 18.528 20.6024 17.469 18.0694C16.5955 15.9841 17.731 13.2436 18.1131 4.71662ZM48.2143 10.1647C48.2253 10.1866 48.2471 10.1975 48.258 10.2193C48.1925 10.2084 48.1161 10.2084 48.0506 10.1975C48.1052 10.1757 48.1598 10.1757 48.2143 10.1647ZM0 27.0769C0 24.9151 0.251116 22.8188 0.731513 20.8099C1.71414 21.6287 2.76228 22.5349 3.87593 23.5722C10.929 30.1121 22.4039 35.2764 26.5856 30.4724C26.5965 30.4833 26.6074 30.4833 26.6074 30.4942C25.8431 31.4987 22.928 34.6759 17.3598 33.6932L8.55979 46.8277C3.29727 41.8927 0 34.8724 0 27.0769Z", fill: "url(#paint1_linear)" }),
                React__default['default'].createElement("defs", null,
                    React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "43.3371", y1: "17.2788", x2: "36.9491", y2: "52.4708", gradientUnits: "userSpaceOnUse" },
                        React__default['default'].createElement("stop", { stopColor: "#FF496A" }),
                        React__default['default'].createElement("stop", { offset: "1", stopColor: "#E42648" })),
                    React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "13.0692", y1: "39.8859", x2: "27.193", y2: "-1.0612e-05", gradientUnits: "userSpaceOnUse" },
                        React__default['default'].createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                        React__default['default'].createElement("stop", { offset: "1", stopColor: "#119BED" }))))),
        React__default['default'].createElement(NavSocial, null)));
};
var TogglePanel = React__default['default'].memo(Logo$2, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$r, templateObject_2$l;

var LinkLabel = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "inherit" : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  color: ", ";\n  border-radius: 8px;\n  background: ", ";\n  height: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n    transition: fill 0.4s;\n  }\n\n  &:hover {\n    color: ", " !important;\n\n    svg {\n      fill: ", " !important;\n    }\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.warning {\n    color: ", ";\n\n    svg {\n      fill: ", ";\n    }\n  }\n\n  &.rainbow {\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  color: ", ";\n  border-radius: 8px;\n  background: ", ";\n  height: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n    transition: fill 0.4s;\n  }\n\n  &:hover {\n    color: ", " !important;\n\n    svg {\n      fill: ", " !important;\n    }\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.warning {\n    color: ", ";\n\n    svg {\n      fill: ", ";\n    }\n  }\n\n  &.rainbow {\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 24px 0 44px" : "0 12px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "12px" : "14px");
}, function (_a) {
    var theme = _a.theme, isSmall = _a.isSmall, isActive = _a.isActive;
    return (isSmall && !isActive ? theme.colors.text : theme.colors.contrast);
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme, isSmall = _a.isSmall;
    return (isActive && !isSmall ? theme.colors.dropDown : "transparent");
}, function (_a) {
    var isSmall = _a.isSmall;
    return isSmall ? '32px' : '48px';
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.warning;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.warning;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dropDown;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkStatus = styled__default['default'](Text)(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var LinkLabelMemo = React__default['default'].memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$q, templateObject_2$k, templateObject_3$a;

var Container$1 = styled__default['default'].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, status = _a.status, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$1, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive, role: "button" },
            icon,
            React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            status && (React__default['default'].createElement(LinkStatus, { color: status.color, fontSize: "14px" }, status.text)),
            isOpen ? React__default['default'].createElement(Icon$1N, null) : React__default['default'].createElement(Icon$1O, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$p, templateObject_2$j;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({ role: 'button' }, props, otherProps));
};

var BADGES_TYPES;
(function (BADGES_TYPES) {
    BADGES_TYPES["New"] = "new";
    BADGES_TYPES["Hot"] = "hot";
    BADGES_TYPES["Win"] = "primary";
    BADGES_TYPES["Beta"] = "warning";
    BADGES_TYPES["Any"] = "any";
})(BADGES_TYPES || (BADGES_TYPES = {}));

var Icons$1 = IconModule;
var Container = styled__default['default'].div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  //height: 100%;\n  flex-grow: 1;\n  padding: ", ";\n  transition: padding-left 0.4s, padding-right 0.4s;\n\n  &::-webkit-scrollbar {\n    width: 0;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  //height: 100%;\n  flex-grow: 1;\n  padding: ", ";\n  transition: padding-left 0.4s, padding-right 0.4s;\n\n  &::-webkit-scrollbar {\n    width: 0;\n  }\n"])), function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "0 16px" : "0 12px");
});
var CompetitionCycle = styled__default['default'].span(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  position: absolute;\n  left: 28px;\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  background-color: ", "\n"], ["\n  position: absolute;\n  left: 28px;\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  background-color: ", "\n"])), function (_a) {
    var theme = _a.theme, cycleType = _a.cycleType;
    return (cycleType === 'active' ? theme.colors.success : theme.colors.text);
});
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    var renderBadge = function (type) {
        switch (type) {
            case BADGES_TYPES.New:
                return (React__default['default'].createElement(Badge, { fontSize: '8px', lineHeight: '9px', isMenu: true, badgeType: BADGES_TYPES.New }, "New"));
            case BADGES_TYPES.Hot:
                return (React__default['default'].createElement(Badge, { fontSize: '8px', lineHeight: '9px', isMenu: true, badgeType: BADGES_TYPES.Hot }, "Hot"));
            case BADGES_TYPES.Win:
                return (React__default['default'].createElement(Badge, { fontSize: '8px', lineHeight: '9px', isMenu: true, badgeType: BADGES_TYPES.Win }, "Win"));
            case BADGES_TYPES.Beta:
                return (React__default['default'].createElement(Badge, { fontSize: '8px', lineHeight: '9px', isMenu: true, badgeType: BADGES_TYPES.Beta }, "Beta"));
            default:
                return (React__default['default'].createElement(Badge, { fontSize: '8px', lineHeight: '9px', isMenu: true, badgeType: BADGES_TYPES.Any }, "Default"));
        }
    };
    return (React__default['default'].createElement(Container, { isPushed: isPushed }, links.map(function (entry) {
        var Icon = Icons$1[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            // console.log('enytt', entry.items);
            return (React__default['default'].createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, status: entry.status, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) {
                    // console.log('fdvfd',item.cycleType);
                    return (React__default['default'].createElement(MenuEntry, { isSmall: true, key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                        React__default['default'].createElement(React__default['default'].Fragment, null,
                            item.cycleType ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                                React__default['default'].createElement(CompetitionCycle, { cycleType: item.cycleType }))) : null,
                            React__default['default'].createElement(MenuLink, { href: item.href, target: item.target ? item.target : '_self' }, item.label))));
                })));
        }
        return (
        // <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
        //   <MenuLink href={entry.href} onClick={handleClick}>
        //     {iconElement}
        //     <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
        //     {entry.status && (
        //       <LinkStatus color={entry.status.color} fontSize="14px">
        //         {entry.status.text}
        //       </LinkStatus>
        //     )}
        //   </MenuLink>
        // </MenuEntry>
        React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { target: entry.target ? entry.target : '_self', href: entry.href, onClick: handleClick },
                iconElement,
                entry.secondLabel ? (React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed },
                    entry.label,
                    isPushed && (React__default['default'].createElement("span", { style: { color: '#FFDB1C' }, className: entry.secondCalloutClass }, entry.secondTextLabel)),
                    entry.status && (React__default['default'].createElement(LinkStatus, { color: entry.status.color, fontSize: "14px" }, entry.status.text)))) : (React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label)),
                entry.badgeType && renderBadge(entry.badgeType))));
    })));
};
var templateObject_1$o, templateObject_2$i;

var Wrapper$c = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  display: none;\n\n  ", " {\n    display: ", ";\n  }\n  \n  .move-enter {\n    opacity: 0.01;\n    transform: translatey(-40px)\n  }\n\n  .move-enter-active {\n    opacity: 1;\n    transform: translatey(0);\n    transition: all 500ms ease-in;\n  }\n\n  .move-exit {\n    opacity: 1;\n    transform: translateY(0)\n  }\n\n  .move-exit-active {\n    opacity: 0.01;\n    transform: translateY(10px);\n    transition: all 500ms ease-in;\n  }\n"], ["\n  display: none;\n\n  ", " {\n    display: ", ";\n  }\n  \n  .move-enter {\n    opacity: 0.01;\n    transform: translatey(-40px)\n  }\n\n  .move-enter-active {\n    opacity: 1;\n    transform: translatey(0);\n    transition: all 500ms ease-in;\n  }\n\n  .move-exit {\n    opacity: 1;\n    transform: translateY(0)\n  }\n\n  .move-exit-active {\n    opacity: 0.01;\n    transform: translateY(10px);\n    transition: all 500ms ease-in;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "block" : "none");
});
var PanelFooter2 = function (_a) {
    var isPushed = _a.isPushed, dealsForUIKit = _a.dealsForUIKit, showDeals = _a.showDeals;
    return (React__default['default'].createElement(Wrapper$c, { isPushed: isPushed }, showDeals &&
        dealsForUIKit()));
};
var templateObject_1$n;

var Wrapper$b = styled__default['default'].div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: none;\n  padding: ", ";\n  transition: padding 0.2s;\n\n  ", " {\n    display: block;\n  }\n"], ["\n  display: none;\n  padding: ", ";\n  transition: padding 0.2s;\n\n  ", " {\n    display: block;\n  }\n"])), function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "0 22px" : "0 18px");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var StyledLink = styled__default['default'](reactRouterDom.Link)(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 32px;\n  \n  .mobile-icon {\n    width: 38px;\n  }\n  .desktop-icon {\n    width: 121px;\n    display: block;\n    margin-left: 8px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-bottom: 32px;\n  \n  .mobile-icon {\n    width: 38px;\n  }\n  .desktop-icon {\n    width: 121px;\n    display: block;\n    margin-left: 8px;\n  }\n"])));
var Logo = function (_a) {
    var isPushed = _a.isPushed, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null, isPushed ? (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("svg", { className: "mobile-icon", viewBox: "0 0 55 55", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { d: "M27.0769 54.1537C42.031 54.1537 54.1538 42.031 54.1538 27.0769C54.1538 12.1227 42.031 0 27.0769 0C12.1227 0 0 12.1227 0 27.0769C0 42.031 12.1227 54.1537 27.0769 54.1537Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M48.0498 10.187C46.1719 10.5582 44.3814 11.0823 42.9074 11.4098C39.5446 12.1632 36.4002 14.7399 35.7124 19.4565C35.101 23.6709 36.5203 25.4833 35.898 30.3855C34.8062 38.9453 26.5958 41.8931 22.7635 43.6837C20.5471 44.71 15.1645 47.0683 11.0156 48.8698C15.5139 52.1889 21.0603 54.1542 27.0762 54.1542C42.034 54.1542 54.1531 42.0351 54.1531 27.0773C54.1531 20.7011 51.9476 14.8381 48.2573 10.2198C48.1918 10.2088 48.1263 10.1979 48.0498 10.187Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { d: "M24.0307 23.1027C26.1161 18.5935 25.3628 18.5826 26.9459 14.3464C28.9439 8.97467 35.1563 10.5032 36.8704 10.7325C39.6982 11.1146 40.4407 10.1102 46.4019 9.14936C46.6967 9.10569 46.9806 9.06202 47.2645 9.02926C42.3076 3.49379 35.1017 0 27.0769 0C16.3007 0 6.9985 6.28882 2.64218 15.4054C11.5732 17.6218 21.2139 22.4367 24.0307 23.1027ZM18.1131 4.71662C18.8992 4.83671 22.7206 9.58608 23.4412 21.7816C23.4412 21.7816 18.528 20.6024 17.469 18.0694C16.5955 15.9841 17.731 13.2436 18.1131 4.71662ZM48.2143 10.1647C48.2253 10.1866 48.2471 10.1975 48.258 10.2193C48.1925 10.2084 48.1161 10.2084 48.0506 10.1975C48.1052 10.1757 48.1598 10.1757 48.2143 10.1647ZM0 27.0769C0 24.9151 0.251116 22.8188 0.731513 20.8099C1.71414 21.6287 2.76228 22.5349 3.87593 23.5722C10.929 30.1121 22.4039 35.2764 26.5856 30.4724C26.5965 30.4833 26.6074 30.4833 26.6074 30.4942C25.8431 31.4987 22.928 34.6759 17.3598 33.6932L8.55979 46.8277C3.29727 41.8927 0 34.8724 0 27.0769Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("defs", null,
                React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "43.3371", y1: "17.2788", x2: "36.9491", y2: "52.4708", gradientUnits: "userSpaceOnUse" },
                    React__default['default'].createElement("stop", { stopColor: "#FF496A" }),
                    React__default['default'].createElement("stop", { offset: "1", stopColor: "#E42648" })),
                React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "13.0692", y1: "39.8859", x2: "27.193", y2: "-1.0612e-05", gradientUnits: "userSpaceOnUse" },
                    React__default['default'].createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                    React__default['default'].createElement("stop", { offset: "1", stopColor: "#119BED" })))),
        React__default['default'].createElement(LogoWithText, { className: "desktop-icon", isDark: isDark }))) : (React__default['default'].createElement("svg", { className: "mobile-icon", viewBox: "0 0 55 55", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default['default'].createElement("path", { d: "M27.0769 54.1537C42.031 54.1537 54.1538 42.031 54.1538 27.0769C54.1538 12.1227 42.031 0 27.0769 0C12.1227 0 0 12.1227 0 27.0769C0 42.031 12.1227 54.1537 27.0769 54.1537Z", fill: "white" }),
        React__default['default'].createElement("path", { d: "M48.0498 10.187C46.1719 10.5582 44.3814 11.0823 42.9074 11.4098C39.5446 12.1632 36.4002 14.7399 35.7124 19.4565C35.101 23.6709 36.5203 25.4833 35.898 30.3855C34.8062 38.9453 26.5958 41.8931 22.7635 43.6837C20.5471 44.71 15.1645 47.0683 11.0156 48.8698C15.5139 52.1889 21.0603 54.1542 27.0762 54.1542C42.034 54.1542 54.1531 42.0351 54.1531 27.0773C54.1531 20.7011 51.9476 14.8381 48.2573 10.2198C48.1918 10.2088 48.1263 10.1979 48.0498 10.187Z", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { d: "M24.0307 23.1027C26.1161 18.5935 25.3628 18.5826 26.9459 14.3464C28.9439 8.97467 35.1563 10.5032 36.8704 10.7325C39.6982 11.1146 40.4407 10.1102 46.4019 9.14936C46.6967 9.10569 46.9806 9.06202 47.2645 9.02926C42.3076 3.49379 35.1017 0 27.0769 0C16.3007 0 6.9985 6.28882 2.64218 15.4054C11.5732 17.6218 21.2139 22.4367 24.0307 23.1027ZM18.1131 4.71662C18.8992 4.83671 22.7206 9.58608 23.4412 21.7816C23.4412 21.7816 18.528 20.6024 17.469 18.0694C16.5955 15.9841 17.731 13.2436 18.1131 4.71662ZM48.2143 10.1647C48.2253 10.1866 48.2471 10.1975 48.258 10.2193C48.1925 10.2084 48.1161 10.2084 48.0506 10.1975C48.1052 10.1757 48.1598 10.1757 48.2143 10.1647ZM0 27.0769C0 24.9151 0.251116 22.8188 0.731513 20.8099C1.71414 21.6287 2.76228 22.5349 3.87593 23.5722C10.929 30.1121 22.4039 35.2764 26.5856 30.4724C26.5965 30.4833 26.6074 30.4833 26.6074 30.4942C25.8431 31.4987 22.928 34.6759 17.3598 33.6932L8.55979 46.8277C3.29727 41.8927 0 34.8724 0 27.0769Z", fill: "url(#paint1_linear)" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "43.3371", y1: "17.2788", x2: "36.9491", y2: "52.4708", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#FF496A" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#E42648" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "13.0692", y1: "39.8859", x2: "27.193", y2: "-1.0612e-05", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#119BED" })))))));
    return (React__default['default'].createElement(Wrapper$b, { isPushed: isPushed, isDark: isDark, href: href }, isAbsoluteUrl ? (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    React__default['default'].createElement(StyledLink, { as: "a", href: href, "aria-label": "Biswap home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink, { to: href, "aria-label": "Biswap home page" }, innerLogo))));
};
var Logo$1 = React__default['default'].memo(Logo, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$m, templateObject_2$h;

var PanelWrapper = styled__default['default'].div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  padding-top: 64px;\n  left: 0;\n  top: 0;\n  width: ", ";\n  height: -webkit-fill-available;\n  z-index: 30;\n  overflow: ", ";\n  transition: padding-top 0.2s, width 0.2s;\n\n  ", " {\n    width: ", ";\n  }\n  \n  ", " {\n    padding-top: 0;\n    overflow: visible;\n    height: 100vh;\n  }\n  \n  ", " {\n    &:hover .menuBtnDesktop {\n      opacity: 1;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  padding-top: 64px;\n  left: 0;\n  top: 0;\n  width: ", ";\n  height: -webkit-fill-available;\n  z-index: 30;\n  overflow: ", ";\n  transition: padding-top 0.2s, width 0.2s;\n\n  ", " {\n    width: ", ";\n  }\n  \n  ", " {\n    padding-top: 0;\n    overflow: visible;\n    height: 100vh;\n  }\n  \n  ", " {\n    &:hover .menuBtnDesktop {\n      opacity: 1;\n    }\n  }\n"])), function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var StyledPanel = styled__default['default'].div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  position: absolute;\n  top: 64px;\n  left: 0;\n  height: calc(100% - 64px);\n  flex-grow: 1;\n  padding-top: 16px;\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  border-right: ", ";\n  transition: padding-top 0.2s, width 0.2s;\n\n  ", " {\n    width: ", ";\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n  }\n\n  ", " {\n    padding-top: 17px;\n    top: 0;\n    height: 100%;\n  }\n"], ["\n  position: absolute;\n  top: 64px;\n  left: 0;\n  height: calc(100% - 64px);\n  flex-grow: 1;\n  padding-top: 16px;\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  border-right: ", ";\n  transition: padding-top 0.2s, width 0.2s;\n\n  ", " {\n    width: ", ";\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n  }\n\n  ", " {\n    padding-top: 17px;\n    top: 0;\n    height: 100%;\n  }\n"])), function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var MenuBtnDesktop = styled__default['default'].div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  display: none;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: ", ";\n  cursor: pointer;\n  position: absolute;\n  top: 24px;\n  right: -12px;\n  transform: ", ";\n\n  ", " {\n    display: flex;\n    opacity: ", ";\n    transition: opacity 0.3s ease;\n  }\n"], ["\n  display: none;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: ", ";\n  cursor: pointer;\n  position: absolute;\n  top: 24px;\n  right: -12px;\n  transform: ", ";\n\n  ", " {\n    display: flex;\n    opacity: ", ";\n    transition: opacity 0.3s ease;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dropDown;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "scale(1, 1)" : "scale(-1, 1)");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? '0' : '1');
});
var Panel = function (props) {
    // Find the home link if provided
    var isPushed = props.isPushed, showMenu = props.showMenu, isDark = props.isDark, href = props.href, footerTitle = props.footerTitle, deals = props.deals, togglePush = props.togglePush, dealsForUIKit = props.dealsForUIKit, showDeals = props.showDeals;
    return (React__default['default'].createElement(PanelWrapper, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
            React__default['default'].createElement(MenuBtnDesktop, { className: "menuBtnDesktop", isPushed: isPushed, onClick: togglePush },
                React__default['default'].createElement(Icon$r, { width: "16px", color: "contrast" })),
            React__default['default'].createElement(Logo$1, { isPushed: isPushed, isDark: isDark, href: href }),
            React__default['default'].createElement(PanelBody, __assign({}, props)),
            deals && (deals === null || deals === void 0 ? void 0 : deals.length) && footerTitle ? (React__default['default'].createElement(PanelFooter2, { isPushed: isPushed, showDeals: showDeals, dealsForUIKit: dealsForUIKit })) : null,
            React__default['default'].createElement(NavSocial, { isPushed: isPushed, isSidebar: true }))));
};
var templateObject_1$l, templateObject_2$g, templateObject_3$9;

var Wrapper$a = styled__default['default'].a(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-right: 12px;\n  width: 64px;\n  \n  ", " {\n    margin-right: 32px;\n    width: 94px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-right: 12px;\n  width: 64px;\n  \n  ", " {\n    margin-right: 32px;\n    width: 94px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var AuditInfo = function () {
    return (React__default['default'].createElement(Wrapper$a, { href: 'https://www.certik.org/projects/biswap', target: "_blank" },
        React__default['default'].createElement("svg", { width: "94", height: "28", viewBox: "0 0 94 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { d: "M18.7136 3.9968L11.3958 1.75L4.08653 3.9968C3.96814 4.03737 3.87048 4.12401 3.81502 4.23787C3.75944 4.3516 3.75061 4.48318 3.79048 4.60366C3.83023 4.72413 3.9155 4.82351 4.02727 4.88006C4.13916 4.93649 4.26848 4.94548 4.38687 4.90503L11.4169 2.75286L18.4682 4.90503C18.5818 4.92425 18.6982 4.89991 18.7953 4.83686C18.8922 4.77382 18.9627 4.67632 18.9933 4.56346C19.0237 4.45048 19.0121 4.33013 18.9604 4.22538C18.9088 4.12077 18.8208 4.03937 18.7136 3.9968Z", fill: "white" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.8147 5.05685C21.8861 5.12876 21.9335 5.22177 21.9501 5.32264C22.3447 8.04996 22.2111 10.8297 21.5567 13.5048C20.5161 17.71 17.8809 22.5953 11.6333 25.6986L11.4261 25.7976L11.2231 25.6986C4.96705 22.5953 2.34023 17.71 1.29968 13.5006C0.636766 10.8286 0.493085 8.05058 0.876683 5.32264C0.894436 5.21752 0.945328 5.12127 1.02164 5.04824C1.09795 4.9752 1.19555 4.92951 1.29968 4.91803C1.39453 4.91078 1.4894 4.93163 1.57276 4.97832C1.65611 5.02489 1.72436 5.09518 1.76919 5.18057L5.9991 13.5952H16.8234L21.0533 5.18057C21.0992 5.08956 21.1721 5.01565 21.2617 4.96921C21.3512 4.92277 21.4528 4.90629 21.5521 4.92202C21.6514 4.93775 21.7433 4.98494 21.8147 5.05685ZM1.61691 6.98405C1.49077 9.09677 1.67902 11.2168 2.17527 13.2724C2.71523 15.5599 3.71636 17.7082 5.11514 19.5812C6.51391 21.4542 8.27976 23.0113 10.3009 24.1534L5.30543 14.3011L1.61691 6.98405ZM6.48127 14.5636L11.3964 24.2438L16.3539 14.5636H6.48127ZM17.6798 19.5747C19.0789 17.7034 20.0821 15.5576 20.6261 13.2724C21.1306 11.2124 21.3219 9.08578 21.1929 6.96682L17.5086 14.2839L12.4962 24.1448C14.5156 23.0019 16.2805 21.4458 17.6798 19.5747Z", fill: "white" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.3202 23.1327C29.4431 23.2609 29.5903 23.3622 29.7528 23.4305C29.9152 23.4987 30.0896 23.5325 30.2652 23.5296H36.9067V22.61H30.2652C30.208 22.6121 30.1509 22.6022 30.0976 22.5809C30.0443 22.5594 29.9959 22.527 29.9553 22.4856C29.9149 22.4442 29.8832 22.3947 29.8622 22.3402C29.8413 22.2858 29.8316 22.2274 29.8337 22.1689V16.7172C29.8327 16.6602 29.8431 16.6037 29.8643 16.551C29.8854 16.4983 29.9169 16.4505 29.9567 16.4106C29.997 16.368 30.0452 16.3342 30.0986 16.311C30.152 16.2879 30.2094 16.276 30.2674 16.2761H36.9067V15.3543H30.2652C30.09 15.3534 29.9164 15.388 29.7545 15.456C29.5924 15.5241 29.4452 15.6242 29.3212 15.7507C29.1972 15.8772 29.099 16.0276 29.0322 16.1931C28.9653 16.3586 28.9312 16.5359 28.9318 16.715V22.1689C28.9293 22.3481 28.9624 22.5259 29.0292 22.6915C29.0959 22.8572 29.1949 23.0073 29.3202 23.1327ZM42.0508 15.3565V23.5296H49.3504V22.61H42.9527V19.9084H48.0924V18.9777H42.9527V16.2761H49.3504V15.3543L42.0508 15.3565ZM54.4858 23.5296V15.3697H61.151C61.5038 15.3726 61.8413 15.5171 62.0908 15.7721C62.3402 16.0271 62.4816 16.3721 62.4844 16.7326V19.1255C62.4861 19.3048 62.4526 19.4827 62.3859 19.6487C62.3191 19.8145 62.2206 19.9651 62.0961 20.0914C61.9731 20.2197 61.8259 20.321 61.6634 20.3893C61.501 20.4575 61.3266 20.4912 61.151 20.4884H59.9297L62.4391 23.5142H61.2503L58.7537 20.4884L55.3877 20.4752V23.5296H54.4858ZM55.8192 19.5599H61.151C61.2066 19.5606 61.2619 19.5497 61.3134 19.5281C61.3649 19.5065 61.4117 19.4746 61.4509 19.4342C61.4908 19.3945 61.5223 19.3467 61.5435 19.294C61.5646 19.2413 61.575 19.1846 61.5739 19.1277V16.7304C61.575 16.6735 61.5646 16.6169 61.5435 16.5642C61.5223 16.5114 61.4908 16.4637 61.4509 16.4239C61.4135 16.3803 61.3674 16.3455 61.3156 16.3219C61.2638 16.2983 61.2076 16.2865 61.151 16.2872H55.8192C55.7611 16.2874 55.7036 16.2996 55.6502 16.3231C55.5968 16.3466 55.5486 16.3809 55.5085 16.4239C55.4693 16.4641 55.4384 16.512 55.4177 16.5646C55.3969 16.6172 55.3867 16.6737 55.3877 16.7304V19.1255C55.3867 19.1823 55.3969 19.2386 55.4177 19.2913C55.4384 19.344 55.4693 19.3918 55.5085 19.432C55.593 19.5123 55.7039 19.5572 55.8192 19.5578V19.5599ZM70.7806 16.2761V23.5296H71.6831V16.2761H75.2279V15.3543H67.2296V16.2739L70.7806 16.2761ZM79.975 15.3543H80.8856V23.5275H79.975V15.3543ZM86.3705 15.3543V23.5275H87.2812V19.9084H89.8571L92.8349 23.5296H94.0003L90.6495 19.4431L94.0003 15.3675H92.8456L89.8684 18.9888H87.283V15.3543H86.3705Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M33.4986 9.83022L31.5303 5.1348H30.9483L28.9766 9.83022H29.6201L30.0617 8.76685H32.4135L32.8551 9.83022H33.4986ZM31.2154 5.99448L31.2359 5.91507H31.2427L31.2599 5.99448L32.1978 8.24897H30.2774L31.2154 5.99448Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M37.078 9.92689C38.2042 9.92689 39.0052 9.14317 39.0052 8.01074V5.13135H38.3993V7.97277C38.3993 8.73923 37.9064 9.36068 37.078 9.36068C36.229 9.36068 35.7532 8.72887 35.7532 7.96586V5.13135H35.1507V8.01074C35.1507 9.17424 35.9928 9.92689 37.078 9.92689Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M43.2966 9.83022C44.7652 9.83022 45.7408 8.89114 45.7408 7.47906C45.7408 6.07388 44.7583 5.1348 43.2863 5.1348H41.585V9.83022H43.2966ZM42.1806 5.6803H43.2692C44.4263 5.6803 45.128 6.40187 45.128 7.49287C45.128 8.58041 44.4228 9.27782 43.2829 9.27782H42.1806V5.6803Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M48.6663 9.83022V5.1348H48.0603V9.83022H48.6663Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M52.9508 9.83022V5.68375H54.4262V5.1348H50.8729V5.68375H52.3449V9.83022H52.9508Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M59.7616 9.83022V9.27782H57.2421V7.70347H59.4056V7.17869H57.2421V5.69065H59.7308V5.1348H56.6362V9.83022H59.7616Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M63.7551 9.83022C65.2237 9.83022 66.1993 8.89114 66.1993 7.47906C66.1993 6.07388 65.2169 5.1348 63.7449 5.1348H62.0435V9.83022H63.7551ZM62.6392 5.6803H63.7278C64.8848 5.6803 65.5866 6.40187 65.5866 7.49287C65.5866 8.58041 64.8814 9.27782 63.7415 9.27782H62.6392V5.6803Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M73.8372 9.83022C74.5629 9.83022 75.2407 9.35377 75.2407 8.50445C75.2407 7.9555 74.8471 7.49287 74.3541 7.34786C74.6999 7.19595 74.9703 6.80236 74.9703 6.3708C74.9703 5.63541 74.4157 5.1348 73.6421 5.1348H71.6532V9.83022H73.8372ZM72.266 5.66649H73.6181C74.0289 5.66649 74.3576 5.99793 74.3576 6.41568C74.3576 6.84034 74.0289 7.17178 73.6147 7.17178H72.266V5.66649ZM72.266 7.64478H73.7961C74.2583 7.64478 74.6177 8.01074 74.6177 8.45957C74.6177 8.93602 74.2549 9.29163 73.7893 9.29163H72.266V7.64478Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M79.2856 9.83022L79.2822 8.02801L81.165 5.1348H80.4461L78.9844 7.48251H78.981L77.5124 5.1348H76.7969L78.6797 8.03146V9.83022H79.2856Z", fill: "white" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M86.5645 4.41667C87.9834 3.97475 89.5114 3.38552 90.0571 2.75946C90.6028 3.38552 92.1309 3.97475 93.5498 4.41667C93.6589 6.03705 93.1131 9.60925 90.0571 10.935C87.0011 9.60925 86.4553 6.03705 86.5645 4.41667ZM89.3935 7.46317L91.5405 5.29775C91.6829 5.15412 91.9166 5.15412 92.059 5.29775C92.2014 5.44137 92.2014 5.67338 92.059 5.81701L89.6527 8.24389C89.5103 8.38752 89.2803 8.38752 89.1379 8.24389L88.1922 7.29008C88.0498 7.14645 88.0498 6.91445 88.1922 6.77082C88.3346 6.6272 88.5646 6.6272 88.707 6.77082L89.3935 7.46317Z", fill: "#1DC872" }))));
};
var templateObject_1$k;

var rotate = styled.keyframes(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var StyledSVG = styled__default['default'].svg(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"], ["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"
    /**
     * Takes in custom size and stroke for circle color, default to primary color as fill,
     * need ...rest for layered styles on top
     */
])), rotate, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var stroke = _a.stroke, theme = _a.theme;
    return stroke !== null && stroke !== void 0 ? stroke : theme.colors.primary;
});
/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */
function Loader(_a) {
    var _b = _a.size, size = _b === void 0 ? '16px' : _b, stroke = _a.stroke, rest = __rest(_a, ["size", "stroke"]);
    return (React__default['default'].createElement(StyledSVG, __assign({ style: { marginLeft: '8px' }, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, stroke: stroke }, rest),
        React__default['default'].createElement("path", { d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var templateObject_1$j, templateObject_2$f;

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React__default['default'].createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.13298 26.6579C3.13253 26.6921 3.1323 26.7263 3.1323 26.7606C3.1323 30.9564 6.53367 34.3577 10.7295 34.3577C14.9253 34.3577 18.3266 30.9564 18.3266 26.7606C18.3266 26.7263 18.3264 26.6921 18.326 26.6579H14.732C14.7329 26.692 14.7333 26.7262 14.7333 26.7606C14.7333 28.9719 12.9407 30.7645 10.7294 30.7645C8.51812 30.7645 6.7255 28.9719 6.7255 26.7606C6.7255 26.7262 6.72593 26.692 6.72679 26.6579H3.13298ZM10.7295 5.71436C15.6624 5.71436 19.6613 9.71326 19.6613 14.6462C19.6613 19.5791 15.6624 23.578 10.7295 23.578C5.79663 23.578 1.79773 19.5791 1.79773 14.6462C1.79773 9.71326 5.79663 5.71436 10.7295 5.71436ZM10.7295 9.3076C13.6779 9.3076 16.0681 11.6977 16.0681 14.6461C16.0681 17.5945 13.6779 19.9847 10.7295 19.9847C7.78111 19.9847 5.39096 17.5945 5.39096 14.6461C5.39096 11.6977 7.78111 9.3076 10.7295 9.3076ZM11.3454 12.9033C12.0632 13.157 12.5775 13.8415 12.5775 14.6462C12.5775 15.6668 11.7501 16.4941 10.7295 16.4941C9.70893 16.4941 8.88157 15.6668 8.88157 14.6462C8.88157 13.8416 9.39577 13.1571 10.1135 12.9034V11.6689H11.3454V12.9033ZM22.7464 16.9552C22.154 15.8735 21.8172 14.6318 21.8172 13.3115C21.8172 9.11573 25.2186 5.71436 29.4144 5.71436C33.6102 5.71436 37.0115 9.11573 37.0115 13.3115C37.0115 14.6319 36.6747 15.8735 36.0823 16.9553C35.1444 16.216 34.0807 15.6291 32.9286 15.232C33.2408 14.6618 33.4183 14.0074 33.4183 13.3115C33.4183 11.1002 31.6257 9.30761 29.4144 9.30761C27.2031 9.30761 25.4105 11.1002 25.4105 13.3115C25.4105 14.0074 25.588 14.6618 25.9002 15.2319C24.7481 15.629 23.6844 16.2159 22.7464 16.9552ZM29.4144 34.3577C34.3473 34.3577 38.3462 30.3588 38.3462 25.4259C38.3462 20.493 34.3473 16.4941 29.4144 16.4941C24.4815 16.4941 20.4826 20.493 20.4826 25.4259C20.4826 30.3588 24.4815 34.3577 29.4144 34.3577ZM29.4144 30.7645C32.3628 30.7645 34.7529 28.3743 34.7529 25.4259C34.7529 22.4775 32.3628 20.0874 29.4144 20.0874C26.466 20.0874 24.0758 22.4775 24.0758 25.4259C24.0758 28.3743 26.466 30.7645 29.4144 30.7645ZM30.0303 27.1688C30.7481 26.9151 31.2624 26.2306 31.2624 25.4259C31.2624 24.4053 30.435 23.578 29.4144 23.578C28.3938 23.578 27.5665 24.4053 27.5665 25.4259C27.5665 26.2305 28.0807 26.915 28.7984 27.1687V28.4032H30.0303V27.1688Z", fill: "#DEAE30" })));
};

exports.ConnectorNames = void 0;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(exports.ConnectorNames || (exports.ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$6,
        connectorId: exports.ConnectorNames.Injected,
        priority: 1,
    },
    {
        title: "TrustWallet",
        icon: Icon$4,
        connectorId: exports.ConnectorNames.Injected,
        priority: 2,
    },
    {
        title: "MathWallet",
        icon: Icon$5,
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
    // {
    //   title: "TokenPocket",
    //   icon: TokenPocket,
    //   connectorId: ConnectorNames.Injected,
    // },
    {
        title: "Coin98",
        icon: Icon,
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "WalletConnect",
        icon: Icon$3,
        connectorId: exports.ConnectorNames.WalletConnect,
        priority: 3,
    },
    {
        title: "Binance Chain",
        icon: Icon$2,
        connectorId: exports.ConnectorNames.BSC,
        priority: 999,
    },
    {
        title: "SafePal Wallet",
        icon: Icon$1,
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
];
var connectorLocalStorageKey = "connectorId";
var walletLocalStorageKey = "wallet";

var StyledButton = styled__default['default'](Button)(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  display: flex; \n  flex-direction: column;\n  justify-content: space-around;\n  padding: 8px 0 0;\n  white-space: nowrap;\n  min-height: 91px;\n"], ["\n  display: flex; \n  flex-direction: column;\n  justify-content: space-around;\n  padding: 8px 0 0;\n  white-space: nowrap;\n  min-height: 91px;\n"])));
var StyledText = styled__default['default'](Text)(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  font-weight: bold;\n  color: ", ";\n"], ["\n  font-weight: bold;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(StyledButton, { variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            localStorage.setItem(walletLocalStorageKey, walletConfig.title);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Icon, { width: "32px" }),
        React__default['default'].createElement(StyledText, null, title)));
};
var templateObject_1$i, templateObject_2$e;

var HelpLink = styled__default['default'](Link)(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var Wrapper$9 = styled__default['default'].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n"], ["\n"])));
var WalletCardsWrapper = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  display: grid;\n  grid-gap: 16px;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n"], ["\n  display: grid;\n  grid-gap: 16px;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n"])));
var getPreferredConfig = function (walletConfig) {
    var preferredWalletName = localStorage.getItem(walletLocalStorageKey);
    var sortedConfig = walletConfig.sort(function (a, b) { return a.priority - b.priority; });
    if (!preferredWalletName) {
        return sortedConfig;
    }
    var preferredWallet = sortedConfig.find(function (sortedWalletConfig) { return sortedWalletConfig.title === preferredWalletName; });
    if (!preferredWallet) {
        return sortedConfig;
    }
    return __spreadArray([
        preferredWallet
    ], sortedConfig.filter(function (sortedWalletConfig) { return sortedWalletConfig.title !== preferredWalletName; }));
};
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    var sortedConfig = getPreferredConfig(connectors);
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Wrapper$9, null,
            React__default['default'].createElement(WalletCardsWrapper, null, sortedConfig.map(function (entry) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss })); })),
            React__default['default'].createElement(HelpLink, { href: "https://docs.biswap.org/faq/biswap-platform#how-do-i-connect-my-wallet-to-biswap", external: true },
                React__default['default'].createElement(Icon$1v, { color: "primary", mr: "6px" }),
                "Learn how to connect"))));
};
var templateObject_1$h, templateObject_2$d, templateObject_3$8;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$1w, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$g, templateObject_2$c;

var ConnectedWrapper = styled__default['default'].div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var TransactionWrapper = styled__default['default'].div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  border-radius: 16px;\n  padding: 24px;\n  background-color: #F2F6FC;\n"], ["\n  border-radius: 16px;\n  padding: 24px;\n  background-color: #F2F6FC;\n"])));
var AccountModal = function (_a) {
    var transactionsForUIKit = _a.transactionsForUIKit, isSwap = _a.isSwap, account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, login = _a.login, recentTransaction = _a.recentTransaction, chainId = _a.chainId, clearTransaction = _a.clearTransaction;
    var onPresentConnectModal = useWalletModal(login, logout, account, recentTransaction, chainId).onPresentConnectModal;
    var changeWalletHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onDismiss()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, logout()];
                case 2:
                    _a.sent();
                    onPresentConnectModal();
                    return [2 /*return*/];
            }
        });
    }); };
    var ClearAndDismiss = function () {
        clearTransaction();
        onDismiss();
    };
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(ConnectedWrapper, null,
            React__default['default'].createElement(Text, { fontSize: '14px', fontWeight: '400', lineHeight: '21px', color: '#1DC872' }, "Connected"),
            React__default['default'].createElement(Button, { onClick: changeWalletHandler, scale: 'sm', variant: 'primary' }, "Change")),
        React__default['default'].createElement(Text, { fontSize: "14px", fontWeight: '600', color: '#07162D', style: {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: "8px",
                marginTop: '16px'
            } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address"),
            React__default['default'].createElement(LinkExternal, { ml: '26px', small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan")),
        isSwap && (React__default['default'].createElement(TransactionWrapper, null,
            React__default['default'].createElement(Flex, { justifyContent: 'space-between', alignItems: 'center' },
                React__default['default'].createElement(Text, { fontSize: '14px', fontWeight: '600', lineHeight: '21px', color: '#07162D' }, "Recent transactions"),
                React__default['default'].createElement(Button, { m: 0, p: 0, scale: 'sm', variant: 'text', onClick: ClearAndDismiss }, "Clear All")),
            React__default['default'].createElement(React__default['default'].Fragment, null, transactionsForUIKit()))),
        React__default['default'].createElement(Flex, null,
            React__default['default'].createElement(Button, { style: { width: '100%' }, mt: '24px', variant: "secondary", onClick: function () {
                    logout();
                    onDismiss();
                } }, "Logout"))));
};
var templateObject_1$f, templateObject_2$b;

var useWalletModal = function (login, logout, account, recentTransaction, chainId, clearTransaction, isSwap, transactionsForUIKit) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { transactionsForUIKit: transactionsForUIKit, isSwap: isSwap, login: login, recentTransaction: recentTransaction, chainId: chainId, account: account || "", logout: logout, clearTransaction: clearTransaction }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var WalletWrap = styled__default['default'].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  background: ", ";\n  border-radius: 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  background: ", ";\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.card;
});
// const CurrencyValue = styled.div`
//   padding: 0 16px;
// `;
var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout, pendingTransactions = _a.pendingTransactions, recentTransaction = _a.recentTransaction, chainId = _a.chainId, clearTransaction = _a.clearTransaction, isSwap = _a.isSwap, transactionsForUIKit = _a.transactionsForUIKit;
    var _b = useWalletModal(login, logout, account, recentTransaction, chainId, clearTransaction, isSwap, transactionsForUIKit), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    var iconProps = { width: "24px", color: "contrast", style: { cursor: "pointer" } };
    var _c = useMatchBreakpoints(), isSm = _c.isSm, isXs = _c.isXs;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(WalletWrap, null,
        React__default['default'].createElement(Button, { variant: pendingTransactions ? "success" : "primary", scale: isSm || isXs ? 'xs' : 'sm', onClick: function () {
                onPresentAccountModal();
            } }, pendingTransactions ? (React__default['default'].createElement(React__default['default'].Fragment, null,
            pendingTransactions,
            " pending ",
            React__default['default'].createElement(Loader, { stroke: "#fff" }))) : (React__default['default'].createElement(React__default['default'].Fragment, null,
            !isSm && !isXs && (React__default['default'].createElement(Icon$s, __assign({}, iconProps, { mr: "8px" }))),
            accountEllipsis))))) : (React__default['default'].createElement(Button, { scale: isSm || isXs ? 'xs' : 'sm', onClick: function () {
            onPresentConnectModal();
        } },
        !isSm && !isXs && (React__default['default'].createElement(Icon$s, __assign({}, iconProps, { mr: "8px" }))),
        "Connect wallet"))));
};
var templateObject_1$e;

// eslint-disable-next-line import/prefer-default-export
var formatSpacingAmount = function (x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
};

var Wrapper$8 = styled__default['default'].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 38px 1fr;\n  grid-template-areas:\n    \"logo bsw-title\"\n    \"logo bsw-value\";\n  grid-column-gap: 8px;\n  position: relative;\n\n  ", " {\n    grid-column-gap: 16px;\n  }\n\n  .logo {\n    width: 38px;\n    grid-area: logo;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: 38px 1fr;\n  grid-template-areas:\n    \"logo bsw-title\"\n    \"logo bsw-value\";\n  grid-column-gap: 8px;\n  position: relative;\n\n  ", " {\n    grid-column-gap: 16px;\n  }\n\n  .logo {\n    width: 38px;\n    grid-area: logo;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var BSWPrice = function (_a) {
    var BSWPriceLabel = _a.BSWPriceLabel, BSWPriceValue = _a.BSWPriceValue;
    return (React__default['default'].createElement(Wrapper$8, null,
        React__default['default'].createElement("svg", { className: "logo", viewBox: "0 0 55 55", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { d: "M27.0769 54.1537C42.031 54.1537 54.1538 42.031 54.1538 27.0769C54.1538 12.1227 42.031 0 27.0769 0C12.1227 0 0 12.1227 0 27.0769C0 42.031 12.1227 54.1537 27.0769 54.1537Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M48.0498 10.187C46.1719 10.5582 44.3814 11.0823 42.9074 11.4098C39.5446 12.1632 36.4002 14.7399 35.7124 19.4565C35.101 23.6709 36.5203 25.4833 35.898 30.3855C34.8062 38.9453 26.5958 41.8931 22.7635 43.6837C20.5471 44.71 15.1645 47.0683 11.0156 48.8698C15.5139 52.1889 21.0603 54.1542 27.0762 54.1542C42.034 54.1542 54.1531 42.0351 54.1531 27.0773C54.1531 20.7011 51.9476 14.8381 48.2573 10.2198C48.1918 10.2088 48.1263 10.1979 48.0498 10.187Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { d: "M24.0307 23.1027C26.1161 18.5935 25.3628 18.5826 26.9459 14.3464C28.9439 8.97467 35.1563 10.5032 36.8704 10.7325C39.6982 11.1146 40.4407 10.1102 46.4019 9.14936C46.6967 9.10569 46.9806 9.06202 47.2645 9.02926C42.3076 3.49379 35.1017 0 27.0769 0C16.3007 0 6.9985 6.28882 2.64218 15.4054C11.5732 17.6218 21.2139 22.4367 24.0307 23.1027ZM18.1131 4.71662C18.8992 4.83671 22.7206 9.58608 23.4412 21.7816C23.4412 21.7816 18.528 20.6024 17.469 18.0694C16.5955 15.9841 17.731 13.2436 18.1131 4.71662ZM48.2143 10.1647C48.2253 10.1866 48.2471 10.1975 48.258 10.2193C48.1925 10.2084 48.1161 10.2084 48.0506 10.1975C48.1052 10.1757 48.1598 10.1757 48.2143 10.1647ZM0 27.0769C0 24.9151 0.251116 22.8188 0.731513 20.8099C1.71414 21.6287 2.76228 22.5349 3.87593 23.5722C10.929 30.1121 22.4039 35.2764 26.5856 30.4724C26.5965 30.4833 26.6074 30.4833 26.6074 30.4942C25.8431 31.4987 22.928 34.6759 17.3598 33.6932L8.55979 46.8277C3.29727 41.8927 0 34.8724 0 27.0769Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("defs", null,
                React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "43.3371", y1: "17.2788", x2: "36.9491", y2: "52.4708", gradientUnits: "userSpaceOnUse" },
                    React__default['default'].createElement("stop", { stopColor: "#FF496A" }),
                    React__default['default'].createElement("stop", { offset: "1", stopColor: "#E42648" })),
                React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "13.0692", y1: "39.8859", x2: "27.193", y2: "-1.0612e-05", gradientUnits: "userSpaceOnUse" },
                    React__default['default'].createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                    React__default['default'].createElement("stop", { offset: "1", stopColor: "#119BED" })))),
        React__default['default'].createElement(Text, { color: "text", fontSize: "12px", lineHeight: "18px" }, BSWPriceLabel),
        React__default['default'].createElement(Text, { color: "contrast", fontSize: "16px", lineHeight: "19px", bold: true },
            "$",
            formatSpacingAmount(BSWPriceValue))));
};
var templateObject_1$d;

styled__default['default'].span(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  font-size: 14px;\n  color: ", ";\n  margin-right: 4px;\n  font-weight: 400;\n"], ["\n  font-size: 14px;\n  color: ", ";\n  margin-right: 4px;\n  font-weight: 400;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var AddToMetamaskBtn = styled__default['default'].button(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: ", ";\n  border-radius: 50%;\n  box-shadow: none;\n  border: 0;\n  cursor: pointer;\n  transition: opacity .3s ease;\n  \n  &:hover {\n    opacity: 0.65;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: ", ";\n  border-radius: 50%;\n  box-shadow: none;\n  border: 0;\n  cursor: pointer;\n  transition: opacity .3s ease;\n  \n  &:hover {\n    opacity: 0.65;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dropDown;
});
var ConnectMetamask = function (props) {
    var onClick = props.onClick;
    return (React__default['default'].createElement(AddToMetamaskBtn, { type: "button", onClick: function () { return onClick(); }, as: "button" },
        React__default['default'].createElement(Icon$1q, { width: "22px" })));
};
var templateObject_1$c, templateObject_2$a;

var BuyBSW = function (_a) {
    var buyBswLink = _a.buyBswLink;
    return (React__default['default'].createElement(Button, { as: "a", href: buyBswLink, variant: 'danger', scale: 'xs' }, "Buy BSW"));
};

var Wrapper$7 = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 16px;\n  padding: 24px;\n  background: ", ";\n  margin-bottom: 24px;\n  grid-area: footer-info;\n\n  ", " {\n    margin-bottom: 0;\n  }\n  \n  ", " {\n    flex-direction: row;\n    justify-content: initial;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 16px;\n  padding: 24px;\n  background: ", ";\n  margin-bottom: 24px;\n  grid-area: footer-info;\n\n  ", " {\n    margin-bottom: 0;\n  }\n  \n  ", " {\n    flex-direction: row;\n    justify-content: initial;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.card;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var LeftInfo = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n\n  ", " {\n    flex-direction: column;\n    justify-content: space-between;\n    width: 142px;\n    min-width: 142px;\n    margin-right: 24px;\n    margin-bottom: 0;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n\n  ", " {\n    flex-direction: column;\n    justify-content: space-between;\n    width: 142px;\n    min-width: 142px;\n    margin-right: 24px;\n    margin-bottom: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var FlexWrap = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"])));
var InfoList = styled__default['default'].div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  flex-grow: initial;\n\n  ", " {\n    flex-grow: 1;\n  }\n"], ["\n  flex-grow: initial;\n\n  ", " {\n    flex-grow: 1;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var InfoListItem = styled__default['default'].div(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  line-height: 18px;\n  \n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  line-height: 18px;\n  \n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"])));
var InfoListLabel = styled__default['default'].span(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["\n  font-size: 12px;\n  width: 140px;\n  min-width: 140px;\n  color: ", ";\n  font-weight: bold;\n  \n  ", " {\n    width: 120px;\n    min-width: 120px;\n  }\n"], ["\n  font-size: 12px;\n  width: 140px;\n  min-width: 140px;\n  color: ", ";\n  font-weight: bold;\n  \n  ", " {\n    width: 120px;\n    min-width: 120px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var InfoListValue = styled__default['default'].span(templateObject_7$5 || (templateObject_7$5 = __makeTemplateObject(["\n  font-size: 12px;\n  color: ", ";\n  padding-left: 4px;\n  font-weight: bold;\n"], ["\n  font-size: 12px;\n  color: ", ";\n  padding-left: 4px;\n  font-weight: bold;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var FooterInfo = function (_a) {
    var BSWPriceLabel = _a.BSWPriceLabel, BSWPriceValue = _a.BSWPriceValue, onClick = _a.onClick, footerStatistic = _a.footerStatistic, buyBswLink = _a.buyBswLink;
    return (React__default['default'].createElement(Wrapper$7, null,
        React__default['default'].createElement(LeftInfo, null,
            React__default['default'].createElement(BSWPrice, { BSWPriceLabel: BSWPriceLabel, BSWPriceValue: BSWPriceValue }),
            React__default['default'].createElement(FlexWrap, null,
                React__default['default'].createElement(ConnectMetamask, { onClick: onClick }),
                React__default['default'].createElement(BuyBSW, { buyBswLink: buyBswLink }))),
        React__default['default'].createElement(InfoList, null, footerStatistic.map(function (item, index) { return (React__default['default'].createElement(InfoListItem, { key: index.toString() },
            React__default['default'].createElement(InfoListLabel, null, item.label),
            React__default['default'].createElement(InfoListValue, null, formatSpacingAmount(item.value)))); }))));
};
var templateObject_1$b, templateObject_2$9, templateObject_3$7, templateObject_4$6, templateObject_5$6, templateObject_6$5, templateObject_7$5;

var Wrapper$6 = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  grid-area: about;\n"], ["\n  grid-area: about;\n"])));
var TopAction$2 = styled__default['default'].div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"])));
var Title$4 = styled__default['default'].h4(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  font-size: 16px;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var ActionIcon$2 = styled__default['default'].div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n  \n  ", " {\n    display: none;\n  }\n  \n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n  \n  &:before {\n    transform: ", ";\n  }\n  \n  &:after {\n    transform: ", ";\n  }\n"], ["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n  \n  ", " {\n    display: none;\n  }\n  \n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n  \n  &:before {\n    transform: ", ";\n  }\n  \n  &:after {\n    transform: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(90deg)';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(0deg)';
});
var NavList$2 = styled__default['default'].div(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform .3s ease, opacity .3s ease, height .3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"], ["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform .3s ease, opacity .3s ease, height .3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'scaleY(1)' : 'scaleY(0)';
}, function (_a) {
    var isOpen = _a.isOpen, innerHeight = _a.innerHeight;
    return isOpen ? innerHeight * 26 + 16 + "px" : '0';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? '1' : '0';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? '16px' : '0';
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var NavItem$2 = styled__default['default'].div(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"], ["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var CustomLink$2 = styled__default['default'](MenuLink)(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["\n  transition: opacity .3s ease;\n\n  &:hover {\n    opacity: .65;\n  }\n"], ["\n  transition: opacity .3s ease;\n\n  &:hover {\n    opacity: .65;\n  }\n"])));
var About = function (_a) {
    var aboutLinks = _a.aboutLinks;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var arrLength = aboutLinks.length;
    return (React__default['default'].createElement(Wrapper$6, null,
        React__default['default'].createElement(TopAction$2, { onClick: function () { return setIsOpen(!isOpen); } },
            React__default['default'].createElement(Title$4, null, "About"),
            React__default['default'].createElement(ActionIcon$2, { isOpen: isOpen })),
        React__default['default'].createElement(NavList$2, { isOpen: isOpen, innerHeight: arrLength }, aboutLinks.map(function (item, index) { return (React__default['default'].createElement(NavItem$2, { key: index.toString() },
            React__default['default'].createElement(CustomLink$2, { href: item.href, target: item.target ? item.target : '_self' }, item.label))); }))));
};
var templateObject_1$a, templateObject_2$8, templateObject_3$6, templateObject_4$5, templateObject_5$5, templateObject_6$4, templateObject_7$4;

var Wrapper$5 = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  grid-area: product;\n"], ["\n  grid-area: product;\n"])));
var TopAction$1 = styled__default['default'].div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"])));
var Title$3 = styled__default['default'].h4(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  font-size: 16px;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var ActionIcon$1 = styled__default['default'].div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n\n  ", " {\n    display: none;\n  }\n\n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n\n  &:before {\n    transform: ", ";\n  }\n\n  &:after {\n    transform: ", ";\n  }\n"], ["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n\n  ", " {\n    display: none;\n  }\n\n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n\n  &:before {\n    transform: ", ";\n  }\n\n  &:after {\n    transform: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(90deg)';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(0deg)';
});
var NavList$1 = styled__default['default'].div(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform .3s ease, opacity .3s ease, height .3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"], ["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform .3s ease, opacity .3s ease, height .3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'scaleY(1)' : 'scaleY(0)';
}, function (_a) {
    var isOpen = _a.isOpen, innerHeight = _a.innerHeight;
    return isOpen ? innerHeight * 26 + 16 + "px" : '0';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? '1' : '0';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? '16px' : '0';
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var NavItem$1 = styled__default['default'].div(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"], ["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var CustomLink$1 = styled__default['default'](MenuLink)(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n  transition: opacity .3s ease;\n\n  &:hover {\n    opacity: .65;\n  }\n"], ["\n  transition: opacity .3s ease;\n\n  &:hover {\n    opacity: .65;\n  }\n"])));
var Product = function (_a) {
    var productLinks = _a.productLinks;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var arrLength = productLinks.length;
    return (React__default['default'].createElement(Wrapper$5, null,
        React__default['default'].createElement(TopAction$1, { onClick: function () { return setIsOpen(!isOpen); } },
            React__default['default'].createElement(Title$3, null, "Products"),
            React__default['default'].createElement(ActionIcon$1, { isOpen: isOpen })),
        React__default['default'].createElement(NavList$1, { isOpen: isOpen, innerHeight: arrLength }, productLinks.map(function (item, index) { return (React__default['default'].createElement(NavItem$1, { key: index.toString() },
            React__default['default'].createElement(CustomLink$1, { href: item.href, target: item.target ? item.target : '_self' }, item.label))); }))));
};
var templateObject_1$9, templateObject_2$7, templateObject_3$5, templateObject_4$4, templateObject_5$4, templateObject_6$3, templateObject_7$3;

var Wrapper$4 = styled__default['default'].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  grid-area: service;\n"], ["\n  grid-area: service;\n"])));
var TopAction = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"])));
var Title$2 = styled__default['default'].h4(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  font-size: 16px;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var ActionIcon = styled__default['default'].div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n\n  ", " {\n    display: none;\n  }\n\n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n\n  &:before {\n    transform: ", ";\n  }\n\n  &:after {\n    transform: ", ";\n  }\n"], ["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n\n  ", " {\n    display: none;\n  }\n\n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n\n  &:before {\n    transform: ", ";\n  }\n\n  &:after {\n    transform: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(90deg)';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(0deg)';
});
var NavList = styled__default['default'].div(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform .3s ease, opacity .3s ease, height .3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"], ["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform .3s ease, opacity .3s ease, height .3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'scaleY(1)' : 'scaleY(0)';
}, function (_a) {
    var isOpen = _a.isOpen, innerHeight = _a.innerHeight;
    return isOpen ? innerHeight * 26 + 16 + "px" : '0';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? '1' : '0';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? '16px' : '0';
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var NavItem = styled__default['default'].div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"], ["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var CustomLink = styled__default['default'](MenuLink)(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n  transition: opacity .3s ease;\n\n  &:hover {\n    opacity: .65;\n  }\n"], ["\n  transition: opacity .3s ease;\n\n  &:hover {\n    opacity: .65;\n  }\n"])));
var Service = function (_a) {
    var serviceLinks = _a.serviceLinks;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var arrLength = serviceLinks.length;
    return (React__default['default'].createElement(Wrapper$4, null,
        React__default['default'].createElement(TopAction, { onClick: function () { return setIsOpen(!isOpen); } },
            React__default['default'].createElement(Title$2, null, "Service"),
            React__default['default'].createElement(ActionIcon, { isOpen: isOpen })),
        React__default['default'].createElement(NavList, { isOpen: isOpen, innerHeight: arrLength }, serviceLinks.map(function (item, index) { return (React__default['default'].createElement(NavItem, { key: index.toString() },
            React__default['default'].createElement(CustomLink, { href: item.href, target: item.target ? item.target : '_self' }, item.label))); }))));
};
var templateObject_1$8, templateObject_2$6, templateObject_3$4, templateObject_4$3, templateObject_5$3, templateObject_6$2, templateObject_7$2;

var Icons = IconModule;
var Wrapper$3 = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  grid-area: community;\n  margin-top: 8px;\n  \n  ", " {\n    margin-top: 24px;\n  }\n  \n  ", " {\n    margin-top: 0;\n  }\n"], ["\n  grid-area: community;\n  margin-top: 8px;\n  \n  ", " {\n    margin-top: 24px;\n  }\n  \n  ", " {\n    margin-top: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var Title$1 = styled__default['default'].h4(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  font-size: 16px;\n  color: ", ";\n  margin-bottom: 16px;\n"], ["\n  font-size: 16px;\n  color: ", ";\n  margin-bottom: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var SocialWrap = styled__default['default'].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  display: flex;\n  margin: 0 -4px;\n"], ["\n  display: flex;\n  margin: 0 -4px;\n"])));
var SocialItem = styled__default['default'].div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n  margin: 0 4px;\n  transition: opacity .3s ease;\n  \n  &:hover {\n    opacity: .65;\n  }\n"], ["\n  width: 20px;\n  height: 20px;\n  margin: 0 4px;\n  transition: opacity .3s ease;\n  \n  &:hover {\n    opacity: .65;\n  }\n"])));
var DropDownWrap = styled__default['default'].div(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: relative;\n\n  &:hover {\n    .drop-down-inner {\n      display: block;\n    }\n  }\n"], ["\n  position: relative;\n\n  &:hover {\n    .drop-down-inner {\n      display: block;\n    }\n  }\n"])));
var DropDownInnerWrap = styled__default['default'].div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  display: none;\n  position: absolute;\n  padding-top: 0;\n  padding-bottom: 8px;\n  bottom: -5px;\n  left: -24px;\n  transform: translateX(-50%);\n  z-index: 50;\n  \n  &:hover {\n    display: block;\n  }\n"], ["\n  display: none;\n  position: absolute;\n  padding-top: 0;\n  padding-bottom: 8px;\n  bottom: -5px;\n  left: -24px;\n  transform: translateX(-50%);\n  z-index: 50;\n  \n  &:hover {\n    display: block;\n  }\n"])));
var DropDown = styled__default['default'].div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  position: relative;\n  border-radius: 8px;\n  padding: 8px;\n  background-color: ", ";\n  bottom: 32px;\n  left: 100%;\n  transform: translateX(-40%);\n\n  &:before {\n    display: block;\n    content: \"\";\n    width: 8px;\n    height: 8px;\n    position: absolute;\n    bottom: -4px;\n    left: 28px;\n    transform: translateX(-50%) rotate(45deg);\n    background-color: ", ";\n  }\n"], ["\n  position: relative;\n  border-radius: 8px;\n  padding: 8px;\n  background-color: ", ";\n  bottom: 32px;\n  left: 100%;\n  transform: translateX(-40%);\n\n  &:before {\n    display: block;\n    content: \"\";\n    width: 8px;\n    height: 8px;\n    position: absolute;\n    bottom: -4px;\n    left: 28px;\n    transform: translateX(-50%) rotate(45deg);\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dropDown;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dropDown;
});
var DropDownLink = styled__default['default'].a(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  user-select: none;\n  transition: all 0.4s ease;\n\n  &:hover {\n    color: ", ";\n  }\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  user-select: none;\n  transition: all 0.4s ease;\n\n  &:hover {\n    color: ", ";\n  }\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var DropDownLabel = styled__default['default'].span(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n  display: block;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  margin-bottom: 8px;\n"], ["\n  display: block;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  margin-bottom: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var FlagWrap = styled__default['default'].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  border-radius: 50%;\n  margin-right: 8px;\n  overflow: hidden;\n  width: 14px;\n  height: 14px;\n"], ["\n  border-radius: 50%;\n  margin-right: 8px;\n  overflow: hidden;\n  width: 14px;\n  height: 14px;\n"])));
var Community = function () {
    return (React__default['default'].createElement(Wrapper$3, null,
        React__default['default'].createElement(Title$1, null, "Community"),
        React__default['default'].createElement(SocialWrap, null, socials.map(function (social) {
            var Icon = Icons[social.icon];
            var iconProps = { width: "20px", color: "textSubtle", style: { cursor: "pointer" } };
            if (social.items) {
                return (React__default['default'].createElement(DropDownWrap, { key: social.label },
                    React__default['default'].createElement(SocialItem, { className: 'hovered-item' },
                        React__default['default'].createElement(Icon, __assign({}, iconProps))),
                    React__default['default'].createElement(DropDownInnerWrap, { className: "drop-down-inner" },
                        React__default['default'].createElement(DropDown, null,
                            React__default['default'].createElement(DropDownLink, { key: social.items.channel.label, href: social.items.channel.href, target: "_blank", "aria-label": social.label },
                                React__default['default'].createElement(FlagWrap, null,
                                    React__default['default'].createElement("svg", { width: "14", height: "14", viewBox: "0 0 256 256", fill: "none" },
                                        React__default['default'].createElement("path", { d: "M128 256C198.692 256 256 198.692 256 128C256 57.3075 198.692 0 128 0C57.3075 0 0 57.3075 0 128C0 198.692 57.3075 256 128 256Z", fill: "white" }),
                                        React__default['default'].createElement("path", { d: "M227.149 48.1543C218.272 49.9091 209.807 52.3865 202.839 53.9349C186.943 57.4962 172.078 69.6768 168.826 91.9736C165.936 111.896 172.646 120.464 169.704 143.638C164.543 184.102 125.73 198.038 107.614 206.502C97.1362 211.354 71.691 222.502 52.0781 231.018C73.3426 246.709 99.562 255.999 128.001 255.999C198.71 255.999 256.001 198.709 256.001 127.999C256.001 97.8574 245.575 70.1413 228.13 48.3091C227.82 48.2575 227.51 48.2059 227.149 48.1543Z", fill: "url(#paint0_linear)" }),
                                        React__default['default'].createElement("path", { d: "M113.6 109.213C123.458 87.8966 119.897 87.845 127.381 67.8192C136.826 42.4257 166.193 49.6515 174.297 50.7354C187.664 52.5419 191.174 47.7935 219.355 43.2515C220.748 43.0451 222.09 42.8386 223.432 42.6838C200 16.5161 165.935 0 128 0C77.058 0 33.0838 29.729 12.4903 72.8257C54.7096 83.3031 100.284 106.064 113.6 109.213ZM85.6257 22.2967C89.3419 22.8645 107.406 45.3161 110.813 102.968C110.813 102.968 87.587 97.3934 82.5806 85.4192C78.4515 75.5612 83.8193 62.6063 85.6257 22.2967ZM227.922 48.0515C227.974 48.1548 228.077 48.2064 228.129 48.3096C227.819 48.258 227.458 48.258 227.148 48.2064C227.406 48.1031 227.664 48.1031 227.922 48.0515ZM0 128C0 117.78 1.1871 107.871 3.45806 98.374C8.10322 102.245 13.0581 106.529 18.3226 111.432C51.6645 142.348 105.91 166.761 125.677 144.051C125.729 144.103 125.781 144.103 125.781 144.155C122.168 148.903 108.387 163.922 82.0644 159.277L40.4645 221.367C15.5871 198.038 0 164.851 0 128Z", fill: "url(#paint1_linear)" }),
                                        React__default['default'].createElement("defs", null,
                                            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "204.871", y1: "81.6791", x2: "174.673", y2: "248.042", gradientUnits: "userSpaceOnUse" },
                                                React__default['default'].createElement("stop", { stopColor: "#FF496A" }),
                                                React__default['default'].createElement("stop", { offset: "1", stopColor: "#E42648" })),
                                            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "61.7817", y1: "188.552", x2: "128.549", y2: "-4.19941e-05", gradientUnits: "userSpaceOnUse" },
                                                React__default['default'].createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                                                React__default['default'].createElement("stop", { offset: "1", stopColor: "#119BED" }))))),
                                social.items.channel.label),
                            React__default['default'].createElement(DropDownLabel, null, "Chats:"),
                            social.items.chats.map(function (item) {
                                var IconFlag = Icons[item.icon];
                                return (React__default['default'].createElement(DropDownLink, { key: item.label, href: item.href, target: "_blank", "aria-label": social.label },
                                    React__default['default'].createElement(FlagWrap, null,
                                        React__default['default'].createElement(IconFlag, { width: "14px" })),
                                    item.label));
                            })))));
            }
            return (React__default['default'].createElement(SocialItem, { key: social.label },
                React__default['default'].createElement(Link, { external: true, href: social.href, "aria-label": social.label },
                    React__default['default'].createElement(Icon, __assign({}, iconProps)))));
        }))));
};
var templateObject_1$7, templateObject_2$5, templateObject_3$3, templateObject_4$2, templateObject_5$2, templateObject_6$1, templateObject_7$1, templateObject_8$1, templateObject_9$1, templateObject_10;

var Wrapper$2 = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  grid-area: support;\n  margin-top: 8px;\n\n  ", " {\n    margin-top: 24px;\n  }\n\n  ", " {\n    margin-top: 0;\n  }\n"], ["\n  grid-area: support;\n  margin-top: 8px;\n\n  ", " {\n    margin-top: 24px;\n  }\n\n  ", " {\n    margin-top: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var Title = styled__default['default'].h4(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  font-size: 16px;\n  color: ", ";\n  margin-bottom: 16px;\n"], ["\n  font-size: 16px;\n  color: ", ";\n  margin-bottom: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var LinkBtn = styled__default['default'].a(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  border-radius: 8px;\n  background: #26A6E5;\n  color: ", ";\n  transition: opacity 0.3s ease;\n  \n  &:hover {\n    opacity: 0.65;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  border-radius: 8px;\n  background: #26A6E5;\n  color: ", ";\n  transition: opacity 0.3s ease;\n  \n  &:hover {\n    opacity: 0.65;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var Suport = function () {
    return (React__default['default'].createElement(Wrapper$2, null,
        React__default['default'].createElement(Title, null, "Support 24/7"),
        React__default['default'].createElement(LinkBtn, { href: "https://t.me/biswap", target: "_blank" },
            "Contact us",
            React__default['default'].createElement(Icon$z, { width: "24px", color: "contrast", ml: "4px" }))));
};
var templateObject_1$6, templateObject_2$4, templateObject_3$2;

var Wrapper$1 = styled__default['default'].footer(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  color: #fff;\n  background: ", ";\n  padding: 32px 16px;\n  transition: padding-left 0.2s;\n  z-index: 10;\n"], ["\n  color: #fff;\n  background: ", ";\n  padding: 32px 16px;\n  transition: padding-left 0.2s;\n  z-index: 10;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.footer;
});
var InnerRow = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: grid;\n  max-width: 1120px;\n  margin: 0 auto;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-areas: \"footer-info footer-info\"\n                        \"about about\"\n                        \"product product\"\n                        \"service service\"\n                        \"community support\";\n\n  ", " {\n    grid-template-columns: repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info footer-info footer-info\"\n                          \"about product service\"\n                          \"community support .\";\n  }\n  ", " {\n    grid-template-columns: 338px minmax(0, 64px) repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info . about product service \"\n                          \"footer-info . community support .\";\n  }\n\n  ", " {\n    grid-template-columns: repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info footer-info footer-info\"\n                          \"about product service\"\n                          \"community support .\";\n  }\n  \n  ", " {\n    grid-template-columns: 338px minmax(0, 64px) repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info . about product service \"\n                          \"footer-info . community support .\";\n  }\n\n  ", " {\n    grid-template-columns: 424px minmax(0, 64px) repeat(3, minmax(110px, 1fr)) 132px;\n    grid-template-areas: \"footer-info . about product service community\"\n                          \"footer-info . about product service support\";\n  }\n"], ["\n  display: grid;\n  max-width: 1120px;\n  margin: 0 auto;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-areas: \"footer-info footer-info\"\n                        \"about about\"\n                        \"product product\"\n                        \"service service\"\n                        \"community support\";\n\n  ", " {\n    grid-template-columns: repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info footer-info footer-info\"\n                          \"about product service\"\n                          \"community support .\";\n  }\n  ", " {\n    grid-template-columns: 338px minmax(0, 64px) repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info . about product service \"\n                          \"footer-info . community support .\";\n  }\n\n  ", " {\n    grid-template-columns: repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info footer-info footer-info\"\n                          \"about product service\"\n                          \"community support .\";\n  }\n  \n  ", " {\n    grid-template-columns: 338px minmax(0, 64px) repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info . about product service \"\n                          \"footer-info . community support .\";\n  }\n\n  ", " {\n    grid-template-columns: 424px minmax(0, 64px) repeat(3, minmax(110px, 1fr)) 132px;\n    grid-template-areas: \"footer-info . about product service community\"\n                          \"footer-info . about product service support\";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var Footer = function (_a) {
    var isPushed = _a.isPushed, BSWPriceLabel = _a.BSWPriceLabel, BSWPriceValue = _a.BSWPriceValue, onClick = _a.onClick, footerStatistic = _a.footerStatistic, aboutLinks = _a.aboutLinks, productLinks = _a.productLinks, serviceLinks = _a.serviceLinks, buyBswLink = _a.buyBswLink;
    return (React__default['default'].createElement(Wrapper$1, { isPushed: isPushed },
        React__default['default'].createElement(InnerRow, null,
            React__default['default'].createElement(FooterInfo, { BSWPriceLabel: BSWPriceLabel, BSWPriceValue: BSWPriceValue, onClick: onClick, footerStatistic: footerStatistic, buyBswLink: buyBswLink }),
            React__default['default'].createElement(About, { aboutLinks: aboutLinks }),
            React__default['default'].createElement(Product, { productLinks: productLinks }),
            React__default['default'].createElement(Service, { serviceLinks: serviceLinks }),
            React__default['default'].createElement(Community, null),
            React__default['default'].createElement(Suport, null))));
};
var templateObject_1$5, templateObject_2$3;

var Wrapper = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n\n  &.no-scroll {\n    height: calc(100vh - 2rem);\n    max-height: calc(100vh - 2rem);\n    overflow: hidden;\n\n    ", " {\n      height: auto;\n      max-height: none;\n      overflow: initial;\n    }\n  }\n"], ["\n  position: relative;\n  width: 100%;\n\n  &.no-scroll {\n    height: calc(100vh - 2rem);\n    max-height: calc(100vh - 2rem);\n    overflow: hidden;\n\n    ", " {\n      height: auto;\n      max-height: none;\n      overflow: initial;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var StyledNav = styled__default['default'].nav(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.4s, padding-left 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  z-index: 40;\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    padding-left: ", ";\n  }\n\n  ", " {\n    height: ", "px;\n    top: ", ";\n    z-index: 20;\n  }\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.4s, padding-left 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  z-index: 40;\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    padding-left: ", ";\n  }\n\n  ", " {\n    height: ", "px;\n    top: ", ";\n    z-index: 20;\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT_MOBILE + "px");
}, MENU_HEIGHT_MOBILE, function (_a) {
    var theme = _a.theme, menuBg = _a.menuBg;
    return (menuBg ? "transparent" : theme.colors.background);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + 8 : SIDEBAR_WIDTH_REDUCED + 8) + "px";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, MENU_HEIGHT, function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
});
var BodyWrapper = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  z-index: 30;\n  min-height: calc(100vh - 2rem);\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  z-index: 30;\n  min-height: calc(100vh - 2rem);\n"])));
var Inner = styled__default['default'].div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1;\n  padding-top: ", ";\n  transition: padding-top 0.4s;\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1;\n  padding-top: ", ";\n  transition: padding-top 0.4s;\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: calc(100% - 64px);\n  top: 64px;\n\n  ", " {\n    display: none;\n  }\n\n  ", " {\n    height: 100%;\n    top: 0;\n  }\n"], ["\n  position: fixed;\n  height: calc(100% - 64px);\n  top: 64px;\n\n  ", " {\n    display: none;\n  }\n\n  ", " {\n    height: 100%;\n    top: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links; _a.profile; var children = _a.children, footerTitle = _a.footerTitle, deals = _a.deals, BSWPriceLabel = _a.BSWPriceLabel, BSWPriceValue = _a.BSWPriceValue, footerStatistic = _a.footerStatistic, pendingTransactions = _a.pendingTransactions, buyBswLink = _a.buyBswLink, recentTransaction = _a.recentTransaction, chainId = _a.chainId, clearTransaction = _a.clearTransaction, isSwap = _a.isSwap, transactionsForUIKit = _a.transactionsForUIKit, onClick = _a.onClick, aboutLinks = _a.aboutLinks, productLinks = _a.productLinks, serviceLinks = _a.serviceLinks, dealsForUIKit = _a.dealsForUIKit, showDeals = _a.showDeals;
    var _c = useMatchBreakpoints(), isLg = _c.isLg, isMd = _c.isMd, isSm = _c.isSm, isXs = _c.isXs;
    var isMobile = isLg || isMd || isSm || isXs;
    var _d = React.useState(!isMobile), isPushed = _d[0], setIsPushed = _d[1];
    var _e = React.useState(true), showMenu = _e[0]; _e[1];
    var _f = React.useState(true), menuBg = _f[0], setMenuBg = _f[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                // setShowMenu(true);
                setMenuBg(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    // setShowMenu(true);
                    setMenuBg(false);
                }
                else {
                    // Has scroll down
                    // setShowMenu(false);
                    setMenuBg(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper, { className: "" + (isPushed ? "no-scroll" : "") },
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(StyledNav, { showMenu: showMenu, isPushed: isPushed, menuBg: menuBg },
                React__default['default'].createElement(TogglePanel, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark }),
                React__default['default'].createElement(Flex, { alignItems: "center" },
                    React__default['default'].createElement(AuditInfo, null),
                    React__default['default'].createElement(UserBlock, { clearTransaction: clearTransaction, account: account, login: login, logout: logout, recentTransaction: recentTransaction, chainId: chainId, pendingTransactions: pendingTransactions, isSwap: isSwap, transactionsForUIKit: transactionsForUIKit }))),
            React__default['default'].createElement(Panel, { togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/", footerTitle: footerTitle, deals: deals, dealsForUIKit: dealsForUIKit, showDeals: showDeals }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu },
                React__default['default'].createElement("div", null, children),
                React__default['default'].createElement(Footer, { BSWPriceLabel: BSWPriceLabel, BSWPriceValue: BSWPriceValue, footerStatistic: footerStatistic, isPushed: isPushed, onClick: onClick, buyBswLink: buyBswLink, aboutLinks: aboutLinks, productLinks: productLinks, serviceLinks: serviceLinks })),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
Menu.defaultProps = {
    pendingTransactions: 0,
};
var templateObject_1$4, templateObject_2$2, templateObject_3$1, templateObject_4$1, templateObject_5$1;

var giftImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANWSURBVHgB7ZTdaxRXGMafc+ZjZ8zudrJht2uT6MYYU5WSgFAKvbFQWqS9EWpbclEQCqWXgfaid70oQqFg/4FC6VXBgk1LrwpFaKsxKiZ+RQ3qBj+iJuvOZndn5+N8eGbUIMSYXe8U32GYM2cO5zfP+z7vAV7GCxuV+fkdtVptvN31dL0Fd8rlvcuue7jRaIw+mluYnS1FrvseQvau53l9aCPIegtuX7lymOr6iOU43cHlq3tR6mvIVusXWnH/JIvVPfzytTKs1Bt6JG/lvhx7+9lBl+a+4Ro9IAlx7VeyDhcCuLsEuViBSSjYwl0QDhi7dqL100S6+MPXzSfto68FuPHtwY/opo3f8/9PbjHfHAUt5h1CCMTvf4P9OwXJBUJKoKe7YKazEKPbkWJNA+0quvHJFyMyxI9CiN2MR7APfAXZ0w31DjF9AQvfHYRUV8QZqFLUOzyMdC4PbexDN/fWru61QKsUNbf2fr7439RuziK0wgh9fgu09sAzWi6LmteAEqb+UF1q4N+rwrYz0Berjty3TyOHDvEngVa5zurf+IcwKCLBIKXE8szZB2qEhOh2QDMbEHKeKArVzzSWa4B6V2mGWxhZ04GrQHZu6zEt3zPtRUoRC1E9fhJhGCIIfHgtD2RoAI0oQD3y0VKp1a0UaMqEDCIwKkptgwofv9Po3fP+WLYnB9swEJ2YgViqwFBj0zThbH8dGcNE1rSRNhREmUIwla26SumOwYG2QXGUPvt0dkOxcEcnGixdhzdzDpTS5La2bUnqoxGS1Cr0Q0ilXrp1aJbV3xEoDs00f42f8abR3LWk8HHom/sTYOJXqUAsAFeplUsusG1zT8egrnx+Qp0IyX7B+Ysr89yyYBVfTcwRR8QYWBBAVmrQhku3OgalhjadNpx0XVlPed6DP3/94RcJa+fww5EEE1yBfIiqC0nlzY5BA/v3u2Ymc0omiwia52dXvhmlvsT6CUxZP/KVItVzQXV5qmNQoqrLnogrHqePla+vzFtDgwkoZqmTD6FSxO/V/yoMDs49Ewii9bM09SNMo5P1M+fKXDVm3LykWFBFtFXfqJoRiabqKb9e/e1pW617ej8ek5OTQ1TQ1zjhpGhZ00fGx+EAjhlS+cHRf+bxMp7ruA9B8HiZzFdvegAAAABJRU5ErkJggg==";

var ActionsContainer = styled__default['default'].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n"])));
var StyledIcon = styled__default['default'].img(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  width: 26px;\n  filter: drop-shadow(2px 4px 8px rgba(0, 109, 163, 0.4));\n"], ["\n  width: 26px;\n  filter: drop-shadow(2px 4px 8px rgba(0, 109, 163, 0.4));\n"])));
var ToastAction = function (_a) {
    _a.title; var telegramDescription = _a.telegramDescription, tweeterDescription = _a.tweeterDescription, url = _a.url; _a.thx;
    return (React__default['default'].createElement(ActionsContainer, null,
        React__default['default'].createElement(reactShare.TwitterShareButton, { style: { width: '35%' }, title: tweeterDescription, url: "" + url },
            React__default['default'].createElement(Button, { scale: "sm", width: '100%', style: { backgroundColor: '#16CDFD', alignItems: "center" } },
                React__default['default'].createElement(StyledIcon, { src: giftImg, alt: "gift-icon" }),
                React__default['default'].createElement(Text, { color: '#fff', fontSize: '12px', bold: true }, "Twitter"),
                React__default['default'].createElement(Icon$13, { mr: "8px", color: "#fff", width: "20px" }))),
        React__default['default'].createElement(reactShare.TelegramShareButton, { style: { width: '35%', marginLeft: "10px", alignItems: "center" }, title: telegramDescription, url: "" + url },
            React__default['default'].createElement(Button, { scale: "sm", width: '100%', style: { backgroundColor: '#26A6E5', alignItems: "center" } },
                React__default['default'].createElement(Text, { color: '#fff', fontSize: '12px', bold: true }, "Telegram"),
                React__default['default'].createElement(Icon$14, { mr: "8px", color: "#fff", width: "20px" })))));
};
var templateObject_1$3, templateObject_2$1;

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$2.INFO,
    _a[types.SUCCESS] = variants$2.SUCCESS,
    _a[types.DANGER] = variants$2.DANGER,
    _a[types.WARNING] = variants$2.WARNING,
    _a);
var ClearAllButton = styled__default['default'](Button)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: absolute;\n  right: 0;\n  top: ", ";\n"], ["\n  position: absolute;\n  right: 0;\n  top: ", ";\n"])), function (_a) {
    var top = _a.top;
    return -top + "px";
});
var StyledToast = styled__default['default'].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: fixed;\n  max-width: calc(100% - 12px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1), 0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 16px;\n\n  ", " {\n    transform: none;\n    left: auto;\n    right: 35px;\n    max-width: 350px;\n  }\n"], ["\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: fixed;\n  max-width: calc(100% - 12px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1), 0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 16px;\n\n  ", " {\n    transform: none;\n    left: auto;\n    right: 35px;\n    max-width: 350px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ProgressWrapper = styled__default['default'].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", "\n  bottom: 0;\n  min-height: 5px;\n"], ["\n  background-color: ", "\n  bottom: 0;\n  min-height: 5px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var ProgressLine = styled__default['default'].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 5px;\n  transition: 100ms all;\n  border-radius: 16px;\n"], ["\n  background-color: ", ";\n  height: 5px;\n  transition: 100ms all;\n  border-radius: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
var AlertWrapper = styled__default['default'].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0 16px;\n"], ["\n  padding: 0 16px;\n"])));
var LinkWrapper = styled__default['default'].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin: 14px 0 11px 0;\n  display: flex;\n  align-items: center;\n"], ["\n  margin: 14px 0 11px 0;\n  display: flex;\n  align-items: center;\n"])));
var LinkStyles = styled__default['default'].a(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n color: ", ";\n font-size: 14px;\n font-weight: 700;\n line-height: 21px;\n  text-decoration: underline;\n"], ["\n color: ", ";\n font-size: 14px;\n font-weight: 700;\n line-height: 21px;\n  text-decoration: underline;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var SharingText = styled__default['default'].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var ActionContainer = styled__default['default'].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n"], ["\n"])));
var Toast = function (_a) {
    var _b = _a.removeButtonPosition, removeButtonPosition = _b === void 0 ? 60 : _b, clearAll = _a.clearAll, toast = _a.toast, style = _a.style, handleMouseEnter = _a.handleMouseEnter, handleMouseLeave = _a.handleMouseLeave, handleRemove = _a.handleRemove, progress = _a.progress, props = __rest(_a, ["removeButtonPosition", "clearAll", "toast", "style", "handleMouseEnter", "handleMouseLeave", "handleRemove", "progress"]);
    var description = toast.description, type = toast.type, title = toast.title, telegramDescription = toast.telegramDescription, tweeterDescription = toast.tweeterDescription, hash = toast.hash, url = toast.url;
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            clearAll && (React__default['default'].createElement(ClearAllButton, { variant: 'text', top: removeButtonPosition, onClick: function () { return clearAll(); } },
                React__default['default'].createElement(Text, { fontSize: '16px', color: '#1263F1', lineHeight: '19px' }, "Clear All"))),
            React__default['default'].createElement(Alert, { style: { padding: '16px 0 0 0' }, title: title, variant: alertTypeMap[type], onClick: handleRemove },
                React__default['default'].createElement(AlertWrapper, null,
                    hash &&
                        React__default['default'].createElement(LinkWrapper, null,
                            React__default['default'].createElement(LinkStyles, { target: "_blank", href: "https://bscscan.com/tx/" + hash }, "View on bscscan"),
                            React__default['default'].createElement(Icon$15, { ml: '7px', width: '18px', height: '18px', color: 'primary' })),
                    description ? React__default['default'].createElement(Text, { color: "#6B7D98", fontSize: "12px", as: "p", mb: "8px", dangerouslySetInnerHTML: { __html: description } }) : React__default['default'].createElement(React__default['default'].Fragment, null),
                    telegramDescription && tweeterDescription && (React__default['default'].createElement(ActionContainer, null,
                        React__default['default'].createElement(ToastAction, { telegramDescription: telegramDescription, tweeterDescription: tweeterDescription, title: title, url: url, thx: "https://bscscan.com/tx/" + hash }),
                        React__default['default'].createElement(Button, { p: "0", scale: "sm", variant: 'text', as: 'a', href: 'https://docs.biswap.org/sharing-season', target: "_blank" },
                            React__default['default'].createElement(SharingText, null,
                                React__default['default'].createElement(Text, { fontSize: '10px', pl: '0', fontWeight: '400', lineHeight: '12px', color: '#6b7d98' }, "*Check"),
                                React__default['default'].createElement(Text, { fontSize: '10px', pl: '0', fontWeight: '400', lineHeight: '12px', color: "#1263F1", ml: "2px" }, "Sharing Season"),
                                React__default['default'].createElement(Text, { fontSize: '10px', pl: '0', fontWeight: '400', lineHeight: '12px', color: '#6b7d98', ml: "2px" }, "details")))))),
                React__default['default'].createElement("div", { style: { width: '100%' } },
                    React__default['default'].createElement(ProgressWrapper, { style: { width: '100%' } }, progress ? React__default['default'].createElement(ProgressLine, { style: { width: 100 - progress + "%" } }) : null))))));
};
var templateObject_1$2, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

var ZINDEX = 1000;
var BOTTOM_POSITION = 35; // Initial position from the bottom
var StyledToastContainer = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var clearAll = _a.clearAll, toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 10000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 8 : _c;
    var _d = React.useState(100), progress = _d[0], setProgress = _d[1];
    var _e = React.useState(true), progressRun = _e[0], setProgressRun = _e[1];
    var _f = React.useState(ttl), currentTime = _f[0], setCurrentTime = _f[1];
    // for update timer for new toast
    var updateTimerRef = React.useRef(1);
    var timer = React.useRef();
    var intervalRef = React.useRef();
    var removeHandler = React.useRef(onRemove);
    var resetAll = function () {
        setProgress(100);
        setCurrentTime(ttl);
        // clearTimeout(intervalRef.current)
        // clearTimeout(timer.current);
    };
    React.useEffect(function () {
        if (toasts.length !== updateTimerRef.current) {
            resetAll();
            updateTimerRef.current = toasts.length;
            intervalRef.current = window.setTimeout(function () {
                var timeToRemove = ttl;
                var percent = ttl / 100;
                setCurrentTime(timeToRemove > 0 ? timeToRemove : 0);
                if (progressRun && (timeToRemove - percent) >= 0) {
                    setProgress((timeToRemove - percent) / percent);
                }
            }, 100);
        }
        if (toasts.length && progressRun) {
            intervalRef.current = window.setTimeout(function () {
                var timeToRemove = ttl * progress / 100;
                var percent = ttl / 100;
                setCurrentTime(timeToRemove > 0 ? timeToRemove : 0);
                if (progressRun && (timeToRemove - percent) >= 0) {
                    setProgress((timeToRemove - percent) / percent);
                }
            }, 100);
        }
        return function () {
            return clearTimeout(intervalRef.current);
        };
        // eslint-disable-next-line
    }, [progress, currentTime, progressRun, toasts, updateTimerRef.current]);
    var handleRemove = React.useCallback(function () {
        var _a;
        removeHandler.current((_a = toasts[0]) === null || _a === void 0 ? void 0 : _a.id);
        setProgress(100);
        setCurrentTime(ttl);
        setProgressRun(true);
        clearTimeout(intervalRef.current);
        clearTimeout(timer.current);
        // eslint-disable-next-line
    }, [toasts, progress, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
        setProgressRun(false);
        if (intervalRef.current) {
            clearTimeout(intervalRef.current);
        }
    };
    var handleMouseLeave = function () {
        setProgressRun(true);
        if (timer.current) {
            clearTimeout(timer.current);
        }
        if (intervalRef.current) {
            clearTimeout(intervalRef.current);
        }
        timer.current = window.setTimeout(function () {
        }, currentTime);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, currentTime);
        return function () {
            clearTimeout(timer.current);
        };
    }, [handleRemove, currentTime]);
    var clearAllHandler = function () {
        if (clearAll) {
            clearAll();
            setProgressRun(true);
        }
    };
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var bottom = BOTTOM_POSITION + index * stackSpacing;
            var removeButtonPosition = stackSpacing * toasts.length + 40;
            if (index === 0)
                return React__default['default'].createElement(Toast, { handleRemove: handleRemove, handleMouseEnter: handleMouseEnter, handleMouseLeave: handleMouseLeave, progress: progress, key: toast.id, toast: toast, zIndex: zIndex, ttl: ttl, removeButtonPosition: removeButtonPosition, clearAll: toasts.length > 1 ? clearAllHandler : undefined, style: { bottom: bottom + "px", zIndex: zIndex } });
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, style: { bottom: bottom + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'CodecPro', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'CodecPro', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

var baseColors = {
    failure: "#F93B5D",
    primary: "#1263F1",
    primaryBright: "#53DEE9",
    primaryDark: "#0098A1",
    secondary: "#7645D9",
    success: "#1DC872",
    warning: "#FFDB1C",
    dark: "#102648",
};
var brandColors = {
    binance: "#F0B90B",
    polygon: "#8247E5",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", header: "#071C3C", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", inputBorder: "#E5EAF2", inputSecondary: "#d7caec", tertiary: "#E4EFFF", text: "#452A7A", disabled: "#E9EAEB", textDisabled: "#BDC2C4", textSubtle: "#8f80ba", borderColor: "#E9EAEB", card: "#FFFFFF", dropDown: "#F6F6F6", footer: "#FFFFFF", boost: "#7412F1", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
        cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
        cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#9A6AFF", header: "#071C3C", background: "#07162D", backgroundDisabled: "#C8D4E6", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#021127", inputBorder: "#1C3254", inputSecondary: "#0E3382", primaryDark: "#0098A1", tertiary: "#E4EFFF", text: "#708DB7", disabled: "#F2F6FC", textDisabled: "#708DB7", textSubtle: "#749BD8", borderColor: "#524B63", card: "#102648", dropDown: "#1C3254", footer: "#0C1F3C", boost: "#7412F1", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
        cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
        cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
    } });

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$5 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$3 = {
    handleBackground: lightColors.text,
};
var dark$3 = {
    handleBackground: darkColors.text,
};

var light$2 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$2 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$1 = {
    background: darkColors.card,
};
var dark$1 = {
    background: lightColors.card,
};

var light = {
    background: lightColors.card,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark = {
    background: darkColors.card,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$6, colors: darkColors, card: dark$5, toggle: dark$3, nav: dark$2, modal: dark$1, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$6, colors: lightColors, card: light$5, toggle: light$3, nav: light$2, modal: light$1, radio: light$4, tooltip: light });

exports.AddIcon = Icon$1R;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$1Q;
exports.ArrowDownIcon = Icon$1P;
exports.ArrowDropDownIcon = Icon$1O;
exports.ArrowDropUpIcon = Icon$1N;
exports.ArrowForwardIcon = Icon$1M;
exports.ArrowUpIcon = Icon$1L;
exports.AutoCompaundIcon = Icon$X;
exports.AutoRenewIcon = Icon$1K;
exports.BSCIcon = Icon$V;
exports.BackgroundImage = BackgroundImage;
exports.Badge = Badge;
exports.Banner = Banner;
exports.BannerBody = BannerBody;
exports.BannerTitle = BannerTitle;
exports.BaseLayout = GridLayout$1;
exports.BinanceIcon = Icon$1J;
exports.BlockIcon = Icon$1T;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$1I;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$1G;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$1H;
exports.CardsLayout = GridLayout;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon$1V;
exports.CheckmarkIcon = Icon$1F;
exports.ChevronDownIcon = Icon$1E;
exports.ChevronLeftIcon = Icon$1D;
exports.ChevronRightEndIcon = Icon$1B;
exports.ChevronRightIcon = Icon$1C;
exports.ChevronUpIcon = Icon$1A;
exports.CloseIcon = Icon$1z;
exports.CogIcon = Icon$1y;
exports.CommunityIcon = Icon$1x;
exports.CopyIcon = Icon$1w;
exports.CupIcon = Icon$Y;
exports.DownloadIcon = Icon$16;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1U;
exports.FallingBunnies = FallingBunnies;
exports.FarmCard = FarmCard;
exports.FarmCardBody = FarmCardBody;
exports.FarmCardHead = FarmCardHead;
exports.FireIcon = Icon$U;
exports.FlagIcon = Icon$11;
exports.Flex = Flex;
exports.GasIcon = Icon$S;
exports.Heading = Heading;
exports.HelpIcon = Icon$1v;
exports.HourglassIcon = Icon$T;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$1S;
exports.Input = Input$1;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.LinkIcon = Icon$15;
exports.ListViewIcon = Icon$1u;
exports.LoaderIcon = Icon$1r;
exports.LogoIcon = Icon$1t;
exports.LogoRoundIcon = Icon$1s;
exports.Menu = Menu;
exports.MetamaskIcon = Icon$1q;
exports.MinusIcon = Icon$1p;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.ModalWithBackground = ModalWithBackground;
exports.MouseIcon = Icon$_;
exports.NoProfileAvatarIcon = Icon$1o;
exports.NotificationDot = NotificationDot;
exports.OpenNewIcon = Icon$1n;
exports.PancakeRoundIcon = Icon$1l;
exports.PancakesIcon = Icon$1m;
exports.PlayCircleOutlineIcon = Icon$1k;
exports.PolygonIcon = Icon$W;
exports.PrizeIcon = Icon$1j;
exports.Progress = Progress;
exports.ProgressBunny = Icon$1g;
exports.Radio = Radio;
exports.RatingIcon = Icon$Z;
exports.RemoveIcon = Icon$1i;
exports.ResetCSS = ResetCSS;
exports.RocketIcon = Icon$12;
exports.SearchIcon = Icon$1a;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.StarIcon = Icon$Q;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$19;
exports.SyncAltIcon = Icon$18;
exports.Tag = Tag;
exports.TelegramIcon = Icon$14;
exports.Text = Text;
exports.Ticket = Icon$1d;
exports.TicketRound = Icon$1c;
exports.TimerIcon = Icon$1b;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.TradeIcon = Icon$R;
exports.TwitterIcon = Icon$13;
exports.VerifiedIcon = Icon$1h;
exports.WaitIcon = Icon$1f;
exports.WaitReloadIcon = Icon$$;
exports.WalletIcon = Icon$10;
exports.WarningIcon = Icon$17;
exports.Won = Icon$1e;
exports.alertVariants = variants$2;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.connectorLocalStorageKey = connectorLocalStorageKey;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useKonamiCheatCode = useKonamiCheatCode;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;

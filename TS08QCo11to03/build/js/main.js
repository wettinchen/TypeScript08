"use strict";
const isObj = (arg) => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null);
};
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};

function generate_error(message, code) {
    if (code === void 0) { code = 200; }
    throw {
        message: message,
        code: code
    };
}
generate_error("Internal errors");

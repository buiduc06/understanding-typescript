function generate_error(message: string, code: number = 200): never {
  throw {
    message: message,
    code: code,
  };
}

generate_error("Internal errors");

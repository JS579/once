function once(fn) {
    let called = false;
    let result;
    return function (...args) {
      if (!called) {
        result = fn(...args);
        called = true;
      }
      return result;
    };
  }

module.exports = once
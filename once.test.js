const once = require("./once")

    describe('once', () => {
      test('returns a function on first invocation', () => {
        const add = 5 + 6
        const double = once(add);
        expect(typeof double).toBe('function');
      })

      test('returns correct result only on first invocation', () => {
        function add(a, b){
            return a + b
        }
        const addOnce = once(add);
        expect(addOnce(2, 3)).toBe(5);
        expect(addOnce(3, 4)).toBe(5);
        expect(addOnce(1, 9)).toBe(5);
      })

      test('returns correct result when passed a function with more than two parameters', () => {
        function total(a, b, c, d, e){
            return a + b + c + d * e
        }
        const totalOnce = once(total);
        expect(totalOnce(2, 3, 5, 6, 7)).toBe(52);
        expect(totalOnce(3, 4, 1, 2, 3)).toBe(52);
      })
    });

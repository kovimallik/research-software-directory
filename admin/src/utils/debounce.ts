/**
 * https://github.com/chodorowicz/ts-debounce/blob/master/src/index.ts
 * A function that emits a side effect and does not return anything.
 */
export type Procedure = (...args: any[]) => void;

export type Options = {
  isImmediate: boolean;
};

export function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds: number = 50,
  options: Options = {
    isImmediate: false
  }
): F {
  let timeoutId: number | undefined;

  return function(this: any, ...args: any[]) {
    const context = this;

    const doLater = function() {
      timeoutId = undefined;
      if (!options.isImmediate) {
        func.apply(context, args);
      }
    };

    const shouldCallNow = options.isImmediate && timeoutId === undefined;

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, waitMilliseconds) as any;

    if (shouldCallNow) {
      func.apply(context, args);
    }
  } as any;
}

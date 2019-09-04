function compose(...fns: any) {
  console.log(fns);
  return function composed(result: any) {
    return fns.reduceRight(function reducer(result: any, fn: any) {
      return fn(result);
    }, result);
  };
}

function curry(fn: any,arity = fn.length) {
  return (function nextCurried(prevArgs: any){
    return function curried(nextArg:any){
      const args: any[] = [ ...prevArgs, nextArg ];

      if (args.length >= arity) {
        return fn( ...args );
      }
      else {
        return nextCurried( args );
      }
    };
  })( [] );
}
function reverseArgs(fn: any) {
  return function argsReversed(...args: any){
    return fn( ...args.reverse() );
  };
}

const pipe = reverseArgs( compose );

export {
  compose,
  curry,
  pipe,
  reverseArgs,
};
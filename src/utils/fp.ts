
function reduce(reducerFn, initialValue, arr) {
  let acc;
  let startIdx;

  if (arguments.length === 3) {
    acc = initialValue;
    startIdx = 0;
  } else if (arr.length > 0) {
    acc = arr[0];
    startIdx = 1;
  } else {
    throw new Error('Must provide at least one value.');
  }

  for (let idx = startIdx; idx < arr.length; idx++) {
    acc = reducerFn(acc, arr[idx], idx, arr);
  }

  return acc;
}

function unique(list) {
  const uniqList = [];

  for (const v of list) {
    // value not yet in the new list?
    if (uniqList.indexOf(v) === -1) {
      uniqList.push(v);
    }
  }

  return uniqList;
}

function flatten(arr) {
  return arr.reduce(
    (list,v) =>
      list.concat( Array.isArray( v ) ? flatten( v ) : v )
    , [] );
}

function compose(...fns) {
  return function composed(result) {
    return fns.reduceRight(function reducer(result, fn) {
      return fn(result);
    }, result);
  };
}

function curry(fn,arity = fn.length) {
  return (function nextCurried(prevArgs){
    return function curried(nextArg){
      var args = [ ...prevArgs, nextArg ];

      if (args.length >= arity) {
        return fn( ...args );
      }
      else {
        return nextCurried( args );
      }
    };
  })( [] );
}
function reverseArgs(fn) {
  return function argsReversed(...args){
    return fn( ...args.reverse() );
  };
}

const pipe = reverseArgs( compose );

export {
  compose,
  curry,
  flatten,
  pipe,
  reduce,
  reverseArgs,
  unique
};
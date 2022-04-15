function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let result = func(...args);
    let idx = cache.findIndex((item) => item.hash === hash);
    if (idx != -1) {
      console.log("Из кэша: " + result);
      return "Из кэша: " + result;
    }

    if (cache.length >= 5) {
      cache.shift();
    }

    cache.push({
      hash: hash,
      result: result,
    });

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result; 
  }

  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let flag = false,
      savedArgs,
      savedThis;

  return function(...args) {
    savedArgs = args;
    savedThis = this;

    if(flag) {
      return;
    }

    func.apply(this, savedArgs);
    flag = true;

    setTimeout(() => {
      flag = false;
      func.apply(savedThis, savedArgs)
    }, ms);
  }
}


function debounceDecorator2(func) {
  let flag = false,
      savedArgs,
      savedThis;
  
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count ++;

    savedArgs = args;
    savedThis = this;

    if(flag) {
      return;
    }

    func.apply(this, savedArgs);
    flag = true;

    setTimeout(() => {
      flag = false;
      func.apply(savedThis, savedArgs)
    }, ms);
  }
  return wrapper;
}

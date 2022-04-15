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
  let flag = false;
  let timeout;

  return function(...args) {

    if(!flag) {
      func.apply(this, args);
      flag = true;
    }

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      flag = false;
      func.apply(this, args)
    }, ms);
  }
}


function debounceDecorator2(func) {
  let flag = false;
  let timeout;
  
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count ++;

    if(!flag) {
      func.apply(this, args);
      flag = true;
    }

    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      flag = false;
      func.apply(this, args)
    }, ms);
  }
  return wrapper;
}

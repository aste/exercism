export const promisify =
  (fnToPromisify) =>
  (...args) => {
    return new Promise((resolve, reject) => {
      fnToPromisify(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

export const all = (arrOfPromises) =>
  new Promise((resolve, reject) => {
    let resolvedPromises = [];

    if (!arrOfPromises || !arrOfPromises.some((e) => e instanceof Promise)) {
      resolve(arrOfPromises);
    }

    arrOfPromises.map((promise) => {
      return promise
        .then((result) => {
          resolvedPromises.unshift(result);
          if (resolvedPromises.length === arrOfPromises.length) {
            resolve(resolvedPromises);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });

export const allSettled = (arrOfPromises) => {
  if (!arrOfPromises || !arrOfPromises.some((e) => e instanceof Promise)) {
    return Promise.resolve(arrOfPromises);
  }

  return Promise.all(
    arrOfPromises.map((promise) =>
      Promise.resolve(promise).then(
        (value) => value,
        (error) => error
      )
    )
  );
};

export const race = (arrOfPromises) => {
  if (!arrOfPromises || !arrOfPromises.some((e) => e instanceof Promise)) {
    return Promise.resolve(arrOfPromises);
  }
  return new Promise((resolve, reject) => {
    arrOfPromises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

export const any = (arrOfPromises) => {
  if (!arrOfPromises || !arrOfPromises.some((e) => e instanceof Promise)) {
    return Promise.resolve(arrOfPromises);
  }
  const errors = [];
  let rejectedPromises = 0;
  return new Promise((resolve, reject) => {
    for (const promise of arrOfPromises) {
      promise.then(resolve).catch((value) => {
        rejectedPromises++;
        errors.push(value);
        if (rejectedPromises === arrOfPromises.length) {
          reject(errors);
        }
      });
    }
  });
};

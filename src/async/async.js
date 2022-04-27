// error 인자가 'error'라면 실패하는 Promise를 리턴
function fetchProduct(error) {
  if (error === 'error') {
    return Promise.reject('network error');
  }
  return Promise.resolve({ item: 'Milk', price: 2000 });
}

module.exports = fetchProduct;

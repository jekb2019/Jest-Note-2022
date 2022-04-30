/**
 * 3 인자는 모두 콜백이다.
 * 첫 콜백이 true 혹은 false인지에 따라 다른 콜백을 부른다.
 * onSuccess, onFail은 Mock을 이용해서 테스트해줄거다.
 */
function check(predicate, onSuccess, onFail) {
  if (predicate()) {
    onSuccess('yes');
  } else {
    onFail('no');
  }
}

module.exports = check;

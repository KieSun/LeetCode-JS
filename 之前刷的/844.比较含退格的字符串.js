var backspaceCompare = function(S, T) {
  let a1 = []
  let a2 = []
  for (let i = 0; i < S.length; i++) {
      if (S[i] !== '#') {
          a1.push(S[i])
      } else if (S[i] === '#' && a1.length !== 0) {
          a1.pop()
      }
  }
  for (let i = 0; i < T.length; i++) {
      if (T[i] !== '#') {
          a2.push(T[i])
      } else if (T[i] === '#' && a2.length !== 0) {
          a2.pop()
      }
  }
  return a1.join('') === a2.join('')
};
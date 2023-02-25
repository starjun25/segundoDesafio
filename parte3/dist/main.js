const passwordMap = new Map([
  ['911', 'Password 1 correcto'],
  ['714', 'Password 2 correcto'],
]);

document.getElementById('verificar-btn').addEventListener('click', function() {
  const password = [1, 2, 3].map(i => document.getElementById(`select${i}`).value).join('');
  const result = passwordMap.get(password) || 'Password incorrecto';
  document.getElementById('resultado').innerHTML = result;
});
function enviarDados() {
  const name = document.getElementById('name').value
  const telefone = document.getElementById('phone').value
  const email = document.getElementById('email').value
  const consentimento = document.getElementById('autorizacao').checked

  const usuario = {
    name,
    telefone,
    email,
    consentimento
  }

  console.log(usuario)

  fetch('https://ebook-paola.herokuapp.com/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(usuario)
  })
}

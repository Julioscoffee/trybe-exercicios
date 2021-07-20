function criandoEstados() {
  let estados = document.querySelector('#estado');
  let opcoes = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
  for (let i = 0; i < opcoes.length; i += 1) {
    let criaOpcao = document.createElement('option');
    estados.appendChild(criaOpcao).innerText = opcoes[i];
    estados.appendChild(criaOpcao).value = opcoes[i];
  }
}
window.onload = criandoEstados();
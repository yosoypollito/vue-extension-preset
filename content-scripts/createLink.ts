console.log('Somethign')

window.addEventListener('selectionchange', (event) => {
  const textSelected = window.getSelection()
  console.log('Selected', textSelected);
})
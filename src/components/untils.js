import html2canvas from 'html2canvas'

export function downloadImage(name) {
  const element = document.getElementById("visuel")

  html2canvas(element, {
    backgroundColor: null,
    removeContainer: true
  }).then((canvas) => {
    const link = document.createElement('a')
    link.download = name
    link.href = canvas.toDataURL('image/png')
    link.click()
  })
}
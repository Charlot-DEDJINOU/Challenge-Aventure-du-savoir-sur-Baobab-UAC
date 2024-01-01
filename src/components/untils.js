import { toPng } from 'html-to-image'

export const downloadImage = async (name) => {
  const visuel = document.getElementById('visuel');
   
   const visuelDownload = visuel ;
   console.log(visuelDownload.style.zoom)
   visuelDownload.style.zoom = 1 ;

   console.log(visuelDownload.style.zoom)

  await toPng(visuelDownload, { quality: 1 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    if (name) link.download = name
    else link.download = 'visuel'
    link.href = dataUrl;
    link.click();
  })
  .catch (function(error)  {
    console.error('Erreur lors du téléchargement de l\'image :', error);
  })
  .finally(function() {
      visuelDownload.style.zoom = 0.6 ;
  })
};


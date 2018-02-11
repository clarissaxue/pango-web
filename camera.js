const img = document.querySelector('img');

imageCapture.takePhoto()
  .then(blob => {
    img.src = URL.createObjectURL(blob);
    img.onload = () => { URL.revokeObjectURL(this.src); }
  })
  .catch(error => console.error('takePhoto() error:', error));

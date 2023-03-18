    // Selecciona el input de tipo 'file'
    const imageUpload = document.getElementById("image-upload");

    // Agrega un evento de escucha para cuando se seleccione un archivo
    imageUpload.addEventListener("change", function (event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = function () {
        document.body.style.backgroundImage = `url('${reader.result}')`;
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        document.body.style.backgroundImage = "url('img/background.jpg')";
      }
    });

// Alert - Selecciona el input de tipo 'file'
const alertElement = document.getElementById("alert");

// Agrega un evento de escucha para cuando se seleccione un archivo
imageUpload.addEventListener("change", function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onloadend = function () {
    document.body.style.backgroundImage = `url('${reader.result}')`;
    showAlert();
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    document.body.style.backgroundImage = "url('img/background.jpg')";
  }
});

function showAlert() {
  alertElement.style.display = "block";
  alertElement.style.opacity = "1";
  setTimeout(() => {
    alertElement.style.opacity = "0";
    setTimeout(() => {
      alertElement.style.display = "none";
    }, 500);
  }, 3000);
}

    
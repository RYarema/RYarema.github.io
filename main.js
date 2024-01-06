document.addEventListener('DOMContentLoaded', function () {
    // Realizar una solicitud con Axios para cargar el archivo JSON
    axios.get('Datos/empresas.json')
      .then(response => {
        // Obtener el contenedor de las cards
        const cardsContainer = document.getElementById('cardsContainer');
  
        // Iterar sobre las empresas y agregarlas como cards
        response.data.forEach(function (empresa) {
          const card = document.createElement('div');
          card.classList.add('card', 'text-center', 'mb-4', 'col-12');
        //   card.style.width = '30%';
        
          const img = document.createElement('img');
          img.src = empresa.imagen;  // Asigna la URL de la imagen desde el objeto de empresa
          img.classList.add('card-img-top');
          img.alt = 'Imagen de ' + empresa.nombre;
  
          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');
  
          const title = document.createElement('h5');
          title.classList.add('card-title');
          title.textContent = empresa.nombre;
  
          const text = document.createElement('p');
          text.classList.add('card-text');
          text.textContent = 'Horario de Atención: ' + empresa.horario_atencion;
  
          const btn = document.createElement('a');
          btn.href = 'detalles.html?empresa=' + encodeURIComponent(empresa.nombre);
          btn.classList.add('btn', 'btn-primary');
          btn.textContent = 'Ver Detalles';
  
          cardBody.appendChild(title);
          cardBody.appendChild(text);
          cardBody.appendChild(btn);
            
          card.appendChild(img);
          card.appendChild(cardBody);
  
          cardsContainer.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });
  });
  
  const botonLike = document.getElementById('btnLike');
        const spanContador = document.getElementById('contador');

        // 2. Inicializamos la variable del contador
        let cantidadLikes = 0;

        // 3. Agregamos el evento de clic al contenedor
        botonLike.addEventListener('click', function() {
            // Incrementamos el valor
            cantidadLikes++;
            
            // Actualizamos el número en la pantalla
            spanContador.textContent = cantidadLikes;
        });
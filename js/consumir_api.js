// var contenido = document.querySelector('#contenido_json')
//         function traer() {
//             fetch('https://randomuser.me/api/')
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data.results['0'])
//                 contenido.innerHTML = `
//                 <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
//                 <p>Nombre: ${data.results['0'].name.last}</p>
//                 `
//             })
//         } 



//se crea un query Selector que funciona como un obtener el elemento por id
        var contenido_api = document.querySelector('#contenido')
        function traerComic() { //se crea la funcion traer comic
            fetch('https://xkcd.com/614/info.0.json')//que me va obtener el json de la ur
            .then(res => res.json()) //despues creamos un then como respuesta y a el objeto res le ejecutamos la funcion json
            //para identificar que se quiere convertir a json
            .then(data => {
                console.log(data.month)
                contenido.innerHTML = `
                <p>Month: "${data.mont}"</p"> 
                <p>Año ${data.year}</p>
                `
            })
        } 
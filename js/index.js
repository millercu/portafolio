$(document).ready(function ( ) {
    function api(){
        //Traer contendio API 
        apikey = '2f0f952f14bd98bd8df0d1f785292da5';
        url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;
        caja = $('.news')
        caja2 = $('.news1')
        axios({
            method: 'get',
            url: url
        }).then(res => {
            if(res){
              $('#msj_nws').hide()
            }
            let noticias = res.data.articles
            noticias.map((elem, indi) => {
                // Crear elementos para cada noticia
            let divNoticia = $('<div class="noticia"></div>');
            let titulo = $('<h4 class="titulo"></h4>').text(elem.title);
            let imagen = $('<img class="imagen">').attr('src', elem.image);
            let descripcion = $('<p class="descripcion"></p>').text(elem.description);
            let boton = $('<button class="btn_news">Leer más</button>').click(function() {
                window.open(elem.url, '_blank')
            })

            // Agregar elementos al contenedor de la noticia
            divNoticia.append(titulo, imagen, descripcion, boton);
            caja.append(divNoticia);

            })

        }).catch(function(error){
            alert('Lo siento, hubo un error ' + error)
        })
    }
    
    api()


    // Menu hamburguesa

    $(window).resize(function() {
        tamano = $(window).width();
        if(tamano <= 430){
            $('.menu').hide()
            $('#mnu').show()
        }else{
            $('.menu').show()
                      .css('display', 'flex')
            $('#mnu').hide()

        }
      });

    $('#mnu').click(function(){
        $('.menu').slideToggle( "fast" )
                        .css('display', 'block') 

        $('.navbar').show()      
    })


    // //Ejemplo de promesas

    // datos = [
    //     {
    //         name: 'Miller',
    //     edad: 15
    //     },
    //     {
    //         name: 'Alberta',
    //     edad: 19
    //     },
    //     {name: 'clara',
    //     edad: 15
    // }

    // ]

    // function getDatos (){
    //     return new Promise((resolve, reject) => {
    //         if(datos.legth == 0){
    //             reject(new Error('No hay datos para mostrar'))
    //         }

    //         resolve(datos)
    //     })
    // }

    // getDatos()
    // .then((r)=> console.log(r))
    // .catch((err) => console.log(err))

})
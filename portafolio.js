var trabajos = [{

figure: "media/alaia.jpg",
alt: "Descripción de la imagen",
title: "ALAIA",
about: "Trabajo realizado con la artesana Claudia Olguín. Con apoyo, logró crear una nueva línea para su tienda Artenhilo, haciendo provecho de su manejo con la técnica del micromacramé e incorporando el uso del textil.",
por: "por: La Toña",
url: "https://www.instagram.com/p/B1luVPgHz_-/"
}, {
figure: "media/boquilla.jpg",
alt: "Descripción de la imagen",
title: "BOQUILLA",
about: "Producto -para el hogar- que se acopla a bolsas con contenidos líquidos, que una vez abiertos no tenían como cerrarse. Con esta boquilla, la bolsa se puede volver a sellar, evitando derrames, permitiendo porcionar.",
por: "por: La Toña",
url: "https://www.instagram.com/p/B1lhTalHj34/"
}, {
figure: "media/canvas.jpg",
alt: "Descripción de la imagen",
title: "CANVAS",
about: "Pieza de indumentaria con tecnología textil activada con la presión de un impacto. Permite a deportistas grabar sus golpes o caídas como victorias, la prenda evita que se generen lesiones y, queda una mancha estilo tie-dye.",
por: "por: La Toña y La Monse",
url: "https://www.instagram.com/p/B1lpzNRnwj5/"
}, {
figure: "media/indomable.jpg",
alt: "Descripción de la imagen",
title: "INDOMABLE",
about: "Pocillo antiderrame que, mediante tres partes y un eje de rotación, genera un sistema de 360°. Con esto, la comida siempre se mantiene paralela al piso, permitiendo al usuario comer tranquilamente en su cama.",
por: "por: La Toña y La Monse",
url: "https://www.instagram.com/p/B1lttUWHcIm/"
}, {
figure: "media/slid.jpg",
alt: "Descripción de la imagen",
title: "SLID",
about: "Tabla adaptada para personas que padezcan algún tipo de discapacidad en su tronco inferior. Pensada para uso en Downhill y surf en seco. Testeado con el campeón paraolímpico de surf Elías Valencia.",
por: "por: La Toña y La Monse",
url: "https://www.instagram.com/p/B1lie1KnsDv/"
}, {
figure: "media/myp.jpg",
alt: "Descripción de la imagen",
title: "BOTE",
about: "Creación de un bote de juguete funcional hecho con piezas de PAI, con un sistema eléctrico interno (resistente al agua), inspirado estéticamente en la gráfica de la marca Milwaukee. Elaborado en LMYP",
por: "por: La Toña y La Monse",
url: "https://www.instagram.com/perras_lok.s/?hl=es-la"
}, {
figure: "media/bioef.jpg",
alt: "Descripción de la imagen",
title: "BIOEF",
about: "Limpiador desinfectante bioefervescente en pastillas, amigable con el medioambiente, que apunta a eliminar prácticas dañinas actuales, de contaminar el agua, tanto su uso como el mar y el uso del plástico",
por: "por: La Monse",
url: "https://www.instagram.com/p/B1mHVyBnWPq/"
}, {
figure: "media/cesfam.jpg",
alt: "Descripción de la imagen",
title: "CESFAM",
about: "Rediseño de los métodos de información y atención al cliente en el CESFAM de la Red Áncora UC. Nace a partir del entendimiento del curso de Diseño de servicios para mejorar la calidad de atención de centros.",
por: "por: La Monse",
url: "https://www.instagram.com/perras_lok.s/?hl=es-la"
}, {
figure: "media/micelio.jpg",
alt: "Descripción de la imagen",
title: "MICELIO",
por: "por: La Monse",
about: "Plataforma web que permite crear un espacio de distribución conocimiento e innovación entre pequeños agricultores. En el sitio, se puede postear el propio contenido o buscar nuevas técnicas para mantener cosechas.",
url: "https://www.instagram.com/p/B1kTTYFHAAV/"
}, {
figure: "media/contrasentido2.jpg",
alt: "Descripción de la imagen",
title: "CONTRASENTIDO",
about: "Ilustraciones de juego que pretendía, mediante la subjetividad, incrementar la capacidad de análisis y crítica de las personas. Busca generar temas de debate, nuevas ideas y fortalecer el pensamiento crítico.",
por: "por: La Monse",
url: "https://www.instagram.com/perras_lok.s/?hl=es-la"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].por + '</p>';
    var cuatro = '<p>' + trabajos[i].about + '</p>';
    var cinco = '<p><a href="' + trabajos[i].url + '">¡Cáchate!</a></p>'
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + cinco + '</div>')
});

## Lab 2 

### Ejercicio 1

Modificar la expresión que muestra el precio para que utilice el filtro *currency*. Utilizar coma (,) como separador de decimales.

### Ejercicio 2

- Actualizar la variable *gems* expuesta por *StoreController* para que incluya más información
```javascript
var gems = [{
        name: 'Azurite',
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        shine: 8,
        price: 110.50,
        rarity: 7,
        color: '#CCC',
        faces: 14,
        images: [
          "images/gem-02.gif",
          "images/gem-05.gif",
          "images/gem-09.gif"
        ],
        reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }]
    }, {
        name: 'Bloodstone',
        description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
        shine: 9,
        price: 22.90,
        rarity: 6,
        color: '#EEE',
        faces: 12,
        images: [
          "images/gem-01.gif",
          "images/gem-03.gif",
          "images/gem-04.gif"
        ],
        reviews: [{
            stars: 3,
            body: "I think this gem was just OK, could honestly use more shine, IMO.",
            author: "JimmyDean@example.org",
            createdOn: 1397490980837
        }, {
            stars: 4,
            body: "Any gem with 12 faces is for me!",
            author: "gemsRock@example.org",
            createdOn: 1397490980837
        }]
    }, {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        images: [
          "images/gem-06.gif",
          "images/gem-07.gif",
          "images/gem-08.gif"
        ],
        reviews: [{
            stars: 1,
            body: "This gem is WAY too expensive for its rarity value.",
            author: "turtleguyy@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "BBW: High Shine != High Quality.",
            author: "LouisW407@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "Don't waste your rubles!",
            author: "nat@example.org",
            createdOn: 1397490980837
        }]
    }];
```

- Incluir las imágenes de las gemas en nuestro proyecto. Pueden descargalas de [AQUÍ](https://bitbucket.org/elgalia/curso-angular/src/master/images/)

- Mostrar la primer imágen del array de imágenes usando la directiva que corresponda.

### Ejercicio 3

Mostrar también, en tamaño miniatura, todas las imágenes de cada producto (incluída la primera también). Considerar que las imágenes de c/producto podrían variar, en lugar de estar hardcoded.

### Ejercicio 4

Ocultar la galería de imágenes en caso que un producto no posea imágenes. Comentar las imágenes de alguno de los productos para verificar que funcione.

### Ejercicio 5

Crear un controlador *TabController*. El mismo deberá:

  - tener una propiedad *tab* inicializa en 1
  
  - exponer un método *setTab* que permita modificar la propiedad *tab* en base a un valor recibido como por parámetro
  
  - exponer un método *isSet* que verifique si el valor recibido por parámetro se corresponde con el valor actual de la propiedad *tab*

### Ejercicio 6

- Asociar *TabController* a un elemento en el cual se van a mostrar los distintos tabs.

- Incluir en dicho elemento una lista de links con las etiquetas *Description*, *Specs*, *Reviews*.

- Cada uno de esos links deberá aplicar la clase *active* cuando *isSet* retorne true. Llamar a la función con los parámetros 1, 2 y 3 respectivamente, para diferenciar los links.

- Además, cada link debería llamar a la función *setTab* cuando se haga click en él, con el mismo parámetro numérico usado al llamar *isSet*

- Debajo de la lista de links, incluir 3 elementos que se encargarán de mostrar el contenido de cada uno de los tabs. Utilizar la función *isSet* en los mismos para sólo mostrar el elemento correspondiente al tab actual.

- En el primero de los "contenedores" mostrar la descripción, en el segundo las specs y el tercero dejarlo pendiente para mostrar las reviews de los usuarios.

### Ejercicio 7

Crear un controlador llamado *GalleryController*. El mismo deberá tener una propiedad llamada *current* e inicializada en 0 y una función *setCurrent* que permita modificar el valor de *current* con un valor recibido por parámetro.

### Ejercicio 8

- Aplicar *GalleryController* sobre el elemento que represente la galería de imágenes.

- Reemplazar la expresión que mostraba la primera imágen en tamaño real para que utilice la propiedad *current*  de nuestro nuevo controlador.

- Modificar cada imágen en miniatura para que al hacer click se llame a la función *setCurrent* con el índice correspondiente. Verificar que la imágen en tamaño real pase a ser la misma que en la cuál se hizo click.
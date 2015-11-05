## Lab 1

### Ejercicio 1

- Crear el módulo *gemStore* para empezar a desarrollar nuestra aplicación e incluirlo en nuestro index.

- Agregar una expresión para mostrar un mensaje de tipo *Hola mundo!* para constatar que AngularJS esté incluído correctamente.

### Ejercicio 2

- Extender el módulo creando el controlador *StoreController*. El mismo debe exponer en una propiedad el siguiente objeto

```javascript
var gem = { name: 'Azurite', price: 2.95 };
```

- Incluir el controlador en nuestra página utilizando la sintaxis *controllerAs*. Utilizar expresiones para mosrar ambas propiedades de la gema.

### Ejercicio 3

- Extender el objecto gem para que soporte las nuevas propiedades *canPurchase* y *soldOut*

```javascript
var gem = { name: 'Azurite', price: 2.95, canPurchase: false, soldOut: false };
```

- Inyectar como parámetro el servicio [$log](https://docs.angularjs.org/api/ng/service/$log) en nuestro controlador y utilizarlo en una función *purchase* que debe ser expuesta para ser accesible desde la vista. La llamada a la función debe escribir por consola un warning alertando que aún no está implementada.

- Agregar un botón *"Add to cart"* que llame a la nueva función. El botón sólo debe visualizarse cuando esté activo el flag *canPurchase*. Constatar que al hacer click en el botón aparezcan los mensajes por consola.

- Utilizar una directiva para ocultar el todo el producto (nombre, precio y botón) cuando el flag *soldOut* esté activo.

### Ejercicio 4

- Reemplazar la propiedad de *StoreController* que exponía la variable *gem* por una que exponga el siguiente array

```javascript
    var gems = [
      { name: 'Azurite', price: 2.95 },
      { name: 'Bloodstone', price: 5.95 },
      { name: 'Zircon', price: 3.95 },
    ];
```

- Modificar la vista usando [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat) para mostrar todos los productos.

- Modificar la función purchase para que reciba el producto como parámetro y agregué al log de warning el nombre del mismo.
Lab 3
Ejercicio 1
En el tab reviews, mostrar las reviews de c/producto. Por el momento mostrar stars, author y body.
Ejercicio 2
Dentro del tab reviews, crear un formulario que permita al usuario ingresar las siguientes propiedades:
stars: un select que permita seleccionar de 1 a 5 estrellas

body: un textarea que permita ingresar un comentario

author: un email

Ejercicio 3
Agregar dentro del formulario una live-preview que permita al usuario controlar cómo se visualizará su comentario una vez procesado.
Ejercicio 4
Crear un ReviewController que:
tengo una propiedad review, bindeada con la live-review que está modificando el usuario

exponga una función addReview que

permita agregar la review actual a un producto (que reciba como parámetro)

haga "reset" de la propiedad review una vez que la misma que agrega al producto

Ejercicio 5
Implementar el ReviewController en el formulario.
La live-preview debe bindearse a la instancia del form (usar controllerAs syntax)

El submit del formulario debe llamar a la función addReview

Ejercicio 6
Agregar stars y author como campos requeridos. Evitar que el formulario se procese cuando no es correcto.
Ejercicio 7
Agregar clases o estilos de error cuando fallan las validaciones de los campos. Dichos estilos deben limpiarse luego de que el formulario haya sido procesado correctamente.
Ejercicio 8
En la función addReview, antes de insertar la review en el producto agregarle una propiedad createdOn con el valor Date.now(). Mostrar la propiedad createdOn en todas las reviews del producto. Utilizar el filtro date.
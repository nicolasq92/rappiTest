# RappiTest

## Objetivo
Crear un sitio web, con cualquier framework para frontend, responsive, que cargue los datos de
un archivo json, configurable para modificar la ruta de donde se obtiene el json (local o url).
Esos datos seran mostrados en el sitio, el cual se les pueden aplicar una lista de filtros.
Ademas, se puede buscar un producto individual. Posteriormente, se debe crear un carrito de compras,
donde se puedan agregar y eliminar productos.

```
Filtros:
1. Por Categorias
2. Por Productos disponibles
3. Por Productos agotados
4. Por Productos mas vendidos
5. Por Productos de precio mayor a 30.000
6. Por Productos de precio menor a 10.000
7. Ordenar por nombre
8. Ordenar por mayor precio
9. Ordenar por menor precio
```


## Inicio

El proyecto fue desarrollador con el framework MVC de javascript para el desarrollo web frontend
AngularJS y el framework CSS MaterializeCSS.

La persistencia de datos para el carrito de compras, fue manejado con localStorage.
(La libreria utilizada para el uso de localStorage se encuentra definida en la seccion "Construido Con")

La estructura del proyecto, estructura de controladores, servicios, filtros, usados fueron tomadas de las
buenas practicas de AngularJS de Johnpapa - angular-styleguide https://github.com/johnpapa/angular-styleguide/tree/master/a1.

Para las peticiones al endpoint , se usaron llamadas ajax utilizando $http, y gestionando el resultado con promesas utilizando $q.

## Clonar repositorio
git clone https://gitlab.com/nicolasq92/rappiTest.git


## Ejecucion
Puedes acceder a este repositorio, realizar un pull request, y colgarlo en tu servidor (ejm. apache).

o

Acceder a la siguiente direccion:

```
rappitest.anubistech.com.ve/
Personal Domain
```

## Dessarrollado con

* [AngularJS](https://github.com/angular/angular.js) - El Framework para frontend usado
* [MaterializeCSS](https://github.com/Dogfalo/materialize) - Framework CSS usado
* [angular-materialize](https://github.com/krescruz/angular-materialize) - JS para efectos y animaciones de Materialize
* [ngStorage](https://github.com/gsklee/ngStorage) - usado para mantener la persistencia de datos en el carrito de compras.



## Authors

* **Jose Nicolas Quijada Palomo**

## License

GNU GENERAL PUBLIC LICENSE Version 3.
Solo para fines de evaluacion por parte del equipo de Rappi.

## Fe de Errata.

Uno de los elementos del Archivo .json fue entregado de la siguiente manera:

```
{
  "id": 8,
  "name": "elit",
  "price": "2.000", <---- original : 2000
  "available": true,
  "best_seller": false,
  "categories": [
    1,
    3
  ],
  "img": "http://lorempixel.com/200/100/food/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
},
```
El valor fue modificado, colocado con el mismo formato de los otros numeros. El uso del json original,
no afecta el correcto funcionamiento del sistema.

## Capturas del sitio

### Principal

![alt tag]https://dl.dropboxusercontent.com/u/27081989/rappiFrontEndColombia/1.png
![alt tag]https://dl.dropboxusercontent.com/u/27081989/rappiFrontEndColombia/2.png
![alt tag]https://dl.dropboxusercontent.com/u/27081989/rappiFrontEndColombia/3.png

### Principal Movil
![alt tag]https://dl.dropboxusercontent.com/u/27081989/rappiFrontEndColombia/6.png
![alt tag]https://dl.dropboxusercontent.com/u/27081989/rappiFrontEndColombia/7.png
![alt tag]https://dl.dropboxusercontent.com/u/27081989/rappiFrontEndColombia/8.png

### Carrito de Compras

![alt tag]https://dl.dropboxusercontent.com/u/27081989/rappiFrontEndColombia/4.png
![alt tag]https://dl.dropboxusercontent.com/u/27081989/rappiFrontEndColombia/5.png

### Carrito de Compras Movil
![alt tag]https://dl.dropboxusercontent.com/u/27081989/rappiFrontEndColombia/9.png

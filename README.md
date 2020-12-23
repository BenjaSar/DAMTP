# DAM 

Autor: FS. - 2020

El material mostrado aqui corresponde a los ejercicios/actividades desarrollados en la materia Desarrollo de Aplicaciones Multiplataforma (DAM).


# Tabla de contenidos
---
* Introducción
* Single Page Application
* Correr la aplicación
* Créditos
* Contribuir

# **Introduccion**
---
El proyecto presentado para esta materia,  el cual consiste en una aplicación funcional a múltiples platormas (desktop, mobile) se denomina "Garden Devices", fue desarrollado empleando los conocimientos adquiridos en la materia Desarrollo de Aplicaciones Multiplataforma (DAM) :blush:. Consiste de un frontend y un backend. Para el frontend se empleó el framework Ionic. Del lado de backend se empleó la herramienta Nodejs. Adicionalmente, las modificaciones de estado de los dispositivos serán impactados en una base de datos del tipo relacional.

Respecto al desarrollo, en la página se pueden observar el listado de dispositivos, obtener el ùltimo valor de medición por sensor, consultar el log de riegos por sensor y abrir la electrovalvula correspondiente.

# Multiplataforma 
---
Empleando frameworks como Ionic y herramientas como Nodejs, se pueden crear aplicaciones móviles y de escritorio, desarrollando una sola base de código y compartiendolo en las diferentes plataformas existentes. 

# Correr la aplicación
---
El trabajo aquí desarrollado está estructurado de la siguiente manera:
* Por una lado se cuenta con un contenedor docker, en el cual se encuentran la base de datos y el backend. 
* Por otro lado, se encuentra la app desarrollada en Ionic.

Posterior al pull del repositorio,  dirigirse al siguiente path para poder ejecutar la aplicación:

```sh
[path:] /DAM/Ionic/TPv2
```
En el path indicado anteriormente se encontrará el archivo docker-compose.yml. Para  ejecutar el contenedor correr el siguiente comando en la terminal que se esté empleando:
```sh
docker-compose up
```
Para confirmar que la API ha sido levantada de manera correcta, verificar en la terminal la siguiente leyenda:
```javascript
node-backend    | API levantada en el puerto 8000
```
Posteriormente abrir un buscador:
```
[url](http://localhost:8085)
```
Allí será dirigido al administrador de la base de datos (phpMyAdmin). Posteriormente, ingresar las credenciales indicadas en el archivo docker-compose.yml.

Completado el paso anterior, dirigirse al siguiente path para poder ver la aplicación en Ionic:

```
[path:] DAM/Ionic/TPv/Home  
```
Dentro del proyecto de ionic correr el siguiente comando, el cual permitirá instalar los packages indicados en el archivo package.json

```sh
npm install 
```
Para poder correr la apliación en Ionic, ejecutar el siguiente comando:
```sh
Ionic serve
```
Una vez ejecutado el comando, se abrirá una página el buscador en el siguiente puerto:
```
[url](http://localhost:8100)
```

## Creditos
---
La definición de de Multiplataforma fue tomada de la siguiente página web: https://platzi.com/multiplataforma/

## Contribuir
---
Para contribuir realizar un pull request con las sugerencias.

## Licencia
---
GPL

```To read all project documentation, please go to its wiki in [this link](https://github.com/ce-iot/daw-project-template/wiki).
```





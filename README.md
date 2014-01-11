![Mejorandola](http://miguelnieva.com/img/mejorandola-grande.png)

Antes de iniciar la app, debes crearte una aplicación de desarrollador en github, para ello debes ir a https://github.com/settings/profile y allí en la parte inferior izquierda, encuentras la opción de "applications"

![Applications](https://s3-us-west-2.amazonaws.com/droplr.storage/files/acc_189884/ngXU?AWSAccessKeyId=AKIAJSVQN3Z4K7MT5U2A&Expires=1389469794&Signature=VZEZbdi3DSyyqS7Bt8CyDUk3%2B3g%3D&response-content-disposition=inline%3B%20filename%3DScreen%20Shot%202014-01-11%20at%2013.49.47.png%3B)

Luego vas a "Developer applications" y vas a register new application

![New Applications](https://s3-us-west-2.amazonaws.com/droplr.storage/files/acc_189884/E7PD?AWSAccessKeyId=AKIAJSVQN3Z4K7MT5U2A&Expires=1389469994&Signature=nDwgylprA7op6Z8rb5oom7p3MxA%3D&response-content-disposition=inline%3B%20filename%3DScreen%20Shot%202014-01-11%20at%2013.53.07.png%3B)

Por último completas los campos que te pide github de la siguiente manera:

![Register Applications](https://s3-us-west-2.amazonaws.com/droplr.storage/files/acc_189884/uboo?AWSAccessKeyId=AKIAJSVQN3Z4K7MT5U2A&Expires=1389470381&Signature=CriepBm271XPYNEcnWpmMBjXQJU%3D&response-content-disposition=inline%3B%20filename%3DScreen%20Shot%202014-01-11%20at%2013.59.33.png%3B)

Recuerda que puedes cambiar el puerto y el nombre a tu libre antojo :), luego de creada tu app aparecerá en el área de tus  Developer Applications, ingresas a tu app y copias el clientId y el clientSecret que te generó Github.

![App created](https://s3-us-west-2.amazonaws.com/droplr.storage/files/acc_189884/c99j?AWSAccessKeyId=AKIAJSVQN3Z4K7MT5U2A&Expires=1389470704&Signature=N5jCNkHox2uqc4sRFGO7%2FwFrMII%3D&response-content-disposition=inline%3B%20filename%3DScreen%20Shot%202014-01-11%20at%2014.04.54.png%3B)

Para iniciar debes abrir una terminal, ir al path del proyecto y ejecutar:
  
  * npm install (instala las depencias de Node y de Bower)
  * grunt
  * clientId="" clientSecret="" PORT="" npm start (Llama a la tarea grunt dev, que corre el servidor y la tarea de jshint, compass and mocha automaticamente cuando realizas un cambio, recuerda entre las comillas de cada variable poner los valores que te generó github para tu app y el puerto que le configuraste a la misma)

## Proyecto Blog - Líderes Web
Visión general:
Inspirar a crear más equipos de desarrollo dentro de Comunidad, indicando los principales problemas de un proyecto y dando un ejemplo concreto.

Objetivo específico:
Desarrollar un web app (blog) que nos permita escribir y crear artículos.
[Avances del Proyecto](https://github.com/mejorandolaclase/lideresweb/issues/milestones)

## Log Importante:
10 Diciembre: Actualicen todos sus repositorios locales. Hubo modificaciones en app/app.js, modificando todo la historia del repositorio.

# Currency Exchange

Link Portal en Aws: http://currency-exchange-estevan.s3-website-us-east-1.amazonaws.com/


[Documento de Arquitectura](https://drive.google.com/open?id=1EMlpqwk1oYNFBPMGXKFsyN9gcwbn5E7B) || 
[Video demo del proyecto](https://drive.google.com/open?id=1we_HKQN_wNps0z29EzVKHLq2YAdBF86P)

Este artículo tiene como fin presentar la arquitectura, implementación y pruebas pertenecientes a un   portal que expone servicios para el manejo rápido de las transacciones que efectúa la mesa de dinero, este portal permite realizar conversión de monedas con las tasas actuales y además muestra una lista de las tasas de cambio de todas las monedas con respecto al dólar.

## Introducción

 El portal web permite consultar varios servicios, el primer conjunto de servicios que se incluye en la plataforma es el de tasas de cambio. Se diseñó e implementó una aplicación para la consulta y búsqueda de tasas de cambio y para la conversión de monedas. La aplicación se construyó con microservicios usando la infraestructura de AWS lambda, AWS API Gateway y S3. El aplicativo tiene una interfaz de usuario simple, el servidor es un servidor de publicación de tasas de cambio y el canal de comunicación es HTTP.

En esta ocasión se consume un API externa, la cual provee a través de peticiones por medio de URL distintos servicios, de esta API obtenemos las tasas exactas y actualizadas al día de cada una de las monedas. En este caso el portal consume el api de Alpha Vantage (https://www.alphavantage.co).
De la API de Alpha Vantage se obtienen los datos en formato tipo JSON los cuales son procesados y analizados para mostrar al cliente de la forma más agradable.

Desarrollado por:
>Brayam Estevan Vargas Pinzón

>Arquitecturas Empresariales

>Escuela Colombiana de Ingeniería Julio Garavito


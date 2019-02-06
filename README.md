# Cypher-Bootcamp

Primer proyecto Laboratoria. Este es el primer proyecto para el bootcamp de laboratoria. 

## ¿A quién va dirigido este proyecto?

*Decidí dirigirlo a personas que gustan de hacer regalos diferentes a familiares, amigos, pareja, etc.

## ¿De qué trata el proyecto?

*Crear mensajes encriptados para que los regales a una persona especial y esta llegue a nosotros y descifre
su mensaje

*Queremos dar una nueva forma de presentar un mensaje y ofrecerlo a una persona especial, no una típica
carta, flores, dulces o chocolates, hoy en día la tecnología va más allá y queremos dar algo diferente a 
los usuarios que quieren ofrecer algo diferente.

## Descripción del proyecto:

*Tenemos una pantalla de bienvenida explicando al usuario lo que puede hacer en la página y ponemos un
botón para que el usuario comience a crear o descifrar mensajes.

*La siguiente pantalla tiene una caja para introducir el mensaje. El usuario tiene 2 botones uno para cifrar o descifrar el mensaje que ha escrito.

*Al terminar el usuario, se le da la opción de si quiere cifrar o descifrar un mensaje nuevo. Si el usuario quiere crear un nuevo mensaje se limpia todo el texto de la caja.
![Imágenes para prototipado](https://github.com/Tita-Navarro/gdl-2019-01-bc-core-cipher/blob/master/images/prototipado2.jpeg)

*Si el usuario dice que no, se presenta la ventana de agradecimiento y se le invita a que vuelva pronto e invite a más personas a cifrar y descifrar mensajes.

## ¿Qué vamos a utilizar?

*Cifrar el string según el algoritmo de Cifrado César. Formula: (x + n) % 26) con el parámetro de desplazamiento de 33 espacios hacia la derecha.

*Vanilla js

*Cifrar y descifrar mayúsculas como minúsculas.

*Cifra/descifra otros caracteres (espacios, puntuación, ñ, á, ...)

*Debe tener dos funciones: cipher y decipher.

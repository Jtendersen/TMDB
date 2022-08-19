# 26 - TMDB

![logop5](https://p5-hall-of-fame.s3.amazonaws.com/p5logo.png)

### Objetivos

En este proyecto, crearás una aplicación que muestre películas y programas de televisión. Para eso, consumirás la información de la API de [_The Movie Database_ (TMDB)](https://www.themoviedb.org/).

Para armar el _front-end_, aplicarás lo aprendido hasta ahora.

Para el _back-end_, deberás configurar una base de datos y construir las funcionalidades detalladas a continuación.

⚠️ **Importante**: La información de los usuarios deberá **persistir** en el _back-end_.

### ¿Qué Debe Tener Tu Aplicación?

👩‍🏫👨‍🏫 Para armar la aplicación trabajaremos con el [**método MoSCoW**](https://www.itdo.com/blog/moscow-que-es-y-como-priorizar-en-el-desarrollo-de-tu-aplicacion/), una técnica que sirve para determinar prioridades de forma estratégica y ordenada.

En este sentido, deberás enfocarte primero en las funcionalidades _Must Have_ (de prioridad alta) antes de avanzar a funcionalidades _Should Have_ (prioridad media).

### Requisitos

👩‍🏫👨‍🏫 Para este proyecto, enfocate en completar las tareas de **prioridad alta** y **media**. Considerá las de **prioridad normal** y **baja** como un desafío para desarrollar tu portfolio.

📕 **Prioridad Alta** (_Must Have_)

- Buscar y listar películas.
- Ver los detalles de una película o programa de televisión.
- Crear usuarios.
- _Loguear_ y _desloguear_ usuarios.

📘 **Prioridad Media** (_Should Have_)

- Agregar una película o programa a una lista de favoritos.
- Ver una lista de favoritos.
- Remover una película o programa de una lista de favoritos.
- Diferenciar las rutas de _front-end_ para películas y programas de televisión.

📗 **Prioridad Normal** (_Could Have_)

- Buscar usuarios.
- Ver el perfil de un usuario específico (con sus películas o programas favoritos).
- Mantener sesión abierta ante un cierre del _browser_ o `refresh`.

📓 **Prioridad Baja** (_Won't Have_)

- _Full responsive_.
- _Loguear_ usuarios a través de su cuenta en Google.

### Pledu

Hacé [_click_ acá](https://pledu.plataforma5.la/bootcamp/omdb/solo%20week-581874b7) para acceder al módulo correspondiente en Pledu.

API KEY= ef0f5ca3ae927c0b99427766940e8457
SAMPLE REQUEST "https://api.themoviedb.org/3/movie/550?api_key=ef0f5ca3ae927c0b99427766940e8457"
API_IMG = "https://image.tmdb.org/t/p/w500/"
API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=ef0f5ca3ae927c0b99427766940e8457&query"

------------**KNOWN BUGS**--------------------------------

-Add TV Shows to Favorites. Conditional routes on axios.get in CardMovieFav **SOLVED 19-08-2022**
-Show TV Shows on Favorites **SOLVED 19-08-2022**
-Validate with bootstrap in register form with same IDs **SOLVED 19-08-2022**
-User's search visualization. Show headers only after search. **SOLVED 19-08-2022**
-Movies-TV favorites show trending header even after a search
-Auto refresh on deleting favorites.
-Favorite icon must be displayed ok if movie/tvShow is a favorite
-Search is functional for movies only and displays over movies/tvShows. Does not work on favorites tag.
-Search for movies or tvShows depending on which tab you are positioned.
-Consider extreme cases. No movies? No images? No user? **SOLVED IMG IF NOT FOUND 19-08-2022**
-Titles in TV Shows. Shown as "name" in TMDB. **SOLVED 19-08-2022**
-On register put first letters in uppercase.
-Modify DB to accept register with google. Could be done replacing "userneme" with "email".
-Navigate to "home" after register **SOLVED 19-08-20022**
-Home must show trending movies on loading **SOLVED 19-08-2022**
-Favorites with google login doesn't work. Must be solved by registering with google.
-Show message after creating/deleting favorites. Just a console log is shown
-Show message after registering user.
-Log in after registering a user.
-Google log in doesn't persist.
-Upper and lower text in search bar should change according to search query
-Display error message if no movie/ no user is found
-Improve Responsive behaviour on user's menu

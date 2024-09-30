Entrega final:
- Index: página de login. Si el logueado es admin, irá a la página Admin, si no, a Profile.
    - Credenciales Admin:
        Usuario: Admin
        Pass: admin1234
    - Hay un usuario hardcodeado (name: User / pass: user1234) pero la página también permite crear nuevos usuarios.
- Admin.html: permite al administrador crear nuevas marcas y cantidad de piezas de puzzles. Con los datos existentes y/o los nuevos, se pueden crear nuevos puzzles que son agregados a una database (localstorage en nuestro caso)
- Profile.html: si el que se loguea NO es admin, la página Profile se muestra. No hace mucho por el momento. Sólo lista la colección de puzzles de ese usuario y muestra la temperatura actual, que se obtiene con una API.
- API: weather. Traigo la temperatura actual. Según la temperatura, el mensaje cambia.
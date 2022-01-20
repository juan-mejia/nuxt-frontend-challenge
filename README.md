# Talently Testimonials

Talently Testimonials es una plataforma para poder ver, crear, eliminar y actualizar los testimonios de personas que han sido parte del proyecto Talently.

**Nota**
La API que proporciona los datos de testimonios no cuenta con un endpoint para editar el testimonio, sin embargo, simule esta operación utilizando los endopoint de añadir y eliminar con el fin de brindar una funcionalidad extra y un flujo CRUD completo.

## Tecnologías

Para este proyecto se utilizó lo siguiente:

- Nuxt.js
- Tailwind CSS
- Axios

## Instalación
```
npm install
```

### Modo desarrollo
```
npm run dev
```

### Compilar para producción
```
npm run build
```

### Iniciar modo SSR

```
npm run start
```

## Estructura de las carpetas

- assets: En esta carpeta se encuentran los archivos estaticos procesador por Webpack.
- components: Aquí se encuentran los compoenentes reutilizables de la aplicación.
- layouts: La estructura principal de las páginas se encuentran aquí.
- pages: En esta carpeta estñan las páginas principales. Los archivos y carpetas son utilizados por Nuxt para crear automáticamente las rutas y la configuración del Router.
- plugins: En esta carpeta están los plugins y funcionalidades extras que se inyectan dentro de la aplicación.
- static: En esta carpeta se encuentran los archivos estaticos sin procesar.
- store: Aquí se encuentra el gestor de estados de la aplicación. 

const base = import.meta.env.BASE_URL;

export const proyectos = [
  {
    id: "modal1",
    titulo: ".MovieApp",
    tipo: "App web",
    framework: "MVC",
    descripcion:
      "Catálogo de películas con sistema de reseñas, favoritos, calificaciones y más.",
    iconos: [
      `${base}Iconos/csharp.svg`,
      `${base}Iconos/dotnet2.svg`,
      `${base}Iconos/bootstrap.svg`,
      `${base}Iconos/sql-server.svg`,
    ],
    boton: {
      texto: "Ver Repositorio",
      link: "https://github.com/francowagenhofer/movieapp-mvc-dotnet",
    },
    modalTexto: `
      <p><strong>App web ASP.NET MVC para gestión completa de películas.</strong> 
      Permite administrar un catálogo de películas con CRUD completo, sistema de reviews con calificaciones, 
      gestión de favoritos y autenticación con roles diferenciados.</p>

      <p><strong>Objetivo del proyecto:</strong> Desarrollar una aplicación integral que combine gestión de datos, 
      autenticación segura con ASP.NET Identity, arquitectura MVC y una interfaz moderna y responsive.</p>
    ` 
    //  `
    //   <p><strong>App web ASP.NET MVC para gestión completa de películas.</strong> 
    //   Permite administrar un catálogo de películas con CRUD completo, sistema de reviews con calificaciones de 1 a 5 estrellas, 
    //   gestión de favoritos personalizada por usuario y autenticación con roles diferenciados (administrador/usuario).</p>

    //   <p><strong>Características principales:</strong> Interfaz moderna y responsive con Bootstrap, filtros dinámicos por género y año, 
    //   búsqueda avanzada, panel de administración exclusivo para gestión de películas, sistema de reseñas con comentarios y puntuaciones, 
    //   y validaciones tanto del lado del cliente como del servidor.</p>

    //   <p><strong>Objetivo del proyecto:</strong> Desarrollar una aplicación integral que combine gestión de datos con Entity Framework Core, 
    //   autenticación segura con ASP.NET Identity, arquitectura MVC con separación de responsabilidades, y una interfaz moderna y responsive 
    //   que ofrezca una experiencia de usuario completa y fluida.</p>
    // `
    ,
    techList: [
      "<strong>Frontend:</strong> Razor Views, HTML, CSS, Bootstrap",
      "<strong>Backend:</strong> C#, ASP.NET MVC (.NET 9)",
      "<strong>ORM:</strong> Entity Framework Core",
      "<strong>Base de datos:</strong> SQL Server",
      "<strong>Autenticación:</strong> ASP.NET Identity",
      "<strong>IDE:</strong> Visual Studio 2022",
    ],
    methodsList: [
      "<strong>Lógica:</strong> POO y arquitectura MVC",
      "<strong>Gestión:</strong> CRUD con validaciones",
      "<strong>Consultas:</strong> LINQ y T-SQL",
      "<strong>Seguridad:</strong> Sistema de roles (admin/usuario)",
      "<strong>Features:</strong> Reviews, favoritos, filtros dinámicos",
    ],
    repos: [
      // {
      //   label: "Repositorio",
      //   link: "https://github.com/francowagenhofer/movieapp-mvc-dotnet",
      // },
    ],
    imagenes: [
      `${base}Imagenes/MovieApp/home.webp`,
      `${base}Imagenes/MovieApp/movie.webp`,
      `${base}Imagenes/MovieApp/favoritos.webp`,
      `${base}Imagenes/MovieApp/reseñas.webp`,
      `${base}Imagenes/MovieApp/admin.webp`,
    ],
  },
  {
    id: "modal2",
    titulo: "CatálogoWeb",
    tipo: "App web",
    framework: "web forms",
    descripcion:
      "Plataforma web para administrar y filtrar productos con control de acceso.",
    iconos: [
      `${base}Iconos/csharp.svg`,
      `${base}Iconos/dotnet2.svg`,
      `${base}Iconos/bootstrap.svg`,
      `${base}Iconos/sql-server.svg`,
    ],
    boton: {
      texto: "Sitio Web",
      link: "http://webcatalog.somee.com/",
    },
    modalTexto: `
            <p><strong>App web en C# con ASP.NET Web Forms para gestión completa de artículos.</strong> 
            Permite administrar un catálogo de productos con CRUD completo, sistema de filtros por categoría y marca, 
            búsqueda dinámica, y gestión de usuarios con autenticación y roles diferenciados.</p>

            <p><strong>Características principales:</strong> Visualización en grilla y cards, gestión de imágenes, 
            edición inline de artículos, panel de administración con permisos específicos y validaciones tanto del lado 
            del cliente como del servidor.</p>

            <p><strong>Objetivo del proyecto:</strong> Simular escenarios reales de inventario aplicando arquitectura en capas, 
            patrones de diseño, seguridad mediante roles y buenas prácticas de usabilidad. Proyecto deployado y accesible online.</p>
        `,
    techList: [
      "<strong>Frontend:</strong> HTML, CSS, Bootstrap, JavaScript",
      "<strong>Backend:</strong> C#, ASP.NET Web Forms",
      "<strong>Base de datos:</strong> SQL Server",
      "<strong>IDE:</strong> Visual Studio",
      "<strong>Host:</strong> Somee",
    ],
    methodsList: [
      "<strong>Lógica:</strong> POO",
      "<strong>Arquitectura:</strong> Capas (dominio, negocio, UI)",
      "<strong>Gestión:</strong> CRUD con validaciones",
      "<strong>Consultas:</strong> T-SQL y joins",
      "<strong>Seguridad:</strong> Sistema de roles y login",
    ],
    repos: [
      {
        label: "Ver Repositorio",
        link: "https://github.com/francowagenhofer/tp-final-nivel3-Wagenhofer-Franco.git",
      },
    ],
    imagenes: [
      `${base}Imagenes/CatalogoWeb/CatalogoWeb.webp`,
      `${base}Imagenes/CatalogoWeb/CatalogoWeb_Lista.webp`,
      `${base}Imagenes/CatalogoWeb/CatalogoWeb_Articulo.webp`,
      `${base}Imagenes/CatalogoWeb/CatalogoWebDB.webp`,
    ],
  },
  {
    id: "modal3",
    titulo: "Gestor Pyme",
    tipo: "App escritorio",
    framework: "Winforms",
    descripcion:
      "Gestión integral de empleados, proyectos y sueldos para PyMEs y mucho más.",
    iconos: [
      `${base}Iconos/csharp.svg`,
      `${base}Iconos/dotnet2.svg`,
      `${base}Iconos/sql-server.svg`,
      `${base}Iconos/sqlite-color.svg`,
    ],
    boton: {
      texto: "Descargar app",
      link: "https://github.com/francowagenhofer/Gestion-Pyme-SQLite/releases/download/v1.0.0/AppGestionPyme_Portable.zip",
    },
    modalTexto: `
            <p><strong>App C# .NET para gestión de PYME.</strong> Inicialmente desarrollada como app de consola, 
            evolucionó a una versión con interfaz gráfica (WinForms) para cubrir las necesidades de una empresa. 
            Permite gestionar datos de empleados, proyectos, salarios y más, con todas las funcionalidades CRUD implementadas.</p>
            <p><strong>Versiones independientes:</strong><br>
            • SQLite: portable, ejecutable directo tras descargar (no requiere instalación).<br>
            • SQL Server: completa con multiusuario, procedimientos almacenados, interfaz de consola y WinForms.</p>
        `,
    techList: [
      "<strong>Frontend:</strong> Windows Forms",
      "<strong>Backend:</strong> C#",
      "<strong>Base de datos:</strong> SQL Server / SQLite",
      "<strong>IDE:</strong> Visual Studio",
    ],
    methodsList: [
      "<strong>Lógica:</strong> POO",
      "<strong>Arquitectura:</strong> Capas (dominio, negocio, UI)",
      "<strong>Gestión:</strong> CRUD con validaciones",
      "<strong>Consultas:</strong> T-SQL y joins",
    ],
    repos: [
      {
        label: "SQLite",
        link: "https://github.com/francowagenhofer/Gestion-Pyme-SQLite.git",
      },
      {
        label: "SQL Server",
        link: "https://github.com/francowagenhofer/app-gestion-empleados-csharp.git",
      },
    ],
    imagenes: [
      `${base}Imagenes/GestorEmpleados/MenuEscritorio.webp`,
      `${base}Imagenes/GestorEmpleados/GestionOperaciones.webp`,
      `${base}Imagenes/GestorEmpleados/MenuConsola.webp`,
      `${base}Imagenes/GestorEmpleados/GestionEmpleadosDB.webp`,
    ],
  },
];

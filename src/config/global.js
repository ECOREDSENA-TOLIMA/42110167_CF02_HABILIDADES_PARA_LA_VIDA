export default {
  global: {
    componenteFormativo: 'Competencias para la vida fundantes e integradoras',
    descripcionCurso:
      'Este componente permite a los aprendices explorar y comprender las competencias fundantes e integradoras, fundamentales para el desarrollo personal y social. A partir del enfoque del Desarrollo a Escala Humana (DEH), se busca que identifiquen su importancia, potencien habilidades socioemocionales y fortalezcan su capacidad de adaptación en diversos contextos, promoviendo un impacto positivo en su entorno.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Competencias fundantes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Autoestima',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Regulación emocional',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Empatía',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Resiliencia',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Comunicación',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Competencias integradoras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Trabajo en equipo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Liderazgo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Toma de decisiones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Gestión de conflictos',
            hash: 't_2_4',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Titulo_de_primer_nivel',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Competencias fundantes',
      referencia:
        'Ministerio de Educación Nacional. (2004). Estándares básicos de competencias ciudadanas: Formar para la ciudadanía… ¡Sí es posible! Lo que necesitamos saber y saber hacer.',
      tipo: 'Cartilla',
      link:
        'https://www.mineducacion.gov.co/1621/articles-75768_archivo_pdf.pdf',
    },
    {
      tema: '1. Competencias fundantes',
      referencia:
        'Isquerra Alzina, R., & Pérez Escoda, N. (2007). Las competencias emocionales. Educación XX1, 10, 61-82.',
      tipo: 'Revista web',
      link: 'https://www.redalyc.org/pdf/706/70601005.pdf',
    },
    {
      tema: '2. Competencia integradoras',
      referencia:
        'Max-Neef, M. (1986). Desarrollo a Escala Humana: una opción para el futuro. ',
      tipo: 'Libro',
      link:
        'https://www.daghammarskjold.se/wp-content/uploads/1986/08/86_especial.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Autoestima',
      significado:
        'la capacidad de valorarse a uno mismo y sentirse capaz de enfrentar los desafíos de la vida.',
    },
    {
      termino: 'Axiológicas (necesidades)',
      significado:
        'relacionadas con valores humanos como afecto, participación, identidad, creación y libertad.',
    },
    {
      termino: 'Competencias fundantes',
      significado:
        'habilidades socioemocionales que forman la base del desarrollo personal y profesional, como autoestima, regulación emocional entre otras. ',
    },
    {
      termino: 'Competencias integradoras',
      significado:
        'conjunto de habilidades que combinan conocimientos, valores y técnicas para enfrentar situaciones complejas en contextos específicos.',
    },
    {
      termino: 'Comunicación',
      significado:
        'proceso de compartir ideas, pensamientos y emociones con otros esencial para establecer y mantener relaciones sociales efectivas',
    },
    {
      termino: 'Desarrollo a Escala Humana (DEH)',
      significado:
        'enfoque que prioriza el bienestar humano mediante la satisfacción de necesidades fundamentales.',
    },
    {
      termino: 'Empatía',
      significado:
        'capacidad de comprender y compartir los sentimientos y perspectivas de otras personas, promoviendo conexiones afectivas.',
    },
    {
      termino: 'Existenciales (necesidades)',
      significado:
        'asociadas con el ser humano en términos de ser, tener, hacer y estar, representando dimensiones esenciales.',
    },
    {
      termino: 'Habilidades socioemocionales',
      significado:
        'conjunto de conocimientos, destrezas y actitudes que permiten interactuar con otros, gestionar emociones y adaptarse a diversos contextos.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'habilidad para influir, motivar y guiar a un grupo hacia el logro de objetivos compartidos.',
    },
    {
      termino: 'Manejo de conflicto',
      significado:
        'capacidad de identificar, analizar y resolver desacuerdos de manera constructiva, promoviendo soluciones beneficiosas.',
    },
    {
      termino: 'Regulación emocional',
      significado:
        'habilidad para manejar las emociones de manera efectiva, decidiendo cuándo y cómo experimentarlas y expresarlas',
    },
    {
      termino: 'Resiliencia',
      significado:
        'la capacidad de adaptarse y superar situaciones adversas, recuperándose y encontrando formas de salir fortalecido',
    },
    {
      termino: 'Satisfactores sinérgicos',
      significado:
        'elementos que satisfacen una necesidad humana específica, y contribuyen al cumplimiento simultáneo de otras necesidades fundamentales.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'proceso de analizar opciones y elegir la acción más adecuada para resolver problemas.',
    },
    {
      termino: 'Trabajo en equipo',
      significado:
        'capacidad para colaborar con otras personas, aprovechando las habilidades y fortalezas individuales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Berlo, D. K. (1960). The process of communication: An introduction to theory and practice. Holt, Rinehart and Winston.',
      link: '',
    },
    {
      referencia:
        'Branden, N. (2010). Los seis pilares de la autoestima. Editorial Urano.',
      link: '',
    },
    {
      referencia:
        'Gross, J. J. (2002). Emotion regulation: Affective, cognitive, and social consequences. Psychophysiology, 39(3), 281-291.',
      link: 'https://doi.org/10.1017/S0048577201393198',
    },
    {
      referencia:
        'Masten, A. S. (2001). Ordinary magic: Resilience processes in development. American Psychologist, 56(3), 227-238.',
      link: 'https://doi.org/10.1037/0003-066X.56.3.227',
    },
    {
      referencia:
        'Max-Neef, M. (1986). Desarrollo a escala humana: Una opción para el futuro. Fundación Dag Hammarskjöld.',
      link: '',
    },
    {
      referencia:
        'Rojas-Barahona, C. A., Zegers, B. P., & Förster, C. E. (2009). La escala de autoestima de Rosenberg: Validación para Chile en una muestra de jóvenes adultos, adultos y adultos mayores. Revista médica de Chile, 137(6), 791-800.',
      link: 'https://dx.doi.org/10.4067/S0034-98872009000600009',
    },
    {
      referencia:
        'Secretaría del Trabajo y Previsión Social. (2010). Guía informativa de la Norma Oficial Mexicana NOM-002-STPS-2010, Condiciones de seguridad - Prevención y protección contra incendios en los centros de trabajo.',
      link: '',
    },
    {
      referencia:
        'Tobón, S. (2006). Formación basada en competencias: Pensamiento complejo, diseño curricular y didáctica. ECOE Ediciones.',
      link: '',
    },
    {
      referencia: 'UNICEF. (2017). Resiliencia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Fabián Acosta Gil',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Martha Cecilia Arcila Aponte',
          cargo: 'Profesional especializada',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza ',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín ',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador ',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez ',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

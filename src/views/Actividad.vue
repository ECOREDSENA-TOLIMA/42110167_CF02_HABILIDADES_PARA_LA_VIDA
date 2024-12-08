<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Competencias para la vida fundantes e integradoras',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Lea la afirmación de cada ítem y luego señale la respuesta correcta según sus conocimientos del componente.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿La autoestima solo se desarrolla durante la infancia, y no puede fortalecerse después?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: 'Felicitaciones por su respuesta.',
          mensaje_incorrecto:
            'Falso, la autoestima es dinámica y puede fortalecerse en cualquier etapa de la vida.',
        },
        {
          id: 2,
          texto:
            'El componente cognoscitivo de la autoestima se refiere a cómo nos vemos y pensamos sobre nosotros mismos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Este componente incluye nuestras creencias, ideas y autopercepción. Es clave porque influye en nuestra autoconfianza y en cómo proyectamos nuestras metas personales y profesionales.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 3,
          texto:
            'La regulación emocional es la capacidad de manejar y expresar emociones de manera constructiva.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'La regulación emocional permite tomar decisiones más acertadas, expresar emociones de forma adecuada y mantener relaciones sanas con los demás.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 4,
          texto:
            'La empatía consiste únicamente en sentir lo que siente otra persona, sin interpretar sus emociones.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'La empatía tiene dos dimensiones: cognitiva, para entender la experiencia del otro, y emocional, para compartir su sentimiento. Ambas son necesarias para conectar genuinamente.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 5,
          texto:
            'Según Gross (2002), las emociones pueden regularse solo después de que se han generado.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'También pueden regularse antes, mediante estrategias centradas en el antecedente.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 6,
          texto:
            'Las competencias fundantes son comparables a los cimientos de una casa, ya que sobre ellas se construyen otras habilidades.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Estas competencias, como la autoestima, son la base para desarrollar habilidades más complejas, permitiéndonos crecer personalmente y relacionarnos mejor con los demás.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 7,
          texto:
            'El carisma de un líder no influye en la confianza que sus seguidores depositan en él.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'El carisma inspira confianza y admiración en los seguidores.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto. ',
        },
        {
          id: 8,
          texto:
            'En comunicación, el principio "Es imposible no comunicar" significa que incluso el silencio transmite un mensaje.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Todo comportamiento, incluso no verbal, comunica algo. Por ejemplo, guardar silencio puede expresar desacuerdo o introspección.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto. ',
        },
        {
          id: 9,
          texto:
            'La comunicación asertiva se caracteriza por imponer las ideas propias sobre las de los demás.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se basa en el respeto y la claridad al expresar opiniones.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto. ',
        },
        {
          id: 10,
          texto:
            'La resiliencia solo se activa en momentos de adversidad extrema.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se activa en cualquier desafío o situación difícil.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto. ',
        },
        {
          id: 11,
          texto:
            'La singularidad como aspecto de la autoestima implica reconocer lo que nos hace especiales y únicos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Reconocer nuestras cualidades únicas refuerza nuestra autoestima, dándonos confianza en nuestras habilidades y contribuciones.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 12,
          texto:
            'En el modelo de comunicación de Gross, el cambio cognitivo consiste en modificar la forma de pensar sobre una situación para alterar su impacto emocional.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Cambiar la interpretación de una situación puede reducir su carga emocional. Por ejemplo, ver un error como una oportunidad de aprendizaje.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto. ',
        },
        {
          id: 13,
          texto:
            'La relación simétrica en comunicación implica que las personas tienen roles distintos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'La relación simétrica se basa en igualdad entre las personas.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto. ',
        },
        {
          id: 14,
          texto:
            'La comunicación pasiva implica evitar expresar nuestras ideas o preferencias.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'La comunicación pasiva se caracteriza por ceder o evitar conflictos, lo que puede generar malentendidos o resentimientos a largo plazo.',
          mensaje_incorrecto:
            '¡Continua no te rindas! Equivocarse es aprender. Sigue intentando, estás en el camino correcto. ¡Tú puedes!',
        },
        {
          id: 15,
          texto:
            'La autoestima no influye en cómo manejamos el éxito o el fracaso.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Es clave para manejar nuestras relaciones y experiencias de vida.',
          mensaje_incorrecto: 'Esta cerca de lograrlo… no se desanime. ',
        },
        {
          id: 16,
          texto:
            'Las competencias integradoras están relacionadas con el SER y se enfocan únicamente en habilidades técnicas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Las competencias integradoras están relacionadas con el HACER y combinan habilidades técnicas con competencias fundantes para enfrentar situaciones en contextos específicos.',
          mensaje_incorrecto:
            '¡No se preocupe por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos. ',
        },
        {
          id: 17,
          texto:
            'El trabajo en equipo es un ejemplo de competencia integradora porque combina competencias fundantes como la autoestima y la empatía con habilidades como la comunicación asertiva.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'El trabajo en equipo conecta habilidades personales y sociales con técnicas de colaboración para lograr objetivos comunes.',
          mensaje_incorrecto:
            '¡No se preocupe por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos. ',
        },
        {
          id: 18,
          texto:
            'Según Tobón (2006), las competencias integradoras son la capacidad de aplicar aprendizajes en escenarios reales de forma creativa y autónoma.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Este enfoque permite enfrentar situaciones complejas integrando conocimientos, habilidades y actitudes.',
          mensaje_incorrecto:
            '¡No se preocupe por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos. ',
        },
        {
          id: 19,
          texto:
            'Un equipo de trabajo tiene como objetivo principal fomentar valores como escuchar y reconocer los logros de los demás.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Un equipo de trabajo se enfoca en metas específicas, mientras que el trabajo en equipo fomenta valores como escuchar, respetar y apoyar.',
          mensaje_incorrecto:
            '¡No se preocupe por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos. ',
        },
        {
          id: 20,
          texto:
            'Para que un equipo de trabajo funcione, es clave mantener una comunicación abierta, comprometerse con las metas y coordinar roles.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'La comunicación, el compromiso y la coordinación son fundamentales para lograr un trabajo en equipo exitoso.',
          mensaje_incorrecto:
            '¡No te preocupes por el error! Cada respuesta es una oportunidad para aprender y mejorar.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

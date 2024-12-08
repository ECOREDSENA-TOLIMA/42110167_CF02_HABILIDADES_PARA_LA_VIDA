<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Competencias fundantes

    p.mb-5(data-aos="fade-left") Las competencias fundantes son competencias socioemocionales relacionadas con el “SER”, entendidas como la interacción emotiva entre una persona y su entorno. Estas forman parte del ámbito personal o individual y comprenden construcciones, ideas y sentimientos propios sobre la existencia y la relación con el mundo circundante.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')
          .col-lg-8.col-12
            .cajon.cajon1.color-primario.p-4.mb-3.order-lg-1.order-2
              p Se comparan con los cimientos de una casa, ya que sobre ellas se construyen todas las demás habilidades necesarias para la vida. Estas competencias permiten desarrollar el valor propio, superar dificultades, comunicarse de manera efectiva, establecer relaciones saludables y comprender y gestionar las emociones.
              p.mb-0 Además, estas competencias no solo facilitan que las personas se valoren y se perciban en diferentes contextos, sino que también resultan esenciales para comprenderse mejor, regular sus emociones y establecer conexiones positivas con los demás y con el entorno. Representan una base clave para llevar una vida plena y construir relaciones significativas.

    p(data-aos="fade-left") Las habilidades socioemocionales fundantes que se han priorizado incluyen la autoestima, la regulación emocional, la empatía, la resiliencia y la comunicación.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Autoestima

    p(data-aos="fade-left") La autoestima se define como la capacidad de una persona para enfrentarse a los desafíos de la vida, sentirse feliz y valorarse de manera positiva tanto por sus logros como por sus aspiraciones. Esta habilidad es esencial en la vida personal y social, ya que influye en la manera en que se manejan las relaciones, los éxitos y los fracasos, así como en la percepción personal.
    
    p.mb-5(data-aos="fade-left") El desarrollo de la autoestima inicia en la infancia y está determinado por cuatro aspectos fundamentales:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xxl-3.col-xl-4.col-lg-4.col-sm-10.col-md-8.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-upper(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img02.png' alt="Imagen decorativa")
          .tarjetas-upper_card
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Vinculación
            p.text-center.mb-0.px-2 Sentirse parte de un grupo importante como la familia o los amigos. Por ejemplo, un niño que siente apoyo constante de sus padres desarrolla un sentido de pertenecía solido.

      .col-xxl-3.col-xl-4.col-lg-4.col-sm-10.col-md-8.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-upper(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img03.png' alt="Imagen decorativa")
          .tarjetas-upper_card
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Singularidad
            p.text-center.mb-0.px-2 Reconocer lo que hace única a cada persona  y ser valorado por ello  como un talento o una habilidad especial. Por ejemplo un aprendiz que sobresale en dibujo  se siente reconocido y motivado para mejorar su técnica.

      .col-xxl-3.col-xl-4.col-lg-4.col-sm-10.col-md-8.mb-xl-3.mb-4(data-aos="fade-right")
        .tarjetas-upper(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img04.png' alt="Imagen decorativa")
          .tarjetas-upper_card
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Poder
            p.text-center.mb-0.px-2 Percibir la capacidad de influir en la propia vida y alcanzar metas. por ejemplo  una adolescente que se fija una meta académica y la cumple refuerza su confianza en la capacidad para lograr objetivos.

      .col-xxl-3.col-xl-4.col-lg-4.col-sm-10.col-md-8.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-upper(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img05.png' alt="Imagen decorativa")
          .tarjetas-upper_card
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Modelos y pautas
            p.text-center.mb-0.px-2 Aprender de los ejemplos cercanos para establecer valores y diferenciar  lo correcto de lo incorrecto. Por ejemplo, un joven que presta atención  como su hermano mayor maneja conflictos, aprende estrategias para resolver problemas de manera constructiva.

    p(data-aos="fade-left") Ninguno de estos aspectos es más importante que los demás; todos son igualmente necesarios.

    p.mb-5(data-aos="fade-left") Aunque estos elementos suelen desarrollarse en la infancia, es posible cultivarlos más adelante si no se establecieron en esa etapa. La autoestima es un concepto dinámico: puede fortalecerse, profundizarse o conectarse con otras actitudes, pero también debilitarse con el tiempo. Las experiencias personales, tanto públicas como privadas, desempeñan un papel crucial en este proceso, reflejando los altibajos de la vida.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .bloque-texto-f.c1.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-bold.bloque-texto-f__texto.text-center - Según Branden (2010)
          p.text-regular.bloque-texto-f__texto.text-center Si puedo aceptar que soy quien soy, que siento lo que siento, que hice lo que hice –si puedo aceptarlo, me guste o no–, puedo aceptarme a mí mismo. [...] Una vez que puedo aceptar todo esto, estoy del lado de la realidad, no contra ella. Tengo libre el camino para comenzar a fortalecer mi autoestima.

    p(data-aos="fade-left") Esta reflexión subraya que la aceptación plena de uno mismo, incluidas las limitaciones y dudas, es el primer paso para fortalecer la autoestima. Este enfoque alinea a las personas con la realidad y abre camino hacia un desarrollo genuino y positivo.
    
    p.mb-5(data-aos="fade-left") La autoestima comprende tres componentes interrelacionados, de modo que cualquier cambio en uno influye en los otros:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--verde")
          .row.justify-content-center(titulo="Componente cognoscitivo")
            p Se refiere a cómo una persona se percibe y piensa sobre sí misma. Este concepto evoluciona con el aprendizaje y el crecimiento personal, e incluye ideas, creencias y el procesamiento de información sobre la identidad propia. El autoconcepto, junto con la autoimagen, resulta fundamental para desarrollar la autoestima, ya que impacta tanto en la percepción actual como en las metas futuras.
            p.mb-0 <b>Ejemplo</b>: un estudiante que cree ser bueno resolviendo problemas matemáticos refuerza su confianza al participar en clase y se anima a plantearse objetivos más desafiantes, como competir en olimpiadas académicas.
            
          .row.justify-content-center(titulo="Componente afectivo")
            p Refleja cómo las personas se sienten y se valoran a sí mismas, de manera positiva ("Me gusta cómo soy") o negativa ("No hago nada bien"). Este componente es el núcleo de la autoestima, ya que integra la percepción de las propias cualidades, generando emociones como orgullo, satisfacción o frustración.
            p.mb-0 <b>Ejemplo</b>: si alguien se siente satisfecho con su esfuerzo al aprender algo nuevo, aunque no sea perfecto, fortalece una autoestima positiva, incentivándolo a seguir mejorando.
            
          .row.justify-content-center(titulo="Componente conductual")
            p Se refiere a las acciones que reflejan confianza y la búsqueda de respeto hacia uno mismo y de los demás. Estas conductas muestran cómo las personas afirman su identidad y reafirman su valía personal.
            p.mb-0 <b>Ejemplo</b>: al defender su opinión en un grupo, una persona demuestra seguridad en sí misma, incluso si los demás no están de acuerdo.

      .col-lg-4.col-md-6.col-8.mb-3.order-lg-2.order-1.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img06.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") La siguiente matriz presenta, desde el enfoque del Desarrollo a Escala Humana (DEH), la manera en que la competencia de la autoestima puede fortalecerse mediante la atención a las necesidades existenciales y su alineación con el cumplimiento de las necesidades axiológicas:        

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <em>Correlación de las necesidades fundantes, existenciales y axiológicas de la autoestima.</em>
        .tabla-a.clstabla.color-acento-contenido.mb-5 
          table
            thead
              tr
                th(rowspan="2") Competencias fundantes
                th(colspan="4") Necesidades existenciales
                th(rowspan="2") Necesidades axiológicas
              tr
                td.text-bold.text-center SER (características)
                td.text-bold.text-center TENER (herramientas)
                td.text-bold.text-center HACER (acciones)
                td.text-bold.text-center ESTAR (espacios)
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-bold Autoestima
                td Explora fortalezas, debilidades, sueños, metas, intereses y aspectos a mejorar como elementos clave para el reconocimiento y la construcción de su trayectoria personal de vida.
                td Desarrolla herramientas para priorizar y atender necesidades vitales.
                td Fortalece sus potencialidades y construye una trayectoria de vida con la que se siente realizado.
                td Comparte con personas que contribuyen al fortalecimiento de su autoestima en entornos familiares, sociales, laborales y educativos.
                td Afecto, entendimiento, participación, creación, identidad y libertad.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Regulación emocional

    p(data-aos="fade-left") Las emociones, como reír, llorar, sentir miedo, ira o alegría, son respuestas del estado de ánimo acompañadas de cambios físicos, como el sonrojo, y pueden generar placer o desagrado según la experiencia personal. Estas respuestas se manifiestan en expresiones, posturas corporales y reacciones observables. Aunque son comunes a todos, comprender su origen y funcionamiento resulta complejo, ya que integran factores físicos, sociales y psicológicos interconectados.

    p.mb-5(data-aos="fade-left") Una reacción emocional generalmente incluye los siguientes elementos:

    .tarjeta.tarjeta--BG01.p-4.p-md-5.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 Situación o estímulo
              p Un evento que puede generar emociones.
              p.mb-0 <b>Ejemplo</b>: recibir una carta de aceptación  a la universidad puede provocar alegría.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img07.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 El sujeto
              p La persona que percibe, interpreta y reacciona al estímulo. 
              p.mb-0 <b>Ejemplo</b>: el joven que lee la carta y comprende que fue aceptado.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img08.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 El significado otorgado
              p La interpretación personal del estímulo.
              p.mb-0 <b>Ejemplo</b>: la aceptación representa  la realización de un sueño o una oportunidad clave.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img09.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 La experiencia emocional
              p El sentimiento que surge del significado dado.
              p.mb-0 <b>Ejemplo</b>: felicidad y orgullo por el logro alcanzado.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 La reacción corporal
              p Cambios físicos vinculados a la emoción.
              p.mb-0 <b>Ejemplo</b>: corazón acelerado o lagrimas de alegría.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 Reacción motora observable
              p Conductas visibles que reflejan la emoción.
              p.mb-0 <b>Ejemplo</b>: saltar, gritar o abrazar a alguien.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img12.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") No todas las situaciones generan emociones automáticamente; esto depende de la interpretación individual. Las emociones también pueden variar en intensidad o cambiar con el contexto, experiencias y estado físico o emocional. Así, dos personas pueden reaccionar de manera diferente ante el mismo estímulo o una misma persona puede hacerlo en momentos distintos.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img13.png', alt='Imagen decorativa')
          .col-lg-6.col-12.order-lg-2.order-2
            p Actualmente, las emociones se consideran herramientas útiles para la adaptación, las relaciones y el logro de objetivos. Incluso las emociones negativas, como la tristeza o el enojo, cumplen un propósito, aunque, si no se gestionan adecuadamente, pueden prolongarse y consumir energía.
            p.mb-0 La regulación emocional es la capacidad de manejar sentimientos y su expresión. Las estrategias de regulación permiten decidir qué emociones experimentar, cómo y cuándo hacerlo. Según Gross (2002), estas estrategias pueden enfocarse en prevenir la emoción antes de que surja ("estrategias centradas en el antecedente") o en manejarla después de que se haya generado ("estrategias centradas en la respuesta"). Desarrollar esta habilidad mejora el bienestar general y facilita el manejo de las situaciones diarias.

    p.mb-5(data-aos="fade-left") La siguiente figura hace referencia al Modelo Multimodal, con el cual Gross describe el proceso de regulación emocional:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <em>Modelo Multimodal del proceso de regulación emocional.</em>
        .row.justify-content-center
          .col-lg-12.col-10
            figure.desktop
              img(src='@/assets/curso/temas/tema1/img14.svg', alt='En la figura 1 se presenta el Modelo Multimodal de regulación emocional de Gross (2002), que describe cómo las emociones se gestionan a través de la interacción entre la situación emocional, la cognición, la emoción y las acciones. La situación inicial puede ser modificada, lo que afecta tanto las emociones como las respuestas. Además, la cognición influye en la atención y en el cambio mental, facilitando la regulación emocional y mejorando la adaptación.')
              figcaption Nota. Información tomada de Gross, 2002.
          .col-auto.movil(data-aos="fade-left")
            a.anexo.mb-4(:href="obtenerLink('/downloads/Figura_1_Modelo_multimodal_del_proceso_de_regulación_emocional.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Figura 1. Modelo multimodal del proceso de regulación emocional
    
    p.mb-5(data-aos="fade-left") Las emociones pueden manejarse en cinco momentos clave según este modelo:

    TabsB.color-acento-botones.mb-5(data-aos="flip-up")
      .py-4.py-md-5(titulo="Selección de la situación" :icono="require('@/assets/curso/temas/tema1/img15.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Decidir estar o no en situaciones que generen emociones positivas o negativas.
            p.mb-0 <b>Ejemplo</b>: evitar un lugar que te pone ansioso.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img16.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Modificación de la situación" :icono="require('@/assets/curso/temas/tema1/img17.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Cambiar algo en el entorno o en cómo lo enfrentas para reducir el impacto emocional.
            p.mb-0 <b>Ejemplo</b>: si una discusión se pone tensa, puedes cambiar de tema para calmar las cosas.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img18.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Despliegue de atención" :icono="require('@/assets/curso/temas/tema1/img19.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Consiste en elegir a qué prestar atención para influir en las emociones.
            p.mb-0 <b>Ejemplo</b>: una persona decide distraerse viendo un video divertido cuando se siente triste.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img20.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Cambio cognitivo" :icono="require('@/assets/curso/temas/tema1/img21.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Implica modificar la forma de pensar sobre una situación para reducir su impacto emocional.
            p.mb-0 <b>Ejemplo</b>: en lugar de enojarse por llegar tarde, una persona considera que fue algo excepcional y no tan grave.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img22.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Modulación de la respuesta" :icono="require('@/assets/curso/temas/tema1/img23.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Se refiere a controlar cómo se expresan las emociones una vez que han surgido.
            p.mb-0 <b>Ejemplo</b>: aunque está molesta, una persona opta por mantener la calma durante una reunión importante.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img24.png', alt='Imagen decorativa')

    p(data-aos="fade-left") Estas estrategias ayudan a manejar mejor las emociones y a adaptarse al entorno.

    p.mb-5(data-aos="fade-left") En este contexto, la siguiente matriz relaciona las necesidades existenciales y axiológicas, vinculadas a la regulación emocional:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span <em>Correlación entre necesidades existenciales, axiológicas y la competencia socioemocional de regulación emocional.</em>
        .tabla-a.clstabla.color-acento-contenido.mb-5 
          table
            thead
              tr
                th(rowspan="2") Competencias fundantes
                th(colspan="4") Necesidades existenciales
                th(rowspan="2") Necesidades axiológicas
              tr
                td.text-bold.text-center SER (características)
                td.text-bold.text-center TENER (herramientas)
                td.text-bold.text-center HACER (acciones)
                td.text-bold.text-center ESTAR (espacios)
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-bold Regulación emocional
                td Desarrolla procesos de autoconocimiento que permitan identificar emociones y la forma de regularlas.
                td Utiliza herramientas de identificación y manejo de emociones en la vida personal y en la interacción con los otros.
                td Aprende a ejercen una influencia sobre las emociones experimentadas, sobre cuando suceden y sobre cómo se experimentan y se expresan.
                td En los espacios en los que participa y promueve la expresión y manejo de las emociones individuales y colectivas, de una manera constructiva.
                td Subsistencia, protección, afecto, participación, identidad y libertad.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Empatía

    p.mb-5(data-aos="fade-left") La empatía es el sentimiento de participación afectiva de una persona en la realidad que afecta a otra. Este concepto multidimensional incluye dos aspectos fundamentales:

    .tarjeta--container.row.mb-5(data-aos="flip-up")
      .col-xl.col-md-6.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-3
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema1/img25.svg', alt='Imagen decorativa')
          
        h4.text-center Dimensión cognitiva
        p.mb-0 Implica la capacidad de interpretar y comprender las experiencias y emociones de otra persona (ponerse en los zapatos del otro). Esto incluye procesos como la toma de perspectiva  o identificarse con personajes de ficción (fantasía).

      .col-xl.col-md-6.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-3
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema1/img26.svg', alt='Imagen decorativa')
          
        h4.text-center Dimensión emocional
        p.mb-0 Se refiere a la capacidad de compartir las emociones de los demás. Esto puede manifestarse como preocupación empática (sentir compasión) o como malestar personal al observar el sufrimiento ajeno.

    p.mb-5(data-aos="fade-left") La empatía es clave para conectar y entender a las personas. Además, es fundamental para promover valores esenciales como el afecto, la participación, la identidad y la libertad. Para desarrollar esta competencia, es importante: 

    .row.mb-5(data-aos="flip-up")
      .col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img27.svg' alt='AvatarTop')
          .tarjeta.color(style= "width: 100%")
            .p-4
              p.text-center.text-bold Respetar las diferencias y evitar los prejuicios.
      .col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img28.svg' alt='AvatarTop')
          .tarjeta.color(style= "width: 100%")
            .p-4
              p.text-center.text-bold Reconocer las cualidades, perspectivas y logros de los demás.
      .col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img29.svg' alt='AvatarTop')
          .tarjeta.color(style= "width: 100%")
            .p-4
              p.text-center.text-bold Reflexionar sobre el propio comportamiento y cómo impacta en los demás.

    p(data-aos="fade-left") El desarrollo de la empatía no solo fortalece las relaciones interpersonales, sino que también refuerza en los demás su autoestima y sentido de identidad, creando un entorno de entendimiento mutuo y aceptación.

    p.mb-5(data-aos="fade-left") La siguiente matriz presenta cómo la empatía, como competencia socioemocional, puede fortalecerse desde las necesidades existenciales y orientarse hacia el cumplimiento de necesidades axiológicas, dentro del enfoque de Desarrollo a Escala Humana (DEH).

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span <em>Correlación de las necesidades existenciales, axiológicas y la competencia socioemocional de la empatía.</em>
        .tabla-a.clstabla.color-acento-contenido
          table
            thead
              tr
                th(rowspan="2") Competencias fundantes
                th(colspan="4") Necesidades existenciales
                th(rowspan="2") Necesidades axiológicas
              tr
                td.text-bold.text-center SER (características)
                td.text-bold.text-center TENER (herramientas)
                td.text-bold.text-center HACER (acciones)
                td.text-bold.text-center ESTAR (espacios)
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-bold Empatía
                td Se conecta emocionalmente con el otro, comprendiendo sus necesidades y puntos de vista.
                td Desarrolla capacidades para identificar diferentes perspectivas, reconociendo pensamientos y sentimientos del otro.
                td Reconoce sentimientos y puntos de vista de los demás, respetando las diferencias.
                td En los espacios de interacción, comprende las perspectivas y emociones de los demás.
                td Afecto, entendimiento, identidad, participación y libertad.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Resiliencia

    p.mb-5(data-aos="fade-left") En psicología, la resiliencia es la capacidad de las personas para adaptarse y superar situaciones difíciles. Estas situaciones incluyen:

    .row.justify-content-center
      .col-12.col-lg-4.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/img30.png', alt='Imagen decorativa')
        h4 Adversidad
        p.mb-0 Momentos de infortunio, ya sean breves o prolongados.

      .col-12.col-lg-4.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/img31.png', alt='Imagen decorativa')
        h4 Trauma
        p Choques emocionales fuertes y duraderos que desorganizan a la persona.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 La resiliencia se activa ante desafíos, permitiendo resistencia y recuperación. Según UNICEF (2017), es “la fuerza flexible para enfrentar y rehacerse tras la adversidad”. Masten (2001), la define como "la capacidad para adaptarse con éxito a circunstancias difíciles".

    p(data-aos="fade-left") Es, en resumen, la habilidad para levantarse y seguir adelante, incluso en los peores momentos.

    p.mb-5(data-aos="fade-left") Los estudios sobre resiliencia se enfocan en identificar factores de riesgo y factores protectores que influyen en la manera en que las personas enfrentan la adversidad. Estos factores, que pueden ser individuales, familiares o sociales, determinan la capacidad de superación.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-9.mb-3
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img.img150(src='@/assets/curso/temas/tema1/img32.svg' alt='AvatarTop')
          .tarjeta.color2(style= "width: 100%; height: 100%")
            .p-4
              h4 Los factores protectores ayudan a afrontar la adversidad de forma positiva
              ul.lista-ul
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 <b>Personales</b>: personalidad flexible, buena adaptación o habilidades sociales.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 <b>Familiares</b>: vínculos fuertes con alguien de apoyo, como un familiar, vecino o profesional.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 <b>Socioculturales</b>: apoyo educativo, valores religiosos o compromiso social.
      .col-lg-9.mb-3
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img.img150(src='@/assets/curso/temas/tema1/img33.svg' alt='AvatarTop')
          .tarjeta.color2(style= "width: 100%; height: 100%")
            .p-4
              h4 Los factores de riesgo aumentan las probabilidades de un impacto negativo
              ul.lista-ul
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Insatisfacción de necesidades básicas.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Ambiente familiar tóxico.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Abandono escolar.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img34.png', alt='Imagen decorativa')
          .col-lg-6.col-12.order-lg-2.order-2
            .cajon.cajon.color-secundario.p-4.mb-3
              p.mb-0 La resiliencia no surge automáticamente; es el resultado de la interacción entre estos factores y la capacidad individual para adaptarse y superar dificultades. Reconocer los entornos que generan protección o afectación permite reflexionar sobre la importancia del cuidado, la adaptabilidad y la autonomía.
            p.mb-0 Además, competencias como autoestima y regulación emocional son esenciales para desarrollar resiliencia. Gestionar conflictos, aprender de las adversidades y mantener una autoestima sólida contribuyen a enfrentar los retos de la vida con mayor fortaleza.

    p.mb-5(data-aos="fade-left") La siguiente matriz muestra cómo, desde el enfoque de Desarrollo a Escala Humana (DEH), la competencia de resiliencia se fortalece mediante las necesidades existenciales y axiológicas.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span <em>Correlación de las necesidades existenciales, axiológicas y la competencia socioemocional de resiliencia.</em>
        .tabla-a.clstabla.color-acento-contenido
          table
            thead
              tr
                th(rowspan="2") Competencias fundantes
                th(colspan="4") Necesidades existenciales
                th(rowspan="2") Necesidades axiológicas
              tr
                td.text-bold.text-center SER (características)
                td.text-bold.text-center TENER (herramientas)
                td.text-bold.text-center HACER (acciones)
                td.text-bold.text-center ESTAR (espacios)
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-bold Resiliencia
                td Identifica las características que han permitido superar situaciones difíciles.
                td Reconoce los mecanismos que le han permitido superar la adversidad tanto a sí mismo como a otros.
                td Pone en práctica acciones que potencien las fortalezas y ayuden a superar las adversidades.
                td Crea espacios con el entorno familiar y amigos que consoliden percepciones optimistas del futuro.
                td Subsistencia, protección, participación e identidad.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Comunicación

    p(data-aos="fade-left") La comunicación es un proceso esencial que permite compartir ideas, pensamientos y emociones con los demás, constituyendo una herramienta fundamental para comprender o influir en otros. Es la base de la interacción humana y de la mayoría de las prácticas sociales.
    p.mb-5(data-aos="fade-left") La comunicación se rige por cinco axiomas que destacan su naturaleza multifacética:

    .tarjeta.tarjeta--BG02.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Es imposible no comunicar
            p Todo comportamiento transmite un mensaje, incluso el silencio o la inacción.
            p.mb-0 <b>Ejemplo</b>: cerrar los ojos en el autobús comunica que no se desea ser molestado.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img35.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Toda comunicación tiene contenido y relación
            p Cada mensaje combina información con la intención de definir la relación entre los interlocutores.
            p.mb-0 <b>Ejemplo</b>: "¿Puedes pasarme eso?" en un tono amable muestra cortesía, mientras que un tono brusco indica desagrado.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img36.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 La interpretación del mensaje depende de la puntuación
            p La manera en que se estructura o enfatiza un mensaje afecta su significado.
            p.mb-0 <b>Ejemplo</b>: "Vamos a comer, abuela" difiere de "Vamos a comer abuela".
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img37.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Modalidades de comunicación: digital y analógica
            p <b>Digital</b>: se refiere a las palabras utilizadas.
            p <b>Analógica</b>: implica los gestos, tonos o expresiones.
            p.mb-0 <b>Ejemplo</b>: "Estoy bien" dicho con una sonrisa refuerza el mensaje, pero con un tono serio puede contradecirlo.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img38.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Relación simétrica o complementaria
            p <b>Simétrica</b>: igualdad entre los participantes.
            p <b>Complementaria</b>: roles diferenciados.
            p.mb-0 <b>Ejemplo</b>: una conversación entre amigos es simétrica; entre profesor y estudiante, complementaria.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img39.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Existen diversas maneras de comunicarse, cada una con sus particularidades: 

    .row.justify-content-center.mb-3(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img40.svg", alt="alt").img90.m-auto
          h4.text-center Pasiva
          p.text-center.mb-0 Evita expresar ideas o sentimientos para no generar conflicto. Por ejemplo, mantenerse en silencio durante una discusión para evitar involucrarse.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img41.svg", alt="alt").img90.m-auto
          h4.text-center Agresiva
          p.text-center.mb-0 Impone ideas desestimando las de otros. Por ejemplo, "No entiendes, mi propuesta es la única válida".

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img42.svg", alt="alt").img90.m-auto
          h4.text-center Manipuladora
          p.text-center.mb-0 Tergiversa información para beneficio personal. Por ejemplo, pedir dinero con una excusa falsa.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img43.svg", alt="alt").img90.m-auto
          h4.text-center Asertiva
          p.text-center.mb-0 Comunica pensamientos y emociones de forma clara y respetuosa. Por ejemplo, "Respeto tu opinión, pero pienso que mi idea es mejor por estas razones".

    p(data-aos="fade-left") La comunicación es un proceso esencial que permite a las personas compartir ideas, pensamientos, emociones y experiencias, estableciendo un puente para la interacción humana y el entendimiento mutuo. Es mucho más que simplemente transmitir información; implica también influir en los demás, resolver conflictos, generar consensos y construir relaciones basadas en la confianza y el respeto.
    p.mb-5(data-aos="fade-left") Para que la comunicación sea eficaz, es fundamental trabajar en habilidades específicas que garanticen claridad y comprensión en el mensaje. Uno de los aspectos más importantes es la escucha, ya que determina cómo se recibe y procesa lo que el interlocutor está expresando. Existen tres tipos principales de escucha, cada uno con un impacto distinto en la calidad del intercambio comunicativo:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img44.svg' alt="Imagen decorativa")
          .tarjetas-up_card
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Escucha selectiva
            p.text-center.mb-0.px-3 En este tipo de escucha, la atención del receptor es parcial y se alterna entre el mensaje y las distracciones  externas o internas. Las personas  que escuchan de manera selectiva tienden a captar únicamente lo que consideran relevante, dejando de lado detalles que podrían ser importantes para la compresión global.

      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img45.svg' alt="Imagen decorativa")
          .tarjetas-up_card
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Escucha lógica
            p.text-center.mb-0.px-3 Aquí, el receptor se enfoca en el contenido racional y estructurado del mensaje. Se busca el sentido lógico de las ideas, separando la información de las emociones que puedan  acompañarla. Este tipo escucha es útil para evaluar argumentos o analizar  conclusiones, aunque puede limitar la conexión emocional  con el interlocutor.

      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img46.svg' alt="Imagen decorativa")
          .tarjetas-up_card
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Escucha activa y empática
            p.text-center.mb-0.px-3 Este tipo de escucha combina atención plena y empatía, permitiendo al receptor comprender tanto el contenido como las emociones detrás del mensaje. Consiste en ponerse en el lugar del interlocutor, esforzándose por entender su perspectiva y las sensaciones que manifiesta. esta es la forma mas completa y eficaz de escuchar, ya que fomenta el entendimiento mutuo y refuerza la relación entre las partes.

    p(data-aos="fade-left") Para garantizar una comunicación efectiva, se deben desarrollar las siguientes competencias, las cuales constituyen la base para lograr un intercambio claro, respetuoso y significativo de ideas y emociones. Estas competencias no solo mejoran la forma en que nos relacionamos con los demás, sino que también fortalecen nuestra capacidad para entender y ser entendidos en diversos contextos, ya sea en el ámbito personal, profesional o social.
    p.mb-5(data-aos="fade-left") Las competencias necesarias para una comunicación efectiva pueden clasificarse en cuatro áreas fundamentales: exponer, escuchar, convencer y contestar, cada una de ellas orientada a facilitar diferentes aspectos del proceso comunicativo.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span <em>Áreas de competencias de la comunicación para garantizar eficacia.</em>
        .row.justify-content-center
          .col-lg-12.col-10
            figure.desktop
              img(src='@/assets/curso/temas/tema1/img47.svg', alt='En la figura 2, se presenta un enfoque eficaz para la comunicación: primero exponer las ideas de forma clara y organizada; luego escuchar atentamente; continuar con contestar, aclarando dudas o inquietudes; y culminar con convencer, empleando argumentos sólidos que generen interés y logren consenso.')
          .col-auto.movil(data-aos="fade-left")
            a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Figura_2_Áreas_de_competencias_de_la_comunicación_para_garantizar_eficacia.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Figura 2. Áreas de competencias de la comunicación para garantizar eficacia
    
    p.mb-5(data-aos="fade-left") Cada una de estas competencias está interrelacionada y contribuye a mejorar la calidad de la comunicación, facilitando un diálogo que promueva el entendimiento, la empatía y el respeto mutuo. Cultivarlas no solo permite evitar malentendidos, sino que también fomenta relaciones más sólidas y enriquecedoras en todos los aspectos de la vida. La comunicación está profundamente relacionada con las necesidades humanas, tanto existenciales como axiológicas. La siguiente tabla presenta cómo fortalecer la competencia de comunicación desde estas perspectivas:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span <em>Correlación de las necesidades existenciales, axiológicas y la competencia socioemocional de comunicación.</em>
        .tabla-a.clstabla.color-acento-contenido
          table
            thead
              tr
                th(rowspan="2") Competencias fundantes
                th(colspan="4") Necesidades existenciales
                th(rowspan="2") Necesidades axiológicas
              tr
                td.text-bold.text-center SER (características)
                td.text-bold.text-center TENER (herramientas)
                td.text-bold.text-center HACER (acciones)
                td.text-bold.text-center ESTAR (espacios)
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-bold Comunicación
                td Identifica habilidades para intercambiar información con otros, expresar pensamientos, sentimientos y opiniones.
                td Utiliza formas de comunicación basadas en el respeto y control emocional, lo que permite exponer ideas de manera clara y efectiva.
                td Aprende a expresarse tanto de manera verbal como no verbal, mejorando la interacción con otros.
                td Crea y participa en espacios donde se fomente el intercambio de ideas y opiniones de manera asertiva.
                td Afecto, entendimiento, participación e identidad.

    p(data-aos="fade-left") La comunicación es una habilidad esencial que requiere práctica y desarrollo constante. Trabajar en las competencias asociadas a exponer, escuchar, convencer y contestar, en conjunto con la integración de una escucha activa y empática, garantiza interacciones significativas y efectivas. Al fomentar espacios de diálogo respetuoso y el manejo adecuado de las emociones, se contribuye a fortalecer las relaciones interpersonales, la comprensión mutua y el bienestar colectivo.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

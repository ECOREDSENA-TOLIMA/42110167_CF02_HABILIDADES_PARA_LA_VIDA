<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5(data-aos="fade-left") En esta temática, se aborda el desarrollo de competencias socioemocionales o habilidades para la vida, fundamentales para mejorar la relación que cada persona tiene consigo misma y con los demás. Estas habilidades promueven el crecimiento personal, la contribución a la sociedad y la capacidad de encontrar sentido en las acciones propias a través de las dimensiones de ser, tener, hacer y estar.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 En este componente formativo, las competencias se conceptualizan como un conjunto de conocimientos, destrezas y habilidades que permiten resolver problemas, alcanzar objetivos y adaptarse de manera autónoma a diversos contextos.

    p.mb-5(data-aos="fade-left") Estas competencias se dividen en dos tipos:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12 
        .row
          .col-lg-6.mb-3
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/intro/img01.svg' alt='AvatarTop')
              .tarjeta.color(style= "width: 100%")
                .p-4
                  h4 Competencias fundantes
                  p Constituyen la base para el desarrollo personal y profesional.

          .col-lg-6.mb-3
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/intro/img02.svg' alt='AvatarTop')
              .tarjeta.color(style= "width: 100%")
                .p-4
                  h4 Competencias integradoras
                  p Facilitan la aplicación de lo aprendido en situaciones reales y complejas.

    p.mb-5(data-aos="fade-left") Las competencias socioemocionales están influenciadas por el entorno familiar, social e institucional, y son especialmente moldeables durante la adolescencia y la juventud. En estas etapas, se forman hábitos, se construye la personalidad y se adquieren destrezas clave para la vida adulta. Trabajar en ellas no solo contribuye a mejorar la calidad de vida personal, sino también a fortalecer la capacidad para enfrentar desafíos y generar un impacto positivo en el entorno. Basado en la descripción anterior, es importante que acceda al siguiente video, para comprender la importancia del contenido y los diferentes temas:
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/BH18GkgX7-s?si=_kiFCEa7b86HF8T4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

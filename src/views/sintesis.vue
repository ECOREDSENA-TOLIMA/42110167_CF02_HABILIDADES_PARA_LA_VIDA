<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se describe una visión general del componente formativo “Competencias para la vida fundantes e integradoras”, el cual ofrece un análisis integral de las competencias clave para el desarrollo personal y social. En primer lugar, se abordan las competencias fundantes, que incluyen la autoestima, la regulación emocional, la empatía, la resiliencia y la comunicación, elementos esenciales para el autoconocimiento y la gestión de las emociones. Estas competencias establecen la base para un desarrollo humano positivo. Posteriormente, el componente se enfoca en las competencias integradoras, tales como el trabajo en equipo, el liderazgo, la toma de decisiones y la gestión de conflictos, que permiten a los individuos interactuar de manera efectiva en diversos contextos, favoreciendo la colaboración, el respeto mutuo y la resolución constructiva de desacuerdos. A través de este enfoque, se busca formar personas capacitadas para liderar, tomar decisiones informadas y enfrentar retos de manera resiliente, promoviendo su bienestar y el de su entorno.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El componente formativo “Competencias para la vida fundantes e integradoras” aborda habilidades esenciales para el desarrollo personal y social. Comienza con las competencias fundantes, como la autoestima, regulación emocional, empatía, resiliencia y comunicación, que son clave para el autoconocimiento y el manejo de emociones. A continuación, se enfocan las competencias integradoras, tales como trabajo en equipo, liderazgo, toma de decisiones y gestión de conflictos, que facilitan la interacción efectiva y la resolución de problemas en diversos contextos. Este enfoque busca fortalecer tanto el bienestar individual como el colectivo.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

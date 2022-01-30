<template lang="pug">
    .card
      .card-header
        p.card-header-title  {{name}}

      .card-content {{desc}}
        br
        hr
        p tag : 
          span.tag.is-success(v-for="item in tag") {{item}}

        p {{date[2]}} {{month[parseInt(date[1]) -1]}} {{date[0]}}

      .card-footer
        nuxt-link.card-footer-item(:to="`.${url}`") lire

        
</template>

<script>
export default {
  data () {
    return {
      month : ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'décembre']
    }
  },
  props: ["name", "desc", "tag", "date", "url"],
  computed: {
    urlTest(){
      return (this.url)
    }
  }
}
</script>

<style lang="sass" scoped>
span.tag
  margin:10px 
</style>
<template lang="pug">
div
    nav.navbar(role="navigation" aria-label="main navigation").is-spaced.is-fixed-top
        .navbar-brand
            .navbar-item
                strong chaweb
            #BurgerMenu.navbar-burger(role='button' @click="nav_activ = !nav_activ" :class="{'is-active': nav_activ}")
                span
                span
                span
                
        #navbarBasic.navbar-menu(:class="{'is-active': nav_activ}" @click="nav_activ = !nav_activ")
            .navbar-start
                nuxt-link.navbar-item(to="/" :class="{'link-exact-active' : isRouteActive('/')}")
                    |bio 
                .navbar-item.has-dropdown.is-hoverable
                    nuxt-link.navbar-link(to="/blog/s" :class="{'link-exact-active' : isRouteActive('/blog/s')}")
                        |blog
                    .navbar-dropdown.is-boxed
                        nuxt-link.navbar-item(v-for="(item, index) in catégories" :key="`catégories-${index}`" :to="`/blog/s?tag=${item}`") {{item}}
                    
                    hr.navbar-divider
                nuxt-link.navbar-item(to="/contact" :class="{'link-exact-active' : isRouteActive('/contact')}")
                    |me contacter


            .navbar-end
                .navbar-item
                    .buttons
                        a.button.is-primary
                            strong s'inscrire

    nuxt#pages.box

</template>

<script>
export default {
  methods: {
    isRouteActive(id) {
        if (id == '/') {
            return this.$route.path == '/' ? true : false
        } else {
            return this.$route.path.includes(id)
        } 
    },
  },
  data () {
    return {
        nav_activ: false,
        catégories: this.$store.state.categories
    }
  }
  
}
</script>


<style lang="sass">
html
    background-color: #141414
    padding-top: 100px
#pages
    margin:50px
    margin-top:20px
    background-color: lighten(#141414, 5%)
</style>



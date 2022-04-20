<template lang="pug">
div
    nav.navbar(role="navigation" aria-label="main navigation" style="z-index: 1").is-spaced.is-fixed-top
        .navbar-brand
            nuxt-link(to="/").navbar-item
                img(src="/favicon.ico")
                strong &nbsp;&nbsp;Chaweb
            #BurgerMenu.navbar-burger(role='button' @click="nav_activ = !nav_activ" :class="{'is-active': nav_activ}")
                span
                span
                span
                
        #navbarBasic.navbar-menu(:class="{'is-active': nav_activ}" @click="nav_activ = !nav_activ")
            .navbar-start
                nuxt-link.navbar-item(to="/bio" :class="{'link-exact-active' : isRouteActive('/bio')}")
                    |bio 
                .navbar-item.has-dropdown.is-hoverable
                    nuxt-link.navbar-link(to="/blog/s" :class="{'link-exact-active' : isRouteActive('/blog/s')}")
                        |blog
                    .navbar-dropdown.is-boxed
                        .navbar-item#topTagsTitle Top tags
                        nuxt-link.navbar-item(v-for="(item, index) in catégories" :key="`catégories-${index}`" :to="`/blog/s?tag=${item}`") {{item}}
                    
                    hr.navbar-divider
                nuxt-link.navbar-item(to="/contact" :class="{'link-exact-active' : isRouteActive('/contact')}")
                    |me contacter


            //- .navbar-end
            //-     .navbar-item
            //-         .buttons
            //-             a(@click="form = !form" ).button.is-primary
            //-                 strong s'inscrire

    nuxt#pages.box.is-widescreen.container

    footer.footer
        .content
            h5 legals notices
            a(rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/")
                img(alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png")
                br
                |This work is licensed under.

            p Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.

            a(href="https://bulma.io")
                img(src="/made-with-bulma--dark.png" width="128" height="24")
            br
            a(href="https://nuxtjs.org")
                span.tag.is-medium
                    a made with Nuxt
                    img(src="https://nuxtjs.org/_nuxt/icons/icon_64x64.a3b4ce.png" width="32" height="32" style="margin:10px; margin-right:0")

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
        catégories: this.$store.state.UpCat
    }
  }
  
}
</script>


<style lang="sass">
html
    background-color: #141414
    padding-top: 100px
    
</style>

<style lang="sass" scoped>

#pages
    margin-top:20px
    background-color: lighten(#141414, 5%)
    margin-bottom: 30px

#topTagsTitle
    background-color: #303030

#form
    background-color: #000000B0
    z-index: 3
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom:0
    & > *
        margin: 10px
    & > div
        padding: 10px
        margin-top: 5em
        background-color: #123
        z-index: 4
        & > input
            max-width: 500px
            margin-right:50px  

    
</style>



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


            .navbar-end
                .navbar-item
                    .buttons
                        a(@click="invertDark()" ).button.is-primary
                            icon(:icon="!dark ? 'nights_stay' : 'brightness_7'" :color="dark? '#000' : '#fff'") 

    nuxt#pages.box.is-widescreen.container

    footer.footer(lang="en")
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
  mounted() {
    this.socket = this.$nuxtSocket({
        // nuxt-socket-io opts: 
        channel: '/index', // connect to '/index'

        // socket.io-client opts:
        reconnection: false
    })
    this.dark = this.$store.state.localStorage.DarkMode
    if (this.dark != true){this.dark = false}
  },
  methods: {
    isRouteActive(id) {
        if (id == '/') {
            return this.$route.path == '/' ? true : false
        } else {
            return this.$route.path.includes(id)
        } 
    },invertDark(){
        this.dark =  !this.dark
        this.$store.commit('localStorage/DarkState', this.dark)
    }
  },
  data () {
    return {
        nav_activ: false,
        catégories: this.$store.state.UpCat,
        dark: false
    }
  },
  head(){
      return{
            bodyAttrs: {
                class: this.dark ? 'dark' : ''
            }
        }
  }

}
</script>


<style lang="sass">

html
    background-color: $background-color
    padding-top: 100px
    
</style>

<style lang="sass" scoped>


#pages
    margin-top:20px
    background-color: lighten($background-color, 5%)
    margin-bottom: 30px

#topTagsTitle
    background-color: darken($primary, 25%)

</style>



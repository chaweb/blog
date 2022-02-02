<template lang="pug">
div
    nav.navbar(role="navigation" aria-label="main navigation" style="z-index: 1").is-spaced.is-fixed-top
        .navbar-brand
            .navbar-item
                img(src="/favicon.ico")
                strong Chaweb
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
                        .navbar-item#topTagsTitle Top tags
                        nuxt-link.navbar-item(v-for="(item, index) in catégories" :key="`catégories-${index}`" :to="`/blog/s?tag=${item}`") {{item}}
                    
                    hr.navbar-divider
                nuxt-link.navbar-item(to="/contact" :class="{'link-exact-active' : isRouteActive('/contact')}")
                    |me contacter


            .navbar-end
                .navbar-item
                    .buttons
                        a(@click="form = !form" ).button.is-primary
                            strong s'inscrire

    #form(v-if="form")
        a.delete.block.is-large.is-danger(@click="form = !form" )
        .box.block 
            .block recevoir des mails
            input.input#mail.block.is-info
            button.block.button.is-success submit
            br
            a lien de contrat

    nuxt#pages.box.is-widescreen.container

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
        form: false,
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



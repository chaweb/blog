<template lang="pug">
    div.content
        h1 Bienvenue sur le blog de Chaweb !
        br
        div.buttons.is-centered
            nuxt-link(to="/bio")
                button.button.is-primary(title="quelque information sur moi, par ci par là.") la bio
            nuxt-link(to="/blog/s")
                button.button.is-primary(title="un blog, le principe... d'un blog") blog
            nuxt-link(to="/contact")
                button.button.is-primary(title="pour savoir comment me contacter") me contacter
            button.button.is-primary(title="patience, la fonctionnalité arrivera") s'inscrire
        figure.image
            img(src="PhotoDeProfil.png")#pp
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="sass" scoped>
#pp
    $size: 25vw
    max-width:$size
    max-height:$size
    width: auto
    height: auto
    border-bottom: solid 4px white
    border-bottom-left-radius: 10px
    border-bottom-right-radius: 10px
</style>
<template lang="pug">
.content
    h1 Defi basti UI
    h2 concept: 
    p BistiUI à fait un defi avec Benjamin code, le principe : refaire en codant à l'aveugle ce qu'avait fait basti en sondage avec son instagram.
    p la vidéo de basti et benjamin sont plus explicatif ^^"
    p
        a(href="http://youtu.be/NIz7EiyunmY") la vidéo de basti
    p
        a(href="https://youtu.be/6upFEYuOrr8") la vidéo de benjaminCode
    h2 resultat
    div#travail
        button#skip x Passer
        p Bravo Benjamin, tu viens de télécharger Bootstrap v5.1.3
        p
            h2 Dis-nous ce que tu en as pensé !
        #emojis
            .emoji#pocontent
                #visages
                    #surcilD
                    #surcilG
                    #oeilD
                    #oeilG
                    #bouche
            .emoji#tristounet
                #visages
                    #oeilD
                    #oeilG
                    #bouche
            .emoji#mouais
                #visages
                    #oeilD
                    #oeilG
                    #bouche
            .emoji#okay
                #visages
                    #oeilD
                    #oeilG
                    #bouche
            .emoji#hoppy
                #visages
                    #oeilD
                    #oeilG
                    #bouche
    h3 vidéo du code
    p (faut que j'apprenne le montage, moi !)
    p (et oui, il n'y a pas de son)
    figure.image.is-16by9(style="padding-top: 0;")
        iframe.has-ration(width="960" height="540" src="/web/vidéoDefiBasti_sansMontage.mp4")
</template>


<style lang="sass" scoped>
#travail
    background-color: #001f22
    width: 400px
    height: 600px
    margin-left: auto
    margin-right: auto
    display: flex
    flex-flow: column
    border: solid 5px #fff
    & > button
        width: 150px
    & > #emojis 
        display: flex
        flex-flow: row
        &>.emoji
            width: 70px
            height: 70px
            border-radius: 50%
            margin-left: 3px
            margin-right: 3px

            &>#visages
                position: relative
                left:10px
                transition: 1sec
                display: grid
                grid-template: "sd . sg" "yg . yd" ". . ." "bouche bouche bouche"
                & > #oeilD
                    width: 5px
                    height: 5px
                    background: #000
                    border-radius: 50%
                    animation: yeux 10s repeat
                    grid-area: yd
                & > #oeilG
                    width: 5px
                    height: 5px
                    background: #000
                    border-radius: 50%
                    animation: yeux 10s repeat
                    grid-area: yg
                & > #bouche
                    width: 40px
                    margin-left: auto
                    margin-right: auto
                    background-color: #000
                    height: 10px
                    grid-area: bouche
            &#pocontent
                background: linear-gradient(45deg, #ea3132, #d57f6f) //je
                &>#visages
                    top:25px
                    & > #surcilD
                        width: 10px
                        height: 5px
                        background: #000
                        transform: rotate(10rad)
                        grid-area: sd
                    & > #surcilG
                        width: 10px
                        height: 5px
                        background: #000
                        transform: rotate(-10rad)
                        grid-area: sg
                    
                    & > #bouche
                        border-radius: 50% 50% 0 0
            &#tristounet
                background: linear-gradient(45deg, #f34a35, #f2a75f) //suis
                &>#visages
                    top:20px
                    & > #bouche
                        border-radius: 50% 50% 0 0
            &#mouais
                background: linear-gradient(45deg, #e5a763, #c7bb8b) //pas
                &>#visages
                    top:15px
            &#okay
                background: linear-gradient(45deg, #ebc659, #707735) //sûre
                &>#visages
                    top:10px
                    & > #bouche
                        border-radius:0 0 50% 50%
            &#hoppy
                background: linear-gradient(45deg, #c8cd71, #b7bf57) //des couleurs
                &>#visages
                    top:5px
                    & > #bouche
                        border-radius:0 0 50% 50%

            &:hover>#visages
                left:0
            
@keyframes yeux 
    0%
        height: 5px    
    2%
        height: 0
    5%
        height: 5px
    100%
        height: 5px



            
</style>
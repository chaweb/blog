<template lang="pug">
.content
    h1 Defi basti UI / benjamin code
    h2 concept: 
    p BastiUI a fait un defi avec Benjamin code, le principe : refaire en codant à l'aveugle ce qu'avait fait basti en sondage avec son instagram.
    p la vidéo de basti et benjamin sont plus explicatif ^^"
    .buttons
        button.button.is-info(onclick="location.href = 'http://youtu.be/NIz7EiyunmY'").block la vidéo de basti
                icon(icon="link")
        button.button.is-info(onclick="location.href = 'https://youtu.be/6upFEYuOrr8'").block la vidéo de benjaminCode
                icon(icon="link")
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


    h3 Avec quelque retouche donc sans la contrainte.
    link(href="https://blogfonts.com/css/aWQ9MTY4MDM0JnN1Yj0zNCZjPW4mdHRmPW5ldWVtYWNoaW5hLXVsdHJhYm9sZC5vdGYmbj1uZXVlLW1hY2hpbmE/Neue Machina.otf" rel="stylesheet" type="text/css")
    div#travail2
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
</template>


<style lang="sass" scoped>
#travail
    font: Neue Machina
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

#travail2
    background-color: #001f22
    width: 400px
    height: 600px
    margin-left: auto
    margin-right: auto
    display: flex
    flex-flow: column
    border: solid 5px #fff
    font-family: 'neue-machina-3', sans-serif
    & > button
        width: 150px
    & > p
        margin: 10px
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
                left:5px
                
                display: grid
                grid-template: "sg . sd" "yg . yd" ". . ." "bouche bouche bouche"
                & > #oeilD
                    justify-self: center
                    width: 8px
                    height: 8px
                    background: #000
                    border-radius: 50%
                    animation: yeux 10s repeat
                    grid-area: yd
                & > #oeilG
                    justify-self: center
                    width: 8px
                    height: 8px
                    background: #000
                    border-radius: 50%
                    animation: yeux 10s repeat
                    grid-area: yg
                & > #bouche
                    margin-top: 5px
                    justify-self: center
                    grid-area: bouche
            &#pocontent
                background: linear-gradient(45deg, #ea3132, #d57f6f) //je
                &>#visages
                    top:37px
                    & > #surcilD
                        justify-self: center
                        width: 12px
                        height: 4px
                        background: #000
                        transform: rotate(-10rad)
                        grid-area: sd
                        margin-bottom: 4px
                    & > #surcilG
                        justify-self: center
                        width: 12px
                        height: 4px
                        background: #000
                        transform: rotate(10rad)
                        grid-area: sg
                        margin-bottom: 4px
                    
                    & > #bouche
                        width: 15px
                        height: 7px
                        border: 4px #000 solid
                        border-bottom: 0px
                        border-radius:7px 7px 0 0
            &#tristounet
                background: linear-gradient(45deg, #f34a35, #f2a75f) //suis
                &>#visages
                    top:32px
                    & > #bouche
                        width: 15px
                        height: 7px
                        border: 4px #000 solid
                        border-bottom: 0px
                        border-radius:7px 7px 0 0
            &#mouais
                background: linear-gradient(45deg, #e5a763, #c7bb8b) //pas
                &>#visages
                    top:25px
                    & > #bouche
                        width: 16px
                        height: 4px
                        background-color: #000
            &#okay
                background: linear-gradient(45deg, #ebc659, #707735) //sûre
                &>#visages
                    top:18px
                    & > #bouche
                        width: 15px
                        height: 7px
                        border: 4px #000 solid
                        border-top: 0px
                        border-radius:0 0 7px 7px
            &#hoppy
                background: linear-gradient(45deg, #c8cd71, #b7bf57) //des couleurs
                &>#visages
                    top:15px
                    & > #bouche
                        width: 15px
                        height: 7px
                        background-color: #000
                        border-radius:0 0 7px 7px

            &:hover>#visages
                left:0
                transition: 0.5s
            
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
<template lang="pug">
.content
    h1 Les fonctions ?
    p On va reprendre les bases, je ne vais pas m'y atterder. Mais une fonction, en mathématique, c'est quoi ?
    p Normalement, tout le monde a à l'idée f(x)=x
        sup 2
        | ou encore g(x)= 4x+2, par exemple. Donc, en quelque sorte, une fonction c'est "on prends une valeur x" qui 
        br 
        | "se transforme en une valeur : f(x) (ou g(x))"

    p Bon, on sait, plus au moins, ce qu'est une fonction... Alors testons ! Je vais prendre la valeur où x=2 :
    p Pour f(x), on a 4 car f(2) = 2
        sup 2 
        | = 4

    p Mais pour g(x), on obtient 10 ! Car g(2) = 4×2+2 = 10

    p Bon, je suis aller assez vite, car ce n'est pas ce qui m'intèresse. Je parle de fonctions complexes dans mon blog. Mais nous ne savons pas ce qu'est un "nombre complexe"

    h1 KESCé un nombre complexe ?

    p En quelque sorte : 
        strong i
        sup 2 
        | = 
        strong -1

    p Si vous ne voyez pas où est le problème, c'est ou que vous connaissez déjà, ou que vous ne savez pas qu'un nombre réel (donc 1,-1,5, racine de 2, ect..) NE FERA JAMAIS un negatif. 
        | C'est assez facile, un nombre multiplier par lui même ne pourra jamais être negatif. Car un nombre négatif multiplié par un autre nombre négatif nous donneras un nombre positif suivant la loi des signes.
    p Donc c'est ça le "i" qui va se glisser partout. Mais on pourra aussi parler de "j" qui est dans le principe le même mais en physique.
    p Les nombres complexes se situe non plus sur une droite, mais sur un plan. Avec pour absicisse les réels, et ordonnée les imaginaires. On notera donc que l'affix du point z
        sub 1
        | = 1+3j à pour absicisse 1 et ordonnée 3 z
        sub 1
        |(1;3). (et non "3j" car on prends juste le nombre avant le "j"... sans le "j").

    p On parlera aussi de "parti imaginaire" qui justement est la valeur de l'ordonnée et de "parti réelle" qui est la valeur des absicisses.

    p Alors, avec ça, on peut faire plein de chose ! Comme déjà, aimer les maths ! Mais aussi, prendre un dolipran. Parce que là, on va passer au dur, un mélange des 2 !

    h1 Les fonctions complexes
    p Bon, je vais vous avouez que je ne connais pas non plus le terme exacte. 
    p Pour ce qui va suivre, on va utiliser python, je ne vais expliquer ce que c'est... Internet est là, mais en quelque sorte, c'est un langage de programation assez simple.
    p Nous allons, enfin, débuter. 

    h3 initialiser

    p pour débuter, on va devoir mettre ce petit bout de code, dès le debut ! 
    pre
        code(v-highlight).py
            |import cmath as cm                 #pour les calcules des nombres complexes
            |import pandas  as pd               #pour avoir des tableaux assez grands
            |import plotly.graph_objects as go  #pour dessiner de jolie dessin (alias, les graphs)
            |import numpy as np                 #pour les calculs un peu compliqué
            |import math                        #pareille parce que c'est bien ! 
    p Comme ça, j'ai envie de dire : c'est fait ! Si vous n'avez pas le module directement d'installer -je sais que sur 
    a(href="https://colab.research.google.com") google colab
    |  c'est déjà installer- je vous conseille de tout installer, en recherchant sur internet les modules.
    p On va commencer un peu à coder, enfin... A initier notre fonction !
    pre
        code(v-highlight).py
            |def function(x): #definir la fonction math
            |   try:
            |       return x**2 #tester la fonction
            |   except:
            |       return math.nan + math.nan*1j #si vraiment ça ne veut pas, on a un resultat de secours
    p Mainenant, ça va être la partie plus... technique. 
    p On va devoir jouer entre les variables. Le but est d'avoir tout un plan de cordonner pour donner ensuite sa valeur en imaginaires (on vera plus tard pour séparé la partie imaginaire des réels).
    br
    p Donc, d'abord, on initialise un tableau "x" pour qu'elle prenne pour entre 20 et -20 : 
    pre
        code(v-highlight).py x = [y/5 for y in range(-100,101)] #creation d'une liste prenant entre -100/5 = -20 inclu et 101/5 = 20,2 exclu cela prend jusqu'à la valeur 100/5 = 20.
    p avec un pas de 1/5 (0,2).
    p Puis, dans un tableau "x_imaginaire" on y rajoute à fois la longueur de "x". Pour enfin, nous mettre sur un plan de [-20;20] pour x et de [-20;20] pour y et de pas de 0.2.
    pre
        code(v-highlight).py x_imaginaire = x*len(x)
    p Dans -encore- un autre tableau, on y met les "x_imaginaire" mais cette fois trier. Permettant d'avoir des valeurs en boucle sur Y et des valeurs trier sur X (cela va être sans doute plus logique à la fin...)
    pre
        code(v-highlight).py x_real = sorted(x_imaginaire)

    p ENFIN ! On a notre plan, sur le quel on aura toutes nos valeurs. Et logiquiment, ensuite, nos resultats.
    p Mais ce n'est pas fini, il reste le tableau "x" qu'il faut qu'on change. Pour cela, On initialise à une valeur (comme 0) pour pouvoir le re-changer et mettre le nombre entièrement avec sa partie réelle et sa partie imaginaire.
    pre
        code(v-highlight).py
            |x=[0 for x in x_real]
            |
            |for i in range(len(x_real)):
            |   x[i] = x_real[i] + x_imaginaire[i]*1j
    p Là, on a fini l'initialisation des variables, on peut toucher à ce que je pense être plus intèressant : 
    
    
    h3 LE TABLEAU !

    p Avant, cela, regard-on la longueur de "x" pour voir : 
    pre
        code(v-highlight).py print(len(x))
    p ça fait beaucoup ? Bon, en vrai, faut avoir de la ram : c'est sur. Mais ça peut aller si vous êtes avec Gcolab.
    p Mainenant, on va mettre les resultats dans 2 tableaux distincts : 
        
        li  une pour la valeur réelle
        
        li  une pour la valeur imaginaire

    pre
        code(v-highlight).py
            |y_real = [(function(x)).real for x in x] #parti réelle des resultats
            |y_imaginaire= [(function(x)).imag for x in x] #parti imaginaire des resultats

    p Enfin, on met tout ça dans un tableau "panda" ou comme on l'a mis en raccourcis : "pd"
    pre
        code(v-highlight).py
            |df = pd.DataFrame({'x real':x_real,
            |       'x imaginaire':x_imaginaire,
            |       'y real':y_real,
            |       'y imaginaire':y_imaginaire})

    p En faisant
    pre
        code(v-highlight).py df #ou print(df)
    p peut voir toutes les valeurs brutes. Nous permet de voir si notre tableau n'a pas d'erreur.  
    p Maintenant, nous allons tracer ! On a notre tableau, nos resultats... Donc, c'est bon ! On peut tracer.

    pre
        code(v-highlight).py
            |fig = go.Figure(data=[go.Scatter3d(x=df['x imaginaire'], y=df['x real'], z=df['y real'],mode='markers', name="real"),
            |                      go.Scatter3d(x=df['x imaginaire'], y=df['x real'], z=df['y imaginaire'],mode='markers', name="imaginaire")])
            |fig.show() #tracer le graph
    p Voilà, je vous laisse admirer votre travail... Ou le debug, si cela ne fonctionne pas.
    p Si vous voulez changer de fonctions, pour en admirer d'autres, il faut juste changer la fonction du début qu'on avait employer.
    
    p Sinon, je peux vous laisser avec quelques fonctions choisis que j'ai trouver assez stylé (attention, cette fin ne pourra pas être vue par tout le monde. Car ce n'est pas très optimiser... J'arrive avec une mis à jour pour réglé se problème):
    .card.block
        header.card-header 
            p.card-header-title f(x)=x
                sup 2
            button.button.is-primary(style="align-self: center; margin-right:10px" @click="graph_show_1 = !graph_show_1" ) montrer la fonction
        .card-image(v-if="graph_show_1")
                figure.image.is-5by3
                    iframe(src="/math/fonction_carré.html" width="800" height="480" frameborder="0" allowfullscreen).has-ratio
    .card.block
        header.card-header 
            p.card-header-title f(x)=e
                sup x
            button.button.is-primary(style="align-self: center; margin-right:10px" @click="graph_show_2 = !graph_show_2") montrer la fonction
        .card-image(v-if="graph_show_2")
                figure.image.is-5by3
                    iframe(src="/math/fonction_exp.html" width="800" height="480" frameborder="0" allowfullscreen).has-ratio
    .card.block
        header.card-header 
            p.card-header-title f(x)=ln(x)
            button.button.is-primary(style="align-self: center; margin-right:10px" @click="graph_show_3 = !graph_show_3") montrer la fonction
        .card-image(v-if="graph_show_3")
                figure.image.is-5by3
                    iframe(src="/math/fonction_ln.html" width="800" height="480" frameborder="0" allowfullscreen).has-ratio
    .card.block
        header.card-header 
            p.card-header-title f(x)=|x|
            button.button.is-primary(style="align-self: center; margin-right:10px" @click="graph_show_4 = !graph_show_4")  montrer la fonction
        .card-image(v-if="graph_show_4")
                figure.image.is-5by3
                    iframe(src="/math/fonction_abs.html" width="800" height="480" frameborder="0" allowfullscreen).has-ratio
    
</template>


<script>
export default {

    watch: {
        },
    data () {
        return {
            graph_show_1 : false,
            graph_show_2 : false,
            graph_show_3 : false,
            graph_show_4 : false,
        }
    },
    methods: {
    },
    mounted() {
        bulmaCarousel.attach('#carousel', {
                slidesToScroll: 1,
                slidesToShow: 1,
                loop:true
            }); 
    },
}
</script>
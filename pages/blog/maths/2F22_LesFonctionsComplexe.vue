<template lang="pug">
.content
    h1 Les fonctions ?
    p On va reprendre les bases, je ne vais pas m'y atterder. Mais une fonction, en mathématique, c'est quoi ?
    p Normalement, tout le monde à à l'idée f(x)=x
        sup 2
        | ou encore g(x)= 4x+2... Par exemple. Donc, en quelque sorte, une fonction c'est "on prends une valeur x" qui 
        br 
        | "se transforme en une autre valeur f(x) (ou g(x))"

    p Bon, on sait, plus au moins, ce qu'est une fonction... Alors testons ! Je vais prendre la valeur où x=2 :
    p Pour f(x), on a 4 car f(2) = 2
        sup 2 
        | = 4

    p Mais pour g(x), on obtient 10 ! Car g(2) = 4×2+2 = 10

    p Bon, je suis aller assez vite, car ce n'est pas ce qui m'intèresse. Moi, je parle de fonctions complexes. Mais nous ne savons pas ce qu'est un "nombre complexe"

    h1 KESCé un nombre complexe ?

    p En quelque sorte : 
        strong i
        sup 2 
        | = 
        strong -1

    p Si vous ne voyez pas où est le problème, c'est ou que vous connaissez déjà, ou que vous ne connaissez qu'un nombre réel (donc 1,-1,5, racine de 2, ect..) NE FERA JAMAIS un negatif. 
        | C'est assez facile, un nombre multiplier par lui même ne pourra jamais être negatif. 
    p Donc c'est ça le "i" qui va se glisser partout. Mais on pourra aussi parler de "j" qui est dans le principe le même.
    p Les nombres complexes se situ non plus sur une droite, mais sur un plan. Avec pour absicisse les réels, et ordonnée les imaginaires. On notera donc que le point z
        sub 1
        | = 1+3j à pour absicisse 1 et ordonnée 3. (et non "3j" car on prends juste le nombre avant le "j"... sans le "j").

    p On parlera aussi de "parti imaginaire" qui justement la valeur de l'ordonnée et de "parti réel" qui est la valeur réelle

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
    p Comme ça, j'ai envie de dire : c'est fait ! Si vous n'avez pas le module directement d'installer -je sais que sur google colab c'est déjà installer- je vous conseille de tout installer, en recherchant sur internet les modules.
    p On va commencer un peu un coder, enfin. A initier notre fonction !
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
        code(v-highlight).py x = [y/5 for y in range(-100,101)]
    p avec un pas de 1/5.
    p Puis, dans un tableau "x_imaginaire" on y rajoute A fois la longueur de "x". Pour enfin, nous rappatre sur un plan de [-20;20] pour x et de [-20;20] pour y et de pas de 0.2.
    pre
        code(v-highlight).py x_imaginaire = x*len(x)
    p Dans -encore- un autre tableau, on y met les "x_imaginaire" mais cette fois trier. (cela va être sans doute plus logique à la fin...)
    pre
        code(v-highlight).py x_real = sorted(x_imaginaire)

    p ENFIN ! On a notre plan, sur le quel on aura toutes nos valeurs. Et logiquiment, ensuite, nos resultats.
    p Mais ce n'est pas fini, il reste le tableau "x" qu'il faut qu'on change. Pour cela, l'initialise pour être à une valeur (comme 0) pour pouvoir le re-changer et mettre le nombre entièrement avec sa partie réelle et sa partie imaginaire.
    pre
        code(v-highlight).py
            |x=[0 for x in x_real]
            |
            |for i in range(len(x_real)):
            |   x[i] = x_real[i] + x_imaginaire[i]*1j
    p Là, on a fini l'initialisation des variables, on peut toucher à ce que je pense être plus intèressant : 
    
    
    h3 LE TABLEAU !

    p Avant, cela, regardant la longueur de "x" pour voir : 
    pre
        code(v-highlight).py print(len(x))
    p ça fait beaucoup ? Bon, en vrai, faut avoir de la ram : c'est sur. Mais ça peut aller.
    p Mainenant, on va mettre les resultat dans 2 tableaux distincts : 
        
        li  une pour la valeur réelle
        
        li  une pour la valeur imaginaire

    pre
        code(v-highlight).py
            |y_real = [(function(x)).real for x in x] #parti réelle des resultats
            |y_imaginaire= [(function(x)).imag for x in x] #parti imaginaire des resultats

    p Enfin, on met tout ça dans un tableau "panda" ou comme on l'a raccourcis "pd"
    pre
        code(v-highlight).py
            |df = pd.DataFrame({'x real':x_real,
            |       'x imaginaire':x_imaginaire,
            |       'y real':y_real,
            |       'y imaginaire':y_imaginaire})

    p En fessant
    pre
        code(v-highlight).py df #ou print(df)
    p nous pouvons remarquer que le tableau est remplie de valeur... un peu illisible.
    tableauCsv(lien="/math/fonction_carré.csv")
    p Maintenant, nous allons tracer ! On a notre tableau, nos resultat... Donc, c'est bon ! On peut tracer.

    pre
        code(v-highlight).py
            |fig = go.Figure(data=[go.Scatter3d(x=df['x imaginaire'], y=df['x real'], z=df['y real'],mode='markers', name="real"),
            |                      go.Scatter3d(x=df['x imaginaire'], y=df['x real'], z=df['y imaginaire'],mode='markers', name="imaginaire")])
            |fig.show() #tracer le graph
    p Voilà, je vous laisse admirer votre travail... Ou le debug, si cela ne fonctionne pas.
    
    p Sinon, je peux vous laisser avec quelque fonction choisis que j'ai trouver assez stylé :
    
    section.section
        .slider
            #carousel.carousel
                .card
                    header.card-header 
                        p.card-header-title f(x)=x
                            sup 2
                    .card-image
                            figure.image.is-5by3
                                iframe(src="/math/fonction_carré.html" width="800" height="480" frameborder="0" allowfullscreen).has-ratio
                .card
                    header.card-header 
                        p.card-header-title f(x)=e
                            sup x
                    .card-image
                            figure.image.is-5by3
                                iframe(src="/math/fonction_exp.html" width="800" height="480" frameborder="0" allowfullscreen).has-ratio
                .card
                    header.card-header 
                        p.card-header-title f(x)=ln(x)
                    .card-image
                            figure.image.is-5by3
                                iframe(src="/math/fonction_ln.html" width="800" height="480" frameborder="0" allowfullscreen).has-ratio
                .card
                    header.card-header 
                        p.card-header-title f(x)=|x|
                    .card-image
                            figure.image.is-5by3
                                iframe(src="/math/fonction_abs.html" width="800" height="480" frameborder="0" allowfullscreen).has-ratio
        
</template>


<script>
export default {
    mounted() {
        bulmaCarousel.attach('#carousel', {
                slidesToScroll: 1,
                slidesToShow: 1,
                loop:true
            }); 
    },
    methods : {
    }
}
</script>
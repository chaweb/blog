<template lang="pug">
.content
    h1 Intro
    p Pour ce premier article de mon blog, je voulais vous parler de 2 choses que j’aime : Les mathématiques et l’informatique.
    p C’est pour cela, qu’aujourd’hui, je vais vous présenter en détail comment faire un grapher sur python, en 3d, d’une fonction inclu dans l’ensemble des nombres complexes. 
    p Je vais partir du principe que vous êtes au moins en 3eme, certain terme ici pourront en écorché certaine personnes. Même si j'essayerais de faire du tout public.
    h2 Les nombres complexes ?
    p Sans rentrer dans les détails, un nombre complexe permet d’avoir une autre vision des ensembles des nombres. Vous connaissez donc tout les ensembles : 
    br
    p N, Les entiers naturelles : 0,1,2,3,...,11487,...
    p Enfin, il y a en beaucoup.
    br
    p Z, Les entiers relatives: -1,-2,-3,...,-11487,...
    p Les nombres naturelles sont les nombres négatifs, et sont inclus dans les entiers : N inclu dans Z
    br
    p D, les décimaux : 3.5, 2.4, -8.01, ect…
    p Les nombres relatives sont écrit avec la virgules et un nombre qui la suit. Ce sont aussi tout les nombres des ensembles précédents
    br
    p Q, les quotients : ⅓, ⅙, …, -1/547, ect… 
    p Les nombres quotients ont la particularité de s'écrire par la division de 2 nombres entiers
    L’ensemble des quotients inclue les entiers. 
    br
    p R, les réels : pi, racine de 2, ect…
    p Les nombres réels ne peux pas s’écrire simple, se sont souvent des calculs (sauf pour les quotients) qui permette d’avoir leur valeur exact : on peut ni les simplifier par des quotients, ni par des décimaux sans les arrondis. Cette ensemble inclu aussi les ensemble précédents
    br
    p Maintenant, les nombres complexes sont plus… Complexe. On a inventé ses nombres car on devait trouver une solution à des expressions comme racine de -1 ou a x^2+1 = 0 (qui revient au même). Car en électricité, je ne vais m'éterniser sur les calculs, mais certain calcul d'électricité ont ce problème soluble qu’en Mathématique est insoluble. Donc, après certaine convention, le i pour imaginaire en Mathématique ce transforme en j pour la physique (le i étant déjà donner pour l’intensité de la Physique). Sur python, c'est bien le j qui est utiliser, mais n'ayez pas peur en voyant des "i" ou des "j", c'est la même choses. 
    br
    p On a un nouvel ensemble : les Complexes. l’ensemble C. C’est un ensemble assez particulier où i^2 vaut -1. 
    br

    h2 Les fonctions complexes


    p ou fonction à variable complexe pour être précise. Ces sont des fonctions, comme on apprends au collège mais incluant cet ensemble de nombre complexe précédemment montré. 

    p Pour ce qui va faire, à la suite, on aura besoin de python. Si vous ne l’avez pas, je conseille de suivre d’autre tutoriels sur l’installation de python3. Si vous ne voulez pas vous embêter à l’installer sur votre ordinateur, je vous conseille d’aller voir sur 
        a(href="https://colab.research.google.com/") colab.research.google.com
        | cela vous permettra de tout faire sans installation au prérequis. 

    p Pour débuter le code, on aura besoin de quelque module, seuls panda et plotly faudra installer si vous êtes sur votre ordinateur. 

    pre
        code(v-highlight).py
            | import pandas  as pd               #pour avoir des tableaux assez grands
            | import plotly.graph_objects as go  #pour dessiner de jolie dessin (alias, les graphs)
            | import cmath                       #pour des calculs complexes tel que les log ou exponentielle

            | def newRange(start, stop, step=1): #pour pouvoir utiliser des virgulles dans les lists
            |     result = [start]
            |     while stop > result[-1]:
            |         result.append(result[-1] + step)
            |     return result

    p le "newRange" permet d'avoir la même fonction de range mais avec des nombres plus precis, car le vrai range de python ne nous permet d'avoir que des nombres entiers. Si on devait donc avoir des nombres autres, on avait une erreur de la part de python. 

    p Pour dessiner en 3d, faut déjà penser au plan des entrées qu’on devra prendre. L’intervalle et la resolution seront 2 paramètre, cela depend de ce que vous voulez voir et du temps que cela prendra. 

    p Si vous mettez un grand intervalle, votre graphique sera peut être grand. Mais mettra du temps si votre resolution est petite.

    p C'est pour cela que je vous conseille de mettre une resolution pas trop grandes au debut, puis d'affiner vos calcules au fur et à mesure. Après plusieurs essaie, j'ai trouver que pour mon exemple, c'est bien d'être entre -20-20i et 20+20i. Donc mon entré se situe entre [-20,20] pour faire un carée de 40 de coté.

    p puis, ma resolution est de 0.2, c'est comme ça qu'on a une liste de nombre tel que -20, -19.8, -19.6, ... jusqu'à ..., 19.6, 19,8, 20. 

    p Mais ici, on a qu'une liste, qu'on pourrait imaginé être celui des réels, donc, on a fait une droite. Faut l'autre droite, pour chaque réels, on a le même nombre de réels : le -20 va avoir une liste entre -20 et 20, le 19,8 va avoir une liste entre -20 et 20, ect... cela va demander beaucoups de temps si vous n'avez pas de bon ordinateur, c'est la que vient la mise en place du plan : 
    
    pre
        code(v-highlight).py
                | min = -20
                | max = 20
                | intervalle = [min, max]
                | resolution = .2


                | x = newRange(intervalle[0], (intervalle[1] + resolution), resolution)

                | #creation du plan :

                | x_imaginaire = x*len(x) #nombre imaginaire
                | x_real = sorted(x_imaginaire) #nombre real



                | x = [0 for x in x_real] #reset du tableau


                | x = [(x_real[x] + x_imaginaire[x]*1j) for x in range(len(x_real))] 
    p A la fin de ce programe, on a donc un tableau, x, portant comme nombres [-20-20j, -20-19.8j, ...]
    p nombre tableau à 1 dimension, car il n'y a qu'une entré au tableau, permet à lui seul d'avoir un plan de 40 par 40 nombres avec une resolution de 0,2. 

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
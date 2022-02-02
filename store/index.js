export const state = () => ({
    categories: ["math", "web", "python", "programation", "livre", "design", "modelisation"],
    UpCat: ["math", "web", "livre", "design"], //Max 4 ! Sinon, c'est over
    blogs: ([{
        name: "Fonctions complexes",
        tag: ["math"],
        description: "Dessiner des fonctions complexes sur python !",
        url: "/maths/2F22_LesFonctionsComplexe",
        date: "2022-02-02"
    },{
        name: "Les maths, c'est magiques !",
        tag: ["math", "web"],
        description: "Enfin bref !",
        url: "/maths/coucou",
        date: "2022-01-30"
    },{
        name: "Faire du Nuxtjs",
        tag: ["web"],
        description: "Nuxt c'est la vie",
        url: "/maths/coucou",
        date: "2022-01-28"
    },]).sort((a, b) => {return new Date(b.date) - new Date(a.date)})
  })
  
  export const mutations = {
    
  }
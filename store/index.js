export const state = () => ({
    categories: ["math", "web", "python", "programation", "livre"],

    blogs: ([{
        name: "coucou",
        tag: ["math"],
        description: "j'aime les maths !",
        url: "/maths/coucou",
        date: "2022-01-29"
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
export const state = () => ({
    categories: ["math", "web", "python", "programation", "livre", "design", "modelisation"],
    UpCat: ["math", "web", "livre", "design"], //Max 4 ! Sinon, c'est over
    blogs: ([{
        name: "Fonctions complexes",
        tag: ["math"],
        description: "Dessiner des fonctions complexes sur python !",
        url: "/maths/2F22_LesFonctionsComplexe",
        date: "2022-02-02"
    }]).sort((a, b) => {return new Date(b.date) - new Date(a.date)})
  })
  
  export const mutations = {
    
  }
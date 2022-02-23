
export const state = () => ({
    categories: ["math", "web", "python", "programation", "livre", "design", "modelisation"],
    UpCat: ["math", "web", "livre", "design"], //Max 4 ! Sinon, c'est over
    blogs: ([{
        name: "Fonctions complexes",
        tag: ["math", "python"],
        description: "Dessiner des fonctions complexes sur python !",
        url: "/maths/2F22_LesFonctionsComplexe",
        date: "2022-02-02"
    },
    {
        name: "coucou",
        tag: ["secret"],
        description: "juste un coucou",
        url: "/secret/coucou",
        date: "2022-02-01"
    },
    {
        name: "politique",
        tag: ["secret"],
        description: "mon programme politique",
        url: "/secret/politique",
        date: "2022-02-02"
    }]).sort((a, b) => {return new Date(b.date) - new Date(a.date)}), 
    temp : ""
  })
  
export const mutations = {
    TempConf(state, msg){
        state.temp = msg
    }
}

export const action = {
    testVuex({commit}, TestMess){
        console.log("coucou314")
        commit('TempConf', TestMess)
    }
}
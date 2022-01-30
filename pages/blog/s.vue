<template lang="pug">
div 
    h1 blog
    br
    #tag_menu.block
        .tags.has-addons(v-for="(item, index) in search" :key="`search-${index}`")
            span.tag.is-success {{item}}
            nuxt-link.tag.is-delete(:to="`./s?tag=${deleteTag(item)}`")

        .tags.has-addons(v-for="(item, index) in UnselectedCat" :key="`Unselect-${index}`")
            span.tag.is-info {{item}}
            nuxt-link.tag.is-add(:to="`./s?tag=${addTag(item)}`" @click="refresh()")

    .blogs
      preblogs(v-for="item in results" key="name" :name="item.name" :desc="item.description" :date="item.date.split('-')" :url="item.url" :tag="item.tag").block
      
</template>
<style lang="sass" scoped>
#tag_menu
    display: flex
    flex-direction: row
    flex-wrap: wrap
    align-items: flex-start
    & > div
      margin:5px
</style>

<script>
export default {
  methods: {
    deleteTag (id) { 
      if(this.search.length > 1){
        return this.search.filter((f) => {return f != id}).join('%2b')
      }else{
        return ''
      }
    },
    addTag(id){
      if(this.search.length > 0){
        return this.search.concat(id).join('%2b') 
      }else{
        return id
      }
      
    },
    refresh(){
      console.log(refresh)
      this.$nuxt.refresh()
    }

  },
  data () {
    return {
      blogs: this.$store.state.blogs,
      catégories: this.$store.state.categories
    }
  },

    
  computed: {
    search () {
      try{ 
        return this.$route.query.tag.split('+')}
      catch{
        return false
      }
    },

    UnselectedCat(){
      return this.search !== false ? this.catégories.filter((item) => {return !this.search.includes(item)}) : this.catégories
    },
    
    results(){
        return (this.search !== false ? this.blogs.filter((blog) => {return blog.tag.some(elem => {return this.search.includes(elem)})}) :  this.blogs)
    }
  },
    
}
</script>
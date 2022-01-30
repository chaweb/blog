<template lang="pug">
    article.message.is-danger
        .message-header 
            p {{title}}
            button.delete
        .message-body {{text}}
</template>

<script>
export default {
    setup() {
        
    },
    props: ['title', 'text']
}
</script>
<template lang="html">

    <div class="">
        <div class="sort-container">
            <button type="button" name="button" @click="sortNewest()">Newest</button>
            <button type="button" name="button" @click="sortOldest()">Oldest</button>
        </div>
        <div v-for="(page, index) in site" :key="index" class="">
            <h2><a :href="page.path">{{page.title}}</a></h2>
            <div class="article-grid">
                <p>{{page.frontmatter.snippet}}</p>
                <div class="article-details">
                    <p class="article-topic" :class="page.frontmatter.topic">
                        {{page.frontmatter.topic.toUpperCase()}}
                    </p>
                    <p>
                        {{page.frontmatter.date}}
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: ['siteMetaData'],
    data: function(){
        return{
            site: this.siteMetaData.pages
                        .filter(page => (page.frontmatter.topic))
                        .filter(page => (new Date(page.frontmatter.date) <= new Date()))
                        .sort((a,b) => ((new Date(b.frontmatter.date) - new Date(a.frontmatter.date))))
        }
    },
    methods:{
        sortNewest: function(){
            this.site
                .sort((a,b) => ((new Date(b.frontmatter.date) - new Date(a.frontmatter.date))))
        },
        sortOldest: function(){
            this.site
                .sort((a,b) => ((new Date(a.frontmatter.date) - new Date(b.frontmatter.date))))
        }
    },
    computed:{
    }
}
</script>

<style lang="css" scoped>
</style>

module.exports = {
    title:'Blog',
    themeConfig:{
        nav:[
            {text:'JAVASCRIPT', link:'/javascript/'},
            {text:'PYTHON', link:'/python/'},
            {text:'SQL', link:'/sql/'}
        ],
        sidebar:'auto',
        plugins:[
            [
                    '@vuepress/google-analytics',
                {
                    ga: '' // UA-00000000-0
                }
            ],

        ]
    }
}

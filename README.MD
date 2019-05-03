# [VuePress](https://vuepress.vuejs.org/) Blog Template

This is a standard template to get you started with a VuePress Blog template

## Features
1. Write articles in Markdown
2. Sort articles by newest/oldest
3. Post-dated articles

It's a pretty simple template, VuePress allows you to hook Google Analytics up easily with a plugin. If you want that, just go to .vuepress/config.js and add your analytics tracking ID.

If you want to post-date articles, simply date the article in the future, and the page won't be published until that date.

You can change the color of the topics in the style.styl file. The frontmatter topic is added to the html element as the class, so the naming convention is the css class needs to have the same name as the frontmatter topic.

## Installation
Make sure you have [VuePress installed](https://vuepress.vuejs.org/guide/getting-started.html#global-installation) first

Navigate to the directory where you want to store this project

Clone the repo for local development
`git clone https://github.com/WarrenJohn/vuepress-blog.git`

Change current working directory into project with
`cd vuepress-blog && cd blog`

Initialize the dev server with
`vuepress dev`

Build for production with
`vuepress build`

Modify layout, styles & components with
`vuepress eject`

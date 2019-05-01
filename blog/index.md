<h1>Vue Press Blog</h1>

## This is on the sidebar

The first markdown syntax heading is used as the sidebar 'title'

<h2>This isn't,</h2>

<div>
## and markdown syntax doesn't work inside an HTML element either.
</div>

Using HTML as a heading will exclude it from the sidebar

## Components
You can use Vue components directly in the markdown by creating a component:
<pre>
<code> / -> .vuepress/ -> components/ -> Articles.vue component</code>
</pre>

Then in your myFile.md file:
<pre>
<code><'Articles :somePropIfYouWant="prop"/></code>
</pre>

(Remove the quote after the < bracket, I did that so the formatting would work.)

## Articles
<Articles :siteMetaData='$site'/>


### The page meta data

This is the data about the page that you can use in Vue components, methods and whatever else you want.

<pre>
    {{ $page }}
</pre>


### The site meta data

This is the data about the site that you can use in Vue components, methods and whatever else you want. This is how I have gotten all the articles on the main page.

<pre>
    {{ $site }}
</pre>

![Promo image](images/promo-image.png)
# Encore - An Obsidian Theme
**Goals**
- Keep the spirit of the default theme
- Increase visual clarity
- Increase the level of polish
	- *Especially for translucent mode!*

# Installation
Copy `obsidian.css` into your themes folder (there's a link to it in the app), you might want to rename it to **Encore.css** so you can see it's name in the theme browser.

# How to Edit
**Note to self in case I forgor**

You'll need node.js, since I'm using SASS.

1. Clone the repo, and run `npm install`
2. Use `npm run dev` to make SASS watch for changes and compile to `themes/Encore.css`
3. Create a symbolic link from this themes folder over to the actual themes folder in Obsidian
4. Edit the files inside `./source`

That's just the way I've set it up, you can also follow [this article](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Guides/Want+some+Sass+with+your+obsidian+theme%E2%80%BD+here's+How+and+Why) if you want to see another, simpler way.

The symbolic link is there so built css files are loaded straight into obsidian.
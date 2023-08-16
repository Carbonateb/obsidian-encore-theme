---
banner: Pasted image 20230802003837.png
---
# A typical markdown file

This file was designed as the *gold standard* markdown file. It is properly formatted according to [Google's Markdown style guide](https://google.github.io/styleguide/docguide/style.html). The most important part of the guide (for Encore) is where it says when blank lines should be used.

## The Blank Line Problem

**Spacing between paragraphs** is very important for making a nice looking document. In the rendered view, this is easy to achieve as we can simply look at what the user intended to do and apply our own spacing, disregarding how many newlines the user actually entered. However, in Obsidian's source view, we are forced to render all empty lines, which means we need to take into consideration the spacing added by blank lines.

My first, naïve attempt at this assumed that the user would put as few blank lines as possible, making the markdown file super compact. This worked, and for notes created with this system in place, *it actually looked pretty good*. The issue was that most markdown files have much more spacing in them, causing them to look really bad. And, files created with this system in mind also looked bad when viewed from other editors.

### The Solution: Respect Standards

Here is where **Google's style guide** comes in. Many markdown files (from my experience) are formatted according to this guideline, and automatic file formatters will generally follow these rules. ***This means we can assume that most markdown files will look like this, so we can now tweak spacing to make them look especially good.***

#### Make Other Styles of Markdown Nice Still

While this theme will focus on Google's standard, where a single newline is inserted between most blocks, I will make sure that other styles still look reasonably good. In my naïve attempt, if you didn't follow the assumed style, your markdown file would be rendered with a hideous amount of white space. We don't want to repeat that mistake.

---

Now it's time to just write a bunch of crap to test all edge cases. For example, in this block, we tested what a horizontal rule looks like when surrounded by text. Later on, we'll test a horizontal rule that have other elements around, such as headers.

# Header 1 • Let the Dogfood Begin

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

Headers 5 and 6 should be avoided, do not nest your content that much. Generally, try to stick to 4 levels at most. Header 2 should be the most common, with Header 1 only being used at the very top of the file, and in any new *major* sections of the content.

## **Bullet** Lists

- Here are some bullet lists
- This one has a Header 2 above it, but we may want to try some surrounded by text
- Here's a third entry
	- It also has an indent, that's pretty coo
- One more

### ~~More Bullet Lists~~ *Actually, Numbered Lists*

Now let's imagine we have a paragraph before the bullet list

1. Sike, we are using a numbered list
2. Numbered lists should have the same spacing as bullet lists anyways
	1. So this isn't really an issue
3. Hopefully this looks good

Here's some text to finish off the list

## Variation: ==Checklist==

- [ ] Checklists are really useful!
- [ ] I personally use them a lot in my Obsidian vault
	- [ ] So I want to make sure they look good
- [ ] Sometimes, it's necessary to write a lot inside a checklist. So, we need to make sure that it looks fine still. Here's some more text to make sure it wraps at least once. Maybe you have some super ultra wide monitor.
- [ ] Another one to tie it off
- [x] A completed one. Good job!

---

# Horizontal Rule

We just tested what a horizontal rule looks like when placed above a header 1. Nice!


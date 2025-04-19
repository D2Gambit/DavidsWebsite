# David's Website
This repo is a training exercise to teach David HTML, CSS, and Javascript.
We will document our learnings in this readme.

1. Basics of HTML (Heading 1 and Paragraph)
```dtd
<!DOCTYPE html>

<html>
    <body>
        <h1>David's Website</h1>
        <p>
            This is a paragraph on David's website. We are learning HTML together and we are going to build an awesome website!
            If you don't believe me, just watch and see! We're doing this because we're bored.
        </p>
    </body>
</html>
```

2. Basics of Github

`git pull origin main` - Downloads the latest changes from main, essentially updating your main branch (trunk)

`git checkout -b my-branch-name` - Creates a new branch called "my-branch-name" so that our new code exists only on 
this new branch

`git add index.html` - Now that we've updated a file, in this case `index.html`,
we want to "package" that file into our cardboard box

`git commit -m "Updated index.html by changing X"` - This message is the human-readable message that we write on the
side of our cardboard box

`git push origin my-branch-name` - Push the box to the amazon warehouse (to github repository)

Lastly, we need to create a pull request so that our peers can review and merge the changes.

3. Basics of CSS

Inline CSS: `<p style="font-weight: bolder; font-style: italic;">` - We can write some quick CSS in the HTML to style things individually

External CSS: 
```
<head>
<link rel="stylesheet" href="theme.css">
</head>
```
By linking to a separate css file `theme.css`, we're able to reference all of our styling and keep our project clean

`id="para2"` - By using an ID in our second div, we were able to style div 2 separately without modifying div 1

`class="headings"` - By using a class for all of headings (H1 and H2), we were able to style the headings and apply an underline to the text through css

We can reference classes in CSS by using the `.headings` DOT operator. We can reference IDs by using the `#para2`.

Lastly, we learned about padding and margin. Padding spaces out the inside of your box, while margin adds spacing to the outside of your box.
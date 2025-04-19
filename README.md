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
<!-- ## What is the difference between merging and rebasing?
The first thing to understand about git rebase is that it solves the same problem as git merge. Both of these commands are designed to integrate changes from one branch into another branch—they just do it in very different ways.
Consider what happens when you start working on a new feature in a dedicated branch, then another team member updates the main branch with new commits. This results in a forked history, which should be familiar to anyone who has used Git as a collaboration tool.
![alt text](https://wac-cdn.atlassian.com/dam/jcr:1523084b-d05a-4f5a-bd1a-01866ec09ca3/01%20A%20forked%20commit%20history.svg?cdnVersion=140)
Now, let’s say that the new commits in main are relevant to the feature that you’re working on. To incorporate the new commits into your feature branch, you have two options: merging or rebasing

# The Merge Option
The easiest option is to merge the main branch into the feature branch using something like the following:
```
git checkout <your-feature-branch>
git merge <main-branch>
```
Or equivalent to this one-liner:
```
git merge <feature-branch> <main-branch>
```
This creates a new “merge commit” in the feature branch that ties together the histories of both branches, giving you a branch structure that looks like this:
![alt text](https://wac-cdn.atlassian.com/dam/jcr:4639eeb8-e417-434a-a3f8-a972277fc66a/02%20Merging%20main%20into%20the%20feature%20branh.svg?cdnVersion=140)
Merging is nice because it’s a non-destructive operation. The existing branches are not changed in any way. This avoids all of the potential pitfalls of rebasing (discussed below).
On the other hand, this also means that the feature branch will have an extraneous merge commit every time you need to incorporate upstream changes. If `main` is very active, this can pollute your feature branch’s history quite a bit. While it’s possible to mitigate this issue with advanced `git log` options, it can make it hard for other developers to understand the history of the project.
 -->
# Step-by-step rebasing tutorial
## Before rebasing
It’s safer to back up your branch before rebasing to make sure you don’t lose any changes. For example, consider a feature branch called `my-feature-branch`:
1. Open your feature branch in the terminal:
```
git checkout my-feature-branch
```
2. create a new backup branch from it:
```
git checkout -b my-feature-branch-backup
```
3. Go back to your original branch:
```
git checkout my-feature-branch
```

Now you can safely rebase it. If anything goes wrong, you can recover your changes by resetting `my-feature-branch` against `my-feature-branch-backup`:
1. Make sure you’re in the correct branch (`my-feature-branch`):
```
git checkout my-feature-branch
```
2. Reset it against my-feature-branch-backup:
```
git reset --hard my-feature-branch-backup
```

Note that if you added changes to my-feature-branch after creating the backup branch, you lose them when resetting.

# Let's start with rebase

1. Update your local main branch to be the same as the remote main:
```
git checkout main
git pull origin main
```
2. Checkout your feature branch:
```
git checkout my-feature-branch
```
3. Rebase it against main:
```
git rebase main
```
4. At this point, 2 different things can happen:

    a. Automatically rebased successfully without detecting any merge conflicts. يا بختك <br/> &emsp;All you have to do now is force push your branch :) <br/> Then you can open a pull request, as it can be safely merged with the main branch.

```
        git push --force origin my-feature-branch
```
<br/> &emsp; b. Automatic rebasing failed and merge conflicts are detected. Let's walkthrough step-by-step how to resolve the merge conflicts.
    &emsp; 

## Resolving merge conflicts
1. You can identify which files have merge conflicts using the command `git status`, these files will be shown as `both modified: <file_name>`
2. Open each of these files (the files next to "both modified:") using your favorite text editor (I prefer VS Code), The editor will show you every change in the file and you will choose one of 3 options:
    
    a. Keep Existing Changes: These are the changes that exist in the main branch.
    
    b. Keep Incoming Changes: These are the changes that exist in your branch.
    
    c. Keep Both Changes.
    <br/><br/>**Remember:** Never choose the option "Accept all incoming changes" or "Accept all existing changes"! This can be very dangerous, you can overwrite changes and we will never know!
3. After you are done with fixing all conflicted files:
```
git rebase --continue
```
This command will resume the automatic rebasing, and 2 things might happen: <br/>&emsp;a. Rebasing finished successfully: Go to step 4. <br/>&emsp;b. Merge conflict detected: Go to step 1 and do the same.

4. Force push to your branch:
```
git push --force origin my-feature-branch
```
Now you can safely open a pull request.
    

What is the meaning of “Remote Repository”?
===========================================

A remote repository is a version of the project that is hosted on the internet, on some remote computer, which works as a common center for all collaborators on a project. The remote repository is where the latest version of a project can be accessed and when someone decides to collaborate on a project, clones the latest version of the remote repository. By default, when cloning a repository, git names the remote `origin`, and the main branch `main` (previously known as `master`).

To view a repository’s remote use the command `git remote`

```bash
% git remote
origin
```

* * *

Local Repository (After Cloning)
================================

Upon cloning a remote repository using `git clone` command, a new directory will be created locally on your machine with the repository’s name (or use `git clone <preferred name>` to change the repository’s name locally) and by default, a local branch will be created with the name `main` that is up to date with the remote’s `main` branch. You can use `git branch` to determine the current branch you’re on, which is denoted by an asterisk **“\*”**

```bash
% git clone https://github.com/OJ-Graduation-Project/online-judge-frontend.git
Cloning into 'online-judge-frontend'...
remote: Enumerating objects: 285, done.
remote: Counting objects: 100% (285/285), done.
remote: Compressing objects: 100% (186/186), done.
remote: Total 285 (delta 127), reused 235 (delta 86), pack-reused 0
Receiving objects: 100% (285/285), 9.05 MiB | 5.58 MiB/s, done.
Resolving deltas: 100% (127/127), done.
% cd online-judge-frontend 
% git branch
* main
```

* * *

Working on Feature Branches
===========================

Directly after cloning, it is guaranteed that your local `main` branch is **up-to-date** with the remote `main` branch, where at this point in time you create your `feature` branch that branches right out of your local `main` branch and start developing your feature. You can create a new branch using

`git branch -b <new_branch_name>` (The flag -b is to create the branch and check it out, and by default, the new branch is created from the current branch you’re on. You can append an existing branch name to the command which bases the new branch off of the mentioned one).

```java
——— local main branch ————O
					   	   		\
	  					     	 \
	    					  	  \	
							       ——— FB/1 ——>
```

What happens if you finish your work and want to merge to the main branch after some time has passed? What if your **local** `main` is no longer in sync with the **remote** `main`? Maybe other collaborators have merged their branches successfully on the remote repository, which is not yet present at your local repository. Before merging your work, you should make sure you’re merging to the latest version to avoid conflicts.

```java
——— remote main branch ————O————O————O————O————————>
——— local main branch ————O
					   	   		\
	  					   		 \
	    					  	  \	
							       ——— FB/1 ——>
```

* * *

How to Sync Local With Remote to Merge Successfully?
====================================================

First, you will need to stage your untracked/modified files, and you can do this by using the command `git status` to keep track of which files are staged/modified/untracked and add them using `git add <filename>` or `git add .` to add all if you want to stage all of them.

Then check out to your local main branch using the command `git checkout main` (verify you’re on main using `git branch`) and fetch the changes that happened from the remote main to your local main using `git fetch origin`. If any changes happened to the remote `main` that your local `main` hadn’t been notified of, the command will show the commits that you are missing (**but it will not merge them yet**).

In order to merge them, you will need to perform `git pull` which will fetch the changes and merge them to your local main. If any conflicts occur at any point, you will need to resolve them, then redo the steps.

After pulling successfully, your local main will be up to date and identical to the remote main.

```java
——— remote main branch ————O————O————O————O————————>
                                |    |    |  
                                v    v    v    
——— local main branch ————O—————O————O————O————————>
					   	       \
	  					        \
	    					      \	
							        ——— FB/1 ——>
```

Now to make sure your feature branch will merge successfully, checkout your feature branch using `git checkout FB/1` then pull the changes from your local main to it using the command `git pull origin main`, if no conflicts occur, then you can merge successfully OR rebase your feature branch on top of your new up to date main using `git rebase main`.

Now you can commit your files, amend to a previous commit or commit then [Squash](https://onlinejudge.atlassian.net/wiki/spaces/OJ/pages/33060/Squash) your commits, and finally open a pull request to get your branch merged to the remote `main` branch.
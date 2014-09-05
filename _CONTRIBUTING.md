##Git Workflow##
<h3> Starting Up
1. Make your own fork of the repo from Github.com
2. Clone down your fork
	- run npm install from the home directory
	- run bower install from the home directory
3. Create a remote head on logos/master
````
> git remote add production https://github.com/Solano-Ventures/logos.git
````


<h3> Making Contributions
1. Navigate to your 'master' head:
````
> git checkout master
````
2. Pull down the latest state of the production Repo
````
> git pull --rebase production master
````
3. On the Github.com Solano-Ventures project page, make a new issue for the work you want to do

4. Create a new branch for the work you want to do:
  - feat/
  - fix/
  - doc/
  - cleanup/

  ````
  > git checkout -b feat/thing_im_building
  ````
5. Do your work, making commits as you go
````
> git commit -m 'add part1 of thing'
````
6. When you're done with your feature use rebase to make sure it doesn't conflict with the current state of production
````
> git pull --rebase production master
````
7. If everything looks good, use git rebase -i to squash any commits you dont want
````
> git rebase -i production/master
````
8. Push to your Fork
````
> git push origin feat/thing_im_building
````
9. Go to GitHub.com and make a pull request, use the @username to signal to the team that you've got a pull request
10. As a team, responding to pull requests is really important, so if you see one, take a minute to check it out
11. If the pull request looks good, merge it - the team member responsible for the merge is also responsible for closing out the issue.
12. Done! Let me know if you have any questions: _mccloud.christopher@gmail.com_

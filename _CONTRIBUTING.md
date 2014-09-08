Git Workflow
=====================

# Install

- [ ] Make your own fork of the repo using Github.com
- [ ] Clone down your fork
- [ ] Install Grunt command line. If you receive an error you may need to run the command as admin using sudo
```
> 'npm install -g grunt-cli'
```
- [ ] Install server dependencies.
```
> 'npm install'
```
- [ ] Install client dependencies.
```
> 'bower install'
```
- [ ] If all loads correctly proceed, otherwise please contact cmccloud
- [ ] Create a remote head on logos/master:
```
> git remote add production https://github.com/Solano-Ventures/logos.git
```
- [ ] Confirm the remote was added:
```
> git remote -v
```

# Run the Application

To run the application:

1. Run the node server
> 'node server.js'
```

2. In a separate terminal window, run mongo
> 'mongod'
```
3. In your browser, go to localhost:8000
```

# Making Contributions

1. Navigate to your 'master' head:
 ```
 > git checkout master
 ```
 
2. Pull down the latest state of the production repo
 ``` 
 > git pull --rebase production master
 ```
 
3. On the Github.com Solano-Ventures project page, make a new issue for the work you want to do

4. Create a new branch for the work you want to do:
  - feat/
  - fix/
  - doc/
  - cleanup/

  ```bash
  
  # Creates your branch and brings you there
  > git checkout -b feat/thing_im_building
  ```
  
5. Do your work, making commits as you go
 ```
 > git commit -m '(feat) add part1 of thing'
 ```
 Make commits to your feature branch using the following naming scheme and make sure that you only make changes that are relevant to this branch. If you find yourself making unrelated changes, make a new branch for those changes. Add prefixs to each commit like so
  - (feat) Added a new feature
  - (fix) Fixed inconsistent tests [Fixes #0]
  - (refactor) ...
  - (cleanup) ...
  - (test) ...
  - (doc) ...

6. When you're done with your feature, use rebase to make sure it doesn't conflict with the current state of production but executing:
 ```
  > git pull --rebase production master
 ```

7. If everything looks good, use git rebase -i to squash any commits you dont want to see in your pull request
 ```
 > git rebase -i production/master
 ```

8. The first of two dialogues will appear.  Make sure that only the first commit is set to 'pick'; all subsequent commits should be changed from pick to 'squash'.  Feel free to modify the comitt messages as you see fit.
 ```
 pick 5ae442f (feat) COMMIT MESSAGE THAT WILL SHOW ON MASTER
 squash 95055b4 (feat) this description is not critical
 squash 43beba7 (feat) this description is not critical
 ```
 
9. Push to your fork
 ```
 > git push origin feat/thing_im_building
 ```
 
10. Go to GitHub.com and make a pull request, use the @username to signal to the team that you've got a pull request
11. As a team, responding to pull requests is really important, so if you see one, take a minute to check it out
12. If the pull request looks good, merge it - the team member responsible for the merge is also responsible for closing out the issue.
13. Done! Let me know if you have any questions: _mccloud.christopher@gmail.com_

If you follow all of these guidelines and make good changes, you should have no problem getting your changes merged in.
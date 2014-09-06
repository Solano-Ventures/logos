## MongoDB Errors

##### directory does not exist when starting
You created the directory in the wrong place or it does not exist
```
*********************************************************************
 ERROR: dbpath (/data/db) does not exist.
 Create this directory or give existing directory in --dbpath.
 See http://dochub.mongodb.org/core/startingandstoppingmongo
*********************************************************************
```
create the directory
```
> sudo mkdir -p /data/db 
```

##### permission denied when starting
error
```
[initandlisten] exception in initAndListen: 10309 Unable to create/open lock file: /data/db/mongod.lock errno:13 Permission denied Is a mongod instance already running?, terminating
```
solution
To see the permissions and ownership of the '/data/db/' directory, do this: (this is what the permissions and ownership should look like)
```
$ ls -ld /data/db/
drwxr-xr-x 4 mongod mongod 4096 Oct 26 10:31 /data/db/
```
The left side 'drwxr-xr-x' shows the permissions for the User, Group, and Others. 'mongod mongod' shows who owns the directory, and which group that directory belongs to. Both are called 'mongod' in this case.

If your '/data/db' directory doesn't have the permissions and ownership above, do this:

sudo chmod 0755 /data/db
sudo chown $USER /data/db

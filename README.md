# FullStackWebsiteDevelopment
## Local build and run instructions
1. Install NVM on your system.
    - [nvm install](https://github.com/coreybutler/nvm-windows/releases)

2. During installation, avoid a path where the name involves a space to avoid any problems while running nvm in terminal.

3. Open Git Bash terminal in admin mode and list the installed node versions using `nvm list`

4. Version currently active has a `*` before its name.

5. You need `node 14.15.1` to build and run this project.

6. If the list doesn't have this version you need to install it using nvm. To install the version, enter the following command:
    - `nvm install 14.15.1`

7. List the versions once again to make sure that the installation was successful then, restart the terminal.

8. Go to the `sae-nitkkr` directory in `FullStackWebsiteDevelopment` and switch to the version:
    - `nvm use 14.15.1`

9. Run `npm install` to install all packages required for running the project.

10. Finally, run `npm start`.

Hooray!! Your project will take some time to build and run on `localhost:3000`. Make sure no other app is using that port.


# Firebase Deployment
1. Install Firebase CLI globally.
   `npm install -g firebase-tools`
2. Go to `sae-nitkkr` directory in `FullStackWebsiteDevelopment` and update build after making changes.
   `npm run build`
3. Login to firebase if using first time.
   `firebase login`
4. Deploy on firebase (Must have permissions to deploy) 
   `firebase deploy`

Website will be updated successfully !!!

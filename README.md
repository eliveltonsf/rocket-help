 <h5 id="title" align="center"><img style="width: 300px; height:200px;" src="https://raw.githubusercontent.com/eliveltonsf/rocket-help/438cd571d3ab69559c8243fa81a7e5cbfc79c12b/src/assets/logo_primary.svg"/>
 </h5>

 <h4 id="title" align="center"></h4>

<h4 align="center"></h4>

<br/>
<br/>

<h3>
  <p id="badges" align="center">
    <img src="https://img.shields.io/badge/-REACT Native-000?style=for-the-badge&logo=REACT&logoColor=2599ED"/>
    <img src="https://img.shields.io/badge/typescript-000?style=for-the-badge&logo=typescript"/>
    <img src="https://img.shields.io/badge/Expo-000?style=for-the-badge&logo=expo"/>
    <img src="https://img.shields.io/badge/android-000?style=for-the-badge&logo=android"/>
    <img src="https://img.shields.io/badge/google fonts-000?style=for-the-badge&logo=googlefonts"/>
    <img src="https://img.shields.io/badge/firebase-000?style=for-the-badge&logo=firebase"/>
    
  </p>
<hr/>
<h3 id="description">
Application to control tasks with the entire flow of manipulation such as creation, change of status, deletion and listing with pagination with a limit of 5 items per page.
</h3>

<br />

- [Title and image](#title)
- [Badges](#badges)
- [Description](#description)
- [Status of project](#status)
- [Project's goal](#objective)
- [Functionalities](#functionalities)
- [Prerequisites](#prerequisites)
- [Server Demo](#serverdemo)
- [Client Demo](#clientdemo)
- [Technologies](#techonologies)

<br />

<h4 id="status" align="center">
  Project README 🚀 Finished ✔️
</h4>

<h2 id="objective" name="objective">
🎯 Project's goal
</h2>

This project is part of one of [Rocketseat](https://www.rocketseat.com.br/) innovative weeks, where it was launched around June 2022, deciding to redo it to have my first contact with Firebase in a mobile project as well as seeing the update flow of an older project, was Very simple, but challenging.

<br />

<h2 id="functionalities" name="functionalities">
📋 Functionalities
</h2>

- [x] - CREATE ACCOUNT: Registration screen where you receive email, password and password confirmation and implement the firebase method [createUserWithEmailAndPassword](https://rnfirebase.io/reference/auth#createUserWithEmailAndPassword), to create your registration, as this method already validates the user and automatically logs in, I implemented a [firabase signOut](https://rnfirebase.io/reference/auth#signOut) so that once the account is created return to the login screen.
- [x] - LOGIN/AUTH: The login screen where you receive email and password was implemented with the firebase signInWithEmailAndPassword method, to validate whether email and password exist and authenticate the user.
- [x] - LIST REQUEST: On the home screen, there is a list of requests filtered by open or closed status. The implementation of this list is done through the firebase [firestore().collection("orders")](https://rnfirebase.io/reference/firestore#collection) method, where it returns all information about registered requests, using properties such as [where](https://rnfirebase.io/reference/firestore/query#where), I can tell firestore which type of value I want to list.
- [x] - CREATE REQUEST: To create a new request, the Firebase [firestore().collection("orders").add()](https://rnfirebase.io/reference/firestore/collectionreference#add) method was used, where it receives an object containing all the information necessary to save a new order in the database
- [x] - UPDATE REQUEST: To update a request, the Firebase method [firestore().collection("orders").doc().update()](https://rnfirebase.io/firestore/usage#updating-documents) was used, where the request id is the document and passes an object containing all the information necessary to save it within the update a new order in the database.

<br/>

<h2 id="domain" name="domain">
🌐 App download - APK
</h2>

####   [APK RocketHelp](https://drive.google.com/file/d/173BoS0ekUF39vHuqkBQ420CSpFnZazR0/view?usp=sharing)

<br/>

<h2 id="prerequisites" name="prerequisites">
⌨️ Prerequisites
</h2>

To download the project repository on your machine, you will need to run the following commands:

```bash
# Clone the repository in some directory of your computer
$ git clone https://github.com/eliveltonsf/rocket-help.git

# Enter in the repository
$ cd rocket-help
```

<br/>

NOTE: To run the application you need to have a virtual machine emulating a mobile device on your machine, or enable USB debugging on the physical device.

[See examples of using Android Studio's AVD](https://developer.android.com/studio/run/managing-avds?hl=pt-br)


Taking into account that you already have a device configured to run the project, perform the following steps:

```bash
# Enter in the repository server
$ cd rocket-help

# Install the dependencies
$ npm install

# Start application server
$ npx expo run:android
```

After executing the command, you will get the following return in your terminal console:

<img src="https://raw.githubusercontent.com/eliveltonsf/rocket-help/main/src/assets/BuildSuccessFul.png"/>




<h2 id="serverdemo" name="serverdemo">
🎥 App Demo 
</h2>
<br/>
<img src="https://raw.githubusercontent.com/eliveltonsf/rocket-help/main/src/assets/toastError.gif"/>

<br />
<br />
<br />

<h2 id="clientdemo" name="clientdemo">
🎥 App Screens 
</h2>
<br />
<img src="https://github.com/eliveltonsf/rocket-help/blob/main/src/assets/login.png?raw=true"/>
<br />
<br />
<img src="https://github.com/eliveltonsf/rocket-help/blob/main/src/assets/createdAccount.png?raw=true"/>
<br />
<br />
<img src="https://github.com/eliveltonsf/rocket-help/blob/main/src/assets/home-open.png?raw=true"/>
<br />
<br />
<img src="https://github.com/eliveltonsf/rocket-help/blob/main/src/assets/Home-closed.png?raw=true"/>
<br />
<br />
<img src="https://github.com/eliveltonsf/rocket-help/blob/main/src/assets/register.png?raw=true"/>
<br />
<br />
<img src="https://github.com/eliveltonsf/rocket-help/blob/main/src/assets/detail-open.png?raw=true"/>
<br />
<br />
<img src="https://github.com/eliveltonsf/rocket-help/blob/main/src/assets/detail-closed.png?raw=true"/>
<br />
<br />
<br />

<h2 id="clientdemo" name="clientdemo">
🎥 Firebase Screen 
</h2>
<br/>
<img src="https://github.com/eliveltonsf/rocket-help/blob/main/src/assets/firebase%20users.png?raw=true"/>
<br />
<br />
<img src="https://github.com/eliveltonsf/rocket-help/blob/main/src/assets/firebase%20orders.png?raw=true"/>
<br />
<br />
<br />
<h2 id="techonologies" name="technologies">
🚀 Technologies
</h2>

- [React Native](https://reactnative.dev/)
- [native-base](https://nativebase.io/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Typescript](https://www.typescriptlang.org/)
- [Expo](https://docs.expo.dev/get-started/installation/)
- [Firebase](https://firebase.google.com/?hl=pt-br)
- [React Native Firebase](https://rnfirebase.io/)

<hr>

Made with 🧡 By Elivelton Ferreira. [Get in touch!](https://www.linkedin.com/in/eliveltonsf/) :calling:

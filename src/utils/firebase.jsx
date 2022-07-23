import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
	apiKey: "AIzaSyCdiJQmvfHTws__DEHyms-0v76aiP46okc",
	authDomain: "july-gs.firebaseapp.com",
	databaseURL: "https://july-gs-default-rtdb.firebaseio.com",
	projectId: "july-gs",
	storageBucket: "july-gs.appspot.com",
	messagingSenderId: "1022517334617",
	appId: "1:1022517334617:web:8265169ff828c54bf81748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

writeUserData("3",'seko','qwe@gmail.com','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jMRT5DR4dQzc-Vc8NI7VhxD3pHsTpUm6tWLXKoDU3g&s')
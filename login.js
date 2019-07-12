// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCYy184KqeCA94OgsKMqI71V2OqZRzQbnE",
    authDomain: "loginform-1472b.firebaseapp.com",
    databaseURL: "https://loginform-1472b.firebaseio.com",
    projectId: "loginform-1472b",
    storageBucket: "loginform-1472b.appspot.com",
    messagingSenderId: "214104025520",
    appId: "1:214104025520:web:01c268bbd6d73f2a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Users refer
//var usersRef = firebase.database().ref('users');

const emailField = document.getElementById('emailField');
const passwordField = document.getElementById('passwordField');
//const registerEmail = document.getElementById('emailRegister');
//const registerPass = document.getElementById('passwordRegister');
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const logoutButton = document.getElementById('logoutButton');

/*	
function login(email, password){
		firebase.auth().signInEmailAndPassword(email, password).catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		window.alert("Error: " + " " + errorMessage);
 		 // ...
		});
		print(firebase.auth().currentUser);
		alert("login efetuado com sucesso!");
	}
*/
	loginButton.addEventListener('click', e => {
		const email = emailField.value;
		const pass = passwordField.value;
		const auth = firebase.auth();
		const promise = auth.signInEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	});

	registerButton.addEventListener('click', e => {
		const email = emailField.value;
		const pass = passwordField.value;
		const auth = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	});

	logoutButton.addEventListener('click', e => {
		firebase.auth.signOut();
	});

	firebase.auth().onAuthStateChanged(firebaseUser => {
	  if (firebaseUser) {
	    console.log(firebaseUser);
	    logoutButton.classList.remove('hide');
	  } else {
	    console.log('Não está logado');
	    logoutButton.classList.add('hide');
	  }
	});


//registra o usuario ao DB do firebase
/*
	function register(email, password){
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});
		closeForm();
		alert("Cadastro efetuado com sucesso!");
	}

	function openForm() {
		document.getElementById("registerPopup").style.display = "block";
	}

	function closeForm() {
		document.getElementById("registerPopup").style.display = "none";
	}
*/	
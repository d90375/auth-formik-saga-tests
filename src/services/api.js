import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../config";

class ApiService {
  constructor(firebaseConfig) {
    this.fb = firebase.initializeApp(firebaseConfig);
  }

  signUp = (email, password) =>
    this.fb.auth().createUserWithEmailAndPassword(email, password);

  onAuthChange = (callback) => this.fb.auth().onAuthStateChanged(callback);

  fetchCompanies = () =>
    this.fb.firestore().collection("companies").get().then(processFbCollection);

  addCompany = (company) =>
    this.fb.firestore().collection("companies").add(company);

  onCompaniesChange = (callback) =>
    this.fb
      .firestore()
      .collection("companies")
      .onSnapshot((data) => callback(processFbCollection(data)));
}

const processFbCollection = (collection) => {
  return collection.docs.map((snapshot) => ({
    ...snapshot.data(),
    id: snapshot.id,
  }));
};

export default new ApiService(firebaseConfig);

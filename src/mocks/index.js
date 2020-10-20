import companies from "./companies";
import firebase from "firebase/app";
import "firebase/firestore";

export function saveCompaniesToFB() {
  const Ref = firebase.firestore().collection("companies");
  companies.forEach((company) => Ref.add(company));
}

window.saveCompaniesToFB = saveCompaniesToFB;

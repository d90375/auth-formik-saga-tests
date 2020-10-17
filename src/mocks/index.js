import conferences from "./companies";
import firebase from "firebase/app";
import "firebase/firestore";

export function saveEventsToFB() {
  const cityRef = firebase.firestore().collection("companies");
  conferences.forEach((companies) => cityRef.add(companies));
}

window.saveEventsToFB = saveEventsToFB;

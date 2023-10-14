  // firebase - 프로젝트 설정 - 내 앱 - SDK 설정 및 구성 - CDN 내용 복사
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAd9RmvW-J2-5cWPbPDb76ydqU-bw1ePRw",
    authDomain: "fir-aeb19.firebaseapp.com",
    projectId: "fir-aeb19",
    storageBucket: "fir-aeb19.appspot.com",
    messagingSenderId: "506595665403",
    appId: "1:506595665403:web:b7a07ea5eddccf86a4d75e",
    measurementId: "G-M319SH7HEC"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig); 
  // export 했으니 import 해서 사용 가능
  const analytics = getAnalytics(app);
import { problems } from "@/utils/problems";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

const uploadAllProblems = async () => {
  try {
    for (const [key, problem] of Object.entries(problems)) {
      const ref = doc(firestore, "problems", key);

      // ✅ Destructure to exclude `handlerFunction`
      const { handlerFunction, ...safeProblem } = problem;

      // Optional: log what's being uploaded
      console.log("Uploading:", { refPath: ref.path, safeProblem });

      await setDoc(ref, safeProblem);

      console.log(`✅ Uploaded problem: ${key}`);
    }
    console.log("🎉 All problems uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading problems:", error);
  }
};
export { auth, firestore, app, uploadAllProblems };

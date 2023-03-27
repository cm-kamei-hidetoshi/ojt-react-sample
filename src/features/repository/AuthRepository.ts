import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User as Firebaseuser,
} from "firebase/auth";
import { User } from "../entity/User";
import { firebaseApp } from "../utils/firebase";

const auth = getAuth(firebaseApp);

export class AuthRepository {
  static async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    if (!user) {
      throw new Error("not found user");
    }
    return firebaseUserToAppUser(user);
  }

  static currentUser() {
    const user = auth.currentUser;
    if (!user) {
      return null;
    }
    return firebaseUserToAppUser(user);
  }
}

const firebaseUserToAppUser = (user: Firebaseuser) => {
  return { name: user.displayName, email: user.email } as User;
};

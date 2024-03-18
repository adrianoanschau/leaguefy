import { ref, get, onValue } from "firebase/database";
import { database } from "../config";

export default function firebaseOnValue<T>(
  path: string,
  callback: (data: T) => void
) {
  try {
    const headerRef = ref(database, path); // Get ref of 'data'

    onValue(headerRef, (snapshot) => {
      const data = snapshot.val() as T;

      callback(data);
    });
  } catch (error) {
    console.error("Error getting data:", error);
    throw error;
  }
}

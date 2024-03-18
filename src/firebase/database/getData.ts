import { ref, get } from "firebase/database";
import { database } from "../config";

export default async function firebaseGetData(path: string) {
  try {
    const headerRef = ref(database, path); // Get ref of 'data'
    const snapshot = await get(headerRef); // Get data of 'data'

    return snapshot.val();
  } catch (error) {
    console.error("Error getting data:", error);
    throw error;
  }
}

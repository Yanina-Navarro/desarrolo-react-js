import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { db } from "../config/firebase.js"

const promotionsCollection = collection(db, "promotions")



const getAllPromotions = async () => {
  const snapshot = await getDocs(promotionsCollection)
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

const addNewPromotions = async (promotions) => {
  const docRef = await addDoc(promotionsCollection, promotions)
  return {
    id: docRef.id,
    userId: useId,
    ...promotions
  }
}

const updatePromotions = async (id, updates) => {
  const promotions = doc(db, "promotions", id)
  await updateDoc(promotions, updates)
  return {
    id,
    ...updates
  }
}

const deletePromotions = async (id) => {
  const promotions = doc(db, "promotions", id)
  await deleteDoc(promotions)
  return id
}

export { getAllPromotions, addNewPromotions, updatePromotions, deletePromotions }
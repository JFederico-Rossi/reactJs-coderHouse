// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, getDocs, collection, query, where, addDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGCiF20iPLRGU0zcv4e6w3c6dOjPei3x8",
  authDomain: "ground-footwear-ecommerce.firebaseapp.com",
  projectId: "ground-footwear-ecommerce",
  storageBucket: "ground-footwear-ecommerce.appspot.com",
  messagingSenderId: "159683607990",
  appId: "1:159683607990:web:cc91141b3175fa38705517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//función para obtener productos desde la db
export async function getProducts() {
    const response = await getDocs(collection(db, 'products'));
    console.log(response); //response es una coleccion y es iterable
    const listaProds = [];
    response.forEach((docu) => listaProds.push({ id: docu.id, ...docu.data() }));
    return listaProds;
}

export async function getProductsByCategory(category) {
    const q = query(collection(db, "products"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const listaFiltro = [];
    querySnapshot.forEach(docu => listaFiltro.push({ id: docu.id, ...docu.data() }));
    return listaFiltro.map(product => {
        return {
            ...product,
            img: product.img
        };
    })
}

export async function getProductById(id) {
    const response = await getDocs(collection(db, "products"))
    const listaProds = [];
    response.forEach(docu => listaProds.push({ id: docu.id, ...docu.data() }));
    return listaProds.find(prod => prod.id == id)
}

export async function sendOrder(order){
    const orderCollection = collection(db,"pedidos");
    const docRef = await addDoc(orderCollection, order)
    return docRef.id
}

// export async function deleteProduct(id) {
//     try {
//       await deleteDoc(doc(db, 'products', id));
//     } catch (error) {
//       console.log('Error: ' + error);
//     }
//   }
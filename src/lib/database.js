import { collection, getDocs } from 'firebase/firestore';
import db from '../app.js';

let loc;
export async function dataGetter(xxx) {
	try {
		const querySnapshot = await getDocs(collection(db, xxx));
		loc = querySnapshot.docs.map((doc) => doc.data());
		return loc;
	} catch (error) {
		console.error('Error fetching documents:', error);
	}
}

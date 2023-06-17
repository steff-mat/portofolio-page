import { collection, getDocs } from 'firebase/firestore';
import db from '../../src/app.js';

let loc;
export async function localeFunc() {
	try {
		const querySnapshot = await getDocs(collection(db, 'locale'));
		loc = querySnapshot.docs.map((doc) => doc.data());
		return loc;
	} catch (error) {
		console.error('Error fetching documents:', error);
	}
}

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyD1tdR9LfUqpRf3ziBpxFeQw49VIROZEIc',
	authDomain: 'steff-website.firebaseapp.com',
	projectId: 'steff-website',
	storageBucket: 'steff-website.appspot.com',
	messagingSenderId: '178199843386',
	appId: '1:178199843386:web:60f3594ec629c607a85b03',
	measurementId: 'G-FK0XSSFEFM'
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

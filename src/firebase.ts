import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAdBcBftKSM3j4PHsePS7AOgAK-vxJQbbg',
  authDomain: 'prgms-react-trello.firebaseapp.com',
  projectId: 'prgms-react-trello',
  storageBucket: 'prgms-react-trello.firebasestorage.app',
  messagingSenderId: '326531955724',
  appId: '1:326531955724:web:42f90d70cfceba1ecb8229',
};

export const app = initializeApp(firebaseConfig);

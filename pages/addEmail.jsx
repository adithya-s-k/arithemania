/* eslint-disable no-shadow */
import { useState } from 'react';
import axios from 'axios';
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  setDoc,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';

export default function addEmail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Save the form data to Firebase
      await db.collection('users').doc(email).set({ name, email });

      // Make the HTTP request to send the email
      // eslint-disable-next-line quote-props
      await axios.get('/api/email', { 'name': name, 'email': email }); // prettier-ignore

      setLoading(false);
      setName('');
      setEmail('');
      setError('');
    } catch (error) {
      setLoading(false);
      setError('Something went wrong');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 ">
      <h1 className="text-3xl font-bold my-8">Contact Us</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="font-bold">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-md bg-gray-800"
          />
        </label>
        <label className="font-bold">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-md bg-gray-800"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded-md disabled:opacity-50 border"
          disabled={loading}
        >
          {' '}
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

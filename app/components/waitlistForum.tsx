import React, { useState } from 'react';
// import firebase from 'firebase';

const WaitlistForum = () => {
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isShared, setIsShared] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Update data to Firebase
      await firebase.firestore().collection('waitlist').add({
        email,
        walletAddress,
      });

      // Set isShared to true
      setIsShared(true);
    } catch (error) {
      console.error('Error updating data to Firebase:', error);
    }
  };

  const handleTweet = () => {
    // Handle tweet functionality here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Wallet Address:
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {isShared && (
        <div>
          <p>Form successfully shared!</p>
          <button onClick={handleTweet}>Tweet this</button>
        </div>
      )}
    </div>
  );
};

export default WaitlistForum;

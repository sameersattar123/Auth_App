import React from "react";

const OAuth = () => {
    const handleGoogleClick = async () => {
        try {
                const res = await fetch(`http://localhost:3000/auth/google`)
                
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div type='button' onClick={handleGoogleClick} className="bg-red-700 p-3 uppercase text-white text-center rounded-lg hover:opacity-95">
      Continue with Google
    </div>
  );
};

export default OAuth;

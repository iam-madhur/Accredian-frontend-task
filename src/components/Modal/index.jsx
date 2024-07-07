import React, { useState, useEffect } from "react";
import axios from "axios";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    friendName: "",
    friendEmail: "",
    referralCode: "",
  });

  const [errors, setErrors] = useState({});

  const fetchReferralCode = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/referrals/generate-code"
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        referralCode: response.data.referralCode,
      }));
    } catch (error) {
      console.error("Error fetching referral code:", error);
      // Handle error state in your application
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchReferralCode();
    }
  }, [isOpen]);

  const validate = () => {
    let formErrors = {};
    if (!formData.yourName.trim())
      formErrors.yourName = "Your name is required";
    if (!formData.friendName.trim())
      formErrors.friendName = "Friend's name is required";
    if (!formData.yourEmail) formErrors.yourEmail = "Your email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.yourEmail))
      formErrors.yourEmail = "Email address is invalid";
    if (!formData.friendEmail)
      formErrors.friendEmail = "Friend's email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.friendEmail))
      formErrors.friendEmail = "Email address is invalid";

    return formErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      console.log("Form Data:", formData);

      setFormData({
        yourName: "",
        yourEmail: "",
        friendName: "",
        friendEmail: "",
        referralCode: "",
      });

      onClose();
    } catch (error) {
      console.error("Error creating referral:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 sm:py-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-center text-xl font-bold mb-4">
                Refer a Friend
              </h2>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                &#10005;
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="yourName" className="block text-gray-700">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  className="mt-1 block w-full border-black border rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.yourName && (
                  <p className="text-red-500 text-sm mt-1">{errors.yourName}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="yourEmail" className="block text-gray-700">
                  Your Email:
                </label>
                <input
                  type="email"
                  id="yourEmail"
                  name="yourEmail"
                  value={formData.yourEmail}
                  onChange={handleChange}
                  className="mt-1 block w-full border-black border rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.yourEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.yourEmail}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="friendName" className="block text-gray-700">
                  Friend's Name:
                </label>
                <input
                  type="text"
                  id="friendName"
                  name="friendName"
                  value={formData.friendName}
                  onChange={handleChange}
                  className="mt-1 block w-full border-black border rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.friendName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.friendName}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="friendEmail" className="block text-gray-700">
                  Friend's Email:
                </label>
                <input
                  type="email"
                  id="friendEmail"
                  name="friendEmail"
                  value={formData.friendEmail}
                  onChange={handleChange}
                  className="mt-1 block w-full border-black border rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.friendEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.friendEmail}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="referralCode" className="block text-gray-700">
                  Referral Code:
                </label>
                <input
                  type="text"
                  id="referralCode"
                  name="referralCode"
                  value={formData.referralCode}
                  readOnly
                  className="mt-1 block w-full border-black border rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Send Invite
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

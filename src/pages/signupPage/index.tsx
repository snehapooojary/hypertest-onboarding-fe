import React, { useState, useRef } from 'react';
import Lottie from 'lottie-react';
//@ts-ignore
import officeIllustration5 from '../../assets/officeIllustration5.json';
import { Toast } from 'primereact/toast'; // Import PrimeReact Toast
import { useNavigate } from 'react-router-dom';
import { registerOrganization } from '../../services/service'; // Import your API function
import 'primereact/resources/themes/saga-blue/theme.css'; // Add PrimeReact CSS
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const toast = useRef<Toast>(null); // Reference for Toast notifications

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    accountType: 'Individual',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    agreeToTerms: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors: any = { firstName: '', lastName: '', email: '', agreeToTerms: '' };

    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
      valid = false;
    }
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check for form validation
    if (!validateForm()) {
      if (toast.current) {
        toast.current.show({
          severity: 'error',
          summary: 'Validation Failed',
          detail: 'Please fill in all required fields.',
        });
      }
      return;
    }

    // Create payload to send to the API
    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      is_individual: formData.accountType === 'Individual', // Set true if accountType is 'Individual'
    };

    try { 
      // Call the registerOrganization API function with the payload
      //@ts-ignore
      const response = await registerOrganization(payload);
      console.log('Registration successful:', response);

      if (toast.current) {
        toast.current.show({
          severity: 'success',
          summary: 'Registration Successful',
          detail: 'Your account has been created successfully!',
        });
      }

      // Pass user data and navigate to the Register component
      navigate('/register', { state: { email: formData.email, isIndividual: payload.is_individual, firstName: payload.first_name} });

    } catch (error) {
      console.error('Error during registration:', error);

      if (toast.current) {
        toast.current.show({
          severity: 'error',
          summary: 'Registration Failed',
          detail: 'Email is already in use. Please try another one.',
        });
      }
    }
  };

  return (
    <div>
      {/* Toast for notifications */}
      <Toast ref={toast} />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <form
          className="w-full max-w-lg bg-white p-4 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Start with your free account today
          </h2>

          {/* First Name */}
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none ${errors.firstName ? 'border-red-500' : 'focus:border-indigo-500'}`}
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none ${errors.lastName ? 'border-red-500' : 'focus:border-indigo-500'}`}
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example.email@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none ${errors.email ? 'border-red-500' : 'focus:border-indigo-500'}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Account Type */}
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">Account Type</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="accountType"
                  value="Individual"
                  checked={formData.accountType === 'Individual'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Individual</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="accountType"
                  value="Team"
                  checked={formData.accountType === 'Team'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Team</span>
              </label>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="mb-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className={`form-checkbox ${errors.agreeToTerms ? 'border-red-500' : ''}`}
              />
              <span className="ml-2">Agree to terms and conditions</span>
            </label>
            {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
          >
            SIGN UP
          </button>
        </form>

        {/* Lottie Illustration */}
        <div className="mt-8 max-w-lg mx-auto h-64">
          <Lottie
            animationData={officeIllustration5}
            loop={true}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;







// import React, { useState } from 'react';
// import Lottie from 'lottie-react';
// //@ts-ignore
// import officeIllustration5 from '../../assets/officeIllustration5.json';

// const SignUp: React.FC = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     accountType: 'Individual',
//     agreeToTerms: false,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       {/* Background Lottie Animation */}
//       <div className="absolute inset-0 z-0">
//         <Lottie
//           animationData={officeIllustration5}
//           loop={true}
//           style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
//         />
//       </div>

//       {/* Sign Up Card */}
//       <form
//         className="relative w-full max-w-md bg-white p-8 rounded-lg shadow-lg z-10"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">
//           Start with your free account today
//         </h2>

//         {/* First Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="firstName">
//             First Name
//           </label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             placeholder="Alex"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
//           />
//         </div>

//         {/* Last Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="lastName">
//             Last Name
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             placeholder="Jason"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="example.email@gmail.com"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
//           />
//         </div>

//         {/* Account Type */}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-semibold mb-2">Account Type</label>
//           <div className="flex items-center space-x-4">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="accountType"
//                 value="Individual"
//                 checked={formData.accountType === 'Individual'}
//                 onChange={handleChange}
//                 className="form-radio"
//               />
//               <span className="ml-2">Individual</span>
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="accountType"
//                 value="Team"
//                 checked={formData.accountType === 'Team'}
//                 onChange={handleChange}
//                 className="form-radio"
//               />
//               <span className="ml-2">Team</span>
//             </label>
//           </div>
//         </div>

//         {/* Terms & Conditions */}
//         <div className="mb-4">
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               name="agreeToTerms"
//               checked={formData.agreeToTerms}
//               onChange={handleChange}
//               className="form-checkbox"
//             />
//             <span className="ml-2">Agree to terms and conditions</span>
//           </label>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
//         >
//           SIGN UP
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import Mtitle from "/src/components library/Mtitle";
import { useAuth } from "../../../providers/AuthProvider"; 

function ChangePasswordPage() {
  const { handleSetNewPassword, user } = useAuth(); 
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("low");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  // Track password requirements
  const [isAtLeast8Chars, setIsAtLeast8Chars] = useState(false);
  const [hasNumeric, setHasNumeric] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  // Toggle password visibility
  const toggleVisibility = () => setShowPassword(!showPassword);

  // Check password requirements and strength
  const checkPasswordStrengthAndRequirements = (password) => {
    setIsAtLeast8Chars(password.length >= 8);
    setHasNumeric(/\d/.test(password));
    setHasLowerCase(/[a-z]/.test(password));
    setHasUpperCase(/[A-Z]/.test(password));
    setHasSpecialChar(/[@#$%]/.test(password));

    let strength = "low";
    if (
      password.length >= 8 &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumeric &&
      hasSpecialChar
    ) {
      strength = "high";
    } else if (
      password.length >= 8 &&
      (hasUpperCase || hasLowerCase) &&
      (hasNumeric || hasSpecialChar)
    ) {
      strength = "medium";
    }

    setPasswordStrength(strength);
  };

  const checkPasswordsMatch = () => {
    setPasswordsMatch(newPassword.trim() === confirmPassword.trim());
  };

  useEffect(() => {
    checkPasswordStrengthAndRequirements(newPassword);
    checkPasswordsMatch();
  }, [newPassword, confirmPassword]); 

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!currentPassword) {
      Swal.fire({
        icon: "error",
        title: "Current Password Required",
        text: "Please enter your current password.",
      });
      return;
    }

    if (newPassword.length < 8 || !hasUpperCase || !hasLowerCase || !hasNumeric || !hasSpecialChar) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Your new password does not meet the required strength. Make sure it's at least 8 characters long and contains uppercase, lowercase, numeric, and special characters.",
      });
      return;
    }

    if (!passwordsMatch) {
      Swal.fire({
        icon: "error",
        title: "Passwords Do Not Match",
        text: "The new password and confirm password do not match.",
      });
      return;
    }


    try {
      await handleSetNewPassword(newPassword);
      Swal.fire({
        icon: "success",
        title: "Password Changed Successfully",
        text: "Your password has been changed.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Password Change Failed",
        text: error.message || "An error occurred while changing the password.",
      });
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="md:w-[900px] bg-white shadow-md rounded-xl p-8 border">
        <Mtitle title="Change Password"></Mtitle>
        <div className="text-center mb-8">
          <p className="text-gray-600 text-xl font-bold">
            Secure Your Account with a New Password
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[50%]">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="currentPassword"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Current Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="currentPassword"
                  className="focus:border-blue-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="newPassword"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  New Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  className="focus:border-blue-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                {newPassword.length >= 5 && (
                  <div className="mt-1 text-sm">
                    Password strength:{" "}
                    <span
                      className={`font-semibold ${
                        passwordStrength === "low"
                          ? "text-red-500"
                          : passwordStrength === "medium"
                          ? "text-yellow-500"
                          : "text-green-500"
                      }`}
                    >
                      {passwordStrength}
                    </span>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="focus:border-blue-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {newPassword.length >= 5 && confirmPassword.length >= 5 && (
                  <div className="mt-1 text-sm">
                    {passwordsMatch ? (
                      <span className="text-green-500">✔ Passwords match</span>
                    ) : (
                      <span className="text-red-500">Passwords do not match</span>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="showPassword"
                  className="mr-2"
                  onChange={toggleVisibility}
                />
                <label htmlFor="showPassword" className="text-sm text-gray-600">
                  Show Password
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 px-4 font-semibold shadow rounded-xl hover:bg-yellow-600 focus:outline-none"
              >
                Change Password
              </button>
            </form>
          </div>

          {/* Password Requirements */}
          <div className="w-full md:w-[40%] mt-8 md:mt-0">
            <div className="border-l-2 border-gray-200 pl-4">
              <p className="text-gray-700 font-semibold mb-2">
                New Password Requirements
              </p>
              <ul className="list-none text-gray-600 ml-4">
                <li className="flex items-center mb-2">
                  <span
                    className={`${
                      isAtLeast8Chars ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {isAtLeast8Chars ? "✔" : "✘"}
                  </span>
                  <span className="ml-2">At least 8 characters</span>
                </li>
                <li className="flex items-center mb-2">
                  <span
                    className={`${
                      hasNumeric ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {hasNumeric ? "✔" : "✘"}
                  </span>
                  <span className="ml-2">At least one Numeric digit (0-9)</span>
                </li>
                <li className="flex items-center mb-2">
                  <span
                    className={`${
                      hasLowerCase ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {hasLowerCase ? "✔" : "✘"}
                  </span>
                  <span className="ml-2">At least one lowercase letter</span>
                </li>
                <li className="flex items-center mb-2">
                  <span
                    className={`${
                      hasUpperCase ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {hasUpperCase ? "✔" : "✘"}
                  </span>
                  <span className="ml-2">At least one uppercase letter</span>
                </li>
                <li className="flex items-center mb-2">
                  <span
                    className={`${
                      hasSpecialChar ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {hasSpecialChar ? "✔" : "✘"}
                  </span>
                  <span className="ml-2">
                    At least one special character (@ #)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordPage;

import React, { useState } from "react";
import { FaUserCircle, FaEnvelope, FaPhone, FaRegBell, FaEdit, FaSave } from "react-icons/fa";
import Footer from "./Footer";

const User = () => {
  // User state
  const [user, setUser] = useState({
    name: "Rishi",
    age: 20,
    gender: "Female",
    email: "rishi@example.com",
    contact: "+91 9876543210",
  });

  // Future plans and reminders
  const [futurePlans, setFuturePlans] = useState([
    "Trip to Office tomorrow at 8 AM",
    "Visit Library on Sep 20",
    "Weekend outing Sep 21"
  ]);
  const [reminders, setReminders] = useState([
    "Renew monthly pass",
    "Redeem points for next reward"
  ]);

  const [newPlan, setNewPlan] = useState("");
  const [newReminder, setNewReminder] = useState("");

  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode
  const [editedUser, setEditedUser] = useState({ ...user });

  // Add future plan
  const addPlan = () => {
    if (newPlan.trim() !== "") {
      setFuturePlans([...futurePlans, newPlan]);
      setNewPlan("");
    }
  };

  // Add reminder
  const addReminder = () => {
    if (newReminder.trim() !== "") {
      setReminders([...reminders, newReminder]);
      setNewReminder("");
    }
  };

  // Save profile changes
  const saveProfile = () => {
    setUser({ ...editedUser });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-teal-100 to-teal-200 text-gray-800 pb-28 pt-28 flex flex-col items-center">

      {/* Header */}
      <div className="flex justify-between items-center bg-teal-500 text-white w-full px-6 py-3 shadow-lg fixed top-0 z-10">
        <h1 className="text-3xl font-bold tracking-wide">Profile</h1>
        
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[95%] mb-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <FaUserCircle size={50} className="text-teal-500" />
            {isEditing ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={editedUser.name}
                  onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                  className="px-3 py-1 rounded-lg border border-teal-300"
                  placeholder="Name"
                />
                <input
                  type="number"
                  value={editedUser.age}
                  onChange={(e) => setEditedUser({ ...editedUser, age: e.target.value })}
                  className="px-3 py-1 rounded-lg border border-teal-300"
                  placeholder="Age"
                />
                <input
                  type="text"
                  value={editedUser.gender}
                  onChange={(e) => setEditedUser({ ...editedUser, gender: e.target.value })}
                  className="px-3 py-1 rounded-lg border border-teal-300"
                  placeholder="Gender"
                />
              </div>
            ) : (
              <div>
                <p className="text-2xl font-bold">{user.name}</p>
                <p className="text-gray-500">{user.gender}, {user.age} yrs</p>
              </div>
            )}
          </div>
          <button
            className="text-teal-600 text-xl"
            onClick={() => isEditing ? saveProfile() : setIsEditing(true)}
          >
            {isEditing ? <FaSave /> : <FaEdit />}
          </button>
        </div>

        {/* Contact Info */}
        {isEditing ? (
          <div className="flex flex-col gap-3 mb-4">
            <input
              type="email"
              value={editedUser.email}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
              className="px-3 py-2 rounded-lg border border-teal-300"
              placeholder="Email"
            />
            <input
              type="text"
              value={editedUser.contact}
              onChange={(e) => setEditedUser({ ...editedUser, contact: e.target.value })}
              className="px-3 py-2 rounded-lg border border-teal-300"
              placeholder="Contact"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-3 mb-4">
            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-teal-500" /> {user.email}
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhone className="text-teal-500" /> {user.contact}
            </div>
          </div>
        )}

        {/* Future Travel Plans */}
        <div className="mb-6">
          <p className="text-teal-700 font-semibold text-lg mb-2">Future Travel Plans</p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            {futurePlans.map((plan, i) => (
              <li key={i}>{plan}</li>
            ))}
          </ul>
          <div className="flex gap-2">
            <input
              type="text"
              value={newPlan}
              onChange={(e) => setNewPlan(e.target.value)}
              placeholder="Add new plan"
              className="flex-1 px-3 py-2 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              onClick={addPlan}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
            >
              Add
            </button>
          </div>
        </div>

        {/* Reminders */}
        <div>
          <p className="text-teal-700 font-semibold text-lg mb-2">Reminders</p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            {reminders.map((reminder, i) => (
              <li key={i}><FaRegBell className="inline mr-2 text-teal-500"/> {reminder}</li>
            ))}
          </ul>
          <div className="flex gap-2">
            <input
              type="text"
              value={newReminder}
              onChange={(e) => setNewReminder(e.target.value)}
              placeholder="Add new reminder"
              className="flex-1 px-3 py-2 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              onClick={addReminder}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full fixed bottom-0">
        <Footer />
      </div>

    </div>
  );
};

export default User;

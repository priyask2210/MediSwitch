import React, { useState } from 'react';
import './App.css'; // Import your custom CSS

function App() {
  const [form, setForm] = useState({
    symptoms: '',
    duration: '',
    medication: '',
    history: '',
    allergies: '',
    cam: '',
    conventionalMedicine: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log(form);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <h2 className="logo-text">Medi<span className="logo-switch">Switch</span></h2>
        </div>
        <div className="nav-links">
          <a href="/">
          <button class="btn"><i class="fa fa-home"></i></button>
          <button class="btn"><i class="fa fa-home"></i> Home</button>
          </a>
          <a href="/profile">
            <img src="/profile-icon.png" alt="Profile" className="nav-icon" />
          </a>
        </div>
      </nav>

      <header className="App-header">
        <h1>Alternative Medicine Recommendation</h1>

        <form className="form" onSubmit={handleSubmit}>
          {/* Required fields */}
          <input
            type="text"
            name="symptoms"
            placeholder="Enter Symptoms"
            value={form.symptoms}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration of Illness"
            value={form.duration}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="medication"
            placeholder="Current Medication"
            value={form.medication}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="history"
            placeholder="Medical History (Operations, etc.)"
            value={form.history}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="allergies"
            placeholder="Allergies"
            value={form.allergies}
            onChange={handleChange}
            required
          />

          {/* Optional fields */}
          <input
            type="text"
            name="cam"
            placeholder="Preferred CAM Types (Optional)"
            value={form.cam}
            onChange={handleChange}
          />
          <input
            type="text"
            name="conventionalMedicine"
            placeholder="Conventional Medicine to Replace (Optional)"
            value={form.conventionalMedicine}
            onChange={handleChange}
          />

          <button type="submit">Get Recommendation</button>
        </form>

        {/* WhatsApp and Chatbot Icons */}
        <div className="icons">
          <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp-icon.png" alt="WhatsApp" className="icon" />
          </a>
          <a href="/chatbot" className="icon">
            <img src="/chatbot-icon.png" alt="Chatbot" className="icon" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

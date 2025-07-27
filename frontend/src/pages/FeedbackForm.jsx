import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', course: '', rating: 0, comments: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    data.push(form);
    localStorage.setItem('feedbacks', JSON.stringify(data));
    navigate('/thank-you');
  };

  return (
    <div className="container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Course</label>
        <input name="course" onChange={handleChange} required />

        <label>Rating (1 to 5)</label>
        <input type="range" name="rating" min="1" max="5" onChange={handleChange} />
        <p>{form.rating} Stars</p>

        <label>Comments</label>
        <textarea name="comments" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;



import { useEffect, useState } from 'react';

function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    setFeedbacks(data);
  }, []);

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback yet</p>
      ) : (
        feedbacks.map((f, idx) => (
          <div key={idx} className="card">
            <p><strong>Name:</strong> {f.name}</p>
            <p><strong>Course:</strong> {f.course}</p>
            <p><strong>Rating:</strong> <progress max="5" value={f.rating}></progress> {f.rating}</p>
            <p><strong>Comment:</strong> {f.comments}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminDashboard;

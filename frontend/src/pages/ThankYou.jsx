import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="container">
      <h2>Thank you for your feedback!</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default ThankYou;



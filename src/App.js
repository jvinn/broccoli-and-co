import './components/Header';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import InviteForm from "./components/InviteForm";
import InviteComplete from "./components/InviteComplete";
import {useState} from "react";

function App() {
	const [showForm, setShowForm] = useState(false);
	const [showComplete, setShowComplete] = useState(false);

	return (
	  <div>
		  <Header />
		  <div className="body">
			  <button onClick={() => setShowForm(true)}>
			    <Button text="Request an invite"/>
			  </button>
			  <InviteForm isVisible={showForm} />
			  <InviteComplete isVisible={showComplete} />
		  </div>
		  <Footer />
	  </div>
  );
}

export default App;

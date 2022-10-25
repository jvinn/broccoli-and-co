import './components/Header';
import Header from "./components/Header";
import Footer from "./components/Footer";
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
			  <button className="button" onClick={() => setShowForm(true)}>Request an invite</button>
			  <InviteForm isVisible={showForm} onComplete={() => {
				  setShowForm(false);
				  setShowComplete(true);
			  }}/>
			  <InviteComplete isVisible={showComplete} onComplete={() => setShowComplete(false)} />
		  </div>
		  <Footer />
	  </div>
  );
}

export default App;

import './components/Header';
import Header from "./components/Header";
import Footer from "./components/Footer";
import InviteForm from "./components/InviteForm";
import InviteComplete from "./components/InviteComplete";
import InviteFail from "./components/InviteFail";
import {useState} from "react";

function App() {
	const [showForm, setShowForm] = useState(false);
	const [showComplete, setShowComplete] = useState(false);
	const [showFail, setShowFail] = useState(false);

	return (
	  <div>
		  <Header />
		  <div className="body">
			  <button className="button" onClick={() => setShowForm(true)}>Request an invite</button>
			  <InviteForm isVisible={showForm}
			              onSuccess={() => {
							  setShowForm(false);
							  setShowComplete(true);}}
			              onFailure={() => {
							  setShowForm(false);
							  setShowFail(true)
			              }}
			  />
			  <InviteComplete isVisible={showComplete} onComplete={() => setShowComplete(false)} />
			  <InviteFail isVisible={showFail} onComplete={() =>setShowFail(false)} />
		  </div>
		  <Footer />
	  </div>
  );
}

export default App;

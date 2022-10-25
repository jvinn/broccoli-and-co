import '../styles.css';

function InviteFail({isVisible, onComplete, errorMessage}) {
	return isVisible ? (
		<div className="popup">
			<div className="container">
				<p>{errorMessage}</p>
				<br />
				<button className="button" onClick={onComplete}>OK</button>
			</div>
		</div>
	) : "";
}

export default InviteFail;
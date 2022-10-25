import '../styles.css';

function InviteFail({isVisible, onComplete}) {
	return isVisible ? (
		<div className="popup">
			<div className="container">
				<p>Emails did not match, please try again</p>
				<br />
				<button className="button" onClick={onComplete}>OK</button>
			</div>
		</div>
	) : "";
}

export default InviteFail;
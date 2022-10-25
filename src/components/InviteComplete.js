import '../styles.css';

function InviteComplete({isVisible, onComplete}) {
	return isVisible ? (
		<div className="popup">
			<div className="container">
				<p>All Done!</p>
				<br />
				<button className="button" onClick={onComplete}>OK</button>
			</div>
		</div>
	) : "";
}

export default InviteComplete;
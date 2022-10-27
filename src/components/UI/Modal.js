import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Backdrop from './Backdrop';
import ModalForm from './ModalForm';

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop hideCart={props.hideCart} />,
				portalElement
			)}
			{!props.showForm &&
				ReactDOM.createPortal(
					<ModalOverlay>{props.children}</ModalOverlay>,
					portalElement
				)}
			{props.showForm &&
				ReactDOM.createPortal(
					<ModalForm hideForm={props.hideForm} hideCart={props.hideCart}>
						{props.children}
					</ModalForm>,
					portalElement
				)}
		</React.Fragment>
	);
};

export default Modal;

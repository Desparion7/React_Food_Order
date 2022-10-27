import classes from './Backdrop.module.css';
const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.hideCart}></div>;
};

export default Backdrop;

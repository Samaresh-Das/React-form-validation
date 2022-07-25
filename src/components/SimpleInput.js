import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangedHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: nameIsValid,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangedHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // console.log(enteredName);
    if (!emailIsValid) {
      return;
    }
    // console.log(enteredValue);
    //nameInputRef.current.value = ''; //Not ideal, Don't manipulate the dom yourself
    resetNameInput()
    resetEmailInput()
  };

  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : " form-control";
  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : " form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="name"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must be valid address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

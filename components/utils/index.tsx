//***** Index of various utils for Fat Slob Plumbing *****//

import styles from "./utils.module.css";

/***** SPACER *****/

type SpacerProps = {
  content?: string;
};

export const Spacer = ({ content }: SpacerProps) => {
  return (
    <>
      <div className="spacer">{content}</div>
      <style jsx>{`
        .spacer {
          height: 1.5rem;
        }
      `}</style>
    </>
  );
};

/***** SPINNER *****/

export const Spinner = () => {
  return <div className="spinner"></div>;
};

/***** BUTTONS *****/

type ButtonProps = {
  btnText: string;
  onClick?: () => void;
};

export const Button = ({ btnText, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styles.cta}`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export const CalendarButton = ({ btnText, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styles.calendar}`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

//***** EXPORTS *****//
export const Utils = {
  Spacer: Spacer,
  Spinner: Spinner,
  Button: Button,
  CalendarButton: CalendarButton,
};

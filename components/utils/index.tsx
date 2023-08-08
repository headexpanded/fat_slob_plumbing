//***** Index of various utils for Fat Slob Plumbing *****//

//***** SPACER *****//

type SpacerProps = {
  content?: string;
};

export const Spacer = ({ content }: SpacerProps) => {
  return (
    <>
      <div className="spacer">{content}</div>
      <style jsx>{`
        .spacer {
          height: 2rem;
        }
      `}</style>
    </>
  );
};

//***** BUTTONS *****//

import styles from './Button.module.css';

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
  Button: Button,
  CalendarButton: CalendarButton,
};

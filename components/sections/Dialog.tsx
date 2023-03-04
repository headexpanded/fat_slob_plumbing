type DialogProps = {
  modalIsVisible: boolean;
  content: string;
};

export const Dialog = ({ modalIsVisible, content }: DialogProps) => {
  return (
    <>
      {modalIsVisible && (
        <div>
          <h1>{content}</h1>
          <p>Sorry, our calendar is completely blocked up.</p>
          <button id="closeModal">Close</button>
        </div>
      )}
    </>
  );
};

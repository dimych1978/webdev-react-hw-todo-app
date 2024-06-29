export const Spinner = ({ display, width }) => {
  return (
    <img
      src='/Spinner-3.gif'
      style={{
        position: 'relative',
        width: width ?? '25px',
        top: '8px',
        display: display,
      }}
    ></img>
  );
};

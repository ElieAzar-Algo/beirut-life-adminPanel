const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <p style={{ color: 'var(--red)' }}>{error}</p>;
};

export default ErrorMessage;

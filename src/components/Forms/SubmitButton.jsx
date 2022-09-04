import { useFormikContext } from 'formik';
import styled from 'styled-components';

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button type="button" onClick={handleSubmit}>
      {title}
    </Button>
  );
}

const Button = styled.button`
  background-color: var(--pink);
  color: var(--white);
  padding: 10;
`;

export default SubmitButton;

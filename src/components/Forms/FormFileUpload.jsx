import { useFormikContext } from 'formik';
import styled from 'styled-components';
import { MdPublish } from 'react-icons/md';

const FormFileUpload = ({ image, alt, name }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <FileUpload>
      <FileUploadImage src={image} alt={alt} />
      <label htmlFor="file">
        <MdPublish style={{ cursor: 'pointer' }} />
      </label>
      <input
        type="file"
        id="file"
        name={name}
        style={{ display: 'none' }}
        onChange={(e) => setFieldValue(name, e.target.files[0])}
      />
    </FileUpload>
  );
};

const FileUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  gap: 20px;
`;

const FileUploadImage = styled.img`
  width: 90%;
  border-radius: 10px;
  object-fit: cover;
`;

export default FormFileUpload;

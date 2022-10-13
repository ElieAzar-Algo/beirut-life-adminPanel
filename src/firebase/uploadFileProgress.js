import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import storage from './config';

const uploadFileProgress = (
  file,
  subFolder,
  imageName,
  setPercent,
  setBuffer
) => {
  const storageRef = ref(storage, subFolder + '/' + imageName);
  return new Promise((resolve, reject) => {
    const upload = uploadBytesResumable(storageRef, file);
    upload.on(
      'state_change',
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
        setBuffer(10);
      },
      (error) => {
        reject(error);
      },
      async () => {
        try {
          const url = await getDownloadURL(storageRef);
          resolve(url);
        } catch (error) {
          reject(error);
        }
      }
    );
  });
};

export default uploadFileProgress;

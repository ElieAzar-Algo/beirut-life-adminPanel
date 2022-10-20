import { ref, getDownloadURL } from 'firebase/storage';
import storage from './config';

// Create a reference to the file we want to download

const fileExist = async (filePath) => {
  const imageRef = ref(storage, filePath);
  try {
    const res = await getDownloadURL(imageRef);
    return res;
  } catch (error) {
    switch (error.code) {
      case 'storage/object-not-found':
        return 'Not found';
      case 'storage/unauthorized':
        return 'Unauthorized';
      case 'storage/canceled':
        return 'Canceled';
      default:
        return 'Unknown storage';
    }
  }
};

export default fileExist;

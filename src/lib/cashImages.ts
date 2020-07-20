import { Image } from 'react-native';
import { Asset } from 'expo-asset';

const cashImages = (images: Array<string | React.ReactText>) => {
  images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync;
    }
  });
};

export default cashImages;

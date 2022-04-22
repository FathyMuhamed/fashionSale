import Image from 'next/image';
import { shimmer } from '../assert/icons';
import { toBase64 } from '../utils/toBase';
interface ImageProps {
  alt: string;
  src: string;
  w: number;
  h: number;
}
function ImageCard({ alt, src, w, h }: ImageProps) {
  return (
    <Image
      alt={alt}
      src={src}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`}
      width={w}
      height={h}
    />
  );
}

export default ImageCard;

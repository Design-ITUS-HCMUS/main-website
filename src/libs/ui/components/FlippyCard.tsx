import Flippy, { BackSide, FrontSide } from 'react-flippy';
import Image from 'next/image';

interface FlippyProps {
  frontImgUrl: string;
  backImgUrl: string;
  imgName: string;
  borderRadius: string;
}

export default function FlippyCard({ frontImgUrl, backImgUrl, imgName, borderRadius }: FlippyProps) {
  return (
    <Flippy flipOnHover={true} flipDirection='horizontal' style={{ width: '100%', height: '100%' }}>
      <FrontSide style={{ padding: 0, boxShadow: 'none' }}>
        <Image src={frontImgUrl} width='0' height='300' style={{ width: '100%', height: '100%' }} alt={imgName} />
      </FrontSide>

      <BackSide style={{ padding: 0, boxShadow: 'none' }}>
        <Image
          src={backImgUrl}
          width='300'
          height='300'
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: borderRadius }}
          alt={imgName}
        />
      </BackSide>
    </Flippy>
  );
}

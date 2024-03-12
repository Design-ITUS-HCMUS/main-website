import Image from 'next/image';

enum IconSize {
  'small' = 32,
  'medium' = 44,
  'large' = 60,
  'extraLarge' = 80,
}

interface IconProps {
  size: keyof typeof IconSize;
  image: string;
  name?: string;
  color?: string;
}

export function Icon({ size = 'medium', image, name, color }: IconProps) {
  return <Image src={image} width='0' height={IconSize[size]} style={{ width: 'auto' }} alt={name ? name : 'Icon'} />;
}

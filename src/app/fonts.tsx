import localFont from 'next/font/local';

export const amita = localFont({
  src: [
    {
      path: '../../public/fonts/Amita/Amita-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Amita/Amita-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-amita',
});

export const amiko = localFont({
  src: [
    {
      path: '../../public/fonts/amiko/Amiko-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/amiko/Amiko-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/amiko/Amiko-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-amiko',
});

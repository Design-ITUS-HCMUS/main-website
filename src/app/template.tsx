import Navbar from '@/libs/ui/components/Navbar';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

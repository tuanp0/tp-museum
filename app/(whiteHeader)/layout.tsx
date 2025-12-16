import Header from '@/components/Header';

function BlackHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header textColor={'white'} />
      {children}
    </>
  );
}

export default BlackHeaderLayout
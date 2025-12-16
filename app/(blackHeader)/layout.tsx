import Header from '@/components/Header';

function BlackHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header textColor={'black'} />
      {children}
    </>
  );
}

export default BlackHeaderLayout
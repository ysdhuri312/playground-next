/** @format */

export default function BlogsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div>BlogHeader</div>
      {children}
      <div>BlogFooter</div>
    </>
  );
}

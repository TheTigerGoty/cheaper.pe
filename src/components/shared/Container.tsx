export default function Container({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className={`max-w-screen-xl mx-auto px-5`}>
        {children}
      </div>
  
    )
  }
  
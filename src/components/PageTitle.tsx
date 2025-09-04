// components/PageTitle.tsx
export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-mono text-3xl font-normal mb-6 text-blue-300 text-center w-full">
      {children}
    </h1>
  );
}

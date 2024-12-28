/* type ErrorMessageProps = {
  children: React.ReactNode;
} */

export default function ErrorMessage({ children }: React.PropsWithChildren) {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
      {children}
    </p>
  );
}

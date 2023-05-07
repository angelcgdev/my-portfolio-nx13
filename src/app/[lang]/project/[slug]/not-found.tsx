import Link from "next/link";

export const metadata = {
  title: "Not Found",
  description: "not found page",
};
export default async function NotFound() {
  return (
    <section className="flex h-[80vh]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="flex flex-row leading-8">
          <p className="border-r-2 pr-3 mr-3">404</p>
          <p>Project not found</p>
        </h1>
        <Link className="hover:underline" href="/" target="_parent">
          go to home
        </Link>
      </div>
    </section>
  );
}

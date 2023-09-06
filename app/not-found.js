import Link from "next/link";

export default function Custom404() {
  return (
    <div className="text-center flex items-center justify-center flex-col h-[200px]">
      <h1>صفحه مورد نظر یافت نشد!</h1>
      <Link
        href="/"
        className="block mt-2 bg-primary w-fit mx-auto py-1 px-4 rounded"
      >
        برگشت به خانه
      </Link>
    </div>
  );
}

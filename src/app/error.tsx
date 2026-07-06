"use client";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => (
  <section className="flex min-h-screen flex-col items-center justify-center">
    <h1 className="text-4xl font-bold text-red-500">Something went wrong!</h1>
    <p className="mt-2 text-zinc-600">{error.message}</p>
    <button onClick={reset} className="mt-4 rounded-xl bg-primary px-6 py-3 text-white">
      Try Again
    </button>
  </section>
);

export default ErrorPage;
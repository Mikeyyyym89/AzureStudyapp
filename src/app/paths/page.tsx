import Link from "next/link";
import pathsData from "@/content/paths.json";
import PathsView from "@/components/PathsView";
import type { CertificationPath } from "@/lib/types";

export default function PathsPage() {
  const paths = pathsData as CertificationPath[];

  return (
    <div className="min-h-full">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6">
          <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">
            ← All courses
          </Link>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">
            Certification paths
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            How these exams ladder into Microsoft certifications — take them in
            order.
          </p>
        </div>
      </header>
      <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
        <PathsView paths={paths} />
      </main>
    </div>
  );
}

import Link from "next/link";
import { courses } from "@/lib/content";
import type { CertificationPath } from "@/lib/types";

export default function PathsView({ paths }: { paths: CertificationPath[] }) {
  return (
    <div className="space-y-5">
      {paths.map((path) => {
        const pathCourses = path.courses
          .map((id) => courses.find((c) => c.id === id))
          .filter(Boolean);
        return (
          <div
            key={path.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-semibold text-slate-900">
                {path.name}
              </h2>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                {path.level}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-600">{path.description}</p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {pathCourses.map((course, i) => (
                <span key={course!.id} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="text-slate-400" aria-hidden>
                      →
                    </span>
                  )}
                  <Link
                    href={`/course/${course!.id}`}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:shadow-sm"
                  >
                    <span
                      className="mr-1.5 inline-block h-2 w-2 rounded-full"
                      style={{ background: course!.accent }}
                    />
                    {course!.code} · {course!.shortName}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// components/ui/Pagination.tsx
import React from "react";

type PaginationProps = {
  page: number;
  setPage: (n: number) => void;
  totalPages: number;
  maxButtons?: number; // حداکثر تعداد دکمه شماره صفحه که نمایش داده می‌شود
};

const Pagination: React.FC<PaginationProps> = ({ page, setPage, totalPages, maxButtons = 7 }) => {
  if (totalPages <= 1) return null;

  // ساده‌سازی: نمایش محدودی از دکمه‌ها (میانه و ...). این نسخه ساده و کاربردی است.
  const pages: number[] = [];
  const half = Math.floor(maxButtons / 2);
  let start = Math.max(1, page - half);
  let end = Math.min(totalPages, start + maxButtons - 1);
  if (end - start + 1 < maxButtons) {
    start = Math.max(1, end - maxButtons + 1);
  }
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <nav className="inline-flex items-center gap-2" aria-label="Pagination">
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        className="w-4 h-4 flex items-center justify-center rounded border border-gray-200 text-sm"
        aria-label="Previous page"
      >
        ‹
      </button>

      <div className="inline-flex items-center gap-2 bg-white px-1 py-0.5 rounded-md shadow-sm">
        {pages[0] > 1 && (
          <>
            <button onClick={() => setPage(1)} className="w-4 h-4 rounded text-sm border border-gray-200">
              1
            </button>
            {pages[0] > 2 && <span className="px-2 text-sm text-gray-400">…</span>}
          </>
        )}

        {pages.map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            aria-current={p === page ? "page" : undefined}
            className={`w-4 h-4 flex items-center justify-center text-sm rounded ${
              p === page ? "bg-gray-500 text-white" : "bg-white text-gray-700 border border-gray-200"
            }`}
          >
            {p}
          </button>
        ))}

        {pages[pages.length - 1] < totalPages && (
          <>
            {pages[pages.length - 1] < totalPages - 1 && <span className="px-2 text-sm text-gray-400">…</span>}
            <button onClick={() => setPage(totalPages)} className="w-4 h-4 rounded text-sm border border-gray-200">
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        className="w-4 h-4 flex items-center justify-center rounded border border-gray-200 text-sm"
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
};

export default Pagination;

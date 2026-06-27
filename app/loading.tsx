export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-void">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-edge border-t-violet" />
        </div>
        <p className="eyebrow">Loading</p>
      </div>
    </div>
  );
}

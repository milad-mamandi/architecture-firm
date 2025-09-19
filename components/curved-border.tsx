export function CurvedBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute right-0 bottom-0 z-10 flex w-fit flex-col items-end justify-end">
      <div className="size-9 bg-white mask-[radial-gradient(circle_at_top_left,transparent_70%,black_70%)] md:size-12" />
      <div className="flex flex-row items-end">
        <div className="size-9 bg-white mask-[radial-gradient(circle_at_top_left,transparent_70%,black_70%)] md:size-12" />
        {children}
      </div>
    </div>
  )
}

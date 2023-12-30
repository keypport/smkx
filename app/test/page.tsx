export default function Test() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        {process.env.NODE_ENV}
      </div>
      <div>
        {process.env.NEXT_PUBLIC_BASE_PATH}
      </div>
    </div>
  )
}
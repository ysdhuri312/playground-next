/** @format */

export default async function Files({
  params,
}: {
  params: Promise<{ myFiles: String[] }>;
}) {
  const { myFiles } = await params;
  return <div>Files /{myFiles?.join('/')}</div>;
}

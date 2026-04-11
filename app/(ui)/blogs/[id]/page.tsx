/** @format */

import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return {
    title: id,
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (id == 'abc') {
    return notFound();
  }

  return <div>Blog {id}</div>;
}

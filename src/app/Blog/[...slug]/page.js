// This can be a Server Component

import { notFound } from 'next/navigation';
import { Suspense } from 'react';

// This is just a placeholder example
export default function BlogPostPage({ params }) {
  const { slug } = params;

  // You would fetch blog post data here based on the slug
  const blogPost = null; // Replace with actual data fetching

  // If the blog post is not found, show the default 404 page
  if (!blogPost) {
    notFound();
  }

  return (
    <div>
      <h1 style={{ fontSize: '2rem' }}>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </div>
  );
}
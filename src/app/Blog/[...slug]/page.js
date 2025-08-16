// // app/blog/[slug]/page.js (example path)
// import { notFound } from "next/navigation";

// export default function BlogPostPage({ params }) {
//   const { slug } = params;

//   // Normally yaha tum database ya API call karoge
//   // Example ke liye dummy:
//   const blogPost = null; // <-- Replace with real fetch

//   if (!blogPost) {
//     notFound(); // Next.js ko custom 404 page dikhane ko bolta hai
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1 style={{ fontSize: "2rem" }}>{blogPost.title}</h1>
//       <p>{blogPost.content}</p>
//     </div>
//   );
// }

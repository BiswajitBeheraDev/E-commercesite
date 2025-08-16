export default async function NotFoundPage({ searchParams }) {
  const params = await searchParams; // 
  const errorCode = params?.error;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      {errorCode && <p>Error Code: {errorCode}</p>}
    </div>
  );
}

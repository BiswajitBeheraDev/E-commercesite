export default function MyClientComponent({ searchParams }) {
  const errorCode = searchParams?.error;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      {errorCode && <p>Error Code: {errorCode}</p>}
    </div>
  );
}

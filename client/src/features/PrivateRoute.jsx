import { useAuth } from "./AuthContext";

export default function PrivateRoute({ children }) {

  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return user
    ? children
    : <Navigate to="/auth/login" replace />;
}
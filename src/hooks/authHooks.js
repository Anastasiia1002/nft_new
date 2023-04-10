import { useSelector } from "react-redux";

export function useAuth() {
  const { email, token, userId, nickName } = useSelector((state) => state.auth);
  return {
    isAuth: !!token,
    email,
    token,
    userId,
    nickName,
  };
}

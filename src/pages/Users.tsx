import { Data } from "../components";
import { User } from "../types";

export default function Users() {
  return (
    <Data<User> type="users" />
  )
}

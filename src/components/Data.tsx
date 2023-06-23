import { use } from "react";

interface Data {
  type: "users" | "posts"
}

async function getData<T>(data: Data["type"]): Promise<T[]> {
  return await (await fetch(`https://jsonplaceholder.typicode.com/${data}`)).json()
}
export function Data<T>({ type }: Data) {
  const data = use(getData<T>(type));
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

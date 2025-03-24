import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./detailLink";

export default async function List() {

  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {result.map((post, Idx) => {
        return (
          <div className="list-item" key={Idx}>
            
            <Link prefetch={false} href={`/detail/${post._id}`}>
              <h4>{post.title}</h4>
            </Link>
            <DetailLink />
            <p>{post.content}</p>
          </div>
        )
      })}
    </div>
  )
} 
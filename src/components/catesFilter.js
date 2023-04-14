import Link from "next/link";
import { useAuth, UserButton, SignIn } from "@clerk/nextjs";
export default function CatesFilter({ cate, fetchCates, id, type}) {
  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const handleFilterDelete = async (e) => {
    const token = await getToken({ template: "codehooks" });
    const url = API_ENDPOINT + "/cateslist?cates="+cate;
    await fetch(url, {
      method: "DELETE",
      headers: { "Authorization": "Bearer " + token },
    });
    fetchCates(token);
  };

  return (
    <div>
      <Link
        href={`/${type}/${cate}`}
        className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        {cate}
      </Link>

      <button
        onClick={handleFilterDelete}
        className="text-center bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full"
      >
        ❌
      </button>
    </div>
  );
}

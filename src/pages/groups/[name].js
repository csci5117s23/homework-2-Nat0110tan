import ReviewEditor from "@/components/ReviewEditor";
import { useRouter } from "next/router";

export default function groupPage() {
  const router = useRouter();
  const { name } = router.query;
  
  if (name) {
    return <ReviewEditor group={name}></ReviewEditor>;
  } else {
    return <></>;
  }
}

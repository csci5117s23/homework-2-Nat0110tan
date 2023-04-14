import {
  getReview,
  getReviews,
  postReview,
  updateReview,
} from "@/modules/Data";
import { useAuth, UserButton, SignIn } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";
import ReviewEditor from "@/components/ReviewEditor";


export default function Test() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;



  // const fetchCates = async () =>{
  //   const response = await fetch(API_ENDPOINT + "/cateslist", {
  //     method: "GET",
  //     headers: { "x-apikey": API_KEY },
  //   });

  useEffect(() => {
    async function process() {
      if (userId) { // check if 1) logged in, and 2) auth is loaded properly in the first place
        const token = await getToken({ template: "codehooks" }); // get the token

        const result = await fetch(API_ENDPOINT + "/cateslist",{
        'method':'GET',
        'headers': {'Authorization': 'Bearer ' + token} // use the token.
        })
        console.log(userId);
        console.log(token);

      }
    }
    process();
  }, [isLoaded]);
  // async function test() {
  //   const token = await getToken({ template: "codehooks" });
  // }

  return (
    <>
      <p>{userId}</p>
      {userId ? <p>you logined </p>: <SignIn></SignIn>}
    </>
  );
}


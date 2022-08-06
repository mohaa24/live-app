
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import OverlayLoader from "../components/loading/loading";


export default function Contact() {
      const [response, setResponse] = useState(null);

  const router = useRouter();

  useEffect(() => {
    console.log(router.query.id);
    requestPostData()
  });
  let apiURL = "http://localhost:3100/getPost";
  // apiURL = "https://fluffy-garbanzo.herokuapp.com/posts";

  const requestPostData = async () => {
    axios({
      method: "get",
      url:`${apiURL}?id=${router.query.id}`,
      headers: {
        //  Authorization: `Bearer ${token}`,
        //  "X-Api-Key": key
      },
    })
      .then((response) => {
        //console.log(response.data.data.items);
        setResponse(response.data[0]);
        console.log(response.data, "responseee");
      })
      .catch((error) => console.log(error));
  };

  const onSubmit = () =>{

  }

  return (
    <>
      {!response && <OverlayLoader />}

      {response && (
        <section className="postSection">
          <h1>New Post</h1>
          <form onSubmit={onSubmit(e)}>
            <label>Post Title:</label>
            <input type={"text"} required></input>
            <label>Image URL:</label>
            <input type={"text"} required></input>
            <label>Post Body:</label>
            <textarea required></textarea>
            <label>Post Author:</label>
            <input type={"text"} required></input>
            <button >Add Post</button>
          </form>
        </section>
      )}
    </>
  );
}

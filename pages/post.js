
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

  return (
    <>
      {!response && <OverlayLoader />}

      {response && (
        <section className="postSection">
          <h1>{response.title}</h1>

          <div className="postContent">
            <div className="postMeta">
              <div className="authorDetails">
                Steven Dick, Commercial Partner, A__Z
              </div>
              <div className="postedTime">April 2022</div>
            </div>
            <hr />

            <p>
              <img
                src={response.img}
                alt="a green hummingbird flying among yellow flowers"
                title="Photo by Geronimo Giqueaux for Unsplash"
                class="editorial-image-right"
              ></img>
              {response.content}
              <br />
              <br />
              Sed commodo imperdiet metus vitae molestie. In laoreet rutrum
              pretium. Aenean a enim ac lacus tincidunt pellentesque ac a
              tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus imperdiet ut quam sit amet vehicula. Donec sit amet
              facilisis quam. Integer mollis, urna accumsan tempor hendrerit,
              risus neque tincidunt neque, in aliquam elit eros quis tortor. Sed
              id venenatis massa, ut malesuada sem. Nam lacinia sodales tellus
              nec efficitur. Vestibulum fringilla nisl ac iaculis ultricies. Sed
              commodo imperdiet metus vitae molestie. In laoreet rutrum pretium.
              Aenean a enim ac lacus tincidunt pellentesque ac a tellus.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              imperdiet ut quam sit amet vehicula. Donec sit amet facilisis
              quam. Integer mollis, urna accumsan tempor hendrerit, risus neque
              tincidunt neque, in aliquam elit eros quis tortor. Sed id
              venenatis massa, ut malesuada sem. Nam lacinia sodales tellus nec
              efficitur. Vestibulum fringilla nisl ac iaculis ultricies. Sed
              commodo imperdiet metus vitae molestie. In laoreet rutrum pretium.
              Aenean a enim ac lacus tincidunt pellentesque ac a tellus.
            </p>
          </div>
        </section>
      )}
    </>
  );
}

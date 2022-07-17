import styled from "styled-components";


const Container = styled.div`
   {
    display: flex;
    justify-content: center;
    // padding: 80px;
  }
`;

const Square = styled.div`
   {
    max-width: 25vw;
   
    background: white;
    border-radius: 4px;
    /*box-shadow: 0px 20px 50px #d9dbdf;*/
    transition: opacity .45s cubic-bezier(.25,1,.2,1);

    &:hover {

      background:  linear-gradient(135deg,rgba(255,105,0,1) 0%,#cf2e2e 100%);
      background: linear-gradient(145deg, rgb(95 194 201) 39%, rgb(131 224 231) 85%);
     /* box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);*/
     box-shadow: 0 30px 90px #5fc2c9;
     .h1, p{
         color:white;
     }
     .align-icon svg{
         fill:white;
     }
    }

    .h1 {
      margin: auto;
      text-align: left; 
      padding-left: 30px;
      font-size: 20px;
      color:grey;
    }

    p {
      text-align: justify;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 10px;
            font-size: 12px;
      color: grey;
      line-height: 18px;
    }

 
  }
`;

export const Values = () => {
  return (
    <>
      <Container className="container">
        <Square className="square">
            <div className="align-icon">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32" fill="black">
        <path d="M29.829 31.333c-0.368 0-0.667-0.299-0.667-0.667 0-2.875-2.339-5.213-5.213-5.213-0.368 0-0.667-0.299-0.667-0.667 0-0.367 0.299-0.667 0.667-0.667 3.611 0 6.547 2.937 6.547 6.547 0 0.368-0.299 0.667-0.667 0.667zM4.837 31.333c-0.368 0-0.667-0.299-0.667-0.667 0-3.609 2.937-6.547 6.547-6.547 0.368 0 0.667 0.3 0.667 0.667 0 0.368-0.299 0.667-0.667 0.667-2.875 0-5.213 2.339-5.213 5.213 0 0.368-0.299 0.667-0.667 0.667zM17.212 26.188c-3.969 0-7.195-4.455-7.432-8.341-0.912-0.668-0.943-2.708-0.943-2.98v-1.653c0-0.555 0-1.915 1.333-2.249v-0.297c0-0.368 0.299-0.667 0.667-0.667s0.667 0.299 0.667 0.667v0.888c0 0.368-0.299 0.667-0.667 0.667-0.599 0-0.667 0.101-0.667 0.988v1.652c0 0.789 0.192 1.64 0.363 1.867 0.32 0.048 0.565 0.324 0.565 0.659 0 3.291 2.879 7.464 6.113 7.464 3.212 0 5.8-4.084 5.8-7.464 0-0.177 0.072-0.347 0.195-0.472 0.079-0.080 0.173-0.136 0.276-0.167 0.087-0.305 0.055-1.049 0.039-1.388-0.009-0.195-0.017-0.363-0.017-0.5v-1.653c0-0.887-0.068-0.988-0.667-0.988-0.368 0-0.667-0.299-0.667-0.667v-0.885c0-0.368 0.299-0.667 0.667-0.667s0.667 0.299 0.667 0.667v0.297c1.333 0.335 1.333 1.695 1.333 2.249v1.653c0 0.12 0.007 0.269 0.015 0.436 0.049 1.081 0.049 1.943-0.419 2.432-0.031 0.033-0.065 0.064-0.099 0.092-0.212 3.963-3.249 8.361-7.123 8.361zM26.171 10.667h-24c-0.368 0-0.667-0.299-0.667-0.667s0.299-0.667 0.667-0.667h24c0.368 0 0.667 0.299 0.667 0.667s-0.299 0.667-0.667 0.667zM10.837 31.333c-0.368 0-0.667-0.299-0.667-0.667v-2.667c0-0.368 0.299-0.667 0.667-0.667s0.667 0.299 0.667 0.667v2.667c0 0.368-0.299 0.667-0.667 0.667zM22.837 31.333c-0.368 0-0.667-0.299-0.667-0.667v-2.667c0-0.368 0.299-0.667 0.667-0.667s0.667 0.299 0.667 0.667v2.667c0 0.368-0.299 0.667-0.667 0.667zM24.837 10c-0.368 0-0.667-0.299-0.667-0.667 0-4.043-3.289-7.333-7.333-7.333s-7.333 3.291-7.333 7.333c0 0.368-0.299 0.667-0.667 0.667s-0.667-0.299-0.667-0.667c0-4.779 3.888-8.667 8.667-8.667s8.667 3.888 8.667 8.667c0 0.368-0.299 0.667-0.667 0.667z"></path>
        </svg>
        </div>

          <div className="h1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tempus consectetur?
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tempus consectetur mi nec hendrerit. Integer id est massa.
          </p>

          {/* <Button><a href="https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261" target="_" className="button">Read More</a></Button> */}
        </Square>
      </Container>
    </>
  );
};

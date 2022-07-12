import styled from "styled-components";

const Button = styled.div`
  a {
    background-color: #3edd84;
    color: white;
    width: 90px;
    padding: 10px 18px;   
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 70px;
    font-size: 12px;
    cursor: pointer;
    font-family: "merriweather";
  }
`;

const Container = styled.div`
   {
    display: flex;
    justify-content: center;
    // padding: 80px;
  }
`;

const Square = styled.div`
   {
    width: 27vw;
    height: 430px;
    background: white;
    border-radius: 4px;
    box-shadow: 0px 20px 50px #d9dbdf;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &:hover {

      transform: scale(1.05);
      -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    }

    .h1 {
      margin: auto;
      text-align: left;
      margin-top: 240px;
      padding-left: 30px;

      font-family: 'Big carlson';
      font-size: 24px;
    }

    p {
      text-align: justify;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 20px;
      font-family: Montserrat;
            font-size: 12px;
      color: #c8c8c8;
      line-height: 18px;
    }

    img {
      clip: rect(0px, 27vw, 220px, 0px);
      border-radius: 4px;
      position: absolute;

      width: 27vw;
    }
  }
`;

export const BlogCard = () => {
  return (
    <>
      <Container className="container">
        <Square className="square">
          <img
            src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/03/Broadbeach-Aerials-1-2.jpg"
            className="mask"
          />
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

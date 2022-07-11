import styled from 'styled-components';


const Testimonials = styled.div`
{

  padding: 40px 25px 25px;
  flex-grow: 1;
  flex-basis: 280px;
  max-width: 450px;
  position: relative;
}

`
const TestimonialsText = styled.div`
p{
  font-weight: normal;
  font-size: 22px;
  margin-bottom: 1.5625rem;
  font-family: Montserrat;
}
`

const TestimonialDetails = styled.div`
{
    .testimonial_-details{
      display:flex;
      justify-content:start;
      align-items: center;
    }

    .testimonial__img{
      display: inline-block;
      width: 55px;
      margin-right: 20px;
    }
    img{
      vertical-align: bottom;
      border-radius: 50%;
      box-shadow: 0 15px 37px rgb(0 0 0 / 15%);
    }
}
  
`
const Info =styled.div`
{
  display: inline-block;

  .testimonial__job {
    font-weight: normal;
    font-size: 12px;;
    line-height: 10px;
    letter-spacing: 0.5px;
    color:grey;
  }
  .testimonial__name {
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
  }
}
`
const Container =styled.div`
{

}`

export const TestimonialCard = () => {
    return (
        <>
           

            <Container className="container container--testimonials">
                <Testimonials className="testimonial">
                  <TestimonialsText>
                  <p className="mb-25">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus consectetur mi nec hendrerit. Integer id est massa.”

</p>

                  </TestimonialsText>
                 

                    <TestimonialDetails>
                    <div className="testimonial_-details">
                        <div className="testimonial__img">
                            <img src="https://themenectar.com/salient/business-3/wp-content/uploads/sites/27/2019/09/testimonial.jpg" alt="Timmy Dicki" />
                        </div>
                        <Info className="testimonial__info">
                            <h4 className="testimonial__name">Timmy Dicki</h4>
                            <h5 className="testimonial__job">Railroad Engineer</h5>
                        </Info>
                        </div>
                      
                    </TestimonialDetails>
                </Testimonials>

             
            </Container>
        </>
    )
}
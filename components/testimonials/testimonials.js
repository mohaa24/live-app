import styled from 'styled-components';


const Testimonials = styled.div`
{
  background-color: aliceblue;
  //border-radius: 5px;
  padding: 40px 25px 25px;
  flex-grow: 1;
  flex-basis: 280px;
  max-width: 360px;
  position: relative;
}

`
const TestimonialsText = styled.div`
p{
  font-weight: normal;
  font-size: 1 rem;
 // line-height: 21px;
  margin-bottom: 1.5625rem;
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
      margin-right: 10px;
    }
    img{
      vertical-align: bottom;
      border-radius: 50%;
    }
}
  
`
const Info =styled.div`
{
  display: inline-block;
  .testimonial__job {
    font-weight: normal;
    font-size: 0.5rem;
    line-height: 10px;
    letter-spacing: 0.5px;
  }
  .testimonial__name {
    font-weight: bold;
    font-size: 0.625rem;
    line-height: 12px;
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
                        At first, it may be intimidating to see all of the available courses. Pick a track that interests you and work through it at your own pace.
                    </p>

                  </TestimonialsText>
                 

                    <TestimonialDetails>
                    <div className="testimonial_-details">
                        <div className="testimonial__img">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Timmy Dicki" />
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
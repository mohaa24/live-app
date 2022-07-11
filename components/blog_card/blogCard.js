
import styled from "styled-components";



const Button = styled.div`

a {
    background-color: #3EDD84;
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
    font-family: 'merriweather';
}`    


const Container = styled.div`
{
    display: flex;
    justify-content: center;
   // padding: 80px;
  }
`

const Square = styled.div`
{
    width: 460px;
      height: 430px;
      background: white;
    border-radius: 4px;
    box-shadow: 0px 20px 50px #D9DBDF;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease; 
  
&:hover {
    -webkit-transform: translate(20px, -10px);
    -ms-transform: translate(10px, -10px);
    transform: translate(10px, -10px);
    -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
     }
  



      .h1{
        margin: auto;
        text-align: left;
        margin-top: 240px;
        padding-left: 30px;
        
        font-family: 'Merriweather', serif;
        font-size: 24px;
      }
     
        p{
            text-align: justify; 
            padding-left: 30px;
            padding-right: 30px;
            padding-top :20px;
            font-family: 'Open Sans', sans-serif;
            font-size: 12px;
            color: #C8C8C8;
            line-height: 18px;
           }

           img {
            clip: rect(0px, 460px, 220px, 0px);
            border-radius: 4px;
            position: absolute;
    
            width: 460px;
    
          }        
      
    
}
     `


export const BlogCard = () =>{

 



    return(
        <>


  

    <Container class="container">
      <Square class="square">
        <img src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80" class="mask"/>
     <div class="h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus consectetur?</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus consectetur mi nec hendrerit. Integer id est massa.</p>
        
     {/* <Button><a href="https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261" target="_" class="button">Read More</a></Button> */}
      </Square>
      
      

      
        
      
      
    </Container>
    

  
  
  
  
  
  
  

        </>
    )
}
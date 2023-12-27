import Button from 'react-bootstrap/Button';


const Buttoncom =(props)=>{
    
  

 return (

    <Button style={{margin:'15px',padding:'15px 20px',border:'2px solid black',borderRadius:'unset'}} variant={props.btColor} size="lg"  >{props.btn} </Button>
   
 )
}

export default Buttoncom;
import TextField from '@mui/material/TextField';
import './App.css'
import { useState } from 'react';
import Button from '@mui/material/Button';

function App() {
  const [Principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [Year,setYear]=useState(0)
  const [interest,setInterest]=useState(0)
  const [isPrinciple,setIsPrinciple]=useState(true)
  const [isRate,setIsRate]=useState(true)
  const [isYear,setIsYear]=useState(true)
  
  const validate=(e)=>{
    const name=e.target.name
    const value=e.target.value
  
  

    if(!!value.match(/^[0-9]*$/)){
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name=='rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    else{
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if(name=='rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }
    }
  }

  const handleReset=()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    if(Principle=="" || rate=="" ||Year==""){
      alert('Please fill the form completely')}
    else{
      setInterest((Principle*rate*Year)/100)
    }
  }

  return (
    <>
      <div style={{backgroundColor:'black',height:'100vh'}} className='d-flex justify-content-center align-items-center'> 
        <div style={{backgroundColor:'white',width:'500px'}} className='p-5 rounded'>
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interest easily</p>
          <div style={{backgroundColor:'orange',width:'300px',height:'150px'}} className='p-3 mt-5 rounded shadow d-flex justify-content-center align-items-center flex-column'>
            <h1 className='fw-bold'>₹ {interest}</h1>
            <p>Total simple interest</p>
          </div>
          <form className='mt-4' onSubmit={handleCalculate}>
            <div className='mb-2'>
            <TextField id="outlined1" value={Principle||""} label="Principle amount" variant="outlined" style={{width:'100%'}} onChange={(e)=>validate(e)} name='principle'/>
              {!isPrinciple &&
                <p>*invalid input</p>}
            </div>
            <div className='mb-2'>
            <TextField id="outlined-basic" value={rate||""} label="Rate of Interest" variant="outlined" style={{width:'100%'}} onChange={(e)=>validate(e)} name='rate'/>
            {!isRate &&
              <p>*invalid input</p>}
            </div>
            <div className='mb-2'>
            <TextField id="outlined-basic" value={Year||""} label="Year" variant="outlined" style={{width:'100%'}} onChange={(e)=>validate(e)} name='Year' / >
            {!isYear &&
              <p>*invalid input</p>}
            </div>
            <div className='mb-2'>
            <Button variant="contained" color="success" style={{width:'150px',padding:'15px'}} disabled={isPrinciple && isRate && isYear?false:true} type='submit'>Calculate</Button>
            <Button variant="outlined" style={{width:'150px',padding:'15px',marginLeft:'10px'}} onClick={handleReset}>Reset</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App

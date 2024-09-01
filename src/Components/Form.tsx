import { CheckBox} from '@mui/icons-material';
import { Box, Button, FormGroup, FormControl, TextField, InputLabel, Select, MenuItem, FormControlLabel, FormLabel, RadioGroup, Radio,  } from '@mui/material';
import React, { useState, ChangeEvent } from 'react';

// Define the type for the form inputs
interface Inputs {
  name: string;
  email: string;
  password: string;
  courses: string;
  terms:boolean,
  gender:string
}

const Form: React.FC = () => {
  // Initialize state with the correct type
  const [inputs, setInputs] = useState<Inputs>({
    name: '',
    email: '',
    password: '',
    courses: '',
    terms:false,
    gender:''
  });

  // Type the event handler
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted', inputs);
  };

  return (
    <>
    <div sx={{Margin:'20px'}}>
      <form onSubmit={handleSubmit} >
        <Box sx={{ width: 500, maxWidth: '50%' }}>
          <TextField 
            name="name" 
            value={inputs.name} 
            fullWidth 
            label="Username"
            onChange={handleChange} 
            type="text" 
            id="fullWidth" 
            />
        </Box>
        <br/>
        <Box sx={{ width: 500, maxWidth: '50%' }}>
          <TextField 
            name="email" 
            value={inputs.email} 
            fullWidth 
            label="Email" 
            type="email" 
            onChange={handleChange} 
            id="fullWidth" 
            />
        </Box>
        <br/>
        <Box sx={{ width: 500, maxWidth: '50%' }}>
          <TextField 
            name="password" 
            value={inputs.password} 
            fullWidth 
            label="Password" 
            type="password" 
            onChange={handleChange} 
            id="fullWidth" 
            />
        </Box>
        <br/>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Courses</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="courses" // Added name attribute
              value={inputs.courses}
              label="Courses"
              onChange={handleChange}
              >
              <MenuItem value={'MongoDB'}>MongoDB</MenuItem>
              <MenuItem value={'React'}>React</MenuItem>
              <MenuItem value={'Express'}>Express</MenuItem>
              <MenuItem value={'Nodejs'}>Nodejs</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br/>

        <FormGroup>
          <FormControlLabel label='I agree Terms and conditions' control={
            <CheckBox onChange={()=>setInputs((prevState)=>({
              ...prevState,
              terms:!inputs.terms
            }))
          } />
          }/>
        </FormGroup>
        <br/><br/><br/>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name='gender' onChange={handleChange}>
            <FormControlLabel value={'male'} label={'male'} control={<Radio/>} />
            <FormControlLabel value={'female'} label={'female'} control={<Radio/>} />
            <FormControlLabel value={'other'} label={'other'} control={<Radio/>} />
          </RadioGroup>
        </FormControl>
        <Button type="submit" variant="contained">Submit</Button>
      </form>
      <div>
        <p>Your Data is here:</p>
        <p>Name: {inputs.name}</p>
        <p>Email: {inputs.email}</p>
        <p>Password: {inputs.password}</p>
        <p>Selected Course: {inputs.courses}</p>
      </div>
          </div>
    </>
  );
}

export default Form;

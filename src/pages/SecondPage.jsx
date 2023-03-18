import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, Snackbar, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const SecondPage = () => {
    const [region, setRegion] = useState('');
    const [data, setData] = useState({});
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [inp, setInp] = useState('')

    const {id} = useParams()

    const handleChange = (event) => {
      setRegion(event.target.value);
    };

    const navigate = useNavigate()
    
    const submitForm = (e) => {
        setLoader(true)
        e.preventDefault()
        
        let details = {}
    
        let fm = new FormData(e.target)
    
        fm.forEach((value, key) => {
            details[key] = value
        })

        axios.post("https://test.7x.uz", {details})
            .then(res => {
                if(res.ok){
                    alert("succes")
                    setLoader(false)
                }
            })
            .catch(err => {
                setError(true)
                setLoader(false)
            })
            .finally(() => {
                setLoader(false)
            })


    }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums/" + id)
            .then(res => setData(res.data))
    }, [])


    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setError(false);
      };
    
      const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
          </IconButton>
        </React.Fragment>
      );

    if(loader){
        return(
            <div className="m-auto w-fit">
                <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
                />
            </div>
        )
    }

  return (
<>
    <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Error"
        action={action}
      />
    <div className='w-[500px] m-auto p-5'>
        <div className="top flex gap-6 mb-5"><BsArrowLeft size={30} onClick={() => navigate(-1)}/> <h1>{data.title}</h1></div>
        <div className=" bg-white rounded-xl p-5">
            <div className="top flex gap-6 items-center mb-5">
                <img src="/logo.png" alt="logo" />
                <div>
                    <h1 className='text-xl font-semibold'>{data.title}</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <form className=' flex flex-col gap-10' onSubmit={submitForm}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Регион</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={region}
                    label="Регион"
                    onChange={handleChange}
                    name='region'
                >
                    <MenuItem value={"tashkent"}>Ташкент</MenuItem>
                    <MenuItem value={"buxara"}>Бухара</MenuItem>
                    <MenuItem value={"samarkand"}>Самарканд</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label-second">РЭС</InputLabel>
                <Select
                    labelId="demo-simple-select-label-second"
                    id="demo-simple-select2"
                    label="РЭС"
                    name='res'
                >
                    <MenuItem value={"1 res"}>1 res {region}</MenuItem>
                    <MenuItem value={"2 res"}>2 res {region}</MenuItem>
                    <MenuItem value={"3 res"}>3 res {region}</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label-1">Услуга</InputLabel>
                <Select
                    labelId="demo-simple-select-label-1"
                    id="demo-simple-select3"
                    label="Услуга"
                    name='usluga'
                >
                    <MenuItem value={"electricity"}>За Электроэнергию</MenuItem>
                    <MenuItem value={"fine"}>За штраф</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth className=' flex flex-col gap-10'>
                <TextField name='number' type='number' id="outlined-basic" label="Лицевой N" variant="outlined" onChange={(e) => setInp(e.target.value)}/>
            </FormControl>
            <Button type='submit' variant='outlined' disabled={inp.length <= 5 ? true : false}>Продолжить</Button>
            </form>
        </div>
    </div>
</>
  )
}

export default SecondPage
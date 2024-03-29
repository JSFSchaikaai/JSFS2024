import * as React from 'react';
import './App.css'
//import TextField from '@mui/material/TextField';
import { Box, Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';


function App() {
  const [bVar1, setBVar1] = React.useState<"contained"|"outlined"|"text">('contained')
  const [bVar2, setBVar2] = React.useState<"contained"|"outlined"|"text">('outlined')

  return (
    <div>
      <div className="head-panel">
        <div className='head-panel-lefs'>
          <img src="https://cdn2.iconfinder.com/data/icons/seo-internet-marketing-6/256/Communities__Networks-1024.png" height={70} width={70}></img>
          <Box paddingLeft={2}>
            <Typography variant='h4'> Анонимный </Typography>
            <Typography variant='h6'> учебный центр </Typography>
          </Box>
        </div>
        <Button variant="outlined">О нас</Button>
      </div>

      <Typography variant='h4' sx={{pt:3}}> Регистрация на мероприятие </Typography>
      <Typography sx={{pt:1}}> Выберите день и время: </Typography>

      <Typography fontSize={20} fontFamily={"Impact, Charcoal, sans-serif"} sx={{pt: 1, pb:1, pl:14, color: 'coral'}}>Подростки</Typography>
      <ButtonGroup size='large'>
        <Button variant={bVar1} onClick={()=>{setBVar1('contained'); setBVar2('outlined');}}>Вс 10:00</Button>
        <Button variant={bVar2} onClick={()=>{setBVar1('outlined'); setBVar2('contained');}} >Вс 13:00</Button>
      </ButtonGroup>
      <Box display={'flex'}>
        <Typography variant='body2' sx={{pt:1, pl:4}}> 75 мест</Typography>
        <Typography variant='body2' sx={{pt:1, pl:7}}> 75 мест</Typography>
      </Box>
      

      <Typography variant='h5' sx={{pt:3}}> Мастер-класс 12 июня </Typography>
      <div className='param'>
        <Typography > Фамилия </Typography>
        <TextField label="" variant="outlined" size='small'/>
      </div>
      <div className='param'>
        <Typography > Имя </Typography>
        <TextField label="" variant="outlined" size='small'/>
      </div>

      <div className='param'>
        <Typography > Телефон </Typography>
        <TextField label="" variant="outlined" size='small'/>
      </div>

      <div className='param'>
        <Typography > Эл. почта </Typography>
        <TextField label="" variant="outlined" size='small'/>
      </div>

      <div className='param'>
        <Typography > Дата рождения </Typography>
        <TextField label="дд.мм.гггг" variant="outlined" size='small'/>
      </div>

      
      <FormControlLabel control={<Checkbox />} label="Я здесь впервые" sx={{pt:3}}/>
      <Typography fontSize={12}> поставте галочку, если вы еще никогда не были в нашей церкви </Typography>

      <FormControlLabel label="" control={ <><Checkbox /> <p> Я выража свое согласие с условиями <a href='https://rkn.gov.ru'>условиями</a></p></> } sx={{pt:3}} /> 
      <Typography fontSize={13} sx={{pb:2}}> Заполние фамилию, имя, почту, телефон, дату рождения и согласие на обработку данных </Typography>

      <div>
      <Button variant="contained" >Зарегистрироваться</Button>
      </div>

      <Typography noWrap={false} fontSize={11} sx={{pt:2, pb:2}}> 
      Аноимный учебный центр ОГРН 1037739249569, зарегистрирована в Минюсте РФ,
      бланк № 76 08941, учетный № 7711010455, дата 27.12.2010г.
      </Typography>

      <a href='https://rkn.gov.ru'>
      &laquo;Политика в отношении обработки персоняльных данных&raquo;
      </a>
      
      
    </div>
  )
}

export default App

import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import secondPic from '../assets/images/BRUSH-3 2.png';

const Footer = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [cellPhone, setCellPhone] = useState('');

  const postNewsletter = () => {
    let body = {
      firstname: name,
      lastname: lastName,
      email: mail,
      phone: cellPhone
    };

    fetch('https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .catch((error) => console.log('Error', error))
      .then((response) => alert(response));
  };
  return (
    <footer style={{ marginTop: '20px' }}>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
        <img
          style={{
            position: 'absolute',
            width: 550,
            height: 70,
            marginTop: 50,
            marginLeft: -95,
            opacity: 0.3
          }}
          src={secondPic}></img>
        <span className="primary-font article-title">Contáctanos</span>
      </div>
      <div style={{ marginTop: '40px' }}>
        <Stack direction="row" spacing={12} justifyContent="center" alignItems="center">
          <Stack direction="column">
            <span>Nombre</span>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </Stack>
          <Stack direction="column">
            <span>Apellido</span>
            <TextField value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </Stack>
        </Stack>
        <Stack
          direction={'row'}
          spacing={12}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: '10px' }}>
          <Stack direction="column">
            <span>Mail</span>
            <TextField value={mail} onChange={(e) => setMail(e.target.value)} />
          </Stack>
          <Stack direction="column">
            <span>Teléfono</span>
            <TextField value={cellPhone} onChange={(e) => setCellPhone(e.target.value)} />
          </Stack>
        </Stack>
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: 20,
            height: 100
          }}>
          <Button
            onClick={postNewsletter}
            olor="warning"
            sx={{ borderRadius: 28 }}
            variant="contained">
            Enviar
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

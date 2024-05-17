import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <Box
                component={'form'}
                noValidate
                autoComplete={'off'}
                style={{
                    padding: '1em',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <TextField
                    id={'username_field'}
                    label={'Username'}
                    variant={'outlined'}
                    style={{
                        marginBottom: '1em',
                    }}
                    onChange={handleUsernameChange}
                />
                <TextField
                    id={'password_field'}
                    label={'Password'}
                    variant={'outlined'}
                    type={'password'}
                    style={{
                        marginBottom: '1em',
                    }}
                    onChange={handlePasswordChange}
                />
                <Button disabled={!username || !password} variant={'outlined'}>Sign Up</Button>
            </Box>
        </>
    )
}

export default App

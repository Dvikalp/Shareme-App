import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import { jwtDecode } from 'jwt-decode'
import { client } from '../client'

const Login = () => {

  const navigate = useNavigate();

  const responseGoogle = (credentialResponse) => {

    const decoded = jwtDecode(credentialResponse.credential);
    // console.log(decoded);
    const { name, picture, sub } = decoded;

    const user = {
      _id: sub,
      _type: 'user',
      username: name,
      image: picture,
    }

    client.createIfNotExists(user)
      .then(() => {
        navigate('/', { replace: true })
      })
  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          autoPlay
          muted
          className='w-full h-full object-cover'
        />

        <div className='absolute flex flex-col justify-center items-center right-0 left-0 top-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width="180px" alt="logo" />
          </div>
          <div className='shadow-2xl'>
            <GoogleLogin
              onSuccess={responseGoogle}
              onError={() => {
                console.log('Login Failed');
              }} />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Login
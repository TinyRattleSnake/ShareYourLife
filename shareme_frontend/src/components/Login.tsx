import { useNavigate } from 'react-router-dom'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import { GoogleLogin } from '@react-oauth/google'
import { client } from '../client'
import { jwtDecode } from 'jwt-decode'

const Login = () => {
    const navigate = useNavigate();

    const user = false;
    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video src={shareVideo}
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='w-full h-full object-cover'
                />
                <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                    <div className='p-5'>
                        <img src={logo} width='130px' alt='logo' />
                    </div>
                    {user ? (
                        <div>Logged In</div>
                    ) : (
                        <GoogleLogin
                            onSuccess={async (response: any) => {
                                const decoded: { name: string, picture: string, sub: string } = jwtDecode(response.credential);
                                localStorage.setItem('user', JSON.stringify(decoded));
                                const { name, picture, sub } = decoded;
                                const doc = {
                                    _id: sub,
                                    _type: 'user',
                                    userName: name,
                                    image: picture
                                }

                                client.createIfNotExists(doc)
                                    .then(() => {
                                        navigate('/', { replace: true })
                                    })
                            }}
                            onError={() => console.log('Error')}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
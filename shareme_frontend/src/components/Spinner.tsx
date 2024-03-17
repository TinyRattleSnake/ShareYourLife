import {Circles} from 'react-loader-spinner'

const Spinner = (props: { message: string }) => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <Circles
                color="#00BFFF"
                height={50}
                width={200}
            />
            <p className='text-lg text-center px-2'>{props.message}</p>
        </div>
    )
}

export default Spinner
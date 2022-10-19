import Image from 'react-bootstrap/Image';

export default function sans(){
    return(
        <>
        <h1 className='sansH1 text-center'>SAAS</h1>

        <div className='text-center'>
            <Image
                src=
                "/Sans.jpg"
                className='img-fluid sans'
            />
        </div>
        </>
    )
}
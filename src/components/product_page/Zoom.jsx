import ReactImageMangnify from 'react-image-magnify';
import './css/zoom.css';


function Zoom(props){

    return(
        <div>
            <div className='imageMagnifier'>
            <ReactImageMangnify {...{
                smallImage: {
                    alt: 'Sequential Timer',
                    isFluidWidth: true,
                    src:props.image
                },
                largeImage: {
                    src:props.image,
                    width: 960,
                    height: 1280
                },
              
        }}  />
            </div>
        </div>
    )
}

export default Zoom;
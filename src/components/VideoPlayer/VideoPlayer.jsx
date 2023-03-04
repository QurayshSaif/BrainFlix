import './VideoPlayer.scss'


export default function VideoPlayer(props){
    // console.log(VideoDetails[0])
    return(
        <section className='video'>
            <video controls className='video__player' poster={props.image}>
            </video>
        </section>
    )
}


import './SocialMedia.css';
import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';
import Instagram from '../../assets/instagram.svg';
import LinkedIn from '../../assets/linkedIn.svg';

function SocialMedia() {
    return (
        <>
            <div className='socialWrapper'>
                <div className='socialLink facebook'>
                    <img src={Facebook}></img>
                    <a href='https://www.facebook.com/POLO99321' target="_blank">/POLO99321</a>
                </div>
                <div className='socialLink twitter'>
                    <img src={Twitter}></img>
                    <a href='https://twitter.com/polo99321' target="_blank">@polo99321</a>
                </div>
                <div className='socialLink instagram'>
                    <img src={Instagram}></img>
                    <a href='https://www.instagram.com/s.polo.b/' target="_blank">@s.polo.b</a>
                </div>
                <div className='socialLink linkedIn'>
                    <img src={LinkedIn}></img>
                    <a href='https://www.linkedin.com/in/souravbanerjee98/' target="_blank">/souravbanerjee98</a>
                </div>
            </div>
        </>
    )
}

export default SocialMedia;
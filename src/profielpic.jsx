function ProfilePicture(){

        const imgUrl='./src/assets/images.jpg';


        const handleClick=(e) => {
               e.target.style.display='none';

        }
        return (<img onClick={(e) => handleClick(e)} src={imgUrl}></img>)

}

export default ProfilePicture
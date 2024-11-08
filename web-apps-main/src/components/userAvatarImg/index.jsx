const UserAvatarImgComponent = (props) => {
    return (
        <div className={`userImg ${props.lg === true ? 'lg' : ''}`}>
            <span className="rounded-full">
                <img src={props.img} className="w-full h-full object-cover" />
            </span>
        </div>
    )
}

export default UserAvatarImgComponent;
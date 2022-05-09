const Testimonial = ({ avatar, text, name, job }) => {
    return (
        <div className="testimonial">
            <div className="testimonialAvatarContainer">
                <img src={avatar} alt={name + 'avatar'} />
            </div>
            <p className="testimonialText">
                {text}
            </p>
            <h3 className="testimonialName">
                {name}
            </h3>
            <p className="testimonialJobTitle">
                {job}
            </p>
        </div>
    );
}

export default Testimonial;
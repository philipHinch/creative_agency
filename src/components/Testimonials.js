//data
import data from './data'
//component
import Testimonial from './Testimonial';


const Testimonials = () => {
    return (
        <div className="testimonialsContainer">
            <h2 className="testimonialsHeader">
                Client Testimonials
            </h2>
            <div className="testimonials">
                {data && data.map(person => (
                    <Testimonial key={person.id} avatar={person.avatar} text={person.text} name={person.name} job={person.job_title} />
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
import "./contact.scss"
import { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
       e.preventDefault();
       setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <h1>CONTACT ME </h1>
        </div>
    )
}


import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'


const ContactData = [
  {
    id:1,
    icon: <MdOutlineEmail />,
    title:"Email",
    info: "ma2078865@gmail.com",
    link: "ma2078865@gmail.com",
  },
  {
    id:1,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Mohamed Ayman",
    link: "https://m.me/houdareda.99",
  },
  {
    id:1,
    icon: <BsWhatsapp />,
    title:"WhatsApp",
    info: "01100485047",
    link: "https://api.whatsapp.com/send?phone=201100485047",
  }
]


const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bctnlcj', 'template_3f4ng8t', form.current, 'Zb8rTnmgAhC2XrWD-',
      )
      e.target.reset();
  
    };

  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5 className="text-light">Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
{ContactData.map(({id,icon,title,info,link})=>(
  <article key={id} className='contact_option'>
    {icon}
    <h4>{title}</h4>
    <h5>{info}</h5>
    <a href={link} target='_blank'>Send Message</a>
  </article>
))}
        </div>
        <form ref= {form} onSubmit={sendEmail}>
          <input type="text" placeholder='Full Name' name='name'/>
          <input type="email" placeholder='Your email' name='email'/>
          <textarea name="message" id="" placeholder='type any thing...' rows={10}></textarea>
          <button className='btn btn_primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
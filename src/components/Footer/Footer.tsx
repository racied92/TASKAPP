import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons"

const Footer = () => {
    return (
        <div className="container">
            <footer className= "d-flex flex-wrap justify-content-between aling-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary">&copy; 2023 App CarpintríaMC</a>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="#"><Facebook/></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><Instagram/></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><Whatsapp/></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Basket, Person } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TaskService } from "../../services/TaskSerice";
import { Task } from "../../types/Task";
import ModalAgregarTarea from "../ModalAgregarTarea/ModalAgregarTarea";
import 'react-toastify/dist/ReactToastify.css';


const NavBar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSowModal =() => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const createTask = async (newTask: Task) =>{
    try{
      const result = await TaskService.createTask(newTask);
      console.log('Nueva tarea agregada:', result.id);
      navigate(`/detalle/${result.id}`);

      toast.success('Tarea creada correctamente', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } catch (error) {
      toast.error('Error al crear la tarea:', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.error('Error al crear la tarea:', error);
    }
  };
  
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CarpinteríaMC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link onClick={() => navigate('/')}>Inicio</Nav.Link>

            <NavDropdown title="Tareas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Por Hacer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">En Poducción</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">En Revición</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Finalizada</NavDropdown.Item>
            </NavDropdown>

        <Nav.Link onClick={handleSowModal}>Agregar Tarea</Nav.Link>
          </Nav>

        <nav className="d-done d-dm-flex ms-auto">
          <Nav.Link href="#carrito">
             <Basket />
          </Nav.Link>


          <Nav.Link href="#usuario">
             <Person />
          </Nav.Link>
        </nav>
        <div className="d-md-none">
            <ul className="navbar-nav me-auto-mb-2 mb-md-0">
                <li className="nav-item">
                    <a className="nav-link" href="#ticket">Ticket</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#ticket">Ticket</a>
                </li>
            </ul>
        </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <ModalAgregarTarea showModal={showModal} handleClose={handleCloseModal} createTask={createTask} />

    </>
  )
}

export default NavBar
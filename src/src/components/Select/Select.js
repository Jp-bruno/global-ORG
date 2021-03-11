import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function Drop(ev) {
    ev.preventDefault();
    let seta = ev.target.nextElementSibling;
    seta.click();
}

function Select() {
    return(
    <>
        <Dropdown as={ButtonGroup}>
            <Button split onClick={Drop}>Escolha uma causa</Button>
            <Dropdown.Toggle split id="dropdown-split-basic" />
            <Dropdown.Menu align="right" >
                <Dropdown.Item href="#/action-1">Causa 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Causa 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Causa 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown as={ButtonGroup}>
            <Button split onClick={Drop}>Escolha uma habilidade</Button>
            <Dropdown.Toggle split id="dropdown-split-basic"/>
            <Dropdown.Menu align="right">
                <Dropdown.Item href="#/action-1">Habilidade 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Habilidade 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Habilidade 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </>
    )
}

export default Select;

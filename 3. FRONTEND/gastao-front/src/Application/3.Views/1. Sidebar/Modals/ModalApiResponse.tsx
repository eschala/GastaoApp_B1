// Reemplaza el contenido de tu ModalApiResponse (archivo aparte)
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// 1. AÑADE UNA PROP 'onClose'
export function ModalApiResponse({ title, msg, isBadRequest, onClose }: { title: string, msg: any, isBadRequest: boolean, onClose: () => void }) {
    
    const classStyleVariant = isBadRequest ? "danger" : "success";

    return (
        // 2. Usa el componente Modal de react-bootstrap
        <Modal show={true} onHide={onClose} centered>
            <Modal.Header closeButton className={`bg-${classStyleVariant} text-white`}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{msg}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Cerrar</Button>
                {/* Puedes eliminar el botón "Aceptar" o mantenerlo si tiene una función */}
            </Modal.Footer>
        </Modal>
    );
}
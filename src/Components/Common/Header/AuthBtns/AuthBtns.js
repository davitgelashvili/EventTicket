import { useNavigate } from "react-router-dom"
import UiInput from "../../../Ui/UiInput/UiInput"
import { Col, Row } from "react-bootstrap"

const AuthBtns = () => {
    const navigate = useNavigate()

    return (
        <Row>
            <Col>
                <UiInput 
                    type='submit'
                    value={'ავტორიზაცია'}
                    onClickInput={() => navigate('/login')}
                    className={'dark'}
                />
            </Col>
            <Col>
                <UiInput 
                    type='submit'
                    value={'რეგისტრაცია'}
                    onClickInput={() => navigate('/registration')}
                    className={'light'}
                />
            </Col>
        </Row>
    )
}

export default AuthBtns
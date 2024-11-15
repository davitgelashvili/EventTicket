import { useState } from 'react'
import Style from './Header.module.css'
import Logo from './Logo/Logo'
import Profile from './Profile/Profile'
import { useSelector } from 'react-redux'
import AuthBtns from './AuthBtns/AuthBtns'
import { Col, Container, Row } from 'react-bootstrap'

function Header() {
    const [login, setLogin] = useState(false)
    const user = useSelector( state => state.userData)

    console.log(user.logedIn)

    return (
        <header className={`${Style['header']}`}>
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col>
                        <Logo />
                    </Col>
                    <Col xs={5} className='d-flex justify-content-end'>
                        {user.logedIn ? (
                            <Profile />
                        ) : (
                            <AuthBtns />
                        )}
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
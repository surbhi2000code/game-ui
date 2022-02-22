import React from 'react'
import {  Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MineDropdown() {
  return (
    <>
         <div>
                <div>

                    <div style={{ marginTop: '15px' }}>
                        <Dropdown>
                        <Link to='/orders' style={{color:'black', textDecoration:'none'}}><Dropdown.Toggle style={{ width: '100vw', textAlign: 'inherit' }} id="dropdown-button-dark-example1" variant="light">
                                
                                Order
                            </Dropdown.Toggle></Link>
                        </Dropdown>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <Dropdown>
                        <Link to='/promotion' style={{color:'black', textDecoration:'none'}}><Dropdown.Toggle style={{ width: '100vw', textAlign: 'inherit' }} id="dropdown-button-dark-example1" variant="light">
                                
                               Promotion
                            </Dropdown.Toggle></Link>
                        </Dropdown>
                    </div>

                    <div style={{ marginTop: '15px' }} >
                        <Dropdown >
                            <Dropdown.Toggle style={{ width: '100vw', textAlign: 'inherit' }} id="dropdown-button-dark-example1" variant="light">
                                
                                Wallet
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="light" style={{ width: '100vw' }}>
                                <Dropdown.Item active>
                                   
                                    <Link to='/recharge' style={{color:'black', textDecoration:'none'}}> Recharge</Link>
                                </Dropdown.Item>
                                <Dropdown.Item > <Link to='/withdrawal' style={{color:'black', textDecoration:'none'}}>Withdrawal</Link></Dropdown.Item>
                                <Dropdown.Item > <Link to='/transactions' style={{color:'black', textDecoration:'none'}}>Transactions</Link></Dropdown.Item>
                                <Dropdown.Divider />
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <Dropdown>
                            <Dropdown.Toggle style={{ width: '100vw', textAlign: 'inherit' }} id="dropdown-button-dark-example1" variant="light">
                            <Link to='/add/bank' style={{color:'black', textDecoration:'none'}}>Bank Card</Link>
                            </Dropdown.Toggle>
                        </Dropdown>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <Dropdown>
                            <Dropdown.Toggle style={{ width: '100vw', textAlign: 'inherit' }} id="dropdown-button-dark-example1" variant="light">
                            <Link to='/add/address' style={{color:'black', textDecoration:'none'}}>Address</Link>
                            </Dropdown.Toggle>
                        </Dropdown>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <Dropdown>
                            <Dropdown.Toggle style={{ width: '100vw', textAlign: 'inherit' }} id="dropdown-button-dark-example1" variant="light">
                                
                                Account Security
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="light" style={{ width: '100vw' }}>
                                <Dropdown.Item active>
                                <Link to='/reset/password' style={{color:'black', textDecoration:'none'}}>Reset Password</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <Dropdown>
                            <Dropdown.Toggle style={{ width: '100vw', textAlign: 'inherit' }} id="dropdown-button-dark-example1" variant="light">
                                
                                <Link to='/ComplaintsSuggestions' style={{color:'black', textDecoration:'none'}}>Complaints & Suggestions</Link>
                            </Dropdown.Toggle>
                        </Dropdown>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <Dropdown>
                            <Dropdown.Toggle style={{ width: '100vw', textAlign: 'inherit' }} id="dropdown-button-dark-example1" variant="light">
                                
                                About
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="light" style={{ width: '100vw' }}>
                                <Dropdown.Item active>
                                <Link to='/privacy/policy' style={{color:'black', textDecoration:'none'}}>Privacy Policy</Link>
                                </Dropdown.Item>
                                <Dropdown.Item > <Link to='/RiskDisclosure' style={{color:'black', textDecoration:'none'}}>Risk Disclosure Agreement </Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
    </>
  )
}

export default MineDropdown
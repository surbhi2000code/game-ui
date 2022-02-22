import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components'
import { BiEdit } from 'react-icons/bi';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { FcViewDetails } from 'react-icons/fc';
import MaterialTable from "material-table";
const TableCom = () => {
const [userData, setuser] = useState([])

    useEffect(() => {
        showUser();
    
      },[])
    
      const showUser = async () => {
        var myHeaders = new Headers();
myHeaders.append("Cookie", "Cookie_1=value");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:5000/showUser", requestOptions)
  .then(response => response.json())
  .then(result => {
    setuser(result)
  })
  .catch(error => console.log('error', error));
      }


      
    return (
        <>
        <div style={{padding:'30px'}}>

            <MaterialTable
                title="Simple Action Preview"
                columns={[
                    { title: 'Name', field: 'userName' },
                    { title: 'Mobile No.', field: 'userMobile' },
                    { title: 'Password', field: 'userPassword'},
                     
                ]}
                data={userData}
               
                actions={[
                    // {
                    //     icon: 'edit',
                    //     tooltip: 'Save User',
                    //     onClick: (event, rowData) => alert("You saved " + rowData.userId)
                    // },
                    // {
                    //     icon: 'remove',
                    //     tooltip: 'Save User',
                    //     onClick: (event, rowData) => alert("You saved " + rowData.userId)
                    // },
                    {
                        icon: 'save',
                        tooltip: 'Save User',
                        onClick: (event, rowData) => alert("You saved " + rowData.userId)
                    }
                    
                ]}
            />
        </div>
               
        </>
    )
}

export default TableCom

const Action = styled.div`
    display:flex;
    font-size: 20px;
`;

const Button = styled.div`
    margin-Left: 1.5rem;
    cursor: pointer;
    

    @media screen and (min-width: 768px) {
        margin-Left: 5rem;
      }
`;
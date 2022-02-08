import React from "react"
// import Header from "./components/Header"
// import Memo from "./components/Memo"


export default function Appp() {
   const [contact, setContact] = React.useState({
       fullName: 'Jone Doe',
       firstName: 'Jone',
       phone: 1234455,
       email: 'omar.lu86@gmail.com',
       address: 'Dhaka, Bangladesh',
       isFavorit: false
   })

    return (
        <div>
           <h1>{contact.firstName}</h1>

        </div>
    )
}

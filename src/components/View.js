import React from "react"
import {Icon} from "react-icons-kit"
import {trash} from 'react-icons-kit/feather'


export const View = ({Books, deleteBook}) => {

     return Books.map(Book=>(

        <tr key={Book.R}>
            <td>{Book.R}</td>
            <td>{Book.Title}</td>
            <td>{Book.Author}</td>
            <td className="delete-btn" onClick={()=>deleteBook(Book.R)}>
                <icon icon={trash}/>
            </td>
        </tr>
     ))
}
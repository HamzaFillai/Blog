import React from 'react'
import SideBar from './SideBar'
import "../../style/Blogs.css"
import TableBlogs from './Table/TableBlogs'

export default function Blogs() {
    return (
        <div className="adminblogs">
            <SideBar/>
            <TableBlogs/>
        </div>
    )
}

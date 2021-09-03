import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className="sidebar"
        style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
        >
        <CDBSidebar textColor="#4B6587" backgroundColor="#F0E5CF">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
                href="/"
                className="text-decoration-none"
                style={{ color: 'inherit' }}
            >
                Admin
            </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu >
                <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/users" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/blogs" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="blog">Blogs</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/blogs" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="ticket-alt">Tickets</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
                </NavLink>
            </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
            
            </CDBSidebarFooter>
        </CDBSidebar>
        </div>
    )
}

import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AppMenu from '../../components/AppMenu/AppMenu'
import News from '../../components/News/News'

export const router = createBrowserRouter( [
{
    path:'/',
    element:<AppMenu/>
},
{
    path:'/news',
    element:<News/>
}


]
)

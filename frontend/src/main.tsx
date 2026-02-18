import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'
import { initLogger } from './utils/logger'

// 初始化日志系统
initLogger()

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

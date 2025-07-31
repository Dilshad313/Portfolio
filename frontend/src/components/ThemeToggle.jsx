import React, { useState } from 'react'
import { Moon, Sun} from "lucide-react"

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div>
        <button>{""}
            {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300'/> : 
            <Moon className='h-6 w-6 text-blue-900'/>}
        </button>
    </div>
  )
}

export default ThemeToggle
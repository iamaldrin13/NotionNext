import { useGlobal } from '@/lib/global'
import { useImperativeHandle } from 'react'
import { Moon, Sun } from './HeroIcons'

/**
 * Dark Mode Button component.
 * Provides a clickable button to toggle between dark and light modes.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {*} props.cRef - Ref forwarded from the parent.
 * @param {string} props.className - Additional CSS class names.
 * @returns {JSX.Element} Rendered DarkModeButton component.
 */
const DarkModeButton = props => {
  const { cRef, className } = props
  const { isDarkMode, toggleDarkMode } = useGlobal()

  /**
   * Exposes methods to parent components.
   * In this case, provides a method to toggle the dark mode.
   */
  useImperativeHandle(cRef, () => {
    return {
      handleChangeDarkMode: () => {
        toggleDarkMode()
      }
    }
  })

  return (
    <div className={`${className || ''} flex justify-center dark:text-gray-200 text-gray-800`}>
      <div
        onClick={toggleDarkMode}
        id='darkModeButton'
        className='hover:scale-110 cursor-pointer transform duration-200 w-5 h-5'>
        {isDarkMode ? <Sun /> : <Moon />}
      </div>
    </div>
  )
}

export default DarkModeButton

import { Popover as Pop } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
// import { useState } from 'react'

interface Props {
  children: React.ReactNode
  renderPopover?: React.ReactNode
  className?: string
}

export default function Popover({ children, renderPopover, className }: Props) {
  // const [isOpen, setIsOpen] = useState(false)

  // const showPopover = () => {
  //   setIsOpen(true)
  // }
  // const hidePopover = () => {
  //   setIsOpen(false)
  // }

  return (
    <Pop
      className='relative py-1'
      // onMouseEnter={showPopover}
      // onMouseLeave={hidePopover}
    >
      <Pop.Button className={className}>{children}</Pop.Button>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, transform: 'scale(0)' }}
          animate={{ opacity: 1, transform: 'scale(1)' }}
          exit={{ opacity: 0, transform: 'scale(0)' }}
          transition={{ duration: 0.2 }}
        >
          <Pop.Panel className='absolute z-10'>
            <div className='flex flex-col space-y-2 px-1 py-2 bg-white items-center rounded-md'>{renderPopover}</div>
          </Pop.Panel>
        </motion.div>
      </AnimatePresence>
    </Pop>
  )
}

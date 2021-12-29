import React, { useEffect } from 'react'

interface DropdownSelectProperty {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    buttonRef: React.RefObject<HTMLInputElement>,
    listRef: React.RefObject<HTMLInputElement>,
}

const useDropdownSelect = ({
    isOpen,
    setIsOpen,
    buttonRef,
    listRef,
}: DropdownSelectProperty) => {
    useEffect(() => {
        const handler = (e: { target: any; }) => {
            if (!listRef.current?.contains(e.target) && e.target !== buttonRef.current) {
                setIsOpen(false)
            }
            if (isOpen && (e.target === buttonRef.current)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handler)
        return () => {
            document.removeEventListener('click', handler)
        }
    }, [buttonRef && buttonRef.current, listRef && listRef.current, isOpen])
}

export default useDropdownSelect

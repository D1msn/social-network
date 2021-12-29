import React, {
    useCallback, useEffect, useRef, useState,
} from 'react'
import { List } from 'react-virtualized'
import useDropdownSelect from '../../../hooks/useDropdownSelect'

interface PaginatorMoreItemProperty {
    item: any,
    setActivePage: any
}

const PaginatorMoreItem = ({ item, setActivePage }: PaginatorMoreItemProperty) => {
    const [visibleList, setVisibleList] = useState(false)
    const buttonRef = useRef(null)
    const listRef = useRef(null)

    const getSublist = () => {
        const arrayForDisplay = []
        for (let i = item.value[0]; i <= item.value[1]; i += 1) {
            arrayForDisplay.push({ id: i, value: i })
        }

        return arrayForDisplay
    }

    const subListRef = useRef(getSublist())

    useDropdownSelect({
        isOpen: visibleList,
        setIsOpen: setVisibleList,
        buttonRef,
        listRef,
    })

    const handleSetActivePage = useCallback((e, value) => {
        e.stopPropagation()
        setVisibleList(false)
        setActivePage(value)
    }, [])

    const onClickSubItem = useCallback(itemValue => (e: any) => {
        handleSetActivePage(e, itemValue)
    }, [])

    useEffect(() => {
        subListRef.current = getSublist()
    }, [item])

    const renderRow = useCallback(({ index, key, style }) => (
        <li className="sublist__item" key={key}
            style={style}
            onClick={onClickSubItem(subListRef.current[index].value)}>
            {subListRef.current[index].value}
        </li>
    ), [])

    const onClickPaginationItem = useCallback(() => setVisibleList(true), [])

    return (
        <>
            <li className="pagination__item pagination__more"
                ref={buttonRef}
                onClick={onClickPaginationItem}
                key={item.id}
            >
                ...
                <ul className={`sublist ${visibleList && 'active'}`}
                    ref={listRef}>
                    <span className="sublist__header">Страница</span>
                    <List
                        width={100}
                        height={200}
                        rowHeight={30}
                        rowRenderer={renderRow}
                        rowCount={subListRef.current.length}
                        overscanRowCount={3}
                        className='scroller'
                    />
                </ul>
            </li>
        </>
    )
}

export default PaginatorMoreItem

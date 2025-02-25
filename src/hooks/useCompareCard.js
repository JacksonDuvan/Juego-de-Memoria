import { useState } from 'react'

export const useCompareCard = (data) => {
    const [allData, setAllData] = useState(data)
    const [intentos, setIntentos] = useState(0)
    const [counter, setCounter] = useState(0)
    const [sound, setSound] = useState(false)
    let card = []

    const compareCard = (id) => {
        card.push(id)
        setTimeout(() => {
            if(card.length === 2){
                setIntentos(intentos + 1)
                if(card[0] === card[1]){
                    const newData = allData.map((row) => {  
                        return row.map((item) => item.id === id ? { ...item, found: true } : item)
                    })
                    setSound(true)
                    setCounter(counter + 1)
                    setAllData(newData)
                    setTimeout(() => {
                        setSound(false)
                    }, 1000)
                    return card.length = 0
                }else{
                    return card.length = 0
                }
            }
            return card.length = 0
        }, 1500)
    }

    return { 
        allData, 
        intentos, 
        counter, 
        sound,
        card,  
        compareCard
    }
}
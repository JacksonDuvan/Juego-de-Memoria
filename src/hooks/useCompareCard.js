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
                    let newData = allData.filter(item => item.id !== id)
                    setSound(true)
                    setCounter(counter + 1)
                    setTimeout(() => {
                        setAllData(newData)
                        setSound(false)
                    }, 2000)
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
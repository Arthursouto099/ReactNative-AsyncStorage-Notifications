import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ContactForm } from "../components/ContactForm";
import { Alert, View } from "react-native";
import { ContactType } from "../types/commonTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container } from "../components/CardsContainer";



interface ReadDataProps {
    setData: Dispatch<SetStateAction<ContactType[]>>
}

interface SaveDataProps {
    currentData: Array<ContactType>
    newData: ContactType,
}


interface RemoveDataProps {
    currentData: Array<ContactType>
    idData: string
}

const readData = async ({ setData }: ReadDataProps) => {
    try {
        const data = await AsyncStorage.getItem("@ContactList")
        if (!data) return
        setData(JSON.parse(data) as Array<ContactType>)

    }

    catch (error) {
        Alert.alert((error as any).message)
    }
}


const saveData = async ({ currentData, newData }: SaveDataProps, { setData }: ReadDataProps) => {
    try {
        const newCurrentData = ([...currentData, newData])
        setData(newCurrentData)
        const data = JSON.stringify(newCurrentData)
        await AsyncStorage.setItem("@ContactList", data)

    }

    catch (error) {
        Alert.alert((error as any).message)
    }
}


const removeData = async ({ currentData, idData }: RemoveDataProps, {setData}: ReadDataProps) => {
    const id = currentData.find((data) => data.id === idData)
    if (!id) return

    try {
        const newData = currentData.filter((data) => data.id !== idData )
        setData(newData)
        await AsyncStorage.setItem("@ContactList", JSON.stringify(newData))

    }
    catch (error) {
        Alert.alert((error as any).message)
    }
}




const StorageController = () => {
    const [contacts, setContact] = useState<ContactType[]>([])

    useEffect(() => {
        readData({ setData: setContact })
    }, [])


    return (
        <View style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ContactForm callbackInfo={(data) => {
                saveData({ currentData: contacts, newData: data }, { setData: setContact })
            }} />

            <Container onDeleteCard={(id) => {
               removeData({currentData: contacts, idData: id}, {setData: setContact})
            }} contactObjects={contacts} />
        </View>

    )
}


export default StorageController
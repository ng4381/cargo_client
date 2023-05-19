import React, { useState } from "react"
import { InnInputForm } from "../InnInputForm/InnInputForm"
import { InnInfoForm } from "../InnInfoForm/InnInfoForm"
import cl from './MainCheckForms.module.css';
import { Header } from "../Header/Header";

export const MainCheckForms = () => {

    const [json, setJson] = useState('');
    const [tableHeaders, setTableHeaders] = useState([])
    const [tableRows, setTableRows] = useState([])


    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)

            setJson(text)
        };
        reader.readAsText(e.target.files[0])
    }


    const parseJson = (jsonString) => {

        console.log('my json = ' + json)

        var myObject = JSON.parse(jsonString);
        console.log(myObject)

        console.log(myObject.resultInns[0])

        const firstRow = myObject.resultInns[0];

        setTableHeaders(Object.keys(firstRow))

        setTableRows(myObject.resultInns)
        

    }

    const showInfo = (inn, checked) => {
        console.log(inn)
        console.log(checked)
        parseJson(json)
    }

    return (
        <div className={cl.container}>
            <div className={cl.header_area}><Header headerText='Проверка ИНН' /></div>
            <div className={cl.input_area}><InnInputForm showInfo={showInfo} /><input type="file" onChange={(e) => showFile(e)} /></div>
            <div className={cl.info_area}><InnInfoForm tableHeaders={tableHeaders} tableRows={tableRows}/></div>
        </div>
    )
}
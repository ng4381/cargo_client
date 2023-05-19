import React from "react"
import cl from './InnInfoForm.module.css'
export const InnInfoForm = (props) => {

    var ob = {
        nn: "asdfas",
        ww: 10
    }

    const formatJson = (jsonOb) => {
        if (typeof jsonOb !== "object") {
            return jsonOb
        }
        var str = '';
        Object.keys(jsonOb).map((k) => {
            var value = jsonOb[k];
            // if (value !== null)
            
            if (k !== 'haveInfo' && value !== null)
                str += k + ":" + ((typeof value == "object") ? JSON.stringify(value) : value) + '\n'
        })

        return str;
    }
    

    const tableHeaders = (props.tableHeaders.map((e, idx) => (<th key={"id_th_" + idx} className={cl.main_table_th}>{e}</th>)))

    // const tableRows = (props.tableRows.map((e, idx) => <tr key={"id_tr_" + idx} className={cl.main_table_tr}>
    //     {Object.values(e).map((e2) => (<td className={cl.main_table_td}>{JSON.stringify(e2)}</td>))}
    // </tr>))

    const tableRows = (props.tableRows.map((e, idx) => <tr key={"id_tr_" + idx} className={cl.main_table_tr}>
        {Object.values(e).map((e2) => (<td className={cl.main_table_td}>{formatJson(e2)}</td>))}
    </tr>))


    return (
        <div>
            <table className={cl.main_table}>
                <thead>
                    <tr className={cl.main_table_tr}>
                        {tableHeaders}
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>

        </div>
    )
}
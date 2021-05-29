import React from "react";
import ZilliqaTable from "./ZilliqaTable"
import 'bootstrap/dist/css/bootstrap.min.css';


const ZilliqaRecord = props => {
    const { compoundWeekly, zilPerDay, zilPerWeek, zilPerMonth } = props.item;

    const JsonSerializer = (data) => { 
        let serializedData =[];
        // to be in this format { week: , compounded: , zilperday: , zilperWeek, zilperMonth }
        for (let i=0; i<compoundWeekly.length; i++){
            serializedData.push({  'week': `${parseInt(i)}`, 
                                   'compound': `${compoundWeekly[i]}`,
                                   'zilperDay': `${zilPerDay[i]}`, 
                                   'zilperWeek': `${zilPerWeek[i]}`, 
                                   'zilperMonth': `${zilPerMonth[i]}`
                                })
        }
        return serializedData;
    }

    return (
        <ZilliqaTable 
            tableData={JsonSerializer(props.item)}
            headingColumns={['Week', 'Compound', 'ZilPerDay', 'ZilPerWeek', 'ZilPerMonth']}            
            title="Zilliqa Compounded Earnings"
        />
    );
}

export default ZilliqaRecord
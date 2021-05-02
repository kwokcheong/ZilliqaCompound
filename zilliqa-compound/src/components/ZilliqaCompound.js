import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import ZilliqaRecord from './ZilliqaRecord';


class ZilliqaCompound extends Component {
    constructor(){
        super();
        this.state = {
            capital: '',
            weeks: '',
            apy: '',
            total: '',
            results:
                {
                    compoundWeekly: [],
                    zilPerDay: [],
                    zilPerWeek: [],
                    zilPerMonth: [],
                }
        };
    };


    handleCapital = e => {
        this.setState({ capital: e.target.value })
    }

    handleWeeks = e => {
        this.setState({ weeks: e.target.value })
    }

    handleApy = e => {
        this.setState({ apy: e.target.value })
    }

    zilliqaPerDay = (capital, apy) => {
        let percentPerDay = apy / 36600;
        return (capital * percentPerDay).toFixed(2);
    }

    zilliqaPerWeek = (zilPerDay) => {
        return (zilPerDay * 14).toFixed(2);
    }

    zilliqaPerMonth = (zilPerWeek) => {
        return (zilPerWeek * 30).toFixed(2);
    }

    zilliqaCompoundWeekly = (capital, weeks, apy) => {
        let sum = capital;
        let compounded = [];
        let perDay = [];
        let perWeek = [];
        let perMonth = [];
        for (let i=0; i<=weeks; i++){
            compounded.push(sum.toFixed(2))
            perDay.push(this.zilliqaPerDay(sum,apy));
            perWeek.push(this.zilliqaPerWeek(this.zilliqaPerDay(sum,apy)));
            perMonth.push(this.zilliqaPerMonth(this.zilliqaPerWeek(this.zilliqaPerDay(sum,apy))));
            sum += (this.zilliqaPerWeek(this.zilliqaPerDay(sum, apy)) * Math.pow(i, 0)) - 10;
        }
        this.setState(prevState => ({ results: {compoundWeekly: compounded,
                                                zilPerDay: perDay,
                                                zilPerWeek: perWeek,
                                                zilPerMonth: perMonth
                                            }}));

    }

    compileForm = e => {
        e.preventDefault();
        //if monthly
                //code here
        //if weekly
        this.zilliqaCompoundWeekly(parseFloat(this.state.capital),
                                    parseInt(this.state.weeks), 
                                    parseFloat(this.state.apy));
    }

    clearList = e => {
        this.setState({
            capital: '',
            weeks: '',
            apy: '',
        })
    }

    render(){
        // const bulletedRecords = this.state.results.compoundWeekly.map((e,i) => {
        //     return(
        //         <SingleZilliqaRecord item={e.toFixed(2)} index={i}/>
        //     )
        // })
        return(
            <div>
                <form onSubmit={this.compileForm}>
                Total Zil: 
                <input type='text' placeholder="Enter initial capital" value={this.state.capital} onChange={this.handleCapital}/>
                Weeks
                <input type='text' placeholder="Enter Weeks" value={this.state.weeks} onChange={this.handleWeeks}/>
                APY
                <input type='text' placeholder="Enter APY" value={this.state.apy} onChange={this.handleApy}/>
                <Button type="submit">Calculate</Button>
                <Button variant='danger' onClick={this.clearList}>Clear List</Button>
                </form>

                { this.state.results.compoundWeekly.length === 0? "no values yet" : <ZilliqaRecord item={this.state.results}/>}
            </div>
        )
    }
}

export default ZilliqaCompound;


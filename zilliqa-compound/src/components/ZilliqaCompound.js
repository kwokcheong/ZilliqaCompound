import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleZilliqaRecord from './SingleZilliqaRecord';


class ZilliqaCompound extends Component {
    constructor(){
        super();
        this.state = {
            capital: '',
            weeks: '',
            apy: '',
            total: '',
            compoundWeekly: [],
            results:
                {

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
        return capital * percentPerDay;
    }

    zilliqaPerWeek = (zilPerDay) => {
        return zilPerDay * 14;
    }

    zilliqaCompoundWeekly = (capital, weeks, apy) => {
        let sum = capital;
        let compounded = [];
        for (let i=0; i<=weeks; i++){
            compounded.push(sum)
            sum += (this.zilliqaPerWeek(this.zilliqaPerDay(sum, 14.27)) * Math.pow(i, 0)) - 10;
        }
        return compounded;
    }

    compileForm = e => {
        e.preventDefault();
        let compoundPerWeek = this.zilliqaCompoundWeekly(parseFloat(this.state.capital),
                                                         parseInt(this.state.weeks), 
                                                         parseFloat(this.state.apy));
        this.setState({compoundWeekly: compoundPerWeek});
    }


    render(){
        const num = this.state.compoundWeekly;
        console.log(num)
        return(
            <div>
                <h1> Zilliqa Compound component</h1>
                <form onSubmit={this.compileForm}>
                Total Zil: 
                <input type='text' placeholder="Enter initial capital" value={this.state.capital} onChange={this.handleCapital}/>
                Weeks
                <input type='text' placeholder="Enter Weeks" value={this.state.weeks} onChange={this.handleWeeks}/>
                APY
                <input type='text' placeholder="Enter APY" value={this.state.apy} onChange={this.handleApy}/>
                <Button type="submit">Add</Button>
                </form>
                { this.state.compoundWeekly.length === 0? "no values yet" : num.map(item => (<div>{item}</div>))}
            </div>
        )
    }
}

export default ZilliqaCompound;


import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, limpar, stepChanged } from './counterActions'

const Counter = (props) => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChanged}
            value={props.counter.step} type='number' />
         <button onClick={props.dec}>DEC</button>
         <button onClick={props.inc}>INC</button>  
         <button onClick={props.limpar}>LIMPAR</button>   
    </div>
)

const mapStateToProps = state => ({ counter: state.counter})
const mapDispatchToProps = dispatch => bindActionCreators({inc,dec,limpar,stepChanged}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

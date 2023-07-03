import './Chart.css';

const Chart =()=>{
    return <div className='chart'>
        {props.dataponts.map((datapoint=>{
<ChartBar 
key={datapoint.label} 
value={datapoint.value}
maxValue={datapoint.maxValue}
/>
        }))}
            </div>
}


export default Chart;
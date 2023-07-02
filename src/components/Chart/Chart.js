import './Chart.css';

const Chart =(props)=>{
return<div> {props.dataPoints.map(datapoint=>{
    <ChartBar 
    key={datapoint.id}
    value={datapoint.value}
    maxValue={datapoint.maxValue}
    label={datapoint.label}
    />
})}
</div>
}
export default Chart;
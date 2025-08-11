type RadioButtonProps={
    radioId:string;
    radioValue:number;
    radioName:string
    text:string
}
const RadioButton=(props:RadioButtonProps)=>{
    const {radioId,radioValue,radioName,text}=props
return <div>
    <input id={radioId} type="radio" value={radioValue} name={radioName} className="w-4 h-4 text-primary-700 bg-secondary-300 border-secondary-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-secondary-900 focus:ring-2 dark:bg-secondary-500 dark:border-secondary-500"/>
    <label htmlFor={radioId} className="ms-2 text-sm font-medium text-dunkel dark:text-secondary-300">{text}</label>
</div>
}
export default RadioButton
const MenuButton=({label,onClick,type="button",variant="primary",disabled=false})=>{
    return(
    <button
    type={type}
    disabled={disabled}
    onClick={onClick}
     className={`btn-btn-${variant}`}
    >{label}</button> )
}
export default MenuButton
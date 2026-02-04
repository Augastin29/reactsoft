const menuButton=(label,onClick,type="button",variant="primary",disabled=false)=>{
    <button
    type={type}
    disabled={disabled}
    onClick={onClick}
     className={`btn-btn-${variant}`}
    ></button>
}
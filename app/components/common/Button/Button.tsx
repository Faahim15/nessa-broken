

 interface button {
    name : string
 }

const Button = ({name} : button) => {


  return (
    <button className="bg-[#2B2F36] py-2 w-full rounded-md mt-2 cursor-pointer">{name}</button>
  )
}

export default Button
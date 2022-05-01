export const Contact = () => {
const FormHandler = (event) => {
    const element = event.target.elements
    const isim = element.name.value
    const email = element.email.value
    const text = element.text.value
    window.open(`mailto:lberk1234qwerta@gmail.com?body=${encodeURIComponent(
        `geri dönüşünüz düştü   \nisim: ${isim} \nemail: ${email} \ntext: ${text}`
    
        )}`)
}


return(
<div className="flex flex-col space-y-10 justify-center items-center">
    <h1 className="text-3xl md:text-3xl lg:text-4xl text-legal_lime">Contact me</h1>
    <form onSubmit={FormHandler} className="flex flex-col w-full lg:px-96 px-5 space-y-3">
        <div className="flex flex-row space-x-4">
            <input 
            type="text" 
            name="name"
            className=" text-[#c4c4c4] w-full p-2 border-b-4 border-legal_lime bg-[#262624] rounded-xl focus:outline-none"
            placeholder="Name"
            required
            />
            <input 
            type="email" 
            className=" text-[#c4c4c4] w-full p-2  border-b-4 border-legal_lime bg-[#262624] focus:outline-none rounded-xl"
            placeholder="example@example.com"
            name="email"
            required
            />
        </div>
        <textarea 
         rows="5" 
         style={{"resize": "none"}} 
         placeholder="Write something..."
         name="text"
         className="p-4 text-[#c4c4c4]  w-full border-b-4 border-legal_lime bg-[#262624] rounded-xl focus:outline-none">


        </textarea>
        <button className=" font-bold text-lg text-[#c4c4c4] w-full p-2 border-b-4 border-legal_lime bg-[#262624] rounded-xl focus:outline-none">
            submit
        </button>


    </form>
</div>
)
}
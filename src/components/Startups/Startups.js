const texts = ["Bizler öğrencilerimizin bugünlerden çok daha eşit, yenilikçi ve nitelikli eğitim almasını, bu sayede kendi potansiyellerini ortaya çıkarmalarını sağlamayı amaçlayan, öğretmenlerimiz için ise çok daha rahat, esnek ve verimli çalışma koşulları sağlayarak bilgilerini değerli öğrencilerimize en ileri düzeyde aktarmalarını sağlamayı amaçlayan 9 lise öğrencisinden oluşan bir ekibiz.","bu projenin front-end tarafında dizayn ve server tarafında ise mantık olarak çok şey öğrendim. Bu proje halihazırda bitmedi. Bu projenin bazı kısımlarının(server kısımları hariç) githubımda açık kaynak kodunu bulabilirsiniz."]
export const Startups = () => {
    return(
    <div id="startups" className="space-y-10 px-5 lg:px-20 pt-10">
        <h1 className="text-[#2299f8] grid place-items-center text-4xl md:text-4xl lg:text-4xl ">Startups</h1>
        <div className="flex flex-col space-y-10">
            <h1 className="text-[#7a94f3]  lg:text-left text-center text-xl lg:text-2xl hover:cursor-pointer" onClick={() => window.open("https://nonofficialcompany.com/","_blank")}>NOC(Non-Official Company)</h1>
            <div className="flex flex-col  lg:space-y-0 lg:space-x-2 lg:flex-row w-full">
                <div className="lg:w-1/2 h-full hidden lg:flex">
                    <img src="/images/home1.png" alt="" className="rounded-2xl h-full"/>
                </div>
                <div className="lg:w-1/2 bg-[#262624] 2xl:justify-center flex flex-col space-y-1  lg:p-4 p-2 rounded-xl 2xl:text-xl">
                    <p className="text-[#7a94f3] lg:text-left  2xl:text-center text-center">
                       {texts[0]}
                    </p>
                    <a className="text-[#7a94f3] lg:text-left 2xl:text-center text-center border-b-2 border-[#7a94f3] pb-1" target="_blank" href="https://nonofficialcompany.com/">https://nonofficialcompany.com/</a>
                    <p className="text-[#7a94f3]  lg:text-left 2xl:text-center text-center">
                       {texts[1]}
                    </p>
                    <a className="text-[#7a94f3] lg:text-left 2xl:text-center text-center underline" target="_blank" href="https://kariyer.nonofficialcompany.com/">işe Alım formu</a>
                </div>
            </div>
        </div>
    </div>
    )
}
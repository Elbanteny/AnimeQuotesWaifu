
import Tags from "@/components/Tags"

const Index = () => {

    return (
        <div className="flex flex-col justify-center items-center w-full h-[100vh]">
            {/* Header */}
            <div className=" mx-auto text-center px-3">
                <h1 className="title">Galeri Waifu</h1>
                <h6 className="title_description">Temukan gambar waifu kesayangan anda.</h6>
            </div>

            {/* Tags */}
            <div className="flex justify-center items-center mt-8 w-full">
                <Tags />
            </div>
        </div>
    )
}

export default Index
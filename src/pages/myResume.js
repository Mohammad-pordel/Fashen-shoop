import React from 'react'

export default function myResume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = "../file/mohammadpordel-resume.pdf";
        link.download = "file.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='flex align-middle justify-center'>
            <div className='w-[90%] md:w-[50%] flex flex-col align-middle justify-center  mt-20 '>
                <div className='flex align-middle mb-5 px-3'>
                    <img className='w:10 h-10 md:w-20  md:h-20 rounded-full -mt-4 md:-mt-8  ' src="../images/panelimg/me.jpg" alt="" />
                    <span className='font-MorabbaBold text-base md:text-2xl mr-4'>محمد پردل</span>
                </div>
                <div className=" w-[100%] rounded-xl px-5 flex justify-between m-auto  bg-purple-200 p-6" >
                    <h1 className='font-MorabbaLight text-base md:text-2xl mr-4'>  دانلود فایل رزومه من:</h1>
                    <button
                        onClick={handleDownload}
                        className="w-44 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out"
                    >
                        دانلود فایل
                    </button>
                </div>
            </div>
        </div>
    );
}


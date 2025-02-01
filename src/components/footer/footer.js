import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CallIcon from '@mui/icons-material/Call';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { IconButton } from '@mui/material';
import './footer.css'
export default function Footer() {
    const [isLong, setIsLong] = useState(false)
    const goUpPage = (() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
    return (
        <footer>
            <div className=' bg-[#e5e7eb] px-5 '>
                <div className='w-full h-[2px]  bg-gray-400 mb-5 md:mb-14'></div>
                <div className='flex justify-between py-4 align-middle'>
                    <div className='flex align-middle'>
                        <img className='w:14 h-14 md:w-24  md:h-24 rounded-full -mt-4 md:-mt-8  ' src="../images/1000_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" alt="" />
                        <span className='font-MorabbaBold text-base md:text-2xl mr-2'>فشن شاپ</span>
                    </div>
                    <div >
                        <Button variant="outlined" size="small" endIcon={<ArrowUpwardIcon />} onClick={goUpPage}>
                            <span className='font-DanaMedium text-xs transition-all ml-1 md:text-lg md:ml-2 hover:text-[#050505]'>
                                بازگشت به بالا
                            </span>
                        </Button>
                    </div>
                </div>

                <div className={`bg-[#064568] text-white  mt-8 rounded-xl overflow-hidden transition-all duration-700 relative py-10 pb-5 ${isLong ? "h-[540vw]  md:h-[200vw] lg:h-[180vw] xl:h-[85vw] 2xl:h-[55vw]" : "h-[51vw] md:h-[21vw] befortext"} `}>

                    <div className="flex flex-col space-y-8 px-5">
                        {isLong ? (
                            <div className="flex flex-col space-y-8  px-2 md:px-5">
                                <div className="space-y-4">
                                    <h2 className="text-base md:text-lg text-[#da2f4e] ">به دنیای مد و فشن خوش آمدید!</h2>
                                    <p className="text-base md:text-lg text-justify leading-relaxed">
                                        استایل و پوشاک، بخش بسیار مهمی از هویت و شخصیت هر فرد است. با استفاده از لباس‌های مناسب و دوست‌داشتنی، می‌توانیم به‌راحتی احساس بهتری درباره خود داشته باشیم و اعتماد به نفس بیشتری کسب کنیم. انتخاب پوشاک مناسب نه تنها به ظاهر ما کمک می‌کند، بلکه به شخصیت و از ویژگی‌های منحصربه‌فرد ما نیز تأثیر می‌گذارد.

                                        از پوشاک روزمره تا لباس‌های مجلسی، همه‌ی ما دوست داریم که در بهترین حالت خود ظاهر شویم. به همین دلیل، خرید و انتخاب پوشاک باکیفیت و مد روز اهمیت فوق‌العاده‌ای دارد. با توجه به ترندهای مد و استفاده از پارچه‌های باکیفیت، می‌توانیم همیشه به‌روز و جذاب به نظر برسیم.

                                        یکی از جنبه‌های دیگر استایل، توجه به جزئیات است. انتخاب اکسسوری‌های مناسب مانند گردنبند، دستبند، ساعت و کیف می‌تواند استایل ما را تکمیل کند و آن را از معمولی به منحصربه‌فرد تبدیل کند. هماهنگی رنگ‌ها و نوع پوشاک با یکدیگر نیز نقش بسزایی در ایجاد ظاهری زیبا و جذاب دارند.

                                        توجه به راحتی نیز در انتخاب پوشاک بسیار مهم است. لباس‌هایی که نه تنها زیبا بلکه راحت هستند، باعث می‌شوند که روزمان را با نشاط و انرژی بیشتری سپری کنیم. اصول اولیه‌ی مد و استایل همیشه باید در ذهنمان باشد، اما همچنین باید به سلیقه شخصی خود توجه کنیم و حس خوبی از پوشاکمان داشته باشیم.

                                        با ایجاد تعادلی بین مد روز و راحتی، می‌توانیم استایلی فوق‌العاده و جذاب برای خود بسازیم که هم به ما احساس خوبی بدهد و هم نشان دهنده‌ی شخصیت و سلیقه‌ی منحصربه‌فردمان باشد. پس انتخاب پوشاکی باکیفیت و مناسب با توجه به ترندهای روز، توجه به جزئیات و راحتی، می‌تواند به ما در ایجاد استایلی بی‌نظیر کمک کند.
                                    </p>
                                    <h3 className="text-lg md:text-xl text-[#da2f4e]">آیا به دنبال استایل خاص و منحصر به فرد هستید؟</h3>
                                    <p className=" text-base md:text-lg">
                                        در <strong>فشن شاپ</strong>، ما به شما کمک می‌کنیم تا با پوشاک مد روز و باکیفیت، استایلی بی‌نظیر داشته باشید.
                                        از انتخاب‌های زنانه و مردانه تا بچگانه، همه چیز برای شما مهیاست!
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg md:text-xl text-[#da2f4e]">✨ خرید اینترنتی بی‌دغدغه:</h3>
                                    <ul className="list-none space-y-1 text-base md:text-lg">
                                        <li>ارسال سریع به سراسر کشور</li>
                                        <li>ضمانت بازگشت کالا در صورت نارضایتی</li>
                                        <li>پشتیبانی آنلاین 24/7</li>
                                        <li>پرداخت آنلاین امن و مطمئن</li>
                                        <li>پیشنهادات ویژه و تخفیف‌های دوره‌ای</li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg md:text-xl text-[#da2f4e]">👗 هر روز، مد جدید:</h3>
                                    <p className="text-base md:text-lg">
                                        با فشن شاپ همیشه به روز باشید و جدیدترین ترندهای مد را از دست ندهید. به راحتی می‌توانید از طریق وب‌سایت ما،
                                        به مجموعه‌ای از انتخاب‌های مد روز دسترسی پیدا کنید و ظاهر جدیدی برای خودتان بسازید.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg md:text-xl text-[#da2f4e]">🛒 خریدی آسان و لذت‌بخش:</h3>
                                    <p className="text-base md:text-lg">
                                        با چند کلیک ساده، پوشاک مورد علاقه‌تان را سفارش دهید و درب منزل تحویل بگیرید. حالا وقتشه که استایلتون رو متحول کنید!
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg md:text-xl text-[#da2f4e]">🎁 عضویت در باشگاه مشتریان:</h3>
                                    <p className="text-base md:text-lg">
                                        با عضویت در باشگاه مشتریان فشن شاپ، از تخفیف‌ها و پیشنهادات ویژه بهره‌مند شوید و به‌روزرسانی‌های دائمی را
                                        درباره جدیدترین محصولات و ترندهای مد دریافت کنید.
                                    </p>
                                </div>

                            </div>

                        ) : (
                            <div className="space-y-4">
                                <h2 className="text-lg md:text-2xl text-[#da2f4e]">به دنیای مد و فشن خوش آمدید!</h2>
                                <p className="text-base md:text-lg text-justify leading-relaxed">
                                    استایل و پوشاک، بخش بسیار مهمی از هویت و شخصیت هر فرد است. با استفاده از لباس‌های مناسب و دوست‌داشتنی، می‌توانیم به‌راحتی احساس بهتری درباره خود داشته باشیم و اعتماد به نفس بیشتری کسب کنیم. انتخاب پوشاک مناسب نه تنها به ظاهر ما کمک می‌کند، بلکه به شخصیت و از ویژگی‌های منحصربه‌فرد ما نیز تأثیر می‌گذارد.

                                    از پوشاک روزمره تا لباس‌های مجلسی، همه‌ی ما دوست داریم که در بهترین حالت خود ظاهر شویم. به همین دلیل، خرید و انتخاب پوشاک باکیفیت و مد روز اهمیت فوق‌العاده‌ای دارد. با توجه به ترندهای مد و استفاده از پارچه‌های باکیفیت، می‌توانیم همیشه به‌روز و جذاب به نظر برسیم.

                                    یکی از جنبه‌های دیگر استایل، توجه به جزئیات است. انتخاب اکسسوری‌های مناسب مانند گردنبند، دستبند، ساعت و کیف می‌تواند استایل ما را تکمیل کند و آن را از معمولی به منحصربه‌فرد تبدیل کند. هماهنگی رنگ‌ها و نوع پوشاک با یکدیگر نیز نقش بسزایی در ایجاد ظاهری زیبا و جذاب دارند.

                                    توجه به راحتی نیز در انتخاب پوشاک بسیار مهم است. لباس‌هایی که نه تنها زیبا بلکه راحت هستند، باعث می‌شوند که روزمان را با نشاط و انرژی بیشتری سپری کنیم. اصول اولیه‌ی مد و استایل همیشه باید در ذهنمان باشد، اما همچنین باید به سلیقه شخصی خود توجه کنیم و حس خوبی از پوشاکمان داشته باشیم.

                                    با ایجاد تعادلی بین مد روز و راحتی، می‌توانیم استایلی فوق‌العاده و جذاب برای خود بسازیم که هم به ما احساس خوبی بدهد و هم نشان دهنده‌ی شخصیت و سلیقه‌ی منحصربه‌فردمان باشد. پس انتخاب پوشاکی باکیفیت و مناسب با توجه به ترندهای روز، توجه به جزئیات و راحتی، می‌تواند به ما در ایجاد ... .
                                </p>

                            </div>

                        )}


                        <div className='w-[100%] flex justify-center align-middle   z-50'>
                            <div className='w-11 h-11 flex justify-center align-middle absolute bottom-2   rounded-full bg-white '>

                                <IconButton aria-label="delete" color="error" onClick={() => setIsLong(!isLong)}>
                                    {isLong ? (
                                        <ArrowCircleUpIcon fontSize="inherit" sx={{ fontSize: 60 }} />
                                    ) : (
                                        < ArrowCircleDownIcon fontSize="inherit" sx={{ fontSize: 60 }} />
                                    )}
                                </IconButton>
                            </div>
                        </div>
                    </div>


                </div>

                <h1 className='text-base md:text-xl font-DanaDemiBold mt-8 '>ارتباط با فشن شاپ</h1>
                <div className='w-full flex flex-col md:flex-row md:justify-between align-middle mt-5' >
                    <div className='mt-2  flex justify-between align-middle'>
                        <nav>
                            <ul className='space-y-9 ml-4 '>
                                <li>
                                    {<CallIcon />}
                                    <span className='text-sm md:text-lg mr-2 md:mr-4'>05158254</span>
                                </li>
                                <li>
                                    {<AddLocationIcon />}
                                    <span className='text-sm md:text-lg mr-2 md:mr-4'>مشهد خیابان فردوسی</span>
                                </li>
                                <li>
                                    {<AddLocationIcon />}
                                    <span className='text-sm md:text-lg mr-2 md:mr-4'>مشهد خیابان سجاد</span>
                                </li>

                            </ul >
                        </nav>

                        <nav>
                            <ul className=' space-y-9 '>
                                <li>
                                    {<InstagramIcon />}
                                    <a href="#" className='hover:text-blue-600 transition-all'>
                                        <span className='text-sm md:text-lg mr-2 md:mr-4'>اینستاگرام فشن شاپ</span>
                                    </a>
                                </li>
                                <li>
                                    {<TelegramIcon />}
                                    <a href="#" className='hover:text-blue-600 transition-all'>
                                        <span className='text-sm md:text-lg mr-2 md:mr-4'>کانال تلگرام فشن شاپ</span>
                                    </a>
                                </li>
                                <li>
                                    {<WhatsAppIcon />}
                                    <a href="#" className='hover:text-blue-600 transition-all'>
                                        <span className='text-sm md:text-lg mr-2 md:mr-4'>کانال واتساپ فشن شاپ</span>
                                    </a>
                                </li>

                            </ul>
                        </nav>

                    </div>
                    <div className='w-[100%] md:w-[60%] flex justify-between  align-middle'>
                        <img className='rounded-lg mt-4 md:mt-0 max-w-[20%] ' src="../images/footer/logo.png" alt="" />
                        <img className='rounded-lg mt-4 md:mt-0 max-w-[80%] ' src="../images/footer/orginal_1631510689 (1).jpg" alt="" />
                    </div>
                </div>


                <div className="text-center mt-4 text-sm text-gray-400">
                    &copy; 2025 فشن شاپ. کلیه حقوق محفوظ است.
                </div>

            </div>
        </footer>
    )
}

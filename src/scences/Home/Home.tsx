import useMediaQuery from "@/Hooks/useMediaQuery"
import { SelectedPage } from "@/Shared/types"
import ActionButton from "@/Shared/ActionButton"
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from 'framer-motion'


type Props = {
    setSelectedPage : (value : SelectedPage) => void
}


const Home = ({setSelectedPage} : Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
        >
            {/* Image and Main Header */}
            <motion.div 
                    className="md:flex justify-center w-5/6 mx-auto items-center md:h-5/6"
                    onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* Main Header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* Headings */}
                    <motion.div 
                            className="md:-mt-20" 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once : true , amount : 0.5}}
                            transition={{duration : 0.5}}
                            variants={{
                                hidden : {opacity : 0 , x : -50},
                                visible : {opacity : 1 , x : 50}
                            }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <img alt="home-page-text" src={HomePageText} />
                            </div>
                        </div>
                        <p className="mt-8 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                            natus magni culpa eius veritatis doloribus nostrum, distinctio repellat ipsum ducimus corporis
                            amet quis dignissimos mollitia voluptas, iste fuga, officia ratione?
                        </p>
                    </motion.div>

                    {/* Actions */}
                    <motion.div 
                            className="flex mt-8 gap-8 items-center md:justify-start "
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once : true , amount : 0.5}}
                            transition={{delay : 0.2 ,duration : 0.5}}
                            variants={{
                                hidden : {opacity : 0 , x : -50},
                                visible : {opacity : 1 , x : 50}
                            }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                                    href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn more</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/* Image */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
                    <img  alt="home-pageGraphic" src={HomePageGraphic} />
                </div>
            </motion.div>

            {/* Sponsors */}
            {
                isAboveMediumScreens && (
                    <div className="h-[150px] w-full bg-primary-100 py-10 mt-20">
                        <div className="w-5/6 mx-auto">
                            <div className="flex gap-8 w-3/5 items-center justify-between g">
                                <img alt="RedBull " src={SponsorRedBull} />
                                <img alt="Forbes " src={SponsorForbes} />
                                <img alt="Fortune " src={SponsorFortune} />
                            </div>
                        </div>
                    </div>
                )
            }

        </section>
    )
}

export default Home
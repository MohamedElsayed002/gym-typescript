import HText from "@/Shared/HText"
import { SelectedPage, BenefitType } from "@/Shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from 'framer-motion'
import Benefit from "./Benefit"
import ActionButton from "@/Shared/ActionButton"
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="w-6 h-6" />,
        title: 'State of the art facilities',
        description: 'totam assumenda porro, libero qui, numquam iste quo exercitationem id neque atque dicta incidunt ipsam officia error accusantium voluptate. Et?'
    },
    {
        icon: <UserGroupIcon className="w-6 h-6" />,
        title: 'State of the art facilities',
        description: 'totam assumenda porro, libero qui, numquam iste quo exercitationem id neque atque dicta incidunt ipsam officia error accusantium voluptate. Et?'
    },
    {
        icon: <AcademicCapIcon className="w-6 h-6" />,
        title: 'State of the art facilities',
        description: 'totam assumenda porro, libero qui, numquam iste quo exercitationem id neque atque dicta incidunt ipsam officia error accusantium voluptate. Et?'
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}


const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section className="w-5/6 mx-auto min-h-screen py-20 md:mt-10">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div
                    className="md:w-3/5 md:my-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>MORE THAN GYM.</HText>
                    <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quis
                        totam assumenda porro, libero qui, numquam iste quo exercitationem id
                        neque atque dicta incidunt ipsam officia error accusantium voluptate. Et?
                    </p>
                </motion.div>

                <motion.div
                    className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {
                        benefits.map((benefit: BenefitType) => {
                            return (
                                <Benefit
                                    key={benefit.title}
                                    icon={benefit.icon}
                                    title={benefit.title}
                                    description={benefit.description}
                                    setSelectedPage={setSelectedPage}
                                />
                            )
                        })
                    }
                </motion.div>

                {/* Graphics and Description */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* Graphic */}
                    <img src={BenefitsPageGraphic} />
                    {/* DESCRIPTION */}
                    <div>
                        {/* title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        {/* Descript */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis praesentium
                                , dolor iure magnam labore ut magni ipsa fuga asperiores quia perferendis corrupti
                                atque quidem et nam autem laboriosam ipsum.
                            </p>
                            <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis praesentium
                                , dolor iure magnam labore ut magni ipsa fuga asperiores quia perferendis corrupti
                                atque quidem et nam autem laboriosam ipsum.
                            </p>

                        </motion.div>
                        {/* Button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    )
}

export default Benefits
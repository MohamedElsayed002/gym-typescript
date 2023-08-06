


import HText from '@/Shared/HText'
import { SelectedPage } from '@/Shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import ContactUsGraphic from '@/assets/ContactUsPageGraphic.png'
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {

    const { register, trigger, formState: { errors } } = useForm()
    const InputStyles = 'w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-white mt-5'
    const onSubmit = async (e: any) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()
        }
    }

    return (
        <section id="contactus" className=" w-5/6 mx-auto min-h-screen pt-24 pb-24 ">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                {/* Header */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>
                        <span className="text-primary-500">JOIN NOW </span> TO GET IN SHAPE
                    </HText>
                    <p className="my-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, voluptatibus
                        illum? Aut dolor amet facere hic nesciunt, dolorem impedit in
                        , architecto quam voluptate non nihil. Itaque, repudiandae voluptas! Nobis, blanditiis!
                    </p>
                </motion.div>
                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <form
                            target='_blank'
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/mohamedelsayed20258@gmail.com"
                            method='POST'
                        >
                            <input
                                className={InputStyles}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" &&
                                        "Max length is 100 char."}
                                </p>
                            )}

                            <input
                                className={InputStyles}
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" &&
                                        "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                            )}

                            <textarea
                                style={{resize : 'none'}}
                                className={InputStyles}
                                placeholder="MESSAGE"
                                rows={4}
                                cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" &&
                                        "This field is required."}
                                    {errors.message.type === "maxLength" &&
                                        "Max length is 2000 char."}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                SUBMIT
                            </button>

                        </form>
                    </motion.div>

                    <motion.div
                                className="relative mt-16 basis-2/5 md:mt-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay : 0.2 , duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                    >
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img src={ContactUsGraphic}  className="w-full" alt="contact-us-graphic"/>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    )
}

export default ContactUs
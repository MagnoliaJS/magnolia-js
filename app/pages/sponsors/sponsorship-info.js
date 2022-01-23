import { Head, Image } from "blitz"
import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import magnolia19 from "public/magnoliajs-2019-135.jpg"

const SponsorshipInfo = () => {
  const [state, handleSubmit] = useForm("xlezgzgo")
  const [message, setMessage] = useState(
    "MagnoliaJS is an amazing conference and my company wants to be a part of it!"
  )

  if (state.succeeded) {
    return (
      <>
        <Head>
          <title>Sponsorship Interest Form Success | MagnoliaJS</title>
        </Head>
        <h1 className="text-center text-3xl mb-4">Thanks for your submission!</h1>
        <p className="text-center mb-4">
          Thanks for your interest in sponsoring MagnoliaJS! We'll be in touch with you soon!
        </p>
        <div className="sm:mx-8">
          <Image src={magnolia19} alt="Folks hanging out during a break at MagnoliaJS 2019." />
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Sponsorship Interest Form | MagnoliaJS</title>
      </Head>
      <h1 className="text-center text-3xl mb-4">Sponsorship Interest Form</h1>
      <p className="text-center mb-4">
        Thanks for your interest in sponsoring MagnoliaJS! Fill out this form and we'll get back to
        you ASAP.
      </p>

      <form
        className="grid gap-2 grid-cols-1 sm:grid-cols-4 auto-rows-min mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="self-center sm:justify-self-end">
          Name
        </label>
        <div className="self-stretch sm:self-center sm:p-2 col-span-2 sm:col-span-3 mb-2 sm:mb-0">
          <input
            id="name"
            type="text"
            name="name"
            className="border w-full h-full p-2 rounded-sm outline-none ring ring-transparent focus:ring-pink"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <label htmlFor="company" className="self-center sm:justify-self-end">
          Company
        </label>
        <div className="self-stretch sm:self-center sm:p-2 col-span-2 sm:col-span-3 mb-2 sm:mb-0">
          <input
            id="company"
            type="text"
            name="company"
            className="border w-full h-full p-2 rounded-sm outline-none ring ring-transparent focus:ring-pink"
          />
          <ValidationError prefix="Company" field="company" errors={state.errors} />
        </div>

        <label htmlFor="email" className="self-center sm:justify-self-end">
          Email
        </label>
        <div className="self-stretch sm:self-center sm:p-2 col-span-2 sm:col-span-3 mb-2 sm:mb-0">
          <input
            id="email"
            type="email"
            name="email"
            className="border w-full h-full p-2 rounded-sm outline-none ring ring-transparent focus:ring-pink"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <label htmlFor="message" className="self-center sm:justify-self-end">
          Message
        </label>
        <div className="self-stretch sm:p-2 col-span-2 sm:col-span-3 mb-2 sm:mb-0">
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={() => setMessage()}
            className="border w-full h-full p-2 rounded-sm outline-none ring ring-transparent focus:ring-pink"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          className="bg-pink col-span-2 text-white rounded-sm sm:col-start-4 sm:col-end-5 sm:justify-self-end sm:self-center sm:px-4 py-2 sm:mr-2 hover:shadow-lg"
          disabled={state.submitting}
        >
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </>
  )
}

SponsorshipInfo.suppressFirstRenderFlicker = true
export default SponsorshipInfo

import { Head, Image } from "blitz"
import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import styles from "./sponsorship-info.module.css"
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
        <h1>Thanks for your submission!</h1>
        <p className="center-text">
          Thanks for your interest in sponsoring MagnoliaJS! We'll be in touch with you soon!
        </p>
        <div>
          <Image
            src={magnolia19}
            placeholder="blur"
            alt="Folks hanging out during a break at MagnoliaJS 2019."
          />
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Sponsorship Interest Form | MagnoliaJS</title>
      </Head>
      <h1>Sponsorship Interest Form</h1>
      <p className="center-text">
        Thanks for your interest in sponsoring MagnoliaJS! Fill out this form and we'll get back to
        you ASAP.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <div className={styles.fieldinfo}>
          <input id="name" type="text" name="name" className={styles.field} required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <label htmlFor="company" className={styles.label}>
          Company
        </label>
        <div className={styles.fieldinfo}>
          <input id="company" type="text" name="company" className={styles.field} />
          <ValidationError prefix="Company" field="company" errors={state.errors} />
        </div>

        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <div className={styles.fieldinfo}>
          <input id="email" type="email" name="email" className={styles.field} required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <div className={styles.fieldinfo}>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            className={styles.field}
            onChange={() => setMessage()}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button type="submit" className={styles.submit} disabled={state.submitting}>
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </>
  )
}

SponsorshipInfo.suppressFirstRenderFlicker = true
export default SponsorshipInfo

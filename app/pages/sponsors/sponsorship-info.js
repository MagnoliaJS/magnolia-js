import { Head, Image } from "blitz"
import { useState } from "react"
import styles from "./sponsorship-info.module.css"

const SponsorshipInfo = () => {
  const [message, setMessage] = useState(
    "MagnoliaJS is an amazing conference and my company wants to be a part of it!"
  )

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

      <form
        className={styles.form}
        action="/pages/sponsors/sponsor-form-success"
        method="POST"
        name="sponsorship-interest"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="sponsorship-interest" />

        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <div className={styles.fieldinfo}>
          <input id="name" type="text" name="name" className={styles.field} required />
        </div>

        <label htmlFor="company" className={styles.label}>
          Company
        </label>
        <div className={styles.fieldinfo}>
          <input id="company" type="text" name="company" className={styles.field} />
        </div>

        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <div className={styles.fieldinfo}>
          <input id="email" type="email" name="email" className={styles.field} required />
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
        </div>

        <button type="submit" className={styles.submit} disabled={state.submitting}>
          Submit
        </button>
      </form>
    </>
  )
}

SponsorshipInfo.suppressFirstRenderFlicker = true
export default SponsorshipInfo

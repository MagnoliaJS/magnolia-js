import { groq } from 'next-sanity'
import client from './sanity.client'

export async function getSpeakers() {
  return client.fetch(
    groq`*[_type == "speaker"]{
      _id,
      name,
      slug,
      title,
      photo {alt, "image": asset->url},
      twitter,
      pronouns,
    }`,
  )
}

export async function getSpeaker(slug) {
  return client.fetch(
    groq`*[_type == "speaker" && slug.current == $slug]{
      _id,
      name,
      title,
      photo {alt, "image": asset->url},
      bio,
      twitter,
      pronouns,
      talkTitle,
      talkDescription
    }`,
    { slug },
  )
}

export async function getSponsors() {
  return client.fetch(
    groq`*[_type == "sponsor"]{
      _id,
      name,
      link,
      year,
      tier->,
      logo {alt, "image": asset->url},
    }`,
  )
}

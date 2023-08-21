import { groq } from "next-sanity"
import client from "./sanity.client"

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
    }`
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
    { slug }
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
    }`
  )
}

export async function getRecCategories() {
  return client.fetch(
    groq`*[_type == "recommendationType"]{
      _id,
      name,
    }`
  )
}

export async function getRecSubCategories() {
  return client.fetch(
    groq`*[_type == "recommendationSubType"]{
      _id,
      name,
      parentType->,
    }`
  )
}

export async function getRecommendations() {
  return client.fetch(
    groq`*[_type == "recommendation"]{
      _id,
      name,
      link,
      description,
      recommendationType->,
      recommendationSubType->,
    }`
  )
}

export async function getRecommendationsForCategory(category) {
  return client.fetch(
    groq`*[_type == "recommendation" && recommendationType._ref == $recommendationType]{
      _id,
      name,
      link,
      description,
      recommendationType->,
      recommendationSubType->,
    }`,
    { category }
  )
}
import { createClient } from "@sanity/client"

const config = {
  projectId: "40ricksp",
  dataset: "production",
  apiVersion: "2023-08-02",
  useCdn: false,
}

const client = createClient(config)

export default client

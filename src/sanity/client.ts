import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

// Only create a real client if projectId is configured
export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

export const writeClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: process.env.SANITY_API_WRITE_TOKEN,
    })
  : null;

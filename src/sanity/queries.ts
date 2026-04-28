import { client } from "./client";

// Site settings
export async function getSiteSettings() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "siteSettings"][0]{
      heroTitle,
      heroSubtitle,
      heroImage,
      phone,
      email,
      address,
      openingHours
    }`,
    {},
    { next: { tags: ["siteSettings"] } }
  );
}

// Active job postings
export async function getJobPostings() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "jobPosting" && active == true] | order(_createdAt asc) {
      _id,
      title,
      category,
      openings,
      deadline,
      contactName,
      contactPhone,
      contactEmail,
      intro,
      tasks,
      qualifications,
      offers
    }`,
    {},
    { next: { tags: ["jobPosting"] } }
  );
}

// All referanser, or only featured
export async function getReferanser(featuredOnly = false) {
  if (!client) return null;
  const filter = featuredOnly
    ? `*[_type == "referanse" && featured == true]`
    : `*[_type == "referanse"]`;
  return client.fetch(
    `${filter} | order(order asc) {
      _id,
      title,
      category,
      location,
      description,
      image,
      featured
    }`,
    {},
    { next: { tags: ["referanse"] } }
  );
}

// Testimonials
export async function getTestimonials() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "testimonial" && featured == true] | order(order asc) {
      _id,
      name,
      role,
      initials,
      rating,
      text,
      featured,
      order
    }`,
    {},
    { next: { tags: ["testimonial"] } }
  );
}

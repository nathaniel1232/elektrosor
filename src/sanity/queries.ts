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
    { next: { tags: ["siteSettings"], revalidate: 60 } }
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
    { next: { tags: ["jobPosting"], revalidate: 60 } }
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
    { next: { tags: ["referanse"], revalidate: 60 } }
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
    { next: { tags: ["testimonial"], revalidate: 60 } }
  );
}

// Sertifiseringer
export async function getSertifiseringer() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "sertifisering"] | order(order asc) {
      _id,
      name,
      logo,
      order
    }`,
    {},
    { next: { tags: ["sertifisering"], revalidate: 60 } }
  );
}

// Chat settings (system prompt for AI)
export async function getChatSettings() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "chatSettings"][0]{
      systemPrompt,
      welcomeMessage
    }`,
    {},
    { next: { tags: ["chatSettings"], revalidate: 60 } }
  );
}

// Featured referanser for homepage (max 3)
export async function getFeaturedReferanser() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "referanse" && featured == true] | order(order asc)[0...3] {
      _id,
      title,
      category,
      location,
      description,
      image
    }`,
    {},
    { next: { tags: ["referanse"], revalidate: 60 } }
  );
}

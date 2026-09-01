import activity1 from "@/assets/spacebox-activity-1.jpg";
import activity2 from "@/assets/spacebox-activity-2.jpg";
import activity3 from "@/assets/spacebox-activity-3.jpg";
import activity4 from "@/assets/spacebox-activity-4.jpg";

// Replace every PLACEHOLDER value after the business details are verified.
export const venue = {
  name: "Space Box",
  city: "La Marsa",
  country: "Tunisia",
  location: "LOCATION TO BE CONFIRMED",
  phone: "PHONE TO BE CONFIRMED",
  email: "EMAIL TO BE CONFIRMED",
  hours: "OPENING HOURS TO BE CONFIRMED",
  whatsappNumber: "WHATSAPP_NUMBER_PLACEHOLDER",
  social: { instagram: "#", facebook: "#", tiktok: "#" },
};

export const activities = [
  { title: "Activity 01", description: "Add the verified activity name and a short description here.", image: activity1 },
  { title: "Activity 02", description: "Add the verified activity name and a short description here.", image: activity2 },
  { title: "Activity 03", description: "Add the verified activity name and a short description here.", image: activity3 },
  { title: "Activity 04", description: "Add the verified activity name and a short description here.", image: activity4 },
];

export const gallery = [
  { image: activity2, title: "Competition", category: "The energy" },
  { image: activity3, title: "Immersion", category: "The experience" },
  { image: activity1, title: "Play", category: "The details" },
  { image: activity4, title: "Focus", category: "The atmosphere" },
];
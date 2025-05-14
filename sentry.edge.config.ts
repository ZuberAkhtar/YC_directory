// // This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// // The config you add here will be used whenever one of the edge features is loaded.
// // Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// // https://docs.sentry.io/platforms/javascript/guides/nextjs/

// import * as Sentry from "@sentry/nextjs";

// Sentry.init({
//   dsn: "https://affd20bb141c8db6a97cbd3e9b4a574a@o4509317607849984.ingest.de.sentry.io/4509317611389008",

//   // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
//   tracesSampleRate: 1,

//   // Setting this option to true will print useful information to the console while you're setting up Sentry.
//   debug: false,
// });

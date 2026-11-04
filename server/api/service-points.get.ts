// The service points for the Digital Marketing page: { smm, ads, compare }.
// The page falls back to app/data/smm.ts when this answers with an error or nothing.
export default defineEventHandler(event => cachedHubGet(event, "/public/service-points?lang=id"))

export interface IGeoCityApiResponse {
  name: string,
  local_names?: Record<string, string>;
  lat?: number;
  lon?: number;
}

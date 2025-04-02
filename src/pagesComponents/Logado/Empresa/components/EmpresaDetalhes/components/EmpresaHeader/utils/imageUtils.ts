/**
 * Formats a company name for use in image paths
 * @param companyName The name of the company
 * @returns The formatted name for image paths
 */
export const formatCompanyNameForImage = (companyName: string): string => {
  if (!companyName) return "";

  return companyName
    .toUpperCase()
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .replace(/\//g, "") // Remove forward slashes
    .trim();
};

/**
 * Gets the image path for a company logo
 * @param companyName The name of the company
 * @returns The path to the company's logo image
 */
export const getCompanyLogoPath = (companyName: string): string => {
  const formattedName = formatCompanyNameForImage(companyName);
  return `/assets/images/individuais/empresas/${formattedName}`;
};

/**
 * Cache to store which image extensions work for each company
 */
const imageExtensionCache: Record<string, string> = {};

/**
 * Checks if an image exists at the given URL
 * @param url The URL to check
 * @returns A promise that resolves to true if the image exists, false otherwise
 */
export const checkImageExists = async (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

/**
 * Gets the best available image path for a company logo
 * @param companyName The name of the company
 * @returns A promise that resolves to the best available image path
 */
export const getBestCompanyLogoPath = async (
  companyName: string
): Promise<string> => {
  const formattedName = formatCompanyNameForImage(companyName);

  // Extensions to try, in order of preference
  const extensions = [".png", ".jpg", ".jpeg", ".webp", ".svg", ".avif", ""];

  // Try each extension
  for (const ext of extensions) {
    const url = `/assets/images/individuais/empresas/${formattedName}${ext}`;
    const exists = await checkImageExists(url);

    if (exists) {
      // Cache the working extension for future use
      imageExtensionCache[formattedName] = ext;
      return url;
    }
  }
  // Check if we already found a working extension for this company
  if (imageExtensionCache[formattedName]) {
    return `/assets/images/individuais/empresas/${formattedName}${imageExtensionCache[formattedName]}`;
  }
  // If no image is found, return a default path
  return "";
};

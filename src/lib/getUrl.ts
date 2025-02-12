export function getUrl(path?: string){
    const baseurl = process.env.NEXT_PUBLIC_APP_URL || ""
    const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path || ""
    return `${baseurl}${normalizedPath}`
}
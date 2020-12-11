export function isAuthenticated() { 
    const jwt = localStorage.getItem('token');
    return jwt != null;
}
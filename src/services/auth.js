class Auth {
    static getToken() {
        return localStorage.getItem('token');
    }

    static isAuthenticated() { 
        const jwt = this.getToken();
        return jwt != null;
    }

    static removeToken() { 
        localStorage.removeItem('token');
    }
}

export default Auth;
export const fetchUser = () => {
    const userInfoStr = localStorage.getItem('user') as string;
    if (!userInfoStr) localStorage.clear();
    const userInfo = JSON.parse(userInfoStr);
    return userInfo
}
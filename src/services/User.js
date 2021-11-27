function User () {
    this.username = 'adsf';
    this.passwd = null;
    this.logged = null;

    this.login = async ({ username, passwd }) => {

        //ten request powinien dotyczyć danego usera! -> backend
        const res = await fetch("http://localhost:5000/users");
        const data = await res.json();

        //to powinno się dziać na serwerzpasswde! -> backend
        const getUser = new Promise((resolve, reject) => {
            const userData = data.filter((el) => el?.username === username && el?.passwd === passwd)[0];
            typeof userData !== undefined ? resolve(userData) : resolve(false); 
        });

        const fillUser = new Promise ((resolve) => {
            this.username = username;
            this.passwd = passwd;
            this.logged = true;
            resolve (this);
        })

        const userData = await getUser;
        if (userData) {
            await fillUser;
            // console.log(user.username);
            return true;
        }
        else return false;
        
        


        // tu trzeba promisa zrobić, żeby czekało
        // await user !== undefined && this.fill({ username, passwd });
        // return (user !== undefined) ? true : false;
        // console.log(logged)
        // return logged;

    } 
    this.logout = () => {
        return
    }
    this.fill =  ({ username, passwd }) => {
        const fillUser = new Promise ((resolve) => {
            this.username = username;
            this.passwd = passwd;
            this.logged = true;
            resolve (this);
        })
        return fillUser;
    }
}

export default User;
import{Images} from 'smmit/dist/image'

class User{
    avatar:Images
    constructor(
        public name:string,
        avatarUrl:string
    ){
    this.avatar =new Images(avatarUrl)
    }
}

export {User}
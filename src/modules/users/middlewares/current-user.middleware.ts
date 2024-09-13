import { Injectable, NestMiddleware } from "@nestjs/common";
import { UsersService } from "../services/users.service";

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
    constructor(private userService: UsersService){}
    
    async use(req: any, res: any, next: (error?: Error | any) => void) {
        const {userId} = req.session;;

        if (userId) {
            const currentUser = await this.userService.findOne(userId);
            req.currentUser = currentUser;
        }

        next();
    }

}